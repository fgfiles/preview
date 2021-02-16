(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"game_atlas_1", frames: [[2485,1092,920,279],[0,796,611,415],[3407,1063,611,415],[3592,502,62,62],[3656,502,62,62],[981,1154,337,193],[826,0,920,575],[1748,0,920,575],[2670,0,920,575],[613,1154,366,393],[3720,502,12,12],[3387,577,653,484],[2776,1373,224,89],[2485,577,900,513],[1748,577,735,648],[826,577,920,575],[3592,0,500,500],[613,796,180,180],[1320,1154,180,180],[1502,1154,180,180],[0,1213,180,180],[182,1213,180,180],[364,1213,180,180],[1684,1227,180,180],[1866,1227,180,180],[2048,1227,180,180],[2230,1227,180,180],[1320,1336,180,180],[1502,1336,180,180],[981,1349,180,180],[2412,1373,180,180],[2594,1373,180,180],[0,0,824,794]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._1 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._44CatsLogo_0000_Livello2 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._44CatsLogo_0001_Gruppo1copia3 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.audio_0001 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.audio_0002 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.basePulsStroke2 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bgendNEW = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bgendNEW22 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.boxend = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.cocca = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.finGame = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.gatti = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.odfococd = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.PAMLampo01CGI = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.tessere_0001 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.tessere_0002 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.tessere_0003 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.tessere_0004 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.tessere_0005 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.tessere_0006 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.tessere_0007 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.tessere_0008 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.tessere_0009 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.tessere_0010 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.tessere_0011 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.tessere_0012 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.tessere_0013 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.tessere_0014 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.tessere_0015 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.tutti_0010_PolpettaCGI04 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.zucc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Livello 2
	this.instance = new lib.tessere_0001();
	this.instance.setTransform(-90,-90);

	this.instance_1 = new lib.tessere_0002();
	this.instance_1.setTransform(-90,-90);

	this.instance_2 = new lib.tessere_0003();
	this.instance_2.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-90,180,180);


(lib.tabelEndOK = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_4
	this.testo1 = new cjs.Text("", "normal 700 40px 'Open Sans'", "#FFFFFF");
	this.testo1.name = "testo1";
	this.testo1.textAlign = "center";
	this.testo1.lineHeight = 56;
	this.testo1.lineWidth = 423;
	this.testo1.parent = this;
	this.testo1.setTransform(49.05,-138.4);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.testo1);
	}

	this.timeline.addTween(cjs.Tween.get(this.testo1).wait(1));

	// Livello_3
	this.testo1ombra = new cjs.Text("", "normal 700 40px 'Open Sans'", "#333333");
	this.testo1ombra.name = "testo1ombra";
	this.testo1ombra.textAlign = "center";
	this.testo1ombra.lineHeight = 56;
	this.testo1ombra.lineWidth = 423;
	this.testo1ombra.parent = this;
	this.testo1ombra.setTransform(49.05,-135.2);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.testo1ombra);
	}

	this.timeline.addTween(cjs.Tween.get(this.testo1ombra).wait(1));

	// Layer 1
	this.testo1b = new cjs.Text("", "normal 700 40px 'Open Sans'", "#FAD3A0");
	this.testo1b.name = "testo1b";
	this.testo1b.textAlign = "center";
	this.testo1b.lineHeight = 56;
	this.testo1b.lineWidth = 477;
	this.testo1b.parent = this;
	this.testo1b.setTransform(43.5,-38.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.testo1b);
	}

	this.testo3 = new cjs.Text("", "normal 700 34px 'Open Sans'", "#FFFFFF");
	this.testo3.name = "testo3";
	this.testo3.textAlign = "center";
	this.testo3.lineHeight = 48;
	this.testo3.lineWidth = 475;
	this.testo3.parent = this;
	this.testo3.setTransform(44,100.15);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.testo3);
	}

	this.testo2 = new cjs.Text("", "normal 700 34px 'Open Sans'", "#FFFFFF");
	this.testo2.name = "testo2";
	this.testo2.textAlign = "center";
	this.testo2.lineHeight = 48;
	this.testo2.lineWidth = 474;
	this.testo2.parent = this;
	this.testo2.setTransform(44.5,37.65);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.testo2);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.testo2},{t:this.testo3},{t:this.testo1b}]}).wait(1));

	// Livello_2
	this.instance = new lib.boxend();
	this.instance.setTransform(-292,-214);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tabelEndOK, new cjs.Rectangle(-292,-214,653,484), null);


(lib.tabelEndKo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_4
	this.testo1 = new cjs.Text("", "normal 700 40px 'Open Sans'", "#FFFFFF");
	this.testo1.name = "testo1";
	this.testo1.textAlign = "center";
	this.testo1.lineHeight = 56;
	this.testo1.lineWidth = 423;
	this.testo1.parent = this;
	this.testo1.setTransform(-26.1,-129.15);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.testo1);
	}

	this.timeline.addTween(cjs.Tween.get(this.testo1).wait(1));

	// Layer 1
	this.testo1b = new cjs.Text("", "normal 700 40px 'Open Sans'", "#333333");
	this.testo1b.name = "testo1b";
	this.testo1b.textAlign = "center";
	this.testo1b.lineHeight = 56;
	this.testo1b.lineWidth = 423;
	this.testo1b.parent = this;
	this.testo1b.setTransform(-26.1,-126.4);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.testo1b);
	}

	this.timeline.addTween(cjs.Tween.get(this.testo1b).wait(1));

	// Livello_3
	this.testo2 = new cjs.Text("", "normal 700 40px 'Open Sans'", "#FAD5A4");
	this.testo2.name = "testo2";
	this.testo2.textAlign = "center";
	this.testo2.lineHeight = 56;
	this.testo2.lineWidth = 423;
	this.testo2.parent = this;
	this.testo2.setTransform(-26.1,-26.2);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.testo2);
	}

	this.timeline.addTween(cjs.Tween.get(this.testo2).wait(1));

	// Livello_2
	this.instance = new lib.boxend();
	this.instance.setTransform(-353,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tabelEndKo, new cjs.Rectangle(-353,-240,653,484), null);


(lib.tabelEnd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.testo2 = new cjs.Text("\n\n", "normal 700 28px 'Open Sans'", "#FFFFFF");
	this.testo2.name = "testo2";
	this.testo2.textAlign = "center";
	this.testo2.lineHeight = 40;
	this.testo2.lineWidth = 430;
	this.testo2.parent = this;
	this.testo2.setTransform(-2.95,-89.5);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.testo2);
	}

	this.testo1 = new cjs.Text("", "normal 700 46px 'Open Sans'", "#FFFFFF");
	this.testo1.name = "testo1";
	this.testo1.textAlign = "center";
	this.testo1.lineHeight = 65;
	this.testo1.lineWidth = 430;
	this.testo1.parent = this;
	this.testo1.setTransform(-2.95,-157.75);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.testo1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.testo1},{t:this.testo2}]}).wait(1));

	// Livello_2
	this.instance = new lib.boxend();
	this.instance.setTransform(-316,-217);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tabelEnd, new cjs.Rectangle(-316,-217,653,484), null);


(lib.star = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello 1
	this.instance = new lib.Bitmap22();
	this.instance.setTransform(-5.75,-5.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.star, new cjs.Rectangle(-5.7,-5.7,12,12), null);


(lib.Simbolo8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.tutti_0010_PolpettaCGI04();
	this.instance.setTransform(-220,-212,0.534,0.534);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220,-212,440.1,424);


(lib.Simbolo5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib._1();
	this.instance.setTransform(-460,-139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-460,-139.5,920,279);


(lib.roseHome = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.gatti();
	this.instance.setTransform(-391,-511,0.7691,0.7691);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-391,-511,565.3,498.4);


(lib.roseend = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.PAMLampo01CGI();
	this.instance.setTransform(-239,-279,1.0984,1.0984);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239,-279,549.2,549.2);


(lib.pulsPlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.testo = new cjs.Text("", "normal 700 28px 'Open Sans'", "#FFFFFF");
	this.testo.name = "testo";
	this.testo.textAlign = "center";
	this.testo.lineHeight = 40;
	this.testo.lineWidth = 246;
	this.testo.parent = this;
	this.testo.setTransform(-4.55,-20.85);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.testo);
	}

	this.timeline.addTween(cjs.Tween.get(this.testo).wait(1));

	// Layer 2
	this.instance = new lib.basePulsStroke2();
	this.instance.setTransform(-188,-113,1.0579,1.0579);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188,-113,356.5,204.2);


