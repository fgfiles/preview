(function ($hx_exports, $global) { "use strict";
$hx_exports["com"] = $hx_exports["com"] || {};
$hx_exports["com"]["github"] = $hx_exports["com"]["github"] || {};
$hx_exports["com"]["github"]["haxePixiGAF"] = $hx_exports["com"]["github"]["haxePixiGAF"] || {};
$hx_exports["com"]["github"]["haxePixiGAF"]["data"] = $hx_exports["com"]["github"]["haxePixiGAF"]["data"] || {};
$hx_exports["GAF"] = $hx_exports["GAF"] || {};
var $estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
Math.__name__ = ["Math"];
var Reflect = function() { };
Reflect.__name__ = ["Reflect"];
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
var Std = function() { };
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) {
		v = parseInt(x);
	}
	if(isNaN(v)) {
		return null;
	}
	return v;
};
var Type = function() { };
Type.__name__ = ["Type"];
Type.getClassName = function(c) {
	var a = c.__name__;
	if(a == null) {
		return null;
	}
	return a.join(".");
};
var _$UInt_UInt_$Impl_$ = {};
_$UInt_UInt_$Impl_$.__name__ = ["_UInt","UInt_Impl_"];
_$UInt_UInt_$Impl_$.toFloat = function(this1) {
	if(this1 < 0) {
		return 4294967296.0 + this1;
	} else {
		return this1 + 0.0;
	}
};
var com_github_haxePixiGAF_core_GAFLoader = $hx_exports["GAF"]["GAFLoader"] = function() {
	this.contents = [];
	this.names = [];
	PIXI.loaders.Loader.call(this);
};
com_github_haxePixiGAF_core_GAFLoader.__name__ = ["com","github","haxePixiGAF","core","GAFLoader"];
com_github_haxePixiGAF_core_GAFLoader.__super__ = PIXI.loaders.Loader;
com_github_haxePixiGAF_core_GAFLoader.prototype = $extend(PIXI.loaders.Loader.prototype,{
	addGAFFile: function(pUrl) {
		if(pUrl.substring(pUrl.length - 4) != ".gaf") {
			throw new js__$Boot_HaxeError("GAFLoader supports only .gaf files");
		}
		this.add(pUrl,{ loadType : 1, xhrType : "arraybuffer"});
	}
	,load: function(cb) {
		this["use"]($bind(this,this.parseData));
		return PIXI.loaders.Loader.prototype.load.call(this);
	}
	,parseData: function(pResource,pNext) {
		this.names.push(pResource.url);
		var lBytes = haxe_io_Bytes.ofData(pResource.data);
		this.contents.push(new com_github_haxePixiGAF_utils_GAFBytesInput(lBytes,0,lBytes.length));
		pNext();
	}
	,__class__: com_github_haxePixiGAF_core_GAFLoader
});
var com_github_haxePixiGAF_core_ZipToGAFAssetConverter = $hx_exports["GAF"]["ZipToGAFAssetConverter"] = function(id) {
	this._gafAssetsConfigIndex = 0;
	this._ignoreSounds = false;
	this._parseConfigAsync = false;
	this._currentConfigIndex = 0;
	PIXI.utils.EventEmitter.call(this);
	this._id = id;
};
com_github_haxePixiGAF_core_ZipToGAFAssetConverter.__name__ = ["com","github","haxePixiGAF","core","ZipToGAFAssetConverter"];
com_github_haxePixiGAF_core_ZipToGAFAssetConverter.getFolderURL = function(url) {
	var cutURL = url.split("?")[0];
	return cutURL.substring(0,cutURL.lastIndexOf("/") + 1);
};
com_github_haxePixiGAF_core_ZipToGAFAssetConverter.__super__ = PIXI.utils.EventEmitter;
com_github_haxePixiGAF_core_ZipToGAFAssetConverter.prototype = $extend(PIXI.utils.EventEmitter.prototype,{
	convert: function(data,defaultScale,defaultContentScaleFactor) {
		this.reset();
		if(defaultScale != null) {
			this._defaultScale = defaultScale;
		}
		if(this._defaultContentScaleFactor != null) {
			this._defaultContentScaleFactor = defaultContentScaleFactor;
		}
		if(this._id != null && this._id.length > 0) {
			this._gafBundle.set_name(this._id);
		}
		if(typeof(data) == "string") {
			this.loadUrls([data]);
		} else if((data instanceof Array) && data.__enum__ == null) {
			this.loadUrls(data);
		} else if(js_Boot.__instanceof(data,com_github_haxePixiGAF_core_GAFLoader)) {
			this.parseLoader(data);
		} else {
			haxe_Log.trace("ERROR",{ fileName : "ZipToGAFAssetConverter.hx", lineNumber : 162, className : "com.github.haxePixiGAF.core.ZipToGAFAssetConverter", methodName : "convert"});
		}
	}
	,reset: function() {
		this._currentConfigIndex = 0;
		this._configConvertTimeout = 0;
		this._sounds = [];
		this._taGFXs = new haxe_ds_StringMap();
		this._gfxData = new com_github_haxePixiGAF_data_GAFGFXData();
		this._gafBundle = new com_github_haxePixiGAF_data_GAFBundle();
		this._gafBundle.set_soundData(this._soundData);
		this._gafAssetsIDs = [];
		this._gafAssetConfigs = new haxe_ds_StringMap();
		this._gafAssetConfigSources = new haxe_ds_StringMap();
		this._gafAssetsConfigURLs = [];
		this._gafAssetsConfigIndex = 0;
		this._atlasSourceURLs = [];
	}
	,findAllAtlasURLs: function() {
		this._atlasSourceURLs = [];
		var url;
		var gafTimelineConfigs;
		var tmp = this._gafAssetConfigs.keys();
		while(tmp.hasNext()) {
			var id = tmp.next();
			var _this = this._gafAssetConfigs;
			gafTimelineConfigs = (__map_reserved[id] != null?_this.getReserved(id):_this.h[id]).get_timelines();
			var _g = 0;
			while(_g < gafTimelineConfigs.length) {
				var config = gafTimelineConfigs[_g];
				++_g;
				var folderURL = com_github_haxePixiGAF_core_ZipToGAFAssetConverter.getFolderURL(id);
				var _g1 = 0;
				var _g2 = config.get_allTextureAtlases();
				while(_g1 < _g2.length) {
					var scale = _g2[_g1];
					++_g1;
					var tmp1;
					if(!isNaN(this._defaultScale)) {
						var a = scale.get_scale();
						var b = this._defaultScale;
						if(isNaN(a) || isNaN(b)) {
							tmp1 = false;
						} else {
							tmp1 = Math.abs(a - b) < 0.00001;
						}
					} else {
						tmp1 = true;
					}
					if(tmp1) {
						var _g3 = 0;
						var _g4 = scale.get_allContentScaleFactors();
						while(_g3 < _g4.length) {
							var csf = _g4[_g3];
							++_g3;
							var tmp2;
							if(!isNaN(this._defaultContentScaleFactor)) {
								var a1 = csf.get_csf();
								var b1 = this._defaultContentScaleFactor;
								if(isNaN(a1) || isNaN(b1)) {
									tmp2 = false;
								} else {
									tmp2 = Math.abs(a1 - b1) < 0.00001;
								}
							} else {
								tmp2 = true;
							}
							if(tmp2) {
								var _g5 = 0;
								var _g6 = csf.get_sources();
								while(_g5 < _g6.length) {
									var source = _g6[_g5];
									++_g5;
									url = folderURL + source.get_source();
									if(source.get_source() != "no_atlas" && this._atlasSourceURLs.indexOf(url) == -1) {
										this._atlasSourceURLs.push(url);
									}
								}
							}
						}
					}
				}
			}
		}
		if(this._atlasSourceURLs.length > 0) {
			this._loader = new PIXI.loaders.Loader();
			this._loader.on("progress",$bind(this,this.onLoadProgress));
			this._loader.on("complete",$bind(this,this.createGAFTimelines));
			var url1;
			var fileName;
			var _g11 = 0;
			var _g7 = this._atlasSourceURLs.length;
			while(_g11 < _g7) {
				url1 = this._atlasSourceURLs[_g11++];
				fileName = url1.substring(url1.lastIndexOf("/") + 1);
				var v = new com_github_haxePixiGAF_data_tagfx_TAGFXsourcePixi(url1);
				var _this1 = this._taGFXs;
				if(__map_reserved[fileName] != null) {
					_this1.setReserved(fileName,v);
				} else {
					_this1.h[fileName] = v;
				}
				this._loader.add(url1);
			}
			this._loader.load();
		}
	}
	,loadUrls: function(pData) {
		var lLoader = new com_github_haxePixiGAF_core_GAFLoader();
		var _g1 = 0;
		var _g = pData.length;
		while(_g1 < _g) lLoader.addGAFFile(pData[_g1++]);
		lLoader.once("complete",$bind(this,this.onLoadUrls));
		lLoader.load();
	}
	,onLoadUrls: function(pLoader) {
		this.parseLoader(pLoader);
	}
	,parseLoader: function(pData) {
		var length = pData.contents.length;
		var fileName;
		this._gafAssetConfigSources = new haxe_ds_StringMap();
		this._gafAssetsIDs = [];
		var _g1 = 0;
		while(_g1 < length) {
			var i = _g1++;
			fileName = pData.names[i];
			this._gafAssetsIDs.push(fileName);
			var v = pData.contents[i];
			var _this = this._gafAssetConfigSources;
			if(__map_reserved[fileName] != null) {
				_this.setReserved(fileName,v);
			} else {
				_this.h[fileName] = v;
			}
		}
		this.convertConfig();
	}
	,convertConfig: function() {
		var configID = this._gafAssetsIDs[this._currentConfigIndex];
		var _this = this._gafAssetConfigSources;
		var configSource = __map_reserved[configID] != null?_this.getReserved(configID):_this.h[configID];
		var gafAssetID = this.getAssetId(this._gafAssetsIDs[this._currentConfigIndex]);
		if(js_Boot.__instanceof(configSource,com_github_haxePixiGAF_utils_GAFBytesInput)) {
			var converter = new com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter(gafAssetID,js_Boot.__cast(configSource , com_github_haxePixiGAF_utils_GAFBytesInput));
			converter.set_defaultScale(this._defaultScale);
			converter.set_defaultCSF(this._defaultContentScaleFactor);
			converter.set_ignoreSounds(this._ignoreSounds);
			converter.on("progress",$bind(this,this.onLoadProgress));
			converter.on("complete",$bind(this,this.onConverted));
			converter.on("error",$bind(this,this.onConvertError));
			converter.convert(this._parseConfigAsync);
		} else {
			throw new js__$Boot_HaxeError("Error");
		}
	}
	,createGAFTimelines: function(event) {
		if(event != null) {
			this._loader.off("complete",$bind(this,this.createGAFTimelines));
		}
		var gafTimelineConfigs;
		var gafAssetConfigID;
		var gafAssetConfig = null;
		var gafAsset = null;
		var _g1 = 0;
		var _g = this._gafAssetsIDs.length;
		while(_g1 < _g) {
			gafAssetConfigID = this._gafAssetsIDs[_g1++];
			var _this = this._gafAssetConfigs;
			gafAssetConfig = __map_reserved[gafAssetConfigID] != null?_this.getReserved(gafAssetConfigID):_this.h[gafAssetConfigID];
			gafTimelineConfigs = gafAssetConfig.get_timelines();
			gafAsset = new com_github_haxePixiGAF_data_GAFAsset(gafAssetConfig);
			var _g2 = 0;
			while(_g2 < gafTimelineConfigs.length) {
				var config = gafTimelineConfigs[_g2];
				++_g2;
				gafAsset.addGAFTimeline(this.createTimeline(config,gafAsset));
			}
			this._gafBundle.addGAFAsset(gafAsset);
		}
		if(gafAsset == null || gafAsset.get_timelines().length == 0) {
			return;
		}
		if(this._gafAssetsIDs.length == 1) {
			if(this._gafBundle.get_name() == null) {
				this._gafBundle.set_name(gafAssetConfig.get_id());
			}
		}
		this.finalizeParsing();
	}
	,finalizeParsing: function() {
		this._taGFXs = null;
		this._sounds = null;
		this.emit("complete",{ target : this});
		return;
	}
	,createTimeline: function(config,asset) {
		var _g = 0;
		var _g1 = config.get_allTextureAtlases();
		while(_g < _g1.length) {
			var cScale = _g1[_g];
			++_g;
			var tmp;
			if(this._defaultScale != null) {
				var a = this._defaultScale;
				var b = cScale.get_scale();
				if(isNaN(a) || isNaN(b)) {
					tmp = false;
				} else {
					tmp = Math.abs(a - b) < 0.00001;
				}
			} else {
				tmp = true;
			}
			if(tmp) {
				var _g2 = 0;
				var _g3 = cScale.get_allContentScaleFactors();
				while(_g2 < _g3.length) {
					var cCSF = _g3[_g2];
					++_g2;
					var tmp1;
					if(this._defaultContentScaleFactor != null) {
						var a1 = this._defaultContentScaleFactor;
						var b1 = cCSF.get_csf();
						if(isNaN(a1) || isNaN(b1)) {
							tmp1 = false;
						} else {
							tmp1 = Math.abs(a1 - b1) < 0.00001;
						}
					} else {
						tmp1 = true;
					}
					if(tmp1) {
						var _g4 = 0;
						var _g5 = cCSF.get_sources();
						while(_g4 < _g5.length) {
							var taSource = _g5[_g4];
							++_g4;
							if(taSource.get_source() == "no_atlas") {
								continue;
							}
							var key = taSource.get_source();
							var _this = this._taGFXs;
							if((__map_reserved[key] != null?_this.getReserved(key):_this.h[key]) != null) {
								var key1 = taSource.get_source();
								var _this1 = this._taGFXs;
								var taGFX = __map_reserved[key1] != null?_this1.getReserved(key1):_this1.h[key1];
								taGFX.set_textureScale(cCSF.get_csf());
								this._gfxData.addTAGFX(cScale.get_scale(),cCSF.get_csf(),taSource.get_id(),taGFX);
							}
						}
					}
				}
			}
		}
		var timeline = new com_github_haxePixiGAF_data_GAFTimeline(config);
		timeline.set_gafgfxData(this._gfxData);
		timeline.set_gafSoundData(this._soundData);
		timeline.set_gafAsset(asset);
		switch(com_github_haxePixiGAF_core_ZipToGAFAssetConverter.actionWithAtlases) {
		case "actionLoadAllInGPUMemory":
			timeline.loadInVideoMemory("contentAll");
			break;
		case "actionLoadInGPUMemoryOnlyDefault":
			timeline.loadInVideoMemory("contentDefault");
			break;
		}
		return timeline;
	}
	,getAssetId: function(configName) {
		var startIndex = configName.lastIndexOf("/");
		if(startIndex < 0) {
			startIndex = 0;
		} else {
			++startIndex;
		}
		var endIndex = configName.lastIndexOf(".");
		if(endIndex < 0) {
			endIndex = 2147483647;
		}
		return configName.substring(startIndex,endIndex);
	}
	,onConvertError: function(event) {
		throw new js__$Boot_HaxeError("ZipToGAFAssetConverter: " + Std.string(event.type));
	}
	,onLoadProgress: function(event) {
		this.emit("progress",event);
	}
	,onConverted: function(event) {
		var configID = this._gafAssetsIDs[this._currentConfigIndex];
		var folderURL = com_github_haxePixiGAF_core_ZipToGAFAssetConverter.getFolderURL(configID);
		var converter = js_Boot.__cast(event.target , com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter);
		converter.off("progress",$bind(this,this.onLoadProgress));
		converter.off("complete",$bind(this,this.onConverted));
		converter.off("error",$bind(this,this.onConvertError));
		var v = converter.get_config();
		var _this = this._gafAssetConfigs;
		if(__map_reserved[configID] != null) {
			_this.setReserved(configID,v);
		} else {
			_this.h[configID] = v;
		}
		var sounds = converter.get_config().get_sounds();
		if(sounds != null && !this._ignoreSounds) {
			var _g1 = 0;
			var _g = sounds.length;
			while(_g1 < _g) {
				var i = _g1++;
				sounds[i].source = folderURL + sounds[i].source;
			}
		}
		this._currentConfigIndex++;
		if(this._currentConfigIndex >= this._gafAssetsIDs.length) {
			this.findAllAtlasURLs();
			return;
		} else {
			this.convertConfig();
		}
	}
	,onTexturesReady: function(event) {
		this._gfxData.off("texturesReady",$bind(this,this.onTexturesReady));
		this.emit("complete",{ target : this});
	}
	,get_gafBundle: function() {
		return this._gafBundle;
	}
	,__class__: com_github_haxePixiGAF_core_ZipToGAFAssetConverter
});
var com_github_haxePixiGAF_data_GAF = $hx_exports["com"]["github"]["haxePixiGAF"]["data"]["GAF"] = function() { };
com_github_haxePixiGAF_data_GAF.__name__ = ["com","github","haxePixiGAF","data","GAF"];
com_github_haxePixiGAF_data_GAF.get_maxAlpha = function() {
	if(com_github_haxePixiGAF_data_GAF.use99alpha) {
		return 0.99;
	} else {
		return 1;
	}
};
var com_github_haxePixiGAF_data_GAFAsset = function(config) {
	this._timelinesByLinkage = new haxe_ds_StringMap();
	this._timelinesDictionary = new haxe_ds_StringMap();
	this._config = config;
	this._scale = config.get_defaultScale();
	this._csf = config.get_defaultContentScaleFactor();
	this._timelines = [];
};
com_github_haxePixiGAF_data_GAFAsset.__name__ = ["com","github","haxePixiGAF","data","GAFAsset"];
com_github_haxePixiGAF_data_GAFAsset.prototype = {
	dispose: function() {
		if(this._timelines.length > 0) {
			var _g = 0;
			var _g1 = this._timelines;
			while(_g < _g1.length) {
				var timeline = _g1[_g];
				++_g;
				timeline.dispose();
			}
		}
		this._timelines = null;
		this._config.dispose();
		this._config = null;
	}
	,addGAFTimeline: function(timeline) {
		var key = timeline.get_id();
		var _this = this._timelinesDictionary;
		if((__map_reserved[key] != null?_this.getReserved(key):_this.h[key]) == null) {
			var k = timeline.get_id();
			var _this1 = this._timelinesDictionary;
			if(__map_reserved[k] != null) {
				_this1.setReserved(k,timeline);
			} else {
				_this1.h[k] = timeline;
			}
			this._timelines.push(timeline);
			if(timeline.get_config().get_linkage() != null) {
				var k1 = timeline.get_linkage();
				var _this2 = this._timelinesByLinkage;
				if(__map_reserved[k1] != null) {
					_this2.setReserved(k1,timeline);
				} else {
					_this2.h[k1] = timeline;
				}
			}
		} else {
			throw new js__$Boot_HaxeError("Bundle error. More then one timeline use id:'" + timeline.get_id() + "'");
		}
	}
	,getGAFTimelineByLinkage: function(linkage) {
		var _this = this._timelinesByLinkage;
		return __map_reserved[linkage] != null?_this.getReserved(linkage):_this.h[linkage];
	}
	,getGAFTimelineByID: function(id) {
		var _this = this._timelinesDictionary;
		return __map_reserved[id] != null?_this.getReserved(id):_this.h[id];
	}
	,getCustomRegion: function(linkage,scale,csf) {
		if(scale == null) {
			scale = this._scale;
		}
		if(csf == null) {
			csf = this._csf;
		}
		var gafTexture = null;
		var atlasScale;
		var atlasCSF;
		var element;
		var tasl = this._config.get_allTextureAtlases().length;
		var _g1 = 0;
		while(_g1 < tasl) {
			var i = _g1++;
			atlasScale = this._config.get_allTextureAtlases()[i];
			if(atlasScale.get_scale() == scale) {
				var tacsfl = atlasScale.get_allContentScaleFactors().length;
				var _g3 = 0;
				while(_g3 < tacsfl) {
					var j = _g3++;
					atlasCSF = atlasScale.get_allContentScaleFactors()[j];
					if(atlasCSF.get_csf() == csf) {
						element = atlasCSF.get_elements().getElementByLinkage(linkage);
						if(element != null) {
							var tmp = element.get_id();
							var tmp1 = element.get_atlasID();
							var texture = atlasCSF.get_atlas().getTextureByIDAndAtlasID(tmp,tmp1);
							var pivotMatrix = element.get_pivotMatrix();
							if(element.get_scale9Grid() != null) {
								gafTexture = new com_github_haxePixiGAF_display_GAFScale9Texture(this.get_id(),texture,pivotMatrix,element.get_scale9Grid());
							} else {
								gafTexture = new com_github_haxePixiGAF_display_GAFTexture(this.get_id(),texture,pivotMatrix);
							}
						}
						break;
					}
				}
				break;
			}
		}
		return gafTexture;
	}
	,getValidScale: function(value) {
		var index = com_github_haxePixiGAF_utils_MathUtility.getItemIndex(this._config.get_scaleValues(),value);
		if(index != -1) {
			return this._config.get_scaleValues()[index];
		}
		return NaN;
	}
	,hasCSF: function(value) {
		return com_github_haxePixiGAF_utils_MathUtility.getItemIndex(this._config.get_csfValues(),value) >= 0;
	}
	,get_timelines: function() {
		return this._timelines;
	}
	,get_id: function() {
		return this._config.get_id();
	}
	,get_scale: function() {
		return this._scale;
	}
	,set_scale: function(value) {
		return this._scale = value;
	}
	,get_csf: function() {
		return this._csf;
	}
	,set_csf: function(value) {
		return this._csf = value;
	}
	,__class__: com_github_haxePixiGAF_data_GAFAsset
};
var com_github_haxePixiGAF_data_GAFAssetConfig = function(id) {
	this._fileLength = 0;
	this._versionMinor = 0;
	this._versionMajor = 0;
	this._compression = 0;
	this._id = id;
	this._scaleValues = [];
	this._csfValues = [];
	this._timelines = [];
	this._allTextureAtlases = [];
};
com_github_haxePixiGAF_data_GAFAssetConfig.__name__ = ["com","github","haxePixiGAF","data","GAFAssetConfig"];
com_github_haxePixiGAF_data_GAFAssetConfig.prototype = {
	addSound: function(soundData) {
		if(this._sounds == null) {
			this._sounds = [];
		}
		this._sounds.push(soundData);
	}
	,dispose: function() {
		this._allTextureAtlases = null;
		this._stageConfig = null;
		this._scaleValues = null;
		this._csfValues = null;
		this._timelines = null;
		this._sounds = null;
	}
	,get_compression: function() {
		return this._compression;
	}
	,set_compression: function(value) {
		return this._compression = value;
	}
	,get_versionMajor: function() {
		return this._versionMajor;
	}
	,set_versionMajor: function(value) {
		return this._versionMajor = value;
	}
	,get_versionMinor: function() {
		return this._versionMinor;
	}
	,set_versionMinor: function(value) {
		return this._versionMinor = value;
	}
	,get_fileLength: function() {
		return this._fileLength;
	}
	,set_fileLength: function(value) {
		return this._fileLength = value;
	}
	,get_scaleValues: function() {
		return this._scaleValues;
	}
	,get_csfValues: function() {
		return this._csfValues;
	}
	,get_defaultScale: function() {
		return this._defaultScale;
	}
	,set_defaultScale: function(value) {
		return this._defaultScale = value;
	}
	,get_defaultContentScaleFactor: function() {
		return this._defaultContentScaleFactor;
	}
	,set_defaultContentScaleFactor: function(value) {
		return this._defaultContentScaleFactor = value;
	}
	,get_timelines: function() {
		return this._timelines;
	}
	,get_allTextureAtlases: function() {
		return this._allTextureAtlases;
	}
	,get_stageConfig: function() {
		return this._stageConfig;
	}
	,set_stageConfig: function(value) {
		return this._stageConfig = value;
	}
	,get_id: function() {
		return this._id;
	}
	,get_sounds: function() {
		return this._sounds;
	}
	,__class__: com_github_haxePixiGAF_data_GAFAssetConfig
};
var com_github_haxePixiGAF_data_GAFBundle = $hx_exports["GAF"]["GAFBundle"] = function() {
	this._gafAssets = [];
	this._gafAssetsDictionary = new haxe_ds_StringMap();
};
com_github_haxePixiGAF_data_GAFBundle.__name__ = ["com","github","haxePixiGAF","data","GAFBundle"];
com_github_haxePixiGAF_data_GAFBundle.prototype = {
	dispose: function() {
		if(this._gafAssets != null) {
			this._soundData = null;
			var _g = 0;
			var _g1 = this._gafAssets;
			while(_g < _g1.length) {
				var gafAsset = _g1[_g];
				++_g;
				gafAsset.dispose();
			}
			this._gafAssets = null;
			this._gafAssetsDictionary = null;
		}
	}
	,getGAFTimeline: function(swfName,linkage) {
		if(linkage == null) {
			linkage = "rootTimeline";
		}
		var gafTimeline = null;
		var _this = this._gafAssetsDictionary;
		var gafAsset = __map_reserved[swfName] != null?_this.getReserved(swfName):_this.h[swfName];
		if(gafAsset != null) {
			gafTimeline = gafAsset.getGAFTimelineByLinkage(linkage);
		}
		return gafTimeline;
	}
	,getCustomRegion: function(swfName,linkage,scale,csf) {
		var gafTexture = null;
		var _this = this._gafAssetsDictionary;
		var gafAsset = __map_reserved[swfName] != null?_this.getReserved(swfName):_this.h[swfName];
		if(gafAsset != null) {
			gafTexture = gafAsset.getCustomRegion(linkage,scale,csf);
		}
		return gafTexture;
	}
	,getGAFTimelineBySWFNameAndID: function(swfName,id) {
		var gafTimeline = null;
		var _this = this._gafAssetsDictionary;
		var gafAsset = __map_reserved[swfName] != null?_this.getReserved(swfName):_this.h[swfName];
		if(gafAsset != null) {
			gafTimeline = gafAsset.getGAFTimelineByID(id);
		}
		return gafTimeline;
	}
	,addGAFAsset: function(gafAsset) {
		var key = gafAsset.get_id();
		var _this = this._gafAssetsDictionary;
		if((__map_reserved[key] != null?_this.getReserved(key):_this.h[key]) == null) {
			var k = gafAsset.get_id();
			var _this1 = this._gafAssetsDictionary;
			if(__map_reserved[k] != null) {
				_this1.setReserved(k,gafAsset);
			} else {
				_this1.h[k] = gafAsset;
			}
			this._gafAssets.push(gafAsset);
		} else {
			throw new js__$Boot_HaxeError("Bundle error. More then one gaf asset use id:'" + gafAsset.get_id() + "'");
		}
	}
	,get_soundData: function() {
		return this._soundData;
	}
	,set_soundData: function(soundData) {
		return this._soundData = soundData;
	}
	,get_gafAssets: function() {
		return this._gafAssets;
	}
	,get_name: function() {
		return this._name;
	}
	,set_name: function(name) {
		return this._name = name;
	}
	,__class__: com_github_haxePixiGAF_data_GAFBundle
};
var com_github_haxePixiGAF_data_GAFDebugInformation = function() {
	this.color = 0;
	this.type = 0;
};
com_github_haxePixiGAF_data_GAFDebugInformation.__name__ = ["com","github","haxePixiGAF","data","GAFDebugInformation"];
com_github_haxePixiGAF_data_GAFDebugInformation.prototype = {
	__class__: com_github_haxePixiGAF_data_GAFDebugInformation
};
var com_github_haxePixiGAF_data_GAFGFXData = function() {
	this._textureLoadersSet = new haxe_ds_ObjectMap();
	this._taGFXDictionary = new haxe_ds_StringMap();
	this._texturesDictionary = new haxe_ds_StringMap();
	PIXI.utils.EventEmitter.call(this);
};
com_github_haxePixiGAF_data_GAFGFXData.__name__ = ["com","github","haxePixiGAF","data","GAFGFXData"];
com_github_haxePixiGAF_data_GAFGFXData.__super__ = PIXI.utils.EventEmitter;
com_github_haxePixiGAF_data_GAFGFXData.prototype = $extend(PIXI.utils.EventEmitter.prototype,{
	addTAGFX: function(scale,csf,imageID,taGFX) {
		var lScale = scale == null?"null":"" + scale;
		var lCsf = csf == null?"null":"" + csf;
		var _this = this._taGFXDictionary;
		if((__map_reserved[lScale] != null?_this.getReserved(lScale):_this.h[lScale]) == null) {
			var v = new haxe_ds_StringMap();
			var _this1 = this._taGFXDictionary;
			if(__map_reserved[lScale] != null) {
				_this1.setReserved(lScale,v);
			} else {
				_this1.h[lScale] = v;
			}
		}
		var _this2 = this._taGFXDictionary;
		if((__map_reserved[lScale] != null?_this2.getReserved(lScale):_this2.h[lScale]).get(lCsf) == null) {
			var _this3 = this._taGFXDictionary;
			var this1 = __map_reserved[lScale] != null?_this3.getReserved(lScale):_this3.h[lScale];
			var v1 = new haxe_ds_StringMap();
			this1.set(lCsf,v1);
		}
		var _this4 = this._taGFXDictionary;
		if((__map_reserved[lScale] != null?_this4.getReserved(lScale):_this4.h[lScale]).get(lCsf).get(imageID) == null) {
			var _this5 = this._taGFXDictionary;
			(__map_reserved[lScale] != null?_this5.getReserved(lScale):_this5.h[lScale]).get(lCsf).set(imageID,taGFX);
		}
	}
	,getTAGFXs: function(scale,csf) {
		var lScale = scale == null?"null":"" + scale;
		var lCsf = csf == null?"null":"" + csf;
		if(this._taGFXDictionary != null) {
			var _this = this._taGFXDictionary;
			if((__map_reserved[lScale] != null?_this.getReserved(lScale):_this.h[lScale]) != null) {
				var _this1 = this._taGFXDictionary;
				return (__map_reserved[lScale] != null?_this1.getReserved(lScale):_this1.h[lScale]).get(lCsf);
			}
		}
		return null;
	}
	,getTAGFX: function(scale,csf,imageID) {
		var lScale = scale == null?"null":"" + scale;
		var lCsf = csf == null?"null":"" + csf;
		if(this._taGFXDictionary != null) {
			var _this = this._taGFXDictionary;
			if((__map_reserved[lScale] != null?_this.getReserved(lScale):_this.h[lScale]) != null) {
				var _this1 = this._taGFXDictionary;
				if((__map_reserved[lScale] != null?_this1.getReserved(lScale):_this1.h[lScale]).get(lCsf) != null) {
					var _this2 = this._taGFXDictionary;
					return (__map_reserved[lScale] != null?_this2.getReserved(lScale):_this2.h[lScale]).get(lCsf).get(imageID);
				}
			}
		}
		return null;
	}
	,createTextures: function(scale,csf) {
		var taGFXs = this.getTAGFXs(scale,csf);
		if(taGFXs != null) {
			var lScale = scale == null?"null":"" + scale;
			var lCsf = csf == null?"null":"" + csf;
			var _this = this._texturesDictionary;
			if((__map_reserved[lScale] != null?_this.getReserved(lScale):_this.h[lScale]) == null) {
				var v = new haxe_ds_StringMap();
				var _this1 = this._texturesDictionary;
				if(__map_reserved[lScale] != null) {
					_this1.setReserved(lScale,v);
				} else {
					_this1.h[lScale] = v;
				}
			}
			var _this2 = this._texturesDictionary;
			if((__map_reserved[lScale] != null?_this2.getReserved(lScale):_this2.h[lScale]).get(lCsf) == null) {
				var _this3 = this._texturesDictionary;
				var this1 = __map_reserved[lScale] != null?_this3.getReserved(lScale):_this3.h[lScale];
				var v1 = new haxe_ds_StringMap();
				this1.set(lCsf,v1);
			}
			var tmp = taGFXs.keys();
			while(tmp.hasNext()) {
				var imageAtlasID = tmp.next();
				if((__map_reserved[imageAtlasID] != null?taGFXs.getReserved(imageAtlasID):taGFXs.h[imageAtlasID]) != null) {
					var _this4 = this._texturesDictionary;
					this.addTexture((__map_reserved[lScale] != null?_this4.getReserved(lScale):_this4.h[lScale]).get(lCsf),__map_reserved[imageAtlasID] != null?taGFXs.getReserved(imageAtlasID):taGFXs.h[imageAtlasID],imageAtlasID);
				}
			}
			return true;
		}
		return false;
	}
	,createTexture: function(scale,csf,imageID) {
		var taGFX = this.getTAGFX(scale,csf,imageID);
		if(taGFX != null) {
			var lScale = scale == null?"null":"" + scale;
			var lCsf = csf == null?"null":"" + csf;
			var _this = this._texturesDictionary;
			if((__map_reserved[lScale] != null?_this.getReserved(lScale):_this.h[lScale]) == null) {
				var v = new haxe_ds_StringMap();
				var _this1 = this._texturesDictionary;
				if(__map_reserved[lScale] != null) {
					_this1.setReserved(lScale,v);
				} else {
					_this1.h[lScale] = v;
				}
			}
			var _this2 = this._texturesDictionary;
			if((__map_reserved[lScale] != null?_this2.getReserved(lScale):_this2.h[lScale]).get(lCsf) == null) {
				var _this3 = this._texturesDictionary;
				var this1 = __map_reserved[lScale] != null?_this3.getReserved(lScale):_this3.h[lScale];
				var v1 = new haxe_ds_StringMap();
				this1.set(lCsf,v1);
			}
			var _this4 = this._texturesDictionary;
			this.addTexture((__map_reserved[lScale] != null?_this4.getReserved(lScale):_this4.h[lScale]).get(lCsf),taGFX,imageID);
			return true;
		}
		return false;
	}
	,getTexture: function(scale,csf,imageID) {
		var lScale = scale == null?"null":"" + scale;
		var lCsf = csf == null?"null":"" + csf;
		if(this._texturesDictionary != null) {
			var _this = this._texturesDictionary;
			if((__map_reserved[lScale] != null?_this.getReserved(lScale):_this.h[lScale]) != null) {
				var _this1 = this._texturesDictionary;
				if((__map_reserved[lScale] != null?_this1.getReserved(lScale):_this1.h[lScale]).get(lCsf) != null) {
					var _this2 = this._texturesDictionary;
					if((__map_reserved[lScale] != null?_this2.getReserved(lScale):_this2.h[lScale]).get(lCsf).get(imageID) != null) {
						var _this3 = this._texturesDictionary;
						return (__map_reserved[lScale] != null?_this3.getReserved(lScale):_this3.h[lScale]).get(lCsf).get(imageID);
					}
				}
			}
		}
		if(this.createTexture(scale,csf,imageID)) {
			var _this4 = this._texturesDictionary;
			return (__map_reserved[lScale] != null?_this4.getReserved(lScale):_this4.h[lScale]).get(lCsf).get(imageID);
		}
		return null;
	}
	,getTextures: function(scale,csf) {
		var lScale = scale == null?"null":"" + scale;
		var lCsf = csf == null?"null":"" + csf;
		if(this._texturesDictionary != null) {
			var _this = this._texturesDictionary;
			if((__map_reserved[lScale] != null?_this.getReserved(lScale):_this.h[lScale]) != null) {
				var _this1 = this._texturesDictionary;
				return (__map_reserved[lScale] != null?_this1.getReserved(lScale):_this1.h[lScale]).get(lCsf);
			}
		}
		return null;
	}
	,disposeTextures: function(scale,csf,imageID) {
		haxe_Log.trace("disposeTextures: TODO",{ fileName : "GAFGFXData.hx", lineNumber : 221, className : "com.github.haxePixiGAF.data.GAFGFXData", methodName : "disposeTextures"});
	}
	,addTexture: function(dictionary,tagfx,imageID) {
		if(com_github_haxePixiGAF_utils_DebugUtility.RENDERING_DEBUG) {
			if(tagfx.get_texture() == null) {
				throw new js__$Boot_HaxeError("GAFGFXData texture for rendering not found!");
			}
		} else if((__map_reserved[imageID] != null?dictionary.getReserved(imageID):dictionary.h[imageID]) == null) {
			if(!tagfx.get_ready()) {
				this._textureLoadersSet.set(tagfx,tagfx);
				tagfx.on("textureReady",$bind(this,this.onTextureReady));
			}
			var v = com_github_haxePixiGAF_data_textures_TextureWrapper.fromTexture(tagfx.get_texture());
			if(__map_reserved[imageID] != null) {
				dictionary.setReserved(imageID,v);
			} else {
				dictionary.h[imageID] = v;
			}
		}
	}
	,onTextureReady: function(event) {
		var tagfx = js_Boot.__cast(event.target , com_github_haxePixiGAF_data_tagfx_ITAGFX);
		tagfx.off("textureReady",$bind(this,this.onTextureReady));
		this._textureLoadersSet.remove(tagfx);
		if(this.get_isTexturesReady()) {
			this.emit("texturesReady");
		}
	}
	,get_isTexturesReady: function() {
		var empty = true;
		var tmp = this._textureLoadersSet.iterator();
		while(tmp.hasNext()) {
			tmp.next();
			empty = false;
			break;
		}
		haxe_Log.trace("isTexturesReady",{ fileName : "GAFGFXData.hx", lineNumber : 364, className : "com.github.haxePixiGAF.data.GAFGFXData", methodName : "get_isTexturesReady", customParams : [empty]});
		return empty;
	}
	,__class__: com_github_haxePixiGAF_data_GAFGFXData
});
var com_github_haxePixiGAF_data_GAFTimeline = $hx_exports["GAF"]["GAFTimeline"] = function(timelineConfig) {
	this._config = timelineConfig;
};
com_github_haxePixiGAF_data_GAFTimeline.__name__ = ["com","github","haxePixiGAF","data","GAFTimeline"];
com_github_haxePixiGAF_data_GAFTimeline.prototype = {
	getTextureByName: function(animationObjectName) {
		var instanceID = this._config.getNamedPartID(animationObjectName);
		if(instanceID != null) {
			var part = this._config.get_animationObjects().getAnimationObject(instanceID);
			if(part != null) {
				return this.get_textureAtlas().getTexture(part.get_regionID());
			}
		}
		return null;
	}
	,dispose: function() {
		this._config.dispose();
		this._config = null;
		this._gafAsset = null;
		this._gafgfxData = null;
		this._gafSoundData = null;
	}
	,loadInVideoMemory: function(content,pScale,csf) {
		if(content == null) {
			content = "contentDefault";
		}
		if(this._config.get_textureAtlas() == null || this._config.get_textureAtlas().get_contentScaleFactor().get_elements() == null) {
			return;
		}
		var textures;
		var csfConfig;
		switch(content) {
		case "contentAll":
			var _g = 0;
			var _g1 = this._config.get_allTextureAtlases();
			while(_g < _g1.length) {
				var scaleConfig = _g1[_g];
				++_g;
				var _g2 = 0;
				var _g3 = scaleConfig.get_allContentScaleFactors();
				while(_g2 < _g3.length) {
					var csfConfig1 = _g3[_g2];
					++_g2;
					this._gafgfxData.createTextures(scaleConfig.get_scale(),csfConfig1.get_csf());
					textures = this._gafgfxData.getTextures(scaleConfig.get_scale(),csfConfig1.get_csf());
					if(csfConfig1.get_atlas() == null && textures != null) {
						csfConfig1.set_atlas(com_github_haxePixiGAF_data_config_CTextureAtlas.createFromTextures(textures,csfConfig1));
					}
				}
			}
			return;
		case "contentDefault":
			csfConfig = this._config.get_textureAtlas().get_contentScaleFactor();
			if(csfConfig == null) {
				return;
			}
			if(csfConfig.get_atlas() == null && this._gafgfxData.createTextures(this.get_scale(),this.get_contentScaleFactor())) {
				csfConfig.set_atlas(com_github_haxePixiGAF_data_config_CTextureAtlas.createFromTextures(this._gafgfxData.getTextures(this.get_scale(),this.get_contentScaleFactor()),csfConfig));
			}
			return;
		case "contentSpecify":
			csfConfig = this.getCSFConfig(pScale,csf);
			if(csfConfig == null) {
				return;
			}
			if(csfConfig.get_atlas() == null && this._gafgfxData.createTextures(pScale,csf)) {
				csfConfig.set_atlas(com_github_haxePixiGAF_data_config_CTextureAtlas.createFromTextures(this._gafgfxData.getTextures(pScale,csf),csfConfig));
			}
			return;
		}
	}
	,unloadFromVideoMemory: function(content,pScale,csf) {
		if(content == null) {
			content = "contentDefault";
		}
		if(this._config.get_textureAtlas() == null || this._config.get_textureAtlas().get_contentScaleFactor().get_elements() == null) {
			return;
		}
		var csfConfig;
		switch(content) {
		case "contentAll":
			this._gafgfxData.disposeTextures();
			this._config.dispose();
			return;
		case "contentDefault":
			this._gafgfxData.disposeTextures(pScale,this.get_contentScaleFactor());
			this._config.get_textureAtlas().get_contentScaleFactor().dispose();
			return;
		case "contentSpecify":
			csfConfig = this.getCSFConfig(pScale,csf);
			if(csfConfig != null) {
				this._gafgfxData.disposeTextures(pScale,csf);
				csfConfig.dispose();
			}
			return;
		}
	}
	,startSound: function(frame) {
	}
	,getCSFConfig: function(scale,csf) {
		var scaleConfig = this._config.getTextureAtlasForScale(scale);
		if(scaleConfig != null) {
			var csfConfig = scaleConfig.getTextureAtlasForCSF(csf);
			if(csfConfig != null) {
				return csfConfig;
			} else {
				return null;
			}
		} else {
			return null;
		}
	}
	,get_id: function() {
		return this.get_config().get_id();
	}
	,get_linkage: function() {
		return this.get_config().get_linkage();
	}
	,get_assetID: function() {
		return this.get_config().get_assetID();
	}
	,get_textureAtlas: function() {
		if(this._config.get_textureAtlas() == null) {
			return null;
		}
		if(this._config.get_textureAtlas().get_contentScaleFactor().get_atlas() == null) {
			this.loadInVideoMemory("contentDefault");
		}
		return this._config.get_textureAtlas().get_contentScaleFactor().get_atlas();
	}
	,get_config: function() {
		return this._config;
	}
	,set_scale: function(value) {
		var scale = this._gafAsset.getValidScale(value);
		if(isNaN(scale)) {
			throw new js__$Boot_HaxeError(" scale was not found in GAF config");
		} else {
			this._gafAsset.set_scale(scale);
		}
		if(this._config.get_textureAtlas() == null) {
			return null;
		}
		var csf = this.get_contentScaleFactor();
		var taScale = this._config.getTextureAtlasForScale(scale);
		if(taScale != null) {
			this._config.set_textureAtlas(taScale);
			var taCSF = this._config.get_textureAtlas().getTextureAtlasForCSF(csf);
			if(taCSF != null) {
				this._config.get_textureAtlas().set_contentScaleFactor(taCSF);
			} else {
				throw new js__$Boot_HaxeError("There is no csf " + csf + "in timeline config for scalse " + scale);
			}
		} else {
			throw new js__$Boot_HaxeError("There is no scale " + scale + "in timeline config");
		}
		return this._gafAsset.get_scale();
	}
	,get_scale: function() {
		return this._gafAsset.get_scale();
	}
	,set_contentScaleFactor: function(csf) {
		if(this._gafAsset.hasCSF(csf)) {
			this._gafAsset.set_csf(csf);
		}
		if(this._config.get_textureAtlas() == null) {
			return null;
		}
		var taCSF = this._config.get_textureAtlas().getTextureAtlasForCSF(csf);
		if(taCSF != null) {
			this._config.get_textureAtlas().set_contentScaleFactor(taCSF);
		} else {
			throw new js__$Boot_HaxeError("There is no csf " + csf + "in timeline config");
		}
		return this._gafAsset.get_csf();
	}
	,get_contentScaleFactor: function() {
		return this._gafAsset.get_csf();
	}
	,set_gafgfxData: function(gafgfxData) {
		return this._gafgfxData = gafgfxData;
	}
	,get_gafgfxData: function() {
		return this._gafgfxData;
	}
	,get_gafAsset: function() {
		return this._gafAsset;
	}
	,set_gafAsset: function(asset) {
		return this._gafAsset = asset;
	}
	,get_gafSoundData: function() {
		return this._gafSoundData;
	}
	,set_gafSoundData: function(gafSoundData) {
		return this._gafSoundData = gafSoundData;
	}
	,__class__: com_github_haxePixiGAF_data_GAFTimeline
};
var com_github_haxePixiGAF_data_GAFTimelineConfig = function(version) {
	this._disposed = false;
	this._framesCount = 0;
	this._version = version;
	this._animationConfigFrames = new com_github_haxePixiGAF_data_config_CAnimationFrames();
	this._animationObjects = new com_github_haxePixiGAF_data_config_CAnimationObjects();
	this._animationSequences = new com_github_haxePixiGAF_data_config_CAnimationSequences();
	this._textFields = new com_github_haxePixiGAF_data_config_CTextFieldObjects();
};
com_github_haxePixiGAF_data_GAFTimelineConfig.__name__ = ["com","github","haxePixiGAF","data","GAFTimelineConfig"];
com_github_haxePixiGAF_data_GAFTimelineConfig.prototype = {
	dispose: function() {
		var _g = 0;
		var _g1 = this._allTextureAtlases;
		while(_g < _g1.length) {
			var cTextureAtlasScale = _g1[_g];
			++_g;
			cTextureAtlasScale.dispose();
		}
		this._allTextureAtlases = null;
		this._animationConfigFrames = null;
		this._animationSequences = null;
		this._animationObjects = null;
		this._textureAtlas = null;
		this._textFields = null;
		this._namedParts = null;
		this._warnings = null;
		this._bounds = null;
		this._pivot = null;
		this._disposed = true;
	}
	,getTextureAtlasForScale: function(scale) {
		var _g = 0;
		var _g1 = this._allTextureAtlases;
		while(_g < _g1.length) {
			var cTextureAtlas = _g1[_g];
			++_g;
			var a = cTextureAtlas.get_scale();
			if(isNaN(a) || isNaN(scale)?false:Math.abs(a - scale) < 0.00001) {
				return cTextureAtlas;
			}
		}
		return null;
	}
	,addWarning: function(text) {
		if(text == null) {
			return;
		}
		if(this._warnings == null) {
			this._warnings = [];
		}
		if(this._warnings.indexOf(text) == -1) {
			haxe_Log.trace(text,{ fileName : "GAFTimelineConfig.hx", lineNumber : 138, className : "com.github.haxePixiGAF.data.GAFTimelineConfig", methodName : "addWarning"});
			this._warnings.push(text);
		}
	}
	,getNamedPartID: function(name) {
		var _this = this._namedParts;
		var tmp = new haxe_ds__$StringMap_StringMapIterator(_this,_this.arrayKeys());
		while(tmp.hasNext()) {
			var id = tmp.next();
			var _this1 = this._namedParts;
			if((__map_reserved[id] != null?_this1.getReserved(id):_this1.h[id]) == name) {
				return id;
			}
		}
		return null;
	}
	,get_textureAtlas: function() {
		return this._textureAtlas;
	}
	,set_textureAtlas: function(textureAtlas) {
		return this._textureAtlas = textureAtlas;
	}
	,get_animationObjects: function() {
		return this._animationObjects;
	}
	,set_animationObjects: function(animationObjects) {
		return this._animationObjects = animationObjects;
	}
	,get_animationConfigFrames: function() {
		return this._animationConfigFrames;
	}
	,set_animationConfigFrames: function(animationConfigFrames) {
		return this._animationConfigFrames = animationConfigFrames;
	}
	,get_animationSequences: function() {
		return this._animationSequences;
	}
	,set_animationSequences: function(animationSequences) {
		return this._animationSequences = animationSequences;
	}
	,get_textFields: function() {
		return this._textFields;
	}
	,set_textFields: function(textFields) {
		return this._textFields = textFields;
	}
	,get_allTextureAtlases: function() {
		return this._allTextureAtlases;
	}
	,set_allTextureAtlases: function(allTextureAtlases) {
		return this._allTextureAtlases = allTextureAtlases;
	}
	,get_version: function() {
		return this._version;
	}
	,get_debugRegions: function() {
		return this._debugRegions;
	}
	,set_debugRegions: function(debugRegions) {
		return this._debugRegions = debugRegions;
	}
	,get_warnings: function() {
		return this._warnings;
	}
	,get_id: function() {
		return this._id;
	}
	,set_id: function(value) {
		return this._id = value;
	}
	,get_assetID: function() {
		return this._assetID;
	}
	,set_assetID: function(value) {
		return this._assetID = value;
	}
	,get_namedParts: function() {
		return this._namedParts;
	}
	,set_namedParts: function(value) {
		return this._namedParts = value;
	}
	,get_linkage: function() {
		return this._linkage;
	}
	,set_linkage: function(value) {
		return this._linkage = value;
	}
	,get_stageConfig: function() {
		return this._stageConfig;
	}
	,set_stageConfig: function(stageConfig) {
		return this._stageConfig = stageConfig;
	}
	,get_framesCount: function() {
		return this._framesCount;
	}
	,set_framesCount: function(value) {
		return this._framesCount = value;
	}
	,get_bounds: function() {
		return this._bounds;
	}
	,set_bounds: function(value) {
		return this._bounds = value;
	}
	,get_pivot: function() {
		return this._pivot;
	}
	,set_pivot: function(value) {
		return this._pivot = value;
	}
	,get_disposed: function() {
		return this._disposed;
	}
	,__class__: com_github_haxePixiGAF_data_GAFTimelineConfig
};
var com_github_haxePixiGAF_data_config_CAnimationFrame = function(frameNumber) {
	this._frameNumber = 0;
	this._frameNumber = frameNumber;
	this._instancesDictionary = new haxe_ds_StringMap();
	this._instances = [];
};
com_github_haxePixiGAF_data_config_CAnimationFrame.__name__ = ["com","github","haxePixiGAF","data","config","CAnimationFrame"];
com_github_haxePixiGAF_data_config_CAnimationFrame.prototype = {
	clone: function(frameNumber) {
		var result = new com_github_haxePixiGAF_data_config_CAnimationFrame(frameNumber);
		var _g = 0;
		var _g1 = this._instances;
		while(_g < _g1.length) {
			var instance = _g1[_g];
			++_g;
			result.addInstance(instance);
		}
		return result;
	}
	,addInstance: function(instance) {
		var key = instance.get_id();
		var _this = this._instancesDictionary;
		if((__map_reserved[key] != null?_this.getReserved(key):_this.h[key]) != null) {
			if(instance.get_alpha() != null) {
				var key1 = instance.get_id();
				var _this1 = this._instancesDictionary;
				this._instances[this._instances.indexOf(__map_reserved[key1] != null?_this1.getReserved(key1):_this1.h[key1])] = instance;
				var k = instance.get_id();
				var _this2 = this._instancesDictionary;
				if(__map_reserved[k] != null) {
					_this2.setReserved(k,instance);
				} else {
					_this2.h[k] = instance;
				}
			} else {
				var key2 = instance.get_id();
				var _this3 = this._instancesDictionary;
				var index = this._instances.indexOf(__map_reserved[key2] != null?_this3.getReserved(key2):_this3.h[key2]);
				if(index == this._instances.length - 1) {
					this._instances.pop();
				} else {
					this._instances[index] = this._instances.pop();
				}
				this._instancesDictionary.remove(instance.get_id());
			}
		} else {
			this._instances.push(instance);
			var k1 = instance.get_id();
			var _this4 = this._instancesDictionary;
			if(__map_reserved[k1] != null) {
				_this4.setReserved(k1,instance);
			} else {
				_this4.h[k1] = instance;
			}
		}
	}
	,addAction: function(action) {
		if(this._actions == null) {
			this._actions = [];
		}
		this._actions.push(action);
	}
	,sortInstances: function() {
		this._instances.sort($bind(this,this.sortByZIndex));
	}
	,getInstanceByID: function(id) {
		var _this = this._instancesDictionary;
		return __map_reserved[id] != null?_this.getReserved(id):_this.h[id];
	}
	,sortByZIndex: function(instance1,instance2) {
		if(instance1.get_zIndex() < instance2.get_zIndex()) {
			return -1;
		} else if(instance1.get_zIndex() > instance2.get_zIndex()) {
			return 1;
		} else {
			return 0;
		}
	}
	,get_instances: function() {
		return this._instances;
	}
	,get_frameNumber: function() {
		return this._frameNumber;
	}
	,get_actions: function() {
		return this._actions;
	}
	,__class__: com_github_haxePixiGAF_data_config_CAnimationFrame
};
var com_github_haxePixiGAF_data_config_CAnimationFrameInstance = function(id) {
	this._zIndex = 0;
	this._id = id;
};
com_github_haxePixiGAF_data_config_CAnimationFrameInstance.__name__ = ["com","github","haxePixiGAF","data","config","CAnimationFrameInstance"];
com_github_haxePixiGAF_data_config_CAnimationFrameInstance.prototype = {
	clone: function() {
		var result = new com_github_haxePixiGAF_data_config_CAnimationFrameInstance(this._id);
		var filterCopy = null;
		if(this._filter != null) {
			filterCopy = this._filter.clone();
		}
		result.update(this._zIndex,this._matrix.clone(),this._alpha,this._maskID,filterCopy);
		return result;
	}
	,update: function(zIndex,matrix,alpha,maskID,filter) {
		this._zIndex = zIndex;
		this._matrix = matrix;
		this._alpha = alpha;
		this._maskID = maskID;
		this._filter = filter;
	}
	,getTransformMatrix: function(pivotMatrix,scale) {
		var result = pivotMatrix.clone();
		com_github_haxePixiGAF_data_config_CAnimationFrameInstance.tx = this._matrix.tx;
		com_github_haxePixiGAF_data_config_CAnimationFrameInstance.ty = this._matrix.ty;
		this._matrix.tx *= scale;
		this._matrix.ty *= scale;
		com_github_haxePixiGAF_utils_MatrixUtility.concat(result,this._matrix);
		this._matrix.tx = com_github_haxePixiGAF_data_config_CAnimationFrameInstance.tx;
		this._matrix.ty = com_github_haxePixiGAF_data_config_CAnimationFrameInstance.ty;
		return result;
	}
	,applyTransformMatrix: function(transformationMatrix,pivotMatrix,scale) {
		com_github_haxePixiGAF_utils_MatrixUtility.copyFrom(transformationMatrix,pivotMatrix);
		com_github_haxePixiGAF_data_config_CAnimationFrameInstance.tx = this._matrix.tx;
		com_github_haxePixiGAF_data_config_CAnimationFrameInstance.ty = this._matrix.ty;
		this._matrix.tx *= scale;
		this._matrix.ty *= scale;
		com_github_haxePixiGAF_utils_MatrixUtility.concat(transformationMatrix,this._matrix);
		this._matrix.tx = com_github_haxePixiGAF_data_config_CAnimationFrameInstance.tx;
		this._matrix.ty = com_github_haxePixiGAF_data_config_CAnimationFrameInstance.ty;
	}
	,calculateTransformMatrix: function(transformationMatrix,pivotMatrix,scale) {
		this.applyTransformMatrix(transformationMatrix,pivotMatrix,scale);
		return transformationMatrix;
	}
	,get_id: function() {
		return this._id;
	}
	,get_matrix: function() {
		return this._matrix;
	}
	,get_alpha: function() {
		return this._alpha;
	}
	,get_maskID: function() {
		return this._maskID;
	}
	,get_filter: function() {
		return this._filter;
	}
	,get_zIndex: function() {
		return this._zIndex;
	}
	,__class__: com_github_haxePixiGAF_data_config_CAnimationFrameInstance
};
var com_github_haxePixiGAF_data_config_CAnimationFrames = function() {
	this._frames = [];
};
com_github_haxePixiGAF_data_config_CAnimationFrames.__name__ = ["com","github","haxePixiGAF","data","config","CAnimationFrames"];
com_github_haxePixiGAF_data_config_CAnimationFrames.prototype = {
	addFrame: function(frame) {
		this._frames.push(frame);
	}
	,get_frames: function() {
		return this._frames;
	}
	,__class__: com_github_haxePixiGAF_data_config_CAnimationFrames
};
var com_github_haxePixiGAF_data_config_CAnimationObject = function(instanceID,regionID,type,mask) {
	this._mask = false;
	this._instanceID = instanceID;
	this._regionID = regionID;
	this._type = type;
	this._mask = mask;
};
com_github_haxePixiGAF_data_config_CAnimationObject.__name__ = ["com","github","haxePixiGAF","data","config","CAnimationObject"];
com_github_haxePixiGAF_data_config_CAnimationObject.prototype = {
	get_instanceID: function() {
		return this._instanceID;
	}
	,get_regionID: function() {
		return this._regionID;
	}
	,get_mask: function() {
		return this._mask;
	}
	,get_type: function() {
		return this._type;
	}
	,get_maxSize: function() {
		return this._maxSize;
	}
	,set_maxSize: function(value) {
		return this._maxSize = value;
	}
	,__class__: com_github_haxePixiGAF_data_config_CAnimationObject
};
var com_github_haxePixiGAF_data_config_CAnimationObjects = function() {
	this._animationObjectsDictionary = new haxe_ds_StringMap();
};
com_github_haxePixiGAF_data_config_CAnimationObjects.__name__ = ["com","github","haxePixiGAF","data","config","CAnimationObjects"];
com_github_haxePixiGAF_data_config_CAnimationObjects.prototype = {
	addAnimationObject: function(animationObject) {
		var key = animationObject.get_instanceID();
		var _this = this._animationObjectsDictionary;
		if((__map_reserved[key] != null?_this.getReserved(key):_this.h[key]) == null) {
			var k = animationObject.get_instanceID();
			var _this1 = this._animationObjectsDictionary;
			if(__map_reserved[k] != null) {
				_this1.setReserved(k,animationObject);
			} else {
				_this1.h[k] = animationObject;
			}
		}
	}
	,getAnimationObject: function(instanceID) {
		var _this = this._animationObjectsDictionary;
		if((__map_reserved[instanceID] != null?_this.getReserved(instanceID):_this.h[instanceID]) != null) {
			var _this1 = this._animationObjectsDictionary;
			return __map_reserved[instanceID] != null?_this1.getReserved(instanceID):_this1.h[instanceID];
		} else {
			return null;
		}
	}
	,get_animationObjectsDictionary: function() {
		return this._animationObjectsDictionary;
	}
	,__class__: com_github_haxePixiGAF_data_config_CAnimationObjects
};
var com_github_haxePixiGAF_data_config_CAnimationSequence = function(id,startFrameNo,endFrameNo) {
	this._endFrameNo = 0;
	this._startFrameNo = 0;
	this._id = id;
	this._startFrameNo = startFrameNo;
	this._endFrameNo = endFrameNo;
};
com_github_haxePixiGAF_data_config_CAnimationSequence.__name__ = ["com","github","haxePixiGAF","data","config","CAnimationSequence"];
com_github_haxePixiGAF_data_config_CAnimationSequence.prototype = {
	isSequenceFrame: function(frameNo) {
		if(frameNo >= this._startFrameNo && frameNo <= this._endFrameNo) {
			return true;
		} else {
			return false;
		}
	}
	,get_id: function() {
		return this._id;
	}
	,get_startFrameNo: function() {
		return this._startFrameNo;
	}
	,get_endFrameNo: function() {
		return this._endFrameNo;
	}
	,__class__: com_github_haxePixiGAF_data_config_CAnimationSequence
};
var com_github_haxePixiGAF_data_config_CAnimationSequences = function() {
	this._sequences = [];
	this._sequencesStartDictionary = { };
	this._sequencesEndDictionary = { };
};
com_github_haxePixiGAF_data_config_CAnimationSequences.__name__ = ["com","github","haxePixiGAF","data","config","CAnimationSequences"];
com_github_haxePixiGAF_data_config_CAnimationSequences.prototype = {
	addSequence: function(sequence) {
		this._sequences.push(sequence);
		if(!this._sequencesStartDictionary[sequence.get_startFrameNo()]) {
			this._sequencesStartDictionary[sequence.get_startFrameNo()] = sequence;
		}
		if(!this._sequencesEndDictionary[sequence.get_endFrameNo()]) {
			this._sequencesEndDictionary[sequence.get_endFrameNo()] = sequence;
		}
	}
	,getSequenceStart: function(frameNo) {
		return this._sequencesStartDictionary[frameNo];
	}
	,getSequenceEnd: function(frameNo) {
		return this._sequencesEndDictionary[frameNo];
	}
	,getStartFrameNo: function(sequenceID) {
		var _g = 0;
		var _g1 = this._sequences;
		while(_g < _g1.length) {
			var sequence = _g1[_g];
			++_g;
			if(sequence.get_id() == sequenceID) {
				return sequence.get_startFrameNo();
			}
		}
		return 0;
	}
	,getSequenceByID: function(id) {
		var _g = 0;
		var _g1 = this._sequences;
		while(_g < _g1.length) {
			var sequence = _g1[_g];
			++_g;
			if(sequence.get_id() == id) {
				return sequence;
			}
		}
		return null;
	}
	,getSequenceByFrame: function(frameNo) {
		var _g1 = 0;
		var _g = this._sequences.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this._sequences[i].isSequenceFrame(frameNo)) {
				return this._sequences[i];
			}
		}
		return null;
	}
	,get_sequences: function() {
		return this._sequences;
	}
	,__class__: com_github_haxePixiGAF_data_config_CAnimationSequences
};
var com_github_haxePixiGAF_data_config_ICFilterData = function() { };
com_github_haxePixiGAF_data_config_ICFilterData.__name__ = ["com","github","haxePixiGAF","data","config","ICFilterData"];
com_github_haxePixiGAF_data_config_ICFilterData.prototype = {
	__class__: com_github_haxePixiGAF_data_config_ICFilterData
};
var com_github_haxePixiGAF_data_config_CBlurFilterData = function() {
	this.resolution = 1;
	this.knockout = false;
	this.inner = false;
	this.alpha = 1;
	this.strength = 0;
	this.distance = 0;
	this.angle = 0;
	this.color = 0;
};
com_github_haxePixiGAF_data_config_CBlurFilterData.__name__ = ["com","github","haxePixiGAF","data","config","CBlurFilterData"];
com_github_haxePixiGAF_data_config_CBlurFilterData.__interfaces__ = [com_github_haxePixiGAF_data_config_ICFilterData];
com_github_haxePixiGAF_data_config_CBlurFilterData.prototype = {
	clone: function() {
		var copy = new com_github_haxePixiGAF_data_config_CBlurFilterData();
		copy.blurX = this.blurX;
		copy.blurY = this.blurY;
		copy.color = this.color;
		copy.angle = this.angle;
		copy.distance = this.distance;
		copy.strength = this.strength;
		copy.alpha = this.alpha;
		copy.inner = this.inner;
		copy.knockout = this.knockout;
		copy.resolution = this.resolution;
		return copy;
	}
	,__class__: com_github_haxePixiGAF_data_config_CBlurFilterData
};
var com_github_haxePixiGAF_data_config_CColorMatrixFilterData = function() {
	this.matrix = [];
};
com_github_haxePixiGAF_data_config_CColorMatrixFilterData.__name__ = ["com","github","haxePixiGAF","data","config","CColorMatrixFilterData"];
com_github_haxePixiGAF_data_config_CColorMatrixFilterData.__interfaces__ = [com_github_haxePixiGAF_data_config_ICFilterData];
com_github_haxePixiGAF_data_config_CColorMatrixFilterData.prototype = {
	clone: function() {
		var copy = new com_github_haxePixiGAF_data_config_CColorMatrixFilterData();
		var source = copy.matrix;
		var dest = this.matrix;
		var l = dest.length;
		var _g1 = 0;
		while(_g1 < l) {
			var i = _g1++;
			source[i] = dest[i];
		}
		return copy;
	}
	,__class__: com_github_haxePixiGAF_data_config_CColorMatrixFilterData
};
var com_github_haxePixiGAF_data_config_CFilter = function() {
	this._filterConfigs = [];
};
com_github_haxePixiGAF_data_config_CFilter.__name__ = ["com","github","haxePixiGAF","data","config","CFilter"];
com_github_haxePixiGAF_data_config_CFilter.prototype = {
	clone: function() {
		var result = new com_github_haxePixiGAF_data_config_CFilter();
		var _g = 0;
		var _g1 = this._filterConfigs;
		while(_g < _g1.length) {
			var filterData = _g1[_g];
			++_g;
			var tmp = filterData.clone();
			result.get_filterConfigs().push(tmp);
		}
		return result;
	}
	,addBlurFilter: function(blurX,blurY) {
		var filterData = new com_github_haxePixiGAF_data_config_CBlurFilterData();
		filterData.blurX = blurX;
		filterData.blurY = blurY;
		filterData.color = -1;
		this._filterConfigs.push(filterData);
		return "";
	}
	,addGlowFilter: function(blurX,blurY,color,alpha,strength,inner,knockout) {
		if(knockout == null) {
			knockout = false;
		}
		if(inner == null) {
			inner = false;
		}
		if(strength == null) {
			strength = 1;
		}
		var filterData = new com_github_haxePixiGAF_data_config_CBlurFilterData();
		filterData.blurX = blurX;
		filterData.blurY = blurY;
		filterData.color = color;
		filterData.alpha = alpha;
		filterData.strength = strength;
		filterData.inner = inner;
		filterData.knockout = knockout;
		this._filterConfigs.push(filterData);
		return "";
	}
	,addDropShadowFilter: function(blurX,blurY,color,alpha,angle,distance,strength,inner,knockout) {
		if(knockout == null) {
			knockout = false;
		}
		if(inner == null) {
			inner = false;
		}
		if(strength == null) {
			strength = 1;
		}
		var filterData = new com_github_haxePixiGAF_data_config_CBlurFilterData();
		filterData.blurX = blurX;
		filterData.blurY = blurY;
		filterData.color = color;
		filterData.alpha = alpha;
		filterData.angle = angle;
		filterData.distance = distance;
		filterData.strength = strength;
		filterData.inner = inner;
		filterData.knockout = knockout;
		this._filterConfigs.push(filterData);
		return "";
	}
	,addColorTransform: function(params) {
		if(this.getColorMatrixFilter() != null) {
			return;
		}
		var filterData = new com_github_haxePixiGAF_data_config_CColorMatrixFilterData();
		var v = filterData.matrix;
		v[0] = params[1];
		v[1] = 0;
		v[2] = 0;
		v[3] = 0;
		v[4] = params[2];
		v[5] = 0;
		v[6] = params[3];
		v[7] = 0;
		v[8] = 0;
		v[9] = params[4];
		v[10] = 0;
		v[11] = 0;
		v[12] = params[5];
		v[13] = 0;
		v[14] = params[6];
		v[15] = 0;
		v[16] = 0;
		v[17] = 0;
		v[18] = 1;
		v[19] = 0;
		this._filterConfigs.push(filterData);
	}
	,addColorMatrixFilter: function(params) {
		var _g1 = 0;
		var _g = params.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(i % 5 == 4) {
				params[i] = params[i] / 255;
			}
		}
		var colorMatrixFilterConfig = new com_github_haxePixiGAF_data_config_CColorMatrixFilterData();
		var source = colorMatrixFilterConfig.matrix;
		var l = params.length;
		var _g11 = 0;
		while(_g11 < l) {
			var i1 = _g11++;
			source[i1] = params[i1];
		}
		this._filterConfigs.push(colorMatrixFilterConfig);
		return "";
	}
	,getBlurFilter: function() {
		var _g = 0;
		var _g1 = this._filterConfigs;
		while(_g < _g1.length) {
			var filterConfig = _g1[_g];
			++_g;
			if(js_Boot.__instanceof(filterConfig,com_github_haxePixiGAF_data_config_CBlurFilterData)) {
				return js_Boot.__cast(filterConfig , com_github_haxePixiGAF_data_config_CBlurFilterData);
			}
		}
		return null;
	}
	,getColorMatrixFilter: function() {
		var _g = 0;
		var _g1 = this._filterConfigs;
		while(_g < _g1.length) {
			var filterConfig = _g1[_g];
			++_g;
			if(js_Boot.__instanceof(filterConfig,com_github_haxePixiGAF_data_config_CColorMatrixFilterData)) {
				return js_Boot.__cast(filterConfig , com_github_haxePixiGAF_data_config_CColorMatrixFilterData);
			}
		}
		return null;
	}
	,get_filterConfigs: function() {
		return this._filterConfigs;
	}
	,__class__: com_github_haxePixiGAF_data_config_CFilter
};
var com_github_haxePixiGAF_data_config_CFrameAction = function() {
	this.params = [];
	this.type = 0;
};
com_github_haxePixiGAF_data_config_CFrameAction.__name__ = ["com","github","haxePixiGAF","data","config","CFrameAction"];
com_github_haxePixiGAF_data_config_CFrameAction.prototype = {
	__class__: com_github_haxePixiGAF_data_config_CFrameAction
};
var com_github_haxePixiGAF_data_config_CSound = function() {
	this.stereo = false;
	this.sampleCount = 0;
	this.sampleSize = 0;
	this.rate = 0;
	this.format = 0;
	this.soundID = 0;
};
com_github_haxePixiGAF_data_config_CSound.__name__ = ["com","github","haxePixiGAF","data","config","CSound"];
com_github_haxePixiGAF_data_config_CSound.prototype = {
	__class__: com_github_haxePixiGAF_data_config_CSound
};
var com_github_haxePixiGAF_data_config_CStage = function() {
	this.height = 0;
	this.width = 0;
	this.color = 0;
	this.fps = 0;
};
com_github_haxePixiGAF_data_config_CStage.__name__ = ["com","github","haxePixiGAF","data","config","CStage"];
com_github_haxePixiGAF_data_config_CStage.prototype = {
	clone: function(source) {
		this.fps = source.fps;
		this.color = source.color;
		this.width = source.width;
		this.height = source.height;
		return this;
	}
	,__class__: com_github_haxePixiGAF_data_config_CStage
};
var com_github_haxePixiGAF_data_config_CTextFieldObject = function(id,text,textFormat,width,height) {
	this._maxChars = 0;
	this._displayAsPassword = false;
	this._selectable = false;
	this._editable = false;
	this._wordWrap = false;
	this._multiline = false;
	this._embedFonts = false;
	this._id = id;
	this._text = text;
	this._textFormat = textFormat;
	this._width = width;
	this._height = height;
	this._pivotPoint = new PIXI.Point();
};
com_github_haxePixiGAF_data_config_CTextFieldObject.__name__ = ["com","github","haxePixiGAF","data","config","CTextFieldObject"];
com_github_haxePixiGAF_data_config_CTextFieldObject.prototype = {
	get_id: function() {
		return this._id;
	}
	,set_id: function(value) {
		return this._id = value;
	}
	,get_text: function() {
		return this._text;
	}
	,set_text: function(value) {
		return this._text = value;
	}
	,get_textFormat: function() {
		return this._textFormat;
	}
	,set_textFormat: function(value) {
		return this._textFormat = value;
	}
	,get_width: function() {
		return this._width;
	}
	,set_width: function(value) {
		return this._width = value;
	}
	,get_height: function() {
		return this._height;
	}
	,set_height: function(value) {
		return this._height = value;
	}
	,get_embedFonts: function() {
		return this._embedFonts;
	}
	,set_embedFonts: function(value) {
		return this._embedFonts = value;
	}
	,get_multiline: function() {
		return this._multiline;
	}
	,set_multiline: function(value) {
		return this._multiline = value;
	}
	,get_wordWrap: function() {
		return this._wordWrap;
	}
	,set_wordWrap: function(value) {
		return this._wordWrap = value;
	}
	,get_restrict: function() {
		return this._restrict;
	}
	,set_restrict: function(value) {
		return this._restrict = value;
	}
	,get_editable: function() {
		return this._editable;
	}
	,set_editable: function(value) {
		return this._editable = value;
	}
	,get_selectable: function() {
		return this._selectable;
	}
	,set_selectable: function(value) {
		return this._selectable = value;
	}
	,get_displayAsPassword: function() {
		return this._displayAsPassword;
	}
	,set_displayAsPassword: function(value) {
		return this._displayAsPassword = value;
	}
	,get_maxChars: function() {
		return this._maxChars;
	}
	,set_maxChars: function(value) {
		return this._maxChars = value;
	}
	,get_pivotPoint: function() {
		return this._pivotPoint;
	}
	,set_pivotPoint: function(value) {
		return this._pivotPoint = value;
	}
	,__class__: com_github_haxePixiGAF_data_config_CTextFieldObject
};
var com_github_haxePixiGAF_data_config_CTextFieldObjects = function() {
	this._textFieldObjectsDictionary = new haxe_ds_StringMap();
};
com_github_haxePixiGAF_data_config_CTextFieldObjects.__name__ = ["com","github","haxePixiGAF","data","config","CTextFieldObjects"];
com_github_haxePixiGAF_data_config_CTextFieldObjects.prototype = {
	addTextFieldObject: function(textFieldObject) {
		var key = textFieldObject.get_id();
		var _this = this._textFieldObjectsDictionary;
		if((__map_reserved[key] != null?_this.getReserved(key):_this.h[key]) == null) {
			var k = textFieldObject.get_id();
			var _this1 = this._textFieldObjectsDictionary;
			if(__map_reserved[k] != null) {
				_this1.setReserved(k,textFieldObject);
			} else {
				_this1.h[k] = textFieldObject;
			}
		}
	}
	,getAnimationObject: function(id) {
		var _this = this._textFieldObjectsDictionary;
		if((__map_reserved[id] != null?_this.getReserved(id):_this.h[id]) != null) {
			var _this1 = this._textFieldObjectsDictionary;
			return js_Boot.__cast(__map_reserved[id] != null?_this1.getReserved(id):_this1.h[id] , com_github_haxePixiGAF_data_config_CAnimationObject);
		} else {
			return null;
		}
	}
	,get_textFieldObjectsDictionary: function() {
		return this._textFieldObjectsDictionary;
	}
	,__class__: com_github_haxePixiGAF_data_config_CTextFieldObjects
};
var com_github_haxePixiGAF_data_config_CTextureAtlas = function(textureAtlasesDictionary,textureAtlasConfig) {
	this._textureAtlasesDictionary = textureAtlasesDictionary;
	this._textureAtlasConfig = textureAtlasConfig;
};
com_github_haxePixiGAF_data_config_CTextureAtlas.__name__ = ["com","github","haxePixiGAF","data","config","CTextureAtlas"];
com_github_haxePixiGAF_data_config_CTextureAtlas.createFromTextures = function(texturesDictionary,textureAtlasConfig) {
	var atlasesDictionary = new haxe_ds_StringMap();
	var atlas;
	var _g = 0;
	var _g1 = textureAtlasConfig.get_elements().get_elementsVector();
	while(_g < _g1.length) {
		var element = _g1[_g];
		++_g;
		var key = element.get_atlasID();
		if((__map_reserved[key] != null?atlasesDictionary.getReserved(key):atlasesDictionary.h[key]) == null) {
			var k = element.get_atlasID();
			var key1 = element.get_atlasID();
			var v = new com_github_haxePixiGAF_data_textures_TextureAtlas(__map_reserved[key1] != null?texturesDictionary.getReserved(key1):texturesDictionary.h[key1]);
			if(__map_reserved[k] != null) {
				atlasesDictionary.setReserved(k,v);
			} else {
				atlasesDictionary.h[k] = v;
			}
		}
		var key2 = element.get_atlasID();
		atlas = __map_reserved[key2] != null?atlasesDictionary.getReserved(key2):atlasesDictionary.h[key2];
		atlas.addRegion(element.get_id(),element.get_region(),null,element.get_rotated());
	}
	return new com_github_haxePixiGAF_data_config_CTextureAtlas(atlasesDictionary,textureAtlasConfig);
};
com_github_haxePixiGAF_data_config_CTextureAtlas.prototype = {
	dispose: function() {
		var _this = this._textureAtlasesDictionary;
		var tmp = new haxe_ds__$StringMap_StringMapIterator(_this,_this.arrayKeys());
		while(tmp.hasNext()) tmp.next().dispose();
	}
	,getTexture: function(id) {
		var textureAtlasElement = this._textureAtlasConfig.get_elements().getElement(id);
		if(textureAtlasElement != null) {
			var texture = this.getTextureByIDAndAtlasID(id,textureAtlasElement.get_atlasID());
			var pivotMatrix = this._textureAtlasConfig.get_elements().getElement(id) != null?this._textureAtlasConfig.get_elements().getElement(id).get_pivotMatrix():new PIXI.Matrix();
			if(textureAtlasElement.get_scale9Grid() != null) {
				return new com_github_haxePixiGAF_display_GAFScale9Texture(id,texture,pivotMatrix,textureAtlasElement.get_scale9Grid());
			} else {
				return new com_github_haxePixiGAF_display_GAFTexture(id,texture,pivotMatrix);
			}
		}
		return null;
	}
	,getTextureByIDAndAtlasID: function(id,atlasID) {
		var _this = this._textureAtlasesDictionary;
		return (__map_reserved[atlasID] != null?_this.getReserved(atlasID):_this.h[atlasID]).getTexture(id);
	}
	,__class__: com_github_haxePixiGAF_data_config_CTextureAtlas
};
var com_github_haxePixiGAF_data_config_CTextureAtlasCSF = function(csf,scale) {
	this._csf = csf;
	this._scale = scale;
	this._sources = [];
};
com_github_haxePixiGAF_data_config_CTextureAtlasCSF.__name__ = ["com","github","haxePixiGAF","data","config","CTextureAtlasCSF"];
com_github_haxePixiGAF_data_config_CTextureAtlasCSF.prototype = {
	dispose: function() {
		if(this._atlas != null) {
			this._atlas.dispose();
			this._atlas = null;
		}
	}
	,get_csf: function() {
		return this._csf;
	}
	,get_sources: function() {
		return this._sources;
	}
	,set_sources: function(sources) {
		return this._sources = sources;
	}
	,get_atlas: function() {
		return this._atlas;
	}
	,set_atlas: function(atlas) {
		return this._atlas = atlas;
	}
	,get_elements: function() {
		return this._elements;
	}
	,set_elements: function(elements) {
		return this._elements = elements;
	}
	,__class__: com_github_haxePixiGAF_data_config_CTextureAtlasCSF
};
var com_github_haxePixiGAF_data_config_CTextureAtlasElement = function(id,atlasID) {
	this._rotated = false;
	this._id = id;
	this._atlasID = atlasID;
};
com_github_haxePixiGAF_data_config_CTextureAtlasElement.__name__ = ["com","github","haxePixiGAF","data","config","CTextureAtlasElement"];
com_github_haxePixiGAF_data_config_CTextureAtlasElement.prototype = {
	get_id: function() {
		return this._id;
	}
	,get_region: function() {
		return this._region;
	}
	,set_region: function(region) {
		return this._region = region;
	}
	,get_pivotMatrix: function() {
		return this._pivotMatrix;
	}
	,set_pivotMatrix: function(pivotMatrix) {
		return this._pivotMatrix = pivotMatrix;
	}
	,get_atlasID: function() {
		return this._atlasID;
	}
	,get_scale9Grid: function() {
		return this._scale9Grid;
	}
	,set_scale9Grid: function(value) {
		return this._scale9Grid = value;
	}
	,get_linkage: function() {
		return this._linkage;
	}
	,set_linkage: function(value) {
		return this._linkage = value;
	}
	,get_rotated: function() {
		return this._rotated;
	}
	,set_rotated: function(value) {
		return this._rotated = value;
	}
	,__class__: com_github_haxePixiGAF_data_config_CTextureAtlasElement
};
var com_github_haxePixiGAF_data_config_CTextureAtlasElements = function() {
	this._elementsVector = [];
	this._elementsDictionary = new haxe_ds_StringMap();
	this._elementsByLinkage = new haxe_ds_StringMap();
};
com_github_haxePixiGAF_data_config_CTextureAtlasElements.__name__ = ["com","github","haxePixiGAF","data","config","CTextureAtlasElements"];
com_github_haxePixiGAF_data_config_CTextureAtlasElements.prototype = {
	addElement: function(element) {
		var key = element.get_id();
		var _this = this._elementsDictionary;
		if((__map_reserved[key] != null?_this.getReserved(key):_this.h[key]) == null) {
			var k = element.get_id();
			var _this1 = this._elementsDictionary;
			if(__map_reserved[k] != null) {
				_this1.setReserved(k,element);
			} else {
				_this1.h[k] = element;
			}
			this._elementsVector.push(element);
			if(element.get_linkage() != null) {
				var k1 = element.get_linkage();
				var _this2 = this._elementsByLinkage;
				if(__map_reserved[k1] != null) {
					_this2.setReserved(k1,element);
				} else {
					_this2.h[k1] = element;
				}
			}
		}
	}
	,getElement: function(id) {
		var _this = this._elementsDictionary;
		if((__map_reserved[id] != null?_this.getReserved(id):_this.h[id]) != null) {
			var _this1 = this._elementsDictionary;
			return __map_reserved[id] != null?_this1.getReserved(id):_this1.h[id];
		} else {
			return null;
		}
	}
	,getElementByLinkage: function(linkage) {
		var _this = this._elementsByLinkage;
		if((__map_reserved[linkage] != null?_this.getReserved(linkage):_this.h[linkage]) != null) {
			var _this1 = this._elementsByLinkage;
			return __map_reserved[linkage] != null?_this1.getReserved(linkage):_this1.h[linkage];
		} else {
			return null;
		}
	}
	,get_elementsVector: function() {
		return this._elementsVector;
	}
	,__class__: com_github_haxePixiGAF_data_config_CTextureAtlasElements
};
var com_github_haxePixiGAF_data_config_CTextureAtlasScale = function() {
	this._allContentScaleFactors = [];
};
com_github_haxePixiGAF_data_config_CTextureAtlasScale.__name__ = ["com","github","haxePixiGAF","data","config","CTextureAtlasScale"];
com_github_haxePixiGAF_data_config_CTextureAtlasScale.prototype = {
	dispose: function() {
		var _g = 0;
		var _g1 = this._allContentScaleFactors;
		while(_g < _g1.length) {
			var cTextureAtlasCSF = _g1[_g];
			++_g;
			cTextureAtlasCSF.dispose();
		}
	}
	,getTextureAtlasForCSF: function(csf) {
		var _g = 0;
		var _g1 = this._allContentScaleFactors;
		while(_g < _g1.length) {
			var textureAtlas = _g1[_g];
			++_g;
			var a = textureAtlas.get_csf();
			if(isNaN(a) || isNaN(csf)?false:Math.abs(a - csf) < 0.00001) {
				return textureAtlas;
			}
		}
		return null;
	}
	,set_scale: function(scale) {
		return this._scale = scale;
	}
	,get_scale: function() {
		return this._scale;
	}
	,get_allContentScaleFactors: function() {
		return this._allContentScaleFactors;
	}
	,set_allContentScaleFactors: function(value) {
		return this._allContentScaleFactors = value;
	}
	,get_contentScaleFactor: function() {
		return this._contentScaleFactor;
	}
	,set_contentScaleFactor: function(value) {
		return this._contentScaleFactor = value;
	}
	,__class__: com_github_haxePixiGAF_data_config_CTextureAtlasScale
};
var com_github_haxePixiGAF_data_config_CTextureAtlasSource = function(id,source) {
	this._id = id;
	this._source = source;
};
com_github_haxePixiGAF_data_config_CTextureAtlasSource.__name__ = ["com","github","haxePixiGAF","data","config","CTextureAtlasSource"];
com_github_haxePixiGAF_data_config_CTextureAtlasSource.prototype = {
	get_id: function() {
		return this._id;
	}
	,get_source: function() {
		return this._source;
	}
	,__class__: com_github_haxePixiGAF_data_config_CTextureAtlasSource
};
var com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter = function(assetID,bytes) {
	this._ignoreSounds = false;
	this._async = false;
	this._isTimeline = false;
	PIXI.utils.EventEmitter.call(this);
	this._bytes = bytes;
	this._assetID = assetID;
	this._textureElementSizes = [];
};
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.__name__ = ["com","github","haxePixiGAF","data","converters","BinGAFAssetConfigConverter"];
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readAnimationMasks = function(tagID,tagContent,timelineConfig) {
	var length = tagContent.readUnsignedInt();
	var objectID = 0;
	var regionID = 0;
	var type;
	var _g1 = 0;
	while(_g1 < length) {
		++_g1;
		objectID = tagContent.readUnsignedInt();
		regionID = tagContent.readUnsignedInt();
		if(tagID == 2) {
			type = "texture";
		} else {
			type = com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.getAnimationObjectTypeString(tagContent.readUnsignedShort());
		}
		timelineConfig.get_animationObjects().addAnimationObject(new com_github_haxePixiGAF_data_config_CAnimationObject(objectID + "",regionID + "",type,true));
	}
};
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.getAnimationObjectTypeString = function(type) {
	var typeString = "texture";
	switch(type) {
	case 0:
		typeString = "texture";
		break;
	case 1:
		typeString = "textField";
		break;
	case 2:
		typeString = "timeline";
		break;
	}
	return typeString;
};
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readAnimationObjects = function(tagID,tagContent,timelineConfig) {
	var length = tagContent.readUnsignedInt();
	var objectID = 0;
	var regionID = 0;
	var type;
	var _g1 = 0;
	while(_g1 < length) {
		++_g1;
		objectID = tagContent.readUnsignedInt();
		regionID = tagContent.readUnsignedInt();
		if(tagID == 3) {
			type = "texture";
		} else {
			type = com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.getAnimationObjectTypeString(tagContent.readUnsignedShort());
		}
		timelineConfig.get_animationObjects().addAnimationObject(new com_github_haxePixiGAF_data_config_CAnimationObject(objectID + "",regionID + "",type,false));
	}
};
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readAnimationSequences = function(tagContent,timelineConfig) {
	var length = tagContent.readUnsignedInt();
	var sequenceID;
	var startFrameNo;
	var endFrameNo;
	var _g1 = 0;
	while(_g1 < length) {
		++_g1;
		sequenceID = tagContent.readUTF();
		startFrameNo = tagContent.readShort();
		endFrameNo = tagContent.readShort();
		timelineConfig.get_animationSequences().addSequence(new com_github_haxePixiGAF_data_config_CAnimationSequence(sequenceID,startFrameNo,endFrameNo));
	}
};
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readNamedParts = function(tagContent,timelineConfig) {
	timelineConfig.set_namedParts(new haxe_ds_StringMap());
	var length = tagContent.readUnsignedInt();
	var partID = 0;
	var _g1 = 0;
	while(_g1 < length) {
		++_g1;
		partID = tagContent.readUnsignedInt();
		timelineConfig.get_namedParts().set(partID == null?"null":"" + partID,tagContent.readUTF());
	}
};
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readTextFields = function(tagContent,timelineConfig) {
	var length = tagContent.readUnsignedInt();
	var pivotX;
	var pivotY;
	var textFieldID = 0;
	var width;
	var height;
	var text;
	var embedFonts;
	var multiline;
	var wordWrap;
	var restrict = null;
	var editable;
	var selectable;
	var displayAsPassword;
	var maxChars = 0;
	var textFormat;
	var _g1 = 0;
	while(_g1 < length) {
		++_g1;
		textFieldID = tagContent.readUnsignedInt();
		pivotX = haxe_io_FPHelper.i32ToFloat(tagContent.readInt32());
		pivotY = haxe_io_FPHelper.i32ToFloat(tagContent.readInt32());
		width = haxe_io_FPHelper.i32ToFloat(tagContent.readInt32());
		height = haxe_io_FPHelper.i32ToFloat(tagContent.readInt32());
		text = tagContent.readUTF();
		embedFonts = tagContent.readBoolean();
		multiline = tagContent.readBoolean();
		wordWrap = tagContent.readBoolean();
		if(tagContent.readBoolean()) {
			restrict = tagContent.readUTF();
		}
		editable = tagContent.readBoolean();
		selectable = tagContent.readBoolean();
		displayAsPassword = tagContent.readBoolean();
		maxChars = tagContent.readUnsignedInt();
		var alignFlag = tagContent.readUnsignedInt();
		var align = null;
		switch(alignFlag) {
		case 0:
			align = "left";
			break;
		case 1:
			align = "right";
			break;
		case 2:
			align = "center";
			break;
		case 3:
			align = "justify";
			break;
		case 4:
			align = "start";
			break;
		case 5:
			align = "end";
			break;
		}
		tagContent.readUnsignedInt();
		var bold = tagContent.readBoolean();
		tagContent.readBoolean();
		var color = tagContent.readUnsignedInt();
		var font = tagContent.readUTF();
		tagContent.readUnsignedInt();
		var italic = tagContent.readBoolean();
		tagContent.readBoolean();
		tagContent.readUnsignedInt();
		tagContent.readUnsignedInt();
		var letterSpacing = haxe_io_FPHelper.i32ToFloat(tagContent.readInt32());
		tagContent.readUnsignedInt();
		var size = tagContent.readUnsignedInt();
		var l = tagContent.readUnsignedInt();
		var tabStops = [];
		var _g3 = 0;
		while(_g3 < l) {
			++_g3;
			tabStops.push(tagContent.readUnsignedInt());
		}
		tagContent.readUTF();
		tagContent.readBoolean();
		tagContent.readUTF();
		textFormat = new PIXI.TextStyle();
		textFormat.fontFamily = font;
		textFormat.fontSize = size;
		textFormat.fill = color;
		textFormat.fontWeight = bold?"bold":"normal";
		textFormat.fontStyle = italic?"italic":"normal";
		textFormat.align = align;
		textFormat.letterSpacing = letterSpacing;
		var textFieldObject = new com_github_haxePixiGAF_data_config_CTextFieldObject(textFieldID == null?"null":"" + textFieldID,text,textFormat,width,height);
		textFieldObject.get_pivotPoint().x = -pivotX;
		textFieldObject.get_pivotPoint().y = -pivotY;
		textFieldObject.set_embedFonts(embedFonts);
		textFieldObject.set_multiline(multiline);
		textFieldObject.set_wordWrap(wordWrap);
		textFieldObject.set_restrict(restrict);
		textFieldObject.set_editable(editable);
		textFieldObject.set_selectable(selectable);
		textFieldObject.set_displayAsPassword(displayAsPassword);
		textFieldObject.set_maxChars(maxChars);
		timelineConfig.get_textFields().addTextFieldObject(textFieldObject);
	}
};
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readStageConfig = function(tagContent,config) {
	var stageConfig = new com_github_haxePixiGAF_data_config_CStage();
	stageConfig.fps = tagContent.readSByte();
	stageConfig.color = haxe_io_FPHelper.i32ToFloat(tagContent.readInt32());
	stageConfig.width = tagContent.readUnsignedShort();
	stageConfig.height = tagContent.readUnsignedShort();
	config.set_stageConfig(stageConfig);
};
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readDropShadowFilter = function(source,filter) {
	var color = com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readColorValue(source);
	var blurX = haxe_io_FPHelper.i32ToFloat(source.readInt32());
	var blurY = haxe_io_FPHelper.i32ToFloat(source.readInt32());
	var angle = haxe_io_FPHelper.i32ToFloat(source.readInt32());
	var distance = haxe_io_FPHelper.i32ToFloat(source.readInt32());
	var strength = haxe_io_FPHelper.i32ToFloat(source.readInt32());
	var inner = source.readBoolean();
	var knockout = source.readBoolean();
	return filter.addDropShadowFilter(blurX,blurY,color[1],color[0],angle,distance,strength,inner,knockout);
};
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readBlurFilter = function(source,filter) {
	return filter.addBlurFilter(haxe_io_FPHelper.i32ToFloat(source.readInt32()),haxe_io_FPHelper.i32ToFloat(source.readInt32()));
};
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readGlowFilter = function(source,filter) {
	var color = com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readColorValue(source);
	var blurX = haxe_io_FPHelper.i32ToFloat(source.readInt32());
	var blurY = haxe_io_FPHelper.i32ToFloat(source.readInt32());
	var strength = haxe_io_FPHelper.i32ToFloat(source.readInt32());
	var inner = source.readBoolean();
	var knockout = source.readBoolean();
	return filter.addGlowFilter(blurX,blurY,color[1],color[0],strength,inner,knockout);
};
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readColorMatrixFilter = function(source,filter) {
	var matrix = [];
	var _g = 0;
	while(_g < 20) matrix[_g++] = haxe_io_FPHelper.i32ToFloat(source.readInt32());
	return filter.addColorMatrixFilter(matrix);
};
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readColorValue = function(source) {
	var argbValue = source.readUnsignedInt();
	return [((argbValue >> 24 & 255) * 100 / 255 | 0) / 100,argbValue & 16777215];
};
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.__super__ = PIXI.utils.EventEmitter;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.prototype = $extend(PIXI.utils.EventEmitter.prototype,{
	convert: function(async) {
		if(async == null) {
			async = false;
		}
		if(async) {
			haxe_Log.trace("TODO asynchrone conversion",{ fileName : "BinGAFAssetConfigConverter.hx", lineNumber : 103, className : "com.github.haxePixiGAF.data.converters.BinGAFAssetConfigConverter", methodName : "convert"});
		} else {
			this.parseStart();
		}
	}
	,parseStart: function() {
		this._bytes.set_bigEndian(false);
		this._config = new com_github_haxePixiGAF_data_GAFAssetConfig(this._assetID);
		this._config.set_compression(this._bytes.readInt());
		this._config.set_versionMajor(this._bytes.readSByte());
		this._config.set_versionMinor(this._bytes.readSByte());
		this._config.set_fileLength(this._bytes.readUnsignedInt());
		if(this._config.get_versionMajor() > 5) {
			this.emit("error","You are using an old version of GAF library" + "Library version:" + 5 + ", file version:" + this._config.get_versionMajor());
			return;
		}
		if(this._config.get_compression() == 4669763) {
			throw new js__$Boot_HaxeError("HaxePixiGAF: GAF compressed format not supported yet");
		}
		if(this._config.get_versionMajor() < 4) {
			this._currentTimeline = new com_github_haxePixiGAF_data_GAFTimelineConfig(this._config.get_versionMajor() + "." + this._config.get_versionMinor());
			this._currentTimeline.set_id("0");
			this._currentTimeline.set_assetID(this._assetID);
			this._currentTimeline.set_framesCount(this._bytes.readShort());
			this._currentTimeline.set_bounds(new PIXI.Rectangle(haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32())));
			this._currentTimeline.set_pivot(new PIXI.Point(haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32())));
			this._config.get_timelines().push(this._currentTimeline);
		} else {
			var l = this._bytes.readUnsignedInt();
			var _g2 = 0;
			var _g1 = l;
			while(_g2 < _g1) {
				++_g2;
				var tmp = haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32());
				this._config.get_scaleValues().push(tmp);
			}
			l = this._bytes.readUnsignedInt();
			var _g21 = 0;
			var _g11 = l;
			while(_g21 < _g11) {
				++_g21;
				var tmp1 = haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32());
				this._config.get_csfValues().push(tmp1);
			}
		}
		this.readNextTag();
	}
	,checkForMissedRegions: function(timelineConfig) {
		if(timelineConfig.get_textureAtlas() != null && timelineConfig.get_textureAtlas().get_contentScaleFactor().get_elements() != null) {
			var tmp = timelineConfig.get_animationObjects().get_animationObjectsDictionary().iterator();
			while(tmp.hasNext()) {
				var ao = tmp.next();
				var tmp1;
				if(ao.get_type() == "texture") {
					var tmp2 = ao.get_regionID();
					tmp1 = timelineConfig.get_textureAtlas().get_contentScaleFactor().get_elements().getElement(tmp2) == null;
				} else {
					tmp1 = false;
				}
				if(tmp1) {
					timelineConfig.addWarning("In the texture atlas element is missing. This is conversion bug. Please report issue<font color='#0000ff'><u><a href='http://gafmedia.com/contact'>here</a></u></font>and we will fix it(use the Request type - Report Issue).");
					break;
				}
			}
		}
	}
	,readNextTag: function() {
		var tagID = this._bytes.readShort();
		var tagLength = this._bytes.readUnsignedInt();
		switch(tagID) {
		case 0:
			if(this._isTimeline) {
				this._isTimeline = false;
			} else {
				this._bytes.set_position(this._bytes.totlen);
				this.endParsing();
				return;
			}
			break;
		case 1:
			this.readTextureAtlasConfig(tagID);
			break;
		case 2:
			com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readAnimationMasks(tagID,this._bytes,this._currentTimeline);
			break;
		case 3:
			com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readAnimationObjects(tagID,this._bytes,this._currentTimeline);
			break;
		case 4:
			this.readAnimationFrames(tagID);
			return;
		case 5:
			com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readNamedParts(this._bytes,this._currentTimeline);
			break;
		case 6:
			com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readAnimationSequences(this._bytes,this._currentTimeline);
			break;
		case 7:
			com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readTextFields(this._bytes,this._currentTimeline);
			break;
		case 8:
			this.readTextureAtlasConfig(tagID);
			break;
		case 9:
			com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readStageConfig(this._bytes,this._config);
			break;
		case 10:
			com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readAnimationObjects(tagID,this._bytes,this._currentTimeline);
			break;
		case 11:
			com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readAnimationMasks(tagID,this._bytes,this._currentTimeline);
			break;
		case 12:
			this.readAnimationFrames(tagID);
			return;
		case 13:
			this._currentTimeline = this.readTimeline();
			break;
		case 14:
			haxe_Log.trace("TODO TAG_DEFINE_SOUNDS",{ fileName : "BinGAFAssetConfigConverter.hx", lineNumber : 228, className : "com.github.haxePixiGAF.data.converters.BinGAFAssetConfigConverter", methodName : "readNextTag"});
			if(!(!this._ignoreSounds)) {
				var _g = this._bytes;
				_g.set_position(_g.pos + tagLength);
			}
			break;
		case 15:
			this.readTextureAtlasConfig(tagID);
			break;
		default:
			haxe_Log.trace("Unsupported tag found, check for playback library updates",{ fileName : "BinGAFAssetConfigConverter.hx", lineNumber : 251, className : "com.github.haxePixiGAF.data.converters.BinGAFAssetConfigConverter", methodName : "readNextTag"});
			var _g1 = this._bytes;
			_g1.set_position(_g1.pos + tagLength);
		}
		this.delayedReadNextTag();
	}
	,delayedReadNextTag: function() {
		if(this._async) {
			haxe_Log.trace("TODO asynchrone delayedReadNextTag",{ fileName : "BinGAFAssetConfigConverter.hx", lineNumber : 262, className : "com.github.haxePixiGAF.data.converters.BinGAFAssetConfigConverter", methodName : "delayedReadNextTag"});
		} else {
			this.readNextTag();
		}
	}
	,readTimeline: function() {
		var timelineConfig = new com_github_haxePixiGAF_data_GAFTimelineConfig(this._config.get_versionMajor() + "." + this._config.get_versionMinor());
		timelineConfig.set_id(Std.string(_$UInt_UInt_$Impl_$.toFloat(this._bytes.readUnsignedInt())));
		timelineConfig.set_assetID(this._config.get_id());
		timelineConfig.set_framesCount(this._bytes.readUnsignedInt());
		timelineConfig.set_bounds(new PIXI.Rectangle(haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32())));
		timelineConfig.set_pivot(new PIXI.Point(haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32())));
		if(this._bytes.readBoolean()) {
			timelineConfig.set_linkage(this._bytes.readUTF());
		}
		this._config.get_timelines().push(timelineConfig);
		this._isTimeline = true;
		return timelineConfig;
	}
	,readTextureAtlasConfig: function(tagID) {
		var scale = haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32());
		if(this._config.get_scaleValues().indexOf(scale) == -1) {
			this._config.get_scaleValues().push(scale);
		}
		var textureAtlas = this.getTextureAtlasScale(scale);
		var contentScaleFactor = null;
		var atlasLength = this._bytes.readSByte();
		var atlasID = 0;
		var sourceLength = 0;
		var csf;
		var source;
		var elements = null;
		if(textureAtlas.get_allContentScaleFactors().length > 0) {
			elements = textureAtlas.get_allContentScaleFactors()[0].get_elements();
		}
		if(elements == null) {
			elements = new com_github_haxePixiGAF_data_config_CTextureAtlasElements();
		}
		var _g1 = 0;
		while(_g1 < atlasLength) {
			++_g1;
			atlasID = this._bytes.readUnsignedInt();
			sourceLength = this._bytes.readSByte();
			var _g3 = 0;
			var _g2 = sourceLength;
			while(_g3 < _g2) {
				++_g3;
				source = this._bytes.readUTF();
				csf = haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32());
				if(this._config.get_csfValues().indexOf(csf) == -1) {
					this._config.get_csfValues().push(csf);
				}
				contentScaleFactor = this.getTextureAtlasCSF(scale,csf);
				this.updateTextureAtlasSources(contentScaleFactor,atlasID == null?"null":"" + atlasID,source);
				if(contentScaleFactor.get_elements() == null) {
					contentScaleFactor.set_elements(elements);
				}
			}
		}
		var elementsLength = this._bytes.readUnsignedInt();
		var element;
		var hasScale9Grid = false;
		var scale9Grid = null;
		var pivot;
		var topLeft;
		var elementScaleX = 0;
		var elementScaleY = 0;
		var elementWidth;
		var elementHeight;
		var elementAtlasID = 0;
		var rotation = false;
		var linkageName = "";
		var _g11 = 0;
		while(_g11 < elementsLength) {
			++_g11;
			pivot = new PIXI.Point(haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()));
			topLeft = new PIXI.Point(haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()));
			if(tagID == 1 || tagID == 8) {
				elementScaleY = haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32());
				elementScaleX = elementScaleY;
			}
			elementWidth = haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32());
			elementHeight = haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32());
			atlasID = this._bytes.readUnsignedInt();
			elementAtlasID = this._bytes.readUnsignedInt();
			if(tagID == 8 || tagID == 15) {
				hasScale9Grid = this._bytes.readBoolean();
				if(hasScale9Grid) {
					scale9Grid = new PIXI.Rectangle(haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()));
				} else {
					scale9Grid = null;
				}
			}
			if(tagID == 15) {
				elementScaleX = haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32());
				elementScaleY = haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32());
				rotation = this._bytes.readBoolean();
				linkageName = this._bytes.readUTF();
			}
			if(elements.getElement(elementAtlasID == null?"null":"" + elementAtlasID) == null) {
				element = new com_github_haxePixiGAF_data_config_CTextureAtlasElement(elementAtlasID == null?"null":"" + elementAtlasID,atlasID == null?"null":"" + atlasID);
				element.set_region(new PIXI.Rectangle(topLeft.x | 0,topLeft.y | 0,elementWidth,elementHeight));
				element.set_pivotMatrix(new PIXI.Matrix(1 / elementScaleX,0,0,1 / elementScaleY,-pivot.x / elementScaleX,-pivot.y / elementScaleY));
				element.set_scale9Grid(scale9Grid);
				element.set_linkage(linkageName);
				element.set_rotated(rotation);
				elements.addElement(element);
				if(element.get_rotated()) {
					com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperRectangle.x = 0;
					com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperRectangle.y = 0;
					com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperRectangle.width = elementHeight;
					com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperRectangle.height = elementWidth;
				} else {
					com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperRectangle.x = 0;
					com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperRectangle.y = 0;
					com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperRectangle.width = elementWidth;
					com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperRectangle.height = elementHeight;
				}
				com_github_haxePixiGAF_utils_MatrixUtility.copyFrom(com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperMatrix,element.get_pivotMatrix());
				var invertScale = 1 / scale;
				com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperMatrix.scale(invertScale,invertScale);
				if(this._textureElementSizes[elementAtlasID] == null) {
					this._textureElementSizes[elementAtlasID] = com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperRectangle.clone();
				} else {
					this._textureElementSizes[elementAtlasID] = com_github_haxePixiGAF_utils_RectangleUtility.union(this._textureElementSizes[elementAtlasID],com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperRectangle);
				}
			}
		}
	}
	,getTextureAtlasScale: function(scale) {
		var textureAtlasScale = null;
		var textureAtlasScales = this._config.get_allTextureAtlases();
		var l = textureAtlasScales.length;
		var _g1 = 0;
		while(_g1 < l) {
			var i = _g1++;
			var a = textureAtlasScales[i].get_scale();
			if(isNaN(a) || isNaN(scale)?false:Math.abs(a - scale) < 0.00001) {
				textureAtlasScale = textureAtlasScales[i];
				break;
			}
		}
		if(textureAtlasScale == null) {
			textureAtlasScale = new com_github_haxePixiGAF_data_config_CTextureAtlasScale();
			textureAtlasScale.set_scale(scale);
			textureAtlasScales.push(textureAtlasScale);
		}
		return textureAtlasScale;
	}
	,getTextureAtlasCSF: function(scale,csf) {
		var textureAtlasScale = this.getTextureAtlasScale(scale);
		var textureAtlasCSF = textureAtlasScale.getTextureAtlasForCSF(csf);
		if(textureAtlasCSF == null) {
			textureAtlasCSF = new com_github_haxePixiGAF_data_config_CTextureAtlasCSF(csf,scale);
			textureAtlasScale.get_allContentScaleFactors().push(textureAtlasCSF);
		}
		return textureAtlasCSF;
	}
	,updateTextureAtlasSources: function(textureAtlasCSF,atlasID,source) {
		var textureAtlasSource = null;
		var textureAtlasSources = textureAtlasCSF.get_sources();
		var l = textureAtlasSources.length;
		var _g1 = 0;
		while(_g1 < l) {
			var i = _g1++;
			if(textureAtlasSources[i].get_id() == atlasID) {
				textureAtlasSource = textureAtlasSources[i];
				break;
			}
		}
		if(textureAtlasSource == null) {
			textureAtlasSource = new com_github_haxePixiGAF_data_config_CTextureAtlasSource(atlasID,source);
			textureAtlasSources.push(textureAtlasSource);
		}
	}
	,readAnimationFrames: function(tagID,startIndex,framesCount,prevFrame) {
		if(framesCount == null) {
			framesCount = -1;
		}
		if(startIndex == null) {
			startIndex = 0;
		}
		if(framesCount == -1) {
			framesCount = this._bytes.readUnsignedInt();
		}
		var missedFrameNumber = 0;
		var filterLength = 0;
		var frameNumber = 0;
		var statesCount = 0;
		var filterType = 0;
		var stateID = 0;
		var zIndex = 0;
		var alpha;
		var matrix;
		var maskID;
		var hasMask = false;
		var hasEffect = false;
		var hasActions = false;
		var hasColorTransform = false;
		var hasChangesInDisplayList = false;
		var timelineConfig = this._config.get_timelines()[this._config.get_timelines().length - 1];
		var instance;
		var currentFrame;
		var blurFilter;
		var blurFilters = new haxe_ds_StringMap();
		var filter;
		if(framesCount != -1) {
			var _g1 = startIndex;
			var _g = framesCount;
			while(_g1 < _g) {
				++_g1;
				if(this._async) {
					haxe_Log.trace("TODO asynchrone readAnimationFrames",{ fileName : "BinGAFAssetConfigConverter.hx", lineNumber : 772, className : "com.github.haxePixiGAF.data.converters.BinGAFAssetConfigConverter", methodName : "readAnimationFrames"});
					return;
				}
				frameNumber = this._bytes.readUnsignedInt();
				if(tagID == 4) {
					hasChangesInDisplayList = true;
					hasActions = false;
				} else {
					hasChangesInDisplayList = this._bytes.readBoolean();
					hasActions = this._bytes.readBoolean();
				}
				if(prevFrame != null) {
					currentFrame = prevFrame.clone(frameNumber);
					missedFrameNumber = prevFrame.get_frameNumber() + 1;
					while(missedFrameNumber < currentFrame.get_frameNumber()) {
						var tmp = prevFrame.clone(missedFrameNumber);
						timelineConfig.get_animationConfigFrames().addFrame(tmp);
						++missedFrameNumber;
					}
				} else {
					currentFrame = new com_github_haxePixiGAF_data_config_CAnimationFrame(frameNumber);
					if(currentFrame.get_frameNumber() > 1) {
						missedFrameNumber = 1;
						while(missedFrameNumber < currentFrame.get_frameNumber()) {
							timelineConfig.get_animationConfigFrames().addFrame(new com_github_haxePixiGAF_data_config_CAnimationFrame(missedFrameNumber));
							++missedFrameNumber;
						}
					}
				}
				if(hasChangesInDisplayList) {
					statesCount = this._bytes.readUnsignedInt();
					var _g3 = 0;
					var _g2 = statesCount;
					while(_g3 < _g2) {
						++_g3;
						hasColorTransform = this._bytes.readBoolean();
						hasMask = this._bytes.readBoolean();
						hasEffect = this._bytes.readBoolean();
						stateID = this._bytes.readUnsignedInt();
						zIndex = this._bytes.readInt();
						alpha = haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32());
						if(alpha == 1) {
							alpha = com_github_haxePixiGAF_data_GAF.get_maxAlpha();
						}
						matrix = new PIXI.Matrix(haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()));
						filter = null;
						if(hasColorTransform) {
							var params = [haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32()),haxe_io_FPHelper.i32ToFloat(this._bytes.readInt32())];
							if(filter == null) {
								filter = new com_github_haxePixiGAF_data_config_CFilter();
							}
							filter.addColorTransform(params);
						}
						if(hasEffect) {
							if(filter == null) {
								filter = new com_github_haxePixiGAF_data_config_CFilter();
							}
							filterLength = this._bytes.readSByte();
							var _g5 = 0;
							var _g4 = filterLength;
							while(_g5 < _g4) {
								++_g5;
								filterType = this._bytes.readUnsignedInt();
								var warning = null;
								switch(filterType) {
								case 0:
									warning = com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readDropShadowFilter(this._bytes,filter);
									break;
								case 1:
									warning = com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readBlurFilter(this._bytes,filter);
									blurFilter = js_Boot.__cast(filter.get_filterConfigs()[filter.get_filterConfigs().length - 1] , com_github_haxePixiGAF_data_config_CBlurFilterData);
									if(blurFilter.blurX >= 2 && blurFilter.blurY >= 2) {
										var key = stateID == null?"null":"" + stateID;
										if(!(__map_reserved[key] != null?blurFilters.existsReserved(key):blurFilters.h.hasOwnProperty(key))) {
											var key1 = stateID == null?"null":"" + stateID;
											if(__map_reserved[key1] != null) {
												blurFilters.setReserved(key1,blurFilter);
											} else {
												blurFilters.h[key1] = blurFilter;
											}
										}
									} else {
										var key2 = stateID == null?"null":"" + stateID;
										if(__map_reserved[key2] != null) {
											blurFilters.setReserved(key2,null);
										} else {
											blurFilters.h[key2] = null;
										}
									}
									break;
								case 2:
									warning = com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readGlowFilter(this._bytes,filter);
									break;
								case 6:
									warning = com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.readColorMatrixFilter(this._bytes,filter);
									break;
								default:
									haxe_Log.trace("Unsupported filter in animation",{ fileName : "BinGAFAssetConfigConverter.hx", lineNumber : 878, className : "com.github.haxePixiGAF.data.converters.BinGAFAssetConfigConverter", methodName : "readAnimationFrames"});
								}
								timelineConfig.addWarning(warning);
							}
						}
						if(hasMask) {
							maskID = Std.string(_$UInt_UInt_$Impl_$.toFloat(this._bytes.readUnsignedInt())) + "";
						} else {
							maskID = "";
						}
						instance = new com_github_haxePixiGAF_data_config_CAnimationFrameInstance(stateID + "");
						instance.update(zIndex,matrix,alpha,maskID,filter);
						if(maskID != null && filter != null) {
							//timelineConfig.addWarning("Warning! Animation contains objects with filters under mask! Online preview is not able to display filters applied under masks(flash player technical limitation). All other runtimes will display this correctly.");
						}
						currentFrame.addInstance(instance);
					}
					currentFrame.sortInstances();
				}
				if(hasActions) {
					var action;
					var count = this._bytes.readUnsignedInt();
					var _g31 = 0;
					while(_g31 < count) {
						++_g31;
						action = new com_github_haxePixiGAF_data_config_CFrameAction();
						action.type = this._bytes.readUnsignedInt();
						action.scope = this._bytes.readUTF();
						var paramsLength = this._bytes.readUnsignedInt();
						if(paramsLength > 0) {
							var lBytes = new haxe_io_Bytes(new ArrayBuffer(paramsLength));
							this._bytes.readBytes(lBytes,0,paramsLength);
							var paramsBA = new com_github_haxePixiGAF_utils_GAFBytesInput(lBytes);
							paramsBA.set_bigEndian(false);
							while(paramsBA.pos < paramsBA.totlen) action.params.push(paramsBA.readUTF());
							paramsBA.close();
						}
						if(action.type == 4 && action.params[0] == "gafPlaySound" && action.params.length > 3) {
							if(this._ignoreSounds) {
								continue;
							}
							JSON.parse(action.params[3]);
						}
						currentFrame.addAction(action);
					}
				}
				timelineConfig.get_animationConfigFrames().addFrame(currentFrame);
				prevFrame = currentFrame;
			}
			missedFrameNumber = prevFrame.get_frameNumber() + 1;
			while(missedFrameNumber <= timelineConfig.get_framesCount()) {
				var tmp1 = prevFrame.clone(missedFrameNumber);
				timelineConfig.get_animationConfigFrames().addFrame(tmp1);
				++missedFrameNumber;
			}
			var _g6 = 0;
			var _g11 = timelineConfig.get_animationConfigFrames().get_frames();
			while(_g6 < _g11.length) {
				var currentFrame1 = _g11[_g6];
				++_g6;
				var _g21 = 0;
				var _g32 = currentFrame1.get_instances();
				while(_g21 < _g32.length) {
					var instance1 = _g32[_g21];
					++_g21;
					var tmp2;
					var key3 = instance1.get_id();
					if((__map_reserved[key3] != null?blurFilters.getReserved(key3):blurFilters.h[key3]) != null) {
						tmp2 = instance1.get_filter() != null;
					} else {
						tmp2 = false;
					}
					if(tmp2) {
						blurFilter = instance1.get_filter().getBlurFilter();
						if(blurFilter != null && blurFilter.resolution == 1) {
							blurFilter.blurX *= 0.5;
							blurFilter.blurY *= 0.5;
							blurFilter.resolution = 0.75;
						}
					}
				}
			}
		}
		this.delayedReadNextTag();
	}
	,readMaskMaxSizes: function() {
		var _g = 0;
		var _g1 = this._config.get_timelines();
		while(_g < _g1.length) {
			var timeline = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g3 = timeline.get_animationConfigFrames().get_frames();
			while(_g2 < _g3.length) {
				var frame = _g3[_g2];
				++_g2;
				var _g4 = 0;
				var _g5 = frame.get_instances();
				while(_g4 < _g5.length) {
					var frameInstance = _g5[_g4];
					++_g4;
					var tmp = frameInstance.get_id();
					var animationObject = timeline.get_animationObjects().getAnimationObject(tmp);
					if(animationObject.get_mask()) {
						if(animationObject.get_maxSize() == null) {
							animationObject.set_maxSize(new PIXI.Point());
						}
						var maxSize = animationObject.get_maxSize();
						if(animationObject.get_type() == "texture") {
							com_github_haxePixiGAF_utils_RectangleUtility.copyFrom(com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperRectangle,this._textureElementSizes[Std.parseInt(animationObject.get_regionID())]);
						} else if(animationObject.get_type() == "timeline") {
							var maskTimeline = null;
							var _g6 = 0;
							var _g7 = this._config.get_timelines();
							while(_g6 < _g7.length) {
								var maskTimeline1 = _g7[_g6];
								++_g6;
								if(maskTimeline1.get_id() == animationObject.get_regionID()) {
									break;
								}
							}
							com_github_haxePixiGAF_utils_RectangleUtility.copyFrom(com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperRectangle,maskTimeline.get_bounds());
						} else if(animationObject.get_type() == "textField") {
							var textField = timeline.get_textFields().get_textFieldObjectsDictionary().get(animationObject.get_regionID());
							com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperRectangle.x = -textField.get_pivotPoint().x;
							com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperRectangle.y = -textField.get_pivotPoint().y;
							com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperRectangle.width = textField.get_width();
							com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperRectangle.height = textField.get_height();
						}
						maxSize.set(Math.max(maxSize.x,Math.abs(com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperRectangle.width)),Math.max(maxSize.y,Math.abs(com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperRectangle.height)));
					}
				}
			}
		}
	}
	,endParsing: function() {
		this._bytes.close();
		this._bytes = null;
		this.readMaskMaxSizes();
		var itemIndex = 0;
		var f = this._config.get_defaultScale();
		if(isNaN(f)) {
			if(!isNaN(this._defaultScale)) {
				itemIndex = com_github_haxePixiGAF_utils_MathUtility.getItemIndex(this._config.get_scaleValues(),this._defaultScale);
				if(itemIndex < 0) {
					this.parseError(this._defaultScale + " scale was not found in GAF config");
					return;
				}
			}
			this._config.set_defaultScale(this._config.get_scaleValues()[itemIndex]);
		}
		var f1 = this._config.get_defaultContentScaleFactor();
		if(isNaN(f1)) {
			itemIndex = 0;
			if(!isNaN(this._defaultContentScaleFactor)) {
				itemIndex = com_github_haxePixiGAF_utils_MathUtility.getItemIndex(this._config.get_csfValues(),this._defaultContentScaleFactor);
				if(itemIndex < 0) {
					this.parseError(this._defaultContentScaleFactor + " CSF was not found in GAF config");
					return;
				}
			}
			this._config.set_defaultContentScaleFactor(this._config.get_csfValues()[itemIndex]);
		}
		var _g = 0;
		var _g1 = this._config.get_allTextureAtlases();
		while(_g < _g1.length) {
			var textureAtlasScale = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g3 = textureAtlasScale.get_allContentScaleFactors();
			while(_g2 < _g3.length) {
				var textureAtlasCSF = _g3[_g2];
				++_g2;
				var a = this._config.get_defaultContentScaleFactor();
				var b = textureAtlasCSF.get_csf();
				if(isNaN(a) || isNaN(b)?false:Math.abs(a - b) < 0.00001) {
					textureAtlasScale.set_contentScaleFactor(textureAtlasCSF);
					break;
				}
			}
		}
		var _g4 = 0;
		var _g11 = this._config.get_timelines();
		while(_g4 < _g11.length) {
			var timelineConfig = _g11[_g4];
			++_g4;
			timelineConfig.set_allTextureAtlases(this._config.get_allTextureAtlases());
			var _g21 = 0;
			var _g31 = this._config.get_allTextureAtlases();
			while(_g21 < _g31.length) {
				var textureAtlasScale1 = _g31[_g21];
				++_g21;
				var a1 = this._config.get_defaultScale();
				var b1 = textureAtlasScale1.get_scale();
				if(isNaN(a1) || isNaN(b1)?false:Math.abs(a1 - b1) < 0.00001) {
					timelineConfig.set_textureAtlas(textureAtlasScale1);
				}
			}
			timelineConfig.set_stageConfig(this._config.get_stageConfig());
			this.checkForMissedRegions(timelineConfig);
		}
		this.emit("complete",{ target : this});
	}
	,parseError: function(message) {
		if(com_github_haxePixiGAF_utils_EventEmitterUtility.hasEventListener(this,"error")) {
			this.emit("error",{ bubbles : false, cancelable : false, text : message});
		} else {
			throw new js__$Boot_HaxeError(message);
		}
	}
	,get_config: function() {
		return this._config;
	}
	,get_assetID: function() {
		return this._assetID;
	}
	,set_ignoreSounds: function(ignoreSounds) {
		return this._ignoreSounds = ignoreSounds;
	}
	,set_defaultScale: function(defaultScale) {
		return this._defaultScale = defaultScale;
	}
	,set_defaultCSF: function(csf) {
		return this._defaultContentScaleFactor = csf;
	}
	,__class__: com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter
});
var com_github_haxePixiGAF_data_converters_ErrorConstants = function() { };
com_github_haxePixiGAF_data_converters_ErrorConstants.__name__ = ["com","github","haxePixiGAF","data","converters","ErrorConstants"];
var com_github_haxePixiGAF_data_converters_WarningConstants = function() { };
com_github_haxePixiGAF_data_converters_WarningConstants.__name__ = ["com","github","haxePixiGAF","data","converters","WarningConstants"];
var com_github_haxePixiGAF_events_IEventEmitter = function() { };
com_github_haxePixiGAF_events_IEventEmitter.__name__ = ["com","github","haxePixiGAF","events","IEventEmitter"];
com_github_haxePixiGAF_events_IEventEmitter.prototype = {
	__class__: com_github_haxePixiGAF_events_IEventEmitter
};
var com_github_haxePixiGAF_data_tagfx_ITAGFX = function() { };
com_github_haxePixiGAF_data_tagfx_ITAGFX.__name__ = ["com","github","haxePixiGAF","data","tagfx","ITAGFX"];
com_github_haxePixiGAF_data_tagfx_ITAGFX.__interfaces__ = [com_github_haxePixiGAF_events_IEventEmitter];
com_github_haxePixiGAF_data_tagfx_ITAGFX.prototype = {
	__class__: com_github_haxePixiGAF_data_tagfx_ITAGFX
};
var com_github_haxePixiGAF_data_tagfx_TAGFXBase = function() {
	this._isReady = false;
	this._clearSourceAfterTextureCreated = false;
	this._textureScale = -1;
	PIXI.utils.EventEmitter.call(this);
};
com_github_haxePixiGAF_data_tagfx_TAGFXBase.__name__ = ["com","github","haxePixiGAF","data","tagfx","TAGFXBase"];
com_github_haxePixiGAF_data_tagfx_TAGFXBase.__interfaces__ = [com_github_haxePixiGAF_data_tagfx_ITAGFX];
com_github_haxePixiGAF_data_tagfx_TAGFXBase.__super__ = PIXI.utils.EventEmitter;
com_github_haxePixiGAF_data_tagfx_TAGFXBase.prototype = $extend(PIXI.utils.EventEmitter.prototype,{
	onTextureReady: function(texture) {
		this._isReady = true;
		this.emit("textureReady");
	}
	,get_texture: function() {
		return this._texture;
	}
	,get_textureSize: function() {
		return this._textureSize;
	}
	,set_textureSize: function(value) {
		return this._textureSize = value;
	}
	,get_textureScale: function() {
		return this._textureScale;
	}
	,set_textureScale: function(value) {
		return this._textureScale = value;
	}
	,get_textureFormat: function() {
		return this._textureFormat;
	}
	,set_textureFormat: function(value) {
		return this._textureFormat = value;
	}
	,get_sourceType: function() {
		return "";
	}
	,get_source: function() {
		return this._source;
	}
	,get_ready: function() {
		return this._isReady;
	}
	,__class__: com_github_haxePixiGAF_data_tagfx_TAGFXBase
});
var com_github_haxePixiGAF_data_tagfx_TAGFXsourcePixi = function(source) {
	com_github_haxePixiGAF_data_tagfx_TAGFXBase.call(this);
	this._source = source;
	this.bob = source;
};
com_github_haxePixiGAF_data_tagfx_TAGFXsourcePixi.__name__ = ["com","github","haxePixiGAF","data","tagfx","TAGFXsourcePixi"];
com_github_haxePixiGAF_data_tagfx_TAGFXsourcePixi.__super__ = com_github_haxePixiGAF_data_tagfx_TAGFXBase;
com_github_haxePixiGAF_data_tagfx_TAGFXsourcePixi.prototype = $extend(com_github_haxePixiGAF_data_tagfx_TAGFXBase.prototype,{
	get_sourceType: function() {
		return "Texture_Pixi";
	}
	,get_texture: function() {
		return new com_github_haxePixiGAF_data_textures_TextureWrapper(PIXI.BaseTexture.fromImage(this._source));
	}
	,__class__: com_github_haxePixiGAF_data_tagfx_TAGFXsourcePixi
});
var com_github_haxePixiGAF_data_textures_TextureWrapper = function(pBaseTexture,pFrame,pCrop,pTrim,pRotate) {
	PIXI.Texture.call(this,pBaseTexture,pFrame,pCrop,pTrim,pRotate);
};
com_github_haxePixiGAF_data_textures_TextureWrapper.__name__ = ["com","github","haxePixiGAF","data","textures","TextureWrapper"];
com_github_haxePixiGAF_data_textures_TextureWrapper.fromTexture = function(texture,region,frame,rotated,scaleModifier) {
	if(scaleModifier == null) {
		scaleModifier = 1.0;
	}
	if(rotated == null) {
		rotated = false;
	}
	return new com_github_haxePixiGAF_data_textures_SubTexture(texture,region,false,frame,rotated,scaleModifier);
};
com_github_haxePixiGAF_data_textures_TextureWrapper.get_maxSize = function() {
	return 4096;
};
com_github_haxePixiGAF_data_textures_TextureWrapper.__super__ = PIXI.Texture;
com_github_haxePixiGAF_data_textures_TextureWrapper.prototype = $extend(PIXI.Texture.prototype,{
	get_base: function() {
		return null;
	}
	,get_format: function() {
		return "bgra";
	}
	,get_frameHeight: function() {
		if(this.frame != null) {
			return this.frame.height;
		} else {
			return this.height;
		}
	}
	,get_frameWidth: function() {
		if(this.frame != null) {
			return this.frame.width;
		} else {
			return this.width;
		}
	}
	,get_mipMapping: function() {
		return false;
	}
	,get_nativeHeight: function() {
		return 0;
	}
	,get_nativeWidth: function() {
		return 0;
	}
	,get_premultipliedAlpha: function() {
		return false;
	}
	,get_root: function() {
		return null;
	}
	,get_scale: function() {
		return 1;
	}
	,get_transformationMatrix: function() {
		return null;
	}
	,get_transformationMatrixToRoot: function() {
		return null;
	}
	,__class__: com_github_haxePixiGAF_data_textures_TextureWrapper
});
var com_github_haxePixiGAF_data_textures_SubTexture = function(pParent,pRegion,pOwnsParent,pFrame,pRotated,pScaleModifier) {
	if(pScaleModifier == null) {
		pScaleModifier = 1;
	}
	if(pRotated == null) {
		pRotated = false;
	}
	if(pOwnsParent == null) {
		pOwnsParent = false;
	}
	this._rotated = false;
	this._ownsParent = false;
	com_github_haxePixiGAF_data_textures_TextureWrapper.call(this,pParent.baseTexture,pRegion,null,null,pRotated);
	this.setTo(pParent,pRegion,pOwnsParent,pFrame,pRotated,pScaleModifier);
};
com_github_haxePixiGAF_data_textures_SubTexture.__name__ = ["com","github","haxePixiGAF","data","textures","SubTexture"];
com_github_haxePixiGAF_data_textures_SubTexture.__super__ = com_github_haxePixiGAF_data_textures_TextureWrapper;
com_github_haxePixiGAF_data_textures_SubTexture.prototype = $extend(com_github_haxePixiGAF_data_textures_TextureWrapper.prototype,{
	get_base: function() {
		return this._parent.baseTexture;
	}
	,get_frameHeight: function() {
		return this.frame.height;
	}
	,get_frameWidth: function() {
		return this.frame.width;
	}
	,get_mipMapping: function() {
		return this._parent.get_mipMapping();
	}
	,get_nativeHeight: function() {
		return this.height * this._scale;
	}
	,get_nativeWidth: function() {
		return this.width * this._scale;
	}
	,get_format: function() {
		return this._parent.get_format();
	}
	,get_premultipliedAlpha: function() {
		return this._parent.get_premultipliedAlpha();
	}
	,get_root: function() {
		return this._parent.get_root();
	}
	,get_scale: function() {
		return this._scale;
	}
	,get_transformationMatrix: function() {
		return this._transformationMatrix;
	}
	,get_transformationMatrixToRoot: function() {
		return this._transformationMatrixToRoot;
	}
	,setTo: function(pParent,pRegion,pOwnsParent,pFrame,pRotated,pScaleModifier) {
		if(pScaleModifier == null) {
			pScaleModifier = 1;
		}
		if(pRotated == null) {
			pRotated = false;
		}
		if(pOwnsParent == null) {
			pOwnsParent = false;
		}
		if(this._region == null) {
			this._region = new PIXI.Rectangle(0,0,0,0);
		}
		if(pRegion != null) {
			this._region.x = pRegion.x;
			this._region.y = pRegion.y;
			this._region.width = pRegion.width;
			this._region.height = pRegion.height;
		} else {
			this._region.x = 0;
			this._region.y = 0;
			this._region.width = pParent.width;
			this._region.height = pParent.height;
		}
		this._parent = pParent;
		this._ownsParent = pOwnsParent;
		this._rotated = pRotated;
		if(this.frame != null) {
			this.frame.width = (pRotated?this._region.height:this._region.width) / pScaleModifier;
			this.frame.height = (pRotated?this._region.width:this._region.height) / pScaleModifier;
		}
		this._scale = (this._parent != null?this._parent.get_scale():1) * pScaleModifier;
		this.updateMatrices();
	}
	,updateMatrices: function() {
		if(this._transformationMatrix != null) {
			this._transformationMatrix.identity();
		} else {
			this._transformationMatrix = new PIXI.Matrix();
		}
		if(this._transformationMatrixToRoot != null) {
			this._transformationMatrixToRoot.identity();
		} else {
			this._transformationMatrixToRoot = new PIXI.Matrix();
		}
		if(this._rotated) {
			this._transformationMatrix.translate(0,-1);
			this._transformationMatrix.rotate(Math.PI / 2.0);
		}
		this._transformationMatrix.scale(this._region.width / this._parent.width,this._region.height / this._parent.height);
		this._transformationMatrix.translate(this._region.x / this._parent.width,this._region.y / this._parent.height);
		var texture = this;
		while(texture != null) {
			com_github_haxePixiGAF_utils_MatrixUtility.concat(this._transformationMatrixToRoot,texture._transformationMatrix);
			if(js_Boot.__instanceof(texture.get_parent(),com_github_haxePixiGAF_data_textures_SubTexture)) {
				texture = js_Boot.__cast(texture.get_parent() , com_github_haxePixiGAF_data_textures_SubTexture);
			} else {
				texture = null;
			}
		}
	}
	,destroy: function(destroyBase) {
		if(this._ownsParent) {
			this._parent.destroy();
		}
		com_github_haxePixiGAF_data_textures_TextureWrapper.prototype.destroy.call(this,destroyBase);
	}
	,get_parent: function() {
		return this._parent;
	}
	,get_ownsParent: function() {
		return this._ownsParent;
	}
	,get_rotated: function() {
		return this._rotated;
	}
	,get_region: function() {
		return this._region;
	}
	,__class__: com_github_haxePixiGAF_data_textures_SubTexture
});
var com_github_haxePixiGAF_data_textures_TextureAtlas = function(texture) {
	this._subTextures = new haxe_ds_StringMap();
	this._atlasTexture = texture;
};
com_github_haxePixiGAF_data_textures_TextureAtlas.__name__ = ["com","github","haxePixiGAF","data","textures","TextureAtlas"];
com_github_haxePixiGAF_data_textures_TextureAtlas.parseBool = function(value) {
	return value.toLowerCase() == "true";
};
com_github_haxePixiGAF_data_textures_TextureAtlas.prototype = {
	dispose: function() {
		this._atlasTexture.destroy();
	}
	,getTexture: function(name) {
		var _this = this._subTextures;
		return __map_reserved[name] != null?_this.getReserved(name):_this.h[name];
	}
	,getTextures: function(prefix,out) {
		if(prefix == null) {
			prefix = "";
		}
		if(out == null) {
			out = [];
		}
		var _g = 0;
		var _g1 = this.getNames(prefix,com_github_haxePixiGAF_data_textures_TextureAtlas.sNames);
		while(_g < _g1.length) {
			var name = _g1[_g];
			++_g;
			out[out.length] = this.getTexture(name);
		}
		com_github_haxePixiGAF_data_textures_TextureAtlas.sNames = [];
		return out;
	}
	,getNames: function(prefix,out) {
		if(prefix == null) {
			prefix = "";
		}
		if(out == null) {
			out = [];
		}
		if(this._subTextureNames == null) {
			this._subTextureNames = [];
			var tmp = this._subTextures.keys();
			while(tmp.hasNext()) {
				var name = tmp.next();
				this._subTextureNames[this._subTextureNames.length] = name;
			}
			this._subTextureNames.sort(function(pA,pB) {
				if(pA.toLowerCase() < pB.toLowerCase()) {
					return -1;
				} else {
					return 1;
				}
			});
		}
		var _g = 0;
		var _g1 = this._subTextureNames;
		while(_g < _g1.length) {
			var name1 = _g1[_g];
			++_g;
			if(name1.indexOf(prefix) == 0) {
				out[out.length] = name1;
			}
		}
		return out;
	}
	,getRegion: function(name) {
		var _this = this._subTextures;
		var subTexture = __map_reserved[name] != null?_this.getReserved(name):_this.h[name];
		if(subTexture != null) {
			return subTexture.get_region();
		} else {
			return null;
		}
	}
	,getFrame: function(name) {
		var _this = this._subTextures;
		var subTexture = __map_reserved[name] != null?_this.getReserved(name):_this.h[name];
		if(subTexture != null) {
			return subTexture.frame;
		} else {
			return null;
		}
	}
	,getRotation: function(name) {
		var _this = this._subTextures;
		var subTexture = __map_reserved[name] != null?_this.getReserved(name):_this.h[name];
		if(subTexture != null) {
			return subTexture.get_rotated();
		} else {
			return false;
		}
	}
	,addRegion: function(name,region,frame,rotated) {
		if(rotated == null) {
			rotated = false;
		}
		var v = new com_github_haxePixiGAF_data_textures_SubTexture(this._atlasTexture,region,false,frame,rotated);
		var _this = this._subTextures;
		if(__map_reserved[name] != null) {
			_this.setReserved(name,v);
		} else {
			_this.h[name] = v;
		}
		this._subTextureNames = null;
	}
	,removeRegion: function(name) {
		var _this = this._subTextures;
		var subTexture = __map_reserved[name] != null?_this.getReserved(name):_this.h[name];
		if(subTexture != null) {
			subTexture.destroy();
		}
		this._subTextures.remove(name);
		this._subTextureNames = null;
	}
	,get_texture: function() {
		return this._atlasTexture;
	}
	,__class__: com_github_haxePixiGAF_data_textures_TextureAtlas
};
var com_github_haxePixiGAF_display_IMaxSize = function() { };
com_github_haxePixiGAF_display_IMaxSize.__name__ = ["com","github","haxePixiGAF","display","IMaxSize"];
com_github_haxePixiGAF_display_IMaxSize.prototype = {
	__class__: com_github_haxePixiGAF_display_IMaxSize
};
var com_github_haxePixiGAF_display_IGAFDisplayObject = function() { };
com_github_haxePixiGAF_display_IGAFDisplayObject.__name__ = ["com","github","haxePixiGAF","display","IGAFDisplayObject"];
com_github_haxePixiGAF_display_IGAFDisplayObject.prototype = {
	__class__: com_github_haxePixiGAF_display_IGAFDisplayObject
};
var com_github_haxePixiGAF_display_GAFContainer = function() {
	PIXI.Container.call(this);
};
com_github_haxePixiGAF_display_GAFContainer.__name__ = ["com","github","haxePixiGAF","display","GAFContainer"];
com_github_haxePixiGAF_display_GAFContainer.__interfaces__ = [com_github_haxePixiGAF_display_IMaxSize,com_github_haxePixiGAF_display_IGAFDisplayObject];
com_github_haxePixiGAF_display_GAFContainer.__super__ = PIXI.Container;
com_github_haxePixiGAF_display_GAFContainer.prototype = $extend(PIXI.Container.prototype,{
	get_transformationMatrix: function() {
		return this.localTransform;
	}
	,set_transformationMatrix: function(matrix) {
		return this.localTransform = matrix;
	}
	,get_maxSize: function() {
		return this._maxSize;
	}
	,set_maxSize: function(value) {
		return this._maxSize = value;
	}
	,setFilterConfig: function(value,scale) {
		if(scale == null) {
			scale = 1;
		}
	}
	,invalidateOrientation: function() {
	}
	,get_pivotMatrix: function() {
		com_github_haxePixiGAF_display_GAFContainer.HELPER_MATRIX.identity();
		return com_github_haxePixiGAF_display_GAFContainer.HELPER_MATRIX;
	}
	,__class__: com_github_haxePixiGAF_display_GAFContainer
});
var com_github_haxePixiGAF_display_IGAFDebug = function() { };
com_github_haxePixiGAF_display_IGAFDebug.__name__ = ["com","github","haxePixiGAF","display","IGAFDebug"];
com_github_haxePixiGAF_display_IGAFDebug.prototype = {
	__class__: com_github_haxePixiGAF_display_IGAFDebug
};
var com_github_haxePixiGAF_display_IGAFImage = function() { };
com_github_haxePixiGAF_display_IGAFImage.__name__ = ["com","github","haxePixiGAF","display","IGAFImage"];
com_github_haxePixiGAF_display_IGAFImage.__interfaces__ = [com_github_haxePixiGAF_display_IGAFDisplayObject];
com_github_haxePixiGAF_display_IGAFImage.prototype = {
	__class__: com_github_haxePixiGAF_display_IGAFImage
};
var com_github_haxePixiGAF_display_GAFImage = $hx_exports["GAF"]["GAFImage"] = function(assetTexture) {
	this.__debugOriginalAlpha = null;
	this._assetTexture = assetTexture.clone();
	PIXI.Sprite.call(this,this._assetTexture.get_texture());
};
com_github_haxePixiGAF_display_GAFImage.__name__ = ["com","github","haxePixiGAF","display","GAFImage"];
com_github_haxePixiGAF_display_GAFImage.__interfaces__ = [com_github_haxePixiGAF_display_IGAFDebug,com_github_haxePixiGAF_display_IMaxSize,com_github_haxePixiGAF_display_IGAFImage];
com_github_haxePixiGAF_display_GAFImage.__super__ = PIXI.Sprite;
com_github_haxePixiGAF_display_GAFImage.prototype = $extend(PIXI.Sprite.prototype,{
	copy: function() {
		return new com_github_haxePixiGAF_display_GAFImage(this._assetTexture);
	}
	,invalidateOrientation: function() {
	}
	,set_debugColors: function(value) {
		return null;
	}
	,changeTexture: function(newTexture) {
		this.texture = newTexture.get_texture();
		this._assetTexture.copyFrom(newTexture);
	}
	,setFilterConfig: function(value,scale) {
		if(scale == null) {
			scale = 1;
		}
	}
	,__debugHighlight: function() {
		if(isNaN(this.__debugOriginalAlpha)) {
			this.__debugOriginalAlpha = this.alpha;
		}
		this.alpha = 1;
	}
	,__debugLowlight: function() {
		if(isNaN(this.__debugOriginalAlpha)) {
			this.__debugOriginalAlpha = this.alpha;
		}
		this.alpha = .05;
	}
	,__debugResetLight: function() {
		if(!isNaN(this.__debugOriginalAlpha)) {
			this.alpha = this.__debugOriginalAlpha;
			this.__debugOriginalAlpha = null;
		}
	}
	,updateTransformMatrix: function() {
	}
	,destroy: function(options) {
		this._assetTexture = null;
		PIXI.Sprite.prototype.destroy.call(this,options);
	}
	,isEquivalent: function(a,b,epsilon) {
		if(epsilon == null) {
			epsilon = 0.0001;
		}
		if(a - epsilon < b) {
			return a + epsilon > b;
		} else {
			return false;
		}
	}
	,set_pivotX: function(value) {
		return this.pivot.x = value;
	}
	,set_pivotY: function(value) {
		return this.pivot.y = value;
	}
	,get_scaleX: function() {
		return this.scale.x;
	}
	,get_scaleY: function() {
		return this.scale.y;
	}
	,get_skewX: function() {
		return this.skew.x;
	}
	,get_skewY: function() {
		return this.skew.y;
	}
	,get_maxSize: function() {
		return this._maxSize;
	}
	,set_maxSize: function(value) {
		return this._maxSize = value;
	}
	,get_assetTexture: function() {
		return this._assetTexture;
	}
	,get_pivotMatrix: function() {
		com_github_haxePixiGAF_utils_MatrixUtility.copyFrom(com_github_haxePixiGAF_display_GAFImage.HELPER_MATRIX,this._assetTexture.get_pivotMatrix());
		return com_github_haxePixiGAF_display_GAFImage.HELPER_MATRIX;
	}
	,get_transformationMatrix: function() {
		return this.localTransform;
	}
	,set_transformationMatrix: function(matrix) {
		return this.localTransform = matrix;
	}
	,get_textureSmoothing: function() {
		return "";
	}
	,set_textureSmoothing: function(value) {
		return "";
	}
	,__class__: com_github_haxePixiGAF_display_GAFImage
});
var com_github_haxePixiGAF_display_IAnimatable = function() { };
com_github_haxePixiGAF_display_IAnimatable.__name__ = ["com","github","haxePixiGAF","display","IAnimatable"];
com_github_haxePixiGAF_display_IAnimatable.prototype = {
	__class__: com_github_haxePixiGAF_display_IAnimatable
};
var com_github_haxePixiGAF_display_GAFMovieClip = $hx_exports["GAF"]["GAFMovieClip"] = function(gafTimeline,pFps,addToJuggler) {
	if(addToJuggler == null) {
		addToJuggler = true;
	}
	if(pFps == null) {
		pFps = -1;
	}
	this.__debugOriginalAlpha = null;
	this._totalFrames = 0;
	this._currentFrame = 0;
	this._finalFrame = 0;
	this._startFrame = 0;
	this._nextFrame = 0;
	this._previousTime = -1;
	this._lastFrameTime = 0;
	this._currentTime = 0;
	this._addToJuggler = false;
	this._alphaLessMax = false;
	this._useClipping = false;
	this._hasFilter = false;
	this._disposed = false;
	this._started = false;
	this._reverse = false;
	this._hidden = false;
	this._inPlay = false;
	this._masked = false;
	this._reset = false;
	this._skipFrames = true;
	this._loop = true;
	this._smoothing = "";
	com_github_haxePixiGAF_display_GAFContainer.call(this);
	this._gafTimeline = gafTimeline;
	this._config = gafTimeline.get_config();
	this._scale = gafTimeline.get_scale();
	this._contentScaleFactor = gafTimeline.get_contentScaleFactor();
	this._addToJuggler = addToJuggler;
	this.initialize(gafTimeline.get_textureAtlas(),gafTimeline.get_gafAsset());
	if(this._config.get_bounds() != null) {
		this._timelineBounds = this._config.get_bounds().clone();
	}
	if(pFps > 0) {
		this.set_fps(pFps);
	}
	this.draw();
};
com_github_haxePixiGAF_display_GAFMovieClip.__name__ = ["com","github","haxePixiGAF","display","GAFMovieClip"];
com_github_haxePixiGAF_display_GAFMovieClip.__interfaces__ = [com_github_haxePixiGAF_display_IAnimatable];
com_github_haxePixiGAF_display_GAFMovieClip.getTransformMatrix = function(displayObject,matrix) {
	com_github_haxePixiGAF_utils_MatrixUtility.copyFrom(matrix,displayObject.get_pivotMatrix());
	return matrix;
};
com_github_haxePixiGAF_display_GAFMovieClip.__super__ = com_github_haxePixiGAF_display_GAFContainer;
com_github_haxePixiGAF_display_GAFMovieClip.prototype = $extend(com_github_haxePixiGAF_display_GAFContainer.prototype,{
	getChildByID: function(id) {
		var _this = this._displayObjectsDictionary;
		return __map_reserved[id] != null?_this.getReserved(id):_this.h[id];
	}
	,getMaskByID: function(id) {
		var _this = this._stencilMasksDictionary;
		return __map_reserved[id] != null?_this.getReserved(id):_this.h[id];
	}
	,showMaskByID: function(id) {
		var _this = this._displayObjectsDictionary;
		var maskObject = __map_reserved[id] != null?_this.getReserved(id):_this.h[id];
		var maskAsDisplayObject = js_Boot.__cast(maskObject , PIXI.DisplayObject);
		var _this1 = this._stencilMasksDictionary;
		var stencilMaskObject = __map_reserved[id] != null?_this1.getReserved(id):_this1.h[id];
		if(maskObject != null && stencilMaskObject != null) {
			maskAsDisplayObject.mask = stencilMaskObject;
			this.addChild(stencilMaskObject);
			this.addChild(maskAsDisplayObject);
		} else {
			haxe_Log.trace("WARNING:mask object is missing. It might be disposed.",{ fileName : "GAFMovieClip.hx", lineNumber : 192, className : "com.github.haxePixiGAF.display.GAFMovieClip", methodName : "showMaskByID"});
		}
	}
	,hideMaskByID: function(id) {
		var _this = this._displayObjectsDictionary;
		var maskAsDisplayObject = js_Boot.__cast(__map_reserved[id] != null?_this.getReserved(id):_this.h[id] , PIXI.DisplayObject);
		var _this1 = this._stencilMasksDictionary;
		var stencilMaskObject = __map_reserved[id] != null?_this1.getReserved(id):_this1.h[id];
		if(stencilMaskObject != null) {
			if(stencilMaskObject.parent == this) {
				stencilMaskObject.parent.mask = null;
				this.removeChild(stencilMaskObject);
				this.removeChild(maskAsDisplayObject);
			}
		} else {
			haxe_Log.trace("WARNING:mask object is missing. It might be disposed.",{ fileName : "GAFMovieClip.hx", lineNumber : 218, className : "com.github.haxePixiGAF.display.GAFMovieClip", methodName : "hideMaskByID"});
		}
	}
	,clearSequence: function() {
		this._playingSequence = null;
	}
	,get_currentSequence: function() {
		var tmp = this.get_currentFrame();
		var sequence = this._config.get_animationSequences().getSequenceByFrame(tmp);
		if(sequence != null) {
			return sequence.get_id();
		}
		return null;
	}
	,setSequence: function(id,play) {
		if(play == null) {
			play = true;
		}
		this._playingSequence = this._config.get_animationSequences().getSequenceByID(id);
		if(this._playingSequence != null) {
			var startFrame = this._reverse?this._playingSequence.get_endFrameNo() - 1:this._playingSequence.get_startFrameNo();
			if(play) {
				this.gotoAndPlay(startFrame);
			} else {
				this.gotoAndStop(startFrame);
			}
		}
		return this._playingSequence;
	}
	,play: function(applyToAllChildren) {
		if(applyToAllChildren == null) {
			applyToAllChildren = false;
		}
		this._started = true;
		if(applyToAllChildren) {
			var i = this._mcVector.length;
			while(i-- > 0) this._mcVector[i]._started = true;
		}
		this._play(applyToAllChildren,true);
	}
	,stop: function(applyToAllChildren) {
		if(applyToAllChildren == null) {
			applyToAllChildren = false;
		}
		this._started = false;
		if(applyToAllChildren) {
			var i = this._mcVector.length;
			while(i-- > 0) this._mcVector[i]._started = false;
		}
		this._stop(applyToAllChildren,true);
	}
	,gotoAndStop: function(frame) {
		this.checkAndSetCurrentFrame(frame);
		this.stop();
	}
	,gotoAndPlay: function(frame) {
		this.checkAndSetCurrentFrame(frame);
		this.play();
	}
	,loopAll: function(loop) {
		var i = this._mcVector.length;
		while(i-- > 0) this._mcVector[i].set_loop(loop);
	}
	,advanceTime: function(passedTime) {
		if(this._previousTime == -1) {
			this._previousTime = passedTime;
		}
		var lTime = (passedTime - this._previousTime) / 1000;
		this._previousTime = passedTime;
		if(this._disposed) {
			return;
		} else if(this._config.get_disposed()) {
			this.destroy();
			return;
		}
		if(this._inPlay && this._frameDuration != Infinity) {
			this._currentTime += lTime;
			var framesToPlay = (this._currentTime - this._lastFrameTime) / this._frameDuration | 0;
			if(this._skipFrames) {
				var _g1 = 0;
				while(_g1 < framesToPlay) {
					var i = _g1++;
					if(this._inPlay) {
						this.changeCurrentFrame(i + 1 != framesToPlay);
					} else {
						if(!this._disposed) {
							this.draw();
						}
						break;
					}
				}
			} else if(framesToPlay > 0) {
				this.changeCurrentFrame(false);
			}
		}
		if(this._mcVector != null) {
			var _g11 = 0;
			var _g = this._mcVector.length;
			while(_g11 < _g) this._mcVector[_g11++].advanceTime(passedTime);
		}
		if(this._addToJuggler) {
			window.requestAnimationFrame($bind(this,this.advanceTime));
		}
	}
	,showBounds: function(value) {
		if(this._config.get_bounds() != null) {
			haxe_Log.trace("TODO showBounds",{ fileName : "GAFMovieClip.hx", lineNumber : 430, className : "com.github.haxePixiGAF.display.GAFMovieClip", methodName : "showBounds"});
		}
	}
	,copy: function() {
		return new com_github_haxePixiGAF_display_GAFMovieClip(this._gafTimeline,this.get_fps() | 0,this._addToJuggler);
	}
	,getField: function(pName) {
		if(!Object.prototype.hasOwnProperty.call(this,pName)) {
			throw new js__$Boot_HaxeError("Field " + pName + " does not exist.");
		}
		return Reflect.field(this,pName);
	}
	,_gotoAndStop: function(frame) {
		this.checkAndSetCurrentFrame(frame);
		this._stop();
	}
	,_play: function(applyToAllChildren,calledByUser) {
		if(calledByUser == null) {
			calledByUser = false;
		}
		if(applyToAllChildren == null) {
			applyToAllChildren = false;
		}
		if(this._inPlay && !applyToAllChildren) {
			return;
		}
		var l = 0;
		if(this._totalFrames > 1) {
			this._inPlay = true;
		}
		if(applyToAllChildren && this._config.get_animationConfigFrames().get_frames().length > 0) {
			var frameConfig = this._config.get_animationConfigFrames().get_frames()[this._currentFrame];
			if(frameConfig.get_actions() != null) {
				var action;
				var l1 = frameConfig.get_actions().length;
				var _g1 = 0;
				var _g = l1;
				while(_g1 < _g) {
					var i = _g1++;
					action = frameConfig.get_actions()[i];
					if(action.type == 0 || action.type == 2 && Std.parseInt(action.params[0]) == this.get_currentFrame()) {
						this._inPlay = false;
						return;
					}
				}
			}
			var child;
			var childMC;
			l = this.children.length;
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				child = js_Boot.__cast(this.getChildAt(_g11++) , PIXI.Container);
				if(js_Boot.__instanceof(child,com_github_haxePixiGAF_display_GAFMovieClip)) {
					childMC = js_Boot.__cast(child , com_github_haxePixiGAF_display_GAFMovieClip);
					if(calledByUser) {
						childMC.play(true);
					} else {
						childMC._play(true);
					}
				}
			}
		}
		this.runActions();
		this._reset = false;
	}
	,_stop: function(applyToAllChildren,calledByUser) {
		if(calledByUser == null) {
			calledByUser = false;
		}
		if(applyToAllChildren == null) {
			applyToAllChildren = false;
		}
		this._inPlay = false;
		if(applyToAllChildren && this._config.get_animationConfigFrames().get_frames().length > 0) {
			var child;
			var childMC;
			var _g1 = 0;
			var _g = this.children.length;
			while(_g1 < _g) {
				child = js_Boot.__cast(this.getChildAt(_g1++) , PIXI.Container);
				if(js_Boot.__instanceof(child,com_github_haxePixiGAF_display_GAFMovieClip)) {
					childMC = js_Boot.__cast(child , com_github_haxePixiGAF_display_GAFMovieClip);
					if(calledByUser) {
						childMC.stop(true);
					} else {
						childMC._stop(true);
					}
				}
			}
		}
	}
	,checkPlaybackEvents: function() {
		var sequence;
		if(com_github_haxePixiGAF_utils_EventEmitterUtility.hasEventListener(this,"typeSequenceStart")) {
			var tmp = this._currentFrame + 1;
			sequence = this._config.get_animationSequences().getSequenceStart(tmp);
			if(sequence != null) {
				this.emit("typeSequenceStart",{ target : this, bubbles : false, data : sequence});
			}
		}
		if(com_github_haxePixiGAF_utils_EventEmitterUtility.hasEventListener(this,"typeSequenceEnd")) {
			var tmp1 = this._currentFrame + 1;
			sequence = this._config.get_animationSequences().getSequenceEnd(tmp1);
			if(sequence != null) {
				this.emit("typeSequenceEnd",{ target : this, bubbles : false, data : sequence});
			}
		}
		if(com_github_haxePixiGAF_utils_EventEmitterUtility.hasEventListener(this,"complete")) {
			if(this._currentFrame == this._finalFrame) {
				this.emit("complete");
			}
		}
	}
	,runActions: function() {
		if(this._config.get_animationConfigFrames().get_frames().length == 0) {
			return;
		}
		var actions = this._config.get_animationConfigFrames().get_frames()[this._currentFrame].get_actions();
		if(actions != null) {
			var action;
			var l = actions.length;
			var _g1 = 0;
			var _g = l;
			while(_g1 < _g) {
				action = actions[_g1++];
				switch(action.type) {
				case 0:
					this.stop();
					break;
				case 1:
					this.play();
					break;
				case 2:
					this.gotoAndStop(action.params[0]);
					break;
				case 3:
					this.gotoAndPlay(action.params[0]);
					break;
				case 4:
					haxe_Log.trace("CFrameAction.DISPATCH_EVENT",{ fileName : "GAFMovieClip.hx", lineNumber : 626, className : "com.github.haxePixiGAF.display.GAFMovieClip", methodName : "runActions"});
					var actionType = action.params[0];
					if(com_github_haxePixiGAF_utils_EventEmitterUtility.hasEventListener(this,actionType)) {
						var bubbles = false;
						var data = null;
						switch(action.params.length) {
						case 2:
							bubbles = js_Boot.__cast(action.params[1] , Bool);
							break;
						case 3:
							bubbles = js_Boot.__cast(action.params[1] , Bool);
							break;
						case 4:
							data = action.params[3];
							break;
						}
						this.emit(actionType,{ target : this, bubbles : bubbles, data : data});
					}
					break;
				}
			}
		}
	}
	,checkAndSetCurrentFrame: function(frame) {
		if(typeof(frame) == "number" && ((frame | 0) === frame) && js_Boot.__cast(frame , Int) > 0) {
			if(frame > this._totalFrames) {
				frame = this._totalFrames;
			}
		} else if(typeof(frame) == "string") {
			var label = frame;
			frame = this._config.get_animationSequences().getStartFrameNo(label);
			if(frame == 0) {
				throw new js__$Boot_HaxeError("Frame label " + label + " not found");
			}
		} else {
			frame = 1;
		}
		if(this._playingSequence != null && !this._playingSequence.isSequenceFrame(frame)) {
			this._playingSequence = null;
		}
		if(this._currentFrame != frame - 1) {
			this._currentFrame = js_Boot.__cast(frame , Int) - 1;
			this.runActions();
			if(!this._disposed) {
				this.draw();
			}
		}
	}
	,clearDisplayList: function() {
		this.removeChildren();
	}
	,draw: function() {
		var i = 0;
		var l = 0;
		if(this._config.get_debugRegions() != null) {
			this.clearDisplayList();
		} else {
			var l1 = this._displayObjectsVector.length;
			var _g1 = 0;
			var _g = l1;
			while(_g1 < _g) this._displayObjectsVector[_g1++].alpha = 0;
			l1 = this._mcVector.length;
			var _g11 = 0;
			var _g2 = l1;
			while(_g11 < _g2) this._mcVector[_g11++]._hidden = true;
		}
		var frames = this._config.get_animationConfigFrames().get_frames();
		if(frames.length > this._currentFrame) {
			var mc;
			var objectPivotMatrix;
			var displayObject;
			var instance;
			var stencilMaskObject;
			var animationObjectsDictionary = this._config.get_animationObjects().get_animationObjectsDictionary();
			var frameConfig = frames[this._currentFrame];
			var instances = frameConfig.get_instances();
			l = instances.length;
			i = 0;
			while(i < l) {
				instance = instances[i++];
				var key = instance.get_id();
				var _this = this._displayObjectsDictionary;
				if(__map_reserved[key] != null) {
					displayObject = _this.getReserved(key);
				} else {
					displayObject = _this.h[key];
				}
				if(displayObject != null) {
					objectPivotMatrix = com_github_haxePixiGAF_display_GAFMovieClip.getTransformMatrix(displayObject,com_github_haxePixiGAF_display_GAFContainer.HELPER_MATRIX);
					if(js_Boot.__instanceof(displayObject,com_github_haxePixiGAF_display_GAFMovieClip)) {
						mc = js_Boot.__cast(displayObject , com_github_haxePixiGAF_display_GAFMovieClip);
					} else {
						mc = null;
					}
					if(mc != null) {
						if(instance.get_alpha() < 0) {
							mc.reset();
						} else if(mc._reset && mc._started) {
							mc._play(true);
						}
						mc._hidden = false;
					}
					if(instance.get_alpha() <= 0) {
						continue;
					}
					displayObject.alpha = instance.get_alpha();
					var key1 = instance.get_id();
					if(!(__map_reserved[key1] != null?animationObjectsDictionary.getReserved(key1):animationObjectsDictionary.h[key1]).get_mask()) {
						if(instance.get_maskID() != "") {
							this.renderDebug(mc,instance,true);
							var key2 = instance.get_maskID();
							var _this1 = this._stencilMasksDictionary;
							if(__map_reserved[key2] != null) {
								stencilMaskObject = _this1.getReserved(key2);
							} else {
								stencilMaskObject = _this1.h[key2];
							}
							if(stencilMaskObject != null) {
								instance.applyTransformMatrix(displayObject.get_transformationMatrix(),objectPivotMatrix,this._scale);
								displayObject.invalidateOrientation();
								(js_Boot.__cast(displayObject , PIXI.DisplayObject)).mask = stencilMaskObject;
								this.addChild(stencilMaskObject);
								this.addChild(js_Boot.__cast(displayObject , PIXI.DisplayObject));
							}
						} else {
							this.renderDebug(mc,instance,this._masked);
							instance.applyTransformMatrix(displayObject.get_transformationMatrix(),objectPivotMatrix,this._scale);
							displayObject.invalidateOrientation();
							displayObject.setFilterConfig(instance.get_filter(),this._scale);
							this.addChild(js_Boot.__cast(displayObject , PIXI.DisplayObject));
						}
						if(mc != null && mc._started) {
							mc._play(true);
						}
						if(com_github_haxePixiGAF_utils_DebugUtility.RENDERING_DEBUG && js_Boot.__instanceof(displayObject,com_github_haxePixiGAF_display_IGAFDebug)) {
							(js_Boot.__cast(displayObject , com_github_haxePixiGAF_display_IGAFDebug)).set_debugColors(com_github_haxePixiGAF_utils_DebugUtility.getRenderingDifficultyColor(instance,this._alphaLessMax,this._masked,this._hasFilter));
						}
					} else {
						var key3 = instance.get_id();
						var _this2 = this._displayObjectsDictionary;
						var maskObject = __map_reserved[key3] != null?_this2.getReserved(key3):_this2.h[key3];
						if(maskObject != null) {
							var maskInstance = frameConfig.getInstanceByID(instance.get_id());
							if(maskInstance != null) {
								com_github_haxePixiGAF_display_GAFMovieClip.getTransformMatrix(maskObject,com_github_haxePixiGAF_display_GAFContainer.HELPER_MATRIX);
								maskInstance.applyTransformMatrix(maskObject.get_transformationMatrix(),com_github_haxePixiGAF_display_GAFContainer.HELPER_MATRIX,this._scale);
								maskObject.invalidateOrientation();
							} else {
								throw new js__$Boot_HaxeError("Unable to find mask with ID " + instance.get_id());
							}
							if(js_Boot.__instanceof(maskObject,com_github_haxePixiGAF_display_GAFMovieClip)) {
								mc = js_Boot.__cast(maskObject , com_github_haxePixiGAF_display_GAFMovieClip);
							} else {
								mc = null;
							}
							if(mc != null && mc._started) {
								mc._play(true);
							}
						}
					}
				}
			}
		}
		if(this._config.get_debugRegions() != null) {
			this.addDebugRegions();
		}
		this.checkPlaybackEvents();
	}
	,renderDebug: function(mc,instance,masked) {
		if(com_github_haxePixiGAF_utils_DebugUtility.RENDERING_DEBUG && mc != null) {
			haxe_Log.trace("TODO renderDebug",{ fileName : "GAFMovieClip.hx", lineNumber : 865, className : "com.github.haxePixiGAF.display.GAFMovieClip", methodName : "renderDebug"});
		}
	}
	,addDebugRegions: function() {
		haxe_Log.trace("TODO addDebugRegions",{ fileName : "GAFMovieClip.hx", lineNumber : 896, className : "com.github.haxePixiGAF.display.GAFMovieClip", methodName : "addDebugRegions"});
	}
	,reset: function() {
		this._gotoAndStop((this._reverse?this._finalFrame:this._startFrame) + 1);
		this._reset = true;
		this._currentTime = 0;
		this._lastFrameTime = 0;
		var i = this._mcVector.length;
		while(i-- > 0) this._mcVector[i].reset();
	}
	,initialize: function(textureAtlas,gafAsset) {
		this._displayObjectsDictionary = new haxe_ds_StringMap();
		this._stencilMasksDictionary = new haxe_ds_StringMap();
		this._displayObjectsVector = [];
		this._imagesVector = [];
		this._mcVector = [];
		this._currentFrame = 0;
		this._totalFrames = this._config.get_framesCount();
		this.set_fps(this._config.get_stageConfig() != null?this._config.get_stageConfig().fps:60);
		var animationObjectsDictionary = this._config.get_animationObjects().get_animationObjectsDictionary();
		var displayObject = null;
		var tmp = new haxe_ds__$StringMap_StringMapIterator(animationObjectsDictionary,animationObjectsDictionary.arrayKeys());
		while(tmp.hasNext()) {
			var animationObjectConfig = tmp.next();
			switch(animationObjectConfig.get_type()) {
			case "textField":
				displayObject = new com_github_haxePixiGAF_display_GAFTextField(this._config.get_textFields().get_textFieldObjectsDictionary().get(animationObjectConfig.get_regionID()),this._scale,this._contentScaleFactor);
				break;
			case "texture":
				var texture = textureAtlas.getTexture(animationObjectConfig.get_regionID());
				if(js_Boot.__instanceof(texture,com_github_haxePixiGAF_display_GAFScale9Texture) && !animationObjectConfig.get_mask()) {
					haxe_Log.trace("TODO initialize GAFScale9Texture",{ fileName : "GAFMovieClip.hx", lineNumber : 963, className : "com.github.haxePixiGAF.display.GAFMovieClip", methodName : "initialize"});
				} else {
					displayObject = new com_github_haxePixiGAF_display_GAFImage(texture);
					(js_Boot.__cast(displayObject , com_github_haxePixiGAF_display_GAFImage)).set_textureSmoothing(this._smoothing);
				}
				break;
			case "timeline":
				displayObject = new com_github_haxePixiGAF_display_GAFMovieClip(gafAsset.getGAFTimelineByID(animationObjectConfig.get_regionID()),this.get_fps() | 0,false);
				break;
			}
			if(animationObjectConfig.get_maxSize() != null && js_Boot.__instanceof(displayObject,com_github_haxePixiGAF_display_IMaxSize)) {
				(js_Boot.__cast(displayObject , com_github_haxePixiGAF_display_IMaxSize)).set_maxSize(new PIXI.Point(animationObjectConfig.get_maxSize().x * this._scale,animationObjectConfig.get_maxSize().y * this._scale));
			}
			this.addDisplayObject(animationObjectConfig.get_instanceID(),displayObject);
			if(animationObjectConfig.get_mask()) {
				this.addDisplayObject(animationObjectConfig.get_instanceID(),displayObject,true);
			}
			if(this._config.get_namedParts() != null) {
				var instanceName = this._config.get_namedParts().get(animationObjectConfig.get_instanceID());
				if(instanceName != null && !Object.prototype.hasOwnProperty.call(this,instanceName)) {
					this[this._config.get_namedParts().get(animationObjectConfig.get_instanceID())] = displayObject;
					displayObject.name = instanceName;
				}
			}
		}
		if(this._addToJuggler) {
			window.requestAnimationFrame($bind(this,this.advanceTime));
		}
	}
	,addDisplayObject: function(id,displayObject,asMask) {
		if(asMask == null) {
			asMask = false;
		}
		if(asMask) {
			var _this = this._stencilMasksDictionary;
			if(__map_reserved[id] != null) {
				_this.setReserved(id,displayObject);
			} else {
				_this.h[id] = displayObject;
			}
		} else {
			var v = js_Boot.__cast(displayObject , com_github_haxePixiGAF_display_IGAFDisplayObject);
			var _this1 = this._displayObjectsDictionary;
			if(__map_reserved[id] != null) {
				_this1.setReserved(id,v);
			} else {
				_this1.h[id] = v;
			}
			this._displayObjectsVector[this._displayObjectsVector.length] = js_Boot.__cast(displayObject , com_github_haxePixiGAF_display_IGAFDisplayObject);
			if(js_Boot.__instanceof(displayObject,com_github_haxePixiGAF_display_IGAFImage)) {
				this._imagesVector[this._imagesVector.length] = js_Boot.__cast(displayObject , com_github_haxePixiGAF_display_IGAFImage);
			} else if(js_Boot.__instanceof(displayObject,com_github_haxePixiGAF_display_GAFMovieClip)) {
				this._mcVector[this._mcVector.length] = js_Boot.__cast(displayObject , com_github_haxePixiGAF_display_GAFMovieClip);
			}
		}
	}
	,updateBounds: function(bounds) {
		haxe_Log.trace("TODO updateBounds",{ fileName : "GAFMovieClip.hx", lineNumber : 1034, className : "com.github.haxePixiGAF.display.GAFMovieClip", methodName : "updateBounds"});
	}
	,__debugHighlight: function() {
		if(isNaN(this.__debugOriginalAlpha)) {
			this.__debugOriginalAlpha = this.alpha;
		}
		this.alpha = 1;
	}
	,__debugLowlight: function() {
		if(isNaN(this.__debugOriginalAlpha)) {
			this.__debugOriginalAlpha = this.alpha;
		}
		this.alpha = .05;
	}
	,__debugResetLight: function() {
		if(!isNaN(this.__debugOriginalAlpha)) {
			this.alpha = this.__debugOriginalAlpha;
			this.__debugOriginalAlpha = null;
		}
	}
	,removeChildAt: function(index) {

		console.log("removeChildAt");

		haxe_Log.trace("TODO: removeChildAt",{ fileName : "GAFMovieClip.hx", lineNumber : 1104, className : "com.github.haxePixiGAF.display.GAFMovieClip", methodName : "removeChildAt"});
		this.getChildAt(index).destroy();
		return com_github_haxePixiGAF_display_GAFContainer.prototype.removeChildAt.call(this,index);
	}
	,getChildByName: function(name) {
		var numChildren = this._displayObjectsVector.length;
		var _g1 = 0;
		while(_g1 < numChildren) {
			var i = _g1++;
			if(this._displayObjectsVector[i].name == name) {
				return js_Boot.__cast(this._displayObjectsVector[i] , PIXI.DisplayObject);
			}
		}
		return com_github_haxePixiGAF_display_GAFContainer.prototype.getChildByName.call(this,name);
	}
	,destroy: function(options) {
		if(this._disposed) {
			return;
		}
		this.stop();
		var l = this._displayObjectsVector.length;
		var _g1 = 0;
		while(_g1 < l) this._displayObjectsVector[_g1++].destroy();

		var _this = this._stencilMasksDictionary;
		var tmp = new haxe_ds__$StringMap_StringMapIterator(_this,_this.arrayKeys());
		while(tmp.hasNext()) tmp.next().destroy();
		this._displayObjectsDictionary = null;
		this._stencilMasksDictionary = null;
		this._displayObjectsVector = null;
		this._imagesVector = null;
		this._gafTimeline = null;
		this._mcVector = null;
		this._config = null;
		if(this.parent != null) {
			this.parent.removeChild(this);
		}
		com_github_haxePixiGAF_display_GAFContainer.prototype.destroy.call(this,options);
		this._disposed = true;
	}
	,changeCurrentFrame: function(isSkipping) {
		this._nextFrame = this._currentFrame + (this._reverse?-1:1);
		this._startFrame = (this._playingSequence != null?this._playingSequence.get_startFrameNo():1) - 1;
		this._finalFrame = (this._playingSequence != null?this._playingSequence.get_endFrameNo():this._totalFrames) - 1;
		if(this._nextFrame >= this._startFrame && this._nextFrame <= this._finalFrame) {
			this._currentFrame = this._nextFrame;
			this._lastFrameTime += this._frameDuration;
		} else if(!this._loop) {
			this.stop();
		} else {
			this._currentFrame = this._reverse?this._finalFrame:this._startFrame;
			this._lastFrameTime += this._frameDuration;
		}
		this.runActions();
		if(this._disposed) {
			return;
		} else if(this._config.get_disposed()) {
			this.destroy();
			return;
		}
		if(!isSkipping) {
			this.draw();
		} else {
			this.checkPlaybackEvents();
		}
	}
	,get_currentFrame: function() {
		return this._currentFrame + 1;
	}
	,get_totalFrames: function() {
		return this._totalFrames;
	}
	,get_inPlay: function() {
		return this._inPlay;
	}
	,get_loop: function() {
		return this._loop;
	}
	,set_loop: function(loop) {
		return this._loop = loop;
	}
	,set_smoothing: function(value) {
		return null;
	}
	,get_smoothing: function() {
		return null;
	}
	,get_useClipping: function() {
		return this._useClipping;
	}
	,set_useClipping: function(value) {
		this._useClipping = value;
		if(!(this._useClipping && this._config.get_stageConfig() != null)) {
			this.mask = null;
		}
		return value;
	}
	,get_fps: function() {
		if(this._frameDuration == Infinity) {
			return 0;
		}
		return 1 / this._frameDuration;
	}
	,set_fps: function(value) {
		if(value <= 0) {
			this._frameDuration = Infinity;
		} else {
			this._frameDuration = 1 / value;
		}
		var i = this._mcVector.length;
		while(i-- > 0) this._mcVector[i].set_fps(value);
		return value;
	}
	,get_reverse: function() {
		return this._reverse;
	}
	,set_reverse: function(value) {
		this._reverse = value;
		var i = this._mcVector.length;
		while(i-- > 0) this._mcVector[i]._reverse = value;
		return this._reverse;
	}
	,get_skipFrames: function() {
		return this._skipFrames;
	}
	,set_skipFrames: function(value) {
		this._skipFrames = value;
		var i = this._mcVector.length;
		while(i-- > 0) this._mcVector[i]._skipFrames = value;
		return this._skipFrames;
	}
	,__class__: com_github_haxePixiGAF_display_GAFMovieClip
});
var com_github_haxePixiGAF_display_IGAFTexture = function() { };
com_github_haxePixiGAF_display_IGAFTexture.__name__ = ["com","github","haxePixiGAF","display","IGAFTexture"];
com_github_haxePixiGAF_display_IGAFTexture.prototype = {
	__class__: com_github_haxePixiGAF_display_IGAFTexture
};
var com_github_haxePixiGAF_display_GAFScale9Texture = function(id,texture,pivotMatrix,scale9Grid) {
	this._id = id;
	this._pivotMatrix = pivotMatrix;
	this._scale9Grid = scale9Grid;
	this.initialize();
};
com_github_haxePixiGAF_display_GAFScale9Texture.__name__ = ["com","github","haxePixiGAF","display","GAFScale9Texture"];
com_github_haxePixiGAF_display_GAFScale9Texture.__interfaces__ = [com_github_haxePixiGAF_display_IGAFTexture];
com_github_haxePixiGAF_display_GAFScale9Texture.prototype = {
	copyFrom: function(newTexture) {
		if(js_Boot.__instanceof(newTexture,com_github_haxePixiGAF_display_GAFScale9Texture)) {
			this._id = newTexture.get_id();
			this._texture = newTexture.get_texture();
			com_github_haxePixiGAF_utils_MatrixUtility.copyFrom(this._pivotMatrix,newTexture.get_pivotMatrix());
		} else {
			throw new js__$Boot_HaxeError("Incompatiable types GAFScale9Texture and " + Type.getClassName(newTexture == null?null:js_Boot.getClass(newTexture)));
		}
	}
	,initialize: function() {
	}
	,get_id: function() {
		return this._id;
	}
	,get_pivotMatrix: function() {
		return this._pivotMatrix;
	}
	,get_texture: function() {
		return this._texture;
	}
	,get_scale9Grid: function() {
		return this._scale9Grid;
	}
	,clone: function() {
		return null;
	}
	,__class__: com_github_haxePixiGAF_display_GAFScale9Texture
};
var com_github_haxePixiGAF_display_GAFTextField = $hx_exports["GAF"]["GAFTextField"] = function(config,scale,csf,debug) {
	if(debug == null) {
		debug = false;
	}
	if(csf == null) {
		csf = 1;
	}
	if(scale == null) {
		scale = 1;
	}
	this.__debugOriginalAlpha = null;
	com_github_haxePixiGAF_display_GAFContainer.call(this);
	config.get_textFormat().wordWrap = true;
	config.get_textFormat().wordWrapWidth = config.get_width()*2;
	this.textField = new PIXI.Text(config.get_text(),config.get_textFormat());

	if(isNaN(scale)) {
		scale = 1;
	}
	if(isNaN(csf)) {
		csf = 1;
	}
	this._scale = scale;
	this._csf = csf;
	
	//fixed
	if(config.get_textFormat().align == "left") {
		this.textField.x += config._pivotPoint.x + 3;
		this.textField.y += config._pivotPoint.y+3;
	} else

	if(config.get_textFormat().align == "center") {
		this.textField.anchor.x = 0.5;
		this.textField.x = config.get_width() / 2;

		this.textField.x += config._pivotPoint.x;
		this.textField.y += config._pivotPoint.y;

	} else if(config.get_textFormat().align == "right") {
		this.textField.anchor.x = 1;
		this.textField.x = config.get_width();
		this.textField.y = config.get_height() - config.get_height()/1;

		this.textField.x += config._pivotPoint.x;
		this.textField.y += config._pivotPoint.y;
	}

	debug = true;

	if(debug) {
		var lGraph = new PIXI.Graphics();
		lGraph.beginFill(65535);


		if(config.get_textFormat().align == "left") {
			lGraph.drawRect(config._pivotPoint.x,config._pivotPoint.y,config.get_width(),config.get_height());
		}
		else if(config.get_textFormat().align == "center") {
			lGraph.drawRect(config._pivotPoint.x, config._pivotPoint.y,config.get_width(),config.get_height());
		}
		else if(config.get_textFormat().align == "right") {
			lGraph.drawRect(config._pivotPoint.x, config._pivotPoint.y,config.get_width(),config.get_height());
		}


		lGraph.endFill();
		lGraph.alpha = 0.5;
		lGraph.alpha = 0;
		
		this.addChild(lGraph);
	}
	this.addChild(this.textField);
	this.invalidateSize();
	this._config = config;
};
com_github_haxePixiGAF_display_GAFTextField.__name__ = ["com","github","haxePixiGAF","display","GAFTextField"];
com_github_haxePixiGAF_display_GAFTextField.__interfaces__ = [com_github_haxePixiGAF_display_IGAFDebug];
com_github_haxePixiGAF_display_GAFTextField.__super__ = com_github_haxePixiGAF_display_GAFContainer;
com_github_haxePixiGAF_display_GAFTextField.prototype = $extend(com_github_haxePixiGAF_display_GAFContainer.prototype,{
	copy: function() {
		var clone = new com_github_haxePixiGAF_display_GAFTextField(this._config,this._scale,this._csf);
		clone.alpha = this.alpha;
		clone.visible = this.visible;
		clone.set_transformationMatrix(this.get_transformationMatrix());
		clone.setFilterConfig(this._filterConfig,this._filterScale);
		return clone;
	}
	,invalidateSize: function() {
	}
	,set_debugColors: function(value) {
		return null;
	}
	,setFilterConfig: function(value,scale) {
		if(scale == null) {
			scale = 1;
		}
		if(this._filterConfig != value || this._filterScale != scale) {
			if(value != null) {
				this._filterConfig = value;
				this._filterScale = scale;
			} else {
				this._filterConfig = null;
				this._filterScale = null;
			}
			this.applyFilter();
		}
	}
	,applyFilter: function() {
	}
	,__debugHighlight: function() {
		if(isNaN(this.__debugOriginalAlpha)) {
			this.__debugOriginalAlpha = this.alpha;
		}
		this.alpha = 1;
	}
	,__debugLowlight: function() {
		if(isNaN(this.__debugOriginalAlpha)) {
			this.__debugOriginalAlpha = this.alpha;
		}
		this.alpha = .05;
	}
	,__debugResetLight: function() {
		if(!isNaN(this.__debugOriginalAlpha)) {
			this.alpha = this.__debugOriginalAlpha;
			this.__debugOriginalAlpha = null;
		}
	}
	,destroy: function(options) {
		com_github_haxePixiGAF_display_GAFContainer.prototype.destroy.call(this,options);
		this._config = null;
	}
	,get_textWidth: function() {
		return com_github_haxePixiGAF_display_GAFTextField.HELPER_POINT.x;
	}
	,get_textHeight: function() {
		return com_github_haxePixiGAF_display_GAFTextField.HELPER_POINT.y;
	}
	,get_text: function() {
		return this.textField.text;
	}
	,set_text: function(pText) {
		return this.textField.text = pText;
	}
	,get_style: function() {
		return js_Boot.__cast(this.textField.style , PIXI.TextStyle);
	}
	,cloneTextFormat: function(textFormat) {
		if(textFormat == null) {
			throw new js__$Boot_HaxeError("Argument \"textFormat\" must be not null.");
		}
		var result = new PIXI.TextStyle();
		result.fontFamily = textFormat.fontFamily;
		result.fontSize = textFormat.fontSize;
		result.fill = textFormat.fill;
		result.fontWeight = textFormat.fontWeight;
		result.fontStyle = textFormat.fontStyle;
		result.align = textFormat.align;
		return result;
	}
	,__class__: com_github_haxePixiGAF_display_GAFTextField
});
var com_github_haxePixiGAF_display_GAFTexture = function(id,texture,pivotMatrix) {
	this._id = id;
	this._texture = texture;
	this._pivotMatrix = pivotMatrix;
};
com_github_haxePixiGAF_display_GAFTexture.__name__ = ["com","github","haxePixiGAF","display","GAFTexture"];
com_github_haxePixiGAF_display_GAFTexture.__interfaces__ = [com_github_haxePixiGAF_display_IGAFTexture];
com_github_haxePixiGAF_display_GAFTexture.prototype = {
	copyFrom: function(newTexture) {
		if(js_Boot.__instanceof(newTexture,com_github_haxePixiGAF_display_GAFTexture)) {
			this._id = newTexture.get_id();
			this._texture = newTexture.get_texture();
			com_github_haxePixiGAF_utils_MatrixUtility.copyFrom(this._pivotMatrix,newTexture.get_pivotMatrix());
		} else {
			throw new js__$Boot_HaxeError("Incompatiable types GAFexture and " + Type.getClassName(newTexture == null?null:js_Boot.getClass(newTexture)));
		}
	}
	,get_texture: function() {
		return this._texture;
	}
	,get_pivotMatrix: function() {
		return this._pivotMatrix;
	}
	,get_id: function() {
		return this._id;
	}
	,clone: function() {
		return new com_github_haxePixiGAF_display_GAFTexture(this._id,this._texture,this._pivotMatrix.clone());
	}
	,__class__: com_github_haxePixiGAF_display_GAFTexture
};
var com_github_haxePixiGAF_events_GAFEvent = $hx_exports["GAF"]["GAFEvent"] = function() { };
com_github_haxePixiGAF_events_GAFEvent.__name__ = ["com","github","haxePixiGAF","events","GAFEvent"];
var com_github_haxePixiGAF_sound_GAFSoundData = function() { };
com_github_haxePixiGAF_sound_GAFSoundData.__name__ = ["com","github","haxePixiGAF","sound","GAFSoundData"];
com_github_haxePixiGAF_sound_GAFSoundData.prototype = {
	addSound: function(soundData,swfName,soundBytes) {
	}
	,__class__: com_github_haxePixiGAF_sound_GAFSoundData
};
var com_github_haxePixiGAF_text_TextFormatAlign = function() { };
com_github_haxePixiGAF_text_TextFormatAlign.__name__ = ["com","github","haxePixiGAF","text","TextFormatAlign"];
var com_github_haxePixiGAF_utils_DebugUtility = function() { };
com_github_haxePixiGAF_utils_DebugUtility.__name__ = ["com","github","haxePixiGAF","utils","DebugUtility"];
com_github_haxePixiGAF_utils_DebugUtility.getRenderingDifficultyColor = function(instance,alphaLess1,masked,hasFilter) {
	if(hasFilter == null) {
		hasFilter = false;
	}
	if(masked == null) {
		masked = false;
	}
	if(alphaLess1 == null) {
		alphaLess1 = false;
	}
	var colors = [];
	if(instance.get_maskID() != null || masked) {
		colors.push(-65536);
	}
	if(instance.get_filter() != null || hasFilter) {
		colors.push(-16711681);
	}
	if(instance.get_alpha() < com_github_haxePixiGAF_data_GAF.get_maxAlpha() || alphaLess1) {
		colors.push(-256);
	}
	if(colors.length == 0) {
		colors.push(-858993460);
	}
	return colors;
};
com_github_haxePixiGAF_utils_DebugUtility.getColor = function(difficulty) {
	if(difficulty > 255) {
		difficulty = 255;
	}
	var colorArr = com_github_haxePixiGAF_utils_DebugUtility.getRGB(Math.floor(120 - 120 / (255 / difficulty)));
	return (difficulty >> 1) + 127 << 24 | colorArr[0] << 16 | colorArr[1] << 8;
};
com_github_haxePixiGAF_utils_DebugUtility.getRGB = function(rot) {
	var retVal = [];
	var aryNum = 0;
	while(rot < 0 || rot > 360) rot += rot < 0?360:-360;
	aryNum = Math.floor(rot / 60);
	retVal = com_github_haxePixiGAF_utils_DebugUtility.getH(rot,aryNum);
	return retVal;
};
com_github_haxePixiGAF_utils_DebugUtility.getH = function(rot,aryNum) {
	var retVal = [0,0,0];
	var nextNum = aryNum + 1;
	var _g = 0;
	while(_g < 3) {
		var i = _g++;
		retVal[i] = com_github_haxePixiGAF_utils_DebugUtility.getHP(com_github_haxePixiGAF_utils_DebugUtility.aryRGB[i],rot,aryNum,nextNum);
	}
	return retVal;
};
com_github_haxePixiGAF_utils_DebugUtility.getHP = function(_P,rot,aryNum,nextNum) {
	var retVal = 0;
	var aryC = 0;
	var nextC = 0;
	var rH = 0;
	var rotR;
	aryC = _P[aryNum];
	nextC = _P[nextNum];
	rotR = (aryC + nextC) / 60 * (rot - 60 * aryNum);
	rH = Math.floor(_P[nextNum] == 0?aryC - rotR:aryC + rotR);
	retVal = Math.round(Math.min(255,Math.abs(rH)));
	return retVal;
};
com_github_haxePixiGAF_utils_DebugUtility.getObjectMemoryHash = function(obj) {
	var memoryHash = null;
	try {
		haxe_Log.trace("TODO: FakeClass",{ fileName : "DebugUtility.hx", lineNumber : 120, className : "com.github.haxePixiGAF.utils.DebugUtility", methodName : "getObjectMemoryHash"});
	} catch( e ) {
		haxe_Log.trace("TODO: memoryHash",{ fileName : "DebugUtility.hx", lineNumber : 126, className : "com.github.haxePixiGAF.utils.DebugUtility", methodName : "getObjectMemoryHash"});
		memoryHash = "TODO: memoryHash";
	}
	return memoryHash;
};
var com_github_haxePixiGAF_utils_EventEmitterUtility = function() { };
com_github_haxePixiGAF_utils_EventEmitterUtility.__name__ = ["com","github","haxePixiGAF","utils","EventEmitterUtility"];
com_github_haxePixiGAF_utils_EventEmitterUtility.hasEventListener = function(pEmitter,pEvent) {
	if($bind(pEmitter,pEmitter.listeners) == null) {
		return false;
	}
	return pEmitter.listeners(pEvent).length > 0;
};
var haxe_io_Input = function() { };
haxe_io_Input.__name__ = ["haxe","io","Input"];
haxe_io_Input.prototype = {
	readByte: function() {
		throw new js__$Boot_HaxeError("Not implemented");
	}
	,readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) {
			throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		}
		try {
			while(k > 0) {
				b[pos] = this.readByte();
				++pos;
				--k;
			}
		} catch( eof ) {
			if (eof instanceof js__$Boot_HaxeError) eof = eof.val;
			if( js_Boot.__instanceof(eof,haxe_io_Eof) ) {
			} else throw(eof);
		}
		return len - k;
	}
	,close: function() {
	}
	,set_bigEndian: function(b) {
		this.bigEndian = b;
		return b;
	}
	,readFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.readBytes(s,pos,len);
			if(k == 0) {
				throw new js__$Boot_HaxeError(haxe_io_Error.Blocked);
			}
			pos += k;
			len -= k;
		}
	}
	,readUInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		if(this.bigEndian) {
			return ch2 | ch1 << 8;
		} else {
			return ch1 | ch2 << 8;
		}
	}
	,readInt32: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var ch4 = this.readByte();
		if(this.bigEndian) {
			return ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24;
		} else {
			return ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
		}
	}
	,readString: function(len) {
		var b = new haxe_io_Bytes(new ArrayBuffer(len));
		this.readFullBytes(b,0,len);
		return b.toString();
	}
	,__class__: haxe_io_Input
};
var haxe_io_BytesInput = function(b,pos,len) {
	if(pos == null) {
		pos = 0;
	}
	if(len == null) {
		len = b.length - pos;
	}
	if(pos < 0 || len < 0 || pos + len > b.length) {
		throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
	}
	this.b = b.b;
	this.pos = pos;
	this.len = len;
	this.totlen = len;
};
haxe_io_BytesInput.__name__ = ["haxe","io","BytesInput"];
haxe_io_BytesInput.__super__ = haxe_io_Input;
haxe_io_BytesInput.prototype = $extend(haxe_io_Input.prototype,{
	set_position: function(p) {
		if(p < 0) {
			p = 0;
		} else if(p > this.totlen) {
			p = this.totlen;
		}
		this.len = this.totlen - p;
		return this.pos = p;
	}
	,readByte: function() {
		if(this.len == 0) {
			throw new js__$Boot_HaxeError(new haxe_io_Eof());
		}
		this.len--;
		return this.b[this.pos++];
	}
	,readBytes: function(buf,pos,len) {
		if(pos < 0 || len < 0 || pos + len > buf.length) {
			throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		}
		if(this.len == 0 && len > 0) {
			throw new js__$Boot_HaxeError(new haxe_io_Eof());
		}
		if(this.len < len) {
			len = this.len;
		}
		var b1 = this.b;
		var b2 = buf.b;
		var _g1 = 0;
		var _g = len;
		while(_g1 < _g) {
			var i = _g1++;
			b2[pos + i] = b1[this.pos + i];
		}
		this.pos += len;
		this.len -= len;
		return len;
	}
	,__class__: haxe_io_BytesInput
});
var com_github_haxePixiGAF_utils_GAFBytesInput = function(b,pos,len) {
	haxe_io_BytesInput.call(this,b,pos,len);
};
com_github_haxePixiGAF_utils_GAFBytesInput.__name__ = ["com","github","haxePixiGAF","utils","GAFBytesInput"];
com_github_haxePixiGAF_utils_GAFBytesInput.__super__ = haxe_io_BytesInput;
com_github_haxePixiGAF_utils_GAFBytesInput.prototype = $extend(haxe_io_BytesInput.prototype,{
	readSByte: function() {
		var lByte = this.readByte();
		if(lByte > 128) {
			return lByte - 256;
		} else {
			return lByte;
		}
	}
	,readUnsignedByte: function() {
		return this.readByte();
	}
	,readShort: function() {
		var lByte = this.readUInt16();
		if(lByte > 32767) {
			return lByte - 65536;
		} else {
			return lByte;
		}
	}
	,readUnsignedShort: function() {
		return this.readUInt16();
	}
	,readInt: function() {
		return this.readUInt32();
	}
	,readUnsignedInt: function() {
		return this.readUInt32();
	}
	,readUInt32: function() {
		var lA = this.readUInt16();
		var lB = this.readUInt16();
		return (lB << 16) + lA;
	}
	,readBoolean: function() {
		return this.readSByte() != 0;
	}
	,readUTF: function() {
		return this.readString(this.readUnsignedShort());
	}
	,__class__: com_github_haxePixiGAF_utils_GAFBytesInput
});
var com_github_haxePixiGAF_utils_MathUtility = function() { };
com_github_haxePixiGAF_utils_MathUtility.__name__ = ["com","github","haxePixiGAF","utils","MathUtility"];
com_github_haxePixiGAF_utils_MathUtility.equals = function(a,b) {
	if(isNaN(a) || isNaN(b)) {
		return false;
	}
	return Math.abs(a - b) < 0.00001;
};
com_github_haxePixiGAF_utils_MathUtility.getItemIndex = function(source,target) {
	var _g1 = 0;
	var _g = source.length;
	while(_g1 < _g) {
		var i = _g1++;
		var a = source[i];
		if(isNaN(a) || isNaN(target)?false:Math.abs(a - target) < 0.00001) {
			return i;
		}
	}
	return -1;
};
var com_github_haxePixiGAF_utils_MatrixUtility = function() { };
com_github_haxePixiGAF_utils_MatrixUtility.__name__ = ["com","github","haxePixiGAF","utils","MatrixUtility"];
com_github_haxePixiGAF_utils_MatrixUtility.concat = function(pA,pB) {
	var lMatrix = new PIXI.Matrix();
	lMatrix.a = pB.a * pA.a + pB.c * pA.b;
	lMatrix.b = pB.b * pA.a + pB.d * pA.b;
	lMatrix.c = pB.a * pA.c + pB.c * pA.d;
	lMatrix.d = pB.b * pA.c + pB.d * pA.d;
	lMatrix.tx = pB.a * pA.tx + pB.c * pA.ty + pB.tx;
	lMatrix.ty = pB.b * pA.tx + pB.d * pA.ty + pB.ty;
	lMatrix.copy(pA);
};
com_github_haxePixiGAF_utils_MatrixUtility.copyFrom = function(pA,pB) {
	pB.copy(pA);
};
var com_github_haxePixiGAF_utils_RectangleUtility = function() { };
com_github_haxePixiGAF_utils_RectangleUtility.__name__ = ["com","github","haxePixiGAF","utils","RectangleUtility"];
com_github_haxePixiGAF_utils_RectangleUtility.copyFrom = function(pA,pB) {
	pA.x = pB.x;
	pA.y = pB.y;
	pA.width = pB.width;
	pA.height = pB.height;
};
com_github_haxePixiGAF_utils_RectangleUtility.union = function(pA,pB) {
	var lX = Math.min(pA.x,pB.x);
	var lY = Math.min(pA.y,pB.y);
	return new PIXI.Rectangle(lX,lY,Math.max(pA.x + pA.width,pB.x + pB.width) - lX,Math.max(pA.y + pA.height,pB.y + pB.height) - lY);
};
var com_github_haxePixiGAF_utils_VectorUtility = function() { };
com_github_haxePixiGAF_utils_VectorUtility.__name__ = ["com","github","haxePixiGAF","utils","VectorUtility"];
com_github_haxePixiGAF_utils_VectorUtility.fillMatrix = function(v,a00,a01,a02,a03,a04,a10,a11,a12,a13,a14,a20,a21,a22,a23,a24,a30,a31,a32,a33,a34) {
	v[0] = a00;
	v[1] = a01;
	v[2] = a02;
	v[3] = a03;
	v[4] = a04;
	v[5] = a10;
	v[6] = a11;
	v[7] = a12;
	v[8] = a13;
	v[9] = a14;
	v[10] = a20;
	v[11] = a21;
	v[12] = a22;
	v[13] = a23;
	v[14] = a24;
	v[15] = a30;
	v[16] = a31;
	v[17] = a32;
	v[18] = a33;
	v[19] = a34;
};
com_github_haxePixiGAF_utils_VectorUtility.copyMatrix = function(source,dest) {
	var l = dest.length;
	var _g1 = 0;
	while(_g1 < l) {
		var i = _g1++;
		source[i] = dest[i];
	}
};
var haxe_IMap = function() { };
haxe_IMap.__name__ = ["haxe","IMap"];
haxe_IMap.prototype = {
	__class__: haxe_IMap
};
var haxe_Log = function() { };
haxe_Log.__name__ = ["haxe","Log"];
haxe_Log.trace = function(v,infos) {
	js_Boot.__trace(v,infos);
};
var haxe_ds_ObjectMap = function() {
	this.h = { __keys__ : { }};
};
haxe_ds_ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe_ds_ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) {
			return false;
		}
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) {
			a.push(this.h.__keys__[key]);
		}
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
	,__class__: haxe_ds_ObjectMap
};
var haxe_ds__$StringMap_StringMapIterator = function(map,keys) {
	this.map = map;
	this.keys = keys;
	this.index = 0;
	this.count = keys.length;
};
haxe_ds__$StringMap_StringMapIterator.__name__ = ["haxe","ds","_StringMap","StringMapIterator"];
haxe_ds__$StringMap_StringMapIterator.prototype = {
	hasNext: function() {
		return this.index < this.count;
	}
	,next: function() {
		var _this = this.map;
		var key = this.keys[this.index++];
		if(__map_reserved[key] != null) {
			return _this.getReserved(key);
		} else {
			return _this.h[key];
		}
	}
	,__class__: haxe_ds__$StringMap_StringMapIterator
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
haxe_ds_StringMap.__name__ = ["haxe","ds","StringMap"];
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	set: function(key,value) {
		if(__map_reserved[key] != null) {
			this.setReserved(key,value);
		} else {
			this.h[key] = value;
		}
	}
	,get: function(key) {
		if(__map_reserved[key] != null) {
			return this.getReserved(key);
		}
		return this.h[key];
	}
	,setReserved: function(key,value) {
		if(this.rh == null) {
			this.rh = { };
		}
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) {
			return null;
		} else {
			return this.rh["$" + key];
		}
	}
	,existsReserved: function(key) {
		if(this.rh == null) {
			return false;
		}
		return this.rh.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		if(__map_reserved[key] != null) {
			key = "$" + key;
			if(this.rh == null || !this.rh.hasOwnProperty(key)) {
				return false;
			}
			delete(this.rh[key]);
			return true;
		} else {
			if(!this.h.hasOwnProperty(key)) {
				return false;
			}
			delete(this.h[key]);
			return true;
		}
	}
	,keys: function() {
		return HxOverrides.iter(this.arrayKeys());
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) {
			out.push(key);
		}
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) {
				out.push(key.substr(1));
			}
			}
		}
		return out;
	}
	,iterator: function() {
		return new haxe_ds__$StringMap_StringMapIterator(this,this.arrayKeys());
	}
	,__class__: haxe_ds_StringMap
};
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
haxe_io_Bytes.__name__ = ["haxe","io","Bytes"];
haxe_io_Bytes.ofData = function(b) {
	var hb = b.hxBytes;
	if(hb != null) {
		return hb;
	}
	return new haxe_io_Bytes(b);
};
haxe_io_Bytes.prototype = {
	getString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) {
			throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		}
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) {
					break;
				}
				s += fcc(c);
			} else if(c < 224) {
				s += fcc((c & 63) << 6 | b[i++] & 127);
			} else if(c < 240) {
				s += fcc((c & 31) << 12 | (b[i++] & 127) << 6 | b[i++] & 127);
			} else {
				var u = (c & 15) << 18 | (b[i++] & 127) << 12 | (b[i++] & 127) << 6 | b[i++] & 127;
				s += fcc((u >> 10) + 55232);
				s += fcc(u & 1023 | 56320);
			}
		}
		return s;
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,__class__: haxe_io_Bytes
};
var haxe_io_Eof = function() {
};
haxe_io_Eof.__name__ = ["haxe","io","Eof"];
haxe_io_Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe_io_Eof
};
var haxe_io_Error = { __ename__ : true, __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe_io_Error.Blocked = ["Blocked",0];
haxe_io_Error.Blocked.toString = $estr;
haxe_io_Error.Blocked.__enum__ = haxe_io_Error;
haxe_io_Error.Overflow = ["Overflow",1];
haxe_io_Error.Overflow.toString = $estr;
haxe_io_Error.Overflow.__enum__ = haxe_io_Error;
haxe_io_Error.OutsideBounds = ["OutsideBounds",2];
haxe_io_Error.OutsideBounds.toString = $estr;
haxe_io_Error.OutsideBounds.__enum__ = haxe_io_Error;
haxe_io_Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe_io_Error; $x.toString = $estr; return $x; };
var haxe_io_FPHelper = function() { };
haxe_io_FPHelper.__name__ = ["haxe","io","FPHelper"];
haxe_io_FPHelper.i32ToFloat = function(i) {
	var sign = 1 - (i >>> 31 << 1);
	var exp = i >>> 23 & 255;
	var sig = i & 8388607;
	if(sig == 0 && exp == 0) {
		return 0.0;
	}
	return sign * (1 + Math.pow(2,-23) * sig) * Math.pow(2,exp - 127);
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) {
		Error.captureStackTrace(this,js__$Boot_HaxeError);
	}
};
js__$Boot_HaxeError.__name__ = ["js","_Boot","HaxeError"];
js__$Boot_HaxeError.wrap = function(val) {
	if((val instanceof Error)) {
		return val;
	} else {
		return new js__$Boot_HaxeError(val);
	}
};
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
js_Boot.__name__ = ["js","Boot"];
js_Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js_Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js_Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js_Boot.__string_rec(v1,"");
		}
	}
	var d;
	var tmp;
	if(typeof(document) != "undefined") {
		d = document.getElementById("haxe:trace");
		tmp = d != null;
	} else {
		tmp = false;
	}
	if(tmp) {
		d.innerHTML += js_Boot.__unhtml(msg) + "<br/>";
	} else if(typeof console != "undefined" && console.log != null) {
		//fixed
		//console.log(msg);
	}
};
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + js_Boot.__string_rec(o[i],s);
					} else {
						str += js_Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = intf[_g1++];
			if(i == cl || js_Boot.__interfLoop(i,cl)) {
				return true;
			}
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		if((o instanceof Array)) {
			return o.__enum__ == null;
		} else {
			return false;
		}
		break;
	case Bool:
		return typeof(o) == "boolean";
	case Dynamic:
		return true;
	case Float:
		return typeof(o) == "number";
	case Int:
		if(typeof(o) == "number") {
			return (o|0) === o;
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) {
					return true;
				}
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == Class && o.__name__ != null) {
			return true;
		}
		if(cl == Enum && o.__ename__ != null) {
			return true;
		}
		return o.__enum__ == cl;
	}
};
js_Boot.__cast = function(o,t) {
	if(js_Boot.__instanceof(o,t)) {
		return o;
	} else {
		throw new js__$Boot_HaxeError("Cannot cast " + Std.string(o) + " to " + Std.string(t));
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var js_html_compat_ArrayBuffer = function(a) {
	if((a instanceof Array) && a.__enum__ == null) {
		this.a = a;
		this.byteLength = a.length;
	} else {
		var len = a;
		this.a = [];
		var _g1 = 0;
		var _g = len;
		while(_g1 < _g) this.a[_g1++] = 0;
		this.byteLength = len;
	}
};
js_html_compat_ArrayBuffer.__name__ = ["js","html","compat","ArrayBuffer"];
js_html_compat_ArrayBuffer.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null?null:end - begin);
	var result = new ArrayBuffer(u.byteLength);
	new Uint8Array(result).set(u);
	return result;
};
js_html_compat_ArrayBuffer.prototype = {
	slice: function(begin,end) {
		return new js_html_compat_ArrayBuffer(this.a.slice(begin,end));
	}
	,__class__: js_html_compat_ArrayBuffer
};
var js_html_compat_Uint8Array = function() { };
js_html_compat_Uint8Array.__name__ = ["js","html","compat","Uint8Array"];
js_html_compat_Uint8Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g1 = 0;
		var _g = arg1;
		while(_g1 < _g) {
			var i = _g1++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else if(js_Boot.__instanceof(arg1,js_html_compat_ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) {
			offset = 0;
		}
		if(length == null) {
			length = buffer.byteLength - offset;
		}
		if(offset == 0) {
			arr = buffer.a;
		} else {
			arr = buffer.a.slice(offset,offset + length);
		}
		arr.byteLength = arr.length;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else {
		throw new js__$Boot_HaxeError("TODO " + Std.string(arg1));
	}
	arr.subarray = js_html_compat_Uint8Array._subarray;
	arr.set = js_html_compat_Uint8Array._set;
	return arr;
};
js_html_compat_Uint8Array._set = function(arg,offset) {
	if(js_Boot.__instanceof(arg.buffer,js_html_compat_ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > this.byteLength) {
			throw new js__$Boot_HaxeError("set() outside of range");
		}
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			this[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > this.byteLength) {
			throw new js__$Boot_HaxeError("set() outside of range");
		}
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			this[i1 + offset] = a1[i1];
		}
	} else {
		throw new js__$Boot_HaxeError("TODO");
	}
};
js_html_compat_Uint8Array._subarray = function(start,end) {
	var a = js_html_compat_Uint8Array._new(this.slice(start,end));
	a.byteOffset = start;
	return a;
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.prototype.__class__ = String;
String.__name__ = ["String"];
Array.__name__ = ["Array"];
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
Object.defineProperty(com_github_haxePixiGAF_core_ZipToGAFAssetConverter.prototype,"gafBundle",{ get : com_github_haxePixiGAF_core_ZipToGAFAssetConverter.prototype.get_gafBundle});
Object.defineProperty(com_github_haxePixiGAF_data_GAFBundle.prototype,"name",{ get : com_github_haxePixiGAF_data_GAFBundle.prototype.get_name, set : com_github_haxePixiGAF_data_GAFBundle.prototype.set_name});
Object.defineProperty(com_github_haxePixiGAF_data_GAFTimeline.prototype,"id",{ get : com_github_haxePixiGAF_data_GAFTimeline.prototype.get_id});
Object.defineProperty(com_github_haxePixiGAF_data_GAFTimeline.prototype,"linkage",{ get : com_github_haxePixiGAF_data_GAFTimeline.prototype.get_linkage});
Object.defineProperty(com_github_haxePixiGAF_data_GAFTimeline.prototype,"scale",{ get : com_github_haxePixiGAF_data_GAFTimeline.prototype.get_scale, set : com_github_haxePixiGAF_data_GAFTimeline.prototype.set_scale});
Object.defineProperty(com_github_haxePixiGAF_data_GAFTimeline.prototype,"contentScaleFactor",{ get : com_github_haxePixiGAF_data_GAFTimeline.prototype.get_contentScaleFactor, set : com_github_haxePixiGAF_data_GAFTimeline.prototype.set_contentScaleFactor});
Object.defineProperty(com_github_haxePixiGAF_data_GAFTimeline.prototype,"gafgfxData",{ get : com_github_haxePixiGAF_data_GAFTimeline.prototype.get_gafgfxData, set : com_github_haxePixiGAF_data_GAFTimeline.prototype.set_gafgfxData});
Object.defineProperty(com_github_haxePixiGAF_display_GAFImage.prototype,"assetTexture",{ get : com_github_haxePixiGAF_display_GAFImage.prototype.get_assetTexture});
Object.defineProperty(com_github_haxePixiGAF_display_GAFMovieClip.prototype,"currentFrame",{ get : com_github_haxePixiGAF_display_GAFMovieClip.prototype.get_currentFrame});
Object.defineProperty(com_github_haxePixiGAF_display_GAFMovieClip.prototype,"totalFrames",{ get : com_github_haxePixiGAF_display_GAFMovieClip.prototype.get_totalFrames});
Object.defineProperty(com_github_haxePixiGAF_display_GAFMovieClip.prototype,"inPlay",{ get : com_github_haxePixiGAF_display_GAFMovieClip.prototype.get_inPlay});
Object.defineProperty(com_github_haxePixiGAF_display_GAFMovieClip.prototype,"loop",{ get : com_github_haxePixiGAF_display_GAFMovieClip.prototype.get_loop, set : com_github_haxePixiGAF_display_GAFMovieClip.prototype.set_loop});
Object.defineProperty(com_github_haxePixiGAF_display_GAFMovieClip.prototype,"smoothing",{ get : com_github_haxePixiGAF_display_GAFMovieClip.prototype.get_smoothing, set : com_github_haxePixiGAF_display_GAFMovieClip.prototype.set_smoothing});
Object.defineProperty(com_github_haxePixiGAF_display_GAFMovieClip.prototype,"useClipping",{ get : com_github_haxePixiGAF_display_GAFMovieClip.prototype.get_useClipping, set : com_github_haxePixiGAF_display_GAFMovieClip.prototype.set_useClipping});
Object.defineProperty(com_github_haxePixiGAF_display_GAFMovieClip.prototype,"fps",{ get : com_github_haxePixiGAF_display_GAFMovieClip.prototype.get_fps, set : com_github_haxePixiGAF_display_GAFMovieClip.prototype.set_fps});
Object.defineProperty(com_github_haxePixiGAF_display_GAFMovieClip.prototype,"reverse",{ get : com_github_haxePixiGAF_display_GAFMovieClip.prototype.get_reverse, set : com_github_haxePixiGAF_display_GAFMovieClip.prototype.set_reverse});
Object.defineProperty(com_github_haxePixiGAF_display_GAFMovieClip.prototype,"skipFrames",{ get : com_github_haxePixiGAF_display_GAFMovieClip.prototype.get_skipFrames, set : com_github_haxePixiGAF_display_GAFMovieClip.prototype.set_skipFrames});
var __map_reserved = {}
var ArrayBuffer = $global.ArrayBuffer || js_html_compat_ArrayBuffer;
if(ArrayBuffer.prototype.slice == null) {
	ArrayBuffer.prototype.slice = js_html_compat_ArrayBuffer.sliceImpl;
}
var Uint8Array = $global.Uint8Array || js_html_compat_Uint8Array._new;
com_github_haxePixiGAF_core_ZipToGAFAssetConverter.ACTION_DONT_LOAD_IN_GPU_MEMORY = "actionDontLoadInGPUMemory";
com_github_haxePixiGAF_core_ZipToGAFAssetConverter.ACTION_LOAD_ALL_IN_GPU_MEMORY = "actionLoadAllInGPUMemory";
com_github_haxePixiGAF_core_ZipToGAFAssetConverter.ACTION_LOAD_IN_GPU_MEMORY_ONLY_DEFAULT = "actionLoadInGPUMemoryOnlyDefault";
com_github_haxePixiGAF_core_ZipToGAFAssetConverter.actionWithAtlases = "actionLoadInGPUMemoryOnlyDefault";
com_github_haxePixiGAF_data_GAF.use99alpha = false;
com_github_haxePixiGAF_data_GAF.autoPlaySounds = true;
com_github_haxePixiGAF_data_GAF.useMipMaps = false;
com_github_haxePixiGAF_data_GAF.useDeviceFonts = false;
com_github_haxePixiGAF_data_GAFAssetConfig.MAX_VERSION = 5;
com_github_haxePixiGAF_data_GAFDebugInformation.TYPE_POINT = 0;
com_github_haxePixiGAF_data_GAFDebugInformation.TYPE_RECT = 1;
com_github_haxePixiGAF_data_GAFGFXData.EVENT_TYPE_TEXTURES_READY = "texturesReady";
com_github_haxePixiGAF_data_GAFTimeline.CONTENT_ALL = "contentAll";
com_github_haxePixiGAF_data_GAFTimeline.CONTENT_DEFAULT = "contentDefault";
com_github_haxePixiGAF_data_GAFTimeline.CONTENT_SPECIFY = "contentSpecify";
com_github_haxePixiGAF_data_config_CAnimationObject.TYPE_TEXTURE = "texture";
com_github_haxePixiGAF_data_config_CAnimationObject.TYPE_TEXTFIELD = "textField";
com_github_haxePixiGAF_data_config_CAnimationObject.TYPE_TIMELINE = "timeline";
com_github_haxePixiGAF_data_config_CFrameAction.STOP = 0;
com_github_haxePixiGAF_data_config_CFrameAction.PLAY = 1;
com_github_haxePixiGAF_data_config_CFrameAction.GOTO_AND_STOP = 2;
com_github_haxePixiGAF_data_config_CFrameAction.GOTO_AND_PLAY = 3;
com_github_haxePixiGAF_data_config_CFrameAction.DISPATCH_EVENT = 4;
com_github_haxePixiGAF_data_config_CSound.GAF_PLAY_SOUND = "gafPlaySound";
com_github_haxePixiGAF_data_config_CSound.WAV = 0;
com_github_haxePixiGAF_data_config_CSound.MP3 = 1;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.SIGNATURE_GAC = 4669763;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.TAG_END = 0;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.TAG_DEFINE_ATLAS = 1;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.TAG_DEFINE_ANIMATION_MASKS = 2;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.TAG_DEFINE_ANIMATION_OBJECTS = 3;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.TAG_DEFINE_ANIMATION_FRAMES = 4;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.TAG_DEFINE_NAMED_PARTS = 5;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.TAG_DEFINE_SEQUENCES = 6;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.TAG_DEFINE_TEXT_FIELDS = 7;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.TAG_DEFINE_ATLAS2 = 8;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.TAG_DEFINE_STAGE = 9;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.TAG_DEFINE_ANIMATION_OBJECTS2 = 10;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.TAG_DEFINE_ANIMATION_MASKS2 = 11;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.TAG_DEFINE_ANIMATION_FRAMES2 = 12;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.TAG_DEFINE_TIMELINE = 13;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.TAG_DEFINE_SOUNDS = 14;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.TAG_DEFINE_ATLAS3 = 15;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.FILTER_DROP_SHADOW = 0;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.FILTER_BLUR = 1;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.FILTER_GLOW = 2;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.FILTER_COLOR_MATRIX = 6;
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperRectangle = new PIXI.Rectangle(0,0,0,0);
com_github_haxePixiGAF_data_converters_BinGAFAssetConfigConverter.sHelperMatrix = new PIXI.Matrix();
com_github_haxePixiGAF_data_converters_ErrorConstants.SCALE_NOT_FOUND = " scale was not found in GAF config";
com_github_haxePixiGAF_data_converters_ErrorConstants.ATLAS_NOT_FOUND = "There is no texture atlas file '";
com_github_haxePixiGAF_data_converters_ErrorConstants.FILE_NOT_FOUND = "File or directory not found:'";
com_github_haxePixiGAF_data_converters_ErrorConstants.GAF_NOT_FOUND = "No GAF animation files found";
com_github_haxePixiGAF_data_converters_ErrorConstants.CSF_NOT_FOUND = " CSF was not found in GAF config";
com_github_haxePixiGAF_data_converters_ErrorConstants.TIMELINES_NOT_FOUND = "No animations found.";
com_github_haxePixiGAF_data_converters_ErrorConstants.EMPTY_ZIP = "zero file count in zip";
com_github_haxePixiGAF_data_converters_ErrorConstants.ERROR_LOADING = "Error occured while loading ";
com_github_haxePixiGAF_data_converters_ErrorConstants.ERROR_PARSING = "GAF parse error";
com_github_haxePixiGAF_data_converters_ErrorConstants.UNSUPPORTED_JSON = "JSON format is no longer supported";
com_github_haxePixiGAF_data_converters_ErrorConstants.UNKNOWN_FORMAT = "Unknown data format.";
com_github_haxePixiGAF_data_converters_WarningConstants.UNSUPPORTED_FILTERS = "Unsupported filter in animation";
com_github_haxePixiGAF_data_converters_WarningConstants.UNSUPPORTED_FILE = "You are using an old version of GAF library";
com_github_haxePixiGAF_data_converters_WarningConstants.UNSUPPORTED_TAG = "Unsupported tag found, check for playback library updates";
com_github_haxePixiGAF_data_converters_WarningConstants.FILTERS_UNDER_MASK = "Warning! Animation contains objects with filters under mask! Online preview is not able to display filters applied under masks(flash player technical limitation). All other runtimes will display this correctly.";
com_github_haxePixiGAF_data_converters_WarningConstants.REGION_NOT_FOUND = "In the texture atlas element is missing. This is conversion bug. Please report issue<font color='#0000ff'><u><a href='http://gafmedia.com/contact'>here</a></u></font>and we will fix it(use the Request type - Report Issue).";
com_github_haxePixiGAF_data_tagfx_TAGFXBase.EVENT_TYPE_TEXTURE_READY = "textureReady";
com_github_haxePixiGAF_data_tagfx_TAGFXBase.SOURCE_TYPE_BITMAP_DATA = "sourceTypeBitmapData";
com_github_haxePixiGAF_data_tagfx_TAGFXBase.SOURCE_TYPE_BITMAP = "sourceTypeBitmap";
com_github_haxePixiGAF_data_tagfx_TAGFXBase.SOURCE_TYPE_PNG_BA = "sourceTypePNGBA";
com_github_haxePixiGAF_data_tagfx_TAGFXBase.SOURCE_TYPE_ATF_BA = "sourceTypeATFBA";
com_github_haxePixiGAF_data_tagfx_TAGFXBase.SOURCE_TYPE_PNG_URL = "sourceTypePNGURL";
com_github_haxePixiGAF_data_tagfx_TAGFXBase.SOURCE_TYPE_ATF_URL = "sourceTypeATFURL";
com_github_haxePixiGAF_data_textures_TextureAtlas.sNames = [];
com_github_haxePixiGAF_display_GAFContainer.HELPER_MATRIX = new PIXI.Matrix();
com_github_haxePixiGAF_display_GAFImage.HELPER_MATRIX = new PIXI.Matrix();
com_github_haxePixiGAF_display_GAFMovieClip.EVENT_TYPE_SEQUENCE_START = "typeSequenceStart";
com_github_haxePixiGAF_display_GAFMovieClip.EVENT_TYPE_SEQUENCE_END = "typeSequenceEnd";
com_github_haxePixiGAF_display_GAFScale9Texture.DIMENSIONS_ERROR = "The width and height of the scale9Grid must be greater than zero.";
com_github_haxePixiGAF_display_GAFScale9Texture.HELPER_RECTANGLE = new PIXI.Rectangle(0,0,0,0);
com_github_haxePixiGAF_display_GAFTextField.HELPER_POINT = new PIXI.Point();
com_github_haxePixiGAF_events_GAFEvent.PROGRESS = "progress";
com_github_haxePixiGAF_events_GAFEvent.COMPLETE = "complete";
com_github_haxePixiGAF_events_GAFEvent.ERROR = "error";
com_github_haxePixiGAF_text_TextFormatAlign.CENTER = "center";
com_github_haxePixiGAF_text_TextFormatAlign.END = "end";
com_github_haxePixiGAF_text_TextFormatAlign.JUSTIFY = "justify";
com_github_haxePixiGAF_text_TextFormatAlign.LEFT = "left";
com_github_haxePixiGAF_text_TextFormatAlign.RIGHT = "right";
com_github_haxePixiGAF_text_TextFormatAlign.START = "start";
com_github_haxePixiGAF_utils_DebugUtility.RENDERING_DEBUG = false;
com_github_haxePixiGAF_utils_DebugUtility.RENDERING_NEUTRAL_COLOR = -858993460;
com_github_haxePixiGAF_utils_DebugUtility.RENDERING_FILTER_COLOR = -16711681;
com_github_haxePixiGAF_utils_DebugUtility.RENDERING_MASK_COLOR = -65536;
com_github_haxePixiGAF_utils_DebugUtility.RENDERING_ALPHA_COLOR = -256;
com_github_haxePixiGAF_utils_DebugUtility.cHR = [255,255,0,0,0,255,255];
com_github_haxePixiGAF_utils_DebugUtility.cHG = [0,255,255,255,0,0,0];
com_github_haxePixiGAF_utils_DebugUtility.cHB = [0,0,0,255,255,255,0];
com_github_haxePixiGAF_utils_DebugUtility.aryRGB = [com_github_haxePixiGAF_utils_DebugUtility.cHR,com_github_haxePixiGAF_utils_DebugUtility.cHG,com_github_haxePixiGAF_utils_DebugUtility.cHB];
com_github_haxePixiGAF_utils_MathUtility.epsilon = 0.00001;
com_github_haxePixiGAF_utils_MathUtility.PI_Q = Math.PI / 4.0;
haxe_ds_ObjectMap.count = 0;
js_Boot.__toStr = { }.toString;
js_html_compat_Uint8Array.BYTES_PER_ELEMENT = 1;
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
