(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"blinkin_atlas_", frames: [[0,614,89,34],[0,0,397,612]]}
];


// symbols:



(lib.eyes1_ = function() {
	this.spriteSheet = ss["blinkin_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.flint_big2 = function() {
	this.spriteSheet = ss["blinkin_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Symbol22222 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD3B4").s().p("AkjG8IAAt3IJHAAIAAN3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22222, new cjs.Rectangle(-29.2,-44.3,58.4,88.8), null);


(lib.asasda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.instance = new lib.eyes1_();
	this.instance.parent = this;
	this.instance.setTransform(-44.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.asasda, new cjs.Rectangle(-44.5,-17,89,34), null);


// stage content:
(lib.blinkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		this.gotoAndPlay(Math.ceil(Math.random()*20)+7);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(94));

	// eye2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AQnTRQgXgMgdg1QgZgtgUhsQgciZgGgUQgfh0AIhbQAIhmA5gjQApgaAiAoIAbAhQARAQATAAQAqAAArAOQAnAMAZARQAkAaAWBEQAWBDAABSQAACjg/BzQg+BzhZAAQgyAAgOgHg");
	mask.setTransform(134.1,124);

	// Warstwa 6
	this.instance = new lib.Symbol22222();
	this.instance.parent = this;
	this.instance.setTransform(247.7,125.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:203.4},3).to({y:125.9},3).to({_off:true},1).wait(94));

	// eye1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AKeTVQgqgXgjg4Qghg3gNhIQgLg7AAheQAAhfAnhrQAqh2AzAAQAvABBBgZQA4gVAogcQAigXAQAcIAQAmQANAfAOAXQAiA4AABSQAABLgdBTQgSA0gTBiQgSBbgSAsQgRAtgkAYQgjAYgyAAQg3AAgmgTg");
	mask_1.setTransform(100.3,125.6);

	// Warstwa 3
	this.instance_1 = new lib.Symbol22222();
	this.instance_1.parent = this;
	this.instance_1.setTransform(175.2,125.9);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:210.9},3).to({y:128.4},3).to({_off:true},1).wait(94));

	// Warstwa 4
	this.eyes = new lib.asasda();
	this.eyes.parent = this;
	this.eyes.setTransform(209.5,209);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(101));

	// Warstwa 1
	this.instance_2 = new lib.flint_big2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(198.5,306,397,612);
// library properties:
lib.properties = {
	width: 397,
	height: 612,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"img/blinkin_atlas_.png?1501669562724", id:"blinkin_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, img = img||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, img, createjs, ss, AdobeAn;