(lib.heels = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// Livello_5
	this.instance = new lib.tessere_0004();
	this.instance.setTransform(-90,-90);

	this.instance_1 = new lib.tessere_0005();
	this.instance_1.setTransform(-90,-90);

	this.instance_2 = new lib.tessere_0006();
	this.instance_2.setTransform(-90,-90);

	this.instance_3 = new lib.tessere_0007();
	this.instance_3.setTransform(-90,-90);

	this.instance_4 = new lib.tessere_0008();
	this.instance_4.setTransform(-90,-90);

	this.instance_5 = new lib.tessere_0009();
	this.instance_5.setTransform(-90,-90);

	this.instance_6 = new lib.tessere_0010();
	this.instance_6.setTransform(-90,-90);

	this.instance_7 = new lib.tessere_0011();
	this.instance_7.setTransform(-90,-90);

	this.instance_8 = new lib.tessere_0012();
	this.instance_8.setTransform(-90,-90);

	this.instance_9 = new lib.tessere_0013();
	this.instance_9.setTransform(-90,-90);

	this.instance_10 = new lib.tessere_0014();
	this.instance_10.setTransform(-90,-90);

	this.instance_11 = new lib.tessere_0015();
	this.instance_11.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-90,180,180);


(lib.finGame_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_2
	this.instance = new lib.finGame();
	this.instance.setTransform(-445,-251);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-445,-251,900,513);


(lib.cocca_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.testo = new cjs.Text("", "normal 700 40px 'Open Sans'", "#FFFFFF");
	this.testo.name = "testo";
	this.testo.textAlign = "center";
	this.testo.lineHeight = 56;
	this.testo.lineWidth = 100;
	this.testo.parent = this;
	this.testo.setTransform(0,-25);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.testo);
	}

	this.timeline.addTween(cjs.Tween.get(this.testo).wait(1));

	// Livello_2
	this.instance = new lib.cocca();
	this.instance.setTransform(-112,-50);

	this.testo_1 = new cjs.Text("", "40px 'CantoraOne'", "#FFFFFF");
	this.testo_1.name = "testo_1";
	this.testo_1.textAlign = "center";
	this.testo_1.lineHeight = 52;
	this.testo_1.lineWidth = 100;
	this.testo_1.parent = this;
	this.testo_1.setTransform(0,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.testo_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112,-50,224,89);


(lib.Button1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqtkAYAAAABFADB4ADYB4ADCsADDNABYBnAABwABB2gBYA7AAA8gBA+gBYAfgBAggBAfAAYAQgBAQAAAQAAYAIAAAIgBAIAAIAMAAYADAAAFAAADAAYAIAAAJAAAHACYAIABAHAAAIACYAPADAPAEAPAHYAdALAaATAXAXIARASIAPATIANAUIAKAWYANAeAGAhABAhYgBAHAAAJAAAIYgBAJgCAIgBAIYgBAIgDAIgCAIYgCAIgDAHgDAIYgNAfgTAbgZAYYgFAFgHAGgGAFYgHAGgHAEgGAFYgHAFgHADgHAFYgIADgHAEgIADYgeANgiAFghgBYiJgCiJgDiIgBYiHgBiFgBiAgBYiBgBh8AAh2ABYg7AAg6AAg3ABYgHAAgHAAgHAAIgJAAIgLAAYgOAAgLgDgMgBYgZgFgXgIgVgLYgFgDgFgDgFgDYgFgEgEgDgFgEIgHgFIgHgGIgGgGIgEgDIgBgBYgBAAABABgBgBIAAgBYgJgJgJgJgGgJYgHgIgFgKgGgJYgWgmgKgqAAgmYABgFAAgGAAgFIAAgHIABgHYABgFAAgFABgEYAAgFACgEAAgFYACgEAAgFACgEYABgFABgEACgEYACgJAEgIAEgHYAPggAUgZAVgUYADgCADgDACgCYADgCADgDACgCYAGgEAFgEAFgDYAGgEAFgDAFgEYAFgCAGgDAFgCYAFgDAFgCAFgCYAEgCAFgCAFgBYAJgDAIgCAIgCYAIgBAHgBAGgBYAFgBAGAAAEgBYAIAAAEgBAAAAAqtkKYAAAAgEAAgJABYgEAAgFAAgHAAYgGABgHAAgIABYgIACgJACgKACYgFABgFACgGACYgFACgFABgGADYgFACgGADgGADYgGADgGADgGAEYgGADgFAEgGAFYgEACgDACgDACYgDADgCACgDADYgYAUgXAagSAiYgEAIgFAJgDAJYgCAFgCAEgBAFYgCAFgBAFgBAFYgCAFgBAFgBAFYgBAFgBAGAAAFIgCAIIAAAIYgBAFAAAFAAAFYgBAGABAFAAAGYAAAFAAAGABAFYABAMABALADAMYAEAXAKAXALAWYAMAWARAWAQARIABABYgBAAACABAAABIACABIADAEIAIAGIAHAHIAIAGYAFAEAFAFAGAEYAGADAGAEAGADYAYAOAaAKAdAGYAOADAQACANAAIAKABIALAAYAHAAAHAAAHAAYA3ABA6AAA7AAYB2ABB8AACBgBYCAgBCFgBCHgBYCIgBCJgDCJgCYAkgBAkgHAhgOYAHgEAJgEAHgEYAIgFAHgFAIgFYAHgFAHgGAHgGYAGgGAGgFAGgHYAZgZAUgdANghYACgIAEgIACgJYACgIACgJACgIYABgJABgJABgIYABgJAAgIAAgIYAAgigGgjgNggIgKgXIgOgWIgPgVIgRgTYgXgZgcgUgfgPYgPgHgQgFgRgEYgIgDgIgBgJgBYgJgCgHAAgIAAYgFgBgDAAgFAAIgMAAYgIgBgIAAgIAAYgQAAgQgBgQAAYgfAAgggBgfgBYg+gBg8gBg7AAYh2gBhwABhnAAYjNABisADh4ADYh4ADhFACAAAA");
	this.shape.setTransform(-0.3998,0.158);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C45C87").s().p("AqxEEQhsAAhMhMQhMhNAAhrQAAhqBMhNQBMhMBsAAIVjAAQBsAABMBMQBMBNAABqQAABrhMBNQhMBMhsAAg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Button1, new cjs.Rectangle(-96.4,-27.8,192,55.8), null);


