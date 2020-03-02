/**
 * Created by jonathan.kernick on 21/04/2017.
 */

CC.Loader = function (assetURL) {

    this.pixiLoader = new PIXI.loaders.Loader();
    this.pixiPreLoader = new PIXI.loaders.Loader();
    this.manifest;
    this.preloaderGraphicsDone = false;
    this.scaleFactorValue = "";
    this.scaleFactor = "";
    this.scaleFactorsList = [];
    this.assetURL = assetURL || "";

    this._maniefestLoadedBound = this._manifestLoaded.bind(this);

};
CC.Loader.prototype.onManifestLoaded = function () {
};
CC.Loader.prototype.onAssetsComplete = function () {
};
CC.Loader.prototype._onAssetsComplete = function (event) {
    // console.log("onAssetsComplete");
    // console.log(res);
    this.onAssetsComplete(event);
};
CC.Loader.prototype.onPreloadProgress = function () {
};
CC.Loader.prototype._onPreloadProgress = function (event, res) {
    //console.log("onPreloadProgress");
    // console.log(res);
    this.onPreloadProgress(event, res);
};
CC.Loader.prototype.onPreloadComplete = function () {
};
CC.Loader.prototype._onPreloadComplete = function (event) {
    // console.log("onPreloadComplete");
    this.onPreloadComplete(event);
    this.pixiLoader.load();
};
CC.Loader.prototype.onAssetsProgress = function () {
};
CC.Loader.prototype._onAssetsProgress = function (event, res) {
    // console.log("onAssetsProgress");
    // console.log(res);
    this.onAssetsProgress(event, res);
};

CC.Loader.prototype.addScaleFactor = function (value, name) {
    this.scaleFactorsList.push({scale: value, id: name});
    this._setScaleFactor();
};
CC.Loader.prototype._setScaleFactor = function (value, name) {
    var i = 0, length = this.scaleFactorsList.length, factor, closeDist = 999999;
    for (i; i < length; ++i) {
        factor = this.scaleFactorsList[i];
        var testDist = Math.abs(Math.sqrt(factor.scale) - Math.sqrt(CC.scaleFactor));
        if (testDist < closeDist) {
            this.scaleFactor = factor.id;
        }
    }
};
CC.Loader.prototype.unload = function () {
    PIXI.utils.destroyTextureCache();

};
CC.Loader.prototype.load = function (manifestURL, preloadURLS) {
    //requests the manifest JSON
    this._manifestRequest = new XMLHttpRequest();
    this._manifestRequest.addEventListener("load", this._maniefestLoadedBound);
    this._manifestRequest.open("GET", this.assetURL + manifestURL);
    this._manifestRequest.send();
    //create the feedback for the loading propper


    this.pixiLoader.reset();
    this.pixiPreLoader.reset();
    this.preloadURLS = preloadURLS || this.preloadURLS;
    //console.log(this.preloadURLS);
    if (this.preloadURLS) {
        this.addArray(this.preloadURLS, this.pixiPreLoader);
    }

    this.pixiLoader.onProgress.add(this._onAssetsProgress.bind(this));
    this.pixiLoader.onComplete.add(this._onAssetsComplete.bind(this));
    this.pixiPreLoader.onProgress.add(this._onPreloadProgress.bind(this));
    this.pixiPreLoader.onComplete.add(this._onPreloadComplete.bind(this));

};


CC.Loader.prototype._manifestLoaded = function (event) {

    this._manifestRequest.removeEventListener("load", this._maniefestLoadedBound);
    this.addManifest(this._manifestRequest.responseText);
    //  console.log("manifestLoadedPrevFunc");
    this.onManifestLoaded(event);
    // delete this._manifestLoaded;
    delete this._manifestRequest;

    this.pixiPreLoader.load();

};
CC.Loader.prototype.addMultiple = function (protoID, protoURL, count, loadOut, start,options) {

    var i;
    start = start || 0;
    for (i = 0; i < count; ++i) {
        var url = protoURL.replace("[n]", ((start + i) + ""));
        var id = protoID.replace("[n]", ((start + i) + ""));
        loadOut.add(id, url,options);
    }
};
CC.Loader.prototype.addArray = function (loadArray, loader,options) {
    var i = 0, length = loadArray.length, asset;
    for (i; i < length; ++i) {
        asset = loadArray[i];
        if(asset.url === undefined)
        {
            var dataAsset = asset.split("/");
            var assetId = dataAsset[dataAsset.length - 1].replace(/\.(.*)>/, "");
            asset = {url:asset,id:assetId};
        }
        var url = this.assetURL + asset.url.replace("[v]", this.scaleFactor);
        if (asset.count) {
            this.addMultiple(asset.id, url, asset.count, loader, asset.start,options);
        }
        else {
            loader.add(asset.id, url,options);
        }
    }
};
/*
var dummyOptions = {
    metadata: {
        spineAtlas: new PIXI.spine.core.TextureAtlas()
    }
};*/

CC.Loader.prototype.addManifest = function (manifestText) {
    this.manifest = JSON.parse(manifestText);

    if (this.manifest.audio && this.manifest.audio.length) {
        console.log('audio found')
        this.addArray(this.manifest.audio, this.pixiPreLoader);
    }
    if (this.manifest.anim && this.manifest.anim.length) {
        this.addArray(this.manifest.anim, this.pixiLoader,{metadata:{spineSkeletonScale:0.25}});
    }
    if (this.manifest.json && this.manifest.json.length) {
        this.addArray(this.manifest.json, this.pixiLoader);
    }
    if (this.manifest.atlas && this.manifest.atlas.length) {
        this.addArray(this.manifest.atlas, this.pixiLoader);
    }
    if (this.manifest.img && this.manifest.img.length) {
        this.addArray(this.manifest.img, this.pixiLoader);
    }

};