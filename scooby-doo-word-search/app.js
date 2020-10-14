var Utils;
(function (Utils) {
    var AssetLoader = (function () {
        function AssetLoader(_lang, _aFileData, _ctx, _canvasWidth, _canvasHeight, _showBar) {
            if (typeof _showBar === "undefined") { _showBar = true; }
            this.oAssetData = {
            };
            this.assetsLoaded = 0;
            this.textData = {
            };
            this.scale = 1;
            this.frameInc = 0;
            this.fps = 15;
            this.curFrame = 0;
            this.aPreloaderAnim = new Array({
                frame: {
                    x: 270,
                    y: 818,
                    w: 264,
                    h: 204
                },
                rotated: false,
                trimmed: true,
                spriteSourceSize: {
                    x: 76,
                    y: 264,
                    w: 264,
                    h: 204
                },
                sourceSize: {
                    w: 525,
                    h: 500
                }
            }, {
                frame: {
                    x: 448,
                    y: 2,
                    w: 264,
                    h: 334
                },
                rotated: false,
                trimmed: true,
                spriteSourceSize: {
                    x: 76,
                    y: 130,
                    w: 264,
                    h: 334
                },
                sourceSize: {
                    w: 525,
                    h: 500
                }
            }, {
                frame: {
                    x: 2,
                    y: 2,
                    w: 444,
                    h: 426
                },
                rotated: false,
                trimmed: true,
                spriteSourceSize: {
                    x: 78,
                    y: 38,
                    w: 444,
                    h: 426
                },
                sourceSize: {
                    w: 525,
                    h: 500
                }
            }, {
                frame: {
                    x: 714,
                    y: 2,
                    w: 266,
                    h: 310
                },
                rotated: false,
                trimmed: true,
                spriteSourceSize: {
                    x: 72,
                    y: 154,
                    w: 266,
                    h: 310
                },
                sourceSize: {
                    w: 525,
                    h: 500
                }
            }, {
                frame: {
                    x: 2,
                    y: 430,
                    w: 332,
                    h: 386
                },
                rotated: false,
                trimmed: true,
                spriteSourceSize: {
                    x: 4,
                    y: 78,
                    w: 332,
                    h: 386
                },
                sourceSize: {
                    w: 525,
                    h: 500
                }
            }, {
                frame: {
                    x: 448,
                    y: 2,
                    w: 264,
                    h: 334
                },
                rotated: false,
                trimmed: true,
                spriteSourceSize: {
                    x: 76,
                    y: 130,
                    w: 264,
                    h: 334
                },
                sourceSize: {
                    w: 525,
                    h: 500
                }
            }, {
                frame: {
                    x: 868,
                    y: 406,
                    w: 264,
                    h: 290
                },
                rotated: false,
                trimmed: true,
                spriteSourceSize: {
                    x: 76,
                    y: 174,
                    w: 264,
                    h: 290
                },
                sourceSize: {
                    w: 525,
                    h: 500
                }
            }, {
                frame: {
                    x: 336,
                    y: 430,
                    w: 264,
                    h: 338
                },
                rotated: false,
                trimmed: true,
                spriteSourceSize: {
                    x: 76,
                    y: 126,
                    w: 264,
                    h: 338
                },
                sourceSize: {
                    w: 525,
                    h: 500
                }
            }, {
                frame: {
                    x: 982,
                    y: 2,
                    w: 264,
                    h: 282
                },
                rotated: false,
                trimmed: true,
                spriteSourceSize: {
                    x: 76,
                    y: 182,
                    w: 264,
                    h: 282
                },
                sourceSize: {
                    w: 525,
                    h: 500
                }
            }, {
                frame: {
                    x: 602,
                    y: 406,
                    w: 264,
                    h: 302
                },
                rotated: false,
                trimmed: true,
                spriteSourceSize: {
                    x: 76,
                    y: 162,
                    w: 264,
                    h: 302
                },
                sourceSize: {
                    w: 525,
                    h: 500
                }
            });
            this.aPreloaderBar = new Array({
                frame: {
                    x: 868,
                    y: 698,
                    w: 490,
                    h: 66
                },
                rotated: false,
                trimmed: true,
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 490,
                    h: 66
                },
                sourceSize: {
                    w: 491,
                    h: 66
                }
            }, {
                frame: {
                    x: 536,
                    y: 770,
                    w: 492,
                    h: 66
                },
                rotated: false,
                trimmed: true,
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 492,
                    h: 66
                },
                sourceSize: {
                    w: 491,
                    h: 66
                }
            }, {
                frame: {
                    x: 448,
                    y: 338,
                    w: 492,
                    h: 66
                },
                rotated: false,
                trimmed: true,
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: 492,
                    h: 66
                },
                sourceSize: {
                    w: 491,
                    h: 66
                }
            });
            this.jsonData = new Utils.JSONData();
            this.totalAssets = _aFileData.length;
            this.showBar = _showBar;
            this.textData.langText = this.jsonData.textData;
            this.textData.levelText = this.jsonData.levelData;
            this.textData.fontData0 = this.jsonData.font0Data;
            for(var i = 0; i < _aFileData.length; i++) {
                if(_aFileData[i].file.indexOf(".json") != -1) {
                    this.loadJSON(_aFileData[i]);
                } else {
                    this.loadImage(_aFileData[i]);
                }
            }
            if(_showBar) {
                this.oLoaderImgData = preAssetLib.getData("loader");
            }
        }
        AssetLoader.prototype.render = function () {
            ctx.fillStyle = "#872f87";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            this.frameInc += this.fps * delta;
            var idx = Math.floor(this.frameInc);
            this.curFrame = Math.min(idx, this.aPreloaderAnim.length - 1);
            var tempScale = .7;
            var bX = this.aPreloaderAnim[this.curFrame].frame.x;
            var bY = this.aPreloaderAnim[this.curFrame].frame.y;
            var bWidth = this.aPreloaderAnim[this.curFrame].frame.w;
            var bHeight = this.aPreloaderAnim[this.curFrame].frame.h;
            ctx.drawImage(this.oLoaderImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + (this.aPreloaderAnim[this.curFrame].spriteSourceSize.x * tempScale) - 140, canvas.height / 2 + (this.aPreloaderAnim[this.curFrame].spriteSourceSize.y * tempScale) - 300, bWidth * tempScale, bHeight * tempScale);
            var bX = this.aPreloaderBar[1].frame.x;
            var bY = this.aPreloaderBar[1].frame.y;
            var bWidth = this.aPreloaderBar[1].frame.w;
            var bHeight = this.aPreloaderBar[1].frame.h;
            tempScale = .7;
            ctx.drawImage(this.oLoaderImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale, canvas.height / 2 + 70, bWidth * tempScale, bHeight * tempScale);
            var bX = this.aPreloaderBar[0].frame.x;
            var bY = this.aPreloaderBar[0].frame.y;
            var bWidth = this.aPreloaderBar[0].frame.w;
            var bHeight = this.aPreloaderBar[0].frame.h;
            ctx.drawImage(this.oLoaderImgData.img, bX, bY, Math.max((bWidth / this.totalAssets) * this.assetsLoaded, 1), bHeight, canvas.width / 2 - (bWidth / 2) * tempScale, canvas.height / 2 + 70, Math.max((bWidth / this.totalAssets) * this.assetsLoaded, 1) * tempScale, bHeight * tempScale);
            var bX = this.aPreloaderBar[2].frame.x;
            var bY = this.aPreloaderBar[2].frame.y;
            var bWidth = this.aPreloaderBar[2].frame.w;
            var bHeight = this.aPreloaderBar[2].frame.h;
            ctx.drawImage(this.oLoaderImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale, canvas.height / 2 + 70, bWidth * tempScale, bHeight * tempScale);
        };
        AssetLoader.prototype.displayNumbers = function () {
            ctx.textAlign = "left";
            ctx.font = "bold 40px arial";
            ctx.fillStyle = "#ffffff";
            ctx.fillText(Math.round((this.assetsLoaded / this.totalAssets) * 100) + "%", canvas.width / 2 + 0, canvas.height / 2 + 51);
        };
        AssetLoader.prototype.loadExtraAssets = function (_callback, _aFileData) {
            this.showBar = false;
            this.totalAssets = _aFileData.length;
            this.assetsLoaded = 0;
            this.loadedCallback = _callback;
            for(var i = 0; i < _aFileData.length; i++) {
                if(_aFileData[i].file.indexOf(".json") != -1) {
                    this.loadJSON(_aFileData[i]);
                } else {
                    this.loadImage(_aFileData[i]);
                }
            }
        };
        AssetLoader.prototype.loadJSON = function (_oData) {
            var _this = this;
            var xobj = new XMLHttpRequest();
            xobj.open('GET', _oData.file, true);
            xobj.onreadystatechange = function () {
                if(xobj.readyState == 4 && xobj.status == 200) {
                    _this.textData[_oData.id] = JSON.parse(xobj.responseText);
                    ++_this.assetsLoaded;
                    _this.checkLoadComplete();
                }
            };
            xobj.send(null);
        };
        AssetLoader.prototype.loadImage = function (_oData) {
            var _this = this;
            var img = new Image();
            img.onload = function () {
                _this.oAssetData[_oData.id] = {
                };
                _this.oAssetData[_oData.id].img = img;
                _this.oAssetData[_oData.id].oData = {
                };
                var aSpriteSize = _this.getSpriteSize(_oData.file);
                if(aSpriteSize[0] != 0) {
                    _this.oAssetData[_oData.id].oData.spriteWidth = aSpriteSize[0];
                    _this.oAssetData[_oData.id].oData.spriteHeight = aSpriteSize[1];
                } else {
                    _this.oAssetData[_oData.id].oData.spriteWidth = _this.oAssetData[_oData.id].img.width;
                    _this.oAssetData[_oData.id].oData.spriteHeight = _this.oAssetData[_oData.id].img.height;
                }
                if(_oData.oAnims) {
                    _this.oAssetData[_oData.id].oData.oAnims = _oData.oAnims;
                }
                if(_oData.oAtlasData) {
                    _this.oAssetData[_oData.id].oData.oAtlasData = _oData.oAtlasData;
                } else {
                    _this.oAssetData[_oData.id].oData.oAtlasData = {
                        none: {
                            x: 0,
                            y: 0,
                            width: _this.oAssetData[_oData.id].oData.spriteWidth,
                            height: _this.oAssetData[_oData.id].oData.spriteHeight
                        }
                    };
                }
                ++_this.assetsLoaded;
                _this.checkLoadComplete();
            };
            img.src = _oData.file;
        };
        AssetLoader.prototype.getSpriteSize = function (_file) {
            var aNew = new Array();
            var sizeY = "";
            var sizeX = "";
            var stage = 0;
            var inc = _file.lastIndexOf(".");
            var canCont = true;
            while(canCont) {
                inc--;
                if(stage == 0 && this.isNumber(_file.charAt(inc))) {
                    sizeY = _file.charAt(inc) + sizeY;
                } else if(stage == 0 && sizeY.length > 0 && _file.charAt(inc) == "x") {
                    inc--;
                    stage = 1;
                    sizeX = _file.charAt(inc) + sizeX;
                } else if(stage == 1 && this.isNumber(_file.charAt(inc))) {
                    sizeX = _file.charAt(inc) + sizeX;
                } else if(stage == 1 && sizeX.length > 0 && _file.charAt(inc) == "_") {
                    canCont = false;
                    aNew = [
                        parseInt(sizeX), 
                        parseInt(sizeY)
                    ];
                } else {
                    canCont = false;
                    aNew = [
                        0, 
                        0
                    ];
                }
            }
            return aNew;
        };
        AssetLoader.prototype.isNumber = function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };
        AssetLoader.prototype.checkLoadComplete = function () {
            if(this.assetsLoaded == this.totalAssets) {
                this.loadedCallback();
            }
        };
        AssetLoader.prototype.onReady = function (_func) {
            this.loadedCallback = _func;
        };
        AssetLoader.prototype.getImg = function (_id) {
            return this.oAssetData[_id].img;
        };
        AssetLoader.prototype.getData = function (_id) {
            return this.oAssetData[_id];
        };
        return AssetLoader;
    })();
    Utils.AssetLoader = AssetLoader;    
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var AnimSprite = (function () {
        function AnimSprite(_oImgData, _fps, _radius, _animId) {
            this.x = 0;
            this.y = 0;
            this.rotation = 0;
            this.radius = 10;
            this.removeMe = false;
            this.frameInc = 0;
            this.animType = "loop";
            this.offsetX = 0;
            this.offsetY = 0;
            this.scaleX = 1;
            this.scaleY = 1;
            this.alpha = 1;
            this.oImgData = _oImgData;
            this.oAnims = this.oImgData.oData.oAnims;
            this.fps = _fps;
            this.radius = _radius;
            this.animId = _animId;
            this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2);
            this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2);
        }
        AnimSprite.prototype.updateAnimation = function (_delta) {
            this.frameInc += this.fps * _delta;
        };
        AnimSprite.prototype.changeImgData = function (_newImgData, _animId) {
            this.oImgData = _newImgData;
            this.oAnims = this.oImgData.oData.oAnims;
            this.animId = _animId;
            this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2);
            this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2);
            this.resetAnim();
        };
        AnimSprite.prototype.resetAnim = function () {
            this.frameInc = 0;
        };
        AnimSprite.prototype.setFrame = function (_frameNum) {
            this.fixedFrame = _frameNum;
        };
        AnimSprite.prototype.setAnimType = function (_type, _animId, _reset) {
            if (typeof _reset === "undefined") { _reset = true; }
            this.animId = _animId;
            this.animType = _type;
            if(_reset) {
                this.resetAnim();
            }
            switch(_type) {
                case "loop":
                    break;
                case "once":
                    this.maxIdx = this.oAnims[this.animId].length - 1;
                    break;
            }
        };
        AnimSprite.prototype.render = function (_ctx) {
            _ctx.save();
            _ctx.translate(this.x, this.y);
            _ctx.rotate(this.rotation);
            _ctx.scale(this.scaleX, this.scaleY);
            _ctx.globalAlpha = this.alpha;
            if(this.animId != null) {
                var max = this.oAnims[this.animId].length;
                var idx = Math.floor(this.frameInc);
                this.curFrame = this.oAnims[this.animId][idx % max];
                var imgX = (this.curFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(this.curFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if(this.animType == "once") {
                    if(idx > this.maxIdx) {
                        this.fixedFrame = this.oAnims[this.animId][max - 1];
                        this.animId = null;
                        if(this.animEndedFunc != null) {
                            this.animEndedFunc();
                        }
                        var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                        var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                    }
                }
            } else {
                var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            }
            _ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.centreX + this.offsetX, -this.centreY + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight);
            _ctx.restore();
        };
        AnimSprite.prototype.renderSimple = function (_ctx) {
            if(this.animId != null) {
                var max = this.oAnims[this.animId].length;
                var idx = Math.floor(this.frameInc);
                this.curFrame = this.oAnims[this.animId][idx % max];
                var imgX = (this.curFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(this.curFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if(this.animType == "once") {
                    if(idx > this.maxIdx) {
                        this.fixedFrame = this.oAnims[this.animId][max - 1];
                        this.animId = null;
                        if(this.animEndedFunc != null) {
                            this.animEndedFunc();
                        }
                        var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                        var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                    }
                }
            } else {
                var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            }
            _ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, this.x - (this.centreX - this.offsetX) * this.scaleX, this.y - (this.centreY - this.offsetY) * this.scaleY, this.oImgData.oData.spriteWidth * this.scaleX, this.oImgData.oData.spriteHeight * this.scaleY);
        };
        return AnimSprite;
    })();
    Utils.AnimSprite = AnimSprite;    
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var BasicSprite = (function () {
        function BasicSprite(_oImgData, _radius, _frame) {
            if (typeof _frame === "undefined") { _frame = 0; }
            this.x = 0;
            this.y = 0;
            this.rotation = 0;
            this.radius = 10;
            this.removeMe = false;
            this.offsetX = 0;
            this.offsetY = 0;
            this.scaleX = 1;
            this.scaleY = 1;
            this.oImgData = _oImgData;
            this.radius = _radius;
            this.setFrame(_frame);
        }
        BasicSprite.prototype.setFrame = function (_frameNum) {
            this.frameNum = _frameNum;
        };
        BasicSprite.prototype.render = function (_ctx) {
            _ctx.save();
            _ctx.translate(this.x, this.y);
            _ctx.rotate(this.rotation);
            _ctx.scale(this.scaleX, this.scaleY);
            var imgX = (this.frameNum * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
            var imgY = Math.floor(this.frameNum / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            _ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2 + this.offsetX, -this.oImgData.oData.spriteHeight / 2 + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight);
            _ctx.restore();
        };
        return BasicSprite;
    })();
    Utils.BasicSprite = BasicSprite;    
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var UserInput = (function () {
        function UserInput(_canvas, _isBugBrowser) {
            var _this = this;
            this.prevHitTime = 0;
            this.pauseIsOn = false;
            this.isDown = false;
            this.isBugBrowser = _isBugBrowser;
            this.keyDownEvtFunc = function (e) {
                _this.keyDown(e);
            };
            this.keyUpEvtFunc = function (e) {
                _this.keyUp(e);
            };
            _canvas.addEventListener("touchstart", function (e) {
                for(var i = 0; i < e.changedTouches.length; i++) {
                    _this.hitDown(e, e.changedTouches[i].pageX, e.changedTouches[i].pageY, e.changedTouches[i].identifier);
                }
            }, false);
            _canvas.addEventListener("touchend", function (e) {
                for(var i = 0; i < e.changedTouches.length; i++) {
                    _this.hitUp(e, e.changedTouches[i].pageX, e.changedTouches[i].pageY, e.changedTouches[i].identifier);
                }
            }, false);
            _canvas.addEventListener("touchcancel", function (e) {
                for(var i = 0; i < e.changedTouches.length; i++) {
                    _this.hitCancel(e, e.changedTouches[i].pageX, e.changedTouches[i].pageY, e.changedTouches[i].identifier);
                }
            }, false);
            _canvas.addEventListener("touchmove", function (e) {
                for(var i = 0; i < e.changedTouches.length; i++) {
                    _this.move(e, e.changedTouches[i].pageX, e.changedTouches[i].pageY, e.changedTouches[i].identifier, true);
                }
            }, false);
            _canvas.addEventListener("mousedown", function (e) {
                _this.isDown = true;
                _this.hitDown(e, e.pageX, e.pageY, 1);
            }, false);
            _canvas.addEventListener("mouseup", function (e) {
                _this.isDown = false;
                _this.hitUp(e, e.pageX, e.pageY, 1);
            }, false);
            _canvas.addEventListener("mousemove", function (e) {
                _this.move(e, e.pageX, e.pageY, 1, _this.isDown);
            }, false);
            _canvas.addEventListener("mouseout", function (e) {
                _this.isDown = false;
                _this.hitUp(e, Math.abs(e.pageX), Math.abs(e.pageY), 1);
            }, false);
            this.aHitAreas = new Array();
            this.aKeys = new Array();
        }
        UserInput.prototype.hitDown = function (e, _posX, _posY, _identifer) {
            e.preventDefault();
            e.stopPropagation();
            if(!hasFocus) {
                visibleResume();
            }
            if(this.pauseIsOn) {
                return;
            }
            var curHitTime = new Date().getTime();
            _posX *= canvasScale;
            _posY *= canvasScale;
            for(var i = 0; i < this.aHitAreas.length; i++) {
                if(this.aHitAreas[i].rect) {
                    var aX = canvas.width * this.aHitAreas[i].align[0];
                    var aY = canvas.height * this.aHitAreas[i].align[1];
                    if(_posX > aX + this.aHitAreas[i].area[0] && _posY > aY + this.aHitAreas[i].area[1] && _posX < aX + this.aHitAreas[i].area[2] && _posY < aY + this.aHitAreas[i].area[3]) {
                        this.aHitAreas[i].aTouchIdentifiers.push(_identifer);
                        this.aHitAreas[i].oData.hasLeft = false;
                        if(!this.aHitAreas[i].oData.isDown) {
                            this.aHitAreas[i].oData.isDown = true;
                            this.aHitAreas[i].oData.x = _posX;
                            this.aHitAreas[i].oData.y = _posY;
                            if((curHitTime - this.prevHitTime < 500 && (gameState != "game" || this.aHitAreas[i].id == "pause")) && isBugBrowser) {
                                return;
                            }
                            this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                        }
                        break;
                    }
                } else {
                }
            }
            this.prevHitTime = curHitTime;
        };
        UserInput.prototype.hitUp = function (e, _posX, _posY, _identifer) {
            if(!ios9FirstTouch) {
                playSound("silence");
                ios9FirstTouch = true;
            }
            if(this.pauseIsOn) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            _posX *= canvasScale;
            _posY *= canvasScale;
            for(var i = 0; i < this.aHitAreas.length; i++) {
                if(this.aHitAreas[i].rect) {
                    var aX = canvas.width * this.aHitAreas[i].align[0];
                    var aY = canvas.height * this.aHitAreas[i].align[1];
                    if(_posX > aX + this.aHitAreas[i].area[0] && _posY > aY + this.aHitAreas[i].area[1] && _posX < aX + this.aHitAreas[i].area[2] && _posY < aY + this.aHitAreas[i].area[3]) {
                        for(var j = 0; j < this.aHitAreas[i].aTouchIdentifiers.length; j++) {
                            if(this.aHitAreas[i].aTouchIdentifiers[j] == _identifer) {
                                this.aHitAreas[i].aTouchIdentifiers.splice(j, 1);
                                j -= 1;
                            }
                        }
                        if(this.aHitAreas[i].aTouchIdentifiers.length == 0) {
                            this.aHitAreas[i].oData.isDown = false;
                            if(this.aHitAreas[i].oData.multiTouch) {
                                this.aHitAreas[i].oData.x = _posX;
                                this.aHitAreas[i].oData.y = _posY;
                                this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                            }
                        }
                        break;
                    }
                } else {
                }
            }
        };
        UserInput.prototype.hitCancel = function (e, _posX, _posY, _identifer) {
            e.preventDefault();
            e.stopPropagation();
            _posX *= canvasScale;
            _posY *= canvasScale;
            for(var i = 0; i < this.aHitAreas.length; i++) {
                if(this.aHitAreas[i].oData.isDown) {
                    this.aHitAreas[i].oData.isDown = false;
                    this.aHitAreas[i].aTouchIdentifiers = new Array();
                    if(this.aHitAreas[i].oData.multiTouch) {
                        this.aHitAreas[i].oData.x = _posX;
                        this.aHitAreas[i].oData.y = _posY;
                        this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                    }
                }
            }
        };
        UserInput.prototype.move = function (e, _posX, _posY, _identifer, _isDown) {
            if(this.pauseIsOn) {
                return;
            }
            if(_isDown) {
                _posX *= canvasScale;
                _posY *= canvasScale;
                for(var i = 0; i < this.aHitAreas.length; i++) {
                    if(this.aHitAreas[i].rect) {
                        var aX = canvas.width * this.aHitAreas[i].align[0];
                        var aY = canvas.height * this.aHitAreas[i].align[1];
                        if(_posX > aX + this.aHitAreas[i].area[0] && _posY > aY + this.aHitAreas[i].area[1] && _posX < aX + this.aHitAreas[i].area[2] && _posY < aY + this.aHitAreas[i].area[3]) {
                            this.aHitAreas[i].oData.hasLeft = false;
                            if(this.aHitAreas[i].oData.isDraggable && !this.aHitAreas[i].oData.isDown) {
                                this.aHitAreas[i].oData.isDown = true;
                                this.aHitAreas[i].oData.x = _posX;
                                this.aHitAreas[i].oData.y = _posY;
                                this.aHitAreas[i].aTouchIdentifiers.push(_identifer);
                                if(this.aHitAreas[i].oData.multiTouch) {
                                    this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                                }
                            }
                            if(this.aHitAreas[i].oData.isDraggable) {
                                this.aHitAreas[i].oData.isBeingDragged = true;
                                this.aHitAreas[i].oData.x = _posX;
                                this.aHitAreas[i].oData.y = _posY;
                                this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                                if(this.aHitAreas[i]) {
                                    this.aHitAreas[i].oData.isBeingDragged = false;
                                }
                            }
                        } else if(this.aHitAreas[i].oData.isDown && !this.aHitAreas[i].oData.hasLeft) {
                            for(var j = 0; j < this.aHitAreas[i].aTouchIdentifiers.length; j++) {
                                if(this.aHitAreas[i].aTouchIdentifiers[j] == _identifer) {
                                    this.aHitAreas[i].aTouchIdentifiers.splice(j, 1);
                                    j -= 1;
                                }
                            }
                            if(this.aHitAreas[i].aTouchIdentifiers.length == 0) {
                                this.aHitAreas[i].oData.hasLeft = true;
                                if(!this.aHitAreas[i].oData.isBeingDragged) {
                                    this.aHitAreas[i].oData.isDown = false;
                                }
                                if(this.aHitAreas[i].oData.multiTouch) {
                                    this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                                }
                            }
                        }
                    }
                }
            }
        };
        UserInput.prototype.keyDown = function (e) {
            for(var i = 0; i < this.aKeys.length; i++) {
                if(e.keyCode == this.aKeys[i].keyCode) {
                    this.aKeys[i].oData.isDown = true;
                    this.aKeys[i].callback(this.aKeys[i].id, this.aKeys[i].oData);
                }
            }
        };
        UserInput.prototype.keyUp = function (e) {
            for(var i = 0; i < this.aKeys.length; i++) {
                if(e.keyCode == this.aKeys[i].keyCode) {
                    this.aKeys[i].oData.isDown = false;
                    this.aKeys[i].callback(this.aKeys[i].id, this.aKeys[i].oData);
                }
            }
        };
        UserInput.prototype.checkKeyFocus = function () {
            window.focus();
            if(this.aKeys.length > 0) {
                window.removeEventListener('keydown', this.keyDownEvtFunc, false);
                window.removeEventListener('keyup', this.keyUpEvtFunc, false);
                window.addEventListener('keydown', this.keyDownEvtFunc, false);
                window.addEventListener('keyup', this.keyUpEvtFunc, false);
            }
        };
        UserInput.prototype.addKey = function (_id, _callback, _oCallbackData, _keyCode) {
            if(_oCallbackData == null) {
                _oCallbackData = new Object();
            }
            this.aKeys.push({
                id: _id,
                callback: _callback,
                oData: _oCallbackData,
                keyCode: _keyCode
            });
            this.checkKeyFocus();
        };
        UserInput.prototype.removeKey = function (_id) {
            for(var i = 0; i < this.aKeys.length; i++) {
                if(this.aKeys[i].id == _id) {
                    this.aKeys.splice(i, 1);
                    i -= 1;
                }
            }
        };
        UserInput.prototype.addHitArea = function (_id, _callback, _oCallbackData, _type, _oAreaData, _isUnique) {
            if (typeof _isUnique === "undefined") { _isUnique = false; }
            if(_oCallbackData == null) {
                _oCallbackData = new Object();
            }
            if(_isUnique) {
                this.removeHitArea(_id);
            }
            if(!_oAreaData.scale) {
                _oAreaData.scale = 1;
            }
            if(!_oAreaData.align) {
                _oAreaData.align = [
                    0, 
                    0
                ];
            }
            var aTouchIdentifiers = new Array();
            switch(_type) {
                case "image":
                    var aRect;
                    aRect = new Array(_oAreaData.aPos[0] - (_oAreaData.oImgData.oData.oAtlasData[_oAreaData.id].width / 2) * _oAreaData.scale, _oAreaData.aPos[1] - (_oAreaData.oImgData.oData.oAtlasData[_oAreaData.id].height / 2) * _oAreaData.scale, _oAreaData.aPos[0] + (_oAreaData.oImgData.oData.oAtlasData[_oAreaData.id].width / 2) * _oAreaData.scale, _oAreaData.aPos[1] + (_oAreaData.oImgData.oData.oAtlasData[_oAreaData.id].height / 2) * _oAreaData.scale);
                    this.aHitAreas.push({
                        id: _id,
                        aTouchIdentifiers: aTouchIdentifiers,
                        callback: _callback,
                        oData: _oCallbackData,
                        rect: true,
                        area: aRect,
                        align: _oAreaData.align
                    });
                    break;
                case "rect":
                    this.aHitAreas.push({
                        id: _id,
                        aTouchIdentifiers: aTouchIdentifiers,
                        callback: _callback,
                        oData: _oCallbackData,
                        rect: true,
                        area: _oAreaData.aRect,
                        align: _oAreaData.align
                    });
                    break;
            }
        };
        UserInput.prototype.removeHitArea = function (_id) {
            for(var i = 0; i < this.aHitAreas.length; i++) {
                if(this.aHitAreas[i].id == _id) {
                    this.aHitAreas.splice(i, 1);
                    i -= 1;
                }
            }
        };
        UserInput.prototype.resetAll = function () {
            for(var i = 0; i < this.aHitAreas.length; i++) {
                this.aHitAreas[i].oData.isDown = false;
                this.aHitAreas[i].oData.isBeingDragged = false;
                this.aHitAreas[i].aTouchIdentifiers = new Array();
            }
            this.isDown = false;
        };
        return UserInput;
    })();
    Utils.UserInput = UserInput;    
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var FpsMeter = (function () {
        function FpsMeter() {
            this.updateFreq = 10;
            this.updateInc = 0;
            this.frameAverage = 0;
            this.display = 1;
            this.log = "";
            this.render = function () {
                this.frameAverage += delta / this.updateFreq;
                if(++this.updateInc >= this.updateFreq) {
                    this.updateInc = 0;
                    this.display = this.frameAverage;
                    this.frameAverage = 0;
                }
                ctx.textAlign = "left";
                ctx.font = "20px Helvetica";
                ctx.fillStyle = "#333333";
                ctx.beginPath();
                ctx.rect(0, canvas.height - 28, 70, 28);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = "#ffffff";
                ctx.fillText(Math.round(1000 / (this.display * 1000)) + " fps " + this.log, 5, canvas.height - 5);
            };
        }
        return FpsMeter;
    })();
    Utils.FpsMeter = FpsMeter;    
})(Utils || (Utils = {}));
var Elements;
(function (Elements) {
    var Background = (function () {
        function Background() {
            this.x = 0;
            this.y = 0;
            this.targY = 0;
            this.incY = 0;
            if(gameState == "game") {
                this.oImgData = assetLib.getData("bg" + changeBgId);
            } else if(gameState == "gameComplete") {
                this.oImgData = assetLib.getData("bgComplete");
            } else {
                this.oImgData = assetLib.getData("bgMain");
            }
        }
        Background.prototype.render = function () {
            if(canvas.width > canvas.height) {
                ctx.drawImage(this.oImgData.img, 0, ((1 - canvas.height / canvas.width) / 2) * this.oImgData.img.height, this.oImgData.img.width, (canvas.height / canvas.width) * this.oImgData.img.height, 0, 0, canvas.width, canvas.height);
            } else {
                ctx.drawImage(this.oImgData.img, ((1 - canvas.width / canvas.height) / 2) * this.oImgData.img.width, 0, (canvas.width / canvas.height) * this.oImgData.img.width, this.oImgData.img.width, 0, 0, canvas.width, canvas.height);
            }
        };
        return Background;
    })();
    Elements.Background = Background;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Splash = (function () {
        function Splash(_oSplashScreenImgData, _canvasWidth, _canvasHeight) {
            this.inc = 0;
            this.oSplashScreenImgData = _oSplashScreenImgData;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            this.posY = -this.canvasHeight;
            TweenLite.to(this, .5, {
                posY: 0
            });
        }
        Splash.prototype.render = function () {
            this.inc += 5 * delta;
            ctx.drawImage(this.oSplashScreenImgData.img, 0, 0 - this.posY);
        };
        return Splash;
    })();
    Elements.Splash = Splash;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Panel = (function () {
        function Panel(_panelType, _aButs) {
            this.timer = .3;
            this.endTime = 0;
            this.posY = 0;
            this.numberSpace = 17;
            this.incY = 0;
            this.wordListScale = 1;
            this.starY0 = 0;
            this.starY1 = 0;
            this.starY2 = 0;
            this.totalWords = 8;
            this.oTitleImgData = assetLib.getData("title");
            this.oPanelsImgData = assetLib.getData("panels");
            this.oUiElementsImgData = assetLib.getData("uiElements");
            this.oUiButsImgData = assetLib.getData("uiButs");
            this.oNumbersImgData = assetLib.getData("numbers");
            this.panelType = _panelType;
            this.aButs = _aButs;
            this.aJiggle = new Array();
            for(var i = 0; i < gridSize; i++) {
                this.aJiggle[i] = new Array();
                for(var j = 0; j < gridSize; j++) {
                    this.aJiggle[i][j] = {
                        inc: 0,
                        dist: 0,
                        vx: 0,
                        vy: 0
                    };
                }
            }
        }
        Panel.prototype.update = function () {
            this.incY += 10 * delta;
        };
        Panel.prototype.startTween1 = function () {
            this.posY = 550;
            TweenLite.to(this, .8, {
                posY: 0,
                ease: "Back.easeOut"
            });
            this.butsY = 500;
            TweenLite.to(this, .5, {
                butsY: 0,
                ease: "Cubic.easeOut"
            });
        };
        Panel.prototype.startTween2 = function () {
            this.posY = 500;
            TweenLite.to(this, .5, {
                posY: 0,
                ease: "Cubic.easeOut"
            });
            this.butsY = 500;
            TweenLite.to(this, .5, {
                butsY: 0,
                ease: "Cubic.easeOut"
            });
        };
        Panel.prototype.startTween3 = function () {
            this.starY0 = -50;
            TweenLite.to(this, 1, {
                starY0: 0,
                ease: "Bounce.easeOut"
            });
            this.starY1 = -50;
            TweenLite.to(this, 1, {
                starY1: 0,
                delay: .1,
                ease: "Bounce.easeOut"
            });
            this.starY2 = -50;
            TweenLite.to(this, 1, {
                starY2: 0,
                delay: .2,
                ease: "Bounce.easeOut"
            });
            this.butsY = 500;
            TweenLite.to(this, .5, {
                butsY: 0,
                ease: "Cubic.easeOut"
            });
        };
        Panel.prototype.setJiggle = function (_x, _y) {
            for(var i = 0; i < gridSize; i++) {
                this.aJiggle[i] = new Array();
                for(var j = 0; j < gridSize; j++) {
                    var tempX = gridData.x + i * (gridData.width / gridSize) + gridData.width / 20;
                    var tempY = gridData.y + j * (gridData.width / gridSize) + gridData.width / 20;
                    var distance_squared = (((_x - tempX) * (_x - tempX)) + ((_y - tempY) * (_y - tempY)));
                    var hitAngle = Math.atan2(_y - tempY, _x - tempX);
                    var hitDist = (Math.max(60000 - distance_squared, 0)) / 700;
                    this.aJiggle[i][j] = {
                        inc: 0,
                        dist: hitDist / 2.5,
                        vx: hitDist * Math.cos(hitAngle),
                        vy: hitDist * Math.sin(hitAngle)
                    };
                }
            }
        };
        Panel.prototype.convertTime = function (_time) {
            var mins = Math.floor(_time / 6000).toString();
            var secs = (Math.floor(_time / 100) - Math.floor(_time / 6000) * 60).toString();
            if(secs.length < 2) {
                secs = "0" + secs;
            }
            return mins + ":" + secs;
        };
        Panel.prototype.convertTimeHundredths = function (_time) {
            var mins = Math.floor(_time / 6000).toString();
            var secs = (Math.floor(_time / 100) - Math.floor(_time / 6000) * 60).toString();
            var hundredths = (_time - ((Math.floor(_time / 6000) * 6000) + (Math.floor(_time / 100) - Math.floor(_time / 6000) * 60) * 100)).toString();
            if(secs.length < 2) {
                secs = "0" + secs;
            }
            if(hundredths.length < 2) {
                hundredths = "0" + hundredths;
            }
            return mins + ":" + secs + ":" + hundredths;
        };
        Panel.prototype.render = function (_butsOnTop) {
            if (typeof _butsOnTop === "undefined") { _butsOnTop = true; }
            if(!_butsOnTop) {
                this.addButs(ctx);
            }
            switch(this.panelType) {
                case "splash":
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.credits].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.credits].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.credits].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.credits].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 - this.posY, canvas.height / 2 - bHeight / 2, bWidth, bHeight);
                    break;
                case "startSettings":
                    var oTextDisplayData = {
                        text: "stats0",
                        addedText: " " + oGameData.completedGames + "/" + oGameData.totalGames,
                        oTextData: textDisplay.oGenTextData,
                        x: canvas.width / 2 - 150 + this.posY,
                        y: canvas.height * .2 - 30,
                        alignX: "left",
                        alignY: "centre",
                        scale: .75,
                        maxWidth: canvas.width * .4
                    };
                    textDisplay.renderGenText(oTextDisplayData);
                    var tempAv = this.convertTimeHundredths(oGameData.averageTime);
                    if(isNaN(oGameData.averageTime)) {
                        tempAv = "---";
                    }
                    var oTextDisplayData = {
                        text: "stats1",
                        addedText: " " + tempAv,
                        oTextData: textDisplay.oGenTextData,
                        x: canvas.width / 2 - 150 + this.posY,
                        y: canvas.height * .2,
                        alignX: "left",
                        alignY: "centre",
                        scale: .75,
                        maxWidth: canvas.width * .4
                    };
                    textDisplay.renderGenText(oTextDisplayData);
                    var oTextDisplayData = {
                        text: "stats2",
                        addedText: " " + this.convertTimeHundredths(oGameData.gameTime),
                        oTextData: textDisplay.oGenTextData,
                        x: canvas.width / 2 - 150 + this.posY,
                        y: canvas.height * .2 + 30,
                        alignX: "left",
                        alignY: "centre",
                        scale: .75,
                        maxWidth: canvas.width * .4
                    };
                    textDisplay.renderGenText(oTextDisplayData);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.credits].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.credits].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.credits].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.credits].height;
                    var tempScale = Math.min(1, (canvas.height * .6 - 30) / bHeight);
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale - this.posY, canvas.height * .7 - ((bHeight / 2) * tempScale) - 30, bWidth * tempScale, bHeight * tempScale);
                    break;
                case "start":
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char3].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char3].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char3].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char3].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0 - this.posY, canvas.height / 2 + 20 - Math.sin((this.incY) / 8) * 5, bWidth, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char2].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char2].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char2].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char2].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0 - this.posY, canvas.height / 2 - 250 - Math.sin((this.incY + 10) / 8) * 5, bWidth, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char1].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char1].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char1].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char1].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - bWidth + this.posY, canvas.height / 2 - 200 + Math.sin((this.incY + 10) / 8) * 5, bWidth, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char0].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char0].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char0].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char0].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - bWidth + this.posY, canvas.height / 2 - 10 - Math.sin(this.incY / 8) * 5, bWidth, bHeight);
                    var tempScale = 1;
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallLogo].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallLogo].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallLogo].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallLogo].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale, canvas.height * .6 - 210 - this.posY, bWidth * tempScale, bHeight * tempScale);
                    var tempScale = Math.min((canvas.width - 40) / this.oTitleImgData.img.width, 1);
                    ctx.drawImage(this.oTitleImgData.img, 0, 0, this.oTitleImgData.img.width, this.oTitleImgData.img.height, canvas.width / 2 - (this.oTitleImgData.img.width / 2) * tempScale, canvas.height * .6 - (this.oTitleImgData.img.height / 2) * tempScale - this.posY / 2, this.oTitleImgData.img.width * tempScale, this.oTitleImgData.img.height * tempScale);
                    break;
                case "categorySelect":
                    var oTextDisplayData = {
                        text: "categorySelect",
                        oTextData: textDisplay.oGenTextData,
                        x: canvas.width / 2 + this.posY,
                        y: 27,
                        alignX: "centre",
                        alignY: "centre",
                        scale: 1,
                        maxWidth: canvas.width - (60 + 60)
                    };
                    textDisplay.renderGenText(oTextDisplayData);
                    var butNum = Math.min(textDisplay.categoryTotal, Math.floor((canvas.height - 210) / 80));
                    var butOffsetY = ((canvas.height - 210) - butNum * 80) / 2;
                    for(var i = 0; i < butNum; i++) {
                        var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].x;
                        var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].y;
                        var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].width;
                        var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].height;
                        ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 - (this.posY / (i + 1)), 175 - bHeight / 2 + i * 80 + butOffsetY, bWidth, bHeight);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + ((i + multiButId) % 8)]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + ((i + multiButId) % 8)]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + ((i + multiButId) % 8)]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + ((i + multiButId) % 8)]].height;
                        var butWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].width;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - butWidth / 2 + 9 - (this.posY / (i + 1)), 175 + i * 80 + butOffsetY - 19 - 3, butWidth - 18, bHeight + 6);
                        var oTextDisplayData = {
                            textId: i + multiButId,
                            x: canvas.width / 2 - (this.posY / (i + 1)),
                            y: 175 + i * 80 + butOffsetY,
                            alignX: "centre",
                            alignY: "centre",
                            scale: .75,
                            maxWidth: 400
                        };
                        textDisplay.renderGameTitleText(oTextDisplayData);
                    }
                    if(multiButId > 0 && butNum < textDisplay.categoryTotal) {
                        var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].x;
                        var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].y;
                        var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].width;
                        var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].height;
                        ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 + this.posY, 102 - bHeight / 2, bWidth, bHeight);
                    }
                    if(multiButId < textDisplay.categoryTotal - butNum && butNum < textDisplay.categoryTotal) {
                        var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].x;
                        var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].y;
                        var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].width;
                        var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].height;
                        ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 + this.posY, canvas.height - 40 - bHeight / 2, bWidth, bHeight);
                    }
                    break;
                case "gameSelect":
                    var oTextDisplayData = {
                        textId: categoryId,
                        x: canvas.width / 2 + this.posY,
                        y: 27,
                        alignX: "centre",
                        alignY: "centre",
                        scale: 1,
                        maxWidth: canvas.width - (60 + 60)
                    };
                    textDisplay.renderGameTitleText(oTextDisplayData);
                    var butNum = Math.min(textDisplay.oLevelTextData[categoryId].aGameData.length, Math.floor((canvas.height - 210) / 80));
                    var butOffsetY = ((canvas.height - 210) - butNum * 80) / 2;
                    for(var i = 0; i < butNum; i++) {
                        var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].x;
                        var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].y;
                        var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].width;
                        var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].height;
                        ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 - (this.posY / (i + 1)), 175 - bHeight / 2 + i * 80 + butOffsetY, bWidth, bHeight);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + ((i + multiButId) % 8)]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + ((i + multiButId) % 8)]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + ((i + multiButId) % 8)]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + ((i + multiButId) % 8)]].height;
                        var butWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].width;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - butWidth / 2 + 9 - (this.posY / (i + 1)), 175 + i * 80 + butOffsetY - 19 - 3, butWidth - 18, bHeight + 6);
                        var oTextDisplayData = {
                            text: "level",
                            addedText: " " + (i + 1 + multiButId),
                            oTextData: textDisplay.oGenTextData,
                            x: canvas.width / 2 - 200 - (this.posY / (i + 1)),
                            y: 175 + i * 80 + butOffsetY,
                            alignX: "left",
                            alignY: "centre",
                            scale: .75,
                            maxWidth: 200
                        };
                        textDisplay.renderGenText(oTextDisplayData);
                        var tempTime = saveDataHandler.getTime(categoryId, i + multiButId);
                        if(tempTime == 0) {
                            var oTextDisplayData = {
                                text: "new",
                                oTextData: textDisplay.oGenTextData,
                                x: canvas.width / 2 - (this.posY / (i + 1)),
                                y: 175 + i * 80 + butOffsetY,
                                alignX: "centre",
                                alignY: "centre",
                                scale: .75,
                                maxWidth: 200
                            };
                            textDisplay.renderGenText(oTextDisplayData);
                        } else {
                            var oTextDisplayData = {
                                text: this.convertTimeHundredths(tempTime),
                                x: canvas.width / 2 - 25 - (this.posY / (i + 1)),
                                y: 175 + i * 80 + butOffsetY - 20,
                                alignX: "centre",
                                alignY: "bottom",
                                scale: .75
                            };
                            textDisplay.renderDynamicText(oTextDisplayData);
                        }
                        for(var j = 0; j < 3; j++) {
                            var tempStar = 1;
                            if(tempTime != 0 && tempTime < aStarTimes[2 - j]) {
                                tempStar = 0;
                            }
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["levelStar" + tempStar]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["levelStar" + tempStar]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["levelStar" + tempStar]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["levelStar" + tempStar]].height;
                            var butWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].width;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + butWidth / 2 - 108 - (this.posY / (i + 1)) + j * 30, 175 + i * 80 + butOffsetY - 15, bWidth, bHeight);
                        }
                    }
                    if(multiButId > 0 && butNum < textDisplay.oLevelTextData[categoryId].aGameData.length) {
                        var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].x;
                        var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].y;
                        var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].width;
                        var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].height;
                        ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 + this.posY, 102 - bHeight / 2, bWidth, bHeight);
                    }
                    if(multiButId < textDisplay.oLevelTextData[categoryId].aGameData.length - butNum && butNum < textDisplay.oLevelTextData[categoryId].aGameData.length) {
                        var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].x;
                        var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].y;
                        var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].width;
                        var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].height;
                        ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 + this.posY, canvas.height - 40 - bHeight / 2, bWidth, bHeight);
                    }
                    break;
                case "game":
                    var dWidth = 450 * canvasScale;
                    var dHeight = 450 * canvasScale;
                    var tempScale = 1;
                    if(dWidth > 900) {
                        dWidth = 900;
                        dHeight *= (900 / canvas.width);
                    }
                    var clockX;
                    var clockY;
                    if(canvas.width < canvas.height) {
                        if(canvas.width / canvas.height > .65) {
                            tempScale = .65 / (canvas.width / canvas.height);
                        }
                        gridData.width = (canvas.width * .9) * tempScale;
                        gridData.x = canvas.width / 2 - gridData.width / 2;
                        gridData.y = Math.max(canvas.height * .55 - gridData.width, 60);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.scroll].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.scroll].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.scroll].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.scroll].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, gridData.x + this.posY - 19, gridData.y - 19, gridData.width * 1.1, gridData.width * 1.1);
                        wordLineHandler.update();
                        wordLineHandler.render();
                        if(40 * (this.totalWords / 2) > canvas.height - (gridData.y + gridData.width + 100)) {
                            this.wordListScale = (canvas.height - (gridData.y + gridData.width + 100)) / (40 * (this.totalWords / 2));
                        } else {
                            this.wordListScale = 1;
                        }
                        var tempLineSpace = 40 * this.wordListScale;
                        for(var i = 0; i < Math.round(this.totalWords / 2); i++) {
                            var oTextDisplayData = {
                                textId: i,
                                x: gridData.width / 4 + gridData.x - this.posY,
                                y: i * tempLineSpace + (canvas.height - (gridData.y + gridData.width + 100)) / 2 + (gridData.y + gridData.width) - tempLineSpace * (this.totalWords / 4) + textDisplay.oLevelTextData[categoryId].aGameData[gameId].aWords[i].blockHeight / 2,
                                alignX: "centre",
                                alignY: "centre",
                                scale: 1 * this.wordListScale,
                                maxWidth: gridData.width / 2.5
                            };
                            textDisplay.renderGameText(oTextDisplayData);
                        }
                        for(var i = Math.round(this.totalWords / 2); i < this.totalWords; i++) {
                            var oTextDisplayData = {
                                textId: i,
                                x: (gridData.width / 4) * 3 + gridData.x - this.posY,
                                y: (i - Math.round(this.totalWords / 2)) * tempLineSpace + (canvas.height - (gridData.y + gridData.width + 100)) / 2 + (gridData.y + gridData.width) - tempLineSpace * (this.totalWords / 4) + textDisplay.oLevelTextData[categoryId].aGameData[gameId].aWords[i].blockHeight / 2,
                                alignX: "centre",
                                alignY: "centre",
                                scale: 1 * this.wordListScale,
                                maxWidth: gridData.width / 2.5
                            };
                            textDisplay.renderGameText(oTextDisplayData);
                        }
                        var tempScale = .4;
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallLogo].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallLogo].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallLogo].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallLogo].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - 150 + this.posY, canvas.height - 80, bWidth * tempScale, bHeight * tempScale);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.timeLineVert0].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.timeLineVert0].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.timeLineVert0].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.timeLineVert0].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 - this.posY - 70, canvas.height - 40 - bHeight / 2, bWidth, bHeight);
                        if((aStarTimes[2] - gameTime) / aStarTimes[2] > 0) {
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.timeLineVert1].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.timeLineVert1].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.timeLineVert1].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.timeLineVert1].height;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 - this.posY - 70, canvas.height - 40 - bHeight / 2, bWidth * (aStarTimes[2] - gameTime) / aStarTimes[2], bHeight);
                        }
                        for(var i = 0; i < aStarTimes.length; i++) {
                            var starType = oImageIds.starMarkerVert0;
                            if(gameTime > aStarTimes[i]) {
                                starType = oImageIds.starMarkerVert1;
                            }
                            var bX = this.oUiElementsImgData.oData.oAtlasData[starType].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[starType].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[starType].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[starType].height;
                            var lineWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.timeLineVert0].width;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + lineWidth / 2 - (aStarTimes[i] / aStarTimes[2]) * lineWidth - bWidth / 2 - this.posY - 70, canvas.height - 40 - bHeight, bWidth, bHeight);
                        }
                        clockX = 20;
                        clockY = canvas.height - 35;
                    } else {
                        if(canvas.height / canvas.width > .65) {
                            tempScale = .65 / (canvas.height / canvas.width);
                        }
                        gridData.width = (canvas.height * .9) * tempScale;
                        gridData.x = Math.min(canvas.width * .5, canvas.width - gridData.width - canvas.height * .05);
                        gridData.y = canvas.height / 2 - gridData.width / 2;
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.scroll].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.scroll].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.scroll].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.scroll].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, gridData.x - gridData.width * .05 + this.posY, gridData.y - gridData.width * .045, gridData.width * 1.09, gridData.width * 1.09);
                        wordLineHandler.update();
                        wordLineHandler.render();
                        if(40 * (this.totalWords) > canvas.height * .7) {
                            this.wordListScale = (canvas.height * .7) / (40 * (this.totalWords));
                        } else {
                            this.wordListScale = 1;
                        }
                        var tempLineSpace = 40 * this.wordListScale;
                        for(var i = 0; i < this.totalWords; i++) {
                            var oTextDisplayData = {
                                textId: i,
                                x: (gridData.x - 60) / 2 + 60 - this.posY,
                                y: i * tempLineSpace + canvas.height / 2 - tempLineSpace * (this.totalWords / 2) + textDisplay.oLevelTextData[categoryId].aGameData[gameId].aWords[aWordsToGuess[i].id].blockHeight / 2 - 60,
                                alignX: "centre",
                                alignY: "centre",
                                scale: 1 * this.wordListScale,
                                maxWidth: (gridData.x - 100) - 20
                            };
                            textDisplay.renderGameText(oTextDisplayData);
                        }
                        var tempScale = Math.min((gridData.x / 300) / 2, .65);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallLogo].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallLogo].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallLogo].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallLogo].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, gridData.x / 2 - (bWidth / 2) * tempScale + 25 - this.posY, canvas.height - bHeight * tempScale - 10, bWidth * tempScale, bHeight * tempScale);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.timeLineHoriz0].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.timeLineHoriz0].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.timeLineHoriz0].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.timeLineHoriz0].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 25 - bWidth / 2 - this.posY, canvas.height / 2 - bHeight / 2, bWidth, bHeight);
                        if((aStarTimes[2] - gameTime) / aStarTimes[2] > 0) {
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.timeLineHoriz1].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.timeLineHoriz1].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.timeLineHoriz1].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.timeLineHoriz1].height;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 25 - bWidth / 2 - this.posY, canvas.height / 2 - bHeight / 2 + bHeight - bHeight * ((aStarTimes[2] - gameTime) / aStarTimes[2]), bWidth, bHeight * (aStarTimes[2] - gameTime) / aStarTimes[2]);
                        }
                        for(var i = 0; i < aStarTimes.length; i++) {
                            var starType = oImageIds.starMarkerHoriz0;
                            if(gameTime > aStarTimes[i]) {
                                starType = oImageIds.starMarkerHoriz1;
                            }
                            var bX = this.oUiElementsImgData.oData.oAtlasData[starType].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[starType].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[starType].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[starType].height;
                            var lineHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.timeLineHoriz0].height;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 25 - this.posY, canvas.height / 2 - lineHeight / 2 + (aStarTimes[i] / aStarTimes[2]) * lineHeight - bHeight / 2, bWidth, bHeight);
                        }
                        clockX = 15 - this.posY;
                        clockY = canvas.height / 2 + lineHeight / 2 + 15;
                    }
                    var oTextDisplayData = {
                        text: this.convertTime(gameTime),
                        x: clockX - this.posY,
                        y: clockY,
                        alignX: "centre",
                        alignY: "bottom",
                        scale: .75
                    };
                    textDisplay.renderDynamicText(oTextDisplayData);
                    var vx;
                    var vy;
                    var jiggleTime;
                    var jiggleMultipier;
                    jiggleTime = 8;
                    jiggleMultipier = .75;
                    for(var i = 0; i < gridSize; i++) {
                        for(var j = 0; j < gridSize; j++) {
                            if(this.aJiggle[i][j].inc < jiggleTime) {
                                this.aJiggle[i][j].inc += (this.aJiggle[i][j].dist * delta);
                                vx = this.aJiggle[i][j].vx * (this.aJiggle[i][j].inc / jiggleTime) * (this.aJiggle[i][j].inc / jiggleTime - 2) + this.aJiggle[i][j].vx;
                                vy = this.aJiggle[i][j].vy * (this.aJiggle[i][j].inc / jiggleTime) * (this.aJiggle[i][j].inc / jiggleTime - 2) + this.aJiggle[i][j].vy;
                            } else {
                                vx = 0;
                                vy = 0;
                                this.aJiggle[i][j].inc = jiggleTime;
                            }
                            var oTextDisplayData = {
                                text: aWordGrid[i][j],
                                oTextData: textDisplay.oWordGridTextData,
                                x: gridData.x + i * (gridData.width / gridSize) + gridData.width / (gridSize * 2) + this.posY - Math.sin(this.aJiggle[i][j].inc / 4) * (vx * jiggleMultipier),
                                y: gridData.y + j * (gridData.width / gridSize) + gridData.width / (gridSize * 2) - Math.sin(this.aJiggle[i][j].inc / 4) * (vy * jiggleMultipier),
                                alignX: "centre",
                                alignY: "centre",
                                scale: gridData.width / 450 * Math.max(1, ((11 / gridSize) * .75))
                            };
                            textDisplay.renderGenText(oTextDisplayData, "font1");
                        }
                    }
                    break;
                case "gameComplete":
                    var tempTime = prevGameTime;
                    var oTextDisplayData = {
                        textId: categoryId,
                        addedText: " " + (gameId + 1) + "/" + textDisplay.oLevelTextData[categoryId].aGameData.length,
                        x: 65 + this.posY,
                        y: 27,
                        alignX: "left",
                        alignY: "centre",
                        scale: .75
                    };
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.shard0].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.shard0].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.shard0].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.shard0].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) - this.posY, canvas.height * .2 - (bHeight / 2), bWidth, bHeight);
                    var tempText = "complete3";
                    if(tempTime <= aStarTimes[0]) {
                        tempText = "complete0";
                    } else if(tempTime <= aStarTimes[1]) {
                        tempText = "complete1";
                    } else if(tempTime <= aStarTimes[2]) {
                        tempText = "complete2";
                    }
                    var oTextDisplayData = {
                        text: tempText,
                        oTextData: textDisplay.oGenTextData,
                        x: canvas.width / 2 - this.posY,
                        y: canvas.height * .2,
                        alignX: "centre",
                        alignY: "centre",
                        scale: 1
                    };
                    textDisplay.renderGenText(oTextDisplayData);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.shard1].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.shard1].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.shard1].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.shard1].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) - this.posY, canvas.height * .57 - 13, bWidth, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.clock].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.clock].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.clock].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.clock].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - 60 - bWidth / 2 - this.posY, canvas.height * .57 - 2, bWidth, bHeight);
                    var oTextDisplayData = {
                        text: this.convertTimeHundredths(tempTime),
                        x: canvas.width / 2 - 30 - this.posY,
                        y: canvas.height * .57,
                        alignX: "left",
                        alignY: "centre",
                        scale: 1
                    };
                    textDisplay.renderDynamicText(oTextDisplayData);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char3].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char3].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char3].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char3].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0 - this.posY, canvas.height / 2 + 20 - Math.sin((this.incY) / 8) * 5, bWidth, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char2].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char2].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char2].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char2].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0 - this.posY, canvas.height / 2 - 250 - Math.sin((this.incY + 10) / 8) * 5, bWidth, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char1].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char1].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char1].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char1].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - bWidth + this.posY, canvas.height / 2 - 200 + Math.sin((this.incY + 10) / 8) * 5, bWidth, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char0].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char0].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char0].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.char0].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - bWidth + this.posY, canvas.height / 2 - 10 - Math.sin(this.incY / 8) * 5, bWidth, bHeight);
                    for(var j = 0; j < 3; j++) {
                        var tempStar = 1;
                        if(tempTime != 0 && tempTime < aStarTimes[2 - j]) {
                            tempStar = 0;
                        }
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bigStar" + tempStar]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bigStar" + tempStar]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bigStar" + tempStar]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bigStar" + tempStar]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 - 137 + j * 137, canvas.height * .4 - bHeight / 2 + this["starY" + j] + 4, bWidth, bHeight);
                    }
                    break;
                case "pause":
                    ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    break;
            }
            if(_butsOnTop) {
                this.addButs(ctx);
            }
        };
        Panel.prototype.addButs = function (ctx) {
            for(var i = 0; i < this.aButs.length; i++) {
                var offsetPosY = this.posY;
                var floatY = 0;
                if(this.incY != 0 && !this.aButs[i].noMove) {
                    floatY = Math.sin(this.incY + i * 45) * 3;
                }
                if(i % 2 == 0) {
                }
                if(!this.aButs[i].scale) {
                    this.aButs[i].scale = 1;
                }
                var bX = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].x;
                var bY = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].y;
                var bWidth = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].width;
                var bHeight = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].height;
                var aX = canvas.width * this.aButs[i].align[0];
                var aY = canvas.height * this.aButs[i].align[1];
                if(aY + this.aButs[i].aPos[1] > canvas.height / 2) {
                    offsetPosY = this.butsY;
                } else {
                    offsetPosY = -this.butsY;
                }
                ctx.drawImage(this.aButs[i].oImgData.img, bX, bY, bWidth, bHeight, aX + this.aButs[i].aPos[0] - (bWidth / 2) * (this.aButs[i].scale) - floatY / 2, aY + this.aButs[i].aPos[1] - (bHeight / 2) * (this.aButs[i].scale) + floatY / 2 + offsetPosY, bWidth * (this.aButs[i].scale) + floatY, bHeight * (this.aButs[i].scale) - floatY);
                if(this.aButs[i].text) {
                    var oTextDisplayData = {
                        text: this.aButs[i].text,
                        oTextData: textDisplay.oGenTextData,
                        x: aX + this.aButs[i].aPos[0] - 38,
                        y: aY + this.aButs[i].aPos[1] + offsetPosY - 2,
                        alignX: "centre",
                        alignY: "centre",
                        scale: .8,
                        maxWidth: 138
                    };
                    textDisplay.renderGenText(oTextDisplayData);
                }
            }
        };
        return Panel;
    })();
    Elements.Panel = Panel;    
})(Elements || (Elements = {}));
var Utils;
(function (Utils) {
    var TextDisplay = (function () {
        function TextDisplay() {
            this.oGenTextData = {
            };
            this.oLevelTextData = {
            };
            this.oUiButsImgData = {
            };
            this.oWordGridTextData = {
            };
            this.inc = 0;
            this.categoryTotal = 0;
            this.oUiElementsImgData = assetLib.getData("uiElements");
            this.oUiButsImgData = assetLib.getData("uiButs");
            this.createTextObjects();
        }
        TextDisplay.prototype.createTextObjects = function () {
            for(var i in assetLib.textData.langText.text[curLang]) {
                this.oGenTextData[i] = {
                };
                this.oGenTextData[i].aLineData = this.getCharDataFromArray(assetLib.textData.langText.text[curLang][i]["@text"], assetLib.textData.langText.text[curLang][i]["@fontId"]);
                this.oGenTextData[i].aLineWidths = this.getLineWidths(this.oGenTextData[i].aLineData);
                this.oGenTextData[i].blockWidth = this.getBlockWidth(this.oGenTextData[i].aLineData);
                this.oGenTextData[i].blockHeight = this.getBlockHeight(this.oGenTextData[i].aLineData, assetLib.textData.langText.text[curLang][i]["@fontId"]);
                this.oGenTextData[i].lineHeight = parseInt(assetLib.textData["fontData" + assetLib.textData.langText.text[curLang][i]["@fontId"]].text.common["@lineHeight"]);
                this.oGenTextData[i].oFontImgData = assetLib.getData("font" + assetLib.textData.langText.text[curLang][i]["@fontId"]);
            }
            for(var i in assetLib.textData.levelText.text[curLang]) {
                this.categoryTotal++;
                var aTemp = new Array();
                aTemp.push(assetLib.textData.levelText.text[curLang][i]["@title"]);
                this.oLevelTextData[i] = {
                };
                this.oLevelTextData[i].title = {
                };
                this.oLevelTextData[i].title.aLineData = this.getCharDataFromArray(aTemp, 0);
                this.oLevelTextData[i].title.aLineWidths = this.getLineWidths(this.oLevelTextData[i].title.aLineData);
                this.oLevelTextData[i].title.blockWidth = this.getBlockWidth(this.oLevelTextData[i].title.aLineData);
                this.oLevelTextData[i].title.blockHeight = this.getBlockHeight(this.oLevelTextData[i].title.aLineData, 0);
                this.oLevelTextData[i].title.lineHeight = parseInt(assetLib.textData["fontData0"].text.common["@lineHeight"]);
                this.oLevelTextData[i].title.oFontImgData = assetLib.getData("font0");
                this.oLevelTextData[i].aGameData = [];
                for(var j in assetLib.textData.levelText.text[curLang][i].gameWords) {
                    this.oLevelTextData[i].aGameData[j] = {
                    };
                    this.oLevelTextData[i].aGameData[j].gridSize = assetLib.textData.levelText.text[curLang][i].gameWords[j]["@gridSize"];
                    this.oLevelTextData[i].aGameData[j].aWords = new Array();
                    for(var k in assetLib.textData.levelText.text[curLang][i].gameWords[j]["@words"]) {
                        var aTemp = new Array();
                        aTemp.push(assetLib.textData.levelText.text[curLang][i].gameWords[j]["@words"][k]);
                        this.oLevelTextData[i].aGameData[j].aWords[k] = {
                        };
                        this.oLevelTextData[i].aGameData[j].aWords[k].aLineData = this.getCharDataFromArray(aTemp, 0);
                        this.oLevelTextData[i].aGameData[j].aWords[k].aLineWidths = this.getLineWidths(this.oLevelTextData[i].aGameData[j].aWords[k].aLineData);
                        this.oLevelTextData[i].aGameData[j].aWords[k].blockWidth = this.getBlockWidth(this.oLevelTextData[i].aGameData[j].aWords[k].aLineData);
                        this.oLevelTextData[i].aGameData[j].aWords[k].blockHeight = this.getBlockHeight(this.oLevelTextData[i].aGameData[j].aWords[k].aLineData, 0);
                        this.oLevelTextData[i].aGameData[j].aWords[k].lineHeight = parseInt(assetLib.textData["fontData0"].text.common["@lineHeight"]);
                        this.oLevelTextData[i].aGameData[j].aWords[k].oFontImgData = assetLib.getData("font0");
                    }
                }
            }
        };
        TextDisplay.prototype.getWordGridData = function () {
            var k = 0;
            for(var i = 0; i < gridSize; i++) {
                for(var j = 0; j < gridSize; j++) {
                    var aTemp = new Array();
                    aTemp.push(aWordGrid[i][j]);
                    this.oWordGridTextData[aWordGrid[i][j]] = {
                    };
                    this.oWordGridTextData[aWordGrid[i][j]].aLineData = this.getCharDataFromArray(aTemp, 0);
                    this.oWordGridTextData[aWordGrid[i][j]].aLineWidths = this.getLineWidths(this.oWordGridTextData[aWordGrid[i][j]].aLineData);
                    this.oWordGridTextData[aWordGrid[i][j]].blockWidth = this.getBlockWidth(this.oWordGridTextData[aWordGrid[i][j]].aLineData);
                    this.oWordGridTextData[aWordGrid[i][j]].blockHeight = this.getBlockHeight(this.oWordGridTextData[aWordGrid[i][j]].aLineData, 0);
                    this.oWordGridTextData[aWordGrid[i][j]].lineHeight = parseInt(assetLib.textData["fontData0"].text.common["@lineHeight"]);
                    this.oWordGridTextData[aWordGrid[i][j]].oFontImgData = assetLib.getData("font0");
                }
            }
        };
        TextDisplay.prototype.getLineWidths = function (_aCharData) {
            var lineLength;
            var aLineWidths = new Array();
            for(var i = 0; i < _aCharData.length; i++) {
                lineLength = 0;
                for(var j = 0; j < _aCharData[i].length; j++) {
                    lineLength += parseInt(_aCharData[i][j]["@xadvance"]);
                    if(j == 0) {
                        lineLength -= parseInt(_aCharData[i][j]["@xoffset"]);
                    } else if(j == _aCharData[i].length - 1) {
                        lineLength += parseInt(_aCharData[i][j]["@xoffset"]);
                    }
                }
                aLineWidths.push(lineLength);
            }
            return aLineWidths;
        };
        TextDisplay.prototype.getBlockWidth = function (_aCharData) {
            var lineLength;
            var longestLineLength = 0;
            for(var i = 0; i < _aCharData.length; i++) {
                lineLength = 0;
                for(var j = 0; j < _aCharData[i].length; j++) {
                    lineLength += parseInt(_aCharData[i][j]["@xadvance"]);
                    if(j == 0) {
                        lineLength -= parseInt(_aCharData[i][j]["@xoffset"]);
                    } else if(j == _aCharData[i].length - 1) {
                        lineLength += parseInt(_aCharData[i][j]["@xoffset"]);
                    }
                }
                if(lineLength > longestLineLength) {
                    longestLineLength = lineLength;
                }
            }
            return longestLineLength;
        };
        TextDisplay.prototype.getBlockHeight = function (_aCharData, _fontId) {
            return _aCharData.length * parseInt(assetLib.textData["fontData" + _fontId].text.common["@lineHeight"]);
        };
        TextDisplay.prototype.getCharDataFromArray = function (_aLines, _fontId) {
            var aCharData = new Array();
            for(var k = 0; k < _aLines.length; k++) {
                aCharData[k] = this.getCharData(_aLines[k], _fontId);
            }
            return aCharData;
        };
        TextDisplay.prototype.getCharData = function (_line, _fontId) {
            var aCharData = new Array();
            for(var i = 0; i < _line.length; i++) {
                for(var j = 0; j < assetLib.textData["fontData" + _fontId].text.chars.char.length; j++) {
                    if(_line[i].charCodeAt() == assetLib.textData["fontData" + _fontId].text.chars.char[j]["@id"]) {
                        aCharData.push(assetLib.textData["fontData" + _fontId].text.chars.char[j]);
                        break;
                    }
                }
            }
            return aCharData;
        };
        TextDisplay.prototype.renderGenText = function (_oTextDisplayData, _fontData) {
            if (typeof _fontData === "undefined") { _fontData = "font0"; }
            var aLinesToRender = _oTextDisplayData.oTextData[_oTextDisplayData.text].aLineData.slice(0);
            var oFontImgData = assetLib.getData(_fontData);
            if(_oTextDisplayData.addedText) {
                var aTemp = new Array();
                aTemp.push(_oTextDisplayData.addedText);
                aLinesToRender[0] = aLinesToRender[0].concat(this.getCharDataFromArray(aTemp, 0)[0]);
            }
            var shiftX;
            var offsetX = 0;
            var offsetY = 0;
            var lineOffsetY = 0;
            var manualScale = 1;
            var animY = 0;
            if(_oTextDisplayData.lineOffsetY) {
                lineOffsetY = _oTextDisplayData.lineOffsetY;
            }
            if(_oTextDisplayData.scale) {
                manualScale = _oTextDisplayData.scale;
            }
            var textScale = 1 * manualScale;
            if(_oTextDisplayData.maxWidth && _oTextDisplayData.oTextData[_oTextDisplayData.text].blockWidth * manualScale > _oTextDisplayData.maxWidth) {
                textScale = _oTextDisplayData.maxWidth / _oTextDisplayData.oTextData[_oTextDisplayData.text].blockWidth;
            }
            if(_oTextDisplayData.anim) {
                this.inc += delta * 7;
            }
            if(_oTextDisplayData.alignY == "centre") {
                offsetY = _oTextDisplayData.oTextData[_oTextDisplayData.text].blockHeight / 2 + (lineOffsetY * (aLinesToRender.length - 1)) / 2;
            } else if(_oTextDisplayData.alignY == "bottom") {
                offsetY = _oTextDisplayData.oTextData[_oTextDisplayData.text].blockHeight + (lineOffsetY * (aLinesToRender.length - 1));
            }
            for(var i = 0; i < aLinesToRender.length; i++) {
                shiftX = 0;
                if(_oTextDisplayData.alignX == "centre") {
                    offsetX = _oTextDisplayData.oTextData[_oTextDisplayData.text].aLineWidths[i] / 2;
                }
                var tempShiftX = 0;
                for(var j = 0; j < aLinesToRender[i].length; j++) {
                    tempShiftX += parseInt(aLinesToRender[i][j]["@xadvance"]);
                }
                if(_oTextDisplayData.colourId != undefined) {
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + _oTextDisplayData.colourId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + _oTextDisplayData.colourId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + _oTextDisplayData.colourId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + _oTextDisplayData.colourId]].height;
                    var butWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds.genSmallBut].width;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, _oTextDisplayData.x - butWidth / 2 + 9, _oTextDisplayData.y - 19 - 3, butWidth - 18, bHeight + 6);
                }
                for(var j = 0; j < aLinesToRender[i].length; j++) {
                    var bX = aLinesToRender[i][j]["@x"];
                    var bY = aLinesToRender[i][j]["@y"];
                    var bWidth = aLinesToRender[i][j]["@width"];
                    var bHeight = aLinesToRender[i][j]["@height"];
                    if(_oTextDisplayData.anim) {
                        animY = Math.sin(this.inc + j / 2) * ((bHeight / 15) * textScale);
                    }
                    ctx.drawImage(oFontImgData.img, bX, bY, bWidth, bHeight, _oTextDisplayData.x + (shiftX + parseInt(aLinesToRender[i][j]["@xoffset"]) - offsetX) * textScale, _oTextDisplayData.y + (parseInt(aLinesToRender[i][j]["@yoffset"]) + (i * _oTextDisplayData.oTextData[_oTextDisplayData.text].lineHeight) + (i * lineOffsetY) - offsetY) * textScale + animY, bWidth * textScale, bHeight * textScale);
                    shiftX += parseInt(aLinesToRender[i][j]["@xadvance"]);
                }
            }
        };
        TextDisplay.prototype.renderGameTitleText = function (_oTextDisplayData) {
            var aLinesToRender = this.oLevelTextData[_oTextDisplayData.textId].title.aLineData.slice(0);
            var oFontImgData = this.oLevelTextData[_oTextDisplayData.textId].title.oFontImgData;
            if(_oTextDisplayData.addedText) {
                var aTemp = new Array();
                aTemp.push(_oTextDisplayData.addedText);
                aLinesToRender[0] = aLinesToRender[0].concat(this.getCharDataFromArray(aTemp, 0)[0]);
            }
            var shiftX;
            var offsetX = 0;
            var offsetY = 0;
            var lineOffsetY = 0;
            var manualScale = 1;
            var animY = 0;
            if(_oTextDisplayData.lineOffsetY) {
                lineOffsetY = _oTextDisplayData.lineOffsetY;
            }
            if(_oTextDisplayData.scale) {
                manualScale = _oTextDisplayData.scale;
            }
            var textScale = 1 * manualScale;
            if(_oTextDisplayData.maxWidth && this.oLevelTextData[_oTextDisplayData.textId].title.blockWidth * manualScale > _oTextDisplayData.maxWidth) {
                textScale = _oTextDisplayData.maxWidth / this.oLevelTextData[_oTextDisplayData.textId].title.blockWidth;
            }
            if(_oTextDisplayData.anim) {
                this.inc += delta * 7;
            }
            for(var i = 0; i < aLinesToRender.length; i++) {
                shiftX = 0;
                if(_oTextDisplayData.alignX == "centre") {
                    offsetX = this.oLevelTextData[_oTextDisplayData.textId].title.aLineWidths[i] / 2;
                }
                if(_oTextDisplayData.alignY == "centre") {
                    offsetY = this.oLevelTextData[_oTextDisplayData.textId].title.blockHeight / 2 + (lineOffsetY * (aLinesToRender.length - 1)) / 2;
                }
                for(var j = 0; j < aLinesToRender[i].length; j++) {
                    var bX = aLinesToRender[i][j]["@x"];
                    var bY = aLinesToRender[i][j]["@y"];
                    var bWidth = aLinesToRender[i][j]["@width"];
                    var bHeight = aLinesToRender[i][j]["@height"];
                    if(_oTextDisplayData.anim) {
                        animY = Math.sin(this.inc + j / 2) * ((bHeight / 15) * textScale);
                    }
                    ctx.drawImage(oFontImgData.img, bX, bY, bWidth, bHeight, _oTextDisplayData.x + (shiftX + parseInt(aLinesToRender[i][j]["@xoffset"]) - offsetX) * textScale, _oTextDisplayData.y + (parseInt(aLinesToRender[i][j]["@yoffset"]) + (i * this.oLevelTextData[_oTextDisplayData.textId].title.lineHeight) + (i * lineOffsetY) - offsetY) * textScale + animY, bWidth * textScale, bHeight * textScale);
                    shiftX += parseInt(aLinesToRender[i][j]["@xadvance"]);
                }
            }
        };
        TextDisplay.prototype.renderDynamicText = function (_oTextDisplayData) {
            var aTemp = new Array();
            aTemp.push(_oTextDisplayData.text);
            var aLinesToRender = this.getCharDataFromArray(aTemp, 0);
            var oFontImgData = this.oLevelTextData[categoryId].title.oFontImgData;
            var shiftX;
            var lineOffsetY = 0;
            var manualScale = 1;
            var animY = 0;
            if(_oTextDisplayData.scale) {
                manualScale = _oTextDisplayData.scale;
            }
            var textScale = 1 * manualScale;
            if(_oTextDisplayData.anim) {
                this.inc += delta * 7;
            }
            var soloOffsetX = 0;
            var soloOffsetY = 0;
            for(var i = 0; i < aLinesToRender.length; i++) {
                shiftX = 0;
                for(var j = 0; j < aLinesToRender[i].length; j++) {
                    var bX = aLinesToRender[i][j]["@x"];
                    var bY = aLinesToRender[i][j]["@y"];
                    var bWidth = aLinesToRender[i][j]["@width"];
                    var bHeight = aLinesToRender[i][j]["@height"];
                    soloOffsetX = shiftX + parseInt(aLinesToRender[i][j]["@xoffset"]);
                    soloOffsetY = parseInt(aLinesToRender[i][j]["@yoffset"]) + (i * this.oLevelTextData[categoryId].title.lineHeight);
                    if(_oTextDisplayData.text.length == 1) {
                        soloOffsetX = -bWidth / 2;
                        soloOffsetY = -bHeight / 2;
                    }
                    if(_oTextDisplayData.anim) {
                        animY = Math.sin(this.inc + j / 2) * ((bHeight / 15) * textScale);
                    }
                    ctx.drawImage(oFontImgData.img, bX, bY, bWidth, bHeight, _oTextDisplayData.x + soloOffsetX * textScale, _oTextDisplayData.y + soloOffsetY * textScale + animY, bWidth * textScale, bHeight * textScale);
                    shiftX += parseInt(aLinesToRender[i][j]["@xadvance"]);
                }
            }
        };
        TextDisplay.prototype.renderGameText = function (_oTextDisplayData, _fontData) {
            if (typeof _fontData === "undefined") { _fontData = "font0"; }
            var oData = this.oLevelTextData[categoryId].aGameData[gameId].aWords[aWordsToGuess[_oTextDisplayData.textId].id];
            var lineToRender = oData.aLineData;
            var oFontImgData = assetLib.getData(_fontData);
            var shiftX;
            var offsetX = 0;
            var offsetY = 0;
            var lineOffsetY = 0;
            var manualScale = 1;
            var animY = 0;
            if(_oTextDisplayData.lineOffsetY) {
                lineOffsetY = _oTextDisplayData.lineOffsetY;
            }
            if(_oTextDisplayData.scale) {
                manualScale = _oTextDisplayData.scale;
            }
            var textScale = 1 * manualScale;
            if(_oTextDisplayData.maxWidth && oData.blockWidth * manualScale > _oTextDisplayData.maxWidth) {
                textScale = _oTextDisplayData.maxWidth / oData.blockWidth;
            }
            if(_oTextDisplayData.anim) {
                this.inc += delta * 7;
            }
            shiftX = 0;
            if(_oTextDisplayData.alignX == "centre") {
                offsetX = oData.aLineWidths[0] / 2;
            }
            if(_oTextDisplayData.alignY == "centre") {
                offsetY = oData.blockHeight / 2;
            }
            var tempShiftX = 0;
            for(var j = 0; j < lineToRender[0].length; j++) {
                tempShiftX += parseInt(lineToRender[0][j]["@xadvance"]);
            }
            if(aWordsToGuess[_oTextDisplayData.textId].guessed) {
                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + aWordsToGuess[_oTextDisplayData.textId].lineId]].x;
                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + aWordsToGuess[_oTextDisplayData.textId].lineId]].y;
                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + aWordsToGuess[_oTextDisplayData.textId].lineId]].width;
                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + aWordsToGuess[_oTextDisplayData.textId].lineId]].height;
                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, _oTextDisplayData.x + (parseInt(lineToRender[0][0]["@xoffset"]) - offsetX - 5) * textScale, _oTextDisplayData.y - (bHeight / 2) * textScale, (tempShiftX + 20) * textScale, bHeight * textScale);
            }
            for(var j = 0; j < lineToRender[0].length; j++) {
                var bX = parseInt(lineToRender[0][j]["@x"]);
                var bY = parseInt(lineToRender[0][j]["@y"]);
                var bWidth = parseInt(lineToRender[0][j]["@width"]);
                var bHeight = parseInt(lineToRender[0][j]["@height"]);
                if(_oTextDisplayData.anim) {
                    animY = Math.sin(this.inc + j / 2) * ((bHeight / 15) * textScale);
                }
                ctx.drawImage(oFontImgData.img, bX, bY, bWidth, bHeight, _oTextDisplayData.x + (shiftX + parseInt(lineToRender[0][j]["@xoffset"]) - offsetX) * textScale, _oTextDisplayData.y + (parseInt(lineToRender[0][j]["@yoffset"]) - offsetY) * textScale + animY, bWidth * textScale, bHeight * textScale);
                shiftX += parseInt(lineToRender[0][j]["@xadvance"]);
            }
        };
        return TextDisplay;
    })();
    Utils.TextDisplay = TextDisplay;    
})(Utils || (Utils = {}));
var Elements;
(function (Elements) {
    var WordLineHandler = (function () {
        function WordLineHandler() {
            this.aFixedLines = new Array();
            this.visible = false;
            this.oUiElementsImgData = assetLib.getData("uiElements");
            this.reset();
        }
        WordLineHandler.prototype.update = function () {
            this.realX = this.endX;
            this.realY = this.endY;
            var vx = (this.realX - this.getPosX(this.startGridX));
            var vy = (this.realY - this.getPosY(this.startGridY));
            this.rotation = (Math.round((Math.atan2(vy, vx) / radian) / 45) * 45) * radian;
            var tempRad = Math.abs(this.rotation / radian);
            if(tempRad == 135 || tempRad == 45) {
                this.lineLength = Math.min(Math.abs(this.startX - this.endX), Math.abs(this.startY - this.endY)) * 1.414;
            } else {
                this.lineLength = Math.sqrt(vx * vx + vy * vy);
            }
        };
        WordLineHandler.prototype.reset = function (_x, _y) {
            if (typeof _x === "undefined") { _x = 0; }
            if (typeof _y === "undefined") { _y = 0; }
            this.startGridX = this.getGridPosX(_x);
            this.startGridY = this.getGridPosY(_y);
            this.endX = this.realX = this.startX = this.getPosX(this.startGridX);
            this.endY = this.realY = this.startY = this.getPosY(this.startGridY);
            this.rotation = 0;
            this.visible = false;
            this.lineLength = 0;
        };
        WordLineHandler.prototype.getGridPosX = function (_x) {
            return Math.round(((_x - (gridData.width / gridSize) / 2 - gridData.x) / gridData.width) * gridSize);
        };
        WordLineHandler.prototype.getGridPosY = function (_y) {
            return Math.round(((_y - (gridData.width / gridSize) / 2 - gridData.y) / gridData.width) * gridSize);
        };
        WordLineHandler.prototype.getPosX = function (_x) {
            return gridData.x + _x * (gridData.width / gridSize) + (gridData.width / gridSize) / 2;
        };
        WordLineHandler.prototype.getPosY = function (_y) {
            return gridData.y + _y * (gridData.width / gridSize) + (gridData.width / gridSize) / 2;
        };
        WordLineHandler.prototype.checkLine = function () {
            wordLineHandler.visible = false;
            var tempWord = "";
            var gotWord = false;
            switch(this.rotation / radian) {
                case 0:
                case -0:
                    for(var i = this.startGridX; i <= this.getGridPosX(this.endX) + 1; i++) {
                        if(i < gridSize) {
                            tempWord += aWordGrid[i][this.startGridY];
                            if(tempWord.length == this.getGridPosX(this.endX) - this.startGridX || tempWord.length == this.getGridPosX(this.endX) - this.startGridX + 1) {
                                if(checkWord(tempWord)) {
                                    this.fixCurLine(i, this.getGridPosY(this.endY));
                                    gotWord = true;
                                    break;
                                }
                            }
                        }
                    }
                    break;
                case 45:
                    for(var i = 0; i <= this.getGridPosX(this.endX) - this.startGridX + 1; i++) {
                        if(i + this.startGridX < gridSize && i + this.startGridY < gridSize) {
                            tempWord += aWordGrid[i + this.startGridX][i + this.startGridY];
                            if(tempWord.length == this.getGridPosX(this.endX) - this.startGridX || tempWord.length == this.getGridPosX(this.endX) - this.startGridX + 1) {
                                if(checkWord(tempWord)) {
                                    this.fixCurLine(i + this.startGridX, i + this.startGridY);
                                    gotWord = true;
                                    break;
                                }
                            }
                        }
                    }
                    break;
                case 90:
                    for(var i = this.startGridY; i <= this.getGridPosY(this.endY) + 1; i++) {
                        if(i < gridSize) {
                            tempWord += aWordGrid[this.startGridX][i];
                            if(tempWord.length == this.getGridPosY(this.endY) - this.startGridY || tempWord.length == this.getGridPosY(this.endY) - this.startGridY + 1) {
                                if(checkWord(tempWord)) {
                                    this.fixCurLine(this.getGridPosX(this.endX), i);
                                    gotWord = true;
                                    break;
                                }
                            }
                        }
                    }
                    break;
                case 135:
                    for(var i = 0; i <= this.startGridX - this.getGridPosX(this.endX) + 1; i++) {
                        if(this.startGridX - i > -1 && i + this.startGridY < gridSize) {
                            tempWord += aWordGrid[this.startGridX - i][i + this.startGridY];
                            if(tempWord.length == this.startGridX - this.getGridPosX(this.endX) || tempWord.length == this.startGridX - this.getGridPosX(this.endX) + 1) {
                                if(checkWord(tempWord)) {
                                    this.fixCurLine(this.startGridX - i, i + this.startGridY);
                                    gotWord = true;
                                    break;
                                }
                            }
                        }
                    }
                    break;
                case 180:
                case -180:
                    for(var i = 0; i <= this.startGridX - this.getGridPosX(this.endX) + 1; i++) {
                        if(this.startGridX - i > -1) {
                            tempWord += aWordGrid[this.startGridX - i][this.startGridY];
                            if(tempWord.length == this.startGridX - this.getGridPosX(this.endX) || tempWord.length == this.startGridX - this.getGridPosX(this.endX) + 1) {
                                if(checkWord(tempWord)) {
                                    this.fixCurLine(this.startGridX - i, this.getGridPosY(this.endY));
                                    gotWord = true;
                                    break;
                                }
                            }
                        }
                    }
                    break;
                case -135:
                    for(var i = 0; i <= this.startGridX - this.getGridPosX(this.endX) + 1; i++) {
                        if(this.startGridX - i > -1 && this.startGridY - i > -1) {
                            tempWord += aWordGrid[this.startGridX - i][this.startGridY - i];
                            if(tempWord.length == this.startGridX - this.getGridPosX(this.endX) || tempWord.length == this.startGridX - this.getGridPosX(this.endX) + 1) {
                                if(checkWord(tempWord)) {
                                    this.fixCurLine(this.startGridX - i, this.startGridY - i);
                                    gotWord = true;
                                    break;
                                }
                            }
                        }
                    }
                    break;
                case -90:
                    for(var i = 0; i <= this.startGridY - this.getGridPosY(this.endY) + 1; i++) {
                        if(this.startGridY - i > -1) {
                            tempWord += aWordGrid[this.startGridX][this.startGridY - i];
                            if(tempWord.length == this.startGridY - this.getGridPosY(this.endY) || tempWord.length == this.startGridY - this.getGridPosY(this.endY) + 1) {
                                if(checkWord(tempWord)) {
                                    this.fixCurLine(this.getGridPosX(this.endX), this.startGridY - i);
                                    gotWord = true;
                                    break;
                                }
                            }
                        }
                    }
                    break;
                case -45:
                    for(var i = 0; i <= this.getGridPosX(this.endX) - this.startGridX + 1; i++) {
                        if(i + this.startGridX < gridSize && this.startGridY - i > -1) {
                            tempWord += aWordGrid[i + this.startGridX][this.startGridY - i];
                            if(tempWord.length == this.getGridPosX(this.endX) - this.startGridX || tempWord.length == this.getGridPosX(this.endX) - this.startGridX + 1) {
                                if(checkWord(tempWord)) {
                                    this.fixCurLine(i + this.startGridX, this.startGridY - i);
                                    gotWord = true;
                                    break;
                                }
                            }
                        }
                    }
                    break;
            }
            if(!gotWord) {
                playSound("noWord");
            }
        };
        WordLineHandler.prototype.fixCurLine = function (_endGridX, _endGridY) {
            this.aFixedLines.push({
                startGridX: this.startGridX,
                startGridY: this.startGridY,
                endGridX: _endGridX,
                endGridY: _endGridY,
                rotation: this.rotation
            });
        };
        WordLineHandler.prototype.render = function () {
            if(wordLineHandler.visible) {
                ctx.save();
                ctx.translate(this.getPosX(this.startGridX) - 3, this.getPosY(this.startGridY));
                ctx.rotate(this.rotation);
                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + this.aFixedLines.length]].x;
                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + this.aFixedLines.length]].y;
                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + this.aFixedLines.length]].width;
                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + this.aFixedLines.length]].height;
                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -(gridData.width / gridSize) * .4, -(gridData.width / 26) * Math.max(1, ((11 / gridSize) * .75)), this.lineLength + (gridData.width / gridSize) * .6, (gridData.width / 13) * Math.max(1, ((11 / gridSize) * .75)));
                ctx.restore();
            }
            for(var i = 0; i < this.aFixedLines.length; i++) {
                var a = (this.getPosX(this.aFixedLines[i].endGridX) - this.getPosX(this.aFixedLines[i].startGridX));
                var b = (this.getPosY(this.aFixedLines[i].endGridY) - this.getPosY(this.aFixedLines[i].startGridY));
                var tempLineLength = Math.sqrt(a * a + b * b);
                ctx.save();
                ctx.translate(this.getPosX(this.aFixedLines[i].startGridX) + panel.posY - 3, this.getPosY(this.aFixedLines[i].startGridY));
                ctx.rotate(this.aFixedLines[i].rotation);
                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + i]].x;
                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + i]].y;
                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + i]].width;
                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + i]].height;
                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -(gridData.width / gridSize) * .4, -(gridData.width / 26) * Math.max(1, ((11 / gridSize) * .75)), tempLineLength + (gridData.width / gridSize) * .8, (gridData.width / 13) * Math.max(1, ((11 / gridSize) * .75)));
                ctx.restore();
            }
        };
        return WordLineHandler;
    })();
    Elements.WordLineHandler = WordLineHandler;    
})(Elements || (Elements = {}));
var Utils;
(function (Utils) {
    var SaveDataHandler = (function () {
        function SaveDataHandler(_saveDataId) {
            this.dataGroupNum = 2;
            this.saveDataId = _saveDataId;
            var testKey = 'test', storage = window.sessionStorage;
            try  {
                storage.setItem(testKey, '1');
                storage.removeItem(testKey);
                this.canStore = true;
            } catch (error) {
                this.canStore = false;
            }
            this.clearData();
            this.setInitialData();
        }
        SaveDataHandler.prototype.clearData = function () {
            this.aLevelStore = new Array();
            for(var i = 0; i < textDisplay.categoryTotal; i++) {
                for(var j = 0; j < textDisplay.oLevelTextData[i].aGameData.length; j++) {
                    this.aLevelStore.push(0);
                }
            }
        };
        SaveDataHandler.prototype.resetData = function () {
            this.clearData();
            this.saveData();
        };
        SaveDataHandler.prototype.setInitialData = function () {
            if(this.canStore && typeof (Storage) !== "undefined") {
                if(localStorage.getItem(this.saveDataId) != null && localStorage.getItem(this.saveDataId) != "") {
                    this.aLevelStore = localStorage.getItem(this.saveDataId).split(",");
                    for(var a in this.aLevelStore) {
                        this.aLevelStore[a] = parseInt(this.aLevelStore[a]);
                    }
                    this.checkAddedCategory();
                } else {
                    this.resetData();
                    this.saveData();
                }
            }
        };
        SaveDataHandler.prototype.checkAddedCategory = function () {
            var num = 0;
            for(var i = 0; i < textDisplay.categoryTotal; i++) {
                for(var j = 0; j < textDisplay.oLevelTextData[i].aGameData.length; j++) {
                    if(isNaN(this.aLevelStore[num])) {
                        this.aLevelStore[num] = 0;
                    }
                    num++;
                }
            }
        };
        SaveDataHandler.prototype.setTime = function (_categoryId, _gameId, _time) {
            var num = 0;
            for(var i = 0; i <= _categoryId; i++) {
                for(var j = 0; j < textDisplay.oLevelTextData[i].aGameData.length; j++) {
                    if(i < _categoryId || (i == _categoryId && j < _gameId)) {
                        num++;
                    } else {
                        break;
                    }
                }
            }
            if(this.aLevelStore[num] == 0 || _time < this.aLevelStore[num]) {
                this.aLevelStore[num] = _time;
            }
        };
        SaveDataHandler.prototype.getTime = function (_categoryId, _gameId) {
            var num = 0;
            for(var i = 0; i <= _categoryId; i++) {
                for(var j = 0; j < textDisplay.oLevelTextData[i].aGameData.length; j++) {
                    if(i < _categoryId || (i == _categoryId && j < _gameId)) {
                        num++;
                    } else {
                        break;
                    }
                }
            }
            return this.aLevelStore[num];
        };
        SaveDataHandler.prototype.saveData = function () {
            if(this.canStore && typeof (Storage) !== "undefined") {
                var str = "";
                for(var i = 0; i < this.aLevelStore.length; i++) {
                    str += this.aLevelStore[i];
                    if(i < this.aLevelStore.length - 1) {
                        str += ",";
                    }
                }
                localStorage.setItem(this.saveDataId, str);
            }
        };
        return SaveDataHandler;
    })();
    Utils.SaveDataHandler = SaveDataHandler;    
})(Utils || (Utils = {}));
var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Elements;
(function (Elements) {
    var Firework = (function (_super) {
        __extends(Firework, _super);
        function Firework() {
                _super.call(this, assetLib.getData("firework"), 30, 30, "explode");
            this.vy = 0;
            this.setAnimType("once", "explode");
            this.animEndedFunc = function () {
                this.removeMe = true;
            };
            var tempScale = 3;
            TweenLite.to(this, 1, {
                scaleX: tempScale,
                scaleY: tempScale,
                ease: "Quad.easeOut"
            });
        }
        Firework.prototype.update = function () {
            this.vy += 150 * delta;
            this.y += this.vy * delta;
            _super.prototype.updateAnimation.call(this, delta);
        };
        Firework.prototype.render = function () {
            _super.prototype.renderSimple.call(this, ctx);
        };
        return Firework;
    })(Utils.AnimSprite);
    Elements.Firework = Firework;    
})(Elements || (Elements = {}));
var Utils;
(function (Utils) {
    var JSONData = (function () {
        function JSONData() {
            this.font0Data = {
                "text": {
                    "info": {
                        "@face": "Avenir Next Rounded Std Medium",
                        "@size": "45",
                        "@bold": "0",
                        "@italic": "0",
                        "@charset": "",
                        "@unicode": "1",
                        "@stretchH": "100",
                        "@smooth": "1",
                        "@aa": "2",
                        "@padding": "8,8,8,8",
                        "@spacing": "1,1",
                        "@outline": "0"
                    },
                    "common": {
                        "@lineHeight": "45",
                        "@base": "36",
                        "@scaleW": "600",
                        "@scaleH": "600",
                        "@pages": "1",
                        "@packed": "0",
                        "@alphaChnl": "0",
                        "@redChnl": "4",
                        "@greenChnl": "4",
                        "@blueChnl": "4"
                    },
                    "pages": {
                        "page": {
                            "@id": "0",
                            "@file": "at_0.png"
                        }
                    },
                    "chars": {
                        "@count": "193",
                        "char": [
                            {
                                "@id": "0",
                                "@x": "559",
                                "@y": "437",
                                "@width": "18",
                                "@height": "17",
                                "@xoffset": "-8",
                                "@yoffset": "36",
                                "@xadvance": "18",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "13",
                                "@x": "583",
                                "@y": "103",
                                "@width": "16",
                                "@height": "17",
                                "@xoffset": "-8",
                                "@yoffset": "36",
                                "@xadvance": "0",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "32",
                                "@x": "540",
                                "@y": "437",
                                "@width": "18",
                                "@height": "17",
                                "@xoffset": "-8",
                                "@yoffset": "36",
                                "@xadvance": "9",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "33",
                                "@x": "431",
                                "@y": "325",
                                "@width": "21",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "12",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "34",
                                "@x": "175",
                                "@y": "454",
                                "@width": "25",
                                "@height": "26",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "15",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "35",
                                "@x": "109",
                                "@y": "247",
                                "@width": "35",
                                "@height": "43",
                                "@xoffset": "-7",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "36",
                                "@x": "0",
                                "@y": "107",
                                "@width": "34",
                                "@height": "49",
                                "@xoffset": "-6",
                                "@yoffset": "-2",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "37",
                                "@x": "227",
                                "@y": "103",
                                "@width": "45",
                                "@height": "45",
                                "@xoffset": "-7",
                                "@yoffset": "0",
                                "@xadvance": "32",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "38",
                                "@x": "42",
                                "@y": "203",
                                "@width": "40",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "26",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "39",
                                "@x": "579",
                                "@y": "368",
                                "@width": "19",
                                "@height": "26",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "9",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "40",
                                "@x": "566",
                                "@y": "52",
                                "@width": "24",
                                "@height": "50",
                                "@xoffset": "-7",
                                "@yoffset": "0",
                                "@xadvance": "11",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "41",
                                "@x": "541",
                                "@y": "52",
                                "@width": "24",
                                "@height": "50",
                                "@xoffset": "-6",
                                "@yoffset": "0",
                                "@xadvance": "11",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "42",
                                "@x": "0",
                                "@y": "457",
                                "@width": "30",
                                "@height": "30",
                                "@xoffset": "-7",
                                "@yoffset": "1",
                                "@xadvance": "16",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "43",
                                "@x": "190",
                                "@y": "379",
                                "@width": "36",
                                "@height": "37",
                                "@xoffset": "-6",
                                "@yoffset": "6",
                                "@xadvance": "24",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "44",
                                "@x": "152",
                                "@y": "454",
                                "@width": "22",
                                "@height": "27",
                                "@xoffset": "-7",
                                "@yoffset": "22",
                                "@xadvance": "9",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "45",
                                "@x": "486",
                                "@y": "437",
                                "@width": "26",
                                "@height": "19",
                                "@xoffset": "-7",
                                "@yoffset": "17",
                                "@xadvance": "11",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "46",
                                "@x": "348",
                                "@y": "440",
                                "@width": "21",
                                "@height": "22",
                                "@xoffset": "-6",
                                "@yoffset": "22",
                                "@xadvance": "9",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "47",
                                "@x": "64",
                                "@y": "157",
                                "@width": "30",
                                "@height": "45",
                                "@xoffset": "-8",
                                "@yoffset": "0",
                                "@xadvance": "14",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "48",
                                "@x": "245",
                                "@y": "287",
                                "@width": "34",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "49",
                                "@x": "355",
                                "@y": "325",
                                "@width": "27",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "50",
                                "@x": "325",
                                "@y": "237",
                                "@width": "34",
                                "@height": "43",
                                "@xoffset": "-7",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "51",
                                "@x": "416",
                                "@y": "281",
                                "@width": "33",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "52",
                                "@x": "551",
                                "@y": "193",
                                "@width": "36",
                                "@height": "43",
                                "@xoffset": "-8",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "53",
                                "@x": "450",
                                "@y": "281",
                                "@width": "33",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "54",
                                "@x": "0",
                                "@y": "291",
                                "@width": "34",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "55",
                                "@x": "360",
                                "@y": "237",
                                "@width": "34",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "56",
                                "@x": "382",
                                "@y": "281",
                                "@width": "33",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "57",
                                "@x": "395",
                                "@y": "237",
                                "@width": "34",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "58",
                                "@x": "293",
                                "@y": "412",
                                "@width": "21",
                                "@height": "34",
                                "@xoffset": "-5",
                                "@yoffset": "10",
                                "@xadvance": "11",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "59",
                                "@x": "167",
                                "@y": "379",
                                "@width": "22",
                                "@height": "39",
                                "@xoffset": "-6",
                                "@yoffset": "10",
                                "@xadvance": "11",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "60",
                                "@x": "300",
                                "@y": "370",
                                "@width": "36",
                                "@height": "35",
                                "@xoffset": "-6",
                                "@yoffset": "7",
                                "@xadvance": "24",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "61",
                                "@x": "201",
                                "@y": "452",
                                "@width": "36",
                                "@height": "25",
                                "@xoffset": "-6",
                                "@yoffset": "12",
                                "@xadvance": "24",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "62",
                                "@x": "337",
                                "@y": "369",
                                "@width": "36",
                                "@height": "35",
                                "@xoffset": "-6",
                                "@yoffset": "7",
                                "@xadvance": "24",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "63",
                                "@x": "231",
                                "@y": "331",
                                "@width": "31",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "18",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "64",
                                "@x": "465",
                                "@y": "149",
                                "@width": "43",
                                "@height": "43",
                                "@xoffset": "-7",
                                "@yoffset": "1",
                                "@xadvance": "29",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "65",
                                "@x": "0",
                                "@y": "203",
                                "@width": "41",
                                "@height": "43",
                                "@xoffset": "-8",
                                "@yoffset": "1",
                                "@xadvance": "26",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "66",
                                "@x": "217",
                                "@y": "243",
                                "@width": "35",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "23",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "67",
                                "@x": "124",
                                "@y": "201",
                                "@width": "39",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "26",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "68",
                                "@x": "204",
                                "@y": "199",
                                "@width": "39",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "28",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "69",
                                "@x": "430",
                                "@y": "237",
                                "@width": "34",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "22",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "70",
                                "@x": "280",
                                "@y": "282",
                                "@width": "33",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "20",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "71",
                                "@x": "83",
                                "@y": "203",
                                "@width": "40",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "28",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "72",
                                "@x": "439",
                                "@y": "193",
                                "@width": "37",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "26",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "73",
                                "@x": "497",
                                "@y": "325",
                                "@width": "20",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "10",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "74",
                                "@x": "263",
                                "@y": "331",
                                "@width": "31",
                                "@height": "43",
                                "@xoffset": "-8",
                                "@yoffset": "1",
                                "@xadvance": "18",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "75",
                                "@x": "0",
                                "@y": "247",
                                "@width": "36",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "24",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "76",
                                "@x": "550",
                                "@y": "281",
                                "@width": "32",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "18",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "77",
                                "@x": "509",
                                "@y": "149",
                                "@width": "43",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "33",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "78",
                                "@x": "323",
                                "@y": "193",
                                "@width": "38",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "28",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "79",
                                "@x": "420",
                                "@y": "149",
                                "@width": "44",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "31",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "80",
                                "@x": "314",
                                "@y": "281",
                                "@width": "33",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "81",
                                "@x": "373",
                                "@y": "149",
                                "@width": "46",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "31",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "82",
                                "@x": "465",
                                "@y": "237",
                                "@width": "34",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "22",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "83",
                                "@x": "348",
                                "@y": "281",
                                "@width": "33",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "84",
                                "@x": "284",
                                "@y": "193",
                                "@width": "38",
                                "@height": "43",
                                "@xoffset": "-8",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "85",
                                "@x": "477",
                                "@y": "193",
                                "@width": "36",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "26",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "86",
                                "@x": "164",
                                "@y": "199",
                                "@width": "39",
                                "@height": "43",
                                "@xoffset": "-8",
                                "@yoffset": "1",
                                "@xadvance": "23",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "87",
                                "@x": "321",
                                "@y": "149",
                                "@width": "51",
                                "@height": "43",
                                "@xoffset": "-8",
                                "@yoffset": "1",
                                "@xadvance": "36",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "88",
                                "@x": "362",
                                "@y": "193",
                                "@width": "38",
                                "@height": "43",
                                "@xoffset": "-7",
                                "@yoffset": "1",
                                "@xadvance": "24",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "89",
                                "@x": "244",
                                "@y": "194",
                                "@width": "39",
                                "@height": "43",
                                "@xoffset": "-8",
                                "@yoffset": "1",
                                "@xadvance": "23",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "90",
                                "@x": "401",
                                "@y": "193",
                                "@width": "37",
                                "@height": "43",
                                "@xoffset": "-8",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "91",
                                "@x": "59",
                                "@y": "107",
                                "@width": "23",
                                "@height": "49",
                                "@xoffset": "-6",
                                "@yoffset": "0",
                                "@xadvance": "11",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "92",
                                "@x": "33",
                                "@y": "157",
                                "@width": "30",
                                "@height": "45",
                                "@xoffset": "-8",
                                "@yoffset": "0",
                                "@xadvance": "14",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "93",
                                "@x": "35",
                                "@y": "107",
                                "@width": "23",
                                "@height": "49",
                                "@xoffset": "-6",
                                "@yoffset": "0",
                                "@xadvance": "11",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "94",
                                "@x": "472",
                                "@y": "404",
                                "@width": "34",
                                "@height": "32",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "24",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "95",
                                "@x": "421",
                                "@y": "438",
                                "@width": "35",
                                "@height": "19",
                                "@xoffset": "-8",
                                "@yoffset": "30",
                                "@xadvance": "18",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "96",
                                "@x": "324",
                                "@y": "440",
                                "@width": "23",
                                "@height": "23",
                                "@xoffset": "-8",
                                "@yoffset": "1",
                                "@xadvance": "9",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "97",
                                "@x": "102",
                                "@y": "420",
                                "@width": "32",
                                "@height": "34",
                                "@xoffset": "-7",
                                "@yoffset": "10",
                                "@xadvance": "20",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "98",
                                "@x": "408",
                                "@y": "103",
                                "@width": "35",
                                "@height": "45",
                                "@xoffset": "-5",
                                "@yoffset": "-1",
                                "@xadvance": "23",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "99",
                                "@x": "69",
                                "@y": "420",
                                "@width": "32",
                                "@height": "34",
                                "@xoffset": "-6",
                                "@yoffset": "10",
                                "@xadvance": "18",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "100",
                                "@x": "480",
                                "@y": "103",
                                "@width": "34",
                                "@height": "45",
                                "@xoffset": "-6",
                                "@yoffset": "-1",
                                "@xadvance": "23",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "101",
                                "@x": "544",
                                "@y": "368",
                                "@width": "34",
                                "@height": "34",
                                "@xoffset": "-6",
                                "@yoffset": "10",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "102",
                                "@x": "95",
                                "@y": "155",
                                "@width": "29",
                                "@height": "45",
                                "@xoffset": "-8",
                                "@yoffset": "-1",
                                "@xadvance": "11",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "103",
                                "@x": "181",
                                "@y": "243",
                                "@width": "35",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "10",
                                "@xadvance": "23",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "104",
                                "@x": "550",
                                "@y": "103",
                                "@width": "32",
                                "@height": "45",
                                "@xoffset": "-5",
                                "@yoffset": "-1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "105",
                                "@x": "475",
                                "@y": "325",
                                "@width": "21",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "9",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "106",
                                "@x": "168",
                                "@y": "0",
                                "@width": "25",
                                "@height": "52",
                                "@xoffset": "-9",
                                "@yoffset": "1",
                                "@xadvance": "9",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "107",
                                "@x": "0",
                                "@y": "157",
                                "@width": "32",
                                "@height": "45",
                                "@xoffset": "-5",
                                "@yoffset": "-1",
                                "@xadvance": "19",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "108",
                                "@x": "125",
                                "@y": "154",
                                "@width": "20",
                                "@height": "45",
                                "@xoffset": "-5",
                                "@yoffset": "-1",
                                "@xadvance": "9",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "109",
                                "@x": "464",
                                "@y": "369",
                                "@width": "43",
                                "@height": "34",
                                "@xoffset": "-5",
                                "@yoffset": "10",
                                "@xadvance": "32",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "110",
                                "@x": "135",
                                "@y": "419",
                                "@width": "32",
                                "@height": "34",
                                "@xoffset": "-5",
                                "@yoffset": "10",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "111",
                                "@x": "508",
                                "@y": "369",
                                "@width": "35",
                                "@height": "34",
                                "@xoffset": "-6",
                                "@yoffset": "10",
                                "@xadvance": "22",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "112",
                                "@x": "253",
                                "@y": "238",
                                "@width": "35",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "10",
                                "@xadvance": "23",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "113",
                                "@x": "500",
                                "@y": "237",
                                "@width": "34",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "10",
                                "@xadvance": "23",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "114",
                                "@x": "265",
                                "@y": "412",
                                "@width": "27",
                                "@height": "34",
                                "@xoffset": "-5",
                                "@yoffset": "10",
                                "@xadvance": "13",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "115",
                                "@x": "234",
                                "@y": "414",
                                "@width": "30",
                                "@height": "34",
                                "@xoffset": "-7",
                                "@yoffset": "10",
                                "@xadvance": "16",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "116",
                                "@x": "98",
                                "@y": "379",
                                "@width": "29",
                                "@height": "40",
                                "@xoffset": "-8",
                                "@yoffset": "4",
                                "@xadvance": "12",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "117",
                                "@x": "168",
                                "@y": "419",
                                "@width": "32",
                                "@height": "34",
                                "@xoffset": "-5",
                                "@yoffset": "10",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "118",
                                "@x": "0",
                                "@y": "422",
                                "@width": "34",
                                "@height": "34",
                                "@xoffset": "-8",
                                "@yoffset": "10",
                                "@xadvance": "18",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "119",
                                "@x": "420",
                                "@y": "369",
                                "@width": "43",
                                "@height": "34",
                                "@xoffset": "-8",
                                "@yoffset": "10",
                                "@xadvance": "28",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "120",
                                "@x": "35",
                                "@y": "422",
                                "@width": "33",
                                "@height": "34",
                                "@xoffset": "-7",
                                "@yoffset": "10",
                                "@xadvance": "18",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "121",
                                "@x": "535",
                                "@y": "237",
                                "@width": "34",
                                "@height": "43",
                                "@xoffset": "-8",
                                "@yoffset": "10",
                                "@xadvance": "18",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "122",
                                "@x": "201",
                                "@y": "417",
                                "@width": "32",
                                "@height": "34",
                                "@xoffset": "-8",
                                "@yoffset": "10",
                                "@xadvance": "17",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "123",
                                "@x": "199",
                                "@y": "105",
                                "@width": "27",
                                "@height": "48",
                                "@xoffset": "-8",
                                "@yoffset": "1",
                                "@xadvance": "11",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "124",
                                "@x": "36",
                                "@y": "0",
                                "@width": "19",
                                "@height": "54",
                                "@xoffset": "-6",
                                "@yoffset": "-1",
                                "@xadvance": "8",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "125",
                                "@x": "171",
                                "@y": "105",
                                "@width": "27",
                                "@height": "48",
                                "@xoffset": "-7",
                                "@yoffset": "1",
                                "@xadvance": "11",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "126",
                                "@x": "264",
                                "@y": "449",
                                "@width": "35",
                                "@height": "23",
                                "@xoffset": "-5",
                                "@yoffset": "13",
                                "@xadvance": "24",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "160",
                                "@x": "578",
                                "@y": "436",
                                "@width": "18",
                                "@height": "17",
                                "@xoffset": "-8",
                                "@yoffset": "36",
                                "@xadvance": "9",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "161",
                                "@x": "453",
                                "@y": "325",
                                "@width": "21",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "9",
                                "@xadvance": "12",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "162",
                                "@x": "65",
                                "@y": "379",
                                "@width": "32",
                                "@height": "40",
                                "@xoffset": "-5",
                                "@yoffset": "7",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "163",
                                "@x": "35",
                                "@y": "291",
                                "@width": "34",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "164",
                                "@x": "128",
                                "@y": "379",
                                "@width": "38",
                                "@height": "39",
                                "@xoffset": "-3",
                                "@yoffset": "5",
                                "@xadvance": "32",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "165",
                                "@x": "514",
                                "@y": "193",
                                "@width": "36",
                                "@height": "43",
                                "@xoffset": "-7",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "166",
                                "@x": "83",
                                "@y": "105",
                                "@width": "19",
                                "@height": "49",
                                "@xoffset": "-6",
                                "@yoffset": "2",
                                "@xadvance": "8",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "167",
                                "@x": "138",
                                "@y": "105",
                                "@width": "32",
                                "@height": "48",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "168",
                                "@x": "370",
                                "@y": "439",
                                "@width": "28",
                                "@height": "21",
                                "@xoffset": "-9",
                                "@yoffset": "1",
                                "@xadvance": "9",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "169",
                                "@x": "146",
                                "@y": "154",
                                "@width": "44",
                                "@height": "44",
                                "@xoffset": "-7",
                                "@yoffset": "1",
                                "@xadvance": "29",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "170",
                                "@x": "125",
                                "@y": "455",
                                "@width": "26",
                                "@height": "27",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "14",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "171",
                                "@x": "507",
                                "@y": "404",
                                "@width": "31",
                                "@height": "32",
                                "@xoffset": "-7",
                                "@yoffset": "11",
                                "@xadvance": "18",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "172",
                                "@x": "60",
                                "@y": "457",
                                "@width": "36",
                                "@height": "27",
                                "@xoffset": "-6",
                                "@yoffset": "12",
                                "@xadvance": "24",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "173",
                                "@x": "513",
                                "@y": "437",
                                "@width": "26",
                                "@height": "19",
                                "@xoffset": "-7",
                                "@yoffset": "17",
                                "@xadvance": "11",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "174",
                                "@x": "352",
                                "@y": "405",
                                "@width": "33",
                                "@height": "33",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "22",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "175",
                                "@x": "457",
                                "@y": "438",
                                "@width": "28",
                                "@height": "19",
                                "@xoffset": "-9",
                                "@yoffset": "3",
                                "@xadvance": "9",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "176",
                                "@x": "31",
                                "@y": "457",
                                "@width": "28",
                                "@height": "28",
                                "@xoffset": "-7",
                                "@yoffset": "1",
                                "@xadvance": "14",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "177",
                                "@x": "227",
                                "@y": "377",
                                "@width": "36",
                                "@height": "36",
                                "@xoffset": "-6",
                                "@yoffset": "6",
                                "@xadvance": "24",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "178",
                                "@x": "571",
                                "@y": "403",
                                "@width": "28",
                                "@height": "32",
                                "@xoffset": "-7",
                                "@yoffset": "1",
                                "@xadvance": "14",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "179",
                                "@x": "420",
                                "@y": "404",
                                "@width": "27",
                                "@height": "33",
                                "@xoffset": "-7",
                                "@yoffset": "1",
                                "@xadvance": "14",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "180",
                                "@x": "300",
                                "@y": "447",
                                "@width": "23",
                                "@height": "23",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "9",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "181",
                                "@x": "33",
                                "@y": "335",
                                "@width": "32",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "10",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "182",
                                "@x": "103",
                                "@y": "105",
                                "@width": "34",
                                "@height": "48",
                                "@xoffset": "-7",
                                "@yoffset": "1",
                                "@xadvance": "22",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "183",
                                "@x": "399",
                                "@y": "438",
                                "@width": "21",
                                "@height": "21",
                                "@xoffset": "-6",
                                "@yoffset": "14",
                                "@xadvance": "9",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "184",
                                "@x": "238",
                                "@y": "449",
                                "@width": "25",
                                "@height": "25",
                                "@xoffset": "-8",
                                "@yoffset": "27",
                                "@xadvance": "9",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "185",
                                "@x": "448",
                                "@y": "404",
                                "@width": "23",
                                "@height": "33",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "14",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "186",
                                "@x": "97",
                                "@y": "455",
                                "@width": "27",
                                "@height": "27",
                                "@xoffset": "-7",
                                "@yoffset": "1",
                                "@xadvance": "14",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "187",
                                "@x": "539",
                                "@y": "404",
                                "@width": "31",
                                "@height": "32",
                                "@xoffset": "-6",
                                "@yoffset": "11",
                                "@xadvance": "18",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "188",
                                "@x": "273",
                                "@y": "103",
                                "@width": "44",
                                "@height": "45",
                                "@xoffset": "-6",
                                "@yoffset": "0",
                                "@xadvance": "32",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "189",
                                "@x": "318",
                                "@y": "103",
                                "@width": "44",
                                "@height": "45",
                                "@xoffset": "-6",
                                "@yoffset": "0",
                                "@xadvance": "32",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "190",
                                "@x": "363",
                                "@y": "103",
                                "@width": "44",
                                "@height": "45",
                                "@xoffset": "-7",
                                "@yoffset": "0",
                                "@xadvance": "32",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "191",
                                "@x": "295",
                                "@y": "326",
                                "@width": "31",
                                "@height": "43",
                                "@xoffset": "-7",
                                "@yoffset": "9",
                                "@xadvance": "18",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "192",
                                "@x": "329",
                                "@y": "0",
                                "@width": "41",
                                "@height": "51",
                                "@xoffset": "-8",
                                "@yoffset": "-7",
                                "@xadvance": "26",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "193",
                                "@x": "371",
                                "@y": "0",
                                "@width": "41",
                                "@height": "51",
                                "@xoffset": "-8",
                                "@yoffset": "-7",
                                "@xadvance": "26",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "194",
                                "@x": "413",
                                "@y": "0",
                                "@width": "41",
                                "@height": "51",
                                "@xoffset": "-8",
                                "@yoffset": "-7",
                                "@xadvance": "26",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "195",
                                "@x": "317",
                                "@y": "52",
                                "@width": "41",
                                "@height": "50",
                                "@xoffset": "-8",
                                "@yoffset": "-6",
                                "@xadvance": "26",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "196",
                                "@x": "359",
                                "@y": "52",
                                "@width": "41",
                                "@height": "50",
                                "@xoffset": "-8",
                                "@yoffset": "-6",
                                "@xadvance": "26",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "197",
                                "@x": "56",
                                "@y": "0",
                                "@width": "41",
                                "@height": "52",
                                "@xoffset": "-8",
                                "@yoffset": "-8",
                                "@xadvance": "26",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "198",
                                "@x": "269",
                                "@y": "149",
                                "@width": "51",
                                "@height": "43",
                                "@xoffset": "-8",
                                "@yoffset": "1",
                                "@xadvance": "37",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "199",
                                "@x": "455",
                                "@y": "0",
                                "@width": "39",
                                "@height": "51",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "26",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "200",
                                "@x": "74",
                                "@y": "53",
                                "@width": "34",
                                "@height": "51",
                                "@xoffset": "-5",
                                "@yoffset": "-7",
                                "@xadvance": "22",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "201",
                                "@x": "109",
                                "@y": "53",
                                "@width": "34",
                                "@height": "51",
                                "@xoffset": "-5",
                                "@yoffset": "-7",
                                "@xadvance": "22",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "202",
                                "@x": "144",
                                "@y": "53",
                                "@width": "34",
                                "@height": "51",
                                "@xoffset": "-5",
                                "@yoffset": "-7",
                                "@xadvance": "22",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "203",
                                "@x": "477",
                                "@y": "52",
                                "@width": "34",
                                "@height": "50",
                                "@xoffset": "-5",
                                "@yoffset": "-6",
                                "@xadvance": "22",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "204",
                                "@x": "179",
                                "@y": "53",
                                "@width": "23",
                                "@height": "51",
                                "@xoffset": "-8",
                                "@yoffset": "-7",
                                "@xadvance": "10",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "205",
                                "@x": "203",
                                "@y": "52",
                                "@width": "23",
                                "@height": "51",
                                "@xoffset": "-5",
                                "@yoffset": "-7",
                                "@xadvance": "10",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "206",
                                "@x": "572",
                                "@y": "0",
                                "@width": "27",
                                "@height": "51",
                                "@xoffset": "-8",
                                "@yoffset": "-7",
                                "@xadvance": "10",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "207",
                                "@x": "512",
                                "@y": "52",
                                "@width": "28",
                                "@height": "50",
                                "@xoffset": "-9",
                                "@yoffset": "-6",
                                "@xadvance": "10",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "208",
                                "@x": "553",
                                "@y": "149",
                                "@width": "42",
                                "@height": "43",
                                "@xoffset": "-8",
                                "@yoffset": "1",
                                "@xadvance": "28",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "209",
                                "@x": "401",
                                "@y": "52",
                                "@width": "38",
                                "@height": "50",
                                "@xoffset": "-5",
                                "@yoffset": "-6",
                                "@xadvance": "28",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "210",
                                "@x": "284",
                                "@y": "0",
                                "@width": "44",
                                "@height": "51",
                                "@xoffset": "-6",
                                "@yoffset": "-7",
                                "@xadvance": "31",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "211",
                                "@x": "239",
                                "@y": "0",
                                "@width": "44",
                                "@height": "51",
                                "@xoffset": "-6",
                                "@yoffset": "-7",
                                "@xadvance": "31",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "212",
                                "@x": "194",
                                "@y": "0",
                                "@width": "44",
                                "@height": "51",
                                "@xoffset": "-6",
                                "@yoffset": "-7",
                                "@xadvance": "31",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "213",
                                "@x": "272",
                                "@y": "52",
                                "@width": "44",
                                "@height": "50",
                                "@xoffset": "-6",
                                "@yoffset": "-6",
                                "@xadvance": "31",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "214",
                                "@x": "227",
                                "@y": "52",
                                "@width": "44",
                                "@height": "50",
                                "@xoffset": "-6",
                                "@yoffset": "-6",
                                "@xadvance": "31",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "215",
                                "@x": "386",
                                "@y": "404",
                                "@width": "33",
                                "@height": "33",
                                "@xoffset": "-4",
                                "@yoffset": "8",
                                "@xadvance": "24",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "216",
                                "@x": "191",
                                "@y": "154",
                                "@width": "44",
                                "@height": "44",
                                "@xoffset": "-7",
                                "@yoffset": "0",
                                "@xadvance": "31",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "217",
                                "@x": "37",
                                "@y": "55",
                                "@width": "36",
                                "@height": "51",
                                "@xoffset": "-5",
                                "@yoffset": "-7",
                                "@xadvance": "26",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "218",
                                "@x": "0",
                                "@y": "55",
                                "@width": "36",
                                "@height": "51",
                                "@xoffset": "-5",
                                "@yoffset": "-7",
                                "@xadvance": "26",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "219",
                                "@x": "535",
                                "@y": "0",
                                "@width": "36",
                                "@height": "51",
                                "@xoffset": "-5",
                                "@yoffset": "-7",
                                "@xadvance": "26",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "220",
                                "@x": "440",
                                "@y": "52",
                                "@width": "36",
                                "@height": "50",
                                "@xoffset": "-5",
                                "@yoffset": "-6",
                                "@xadvance": "26",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "221",
                                "@x": "495",
                                "@y": "0",
                                "@width": "39",
                                "@height": "51",
                                "@xoffset": "-8",
                                "@yoffset": "-7",
                                "@xadvance": "23",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "222",
                                "@x": "70",
                                "@y": "291",
                                "@width": "34",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "223",
                                "@x": "515",
                                "@y": "103",
                                "@width": "34",
                                "@height": "45",
                                "@xoffset": "-5",
                                "@yoffset": "-1",
                                "@xadvance": "22",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "224",
                                "@x": "132",
                                "@y": "335",
                                "@width": "32",
                                "@height": "43",
                                "@xoffset": "-7",
                                "@yoffset": "1",
                                "@xadvance": "20",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "225",
                                "@x": "99",
                                "@y": "335",
                                "@width": "32",
                                "@height": "43",
                                "@xoffset": "-7",
                                "@yoffset": "1",
                                "@xadvance": "20",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "226",
                                "@x": "66",
                                "@y": "335",
                                "@width": "32",
                                "@height": "43",
                                "@xoffset": "-7",
                                "@yoffset": "1",
                                "@xadvance": "20",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "227",
                                "@x": "554",
                                "@y": "325",
                                "@width": "32",
                                "@height": "42",
                                "@xoffset": "-7",
                                "@yoffset": "2",
                                "@xadvance": "20",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "228",
                                "@x": "0",
                                "@y": "335",
                                "@width": "32",
                                "@height": "43",
                                "@xoffset": "-7",
                                "@yoffset": "1",
                                "@xadvance": "20",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "229",
                                "@x": "236",
                                "@y": "149",
                                "@width": "32",
                                "@height": "44",
                                "@xoffset": "-7",
                                "@yoffset": "0",
                                "@xadvance": "20",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "230",
                                "@x": "374",
                                "@y": "369",
                                "@width": "45",
                                "@height": "34",
                                "@xoffset": "-7",
                                "@yoffset": "10",
                                "@xadvance": "32",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "231",
                                "@x": "33",
                                "@y": "379",
                                "@width": "31",
                                "@height": "42",
                                "@xoffset": "-6",
                                "@yoffset": "10",
                                "@xadvance": "18",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "232",
                                "@x": "105",
                                "@y": "291",
                                "@width": "34",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "233",
                                "@x": "140",
                                "@y": "291",
                                "@width": "34",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "234",
                                "@x": "175",
                                "@y": "289",
                                "@width": "34",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "235",
                                "@x": "210",
                                "@y": "287",
                                "@width": "34",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "236",
                                "@x": "407",
                                "@y": "325",
                                "@width": "23",
                                "@height": "43",
                                "@xoffset": "-8",
                                "@yoffset": "1",
                                "@xadvance": "9",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "237",
                                "@x": "383",
                                "@y": "325",
                                "@width": "23",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "9",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "238",
                                "@x": "327",
                                "@y": "325",
                                "@width": "27",
                                "@height": "43",
                                "@xoffset": "-8",
                                "@yoffset": "1",
                                "@xadvance": "9",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "239",
                                "@x": "570",
                                "@y": "237",
                                "@width": "28",
                                "@height": "43",
                                "@xoffset": "-9",
                                "@yoffset": "1",
                                "@xadvance": "9",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "240",
                                "@x": "444",
                                "@y": "103",
                                "@width": "35",
                                "@height": "45",
                                "@xoffset": "-7",
                                "@yoffset": "-1",
                                "@xadvance": "22",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "241",
                                "@x": "0",
                                "@y": "379",
                                "@width": "32",
                                "@height": "42",
                                "@xoffset": "-5",
                                "@yoffset": "2",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "242",
                                "@x": "145",
                                "@y": "245",
                                "@width": "35",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "22",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "243",
                                "@x": "73",
                                "@y": "247",
                                "@width": "35",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "22",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "244",
                                "@x": "37",
                                "@y": "247",
                                "@width": "35",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "22",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "245",
                                "@x": "518",
                                "@y": "325",
                                "@width": "35",
                                "@height": "42",
                                "@xoffset": "-6",
                                "@yoffset": "2",
                                "@xadvance": "22",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "246",
                                "@x": "289",
                                "@y": "237",
                                "@width": "35",
                                "@height": "43",
                                "@xoffset": "-6",
                                "@yoffset": "1",
                                "@xadvance": "22",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "247",
                                "@x": "315",
                                "@y": "406",
                                "@width": "36",
                                "@height": "33",
                                "@xoffset": "-6",
                                "@yoffset": "8",
                                "@xadvance": "24",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "248",
                                "@x": "264",
                                "@y": "375",
                                "@width": "35",
                                "@height": "36",
                                "@xoffset": "-6",
                                "@yoffset": "9",
                                "@xadvance": "22",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "249",
                                "@x": "517",
                                "@y": "281",
                                "@width": "32",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "250",
                                "@x": "484",
                                "@y": "281",
                                "@width": "32",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "251",
                                "@x": "165",
                                "@y": "335",
                                "@width": "32",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "252",
                                "@x": "198",
                                "@y": "333",
                                "@width": "32",
                                "@height": "43",
                                "@xoffset": "-5",
                                "@yoffset": "1",
                                "@xadvance": "21",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "253",
                                "@x": "98",
                                "@y": "0",
                                "@width": "34",
                                "@height": "52",
                                "@xoffset": "-8",
                                "@yoffset": "1",
                                "@xadvance": "18",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "254",
                                "@x": "0",
                                "@y": "0",
                                "@width": "35",
                                "@height": "54",
                                "@xoffset": "-5",
                                "@yoffset": "-1",
                                "@xadvance": "23",
                                "@page": "0",
                                "@chnl": "15"
                            }, 
                            {
                                "@id": "255",
                                "@x": "133",
                                "@y": "0",
                                "@width": "34",
                                "@height": "52",
                                "@xoffset": "-8",
                                "@yoffset": "1",
                                "@xadvance": "18",
                                "@page": "0",
                                "@chnl": "15"
                            }
                        ]
                    }
                }
            };
            this.levelData = {
                "text": {
                    "starTimes": [
                        7500, 
                        15000, 
                        22500
                    ],
                    "saveId": "toonix4",
                    "en": [
                        {
                            "@title": "A",
                            "gameWords": [
                                {
                                    "@gridSize": [
                                        11
                                    ],
                                    "@words": [
                                        "SCOOBY", 
                                        "SHAGGY", 
                                        "DAPHNE", 
                                        "FRED", 
                                        "VELMA", 
                                        "GHOST", 
                                        "MYSTERY", 
                                        "SPOOKY", 
                                        "ZOINKS", 
                                        "JINKIES", 
                                        "JEEPERS", 
                                        "PESKY", 
                                        "MALLORY", 
                                        "OOPSY", 
                                        "GREMLIN", 
                                        "GUSTAVO", 
                                        "ROSE", 
                                        "RUBY", 
                                        "TRUDY", 
                                        "CHUCK", 
                                        "WAYNE"
                                    ]
                                }
                            ]
                        }
                    ],
                    "da": [
                        {
                            "@title": "A",
                            "gameWords": [
                                {
                                    "@gridSize": [
                                        11
                                    ],
                                    "@words": [
                                        "SCOOBY", 
                                        "STUBBE", 
                                        "DAPHNE", 
                                        "FRED", 
                                        "VERA", 
                                        "SPØGELSE", 
                                        "MYSTERIE", 
                                        "UHYGGELIG", 
                                        "ZOINKS", 
                                        "JINKIES", 
                                        "JEEPERS", 
                                        "GENERENDE", 
                                        "MALLORY", 
                                        "UPS", 
                                        "GREMLIN", 
                                        "GUSTAVO", 
                                        "ROSE", 
                                        "RUBY", 
                                        "TRUDY", 
                                        "CHUCK", 
                                        "WAYNE"
                                    ]
                                }
                            ]
                        }
                    ],
                    "fi": [
                        {
                            "@title": "A",
                            "gameWords": [
                                {
                                    "@gridSize": [
                                        11
                                    ],
                                    "@words": [
                                        "SCOOBY", 
                                        "SHAGGY", 
                                        "DAPHNE", 
                                        "FRED", 
                                        "VELMA", 
                                        "AAVE", 
                                        "MYSTEERI", 
                                        "AAVEMAINEN", 
                                        "ZOINKS", 
                                        "JINKIES", 
                                        "JEEPERS", 
                                        "PESKY", 
                                        "MALLORY", 
                                        "OOPSY", 
                                        "GREMLIN", 
                                        "GUSTAVO", 
                                        "ROSE", 
                                        "RUBY", 
                                        "TRUDY", 
                                        "CHUCK", 
                                        "WAYNE"
                                    ]
                                }
                            ]
                        }
                    ],
                    "no": [
                        {
                            "@title": "A",
                            "gameWords": [
                                {
                                    "@gridSize": [
                                        11
                                    ],
                                    "@words": [
                                        "SCOOBY", 
                                        "SHAGGY", 
                                        "DAPHNE", 
                                        "FRED", 
                                        "VELMA", 
                                        "SPØKELSER", 
                                        "MYSTERIE", 
                                        "SKUMMELT", 
                                        "ZOINKS", 
                                        "JINKIES", 
                                        "JEEPERS", 
                                        "PESKY", 
                                        "MALLORY", 
                                        "OOPSY", 
                                        "GREMLIN", 
                                        "GUSTAVO", 
                                        "ROSE", 
                                        "RUBY", 
                                        "TRUDY", 
                                        "CHUCK", 
                                        "WAYNE"
                                    ]
                                }
                            ]
                        }
                    ],
                    "se": [
                        {
                            "@title": "A",
                            "gameWords": [
                                {
                                    "@gridSize": [
                                        11
                                    ],
                                    "@words": [
                                        "SCOOBY", 
                                        "SHAGGY", 
                                        "DAPHNE", 
                                        "FRED", 
                                        "VELMA", 
                                        "SPÖKEN", 
                                        "MYSTERIE", 
                                        "KUSLIGT", 
                                        "ZOINKS", 
                                        "JINKIES", 
                                        "JEEPERS", 
                                        "PESKY", 
                                        "MALLORY", 
                                        "OOPSY", 
                                        "GREMLIN", 
                                        "GUSTAVO", 
                                        "ROSE", 
                                        "RUBY", 
                                        "TRUDY", 
                                        "CHUCK", 
                                        "WAYNE"
                                    ]
                                }
                            ]
                        }
                    ]
                }
            };
            this.textData = {
                "text": {
                    "en": {
                        "quickGame": {
                            "@text": [
                                "Quick Game"
                            ],
                            "@fontId": 0
                        },
                        "selectLevel": {
                            "@text": [
                                "Select Level"
                            ],
                            "@fontId": 0
                        },
                        "categorySelect": {
                            "@text": [
                                "Select Category"
                            ],
                            "@fontId": 0
                        },
                        "level": {
                            "@text": [
                                "Level"
                            ],
                            "@fontId": 0
                        },
                        "new": {
                            "@text": [
                                "New"
                            ],
                            "@fontId": 0
                        },
                        "quit": {
                            "@text": [
                                "Quit"
                            ],
                            "@fontId": 0
                        },
                        "restart": {
                            "@text": [
                                "Restart"
                            ],
                            "@fontId": 0
                        },
                        "complete0": {
                            "@text": [
                                "Perfect!"
                            ],
                            "@fontId": 0
                        },
                        "complete1": {
                            "@text": [
                                "Excellent!"
                            ],
                            "@fontId": 0
                        },
                        "complete2": {
                            "@text": [
                                "Well done!"
                            ],
                            "@fontId": 0
                        },
                        "complete3": {
                            "@text": [
                                "Completed!"
                            ],
                            "@fontId": 0
                        },
                        "stats0": {
                            "@text": [
                                "Games completed:"
                            ],
                            "@fontId": 0
                        },
                        "stats1": {
                            "@text": [
                                "Time per game:"
                            ],
                            "@fontId": 0
                        },
                        "stats2": {
                            "@text": [
                                "Total Playing time:"
                            ],
                            "@fontId": 0
                        },
                        "next": {
                            "@text": [
                                "Next"
                            ],
                            "@fontId": 0
                        },
                        "easy": {
                            "@text": [
                                "Easy"
                            ],
                            "@fontId": 0
                        },
                        "hard": {
                            "@text": [
                                "Hard"
                            ],
                            "@fontId": 0
                        }
                    },
                    "da": {
                        "quickGame": {
                            "@text": [
                                "Hurtigspil"
                            ],
                            "@fontId": 0
                        },
                        "selectLevel": {
                            "@text": [
                                "Vælg niveau"
                            ],
                            "@fontId": 0
                        },
                        "categorySelect": {
                            "@text": [
                                "Vælg kategori"
                            ],
                            "@fontId": 0
                        },
                        "level": {
                            "@text": [
                                "Niveau"
                            ],
                            "@fontId": 0
                        },
                        "new": {
                            "@text": [
                                "Ny"
                            ],
                            "@fontId": 0
                        },
                        "quit": {
                            "@text": [
                                "Afslut"
                            ],
                            "@fontId": 0
                        },
                        "restart": {
                            "@text": [
                                "Start igen"
                            ],
                            "@fontId": 0
                        },
                        "complete0": {
                            "@text": [
                                "Perfekt!"
                            ],
                            "@fontId": 0
                        },
                        "complete1": {
                            "@text": [
                                "Fremragende!"
                            ],
                            "@fontId": 0
                        },
                        "complete2": {
                            "@text": [
                                "Godt klaret!"
                            ],
                            "@fontId": 0
                        },
                        "complete3": {
                            "@text": [
                                "Gennemført!"
                            ],
                            "@fontId": 0
                        },
                        "stats0": {
                            "@text": [
                                "Spil gennemført:"
                            ],
                            "@fontId": 0
                        },
                        "stats1": {
                            "@text": [
                                "Tid pr. spil:"
                            ],
                            "@fontId": 0
                        },
                        "stats2": {
                            "@text": [
                                "Samlet spilletid"
                            ],
                            "@fontId": 0
                        },
                        "next": {
                            "@text": [
                                "Næste"
                            ],
                            "@fontId": 0
                        },
                        "easy": {
                            "@text": [
                                "Let"
                            ],
                            "@fontId": 0
                        },
                        "hard": {
                            "@text": [
                                "Hård"
                            ],
                            "@fontId": 0
                        }
                    },
                    "fi": {
                        "quickGame": {
                            "@text": [
                                "Pikapeli"
                            ],
                            "@fontId": 0
                        },
                        "selectLevel": {
                            "@text": [
                                "Valitse taso"
                            ],
                            "@fontId": 0
                        },
                        "categorySelect": {
                            "@text": [
                                "Valitse kategoria"
                            ],
                            "@fontId": 0
                        },
                        "level": {
                            "@text": [
                                "Taso"
                            ],
                            "@fontId": 0
                        },
                        "new": {
                            "@text": [
                                "Uusi"
                            ],
                            "@fontId": 0
                        },
                        "quit": {
                            "@text": [
                                "Lopeta"
                            ],
                            "@fontId": 0
                        },
                        "restart": {
                            "@text": [
                                "Aloita uudestaan"
                            ],
                            "@fontId": 0
                        },
                        "complete0": {
                            "@text": [
                                "Loistavaa!"
                            ],
                            "@fontId": 0
                        },
                        "complete1": {
                            "@text": [
                                "Upeaa!"
                            ],
                            "@fontId": 0
                        },
                        "complete2": {
                            "@text": [
                                "Erinomaista!"
                            ],
                            "@fontId": 0
                        },
                        "complete3": {
                            "@text": [
                                "Valmista!"
                            ],
                            "@fontId": 0
                        },
                        "stats0": {
                            "@text": [
                                "Valmiit pelit:"
                            ],
                            "@fontId": 0
                        },
                        "stats1": {
                            "@text": [
                                "Aikaa per peli:"
                            ],
                            "@fontId": 0
                        },
                        "stats2": {
                            "@text": [
                                "Kokonaispeliaika"
                            ],
                            "@fontId": 0
                        },
                        "next": {
                            "@text": [
                                "Seuraava"
                            ],
                            "@fontId": 0
                        },
                        "easy": {
                            "@text": [
                                "Helppo"
                            ],
                            "@fontId": 0
                        },
                        "hard": {
                            "@text": [
                                "Vaikea"
                            ],
                            "@fontId": 0
                        }
                    },
                    "no": {
                        "quickGame": {
                            "@text": [
                                "Hurtigspill"
                            ],
                            "@fontId": 0
                        },
                        "selectLevel": {
                            "@text": [
                                "Velg nivå"
                            ],
                            "@fontId": 0
                        },
                        "categorySelect": {
                            "@text": [
                                "Velg kategori"
                            ],
                            "@fontId": 0
                        },
                        "level": {
                            "@text": [
                                "Nivå"
                            ],
                            "@fontId": 0
                        },
                        "new": {
                            "@text": [
                                "Ny"
                            ],
                            "@fontId": 0
                        },
                        "quit": {
                            "@text": [
                                "Avslutt"
                            ],
                            "@fontId": 0
                        },
                        "restart": {
                            "@text": [
                                "Start på nytt"
                            ],
                            "@fontId": 0
                        },
                        "complete0": {
                            "@text": [
                                "Perfekt!"
                            ],
                            "@fontId": 0
                        },
                        "complete1": {
                            "@text": [
                                "Glimrende!"
                            ],
                            "@fontId": 0
                        },
                        "complete2": {
                            "@text": [
                                "Godt jobbet!"
                            ],
                            "@fontId": 0
                        },
                        "complete3": {
                            "@text": [
                                "Fullført!"
                            ],
                            "@fontId": 0
                        },
                        "stats0": {
                            "@text": [
                                "Spill fullført:"
                            ],
                            "@fontId": 0
                        },
                        "stats1": {
                            "@text": [
                                "Tid per spill:"
                            ],
                            "@fontId": 0
                        },
                        "stats2": {
                            "@text": [
                                "Total spilletid:"
                            ],
                            "@fontId": 0
                        },
                        "next": {
                            "@text": [
                                "Neste"
                            ],
                            "@fontId": 0
                        },
                        "easy": {
                            "@text": [
                                "Lett"
                            ],
                            "@fontId": 0
                        },
                        "hard": {
                            "@text": [
                                "Vanskelig"
                            ],
                            "@fontId": 0
                        }
                    },
                    "se": {
                        "quickGame": {
                            "@text": [
                                "Snabbspel"
                            ],
                            "@fontId": 0
                        },
                        "selectLevel": {
                            "@text": [
                                "Välj nivå"
                            ],
                            "@fontId": 0
                        },
                        "categorySelect": {
                            "@text": [
                                "Välj kategori"
                            ],
                            "@fontId": 0
                        },
                        "level": {
                            "@text": [
                                "Nivå"
                            ],
                            "@fontId": 0
                        },
                        "new": {
                            "@text": [
                                "Ny"
                            ],
                            "@fontId": 0
                        },
                        "quit": {
                            "@text": [
                                "Avsluta"
                            ],
                            "@fontId": 0
                        },
                        "restart": {
                            "@text": [
                                "Starta om"
                            ],
                            "@fontId": 0
                        },
                        "complete0": {
                            "@text": [
                                "Pefekt!"
                            ],
                            "@fontId": 0
                        },
                        "complete1": {
                            "@text": [
                                "Utmärkt!"
                            ],
                            "@fontId": 0
                        },
                        "complete2": {
                            "@text": [
                                "Bra jobbat!"
                            ],
                            "@fontId": 0
                        },
                        "complete3": {
                            "@text": [
                                "Klart!"
                            ],
                            "@fontId": 0
                        },
                        "stats0": {
                            "@text": [
                                "Klarade spel:"
                            ],
                            "@fontId": 0
                        },
                        "stats1": {
                            "@text": [
                                "Tid per spel:"
                            ],
                            "@fontId": 0
                        },
                        "stats2": {
                            "@text": [
                                "Total speltid:"
                            ],
                            "@fontId": 0
                        },
                        "next": {
                            "@text": [
                                "Nästa"
                            ],
                            "@fontId": 0
                        },
                        "easy": {
                            "@text": [
                                "Lätt"
                            ],
                            "@fontId": 0
                        },
                        "hard": {
                            "@text": [
                                "Svår"
                            ],
                            "@fontId": 0
                        }
                    }
                }
            };
        }
        return JSONData;
    })();
    Utils.JSONData = JSONData;    
})(Utils || (Utils = {}));
var requestAnimFrame = (function () {
    return window.requestAnimationFrame || (window).webkitRequestAnimationFrame || (window).mozRequestAnimationFrame || (window).oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60, new Date().getTime());
    };
})();
var previousTime;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var minSquareSize = 500;
var maxSquareSize = 900;
var canvasX;
var canvasY;
var canvasScale;
var div = document.getElementById('viewporter');
var sound;
var music;
var audioType = 0;
var muted = false;
var splash;
var splashTimer = 0;
var assetLib;
var preAssetLib;
var rotatePause = false;
var manualPause = false;
var isMobile = false;
var gameState = "loading";
var aLangs = new Array("EN");
var curLang = "";
var isBugBrowser = false;
var isIE10 = false;
var delta;
var radian = Math.PI / 180;
var ios9FirstTouch = false;
var textDisplay;
var saveDataHandler;
var hasFocus = true;
if(navigator.userAgent.match(/MSIE\s([\d]+)/)) {
    isIE10 = true;
}
var fpsMeter = new Utils.FpsMeter();
var deviceAgent = navigator.userAgent.toLowerCase();
if(deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipad/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i)) {
    isMobile = true;
    if(deviceAgent.match(/(android)/) && !/Chrome/.test(navigator.userAgent)) {
        isBugBrowser = true;
    }
}
var userInput = new Utils.UserInput(canvas, isBugBrowser);
resizeCanvas();
window.onresize = function () {
    setTimeout(function () {
        resizeCanvas();
    }, 1);
};
function visibleResume() {
    if(!hasFocus) {
        if(userInput) {
            userInput.checkKeyFocus();
        }
        if(!muted && gameState != "pause" && gameState != "splash" && gameState != "loading") {
            Howler.mute(false);
            playMusic();
        }
    }
    hasFocus = true;
}
function visiblePause() {
    hasFocus = false;
    Howler.mute(true);
    music.pause();
}
(window).onpageshow = function () {
    if(!hasFocus) {
        if(userInput) {
            userInput.checkKeyFocus();
        }
        if(!muted && gameState != "pause" && gameState != "splash" && gameState != "loading") {
            Howler.mute(false);
            playMusic();
        }
    }
    hasFocus = true;
};
(window).onpagehide = function () {
    hasFocus = false;
    Howler.mute(true);
    music.pause();
};
function playMusic() {
    if(!music.playing()) {
        music.play();
    }
}
window.addEventListener("load", function () {
    setTimeout(function () {
        resizeCanvas();
    }, 0);
    window.addEventListener("orientationchange", function () {
        setTimeout(function () {
            resizeCanvas();
        }, 500);
        setTimeout(function () {
            resizeCanvas();
        }, 2000);
    }, false);
});
function isStock() {
    var matches = window.navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);
    return matches && parseFloat(matches[1]) < 537;
}
var ua = navigator.userAgent;
var isSharpStock = ((/SHL24|SH-01F/i).test(ua)) && isStock();
var isXperiaAStock = ((/SO-04E/i).test(ua)) && isStock();
var isFujitsuStock = ((/F-01F/i).test(ua)) && isStock();
if(!isIE10 && !isSharpStock && !isXperiaAStock && !isFujitsuStock && (typeof (window).AudioContext !== 'undefined' || typeof (window).webkitAudioContext !== 'undefined' || navigator.userAgent.indexOf('Android') == -1)) {
    audioType = 1;
    sound = new Howl({
        src: [
            'audio/sound.ogg', 
            'audio/sound.m4a'
        ],
        sprite: {
            click: [
                0, 
                200
            ],
            dragLine: [
                500, 
                400
            ],
            noWord: [
                1000, 
                400
            ],
            gotWord: [
                1500, 
                1400
            ],
            starGone: [
                3000, 
                700
            ],
            endGame: [
                4000, 
                1400
            ],
            firework0: [
                5500, 
                1200
            ],
            firework1: [
                7000, 
                1200
            ],
            firework2: [
                8500, 
                1200
            ]
        }
    });
    music = new Howl({
        src: [
            'audio/music.ogg', 
            'audio/music.m4a'
        ],
        volume: 0,
        loop: true
    });
} else {
    audioType = 0;
}
var panel;
var background;
var aTutorials = new Array();
var musicTween;
var oImageIds = {
};
var gameType = 0;
var gridData = {
    width: 450,
    x: 0,
    y: 0
};
var aStarTimes = new Array();
var gameTime;
var aWordGrid;
var gridSize;
var spareLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var wordLineHandler;
var aWordsToGuess;
var clockRunning;
var multiButId = 0;
var levelButId = 0;
var categoryId;
var gameId;
var prevScreen;
var aRandomLevels;
var randomLevelId = 0;
var gameSettingsIsOn = true;
var prevGameTime;
var trace = "---";
var aEffects;
var fireworkTime;
var wordDir;
var oGameData;
var wordsPerGame = 8;
var starGoneCount;
var tempGameTime;
var aLoadItems;
var changeBgId = Math.floor(Math.random() * 5);
var isEasy;
var aWeightedWords = new Array(2, 3, 0, 1, 4);
var firstRun = true;
loadLang();
function loadLang() {
    curLang = "en";
    loadPreAssets();
}
function initSplash() {
    gameState = "splash";
    resizeCanvas();
    if(!textDisplay) {
        textDisplay = new Utils.TextDisplay();
        aStarTimes = assetLib.textData.levelText.text.starTimes;
    }
    var tempNum = 0;
    aRandomLevels = new Array();
    for(var i = 0; i < textDisplay.categoryTotal; i++) {
        for(var j = 0; j < textDisplay.oLevelTextData[i].aGameData.length; j++) {
            aRandomLevels.push(tempNum++);
        }
    }
    aRandomLevels = randomise(aRandomLevels);
    saveDataHandler = new Utils.SaveDataHandler(assetLib.textData.levelText.text.saveId);
    if(audioType == 1 && !muted) {
        playMusic();
        if(!hasFocus) {
            music.pause();
        }
    }
    initStartScreen();
}
function randomise(_aTemp) {
    for(var i = _aTemp.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = _aTemp[i];
        _aTemp[i] = _aTemp[j];
        _aTemp[j] = temp;
    }
    return _aTemp;
}
function initStartScreen() {
    gameState = "start";
    userInput.removeHitArea("moreGames");
    if(audioType == 1) {
        music.fade(music.volume(), .5, 200);
    }
    var oEasyGameBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            0 - 150, 
            0
        ],
        align: [
            .5, 
            .85
        ],
        id: oImageIds.easyPlayBut,
        noMove: false,
        text: "easy"
    };
    var oHardGameBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            0 + 150, 
            0
        ],
        align: [
            .5, 
            .85
        ],
        id: oImageIds.hardPlayBut,
        noMove: false,
        text: "hard"
    };
    userInput.addHitArea("easyPlayFromStart", butEventHandler, null, "image", oEasyGameBut);
    userInput.addHitArea("hardPlayFromStart", butEventHandler, null, "image", oHardGameBut);
    var aButs = new Array(oEasyGameBut, oHardGameBut);
    if(audioType == 1) {
        var mb = oImageIds.muteBut0;
        if(muted) {
            mb = oImageIds.muteBut1;
        }
        var oMuteBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                -38, 
                35
            ],
            align: [
                1, 
                0
            ],
            id: mb,
            noMove: true
        };
        userInput.addHitArea("mute", butEventHandler, null, "image", oMuteBut);
        aButs.push(oMuteBut);
    }
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween2();
    previousTime = new Date().getTime();
    background = new Elements.Background();
    updateStartScreenEvent();
}
function initStartSettings(_screen) {
    gameState = "startSettings";
    prevScreen = _screen;
    var tempTime = 0;
    var tempTotalGames = 0;
    var tempCompletedGames = 0;
    for(var i = 0; i < saveDataHandler.aLevelStore.length; i++) {
        tempTime += saveDataHandler.aLevelStore[i];
        if(saveDataHandler.aLevelStore[i] != 0) {
            tempCompletedGames++;
        }
        tempTotalGames++;
    }
    oGameData = {
        gameTime: tempTime,
        averageTime: Math.round(tempTime / tempCompletedGames),
        completedGames: tempCompletedGames,
        totalGames: tempTotalGames
    };
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            35, 
            35
        ],
        align: [
            0, 
            0
        ],
        id: oImageIds.backBut,
        noMove: true
    };
    var oResetBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            -35, 
            -35
        ],
        align: [
            1, 
            1
        ],
        id: oImageIds.resetBut,
        noMove: true
    };
    userInput.addHitArea("backFromStartSettings", butEventHandler, null, "image", oBackBut);
    userInput.addHitArea("resetData", butEventHandler, null, "image", oResetBut);
    var aButs = new Array(oBackBut, oResetBut);
    if(audioType == 1) {
        var mb = oImageIds.muteBut0;
        if(muted) {
            mb = oImageIds.muteBut1;
        }
        var oMuteBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                -38, 
                35
            ],
            align: [
                1, 
                0
            ],
            id: mb,
            noMove: true
        };
        userInput.addHitArea("mute", butEventHandler, null, "image", oMuteBut);
        aButs.push(oMuteBut);
    }
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween2();
    previousTime = new Date().getTime();
    background = new Elements.Background();
    updateStartSettingsEvent();
}
function initCategorySelect() {
    gameState = "categorySelect";
    multiButId = 0;
    var oSettingsBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            35, 
            35
        ],
        align: [
            0, 
            0
        ],
        id: oImageIds.settingsBut,
        noMove: true
    };
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            35, 
            -35
        ],
        align: [
            0, 
            1
        ],
        id: oImageIds.backBut,
        noMove: true
    };
    userInput.addHitArea("settingsFromCategorySelect", butEventHandler, null, "image", oSettingsBut);
    userInput.addHitArea("backFromCategorySelect", butEventHandler, null, "image", oBackBut);
    userInput.addHitArea("categorySelectTouch", butEventHandler, null, "rect", {
        aRect: [
            0, 
            0, 
            canvas.width, 
            canvas.height
        ]
    }, true);
    var aButs = new Array(oSettingsBut, oBackBut);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween2();
    previousTime = new Date().getTime();
    background = new Elements.Background();
    updateCategorySelectScreenEvent();
}
function initGameSelect(_categoryId) {
    gameState = "gameSelect";
    categoryId = _categoryId;
    multiButId = 0;
    var oSettingsBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            35, 
            35
        ],
        align: [
            0, 
            0
        ],
        id: oImageIds.settingsBut,
        noMove: true
    };
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            35, 
            -35
        ],
        align: [
            0, 
            1
        ],
        id: oImageIds.backBut,
        noMove: true
    };
    userInput.addHitArea("settingsFromGameSelect", butEventHandler, null, "image", oSettingsBut);
    userInput.addHitArea("backFromGameSelect", butEventHandler, null, "image", oBackBut);
    userInput.addHitArea("gameSelectTouch", butEventHandler, null, "rect", {
        aRect: [
            0, 
            0, 
            canvas.width, 
            canvas.height
        ]
    }, true);
    var aButs = new Array(oSettingsBut, oBackBut);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween2();
    previousTime = new Date().getTime();
    background = new Elements.Background();
    updateGameSelectScreenEvent();
}
function initGame() {
    gameState = "game";
    if(gameType == 0) {
        categoryId = 0;
        gameId = 0;
    }
    aStarTimes = assetLib.textData.levelText.text.starTimes;
    if(!isEasy) {
        aStarTimes[0] -= 1000;
        aStarTimes[1] -= 1000;
        aStarTimes[2] -= 1000;
    }
    gameTime = 0;
    clockRunning = true;
    starGoneCount = 0;
    tempGameTime = 0;
    gridSize = textDisplay.oLevelTextData[categoryId].aGameData[gameId].gridSize;
    aWordGrid = new Array();
    for(var i = 0; i < gridSize; i++) {
        aWordGrid[i] = new Array();
        for(var j = 0; j < gridSize; j++) {
            aWordGrid[i][j] = "";
        }
    }
    fillWordGrid();
    wordLineHandler = new Elements.WordLineHandler();
    var oSettingsBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            41, 
            35
        ],
        align: [
            0, 
            0
        ],
        id: oImageIds.settingsBut,
        noMove: true
    };
    userInput.addHitArea("settingsFromGame", butEventHandler, null, "image", oSettingsBut, true);
    var aButs = new Array(oSettingsBut);
    userInput.addHitArea("gameTouch", butEventHandler, {
        isDraggable: true,
        multiTouch: true
    }, "rect", {
        aRect: [
            0, 
            0, 
            canvas.width, 
            canvas.height
        ]
    }, true);
    aEffects = new Array();
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween2();
    previousTime = new Date().getTime();
    changeBgId = (changeBgId + 1) % 5;
    background = new Elements.Background();
    updateGameEvent();
}
function initGameSettings() {
    gameState = "gameSettings";
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            41, 
            35
        ],
        align: [
            0, 
            0
        ],
        id: oImageIds.backBut,
        noMove: true
    };
    var oRestartBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            -75, 
            0
        ],
        align: [
            .5, 
            .5
        ],
        id: oImageIds.restartBut,
        noMove: true
    };
    var oQuitBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            75, 
            0
        ],
        align: [
            .5, 
            .5
        ],
        id: oImageIds.quitBut,
        noMove: true
    };
    userInput.addHitArea("backFromGameSettings", butEventHandler, null, "image", oBackBut);
    userInput.addHitArea("restartGame", butEventHandler, null, "image", oRestartBut);
    userInput.addHitArea("quitGame", butEventHandler, null, "image", oQuitBut);
    var aButs = new Array(oBackBut, oRestartBut, oQuitBut);
    if(audioType == 1) {
        var mb = oImageIds.muteBut0;
        if(muted) {
            mb = oImageIds.muteBut1;
        }
        var oMuteBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                -38, 
                35
            ],
            align: [
                1, 
                0
            ],
            id: mb,
            noMove: true
        };
        userInput.addHitArea("mute", butEventHandler, null, "image", oMuteBut);
        aButs.push(oMuteBut);
    }
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween2();
    previousTime = new Date().getTime();
    background = new Elements.Background();
    updateGameSettingsEvent();
}
function initGameCompleteSettings() {
    gameState = "gameCompleteSettings";
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            41, 
            35
        ],
        align: [
            0, 
            0
        ],
        id: oImageIds.backBut,
        noMove: true
    };
    var oRestartBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            0, 
            -40
        ],
        align: [
            .5, 
            .5
        ],
        id: oImageIds.genSmallBut,
        noMove: true,
        text: "restart"
    };
    var oQuitBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            0, 
            40
        ],
        align: [
            .5, 
            .5
        ],
        id: oImageIds.genSmallBut,
        noMove: true,
        text: "quit"
    };
    userInput.addHitArea("backFromGameCompleteSettings", butEventHandler, null, "image", oBackBut);
    userInput.addHitArea("restartGame", butEventHandler, null, "image", oRestartBut);
    userInput.addHitArea("quitGame", butEventHandler, null, "image", oQuitBut);
    var aButs = new Array(oBackBut, oRestartBut, oQuitBut);
    if(audioType == 1) {
        var mb = oImageIds.muteBut0;
        if(muted) {
            mb = oImageIds.muteBut1;
        }
        var oMuteBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                -38, 
                35
            ],
            align: [
                1, 
                0
            ],
            id: mb,
            noMove: true
        };
        userInput.addHitArea("mute", butEventHandler, null, "image", oMuteBut);
        aButs.push(oMuteBut);
    }
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween2();
    previousTime = new Date().getTime();
    background = new Elements.Background();
    updateGameCompleteSettingsEvent();
}
function initGameComplete() {
    gameState = "gameComplete";
    saveDataHandler.setTime(categoryId, gameId, Math.floor(gameTime));
    saveDataHandler.saveData();
    prevGameTime = gameTime;
    fireworkTime = 0;
    userInput.removeHitArea("gameTouch");
    userInput.removeHitArea("settingsFromGame");
    clockRunning = false;
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            41, 
            -35
        ],
        align: [
            0, 
            1
        ],
        id: oImageIds.backBut,
        noMove: true
    };
    var oNextBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            0, 
            0
        ],
        align: [
            .5, 
            .83
        ],
        id: oImageIds.restartBut
    };
    userInput.addHitArea("backFromGameComplete", butEventHandler, null, "image", oBackBut);
    userInput.addHitArea("nextFromGameComplete", butEventHandler, null, "image", oNextBut);
    var aButs = new Array(oBackBut, oNextBut);
    if(audioType == 1) {
        var mb = oImageIds.muteBut0;
        if(muted) {
            mb = oImageIds.muteBut1;
        }
        var oMuteBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                -38, 
                35
            ],
            align: [
                1, 
                0
            ],
            id: mb,
            noMove: true
        };
        userInput.addHitArea("mute", butEventHandler, null, "image", oMuteBut);
        aButs.push(oMuteBut);
    }
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween2();
    panel.startTween3();
    previousTime = new Date().getTime();
    background = new Elements.Background();
    updateGameCompleteEvent();
}
function fillWordGrid() {
    var aSortedWords = new Array();
    for(var i = 0; i < assetLib.textData.levelText.text[curLang][categoryId].gameWords[gameId]["@words"].length; i++) {
        aSortedWords.push({
            word: assetLib.textData.levelText.text[curLang][categoryId].gameWords[gameId]["@words"][i],
            id: i
        });
    }
    if(firstRun) {
        for(var i = 0; i < aSortedWords.length; i++) {
            var hasDeleted = false;
            for(var j = 0; j < aWeightedWords.length; j++) {
                if(aSortedWords[i].id == aWeightedWords[j]) {
                    aSortedWords.splice(i, 1);
                    hasDeleted = true;
                    break;
                }
            }
            if(hasDeleted) {
                i -= 1;
            }
        }
    }
    while(aSortedWords.length > 8) {
        var temp = Math.floor(Math.random() * aSortedWords.length);
        aSortedWords.splice(temp, 1);
    }
    if(firstRun) {
        for(var i = 0; i < aWeightedWords.length; i++) {
            aSortedWords[i] = ({
                word: assetLib.textData.levelText.text[curLang][categoryId].gameWords[gameId]["@words"][aWeightedWords[i]],
                id: aWeightedWords[i]
            });
        }
        randomise(aSortedWords);
    }
    aWordsToGuess = new Array();
    for(var i = 0; i < aSortedWords.length; i++) {
        aWordsToGuess.push({
            guessed: false,
            id: aSortedWords[i].id,
            word: aSortedWords[i].word.replace(/\s/g, ''),
            lineId: null,
            oLetterGridPos: {
                startGridX: 0,
                startGridY: 0,
                endGridX: 0,
                endGridY: 0
            }
        });
    }
    aSortedWords.sort(function (a, b) {
        return b.word.length - a.word.length;
    });
    wordDir = Math.floor(Math.random() * 8);
    for(var i = 0; i < aSortedWords.length; i++) {
        var oLetterGridPos = addWordToGrid(aSortedWords[i].word.replace(/\s/g, ''));
        for(var j = 0; j < aWordsToGuess.length; j++) {
            if(aWordsToGuess[j].word == aSortedWords[i].word.replace(/\s/g, '')) {
                aWordsToGuess[j].oLetterGridPos = oLetterGridPos;
            }
        }
    }
    for(var i = 0; i < gridSize; i++) {
        for(var j = 0; j < gridSize; j++) {
            if(aWordGrid[i][j] == "") {
                aWordGrid[i][j] = spareLetters.charAt(Math.floor(Math.random() * spareLetters.length));
            }
        }
    }
    textDisplay.getWordGridData();
}
function addWordToGrid(_word) {
    var breakCount = 0;
    var wordAdded = false;
    var oLetterGridPos = {
        startGridX: 0,
        startGridY: 0,
        endGridX: 0,
        endGridY: 0
    };
    ++wordDir;
    var tempWordDir = wordDir % 5;
    if(!isEasy) {
        tempWordDir = wordDir % 8;
    }
    while(++breakCount < 100 && !wordAdded) {
        wordAdded = true;
        if(breakCount > 50) {
            tempWordDir = Math.floor(Math.random() * 5);
            if(!isEasy) {
                tempWordDir = wordDir % 8;
            }
        }
        switch(tempWordDir) {
            case 0:
                var col = Math.floor(Math.random() * gridSize);
                var row = Math.round(Math.random() * (gridSize - _word.length));
                for(var i = 0; i < _word.length; i++) {
                    if(aWordGrid[col][row + i] != "" && aWordGrid[col][row + i] != _word.charAt(i)) {
                        wordAdded = false;
                        break;
                    }
                }
                if(wordAdded) {
                    for(var i = 0; i < _word.length; i++) {
                        aWordGrid[col][row + i] = _word.charAt(i);
                        if(i == 0) {
                            oLetterGridPos.startGridX = col;
                            oLetterGridPos.startGridY = row + i;
                        } else if(i == _word.length - 1) {
                            oLetterGridPos.endGridX = col;
                            oLetterGridPos.endGridY = row + i;
                        }
                    }
                }
                break;
            case 1:
                var col = Math.floor(Math.random() * gridSize);
                var row = gridSize - Math.round(Math.random() * (gridSize - _word.length)) - 1;
                for(var i = 0; i < _word.length; i++) {
                    if(aWordGrid[col][row - i] != "" && aWordGrid[col][row - i] != _word.charAt(i)) {
                        wordAdded = false;
                        break;
                    }
                }
                if(wordAdded) {
                    for(var i = 0; i < _word.length; i++) {
                        aWordGrid[col][row - i] = _word.charAt(i);
                        if(i == 0) {
                            oLetterGridPos.startGridX = col;
                            oLetterGridPos.startGridY = row - i;
                        } else if(i == _word.length - 1) {
                            oLetterGridPos.endGridX = col;
                            oLetterGridPos.endGridY = row - i;
                        }
                    }
                }
                break;
            case 2:
                var col = Math.round(Math.random() * (gridSize - _word.length));
                var row = Math.floor(Math.random() * gridSize);
                for(var i = 0; i < _word.length; i++) {
                    if(aWordGrid[col + i][row] != "" && aWordGrid[col + i][row] != _word.charAt(i)) {
                        wordAdded = false;
                        break;
                    }
                }
                if(wordAdded) {
                    for(var i = 0; i < _word.length; i++) {
                        aWordGrid[col + i][row] = _word.charAt(i);
                        if(i == 0) {
                            oLetterGridPos.startGridX = col + i;
                            oLetterGridPos.startGridY = row;
                        } else if(i == _word.length - 1) {
                            oLetterGridPos.endGridX = col + i;
                            oLetterGridPos.endGridY = row;
                        }
                    }
                }
                break;
            case 3:
                var col = Math.round(Math.random() * (gridSize - _word.length));
                var row = Math.round(Math.random() * (gridSize - _word.length));
                for(var i = 0; i < _word.length; i++) {
                    if(aWordGrid[col + i][row + i] != "" && aWordGrid[col + i][row + i] != _word.charAt(i)) {
                        wordAdded = false;
                        break;
                    }
                }
                if(wordAdded) {
                    for(var i = 0; i < _word.length; i++) {
                        aWordGrid[col + i][row + i] = _word.charAt(i);
                        if(i == 0) {
                            oLetterGridPos.startGridX = col + i;
                            oLetterGridPos.startGridY = row + i;
                        } else if(i == _word.length - 1) {
                            oLetterGridPos.endGridX = col + i;
                            oLetterGridPos.endGridY = row + i;
                        }
                    }
                }
                break;
            case 4:
                var col = Math.round(Math.random() * (gridSize - _word.length));
                var row = gridSize - Math.round(Math.random() * (gridSize - _word.length)) - 1;
                for(var i = 0; i < _word.length; i++) {
                    if(aWordGrid[col + i][row - i] != "" && aWordGrid[col + i][row - i] != _word.charAt(i)) {
                        wordAdded = false;
                        break;
                    }
                }
                if(wordAdded) {
                    for(var i = 0; i < _word.length; i++) {
                        aWordGrid[col + i][row - i] = _word.charAt(i);
                        if(i == 0) {
                            oLetterGridPos.startGridX = col + i;
                            oLetterGridPos.startGridY = row - i;
                        } else if(i == _word.length - 1) {
                            oLetterGridPos.endGridX = col + i;
                            oLetterGridPos.endGridY = row - i;
                        }
                    }
                }
                break;
            case 5:
                var col = gridSize - Math.round(Math.random() * (gridSize - _word.length)) - 1;
                var row = Math.round(Math.random() * (gridSize - _word.length));
                for(var i = 0; i < _word.length; i++) {
                    if(aWordGrid[col - i][row + i] != "" && aWordGrid[col - i][row + i] != _word.charAt(i)) {
                        wordAdded = false;
                        break;
                    }
                }
                if(wordAdded) {
                    for(var i = 0; i < _word.length; i++) {
                        aWordGrid[col - i][row + i] = _word.charAt(i);
                        if(i == 0) {
                            oLetterGridPos.startGridX = col - i;
                            oLetterGridPos.startGridY = row + i;
                        } else if(i == _word.length - 1) {
                            oLetterGridPos.endGridX = col - i;
                            oLetterGridPos.endGridY = row + i;
                        }
                    }
                }
                break;
            case 6:
                var col = gridSize - Math.round(Math.random() * (gridSize - _word.length)) - 1;
                var row = Math.floor(Math.random() * gridSize);
                for(var i = 0; i < _word.length; i++) {
                    if(aWordGrid[col - i][row] != "" && aWordGrid[col - i][row] != _word.charAt(i)) {
                        wordAdded = false;
                        break;
                    }
                }
                if(wordAdded) {
                    for(var i = 0; i < _word.length; i++) {
                        aWordGrid[col - i][row] = _word.charAt(i);
                        if(i == 0) {
                            oLetterGridPos.startGridX = col - i;
                            oLetterGridPos.startGridY = row;
                        } else if(i == _word.length - 1) {
                            oLetterGridPos.endGridX = col - i;
                            oLetterGridPos.endGridY = row;
                        }
                    }
                }
                break;
            case 7:
                var col = gridSize - Math.round(Math.random() * (gridSize - _word.length)) - 1;
                var row = gridSize - Math.round(Math.random() * (gridSize - _word.length)) - 1;
                for(var i = 0; i < _word.length; i++) {
                    if(aWordGrid[col - i][row - i] != "" && aWordGrid[col - i][row - i] != _word.charAt(i)) {
                        wordAdded = false;
                        break;
                    }
                }
                if(wordAdded) {
                    for(var i = 0; i < _word.length; i++) {
                        aWordGrid[col - i][row - i] = _word.charAt(i);
                        if(i == 0) {
                            oLetterGridPos.startGridX = col - i;
                            oLetterGridPos.startGridY = row - i;
                        } else if(i == _word.length - 1) {
                            oLetterGridPos.endGridX = col - i;
                            oLetterGridPos.endGridY = row - i;
                        }
                    }
                }
                break;
        }
    }
    if(breakCount >= 100) {
        firstRun = false;
        aWordGrid = new Array();
        for(var i = 0; i < gridSize; i++) {
            aWordGrid[i] = new Array();
            for(var j = 0; j < gridSize; j++) {
                aWordGrid[i][j] = "";
            }
        }
        fillWordGrid();
    }
    if(tempWordDir != (wordDir % 8)) {
        --wordDir;
    }
    return oLetterGridPos;
}
function backToGame(_isRestart) {
    gameState = "game";
    if(_isRestart) {
        gameTime = 0;
        starGoneCount = 0;
        tempGameTime = 0;
        aWordGrid = new Array();
        for(var i = 0; i < gridSize; i++) {
            aWordGrid[i] = new Array();
            for(var j = 0; j < gridSize; j++) {
                aWordGrid[i][j] = "";
            }
        }
        fillWordGrid();
        wordLineHandler = new Elements.WordLineHandler();
    }
    clockRunning = true;
    var oSettingsBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            35, 
            35
        ],
        align: [
            0, 
            0
        ],
        id: oImageIds.settingsBut,
        noMove: true
    };
    userInput.addHitArea("settingsFromGame", butEventHandler, null, "image", oSettingsBut, true);
    var aButs = new Array(oSettingsBut);
    userInput.addHitArea("gameTouch", butEventHandler, {
        isDraggable: true,
        multiTouch: true
    }, "rect", {
        aRect: [
            0, 
            0, 
            canvas.width, 
            canvas.height
        ]
    }, true);
    aEffects = new Array();
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween2();
    previousTime = new Date().getTime();
    background = new Elements.Background();
    updateGameEvent();
}
function butEventHandler(_id, _oData) {
    trace = _id + Math.random().toString();
    switch(_id) {
        case "langSelect":
            curLang = _oData.lang;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            userInput.removeHitArea("langSelect");
            preAssetLib = new Utils.AssetLoader(curLang, [
                {
                    id: "loader",
                    file: "images/loaderBg.png"
                }
            ], ctx, canvas.width, canvas.height, false);
            preAssetLib.onReady(initLoadAssets);
            break;
        case "settingsFromStart":
            playSound("click");
            userInput.removeHitArea("settingsFromStart");
            userInput.removeHitArea("quickGame");
            userInput.removeHitArea("selectLevel");
            userInput.removeHitArea("moreGames");
            initStartSettings("start");
            break;
        case "backFromStartSettings":
            playSound("click");
            userInput.removeHitArea("backFromStartSettings");
            userInput.removeHitArea("mute");
            userInput.removeHitArea("resetData");
            if(prevScreen == "start") {
                initStartScreen();
            } else if(prevScreen == "categorySelect") {
                initCategorySelect();
            } else if(prevScreen == "gameSelect") {
                initGameSelect(categoryId);
            }
            break;
        case "resetData":
            userInput.removeHitArea("backFromStartSettings");
            userInput.removeHitArea("mute");
            userInput.removeHitArea("resetData");
            saveDataHandler.resetData();
            initStartScreen();
            break;
        case "playFromStart":
            playSound("click");
            userInput.removeHitArea("playFromStart");
            userInput.removeHitArea("mute");
            gameType = 0;
            initGame();
            break;
        case "easyPlayFromStart":
            playSound("click");
            userInput.removeHitArea("easyPlayFromStart");
            userInput.removeHitArea("hardPlayFromStart");
            userInput.removeHitArea("mute");
            gameType = 0;
            isEasy = true;
            initGame();
            break;
        case "hardPlayFromStart":
            playSound("click");
            userInput.removeHitArea("easyPlayFromStart");
            userInput.removeHitArea("hardPlayFromStart");
            userInput.removeHitArea("mute");
            gameType = 0;
            isEasy = false;
            initGame();
            break;
        case "selectLevel":
            playSound("click");
            userInput.removeHitArea("settingsFromStart");
            userInput.removeHitArea("quickGame");
            userInput.removeHitArea("selectLevel");
            userInput.removeHitArea("moreGames");
            initCategorySelect();
            break;
        case "moreGames":
        case "moreGamesPause":
            playSound("click");
            var url = "http://www.happylander.com";
            var open = window.open(url);
            if(open == null || typeof (open) == 'undefined') {
                location.href = url;
            }
            break;
        case "backFromCategorySelect":
            playSound("click");
            userInput.removeHitArea("backFromCategorySelect");
            userInput.removeHitArea("settingsFromCategorySelect");
            userInput.removeHitArea("categorySelectTouch");
            initStartScreen();
            break;
        case "settingsFromCategorySelect":
            playSound("click");
            userInput.removeHitArea("backFromCategorySelect");
            userInput.removeHitArea("settingsFromCategorySelect");
            userInput.removeHitArea("categorySelectTouch");
            initStartSettings("categorySelect");
            break;
        case "categorySelectTouch":
            playSound("click");
            var butNum = Math.min(textDisplay.categoryTotal, Math.floor((canvas.height - 210) / 80));
            var butOffsetY = ((canvas.height - 210) - butNum * 80) / 2;
            var bWidth = panel.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].width;
            var bHeight = panel.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].height;
            for(var i = 0; i < butNum; i++) {
                if(_oData.x > canvas.width / 2 - bWidth / 2 && _oData.x < canvas.width / 2 + bWidth / 2) {
                    if(_oData.y > 175 - bHeight / 2 + i * 80 + butOffsetY && _oData.y < 175 + bHeight / 2 + i * 80 + butOffsetY) {
                        userInput.removeHitArea("backFromCategorySelect");
                        userInput.removeHitArea("settingsFromCategorySelect");
                        userInput.removeHitArea("categorySelectTouch");
                        initGameSelect(i + multiButId);
                        break;
                    }
                }
            }
            var bWidth = panel.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].width;
            var bHeight = panel.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].height;
            if(multiButId > 0 && butNum < textDisplay.categoryTotal) {
                if(_oData.x > canvas.width / 2 - bWidth / 2 && _oData.x < canvas.width / 2 + bWidth / 2) {
                    if(_oData.y > 102 - bHeight / 2 && _oData.y < 102 + bHeight / 2) {
                        multiButId = Math.max(0, multiButId - 1);
                    }
                }
            }
            var bWidth = panel.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].width;
            var bHeight = panel.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].height;
            if(multiButId < textDisplay.categoryTotal - butNum && butNum < textDisplay.categoryTotal) {
                if(_oData.x > canvas.width / 2 - bWidth / 2 && _oData.x < canvas.width / 2 + bWidth / 2) {
                    if(_oData.y > canvas.height - 40 - bHeight / 2 && _oData.y < canvas.height - 40 + bHeight / 2) {
                        multiButId = Math.min(textDisplay.categoryTotal - butNum, multiButId + 1);
                    }
                }
            }
            break;
        case "backFromGameSelect":
            playSound("click");
            userInput.removeHitArea("backFromGameSelect");
            userInput.removeHitArea("settingsFromGameSelect");
            userInput.removeHitArea("gameSelectTouch");
            initCategorySelect();
            break;
        case "settingsFromGameSelect":
            playSound("click");
            userInput.removeHitArea("backFromGameSelect");
            userInput.removeHitArea("settingsFromGameSelect");
            userInput.removeHitArea("gameSelectTouch");
            userInput.removeHitArea("mute");
            initStartSettings("gameSelect");
            break;
        case "gameSelectTouch":
            playSound("click");
            var butNum = Math.min(textDisplay.oLevelTextData[categoryId].aGameData.length, Math.floor((canvas.height - 210) / 80));
            var butOffsetY = ((canvas.height - 210) - butNum * 80) / 2;
            var bWidth = panel.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].width;
            var bHeight = panel.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].height;
            for(var i = 0; i < butNum; i++) {
                if(_oData.x > canvas.width / 2 - bWidth / 2 && _oData.x < canvas.width / 2 + bWidth / 2) {
                    if(_oData.y > 175 - bHeight / 2 + i * 80 + butOffsetY && _oData.y < 175 + bHeight / 2 + i * 80 + butOffsetY) {
                        userInput.removeHitArea("backFromGameSelect");
                        userInput.removeHitArea("settingsFromGameSelect");
                        userInput.removeHitArea("gameSelectTouch");
                        gameId = i + multiButId;
                        gameType = 1;
                        initGame();
                        break;
                    }
                }
            }
            var bWidth = panel.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].width;
            var bHeight = panel.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].height;
            if(multiButId > 0 && butNum < textDisplay.oLevelTextData[categoryId].aGameData.length) {
                if(_oData.x > canvas.width / 2 - bWidth / 2 && _oData.x < canvas.width / 2 + bWidth / 2) {
                    if(_oData.y > 102 - bHeight / 2 && _oData.y < 102 + bHeight / 2) {
                        multiButId = Math.max(0, multiButId - 1);
                    }
                }
            }
            var bWidth = panel.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].width;
            var bHeight = panel.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].height;
            if(multiButId < textDisplay.oLevelTextData[categoryId].aGameData.length - butNum && butNum < textDisplay.oLevelTextData[categoryId].aGameData.length) {
                if(_oData.x > canvas.width / 2 - bWidth / 2 && _oData.x < canvas.width / 2 + bWidth / 2) {
                    if(_oData.y > canvas.height - 40 - bHeight / 2 && _oData.y < canvas.height - 40 + bHeight / 2) {
                        multiButId = Math.min(textDisplay.oLevelTextData[categoryId].aGameData.length - butNum, multiButId + 1);
                    }
                }
            }
            break;
        case "gameTouch":
            if(_oData.isDown && !_oData.isBeingDragged) {
                if(isInWordGrid(_oData.x, _oData.y)) {
                    playSound("click");
                    wordLineHandler.reset(_oData.x, _oData.y);
                    wordLineHandler.visible = true;
                }
            } else if(_oData.isBeingDragged && !_oData.hasLeft) {
                if(gameSettingsIsOn) {
                    if(wordLineHandler.visible) {
                        playSound("dragLine");
                    }
                    toggleGameSettingsBut(false);
                }
                if(isInWordGrid(_oData.x, _oData.y)) {
                    wordLineHandler.endX = _oData.x;
                    wordLineHandler.endY = _oData.y;
                }
            }
            if(!_oData.isDown) {
                if(!gameSettingsIsOn) {
                    toggleGameSettingsBut(true);
                }
                if(wordLineHandler.visible) {
                    wordLineHandler.checkLine();
                }
            }
            break;
        case "settingsFromGame":
            playSound("click");
            userInput.removeHitArea("settingsFromGame");
            userInput.removeHitArea("gameTouch");
            initGameSettings();
            break;
        case "backFromGameSettings":
            playSound("click");
            userInput.removeHitArea("backFromGameSettings");
            userInput.removeHitArea("restartGame");
            userInput.removeHitArea("quitGame");
            userInput.removeHitArea("mute");
            backToGame(false);
            break;
        case "restartGame":
            playSound("click");
            userInput.removeHitArea("backFromGameSettings");
            userInput.removeHitArea("backFromGameCompleteSettings");
            userInput.removeHitArea("restartGame");
            userInput.removeHitArea("quitGame");
            userInput.removeHitArea("mute");
            backToGame(true);
            break;
        case "quitGame":
            playSound("click");
            userInput.removeHitArea("backFromGameSettings");
            userInput.removeHitArea("backFromGameCompleteSettings");
            userInput.removeHitArea("restartGame");
            userInput.removeHitArea("quitGame");
            userInput.removeHitArea("mute");
            initStartScreen();
            break;
        case "settingsFromGameComplete":
            playSound("click");
            userInput.removeHitArea("backFromGameComplete");
            userInput.removeHitArea("settingsFromGameComplete");
            userInput.removeHitArea("nextFromGameComplete");
            userInput.removeHitArea("mute");
            initGameCompleteSettings();
            break;
        case "backFromGameCompleteSettings":
            playSound("click");
            userInput.removeHitArea("backFromGameCompleteSettings");
            userInput.removeHitArea("restartGame");
            userInput.removeHitArea("quitGame");
            userInput.removeHitArea("mute");
            initGameComplete();
            break;
        case "backFromGameComplete":
            playSound("click");
            userInput.removeHitArea("backFromGameComplete");
            userInput.removeHitArea("settingsFromGameComplete");
            userInput.removeHitArea("nextFromGameComplete");
            userInput.removeHitArea("mute");
            if(gameType == 0) {
                initStartScreen();
            } else {
                initGameSelect(categoryId);
            }
            break;
        case "nextFromGameComplete":
            playSound("click");
            userInput.removeHitArea("backFromGameComplete");
            userInput.removeHitArea("settingsFromGameComplete");
            userInput.removeHitArea("nextFromGameComplete");
            userInput.removeHitArea("mute");
            if(gameType == 0) {
                initGame();
            } else {
                gameId++;
                if(gameId >= textDisplay.oLevelTextData[categoryId].aGameData.length) {
                    initCategorySelect();
                } else {
                    initGame();
                }
            }
            break;
        case "mute":
            if(!manualPause) {
                playSound("click");
                toggleMute();
            }
            panel.aButs.pop();
            var mb = oImageIds.muteBut0;
            if(muted) {
                mb = oImageIds.muteBut1;
            }
            var oMuteBut = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [
                    -38, 
                    35
                ],
                align: [
                    1, 
                    0
                ],
                id: mb,
                noMove: true
            };
            userInput.addHitArea("mute", butEventHandler, null, "image", oMuteBut);
            panel.aButs.push(oMuteBut);
            break;
    }
}
function addFirework(_x, _y) {
    var firework = new Elements.Firework();
    firework.x = _x;
    firework.y = _y;
    firework.scaleX = firework.scaleY = 1;
    aEffects.push(firework);
    playSound("firework" + Math.floor(Math.random() * 3));
}
function toggleGameSettingsBut(_isOn) {
    gameSettingsIsOn = _isOn;
    if(gameSettingsIsOn) {
        var oSettingsBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                35, 
                35
            ],
            align: [
                0, 
                0
            ],
            id: oImageIds.settingsBut,
            noMove: true
        };
        userInput.addHitArea("settingsFromGame", butEventHandler, null, "image", oSettingsBut, true);
        userInput.addHitArea("gameTouch", butEventHandler, {
            isDraggable: true,
            multiTouch: true
        }, "rect", {
            aRect: [
                0, 
                0, 
                canvas.width, 
                canvas.height
            ]
        }, true);
    } else {
        userInput.removeHitArea("settingsFromGame");
    }
}
function isInWordGrid(_x, _y) {
    if(_x > gridData.x && _x < gridData.x + gridData.width && _y > gridData.y && _y < gridData.y + gridData.width) {
        return true;
    } else {
        return false;
    }
}
function checkWord(_word) {
    var revWord = "";
    for(var i = _word.length - 1; i >= 0; i--) {
        revWord += _word[i];
    }
    for(var i = 0; i < aWordsToGuess.length; i++) {
        if(!aWordsToGuess[i].guessed && (aWordsToGuess[i].word == _word || aWordsToGuess[i].word == revWord)) {
            aWordsToGuess[i].guessed = true;
            aWordsToGuess[i].lineId = wordLineHandler.aFixedLines.length;
            if(checkGridComplete()) {
                playSound("endGame");
                firstRun = false;
                initGameComplete();
            } else {
                var tempX = (wordLineHandler.endX - wordLineHandler.startX) / 2 + wordLineHandler.startX;
                var tempY = (wordLineHandler.endY - wordLineHandler.startY) / 2 + wordLineHandler.startY;
                addFirework(tempX, tempY);
                panel.setJiggle(tempX, tempY);
                playSound("gotWord");
            }
            return true;
            break;
        }
    }
    return false;
}
function checkGridComplete() {
    var isComplete = true;
    for(var i = 0; i < aWordsToGuess.length; i++) {
        if(!aWordsToGuess[i].guessed) {
            isComplete = false;
            break;
        }
    }
    return isComplete;
}
function updateGameEvent() {
    if(manualPause || rotatePause || gameState != "game") {
        return;
    }
    delta = getDelta();
    if(clockRunning) {
        tempGameTime += delta;
        if(tempGameTime > 5999) {
            tempGameTime = 5999;
        }
        gameTime = Math.floor(tempGameTime * 100);
    }
    if(gameTime > aStarTimes[0] && starGoneCount == 0) {
        playSound("starGone");
        starGoneCount = 1;
    } else if(gameTime > aStarTimes[1] && starGoneCount == 1) {
        playSound("starGone");
        starGoneCount = 2;
    } else if(gameTime > aStarTimes[2] && starGoneCount == 2) {
        playSound("starGone");
        starGoneCount = 3;
    }
    background.render();
    panel.update();
    panel.render();
    for(var i = 0; i < aEffects.length; i++) {
        aEffects[i].update();
        aEffects[i].render();
        if(aEffects[i].removeMe) {
            aEffects.splice(i, 1);
            i -= 1;
        }
    }
    requestAnimFrame(updateGameEvent);
}
function updateStartSettingsEvent() {
    if(rotatePause || gameState != "startSettings") {
        return;
    }
    delta = getDelta();
    background.render();
    panel.render();
    renderMuteBut();
    requestAnimFrame(updateStartSettingsEvent);
}
function updateGameSettingsEvent() {
    if(rotatePause || gameState != "gameSettings") {
        return;
    }
    delta = getDelta();
    background.render();
    panel.render();
    renderMuteBut();
    requestAnimFrame(updateGameSettingsEvent);
}
function updateGameCompleteSettingsEvent() {
    if(rotatePause || gameState != "gameCompleteSettings") {
        return;
    }
    delta = getDelta();
    background.render();
    panel.render();
    renderMuteBut();
    requestAnimFrame(updateGameCompleteSettingsEvent);
}
function updateGameCompleteEvent() {
    if(rotatePause || gameState != "gameComplete") {
        return;
    }
    delta = getDelta();
    background.render();
    panel.update();
    panel.render();
    renderMuteBut();
    fireworkTime += delta;
    if(fireworkTime > .8) {
        fireworkTime = 0;
        addFirework(Math.random() * (canvas.width - 200) + 100, Math.random() * (canvas.height / 2 - 200) + 100);
    }
    for(var i = 0; i < aEffects.length; i++) {
        aEffects[i].update();
        aEffects[i].render();
        if(aEffects[i].removeMe) {
            aEffects.splice(i, 1);
            i -= 1;
        }
    }
    requestAnimFrame(updateGameCompleteEvent);
}
function updateGameEndFail() {
    if(rotatePause || gameState != "gameEndFail") {
        return;
    }
    delta = getDelta();
    background.render();
    panel.render();
    renderMuteBut();
    requestAnimFrame(updateGameEndFail);
}
function updateSplashScreenEvent() {
    if(rotatePause || gameState != "splash") {
        return;
    }
    delta = getDelta();
    splashTimer += delta;
    if(splashTimer > 2.5) {
        if(audioType == 1 && !muted) {
            playMusic();
            if(!hasFocus) {
                music.pause();
            }
        }
        initStartScreen();
        return;
    }
    background.render();
    panel.update();
    panel.render();
    requestAnimFrame(updateSplashScreenEvent);
}
function updateStartScreenEvent() {
    if(rotatePause || gameState != "start") {
        return;
    }
    delta = getDelta();
    background.render();
    panel.update();
    panel.render();
    renderMuteBut();
    requestAnimFrame(updateStartScreenEvent);
}
function updateLoaderEvent() {
    if(rotatePause || gameState != "load") {
        return;
    }
    delta = getDelta();
    assetLib.render();
    requestAnimFrame(updateLoaderEvent);
}
function updateCategorySelectScreenEvent() {
    if(rotatePause || gameState != "categorySelect") {
        return;
    }
    delta = getDelta();
    background.render();
    panel.update();
    panel.render();
    renderMuteBut();
    requestAnimFrame(updateCategorySelectScreenEvent);
}
function updateGameSelectScreenEvent() {
    if(rotatePause || gameState != "gameSelect") {
        return;
    }
    delta = getDelta();
    background.render();
    panel.update();
    panel.render();
    renderMuteBut();
    requestAnimFrame(updateGameSelectScreenEvent);
}
function getDelta() {
    var currentTime = new Date().getTime();
    var deltaTemp = (currentTime - previousTime) / 1000;
    previousTime = currentTime;
    if(deltaTemp > .5) {
        deltaTemp = 0;
    }
    return deltaTemp;
}
function checkSpriteCollision(_s1, _s2) {
    var s1XOffset = _s1.x;
    var s1YOffset = _s1.y;
    var s2XOffset = _s2.x;
    var s2YOffset = _s2.y;
    var distance_squared = (((s1XOffset - s2XOffset) * (s1XOffset - s2XOffset)) + ((s1YOffset - s2YOffset) * (s1YOffset - s2YOffset)));
    var radii_squared = (_s1.radius) * (_s2.radius);
    if(distance_squared < radii_squared) {
        return true;
    } else {
        return false;
    }
}
function getScaleImageToMax(_oImgData, _aLimit) {
    var newScale;
    if(_oImgData.isSpriteSheet) {
        if(_aLimit[0] / _oImgData.oData.spriteWidth < _aLimit[1] / _oImgData.oData.spriteHeight) {
            newScale = Math.min(_aLimit[0] / _oImgData.oData.spriteWidth, 1);
        } else {
            newScale = Math.min(_aLimit[1] / _oImgData.oData.spriteHeight, 1);
        }
    } else {
        if(_aLimit[0] / _oImgData.img.width < _aLimit[1] / _oImgData.img.height) {
            newScale = Math.min(_aLimit[0] / _oImgData.img.width, 1);
        } else {
            newScale = Math.min(_aLimit[1] / _oImgData.img.height, 1);
        }
    }
    return newScale;
}
function getCentreFromTopLeft(_aTopLeft, _oImgData, _imgScale) {
    var aCentre = new Array();
    aCentre.push(_aTopLeft[0] + (_oImgData.oData.spriteWidth / 2) * _imgScale);
    aCentre.push(_aTopLeft[1] + (_oImgData.oData.spriteHeight / 2) * _imgScale);
    return aCentre;
}
function loadPreAssets() {
    preAssetLib = new Utils.AssetLoader(curLang, [
        {
            id: "loader",
            file: "images/preloader_1x.png"
        }
    ], ctx, canvas.width, canvas.height, false);
    preAssetLib.onReady(initLoadAssets);
}
function initLangSelect() {
    var oImgData;
    var j;
    var k;
    var gap = 10;
    var tileWidthNum = 0;
    var tileHeightNum = 0;
    var butScale = 1;
    for(var i = 0; i < aLangs.length; i++) {
        oImgData = preAssetLib.getData("lang" + aLangs[i]);
        if((i + 1) * (oImgData.img.width * butScale) + (i + 2) * gap < canvas.width) {
            tileWidthNum++;
        } else {
            break;
        }
    }
    tileHeightNum = Math.ceil(aLangs.length / tileWidthNum);
    for(var i = 0; i < aLangs.length; i++) {
        oImgData = preAssetLib.getData("lang" + aLangs[i]);
        j = canvas.width / 2 - (tileWidthNum / 2) * (oImgData.img.width * butScale) - ((tileWidthNum - 1) / 2) * gap;
        j += (i % tileWidthNum) * ((oImgData.img.width * butScale) + gap);
        k = canvas.height / 2 - (tileHeightNum / 2) * (oImgData.img.height * butScale) - ((tileHeightNum - 1) / 2) * gap;
        k += (Math.floor(i / tileWidthNum) % tileHeightNum) * ((oImgData.img.height * butScale) + gap);
        ctx.drawImage(oImgData.img, 0, 0, oImgData.img.width, oImgData.img.height, j, k, (oImgData.img.width * butScale), (oImgData.img.height * butScale));
        var oBut = {
            oImgData: oImgData,
            aPos: [
                j + (oImgData.img.width * butScale) / 2, 
                k + (oImgData.img.height * butScale) / 2
            ],
            scale: butScale,
            id: "none",
            noMove: true
        };
        userInput.addHitArea("langSelect", butEventHandler, {
            lang: aLangs[i]
        }, "image", oBut);
    }
}
function initLoadAssets() {
    aLoadItems = new Array();
    loadAssets();
}
function loadAssets() {
    var aAllLoadItems = aLoadItems.concat([
        {
            id: "bgMain",
            file: "images/bgMain.jpg"
        }, 
        {
            id: "bgComplete",
            file: "images/bgComplete.jpg"
        }, 
        {
            id: "uiButs",
            file: "images/uiButs.png",
            oAtlasData: {
                id0: {
                    x: 0,
                    y: 0,
                    width: 293,
                    height: 61
                },
                id1: {
                    x: 281,
                    y: 113,
                    width: 48,
                    height: 48
                },
                id10: {
                    x: 273,
                    y: 269,
                    width: 127,
                    height: 128
                },
                id2: {
                    x: 0,
                    y: 166,
                    width: 279,
                    height: 101
                },
                id3: {
                    x: 0,
                    y: 63,
                    width: 279,
                    height: 101
                },
                id4: {
                    x: 143,
                    y: 400,
                    width: 1,
                    height: 1
                },
                id5: {
                    x: 281,
                    y: 63,
                    width: 49,
                    height: 48
                },
                id6: {
                    x: 281,
                    y: 163,
                    width: 42,
                    height: 42
                },
                id7: {
                    x: 281,
                    y: 207,
                    width: 42,
                    height: 42
                },
                id8: {
                    x: 143,
                    y: 269,
                    width: 128,
                    height: 129
                },
                id9: {
                    x: 0,
                    y: 269,
                    width: 141,
                    height: 141
                }
            }
        }, 
        {
            id: "uiElements",
            file: "images/uiElements.png",
            oAtlasData: {
                id0: {
                    x: 468,
                    y: 729,
                    width: 30,
                    height: 40
                },
                id1: {
                    x: 470,
                    y: 382,
                    width: 30,
                    height: 40
                },
                id10: {
                    x: 468,
                    y: 626,
                    width: 100,
                    height: 38
                },
                id11: {
                    x: 468,
                    y: 626,
                    width: 100,
                    height: 38
                },
                id12: {
                    x: 468,
                    y: 626,
                    width: 100,
                    height: 38
                },
                id13: {
                    x: 468,
                    y: 626,
                    width: 100,
                    height: 38
                },
                id14: {
                    x: 468,
                    y: 626,
                    width: 100,
                    height: 38
                },
                id15: {
                    x: 468,
                    y: 626,
                    width: 100,
                    height: 38
                },
                id16: {
                    x: 470,
                    y: 424,
                    width: 29,
                    height: 28
                },
                id17: {
                    x: 470,
                    y: 350,
                    width: 30,
                    height: 30
                },
                id18: {
                    x: 413,
                    y: 470,
                    width: 131,
                    height: 131
                },
                id19: {
                    x: 328,
                    y: 626,
                    width: 138,
                    height: 136
                },
                id2: {
                    x: 328,
                    y: 622,
                    width: 303,
                    height: 2
                },
                id20: {
                    x: 343,
                    y: 543,
                    width: 47,
                    height: 53
                },
                id21: {
                    x: 546,
                    y: 350,
                    width: 126,
                    height: 249
                },
                id22: {
                    x: 470,
                    y: 0,
                    width: 146,
                    height: 174
                },
                id23: {
                    x: 0,
                    y: 0,
                    width: 468,
                    height: 468
                },
                id24: {
                    x: 0,
                    y: 616,
                    width: 326,
                    height: 167
                },
                id25: {
                    x: 0,
                    y: 470,
                    width: 411,
                    height: 71
                },
                id26: {
                    x: 0,
                    y: 543,
                    width: 341,
                    height: 71
                },
                id27: {
                    x: 618,
                    y: 0,
                    width: 124,
                    height: 268
                },
                id28: {
                    x: 470,
                    y: 176,
                    width: 128,
                    height: 172
                },
                id3: {
                    x: 328,
                    y: 616,
                    width: 304,
                    height: 4
                },
                id4: {
                    x: 468,
                    y: 666,
                    width: 41,
                    height: 30
                },
                id5: {
                    x: 468,
                    y: 698,
                    width: 40,
                    height: 29
                },
                id6: {
                    x: 681,
                    y: 270,
                    width: 2,
                    height: 303
                },
                id7: {
                    x: 674,
                    y: 270,
                    width: 5,
                    height: 305
                },
                id8: {
                    x: 468,
                    y: 626,
                    width: 100,
                    height: 38
                },
                id9: {
                    x: 468,
                    y: 626,
                    width: 100,
                    height: 38
                }
            }
        }, 
        {
            id: "firework",
            file: "images/firework_175x175.png",
            oAnims: {
                explode: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13, 
                    14, 
                    15, 
                    16, 
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    22, 
                    23, 
                    24, 
                    25, 
                    26, 
                    27, 
                    28, 
                    29
                ]
            }
        }, 
        {
            id: "font0",
            file: "images/font0.png"
        }, 
        {
            id: "font1",
            file: "images/font1.png"
        }, 
        {
            id: "bg0",
            file: "images/gameBg0.jpg"
        }, 
        {
            id: "bg1",
            file: "images/gameBg1.jpg"
        }, 
        {
            id: "bg2",
            file: "images/gameBg2.jpg"
        }, 
        {
            id: "bg3",
            file: "images/gameBg3.jpg"
        }, 
        {
            id: "bg4",
            file: "images/gameBg4.jpg"
        }, 
        {
            id: "title",
            file: "images/title/" + curLang + ".png"
        }
    ]);
    assetLib = new Utils.AssetLoader(curLang, aAllLoadItems, ctx, canvas.width, canvas.height);
    oImageIds.genSmallBut = "id0";
    oImageIds.settingsBut = "id1";
    oImageIds.easyPlayBut = "id2";
    oImageIds.hardPlayBut = "id3";
    oImageIds.upBut = "id4";
    oImageIds.backBut = "id5";
    oImageIds.muteBut0 = "id6";
    oImageIds.muteBut1 = "id7";
    oImageIds.quitBut = "id8";
    oImageIds.playBut = "id9";
    oImageIds.restartBut = "id10";
    oImageIds.starMarkerVert0 = "id0";
    oImageIds.starMarkerVert1 = "id1";
    oImageIds.timeLineVert0 = "id2";
    oImageIds.timeLineVert1 = "id3";
    oImageIds.starMarkerHoriz0 = "id4";
    oImageIds.starMarkerHoriz1 = "id5";
    oImageIds.timeLineHoriz0 = "id6";
    oImageIds.timeLineHoriz1 = "id7";
    oImageIds.wordLine0 = "id8";
    oImageIds.wordLine1 = "id9";
    oImageIds.wordLine2 = "id10";
    oImageIds.wordLine3 = "id11";
    oImageIds.wordLine4 = "id12";
    oImageIds.wordLine5 = "id13";
    oImageIds.wordLine6 = "id14";
    oImageIds.wordLine7 = "id15";
    oImageIds.levelStar0 = "id16";
    oImageIds.levelStar1 = "id17";
    oImageIds.bigStar0 = "id18";
    oImageIds.bigStar1 = "id19";
    oImageIds.clock = "id20";
    oImageIds.char0 = "id21";
    oImageIds.char1 = "id22";
    oImageIds.scroll = "id23";
    oImageIds.smallLogo = "id24";
    oImageIds.shard0 = "id25";
    oImageIds.shard1 = "id26";
    oImageIds.char2 = "id27";
    oImageIds.char3 = "id28";
    assetLib.onReady(initSplash);
    gameState = "load";
    previousTime = new Date().getTime();
    updateLoaderEvent();
}
function resizeCanvas() {
    var tempInnerWidth = window.innerWidth;
    var tempInnerHeight = window.innerHeight;
    canvas.height = tempInnerHeight;
    canvas.width = tempInnerWidth;
    canvas.style.width = tempInnerWidth + "px";
    canvas.style.height = tempInnerHeight + "px";
    if(tempInnerWidth > tempInnerHeight) {
        if(canvas.height < minSquareSize) {
            canvas.height = minSquareSize;
            canvas.width = minSquareSize * (tempInnerWidth / tempInnerHeight);
            canvasScale = minSquareSize / tempInnerHeight;
        } else if(canvas.height > maxSquareSize) {
            canvas.height = maxSquareSize;
            canvas.width = maxSquareSize * (tempInnerWidth / tempInnerHeight);
            canvasScale = maxSquareSize / tempInnerHeight;
        } else {
            canvasScale = 1;
        }
    } else {
        if(canvas.width < minSquareSize) {
            canvas.width = minSquareSize;
            canvas.height = minSquareSize * (tempInnerHeight / tempInnerWidth);
            canvasScale = minSquareSize / tempInnerWidth;
        } else if(canvas.width > maxSquareSize) {
            canvas.width = maxSquareSize;
            canvas.height = maxSquareSize * (tempInnerHeight / tempInnerWidth);
            canvasScale = maxSquareSize / tempInnerWidth;
        } else {
            canvasScale = 1;
        }
    }
    if(gameState == "game") {
        userInput.addHitArea("gameTouch", butEventHandler, {
            isDraggable: true,
            multiTouch: true
        }, "rect", {
            aRect: [
                0, 
                0, 
                canvas.width, 
                canvas.height
            ]
        }, true);
    } else if(gameState == "categorySelect") {
        multiButId = 0;
        userInput.addHitArea("categorySelectTouch", butEventHandler, null, "rect", {
            aRect: [
                0, 
                0, 
                canvas.width, 
                canvas.height
            ]
        }, true);
    } else if(gameState == "gameSelect") {
        multiButId = 0;
        userInput.addHitArea("gameSelectTouch", butEventHandler, null, "rect", {
            aRect: [
                0, 
                0, 
                canvas.width, 
                canvas.height
            ]
        }, true);
    }
}
function playSound(_id) {
    if(audioType == 1) {
        sound.play(_id);
    }
}
function toggleMute() {
    muted = !muted;
    if(audioType == 1) {
        if(muted) {
            Howler.mute(true);
            music.pause();
        } else {
            Howler.mute(false);
            playMusic();
        }
    } else if(audioType == 2) {
        if(muted) {
            music.pause();
        } else {
            playMusic();
        }
    }
    renderMuteBut();
}
function renderMuteBut() {
}
function toggleManualPause() {
    if(!manualPause) {
        manualPause = true;
        pauseCoreOn();
        var oQuitBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                canvas.width / 2, 
                500
            ],
            id: oImageIds.genSmallBut,
            noMove: true,
            text: "quit"
        };
        var oResumeBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                canvas.width / 2, 
                350
            ],
            id: oImageIds.genSmallBut,
            noMove: true,
            text: "resume"
        };
        var oMoreGamesBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                canvas.width / 2, 
                580
            ],
            id: oImageIds.genSmallBut,
            noMove: true,
            text: "moreGames"
        };
        var aButs = new Array(oQuitBut, oResumeBut, oMoreGamesBut);
        userInput.addHitArea("quitFromPause", butEventHandler, null, "image", oQuitBut);
        userInput.addHitArea("resumeFromPause", butEventHandler, null, "image", oResumeBut);
        userInput.addHitArea("moreGamesPause", butEventHandler, null, "image", oMoreGamesBut);
        panel = new Elements.Panel("pause", aButs);
        panel.render();
        userInput.addHitArea("pause", butEventHandler, null, "rect", {
            aRect: [
                0, 
                0, 
                53, 
                53
            ]
        }, true);
    } else {
        manualPause = false;
        userInput.removeHitArea("quitFromPause");
        userInput.removeHitArea("resumeFromPause");
        userInput.removeHitArea("moreGamesPause");
        pauseCoreOff();
    }
}
function pauseCoreOn() {
    if(audioType == 1) {
        Howler.mute(true);
        music.pause();
    } else if(audioType == 2) {
        music.pause();
    }
    switch(gameState) {
        case "start":
            break;
        case "help":
            break;
        case "game":
            break;
        case "end":
            break;
    }
}
function pauseCoreOff() {
    if(audioType == 1) {
        if(!muted) {
            Howler.mute(false);
            playMusic();
        }
    } else if(audioType == 2) {
        if(!muted) {
            playMusic();
        }
    }
    previousTime = new Date().getTime();
    userInput.pauseIsOn = false;
    switch(gameState) {
        case "splash":
            updateSplashScreenEvent();
            break;
        case "start":
            initStartScreen();
            break;
        case "game":
            if(!manualPause) {
                userInput.addHitArea("pause", butEventHandler, null, "rect", {
                    aRect: [
                        0, 
                        0, 
                        68, 
                        68
                    ]
                }, true);
                updateGameEvent();
            } else {
                manualPause = false;
                updateGameEvent();
                toggleManualPause();
            }
            break;
    }
}