(lib.Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.testo = new cjs.Text("...", "24px 'Times New Roman'", "#FFFFFF");
	this.testo.name = "testo";
	this.testo.textAlign = "center";
	this.testo.lineHeight = 29;
	this.testo.lineWidth = 170;
	this.testo.parent = this;
	this.testo.setTransform(0.8,-15.35);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqtkAYAAAABFADB4ADYB4ADCsADDNABYBnAABwABB2gBYA7AAA8gBA+gBYAfgBAggBAfAAYAQgBAQAAAQAAYAIAAAIgBAIAAIAMAAYADAAAFAAADAAYAIAAAJAAAHACYAIABAHAAAIACYAPADAPAEAPAHYAdALAaATAXAXIARASIAPATIANAUIAKAWYANAeAGAhABAhYgBAHAAAJAAAIYgBAJgCAIgBAIYgBAIgDAIgCAIYgCAIgDAHgDAIYgNAfgTAbgZAYYgFAFgHAGgGAFYgHAGgHAEgGAFYgHAFgHADgHAFYgIADgHAEgIADYgeANgiAFghgBYiJgCiJgDiIgBYiHgBiFgBiAgBYiBgBh8AAh2ABYg7AAg6AAg3ABYgHAAgHAAgHAAIgJAAIgLAAYgOAAgLgDgMgBYgZgFgXgIgVgLYgFgDgFgDgFgDYgFgEgEgDgFgEIgHgFIgHgGIgGgGIgEgDIgBgBYgBAAABABgBgBIAAgBYgJgJgJgJgGgJYgHgIgFgKgGgJYgWgmgKgqAAgmYABgFAAgGAAgFIAAgHIABgHYABgFAAgFABgEYAAgFACgEAAgFYACgEAAgFACgEYABgFABgEACgEYACgJAEgIAEgHYAPggAUgZAVgUYADgCADgDACgCYADgCADgDACgCYAGgEAFgEAFgDYAGgEAFgDAFgEYAFgCAGgDAFgCYAFgDAFgCAFgCYAEgCAFgCAFgBYAJgDAIgCAIgCYAIgBAHgBAGgBYAFgBAGAAAEgBYAIAAAEgBAAAAAqtkKYAAAAgEAAgJABYgEAAgFAAgHAAYgGABgHAAgIABYgIACgJACgKACYgFABgFACgGACYgFACgFABgGADYgFACgGADgGADYgGADgGADgGAEYgGADgFAEgGAFYgEACgDACgDACYgDADgCACgDADYgYAUgXAagSAiYgEAIgFAJgDAJYgCAFgCAEgBAFYgCAFgBAFgBAFYgCAFgBAFgBAFYgBAFgBAGAAAFIgCAIIAAAIYgBAFAAAFAAAFYgBAGABAFAAAGYAAAFAAAGABAFYABAMABALADAMYAEAXAKAXALAWYAMAWARAWAQARIABABYgBAAACABAAABIACABIADAEIAIAGIAHAHIAIAGYAFAEAFAFAGAEYAGADAGAEAGADYAYAOAaAKAdAGYAOADAQACANAAIAKABIALAAYAHAAAHAAAHAAYA3ABA6AAA7AAYB2ABB8AACBgBYCAgBCFgBCHgBYCIgBCJgDCJgCYAkgBAkgHAhgOYAHgEAJgEAHgEYAIgFAHgFAIgFYAHgFAHgGAHgGYAGgGAGgFAGgHYAZgZAUgdANghYACgIAEgIACgJYACgIACgJACgIYABgJABgJABgIYABgJAAgIAAgIYAAgigGgjgNggIgKgXIgOgWIgPgVIgRgTYgXgZgcgUgfgPYgPgHgQgFgRgEYgIgDgIgBgJgBYgJgCgHAAgIAAYgFgBgDAAgFAAIgMAAYgIgBgIAAgIAAYgQAAgQgBgQAAYgfAAgggBgfgBYg+gBg8gBg7AAYh2gBhwABhnAAYjNABisADh4ADYh4ADhFACAAAA");
	this.shape.setTransform(-0.3998,0.158);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C45C87").s().p("AqxEEQhsAAhMhMQhMhNAAhrQAAhqBMhNQBMhMBsAAIVjAAQBsAABMBMQBMBNAABqQAABrhMBNQhMBMhsAAg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.testo}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Button, new cjs.Rectangle(-96.4,-27.8,192,55.8), null);


(lib.bghome = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.bgendNEW();
	this.instance.setTransform(-460,-287);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-460,-287,920,575);


(lib.baglio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		if(mylang=="it")this.gotoAndStop(1)
		else this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib._44CatsLogo_0001_Gruppo1copia3();
	this.instance.setTransform(-167.7,-124.15,0.6395,0.6395,11.9864);

	this.instance_1 = new lib._44CatsLogo_0000_Livello2();
	this.instance_1.setTransform(-167.7,-124.15,0.6395,0.6395,11.9864);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222.8,-124.1,437.3,340.7);


(lib.bagl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Bitmap21();
	this.instance.setTransform(-182.8,-196.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.8,-196.4,366,393);


(lib.Audio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Livello_1
	this.instance = new lib.audio_0002();
	this.instance.setTransform(-32,-32);

	this.instance_1 = new lib.audio_0001();
	this.instance_1.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,62,62);


(lib.starrreggia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello 1
	this.instance = new lib.star();
	this.instance.setTransform(0,0,0.1333,0.1333);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.5,scaleY:1.5,rotation:614.9996,guide:{path:[0.1,0,33.3,-35.1,9.6,-69.6]}},18,cjs.Ease.get(1)).to({scaleX:0.0333,scaleY:0.0333,rotation:720,guide:{path:[9.4,-69.6,5.5,-75.3,0.1,-80.9]}},11).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-81.9,28.9,82.80000000000001);


(lib.poffMagico = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// starrreggia
	this.instance = new lib.starrreggia("synched",0,false);
	this.instance.setTransform(2.15,-3.5,0.9194,0.9194,14.2293);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(30).to({startPosition:29},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(25));

	// starrreggia
	this.instance_1 = new lib.starrreggia("synched",0,false);
	this.instance_1.setTransform(2.15,-3.5,0.6277,0.633,44.2275);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({startPosition:29},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(25));

	// starrreggia
	this.instance_2 = new lib.starrreggia("synched",0,false);
	this.instance_2.setTransform(2.15,-3.5,0.9195,1.4827,-41.7669);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).wait(27).to({startPosition:27},0).to({_off:true},1).wait(8).to({_off:false,startPosition:29},0).to({_off:true},1).wait(25));

	// starrreggia
	this.instance_3 = new lib.starrreggia("synched",0,false);
	this.instance_3.setTransform(2.15,-3.5,1.0216,0.8316,-154.0777);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(30).to({startPosition:29},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(25));

	// starrreggia
	this.instance_4 = new lib.starrreggia("synched",0,false);
	this.instance_4.setTransform(2.15,-3.5,0.6567,0.9195,-109.0805);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).wait(26).to({startPosition:26},0).to({_off:true},1).wait(8).to({_off:false,startPosition:29},0).to({_off:true},1).wait(25));

	// starrreggia
	this.instance_5 = new lib.starrreggia("synched",0,false);
	this.instance_5.setTransform(2.15,-3.5,0.9195,1.3132,149.9263);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).wait(30).to({startPosition:29},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(25));

	// starrreggia
	this.instance_6 = new lib.starrreggia("synched",0,false);
	this.instance_6.setTransform(0.3,-3.2,0.9195,0.9195,-67.2576);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({startPosition:29},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(25));

	// starrreggia
	this.instance_7 = new lib.starrreggia("synched",0,false);
	this.instance_7.setTransform(0.3,-3.2,1.2532,1.0372,-37.2583);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).wait(25).to({startPosition:25},0).to({_off:true},1).wait(8).to({_off:false,startPosition:29},0).to({_off:true},1).wait(25));

	// starrreggia
	this.instance_8 = new lib.starrreggia("synched",0,false);
	this.instance_8.setTransform(0.3,-3.2,0.9195,0.9195,-123.2515);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(32).to({startPosition:29},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(25));

	// starrreggia
	this.instance_9 = new lib.starrreggia("synched",0,false);
	this.instance_9.setTransform(0.3,-3.2,0.9194,0.9194,124.4354);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).wait(22).to({startPosition:22},0).to({_off:true},1).wait(8).to({_off:false,startPosition:29},0).to({_off:true},1).wait(25));

	// starrreggia
	this.instance_10 = new lib.starrreggia("synched",0,false);
	this.instance_10.setTransform(0.3,-3.2,0.9195,0.9195,154.4347);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(32).to({startPosition:29},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(25));

	// starrreggia
	this.instance_11 = new lib.starrreggia("synched",0,false);
	this.instance_11.setTransform(0.3,-3.2,0.9195,0.9195,68.4398);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10).to({_off:false},0).wait(22).to({startPosition:22},0).to({_off:true},1).wait(8).to({_off:false,startPosition:29},0).to({_off:true},1).wait(25));

	// starrreggia
	this.instance_12 = new lib.starrreggia("synched",0,false);
	this.instance_12.setTransform(3.25,-4.45,1.1864,1.5312,-15.7698);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(32).to({startPosition:29},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(25));

	// starrreggia
	this.instance_13 = new lib.starrreggia("synched",0,false);
	this.instance_13.setTransform(3.25,-4.45,1.5313,1.5313,14.229);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(3).to({_off:false},0).wait(29).to({startPosition:29},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(25));

	// starrreggia
	this.instance_14 = new lib.starrreggia("synched",0,false);
	this.instance_14.setTransform(3.25,-4.45,1.5313,1.5313,-71.7655);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(32).to({startPosition:29},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.9,-129.1,190,225.1);


