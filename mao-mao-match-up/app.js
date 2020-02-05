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
            this.totalAssets = _aFileData.length;
            this.showBar = _showBar;
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
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            var tempScale = Math.min(Math.min(canvas.width / 900, 1), canvas.height / 800);
            var bX = this.oLoaderImgData.oData.oAtlasData[oImageIds.logo].x;
            var bY = this.oLoaderImgData.oData.oAtlasData[oImageIds.logo].y;
            var bWidth = this.oLoaderImgData.oData.oAtlasData[oImageIds.logo].width;
            var bHeight = this.oLoaderImgData.oData.oAtlasData[oImageIds.logo].height;
            ctx.drawImage(this.oLoaderImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale, canvas.height / 2 - 70 - (bHeight / 2) * tempScale, bWidth * tempScale, bHeight * tempScale);
            var bX = this.oLoaderImgData.oData.oAtlasData[oImageIds.underBar].x;
            var bY = this.oLoaderImgData.oData.oAtlasData[oImageIds.underBar].y;
            var bWidth = this.oLoaderImgData.oData.oAtlasData[oImageIds.underBar].width;
            var bHeight = this.oLoaderImgData.oData.oAtlasData[oImageIds.underBar].height;
            ctx.drawImage(this.oLoaderImgData.img, bX, bY, Math.max((bWidth / this.totalAssets) * this.assetsLoaded, 1), bHeight, canvas.width / 2 - (bWidth / 2) * tempScale, canvas.height / 2 + 110 - (bHeight / 2) * tempScale, Math.max((bWidth / this.totalAssets) * this.assetsLoaded, 1) * tempScale, bHeight * tempScale);
            var bX = this.oLoaderImgData.oData.oAtlasData[oImageIds.overBar].x;
            var bY = this.oLoaderImgData.oData.oAtlasData[oImageIds.overBar].y;
            var bWidth = this.oLoaderImgData.oData.oAtlasData[oImageIds.overBar].width;
            var bHeight = this.oLoaderImgData.oData.oAtlasData[oImageIds.overBar].height;
            ctx.drawImage(this.oLoaderImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale, canvas.height / 2 + 110 - (bHeight / 2) * tempScale, bWidth * tempScale, bHeight * tempScale);
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
                if(e.button == 2) {
                    return;
                }
                clearButtonOvers();
                _this.isDown = false;
                _this.hitCancel(e, Math.abs(e.pageX), Math.abs(e.pageY), 1);
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
            _posX *= canvasScale;
            _posY *= canvasScale;
            this.mouseX = _posX;
            this.mouseY = _posY;
            if(_isDown) {
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
                    e.preventDefault();
                    this.aKeys[i].oData.isDown = true;
                    this.aKeys[i].callback(this.aKeys[i].id, this.aKeys[i].oData);
                }
            }
        };
        UserInput.prototype.keyUp = function (e) {
            for(var i = 0; i < this.aKeys.length; i++) {
                if(e.keyCode == this.aKeys[i].keyCode) {
                    e.preventDefault();
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
        function FpsMeter(_canvasHeight) {
            this.updateFreq = 10;
            this.updateInc = 0;
            this.frameAverage = 0;
            this.display = 1;
            this.log = "";
            this.render = function (_ctx) {
                this.frameAverage += this.delta / this.updateFreq;
                if(++this.updateInc >= this.updateFreq) {
                    this.updateInc = 0;
                    this.display = this.frameAverage;
                    this.frameAverage = 0;
                }
                _ctx.textAlign = "left";
                ctx.font = "10px Helvetica";
                _ctx.fillStyle = "#333333";
                _ctx.beginPath();
                _ctx.rect(0, this.canvasHeight - 15, 40, 15);
                _ctx.closePath();
                _ctx.fill();
                _ctx.fillStyle = "#ffffff";
                _ctx.fillText(Math.round(1000 / (this.display * 1000)) + " fps " + this.log, 5, this.canvasHeight - 5);
            };
            this.canvasHeight = _canvasHeight;
        }
        FpsMeter.prototype.update = function (_delta) {
            this.delta = _delta;
        };
        return FpsMeter;
    })();
    Utils.FpsMeter = FpsMeter;    
})(Utils || (Utils = {}));
var Elements;
(function (Elements) {
    var Background = (function () {
        function Background(_img) {
            this.x = 0;
            this.y = 0;
            this.targY = 0;
            this.incY = 0;
            this.renderState = null;
            this.changeBg(_img);
            this.oTitleImgData = assetLib.getData("title");
        }
        Background.prototype.changeBg = function (_img) {
            this.oImgData = assetLib.getData(_img);
            this.scale = 1.5;
            TweenLite.to(this, 1, {
                scale: 1,
                ease: "Cubic.easeOut"
            });
        };
        Background.prototype.render = function () {
            if(canvas.width > canvas.height) {
                ctx.drawImage(this.oImgData.img, 0, ((1 - canvas.height / canvas.width) / 2) * this.oImgData.img.height, this.oImgData.img.width, (canvas.height / canvas.width) * this.oImgData.img.height, 0 - (this.scale - 1) * canvas.width / 2, 0 - (this.scale - 1) * canvas.height / 2, canvas.width * this.scale, canvas.height * this.scale);
            } else {
                ctx.drawImage(this.oImgData.img, ((1 - canvas.width / canvas.height) / 2) * this.oImgData.img.width, 0, (canvas.width / canvas.height) * this.oImgData.img.width, this.oImgData.img.width, 0 - (this.scale - 1) * canvas.width / 2, 0 - (this.scale - 1) * canvas.height / 2, canvas.width * this.scale, canvas.height * this.scale);
            }
        };
        return Background;
    })();
    Elements.Background = Background;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Panel = (function () {
        function Panel(_panelType, _aButs) {
            this.timer = .3;
            this.endTime = 0;
            this.posY = 0;
            this.incY = 0;
            this.numberSpace = 56;
            this.flareRot = 0;
            this.oSplashLogoImgData = assetLib.getData("splashLogo");
            this.oUiElementsImgData = assetLib.getData("uiElements");
            this.oTopFlareImgData = assetLib.getData("flare");
            this.oTitleLogoImgData = assetLib.getData("titleLogo");
            this.panelType = _panelType;
            this.aButs = _aButs;
            this.oScoreNumbersImgData = assetLib.getData("scoreNumbers");
        }
        Panel.prototype.update = function () {
            this.incY += 10 * delta;
        };
        Panel.prototype.startTween1 = function () {
            this.posY = 500;
            TweenLite.to(this, .5, {
                posY: 0,
                ease: "Back.easeOut"
            });
            this.butsY = 500;
            TweenLite.to(this, .5, {
                butsY: 0,
                ease: "Quint.easeOut"
            });
            this.blinkInc = .2;
            this.blinkTarg = Math.random() * 6 + 2;
        };
        Panel.prototype.render = function (_butsOnTop) {
            if (typeof _butsOnTop === "undefined") { _butsOnTop = true; }
            if(!_butsOnTop) {
                this.addButs(ctx);
            }
            switch(this.panelType) {
                case "splash":
                    ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(this.oSplashLogoImgData.img, canvas.width / 2 - this.oSplashLogoImgData.img.width / 2, canvas.height / 2 - this.oSplashLogoImgData.img.height / 2 - this.posY);
                    break;
                case "start":
                    this.flareRot += delta / 3;
                    ctx.save();
                    ctx.translate(canvas.width / 2, canvas.height * .25 + this.posY);
                    ctx.scale(1, .7);
                    ctx.rotate(this.flareRot);
                    ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2);
                    ctx.restore();
                    ctx.save();
                    ctx.translate(canvas.width / 2, canvas.height * .25 + this.posY);
                    ctx.scale(1, .7);
                    ctx.rotate(-this.flareRot);
                    ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2);
                    ctx.restore();
                    var tempScale;
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleChar].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleChar].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleChar].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleChar].height;
                    tempScale = (canvas.height * .68) / bHeight;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -(bWidth * .15) * tempScale - this.posY, canvas.height - (bHeight) * tempScale, bWidth * tempScale, bHeight * tempScale);
                    this.blinkInc += delta;
                    if(this.blinkInc > this.blinkTarg) {
                        this.blinkTarg = Math.random() * 6 + 2;
                        this.blinkInc = 0;
                    }
                    if(this.blinkInc < .2) {
                        ctx.fillStyle = "rgba(0, 0, 0, 1)";
                        ctx.fillRect(-(bWidth * .15) * tempScale - this.posY + 118 * tempScale, canvas.height - (bHeight) * tempScale + 158 * tempScale, 150 * tempScale, 40 * tempScale);
                    }
                    tempScale = Math.min(canvas.width / this.oTitleLogoImgData.img.width, 1);
                    ctx.drawImage(this.oTitleLogoImgData.img, 0, 0, this.oTitleLogoImgData.img.width, this.oTitleLogoImgData.img.height, canvas.width / 2 - (this.oTitleLogoImgData.img.width / 2) * tempScale, canvas.height * .25 - (this.oTitleLogoImgData.img.height / 2) * tempScale + this.posY, this.oTitleLogoImgData.img.width * tempScale, this.oTitleLogoImgData.img.height * tempScale);
                    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
                    ctx.fillRect(canvas.width / 2 - 170 - 70, canvas.height * .9 + this.butsY, 140, 42);
                    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
                    ctx.fillRect(canvas.width / 2 - 70, canvas.height * .9 - 50 + this.butsY, 140, 42);
                    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
                    ctx.fillRect(canvas.width / 2 + 170 - 70, canvas.height * .9 + this.butsY, 140, 42);
                    addText(2, 25, 140, "center", canvas.width / 2 - 170, canvas.height * .9 + 28 + this.butsY, "timeAttack", "#FFFFFF");
                    addText(2, 25, 140, "center", canvas.width / 2, canvas.height * .9 - 50 + 28 + this.butsY, "freePlay", "#FFFFFF");
                    addText(2, 25, 140, "center", canvas.width / 2 + 170, canvas.height * .9 + 28 + this.butsY, "expert", "#FFFFFF");
                    break;
                case "credits":
                    ctx.fillStyle = "rgba(135, 47, 135, 0.75)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(this.oSplashLogoImgData.img, canvas.width / 2 - this.oSplashLogoImgData.img.width / 2, canvas.height / 2 - this.oSplashLogoImgData.img.height / 2 - this.posY);
                    addText(0, 30, 1000, "center", canvas.width / 2, canvas.height / 2 - 170 - this.posY, "producedFor", "#FFFFFF");
                    addText(0, 30, 1000, "center", canvas.width / 2, canvas.height / 2 + 85 - this.posY, "createdBy", "#FFFFFF");
                    addText(2, 25, 140, "right", canvas.width - 10, canvas.height - 10 + this.butsY, "restData", "#FFFFFF");
                    break;
                case "gameOver":
                    var tempWave = Math.sin(this.incY / 4) * 10;
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, canvas.height / 2 - bHeight / 2 - this.posY + tempWave, bWidth, bHeight);
                    this.flareRot += delta / 3;
                    ctx.save();
                    ctx.translate(canvas.width / 2, canvas.height / 2 - this.posY + tempWave);
                    ctx.scale(1, .7);
                    ctx.rotate(this.flareRot);
                    ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2);
                    ctx.restore();
                    ctx.save();
                    ctx.translate(canvas.width / 2, canvas.height / 2 - this.posY + tempWave);
                    ctx.scale(1, .7);
                    ctx.rotate(-this.flareRot);
                    ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2);
                    ctx.restore();
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.scoreIcon].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.scoreIcon].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.scoreIcon].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.scoreIcon].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, canvas.height / 2 - bHeight / 2 - this.posY - 85 + tempWave, bWidth, bHeight);
                    var tempScore = score.toString();
                    var tempScale = 1;
                    while(tempScore.length < 5) {
                        tempScore = "0" + tempScore;
                    }
                    for(var i = 0; i < tempScore.length; i++) {
                        var id = parseFloat(tempScore.charAt(i));
                        var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                        var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                        ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, canvas.width / 2 + (i * this.numberSpace) * tempScale - (tempScore.length * this.numberSpace) / 2 * tempScale, canvas.height / 2 - this.posY + tempWave - 25, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
                    }
                    addText(2, 35, 250, "center", canvas.width / 2, canvas.height / 2 - 30 - this.posY + tempWave, "finalScore", "#000000");
                    addText(1, 100, 300, "center", canvas.width / 2, 70 - this.butsY, "gameOver", "#FEC94C");
                    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
                    ctx.fillRect(canvas.width - 90 - 70, canvas.height * .9 + this.butsY, 140, 42);
                    addText(2, 25, 140, "center", canvas.width - 90, canvas.height * .9 + 28 + this.butsY, "playAgain", "#FFFFFF");
                    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
                    ctx.fillRect(90 - 70, canvas.height - 100 + this.posY, 140, 60);
                    addText(2, 25, 140, "center", 90, canvas.height - 100 + 28 + this.posY, "highScore", "#FFFFFF");
                    var tempScale = .5;
                    var tempScore = saveDataHandler.getData(gameType).toString();
                    while(tempScore.length < 5) {
                        tempScore = "0" + tempScore;
                    }
                    for(var i = 0; i < tempScore.length; i++) {
                        var id = parseFloat(tempScore.charAt(i));
                        var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                        var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                        ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, 90 + (i * this.numberSpace) * tempScale - (tempScore.length * this.numberSpace) / 2 * tempScale, canvas.height - 100 + 37 + this.posY, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
                    }
                    break;
                case "game":
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
            var aButOver = false;
            for(var i = 0; i < this.aButs.length; i++) {
                if(this.aButs[i].isOver) {
                    aButOver = true;
                    break;
                }
            }
            for(var i = 0; i < this.aButs.length; i++) {
                var offsetPosY;
                var floatY = 0;
                if(this.incY != 0 && this.aButs[i].flash) {
                    if(this.aButs[i].isOver) {
                        floatY = Math.sin((this.incY + i * 2.5) * 2) * 3;
                    } else {
                        floatY = Math.sin(this.incY + i * 2.5) * 3;
                    }
                }
                if(i % 2 == 0) {
                }
                if(!this.aButs[i].scale) {
                    this.aButs[i].scale = 1;
                }
                var bX;
                var bY;
                var bWidth;
                var bHeight;
                bX = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].x;
                bY = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].y;
                bWidth = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].width;
                bHeight = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].height;
                var aX = (canvas.width * this.aButs[i].align[0]);
                var aY = (canvas.height * this.aButs[i].align[1]);
                if(aY + this.aButs[i].aPos[1] > canvas.height / 2) {
                    offsetPosY = this.butsY;
                } else {
                    offsetPosY = -this.butsY;
                }
                this.aButs[i].aOverData = new Array(aX + this.aButs[i].aPos[0] - (bWidth / 2) * (this.aButs[i].scale) - floatY / 2, aY + this.aButs[i].aPos[1] - (bHeight / 2) * (this.aButs[i].scale) + offsetPosY + floatY / 2, aX + this.aButs[i].aPos[0] + (bWidth / 2) * (this.aButs[i].scale) - floatY / 2, aY + this.aButs[i].aPos[1] + (bHeight / 2) * (this.aButs[i].scale) + offsetPosY + floatY / 2);
                if(this.aButs[i].isOver && this.aButs[i].flash) {
                    var tempFlareScale = .75;
                    if(this.aButs[i].flareScale) {
                        tempFlareScale = this.aButs[i].flareScale;
                    }
                    ctx.save();
                    ctx.translate(aX + this.aButs[i].aPos[0], aY + this.aButs[i].aPos[1]);
                    ctx.scale((1 + floatY / 30) * tempFlareScale, (1 + floatY / 30) * tempFlareScale);
                    ctx.globalAlpha = 1;
                    ctx.rotate(this.incY / 10);
                    ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2);
                    ctx.restore();
                }
                ctx.drawImage(this.aButs[i].oImgData.img, bX, bY, bWidth, bHeight, this.aButs[i].aOverData[0], this.aButs[i].aOverData[1], bWidth * (this.aButs[i].scale) + floatY, bHeight * (this.aButs[i].scale) - floatY);
                if(this.aButs[i].isOver || this.aButs[i].flash) {
                    ctx.save();
                    if(this.aButs[i].isOver) {
                        ctx.globalAlpha = 1;
                    } else {
                        if(aButOver) {
                            ctx.globalAlpha = Math.max(Math.sin((this.incY + i * 2) / 2), 0) / 2;
                        } else {
                            ctx.globalAlpha = Math.max(Math.sin((this.incY + i * 2) / 2), 0);
                        }
                    }
                    bX = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].idOver].x;
                    bY = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].idOver].y;
                    bWidth = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].idOver].width;
                    bHeight = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].idOver].height;
                    ctx.drawImage(this.aButs[i].oImgData.img, bX, bY, bWidth, bHeight, this.aButs[i].aOverData[0], this.aButs[i].aOverData[1], bWidth * (this.aButs[i].scale) + floatY, bHeight * (this.aButs[i].scale) - floatY);
                    ctx.restore();
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
            this.oTextData = {
            };
            this.inc = 0;
            this.createTextObjects();
        }
        TextDisplay.prototype.createTextObjects = function () {
            var cnt = 0;
            for(var i in assetLib.textData.langText.text[curLang]) {
                this.oTextData[i] = {
                };
                this.oTextData[i].aLineData = this.getCharData(assetLib.textData.langText.text[curLang][i]["@text"], assetLib.textData.langText.text[curLang][i]["@fontId"]);
                this.oTextData[i].aLineWidths = this.getLineWidths(this.oTextData[i].aLineData);
                this.oTextData[i].blockWidth = this.getBlockWidth(this.oTextData[i].aLineData);
                this.oTextData[i].blockHeight = this.getBlockHeight(this.oTextData[i].aLineData, assetLib.textData.langText.text[curLang][i]["@fontId"]);
                this.oTextData[i].lineHeight = parseInt(assetLib.textData["fontData" + assetLib.textData.langText.text[curLang][i]["@fontId"]].text.common["@lineHeight"]);
                this.oTextData[i].oFontImgData = assetLib.getData("font" + assetLib.textData.langText.text[curLang][i]["@fontId"]);
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
        TextDisplay.prototype.getCharData = function (_aLines, _fontId) {
            var aCharData = new Array();
            for(var k = 0; k < _aLines.length; k++) {
                aCharData[k] = new Array();
                for(var i = 0; i < _aLines[k].length; i++) {
                    for(var j = 0; j < assetLib.textData["fontData" + _fontId].text.chars.char.length; j++) {
                        if(_aLines[k][i].charCodeAt() == assetLib.textData["fontData" + _fontId].text.chars.char[j]["@id"]) {
                            aCharData[k].push(assetLib.textData["fontData" + _fontId].text.chars.char[j]);
                        }
                    }
                }
            }
            return aCharData;
        };
        TextDisplay.prototype.renderText = function (_oTextDisplayData) {
            var aLinesToRender = this.oTextData[_oTextDisplayData.text].aLineData;
            var oFontImgData = this.oTextData[_oTextDisplayData.text].oFontImgData;
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
            if(_oTextDisplayData.maxWidth && this.oTextData[_oTextDisplayData.text].blockWidth * manualScale > _oTextDisplayData.maxWidth) {
                textScale = _oTextDisplayData.maxWidth / this.oTextData[_oTextDisplayData.text].blockWidth;
            }
            if(_oTextDisplayData.anim) {
                this.inc += delta * 7;
            }
            for(var i = 0; i < aLinesToRender.length; i++) {
                shiftX = 0;
                if(_oTextDisplayData.alignX == "centre") {
                    offsetX = this.oTextData[_oTextDisplayData.text].aLineWidths[i] / 2;
                }
                if(_oTextDisplayData.alignY == "centre") {
                    offsetY = this.oTextData[_oTextDisplayData.text].blockHeight / 2 + (lineOffsetY * (aLinesToRender.length - 1)) / 2;
                }
                for(var j = 0; j < aLinesToRender[i].length; j++) {
                    var bX = aLinesToRender[i][j]["@x"];
                    var bY = aLinesToRender[i][j]["@y"];
                    var bWidth = aLinesToRender[i][j]["@width"];
                    var bHeight = aLinesToRender[i][j]["@height"];
                    if(_oTextDisplayData.anim) {
                        animY = Math.sin(this.inc + j / 2) * ((bHeight / 15) * textScale);
                    }
                    ctx.drawImage(oFontImgData.img, bX, bY, bWidth, bHeight, _oTextDisplayData.x + (shiftX + parseInt(aLinesToRender[i][j]["@xoffset"]) - offsetX) * textScale, _oTextDisplayData.y + (parseInt(aLinesToRender[i][j]["@yoffset"]) + (i * this.oTextData[_oTextDisplayData.text].lineHeight) + (i * lineOffsetY) - offsetY) * textScale + animY, bWidth * textScale, bHeight * textScale);
                    shiftX += parseInt(aLinesToRender[i][j]["@xadvance"]);
                }
            }
        };
        return TextDisplay;
    })();
    Utils.TextDisplay = TextDisplay;    
})(Utils || (Utils = {}));
var Elements;
(function (Elements) {
    var Cards = (function () {
        function Cards(_aLevelCards) {
            this.waitScale = .39;
            this.flareRot = 0;
            this.oCardsImgData = assetLib.getData("cards");
            this.oUiElementsImgData = assetLib.getData("uiElements");
            this.oTopFlareImgData = assetLib.getData("flare");
            this.aLevelCards = _aLevelCards.slice(0);
            var aPossibleCards = new Array();
            for(var i = 0; i < 24; i++) {
                aPossibleCards.push(i);
            }
            var aChosenCards = new Array();
            if(levelNum == 0) {
                for(var i = 0; i < this.aLevelCards.length / 2; i++) {
                    var ran = Math.floor(Math.random() * aPossibleCards.length);
                    aChosenCards.push(i + 19);
                    aChosenCards.push(i + 19);
                    aPossibleCards.splice(ran, 1);
                }
            } else {
                for(var i = 0; i < this.aLevelCards.length / 2; i++) {
                    var ran = Math.floor(Math.random() * aPossibleCards.length);
                    aChosenCards.push(aPossibleCards[ran]);
                    aChosenCards.push(aPossibleCards[ran]);
                    aPossibleCards.splice(ran, 1);
                }
            }
            for(var i = 0; i < this.aLevelCards.length; i++) {
                if(Math.random() > .5) {
                    if(Math.random() > .5) {
                        this.aLevelCards[i].curY = canvas.height / 2 + 200;
                    } else {
                        this.aLevelCards[i].curY = -(canvas.height / 2 + 200);
                    }
                    this.aLevelCards[i].curX = Math.random() * canvas.width;
                } else {
                    if(Math.random() > .5) {
                        this.aLevelCards[i].curX = canvas.width / 2 + 200;
                    } else {
                        this.aLevelCards[i].curX = -(canvas.width / 2 + 200);
                    }
                    this.aLevelCards[i].curY = Math.random() * canvas.height;
                }
                this.aFlippedCards = new Array();
                this.aLevelCards[i].scaleX = this.waitScale;
                this.aLevelCards[i].scaleY = this.waitScale;
                this.aLevelCards[i].rotation = 0;
                this.aLevelCards[i].flareScale = 0;
                this.aLevelCards[i].sideShowing = 1;
                this.aLevelCards[i].isFlipped = true;
                var ran = Math.floor(Math.random() * aChosenCards.length);
                this.aLevelCards[i].id = aChosenCards[ran];
                aChosenCards.splice(ran, 1);
                this.aLevelCards[i].tween = TweenLite.to(this.aLevelCards[i], 1.3, {
                    delay: i / 40,
                    curX: this.aLevelCards[i].x,
                    curY: this.aLevelCards[i].y,
                    ease: "Expo.easeOut",
                    onComplete: this.startFlipBack,
                    onCompleteParams: [
                        {
                            scope: this,
                            cardId: i
                        }
                    ]
                });
            }
        }
        Cards.prototype.startFlipBack = function (_oData) {
            _oData.scope.aLevelCards[_oData.cardId].tween = TweenLite.to(_oData.scope.aLevelCards[_oData.cardId], .2, {
                rotation: 0,
                scaleX: 0,
                scaleY: .7,
                ease: "Cubic.easeIn",
                delay: 0,
                onComplete: _oData.scope.startFlipBackHalf,
                onCompleteParams: [
                    {
                        scope: _oData.scope,
                        cardId: _oData.cardId
                    }
                ]
            });
        };
        Cards.prototype.startFlipBackHalf = function (_oData) {
            _oData.scope.aLevelCards[_oData.cardId].tween = TweenLite.to(_oData.scope.aLevelCards[_oData.cardId], .2, {
                delay: .1,
                scaleX: _oData.scope.waitScale,
                scaleY: _oData.scope.waitScale,
                ease: "Cubic.easeOut",
                onComplete: _oData.scope.startBackComplete,
                onCompleteParams: [
                    {
                        scope: _oData.scope,
                        cardId: _oData.cardId
                    }
                ]
            });
            _oData.scope.aLevelCards[_oData.cardId].sideShowing = 0;
        };
        Cards.prototype.startBackComplete = function (_oData) {
            _oData.scope.aLevelCards[_oData.cardId].isFlipped = false;
            runTimer = true;
        };
        Cards.prototype.removeCards = function () {
            var targX;
            var targY;
            for(var i = 0; i < this.aLevelCards.length; i++) {
                if(Math.random() > .5) {
                    if(Math.random() > .5) {
                        targY = canvas.height / 2 + 200;
                    } else {
                        targY = -(canvas.height / 2 + 200);
                    }
                    targX = Math.random() * canvas.width;
                } else {
                    if(Math.random() > .5) {
                        targX = canvas.width / 2 + 200;
                    } else {
                        targX = -(canvas.width / 2 + 200);
                    }
                    targY = Math.random() * canvas.height;
                }
                this.aLevelCards[i].tween = TweenLite.to(this.aLevelCards[i], .5, {
                    delay: i / 40,
                    curX: targX,
                    curY: targY,
                    ease: "Cubic.easeIn",
                    onComplete: this.levelEnd,
                    onCompleteParams: [
                        {
                            scope: this,
                            cardId: i
                        }
                    ]
                });
            }
        };
        Cards.prototype.levelEnd = function (_oData) {
            if(_oData.cardId == _oData.scope.aLevelCards.length - 1) {
                initLevelComplete();
            }
        };
        Cards.prototype.flipStart = function (_cardId) {
            this.aFlippedCards.push(_cardId);
            this.aLevelCards[_cardId].tween.kill();
            this.aLevelCards[_cardId].tween = TweenLite.to(this.aLevelCards[_cardId], .2, {
                scaleX: 0,
                scaleY: .7,
                ease: "Cubic.easeIn",
                onComplete: this.flipHalf,
                onCompleteParams: [
                    {
                        scope: this,
                        cardId: _cardId
                    }
                ]
            });
            TweenLite.to(this.aLevelCards[_cardId], .5, {
                flareScale: .5,
                ease: "Back.easeOut"
            });
            if(firstRun && this.aFlippedCards.length == 1) {
                for(var i = 0; i < this.aLevelCards.length; i++) {
                    if(this.aLevelCards[this.aFlippedCards[0]].id == this.aLevelCards[i].id && i != _cardId) {
                        hud.cardTargId = i;
                        break;
                    }
                }
            }
        };
        Cards.prototype.flipHalf = function (_oData) {
            _oData.scope.aLevelCards[_oData.cardId].tween.kill();
            _oData.scope.aLevelCards[_oData.cardId].tween = TweenLite.to(_oData.scope.aLevelCards[_oData.cardId], .2, {
                scaleX: .45,
                scaleY: .45,
                rotation: 5 * radian,
                ease: "Cubic.easeOut",
                onComplete: _oData.scope.flipComplete,
                onCompleteParams: [
                    _oData
                ]
            });
            _oData.scope.aLevelCards[_oData.cardId].sideShowing = 1;
        };
        Cards.prototype.flipComplete = function (_oData) {
            _oData.scope.aLevelCards[_oData.cardId].isFlipped = true;
            if(_oData.scope.aFlippedCards.length == 2 && _oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]].isFlipped && _oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]].isFlipped) {
                if(_oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]].id == _oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]].id) {
                    _oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]].tween.kill();
                    _oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]].tween = TweenLite.to(_oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]], .5, {
                        rotation: -7 * radian,
                        scaleX: 1.0,
                        scaleY: 1.0,
                        curX: -120,
                        curY: 50,
                        delay: .1,
                        ease: "Back.easeOut",
                        onComplete: _oData.scope.matchComplete,
                        onCompleteParams: [
                            {
                                scope: _oData.scope
                            }
                        ]
                    });
                    TweenLite.to(_oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]], .5, {
                        flareScale: 1,
                        delay: .1,
                        ease: "Back.easeOut"
                    });
                    _oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]].tween.kill();
                    _oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]].tween = TweenLite.to(_oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]], .5, {
                        rotation: 7 * radian,
                        scaleX: 1.0,
                        scaleY: 1.0,
                        curX: 120,
                        curY: 50,
                        ease: "Back.easeOut"
                    });
                    TweenLite.to(_oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]], .5, {
                        flareScale: 1,
                        ease: "Back.easeOut"
                    });
                    cardMatch(_oData.scope.aLevelCards[_oData.cardId].id);
                } else {
                    playSound("noMatch");
                    _oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]].tween.kill();
                    _oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]].tween = TweenLite.to(_oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]], .2, {
                        rotation: 0,
                        scaleX: 0,
                        scaleY: .7,
                        ease: "Cubic.easeIn",
                        delay: .5,
                        onComplete: _oData.scope.flipBackHalf,
                        onCompleteParams: [
                            {
                                scope: _oData.scope
                            }
                        ]
                    });
                    TweenLite.to(_oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]], .5, {
                        flareScale: 0,
                        delay: .6,
                        ease: "Quad.easeOut"
                    });
                    _oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]].tween.kill();
                    _oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]].tween = TweenLite.to(_oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]], .2, {
                        rotation: 0,
                        scaleX: 0,
                        scaleY: .7,
                        delay: .4,
                        ease: "Cubic.easeIn"
                    });
                    TweenLite.to(_oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]], .5, {
                        flareScale: 0,
                        delay: .5,
                        ease: "Quad.easeOut"
                    });
                    if(gameType == 2) {
                        hud.loseLife();
                    }
                }
            }
        };
        Cards.prototype.flipBackHalf = function (_oData) {
            _oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]].tween.kill();
            _oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]].tween = TweenLite.to(_oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]], .2, {
                delay: .1,
                scaleX: _oData.scope.waitScale,
                scaleY: _oData.scope.waitScale,
                ease: "Cubic.easeOut",
                onComplete: _oData.scope.backComplete,
                onCompleteParams: [
                    {
                        scope: _oData.scope
                    }
                ]
            });
            _oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]].tween.kill();
            _oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]].tween = TweenLite.to(_oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]], .2, {
                scaleX: _oData.scope.waitScale,
                scaleY: _oData.scope.waitScale,
                ease: "Cubic.easeOut"
            });
            _oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]].sideShowing = 0;
            _oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]].sideShowing = 0;
            chainCount = 0;
        };
        Cards.prototype.backComplete = function (_oData) {
            _oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]].isFlipped = false;
            _oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]].isFlipped = false;
            _oData.scope.aFlippedCards = new Array();
            runTimer = true;
        };
        Cards.prototype.matchComplete = function (_oData) {
            _oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]].tween.kill();
            _oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]].tween = TweenLite.to(_oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]], .2, {
                rotation: 0,
                curX: _oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]].x,
                curY: _oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]].y,
                scaleX: _oData.scope.waitScale,
                scaleY: _oData.scope.waitScale,
                ease: "Cubic.easeIn",
                delay: .3,
                onComplete: _oData.scope.matchBackComplete,
                onCompleteParams: [
                    {
                        scope: _oData.scope
                    }
                ]
            });
            TweenLite.to(_oData.scope.aLevelCards[_oData.scope.aFlippedCards[0]], .5, {
                flareScale: 0,
                delay: .6,
                ease: "Quad.easeOut"
            });
            _oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]].tween.kill();
            _oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]].tween = TweenLite.to(_oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]], .2, {
                rotation: 0,
                curX: _oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]].x,
                curY: _oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]].y,
                scaleX: _oData.scope.waitScale,
                scaleY: _oData.scope.waitScale,
                delay: .2,
                ease: "Cubic.easeIn"
            });
            TweenLite.to(_oData.scope.aLevelCards[_oData.scope.aFlippedCards[1]], .5, {
                flareScale: 0,
                delay: .5,
                ease: "Quad.easeOut"
            });
        };
        Cards.prototype.matchBackComplete = function (_oData) {
            runTimer = true;
            _oData.scope.aFlippedCards = new Array();
            var levelComplete = true;
            for(var i = 0; i < _oData.scope.aLevelCards.length; i++) {
                if(!_oData.scope.aLevelCards[i].isFlipped) {
                    levelComplete = false;
                    break;
                }
            }
            if(levelComplete) {
                playSound("levelUp");
                _oData.scope.removeCards();
            }
            if(firstRun) {
                for(var i = 0; i < _oData.scope.aLevelCards.length; i++) {
                    if(!_oData.scope.aLevelCards[i].isFlipped) {
                        hud.cardTargId = i;
                        break;
                    }
                }
            }
        };
        Cards.prototype.update = function () {
            this.flareRot += delta / 3;
        };
        Cards.prototype.render = function () {
            for(var i = 0; i < this.aLevelCards.length; i++) {
                var canRender = true;
                for(var j = 0; j < this.aFlippedCards.length; j++) {
                    if(cards.aFlippedCards[j] == i) {
                        canRender = false;
                    }
                }
                if(canRender) {
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["cardBack" + cardBackId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["cardBack" + cardBackId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["cardBack" + cardBackId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["cardBack" + cardBackId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + this.aLevelCards[i].curX - (bWidth / 2) * this.aLevelCards[i].scaleX, canvas.height / 2 + this.aLevelCards[i].curY - (bHeight / 2) * this.aLevelCards[i].scaleY + gameAreaOffsetY, bWidth * this.aLevelCards[i].scaleX, bHeight * this.aLevelCards[i].scaleY);
                    if(this.aLevelCards[i].isFlipped && this.aLevelCards[i].sideShowing == 1) {
                        var id = this.aLevelCards[i].id;
                        var imgX = (id * this.oCardsImgData.oData.spriteWidth) % this.oCardsImgData.img.width;
                        var imgY = Math.floor(id / (this.oCardsImgData.img.width / this.oCardsImgData.oData.spriteWidth)) * this.oCardsImgData.oData.spriteHeight;
                        ctx.drawImage(this.oCardsImgData.img, imgX + 1, imgY + 1, this.oCardsImgData.oData.spriteWidth - 2, this.oCardsImgData.oData.spriteHeight - 2, canvas.width / 2 - 2 + this.aLevelCards[i].curX - (this.oCardsImgData.oData.spriteWidth / 2) * this.aLevelCards[i].scaleX, canvas.height / 2 - 2 + this.aLevelCards[i].curY - (this.oCardsImgData.oData.spriteHeight / 2) * this.aLevelCards[i].scaleY + gameAreaOffsetY, this.oCardsImgData.oData.spriteWidth * this.aLevelCards[i].scaleX, this.oCardsImgData.oData.spriteHeight * this.aLevelCards[i].scaleY);
                    }
                }
            }
            for(var i = 0; i < this.aFlippedCards.length; i++) {
                ctx.save();
                ctx.translate(canvas.width / 2 + this.aLevelCards[this.aFlippedCards[i]].curX, canvas.height / 2 + this.aLevelCards[this.aFlippedCards[i]].curY + gameAreaOffsetY);
                ctx.rotate(this.flareRot);
                ctx.scale(this.aLevelCards[this.aFlippedCards[i]].flareScale, this.aLevelCards[this.aFlippedCards[i]].flareScale);
                ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2);
                ctx.restore();
            }
            for(var i = 0; i < this.aFlippedCards.length; i++) {
                ctx.save();
                ctx.translate(canvas.width / 2 + this.aLevelCards[this.aFlippedCards[i]].curX, canvas.height / 2 + this.aLevelCards[this.aFlippedCards[i]].curY + gameAreaOffsetY);
                ctx.rotate(this.aLevelCards[this.aFlippedCards[i]].rotation);
                if(this.aLevelCards[this.aFlippedCards[i]].sideShowing == 1) {
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cardFront].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cardFront].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cardFront].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cardFront].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -(bWidth / 2 - 4) * this.aLevelCards[this.aFlippedCards[i]].scaleX, -(bHeight / 2 - 4) * this.aLevelCards[this.aFlippedCards[i]].scaleY, bWidth * this.aLevelCards[this.aFlippedCards[i]].scaleX, bHeight * this.aLevelCards[this.aFlippedCards[i]].scaleY);
                    var id = this.aLevelCards[this.aFlippedCards[i]].id;
                    var imgX = (id * this.oCardsImgData.oData.spriteWidth) % this.oCardsImgData.img.width;
                    var imgY = Math.floor(id / (this.oCardsImgData.img.width / this.oCardsImgData.oData.spriteWidth)) * this.oCardsImgData.oData.spriteHeight;
                    ctx.drawImage(this.oCardsImgData.img, imgX, imgY, this.oCardsImgData.oData.spriteWidth - 2, this.oCardsImgData.oData.spriteHeight - 2, -(this.oCardsImgData.oData.spriteWidth / 2) * this.aLevelCards[this.aFlippedCards[i]].scaleX, -(this.oCardsImgData.oData.spriteHeight / 2) * this.aLevelCards[this.aFlippedCards[i]].scaleY, this.oCardsImgData.oData.spriteWidth * this.aLevelCards[this.aFlippedCards[i]].scaleX, this.oCardsImgData.oData.spriteHeight * this.aLevelCards[this.aFlippedCards[i]].scaleY);
                } else {
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["cardBack" + cardBackId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["cardBack" + cardBackId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["cardBack" + cardBackId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["cardBack" + cardBackId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -(bWidth / 2) * this.aLevelCards[this.aFlippedCards[i]].scaleX, -(bHeight / 2) * this.aLevelCards[this.aFlippedCards[i]].scaleY, bWidth * this.aLevelCards[this.aFlippedCards[i]].scaleX, bHeight * this.aLevelCards[this.aFlippedCards[i]].scaleY);
                }
                ctx.restore();
            }
        };
        return Cards;
    })();
    Elements.Cards = Cards;    
})(Elements || (Elements = {}));
var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Elements;
(function (Elements) {
    var Firework = (function (_super) {
        __extends(Firework, _super);
        function Firework(_oImgData, _animId) {
                _super.call(this, _oImgData, 20, 45, _animId);
            this.setAnimType("once", _animId);
            this.animEndedFunc = function () {
                this.removeMe = true;
            };
        }
        Firework.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
        };
        Firework.prototype.render = function () {
            _super.prototype.renderSimple.call(this, ctx);
        };
        return Firework;
    })(Utils.AnimSprite);
    Elements.Firework = Firework;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Hud = (function () {
        function Hud() {
            this.numberSpace = 56;
            this.scoreJiggle = 0;
            this.prevSecs = 0;
            this.cardID = 0;
            this.beepTimeTarg = 600;
            this.tJiggle = 0;
            this.lifeY = 0;
            this.lifeX = 0;
            this.popCharInc = 0;
            this.canShowPlus = false;
            this.oHudImgData = assetLib.getData("hud");
            this.oTimeNumbersImgData = assetLib.getData("scoreNumbersBlue");
            this.oScoreNumbersImgData = assetLib.getData("scoreNumbers");
            this.oUiElementsImgData = assetLib.getData("uiElements");
            this.cardTargId = 0;
            this.fingerBounce = 0;
            this.popCharLevelTot = 0;
            this.popCharTimer = Math.random() * 5 + 10;
        }
        Hud.prototype.initMatchAnim = function (_timerBonus, _scoreBonus, _cardID) {
            this.cardID = _cardID;
            this.timerBonus = _timerBonus;
            this.scoreBonus = _scoreBonus;
            this.rainbowY = 0;
            this.rainbowScaleX = .2;
            this.rainbowScaleY = 4;
            this.bonusX = 0;
            this.bonusY = 0;
            TweenLite.to(this, .5, {
                rainbowY: .5,
                rainbowScaleX: 1,
                rainbowScaleY: 1,
                ease: "Back.easeOut",
                onComplete: this.rainbowState,
                onCompleteParams: [
                    {
                        root: this,
                        state: "in"
                    }
                ]
            });
            this.jiggle();
        };
        Hud.prototype.initPopChar = function () {
            var _this = this;
            if(++this.popCharLevelTot > 3) {
                this.popCharTimer = Math.random() * 5 + 10;
                return;
            }
            this.popCharTimer = Math.random() * 5 + 10;
            this.popCharId = Math.floor(Math.random() * 3);
            this.popCharInc = 0;
            if(canvas.width > canvas.height) {
                this.popCharSide = Math.floor(Math.random() * 2);
                this.popCharPos = Math.random() * (canvas.height - 300) + 200;
            } else {
                this.popCharSide = 2;
                this.popCharPos = Math.random() * (canvas.width - 200) + 100;
            }
            if(this.popCharTween) {
                this.popCharTween.kill();
            }
            this.popCharTween = TweenLite.to(this, .5, {
                popCharInc: 1,
                ease: "Quad.easeOut",
                onComplete: function () {
                    _this.popCharTween = TweenLite.to(_this, .5, {
                        delay: 1,
                        popCharInc: 0,
                        ease: "Quad.easeIn",
                        onComplete: function () {
                        }
                    });
                }
            });
        };
        Hud.prototype.removePopChar = function () {
            if(this.popCharTween) {
                this.popCharTween.kill();
            }
            this.popCharInc = 0;
            var tempX;
            var tempY;
            if(canvas.width > canvas.height) {
                if(this.popCharSide == 0) {
                    tempX = 85;
                } else {
                    tempX = canvas.width - 85;
                }
                tempY = this.popCharPos;
            } else {
                tempX = this.popCharPos;
                tempY = canvas.height - 100;
            }
            this.initPlus(0, 100, tempX, tempY);
        };
        Hud.prototype.initPlus = function (_id, _amount, _x, _y) {
            var _this = this;
            if(this.plusTween) {
                this.plusTween.kill();
            }
            this.plusX = _x;
            this.plusY = _y;
            this.canShowPlus = true;
            this.plusAmount = _amount;
            this.plusType = _id;
            this.plusTween = TweenLite.to(this, .7, {
                plusY: this.plusY - 50,
                ease: "Quad.easeOut",
                onComplete: function () {
                    _this.popCharTween = TweenLite.to(_this, .5, {
                        delay: 0,
                        plusY: _this.plusY - 200,
                        ease: "Back.easeIn",
                        onComplete: function () {
                            _this.canShowPlus = false;
                        }
                    });
                }
            });
        };
        Hud.prototype.jiggle = function () {
            this.scoreJiggle = 50;
            TweenLite.to(this, 1, {
                scoreJiggle: 0,
                ease: "Elastic.easeOut"
            });
        };
        Hud.prototype.timerJiggle = function () {
            this.tJiggle = -50;
            TweenLite.to(this, 2, {
                tJiggle: 0,
                ease: "Elastic.easeOut"
            });
        };
        Hud.prototype.rainbowState = function (_oData) {
            switch(_oData.state) {
                case "in":
                    TweenLite.to(_oData.root, .3, {
                        delay: .5,
                        rainbowY: 0,
                        rainbowScaleX: .5,
                        rainbowScaleY: 2,
                        ease: "Back.easeIn",
                        onComplete: _oData.root.rainbowState,
                        onCompleteParams: [
                            {
                                root: _oData.root,
                                state: "out"
                            }
                        ]
                    });
                    break;
                case "out":
                    break;
            }
        };
        Hud.prototype.loseLife = function () {
            this.tJiggle = -10;
            TweenLite.to(this, .3, {
                tJiggle: 0,
                ease: "Back.easeOut"
            });
            this.lifeY = -500;
            this.lifeX = 0;
            livesNum -= 1;
            if(livesNum == 0) {
                userInput.removeHitArea("hitPlayArea");
            }
            TweenLite.to(this, .75, {
                lifeY: 0,
                ease: "Cubic.easeIn",
                onComplete: function () {
                    if(livesNum == 0) {
                        userInput.removeHitArea("pause");
                        userInput.removeHitArea("mute");
                        initGameOver();
                    }
                }
            });
            TweenLite.to(this, .3, {
                lifeX: -30,
                ease: "Quad.easeOut"
            });
        };
        Hud.prototype.render = function () {
            var tempHeight = 37;
            var tempScale = .5;
            var scorePos;
            if(gameType == 0) {
                scorePos = canvas.width / 2 - 85;
                ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
                ctx.fillRect(canvas.width / 2 + 85 - 70, 0 - panel.posY, 140, 60);
                addText(2, 25, 140, "center", canvas.width / 2 + 85, 0 + 28 - panel.posY, "time", "#FFFFFF");
            } else if(gameType == 1) {
                scorePos = canvas.width / 2;
            } else {
                scorePos = canvas.width / 2 - 85;
                ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
                ctx.fillRect(canvas.width / 2 + 85 - 70, 0 - panel.posY, 140, 60);
                addText(2, 25, 140, "center", canvas.width / 2 + 85, 0 + 28 - panel.posY, "lives", "#FFFFFF");
            }
            if(gameType == 0 && (curTime > 500 || Math.round(curTime / 25) % 2 == 0)) {
                if(curTime <= this.beepTimeTarg) {
                    playSound("beep");
                    this.beepTimeTarg -= 100;
                }
                var id;
                var mins = Math.floor(curTime / 6000).toString();
                var tempX = canvas.width / 2 + 12;
                var tempY = tempHeight - panel.posY;
                var secs = Math.floor((curTime - Math.floor(curTime / 6000) * 6000) / 100).toString();
                if(secs.length < 2) {
                    secs = "0" + secs;
                }
                var tenths = curTime.toString().charAt(curTime.toString().length - 2) + curTime.toString().charAt(curTime.toString().length - 1);
                if(tenths.length < 2) {
                    tenths = "0" + tenths;
                }
                for(var i = 0; i < 2; i++) {
                    id = parseFloat(mins.charAt(i));
                    if(mins.length < 2) {
                        if(i == 0) {
                            continue;
                        } else {
                            id = parseFloat(mins.charAt(0));
                        }
                    }
                    var imgX = (id * this.oTimeNumbersImgData.oData.spriteWidth) % this.oTimeNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oTimeNumbersImgData.img.width / this.oTimeNumbersImgData.oData.spriteWidth)) * this.oTimeNumbersImgData.oData.spriteHeight;
                    ctx.drawImage(this.oTimeNumbersImgData.img, imgX, imgY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight, tempX, tempY + this.tJiggle, this.oTimeNumbersImgData.oData.spriteWidth * tempScale, this.oTimeNumbersImgData.oData.spriteHeight * tempScale);
                }
                id = 10;
                var imgX = (id * this.oTimeNumbersImgData.oData.spriteWidth) % this.oTimeNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oTimeNumbersImgData.img.width / this.oTimeNumbersImgData.oData.spriteWidth)) * this.oTimeNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oTimeNumbersImgData.img, imgX, imgY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight, tempX + 23, tempY + this.tJiggle, this.oTimeNumbersImgData.oData.spriteWidth * tempScale, this.oTimeNumbersImgData.oData.spriteHeight * tempScale);
                for(var i = 0; i < 2; i++) {
                    id = parseFloat(secs.charAt(i));
                    var imgX = (id * this.oTimeNumbersImgData.oData.spriteWidth) % this.oTimeNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oTimeNumbersImgData.img.width / this.oTimeNumbersImgData.oData.spriteWidth)) * this.oTimeNumbersImgData.oData.spriteHeight;
                    ctx.drawImage(this.oTimeNumbersImgData.img, imgX, imgY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight, tempX + 46 + i * this.numberSpace * tempScale, tempY + this.tJiggle, this.oTimeNumbersImgData.oData.spriteWidth * tempScale, this.oTimeNumbersImgData.oData.spriteHeight * tempScale);
                }
                for(var i = 0; i < 2; i++) {
                    id = parseFloat(tenths.charAt(i));
                    var imgX = (id * this.oTimeNumbersImgData.oData.spriteWidth) % this.oTimeNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oTimeNumbersImgData.img.width / this.oTimeNumbersImgData.oData.spriteWidth)) * this.oTimeNumbersImgData.oData.spriteHeight;
                    ctx.drawImage(this.oTimeNumbersImgData.img, imgX, imgY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight, tempX + 103 + i * this.numberSpace * .7 * tempScale, tempY + 10 + this.tJiggle, this.oTimeNumbersImgData.oData.spriteWidth * .7 * tempScale, this.oTimeNumbersImgData.oData.spriteHeight * .7 * tempScale);
                }
            } else if(gameType == 2) {
                for(var i = 0; i < 5; i++) {
                    var tempId = 1;
                    if(5 - i <= livesNum) {
                        tempId = 0;
                    }
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["heart" + tempId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["heart" + tempId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["heart" + tempId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["heart" + tempId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + 111 - (24) * i, tempHeight - panel.posY + this.tJiggle, bWidth, bHeight);
                }
                if(this.lifeY < 0) {
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.heart0].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.heart0].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.heart0].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.heart0].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + 20 + this.lifeX, tempHeight + this.lifeY + 500, bWidth, bHeight);
                }
            }
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            ctx.fillRect(scorePos - 70, 0 - panel.posY, 140, 60);
            addText(2, 25, 140, "center", scorePos, 0 + 28 - panel.posY, "score", "#FFFFFF");
            var tempScore = score.toString();
            while(tempScore.length < 5) {
                tempScore = "0" + tempScore;
            }
            for(var i = 0; i < tempScore.length; i++) {
                var id = parseFloat(tempScore.charAt(i));
                var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, scorePos + (i * this.numberSpace) * tempScale - (tempScore.length * this.numberSpace) / 2 * tempScale, tempHeight + this.scoreJiggle - panel.posY, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
            }
        };
        Hud.prototype.renderOverlay = function () {
            this.popCharTimer -= delta;
            if(this.popCharTimer < 0) {
                this.initPopChar();
            }
            if(this.popCharInc > 0) {
                if(this.popCharSide == 0) {
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["popCharLeft" + this.popCharId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["popCharLeft" + this.popCharId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["popCharLeft" + this.popCharId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["popCharLeft" + this.popCharId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0 + this.popCharInc * bWidth - bWidth, this.popCharPos - bHeight / 2, bWidth, bHeight);
                    this.popCharX = 0 + this.popCharInc * bWidth - bWidth;
                    this.popCharWidth = bWidth;
                    this.popCharY = this.popCharPos - bHeight / 2;
                    this.popCharHeight = bHeight;
                } else if(this.popCharSide == 1) {
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["popCharRight" + this.popCharId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["popCharRight" + this.popCharId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["popCharRight" + this.popCharId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["popCharRight" + this.popCharId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - this.popCharInc * bWidth, this.popCharPos - bHeight / 2, bWidth, bHeight);
                    this.popCharX = canvas.width - this.popCharInc * bWidth;
                    this.popCharWidth = bWidth;
                    this.popCharY = this.popCharPos - bHeight / 2;
                    this.popCharHeight = bHeight;
                } else {
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["popCharBottom" + this.popCharId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["popCharBottom" + this.popCharId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["popCharBottom" + this.popCharId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["popCharBottom" + this.popCharId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, this.popCharPos - bWidth / 2, canvas.height - this.popCharInc * bHeight, bWidth, bHeight);
                    this.popCharX = this.popCharPos - bWidth / 2;
                    this.popCharWidth = bWidth;
                    this.popCharY = canvas.height - this.popCharInc * bHeight;
                    this.popCharHeight = bHeight;
                }
            }
            if(this.rainbowY > 0) {
                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].x;
                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].y;
                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].width;
                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].height;
                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * this.rainbowScaleX, this.rainbowY * canvas.height - (bHeight / 2) * this.rainbowScaleY - 100, bWidth * this.rainbowScaleX, bHeight * this.rainbowScaleY);
                var tempScale = 1;
                var id = 10;
                var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, (canvas.width / 2) - this.numberSpace * tempScale - ((chainCount.toString().length - 1) * this.numberSpace * tempScale) / 2 - 10, this.rainbowY * canvas.height - 165, Math.round(this.oScoreNumbersImgData.oData.spriteWidth * tempScale), Math.round(this.oScoreNumbersImgData.oData.spriteHeight * tempScale));
                for(var i = 0; i < chainCount.toString().length; i++) {
                    var id = parseFloat(chainCount.toString().charAt(i));
                    var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                    ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, (canvas.width / 2) + (i * this.numberSpace) * tempScale - ((chainCount.toString().length - 1) * (this.numberSpace - 1) * tempScale) / 2 - 10, this.rainbowY * canvas.height - 165, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
                }
            }
            if(firstRun && !cards.aLevelCards[this.cardTargId].isFlipped && cards.aLevelCards[this.cardTargId].sideShowing == 0) {
                this.fingerBounce += delta * 5;
                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.finger].x;
                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.finger].y;
                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.finger].width;
                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.finger].height;
                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + cards.aLevelCards[this.cardTargId].curX - (bWidth / 2) + 10, canvas.height / 2 + cards.aLevelCards[this.cardTargId].curY - (bHeight / 2) - 35 - Math.abs(Math.sin(this.fingerBounce) * 30), bWidth, bHeight);
            }
            if(this.canShowPlus) {
                var numberType;
                if(this.plusType == 0) {
                    numberType = this.oScoreNumbersImgData;
                } else {
                    numberType = this.oTimeNumbersImgData;
                }
                tempScale = .5;
                var imgX = (11 * numberType.oData.spriteWidth) % numberType.img.width;
                var imgY = Math.floor(11 / (numberType.img.width / numberType.oData.spriteWidth)) * numberType.oData.spriteHeight;
                ctx.drawImage(numberType.img, imgX, imgY, numberType.oData.spriteWidth, numberType.oData.spriteHeight, this.plusX - ((this.plusAmount.toString().length + 1) * (this.numberSpace) * tempScale) / 2, this.plusY, numberType.oData.spriteWidth * tempScale, numberType.oData.spriteHeight * tempScale);
                for(var i = 0; i < this.plusAmount.toString().length; i++) {
                    var id = parseFloat(this.plusAmount.toString().charAt(i));
                    var imgX = (id * numberType.oData.spriteWidth) % numberType.img.width;
                    var imgY = Math.floor(id / (numberType.img.width / numberType.oData.spriteWidth)) * numberType.oData.spriteHeight;
                    ctx.drawImage(numberType.img, imgX, imgY, numberType.oData.spriteWidth, numberType.oData.spriteHeight, this.plusX + ((i + 1) * this.numberSpace) * tempScale - ((this.plusAmount.toString().length + 1) * (this.numberSpace) * tempScale) / 2, this.plusY, numberType.oData.spriteWidth * tempScale, numberType.oData.spriteHeight * tempScale);
                }
            }
        };
        return Hud;
    })();
    Elements.Hud = Hud;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var FallingCard = (function () {
        function FallingCard() {
            this.x = 0;
            this.y = 0;
            this.rotation = 0;
            this.oCardsImgData = assetLib.getData("cards");
            this.oUiElementsImgData = assetLib.getData("uiElements");
            this.reset();
            this.y = Math.random() * canvas.height - canvas.height / 2;
        }
        FallingCard.prototype.reset = function () {
            this.x = Math.random() * canvas.width;
            this.y = -(canvas.height / 2 + 200);
            this.incY = Math.random() * 150 + 200;
            this.id = Math.floor(Math.random() * 24);
            this.rotation = Math.random() * 3.14;
            this.rotInc = Math.random() * 4 - 2;
            this.scale = .5;
        };
        FallingCard.prototype.update = function () {
            this.y += delta * this.incY;
            this.rotation += delta * this.rotInc;
            if(this.y > canvas.height / 2 + 200) {
                this.reset();
            }
        };
        FallingCard.prototype.render = function () {
            ctx.save();
            ctx.translate(this.x, canvas.height / 2 + this.y);
            ctx.rotate(this.rotation);
            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cardFront].x;
            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cardFront].y;
            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cardFront].width;
            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cardFront].height;
            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -(bWidth / 2 - 4) * this.scale, -(bHeight / 2 - 4) * this.scale, bWidth * this.scale, bHeight * this.scale);
            var id = this.id;
            var imgX = (id * this.oCardsImgData.oData.spriteWidth) % this.oCardsImgData.img.width;
            var imgY = Math.floor(id / (this.oCardsImgData.img.width / this.oCardsImgData.oData.spriteWidth)) * this.oCardsImgData.oData.spriteHeight;
            ctx.drawImage(this.oCardsImgData.img, imgX + 1, imgY + 1, this.oCardsImgData.oData.spriteWidth - 2, this.oCardsImgData.oData.spriteHeight - 2, -(this.oCardsImgData.oData.spriteWidth / 2) * this.scale, -(this.oCardsImgData.oData.spriteHeight / 2) * this.scale, this.oCardsImgData.oData.spriteWidth * this.scale, this.oCardsImgData.oData.spriteHeight * this.scale);
            ctx.restore();
        };
        return FallingCard;
    })();
    Elements.FallingCard = FallingCard;    
})(Elements || (Elements = {}));
var Utils;
(function (Utils) {
    var SaveDataHandler = (function () {
        function SaveDataHandler(_saveDataId) {
            this.dataGroupNum = 2;
            this.saveDataId = _saveDataId;
            var testKey = 'test';
            var storage;
            var lc = false;
            try  {
                storage = window.localStorage;
                lc = true;
            } catch (e) {
                console.log("local storage denied");
                lc = false;
                this.canStore = false;
            }
            if(lc) {
                try  {
                    storage.setItem(testKey, '1');
                    storage.removeItem(testKey);
                    this.canStore = true;
                } catch (error) {
                    this.canStore = false;
                }
            }
            this.clearData();
            this.setInitialData();
        }
        SaveDataHandler.prototype.clearData = function () {
            this.aLevelStore = new Array();
            this.aLevelStore.push(0);
            this.aLevelStore.push(0);
            this.aLevelStore.push(0);
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
                } else {
                    this.saveData();
                }
            }
        };
        SaveDataHandler.prototype.setData = function (_id, _score) {
            if(this.aLevelStore[_id] < _score) {
                this.aLevelStore[_id] = _score;
            }
        };
        SaveDataHandler.prototype.getData = function (_id) {
            return this.aLevelStore[_id];
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
var requestAnimFrame = (function () {
    return window.requestAnimationFrame || (window).webkitRequestAnimationFrame || (window).mozRequestAnimationFrame || (window).oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60, new Date().getTime());
    };
})();
var previousTime;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var minSquareSize = 500;
var maxSquareSize = 600;
var canvasX;
var canvasY;
var canvasScale;
var div = document.getElementById('canvas-wrapper');
var sound;
var music;
var audioType = 0;
var muted = false;
var splashTimer = 0;
var assetLib;
var preAssetLib;
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
var hasFocus = true;
if(navigator.userAgent.match(/MSIE\s([\d]+)/)) {
    isIE10 = true;
}
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
                700
            ],
            levelUp: [
                1000, 
                1500
            ],
            gameOver: [
                3000, 
                1200
            ],
            match0: [
                4500, 
                1500
            ],
            match1: [
                6500, 
                1500
            ],
            match2: [
                8500, 
                1500
            ],
            match3: [
                10500, 
                1500
            ],
            match4: [
                12500, 
                1500
            ],
            levelStart: [
                14500, 
                1100
            ],
            card0: [
                16000, 
                1000
            ],
            card1: [
                17500, 
                1000
            ],
            beep: [
                19000, 
                200
            ],
            noMatch: [
                19500, 
                800
            ]
        }
    });
    music = new Howl({
        src: [
            'audio/music.mp3'
        ],
        volume: 0,
        loop: true
    });
} else {
    audioType = 0;
}
var panel;
var hud;
var background;
var score = 0;
var levelNum;
var aTutorials = new Array();
var panelFrame;
var oLogoData = {
};
var oLogoBut;
var oImageIds = {
};
var cards;
var aFireworks;
var gameBgId = Math.floor(Math.random() * 4);
var cardBackId = Math.floor(Math.random() * 5);
var gameAreaOffsetY = 36;
var curTime;
var chainCount;
var saveDataHandler = new Utils.SaveDataHandler("cnmu_v1");
var highscore;
var firstRun = true;
var aFallingCards;
var gameType;
var runTimer;
var livesNum;
var aCardPos = new Array({
    aData: [
        {
            x: -50,
            y: -50
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: 52,
            y: -51
        }
    ]
}, {
    aData: [
        {
            x: -50,
            y: -50
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: 154,
            y: -51
        }
    ]
}, {
    aData: [
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 154,
            y: -51
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -153
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -50,
            y: -50
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -50,
            y: -50
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 52,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -50,
            y: -50
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 154,
            y: -153
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -153
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -50,
            y: -50
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -51
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -50,
            y: -50
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 154,
            y: -51
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -50,
            y: -50
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -51
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -50,
            y: -50
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -51
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -153
        }, 
        {
            x: 154,
            y: -51
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -50,
            y: -50
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -51
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -50,
            y: -50
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -153
        }, 
        {
            x: 154,
            y: -51
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -50,
            y: -50
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 154,
            y: -153
        }, 
        {
            x: 154,
            y: -51
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -50,
            y: -50
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -153
        }, 
        {
            x: 154,
            y: -51
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -50,
            y: -50
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -51
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -153
        }, 
        {
            x: 154,
            y: -51
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -50,
            y: -50
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -153
        }, 
        {
            x: 154,
            y: -51
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -50,
            y: -50
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 154,
            y: -153
        }, 
        {
            x: 154,
            y: -51
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: 52,
            y: 51
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -153
        }, 
        {
            x: 154,
            y: -51
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -50,
            y: -50
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 154,
            y: -153
        }, 
        {
            x: 154,
            y: -51
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -51
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 154,
            y: -51
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -153
        }
    ]
}, {
    aData: [
        {
            x: -50,
            y: -50
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -153
        }, 
        {
            x: 154,
            y: -51
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -50,
            y: -50
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -153
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -50,
            y: -50
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -153
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -50,
            y: -50
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -153
        }, 
        {
            x: 154,
            y: -51
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -50,
            y: -50
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -51
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -50,
            y: -50
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -153
        }, 
        {
            x: 154,
            y: -51
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -50,
            y: -50
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -153
        }, 
        {
            x: 154,
            y: -51
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -50,
            y: -50
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -153
        }, 
        {
            x: 154,
            y: -51
        }, 
        {
            x: 154,
            y: 154
        }
    ]
}, {
    aData: [
        {
            x: -51,
            y: -153
        }, 
        {
            x: -50,
            y: -50
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: -51,
            y: 51
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -51
        }
    ]
}, {
    aData: [
        {
            x: -50,
            y: -50
        }, 
        {
            x: 52,
            y: 51
        }, 
        {
            x: 154,
            y: 51
        }, 
        {
            x: -153,
            y: -153
        }, 
        {
            x: -153,
            y: -51
        }, 
        {
            x: -153,
            y: 51
        }, 
        {
            x: -153,
            y: 154
        }, 
        {
            x: -51,
            y: 154
        }, 
        {
            x: 52,
            y: -153
        }, 
        {
            x: 52,
            y: -51
        }, 
        {
            x: 52,
            y: 154
        }, 
        {
            x: 154,
            y: -153
        }, 
        {
            x: 154,
            y: -51
        }, 
        {
            x: 154,
            y: 154
        }
    ]
});
loadLang();
function loadLang() {
    var xobj = new XMLHttpRequest();
    xobj.open('GET', "json/lang.json", true);
    xobj.onreadystatechange = function () {
        if(xobj.readyState == 4 && xobj.status == 200) {
            curLang = JSON.parse(xobj.responseText).lang;
            loadPreAssets();
        }
    };
    xobj.send(null);
}
function initSplash() {
    gameState = "splash";
    resizeCanvas();
    if(audioType == 1 && !muted) {
        playMusic();
        if(!hasFocus) {
            music.pause();
        }
    }
    initStartScreen();
}
function initStartScreen() {
    gameState = "start";
    if(audioType == 1) {
        music.fade(music.volume(), .25, 100);
    }
    if(firstRun && highscore >= 200) {
        firstRun = false;
    }
    aFallingCards = new Array();
    for(var i = 0; i < 10; i++) {
        var bub = new Elements.FallingCard();
        aFallingCards.push(bub);
    }
    userInput.removeHitArea("moreGames");
    gameBgId = 99;
    background = new Elements.Background("bg" + gameBgId);
    var oPlayBut0 = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            -170, 
            -80
        ],
        align: [
            .5, 
            .9
        ],
        id: oImageIds.playBut0,
        idOver: oImageIds.playBut0Over,
        flash: true
    };
    var oPlayBut1 = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            0, 
            -(80 + 50)
        ],
        align: [
            .5, 
            .9
        ],
        id: oImageIds.playBut1,
        idOver: oImageIds.playBut1Over,
        flash: true
    };
    var oPlayBut2 = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            170, 
            -80
        ],
        align: [
            .5, 
            .9
        ],
        id: oImageIds.playBut2,
        idOver: oImageIds.playBut2Over,
        flash: true
    };
    var oCreditsBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            45, 
            45
        ],
        align: [
            0, 
            0
        ],
        id: oImageIds.infoBut,
        idOver: oImageIds.infoButOver
    };
    userInput.addHitArea("startGame0", butEventHandler, null, "image", oPlayBut0);
    userInput.addHitArea("startGame1", butEventHandler, null, "image", oPlayBut1);
    userInput.addHitArea("startGame2", butEventHandler, null, "image", oPlayBut2);
    userInput.addHitArea("credits", butEventHandler, null, "image", oCreditsBut);
    var aButs = new Array(oPlayBut0, oPlayBut1, oPlayBut2, oCreditsBut);
    panel = new Elements.Panel(gameState, aButs);
    addMuteBut(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateStartScreenEvent();
}
function addMuteBut(_aButs) {
    if(audioType == 1) {
        var mb = oImageIds.muteBut0;
        var mbOver = oImageIds.muteBut0Over;
        if(muted) {
            mb = oImageIds.muteBut1;
            mbOver = oImageIds.muteBut1Over;
        }
        var oMuteBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                -45, 
                45
            ],
            align: [
                1, 
                0
            ],
            id: mb,
            idOver: mbOver
        };
        userInput.addHitArea("mute", butEventHandler, null, "image", oMuteBut);
        for(var i = 0; i < _aButs.length; i++) {
            if(_aButs[i].id == oImageIds.muteBut0 || _aButs[i].id == oImageIds.muteBut1) {
                return;
            }
        }
        _aButs.push(oMuteBut);
    }
}
function initCreditsScreen() {
    gameState = "credits";
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            45, 
            45
        ],
        align: [
            0, 
            0
        ],
        id: oImageIds.backBut,
        idOver: oImageIds.backButOver
    };
    var oResetBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            -45, 
            -70
        ],
        align: [
            1, 
            1
        ],
        id: oImageIds.resetBut,
        idOver: oImageIds.resetButOver
    };
    userInput.addHitArea("backFromCredits", butEventHandler, null, "image", oBackBut);
    userInput.addHitArea("resetData", butEventHandler, null, "image", oResetBut);
    var aButs = new Array(oBackBut, oResetBut);
    panel = new Elements.Panel(gameState, aButs);
    addMuteBut(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateCreditsScreenEvent();
}
function initGame() {
    gameState = "game";
    if(audioType == 1) {
        music.fade(music.volume(), .5, 1000);
    }
    playSound("levelStart");
    livesNum = 3;
    curTime = 6000;
    score = 0;
    levelNum = 0;
    chainCount = 0;
    runTimer = false;
    gameBgId = 2;
    cardBackId = (cardBackId + 1) % 5;
    background = new Elements.Background("bg" + gameBgId);
    cards = new Elements.Cards(aCardPos[levelNum].aData);
    aFireworks = new Array();
    hud = new Elements.Hud();
    var oPauseBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            45, 
            45
        ],
        align: [
            0, 
            0
        ],
        id: oImageIds.pauseBut,
        idOver: oImageIds.pauseButOver
    };
    userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
    var aButs = new Array(oPauseBut);
    panel = new Elements.Panel(gameState, aButs);
    addMuteBut(aButs);
    panel.startTween1();
    userInput.addHitArea("hitPlayArea", butEventHandler, null, "rect", {
        aRect: [
            0, 
            0, 
            canvas.width, 
            canvas.height
        ]
    }, true);
    previousTime = new Date().getTime();
    updateGameEvent();
}
function initGameOver() {
    gameState = "gameOver";
    if(audioType == 1) {
        music.fade(music.volume(), .25, 500);
    }
    saveDataHandler.setData(gameType, score);
    saveDataHandler.saveData();
    if(this.popCharTween) {
        this.popCharTween.kill();
    }
    if(this.plusTween) {
        this.plusTween.kill();
    }
    playSound("gameOver");
    background = new Elements.Background("bg4");
    aFireworks = new Array();
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            45, 
            45
        ],
        align: [
            0, 
            0
        ],
        id: oImageIds.backBut,
        idOver: oImageIds.backButOver
    };
    var oReplayBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            -90, 
            -80
        ],
        align: [
            1, 
            .9
        ],
        id: oImageIds.replayBut,
        idOver: oImageIds.replayButOver,
        flash: true
    };
    userInput.addHitArea("backFromGameOver", butEventHandler, null, "image", oBackBut);
    userInput.addHitArea("replayFromGameOver", butEventHandler, null, "image", oReplayBut);
    var aButs = new Array(oBackBut, oReplayBut);
    panel = new Elements.Panel(gameState, aButs);
    addMuteBut(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateGameOverEvent();
}
function initPause() {
    gameState = "pause";
    for(var i = 0; i < cards.aLevelCards.length; i++) {
        if(cards.aLevelCards[i].tween) {
            cards.aLevelCards[i].tween.pause();
        }
    }
    var oQuitBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            0, 
            80
        ],
        align: [
            .5, 
            .5
        ],
        id: oImageIds.quitBut,
        idOver: oImageIds.quitButOver,
        flash: true
    };
    var oRestartBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            0, 
            -80
        ],
        align: [
            .5, 
            .5
        ],
        id: oImageIds.continueBut,
        idOver: oImageIds.continueButOver,
        flash: true
    };
    userInput.addHitArea("quitGame", butEventHandler, null, "image", oQuitBut);
    userInput.addHitArea("resumeGame", butEventHandler, null, "image", oRestartBut);
    var aButs = new Array(oQuitBut, oRestartBut);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    background = new Elements.Background("bg" + gameBgId);
    updatePauseEvent();
}
function resumeGame() {
    gameState = "game";
    for(var i = 0; i < cards.aLevelCards.length; i++) {
        if(cards.aLevelCards[i].tween) {
            cards.aLevelCards[i].tween.play();
        }
    }
    background = new Elements.Background("bg" + gameBgId);
    var oPauseBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            45, 
            45
        ],
        align: [
            0, 
            0
        ],
        id: oImageIds.pauseBut,
        idOver: oImageIds.pauseButOver
    };
    userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
    var aButs = new Array(oPauseBut);
    panel = new Elements.Panel(gameState, aButs);
    addMuteBut(aButs);
    panel.startTween1();
    userInput.addHitArea("hitPlayArea", butEventHandler, null, "rect", {
        aRect: [
            0, 
            0, 
            canvas.width, 
            canvas.height
        ]
    }, true);
    previousTime = new Date().getTime();
    updateGameEvent();
}
function butEventHandler(_id, _oData) {
    switch(_id) {
        case "langSelect":
            break;
        case "credits":
            playSound("click");
            userInput.removeHitArea("startGame0");
            userInput.removeHitArea("startGame1");
            userInput.removeHitArea("startGame2");
            userInput.removeHitArea("credits");
            userInput.removeHitArea("mute");
            initCreditsScreen();
            break;
        case "backFromCredits":
            playSound("click");
            userInput.removeHitArea("backFromCredits");
            userInput.removeHitArea("resetData");
            userInput.removeHitArea("mute");
            initStartScreen();
            break;
        case "moreGames":
        case "moreGamesPause":
            break;
        case "resetData":
            playSound("click");
            userInput.removeHitArea("backFromCredits");
            userInput.removeHitArea("resetData");
            userInput.removeHitArea("mute");
            firstRun = true;
            saveDataHandler.resetData();
            initStartScreen();
            break;
        case "startGame0":
            playSound("click");
            userInput.removeHitArea("startGame0");
            userInput.removeHitArea("startGame1");
            userInput.removeHitArea("startGame2");
            userInput.removeHitArea("credits");
            gameType = 0;
            initGame();
            break;
        case "startGame1":
            playSound("click");
            userInput.removeHitArea("startGame0");
            userInput.removeHitArea("startGame1");
            userInput.removeHitArea("startGame2");
            userInput.removeHitArea("credits");
            gameType = 1;
            initGame();
            break;
        case "startGame2":
            playSound("click");
            userInput.removeHitArea("startGame0");
            userInput.removeHitArea("startGame1");
            userInput.removeHitArea("startGame2");
            userInput.removeHitArea("credits");
            gameType = 2;
            initGame();
            break;
        case "hitPlayArea":
            var aCardData = aCardPos[levelNum].aData;
            var canHit;
            var bWidth = (cards.oUiElementsImgData.oData.oAtlasData[oImageIds.cardBack0].width / 2) * cards.waitScale;
            if(hud.popCharInc > 0 && _oData.x < hud.popCharX + hud.popCharWidth && _oData.x > hud.popCharX && _oData.y < hud.popCharY + hud.popCharHeight && _oData.y > hud.popCharY) {
                hud.removePopChar();
                playSound("levelUp");
                score += 100;
                hud.jiggle();
                for(var i = 0; i < 5; i++) {
                    addFirework(1, hud.popCharX + Math.random() * hud.popCharWidth, hud.popCharY + Math.random() * hud.popCharHeight, Math.random() * .5 + 1);
                }
            }
            for(var i = 0; i < aCardData.length; i++) {
                if(_oData.x < canvas.width / 2 + aCardData[i].x + bWidth && _oData.x > canvas.width / 2 + aCardData[i].x - bWidth && _oData.y < canvas.height / 2 + aCardData[i].y + 47 + gameAreaOffsetY && _oData.y > canvas.height / 2 + aCardData[i].y - bWidth + gameAreaOffsetY) {
                    canHit = true;
                    for(var j = 0; j < cards.aFlippedCards.length; j++) {
                        if(cards.aFlippedCards[j] == i || cards.aFlippedCards.length > 1) {
                            canHit = false;
                            break;
                        }
                    }
                    if(cards.aLevelCards[i].isFlipped) {
                        canHit = false;
                    }
                    if(canHit) {
                        cardHit(i);
                        break;
                    }
                }
            }
            break;
        case "backFromGameOver":
            playSound("click");
            userInput.removeHitArea("backFromGameOver");
            userInput.removeHitArea("replayFromGameOver");
            userInput.removeHitArea("mute");
            initStartScreen();
            break;
        case "replayFromGameOver":
            playSound("click");
            userInput.removeHitArea("backFromGameOver");
            userInput.removeHitArea("replayFromGameOver");
            userInput.removeHitArea("mute");
            initGame();
            break;
        case "mute":
            playSound("click");
            toggleMute();
            panel.aButs.pop();
            addMuteBut(panel.aButs);
            break;
        case "pause":
            playSound("click");
            if(audioType == 1) {
                Howler.mute(true);
            } else if(audioType == 2) {
                music.pause();
            }
            userInput.removeHitArea("pause");
            userInput.removeHitArea("hitPlayArea");
            userInput.removeHitArea("mute");
            initPause();
            break;
        case "resumeGame":
            playSound("click");
            if(audioType == 1) {
                if(!muted) {
                    Howler.mute(false);
                }
            } else if(audioType == 2) {
                if(!muted) {
                    playMusic();
                }
            }
            userInput.removeHitArea("quitGame");
            userInput.removeHitArea("resumeGame");
            userInput.removeHitArea("restartGame");
            userInput.removeHitArea("mute");
            resumeGame();
            break;
        case "quitGame":
            playSound("click");
            if(audioType == 1) {
                if(!muted) {
                    Howler.mute(false);
                }
            } else if(audioType == 2) {
                if(!muted) {
                    playMusic();
                }
            }
            userInput.removeHitArea("quitGame");
            userInput.removeHitArea("resumeGame");
            userInput.removeHitArea("restartGame");
            userInput.removeHitArea("mute");
            initStartScreen();
            break;
    }
}
function cardMatch(_id) {
    for(var i = 0; i < 5; i++) {
        addFirework(1, canvas.width / 2 + (i * 100) - (4 * 100) / 2, canvas.height / 2 + Math.random() * 100 - 100, Math.random() * .5 + 1);
    }
    chainCount++;
    playSound("match" + Math.min(chainCount - 1, 4));
    score += 10 * chainCount;
    if(score > 999990) {
        score = 999990;
    }
    hud.initMatchAnim(Math.min(200 + (chainCount * 100), 1000), 100 * chainCount, _id);
}
function cardHit(_cardId) {
    cards.flipStart(_cardId);
    if(cards.aFlippedCards.length == 2) {
        runTimer = false;
    }
    if(cards.aFlippedCards.length == 1) {
        playSound("card0");
    } else {
        playSound("card1");
    }
}
function addFirework(_id, _x, _y, _scale) {
    if (typeof _scale === "undefined") { _scale = 1; }
    if(aFireworks.length > 10) {
        return;
    }
    var animId = "exploding";
    if(_id == 1) {
        animId = "exploding" + aFireworks.length % 5;
    }
    var firework = new Elements.Firework(assetLib.getData("firework" + _id), animId);
    firework.x = _x;
    firework.y = _y;
    firework.scaleX = firework.scaleY = _scale;
    aFireworks.push(firework);
}
function initLevelComplete() {
    levelNum++;
    firstRun = false;
    hud.popCharLevelTot = 0;
    playSound("levelStart");
    if(levelNum > 38) {
        levelNum = 15;
    }
    score += 50;
    curTime += 300;
    curTime = Math.min(curTime, 18000);
    if(score > 999990) {
        score = 999990;
    }
    hud.jiggle();
    if(gameType == 0 || (gameType == 2 && livesNum < 5)) {
        hud.timerJiggle();
        if(gameType == 0) {
            hud.initPlus(1, 3, canvas.width / 2 + 85, 125);
        }
    }
    livesNum = Math.min(livesNum + 1, 5);
    cards = new Elements.Cards(aCardPos[levelNum].aData);
    gameBgId = (gameBgId + 1) % 9;
    cardBackId = (cardBackId + 1) % 5;
    background.changeBg("bg" + gameBgId);
    if(gameType == 1) {
        saveDataHandler.setData(gameType, score);
        saveDataHandler.saveData();
    }
    for(var i = 0; i < 5; i++) {
        addFirework(1, Math.random() * (canvas.width / 2) + canvas.width / 4, Math.random() * (canvas.height / 2) + canvas.height / 4, Math.random() * .5 + 1);
    }
}
function updateGameEvent() {
    if(gameState != "game") {
        return;
    }
    delta = getDelta();
    if(gameType == 0 && runTimer) {
        curTime = Math.max(Math.round(curTime - (delta * 100)), 0);
        if(curTime <= 0) {
            userInput.removeHitArea("pause");
            userInput.removeHitArea("hitPlayArea");
            userInput.removeHitArea("mute");
            runTimer = false;
            initGameOver();
        }
    }
    background.render();
    panel.render();
    cards.update();
    cards.render();
    hud.render();
    hud.renderOverlay();
    for(var i = 0; i < aFireworks.length; i++) {
        aFireworks[i].update();
        aFireworks[i].render(ctx);
        if(aFireworks[i].removeMe) {
            aFireworks.splice(i, 1);
            i -= 1;
        }
    }
    checkButtonsOver();
    requestAnimFrame(updateGameEvent);
}
function updateGameOverEvent() {
    if(gameState != "gameOver") {
        return;
    }
    delta = getDelta();
    if(Math.random() < .1) {
        addFirework(Math.floor(Math.random() * 2), Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 1 + 1);
    }
    background.render();
    for(var i = 0; i < aFireworks.length; i++) {
        aFireworks[i].update();
        aFireworks[i].render(ctx);
        if(aFireworks[i].removeMe) {
            aFireworks.splice(i, 1);
            i -= 1;
        }
    }
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updateGameOverEvent);
}
function updateCreditsScreenEvent() {
    if(gameState != "credits") {
        return;
    }
    delta = getDelta();
    background.render();
    panel.update();
    panel.render();
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "left";
    ctx.font = "15px Helvetica";
    ctx.fillText("v0.0.1", 10, canvas.height - 10);
    checkButtonsOver();
    requestAnimFrame(updateCreditsScreenEvent);
}
function updateSplashScreenEvent() {
    if(gameState != "splash") {
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
    checkButtonsOver();
    requestAnimFrame(updateSplashScreenEvent);
}
function updateStartScreenEvent() {
    if(gameState != "start") {
        return;
    }
    delta = getDelta();
    background.render();
    for(var i = 0; i < aFallingCards.length; i++) {
        aFallingCards[i].update();
        aFallingCards[i].render();
    }
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updateStartScreenEvent);
}
function updateLoaderEvent() {
    if(gameState != "load") {
        return;
    }
    delta = getDelta();
    assetLib.render();
    requestAnimFrame(updateLoaderEvent);
}
function updatePauseEvent() {
    if(gameState != "pause") {
        return;
    }
    delta = getDelta();
    background.render();
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updatePauseEvent);
}
function checkButtonsOver() {
    if(isMobile) {
        return;
    }
    for(var i = 0; i < panel.aButs.length; i++) {
        panel.aButs[i].isOver = false;
        if(userInput.mouseX > panel.aButs[i].aOverData[0] && userInput.mouseX < panel.aButs[i].aOverData[2] && userInput.mouseY > panel.aButs[i].aOverData[1] && userInput.mouseY < panel.aButs[i].aOverData[3]) {
            panel.aButs[i].isOver = true;
        }
    }
}
function clearButtonOvers() {
    userInput.mouseX = -100;
    userInput.mouseY = -100;
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
function addText(_font, _size, _width, _align, _x, _y, _str, _col) {
    if (typeof _col === "undefined") { _col = "#202020"; }
    ctx.fillStyle = _col;
    ctx.textAlign = _align;
    if(_width < getTextWidth(_font, _size, _str)) {
        var breakCount = 0;
        _size--;
        while(_width < getTextWidth(_font, _size, _str)) {
            _size--;
            if(breakCount > 100) {
                break;
            }
        }
    }
    ctx.font = _size + "px " + assetLib.textData.langText["font" + _font][curLang];
    ctx.fillText(getText(_str), _x, _y);
}
function getText(_str) {
    return assetLib.textData.langText[_str][curLang];
}
function getTextWidth(_font, _size, _str) {
    ctx.font = _size + "px " + assetLib.textData.langText["font" + _font][curLang];
    var metrics = ctx.measureText(getText(_str));
    return metrics.width;
}
function getCorrectedTextWidth(_font, _size, _width, _str) {
    if(_width < getTextWidth(_font, _size, _str)) {
        var breakCount = 0;
        _size--;
        while(_width < getTextWidth(_font, _size, _str)) {
            _size--;
            if(breakCount > 100) {
                break;
            }
        }
    }
    ctx.font = _size + "px " + assetLib.textData.langText["font" + _font][curLang];
    var metrics = ctx.measureText(getText(_str));
    return metrics.width;
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
            file: "images/preloader.png",
            oAtlasData: {
                id0: {
                    x: 0,
                    y: 0,
                    width: 792,
                    height: 102
                },
                id1: {
                    x: 0,
                    y: 104,
                    width: 778,
                    height: 81
                },
                id2: {
                    x: 0,
                    y: 187,
                    width: 520,
                    height: 335
                }
            }
        }
    ], ctx, canvas.width, canvas.height, false);
    oImageIds.overBar = "id0";
    oImageIds.underBar = "id1";
    oImageIds.logo = "id2";
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
    loadAssets();
}
function loadAssets() {
    assetLib = new Utils.AssetLoader(curLang, [
        {
            id: "splashLogo",
            file: "images/info.png"
        }, 
        {
            id: "bg0",
            file: "images/bg0empty.jpg"
        }, 
        {
            id: "bg1",
            file: "images/bg1.jpg"
        }, 
        {
            id: "bg2",
            file: "images/bg2.jpg"
        }, 
        {
            id: "bg3",
            file: "images/bg3.jpg"
        }, 
        {
            id: "bg4",
            file: "images/bg4.jpg"
        }, 
        {
            id: "bg5",
            file: "images/bg5.jpg"
        }, 
        {
            id: "bg6",
            file: "images/bg6.jpg"
        }, 
        {
            id: "bg7",
            file: "images/bg7.jpg"
        }, 
        {
            id: "bg8",
            file: "images/bg8.jpg"
        }, 
        {
            id: "bg99",
            file: "images/bg0.jpg"
        },
        {
            id: "flare",
            file: "images/flare.png"
        }, 
        {
            id: "uiButs",
            file: "images/uiButs.png",
            oAtlasData: {
                id0: {
                    x: 0,
                    y: 0,
                    width: 163,
                    height: 151
                },
                id1: {
                    x: 0,
                    y: 153,
                    width: 163,
                    height: 151
                },
                id10: {
                    x: 495,
                    y: 83,
                    width: 81,
                    height: 81
                },
                id11: {
                    x: 495,
                    y: 249,
                    width: 81,
                    height: 81
                },
                id12: {
                    x: 578,
                    y: 249,
                    width: 80,
                    height: 81
                },
                id13: {
                    x: 578,
                    y: 0,
                    width: 80,
                    height: 81
                },
                id14: {
                    x: 330,
                    y: 153,
                    width: 163,
                    height: 151
                },
                id15: {
                    x: 330,
                    y: 459,
                    width: 163,
                    height: 151
                },
                id16: {
                    x: 165,
                    y: 459,
                    width: 163,
                    height: 151
                },
                id17: {
                    x: 165,
                    y: 306,
                    width: 163,
                    height: 151
                },
                id18: {
                    x: 165,
                    y: 153,
                    width: 163,
                    height: 151
                },
                id19: {
                    x: 165,
                    y: 0,
                    width: 163,
                    height: 151
                },
                id2: {
                    x: 495,
                    y: 332,
                    width: 81,
                    height: 81
                },
                id20: {
                    x: 0,
                    y: 459,
                    width: 163,
                    height: 151
                },
                id21: {
                    x: 0,
                    y: 306,
                    width: 163,
                    height: 151
                },
                id22: {
                    x: 495,
                    y: 0,
                    width: 81,
                    height: 81
                },
                id23: {
                    x: 495,
                    y: 166,
                    width: 81,
                    height: 81
                },
                id3: {
                    x: 495,
                    y: 415,
                    width: 81,
                    height: 81
                },
                id4: {
                    x: 578,
                    y: 166,
                    width: 80,
                    height: 81
                },
                id5: {
                    x: 578,
                    y: 83,
                    width: 80,
                    height: 81
                },
                id6: {
                    x: 330,
                    y: 306,
                    width: 163,
                    height: 151
                },
                id7: {
                    x: 330,
                    y: 0,
                    width: 163,
                    height: 151
                },
                id8: {
                    x: 577,
                    y: 498,
                    width: 80,
                    height: 81
                },
                id9: {
                    x: 495,
                    y: 498,
                    width: 80,
                    height: 81
                }
            }
        }, 
        {
            id: "uiElements",
            file: "images/uiElements.png",
            oAtlasData: {
                id0: {
                    x: 327,
                    y: 262,
                    width: 271,
                    height: 272
                },
                id1: {
                    x: 599,
                    y: 810,
                    width: 270,
                    height: 272
                },
                id10: {
                    x: 0,
                    y: 1034,
                    width: 46,
                    height: 44
                },
                id11: {
                    x: 48,
                    y: 1034,
                    width: 46,
                    height: 44
                },
                id12: {
                    x: 184,
                    y: 921,
                    width: 118,
                    height: 131
                },
                id13: {
                    x: 872,
                    y: 0,
                    width: 86,
                    height: 161
                },
                id14: {
                    x: 873,
                    y: 163,
                    width: 80,
                    height: 161
                },
                id15: {
                    x: 0,
                    y: 921,
                    width: 182,
                    height: 111
                },
                id16: {
                    x: 871,
                    y: 459,
                    width: 110,
                    height: 217
                },
                id17: {
                    x: 871,
                    y: 678,
                    width: 105,
                    height: 215
                },
                id18: {
                    x: 0,
                    y: 824,
                    width: 200,
                    height: 95
                },
                id19: {
                    x: 600,
                    y: 274,
                    width: 137,
                    height: 184
                },
                id2: {
                    x: 0,
                    y: 0,
                    width: 594,
                    height: 260
                },
                id20: {
                    x: 739,
                    y: 274,
                    width: 132,
                    height: 183
                },
                id21: {
                    x: 0,
                    y: 262,
                    width: 325,
                    height: 560
                },
                id3: {
                    x: 202,
                    y: 824,
                    width: 56,
                    height: 57
                },
                id4: {
                    x: 260,
                    y: 824,
                    width: 56,
                    height: 57
                },
                id5: {
                    x: 327,
                    y: 810,
                    width: 270,
                    height: 272
                },
                id6: {
                    x: 327,
                    y: 536,
                    width: 270,
                    height: 272
                },
                id7: {
                    x: 600,
                    y: 0,
                    width: 270,
                    height: 272
                },
                id8: {
                    x: 599,
                    y: 536,
                    width: 270,
                    height: 272
                },
                id9: {
                    x: 871,
                    y: 895,
                    width: 95,
                    height: 144
                }
            }
        }, 
        {
            id: "cards",
            file: "images/cards_250x250.jpg"
        }, 
        {
            id: "scoreNumbers",
            file: "images/scoreNumbers_66x81.png"
        }, 
        {
            id: "scoreNumbersBlue",
            file: "images/scoreNumbersBlue_66x81.png"
        }, 
        {
            id: "firework0",
            file: "images/firework0_175x175.png",
            oAnims: {
                exploding: [
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
            id: "firework1",
            file: "images/firework1_150x150.png",
            oAnims: {
                exploding0: [
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
                    15
                ],
                exploding1: [
                    16, 
                    16, 
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
                    15
                ],
                exploding2: [
                    16, 
                    16, 
                    16, 
                    16, 
                    16, 
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
                    15
                ],
                exploding3: [
                    16, 
                    16, 
                    16, 
                    16, 
                    16, 
                    16, 
                    16, 
                    16, 
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
                    15
                ],
                exploding4: [
                    16, 
                    16, 
                    16, 
                    16, 
                    16, 
                    16, 
                    16, 
                    16, 
                    16, 
                    16, 
                    16, 
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
                    15
                ]
            }
        }, 
        {
            id: "titleLogo",
            file: "images/title/title_" + curLang + ".png"
        }, 
        {
            id: "langText",
            file: "json/text.json"
        }
    ], ctx, canvas.width, canvas.height);
    oImageIds.cardFront = "id0";
    oImageIds.cardBack0 = "id1";
    oImageIds.rainbow = "id2";
    oImageIds.scoreIcon = "id3";
    oImageIds.highscoreIcon = "id4";
    oImageIds.cardBack1 = "id5";
    oImageIds.cardBack2 = "id6";
    oImageIds.cardBack3 = "id7";
    oImageIds.cardBack4 = "id8";
    oImageIds.finger = "id9";
    oImageIds.heart0 = "id10";
    oImageIds.heart1 = "id11";
    oImageIds.popCharBottom0 = "id12";
    oImageIds.popCharLeft0 = "id13";
    oImageIds.popCharRight0 = "id14";
    oImageIds.popCharBottom1 = "id15";
    oImageIds.popCharLeft1 = "id16";
    oImageIds.popCharRight1 = "id17";
    oImageIds.popCharBottom2 = "id18";
    oImageIds.popCharLeft2 = "id19";
    oImageIds.popCharRight2 = "id20";
    oImageIds.titleChar = "id21";
    oImageIds.playBut2 = "id0";
    oImageIds.playBut2Over = "id1";
    oImageIds.backBut = "id2";
    oImageIds.backButOver = "id3";
    oImageIds.infoBut = "id4";
    oImageIds.infoButOver = "id5";
    oImageIds.quitBut = "id6";
    oImageIds.quitButOver = "id7";
    oImageIds.muteBut0 = "id8";
    oImageIds.muteBut0Over = "id9";
    oImageIds.muteBut1 = "id10";
    oImageIds.muteBut1Over = "id11";
    oImageIds.pauseBut = "id12";
    oImageIds.pauseButOver = "id13";
    oImageIds.playBut0 = "id14";
    oImageIds.playBut0Over = "id15";
    oImageIds.playBut1 = "id16";
    oImageIds.playBut1Over = "id17";
    oImageIds.continueBut = "id18";
    oImageIds.continueButOver = "id19";
    oImageIds.replayBut = "id20";
    oImageIds.replayButOver = "id21";
    oImageIds.resetBut = "id22";
    oImageIds.resetButOver = "id23";
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
        userInput.addHitArea("hitPlayArea", butEventHandler, null, "rect", {
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
            if(gameState == "game") {
                music.volume(.5);
            } else {
                music.volume(.25);
            }
        }
    } else if(audioType == 2) {
        if(muted) {
            music.pause();
        } else {
            playMusic();
        }
    }
}