(lib.Zucca3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {apri:1,chiudi:36};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(42));

	// Layer 4
	this.instance = new lib.bagl("synched",0);
	this.instance.setTransform(3.4,-1.8,0.2516,0.2516);
	this.instance.alpha = 0.5117;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1.089,scaleY:1.089,rotation:34.4826,alpha:1},3).to({scaleX:0.1582,scaleY:0.1582,rotation:139.4814},10).to({_off:true},1).wait(27).to({_off:false,scaleX:0.0499,scaleY:0.0499,rotation:282.563},0).to({regY:-0.1,scaleX:1.076,scaleY:1.076,rotation:394.482,x:3.45,y:-1.9},7,cjs.Ease.get(-0.98)).wait(1).to({regX:0.2,regY:0,scaleX:0.8518,scaleY:0.8527,rotation:418.1775,y:-1.65,alpha:0.8098},0).wait(1).to({scaleX:0.6512,scaleY:0.6529,rotation:439.3787,x:3.35,alpha:0.6396},0).wait(1).to({scaleX:0.4743,scaleY:0.4766,rotation:458.0856,x:3.4,y:-1.7,alpha:0.4895},0).wait(1).to({regX:-0.2,regY:-0.1,scaleX:0.3209,scaleY:0.3238,rotation:474.2983,x:3.5,y:-1.8,alpha:0.3594},0).wait(1).to({regX:0.2,regY:0,scaleX:0.2547,scaleY:0.2582,rotation:488.0254,x:3.3,y:-1.7,alpha:0.2496},0).wait(1).to({scaleX:0.2006,scaleY:0.2045,rotation:499.2567,alpha:0.1597},0).wait(1).to({scaleX:0.1585,scaleY:0.1627,rotation:507.9921,y:-1.75,alpha:0.0898},0).wait(1).to({scaleX:0.1284,scaleY:0.1329,rotation:514.2317,x:3.35,y:-1.8,alpha:0.0399},0).wait(1).to({scaleX:0.1104,scaleY:0.115,rotation:517.9754,alpha:0.01},0).wait(1).to({regX:0,scaleX:0.1044,scaleY:0.109,rotation:519.2233,x:3.4,alpha:0},0).to({_off:true},1).wait(17));

	// Layer 3
	this.instance_1 = new lib.poffMagico("synched",0);
	this.instance_1.setTransform(3.4,-31.8,0.6033,0.6033,0,0,0,0.6,-1.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({y:31.2,startPosition:41},33).to({_off:true},1).wait(14).to({_off:false,y:-31.8,startPosition:0},0).to({y:31.2,startPosition:41},26).to({_off:true},1).wait(1));

	// Layer 5
	this.instance_2 = new lib.zucc("single",2);
	this.instance_2.setTransform(0.05,-0.05,0.7267,0.7267,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},7).wait(42).to({_off:false},0).wait(28));

	// shoe
	this.interno = new lib.heels();
	this.interno.name = "interno";
	this.interno.setTransform(0.95,0.05,0.476,0.476,-145.7348,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.interno).wait(1).to({regX:0.1,scaleX:0.8262,scaleY:0.7267,rotation:0,x:-0.1},16,cjs.Ease.get(-1)).wait(1).to({regX:0,regY:0,scaleX:0.7904,x:-0.2137,y:0.1085},0).wait(1).to({scaleX:0.7625,x:-0.2244,y:0.1151},0).wait(1).to({scaleX:0.7426,x:-0.232,y:0.1198},0).wait(1).to({scaleX:0.7307,x:-0.2,y:0.05},0).to({regX:0.1,regY:-0.1,scaleX:0.7267,x:-0.15},1).to({_off:true},14).wait(41));

	// shoe
	this.interno_1 = new lib.heels();
	this.interno_1.name = "interno_1";
	this.interno_1.setTransform(-0.15,0.05,0.7267,0.7267,0,0,0,0.1,-0.1);
	this.interno_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.interno_1).wait(36).to({_off:false},0).to({rotation:-711.5494,y:-0.05},13,cjs.Ease.get(-1)).to({_off:true},1).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-281.8,-290.8,570.8,578.4000000000001);


(lib.Zucca2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"apri":1,"chiudi":36};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(42));

	// Layer 4
	this.instance = new lib.bagl("synched",0);
	this.instance.setTransform(3.4,-1.8,0.2516,0.2516);
	this.instance.alpha = 0.5117;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1.089,scaleY:1.089,rotation:34.4826,alpha:1},3).to({scaleX:0.1582,scaleY:0.1582,rotation:139.4814},10).to({_off:true},1).wait(27).to({_off:false,scaleX:0.0499,scaleY:0.0499,rotation:282.563},0).to({regY:-0.1,scaleX:1.076,scaleY:1.076,rotation:394.482,x:3.45,y:-1.9},7,cjs.Ease.get(-0.98)).wait(1).to({regX:0.2,regY:0,scaleX:0.8518,scaleY:0.8527,rotation:418.1775,y:-1.65,alpha:0.8098},0).wait(1).to({scaleX:0.6512,scaleY:0.6529,rotation:439.3787,x:3.35,alpha:0.6396},0).wait(1).to({scaleX:0.4743,scaleY:0.4766,rotation:458.0856,x:3.4,y:-1.7,alpha:0.4895},0).wait(1).to({regX:-0.2,regY:-0.1,scaleX:0.3209,scaleY:0.3238,rotation:474.2983,x:3.5,y:-1.8,alpha:0.3594},0).wait(1).to({regX:0.2,regY:0,scaleX:0.2547,scaleY:0.2582,rotation:488.0254,x:3.3,y:-1.7,alpha:0.2496},0).wait(1).to({scaleX:0.2006,scaleY:0.2045,rotation:499.2567,alpha:0.1597},0).wait(1).to({scaleX:0.1585,scaleY:0.1627,rotation:507.9921,y:-1.75,alpha:0.0898},0).wait(1).to({scaleX:0.1284,scaleY:0.1329,rotation:514.2317,x:3.35,y:-1.8,alpha:0.0399},0).wait(1).to({scaleX:0.1104,scaleY:0.115,rotation:517.9754,alpha:0.01},0).wait(1).to({regX:0,scaleX:0.1044,scaleY:0.109,rotation:519.2233,x:3.4,alpha:0},0).to({_off:true},1).wait(17));

	// Layer 3
	this.instance_1 = new lib.poffMagico("synched",0);
	this.instance_1.setTransform(3.4,-31.8,0.6033,0.6033,0,0,0,0.6,-1.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({y:31.2,startPosition:41},33).to({_off:true},1).wait(14).to({_off:false,y:-31.8,startPosition:0},0).to({y:31.2,startPosition:41},26).to({_off:true},1).wait(1));

	// Layer 5
	this.instance_2 = new lib.zucc("single",1);
	this.instance_2.setTransform(0.05,-0.05,0.7267,0.7267,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},7).wait(42).to({_off:false},0).wait(28));

	// shoe
	this.interno = new lib.heels();
	this.interno.name = "interno";
	this.interno.setTransform(0.95,0.05,0.476,0.476,-145.7348,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.interno).wait(1).to({regX:0.1,scaleX:0.8262,scaleY:0.7267,rotation:0,x:-0.1},16,cjs.Ease.get(-1)).wait(1).to({regX:0,regY:0,scaleX:0.7904,x:-0.2137,y:0.1085},0).wait(1).to({scaleX:0.7625,x:-0.2244,y:0.1151},0).wait(1).to({scaleX:0.7426,x:-0.232,y:0.1198},0).wait(1).to({scaleX:0.7307,x:-0.2,y:0.05},0).to({regX:0.1,regY:-0.1,scaleX:0.7267,x:-0.15},1).to({_off:true},14).wait(41));

	// shoe
	this.interno_1 = new lib.heels();
	this.interno_1.name = "interno_1";
	this.interno_1.setTransform(-0.15,0.05,0.7267,0.7267,0,0,0,0.1,-0.1);
	this.interno_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.interno_1).wait(36).to({_off:false},0).to({rotation:-711.5494,y:-0.05},13,cjs.Ease.get(-1)).to({_off:true},1).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-281.8,-290.8,570.8,578.4000000000001);


(lib.Zucca1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"apri":1,"chiudi":36};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(42));

	// Layer 4
	this.instance = new lib.bagl("synched",0);
	this.instance.setTransform(3.4,-1.8,0.2516,0.2516);
	this.instance.alpha = 0.5117;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1.089,scaleY:1.089,rotation:34.4826,alpha:1},3).to({scaleX:0.1582,scaleY:0.1582,rotation:139.4814},10).to({_off:true},1).wait(27).to({_off:false,scaleX:0.0499,scaleY:0.0499,rotation:282.563},0).to({regY:-0.1,scaleX:1.076,scaleY:1.076,rotation:394.482,x:3.45,y:-1.9},7,cjs.Ease.get(-0.98)).wait(1).to({regX:0.2,regY:0,scaleX:0.8518,scaleY:0.8527,rotation:418.1775,y:-1.65,alpha:0.8098},0).wait(1).to({scaleX:0.6512,scaleY:0.6529,rotation:439.3787,x:3.35,alpha:0.6396},0).wait(1).to({scaleX:0.4743,scaleY:0.4766,rotation:458.0856,x:3.4,y:-1.7,alpha:0.4895},0).wait(1).to({regX:-0.2,regY:-0.1,scaleX:0.3209,scaleY:0.3238,rotation:474.2983,x:3.5,y:-1.8,alpha:0.3594},0).wait(1).to({regX:0.2,regY:0,scaleX:0.2547,scaleY:0.2582,rotation:488.0254,x:3.3,y:-1.7,alpha:0.2496},0).wait(1).to({scaleX:0.2006,scaleY:0.2045,rotation:499.2567,alpha:0.1597},0).wait(1).to({scaleX:0.1585,scaleY:0.1627,rotation:507.9921,y:-1.75,alpha:0.0898},0).wait(1).to({scaleX:0.1284,scaleY:0.1329,rotation:514.2317,x:3.35,y:-1.8,alpha:0.0399},0).wait(1).to({scaleX:0.1104,scaleY:0.115,rotation:517.9754,alpha:0.01},0).wait(1).to({regX:0,scaleX:0.1044,scaleY:0.109,rotation:519.2233,x:3.4,alpha:0},0).to({_off:true},1).wait(17));

	// Layer 3
	this.instance_1 = new lib.poffMagico("synched",0);
	this.instance_1.setTransform(3.4,-31.8,0.6033,0.6033,0,0,0,0.6,-1.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({y:31.2,startPosition:41},33).to({_off:true},1).wait(14).to({_off:false,y:-31.8,startPosition:0},0).to({y:31.2,startPosition:41},26).to({_off:true},1).wait(1));

	// Layer 5
	this.instance_2 = new lib.zucc("single",0);
	this.instance_2.setTransform(0.05,-0.05,0.7267,0.7267,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},7).wait(42).to({_off:false},0).wait(28));

	// shoe
	this.interno = new lib.heels();
	this.interno.name = "interno";
	this.interno.setTransform(0.95,0.05,0.476,0.476,-145.7348,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.interno).wait(1).to({regX:0.1,scaleX:0.8262,scaleY:0.7267,rotation:0,x:-0.1},16,cjs.Ease.get(-1)).wait(1).to({regX:0,regY:0,scaleX:0.7904,x:-0.2137,y:0.1085},0).wait(1).to({scaleX:0.7625,x:-0.2244,y:0.1151},0).wait(1).to({scaleX:0.7426,x:-0.232,y:0.1198},0).wait(1).to({scaleX:0.7307,x:-0.2,y:0.05},0).to({regX:0.1,regY:-0.1,scaleX:0.7267,x:-0.15},1).to({_off:true},14).wait(41));

	// shoe
	this.interno_1 = new lib.heels();
	this.interno_1.name = "interno_1";
	this.interno_1.setTransform(-0.15,0.05,0.7267,0.7267,0,0,0,0.1,-0.1);
	this.interno_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.interno_1).wait(36).to({_off:false},0).to({rotation:-711.5494,y:-0.05},13,cjs.Ease.get(-1)).to({_off:true},1).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-281.8,-290.8,570.8,578.4000000000001);


// stage content:
(lib.game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {home:1,choose_level:50,pregame:81,game:82,finishok:107,finishko:132};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,27,48,65,70,74,80,81,106,107,131,132,150];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		root = this;
		loopStart = false
		
		function getURLParameter(name) {
		  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
		}
		//mylang = "it"
		mylang = getURLParameter('lang');
		root.mylang = mylang
		console.info(mylang)
		/*
		function loadGioca(e){
			var text = new createjs.Text(text0001, "bold 24px Lora", "#ffffff");
			text.textAlign = "center"
			text.textBaseline  = "middle"
			btn_gioca.addChild(text);
		}
		
		
		
		
		
		function fl_ClickToGoToAndStopAtFrame(e)
		{
			console.info("CLICK");
			root.gotoAndStop("choose_level");
			//root.gotoAndPlay("finish");
			root.removeChild(btn_gioca);
			btn_gioca = null
		}
		
		*/
		queue = new createjs.LoadQueue();
		createjs.Sound.alternateExtensions = ["mp3"];
		queue.installPlugin(createjs.Sound);
		queue.addEventListener("complete", handleComplete);
		//queue.loadFile({id:"loop", src:"sounds/loop.ogg"});
		queue.loadFile({id:"clic", src:"sounds/clic.ogg"});
		queue.loadFile({id:"confirm", src:"sounds/confirm.ogg"});
		queue.loadFile({id:"EndNeg", src:"sounds/EndNeg.ogg"});
		queue.loadFile({id:"endPos", src:"sounds/endPos.ogg"});
		queue.loadFile({id:"giraOK", src:"sounds/giraOK.ogg"});
		queue.loadFile({id:"giraSbagliato", src:"sounds/giraSbagliato.ogg"});
		queue.loadFile({id:"loop", src:"sounds/loop.ogg"});
		
		var audioOn = true
		root.loop = null
		root.audio.addEventListener("click",audioClick)
		root.audio.alpha = 0
		function audioClick(){
			if(audioOn){
				audioOn = false
				root.loop .volume = 0
				root.audio.gotoAndStop(1)
			}else{
				audioOn = true
				root.loop .volume = 1
				root.audio.gotoAndStop(0)
			}
		}
		
		stepLoading = 0
		
		function avanzaCheck(){
			stepLoading++	
			if(stepLoading==2)root.play()
		}
		
		
		
		function handleComplete(event) {
			console.info("AUDIO CARICATO")
			//var ppc = new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_NONE, loop: -1, startTime:0,duration:3000 })
		   //createjs.Sound.play("loop",ppc)
			avanzaCheck()
		}
		
		
		
		function parseXml(xml)
		{
			console.info("LINGUA CARICATA")
			text0001 = $(xml).find("text0001").text();
			text0002 = $(xml).find("text0002").text();
			text0003 = $(xml).find("text0003").text();
			text0004 = $(xml).find("text0004").text();
			text0005 = $(xml).find("text0005").text();
			text0005b = $(xml).find("text0005b").text();
			text0006 = $(xml).find("text0006").text();
			text0007 = $(xml).find("text0007").text();
			text0008 = $(xml).find("text0008").text();
			text0009 = $(xml).find("text0009").text();
			text0010 = $(xml).find("text0010").text();
			text0011 = $(xml).find("text0011").text();
			text0012 = $(xml).find("text0012").text();
			
			 avanzaCheck()
			//root.gotoAndPlay("finishok")
			
			
		/*	btn_gioca = new lib.Button1();
			btn_gioca.x = 640,15;
			btn_gioca.y = 428,5
			btn_gioca.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
			btn_gioca.addEventListener("added",loadGioca.bind(this))
			root.addChild(btn_gioca);*/
		}
		
		function parseXML(_lang){
			console.info("CARICAMENTO LINGUA")
			$(document).ready(function()
			{
				$.ajax({
					type: "GET",
					url: "xml/"+_lang+".xml",
					dataType: "xml",
					success: parseXml,
					error: function(){
						console.info("ERRORE LINGUA")
						parseXML("en")
					}
				});
			});
		}
		
		parseXML(mylang+"");
		
		function detectmob() { 
		 if( navigator.userAgent.match(/Android/i)
		 || navigator.userAgent.match(/webOS/i)
		 || navigator.userAgent.match(/iPhone/i)
		 || navigator.userAgent.match(/iPad/i)
		 || navigator.userAgent.match(/iPod/i)
		 || navigator.userAgent.match(/BlackBerry/i)
		 || navigator.userAgent.match(/Windows Phone/i)
		 ){
			return true;
		  }
		 else {
			return false;
		  }
		}
		
		function getBrowserInfo() {
			var nVer = navigator.appVersion;
			var nAgt = navigator.userAgent;
			var browserName  = navigator.appName;
			var fullVersion  = ''+parseFloat(navigator.appVersion); 
			var majorVersion = parseInt(navigator.appVersion,10);
			var nameOffset,verOffset,ix;
		
			// In Opera 15+, the true version is after "OPR/" 
			if ((verOffset=nAgt.indexOf("OPR/"))!=-1) {
				browserName = "Opera";
				fullVersion = nAgt.substring(verOffset+4);
			}
			// In older Opera, the true version is after "Opera" or after "Version"
			else if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
				browserName = "Opera";
				fullVersion = nAgt.substring(verOffset+6);
				if ((verOffset=nAgt.indexOf("Version"))!=-1) fullVersion = nAgt.substring(verOffset+8);
			}
			// In MSIE, the true version is after "MSIE" in userAgent
			else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
				browserName = "Microsoft Internet Explorer";
				fullVersion = nAgt.substring(verOffset+5);
			}
			// In Chrome, the true version is after "Chrome" 
			else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
				browserName = "Chrome";
				fullVersion = nAgt.substring(verOffset+7);
			}
			// In Safari, the true version is after "Safari" or after "Version" 
			else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
				browserName = "Safari";
				fullVersion = nAgt.substring(verOffset+7);
				if ((verOffset=nAgt.indexOf("Version"))!=-1)fullVersion = nAgt.substring(verOffset+8);
			}
			// In Firefox, the true version is after "Firefox" 
			else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
				browserName = "Firefox";
				fullVersion = nAgt.substring(verOffset+8);
			}
			// In most other browsers, "name/version" is at the end of userAgent 
			else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) {
				browserName = nAgt.substring(nameOffset,verOffset);
				fullVersion = nAgt.substring(verOffset+1);
				if (browserName.toLowerCase()==browserName.toUpperCase()) {
					browserName = navigator.appName;
				}
			}
			// trim the fullVersion string at semicolon/space if present
			if ((ix=fullVersion.indexOf(";"))!=-1)fullVersion=fullVersion.substring(0,ix);
			if ((ix=fullVersion.indexOf(" "))!=-1)fullVersion=fullVersion.substring(0,ix);
		
			majorVersion = parseInt(''+fullVersion,10);
			
			if (isNaN(majorVersion)) {
				fullVersion  = ''+parseFloat(navigator.appVersion); 
				majorVersion = parseInt(navigator.appVersion,10);
			}
		
			return {"name":browserName, "version":fullVersion };
		}
		
		var navigatorInfo = getBrowserInfo();
		
		root.setContentText = function(_text,_string){
			_text.text = _string
			if(_text.spostato)return
			_text.spostato = true
			console.info("PASSO",navigatorInfo.name )
			if (navigatorInfo.name == "Chrome")_text.y += _text.lineHeight*0.3
			if (navigatorInfo.name == "Firefox")_text.y += _text.lineHeight*0.3
		}
	}
	this.frame_27 = function() {
		root = this;
		/*
		var text = new createjs.Text(text0001, "regular 40px CantoraOne", "#ffffff");
		text.textAlign = "center"
		text.textBaseline  = "middle"
		root.gioca.addChild(text);
		*/
		
		root.setContentText(root.gioca.testo,text0001)
	}
	this.frame_48 = function() {
		this.stop();
		
		root = this;
		
		
		function fl_ClickToGoToAndStopAtFrame(e)
		{
			root.gioca.removeEventListener("click", fl_ClickToGoToAndStopAtFrame);
			createjs.Sound.play("clic")
			console.info("CLICK");
			root.gotoAndPlay("choose_level");
		}
		root.audio.alpha = 1
		root.gioca.addEventListener("click", fl_ClickToGoToAndStopAtFrame);
		
		if(!loopStart){
			loopStart = true
			root.loop  = createjs.Sound.play("loop", {loop:-1})
		}
	}
	this.frame_65 = function() {
		root = this
		root.setContentText(root.facile.testo,text0002)
	}
	this.frame_70 = function() {
		root = this
		root.setContentText(root.medio.testo,text0003)
	}
	this.frame_74 = function() {
		root = this
		root.setContentText(root.difficile.testo,text0004)
	}
	this.frame_80 = function() {
		this.stop();
		
		// le variabili globali devono essere inizializzate SENZA IL VAR davanti.
		difficolta = 0;
		
		root = this
		
		
		root.facile.addEventListener("click", vaiAlGioco1);
		root.medio.addEventListener("click", vaiAlGioco2);
		root.difficile.addEventListener("click", vaiAlGioco3);
		
		
		
		
		function vaiAlGioco1(e){
			difficolta = 1;
			vaiAlGioco.bind(this)();
		}
		function vaiAlGioco2(e){
			difficolta = 2;
			vaiAlGioco.bind(this)();
		}
		function vaiAlGioco3(e){
			difficolta = 3;
			vaiAlGioco.bind(this)();
		}
		
		function vaiAlGioco(){
			root.facile.removeEventListener("click", vaiAlGioco1);
			root.medio.removeEventListener("click", vaiAlGioco2);
			root.difficile.removeEventListener("click", vaiAlGioco3);
			createjs.Sound.play("clic")
			root.gotoAndStop("pregame");
		}
	}
	this.frame_81 = function() {
		root = this
		
		root.setContentText(root.boxpregame.testo1,text0009)
		root.setContentText(root.boxpregame.testo2,text0010)
		
		
		
		root.avanti.testo.text = text0001
		root.avanti.addEventListener("click", vaiAlGioco);
		
		
		function vaiAlGioco(e){
			root.avanti.removeEventListener("click", vaiAlGioco);
			createjs.Sound.play("clic")
			root.gotoAndPlay("game");
		}
	}
	this.frame_106 = function() {
		this.stop();
		
		
		
		root.setContentText(root.fiore.testo,text0001)
		
		var stage_width = 920;
		var stage_height = 575;
		var zuccaSelezionata = false;
		var numTessere = 0;
		var arrType = [];
		var arrZucche = [];
		var ultimaAperta = null;
		var canClick = true;
		
		if(difficolta==1){
			time = 60;
		}else if(difficolta==2){
			time = 120;
		}else if(difficolta==3){
			time = 180;
		}
		
		
		root = this;
		
		root.getStringTime = function(time)
		{
			var timeSec = (time%60);
			if(timeSec< 10) timeSec = "0"+timeSec;
			var timeStr = Math.floor(time/60) + ":" + timeSec;
			return timeStr;
		}
		
		var pos = [];
		var scale = 1;
		var pos_1 = [[0.20,0.37],[0.40,0.37],[0.60,0.37],[0.80,0.37],
					 [0.20,0.63],[0.40,0.63],[0.60,0.63],[0.80,0.63],]
					 		 
		var pos_2 = [[0.20,0.25],[0.40,0.25],[0.60,0.25],[0.80,0.25],
					 [0.20,0.42],[0.40,0.42],[0.60,0.42],[0.80,0.42],
					 [0.20,0.59],[0.40,0.59],[0.60,0.59],[0.80,0.59],
					 [0.20,0.76],[0.40,0.76],[0.60,0.76],[0.80,0.76],]
		
		var pos_3 = [[0.15,0.25],[0.29,0.25],[0.43,0.25],[0.57,0.25],[0.71,0.25],[0.85,0.25],
					 [0.15,0.42],[0.29,0.42],[0.43,0.42],[0.57,0.42],[0.71,0.42],[0.85,0.42],
					 [0.15,0.59],[0.29,0.59],[0.43,0.59],[0.57,0.59],[0.71,0.59],[0.85,0.59],
					 [0.15,0.76],[0.29,0.76],[0.43,0.76],[0.57,0.76],[0.71,0.76],[0.85,0.76]]
		
		
		
		if(difficolta==1){
			pos = pos_1;
			numTessere = 8;
			scale = 1;
		}else if(difficolta==2){
			pos = pos_2;
			numTessere = 16;
			scale = 0.8;
		}else if(difficolta==3){
			pos = pos_3;
			numTessere = 24;
			scale = 0.6;
		}
		
		for(var i=0; i < numTessere*0.5; i++)
		{
			arrType.push(i);
			arrType.push(i);
		}
		arrType.sort(randomize);
		
		for(var i=0; i< pos.length; i++)
		{
			var zucca = null;
			if(difficolta==1)zucca = new lib.Zucca1();
			if(difficolta==2)zucca = new lib.Zucca2();
			if(difficolta==3)zucca = new lib.Zucca3();
			zucca.x = pos[i][0]*stage_width;
			zucca.y = pos[i][1]*stage_height;
			zucca.scaleX = zucca.scaleY = scale;
			zucca.type = arrType[i];
			
			zucca.interno.gotoAndStop(arrType[i]);
			zucca.selected = false;
			zucca.found = false;
			zucca.addEventListener("click", aproZucca.bind(this,zucca));
			root.addChild(zucca);
			arrZucche.push(zucca);
		}
		
		aggiornaTempo();
		
		function aproZucca(zucca){
		
			if(!canClick)
				return;
			
			if(zucca.found)
				return;
			
			if(!zucca.selected)
			{
				zucca.selected = true;
				zucca.gotoAndPlay("apri");
				zucca.interno.gotoAndStop(zucca.type);
				if(ultimaAperta == null){
					createjs.Sound.play("confirm")
					ultimaAperta = zucca;
				}else
				{
					if(ultimaAperta.type == zucca.type)
					{
						createjs.Sound.play("giraOK")
						zucca.found = true;
						ultimaAperta.found = true;
						//console.info("sono uguali!!!");
						
						var finito = controlloFineGioco();
						if(finito)
						{
							TweenMax.delayedCall(1,vaiAlFinale,[true]);
						}		
		
						
					}else
					{
						createjs.Sound.play("giraSbagliato")
						zucca.selected = false;
						ultimaAperta.selected = false;
						canClick = false;
						TweenMax.delayedCall(1.5,chiudiZucche,[zucca,ultimaAperta]);
					}
					
					ultimaAperta = null;
				}
			}
		
		}
		
		
		function chiudiZucche(zucca1, zucca2)
		{
			zucca1.gotoAndPlay("chiudi");
			zucca2.gotoAndPlay("chiudi");
			zucca1.interno_1.gotoAndStop(zucca1.type);
			zucca2.interno_1.gotoAndStop(zucca2.type);
			
			canClick = true;
		}
		
		
		function controlloFineGioco(){
			var giocoFinito = true;
			for(var i=0; i< arrZucche.length; i++)
			{
				if(!arrZucche[i].found){
					giocoFinito = false;
					break;
				}
			}
			
			return giocoFinito;
		}
		
		
		function aggiornaTempo()
		{
			
			time--;
			root.setContentText(root.fiore.testo,time)
			TweenMax.delayedCall(1, aggiornaTempo);
			if(time==0)vaiAlFinale(false)
		}
		
		
		
		
		function vaiAlFinale(_vince)
		{
			
			root.setContentText(root.fiore.testo,"")
			TweenMax.killAll();
			
			for(var i=0; i< arrZucche.length; i++)
			{
				arrZucche[i].removeEventListener("click", aproZucca.bind(this,zucca));
				root.removeChild(arrZucche[i]);
			}
			
			arrZucche = [];
			
			if(_vince)root.gotoAndPlay("finishok");
			else root.gotoAndPlay("finishko");
		}
		
		function randomize(a, b){
			if(Math.floor(Math.random()*2) == 0)
				return 1;
			else 
				return -1;
		}
	}
	this.frame_107 = function() {
		createjs.Sound.play("endPos")
	}
	this.frame_131 = function() {
		// qui devo settare i valori
		//console.info(this);
		this.stop()
		
		root = this
		
		
		//time = 10
		//difficolta = 1
		
		
		var point = time * 25
		
		
		
		
		
		point += difficolta*50;
		
		
		
		
		
		
		root.setContentText(root.boxfinaleok.testo1,text0005)
		root.setContentText(root.boxfinaleok.testo1ombra,text0005)
		root.setContentText(root.boxfinaleok.testo1b,text0005b)
		root.setContentText(root.boxfinaleok.testo2,text0006 + " " + time + " sec")
		root.setContentText(root.boxfinaleok.testo3,text0007 + " " + point)
		
		
		
		
		/*
		btn_restart = new lib.Button1();
		btn_restart.x = 207,45;
		btn_restart.y = 428,5;
		btn_restart.addEventListener("click", restartGame.bind(this));
		btn_restart.addEventListener("added",loadRestart.bind(this))
		root.addChild(btn_restart);
		
		function loadRestart(e){
			var text = new createjs.Text(text0008, "bold 24px Lora", "#ffffff");
			text.textAlign = "center"
			text.textBaseline  = "middle"
			btn_restart.addChild(text);
		}
		*/
		
		root.rigiocaok.testo.text = text0008
		root.rigiocaok.addEventListener("click", restartGame);
		
		
		
		function restartGame()
		{
			root.setContentText(root.boxfinaleok.testo1,"")
			root.setContentText(root.boxfinaleok.testo2,"")
			root.setContentText(root.boxfinaleok.testo3,"")
			root.setContentText(root.boxfinaleok.testo1ombra,"")
			root.setContentText(root.boxfinaleok.testo1b,"")
			createjs.Sound.play("clic")
			root.rigiocaok.removeEventListener("click", restartGame);
			root.gotoAndPlay("home");
		}
	}
	this.frame_132 = function() {
		createjs.Sound.play("EndNeg")
	}
	this.frame_150 = function() {
		// qui devo settare i valori
		//console.info(this);
		this.stop()
		
		root = this
		
		
		
		root.boxfinaleko.testo1.text = text0011
		root.boxfinaleko.testo1b.text = text0011
		root.boxfinaleko.testo2.text = text0012
		
		
		root.rigiocako.testo.text = text0008
		
		root.rigiocako.addEventListener("click", restartGameko);
		
		
		
		function restartGameko()
		{
			root.boxfinaleko.testo1.text = ""
			root.boxfinaleko.testo2.text = ""
			root.boxfinaleko.testo1b.text = ""
			createjs.Sound.play("clic")
			root.rigiocako.removeEventListener("click", restartGameko);
			root.gotoAndPlay("home");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27).call(this.frame_27).wait(21).call(this.frame_48).wait(17).call(this.frame_65).wait(5).call(this.frame_70).wait(4).call(this.frame_74).wait(6).call(this.frame_80).wait(1).call(this.frame_81).wait(25).call(this.frame_106).wait(1).call(this.frame_107).wait(24).call(this.frame_131).wait(1).call(this.frame_132).wait(18).call(this.frame_150).wait(1));

	// Livello_1
	this.audio = new lib.Audio();
	this.audio.name = "audio";
	this.audio.setTransform(878.5,533.5);

	this.timeline.addTween(cjs.Tween.get(this.audio).wait(151));

	// Content 1
	this.difficile = new lib.pulsPlay();
	this.difficile.name = "difficile";
	this.difficile.setTransform(1065.7,458.65);
	this.difficile._off = true;

	this.timeline.addTween(cjs.Tween.get(this.difficile).wait(74).to({_off:false},0).to({x:745.7},6,cjs.Ease.get(1)).to({_off:true},1).wait(70));

	// medio
	this.medio = new lib.pulsPlay();
	this.medio.name = "medio";
	this.medio.setTransform(1065.7,286.65);
	this.medio._off = true;

	this.timeline.addTween(cjs.Tween.get(this.medio).wait(70).to({_off:false},0).to({x:745.7},10).to({_off:true},1).wait(70));

	// facile
	this.facile = new lib.pulsPlay();
	this.facile.name = "facile";
	this.facile.setTransform(1065.7,114.7);
	this.facile._off = true;

	this.timeline.addTween(cjs.Tween.get(this.facile).wait(65).to({_off:false},0).to({x:745.7},15,cjs.Ease.get(1)).to({_off:true},1).wait(70));

	// Livello 7
	this.gioca = new lib.pulsPlay();
	this.gioca.name = "gioca";
	this.gioca.setTransform(751.95,-53.9);
	this.gioca._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gioca).wait(27).to({_off:false},0).wait(1).to({regX:-9.8,regY:-10.9,x:742.15,y:-49.7},0).wait(1).to({y:-35.35},0).wait(1).to({y:-21.7},0).wait(1).to({y:-8.8},0).wait(1).to({y:3.45},0).wait(1).to({y:15},0).wait(1).to({y:25.85},0).wait(1).to({y:36},0).wait(1).to({y:45.45},0).wait(1).to({y:54.2},0).wait(1).to({y:62.25},0).wait(1).to({y:69.6},0).wait(1).to({y:76.25},0).wait(1).to({y:82.2},0).wait(1).to({y:87.45},0).wait(1).to({y:92},0).wait(1).to({y:95.85},0).wait(1).to({y:99},0).wait(1).to({y:101.45},0).wait(1).to({regX:0,regY:0,x:752,y:114.15},0).wait(1).to({regX:-9.8,regY:-10.9,x:742.15,y:104.3},0).wait(1).to({regX:0,regY:0,x:751.95,y:115.6},0).to({y:-73.9},4,cjs.Ease.get(-1)).to({_off:true},1).wait(97));

	// baglio
	this.logo = new lib.baglio();
	this.logo.name = "logo";
	this.logo.setTransform(714.95,395,0.4145,0.4145,49.7283);
	this.logo._off = true;

	this.instance = new lib.roseend("synched",0);
	this.instance.setTransform(1101.5,304.5);
	this.instance._off = true;

	this.instance_1 = new lib.Simbolo8("synched",0);
	this.instance_1.setTransform(-234,328);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(17).to({_off:false},0).to({scaleX:1.0171,scaleY:1.0171,rotation:0},7,cjs.Ease.get(1)).wait(25).to({regY:0.1,scaleX:0.7766,scaleY:0.7766,x:401.4,y:426.6},16).to({_off:true},16).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(107).to({_off:false},0).to({x:701.5},12,cjs.Ease.get(1)).to({_off:true},13).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(137).to({_off:false},0).to({x:165},3).wait(11));

	// roseHome
	this.instance_2 = new lib.roseHome("synched",0);
	this.instance_2.setTransform(460,1200.55);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({regX:-108.4,regY:-261.8,x:351.6,y:935.3},0).wait(1).to({y:924.4},0).wait(1).to({y:905.15},0).wait(1).to({y:876.7},0).wait(1).to({y:838.45},0).wait(1).to({y:790.4},0).wait(1).to({y:733.55},0).wait(1).to({y:670.25},0).wait(1).to({y:604.4},0).wait(1).to({y:540.45},0).wait(1).to({y:482.4},0).wait(1).to({y:433},0).wait(1).to({y:393.5},0).wait(1).to({y:364.05},0).wait(1).to({y:344.1},0).wait(1).to({y:332.8},0).wait(1).to({regX:0,regY:0,x:460,y:591.05},0).wait(30).to({startPosition:0},0).wait(1).to({regX:-108.4,regY:-261.8,scaleX:0.9986,scaleY:0.9986,rotation:0.0307,x:350.9,y:329.1},0).wait(1).to({scaleX:0.9946,scaleY:0.9946,rotation:0.1225,x:348.85,y:328.6},0).wait(1).to({scaleX:0.988,scaleY:0.988,rotation:0.2737,x:345.45,y:327.9},0).wait(1).to({scaleX:0.9789,scaleY:0.9789,rotation:0.4814,x:340.75,y:326.85},0).wait(1).to({scaleX:0.9674,scaleY:0.9674,rotation:0.7414,x:334.9,y:325.6},0).wait(1).to({scaleX:0.954,scaleY:0.954,rotation:1.0476,x:327.85,y:324.1},0).wait(1).to({scaleX:0.9389,scaleY:0.9389,rotation:1.3926,x:319.95,y:322.55},0).wait(1).to({scaleX:0.9224,scaleY:0.9224,rotation:1.7673,x:311.35,y:320.75},0).wait(1).to({scaleX:0.9051,scaleY:0.9051,rotation:2.1614,x:302.25,y:318.95},0).wait(1).to({scaleX:0.8874,scaleY:0.8874,rotation:2.564,x:292.85,y:317.15},0).wait(1).to({scaleX:0.8699,scaleY:0.8699,rotation:2.9635,x:283.5,y:315.5},0).wait(1).to({scaleX:0.8529,scaleY:0.8529,rotation:3.3489,x:274.4,y:313.8},0).wait(1).to({scaleX:0.8371,scaleY:0.8371,rotation:3.7097,x:265.85,y:312.3},0).wait(1).to({scaleX:0.8227,scaleY:0.8227,rotation:4.0366,x:258,y:310.9},0).wait(1).to({scaleX:0.8102,scaleY:0.8102,rotation:4.3218,x:251.2,y:309.8},0).wait(1).to({regX:0,regY:0,scaleX:0.7998,scaleY:0.7998,rotation:4.5588,x:315.25,y:524.45},0).to({_off:true},16).wait(70));

	// Livello_3
	this.instance_3 = new lib.Simbolo5();
	this.instance_3.setTransform(460,728);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:435.5},4).to({_off:true},77).wait(70));

	// baglio
	this.fiore = new lib.cocca_1();
	this.fiore.name = "fiore";
	this.fiore.setTransform(455,59,0.3,0.3,-24.0187);
	this.fiore._off = true;

	this.rigiocaok = new lib.pulsPlay();
	this.rigiocaok.name = "rigiocaok";
	this.rigiocaok.setTransform(317.25,511.55);

	this.rigiocako = new lib.pulsPlay();
	this.rigiocako.name = "rigiocako";
	this.rigiocako.setTransform(611,501);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.fiore}]},97).to({state:[{t:this.fiore}]},5).to({state:[]},5).to({state:[{t:this.rigiocaok}]},24).to({state:[]},1).to({state:[{t:this.rigiocako}]},18).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.fiore).wait(97).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:445},5,cjs.Ease.get(1)).to({_off:true},5).wait(44));

	// bghome
	this.avanti = new lib.pulsPlay();
	this.avanti.name = "avanti";
	this.avanti.setTransform(460,499.55);

	this.boxpregame = new lib.tabelEnd();
	this.boxpregame.name = "boxpregame";
	this.boxpregame.setTransform(460,274);

	this.instance_4 = new lib.finGame_1("synched",0);
	this.instance_4.setTransform(460,-263.2);
	this.instance_4._off = true;

	this.boxfinaleok = new lib.tabelEndOK();
	this.boxfinaleok.name = "boxfinaleok";
	this.boxfinaleok.setTransform(286.5,-226);
	this.boxfinaleok._off = true;

	this.boxfinaleko = new lib.tabelEndKo();
	this.boxfinaleko.name = "boxfinaleko";
	this.boxfinaleko.setTransform(643.5,-235);
	this.boxfinaleko._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.boxpregame},{t:this.avanti}]},81).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},14).to({state:[{t:this.instance_4}]},5).to({state:[]},6).to({state:[{t:this.boxfinaleok}]},6).to({state:[{t:this.boxfinaleok}]},1).to({state:[{t:this.boxfinaleok}]},1).to({state:[{t:this.boxfinaleok}]},1).to({state:[{t:this.boxfinaleok}]},1).to({state:[{t:this.boxfinaleok}]},1).to({state:[{t:this.boxfinaleok}]},1).to({state:[{t:this.boxfinaleok}]},1).to({state:[{t:this.boxfinaleok}]},1).to({state:[{t:this.boxfinaleok}]},1).to({state:[{t:this.boxfinaleok}]},1).to({state:[{t:this.boxfinaleok}]},1).to({state:[{t:this.boxfinaleko}]},8).to({state:[{t:this.boxfinaleko}]},7).to({state:[{t:this.boxfinaleko}]},4).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(82).to({_off:false},0).to({y:323.3},14,cjs.Ease.get(-1)).to({y:303.5},5).to({_off:true},6).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.boxfinaleok).wait(113).to({_off:false},0).wait(1).to({regX:34.5,regY:28,x:321,y:-183.7},0).wait(1).to({y:-140.85},0).wait(1).to({y:-69.4},0).wait(1).to({y:30.6},0).wait(1).to({y:159.15},0).wait(1).to({regX:0,regY:0,x:286.5,y:288.35},0).wait(1).to({regX:34.5,regY:28,x:321,y:314.15},0).wait(1).to({y:311.6},0).wait(1).to({y:308.75},0).wait(1).to({y:305.5},0).wait(1).to({regX:0,regY:0,x:286.5,y:274},0).to({_off:true},8).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.boxfinaleko).wait(132).to({_off:false},0).to({y:75},7,cjs.Ease.get(-1)).to({y:275},4).wait(8));

	// BackGround
	this.instance_5 = new lib.bghome("synched",0);
	this.instance_5.setTransform(460,287.5);

	this.instance_6 = new lib.odfococd();

	this.instance_7 = new lib.bgendNEW22();

	this.instance_8 = new lib.bg2();
	this.instance_8.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},81).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},25).wait(44));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(6,-226.7,1405.7,1414.6000000000001);
// library properties:
lib.properties = {
	id: '17AFBC472E405D45A6983AC97FAB9E8E',
	width: 920,
	height: 575,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/game_atlas_1.png?1596183362026", id:"game_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['17AFBC472E405D45A6983AC97FAB9E8E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;