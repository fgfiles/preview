(function ($hx_exports) { "use strict";
$hx_exports.openfl = $hx_exports.openfl || {};
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { };
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.preloader = null;
ApplicationMain.embed = $hx_exports.openfl.embed = function(elementName,width,height,background) {
	var element = null;
	if(elementName != null) element = window.document.getElementById(elementName);
	var color = null;
	if(background != null) {
		background = StringTools.replace(background,"#","");
		if(background.indexOf("0x") > -1) color = Std.parseInt(background); else color = Std.parseInt("0x" + background);
	}
	openfl.Lib.create(element,width,height,color);
	ApplicationMain.preloader = new screens.PreLoader();
	openfl.Lib.current.addChild(ApplicationMain.preloader);
	ApplicationMain.preloader.onInit();
	var sounds = [];
	var id;
	var image = new Image();
	id = "img/animation/animJerry.png";
	ApplicationMain.images.set(id,image);
	image.onload = ApplicationMain.image_onLoad;
	image.src = id;
	ApplicationMain.total++;
	var urlLoader = new openfl.net.URLLoader();
	urlLoader.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("img/animation/animJerry.xml",urlLoader);
	ApplicationMain.total++;
	var image1 = new Image();
	id = "img/animation/animNibbles.png";
	ApplicationMain.images.set(id,image1);
	image1.onload = ApplicationMain.image_onLoad;
	image1.src = id;
	ApplicationMain.total++;
	var urlLoader1 = new openfl.net.URLLoader();
	urlLoader1.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("img/animation/animNibbles.xml",urlLoader1);
	ApplicationMain.total++;
	var image2 = new Image();
	id = "img/animation/tom.png";
	ApplicationMain.images.set(id,image2);
	image2.onload = ApplicationMain.image_onLoad;
	image2.src = id;
	ApplicationMain.total++;
	var image3 = new Image();
	id = "img/background/back.png";
	ApplicationMain.images.set(id,image3);
	image3.onload = ApplicationMain.image_onLoad;
	image3.src = id;
	ApplicationMain.total++;
	var image4 = new Image();
	id = "img/background/blocker.png";
	ApplicationMain.images.set(id,image4);
	image4.onload = ApplicationMain.image_onLoad;
	image4.src = id;
	ApplicationMain.total++;
	var image5 = new Image();
	id = "img/background/front.png";
	ApplicationMain.images.set(id,image5);
	image5.onload = ApplicationMain.image_onLoad;
	image5.src = id;
	ApplicationMain.total++;
	var image6 = new Image();
	id = "img/background/gameOverScreen.png";
	ApplicationMain.images.set(id,image6);
	image6.onload = ApplicationMain.image_onLoad;
	image6.src = id;
	ApplicationMain.total++;
	var image7 = new Image();
	id = "img/background/loading.png";
	ApplicationMain.images.set(id,image7);
	image7.onload = ApplicationMain.image_onLoad;
	image7.src = id;
	ApplicationMain.total++;
	var image8 = new Image();
	id = "img/background/titleScreen.png";
	ApplicationMain.images.set(id,image8);
	image8.onload = ApplicationMain.image_onLoad;
	image8.src = id;
	ApplicationMain.total++;
	var image9 = new Image();
	id = "img/buttons/btnHTP.png";
	ApplicationMain.images.set(id,image9);
	image9.onload = ApplicationMain.image_onLoad;
	image9.src = id;
	ApplicationMain.total++;
	var image10 = new Image();
	id = "img/buttons/btnPlay.png";
	ApplicationMain.images.set(id,image10);
	image10.onload = ApplicationMain.image_onLoad;
	image10.src = id;
	ApplicationMain.total++;
	var image11 = new Image();
	id = "img/buttons/btnPressHTP.png";
	ApplicationMain.images.set(id,image11);
	image11.onload = ApplicationMain.image_onLoad;
	image11.src = id;
	ApplicationMain.total++;
	var image12 = new Image();
	id = "img/buttons/btnPressPlay.png";
	ApplicationMain.images.set(id,image12);
	image12.onload = ApplicationMain.image_onLoad;
	image12.src = id;
	ApplicationMain.total++;
	var image13 = new Image();
	id = "img/buttons/btnPressQuit.png";
	ApplicationMain.images.set(id,image13);
	image13.onload = ApplicationMain.image_onLoad;
	image13.src = id;
	ApplicationMain.total++;
	var image14 = new Image();
	id = "img/buttons/btnPressRetry.png";
	ApplicationMain.images.set(id,image14);
	image14.onload = ApplicationMain.image_onLoad;
	image14.src = id;
	ApplicationMain.total++;
	var image15 = new Image();
	id = "img/buttons/btnQuit.png";
	ApplicationMain.images.set(id,image15);
	image15.onload = ApplicationMain.image_onLoad;
	image15.src = id;
	ApplicationMain.total++;
	var image16 = new Image();
	id = "img/buttons/btnRetry.png";
	ApplicationMain.images.set(id,image16);
	image16.onload = ApplicationMain.image_onLoad;
	image16.src = id;
	ApplicationMain.total++;
	var image17 = new Image();
	id = "img/buttons/left_btn.png";
	ApplicationMain.images.set(id,image17);
	image17.onload = ApplicationMain.image_onLoad;
	image17.src = id;
	ApplicationMain.total++;
	var image18 = new Image();
	id = "img/buttons/right_btn.png";
	ApplicationMain.images.set(id,image18);
	image18.onload = ApplicationMain.image_onLoad;
	image18.src = id;
	ApplicationMain.total++;
	var image19 = new Image();
	id = "img/howTo/howtoplay.png";
	ApplicationMain.images.set(id,image19);
	image19.onload = ApplicationMain.image_onLoad;
	image19.src = id;
	ApplicationMain.total++;
	var image20 = new Image();
	id = "img/items/ball.png";
	ApplicationMain.images.set(id,image20);
	image20.onload = ApplicationMain.image_onLoad;
	image20.src = id;
	ApplicationMain.total++;
	var image21 = new Image();
	id = "img/items/ballBreak.png";
	ApplicationMain.images.set(id,image21);
	image21.onload = ApplicationMain.image_onLoad;
	image21.src = id;
	ApplicationMain.total++;
	var image22 = new Image();
	id = "img/items/Cake.png";
	ApplicationMain.images.set(id,image22);
	image22.onload = ApplicationMain.image_onLoad;
	image22.src = id;
	ApplicationMain.total++;
	var image23 = new Image();
	id = "img/items/cakeBreak.png";
	ApplicationMain.images.set(id,image23);
	image23.onload = ApplicationMain.image_onLoad;
	image23.src = id;
	ApplicationMain.total++;
	var image24 = new Image();
	id = "img/items/Cheese.png";
	ApplicationMain.images.set(id,image24);
	image24.onload = ApplicationMain.image_onLoad;
	image24.src = id;
	ApplicationMain.total++;
	var image25 = new Image();
	id = "img/items/cheeseBreak.png";
	ApplicationMain.images.set(id,image25);
	image25.onload = ApplicationMain.image_onLoad;
	image25.src = id;
	ApplicationMain.total++;
	var image26 = new Image();
	id = "img/items/Cookie.png";
	ApplicationMain.images.set(id,image26);
	image26.onload = ApplicationMain.image_onLoad;
	image26.src = id;
	ApplicationMain.total++;
	var image27 = new Image();
	id = "img/items/cookieBreak.png";
	ApplicationMain.images.set(id,image27);
	image27.onload = ApplicationMain.image_onLoad;
	image27.src = id;
	ApplicationMain.total++;
	var image28 = new Image();
	id = "img/items/foodBox.png";
	ApplicationMain.images.set(id,image28);
	image28.onload = ApplicationMain.image_onLoad;
	image28.src = id;
	ApplicationMain.total++;
	var image29 = new Image();
	id = "img/items/hitbox.png";
	ApplicationMain.images.set(id,image29);
	image29.onload = ApplicationMain.image_onLoad;
	image29.src = id;
	ApplicationMain.total++;
	var image30 = new Image();
	id = "img/items/Jelly.png";
	ApplicationMain.images.set(id,image30);
	image30.onload = ApplicationMain.image_onLoad;
	image30.src = id;
	ApplicationMain.total++;
	var image31 = new Image();
	id = "img/items/jellyBreak.png";
	ApplicationMain.images.set(id,image31);
	image31.onload = ApplicationMain.image_onLoad;
	image31.src = id;
	ApplicationMain.total++;
	var image32 = new Image();
	id = "img/items/lamp.png";
	ApplicationMain.images.set(id,image32);
	image32.onload = ApplicationMain.image_onLoad;
	image32.src = id;
	ApplicationMain.total++;
	var image33 = new Image();
	id = "img/items/lampBreak.png";
	ApplicationMain.images.set(id,image33);
	image33.onload = ApplicationMain.image_onLoad;
	image33.src = id;
	ApplicationMain.total++;
	var image34 = new Image();
	id = "img/items/plate.png";
	ApplicationMain.images.set(id,image34);
	image34.onload = ApplicationMain.image_onLoad;
	image34.src = id;
	ApplicationMain.total++;
	var image35 = new Image();
	id = "img/items/plateBreak.png";
	ApplicationMain.images.set(id,image35);
	image35.onload = ApplicationMain.image_onLoad;
	image35.src = id;
	ApplicationMain.total++;
	var image36 = new Image();
	id = "img/items/strawberry.png";
	ApplicationMain.images.set(id,image36);
	image36.onload = ApplicationMain.image_onLoad;
	image36.src = id;
	ApplicationMain.total++;
	var image37 = new Image();
	id = "img/items/strawberryBreak.png";
	ApplicationMain.images.set(id,image37);
	image37.onload = ApplicationMain.image_onLoad;
	image37.src = id;
	ApplicationMain.total++;
	var image38 = new Image();
	id = "img/items/trap.png";
	ApplicationMain.images.set(id,image38);
	image38.onload = ApplicationMain.image_onLoad;
	image38.src = id;
	ApplicationMain.total++;
	var image39 = new Image();
	id = "img/items/trap01.png";
	ApplicationMain.images.set(id,image39);
	image39.onload = ApplicationMain.image_onLoad;
	image39.src = id;
	ApplicationMain.total++;
	var image40 = new Image();
	id = "img/items/trapBreak.png";
	ApplicationMain.images.set(id,image40);
	image40.onload = ApplicationMain.image_onLoad;
	image40.src = id;
	ApplicationMain.total++;
	var image41 = new Image();
	id = "img/ui/gameover numbers/0.png";
	ApplicationMain.images.set(id,image41);
	image41.onload = ApplicationMain.image_onLoad;
	image41.src = id;
	ApplicationMain.total++;
	var image42 = new Image();
	id = "img/ui/gameover numbers/1.png";
	ApplicationMain.images.set(id,image42);
	image42.onload = ApplicationMain.image_onLoad;
	image42.src = id;
	ApplicationMain.total++;
	var image43 = new Image();
	id = "img/ui/gameover numbers/2.png";
	ApplicationMain.images.set(id,image43);
	image43.onload = ApplicationMain.image_onLoad;
	image43.src = id;
	ApplicationMain.total++;
	var image44 = new Image();
	id = "img/ui/gameover numbers/3.png";
	ApplicationMain.images.set(id,image44);
	image44.onload = ApplicationMain.image_onLoad;
	image44.src = id;
	ApplicationMain.total++;
	var image45 = new Image();
	id = "img/ui/gameover numbers/4.png";
	ApplicationMain.images.set(id,image45);
	image45.onload = ApplicationMain.image_onLoad;
	image45.src = id;
	ApplicationMain.total++;
	var image46 = new Image();
	id = "img/ui/gameover numbers/5.png";
	ApplicationMain.images.set(id,image46);
	image46.onload = ApplicationMain.image_onLoad;
	image46.src = id;
	ApplicationMain.total++;
	var image47 = new Image();
	id = "img/ui/gameover numbers/6.png";
	ApplicationMain.images.set(id,image47);
	image47.onload = ApplicationMain.image_onLoad;
	image47.src = id;
	ApplicationMain.total++;
	var image48 = new Image();
	id = "img/ui/gameover numbers/7.png";
	ApplicationMain.images.set(id,image48);
	image48.onload = ApplicationMain.image_onLoad;
	image48.src = id;
	ApplicationMain.total++;
	var image49 = new Image();
	id = "img/ui/gameover numbers/8.png";
	ApplicationMain.images.set(id,image49);
	image49.onload = ApplicationMain.image_onLoad;
	image49.src = id;
	ApplicationMain.total++;
	var image50 = new Image();
	id = "img/ui/gameover numbers/9.png";
	ApplicationMain.images.set(id,image50);
	image50.onload = ApplicationMain.image_onLoad;
	image50.src = id;
	ApplicationMain.total++;
	var image51 = new Image();
	id = "img/ui/ketchup numbers/0.png";
	ApplicationMain.images.set(id,image51);
	image51.onload = ApplicationMain.image_onLoad;
	image51.src = id;
	ApplicationMain.total++;
	var image52 = new Image();
	id = "img/ui/ketchup numbers/1.png";
	ApplicationMain.images.set(id,image52);
	image52.onload = ApplicationMain.image_onLoad;
	image52.src = id;
	ApplicationMain.total++;
	var image53 = new Image();
	id = "img/ui/ketchup numbers/2.png";
	ApplicationMain.images.set(id,image53);
	image53.onload = ApplicationMain.image_onLoad;
	image53.src = id;
	ApplicationMain.total++;
	var image54 = new Image();
	id = "img/ui/ketchup numbers/3.png";
	ApplicationMain.images.set(id,image54);
	image54.onload = ApplicationMain.image_onLoad;
	image54.src = id;
	ApplicationMain.total++;
	var image55 = new Image();
	id = "img/ui/ketchup numbers/4.png";
	ApplicationMain.images.set(id,image55);
	image55.onload = ApplicationMain.image_onLoad;
	image55.src = id;
	ApplicationMain.total++;
	var image56 = new Image();
	id = "img/ui/ketchup numbers/5.png";
	ApplicationMain.images.set(id,image56);
	image56.onload = ApplicationMain.image_onLoad;
	image56.src = id;
	ApplicationMain.total++;
	var image57 = new Image();
	id = "img/ui/ketchup numbers/6.png";
	ApplicationMain.images.set(id,image57);
	image57.onload = ApplicationMain.image_onLoad;
	image57.src = id;
	ApplicationMain.total++;
	var image58 = new Image();
	id = "img/ui/ketchup numbers/7.png";
	ApplicationMain.images.set(id,image58);
	image58.onload = ApplicationMain.image_onLoad;
	image58.src = id;
	ApplicationMain.total++;
	var image59 = new Image();
	id = "img/ui/ketchup numbers/8.png";
	ApplicationMain.images.set(id,image59);
	image59.onload = ApplicationMain.image_onLoad;
	image59.src = id;
	ApplicationMain.total++;
	var image60 = new Image();
	id = "img/ui/ketchup numbers/9.png";
	ApplicationMain.images.set(id,image60);
	image60.onload = ApplicationMain.image_onLoad;
	image60.src = id;
	ApplicationMain.total++;
	var image61 = new Image();
	id = "img/ui/loading01.png";
	ApplicationMain.images.set(id,image61);
	image61.onload = ApplicationMain.image_onLoad;
	image61.src = id;
	ApplicationMain.total++;
	var image62 = new Image();
	id = "img/ui/loading02.png";
	ApplicationMain.images.set(id,image62);
	image62.onload = ApplicationMain.image_onLoad;
	image62.src = id;
	ApplicationMain.total++;
	var image63 = new Image();
	id = "img/ui/loading03.png";
	ApplicationMain.images.set(id,image63);
	image63.onload = ApplicationMain.image_onLoad;
	image63.src = id;
	ApplicationMain.total++;
	var image64 = new Image();
	id = "img/ui/logo.png";
	ApplicationMain.images.set(id,image64);
	image64.onload = ApplicationMain.image_onLoad;
	image64.src = id;
	ApplicationMain.total++;
	var image65 = new Image();
	id = "img/ui/meter01.png";
	ApplicationMain.images.set(id,image65);
	image65.onload = ApplicationMain.image_onLoad;
	image65.src = id;
	ApplicationMain.total++;
	var image66 = new Image();
	id = "img/ui/meter02.png";
	ApplicationMain.images.set(id,image66);
	image66.onload = ApplicationMain.image_onLoad;
	image66.src = id;
	ApplicationMain.total++;
	var image67 = new Image();
	id = "img/ui/meter03.png";
	ApplicationMain.images.set(id,image67);
	image67.onload = ApplicationMain.image_onLoad;
	image67.src = id;
	ApplicationMain.total++;
	var image68 = new Image();
	id = "img/ui/numbers/0.png";
	ApplicationMain.images.set(id,image68);
	image68.onload = ApplicationMain.image_onLoad;
	image68.src = id;
	ApplicationMain.total++;
	var image69 = new Image();
	id = "img/ui/numbers/1.png";
	ApplicationMain.images.set(id,image69);
	image69.onload = ApplicationMain.image_onLoad;
	image69.src = id;
	ApplicationMain.total++;
	var image70 = new Image();
	id = "img/ui/numbers/2.png";
	ApplicationMain.images.set(id,image70);
	image70.onload = ApplicationMain.image_onLoad;
	image70.src = id;
	ApplicationMain.total++;
	var image71 = new Image();
	id = "img/ui/numbers/3.png";
	ApplicationMain.images.set(id,image71);
	image71.onload = ApplicationMain.image_onLoad;
	image71.src = id;
	ApplicationMain.total++;
	var image72 = new Image();
	id = "img/ui/numbers/4.png";
	ApplicationMain.images.set(id,image72);
	image72.onload = ApplicationMain.image_onLoad;
	image72.src = id;
	ApplicationMain.total++;
	var image73 = new Image();
	id = "img/ui/numbers/5.png";
	ApplicationMain.images.set(id,image73);
	image73.onload = ApplicationMain.image_onLoad;
	image73.src = id;
	ApplicationMain.total++;
	var image74 = new Image();
	id = "img/ui/numbers/6.png";
	ApplicationMain.images.set(id,image74);
	image74.onload = ApplicationMain.image_onLoad;
	image74.src = id;
	ApplicationMain.total++;
	var image75 = new Image();
	id = "img/ui/numbers/7.png";
	ApplicationMain.images.set(id,image75);
	image75.onload = ApplicationMain.image_onLoad;
	image75.src = id;
	ApplicationMain.total++;
	var image76 = new Image();
	id = "img/ui/numbers/8.png";
	ApplicationMain.images.set(id,image76);
	image76.onload = ApplicationMain.image_onLoad;
	image76.src = id;
	ApplicationMain.total++;
	var image77 = new Image();
	id = "img/ui/numbers/9.png";
	ApplicationMain.images.set(id,image77);
	image77.onload = ApplicationMain.image_onLoad;
	image77.src = id;
	ApplicationMain.total++;
	var image78 = new Image();
	id = "img/ui/start.png";
	ApplicationMain.images.set(id,image78);
	image78.onload = ApplicationMain.image_onLoad;
	image78.src = id;
	ApplicationMain.total++;
	var image79 = new Image();
	id = "img/ui/uiScore.png";
	ApplicationMain.images.set(id,image79);
	image79.onload = ApplicationMain.image_onLoad;
	image79.src = id;
	ApplicationMain.total++;
	var image80 = new Image();
	id = "img/ui/warning 02.png";
	ApplicationMain.images.set(id,image80);
	image80.onload = ApplicationMain.image_onLoad;
	image80.src = id;
	ApplicationMain.total++;
	var image81 = new Image();
	id = "img/ui/x2.png";
	ApplicationMain.images.set(id,image81);
	image81.onload = ApplicationMain.image_onLoad;
	image81.src = id;
	ApplicationMain.total++;
	var image82 = new Image();
	id = "img/ui/x3.png";
	ApplicationMain.images.set(id,image82);
	image82.onload = ApplicationMain.image_onLoad;
	image82.src = id;
	ApplicationMain.total++;
	var image83 = new Image();
	id = "img/ui/x4.png";
	ApplicationMain.images.set(id,image83);
	image83.onload = ApplicationMain.image_onLoad;
	image83.src = id;
	ApplicationMain.total++;
	var sound = haxe.io.Path.withoutExtension("audio/ButtonClick.mp3");
	if(!HxOverrides.remove(sounds,sound)) ApplicationMain.total++;
	sounds.push(sound);
	var sound1 = haxe.io.Path.withoutExtension("audio/ButtonClick.ogg");
	if(!HxOverrides.remove(sounds,sound1)) ApplicationMain.total++;
	sounds.push(sound1);
	var sound2 = haxe.io.Path.withoutExtension("audio/FoodGet.mp3");
	if(!HxOverrides.remove(sounds,sound2)) ApplicationMain.total++;
	sounds.push(sound2);
	var sound3 = haxe.io.Path.withoutExtension("audio/FoodGet.ogg");
	if(!HxOverrides.remove(sounds,sound3)) ApplicationMain.total++;
	sounds.push(sound3);
	var sound4 = haxe.io.Path.withoutExtension("audio/gameOverSFX.mp3");
	if(!HxOverrides.remove(sounds,sound4)) ApplicationMain.total++;
	sounds.push(sound4);
	var sound5 = haxe.io.Path.withoutExtension("audio/gameOverSFX.ogg");
	if(!HxOverrides.remove(sounds,sound5)) ApplicationMain.total++;
	sounds.push(sound5);
	var sound6 = haxe.io.Path.withoutExtension("audio/strawberrygetsfx.mp3");
	if(!HxOverrides.remove(sounds,sound6)) ApplicationMain.total++;
	sounds.push(sound6);
	var sound7 = haxe.io.Path.withoutExtension("audio/strawberrygetsfx.ogg");
	if(!HxOverrides.remove(sounds,sound7)) ApplicationMain.total++;
	sounds.push(sound7);
	var sound8 = haxe.io.Path.withoutExtension("audio/Strawberrygetsfx_02.mp3");
	if(!HxOverrides.remove(sounds,sound8)) ApplicationMain.total++;
	sounds.push(sound8);
	var sound9 = haxe.io.Path.withoutExtension("audio/Strawberrygetsfx_02.ogg");
	if(!HxOverrides.remove(sounds,sound9)) ApplicationMain.total++;
	sounds.push(sound9);
	var sound10 = haxe.io.Path.withoutExtension("audio/TrapHitSFX.mp3");
	if(!HxOverrides.remove(sounds,sound10)) ApplicationMain.total++;
	sounds.push(sound10);
	var sound11 = haxe.io.Path.withoutExtension("audio/TrapHitSFX.ogg");
	if(!HxOverrides.remove(sounds,sound11)) ApplicationMain.total++;
	sounds.push(sound11);
	if(ApplicationMain.total == 0) ApplicationMain.start(); else {
		var $it0 = ApplicationMain.urlLoaders.keys();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			var urlLoader2 = ApplicationMain.urlLoaders.get(path);
			urlLoader2.addEventListener("complete",ApplicationMain.loader_onComplete);
			urlLoader2.load(new openfl.net.URLRequest(path));
		}
		var _g = 0;
		while(_g < sounds.length) {
			var soundName = sounds[_g];
			++_g;
			var sound12 = new openfl.media.Sound();
			sound12.addEventListener(openfl.events.Event.COMPLETE,ApplicationMain.sound_onComplete);
			sound12.addEventListener(openfl.events.IOErrorEvent.IO_ERROR,ApplicationMain.sound_onIOError);
			sound12.load(new openfl.net.URLRequest(soundName + ".ogg"));
		}
	}
};
ApplicationMain.main = function() {
};
ApplicationMain.start = function() {
	ApplicationMain.preloader.addEventListener(openfl.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	ApplicationMain.preloader.onLoaded();
};
ApplicationMain.image_onLoad = function(_) {
	ApplicationMain.assetsLoaded++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded,ApplicationMain.total);
	if(ApplicationMain.assetsLoaded == ApplicationMain.total) ApplicationMain.start();
};
ApplicationMain.loader_onComplete = function(event) {
	ApplicationMain.assetsLoaded++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded,ApplicationMain.total);
	if(ApplicationMain.assetsLoaded == ApplicationMain.total) ApplicationMain.start();
};
ApplicationMain.preloader_onComplete = function(event) {
	ApplicationMain.preloader.removeEventListener(openfl.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	openfl.Lib.current.removeChild(ApplicationMain.preloader);
	ApplicationMain.preloader = null;
	var hasMain = false;
	var _g = 0;
	var _g1 = Type.getClassFields(Main);
	while(_g < _g1.length) {
		var methodName = _g1[_g];
		++_g;
		if(methodName == "main") {
			hasMain = true;
			break;
		}
	}
	if(hasMain) Reflect.callMethod(Main,Reflect.field(Main,"main"),[]); else {
		var instance = Type.createInstance(DocumentClass,[]);
		if(js.Boot.__instanceof(instance,openfl.display.DisplayObject)) openfl.Lib.current.addChild(instance); else {
			haxe.Log.trace("Error: No entry point found",{ fileName : "ApplicationMain.hx", lineNumber : 1214, className : "ApplicationMain", methodName : "preloader_onComplete"});
			haxe.Log.trace("If you are using DCE with a static main, you may need to @:keep the function",{ fileName : "ApplicationMain.hx", lineNumber : 1215, className : "ApplicationMain", methodName : "preloader_onComplete"});
		}
	}
};
ApplicationMain.sound_onComplete = function(event) {
	ApplicationMain.assetsLoaded++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded,ApplicationMain.total);
	if(ApplicationMain.assetsLoaded == ApplicationMain.total) ApplicationMain.start();
};
ApplicationMain.sound_onIOError = function(event) {
	ApplicationMain.assetsLoaded++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded,ApplicationMain.total);
	if(ApplicationMain.assetsLoaded == ApplicationMain.total) ApplicationMain.start();
};
var openfl = {};
openfl.events = {};
openfl.events.IEventDispatcher = function() { };
$hxClasses["openfl.events.IEventDispatcher"] = openfl.events.IEventDispatcher;
openfl.events.IEventDispatcher.__name__ = ["openfl","events","IEventDispatcher"];
openfl.events.IEventDispatcher.prototype = {
	__class__: openfl.events.IEventDispatcher
};
openfl.events.EventDispatcher = function(target) {
	if(target != null) this.__targetDispatcher = target;
};
$hxClasses["openfl.events.EventDispatcher"] = openfl.events.EventDispatcher;
openfl.events.EventDispatcher.__name__ = ["openfl","events","EventDispatcher"];
openfl.events.EventDispatcher.__interfaces__ = [openfl.events.IEventDispatcher];
openfl.events.EventDispatcher.__sortByPriority = function(l1,l2) {
	if(l1.priority == l2.priority) return 0; else if(l1.priority > l2.priority) return -1; else return 1;
};
openfl.events.EventDispatcher.prototype = {
	addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		if(this.__eventMap == null) this.__eventMap = new haxe.ds.StringMap();
		if(!this.__eventMap.exists(type)) {
			var list = new Array();
			list.push(new openfl.events._EventDispatcher.Listener(listener,useCapture,priority));
			this.__eventMap.set(type,list);
		} else {
			var list1 = this.__eventMap.get(type);
			list1.push(new openfl.events._EventDispatcher.Listener(listener,useCapture,priority));
			list1.sort(openfl.events.EventDispatcher.__sortByPriority);
		}
	}
	,dispatchEvent: function(event) {
		if(this.__eventMap == null || event == null) return false;
		var list = this.__eventMap.get(event.type);
		if(list == null) return false;
		if(event.target == null) {
			if(this.__targetDispatcher != null) event.target = this.__targetDispatcher; else event.target = this;
		}
		event.currentTarget = this;
		var capture = event.eventPhase == 0;
		var index = 0;
		var listener;
		while(index < list.length) {
			listener = list[index];
			if(listener.useCapture == capture) {
				listener.callback(event);
				if(event.__isCancelledNow) return true;
			}
			if(listener == list[index]) index++;
		}
		return true;
	}
	,hasEventListener: function(type) {
		if(this.__eventMap == null) return false;
		return this.__eventMap.exists(type);
	}
	,removeEventListener: function(type,listener,capture) {
		if(capture == null) capture = false;
		if(this.__eventMap == null) return;
		var list = this.__eventMap.get(type);
		if(list == null) return;
		var _g1 = 0;
		var _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].match(listener,capture)) {
				list.splice(i,1);
				break;
			}
		}
		if(list.length == 0) this.__eventMap.remove(type);
		if(!this.__eventMap.iterator().hasNext()) this.__eventMap = null;
	}
	,toString: function() {
		var full = Type.getClassName(Type.getClass(this));
		var $short = full.split(".").pop();
		return "[object " + $short + "]";
	}
	,willTrigger: function(type) {
		return this.hasEventListener(type);
	}
	,__class__: openfl.events.EventDispatcher
};
openfl.display = {};
openfl.display.IBitmapDrawable = function() { };
$hxClasses["openfl.display.IBitmapDrawable"] = openfl.display.IBitmapDrawable;
openfl.display.IBitmapDrawable.__name__ = ["openfl","display","IBitmapDrawable"];
openfl.display.IBitmapDrawable.prototype = {
	__class__: openfl.display.IBitmapDrawable
};
openfl.display.DisplayObject = function() {
	openfl.events.EventDispatcher.call(this);
	this.set_alpha(1);
	this.set_rotation(0);
	this.set_scaleX(1);
	this.set_scaleY(1);
	this.set_visible(true);
	this.set_x(0);
	this.set_y(0);
	this.__worldAlpha = 1;
	this.__worldTransform = new openfl.geom.Matrix();
	this.set_name("instance" + ++openfl.display.DisplayObject.__instanceCount);
};
$hxClasses["openfl.display.DisplayObject"] = openfl.display.DisplayObject;
openfl.display.DisplayObject.__name__ = ["openfl","display","DisplayObject"];
openfl.display.DisplayObject.__interfaces__ = [openfl.display.IBitmapDrawable];
openfl.display.DisplayObject.__super__ = openfl.events.EventDispatcher;
openfl.display.DisplayObject.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	dispatchEvent: function(event) {
		var result = openfl.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
		if(event.__isCancelled) return true;
		if(event.bubbles && this.parent != null && this.parent != this) {
			event.eventPhase = 2;
			this.parent.dispatchEvent(event);
		}
		return result;
	}
	,getBounds: function(targetCoordinateSpace) {
		var matrix = this.__getTransform();
		if(targetCoordinateSpace != null) {
			matrix = new openfl.geom.Matrix(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			matrix.concat(targetCoordinateSpace.__worldTransform.clone().invert());
		}
		var bounds = new openfl.geom.Rectangle();
		this.__getBounds(bounds,matrix);
		return bounds;
	}
	,getRect: function(targetCoordinateSpace) {
		return this.getBounds(targetCoordinateSpace);
	}
	,globalToLocal: function(pos) {
		return this.__getTransform().clone().invert().transformPoint(pos);
	}
	,hitTestObject: function(obj) {
		return false;
	}
	,hitTestPoint: function(x,y,shapeFlag) {
		if(shapeFlag == null) shapeFlag = false;
		return false;
	}
	,localToGlobal: function(point) {
		return this.__getTransform().transformPoint(point);
	}
	,__applyStyle: function(renderSession,setTransform,setAlpha,setClip) {
		if(setTransform && this.__worldTransformChanged) this.__style.setProperty(renderSession.transformProperty,this.__worldTransform.to3DString(renderSession.roundPixels),null);
		if(this.__worldZ != ++renderSession.z) {
			this.__worldZ = renderSession.z;
			this.__style.setProperty("z-index",Std.string(this.__worldZ),null);
		}
		if(setAlpha && this.__worldAlphaChanged) {
			if(this.__worldAlpha < 1) this.__style.setProperty("opacity",Std.string(this.__worldAlpha),null); else this.__style.removeProperty("opacity");
		}
		if(setClip && this.__worldClipChanged) {
			if(this.__worldClip == null) this.__style.removeProperty("clip"); else {
				var clip = this.__worldClip.transform(this.__worldTransform.clone().invert());
				this.__style.setProperty("clip","rect(" + clip.y + "px, " + clip.get_right() + "px, " + clip.get_bottom() + "px, " + clip.x + "px)",null);
			}
		}
	}
	,__broadcast: function(event,notifyChilden) {
		if(this.__eventMap != null && this.hasEventListener(event.type)) {
			var result = openfl.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
			if(event.__isCancelled) return true;
			return result;
		}
		return false;
	}
	,__getBounds: function(rect,matrix) {
	}
	,__getInteractive: function(stack) {
	}
	,__getLocalBounds: function(rect) {
		this.__getTransform();
		this.__getBounds(rect,new openfl.geom.Matrix());
	}
	,__getTransform: function() {
		if(openfl.display.DisplayObject.__worldTransformDirty > 0) {
			var list = [];
			var current = this;
			var transformDirty = this.__transformDirty;
			while(current.parent != null) {
				list.push(current);
				current = current.parent;
				if(current.__transformDirty) transformDirty = true;
			}
			if(transformDirty) {
				var i = list.length;
				while(--i >= 0) list[i].__update(true,false);
			}
		}
		return this.__worldTransform;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		return false;
	}
	,__initializeElement: function(element,renderSession) {
		this.__style = element.style;
		this.__style.setProperty("position","absolute",null);
		this.__style.setProperty("top","0",null);
		this.__style.setProperty("left","0",null);
		this.__style.setProperty(renderSession.transformOriginProperty,"0 0 0",null);
		renderSession.element.appendChild(element);
		this.__worldAlphaChanged = true;
		this.__worldClipChanged = true;
		this.__worldTransformChanged = true;
		this.__worldVisibleChanged = true;
		this.__worldZ = -1;
	}
	,__renderCanvas: function(renderSession) {
	}
	,__renderDOM: function(renderSession) {
	}
	,__renderGL: function(renderSession) {
	}
	,__renderMask: function(renderSession) {
	}
	,__setStageReference: function(stage) {
		if(this.stage != stage) {
			if(this.stage != null) this.dispatchEvent(new openfl.events.Event(openfl.events.Event.REMOVED_FROM_STAGE,false,false));
			this.stage = stage;
			if(stage != null) this.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED_TO_STAGE,false,false));
		}
	}
	,__setRenderDirty: function() {
		if(!this.__renderDirty) {
			this.__renderDirty = true;
			openfl.display.DisplayObject.__worldRenderDirty++;
		}
	}
	,__setTransformDirty: function() {
		if(!this.__transformDirty) {
			this.__transformDirty = true;
			openfl.display.DisplayObject.__worldTransformDirty++;
		}
	}
	,__update: function(transformOnly,updateChildren) {
		this.__renderable = this.get_visible() && this.get_scaleX() != 0 && this.get_scaleY() != 0 && !this.__isMask;
		if(this.get_rotation() != this.__rotationCache) {
			this.__rotationCache = this.get_rotation();
			var radians = this.get_rotation() * (Math.PI / 180);
			this.__rotationSine = Math.sin(radians);
			this.__rotationCosine = Math.cos(radians);
		}
		if(this.parent != null) {
			var parentTransform = this.parent.__worldTransform;
			var a00 = this.__rotationCosine * this.get_scaleX();
			var a01 = this.__rotationSine * this.get_scaleX();
			var a10 = -this.__rotationSine * this.get_scaleY();
			var a11 = this.__rotationCosine * this.get_scaleY();
			var b00 = parentTransform.a;
			var b01 = parentTransform.b;
			var b10 = parentTransform.c;
			var b11 = parentTransform.d;
			this.__worldTransform.a = a00 * b00 + a01 * b10;
			this.__worldTransform.b = a00 * b01 + a01 * b11;
			this.__worldTransform.c = a10 * b00 + a11 * b10;
			this.__worldTransform.d = a10 * b01 + a11 * b11;
			if(this.get_scrollRect() == null) {
				this.__worldTransform.tx = this.get_x() * b00 + this.get_y() * b10 + parentTransform.tx;
				this.__worldTransform.ty = this.get_x() * b01 + this.get_y() * b11 + parentTransform.ty;
			} else {
				this.__worldTransform.tx = (this.get_x() - this.get_scrollRect().x) * b00 + (this.get_y() - this.get_scrollRect().y) * b10 + parentTransform.tx;
				this.__worldTransform.ty = (this.get_x() - this.get_scrollRect().x) * b01 + (this.get_y() - this.get_scrollRect().y) * b11 + parentTransform.ty;
			}
		} else {
			this.__worldTransform.a = this.__rotationCosine * this.get_scaleX();
			this.__worldTransform.c = -this.__rotationSine * this.get_scaleY();
			this.__worldTransform.b = this.__rotationSine * this.get_scaleX();
			this.__worldTransform.d = this.__rotationCosine * this.get_scaleY();
			if(this.get_scrollRect() == null) {
				this.__worldTransform.tx = this.get_x();
				this.__worldTransform.ty = this.get_y();
			} else {
				this.__worldTransform.tx = this.get_y() - this.get_scrollRect().x;
				this.__worldTransform.ty = this.get_y() - this.get_scrollRect().y;
			}
		}
		if(updateChildren && this.__transformDirty) {
			this.__transformDirty = false;
			openfl.display.DisplayObject.__worldTransformDirty--;
		}
		if(!transformOnly) {
			if(this.parent != null) this.__worldAlpha = this.get_alpha() * this.parent.__worldAlpha; else this.__worldAlpha = this.get_alpha();
			if(updateChildren && this.__renderDirty) this.__renderDirty = false;
		}
	}
	,__updateChildren: function(transformOnly) {
		this.__renderable = this.get_visible() && this.get_scaleX() != 0 && this.get_scaleY() != 0 && !this.__isMask;
		if(!this.__renderable && !this.__isMask) return;
		this.__worldAlpha = this.get_alpha();
		if(this.__transformDirty) {
			this.__transformDirty = false;
			openfl.display.DisplayObject.__worldTransformDirty--;
		}
	}
	,get_alpha: function() {
		return this.__alpha;
	}
	,set_alpha: function(value) {
		if(value != this.__alpha) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
		}
		return this.__alpha = value;
	}
	,get_filters: function() {
		if(this.__filters == null) return new Array(); else return this.__filters.slice();
	}
	,set_filters: function(value) {
		return value;
	}
	,get_height: function() {
		var bounds = new openfl.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new openfl.geom.Matrix());
		return bounds.height * this.get_scaleY();
	}
	,set_height: function(value) {
		var bounds = new openfl.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new openfl.geom.Matrix());
		if(value != bounds.height) this.set_scaleY(value / bounds.height); else this.set_scaleY(1);
		return value;
	}
	,get_mask: function() {
		return this.__mask;
	}
	,set_mask: function(value) {
		if(value != this.__mask) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
		}
		if(this.__mask != null) this.__mask.__isMask = false;
		if(value != null) value.__isMask = true;
		return this.__mask = value;
	}
	,get_mouseX: function() {
		if(this.stage != null) return this.globalToLocal(new openfl.geom.Point(this.stage.__mouseX,0)).x;
		return 0;
	}
	,get_mouseY: function() {
		if(this.stage != null) return this.globalToLocal(new openfl.geom.Point(0,this.stage.__mouseY)).y;
		return 0;
	}
	,get_name: function() {
		return this.__name;
	}
	,set_name: function(value) {
		return this.__name = value;
	}
	,get_root: function() {
		if(this.stage != null) return openfl.Lib.current;
		return null;
	}
	,get_rotation: function() {
		return this.__rotation;
	}
	,set_rotation: function(value) {
		if(value != this.__rotation) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__rotation = value;
	}
	,get_scaleX: function() {
		return this.__scaleX;
	}
	,set_scaleX: function(value) {
		if(value != this.__scaleX) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__scaleX = value;
	}
	,get_scaleY: function() {
		return this.__scaleY;
	}
	,set_scaleY: function(value) {
		if(this.__scaleY != value) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__scaleY = value;
	}
	,get_scrollRect: function() {
		return this.__scrollRect;
	}
	,set_scrollRect: function(value) {
		if(value != this.__scrollRect) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__scrollRect = value;
	}
	,get_transform: function() {
		if(this.__transform == null) this.__transform = new openfl.geom.Transform(this);
		return this.__transform;
	}
	,set_transform: function(value) {
		if(value == null) throw new openfl.errors.TypeError("Parameter transform must be non-null.");
		if(this.__transform == null) this.__transform = new openfl.geom.Transform(this);
		if(!this.__transformDirty) {
			this.__transformDirty = true;
			openfl.display.DisplayObject.__worldTransformDirty++;
		}
		this.__transform.set_matrix(value.get_matrix().clone());
		this.__transform.colorTransform = new openfl.geom.ColorTransform(value.colorTransform.redMultiplier,value.colorTransform.greenMultiplier,value.colorTransform.blueMultiplier,value.colorTransform.alphaMultiplier,value.colorTransform.redOffset,value.colorTransform.greenOffset,value.colorTransform.blueOffset,value.colorTransform.alphaOffset);
		return this.__transform;
	}
	,get_visible: function() {
		return this.__visible;
	}
	,set_visible: function(value) {
		if(value != this.__visible) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
		}
		return this.__visible = value;
	}
	,get_width: function() {
		var bounds = new openfl.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new openfl.geom.Matrix());
		return bounds.width * this.get_scaleX();
	}
	,set_width: function(value) {
		var bounds = new openfl.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new openfl.geom.Matrix());
		if(value != bounds.width) this.set_scaleX(value / bounds.width); else this.set_scaleX(1);
		return value;
	}
	,get_x: function() {
		return this.__x;
	}
	,set_x: function(value) {
		if(value != this.__x) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__x = value;
	}
	,get_y: function() {
		return this.__y;
	}
	,set_y: function(value) {
		if(value != this.__y) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__y = value;
	}
	,__class__: openfl.display.DisplayObject
	,__properties__: {set_y:"set_y",get_y:"get_y",set_x:"set_x",get_x:"get_x",set_width:"set_width",get_width:"get_width",set_visible:"set_visible",get_visible:"get_visible",set_transform:"set_transform",get_transform:"get_transform",set_scrollRect:"set_scrollRect",get_scrollRect:"get_scrollRect",set_scaleY:"set_scaleY",get_scaleY:"get_scaleY",set_scaleX:"set_scaleX",get_scaleX:"get_scaleX",set_rotation:"set_rotation",get_rotation:"get_rotation",get_root:"get_root",set_name:"set_name",get_name:"get_name",get_mouseY:"get_mouseY",get_mouseX:"get_mouseX",set_mask:"set_mask",get_mask:"get_mask",set_height:"set_height",get_height:"get_height",set_filters:"set_filters",get_filters:"get_filters",set_alpha:"set_alpha",get_alpha:"get_alpha"}
});
openfl.display.InteractiveObject = function() {
	openfl.display.DisplayObject.call(this);
	this.doubleClickEnabled = false;
	this.mouseEnabled = true;
	this.needsSoftKeyboard = false;
	this.tabEnabled = true;
	this.tabIndex = -1;
};
$hxClasses["openfl.display.InteractiveObject"] = openfl.display.InteractiveObject;
openfl.display.InteractiveObject.__name__ = ["openfl","display","InteractiveObject"];
openfl.display.InteractiveObject.__super__ = openfl.display.DisplayObject;
openfl.display.InteractiveObject.prototype = $extend(openfl.display.DisplayObject.prototype,{
	requestSoftKeyboard: function() {
		openfl.Lib.notImplemented("InteractiveObject.requestSoftKeyboard");
		return false;
	}
	,__getInteractive: function(stack) {
		stack.push(this);
		if(this.parent != null) this.parent.__getInteractive(stack);
	}
	,__class__: openfl.display.InteractiveObject
});
openfl.display.DisplayObjectContainer = function() {
	openfl.display.InteractiveObject.call(this);
	this.mouseChildren = true;
	this.__children = new Array();
	this.__removedChildren = new Array();
};
$hxClasses["openfl.display.DisplayObjectContainer"] = openfl.display.DisplayObjectContainer;
openfl.display.DisplayObjectContainer.__name__ = ["openfl","display","DisplayObjectContainer"];
openfl.display.DisplayObjectContainer.__super__ = openfl.display.InteractiveObject;
openfl.display.DisplayObjectContainer.prototype = $extend(openfl.display.InteractiveObject.prototype,{
	addChild: function(child) {
		if(child != null) {
			if(child.parent != null) child.parent.removeChild(child);
			this.__children.push(child);
			child.parent = this;
			if(this.stage != null) child.__setStageReference(this.stage);
			if(!child.__transformDirty) {
				child.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			if(!child.__renderDirty) {
				child.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
			child.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED,true));
		}
		return child;
	}
	,addChildAt: function(child,index) {
		if(index > this.__children.length || index < 0) throw "Invalid index position " + index;
		if(child.parent == this) HxOverrides.remove(this.__children,child); else {
			if(child.parent != null) child.parent.removeChild(child);
			child.parent = this;
			if(this.stage != null) child.__setStageReference(this.stage);
			if(!child.__transformDirty) {
				child.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			if(!child.__renderDirty) {
				child.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
			child.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED,true));
		}
		this.__children.splice(index,0,child);
		return child;
	}
	,areInaccessibleObjectsUnderPoint: function(point) {
		return false;
	}
	,contains: function(child) {
		return HxOverrides.indexOf(this.__children,child,0) > -1;
	}
	,getChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.__children[index];
		return null;
	}
	,getChildByName: function(name) {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_name() == name) return child;
		}
		return null;
	}
	,getChildIndex: function(child) {
		var _g1 = 0;
		var _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__children[i] == child) return i;
		}
		return -1;
	}
	,getObjectsUnderPoint: function(point) {
		point = this.localToGlobal(point);
		var stack = new Array();
		this.__hitTest(point.x,point.y,false,stack,false);
		stack.shift();
		return stack;
	}
	,removeChild: function(child) {
		if(child != null && child.parent == this) {
			if(this.stage != null) child.__setStageReference(null);
			child.parent = null;
			HxOverrides.remove(this.__children,child);
			this.__removedChildren.push(child);
			if(!child.__transformDirty) {
				child.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			if(!child.__renderDirty) {
				child.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
			child.dispatchEvent(new openfl.events.Event(openfl.events.Event.REMOVED,true));
		}
		return child;
	}
	,removeChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.removeChild(this.__children[index]);
		return null;
	}
	,removeChildren: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 2147483647;
		if(beginIndex == null) beginIndex = 0;
		if(endIndex == 2147483647) {
			endIndex = this.__children.length - 1;
			if(endIndex < 0) return;
		}
		if(beginIndex > this.__children.length - 1) return; else if(endIndex < beginIndex || beginIndex < 0 || endIndex > this.__children.length) throw new openfl.errors.RangeError("The supplied index is out of bounds.");
		var numRemovals = endIndex - beginIndex;
		while(numRemovals >= 0) {
			this.removeChildAt(beginIndex);
			numRemovals--;
		}
	}
	,setChildIndex: function(child,index) {
		if(index >= 0 && index <= this.__children.length && child.parent == this) {
			HxOverrides.remove(this.__children,child);
			this.__children.splice(index,0,child);
		}
	}
	,swapChildren: function(child1,child2) {
		if(child1.parent == this && child2.parent == this) {
			var index1 = HxOverrides.indexOf(this.__children,child1,0);
			var index2 = HxOverrides.indexOf(this.__children,child2,0);
			this.__children[index1] = child2;
			this.__children[index2] = child1;
		}
	}
	,swapChildrenAt: function(child1,child2) {
		var swap = this.__children[child1];
		this.__children[child1] = this.__children[child2];
		this.__children[child2] = swap;
		swap = null;
	}
	,__broadcast: function(event,notifyChilden) {
		if(event.target == null) event.target = this;
		if(notifyChilden) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__broadcast(event,true);
				if(event.__isCancelled) return true;
			}
		}
		return openfl.display.InteractiveObject.prototype.__broadcast.call(this,event,notifyChilden);
	}
	,__getBounds: function(rect,matrix) {
		if(this.__children.length == 0) return;
		var matrixCache = null;
		if(matrix != null) {
			matrixCache = this.__worldTransform;
			this.__worldTransform = matrix;
			this.__updateChildren(true);
		}
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(!child.__renderable) continue;
			child.__getBounds(rect,null);
		}
		if(matrix != null) {
			this.__worldTransform = matrixCache;
			this.__updateChildren(true);
		}
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || interactiveOnly && !this.mouseEnabled) return false;
		var i = this.__children.length;
		if(interactiveOnly && (stack == null || !this.mouseChildren)) {
			while(--i >= 0) if(this.__children[i].__hitTest(x,y,shapeFlag,null,interactiveOnly)) {
				if(stack != null) stack.push(this);
				return true;
			}
		} else if(stack != null) {
			var length = stack.length;
			while(--i >= 0) if(this.__children[i].__hitTest(x,y,shapeFlag,stack,interactiveOnly)) {
				stack.splice(length,0,this);
				return true;
			}
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		if(this.get_scrollRect() != null) renderSession.maskManager.pushRect(this.get_scrollRect(),this.__worldTransform);
		if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderCanvas(renderSession);
		}
		this.__removedChildren = [];
		if(this.__mask != null) renderSession.maskManager.popMask();
		if(this.get_scrollRect() != null) renderSession.maskManager.popMask();
	}
	,__renderDOM: function(renderSession) {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderDOM(renderSession);
		}
		var _g2 = 0;
		var _g11 = this.__removedChildren;
		while(_g2 < _g11.length) {
			var orphan = _g11[_g2];
			++_g2;
			if(orphan.stage == null) orphan.__renderDOM(renderSession);
		}
		this.__removedChildren = [];
	}
	,__renderGL: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderGL(renderSession);
		}
		this.__removedChildren = [];
	}
	,__renderMask: function(renderSession) {
		var bounds = new openfl.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new openfl.geom.Matrix());
		renderSession.context.rect(0,0,bounds.width,bounds.height);
	}
	,__setStageReference: function(stage) {
		if(this.stage != stage) {
			if(this.stage != null) this.dispatchEvent(new openfl.events.Event(openfl.events.Event.REMOVED_FROM_STAGE,false,false));
			this.stage = stage;
			if(stage != null) this.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED_TO_STAGE,false,false));
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__setStageReference(stage);
			}
		}
	}
	,__update: function(transformOnly,updateChildren) {
		openfl.display.InteractiveObject.prototype.__update.call(this,transformOnly,updateChildren);
		if(!this.__renderable) return;
		if(updateChildren) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__update(transformOnly,true);
			}
		}
	}
	,__updateChildren: function(transformOnly) {
		openfl.display.InteractiveObject.prototype.__updateChildren.call(this,transformOnly);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__update(transformOnly,true);
		}
	}
	,get_numChildren: function() {
		return this.__children.length;
	}
	,__class__: openfl.display.DisplayObjectContainer
	,__properties__: $extend(openfl.display.InteractiveObject.prototype.__properties__,{get_numChildren:"get_numChildren"})
});
openfl.display.Sprite = function() {
	openfl.display.DisplayObjectContainer.call(this);
	this.buttonMode = false;
	this.useHandCursor = true;
};
$hxClasses["openfl.display.Sprite"] = openfl.display.Sprite;
openfl.display.Sprite.__name__ = ["openfl","display","Sprite"];
openfl.display.Sprite.__super__ = openfl.display.DisplayObjectContainer;
openfl.display.Sprite.prototype = $extend(openfl.display.DisplayObjectContainer.prototype,{
	startDrag: function(lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		if(this.stage != null) this.stage.__startDrag(this,lockCenter,bounds);
	}
	,stopDrag: function() {
		if(this.stage != null) this.stage.__stopDrag(this);
	}
	,__getBounds: function(rect,matrix) {
		openfl.display.DisplayObjectContainer.prototype.__getBounds.call(this,rect,matrix);
		if(this.__graphics != null) this.__graphics.__getBounds(rect,matrix != null?matrix:this.__worldTransform);
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || interactiveOnly && !this.mouseEnabled) return false;
		var length = 0;
		if(stack != null) length = stack.length;
		if(openfl.display.DisplayObjectContainer.prototype.__hitTest.call(this,x,y,shapeFlag,stack,interactiveOnly)) return true; else if(this.__graphics != null && this.__graphics.__hitTest(x,y,shapeFlag,this.__worldTransform)) {
			if(stack != null) stack.splice(length,0,this);
			return true;
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		if(this.__graphics != null) {
			this.__graphics.__render();
			if(this.__graphics.__canvas != null) {
				if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
				var context = renderSession.context;
				context.globalAlpha = this.__worldAlpha;
				var transform = this.__worldTransform;
				if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
				if(this.get_scrollRect() == null) context.drawImage(this.__graphics.__canvas,this.__graphics.__bounds.x,this.__graphics.__bounds.y); else context.drawImage(this.__graphics.__canvas,this.get_scrollRect().x - this.__graphics.__bounds.x,this.get_scrollRect().y - this.__graphics.__bounds.y,this.get_scrollRect().width,this.get_scrollRect().height,this.__graphics.__bounds.x + this.get_scrollRect().x,this.__graphics.__bounds.y + this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height);
				if(this.__mask != null) renderSession.maskManager.popMask();
			}
		}
		openfl.display.DisplayObjectContainer.prototype.__renderCanvas.call(this,renderSession);
	}
	,__renderDOM: function(renderSession) {
		if(this.stage != null && this.__worldVisible && this.__renderable && this.__graphics != null) {
			if(this.__graphics.__dirty || this.__worldAlphaChanged || this.__canvas == null && this.__graphics.__canvas != null) {
				this.__graphics.__render();
				if(this.__graphics.__canvas != null) {
					if(this.__canvas == null) {
						this.__canvas = window.document.createElement("canvas");
						this.__canvasContext = this.__canvas.getContext("2d");
						this.__initializeElement(this.__canvas,renderSession);
					}
					this.__canvas.width = this.__graphics.__canvas.width;
					this.__canvas.height = this.__graphics.__canvas.height;
					this.__canvasContext.globalAlpha = this.__worldAlpha;
					this.__canvasContext.drawImage(this.__graphics.__canvas,0,0);
				} else if(this.__canvas != null) {
					renderSession.element.removeChild(this.__canvas);
					this.__canvas = null;
					this.__style = null;
				}
			}
			if(this.__canvas != null) {
				if(this.__worldTransformChanged) {
					var transform = new openfl.geom.Matrix();
					transform.translate(this.__graphics.__bounds.x,this.__graphics.__bounds.y);
					transform = transform.mult(this.__worldTransform);
					this.__style.setProperty(renderSession.transformProperty,renderSession.roundPixels?"matrix3d(" + transform.a + ", " + transform.b + ", " + "0, 0, " + transform.c + ", " + transform.d + ", " + "0, 0, 0, 0, 1, 0, " + (transform.tx | 0) + ", " + (transform.ty | 0) + ", 0, 1)":"matrix3d(" + transform.a + ", " + transform.b + ", " + "0, 0, " + transform.c + ", " + transform.d + ", " + "0, 0, 0, 0, 1, 0, " + transform.tx + ", " + transform.ty + ", 0, 1)",null);
				}
				this.__applyStyle(renderSession,false,false,true);
			}
		} else if(this.__canvas != null) {
			renderSession.element.removeChild(this.__canvas);
			this.__canvas = null;
			this.__style = null;
		}
		openfl.display.DisplayObjectContainer.prototype.__renderDOM.call(this,renderSession);
	}
	,__renderMask: function(renderSession) {
		if(this.__graphics != null) this.__graphics.__renderMask(renderSession); else openfl.display.DisplayObjectContainer.prototype.__renderMask.call(this,renderSession);
	}
	,get_graphics: function() {
		if(this.__graphics == null) this.__graphics = new openfl.display.Graphics();
		return this.__graphics;
	}
	,__class__: openfl.display.Sprite
	,__properties__: $extend(openfl.display.DisplayObjectContainer.prototype.__properties__,{get_graphics:"get_graphics"})
});
var Main = function() {
	openfl.display.Sprite.call(this);
	this.addEventListener(openfl.events.Event.ADDED_TO_STAGE,$bind(this,this.added));
};
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.main = function() {
	openfl.Lib.current.stage.align = openfl.display.StageAlign.TOP_LEFT;
	openfl.Lib.current.stage.scaleMode = openfl.display.StageScaleMode.NO_SCALE;
	openfl.Lib.current.addChild(new Main());
};
Main.__super__ = openfl.display.Sprite;
Main.prototype = $extend(openfl.display.Sprite.prototype,{
	resize: function(e) {
		if(!this.inited) this.init();
	}
	,init: function() {
		if(this.inited) return;
		this.inited = true;
		carlstillo.game.ItemDropper.initializeItemList();
		carlstillo.display.Numbers.initNumbers();
		carlstillo.utils.SoundManager.initializeAudio();
		carlstillo.ui.ScreenManager.swtichScreen(this,carlstillo.ui.ScreenType.Title);
		com.indigogaming.wnpdispatcher.WNPInterface.get_instance().addEventListener("mute",$bind(this,this.mute));
		com.indigogaming.wnpdispatcher.WNPInterface.get_instance().addEventListener("unmute",$bind(this,this.unMute));
		com.indigogaming.wnpdispatcher.WNPInterface.get_instance().addEventListener("reload",$bind(this,this.reload));
	}
	,added: function(e) {
		this.removeEventListener(openfl.events.Event.ADDED_TO_STAGE,$bind(this,this.added));
		this.stage.addEventListener(openfl.events.Event.RESIZE,$bind(this,this.resize));
		this.init();
	}
	,mute: function(e) {
		carlstillo.utils.SoundManager.setSFXVolume(0);
	}
	,unMute: function(e) {
		carlstillo.utils.SoundManager.setSFXVolume(1);
	}
	,reload: function(e) {
		carlstillo.ui.ScreenManager.swtichScreen(this,carlstillo.ui.ScreenType.Game);
	}
	,__class__: Main
});
var DocumentClass = function() {
	this.stage = openfl.Lib.current.stage;
	Main.call(this);
	this.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED_TO_STAGE,false,false));
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = ["DocumentClass"];
DocumentClass.__super__ = Main;
DocumentClass.prototype = $extend(Main.prototype,{
	__class__: DocumentClass
});
openfl.AssetLibrary = function() {
};
$hxClasses["openfl.AssetLibrary"] = openfl.AssetLibrary;
openfl.AssetLibrary.__name__ = ["openfl","AssetLibrary"];
openfl.AssetLibrary.prototype = {
	exists: function(id,type) {
		return false;
	}
	,getBitmapData: function(id) {
		return null;
	}
	,getBytes: function(id) {
		return null;
	}
	,getFont: function(id) {
		return null;
	}
	,getMovieClip: function(id) {
		return null;
	}
	,getMusic: function(id) {
		return this.getSound(id);
	}
	,getPath: function(id) {
		return null;
	}
	,getSound: function(id) {
		return null;
	}
	,getText: function(id) {
		var bytes = this.getBytes(id);
		if(bytes == null) return null; else return bytes.readUTFBytes(bytes.length);
	}
	,isLocal: function(id,type) {
		return true;
	}
	,list: function(type) {
		return null;
	}
	,load: function(handler) {
		handler(this);
	}
	,loadBitmapData: function(id,handler) {
		handler(this.getBitmapData(id));
	}
	,loadBytes: function(id,handler) {
		handler(this.getBytes(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadMovieClip: function(id,handler) {
		handler(this.getMovieClip(id));
	}
	,loadMusic: function(id,handler) {
		handler(this.getMusic(id));
	}
	,loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,loadText: function(id,handler) {
		var callback = function(bytes) {
			if(bytes == null) handler(null); else handler(bytes.readUTFBytes(bytes.length));
		};
		this.loadBytes(id,callback);
	}
	,__class__: openfl.AssetLibrary
};
var DefaultAssetLibrary = function() {
	this.type = new haxe.ds.StringMap();
	this.path = new haxe.ds.StringMap();
	this.className = new haxe.ds.StringMap();
	openfl.AssetLibrary.call(this);
	var id;
	id = "img/animation/animJerry.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/animation/animJerry.xml";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "img/animation/animNibbles.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/animation/animNibbles.xml";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "img/animation/tom.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/background/back.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/background/blocker.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/background/front.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/background/gameOverScreen.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/background/loading.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/background/titleScreen.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/buttons/btnHTP.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/buttons/btnPlay.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/buttons/btnPressHTP.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/buttons/btnPressPlay.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/buttons/btnPressQuit.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/buttons/btnPressRetry.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/buttons/btnQuit.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/buttons/btnRetry.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/buttons/left_btn.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/buttons/right_btn.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/howTo/howtoplay.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/ball.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/ballBreak.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/Cake.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/cakeBreak.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/Cheese.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/cheeseBreak.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/Cookie.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/cookieBreak.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/foodBox.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/hitbox.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/Jelly.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/jellyBreak.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/lamp.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/lampBreak.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/plate.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/plateBreak.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/strawberry.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/strawberryBreak.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/trap.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/trap01.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/items/trapBreak.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/gameover numbers/0.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/gameover numbers/1.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/gameover numbers/2.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/gameover numbers/3.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/gameover numbers/4.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/gameover numbers/5.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/gameover numbers/6.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/gameover numbers/7.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/gameover numbers/8.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/gameover numbers/9.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/ketchup numbers/0.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/ketchup numbers/1.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/ketchup numbers/2.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/ketchup numbers/3.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/ketchup numbers/4.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/ketchup numbers/5.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/ketchup numbers/6.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/ketchup numbers/7.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/ketchup numbers/8.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/ketchup numbers/9.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/loading01.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/loading02.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/loading03.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/logo.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/meter01.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/meter02.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/meter03.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/numbers/0.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/numbers/1.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/numbers/2.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/numbers/3.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/numbers/4.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/numbers/5.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/numbers/6.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/numbers/7.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/numbers/8.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/numbers/9.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/start.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/uiScore.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/warning 02.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/x2.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/x3.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/x4.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "audio/ButtonClick.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "audio/ButtonClick.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "audio/FoodGet.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "audio/FoodGet.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "audio/gameOverSFX.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "audio/gameOverSFX.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "audio/strawberrygetsfx.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "audio/strawberrygetsfx.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "audio/Strawberrygetsfx_02.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "audio/Strawberrygetsfx_02.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "audio/TrapHitSFX.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "audio/TrapHitSFX.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
};
$hxClasses["DefaultAssetLibrary"] = DefaultAssetLibrary;
DefaultAssetLibrary.__name__ = ["DefaultAssetLibrary"];
DefaultAssetLibrary.__super__ = openfl.AssetLibrary;
DefaultAssetLibrary.prototype = $extend(openfl.AssetLibrary.prototype,{
	exists: function(id,type) {
		var assetType = this.type.get(id);
		if(assetType != null) {
			if(assetType == type || (type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC) && (assetType == openfl.AssetType.MUSIC || assetType == openfl.AssetType.SOUND)) return true;
			if(type == openfl.AssetType.BINARY || type == null) return true;
		}
		return false;
	}
	,getBitmapData: function(id) {
		return openfl.display.BitmapData.fromImage((function($this) {
			var $r;
			var key = $this.path.get(id);
			$r = ApplicationMain.images.get(key);
			return $r;
		}(this)));
	}
	,getBytes: function(id) {
		var bytes = null;
		var data = ((function($this) {
			var $r;
			var key = $this.path.get(id);
			$r = ApplicationMain.urlLoaders.get(key);
			return $r;
		}(this))).data;
		if(typeof(data) == "string") {
			bytes = new openfl.utils.ByteArray();
			bytes.writeUTFBytes(data);
		} else if(js.Boot.__instanceof(data,openfl.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes;
		} else return null;
	}
	,getFont: function(id) {
		return js.Boot.__cast(Type.createInstance(this.className.get(id),[]) , openfl.text.Font);
	}
	,getMusic: function(id) {
		var sound = new openfl.media.Sound();
		sound.__buffer = true;
		sound.load(new openfl.net.URLRequest(this.path.get(id)));
		return sound;
	}
	,getPath: function(id) {
		return this.path.get(id);
	}
	,getSound: function(id) {
		return new openfl.media.Sound(new openfl.net.URLRequest(this.path.get(id)));
	}
	,getText: function(id) {
		var bytes = null;
		var data = ((function($this) {
			var $r;
			var key = $this.path.get(id);
			$r = ApplicationMain.urlLoaders.get(key);
			return $r;
		}(this))).data;
		if(typeof(data) == "string") return data; else if(js.Boot.__instanceof(data,openfl.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes.readUTFBytes(bytes.length);
		} else return null;
	}
	,isLocal: function(id,type) {
		return true;
	}
	,list: function(type) {
		var items = [];
		var $it0 = this.type.keys();
		while( $it0.hasNext() ) {
			var id = $it0.next();
			if(type == null || this.exists(id,type)) items.push(id);
		}
		return items;
	}
	,loadBitmapData: function(id,handler) {
		if(this.path.exists(id)) {
			var loader = new openfl.display.Loader();
			loader.contentLoaderInfo.addEventListener(openfl.events.Event.COMPLETE,function(event) {
				handler((js.Boot.__cast(event.currentTarget.content , openfl.display.Bitmap)).bitmapData);
			});
			loader.load(new openfl.net.URLRequest(this.path.get(id)));
		} else handler(this.getBitmapData(id));
	}
	,loadBytes: function(id,handler) {
		if(this.path.exists(id)) {
			var loader = new openfl.net.URLLoader();
			loader.addEventListener(openfl.events.Event.COMPLETE,function(event) {
				var bytes = new openfl.utils.ByteArray();
				bytes.writeUTFBytes(event.currentTarget.data);
				bytes.position = 0;
				handler(bytes);
			});
			loader.load(new openfl.net.URLRequest(this.path.get(id)));
		} else handler(this.getBytes(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadMusic: function(id,handler) {
		handler(this.getMusic(id));
	}
	,loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,loadText: function(id,handler) {
		if(this.path.exists(id)) {
			var loader = new openfl.net.URLLoader();
			loader.addEventListener(openfl.events.Event.COMPLETE,function(event) {
				handler(event.currentTarget.data);
			});
			loader.load(new openfl.net.URLRequest(this.path.get(id)));
		} else handler(this.getText(id));
	}
	,__class__: DefaultAssetLibrary
});
var GlobalValues = function() {
};
$hxClasses["GlobalValues"] = GlobalValues;
GlobalValues.__name__ = ["GlobalValues"];
GlobalValues.prototype = {
	__class__: GlobalValues
};
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.strDate = function(s) {
	var _g = s.length;
	switch(_g) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k1 = s.split("-");
		return new Date(k1[0],k1[1] - 1,k1[2],0,0,0);
	case 19:
		var k2 = s.split(" ");
		var y = k2[0].split("-");
		var t = k2[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,__class__: List
};
var IMap = function() { };
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
Math.__name__ = ["Math"];
var NMEPreloader = function() {
	openfl.display.Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 9;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 3;
	this.outline = new openfl.display.Sprite();
	this.outline.get_graphics().lineStyle(1,color,0.15,true);
	this.outline.get_graphics().drawRoundRect(0,0,width,height,padding * 2,padding * 2);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new openfl.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = openfl.display.Sprite;
NMEPreloader.prototype = $extend(openfl.display.Sprite.prototype,{
	getBackgroundColor: function() {
		return 0;
	}
	,getHeight: function() {
		var height = 768;
		if(height > 0) return height; else return openfl.Lib.current.stage.stageHeight;
	}
	,getWidth: function() {
		var width = 1280;
		if(width > 0) return width; else return openfl.Lib.current.stage.stageWidth;
	}
	,onInit: function() {
	}
	,onLoaded: function() {
		this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
	}
	,onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded == 1;
		this.progress.set_scaleX(percentLoaded);
	}
	,__class__: NMEPreloader
});
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
};
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) return null; else if(o.__properties__ && (tmp = o.__properties__["get_" + field])) return o[tmp](); else return o[field];
};
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.parseFloat = function(x) {
	return parseFloat(x);
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	add: function(x) {
		this.b += Std.string(x);
	}
	,addSub: function(s,pos,len) {
		if(len == null) this.b += HxOverrides.substr(s,pos,null); else this.b += HxOverrides.substr(s,pos,len);
	}
	,__class__: StringBuf
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
};
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
};
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
};
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
};
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
};
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
};
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
};
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	HxOverrides.remove(a,"__name__");
	HxOverrides.remove(a,"__interfaces__");
	HxOverrides.remove(a,"__properties__");
	HxOverrides.remove(a,"__super__");
	HxOverrides.remove(a,"prototype");
	return a;
};
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
};
var XmlType = $hxClasses["XmlType"] = { __ename__ : true, __constructs__ : [] };
var Xml = function() {
};
$hxClasses["Xml"] = Xml;
Xml.__name__ = ["Xml"];
Xml.Element = null;
Xml.PCData = null;
Xml.CData = null;
Xml.Comment = null;
Xml.DocType = null;
Xml.ProcessingInstruction = null;
Xml.Document = null;
Xml.parse = function(str) {
	return haxe.xml.Parser.parse(str);
};
Xml.createElement = function(name) {
	var r = new Xml();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new haxe.ds.StringMap();
	r.set_nodeName(name);
	return r;
};
Xml.createPCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.PCData;
	r.set_nodeValue(data);
	return r;
};
Xml.createCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.CData;
	r.set_nodeValue(data);
	return r;
};
Xml.createComment = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Comment;
	r.set_nodeValue(data);
	return r;
};
Xml.createDocType = function(data) {
	var r = new Xml();
	r.nodeType = Xml.DocType;
	r.set_nodeValue(data);
	return r;
};
Xml.createProcessingInstruction = function(data) {
	var r = new Xml();
	r.nodeType = Xml.ProcessingInstruction;
	r.set_nodeValue(data);
	return r;
};
Xml.createDocument = function() {
	var r = new Xml();
	r.nodeType = Xml.Document;
	r._children = new Array();
	return r;
};
Xml.prototype = {
	get_nodeName: function() {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName;
	}
	,set_nodeName: function(n) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName = n;
	}
	,set_nodeValue: function(v) {
		if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
		return this._nodeValue = v;
	}
	,get: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.get(att);
	}
	,set: function(att,value) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		this._attributes.set(att,value);
	}
	,exists: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.exists(att);
	}
	,elements: function() {
		if(this._children == null) throw "bad nodetype";
		return { cur : 0, x : this._children, hasNext : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				if(this.x[k].nodeType == Xml.Element) break;
				k += 1;
			}
			this.cur = k;
			return k < l;
		}, next : function() {
			var k1 = this.cur;
			var l1 = this.x.length;
			while(k1 < l1) {
				var n = this.x[k1];
				k1 += 1;
				if(n.nodeType == Xml.Element) {
					this.cur = k1;
					return n;
				}
			}
			return null;
		}};
	}
	,firstElement: function() {
		if(this._children == null) throw "bad nodetype";
		var cur = 0;
		var l = this._children.length;
		while(cur < l) {
			var n = this._children[cur];
			if(n.nodeType == Xml.Element) return n;
			cur++;
		}
		return null;
	}
	,addChild: function(x) {
		if(this._children == null) throw "bad nodetype";
		if(x._parent != null) HxOverrides.remove(x._parent._children,x);
		x._parent = this;
		this._children.push(x);
	}
	,__class__: Xml
	,__properties__: {set_nodeValue:"set_nodeValue",set_nodeName:"set_nodeName",get_nodeName:"get_nodeName"}
};
var carlstillo = {};
carlstillo.display = {};
carlstillo.display.Numbers = function() {
	openfl.display.Sprite.call(this);
};
$hxClasses["carlstillo.display.Numbers"] = carlstillo.display.Numbers;
carlstillo.display.Numbers.__name__ = ["carlstillo","display","Numbers"];
carlstillo.display.Numbers.numbers = null;
carlstillo.display.Numbers.lastLoc = null;
carlstillo.display.Numbers.displayNum = null;
carlstillo.display.Numbers.initNumbers = function() {
	carlstillo.display.Numbers.numbers = new Array();
	var _g = 0;
	while(_g < 10) {
		var num = _g++;
		carlstillo.display.Numbers.numbers[num] = num + ".png";
	}
	haxe.Log.trace("Number Display Ready",{ fileName : "Numbers.hx", lineNumber : 32, className : "carlstillo.display.Numbers", methodName : "initNumbers"});
};
carlstillo.display.Numbers.getDisplay = function(val,sourcePath) {
	if(sourcePath == null) sourcePath = "";
	carlstillo.display.Numbers.displayNum = new openfl.display.Sprite();
	carlstillo.display.Numbers.lastLoc = 0;
	var num = (val == null?"null":"" + val).split("");
	var _g1 = 0;
	var _g = num.length;
	while(_g1 < _g) {
		var i = _g1++;
		carlstillo.display.Numbers.addDigit(Std.parseInt(num[i]),sourcePath);
	}
	return carlstillo.display.Numbers.displayNum;
};
carlstillo.display.Numbers.addDigit = function(num,sourcePath) {
	if(sourcePath == null) sourcePath = "";
	var digit = new openfl.display.Bitmap(openfl.Assets.getBitmapData(sourcePath + carlstillo.display.Numbers.numbers[num]));
	digit.set_x(carlstillo.display.Numbers.lastLoc);
	carlstillo.display.Numbers.lastLoc += digit.get_width();
	carlstillo.display.Numbers.displayNum.addChild(digit);
};
carlstillo.display.Numbers.__super__ = openfl.display.Sprite;
carlstillo.display.Numbers.prototype = $extend(openfl.display.Sprite.prototype,{
	__class__: carlstillo.display.Numbers
});
carlstillo.game = {};
carlstillo.game.Item = function(name,path,brokenPath,value,rate,safe,speed,powerUp,effect) {
	if(powerUp == null) powerUp = false;
	if(safe == null) safe = true;
	if(rate == null) rate = 1;
	if(value == null) value = 1;
	if(brokenPath == null) brokenPath = "";
	if(path == null) path = "";
	if(name == null) name = "";
	openfl.display.Sprite.call(this);
	this.itemName = name;
	this.score = value;
	this.dropRate = rate;
	this.isSafe = safe;
	this.imagePath = path;
	this.brokenImagePath = brokenPath;
	this.baseSpeed = speed;
	this.diffSpeed = 1;
	this.isPowerUp = powerUp;
	this.bonusType = effect;
	this.addChild(new openfl.display.Bitmap(openfl.Assets.getBitmapData(this.imagePath)));
	this.hitBox = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/items/foodBox.png"));
	this.hitBox.set_height(this.get_height());
	this.hitBox.set_width(this.get_width());
	this.hitBox.set_alpha(0.4);
};
$hxClasses["carlstillo.game.Item"] = carlstillo.game.Item;
carlstillo.game.Item.__name__ = ["carlstillo","game","Item"];
carlstillo.game.Item.__super__ = openfl.display.Sprite;
carlstillo.game.Item.prototype = $extend(openfl.display.Sprite.prototype,{
	breakItem: function() {
		this.removeChildAt(0);
		this.addChild(new openfl.display.Bitmap(openfl.Assets.getBitmapData(this.brokenImagePath)));
	}
	,cloneItem: function() {
		return new carlstillo.game.Item(this.itemName,this.imagePath,this.brokenImagePath,this.score,this.dropRate,this.isSafe,this.baseSpeed,this.isPowerUp,this.bonusType);
	}
	,getName: function() {
		return this.itemName;
	}
	,getScore: function() {
		return this.score;
	}
	,getDropRate: function() {
		return this.dropRate;
	}
	,checkSafety: function() {
		return this.isSafe;
	}
	,setDiffSpeed: function(speed) {
		if(speed == null) speed = 1;
		this.diffSpeed = speed;
	}
	,getVelocity: function() {
		return this.baseSpeed * this.diffSpeed;
	}
	,checkIsPowerUp: function() {
		return this.isPowerUp;
	}
	,__class__: carlstillo.game.Item
});
carlstillo.game.ItemDropper = function() {
};
$hxClasses["carlstillo.game.ItemDropper"] = carlstillo.game.ItemDropper;
carlstillo.game.ItemDropper.__name__ = ["carlstillo","game","ItemDropper"];
carlstillo.game.ItemDropper.itemList = null;
carlstillo.game.ItemDropper.dropTotal = null;
carlstillo.game.ItemDropper.itemRoofArray = null;
carlstillo.game.ItemDropper.initializeItemList = function() {
	carlstillo.game.ItemDropper.itemList = new Array();
	carlstillo.game.ItemDropper.itemRoofArray = new Array();
	carlstillo.game.ItemDropper.itemList[0] = new carlstillo.game.Item("Cheese","img/items/Cheese.png","img/items/cheeseBreak.png",1,55,true,1,null,carlstillo.game.ItemEffect.NONE);
	carlstillo.game.ItemDropper.itemList[1] = new carlstillo.game.Item("Gelatin","img/items/Jelly.png","img/items/jellyBreak.png",2,20,true,1.2,null,carlstillo.game.ItemEffect.NONE);
	carlstillo.game.ItemDropper.itemList[2] = new carlstillo.game.Item("Cookies","img/items/Cookie.png","img/items/cookieBreak.png",3,10,true,1.35,null,carlstillo.game.ItemEffect.NONE);
	carlstillo.game.ItemDropper.itemList[3] = new carlstillo.game.Item("Cake Slice","img/items/Cake.png","img/items/cakeBreak.png",4,5,true,1.75,null,carlstillo.game.ItemEffect.NONE);
	carlstillo.game.ItemDropper.itemList[4] = new carlstillo.game.Item("Trap,","img/items/trap01.png","img/items/trapBreak.png",0,15,false,1.5,null,carlstillo.game.ItemEffect.TRAP);
	carlstillo.game.ItemDropper.itemList[5] = new carlstillo.game.Item("Lamp,","img/items/lamp.png","img/items/lampBreak.png",0,7.5,false,1.8,null,carlstillo.game.ItemEffect.TRAP);
	carlstillo.game.ItemDropper.itemList[6] = new carlstillo.game.Item("Plate,","img/items/plate.png","img/items/plateBreak.png",0,5,false,2,null,carlstillo.game.ItemEffect.TRAP);
	carlstillo.game.ItemDropper.itemList[7] = new carlstillo.game.Item("Bowling Ball,","img/items/ball.png","img/items/ballBreak.png",0,2.5,false,3,null,carlstillo.game.ItemEffect.TRAP);
	carlstillo.game.ItemDropper.itemList[8] = new carlstillo.game.Item("Health","img/items/strawberry.png","img/items/strawberryBreak.png",2,15,true,1.2,true,carlstillo.game.ItemEffect.HEALTH);
	carlstillo.game.ItemDropper.dropTotal = 0;
	var _g1 = 0;
	var _g = carlstillo.game.ItemDropper.itemList.length;
	while(_g1 < _g) {
		var i = _g1++;
		carlstillo.game.ItemDropper.dropTotal += carlstillo.game.ItemDropper.itemList[i].getDropRate();
		carlstillo.game.ItemDropper.itemRoofArray[i] = carlstillo.game.ItemDropper.dropTotal;
	}
};
carlstillo.game.ItemDropper.dropItem = function() {
	var selectedIndex;
	selectedIndex = Math.random() * carlstillo.game.ItemDropper.dropTotal;
	var _g1 = 0;
	var _g = carlstillo.game.ItemDropper.itemRoofArray.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(carlstillo.game.ItemDropper.itemRoofArray[i] >= selectedIndex) return carlstillo.game.ItemDropper.itemList[i].cloneItem();
	}
	return carlstillo.game.ItemDropper.itemList[carlstillo.game.ItemDropper.itemList.length].cloneItem();
};
carlstillo.game.ItemDropper.prototype = {
	__class__: carlstillo.game.ItemDropper
};
carlstillo.game.ItemEffect = $hxClasses["carlstillo.game.ItemEffect"] = { __ename__ : true, __constructs__ : ["NONE","TRAP","HEALTH"] };
carlstillo.game.ItemEffect.NONE = ["NONE",0];
carlstillo.game.ItemEffect.NONE.toString = $estr;
carlstillo.game.ItemEffect.NONE.__enum__ = carlstillo.game.ItemEffect;
carlstillo.game.ItemEffect.TRAP = ["TRAP",1];
carlstillo.game.ItemEffect.TRAP.toString = $estr;
carlstillo.game.ItemEffect.TRAP.__enum__ = carlstillo.game.ItemEffect;
carlstillo.game.ItemEffect.HEALTH = ["HEALTH",2];
carlstillo.game.ItemEffect.HEALTH.toString = $estr;
carlstillo.game.ItemEffect.HEALTH.__enum__ = carlstillo.game.ItemEffect;
carlstillo.game.Player = function(sourceFolder,xmlFile,states) {
	if(xmlFile == null) xmlFile = "";
	if(sourceFolder == null) sourceFolder = "";
	openfl.display.Sprite.call(this);
	this.characterStates = states;
	this.playerSprite = new spritesheet.AnimatedSprite(this.prepareSprite(sourceFolder,xmlFile),false);
	this.changeCharState(0);
	this.playerSprite.set_x(this.playerSprite.get_width() / 2 * -1);
	this.playerSprite.set_y(this.playerSprite.get_height() * -1);
	this.addChild(this.playerSprite);
	this.hitBox = new openfl.geom.Rectangle(0,0,45,55);
	this.hitBox.y = (this.playerSprite.get_height() + 15) * -1;
	this.hitBox.x = this.hitBox.width / 2 * -1;
	this.hitBoxMidX = this.hitBox.x + this.hitBox.width / 2;
	this.hitBoxMidY = this.hitBox.y + this.hitBox.height / 2;
	this.hitBoxDisplay = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/items/hitbox.png"));
	this.hitBoxDisplay.set_height(this.hitBox.height);
	this.hitBoxDisplay.set_width(this.hitBox.width);
	this.hitBoxDisplay.set_y(this.hitBox.y);
	this.hitBoxDisplay.set_x(this.hitBox.x);
	this.hitBoxDisplay.set_alpha(0.5);
};
$hxClasses["carlstillo.game.Player"] = carlstillo.game.Player;
carlstillo.game.Player.__name__ = ["carlstillo","game","Player"];
carlstillo.game.Player.__super__ = openfl.display.Sprite;
carlstillo.game.Player.prototype = $extend(openfl.display.Sprite.prototype,{
	prepareSprite: function(sourcePath,xmlName) {
		var spritesheet = carlstillo.outsource.lato.CustomSparrowImporter.parse(openfl.Assets.getText(sourcePath + xmlName),sourcePath);
		var _g1 = 0;
		var _g = this.characterStates.length;
		while(_g1 < _g) {
			var i = _g1++;
			spritesheet.behaviors.get(this.characterStates[i]).frameRate = 25;
			spritesheet.behaviors.get(this.characterStates[i]).loop = true;
			haxe.Log.trace(xmlName + "    " + this.characterStates[i] + " ready",{ fileName : "Player.hx", lineNumber : 73, className : "carlstillo.game.Player", methodName : "prepareSprite"});
		}
		return spritesheet;
	}
	,changeCharState: function(state) {
		if(state < this.characterStates.length) {
			this.playerSprite.showBehavior(this.characterStates[state]);
			this.currentState = state;
		} else haxe.Log.trace("Invalid State!",{ fileName : "Player.hx", lineNumber : 86, className : "carlstillo.game.Player", methodName : "changeCharState"});
	}
	,checkState: function() {
		return this.currentState;
	}
	,getSprite: function() {
		return this.playerSprite;
	}
	,getHitBox: function() {
		return this.hitBox;
	}
	,checkHit: function(projectile) {
		var combinedWidth = (this.hitBox.width + projectile.get_width()) / 2;
		var combinedHeight = (this.hitBox.height + projectile.get_height()) / 2;
		var xDistance = Math.abs(this.get_x() + this.hitBoxMidX - (projectile.get_x() + projectile.get_width() / 2));
		var yDistance = Math.abs(this.get_y() + this.hitBoxMidY - (projectile.get_y() + projectile.get_height() / 2));
		if(xDistance < combinedWidth && yDistance < combinedHeight) return true;
		return false;
	}
	,giveItem: function(itemDrop) {
		this.disposeItem();
		this.itemHeld = itemDrop;
		this.itemHeld.set_x(this.itemHeld.get_height() * 1.25);
		this.itemHeld.set_y(this.playerSprite.get_height() * -0.5 - this.itemHeld.get_width());
		this.itemHeld.set_rotation(90);
		this.addChildAt(this.itemHeld,0);
	}
	,getItem: function() {
		return this.itemHeld;
	}
	,disposeItem: function() {
		this.removeChild(this.itemHeld);
		this.itemHeld = null;
	}
	,__class__: carlstillo.game.Player
});
carlstillo.outsource = {};
carlstillo.outsource.lato = {};
carlstillo.outsource.lato.CustomSparrowImporter = function() { };
$hxClasses["carlstillo.outsource.lato.CustomSparrowImporter"] = carlstillo.outsource.lato.CustomSparrowImporter;
carlstillo.outsource.lato.CustomSparrowImporter.__name__ = ["carlstillo","outsource","lato","CustomSparrowImporter"];
carlstillo.outsource.lato.CustomSparrowImporter.parse = function(data,assetDirectory) {
	if(assetDirectory == null) assetDirectory = "";
	var frames = new Array();
	var behaviors = new haxe.ds.StringMap();
	var xml = Xml.parse(data);
	var spriteSheetNode = xml.firstElement();
	var frameNames = new haxe.ds.StringMap();
	var i = 0;
	var $it0 = spriteSheetNode.elements();
	while( $it0.hasNext() ) {
		var behaviorNode = $it0.next();
		var behaviorNodeFast = new haxe.xml.Fast(behaviorNode);
		var frame = new spritesheet.data.SpritesheetFrame(Std.parseInt(behaviorNodeFast.att.resolve("x")),Std.parseInt(behaviorNodeFast.att.resolve("y")),Std.parseInt(behaviorNodeFast.att.resolve("width")),Std.parseInt(behaviorNodeFast.att.resolve("height")),Std.parseInt(behaviorNodeFast.att.resolve("frameX")) * -1,Std.parseInt(behaviorNodeFast.att.resolve("frameY")) * -1);
		frames.push(frame);
		if((function($this) {
			var $r;
			var key = behaviorNodeFast.att.resolve("name");
			$r = frameNames.exists(key);
			return $r;
		}(this))) ((function($this) {
			var $r;
			var key1 = behaviorNodeFast.att.resolve("name");
			$r = frameNames.get(key1);
			return $r;
		}(this))).push(i); else {
			var key2 = behaviorNodeFast.att.resolve("name");
			var value = new Array();
			frameNames.set(key2,value);
			((function($this) {
				var $r;
				var key3 = behaviorNodeFast.att.resolve("name");
				$r = frameNames.get(key3);
				return $r;
			}(this))).push(i);
		}
		i++;
	}
	var $it1 = frameNames.keys();
	while( $it1.hasNext() ) {
		var key4 = $it1.next();
		var behavior = new spritesheet.data.BehaviorData(key4,frameNames.get(key4));
		behaviors.set(key4,behavior);
	}
	var spriteSheetNodeFast = new haxe.xml.Fast(spriteSheetNode);
	var spriteSheet = new spritesheet.Spritesheet(null,frames,behaviors);
	spriteSheet.updateImage(openfl.Assets.getBitmapData(assetDirectory + "/" + spriteSheetNodeFast.att.resolve("imagePath")));
	return spriteSheet;
};
carlstillo.ui = {};
carlstillo.ui.Button = function(x,y,idle,down,off,hover,clickable) {
	if(clickable == null) clickable = true;
	if(hover == null) hover = "";
	if(off == null) off = "";
	openfl.display.Sprite.call(this);
	haxe.Log.trace("UI: Creating Button",{ fileName : "Button.hx", lineNumber : 25, className : "carlstillo.ui.Button", methodName : "new"});
	this.idleState = new openfl.display.Bitmap(openfl.Assets.getBitmapData(idle));
	this.downState = new openfl.display.Bitmap(openfl.Assets.getBitmapData(down));
	if(off.length > 0) this.disableState = new openfl.display.Bitmap(openfl.Assets.getBitmapData(off));
	if(hover.length > 0) this.hoverState = new openfl.display.Bitmap(openfl.Assets.getBitmapData(hover));
	this.buttonStates = new Array();
	this.buttonStates[0] = this.disableState;
	this.buttonStates[1] = this.idleState;
	this.buttonStates[2] = this.downState;
	this.buttonStates[3] = this.hoverState;
	this.set_isClickable(clickable);
	this.set_x(x);
	this.set_y(y);
	this.addEventListener(openfl.events.MouseEvent.MOUSE_DOWN,$bind(this,this.click));
	haxe.Log.trace("UI: Button Created!",{ fileName : "Button.hx", lineNumber : 53, className : "carlstillo.ui.Button", methodName : "new"});
};
$hxClasses["carlstillo.ui.Button"] = carlstillo.ui.Button;
carlstillo.ui.Button.__name__ = ["carlstillo","ui","Button"];
carlstillo.ui.Button.__super__ = openfl.display.Sprite;
carlstillo.ui.Button.prototype = $extend(openfl.display.Sprite.prototype,{
	get_isClickable: function() {
		return this.isClickable;
	}
	,set_isClickable: function(value) {
		if(!value) {
			if(this.disableState != null) this.changeState(0); else this.changeState(2);
		} else this.changeState(1);
		return this.isClickable = value;
	}
	,click: function(e) {
		if(this.isClickable) {
			this.changeState(2);
			carlstillo.utils.SoundManager.playSFX(carlstillo.utils.SoundManager.buttonClickSfx);
			motion.Actuate.timer(.1).onComplete($bind(this,this.changeState),[1]);
		}
	}
	,changeState: function(state) {
		this.removeChildren();
		this.addChild(this.buttonStates[state]);
		haxe.Log.trace("State Changed",{ fileName : "Button.hx", lineNumber : 105, className : "carlstillo.ui.Button", methodName : "changeState"});
	}
	,__class__: carlstillo.ui.Button
});
carlstillo.ui.ScreenManager = function() {
};
$hxClasses["carlstillo.ui.ScreenManager"] = carlstillo.ui.ScreenManager;
carlstillo.ui.ScreenManager.__name__ = ["carlstillo","ui","ScreenManager"];
carlstillo.ui.ScreenManager.requestSwitchScreen = function(gameParent,screen) {
	haxe.Log.trace("Requesting switch to " + Std.string(screen),{ fileName : "ScreenManager.hx", lineNumber : 24, className : "carlstillo.ui.ScreenManager", methodName : "requestSwitchScreen"});
	motion.Actuate.timer(0.15).onComplete(carlstillo.ui.ScreenManager.swtichScreen,[gameParent,screen]);
};
carlstillo.ui.ScreenManager.swtichScreen = function(gameParent,screen) {
	haxe.Log.trace("Screen Manager: Switching to " + Std.string(screen),{ fileName : "ScreenManager.hx", lineNumber : 30, className : "carlstillo.ui.ScreenManager", methodName : "swtichScreen"});
	gameParent.removeChildren();
	if(screen == carlstillo.ui.ScreenType.Game) carlstillo.ui.ScreenManager.proceedToGame(gameParent); else if(screen == carlstillo.ui.ScreenType.GameOver) carlstillo.ui.ScreenManager.proceedToGameOver(gameParent); else if(screen == carlstillo.ui.ScreenType.Title) carlstillo.ui.ScreenManager.proceedToTitle(gameParent); else if(screen == carlstillo.ui.ScreenType.HowTo) carlstillo.ui.ScreenManager.proceedToHowTo(gameParent); else if(screen == carlstillo.ui.ScreenType.Loading) carlstillo.ui.ScreenManager.proceedToLoading(gameParent); else haxe.Log.trace("Screen Manager: Invalid Destination",{ fileName : "ScreenManager.hx", lineNumber : 56, className : "carlstillo.ui.ScreenManager", methodName : "swtichScreen"});
	var _g1 = 0;
	var _g = gameParent.get_numChildren();
	while(_g1 < _g) {
		var i = _g1++;
		haxe.Log.trace("CHILD #" + i + "\t" + Std.string(gameParent.getChildAt(i)),{ fileName : "ScreenManager.hx", lineNumber : 61, className : "carlstillo.ui.ScreenManager", methodName : "swtichScreen"});
	}
};
carlstillo.ui.ScreenManager.proceedToLoading = function(parent) {
};
carlstillo.ui.ScreenManager.proceedToTitle = function(parent) {
	var title = new screens.TitleScreen();
	parent.addChild(title);
};
carlstillo.ui.ScreenManager.proceedToHowTo = function(parent) {
	var howTo = new screens.HowToPlay();
	parent.addChild(howTo);
};
carlstillo.ui.ScreenManager.proceedToGame = function(parent) {
	var game = new screens.GameScreen();
	parent.addChild(game);
};
carlstillo.ui.ScreenManager.proceedToGameOver = function(parent) {
	var gameOver = new screens.GameOverScreen();
	parent.addChild(gameOver);
};
carlstillo.ui.ScreenManager.prototype = {
	__class__: carlstillo.ui.ScreenManager
};
carlstillo.ui.ScreenType = $hxClasses["carlstillo.ui.ScreenType"] = { __ename__ : true, __constructs__ : ["Loading","Title","HowTo","Game","GameOver"] };
carlstillo.ui.ScreenType.Loading = ["Loading",0];
carlstillo.ui.ScreenType.Loading.toString = $estr;
carlstillo.ui.ScreenType.Loading.__enum__ = carlstillo.ui.ScreenType;
carlstillo.ui.ScreenType.Title = ["Title",1];
carlstillo.ui.ScreenType.Title.toString = $estr;
carlstillo.ui.ScreenType.Title.__enum__ = carlstillo.ui.ScreenType;
carlstillo.ui.ScreenType.HowTo = ["HowTo",2];
carlstillo.ui.ScreenType.HowTo.toString = $estr;
carlstillo.ui.ScreenType.HowTo.__enum__ = carlstillo.ui.ScreenType;
carlstillo.ui.ScreenType.Game = ["Game",3];
carlstillo.ui.ScreenType.Game.toString = $estr;
carlstillo.ui.ScreenType.Game.__enum__ = carlstillo.ui.ScreenType;
carlstillo.ui.ScreenType.GameOver = ["GameOver",4];
carlstillo.ui.ScreenType.GameOver.toString = $estr;
carlstillo.ui.ScreenType.GameOver.__enum__ = carlstillo.ui.ScreenType;
carlstillo.utils = {};
carlstillo.utils.SoundManager = function() {
};
$hxClasses["carlstillo.utils.SoundManager"] = carlstillo.utils.SoundManager;
carlstillo.utils.SoundManager.__name__ = ["carlstillo","utils","SoundManager"];
carlstillo.utils.SoundManager.buttonClickSfx = null;
carlstillo.utils.SoundManager.foodGetSfx = null;
carlstillo.utils.SoundManager.healthSfx = null;
carlstillo.utils.SoundManager.trapSfx = null;
carlstillo.utils.SoundManager.gameOverSfx = null;
carlstillo.utils.SoundManager.sfxVolume = null;
carlstillo.utils.SoundManager.initializeAudio = function() {
	haxe.Log.trace("Sound Manager: Preparing Audio...",{ fileName : "SoundManager.hx", lineNumber : 33, className : "carlstillo.utils.SoundManager", methodName : "initializeAudio"});
	carlstillo.utils.SoundManager.setSFXVolume(1);
	carlstillo.utils.SoundManager.buttonClickSfx = openfl.Assets.getMusic("audio/ButtonClick.mp3");
	carlstillo.utils.SoundManager.foodGetSfx = openfl.Assets.getMusic("audio/FoodGet.mp3");
	carlstillo.utils.SoundManager.healthSfx = openfl.Assets.getMusic("audio/Strawberrygetsfx_02.mp3");
	carlstillo.utils.SoundManager.trapSfx = openfl.Assets.getMusic("audio/TrapHitSFX.mp3");
	carlstillo.utils.SoundManager.gameOverSfx = openfl.Assets.getMusic("audio/gameOverSFX.mp3");
	haxe.Log.trace("Sound Manager: Audio ready.",{ fileName : "SoundManager.hx", lineNumber : 45, className : "carlstillo.utils.SoundManager", methodName : "initializeAudio"});
};
carlstillo.utils.SoundManager.playSFX = function(effect) {
	if(carlstillo.utils.SoundManager.sfxVolume > 0) effect.play();
};
carlstillo.utils.SoundManager.setSFXVolume = function(volume) {
	carlstillo.utils.SoundManager.sfxVolume = volume;
	haxe.Log.trace("SoundManager: sfx volume set to " + volume,{ fileName : "SoundManager.hx", lineNumber : 57, className : "carlstillo.utils.SoundManager", methodName : "setSFXVolume"});
};
carlstillo.utils.SoundManager.prototype = {
	__class__: carlstillo.utils.SoundManager
};
var com = {};
com.indigogaming = {};
com.indigogaming.wnpdispatcher = {};
com.indigogaming.wnpdispatcher.WNPEvent = function(type,canBubble,cancelable) {
	Event.call(this,type,canBubble,cancelable);
};
$hxClasses["com.indigogaming.wnpdispatcher.WNPEvent"] = com.indigogaming.wnpdispatcher.WNPEvent;
com.indigogaming.wnpdispatcher.WNPEvent.__name__ = ["com","indigogaming","wnpdispatcher","WNPEvent"];
com.indigogaming.wnpdispatcher.WNPEvent.__super__ = Event;
com.indigogaming.wnpdispatcher.WNPEvent.prototype = $extend(Event.prototype,{
	__class__: com.indigogaming.wnpdispatcher.WNPEvent
});
com.indigogaming.wnpdispatcher.WNPInterface = function() {
	openfl.events.EventDispatcher.call(this);
};
$hxClasses["com.indigogaming.wnpdispatcher.WNPInterface"] = com.indigogaming.wnpdispatcher.WNPInterface;
com.indigogaming.wnpdispatcher.WNPInterface.__name__ = ["com","indigogaming","wnpdispatcher","WNPInterface"];
com.indigogaming.wnpdispatcher.WNPInterface.__properties__ = {get_instance:"get_instance"}
com.indigogaming.wnpdispatcher.WNPInterface.instance = null;
com.indigogaming.wnpdispatcher.WNPInterface.get_instance = function() {
	if(com.indigogaming.wnpdispatcher.WNPInterface.instance == null) com.indigogaming.wnpdispatcher.WNPInterface.instance = new com.indigogaming.wnpdispatcher.WNPInterface();
	return com.indigogaming.wnpdispatcher.WNPInterface.instance;
};
com.indigogaming.wnpdispatcher.WNPInterface.pause = $hx_exports.pause = function() {
	com.indigogaming.wnpdispatcher.WNPInterface.get_instance().dispatchEvent(new openfl.events.Event("pause"));
};
com.indigogaming.wnpdispatcher.WNPInterface.unpause = $hx_exports.unpause = function() {
	com.indigogaming.wnpdispatcher.WNPInterface.get_instance().dispatchEvent(new openfl.events.Event("unpause"));
};
com.indigogaming.wnpdispatcher.WNPInterface.mute = $hx_exports.mute = function() {
	com.indigogaming.wnpdispatcher.WNPInterface.get_instance().dispatchEvent(new openfl.events.Event("mute"));
};
com.indigogaming.wnpdispatcher.WNPInterface.unmute = $hx_exports.unmute = function() {
	com.indigogaming.wnpdispatcher.WNPInterface.get_instance().dispatchEvent(new openfl.events.Event("unmute"));
};
com.indigogaming.wnpdispatcher.WNPInterface.reload = $hx_exports.reload = function() {
	com.indigogaming.wnpdispatcher.WNPInterface.get_instance().dispatchEvent(new openfl.events.Event("reload"));
};
com.indigogaming.wnpdispatcher.WNPInterface.__super__ = openfl.events.EventDispatcher;
com.indigogaming.wnpdispatcher.WNPInterface.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	submitRank: function(rank) {
		switch(rank[1]) {
		case 0:
			location.href = "cnwap://userperform:0";
			break;
		case 1:
			location.href = "cnwap://userperform:1";
			break;
		case 2:
			location.href = "cnwap://userperform:2";
			break;
		case 3:
			location.href = "cnwap://userperform:3";
			break;
		case 4:
			location.href = "cnwap://userperform:4";
			break;
		case 5:
			location.href = "cnwap://userperform:5";
			break;
		}
	}
	,__class__: com.indigogaming.wnpdispatcher.WNPInterface
});
com.indigogaming.wnpdispatcher.WNPRank = $hxClasses["com.indigogaming.wnpdispatcher.WNPRank"] = { __ename__ : true, __constructs__ : ["None","Poor","Ok","Good","Great","Outstanding"] };
com.indigogaming.wnpdispatcher.WNPRank.None = ["None",0];
com.indigogaming.wnpdispatcher.WNPRank.None.toString = $estr;
com.indigogaming.wnpdispatcher.WNPRank.None.__enum__ = com.indigogaming.wnpdispatcher.WNPRank;
com.indigogaming.wnpdispatcher.WNPRank.Poor = ["Poor",1];
com.indigogaming.wnpdispatcher.WNPRank.Poor.toString = $estr;
com.indigogaming.wnpdispatcher.WNPRank.Poor.__enum__ = com.indigogaming.wnpdispatcher.WNPRank;
com.indigogaming.wnpdispatcher.WNPRank.Ok = ["Ok",2];
com.indigogaming.wnpdispatcher.WNPRank.Ok.toString = $estr;
com.indigogaming.wnpdispatcher.WNPRank.Ok.__enum__ = com.indigogaming.wnpdispatcher.WNPRank;
com.indigogaming.wnpdispatcher.WNPRank.Good = ["Good",3];
com.indigogaming.wnpdispatcher.WNPRank.Good.toString = $estr;
com.indigogaming.wnpdispatcher.WNPRank.Good.__enum__ = com.indigogaming.wnpdispatcher.WNPRank;
com.indigogaming.wnpdispatcher.WNPRank.Great = ["Great",4];
com.indigogaming.wnpdispatcher.WNPRank.Great.toString = $estr;
com.indigogaming.wnpdispatcher.WNPRank.Great.__enum__ = com.indigogaming.wnpdispatcher.WNPRank;
com.indigogaming.wnpdispatcher.WNPRank.Outstanding = ["Outstanding",5];
com.indigogaming.wnpdispatcher.WNPRank.Outstanding.toString = $estr;
com.indigogaming.wnpdispatcher.WNPRank.Outstanding.__enum__ = com.indigogaming.wnpdispatcher.WNPRank;
var haxe = {};
haxe.StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : true, __constructs__ : ["CFunction","Module","FilePos","Method","LocalFunction"] };
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.LocalFunction = function(v) { var $x = ["LocalFunction",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.CallStack = function() { };
$hxClasses["haxe.CallStack"] = haxe.CallStack;
haxe.CallStack.__name__ = ["haxe","CallStack"];
haxe.CallStack.exceptionStack = function() {
	return [];
};
haxe.CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe.CallStack.itemToString(b,s);
	}
	return b.b;
};
haxe.CallStack.itemToString = function(b,s) {
	switch(s[1]) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = s[2];
		b.b += "module ";
		if(m == null) b.b += "null"; else b.b += "" + m;
		break;
	case 2:
		var line = s[4];
		var file = s[3];
		var s1 = s[2];
		if(s1 != null) {
			haxe.CallStack.itemToString(b,s1);
			b.b += " (";
		}
		if(file == null) b.b += "null"; else b.b += "" + file;
		b.b += " line ";
		if(line == null) b.b += "null"; else b.b += "" + line;
		if(s1 != null) b.b += ")";
		break;
	case 3:
		var meth = s[3];
		var cname = s[2];
		if(cname == null) b.b += "null"; else b.b += "" + cname;
		b.b += ".";
		if(meth == null) b.b += "null"; else b.b += "" + meth;
		break;
	case 4:
		var n = s[2];
		b.b += "local function #";
		if(n == null) b.b += "null"; else b.b += "" + n;
		break;
	}
};
haxe.Log = function() { };
$hxClasses["haxe.Log"] = haxe.Log;
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
};
haxe.Resource = function() { };
$hxClasses["haxe.Resource"] = haxe.Resource;
haxe.Resource.__name__ = ["haxe","Resource"];
haxe.Resource.content = null;
haxe.Resource.getString = function(name) {
	var _g = 0;
	var _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return x.str;
			var b = haxe.crypto.Base64.decode(x.data);
			return b.toString();
		}
	}
	return null;
};
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
};
haxe.Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe.Timer
};
haxe.Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe.Unserializer;
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0;
	var _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
};
haxe.Unserializer.prototype = {
	setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_1) {
			return null;
		}}; else this.resolver = r;
	}
	,get: function(p) {
		return this.buf.charCodeAt(p);
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw "Invalid object";
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!(typeof(k) == "string")) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.get(this.pos++) != 58) throw "Invalid enum format";
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = new Array();
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserialize: function() {
		var _g = this.get(this.pos++);
		switch(_g) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			var p1 = this.pos;
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
			}
			return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
		case 121:
			var len = this.readDigits();
			if(this.get(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = decodeURIComponent(s.split("+").join(" "));
			this.scache.push(s);
			return s;
		case 107:
			return Math.NaN;
		case 109:
			return Math.NEGATIVE_INFINITY;
		case 112:
			return Math.POSITIVE_INFINITY;
		case 97:
			var buf = this.buf;
			var a = new Array();
			this.cache.push(a);
			while(true) {
				var c1 = this.buf.charCodeAt(this.pos);
				if(c1 == 104) {
					this.pos++;
					break;
				}
				if(c1 == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n1 = this.readDigits();
			if(n1 < 0 || n1 >= this.cache.length) throw "Invalid reference";
			return this.cache[n1];
		case 82:
			var n2 = this.readDigits();
			if(n2 < 0 || n2 >= this.scache.length) throw "Invalid string reference";
			return this.scache[n2];
		case 120:
			throw this.unserialize();
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o1 = Type.createEmptyInstance(cl);
			this.cache.push(o1);
			this.unserializeObject(o1);
			return o1;
		case 119:
			var name1 = this.unserialize();
			var edecl = this.resolver.resolveEnum(name1);
			if(edecl == null) throw "Enum not found " + name1;
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name2 = this.unserialize();
			var edecl1 = this.resolver.resolveEnum(name2);
			if(edecl1 == null) throw "Enum not found " + name2;
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl1)[index];
			if(tag == null) throw "Unknown enum index " + name2 + "@" + index;
			var e1 = this.unserializeEnum(edecl1,tag);
			this.cache.push(e1);
			return e1;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf1 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe.ds.StringMap();
			this.cache.push(h);
			var buf2 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s1 = this.unserialize();
				h.set(s1,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h1 = new haxe.ds.IntMap();
			this.cache.push(h1);
			var buf3 = this.buf;
			var c2 = this.get(this.pos++);
			while(c2 == 58) {
				var i = this.readDigits();
				h1.set(i,this.unserialize());
				c2 = this.get(this.pos++);
			}
			if(c2 != 104) throw "Invalid IntMap format";
			return h1;
		case 77:
			var h2 = new haxe.ds.ObjectMap();
			this.cache.push(h2);
			var buf4 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s2 = this.unserialize();
				h2.set(s2,this.unserialize());
			}
			this.pos++;
			return h2;
		case 118:
			var d;
			var s3 = HxOverrides.substr(this.buf,this.pos,19);
			d = HxOverrides.strDate(s3);
			this.cache.push(d);
			this.pos += 19;
			return d;
		case 115:
			var len1 = this.readDigits();
			var buf5 = this.buf;
			if(this.get(this.pos++) != 58 || this.length - this.pos < len1) throw "Invalid bytes length";
			var codes = haxe.Unserializer.CODES;
			if(codes == null) {
				codes = haxe.Unserializer.initCodes();
				haxe.Unserializer.CODES = codes;
			}
			var i1 = this.pos;
			var rest = len1 & 3;
			var size;
			size = (len1 >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i1 + (len1 - rest);
			var bytes = haxe.io.Bytes.alloc(size);
			var bpos = 0;
			while(i1 < max) {
				var c11 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c21 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c11 << 2 | c21 >> 4);
				var c3 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c21 << 4 | c3 >> 2);
				var c4 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c3 << 6 | c4);
			}
			if(rest >= 2) {
				var c12 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c22 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c12 << 2 | c22 >> 4);
				if(rest == 3) {
					var c31 = codes[StringTools.fastCodeAt(buf5,i1++)];
					bytes.set(bpos++,c22 << 4 | c31 >> 2);
				}
			}
			this.pos += len1;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name3 = this.unserialize();
			var cl1 = this.resolver.resolveClass(name3);
			if(cl1 == null) throw "Class not found " + name3;
			var o2 = Type.createEmptyInstance(cl1);
			this.cache.push(o2);
			o2.hxUnserialize(this);
			if(this.get(this.pos++) != 103) throw "Invalid custom data";
			return o2;
		default:
		}
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	}
	,__class__: haxe.Unserializer
};
haxe.io = {};
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
};
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	var i = 0;
	while(i < s.length) {
		var c = StringTools.fastCodeAt(s,i++);
		if(55296 <= c && c <= 56319) c = c - 55232 << 10 | StringTools.fastCodeAt(s,i++) & 1023;
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe.io.Bytes(a.length,a);
};
haxe.io.Bytes.ofData = function(b) {
	return new haxe.io.Bytes(b.length,b);
};
haxe.io.Bytes.prototype = {
	get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,getString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c21 = b[i++];
				var c3 = b[i++];
				var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
				s += fcc((u >> 10) + 55232);
				s += fcc(u & 1023 | 56320);
			}
		}
		return s;
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,__class__: haxe.io.Bytes
};
haxe.crypto = {};
haxe.crypto.Base64 = function() { };
$hxClasses["haxe.crypto.Base64"] = haxe.crypto.Base64;
haxe.crypto.Base64.__name__ = ["haxe","crypto","Base64"];
haxe.crypto.Base64.decode = function(str,complement) {
	if(complement == null) complement = true;
	if(complement) while(HxOverrides.cca(str,str.length - 1) == 61) str = HxOverrides.substr(str,0,-1);
	return new haxe.crypto.BaseCode(haxe.crypto.Base64.BYTES).decodeBytes(haxe.io.Bytes.ofString(str));
};
haxe.crypto.BaseCode = function(base) {
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) nbits++;
	if(nbits > 8 || len != 1 << nbits) throw "BaseCode : base length must be a power of two.";
	this.base = base;
	this.nbits = nbits;
};
$hxClasses["haxe.crypto.BaseCode"] = haxe.crypto.BaseCode;
haxe.crypto.BaseCode.__name__ = ["haxe","crypto","BaseCode"];
haxe.crypto.BaseCode.prototype = {
	encodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		var size = b.length * 8 / nbits | 0;
		var out = haxe.io.Bytes.alloc(size + (b.length * 8 % nbits == 0?0:1));
		var buf = 0;
		var curbits = 0;
		var mask = (1 << nbits) - 1;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < nbits) {
				curbits += 8;
				buf <<= 8;
				buf |= b.get(pin++);
			}
			curbits -= nbits;
			out.set(pout++,base.b[buf >> curbits & mask]);
		}
		if(curbits > 0) out.set(pout++,base.b[buf << nbits - curbits & mask]);
		return out;
	}
	,initTable: function() {
		var tbl = new Array();
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			tbl[i] = -1;
		}
		var _g1 = 0;
		var _g2 = this.base.length;
		while(_g1 < _g2) {
			var i1 = _g1++;
			tbl[this.base.b[i1]] = i1;
		}
		this.tbl = tbl;
	}
	,decodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		if(this.tbl == null) this.initTable();
		var tbl = this.tbl;
		var size = b.length * nbits >> 3;
		var out = haxe.io.Bytes.alloc(size);
		var buf = 0;
		var curbits = 0;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < 8) {
				curbits += nbits;
				buf <<= nbits;
				var i = tbl[b.get(pin++)];
				if(i == -1) throw "BaseCode : invalid encoded char";
				buf |= i;
			}
			curbits -= 8;
			out.set(pout++,buf >> curbits & 255);
		}
		return out;
	}
	,__class__: haxe.crypto.BaseCode
};
haxe.ds = {};
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = ["haxe","ds","IntMap"];
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	set: function(key,value) {
		this.h[key] = value;
	}
	,__class__: haxe.ds.IntMap
};
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
haxe.ds.ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe.ds.ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,exists: function(key) {
		return this.h.__keys__[key.__id__] != null;
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
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
	,__class__: haxe.ds.ObjectMap
};
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,__class__: haxe.ds.StringMap
};
haxe.ds._Vector = {};
haxe.ds._Vector.Vector_Impl_ = function() { };
$hxClasses["haxe.ds._Vector.Vector_Impl_"] = haxe.ds._Vector.Vector_Impl_;
haxe.ds._Vector.Vector_Impl_.__name__ = ["haxe","ds","_Vector","Vector_Impl_"];
haxe.ds._Vector.Vector_Impl_.blit = function(src,srcPos,dest,destPos,len) {
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		dest[destPos + i] = src[srcPos + i];
	}
};
haxe.ds._Vector.Vector_Impl_.toArray = function(this1) {
	var a = new Array();
	var len = this1.length;
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		a[i] = this1[i];
	}
	return a;
};
haxe.io.Eof = function() { };
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
};
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : true, __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; };
haxe.io.Path = function(path) {
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		this.dir = HxOverrides.substr(path,0,c2);
		path = HxOverrides.substr(path,c2 + 1,null);
		this.backslash = true;
	} else if(c2 < c1) {
		this.dir = HxOverrides.substr(path,0,c1);
		path = HxOverrides.substr(path,c1 + 1,null);
	} else this.dir = null;
	var cp = path.lastIndexOf(".");
	if(cp != -1) {
		this.ext = HxOverrides.substr(path,cp + 1,null);
		this.file = HxOverrides.substr(path,0,cp);
	} else {
		this.ext = null;
		this.file = path;
	}
};
$hxClasses["haxe.io.Path"] = haxe.io.Path;
haxe.io.Path.__name__ = ["haxe","io","Path"];
haxe.io.Path.withoutExtension = function(path) {
	var s = new haxe.io.Path(path);
	s.ext = null;
	return s.toString();
};
haxe.io.Path.prototype = {
	toString: function() {
		return (this.dir == null?"":this.dir + (this.backslash?"\\":"/")) + this.file + (this.ext == null?"":"." + this.ext);
	}
	,__class__: haxe.io.Path
};
haxe.xml = {};
haxe.xml._Fast = {};
haxe.xml._Fast.NodeAccess = function(x) {
	this.__x = x;
};
$hxClasses["haxe.xml._Fast.NodeAccess"] = haxe.xml._Fast.NodeAccess;
haxe.xml._Fast.NodeAccess.__name__ = ["haxe","xml","_Fast","NodeAccess"];
haxe.xml._Fast.NodeAccess.prototype = {
	__class__: haxe.xml._Fast.NodeAccess
};
haxe.xml._Fast.AttribAccess = function(x) {
	this.__x = x;
};
$hxClasses["haxe.xml._Fast.AttribAccess"] = haxe.xml._Fast.AttribAccess;
haxe.xml._Fast.AttribAccess.__name__ = ["haxe","xml","_Fast","AttribAccess"];
haxe.xml._Fast.AttribAccess.prototype = {
	resolve: function(name) {
		if(this.__x.nodeType == Xml.Document) throw "Cannot access document attribute " + name;
		var v = this.__x.get(name);
		if(v == null) throw this.__x.get_nodeName() + " is missing attribute " + name;
		return v;
	}
	,__class__: haxe.xml._Fast.AttribAccess
};
haxe.xml._Fast.HasAttribAccess = function(x) {
	this.__x = x;
};
$hxClasses["haxe.xml._Fast.HasAttribAccess"] = haxe.xml._Fast.HasAttribAccess;
haxe.xml._Fast.HasAttribAccess.__name__ = ["haxe","xml","_Fast","HasAttribAccess"];
haxe.xml._Fast.HasAttribAccess.prototype = {
	__class__: haxe.xml._Fast.HasAttribAccess
};
haxe.xml._Fast.HasNodeAccess = function(x) {
	this.__x = x;
};
$hxClasses["haxe.xml._Fast.HasNodeAccess"] = haxe.xml._Fast.HasNodeAccess;
haxe.xml._Fast.HasNodeAccess.__name__ = ["haxe","xml","_Fast","HasNodeAccess"];
haxe.xml._Fast.HasNodeAccess.prototype = {
	__class__: haxe.xml._Fast.HasNodeAccess
};
haxe.xml._Fast.NodeListAccess = function(x) {
	this.__x = x;
};
$hxClasses["haxe.xml._Fast.NodeListAccess"] = haxe.xml._Fast.NodeListAccess;
haxe.xml._Fast.NodeListAccess.__name__ = ["haxe","xml","_Fast","NodeListAccess"];
haxe.xml._Fast.NodeListAccess.prototype = {
	__class__: haxe.xml._Fast.NodeListAccess
};
haxe.xml.Fast = function(x) {
	if(x.nodeType != Xml.Document && x.nodeType != Xml.Element) throw "Invalid nodeType " + Std.string(x.nodeType);
	this.x = x;
	this.node = new haxe.xml._Fast.NodeAccess(x);
	this.nodes = new haxe.xml._Fast.NodeListAccess(x);
	this.att = new haxe.xml._Fast.AttribAccess(x);
	this.has = new haxe.xml._Fast.HasAttribAccess(x);
	this.hasNode = new haxe.xml._Fast.HasNodeAccess(x);
};
$hxClasses["haxe.xml.Fast"] = haxe.xml.Fast;
haxe.xml.Fast.__name__ = ["haxe","xml","Fast"];
haxe.xml.Fast.prototype = {
	__class__: haxe.xml.Fast
};
haxe.xml.Parser = function() { };
$hxClasses["haxe.xml.Parser"] = haxe.xml.Parser;
haxe.xml.Parser.__name__ = ["haxe","xml","Parser"];
haxe.xml.Parser.parse = function(str) {
	var doc = Xml.createDocument();
	haxe.xml.Parser.doParse(str,0,doc);
	return doc;
};
haxe.xml.Parser.doParse = function(str,p,parent) {
	if(p == null) p = 0;
	var xml = null;
	var state = 1;
	var next = 1;
	var aname = null;
	var start = 0;
	var nsubs = 0;
	var nbrackets = 0;
	var c = str.charCodeAt(p);
	var buf = new StringBuf();
	while(!(c != c)) {
		switch(state) {
		case 0:
			switch(c) {
			case 10:case 13:case 9:case 32:
				break;
			default:
				state = next;
				continue;
			}
			break;
		case 1:
			switch(c) {
			case 60:
				state = 0;
				next = 2;
				break;
			default:
				start = p;
				state = 13;
				continue;
			}
			break;
		case 13:
			if(c == 60) {
				var child = Xml.createPCData(buf.b + HxOverrides.substr(str,start,p - start));
				buf = new StringBuf();
				parent.addChild(child);
				nsubs++;
				state = 0;
				next = 2;
			} else if(c == 38) {
				buf.addSub(str,start,p - start);
				state = 18;
				next = 13;
				start = p + 1;
			}
			break;
		case 17:
			if(c == 93 && str.charCodeAt(p + 1) == 93 && str.charCodeAt(p + 2) == 62) {
				var child1 = Xml.createCData(HxOverrides.substr(str,start,p - start));
				parent.addChild(child1);
				nsubs++;
				p += 2;
				state = 1;
			}
			break;
		case 2:
			switch(c) {
			case 33:
				if(str.charCodeAt(p + 1) == 91) {
					p += 2;
					if(HxOverrides.substr(str,p,6).toUpperCase() != "CDATA[") throw "Expected <![CDATA[";
					p += 5;
					state = 17;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) == 68 || str.charCodeAt(p + 1) == 100) {
					if(HxOverrides.substr(str,p + 2,6).toUpperCase() != "OCTYPE") throw "Expected <!DOCTYPE";
					p += 8;
					state = 16;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) != 45 || str.charCodeAt(p + 2) != 45) throw "Expected <!--"; else {
					p += 2;
					state = 15;
					start = p + 1;
				}
				break;
			case 63:
				state = 14;
				start = p;
				break;
			case 47:
				if(parent == null) throw "Expected node name";
				start = p + 1;
				state = 0;
				next = 10;
				break;
			default:
				state = 3;
				start = p;
				continue;
			}
			break;
		case 3:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(p == start) throw "Expected node name";
				xml = Xml.createElement(HxOverrides.substr(str,start,p - start));
				parent.addChild(xml);
				state = 0;
				next = 4;
				continue;
			}
			break;
		case 4:
			switch(c) {
			case 47:
				state = 11;
				nsubs++;
				break;
			case 62:
				state = 9;
				nsubs++;
				break;
			default:
				state = 5;
				start = p;
				continue;
			}
			break;
		case 5:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				var tmp;
				if(start == p) throw "Expected attribute name";
				tmp = HxOverrides.substr(str,start,p - start);
				aname = tmp;
				if(xml.exists(aname)) throw "Duplicate attribute";
				state = 0;
				next = 6;
				continue;
			}
			break;
		case 6:
			switch(c) {
			case 61:
				state = 0;
				next = 7;
				break;
			default:
				throw "Expected =";
			}
			break;
		case 7:
			switch(c) {
			case 34:case 39:
				state = 8;
				start = p;
				break;
			default:
				throw "Expected \"";
			}
			break;
		case 8:
			if(c == str.charCodeAt(start)) {
				var val = HxOverrides.substr(str,start + 1,p - start - 1);
				xml.set(aname,val);
				state = 0;
				next = 4;
			}
			break;
		case 9:
			p = haxe.xml.Parser.doParse(str,p,xml);
			start = p;
			state = 1;
			break;
		case 11:
			switch(c) {
			case 62:
				state = 1;
				break;
			default:
				throw "Expected >";
			}
			break;
		case 12:
			switch(c) {
			case 62:
				if(nsubs == 0) parent.addChild(Xml.createPCData(""));
				return p;
			default:
				throw "Expected >";
			}
			break;
		case 10:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(start == p) throw "Expected node name";
				var v = HxOverrides.substr(str,start,p - start);
				if(v != parent.get_nodeName()) throw "Expected </" + parent.get_nodeName() + ">";
				state = 0;
				next = 12;
				continue;
			}
			break;
		case 15:
			if(c == 45 && str.charCodeAt(p + 1) == 45 && str.charCodeAt(p + 2) == 62) {
				parent.addChild(Xml.createComment(HxOverrides.substr(str,start,p - start)));
				p += 2;
				state = 1;
			}
			break;
		case 16:
			if(c == 91) nbrackets++; else if(c == 93) nbrackets--; else if(c == 62 && nbrackets == 0) {
				parent.addChild(Xml.createDocType(HxOverrides.substr(str,start,p - start)));
				state = 1;
			}
			break;
		case 14:
			if(c == 63 && str.charCodeAt(p + 1) == 62) {
				p++;
				var str1 = HxOverrides.substr(str,start + 1,p - start - 2);
				parent.addChild(Xml.createProcessingInstruction(str1));
				state = 1;
			}
			break;
		case 18:
			if(c == 59) {
				var s = HxOverrides.substr(str,start,p - start);
				if(s.charCodeAt(0) == 35) {
					var i;
					if(s.charCodeAt(1) == 120) i = Std.parseInt("0" + HxOverrides.substr(s,1,s.length - 1)); else i = Std.parseInt(HxOverrides.substr(s,1,s.length - 1));
					buf.add(String.fromCharCode(i));
				} else if(!haxe.xml.Parser.escapes.exists(s)) buf.b += Std.string("&" + s + ";"); else buf.add(haxe.xml.Parser.escapes.get(s));
				start = p + 1;
				state = next;
			}
			break;
		}
		c = StringTools.fastCodeAt(str,++p);
	}
	if(state == 1) {
		start = p;
		state = 13;
	}
	if(state == 13) {
		if(p != start || nsubs == 0) parent.addChild(Xml.createPCData(buf.b + HxOverrides.substr(str,start,p - start)));
		return p;
	}
	throw "Unexpected end";
};
var js = {};
js.Boot = function() { };
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js.Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js.Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js.Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
js.Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
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
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
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
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
};
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js.Boot.__interfLoop(js.Boot.getClass(o),cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
};
var motion = {};
motion.actuators = {};
motion.actuators.IGenericActuator = function() { };
$hxClasses["motion.actuators.IGenericActuator"] = motion.actuators.IGenericActuator;
motion.actuators.IGenericActuator.__name__ = ["motion","actuators","IGenericActuator"];
motion.actuators.IGenericActuator.prototype = {
	__class__: motion.actuators.IGenericActuator
};
motion.actuators.GenericActuator = function(target,duration,properties) {
	this._autoVisible = true;
	this._delay = 0;
	this._reflect = false;
	this._repeat = 0;
	this._reverse = false;
	this._smartRotation = false;
	this._snapping = false;
	this.special = false;
	this.target = target;
	this.properties = properties;
	this.duration = duration;
	this._ease = motion.Actuate.defaultEase;
};
$hxClasses["motion.actuators.GenericActuator"] = motion.actuators.GenericActuator;
motion.actuators.GenericActuator.__name__ = ["motion","actuators","GenericActuator"];
motion.actuators.GenericActuator.__interfaces__ = [motion.actuators.IGenericActuator];
motion.actuators.GenericActuator.prototype = {
	apply: function() {
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(Object.prototype.hasOwnProperty.call(this.target,i)) Reflect.setField(this.target,i,Reflect.field(this.properties,i)); else Reflect.setProperty(this.target,i,Reflect.field(this.properties,i));
		}
	}
	,autoVisible: function(value) {
		if(value == null) value = true;
		this._autoVisible = value;
		return this;
	}
	,callMethod: function(method,params) {
		if(params == null) params = [];
		return method.apply(method,params);
	}
	,change: function() {
		if(this._onUpdate != null) this.callMethod(this._onUpdate,this._onUpdateParams);
	}
	,complete: function(sendEvent) {
		if(sendEvent == null) sendEvent = true;
		if(sendEvent) {
			this.change();
			if(this._onComplete != null) this.callMethod(this._onComplete,this._onCompleteParams);
		}
		motion.Actuate.unload(this);
	}
	,delay: function(duration) {
		this._delay = duration;
		return this;
	}
	,ease: function(easing) {
		this._ease = easing;
		return this;
	}
	,move: function() {
	}
	,onComplete: function(handler,parameters) {
		this._onComplete = handler;
		if(parameters == null) this._onCompleteParams = []; else this._onCompleteParams = parameters;
		if(this.duration == 0) this.complete();
		return this;
	}
	,onRepeat: function(handler,parameters) {
		this._onRepeat = handler;
		if(parameters == null) this._onRepeatParams = []; else this._onRepeatParams = parameters;
		return this;
	}
	,onUpdate: function(handler,parameters) {
		this._onUpdate = handler;
		if(parameters == null) this._onUpdateParams = []; else this._onUpdateParams = parameters;
		return this;
	}
	,pause: function() {
	}
	,reflect: function(value) {
		if(value == null) value = true;
		this._reflect = value;
		this.special = true;
		return this;
	}
	,repeat: function(times) {
		if(times == null) times = -1;
		this._repeat = times;
		return this;
	}
	,resume: function() {
	}
	,reverse: function(value) {
		if(value == null) value = true;
		this._reverse = value;
		this.special = true;
		return this;
	}
	,smartRotation: function(value) {
		if(value == null) value = true;
		this._smartRotation = value;
		this.special = true;
		return this;
	}
	,snapping: function(value) {
		if(value == null) value = true;
		this._snapping = value;
		this.special = true;
		return this;
	}
	,stop: function(properties,complete,sendEvent) {
	}
	,__class__: motion.actuators.GenericActuator
};
motion.actuators.SimpleActuator = function(target,duration,properties) {
	this.active = true;
	this.propertyDetails = new Array();
	this.sendChange = false;
	this.paused = false;
	this.cacheVisible = false;
	this.initialized = false;
	this.setVisible = false;
	this.toggleVisible = false;
	this.startTime = openfl.Lib.getTimer() / 1000;
	motion.actuators.GenericActuator.call(this,target,duration,properties);
	if(!motion.actuators.SimpleActuator.addedEvent) {
		motion.actuators.SimpleActuator.addedEvent = true;
		openfl.Lib.current.stage.addEventListener(openfl.events.Event.ENTER_FRAME,motion.actuators.SimpleActuator.stage_onEnterFrame);
	}
};
$hxClasses["motion.actuators.SimpleActuator"] = motion.actuators.SimpleActuator;
motion.actuators.SimpleActuator.__name__ = ["motion","actuators","SimpleActuator"];
motion.actuators.SimpleActuator.stage_onEnterFrame = function(event) {
	var currentTime = openfl.Lib.getTimer() / 1000;
	var actuator;
	var j = 0;
	var cleanup = false;
	var _g1 = 0;
	var _g = motion.actuators.SimpleActuator.actuatorsLength;
	while(_g1 < _g) {
		var i = _g1++;
		actuator = motion.actuators.SimpleActuator.actuators[j];
		if(actuator != null && actuator.active) {
			if(currentTime > actuator.timeOffset) actuator.update(currentTime);
			j++;
		} else {
			motion.actuators.SimpleActuator.actuators.splice(j,1);
			--motion.actuators.SimpleActuator.actuatorsLength;
		}
	}
};
motion.actuators.SimpleActuator.__super__ = motion.actuators.GenericActuator;
motion.actuators.SimpleActuator.prototype = $extend(motion.actuators.GenericActuator.prototype,{
	autoVisible: function(value) {
		if(value == null) value = true;
		this._autoVisible = value;
		if(!value) {
			this.toggleVisible = false;
			if(this.setVisible) this.setField(this.target,"visible",this.cacheVisible);
		}
		return this;
	}
	,delay: function(duration) {
		this._delay = duration;
		this.timeOffset = this.startTime + duration;
		return this;
	}
	,getField: function(target,propertyName) {
		var value = null;
		if(Object.prototype.hasOwnProperty.call(target,propertyName)) value = Reflect.field(target,propertyName); else value = Reflect.getProperty(target,propertyName);
		return value;
	}
	,initialize: function() {
		var details;
		var start;
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			var isField = true;
			if(Object.prototype.hasOwnProperty.call(this.target,i) && (!this.target.__properties__ || !this.target.__properties__["set_" + i])) start = Reflect.field(this.target,i); else {
				isField = false;
				start = Reflect.getProperty(this.target,i);
			}
			if(typeof(start) == "number") {
				details = new motion.actuators.PropertyDetails(this.target,i,start,this.getField(this.properties,i) - start,isField);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,move: function() {
		this.toggleVisible = Object.prototype.hasOwnProperty.call(this.properties,"alpha") && js.Boot.__instanceof(this.target,openfl.display.DisplayObject);
		if(this.toggleVisible && this.properties.alpha != 0 && !this.getField(this.target,"visible")) {
			this.setVisible = true;
			this.cacheVisible = this.getField(this.target,"visible");
			this.setField(this.target,"visible",true);
		}
		this.timeOffset = this.startTime;
		motion.actuators.SimpleActuator.actuators.push(this);
		++motion.actuators.SimpleActuator.actuatorsLength;
	}
	,onUpdate: function(handler,parameters) {
		this._onUpdate = handler;
		if(parameters == null) this._onUpdateParams = []; else this._onUpdateParams = parameters;
		this.sendChange = true;
		return this;
	}
	,pause: function() {
		this.paused = true;
		this.pauseTime = openfl.Lib.getTimer();
	}
	,resume: function() {
		if(this.paused) {
			this.paused = false;
			this.timeOffset += (openfl.Lib.getTimer() - this.pauseTime) / 1000;
		}
	}
	,setField: function(target,propertyName,value) {
		if(Object.prototype.hasOwnProperty.call(target,propertyName)) target[propertyName] = value; else Reflect.setProperty(target,propertyName,value);
	}
	,setProperty: function(details,value) {
		if(details.isField) details.target[details.propertyName] = value; else Reflect.setProperty(details.target,details.propertyName,value);
	}
	,stop: function(properties,complete,sendEvent) {
		if(this.active) {
			if(properties == null) {
				this.active = false;
				if(complete) this.apply();
				this.complete(sendEvent);
				return;
			}
			var _g = 0;
			var _g1 = Reflect.fields(properties);
			while(_g < _g1.length) {
				var i = _g1[_g];
				++_g;
				if(Object.prototype.hasOwnProperty.call(this.properties,i)) {
					this.active = false;
					if(complete) this.apply();
					this.complete(sendEvent);
					return;
				}
			}
		}
	}
	,update: function(currentTime) {
		if(!this.paused) {
			var details;
			var easing;
			var i;
			var tweenPosition = (currentTime - this.timeOffset) / this.duration;
			if(tweenPosition > 1) tweenPosition = 1;
			if(!this.initialized) this.initialize();
			if(!this.special) {
				easing = this._ease.calculate(tweenPosition);
				var _g1 = 0;
				var _g = this.detailsLength;
				while(_g1 < _g) {
					var i1 = _g1++;
					details = this.propertyDetails[i1];
					this.setProperty(details,details.start + details.change * easing);
				}
			} else {
				if(!this._reverse) easing = this._ease.calculate(tweenPosition); else easing = this._ease.calculate(1 - tweenPosition);
				var endValue;
				var _g11 = 0;
				var _g2 = this.detailsLength;
				while(_g11 < _g2) {
					var i2 = _g11++;
					details = this.propertyDetails[i2];
					if(this._smartRotation && (details.propertyName == "rotation" || details.propertyName == "rotationX" || details.propertyName == "rotationY" || details.propertyName == "rotationZ")) {
						var rotation = details.change % 360;
						if(rotation > 180) rotation -= 360; else if(rotation < -180) rotation += 360;
						endValue = details.start + rotation * easing;
					} else endValue = details.start + details.change * easing;
					if(!this._snapping) {
						if(details.isField) details.target[details.propertyName] = endValue; else Reflect.setProperty(details.target,details.propertyName,endValue);
					} else this.setProperty(details,Math.round(endValue));
				}
			}
			if(tweenPosition == 1) {
				if(this._repeat == 0) {
					this.active = false;
					if(this.toggleVisible && this.getField(this.target,"alpha") == 0) this.setField(this.target,"visible",false);
					this.complete(true);
					return;
				} else {
					if(this._onRepeat != null) this.callMethod(this._onRepeat,this._onRepeatParams);
					if(this._reflect) this._reverse = !this._reverse;
					this.startTime = currentTime;
					this.timeOffset = this.startTime + this._delay;
					if(this._repeat > 0) this._repeat--;
				}
			}
			if(this.sendChange) this.change();
		}
	}
	,__class__: motion.actuators.SimpleActuator
});
motion.easing = {};
motion.easing.Expo = function() { };
$hxClasses["motion.easing.Expo"] = motion.easing.Expo;
motion.easing.Expo.__name__ = ["motion","easing","Expo"];
motion.easing.Expo.__properties__ = {get_easeOut:"get_easeOut",get_easeInOut:"get_easeInOut",get_easeIn:"get_easeIn"}
motion.easing.Expo.get_easeIn = function() {
	return new motion.easing.ExpoEaseIn();
};
motion.easing.Expo.get_easeInOut = function() {
	return new motion.easing.ExpoEaseInOut();
};
motion.easing.Expo.get_easeOut = function() {
	return new motion.easing.ExpoEaseOut();
};
motion.easing.IEasing = function() { };
$hxClasses["motion.easing.IEasing"] = motion.easing.IEasing;
motion.easing.IEasing.__name__ = ["motion","easing","IEasing"];
motion.easing.IEasing.prototype = {
	__class__: motion.easing.IEasing
};
motion.easing.ExpoEaseOut = function() {
};
$hxClasses["motion.easing.ExpoEaseOut"] = motion.easing.ExpoEaseOut;
motion.easing.ExpoEaseOut.__name__ = ["motion","easing","ExpoEaseOut"];
motion.easing.ExpoEaseOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.ExpoEaseOut.prototype = {
	calculate: function(k) {
		if(k == 1) return 1; else return 1 - Math.pow(2,-10 * k);
	}
	,ease: function(t,b,c,d) {
		if(t == d) return b + c; else return c * (1 - Math.pow(2,-10 * t / d)) + b;
	}
	,__class__: motion.easing.ExpoEaseOut
};
motion.Actuate = function() { };
$hxClasses["motion.Actuate"] = motion.Actuate;
motion.Actuate.__name__ = ["motion","Actuate"];
motion.Actuate.apply = function(target,properties,customActuator) {
	motion.Actuate.stop(target,properties);
	if(customActuator == null) customActuator = motion.Actuate.defaultActuator;
	var actuator = Type.createInstance(customActuator,[target,0,properties]);
	actuator.apply();
	return actuator;
};
motion.Actuate.effects = function(target,duration,overwrite) {
	if(overwrite == null) overwrite = true;
	return new motion._Actuate.EffectsOptions(target,duration,overwrite);
};
motion.Actuate.getLibrary = function(target,allowCreation) {
	if(allowCreation == null) allowCreation = true;
	if(!motion.Actuate.targetLibraries.exists(target) && allowCreation) motion.Actuate.targetLibraries.set(target,new Array());
	return motion.Actuate.targetLibraries.get(target);
};
motion.Actuate.motionPath = function(target,duration,properties,overwrite) {
	if(overwrite == null) overwrite = true;
	return motion.Actuate.tween(target,duration,properties,overwrite,motion.actuators.MotionPathActuator);
};
motion.Actuate.pause = function(target) {
	if(js.Boot.__instanceof(target,motion.actuators.GenericActuator)) (js.Boot.__cast(target , motion.actuators.GenericActuator)).pause(); else {
		var library = motion.Actuate.getLibrary(target,false);
		if(library != null) {
			var _g = 0;
			while(_g < library.length) {
				var actuator = library[_g];
				++_g;
				actuator.pause();
			}
		}
	}
};
motion.Actuate.pauseAll = function() {
	var $it0 = motion.Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var _g = 0;
		while(_g < library.length) {
			var actuator = library[_g];
			++_g;
			actuator.pause();
		}
	}
};
motion.Actuate.reset = function() {
	var $it0 = motion.Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var i = library.length - 1;
		while(i >= 0) {
			library[i].stop(null,false,false);
			i--;
		}
	}
	motion.Actuate.targetLibraries = new haxe.ds.ObjectMap();
};
motion.Actuate.resume = function(target) {
	if(js.Boot.__instanceof(target,motion.actuators.GenericActuator)) (js.Boot.__cast(target , motion.actuators.GenericActuator)).resume(); else {
		var library = motion.Actuate.getLibrary(target,false);
		if(library != null) {
			var _g = 0;
			while(_g < library.length) {
				var actuator = library[_g];
				++_g;
				actuator.resume();
			}
		}
	}
};
motion.Actuate.resumeAll = function() {
	var $it0 = motion.Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var _g = 0;
		while(_g < library.length) {
			var actuator = library[_g];
			++_g;
			actuator.resume();
		}
	}
};
motion.Actuate.stop = function(target,properties,complete,sendEvent) {
	if(sendEvent == null) sendEvent = true;
	if(complete == null) complete = false;
	if(target != null) {
		if(js.Boot.__instanceof(target,motion.actuators.GenericActuator)) (js.Boot.__cast(target , motion.actuators.GenericActuator)).stop(null,complete,sendEvent); else {
			var library = motion.Actuate.getLibrary(target,false);
			if(library != null) {
				if(typeof(properties) == "string") {
					var temp = { };
					Reflect.setField(temp,properties,null);
					properties = temp;
				} else if((properties instanceof Array) && properties.__enum__ == null) {
					var temp1 = { };
					var _g = 0;
					var _g1;
					_g1 = js.Boot.__cast(properties , Array);
					while(_g < _g1.length) {
						var property = _g1[_g];
						++_g;
						Reflect.setField(temp1,property,null);
					}
					properties = temp1;
				}
				var i = library.length - 1;
				while(i >= 0) {
					library[i].stop(properties,complete,sendEvent);
					i--;
				}
			}
		}
	}
};
motion.Actuate.timer = function(duration,customActuator) {
	return motion.Actuate.tween(new motion._Actuate.TweenTimer(0),duration,new motion._Actuate.TweenTimer(1),false,customActuator);
};
motion.Actuate.transform = function(target,duration,overwrite) {
	if(overwrite == null) overwrite = true;
	if(duration == null) duration = 0;
	return new motion._Actuate.TransformOptions(target,duration,overwrite);
};
motion.Actuate.tween = function(target,duration,properties,overwrite,customActuator) {
	if(overwrite == null) overwrite = true;
	if(target != null) {
		if(duration > 0) {
			if(customActuator == null) customActuator = motion.Actuate.defaultActuator;
			var actuator = Type.createInstance(customActuator,[target,duration,properties]);
			var library = motion.Actuate.getLibrary(actuator.target);
			if(overwrite) {
				var i = library.length - 1;
				while(i >= 0) {
					library[i].stop(actuator.properties,false,false);
					i--;
				}
				library = motion.Actuate.getLibrary(actuator.target);
			}
			library.push(actuator);
			actuator.move();
			return actuator;
		} else return motion.Actuate.apply(target,properties,customActuator);
	}
	return null;
};
motion.Actuate.unload = function(actuator) {
	var target = actuator.target;
	if(motion.Actuate.targetLibraries.h.__keys__[target.__id__] != null) {
		HxOverrides.remove(motion.Actuate.targetLibraries.h[target.__id__],actuator);
		if(motion.Actuate.targetLibraries.h[target.__id__].length == 0) motion.Actuate.targetLibraries.remove(target);
	}
};
motion.Actuate.update = function(target,duration,start,end,overwrite) {
	if(overwrite == null) overwrite = true;
	var properties = { start : start, end : end};
	return motion.Actuate.tween(target,duration,properties,overwrite,motion.actuators.MethodActuator);
};
motion._Actuate = {};
motion._Actuate.EffectsOptions = function(target,duration,overwrite) {
	this.target = target;
	this.duration = duration;
	this.overwrite = overwrite;
};
$hxClasses["motion._Actuate.EffectsOptions"] = motion._Actuate.EffectsOptions;
motion._Actuate.EffectsOptions.__name__ = ["motion","_Actuate","EffectsOptions"];
motion._Actuate.EffectsOptions.prototype = {
	filter: function(reference,properties) {
		properties.filter = reference;
		return motion.Actuate.tween(this.target,this.duration,properties,this.overwrite,motion.actuators.FilterActuator);
	}
	,__class__: motion._Actuate.EffectsOptions
};
motion._Actuate.TransformOptions = function(target,duration,overwrite) {
	this.target = target;
	this.duration = duration;
	this.overwrite = overwrite;
};
$hxClasses["motion._Actuate.TransformOptions"] = motion._Actuate.TransformOptions;
motion._Actuate.TransformOptions.__name__ = ["motion","_Actuate","TransformOptions"];
motion._Actuate.TransformOptions.prototype = {
	color: function(value,strength,alpha) {
		if(strength == null) strength = 1;
		if(value == null) value = 0;
		var properties = { colorValue : value, colorStrength : strength};
		if(alpha != null) properties.colorAlpha = alpha;
		return motion.Actuate.tween(this.target,this.duration,properties,this.overwrite,motion.actuators.TransformActuator);
	}
	,sound: function(volume,pan) {
		var properties = { };
		if(volume != null) properties.soundVolume = volume;
		if(pan != null) properties.soundPan = pan;
		return motion.Actuate.tween(this.target,this.duration,properties,this.overwrite,motion.actuators.TransformActuator);
	}
	,__class__: motion._Actuate.TransformOptions
};
motion._Actuate.TweenTimer = function(progress) {
	this.progress = progress;
};
$hxClasses["motion._Actuate.TweenTimer"] = motion._Actuate.TweenTimer;
motion._Actuate.TweenTimer.__name__ = ["motion","_Actuate","TweenTimer"];
motion._Actuate.TweenTimer.prototype = {
	__class__: motion._Actuate.TweenTimer
};
motion.MotionPath = function() {
	this._x = new motion.ComponentPath();
	this._y = new motion.ComponentPath();
	this._rotation = null;
};
$hxClasses["motion.MotionPath"] = motion.MotionPath;
motion.MotionPath.__name__ = ["motion","MotionPath"];
motion.MotionPath.prototype = {
	bezier: function(x,y,controlX,controlY,strength) {
		if(strength == null) strength = 1;
		this._x.addPath(new motion.BezierPath(x,controlX,strength));
		this._y.addPath(new motion.BezierPath(y,controlY,strength));
		return this;
	}
	,line: function(x,y,strength) {
		if(strength == null) strength = 1;
		this._x.addPath(new motion.LinearPath(x,strength));
		this._y.addPath(new motion.LinearPath(y,strength));
		return this;
	}
	,get_rotation: function() {
		if(this._rotation == null) this._rotation = new motion.RotationPath(this._x,this._y);
		return this._rotation;
	}
	,get_x: function() {
		return this._x;
	}
	,get_y: function() {
		return this._y;
	}
	,__class__: motion.MotionPath
	,__properties__: {get_y:"get_y",get_x:"get_x",get_rotation:"get_rotation"}
};
motion.IComponentPath = function() { };
$hxClasses["motion.IComponentPath"] = motion.IComponentPath;
motion.IComponentPath.__name__ = ["motion","IComponentPath"];
motion.IComponentPath.prototype = {
	__class__: motion.IComponentPath
};
motion.ComponentPath = function() {
	this.paths = new Array();
	this.start = 0;
	this.totalStrength = 0;
};
$hxClasses["motion.ComponentPath"] = motion.ComponentPath;
motion.ComponentPath.__name__ = ["motion","ComponentPath"];
motion.ComponentPath.__interfaces__ = [motion.IComponentPath];
motion.ComponentPath.prototype = {
	addPath: function(path) {
		this.paths.push(path);
		this.totalStrength += path.strength;
	}
	,calculate: function(k) {
		if(this.paths.length == 1) return this.paths[0].calculate(this.start,k); else {
			var ratio = k * this.totalStrength;
			var lastEnd = this.start;
			var _g = 0;
			var _g1 = this.paths;
			while(_g < _g1.length) {
				var path = _g1[_g];
				++_g;
				if(ratio > path.strength) {
					ratio -= path.strength;
					lastEnd = path.end;
				} else return path.calculate(lastEnd,ratio / path.strength);
			}
		}
		return 0;
	}
	,get_end: function() {
		if(this.paths.length > 0) {
			var path = this.paths[this.paths.length - 1];
			return path.end;
		} else return this.start;
	}
	,__class__: motion.ComponentPath
	,__properties__: {get_end:"get_end"}
};
motion.BezierPath = function(end,control,strength) {
	this.end = end;
	this.control = control;
	this.strength = strength;
};
$hxClasses["motion.BezierPath"] = motion.BezierPath;
motion.BezierPath.__name__ = ["motion","BezierPath"];
motion.BezierPath.prototype = {
	calculate: function(start,k) {
		return (1 - k) * (1 - k) * start + 2 * (1 - k) * k * this.control + k * k * this.end;
	}
	,__class__: motion.BezierPath
};
motion.LinearPath = function(end,strength) {
	motion.BezierPath.call(this,end,0,strength);
};
$hxClasses["motion.LinearPath"] = motion.LinearPath;
motion.LinearPath.__name__ = ["motion","LinearPath"];
motion.LinearPath.__super__ = motion.BezierPath;
motion.LinearPath.prototype = $extend(motion.BezierPath.prototype,{
	calculate: function(start,k) {
		return start + k * (this.end - start);
	}
	,__class__: motion.LinearPath
});
motion.RotationPath = function(x,y) {
	this.step = 0.01;
	this._x = x;
	this._y = y;
	this.offset = 0;
	this.start = this.calculate(0.0);
};
$hxClasses["motion.RotationPath"] = motion.RotationPath;
motion.RotationPath.__name__ = ["motion","RotationPath"];
motion.RotationPath.__interfaces__ = [motion.IComponentPath];
motion.RotationPath.prototype = {
	calculate: function(k) {
		var dX = this._x.calculate(k) - this._x.calculate(k + this.step);
		var dY = this._y.calculate(k) - this._y.calculate(k + this.step);
		var angle = Math.atan2(dY,dX) * (180 / Math.PI);
		angle = (angle + this.offset) % 360;
		return angle;
	}
	,get_end: function() {
		return this.calculate(1.0);
	}
	,__class__: motion.RotationPath
	,__properties__: {get_end:"get_end"}
};
motion.actuators.FilterActuator = function(target,duration,properties) {
	this.filterIndex = -1;
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
	if(js.Boot.__instanceof(properties.filter,Class)) {
		this.filterClass = properties.filter;
		var _g = 0;
		var _g1 = (js.Boot.__cast(target , openfl.display.DisplayObject)).get_filters();
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			if(js.Boot.__instanceof(filter,this.filterClass)) this.filter = filter;
		}
	} else {
		this.filterIndex = properties.filter;
		this.filter = (js.Boot.__cast(target , openfl.display.DisplayObject)).get_filters()[this.filterIndex];
	}
};
$hxClasses["motion.actuators.FilterActuator"] = motion.actuators.FilterActuator;
motion.actuators.FilterActuator.__name__ = ["motion","actuators","FilterActuator"];
motion.actuators.FilterActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.FilterActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	apply: function() {
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(propertyName != "filter") Reflect.setField(this.filter,propertyName,Reflect.field(this.properties,propertyName));
		}
		var filters = this.getField(this.target,"filters");
		Reflect.setField(filters,this.properties.filter,this.filter);
		this.setField(this.target,"filters",filters);
	}
	,initialize: function() {
		var details;
		var start;
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(propertyName != "filter") {
				start = this.getField(this.filter,propertyName);
				details = new motion.actuators.PropertyDetails(this.filter,propertyName,start,Reflect.field(this.properties,propertyName) - start);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,update: function(currentTime) {
		motion.actuators.SimpleActuator.prototype.update.call(this,currentTime);
		var filters = (js.Boot.__cast(this.target , openfl.display.DisplayObject)).get_filters();
		if(this.filterIndex > -1) Reflect.setField(filters,this.properties.filter,this.filter); else {
			var _g1 = 0;
			var _g = filters.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(js.Boot.__instanceof(filters[i],this.filterClass)) filters[i] = this.filter;
			}
		}
		this.setField(this.target,"filters",filters);
	}
	,__class__: motion.actuators.FilterActuator
});
motion.actuators.MethodActuator = function(target,duration,properties) {
	this.currentParameters = new Array();
	this.tweenProperties = { };
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
	if(!Object.prototype.hasOwnProperty.call(properties,"start")) this.properties.start = new Array();
	if(!Object.prototype.hasOwnProperty.call(properties,"end")) this.properties.end = this.properties.start;
	var _g1 = 0;
	var _g = this.properties.start.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.currentParameters.push(null);
	}
};
$hxClasses["motion.actuators.MethodActuator"] = motion.actuators.MethodActuator;
motion.actuators.MethodActuator.__name__ = ["motion","actuators","MethodActuator"];
motion.actuators.MethodActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.MethodActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	apply: function() {
		this.callMethod(this.target,this.properties.end);
	}
	,complete: function(sendEvent) {
		if(sendEvent == null) sendEvent = true;
		var _g1 = 0;
		var _g = this.properties.start.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.currentParameters[i] = Reflect.field(this.tweenProperties,"param" + i);
		}
		this.callMethod(this.target,this.currentParameters);
		motion.actuators.SimpleActuator.prototype.complete.call(this,sendEvent);
	}
	,initialize: function() {
		var details;
		var propertyName;
		var start;
		var _g1 = 0;
		var _g = this.properties.start.length;
		while(_g1 < _g) {
			var i = _g1++;
			propertyName = "param" + i;
			start = this.properties.start[i];
			this.tweenProperties[propertyName] = start;
			if(typeof(start) == "number" || ((start | 0) === start)) {
				details = new motion.actuators.PropertyDetails(this.tweenProperties,propertyName,start,this.properties.end[i] - start);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,update: function(currentTime) {
		motion.actuators.SimpleActuator.prototype.update.call(this,currentTime);
		if(this.active) {
			var _g1 = 0;
			var _g = this.properties.start.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.currentParameters[i] = Reflect.field(this.tweenProperties,"param" + i);
			}
			this.callMethod(this.target,this.currentParameters);
		}
	}
	,__class__: motion.actuators.MethodActuator
});
motion.actuators.MotionPathActuator = function(target,duration,properties) {
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
};
$hxClasses["motion.actuators.MotionPathActuator"] = motion.actuators.MotionPathActuator;
motion.actuators.MotionPathActuator.__name__ = ["motion","actuators","MotionPathActuator"];
motion.actuators.MotionPathActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.MotionPathActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	apply: function() {
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(Object.prototype.hasOwnProperty.call(this.target,propertyName)) Reflect.setField(this.target,propertyName,(js.Boot.__cast(Reflect.field(this.properties,propertyName) , motion.IComponentPath)).get_end()); else Reflect.setProperty(this.target,propertyName,(js.Boot.__cast(Reflect.field(this.properties,propertyName) , motion.IComponentPath)).get_end());
		}
	}
	,initialize: function() {
		var details;
		var path;
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			path = js.Boot.__cast(Reflect.field(this.properties,propertyName) , motion.IComponentPath);
			if(path != null) {
				var isField = true;
				if(Object.prototype.hasOwnProperty.call(this.target,propertyName)) path.start = Reflect.field(this.target,propertyName); else {
					isField = false;
					path.start = Reflect.getProperty(this.target,propertyName);
				}
				details = new motion.actuators.PropertyPathDetails(this.target,propertyName,path,isField);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,update: function(currentTime) {
		if(!this.paused) {
			var details;
			var easing;
			var tweenPosition = (currentTime - this.timeOffset) / this.duration;
			if(tweenPosition > 1) tweenPosition = 1;
			if(!this.initialized) this.initialize();
			if(!this.special) {
				easing = this._ease.calculate(tweenPosition);
				var _g = 0;
				var _g1 = this.propertyDetails;
				while(_g < _g1.length) {
					var details1 = _g1[_g];
					++_g;
					if(details1.isField) Reflect.setField(details1.target,details1.propertyName,(js.Boot.__cast(details1 , motion.actuators.PropertyPathDetails)).path.calculate(easing)); else Reflect.setProperty(details1.target,details1.propertyName,(js.Boot.__cast(details1 , motion.actuators.PropertyPathDetails)).path.calculate(easing));
				}
			} else {
				if(!this._reverse) easing = this._ease.calculate(tweenPosition); else easing = this._ease.calculate(1 - tweenPosition);
				var endValue;
				var _g2 = 0;
				var _g11 = this.propertyDetails;
				while(_g2 < _g11.length) {
					var details2 = _g11[_g2];
					++_g2;
					if(!this._snapping) {
						if(details2.isField) Reflect.setField(details2.target,details2.propertyName,(js.Boot.__cast(details2 , motion.actuators.PropertyPathDetails)).path.calculate(easing)); else Reflect.setProperty(details2.target,details2.propertyName,(js.Boot.__cast(details2 , motion.actuators.PropertyPathDetails)).path.calculate(easing));
					} else if(details2.isField) Reflect.setField(details2.target,details2.propertyName,Math.round((js.Boot.__cast(details2 , motion.actuators.PropertyPathDetails)).path.calculate(easing))); else Reflect.setProperty(details2.target,details2.propertyName,Math.round((js.Boot.__cast(details2 , motion.actuators.PropertyPathDetails)).path.calculate(easing)));
				}
			}
			if(tweenPosition == 1) {
				if(this._repeat == 0) {
					this.active = false;
					if(this.toggleVisible && this.getField(this.target,"alpha") == 0) this.setField(this.target,"visible",false);
					this.complete(true);
					return;
				} else {
					if(this._reflect) this._reverse = !this._reverse;
					this.startTime = currentTime;
					this.timeOffset = this.startTime + this._delay;
					if(this._repeat > 0) this._repeat--;
				}
			}
			if(this.sendChange) this.change();
		}
	}
	,__class__: motion.actuators.MotionPathActuator
});
motion.actuators.PropertyDetails = function(target,propertyName,start,change,isField) {
	if(isField == null) isField = true;
	this.target = target;
	this.propertyName = propertyName;
	this.start = start;
	this.change = change;
	this.isField = isField;
};
$hxClasses["motion.actuators.PropertyDetails"] = motion.actuators.PropertyDetails;
motion.actuators.PropertyDetails.__name__ = ["motion","actuators","PropertyDetails"];
motion.actuators.PropertyDetails.prototype = {
	__class__: motion.actuators.PropertyDetails
};
motion.actuators.PropertyPathDetails = function(target,propertyName,path,isField) {
	if(isField == null) isField = true;
	motion.actuators.PropertyDetails.call(this,target,propertyName,0,0,isField);
	this.path = path;
};
$hxClasses["motion.actuators.PropertyPathDetails"] = motion.actuators.PropertyPathDetails;
motion.actuators.PropertyPathDetails.__name__ = ["motion","actuators","PropertyPathDetails"];
motion.actuators.PropertyPathDetails.__super__ = motion.actuators.PropertyDetails;
motion.actuators.PropertyPathDetails.prototype = $extend(motion.actuators.PropertyDetails.prototype,{
	__class__: motion.actuators.PropertyPathDetails
});
motion.actuators.TransformActuator = function(target,duration,properties) {
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
};
$hxClasses["motion.actuators.TransformActuator"] = motion.actuators.TransformActuator;
motion.actuators.TransformActuator.__name__ = ["motion","actuators","TransformActuator"];
motion.actuators.TransformActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.TransformActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	apply: function() {
		this.initialize();
		if(this.endColorTransform != null) {
			var transform = this.getField(this.target,"transform");
			this.setField(transform,"colorTransform",this.endColorTransform);
		}
		if(this.endSoundTransform != null) this.setField(this.target,"soundTransform",this.endSoundTransform);
	}
	,initialize: function() {
		if(Object.prototype.hasOwnProperty.call(this.properties,"colorValue") && js.Boot.__instanceof(this.target,openfl.display.DisplayObject)) this.initializeColor();
		if(Object.prototype.hasOwnProperty.call(this.properties,"soundVolume") || Object.prototype.hasOwnProperty.call(this.properties,"soundPan")) this.initializeSound();
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,initializeColor: function() {
		this.endColorTransform = new openfl.geom.ColorTransform();
		var color = this.properties.colorValue;
		var strength = this.properties.colorStrength;
		if(strength < 1) {
			var multiplier;
			var offset;
			if(strength < 0.5) {
				multiplier = 1;
				offset = strength * 2;
			} else {
				multiplier = 1 - (strength - 0.5) * 2;
				offset = 1;
			}
			this.endColorTransform.redMultiplier = multiplier;
			this.endColorTransform.greenMultiplier = multiplier;
			this.endColorTransform.blueMultiplier = multiplier;
			this.endColorTransform.redOffset = offset * (color >> 16 & 255);
			this.endColorTransform.greenOffset = offset * (color >> 8 & 255);
			this.endColorTransform.blueOffset = offset * (color & 255);
		} else {
			this.endColorTransform.redMultiplier = 0;
			this.endColorTransform.greenMultiplier = 0;
			this.endColorTransform.blueMultiplier = 0;
			this.endColorTransform.redOffset = color >> 16 & 255;
			this.endColorTransform.greenOffset = color >> 8 & 255;
			this.endColorTransform.blueOffset = color & 255;
		}
		var propertyNames = ["redMultiplier","greenMultiplier","blueMultiplier","redOffset","greenOffset","blueOffset"];
		if(Object.prototype.hasOwnProperty.call(this.properties,"colorAlpha")) {
			this.endColorTransform.alphaMultiplier = this.properties.colorAlpha;
			propertyNames.push("alphaMultiplier");
		} else this.endColorTransform.alphaMultiplier = this.getField(this.target,"alpha");
		var transform = this.getField(this.target,"transform");
		var begin = this.getField(transform,"colorTransform");
		this.tweenColorTransform = new openfl.geom.ColorTransform();
		var details;
		var start;
		var _g = 0;
		while(_g < propertyNames.length) {
			var propertyName = propertyNames[_g];
			++_g;
			start = this.getField(begin,propertyName);
			details = new motion.actuators.PropertyDetails(this.tweenColorTransform,propertyName,start,this.getField(this.endColorTransform,propertyName) - start);
			this.propertyDetails.push(details);
		}
	}
	,initializeSound: function() {
		if(this.getField(this.target,"soundTransform") == null) this.setField(this.target,"soundTransform",new openfl.media.SoundTransform());
		var start = this.getField(this.target,"soundTransform");
		this.endSoundTransform = this.getField(this.target,"soundTransform");
		this.tweenSoundTransform = new openfl.media.SoundTransform();
		if(Object.prototype.hasOwnProperty.call(this.properties,"soundVolume")) {
			this.endSoundTransform.volume = this.properties.soundVolume;
			this.propertyDetails.push(new motion.actuators.PropertyDetails(this.tweenSoundTransform,"volume",start.volume,this.endSoundTransform.volume - start.volume));
		}
		if(Object.prototype.hasOwnProperty.call(this.properties,"soundPan")) {
			this.endSoundTransform.pan = this.properties.soundPan;
			this.propertyDetails.push(new motion.actuators.PropertyDetails(this.tweenSoundTransform,"pan",start.pan,this.endSoundTransform.pan - start.pan));
		}
	}
	,update: function(currentTime) {
		motion.actuators.SimpleActuator.prototype.update.call(this,currentTime);
		if(this.endColorTransform != null) {
			var transform = this.getField(this.target,"transform");
			this.setField(transform,"colorTransform",this.tweenColorTransform);
		}
		if(this.endSoundTransform != null) this.setField(this.target,"soundTransform",this.tweenSoundTransform);
	}
	,__class__: motion.actuators.TransformActuator
});
motion.easing.ExpoEaseIn = function() {
};
$hxClasses["motion.easing.ExpoEaseIn"] = motion.easing.ExpoEaseIn;
motion.easing.ExpoEaseIn.__name__ = ["motion","easing","ExpoEaseIn"];
motion.easing.ExpoEaseIn.__interfaces__ = [motion.easing.IEasing];
motion.easing.ExpoEaseIn.prototype = {
	calculate: function(k) {
		if(k == 0) return 0; else return Math.pow(2,10 * (k - 1));
	}
	,ease: function(t,b,c,d) {
		if(t == 0) return b; else return c * Math.pow(2,10 * (t / d - 1)) + b;
	}
	,__class__: motion.easing.ExpoEaseIn
};
motion.easing.ExpoEaseInOut = function() {
};
$hxClasses["motion.easing.ExpoEaseInOut"] = motion.easing.ExpoEaseInOut;
motion.easing.ExpoEaseInOut.__name__ = ["motion","easing","ExpoEaseInOut"];
motion.easing.ExpoEaseInOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.ExpoEaseInOut.prototype = {
	calculate: function(k) {
		if(k == 0) return 0;
		if(k == 1) return 1;
		if((k /= 0.5) < 1.0) return 0.5 * Math.pow(2,10 * (k - 1));
		return 0.5 * (2 - Math.pow(2,-10 * --k));
	}
	,ease: function(t,b,c,d) {
		if(t == 0) return b;
		if(t == d) return b + c;
		if((t /= d / 2.0) < 1.0) return c / 2 * Math.pow(2,10 * (t - 1)) + b;
		return c / 2 * (2 - Math.pow(2,-10 * --t)) + b;
	}
	,__class__: motion.easing.ExpoEaseInOut
};
openfl.AssetCache = function() {
	this.enabled = true;
	this.bitmapData = new haxe.ds.StringMap();
	this.font = new haxe.ds.StringMap();
	this.sound = new haxe.ds.StringMap();
};
$hxClasses["openfl.AssetCache"] = openfl.AssetCache;
openfl.AssetCache.__name__ = ["openfl","AssetCache"];
openfl.AssetCache.prototype = {
	clear: function(prefix) {
		if(prefix == null) {
			this.bitmapData = new haxe.ds.StringMap();
			this.font = new haxe.ds.StringMap();
			this.sound = new haxe.ds.StringMap();
		} else {
			var keys = this.bitmapData.keys();
			while( keys.hasNext() ) {
				var key = keys.next();
				if(StringTools.startsWith(key,prefix)) this.bitmapData.remove(key);
			}
			var keys1 = this.font.keys();
			while( keys1.hasNext() ) {
				var key1 = keys1.next();
				if(StringTools.startsWith(key1,prefix)) this.font.remove(key1);
			}
			var keys2 = this.sound.keys();
			while( keys2.hasNext() ) {
				var key2 = keys2.next();
				if(StringTools.startsWith(key2,prefix)) this.sound.remove(key2);
			}
		}
	}
	,__class__: openfl.AssetCache
};
openfl.Assets = function() { };
$hxClasses["openfl.Assets"] = openfl.Assets;
openfl.Assets.__name__ = ["openfl","Assets"];
openfl.Assets.addEventListener = function(type,listener,useCapture,priority,useWeakReference) {
	if(useWeakReference == null) useWeakReference = false;
	if(priority == null) priority = 0;
	if(useCapture == null) useCapture = false;
	openfl.Assets.initialize();
	openfl.Assets.dispatcher.addEventListener(type,listener,useCapture,priority,useWeakReference);
};
openfl.Assets.dispatchEvent = function(event) {
	openfl.Assets.initialize();
	return openfl.Assets.dispatcher.dispatchEvent(event);
};
openfl.Assets.exists = function(id,type) {
	openfl.Assets.initialize();
	if(type == null) type = openfl.AssetType.BINARY;
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) return library.exists(symbolName,type);
	return false;
};
openfl.Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl.Assets.cache.bitmapData.get(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) return bitmapData;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.IMAGE)) {
			if(library.isLocal(symbolName,openfl.AssetType.IMAGE)) {
				var bitmapData1 = library.getBitmapData(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.bitmapData.set(id,bitmapData1);
				return bitmapData1;
			} else haxe.Log.trace("[openfl.Assets] BitmapData asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 139, className : "openfl.Assets", methodName : "getBitmapData"});
		} else haxe.Log.trace("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 145, className : "openfl.Assets", methodName : "getBitmapData"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 151, className : "openfl.Assets", methodName : "getBitmapData"});
	return null;
};
openfl.Assets.getBytes = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			if(library.isLocal(symbolName,openfl.AssetType.BINARY)) return library.getBytes(symbolName); else haxe.Log.trace("[openfl.Assets] String or ByteArray asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 188, className : "openfl.Assets", methodName : "getBytes"});
		} else haxe.Log.trace("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 194, className : "openfl.Assets", methodName : "getBytes"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 200, className : "openfl.Assets", methodName : "getBytes"});
	return null;
};
openfl.Assets.getFont = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) return openfl.Assets.cache.font.get(id);
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.FONT)) {
			if(library.isLocal(symbolName,openfl.AssetType.FONT)) {
				var font = library.getFont(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.font.set(id,font);
				return font;
			} else haxe.Log.trace("[openfl.Assets] Font asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 251, className : "openfl.Assets", methodName : "getFont"});
		} else haxe.Log.trace("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 257, className : "openfl.Assets", methodName : "getFont"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 263, className : "openfl.Assets", methodName : "getFont"});
	return null;
};
openfl.Assets.getLibrary = function(name) {
	if(name == null || name == "") name = "default";
	return openfl.Assets.libraries.get(name);
};
openfl.Assets.getMovieClip = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MOVIE_CLIP)) {
			if(library.isLocal(symbolName,openfl.AssetType.MOVIE_CLIP)) return library.getMovieClip(symbolName); else haxe.Log.trace("[openfl.Assets] MovieClip asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 313, className : "openfl.Assets", methodName : "getMovieClip"});
		} else haxe.Log.trace("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 319, className : "openfl.Assets", methodName : "getMovieClip"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 325, className : "openfl.Assets", methodName : "getMovieClip"});
	return null;
};
openfl.Assets.getMusic = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) return sound;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MUSIC)) {
			if(library.isLocal(symbolName,openfl.AssetType.MUSIC)) {
				var sound1 = library.getMusic(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.sound.set(id,sound1);
				return sound1;
			} else haxe.Log.trace("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 382, className : "openfl.Assets", methodName : "getMusic"});
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 388, className : "openfl.Assets", methodName : "getMusic"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 394, className : "openfl.Assets", methodName : "getMusic"});
	return null;
};
openfl.Assets.getPath = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,null)) return library.getPath(symbolName); else haxe.Log.trace("[openfl.Assets] There is no asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 429, className : "openfl.Assets", methodName : "getPath"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 435, className : "openfl.Assets", methodName : "getPath"});
	return null;
};
openfl.Assets.getSound = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) return sound;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.SOUND)) {
			if(library.isLocal(symbolName,openfl.AssetType.SOUND)) {
				var sound1 = library.getSound(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.sound.set(id,sound1);
				return sound1;
			} else haxe.Log.trace("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 492, className : "openfl.Assets", methodName : "getSound"});
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 498, className : "openfl.Assets", methodName : "getSound"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 504, className : "openfl.Assets", methodName : "getSound"});
	return null;
};
openfl.Assets.getText = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.TEXT)) {
			if(library.isLocal(symbolName,openfl.AssetType.TEXT)) return library.getText(symbolName); else haxe.Log.trace("[openfl.Assets] String asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 541, className : "openfl.Assets", methodName : "getText"});
		} else haxe.Log.trace("[openfl.Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 547, className : "openfl.Assets", methodName : "getText"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 553, className : "openfl.Assets", methodName : "getText"});
	return null;
};
openfl.Assets.hasEventListener = function(type) {
	openfl.Assets.initialize();
	return openfl.Assets.dispatcher.hasEventListener(type);
};
openfl.Assets.initialize = function() {
	if(!openfl.Assets.initialized) {
		openfl.Assets.registerLibrary("default",new DefaultAssetLibrary());
		openfl.Assets.initialized = true;
	}
};
openfl.Assets.isLocal = function(id,type,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled) {
		if(type == openfl.AssetType.IMAGE || type == null) {
			if(openfl.Assets.cache.bitmapData.exists(id)) return true;
		}
		if(type == openfl.AssetType.FONT || type == null) {
			if(openfl.Assets.cache.font.exists(id)) return true;
		}
		if(type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC || type == null) {
			if(openfl.Assets.cache.sound.exists(id)) return true;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) return library.isLocal(symbolName,type);
	return false;
};
openfl.Assets.isValidBitmapData = function(bitmapData) {
	return bitmapData.__sourceImage != null || bitmapData.__sourceCanvas != null;
	return true;
};
openfl.Assets.isValidSound = function(sound) {
	return true;
};
openfl.Assets.list = function(type) {
	openfl.Assets.initialize();
	var items = [];
	var $it0 = openfl.Assets.libraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var libraryItems = library.list(type);
		if(libraryItems != null) items = items.concat(libraryItems);
	}
	return items;
};
openfl.Assets.loadBitmapData = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl.Assets.cache.bitmapData.get(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) {
			handler(bitmapData);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.IMAGE)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadBitmapData(symbolName,function(bitmapData1) {
				openfl.Assets.cache.bitmapData.set(id,bitmapData1);
				handler(bitmapData1);
			}); else library.loadBitmapData(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 750, className : "openfl.Assets", methodName : "loadBitmapData"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 756, className : "openfl.Assets", methodName : "loadBitmapData"});
	handler(null);
};
openfl.Assets.loadBytes = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			library.loadBytes(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 786, className : "openfl.Assets", methodName : "loadBytes"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 792, className : "openfl.Assets", methodName : "loadBytes"});
	handler(null);
};
openfl.Assets.loadFont = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) {
		handler(openfl.Assets.cache.font.get(id));
		return;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.FONT)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadFont(symbolName,function(font) {
				openfl.Assets.cache.font.set(id,font);
				handler(font);
			}); else library.loadFont(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 843, className : "openfl.Assets", methodName : "loadFont"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 849, className : "openfl.Assets", methodName : "loadFont"});
	handler(null);
};
openfl.Assets.loadLibrary = function(name,handler) {
	openfl.Assets.initialize();
	var data = openfl.Assets.getText("libraries/" + name + ".dat");
	if(data != null && data != "") {
		var unserializer = new haxe.Unserializer(data);
		unserializer.setResolver({ resolveEnum : openfl.Assets.resolveEnum, resolveClass : openfl.Assets.resolveClass});
		var library = unserializer.unserialize();
		openfl.Assets.libraries.set(name,library);
		library.eventCallback = openfl.Assets.library_onEvent;
		library.load(handler);
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + name + "\"",{ fileName : "Assets.hx", lineNumber : 880, className : "openfl.Assets", methodName : "loadLibrary"});
};
openfl.Assets.loadMusic = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) {
			handler(sound);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MUSIC)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadMusic(symbolName,function(sound1) {
				openfl.Assets.cache.sound.set(id,sound1);
				handler(sound1);
			}); else library.loadMusic(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 935, className : "openfl.Assets", methodName : "loadMusic"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 941, className : "openfl.Assets", methodName : "loadMusic"});
	handler(null);
};
openfl.Assets.loadMovieClip = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MOVIE_CLIP)) {
			library.loadMovieClip(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 971, className : "openfl.Assets", methodName : "loadMovieClip"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 977, className : "openfl.Assets", methodName : "loadMovieClip"});
	handler(null);
};
openfl.Assets.loadSound = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) {
			handler(sound);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.SOUND)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadSound(symbolName,function(sound1) {
				openfl.Assets.cache.sound.set(id,sound1);
				handler(sound1);
			}); else library.loadSound(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 1034, className : "openfl.Assets", methodName : "loadSound"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 1040, className : "openfl.Assets", methodName : "loadSound"});
	handler(null);
};
openfl.Assets.loadText = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.TEXT)) {
			library.loadText(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 1070, className : "openfl.Assets", methodName : "loadText"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 1076, className : "openfl.Assets", methodName : "loadText"});
	handler(null);
};
openfl.Assets.registerLibrary = function(name,library) {
	if(openfl.Assets.libraries.exists(name)) openfl.Assets.unloadLibrary(name);
	if(library != null) library.eventCallback = openfl.Assets.library_onEvent;
	openfl.Assets.libraries.set(name,library);
};
openfl.Assets.removeEventListener = function(type,listener,capture) {
	if(capture == null) capture = false;
	openfl.Assets.initialize();
	openfl.Assets.dispatcher.removeEventListener(type,listener,capture);
};
openfl.Assets.resolveClass = function(name) {
	return Type.resolveClass(name);
};
openfl.Assets.resolveEnum = function(name) {
	var value = Type.resolveEnum(name);
	return value;
};
openfl.Assets.unloadLibrary = function(name) {
	openfl.Assets.initialize();
	var library = openfl.Assets.libraries.get(name);
	if(library != null) {
		openfl.Assets.cache.clear(name + ":");
		library.eventCallback = null;
	}
	openfl.Assets.libraries.remove(name);
};
openfl.Assets.library_onEvent = function(library,type) {
	if(type == "change") {
		openfl.Assets.cache.clear();
		openfl.Assets.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE));
	}
};
openfl.AssetData = function() {
};
$hxClasses["openfl.AssetData"] = openfl.AssetData;
openfl.AssetData.__name__ = ["openfl","AssetData"];
openfl.AssetData.prototype = {
	__class__: openfl.AssetData
};
openfl.AssetType = $hxClasses["openfl.AssetType"] = { __ename__ : true, __constructs__ : ["BINARY","FONT","IMAGE","MOVIE_CLIP","MUSIC","SOUND","TEMPLATE","TEXT"] };
openfl.AssetType.BINARY = ["BINARY",0];
openfl.AssetType.BINARY.toString = $estr;
openfl.AssetType.BINARY.__enum__ = openfl.AssetType;
openfl.AssetType.FONT = ["FONT",1];
openfl.AssetType.FONT.toString = $estr;
openfl.AssetType.FONT.__enum__ = openfl.AssetType;
openfl.AssetType.IMAGE = ["IMAGE",2];
openfl.AssetType.IMAGE.toString = $estr;
openfl.AssetType.IMAGE.__enum__ = openfl.AssetType;
openfl.AssetType.MOVIE_CLIP = ["MOVIE_CLIP",3];
openfl.AssetType.MOVIE_CLIP.toString = $estr;
openfl.AssetType.MOVIE_CLIP.__enum__ = openfl.AssetType;
openfl.AssetType.MUSIC = ["MUSIC",4];
openfl.AssetType.MUSIC.toString = $estr;
openfl.AssetType.MUSIC.__enum__ = openfl.AssetType;
openfl.AssetType.SOUND = ["SOUND",5];
openfl.AssetType.SOUND.toString = $estr;
openfl.AssetType.SOUND.__enum__ = openfl.AssetType;
openfl.AssetType.TEMPLATE = ["TEMPLATE",6];
openfl.AssetType.TEMPLATE.toString = $estr;
openfl.AssetType.TEMPLATE.__enum__ = openfl.AssetType;
openfl.AssetType.TEXT = ["TEXT",7];
openfl.AssetType.TEXT.toString = $estr;
openfl.AssetType.TEXT.__enum__ = openfl.AssetType;
openfl.Lib = function() { };
$hxClasses["openfl.Lib"] = openfl.Lib;
openfl.Lib.__name__ = ["openfl","Lib"];
openfl.Lib.current = null;
openfl.Lib["as"] = function(v,c) {
	if(js.Boot.__instanceof(v,c)) return v; else return null;
};
openfl.Lib.attach = function(name) {
	return new openfl.display.MovieClip();
};
openfl.Lib.create = function(element,width,height,backgroundColor) {
	if(width == null) width = 0;
	if(height == null) height = 0;
	
			var lastTime = 0;
			var vendors = ['ms', 'moz', 'webkit', 'o'];
			for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
				window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
										   || window[vendors[x]+'CancelRequestAnimationFrame'];
			}
			
			if (!window.requestAnimationFrame)
				window.requestAnimationFrame = function(callback, element) {
					var currTime = new Date().getTime();
					var timeToCall = Math.max(0, 16 - (currTime - lastTime));
					var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
					  timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};
			
			if (!window.cancelAnimationFrame)
				window.cancelAnimationFrame = function(id) {
					clearTimeout(id);
				};
			
			window.requestAnimFrame = window.requestAnimationFrame;
		;
	var stage = new openfl.display.Stage(width,height,element,backgroundColor);
	if(openfl.Lib.current == null) {
		openfl.Lib.current = new openfl.display.MovieClip();
		stage.addChild(openfl.Lib.current);
	}
};
openfl.Lib.getTimer = function() {
	return Std["int"]((haxe.Timer.stamp() - openfl.Lib.__startTime) * 1000);
};
openfl.Lib.getURL = function(request,target) {
	if(target == null) target = "_blank";
	window.open(request.url,target);
};
openfl.Lib.notImplemented = function(api) {
	if(!openfl.Lib.__sentWarnings.exists(api)) {
		openfl.Lib.__sentWarnings.set(api,true);
		haxe.Log.trace("Warning: " + api + " is not implemented",{ fileName : "Lib.hx", lineNumber : 114, className : "openfl.Lib", methodName : "notImplemented"});
	}
};
openfl.Lib.preventDefaultTouchMove = function() {
	window.document.addEventListener("touchmove",function(evt) {
		evt.preventDefault();
	},false);
};
openfl.Lib.trace = function(arg) {
	haxe.Log.trace(arg,{ fileName : "Lib.hx", lineNumber : 134, className : "openfl.Lib", methodName : "trace"});
};
openfl.Memory = function() { };
$hxClasses["openfl.Memory"] = openfl.Memory;
openfl.Memory.__name__ = ["openfl","Memory"];
openfl.Memory.gcRef = null;
openfl.Memory.len = null;
openfl.Memory._setPositionTemporarily = function(position,action) {
	var oldPosition = openfl.Memory.gcRef.position;
	openfl.Memory.gcRef.position = position;
	var value = action();
	openfl.Memory.gcRef.position = oldPosition;
	return value;
};
openfl.Memory.getByte = function(addr) {
	return openfl.Memory.gcRef.__get(addr);
};
openfl.Memory.getDouble = function(addr) {
	return openfl.Memory._setPositionTemporarily(addr,function() {
		return openfl.Memory.gcRef.readDouble();
	});
};
openfl.Memory.getFloat = function(addr) {
	return openfl.Memory._setPositionTemporarily(addr,function() {
		return openfl.Memory.gcRef.readFloat();
	});
};
openfl.Memory.getI32 = function(addr) {
	return openfl.Memory._setPositionTemporarily(addr,function() {
		return openfl.Memory.gcRef.readInt();
	});
};
openfl.Memory.getUI16 = function(addr) {
	return openfl.Memory._setPositionTemporarily(addr,function() {
		return openfl.Memory.gcRef.readUnsignedShort();
	});
};
openfl.Memory.select = function(inBytes) {
	openfl.Memory.gcRef = inBytes;
	if(inBytes != null) openfl.Memory.len = inBytes.length; else openfl.Memory.len = 0;
};
openfl.Memory.setByte = function(addr,v) {
	openfl.Memory.gcRef.__set(addr,v);
};
openfl.Memory.setDouble = function(addr,v) {
	openfl.Memory._setPositionTemporarily(addr,function() {
		openfl.Memory.gcRef.writeDouble(v);
	});
};
openfl.Memory.setFloat = function(addr,v) {
	openfl.Memory._setPositionTemporarily(addr,function() {
		openfl.Memory.gcRef.writeFloat(v);
	});
};
openfl.Memory.setI16 = function(addr,v) {
	openfl.Memory._setPositionTemporarily(addr,function() {
		openfl.Memory.gcRef.writeUnsignedShort(v);
	});
};
openfl.Memory.setI32 = function(addr,v) {
	openfl.Memory._setPositionTemporarily(addr,function() {
		openfl.Memory.gcRef.writeInt(v);
	});
};
openfl._Vector = {};
openfl._Vector.Vector_Impl_ = function() { };
$hxClasses["openfl._Vector.Vector_Impl_"] = openfl._Vector.Vector_Impl_;
openfl._Vector.Vector_Impl_.__name__ = ["openfl","_Vector","Vector_Impl_"];
openfl._Vector.Vector_Impl_.__properties__ = {set_fixed:"set_fixed",get_fixed:"get_fixed",set_length:"set_length",get_length:"get_length"}
openfl._Vector.Vector_Impl_._new = function(length,fixed) {
	if(fixed == null) fixed = false;
	if(length == null) length = 0;
	var this1;
	this1 = new openfl.VectorData();
	var this2;
	this2 = new Array(length);
	this1.data = this2;
	this1.length = length;
	this1.fixed = fixed;
	return this1;
};
openfl._Vector.Vector_Impl_.concat = function(this1,a) {
	var vectorData = new openfl.VectorData();
	if(a != null) vectorData.length = this1.length + a.length; else vectorData.length = this1.length;
	vectorData.fixed = false;
	var this2;
	this2 = new Array(vectorData.length);
	vectorData.data = this2;
	haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,vectorData.data,0,this1.length);
	if(a != null) haxe.ds._Vector.Vector_Impl_.blit(a.data,0,vectorData.data,this1.length,a.length);
	return vectorData;
};
openfl._Vector.Vector_Impl_.copy = function(this1) {
	var vectorData = new openfl.VectorData();
	vectorData.length = this1.length;
	vectorData.fixed = this1.fixed;
	var this2;
	this2 = new Array(this1.length);
	vectorData.data = this2;
	haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,vectorData.data,0,this1.length);
	return vectorData;
};
openfl._Vector.Vector_Impl_.iterator = function(this1) {
	return new openfl.VectorDataIterator(this1);
};
openfl._Vector.Vector_Impl_.join = function(this1,sep) {
	var output = "";
	var _g1 = 0;
	var _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(i > 0) output += sep;
		output += Std.string(this1.data[i]);
	}
	return output;
};
openfl._Vector.Vector_Impl_.pop = function(this1) {
	if(!this1.fixed) {
		if(this1.length > 0) {
			this1.length--;
			return this1.data[this1.length];
		}
	}
	return null;
};
openfl._Vector.Vector_Impl_.push = function(this1,x) {
	if(!this1.fixed) {
		this1.length++;
		if(this1.data.length < this1.length) {
			var data;
			var this2;
			this2 = new Array(this1.data.length + 10);
			data = this2;
			haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,data,0,this1.data.length);
			this1.data = data;
		}
		this1.data[this1.length - 1] = x;
	}
	return this1.length;
};
openfl._Vector.Vector_Impl_.reverse = function(this1) {
	var data;
	var this2;
	this2 = new Array(this1.length);
	data = this2;
	var _g1 = 0;
	var _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		data[this1.length - 1 - i] = this1.data[i];
	}
	this1.data = data;
};
openfl._Vector.Vector_Impl_.shift = function(this1) {
	if(!this1.fixed && this1.length > 0) {
		var value = this1.data[0];
		this1.length--;
		haxe.ds._Vector.Vector_Impl_.blit(this1.data,1,this1.data,0,this1.length);
		return value;
	}
	return null;
};
openfl._Vector.Vector_Impl_.unshift = function(this1,x) {
	if(!this1.fixed) {
		this1.length++;
		if(this1.data.length < this1.length) {
			var data;
			var this2;
			this2 = new Array(this1.length + 10);
			data = this2;
			haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,data,1,this1.data.length);
			this1.data = data;
		} else haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,this1.data,1,this1.length - 1);
		this1.data[0] = x;
	}
};
openfl._Vector.Vector_Impl_.slice = function(this1,pos,end) {
	if(end == null) end = 0;
	if(pos == null) pos = 0;
	if(pos < 0) pos += this1.length;
	if(end <= 0) end += this1.length;
	if(end > this1.length) end = this1.length;
	var length = end - pos;
	if(length <= 0 || length > this1.length) length = this1.length;
	var vectorData = new openfl.VectorData();
	vectorData.length = end - pos;
	vectorData.fixed = true;
	var this2;
	this2 = new Array(length);
	vectorData.data = this2;
	haxe.ds._Vector.Vector_Impl_.blit(this1.data,pos,vectorData.data,0,length);
	return vectorData;
};
openfl._Vector.Vector_Impl_.sort = function(this1,f) {
	var array = haxe.ds._Vector.Vector_Impl_.toArray(this1.data);
	array.sort(f);
	var vec;
	var this2;
	this2 = new Array(array.length);
	vec = this2;
	var _g1 = 0;
	var _g = array.length;
	while(_g1 < _g) {
		var i = _g1++;
		vec[i] = array[i];
	}
	this1.data = vec;
};
openfl._Vector.Vector_Impl_.splice = function(this1,pos,len) {
	if(pos < 0) pos += this1.length;
	if(pos + len > this1.length) len = this1.length - pos;
	if(len < 0) len = 0;
	var vectorData = new openfl.VectorData();
	vectorData.length = len;
	vectorData.fixed = false;
	var this2;
	this2 = new Array(len);
	vectorData.data = this2;
	haxe.ds._Vector.Vector_Impl_.blit(this1.data,pos,vectorData.data,0,len);
	if(len > 0) {
		this1.length -= len;
		haxe.ds._Vector.Vector_Impl_.blit(this1.data,pos + len,this1.data,pos,this1.length - pos);
	}
	return vectorData;
};
openfl._Vector.Vector_Impl_.toString = function(this1) {
	return "";
};
openfl._Vector.Vector_Impl_.indexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var _g1 = from;
	var _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this1.data[i] == x) return i;
	}
	return -1;
};
openfl._Vector.Vector_Impl_.lastIndexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var i = this1.length - 1;
	while(i >= from) {
		if(this1.data[i] == x) return i;
		i--;
	}
	return -1;
};
openfl._Vector.Vector_Impl_.ofArray = function(a) {
	var vectorData = new openfl.VectorData();
	vectorData.length = a.length;
	vectorData.fixed = true;
	var vec;
	var this1;
	this1 = new Array(a.length);
	vec = this1;
	var _g1 = 0;
	var _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		vec[i] = a[i];
	}
	vectorData.data = vec;
	return vectorData;
};
openfl._Vector.Vector_Impl_.convert = function(v) {
	return v;
};
openfl._Vector.Vector_Impl_.arrayAccess = function(this1,key) {
	return this1.data[key];
};
openfl._Vector.Vector_Impl_.arrayWrite = function(this1,key,value) {
	if(key >= this1.length && !this1.fixed) this1.length = key + 1;
	return this1.data[key] = value;
};
openfl._Vector.Vector_Impl_.fromArray = function(value) {
	var vectorData = new openfl.VectorData();
	vectorData.length = value.length;
	vectorData.fixed = true;
	var vec;
	var this1;
	this1 = new Array(value.length);
	vec = this1;
	var _g1 = 0;
	var _g = value.length;
	while(_g1 < _g) {
		var i = _g1++;
		vec[i] = value[i];
	}
	vectorData.data = vec;
	return vectorData;
};
openfl._Vector.Vector_Impl_.toArray = function(this1) {
	var value = new Array();
	var _g1 = 0;
	var _g = this1.data.length;
	while(_g1 < _g) {
		var i = _g1++;
		value.push(this1.data[i]);
	}
	return value;
};
openfl._Vector.Vector_Impl_.fromHaxeVector = function(value) {
	var vectorData = new openfl.VectorData();
	vectorData.length = value.length;
	vectorData.fixed = true;
	vectorData.data = value;
	return vectorData;
};
openfl._Vector.Vector_Impl_.toHaxeVector = function(this1) {
	return this1.data;
};
openfl._Vector.Vector_Impl_.fromVectorData = function(value) {
	return value;
};
openfl._Vector.Vector_Impl_.toVectorData = function(this1) {
	return this1;
};
openfl._Vector.Vector_Impl_.get_length = function(this1) {
	return this1.length;
};
openfl._Vector.Vector_Impl_.set_length = function(this1,value) {
	if(!this1.fixed) {
		if(value > this1.length) {
			var data;
			var this2;
			this2 = new Array(value);
			data = this2;
			haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,data,0,Std["int"](Math.min(this1.data.length,value)));
			this1.data = data;
		}
		this1.length = value;
	}
	return value;
};
openfl._Vector.Vector_Impl_.get_fixed = function(this1) {
	return this1.fixed;
};
openfl._Vector.Vector_Impl_.set_fixed = function(this1,value) {
	return this1.fixed = value;
};
openfl.VectorData = function() {
	this.length = 0;
};
$hxClasses["openfl.VectorData"] = openfl.VectorData;
openfl.VectorData.__name__ = ["openfl","VectorData"];
openfl.VectorData.prototype = {
	__class__: openfl.VectorData
};
openfl.VectorDataIterator = function(data) {
	this.index = 0;
	this.vectorData = data;
};
$hxClasses["openfl.VectorDataIterator"] = openfl.VectorDataIterator;
openfl.VectorDataIterator.__name__ = ["openfl","VectorDataIterator"];
openfl.VectorDataIterator.prototype = {
	hasNext: function() {
		return this.index < this.vectorData.length;
	}
	,next: function() {
		var index = this.index++;
		return this.vectorData.data[index];
	}
	,__class__: openfl.VectorDataIterator
};
openfl.display.Bitmap = function(bitmapData,pixelSnapping,smoothing) {
	if(smoothing == null) smoothing = false;
	openfl.display.DisplayObjectContainer.call(this);
	this.bitmapData = bitmapData;
	this.pixelSnapping = pixelSnapping;
	this.smoothing = smoothing;
	if(pixelSnapping == null) this.pixelSnapping = openfl.display.PixelSnapping.AUTO;
};
$hxClasses["openfl.display.Bitmap"] = openfl.display.Bitmap;
openfl.display.Bitmap.__name__ = ["openfl","display","Bitmap"];
openfl.display.Bitmap.__super__ = openfl.display.DisplayObjectContainer;
openfl.display.Bitmap.prototype = $extend(openfl.display.DisplayObjectContainer.prototype,{
	__getBounds: function(rect,matrix) {
		if(this.bitmapData != null) {
			var bounds = new openfl.geom.Rectangle(0,0,this.bitmapData.width,this.bitmapData.height);
			bounds = bounds.transform(this.__worldTransform);
			rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
		}
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || this.bitmapData == null) return false;
		var point = this.globalToLocal(new openfl.geom.Point(x,y));
		if(point.x > 0 && point.y > 0 && point.x <= this.bitmapData.width && point.y <= this.bitmapData.height) {
			if(stack != null) stack.push(this);
			return true;
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		var context = renderSession.context;
		if(this.bitmapData != null && this.bitmapData.__valid) {
			if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
			this.bitmapData.__syncImageData();
			context.globalAlpha = this.__worldAlpha;
			var transform = this.__worldTransform;
			if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
			if(!this.smoothing) {
				context.mozImageSmoothingEnabled = false;
				context.webkitImageSmoothingEnabled = false;
				context.imageSmoothingEnabled = false;
			}
			if(this.get_scrollRect() == null) {
				if(this.bitmapData.__sourceImage != null) context.drawImage(this.bitmapData.__sourceImage,0,0); else context.drawImage(this.bitmapData.__sourceCanvas,0,0);
			} else if(this.bitmapData.__sourceImage != null) context.drawImage(this.bitmapData.__sourceImage,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height); else context.drawImage(this.bitmapData.__sourceCanvas,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height);
			if(!this.smoothing) {
				context.mozImageSmoothingEnabled = true;
				context.webkitImageSmoothingEnabled = true;
				context.imageSmoothingEnabled = true;
			}
			if(this.__mask != null) renderSession.maskManager.popMask();
		}
	}
	,__renderDOM: function(renderSession) {
		if(this.stage != null && this.__worldVisible && this.__renderable && this.bitmapData != null && this.bitmapData.__valid) {
			if(this.bitmapData.__sourceImage != null) this.__renderDOMImage(renderSession); else this.__renderDOMCanvas(renderSession);
		} else {
			if(this.__image != null) {
				renderSession.element.removeChild(this.__image);
				this.__image = null;
				this.__style = null;
			}
			if(this.__canvas != null) {
				renderSession.element.removeChild(this.__canvas);
				this.__canvas = null;
				this.__style = null;
			}
		}
	}
	,__renderDOMCanvas: function(renderSession) {
		if(this.__image != null) {
			renderSession.element.removeChild(this.__image);
			this.__image = null;
		}
		if(this.__canvas == null) {
			this.__canvas = window.document.createElement("canvas");
			this.__canvasContext = this.__canvas.getContext("2d");
			if(!this.smoothing) {
				this.__canvasContext.mozImageSmoothingEnabled = false;
				this.__canvasContext.webkitImageSmoothingEnabled = false;
				this.__canvasContext.imageSmoothingEnabled = false;
			}
			this.__initializeElement(this.__canvas,renderSession);
		}
		this.bitmapData.__syncImageData();
		this.__canvas.width = this.bitmapData.width;
		this.__canvas.height = this.bitmapData.height;
		this.__canvasContext.globalAlpha = this.__worldAlpha;
		this.__canvasContext.drawImage(this.bitmapData.__sourceCanvas,0,0);
		this.__applyStyle(renderSession,true,false,true);
	}
	,__renderDOMImage: function(renderSession) {
		if(this.__canvas != null) {
			renderSession.element.removeChild(this.__canvas);
			this.__canvas = null;
		}
		if(this.__image == null) {
			this.__image = window.document.createElement("img");
			this.__image.src = this.bitmapData.__sourceImage.src;
			this.__initializeElement(this.__image,renderSession);
		}
		this.__applyStyle(renderSession,true,true,true);
	}
	,__renderMask: function(renderSession) {
		renderSession.context.rect(0,0,this.get_width(),this.get_height());
	}
	,get_height: function() {
		if(this.bitmapData != null) return this.bitmapData.height * this.get_scaleY();
		return 0;
	}
	,set_height: function(value) {
		if(this.bitmapData != null) {
			if(value != this.bitmapData.height) {
				if(!this.__transformDirty) {
					this.__transformDirty = true;
					openfl.display.DisplayObject.__worldTransformDirty++;
				}
				this.set_scaleY(value / this.bitmapData.height);
			}
			return value;
		}
		return 0;
	}
	,get_width: function() {
		if(this.bitmapData != null) return this.bitmapData.width * this.get_scaleX();
		return 0;
	}
	,set_width: function(value) {
		if(this.bitmapData != null) {
			if(value != this.bitmapData.width) {
				if(!this.__transformDirty) {
					this.__transformDirty = true;
					openfl.display.DisplayObject.__worldTransformDirty++;
				}
				this.set_scaleX(value / this.bitmapData.width);
			}
			return value;
		}
		return 0;
	}
	,__class__: openfl.display.Bitmap
});
openfl.display.BitmapData = function(width,height,transparent,fillColor) {
	if(fillColor == null) fillColor = -1;
	if(transparent == null) transparent = true;
	this.transparent = transparent;
	if(width > 0 && height > 0) {
		this.width = width;
		this.height = height;
		this.rect = new openfl.geom.Rectangle(0,0,width,height);
		this.__createCanvas(width,height);
		if(!transparent) fillColor = -16777216 | fillColor & 16777215;
		this.__fillRect(new openfl.geom.Rectangle(0,0,width,height),fillColor);
	}
};
$hxClasses["openfl.display.BitmapData"] = openfl.display.BitmapData;
openfl.display.BitmapData.__name__ = ["openfl","display","BitmapData"];
openfl.display.BitmapData.__interfaces__ = [openfl.display.IBitmapDrawable];
openfl.display.BitmapData.__base64Encoder = null;
openfl.display.BitmapData.fromBase64 = function(base64,type,onload) {
	var bitmapData = new openfl.display.BitmapData(0,0,true);
	bitmapData.__loadFromBase64(base64,type,onload);
	return bitmapData;
};
openfl.display.BitmapData.fromBytes = function(bytes,rawAlpha,onload) {
	var bitmapData = new openfl.display.BitmapData(0,0,true);
	bitmapData.__loadFromBytes(bytes,rawAlpha,onload);
	return bitmapData;
};
openfl.display.BitmapData.fromFile = function(path,onload,onfail) {
	var bitmapData = new openfl.display.BitmapData(0,0,true);
	bitmapData.__sourceImage = new Image();
	bitmapData.__sourceImage.onload = function(_) {
		bitmapData.width = bitmapData.__sourceImage.width;
		bitmapData.height = bitmapData.__sourceImage.height;
		bitmapData.rect = new openfl.geom.Rectangle(0,0,bitmapData.__sourceImage.width,bitmapData.__sourceImage.height);
		bitmapData.__valid = true;
		if(onload != null) onload(bitmapData);
	};
	bitmapData.__sourceImage.onerror = function(_1) {
		bitmapData.__valid = false;
		if(onfail != null) onfail();
	};
	bitmapData.__sourceImage.src = path;
	if(bitmapData.__sourceImage.complete) {
	}
	return bitmapData;
};
openfl.display.BitmapData.fromImage = function(image,transparent) {
	if(transparent == null) transparent = true;
	var bitmapData = new openfl.display.BitmapData(0,0,transparent);
	bitmapData.__sourceImage = image;
	bitmapData.width = image.width;
	bitmapData.height = image.height;
	bitmapData.rect = new openfl.geom.Rectangle(0,0,image.width,image.height);
	bitmapData.__valid = true;
	return bitmapData;
};
openfl.display.BitmapData.fromCanvas = function(canvas,transparent) {
	if(transparent == null) transparent = true;
	var bitmapData = new openfl.display.BitmapData(0,0,transparent);
	bitmapData.width = canvas.width;
	bitmapData.height = canvas.height;
	bitmapData.rect = new openfl.geom.Rectangle(0,0,canvas.width,canvas.height);
	bitmapData.__createCanvas(canvas.width,canvas.height);
	bitmapData.__sourceContext.drawImage(canvas,0,0);
	return bitmapData;
};
openfl.display.BitmapData.__base64Encode = function(bytes) {
	var extension;
	var _g = bytes.length % 3;
	switch(_g) {
	case 1:
		extension = "==";
		break;
	case 2:
		extension = "=";
		break;
	default:
		extension = "";
	}
	if(openfl.display.BitmapData.__base64Encoder == null) openfl.display.BitmapData.__base64Encoder = new haxe.crypto.BaseCode(haxe.io.Bytes.ofString(openfl.display.BitmapData.__base64Chars));
	return openfl.display.BitmapData.__base64Encoder.encodeBytes(haxe.io.Bytes.ofData(bytes.byteView)).toString() + extension;
};
openfl.display.BitmapData.__flipPixel = function(pixel) {
	return (pixel & 255) << 24 | (pixel >> 8 & 255) << 16 | (pixel >> 16 & 255) << 8 | pixel >> 24 & 255;
};
openfl.display.BitmapData.__isJPG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 255 && bytes.readByte() == 216;
};
openfl.display.BitmapData.__isPNG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 137 && bytes.readByte() == 80 && bytes.readByte() == 78 && bytes.readByte() == 71 && bytes.readByte() == 13 && bytes.readByte() == 10 && bytes.readByte() == 26 && bytes.readByte() == 10;
};
openfl.display.BitmapData.__isGIF = function(bytes) {
	bytes.position = 0;
	if(bytes.readByte() == 71 && bytes.readByte() == 73 && bytes.readByte() == 70 && bytes.readByte() == 38) {
		var b = bytes.readByte();
		return (b == 7 || b == 9) && bytes.readByte() == 97;
	}
	return false;
};
openfl.display.BitmapData.__ucompare = function(n1,n2) {
	var tmp1;
	var tmp2;
	tmp1 = n1 >> 24 & 255;
	tmp2 = n2 >> 24 & 255;
	if(tmp1 != tmp2) if(tmp1 > tmp2) return 1; else return -1; else {
		tmp1 = n1 >> 16 & 255;
		tmp2 = n2 >> 16 & 255;
		if(tmp1 != tmp2) if(tmp1 > tmp2) return 1; else return -1; else {
			tmp1 = n1 >> 8 & 255;
			tmp2 = n2 >> 8 & 255;
			if(tmp1 != tmp2) if(tmp1 > tmp2) return 1; else return -1; else {
				tmp1 = n1 & 255;
				tmp2 = n2 & 255;
				if(tmp1 != tmp2) if(tmp1 > tmp2) return 1; else return -1; else return 0;
			}
		}
	}
};
openfl.display.BitmapData.prototype = {
	applyFilter: function(sourceBitmapData,sourceRect,destPoint,filter) {
		if(!this.__valid || sourceBitmapData == null || !sourceBitmapData.__valid) return;
		this.__convertToCanvas();
		this.__createImageData();
		sourceBitmapData.__convertToCanvas();
		sourceBitmapData.__createImageData();
		filter.__applyFilter(this.__sourceImageData,sourceBitmapData.__sourceImageData,sourceRect,destPoint);
		this.__sourceImageDataChanged = true;
	}
	,clone: function() {
		this.__syncImageData();
		if(!this.__valid) return new openfl.display.BitmapData(this.width,this.height,this.transparent); else if(this.__sourceImage != null) return openfl.display.BitmapData.fromImage(this.__sourceImage,this.transparent); else return openfl.display.BitmapData.fromCanvas(this.__sourceCanvas,this.transparent);
	}
	,colorTransform: function(rect,colorTransform) {
		rect = this.__clipRect(rect);
		if(!this.__valid || rect == null) return;
		this.__convertToCanvas();
		this.__createImageData();
		var data = this.__sourceImageData.data;
		var stride = this.width * 4;
		var offset;
		var _g1 = rect.y | 0;
		var _g = rect.height | 0;
		while(_g1 < _g) {
			var row = _g1++;
			var _g3 = rect.x | 0;
			var _g2 = rect.width | 0;
			while(_g3 < _g2) {
				var column = _g3++;
				offset = row * stride + column * 4;
				data[offset] = data[offset] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
				data[offset + 1] = data[offset + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
				data[offset + 2] = data[offset + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
				data[offset + 3] = data[offset + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
			}
		}
		this.__sourceImageDataChanged = true;
	}
	,copyChannel: function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
		sourceRect = this.__clipRect(sourceRect);
		if(!this.__valid || sourceRect == null) return;
		if(destChannel == 8 && !this.transparent) return;
		if(sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.width) sourceRect.width = sourceBitmapData.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.height) sourceRect.height = sourceBitmapData.height - sourceRect.y;
		var destIdx = -1;
		if(destChannel == 8) destIdx = 3; else if(destChannel == 4) destIdx = 2; else if(destChannel == 2) destIdx = 1; else if(destChannel == 1) destIdx = 0; else throw "Invalid destination BitmapDataChannel passed to BitmapData::copyChannel.";
		var srcIdx = -1;
		if(sourceChannel == 8) srcIdx = 3; else if(sourceChannel == 4) srcIdx = 2; else if(sourceChannel == 2) srcIdx = 1; else if(sourceChannel == 1) srcIdx = 0; else throw "Invalid source BitmapDataChannel passed to BitmapData::copyChannel.";
		sourceBitmapData.__convertToCanvas();
		sourceBitmapData.__createImageData();
		var srcData = sourceBitmapData.__sourceImageData.data;
		var srcStride = sourceBitmapData.width * 4 | 0;
		var srcPosition = sourceRect.x * 4 + srcStride * sourceRect.y + srcIdx | 0;
		var srcRowOffset = srcStride - (4 * sourceRect.width | 0);
		var srcRowEnd = 4 * (sourceRect.x + sourceRect.width) | 0;
		this.__convertToCanvas();
		this.__createImageData();
		var destData = this.__sourceImageData.data;
		var destStride = this.width * 4 | 0;
		var destPosition = destPoint.x * 4 + destStride * destPoint.y + destIdx | 0;
		var destRowOffset = destStride - (4 * sourceRect.width | 0);
		var destRowEnd = 4 * (destPoint.x + sourceRect.width) | 0;
		var length = sourceRect.width * sourceRect.height | 0;
		var _g = 0;
		while(_g < length) {
			var i = _g++;
			destData[destPosition] = srcData[srcPosition];
			srcPosition += 4;
			destPosition += 4;
			if(srcPosition % srcStride > srcRowEnd) srcPosition += srcRowOffset;
			if(destPosition % destStride > destRowEnd) destPosition += destRowOffset;
		}
		this.__sourceImageDataChanged = true;
	}
	,copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(!this.__valid || sourceBitmapData == null) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.width) sourceRect.width = sourceBitmapData.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.height) sourceRect.height = sourceBitmapData.height - sourceRect.y;
		if(sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(alphaBitmapData != null && alphaBitmapData.transparent) {
			if(alphaPoint == null) alphaPoint = new openfl.geom.Point();
			var tempData = this.clone();
			tempData.copyChannel(alphaBitmapData,new openfl.geom.Rectangle(alphaPoint.x,alphaPoint.y,sourceRect.width,sourceRect.height),new openfl.geom.Point(sourceRect.x,sourceRect.y),8,8);
			sourceBitmapData = tempData;
		}
		this.__syncImageData();
		if(!mergeAlpha) {
			if(this.transparent && sourceBitmapData.transparent) this.__sourceContext.clearRect(destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
		}
		sourceBitmapData.__syncImageData();
		if(sourceBitmapData.__sourceImage != null) this.__sourceContext.drawImage(sourceBitmapData.__sourceImage,sourceRect.x | 0,sourceRect.y | 0,sourceRect.width | 0,sourceRect.height | 0,destPoint.x | 0,destPoint.y | 0,sourceRect.width | 0,sourceRect.height | 0); else if(sourceBitmapData.__sourceCanvas != null) this.__sourceContext.drawImage(sourceBitmapData.__sourceCanvas,sourceRect.x | 0,sourceRect.y | 0,sourceRect.width | 0,sourceRect.height | 0,destPoint.x | 0,destPoint.y | 0,sourceRect.width | 0,sourceRect.height | 0);
	}
	,dispose: function() {
		this.__sourceImage = null;
		this.__sourceCanvas = null;
		this.__sourceContext = null;
		this.width = 0;
		this.height = 0;
		this.rect = null;
		this.__valid = false;
	}
	,draw: function(source,matrix,colorTransform,blendMode,clipRect,smoothing) {
		if(smoothing == null) smoothing = false;
		if(!this.__valid) return;
		this.__convertToCanvas();
		this.__syncImageData();
		var renderSession = new openfl.display.RenderSession();
		renderSession.context = this.__sourceContext;
		renderSession.roundPixels = true;
		if(!smoothing) {
			this.__sourceContext.mozImageSmoothingEnabled = false;
			this.__sourceContext.webkitImageSmoothingEnabled = false;
			this.__sourceContext.imageSmoothingEnabled = false;
		}
		var matrixCache = source.__worldTransform;
		if(matrix != null) source.__worldTransform = matrix; else source.__worldTransform = new openfl.geom.Matrix();
		source.__updateChildren(false);
		source.__renderCanvas(renderSession);
		source.__worldTransform = matrixCache;
		source.__updateChildren(true);
		if(!smoothing) {
			this.__sourceContext.mozImageSmoothingEnabled = true;
			this.__sourceContext.webkitImageSmoothingEnabled = true;
			this.__sourceContext.imageSmoothingEnabled = true;
		}
		this.__sourceContext.setTransform(1,0,0,1,0,0);
	}
	,encode: function(rect,compressor,byteArray) {
		openfl.Lib.notImplemented("BitmapData.encode");
		return null;
	}
	,fillRect: function(rect,color) {
		rect = this.__clipRect(rect);
		if(!this.__valid || rect == null) return;
		this.__convertToCanvas();
		this.__syncImageData();
		if(rect.x == 0 && rect.y == 0 && rect.width == this.width && rect.height == this.height) {
			if(this.transparent && (color & -16777216) == 0) {
				this.__sourceCanvas.width = this.width;
				return;
			}
		}
		this.__fillRect(rect,color);
	}
	,floodFill: function(x,y,color) {
		if(!this.__valid) return;
		this.__convertToCanvas();
		this.__createImageData();
		var data = this.__sourceImageData.data;
		var offset = y * (this.width * 4) + x * 4;
		var hitColorR = data[offset];
		var hitColorG = data[offset + 1];
		var hitColorB = data[offset + 2];
		var hitColorA;
		if(this.transparent) hitColorA = data[offset + 3]; else hitColorA = 255;
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		var a;
		if(this.transparent) a = (color & -16777216) >>> 24; else a = 255;
		if(hitColorR == r && hitColorG == g && hitColorB == b && hitColorA == a) return;
		var dx = [0,-1,1,0];
		var dy = [-1,0,0,1];
		var queue = new Array();
		queue.push(x);
		queue.push(y);
		while(queue.length > 0) {
			var curPointY = queue.pop();
			var curPointX = queue.pop();
			var _g = 0;
			while(_g < 4) {
				var i = _g++;
				var nextPointX = curPointX + dx[i];
				var nextPointY = curPointY + dy[i];
				if(nextPointX < 0 || nextPointY < 0 || nextPointX >= this.width || nextPointY >= this.height) continue;
				var nextPointOffset = (nextPointY * this.width + nextPointX) * 4;
				if(data[nextPointOffset] == hitColorR && data[nextPointOffset + 1] == hitColorG && data[nextPointOffset + 2] == hitColorB && data[nextPointOffset + 3] == hitColorA) {
					data[nextPointOffset] = r;
					data[nextPointOffset + 1] = g;
					data[nextPointOffset + 2] = b;
					data[nextPointOffset + 3] = a;
					queue.push(nextPointX);
					queue.push(nextPointY);
				}
			}
		}
		this.__sourceImageDataChanged = true;
	}
	,generateFilterRect: function(sourceRect,filter) {
		return sourceRect.clone();
	}
	,getColorBoundsRect: function(mask,color,findColor) {
		if(findColor == null) findColor = true;
		return this.rect.clone();
	}
	,getPixel: function(x,y) {
		if(!this.__valid || x < 0 || y < 0 || x >= this.width || y >= this.height) return 0;
		this.__convertToCanvas();
		this.__createImageData();
		var offset = 4 * y * this.width + x * 4;
		return this.__sourceImageData.data[offset] << 16 | this.__sourceImageData.data[offset + 1] << 8 | this.__sourceImageData.data[offset + 2];
	}
	,getPixel32: function(x,y) {
		if(!this.__valid || x < 0 || y < 0 || x >= this.width || y >= this.height) return 0;
		this.__convertToCanvas();
		this.__createImageData();
		return this.__getInt32(4 * y * this.width + x * 4,this.__sourceImageData.data);
	}
	,getPixels: function(rect) {
		if(!this.__valid) return null;
		this.__convertToCanvas();
		this.__createImageData();
		var byteArray = new openfl.utils.ByteArray();
		if(rect == null || rect.equals(this.rect)) {
			byteArray.set_length(this.__sourceImageData.data.length);
			byteArray.byteView.set(this.__sourceImageData.data);
		} else {
			var srcData = this.__sourceImageData.data;
			var srcStride = this.width * 4 | 0;
			var srcPosition = rect.x * 4 + srcStride * rect.y | 0;
			var srcRowOffset = srcStride - (4 * rect.width | 0);
			var srcRowEnd = 4 * (rect.x + rect.width) | 0;
			var length = 4 * rect.width * rect.height | 0;
			if(byteArray.allocated < length) byteArray.___resizeBuffer(byteArray.allocated = Std["int"](Math.max(length,byteArray.allocated * 2))); else if(byteArray.allocated > length) byteArray.___resizeBuffer(byteArray.allocated = length);
			byteArray.length = length;
			length;
			var _g = 0;
			while(_g < length) {
				var i = _g++;
				byteArray.__set(i,srcData[srcPosition++]);
				if(srcPosition % srcStride > srcRowEnd) srcPosition += srcRowOffset;
			}
		}
		byteArray.position = 0;
		return byteArray;
	}
	,getVector: function(rect) {
		var pixels = this.getPixels(rect);
		var result = openfl._Vector.Vector_Impl_._new();
		var _g1 = 0;
		var _g = pixels.length / 4 | 0;
		while(_g1 < _g) {
			var i = _g1++;
			var x = pixels.readUnsignedInt();
			if(!result.fixed) {
				result.length++;
				if(result.data.length < result.length) {
					var data;
					var this1;
					this1 = new Array(result.data.length + 10);
					data = this1;
					haxe.ds._Vector.Vector_Impl_.blit(result.data,0,data,0,result.data.length);
					result.data = data;
				}
				result.data[result.length - 1] = x;
			}
			result.length;
		}
		return result;
	}
	,histogram: function(hRect) {
		var rect;
		if(hRect != null) rect = hRect; else rect = new openfl.geom.Rectangle(0,0,this.width,this.height);
		var pixels = this.getPixels(rect);
		var result;
		var _g = [];
		var _g1 = 0;
		while(_g1 < 4) {
			var i = _g1++;
			_g.push((function($this) {
				var $r;
				var _g2 = [];
				{
					var _g3 = 0;
					while(_g3 < 256) {
						var j = _g3++;
						_g2.push(0);
					}
				}
				$r = _g2;
				return $r;
			}(this)));
		}
		result = _g;
		var _g21 = 0;
		var _g11 = pixels.length;
		while(_g21 < _g11) {
			var i1 = _g21++;
			++result[i1 % 4][pixels.readUnsignedByte()];
		}
		return result;
	}
	,hitTest: function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
		if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
		if(!this.__valid) return false;
		openfl.Lib.notImplemented("BitmapData.hitTest");
		return false;
	}
	,lock: function() {
	}
	,noise: function(randomSeed,low,high,channelOptions,grayScale) {
		if(grayScale == null) grayScale = false;
		if(channelOptions == null) channelOptions = 7;
		if(high == null) high = 255;
		if(low == null) low = 0;
		if(!this.__valid) return;
		openfl.Lib.notImplemented("BitmapData.noise");
	}
	,paletteMap: function(sourceBitmapData,sourceRect,destPoint,redArray,greenArray,blueArray,alphaArray) {
		var memory = new openfl.utils.ByteArray();
		var sw = sourceRect.width | 0;
		var sh = sourceRect.height | 0;
		memory.set_length(sw * sh * 4);
		memory = this.getPixels(sourceRect);
		memory.position = 0;
		openfl.Memory.select(memory);
		var position;
		var pixelValue;
		var r;
		var g;
		var b;
		var color;
		var _g1 = 0;
		var _g = sh * sw;
		while(_g1 < _g) {
			var i = _g1++;
			position = i * 4;
			pixelValue = openfl.Memory._setPositionTemporarily(position,function() {
				return openfl.Memory.gcRef.readInt();
			});
			r = pixelValue >> 8 & 255;
			g = pixelValue >> 16 & 255;
			b = pixelValue >> 24 & 255;
			color = openfl.display.BitmapData.__flipPixel(-16777216 | redArray[r] | greenArray[g] | blueArray[b]);
			openfl.Memory.setI32(position,color);
		}
		memory.position = 0;
		var destRect = new openfl.geom.Rectangle(destPoint.x,destPoint.y,sw,sh);
		this.setPixels(destRect,memory);
		openfl.Memory.select(null);
	}
	,perlinNoise: function(baseX,baseY,numOctaves,randomSeed,stitch,fractalNoise,channelOptions,grayScale,offsets) {
		if(grayScale == null) grayScale = false;
		if(channelOptions == null) channelOptions = 7;
		openfl.Lib.notImplemented("BitmapData.perlinNoise");
	}
	,scroll: function(x,y) {
		openfl.Lib.notImplemented("BitmapData.scroll");
	}
	,setVector: function(rect,inputVector) {
		var byteArray = new openfl.utils.ByteArray();
		byteArray.set_length(inputVector.length * 4);
		var _g = 0;
		while(_g < inputVector.length) {
			var color = inputVector.data[_g];
			++_g;
			byteArray.writeUnsignedInt(color);
		}
		byteArray.position = 0;
		this.setPixels(rect,byteArray);
	}
	,setPixel: function(x,y,color) {
		if(!this.__valid || x < 0 || y < 0 || x >= this.width || y >= this.height) return;
		this.__convertToCanvas();
		this.__createImageData();
		var offset = 4 * y * this.width + x * 4;
		this.__sourceImageData.data[offset] = (color & 16711680) >>> 16;
		this.__sourceImageData.data[offset + 1] = (color & 65280) >>> 8;
		this.__sourceImageData.data[offset + 2] = color & 255;
		if(this.transparent) this.__sourceImageData.data[offset + 3] = 255;
		this.__sourceImageDataChanged = true;
	}
	,setPixel32: function(x,y,color) {
		if(!this.__valid || x < 0 || y < 0 || x >= this.width || y >= this.height) return;
		this.__convertToCanvas();
		this.__createImageData();
		var offset = 4 * y * this.width + x * 4;
		this.__sourceImageData.data[offset] = (color & 16711680) >>> 16;
		this.__sourceImageData.data[offset + 1] = (color & 65280) >>> 8;
		this.__sourceImageData.data[offset + 2] = color & 255;
		if(this.transparent) this.__sourceImageData.data[offset + 3] = (color & -16777216) >>> 24; else this.__sourceImageData.data[offset + 3] = 255;
		this.__sourceImageDataChanged = true;
	}
	,setPixels: function(rect,byteArray) {
		rect = this.__clipRect(rect);
		if(!this.__valid || rect == null) return;
		this.__convertToCanvas();
		var len = Math.round(4 * rect.width * rect.height);
		if(rect.x == 0 && rect.y == 0 && rect.width == this.width && rect.height == this.height) {
			if(this.__sourceImageData == null) this.__sourceImageData = this.__sourceContext.createImageData(this.width,this.height);
			this.__sourceImageData.data.set(byteArray.byteView);
		} else {
			this.__createImageData();
			var offset = Math.round(4 * this.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var data = this.__sourceImageData.data;
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.width * 4) > boundR - 1) pos += this.width * 4 - boundR;
				data[pos] = byteArray.readByte();
				pos++;
			}
		}
		this.__sourceImageDataChanged = true;
	}
	,threshold: function(sourceBitmapData,sourceRect,destPoint,operation,threshold,color,mask,copySource) {
		if(copySource == null) copySource = false;
		if(mask == null) mask = -1;
		if(color == null) color = 0;
		if(sourceBitmapData == this && sourceRect.equals(this.rect) && destPoint.x == 0 && destPoint.y == 0) {
			var hits = 0;
			threshold = (threshold & 255) << 24 | (threshold >> 8 & 255) << 16 | (threshold >> 16 & 255) << 8 | threshold >> 24 & 255;
			color = (color & 255) << 24 | (color >> 8 & 255) << 16 | (color >> 16 & 255) << 8 | color >> 24 & 255;
			var memory = new openfl.utils.ByteArray();
			memory.set_length(this.width * this.height * 4);
			memory = this.getPixels(this.rect);
			memory.position = 0;
			openfl.Memory.select(memory);
			var thresholdMask = threshold & mask;
			var width_yy;
			var position;
			var pixelMask;
			var pixelValue;
			var i;
			var test;
			var _g1 = 0;
			var _g = this.height;
			while(_g1 < _g) {
				var yy = _g1++;
				width_yy = this.width * yy;
				var _g3 = 0;
				var _g2 = this.width;
				while(_g3 < _g2) {
					var xx = _g3++;
					position = (width_yy + xx) * 4;
					pixelValue = openfl.Memory._setPositionTemporarily(position,function() {
						return openfl.Memory.gcRef.readInt();
					});
					pixelMask = pixelValue & mask;
					i = openfl.display.BitmapData.__ucompare(pixelMask,thresholdMask);
					test = false;
					if(operation == "==") test = i == 0; else if(operation == "<") test = i == -1; else if(operation == ">") test = i == 1; else if(operation == "!=") test = i != 0; else if(operation == "<=") test = i == 0 || i == -1; else if(operation == ">=") test = i == 0 || i == 1;
					if(test) {
						openfl.Memory.setI32(position,color);
						hits++;
					}
				}
			}
			memory.position = 0;
			this.setPixels(this.rect,memory);
			openfl.Memory.select(null);
			return hits;
		} else {
			var sx = sourceRect.x | 0;
			var sy = sourceRect.y | 0;
			var sw = sourceBitmapData.width | 0;
			var sh = sourceBitmapData.height | 0;
			var dx = destPoint.x | 0;
			var dy = destPoint.y | 0;
			var bw = this.width - sw - dx;
			var bh = this.height - sh - dy;
			var dw;
			if(bw < 0) dw = sw + (this.width - sw - dx); else dw = sw;
			var dh;
			if(bw < 0) dh = sh + (this.height - sh - dy); else dh = sh;
			var hits1 = 0;
			threshold = (threshold & 255) << 24 | (threshold >> 8 & 255) << 16 | (threshold >> 16 & 255) << 8 | threshold >> 24 & 255;
			color = (color & 255) << 24 | (color >> 8 & 255) << 16 | (color >> 16 & 255) << 8 | color >> 24 & 255;
			var canvasMemory = sw * sh * 4;
			var sourceMemory = 0;
			if(copySource) sourceMemory = sw * sh * 4;
			var totalMemory = canvasMemory + sourceMemory;
			var memory1 = new openfl.utils.ByteArray();
			if(memory1.allocated < totalMemory) memory1.___resizeBuffer(memory1.allocated = Std["int"](Math.max(totalMemory,memory1.allocated * 2))); else if(memory1.allocated > totalMemory) memory1.___resizeBuffer(memory1.allocated = totalMemory);
			memory1.length = totalMemory;
			totalMemory;
			memory1.position = 0;
			var bitmapData = sourceBitmapData.clone();
			var pixels = bitmapData.getPixels(sourceRect);
			memory1.writeBytes(pixels);
			memory1.position = canvasMemory;
			if(copySource) memory1.writeBytes(pixels);
			memory1.position = 0;
			openfl.Memory.select(memory1);
			var thresholdMask1 = threshold & mask;
			var position1;
			var pixelMask1;
			var pixelValue1;
			var i1;
			var test1;
			var _g4 = 0;
			while(_g4 < dh) {
				var yy1 = _g4++;
				var _g11 = 0;
				while(_g11 < dw) {
					var xx1 = _g11++;
					position1 = (xx1 + sx + (yy1 + sy) * sw) * 4;
					pixelValue1 = openfl.Memory._setPositionTemporarily(position1,function() {
						return openfl.Memory.gcRef.readInt();
					});
					pixelMask1 = pixelValue1 & mask;
					i1 = openfl.display.BitmapData.__ucompare(pixelMask1,thresholdMask1);
					test1 = false;
					if(operation == "==") test1 = i1 == 0; else if(operation == "<") test1 = i1 == -1; else if(operation == ">") test1 = i1 == 1; else if(operation == "!=") test1 = i1 != 0; else if(operation == "<=") test1 = i1 == 0 || i1 == -1; else if(operation == ">=") test1 = i1 == 0 || i1 == 1;
					if(test1) {
						openfl.Memory.setI32(position1,color);
						hits1++;
					} else if(copySource) openfl.Memory.setI32(position1,openfl.Memory._setPositionTemporarily(canvasMemory + position1,function() {
						return openfl.Memory.gcRef.readInt();
					}));
				}
			}
			memory1.position = 0;
			bitmapData.setPixels(sourceRect,memory1);
			this.copyPixels(bitmapData,bitmapData.rect,destPoint);
			openfl.Memory.select(null);
			return hits1;
		}
	}
	,unlock: function(changeRect) {
	}
	,__clipRect: function(r) {
		if(r == null) return null;
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) return null;
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) return null;
		}
		if(r.x + r.width >= this.width) {
			r.width -= r.x + r.width - this.width;
			if(r.width <= 0) return null;
		}
		if(r.y + r.height >= this.height) {
			r.height -= r.y + r.height - this.height;
			if(r.height <= 0) return null;
		}
		return r;
	}
	,__convertToCanvas: function() {
		if(this.__loading) return;
		if(this.__sourceImage != null) {
			if(this.__sourceCanvas == null) {
				this.__createCanvas(this.__sourceImage.width,this.__sourceImage.height);
				this.__sourceContext.drawImage(this.__sourceImage,0,0);
			}
			this.__sourceImage = null;
		}
	}
	,__createCanvas: function(width,height) {
		if(this.__sourceCanvas == null) {
			this.__sourceCanvas = window.document.createElement("canvas");
			this.__sourceCanvas.width = width;
			this.__sourceCanvas.height = height;
			if(!this.transparent) {
				if(!this.transparent) this.__sourceCanvas.setAttribute("moz-opaque","true");
				this.__sourceContext = this.__sourceCanvas.getContext ("2d", { alpha: false });
			} else this.__sourceContext = this.__sourceCanvas.getContext("2d");
			this.__sourceContext.mozImageSmoothingEnabled = false;
			this.__sourceContext.webkitImageSmoothingEnabled = false;
			this.__sourceContext.imageSmoothingEnabled = false;
			this.__valid = true;
		}
	}
	,__createImageData: function() {
		if(this.__sourceImageData == null) this.__sourceImageData = this.__sourceContext.getImageData(0,0,this.width,this.height);
	}
	,__fillRect: function(rect,color) {
		var a;
		if(this.transparent) a = (color & -16777216) >>> 24; else a = 255;
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		this.__sourceContext.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
		this.__sourceContext.fillRect(rect.x,rect.y,rect.width,rect.height);
	}
	,__getInt32: function(offset,data) {
		return (this.transparent?data[offset + 3]:255) << 24 | data[offset] << 16 | data[offset + 1] << 8 | data[offset + 2];
	}
	,__loadFromBase64: function(base64,type,onload) {
		var _g = this;
		this.__sourceImage = window.document.createElement("img");
		var image_onLoaded = function(event) {
			if(_g.__sourceImage == null) _g.__sourceImage = event.target;
			_g.width = _g.__sourceImage.width;
			_g.height = _g.__sourceImage.height;
			_g.rect = new openfl.geom.Rectangle(0,0,_g.width,_g.height);
			_g.__valid = true;
			if(onload != null) onload(_g);
		};
		this.__sourceImage.addEventListener("load",image_onLoaded,false);
		this.__sourceImage.src = "data:" + type + ";base64," + base64;
	}
	,__loadFromBytes: function(bytes,rawAlpha,onload) {
		var _g = this;
		var type = "";
		if(openfl.display.BitmapData.__isPNG(bytes)) type = "image/png"; else if(openfl.display.BitmapData.__isJPG(bytes)) type = "image/jpeg"; else if(openfl.display.BitmapData.__isGIF(bytes)) type = "image/gif"; else throw new openfl.errors.IOError("BitmapData tried to read a PNG/JPG ByteArray, but found an invalid header.");
		if(rawAlpha != null) this.__loadFromBase64(openfl.display.BitmapData.__base64Encode(bytes),type,function(_) {
			_g.__convertToCanvas();
			_g.__createImageData();
			var data = _g.__sourceImageData.data;
			var _g2 = 0;
			var _g1 = rawAlpha.length;
			while(_g2 < _g1) {
				var i = _g2++;
				data[i * 4 + 3] = rawAlpha.readUnsignedByte();
			}
			_g.__sourceImageDataChanged = true;
			if(onload != null) onload(_g);
		}); else this.__loadFromBase64(openfl.display.BitmapData.__base64Encode(bytes),type,onload);
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__valid) return;
		this.__syncImageData();
		var context = renderSession.context;
		if(this.__worldTransform == null) this.__worldTransform = new openfl.geom.Matrix();
		context.globalAlpha = 1;
		var transform = this.__worldTransform;
		if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
		if(this.__sourceImage != null) context.drawImage(this.__sourceImage,0,0); else context.drawImage(this.__sourceCanvas,0,0);
	}
	,__renderMask: function(renderSession) {
	}
	,__syncImageData: function() {
		if(this.__sourceImageDataChanged) {
			this.__sourceContext.putImageData(this.__sourceImageData,0,0);
			this.__sourceImageData = null;
			this.__sourceImageDataChanged = false;
		}
	}
	,__updateChildren: function(transformOnly) {
	}
	,__class__: openfl.display.BitmapData
};
openfl.display.BitmapDataChannel = function() { };
$hxClasses["openfl.display.BitmapDataChannel"] = openfl.display.BitmapDataChannel;
openfl.display.BitmapDataChannel.__name__ = ["openfl","display","BitmapDataChannel"];
openfl.display.BlendMode = $hxClasses["openfl.display.BlendMode"] = { __ename__ : true, __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] };
openfl.display.BlendMode.ADD = ["ADD",0];
openfl.display.BlendMode.ADD.toString = $estr;
openfl.display.BlendMode.ADD.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.ALPHA = ["ALPHA",1];
openfl.display.BlendMode.ALPHA.toString = $estr;
openfl.display.BlendMode.ALPHA.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.DARKEN = ["DARKEN",2];
openfl.display.BlendMode.DARKEN.toString = $estr;
openfl.display.BlendMode.DARKEN.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
openfl.display.BlendMode.DIFFERENCE.toString = $estr;
openfl.display.BlendMode.DIFFERENCE.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.ERASE = ["ERASE",4];
openfl.display.BlendMode.ERASE.toString = $estr;
openfl.display.BlendMode.ERASE.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
openfl.display.BlendMode.HARDLIGHT.toString = $estr;
openfl.display.BlendMode.HARDLIGHT.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.INVERT = ["INVERT",6];
openfl.display.BlendMode.INVERT.toString = $estr;
openfl.display.BlendMode.INVERT.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.LAYER = ["LAYER",7];
openfl.display.BlendMode.LAYER.toString = $estr;
openfl.display.BlendMode.LAYER.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
openfl.display.BlendMode.LIGHTEN.toString = $estr;
openfl.display.BlendMode.LIGHTEN.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
openfl.display.BlendMode.MULTIPLY.toString = $estr;
openfl.display.BlendMode.MULTIPLY.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.NORMAL = ["NORMAL",10];
openfl.display.BlendMode.NORMAL.toString = $estr;
openfl.display.BlendMode.NORMAL.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.OVERLAY = ["OVERLAY",11];
openfl.display.BlendMode.OVERLAY.toString = $estr;
openfl.display.BlendMode.OVERLAY.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.SCREEN = ["SCREEN",12];
openfl.display.BlendMode.SCREEN.toString = $estr;
openfl.display.BlendMode.SCREEN.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
openfl.display.BlendMode.SUBTRACT.toString = $estr;
openfl.display.BlendMode.SUBTRACT.__enum__ = openfl.display.BlendMode;
openfl.display._CapsStyle = {};
openfl.display._CapsStyle.CapsStyle_Impl_ = function() { };
$hxClasses["openfl.display._CapsStyle.CapsStyle_Impl_"] = openfl.display._CapsStyle.CapsStyle_Impl_;
openfl.display._CapsStyle.CapsStyle_Impl_.__name__ = ["openfl","display","_CapsStyle","CapsStyle_Impl_"];
openfl.display.FrameLabel = function(name,frame) {
	openfl.events.EventDispatcher.call(this);
	this.__name = name;
	this.__frame = frame;
};
$hxClasses["openfl.display.FrameLabel"] = openfl.display.FrameLabel;
openfl.display.FrameLabel.__name__ = ["openfl","display","FrameLabel"];
openfl.display.FrameLabel.__super__ = openfl.events.EventDispatcher;
openfl.display.FrameLabel.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	get_frame: function() {
		return this.__frame;
	}
	,get_name: function() {
		return this.__name;
	}
	,__class__: openfl.display.FrameLabel
	,__properties__: {get_name:"get_name",get_frame:"get_frame"}
});
openfl.display.GradientType = $hxClasses["openfl.display.GradientType"] = { __ename__ : true, __constructs__ : ["RADIAL","LINEAR"] };
openfl.display.GradientType.RADIAL = ["RADIAL",0];
openfl.display.GradientType.RADIAL.toString = $estr;
openfl.display.GradientType.RADIAL.__enum__ = openfl.display.GradientType;
openfl.display.GradientType.LINEAR = ["LINEAR",1];
openfl.display.GradientType.LINEAR.toString = $estr;
openfl.display.GradientType.LINEAR.__enum__ = openfl.display.GradientType;
openfl.display.Graphics = function() {
	this.__commands = new Array();
	this.__halfStrokeWidth = 0;
	this.__positionX = 0;
	this.__positionY = 0;
};
$hxClasses["openfl.display.Graphics"] = openfl.display.Graphics;
openfl.display.Graphics.__name__ = ["openfl","display","Graphics"];
openfl.display.Graphics.prototype = {
	beginBitmapFill: function(bitmap,matrix,repeat,smooth) {
		if(smooth == null) smooth = false;
		if(repeat == null) repeat = true;
		this.__commands.push(openfl.display.DrawCommand.BeginBitmapFill(bitmap,matrix,repeat,smooth));
		this.__visible = true;
	}
	,beginFill: function(rgb,alpha) {
		if(alpha == null) alpha = 1;
		this.__commands.push(openfl.display.DrawCommand.BeginFill(rgb & 16777215,alpha));
		if(alpha > 0) this.__visible = true;
	}
	,beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		openfl.Lib.notImplemented("Graphics.beginGradientFill");
	}
	,clear: function() {
		this.__commands = new Array();
		this.__halfStrokeWidth = 0;
		if(this.__bounds != null) {
			this.__dirty = true;
			this.__bounds = null;
		}
		this.__visible = false;
	}
	,curveTo: function(cx,cy,x,y) {
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__inflateBounds(cx,cy);
		this.__positionX = x;
		this.__positionY = y;
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__commands.push(openfl.display.DrawCommand.CurveTo(cx,cy,x,y));
		this.__dirty = true;
	}
	,drawCircle: function(x,y,radius) {
		if(radius <= 0) return;
		this.__inflateBounds(x - radius - this.__halfStrokeWidth,y - radius - this.__halfStrokeWidth);
		this.__inflateBounds(x + radius + this.__halfStrokeWidth,y + radius + this.__halfStrokeWidth);
		this.__commands.push(openfl.display.DrawCommand.DrawCircle(x,y,radius));
		this.__dirty = true;
	}
	,drawEllipse: function(x,y,width,height) {
		if(width <= 0 || height <= 0) return;
		this.__inflateBounds(x - this.__halfStrokeWidth,y - this.__halfStrokeWidth);
		this.__inflateBounds(x + width + this.__halfStrokeWidth,y + height + this.__halfStrokeWidth);
		this.__commands.push(openfl.display.DrawCommand.DrawEllipse(x,y,width,height));
		this.__dirty = true;
	}
	,drawGraphicsData: function(graphicsData) {
		openfl.Lib.notImplemented("Graphics.drawGraphicsData");
	}
	,drawPath: function(commands,data,winding) {
		openfl.Lib.notImplemented("Graphics.drawPath");
	}
	,drawRect: function(x,y,width,height) {
		if(width <= 0 || height <= 0) return;
		this.__inflateBounds(x - this.__halfStrokeWidth,y - this.__halfStrokeWidth);
		this.__inflateBounds(x + width + this.__halfStrokeWidth,y + height + this.__halfStrokeWidth);
		this.__commands.push(openfl.display.DrawCommand.DrawRect(x,y,width,height));
		this.__dirty = true;
	}
	,drawRoundRect: function(x,y,width,height,rx,ry) {
		if(ry == null) ry = -1;
		openfl.Lib.notImplemented("Graphics.drawRoundRect");
	}
	,drawRoundRectComplex: function(x,y,width,height,topLeftRadius,topRightRadius,bottomLeftRadius,bottomRightRadius) {
		openfl.Lib.notImplemented("Graphics.drawRoundRectComplex");
	}
	,drawTiles: function(sheet,tileData,smooth,flags,count) {
		if(count == null) count = -1;
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		if(this.__lightMatrix == null) this.__lightMatrix = new openfl.display.LightMatrix();
		var useScale = (flags & 1) > 0;
		var useRotation = (flags & 2) > 0;
		var useTransform = (flags & 16) > 0;
		var useRGB = (flags & 4) > 0;
		var useAlpha = (flags & 8) > 0;
		if(useTransform) {
			useScale = false;
			useRotation = false;
		}
		var scaleIndex = 0;
		var rotationIndex = 0;
		var rgbIndex = 0;
		var alphaIndex = 0;
		var transformIndex = 0;
		var numValues = 3;
		if(useScale) {
			scaleIndex = numValues;
			numValues++;
		}
		if(useRotation) {
			rotationIndex = numValues;
			numValues++;
		}
		if(useTransform) {
			transformIndex = numValues;
			numValues += 4;
		}
		if(useRGB) {
			rgbIndex = numValues;
			numValues += 3;
		}
		if(useAlpha) {
			alphaIndex = numValues;
			numValues++;
		}
		var totalCount = tileData.length;
		if(count >= 0 && totalCount > count) totalCount = count;
		var itemCount = totalCount / numValues | 0;
		var index = 0;
		var rect = null;
		var center = null;
		var previousTileID = -1;
		while(index < totalCount) {
			var tileID = tileData[index + 2] | 0;
			if(tileID != previousTileID) {
				rect = sheet.__tileRects[tileID];
				previousTileID = tileID;
			}
			if(rect != null && rect.width > 0 && rect.height > 0) {
				if(useTransform) {
					var mat = this.__lightMatrix;
					mat.setTo(tileData[index + transformIndex],tileData[index + transformIndex + 2],tileData[index + transformIndex + 1],tileData[index + transformIndex + 3],tileData[index],tileData[index + 1]);
					this.__inflateBounds(mat.transformX(0,0),mat.transformY(0,0));
					this.__inflateBounds(mat.transformX(0,rect.height),mat.transformY(0,rect.height));
					this.__inflateBounds(mat.transformX(rect.width,rect.height),mat.transformY(rect.width,rect.height));
					this.__inflateBounds(mat.transformX(rect.width,0),mat.transformY(rect.width,0));
				}
			}
			index += numValues;
		}
		this.__commands.push(openfl.display.DrawCommand.DrawTiles(sheet,tileData,smooth,flags,count));
		this.__dirty = true;
		this.__visible = true;
	}
	,drawTriangles: function(vertices,indices,uvtData,culling) {
		openfl.Lib.notImplemented("Graphics.drawTriangles");
	}
	,endFill: function() {
		this.__commands.push(openfl.display.DrawCommand.EndFill);
	}
	,lineBitmapStyle: function(bitmap,matrix,repeat,smooth) {
		if(smooth == null) smooth = false;
		if(repeat == null) repeat = true;
		openfl.Lib.notImplemented("Graphics.lineBitmapStyle");
	}
	,lineGradientStyle: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		openfl.Lib.notImplemented("Graphics.lineGradientStyle");
	}
	,lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		if(thickness != null) this.__halfStrokeWidth = thickness / 2; else this.__halfStrokeWidth = 0;
		this.__commands.push(openfl.display.DrawCommand.LineStyle(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit));
		if(thickness != null) this.__visible = true;
	}
	,lineTo: function(x,y) {
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__positionX = x;
		this.__positionY = y;
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__commands.push(openfl.display.DrawCommand.LineTo(x,y));
		this.__dirty = true;
	}
	,moveTo: function(x,y) {
		this.__commands.push(openfl.display.DrawCommand.MoveTo(x,y));
		this.__positionX = x;
		this.__positionY = y;
	}
	,__beginPath: function() {
		if(!this.__inPath) {
			this.__context.beginPath();
			this.__inPath = true;
		}
	}
	,__beginPatternFill: function(bitmapFill,bitmapRepeat) {
		if(this.__setFill || bitmapFill == null) return;
		if(this.__pattern == null) {
			if(bitmapFill.__sourceImage != null) this.__pattern = this.__context.createPattern(bitmapFill.__sourceImage,bitmapRepeat?"repeat":"no-repeat"); else this.__pattern = this.__context.createPattern(bitmapFill.__sourceCanvas,bitmapRepeat?"repeat":"no-repeat");
		}
		this.__context.fillStyle = this.__pattern;
		this.__setFill = true;
	}
	,__closePath: function(closeFill) {
		if(this.__inPath) {
			if(this.__hasFill) {
				this.__context.translate(-this.__bounds.x,-this.__bounds.y);
				if(this.__pendingMatrix != null) {
					this.__context.transform(this.__pendingMatrix.a,this.__pendingMatrix.b,this.__pendingMatrix.c,this.__pendingMatrix.d,this.__pendingMatrix.tx,this.__pendingMatrix.ty);
					this.__context.fill();
					this.__context.transform(this.__inversePendingMatrix.a,this.__inversePendingMatrix.b,this.__inversePendingMatrix.c,this.__inversePendingMatrix.d,this.__inversePendingMatrix.tx,this.__inversePendingMatrix.ty);
				} else this.__context.fill();
				this.__context.translate(this.__bounds.x,this.__bounds.y);
			}
			this.__context.closePath();
			if(this.__hasStroke) this.__context.stroke();
		}
		this.__inPath = false;
		if(closeFill) {
			this.__hasFill = false;
			this.__hasStroke = false;
			this.__pendingMatrix = null;
			this.__inversePendingMatrix = null;
		}
	}
	,__getBounds: function(rect,matrix) {
		if(this.__bounds == null) return;
		var bounds = this.__bounds.clone().transform(matrix);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
	}
	,__hitTest: function(x,y,shapeFlag,matrix) {
		if(this.__bounds == null) return false;
		var bounds = this.__bounds.clone().transform(matrix);
		return x > bounds.x && y > bounds.y && x <= bounds.get_right() && y <= bounds.get_bottom();
	}
	,__inflateBounds: function(x,y) {
		if(this.__bounds == null) {
			this.__bounds = new openfl.geom.Rectangle(x,y,0,0);
			return;
		}
		if(x < this.__bounds.x) {
			this.__bounds.width += this.__bounds.x - x;
			this.__bounds.x = x;
		}
		if(y < this.__bounds.y) {
			this.__bounds.height += this.__bounds.y - y;
			this.__bounds.y = y;
		}
		if(x > this.__bounds.x + this.__bounds.width) this.__bounds.width = x - this.__bounds.x;
		if(y > this.__bounds.y + this.__bounds.height) this.__bounds.height = y - this.__bounds.y;
	}
	,__render: function() {
		if(this.__dirty) {
			this.__hasFill = false;
			this.__hasStroke = false;
			this.__inPath = false;
			this.__positionX = 0;
			this.__positionY = 0;
			if(!this.__visible || this.__commands.length == 0 || this.__bounds == null || this.__bounds.width == 0 || this.__bounds.height == 0) {
				this.__canvas = null;
				this.__context = null;
			} else {
				if(this.__canvas == null) {
					this.__canvas = window.document.createElement("canvas");
					this.__context = this.__canvas.getContext("2d");
				}
				this.__canvas.width = Math.ceil(this.__bounds.width);
				this.__canvas.height = Math.ceil(this.__bounds.height);
				var offsetX = this.__bounds.x;
				var offsetY = this.__bounds.y;
				var bitmapFill = null;
				var bitmapRepeat = false;
				var _g = 0;
				var _g1 = this.__commands;
				while(_g < _g1.length) {
					var command = _g1[_g];
					++_g;
					switch(command[1]) {
					case 0:
						var smooth = command[5];
						var repeat = command[4];
						var matrix = command[3];
						var bitmap = command[2];
						this.__closePath(false);
						if(bitmap != bitmapFill || repeat != bitmapRepeat) {
							bitmapFill = bitmap;
							bitmapRepeat = repeat;
							this.__pattern = null;
							this.__setFill = false;
							bitmap.__syncImageData();
						}
						if(matrix != null) {
							this.__pendingMatrix = matrix;
							this.__inversePendingMatrix = new openfl.geom.Matrix(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
							this.__inversePendingMatrix.invert();
						} else {
							this.__pendingMatrix = null;
							this.__inversePendingMatrix = null;
						}
						this.__hasFill = true;
						break;
					case 1:
						var alpha = command[3];
						var rgb = command[2];
						this.__closePath(false);
						if(alpha == 1) this.__context.fillStyle = "#" + StringTools.hex(rgb,6); else {
							var r = (rgb & 16711680) >>> 16;
							var g = (rgb & 65280) >>> 8;
							var b = rgb & 255;
							this.__context.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
						}
						bitmapFill = null;
						this.__setFill = true;
						this.__hasFill = true;
						break;
					case 2:
						var y = command[5];
						var x = command[4];
						var cy = command[3];
						var cx = command[2];
						this.__beginPatternFill(bitmapFill,bitmapRepeat);
						this.__beginPath();
						this.__context.quadraticCurveTo(cx - offsetX,cy - offsetY,x - offsetX,y - offsetY);
						this.__positionX = x;
						this.__positionY = y;
						break;
					case 3:
						var radius = command[4];
						var y1 = command[3];
						var x1 = command[2];
						this.__beginPatternFill(bitmapFill,bitmapRepeat);
						this.__beginPath();
						this.__context.moveTo(x1 - offsetX + radius,y1 - offsetY);
						this.__context.arc(x1 - offsetX,y1 - offsetY,radius,0,Math.PI * 2,true);
						break;
					case 4:
						var height = command[5];
						var width = command[4];
						var y2 = command[3];
						var x2 = command[2];
						x2 -= offsetX;
						y2 -= offsetY;
						var kappa = .5522848;
						var ox = width / 2 * kappa;
						var oy = height / 2 * kappa;
						var xe = x2 + width;
						var ye = y2 + height;
						var xm = x2 + width / 2;
						var ym = y2 + height / 2;
						this.__beginPatternFill(bitmapFill,bitmapRepeat);
						this.__beginPath();
						this.__context.moveTo(x2,ym);
						this.__context.bezierCurveTo(x2,ym - oy,xm - ox,y2,xm,y2);
						this.__context.bezierCurveTo(xm + ox,y2,xe,ym - oy,xe,ym);
						this.__context.bezierCurveTo(xe,ym + oy,xm + ox,ye,xm,ye);
						this.__context.bezierCurveTo(xm - ox,ye,x2,ym + oy,x2,ym);
						break;
					case 5:
						var height1 = command[5];
						var width1 = command[4];
						var y3 = command[3];
						var x3 = command[2];
						var optimizationUsed = false;
						if(bitmapFill != null) {
							var st = 0;
							var sr = 0;
							var sb = 0;
							var sl = 0;
							var canOptimizeMatrix = true;
							if(this.__pendingMatrix != null) {
								if(this.__pendingMatrix.b != 0 || this.__pendingMatrix.c != 0) canOptimizeMatrix = false; else {
									var stl = this.__inversePendingMatrix.transformPoint(new openfl.geom.Point(x3,y3));
									var sbr = this.__inversePendingMatrix.transformPoint(new openfl.geom.Point(x3 + width1,y3 + height1));
									st = stl.y;
									sl = stl.x;
									sb = sbr.y;
									sr = sbr.x;
								}
							} else {
								st = y3;
								sl = x3;
								sb = y3 + height1;
								sr = x3 + width1;
							}
							if(canOptimizeMatrix && st >= 0 && sl >= 0 && sr <= bitmapFill.width && sb <= bitmapFill.height) {
								optimizationUsed = true;
								if(bitmapFill.__sourceImage != null) this.__context.drawImage(bitmapFill.__sourceImage,sl,st,sr - sl,sb - st,x3,y3,width1,height1); else this.__context.drawImage(bitmapFill.__sourceCanvas,sl,st,sr - sl,sb - st,x3,y3,width1,height1);
							}
						}
						if(!optimizationUsed) {
							this.__beginPatternFill(bitmapFill,bitmapRepeat);
							this.__beginPath();
							this.__context.rect(x3 - offsetX,y3 - offsetY,width1,height1);
						}
						break;
					case 6:
						var count = command[6];
						var flags = command[5];
						var smooth1 = command[4];
						var tileData = command[3];
						var sheet = command[2];
						this.__closePath(false);
						var useScale = (flags & 1) > 0;
						var useRotation = (flags & 2) > 0;
						var useTransform = (flags & 16) > 0;
						var useRGB = (flags & 4) > 0;
						var useAlpha = (flags & 8) > 0;
						if(useTransform) {
							useScale = false;
							useRotation = false;
						}
						var scaleIndex = 0;
						var rotationIndex = 0;
						var rgbIndex = 0;
						var alphaIndex = 0;
						var transformIndex = 0;
						var numValues = 3;
						if(useScale) {
							scaleIndex = numValues;
							numValues++;
						}
						if(useRotation) {
							rotationIndex = numValues;
							numValues++;
						}
						if(useTransform) {
							transformIndex = numValues;
							numValues += 4;
						}
						if(useRGB) {
							rgbIndex = numValues;
							numValues += 3;
						}
						if(useAlpha) {
							alphaIndex = numValues;
							numValues++;
						}
						var totalCount = tileData.length;
						if(count >= 0 && totalCount > count) totalCount = count;
						var itemCount = totalCount / numValues | 0;
						var index = 0;
						var rect = null;
						var center = null;
						var previousTileID = -1;
						var surface;
						sheet.__bitmap.__syncImageData();
						if(sheet.__bitmap.__sourceImage != null) surface = sheet.__bitmap.__sourceImage; else surface = sheet.__bitmap.__sourceCanvas;
						while(index < totalCount) {
							var tileID = tileData[index + 2] | 0;
							if(tileID != previousTileID) {
								rect = sheet.__tileRects[tileID];
								center = sheet.__centerPoints[tileID];
								previousTileID = tileID;
							}
							if(rect != null && rect.width > 0 && rect.height > 0 && center != null) {
								this.__context.save();
								this.__context.translate(tileData[index] - offsetX,tileData[index + 1] - offsetY);
								if(useRotation) this.__context.rotate(tileData[index + rotationIndex]);
								var scale = 1.0;
								if(useScale) scale = tileData[index + scaleIndex];
								if(useTransform) this.__context.transform(tileData[index + transformIndex],tileData[index + transformIndex + 1],tileData[index + transformIndex + 2],tileData[index + transformIndex + 3],0,0);
								if(useAlpha) this.__context.globalAlpha = tileData[index + alphaIndex];
								this.__context.drawImage(surface,rect.x,rect.y,rect.width,rect.height,-center.x * scale,-center.y * scale,rect.width * scale,rect.height * scale);
								this.__context.restore();
							}
							index += numValues;
						}
						break;
					case 7:
						this.__closePath(true);
						break;
					case 8:
						var miterLimit = command[9];
						var joints = command[8];
						var caps = command[7];
						var scaleMode = command[6];
						var pixelHinting = command[5];
						var alpha1 = command[4];
						var color = command[3];
						var thickness = command[2];
						this.__closePath(false);
						if(thickness == null) this.__hasStroke = false; else {
							this.__context.lineWidth = thickness;
							this.__context.lineJoin = joints;
							this.__context.lineCap = caps;
							this.__context.miterLimit = miterLimit;
							this.__context.strokeStyle = "#" + StringTools.hex(color,6);
							this.__hasStroke = true;
						}
						break;
					case 9:
						var y4 = command[3];
						var x4 = command[2];
						this.__beginPatternFill(bitmapFill,bitmapRepeat);
						this.__beginPath();
						this.__context.lineTo(x4 - offsetX,y4 - offsetY);
						this.__positionX = x4;
						this.__positionY = y4;
						break;
					case 10:
						var y5 = command[3];
						var x5 = command[2];
						this.__beginPath();
						this.__context.moveTo(x5 - offsetX,y5 - offsetY);
						this.__positionX = x5;
						this.__positionY = y5;
						break;
					}
				}
			}
			this.__dirty = false;
			this.__closePath(false);
		}
	}
	,__renderMask: function(renderSession) {
		if(this.__commands.length != 0) {
			var __context = renderSession.context;
			var __positionX = 0.0;
			var __positionY = 0.0;
			var offsetX = 0;
			var offsetY = 0;
			var _g = 0;
			var _g1 = this.__commands;
			while(_g < _g1.length) {
				var command = _g1[_g];
				++_g;
				switch(command[1]) {
				case 2:
					var y = command[5];
					var x = command[4];
					var cy = command[3];
					var cx = command[2];
					__context.quadraticCurveTo(cx,cy,x,y);
					__positionX = x;
					__positionY = y;
					break;
				case 3:
					var radius = command[4];
					var y1 = command[3];
					var x1 = command[2];
					__context.arc(x1 - offsetX,y1 - offsetY,radius,0,Math.PI * 2,true);
					break;
				case 4:
					var height = command[5];
					var width = command[4];
					var y2 = command[3];
					var x2 = command[2];
					x2 -= offsetX;
					y2 -= offsetY;
					var kappa = .5522848;
					var ox = width / 2 * kappa;
					var oy = height / 2 * kappa;
					var xe = x2 + width;
					var ye = y2 + height;
					var xm = x2 + width / 2;
					var ym = y2 + height / 2;
					__context.moveTo(x2,ym);
					__context.bezierCurveTo(x2,ym - oy,xm - ox,y2,xm,y2);
					__context.bezierCurveTo(xm + ox,y2,xe,ym - oy,xe,ym);
					__context.bezierCurveTo(xe,ym + oy,xm + ox,ye,xm,ye);
					__context.bezierCurveTo(xm - ox,ye,x2,ym + oy,x2,ym);
					break;
				case 5:
					var height1 = command[5];
					var width1 = command[4];
					var y3 = command[3];
					var x3 = command[2];
					__context.rect(x3 - offsetX,y3 - offsetY,width1,height1);
					break;
				case 9:
					var y4 = command[3];
					var x4 = command[2];
					__context.lineTo(x4 - offsetX,y4 - offsetY);
					__positionX = x4;
					__positionY = y4;
					break;
				case 10:
					var y5 = command[3];
					var x5 = command[2];
					__context.moveTo(x5 - offsetX,y5 - offsetY);
					__positionX = x5;
					__positionY = y5;
					break;
				default:
				}
			}
		}
	}
	,__class__: openfl.display.Graphics
};
openfl.display.LightMatrix = function(a,b,c,d,tx,ty) {
	if(ty == null) ty = 0;
	if(tx == null) tx = 0;
	if(d == null) d = 1;
	if(c == null) c = 0;
	if(b == null) b = 0;
	if(a == null) a = 1;
	this.setTo(a,b,c,d,tx,ty);
};
$hxClasses["openfl.display.LightMatrix"] = openfl.display.LightMatrix;
openfl.display.LightMatrix.__name__ = ["openfl","display","LightMatrix"];
openfl.display.LightMatrix.prototype = {
	setTo: function(a,b,c,d,tx,ty) {
		if(ty == null) ty = 0;
		if(tx == null) tx = 0;
		if(d == null) d = 1;
		if(c == null) c = 0;
		if(b == null) b = 0;
		if(a == null) a = 1;
		this.a = a;
		this.c = b;
		this.b = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
		return this;
	}
	,transformX: function(x,y) {
		return x * this.a + y * this.c + this.tx;
	}
	,transformY: function(x,y) {
		return x * this.b + y * this.d + this.ty;
	}
	,__class__: openfl.display.LightMatrix
};
openfl.display.DrawCommand = $hxClasses["openfl.display.DrawCommand"] = { __ename__ : true, __constructs__ : ["BeginBitmapFill","BeginFill","CurveTo","DrawCircle","DrawEllipse","DrawRect","DrawTiles","EndFill","LineStyle","LineTo","MoveTo"] };
openfl.display.DrawCommand.BeginBitmapFill = function(bitmap,matrix,repeat,smooth) { var $x = ["BeginBitmapFill",0,bitmap,matrix,repeat,smooth]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.BeginFill = function(rgb,alpha) { var $x = ["BeginFill",1,rgb,alpha]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.CurveTo = function(cx,cy,x,y) { var $x = ["CurveTo",2,cx,cy,x,y]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawCircle = function(x,y,radius) { var $x = ["DrawCircle",3,x,y,radius]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawEllipse = function(x,y,width,height) { var $x = ["DrawEllipse",4,x,y,width,height]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawRect = function(x,y,width,height) { var $x = ["DrawRect",5,x,y,width,height]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawTiles = function(sheet,tileData,smooth,flags,count) { var $x = ["DrawTiles",6,sheet,tileData,smooth,flags,count]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.EndFill = ["EndFill",7];
openfl.display.DrawCommand.EndFill.toString = $estr;
openfl.display.DrawCommand.EndFill.__enum__ = openfl.display.DrawCommand;
openfl.display.DrawCommand.LineStyle = function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) { var $x = ["LineStyle",8,thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.LineTo = function(x,y) { var $x = ["LineTo",9,x,y]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.MoveTo = function(x,y) { var $x = ["MoveTo",10,x,y]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.GraphicsPathWinding = $hxClasses["openfl.display.GraphicsPathWinding"] = { __ename__ : true, __constructs__ : ["EVEN_ODD","NON_ZERO"] };
openfl.display.GraphicsPathWinding.EVEN_ODD = ["EVEN_ODD",0];
openfl.display.GraphicsPathWinding.EVEN_ODD.toString = $estr;
openfl.display.GraphicsPathWinding.EVEN_ODD.__enum__ = openfl.display.GraphicsPathWinding;
openfl.display.GraphicsPathWinding.NON_ZERO = ["NON_ZERO",1];
openfl.display.GraphicsPathWinding.NON_ZERO.toString = $estr;
openfl.display.GraphicsPathWinding.NON_ZERO.__enum__ = openfl.display.GraphicsPathWinding;
openfl.display.IGraphicsData = function() { };
$hxClasses["openfl.display.IGraphicsData"] = openfl.display.IGraphicsData;
openfl.display.IGraphicsData.__name__ = ["openfl","display","IGraphicsData"];
openfl.display.IGraphicsData.prototype = {
	__class__: openfl.display.IGraphicsData
};
openfl.display.GraphicsDataType = $hxClasses["openfl.display.GraphicsDataType"] = { __ename__ : true, __constructs__ : ["STROKE","SOLID","GRADIENT","PATH","BITMAP","END"] };
openfl.display.GraphicsDataType.STROKE = ["STROKE",0];
openfl.display.GraphicsDataType.STROKE.toString = $estr;
openfl.display.GraphicsDataType.STROKE.__enum__ = openfl.display.GraphicsDataType;
openfl.display.GraphicsDataType.SOLID = ["SOLID",1];
openfl.display.GraphicsDataType.SOLID.toString = $estr;
openfl.display.GraphicsDataType.SOLID.__enum__ = openfl.display.GraphicsDataType;
openfl.display.GraphicsDataType.GRADIENT = ["GRADIENT",2];
openfl.display.GraphicsDataType.GRADIENT.toString = $estr;
openfl.display.GraphicsDataType.GRADIENT.__enum__ = openfl.display.GraphicsDataType;
openfl.display.GraphicsDataType.PATH = ["PATH",3];
openfl.display.GraphicsDataType.PATH.toString = $estr;
openfl.display.GraphicsDataType.PATH.__enum__ = openfl.display.GraphicsDataType;
openfl.display.GraphicsDataType.BITMAP = ["BITMAP",4];
openfl.display.GraphicsDataType.BITMAP.toString = $estr;
openfl.display.GraphicsDataType.BITMAP.__enum__ = openfl.display.GraphicsDataType;
openfl.display.GraphicsDataType.END = ["END",5];
openfl.display.GraphicsDataType.END.toString = $estr;
openfl.display.GraphicsDataType.END.__enum__ = openfl.display.GraphicsDataType;
openfl.display.InterpolationMethod = $hxClasses["openfl.display.InterpolationMethod"] = { __ename__ : true, __constructs__ : ["RGB","LINEAR_RGB"] };
openfl.display.InterpolationMethod.RGB = ["RGB",0];
openfl.display.InterpolationMethod.RGB.toString = $estr;
openfl.display.InterpolationMethod.RGB.__enum__ = openfl.display.InterpolationMethod;
openfl.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
openfl.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
openfl.display.InterpolationMethod.LINEAR_RGB.__enum__ = openfl.display.InterpolationMethod;
openfl.display._JointStyle = {};
openfl.display._JointStyle.JointStyle_Impl_ = function() { };
$hxClasses["openfl.display._JointStyle.JointStyle_Impl_"] = openfl.display._JointStyle.JointStyle_Impl_;
openfl.display._JointStyle.JointStyle_Impl_.__name__ = ["openfl","display","_JointStyle","JointStyle_Impl_"];
openfl.display.LineScaleMode = $hxClasses["openfl.display.LineScaleMode"] = { __ename__ : true, __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] };
openfl.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
openfl.display.LineScaleMode.HORIZONTAL.toString = $estr;
openfl.display.LineScaleMode.HORIZONTAL.__enum__ = openfl.display.LineScaleMode;
openfl.display.LineScaleMode.NONE = ["NONE",1];
openfl.display.LineScaleMode.NONE.toString = $estr;
openfl.display.LineScaleMode.NONE.__enum__ = openfl.display.LineScaleMode;
openfl.display.LineScaleMode.NORMAL = ["NORMAL",2];
openfl.display.LineScaleMode.NORMAL.toString = $estr;
openfl.display.LineScaleMode.NORMAL.__enum__ = openfl.display.LineScaleMode;
openfl.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
openfl.display.LineScaleMode.VERTICAL.toString = $estr;
openfl.display.LineScaleMode.VERTICAL.__enum__ = openfl.display.LineScaleMode;
openfl.display.Loader = function() {
	openfl.display.Sprite.call(this);
	this.contentLoaderInfo = openfl.display.LoaderInfo.create(this);
};
$hxClasses["openfl.display.Loader"] = openfl.display.Loader;
openfl.display.Loader.__name__ = ["openfl","display","Loader"];
openfl.display.Loader.__super__ = openfl.display.Sprite;
openfl.display.Loader.prototype = $extend(openfl.display.Sprite.prototype,{
	load: function(request,context) {
		var extension = "";
		var parts = request.url.split(".");
		if(parts.length > 0) extension = parts[parts.length - 1].toLowerCase();
		var transparent = true;
		this.contentLoaderInfo.url = request.url;
		if(request.contentType == null && request.contentType != "") switch(extension) {
		case "swf":
			this.contentLoaderInfo.contentType = "application/x-shockwave-flash";
			break;
		case "jpg":case "jpeg":
			transparent = false;
			this.contentLoaderInfo.contentType = "image/jpeg";
			break;
		case "png":
			this.contentLoaderInfo.contentType = "image/png";
			break;
		case "gif":
			this.contentLoaderInfo.contentType = "image/gif";
			break;
		default:
			this.contentLoaderInfo.contentType = "application/x-www-form-urlencoded";
		} else this.contentLoaderInfo.contentType = request.contentType;
		openfl.display.BitmapData.fromFile(request.url,$bind(this,this.BitmapData_onLoad),$bind(this,this.BitmapData_onError));
	}
	,loadBytes: function(buffer) {
		openfl.display.BitmapData.fromBytes(buffer,null,$bind(this,this.BitmapData_onLoad));
	}
	,unload: function() {
		if(this.get_numChildren() > 0) {
			while(this.get_numChildren() > 0) this.removeChildAt(0);
			this.content = null;
			this.contentLoaderInfo.url = null;
			this.contentLoaderInfo.contentType = null;
			this.contentLoaderInfo.content = null;
			this.contentLoaderInfo.bytesLoaded = 0;
			this.contentLoaderInfo.bytesTotal = 0;
			this.contentLoaderInfo.width = 0;
			this.contentLoaderInfo.height = 0;
			var event = new openfl.events.Event(openfl.events.Event.UNLOAD);
			event.currentTarget = this;
			this.dispatchEvent(event);
		}
	}
	,BitmapData_onLoad: function(bitmapData) {
		this.contentLoaderInfo.content = new openfl.display.Bitmap(bitmapData);
		this.content = this.contentLoaderInfo.content;
		this.addChild(this.contentLoaderInfo.content);
		var event = new openfl.events.Event(openfl.events.Event.COMPLETE);
		event.target = this.contentLoaderInfo;
		event.currentTarget = this.contentLoaderInfo;
		this.contentLoaderInfo.dispatchEvent(event);
	}
	,BitmapData_onError: function() {
		var event = new openfl.events.IOErrorEvent(openfl.events.IOErrorEvent.IO_ERROR);
		event.target = this.contentLoaderInfo;
		event.currentTarget = this.contentLoaderInfo;
		this.contentLoaderInfo.dispatchEvent(event);
	}
	,__class__: openfl.display.Loader
});
openfl.display.LoaderInfo = function() {
	openfl.events.EventDispatcher.call(this);
	this.applicationDomain = openfl.system.ApplicationDomain.currentDomain;
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["openfl.display.LoaderInfo"] = openfl.display.LoaderInfo;
openfl.display.LoaderInfo.__name__ = ["openfl","display","LoaderInfo"];
openfl.display.LoaderInfo.create = function(ldr) {
	var li = new openfl.display.LoaderInfo();
	if(ldr != null) li.loader = ldr; else li.url = "";
	return li;
};
openfl.display.LoaderInfo.__super__ = openfl.events.EventDispatcher;
openfl.display.LoaderInfo.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	__class__: openfl.display.LoaderInfo
});
openfl.display.MovieClip = function() {
	openfl.display.Sprite.call(this);
	this.__currentFrame = 0;
	this.__currentLabels = [];
	this.__totalFrames = 0;
	this.enabled = true;
	this.loaderInfo = openfl.display.LoaderInfo.create(null);
};
$hxClasses["openfl.display.MovieClip"] = openfl.display.MovieClip;
openfl.display.MovieClip.__name__ = ["openfl","display","MovieClip"];
openfl.display.MovieClip.__super__ = openfl.display.Sprite;
openfl.display.MovieClip.prototype = $extend(openfl.display.Sprite.prototype,{
	gotoAndPlay: function(frame,scene) {
	}
	,gotoAndStop: function(frame,scene) {
	}
	,nextFrame: function() {
	}
	,play: function() {
	}
	,prevFrame: function() {
	}
	,stop: function() {
	}
	,get_currentFrame: function() {
		return this.__currentFrame;
	}
	,get_currentFrameLabel: function() {
		return this.__currentFrameLabel;
	}
	,get_currentLabel: function() {
		return this.__currentLabel;
	}
	,get_currentLabels: function() {
		return this.__currentLabels;
	}
	,get_framesLoaded: function() {
		return this.__totalFrames;
	}
	,get_totalFrames: function() {
		return this.__totalFrames;
	}
	,__class__: openfl.display.MovieClip
	,__properties__: $extend(openfl.display.Sprite.prototype.__properties__,{get_totalFrames:"get_totalFrames",get_framesLoaded:"get_framesLoaded",get_currentLabels:"get_currentLabels",get_currentLabel:"get_currentLabel",get_currentFrameLabel:"get_currentFrameLabel",get_currentFrame:"get_currentFrame"})
});
openfl.display.PixelSnapping = $hxClasses["openfl.display.PixelSnapping"] = { __ename__ : true, __constructs__ : ["NEVER","AUTO","ALWAYS"] };
openfl.display.PixelSnapping.NEVER = ["NEVER",0];
openfl.display.PixelSnapping.NEVER.toString = $estr;
openfl.display.PixelSnapping.NEVER.__enum__ = openfl.display.PixelSnapping;
openfl.display.PixelSnapping.AUTO = ["AUTO",1];
openfl.display.PixelSnapping.AUTO.toString = $estr;
openfl.display.PixelSnapping.AUTO.__enum__ = openfl.display.PixelSnapping;
openfl.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
openfl.display.PixelSnapping.ALWAYS.toString = $estr;
openfl.display.PixelSnapping.ALWAYS.__enum__ = openfl.display.PixelSnapping;
openfl.display.Shape = function() {
	openfl.display.DisplayObject.call(this);
};
$hxClasses["openfl.display.Shape"] = openfl.display.Shape;
openfl.display.Shape.__name__ = ["openfl","display","Shape"];
openfl.display.Shape.__super__ = openfl.display.DisplayObject;
openfl.display.Shape.prototype = $extend(openfl.display.DisplayObject.prototype,{
	__getBounds: function(rect,matrix) {
		if(this.__graphics != null) this.__graphics.__getBounds(rect,this.__worldTransform);
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(this.get_visible() && this.__graphics != null && this.__graphics.__hitTest(x,y,shapeFlag,this.__worldTransform)) {
			if(!interactiveOnly) stack.push(this);
			return true;
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		if(this.__graphics != null) {
			this.__graphics.__render();
			if(this.__graphics.__canvas != null) {
				var context = renderSession.context;
				context.globalAlpha = this.__worldAlpha;
				var transform = this.__worldTransform;
				if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
				if(this.get_scrollRect() == null) context.drawImage(this.__graphics.__canvas,this.__graphics.__bounds.x,this.__graphics.__bounds.y); else context.drawImage(this.__graphics.__canvas,this.get_scrollRect().x - this.__graphics.__bounds.x,this.get_scrollRect().y - this.__graphics.__bounds.y,this.get_scrollRect().width,this.get_scrollRect().height,this.__graphics.__bounds.x + this.get_scrollRect().x,this.__graphics.__bounds.y + this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height);
			}
		}
	}
	,__renderDOM: function(renderSession) {
		if(this.stage != null && this.__worldVisible && this.__renderable && this.__graphics != null) {
			if(this.__graphics.__dirty || this.__worldAlphaChanged || this.__canvas == null && this.__graphics.__canvas != null) {
				this.__graphics.__render();
				if(this.__graphics.__canvas != null) {
					if(this.__canvas == null) {
						this.__canvas = window.document.createElement("canvas");
						this.__canvasContext = this.__canvas.getContext("2d");
						this.__initializeElement(this.__canvas,renderSession);
					}
					this.__canvas.width = this.__graphics.__canvas.width;
					this.__canvas.height = this.__graphics.__canvas.height;
					this.__canvasContext.globalAlpha = this.__worldAlpha;
					this.__canvasContext.drawImage(this.__graphics.__canvas,0,0);
				} else if(this.__canvas != null) {
					renderSession.element.removeChild(this.__canvas);
					this.__canvas = null;
					this.__style = null;
				}
			}
			if(this.__canvas != null) {
				if(this.__worldTransformChanged) {
					var transform = new openfl.geom.Matrix();
					transform.translate(this.__graphics.__bounds.x,this.__graphics.__bounds.y);
					transform = transform.mult(this.__worldTransform);
					this.__style.setProperty(renderSession.transformProperty,renderSession.roundPixels?"matrix3d(" + transform.a + ", " + transform.b + ", " + "0, 0, " + transform.c + ", " + transform.d + ", " + "0, 0, 0, 0, 1, 0, " + (transform.tx | 0) + ", " + (transform.ty | 0) + ", 0, 1)":"matrix3d(" + transform.a + ", " + transform.b + ", " + "0, 0, " + transform.c + ", " + transform.d + ", " + "0, 0, 0, 0, 1, 0, " + transform.tx + ", " + transform.ty + ", 0, 1)",null);
				}
				this.__applyStyle(renderSession,false,false,true);
			}
		} else if(this.__canvas != null) {
			renderSession.element.removeChild(this.__canvas);
			this.__canvas = null;
			this.__style = null;
		}
	}
	,get_graphics: function() {
		if(this.__graphics == null) this.__graphics = new openfl.display.Graphics();
		return this.__graphics;
	}
	,__class__: openfl.display.Shape
	,__properties__: $extend(openfl.display.DisplayObject.prototype.__properties__,{get_graphics:"get_graphics"})
});
openfl.display.SpreadMethod = $hxClasses["openfl.display.SpreadMethod"] = { __ename__ : true, __constructs__ : ["REPEAT","REFLECT","PAD"] };
openfl.display.SpreadMethod.REPEAT = ["REPEAT",0];
openfl.display.SpreadMethod.REPEAT.toString = $estr;
openfl.display.SpreadMethod.REPEAT.__enum__ = openfl.display.SpreadMethod;
openfl.display.SpreadMethod.REFLECT = ["REFLECT",1];
openfl.display.SpreadMethod.REFLECT.toString = $estr;
openfl.display.SpreadMethod.REFLECT.__enum__ = openfl.display.SpreadMethod;
openfl.display.SpreadMethod.PAD = ["PAD",2];
openfl.display.SpreadMethod.PAD.toString = $estr;
openfl.display.SpreadMethod.PAD.__enum__ = openfl.display.SpreadMethod;
openfl.display.Stage = function(width,height,element,color) {
	this.__mouseY = 0;
	this.__mouseX = 0;
	openfl.display.Sprite.call(this);
	this.__element = element;
	if(color == null) {
		this.__transparent = true;
		this.set_color(0);
	} else this.set_color(color);
	this.set_name(null);
	this.__mouseX = 0;
	this.__mouseY = 0;
	if(!this.__initializeGL()) this.__initializeCanvas();
	this.__originalWidth = width;
	this.__originalHeight = height;
	if(width == 0 && height == 0) {
		if(element != null) {
			width = element.clientWidth;
			height = element.clientHeight;
		} else {
			width = window.innerWidth;
			height = window.innerHeight;
		}
		this.__fullscreen = true;
	}
	this.stageWidth = width;
	this.stageHeight = height;
	if(this.__canvas != null) {
		this.__canvas.width = width;
		this.__canvas.height = height;
	} else {
		this.__div.style.width = width + "px";
		this.__div.style.height = height + "px";
	}
	this.__resize();
	window.addEventListener("resize",$bind(this,this.window_onResize));
	window.addEventListener("focus",$bind(this,this.window_onFocus));
	window.addEventListener("blur",$bind(this,this.window_onBlur));
	if(element != null) {
		if(this.__canvas != null) {
			if(element != this.__canvas) element.appendChild(this.__canvas);
		} else element.appendChild(this.__div);
	}
	this.stage = this;
	this.align = openfl.display.StageAlign.TOP_LEFT;
	this.allowsFullScreen = false;
	this.set_displayState(openfl.display.StageDisplayState.NORMAL);
	this.frameRate = 60;
	this.quality = "high";
	this.scaleMode = openfl.display.StageScaleMode.NO_SCALE;
	this.stageFocusRect = true;
	this.__clearBeforeRender = true;
	this.__stack = [];
	var keyEvents = ["keydown","keyup"];
	var touchEvents = ["touchstart","touchmove","touchend"];
	var mouseEvents = ["mousedown","mousemove","mouseup","dblclick","mousewheel"];
	var focusEvents = ["focus","blur"];
	var element1;
	if(this.__canvas != null) element1 = this.__canvas; else element1 = this.__div;
	var _g = 0;
	while(_g < keyEvents.length) {
		var type = keyEvents[_g];
		++_g;
		window.addEventListener(type,$bind(this,this.window_onKey),false);
	}
	var _g1 = 0;
	while(_g1 < touchEvents.length) {
		var type1 = touchEvents[_g1];
		++_g1;
		element1.addEventListener(type1,$bind(this,this.element_onTouch),true);
	}
	var _g2 = 0;
	while(_g2 < mouseEvents.length) {
		var type2 = mouseEvents[_g2];
		++_g2;
		element1.addEventListener(type2,$bind(this,this.element_onMouse),true);
	}
	var _g3 = 0;
	while(_g3 < focusEvents.length) {
		var type3 = focusEvents[_g3];
		++_g3;
		element1.addEventListener(type3,$bind(this,this.element_onFocus),true);
	}
	window.requestAnimationFrame($bind(this,this.__render));
};
$hxClasses["openfl.display.Stage"] = openfl.display.Stage;
openfl.display.Stage.__name__ = ["openfl","display","Stage"];
openfl.display.Stage.__super__ = openfl.display.Sprite;
openfl.display.Stage.prototype = $extend(openfl.display.Sprite.prototype,{
	globalToLocal: function(pos) {
		return pos;
	}
	,invalidate: function() {
		this.__invalidated = true;
	}
	,localToGlobal: function(pos) {
		return pos;
	}
	,__drag: function(mouse) {
		var parent = this.__dragObject.parent;
		if(parent != null) mouse = parent.globalToLocal(mouse);
		var x = mouse.x + this.__dragOffsetX;
		var y = mouse.y + this.__dragOffsetY;
		if(this.__dragBounds != null) {
			if(x < this.__dragBounds.x) x = this.__dragBounds.x; else if(x > this.__dragBounds.get_right()) x = this.__dragBounds.get_right();
			if(y < this.__dragBounds.y) y = this.__dragBounds.y; else if(y > this.__dragBounds.get_bottom()) y = this.__dragBounds.get_bottom();
		}
		this.__dragObject.set_x(x);
		this.__dragObject.set_y(y);
	}
	,__fireEvent: function(event,stack) {
		var length = stack.length;
		if(length == 0) {
			event.eventPhase = 1;
			event.target.__broadcast(event,false);
		} else {
			event.eventPhase = 0;
			event.target = stack[stack.length - 1];
			var _g1 = 0;
			var _g = length - 1;
			while(_g1 < _g) {
				var i = _g1++;
				stack[i].__broadcast(event,false);
				if(event.__isCancelled) return;
			}
			event.eventPhase = 1;
			event.target.__broadcast(event,false);
			if(event.__isCancelled) return;
			if(event.bubbles) {
				event.eventPhase = 2;
				var i1 = length - 2;
				while(i1 >= 0) {
					stack[i1].__broadcast(event,false);
					if(event.__isCancelled) return;
					i1--;
				}
			}
		}
	}
	,__getInteractive: function(stack) {
		stack.push(this);
	}
	,__initializeCanvas: function() {
		if(js.Boot.__instanceof(this.__element,HTMLCanvasElement)) this.__canvas = this.__element; else this.__canvas = window.document.createElement("canvas");
		if(this.__transparent) this.__context = this.__canvas.getContext("2d"); else {
			this.__canvas.setAttribute("moz-opaque","true");
			this.__context = this.__canvas.getContext ("2d", { alpha: false });
		}
		var style = this.__canvas.style;
		style.setProperty("-webkit-transform","translateZ(0)",null);
		style.setProperty("transform","translateZ(0)",null);
		this.__renderSession = new openfl.display.RenderSession();
		this.__renderSession.context = this.__context;
		this.__renderSession.roundPixels = true;
	}
	,__initializeDOM: function() {
		this.__div = window.document.createElement("div");
		var style = this.__div.style;
		if(!this.__transparent) style.backgroundColor = this.__colorString;
		style.setProperty("-webkit-transform","translate3D(0,0,0)",null);
		style.setProperty("transform","translate3D(0,0,0)",null);
		style.position = "relative";
		style.overflow = "hidden";
		style.setProperty("-webkit-user-select","none",null);
		style.setProperty("-moz-user-select","none",null);
		style.setProperty("-ms-user-select","none",null);
		style.setProperty("-o-user-select","none",null);
		window.document.addEventListener("dragstart",function(e) {
			if(e.target.nodeName.toLowerCase() == "img") {
				e.preventDefault();
				return false;
			}
			return true;
		},false);
		this.__renderSession = new openfl.display.RenderSession();
		this.__renderSession.element = this.__div;
		this.__renderSession.roundPixels = true;
		var prefix = (function () {
		  var styles = window.getComputedStyle(document.documentElement, ''),
			pre = (Array.prototype.slice
			  .call(styles)
			  .join('') 
			  .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
			)[1],
			dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
		  return {
			dom: dom,
			lowercase: pre,
			css: '-' + pre + '-',
			js: pre[0].toUpperCase() + pre.substr(1)
		  };
		})();
		this.__renderSession.vendorPrefix = prefix.lowercase;
		if(prefix.lowercase == "webkit") this.__renderSession.transformProperty = "-webkit-transform"; else this.__renderSession.transformProperty = "transform";
		if(prefix.lowercase == "webkit") this.__renderSession.transformOriginProperty = "-webkit-transform-origin"; else this.__renderSession.transformOriginProperty = "transform-origin";
	}
	,__initializeGL: function() {
		return false;
	}
	,__render: function() {
		this.__broadcast(new openfl.events.Event(openfl.events.Event.ENTER_FRAME),true);
		if(this.__invalidated) {
			this.__invalidated = false;
			this.__broadcast(new openfl.events.Event(openfl.events.Event.RENDER),true);
		}
		this.__renderable = true;
		this.__update(false,true);
		if(this.__canvas != null) {
			if(!this.__fullscreen || this.__element != this.__canvas) {
				if(this.stageWidth != this.__canvas.width || this.stageHeight != this.__canvas.height) {
					this.__canvas.width = this.stageWidth;
					this.__canvas.height = this.stageHeight;
				}
			} else {
				this.stageWidth = this.__canvas.width;
				this.stageHeight = this.__canvas.height;
			}
			if(this.__gl != null) {
				if(!this.__glContextLost) {
					this.__gl.viewport(0,0,this.stageWidth,this.stageHeight);
					this.__gl.bindFramebuffer(36160,null);
					if(this.__transparent) this.__gl.clearColor(0,0,0,0); else this.__gl.clearColor(this.__colorSplit[0],this.__colorSplit[1],this.__colorSplit[2],1);
					this.__gl.clear(16384);
					this.__renderGL(this.__renderSession);
				}
			} else {
				this.__context.setTransform(1,0,0,1,0,0);
				this.__context.globalAlpha = 1;
				if(!this.__transparent && this.__clearBeforeRender) {
					this.__context.fillStyle = this.__colorString;
					this.__context.fillRect(0,0,this.stageWidth,this.stageHeight);
				} else if(this.__transparent && this.__clearBeforeRender) this.__context.clearRect(0,0,this.stageWidth,this.stageHeight);
				this.__renderCanvas(this.__renderSession);
			}
		} else {
			this.__renderSession.z = 1;
			this.__renderDOM(this.__renderSession);
		}
		window.requestAnimationFrame($bind(this,this.__render));
	}
	,__resize: function() {
		if(this.__element != null && (this.__div == null || this.__div != null && this.__fullscreen)) {
			if(this.__fullscreen) {
				this.stageWidth = this.__element.clientWidth;
				this.stageHeight = this.__element.clientHeight;
				if(this.__canvas != null) {
					if(this.__element != this.__canvas) {
						this.__canvas.width = this.stageWidth;
						this.__canvas.height = this.stageHeight;
					}
				} else {
					this.__div.style.width = this.stageWidth + "px";
					this.__div.style.height = this.stageHeight + "px";
				}
			} else {
				var scaleX = this.__element.clientWidth / this.__originalWidth;
				var scaleY = this.__element.clientHeight / this.__originalHeight;
				var currentRatio = scaleX / scaleY;
				var targetRatio = Math.min(scaleX,scaleY);
				if(this.__canvas != null) {
					if(this.__element != this.__canvas) {
						this.__canvas.style.width = this.__originalWidth * targetRatio + "px";
						this.__canvas.style.height = this.__originalHeight * targetRatio + "px";
						this.__canvas.style.marginLeft = (this.__element.clientWidth - this.__originalWidth * targetRatio) / 2 + "px";
						this.__canvas.style.marginTop = (this.__element.clientHeight - this.__originalHeight * targetRatio) / 2 + "px";
					}
				} else {
					this.__div.style.width = this.__originalWidth * targetRatio + "px";
					this.__div.style.height = this.__originalHeight * targetRatio + "px";
					this.__div.style.marginLeft = (this.__element.clientWidth - this.__originalWidth * targetRatio) / 2 + "px";
					this.__div.style.marginTop = (this.__element.clientHeight - this.__originalHeight * targetRatio) / 2 + "px";
				}
			}
		}
	}
	,__setCursor: function(cursor) {
		if(this.__cursor != cursor) {
			this.__cursor = cursor;
			if(!this.__cursorHidden) {
				var element;
				if(this.__canvas != null) element = this.__canvas; else element = this.__div;
				element.style.cursor = cursor;
			}
		}
	}
	,__setCursorHidden: function(value) {
		if(this.__cursorHidden != value) {
			this.__cursorHidden = value;
			var element;
			if(this.__canvas != null) element = this.__canvas; else element = this.__div;
			if(value) element.style.cursor = "none"; else element.style.cursor = this.__cursor;
		}
	}
	,__startDrag: function(sprite,lockCenter,bounds) {
		if(bounds == null) this.__dragBounds = null; else this.__dragBounds = bounds.clone();
		this.__dragObject = sprite;
		if(this.__dragObject != null) {
			if(lockCenter) {
				this.__dragOffsetX = -this.__dragObject.get_width() / 2;
				this.__dragOffsetY = -this.__dragObject.get_height() / 2;
			} else {
				var mouse = new openfl.geom.Point(this.get_mouseX(),this.get_mouseY());
				var parent = this.__dragObject.parent;
				if(parent != null) mouse = parent.globalToLocal(mouse);
				this.__dragOffsetX = this.__dragObject.get_x() - mouse.x;
				this.__dragOffsetY = this.__dragObject.get_y() - mouse.y;
			}
		}
	}
	,__stopDrag: function(sprite) {
		this.__dragBounds = null;
		this.__dragObject = null;
	}
	,__update: function(transformOnly,updateChildren) {
		if(transformOnly) {
			if(openfl.display.DisplayObject.__worldTransformDirty > 0) {
				openfl.display.Sprite.prototype.__update.call(this,true,updateChildren);
				if(updateChildren) {
					openfl.display.DisplayObject.__worldTransformDirty = 0;
					this.__dirty = true;
				}
			}
		} else if(openfl.display.DisplayObject.__worldTransformDirty > 0 || this.__dirty || openfl.display.DisplayObject.__worldRenderDirty > 0) {
			openfl.display.Sprite.prototype.__update.call(this,false,updateChildren);
			if(updateChildren) {
				openfl.display.DisplayObject.__worldTransformDirty = 0;
				openfl.display.DisplayObject.__worldRenderDirty = 0;
				this.__dirty = false;
			}
		}
	}
	,get_mouseX: function() {
		return this.__mouseX;
	}
	,get_mouseY: function() {
		return this.__mouseY;
	}
	,canvas_onContextLost: function(event) {
		this.__glContextLost = true;
	}
	,canvas_onContextRestored: function(event) {
		this.__glContextLost = false;
	}
	,element_onFocus: function(event) {
	}
	,element_onTouch: function(event) {
		event.preventDefault();
		var rect;
		if(this.__canvas != null) rect = this.__canvas.getBoundingClientRect(); else rect = this.__div.getBoundingClientRect();
		var touch = event.changedTouches[0];
		var point = new openfl.geom.Point((touch.pageX - rect.left) * (this.stageWidth / rect.width),(touch.pageY - rect.top) * (this.stageHeight / rect.height));
		this.__mouseX = point.x;
		this.__mouseY = point.y;
		this.__stack = [];
		var type = null;
		var mouseType = null;
		var _g = event.type;
		switch(_g) {
		case "touchstart":
			type = "touchBegin";
			mouseType = openfl.events.MouseEvent.MOUSE_DOWN;
			break;
		case "touchmove":
			type = "touchMove";
			mouseType = openfl.events.MouseEvent.MOUSE_MOVE;
			break;
		case "touchend":
			type = "touchEnd";
			mouseType = openfl.events.MouseEvent.MOUSE_UP;
			break;
		default:
		}
		if(this.__hitTest(this.get_mouseX(),this.get_mouseY(),false,this.__stack,true)) {
			var target = this.__stack[this.__stack.length - 1];
			var localPoint = target.globalToLocal(point);
			var touchEvent = openfl.events.TouchEvent.__create(type,event,touch,localPoint,target);
			touchEvent.touchPointID = touch.identifier;
			touchEvent.isPrimaryTouchPoint = true;
			var mouseEvent = openfl.events.MouseEvent.__create(mouseType,event,localPoint,target);
			mouseEvent.buttonDown = type != "touchEnd";
			this.__fireEvent(touchEvent,this.__stack);
			this.__fireEvent(mouseEvent,this.__stack);
		} else {
			var touchEvent1 = openfl.events.TouchEvent.__create(type,event,touch,point,this);
			touchEvent1.touchPointID = touch.identifier;
			touchEvent1.isPrimaryTouchPoint = true;
			var mouseEvent1 = openfl.events.MouseEvent.__create(mouseType,event,point,this);
			mouseEvent1.buttonDown = type != "touchEnd";
			this.__fireEvent(touchEvent1,[this]);
			this.__fireEvent(mouseEvent1,[this]);
		}
		if(type == "touchMove" && this.__dragObject != null) this.__drag(point);
	}
	,element_onMouse: function(event) {
		var rect;
		if(this.__canvas != null) {
			rect = this.__canvas.getBoundingClientRect();
			this.__mouseX = (event.clientX - rect.left) * (this.stageWidth / rect.width);
			this.__mouseY = (event.clientY - rect.top) * (this.stageHeight / rect.height);
		} else {
			rect = this.__div.getBoundingClientRect();
			this.__mouseX = event.clientX - rect.left;
			this.__mouseY = event.clientY - rect.top;
		}
		this.__stack = [];
		var type;
		var _g = event.type;
		switch(_g) {
		case "mousedown":
			type = openfl.events.MouseEvent.MOUSE_DOWN;
			break;
		case "mouseup":
			type = openfl.events.MouseEvent.MOUSE_UP;
			break;
		case "mousemove":
			type = openfl.events.MouseEvent.MOUSE_MOVE;
			break;
		case "dblclick":
			type = openfl.events.MouseEvent.DOUBLE_CLICK;
			break;
		case "mousewheel":
			type = openfl.events.MouseEvent.MOUSE_WHEEL;
			break;
		default:
			type = null;
		}
		if(this.__hitTest(this.get_mouseX(),this.get_mouseY(),false,this.__stack,true)) {
			var target = this.__stack[this.__stack.length - 1];
			this.__setCursor(target.buttonMode?"pointer":"default");
			this.__fireEvent(openfl.events.MouseEvent.__create(type,event,target.globalToLocal(new openfl.geom.Point(this.get_mouseX(),this.get_mouseY())),target),this.__stack);
			if(type == openfl.events.MouseEvent.MOUSE_UP) this.__fireEvent(openfl.events.MouseEvent.__create(openfl.events.MouseEvent.CLICK,event,target.globalToLocal(new openfl.geom.Point(this.get_mouseX(),this.get_mouseY())),target),this.__stack);
		} else {
			this.__setCursor(this.buttonMode?"pointer":"default");
			this.__fireEvent(openfl.events.MouseEvent.__create(type,event,new openfl.geom.Point(this.get_mouseX(),this.get_mouseY()),this),[this]);
			if(type == openfl.events.MouseEvent.MOUSE_UP) this.__fireEvent(openfl.events.MouseEvent.__create(openfl.events.MouseEvent.CLICK,event,new openfl.geom.Point(this.get_mouseX(),this.get_mouseY()),this),[this]);
		}
		if(this.__dragObject != null) this.__drag(new openfl.geom.Point(this.get_mouseX(),this.get_mouseY()));
	}
	,window_onKey: function(event) {
		var keyCode;
		if(event.keyCode != null) keyCode = event.keyCode; else keyCode = event.which;
		keyCode = openfl.ui.Keyboard.__convertMozillaCode(keyCode);
		var location;
		if(event.location != null) location = event.location; else location = event.keyLocation;
		var keyLocation;
		keyLocation = js.Boot.__cast(location , Int);
		var stack = new Array();
		if(this.__focus == null) this.__getInteractive(stack); else this.__focus.__getInteractive(stack);
		if(stack.length > 0) {
			stack.reverse();
			this.__fireEvent(new openfl.events.KeyboardEvent(event.type == "keydown"?openfl.events.KeyboardEvent.KEY_DOWN:openfl.events.KeyboardEvent.KEY_UP,true,false,event.charCode,keyCode,keyLocation,event.ctrlKey,event.altKey,event.shiftKey),stack);
		}
	}
	,window_onResize: function(event) {
		this.__resize();
		var event1 = new openfl.events.Event(openfl.events.Event.RESIZE);
		this.__broadcast(event1,false);
	}
	,window_onFocus: function(event) {
		var event1 = new openfl.events.Event(openfl.events.Event.ACTIVATE);
		this.__broadcast(event1,true);
	}
	,window_onBlur: function(event) {
		var event1 = new openfl.events.Event(openfl.events.Event.DEACTIVATE);
		this.__broadcast(event1,true);
	}
	,get_color: function() {
		return this.__color;
	}
	,set_color: function(value) {
		var r = (value & 16711680) >>> 16;
		var g = (value & 65280) >>> 8;
		var b = value & 255;
		this.__colorSplit = [r / 255,g / 255,b / 255];
		this.__colorString = "#" + StringTools.hex(value,6);
		return this.__color = value;
	}
	,get_focus: function() {
		return this.__focus;
	}
	,set_focus: function(value) {
		if(value != this.__focus) {
			if(this.__focus != null) {
				var event = new openfl.events.FocusEvent(openfl.events.FocusEvent.FOCUS_OUT,true,false,value,false,0);
				this.__stack = [];
				this.__focus.__getInteractive(this.__stack);
				this.__stack.reverse();
				this.__fireEvent(event,this.__stack);
			}
			if(value != null) {
				var event1 = new openfl.events.FocusEvent(openfl.events.FocusEvent.FOCUS_IN,true,false,this.__focus,false,0);
				this.__stack = [];
				value.__getInteractive(this.__stack);
				this.__stack.reverse();
				this.__fireEvent(event1,this.__stack);
			}
			this.__focus = value;
		}
		return this.__focus;
	}
	,set_displayState: function(value) {
		switch(value[1]) {
		case 0:
			var fs_exit_function = function() {
			    if (document.exitFullscreen) {
			      document.exitFullscreen();
			    } else if (document.msExitFullscreen) {
			      document.msExitFullscreen();
			    } else if (document.mozCancelFullScreen) {
			      document.mozCancelFullScreen();
			    } else if (document.webkitExitFullscreen) {
			      document.webkitExitFullscreen();
			    }
				}
			fs_exit_function();
			break;
		case 1:case 2:
			var fsfunction = function(elem) {
					if (elem.requestFullscreen) elem.requestFullscreen();
					else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
					else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
					else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
				}
			fsfunction(this.__element);
			break;
		}
		this.displayState = value;
		return value;
	}
	,__class__: openfl.display.Stage
	,__properties__: $extend(openfl.display.Sprite.prototype.__properties__,{set_focus:"set_focus",get_focus:"get_focus",set_displayState:"set_displayState",set_color:"set_color",get_color:"get_color"})
});
openfl.display.RenderSession = function() {
	this.maskManager = new openfl.display.MaskManager(this);
};
$hxClasses["openfl.display.RenderSession"] = openfl.display.RenderSession;
openfl.display.RenderSession.__name__ = ["openfl","display","RenderSession"];
openfl.display.RenderSession.prototype = {
	__class__: openfl.display.RenderSession
};
openfl.display.MaskManager = function(renderSession) {
	this.renderSession = renderSession;
};
$hxClasses["openfl.display.MaskManager"] = openfl.display.MaskManager;
openfl.display.MaskManager.__name__ = ["openfl","display","MaskManager"];
openfl.display.MaskManager.prototype = {
	pushMask: function(mask) {
		var context = this.renderSession.context;
		context.save();
		var transform = mask.__worldTransform;
		if(transform == null) transform = new openfl.geom.Matrix();
		context.setTransform(transform.a,transform.c,transform.b,transform.d,transform.tx,transform.ty);
		context.beginPath();
		mask.__renderMask(this.renderSession);
		context.clip();
	}
	,pushRect: function(rect,transform) {
		var context = this.renderSession.context;
		context.save();
		context.setTransform(transform.a,transform.c,transform.b,transform.d,transform.tx,transform.ty);
		context.beginPath();
		context.rect(rect.x,rect.y,rect.width,rect.height);
		context.clip();
	}
	,popMask: function() {
		this.renderSession.context.restore();
	}
	,__class__: openfl.display.MaskManager
};
openfl.display.StageAlign = $hxClasses["openfl.display.StageAlign"] = { __ename__ : true, __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] };
openfl.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
openfl.display.StageAlign.TOP_RIGHT.toString = $estr;
openfl.display.StageAlign.TOP_RIGHT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
openfl.display.StageAlign.TOP_LEFT.toString = $estr;
openfl.display.StageAlign.TOP_LEFT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.TOP = ["TOP",2];
openfl.display.StageAlign.TOP.toString = $estr;
openfl.display.StageAlign.TOP.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.RIGHT = ["RIGHT",3];
openfl.display.StageAlign.RIGHT.toString = $estr;
openfl.display.StageAlign.RIGHT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.LEFT = ["LEFT",4];
openfl.display.StageAlign.LEFT.toString = $estr;
openfl.display.StageAlign.LEFT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
openfl.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
openfl.display.StageAlign.BOTTOM_RIGHT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
openfl.display.StageAlign.BOTTOM_LEFT.toString = $estr;
openfl.display.StageAlign.BOTTOM_LEFT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.BOTTOM = ["BOTTOM",7];
openfl.display.StageAlign.BOTTOM.toString = $estr;
openfl.display.StageAlign.BOTTOM.__enum__ = openfl.display.StageAlign;
openfl.display.StageDisplayState = $hxClasses["openfl.display.StageDisplayState"] = { __ename__ : true, __constructs__ : ["NORMAL","FULL_SCREEN","FULL_SCREEN_INTERACTIVE"] };
openfl.display.StageDisplayState.NORMAL = ["NORMAL",0];
openfl.display.StageDisplayState.NORMAL.toString = $estr;
openfl.display.StageDisplayState.NORMAL.__enum__ = openfl.display.StageDisplayState;
openfl.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",1];
openfl.display.StageDisplayState.FULL_SCREEN.toString = $estr;
openfl.display.StageDisplayState.FULL_SCREEN.__enum__ = openfl.display.StageDisplayState;
openfl.display.StageDisplayState.FULL_SCREEN_INTERACTIVE = ["FULL_SCREEN_INTERACTIVE",2];
openfl.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.toString = $estr;
openfl.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.__enum__ = openfl.display.StageDisplayState;
openfl.display._StageQuality = {};
openfl.display._StageQuality.StageQuality_Impl_ = function() { };
$hxClasses["openfl.display._StageQuality.StageQuality_Impl_"] = openfl.display._StageQuality.StageQuality_Impl_;
openfl.display._StageQuality.StageQuality_Impl_.__name__ = ["openfl","display","_StageQuality","StageQuality_Impl_"];
openfl.display.StageScaleMode = $hxClasses["openfl.display.StageScaleMode"] = { __ename__ : true, __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] };
openfl.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
openfl.display.StageScaleMode.SHOW_ALL.toString = $estr;
openfl.display.StageScaleMode.SHOW_ALL.__enum__ = openfl.display.StageScaleMode;
openfl.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
openfl.display.StageScaleMode.NO_SCALE.toString = $estr;
openfl.display.StageScaleMode.NO_SCALE.__enum__ = openfl.display.StageScaleMode;
openfl.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
openfl.display.StageScaleMode.NO_BORDER.toString = $estr;
openfl.display.StageScaleMode.NO_BORDER.__enum__ = openfl.display.StageScaleMode;
openfl.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
openfl.display.StageScaleMode.EXACT_FIT.toString = $estr;
openfl.display.StageScaleMode.EXACT_FIT.__enum__ = openfl.display.StageScaleMode;
openfl.display.Tilesheet = function(image) {
	this.__bitmap = image;
	this.__centerPoints = new Array();
	this.__tileRects = new Array();
	this.__tileUVs = new Array();
};
$hxClasses["openfl.display.Tilesheet"] = openfl.display.Tilesheet;
openfl.display.Tilesheet.__name__ = ["openfl","display","Tilesheet"];
openfl.display.Tilesheet.prototype = {
	addTileRect: function(rectangle,centerPoint) {
		this.__tileRects.push(rectangle);
		if(centerPoint == null) centerPoint = new openfl.geom.Point();
		this.__centerPoints.push(centerPoint);
		this.__tileUVs.push(new openfl.geom.Rectangle(rectangle.get_left() / this.__bitmap.width,rectangle.get_top() / this.__bitmap.height,rectangle.get_right() / this.__bitmap.width,rectangle.get_bottom() / this.__bitmap.height));
		return this.__tileRects.length - 1;
	}
	,drawTiles: function(graphics,tileData,smooth,flags,count) {
		if(count == null) count = -1;
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		graphics.drawTiles(this,tileData,smooth,flags,count);
	}
	,getTileCenter: function(index) {
		return this.__centerPoints[index];
	}
	,getTileRect: function(index) {
		return this.__tileRects[index];
	}
	,getTileUVs: function(index) {
		return this.__tileUVs[index];
	}
	,__class__: openfl.display.Tilesheet
};
openfl.display.TriangleCulling = $hxClasses["openfl.display.TriangleCulling"] = { __ename__ : true, __constructs__ : ["NEGATIVE","NONE","POSITIVE"] };
openfl.display.TriangleCulling.NEGATIVE = ["NEGATIVE",0];
openfl.display.TriangleCulling.NEGATIVE.toString = $estr;
openfl.display.TriangleCulling.NEGATIVE.__enum__ = openfl.display.TriangleCulling;
openfl.display.TriangleCulling.NONE = ["NONE",1];
openfl.display.TriangleCulling.NONE.toString = $estr;
openfl.display.TriangleCulling.NONE.__enum__ = openfl.display.TriangleCulling;
openfl.display.TriangleCulling.POSITIVE = ["POSITIVE",2];
openfl.display.TriangleCulling.POSITIVE.toString = $estr;
openfl.display.TriangleCulling.POSITIVE.__enum__ = openfl.display.TriangleCulling;
openfl.errors = {};
openfl.errors.Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
	this.name = "Error";
};
$hxClasses["openfl.errors.Error"] = openfl.errors.Error;
openfl.errors.Error.__name__ = ["openfl","errors","Error"];
openfl.errors.Error.prototype = {
	getStackTrace: function() {
		return haxe.CallStack.toString(haxe.CallStack.exceptionStack());
	}
	,toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,__class__: openfl.errors.Error
};
openfl.errors.IOError = function(message) {
	if(message == null) message = "";
	openfl.errors.Error.call(this,message);
};
$hxClasses["openfl.errors.IOError"] = openfl.errors.IOError;
openfl.errors.IOError.__name__ = ["openfl","errors","IOError"];
openfl.errors.IOError.__super__ = openfl.errors.Error;
openfl.errors.IOError.prototype = $extend(openfl.errors.Error.prototype,{
	__class__: openfl.errors.IOError
});
openfl.errors.RangeError = function(inMessage) {
	if(inMessage == null) inMessage = "";
	openfl.errors.Error.call(this,inMessage,0);
};
$hxClasses["openfl.errors.RangeError"] = openfl.errors.RangeError;
openfl.errors.RangeError.__name__ = ["openfl","errors","RangeError"];
openfl.errors.RangeError.__super__ = openfl.errors.Error;
openfl.errors.RangeError.prototype = $extend(openfl.errors.Error.prototype,{
	__class__: openfl.errors.RangeError
});
openfl.errors.TypeError = function(inMessage) {
	if(inMessage == null) inMessage = "";
	openfl.errors.Error.call(this,inMessage,0);
};
$hxClasses["openfl.errors.TypeError"] = openfl.errors.TypeError;
openfl.errors.TypeError.__name__ = ["openfl","errors","TypeError"];
openfl.errors.TypeError.__super__ = openfl.errors.Error;
openfl.errors.TypeError.prototype = $extend(openfl.errors.Error.prototype,{
	__class__: openfl.errors.TypeError
});
openfl.events.Event = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
	this.eventPhase = 1;
};
$hxClasses["openfl.events.Event"] = openfl.events.Event;
openfl.events.Event.__name__ = ["openfl","events","Event"];
openfl.events.Event.prototype = {
	clone: function() {
		var event = new openfl.events.Event(this.type,this.bubbles,this.cancelable);
		event.eventPhase = this.eventPhase;
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		return event;
	}
	,isDefaultPrevented: function() {
		return this.__isCancelled || this.__isCancelledNow;
	}
	,stopImmediatePropagation: function() {
		this.__isCancelled = true;
		this.__isCancelledNow = true;
	}
	,stopPropagation: function() {
		this.__isCancelled = true;
	}
	,toString: function() {
		return "[Event type=" + this.type + " bubbles=" + Std.string(this.bubbles) + " cancelable=" + Std.string(this.cancelable) + "]";
	}
	,__class__: openfl.events.Event
};
openfl.events.TextEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["openfl.events.TextEvent"] = openfl.events.TextEvent;
openfl.events.TextEvent.__name__ = ["openfl","events","TextEvent"];
openfl.events.TextEvent.__super__ = openfl.events.Event;
openfl.events.TextEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.TextEvent
});
openfl.events.ErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.TextEvent.call(this,type,bubbles,cancelable);
	this.text = text;
	this.errorID = id;
};
$hxClasses["openfl.events.ErrorEvent"] = openfl.events.ErrorEvent;
openfl.events.ErrorEvent.__name__ = ["openfl","events","ErrorEvent"];
openfl.events.ErrorEvent.__super__ = openfl.events.TextEvent;
openfl.events.ErrorEvent.prototype = $extend(openfl.events.TextEvent.prototype,{
	__class__: openfl.events.ErrorEvent
});
openfl.events._EventDispatcher = {};
openfl.events._EventDispatcher.Listener = function(callback,useCapture,priority) {
	this.callback = callback;
	this.useCapture = useCapture;
	this.priority = priority;
};
$hxClasses["openfl.events._EventDispatcher.Listener"] = openfl.events._EventDispatcher.Listener;
openfl.events._EventDispatcher.Listener.__name__ = ["openfl","events","_EventDispatcher","Listener"];
openfl.events._EventDispatcher.Listener.prototype = {
	match: function(callback,useCapture) {
		return this.callback == callback && this.useCapture == useCapture;
	}
	,__class__: openfl.events._EventDispatcher.Listener
};
openfl.events._EventPhase = {};
openfl.events._EventPhase.EventPhase_Impl_ = function() { };
$hxClasses["openfl.events._EventPhase.EventPhase_Impl_"] = openfl.events._EventPhase.EventPhase_Impl_;
openfl.events._EventPhase.EventPhase_Impl_.__name__ = ["openfl","events","_EventPhase","EventPhase_Impl_"];
openfl.events.FocusEvent = function(type,bubbles,cancelable,relatedObject,shiftKey,keyCode) {
	if(keyCode == null) keyCode = 0;
	if(shiftKey == null) shiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = keyCode;
	if(shiftKey == null) this.shiftKey = false; else this.shiftKey = shiftKey;
	this.relatedObject = relatedObject;
};
$hxClasses["openfl.events.FocusEvent"] = openfl.events.FocusEvent;
openfl.events.FocusEvent.__name__ = ["openfl","events","FocusEvent"];
openfl.events.FocusEvent.__super__ = openfl.events.Event;
openfl.events.FocusEvent.prototype = $extend(openfl.events.Event.prototype,{
	clone: function() {
		var event = new openfl.events.FocusEvent(this.type,this.bubbles,this.cancelable,this.relatedObject,this.shiftKey,this.keyCode);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	}
	,__class__: openfl.events.FocusEvent
});
openfl.events.HTTPStatusEvent = function(type,bubbles,cancelable,status) {
	if(status == null) status = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.status = status;
	openfl.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["openfl.events.HTTPStatusEvent"] = openfl.events.HTTPStatusEvent;
openfl.events.HTTPStatusEvent.__name__ = ["openfl","events","HTTPStatusEvent"];
openfl.events.HTTPStatusEvent.__super__ = openfl.events.Event;
openfl.events.HTTPStatusEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.HTTPStatusEvent
});
openfl.events.IOErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl.events.ErrorEvent.call(this,type,bubbles,cancelable,text,id);
};
$hxClasses["openfl.events.IOErrorEvent"] = openfl.events.IOErrorEvent;
openfl.events.IOErrorEvent.__name__ = ["openfl","events","IOErrorEvent"];
openfl.events.IOErrorEvent.__super__ = openfl.events.ErrorEvent;
openfl.events.IOErrorEvent.prototype = $extend(openfl.events.ErrorEvent.prototype,{
	clone: function() {
		return new openfl.events.IOErrorEvent(this.type,this.bubbles,this.cancelable,this.text,this.errorID);
	}
	,toString: function() {
		return "[IOErrorEvent type=" + this.type + " bubbles=" + Std.string(this.bubbles) + " cancelable=" + Std.string(this.cancelable) + " text=" + this.text + " errorID=" + this.errorID + "]";
	}
	,__class__: openfl.events.IOErrorEvent
});
openfl.events.KeyboardEvent = function(type,bubbles,cancelable,charCodeValue,keyCodeValue,keyLocationValue,ctrlKeyValue,altKeyValue,shiftKeyValue,controlKeyValue,commandKeyValue) {
	if(commandKeyValue == null) commandKeyValue = false;
	if(controlKeyValue == null) controlKeyValue = false;
	if(shiftKeyValue == null) shiftKeyValue = false;
	if(altKeyValue == null) altKeyValue = false;
	if(ctrlKeyValue == null) ctrlKeyValue = false;
	if(keyCodeValue == null) keyCodeValue = 0;
	if(charCodeValue == null) charCodeValue = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.charCode = charCodeValue;
	this.keyCode = keyCodeValue;
	if(keyLocationValue != null) this.keyLocation = keyLocationValue; else this.keyLocation = 0;
	this.ctrlKey = ctrlKeyValue;
	this.altKey = altKeyValue;
	this.shiftKey = shiftKeyValue;
	this.controlKey = controlKeyValue;
	this.commandKey = commandKeyValue;
};
$hxClasses["openfl.events.KeyboardEvent"] = openfl.events.KeyboardEvent;
openfl.events.KeyboardEvent.__name__ = ["openfl","events","KeyboardEvent"];
openfl.events.KeyboardEvent.__super__ = openfl.events.Event;
openfl.events.KeyboardEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.KeyboardEvent
});
openfl.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
};
$hxClasses["openfl.events.MouseEvent"] = openfl.events.MouseEvent;
openfl.events.MouseEvent.__name__ = ["openfl","events","MouseEvent"];
openfl.events.MouseEvent.__buttonDown = null;
openfl.events.MouseEvent.__create = function(type,event,local,target) {
	var delta = 2;
	if(type == openfl.events.MouseEvent.MOUSE_WHEEL) {
		var mouseEvent = event;
		if(mouseEvent.wheelDelta) delta = mouseEvent.wheelDelta / 120 | 0; else if(mouseEvent.detail) -mouseEvent.detail | 0;
	}
	if(type == openfl.events.MouseEvent.MOUSE_DOWN) openfl.events.MouseEvent.__buttonDown = true; else if(type == openfl.events.MouseEvent.MOUSE_UP) openfl.events.MouseEvent.__buttonDown = false;
	var pseudoEvent = new openfl.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,openfl.events.MouseEvent.__buttonDown,delta);
	pseudoEvent.stageX = openfl.Lib.current.stage.get_mouseX();
	pseudoEvent.stageY = openfl.Lib.current.stage.get_mouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
};
openfl.events.MouseEvent.__super__ = openfl.events.Event;
openfl.events.MouseEvent.prototype = $extend(openfl.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,__class__: openfl.events.MouseEvent
});
openfl.events.ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) bytesTotal = 0;
	if(bytesLoaded == null) bytesLoaded = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
$hxClasses["openfl.events.ProgressEvent"] = openfl.events.ProgressEvent;
openfl.events.ProgressEvent.__name__ = ["openfl","events","ProgressEvent"];
openfl.events.ProgressEvent.__super__ = openfl.events.Event;
openfl.events.ProgressEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.ProgressEvent
});
openfl.events.SecurityErrorEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.ErrorEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["openfl.events.SecurityErrorEvent"] = openfl.events.SecurityErrorEvent;
openfl.events.SecurityErrorEvent.__name__ = ["openfl","events","SecurityErrorEvent"];
openfl.events.SecurityErrorEvent.__super__ = openfl.events.ErrorEvent;
openfl.events.SecurityErrorEvent.prototype = $extend(openfl.events.ErrorEvent.prototype,{
	__class__: openfl.events.SecurityErrorEvent
});
openfl.events.TouchEvent = function(type,bubbles,cancelable,localX,localY,sizeX,sizeY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(sizeY == null) sizeY = 1;
	if(sizeX == null) sizeX = 1;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.pressure = 1;
	this.touchPointID = 0;
	this.isPrimaryTouchPoint = true;
};
$hxClasses["openfl.events.TouchEvent"] = openfl.events.TouchEvent;
openfl.events.TouchEvent.__name__ = ["openfl","events","TouchEvent"];
openfl.events.TouchEvent.__create = function(type,event,touch,local,target) {
	var evt = new openfl.events.TouchEvent(type,true,false,local.x,local.y,null,null,null,event.ctrlKey,event.altKey,event.shiftKey,false,0,null,0);
	evt.stageX = openfl.Lib.current.stage.get_mouseX();
	evt.stageY = openfl.Lib.current.stage.get_mouseY();
	evt.target = target;
	return evt;
};
openfl.events.TouchEvent.__super__ = openfl.events.Event;
openfl.events.TouchEvent.prototype = $extend(openfl.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,__class__: openfl.events.TouchEvent
});
openfl.filters = {};
openfl.filters.BitmapFilter = function() {
};
$hxClasses["openfl.filters.BitmapFilter"] = openfl.filters.BitmapFilter;
openfl.filters.BitmapFilter.__name__ = ["openfl","filters","BitmapFilter"];
openfl.filters.BitmapFilter.prototype = {
	clone: function() {
		return new openfl.filters.BitmapFilter();
	}
	,__applyFilter: function(sourceData,targetData,sourceRect,destPoint) {
	}
	,__class__: openfl.filters.BitmapFilter
};
openfl.geom = {};
openfl.geom.ColorTransform = function(redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset) {
	if(alphaOffset == null) alphaOffset = 0;
	if(blueOffset == null) blueOffset = 0;
	if(greenOffset == null) greenOffset = 0;
	if(redOffset == null) redOffset = 0;
	if(alphaMultiplier == null) alphaMultiplier = 1;
	if(blueMultiplier == null) blueMultiplier = 1;
	if(greenMultiplier == null) greenMultiplier = 1;
	if(redMultiplier == null) redMultiplier = 1;
	this.redMultiplier = redMultiplier;
	this.greenMultiplier = greenMultiplier;
	this.blueMultiplier = blueMultiplier;
	this.alphaMultiplier = alphaMultiplier;
	this.redOffset = redOffset;
	this.greenOffset = greenOffset;
	this.blueOffset = blueOffset;
	this.alphaOffset = alphaOffset;
};
$hxClasses["openfl.geom.ColorTransform"] = openfl.geom.ColorTransform;
openfl.geom.ColorTransform.__name__ = ["openfl","geom","ColorTransform"];
openfl.geom.ColorTransform.prototype = {
	concat: function(second) {
		this.redMultiplier += second.redMultiplier;
		this.greenMultiplier += second.greenMultiplier;
		this.blueMultiplier += second.blueMultiplier;
		this.alphaMultiplier += second.alphaMultiplier;
	}
	,get_color: function() {
		return (this.redOffset | 0) << 16 | (this.greenOffset | 0) << 8 | (this.blueOffset | 0);
	}
	,set_color: function(value) {
		this.redOffset = value >> 16 & 255;
		this.greenOffset = value >> 8 & 255;
		this.blueOffset = value & 255;
		this.redMultiplier = 0;
		this.greenMultiplier = 0;
		this.blueMultiplier = 0;
		return this.get_color();
	}
	,__class__: openfl.geom.ColorTransform
	,__properties__: {set_color:"set_color",get_color:"get_color"}
};
openfl.geom.Matrix = function(a,b,c,d,tx,ty) {
	if(ty == null) ty = 0;
	if(tx == null) tx = 0;
	if(d == null) d = 1;
	if(c == null) c = 0;
	if(b == null) b = 0;
	if(a == null) a = 1;
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.tx = tx;
	this.ty = ty;
};
$hxClasses["openfl.geom.Matrix"] = openfl.geom.Matrix;
openfl.geom.Matrix.__name__ = ["openfl","geom","Matrix"];
openfl.geom.Matrix.prototype = {
	clone: function() {
		return new openfl.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
	}
	,concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.ty = this.tx * m.b + this.ty * m.d + m.ty;
		this.tx = tx1;
	}
	,copyColumnFrom: function(column,vector3D) {
		if(column > 2) throw "Column " + column + " out of bounds (2)"; else if(column == 0) {
			this.a = vector3D.x;
			this.c = vector3D.y;
		} else if(column == 1) {
			this.b = vector3D.x;
			this.d = vector3D.y;
		} else {
			this.tx = vector3D.x;
			this.ty = vector3D.y;
		}
	}
	,copyColumnTo: function(column,vector3D) {
		if(column > 2) throw "Column " + column + " out of bounds (2)"; else if(column == 0) {
			vector3D.x = this.a;
			vector3D.y = this.c;
			vector3D.z = 0;
		} else if(column == 1) {
			vector3D.x = this.b;
			vector3D.y = this.d;
			vector3D.z = 0;
		} else {
			vector3D.x = this.tx;
			vector3D.y = this.ty;
			vector3D.z = 1;
		}
	}
	,copyFrom: function(sourceMatrix) {
		this.a = sourceMatrix.a;
		this.b = sourceMatrix.b;
		this.c = sourceMatrix.c;
		this.d = sourceMatrix.d;
		this.tx = sourceMatrix.tx;
		this.ty = sourceMatrix.ty;
	}
	,copyRowFrom: function(row,vector3D) {
		if(row > 2) throw "Row " + row + " out of bounds (2)"; else if(row == 0) {
			this.a = vector3D.x;
			this.c = vector3D.y;
		} else if(row == 1) {
			this.b = vector3D.x;
			this.d = vector3D.y;
		} else {
			this.tx = vector3D.x;
			this.ty = vector3D.y;
		}
	}
	,copyRowTo: function(row,vector3D) {
		if(row > 2) throw "Row " + row + " out of bounds (2)"; else if(row == 0) {
			vector3D.x = this.a;
			vector3D.y = this.b;
			vector3D.z = this.tx;
		} else if(row == 1) {
			vector3D.x = this.c;
			vector3D.y = this.d;
			vector3D.z = this.ty;
		} else {
			vector3D.x = 0;
			vector3D.y = 0;
			vector3D.z = 1;
		}
	}
	,createBox: function(scaleX,scaleY,rotation,tx,ty) {
		if(ty == null) ty = 0;
		if(tx == null) tx = 0;
		if(rotation == null) rotation = 0;
		this.a = scaleX;
		this.d = scaleY;
		this.b = rotation;
		this.tx = tx;
		this.ty = ty;
	}
	,createGradientBox: function(width,height,rotation,tx,ty) {
		if(ty == null) ty = 0;
		if(tx == null) tx = 0;
		if(rotation == null) rotation = 0;
		this.a = width / 1638.4;
		this.d = height / 1638.4;
		if(rotation != 0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.b = sin * this.d;
			this.c = -sin * this.a;
			this.a *= cos;
			this.d *= cos;
		} else {
			this.b = 0;
			this.c = 0;
		}
		this.tx = tx + width / 2;
		this.ty = ty + height / 2;
	}
	,equals: function(matrix) {
		return matrix != null && this.tx == matrix.tx && this.ty == matrix.ty && this.a == matrix.a && this.b == matrix.b && this.c == matrix.c && this.d == matrix.d;
	}
	,deltaTransformPoint: function(point) {
		return new openfl.geom.Point(point.x * this.a + point.y * this.c,point.x * this.b + point.y * this.d);
	}
	,identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.tx = 0;
		this.ty = 0;
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.tx = -this.tx;
			this.ty = -this.ty;
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.ty = -this.b * this.tx - this.d * this.ty;
			this.tx = tx1;
		}
		return this;
	}
	,mult: function(m) {
		var result = new openfl.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
		result.concat(m);
		return result;
	}
	,rotate: function(theta) {
		var cos = Math.cos(theta);
		var sin = Math.sin(theta);
		var a1 = this.a * cos - this.b * sin;
		this.b = this.a * sin + this.b * cos;
		this.a = a1;
		var c1 = this.c * cos - this.d * sin;
		this.d = this.c * sin + this.d * cos;
		this.c = c1;
		var tx1 = this.tx * cos - this.ty * sin;
		this.ty = this.tx * sin + this.ty * cos;
		this.tx = tx1;
	}
	,scale: function(sx,sy) {
		this.a *= sx;
		this.b *= sy;
		this.c *= sx;
		this.d *= sy;
		this.tx *= sx;
		this.ty *= sy;
	}
	,setRotation: function(theta,scale) {
		if(scale == null) scale = 1;
		this.a = Math.cos(theta) * scale;
		this.c = Math.sin(theta) * scale;
		this.b = -this.c;
		this.d = this.a;
	}
	,setTo: function(a,b,c,d,tx,ty) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
	}
	,to3DString: function(roundPixels) {
		if(roundPixels == null) roundPixels = false;
		if(roundPixels) return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + (this.tx | 0) + ", " + (this.ty | 0) + ", 0, 1)"; else return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", 0, 1)";
	}
	,toMozString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + "px, " + this.ty + "px)";
	}
	,toString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	}
	,transformPoint: function(pos) {
		return new openfl.geom.Point(pos.x * this.a + pos.y * this.c + this.tx,pos.x * this.b + pos.y * this.d + this.ty);
	}
	,translate: function(dx,dy) {
		var m = new openfl.geom.Matrix();
		m.tx = dx;
		m.ty = dy;
		this.concat(m);
	}
	,__cleanValues: function() {
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.tx = Math.round(this.tx * 10) / 10;
		this.ty = Math.round(this.ty * 10) / 10;
	}
	,__transformX: function(pos) {
		return pos.x * this.a + pos.y * this.c + this.tx;
	}
	,__transformY: function(pos) {
		return pos.x * this.b + pos.y * this.d + this.ty;
	}
	,__translateTransformed: function(pos) {
		this.tx = pos.x * this.a + pos.y * this.c + this.tx;
		this.ty = pos.x * this.b + pos.y * this.d + this.ty;
	}
	,__class__: openfl.geom.Matrix
};
openfl.geom.Point = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
};
$hxClasses["openfl.geom.Point"] = openfl.geom.Point;
openfl.geom.Point.__name__ = ["openfl","geom","Point"];
openfl.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
};
openfl.geom.Point.interpolate = function(pt1,pt2,f) {
	return new openfl.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
};
openfl.geom.Point.polar = function(len,angle) {
	return new openfl.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
};
openfl.geom.Point.prototype = {
	add: function(v) {
		return new openfl.geom.Point(v.x + this.x,v.y + this.y);
	}
	,clone: function() {
		return new openfl.geom.Point(this.x,this.y);
	}
	,equals: function(toCompare) {
		return toCompare != null && toCompare.x == this.x && toCompare.y == this.y;
	}
	,normalize: function(thickness) {
		if(this.x == 0 && this.y == 0) return; else {
			var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= norm;
			this.y *= norm;
		}
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,setTo: function(xa,ya) {
		this.x = xa;
		this.y = ya;
	}
	,subtract: function(v) {
		return new openfl.geom.Point(this.x - v.x,this.y - v.y);
	}
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,__class__: openfl.geom.Point
	,__properties__: {get_length:"get_length"}
};
openfl.geom.Rectangle = function(x,y,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
$hxClasses["openfl.geom.Rectangle"] = openfl.geom.Rectangle;
openfl.geom.Rectangle.__name__ = ["openfl","geom","Rectangle"];
openfl.geom.Rectangle.prototype = {
	clone: function() {
		return new openfl.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,contains: function(x,y) {
		return x >= this.x && y >= this.y && x < this.get_right() && y < this.get_bottom();
	}
	,containsPoint: function(point) {
		return this.contains(point.x,point.y);
	}
	,containsRect: function(rect) {
		if(rect.width <= 0 || rect.height <= 0) return rect.x > this.x && rect.y > this.y && rect.get_right() < this.get_right() && rect.get_bottom() < this.get_bottom(); else return rect.x >= this.x && rect.y >= this.y && rect.get_right() <= this.get_right() && rect.get_bottom() <= this.get_bottom();
	}
	,copyFrom: function(sourceRect) {
		this.x = sourceRect.x;
		this.y = sourceRect.y;
		this.width = sourceRect.width;
		this.height = sourceRect.height;
	}
	,equals: function(toCompare) {
		return toCompare != null && this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
	}
	,inflate: function(dx,dy) {
		this.x -= dx;
		this.width += dx * 2;
		this.y -= dy;
		this.height += dy * 2;
	}
	,inflatePoint: function(point) {
		this.inflate(point.x,point.y);
	}
	,intersection: function(toIntersect) {
		var x0;
		if(this.x < toIntersect.x) x0 = toIntersect.x; else x0 = this.x;
		var x1;
		if(this.get_right() > toIntersect.get_right()) x1 = toIntersect.get_right(); else x1 = this.get_right();
		if(x1 <= x0) return new openfl.geom.Rectangle();
		var y0;
		if(this.y < toIntersect.y) y0 = toIntersect.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() > toIntersect.get_bottom()) y1 = toIntersect.get_bottom(); else y1 = this.get_bottom();
		if(y1 <= y0) return new openfl.geom.Rectangle();
		return new openfl.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,intersects: function(toIntersect) {
		var x0;
		if(this.x < toIntersect.x) x0 = toIntersect.x; else x0 = this.x;
		var x1;
		if(this.get_right() > toIntersect.get_right()) x1 = toIntersect.get_right(); else x1 = this.get_right();
		if(x1 <= x0) return false;
		var y0;
		if(this.y < toIntersect.y) y0 = toIntersect.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() > toIntersect.get_bottom()) y1 = toIntersect.get_bottom(); else y1 = this.get_bottom();
		return y1 > y0;
	}
	,isEmpty: function() {
		return this.width <= 0 || this.height <= 0;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,offsetPoint: function(point) {
		this.x += point.x;
		this.y += point.y;
	}
	,setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	}
	,setTo: function(xa,ya,widtha,heighta) {
		this.x = xa;
		this.y = ya;
		this.width = widtha;
		this.height = heighta;
	}
	,transform: function(m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = tx0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		return new openfl.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	}
	,union: function(toUnion) {
		if(this.width == 0 || this.height == 0) return toUnion.clone(); else if(toUnion.width == 0 || toUnion.height == 0) return this.clone();
		var x0;
		if(this.x > toUnion.x) x0 = toUnion.x; else x0 = this.x;
		var x1;
		if(this.get_right() < toUnion.get_right()) x1 = toUnion.get_right(); else x1 = this.get_right();
		var y0;
		if(this.y > toUnion.y) y0 = toUnion.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() < toUnion.get_bottom()) y1 = toUnion.get_bottom(); else y1 = this.get_bottom();
		return new openfl.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,__contract: function(x,y,width,height) {
		if(this.width == 0 && this.height == 0) return;
		var cacheRight = this.get_right();
		var cacheBottom = this.get_bottom();
		if(this.x < x) this.x = x;
		if(this.y < y) this.y = y;
		if(this.get_right() > x + width) this.width = x + width - this.x;
		if(this.get_bottom() > y + height) this.height = y + height - this.y;
	}
	,__expand: function(x,y,width,height) {
		if(this.width == 0 && this.height == 0) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			return;
		}
		var cacheRight = this.get_right();
		var cacheBottom = this.get_bottom();
		if(this.x > x) this.x = x;
		if(this.y > y) this.y = y;
		if(cacheRight < x + width) this.width = x + width - this.x;
		if(cacheBottom < y + height) this.height = y + height - this.y;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,set_bottom: function(b) {
		this.height = b - this.y;
		return b;
	}
	,get_bottomRight: function() {
		return new openfl.geom.Point(this.x + this.width,this.y + this.height);
	}
	,set_bottomRight: function(p) {
		this.width = p.x - this.x;
		this.height = p.y - this.y;
		return p.clone();
	}
	,get_left: function() {
		return this.x;
	}
	,set_left: function(l) {
		this.width -= l - this.x;
		this.x = l;
		return l;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_right: function(r) {
		this.width = r - this.x;
		return r;
	}
	,get_size: function() {
		return new openfl.geom.Point(this.width,this.height);
	}
	,set_size: function(p) {
		this.width = p.x;
		this.height = p.y;
		return p.clone();
	}
	,get_top: function() {
		return this.y;
	}
	,set_top: function(t) {
		this.height -= t - this.y;
		this.y = t;
		return t;
	}
	,get_topLeft: function() {
		return new openfl.geom.Point(this.x,this.y);
	}
	,set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
	,__class__: openfl.geom.Rectangle
	,__properties__: {set_topLeft:"set_topLeft",get_topLeft:"get_topLeft",set_top:"set_top",get_top:"get_top",set_size:"set_size",get_size:"get_size",set_right:"set_right",get_right:"get_right",set_left:"set_left",get_left:"get_left",set_bottomRight:"set_bottomRight",get_bottomRight:"get_bottomRight",set_bottom:"set_bottom",get_bottom:"get_bottom"}
};
openfl.geom.Transform = function(displayObject) {
	this.colorTransform = new openfl.geom.ColorTransform();
	this.concatenatedColorTransform = new openfl.geom.ColorTransform();
	this.concatenatedMatrix = new openfl.geom.Matrix();
	this.pixelBounds = new openfl.geom.Rectangle();
	this.__displayObject = displayObject;
	this.__matrix = new openfl.geom.Matrix();
};
$hxClasses["openfl.geom.Transform"] = openfl.geom.Transform;
openfl.geom.Transform.__name__ = ["openfl","geom","Transform"];
openfl.geom.Transform.prototype = {
	get_matrix: function() {
		if(this.__matrix != null) {
			this.__matrix.identity();
			this.__matrix.scale(this.__displayObject.get_scaleX(),this.__displayObject.get_scaleY());
			this.__matrix.rotate(this.__displayObject.get_rotation() * (Math.PI / 180));
			this.__matrix.translate(this.__displayObject.get_x(),this.__displayObject.get_y());
			return this.__matrix.clone();
		}
		return null;
	}
	,set_matrix: function(value) {
		if(value == null) return this.__matrix = null;
		if(this.__displayObject != null) {
			this.__displayObject.set_x(value.tx);
			this.__displayObject.set_y(value.ty);
			this.__displayObject.set_scaleX(Math.sqrt(value.a * value.a + value.b * value.b));
			this.__displayObject.set_scaleY(Math.sqrt(value.c * value.c + value.d * value.d));
			this.__displayObject.set_rotation(Math.atan2(value.b,value.a) * (180 / Math.PI));
		}
		return value;
	}
	,__class__: openfl.geom.Transform
	,__properties__: {set_matrix:"set_matrix",get_matrix:"get_matrix"}
};
openfl.geom.Vector3D = function(x,y,z,w) {
	if(w == null) w = 0.;
	if(z == null) z = 0.;
	if(y == null) y = 0.;
	if(x == null) x = 0.;
	this.w = w;
	this.x = x;
	this.y = y;
	this.z = z;
};
$hxClasses["openfl.geom.Vector3D"] = openfl.geom.Vector3D;
openfl.geom.Vector3D.__name__ = ["openfl","geom","Vector3D"];
openfl.geom.Vector3D.__properties__ = {get_Z_AXIS:"get_Z_AXIS",get_Y_AXIS:"get_Y_AXIS",get_X_AXIS:"get_X_AXIS"}
openfl.geom.Vector3D.X_AXIS = null;
openfl.geom.Vector3D.Y_AXIS = null;
openfl.geom.Vector3D.Z_AXIS = null;
openfl.geom.Vector3D.angleBetween = function(a,b) {
	var a0 = new openfl.geom.Vector3D(a.x,a.y,a.z,a.w);
	a0.normalize();
	var b0 = new openfl.geom.Vector3D(b.x,b.y,b.z,b.w);
	b0.normalize();
	return Math.acos(a0.x * b0.x + a0.y * b0.y + a0.z * b0.z);
};
openfl.geom.Vector3D.distance = function(pt1,pt2) {
	var x = pt2.x - pt1.x;
	var y = pt2.y - pt1.y;
	var z = pt2.z - pt1.z;
	return Math.sqrt(x * x + y * y + z * z);
};
openfl.geom.Vector3D.get_X_AXIS = function() {
	return new openfl.geom.Vector3D(1,0,0);
};
openfl.geom.Vector3D.get_Y_AXIS = function() {
	return new openfl.geom.Vector3D(0,1,0);
};
openfl.geom.Vector3D.get_Z_AXIS = function() {
	return new openfl.geom.Vector3D(0,0,1);
};
openfl.geom.Vector3D.prototype = {
	add: function(a) {
		return new openfl.geom.Vector3D(this.x + a.x,this.y + a.y,this.z + a.z);
	}
	,clone: function() {
		return new openfl.geom.Vector3D(this.x,this.y,this.z,this.w);
	}
	,copyFrom: function(sourceVector3D) {
		this.x = sourceVector3D.x;
		this.y = sourceVector3D.y;
		this.z = sourceVector3D.z;
	}
	,crossProduct: function(a) {
		return new openfl.geom.Vector3D(this.y * a.z - this.z * a.y,this.z * a.x - this.x * a.z,this.x * a.y - this.y * a.x,1);
	}
	,decrementBy: function(a) {
		this.x -= a.x;
		this.y -= a.y;
		this.z -= a.z;
	}
	,dotProduct: function(a) {
		return this.x * a.x + this.y * a.y + this.z * a.z;
	}
	,equals: function(toCompare,allFour) {
		if(allFour == null) allFour = false;
		return this.x == toCompare.x && this.y == toCompare.y && this.z == toCompare.z && (!allFour || this.w == toCompare.w);
	}
	,incrementBy: function(a) {
		this.x += a.x;
		this.y += a.y;
		this.z += a.z;
	}
	,nearEquals: function(toCompare,tolerance,allFour) {
		if(allFour == null) allFour = false;
		return Math.abs(this.x - toCompare.x) < tolerance && Math.abs(this.y - toCompare.y) < tolerance && Math.abs(this.z - toCompare.z) < tolerance && (!allFour || Math.abs(this.w - toCompare.w) < tolerance);
	}
	,negate: function() {
		this.x *= -1;
		this.y *= -1;
		this.z *= -1;
	}
	,normalize: function() {
		var l = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
		if(l != 0) {
			this.x /= l;
			this.y /= l;
			this.z /= l;
		}
		return l;
	}
	,project: function() {
		this.x /= this.w;
		this.y /= this.w;
		this.z /= this.w;
	}
	,scaleBy: function(s) {
		this.x *= s;
		this.y *= s;
		this.z *= s;
	}
	,setTo: function(xa,ya,za) {
		this.x = xa;
		this.y = ya;
		this.z = za;
	}
	,subtract: function(a) {
		return new openfl.geom.Vector3D(this.x - a.x,this.y - a.y,this.z - a.z);
	}
	,toString: function() {
		return "Vector3D(" + this.x + ", " + this.y + ", " + this.z + ")";
	}
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	,get_lengthSquared: function() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	,__class__: openfl.geom.Vector3D
	,__properties__: {get_lengthSquared:"get_lengthSquared",get_length:"get_length"}
};
openfl.media = {};
openfl.media.ID3Info = function() {
};
$hxClasses["openfl.media.ID3Info"] = openfl.media.ID3Info;
openfl.media.ID3Info.__name__ = ["openfl","media","ID3Info"];
openfl.media.ID3Info.prototype = {
	__class__: openfl.media.ID3Info
};
openfl.media.Sound = function(stream,context) {
	openfl.events.EventDispatcher.call(this,this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.id3 = null;
	this.isBuffering = false;
	this.length = 0;
	this.url = null;
	if(stream != null) this.load(stream,context);
};
$hxClasses["openfl.media.Sound"] = openfl.media.Sound;
openfl.media.Sound.__name__ = ["openfl","media","Sound"];
openfl.media.Sound.__super__ = openfl.events.EventDispatcher;
openfl.media.Sound.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	close: function() {
		if(openfl.media.Sound.__registeredSounds.exists(this.__soundID)) createjs.Sound.removeSound(this.__soundID);
	}
	,load: function(stream,context) {
		this.url = stream.url;
		this.__soundID = haxe.io.Path.withoutExtension(stream.url);
		if(!openfl.media.Sound.__registeredSounds.exists(this.__soundID)) {
			openfl.media.Sound.__registeredSounds.set(this.__soundID,true);
			createjs.Sound.addEventListener("fileload",$bind(this,this.SoundJS_onFileLoad));
			createjs.Sound.addEventListener("fileerror",$bind(this,this.SoundJS_onLoadError));
			createjs.Sound.registerSound(this.url,this.__soundID);
		} else this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
	}
	,loadCompressedDataFromByteArray: function(bytes,bytesLength) {
		openfl.Lib.notImplemented("Sound.loadCompressedDataFromByteArray");
	}
	,loadPCMFromByteArray: function(bytes,samples,format,stereo,sampleRate) {
		if(sampleRate == null) sampleRate = 44100;
		if(stereo == null) stereo = true;
		openfl.Lib.notImplemented("Sound.loadPCMFromByteArray");
	}
	,play: function(startTime,loops,sndTransform) {
		if(loops == null) loops = 0;
		if(startTime == null) startTime = 0.0;
		if(sndTransform == null) sndTransform = new openfl.media.SoundTransform(1,0);
		var instance = createjs.Sound.play(this.__soundID,"any",0,startTime | 0,loops,sndTransform.volume,sndTransform.pan);
		return new openfl.media.SoundChannel(instance);
	}
	,get_id3: function() {
		return new openfl.media.ID3Info();
	}
	,SoundJS_onFileLoad: function(event) {
		if(event.id == this.__soundID) {
			createjs.Sound.removeEventListener("fileload",$bind(this,this.SoundJS_onFileLoad));
			createjs.Sound.removeEventListener("fileerror",$bind(this,this.SoundJS_onLoadError));
			this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
		}
	}
	,SoundJS_onLoadError: function(event) {
		if(event.id == this.__soundID) {
			createjs.Sound.removeEventListener("fileload",$bind(this,this.SoundJS_onFileLoad));
			createjs.Sound.removeEventListener("fileerror",$bind(this,this.SoundJS_onLoadError));
			this.dispatchEvent(new openfl.events.Event(openfl.events.Event.CANCEL));
		}
	}
	,__class__: openfl.media.Sound
	,__properties__: {get_id3:"get_id3"}
});
openfl.media.SoundChannel = function(soundInstance) {
	openfl.events.EventDispatcher.call(this,this);
	this.__soundInstance = soundInstance;
	this.__soundInstance.addEventListener("complete",$bind(this,this.soundInstance_onComplete));
};
$hxClasses["openfl.media.SoundChannel"] = openfl.media.SoundChannel;
openfl.media.SoundChannel.__name__ = ["openfl","media","SoundChannel"];
openfl.media.SoundChannel.__super__ = openfl.events.EventDispatcher;
openfl.media.SoundChannel.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	stop: function() {
		this.__soundInstance.stop();
	}
	,__dispose: function() {
		this.__soundInstance.stop();
		this.__soundInstance = null;
	}
	,get_position: function() {
		return this.__soundInstance.getPosition();
	}
	,set_position: function(value) {
		this.__soundInstance.setPosition(value | 0);
		return this.__soundInstance.getPosition();
	}
	,get_soundTransform: function() {
		return new openfl.media.SoundTransform(this.__soundInstance.getVolume(),this.__soundInstance.getPan());
	}
	,set_soundTransform: function(value) {
		this.__soundInstance.setVolume(value.volume);
		this.__soundInstance.setPan(value.pan);
		return value;
	}
	,soundInstance_onComplete: function(_) {
		this.dispatchEvent(new openfl.events.Event(openfl.events.Event.SOUND_COMPLETE));
	}
	,__class__: openfl.media.SoundChannel
	,__properties__: {set_soundTransform:"set_soundTransform",get_soundTransform:"get_soundTransform",set_position:"set_position",get_position:"get_position"}
});
openfl.media.SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	if(bufferTime == null) bufferTime = 0;
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["openfl.media.SoundLoaderContext"] = openfl.media.SoundLoaderContext;
openfl.media.SoundLoaderContext.__name__ = ["openfl","media","SoundLoaderContext"];
openfl.media.SoundLoaderContext.prototype = {
	__class__: openfl.media.SoundLoaderContext
};
openfl.media.SoundTransform = function(vol,panning) {
	if(panning == null) panning = 0;
	if(vol == null) vol = 1;
	this.volume = vol;
	this.pan = panning;
	this.leftToLeft = 0;
	this.leftToRight = 0;
	this.rightToLeft = 0;
	this.rightToRight = 0;
};
$hxClasses["openfl.media.SoundTransform"] = openfl.media.SoundTransform;
openfl.media.SoundTransform.__name__ = ["openfl","media","SoundTransform"];
openfl.media.SoundTransform.prototype = {
	__class__: openfl.media.SoundTransform
};
openfl.net = {};
openfl.net.URLLoader = function(request) {
	openfl.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.set_dataFormat(openfl.net.URLLoaderDataFormat.TEXT);
	if(request != null) this.load(request);
};
$hxClasses["openfl.net.URLLoader"] = openfl.net.URLLoader;
openfl.net.URLLoader.__name__ = ["openfl","net","URLLoader"];
openfl.net.URLLoader.__super__ = openfl.events.EventDispatcher;
openfl.net.URLLoader.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	close: function() {
	}
	,getData: function() {
		return null;
	}
	,load: function(request) {
		this.requestUrl(request.url,request.method,request.data,request.formatRequestHeaders());
	}
	,registerEvents: function(subject) {
		var self = this;
		if(typeof XMLHttpRequestProgressEvent != "undefined") subject.addEventListener("progress",$bind(this,this.onProgress),false);
		subject.onreadystatechange = function() {
			if(subject.readyState != 4) return;
			var s;
			try {
				s = subject.status;
			} catch( e ) {
				s = null;
			}
			if(s == undefined) s = null;
			if(s != null) self.onStatus(s);
			if(s != null && s >= 200 && s < 400) self.onData(subject.response); else if(s == null) self.onError("Failed to connect or resolve host"); else if(s == 12029) self.onError("Failed to connect to host"); else if(s == 12007) self.onError("Unknown host"); else if(s == 0) {
				self.onError("Unable to make request (may be blocked due to cross-domain permissions)");
				self.onSecurityError("Unable to make request (may be blocked due to cross-domain permissions)");
			} else self.onError("Http Error #" + subject.status);
		};
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js.Boot.__instanceof(data,openfl.utils.ByteArray)) {
			var data1 = data;
			var _g = this.dataFormat;
			switch(_g[1]) {
			case 0:
				uri = data1.data.buffer;
				break;
			default:
				uri = data1.readUTFBytes(data1.length);
			}
		} else if(js.Boot.__instanceof(data,openfl.net.URLVariables)) {
			var data2 = data;
			var _g1 = 0;
			var _g11 = Reflect.fields(data2);
			while(_g1 < _g11.length) {
				var p = _g11[_g1];
				++_g1;
				if(uri.length != 0) uri += "&";
				uri += encodeURIComponent(p) + "=" + StringTools.urlEncode(Reflect.field(data2,p));
			}
		} else if(data != null) uri = data.toString();
		try {
			if(method == "GET" && uri != null && uri != "") {
				var question = url.split("?").length <= 1;
				xmlHttpRequest.open(method,url + (question?"?":"&") + Std.string(uri),true);
				uri = "";
			} else xmlHttpRequest.open(method,url,true);
		} catch( e ) {
			this.onError(e.toString());
			return;
		}
		var _g2 = this.dataFormat;
		switch(_g2[1]) {
		case 0:
			xmlHttpRequest.responseType = "arraybuffer";
			break;
		default:
		}
		var _g3 = 0;
		while(_g3 < requestHeaders.length) {
			var header = requestHeaders[_g3];
			++_g3;
			xmlHttpRequest.setRequestHeader(header.name,header.value);
		}
		xmlHttpRequest.send(uri);
		this.onOpen();
		this.getData = function() {
			if(xmlHttpRequest.response != null) return xmlHttpRequest.response; else return xmlHttpRequest.responseText;
		};
	}
	,onData: function(_) {
		var content = this.getData();
		var _g = this.dataFormat;
		switch(_g[1]) {
		case 0:
			this.data = openfl.utils.ByteArray.__ofBuffer(content);
			break;
		default:
			this.data = Std.string(content);
		}
		var evt = new openfl.events.Event(openfl.events.Event.COMPLETE);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onError: function(msg) {
		var evt = new openfl.events.IOErrorEvent(openfl.events.IOErrorEvent.IO_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onOpen: function() {
		var evt = new openfl.events.Event(openfl.events.Event.OPEN);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onProgress: function(event) {
		var evt = new openfl.events.ProgressEvent(openfl.events.ProgressEvent.PROGRESS);
		evt.currentTarget = this;
		evt.bytesLoaded = event.loaded;
		evt.bytesTotal = event.total;
		this.dispatchEvent(evt);
	}
	,onSecurityError: function(msg) {
		var evt = new openfl.events.SecurityErrorEvent(openfl.events.SecurityErrorEvent.SECURITY_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onStatus: function(status) {
		var evt = new openfl.events.HTTPStatusEvent(openfl.events.HTTPStatusEvent.HTTP_STATUS,false,false,status);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,set_dataFormat: function(inputVal) {
		if(inputVal == openfl.net.URLLoaderDataFormat.BINARY && !Reflect.hasField(window,"ArrayBuffer")) this.dataFormat = openfl.net.URLLoaderDataFormat.TEXT; else this.dataFormat = inputVal;
		return this.dataFormat;
	}
	,__class__: openfl.net.URLLoader
	,__properties__: {set_dataFormat:"set_dataFormat"}
});
openfl.net.URLLoaderDataFormat = $hxClasses["openfl.net.URLLoaderDataFormat"] = { __ename__ : true, __constructs__ : ["BINARY","TEXT","VARIABLES"] };
openfl.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
openfl.net.URLLoaderDataFormat.BINARY.toString = $estr;
openfl.net.URLLoaderDataFormat.BINARY.__enum__ = openfl.net.URLLoaderDataFormat;
openfl.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
openfl.net.URLLoaderDataFormat.TEXT.toString = $estr;
openfl.net.URLLoaderDataFormat.TEXT.__enum__ = openfl.net.URLLoaderDataFormat;
openfl.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
openfl.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
openfl.net.URLLoaderDataFormat.VARIABLES.__enum__ = openfl.net.URLLoaderDataFormat;
openfl.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = openfl.net.URLRequestMethod.GET;
	this.contentType = null;
};
$hxClasses["openfl.net.URLRequest"] = openfl.net.URLRequest;
openfl.net.URLRequest.__name__ = ["openfl","net","URLRequest"];
openfl.net.URLRequest.prototype = {
	formatRequestHeaders: function() {
		var res = this.requestHeaders;
		if(res == null) res = [];
		if(this.method == openfl.net.URLRequestMethod.GET || this.data == null) return res;
		if(typeof(this.data) == "string" || js.Boot.__instanceof(this.data,openfl.utils.ByteArray)) {
			res = res.slice();
			res.push(new openfl.net.URLRequestHeader("Content-Type",this.contentType != null?this.contentType:"application/x-www-form-urlencoded"));
		}
		return res;
	}
	,__class__: openfl.net.URLRequest
};
openfl.net.URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["openfl.net.URLRequestHeader"] = openfl.net.URLRequestHeader;
openfl.net.URLRequestHeader.__name__ = ["openfl","net","URLRequestHeader"];
openfl.net.URLRequestHeader.prototype = {
	__class__: openfl.net.URLRequestHeader
};
openfl.net.URLRequestMethod = function() { };
$hxClasses["openfl.net.URLRequestMethod"] = openfl.net.URLRequestMethod;
openfl.net.URLRequestMethod.__name__ = ["openfl","net","URLRequestMethod"];
openfl.net.URLVariables = function(inEncoded) {
	if(inEncoded != null) this.decode(inEncoded);
};
$hxClasses["openfl.net.URLVariables"] = openfl.net.URLVariables;
openfl.net.URLVariables.__name__ = ["openfl","net","URLVariables"];
openfl.net.URLVariables.prototype = {
	decode: function(inVars) {
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			Reflect.deleteField(this,f);
		}
		var fields1 = inVars.split(";").join("&").split("&");
		var _g1 = 0;
		while(_g1 < fields1.length) {
			var f1 = fields1[_g1];
			++_g1;
			var eq = f1.indexOf("=");
			if(eq > 0) Reflect.setField(this,StringTools.urlDecode(HxOverrides.substr(f1,0,eq)),StringTools.urlDecode(HxOverrides.substr(f1,eq + 1,null))); else if(eq != 0) Reflect.setField(this,decodeURIComponent(f1.split("+").join(" ")),"");
		}
	}
	,toString: function() {
		var result = new Array();
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			result.push(encodeURIComponent(f) + "=" + StringTools.urlEncode(Reflect.field(this,f)));
		}
		return result.join("&");
	}
	,__class__: openfl.net.URLVariables
};
openfl.system = {};
openfl.system.ApplicationDomain = function(parentDomain) {
	if(parentDomain != null) this.parentDomain = parentDomain; else this.parentDomain = openfl.system.ApplicationDomain.currentDomain;
};
$hxClasses["openfl.system.ApplicationDomain"] = openfl.system.ApplicationDomain;
openfl.system.ApplicationDomain.__name__ = ["openfl","system","ApplicationDomain"];
openfl.system.ApplicationDomain.prototype = {
	getDefinition: function(name) {
		return Type.resolveClass(name);
	}
	,hasDefinition: function(name) {
		return Type.resolveClass(name) != null;
	}
	,__class__: openfl.system.ApplicationDomain
};
openfl.system.LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
	this.securityDomain = securityDomain;
	this.applicationDomain = applicationDomain;
	this.allowCodeImport = true;
	this.allowLoadBytesCodeExecution = true;
};
$hxClasses["openfl.system.LoaderContext"] = openfl.system.LoaderContext;
openfl.system.LoaderContext.__name__ = ["openfl","system","LoaderContext"];
openfl.system.LoaderContext.prototype = {
	__class__: openfl.system.LoaderContext
};
openfl.system.SecurityDomain = function() {
};
$hxClasses["openfl.system.SecurityDomain"] = openfl.system.SecurityDomain;
openfl.system.SecurityDomain.__name__ = ["openfl","system","SecurityDomain"];
openfl.system.SecurityDomain.prototype = {
	__class__: openfl.system.SecurityDomain
};
openfl.text = {};
openfl.text.Font = function() {
};
$hxClasses["openfl.text.Font"] = openfl.text.Font;
openfl.text.Font.__name__ = ["openfl","text","Font"];
openfl.text.Font.enumerateFonts = function(enumerateDeviceFonts) {
	if(enumerateDeviceFonts == null) enumerateDeviceFonts = false;
	return [];
};
openfl.text.Font.registerFont = function(font) {
};
openfl.text.Font.prototype = {
	__class__: openfl.text.Font
};
openfl.text.FontStyle = $hxClasses["openfl.text.FontStyle"] = { __ename__ : true, __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] };
openfl.text.FontStyle.REGULAR = ["REGULAR",0];
openfl.text.FontStyle.REGULAR.toString = $estr;
openfl.text.FontStyle.REGULAR.__enum__ = openfl.text.FontStyle;
openfl.text.FontStyle.ITALIC = ["ITALIC",1];
openfl.text.FontStyle.ITALIC.toString = $estr;
openfl.text.FontStyle.ITALIC.__enum__ = openfl.text.FontStyle;
openfl.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
openfl.text.FontStyle.BOLD_ITALIC.toString = $estr;
openfl.text.FontStyle.BOLD_ITALIC.__enum__ = openfl.text.FontStyle;
openfl.text.FontStyle.BOLD = ["BOLD",3];
openfl.text.FontStyle.BOLD.toString = $estr;
openfl.text.FontStyle.BOLD.__enum__ = openfl.text.FontStyle;
openfl.text.FontType = $hxClasses["openfl.text.FontType"] = { __ename__ : true, __constructs__ : ["DEVICE","EMBEDDED","EMBEDDED_CFF"] };
openfl.text.FontType.DEVICE = ["DEVICE",0];
openfl.text.FontType.DEVICE.toString = $estr;
openfl.text.FontType.DEVICE.__enum__ = openfl.text.FontType;
openfl.text.FontType.EMBEDDED = ["EMBEDDED",1];
openfl.text.FontType.EMBEDDED.toString = $estr;
openfl.text.FontType.EMBEDDED.__enum__ = openfl.text.FontType;
openfl.text.FontType.EMBEDDED_CFF = ["EMBEDDED_CFF",2];
openfl.text.FontType.EMBEDDED_CFF.toString = $estr;
openfl.text.FontType.EMBEDDED_CFF.__enum__ = openfl.text.FontType;
openfl.ui = {};
openfl.ui._KeyLocation = {};
openfl.ui._KeyLocation.KeyLocation_Impl_ = function() { };
$hxClasses["openfl.ui._KeyLocation.KeyLocation_Impl_"] = openfl.ui._KeyLocation.KeyLocation_Impl_;
openfl.ui._KeyLocation.KeyLocation_Impl_.__name__ = ["openfl","ui","_KeyLocation","KeyLocation_Impl_"];
openfl.ui.Keyboard = function() { };
$hxClasses["openfl.ui.Keyboard"] = openfl.ui.Keyboard;
openfl.ui.Keyboard.__name__ = ["openfl","ui","Keyboard"];
openfl.ui.Keyboard.capsLock = null;
openfl.ui.Keyboard.numLock = null;
openfl.ui.Keyboard.isAccessible = function() {
	return false;
};
openfl.ui.Keyboard.__convertMozillaCode = function(code) {
	switch(code) {
	case 8:
		return 8;
	case 9:
		return 9;
	case 13:
		return 13;
	case 14:
		return 13;
	case 16:
		return 16;
	case 17:
		return 17;
	case 20:
		return 20;
	case 27:
		return 27;
	case 32:
		return 32;
	case 33:
		return 33;
	case 34:
		return 34;
	case 35:
		return 35;
	case 36:
		return 36;
	case 37:
		return 37;
	case 39:
		return 39;
	case 38:
		return 38;
	case 40:
		return 40;
	case 45:
		return 45;
	case 46:
		return 46;
	case 144:
		return 144;
	default:
		return code;
	}
};
openfl.ui.Keyboard.__convertWebkitCode = function(code) {
	var _g = code.toLowerCase();
	switch(_g) {
	case "backspace":
		return 8;
	case "tab":
		return 9;
	case "enter":
		return 13;
	case "shift":
		return 16;
	case "control":
		return 17;
	case "capslock":
		return 20;
	case "escape":
		return 27;
	case "space":
		return 32;
	case "pageup":
		return 33;
	case "pagedown":
		return 34;
	case "end":
		return 35;
	case "home":
		return 36;
	case "left":
		return 37;
	case "right":
		return 39;
	case "up":
		return 38;
	case "down":
		return 40;
	case "insert":
		return 45;
	case "delete":
		return 46;
	case "numlock":
		return 144;
	case "break":
		return 19;
	}
	if(code.indexOf("U+") == 0) return Std.parseInt("0x" + HxOverrides.substr(code,3,null));
	throw "Unrecognized key code: " + code;
	return 0;
};
openfl.utils = {};
openfl.utils.ByteArray = function() {
	this.littleEndian = false;
	this.allocated = 0;
	this.position = 0;
	this.length = 0;
	this.___resizeBuffer(this.allocated);
};
$hxClasses["openfl.utils.ByteArray"] = openfl.utils.ByteArray;
openfl.utils.ByteArray.__name__ = ["openfl","utils","ByteArray"];
openfl.utils.ByteArray.fromBytes = function(inBytes) {
	var result = new openfl.utils.ByteArray();
	result.byteView = new Uint8Array(inBytes.b);
	result.set_length(result.byteView.length);
	result.allocated = result.length;
	return result;
};
openfl.utils.ByteArray.__ofBuffer = function(buffer) {
	var bytes = new openfl.utils.ByteArray();
	bytes.set_length(bytes.allocated = buffer.byteLength);
	bytes.data = new DataView(buffer);
	bytes.byteView = new Uint8Array(buffer);
	return bytes;
};
openfl.utils.ByteArray.prototype = {
	clear: function() {
		if(this.allocated < 0) this.___resizeBuffer(this.allocated = Std["int"](Math.max(0,this.allocated * 2))); else if(this.allocated > 0) this.___resizeBuffer(this.allocated = 0);
		this.length = 0;
		0;
		this.position = 0;
	}
	,readBoolean: function() {
		return this.readByte() != 0;
	}
	,readByte: function() {
		var data = this.data;
		return data.getInt8(this.position++);
	}
	,readBytes: function(bytes,offset,length) {
		if(length == null) length = 0;
		if(offset == null) offset = 0;
		if(offset < 0 || length < 0) throw new openfl.errors.IOError("Read error - Out of bounds");
		if(length == 0) length = this.length - this.position;
		var lengthToEnsure = offset + length;
		if(bytes.length < lengthToEnsure) {
			if(bytes.allocated < lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = Std["int"](Math.max(lengthToEnsure,bytes.allocated * 2))); else if(bytes.allocated > lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = lengthToEnsure);
			bytes.length = lengthToEnsure;
			lengthToEnsure;
		}
		bytes.byteView.set(this.byteView.subarray(this.position,this.position + length),offset);
		bytes.position = offset;
		this.position += length;
		if(bytes.position + length > bytes.length) bytes.set_length(bytes.position + length);
	}
	,readDouble: function() {
		var $double = this.data.getFloat64(this.position,this.littleEndian);
		this.position += 8;
		return $double;
	}
	,readFloat: function() {
		var $float = this.data.getFloat32(this.position,this.littleEndian);
		this.position += 4;
		return $float;
	}
	,readFullBytes: function(bytes,pos,len) {
		if(this.length < len) {
			if(this.allocated < len) this.___resizeBuffer(this.allocated = Std["int"](Math.max(len,this.allocated * 2))); else if(this.allocated > len) this.___resizeBuffer(this.allocated = len);
			this.length = len;
			len;
		}
		var _g1 = pos;
		var _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			var data = this.data;
			data.setInt8(this.position++,bytes.b[i]);
		}
	}
	,readInt: function() {
		var $int = this.data.getInt32(this.position,this.littleEndian);
		this.position += 4;
		return $int;
	}
	,readMultiByte: function(length,charSet) {
		return this.readUTFBytes(length);
	}
	,readShort: function() {
		var $short = this.data.getInt16(this.position,this.littleEndian);
		this.position += 2;
		return $short;
	}
	,readUnsignedByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readUnsignedInt: function() {
		var uInt = this.data.getUint32(this.position,this.littleEndian);
		this.position += 4;
		return uInt;
	}
	,readUnsignedShort: function() {
		var uShort = this.data.getUint16(this.position,this.littleEndian);
		this.position += 2;
		return uShort;
	}
	,readUTF: function() {
		var bytesCount = this.readUnsignedShort();
		return this.readUTFBytes(bytesCount);
	}
	,readUTFBytes: function(len) {
		var value = "";
		var max = this.position + len;
		while(this.position < max) {
			var data = this.data;
			var c = data.getUint8(this.position++);
			if(c < 128) {
				if(c == 0) break;
				value += String.fromCharCode(c);
			} else if(c < 224) value += String.fromCharCode((c & 63) << 6 | data.getUint8(this.position++) & 127); else if(c < 240) {
				var c2 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 31) << 12 | (c2 & 127) << 6 | data.getUint8(this.position++) & 127);
			} else {
				var c21 = data.getUint8(this.position++);
				var c3 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 15) << 18 | (c21 & 127) << 12 | c3 << 6 & 127 | data.getUint8(this.position++) & 127);
			}
		}
		return value;
	}
	,toString: function() {
		var cachePosition = this.position;
		this.position = 0;
		var value = this.readUTFBytes(this.length);
		this.position = cachePosition;
		return value;
	}
	,writeBoolean: function(value) {
		this.writeByte(value?1:0);
	}
	,writeByte: function(value) {
		var lengthToEnsure = this.position + 1;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		var data = this.data;
		data.setInt8(this.position,value);
		this.position += 1;
	}
	,writeBytes: function(bytes,offset,length) {
		if(length == null) length = 0;
		if(offset == null) offset = 0;
		if(offset < 0 || length < 0) throw new openfl.errors.IOError("Write error - Out of bounds");
		if(length == 0) length = bytes.length;
		var lengthToEnsure = this.position + length;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.byteView.set(bytes.byteView.subarray(offset,offset + length),this.position);
		this.position += length;
	}
	,writeDouble: function(x) {
		var lengthToEnsure = this.position + 8;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat64(this.position,x,this.littleEndian);
		this.position += 8;
	}
	,writeFloat: function(x) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat32(this.position,x,this.littleEndian);
		this.position += 4;
	}
	,writeInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUnsignedInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeUnsignedShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUTF: function(value) {
		this.writeUnsignedShort(this._getUTFBytesCount(value));
		this.writeUTFBytes(value);
	}
	,writeUTFBytes: function(value) {
		var _g1 = 0;
		var _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) this.writeByte(c); else if(c <= 2047) {
				this.writeByte(192 | c >> 6);
				this.writeByte(128 | c & 63);
			} else if(c <= 65535) {
				this.writeByte(224 | c >> 12);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			} else {
				this.writeByte(240 | c >> 18);
				this.writeByte(128 | c >> 12 & 63);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			}
		}
	}
	,__fromBytes: function(inBytes) {
		this.byteView = new Uint8Array(inBytes.b);
		this.set_length(this.byteView.length);
		this.allocated = this.length;
	}
	,__get: function(pos) {
		return this.data.getInt8(pos);
	}
	,_getUTFBytesCount: function(value) {
		var count = 0;
		var _g1 = 0;
		var _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) count += 1; else if(c <= 2047) count += 2; else if(c <= 65535) count += 3; else count += 4;
		}
		return count;
	}
	,___resizeBuffer: function(len) {
		var oldByteView = this.byteView;
		var newByteView = new Uint8Array(len);
		if(oldByteView != null) {
			if(oldByteView.length <= len) newByteView.set(oldByteView); else newByteView.set(oldByteView.subarray(0,len));
		}
		this.byteView = newByteView;
		this.data = new DataView(newByteView.buffer);
	}
	,__getBuffer: function() {
		return this.data.buffer;
	}
	,__set: function(pos,v) {
		this.data.setUint8(pos,v);
	}
	,get_bytesAvailable: function() {
		return this.length - this.position;
	}
	,get_endian: function() {
		if(this.littleEndian) return "littleEndian"; else return "bigEndian";
	}
	,set_endian: function(endian) {
		this.littleEndian = endian == "littleEndian";
		return endian;
	}
	,set_length: function(value) {
		if(this.allocated < value) this.___resizeBuffer(this.allocated = Std["int"](Math.max(value,this.allocated * 2))); else if(this.allocated > value) this.___resizeBuffer(this.allocated = value);
		this.length = value;
		return value;
	}
	,__class__: openfl.utils.ByteArray
	,__properties__: {set_length:"set_length",set_endian:"set_endian",get_endian:"get_endian",get_bytesAvailable:"get_bytesAvailable"}
};
openfl.utils.Endian = function() { };
$hxClasses["openfl.utils.Endian"] = openfl.utils.Endian;
openfl.utils.Endian.__name__ = ["openfl","utils","Endian"];
var screens = {};
screens.GameOverScreen = function() {
	openfl.display.Sprite.call(this);
	this.backGround = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/background/gameOverScreen.png"));
	this.addChild(this.backGround);
	this.retryBtn = new carlstillo.ui.Button(548,640,"img/buttons/btnRetry.png","img/buttons/btnPressRetry.png");
	this.addChild(this.retryBtn);
	this.retryBtn.addEventListener(openfl.events.MouseEvent.MOUSE_DOWN,$bind(this,this.retryBtnClicked));
	this.quitBtn = new carlstillo.ui.Button(914,640,"img/buttons/btnQuit.png","img/buttons/btnPressQuit.png");
	this.addChild(this.quitBtn);
	this.quitBtn.addEventListener(openfl.events.MouseEvent.MOUSE_DOWN,$bind(this,this.quitBtnClicked));
	this.scoreDisplay = carlstillo.display.Numbers.getDisplay(Math.floor(GlobalValues.finalScore),"img/ui/gameover numbers/");
	this.scoreDisplay.set_x(533 + (641 - this.scoreDisplay.get_width()) * 0.5);
	this.scoreDisplay.set_y(GlobalValues.gameHeight * 0.425);
	this.addChild(this.scoreDisplay);
};
$hxClasses["screens.GameOverScreen"] = screens.GameOverScreen;
screens.GameOverScreen.__name__ = ["screens","GameOverScreen"];
screens.GameOverScreen.__super__ = openfl.display.Sprite;
screens.GameOverScreen.prototype = $extend(openfl.display.Sprite.prototype,{
	retryBtnClicked: function(e) {
		carlstillo.ui.ScreenManager.requestSwitchScreen(this.parent,carlstillo.ui.ScreenType.Game);
	}
	,quitBtnClicked: function(e) {
		carlstillo.ui.ScreenManager.requestSwitchScreen(this.parent,carlstillo.ui.ScreenType.Title);
	}
	,__class__: screens.GameOverScreen
});
screens.GameScreen = function() {
	this.multiplierPath = ["img/ui/x2.png","img/ui/x3.png","img/ui/x4.png"];
	this.sectionIndex = 0;
	this.previousAreaIndex = -1;
	openfl.display.Sprite.call(this);
	this.createDisplay();
	this.sectionWidth = 828 / 3;
	this.individualAreaWidth = this.sectionWidth / 3;
	this.lastTime = 0;
	this.frameCounter = 0;
	this.addEventListener(openfl.events.Event.ENTER_FRAME,$bind(this,this.update));
	this.addEventListener(openfl.events.MouseEvent.MOUSE_MOVE,$bind(this,this.movePlayer));
	this.startLabel = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/ui/start.png"));
	this.startLabel.set_x((GlobalValues.gameWidth - this.startLabel.get_width()) * 0.5);
	this.startLabel.set_y(0);
	this.addChild(this.startLabel);
	motion.Actuate.tween(this.startLabel,0.5,{ y : (GlobalValues.gameHeight - this.startLabel.get_height()) * 0.5}).onComplete($bind(this,this.removeStartLabel));
	this.startGame();
	com.indigogaming.wnpdispatcher.WNPInterface.get_instance().addEventListener("pause",$bind(this,this.pause));
	com.indigogaming.wnpdispatcher.WNPInterface.get_instance().addEventListener("unpause",$bind(this,this.resume));
};
$hxClasses["screens.GameScreen"] = screens.GameScreen;
screens.GameScreen.__name__ = ["screens","GameScreen"];
screens.GameScreen.__super__ = openfl.display.Sprite;
screens.GameScreen.prototype = $extend(openfl.display.Sprite.prototype,{
	removeStartLabel: function() {
		motion.Actuate.tween(this.startLabel,0.5,{ alpha : 0}).onComplete($bind(this,this.removeChild),[this.startLabel]);
	}
	,startGame: function() {
		this.scoreMultiplier = 1;
		this.updateMultiplier();
		this.score = 0;
		this.comboCounter = 0;
		this.missCounter = 0;
		this.spawnFrameCount = 25;
		this.speed = 2;
		this.npcWalkTime = (this.spawnFrameCount - 5) / 60;
		this.itemCounter = 0;
		this.stunEndFrame = 0;
		this.playerStunned = false;
		this.fallingItemsList = new Array();
		this.foodCounter = 0;
	}
	,update: function(e) {
		if(this.fallingItemsList.length > 0) this.moveItems();
		if(this.frameCounter % this.spawnFrameCount == 0) this.spawnItem();
		this.delta = openfl.Lib.getTimer() - this.lastTime;
		this.player.getSprite().update(this.delta);
		this.npc.getSprite().update(this.delta);
		this.lastTime = openfl.Lib.getTimer();
		if(this.frameCounter % 5 == 0) {
			if(this.previousX == this.player.get_x()) {
				if(this.player.checkState() != 0 && this.player.checkState() != 3) this.player.changeCharState(0);
			} else if(this.player.checkState() != 1 && this.player.checkState() != 3) this.player.changeCharState(1);
			this.previousX = this.player.get_x();
		}
		this.frameCounter++;
	}
	,incrementScore: function(baseValue) {
		this.score += baseValue * this.scoreMultiplier;
		this.updateMultiplier();
		motion.Actuate.timer(0).onComplete($bind(this,this.comboCalculator));
		haxe.Log.trace("SCORE:\t " + baseValue + " x " + this.scoreMultiplier + "(" + this.comboCounter + ")\t" + this.score,{ fileName : "GameScreen.hx", lineNumber : 185, className : "screens.GameScreen", methodName : "incrementScore"});
		this.showScore(this.score);
		this.foodCounter++;
		if(this.foodCounter % 15 == 0) this.increaseDifficulty();
	}
	,comboCalculator: function() {
		this.comboCounter++;
		if(this.comboCounter == 5 && this.scoreMultiplier < 3) {
			this.scoreMultiplier++;
			this.comboCounter = 0;
		} else if(this.scoreMultiplier == 3 && this.comboCounter == 10) this.scoreMultiplier = 4;
	}
	,increaseDifficulty: function() {
		if(this.spawnFrameCount > 20 && this.speed < 50) this.speed += 2;
	}
	,gameOver: function() {
		haxe.Log.trace("Game Over!",{ fileName : "GameScreen.hx", lineNumber : 221, className : "screens.GameScreen", methodName : "gameOver"});
		haxe.Log.trace("Difficulty:" + "\n\tSpeed: " + this.speed + "\n\tDrop Rate: " + this.spawnFrameCount,{ fileName : "GameScreen.hx", lineNumber : 222, className : "screens.GameScreen", methodName : "gameOver"});
		this.removeEventListener(openfl.events.Event.ENTER_FRAME,$bind(this,this.update));
		carlstillo.utils.SoundManager.playSFX(carlstillo.utils.SoundManager.gameOverSfx);
		GlobalValues.finalScore = this.score;
		com.indigogaming.wnpdispatcher.WNPInterface.get_instance().submitRank(this.getScoreRank());
		carlstillo.ui.ScreenManager.swtichScreen(this.parent,carlstillo.ui.ScreenType.GameOver);
	}
	,createDisplay: function() {
		this.backGround = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/background/back.png"));
		this.addChild(this.backGround);
		this.createUI();
		this.enemy = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/animation/tom.png"));
		this.enemy.set_x((GlobalValues.gameWidth - this.enemy.get_width()) * 0.5);
		this.enemy.set_y(164);
		this.addChild(this.enemy);
		this.foreGround = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/background/front.png"));
		this.foreGround.set_x((GlobalValues.gameWidth - this.foreGround.get_width()) * 0.5);
		this.foreGround.set_y(721 - this.foreGround.get_height());
		this.addChild(this.foreGround);
		var lifeBarBottom = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/ui/meter03.png"));
		lifeBarBottom.set_x(65);
		lifeBarBottom.set_y(155);
		this.addChild(lifeBarBottom);
		this.lifeBar = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/ui/meter02.png"));
		this.lifeBar.set_x(lifeBarBottom.get_x() + 15);
		this.lifeBar.set_y(450);
		this.lifeBar.set_scaleY(-1);
		this.addChild(this.lifeBar);
		var lifeBarTop = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/ui/meter01.png"));
		lifeBarTop.set_x(lifeBarBottom.get_x());
		lifeBarTop.set_y(lifeBarBottom.get_y());
		this.addChild(lifeBarTop);
		this.spawnCharacters();
	}
	,createUI: function() {
		this.scoreContainer = new openfl.display.Sprite();
		this.scoreContainer.addChild(new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/ui/uiScore.png")));
		this.scoreDisplay = new openfl.display.Sprite();
		this.scoreContainer.addChild(this.scoreDisplay);
		this.scoreContainer.set_x(5);
		this.scoreContainer.set_y(5);
		this.showScore(0);
		this.scoreDisplay.set_y(this.scoreContainer.get_height() * 0.5 + 1);
		this.addChild(this.scoreContainer);
		this.warningSign = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/ui/warning 02.png"));
		this.warningSign.set_visible(false);
	}
	,spawnCharacters: function() {
		var _g = this;
		haxe.Log.trace("Spawning NPC",{ fileName : "GameScreen.hx", lineNumber : 309, className : "screens.GameScreen", methodName : "spawnCharacters"});
		this.npc = new carlstillo.game.Player("img/animation","/animNibbles.xml",["idle","run2","run"]);
		this.npc.set_y(259);
		this.npc.set_x(GlobalValues.gameWidth / 2);
		this.addChild(this.npc);
		haxe.Log.trace("NPC Spawned",{ fileName : "GameScreen.hx", lineNumber : 314, className : "screens.GameScreen", methodName : "spawnCharacters"});
		this.blocker = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/background/blocker.png"));
		this.blocker.set_x((GlobalValues.gameWidth - this.blocker.get_width()) * 0.5);
		this.blocker.set_y(190);
		this.addChild(this.blocker);
		this.foodLayer = new openfl.display.Sprite();
		this.addChild(this.foodLayer);
		haxe.Log.trace("Spawning Character",{ fileName : "GameScreen.hx", lineNumber : 327, className : "screens.GameScreen", methodName : "spawnCharacters"});
		this.player = new carlstillo.game.Player("img/animation","/animJerry.xml",["idle","run","catch","hit"]);
		this.player.set_y(750);
		this.player.set_x(GlobalValues.gameWidth / 2);
		this.addChild(this.player);
		haxe.Log.trace("Character Spawned",{ fileName : "GameScreen.hx", lineNumber : 334, className : "screens.GameScreen", methodName : "spawnCharacters"});
		this.playerCanMove = false;
		this.player.addEventListener(openfl.events.MouseEvent.MOUSE_DOWN,function(e) {
			_g.playerCanMove = true;
		});
		this.addEventListener(openfl.events.MouseEvent.MOUSE_UP,function(e1) {
			_g.playerCanMove = false;
			if(_g.player.checkState() != 3) _g.player.changeCharState(0);
		});
	}
	,showScore: function(scoreValue) {
		this.scoreDisplay.removeChildren();
		this.scoreDisplay.addChild(carlstillo.display.Numbers.getDisplay(Math.floor(scoreValue),"img/ui/numbers/"));
		this.scoreDisplay.set_x((this.scoreContainer.get_width() - this.scoreDisplay.get_width()) * 0.5);
	}
	,updateMultiplier: function() {
		if(this.scoreMultiplier > 1) {
			var testPing = new openfl.display.Bitmap(openfl.Assets.getBitmapData(this.multiplierPath[Math.floor(this.scoreMultiplier) - 2]));
			this.addChild(testPing);
			testPing.set_x(this.player.get_x());
			testPing.set_y(620);
			motion.Actuate.tween(testPing,1.5,{ alpha : 0}).onComplete($bind(this,this.removeChild),[testPing]);
		}
	}
	,updateLifeBar: function() {
		this.lifeBar.set_scaleY((20 - this.missCounter) / 20 * -1);
	}
	,spawnItem: function() {
		var _g = this;
		haxe.Log.trace("Spawning New Item",{ fileName : "GameScreen.hx", lineNumber : 384, className : "screens.GameScreen", methodName : "spawnItem"});
		var newItem;
		do newItem = this.selectItem(); while(this.playerStunned == true && newItem.checkSafety() == false);
		newItem.setDiffSpeed(this.speed);
		if(this.itemCounter % 5 == 0) this.sectionIndex = this.selectSection();
		this.itemCounter++;
		if(newItem.checkSafety()) {
			this.npc.giveItem(newItem);
			this.npc.changeCharState(1);
			this.moveNPC(this.getRandomX(newItem.get_width()));
		} else {
			var targetX = this.getRandomX(newItem.get_width());
			if(targetX > GlobalValues.gameWidth / 2) {
				this.enemy.set_scaleX(1);
				this.warningSign.set_x(targetX - this.warningSign.get_width());
			} else {
				this.enemy.set_scaleX(-1);
				this.warningSign.set_x(targetX);
			}
			this.enemy.set_x(targetX - this.enemy.get_width());
			this.warningSign.set_visible(true);
			motion.Actuate.tween(this.enemy,this.spawnFrameCount / 2 / 60,{ y : -25}).onComplete(function() {
				newItem.set_y(164);
				newItem.set_x(targetX);
				_g.foodLayer.addChild(newItem);
				_g.fallingItemsList.push(newItem);
				motion.Actuate.tween(_g.enemy,_g.spawnFrameCount / 2 / 60,{ y : 164});
			});
			this.npc.changeCharState(2);
			this.moveNPC(this.getRandomX(newItem.get_width()));
		}
	}
	,selectSection: function() {
		return Math.floor(Math.random() * 3);
	}
	,getRandomX: function(itemWidth) {
		var areaIndex;
		do areaIndex = Math.floor(Math.random() * 3); while(areaIndex == this.previousAreaIndex);
		this.previousAreaIndex = areaIndex;
		var locationToArea = this.sectionIndex * this.sectionWidth + this.individualAreaWidth * areaIndex + Math.random() * (this.individualAreaWidth - itemWidth);
		return GlobalValues.gameWidth / 2 - 828 / 2 + locationToArea;
	}
	,selectItem: function() {
		haxe.Log.trace("Selecting Random Item",{ fileName : "GameScreen.hx", lineNumber : 465, className : "screens.GameScreen", methodName : "selectItem"});
		return carlstillo.game.ItemDropper.dropItem();
	}
	,dropItem: function(newItem,direction) {
		this.npc.disposeItem();
		this.npc.changeCharState(0);
		this.foodLayer.addChild(newItem);
		newItem.set_y(this.npc.get_y());
		if(direction > 0) newItem.set_x(this.npc.get_x()); else newItem.set_x(this.npc.get_x() - newItem.get_width());
		newItem.set_rotation(0);
		this.fallingItemsList.push(newItem);
	}
	,removeItem: function(id) {
		this.foodLayer.removeChild(this.fallingItemsList[id]);
		HxOverrides.remove(this.fallingItemsList,this.fallingItemsList[id]);
	}
	,breakItem: function(id) {
		var food = this.fallingItemsList[id];
		HxOverrides.remove(this.fallingItemsList,this.fallingItemsList[id]);
		food.breakItem();
		food.set_y(GlobalValues.gameHeight - food.get_height());
		motion.Actuate.tween(food,15,{ alpha : 0}).onComplete(($_=this.foodLayer,$bind($_,$_.removeChild)),[food]);
	}
	,moveItems: function() {
		var _g = this;
		var i = 0;
		do {
			var _g1 = this.fallingItemsList[i];
			_g1.set_y(_g1.get_y() + this.fallingItemsList[i].getVelocity());
			if(this.fallingItemsList[i].get_y() >= GlobalValues.gameHeight * 0.80 && this.player.checkHit(this.fallingItemsList[i])) {
				if(!this.playerStunned) {
					if(this.fallingItemsList[i].checkSafety()) {
						haxe.Log.trace("Chomp!",{ fileName : "GameScreen.hx", lineNumber : 521, className : "screens.GameScreen", methodName : "moveItems"});
						this.incrementScore(this.fallingItemsList[i].getScore());
						if(this.fallingItemsList[i].checkIsPowerUp()) {
							carlstillo.utils.SoundManager.playSFX(carlstillo.utils.SoundManager.healthSfx);
							if(this.missCounter >= 2) this.missCounter -= 2; else this.missCounter = 0;
							this.updateLifeBar();
						} else carlstillo.utils.SoundManager.playSFX(carlstillo.utils.SoundManager.foodGetSfx);
						if(this.player.checkState() != 3) this.player.changeCharState(2);
						this.removeItem(i);
					} else {
						haxe.Log.trace("Ouch!",{ fileName : "GameScreen.hx", lineNumber : 549, className : "screens.GameScreen", methodName : "moveItems"});
						this.comboCounter = 0;
						this.scoreMultiplier = 1;
						this.updateMultiplier();
						this.removeItem(i);
						carlstillo.utils.SoundManager.playSFX(carlstillo.utils.SoundManager.trapSfx);
						this.player.set_alpha(0.7);
						this.stunEndFrame = this.frameCounter + 60;
						this.playerStunned = true;
						this.stunChecker = new haxe.Timer(10);
						this.stunChecker.run = function() {
							_g.stunCheck();
						};
					}
				} else i++;
			} else if(this.fallingItemsList[i].get_y() >= GlobalValues.gameHeight - this.fallingItemsList[i].get_height() * 0.65) {
				if(this.fallingItemsList[i].checkSafety()) {
					this.comboCounter = 0;
					this.scoreMultiplier = 1;
					this.updateMultiplier();
					this.missCounter++;
					haxe.Log.trace("Splat!\t(" + this.missCounter + ")",{ fileName : "GameScreen.hx", lineNumber : 583, className : "screens.GameScreen", methodName : "moveItems"});
					this.updateLifeBar();
					if(this.missCounter == 20) this.gameOver();
				}
				this.breakItem(i);
			} else i++;
		} while(i < this.fallingItemsList.length);
	}
	,movePlayer: function(e) {
		if(this.playerCanMove && e.stageX > this.player.get_width()) {
			if(e.stageX >= this.player.get_x()) this.player.set_scaleX(1); else this.player.set_scaleX(-1);
			this.player.set_x(e.stageX);
		}
	}
	,stunCheck: function() {
		if(this.player.get_alpha() == 0.7) this.player.set_alpha(0.5); else this.player.set_alpha(0.7);
		if(this.frameCounter >= this.stunEndFrame) {
			this.stunChecker.stop();
			this.playerStunned = false;
			this.player.set_alpha(1);
			this.player.changeCharState(0);
		}
	}
	,moveNPC: function(targetX) {
		if(targetX > this.npc.get_x()) this.npc.set_scaleX(1); else if(targetX < this.npc.get_x()) this.npc.set_scaleX(-1); else this.npc.set_scaleX(this.npc.get_scaleX() * -1);
		if(this.npc.getItem() != null) motion.Actuate.tween(this.npc,this.npcWalkTime,{ x : targetX}).onComplete($bind(this,this.dropItem),[this.npc.getItem(),this.npc.get_scaleX()]); else motion.Actuate.tween(this.npc,this.npcWalkTime,{ x : targetX}).onComplete(($_=this.npc,$bind($_,$_.changeCharState)),[0]);
	}
	,pause: function(e) {
		this.removeEventListener(openfl.events.Event.ENTER_FRAME,$bind(this,this.update));
		motion.Actuate.pauseAll();
	}
	,resume: function(e) {
		this.addEventListener(openfl.events.Event.ENTER_FRAME,$bind(this,this.update));
		motion.Actuate.resumeAll();
	}
	,getScoreRank: function() {
		if(this.score > 50) {
			if(this.score > 100) {
				if(this.score > 500) {
					if(this.score > 1000) {
						if(this.score > 1500) return com.indigogaming.wnpdispatcher.WNPRank.Outstanding; else return com.indigogaming.wnpdispatcher.WNPRank.Great;
					} else return com.indigogaming.wnpdispatcher.WNPRank.Good;
				} else return com.indigogaming.wnpdispatcher.WNPRank.Ok;
			} else return com.indigogaming.wnpdispatcher.WNPRank.Poor;
		}
		return com.indigogaming.wnpdispatcher.WNPRank.None;
	}
	,__class__: screens.GameScreen
});
screens.HowToPlay = function() {
	openfl.display.Sprite.call(this);
	this.howTo = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/howTo/howtoplay.png"));
	this.howTo.set_x(1280);
	this.addChild(this.howTo);
	this.leftBtn = new carlstillo.ui.Button(0,335.5,"img/buttons/left_btn.png","img/buttons/left_btn.png");
	this.addChild(this.leftBtn);
	this.leftBtn.addEventListener(openfl.events.MouseEvent.MOUSE_DOWN,$bind(this,this.leftBtnClicked));
	this.rightBtn = new carlstillo.ui.Button(1214,335.5,"img/buttons/right_btn.png","img/buttons/right_btn.png");
	this.addChild(this.rightBtn);
	this.rightBtn.addEventListener(openfl.events.MouseEvent.MOUSE_DOWN,$bind(this,this.rightBtnClicked));
	this.playBtn = new carlstillo.ui.Button(1038,679,"img/buttons/btnPlay.png","img/buttons/btnPressPlay.png");
	this.addChild(this.playBtn);
	this.playBtn.addEventListener(openfl.events.MouseEvent.MOUSE_DOWN,$bind(this,this.playBtnClicked));
	this.index = 0;
	this.transition(this.index);
};
$hxClasses["screens.HowToPlay"] = screens.HowToPlay;
screens.HowToPlay.__name__ = ["screens","HowToPlay"];
screens.HowToPlay.__super__ = openfl.display.Sprite;
screens.HowToPlay.prototype = $extend(openfl.display.Sprite.prototype,{
	transition: function(dir) {
		motion.Actuate.tween(this.howTo,0.5,{ x : 1280 * (dir * -1)});
		if(this.index == 3) this.rightBtn.set_visible(false); else this.rightBtn.set_visible(true);
	}
	,leftBtnClicked: function(e) {
		if(this.index > 0) {
			this.index--;
			this.transition(this.index);
		} else carlstillo.ui.ScreenManager.swtichScreen(this,carlstillo.ui.ScreenType.Title);
	}
	,rightBtnClicked: function(e) {
		if(this.index < 3) {
			this.index++;
			this.transition(this.index);
		}
	}
	,playBtnClicked: function(e) {
		carlstillo.ui.ScreenManager.requestSwitchScreen(this.parent,carlstillo.ui.ScreenType.Game);
	}
	,__class__: screens.HowToPlay
});
screens.LoadingScreenBG = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	openfl.display.BitmapData.call(this,0,0,transparent,fillRGBA);
	if(screens.LoadingScreenBG.preload != null) {
		this.__sourceImage = screens.LoadingScreenBG.preload;
		width = this.__sourceImage.width;
		height = this.__sourceImage.height;
	} else this.__loadFromBase64(haxe.Resource.getString(screens.LoadingScreenBG.resourceName),screens.LoadingScreenBG.resourceType,function(b) {
		if(screens.LoadingScreenBG.preload == null) screens.LoadingScreenBG.preload = b.__sourceImage;
		if(onload != null) onload(b);
	});
};
$hxClasses["screens.LoadingScreenBG"] = screens.LoadingScreenBG;
screens.LoadingScreenBG.__name__ = ["screens","LoadingScreenBG"];
screens.LoadingScreenBG.preload = null;
screens.LoadingScreenBG.__super__ = openfl.display.BitmapData;
screens.LoadingScreenBG.prototype = $extend(openfl.display.BitmapData.prototype,{
	__class__: screens.LoadingScreenBG
});
screens.LoadingBarCover = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	openfl.display.BitmapData.call(this,0,0,transparent,fillRGBA);
	if(screens.LoadingBarCover.preload != null) {
		this.__sourceImage = screens.LoadingBarCover.preload;
		width = this.__sourceImage.width;
		height = this.__sourceImage.height;
	} else this.__loadFromBase64(haxe.Resource.getString(screens.LoadingBarCover.resourceName),screens.LoadingBarCover.resourceType,function(b) {
		if(screens.LoadingBarCover.preload == null) screens.LoadingBarCover.preload = b.__sourceImage;
		if(onload != null) onload(b);
	});
};
$hxClasses["screens.LoadingBarCover"] = screens.LoadingBarCover;
screens.LoadingBarCover.__name__ = ["screens","LoadingBarCover"];
screens.LoadingBarCover.preload = null;
screens.LoadingBarCover.__super__ = openfl.display.BitmapData;
screens.LoadingBarCover.prototype = $extend(openfl.display.BitmapData.prototype,{
	__class__: screens.LoadingBarCover
});
screens.LoadingBarContainer = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	openfl.display.BitmapData.call(this,0,0,transparent,fillRGBA);
	if(screens.LoadingBarContainer.preload != null) {
		this.__sourceImage = screens.LoadingBarContainer.preload;
		width = this.__sourceImage.width;
		height = this.__sourceImage.height;
	} else this.__loadFromBase64(haxe.Resource.getString(screens.LoadingBarContainer.resourceName),screens.LoadingBarContainer.resourceType,function(b) {
		if(screens.LoadingBarContainer.preload == null) screens.LoadingBarContainer.preload = b.__sourceImage;
		if(onload != null) onload(b);
	});
};
$hxClasses["screens.LoadingBarContainer"] = screens.LoadingBarContainer;
screens.LoadingBarContainer.__name__ = ["screens","LoadingBarContainer"];
screens.LoadingBarContainer.preload = null;
screens.LoadingBarContainer.__super__ = openfl.display.BitmapData;
screens.LoadingBarContainer.prototype = $extend(openfl.display.BitmapData.prototype,{
	__class__: screens.LoadingBarContainer
});
screens.LoadingBar = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	openfl.display.BitmapData.call(this,0,0,transparent,fillRGBA);
	if(screens.LoadingBar.preload != null) {
		this.__sourceImage = screens.LoadingBar.preload;
		width = this.__sourceImage.width;
		height = this.__sourceImage.height;
	} else this.__loadFromBase64(haxe.Resource.getString(screens.LoadingBar.resourceName),screens.LoadingBar.resourceType,function(b) {
		if(screens.LoadingBar.preload == null) screens.LoadingBar.preload = b.__sourceImage;
		if(onload != null) onload(b);
	});
};
$hxClasses["screens.LoadingBar"] = screens.LoadingBar;
screens.LoadingBar.__name__ = ["screens","LoadingBar"];
screens.LoadingBar.preload = null;
screens.LoadingBar.__super__ = openfl.display.BitmapData;
screens.LoadingBar.prototype = $extend(openfl.display.BitmapData.prototype,{
	__class__: screens.LoadingBar
});
screens.PreLoader = function() {
	NMEPreloader.call(this);
	var background = new openfl.display.Bitmap(new screens.LoadingScreenBG(0,0));
	this.addChild(background);
	var loadingContainer = new openfl.display.Bitmap(new screens.LoadingBarContainer(0,0));
	loadingContainer.set_y(659);
	loadingContainer.set_x(221);
	this.addChild(loadingContainer);
	this.loadingBar = new openfl.display.Bitmap(new screens.LoadingBar(0,0));
	this.loadingBar.set_y(659);
	this.loadingBar.set_x(221);
	this.loadingBar.set_scaleX(0);
	this.addChild(this.loadingBar);
	var loadingTop = new openfl.display.Bitmap(new screens.LoadingBarCover(0,0));
	loadingTop.set_y(659);
	loadingTop.set_x(221);
	this.addChild(loadingTop);
};
$hxClasses["screens.PreLoader"] = screens.PreLoader;
screens.PreLoader.__name__ = ["screens","PreLoader"];
screens.PreLoader.__super__ = NMEPreloader;
screens.PreLoader.prototype = $extend(NMEPreloader.prototype,{
	onUpdate: function(bytesLoaded,bytesTotal) {
		NMEPreloader.prototype.onUpdate.call(this,bytesLoaded,bytesTotal);
		var percentLoaded = bytesLoaded / bytesTotal;
		this.loadingBar.set_scaleX(percentLoaded);
		haxe.Log.trace(percentLoaded * 100 + "% loaded",{ fileName : "PreLoader.hx", lineNumber : 56, className : "screens.PreLoader", methodName : "onUpdate"});
	}
	,__class__: screens.PreLoader
});
screens.TitleScreen = function() {
	openfl.display.Sprite.call(this);
	this.backGround = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/background/titleScreen.png"));
	this.addChild(this.backGround);
	this.playBtn = new carlstillo.ui.Button(277,580,"img/buttons/btnPlay.png","img/buttons/btnPressPlay.png");
	this.addChild(this.playBtn);
	this.playBtn.addEventListener(openfl.events.MouseEvent.MOUSE_DOWN,$bind(this,this.playBtnClicked));
	this.howTo = new carlstillo.ui.Button(699,580,"img/buttons/btnHTP.png","img/buttons/btnPressHTP.png");
	this.addChild(this.howTo);
	this.howTo.addEventListener(openfl.events.MouseEvent.MOUSE_DOWN,$bind(this,this.howToClicked));
};
$hxClasses["screens.TitleScreen"] = screens.TitleScreen;
screens.TitleScreen.__name__ = ["screens","TitleScreen"];
screens.TitleScreen.__super__ = openfl.display.Sprite;
screens.TitleScreen.prototype = $extend(openfl.display.Sprite.prototype,{
	playBtnClicked: function(e) {
		carlstillo.ui.ScreenManager.requestSwitchScreen(this.parent,carlstillo.ui.ScreenType.Game);
	}
	,howToClicked: function(e) {
		carlstillo.ui.ScreenManager.requestSwitchScreen(this.parent,carlstillo.ui.ScreenType.HowTo);
	}
	,__class__: screens.TitleScreen
});
var spritesheet = {};
spritesheet.AnimatedSprite = function(sheet,smoothing) {
	if(smoothing == null) smoothing = false;
	openfl.display.Sprite.call(this);
	this.smoothing = smoothing;
	this.spritesheet = sheet;
	this.behaviorQueue = new Array();
	this.bitmap = new openfl.display.Bitmap();
	this.addChild(this.bitmap);
};
$hxClasses["spritesheet.AnimatedSprite"] = spritesheet.AnimatedSprite;
spritesheet.AnimatedSprite.__name__ = ["spritesheet","AnimatedSprite"];
spritesheet.AnimatedSprite.__super__ = openfl.display.Sprite;
spritesheet.AnimatedSprite.prototype = $extend(openfl.display.Sprite.prototype,{
	getFrameData: function(index) {
		if(this.currentBehavior != null && this.currentBehavior.frameData.length > index) return this.currentBehavior.frameData[index]; else return null;
	}
	,queueBehavior: function(behavior) {
		var behaviorData = this.resolveBehavior(behavior);
		if(this.currentBehavior == null) this.updateBehavior(behaviorData); else this.behaviorQueue.push(behaviorData);
	}
	,resolveBehavior: function(behavior) {
		if(js.Boot.__instanceof(behavior,spritesheet.data.BehaviorData)) return behavior; else if(typeof(behavior) == "string") {
			if(this.spritesheet != null) return this.spritesheet.behaviors.get(behavior);
		}
		return null;
	}
	,showBehavior: function(behavior,restart) {
		if(restart == null) restart = true;
		this.behaviorQueue = new Array();
		this.updateBehavior(this.resolveBehavior(behavior),restart);
	}
	,showBehaviors: function(behaviors) {
		this.behaviorQueue = new Array();
		var _g = 0;
		while(_g < behaviors.length) {
			var behavior = behaviors[_g];
			++_g;
			this.behaviorQueue.push(this.resolveBehavior(behavior));
		}
		if(this.behaviorQueue.length > 0) this.updateBehavior(this.behaviorQueue.shift());
	}
	,update: function(deltaTime) {
		if(!this.behaviorComplete) {
			this.timeElapsed += deltaTime;
			this.ratio = this.timeElapsed / this.loopTime;
			if(this.ratio >= 1) {
				if(this.currentBehavior.loop) this.ratio -= Math.floor(this.ratio); else {
					this.behaviorComplete = true;
					this.ratio = 1;
				}
			}
			this.currentFrameIndex = Math.round(this.ratio * (this.currentBehavior.frames.length - 1));
			this.frame = this.spritesheet.getFrame(this.currentBehavior.frames[this.currentFrameIndex]);
			this.bitmap.bitmapData = this.frame.bitmapData;
			this.bitmap.smoothing = this.smoothing;
			this.bitmap.set_x(this.frame.offsetX - this.currentBehavior.originX);
			this.bitmap.set_y(this.frame.offsetY - this.currentBehavior.originY);
			if(this.behaviorComplete) {
				if(this.behaviorQueue.length > 0) this.updateBehavior(this.behaviorQueue.shift()); else if(this.hasEventListener(openfl.events.Event.COMPLETE)) this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
			}
		}
	}
	,updateBehavior: function(behavior,restart) {
		if(restart == null) restart = true;
		if(behavior != null) {
			if(restart || behavior != this.currentBehavior) {
				this.currentBehavior = behavior;
				this.timeElapsed = 0;
				this.behaviorComplete = false;
				this.loopTime = behavior.frames.length / behavior.frameRate * 1000 | 0;
				if(this.bitmap.bitmapData == null) this.update(0);
			}
		} else {
			this.bitmap.bitmapData = null;
			this.currentBehavior = null;
			this.currentFrameIndex = -1;
			this.behaviorComplete = true;
		}
	}
	,__class__: spritesheet.AnimatedSprite
});
spritesheet.Spritesheet = function(image,frames,behaviors,imageAlpha) {
	this.sourceImage = image;
	this.sourceImageAlpha = imageAlpha;
	if(frames == null) {
		this.frames = new Array();
		this.totalFrames = 0;
	} else {
		this.frames = frames;
		this.totalFrames = frames.length;
	}
	if(behaviors == null) this.behaviors = new haxe.ds.StringMap(); else this.behaviors = behaviors;
};
$hxClasses["spritesheet.Spritesheet"] = spritesheet.Spritesheet;
spritesheet.Spritesheet.__name__ = ["spritesheet","Spritesheet"];
spritesheet.Spritesheet.prototype = {
	addBehavior: function(behavior) {
		this.behaviors.set(behavior.name,behavior);
	}
	,addFrame: function(frame) {
		this.frames.push(frame);
		this.totalFrames++;
	}
	,generateBitmaps: function() {
		var _g1 = 0;
		var _g = this.totalFrames;
		while(_g1 < _g) {
			var i = _g1++;
			this.generateBitmap(i);
		}
	}
	,generateBitmap: function(index) {
		var frame = this.frames[index];
		var bitmapData = new openfl.display.BitmapData(frame.width,frame.height,true);
		var sourceRectangle = new openfl.geom.Rectangle(frame.x,frame.y,frame.width,frame.height);
		var targetPoint = new openfl.geom.Point();
		bitmapData.copyPixels(this.sourceImage,sourceRectangle,targetPoint);
		if(this.sourceImageAlpha != null) bitmapData.copyChannel(this.sourceImageAlpha,sourceRectangle,targetPoint,2,8);
		frame.bitmapData = bitmapData;
	}
	,getFrame: function(index,autoGenerate) {
		if(autoGenerate == null) autoGenerate = true;
		var frame = this.frames[index];
		if(frame != null && frame.bitmapData == null && autoGenerate) this.generateBitmap(index);
		return frame;
	}
	,getFrameIDs: function() {
		var ids = [];
		var _g1 = 0;
		var _g = this.totalFrames;
		while(_g1 < _g) {
			var i = _g1++;
			ids.push(i);
		}
		return ids;
	}
	,getFrames: function() {
		return this.frames.slice();
	}
	,merge: function(spritesheet) {
		var cacheTotalFrames = this.totalFrames;
		var _g1 = 0;
		var _g = spritesheet.frames.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(spritesheet.frames[i].bitmapData == null && (spritesheet.sourceImage != this.sourceImage || spritesheet.sourceImageAlpha != this.sourceImageAlpha)) spritesheet.generateBitmap(i);
			this.addFrame(spritesheet.frames[i]);
		}
		var $it0 = spritesheet.behaviors.iterator();
		while( $it0.hasNext() ) {
			var behavior = $it0.next();
			if(!this.behaviors.exists(behavior.name)) {
				var clone = behavior.clone();
				clone.name = behavior.name;
				var _g11 = 0;
				var _g2 = behavior.frames.length;
				while(_g11 < _g2) {
					var i1 = _g11++;
					behavior.frames[i1] += cacheTotalFrames;
				}
				this.addBehavior(behavior);
			}
		}
		var ids = [];
		var _g12 = cacheTotalFrames;
		var _g3 = this.totalFrames;
		while(_g12 < _g3) {
			var i2 = _g12++;
			ids.push(i2);
		}
		return ids;
	}
	,updateImage: function(image,imageAlpha) {
		this.sourceImage = image;
		this.sourceImageAlpha = imageAlpha;
		var _g = 0;
		var _g1 = this.frames;
		while(_g < _g1.length) {
			var frame = _g1[_g];
			++_g;
			if(frame.bitmapData != null) frame.bitmapData = null;
		}
	}
	,__class__: spritesheet.Spritesheet
};
spritesheet.data = {};
spritesheet.data.BehaviorData = function(name,frames,loop,frameRate,originX,originY) {
	if(originY == null) originY = 0;
	if(originX == null) originX = 0;
	if(frameRate == null) frameRate = 30;
	if(loop == null) loop = false;
	if(name == null) name = "";
	if(name == "") name = "behavior" + spritesheet.data.BehaviorData.uniqueID++;
	if(frames == null) frames = [];
	this.name = name;
	this.frames = frames;
	this.loop = loop;
	this.frameRate = frameRate;
	this.originX = originX;
	this.originY = originY;
	this.frameData = new Array();
	var _g1 = 0;
	var _g = this.frames.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.frameData.push(null);
	}
};
$hxClasses["spritesheet.data.BehaviorData"] = spritesheet.data.BehaviorData;
spritesheet.data.BehaviorData.__name__ = ["spritesheet","data","BehaviorData"];
spritesheet.data.BehaviorData.prototype = {
	clone: function() {
		return new spritesheet.data.BehaviorData("behavior" + spritesheet.data.BehaviorData.uniqueID++,this.frames.slice(),this.loop,this.frameRate,this.originX,this.originY);
	}
	,__class__: spritesheet.data.BehaviorData
};
spritesheet.data.SpritesheetFrame = function(x,y,width,height,offsetX,offsetY) {
	if(offsetY == null) offsetY = 0;
	if(offsetX == null) offsetX = 0;
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.offsetX = offsetX;
	this.offsetY = offsetY;
};
$hxClasses["spritesheet.data.SpritesheetFrame"] = spritesheet.data.SpritesheetFrame;
spritesheet.data.SpritesheetFrame.__name__ = ["spritesheet","data","SpritesheetFrame"];
spritesheet.data.SpritesheetFrame.prototype = {
	__class__: spritesheet.data.SpritesheetFrame
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
$hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
Xml.Element = "element";
Xml.PCData = "pcdata";
Xml.CData = "cdata";
Xml.Comment = "comment";
Xml.DocType = "doctype";
Xml.ProcessingInstruction = "processingInstruction";
Xml.Document = "document";
haxe.Resource.content = [{ name : "__ASSET__:bitmap_screens_LoadingBarContainer", data : "aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQTFvQUFBQmlDQVlBQUFCSlk2TERBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQTJacFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TXkxak1ERXhJRFkyTGpFME5UWTJNU3dnTWpBeE1pOHdNaTh3TmkweE5EbzFOam95TnlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRjRTFOT2s5eWFXZHBibUZzUkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRwQlJUZEJOa1pETmpWRE9FRkZOREV4T1VRM1JrVTRRakEwUVVFMFJFVkZOeUlnZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBCT1RneU5qZzFNamsxTmtNeE1VVTBPVE0yTkVaRVJrUTFPVFkwT1VKR01TSWdlRzF3VFUwNlNXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEcEJPVGd5TmpnMU1UazFOa014TVVVME9UTTJORVpFUmtRMU9UWTBPVUpHTVNJZ2VHMXdPa055WldGMGIzSlViMjlzUFNKQlpHOWlaU0JRYUc5MGIzTm9iM0FnUTFNMklDaFhhVzVrYjNkektTSStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPa0k0TWpaRk9VVTFOalk1TlVVME1URkJRVEk1UWtGRU1EVXlORE0xTWpKQklpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09rRkZOMEUyUmtNMk5VTTRRVVUwTVRFNVJEZEdSVGhDTURSQlFUUkVSVVUzSWk4K0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4Kzg2VmNrZ0FBRmFCSlJFRlVlTnJzM1FtVVhGV2R4L0gvcTZxdXJxcmVrbDZ5QWVrUW9vRlJJNXNaVUZrRU44QmhGRkRINkxpaGpqcmo2SWdMNm93T0hIWEdHYys0NGRFSVR1WW9JS09PSEZFeElMSUUzRmhNa0NSQVNBSWRrblNuMDN0WGRhMWROZjliWGNIdVNpMzNWVlducTVQdjU1dy9MMTMxNnI3WDlTcmgvdXErZDU4anN5UVQ2L2JyWXEzV3k3UldhejFmcTF1clJhdE5BQUFBQUtCNkNhMXhyVkd0M1ZyYmN2VjdKOUR6MkZ6dGxGUGpjR1VDMUJWYWI5WjZ1VmFRNHc0QUFBQmdqdXpYdWtQclZxM2JOWGhOenF1Z3BRSHJWRjE4VE90eXJRREhFd0FBQUVDZDJhdjFYYTMxR3JoNjZ6cG9hY0E2VFJmWGFyMk80d1lBQUFCZ0hvaHAvYmZXTlJxNCt1c3FhT1ZPRWZ5ODFnZTFQQndyQUFBQUFQT011YTdyczFyZm1JMVRDbDBITFExWkYrcmlScTBsSEJzQUFBQUE4OXp2dGQ2bVlXdlhuQVF0RFZoZVhYeE82elBDS0JZQUFBQ0FvMGRZNiswYXRtNDlva0ZMUTFhakxtNlNxY2t1QUFBQUFPQm85TThhdHI1d1JJSlc3bnFzMjdUTzVYMEhBQUFBY0pUN3B0YUhOSEJscW1uRVZ5WmtoWFN4VWVzczNtOEFBQUFBeDRDLzF6S1RZM3k0bWthY0VpSExYSk5sUnJJdXJtWURCNTlLeXE1N1kvTE03K055Y0VkS2hudFNFbytrSlRtUjRSQUNBQUFBcUVxZzFTT05MWTUwckd5UXhhYzB5SWt2YjVSVjV3ZWt1Y3RiYmRObWx2WFBPWUdlZEsyRDFoZDE4YWxLR2syRU0vS0hEZVB5OEkwUjZmMVRncU1QQUFBQTRJaHhQQ0xQdXlBb2E5L1ZMQzk2ZlNqN2M0VWVrS2xKTXA2dVNkRFNrSFdSTG01MzIxZ3FucEZOWHh1VFRWOGRrNG5oTkVjWUFBQUF3SnpxT01rbkYxMjdVTlpjRnFxMGlaRmMyUHBaVlVGTFExYUhMcDdRNm5UVFVNOGY0dksvN3htUWdaMHBqaVlBQUFDQXV2SzhDd1B5cHZXZDBuWmNSYWNVbWxHa3F6UnNmYldhb0hXRExxNTBzOVg3dnpFbXYvajBzS1RKV0FBQUFBRHFWS2pkSTIvOVhsYzJkRlhvU3hxMnJuWWR0RFJrbmEyTDM5cHVKWk1SK2RuSGgrU0JiNDV6MUFBQUFBRFVQVytESTI5YzN5R252NldwMGlhdTBiRDFyMjZEMXQyNmVJWHRGbTc3bUx1UUZmRDVaRlY3dTdRSGd4SnNhT0FvQXdBQUFLaEtPSkdRM3JFeDZSa2RsY21NM2N6bVpuS01kZC9ya2hkZlh2RjFXKy9Uc0hXOVZkRFNrR1h1bGZVNzI1WTNmWDFNZnY3SjRiTHJ0VFkyeXNVbm55d25kM2RMcUsxTnQrandhUUFBQUFCUVU1bFVTa1lIQjJYTDAwL0xuVTg5SmFreW9jdU1iUDNkSFl0bHhkbU5sV3d1cVhXQmhxMEhiSUxXVDNWeHFVMnJadUtMYjcyeXIrUTFXUTFlcjd6MTFGUGxsTldyeGZINU9QSUFBQUFBam9oVU5DcWJ0bXlSalJxNFNtbGI1cFdQUExoTW1qb3Ftdjk5djlZYURWdURSWU9XaHF5dTNJcGxFOUZrSWlOZldkc3IvVThtaTY2ellzRUN1Zkw4ODZXeHRaV2pEQUFBQUdCT0RPemZMOWZkZDU5TUpJdG5selBlMWl4dnZyNmowazM4VUlQV213czljU2k2cmJNSldZYTVKcXRVeVBxTHJpNTUvMnRmUzhnQ0FBQUFNS2M2bHkyVHF5KytXTm9haTU4ZStNaU5ZZGw1ZjZ6U1Rid3BFK3UrdUZUUXVzS21sVVE0SS9kOGViVG84eWUwdGNuYkw3eFFQSDQvUnhVQUFBREFuQXRvUnZub2ExNGpmbS94KzJkOTRRMzk4dWlmRXBWdTRtc2F0ZzRidEhMMFFUT3ZvWm5Wb3V3MGdMOWJQeTYzZm1TbzRITmV4NUhQWG5xcEJNMkVGelVTVFNUNFpBQUFBQURJQ2xZeG9MTm45MjY1N29HaWMxZklUVDVIL24xOWgvenR1b3FtZmYrQUUrajU5dlFIVFBJNnh5WmtHUTkvUDF6MHVUZXRXVk0wWkdYaWNVa2RQQ2lUSXlPU2prUWtyVDlMM2l3Z0UrbTBQS2JQN1l4R3BVOERWbVJ5a2s4U0FBQUFnQm1hdkY1WnFvRnJWVEFvTDJ4cWtwRFBKNTVBUUR3dExlSmJ1RkM4blozaUZCaTlXcjV5cFp5NmM2ZHM2ZXNyMk83cVZFYmUvdTRCNmUyZGxFOWM1Zm95cUU5bVl0MDNhTmhLVFE5YWEyMWVPYnB2VXA1OXBQQUlrN2svMW90UE9lV3d4OU1URTVKNDVwbHN5Q29tcVlIclBnMWdENDZQbDUyQ0VRQUFBTUN4elF6SW1NRVpVM2NORDh0YURWam5MVmdnRFpvOVVnY09aRU9XYitsUzhYZDNIemI3K2V0T08wMjIvUEtYQmR0OXZ0WTlKakY5WmxoQ0lVZis0UU10Ym5acmhkYnJ0WDU4NkFGUHJzMnlucm83V3ZTNVY2MWFkZGgxV1lrOWUyVGk0WWRMaHF3RGlZUjhlLzkrK2UzWUdDRUxBQUFBZ0NzbVE1Z3NZVEpGZjI1bXdZd0dzZVRldlRMeDRJT1NHcHc1ODNwclY1Y3NMM0lXbmhuRFdwRDc4NGV2R3BJN2ZoVjF1enZ2bmY2RGlYaW4yTHhxN3grTFh5LzFRazJMejBtbkpmYjQ0NUlhR0NqWjNyNTRYRzdzNzVlNHJnL2cyT1BoNXVVQUFNQ2xkSkhCbWVGVVNqYjA5Y25iRmkyUzQzSXpER1kwZU1XMmJoWC9pU2VLZi9ueTU5WTlaK1ZLdVduejVvTHRMTkVhbVlvMHN1NGRBN0p0OHpKWnN0aHJ1M3V2eXNTNmx6aUJucjVEUVd1cHphdjZueWcrcFh0YmUvdHpmN1lKV1NQNlJ0eGNJR1I1UFI3eDZSc3o1dldLeVk5RU1QY3l1V1FQQUFBQUhHMThqaU5Ca3o4MFIyUmlNVWxOeXhNbVcveEFNOFo3bGk2VkJkTk9HVXc4L2JTSXZzNS93Z25abjVkckdDdW1mZHFmaDRiUzhxRi9HcElmM2R4bHUzdm1XK1JMdGI1ektHZzEyN3hxcksvdzVCUWR3YUI0R3FibTBzaGVqMVVtWkprSWNLdXVFODBMV1g0TldNL3FHOUpuSnNGSXBmZ1VBUUFBQUNpcVMzTkl0emxOTVBibmUyQ1pDZlpNMW5qbmtpVXkvZHlaeE83ZDRtMXFFbTk3dXpRM0Y0OC9MVTR1c09UOCtDY1RjdSttbUp4L2JzQjJ0MTU5S0dpWmE3U3NydktLanhjZVgyb1BCclBMZERpY3ZTNnJIRE96NExObTFzRnB2TnJHbnp5ZXFaQUZBQUFBQUdVYzFPendxT09JSnhTYThiakpHaVp6NUl2dDJKRzlmc3RiWW9yNFFsT3hYL1A1VVRlN2RkNmhQM2hzWHhFUEZ6NGRMWkFiellwclNoU0xVOWJ1SDUyNW8yWTBiSnQ1UGFlN0FRQUFBSERCekdDK1RTcy9QT1ZuRHNQY2NzcE1rdUdVdUU2OFVOQXlJMXBidHlWdGQ2a3pFK3RlNFNwb2xXTHVqVFU1UEZ4MnZUMzZ5dzBtWis1a243NHBoQ3dBQUFBQWxVaG9sdGpYTURNaW1jeVJmeFpkTnBqdDIyYzFPSlJ2dy9mQ2JsWmZVN09nbGVydnQxcnZxWW1KbVE5b3lPcmxkRUVBQUFBQVZUaGdNa1hlcU5hTy9Pd2hVek1SSm9hR1hMZi84OXRkVGZXK29uWkJ5MkkweTlpWG1EbEYvR2plRGNRQUFBQUFvQkw1MlNJL2V4eVN0TXd1TTBMYlUwblp1ODk2Z09qNDJnU3RUQ1o3NnFDTm9ielpCRWY1UEFBQUFBQ29SZERLKzNtNHlFem1rK0Z3UmUxdmVUUmh1MnBiVFlKVzNGeHpaWG5UNGZ6N1pzVzROZ3NBQUFCQURlVFAreEFya2xIU2lVUkY3VzkvM0hwQ2pOYWFCSzFJTkZyeGE1TjhIZ0FBQUFEVWdHMThTaWNyU3lHRFE5YW5EcmJVSkdoTldvNW1BUUFBQU1DY3F6Qy9EQTlidnk0N29sVlhzMUYwZWIzaTVkQUR3REhENHpqOHV3OEFxSWk1QXF1M3lIVllzMkZzM1BxeXAvb0pXbVpZN2RUR1JqbU9XUWdCQUFBQVdPclQvUERIV0V5T3hBMmpJaEhyRWEwRmh6TE9uQW80anJ3c0dDUmtBUUFBQUhCbGlkY3JMOWNzMGVTWi9WZ3piaitpbGIxR2EwN1R6U0o5UTE3VTJDaCtEVnNBQUFBQTRGYXJab3B6QWdIWlZ1RnNnclpHeCtiUk5WcW5hY2p5RUxJQUFBQUFWS0ZCTThVYXYxLzJ6dUkyd21Icm9PWEx4THFESGc0TEFBQUFBSlFMV3E3dUFkeFM5WWhXcTg4bkEybTd5OCs0UFRFQUFBQ0FlUm0wSXE2bWhXK3RPbWc1QkNnQUFBQUFkV2dpazVHMG1KS3B5a3o5dWFLZzVXNUVxNVZUQndFQUFBQWNkVXdzaW1UU0V0VndGZGRLYWxVN0RmeVlpd2t4Q0ZvQUFBQUFZQ0Vjc1I3VmFpTm9BUUFBQUlCTjBBclBreEd0VElhcnV3QUFBQURNajJ6aDRqcXRJeHUwOG05TVBKbE84NGtBQUFBQVVMWDhiTkhvcVgzVUdSdTN6aTh0UnpSb3RmbG1UbktZU0tYNFJBQUFBQUNvV242MmFQTjVheCsweHVwMFJHdEpZK09NbjZQSkpKOElBQUFBQUZXYlNDUm0vTHpZMzFqemJiaTRSdXZJam1oMUJ3TXpnNWErR2NuSlNUNFZBQUFBQUNwbVJyTmllWU00K2RtakZpSVRkVHFpdGRqdmwvYUdoaG1QRFVjaWZESUFBQUFBVkd4a1ltTEd6eVp6bU94UmF5NUd0T3luZC9mNkNqL3VkbTZQTTFwYlp2eHNrbWYrR3dNQUFBQUFOb1lpa2NOR3M4NXNiYTJvclhMWlpuVE1YZEN5dWxESzMxdzRrNFZkbnZxM0toU1M0L0t1MVJxTFJtVXdIR2E2ZHdBQUFBQlcwcG9kQnNiSEpSeUx6WGo4K0VDam5CUUtWdFJtdk16ejQrUFdlU1Y3amRhNHpacE43WVdEVm44RkUxcGMwTkV1SWUvTVdVQWk4YmpzSHhtUjBZbUo3RG1XaEM0QUFBRGcyQXhReGNwTTRSN1gvR0V1UDlvL1BIellCQmdtWTF6UTNsNnkvY2tTT2FOYzBISnp3Mkp6UXVDd1ZudTVOZHRQOU1uZXpZbkRIaytaK2VyTnp1YmRJNnVVWm4wRFh0ZlZLYmYxSDVUWXRQbnV6UnMzR28xbUN3QUFBQUJzQlR5ZWJNWm84cGFlMWoyU0tuNUcza2lac1o1d3hOMWtHTHR0MWx4OFNrUHhIYXJnZmxnZERRM3loc1dMRHBzY0F3QUFBQURjWm92TE5GdDBXR1NMM1NVR2RRYkt2TmJ0OU83YmJkWmNlVzd4NlJFZkdSdXY2QTFaNFBQSkZmcUdyRzFyRmIvSHd5Y0VBQUFBZ0RXVElVeVd1Rnd6Ulp2UFYzWjljdzdlUStPRnM0dUpVTDFsWGo4NmFqMmlGZkxaQnEzdXRZM2liM1lrRVQ2ODhSMFRFM0xld2dYaXF5QXNlUjFIem1odGxUVXRMYkpMMjlrVGk4bkJSRktpazVPUzVEb3RBQUFBQURrTm1oM01kVmlkL2daWkhnaklTYUZROWpGYnZmRzRKTk9GUjZYMlN2bFpBc01SNnhFdE1VSHJBYXNWQTQ2c2VVT1RQUHo5Y01Ibjd4NGFsbGQzZGxUMXBwM2MxSlF0QUFBQUFLZ2xFOGMyRGd3V2ZYNjd4UmhQT0d3OUVKVDBPSUdlN2JrQVY5Wlo3MjB1K3R5dWFGVDI1MDJ0Q0FBQUFBRDE0TGZESXhJdE1wcGxaaHQ4MHFJTkZ5ZmNUUnc2MSs5WE5tc3ZmMG1qbkhSZThXdTFmbnB3UUNaU2t4eEZBQUFBQUhYRFhLSzBKUnd1K3Z3aldnbUxkb0pCNjlNVSt3NEZyWnRzWDNISkZ4ZVduTW45KzcyOU1wWk1jVFFCQUFBQXpMbWRrUW01YzNDbzZQTVJyWWNzUjZxNk9xM25wTmg5YU0xN3RKNjJlY1h4cC92bDdQZTNGSDNlRE1iZDFOY25UNFlqNG5CY0FRQUFBTXlSKzRlSDVWZERReVhYK1hYR2JqVExXSFdTOWEycGRtV0RsaFBvTWZub3U3YXZ1dVFMQzJYSkMwcHY1Rzc5cFc3dTdaT2hSSkxBQlFBQUFPQ0lNTm5qbVdoVXJ0KzNYN2FHSXlYWDNTcDIxMllkOHVJMTFrSHJrZWN5VUNiV3ZjRHNrMWFielNzSGQ2WGt1dk42SlRKWWZvcERNNy85R1MwdHNpSVlrR2F2VjN5T0k0NUQvQUlBQUFCUU9YUEdYeWFUa1dRNkk2T3BwRHc1RVpYSFNseUxOWjI1WjlZdDJvQ2JpNTRlZjNTWm5MemFLbXc5YjBiYTBiRDFMN3E0MW5aRGV6Y241RHNYSFpEWWFKcWpEQUFBQUdCZUdNaUZyS2lMMTV5MDBpYzd0eDlubGVHY1FNK3kvS3U1dnFMVmI3dXg0MC96eXdmdldpSnR5N3djTFFBQUFBQjF6OXpYNm1hWEljdFk5emZXOS92OWlmblBZZWZ2WldMZGI5WEZqVzQyT241Z1VuN3dyZ0haZVEvMzBRSUFBQUJRbi82b2RhK0dMTGMzcEdwb2NPU1pIY2ZKc3FWV0Ewem5Pb0dlK3crYm4xQWZORk85MytabXd5Mkx2ZkxlbnkrVzJObUI3TTIrQUFBQUFLQmVER3Y5S0RNMXcyQWxkLzE5OXp1YWJVUFdNMW9QWkhOVm9XY3pzZTVPWFd6V090N05Ednpob2JpODRwdytPVk5iUFUxL2J1U1lBZ0FBQUpnakl6SjFqNnpIcExLQVpiUzJlbVRIMW1XeWVKRlYwUHBISjlEemphSkJLeGUyL2xJWDkyb0YzT3pJV1JxMFRPQXljM0dzMGxxdFcxaE82QUlBQUFCd0JKZzVCODBOZ2gvWGdMVkhwbVltck1iNmIzYkkrNjVzdGxuVjNMQnJ1UWF0U01tZ2xRdGJiOVRGTFZyV3QwRGVlR2RVTHJwMDVud2FaaU1kV3UwbUVaclFwUS80eTIwY0FBQUFBRW93bzFSSlRWSm1wZ2d6ZWpXb05WckQ5aTk3ZlVqKzc1WXUyOVd2MXBEMXBla1pTTXFFclN0MWNiMmJYSFRwNWYzeXMxOUVPZklBQUFBQTVxVXpUdmZMcHJ1V1NDaGtGWU4yYXIxQWcxYkNPbWpsd3Bhcm1RaWYzWnVTTldmMnlzZ0k5OWNDQUFBQU1MK3NlWkZmN3ZybEl1bnF0TDZOMVNVYXNtNmYvb0RWS1lHNW1RanZzOTNLQ2NmNzVNWU5uZUp3YmlBQUFBQ0FlZVM4Y3dLeTZhN0Zia0xXOWZraHl6cG81WHpYelE1ZWNsRlF2dnJsZG80VUFBQUFnTHJuMFdUMHlZKzF5cTgzTHBhMk51dVk5SVRXUndvOVlUM21sSWwxbS9rcnpMbUhKN2paNGYvOHJ6SDV4S2VIT1hJQUFBQUE2cEs1SHV0YlgrK1FsNXpwZC9NeUUzSmU2Z1I2bmlnWTNHeGJ5VjNZOVdXM08vM3hqN1ptVHlOc2JPUThRZ0FBQUFEMTQ2Vm5OY3F0UCt5U2gzNnoxRzNJaW12OWRiR1FsYzFQYmxyTHhMck5QYlcyYWExMCswdHMzWmFVZGU4NEtJOXRUWEpFQVFBQUFCeHh3YUFqWjU3dWwxZS9NaWhYWEJhU2sxYzNWTktNQ1RSWGFNaTZyZFJLcm9lWk5HejlsUzV1cTJTUFVpbVI2NzQxSnRkK2NWU0doNW1SRUFBQW9ONlpzNUlDZ2VyUFRBcHFHN1U0dzZtcHlaR0dodXJiYWRaMmZMN3EyMmxwY2NUcnJiNmRWbTNINDZtK25iWTJweVlUMGkxWTRLbTZEZDJUN1A1VXk3d3ZyYTFPRmUrdFJ4WXU5RWozY3ArczZQWmxyOFdxUWpRWHNtNHYvL3RYUU1QV0QzWHh4a3IzTGh6T3lBMGJ4bVg5RFdGNTRrbEd1QURBaHQvdlpMK0pxMWFnVnAybVlHMDZUU0Z0eC94dTlkTDVhbW11VWFlcDFhbjJmK2E1VHBPbk5wMm10aHAwbXB3YWRwcGFxbS9ISEtlV0dyUmpPdHVtMDEwdDgvbHJxa0U3NXU5RHFBWi8xODNmejFyOG13SGdPVDFhbDJ2SWVzUXVhRllXdE14MGdvOXBMYXQyYjgycGhCdnZqTXB2ZmhlWHJkc1Mwck1ubFIzNXFtZm1IMUxMRzVlVi9nZXdWcDJtUUgxOTAyVGVtNXAxbW1yd1RWTnpzL25HcXZyajN0TGkwZitwMTZEVDFPcXBuMithbktuOXFVbW5xYlZHbmFibUduV2FtbXZVYVFyVnFOTVVvck1EQU1BOGRvZldPZzFaUTliOXJFcTNwR0hycGJxNDEvUkZhdmtiVEU2S2pJK25KWjdJU0RTYStYT25xWTYrYVFJQUFBQndUQmpWdWxwcnZZYXNqSnNYVnBVNk5HeTlVeGNiZVA4QkFBQUFIRVZNcUxwRjZ5b05XTDJWTkZEMThJNkdMWlB3L28xakFRQUFBR0NlTXpQMi9VanJXZzFZMjZ0cHFDYm4wUkcyQUFBQUFNeGp1MlRxVEwwTkdyRDIxNkxCbWwyd3BHSHJQYnBZTHk1dWdnd0FBQUFBYzZCUGE3UFdYVm9icXgyOW10V2dsUXRiRitqaUIxcUxPSFlBQUFCQTNUTDNXSm9vOGZ5NDFtU1I1OHdjNGVFU3J3M24xaWxrTXRkMk1aSGN2aFZpVHVzYksvRmE4L3NrQ2p3ZTF6S3pCUTVxSGREYXJzRnFjTGJmNEpwUHdhZGh5MHo1L2o5YXIrTHpDd0FBTUcrWkRtMnhXZFlTWlRycFk3bE9jYkVPZm1TV092aWxPdW5sT3ZqRk91azJIZnhvcmpOZnNIc3NVelBYRlJQTFZUR2pKWTVEUExmdG9zZEJBMFdhai9MY21KVzV6alZzbVhiZnFmVWZXcDI4elFBQUhIWGlaVHFISTJWZUc2MndrMTZ1ZzErcWsxNnVnMS9xVy9ocU92aVZmZ3R2MDBrdjFjRXZkeHhpMmdtUDhWRUc1bEhRbWhhNDJuVHhLYTBQYVlWNHV3SGdtSkdSeXIvOUxkczVsRm44OWxmbTVsdjR1VHJOcHVTMzhOb0pIK1dqREFCMUdMU21CYTRPWFh4UTYvMWF5M2piQWNqVU43aHo4ZTF2dVU1Nk5kL0NsK3JneitacE5yUDFMWHpaMDJ5MEk1N2dvd3dBd0J3RnJXbUJ5NnVMQzdYZW92VWFyYVVjQXBUbzRNM1d0NzlINVRuWVVuK24yVXhxSjN5Y2p6SUFBQ0JvSGRuUVpiYjlBcTIxV21kb1BWK3JXNlptTEd5emFDSXM5WGNPZGpVZC9GazlCN3VLRHY2c1h1eXFIZkZKL2hvQ0FBRGdhUFAvQWd3QWNjSVhPTVh1a3lnQUFBQUFTVVZPUks1Q1lJST0"},{ name : "__ASSET__:bitmap_screens_LoadingBarCover", data : "aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQTFvQUFBQmlDQVlBQUFCSlk2TERBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBS1QybERRMUJRYUc5MGIzTm9iM0FnU1VORElIQnliMlpwYkdVQUFIamFuVk5uVkZQcEZqMzMzdlJDUzRpQWxFdHZVaFVJSUZKQ2k0QVVrU1lxSVFrUVNvZ2hvZGtWVWNFUlJVVUVHOGlnaUFPT2pvQ01GVkVzRElvSzJBZmtJYUtPZzZPSWlzcjc0WHVqYTlhODkrYk4vclhYUHVlczg1Mnp6d2ZBQ0F5V1NETlJOWUFNcVVJZUVlQ0R4OFRHNGVRdVFJRUtKSEFBRUFpelpDRnovU01CQVBoK1BEd3JJc0FIdmdBQmVOTUxDQURBVFp2QU1CeUgvdy9xUXBsY0FZQ0VBY0Iwa1RoTENJQVVBRUI2amtLbUFFQkdBWUNkbUNaVEFLQUVBR0RMWTJMakFGQXRBR0FuZitiVEFJQ2QrSmw3QVFCYmxDRVZBYUNSQUNBVFpZaEVBR2c3QUt6UFZvcEZBRmd3QUJSbVM4UTVBTmd0QURCSlYyWklBTEMzQU1ET0VBdXlBQWdNQURCUmlJVXBBQVI3QUdESUl5TjRBSVNaQUJSRzhsYzg4U3V1RU9jcUFBQjRtYkk4dVNRNVJZRmJDQzF4QjFkWExoNG96a2tYS3hRMllRSmhta0F1d25tWkdUS0JOQS9nODh3QUFLQ1JGUkhnZy9QOWVNNE9yczdPTm82MkRsOHQ2cjhHL3lKaVl1UCs1YytyY0VBQUFPRjBmdEgrTEMrekdvQTdCb0J0L3FJbDdnUm9YZ3VnZGZlTFpySVBRTFVBb09uYVYvTncrSDQ4UEVXaGtMbloyZVhrNU5oS3hFSmJZY3BYZmY1bndsL0FWLzFzK1g0OC9QZjE0TDdpSklFeVhZRkhCUGpnd3N6MFRLVWN6NUlKaEdMYzVvOUgvTGNMLy93ZDB5TEVTV0s1V0NvVTQxRVNjWTVFbW96ek1xVWlpVUtTS2NVbDB2OWs0dDhzK3dNKzN6VUFzR28rQVh1UkxhaGRZd1AyU3ljUVdIVEE0dmNBQVBLN2I4SFVLQWdEZ0dpRDRjOTMvKzgvL1VlZ0pRQ0Faa21TY1FBQVhrUWtMbFRLc3ovSENBQUFSS0NCS3JCQkcvVEJHQ3pBQmh6QkJkekJDL3hnTm9SQ0pNVENRaEJDQ21TQUhISmdLYXlDUWlpR3piQWRLbUF2MUVBZE5NQlJhSWFUY0E0dXdsVzREajF3RC9waENKN0JLTHlCQ1FSQnlBZ1RZU0hhaUFGaWlsZ2pqZ2dYbVlYNEljRklCQktMSkNESmlCUlJJa3VSTlVneFVvcFVJRlZJSGZJOWNnSTVoMXhHdXBFN3lBQXlndnlHdkVjeGxJR3lVVDNVRExWRHVhZzNHb1JHb2d2UVpIUXhtbzhXb0p2UWNyUWFQWXcyb2VmUXEyZ1AybzgrUThjd3dPZ1lCelBFYkRBdXhzTkNzVGdzQ1pOank3RWlyQXlyeGhxd1Zxd0R1NG4xWTgreGR3UVNnVVhBQ1RZRWQwSWdZUjVCU0ZoTVdFN1lTS2dnSENRMEVkb0pOd2tEaEZIQ0p5S1RxRXUwSnJvUitjUVlZakl4aDFoSUxDUFdFbzhUTHhCN2lFUEVOeVFTaVVNeUo3bVFBa214cEZUU0V0SkcwbTVTSStrc3FaczBTQm9qazhuYVpHdXlCem1VTENBcnlJWGtuZVRENURQa0crUWg4bHNLbldKQWNhVDRVK0lvVXNwcVNobmxFT1UwNVFabG1ESkJWYU9hVXQyb29WUVJOWTlhUXEyaHRsS3ZVWWVvRXpSMW1qbk5neFpKUzZXdG9wWFRHbWdYYVBkcHIraDB1aEhkbFI1T2w5Qlgwc3ZwUitpWDZBUDBkd3dOaGhXRHg0aG5LQm1iR0FjWVp4bDNHSytZVEtZWjA0c1p4MVF3TnpIcm1PZVpENWx2VlZncXRpcDhGWkhLQ3BWS2xTYVZHeW92VkttcXBxcmVxZ3RWODFYTFZJK3BYbE45cmtaVk0xUGpxUW5VbHF0VnFwMVE2MU1iVTJlcE82aUhxbWVvYjFRL3BINVovWWtHV2NOTXcwOURwRkdnc1YvanZNWWdDMk1aczNnc0lXc05xNFoxZ1RYRUpySE4yWHgyS3J1WS9SMjdpejJxcWFFNVF6TktNMWV6VXZPVVpqOEg0NWh4K0p4MFRnbm5LS2VYODM2SzNoVHZLZUlwRzZZMFRMa3haVnhycXBhWGxsaXJTS3RScTBmcnZUYXU3YWVkcHIxRnUxbjdnUTVCeDBvblhDZEhaNC9PQlozblU5bFQzYWNLcHhaTlBUcjFyaTZxYTZVYm9idEVkNzl1cCs2WW5yNWVnSjVNYjZmZWViM24raHg5TC8xVS9XMzZwL1ZIREZnR3N3d2tCdHNNemhnOHhUVnhiendkTDhmYjhWRkRYY05BUTZWaGxXR1g0WVNSdWRFOG85VkdqVVlQakduR1hPTWs0MjNHYmNhakpnWW1JU1pMVGVwTjdwcFNUYm1tS2FZN1REdE14ODNNemFMTjFwazFtejB4MXpMbm0rZWIxNXZmdDJCYWVGb3N0cWkydUdWSnN1UmFwbG51dHJ4dWhWbzVXYVZZVlZwZHMwYXRuYTBsMXJ1dHU2Y1JwN2xPazA2cm50Wm53N0R4dHNtMnFiY1pzT1hZQnR1dXRtMjJmV0ZuWWhkbnQ4V3V3KzZUdlpOOXVuMk4vVDBIRFlmWkRxc2RXaDErYzdSeUZEcFdPdDZhenB6dVAzM0Y5SmJwTDJkWXp4RFAyRFBqdGhQTEtjUnBuVk9iMDBkbkYyZTVjNFB6aUl1SlM0TExMcGMrTHBzYnh0M0l2ZVJLZFBWeFhlRjYwdldkbTdPYnd1Mm8yNi91TnU1cDdvZmNuOHcwbnltZVdUTnowTVBJUStCUjVkRS9DNStWTUd2ZnJINVBRMCtCWjdYbkl5OWpMNUZYcmRld3Q2VjNxdmRoN3hjKzlqNXluK00rNHp3MzNqTGVXVi9NTjhDM3lMZkxUOE52bmwrRjMwTi9JLzlrLzNyLzBRQ25nQ1VCWndPSmdVR0JXd0w3K0hwOEliK09QenJiWmZheTJlMUJqS0M1UVJWQmo0S3RndVhCclNGb3lPeVFyU0gzNTVqT2tjNXBEb1ZRZnVqVzBBZGg1bUdMdzM0TUo0V0hoVmVHUDQ1d2lGZ2EwVEdYTlhmUjNFTnozMFQ2UkpaRTNwdG5NVTg1cnkxS05TbytxaTVxUE5vM3VqUzZQOFl1WmxuTTFWaWRXRWxzU3h3NUxpcXVObTVzdnQvODdmT0g0cDNpQytON0Y1Z3Z5RjF3ZWFIT3d2U0ZweGFwTGhJc09wWkFUSWhPT0pUd1FSQXFxQmFNSmZJVGR5V09Dbm5DSGNKbklpL1JOdEdJMkVOY0toNU84a2dxVFhxUzdKRzhOWGtreFRPbExPVzVoQ2Vwa0x4TURVemRtenFlRnBwMklHMHlQVHE5TVlPU2taQnhRcW9oVFpPMlorcG41bVoyeTZ4bGhiTCt4VzZMdHk4ZWxRZkphN09RckFWWkxRcTJRcWJvVkZvbzF5b0hzbWRsVjJhL3pZbktPWmFybml2TjdjeXp5dHVRTjV6dm4vL3RFc0lTNFpLMnBZWkxWeTBkV09hOXJHbzVzanh4ZWRzSzR4VUZLNFpXQnF3OHVJcTJLbTNWVDZ2dFY1ZXVmcjBtZWsxcmdWN0J5b0xCdFFGcjZ3dFZDdVdGZmV2YzErMWRUMWd2V2QrMVlmcUduUnMrRlltS3JoVGJGNWNWZjlnbzNIamxHNGR2eXIrWjNKUzBxYXZFdVdUUFp0Sm02ZWJlTFo1YkRwYXFsK2FYRG00TjJkcTBEZDlXdE8zMTlrWGJMNWZOS051N2c3WkR1YU8vUExpOFphZkp6czA3UDFTa1ZQUlUrbFEyN3RMZHRXSFgrRzdSN2h0N3ZQWTA3TlhiVzd6My9UN0p2dHRWQVZWTjFXYlZaZnRKKzdQM1A2NkpxdW40bHZ0dFhhMU9iWEh0eHdQU0EvMEhJdzYyMTduVTFSM1NQVlJTajlZcjYwY094eCsrL3AzdmR5ME5OZzFWalp6RzRpTndSSG5rNmZjSjMvY2VEVHJhZG94N3JPRUgweDkySFdjZEwycENtdkthUnB0VG12dGJZbHU2VDh3KzBkYnEzbnI4UjlzZkQ1dzBQRmw1U3ZOVXlXbmE2WUxUazJmeXo0eWRsWjE5Zmk3NTNHRGJvclo3NTJQTzMyb1BiKys2RUhUaDBrWC9pK2M3dkR2T1hQSzRkUEt5MitVVFY3aFhtcTg2WDIzcWRPbzgvcFBUVDhlN25MdWFycmxjYTdudWVyMjFlMmIzNlJ1ZU44N2Q5TDE1OFJiLzF0V2VPVDNkdmZONmIvZkY5L1hmRnQxK2NpZjl6c3U3MlhjbjdxMjhUN3hmOUVEdFFkbEQzWWZWUDF2KzNOanYzSDlxd0hlZzg5SGNSL2NHaFlQUC9wSDFqdzlEQlkrWmo4dUdEWWJybmpnK09UbmlQM0w5NmZ5blE4OWt6eWFlRi82aS9zdXVGeFl2ZnZqVjY5Zk8wWmpSb1pmeWw1Ty9iWHlsL2VyQTZ4bXYyOGJDeGg2K3lYZ3pNVjcwVnZ2dHdYZmNkeDN2bzk4UFQrUjhJSDhvLzJqNXNmVlQwS2Y3a3htVGsvOEVBNWp6L0dNekxkc0FBQUFnWTBoU1RRQUFlaVVBQUlDREFBRDUvd0FBZ09rQUFIVXdBQURxWUFBQU9wZ0FBQmR2a2wvRlJnQUFGZk5KUkVGVWVOcnMzWG1VWEZXQngvSGZyZlZWTDFWSkwra2tRQXBDSUlBWVdTT29HQXd1Yk1QSXBrTjAxSkZsVUVkbFJCR2RSZUdBTXpxZUFRVU9SbkF5UjlsRVI0NklFQkFSQW9Kc3NpUmh5MElxSk9tbTAydDE3ZHViUDdvYnVqdGRWYStXcEx2RDkzTk96dWw2eTMydjY3NGs5L2Z1ZmZjWjdTWjJLdXlUdEZUUyt5VXRsblN3cExDa1pra2hBUUFBQUVEdE1wS0dKQTFLMml4cC9jaWZ2eGdyc25hcVRzclVPVnlGSkowajZaT1NQaUFwUUwwREFBQUFtQ0k3Sk4wdjZTNUo5eG9ya3A5UlFjdE9oWStROUhWSlowdXlxRThBQUFBQTA4dzJTVCtUdE5KWWtjNXBIYlRzVlBoSVNWZEtPcDE2QXdBQUFEQURwQ1Q5ajZRcmpCWHBubFpCYTJTSTRGV1N2aWpKUlYwQkFBQUFtR0dHSlAyN3BPdDJ4NURDaW9PV25RcWZKT2tXU1hPcEd3QUFBQUF6M0Y4a2ZkcFlrVTFURXJUc1ZOZ3Q2VHVTL2tYMFlnRUFBQURZZThRa2ZjWllrYnYyYU5DeVUyRy9wRnMxUE5rRkFBQUFBT3lOL3RWWWthdjNTTkFhZVI3cmJra2Y1SHNIQUFBQXNKZTdRZEtYalJXeGF5bkVVeVprTlVoYUxlazR2bThBQUFBQTd3QmZrcFNYOU5WYUNqRWxRcFpid3oxWnA5WnlnSjBic3RyMGNFcGIvcExXenRkeTZvL2tsSTRYbEUzWVZDRUFBQUNBbWxoQmwvek5ScTBMdmVvNDFLc0RQdURYb2hNdE5iVzdheTM2S2tuZk1WYWtVTytnOVQxSjM2cW0wRXpNMXBPcmh2VE1MWEYxdnBpaDlnRUFBQURzTWNZbEhiUThvS1gvMEtSM2Y3eEJwdnFwL0I3VDhDUVpyOWNsYU5tcDhDbVM3cTIwc0Z6YTFwb2ZSYlhtMnFnUy9RVnFHQUFBQU1DVWFqM1FvMU91bkswbFp6VlVXOFRBU05qNlhVMUJ5MDZGV3lXOUlxbXRrb0lpVDZiMXl3dDYxTE14UjIwQ0FBQUFtRllPT3NuU0oxYTJLYlJQVlVNS0M1SXVOVmJrMmxxQzFzMlN6cS9rcUk5ZUY5WHZ2OTJ2QWhrTEFBQUF3RFRWME9MU3AzN2Vyb05Pc3FvdDR2dkdpbHhlY2RDeVUrSGpKVDN1OUNpMkxmM3VHMzE2N0lZaGFnMEFBQURBdE9mMkdwMjdzbFZIbmRkWWJSRlhHQ3Z5M1VxRDFrT1NQdVQwQ0hkL3ZiS1FaWGs4V3RUU29wWkFRQUd2bDFvR0FBQUFVSk5ZSnFQT2FGU1J3VUhsYldjem14dVh0T0xuN1hyUDJWVS90M1dSc1NJM09RcGFkaXA4bktRbm5KYTg1c2RSM2ZQTi9yTGJCZjErblhySUlUb2tIRlpES0NRWnc5VUFBQUFBb0s3c1hFNkR2YjE2L3ZYWDljQ0dEY3FWQ1YxdXI5RS8zdCtoL1kvM1YzTzRyS1RseG9vODVpUm8vVmJTR1U1S2pUeVoxbzBmN2lyNVRKYlg3ZGFuampoQ2h5NWVMT1B4VVBNQUFBQUE5b2hjTXFrMXp6K3YxUnMybE53dU5OK3RTNTZhcjhiV3F1Wi8zeUZwaWJFaXZVV0RscDBLdDQ5c1dEWVI1VE8ycmxuYXFlNVhzMFczMlgvV0xKMS80b255QjRQVU1nQUFBSUFwMGJOamg2NS81QkVsc3NXenk5R2ZidEluYjJxdDloQjNHaXZ5eWNsV2pFYTNGVTVDbGlROWRzTlF5WkIxV0h1N0xqNzVaRUlXQUFBQWdDblZObisrTGovMVZJWDh4WWNIUG50TFRCc2ZUVlY3aUUvWXFmQ3BwWUxXT1U1S3ljUnMvZW1IZzBYWDd4Y0s2VE1ublNTWHowZXRBZ0FBQUpoeVZpaWtyMzNzWS9LNWk3OC82K296dS9YQ2k1bHFEL0VqT3hYZXBkUEtZNmZDalpMZTY2U0VaMitOS2RGWG1IU2QyeGhkY09LSmRRMVp5VXlHS3dNQUFBQ0FKQ2xRWmRZSXpKcWxpNDQvWHRjL052bmNGZTF4VzZlK3Ywdi91YkpWZjcraTRtbmZGMG02UU5KUHhnVXRTU2RJY2pUWCtqTy9pQlZkOTRrbFN4UUloU1pkWjZmVHl1M2NxZnpBZ0FyeHVBcnA5UEJMdU1aSUZBcHZybzNIYjl1WVRON1hsY204RU0vbnU3bVVBQUFBQUl6VjZIYlBtZWZ6dldkUklIREs0WTJOS3hvOG5nNlhaY25WM0N6UDdObHl0N1hKVE5KN3RXRGhRaDJ4Y2FPZTcrcWF0TnpGT1Z1ZitYeVBPanZ6dXV6U2loK0QrcWFkQ3Q5c3JNaGIwd1VhT3hYK2QwbFhsTnR6Y0h0ZVZ5L2FOdWs2eStQUmQ4ODVaNWZlckVJaW9jeVdMY3J0M0ZtMDNLeHRSeDhaR1BqT1UwTkROK1JzTzh1bEF3QUFBTUFKanpIZXBjM05YMW8yYTlZVlhtT0NrbVRjYm5ubXpaTXZITjVsOXZQb3pwMjY2cjc3SmkwckttbmxTRi9RZGRlMDZKKyswRnpwNlp4cnJNaXZSeis0SkIzc1pLOE5EeVdMcnZ2SW9rVzdoS3pNMXExS1BQTk15WkQxWmliejlFOTI3RGo4OFdqMFdrSVdBQUFBZ0Vya2JEdjdlRFI2N1U5MjdEaThPNXQ5V3BMc2ZGN1piZHVVZU9vcDVYckh6N3dlYkcvWGdpS2o4SUtTWm8zOC9OVkwrM1QvSDVLVm5zNkY0MEtncEVPZDdMWHRyOFdmbHpvOEhINzdRNkdnMU1zdks5ZlRVN0s4N2VuMFE3ZDBkNStlTGhTU1hDTEFPNCtMbDVjREFJQUtGWXE4aExnL2wzdGpWVmZYc2svUG1YUFBQbjcvY2tteXMxbWwxcTJUNzRBRDVGdXc0SzF0VDFpNFVMYys5OXlrNWN5Vk5EQWNhYlRpc3oxYS85eDh6ZTF3T3oyOWo5aXA4RnhqUmJwR2c5WThKM3QxdjFLOHd5blUwdkxXejA1QzFrQXU5OUp0M2QxblRneFpicGRMSHI5ZlViZGJTVWtGcnFXSzJjUEpuaThDQUFBQWV4MlBNUXBJQ2hVS3NsTXA1UXB2SjRaMG9aQzh2YnY3ekF2bXpYdGlsc2R6Mk9qeXpPdXZTOGJJdDk5K2txUUZjK1lVTGI5bHpNOTlmUVY5K1ovNzlLdmIycDJlbnBGMGhxU2ZqZ2F0SmlkN1JidnlreTV2RFFUazhnN1BwWkhac3FWc3lMS2w3RjA5UGVjbEM0WG8yT1UrdjE5dmVEenF5dWVsWEk2ckNBQUFBRUJSN1lHQXd2bThzcW0zMzRHVktCU2lkL1gwblBlNXVYT2ZNV01tL010czNpeDNZNlBjTFMxcWFpb2VmNXJOY0dBWjlldmZKUFR3bXBSTy9LRGw5TFErT2hxMFhKSWNQZVdWSHBxOGY2a2xFSkFrRldJeFpiWnVMVnZPMm5qOHhqZlM2UmZITG5NSEFuclI1Um9PV1FBQUFBQlF4czU4WGk4WUkxZER3N2psYjZUVEw2Nk54MitjdUgzcXRkZGs1L055bDVnaWZyS3AySys0YXJDUzAxbzIrb1BMNlI3cDJPVEQwYXlSM3F6MDVzMjdUTmsraWV5amc0TS9HTHZBNWZWcXZhUTB3OTBBQUFBQVZDQnIyMXB2Mjd1RXA1SE1NZTdaSnp1ZFZuYmJOcGtTejRsUEZyUWVYcFBTdXZXTzUrMXJzMVBoL1NzS1dxVVU0bkhsKy92TGJyYzFuVjdkbTgxdUg3dXN5K2NqWkFFQUFBQ29Tc2EydGQwN1BpTDFaclBiMzBpblYrOFN6TFp2ZDlJNXRJdFZQNDlWc3ZtU3VnV3RYTGV6ZHd0dlNDUitQMjZCejZkT2hnc0NBQUFBcU1HYitidzBvVmZydFluWlE4TXpFV2I2K2lvdS81NTdLNW9vZmYvNkJTMEh2Vm1TdEQyVGVXTHM1OEVKTHhBREFBQUFnR3BNekJZVHM4ZW9yTVBzTWk2MGJjaHEyM2JISFVUNzFpZG8yYllLOGJpalRmdHl1WTNqdmd5dUJ3QUFBQUQxQ0ZvVFB2ZFB5QjZqOHJGWVZlVS8vMExHNmFhaHVnU3RkRFk3L0VZdko5c1dDb214bjFNOG13VUFBQUNnRGliTys1Q2FrRDFHRlRLWnFzcC82V1hIRTJJRTZ4SzA0c2xrMWZ0bXVSNEFBQUFBMUlIVCtGVElWcGRDZXZzY0R4MXNya3ZReWp2c3pRSUFBQUNBS1ZkbGZ1bnZkN3hmVUpLbTFXd1U3VzYzM0ZROUFMeGp1SXpoMzMwQVFGVnlranB6dVQxMnZPaVE0OGVlcGsvUWNrazZ3dS9YUHN4Q0NBQUFBTUNoTG85SGYwMmx0Q2RlR0JXUE8rN1JtaldhY2FhVVpZemVId2dRc2dBQUFBQlVaSzdiclE4RUFtcDA3ZjVZTStTOFI2dFptdUllclRrdWw5N3Q5OHRuREZjSkFBQUFnSW9GWFM2ZFlGbGFYK1ZzZ2s0TlJpdDdSbXRLZTdTT0pHUUJBQUFBcUpIWEdDM3grWGJyTVdJeHgwSExZNmZDQVJmVkFnQUFBQURsZ2xaRjd3QnVybm5vWU5EalVVL0IyZU5udko0WUFBQUF3SXdNV3ZHS3BvVVAxaHkwREFFS0FBQUF3RFNVc0cwVlpLc2dEZit4aDMrdUttaFYxcU1WWk9nZ0FBQUFnTDJPTFNsdUY1UzBiYVZ0VzFuYnJua2ErR2dGRTJJUXRBQUFBQURBZ1ZqY2NhOVdpS0FGQUFBQUFFNkNWbXlHOUdqWk5rOTNBUUFBQUpnWjJhS0M1N1QyYk5EeUdkTXc5bk8rVU9DS0FBQUFBRkN6aWRuQzczSTExUHNZMFNISCthVjVqd2F0a01lemFPem5UQzdIRlFFQUFBQ2daaE96UmNqalhsVDNvQldkcGoxYWMvMys0OGQrVG1helhCRUFBQUFBYXBiSVpNWjk3dkNOeng3MVVNRXpXbnUyUnlzY3NFNGJGN1F5R1dYemVhNEtBQUFBQUZYTDVISktUZWpFbVpnOTZpR2VtS1k5V2gwKzM4a3RYdTgrWTVmMXgrTmNHUUFBQUFDcU5wQklqUHZjNHZYdTArSHpuVnp2NDFUUW8rVjhlbmUzWi9MbEZjN3Q0VDA2Mkh6WjJBV3BiSGFYTHdZQUFBQUFuT2lMeDNmcHpUb21HTHhNa3JmU3NzcGxtOEZvWlVITDBZTlN2cWJKTTFtc3dxRi9peG9hdnJDUDM3OWs3TEpvTXFuZVdJenAzZ0VBQUFBNFVyQnQ5UXdOS1paS2pWdStyK1ZmY21CRDRBdlZsSmt1czM1b3lIRmVhWFpKR25LeVpXUEw1RUdydS9JSkxiekxXMXR1YjNDN2cyTVh4dE5wN1JnWTBHQWlvVXd1UitnQ0FBQUEzcUVCcXRpZmZLR2dkRGFyL25oY08vcjdkNWtBbzhIdERpNXZhYmxkSlhxejhpVnlScm1nVmNrTGl6MlMraVcxbE51eTVRQ1B0ajJYMldWNXJsQ1FiRnN5eHZHWDErUjJIM1o2ZTl0ZGQzZnZQRDFWS0NUZitxVUxCUTBta3hwTUpybkNBQUFBQURobXVWeUIwOXZiN21wMHV3OHJ0VjA4VjN4RTNrQ1p2cDVZdkxMSk1EWTcyYkxqME9KREhBZXFlQjlXcTllNy9NeU9PWSswZUwzN2NWa0FBQUFBcUZhcjE3dmZXUjF6SG1uMWVwZVgyM1p6aVU2ZG5qTDdWanE5KzB0T3RsejRRYXZvdW1lalExVjlJYk04bm1QUDZaaXpibWtvZUluUDVmSnlpUUFBQUFCd3l1ZHllWmVHZ3BlYzNURm5YY2pqT2JiYzlrYlMwME9UWjVlQ3BNNHkrdzhPT3U3UmF2QTREVnJocFg3NW1vd3lzVjBMZnkyUjBMTFpzK1J4VlQ1YnZOdVk0TkhCNERWTG1wc3YzNVJJM0xZMWxicHZaeWI3WWpLZmZ6UExjMW9BQUFBQVJuaU5VWVBiM2RIbTh5NVpZRm1uSE5qUXNNSnJUSWZUL1R2VGFXVUxrL2RLYlZQNVdRSmpjY2M5V2pKMktueVlwUFZPTnI3em9sNDk4NHZZcE9zT0RBVDAwYlpXYWg4QUFBREF0R01rcmRxK1E4a2lRV3UxTGEwdFU4YmlnNzE2NWNYNVRnNlhkUmtyOHRKSWdDdnJ1QXViaXE3YmxFeHF4NFNwRlFFQUFBQmdPbmk4ZjZCb3lFcExldFZCR1JVTXVFdU1qdlg3ZzVPdEZ4enIxNEhMaWorcjlkdWRQVXJrOHRRaUFBQUFnR2xqVXlLaDUyT3hvdXVmbFpSeFVFNGc0SGltOWE3Um9IV3IwejFPKzk3c2tqTzUvNkt6VTlGc2p0b0VBQUFBTU9VMnhoTjZvTGV2NlBxNHBLY2Q5bFMxdHptZWsyTHo2Slova3ZTNmt6MzJQY3FuNHk5dUxycStJT25Xcmk2OUdvdkxVSzhBQUFBQXBzaWovZjM2UTE5ZnlXMythRHZyelpLa1JRYzZuaWg5azB1U2pCVXBTUHFaMDcxT3UzcTI1cjZyOUVFZTZ1L1hiWjFkNnN0a0NWd0FBQUFBOWdnamFVc3lxWnUyNzlDNldMemt0dXZrN05tc1VlOVo0amhvUGZ0V0JySlQ0Vm1TdGtnS09kbXpkMU5PMXkvclZMeTMvQlNIUHBkTFJ6YzNhLytBcFNhM1d4NWpaQXp4Q3dBQUFFRDFiRW0yYlN0YnNEV1l5K3JWUkZKclN6eUxOVmFucER0c3FaS0hubDUrWWI0T1dld29iQjAwTHUzWXFmQy9TYnJTNllHMlBaZlJUMDk1VTZuQkFyVU1BQUFBWUVib0dRbFp5UXIyT1hDaFJ4dGYyc2RSaGpOV1pQN0VwN211a2RUdDlHRDdIdW5URngrY3E5QjhON1VGQUFBQVlOcmJKdW0yQ2tPV0pLMzR1MGFubS81R2tzWUZMV05GWXBLK1Zza0I1eDd1MVZjZW42ZEZIN0tvTlFBQUFBRFQxbDhsM1drUHZ6ZXJFbDZ2MGNVWE5qdmQvSmU3QksyUnNIV3JwTHNyT1hCemgxc1gzdE9oMVBGV3hTY05BQUFBQUx0VHY2UmYyY016REZiejF0L1BmN1pKOCtjNUdzVzNSZEpqa2lhZkVOQk9oZHNrUFNkcDMwcE80TW1uMC9yUUNWMDZ4a2hIU3ZKVHB3QUFBQUNteUlDRzM1RzFWdFVGTEVrS0JsMTZiZDE4ZGN4eEZMUytZcXpJZFVXRDFralllcStraHlWVk5DYnd1Qk82OU9UVGFYa2xMWkswMkVnTENGMEFBQUFBOW9DWWhsOFEvTEl0YmRYd3pJUzFXSGxEcXk0NnY4bkpwbjJTRmhnckVpOFp0RWJDMXJtUzd0QWtRd3lMV2YxQVVxZWNNWDQrRFNPcFZWS0xwS0FrdjVGODVRNE9BQUFBQUNYa0pXVnRLYVhoM3F0ZVNZTjFMUCtzanpmby8rNW9kN3I1NWNhS2ZIOXNCbEtac0hXK3BKc3F5VVZubk4ydDMvMCtTYzBEQUFBQW1KR09Qc3FuTlEvT1ZVT0RveGkwVWRLN2pCWEpPQTVhSTJIclU1SnVjWHBTYjJ6TGFja3huUm9ZNFAxYUFBQUFBR2FXSmUvMjZjSDc1cWk5emZGcnJFNHpWdVRlc1FzY0RRa2NtWW53RWFkSDJXOWZqMjVaMVNiRDJFQUFBQUFBTThpeUV5eXRlYkNqa3BCMTA4U1E1VGhvamZoWkpTZDQyaWtCWGZ2REZtb0tBQUFBd0xUbmNrbmYvSHBRZjF6ZG9WREljVXg2UmRJbGs2MXczT2RrcDhJK0RZODkzSytTRS82di80N3FzbS8zVTNNQUFBQUFwcVdqai9McHhoKzM2dGhqZkpYczFpL3BmY2FLdkRKcGNITmF5c2lEWFQrczlLUy84YldnYmxuVkpyK2ZjWVFBQUFBQXBvLzNIZWZYWFhlMjYray96NnMwWktVbC9XMnhrQ1ZWT01PNm5RcGJrdFpMV2xqcEw3RnVmVllyUHJ0VGE5ZGxxVkVBQUFBQWUxd2dZSFRNVVQ1OTlNTUJuWE5XZ3c1WjdLMm1tS3lrYzR3VnVidlVSaFYzTTltcDhOOUl1cnVhTThybHBPdHZqT3JLN3cycXY1OFpDUUVBQUtZN3Y5L0lzbW9mbVJTd1RGMUdPRFUyR25tOXRaZlQxR2prOGRSZVRuT3prZHRkZXpuQlppT1hxL1p5UWlGVGx3bnBaczF5MVZ5R2tWRW9WUHZKdUZ4R3dhQ3A0YnQxYWZac2w4SUxQTm8vN0pHcnRsOHRPUkt5N2kzLysxZkJUb1h2bEhSdXRXY1hpOW02ZWRXUVZ0NGMweXV2MHNNRkFFNzRmRWFCUU8zL1lWbjFhalFGNnROb2FnZ1krWHpUcC9IVjNGU25SbFBRMVBxZitVaWp5VldmUmxPb0RvMG1VOGRHVTNQdDViamRSczExS01mak1XcHFyTDBjcjllb3NRN2wrSHhHRFhYNHUrNzMxK2ZmREFCdmlVZzYyMWlSWjUwRnplcUNWb3VrdFpMbTEzcTJhOWRsdGZxQnBQNzhSRnJyMW1jVTJacFRMamU5djJHdjF6aDljVm5wZndEcjFXaXlwdGVkcG9hR09qYWE2bkNucWFuSnlPT3B2ZDZibTExeXUyc3ZKeFIwVFo4N1RXYjRmT3JTYUFyV3FkSFVWS2RHVTFPZEdrME5kV28wTmREWUFRQmdCcnRmMGdwalJmb2N0N09xUFpLZENyOVAwc09TdlBYOERmSjVhV2lvb0hUR1ZqSnB2OTFvbWtaM21nQUFBQUM4SXd4S3VselNTbU5GN0VwMnJDbDEyS253NXlTdDR2c0hBQUFBc0JleEpkMGg2VkpqUlRxckthRG03aDA3RmI1YzBuOVFGd0FBQUFCbXVJS2tYMG02MGxpUmwyb3BxQzdqNkFoYkFBQUFBR2F3VFJvZXFiZktXSkVkOVNpd2JnOHMyYW53QlpKV3FvS1hJQU1BQUFEQUZPaVM5SnlrQnlXdHJyWDNhcmNHclpHd3RWelM3WkxtVUhjQUFBREF0SldWbENpeGZraFN2c2k2bktSWWlYMWpJOXRNSmo5U2RqSHhrWE9iVEVGU3RNUytDVW1aU1phbkpmVko2cFgwcHFTWGpCWHAzZDFmY04ybjRMTlQ0Zm1TL2xmU1I3aCtBUUFBWnF5b2hpY0VtRXltVENNOU90SW9MdGJBaisrbUJuNnBSbnE1Qm42eFJycVRCbjV5cERFL2FmTll3elBYRlpNYStWUE1ZSWw2U0k4Y3UyZzlHQ3RTNEZLZUdydGxybk03RlRhU1BpZnBCNUxhK0pvQkFOanJwTXMwRGdmSzdKdXNzcEZlcm9GZnFwRmVyb0ZmNmk1OExRMzhhdS9DTzJta2wycmdsNnVIbExFaUtTNWxZQVlGclRHQkt5VHBXNUsrTEttQnJ4c0EzakZzVlgvM3QyempVTHZ4N3ErbTVpNzhWQTJ6S1hrWDNsaVJRUzVsQUppR1FXdE00R3FWOUVWSkYwdWF6OWNPUU1OM2NLZmk3bSs1Um5xcEJuNjVSbnFwQnY3dUhHYXp1KzdDbHgxbVk2eEloa3NaQUlBcENscGpBcGRiMGttU3pwUDBNVW56cUFLVWFPRHRycnUvZStVWWJFMi9ZVFo1WTBXR3VKUUJBQUJCYTgrR0xpUHBYWktXU2pwYTBzR1N3aHFlc1REa29JaVlwdDhZN0ZvYStMdDFESFlORGZ6ZCtyQ3JzU0o1L2hvQ0FBQmdiL1AvQXdEVVhrVTdkeldzaEFBQUFBQkpSVTVFcmtKZ2dnPT0"},{ name : "__ASSET__:bitmap_screens_LoadingBar", data : "aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQTFvQUFBQmlDQVlBQUFCSlk2TERBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQTJacFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TXkxak1ERXhJRFkyTGpFME5UWTJNU3dnTWpBeE1pOHdNaTh3TmkweE5EbzFOam95TnlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRjRTFOT2s5eWFXZHBibUZzUkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRwQlJUZEJOa1pETmpWRE9FRkZOREV4T1VRM1JrVTRRakEwUVVFMFJFVkZOeUlnZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBCT1RORk9ERTNRamsxTmtNeE1VVTBPRFk0UTBFME9UUkZOa0pHTWtNMFF5SWdlRzF3VFUwNlNXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEcEJPVE5GT0RFM1FUazFOa014TVVVME9EWTRRMEUwT1RSRk5rSkdNa00wUXlJZ2VHMXdPa055WldGMGIzSlViMjlzUFNKQlpHOWlaU0JRYUc5MGIzTm9iM0FnUTFNMklDaFhhVzVrYjNkektTSStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPa0k0TWpaRk9VVTFOalk1TlVVME1URkJRVEk1UWtGRU1EVXlORE0xTWpKQklpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09rRkZOMEUyUmtNMk5VTTRRVVUwTVRFNVJEZEdSVGhDTURSQlFUUkVSVVUzSWk4K0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4KzNXbjRIQUFBQlg5SlJFRlVlTnJzM1UrSWxIVVl3UEZuM0ZWVFl3bXlGcklGaVE0aHVaa3BvUWlSaDBqeUVFcVJYcUpqZU9taTFNazhHS2huNlJSMENLUElrNHAyVU5HTEI0dFVLakhLaXkyNWl5RlphYnE3dmozVHpycXpmMXQzWkdaMzUvTmhuMzMzZmQrRkdXWi9NSHlaMlhkS1JWRUVBQUFBRDg0Y0R3RUFBSURRQWdBQUVGb0FBQUJDQ3dBQUFLRUZBQUFndEFBQUFJUVdBQUFBUWdzQUFFQm9BUUFBQ0MwQUFBQ0VGZ0FBZ05BQ0FBQVFXZ0FBQUVJTEFBQUFvUVVBQUNDMEFBQUFoQllBQUFCQ0N3QUFRR2dCQUFBSUxRQUFBSVFXQUFDQTBBSUFBSmpSV3V0NVk2VlNhZHh6MjB2Um5wdXRPUnR5bnN0NTNKOEhBQUFZb1NmbmZNN1JuQVA3aXVnZTd4ZUxvbWpZblN6Vjg4YkhDcTBNckxiYzdNclpsalBYdWdFQUFDYXBOMmQvenM0TXJodENheWl5VnVmbVlFNkhOUUlBQUV6Umxaek5HVnRubXo2ME1yTFc1K1p3emdMckFvQjY2NThYMGJkd3JDZXJpTnNQZTN3QXBxTkYzUkV0ZDhZOWZTdG5ZOGJXaWFZTnJZeXNaYms1azlOV2ZmN3Fpb2hUZXlLNlg4d252L0tUbkV0MUFBQUFWZVprVGkwK0YvSFNCeEVkcDBlZExyOTljRTNHMW85TkYxb1pXZVgvdy9vbXA3UDYzSkZQSWk2OUxhNEFBSUJKeUl4NTZxdUkxOThhK0xuS2haeFZHVnU5alF5dFJtVE51eU1qNjR0akdWbnZpQ3dBQUdDU1NoR1gzNGo0N05Tb001MlY1bWlvdXFaTjVkV3NIZFhIVG44WTBmV0tkUUlBQU55L25uVVJKL2VNT3J5ajBoNE4wMXJuMjNzMVo4bmd6cDFGRWQrK0h3TXY5ZlUvb0Z2b3Q5Z0FBS0FwbEM4QjBSSng3cjJJdGJzajVnOWQ0SDFKcFQwT05VdG92VmE5ODhPYjJWamxqeGU3YlkwQUFBQlRVOHlOdUxncFlzV25vOXFqWWFGVjcvK0tXbE85OCt0S2tRVUFBTlNvTitMS0N4TzN4MndQcmFlcmQ2NHV0eVlBQUlEYWRUODdjWHZNOXRBYTl0R1FOeGRiRUFBQVFPM0dhSXVGelJSYXcvVFBzeUFBQUlEYTljMmZYdmZISjFjQkFBQUlMUUFBQUtFRkFBQWd0QUFBQUJCYUFBQUFRZ3NBQUVCb0FRQUFNQU5DcTljZkFBQUFlQUQ2aE5ZOXhVLzU3VTlyQWdBQXFNSGZsYllRV2tQVldWek9iWSsxQVFBQVRNRzFiSXBmWXRxOVc2NTFPdHlKNHJmODlrOUVxU08zSldzRkFBRDR2NGpJcjY3Yy9qNDk3MTdydExrbjEvT0J1bTY5QUFBQU01K3JEZ0lBQU16dzBMcnBJUWNBQUdaN2U5UTd0SDZ1M21tNTY2OFBBQURVcnZYdXhPMHgyMFByVFBWTzJ6VUxBZ0FBcU4wWWJYR21tVUxyU1BYT3NwTVdCQUFBVUx0blRrN2NIck05dEk3bGRBM3VMRCtlZDZEZm9nQUFBR3FJbW15S3p1UEREblZWMnFNNVFtdGY4ZC9IaU8wZDNGOTBQV0xWSVFzREFBQ1l1dWVQRHJSRmxiMlY5bWlPMEtyNE9PZkM0TTdhTHlPZXVHUnhBQUFBOTYvOWNzUzZ6NGNkdWxCcGpvYXFlMmhWeW5KTHpvM3lma3Z1YmZvb1l1bDVpd1FBQUppOEp5OUdiTjRkMFhybjNxRnlZMnhwOUt0WlphV2lLT3AzWTZYU3ZaKzNsMko5Ymc3bkxCZzRHZkg5eXhIZmJZam9XV3JSQUFBQVkzdWtPMkxsa1lnVlgyZEdERjNXL1ZiT3hveXNFNE1INnRrNjB5YTBLckcxT2pjSGN6cXFqOTk0TE9LUDlvamJDeTBpQUpoSWYydEUzenlQQTlBY0h2cHJJTElldlRMcVZQbkk1b3lzczlVSG16YTBLckhWbHB0ZE9kdHk1bG8rQUFEQUpKWGZJcmcvWjJkRzFvMlJKNXM2dEtxQ3F6MDNXM00yNUhUbXRGczNBQURBQ04weGNNR0xvemtITXJDNngvdkZwZ2t0QUFDQVpqREhRd0FBQUNDMEFBQUFoQllBQUlEUUFnQUFRR2dCQUFBSUxRQUFBS0VGQUFDQTBBSUFBQkJhQUFBQVFnc0FBQUNoQlFBQUlMUUFBQUNFRmdBQWdOQUNBQUJBYUFFQUFBZ3RBQUFBb1FVQUFJRFFBZ0FBRUZvQUFBQkNDd0FBQUtFRkFBQWd0QUFBQUlRV0FBQUFRZ3NBQUVCb0FRQUFDQzBBQUFDaEJRQUFnTkFDQUFBUVdnQUFBRUlMQUFBQW9RVUFBQ0MwQUFBQWhCWUFBQUJDQ3dBQVFHZ0JBQURNVlA4S01BQkdCZzNTbmFWUEtBQUFBQUJKUlU1RXJrSmdnZz09"},{ name : "__ASSET__:bitmap_screens_LoadingScreenBG", data : "aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQlFBQUFBTUFDQVlBQUFCN05Nck5BQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBS1QybERRMUJRYUc5MGIzTm9iM0FnU1VORElIQnliMlpwYkdVQUFIamFuVk5uVkZQcEZqMzMzdlJDUzRpQWxFdHZVaFVJSUZKQ2k0QVVrU1lxSVFrUVNvZ2hvZGtWVWNFUlJVVUVHOGlnaUFPT2pvQ01GVkVzRElvSzJBZmtJYUtPZzZPSWlzcjc0WHVqYTlhODkrYk4vclhYUHVlczg1Mnp6d2ZBQ0F5V1NETlJOWUFNcVVJZUVlQ0R4OFRHNGVRdVFJRUtKSEFBRUFpelpDRnovU01CQVBoK1BEd3JJc0FIdmdBQmVOTUxDQURBVFp2QU1CeUgvdy9xUXBsY0FZQ0VBY0Iwa1RoTENJQVVBRUI2amtLbUFFQkdBWUNkbUNaVEFLQUVBR0RMWTJMakFGQXRBR0FuZitiVEFJQ2QrSmw3QVFCYmxDRVZBYUNSQUNBVFpZaEVBR2c3QUt6UFZvcEZBRmd3QUJSbVM4UTVBTmd0QURCSlYyWklBTEMzQU1ET0VBdXlBQWdNQURCUmlJVXBBQVI3QUdESUl5TjRBSVNaQUJSRzhsYzg4U3V1RU9jcUFBQjRtYkk4dVNRNVJZRmJDQzF4QjFkWExoNG96a2tYS3hRMllRSmhta0F1d25tWkdUS0JOQS9nODh3QUFLQ1JGUkhnZy9QOWVNNE9yczdPTm82MkRsOHQ2cjhHL3lKaVl1UCs1YytyY0VBQUFPRjBmdEgrTEMrekdvQTdCb0J0L3FJbDdnUm9YZ3VnZGZlTFpySVBRTFVBb09uYVYvTncrSDQ4UEVXaGtMbloyZVhrNU5oS3hFSmJZY3BYZmY1bndsL0FWLzFzK1g0OC9QZjE0TDdpSklFeVhZRkhCUGpnd3N6MFRLVWN6NUlKaEdMYzVvOUgvTGNMLy93ZDB5TEVTV0s1V0NvVTQxRVNjWTVFbW96ek1xVWlpVUtTS2NVbDB2OWs0dDhzK3dNKzN6VUFzR28rQVh1UkxhaGRZd1AyU3ljUVdIVEE0dmNBQVBLN2I4SFVLQWdEZ0dpRDRjOTMvKzgvL1VlZ0pRQ0Faa21TY1FBQVhrUWtMbFRLc3ovSENBQUFSS0NCS3JCQkcvVEJHQ3pBQmh6QkJkekJDL3hnTm9SQ0pNVENRaEJDQ21TQUhISmdLYXlDUWlpR3piQWRLbUF2MUVBZE5NQlJhSWFUY0E0dXdsVzREajF3RC9waENKN0JLTHlCQ1FSQnlBZ1RZU0hhaUFGaWlsZ2pqZ2dYbVlYNEljRklCQktMSkNESmlCUlJJa3VSTlVneFVvcFVJRlZJSGZJOWNnSTVoMXhHdXBFN3lBQXlndnlHdkVjeGxJR3lVVDNVRExWRHVhZzNHb1JHb2d2UVpIUXhtbzhXb0p2UWNyUWFQWXcyb2VmUXEyZ1AybzgrUThjd3dPZ1lCelBFYkRBdXhzTkNzVGdzQ1pOank3RWlyQXlyeGhxd1Zxd0R1NG4xWTgreGR3UVNnVVhBQ1RZRWQwSWdZUjVCU0ZoTVdFN1lTS2dnSENRMEVkb0pOd2tEaEZIQ0p5S1RxRXUwSnJvUitjUVlZakl4aDFoSUxDUFdFbzhUTHhCN2lFUEVOeVFTaVVNeUo3bVFBa214cEZUU0V0SkcwbTVTSStrc3FaczBTQm9qazhuYVpHdXlCem1VTENBcnlJWGtuZVRENURQa0crUWg4bHNLbldKQWNhVDRVK0lvVXNwcVNobmxFT1UwNVFabG1ESkJWYU9hVXQyb29WUVJOWTlhUXEyaHRsS3ZVWWVvRXpSMW1qbk5neFpKUzZXdG9wWFRHbWdYYVBkcHIraDB1aEhkbFI1T2w5Qlgwc3ZwUitpWDZBUDBkd3dOaGhXRHg0aG5LQm1iR0FjWVp4bDNHSytZVEtZWjA0c1p4MVF3TnpIcm1PZVpENWx2VlZncXRpcDhGWkhLQ3BWS2xTYVZHeW92VkttcXBxcmVxZ3RWODFYTFZJK3BYbE45cmtaVk0xUGpxUW5VbHF0VnFwMVE2MU1iVTJlcE82aUhxbWVvYjFRL3BINVovWWtHV2NOTXcwOURwRkdnc1YvanZNWWdDMk1aczNnc0lXc05xNFoxZ1RYRUpySE4yWHgyS3J1WS9SMjdpejJxcWFFNVF6TktNMWV6VXZPVVpqOEg0NWh4K0p4MFRnbm5LS2VYODM2SzNoVHZLZUlwRzZZMFRMa3haVnhycXBhWGxsaXJTS3RScTBmcnZUYXU3YWVkcHIxRnUxbjdnUTVCeDBvblhDZEhaNC9PQlozblU5bFQzYWNLcHhaTlBUcjFyaTZxYTZVYm9idEVkNzl1cCs2WW5yNWVnSjVNYjZmZWViM24raHg5TC8xVS9XMzZwL1ZIREZnR3N3d2tCdHNNemhnOHhUVnhiendkTDhmYjhWRkRYY05BUTZWaGxXR1g0WVNSdWRFOG85VkdqVVlQakduR1hPTWs0MjNHYmNhakpnWW1JU1pMVGVwTjdwcFNUYm1tS2FZN1REdE14ODNNemFMTjFwazFtejB4MXpMbm0rZWIxNXZmdDJCYWVGb3N0cWkydUdWSnN1UmFwbG51dHJ4dWhWbzVXYVZZVlZwZHMwYXRuYTBsMXJ1dHU2Y1JwN2xPazA2cm50Wm53N0R4dHNtMnFiY1pzT1hZQnR1dXRtMjJmV0ZuWWhkbnQ4V3V3KzZUdlpOOXVuMk4vVDBIRFlmWkRxc2RXaDErYzdSeUZEcFdPdDZhenB6dVAzM0Y5SmJwTDJkWXp4RFAyRFBqdGhQTEtjUnBuVk9iMDBkbkYyZTVjNFB6aUl1SlM0TExMcGMrTHBzYnh0M0l2ZVJLZFBWeFhlRjYwdldkbTdPYnd1Mm8yNi91TnU1cDdvZmNuOHcwbnltZVdUTnowTVBJUStCUjVkRS9DNStWTUd2ZnJINVBRMCtCWjdYbkl5OWpMNUZYcmRld3Q2VjNxdmRoN3hjKzlqNXluK00rNHp3MzNqTGVXVi9NTjhDM3lMZkxUOE52bmwrRjMwTi9JLzlrLzNyLzBRQ25nQ1VCWndPSmdVR0JXd0w3K0hwOEliK09QenJiWmZheTJlMUJqS0M1UVJWQmo0S3RndVhCclNGb3lPeVFyU0gzNTVqT2tjNXBEb1ZRZnVqVzBBZGg1bUdMdzM0TUo0V0hoVmVHUDQ1d2lGZ2EwVEdYTlhmUjNFTnozMFQ2UkpaRTNwdG5NVTg1cnkxS05TbytxaTVxUE5vM3VqUzZQOFl1WmxuTTFWaWRXRWxzU3h3NUxpcXVObTVzdnQvODdmT0g0cDNpQytON0Y1Z3Z5RjF3ZWFIT3d2U0ZweGFwTGhJc09wWkFUSWhPT0pUd1FSQXFxQmFNSmZJVGR5V09Dbm5DSGNKbklpL1JOdEdJMkVOY0toNU84a2dxVFhxUzdKRzhOWGtreFRPbExPVzVoQ2Vwa0x4TURVemRtenFlRnBwMklHMHlQVHE5TVlPU2taQnhRcW9oVFpPMlorcG41bVoyeTZ4bGhiTCt4VzZMdHk4ZWxRZkphN09RckFWWkxRcTJRcWJvVkZvbzF5b0hzbWRsVjJhL3pZbktPWmFybml2TjdjeXp5dHVRTjV6dm4vL3RFc0lTNFpLMnBZWkxWeTBkV09hOXJHbzVzanh4ZWRzSzR4VUZLNFpXQnF3OHVJcTJLbTNWVDZ2dFY1ZXVmcjBtZWsxcmdWN0J5b0xCdFFGcjZ3dFZDdVdGZmV2YzErMWRUMWd2V2QrMVlmcUduUnMrRlltS3JoVGJGNWNWZjlnbzNIamxHNGR2eXIrWjNKUzBxYXZFdVdUUFp0Sm02ZWJlTFo1YkRwYXFsK2FYRG00TjJkcTBEZDlXdE8zMTlrWGJMNWZOS051N2c3WkR1YU8vUExpOFphZkp6czA3UDFTa1ZQUlUrbFEyN3RMZHRXSFgrRzdSN2h0N3ZQWTA3TlhiVzd6My9UN0p2dHRWQVZWTjFXYlZaZnRKKzdQM1A2NkpxdW40bHZ0dFhhMU9iWEh0eHdQU0EvMEhJdzYyMTduVTFSM1NQVlJTajlZcjYwY094eCsrL3AzdmR5ME5OZzFWalp6RzRpTndSSG5rNmZjSjMvY2VEVHJhZG94N3JPRUgweDkySFdjZEwycENtdkthUnB0VG12dGJZbHU2VDh3KzBkYnEzbnI4UjlzZkQ1dzBQRmw1U3ZOVXlXbmE2WUxUazJmeXo0eWRsWjE5Zmk3NTNHRGJvclo3NTJQTzMyb1BiKys2RUhUaDBrWC9pK2M3dkR2T1hQSzRkUEt5MitVVFY3aFhtcTg2WDIzcWRPbzgvcFBUVDhlN25MdWFycmxjYTdudWVyMjFlMmIzNlJ1ZU44N2Q5TDE1OFJiLzF0V2VPVDNkdmZONmIvZkY5L1hmRnQxK2NpZjl6c3U3MlhjbjdxMjhUN3hmOUVEdFFkbEQzWWZWUDF2KzNOanYzSDlxd0hlZzg5SGNSL2NHaFlQUC9wSDFqdzlEQlkrWmo4dUdEWWJybmpnK09UbmlQM0w5NmZ5blE4OWt6eWFlRi82aS9zdXVGeFl2ZnZqVjY5Zk8wWmpSb1pmeWw1Ty9iWHlsL2VyQTZ4bXYyOGJDeGg2K3lYZ3pNVjcwVnZ2dHdYZmNkeDN2bzk4UFQrUjhJSDhvLzJqNXNmVlQwS2Y3a3htVGsvOEVBNWp6L0dNekxkc0FBQUFnWTBoU1RRQUFlaVVBQUlDREFBRDUvd0FBZ09rQUFIVXdBQURxWUFBQU9wZ0FBQmR2a2wvRlJnQUMzc2RKUkVGVWVOcnNuWFdjRytlMTkzOHpZbW1aMGN3UVkrekVpZTB3YzlJMDBHRFR0RTJhNGszaGxtL3A5dllXMzF0T2t6VFlwRWtiQm9kamgrMlltV0c5WG1heDVubi8wSzVYMG1xa1ljMUk1L3Y1S041b0hqenpERHhIQjdnTjY2b1pFdUNPL3lmcER4RTQ4VzhrdGNHbC9ZcVRVNGZqc28xa1RObXhwVEwwbDdZT0o3bXNrdktKNCtFVTFFbnFkL2hySmxGR1hKcCtXTHA1cEZabEhCSzZFNjkzdkRJYjB3K1g3ZnlOWFNod0lJU202Qzd3aUVsYVhyTGdkQ3FyVjF0bUdJTlI3Ukg2TXdpZ0E0QkFvaUFJZ2lBSVM4RURxQVJRUXFLd0hNekU3VEdMallGcDN4Y0RqeVA4VklSNXovQnhKcm1ScEpLTWpkMFhIeS9IeG15ZmpuZkZNZEV4cHFzMzBnK1RNTUVrZlFFYmJVK1NVQm5MMG5MMk9xbnpVRldlc1l6bmhFbHVYMlFtWThxeXpMMHh1UXVVcGZ0SDVnSm5DZWN5K2ZHZzR4NmRVM2hNWGgxT1lkdFpTM0U2YWkwa3RNMnBrSXNTNVYrNnNiRjBwVVdVZittV1kzcmwzOWgrbENqL09NUlFGOXVmZStXZlVaZU1VZU1sNVY5aEV3TndERUFiU1BsSEVBUkJFRlpFUVB4SHZGWUFVUktIcFREemV6aG5ramtaMVc5YVd5VUJkY0x3L3BPVHVHOU51NS9tUkRzYTJUK3pkRTB4VG54cm5iSVB6NjV6R0xzRFowbmJiVTZ4VUNXVnlxR3VSYW1laGROMHNYR0dYVFNKcmZIaVI3V3cvcE01b2F6V2Z5b1dEY2RKdVJRbENFOEQ2ejlPNGNubU9GbXlITGtCU0ZYK2pkSHJKWDB2MGsrQzhvL0xPdmUwdHlWRnlqOEFxSTBkaHBNRkRiblpHL0pRSStVZmtXc0dBUndHTUVTaUlBaUNJQWpMNHg5K3JnK1FLQ3dGS1FITnMwOUxVOStCTU9waUIrSjdXalZLd0RRN2JyRjlkSktlaFhGWk5SVk1zaGd5S3dFbEMwVkQvWVptM3BaWnhzUEptb1B5c2h3NGViSk1jNWhUdExqVFYrYkZUNzNhaTRTVFhjOUkxOStjTFVhSkZ3ZW5kcEZCVFBtWDdiUnhhVzVGSXE2L0lzby9sckVIbG1FKzBwVi81VUliZkt3Mzl3L2NYQ3YvQ3VWbGc5Q1hHT0lXZjIzRGZ4TUVRUkFFa1I4SUFOcEIxb0JXSXgvZnk2MnFCRXlEaHcyZ0luWXNvWDM1eGxPaisyRW1Xb2FsM2E4aldRbklwZGRBc0pSKzVPZ0ZXQ1o5aG1qRlRCb2w4K3Bkc3RjUlU4WnlraGRhWmlWZ2xqRnkybHdzSTMveFl4YVR3cXRJdWdKUlQ5ZGZqZTRCWEc3dmtGcTUvc28rZDlrV1BKZTl4ZlEzQzNIbG54SkxUSzh3Z0FxaE5mY1BOek1vLzh5cWdDVGxuM1VZc1E0WUpGRVFCRUVRQkQzdkNkTmcxdmZ6Zk55N0tPaXJuTFdoU09pVjNWQjZWMkNXWm5jODFoVlltaUdadURKTXRsYkZDRmRnWGM4ZHA4djRjdUVLckVvamxxQkw1TWZXdGJMcmIzYk5iejY3L3BvMzdsL0NVVTc1R1lnbi9RaWpWamlnengwbUYway9TUGxINUlyRStFQms5VWNRQkVFUWhmSHNIN0g0cHppLzFvQ1VnT2JZdTRuVXJ4RU93U2tFSkZvQmlqVEhpVG51V2pBZVlONjZBc3RONmlveVBoTzRBdk9jNWpjVFRrRlZjdjBWSFprQ1YxbEZycjhwTndtNWNmOEtLdWtIS2YrTWE0L1FoeUNBSXdENlNSUUVRUkFFVVhDTXhQd05rQ2dzQVNrQnpiR0hFMDBLY3NEUXBDRDZ4UU1jVzQ0cEVncTVBaVByV1ZHdzhEUzZadml4cTBqZUNWYnQrc3NaZDcvUTFQVlhNODF6aHZFcDFDakx6cFdjOWlLVkYvY3Y4NHkwU2ZwUkV6c01Kd3NZY2pPbkI2WUoyaU8waHdIb0J0QUNJRUxpSUFpQ0lJaUNKUXJnS0lCT1NidDhJdGVRRXRBY2U3bTBTVUZDcUlrZFREaXVmVklROFgwOEpNVURUTlV2eU5jWGFCa1BVSzdJMVZ2ZkdlOEtyS1NTbnE3QW93b2NYcFBUb2tKaVNxei9KQTFBYjlkZldZMWtuNk5XY2YrWTdJdDVyT3V2M25IL1pDM1U0U0psUWp1S2NwMzBnNVIveHJWSGFFOEVjY1ZmRDRtQ0lBaUNJSWhoK2hEM0NnaVRLRXdQS1FITnRhZEx3TWY2ZFUwS29qWWVZRHBYWUttS0pFV3V3QmxMeVExOUpuY3BtTUVWV091RUlGcXMzWGhsM2pLSlAvTGM5UmNLRjF4K3gvMkw0eFVHVVNrY05lOERKNThma0ZMYUl1V2YrZWtmZnJrUGtTZ0lnaUFJZ2tnaFBQeWUwRWVpTUQxYXYzdm5reEl3eCtNdFo4ZmdFL3JVTlVmeEFBdkNGVmpad3RRbUlRZ3ZyYkFKRW4vb2VYM254UFZYYnR5L3pPUnIzRCs3bmtrL3pQNWdNdHZEMld3eUliSXpFdXk3QXhUc215QUlnaUNJekp1SlRsQnlNS3VRYjBwQXEvVXZtaFRrSUJ3SUZXZzh3SFFWRmNZRHpEaUx6SDNJR1UrdWxsQXVFNEx3Mml4ODh5YitNSy9ycjl4UmNUSVhUaGFKYVJUM1QxejVwejd1SHdlRzJ0aEI4SWhxZjNWYXlmWFhqSW8yVXY2Wm53RGlBYjRIU1JRRVFSQUVRVWpFUC96KzRDZFJtSjU4MmlQa1NUeEFIZ0xxWWdmQVFkQXRIaUFuYW9FR1hlTUJKbS9WdFhBRnpsVElXcTdBVmtvSXdwc3Y4UWVuYUJTWkZ3cTUvb290VExWeC85S1gwQ2J1WDJYc0tOeHN5SkNidGFrZVJubzkyUFBsMXowaU85MklCL2FPa2lnSWdpQUlncEJKREhGTHdDNVFnaEN6azA5ZVFubWlCSFN5QUtwakxRbkh0WTBIbUc0L2JrUThRSElGemk0ZitYTlVzakRWdVFMenViaXcxV1NRMFhTSU9kUXNweDJmQW9XWnRlTCtjWkxGNHhQNlVNbzZjdnVRSk9XZnZtTWl0R2Nrb3g4bCtpQUlnaUFJUWkyOXcrOFZFUktGcVNFbG9EbjJmQWtVc3k0VUM5MHkyaytqaURON1BFQTVBalhDRlZoV0l6cTZBbk9jdkxrWWZLM3djbHUxU3VJUHpWMS9PVzJWbHFwVFljdTAvalJIM0Q5cG8zUWdqQnJob0I2Q3M4NkRsSlIvaEZ6OGlBZndEcEFvQ0lJZ0NJTFFpT0R3KzhVUWljTFVrQkl3ZDNzL2ticlZ3aEU0aGFEc0Rxd1FEM0RrRHpYS09NMWRnVFhPMVdDVUs3QXlDU20zQXVUbGRKaUx4QitjWGxkOW5yait5anR2Vm9qN0o2QXV0aDk4dW93RnBQekxqNWNCUWxzWTRpNDZGTFNiSUFpQ0lBZzlFQUFjUXp4SkNMa0VteGRTQXVadUQ1aE9MUUFCZGNKK2NJamxYVHpBZ25VRjFtRVpHWjBRaEZjK0kyTVNmeWhaVEVib0tuTG0raXN6N2wrNlBoaGtkeWRlVHlUdW54TGxId0JVeDFyZ1pBRjlIMFJXZWdEbjIwc0FvUzBqTHIrOUpBcUNJQWlDSUhTbUQwQUx5Q1c0RVBZZytiU1h5ZUY0SFFpaEpuWTQ0YmdDSmFBdThRRFQ3TytWdWdMTDZkQnNyc0J5VDZrc3ZZMDVFNEx3VWs4V3AvWkt6YlBFSDByTHFuYjloWmp5VDFwL2FWMS9kWWo3SjMzR28zMFZDOTBvWmwzYTMveU50djdqY2xRM1h4LytSSHBHWEg2REpBcUNJQWlDSUF3aUJISUpOanY1dEo4d2VtK213NzZ6aVBXaVZPaElPSzVGVXBEME9vSXh6WWpHQTlUR0ZUaXpqa0JEa2V2bENtejVoQ0RaU28zOWxsZDJkampaWjlYTWlUK3M1dm9ydFEvSnJyK0pLSEw5aFlxNGYzR2NRaERWd3BIY1BnQnpyZXdpcFIwaGxXNlF5eTlCRUFSQkVMbGh4Q1dZc2dUblAvbXlQOG54bnJCU09BcTM0RmMzYkFueEFNZnFBU0FwSG1CcUg3S3p5K2F0SzdEWkU0TEl0d0xrcFV3eDN4Ti9HSFczTWRMMU41M3lqNlVyejJWZlE1SmNmMld2bGVOM0NuQ0lEY2RIb0xoL3BucTRraUxSZk1SQVdYNEpnaUFJZ2pBSHZjUHZKVkVTaGVuSXA1amllUkVQa0tGTzJBOWV4M2lBcVR0ekxzdCtQL0YvMHJrQ1MxRUNtc0VWMklnTEtaOFNndkNTdTZMRUgrTGxUZWo2SytrMmtjNzFGK21WZjhuelRoLzNUOTZNUnpYY05iRWpjQ0NrKzQyWEhtbzVhb3ZRaHBFc2ZKVGxseUFJZ2lBSWVqOGhyTGczS0dBbG9BMFIxTVFPSlJ6WHdoV1lTNnN6R05PQ3FDc3dJTzVjTEgycXVYUUZwb1FneVllejljbkxHNktGRTM4VXNPdHYycmgvcVdnUTk0K1RzNDZPeC8zclFSSHIwZmVCWmVZSExDbi9DQ24wZzM1aEp3aUNJQWpDbkl4NEtQU1NLUEptajJMR2ZVc2U3QTk5ckU5UlBNRDByc0FxNHdHT3FaVm96VWV1d0ZsSFpNYUVJQktPODVrcWFXSDlKN2NPdWY2bW5Id05YSC9UM2pxU3pQeHlFL2ZQZ1JDcWhjTzVmZERsTXVrSEtmK0liREFBN1FBNlFERjJDSUlnQ0lJd04xMEEyb0IwVVgwSVUyeEx6ZE5XTHZkUEpvZ0g2QlNDNm9hdFJUeEFMdk91WDQwcnNGSWxZRjY3QXN0WlhMcFlBY2EvNWFXdk5QTW0vbERTdGhWY2Z4TjFBSnpDK1RJWmd6STI3cCtBMnRnQjY4ZjlJK1Vmb1JkUkFDMEFCa2dVQkVFUUJFRlloTUhoOTVjSWljSlVrQkl3TjN2R0RQRUF1VnpFQTVRd1BpYWlWNUF5VldiVXFjbWhma2Y1eE15UkVJUVhLMVdRaVQveXhmVTM3ZTFBcmV1dnRuSC9LbU90Y0xHQTdqZFlReDZDVm50b21rMGV4RmdDQUE0RDZVSmpFZ1JCRUFSQm1Kb3c0bkVCaDBnVXBpS2ZsSUJHOTYzeEh0V0JFS3BqTFFuSDlZOEhlTHlJSEZmZ2pOTzN2aXV3a2hOcDlZUWd2THFGYm5EaUR6a3hBcFVzREkzdkpGWjAvVFVpN3A5UDZFY3A2OUQ5eHByWER5eXp2Z3dRNnVsRFBJNE91YzhRQkVFUUJHRlZCQURIQVBTUUtPaTkzOFR6eUtFU3NKaDFvMGpvU1RpdWJ6eEFjZ1dHcUl3eWpVWFNJdERCTTFTTGhDRHA0TlZaLzhrUXBGaDdTcFI2VWt1UTYyL21RWEhxSksxa2puWkVVQ01jS3R5SGp0bVVqNlQ4TXc4ajhmNDZTUlFFUVJBRVFlUUozYUM0Z1BteWp6RmJPM213ajZrUkRzT0JzSVpUbDVqSVFvSWhHcmtDcTExNnVVOElrcTQycjN4VytaLzRJNjljZjhjVUdxdkpsK1A2cXlUdUg4QlFHenNJUGwwcVU0cjdaOTEyQ1BXTVpNK2plSDhFUVJBRVFlUWJJM0VCb3lRSzAwQktRT1Aza21uakFRcW9qZTBIQjZZOEhxQk1WMkF1UlIrUXBzSDhkUVhXY0xGYUpTRklLcnpTSWNvN3dkSlBsbVpYcStFKzRSbEdaUWJYMzBRa3gvMUxPYW95N2wrNTBBWTNHOVQ5Um1xYUIwUStQbVFKN1FraUh1OHZTS0lnQ0lJZ0NDSlBHWWtMR0NCUm1BWlNBaHEvcDB4VDE4VUNxSXkxSmh6WEloNWdpbzRCeXVNQnB2YVJPMWRnTGM2ekFUa2ZWSXhEZEd5YzhvV1dXcFZQVzR6VFk5WHJrZmdEOGdSbndDTFF6L1ZYbXJLVHBTc3YwZldYeTJRTHpDbXh1UnhkckI1aENCVkNtKzQzVU5NOEdQTHg0VXBvenlEaWxuOHhFZ1ZCRUFSQkVIbE9ERUFyZ0g0U2hXa2dKYUR4ZThzMGRVdFpPN3pDUU1KeEJVNm1IQ2ZhQ1NlYWxDSmpneW42QmNoU2ltbnZDcXl2OFJlbktQU2RsTFp6bFJBRWFmVSt2SGdiT2x2L3dkakVIem03YzJybStwdTlGU1orM1NZVUVuZjlUZDg2azdKOE0ySkRETFhDQVkxdUFUbDhJQlh5UTVYUW5wR1lPSXhFUVJBRVFSQkVnY0FBZEFEb0lsR1lCdHF2bUtMdkd1RWdiSkw5NURPcHhWaldJMGxIUlYyQklkTVZPUE53ZFhjRjFtVTlXQ0VoU0paZVV1cng4Z2VobmZXZmtyWXRsZmhEanN1c3FWeC8wOGY5azNjbVJ2dXFpaDJCRFJGdHIxOFQ2WGdMN3FGTXFIL3hiUU5seFNNSWdpQUlvbkRwUmR3YWtKS0RtQU5TM2huYlg1cTZOa1JSSFR1VWNGd0xWK0RNOFFDUEZ6SElGVmorUEdTSU9zOFRnbWcxQWo1OVhaa0tPazJzL3d4Ty9HRVcvKytVaTFGOTFsOFIxOThFNVI4bjljSkk2VU82L0VmN0toSjZVY1I2ZEw5aDZ2b2dzSW9wdWxrZnhzUW9VY1NEWUErU0tBaUNJQWlDS0hEOG9PUWdac0pNKzQ0Q2RRWDJzWDRVQzEwSng2VXBBY1ZkZ1RQdis1UFVQMHdzaEpoY1YrQ3hJMlJTOUE1YUNOM3dQQkI2SkFUSmNPNWtKd1FacXdEaTFROGwyNG5rTkJhMCtUTEFLRDNwMlUra1dKMWtKTG4rcHZsYXVldXZOTEhZRVVHMWNGajNHMlhlUG56TTlqQW4xQkVhZnNrTmtTZ0lnaUFJZ2lBQWpDWUhvV1JvdEc4dzB6NHNoMHJBYXFFRkRvUmx0NjNhRlRoRGcyYklDc3dadEZCem54Q0VremMyR1N1RFE2SUZvTkxFSDNLVVYzbVgrRU5rYkp6OEs5WE1yci95enNUbzhacllJZkM1eW01QVNUOElNK0ZIUE5rSC9jSk5FQVJCRUFTUlRHejRQWWs4SlBLSFFrc0tvcW5vQk5UR0RpS1RBazlzb0dOMUJWWnlCVTdYaklsY2dlVXVGNzBTZ25BS0YrendZVjZWbW8zVDI4Sk94cVJVV2hicXIra1ZYNGptY3YzVkp1NWZtZEFCRHh2UTlrWnFCWVVZQmRFbFV1a0h4YmdoQ0lJZ0NJTEl4RWlNNUY0U0JlMW5DbXdQbUthdWl3MmhYR2hMT0s1RlBFQnhQWUE1WElFNTdZU3VoMmVvU1pLVHFFb0lnaEVMUUU2UEZXMmc5Wi9odnQ0WnhtWjUxMStJeFAyVElJbmh3azRFVVNHMDZuNWoxUFg2NHd5cVUrZ1B5M3luQy9GTWR3UkJFQVJCRUFTOU8xbUZmTmpYV053VnVFSm9nMXZ3Snh4WGtHNkM0ekoyWW4xWFlDM09zWTRKUWZTeUFsUzZDTG1rSkNENlcvOHBVZjVwZXFvMVR2eWh4ZUl6cGV0djVxV1o1Und6MU1ZT2drczFkeXFFdUgvNStMQWxsRi9ZeDBDL1loTUVRUkFFUWNpRnZDZk1BV1VHTm5ZdnlvM2RVTlFJYWZiVkVocVFFZzh3NTY3QW1vaktmQWxCcExXdFowS1F6T1BqamJUKzArVjZ5MkhpRHlVbk4vV0U1WnZyYjNtc0ZVNFdLSXdidkZuNk50TkRsaGlOWXpORW9pQUlnaUFJZ2xERVNQemtHSWtpcDFCbTRKenVyeHdJb1NwMk5HRU0rZUVLUEtwQ1VHWUZhTlRKMGNRS1VGYUgrbHNCOG9vYU5zajZUNWtqcXBrU2YyUlcvakdGa2pLcjY2OUhHRVE1YTlmMktqQkppRW5MUEZSSStaZGJvb2huK3FWTWRnUkJFQVJCRU9vSUlaNGhPRUtpeUNta0JEU3VyelIxUzFnbnZFSi93bkhydXdLekpGV0NqcTdBaGljRUViR0dOSkVWSUsvOTZ0WE8raS9yR0V5ZitFT2NmSFA5dFVGQXRYQlE5eHVnS1c3cVp1alg3R09obDFTQ0lBaUNJQWhDTGZUakt1MHpyTGp2MDNnUFhDTWNoZzFSMlEza3V5dXdKSUZiTFNHSXpsYUF2TGJXZjFKMXZsWk0vSkhoUXRJczhVZjJ1YkpzQXM2UjYyOWxyQVVPTFRVZmxQVER1Zy9sUWlRQWNsTWhDSUlnQ0lMUUF3cXZZZzZzN3ZWa3BYaUFLZGdRUVZXc0phRmRNN2dDcDJsTmlkNUZNeXRBTStXTTBOb0tNTU80WkU2Ymg1Sk9WQW93SjFlTkJpZFI5WWdTWEg5bFdmK2xYRnhKdW5VVHVQNTZoUUVVc3k0alQ1ODVIMFJXNjV2UWhrRlFvR3FDSUFpQ0lBZzlHVW13MWsraXNEeUZsQlJFd3o2S1dBOThRbC9DOFZ5N0FuT3FYSUdUckFBNW5VK0htZkpHS0J5dmVFL3lqUE40V1FQbVpFeFMxQVRVMnRaLzB0b1hIMS9ldVA0T0g3WkJRSTF3U05zMVQzSC9yUE1RTFhUNkFMUkJheHQyZ2lBSWdpQUlJaDBkQUhwSUREbUQ0Z0VhMTFjMlYyQVp5Vnl0NEFwc21vUWdackVDbE9NS3pFay93TXRiZzV6MjY1M2pMSEh5bEo3QTQvMnBuSTdwWEgrSHFZeTF3R1psMTErclBiRE1JZ01DNkFiUVNXSWdDSUlnQ0lLZ2Q3QUNnc0lnNVd6UHlpT0txdGdSUmZ2MjBhOE1jQVZXS0ZPekp3VFJaSkhvNEhVcVIwL0hTeCtvakNHcVVPcHBhdjBuV1dMbVR2eEJycjhtZW1CUUFGd0NvRitmQ1lJZ0NJSWdja2tmZ0hhUUZ3YnRRNndSRDFERFBvcFlMNHFFM29UakpuUUZ0bEJDRUhrdGEyQUZLS2VVRGxhQXZOVHhxTGYrazZPNTFjRG5XY00wem1sSHBNRDZUNVlFeWZYWCtqZnNmQjEvSWNNUWQvbWwrRE1FUVJBRVFSQzVaUUR4dUlDa0JLUTlqZG5Ici9FZXVWbzRZaGxYWUZsVHpFRkNFQ1AwU2RvbUJNa3dEd21WZVBVcmsxTjhvbVZmSFRuUTJDbzlZYWtuZ1VtY3ExamlqNHlGek9MNlMzSC84djlCV2Nnd3hKTjlESklvQ0lJZ0NJSWdUSUVmOFF6QmxJd3ROMWg5ZjJUUmVJQTVkUVhPMHF5U2hDQko5Y3prQ2l6NS9Pam9VU3JIQ2xEQ0dIZ3BaWTIxL3RQZ1JISG0wckxvbnZnREpuSDlOVUxVRlBlUHlBWEM4TXRsZ0VSQkVBUkJFQVJoS29MRDcya3hFb1Zsb1hpQXNzbVpLN0FCQ1VGTXM2ak1raEJFOG95eld3SHk2Z1Jrb1BWZkRrNlMwaE1sVmZqWnhzL1N0UytTK0NPMWpxVmNmODMrWUtDa0g0Vk5iUGlsTWtpaUlBaUNJQWlDTUNXaDRmZTFLSW5DY0t5ZUZNVEM4UUJONFFyTWplMGpxWTRTSFZHaEpBU1JYRjA3SzBCZW1lRGxUTTFnNnorejNIMFNYSDg1QlZKaTR0ZlRtUDgzMXZYM1NHNWNmeW5wQnluL2NrRjArR1V5UktJZ0NJSWdDSUl3TmVIaDk3WUlpYUtnOXlsbVZ3TG11U3V3V0d1eXJRQTVjeTlNcTFvQjhwcGRKV1Q5bDdZL3ZWMS9rNzdLTmd0TlhIKzdyZm1nb0tRZmhGeEdsSDloRWdWQkVBUkJFSVFsaUlDVWdMVG5LYWk5YVJIcmhjOUFWK0RSTC9WekJjN1FFc2dLVUUxN1hBWUx3RHl4L3BPdi9PT2c4TElaN1M5ajRvL3NaRTM4d2NabUZ0YmI5WmVEZ0NyaGNHNXVsSVVlOTQrVWY3bDVlV3lobDBlQ0lBaUNJQWpMRVIxK2o2TWZjV24vWk1YNUsraWpXbWlCYlNRSXBzNnV3RWxXZ0tLdXdNbXR5VVZSUWhBWnN4dzlaTFN1S2ZkV2dMeWgxbjhjcC9wS3labFdWbWI3U2hOL0pGOVlYTVpoY1hJV3EyclgzMVk0VXAraTVQcWJ2dyt2UW1ia2wyT0tJVU1RQkVFUUJHRk5SbUk0a3hMUWVLeThqN0tvSzdBTkVWVEdqaXJhNTJmV0Y0eVVscWlRNHNiV1lDbnQ2NVlRUk05TXZCbmE1N1RJQXFOWW55Wi9YcnpZdU1RbmtsNzV4eWtRTXFmcUpFb1JyL1VTZjR5Mm5NSDFWeVR4Ui9yeE1ZVkxaTFFmdHhCQUtlczAxME1oWDI3OGhMa0lJLzZMTVNuL0NJSWdDSUlnckUxcytMMk9FcmxaazBLSUFhOWhYOFdzQ3g1aE1LRmRwVDZOTE91UnBNb0tYSUhseXNnMHJzQ1N4OHhwY05yRjRpOUtVd0tLNmFaNDR4YTMyTW13Z1BXZnpDYlVKdjdJV0VoRjRnOGxycjhBUXpVN05IWjArZXo2bTA4UFBVSTZJNEdqWXlRS2dpQUlnaUNJdkVBQTBBcFNBdEkrSnYvbW45WVYrREE0Q0JMSGtFWWpvM0ZDRUlpMFp0bUVJQnBhQVdxaUhGVUFuMjQ4UmxqL0tSV3VkTEhtYitJUExzUEZOS1kvbGE2LzVVSUhuQ3lnM2VrbDExOTZhSnFSRUVqNVJ4QkUvbTE2RXo4eHhLMmJNMzFTNnhBRVFlVEwvWkNVZ01aRHJzRDY5NVZTMTRFUXltTnRpdmI5NmZVSG1hMEF1UlE5UmJyMjh5NGhpT1J6by8waTBzSUswSzc1UkNWTVBxdjFuOFV5c3FRbS9sRFNHa3MzRnBIRUg2bDE1Q2YreUNJTEx1RUdJaHd6MTBNZ1gyNzBacEVUTWFyOG84MHVRUkJtSUlheGlqaGgrTEdlK3Y4czRYdWsvSzBsZk1LemFlVHZrUStmOEVuOS85UmpCRUVRdVdKRUNWZ1B3RTNpTUhSUHhpemFoaGI5NXFDdmN0YU9RYUVjWWQ2ZDRLTExGQXlCSlR6czJYRzlBd01icS9NWTZZZGphUnFMLzQ4YVBjbUlSelBIdU9HV2NpaG9qZ05ZZWd2Sk1XTVRLVHN5ampHakVTMnZac2JKNDdKTFZ6eG9iZjFuc0FtbWhBUWtTcTMveGl6T0xPVXpKLzdJM0kwUzExK2xjcStPSFJrMUlkYnd0T20rTkVqNVIwZ2xQUHd5U01vL2dpRDBoQ0d1MkV2OUNHbitOZXZHZVFTbGx0SWppa0RiOENmeDc4UVBQUWNKZ3REelhrWktRT01wWkNXZ0VVckVNWDB3MUxCRE9JS3BFaCtxYVFaNVhCRTFWc09ScWxBU25XTENnWkUvUjVWNThmYlQxMDMrbGtNMkk2dE00OC9VSWpMV1NUZlhUR1gxV3h3aW94OHpoZ3p0SlJ5eXAwNVFuYTVDQXhQTUhKbGY1bGZpaitUMnBjZGJITzJuV09pR2h3MUEzc21UdFZqVWxTTUl0VkRNUDRJZ3RDVFJsVGFXOEcrTTdqUEhOOTRDc2lkWlNsVUkyaE0rcENBa0NFS0xleEVwQVFralVhYm5VZFdIaS9sUkpuU2lsNitXYUFXWXhpSXRTY0VrYmgrWTNFU0NGV0JLKzJOVWFVcVVhS0pXZ0hLVmdHTHRxMVBzeWJNQ0ZCbFgydktTVkppU3htVlBhaVhqc0ZJR3Bmb3FVTnVFam1tWUZhQmI0bzhFNVYrcWM2OWVycjkyUkZBbHRHaDcwelB5QnB1TDhaSDFuN1VnNVI5QkVFcUlBWWdnZmZ3OFFqc1paN28zMjlOOEhJZ3JCd21DSUtSQVNrRGpJVmRndy91cUVGb3h4SmNoQW9mdXJzQ2pWbW5JNEFxYzNGcm1LY3UxQXRSUDBPYXdBaFNyTHQ4SzBKNDRNWFc2aXR4Yi8rVWs4UWNuY1c1UW1QZ0QwdHVYTzM0eEttTXQ0RlBmdnNuMTEveHRFTklnNVI5QkVOa1lzZUNMSkh4R2ttUVF1VVZNNGNvaHJnZ2MrWkJpa0NDSVRKQVMwSGpJRmRoUStYSVFVQjA3aEtPMnljb0hLVVBKbFgySzRsYUFVc1NUbUhYWWFDdEFVU1dndEZtYXlnclFubDM1WUIzclArUEhFZjlIcXZWZkttWk0vT0VWQmxERWVyVzlFUmwwT25MMklETkRHNFEwU1BsSEVFUXFJNHErY01LL3BPaXpIbXo0M0lWVHZ1Y1JWd1E2RS82MWs3Z0lnc0NvRXJBQmdJdkVZZGpleVF4S1FEUFBYY1A1ZWRnQWlvUmVEUEpsRmt3SWtzSHRXQk1aNlpjUXhOQnh5TFFDdEkrY1BIWDZpZ0sxL29QT2lUODRzYSt6Si82UUx2MUVLMFlCVmNJUktkTlh1bEQwdmFHYWVYeG1Ia09oRUJsK3lTUGxIMEVVTGxHTUtvbEdMUHRJMlpmL0cvelE4Q2Z4MlR1aURCejVrRktRSUFyM0hqR2lCSFNTT0F6Yi96QUxqc0VLcnNCcDZsVUpMUmppUzhEQVMxQUNKaXI0VXBOTnlFZ0l3b21QUzZ1RUlPbXQ4c2dLTU51NDdHVDlwNlMyK1JOL0tKbHJtZEFPUjlJYk1zajFWKzgyQ09NMi9VZEJjYm9Jb3BCSXRBZ2IrZEFQQUVUcTJoaUJIOTc4dXpDcUZLVG5QRUVVQnJIaDk4Ukd4SDhjSU13UHVRSkw3c09HQ0Nwang5QnBhMUErU0xrSlFZQWNKZ1F4K0lSWXpBclFUdFovMmVwd0dkOGY4eVh4aHdOaGxBdnQydDU0dEN5blpYMksrMWRZa1BLUElBcURSRXV2RU9MV2ZRUWhaLzBFaHo4ak9CQlhDSTU4ZUJJVFFlUXRJMHJBQnBBUzBBZ29IcUF4OHh1bWxIV2dYNmhBbUhjWFFFSVFzZ0xNaEYyeWRzSkE2ejlSNVorRzFuK2N3akViWXYwbjByc1UxMTlaTWs4NFhCMDdEQzdWRDhvS3JyKzVlbUNab1ExQzJzdGNLeWtDQ0NKdnIrOHdTT0ZINk1lSW0vaGd3bHR6b2tLUUVvd1FSSDRSeGFnN01JVUZNR1pQVmFqeEFQV2UzNWg2RE5Yc01Gb3dWV0s3bVpSb01seUJNN1N2cnhXZ2xCR01jWFpXY1o3U2oxMk93dEFvSzBDNzNIV1VWWXVoZ2ZXZnZESEpzZjdqTkJ1SEVkWi9HZXVJeklWVGNEWjlRaTg4YkVCcFErcHVhRWJYcDdoL2hZT0ErQys1WVJJRlFlUUZESEZGWHhDazhDTnlweHlJQWhoS2VJdDJJNjRNZE5Qem5TRHlnZ2hHM1lGSnlXL012cWdRNHdIbXdCWFl6WVpRTEhSamdLK1FOUWd1b3o0aWl5dHd6cXdBMHcwM2s0SlJaSllxclFEbGowTi9LMEM3SkEyRmxhei85RTc4d1VtZkVTZlNmcEwxSHlkdGpIb20vcWdXV3JTOTBXaTdKTFNyVDVaN2hhVW9hQVVwL3dnaUh6WmlJMjZaWWVUM3IveUU5WWdpYmgwNFlpRTRZaG5vQmlVVElBaXJQM3RHTEFISjlkLzhrQ3V3WktxRW8vRHpwWWpCWmx4Q0VORm14YTBBcFV5WlMvaERzaFdnUnE3QWNzcVp6UXJRTG1kOVp0V0U2R1g5eDRsWnUzRXlyekFOYmd5UWJ2MlhPbmFXcld3T0VuOVV4bzdCbG1wR1FhNi8rczJQRklqNnd3QWNRM0ljSjRJZ3JFRmlITFlnS0VNdllTMUczTkg3aDVVRzdvUVBLUkVJd25yWDg0Z1NrTjdmOWQ5amtTdXdQdk5McWNjamlvcllVWFRZbXBWM0xEY2hTS29WWUpyMmsrcUlLdHd5OUtYSitaZmVpS2hTVDZXeVVIUWtHbG9CMnJOcUtNeGcvU2U1QVoydC82RGU5WmZMVk1qZ3hCOU9JWWhTMXFIMGRCbXhKTFNyYjRJRTF2VHlZQkR0QVB3a0JvS3dERkhFbFgyQjRRMFhRZVFEd3ZDemFPUjVOR0laNkFIRkZpTUlxeEJFL0VmbE9ucVBOMlIvbUdzbFlJRzRBcGV3TGd3SWxRanlYbU1UZ29nME52S25XbGZnOUVvNWc2MEFSV1ZuSGl0QVh1b1FzbW95OHRqNno1REVIMHhPY2hLTkVuK3dJOXJkY2ZMZDlSYzVHRGNobnc2TXVtSVJCR0Zld2dENmhqZFd4d0QwZ3BSL1JINFRvalZQRUpiRWovaVB5MFJoN0pmTWJHaWlvWHlxMldFa2FlRGtkc3lsTjByS1dKdUo1Mm1RWnFTVnZTTU8rUk82VG9uaG1wU2U3Um03SWV1L0pIS1IrQ085OVo5WVU1eGtDUlFMUFhDelFXMXVLdVQ2UzVpQmJzVGRyZ2lDTUNjaHhLMzhBb2huOENXSVFpVXhkcUFOY2F0QUQrSldnZ1JCbUkrUmE3V0tSR0dKZlJ1NUFtZXQ1MlFCbEFxZDZPT3JKVFljUHk0bElVaXFGV0J5a1Z3a0JDRXJ3TVQyN0ZLNnp2WU5XZjlCb2t6a2FYbmxKLzdJMG5wQzRvOUs0V2h1YmxoRzF5ZlgzOEtnRDBBUGlZRWdUQWNwL1FnaU16R01LZ041SkNzRDZmMkJJTXoxcm1rRFVFNmkwSDIvU0s3QWhsQWhITU1nWDQ0WTdNcGNnYlZJQ0NKYUE4b1VicUlKUWZRNUdWYU1CY2lMYWlsTWF2M0hTVkJBU2hxTkJhei9SQ3VwVFB4Um5vdkVIK1Q2UytqRklJQk9FZ05CbUlZdzR1Nk5yUmgxeXlmbEgwRmtSd0F3TlB4TWF4MitqaWliUFVHWUIvSTJLWno5VXo2NkFxZlU0eEZEUmV5WXVnRnltYjBWV2JvbUVsMkIwelRKSkUxM3JMRVZVelYyaVdMbHhITkZTSk9nZ1Vsc3VmUUpKK3p5dXN5OTlaOStWNkhJeWVRVXRKREoraTlMNG8vTWkwTjk0ZzhIUWlqTFJlS1BRbno0a0Z6MWgrS3lFSVE1aUdJMDRVR1V4RUVRcWhFd2FobG9SOXdxMEF2QVFhSWhpSnpTZ2JnbG9JOUVvZnMrekdJV2RWYVVhd25yUko5UWhURHYxaWdoU0dJWkVTdEEwWVFnNGxhQXNrNm5xQldnbkZZMFdFQW10UUxrMDJvcUN0TDZUeHlwMW4vcDZtVXN5eVJveVZQcnEwejhVUmxyQVVlSlAvU3ZUK2hQQ0VBYlBkd0pJdWNLaW5iRWt4cjBnNVIvQktFSFVRQUR3OCs4dHVHL3lhcVdJSEpIRytLaExRaHprODk3VUUwVGdoeVIwYTRHVm9CQXhvUWdnSFFIM05UL2s3MHRMRUFyUUY1NlY0VnIvU2ZMOVpkTFhyUmNwbW9wN1dkTy9LSEMrbThZcnpBQUgrdlhaazJSNjYvNXg1RFBSQkIzanhKSUZBUmhPRUVBWFNBWFJZTEkxZk92Yi9qNjZ4eFdRdEFQWVFSaExBenhINzdvK1pmLys2a0NjQVYyczBFVUNiMnlHeFpYOVNXbUtCWFJqWERpalkzUmZtVE1mU0NpanhMTkNNd1p1d0JObUJHWUordS96QldaaWhPY01VMEhrNVBFZzBrKzBXT09IVmN5TWxRS0xmUWdNZE5ObTFCR2JIampROVlQQkdFY1VWSTZFSVRwU0ZURzl3R3A0WjBKZ3RBUllmamFJOHQzMnBmbEFWVkNDN2dSeXdvdW0rQXk2V1dZOUZPU3dRcFFqUWNuazN2dUM4d0trSmZXaFRXdC81VHFycmtrcmJWODZhaEovSkhlK2k5WkxweUN4VkFxZE1LSm9EWnJpVngvaVZ3eDhvc3JiWElJd3BqcnpZOTR2S05qSUxkRGdqQ3pJbUxFUmJnZDhVUWlwS0FuQ1AySmdqeFNyQUM1QW1ldFowTUVaVUs3N0FhU3ZSM1Q2ekU0TWJkZUhST0NwUFl0VjJpY1ppY1Nwck1DNUJVTlRvTVZhSVQxbjNMaHAxOXdjdHFXb29JMEt2R0hIVkdVQzhlMHZTbVo4VVp0QnVVZktSRDFwUTFJMVdNVEJLSERobWJFMnE4YjhYaWJCRUZZZ3pDQUhveTY2Sk4xRWtIb2Y4MVJUR3J6N1F2TnNFKzAySDY3WEdpSGZjVEtncE0rQVNsUi96akl0YkxMclJXZzBqcFdzQUswWjI4NlQ2ei9KTHJQNXRMNlQ3U1N5c1FmRmJGVzhGcVpiZVFnTUdsQlBad0ljVG9SdDJvZ0NFSWZnb2duOVRDeGt2MVlIM0NnRXpqVUJlenBkT0pJbndNdHZUdzYraGs2QnhsaUFvZWhZQXp0UFFIODErVTh2bk14bVdVUUJVcGlGbUVYZ0NMRU13a1RCS0U5STlieU5TUUtYZmRaak9hc3AydzRDS2lNdGFETk5rRml1MmtLSkdXb2xaQXJlTVFLa0dPaVRhYldTVCtzc1Zsd1IvK1dtQkU0SmJ2dWFJbjh5Z2hzVDZwc2tQWWpKOVovTXFmQjVNeklqTlovdzdpRkFJcFpsOUpUcGF4ZUlicitrdkpQWC9xR1B3UkJhSzhrR0JwV0VwakV2VmRnd0o0MllPTVJEbXNQdWJINXFCMzdPeGo4WVE3RkpjVW9McXVBcjdRR1JTVVZLR29vUnYzMFlrengrZUQxZXJGbDB3Wjh2UHBsUFBRNU82NWJRcVpQQkFFZ2JzVWJBbUFENEJ2KzJFZ3NCS0VwQXdBY0FNcEpGTHJ1MDVuRjZodlZwOUorVXVvVnNWNzBDNE1JOEVXeUdwYWc2aHVqaU12ZWNoclZuVlJGV3VJSTlGUWVweGxQZW9XajVCbnF0NWlHeDJxWHJkVW9BT3MvQml0Yi95WDNVWm1ZMWp1Zkh3YTVyRS9veXhEaTFuOEVRV2hIZEhpejRrZk9mMUUvMEFtOHQ1ZkRXM3M4ZUc4Zmo3NEFqNHJLU3BUVk5LT3l0Z25qVDZuR2dzcEsyR3ppR291aHdVRTgvWS83TWEya0ZSOS94NC9LSWpyRkJER0dHSUQrNFd2Zmk3aFZvSVBFUWhDYTBUMThUZEV6eU56N3hsd3FFUzFBRld2QllVeFBtRyttU1p2YkNuQ2tYcUZiQVNaaTEwWVBrbC9XZjdKUDVKZ211UFR0aVg2ZExtQW1VejAwbjlBTE54dFNQMGM1OVFwUkdVY0tSUDBJSVI3UW5DQUliVENCbSsrK0R1Q2xMVGFzMnVIRitrTUNTa3JMVWRNOEZYV040M0RPMG1aNFBQTDhGSGRzM1lMM1gzOFd2NzQ2Z0NzWFVwWVNnc2dLUS96SHRTSEUzWU9MQWJoSkxBU2hDZTNETzJ5NnB2VGJkN0VDRzdQQlZvQk9Ga0N4MEkwQnZrTGxNRWZWYjZOcU5CRXJRRTZzTVhWV2dJYXNHd3RZQVNiV3NoOGZ0TlRKeWRGN0ZLVDFuOGhjSkZ2L0pSeFJZZjNIZ2FGU2FEWCs1bVowZlhMOXpWK2lpR2NlcFJCZUJLRitzKzlIWFBHWGd3emFnVER3Mm5ZTy8xenZ4ZXBkZ0sra0hBMlRabVBjb3NtNDhhSjZjRHl2cU4xd09JelhuMzhTNWRIOVdQZnRJVlFYMDZrbUNObU11QWZiRWJkYTh0RzdEVUdvZnVZZUE5QUlzckRWYzg5SnJzQzZVaW0wWXBBdkF3T3YwZ293dlhZbDdiZUpWb0JwMmljcndBeWpsdEd1WFZ5UG9iM0psMW10L3pod3NsNTJPSkh4Y0puRWttTDl4OUxPTTF0aWErbURMQkU2NFVoTjNhaTM5Vjh1YnY2NXJFL29oekQ4OGtRaHZBaEMzU1prSkFtQXdZWnhmUUhncWZVOEh2elFoOTF0SEpvblRjUEU2U2ZnbXRQSHcyNjNxMjcvYU1zUnZQTFVvL2o2T1VPNDg3UUluV3VDVUVzVThhekIvWWhiQlBvQThDUVdnbEJFRFBGTTNFMTBIWm1XZkhVRjFzZ0swSVlJeW9SMjlQQjFzaG9RNzM2c0ZlQVkrMEJPZkV4aUNpOVowK1VBanNteHRwTWpQek5hQWFaWGh0ckoraTk1cjZSRUVTclYray9hVEpPdC8yUWwvdUJHTHRnWUtvUTJ1ZFBJSkZydHl1bFZQMWMzV0VJZjJvRlUvVFZCRUJKSnpQNXBvQVd0UHd3OHVjNkdlOS96WUgrWERSTm5uSURwS3haZ1dXMnRabjB3eHZEQm1qZlJzdjA5dlBTRkljeHNvTk5ORUpyZlAvb1FqeFBvUTl3cWtCS0dFSVI4SW9qL21GMVBld2JkOW1Ia0NxeHRQeW4xeW9WMkRQQ1ZpTUlod1Fvd1RUTlpyQURUMXBGcEJTaGxJbHpXRVJTV0ZhQTl2UjZEclAreXpwZ2JkUmtlSXdrdXM1aXlXdi9KZHYxTlBsd2Fhd052SmRNcGN2MGxFdWxDUEM0UlFSRHlpQTF2Mm9lTWZTbGV2UXY0L2RzK3ZMdUh4NlFaSjJER2FZdXdYRU9sM3doK3Z4OHZQUEVBVG0zdXhMUGZEY0JscDFOT0VMb2hETjlQQmhGUEdGSU1nSzQ1Z3BCSEFQRkVkdFVrQ3QzMmtJWG1DbXlvZUFXVXg5clFZV3VTT0hicENVRlNyUUJGOTlocHJBQkhzL3VTRmFEY2NwemtSemxaLzBrZXg5aUcwMXYvcFZlSUtrMzhNVnJTZ1FqS1dLZnlhU2lweHhsK044cHRmVUkvQmhCM1FTSUlRam9qbVQwTnpPamJQUVQ4YlkwRGYxM2pSRWxsRTJZdVBBVTNuVGNKbkU0LzFoMDVkQWl2UHZNSWZuV1ZIMWN0b2tRZkJHRVlpUWxEdkFCS1FJcEFncEJEUHdBbmdGSVNoU214bWl1d3dWYUFKYXdMZmFoQytIaFdHNWxXZ0VrUGsxU2Rra2hDa0N4V2dFb21RbGFBbzlqSitrL2U5WkE0bnF6V2Y1SVRmMmhuL1ZjUk93ck9TSjh2Y3YwbHRDSUlvSVBFUUJDU3lZSGliL01SNE9lcnZGaXoxNEVaSjV5RVMyNWNESy9YcTZQeWdlSERkMWZqeUxiVmVPTXJma3l1b2ROT0VEbkRQL3doUlNCQnlLTVRjU1dnaDBTaHk3Nk1YSUYxaEtFaWRoVEhiSk1rOWkzZENuQzBoelQ2bEVRbElGa0JxbHdJeWVYc2tpYVJVbDFPZWRYbHNrN0dZT3UvdFBMZ0pJd3krY1NtSDRVTU9hY3A2UllDS0dJOVVOaVFOdldNdUdGYXVUNlJucEdNdjR4RVFSQlp5WUhpNzVXdEhMNy9uQmQ5UWpubUxqa2RONXd6WFRkcnZ4RkNvUkJlZVBJUnpLdHN3VlBmRHNCTjJSUUp3aHlRSXBBZzVITU04YVFnOUN6VFozL0lMRnpmYkhKSnFlZGovZkFJZ3dqd1JiSWFWbVVGbUtIVk1Tb3lVYXMzc2dKTWgxMlpkcU9BcmY4U2xtL0dRb1pZL3lYM1VjbGF0THRaYUxzTTlLbHY5djRJYWJEaGx5THk2aU9JekJpcytHTU0rUGQ2SHQ5N3hnTjNlVE1XblhVV2F1dnFEWmxxVjJjbm52L24zL0h0Y3dmeG1lVmhPdmNFWVVaSUVVZ1EwaEZBbVlITmpGbGRlZFhXMTJoZWxhd0ZSekE5b2MxTURldHJCU2hXaDZ3QXBaV3paeDE4U2pVNTVWV1h5em9KcTF2L2NRbWprQ0huTlBpRWZyalpJRlEzWk9STno0ZzZ1UjR6a1IzSytFc1EyVGNOSThINERYbzVmWFlEajIvKzI0Mmltc2s0NDZwelVWWmVidGgwOSszZWhUVXZQNEYvZk1hUGt5YVJXVEJCbUI0LzRza09mSWdyQWttNVFSRHBpUUJvUXp3ek1LSDlQbzFackg4enV5K25qTTNGQWlnU2VqRElsNnVjNG9qMlpXeENFT2xpSVN2QXJLUE9VTjZ1cDNhRHJQK3kxTWs2VjZuV2Z3eVZRb3YwcW5JbXE3YWNsamNoSzljbjB0TTdyTlFnQ0dJc2JQajZHQUNNQ3UyNmFndUh1Ly9saGJOc1BFNi84anhVVkZZYU91V1AxcnlKWTd2VzRMMXZCRkJmUmt1QUlDeDN2eHBDUEdOd01iMDdFVVJhL0FDNkFWU1FLSFRaTHhhU0s3REJDVUdxaEtNWTRrdkJ3R3RnQlpqK01VSldnUExMeWoyaGRqbkZVLzhhTTBsRFYzdStXLzlKbDJleDBBT0hsVXlvNklXUUdIa0I2aUl4RUVSYVJoUi9Ccm5HcnozQTRZNUh2WWg1R3JIczR2TlJYV05zdG8xb0pJS1huMzRjVTczNzhOUzNnbkNSS3lGQldCT0dlS2lDUWNTdEFYMzAza2NRWStnQjRCcStQb2pDeGtKSlRHeUlvRlRvUWk5ZkxXdHlaQVdvMVZySlBEK3BJN0dQVmtyVGdWNEQxN0tjN0d2TUt0Wi9XVWJGamZ3bG9GSm96VHhvcFpOVlcwN0xHNk9WNnhOakdYR0JJQWdpbVFDQVBzUVQ0eGhBV3ovd2xjZTlXTnRTaXBYblg0NzZ4a2JEcHp3ME9JaW5INzBYdDUvY2c2K2ZTL0grQ0NJdkVCQzM4aDhBVUlwNG5FQ0NJRVpwQjlDSWVIWmdRdHQ5STFrQmFqZXVsSHJsUWh2NitFcUpWb0RwMml0c0swQlY1VFRwbjVNYnJsZTY5UituVTZJUXN2NUxQbHdxZE1HR2lMRTNHU1Byay9JdlB6Y0Z4MkNZU3lOQldJSXc0b28vZzR5NXcxSGdmMWU1OE1lM25WaXk4Z0pjYzk1Y2d5MzU0M1MwdCtQNXgrL0gvMzF5RUpmTXAweEFCSkYzeEJCM2R4d0VVRWJLRG9JWTh6NU1TVUgwMmE5YVNRbG9JYVVqanlqS2hIYjA4SFVTK3lZcndDd2psbGRXNHZ3eWtWNEJLRGY1aCtURlNkWi9ZNDV3bkV3Wko2b0pCWlFMYmREa1pCbXg3eU5sR2dFQUhjUEtEb0lnNHB2alBzUmQ0ZzFpMVZZZWR6N2lSdE9NUmZqVTU4NkV3K0hJeWRUMzc5Mkx0MTk4REU5OXpvK0Y0eW5aQjBIa05XSEVMWjQ4aUZzRWtwcy9RVkJTRUNKNW44eE0ya2RLdlRLaEhmMThGV0xIYitUU0dqNWU2cmdTSzcwS2pxd0FOVHpGYWRxMXEvYjdKT3UvckMybHQvNlRLZWMwaDh1RWR2QmErSW1SNjY4NTVsc0k5SUtTZmhERXlJTm9ZUGhqa082clp3ajQvQ05lYk9xc3hIblhYSTN5aXR4RklOKzZjU08ydi84YzN2bTZIMDNsdEJ3SW9tQUlBQWdDS0VJOFVRaFpQaEdGamgveG1JRDBMTlIrSDBtdXdMcU1pNGVBOGxnN09tME5FdHZNVm9Dc0FHV1ZWV2tGT1BiM043TCtTenR2czFuLzJSQkZtZEFCZlU2V1RqY2xLL1ZIeWovdENTTHVCa1FROUxJZnQvb3owT1AxOGJVODduN0NpL21ubm8ycnpsK1VFM2ZmRVQ1ODV5MzA3Rm1OOTc0VlFLbUhsZ05CRkJ3alA0QU1JVzROU0lrUWlFS25HL0drSUJRclUvdjlZRDRxOFV3Z3l4TFdpVjVVSXdxSHJNR1RGYUFHNWVRdW81UjI3ZEtia1ZwU1grdS90SUtTTVY3VFdQL0pISGZxNGZKWU8zZ3Rkby81YXYxSG1Jc1k0bkZPeU11UEtHUWlpRnZCR3BpMHZhMGZ1T2srTDlwaWpianlsaXRSVkZTY3cwMC93MnN2UG9meTRDYXMvbm9BVG5JQkpJakNSa0RjOG1rSWNlc25CNG1FS0dEYUFEU0QzT1B6aVR5MkF1UWdvQ0oyRE8yMlpvbHRack9tczY0Vm9CTEJxcllDVkhGeStUR1RTYW1ldVgyTnJmb2tsT01VTFZBVFd2L0puczlvU1RzaUtHR2Q2Z1ZqNU0xSXovSm1xMCtNWGZMSFlLaTFFMEdZYnBQYk8veHliNkR5NzltTk5wejQweUtVekxvY0YzL3k1cHdxLzVnZzROa25IOE5rKzBZOGZhZWZsSDhFUVl3U0hyNC85b0FTaEJHRi9hNUFQNWJuZmgrYTYvb1cydE1YczI0NGtsNXNPWVZUWktKYnlERVZHWmV4TzZaR25KeGNBelVaZlJpc044c1VNcyt1NVNvMDNQcFBabG1qclA5WTJqbXFzZjdqVXF6L2pvSFQ0ZzNKQ09zL3F5blRURERlam03Z1NDdlExZ2wwOWdBdDdRNGM2M0NnYjRCRC95Q0h2Z0ZnS0FDRXcvSEI5Zy9FaG5NcnhTbnkyV0RqR1hnZUtDa0NPQjRvTHdFcXl3WFVsTWRRWFJGQlZYa001YVZBWFRYUVhBOVVsT2s0b1c3RTNYOEpvaERKZ2J0dk1BTGMrYWdINzdWVTRjcWJyME54Y1VsT1JSQ0x4ZkRrSXcvaHZFbUg4T3RQQkhQcGZVd1FoSmtaUWp4R0lMa0ZFNFZLQ0VBbmdHb1NoZWI3TzFZZzR6WFFDaEJncUlpMW9zMDJJYUhOVEEzTHR3SWNteXRZZkVLR1dnRnFVRFpYVm9CMnhYb1FNMWovU2FwanZQVmZwb3RFbG96VDRFQUlKYXdicWh0U0toQWpibmhXR3E5Q0RyWUFXM1lCMi9iWXNYV1BDN3YyY3pqV3dTQUlObmg5WGhRVmw4SmJWQWFucXhSdWJ4Rjh2aUs0U2x5b3FIYWgzdVdDMCttRXpXNEhCOERsZGllL093U0RZSWhiM0lSQ0lUREdFQXdFTUJEd283MHRpT0NCQUVLaElVUkRBL0FQOWFDL3J3K0JnQjhPRzBOMUZZZHg5Y0NrNWdqbVRndGkxaFJneG1UQTdWTHhNdDlMN3gxRUFSSkYzSm9sWkd5M213NERuL3lyRCtQbm5JS3JibGlCWEd2YklwRUlIdjM3L2JoK1hpdCtjbG1JMWdWQkVKa2h0MkNpME9rSDRFWThTUTVoRGlpV29HamJSYXdYZlVJQVFkNmpjb2hNMmtiZUxMRUFSWk9CU0sramR6bXhNWEZiTmphejR3MmsxYU5JdFpCVG1TVllkSk9TWVNRY0oxbzJxUzlPdXZVZmw5THVhRDBSYzlOaEJhQTA2eitXMUhaV0dSOWZoYVAvVnhzN2dDTFdDMGxWczEwOFdwYlRxbTR1clExMTJpZnZQUVI4c0lISFd4OTU4Y0VHb0xlZlEzRnBLU29xRzFGUzBZQ0tpa3FVVjFhZ3BMZ2t0NXQxeGpBNE9JaSt2bDcwOWZhaHIvc1llcnRiME5YWkFTYUVNYUhKaHJuVG8xZzBPNEFGc3hobVRRWHN0a3c3ZndCSFFPNDhSR0dSZyt5K0kvenhMUWYrZTFVUnpyMzhPdFRWTitSY0ZKRklCQS9mOXpkY09ic052NzQ2VEd1RElBajVGQU1vQVlWbklRb0xEa0FUQUNlSlF2TjN0RnpWWnlidGo2bHZQOENWNEtodFVzb3hsclV5UzltSGp0V280TGdpamt0dG1tTWljMkJqOVQ2TVNYSXlQbDZQUVVRQnlNYnNuVE8zbG42L1BiWlZKcWxjMnJLaUNrQ1dmaFNNWlZNQTZxUFVVNklBbEdiOWwyWmN3K1drS0FDNWxMWlp1aEdJV1A5bFZ3Qm15dndyVFFIb1JCRE4wUjJRWERYYmcwV0xNbHJXejRQWWY0SUFiTndPdlBpV0V5K3VkdUhnRVliUzhncFUxazVDUStNNE5EUTF3K3UxWG9vdnhoaDZlM3JRMGQ2RzdzNWo2T25jajg2MkRoUVZ4YkI0THNQcFM0STRaYkdBeWVNU0xvUVdHRzc5UkJBNUpZUzQ1VXJVMkc2REVlQ1d2M3V3dmI4WjUxMStMWnpPM084WUlwRUkvdkgzK3pDdnFoTlAzVGxFYTRNZ0NPWFlBWlFoYmhWRkVJV0NFMEFqVWlQMkU2bzJOQmFyYjBSL1RKdTJXL2hwQ1BMZWhHTk1VbVUydXRsTTJKQm5VUUNPL0pGV0NjaFNkRGlqYmJNc2swaFNRVEltVFZpaVNrQ1ZDa0E1WlRNb0FjVVZnQ3F0LytJbE9VM0xaUjBKV2YvbGwvV2ZoWlYvM2IzQU02L3krT2RMSG16Y3psQmQyNERHOGJNeFlkSmtWRlJXNXJlK0l4akUwWllXSER0NkVHMHR1OURYMjRVWmszbWNzeUNBYzJmSE1IczhLTjRYa2Y4SWlNZjV5NEdlNjBBbmNQSHZ2V2lhdVJ3bkxsdHVpZ3N1RW9uZ2lRY2ZBQjlzdzdZZkRjRkdteGVDSUxUQWk3Z2lrTzRwUktGUURLQ0d4S0FwaGFRRU5OUUtzQmhIYlpOVGpwRVZZUG91bFN2MjVDb0EwNDBpZ3dKUXBmSlBUbG15L2hPZlAxbi82VjlmUWQzZWZ1Q2hwMjE0NkNrUDJyb2RtREJsRHFaTW40dTYrb2JqNjY0d0g2b003ZTN0T0h4Z0w0NGQybzdPOW5iTW1nQmN0dFNQQzVZSWFLYWd4a1MrRVVET01sZSt2SVhIN1EvNWNOcEZuOFQ0aVJOTklZNUlKSUovUGZ3Z0FuMmRlUDAvK2pDRk5pNEVRV2dKRDBvU1FoUVdOYUI0Z0pydlYzSlVWMGw5c2dJc1hDdEFxVzdBR2NxbUs4MXQyVFNPcGRlRkdPVCtTOVovNHZNbjZ6OVQxci95VGplZWVUV0NDUk1tNExTenowVjlReU05U0VYdjdRekhqaDNEd1QwN2NYamZaZ2lSQVp5OUlJcFBMQS9obE5rZ3l5REN1b3dFcWcva3B2dmZ2dWJFYjk4cXhhWFgzb3Jpa2hKVGlDUVdpK0hKaHg1RXM4K0JjNmJ2d2QzblVkdy9naUIwd28xNGtoQWJpWUxJY3lnZW9BNzdFNHZWSnl2QXZMY0MxTk1OT0hVVUlnckFEQm9SZzVOL2tQV2ZodFovUmlqL2xOUzNXT0tQTjk0RDFtNXg0T050TG16YkU3Y0dMQzR1UVVWVlBjb3F4Nk8ydmg2MXRiWGdiZlJXbWtvNEZNSyt2WHR4Y05mSE9IcmtFSmJPNUhEdGlpRmNjQ0tEeDBYeUlTeENEcTMrWWdMd2hVYzllS2UxQVJkZWRRTWNEbk9reUdTQ2dILy80MUVzSDErUGozZDlnSGYrY3hCMlV2QVRCS0VuWkExSUZBcE94SldBRkZaSHd4ZVhITlpuSmgyckJvbEt5QXBRZEdZWnl5ZVBPSE81dEdWWlpqbUxLZ0ROWS8wM09nWTExbitaMmszN3pSaWxvVFRydjlFNlpQMlg3NjYvWXJRY0E3YnRBVDdhNU1BSG05ell1bHNBNEVKVmJSM0txeWFodnFFUmRmWDFzSnRrczI0V2hjR1J3NGV4YitjRzdOKzlEUXNtQ2JqaHpBQXVXc3JncGw4NUNUT1NZNnUvd1JCdzZlODlpSlROeDhwekxqUlB1QUhHOE1KVC84S0twbHA4dEhNemZuVjFDMDZjeUdpOUVBUmhER1FOU0JRQ0pRQW9sSTdHN3k4NXFxdWtQbGtCZ29HTjBiL0lzZ0lVVlFCbUdLTnFLMENXOGYxNTdHaXpseE10SzlFS1VKVUNrS3ova0ZLbndLMy9PSVBxYUZGWGkvcFo4QWVBVFR1QXRadHRXTDNPZzQrM01JQnpvN1poUEtyckpxT2hxUW1WVlZYMDhCMitZYlVjT1lJOTI5ZGkvKzRkV0RhTDRiUG5EV0hsUElDblh6c0pNNUJEcXo4QWFPc0h6dnFWRnhNWG5JMzVpNWVZU2pTdnYvZ0NKcnR0T0gzR1pMeXo1WEg4OVdiSytrc1FoTUdRTlNCUkNOVFJHdGQyLzVIRCtzeWsvWkVWNEdpVHg2dFkzUW93cXdMUVN0Wi9ZMHRwWWYwM1pyeGsvYWRQM1R5eC9wTkQveUR3NFViZzdZOWNlUHNqSi9ZZFlxaXVxVVoxL1V5TW16Z0p0YlcxNFBqQzlwdGpqR0gvM3IzWXRma0R0QjA5Z0N0T0ZYRG5SVUZNYWFEM0ZDSUhDQUI2QWZoek40UjlIY0E1di9GaXlWbFhZY3EwNmFZU3ozdHZ2dzEzWHlmdS9keU5XUG1kNytHdGIvU2htb0tWRXdTUkt6eUlXd05TQ0FJaUgrRUJOQU93a3lpMDIzamtxSzZTK21RRktOc0tNRlZwcUowVm9BWUt3TFIxOUxNQ0hLTUFOSnYxMzVpUlNMWCtVNUg4ZzZ6L1ZOeFU4anp4aDI3UEhBWnMzUTI4L3A0ZHY3M2ZoNzUrRG8xMTlhZ2JQeDRUcGt4QmJXMWRGbVY1ZmhPSlJMQmo2eFpzMy9BT2lwMER1T3RpUDY1ZUlaQ0xNR0VNSVFEZEFHSzVHOExtSThERnZ5L0M2UmRmaCtieDQwMGxucTJiTnVISXBvL3gybmUvZ3Y5OStua1VjYS9oUDg0TDByb2hDQ0szMkJCWEFycEpGRVFlNGdiUUFJb0hxTmxtekdMMXlRb3dhU3V2MUFwUWwyUWdTZU5XbGd3a2VjU1p5NlV0SzhFS01FVUJhSkQxWDRheVpQMDMrbitHV3Y5UjRvK2M0dzhBeTYvMDRvdG5YWXYrVUFqUGZMd0ZPNDRjUlYxREl4b21UY0trS1ZOUVhGeUNRcVc3cXd1YlAzNFArM2R0eGdVbnh2QWZWd2JJS3BEUTcyV3dIOEJBYm9meHpoNE8xOXhUaEF1dnZnVTF0YldtRXRHaEF3Znc3a3N2WU0xLzNZMm9JT0RzNzM4ZmE3ODNBQThwNXdtQ01BcytBR1drS0NIeWtISUFGU1FHVGQvN2NsWGZqQWxCeUFvdzdkZTZXQUZLVlFES0tadkZDcERic21rYzB6UDVoeWJXZjJucmFHdjlkM3pkSkpZbDZ6OTk2aGFnNjY5VTloOEd6djFVRVZiOTUvZlFVRkdHbUNEZzQzMEg4Zno2TFhocDB6YjBCa0lZUDJVcUprMmJqb2FtSnZNa0FUQ1FXQ3lHSFZ1M1lzdTZOMUZiTW9SdlhEV0U4MDlrRkN1UTBJWUk0bFova2R3TzQ3WHRIRzU5c0FTWFhIc2J5aXZNOVpiZjJkR0I1eDU3Rks5LzU4c1lWMTJKLzdqL0lTeG9lQmUzbkJxbDlVTVFoTG13RHl0SzZNY0pJdDlvQkZtNWFnbTVBcXZ2dytSV2dFbGJSYjJzQUJuTDBscTZKcFFyOXBRa0EwbFFBR2JZUFZzZytVZWk5UjlEZHFVYldmOUJmZHRLNjVQMVgwYWVmb1hIYjM0L0RpLys1N2ZBcDZ6OW5pRS9YbHEvQlU5K3RCSHI5eDlFUTNNenhrK2JnU2xUcHhaa2h1RmpyYTNZK05GYjZHcmRoeTllR3NKbnpvdkM0NkozR0VJaGd3RDZOSGlSVThtcjIzbDgrc0ZpWEg3RFoxRlNVbW9xRVFVREFUeDIzOS93NkYyM1l2R2s4VGpXMDRjTGYvSmYyUGpEQVZMQ0V3UmhYa29CVUh4U0lwOXdBR2dDeGJ2VUNySUMxS2FQUExNQ1RNNGluR01yUU5WdXdQSFMzTmJqU1VCeW5meURyUDlHRGpzUXdyam9qdVJGUXRaL3hvODFoM3p1bXo1TWNKNkRyMTU4dm1pWm1DRGduUjE3OE1TSEcvRGkrczJvcktuQnhCbXpNSFhHRERpZGhmVlQ5OURRRU5aL3VBWjd0bjZNYTA2TDRqK3VES0ttak41bENJa0lpR2Y0RGVSK0tLOXU1M0hyZ3lXNDRvYmJUYWY4WTRLQUp4NThBTjg0YnlXdU96V2VpZmhiRC8wRGMydmV4czFrL1VjUWhObHhJMjROU0FvVElsOG9CbEJEWXREdVJTZEhkWlhVdDRnVjRHRitCc0s4TytFWVdRR203OUs0WkNDeUZZQm10UDZMRitPU1QxQ0c4cnBiL3lXMHJjVDZyenAyR0NXc0M1S3FJbk96bXBUUnNqNVovMGxpMEErY2VKRVhUM3o1VzVoYW56MzJGMk1NNi9jZndzUHZmb1RuMW0xQ1dXVVZKczJhZytrelpoU1VaV0EwRXNHbURldXdlZTNiT0h0K0JOKzd6bzl4OUdKRVpDSU1vQXM1VGZReGdwbVZmd0R3Mmd2UDQ4U3FFdnpQOVZjQUFEb0hCbkhXOTcrSGpUOGNoTU5HUzRrZ0NBdGdRMXdKU040Q1JMNVFDNkNJeEtBSlpBV29UUjhKOVFhNU1yVFpKcVFjazJFRnlGSlRlQmhoQlNpaUFCemVjMHNTbEdtdEFJOHJBSE50L1RkNktncmQrcytPQ01aRnQ0RWo2Ny9janRVRXZQRWVoKy85ckFtdmZ1YzdzbVA5cmQ5L0NBK3MvZ0RQcmR1RTJzWW1USnQ3QWlaT21nU09MNHlmdlprZ1lQdVdMVmo3N2lvc214SENmOTNncDRRaHhGajZoejhtNE8xZEhHNjR2eFNYbTFUNXQzbjlldlR0M1lrWHZ2bUY0NkVKZnZyRTA2aDJ2NEk3endqVFdpSUl3bG9VSSs0V1RCQldod2ZRakhpOFMwS0RUVVNPNmlxcGJ4RXJ3RVAybVlpTS9PcFM4RmFBR2VadWtCV2dMQVZnZmx2L0pSek5vZlZmWmV3b3lsZzdKRlZGNW1ZMUthTmxmYkwrazgwdFgvWGg1TG9yY1BQcHl4WFZGeGpENm0yN2NNOWI3K0hkSFhzd2NkcDB6RjIwR0pWVlZRWHlFR2ZZdVdNNzFyMnpDZ3NuK2ZIVG00WklFVWpFcmYyNkFZVE1NWnkxQnpoYzhhZGlYUGFwMjFGV1htNDZjYlczdGVHVmZ6MkI5MzcwZFpUNTRzR2NvekVCaSsvK0JqNzhiaCtLeUpLR0lBZ3I0Z1JRaWJoVklFRllHUytBZWhLRE5udUhITmJQVXl2QUFhNFM3YmJtbEdPNXNBSmtTRzJwRUswQXVhMmJ4b3NjTWFQMTM5aFNYS3AyTGtQWjQ5OUl0ZjVMTXpaeDY3L2hveXFzLzJ5SVlYeDBLemdJMHFwS243YTZjbHJVSmVXZnNvMTNGM0RxRlVWWS9jTWZvM3g0NDYyVVlDU0NmMyt3SG45NDlXMzBoaUtZUG44QlpzK1pDMGNoeEFzY1ZnU3VYZjBTVHA0UndFOXZJdGZnZ2lXRXVQSXZabzdoYkRzS25QZTdJbHgwelcyb3FxNDJuYmpDb1JBZS9kdGY4Yzh2ZlJyeko0dzcvdjJUNzYvRCsxc2Z4bSt2SGFRMVJSQ0VkZUVSZHdtbWJLcUUxYWtHVUVKaTBHYmZrTVA2ZVdnRnlNRGhrSDBXb25Ba0hGTmlCWmhlQVFpUkkrbWJWRzRGbVBpMUxzbEEwdGJSWGxsb3UvUHpaVDlJMjZnS0JhQVM2eitrbmdpcDFuOHkzSCsxc1A0Yk96L3RyUC9LV0FlOGJBQ1NxaUp6czVxVTBiSnVyaFNBRnM5SzZmUEdsOVJUcncvaW5Ia25xR3JMYnJOaDdyaEczSHJhTXB3L2R3WU83TnVQeDU1K0ZoMXRiU2d1SzRPdktJOERpSEFjcXFxcmNjTENrM0Iwb0J3L3ZiY0ZXdzV3T0hsbUZENTY2UzhjQmhCWC9qRnpET2RnRjNEMmIzdzQ5NnFiVVZOYlowcVJQZit2SjNEWEdhZmd3b1Z6azc3LzBqMzM0TWVYZDZLUzRnNFJCR0gxamI1LytHK3laaWFzVEJEeFdJQmswYXJCdnFGQXhzb1pNNjRSMTlrQVg1THdCYWR3WUJ5U05TM0p1cGRSeXo0dTYvdzRtYUpnR2NzcDAzOWxGNlAySjBteUJhQVozWDhWV2Y4bHRNM1M5YzZKajAycTlSOGdYd0hJUWNDRTZEYndpS3E3S01uNno3bzNjQkdpTVdEQnVVVjQ4aXYvaVFrMTJycnV4Z1FCejYzYmhGKy84RHE2UTJITVdid0VNMmJOQW0vTDc3Y0h4aGcyYlZpSDllKytocHZPQ3VOYm53ekNTeS8rK2IzQjY0WXBzdnlPMERNRUxQMlpGOHZPdng3akprd3dwZGcyckZzTC90Z1JQUDdsenlSOXYvZFlPKzc4OHkvdyt0MTl0TFlJZ3NnZktFc3drUTlydUpIRW9ObTdZNjdxNTZVVklJK0Q5bG1JalFTcmxPc0dITi9BUWJFVllISkR5Y284VVRmZ0RHUFV5d3JRQURmZzlCYUFocm4vWmxDVDZaejhRNnIxWCtyWEhOS05Td3ZydjA3NFdCOGtWVVhtWmpVcG8xVmRTdnloR3A0SGFxdWorT1BqbmJoc3lZbmF0czF4bU5GWWg1dFBPeGxuelpxS0RadTM0TW5ubmtjZ0dFUlZUUTBjZVpwQm1PTTQxTlUzWU02Q3BmaG9KNGNmM3RNT2oxUEFnaWtDZUE1RVBoRUIwSUY0dGwrVEVJb0NwLy9TZ3hrblhZb3AwNmViVW14ZG5aMTRkOVZMZVBZYmQ4TGxTSTRzL29lWFZtSGxsQjFZTUU2ZzlVVVFSUDRRUmZ5SElpZklpb3F3N2hybVFTN3RtbXdXTE5TM0phd0FHUmpqRWVDTEVvNHBDQkdYNWx0T3JHeWlGU0NYb1JjWnlUWmxXd0hLTFN0MUxDcktwYmNBdEpqMUgwUDJtSHZpN3I4aTFuOHA3ci82V3Y4eGpJOXVndzBSZFJjaldmK1o1OGF0TVl3Qnl5NHJ3aDl2L2cvTWF0STNpOFZnTUlTL3ZmRU8vckRxVGRTUG40QkZKNStDOG9xS3ZIN0dCL3grdlAvMktuUzJiTVB2Ny9EampQa01SQjdnQjlBRDA3ajhqbHpMbC96ZWcwak5jaXc1WmFVcHhTYkVZbmowYi9mZ2I3ZGRnMlhUcDR3NXZ2anViMkwxTjd0UjZxRWxSaEJFbm03OHl3RDRTQlNFUmRkdkUrS0tiRUxsUzFzTzYrZWhGYUFBT3c3WVo0R05tRm5yYlFVb21neGtiSG1wVm9ESmxvUFd0QUljYXdGb3l1UWYybHIvcGUxZGd2WGYyUGtwdGY1TEhrc0o2MFlSNjRIVXFsbkVxYjZNVm5YSitrKzdaemtITkRWRThMdEhPbkhGMHFXNjl1VzAyM0hTMUltNDQ1eVZLQWJEdzA4L2kxMDdkNkdrb2dMRnhma1pYZGpoY0dEaWxCbW9HemNUZjN6aUtKNTdKNHBUWmtWUVR2SE5yRXZmOE1ka2ZPa3hOL2JGNW1ENW1lZVpWblNyMzNnZFowMXV3czBybDQwNTl1R2UvZGpUOGdGdU9EbEVhNHdnaVB3bENFQkFQQzRnZVFZUVZpTUVvSmpXcnZvTm1JWDZ0b1FWb0FDQnN5UEkrU1QySzkwS01PMjNIRVN0QU1kOEpkR2lia1Q3dytrcFRKMnRBSGx0ejY5OHMwZE84VVNVcjJrbXNSRnB5VDhneTJ3MFhjdGxzWFpyMzZEeTdZWnJVczVkd2JDM2F6LzJIbXMzcEQ4YnorTVRKeS9DMnAvOUozNTUxZm5ZOXZZYmVQTEJ2K1B3d1lONUsrUEtxaXBjZWYzdEtKOStGVTc3WmhuKzQ2OHUrRW5QWVMwRUFKMklKL3d3R2ZldXNlTzFnM1U0NDd4TFRTdStZNjJ0YU51M0J6Kzg2dUsweDU5ZnV3NmZXRXlaZndtQ0tBQUdoNThuRk8yQXNCb2hBTDBrQnRyUG1tOCtaYkYyY0VrV2FqSWI1ZExyWTdpcy9xRHBKOFBVVEpGVE1tWVpCbU5KZGJSYlRMeVJuV20xMGppa0p2R1FjQ2E0REl0Q3hQcnYrRmVpWTJQS0ZreENRWi9RQ3dkQ3h0d29yR1Q5UnpmYnRFdjQyM2NGOEQvUC90dnd2cGZQbklvM3Z2c1YvUG5HSzNGbzdmdDQvTDU3Y1hELy9yeDlYaytaTmcwMzNQNVZiT2xmaWRtZjllSHBkeWtZa0NXSUFtaEgzSExEWkx5N2g4TVBYeXpHUlZmZEFJNDNaNFI1UVJEd3lqTlA0WUU3Ym9iZGxuNk1xemFzeHptemFUZE1FRVNCRUFMUUJpUkc2U0VJUzlCRDY5YnkrOG84dEFLMElZSWlRYjduNDloaUVsTjJqRmdCcG1sSXVpSGFXRDFTK3ZCdzVsQkdaTlBmOGRJbUxWVTR5b1FvdjEzbGE1a3ByQ2ZQK2s5Nld1c3kxbUh0RzVQWmJyUjViamw0MlRrQ1B0eTdFMTBEUXpucGY4bVVpWGp4bTEvQWc3ZGZoNWIxSCtLZmY3OFBMWWNQNTZXc2Vac05TMDVkaVV1dnV4UGZlMklpenY1UEh3NjIwWHVRYVFraXJ2eUxtbTlvaDdxQWErL3g0WkpyYm9YTGJkN0kzQitzZmh1WExaeUxlUk9hMHg1djdlbUZ6eFZDbVplV0cwRVFCVVJzK1BrU0lGRVFGb0lOcjF1QzlxWm1rY1V3WS9VZm5Md09OYk1DSEwxVUZFOVJvUlZnMWdaMDFNc2x4d0MwV1BJUHpXUC9KWlRObnZ4RExQWmZscFdRTUJhMzRFY0ZPNmIrZ3FMWWYvbDdrMDJ6ZklJaGhyVWI3VmcyZlZyT3hsRlhWb3JyVDEyQ0pST2E4T2p6TDJIanBrMG9xNnBDVVhGeDNzbmM1WFpqeHB3RkNQRTErSysvSEVBZ0tPRGttUUpNYXNSVm1BekFkTWsrUmdoRzRobC9UenIzV3RRM05KaFdoTjFkWFZqNzVodDQ3RXVmRWJYK2UrSzl0V2d1MllSVHAwWnB6UkVFVVhpTUtBQmRKQXJDSWxCVzREelkvT1hKUGpySkNqQ0tFSHlJY0M1Wi9hcUtCWmoyL3prWnNRREZ0VDFLUEdhVjVYdlZ4bVdZUjliSnB0RkFxQ3JIYVNJYXBxQjIxanFNRTFram5JenhTOWRnbHpLSy9XZVptNWFKdU9YcUNCNWM4eFlFbG50dHg2Sko0L0g2ZDcrQ1gxOTlFZGF1ZWdrdlBQa0UrdnY2OGxMdVU2Wk54L1czZlFVdjdWNk1CWGY2c0g0dkJhck1PUXh4eForSmw5eW5IL0NnWWVaeVRKZzB5ZFNpZk9PRjUvRi90MTREbDhNdVdtYk50bzA0YzJhUTFoMUJFSVZMUDRCdW1QSUhKNEpJU3pmSUZaajJxT2FSeFRCbFkvUWduSW9PSlZnQk1pN3Jsa0x1RkpsbVFqTFdDcERYWmcxb29QWGtPR245Y09xRXpHVVVzdFNUbXNuNlR4b09oRkhFK3N4L2tWb3A5bCtCVUZFR0xGc1V3OHZydDVobVRNdG5Uc1g3UC80R3ZuYmFVanozeUVONCs5VlhFQXJsWC9ZTXU4T0IwODY1Q0NlZGV4T3UvR2tsdnZZWE40SmhXcE01WVNUWng1QjVoL2pudHgzWTB0dUlKY3RXbUZxVXUzWnN4NFJTSDg2WU15Tmp1VTBIRDJIK09GcDZCRUVVT0g0QUhhRGtJSVExWU1QcmxiQXUrV0lGbUlDSERjQXBCSlVQajB2MTF4eTc3S1hOUzU1ZG5kalhrbHJoT05XaTFpSS9CNjluNDNxdGRDWkhZQndudmpSU2szOWtsWU5LNjcrRXd5V3hqdVJSY2VhOVFFMTdjOHRuV1dUaGxtc0c4Y2k3cjV0dVhGZWV0QkFiZi9GZFhEQytEby8rOWMvWXNQWWpNSlovUDVQWE56VGl1dHUraEUzOXkzREM1NzE0Ynp0cHZnMWxKTm1IaVhYTTZ3NXkrT25MUlRqLzh1c1VaSW8zVUpUUktONTk3Vlg4djV1dnpsaXVkOGdQcnpNQ0IrWERJUWlDQU1MRHp5R3lyQ0tzUUFCeDYxV0M5cXE1bEVWS25TUXJRQzVibzhxdEFJL0R1SXpOSGQreGN0SU55NWlKVDdxWUhIZzVrN1J5OGcrcGpXVFdKWThkczVMVGFrTU1wYXdyLzI1VWRGTTBqRk1XQVpzUEg4UkF3SHp1ZUE2YkRWKys0QXg4OU5Odm9XcW9GNC9jODVlOFRCVEM4enhPWG40bXpycjhkdHp3cTJwOCtjOXVoR2dqWU55bXk4Umg2QWFDd05WLzl1Q0NxMjZFMDJYdVlGRWZ2dk1PYmx5K0ZFMlZGUm5MZmJSblA1Wk9vdVZIRUFSeG5DamlsbFVoRWdWaEFib1FUMmhENUE3YWx5ZFJ4SHBnVi9BclN2WjRmWEdZNU9sdzZzVmdvV1FnZlBydXRRa3dxT1dhR3VrbnZmV2ZOSUdKQm9Oa25JeEJNUVd6U202L21IV0JTL1FiSU91LzNOMU1yVHBsRHJqOHZBaisvY0hIcGgxanVjK0xQOTEySFI3L3dzM1k5T2FyZU9uZi84TFEwRkRlbll1cTZtcGNjK3RkMk5wL011YmRRYkVCZGNVaWJsYzMzT3ZCN0pQT1JuVk5qYW5IR2ZEN3NYdnpSdHg5OFRsWnkyNDhjQWdMeC9scERSSUVRU1FpREQrWGhrZ1VoRVhXS2tIN3psektJc2tJajZFazFwbHlUSWtWSUpQZXQ0Z1ZvUFR3ZEdQMVMrbVR4dW9wUW5XNk90NXF5VCtVMUdZUzI1V2MvRU9GT3hjSGhySlloM2t2U3FWMXlmclBlQ1hEbFNFOC9zR2JwaC9uM0hGTldQUER1M0hIc2dYNDUzMS93OGFQMXdGNTVoYk04enhPWG5FV1ZseDRDNjc4YVNXK2ZiOExNWW9OcEMyRHNFVGc5VCs5NWNDaDhEak1YN1RFOUNMOVlQWGIrTnBGWjhQamRHUXR1K1BJZmt5dW9VVk5FQVNSbGg2UWl5Vmhmb1pBeXVwY1EvdnpKRXBURGFOa2p6Tzl2b2FEM0hoNzZjUEdjWWFlY0dPc0FIbDEwekUrK1ljUjFuOVprMytrV1dJWlo1eHcyTWQ2WVVzMGRTWGxWKzV1b2habnhtVGdXSCtuS2QyQXgxNk9ISzQ3ZFFuVy92UmJLT3B1dzJQMzM0dXV6czY4T3lkMTlmVzQ5dE5meEpxV1JWanlSUjhPdE5FbHFnbDlBSHJOUDh3ZHJjRFBYdmJpN0VzK2FmcXg5dmYzNGVqK3ZianRqRk1sbGQvVGVneVRxbWtwRWdSQmlOOVlFVmNFRW9TWm9RUTJ0UDgwa2Z4NFJGSEN1bE9PWmJjQ0hGdENSaklRSGF3QVIvNndRaklRWHN2RzlMNmltSUxhVEdHdmVsai9BVUNaMEc3TVRZZCtYU2dJemw0ZXhXdWJ0MWxtdkdVK0wrNzcvRTM0MDQxWDRaVW5IOGU3YjcwSlFjaXZ0eENiellhVloxMkkyYWRjZ3hWM2wrQ0JWKzIwVUpYQ0VMZjZHekQvVUNNeDRCTi84ZUxNaTYrQnkrUngvd0RnL2JmZXduZXZ1QUIybTdUZkFidUdobEJmUmt1U0lBZ2lJME9JeDFwakpBckNwTVNHMzYySTNKRlArM1FOOXZLbGFyMGpOYk1DSE4xK3lLMW5wV1Fndkh5aEtpbW5WL0lQVGtaMVRsSVQ4cTMvcEkvZHc0YmdZZ0d6cklYQ3Zubm1DUmVmSGNUejY5KzMzTGhQbVRFRjYzNzJiY3p4MlBEb1BYOUZlMXYrbWNwTm1EUUpuN3psTHZ6djgrTnh4WSs4Nktmd2FmSVFBSFFpSHZmUEFuejdLUmVxSmk1QzA3aHhwaC9yNE1BQXVscU80SlBMVHBUMklzUVluSlQ5bHlBSVFob0JrSlVWWVc3NlFNbHJhQjlxR3ZrNUVJS1A5Y21XclNvclFKRVdPYlVMd0FMSlFPektwMnlHNUIrWko4NnlEVUlrK1llbzlaL3NXU1VmS3hVNnpIK3pJZXMvUzNIcWljRG52clVYQW1QZ09Xc0oxT1d3NDMrdXZ3S2ZQSGtSYnZuajM5RTBmU1pPWHI0Q0hNL256Zm54ZUwyNDdKcGJzV0h0QjFoNDU2dDQ3RDhEV0RTVnpBS3lFa05jK1dlUnJNcnY3ZVh3NUtZU1hQdnBzelZwanpHR2dOOFB2OTkvL045UUtJaHdLSVJRTUlSb0xJcElPSUpZTEFhQUlSU012OFhQbkRNYlU2ZlB5TnIreCsrL2g2OWVlS2JrZTBiUGtCOVZ4VHl0UzRJZ0NLbU1aS3l2QmtBL29CQm1wQU5BRTRraFozQlFiaWtzdDY2YXZneHF2MVRveEpDdFZHS2oyVG9jUGM2QkEwdFhsbkVBeDBTYk82NTc0amhKc2V1NWhEcWlmV29zUWpuOUpKYk43cHVXNitRZm5LcmFraHJoRWs2MGxEa3FzZjZ6STZKSXM2MzRJaXlFbXlZQnV3MllOWVhIdHNOSE1XZGNveVhuc0dqU2VIejAwLy9FdC83eEZQNXgzOTl3L2hWWG9heThQSy9PMC96RlM5SFFQQUZYL09SQmZPM3lJWHp4MGpBdFhqRml3eStsVVdzTU54Z0JicnpQaTNPdnVoNjhMZnN1THhxTm9xZTdHNzA5UFJqbzcwTi9mejhHK3dmUTM5K0h3WUhCMFJjV2pvTi95QTkvd0k5b0pLNEo1WGtlSmFXbEtDa3RSV2xwS1VwS3kxQlVYQVN2cndnK253KzE5ZlhaeHhzTTR1Q3VuYmpoZHVseENuc0doMUR1cFpzdVFSQ0VMS0lZVlFKU05CRENiSVFRdHdRc0pWR28ybzh5bXFNV2JYdllBSndJSWd5M3JINlBGOHVpcUJ0VnprbHgxMlhxeEpDMnNKd1dSTXBLVkVabUsyZFhkcTRNVFA0aFZsK0g1Qi9JdUdRa3pVcjBXRHpGTlZOL2taanRocEF2YzdFd3kwOGF3cnM3ZDF0V0FRakVyUUYvZGNOVmVIUHJUdHorMTRldzhKVGxtRE4vZmw2ZHA1cmFXbHo3NlMvaS9tZi9pZGZXSDhCRFgvZWoyRXZyZDh4bXFRTnhKYUJGdVB0Sk55Yk5PUmxWMWFNWk1tS3hHRG83T3REWjNvNnVyazcwZHZlZ3A2Y2J3VUFBTnBzZFplWGxLSytvUUdsWktXcnI2bEJXVm82aG9VSDA5L1doN2RneEJBTUJlTHhlMURjMm9xcXFHaFZWVmFpcXJrWlplVGw0bFJheUd6NzZDSjg1Y3ptY2R1bVAvOEZnQ01WdXNsd2xDSUtRVFF5alNrQUhpWU13R2QwQWZDQUZkUzczMGl3SGRjMDJsMkZLWTUzb3NEVkpiRlRzbUVTLzBaRmtJR21zQU1lMExLcFFTeTZaN0VNcXdUb3ZwVjI5clFDUDE5bTZlUUlicVN3NnNEUWRTU21YS0lyc0NrQ1Jmaml4MHlpV2ZTWFovVGVwOXpRS1FHN01ja25uL3N1U3hpczMreThIQVJPaTI4QW5tclJ3Q2k4c0xjcG9WVGRYQ2tCU0hpYng0VWJndDcrZGkvcytmMWRlektkbnlJOWIvL1FBV2tNeG5IUEpwWEJhSUtHQ1hOYXYreERiUDNvRlQzN1hqM21UYUEwRGlMdjdXaXhtMHByZHdMWDNsV1BSS1dlaXE2TVRIZTF0Nk9udUJzL2JVRmxWaWFxYUdsUlYxNkM4b2h6bDVSVndlenpvNysvRHdmMEgwSEw0TUZxUHRpQWNDcUd5cWhyMWpRMm9iMmhFZldNalBCNlBMdU5sak9HQlAvd2YxdjNzUDFIaWNVdXV0L0hBWWZ6ZnM3L0Yzei9kVCt1VUlBaENDVHlBS2dCT0VnVmhNb29BMUpJWTFMMWdXYVN1M24weGRlMHk4Tmh2bndNMmtxYUNaV3VVamUyV0pXcU9XRUpKTmtidkUxZitzRFJqWVNtNkpCeFgxTEVza3o3ZU80T0lZaTdWMTVpSkhHVmlML05wV21TU3lvMlV6YXp2ejZma0gxbjBqZktUZjBoVC9nRkFNZXN6UnZsbkpLVEFNdzBMNXdEcjl4L0ttL21VKzd6NDk5YytoNys4dGhyL2M4OWZjZDRWVjZKT2dtdWpsVml3YUFrYW04Ymprdjk2QUQrOGZoQTNueDB0N0VVY1Jqem1uNG1WZjVFWXNMVUZXSHVBeCtyOVhxdzdBQnpwNFZIZldJLyszajQwTkRWaTNzS0ZLQzh2VDRwajJkdlRnNFA3OStPajk5NUg2OUVXK0lxSzBEeCtQS2JObUlHVlo1NnBtN0l2SGZ2MzdzSFNxUk5sS2Y4SWdpQUlEUkFRLzVHckVnRGRnZ2t6TVFpZ0JJQ0hSSkd6UFhVaFd3RW1XZDRKS0dIZDZPT3FFbzVsdHdJY1d5SzkrZGlZYnpteHNjaUxycGZlWFZlaUxDUmFGMll2TDcyY1hmNTV0V2p5ajZTelA5YjZiK3pjdURIdEtxVkVpK1FmZWdsYWk3cEczMWlJNUl2WUJ0UlZNN1QyOUtLK3ZDeHY1blg3bWN1eGJPb2tmUEszOTJER29zVlljT0tTdkRwdk5iVzErT1F0ZCtFWFR6NklkN2ExNHc5Myt1RW9SQmVNSUlBdW1DNkdTbXN2c0hvM2gxZDNlUERlUG1Bd2JFZGxkUTBxNmllaGJsSXpMankxQVM3MzJGMWNPQlRDL24xN3NYdkhUaHc1ZkFnbHBhVVlOMkVDRml4ZWpBdWJMb1BObHJ0bzhGdlhyY1gvWFhPeGduc01qMGdNQkVFUWhCclk4UE91Z3BRdGhNbm9SRHdoQ08yemxPOVBXWjZQMDZBNWxzUTYwV2V2VWpISFJNV1hlREtRNDBjUzNZQkZidHY1bEF3RUdGWUFjbXF1ZHIyU2YyaFNXMXA2WnZuV2Y5SUg1R1ordUpoZjNWVEorcytjY2pBUmkrWUsyTEQvY0Y0cEFBRmd6cmhHZlBDVGIrTFdQejJBRi8vMUpNNisrQkxZSGZrVFJNZnRkdVBLNjI3RE8yKytnbVZmWFl0bmZ6Q0V1b29DV3JnQnhPUFA1UGlsaVRGZ2V5dnd4azRiWHQzcHhZYURERzVmRWVxYXA2RmgvRVJjc0d4Y1dtWGY4ZmZtamc3czJia1R1M2Z0Uk1BZndNUXBrekZuM2p5Y2Y4a2xPVlg0SlRJNE9JQlFmejlPbkRKUmR0MGl0eHYrTU4yQUNZSWcxRDl3TUtvRXBEakFoRmtJSTU0UXBJeEVvV3FmeWl4VzF5eHlTS2pqUkJCZU5nZy9WeVNyUGMyc0FMTk1STDI0RFV3R2tyWkZMb01Gb05UWWZ4S0duYTNkdFAxd1l1ZEVuK1FmbkdZS3k1VGtIMlQ5UnhqQTdKbEQyTDdwQ001Zk9EZnY1bGJrZHVIeEwzOEd2M3p1RmZ6MXZyL2g0cXV2UVdsWkhyMmhjQnhPT2YwYzdONDVIa3UvOGlUKzhjMGhuRHl6QUJadGpwVi8renFBbDdiWThQUm1EN2ExTUZUVjFLS21lUnFhRmt6QTlSYzBaTTNvMjNyMEtIWnUyNFpkTzdhanVLUVUwMlpNeDhXWFgySGFETlk3dG16QlRTdFBWbFRYN1hCZ01FajNXWUlnQ00zb0h2NlhsSUNFV2VoQlBCNGdKUVRKYjZ4Z0JTaDB3Rzhya3RpeDlFR0pXc3JwbFF5RUF6aVd3MlFnSXVPMWN6blgvb2ozTDhYOWwwdFRSMDZ2TEZ1ckhKZGxsT0pWN1lpaWlQVkttYXExYmhwV3Exc0F6SjdHOFByTGUvTjZqbCs3Nkd3c25qUU90LzNsQWF3NDcwSk1uRHc1citZM2RmcDBWRlo5RnRmOC9ENzg0TG9CM0hKT0hzY0Z6SUh5cnk4QXZMcU54MU9iaTdCbXB3QnZTUmthSjgvR3hGT21ZV2x0cmFRZnAxcVB0bUQ3NWczWXVtVWJhbXJyTUhQT0hOeDAyMmN5V2dlYWhUMWJ0K0NQMzdoRFVkMmEwbUswOVpNUE1FRVFoS2FRRXBBd0V3TGkxcW1VRUVUZGZwV3NBRlhQd2NmNjRFQVlrWkdzU1hLdEFFWGNnRWNZZGRHVm50dUVreW51ekhxczNKNnc5RHIrZkUzK0lXTDlKMzdhNUk0aCtWZ3g2d0tuOXVTYUxmTXZZVXBtVGdHMnR4ek4rM211bkRVZGIzejNLN2prRjM5RWIzZFgzc1VGcktpc3hEVzNmQUgvKzhRRFdMK3ZIYisrUFFBYm4yY24wWit3NmRFUnhvQU5oNEIvZnV6Q0Mxc2M2QTg3MFRoeEdzWlBub2xyVDU4QXUxM2FUOXo5L1gzWXR2Rmo3TnE4RnBNcW85aDlPSXJyYi80OEtxcXFMQ1B5dnQ1ZUZObHRpa01FY0J3SHdBYUNJQWhDWTBaK0RQT1JLQWdUUUFsQkNnTzlsWTBhNkxkS1lwM29zalZJYkZUc21NUnNFaVBKUnNaWUFlWm5NaEM3OUhPZEI4ay9STWFsVC9JUGh0SllKOTFnMUN3R0xlb1dDRVZld0I4S2dURTJ2Rm5QWDVvcUs3RG1oM2ZqNnQvK0ZhOTNkT0QwODg1UHlycHFkVnh1TjY2NDdqYThzZW81blBPZm0vSHY3L2xSa2kvV0FUb3IvMEpSNFBWdHdHUHJmWGhqQjFCVlU0K21xZk53NXRYVDRDc3FrdHhPSkJMQjlxMWJzSHZqZStBanZmajBLU0U4OHEwb2Z2NlNHL2FHNVpaUy9nSEFqcTFiY04wcEo2cHFvOVRyUlYrZ0Q2VzBLU0FJZ3RDV251Rk5UQkdKZ2pBQm5RQ2FTUXlxOXEyRmJNbW5FU1dzQzkyb0E0UENQWjdjWkNCWnlLZGtJUGJjWHlGNjFNNUY4bzlrNjBJZjY0TU5FWFZUNVV3bWZsTEVtWnI2YWg3dGZRT29MU3ZKKzdsNlhVNDhlL2NkK1ByRC84S1REeitFU3o1NURaeE9aLzY4Ty9BOHpqanZFbXo2dUFGTHZ2Z1NYdnBKQUJPczdwS2hrL0l2RUFhZTM4VGg0YlUrckQwQWpKODREUk5tbklCUG5UWVJOcnU4UjF4SGV6czJmZlFPRHUzWmhpc1hDL2paelVITUhQN3g4VWdQOEkrMVR0eDR4M0xMaWY3Z3JwMjQ2cExQcVdwamZIVVY5clczWXNGNHV0Y1NCRUZvVHUvd3Y2UUVKSEpOR0VBLzRwYUFoSVUyRDVDbk1kSmIyYWd5R1FpUEdJcFpML3E1aW9SajJSdk56MlFnMmpKMmQ1UkQ5OS9jSi8rUUczRlFuRktoeTdpTG5TQUExTmNJT05EUldSQUt3UGlseitFWG43b1M5N3krQnY5NzM3MjQ3UHJyVVZSVW5GZHpQR0hoWXBSVlZHSGwzWS9pbjk4ZXdwTHBGdjFaVUdQbFh5Z0tQTCtSdzczdis3RHBNSWZ4VTJkaDZyejV1UG1pWnRrV3NMRllETnUyYk1HMnRXK2gxREdJcjU0WndCVzNDbkNtUEIyLzhrOHZscDUyZ1dteStrb2xFb2xBQ0lmUlVGR21xcDJKdFkzWTE3R1pGSUJtZ2lFZXMwbEkrSnVKZkJMcmlIbVljR24rUC9YRHAvbVhJQWh0NkIyK3JzZ2RtTWcxM1lncm8ra2VUNGpwSHd4SkJ0S0ZmbHVGUm9NU3R3SWNmVWN5VnpLUXJITlQ2QVpzbHlaT1BkeC96Wmo4STBWUVVKYjh3NEVJUEd4QWpqQ1VDRkQ5aFd2VWVNajkxeEFhNnFNNDNObU5wVk1uRmRTOGJ6dmpWRFNXbCtHdXY5K1Bpejk1TFNvdDVwNlpqWEVUSnVDaVQzNEdWLzMwUHZ6eXRnRjhZcm5Ga2pFRUVIZHZVa2xNQUY3ZkR2enRQUi9lMmNOaC9KU1ptTDVvRVc2K3RFbFJ1QWIvMEJBMmZ2UWV0bTM4RUpmTUUvRGZ0d2N3dlM1OTJYVUhnSTJ0cGJqbWdqbVdXejhIOSsvSDhsbFRWYmN6c2JZZSt6b2NRS0psTzZFOUk0cThXTUpIU1Bnay9yOVo0Qk0rdHBTL2JRbC8wL09jSUxMVE0zeXRVR0lRSXBmRUVGY0NWcEVvRk85ZnJaQU14T1JXZ0M0MkJDY0xJc3k1WmJXWFBobEkrbGN1TXljRDBjc05XSmtMc0Z6clB6a25YRVc3cGtuK0VTUHJQOEo0R3V2QzZHd1pLTWk1bjc5Z0RoNHZMY1luZjNjUHpycjBjalEyNVZmd2tzcXFLbHg5MHgzNDlrUDNZMTlySjc1eGRkZ2FBdzlDZGJiZmJVZUJQNjMyNHVrTkhCcWFKMkxLbkNXNCtkeUppdU0rZHJTM1kvMTdiK0RZNFQyNDg3UUludnhoQkNWWjR0cmQ4YWdQeTgrOVZHVmMyR1NpMFNnQ2ZqLzhmajlDd1NEQzRUQWlrVERDb1RCQ29SQWk0VEFpa1FoQ29kRHhPb0lnSUJJZWUrNWRidGZ4QjRMZFlZZmRib2VOdDhIbGRtSGZybDI0ZlBaa3ZMVjFKNG84YnBSNDNDanplVkZkSXM5YWRrSk5GZGJ1Y0lNVWdCb2dBSWdPYjdCUy94VXNPaDhwNHg1UkJOclQvRXRXSmdReFN2ZndMWjFpcmhLNXBCOUFLUUFIaVlJUTBVTVlZQVZZS25TaXc5WWtzZU04U0FZaXUxMkpWb0FKMk1jMG9ORjZrTnR1b3BXaDFaTi9sTEF1eUorTXlTOXdxOVV0UU9wcVl0aXd2YXRnNTc5dzBuaTg5TTI3Y09IUGY0OVR6N3NBRXlibGx5V2sxK2ZEVlRkK0ZvLys2MkhzUG5vSWYvNWkwTndaZ2tNQXVwUTk3SHI5d0lQdjJmR1hOUzRJem5KTW43Y00xMzkyRnV3TzVXK2hSNDhjd1VlclZ3SCtWbnozd2lDdStMd0FYc0k5NXRrTlBNTHVSalEyWjFjcUM0S0F3WUVCOVBmMW9iK3ZEd01EL2Vqdjc4Zmd3QUQ4UTM0RS9IN0VZbEZ3SEFlYjNRNnYxd3VQMXd1MzJ3Mkgwd21ud3dtbnl3V255d21mendlSDB3bVh5eldxUCtGNU9OTEV1Z3dGZzhmL2prWWppRWFqaUVWakNJVkNHRDk1Q2o3c0MySE5hKzhqR2c0aEVnb2RWenh5QU53T0J5cExpdEJRVm9yR2lqSk1xNjNDNU5wcWpLK3VSSE5WSmV6RGk2eXBvZ3hIZTBsTEk0c1JSVjlrK04rUnYxa0J5ME5BZWgweU43ekp0S2Q4S1BrMFVhaDBBNmdBS1FHSjNNRVFUd2hTVDZMUVVsOWo2cm9tbEYwUjYwRW5HaXlkREdUMGIvbHV3SnFkem9SMjdka0h6ZWwwVnJNSVZWRnRNeVQvNkU5Ty9xR3RlT1FPVHZ1NmhHbHBxZ2RlSCt3dGFCbE1ycXZCYTkvNU1zNzkyZThRWG5rNnBzMlltVmZ6czl2dHVPUVROK0xOVjU3RlJkL2ZqS2UrNTRmTGpML01ob1pmR21VK3NkN2RBL3o2ZFI4KzJHL0Q5TG1MY2RiVko2SzRSRjFNeTRQNzkrUER0MTVFaGIwWHY3bkVqOU5uU2g4VVk4QTMvKzNHNlZkZWRQeUwvb0YrOUhSMW83dTdDNzNkUGVqcTdFUmZYeStpa1FoNG5rZFJjUWxLU2t0UVVsS0s0cElTVEpwY2crS1NrdVBLUHJQRkVJekZZaGdhSE1UZ3dBQmFCd2V3N1VnMy9GdjNZcUMzRjMyOWZRQVRVRjFTakpsTmRkaDhKSXJWdTRDNVRVQVp1YWNsazZqZ0cva0lKQlpaRzgzdzhDY1JIcU9LUVVmQzN3UlJDTmRFTjRCS0FHNFNCNUVqL0lpSGNpRkZkUDZpdDdKUnBRWXJuZ3lrRC8xY2VVSjcxa29Hb3NZTldObHB5YXhvNUxadG5waWdZdVRTTnBEOFJYYjNYeTVyK1RUOUpGanpjZG5LcHJRN1dpZXoreStYVkQ2ZDlSOUxHck0wbThSa0JXQkRiSzh4OGYrTVVnQ1M5WjlsMkxRRCtPK2Z6OFg5ZDl4VjhMTG82Qi9BdVQvOUhhWXRYb281OCtibDVSelh2cnNhblFmZXhpcy85YVBVVEFIRHc0Z3IveVFxUHdhQ3dMMXI3UGpqMnk2NFMrc3haL0dwbURoNWl1eGtIcWtjM0w4Zjc3L3hBaHE5dmZqNUZYNmNPRkY2M2NFUXNQMG84UGQzZVR5em93NmVvbEwwOWZhQ01RSEZKU1VvcjZoRVJXVUZ5aXNxVVY1UmdmS0tDdGp0K2F1VkdCd2NRR2Q3QjlyYjJqRFFlUmhkSGEwSSt2MFlYOFhoNUVsUkxKOFV3S0lKUUYxcGdkeGdScXpZd2duL0ZxcFZYNjQySzA3RWxZRWovNUp4S3BIUDY3MEtnSXRFUWVRSUo0Qm1Fb05pbUFYcTZ0MFBVOWR1a1BPaHhUWTE1UmpMV3ZsNGlTUUx3T1M2REd6c3R3eWpic0FwQjhib3FwaVlxbzBsL1hXOEQ4YWtDWWd4a2FNaTgyYXBwY1RiSEZVQVNsSCtpWlJMRktnMDkxOXViRCtjbUhZMHN3S1FwZXM5alFLUVN4R2JxQUl3YmZLUERCdlJoUGs1RU1HNDZGWkoxVEkrNkxVc3A3WWVLUUF0dzRFandCZnZub0ludnZwMUVnYUFQbjhBWi8zNE41aTg4TVM4VlFKdTJiZ1JPOWM5aDFkKzZrZERwUWtHRkFYUURrbkt2NTNIZ1A5WjVjVXIyMnlZZnNKaXpGMjBWSk1zenExSFcvRE9xOCtneXQ2Ti83bkNqNU1taTVjTlJlT0t2bzJIT2F3NzRzSG1GanNPZEFxdzJWMm9ySzVCU2RVNFZOWFdvcXE2R3FWbFplQjUwaklrMHRQZGphTkhqcUNqOVNBNld2WWo2Qi9DM0diZ3ZKa0JuREVqaHVsMW1vWk56QjB4akZxbmhZZlhPV0V1Yk1PYjFKRVBXUWtTK1FRUG9Cb1VpNDNJSFRVQWlra01pbUFXcWN0MDdrZWxFdkN3ZlFiQ2llYlFqRW1xbUt3RXpLd0FQSDRraXdJd1NWVWhRUUY0dk1uaFA4Yld5S3dBRkpsUnh2TEpvMDB1bHdNRm9FZy9FaFdBWEVxN0xGM1BuUGk0V05xNUplWjVWbTc5VnhFN2huSjJESktxSXFNWTFaZlJvaTRwLzZ5MUdlOEZMcnVoRWE5ODcvc2tqR0g2L0FHYy9lUGZZUEtpRXpIN2hQeFVBdTdkdlJ2dnYvWTRYdnlSSDlPYWNxd2thUi8rRitMUHBoYzNjL2paeTE1MEJJc3haOG5wbURGcmxpYUt0Wjd1YnF4NTVWbHcvaVA0N2RWK0xKK1dmRHdVQlRZZEJ0N2ZiOGM3K3p6WWRKZ2hFTFdocHJZV0pkWGpVRmxUaCtxYVdwU1ZsNnUyUGl6WWQxeEJ3TEhXVmh3NXNBOXRoN2FobzZNVEp6Unp1SHhlQUJmTUZkQlFacEdKakNqOFFzUC94dWpjV281RWhhQUxGRXVReUk4MVhRMVNiaE81d1k2NEZTRDlEcXJ3QmNrQ2RVMXVCZGpMVmFQTDFwaHlUS2tWWUxJQ01GSDlrRmJSeHBMYlRkSlpNU1l5UFRrS3dEUXQ2SzRBRk5uc0dPSCt5NEdUbGYxWGlmdXZYT3UvRERNYU81clJzNDhKMFcyajhmL0kraTgzZFF1WTNzUEFwWGMwNEpYdi9ZQ0VrY0NJRW5CU0hsc0NIbTA1Z2xWUFBZaC9mM2NJaTZibXdCZFJBTkFCMFFTeDRTanc5L2ZzK09VcU4wcHJ4bUgrc2pOUVc2ZE5WT2xRS0lUMzMxcUZsdDBiOGIrZkNPR3lCUUtpQXJEeEVQRE9YaHZlM2UvR3BzTkFJT3BBZFcwREtoc21vYTZoQVhYMTlXa1RhaEJhdnZBeXRMYTJZdCt1N1dqWnR4VjhaQkFYbmhERk5ZdERXRFRCWkMvbUl3cS9FTWpDTDE4M3J5Nk1LZ1RwUFlPdzZqcXVCaW0waWR4UUFhQ2N4S0Q0UGNNS2RVMXNCU2pBaGdQMjJhUEpRT1FxQUlmZlM3V3lBcFRyQnB6NnRWd3JRTTNjZ0FGeEJhQVozWC9UV2YrTkdXc0dCYUI4Nno5a2VFc2NtL3lqTHJZdmU3Vk1tQzM1aDFHS1JxM3FGaklDMExzVnVPUmJEWGoxK3o4Z2VhVFE1dy9nOVAvNkZlYWNzanp2RW9PTTBOblJnZWNldnhlUGZIMEFwODR4VUFuSUVGZitoY2NlNnZVRHYzdmRpYit0Y1dMY3RMbFlmUElLMVVrOVJwOXhEQnMvWG91UDE2ekN6U2VIc1dSQ0ZHL3Q5V0QxYmp2YStqblUxTmFocW5rcTZ1b2JMYVBzWTR3ZHo5RHJIeHJDME5BZ3dxRXdnc0Vnd3FFUVF1RVF3cUhoVDNqMGUwRkkvMHVpZjJnSXRhVWxFbTRmYlBobEJCQlkvTWN3dTkwT3A5TUpqOXNOcDlzTmg4c0Z6dUdFMitPRjErdUYxK2VEcjZnSVJVVkY4UHA4a3F3NGc4RWc5dXphaFFQYjFxS25zeFhuejJYNDlMSkFicFNCTVFCQmpDcjlpTUxDaVhoaUJSZklvb3F3Rmc3RWxZQmtpVVVZRFE5Z0hFZ0JyZVo5MmVpNnpHUmpWR2tGMkdFYlA1b001UGd4bHJXaUlpdEFVUVhnMlBMYVdBRWE1d1pzc0FKUWcrUWZDZTJxVC82UnNnQlV1UC9XeGZiQngvb2hxU295aWxGOUdTM3FrdldmdGVnQ3dwM0FzaS9VNE4yZi9wamtrWWFPL2dHYythUGZZT0ZwcDJQS3RPbDVPY2Zlbmg0OC9ZOTc4TmU3K25IT0lnTlNrRExFRTM2a0tGQTZCNEgvZnRHRng5YzVNR3ZCS1poLzRsSTRYZHBGTUc4NzFvcFZUejJHQTBjNlVGUG1Ra2xKTWVxYUo2SzJhVEthSjR4SGNYR0pxYzVMSkJ4R2YzOC8rdnY2TUREUWo0SGh2NGNHNDBxK1lDQUFqdVBBR0lPdnFBZ2ViMXpKNWlzcWdzdmxoc3Z0Z3N2bGd0TTUvSy9MQmFmVENiZmJEYWZMbFZiNXhnUUJqLzMxVDlqeXY4cENBZ1RDRVF5RlF1ajNCOUE3NUVlL1A0QWYvL01KbkRHakJUYTdBOGNHYkRqYXk2T3RuNkY3QUlnSUhCaG5RMmxwTVlwTEsrRXBxVUZ4V1FWS3k4dFFYbEVKcnpjNWJYQTBFc0h1WFR1eFo5UDc4UGUyNGJxbEVYeDJSVVRmUkNJUnhKVitRWkNWSHpIS2lIV2dHM0hGSUVHWUhTZmlTa0I2WnlhTXBoVHhwRFNFc25kbXM5YzFmVEtRSXJUWXBxUWNVKzhHSEMraklobUlxQUl3K1Z2WnlVQjBVZ0RhSlVmbzFzVDZMN1dtTkZWYnVuYWxyaDlPNmxHT2t6bU9SQ0ZHODB2NWh4ejFReTh5eW9nQzZBUDhRY0RuSmxNR01hcExpdkhhZDc2TUZULzhKZHh1RDVyR2pjdTdPWmFWbCtQeTYyL0haMzkvRC83MzAvMjQ4aFNkdFJ3OVNGTCt0ZllDUDM3UmcyYzNPakR2cEpXNDRZNFRZYk5wLzFQeG5oMDdNV1htUEt3NGR3SWFtcHJnY09RMk1ub29HRVJQVHc5NmozKzYwZHZUZy82K2ZqQW13T0Z3b3FTMEZNVWx4U2d1TGtGcFdUbWFtc2VocUxnWVBwOFBibzlIOHpFTkRBeWd2cnhNY1gyUDB3R1AwNEdxNHFMajN6MzBWaGt1VzNBSTg4ZWxENG9YRllBajNiMDQySFVZQjdvNDdHNTNZYzltQnphMk0zUU9NTGpjSGxSVTE2Q2tzaG5sVlRXb2IyakV6Tm0zSVJBSTRNUE5HL0RBLzc2THFkVWgzSDJXSDJmTVpOb2tFQWxqVk9sSHNmd0lzV2RvRk1BUTRoWXVib3hhQnhLRUdRa0Q2Q0pGREpFRCtoRlhBbEpDR21YN1hKYUR1bVlhbzVMMkUrcTQyU0FjQ0NFeThvQ1cyTjd4WWh5WFVRa29kNWpIRlhwSjdVcFRkWERnUkYxMFJ3c2x0enM2THBFUlNoeUhQZjNnT0oxV1ZCYmhLYXJOU2ZxYVpleGRYbytweDRwWWQvN2RvQWpyMEdQUVF5RVBxQzR0eGd2ZnVCUG4vT3ovNGZ5cnJrWk5iVzNlemJHa3BCUlhmdXB6K1BwOWYwWC9VQzl1T1NlaVQwZDlBUHp4UDl2NmdlOC80OGFMMjF5WXYrd00zSGpuUWwwejVwNXkybW1HeTVVSkFucDZldERSM29iT2pnNTBkM2FocTZzVFhSMGQ4UHZqZ3JEWmJMQVBLeU1kRGdjOEhnOTQzb1pvTklxZTdpNTBkM1hCNlhMQzQvSEE2L1hCN2ZYQTUvV2h0S3dNcFdWbEtDa3JSWEZSTVRnTlpOZmYxNGZtcWdwRFpXVG5nUWxWOGM5S01JeHEzdUwwK29ld283VVQyMXUzWThOUkQ5YXZ0K0ZnbDREaTRoSlUxVFZqL3JLeklUQ0diNnphaEtGL0hNSGQ1d1J3NDdJWTdITEZFUVlRR081YW9Qc2VJUU5oK0w3bXg2Z3kwQU95RENUTVJ4QkFMNEF5RWdWaDVNc1FnRzRBdFNRS1MrM3I4MmlmV0J6clJyZXRYdUlFeFk2bDF6Nk4rWmFUSjFRcG9zNnM5OUwrWktWVE5OcHp2aURsSE9BeU9BbUx1UCttQ2lCdEJaVm1Cc1d4YmdselVpSUh2ZVZzc3BzVElaOEk0ci9HQWVqM0E4VWVNbG5JeHNUYWF2enJxN2Zqc2wvK0dWZDg2a2FVbHVYZjI3UFg1OE5WTjN3T1AvL0hmZGg5dEFNL3VTa0VUUlBiRGdFWUFIcUdnQjg4NThGVEc1Mll2K3dNM1BCNWZSVi91V0ROVzI5aSs1WXRpRVFpS0MwclEwVmxKVXBLU3pGaDBpVE1uVDhmdnFJaXVEMXV1TjBlU1phSTRYQVkvcUVoQkFKK0JQd0JEQTBOb2JlbkJ3ZjI3MGQvWHk4RytnY0FBT1VWNWFpdXFVVmxkVFhxNnV0UlZWVWxTekVZQ1BoUlgxS2txU3dHQWdFNFZidzFsSG1Ca3lZREowMW1PSzQ5QnREU000VDFoMXJ4L3Y2TmVHZWZFKzN0QXV4T0x6Nzc5d0MrKzdRYlA3d2tpcHRQaVdaV0JFWVJWL29GUUpaK2hEWWtLZ050R0ZVR2t1VUxZUllHaDlkbU1ZbUNNSGpkbFlHc3BKWHVkMW1CajFHbEZXQUo2MFkzVkNRU0ZMRUNGTFhJWTl5b0czQmk1TGpVYVloYTM0bFo2K1Z1TGRnbEMwcjBiQmpvL2p0eUhtU3NGU1hsczVaS0tPaG1mamdUTEJ4MHZWaU11dWpOUGtaaWxLNkV2UW9EZUo1Y2dLVXdkMXdUN3YvY2piajFMdy9qbWxzL0RaZmJuWGR6ZExuZHVPcUcyL0hHUzAvamd1OXV4eisvN1VlUkZwNm1RV0R3R1BEVEYxeDQ2QU1uNXAxMEdqNzFPWDFjZmMzQWdrV0xzZlRrWlpvbEVYRTZuWEE2blNnckYwK2xKd2dDZXJxNzBkblJqbzcyZHV6Y3RnMWRuUjF3dWx5b2IyaEVZM016eGsrY2dKSVM4WUI1MFdnVVBvMFRuMFNpTVhoMXNJUnFMSTkvTHBvWHo4akJHTENqZFFodjdMVGg1UjEyZlB0ZkFuNzVrZzNydnAvU3Y0QlJwVitFN211RWpzUVEvK0ZqYVBqTjJRUEFDMHJFUU9TZVBzU1ZnRjRTQldIdy9xT0J4R0FvK2U1Q0xCRWJJdkN5UWZpNW9vUStzM2NzMTYxWHRodXdBblZKcnR5QTdXTUhaUTMzMzR3Uit5UlBRWW43YnpMRlFyZjVieFpXdUtFUjhna09iMGFHNmU0SFNqMzBCaWlWNVRPbjR2dFhuSS8vK2NjanVQS0dtL0pTZ2NYYmJEanp3aXV3WWQySFdQS2xWL0hjRDRjd1NjV1BadEVBOEtjbjdQakZLaGRtTFR3Vm4vcmN5Y2RkWHZNVlgxR1I4ZWVONTFGWlZZWEtxaXBNbnpucitQZUJRQUN0TFMxb09Yd1lHejllaDhHQkFkUTNObUxjaEFtWVBHVXFTa3BIRllMaFVCakZSZHIrUE44eE1JZ0tud0dQQkE2WTJRRE1iSWpoanRNSEFRREgrakNxL0FzaGJwVVZCRUVZVHhUQXdQQm54Q3JRVFdJaGNrZ1A0a3BBc3NnaWpDSXcvQnltYllleWZTK2pNYXFoV09pQzMxYWtjaklTVlhjWlBGYlRxZStzNEFhYzNWd29pL1dmcW9VbDUwQW1xOEkwN3I5Y21vbW5yU0RYTHk2aE9BK0dJdGFqVGlSNkovOHc4a1pCR0V1SzdybXJINmdxSmo4UU9YeHErVkxzYisvRWkwLy9HeGRjY1ZYZXpuUCtvaVdvcXE3RGFkOThCSCs2Y3dnWExKRWZHTzNwTlR6KzQ2OXUxRStlaTAvZWRnN2NidHJ4R28zSDQ4R2tLVk13YWNvVUxNZnBFQVFCclMwdE9MQi9INTU2NHA4SUJVTVlQM0VpcGs2ZmpsQW9pS0xLY2szNzcvTUhVZUxKemR6cmloQlh1SkNMTDJFbVJzSmM4c01iWVMvaWloaUNNQktHdUVWV05jaEZuVEIySDBJS1FPUDMyL21nUEZUcEJ1eGpmYkJCUUd6RURGOXVleExkZ0k4ZkVYRUR6dHl1aEFtclBwL0tyQUR0V3B6ak1SMW1yVE9heVZldTlaOWNHVWxOL2lITklUbjVtSmYxZ2Mrbm5RZ3A4YXpEaU50YkFsMzlRRVZ4T2NsR0p0Kzk4a0xzK0gvMzR2M1ZiK09rNVN2eWRwNU40OGJocWh2dXhGZnVmUUR2Yk92Q2p5WEdCVnkvQi9qczczeUl1Y2JoL0dzdnpPaTZTaGdMei9Ob2JHNUdZM016VGxteEV1RlFDQWYyNzhPMkxWdXdiODl1ZE5aVW9jem53M2tMNXFESXJjNDBKQm9Ud09VaW93WloreEZXUUVBOEx0WWc0bFpZUHBBMUZtSDhHdXdDVUFOeVRTZU1lejRQRGQvdkNHdnM4MW0rVEVXQWovV2duNnVVT01INHNiRWxKQ1lEeVVKcStXeWk1cERvYXF6R0RWaWgvTFp0bWNSR0crUFNkeWc2ZENrS1FDNU56YmlKSGhNNW12Yi91RlNsSVRlMmVFTHlqOVQ0ZjV6WWFlRlM1NUZGQVpod3VDNjJEejdXRDBsVnhVV29YVG0xOVl6cVI2dTZoVXpMMkEzeEg1Nnhnd1d2d1dmT1drSHlrZnNPRTRsaTVROS9pV2xMbDJIYWpCbjV2VWVJeGZER3kwL0RIZHFPSjc3alI3bUlCWDFYUC9DMXYzcnc3cTRTckRqbkNqUTBOZEZDc1JDTU1SdzljZ1I3dG0vRGdkMjdNTDJoRHJldVBBa1hMSndMdHdLMzdkMnRiZmpHL2IvQWMxL3FOMkR3aUN2OWhrRFdmb1IxR1luTFJyRUNDU054SW00SlNPL1hoRkhyclpuRW9QaGR4K2k2ekdUOXFCaFBrUE9oeFRZMTVSakxXcG1OdmlnbktDTllRaW1XcEtKZ2lkVTVsbVlzTEZtbnhaakkxRVJVand3aUNrQ1crbUl2Y3BTSmJRVFN0QmovTHZNcmlWejNYNm5XZjFxNi8wcG9KWnY3TDZlZ1lUdWk4TEdCckVOWGpSV1NmeERHSW1JTjA5YnRSblZKRWNsSEFTNkhIYy9jL1hsODhOb3I2R2h2eit1NThqWWJ6cnpnQ3BST3VnQ0w3dkxobzEzSkYzODBCdnptM3c3TS8wSVJlbnpuNFpwYjdpTGxud1hoT0E2TnpjMVllYzY1dU9uT3V6Qit5VEw4L3NNdG1QMjFIK0xhLzNjdjN0cTZFNHhKZi9QYXNQOFE1alNHOVIxMERQR3M1bTNELzVMeWo3QXlNY1RkMXRzUlQ5UVFKWkVRQmhCR1BDWWdRUmkxM2daSkROWjVPYlI0UDBtSldJZmdRRWgybjZuR1phbVZPVEZqTk9rdjRQS0V3a25Nd2FHaFhzNTI1eDNsUHhDYnNEYlpmMU9GcU03NmI4dzR1Ykg5RzJIOVY4STY0VldyQU5Rei9oOW40SVhLbWZ3bWxHKzBwZDhZMzcvS2piUG5uSTc2OGxLU2tRSjhiaGRPbVRZSlA3di9JY3c4WVI3czl2ek9xRnhUVjQvNmNkUHhzM3QyZ1FsUm5EeFR3RHRiZ1F1KzY4UEIwRHhjY01VTmFHd2FKejlPS21GS2lrdEtNSEhLVk14ZnNoUittd09QdmYwdWZ2SGtjK2dhSE1MVTJtcVVlRE1IOTd2bmxWZHd6b3o5bUZxcjB3YWlmMWhKUXRsOGlYd2tndmlQZHhIRUxRTXBUaUNoOTNyalFHN29oREdFQVpUUXZpNHY5OEVtSDZQQTdBandSUklITFA4WUo2bDZlazJTbERCM0REbHl3Qnh4QWM1WDk5LzAxbjhzYWF4S0ZJRE5zUjF3c3FEeU02QjM4Zy9PcUJXVTV6YytzekdJdUFJd0RTdS9Xb3pIdnZ4ZnFDaWlZQnhxdVBlTmQvQ0gxUi9oc211dUt3amxWeVFjeHFybm5rQlArMEhZSE1VNDYrS3JVVjFUUXd1aEFBZ0ZnOWk2YVJOMmJGeVBjUldsK09yNVorRHNFMmFCUzdQdUYzenQ2L2pnTzczUU5MRndhUGllRnFaelFSUVlEZ0JGb096QmhMNVVJcDZsbWlEMHBnWUE1U0dVRDdOQVhiMzdZY3JiamNDQlEvYlpLZC9MY0FNR2hsMWx4emo4Z2czSERFejZOay9jZ01WZGdIVjIvK1ZrdGl0MWJlaGorTWFsbUp3R1JwVi9oREpJK2FlTURHNGQzZjBnNVo4RzNIcjZLWmhmVzRYMzE2d3VqSDJvMDRrTHI3Z09zeGFmaFg2L2dIQW9SSXVnUUhDNTNWaTRaQW11Kzh4bk1lbWtVL0ZmTDYvQnpLOStINzk4OWhYMEIwYWZjZXYySGNUME9rRTc1VjhBUUNmaUdRUkorVWNVSXBIaDUza0h4aVQwSWdqTjZBWlpWUlBHN1U4WWlZSDJ3d2J2WVJDQmx3Mm15SlBUWE94U3k0OG0xcENtUitNUy9qRFNEWmpQeFhwbHF0cm5KSDNOWlBjdWZVYkZRaGZkVE9pbVpUd1pMR1VpVWNER08wbEdHdkg3VzYvQjBWMDdjUGpnd1lLWjg4TEZKK0xLYTY3Rmk4ODlpOVZ2dmdFbUNMUVFDb2lHeGlhY2Qva1Z1UEtXMi9CR1J6OFdmUE1udU91K3gzQ3dvd3QvZk9rRjNMNWlRSDBuQWNUam9mWFNwcFFnQU1UakF2WU9YeGQrMmtBVEdzTVEvN0dGSHVlRTNrUkFzUUJwdjU4VGlvUnVEU2JEcEgwck00K0ZGTkd4SEp3YVBsNlpzOFJxRWZYRFptSkN6NXo4UTFuSEREN1dwMjZhWElGZjFLUTRWRVlHNjcrOXJjRDQ2Z3FTa1VhNEhIWTg4WlhiOGVxelQ4UHY5eGZNdkt1cXEzSExaMjVITUJqRUEvZitEWDI5dmJRWUNneVB4NE9UbHEvQVRaKy9FKzNGbFRqbjU3L0hLMXYzb3E1VXhTdEtvdUtQRW5zUXhGaGlpTWZBN0FBcEFnbnQxMVlYaVlFd2FKOUM5eTdhaTh2dFI2VXV4Y2Q2d1NjdVBObm1mZEtTZ1J5SHBjOUZ3Vm5rUkhIZzRrbEFwTWYvRTRtV0p5UDVSL3FwaUh3ekp2bEhRdGxVYlNBbkpmbEg4bmlsNVhoSmR2LzFza0dVc0U3TkZxM201OXVvNUI4VSs4OVlCaEVQa2kvQ0d4c0JGbG1DbGJObmtxdzBvcnpJaC9xeUV2ejl1WmN4Yys3Y2drbUd3Zk04SmsrWmlwS1NVanoxejhmaDluaFFXMWRIQzZMUTNrZDVIclYxZFppMytFU1VWOVhoZDgrMjQ0bVBCRXlyaWFCWjZtOE5nZUVOUVlBMkJRUWhDWVo0Yk16QThMdVNnMFJDYUVCc2VHMVJ6RWxDVDRUaGV4WWxuekh3WlMzUCtsRTBOSVlRNTBHRWM4c2FNQ2Rqa2h5a0pnUkpPR3dXTitBMHBGY0FtaXo3YjFJYjZhcHc2Y2VsUi9iZmNxRU5yc1NBTFhvcDNJeFF6Rkh5RCtzZ2t2bDNoSCs4N3NHY2hwV1kyZFJBc3RLUTJjME5lSGZiVGh6bzdFWkRVMU5CemIyOG9nS3pUemdCNzY5Wmd5MmJObUw4cElsd09zMzdWaGVMUnJIMmcvY1JDQVJRVVZsSmkxZnJ0YkJnQ2V5bEUvRFhsN3Z3NE9vSVp0Vm5VQVNHRUxmMkkwc21nbERHaUNJd2lIakdZRHVKaEZCSmVIZ2RrVktaMEh1ZFVVWmdhOERsejFnNEFJTjhtUWFkR1o4TmVPU1JyNXZxSjQyZWppZjNYK2tkODJEd3NWNzlMNXg4dm1uU0EwRStROGdhS0gvemZpZm1qR3NrV2VuQTcyKzlGanMrWG9mMnRyYUNtN3ZYNjhWVjExNkxPZlBtNDhHLy9RMGJQLzQ0YlVhcFhMTnZ6MjdjODhjL3dPLzNvM25jT0ZxME90SFkzSXhMcjdzTmM4NjZHYmMvT1FITGYrSERCL3RTWHZ5N1FJSG5DVUlyb29oYjBYYUNFdVlRNnVtaGV6T2hNeFFMa1BiSFJzMHR5VU96SDdaRVN4bHlBODdjNHZZdGsxbG1JWXdkZ0JyM1h5bVRrdVgreTZTNi82cTMvdk94UHRURjlxczdIK1QrUzhqbENPS1dBQm1ZL2VsaXJQMzVMMkRqZVpLWERxemRld0RYLy9FQlhIL2I3ZUJ0dG9LVVFTQVF3S3N2dm9pK3ZsNmNkOUhGcUtxdXp2M2VPQkxCcWhkZlFFOTNEeTY2N0RLVWxwWFJZaldRbHNPSDhlN3J6MktDcnhlL08zOElVNHRKSmdTaEt5N0VyV3ZJSXBCUWloMUFEVlNrZ1NTSUxEZ0FOTk9lVHpZc0IzV1ppZnBoNnRydHNJMURQMWVSY294bHJYeThCRXZVT3JHRVV1ejR0MG5OY2l6Tk9GaUs3aXJlTHBNellaYllTb2F5aktVNUt0Wm04dmUyTDl4UjhZT2tiL0xXL1Zlc3ZIUUZZSVZ3REU0RXMxZERSaEdxTDZORjNWd284ZWhCSUI4LzRxNTBHZWpxQjU1OHV4eTNubkVteVVzbkdpckswTjdUaC9kMzdNTDRTWk1LODMzTzRjRDBtVE5SVmw2T0Y1NTVCcDBkN1doc0hnZTdQVGM3MGQ2ZUhqenl3Tjh4Y2ZKa25IL1JSWEI3UExSUURhYWt0QlN6NTUrSW9LTU9QL25YWVd4bzVYRnlVd1JGbEpDY0lQUWhOdnhlSUFCdzBuc1ZvUUFCY1NzdEw0bUMwSEdOT1ljL2hMbjN5WG1VRElTSGdBRytRcmZCV3NNTldLU0ZGTDJhRGdyQWRDbys2UWxBMGlrQXMxbi9qUlZ5ZHZkZlNRckFoUEk4Qk5RSWg4RWR0eVEwMGVKWFVvK3MvNnhCTytJdVFCbDRZd01RQ2l6QzJmTk9JSG5weVBLWlUvQzdmejJMc3RvNkZKZVVGS3djU3N2S3NHRHhZZ3owOStPRnA1L0MwTkFnYXV2cTRYQVlGMWpvNkpFaitOZmpqK0dDaXkvQnpEbHpDaVpCaTFtcHFLekVDWXRQd21GL01YN3cxQkYwREhFNHFTa0twNDFrUXhDNkVFRmNFUWpFclczb0ZraklJVHE4WmloWkE2SG5QYXFVeEdBWWxBd0VEb1F4d0ZkQkdERnZWdXdHbkp6eWd4UFRnU1hvb2RMWnFXbXJLdEpXOEdOZGdEVldBT2FMKzI4SjYwRjE3S0M2ODJBV0JTQWwvN0FHQVFCSHN4Zjc1ajBlTEd5NkNaY3RXVWd5MDVtdGgxdHcrYS92d2FkdS8yekJ1Z0luRW92RnNIN3RXbno4MFVlb3JhL0R0Qmt6TUhuS1ZEaGQrdTBxRHV6Ymg1ZWZmdzZmL05RTktDc3ZOM1MrdlQwOTZHaHZSM2RYSjNwN2VoRUtoUkNMUmVGMnVlSHhlbEZSV1ltS3lrcFUxZFRBN1M3TWRJdlJhQlRyM244SDI5ZTlnKyt1Q09HMmhWSFN6eEtFbnRnUmR3c21aUTRobDJwYU40U08xQUh3a1Joa3dTeFExOFJ1d0oyMkp2UnhWU25IOHRRTk9NV3RWNDRiY0xJQzBHVHV2MmtWZXB6NHVQUlVBRGJFOXNMREJySlhRMFlScWkralJWMXkvN1VHUjRIRWhOTmlyUGhLQ1I2KzYzdW9MU3NobVJuQXR4NTlDcHY4VVp5OFlpVUpJK0doY3ZqUUllemR2UnNUSjAvRytJa1RkZW5tNFA3OWVQV2xsL0NKNjY5RFNZbHhQeTBmMnI4Zkw3L3dQSHA3ZXhHTHhSQUpwNC9HejNFY1hDNFhPSjZIeldaRFEyTWo1aTFZZ01uVHBodHFJV2tHQW40LzFyenlBZ0x0dTNEUFJYNHNicVIwd0FTaEsyN0VGWUgwMnhRaEZSdmk4UUJwelJCNjRBTFFSR0tRLzA1dGNEMjVkZlh1UjRVU01NVDVjTVEyTmVWN25SU0FxWU5OK2pPNS9FaTdMTXRrait2TEZNUUJGQjFYbXZJYUt3REYzWCtWS2dDbFd2K05say9uL3N0RVlnVktjLysxSTRyeDBhMmp3aVQzWDJQckZpSkJBQzNaaTBXaXdJTFBsdVBqWC95Y1pHYlVxWWxFc09BYlA4SDVWMStEaXNwS0VvaEJ0QjFyeGROUFBJRnJiN29KeGNYR0tMdjcrL3Z3NzhjZlIxdHJLMEtoa0tJMjdIWTdIQTRIYXV2cmNjcktsWmcwYVhKQnVTeTNIbTNCbTgvOUM4dnErdkRyY3dPb29GQ05CS0VmSElBaXhLMXU2TDJMa0lJTGNVdEFndENEZWxDOFNibFFNaEJWN1I2eXowSWtNUUFsWTVJcUppc0IwNm42MkJpOVV6WXJRRzBWZ0dsYVVLZ0FUSTRCcUljQ1VDUkpoMnIzWHhqbi9sdk11dUZsL1pCVVZWeDgycFZUVTQrcy82eEJKK0x4TTdMd3psYmdXTWRNWExMNFJKS1pRZGh0TnN4dHJzZnZuM3dHcytmTnAvaHpCakF3MEk5L1B2SUlycnIyT3NQY2ZqZXNXNHZISDNrRVhaMmRpTVZpaXRzUkJBSFJhQlM5UFQzWXVYMDcxbjN3SVp3dUoycnI2bzgvSC9PWjR1SVN6RjI0QkFlR3ZQakJ2NDdBd2Nld3VKSFJaVU1RZWhGRy9FZEVCOGl5aThqT3lPT05YSUVKdmRaWE1ZbkI5UHRtTG4vbUgrUHNDSEpGRWh1VWY0eVRPZDVFL1ZhMjFqaUR6c2VvQWxEQ3dKTDFiNFdUL2JkS2FJRjlSQnRUcU82L1pQMW43TXQ3cDdTaWYzbmVqWk1tblkvWnpZMGtOd09aVUYyRjk3YnZ4cEgrQWRUVk41QkFkRVFRQkR6KzhFTTQ0K3h6ME5Da3Z5OEpFd1Q4Ni9ISHNQYjk5eEVLQnJWOUQ0N0ZFQXFGc0gvdlhxejc4QU1VRnhlanByWTIvNVhJSEllNmhrYk1uSDhpWHRvOGdOKy8xWWZsNHlLb3B0aEFCS0hUalJQeEVDS1VMWmlRUWdoeEJhQ2RSRUZvVEJSeGkyUmFXd2E5YnhYbytCTGF0U0dHZnI1S3Q4RWFsUTJZazFKYW9tSXh0VHl2M2ZuaTlGMGpxZTYvVUtQOHk5SnJRa0U3b25DekliclFDZVBvbFY3MDViVjJuSG5DTEpKWkR2ak5UWi9BK25mZlFjRHZKMkhveUJ1dnZJSUpreVpoNHVUSnV2Y1ZpVVJ3MzEvK2pKM2J0aWwyK1pYMFBoeUpZSEJnQU04OTlSVCsrTHZmb3FPOXZTRE9wY3Z0eHVrWFhZSDU1OTZBQ3grdnhEZGZjeU1VcFRWT0VMcmhCOUFCU2ZHRWlRS25HM0dGTVVGb1RRK0pJTzh3c2Y3QnlRSndJSlF5VmhtYUxDNjlQb2tUTTE1ajZZM1Z1QndJWG1xZmZHNFdSMmF0cEhadTZFejFxdld4WHYwdmtIeE8zVTBLU3BtYUFRQ0Qwb3EyOXdKT3ZnZ1ZSV1JHa3dzcWluejQ5bVhuWWMzcnI1RXdkT0xJb1VNNDJuSUV5MDg3WGY5TEx4ckZmWC81TTFwYlcxVzUvTW9oRWdtanM2TUQ5LzM1VDNqNStlY2hHTlJ2cm1rYU53N1hmZlpMK0lndHhidy8rZkR1SVZyckJLRWJBdUkvTFBhQUZEeUVPREhFbFlBRW9UVkRrQlRXaUNpUVBic0J1cEVpV2ZvYnNjNWs1ZTBWNVhoNTJkWjYrcDBDWHRtQXBHaFJVeE41S0RuSFhNNHZDcC9RbDl1TDBTb1hLcUVOZmRMdkxDK3Z0ZUdzRXhhU3pITElUYWN0dzJCYks5cmIya2dZVXZhaGdvRFhWNjJTdGhlSnhmRFNjOC9pZ2tzdTFUOVdIbU40N0tFSDBkSGVuaE1sWENnVXdycVBQc1FmZnZzYmRIVjJGc1Jhc05sc09PV01jM0RHSno2RFcxNnN3K2VmY3lGQUd3U0MwSThneUJxUXlMNUdCa2tNaEE3MGtnaElQMkRjZUh4Q3J3bmt6U2tTVzJMK1liM2NnSGx0enEveDdyOWp5MnZ2L210REZCNDJRRGVEZkxreG1CMEJRTC8wNHMrOTU4TzU4K2VSM0hJSXozSDR2MXV2d1ZzdnZVakNrTUJicjcwR2pwZDJZM2h2OVdyTW5EMEhsVlZWdW8vcmpWZGZ4ZUdEQjNOcWdSZUxSdEhUM1kxNy8vd25iTm00c1dEV1JGVjFOYTYrN1F2WVg3SUM4LzdveFlkSDZNRkJFTHErWi9TQzNEMEpjZnBBMWxxRTlneGdOT0VNUVh0M25YR3h3R2oraHVQejB0NE4rRGdXY3dQbWpWOUF5cTBLMDdXaXIvdHZuLzRYVWFFRzZ5VEcwaS85aFR3UUFqYnQ0N0I0OGdTU1c0NDVlZHBrVEtrc3djN3QyMGdZR1RqV2VoVDc5dTdCeWpQT3pGclc3L2RqNitaTk9PblVVL1VmMTlHaitPajk5eENKbUdQSEV3d0U4UHpUVCtINXA1OEdZNndnMWdiSGNWaHk2bWs0OCtyUDRKcG5xdkQxVjl5STBFYUJJUFFqaExnMVlKQkVRYVRaUG5WRHZwOGJRV1JiVjMwa0J0cS95eGlmYWpmZ0hnMEdsTmtOV1BZUVRlSUd6TXNXaEF6M1h5bmo1a1RGbkh2MzM2SkU4MUdPTG16Q1BBL0dGejdrY083OEJmcTdSaEtTK00wTm44RDdiN3h1V093NEsvTHk4OC9qZ29zdkFjOW4vOTNwbmJmZXhFbW5uQXFiemFidlpjY1lIbi9rWVYwVGZpZ2hIQTVqODRiMWVQRGV2NWxHTVdrRTFUVTF1TzR6ZDJFdGxtRGhuejNZU3A3MUJLRWZBdUp4QVdXRUhpRUtoQWhJV1VOb0Q5MXI4ZzhUNjBlS1RPUUd6R1NLTGRuK1VIczNZRDZiUWsvTmVXVmF5REJuN3I4eGVOZ2dYWno1Y2tNd08wT0lKd0NSeU9OdkZlUEtrMDRpdVptRTVxb0tmR0xwUW56ODRRY2tqRFRzMnJFRHBhV2xxRzlzekZwMllLQWZCL2Z2eHduejUrcytyclVmZm9DaFFYUGU1eU9SQ0E0ZlBJaDcvdkI3aElLRlk2Wno3RmdyV2xvN2NDeFVoT1VQbEtQaFY4VlljWDhSL3ZDQkRiMWtyVVFRMmpPU0tUaE1vaUFTR0FSWmlCTGFJaUR1Q2t6UUh0NEFYTXdQZStMbTJtSnV3RXpIVTJqWFpaWGtoZnR2dnpyUmsvc3ZJWWRlNlVWSDNIK1hUSmxJY2pNUjM3ejBYQ3o4NWs4d2I5RmlPSjFPRWtnQzc2NStHNWRjY2FXa3NoKysreDZXTGpzRkhLOXZrbnBCRUxENmpUY1FqVVpOS3pkQkVORFYyWWsvLzkvL3cyMmZ2d05lWDM1bi9ONnpheWZlZXUxMVhIalpwYWlyYnhpOVBmYjA0T25ORy9BL2Yvb1FGMDZMNE1lbkIxRHVvZXVLSURRakJxQUxRREdBSWhJSE1Vd1BnRnJvR1RDS0tNVDlUZ21Kd2JCOVBMUDQrRlRPd2NkNjBjZFZxUnhRK3BTMkk5L0tIaUxIQVdsRC9JaTBsUFpyZFlLUmQwdlgyUDAzblNBejFqUlFJZVVWZW5MU3IrVDFhZlliRGlHZElPTHhlQ1R5M0FjOHppUDNYOU5SNG5IanRqTk93ZHIzM2lWaEpIRDB5QkY0UEI1VVZGWm1MUnVOUkxCcngzYk1tanRYOTNIdDJMYk5kSzYvYVorTGpLR3Z0eGYzL09IMzhBOE41ZTl0TUJqRTY2dGV3ZlczM0pLay9BT0Fzdkp5TEYxeE9qNzFoYnR4c09Kc25QQ25Zdnp2dXc3RUtJa0JRV2pMQU9LS1FJcG1RV0I0SGZTU0dBZ05pU0J1ZFV6UXZ0K0E4WmpaRFZoT2MrcmNnTWZDWitwU2IvZGZMdHQzR3JqL1NoWXhseWdVQVY1eS95V01RdWE5Nlo3bmZiaGh4VXFTbXduNTB2bG5ZdGZtalFnR3lXOW1oUFhyMXVGRWllN3EyN1p1d1l6WnMzV1AvUWNBYTk1OEExRUx4ZGZyNit2TGF5WGd1Zzgrd09LVGxzTHRkb3Uvc1BBOEZpNVppdXMvOXhYOHUyc0JGdjdGaXgwZGRJMFJoS2FFQVhSQzFnK1RSQjdqQnhBZ01SQzUyL2NRcEQ5UWlwc05LbklESGkydm54dXdsRkZvNHdZOHRpZmV1TldocmZ1dlZGRXBzVWYwc241d0VQUVZDMm56Q1NEK1M1aU0vZnpoRHFCdnlJczU0eHBKZGliRTQzVGdxeGVlalE5V3YwM0NBTUFFQVFmMzc4T0VpWk1rbGQrMGZqM21MMXlrKzdpQ3dTRDYrNndYNGJ5L3Z4LzMvdmxQZVJrVGNNZTJiWmc5UjVybHA5UHBSRmwxUFE3MXV6RDdkenhLZmdnMC9UZHc4aCtCSDd3RzdPbWlhNDhnVkNFZ25nbVc0blVSUU53Vm1LeENDYTBJZ0dLTzBuNWUrdmhVenNISGVtVVBLTDNEcjRaRGxKc05XR1BCOEhxZFNPWHV2L3FVbHdObC84M2o4WmtObVRxSSsxNXk0OGFWWjVIY1RNeHRaNXlDSTN0Mll5aVAzVFdsY3ZEQUFUU1BIdzllZ2tYZjBOQVFJcEVJeWlzcWRCL1gzdDI3RVE1YjcrMlRNWWJlM2w3OC9aNTc4aXJqZERnVUFzZHpjR1d3L2hzaEVvbmdnWHYvaGxkZWZCRzl2VDBRWWdJR1FrQkxQL0QrWWVDSHJ3RkwvZ0RNL2czdzJsNjZIeEdFS2dZUmR3a21kL3ZDWmlSak5FRm9SUytKZ1BiL3hvekhKK2ozZzcvZStpdE9KL255a3MrZ2pQaC9UTlU2U2FOQlpKeElyaEV0M0grUjR2N0w0R1g5ZExNZ2pIbWhrdkhydXNDQXg5NTA0T3BsUzBsMkpzWnB0K1BMNTUrQmRlKytVL0N5T0xoL1B5Wk5uaUtwN001dDJ6Qmo1aXhEeHJWajYxYkxLdENZSUtDem94MVBQUHBJM3F5VHpzNE9WRlZYUzVyN2czKzdCNGNQSFVJa0lxN0E3UWtBMjlxQnl4K0tXd1cyOUlNZ0NLV011QVNUeFU1aEU0UXNqeFdDeU1nZ3lLcVU5QWlHNEdHRHNDVXVOcm56a3VNR3pFSEVEWmhUTEdLV3FiK01ZeFh2aVZkK3pqbkQxeG1ueTdwTkx1Vm1nK1QrUzRwRDR4NStNcGJhNitzNUxKbzBCU1VlTjhuTzVOeHkrakljMkxXejRHTUJ0aHc1aktaeDR5U1YzYk5ySjZiT21HSEl1TnFPdFZwYXJyRllEUHYyN3NYcnExYmx4VG9aNk85SGFXbFoxbkt2dnZ3UzJvNGRneUJSZVRzUWlsc0ZudkJiNFBITmRGOGlDT1UzSGNRdEFVa0JWTmowZ1pRMmhEWXdVSWdCMnRkTEh4K25ickY1MklEc0JyWFdPM0U1RUo3WVVkNllNV1MyS3RUT2ZKS3BGbm1TbWFpVjNYODVrNCtQa08zK2U4OExSYmo1ZEhML3RRSk91eDJmT2ZOVWJQam93NEtXdzBCL1Awckx5cktXRXdRQjNWMWRrcXpBdENEZ3QzNEt1bWdrZ284K2VCOWJOMjJ5L0Z4Q3dSQ2NMbWZHTWwyZG5kajQ4Y2VJUnFPeTIrOE9BTGY5Qy9qYUMzUnZJZ2hWOUErL3V6QVNSVUVpZ0Z3M2laenRnd29lcysvdDg4WU5XR3dpVE1hMzRod3ZMemNPb0lieWxhWUFsT0grSzJWOG5Od2pCcm4vQW9DUEZmamRpSlI0eGlBekFHN1BJTEQxZ0FPblRKOUNzck1Jbno5N0pYWnMzR0NwVExPYTdoTUVBVHd2TFp2dnNhTkhVZGZRWU1pNElwRkkzdXhkdzZFUVhuajJHWFMwdDF0NkhveXhyR3ZsMVpkZVJDQ2dQQlhsUUFqNDg0ZkFkWThCakpRWEJLRWNQeWd1WUtHL3YxSldZRUlMb2lDcll0cmZHMEk4dkJ0VExnKzVic0F5VG9JY3ZaazZOK0JSK0hSZHFGa2pUSXQxbVJyL0Q4YTQvenBaRURaRTlMMjRPTHF4RUpEOXE5ZkRyenB4elNuTHdYRWthS3RRNUhiaG1tVW5ZdVBINndweS9rTkRneWdxTHBKVTl2Q2hneGczZm9JaDR3cUZnbm1sQVFvR0Fuams3L2RiTXFuSkNEYTdIZEdvK0xNM0dBemk4TUZENnRka0dQajNWdUNhZjlEOWlTQlVFVUU4TG1DRVJGR1E5SUlVd0VSTzlrTUZUeUhyRVZUTW5VY01IdWFYM2FCaS9WUGFPSURLcDhBMEVTMlhJQSt0enBKQzkxL3RCS0NCK3kvSS9aY3dBQVcvZVAzOUZSZHVXSEVxeWM1aWZPV0NNN0ZsM1Zxd0FqUTVpa1Zqc05ta1dRQWViV2xCZldPakllTUtoOEtHblErT2kyZTI5WGk5OEhpODhQcDg4SGk4Y0hzOGNIczg0SGx0b25BTURBeFlPaW1JMCtsRU9DU3V3Tnl4ZFV2R3BCOXlDRWFCNTNZQVgzaUc3azhFb2U0bWo3Z2xZSkJFVVpEbnZwZkVRR2lBVEk4b2duUVFTc2Z1TlpFYmNNSkdRVjcvbkRaQ3Qyc2pXMDd4RUppaWllcXpvSDFDTDEzZ2hQN0l6RWk1WVM5UVhWeUh1dkpTa3AzRnFDejI0YVFwRTdGMzl5NU1tVGFkQkNKQ1ozczdhbXByRGVrckdvM3Fha25MOFR6Y2JqY3FxNm93NTRSNUdEZGhQQ29xS3VGd2pzYTRpMFFpNk8zcFFXZDdHL2J1M29PREIvYkRQelNFY0RnTVFaQnZWc0VFQVljUEhzU0g3NzJMSlNjdnM5ejVkN2xjQ0lWQ29zZTNiZG1xS1BhZkdQNEk4UGVQZ2VuVndGMG4wL1ZIRUlwaEFIb0FGQU1vSW5FVUZINEFYZ0NVbDQ3UVlsOVVSV0l3Wko5ZndDRlFmS3dQWFdnd1JoNWM1cFBBb0Z5dnlvRWJia0U1OXF3amxiRlJraklaTHR0M3FlNi9DdUwvS1hIL3RTTUtGd3ZvY0tKbGxySHFEWVdRZnBISVZBRGU5NUlYTjU5Mkpzbk9vdHg5MFZtNDZXLy9LRGdGb04xaFJ5U1NYV2tqQ0FJWVk1S3RCZFhpZERyMVVRQnlIRHdlRHhZc1dveFRWcXlBMitNUkxlcHdPRkJkVTRQcW1ock1uRE1YQUJBSUJMQnoyelo4OU1INzZPbnVqaXZFWkZncWhzTmh2UFhhYTVnOGRSb3FxNnoxSmwxVlhZM3hFeWVJSG04L2RrenpQZ2ZEd0hkV0FRdnFnVk1uMEgyS0lGUXhnTGhWV0FtOUV4WVV2UUJxNlp3VEd0dy9LbWtkeWRwM3N3S2RsNHE1T3hDQ0F5RkU0SkxWNFBFU0hKZndYajVhVDFRaHh6aUFZMk82U2RlamxHbkpVaG9talhWc1QzeTZyN05MWHYxR1NlNTZ5QzRTZFdQMU1uTC9KUXpBUC95U0xCSEdnRlhyZUp5LzRBU1NuVVU1WVh3VHZHRG82dXdzcUhsN3ZUNzRod2F6bHV2cjdVVnBXYmxoNDNLNVhKcS9Oem1kVGt5WU1CR2YvOUtYY2VhNTUyWlUvb25oOFhnd2Y5RWlmT2FPTy9INUwzMEpTMDllQm8vWEM1dGR1cUYrTUJqRVB4NThRSkVWWVM3eEZSVmg1dXc1NmUrQmdwQXhQcUFhK2tQQUZROERuUlNFbkNDMGViL3BCbVVJTGlTaWtQMmpOa0dNUVFBd1NHSXdOZm1TRFpqcDV3YXNlUHFhR0NWd3NvN3kraTZLeklOUm5EWlpoekhMOHdzdjhBdWJVSTdNWmZiQkRtQnU4M2k0SEhhU25ZVzUrNkt6c09IRDl3dHF6anpQSXhiTHJ1M3U3dXBDUldXRlllTnl1YlgxVjNLNlhEajF0Tk53dzZjL0RaL1BwMG1ieGNVbE9PZUNDL0NWYjN3VFo1MTdMbncrbjJSRllGOXZMMTU3K2VXOFdVZURRNFBnTklxVm1JNU9QM0RSQTVRWm1DQTBJWXg0Y3BBWWlhSmdHQVFsZ3lFTTN4OFJ0TjlYZ2svbzEwMGUydXUxOUF1UHg2dGZSOUxqLzNGeWppaDAvMVd5K25rd2VObWd2aGNUdWY4U0VjU0QzY3JnOFRkOXVQS2s1U1E3aTNQeDRuazRzbThmSXBIQ2Vrc3VLeTlIZDFkWDVyM0R3QUNLaTBzTUd4UFA4NXE1QUR0ZExweC8wY1U0WmNWS1hjWnFzOW13NU9SbCtQSTN2b2t6enprWFhxODNhK0tRV0N5Rzlldlc0bGpyMGJ4WVEwT0RRN29tYldFTTJId00rUFU3ZEo4aUNFMklJcDRjSkVxaUtBZ1lLQ0VJb1o3UThJY283UDIzempvVk54dUViY3d2VkRJYTVOTHJvVGl4QkxtTWt6d0JPWG8wVHVVQzRETjJLVFArbityenpLay94MHJTa1hqWUFEaXo1ck1uOTkvOFFZR2J4TXRyZVp3N2Z3N0p6dUxZZUI1WG5yUVEyN1pzTHFoNU56WTFvK1hJa1l4bEJnYjZVVnhTWXVpNGlvclVSNnQzT3AwNDdjd3pjY0tDQmJxUGwrZDVMRjIyREYrOCsrczQ4YVNUNEhLNU1yOUhCNE40NHRGSExlY0tuUGJkZ2pIZHpmUDhFZUJIcndON3UrbGVSUkNhTUpJaG1MSjdGZ1loQUJSS2djakJQb2t3a0R6UlNYaFl2K3lKY0ZxSWlsTXZIbGx2d3hreURQUHl6cFVHWjE2aDVRWFRSaFJwU1hMLzVlaUNKdlRZeFNJZTVGWUc2M1lEMCtvYjRIVTVTWDU1d0dmUE9CVTdOcXd2cURsUG1qSUZlM2J0ekZnbUVBakE0L1VZT3E2YTJqcFY5WG1leDVScDA3QjAyU21HanR2aGNPQ2NDeTdFWisvNklwckhqWU16Z3lKd29MOGZhOTU4dy9xUEo0T2VUNzFCNEtxSHlSV1lJRFJEUUR3bVlKQkVVUkQwRFo5emdsREtJSzBoMnZmclAyZWZKbUhmbUl4djFienNhcWQxVFR6S2F5VlFUckhZTlBCdmxydERTQ2t1VHhOTUYxcEIzMENVTWdUWk1YR2VlOStGaXhjdkk5bmxDUk5ycTFIbWRCUlVNcENHcGlaMGRYUmtMQk1LQk9GMkc2c0FuREo5V2xaWDJrejRmRDVjY3VWVk9aTnJhVmtaYnI3OXM3amtpaXZoOFhyVHVqUkhvMUY4OE82NzZPM3BzZlFhc3RucyttUnRUc09lTHVEZWRYU3ZJZ2pOWUFCNklEdjhDV0ZCQkZBY04wTDlHcUprSUxRUDEzbGVZOEsreVRidjR6U1lDM2Y4RWFsSU5DcGx4S3VaSENkajhGazlvQlAvaDNFWit4TnJrVk53SnVJcG9TUG1YS1RrL3BzL0RNaXY4dW82Rjg2YU80dGtsMGZjY2RaeWJQbTRjRFFNSE1maGxzOStMbU9aWURDWTBaSk5ENXJIamMvcVJpdUcwK25FcFZkZUJZZkRrWFA1enB3OUcxLzQ2dGN3WmVvME9KM090TEo5K29rbkxMMkdYRzdqMXNaZ0dQakdTL0YvQ1lMUWtGN0Vzd1FUK2MwUUtDRUlZZmgraVREeXhWNm5zbnFPSXdVZVViaVpYM2FEMlNMM2ljYmxZK2w5ZnptRjAyTFora3ZlaUluSVFLRnZzOExkb01ibmxxbGVGYjVFNno5eS95WDBJQ3IveFhmQUR3d0duS2dyTHlYNTVSR1hMVm1BL2J0MjZwclV3R3pZYkxhTXh3VWhCcnZkMkN6WFplWGxpcTNLcW1wcU1ISEtGTlBJMSsxMjQ1b2JiNHhiQTNyR1dsSWVPOWFLM1R0M1dIYjlGUG1LWU9UVjBoY0U3bjZSN2xVRW9mM0ZCWW9UVndqMGtBZ0lGUVJCc1VOcC82LzduRDJ5Tk0xaXdtTGFpdGdBYjVlUkhuaFZrK2VVVFZuN05Nbkt6NkZYb0lpamRPUFFHUVcvWnIyNWtjT0tXYk5KZG5tR3grbkE0c2tUY1BqZ1FSSkdqbWthTjA1MkhaZmJqUXN1dWNTVTg1azVadzQrOThVdm9hNmhBYllFaFdvNEZNTHpUejl0MllRZ3ZNMEdualB1Z1JNVmdFYzJBUHRwRTBzUTJ0TVBjdkhMZDhJZ2EwL0M4SDBUN2NjSk9ZelIvMmdvUiszMVhITEM1VW1iQ0s5OHZVblB0OHRwTUNGUjkxOU91UzBxRHdZM0c5TDNvdVBvZ3FZWFh2bFZWcTMxNGN3NUo1RHM4cEJQcnp3Sk96ZHZJa0hrbVBrTEY4bTJQS3lzcWtKOVE2TnA1MVJVWEl6YlBuOEhscHgwY3BKYmRjRHZ4NGZ2dm12WmMrVnl1WTI5WlllQTIvNUYxd2hCNkxhNXB3MStmdE1IZ0JJcUVXcnVFYlIrOGdNOTlTQXFkQ1Z1NW9kdFRIQitPYkg5MHV1bE9BME01dVRvMVRpRlF1Q3pUeW96VEl2em1pYituL0oweTV5TWt6OEliaVRkRUVjWEY2RURmc1JkZ0dYeTltWmd4YXpwSkw4ODVJeTVNM0hrd0g0SXNSZ0pJNGRNbmpwVmxnTFE1WEpoK2NyVHpQODQ0RGljZGQ1NStPVDFuNExYNndVUVR3aXk1dTIzRUE1YjA2K21zcnJhOEQ0L2JnSGVQMHpYQ1VIb3dpQklDWmpQeEtEb3gyK0NPTDUrS0Z3QTZROTBuVE9EbThsM0ExYXNuNUlSQjFBS3N2UnZhZlI2dkdIblVhRUxEOU5tNm1ueGtQdHY0VjM0UnFQZ0JiZDNFSEE3dlBDNm5DUy9QTVRHOHpqemhGbll2Mjh2Q1FPQXcrbk1pV0xLN25DZ3RyNWUrbm16MlRCMXVuV1U4aE1tVGNKbjcvb2lLcXVyWWJQWkVBd0c4ZFpycjFweWpZeWJNTUh3UG51RHdGM1AwUFZKRUxwQlNzRDhQNzlSRWdOaDNQNko5dVdFSEh5Q0ZvdU15ZmhXeXJrMEpnNGdyM2hsNlJYL2o5TlJTS254LzlRRUlpSDNYeUliQWhUOWd2WEJEdURFeWROSWZubk10U2N0eEw3dDIwa1FpQ3ZXWWpteWhseTJmSVhrYkw0elpzOEd4L09Xa20xUmNURSsrNFc3TUczbVROaHRObno4MFVjWUdyTGV6K3JONDhiSnp0cHNzOW5nOWZsUVUxdUwrb1pHRkJVWHc1MG1TVW9tZG5VQzd4MmlhNVFnZElPVWdQa0xROXdWbUNDVTRBZEFqakw1Z1VuZGdMMU1aUnhBT1hvb0x2dnRVbEVEQ3VNQTJwV2REdzNqLzZXNi84cUoveWZyZkhFcEU0L0F5UUowVVJINnZ0Z3ErQW5nL1cxZUxKa3lnK1NYeHl5Zk9RMUgvdklRR0dPS3M5SG1DMjYzQjhGQWJ1N0ZrNmRNZ2QzaFFDUVN5VHJHZVFzV1dsSytOcHNOVjExekxkNWQvVFplWDdVS2I3N3lDaTY4N0RKTHphR2hzVkdXOHRYbGNtSCtva1U0NCt4ellFOVE4SFoxZHVLTlYxN0J2ajI3RVFxRnNyYlRId0x1ZkFiNCtBdDB6eUlJWGQrVk9BQkZKSXE4SXdBZ0JNQkZvaUFVTUFDZ2pNU2d1eDZCR1ZqUFRPL0hpTUNKSU1Kd3k1cFkraEtqMzNMZ3dOSzF3VGlBWXluRnM3VW1Qb2JSdjBYNnk4RFlOMnFqNC84cE9DN2VzL1N4ZXhQOXZra1pwdDNKSTVJZlhBcDRmN3NEUzZaT0pQbmxNWFlianhPblRLUnN3QUE4WGc4Qy90eWtET1I0SG5QbW5pQkJDY3ZRMk54c2FUa3ZXNzRDMTl4NEkzWnUzd2EvMzFvcEdtMTJPendTcmZlY1RpZE9QL3RzbkhQQmhVbktQeUNleE9XcWE2L0ZyWi83UENxcnFpVEZnTnpYRGJ5OW4rNVpCS0g3K3hKbEI4NVB5QXFRTUhnZlJmdHpRcXFzdkFyaUFLYmJJNmc1TmJtSUE4aHptcTRvVGxLbnVreE01dEIwai85SEYySmhFd0VRVkZiMVFKdUFTYlhWSk1NODU3cGxpN0I5eTVhQ2w0UEg0MFV3bUR0cjdHVXJWMlIxTDYxcmFNZ0xTODBwVTZmaHh0cytnejA3ZDFweTdObmZiemhNbWpJVko1NTBjc1p5VmRYVitOd1h2NFM1OCtmRDZjd2NhN1V2Q0h6akpicGZFWVFobTMwL2lTSHZDTk41SlZTc25SQ0pvYURSK2RYYksvVHIxcC8yY1FBNXpRVEhHM2t5MU1mLzR5UUlSMHJEVEtiRzE4REZ5Qmt3RGxKT0d2TWlxNEFEYmNERTZrcVNYd0Z3eHB5WjJMTnJaOEhMd1ZkVWhJR0IzUDNNVzFKU2lvYW1KdkhiSmM5anhzeFplU1B2cXVwcXpKMDN6M0xqbm4zQ0NYQm1VZFM2M0c1Y2VPbWxrdHJqZVI0WFhYWTV6ajcvZ3F6dDd1Z0F0clhUUFlzZ2RLY1BjYmRSSXIvb2grWGRCUWxyN2FjSWsra1RPQk9PSDRDYkRZRWZjM09TRTl1UGsxNVBkUnhBN2ViUHkrOUR4L2gvV2ZyVDZweTdXUkE4UlJZMTlBS2pCNVkwdGg0QVpqU09KL2xaaUxlMzdjS2RmM3RFZHIwaXR3dU1NZlQxOWhhMC9FcEtTOURmbDFzZm9iUE9PeDh1bHp2dE1aZkxoUW1USitmWHJkeGl5VXdBb0ttNUdYeW1ILzQ0RHJObXo0SFg1NVBWN3NJVFQ4U2xWMXlaMFFxME53aDg2Mlc2MXhHRUlmU0NySDd5alNqSXhadFFoc0o0NnJSUEo2U0pUSUNiRFdrdWFsSDlWYUsraTh2Y21odzlHeWZ6NVBPcEw5QlNzWEw4UHpjby9oK2hJOEhobHgwRmJEM2d4cXdtaXY5bkJWcDdlbkhGci82TWMzLzBLMVFXRnl0cXc4NXoyTHQ3VjBITHNiU3NMT2NLd05xNk9sUlVpVmplTW9hcXFpcGE4TGwrU2VONTFOVTNpRC9YWFM0c1c3RkNVZHN6WnMvR2xkZGNtOUVTOEszOVFDdFpJaENFTWZRZzd2NUg1QThEQUFRU0F5R1RHTWdxbU5EaHBUTGgvVkVvdkRpQXZIYkRzVTc4UDY4d1lOaWkwcTBlS1M3Tmk0cGZPYmNlY0dGV2N3UEowT1E4dFBvRG5QcURYeUpVWG8wSjlYWDR6OHZQazkxR01CS0IyK25FdmoxN0NscVdSYjRpREE3a1hyTnkvc1VYcDFVQWVieGVTMXJNR1VWblJ3ZTJidDZNelJzMjRNQytmUWdHZzdyMXRmREVFMFVUZDdqY2JwUlhWQ2h1ZS9MVXFiajQ4aXRFWXdJT2hJRC9mb3ZPTjBFWUFnUFFEY1UvcGhJbVJBQzVjeEtHNzZzSW5jbUQwR1dlMUFWV0FIRUFlYU5PQXN2V0FKZnVLeEcvYXBYeC81U1llaHExQ0UxMW9lYlR2STE4YVZYeG9OcDJTTUNNeG5xU28wbnBIZkxqOGwvK0NiOTk2d044OHRiYjBIN2tNSDU5NHlmZ1RzazJLb1gyM242VWw1V2hvNzBkakJXd2Z3UEhnZU00Q0VKdVRRTWFtNXBSVTFNNzV2dXE2aHBhK0NKOCtONjdlUFhGRjFCVldvTEcyaG9NOWZiZ3FjY2Z3eE9QUEl3OXU3UzNiSjArYzZhb0FuRDZ6Sm1xMjU4MVp3N09PUHVjdEVwQWdRRVByUWZDRkQyRUlJeDduK29HS0dKUEhqRkk1NU5Rd0JESURaajIrYnFOMzgzODRNZVlKNnVQQThpbFYyNWxuSUJSY1FEdDh0cFdGLytQRS9zZnhpazZjWnlDV1h1WUg5eklTU2FsRnFFMUFYVXZOLzRnanlLM2krUm9RclljYXNGVnYvNEw1cDUwTWk1ZHVBaUhEeDVFTVJOdzN2elppdG83MXRjUGIzRXhhbXgydEIwN2hycjZ3bFg4bGxkVW9LZTdHNVU1ZHJXOTZQTExjZCtmLzRSUWFEUUFWVU5USXkzK05Iend6anVJQkFQNHk1Ly9ERWVLQXZ6UW9VTjQ0TUVIOGVTNnRUanIvQXRRV2xhbVNaOTJod08xOWZVNHVIOS8wdmRPcHhNelpzM1dwSThUVHo0Wm5aMGQyUER4eDRoR0lzbTM5eWp3eUViZzVvVjAvZ25DRUdLSUt3R3I2SjA5TDJDSUp3UXBKMUVRTWhBUVZ3SVdrU2dJRGVHRzcwbkR4bUYrcmxoV3hlUFZaZDhIT1lCaktXTkEydmF5OVpFYUI1QkpITkdvQmFBQjhmK2tpRlB2bnQxa1Iwem9pUXIzaG80K29McUVubTVtNUtVTlczSHBMLytFTXkrN0F2TVdMZ0lBdlBQcUt2em1wazhvYm5QMzBUYjR5c294WWRKa0hEcXd2NkRsVzFWZGc4Nk8zS2RacmE2cHdiZ0pFNDcvdjgxbVEyVWx4ZjlMNWVDQi9XZzVkQkRmKzk3M3hpai9BR0RjdUhINHpyZS9qYnUrOEFVOC9jUS9jZVRRUWMzNlBtblpNamdjeVJaNnZNMkcrZ2J0UWllY2Y5SEZhR2hzSE9QNkhZZ0FQM3VUemo5QkdFb1VjU1VnV1FEbEIzNlFhemNoSDlxK0V6cmkwU1E4bkxvNGdQcjBtanFJK0NnMENteGtuZmgvSG1GUTgybHFjbmJON0VOUHY3cEtYN2grNWRVUHRRUE5WZFVrUjVQeDBOdnY0NjRIbnNCVk45MThYTW13ZC9jdXpLaXR4QW5qbXhTM3UvVm9HOG9ycTlBMHJobEhEaDBxYUJsWDE5U1lKaHZ5aFpkZUJyYzduaEhZNFhDZ3VLU0VMb0xFMjV3ZzRJMVZxMFNWZjRuTW5Uc1h2LzNOYjdEbWpUYzFVM0pQbVRZZGRrZXk4d0xQOHhrVGVNaC81bkc0OW9ZYlVad211VS83SUxDaGxkWUJRUmhLR0VBZmlTRnYzcFg3U1F5RVRQeWdKREw1b0NmUXN3OFYrZ3BQcWdWUDNzUUJUQTh2UzRvV2ovL0hxNDMvUnhDWkdGTDNjRHJVRGpSWFV2dy9NL0hRMisvako4KzlobXR1dVJYRnhhT0tvSFZyVnVOSG43aEVWZHRyOXgxRWJWMGRhbXBxMGQ3V1Z0QnlublBDQ1ZpODlDUlRqS1c0cEFTTGw1NEVtODBHanVkUnBERERjNzZ5WTl0V0xGeXdBSTJOMGx5anE2cXE4T3RmL3dwdnYvWWF1am83MWIrMDJHeVlNWE5XMG5kbDVkcjdremxkTHR4dzY2ZmhHbFlHajlBYkJQN25iVm9IQkdFNEFWQVNpWHpCRHlCQ1lpQmtLaFBJQ3BEUUNSY0x3RFltaGxjK3hBRk0zeGt2dlUxMThmOUVDekJPNVJ3NUdTZVg0djhST3FMeXdYU296WUZtY2pjMERjK3UyNGdmUGJNS1Y5MXdZNUlTNE1paFEyZ3M4V0Zta3pwbDdkNWo3YWlvcUFESDgvQjR2UmdhS3VBZkp6Z092SWt5N2E0NDR3eDRmVDVFSXhGNGZUNjZHQkxZdW5renJyNzZhbGwxeXNySzhJTWYvQUF2UC9jc1lqSDFFZUJQWHI3OHVKVW1nTFRKVzdTZ29ySVM1MTE0NFJqcndwZDJBVUZ5WVNPSTNMeG5CVWdNZVFGWkFSSUc3N01JWXV6K1kvUlBOeHVVWFZHeE9pbFIvOFZKSG1MVzQ1ekVFZkVqbXkvSjQxVXZYMFhIdFhBTTFzYS9XOVVrMU5janhhVTVFYURLL1JjQURyWTVNYTZxZ21ScEFyWWVic0ZYSG5nU1YzenF4akVXUUp2WGZvaXZYM1MydW5QZDBSVjNMUjIrOXpZMk4rUG9rY01rZUpOZ3M5bHc4ZVZYd08zeEpDbWFDcDJob1NHRWcwR01IejllZHQzSmt5Zmp3Z3N1d0h1cjFadlBWVlpWSlZsbVZsYnI5OFBKQ1FzV1lzclVhVWtLNmtBRStNY21XZzhFa1JQNlFOWmorVUNBemlPaFlNMVFGbWx6WXVaUVpoSnhDMXBvbUZuR2J6bWRwaWczRHFCK0poZG1qUCtueG5lZ1VOTmprOEpSR243MWk3ZWx5NFptVWdEbW5QNUFFRmY5K3E4NDc4cXI0RXV4L2dvRUF1aHVhOE5wczZlcjZ1T05yVHZRTUg3aThmOXZiR3JDa2NPa0FEUVRrNmRPeGRYWFhVK0NTR0RmbnQxWXVYS2w0dnBYWFhVVldsdGEwTnZUbzNvc3kwODdIWGFIQXphYkRXVmwrcWFVdlBUS0s1TVVqc0VvOE12VnRCNElJaWN3eEpPQ2tDSWdEMTY0U0FTRVRDaVNGKzM3ZFJxL045WEUxQXl5NFBRWkJDOVplcHd5U1RNRkowcXYrSDh1NXFjYkFxRVBHdnhvME4zUG9aemNEWFBPbC8vK09HYWZ1QVIxOVdOZGZIZHMyNHFyVDE0RVR1VU4rZW1QdDJEOGxNbkgvNytoc1FtdExVZEorQ2Fqb2FtSmhKQkEyOUdqbURkdm52SVhEcDdISFovL1BOYTgrYWJxc2N5YU94ZE9weE0ydXgyK0luMnpwOXNkRGx6enFSdmdTbkFGYnVrSERsTlNBb0xJRFFLQUhsQm1ZS3REVm9CRUR2WmJCSkVPSnd2QU5pWkZ1ZEZ4QU9Oa2Y3UnhNcjRlKzZVa0MwQnQ0djl4WXdzWUdQL1B6WWJBallpVHJOb0lyVjlFTmRBdGR3OHdsQmQ1U1o0NVpNMk8zZmpvY0N2bUwxcWM5dmpCSGR0eDNiSVRWZlVSaWNXd2NmOWhORFNPS3BkS3k4b3cwRS9haEVLQ0NRSjZlM3B3dE9VSUR1N2ZqOWFXRmd3Tm12dk45bWhMQzJiUG5xMnFqWVVMRjRJRFU1MFFoT2Q1TERweENTTGhNRnh1bCs1enI2MnZ4OUpseTQ1blB1NE5Bbi81a05ZeFFlU01DQ2d6Y0Q1QWlWMElPWkFiTUtFMVNYRUFoMlJYMURZT0lKZHRpRm1QUzRrRGFKYzFUb1dUTkVQOFAyMzh1bFZOUW4wOU02ZjFMbVQ4bWl4UlJLS0EwMjRuZWVhUXJ6endCTTY0OEpLMDFzYUNJR0NndHhmVEcrdFU5ZkhTK2kwWU4yblNHQ3RDaDlPSmNEZ01wOU5KSnlLUDJiVjlNM1pzV1l1KzNsNU1tbENPaGpvZmlud09ESFZIOE1INmZoeHJIMFIxYlMyYUo4ekIxQmt6WWJQWnpERnd4aENMeFRTSmlYanROZGZnNldlZnhlbm5uS3VxbmFXbm5JSjNWNzhOaDhPWWEyYkZHV2RpMjVhdDZPeG9CMlBBZmV1QUg1MU5hNW9nY3FvTWNBQWc1d2xydjBNWEQ1OUhncERDRUlBU0VvT2tmVHd6YVQyanh5WVJ0ekNJSVZ1cDJoZG1aRE9KWXpwTVVZNmV6cTZMYjdFSjQvKzUxUVFOSUVVWWtRbU5kTXNDbzRXV1MxN2VzQlhPMG5KVTE5U2tQZDdXMm9vVEpvNVQzYy92WDMwYnMwOWFQdWI3cXFwcWRIYTBKMWtHRXZuRis2dGZnUkE4akgvZmZ3NG1qaTlML3h4a3dNWXRiZmo3WTl2dzZIMnZZc2JzQlppM2VOVHlMRmYwOS9lanRsYWJiTHRMbHk3RkgvN3dCNFNDd1RGSmR1VGc4WGd3ZitFaXc1U2tITWZoazUvNkZPNzVZM3pzUFFGZzh6RmdiaDJ0YllMSTNjMEpjZVVSL1habVhRWUFVQWhzUXM2K2l4U0FoT2pMR2hRcmxUeXAraUlORlk1S0RlbkFjZkhOZ1lidzZhVW1SOEtaSjZxaU9yU0svd2N3bVNhZEJDSGphdGJBL1pjeGdPZHNKTThjOHY5V3ZZWDVKNTBzZXJ5OXZRMkx4cXRUemgxbzc4VEJybDdVTnphT09WWlJWWW51emk0NkVYbkttamRlUmxWeEYxNSs0aE9peXIrUlI5Mzh1Ylg0OVk5UHg5WjNiOFpwSjBieDJOLy9nRDA3dCtWMC9MMDlQV2hJRXhkVDBZc0h6K1A4ODgvSHp1M2JWYmQxOHZMbFNSbDY5YWFpc2hMTGxpK0gzVzZIUHdMODhRTmEyd1NSYzNwQWJvRld4ZytNQ2IxRkVHSUVFUSsvUkJBYTQySUI4R00wV09yakFLWXZtMTNGb0txQkRHVjVPWFdVMnllbHFjbkVmSnc1aVMzSmlmOFhCRGR5cHlBakswTHJseFlObFBKOVEwQzV6MDN5ekJIZGcwUFkyOTZGK29ZRzBUS0RmWDJZVmxldHFwK2ZQdjB5NXArMExPMnhxZE5ub0xLNmlrNUdIdkx4aDJ0UTZ1N0F3MysrQ0RhYjlJZVF4MjNIMTcrNEZPKytkQTM2MjlmaTFSZWVSQ1FjenNrY2hvWUdVVlZkclZsN1o1eHhCbmJ2M0tHNm5mS0tDcFNVbGhvcWkxTldyRVJwV1JrQTRPR045RkpCRURsSEFOQkxZckEwRkF1UWtBb0RaUU1tdElVYlhWeDZ4QUVVMVcrbDFZZXB6SkVob1RvUHBRT1dPRnd1U3dGRDR2L3BmWmVnK0grRkN6MkE4b0kxTzNhamVmTGtqR1ZpNFJDS1BjcVZ0UHZiT3ZERzl0MllOV2RPMnVPMWRYV29iMmlrazVGbkhOeTNGMjFIdHVDeHYxMnNPT0pHWFkwUHp6MTZCYTYvdkJwUFBISVArbnFOMytrR0EwRlVsSmRyMWw1ZFhSMmk0VEFDZ1lEMTNoTTVEcCs0N25xNFhHNE1ob0VQRHRNNko0aWNFMGJjSFppd0puNlFGU2RCK3kvTlgxaE1YTStrT2dxWEpvdUx5WjhDbC9tNFBORm1MczFyTXcyOXhhUnVZYmpVSkFBaFJSaVJhZEZxOUFBS1J3R0hqU0lnNTRyWHR1NUd3N2pNOGYxc0RpY0M0WWppUHI1dy8yTTQ5YXl6d1Jub3Jramtsc0hCQWF4Ky9WbjgrNEZMNFhTcWQvRy84OU1MOGRkZm5ZWm4vbmsvMnR2YWpOMWJoOE1vS2lyU3RNM1RUanNOZTNidHRPUzVyYTZwd2Z4Rmk4QVk4S1huNlpvbUNOTW9CWUlrQnN1K1V3K1NHQWlKK0VGdXdJUTRLdlEzbmxTOWtZYTZJTFBvMDNqTkpUdHM0bUNlK0grQWgrTC9FWHFnWVF3S2Z3and1a2dCbUN1MkhqbUs2cHJNQ1E2OEpTWFkyOTZwcVAxSDFueUlqZ2pENUtuVFNOZ0Z4SnN2UDRWZi9XZ0ZtaHFLTld2enRGUEg0Wm1ITDhYTHp6eUNEZ09WZ05GSVdKTU13SWtzV2JJRVJ3OWIxM3p1ekhQT2djZmp3ZG9qRElFSXJYZUNNQVY5SUVzeXF6SUVVdW9RMG1DSVp3RW5DSTJKdXdDYkxBNmdxQzVNbVhhU3o5cUlhcTJuSEJkaVRxT1dSbkVnREJzaUdzM0ZZcEQ3cjc3UUw1VjVRL2ZnRUh3K1g4WXlqVTNOZUhXTGZHdWx2Y2ZhOGIxL1BvdXpMN21VQkYxQTdOeTJHWlBIMlhEWmhkb3JmZWZPcXNZekQxK0dGNTkrQk4xZHhpU080VGp0SHd6VHBrMUQ2OUdqbGozSE5yc2RsMS85U2NRRWhoKzhRU2xJQ2NJVUNJZ25CU0dzZWU3SVpvT2dmUmpwQTNJb0p3NENuQ3lrdWJnNFEveWpNMVVmL1pLWE9sQk9RVCtpOGY4WUozRnFUTFZRZExmK003T1BQS0V2ZnUyYWl0R3YxVGtsRUFyRDdzaHNnVmxUVzR1OTdaMDQxdE1udWQzT2dVRmM4b3MvNHV6TExvZkg0eUZCRndqUlNBUWZ2dk1hL3U5L3p0U3RqN216cXZIb1h5L0FDLzkrR0g2LzM1Snk0bmtlZFhWMTZPMng3bTU5MHBRcG1EQnBNdjcwSVVPRTd1TUVZUTRpb0tRU1ZtVVErdnZKRWZtekQ2TzFZajd5SUE2Z1I1WjJXV3d3RXVNQXN2VEIvNVRFQVV5MlBSUXZMY2tGMk5yeC80YU1XY0JFWVJFQ0VOV3VPWnVOUkpwTG5IWTdZaEswc0l1V3I4UmQ5ejhtcWMzMnZuNmM4NVBmWXZGcFo2Q3hxWm1FWEVCOC9PRnFmT2JHT2FpdDl1bmF6OGtuTnVMbjMxK0c1Ly8xTUFUQm1uNVRDeGNzd0pGREJ5MTl2cSs0K21yWW5GNDhzSkZ1NUFSaEdnWVJUd3hDV0lzWU5QMkJuY2hqQkZETVQwSWNGWG9jZDU3SEFkUTJjalhIbWU1TXV4blpCeE02UUM4bmVVVmxTUkVHQjdLYkM4eWNQUnV0VWVDYmovNGJqSW5mWXJjY2FzRnBQL3dWNXEwNEhWTm56Q0FCRnhEQllCQzdkMnpDMSs0NDBaRCtQbkhwREZ4MlhpUFd2UEdpcnYwNG5TNE1EV2x2VVQ5ejVreDBkWFJhK3B6N2lvcXdZTWxTL1B3ZEYxMEFCUEgvMlR2citMaXE3SUYvM3h1TnV6WFNXTjNkdlFXcUZLa0JSWXY3c3JEOEZsMTBrVjFnRjFpa2xBS2xVTHg0VzZEVTNiMUprelR1UHNuNC9QNUlhVWtibVdSbWtwbmtmajhmUHNEa3ZYdnZPMWZlUGVlZGU0NDdVWTZJS2VlSkNOVk5JUFF4UVR2UzhBblNkclp6T2RIT3BtemRRelY5YldzU2dFZzBFakJSa2xvdGNnVVcxSDk4R2hEeC8xeDdYMmRENTRwNUxYYXBycVMwV2tkNllUSDVaZVZVMXVxcDFodXdXQ3g0YXpRb2djS0NBZ0lDQTVzdDUrSTVsL0xyVHo5eTBYUC80VC9YemFkWFROVFp2NWt0Vmw3NzZWZmVXYitWaXk2N2dvaklTQ0g0VHNhQjNWdTQ4NllCYURSdDV3MzI3S1BqR0RmakU5SlRUNUtRN0pwRU16WndpWmRoWW1JaWhZVUZIdC92bzhlTzQ2dU1FMnhJUDgyRUJERVBCQUszd0VKZFVwQWdJUXFQd2tTZFo1ZFdpRUpnaHo0V0lzUmdsMzV2YThQN1BGeE9Da3dvTVdGRzFUcHhTUktjZFJRNUowUUpDZHY1QXJVakVZamt0RTZxdTFiWjdEVU9TL0g4cDVBY0xOZittelcyR3RjUEVsZmZKd3h5N29lWnVpUEFUc1RQQ3lwcnhGa1ZaM0lnSTR1ZkR4emwxeU1uU0M4b1F1dmxSV0J3TU43K0FjZ3FGV3ExQm9WQ2djbFVpUndXU1dDUWZScUNKTXRNblRtTDArbnBMSHJySTN3Vk1yTUg5eVBFeDV0WGZ2cU5Mb2xKTExycDVtWmpDZ282b001aU5KSnkvQkRmTEx1K1RldVZaWWxQMzV2RnVKbXJpSWlLeHR2SCtVZVBOUm8xMWRYT2Q4c0lEZzVHVitYNXdib2tXV2JvdUdtOHRPTlRKaVFJOXhXQndHM1FVNWN0VklUaDlTeXFFUVpBZ1IwYnJ6UC9pQzIzbTIyS2FLbE55clYxdEFLdFRVZTFGTmcyamJGSklObWNXMllUdHlzYnY4ZEZDVURzTExOVkQzeCsvRDlIL0lLRjRVM1FHQzZ3SzN0cm9OWm9Fckoxa1BTQ0l0NzZaUk5mNzlwUFVFZ29zY25kNkQxeEt1UER3cHhlVjllRUJMb21KRkJSWHM2dVU2ZlFGZVl4YzlIVitBY0VpSTdvcEJ3L2NvQ3JyK3lKbDFiWjVuWEhSdnZ6ejhmSDhzLy9mc1djZVl0ZHNwc3ptODB1YVh0UWNEQzY2bXA4ZkgwOXV2KzdKaVN3OFNjMStWVVE2U2ZtZzBEZ05sUUFha0NFNmZRYzlOUjljRmNLVVFpYVFRY0VDakVJR3R5NnR0cUdwckhxcUZZRU9saFcwLzU3RFJiNXB4OGIrbnR6elRnL0VZaXRnYXVWampYYmNWenBWZXBsRmJua0JTNTYwVGg3ckdxZzFpUU1nSzFsYjlwcEh2bnNPM0lxcStrNWFEQlgzWEpibTNuZ0JRUUdNbkRJRU5FSkFvNGMzTVYvbnB6YmJ2VXZ2THdYSDM5eG5KUEhEdE85VjErNzdzbkx6YVZHVjAxQVlCQWhvYUZJamNRWThmYnhvY3hGMlhxVGtwSW9LaXowZUFNZ1FPOGhZM2g5NXhxZW1TSTh1Z1VDdDhGR1hUeEFjVlRRczZoR0dIWUV6Vk1qeG9uQStXaGRHR0N5TGV4clRaWHZ2TzhxVGd0TUtMV3l6QXV2ZGZrUllIZEZ4UDl6N1l5cWRWWGhJZ1pnUzhrc0t1R085ejhsdDdxV0VSTW5NeVpXWk5zVnRBOTV1VGtreHZrUUcrM2ZydTE0KzkvVEdIWHhKM1JON0laRzAzaFNpdXJxS243KzlqdUNBZ09JalkxbC84NmRaSnpPb0hmZnZnd2RPUXExV2wzdmVtOGZiN0pPNWJ1a3pkRmR1cENWbjk4aHhrRy9nWVA0K08xZmVYcXlzZjN6b2drRWduTVlxZnVBNnlORTRUSG9BSCtjbmJKUzBOR29QYU5DaVhIU3ZKNHY0Z0RhamNaV3k0V210QllJbzVFNGdJNzE0Wi9MYkQzS2M0MXF5U2hvSEZ0ejF6V2JBS1NsTlRhTUNpTXk1dFlYNEpnWW5IT2ZVQjdjRDczckZrR3IxU0xrYXljMm00Mlh2MS9IMjc5dVp1eTBpeG5admJzUWlxQmRTVG0yajc4czZkL3U3ZWdTNmNzRGR3em1pNS9YTVhIYXJJWjFLcDJPenovK21QdnZ1NDhSSTBhY1c5NzBlcjcrK210V3ZMZVVpMmJPSWlZdTd1emZmUDM4S0NrdGNVbWJJeUlpT0pHYTJpSEdnVnFqSVN3cWpzMm5qek11WHN3TGdjQ3RxS0l1cnB3NEN1d2htejNxdkx0OGhTZ0V6U0RHaWZ2aHFYRUF6NVFwWVVWdE0yQ1V0RTV0VXNzU2dkU1Y1dXhFSUhLVDVkQzYrSCtOWG1DVG5OQWo5dEZwdmY4RXJuL0J1QWlOR293dWlySFZrU2lxckdMYXM2L3h3NmtjcnJuMWRwS0Y4VS9RN2txS2pZeFRLVnc4T2RFdG1uUG5rc0dVRkdSUVhGVFU0TjkvL3U1YjdyajlqbnJHUHdDdFZzdWlSWXQ0OWRWWDJmVGJyNXc0ZHZUczMzeThmYWdvTDNkSmV5TWlJcWlxck9vd3d5RjV3QWplMlM4MEVZSEEvZFpxNm80Q0N6d0hrVk5KME03Nm1hRHpvbTFSM0M4SDdWeC90cE5KanRVa05YT2gzUEJOamoyQXZZMnlOZm1HZHF4U2pWVWtBQkc0QUJlR2xRejFWMUJXTGQ1Z1RYRWlKNTl4VDd4TVpMOUJUSjA1QzZWU1JJY1d0RDg1MmRrTTZoK09SdU1lYmlVS2hjUnJ6MDlrMjRhZkx2aGJXbW9LSVVGQmpCOC9ydEg3bzZLaWVQMzExem0wZHgvcHArbzg4eFJLSlhxOTNpWHRqWXlNcEtLOHJNT01oOFRrWk5hbmcwazRkUXNFN29kUkdBczhDak4xcDI4RWdxYW9GU0lRTklJRGRoM3QrZmFrVnBWbGEvSlh5WFhOUDNQL2hTWElMVyt1Wi9Tc0ZoSC9yNjBtUjZmYWhMZ3dUMGRZb0kzODhnb2g1MGJZbVpyT3pCZmZZTXJjeStuWnU3Y1FpTUJ0U0U4OXhEWHplcnBWbTZaT2lDZlkzOHpwdExSNnZ4L2F0NS9GaTV2UEV1enI2OHNMTC95VDM5ZjlRdm1aNUIrU0xHTzFPajlXYVZCUUVOVlY5VDBBcTZvcVNUMTVraFBIanBHWmtlR3lETVN1UUpabHVpYjI0TWVUNHNVcUVMZ2xsWUF3MEhzT0lxZWp3QjRkVGVUZUVuWUNKNk5wMEo3a0djSm95bzdubkhDWlp5SmQyeHdlUEsxTkFITGhJNTg5QWl4NTZLUVRlb1A3NFdLYmNreW9tYnl5Y2lIbkJ0aVptczZpL3k3ajBxdXVJYXBMRnlFUWdWdHhPdjBVRjA5T2NMdDJ2ZmI4SkxadlhudjIvL1cxdFZSV2xOUGJUZ042Y0hBd2YvdmJRNno1L2p1dzJmRDM5NmVva1dQRmptMGhwTFB2L1BLeU1yNVl1WksxMzMySDFhQkhJMHNVNWVhdy9PMjNTRGx4b3VXN0FhdVYzSnhzRHV6WnpaN3R2N056eTIvczI3MlQwK25wV0MydXN3RDBHRENVRHc1Nmk4a2hFTGlyWmlTK3Qzb090UWlEcmFEZDlUUkJhelo0THJxMmpkcXR0dW1SSFhHSmt5VDdIMUJxL3JWMVlabXRRK21hbnBGYVVLSzlDVURzTDFOdE15QzVNcU9xTU02SkY0c0xpQW5UazFWU0p1UjhIaWw1QlZ6MTMyVmN1dWhxZ29LRGhVQUVib1ZPcHlNb1FJV3ZqOXJ0MnRhM1Z4aDl1dnVSbG5xU3hPVHVaR1dlWnRpd1lTMHFZOUNnUVNRbkpYUDQwRUVDZzRMSXk4c2pJaUxDNlcyVkpZbXF5a3ErK3ZRVEhucm9JWVlNR1ZMdjc2V2xwVHp3d0FNb2xVb1NrcEthTGErNnVvb0R1emVSbVo3S3lDRlJUQnNWVGtTWUw1SUUrWVU2OWg3WXk2b1B2eVV1UHBuQkl5Ymg1ZTFjWTExMGJDenJ2Z2FMRlJRaU02RkE0SDRZcUR0YXFoV2k4SXlYTFhVWmdRV0NwdlMwUUNHR1RvZExzeFRYT1pYVlNqNHRha3lyRW9FNC9JRDJDMExaNlAxMlZtUDNCVGJKem5JZDcwR3RJNzdpd3JnbmFHeFl1amkrUkhTb2hWMkhDNFNzLzBSVnJaNjVMLytQYVhNdkl6Z2tSQWhFNEhaa3BwL2k0a2x4YnR1K1p4NFp3MlhYL1V4aWNuZnljM09aTm5seWk4dTQ0NDdidWVXV1cramRyeis1dWJrTUhEalE2ZTMwOGZYbHg5V3J1ZXV1dXk0dy9rR2ROK0xMTDcvTTdiZmZ6bFUzM0lpWGwxZWpaUjNldjRzakI3YnhqNytOWlA3Y2NjaHl3eTkycTlYR3lpK1A4dFJMU3hremFUYXhYWjNueFNsSkVsRXhYZG1lZFpReFhjVThFUWpja2twQUkvYitIb0V3QUFxYVEzOUdYeFB6V1hEQnBveFdtNWcwMUZDTGo0TU5zSE5nMmlTUWJIYTEyZTVIYXVCQytjSnJXdU56aDkzM05KOEF4UEZLTlZZUkNkU3BuU2FvKzFKc2RXMFZDVkdRWHBBdlpQMG5ydi9mQjNRYk5JVG9tRmdoRElGYmtwZWR3clNKOFc3YnZ0NDlRdW1aN0V2R3FWT1VscFNRbU5qeVRNV0JnWUZNbkRpUnROUlVjbk56WGRKT1AxOWZaQW5HaldzOE9VbElTQWlMRnk5bXgrWk5qV3ljYkd4WTl5MGFheXI3ZmwvTXdzdDdOMnI4QTVCbGlXdm05ZUgzYitkellPZlBwS1VjZCtvenhYWHZ6MmZIeFRGZ2djQnRzUUJWUWd3ZTAxY2lHWWlnS2RyQVdVUG8vWjBQalZYbk12bTVNaEZJL2NQSDlVdFFOdFVneVVOSHNjYlRvOFdLQUozdVJ4dThVQklqSWEyZ1VNajZEQ3MyYlNlcnhzQ2NFU09idmRaa01wR2RtVWx1ZGhiVnBTV1VsNVppTkJyUGZ2UlFxOVVFaFlRUUVCNUIxNFFFSXFORUhFR0JjOGpMeVdYRTBDbHUzY2JIL3pxU0crL2JTSG1GaVM2dGpLRzVjT0ZDdnZ6eVN6SXpNMTNTeG9DQUFFYU5HdFhzZFRObXpPRGpsU3NacGRlajBkWS91N2ZobCs4WTJsZm1YMC9QYmxIZFhTSjlXZnZGbFV5WS9TbGUzcjVFUmNjNFowM3YxbzN2TnNsd3NaZ25Bb0hib2dPOEFKVVFoZHRUalRpeUxXaGVYeFBmM1Z4bm43QzE0WDF1d3RtOEVoNzRVSTNaODVTT0R3WVhuQmMrVTJacjdGa3lOalEyUGEwdXdPSG5jUEo5QXZlZ0RRTEwrbmxEWmEySVlBdFFycXZoaWMrL1o4Rk5OemQ2amNGZzRNaWhnMlFjTzRwZXAyTk1qeVN1N2QyZDNqRWpTWW9NeDFlck9YdHRaYTJlazduNTdFL1BaUFdPTGZ5VW5VZTNYcjBaTkhJVVBqNCtRdUNDVm1FMm1kQ293VXVyZE90MkRoa1lpYitQaGFJaUl3cUZvbFZsQkFjSE0zTFVLTkl6TWx6U1JsbVc2ZHExK2JPeUNvV0NTeTYrbUJQSGp0Si8wT0N6disvZnZZMm9FRjJMalg5L0VCcml4VmNmem1INi9DK1pmKzN0cU5XT3gzVFVhcldnOWlhdnFwb29QekZmQkFLM3BRSUlGV0p3ZS9UVWVRSXFoQ2dFVGVockltS1E1K0pPUnNZelphb3dvc0NDcFlVTHo5a21TUkxZYlBZMTFPNTBHMzh1c3hWNzdwWTlSdVBZV3R6eTVoT0EwSW95MVRZOUhtMW1GcmdmVnVxT0FMY0JJZjRTcGRXNlRpL3lCei8raW9FalIrUGRRR0QrNHFJaTFxNytoay9mZlp0K1NndWYzbllOUi8vMUJPL2VjZzJMeGc1blFIeHNQZU1mZ0wrWGxxRko4U3laT3A1bHR5em1IMWZNNE5qK2ZmejNwUmM1blo0dXhyaWdWUlRrNXpPNGY0Ukh0UFgvN2h1R1NtbHlxSXpMTDd1TTNKd2NiRGJudjJQejh2TFE2KzA3M3pWdDJqU09Iemx5OXYrTENndEpPYmFiWmYrOXhLRTI5RWdPNFo1YkJyQjkweTlPZTY2SStPNXN6QkJmQUFVQ3Q4YUVPRHJvS1lqdjVJS21NQ0l5Umd1Y2p0cldrdmdEa3AxWHRUd1JyODFKZFN0YmVWL0xucjBORTRDb0hYbURkOFk5dXRCTG1xY05iY3E5dTlvNGtwWEx1RjdkT3EyNGoyWG5zU2tsbmF0dnZxamU3eVhGeFd6OTdSZXN1bW9lblR1ZDJjT1dJTnZwZ1p5YVY4Z0htN2J6L2Q1RDFGcXN4Q1VtTVdIbUxDSWlvd2dJREJSalhOQXFpZ3B5bURJaTNDUGFlc21VUkNUV1VsRlJRVUJBUUt2S0dEUm9FRm92TC9Mejg0bUtpbkpxKzNRNit6OThSRWRIWXpBWU1KbE1xRlFxTnF6OWhtWC91UWh2TDhmUDhOMjFaREJ2TDE5T1dXbXBVN0tPUjNkTjV1ZVQrMW5RcjFwTUdJSEFuYW1rN25pcDJCZTdOeldBOEtnV05FVXQ0Q3ZFMEt6K2J4UFBiQy91bWdpa3RjK3VyUDgzK3hPQVNIYisxcEsvdC9xQi9vU3FzeVlBRVJzVzEyNDIyb2crOFhxT1pYZHVBK0FqbjMzTHFFbVRrYzRZOS9TMXRXeFoveHNsMlZuOGM5RmNaZ3p1Wjk4eWE3UHgwNzdEUFB2TnoxUVl6WFFmTUlDTEZ5ekMxMWZzSEFYT29hdzRsNkVEZTN0RVcyVlo0cDViaDdEbTUrK1p2K0RxVnBZaE0zN2NlTkxUMDUxdUFEU2J6ZFRXMnYvK0h0Qy9QOW1abWRoc0Zub20rekJxV0xSVDJxRlV5anozNkZoZWVtczlVMmRjNFhCNXNYRnhyUDVGekJXQndPMnhVcGNRUkdTYWRXOU0xSGw1cVlVb0JFM29iY0lBNkRwN1F5YzhhS20yMXRZUFBlQUNPVFJYWkVOL3QrZWVjLzh0WVR0emRZTkhnRjNkcnphbmlxbytXbmYwNFpkY2RLMmdiV2pESWRVdndjU1JyRk9kVnRTbjhnczVsbGRFVXJmdUFKdzRkcFNWUzkvaGlwNWQyZmZDSTNZYi8zYWtwREh5MFJkNDZ1Y05ESnA2RVF0dldzTGdvY09FOFUvZ1ZNcEtpK25aelhPQ3pWeS9xQi9yMXY3Z1VCbDkrL1poejU0OVRtK2JVcW5FYkRiYmZmMkFBUVBJejh0bDk5YmZlT2FSTVU1dHk2VXp1bEdZbjBWMXRlUHBRZFVhRFdaSlRZWElYaWtRdUQ4NndDekU0Qkg5SkJDNGdkNG1zQk1QdDRWb0doeFV6bWxvZTlqZFpNYzYwd1huaFIwc1UvMUhwaFozU2dBaThGeXMxSDFwYkNNR2Q0TjluVGdtM1ROZi84U1FzZU13NlBYODlQV1g1QjNjeStZbi84cGRGMDlDSVRlL1hCbE1adTcvOEhPdWUyY2xRNmRkd3F4NUMwVEdYNEhMcUttcElTVFl5MlBhR3h6a1JaK2VnUnc2ZEtqVlpYVHIxbzFkdTNZNXZXMkJMVHlLMzZOSEQ5SlRUNUVRNTAzdkhzNk4zaS9MRXZmY1BKQWorM2M3cGJ6STZEajI1b3I1SWhCNEJKVkNCRzVQTFNMY3U2Qnh6QWhEZm1mRWhiWWZ0VTJQN01paUkwbk9iNmdETmpQWkdSSzF0ZUwyNWdJZnR1YVJWQmlSc1lvSklIRHVKcU1OQ2ZDQmFrTU5GbXZuRzhjNmc0RU54MUlJQ0F4ZzVkSjNXVHlvRitzZXVZOHV3ZllaQm9xcnFwbjQxTDg0cnJkeTFaS2JpWXFPRnVOWDRESXNaclBiWi85dGlGdXY3OE9hbjc5cTlmMEpDUWxrWm1aU1dscnExSGFGaElUWW5RUUVJRFkyRmtOdENmZmZQc2dsY3JwNlhoOU9IRHZvbkhVOU1wN2RlU294YVFRQ1Q4QkFtMzc0RmJRQ0s4TExTK0JXK3B1Z28yTkRhV3Q1UnREbXcrTkpMYjdKR1lsQTVCWmUzL0lLYlpMenkyd0V0YTJUSmdDUk91RXpkK0FYU005WWllTTVlWjFPMUo5dDI0UEpCcit0L29hdi8zSUx0MDJiY0RZT1lITVVWbFF5L29tWFNSbzZnakdUSmlQTHNoaTdBcGRTVmxaR2ZGeUF4N1Y3OHJpdUhEMXlHSU9oZGFuTlZTb1ZjWEZ4SEQ5KzNLbnRpb3VMYTlFUllMMWVqOFZzWXVxRWVKZklLU1RZaTU3SmdlVGw1RGhjVm5oRUJEdnl0R0xTQ0FTZWd2QUNkSDlFTm1DQm0rbHZ3bjdRZ1o4WjBMWm8wWEZRU0RiSitXWCs2WGE1TlUxdXRrbFNhNXBzYzdnVE5aNmVBRVFZNU1RTEJCamRSOC9XRTUwdkR1Qzd2MjRtUGppQXJVOC9SUCt1TWZZYkFrd21wai8vWHdaUG1FVFAzbjNFbUJXMENXV2xKWFJQRHZTNGRzdXl4S1V6RXRteVpWT3J5K2pXclJ2SGpoMXphcnNtVHB6SW9FSDJlL050MmJLWmVYTjdJc3V1ZTNFdXZLd2JwOU1jZjg3d3lFaU9Gb2pUQ1FLQngyQVNCZ1MzUncvaTBKZkFuZlEzUVRONHVKM2pna1N6clhvZVc4dEZKRFg5OTliWTdlUnpmMnliWG5GbEFoQzFweWNBRWJnWGJSei83dy9HOURXeTdjU2hUaWZ1SlpORzgrdGo5eFBrNDkyaSt4NWM4UlhSUFhyVHMzZHZNV1lGYlVaMVZTWEo4WjZaTG5MRzFIZ083dC9lNnZ2NzlPbmpkQS9BcmwyNzBxMmIvZG5QZCsvYXlCV3plN2hXVHRPU1NVODk0WEE1YXJXYUdyT01SU2lyQW9IblVJV0lNK2Z1Q0M5QVFXT0lPSUNlalJ2YVQ3UWVuQWprWEd2cjJpdTN1Z0dTQzNyR3dUSzFJZ0dJd0ptMGt6MTVjREljeUR6ZDZjUjk0K1N4cUpVdGk2bDJMRHVQOVNmU0dEWm1qQml2Z3JiZFc1bzhLd0hJbnhrNXJBdUhEaDlwOWYwOWUvYmsxS24yODFLMldxMGNPWEtVTVNOaVhGcFBlSmczR28yTjJsckhYd2IrQVFIa2lHT0ZBb0huWUVFWW1NUStYU0RHaDhDVGNHa2lFQWNIVkR2YXpzNjM3emtjS012eEJDQ1NVL3BPZ1FVRkpqSHcyM09DZERUMDdWT3RTZ21oL2hheVMwcEZIelRERTE5OHo4aEprKzJPRmZnSEZlWGxwS1dta25yeUpHV2xRczZDbG1NeTZBZ044ZmJJdG1zMVNnTDlsWlNWbGJYcS9tN2R1bEZXVnRhaXBCM09KRFUxbGY1OXdsRW9YUDhpbXp3MmpxelRHUTZYNHhjVVJrYVptRGNDZ1VkUmpmQUNkR2NNMUJscUJRSTMwdU9FUGFCakltTkIxWXFqZ1ZJenY3b21FVWh6eitLMGtkRytibmNpQVlpZ0k3MDRwZ3cyOHR1aDQ2SVBtcUN5VnMvQnJGemlFeFB0MnlmcTllell2Sm1QL3ZjbSs5ZjloSDlSTmtHbGVleGQ4d01yM242TFV5a3BRcWdDdTZtdHFTYk1RdzJBQUJQSFJyTi8vLzVXM2F0U3FlamV2VHVabVpudDB2YWpSdzh4ZmxSRW05UTFlVndNaFhrWkRwZmpIUmhPZXJsSVRpUVFlQlJXNm95QUF2ZEZlR2tLR3Qyb0NSRUkrNE56Mjk0eWUxTjcyc2Fhdms3cDlEYit1UnliWkdlNVRrZ0E0dWxtZm1ISWN5OXMxSDFaYkNlbURUSHduOC8zY3UzRTBhSXZHdUhYUTBlSjcyNWZETENEZS9ld2Irc1dicGs2amsrZWV4aGZyYWJlM3pPTFNwai8ybEpxZE5YMEd6aElDRmZRL0w2eXBvYlFFQytQYmYvRU1kRjg4TVV1SmsyYTFLcjcrL2Z2VDFaV0Z0MjdkMi96dGg4N3VvL0w3NDFyazdwR0RPMUM0VC8zT0Z4T1lIQXdKd3BWN2Z0aUVRZ0VMVWNIK09DRU0xTUNsMUFEK0FreENCckFSSjJIcUVLSXdtMlE4R2l2YWpWNmRBUTQrRHcyN0RMODJDU1FiTTZWMjVseTVJWitiKzQrWjl6amJGUld2WHNPY29Gbm9tL2ZCV3BvZDloOUtoMnJUWnc5YVl4Tko5S0lpbzF0dWh0cmEvbDY1Y2NvQ25MWStkei84ZURzaXk0dy9nSEVoWVd3N3BGNzJiTjVJd2FEVU5BRnpWTmRYVXRvc09kNkFJNGRHY09oUXdkYmZmL01tVE9KajQ5dmw3YWZPcFhHNFA2UmJWSlhWSVF2MVZXT3V3RDVCd1NRVWFrU0UwY2c4RFJzMUJrQkJlNkpDWkhzUWRDMFBpZndUTnpRanFKdUEzdFRXOWppNUxvZk8wSUdZREhEQlIzbmhhR1FZWEEzMkhNcVEvUkZJNlFXRkJFVUhOTG8zMHVLaS9sazJWTHVtakNjVCs2NXFkbnN3bjVlV21ZTzdzL3A5RFFoWEVIek9vZkpoRWJqdVorVmZYM1VxRlZXcXF0Ylo5eUtqNDhuS1NtcFhlU096ZHltc3U4YUcwQkZlYmxEWlhoNWVWT2tFMThGQlFLUFJFZmRjV0NCZXlLT0FRdmNWSjhUZEN3YXRqZDVYaVpndVZVVlN5NDRMK3hnbVdmUFpJc013SjN2ZVRyb0MyUFdTQjAvN3QwbitxSVJpaXVyOGZieGFmQnZ1ZG5ackY2NWdoVjNYTWNOTFRoRzNhdExCSlVWSWxXbm9IbmFJZ0dGcXhrNU5JcWpSNDk2Vkpzek16UHAyUzJrVGV2czN5ZVU0cUlpaDhydzl2YW1XSGdSQ1FTZWlmQUNkRzlFckRlQkcrdHp3aTdRQVo3blRKa3Ftd0dIVEhXUzVQeUd0aUlUc0VNUkxSelBBT3ljUGxOaVJtNXRHaWlSQUVUZ3BpK002Y090L0xodnQraUx4dFlmbXcwYU9DS2RrNTNGajE5OHpyY1Azc0dvN2kzelVDcXVya0dyMVFyaENwejF2blZyeGd5UDRPU0pReDdWNXV6c2JMb24rN2RwbmYxNkJWTlpYdXhRR1Zvdkw2b013b1ZJSVBCWWhCZWcreUtPQVFzYXcwRjdqYUNwalhEbmE3dUUxWW1aZ1AvODk3Yk5CQ3c3UnpydDYzWlhaNDBWQ0p5RTBUMDJlY0YrRUI1azVFUk92dWlUQmdqMDhhYTJ0djVuMzVMaVl0Wjg5U1hmLysxTytzWkZ0N2pNN1NucFJFUkZDZUVLbXNYV0FlSnpEaDhjeGJHakJ6MnF6UVg1V1NURXRXM0U5MjZKUVZSWGxqaGNqdFVtdnRvSkJKNjc2Q084QU4wWjRRVW9hR3plQ2pPQndJbW9iUzN4RW5MUFRNQ3lVOXQyZmdaZ3UyZW1ZOCt0OXZSVlgrZ0U3b1VidVl2UG4xRERsOXQzaUQ1cGdOalE0SHB4dWFxcnFsajl5VXBXM0hWRHE0eC9Pb09CazNrRmhJV0ZDZUVLbWwrMk80QUxZTGVrWUhKeWNqeXF6WVVGT2NURnRLMEhZR0o4SUZVVnBVNFlOQ0tOcUVEZzBYUXdMOEF0S1RENzN3cXVlMGZCOFR3UGZ4aGhBQlI0Z0Y0bndPUHRIaGZFQVd6Vjg5aHAvL3F6UGMySjlqcTVKZTEzSk91SVN4T0FpQXpBQW1maVJsK0s1bzR4ODgwdVlRQnNpSDdSa1JRWEZRSmdOcHY1NXBPVi9QdWFLeGpkSTdsVjViMy8rMWFTZXZmcEdHYzdCUUk3aVk4TEpDL1BjelMvMHJMaU5qY0Fkb24wbzhvSm1ZQ3RZbU1nRUhnMk5qcE13b20zMWt2Y3RWek5uS1J3QmdhR2NzVnJLcjdaNjhGcmxCRmFHdzFLSVBRNmdadmlNWm1BblpzSXhOV1pnR1dwQTJ4SVhab0JXQVRHN0h5NGtUMDV4Qjlpd293Y3lNZ1MvWEllbzdvblVwUmRKNWQxMzYzbTZsR0RtRHQ4WUt2S3FqV2ErTTlQNnhrMGZJUVFyTUF1NUE3aXpEVnFXQmpIamg3eG1QWVdGYlc5QVZDbGtyRmFIUTh3SlY2L0FrRUhRSWZIeHhSYmR3VGUra1hGczFNaVNReFMwejlTeS9OVEkzbDRsWUtEbnJ6ZEZGNkFBamZYNjRSOXdQT2ZSOVVCQnRSWkZjYlduajNqZ01lTnhKL09Zb3ZkdGNCUnJOQ0sySjR1NWJxTHExbXg4WGZSTitjeE1ENk8vTnhjOXUvZVJaaGs0OUhMWnJTNnJPZS8rWm5rdnYzdzl2WVdnaFhZaGEyREJKVWVNU1NTbEpURG5yT1AxeHZ3OTlPMGViMUtwZHh4T2wwZ0VEaTJUL1JnUTFPTkVlNVlydUJ2WThQUUtNOHBUajVxbWZ0R2huSERVZ1ZXVDEzcWhBRlEwQkJtaEhlb3dISE9MSmRxbThFeGs1TXJNZ0hicTd1YytiZnNXS09iRjFMOW41eWZBVmpHak56YTFFOGlBN0RnZk56UVRYek9LQ3MvNzkrUDBTeFNuTlZUeUJVeUErUGoyTDl0S3gvY2VYMnJZN0lkejhuamsyMjdHVDVtckJDcW9OTXhzRjhFcVNrblBLYTljanU5KzBLQ3ZLaXBGZHFsUUNBQXFqMjM2Zi82U1daU2doL2hQc29ML3RZdFJFMkVWc3NxVDQwOFkwUmtmQlUwalBBQ2RBMmROQk93MGsweUFaKzdybVVQSTdlMm1UWTM2UkcxcDJjQUZvWTg5OElOaDVOR0JaY01zL0R0cnYyaWY4N2owY3N2NGFzSGJpUEEyNnQxK3dHVGlRV3ZMV1hxN0V0UktwVkNvQUs3NlNqT1lORlJmaFFYRjN0UWk5c25BbjlvaUpiYW1ob3g4QVVDUVowM2tRY2FGQXhtK0dDenhLVTlHdytqc0tCZkFQOWVvL0RRRnpQQzBDTm9aTU12Uk9CV2VIb2lFRnV0V3p5c3JaVjF5eTdwd2M2ZUFWZ1k5VHdYTjdVbjN6Nm5obmZXL1NUNjV6d0d4Y2ZSdjJ0TXErKy8rWjBWeFBic1RYUnNyQkNtb0dVdjNRN2taUkFWNGV0QlJzRDJFWHhvc0xjVERJRENOVVVnNkREb1BLL0pYKytCWVYyODBTb2JWMVJpL0ZWZ1ZuQXMxMFA3UlJoNkJCNmszd25zd0IwVGdiUlhKbUFuQ1VXbTlTZDY2LzhtdFU5L0thMWlSZ3M2L3NhaFp5eWdLT05ZZHA3b0l5Zng0cmRyT0ZtdVkrVFljVUlZZ2s3TjRBR2hwS2FtdXYvKzNXQkFxMmtmVDEwL1h5VW1rOG5CRFpkQUlPZ3dHQUdUWnpWNStVWUZreEo4bTcxdWFxSS83Mjd3MEJWTEdBQUZEVzRnaEFnRXprUFZCdllucVprZkhURUx5aTI5b1RYWVhDZ0tqU3RudE1pSTA3bXdBRzRjWnU4dlYrcDQ3WWZ2UkQ4NWdRODNidWVEclh1WWZ0bmxEaVVoRW5SZU9wSUg0TUMrSWFTbkhYZjdkdXAwT3Z6YUlRRUlnSStQQ3FQUjRPQ1lzWXFKSXhCMEpEeklDN0RXQ0dsRkVrbkI2bWF2SFIzbnhZOEhQSFJ2Wk1IdGt2a0ozQUFySG1ld0YzWUM5MzBlVllQMkorZFVhR3NEa2JULzV4MEhsVy9sSHpFQUpURkJCUTdpNWwrSFpvMjBzU3Z0T0VVVlZhS3ZIT0RyWGZ0NStwczFYSDcxWXBRcWxSQ0lvTlVMY1VjeEFnN3NGMEY2bXZzbkF0SHBkQVQ0dDQ4Qk1EUklnOUhnbUZZcFMrSUlzRURRb2FpbHZjS1N0cGpmajBPL2NQdldUMitWVEtCV3lhbENEKzBYNFFVbzhFQTl6NE8zdzUzdVdWVTJCNzh5dExQemlRd3RzRFE2cmJHU1U4YU9CS2hhKzVsSEdORUVIdlppa0NXNGM0NkIvL3owcytpclZ2TFJ4dTM4MzJmZk1lL2E2OUJvdFVJZ2dsYmo3YTJsckx4alpJWHQwUzJZMDVsWmJ0L09PZ09ndXQzcXQxcGJyK25yOVhyOHRXTGpJUkIwT0R6RUMvRFhJekw5STd6dHZuNVFoRGRyRG52b21pVU1nQUlQMVBNRTdVQXJsemdGSnVSV2ZQMlJuTm1JQzRxeHJ4d2JyZlFBdExYaTZTVDc4eGpiM1E2bHArZDdGN3FBZURHMGtCc3VNYkY2MXpiS2RTSWJaVXQ1ZnZYUC9QT245Y3k3OW5xOGZYeUVRQVFPNGVYdFJWbDV4OUF5dEJvbFpwTVJtNXU3Tk9wME9nTDgyc2NBcUZJNWRtQ2lScWNqeEZ2TUc0R2d3K0VoMjdHdEtSSzl3K3ozb080Zm9lWDNveDRhQjlDSXgzaG1Db1NlMTJueCtFekFCcWMvck5TS3BCcXQyYm5ManZXSTFLNERSV1V6aU1FczZGUXZCbzBLYnB0bDRML0NDOUQrYmpXWnVmYU41WHg3TEkzNTE5MGdQUDhFVGtHcjlhSzB2T080R2NSRysxTlk2TjdudlhRNkhVR0I3WE5zMzhkYmhjWFVlby9QNnFvcXV2aUplU01RZERpc3VMM0htYzBHUmRVUTdLMncrNTdrRURVSHN6MjRYNFFYb01BRDlUeEJJN2loZlVWNS9pbFV5VjJGY3VGMXN0UHJ0OW5iR01jOURWUmlKbnYweEhHN0RaelpNNXA2Nnl3VG4yL2JURW1WVHZSYk01ektMMlQwWXk5UTRSdkl6TXV2UktGUUNLRUluSUpHMjNFOEFBRjZkZzhrSzh1OWp3RlhWMWNUR05DT2NUc2RlSTlXVlZZUzd5OGlrQXNFSFJJMzM0NmRMb0VJbjVidGYyUUp2QlF5cFo2NjFSUXFvc0NEZFQxaEwzQi9WRTc1eW1DblBjd21PYldQNU5hT0Jhbk54OCtGSlNxdElnT3dvUE50Rkx3MDhKY3JqTHp3eldyUmI0MnRrelliYjY3ZHdDVXZ2TUd3YVpjd2JQUVlrZTFYNEZUVW1vNWxBT3pkUFlETTAybHUzY2FhbXNwMlN3Sml0dGlRNU5aL002MnVMQ2MrUUtTbUZBZzZKRWIzTml3Y3pZV1lWc1JQVFF4V2N5RFRRL3RFZUFBS1BGemZFemdCVjJZQ3RocGNYbUZyN0czMnRFQjJzV3hjR3FGUDB4bG5zYkJodUc3ejVrSGNPTjNJK3NPN3lTd3FFWDEzSG52VFRqUHlzUmY1L0ZnNmkyNjZtWmk0T0NFVWdkT1JsZDRkeXdPd1d3aTVPZWx1M2NiYW1pcjgvZHJIQUZoZGJVU1dXMSszcnF5QXhDQ1JCVmdnNkxDNGNTekE0N2tTMGExWU84TzkxWnoyMUcybUJlSHRKZkI0ZmM5ajZJVDJDVmVlUkxXNXVLdmFON3FyQXg0NUVxRDhJd2FnTUlvSkhNWERiTWxLQlR4MVF3MFBmL3l4NkxzekhNdk80N0ovdjgxMVN6OWg2TFNMbVRKakptcU5SZ2hHNEJMVWFpK0tTanFPQVRDaGF5RDUrYm51clYvWFZMZWJCNkNqbEJVWGtod2k1bzFBMEdGeDQ2VHdhWVV5RWI3S2xyOFhndFRzVHZQZzBDbkNDMURnNGZxZXdBMDVZM2RTMll5T21hRGE4V1NhYkd2elJrcDIvR0lmcXRhYThTWDNHVHdDTjhFRHZ3aGRPdHBLcFNHRGpVZFBkT3F1MjUrUnlaeVgzbVRCbXg4UTJMTXZDMjY0aWFndTBXSk1DMXlLZjBBQWFhY3JPOHp6UkVmNVVWaFk3Tlp0ckttcGJqY1BRRWVwcnFvaTJsL01HNEdndytMR3lVQXlTeURjcCtXR3ZGNWhhbjQ5NnNGOUlvdzlnZzZnNzNWb1BOZ21vOENFMUlwMDQ1SXJCV0dudlU3WkZrS1VYSkJWdUM3emlqaE9JM0FDTnM5OUlieDJaelVMbi9tQXJjOCtqYXFUSmJqWW41SEovMzM2TFRtVk9rWk1uTVR3aEFReGxnVnRocCsvUDBkUFZuV1k1MUdwWkt4VzkwNVNVVlZWU1dCQTEzYXB1NnpTaUZxamJ0VzlacE1KYjZYWXJ3Z0VIWjVhUU90K3pjb3FnL0JXZUFCNnEyUjgxUXBPNWx2b0h1bUIvU0VNZ0lMek1WRm5ySmVGS0FTT283WVowRXRlZGw0dFlZL3RTa0xDZHY1MVRqYVV5ZzAzcm5IYWJRdDdYck5VTmpkYzFkM1ZxMDk0R3piL012QlEzYXhYSE13ZVZjMUxxNy9yTk4yMVB5T1Q2Zjk4blJ2Zi81eTRvU09aZjhPTmRCWEdQMEViNCtmdlQyNStWWWQ2cGdCL0RkWFYxVzdidnZLeUNrS0R2ZHVsN29wS0kycDE2N3dQaXdvTDZSVWg1b3hBME9IUm56RXV1Qm0xUnRBb1dxY01URXZ3NTUzMUhtb3RzU0k4dmdRWElzYUVaOW9OM0xCZHl2TUhVenUxMGRaQzRTbWQyZ3MyeWM0SGQ5emFvaEtmZFFUaVJRREFZOWZvR1hIblJxNFlNWkllMFpFZHRwdis4UGdycURVd1lzSWt4c1RHaXJFcmFEY1VDZ1VtYzhmeTZvcVBDeUEvUDUvazVHUzNiRjlGWlJVaHdWN3RVbmRscFJHTlQrc01nQVVGK1l5TUZIc1dnYUJUVUF2NHVGZVRiQTRZSlNja2VIUDNqMlU4ZWlrRWVudGdmeGlBODV5M2JUYlltd3JyZHNsc095SnhLZzhzNWpydFZBSzBHdWpURlNZT3RqSnpwSTJvWURHc081emVweFZpRURpT0NqMFE0T2dLalYwR05Kc0Uwdmw2aDMxZWhlZmorQkZneWE2Zm5GNkp3dXBDcTQzd21PdDhMd0lQUnFPQ04rN1JjZlAvM3VLM0p4OUhxZWhZZnUwbmN2TDU2OGRma1ZsWnplakpVNFhoVCtBMlNKSUNnOEdDUnRNeGp0OTNqZkdsc0xEUWJRMkFzdHgrQnRlS0tpTmh3YTB6QUpibG5XWm9UNU9ZTUFKQlo4RE5ESUJtS3lqazFpczJTbGxpZXJjQW5sNWR6cjhXV1QydlB3eUFYOTEvRmxmQTYxL0xmUEtiUkp5Zml2NWhQc3lKMWhEVFM0bnlUektxTmRuSUtEZXlmWk9lMXovVEVScGk1VzlYV1pnMlJBeHZvZmNKUEcrempzdE8raW10SmxDNHRzSUdTM093Q3RtZVN1MzVyU0ZjdVZWWGRjYlpLd3lUNGtYUUNHUDYycGc0cUpUbnYvNm13M1JMZGtrcGk5OVl6dHpYbGhMZWZ6RHpycnVCYUdIOEU3Z1IvZ0YrWk9kMm5FUWdVUkZheWtwTDNMSnROcHZOTVRjV0I2bXNNcUpXdHk0R1lHSE9hWWJHaVBraUVIUUtUSURaZlpwVHJRY2Z0V01maG1kMjgyUE5RUVVIc3p4emoxOVpBL2UvTGpQNkRpVmxhWUc4UEtVTEQ0K0pZRVozWCtJRFZmV01md0JlS29sZVlSb1c5UXZnWHhkMVlYNUNPTTh0OVdMQ3ZUTEhzOFFRRjNxZlFOZ3A2bkRsaVZTYkEySnZyaXZrZHVzckI3TUtxekIxMnNFbUVDK0Nobmo2ZWoxckRteGl5L0ZVajM2T2NsME45eTcvak1uUC9nZHJkRmV1WG5JTENVbEpZcHdLM0E0ZnZ3Q3ljenRPSE1DSWNCOHFLdHd6RTNCbFpTV2hJZTEzL3F5NHBBWnZuNWE3OVZndEZreUdXdHJwNUxKQUlHZ1BhanZXNHloa3VHTllLTmU5bzZEV3cvYk1LN2RJRExsWmdiVW9rTmVuUnpPbnB4L2VxcFlaUkpPQzFUdzZMcHdyRThLNTlQK1V2UEtGVUQ2RjNpZm8xSnhaQWhRNGVMcERhcCsxUkc0WGFUbWhGS1hOMko1TmNBY3hDSnlCRGVnZ0o3TlVTdmprRVIxM3Z2Y09SUldlWjVTd1dLMjh2dVozaHY3OWViSlUzbHh6NiszMDZ0TzMzUlpIZ2FBNXZIMkNPSjFWMFdHZUp6elUyMjBOZ09YbDVlMldBQVNnV21kcWxRZGdmbjRlQTd1SU5Vd2c2RlRVZHJ4SDZoR3FablMwUDB1V2VVYVltU285WFBGZm1YZC8xZkxDbEM3TTZlR0hveEZ5ZW9kcmVPV2lMdno4dXhmWFBDdGpOSXVoN3BGWWNNdGtQWjBXRDdiTnFHeEdKemEvN1FSaDMxSm9yd0l1dGMyalNqakI0aW9RUUlmN0NwVFVCWjY1b1lyclh2OHZGcXZudk4zV0h6N080SWVmNWF1VG1TeGNjZ3VEaDQ5QWxtVXhQZ1Z1alY5QUtNZFR5anJNODBSRytMcnRFZURLeWtyQ1F0c3ZhcmZWMnJxZ0pxZlRUbkZ4ZksyWUxBSkJaek13ZEVBMTVmTGUvdVNYYUhscXRYdnZ6MDdtdytpbkZDUjZCL0hvK0hBQ3RNNXJyMFlwOGREb01EUlZmbHo2aURBQ2Vpd2lMNWZBQ1VoWWtiRzA0cjVXVldibmRjMWZLTHRlTUpMVFJhRndSNnVOU0pudG1YVEVEZHBZQzhONzUvUGdoeXZjdnEyWlJTWE1mT0YxL3ZyRlQweSs3RW9tWHpJZHJWYWs1aEo0QnNFaElSdytYdHBobmljc3hKdXlNdmYwYUN3dExTVThWTk11ZFJzTUZwUktWYXZ1elUwN3hwUkVpNWdzQWtGbnc0VjJmNnV0enNQTkh2eTlvTnJvdkEvQ0Q0MEo1WWM5S2w3L3hUMFZqRFdISkdhOHJPRDJvZUZjMHMzWFpmVmMxVCtRV0tVL1Z6NGhZN09KNGU1eGlHUEFubWsvY01OMnFWcDBLbFd5OHlyWFBtaUxESUEyTitsc2xVM01Xb0Y0QVRURnN6ZnF5U3JieDlKZk43aGwrOHdXS3krc1hzT1VaMThqck84Z0xydjZHa0pDUThWNEZIZ1VJU0VocEdXVWQ1am5DUXpRVUZWZDdaWnRxNmdvSXpLOGZRTHBGWmZXNE8zVDh1UEhWcXVWNnZJeWtrUEVYQkVJT2gxNjF4V2RYZ1J4ZjVHWS9XOEZTemRJcEJZMm9laEpPTlZBcFpRbG5wZ1l3UWNiMVB6emUvZnlCSHgxamNRREh5dDVibW9VUFVMVkxxOXZRWjhBTkxVKy9PVk5jV0xGNHhBSENRVk80Z0xIdEhZeVVyWmttVmUycnNVTlhHZVQ3THpkOGJlUVVwanRCZUlGMFBRTWxlRGp2K3VZK3VBM2hQc0hNR2ZZUUxkcDI4N1VkRzUrNTJQQzRoTzQ2cGJiVUtsVVlod0tQUE9scjFTaXErazQ1My9VYWdWbXMzcytUM2xaSVVONytiUkwzVms1bGZqNitiZjR2dHpzYkliR0NqZDhnYUJUOHNjeFlCZHNjWkxDWWN1ak5tNTczOGJOeTIyb0ZSTFJnVExkSW1Ca3NvM0I4VllHeEVMOG1lK3FWaWQ3Y0dpVUVrOU5qdUQ1VFVWa2xScjR6elZXaCtQck9ZTEJERGN2azhrcjB2TGlSYUZvbEcyMzd0NHlKSmpIMWh2NWVyT1J5OFlLVjBDaC93azZHeXFuMktWczJHVklzMGtnbmIvT1NOaG5YenQzbmRJeEs0TmRQemxxeXJqZ0Y2WFZoUVpBNGZMYXVlakF0bVJmTC9qdVdSMFhQZlFod1g0K2pPM1pyVjNiVTFtcjU4RVZYN0l4SllPcHN5OGxJakpTakQrQnh4TVE2RTlXVGlXeDBmNXUwNmJzM0NvK1hYMlVReW1GRE9nWndjWGpFK25UMDE0UFcvZU1IVnBhVWtoTWwvQjJxZnQwVmlVK2ZrRXR2eTh0aGFzU2E4UWtFUWc2SzNwY1lnQUU2TjBGTmo1aVpYY0d2TFpHWmtzS2xGYXEySFpFd2RFMG1SZXJqUlRxekFUN1FLMFJQanRjU1l5L2lyaEFKVkcrS29jTmRtcUZ4R01Ud25sM1R5bFRYdER4MVQxV2d0dmhHMDFXS2N4OVZjSHdLSC8rTnM3ZklYV3B4bVJsZTFZdHgwc2d0ZFNFd1NJaFNSS1NCREpXNGdOVjlBMkZNVjI5em1ZU2xpVjRjSFFZRC80dmp4RzlMSFFSSHQ5Qy8rdk0yR3VMNmtEdFVsaU5vSEJ0aFEyVzVrQVZ5dVlxcytlM2huQmwzd3NQUUlIVDZPQmZnTUlDNEp1bnFwbis5Ly94enExM016dzVvVjNhc2ZiQVVlNSsvMVA2REJ2T1ZVdHVSaEtaZlFVZGhPRGdNRkxUeXR6Q0FGaFpaZUQydi8vTWhsMlpSSTdYNHBlbzRtaEdQbTk5dHdldFhzVXJqMDlseXJqNHBqY1piam8xQ3dzTGlJNUthcGU2TXpJcjhQWnB1VmFYZStvSUY4MFg4ZjhFZ2s1TExlRG4yaXFHeHNOSHQxclFtK0NYSXhhKzNhdmc5K01RNXFQa29rUi80Z1BWcUJVU09aVW1qaFlaV0p0YVRWNlZHWXZWUnJpdmtnaGZKVkcrU2lMOTZ2Nko4bFhpcDdIUE9paExjT3ZRWUg0NXBXSFlrMlc4djhUQytCNXRKOTZmRDBuYy9aSE1yVU5DR1JUVit2alJKNHFOZkhOQ1QwYUZqYm5EQjNQTDJINE1UZXFLbjllNU1zMFdLL3N5TWxtNzd3QVAvYktUM3FFU1YvZnpKa0NySUZDcllISGZZRzc5VnduZlBTZlN5M29FWnV4MnVoSUlta0xsUW1PQ3ZVTzBJVnRnVS9aQnBVY0wyaE1uclZobzNHL3g3K0IwallCdm42N20wc2YreXh0TDdtQjBqK1EycTd0YWIrQytEejVqeCtsYzVseTltSURBUURIdUJCMEtiNzlRVHFTV01tbGMxM1p0eDRuVUVpNjVaaFVSRjJzWSswTDQyWGROUkg4dnVBUjBCV1p1ZWU0SHh2ZnV5dElYWjZKUVNJMHFkTzVJU1VrcFVSRys3VkwzcVl4Sy9BTmF0bTdXMXRhQ29acllBREZIQklKT2krWE1Yck1OdEMydENtWU5oRmtENno0Nm5NaTNzUGF3a2ZWSFpYNC9iaU1oU0UzZmNBMHplL2pTUFVTTnYwWkJjWTJGdkNvVEJkVVdNc3BOYk0rcUpiL2FUS1hCZ2txV0NQRldFT2FqSk54SGNmYS9RNzBWaFBzcTBmenBIVEkxeVljZW9XcnVXRjdFdEg0V25wOW5SZXZDNkM1bUt6ejhtY3o2dzBxZW5SeE9pTGVpZFd0N3FaSDM5OWZpNVIzSW80c1dNYlpuNCt1OFVpRXpMQ21lWVVueC9OOFZjMWkxWlFjUGY3NmF5M3FxdVNqSm03RmR2Vm03dnBvZmR0UXljNFFZK2g2QkNWQUxNYmlOZmNUbW1XMVdlbUJLYWVuRXNaNjIray9Td1ArZGNRazRaNFdVTHJ6OFRBekFQMzZ5blMxRHVsQlNmM0l4a0JxcHU5NDlVdjBTWXMxSDY4NWJTNjNvS0dkYzQ4aDlyaTdmV2ZkMUJtcUF2TTd6dU9uNWNObmp2anc1LzNwbURPN3Y4dnAycGFaejdac2YwSFB3RUlZTUgrRytya1VkbEcrLy9CS1QyVVJNYkN6Uk1iRkVSa1doRlBFV25VNWFhZ29CaXFPODhkS1VkbXZEeVZPbFRKci9NWDN2RGlBb3NlbE11Y2MvcmFCTFZRRGZMWi9mb0JGdzhNU1YvT3ZWOTFHcjNXdFh2T1NtQlJ6YmRtMjcxRDE1N3VmMEhUYVh3Q0Q3andFZk9uQ0E3aVdyZVdHcVFVd1NnYUF6NHdmNHRtOFR1djlONXZIeFVSd3ROSENzeUVCS2lSR2R5VXBjZ0lydUlXcVNROVFrQnFzSjlqcG5TRE5iYlpUVVdDaXVzVkNvTTFOVWJhR294a3hKallVaW5RVzkyWW9zU1FSN0tZajJWOUkxVUVYWFFEVUhDbXJabGwzRlN3dXR6Qm5rZ25kdUVWejFQd1hkQTMxWVBDQ29WUit0REdZYkt3N3FPRnFxNEQ4M1g4dklib210YWt0VnJaNmIzM3dQZlhVdTk0N3dvMUJuNFpuTitSejcwT0sySDlNRWZ5S2kvZWVtVzJOejAvdGNXYjZ0NVdWYVVaS2g3RnYvVmx0VGhka3VyTXIyaDVYTjlxZXI2djViT3IvSVA4Y0F0TlcvV3FwWFhrTXRjRVlNd0JZaDJmR0xmU2hGNU03V2lsendaenJaTUVxSWhIVXZWVFBya2ZmSks3K1VteVpQZEVrOUZxdVZaNzc2a1U5MjdPT1NLK2NUR2hZbXhsbzdNUHV5eXlnc0xDQW5LNXQ5ZTNhVGw1T0xRcWtnT2lhR3Jna0pkSTFQd052SFJ3aktRY0lpSXRqNWUvdGwyeTZ2MEROOThhZjB2YXQ1NHg5QXo0VUJIUDJvbkw4ODlRdXYvV1BhQlgvMzlsWmhOQnJkeWdCb01wblFxTnN2d254MlRoV2pwN2JNbFMvejJENytQbDRZL3dTQ1RvKytiWTBNT1dWd0loOHlpaUMxUUNhaldLSkdML0hNNzBXWUxQVy94WjRvTm5LaTJFaU55VXExMFVxZ1ZrRkNrSXFFSURVSlFTcTZCcXJvSGFhaFQ3aW1rZjBlbE5hYXlhNDBrMUZtWW0xcU5Ta2xSc3hXQlgvNVdNRWpYMWg0N1JvcmszczU1OWsrMkN6eHpHcVpPNGFGMGoreWRVZCtUNVlZZVdWYk5UZE9tOFRTR1JlaGRDQVlvcCtYbGs4ZnVKT25QdnVHSjMvZndSTVRBdWdXNE1YL3ZxM216a3ZGMEJkNllBZXdJNGk4TnMwaVkwYkNocTJGaHBlR3hkczJRbS9lQUdpdjEwNkRDVUdjN3hiM2g1RGRib0lJeE1MdkNjYUtBUGoxSlIyTC8va05Sekl6ZVhIeE5RNXRmczZub0x5UythKzlpekk0akVVM0xrR2hWSXB4MWw3TGtpd1RFUmxGUkdRVWc0Y05BOEJvTUpDVmVacU05SFMyYmQ2TTJXUW10bXRYNGhNVFNVaE1ST3ZsSlFUWFVnWEF6NS9jL0twMnEvL2ErNzRqNGhJTlFVa2F1Ky9wZFhVZ1h6OXhndms3ZXpGbWVJemJ5N2lvcUlndWtYN3RVcmZaYk1WcWs1QmwrOWRKcThWQ1VVRXVRNlBGL0JBSXhGNlR1dHhLVHY2R1liWEJzVnpZZmdxMnB5cllud25sTlJEaXJTVEdUMG1ZdDVwSVh5WGpJcFRNaVZmZ3I1WHJIZHR0aUNxRHRjN2pyOXBNVnFXSm4wNVdFK0t0SU55bjRiMmNRcTZMTlJqbW82d1hnODlndG5Hc3lNQ2hBZ04zdkY5RGhkN0MxRDQycmhsVFp3eFV0ZkRFYms0WkxIbFB4bUxVOHZMRklmaTI4b1BRRHlkcldKTnU1Yk9IN3FOM1RKVFQrdUx4K1hQeDFxaDVmdk5tYmg4YXdBTXI5Tnd4eHl3T3ZnZzlVT0FxdTR1Ym1ZSVVtTERhZlo3Y3ZnZVF6cGdWTDdqVnJpcWtzMTZBRGVGeDJybkNaaFlEWHlBV2ZnZnc5WUt2bnF6aGlROTNNK081TEQ2NDYwNmlnZ0lkTG5mOTRlUGMvTzRLUmsrOW1PNDllNHJ4NVlhb05ScVN1blVucVZ0M0FJeEdJMW1uTThoSVMyZkxoZzBvVlVxU3VuVWp1WHNQb3FLaXhMRnRPL0VQOENjN3Q0cVlMbTFycFByeGwxTWNMeTVtOEEzQkxkczd5ZERuNWdCdSt1c1BITnR3NndYZGJMVzZWeER6NHVKaVlycTBWL3kvTW9KRFdwWUIrSFJHQnVQamJXTDZDQVNDT2d5QWc5L1hiRGJZbHdrL0haQlpmMVRpVkJFa0JxdElDdFRTSTFURHJMRnF2SlF5RlhvTHBiVVdLZzFXcW94V1VrdU5WQm1zMUpxczFKaXNHQ3cyVEJhNFlYQWdZVDcxTFhGK0doay9qVXhDa0lvUkRqUllvNVFZR0tWbFlKU1d4UU1EMEp0dDdNL1Q4L29QTmR6MmZpMlRlOEYxNHl5TTY5NzhObVBaUm9ubnY1TzVka0FJbytOYTF5YXJEZjZ6b3dLVlR6U2JubDJDcjFiajlDNys2NlV6eUM0cDQ5c1R4K2dSck9ITmI4M0NDMURvZ1lKT2d0Sm13aVI1VGtCSnV3MkE3V1pvbGM1dmNDZWNyVUtKRUF1L3M0ZVVCRTlkcDJkTm55d3VlZlpwbnIvcXVsYkhCYlRaYkR5L2VnMGZiZDNOM0t1dmJWR2NMRUg3b2xhcjZ4a0VxNnVyT0hVeWhhMmJObEtZbjArWG1CaDY5dTVOVW5JM0VUK3dDY0lpdXJEL1VFR2JHZ0F0Rmh2M1BybVdIdmUycnM2QU9EVkU2bGo5ODBubVR1OSs5bmV0Vm9YQjRGNUhWd3NMQzRtTDhXNlh1bytmTENVZ3FHVmhERTRkMmMzamZXckV4QkFJQkhYb2FaVUJzS1FhMWh5U1dMMVhabmM2QkdtVmRQRlRrK0NySU5GZm9yald5T0dpR2pabVZnTTJaQmtpQXlEY0g4TDl3TWZMeHJFU0s3OGVBYVVzMHk5Q1E1K0l1aU85b2ExTW5ORWF0RXFKa2JGZWpJejF3bXkxc1M5UHo3TmZWWkZWYWVTdXFWWnVHR2ZENnp6ZCtYUUozUFNlak5yaXhjc1hCN2ZhNjg5Z3R2SGNwZ3JHOUJ2S1U0c3VSM0xobDVsL1hiK0lxVSsrUUs4Z0svOWVwZUxPUzRXRlNlaUJuVkhKcE5NZEhWWmdkZ3NaMkpzMVdGbS9wZmIyNnZtMVNYYmU3cmdrbEpoZE8yQUZuUWZoVE1yRlE2MnNmN21LRzE5K255OTM5T1RGYTY0aHhNLyt1SEE2ZzRIRnJ5K24wQ3F4OElhYnhKRmZEOGZYMTQ4Qmd3Y3pZUEJnYkZZcldabVpIRDk2bFBYcjFoRVNHa3FQM3IzcDNxT25PQ3A4SGdGQlhkaDNxSUJaRjdkZGh1MVB2em1LTmxuR042TDFodG40V1Q2ODhMOXQ5UXlBZXIwSkx6ZnIzNktpSEViMGJaOGp3TWRPbHVEclo3OEIwR2Exa3BWK2lpbXp4YndRQ0FSbmFNRTNsY0pLK0dLWHhFZGJaSGFrVzdCaFE2bXdFT1V2bzFLYjhmRTNFeGx1bzF1a2xZUXdTQWlEcUlDNjQ3aC9zQ2NEL3J0T3dVK0hKUHFIKy9Ec05GOEdSR3JkSWpHRlVwWVlGdTNGc0dndkt2UVd2ajFTeGI5L3J1WnZNNjNjTk1HRzJRSXYvaWp6MFdhWjZ3Y0dNenltOWU4am5kSEs0K3ZMdVg3YXhkeHh5V1RYR3dGa21SWDMzYzZVeDUraldtOWpid29NN2lhR3Y5dGlhWUhGUk9ENXVOQW9wM0NLTmRuT3dXaVQ2aWNDYWRIRDFWMm5kRWlJemYva2hKNDZYOEJHTVlBRmptTkdCRFk5UTJRdy9QaWNqbzkvUGNDVWY1emt2cGx6dVhiaVdPUm12cEptRlpjeSs4VTNTT2cva0V0R2pCU0M3R2p2U1ZrbUxqNmV1UGg0QVBMejhqaHg5Q2dmTFZ1R2o2OHZmUWYwcDJldjNxZzFtazR2cTdDSVNIYnVQZFNtZFQ3L3hsYmliM01zaVV0Z3ZKcWpKVVgxamkvYmJPNjNNT2JuWnBJNEs5emhjbkx6cTFtMStpajdqdVhUS3ltTVJaZjJKajZ1NmVRZXUvWVhFUnBqZndUN2pQUjB4c1MxUE1hVlFDRG93TmdBSXpRV0lxcXlGajdkQVN1MnlteEp0ZElsUUdKSVBEdzVWMlp3dkpVQnNSQWIzSFJvQnJNVlZtMlhlUGxuR1grVmlvdVQvTGxtcHBkYmh5SUkwQ3BZUERDUXViMzgrV2gzT2ErdXJjRnNoZEV4dnJ3NlBRQzFvdldOMXhtdFBMYStndnN2bmN0VjQwZTEyVE5GQndmeTEwdG5jUDhIbi9QRWNpWGZQU3U4RGR3YVUrUHpVaUN3RjRYVkJCZnMrNXhyY1d5d3RGWlc0WEh1T2txcldFZ0ZUbHJ3QmZXNGVvcVpHU09xZVBLREx4bjM2RnFlbUxlUWl3YjJhZkRhdldtbm1mL2FVaWJPbUVWOFlxSVFYaWNnTWlxS3lLZ29Ka3laUWxGaElVY09IdVQ5ZDk0bUpEU1VQdjBIMEsxSEQ1U2QxQU0wTkN5TVgzOG9hYlA2ZHUzTHcraHR4amZTOFdQWm9jUFZmUFhqQ2U1Wk1yUk9FYTNVNCtObTJhSHo4bkpKak8vZTZ2c0xpblRjL2ZoYXR1M1BKbnlzRnY5a0ZZZFBGL0RHL04xTUc1M0FXODlQUjZOcDJHSjM1RmdSVnd5T3NMdXVVNGYzOGxnL2NmeFhJQkNjaDZHK29jRnFnOStPd2ZzYkpUYWwyQmlUTEhQYlpDc3JiNGVZSVB2anNKcXRzSHlUeEVzL3l2U1A4T0p2b3dJSTgvR3NkM0c1M2tKK2xSbGZoWnA3eGdRVDZlZFkrMnRNVmg3OXJaeS96RzFiNDk4ZjNEaDFBbS84L0N2YmpsU0ljZThKK3FBd0FBb2N4Tk5DMURXNndrcDIvdFlRcnZRZmtQOFFzQ2U2NndvWFkvZGE4QVVYRU9RTHI5MVp3L0dzR3A1WS9oN1BmdVhIUTVkZXp2VEIvYzk2Qkg2emN6OFBmUHdWc3hjc0lqUXNUQWl0RXhJV0hzN0VxVk9aT0hVcXVUblpIRGw0a1BYcjF0STFJWkZCUTRiUUpTYW1VOGxEbG1Wa2hZcHFuUkZmSDlmdkpKZXUyay80T09kNFhrWU04ZUtMYjQ2Zk5RRGF3S1V4a2xwRGNYRXBVUkd0U3dLeWRrTTZOejN3UGJHWGV6Tm1ZZmpaOTNCRWZ5KzZ6ZkxuMEhkNWpKbjdJWnUrWG95WHR2NldxRlp2eG15UjdRNXRVSGY4TjVXcGM0Ujd1VUFnT0k4ekI1aXFEZkMvWHlYZVdnOUQ0dUhXU1RZK3VoVmtxZVhKbDc3ZkwvSGdweklESTd4NVpsSUF3ZDZlNVhwY1Ztdmh3LzBWcEpRWXVXbElZTDFNd3EzZTNsdHNQTFdoZ3J0bnoyNFg0eCtBTEVtOGVPMGladjN6ZGI3YURKZVBGY05mNklNQ3Urd2tOczlzc3lzTmdQYWVVbTlJZkkySnRPMC9FVG1nV0VnNElHQ3BFMDRpUWVNSVI5SW02UmtMcXg2ckpqVzNtcGRXTGVmUlQxVXNIamNSTXdxV2I5bk5naHR1eE52TnZJUUU3VU9YNkJpNlJNY3c1ZUpMT0pWeWtxMmJObEpXV2txZi92M3BQM0FRdm41K25VSU80WkVSSER4U3lPamhyalYrV3EwMnZ2czVoVEV2aHp1bHZJQTROZnRUQzdCYWJjaXloTVhpWHJzdnE5V0tTdFc2RjlyeXp3N3gyR3UvTStpUllMeERsQTF1UjVMbitKT21xT0xHQjc3bmt6Zm0xdnY3b2FPRlJFVGE3LzJYbm5hSzhRazJjZnhYSUJCY2lMRk9FM3Z5R3drZk5XeCt4RVpVWU91S1NpbUFXOTZYa1N3YUhoM251TWRjVzFPaHQvTDU0UXAyNWVpWjE5ZWZlMFlHTysybzhodTdxcmgwMURpdW05UytWcmRwQTNyVEp6cVVmMzlXeGVWakRXTDhDMzNRYyswSk52Rzh6YUhBN0ppb0pLa3UxWHNiNFhIbnRSUTJrL3NORklIbkliNzQyRVZ5RjNqN2ZoMFZPcmptaFRVY3pndG40WFUzb0JJWllRWG5JY3N5M1hyMHBGdVBudFRXMUhENDRFRStYZkVSQVFHQkRCaytqTVNrWk53NkdKR0RCSWJFc0dOM25zc05nTnQzNXhDUXFFYWhkcDRzL2FOVnBHV1VrNXdZaENUTGJpWFhnb0xXWlZmKy9QdmpQUGFmM3huK1dDZ3E3NmFmS1hHR0g5dWV5T2JBNFVJRzlEMW5XTjF6b0lEQWtDNTIxNWw2YUEvUER0U0p4VUFnRURTTUFWNWUwSG9sejJ5RmYzNHY4K0ZtbVZ1R2hEakZZNjR0S2RTWitlcElGVHR6YXJtOHR4OXZ6bzZxbDd6RVVkYW02cEM4SW5sdzdneTNlTjdINTEvR0hlOHVwOVlBWGlKY3N0QUhCYzdEelF5VFNwdG5EU1M1N1hxcHVWL3NGTEF3MVF1Y2dSaEdMZUxKRlZxeWErSzQ2b2FiaFBGUDBDeGUzdDRNR3ptU0piZmZ3YWl4WXpsODRDQnZ2LzVmdG03YVNJMnVZeHBJb3FMaldMOGx4K1gxL0xqK0ZQNzk3ZnQyVjNyU3dKcjdzdm5odGl5MnZWeEkyYW1HdlJBMDBUSkhUaFFEWUxPNmwxeHpjM05KU2dobzBUM0hVa3E0OThtMURQdS9rR2FOZjM5c1NHSm5ldk9mRDNiViszblR0andpb21MdHF0TnFzWkNUbWNiRUJESC9CUUpCSXppUXgvQmtQZ3gvVXNHeE5GOWVtOTdGNDR4L2h3b01QTFcrbU9RUU5lOWUyb1ZaUGZ5Y2F2ekxxekx6OVVrenkrNjYyVzNDV013Wk5oQ3R5b3UxZTRTM2lOQUhCUjBaK1l3SFlFdVJXdkNyTTJsYWk3QjNBVzB3STdEazBLTTNMRndMRWxZeHlnUml3VzhqYkRhNCtUVXRlM01UbUhYRlZXN25IU1J3ZjJMaTRvaUppME5mVzh1QmZmdjRhTmw3UkVWSE0zelVLQ0tqdW5TWTU0eUlpR0RkOTBVdXIrZkg5YWVJWHVMVjdIVUhWNVNTK21NbHBwcTZkMloxdm9tOHZUV0U5dFF5NW04UktEVG4zcjFlWFJUc1AxN0F0SW54YUxYdXBWVG01ZVhRTGNIKytIOEdnNFU1TjN4R3Y3c0NVZnZaZnhZM3BMdVcvZXNMNnYyMmUxOGVWeTYyYjR4bXBLY3pQaDZuS3JRQ2dhQ0QwVW9ENEZ2ckpmNzFvNEs3UjRUU0o5d3pYY242UldoNGZWYWthL2Fxd0N2YnEzanpsaHZ4OTNLZmQ1Z3NTU3kvK3lZKzJyaVVTMGRYaWZFdjlFRkJCMGJHaEJWN25XVHNjMkdVa0xDZGY1M2RKcmJHanhWNzFGWlYwUmxucWZobzVKcWRnbGp3bXhlVERXNThSY3ZSa2w3TXZFd1kvd1NPb2ZYeVlzVG8wZHg2MTkzMDZkZVAzOWF1NWNQM2xuTHN5QkdzVnMvL3NDUEpNcjUrZnVUbVY3dXNEcjNCVEg1aE5UN2hUWCs3Mjd1MG1KUGZWWncxL3YyQnFjWksvdjVhMXZ3bEc0dngzS1lnSUZiTndlTUZGSmZVRWhqbzcxWnl6YzFKSXpreHlPN3JILy9YQnZ5R0tBaEtiSm1TckExU1VGUjBMbnR2Y1VrdENxWEc3c3pXR1NjT3NhaTN5UDRyRUFpYXdFU0xqcTNWR3VIcXQyUSsyNkxsWHhkSGVhenh6OVdzU2RFeElLa0g0M3QzZDd1MmplbVJ4UFpqdHJZTTd5Vm9DZFl6L3dpRS9jSkJQT2tZc0YwYXZjMU5CbytubmE4V3VDa1dJUUo3dVBNTkw0Nlg5V1RxekN1RThVL2d4SFZkSXFsYmQ2NjY3bnBtWGpxWGpMUlR2UFA2ZjltNWJSdEdvOUh0bW11ejJUaDI1SWhkMTBaRng3SjFaN2JMMm5Md1NHR3pocTMwMzZwSS83VWFpNkhoTjdmTmFrT1hiMmJieStlODNieENsZVRrVlZGUXBDTW9LTWl0NUorVm1VSHZIcUYyWFh2eVZDa3JWaDhoZVc3cmpKaFdiRml0ZFhMYnRpdWJMckZkN2I0Mzg5UUpwaVFLRFU4Z0VEU0RuYSs1ekJJWTliUUNQMXNBZng4ZmpvOWE3TU1hb3RKZzVlc1RScDVmdk1BdDI2ZVFaWHBFUjNIa3RPZ3J0MFU0aFFpY01kZlBEeWpaVGtaUWUzYWlqcjlOYkpJVG05TmNZMTA0UTRXblhlZEIySkdiNWJFUHRXdy9IY2ZVR1ZkMDZNUU5ndllsSkRTVTZiUG5jTjNOdDJBMEdIanZmMit5L3BkMTZOd29UcUFrU2V6ZHRaT010TFRtbnllOEsxdDI1THFzTGZzT0ZhQ09iWHcrMXBhWTJiK3NCSE50MDUrenJSWWJoWWYwRkIzUkE2RHhseWt0MDFOY1VvTi9RTEJialpIYzNIeTZ4dG9YQS9EZWY2d2xlWkV2c3FKMWE1YkdUMEZGWlYyY3hOKzM1QkFTSG1mWGZZVUZCWFFQQVM4UkhsVWdFRFNISFFiQVhla3crWjhLcnVvVHlydysva0pGYVlLVmgzUThjT2tNZ255ODNiYU5rL3NNNHZmOVN0Rlo3b293QUhZZVhMaVlPdWVrcXAzMk1wdGpEeUszVEJydCt3cFNpQmtxY0FiQ0E3QkpYdnRheFZlN0lwaCsyZFhDODAvUUpuaDVlVEYyNGtSdXZ1Tk9BZ0lDK1BqOVpmejQ3V29xeXN2ZG9uMFh6NXpGTDJ0K3Bya3pQTkd4Y1d4d1lTS1F6ZnV5Q0VoUU42NDB2bG1Nc2RxK3N5eW1XaXY3bHBYVWJRUVVFa2FUaGV6Y0tvS0NJOXhtWEpoTUp0UnFVTmhoMER0Nm9wakRhVVZFRFc2OUVxajJrYzhhQUgvWmtFbGN2SDBaUGRKVGpuTlpkM0g4VnlBUTJFRXpCc0R2OTB0YzlhYVNSOFpGTUtTTFZzaXJDWXAwRm82VlNsdzNjYXhidDNOVTl5UzJIdkVXSGVhdUNQT0N3QW0wdjUzS2ZudWU3S3p5cFRaNENGbFliZ1Jpb1hjcFgyNVc4T2FhRU9Zc3VBR0ZRaUVFSW1oVGxDb1ZnNGNONStZNzc2SnJRaUtmZjdLU2I3LzhrdEtTa25adFYyaFlHT0VSRVJ3NWZMako2N3k5dlNtdk5HSTB1dVpkZGVCd0lZR05HQUNyY2t3VUg5ZTNxTHpxUEJPNm9yb0YwV3F6a1pKV1NaU2RXVy9iZ3N6TVRMb2wydWVSK05EenY1RjRwYStEQXhCcTlXYkt5dlhVNm0xNGU5dW5zR1duSEdKbWQ3RS9FUWdFVGZQQ0JwbzhoZkxoRm9tSFBsSHkzSlJJNGdKYjcxSnN0WUhlM1BBSHF5S2RtWjlUcWp1RVBEODlYTVBmTHB1TjBzMnpML1dPaWVMSWFSRWl3bTBSSjhNRVRrQzJOclFQZEs2RlRNSTVWY2llSlZpeksyVFpOZ2ovZmZkQkdBQWJaRStLeEgzditESjcvbzJvVk9Jc202QWRsMHRKb2srL2ZpeTU3WFo2OU83RjZpKy80S3RWbjFKVVdOaHViUm8vYVRMYk4yOXU5cnJJcUNqMkhTcHdTUnRLU212UkJqUnNtRC95V1JrbVhjc2lXWnYxTnJLMzFpbUNzaXh4SXJXY21KZ1l0eGtIbVptWjlPMFYyT3gxaFVVMUhEaGU0SkQzSDRCU0kyTXdtUGx0MDJsaTR4UHQweHRNSm95NkN1S0R4THdWQ0FTTlUxb0xxdzVSZDhLckFZUERoMXNrWHY1QnhUK25SUkxzM2JvUHNMdHphdm5ibWdMdS9DNlB2NjBwNE1hdmMxbXh2d0xybjJ4UFFWNEtQanRjU1pYUnN6TWZsTlpZT0ZrRzgwWVBjL3UyYWxSS1pOVFVHc1E4Y0V2RTl6czNVZ0E4dDgyZWRGSlZ0bGYyYlJmcHI0bk51YkRjZE56SjA1YUlZWFFCV1VWdytUUGV6SjUvQTk0K1BrSWdBamRaeXlSNjlPck5EYmZjeW9EQmcvbittNi81YXRXbjdlSVJHQmdVUkVCZ0lPbW5UalY1WFVoNFZ6WnZkMzRpRUwzQmpOekk2VityeFViZW5wWWZRYlZaYldSdnI3dlBZcldTZnJxQ0xsMjZ1RTMzWjJlbDBxdDc4NWExcFovc0oyS2M0MGZsVEhvclhsNUtmbHlYUVpkWSs3SkpwcVdtTUMxSnBCQVVDQVIxL0pKYVordzduKytPd2R6ZWZ5dzI5Zi8yaC9Idm1ja1JMVXIyOGNzcEhaOGRyc1JzdGZIdkxTVjhkN3lhKzBlSDhMODVVYncyTTVKM0xvMmkxbXpsbnh1THorbFNzc1FsM1h6NTRZUm5ld0YrbjFMRG5kT25JbnRJbk9vK3NWMDRsaW5taDlBTGhWMmhvK0xLWEJVMkI3cEthckN0YmF6TU9UTDJXbTFaRlFOWDhHZkVsNTU2R0V3dzZ3a3Z4bCs4Z05Dd01DRVFnVnVTMUszN1dVUGdONTkvM2k1SGcwZU9HY1B1SGR1YnZDWTJQcEUxNjdPY1huZEdaZ1crNFExNzVoWWNxTVhheXRkalpkYTVnRlFHbzgydHZIOVBuejVGcis3Tlp3QitkK1YrWWljMC91SENwTE9TdFZWSDJTbERrMkVjclVZYlB0NXFObXpKSXJhcmZSbUFUeC9mei94ZWVqRkJCUUlCQUUvOUJ1WUc5cGxiVHNQRVA4S0svaWtPNElxdHJUUCsyWUJWaHlxWWxPRERQMzRySXN4SHlUK21oQkhwZHk3WmhGS1d1SGxvRUJhYmpjMm56MzBrbXRuZGwzV3AxWGpxb1ZTYkRUWm5tcmg2L0dpUGFYTmNhQ1NaaFdKK3VDWENBQ2o0TTYyMEd5a3hPMlp5YXNPUEdSNlZra2gydHhrcURJdGlvZThBM1BJZkx5S1NScE9RbENTRUlYQjdrcnAxSnltNUd5ZU9IK09yVmF2b0VoUE4rRW1UOGZYemMzbmRNWEZ4bEpXV1VsdFRnMWNqOGVGQ3c4TDQvbVFKRm92TnJ1UVY5cEtXVVk0NnJHSGw4UFNHYXN6NjFubWgyV3hncXJGaXNkZ0lqd3gxcTc3T3lEaE43eDVqbXJ4bSsrNGNOSkV5R3Y4TGo4elpySEI0WlNtcFAxZGlOdGhRcUNTVVdvbmhkNGNST2VqQy9yUG9iZVRrVmVFWEVJaFNxYlJEZGpaeU0wOHo3akl4THdVQ1FSM2xlZ2h2SUJ6cDNseDRkZGFaL3puakFmanpJWWxuVnl0NVlWckxqSDhBcVNWR1lnTlVmSDIwa2lnL0pZc0hOcDR0ZmNtUUlGN2FYTUxZcm5Ycm5vOWFKakZJemVFQ0EvMGlOQjRuNDcxNWVrYjNTTUpiby9hWU5zZUdoSE82UUkxZGFhQUZiWXR3RFBGTUpIQ25yeGl5elhNR2t0dzJ2ZFBjTHgxUHNBS3gwSHNDNzYxUnNqZXJDeVBIVEJMQ0VIalFTNy91YVBCTnQ5OU9iTmQ0UGw3K1B1dlhyVU92ZDcwblZwOSsvVGx5NkdDVDE4VEVSclB2WUw1VDZ6MmRYWW5jeUduWW9xT3RmMjRKMEJXWXNWcHNkTy9SeTIyNldLL1hvMUdEU3RYME51V1RiNDhTUE94Q3IwV0x3Y2F2RCtkdzR0c0tqTlZXckNZYnBob3J0YVVXdHI1VVNPNnVDNDlNRzNVVzFxN1BvR3RpSDd2YW1KMlp5ZEJvVUloazZRS0I0QXhxQlpnYitCNmpONFAzSDB1VkdiN2JCemUrSi9IZ21MQVdHLzhBRHVickNmWlNjTFRJd0szRG1rNldGT1dueEdpeFVXazQxN0N4WGIzWmxWM3JrVExlbG0xaTBmaHhIdFhtdU5BZ01ndlVZb0s0STFaQTVHZ1JPRWhyVDZwS0xmalZXWGpVdGxYRUFCUTRqRVVzOG45d0lndWUvc1NIR1pkZDFhWnV4d0tCczVBa2lYNERCckRramp2eDlmUGwvYmZmWXZ2bXpWZ3NyclB5OXgwd2dLUE5aQU9PNkpMSXJ4dFBPN1hlL0pLcUJoT0FXSXcyekxXdGowRm50WUNoeW9MSlpDVXB1YS9iOUcxYVdocjllamNma3VEN2RTa1hKUCt3V2VHM1IzTXBTek5pTVY2NDRKdHFyT3g2c3dqYmVXS1RiVEpmZkp0S1VuZjdES0ZweHc1d1ZXK2RtSWdDZ2VBc1BVTGhTQU41b0pSbk5DNmpCVzc0UXVhK2oxU01pdkhseWQrS09GbmNjcSt3MCtVbXRtYlc4cmR4b1haOWhPZ1ZwaWFsNUZ3OUE2TTBITWozelBBRmh3cE5qT3ZWemFQYUhCN2dUM0dsK0Zya3RnZ1RnOEJCWkRxNUI2Qmt0OVZTYWtHWk5pUTZXYUJ0WVpOeFBzTDdyMDRCTnNPODU3MlpQSE1oR3ExV0NFVGcwU2dVQ29hTkhNVk50OStCd1dEZzNUZGU1K2loUXpRWjhLMlZCQVFHb3EvVll6UTJyckJGeHlYeTA2L09OUUFXbHRhZzlydndsVjJWWTNLb1hLdWx6b0JvTmxucDJkTjlQQUJUVTA0d3VIL1RYaTFwR2VYWWZHeW9mT3JMWmQ5N3hWU2NObUkxTjk3L0ZvT05rcFBubE4vYU1ndUJRUnFNWmdVK3ZyNTJ0VEVqNVJpWGRCZGZsQVFDd1RrbUpNRGExUFAyWEJhUXBicFgwc0pQWlF4bVg5NmUyNFU3aGdmeDlOUXdYdHhVak5uYThGcGl0Y0ZmZnJyUW9uaTAwTUNZT0MraS9PeUw1aFR0cnlLdjZ0ejdJa0Nyb05vRE13RVg2c3pFQkFlaFVYbFVGQ3NDdkx3b3J4YUtuZEFQaFIyalErc2pMYklrUzNaZTVYeEJObTRBdE5janFJMDZWeFl6VStBTXhCY2VBQjc1d0l1UW1DSEV4TVVKWVFnNkRHcTFtZ2xUcG5EMTlUZVFtbktTNVV2ZkpUdlQrV24zNGhNVHlVaHJQQnR3Y0VnSW1kbFZtRXpPVTY2S1NtdlErRjNvQVZpUlpjU3NiNzBSU3FHUzZqemhKSW1JaUFpMzZjdjA5S01NNnRkMGU3NzQ0VGlCZytvZnFTcExNNUN4dnJwQno3OTZyNEphSzdxQ2N5OEVYYjRKTDdXS2hHVDdqS0NGQlFVa0JWbnhGU2U2QkFMQm41alRDMWFkRnlWQ3BRQ0xGVjdmTG1Fd2UzSFRrS0N6NmxPTXY0cmhNVjc4bnQ1d0p2ZWNTaE1CMnZycVdxWEJTa0cxaGRtOTdJOTlHNlJWVUhGZXJOZ0FyYUxlc1dCUDRGaWhrVkU5a2oxdVhHaFVTZ3dtWVFBVStxR2dJOU5tOWlxN2ZlMmtSdHJwcnB6WFh0a21acWJBQ1ZpRkNIYWRnSzkzK0RGbTRqUWhERUdIeE0vZm56bVhYOEVsczJhei9wZDFmUDM1WjFSVlZqcXQvTVRrWk5KU1U1dThwa3QwTkR2MjVEcXR6dUpHUEFBcnMweE5lcm8xKzZwVlNPZ0t6SVFIdTFjRzhOVFVWQWIyQzIveW1wODNuaUppUUgwUDV1My9Mc1JVMC94Q2I3UFZIWDMrZzRvMEk3bFpOWFR2TmNDKzloMDd5Rlc5YThSa0V3Z0U5WWowZzY2QjhIdGEvZDlOVnZqdlZnVzNEd3U1NEo2cHlUNXN6R2g0UGFrMTJmQStMeGJxZDhlcmlBMVVZckxZdi9ZckZXQTV6OHZRWHlON25CZGdWcFdWQVltZWw3VE9TNk9tMWlDVUVMZEYrQmtKbklEaWZIdVZtOXI4bXpVQXVzdmhGcGZHL3hNZlpEb1BuZHlPYkxiQURhOTRNM25tQW1TRlFvd0hRY2RXeEtLaVdIempUZlRzM1llUGw3L1A1dDkveDJ4MmZCR0lpWXNqTnllbnlXdkN1eVE3TlE1Z2VZVUJ0ZStGYzdhbXlMRWp3TmhzNkU2YkdEWm90UHZzd3kwV2FtdDBCQVkwSFo3ZzJJa1MvR1BQdWVBVkhLeWx0c1QrWGZ5ZlBRQ3JUcHBSSzczeER3aXc2OTcwWXdlWjIwc29jd0tCNEVJZW5RVC8rSzMrYjBVNmlTdDZCK0tsdWxEcFNBaFNrMTNaOEZydXA1R3BQczl3NUt1VzZSNmlhWkh4em1DMm9WYks1eS8vSGtkK3RZM0VpRkNQYTdkV3BVUW5ESUR1aXpBQWRoNWNhUGVSM2NUUVlHdTJuVzdSREh2NlNzeE1nVmpnSGVYZlg2a0ppZWxQUkdTa0dBdUNUa092UG4xWWN2c2QyTEN4OU0wM09Ibjh1R01iZWEwV284R0FyUW50S1M0aGtaOS9kZDd4WXo5Zk5hWUdrbjNVbERpMnFFa0tpWUtqZW1iT25PTTIvWldhbXRwc0FwQ1RwMHJ4alZUVk85MncvLzJTQm1YVXFFSmNlVTUyUlNsNitnNGFidGQ5bFpVVkJDaE5oUHFJdVNVUUNDNWtVQmNJME1LNk00N2llVlYxSDJDai9KV042cU1CR3BtcUJneDZrWDVLc2lwTi9ObDU3OUplZnNRRUtNbXJzbC9ackRYWjhGTFcxM3cxU29sQXJXY2xwcWd4UTVDUHQ4ZU5DYjNKakk5R0pBRVIrcUdnSTZOd3lrQnkvWmVaRnF4RURaaExiWktIQ1ZRZ0Z2ak8rK2paUmZENjkxcEdUN2hZakFOQnAwT3BVakZ1NGlTdXV1NTZEdXpkdzJjZnI2Q2l2THpWNVFVRUJsRlpVZEhvMy8zOUE4Z3JxRUZ2Y003WHdNQUFEU2JkaGNxaFJlK1lSNEhHWDRITktoRWZIKzgyZlhYODJCSEdqR2o2K08vbW5kbjRkRHZuRVZsVGJLYW1zSVd5dHAyNzEyeXkwYU5YUDd0dVN6MTVra3Q3R3NXa0VnZ0VqZkxpSmZDWEg4QmdodmYzeUF6dDR0MWsxdDB3SHlVbE5aWUd0YThCa1ZxMlp0WS9JaHp0cnlLejNINFA4Q3FqRlY5MWZiWHY3eE5DTHpoZTdPN29qRFlDUE5BQWFESmJVQ2pFa1RPaEh3bzZNbTJhczZKQk81eGtaenZkOHZ5cjFMNENkZjNqQ01RQzMrYmM5NDQzb3liT1FxVVdVZXNGblJmL2dBRG1YWFUxZzRZTzQ1TVBQMkRycG8xWUxTMWZHSUtDZ3lnckxXM3ltcmlFZURadnozWkt1ME9DdkJvMkFKb2MrMUtvOXBWSjZwcmdWbjEwNHZnK1JnN3QwdVExYXplZklxakh1YlVzOWFkS3UyTC8vUm1WZDUzaW03dXpoaUQvWUxzem9tZWZQTWhsUFF4aU1na0Vna2JwSGdwWDlJWG5mb2N2RGt0YzJjK2ZYZG0xalY3dnE1YlJOWEtrOThvKy9xdzRVRkV2VTNDM0VEVW5TK3ovRUpGWFpTTENWK254Y3BWbHFLN1ZlMXk3cS9WNi9MekVFV0NoSHdxYVJmTGtwbHM5NG9Ga1ozU0sxRzRDRlhTa1NTTVdlTmR4SUEwT1pmblRvM2NmTVFZRUFxQmJqeDRzdWYwT0RIb0Q3NzMxRnBrWkdTMjYzOC9QSDExMWRaUFhkSW50empjL3BEcWx2UkVodnVqTEwxekFIREVBS3RRUzFscVlNMk8rVy9YTnlaUlVCdlp0T2dQd3ZvT0ZCQ2RwenY1LzVxYnFGc2V6VXZuVWJZRnlOdGN3Wk1oNHUrNngyV3lVRk9iVEwwTE1JWUZBMERRUFQ0QnZqa0paRFNRSHE3SGFvS0M2WVU5bHBVdzlBOStmaWZaWE1qYk9tM2QzbDUvOUxkUmJRVW1OQll1ZDZsRnVwWmt1ZnA1dkFBelF5SlRwUEM4QlUxRmxOZUdCWWs0SS9WRFlGem95c3RYU1BsM1J3djZSUFU2Z1lnQUtIS0dUMnBIdmVzT0gwWlBuaVA0WENQNnNjS2xVVEpvMmpjdm16MmZEYjcveTdaZGZVcVBUMlhXdnQ0OFBOVFZOWDV1UW1NVGE5YzVKQkJJWDZWOHZhNjB6VUtnbGFzc3NUSnZtUGhuQnE2cXE4UEdTMFdnYVQxSmtzMEZsbGVHc0FVOWZZV214OTU4a1N3VEVxVEhwckZUbG0ralR2Nzk5U2x4aElYMGk1SHF4QndVQ2dhQWh0RXE0ZHd5VTFOcW9NVm01dUpzdlA1eG8rTU9SeFFaeUV3dkxWUU1DeUtzeXNlclF1WXoyM1VQVm5DaTJ6eHU1WEc4aDJOdHprNy9wejJTN0Q5RkNka21aMDh1MzJXenNUYzkwV2ZzTEt5b0pDelNMU1NIMFEwRkg1TXpTN1NrblZwMXFBTFM1dEtGV2h6cEVJS2piWVhXK1IvNzlnRVNsTFlyWXJsMUYvd3NFRFJBYUZzYmlHMjhpSVRtWkQ1YSt5NEc5ZTV0L0o4a3lWbXZUYnoyVldvMjNyeDlwR2VVT3R6RXF6QmR6dVhQZnNwSkNJaUUrRHNtTnJGbUhEaDFpL09pbWovK2V6cXJBSit5Y0owdmVuaHJNK3BiSlJxbVY4STFVa3JtcG1xNnhpWGJmbDV1ZHpjU3U0dml2UUNDd2owcTl4T0F1V2w3Y1ZNTGtKQjgyWnRRMG1MMTNjcUlQU2NHcXh0ODVFanc2TVl6ZE9iVjh1TDhDR3pBaXhvdHRXYlYydGVPeGlXRWVMVWVWREZZYmRBMkEvZW5wVGkvLzI5MEgrT3Z5VDF6Vy9yenlDcUpEVFdKQ0NQMVE0QW0wY2x2c1NnT2dNelVBMlo3bmxkeWdEOXdscmJMYkNFWFF1cG5UQ2Ivd1BQcVJOeVBHWHlMNlh5Qm9objREQm5EOXpiZHdPajJkbFI5ODBHeVNFSnUxK1FVbE5yNEgzNjF4L0Jod1pJUVAxcW9MZjFlb1cvOHlVcXBrcnJ2cUZyZnFnNE1IZHpCcGJIU1QxeHc1WG9SWHpEbFBsdHhkTlZqTkxkc2FTWW82RDhEVUg2dVlPSEc2M2ZlVkYyUXlPRUlvY1FLQndEN1NTbVV1U3ZiRlh5UHp4YUZLaHNWNDhmcjJDejNZK29Scm1rM0lvVlpJUEg5Uk9BWFZacDVhWDBTZmNBMDc3RFFBeGdXcVBGcU9DbGtpcGNSSS8wZ3R2eDQ0N05TeXJUWWJqNjc4Z2tIeE1TNXIvNm1DSE9JamhRZWdXeU84QUQwUHlkMmFZM1VMdTFsenY3WGRFV0FIUFF4RURFQ0JXTmhienA0VUtETUVFeGtWSmZxL2sxRlJYczVYcXo1bC9icDFwSjQ4aWNra2pCYjI0T1h0elp3cnJtRDRxRkY4OHVFSDdObTVnNGFDeTVsTUp2THo4emgwNEFBbmpoMGw2L1JwS2lzcUxqQUt4aVgwNEpzZjB4eHVWMHdYZi9URkYzNVpWQ2hiOTI1VmVjdElGcGt4WThhNGxmd1A3dC9IbUJGTksySDdqeFhnRlgzT0FGaDJxdVVlZVFxVmhLN1FqTXFtSlNUTWZzK1lxdElDZW9TSmVTSVFDT3lqcUtZdVh0ODlvNExaa0ZIRE1XTW9KMnA5T1ZMWU9rOWlwU3p4NE5nUVJzUjQ4WmVmQ3FnMVd6bGUxRG04a3BPQ1ZWUWFvTEM4bk5KcW5kUEtYYkZoS3lmelN4blRxNWZMMnA2U2wwV3ZPREVmM0JyaEJTaHdFSVdqeG9ZMk9wRWpkeHFCQ2dTZGNBZzkvcEVQUThkY0xQcStFK0xuNzgvNHlWT0lqbzBoTFRXVjk5OStpMisvK3BLYzdDd2hIRHRJN3Q2ZEcyNjlqWUw4ZkQ1NmZ4bWxKU1gxL200MEdPalpyUnVqaGc2aFczdzhtSXdjMkxXVFR6NzhnTTgvL3BqTnY2OG45ZVFKQWdNRHljaXFvbGJ2MkpmL0xwRysxSlplV0lhc2F0MW1RVkpJVEJ3M3hhMWtYbE5UQTVnSUR2SnE4cnJkaC9Qd2o2M3packdhYkMyTy93Y1EybFBEMGMvS0dUT2laZkVQYTNRMWhIcUwrU0VRQ094RFp3Q3Rzazdka3IwRFdmUHJlbFo4c29vZnMxdnZrWmRmWmVhM2ZBMWpKbDlFejhHamVHbTNrUnBUeDkva0ttV0p6SElqWTJMVnZQL2JScWVVV1ZSWnpUKy8rbzVRSHcxVCtydk9BSmhXV0VwOHBKZ1BRazhVZEdROEpRYWdVZ2hVMEdub1pFUG9kQUdjelBObXlNd0UwZmVkOFNVa3k0U0doUkVhRmtiM25yM0FaaU1qUFowdEd6WmdNQmlZT0dXcWlBdlpEQnFOaGhsekxpVWpMWTB2UGxsSi8wR0RHVEZxRkpJc1k3Rll1TzY2NjVnNWMrWUY5NVdXbHJKOSszWldyMTdOcHg5K2dGcnR4eXR2N3VULzdoL2Q2bzk3U3FXTVpMM3daclZ2eTcvanlTb0pySERuN1hlN2xid1BIanpJK05IUnpWNlhubGxCL093NkkyRmxUc3M5VzVVYWlhZ2hQaHovdElwK2x3eHMwYjFHa3hrZnRaZ2JBb0hBUHN4V1VNanc2Mmt6bHkrNGlyaTRPS0tqb3psWmJBQzhXbHhlVHFXWlozWmFlTy9qenhnM2Jod0EvLzNQYTZ4ZTlUS0xlblI4ZVU1SzhPWi91NnQ0ZDkzdjNISEpWTHpVamgxdHZ1UHQ5eGtYSzNPcU9wd0FieStYdExsYWI4QmJZMFVXNGFPRW5pam8wRWcyenpqbTcySVBRTW1PWCt3VmFDZWJsZUlsNFh3NjJaZWROMy9RMEdmd2VOSHZnak5yaWtSOFlpTHpyNzZHYWRPbnMrbjM5WHkrY2lYbFpXVkNOczBRbjVqSURiZmVSa1Y1T1I4dWU0L3lzaktxS2l2bzJvZ0JOVGc0bUJrelp2RDIyMitUbXByS3NtVWZjT0JrS0VNbXIrTFRyNDQzZEtMWUxnSUR0SmgwOVJjeXRWL0xzenJLQ29tQkF3Zmc1K2ZuVm5MZXQzY3IweVkwSDRPcHBLUVdiV0RkYzFmbm16QWJXaVpRV1NWUmxxSm4rTEFKTFQ1dW9kYW9xZENMT1NFUUNGckd1bXlKZSs1L0FBQ0ZRa0dYNkZpS2ExcW0yMVFackR5OTNjajduM3h4MXZnSGNQME5ON0kxdDNQb1NRb1p4c1NxU0FwUzhOTHFIeHdxNjc4L3JxTzJLaCs5UldieEpOZnRsM2VrcERHc2g1Z0RRay9zakxwSDUzcmMxcDVZbGRwWWVCNTBCRmlZNVFVTzBvbUdrTVVLcXpZbzZkVzNyK2gzd1FWRVJuWGhxdXV1WjlEUUlYejYwWWRzMjd6SnJvUVduUm1WU3NYRk0yY3lZZklVUHYzb1EwNW5aSkNjbk56OFMxMlNHRE5tREt0V2ZjRTMzNjdudCszK2pMcmtjM2JzeVd0eEc3b2xCVkdaWGQvanpTdTRaWTc4c2tKQ1ZrZzhlTi8vdVoyTTkrL2J3NlJ4elh1bFd2NDBWc3N6akZoTkxUTUFCc1NweWQ5dFpNVElsc2MvREFnTTVtU3htQThDZ2NBK2ZEV1FXbW9rSkNxT21KaHpIemo2RFJoSVpubkxQSmovZThEQy9YOS80b0xZclg1K2Z2Z0dCRk5wNkJ6djhVRlJXcnlVRWgrdDM4emU5TXhXbGZITmpqMTg4TXN2M0RyVWg2MVpSdWFQSHU2eTltNDVrY0w0L2pveEdZU2VLT2pneUI1aVJaYUZRQVdkaGs0MGhIN1lJUkhkdFRzcXRUaXJKbWljNU80OXVPbjJPNmlxckdMNTBuY3ZpSE1udUpENHhFUVczM2dqQnIyZStmUG5VMWhZYVBlOWNYRnh2UFB1Y3Q1OTd5c2VlT0lROXoreUdZUEIvaDNuMEw1ZHFNdzIxdnZOUDBhRjFJSnpSYklLaGc0ZlFwU2JKUVlxTEN3a01FQ0puMi9UYTFaQmtRNnZ3SE5Hei9JMFk0dnFVWHJKS0ZRUzQ4Wk9RNVpidmdVSzc5cVRkV2txTVJFRUFvRmQrS2tocGRUSzlFdXZxUGY3Z01GRHlkYlp2M1p2eWpJaWh5VngrKzEzTlBqM3Z2MzdrMVhSZVpKOTNUekVseWcvQlZmLzY3OHNYNytwUmZlK3ZYWTl6Nno2akNjbkJ2RER5UnFXVEJudjhGSGlwdGgyOGloaitnbzkxdTJ4Q1JFSUhCOUVrZ2NNSktjYkFDVzczUldsRnBScEU3TlNJQmIyRnZET0dsOTZEUndwK2x6UUxDcVZpb3RtekdEQzVDbDg4dUVISE5pN1Z3aWxHWXFMaXBrOVp3N1hYWGNkRXlaTVlQWHExUzI2djErL2ZtemN0Sk9JMklzWVAvc3JNaklyN0xwdlVPOEk5TG4xbFFodGtBS2wxcjczcVVJdG9WQW9lUFRCSjkxT3BydDM3V0RHdE9aVEpHYm5WS0VOT1hmc3VhYW9aZkZXRkNvSlE0R0N3VU5HdEtxZFBmdjJaZGwrTlJhaHl3a0VBanVJRDdLUmE5VFN1M2Z2ZXI5MzdkcVZNb3ZHcmpMMFpoc2ZIN2V5Zk1VblNJMkVMVWpxM291Q2FuT25rYXUzU3VhR2diNU1UUFRoNjk5L1p1cVQvMlJuYWthVDkyUVVsbkRwODYveS9aWmZlSDVxRUhxempVMVpGdTZaNWJwa2VkVjZBd1VWcGNTSzdQSHVqM2l2QzV5QTFDSlhVc25PcTV4N0hGanA0Qk8ya1NERmpCU0loZDFlRENZNG1BYURMNGtXZmQ0S3ZsejFLU1ZGZFdmOExCWXpzaXdqU1hYZlNoUktCU3JWdWEvRUdvMFdTYXFMNTZOU3FWRW9GQ2hWcXJQWC9mbDNsVXFGUXFsRXBWS2kwV2hScVZXb1ZHclVhalVhalFhVlNvVlMxWDZlUlluSnlkeHc2MjJzV3ZFUjZhZFNtWFhaNVNpVlNqRWdHaUF6UFoxYmIxN0NGVmRjd1pneFk3anBwcHY0L3Z2dmVmWFZWL0h4OGJHckRGbVdlZmovSG1YVTZISE1YSFE5NzcwMmtaRkRtL2JLNjkwakZIMU8vWTJGWDVUOUhvQ3lRbUx4TmRmaTcrL3ZkakxkdVhNREx6N1d1M25aWjFlaURENzMvOFpxK3pkYXNrcENxWkdaTlhOQm8wcDBzMHFudHpmUnlYMzU3NDY5M0RmS0pDYURRQ0Jva29SZ0sxK2tTeGVFakFnTkRhWENwTUNlYzRkcjBvMWNjK010UkVjM3ZxL3pEd2lrek5hNTN0bkpJV3B5cTJvWUd1Mkh4V3pra2ZmZnBjS2taTWJnQVF6djNvMndBRC8wUmpOSHM3UDVZZGNlY2t1S1dkaEh3NGdZZjZ3MmVHbHJGYS9kZEsxTHZmOStPWGlNUzRhSmVTRDBSRUZuUWNiYU5xZkpIYkRETmZ5bWtObzVZcU4wL3Y4Szd6K0JXTmp0WmMxdWlmamtudTAvanoyVUt4WXNiUEIzczltTTJWejNkZDFzTXAzOWI1UEpoTVZTdDlTYmpFYXNaK0tUR1F3R3pHWXpKcU1SbzlGQWpVNkgwV1RFZVBaM0V3YUR2dTYvVFNZTWVzTVpnNk1DbTgyS0pFbklDZ1ZhclJhdFZvdEdxMFdqMGFMMU92UC9aLy9iQ3k5dmI3eTg2djd0aU5GT1gxdUxWcTFtOXN4WmZQclJoOHkrL0FyOEF3TEVvRGlQOUxSVFRKOCtIWURJeUVpKy8vNTdYbi85ZGNhT0hjdnk1Y3NaTUdDQTNXVk5tRENCMWQrdTQvTExadkRxTXlPWVBENjIwV3ZqWXZ6UkZkYjM4UEFPVTRMVS9EdFNxWlVKRFF2aHVtdHVjRHQ1R28xR1RwL09ZRkQvU2MxZW01bFhnU3JrM09FRnM5SCsvWUdzbEFnTmlpQStJZEdoOW82YWZBbXZ2bnVTSVZIbGpJc1greE9CUU5BNGZTT2cwbUM2d0hnWEVSRkJtZDYramVtNlRCc2I3cnlyeVd2OC9Qd3dXRHZmdm05OHZEZS9wZGN5UE5xTHh5ZG9LTmRiMkplM255L1g3YVBTS0tHVWJVVDQyTGdzUVVQeTBNQ3o5LzFuUnlYVEJnOWxhdi9lTG0zZmQzdDNjT3ZjYWpFUmhKNG82RFNjdHkrVWFOOVRpSkxFK2RrSFBlSlRrVXM5QUlXTlJDenNIWXlQZi9jbXNjZEEwZDlPUnFsVW5qT3VhYlZ0VXFmRmJFYXYxMU5iVzR0QnIwZXZyNlcyVm85QlgwdDFWUlhGUlVYb2EydlI2MnZQWG1lMTFCa1BKVmxDcTlYaTdlMk5sN2MzM3Q0KytQajY0dTNqZzUrZjM5bC9xelYxUjVDc1ZpdS8vdndUNzcvL1BtUEhqbVhjK0hIY2ZQUE5UTDFrT3JGZHU0b0JjSWI4dkZ3U0V4TUorSk5oVkpJazdyNzdic2FQSDgvMTExL1BqVGZleUYxMzNXVzNsMWx5Y2pJLy92UWJNNlpQNW44dktSZ3pva3VqMThiRitGTmRZTUkzNHB6SGd0cFhnYkdxOFFWT29aRlFLR1JlZitXdFZudSt1WkxkdTNjemJhSjlZeXl2cUJyTm56SWYyNnoyN2Fwa2xZUXNTY3k3OGpxSDI2dFdxNWx6MVUxY3MrSWQvamU5bWhuZGhkWWdFQWdhWmtBa2VDbXRlSHQ3MS9zOVBEeWNpbHBUczZyWXlSSWozWHYzSXp3OFhBaXpFU1luZUhHNHdFRGZDQTJCV2dXVEVocjN4TGZhNEkyZGxRU0ZKdkwwb2l0YzJpNlR4Y0t1VTJrczd5MzZTT2lKQXJmQ2hVWTV5V1p6ZS91U1p4Z0FiZUlMdTBBczdQYXkvWmpFdFpPRXdhWWpvRkFxOGZIMXhjZlh0OFgzMnF4V2FtcHEwT2wwVkZkVjFmMTNkVFg1dWJtazFkVDlwdFBwTUJvTVNKS0UwV2drTERTVWxTdFhzbW5USnFLam8zbit1ZWQ0OU5GSEdUQjBLQU1HRFJZZEFodytjSUFILy9LWGhoVzlBUVBZdkhrejk5NTdMM1Buem1YWnNtV0VoSVRZVlc1TVRBeXJ2MTNEckpsVHVQR3E3aWdVRWxZclZKNDU0dXJybzBLcHNCTGs3Y3VSbGJsRUR2WkdxWlZRK2NqNHg2aW96bXY0T0txc3JETjhQZi9NQzBSRVJMam5tclgxVis2NHpqNnZ2T0x5V3RTeGRSNkFGa1BMOWdhVHBseU0xM2xLZUdzSkRBcmlpaHZ1NEo2VjcvTlRhaVV2WFZTTFZweVlGd2dFNStzd0VxZ2JDTytoMVdyUm01cmZtRzRya0ZsMDMwMUNrTTNRTjBKRHBjR0t2NmJ4OFBiWmxTWmUyMTdOeFVPSDhlU0N5MTMrUWV6N1BRZVpPdGlLUWhiOUkvUkVRV2ZCRXhMWE5ybGRkUit6bXpBQUNzVENiZy9Ic3lBb05Nd3R2WHdFYmF4MHlQSlo0MkY0TTRhZnZOeGN0bTM0blMrKytJS0NnZ0t5czdQSnlzb2lLeXVMM3IxNzgrdlBQL1BMenovajdlMU5RR0FnQVlGQkJBWUZFaGdZUkdCUUVBR0JnZmo2K25iNFkrZTF0YlhrWm1jemUvYnNScS94OGZGaDZkS2xyRnExaXZIangvUDIyMjh6ZHV4WXU4cFBTRWpnaXk5L1lNZU9IWFdiQ0ZrbThVeThQcDFPaDhsa1l0NkN1blpVVmxWU1dWMUJhWDRKNGQzTEtQUXJKajh2bjZxcUtzeG1NemFiRFZtV3Nkb3M5TzdkaDhxS0tvNGZQMDVzYkt6ZGNRcmJaRm0yV2psdzRBRGpSOXZubVZkU1ZvT3FaNTAyWlRYYjdGcnJaSlZFVUVnQXcwZU1jV3JiZlgzOVdMamtMblp1L3AzZXIyL2prZkZHYmhoa1JoYkxyMEFnK0xNVzA0Z2FZMDhtOHYyRlZsNjk2S0ptcjZ1c3JFUXJtUUYxcDVWelE4WS9HNUJTWXVTSEZBUFoxUXBldmZsbVJ2ZElhcFAyTFAvOVYxNjRUU2NtZ05BVEJaMUovM0lUdTVXTnhoMFJQZUo3dGFKdFFpa0tPdndPck9NLzRxLzdGRVRHOVJSOUxiQi92Mk8xOHZ1NnRYengrZWYwN05tVG5qMHZIRDlHbzVINUN4WlFXRnpDa0dIRHFLeXNwTEt5a3ZMeU1rNW5wRk5hVWtKVlpTVUFBWUdCQkllRUVCd1NRbEJ3TUVIQmRmOVdLQlFlTDZ1OU8zZHk3ejMzMkJWbmNjR0NCUXdkT3BTcnJycUtlZlBtOGNBREQ5aGxyT3JWcXhlOWV2Vnl1SzE2dlo2Q2dnS3lzckxJeU1nZ1BUMmQ5ZXZYYytMRUNTb3FLZ2dKQ1NFcEtZbUVoQVM2ZGV0R1FrS0NYY3FvczltMWF4ZVR4c1dpVXRsWGQybTVIai9mdW12TmRub0EycXd3ZnR4Rm5EaDJGSlZLaFplWE43NStmdmo2K1RuOHNVU1daVWFPbjB6ZlFjTjRmK012dkxENUtNOU0xak92ajFXRVlSVUlCSFVLb2R6dyswOVdOUDB1cVRGWlVYajVFaHdjM0d3ZFZSWGxhQlRDWWFMS2FPWGovUlZVRzYwVTZzeGtWcGdaM1NPWk95NmR5cFQrdmRyc0EzbDJTUmxsTlVYMFR4VGpYK2lKZ2s2MTNudUEzVW9wWnBQTFIwSEhyTXNqTFIwZC94Ri8ydXRGM01BazBkY0N1OW0zZXhlWHpwblRaT0lLdFZyTlYxOSt5VTAzM2NTT3JWdTVlT1pNcEFhTVJWYUxoWXFLQ2twTFNpZ3JMU0g5VkJwN2QrMm1vcndjaThXTW43OC9vV0hoaElhRkVSWmU5Ky9XSEc5dUQzVFYxWnhLT2NsdHE3K3grNTZrcENRMmJOakF2ZmZleStXWFg4NnlaY3NJQ2dwcWsvWnF0VnE2ZHUxSzE2NWRHL1JBek12TDQ4Q0JBK3pidDQvVnExZHo2TkFoUWtKQzZObXpKLzM3OTZkLy8vNW8yeURXNWFZTlAzSDNqZDNzdnI2OFhFK0lydy82TWdzRkIydFJvU1lnM0svTzI5RnFSYTFXRXhZV1JuaDRPRkZSVWFqVmFrSkNRcERQR0tDcnE2b29LQ2pnNU5FajVPWG1ZYkZZaUlpS0lqUThqUGpFSkFKYjJUKytmbjVNbm5rWkZlV1QrTmZ2YTNocVl5cExaOWN5TWxab0ZBS0JvSkYxdzhlYkdsTTEzbzE4QURsUmJHVG9zUEYybFZWVW1FOFhqYUxUeTlSTEtURTZ6Z3NmdFV5UVZzSDdCMnI1KzVXWE1TZ2h0azNic2ZTMzM3bnhrbG94eUlXZTJMRnNHcllPV0pmVG0rNk1oamZsditjNEh1RUJLR01XazA0Z0ZuWTdPSkpoWTlBbGthS3ZCWFpSVlZYSjhTTkgrUHlUVDVwZmgyV1o5OTkvbjc4KytDRGZmUEU1c3k2N0hOVjVjWTFraGVLTTExOHdjS0ZScDZxeWtwTGlZZ29MQ2poODhDREZSWVZVVlZiaTQrdExXRmc0WVJFUlJFUkdFaDRaZVVIQTlQWm15OFlOL09QSkovSHk4bXJSZlZxdGxyZmZmcHNWSzFZd1ljSUVsaTlmenVEQjdSOVBNU29xaXFpb0tDNjU1Skt6ditYbTVySmx5eForL2ZWWDNuMzNYZno5L1JrNmRDamp4bzBqSmliRzZXM1E2L1VjUG5LWWlXT3ZiL282ZzVrZHUzUFp0cnVJOG1JVk94K3ZwVXRVRndZTkdNS3RyNDZtVjY5ZUpDVWxFUllXMXVJMkdJMUdEaHc0d09iTm0vbnlxNjhvS0NpZ1IrOCs5TzdYcjFVRzBJREFRQzZldTRDaXdrS3VYZjBaRTdxVTg4ckZ0ZmlxeFhvakVBanE0K1BqZzk1Y2hiZXE0YjluVnNzTXYzeUNYV1VWNWVYU1N5T0N6U2xsaWY2UjU5YnVFQzNrbHBXM3FRR3dXbS9nNjUwNzJIdWowRjg5Q3ZHOVR1QUVKRStQQWRqMEpKR0V4NWxBTE94dVJIazFxTFUrSXY2ZndHNjJidGpBUC8vNXp4WVoyMTUrNlNYaXUzYmwzNis4d3R6NTgvSDE5YlA3WGo5L2YvejgvWWxQckg4bXBycTZpdUxDSW9xTENqbDI1REFiMS85R2JVME5mdjRCWncyQ1VWMjZFQklhMmk3ak96TWpBNXZaekxYWFh0dnFNcTY1NWhvR0RSckUxVmRmelgzMzNjZjExMS92ZHVPaFM1Y3V6SnMzajNuejV0VTlkMlltUC83NEkrKysreTU1ZVhtTUdqV0thZE9tT2MwWXVHbmo3MXcrS3duNXZLQjVOaHZzUDFUQUQrdXkrR1ZERHNXbGVrYU9ITTNZY1l2NCthY1I5T3paMDJualFLMVdNMnpZTUlZTkc4Yjk5OTlQUVVFQjc3Ly9QbSsvL1RiZGV2Wmk2TWlSZGgzNVBwK3c4SEFXTExtVHZUdTNNZml0OVh3NXY0Wis3Znh0cHRvSVdlV1FVd21sdFZCYWM5Ni96emlyVkJ2QWJLM0xsbGxwcUY5RzRCbTkybDhEWGlyd1VVT3dGNFI0UTdBM2hIcERGMytJOW9jb1AxQUpoeVNCQUt1MTRTTmgzajQrR015TmIwNUxMRjRrSkNUWVZVZHViZzdCY1dMQ25VK2cxa1plYVZtYjF2bjJ1dCs1N2lJalhob2hmNkVuQ2pvYmNsc09KSnNFVXN2cnMzTlgyNzduV0VVTVFJRlkySnZuWURxRWhYY1IvU3l3aTd5Y0hCU1N4THdycjJ6eHZYZmRkUmVKaVluY2R2dnRUSjl6S1JHUmpsazJmSDM5OFBYMXU4QXdXRkZlVGw1dUR2bTVlUncrY0lEU2ttSjgvZnlJNmhKTlZIUjBteGdGalFZRDY5ZXQ1WmQxNnh5dXAwK2ZQbXpjdUpIRml4ZXpaODhlL3YzdmYxL2dSZWxPeE1YRmNkdHR0M0hiYmJkUlVWSEIxMTkvemV1dnY0N0JZT0NpaXk1aTh1VEphRFN0MTNCKy92bHJQbnlqN25oeVpaV0JYMzQvemZmcjh0aTZNNXMrZmZveGM5WkNWdHgya1V1OER4c2pJaUtDaHg5K21IdnZ2WmQvdi9JS1M1Y3VaY3BGRjlNbHR1WGVJNUlrTVdURWFLTGpFcGoxMlFxZUdsL05kUU5kNnhHU1dRNG5pdUZZWWQyL004dnJESDVHQy9pcElTNnd6amozaDhFdUtSaUd4ZFFaOFlLOTYzWmdQdW82dzUwczFSbjYva3k1L3N6YzFFT3RDWFRHT3NOaFNVMmRJZkZ3QWF4Tmhld0t5S3VDT2IzZ3lTbGl2UlYwYmlSYnd4NGhnWUZCMURTUkNiaWd4a1o4Zkx4ZGRSUVVGQkxVVXhnQXo4ZExLVkd0MTdkWmZiVkdFeDlzWE0rdU4vUkMrSjZHT0FJc2NNWjYzK0JBY3EvejAwclJUUUt4c0hjTTlxY3BDQXlMRS8wc3NJdHRtemJ5L3JKbHJiNS94b3daL1BEOTk4eWRPNWZCdzBmUXEyOWZwN2V4THVOd0lEMTc5em43VzNWMUZYazV1ZVRsNW5EczhHR0tpd29KQ0F3aUppNldtTmc0b21Oam5ScTdidDFQUC9HM2h4NmlXN2R1VGluUDM5K2ZiNzc1aG1lZWVZYXBVNmV5YXRVcUlpUGQvOWgrUUVBQTExOS9QZGRmZnozcDZlbTg4ODQ3M0hycnJVeWFOSWs1YythME9MYmhxVk9uVU1wNmR1d3A0SUhIZHBDWm8yUGFSVE5ZZk9PZHZMMXNiTHNiUnIyOHZIams3MzluL3J4NXpKMDdsOTc5QjdSNmpFZEdSYkZ3eWQyODhPbHlVc3VLZUhxUzQ0cGhyUWtPNU1PZW5McC9EdWFEM2d3eC90QXpESHFGdy94KzBEV3d6dURuTEUrOFB6d0FBN1VJQkI2RHhRcVhmZ1JmWGcyYWR0QjhaQ3lZemVZTHZJbjlBNFBRNVRTK09jMnZOQkFYWjkrK3ptdzJJaUZjenM1SHBaRFFHNDF0VnQreTlSdFlNTkdJbjdlUXZVZmkydEJyZ2s2QTVBRWVSeDRTQTFCNEFBb0V6YkgzbEliUTZBZ2hDRUd6bkVwSklTa3hrV0hEaGpsVVRyOSsvZGkxYXhlejU4eWhxTENBY1JNbk5aZ2N4Sm40K3ZyUnJVY1B1dlhvY2ZhM3N0SlNzak16T1hIc0tMK3RYWVBWYWlVbXJpdnhDUW5FSmNUajUrZmZxcnAyNzloTzE3aFk3cmpqRHVkdURpU0p4eDU3akVHREJqRjE2bFErL1BCRHQ0Z0xhQzhKQ1FrOC8venpQUDc0NDN6d3dRYzgrT0NEREI4K25FV0xGdUhuMS9TUmNLUFJ5S1pObS9oazVjZFlMQlpPWlBYa3VSZWZvbCsvZm03NXJOMjZkV1BidG0zTW5Ea1RxOVZDbi80RFdsV09ScXZsOHNVM3MrYmJ6OG4rSnBWbGw5YTJLRXR3YWdsc1BnMmIwbUYzRGloa0dCZ0ZRNkxobHVIUVA1Skc0NGdKQkowZGhReGo0K0hoTmZES3pMYXZ2MHVBZ3B5Y0hMcDI3VnJ2OThqb1dNcFBOVzRBdENLaFZqY2ZRTFNvcUloQUwrSFQwZURhcTVTb05ScmFwSzZLbWxyZS9tVWRPMTRYM244ZWl6QUFDaHpkNDNmb0dJQnRQaHNGQWdmb0JHN2RhZmtLQnZjTEVuMHRhSmE5TzNmdzVSZGZPS1dzNE9CZ05tN1l3QU4vL1N1ZmZieUNHWFBudHRyZzFscitTRHpTYitCQW9PN1liblpXSnRtWldlemR2UXRkZFRVeHNYRjBUVWdnTVRuWnJzekRxU2RQa0p1VnhiYXRXMTNXN2xtelpwR1VsTVRDaFF0NTVKRkhtRDkvdmtlTkl5OHZMMjY3N1RhV0xGbkMwcVZMdWZ2dXU1a3hZd2FYWDM3NUJaNHVSNDRjWWQyNmRlemJ0NCtaTTJleTR1T1ZEQmt5eENPZTA5L2ZuNTkrK29seDQ4ZmowOEJSZFh1UkZRb3VtYnVBdGQ5OXhRMnJqN0hzMGxya1JoU05VNld3NWlTc1Q2dno3a3NLaG5IeGNQMFFlSDFPWGZ3OWdVQmdQdytPZzlrZndvZjc0TnBCYlZ0M1VwQ1Z0TFMwQ3d5QW9lRVJuRElybXRCKzdMTkVwS1NrME1WUGhUakRlQ0UxUmh2K1htM2pqdmZpdDk5ejV4d0RBVDVDN2g2dEw0cGNPZ0lIa0t3MmNQTm9EQTRiQU52Q1NDNWJyVzFYbVVEZ29SU1UwYUtFRElMT3llbjBkTHAzNzA3djNyMmRWcVpDb2VEVlYxNWgydFNwM0g3SEhZeWJOSW1rYnQzYjdSblZHZzJKeWQxSVRLNDd0bXMybThrNmZacjB0RlBzMnI0ZGk4Vk0xNFJFRXBPVGlFOUlSSG5lY2RQTWpBeDJidG5LNXMyYldwejF0NlgwNnRXTDlldlhNMy8rZkU2Y09NR2pqejdxY1lsOGxFb2x0OTEyRzlkZGR4M1BQUE1NZDk5OU4vZmVleTl4Y1hHc1c3ZU9IMzc0Z2VUa1pHNisrV1krK2VTVFZpWFZhRzk4ZlgzNWR2VnF4aytZUUVSVVZPdkhoU1J4MGV6TCtlMm5iN25sdTRNc25WUG5LYUl6d3RvVVdKTUNtekxxanUxZTNCMGVtVlRuM1NlTC9ZOUE0Tmg3U29aUEY4R1VwWFZINVNjbnRWM2RTYjRWbkR4NWtrbVRKdFg3UFRvNm1oM214ajM4N1BXb1AzSGlCTkZhQXlDK0RKeVAyV3BEMVFidm5CTzUrZnh5ZUJlN2JqY0tvUXNFblpFem9mZWtOamk1Nm1oRVFXV0xheE1JUEpGTzRFUnFNa3ZJc3Zoc0pXaWEvYnQzT1JUN3J5bG16cHpKMWkxYm1EZHZQaGxwYVl5ZlBNVXRrbHdvbFVvU2twSklTRXFDYVdEUTY4bElUeWYxWkFxLy9Qd3pBWUdCZE92UmcrVHVQZERwcXRud3l5LzgvdnY2Tm92TkZ4d2N6RTgvL2NSdHQ5M0c5ZGRmejd2dnZtdlhzUzkzdzh2TGkyZWZmWllGQ3hhd1pNa1N5c3JLV0x4NE1iLzg4Z3RSVVZFZVAzZGlZMk41NU85LzUrTlBQbVhjNU1rTzdOd2tKaytmdzdlcnlwbitZUnF5elV4R0dWelVEYTdvQzYvT0FxMDR6U2NRT0IxL0RYeDlEY3o0QU42ZUM2UGFLR3p5b0hBREgyL2ZBTGZlV3UvMzVPUmtjbXZrUmplcGttVGZudTdvb1FORWFjMElBK0NGVkJpczlBMEljR2tkUnJPWjI5NTVqOWZ1MEtFVWVWaUV2aWdRdEFjdHNBb0thNEZBTE9nZEFJTUpaSVhRR0FWTlUxSmNqSmVYbDB2anpjWEV4TEIxNnhibXpKckZKeDhzSit2MGFiZVRnMGFycFVldlhsd3lheGEzM1hNdlV5K1pqdEZvWk5XS2oxaXhiQmt6Wmt5bnVMaTRUZHVrVXFsNDc3MzM2TldyRng5OTlKRkhqN1ArL2Z1emJkczJqaDA3eHVPUFA5NGhqSDkvY09PTk41S1hrME5sUlVXcjd0ZnBkT3padVpNUGw3MUhZWm1PUFVXK2pPcXE1TWg5ZGJISnBpVUw0NTlBNEVwaUF1Q2JhMkRKVjdBOXEyM3FIQndOZTNmdm9MQ3drQ2VmZkpJTkd6WUFkUWJBdk1yR1BjYXMxcnFqdzRjUEgyNnkvR09IRGhBWElJeC9EYTY1WmdXaGZyNHVLOTltczNIRG0rOHdlMHdKNC9zTDY1SEhJMDdSQ3pvQllwc3BFSFFBU3F2QXgwZWtIQk0wemFGOSszam93UWRkWG84a1NmenRvWWU0ZE00Y3JyMzJXbzRmUGNMNHlWUFFhTnd6UTJGWWVEaEZCUVVFQmdUdzZ5Ky9jT0RBQVY1NDRRVU9IVHJFakJrem1EZHZIaU5Iam15VHRqejg4TU1kWXF3cEZPZmNJQ29ySzBsTFN5TWpJNFBDd2tLS2k0c3hHbzFZTEJhcXFxb0FDQXdNUktWU0VSSVNRbVJrSkYyNmRDRW1Kb2FJaUloNlpiVTNzaXp6bDcvY3oxZXJWek44OUJpNzdqR2JUQncvZG95RCsvWlNYVlZObjM3OW1IM1o1UVFGQjJQUTYzbHYyUnRNVGl4amRKeFFIZ1dDdGlBeEdMNjlGaTViQWEvT2RQMXhZRjgxV1BSVnJGcTFpbi84NHg4OC9mVFRmUGZkZDh5WU1RTUxDaXpXdWlQS0Y2dzMyTGpvb29zNGRlb1VUejMxRkk4OTlsaUQ1WjlLTzBYa09LSFNOVVJ4TFVRR3VpNHU4WU1mZlVKNFNCb1BMeEtKUHdRQ2dXZlFzZDhXNHNpeTRBODYrQmNkZ3dra1dXeitCRTBZSWN4bU1rOW5jT21sbDdaWm5UMTc5bVRIamgyOCtlYWIvUE9GRnhneWZBVDlCZzUwcnhoM05odWJOL3lPc2JhVzdkdTNFeFFVUk4rK2ZibjY2cXVwcnE3bSsrKy81NldYWHVMRWlSUE1tVE9IcTYrK21qNTkrb2dCMVFSSGp4NWx6Wm8xYk5xMGlkMjdkNU9WWmIrYmpTekwrUHY3VTFWVmhjVmlRWlpsNHVMaTZONjlPejE2OUtCbno1NE1IanlZZ1FNSG90VnEyK1g1Rml4WXdEOWZlS0ZaQTJCK1hoNTdkdTdnZEhvNjNYcjBZTXJGbHhCeDNyRnlqVmJMcklVM2NOV0t0OWk1UkVlNHJ4Zy9Ba0Zia0JRTVAxNEhzejZFUnliQ1BCY25JcCtXWk9YQWdRTjFXMUtybGZ2dnY1L3AwNmZUdTA5dlRsY2NKREhvd3JBUGVvT1J0Snk2OWZQeHh4OW4yclJwRjN5TXFxMnRSV0d6b0dnbUJNeTZWQjFEb3JVRWUzV3VNNm81RlVhU0lzTmRVdllqbjN4QmNlMCtQdnEvR2pHaE9ncmlPNXpnRDZTT094NlVuaUYvNFk4ckVBdDZVMVRWMUNVK0VBZ2FJK1g0Y1M2LzdMSTI5NmFTSklrNzc3eVRoUXNYOHNBREQvREpCeDh3ZXZ6NFZtZFNkU1kxTlRYOHRIbzFZMGFQNHMwMzM3d2dPWVd2cnk4TEZ5NWs0Y0tGVkZaV3NucjFhaDU0NElHenNlMFdMVnBFU0VpSUdGeEFRVUVCNzcvL1BzdVdMU01sSmFYWjZ4TVNFcGc0Y1NLalJvMmlSNDhlSkNRa0VCRVJVUy8yb2Nsa29xaW9pTFMwTkZKU1V0aStmVHV2dmZZYUowK2VSS2xVMHI5L2Y2Wk9uY3IwNmRNWk0yWk1tOFdiREFnSUlDb3Fpc3FLQ3Z6UGl5MWxNWnM1ZXZnd2UzYnRSS2xVTW16a1NLYlBudE5rZk5hZzRHQkdUcHZMNWF1K1lkT05PaVR4OFZJZ2FCTmlBdUMzSlREM0k4aXRnbnRIdTY2dTZiRWxQSFhpeU5uL1AzbnlKTnUyYldQWW1BbWsvTFNmeEtBTDd6R1pUZlgrZjlteVpSY1lBQThmUGt4Q3NJYkd2blJiYmZER2psTEs5UlltSkhTK2t5SUdDL2hvbkI5VDk1RlB2eUtqYkR1ZlBsclRvUGVtUU9pTGdzNkpKeXdIU2pFYlc2UFJpc0V0Y0M4c1Z1RUJLR2lhbE9QSCtjZGpqN1piL1NFaElTeGZ2cHlqUjQ5eTczMzNzV3Y3TmthT0dVdHMxNjd0MHA2czA2ZjVkYzNQdlBUaWl5eFlzS0RaNi8zOS9WbThlREdMRnk4bU96dWI1Y3VYTTM3OGVBWU1HTUF0dDl6Q3hJa1RPK1c0cXF5czVNVVhYK1RWVjE5RnA5TTFlYTFhcmVhR0cyNWd5WklsREIwNnRObXlWU29WWGJwMG9VdVhMb3dkTzVZYmJyZ0JnRU9IRHJGczJUTGVmdnR0OXU3ZHk0c3Z2a2hJU0FoWFgzMDFOOTk4TTMzNzluWDVjMCtkTW9VakowN1F1MTkvQUtxcnF0aTViUnZIang0aHVYdDM1bHgrQmNFdE1BNTM3OVdiek5SanZMenRNQStPRmxra0JZSzJJdGdMZnI0QkZuMEtlVlh3L0VXNHhBZy9waXVjL3ZGa3ZkL1dyMS9QMkxGamVlMnJkN2k0QVYxSHE2eXZTbTdjdVBHQ2EvYnQyMGU4Vmc5Y2FPU3kydUNmRzRzSjhsTHc2TVN3VHFlKzVGU2FpUXNOY3E1R2FyUHh5S2RmY3FKZ0IxOCtLWXgvQWtHNzQyYWVlbTJSQmRoUnhMSWxFSFFBeXF1RkI2Q2djUXg2UFFaOUxiMTc5MjczdHZUdTNadDFhOWZ5NGZMbFpHZWtzK3FqRHpsNS9CZzJhOXQ0ZWxzc0ZqWnYrSjJkVzdldy9yZmY3REwrblU5TVRBeVBQdm9vaHc4ZjV0WmJiK1dkZDk1aDRNQ0J2UG5tbTgwYXdUb1MyN1p0bzIvZnZqejc3TFBOUHZlVUtWTklTVW5ocmJmZXNzdjQxeFQ5K3ZYamxWZGVJUzB0alRsejVnQlFVbExDZi83ekgvcjM3OC9DaFFzNTdlTGtNLzM2OWFPNnFvclNraEorV1AwTks5NWZSbUJRSURmZmVSY1h6WmpaSXVQZkgweTRaQTZ2Ny9ibWVKRllzd1NDdHNSYkJWOWREU1UxY00xbm9EYzd2dzZWQWk3dExlSGo0M1AydC8zNzl6TnMyRENPRlRZY1A4NUhYZDlrZCtyVXFRdXUyYmwxSTRuK0RiOC8zOXhSU3BDWGd0dUhCM1ZLMzRVVHhRWkdkdS9tdlAyRDFjcnQ3eTZuUUxlZHI1N1VvUmJmM1FVQ2dRZmlOQU9nOEpnVnVEVWRmSUFxWk9vKzlRb0VEWkIrS3BYWnMyZTdWWnVHRFJ2R3VyVnIrZWJycjlISU1oOHVYY3JXalJzcEx5dHp6UkpnczNIazBDR1d2dkU2V2VucHJGdTdscVFreHlLL1M1TEVoQWtUV0xseUpULzk5Qk1GQlFVTUdUS0VoeDU2aUx5OHZBNDlwcjc5OWxzbVRKaGdWM3kvNmRPbnMyYk5HdUxpNHB6YWhzaklTRmF2WHMyaVJZdnE5Zk9xVmF2bzM3OC9YMy85dGN1ZVB5b3FpbjE3OXZEVlo2dElTRXppMXJ2dllmQ3c0UTRkUTFhcFZFeTlkQ0h6di9ER0xDS2ZDQVJ0dm85Njl6SVlFQVZUbGtKK2xmUHJXTkszQks4L1dZME9IejZNdDdjM3ZnSEJWQmt1blBUQjUzM1hOWnZOWnhNbi9jSGUzYnRJQ3I3USsrL2I0MVdVMVZxNGJYaVFXOGkzMm1nbHBjU0l5ZEoyZTlWakpWYkc5TzdwbExJcWEvWE1mZWxWZ29NUDgrSGZhbEFKNDU5QUlQQlFjNGJ3QUJTSUdkTUI4UE1HazBsa0lCTTBUSFptSnBkZmZybGJ0cTFYcjE1ODhNRUhIRHAwa01zdW5jUFczOWZ6MllxUDJMNWxDMFdGaFk1djJpc3EyTDVsTXgrOCt3N2VhaFc3ZHUzaXhSZGY1T0tMTCtiNDhlTk9lNDZvcUNqKzhZOS9jUERnUVhyMTZzVkZGMTNFcmJmZVNucDZlb2NiVDd0MzcyYkJnZ1dZVENhN3JuLzExVmRkR252eXRkZGV1NkQ4eXNwS3JyenlTbjc4OFVlWDFCa1dGa1pBWUNCTGJydWQzdjM2dFRxeGpWNnY1NTNYL3MzdTdWc3htMHhFeDhZU0ZEK0FsN2VxeE1JbEVMUURENDJIaHlmQ2xQZGdYNjV6eSs0UkNnSGFjeHZTUHo2Z1RKb3lqWU1GaGd1dUQxVmR1TWIrZWEwem04M29xaXJ4VWRkWDUwNlZHdm5oUkRWL0hSdmFLczgvbzhYRy9qekg5cFFXSyt6TDAvUEdqbEp1K1NhUHY2OHI1SnRqVlpUcjIrN3J4cEZDRXlPN09SNXZPRFcva0tsUFBjOFZFeko1K2JaYUVhZTFJeU0rdmdrNkFlTDdoVURRUVpDRUg2NmdFWEt5c3hrK2ZMaGJ0OUhmMzU4Nzc3aURPKys0Zyt6c2JMNzU1aHUrL09vcnZrOUpJU0lxaXVEUVVNTENJd2dPQ2NFL0lLQkJnNUxGYkthNHVJakMvQUpLUzRySnpzd2tLQ2lJUllzV3Nlcmpqd2tLcXZPRWlJdUxvMnZYcmx4KytlV3NXcldLZnYyY2wvN3hqemgzMTExM0haOTk5aGtMRml4ZytQRGhQUExJSTBSRlJYbjhXREtielZ4MzNYWG85ZllyaHdrSkNTNXRVMWhZR0Y1ZVhsUlhWOWZmeDF1dDNIMzMzVXliTnMzcENVS0Nnb0xxc2hBN3FBbHF0Vm9pdzRNb1A3eUdEN1p0WVBEWXlZeWNPSTMvdlhPRXhmMU5SUHVMOVVzZ2FHdG05NFQ0UUZqNEtUdzlEUzUzTVBINy9qeDQ1NEEvYTFOc3hDZkVjQ3J2S0FBNm5RNmRUc2ZraXk1aCtaYXZPVCt2ZU5mQUM5OXozdDduRW5rY1BYcVV1S0Q2Ym9KV0cveHJTd2tQalF2QlM5WHk5ZWxrc1pGL2JTbGhaZzlmQmthMVBOTjZRYldaSDA1VXN6bXpocjdoR2tiSGVYUHowQ0RVaXJhMW11VldtWWtJRE1UUHk3RnM4ZC9zM005am42M2szYi9vR045ZjdMTUZBb0huNC9ZR1FBbFFlRUF3UllHZ1hZMG4zbURRMXdoQkNDNmdvcnljcmwyN05wbUYxTjJJaVluaHJydnU0cTY3N3NKcXRYTGt5QkYyN2Q3TnpwMDdPWHBnUDNtNWVSaU1CckQ5YVRNdVNYaHB0U1FrSkRCNHlCQ0dEeHZHbURGakNBd01iTENPd1lNSHMyclZLaFlzV01EcTFhdnAxcTJiVTU5QmxtVVdMbHpJZ2dVTCtQenp6N25ra2t1WU1XTUdEei84TUFIblpZNzFKRDc5OUZPT0hqM2FvbnRXcjE3TmxWZGU2YkkyYmRpdzRRTGozeCtrcGFXeGUvZHVSbzBhNWRRNmRUb2RhaWNaRlVkTm1jbldyNWR5NExacUhsdS9sbFZMTnhQVGZTQjMvTENiMVl2RXVpNFF0QWY5SW1IOWtqb2o0TzRjZUhvcUxVNzRjQ2dmSHRzVVNKa2N6RjIzTGVMZkY0MUFwVklTMW5zQlplVjFSM21MaTRzWk8zWXM5K2Nib0U5OVkxWC9pUHJHUGMxNXNaNjNiOTlPa28rUlB5Y0FXWmRhVGU4d1RZUEhncHVpeG1UbHczMFZIQ2swOEgvalE0a1BhdG42bGxOcDV0TmplbktNYXNvcXJmejdra2lDdk5wdjM3RTlTOC9zWWVOYWZYKzEzc0RES3ovbFZPRmhOdnhiUjJTd21CTUNnYUI1Skt6dWxwZmtBb1FIb0VEUUFRanhCMTFOclV2cnNGcXRsSmFVVUZwU1RIbFpDYnJ5UW5SVjVlaDBsUmdOQmlSc3lOSVpUMFRwekxKbms3QWhZYldCRFFsdmIyKzhmWHp4QzQ0aUlDaVMwTEF3d2lJaVVDckZVdVFxY3JLeW1PVEJHV3BsV2FaZnYzNzA2OWVQRzg5a2dYV2FndGV2SHg5ODhBSHo1czFqdzRZTkxqSE1TWkxFL1BuenVleXl5M2publhjWU5Xb1Vqenp5Q0ZkZGRWV3JqNDIySjh1WEwyL3hQYmZmZmp2ZHVuVmp3SUFCVG05UFNrb0tpeGN2YnZLYWdvSUNwOWVyMCttY2xuZ3BMRHdjZFVnY216TlA4TDlaZWc0WDZGbjA1VzYyNWRheU93ZUdSb3QxVENCb0Q4SjlZZTJOOE5jZlllWUhzSEpoWGRiZzVyRFo0Sm5OWG54eTNKZUpFMFlRSTBsczNIYUlrMms1RE9pZHdCM1h6K2JaVjFjQ2RXRUFmSDE5OGZFUHBFS3ZJMEI3enVzdnlrK0ZKRW5Zem56c2lvMk5yVmZQNXQvV01UU292cHI1OWJFcW5wc2FidmN6Mm9CZlR1bjQ5R0FGczN2NmNjdXdJT1FXdkpxS2RHWStQRkpuK0h2bXNidVpNWFU0Ynl4YnphWTFxNW1UM0g3SjZUWm5tWGxnOGJCVzNmdjdrUlBjLzhHSExKbFJ3MXNQR2xva0Q0RkEwTG54aEJONVF1c1dDRG9BQVQ1ZzBCdWRWcDdWYXFVZ1A0L2M3R3hLOGxJcEtzaERzaGxKaUpMcEYyOWhjbmM5eVYyc3hJWkJSRkNkQjZKZEc4V0tTZ3JLNEdSMktrZE9xemh3VE1QdlA5aVFGVnJDb3hNWk5HSUNnVUZCb2tPZFNIbFpHU05HakJDQ2FJUmh3NGJ4bDcvOGhTVkxsdkQ1NTUrN3JCNlZTc1dkZDk3Si9QbnorZHZmL3NheVpjdDQrKzIzU1U1TzlpaDViZDY4dWNYM0ZCY1hNM0xrU0I1KytHSHV1KzgrcHhoYTlYbzlyNzMyR3M4Kysrd0ZRZkhQSnlJaXd1bHlLQ2twY1dybTlSR1RwdlBZNTVuTTdhV2pid1RzdWJXR3E3N3k0djQxTmpiZEtPSzdDZ1R0cGlqSjhPb3NXSGtBeHI4REg4K3ZTeFRTR0RZYnpQM01oeFBWZ1NRblJUT3dieExkRTZPeDJXemtGWmJ5eThaOXJOOXlnT2lvRUhMelM2bXRyZnQ0TzJIS05JNGMvb3pSY2ZVdGpENGFGZFZuOW5jeE1USDEvclo3MTA0V2pUM242WGVpMkVpMHY1SmdiL3RpcnU3S3FlWERmUlVraDZqNTEvUUlBclgyeDJxMVdPR0w0enArejdIeDdPTzNjTm5Nc1djL2FpMjZmREt6UHZ5R09lMzBlc3NvTXhIa0YwQk1TTXYyazNsbEZmenQ0MDhvMXFYeDFUK3E2UkVyeHI5QUlPaUE3elVoQW9HZ1l5QTdFcm5XWmlNL1A0LzAxQlBrWng2bnFxS00vb2t5ay92V01tYXFtUUdKNE9VRVhUY3NvTzZmdnZFd1o1U0pOWHZNdlBtREQ0Y3pUTWdLSlFxbFFuU2trNmtzTDZkSGp4NUNFRTF3N2JYWHNtYk5HbGF1WE1sVlYxM2wwcnJDd3NKWXRtd1pHemR1NUxMTEx1T2VlKzdoNXB0djloaFp4Y2ZIYytMRWlSYmZwOWZyZWZMSkozbjExVmVaTjI4ZTgrYk5ZOHlZTWZYaVdUV0h3V0JnKy9idGZQNzU1M3oyMldjVUZSVTFlMDlJU0FqRGhnMXp1aHhPblRxRm41L3pBdlFGaDRTZ0Nvcm0xMU1wVEVteW9WYkE1MWZXY3ZVWENrcHFJTVJiekZPQm9EMjVhZ0QwallDclY4SDlZK0hHSVExZmQvdVBYaHd1OCtPak54NWd4SkFMTTlBdXVIUUNBSHNPcFBEVXZ6NW03cHdadlBxZk54a3pmaExmNzF6TjZQT3U3K0t2NHVRWkErQ2ZQeGpsNU9UZ3JiQ2dWcHhUNVhabDF6SW1ydW5Gd25ibXVsV0hLZ255VXZEZzJCRGlBbHQyM0RlOXpNU3J1M1hNbURHQmZaL2VpRlpULzdoeGNLQWZ0VllaczlXR3NoM2M1OWFlMG5QTHhYUHR2cjY0cXBvWHYvbWVYdzd2NVlscmE1azNRWVNlRWdnRUhSZGhBQlFJT2doYXRSV3oyV3ozY1ZxTDJVeEdlaG9aS2Z2SlREOUZuemdiVjQ2cVpjcFZWcEs3dUs2ZFdVWHc4cGRhdnQ2cUlDYXVHejBIakdESWpEalJnUzZpckt5VXJsMjdDa0UwdzJ1dnZjYTRjZU9ZUFhzMmZuNStMcTl2L1BqeGJObXloVHZ1dUlPTkd6Znk3cnZ2MWlXVmNITnV2UEZHL3ZhM3Y3WDYvdkx5Y3Q1OTkxM2VmZmRkbEVvbEF3Y09wSHYzN2lRbUpoSWFHa3BBUUFDeUxHT3oyYWlvcUtDMHRKUzB0RFJPbmp6SnZuMzdNQnBiNXVsODc3MzN1aVRFd0xIangvRng4amdaTW00cVQ2ekxZVXFTRHFqTEw3SnlubEJFQlFKM29YOGtiTDRWYnZnU05xWERtNWVDMTU5c1o4ZUxZUFZKRGR0K2VvSFlMbUZOei9jQjNWajk0Wk1jUzhuaTFyOCtRbW01bmtTZkM0MWxBOE1WbkN5cysrOCtmYzVsSS9ubGwxOFlHRnIvMnBNbFJpWWwralJZbjlscTQvZjBHcjQ2VWtuWFFCVjNqd3h1Y1p3L2dPOU82bGliSS9QaDBxY1oxTDl4Rjc5K3ZSTkpLMHVqZTRpNlRmdW8xbVJqWDRHRjk0WU5iUGJhZzZlemVYdmRMMnc1ZnBTL1hLN241WHZNaU8vUUFvSEFFV3k0Zjh3QXBXY0lVcXpHQWtGenhJVExWSlNYRXhJYTJ1ZzFWb3VGVTZtcG5EeTBqZUtDSENZUHNQSEl6RnFtREFLTnlyWHRPM29hL3U4REh3NmQxakJnMkdRVzM5b1BoWWo5MXpZTHZaQnpzNFNHaG5McnJiZnkzSFBQOGZ6eno3ZEpuZjcrL3F4WXNZSlhYbm1GbFN0WGN1T05ON3E5bk82NTV4NldMbDFLU2txS3cyV1p6V1oyNzk3Tjd0MjdYZExXeE1SRUhuamdBWmVVdlhQSER2b1BkYTVuWVZTWGFEWmJBem1RcDJ2eWlLRkFJR2cvQXJUdzVWWHd5aFlZOXc2c21BODl6OWo2WHR2dHc3T1AzTmlnOGErd3VKejFXdzZRbTErSzNtQWtKTWlQc0pBQWVpVEg4dHVYTC9EcDErdDU0dmxsM1Aycmdyb29VamEwU3Brd0h4OTh2STNvYXZRTUdqVG9iSG5mZmJtS2lTR1dlcXBjdWQ1Q3lIbkhmMHRyTGZ5Y1VzMnZwM1FNaS9iaUgxUENDUE5wK1o3QVlMSHhuMTNWQkNWMlovc0hEK0hqM2ZRSHExNDlFOG5ibFVMM2tMYnRuMitQNjdodTBqalVEZXg3YkRZYmh6SnorRzczZm43Y3Q0dFFuMXJ1bkt6ajdhdHR5T0VnMUUyQlFPQW9OdHcvNmFMUy9ZV0lJd2NiQllKT1EyS2toWXJ5c2dZTmdIbTV1Unc3dUpPTWxDTk1IbWpqdjlmWE1xcDNuWWVKcThrcWd2dmY4ZUhnYVIrR2paL09OUmQzRjUzVlpndW9EYVZDN0dqdDVjNDc3MlRvMEtIY2Nzc3RKQ1FrdEZtOTk5OS92OGZJU0t2Vjh2bm5uek4rL0hncUt5dmR0cDFxdFpxVksxZTI2SWl4L2RQS1JzYnAwNHlmZHBIVHl4NDBaZ292YmYrQ0ZaZUo3TDhDZ2JzaVNmQ1hzVEFxRHE1Y0NROVBnR3NHd3ErblpGNmFNLzZDNjMvYnZKOUxyMzJTMmpOSGVVTkRRL0gxOVNVbkp3ZVR5WVJLcGFSdnozanV2bTBlUzY2ZWpxOVBuWEd0cHRiQTBST24yYnp6S04rdjNjNmR0OS9NNVZkY3ljSkYxM0Rvd0Q1dW02STUvNVYvOXQ5N2NtdjUva1ExaFRvemwzVHo1Yit6SXZGV3RVNHhMYTIxOE5DYVF1NisreHJ1dmMyK2pPNWRva0xaYTI3Yi9VZXR5Y1ozSjZ1NUpkN0dPNzlzd21BeVVWWmRUVkZsQ1VlemN5aXJycVozTk16cVg4T2ErODBFLzlsWlVoYmpXaUFRT0dtZjZPYnRFMjRoQWtFSG9YOVhBOStkS2lZeHVSdFE1MTF6OU5CQmp1elpTSFN3bnJ0bjZKajdkNnZMUGYzK3dHeUJsNzVRODc4ZnRZeWFOSWVGVTN1SlRtcGo5QVlEL2cwa1hNak16Q1F1VGh5N1BoK1ZTc1hUVHovTlk0ODl4b29WSzRSQUdtSEFnQUdzWGJ1V21UTm5VbEpTNHBadGZQZmRkMTJXL09ibzBhT0VoWVc3cE95a2J0MzU4R2NsVlFidzA0aXhKaEM0TTZQaVlOTXRjT09Yc0M0RmdnTDk4TkplZU9UMXkrODNuelgrelpremg5V3JWd05nTkJyWnNHRURyNy8rT3Q5Kyt5MzdEcVh5Mmp2ZjhKL25ibWYyUlNQeDl0SXdkR0IzaGc3c3puMjN6S1d5cW9hdmY5cksxUXZtb2xYQ3FSSWp5WDg2WXF0VlNyeSt2WlNqUlFaNmgybVkxOWVmUHVHT0xTVFpsU1llL0xrQXMwTE45VmROdC91K3FJaGd5bzF0ZXhUdTIrT1ZUTzlucEZmb0Q1VFZxUENYelVTSDI0anVBWDNtVXQvZ0p4QTBoREFFQ3pvQndnQW9FQXQ2QjZGdnZJV1BkMlpSVXpPQWZUczJjL0xJSHVhT052UHZwL1FrdHZGeHNvd0N1T3dwSC95N0RPRHFteTlDcFZLSk1kZ09HUFI2ZkgxOTYvMldrcExDbWpWcnVPdXV1NFNBR21ET25EbTgrT0tMSERod2dBRURCZ2lCTk1LSUVTUFl2WHMzVjExMUZkdTJiWE9ydHIzMjJtdGNlKzIxTGl2Lyt4OStJRHJPTmVraEpVa2l1ZDhRM3QrM2lYdEdtc1ZBRXdqY25DQXYrUG9hK1BRZzVLUjVOWGlOUm4xdUQ3Umh3d1orK2VVWHBrNmRpbHF0WnRxMGFVeWJObzIzM25xTDIyKy9uYXpjSWk2Ny9pbitlc2VWL1BQUittRWgvUDI4dVc3K1ZLNmJQNVgxbXcvdzJMTkxrWStXRWFvMGNiakFnTVZtSXlaQXhmL21SS0ZST0c1OE8xcGs1TEYxQlZRYXJIaDcyM2ptbFpYSXNreE9YZ2xGSlJWVVZPa3dHRXhucy8vK21acGFQVVg1Uld3N0tSSHNyU0RVVzBHNHI1SmgwVnA2aFRuLzYwWlpyWVVObVZYc2Y5cUdseHJBSkFhblFDQVFOSURURElBUzd1L3VLQkIwWlBwMGhjTkhqcE9UbWNJOWw1cjQvbjZUVXpMM3RwUTlLUktUSDFRU0ZobEdnQ1N6WS9OdktKWGVxTDIwK1BqNDR1ZnZSMEJBSUQ3bkdhWUV6a2RXeUZqTTlZMEl0OTEyRzQ4ODhvZ1FUaE04OTl4ei9QM3ZmK2VISDM0UXdtaUMrUGg0Tm0zYXhGdHZ2Y1VUVHp6Ujd0NkFzaXp6eGh0dmNOdHR0N20wbmkrLy9KSXhFeWU1clB6K1E0Znp6c2M3aFFGUUlQQWdMdThETCsvVE5maTNSWmRONUQ5TDY3eitLaW9xbURadEdsT25UbVhod29XTUdERUNYMTlmTkpyNkc3YVgzL3lDSHNreDNMRHd3bEFEaDQ5bDhQR1h2MUZSWXlRd01KTGRHZG5NN0JuRWlFZ0ZiMnd2YlpIeHI4cGdKYVBjUkhhRmlkd3FNN2xWSnZLcnpGUWJyUlJVV3pCYjY3UTdpOFdLcjQ4M280ZjFJaW84bUxEUVFBSURmT29aTi8vTWdTTnBQUEhnYzl3N1NFVlpqWVVDblpsaW5RV1ZpN0lDdjd1M2hIOWNaajFqL0JNSUJJS09oN05XVCtFQktCQjBFRUw4WWZVVEJzYjBBVlU3enV3Z1h4dEwvMkpDcGNoQW9jakFZb0ZxUFpSVUtza3NWbkg2dUlKRGhSS0ZaVGFVYWkwaFllR0VSQ2JUSlNhR2lNaEkvcCs5c3c2UDZ1amk4THNhZHljS3dZTkRjSGQzTFVXS2xrTGJyMEFONmdwVld0cENDeFdndUJSM2QzZjNZSEdYVGRidTkwY29KU1FrbTJRM0F2TStEMCtiM1R0ejU4NDlkKzZjMzU2Wkl4ZDcxcGtObFVwTm1rYno2TzgxYTlhd2MrZE9WcXhZSVRvbkY1bzNiODcwNmRQWnMyY1BMVnEwRUIyU0N3cUZndkhqeHpOczJEQm16SmpCTDcvOFFuaDRlSkczdzhiR2hvVUxGOUtyVnkrTG5pY3lNcExFeEVRY0hCMHRkZzRIQjBjTWFrZHV4S1VTN0Nwc1RQRHM4ZUZPR1FZajFQS1c4SGNDRHp2d3RBZDdFOFdicEF4d0xHRkw1TlVLeU1oSVI2ODNvSHdpbFd4bzdVcU1HdHlSdVFzM1AvcHMrL2J0Yk4rK1BkYzY1eTNkbnFNQXFGQXFHTkt2RGJPL2ZnMmxVa0dhSm9NcG44N2wxMzFIa0lCTDBSblpvdXcwT29tYjhWcHV4R201SGEvalRxS09PSTBCSnlzNS9rNHFBcDFWVlBHd29rMDVPeEl6REh5Mk8rYVIrSmM1bjFEU3NuRjFXalN1WVZwL3FGVm9wVXlIMWRWV2dhdXRBandzMC9kSDdtbVFxVElZMkZDRW9nZ0VndUpGSkFFeFcwY3FTbHFES0FVWm5nWFBJUzFMd0lyRmNqNDhaY214L3VHL3h5YnhhU2xjREl2aDBPV3I3RGx2dzQ2MUV0YTJEdmlWQ3lFd3VDTGVQbVZ5WEZvaU1BMHJLeXNTRWhJZS9mM0JoeC9pNWVXRmk0dUw2Snc4bUQ1OU9xTkdqZUxRb1VQQ0JrM0EzdDZlOTk1N2o3ZmZmcHMxYTlidzk5OS9zMm5USnJSYXJjWFBIUndjek1xVks0dGt5ZmI4K2ZPcFVObnkrNWtHVjZ2UDMrYzI4MkdMREdGY2dtZU9VK0V5UER6VjZKSmxyTHRqSkNiSlNFeUtFVTJHUkpvV1ZJck1mOG5wRWc3V21lT3ZUSmFaM0VJQ05EcDR1Nm1SMGZXS3JzMDZBOHcrSnVPUGt6TFNkRkM3ak1UaXZsS1daR3IxZk9Id2lVczBiVkF0Vy9udlAzMlpzNWR1Y2ZUa0ZaUFA2ZTJaODd1NlNnVi9xbFQ0YnhzQ1d4c3Jabnd4bnEyN0d6TDJmMS96dzZFNFJ0Wng0VVpjQnRkaXRZUWw2bEFyWkpSelVWUGVUVTN6SUZzQ25GVzQybVQzcnc3ZDFmRE4vbGdTMHcxWnIxK25JekhaOU9SRU50WnF0SHJMcDNGTVREZnkxK2xZZHIxYnlIT0oxN3hBMkVIcHBJVHAvc1pTWUVRaUFsRHdmQ0EyZFMyUk9OcEN3eXJRc0lxZU4zb2xBM0FuS29XdEp5SlpmZVFJbTFaSitBZVZwM3lWT2dTVkxZdE1MbTVrdnVZeE1objZoMHVBRHgwNlJHcHFLdVVyVkJBZFl3TFZxbFdqZXZYcUxGeTRrQmRmZkZGMGlJbW9WQ3I2OXUxTDM3NTlpWStQWi9ueTVjeWZQNThEQnc1WTVIdzlldlRncjcvK3d0blp1VWl1NzQ4Ly9xU0xoYU1NQVNxRmhMQnN3WFloQUFxZVNXcDRTdngwTkozZEg3amc3NWIvOTNwMGtwSGVYeVV5cEpZUjYzeDRNbGRpNE85VG1SbDhYV3hNTDNmaVBveGFLNmRsZFN1V1RiYkIxVjdHU3o4bGNTcGNSNTB5L3gzWHIzd2lpNWR0emxFQXRMRldzM0hSWjdUb09aa0xsOFB5UEtlOW5RMGZUSHdoeitNTUJpUG5MOS9tMFBGTEhEeDJFUnNIUis3Y1RlTzM0M0gwcStiSVlIOG5BcDNVS1BMb1pvTVIvanFWd0lZcnlTUmxHSFAwc1NYSmRFOWJxOU9qVWxoMnppWUIzeDJLNXJPK1Jud0wrN3VtRUg0RXdnNEVRaFo1QmhDUjRBSXhvSmM2QWp4aFZDY2o2ejlLNXRhZktYelkvVFQ2dTB2NDY1ZHA3Tnk0aXFqSVNORkorY0RXMXBiSXlFaCtuRGtUVHg4ZmFsU3ZManJGUkQ3NTVCT21UWnRHZW5xNjZJd0M0T0xpd3BneFk5aS9mejhuVDU1a3dJQUJab3VtdExLeTRydnZ2dU9mZi80cE12SHZ3SUVEMkRuWVkydG5oMDZySlQwOVBmT2ZSa05DZkR3SjhmR2twYVkrK3R4b01CVDRYSFoyZHVnVnRrU21DRHNTUEh0TWFDaGhsR0RJckVRUzAvSS9XZmR3bE5PM2tUVWY3bno2ZUJLbmdkUGhrUEhZd29OeUx1RHJDQzNtd01BbE1QOFVYSXZOakN4OEdyOGVrekZpcllLWm94eDVyN2N0cnZhWjU2emtwK1RvWGRoOUUrWWVnemMzd2F3akVtdTJIU2NtTGluSHVwd2Q3ZGo5ejljMERxMmE2L1ZWQ3ZaajE2cnBWSzBVbUdkZmRCZzRoV2t6bDZMVjZYbDFaSGZPN1B5RnBKdHI4UEwzSXpyVlFEbVh2TVcveTlFWmpGNzlnTFdYY3hiL0FGUktCWXA4Q0hvYVRRWldGdll5RjU5Tm9HYVFsdjcxemVEd0NUOUJJQkE4empPc0k4bXVYS29pWlJ2L0hrN1FwVWVmeWJJUGpwSU1aRTk4OVBpeGp3bzhyT1ZobmJJOFIxcFp0cTljRFJHNFNCRUZHNXhsaGZ5K3NPVXNYYjk0ZVptR0hnZ1QzVkNhMGVsaC9SRVozNjZ5SlRyVmxzcTFtaEpTdlJaS3BRaGt6bzE5dTNieTZpdXZNSEhpUktyV3FFSFBybDBaTTJhTTZCZ1QrZmpqajdHeXN1S2RkOTRSbldFR3pwdzV3N2h4NHdxVk9iaHUzYm9zV0xDQUtsV3FGR25idTNYclJrUjBOSGZEN3FCU3ExQTh0bCtwdGJWMTVqaWwwMkY0S1B4cHRWcU1CbU9XbWFUYXlncHJheHZzN08xd2NIREV3ZEVSUnljbkhKMGNjWFZ6ejVJeGZmK09iUXozMk1mUVdnWmhPSUpuam5JejRiUHg4T3NTSlVzbU9LSE81NnRjYjRRKzN5UXl1YjZlbmcvMXREUWRMRGdOYzAvSVFTN0R6MDNCcFh0NjJnWkw5S29pMGRBZjdOU1pndCt4KzdEdEdoeTZBMkVKbVc2S3AxM21mb1JXeXN3cDlmRndPZVY4bE13Y2FZK2RWZFpKOWh2elVyaDFONE9hM2xEZURTcTZReVVQMkhoZHpYM3Zqbnord2RPVEVXblN0Yno4NW84c1hMa3p5K2R1TG81TUhOZWIxMGYzeE5xcWNOa3N0RG85dlFkUFFSMS9ud0ZWYmZHeVZ6N1JmeEtud3ROWmRDYVJ1NGw2RXRKekgyY2M3RzFaL2RjSEp1OEIrRzhTa1AvVlZsbkVmdmJmVG1QYm5jeWx2eXB6N0JUbEsvd29BUkFBcUVRM1BCV3BpTXJrcDV5bDZpL2d0U2JJUEloVitPWlFsNVRyaVI1OUswbVBDVHZTWTBkSjJYUzNUUEZOeXRabTZlSC95QjZyOC9HekN3RlFDSURQQjBiZ2x1aUdaNFdiNGZEek9tdVc3MU5TcFdZRGFvWTJmdVNBQzdKeTRleFpybHc0ajRlM04zSzVuSGZmZW91MmJkdUtqakVSalVaRGFHZ29HemR1SkNBZ1FIU0lPWVpqbzVHdnYvNmFLVk9tWURTYXZtK1RXcTFteXBRcFRKa3lKWXRRVmlSanpzMmJkT3pVaVlGRGh4WE9LYy9JUUtQUmtKcVNRbkp5RXNsSlNTUWxKcEdZbUVCc2RBeDZ2UTRIUjBmYzNEMnd0cmJHTHZvSUcxOUlRMnhES1hqV3FENEx6djBEWDgrWGNlQ0lrdDlHT3BMZkZhT3h5VVlHLzVCRWVXY2pDamtjdnkramUzMHJocmUweHNzcHN6S3RIblpmMUxMampKYVR0L1FnU1lSNFNnUTZRNENqaEowcVV4UUVDRStHaUJRWmgrL0pPQjhKSC9lM28xZjluSVc0MS81SVpsSWRiWllsd0pDNVYyRG83dzRzV2ZnOUZjcVd5Ylg5di95NW5qYy9ua09kR3VVWlByQTlBM28weDk3T3hteDliRFJLTEY2NWd6bC9ydWJldlFoYzFCSXlKR0xUREk4RXY4UjAwOFpnUjN0YnRpNzdnbnExS3BwMC9PRVRsL2oydzI4Wlg5UDhZL1hGcUF4bW40eG0zMVFEcm5abXF0UlBQSk1DSUJDeFFWcHVDQUV3enpMUG5nRDRlRTFGS0FBNlMxRzRHUjRJQWRCUzUzb3VQRTZFQVBnTWtxS0JuOWVybUxWT1JkbEt0YW5idUNXMnRyYWlZeDd2bytSa3ZwOCtqWmZHak9YOG1kUDhQWDgrRlN0V0ZCMlREelpzMk1EdnYvL09xbFdyUkdlWXVWOTc5ZXFGVHFmTDg5aVdMVnN5ZS9ac0tsV3FWQ3h0SGZ6aWl4aGtNaW9XUVFLUXBLUkVZcU5qdUhjbmpHUDdkeFBnWkNEQUNWcVZnL1lWb0pZUFFoQVVsSG9hL1E3Yi93STdHM2puUjdoeFhjM1B3eDN5TFFJYUpUaHhVNCtWRWlyN0t2T01KRXpOa0xnZVllQituSkh3QkNOcDZSSWFiYWF2WWpEQ3pnczZmRnprZkQvVURqZUhwemZtdGQrVGViT2VsbG81SkQzYkh5Ymp6VVArN0ZyM0V5cFY3ZzFLVFV2SHp0YXlQMkJldUJ4R203N3ZFQk9YbUs5eUhuSUZGUlJxYWlpdFdHZlVzSFBYTHdRSCtaaFVkdVAyb3l6LytWZUdWVldiOVZxdXgycjU5bEFVbTk4MFVNNWNXWVhsUUJueFRBb1FBbUJlQ0FFd3p6THhNbS9pRk40NTFHVmhBVENMRHBpN0FDZ3ZEanZJUDdLaVBKbmdXVVE0Uzg4azlqYndkajhkVi85SW8yK053NnljTjROOU96ZWp6UkFiNXovcUl3Y0hnaXRVd05mZm4vaTRPQUlEQTBXbjVKTXVYYnBnTkJyWnNHR0Q2QXd6OSt2Q2hRdHpQY2JMeTR0NTgrYXhjK2ZPWWhQL3JsKy96dEdqUjZsWXFYS1JuTS9SMFlteXdjRTBhOVVhTDNjbmpyMENzM3FDdXgxOHZodENmb0JKRytIa0EyRkRnbEw4YnJLQ1ZFM20vMDk3RFlLRHRZejdNd210UG4vMXlHVVFHcXlrUnFEU3BHWEVkbFl5YWdZcTZWeGJ6Y2hXMXJ6YXlZWkozV3h4c1pmenozRXRFenJhTUgrOFE2N2lINEMxU2ticVU1S2NOdzJVNk93YnpXdnYvSkIzZXl3cy9zVWxKTk4xeUFmRXhpZVpYTVpLSnNOWHJtU1pzeSs3WEFNWVpldU1UQUlmTDlkOG5EY0ZPN2w1c3dCZmpkWHl6Y0VvMWs4MG8vZ25FR0JPWlVUdzNDS1ZubE9WQ2pNM2lxZFJVRmlFQVBoTW8xYkMrRzRHcnN4TnBXUDVJeXlhK3gybmpoL0pWOGE2WjVsMm5Ub2prOGt3R28xWVdWbUpEaWtBUC96d0ErKzg4dzRhalVaMGhobnAxNjhmUTRjT3pmYTVTcVhpcmJmZTR1clZxd3dkT3RSc3lVTUt3dVRKazZuZnVFbXhoTjE1ZVh0ekxoTEt1c0RJZXJEaUJUZ3hIcG9Id2NjN0lQUm5tSGNTdEdLYlFFRXBmRzgvTHZaTmV4MUM2K29aTURPQnFFUmprYlZqN3lVZDdUOVA1RnFFZ1cxVG5laFJ6N1NJTlFjN09mRzV2QTdlYTZwQkgzYUUvNzM3QXdhRHNWajZPRTJUUWZ2K1U0aUtUakI1UG1RbmsxTlpZY1ZSdHlBYXF6S1hJenZLTXYwd1d4dlQ1dzhSVVhIWXl2Vm11NVlMVVJsOGZ5aUtqWk1OVlBRV1BvSkFJQ2laR09XS0V0L0dVcUtzaVpGWjhQeFl1NkJ3RHNYYi9iU2MrU1VGSC8xMkZzNlp3WU43OTU3N2Z2SHc5RVNuMDJGdlp5ZU1wSUFFQmdZeWVQQmd2dnp5UzlFWlp1YXp6ejdMSXZEMTY5ZVBTNWN1TVgzNmRCd2RIWXUxYmZ2MjdlUDZ6WnNFVjZoUUxPZTNkUzNEamJpc2N5QWJGZlNvQ211R3dPb2hjRDRTdnRvcjdLaWtvRFBBcUZXUUtKS0g1MHBxUm1ZVS8rTzhNMXppclZFR2VzOUlZTlV4eTBieUg3aWlvLy8zU2N6YWxzN01sK3o1YXJBZFRyYW0reHVWZlJXY2pYejY4VElaL040bEJZY0grMm5SNVJXMjdUbFpwRDlLYW5WNnVnLzVrR3MzNzVPaDFabFV4bDRtcDZwU3pXNVhmOXdmYzJJMWtvUThuMnV6YjkrNmg3ZTllZFpTN3IyVnhxOG5vOW55cG9FS1hzSS9FQWhmVVNBb0RLVmlsYnNCaGJoVGdzSWpkT1RuQmhkNytPMzFOTTdkU21QWXQvTzU1RnFacG0yN1BOZlJieW5KeVhoNmVRbmpLQVFUSjA2a1FZTUdEQmt5aEFyRkpBZzlpL2o3KzlPb1VTTnNiVzM1L1BQUHFWKy9mc21ZZXhnTXZQTEtLelJyM2FiWTJ1RG83TXJWT0RXUXN4amk2d2hmZHhJMlZKSlFLYUJKSUhUK0M3YU5CRnVSVVRKSHRFWlE1OUEzWFp0QmFJakV5STlUMlhsUnl3OUQ4cjh2NEZQUHFZZitNNUs0RTYvSDFWN08xNFBzcVIxVU1GZW9WcENTYVVleTd0R1ViZG9wZ3k5YXBYSStNcFd2ZnZpS042ZW9hZGVxUHMyYTFhTm1TRG44Zk54UktNeXZPS1JwTXVnLytuTXVYZzFEazI2YWtLcVN5UWhXcU5qcTRvK3RMR3Via2lWanZxTC9BSzdkdUV0VHY4SzVtUkt3Nkd3Q1Z4T1MyVC9WaUl1bGZzTVUvb0ZBMklIQVRCaDVaaUlBaTNJWm5WaXlKeEFEdThBOFZDOEx4MmVtTXFEdU9SYk5tY0h0bXplZjI3N1FhTkx3OUJDYjVoUUd0VnJOdDk5K3k0UUpFMFJubUpuRml4ZXpiZHUyRWlQK1FlYXliemNQVHp3OFBZdXREZllPRG9TbmloOUJTeUo5RnNLY1k0L3QxLzBZTDlXRmZ0Vmg2UEtjdnhkQVNqbzhiZnM3TDFkWU4wUEN3MGZMeksxcEJhcGZiNFN3R0NON0wrbjRiWWVHY1g4bDBmcnpPSnpkZFN6K1VzTGV6b2kxcXVBVHd3cmVDbTdGbXhicFdjMEw1bmRQNHZDd0dGcm9ObkY0MGZkTUdET1IrczBIVTd2Smk5UnRQb3hXM1Y1aC81SHpoZTdYMlBna09yL3dQaDFhMWVYaS9yblVyVkVCbFRMbk1VUXBrK0VtVjlEVHlwNlhiWnpabklQNEJ4QnAxT1BsN1phdmR0eTZHNG1IWGNFRndHU3RrWTkyUm1MdGtNek9keXdvL3VYREd4WUlQMUVnS0pnaGxTd3RyZUFqczB3cXNpZkZLQ0lBQmVJRkx5am9iWmZCYXoyMGRHdWdaZEMwSmR5NFhJVVc3YnVoVkQ1ZmFiNDBhV200dTd0bitlenUzYnY0Ky9zTEk4a0hyVnUzNXZmZmYyZjU4dVgwNjlkUGRJaVpDQWdJS0ZIdHVYYnRHai8rT0pPQnc0WVZhenZVVm1vU01zUWNxQ1R5ZXgrWXZCR1dub1UvKzRLL1U5YnYvOWNrTTFITG5HTXdwcjdvci96T3lXUXkrR0lDMUJxWVRydHFWb1Q0S1VqV1NIeXlPb1dvcEV6eHppaEptZnNJeWtDcms0aExsc2pRWjJZR1Zpb2svRHdoT0FDcUJrdTgxUWxxVllKL3RiQ1hla3BzTzU5QkZWL2JBbC9Db0dZMmZIY3dqWTlibTdpL25ocDZWSkhvVVNVNTZ4Y3F1S3lMcHZmRUwxazg5M09xVlFrcVVIdU9ucnpDbU1rLzhNR2t3ZlR1MGdTQVBXdStvVkhuLzNIbVF0WWZRRzFsTWdJVktqYTYrRk5HbnZ0OEtNeWdJNlJPRFpQYkVSMmJpSU5hWHVESXpiTVI2Znh5TElZUGV4bDVzYkZVN0xZb0VHT1NRR0FxaHFJMEpGbkJ4c2RTNGdFTFNWNGd6RWhRT01wNnc2SHZVL244cjNQOFB2Y1duZm9Nd2YwNWlvalQ2L1U0T0RnOCt2dllzV09rcDZjTEFiQUFmUFBOTjdScDA0YU9IVHRtNlZQQnM0SFJhR1RJa0NHMGJOY090VnBkckcyUnl4VVlSUWhaaWNUWkd1YjJodldYb2MxY21Oa2RPanl4TThCUDNhSGhMT2dka3BuRldaQkp2QWFjVE9nUGUxdFlNazFpNGplSkpLZktTTmRKdkRWY29sVTlTTmVDWE02anpMKzIxdUJrRDFZbVByTE5hOE80ZFRwZTYxRHc2eGplMHByT242ZlRzN0tCMm1VSzBTRUtxT3dPUzBja01IRFVWR1orL1RZdEdwc3V1R2wxZXFiOXNKamZGbTVHbzlHU21QUmYxS1JhcFdURHdrK3AwZkpsNGhLU0gwMkhQZVJLOXJnRzRpVEwyMWs5cEUrbmY2dTZKcmZuOElsTFZITEovdzhYR1hxSmVhZmp1WjJTeHBhM2lqRFRyeEIrQk1KUEZEeEhoaVF2RFoxUXF2Y0FGS3Vubnl0ckY1VHdJVmtHNy9YTllPbUlPRFl2bThPRnMyZWZtMnMzR0xKbUFQNzQ0NCtwVmF1V01Jb0M0T1BqdzhzdnY4eEhIMzBrT3VNWjVJc3Z2c0RLMXBhQW9DRFJHWUk4NlZvNWM2Ky85N2ZCejRlemZ1ZG9CYTgxZ2hrSFJUODl6dlZZS0c5aTBHKzlxckQzRDRrRDg0eGNYQ254VW5jSUtnT1ZnNkJpUU9iL0I1VUJUMWZUeFQrQTh2NXdQOVpBWVJMMHFoVHcyOHNPREZrbFovNHBDbDdYdy9scGRUK0o5ZVBpK2ZEREw1ajAva3hpNHBKeUxhYlY2Vm0wYWhlaHJVZXhkZjA2cWpwa01LbStIUjkvUFkvcE01YzkrdkhBMjlPRnQxL3RqL3FoV3VvbVY3REVxWXhKNGgvQWNYMEc3WnJYTnZseU5tNDVSRTIzL0RrbEp4Nms4L3FtQjlTdGxNTEI5NHBRL0NzZC9ycEEySUhRTkVvSjVsbTVhbGxqVkFwckZvaUJYZkJjSVlmNlpTVk9URTJsOSt4MTdMaDNrMVlkdWlGWFBOdkw3UFE2SGJhMm1VdWRIang0d0xsejUwVDBXaUY0NVpWWGFOU29FZWZQbjZkYXRXcWlRNTRSOXUvZnovd0ZDK2ozd3VBUzBaNk05SFNjckl6aXhoU0NQMC9LNlZ6UmlKZTlCU2I2RXB5NEQyY2paWFNxcXVLN0F3YldYSWFCMVkwRU9VdFU5NFpoZFRLakFEOXJKKzdGdjF5TmhmSmw4MWZtYWZzRkZvWWFGZURjSFQyMWdncnVEcFgxVkxEcVRTZStYYWZoOHgrMStEbURteTM0T1VwMExpL1J0cnhwODVKSDlYbkE3b2xKekQyd2s5WmREMUs3VmhVNmQyaEI5Y3BCMk5wYWs1U2N5dVhyOTlpNzd4aDdEcDZrZVhrOWlvdzBxbms3TUtDNkV6SWd0SXpFYXd2VzBUaTBLczBhWnI2ZnhnM3Z5dlNaeTRqWEp0TlFaVU1kbFdrZGV0ZWd3OGZmRTNzN0c5T2VDYVBFenIwbitiR05hU0d2NGNsNjVweU13OG9xZ3kxdkdZdFcrTXVoL3dYUE1XSzNEY0Z6Z2pJdnZhUWtDTENTVEl6TUF2R0NGNWlKaDBLd2l4M3NtSmpHdS8rY1krWGY0WFRyUHh4ckc1dG45ckt0cksxSVRFd0VZUGZ1M2ZqNStRbGJLTXpMVTZuazIyKy9aZUxFaVd6ZHVsVjB5RE5BWkdRa3c0WU5vM1BQWGloS3lCNmh5Y25KMUhBd2lKdFRRTGJma1BQMWZqbURhNXBmUkoxOVhNVzAvVlo0K2Z2ajdsOGVlMjlIR3ZSUXNtZnJkcjYvN29hYm81cW8zZmZRcENTank4amd4ME1HUnRhVnNGT0wrM0loRmhxVWdIMFJXOWFYT0h4RFZ5Z0JFTUROUWM0WEw5Z0Jkc1FrRzRsTGtiZ2JhMlRPb1hSMmgrbjRySTJVTCtGQklZZXh6VElZM1RTRFBaY1BzMmY3V2RZdlZwR21sZU5nRGVYZGRmUUtUS0ZmUHhqMXU0S1J0ZDFvNlAvZi9FV2xrREdsdmhWdmZUaWJRMXQrQXNEV3hvcXFsUUs0ZXV3eWsrMWNUYjYyTmJwVWV2YzNQZFg0am4ybnFPeXV3a3FSKzYvdThSb2pzNC9GY1RZeWpYSWVNcXhsOE5WR0djT2JTalFNRnY2Qm9QajhBNEdnTUpTVWxhdTVtWE9waUFDVXhCTXBFQzk0Z1FYc1FDNkQ2YjNUcVg0NGd2ZisvSm11QTE3QzFjM3RtYnhzcFZKRlNrb0tBRWVQSHNYYjIwZllRaUZwM3J3NUxpNHVyRjY5bXA0OWU0b09LY1ZrWkdUUXZYdDNHalp0aG91cmE0bHBWMEpNT05XOU04UU5LZ0N4YVRCMGhZS1ZnM1NvelR3Zi8vdXNrbGxYZ3hnNjZTV3NiYkpHVWxXcVdvVTVQL3hFMDdaOWFCOFlpTUZnWU5YQ0pjd04wL0R0MFhzMDlqZnlSdjBVNnBlaTMyQ1NNdUNMM2RDeUxIU3NXUGo2VGtmQzJJckZmMTB0NjhMazdWcGVibU8rSC8vY0hlUzRPMEJGSHdVdHE2cG8vV0Y4M2dMZ1UrYW5jaG0wcWdLdHFtVE5oR3d3d2llcjVTdy9xdUREbGg3NE9hcXlsZlYzVWlGcGtybHpQNW9BMzh5d3VyWXQ2bkQxMkJVYXFreU01Z1ArbEdld2VhRHA0YXMvekZwTzUxeHMrK0FkRFl2UEpSS1pyS2VpdTVyZVZaeHhzMVdna01tNGw2Umo4QytwU0RJanExNHpVS3VvY2tNSi8wQWc3RUJnTG1RbFg3Y3FKUUtnM0pLVkM4VmZET3lDNTRrY0hNRVhHK29wNzVsQS85OStvMzN2SVpUeGZmYWk0MnhzYllpSWlBRGc4dVhMbEN0WFR0aUNHZmpxcTYvbzBxVUxuVHAxeXJMSG9xRDBJRWtTdzRZTnc5M0xpK0NLRlV0VTIrSWVoRkdqdHJoSEJXSE1CbHRDZzZCUmdNNHM5ZDJLaDlNUDRIcUNrcjh2MkZPL2UvdHM0aCtBU3EybS83QVhXVGJ2YjE2ZTlEOFVDZ1VPVG80RVY2eEwrY3FWdUg3bEtxTjNiY1ZHRzgzbkxWTnBFMXl5Tnp0YWZ4bmUyZ3l2Tk1DMDVheW05R1VjQkphQTM2QXFCOEdOQ0FOR0tWTnNNd1dkQWVidnllRGlQU05kNmlocFhVMzE5T21HSEd5dFpjUnJ3TVVtZi9PU3AzRXZIdnIvSk1mWDFvN3ZPcmlneWlYU3JycTdrdU9ucno0U0FMMDlYUEJYS0UxMmV4Wm1KTk8wVlIyOFBWMU1PdjdJaWNza1JqeWdhckR0RTJNc3JMbVV6TElMU1FRNXF4aFJ4NWxhM3RZNStzbURhenB4Nks2R3R0TmpXZm1hZ1JhVmhIOGdFSDZpd053VFAwdFdYVnFUZ0JSM3hqbXA5SFdrUUF6c2d0SnRCdzNMU2V4NEk0V2RxK2R6NDlyVlorNnlYVjNkdUhydEdnQTNiOTNDdFFSRk9aVm1BZ01ENmRPbkR6Tm16QkNkVVVxWk5Ha1NkeDg4b0c2RGhpV3FYUWE5bnZqWWFDcTRpWHVVWDdiZmtMUDZqSVp2MnFZVnVBNnRBVlpka05GM2hRTUJNK3pvdFQ2QVdUR3RPT3pVQjcvYUxkaTZiZ1BwbXZRY3k3cDdldUpmTm9qTDV5OEFFQjBaaWF1N0d6S1pqQXFWS3pGZzNLczA2RCtPeVVlRGFmR1hIUmVqU2w0Zkdvend4b2JNeENZN1JzS0VScUEwd3p6cWFnd0VsNkRmMkdwVWhMTmhlcE9PTlVvd2NFWUt1ODlhNFdudHhlY3JEUHl3TWZjSTNaYlYxR3k0a2tmRkpncUFmeCtVMGV3ekJWM0x1Zk55cUd1dTRoK0FqNVdleTlmdS9IY2F1UXd2dVdteEh3K01lcjVSYVBqd2s5RW1IYS9UNlJrLytUdUdWMUZtY2VkV1hFamloZVgzT1JlWnp2VDJubnpSenBQYVB0YTVCc2swOHJmaGcxWWU5UDFSUVpwVytBY0M0U2NLU2cvWkF0ZUsremUrSEhROVpTR3ZzRWlpNXlUeFJBckV3QzRvQWp1bzRBVUgzMDZsOWJmTDBldDZVYWxxMVdmbXNxMXRiSWlPamthU0pNSWZQTURSMFZIWWdwbDQrKzIzcVZ1M0xrT0hEc1hIUnl5dExrMTg4ZVdYN04yM24wN2R1NWU0dHQyNGZwMG1RZUlIMFB5U3JvY1JhOVMwcmFLa2dsdEt2c3VISjhPWEIyeFljMWxCdWFyVnFOZzhsREZCZ2NqbFdWOGVObmEyelBwMkJsMzY5S1JpbGNyWjZxbFpyeTdyVjZ6aTl0WHIzTDBWeHZtVHAzRnlkU1V3dUN3dXJxNTQrZmpRYi9RcjNMNXhnNjRybGpDZ1Vnb2Z0Y2pBcWdTc3pVbk9nSDZMb0o0ZmJCeG0zaFZOZTI5RGkvb2x4MTdhTlpJNGNNMjBmUUFYNzg5QWJyU2xmLzB5bVhNR1R6cyszM1NWbnFGS0FqMXlWdkc2MWJYaTYrVVp2RmpyS2Z0UXl2S2VuNGJGd3VnLzVCaTFWbnpid1EwbmE5TVVRMjk3QmNldi95Y0FObWtRd2dMN3ZDUFZZNHdHK3Vwam1UbjdUVHpjbkxKOWJ6UktEQmp6QmRQZUcwRndVT1k3Ny9WM2Y2SyttNEZnVnpVUGt2V3N1NXpNN2x1cHVOb28rS3l0QjhHdStkdjhNc1RUaXRibDdIajk3MlRtakxDd0J5MlNQd2lFbnlnd0U4YWlNcVJDNkhCSzg3ZEZRbVpTYS9MWGFpTUs1SWlOc0FWaVlCY1VrbjhuMjArWmkzczd3WjQzMDJqei9UL29kRHFxMWF6NXpGeTZwNWNYaHc4ZkppVWxCYlZhN0VSdkxteHRiZm53d3crWk9IRWlpeGN2RmgxU1N2ajZtMjlZdW5RcFhYdjNRU1l2ZVMrSWEyZU84bjNEVkhHajhzbFhCNnk0RzVQT2dsNzVteGtucHNPN08yM1ljTU9LMEZZZEdkbXpEc3Bja3NIVXFSK0tYMEFBRy85Wnc4NU5XMmpkc1QwVnFsUkc5bEF0UzB0TkpkRFBuKysrL29hRWhBUU1CZ09uVHAxaXk5YXRoSVdGVWFGS0pTcUVWQ0VvT0ppWEpyM0RnVzFicUR2bkVQLzBUeTNXcU0rWVZPaStBTWJVaCtGMXpGLy92dnN3cmx2SnNaZVdkV0hjQmkzajIrVzlMOTc4dlRvRzFma3ZmRkdsa05HNmtnZC83MHRnYXUrY1ZhU3FmZ29lcE1pSVNBWnZoeHdPeUVWODB1cmhxNDF5L3RvblozZ3RWeHI1NTIrdlFoOEhKZGN1MzMvMGQ4VnlmcVRacWJtZnBzZFhrYk50SDlacEdDOGw4Y1UzRTJqVkxPZjlCOTc4ZUE1bEE3d0lEdkpCa2lUZS9YUU9OMDZmb29xamdmOXRqQ05PWTBTak16SW0xSVcyd1hZRmpoVVpYTk9KSDQrbmdxWDlQK0VmQ0lRZENNeEUvZ0xYSkJPUGtwNVBVemVJcDFJZ0JuWkJFZG1DaHdQc2V6T05HOGZYYytITXFXZm1zc3RYcXN4Nzc3MG43cjhGR0Rod0lPSGg0ZXpZc1VOMFJpbmdrMDgrWWRIaXhYVHQzUWVGb3VTRmY4VEZ4cElXZTQ5bVFlSmU1WWVZVkpoNVdJNmZ1dzB0eXBvK1lmN3J0Sklhc3gwSTkrM0M2TGZmbzA3RCtybUtmLy9pNmUzRjhIRmo2TjYvTDJkUG5PTEU0U09Qdmd1dVVKNklxRWdTRWhKbzM3NDluVHAxWXNxVUtlelp2WnNybHk4emJ0UVk3bDY1d1o4elozSHV4Q2thdDIxUDA3NGphYmZRaWFYbmk4Y21FOU9oMDE4d3VabGx4RCtBRS9laFhna0tyaS92RC9kakRlanpTQlN0TTBCY2lvU2JmZFk5LzZyN09uRG9hdTVMaVBzM3NXYnVpYWZJWURuY2FrbUNoWWRrVkp1cTRHcVlBejkyS3BOdjhjOG93ZnpUaVlROWlNM3krVmRmdjhZZ1F4ekhkUDh0WDQ4eEdsaVZua3h2ZlN5ZitWcXhkTzFYZE83VU9JZDJTVXo2OERlaVloS1k5dDVJcnQxNlFKdGViN0p5OVM3Q1k1Skl6akNRb3BYd3RGTXdxN3NQN1FvaC9nSFlxZVdFeFZyWUFFVDBuMEQ0aVFJellTd2xBMHFwTVhWSnBoUldKUkF2ZVVHUjJZS1REZXg5TTQzcnh6ZHk1ZUtGWitLeUsxU3FSRXhjbkxqL0Z1TG5uMy9tZi8vN0gxcXRWblJHQ2NWZ01EQmh3Z1EyYk5wRTV4NDlpMVQ4MDJaazhNZXNuMGxOelR1cTcvRE96WHphU2xNYWtzbVZLRDdiYjR1Tmt3Y2o2aGhOT2o1ZUExMFgyL0h6amNvTWVlTXRRcHMwenJiVTF4VEsrUG5TZDhnTDFHdjAzejZTS3JXYXZrTUg4OHI0OFh6eDVaY1lqZisxeWNyS2l0NjllN051N1ZyMjd0bERXVjgvL3B3NWkvallXQWEvTm9tUGp2cnc0UjZySXQyU08wMEhuZitDL3pXQjNpR1dPY2Z0ZVBEMkFHVUptNCtGaHNDSm03bUxlSEVwUmx4c3N5ZjhjTEZWRVoyY3U3ME5hR3pGMzJka2FBMjV6MGVNRXF3OERyVS9VTEI0cnkyZnR2SmhXRTFuckpUNUh3am1uMDdBU2lIRHkxNUpWRXpDbzgrYk42dkpUNHMrNXZ1S1R0UWpscnJFTXNCWng1bmU5ZmhvMFFkczJ2SURsWExZcERGRHEyUFlhOTl3NTE0VWRXdFVwRld2TjJuZmV6SSs2UStZM3RLQm9iV2RXSGM1aFk0VjdQaTZveGZ1dHVhNXlYWldjbElzbVFoZGlENEM0U2NLekRYSExDVURpb1ZiS1pud2lXa1luN2NSV2hJUGtYakpDNHJiRnB4c1lNZkVOTTd1VzhQMXExZWVpVXZ2M0tNbjFXclVJRllJZ1dZbkpDU0U3dDI3OC9YWFg0dk9LSUVrSnlmVHFWTW5MbCs3UnZzdVhZdFUvSk9NUnRZdG5ZY3VMUWs3Tzd0Y2o3MTI1UW9PNldIMERUR0ttNVlQWWxKaDdUVTFkaW9kUTJ2a3JSaWNpNUJSYjQ0OWRyVjYwbXZZQ0d3ZnV5LzN3dTZRbEpoWTZEWTVPVHN6Wk54b3R1N2NRYlBtemJseDQwYTJZM3g4ZkpnK2JUckhqeDNEemQ2SjVmUCtwblhQZm14SnFNcUlkVFpGSWdJYWpOQjNJYnhZR3diWHN0eDUxbCtGTGkxTG51MjBhU2l4NzBydVA5ekllUG95ckx5MlBySzNsdEc2dXBwbDUzTDRVZ25KNlRCcnA0eHFVeFRNMjJuSHhBYmV2TkhJdmNBaVduU3Fua04zTkl5dTUwSlZWem43RHAvUDhuM3RtdVZadW1vYXAwN041L1NwK2V6ZU00dlBQbitaMnRWelR2Tjg5MEUwalR1L3pvMXpGN0NOdmNYZEhXc1k0WmZBbjUyZEdGM1hpUzNYVXZobVh5d2Z0L0dnYjRpaldiZUhkN2FTRTVOc3dac3ZSQitCOEJPRm5tR3V5eTFnd0pwVXhKMVhlaUlBeFZNcEVDOTVRVEhZZ3JzOTdKNmN5dEh0SzdoMzUwNnB2M1NWU2tYVjZ0VXhHc1NlcXBiZy9mZmZaK25TcFZ5K2ZGbDBSZ25pNHNXTE5HcmNHQWRYVnhvM2IvRm9uN2FpWXNlR2Z5RHBYcDZKaFpLVGtqaThkVFdMZW91OS81N0c2K3R6bmc5T08yaE5oVHFOa0d1VENjNGp5Zm02S3dxNkxuT2k2L0J4MUF5dG0rMTduVmJMdkZsenlFaFBOOHVZMjc1N0Y2cldyVVg3amgzNC9QUFB5Y2pJTGxDNnVibnh5ODgvczJ6SlVnN3UySVZibVFDdUtXc3dhSlVOQmd0cndaTTJRZzBmR05mQXN1ZFpldzI2TlM5NU50V3VBZXpOUXdCMGM1QVRuNW85U2pBNlJZdVhVOTQreXRqMk5ueTFYNDd4b1U5bk1NS09HekRpYndXMTMxZHc3S0lqSDdYdzRmV0c3dmc2Rm03VjA5N2JhWFNxYUk5Q0RnMjlaU3hhdnEzQWRhMWF2NThXWGYrSG16NEJPN21PdU5SMC9PeGxCRHBuUmtPdXU1ek01bXNwL05MTmh5b2VWbWEvTnpZcU9Va2FDOTU4NFY0S2hKOG9NQk5HRVFGb1hnemlxUlNJbDd5Z21GN3lYbzZ3K2ZVMGRxeFpTRXgwZEttL2ZHdHJHeUlpSW9RZFdLUnZyZm50dDk5NDZhV1gwT3Yxb2tOS0FIUG56cVZidDI0MGJ0NmNrT28xaXZ6OHU3ZHVvRXpHSlNwNjIxQ3V5dE9UQ21Xa3A3Tm00ZS84M2owVkh3ZHgzM0lpTEFIT1JXVVhiMU8xc09LaUNtdGJPM3BYemwzSStldTBtamQydXpQNDFUZndLcE56MXU2eUZjclRxRVZUMWl4YlliYTJseTBmekxCWHhuTGs5RWxxMTZuRCt2WHJjenl1VnExYUhEMXlsR0MvQUZKU003aG5VNE5SNjIwdDFxZnpUc0xWR1BpOG5XWHZYWElHUkdzeTk5d3JhZmk0UTVyV1NFcjYweU11RkhMd2RKTHhJQ0dyZUh2dWZqTE5xK1k5cWZCemxWTTlTTVc0TlRMNkxGUlE2WHNGUHg2MHBhS2pHN082K2pHNGhqTnVabG8yZXl0ZVJ5VjNOYmNUZFB4MVBvMVQ1MjhRZGk4cVgzVkVSaWZRNTZWUG1QVEJMSG8wOW1meXFHYjgrRzRuSm8xcXdkNEVOVCtmU0diWHpWUVduVTFpZWdjdlhHMHQ0NmRwRFJJMmxzeFpKdHhMZ2ZBVEJXWkNFZ0xna3owaUZiSkR4UWd0S0NReU1iZ0xDajdoSys4SnE4YWxzbjdaWHlidDRWV1NzYk8zRndLZ0JXbllzQ0Z0MnJUaHd3OC9mQzZ2Zit2V3JiUnAwNmJZbjVNN2QrN1FvVU1INXZ6K08vMEd2NGgzR2Q4aWI4UGhQVHR3U3p6Ti9GNGFqdHd4NGg4WW1PTnhxYW1wckp6M0s1ODFUNkIxV1JHZCt6VE9SNEtIUS9aOTJINC9wYVJ5M1liY3YzS0dYcFcwSkdWQVFqcVBvcTMrNVkvVGFqNC82c1lMcjd5T3ZVUHVLbXU5UmczSlNNL2cybVh6YmYrZ1ZDcHAyTHdwUFFjUDRLdnZ2cVZwczZZY1AzNDgyM0VxbFlvZmYveVJkOTU2bTRpSVdNNW9BbmxuaDdYWisvUFlQZmgyUHl3YW1DbHdXWFJjdUE3dEdwZGMyMm9aQ3ZzdjYzSTlabFFiTmV2Ty9mZnVUTmNaMlgwMWhoZWJtYVpRdmRIVmhxMDNGYlF2Nzhtc2JuNjgxdENEVUY4YjVHWU9TRFpLY0RSY3l5OW4wNW41Vm50bVRHakUrTGRtWURBaGxOUmdNUExqbk5VMDdEaUJSbVVWWEo0L2dHa3ZONlpGTFYvSytqalNLTVNiSlo5MDV0ZzlEYjhkaitmcmpwNTQyMXR1bi9aMHZSRTdLd3ZlZU9GZUNvUXRDTXhFb1FQV2ltamozMndqdHZSUUo4bnJzNkpFb2dSdXFsamNuU0lvR0hKQWJLc2tLT0Q0WERkUVlrYmZaTjVkOGlkOWg3Mk1RbGs2a3hQWjI5c1RIaDR1N01DQ2ZQenh4N1J0MjVZTkd6YlFwVXVYNStLYWpVWWpuMzMyR1pzM2I2Wjc5KzUwNjlhTmYvNzVCeWNucHlKdGgxYXI1ZnZ2djJmMjdOazBhOVdhQnMyRGk2VS9EdXphaXZ6K0VaWU9UbWZkRlRsQkZTcm51UFQ0d2IxN2JQdG5FYk03cDlDcGdoRC9ub1pHQjV1dnE0aE5WekYxbDR4cjhTcnVKa3JFcFVwRXBjb1pPN2t4UDM5MWlMN1J6dGpaWkNvR2FlbGFKRWxDQm1oMEJsRFpNMmJpNjZqVi93azJxNWNzd3o4b0NLOHkzbHkvZkpYYk4yN1NhMUIvbkp5ZDZkU3pHOHNYTEtKQzVVcm1IWU1kSE9qWXF6c1A3dDdqeGFGRDZOQytBOU9uVGNQYU9xdkl0M0hqUmxLU2s0bU55V0Jsa2h0VjNhTVlXbE5ubGpiRWEyRFlDbGp4QWpoYlcvNytyYmdLcjQwcnVmYlZvWkhFUCtzejZGanI2V0plNy9wcU5wNUs0NCtEZDZqcTdjak9xOUc4MGRYS3BDWEFBR1U5RllRR0s0bEswVlBlMVRKaGJaSUVFZW5nN09mQ3RvOWJZNjFXVUJNNGZpV1dBYU0rWWRZM2IrRGg1cFREK0MyeGJjOUozdnI0VjFwVTkrVDQ3RjdZMjZoeVBNZlM3VmN4NnZYODBNVWJUenZMem9OaVVvMTRXL0lWSWtRZndiLytvYUQwSVpXMDVpaUt2VW1TQ1orWmRkU1dXZkErRkRnQ1VBaDFnaWRmOUdKVm5xQVFFNzdlZFF4Y2pvaGw1ZXFsZE9rN3VGUmV2cldORFFsbTJPQmVrSXVKS1JRc1hyeVl0bTNiVXJac1dhcm1zZmRiYVNjaUlvSmh3NFpSc1dKRmR1L2VqVnF0eHRmWGwxYXRXckZnd1FKQ1FrSXMzZ2FqMGNqQ1JZdjQrT09QS1ZlK1BBT0hEVWVsVWhYOTVNdG9aT2ZHMWZobVhHTGg0SFJVQ3ZqNXVDMVZXMlhkWUUydjAzRjQ3dzVpcnA5a3g0dXBsSGNUejAwV20wcUd6ZGZrN0xoankvRUhNaktNU2d4S0c5UTI5bmo0TmNTanBoc1ZYRnlJaTQxbDM0NWRKQ2NtVWJaQ2VRWU9INXF0cmx2WHJyTmgxUnBHVEhnNWkvaG5OQnB4OC9Sa3k1cDE2SFE2YXRTdFRZLytmWEZ5ZGdiQTNkTVRKeGRuN29YZHdTOHd3T3pYV01iZmp4ZkhqdUxJM3YzVUN3MWx4ZkxsVks1YytkSDNDeGN1ZkpROU9DTWpnM2QyMlZERFUwOHRuOExQdGtldGdzbk5vS3FuNWU5bGloYk9Sa0RENnBZN2gxWUhGMjlCY2lwVUN3WVh4L3lWYjE0SEpuK2I5d1R4dHpHMmJEeWw0OUs5T0g0ZVpVV2Rzdmx6cGQ3cVljMndIeE5vRkdCcmR2ZEVBbVljUzZKbGczSjhPVFpydU9YVUYydXhjdDh0MnZlZVNFQkFHVUlxQjJGdmE4MkRpRmhPWDd4TmVFUTBUYXFYWWVFN3phamdsN1BpWnBRa1BwNTdpTjJIYi9CTE4yL3MxWlpWVFF4R2tDc2tzMGRJV3M0VEZqeVBmb0hnR2FTQXIxaExCcXlaY3hoVXZEckI0Nk1jVC9ERXI5U1BNbHpKbmpoU2xyMUJXYk5oUGZiL0QrdVU1WGtwMlN1MWttbXdsWklMMWdNeUMvV296TUozVEZiTTF2RXNrZ3JvUkRjODk4aUFRbVNWYTFiQndJNnpxZHlLbHVFYkVGZ3F1K0QwOGVOTW1EQUJ1Vno4N0drcDdPM3RhZEtrQ1MrODhBSTlldlRBMGRIeG1iek9sU3RYTW1USUVONTY2eTBtVFpyMEtMdHV6Wm8xcVZldkhrT0hEaVV1TG80R0RScWd0RURVYkVaR0JuLzg4UWN2REI3TTFXdlhhZFdoUGVYS1Z5alNMTC8vb3RmcDJMaGlFZlZzcnZObkR3MEtPVnlMaFY5T085RzRWZnZNQ2FMQndPbmpSOW0rZWdrREEyOHpyMWM2N25iaWVRR0lUb1ZaeDVXOHN0R0dPZWRkdU9mVUVMZWFiV2pZdmd2MVc3Ym05UEZUK1BqNTByUlZTeHlkbkZCYnFkbTlkVHMxNjlibTNwMDd1SHQ0NGhlUWRaTzV1TmhZbHMxYnlMQ1hSK1B3MkRNWStTQ2NlYk4rUTYxVzBXL0lZQnEzYk1HMVM1YzVlZVFZWmNzSFkyT2J1ZStlU3FYaTR0bnpWS3hheFRLdkk1a00vNkJBbkZ4ZCtPaTlEL0R4OGFGYXRXb0FuRGx6NWxGQ0liMWVqODRnWThOMU5TTnI2N0FxeEtQMDYxRzRtd2lmdHkrYSs3cnFBamlWZzNhTnpGLzM4WXN3NFVzbDcvMHM1L0J4Ty9ZZHRXSGFmQ1AyZGxDbnN1bGVuRW9KSzdaRG8yQXJuR3hsdWR3dnFPaWpvRWtsSlQ0dStYOS91dGpKT1hSTmgxWWpKOERadkQ5US9IRW1CZSt5UGt3ZjF6VEg3NnNHdWpDeWMyWDJIYnZHdG0zSDJIdmtJcjVPRXA4T3I4Vkh3K3JTdlZFQWJvNDVoNFBHSnFiVGI4cDY5SEZ4dk5YRUZTdWw1UjJPRzNGYWtvMnBER2hnd1pnYUorRTdDUUExNENpNlFWQkFIZzVSR3BrakdybTltUnhWRXlRZVdjRWtJV1dCTGxDVzUwZG14eWlrK1FMZkg4RmpDSzFEOE8rb1dNamw0UE9HcDFIL2k3MTRsdkVqc0d6WlV0Y0ZIcDZlWEw5K1BVdTBpY0Q4MUt4Wmt4OS8vSkhPblR1elljTUcvUHo4bnBsclMwaEk0TFhYWGlNbUpvYmR1M2ZqNDVNOW9VTGR1blU1Y3VRSTA2ZFBwMTY5ZW93ZlA1NWh3NFpoWTJOVDZQTmZ2SGlSMmJObnMzck5HaXBVcWtTMzNuMndzN2N2dHY1SVRrcGkzZUkvZWJsbUFwTWIvNWVJNHAwZHR0UnAxcDd3Qi9lNWV2WUVZVmN2TXFpNmxubGpNbkN6RmM4SXdNVW8rSENQTGNjanJLamFvQWtkUjlYRDBTbTdOeFlURllYdll3S2YwV2prOW8yYmRPdmJtNk1IRHRHdWE2Y3N4MnN6TWxqOCsxK1pTM3BkbkI5OUhoVVJ5WksvNXROdnlHREsrUC8zVFBZYk1wZ2JWNjR5Yi9adnRPM1NpZXExYTFHdVlnVjJidHBpOFQ0SUtCdkVpMk5IOHNubm4zSGk1QW1tVDV2T1R6Lzl4TkdqUjdsLy96NlFtU2dtUnVYQXlIVjJMT3Y3M3g2YkJpTXNPQTJMejhxNEZxOUFvMU9nVUNxUXkrV29sQXBra2dFbmF4bjFmWTAwOEU3bHg0Tnc4R1h6dFQxT0EzY1NNa1hGcUpUTTVjWHhtc3prTEZvRDdIMEFpNzR5YjM5Rng4TzR6eFZjdjZXbVEyVWZ1blcwZXpUOXpkQWIrV0x1VmZxMU0rS1lEM0c5WFdQWWZWSExrR2FXWFJNOXRiY05nNzVQb0pHL3JkbjJYdHh4VzBPYzNJWTVyelRMOVRpOXdjamFnN2ZwMWlpSWowWTJ3TjBwNzdINDRMbHd4bjIxblJkRGJHa2FXSFJiT2x5T3pxQlpKUXZ1MnlQMkJoY0kvOUIwZlVHUUowYTVvbmh1UlQ3dmo3SmtLa2JaMjFTcUJVQWh5cFVjUktpLzRIRmIwQmE4dUkwYTFrMUlvL2szUytnemZEd09EcVhycDBNWE56Y3VYYm9rQk1BaW9GV3JWbnovL2ZkMDdkcVZaY3VXVWJGaXhWSi9UY3VXTGVQOTk5OW44dVRKakJvMUtzZTk3ZjdGMnRxYUR6LzhrUEhqeC9QRER6OVF1M1p0V3Jac1NiOSsvV2pXckZtV0pabTVrWmFXeHNHREI5bXlaUXRyMXE3RnpzNk9DcFdyTUdURXlHTGZqL051V0JnNzFpem05MjZwdEF2K3oySDkrNnlTTldjMWxIbXdobXBlTWw2cGxrclA5c1pDUlc4OVMwU2x3R3RiN0RnWjYwRGpqdDBZVmFYeVUyMHBJejJkNUtUa1IwdGlBVzVjdVVwUXViTElaREtpSWlMeDlQYk9VdWFmeGNzSWJkS1l3SEpaZjZUWnNPb2ZCZzRmbW1NVzRPQktGUm56djFmNWU4NGZwS1dtMGFCcFl5UkFwOU5aZkVtNXJaMGRnMFlPWjh1YWRRd2FOSWo1OCtlelo4OGVPbmZ1ek5XclZ3RklTVTVtMncxSGxsMVEwTGVxZ2NtYjVjdzhLR0dVWkRSdDJwU1dUWUtaUDM4K1RzNzJ2UGJXbTZnZVBsOXBxYW5jdVIzRzY0dVdZSy9Tcys2cW5oZHJtTDRuU2xKR3BsQjdMZ0l1Uk1LbDZNeGwya1lKWEcwaHdBa0NuTUhMUHZOZlpRK3dWMmN1L3owWURUVXFtSytmRHB5Uk1YU3FndllWZmVqYTBqbmI5MVpLT1VGdU5weTlwcU5wTGRQcjdkUkU0b01aR1JZWEFBTTlGRFN0cW1EYnpXUTZsaTk4eXU5N1NUcFdYMHRuMTA5ZGtlWGhiNmlVY283ODJoOXYxN3gvZmRBYmpIeisxeEUyN2IvT0I4MmNLZU5RdEFQWGlZaFVSbmV4b1BJZ1lrc0V3ajhzbWJwSktjV1lvNUlzbFdaenowSEZraFdkc21VVTByeEF2T3dGSmN3V2d0emhseGZTbUx4aUlmMkdqVVZXaXBiVDJqczRjdUhDQlhyMTZpVnNvUWhvM2JvMWMrYk1vV2ZQbm56NzdiZDA2dFNwVkY3SHBVdVhlUDMxMTNGeWNucHExTi9UY0hkMzU5TlBQK1dERHo1ZzU4NmRMRisrbklrVEorTGc0RURWcWxVSkNnckMzZDM5a1NDWWtKQkFaR1FrWVdGaFhMbHloZkR3Y0FMTGxzTXZ3SjllL1FkZ1pXMCtKLzN3M3Qya2FqSm8wNkZEL3VhcGtzU1JmYnNJdjNpUTNVTTFsSFBOK24wZGJ6Mm5Ka0NJVjRwbDk3RXFoU3c5citUdEhUWTA2dFNUNFhWcTUzbDhmRnhjbGlXOEFCZk9uS042N1pwRVIwYmg2ZTJaUlR3OGNmZ29FaEwxbTJSZGQ1cVJubzVlcDg5Ui9Qc1hPM3Q3Um94L21YbXo1K0RzNm9Lamt4T3B5U2tvbEVydWhZV1JtcHlNWHF0RG85RThtaUpiMlZpanRyYkd6ZDBOZHk4dkhCd0xKdXpJNVhJNjllckIvaDI3Nk5TNU01czJidVQ0OGVPODhjWWIvUDc3NzVuUFJtSVNMNit4NHZNZEJzNUh3YWhSbzVrNmRTb0JBUUZjdkhpUitmUG5FeGNieStMZi82QmlsY29FVmF5SWQ1a3l4TWZFVXFWV1RWcDFhTWVNbGN0WWRmazJTL3Frb1g3aWZhalJ3Y2tIY09nT0hMNExsNlBCVGdVaFhsRGRHN3BVaGplYmc0OERlZHIxdDRkZ2VFL3oyYzJhM1RJbWZhUGk1U1psOGJCLytvOEhDcmtNWlQ3Zjg3VXF3dFZ3QTFvOXFDMHNDTHpaM1laT255ZlJxcXc5Vm9xQ0R3NUdDYjQ3a3NSUGs5dmlZR3ZhanltbWlIL1g3eWN5Nm91dFZMUTM4blZiTjVSRlBJQnBkQkxSYVhwQ0xKbThYZmdFQW1FTEFqTmlMRW9sV1daS3VvK2NLYUpXRmo0OWlGRkk4d0l4d0F0S29DMTByV0ZrODRWWUR1M1pRZU5XN1VyTjVidDV1SFBpNUVsaEIwVklhR2dvTzNmdVpNQ0FBZXpmdjU4UFB2Z0FLeXVyVXRIMjZPaG9QdjMwVS9idDI4YzMzM3hEbXpadENseVhTcVdpUTRjT2RIZ290aVVrSkhEcDBpWHUzTGxEYkd3c2FXbHBBRGc2T2xLaFFnVUdEUnBFV0ZnWVgweWJScnZPbmMxK2JZZjM3bUxiMXUyTWZmVzFmSlZMVGtwaXk2cEZOUGVNWnQyWTlCeWorb29pd1VKcFE1TGd0YzAyN0k3MVljZ2JJeDd0dFpjWDhiSHhlSGg3b2MzNEwzUTc3T1pOdXZYcnpka1RwL0FML0c4LzF0am9hUGJ2MnMzWS83MmF3L21sTEZHRVQ3VlR0WnFCTHczbGo1OW00K0xxd3NvRmkzQjJjcUpObXpaVWJ0Z0VWMWRYbkI4bUN6RWFqVVJIUi9QZ3dRTXVYNzdNcnZXYmlJaUl3Qzh3QVA5eVFWUUtxV3B5cE91L05HM1Rpa043OXRHOVJ3L1dybG5EM0xsekdUWnNHRysrK1NaSGpod2hJVldMdllzL2UvWXNvbW5UekQzZnpwMDdSNWN1WFRBWU1yTkpCM281MEsxSldSYXUyczd1cEF6Q0kyTjU1YzAzc0xLeW92ZExveml3ZlN0OWx1MWxlYjgwOXQrR25UZGg5ODNNcGJ2MWZLR0JQM3pVSnRPT0M2ci9MRGdEMjE4M2orM3NQaUZqOGpjcVhtOFJqSU4xN243Qm5UZ05WUXF3TzBmek9uRG9xbzRXVlMwYjdlbmhLS2RQSXpYcnJpVFJ0MnJCbDlXdXZaWktrenFCTkt6cWJiYm5jOWFxTS96Nnp4bkcxM09rdWxmeHZLTU8zVTJqUzAwTFI4NEkxMUlnL0VPQkdUR1l4WkFzLzJPTDBwUW1sSVRBUmIzTWdxTzBXS0lyQm5qQjg0Y1poNVR2K21tbzk4VlI3cFN0UUVCUVVLbTRmQzh2YjNaczNpenNvSWp4OXZabXg0NGRUSjgrbmNhTkcvUExMNy9Rb0VHREV0dmVoSVFFWnN5WXdaSWxTNWcwYVJMZmZmZWQyUk41T0RzNzA2aFJJeG8xZW5xR2dMRmp4MUl6dEw3WnIrL3czbDJjUHJpTEdsWEs0dW5sWlhLNU15ZVBjMmIvVm1aMjB0RE5rbnRVUFdOSUVneGZhOHQxWlRVR2poMlE2OUx4YkxZWUg0ZUhwd2M2YldZbXI4andjTnc4UEZBb0ZOeS9jNWVLSVZVZW5rTmkxYUtsOU9qZkYrc2M5cHEwdHJGQkpwT1JFQmVQczZ0THJ1ZTBkM0Fnb0d3Z1lUZHVzVzd0V3VyWE45MEdEUVlESjA2Y1lObnlaU3lZOVJzQjVjb1MyclF4emk0dUp0ZlJxRVV6RHV6Y3piQmh3MWkwYUJITm1qWGo5OTkvcDM3OStqZzdPM1BvMENGOGZYMUpUMC9udSsrKzQ5TlBQeVU5UGYyeE5oZ1pNYWdESXdaMW9GbjNTYWlWTWhRUDl5aUtpNDFGcHJSbVg1aUNjdC9JNkY1Wm9rMHdUR3lDMlpMUzdMME5sY3VEdTNQaDY0cU1nNUVmS25pbGFiazh4YitZRkMyTzlrYWNDckFsYUpmbUVwdTNabGhjQUFSNHRhTTFMVDVNcEVPd0F3NVcrVjlCa0pCdVlNTTFEWWZmYW1pVzl0eDhrTVRZNmR2d2tHdjV2cjA3TnFyaWM0NjIzRWhpOFFRTGo2M0NKeEFJVzNnT0p5S1dxOXBRUW41VnlHdmtscGVXbXlNaUFBVmlnQmVZRlRNT0tXb2xyQjZYeHM1MVMwbE5UUzBWbHk5WEtGQ3IxVVJGUlFsYktHclRVeXFaT25VcTgrYk5ZOHFVS2ZUcjE0OXIxNjZWcURaR1IwY3paY29VR2pWcWhLT2pJNmRPbldMMDZORVd5ZUtiRndjT0hDQkRxODJYUUdjS2gvZnN3bmpuRUJXOXJLblgzTFNsdi9GeGNheWMveXRXdDdkdyt1VlVJZjdsazZtN2JiaXBya2FYQVFQekpmNEJKQ1VrNHZTWWVIYjk4bFVxVnNuY3cvVCszYnY0UGt6bWNXVC9BYnpLK0JBVVhPNnBkYlZvMzVZMXkxWWdTWGw3QW1YOGZKbnk3cnY1RXY4QUZBb0Y5ZXZYNTV1dnYrSHFsYXU4UEhJMG0xZXVZZVBLMVNURXhadGNUNVBXTGJrWEVjNVhYMzJGVnF1bFk4ZU9wS1dsMGJKbFM2NWR1OGI3Nzc5UHVYTGxtRHAxYWhieEQ4aXlIOXozbjR5bFY4Y0dMSnI3T3o5LzlTMnJGeThEWU9nclkxRmEyL0ZOWitoWEhiTm1wUDdwQkl3ZlpKNjZ4bjJtb0ZQbE1yalo1UzNNN2JrZXc3aitoZ0tkcDIxOTJIZFpWeVRQZzcyMWpGYzZXclBvZkVLV3o4T1Q5YnkrSVlJWGx0MW55SXI3ZkxFbkpzZWNaUXN2cERGNWNEM3NiUW9uVmhxTUV0OHRPVUd2dDFiVEsxRE9xL1dkaTFYOHV4MnZ3ODVHVHdVdkM1OUl1SllDNFI4S3pJanh5WUMxRXJxZjRkTUZRTW5FRmhmUmhVbklrTVErZ0FJeHdBdEs2TVN2bkFkODF5K1ZUU3YvTnNtcExBbjQrdnV6Wjg4ZVlRdkZSTFZxMWRpeFl3Y2pSNDdraFJkZVlQRGd3Unc5ZXJSWTIzVHk1RWxlZXVrbFdyVnFoYisvUHlkUG5tVGl4SWxteWRwYlVONTg4MDNxNVJJZG1QOEpoY1N1VFd1d0NqL0lWMjFUaVRFNjRldnZuMnNSdlU3SHdWM2IyTHhvRnQ4M3ZjZXl2bWs0V3dzYnpnL0xMeWhZSGVaQis5NzlDbFErT1RFSlp4Y1h0THJNSmNCaE4yOFJWRDRZbzlHSUppME5PM3Q3RXVMak9iTC9JQjI2ZGNtMXJrcFZxK0RtNGM2bTFXdnpQSyszcnkrYnR4UXVDN0JDb1dEQWdBRjgrc2tuWERoemxwK21mOE9TUCtabEUreWVScnZ1WGZoNTFzK0VWS25Fdlh2M0FGaTBhQkd0V3JYaXM4OCtJenc4UE1keVBsNy9iVXBacjFaRm5CeHRpWTZNNEtYeEx6Tml3amdhdDJ5T2Q1a3loRFJveHR5VDVvMTR1NWNJdDVLZ1dlM0MxM1hxQ3R5NHJhYWVDUmxvNDFKMVhJbEpZSERuZ3IySDdXekExMVBpWnFTaFNKNkxZUzJzT1IrdDRWNVNwdWg0SlViTDZ4c2k2RlRSbnQ5N2xXRm1WMitVY25oblMyVFc2MHd6Y0NGR3g0dnRLeFhxL09kdXh0SjgzRExPSDcvR0R4M2NxZTFUL0FQYnlrdnhUT3BVQkQrdUNBRlFJUHhEZ1JrcHNvQTFVMTl2VC9GSDVaWnBrMlRtMXYvYnFjL1oweWxTYm9zQlhsQ3FiS0Z2WFFNdEFxSTVzSE5McWVpQ01uNytiTnEwU2RoQ01kT3hZMGVPSGozS2lCRWorT3l6ejJqY3VER3paODhtTGk2dVNNNGZGUlhGRHovOFFQMzY5WG4vL2ZmcDE2OGZaOCtlWmR5NGNjVXEvQUZzMzc0ZHJWNlB0MDhaODB6T0RBWTJyVnBNSmNNNVZnOU00OXZEdHRScTBpYlh5ZE9GczJkWk9QczdtaW9PY2Y2Vk5OcVhGMUYvQmVHZEhkYjBmbWswQ2tYQkJ0L2s1Q1JjUGR6UTZ6SXoxMFpGUk9MaDVVbDhiQ3h1SGg0QWJGcTlsblpkT3BtVUlLWnpyeDZrSkNlemZzVS91ZTRKR0ZBMmlMakVlR2JNbUZIb1B0RHBkQ1FrSktEUmFEaDMrZ3hmVHZtQVhWdTI1Vm9tTFRXVnJmK3N3cy9Ua1FIZDh5ZUUrNWZ4eVBMM0oyOE5wWDZkeXFRa0pXZjV2R2I5QnZ4NTJyeDd2WDF6R0Y1OTBUeDFmVDVIU1lmS2VlOXhKd0ZMVHQ3bG16ZU1xQXVoWjNacExySHR2TFpJbmd1bEhEN3NiOE1mcCtKSjFocjVZRWNVNzdad3AyTUZlMnhVTXB5dEZVeHE0czc5SkQxM0UvL0wycnppcW9iWEI5UkJxU2lZSzVldU5mRGVyd2NZOGZFR3hsU3pablJkSjZ5VXhiOGZVbGlDamlpTmxtNjFpcUx6eGJnc0VMWWdkQXh6WGE0OG41Y3NtWGlVK1R1eVZJWFVHV1RpNlJRVUVobENCQlQ4WndzV0dGSitHcVJCSDNtQzgyZk9sUGd1OEFzSVlQZnUzY0lXU29JNXltUzBhZE9HdFd2WHNuRGhRdUxpNG1qYnRpMmRPblZpenB3NWhJV0ZtZlY4VjY5ZTVmdnZ2NmR0MjdaMDd0d1pyVmJMNnRXcjJiQmhBNTA3ZDBaZVFqSmF2LzMyMjRRMmFteVd1clJhTGY4cy9KMTJydGVaMjExRHZBYjIzMVZSb1ZJT0VUU1N4SlZMRjFuODJ3enNiNi9qeUlna1BtcVprV09pRDBIZWhDZURqYjBUdG5ZRlgxK2FrcFNDdTRjSEdlbnB4TWZHNGVMcWdrd21Jekk4QWs5dkwyNWR2MEdHSnAycU5hcWJOZ0dXeStrM1pEQXF0WXI1cytlUW1wTHkxR003OSs3Sm4vUG04ZEZISHhVcXdydDc5KzdVcXZXZnNxSFg2OW0rWVJQZmYvb2xDZkhabHdWZk9IMmF2MmZOWWtTZnh1eGQvUldUeHZXaGFZTnFKcCt2UnRYc1dUQ2FobGJod2NNb3duOXhkSElrVGJJaXhVeWExNzFFMkhNWFh1aFkrTG8wR1hEaUVsVHh5WHREdjIyWG82aFVJWjN1TFF2bk1IVnREdHZPWnhUWjg5RzJ1aHBKWmVDOTdWSDBxT0tRTFFwUElZZlc1ZXhZZWk0UmdIaU5nV01QMG5taFhjR2kvN1lmdjB2ak1VdEl1bk9mNzl0N1VORmRYV0xHaW9WbjQvbThud0dacGJWSWVXbnpnZ1VXOVFlRUxRZ0tpYjRVcWNoRjBOTHNHVFlLbW5QRElPUjVnYm1zM2lDNlFVQ21HS3czYzVWeVdEY2hqZnFmcjhmWnhRVy9nSUFTZS9rcWxRcG5GeGN1WExoQVNFaUlzSWNTUXRteVpaa3laUXBUcGt6aHdvVUxiTml3Z1JFalJoQWRIVTJMRmkxbzNMZ3g5ZXJWbzF5NWNpWkZVNFdIaDNQdDJqVk9uRGpCNGNPSHVYRGhBZ0VCQVhUdTNKbTVjK2NTVkVJVDE2eFpzd2ExdFRVZW5vVlBwWnVVbU1pNnhYOHlPVFNCY2FHWlMrMStQcVltSkxSSjFyM29KSWtybHk5eGZQZG1HdnBvMkRFb2pRQm5ZWk9GeGRrYTBqWHBoYXBEUWtLbFZxUFZhbmx3N3g2K2dabGphMVJFSk82ZW5tejZadzE5aHd6T245OG5rOUdoZTFjdW5EN0wzQjkvWnNTRWNUZzRPbVlmSzlWcStnNGJ6TTRObTJuYnJoMUxseXpCM2QwOTM5ZWdWcXRadDI0ZFBYdjI1TVNKRTQ4K2o0bU81cnRQdnFESGdIN1ViVmlmdE5SVU5pNWZUcmt5emh6ZThDMGVicGxMWHgwZGJObTFhanFIVDF4bTI1NlRYTHg2aHp2M28walRaSkNjbkprOTI5YkdDbHRiYSt4c3JXbFF0M0syTnRTc1dwWTlwL1ptKzl6VDE0K3pFYkUwTnNNcmE5WkplTzFGVUpyaEI5ZERaNkdTcDMyZWZzT1JXL0hjVEk1aDkvZUZuK0NWODRVRWpaSDRWQWtYTzlNOGxwdVJCdjdlcDJQL1pUMEphUkt5aDc2T1NnbDF5eW5wMTBoSmswcFBEMHY4ZEtBdDNhY2xNYjE5emh2Zjlhcml3T3NiSS9qdVFDdyt6dGFNNmxZZHRUSi9xc1dEbUZUZW1MR2IyT2dFM20vc2lMZER5ZktyemtTa1kxUm0wS0ZhRVp4TXVKUUNZUXNDTTJJc1lLQ2FsSTlQbjB1VE41UzAwQzJSUGJqMER2UVpvaHNFbHJNRkp4dlk5SG9hcmI5YlNLZitJODBpWUZpS2dLQ3lyRnExU2dpQUpaU1FrQkJDUWtKNDY2MjNTRXRMWS8vKy9SdytmSmlsUzVkeTY5WXRqRVlqam82T2VEek1oaXFUeVVoTlRTVTFOWlhFeEVRa1NjTEx5NHNLRlNwUXExWXRwazZkU2toSVNJR1hZUmJaUk1wb1pNclVxYlJxMzZIUWRZWGZ2OCtXbFF2NG8xc3FiWU16bDNwS0VzdzdyYVRmbUxvQTZMUmF6cDQ2d1lWaisybm9xMlhMd0RUS3V3bjdNeGMyS3ZCMzBIRXY3QTUrZ1FWWG1KUktKWHE5L2xIVUgwQjBaQ1RKaVVuNGx3MTY5Rm0rbjdOYU5TaFhzUUxXTms5Zk9xeFFLR2pYdlF0WHpsK2dmb01HZlBINTV3d2NPRERmNS9MejgrUHc0Y1A4K3V1dmZQTEpKNDhTTVJrTUJsWXRXc0s1azZmUWFWTDQ4dDJoOU92ZUxGdDVtVXhHbzNwVmFGU3ZTb0d1MWRQZG1ZeDBUYmJQN1Z3OGlVZzJ6LzFlZlFtT2YyU2V1aTdmbHVGbFo1dnJNYnV2eFhJK05wSWR2eHF3TmxNd1c2ODJzT2wwQmk4MHlYMDV1Y0VJVXhkcjJIbmVRTXNLSGd4cjRJRGpZMW1LTS9SR3JrU2s4c215R0t5c1V2aHpuQzF1RHRtRk82TWs0ZWVrd3ZvcHkzQmRiUlhNN3U3RHA3dGpPQjZleUpGSnBrZi82UTFHZmxweG1qL1duV2RJTlR1YWhyaVd1REZDWjVENDlYZ3M2eWNWMFJZTFF2UVJDRnNvM1pTd0pjYWxhYXU2b2pWNVNhS2dNZDBTaGRoWVVRaDFnaXl6ZU5FRkFzdVBnT1U4WU4zNFZMcjg5Q2U5aG96RnlkbTVSSFpCY0tWS0xGMjZsUGZmZjEvWVF3bkgxdGFXOXUzYjA3NTkreXlmSnlVbEVSY1hoMTZmR2M1cVoyZUhuWjBkampsRU1wVVc1czZkaTd1bko2NXVoVlBoTHAwL3o1bmRhOWoyWWhxVkhndlkyaDhHYmo0QkpDUWtjUEhrWWU1ZXY4U0xOZlQ4T1NJZFQzdGhhNVpnUnJ0a2VpMzltNkgvbTR4YW5UK1Z4bUF3b0h3b1dzdGxNcUlpSXFoYUl6Tk1LRFlxaHNTRUJDYThOYWxRN2JPeE5XMi95MHJWUXZBTERPU1gzMzdscDU5L1p1YVBQMUs3ZHY0eVhTaVZTc2FQSDgvbzBhTlp1M1l0Zi83NUo3dDI3VUt0a21Pdk1yQnl3UmNFK0hwWTVENVlxVldQOWxGOEhMV05IVWxtK0VIc1FSTDRlb0tObWJZVTFPcEFJYzk1RXAraE43TDA1RDNzWEZQWSs3c0JXelBtcitqVlN1S3RyL01XQUwvNEo1MGI0VlpNN2VTTFBBY2Z4MG9wcDRhZkF6WDhIRGh3STU0WGZveGl5MVNIYk1jbHBFclk1cEY1MTA0dDU4dDJudng4Tko3Sk0vY3c3LzJPZWJwVis4NDhZUExNUFZSM2xmTkRCL2VuQ296RnplSnppUXhxWkxSODV0L2k4WUFGd2k4VWxCWUtLQ3dhVUJaT2t5ekNCSkp5VTYvYjFDWlo4clVpbGdCYjFuQ2ZHNFFaQ2Y1RlpkbnFxL3RKTEJ5UnpEOEw1NUNVbEZnaXU4RE96ZzZsU3NXRkN4ZUVQWlJTSEIwZENRb0tvbno1OHBRdlh4NGZINTlTTGY0bEpTWHg1WmRmVXI5eGs0Sy9CbzFHOW03YnlQMWphemc4T3F2NEI3RGduRFZYcnQzaXlyWS9lVFhvQkZkZlRlR3oxa0w4c3lRMWZlRHQrb2tzL1hVV09tMytOcHZUYWJXb3JUSVZKYU1rRVJzVmpZZFhwbElRR3hORG5RYWgyRGtVM2MyemM3Q25ZNi91aE5TcnpjalJvMm5UdGkwSER4N01kejFxdFpxK2ZmdXlZTUVDR2pjTVplelFyaHplT01OaTRoL0E3WHVST0RobHo2YWJscHFNaXhrRU5LM0J2TlBRV3BVa3JzY21aZk9URHQxTVlOcjJxL1Rxa3N5Nkg4d3IvZ0ZVTHcvMzR3MGthWEsvbW5VbmRMd1FtclA0OXlSTmdsMUFVbkU3T3ZzeTVicGxWZHhKME9YdFo4bGdRZ01YTW1MamVmKzNBMDg5N2w1MENpOTh1SkVQZjk3RnBIcDJqS3p0V0dMRnYydXhXazVGcGpDbFd4RW1XQksrZ0VEWWd0QVZ6SWdsOXdDVUZlSlc1ZlJaNlVvQ0lsZVdYa01VRDQ4WTZBWFBwUzAwcXlqeHg1QWtWaTM0cmNTS2dNRVZLekYzN2x4aEQ0SVN3V2VmZlVhMVdyVUxuSUZZbzlHd2NzRWNxaHRQc08rbE5GeHpxT1ovRGRLNS9yOE1kZzlMb1g4MUkyb1JBVkFraksyblkzeElPQXRtemlBeFBzSGtjbHF0RnRWalVZTUdveEdGUWtGR2VqcEdvNEZtYlZvVnkvVUVsaXRMMzJHRHFWaXpHditiUElucU5Xcnc4ODgvNXl1RDk5bXpaMm5adkRGakJqWGxpeW5EVUNnc096VmZ2bTQvZnNIbHN6c3ZLZkc0MnhXKy9pQVhLR3NERFFkRDNRRlFxejljdjF2dytsclVBUnZITlA0NkVzYTJTN0VzUDMyUFQ3ZGNRdS84Z0lQemRMdzYwSEtpVVkrV0Vsdk81QjRXYWFPRzVIVFROaE0yU2hKSkdqME8xdG5kT1R0cnNMZVJjVHJjdEwweVgydmd6TTRqTjlsLzlrR1d6OU8xQnI2Y2Y1UXViNnlpcnEyR3oxdTU0dStrS3RiblBpYk53SlJ0VVRtUDF6cUo3dzlIczNDY0FYVlJ6czlWQ0FUQ0x4UjZpZG5hYkpTWEhrT1NtK3ZtU0VWZ0FTSUNVQ0FHZW9IWmJhRUlmaEJ2VzhWWW9rWEFTbFdyc3VxZmY5QnF0Y0ltQk1YS3JWdTNXTEZ5SlRYenVhVHlYeUxDdzFrMmR5YnYxWHZBekU3cFBFMUxxZXFKaVBZckppYlUxektyYlJSTGYvbWVDNmRNeTVadU1CZ2U3VnVwVkNwUnF6TEZRSlZhemFqWEptQmRRTEhZWFBnSEJkSnpVSCs2RHVqTDVwM2JhZGk0RVUyYU51V0hIMzdnM0xsekdJMDVpMVNiTm01azhNQSsvRDN6Zi9UcDJ0VHM3ZHE4OHppeDhablJjMG5KYVh6OXl3b3UzWXFtWElVSzJZNk52SCtQeW1ZS1BQeXRDMndkQ0FlSHdhOGRvTWRyQlJjQlpUTFk5TE9COTE5TG9tVzdjRjRiRmMrNUZYcCsvOUNBajd0bDcydmZ0ckR4Yk80QzROczlyUGx4MXkwZUpPWitYS3JXd0svNzd0Q3FtaUxIUFFBQlBoeGd3NHlEc1dRWTh2YXE1REw0WDMwbnBzemFuK2sxU2JCeTkzVWFqVjdNZzh1MytMR2pPNDBEYkl2OWVZOU9OZkMvRFJGVTljeDVUZmdQaDJQNFh3Y0QxZjJFTHlBUWZxR2c5Skx6SG9EbVZjZ2t6SE9LeDBMcVpDYWVWbGJDT2xZZ0VBTzlvQkNvZ0NMUXZmNFZBVWY5L1J0ZEI0d285TjVtWm4wa2xFcktCZ2V6ZXZWcSt2ZnZMMnhDVUd4TW1EQ0JSczJhSVM5QWtwSXp4NDl5K2NnMk5neE1vNXFYNk11U1RMdGdJOGRHSmZQUzJ1VXNQMzZRTnIzNzV6b21Ta2JwVWJabUsydHJiRzB6aFEyNVhJNlBiNWtTYzEwT2pnNDBhdG1jUmkyYkV4Y2J5NjZEKzFteWZCbmg5eDlRcGt3WlFrSkNxRnlwRW01dWJwdzVkWUs5ZTdheFpja25lSGs0VzZROTQ5NmFTYUMvRjRsSnFhUm5hSEh4OUtibmkwT3lIYWZYNlpHMGFiaVpVUzl5ZktqM05QQ0h1VjFod0p0d2FBR29DeEI1SlpkRG0vclFwb2pEUTJwV2hCdVJCbEl6Sk95c2N2Wi9PdGRXNFdBTmJ5KzZqYk8xRlZXOUhmRnpzY1phSlVkbmtJaEsxbkkxS3BrcmtTbTgwdDZLMFcyZUxsWjNxYTFtK1FFdFgreUo0ZVBXZWF1eC9rNHFGSVprTmh5NnpUZC9IOE5Ob2VmVDVzNjQyWllNZnlrNlZjL0VUWkYwcm1UUEN6V3lMenRmZmo0UkQ5ZDB4clV1NHJDZkl2cnhWeUQ4UXNIemc2SFl3NG9sazQ4cnZNbkxUQlVGWlJSV0JkVmJzbU5Gb2hBeDBBdWVYM3Nvb3NDM3RsV01MQm1aeUlDNWMrblVkemllWGlWSHBhaFdzeGJUdi9wS0NJQ0NZbVB0MnJXRVIwWlNONTk3LzJtMVdyYXZXVWFnN0RZbnhtcXdWNHUrTEExNDJNSDZRV21zdjNLRGlYTm00RnU1RmkwNmRYMjAxMStXS1pyMG53Qm9iVzJOdmFORGliOCtWemMzNmpkdC9PanY1S1JrWXFPak9IVHFCQmRQbjBLZm5rclZ5a0VNZVBrckRBWURBYjRlZEd4Wm16NWRtNkpReU5tNTd6VHJ0aDdoNFBHTHJQejlmWUtEZlBKMS90dDNJNmxVM28vTlN6NEg0UEwxdXd4NWZXYU9HY0N2WExoSTYzS1dFMkVhK1VQN1FQaHJIWXpwWFRUOS95QWFGbTJTY3o5U1Jsay9JOTFiU0FRVlFDdnUxa0ppOHhrdGZlby9QYXRKc3lvcURueWk0a3lZbnYyWEU3bDRMNTdVREFscmxZeEFEeGxqNnlob1dza0J0UWw3OEkxb1k4WFkyYWttNTAxVUlmSEZuSDJNcmVOSUJiZVNFOVo4STA3TDFHMVI5QTF4cEcrMTdIdlNYb3JPNEZSME12dW1Hb3UrY1dMNXIwRDRoYzhuRnZ5dHdUd3JWVTBVbzJTUzVVMWVSakV0eVg1Q2xEUEl4Qk1xTU5PenBRQU1vaXNFUlQ4UmJGaE9Zc1A0SkxyOTlBY3R1ZzRpSUNpb3hEaXJNcG1jQXdjTzBLUkpFMkVYZ2lJbEpTV0ZOeVpPcEZ2dlB2a3FGeGtSd2RhVmYvTld3eFRHaGVwRVI1WkN1bFl5MHJGQ0tqOGVPY2JNN3kvUmZlaEl2TXBrRmJ2a0NqbEdZK1pMMjlyYUdodGIyMUozblhxZGprdm5MbkRsd2tXOHkvaFF1VVlOeXZqNVVkblJFYVBCUUV4ME5OLy90WjN4Ny82Q3E3TWR2VG8xb1hlWEp2encyY3VvVlBtZi82N2RjcGdPcmVvOStydHllWCtTRXhQUjYvUW9uNmp2N01IZExHcWZhdEhySDF3TnZqaGNOQUpndWhhYWpWRFFMTWdMTnpzMXgyNW5NSHRKSEIyYTZ2bit6ZnhOL29aMmhkZStTTTlWQUlSTXNhNVdrSkphUVFYM1ZaWWR5dUQ5eFJxK2FPZHBrdmdITUxHUkMwN1dKV3RMOTROM05IeC9NSmJ4RFZ4b1dUYm5qU1gvT2gzSFh5OFg4YjUvK2ZKK0JjK1ZUeWdRRlBZZC82Uk9KUldmU1Q5VFE2QVJKUkl5Wk05VFJnMFJtV2daVkFnQlVGQnNvMkExWDlnek9ZWDJQeXdpdVdFWFFtcldMQkZkVWFOT0hUNzk5Rk0yYjk0czdFSlFwRXlaTW9XcTFXdmdtRU4yMHB6ZmpSTEhEeC9neHNrOXJPMlhSblZ2MFllbGVoaVd3OFJHV2xvSHhkTjMzaS9VYWR1ZFdxR2hqNzYzc2JFaFhaT1pITUhhMWdhVnF2U0U4Q1RFeDdOajQyWWl3eU5vMUtJWjdicDJScW5NZlBFWURBYXVYTGpJMlJPbmlJNk1vbUxWeWd3Y01aeER1M1pSTnFnTWJac1hiQy9NOUF3dGN4ZHVac2VLYVZrK2IxQzNFbmZEd2loYlB2alJaK0gzNzZOS2o3SDRNeFNSQXM1RmxKeGNra0NubDFHOWpDTnU5aXJBZ2RhVjNQbDUzMDBPblUybFVRM1Q2NnBhRHBJekRFUW1HdkZ5c296UVpqVEN5M05TT1hSWno5Y2R2QWh3TnQyK1M1TDRaNVJnL3VrRU5sOU5ZVm83VDRMZGNnN0h2aEdueGQzUlFEWGZZdlFCQklKU3A0U1VNdjNpT2NPQStoa3hlMVBqejNNUXFhU0hVbDJCQ3VmMmNrR0pBdkVydjBBTStJTFNQUkVNY0lNajc2YlNkZVo2a2hLaWFkU2liYkYzaFY5QUFNY09IK0w0OGVQVXExZFAySWFnU0RoNThpU2J0MnhoUUE1N2srVkVha29LbTFZdUpOUWxtaFV2YTdBVnp0d3pReTBmaVdPalV1bXpmQTJiNzl5aVhjOCtLQlFLNUhMNW8wUWExdGJXcUsxSy9rUmJraVIyYk5yQ3BiUG5hZFdoSGIxZkdQaG9HZlBkc0RCT0hUM09qU3ZYcUZDNUVrM2J0TVF2SU9DLzkwTlFJRE4vbVVXVGVwVnhjckxqN1U5K1ovR3Y3NkkyTVJKdzRnZS9NWHhBT3p6Y3NncnF6UnVFc1A1UVZnRncrNHFsekdwcjJlaS9tM0V3Y1NzcytiWm8rdDdHQ3VaOVl1RGx6Ni9qNjJpTHA2MHRHUVlEY1pvTS9Bc2dkTDdZUldMNTBRd210RE4vc3BtajEvV01tcFZLWlRjcmZ1M2hnYTFLWGlxZjNUaU5nWTkyUmlOSjhFZXZNdGlxbjM0ZEIrK2tNYng1TWY0S0w5NFpBbUVMQWpOaVJJR1VyNGd0eWNTam5wSjUxeVNKVFNwdUdTUjdTd3NhMkthWHFWQklRZ0FVRkJJaEFBb2V0NFZpMnVmQXlRWjJURXpqcGIrT3NIRkZCTzE3REVCWnpKRXQ5UnMxWnZMa045bTllNWV3RFlIRnljaklZUGp3NGJSczF3NlpQRy9IOS9yVnEremZ2SklaN1RYMHJpckN1SjlGWEd4Zys1QTBwdXc0eGNLWmQrazFZZ3dPamc1a3BHZG1XYlYzZE1UTzNxN0VYNGNrU2JpNHV2REttMitnVUNoSTE2Uno4c2hSVGh3K2lwdUhPN1hyMTZOTDc1NDU3c21uVXF2cDJyOGZmVWQvZ2FPOU5UOS9PZDRrOFM5RHEyUFNoNytSbXBiT0cyTjdaZnUrVmtnNUZxdzU4dWp2azRjT0V1SVlSMHNMN1A5bmxPQmNCUHh4QnJiY2dMa2ZaMGJURlJXdFFpVXVyZEp6NUh3U04rNGxZVzBGZjRTQ1N3R2lFQWQzaHVZdnBmTktXeHZrWmxxVm85WEQyRjlUT0hMVndNUW1ydFR6dFNtMXoreWUyMm44ZkRpT3RzRjJqQWwxeWZQNGMxRWF2ZzBSUG9CQStJT0NaNE9DNXFtUTh2SHBjMjMyZWxSWWxhZ1pIbUtKcmhqd0JhVWROWkJSVEtkV3dzSlJhWHk3OVRxei8vcUZMZ09HNCtqb1ZHeGQ0ZXZ2eituang5aTllemN0VzdZVXRpR3dLQjkrK0NFK2Z2NTQrK1MrTzc5V3EyWDNwaldvRTY1eWVFUWFaUnhGM3ozTHlHVXdyVzBHRFMrRjgvck03K2cyYk5Talg4SWJQSlpZbzBSZmcxeE8zWVlOQ0w5L255UDdEbkw3eGsxcWhkWmx4UGlYc1hQSVBWbERXbW9xMjladklpVXRnMlcvVFNHMFZvVmNqOWVrYTFuOHp5NW16bDNMNEQ2dG1EU3V6Nk5vdzhjSkxsdUd1SmhZQU83Y3VzMjUzWnM0TmliTnJOZDkvRDc4Y0F4T1BJQ1FZT2pWSHI1cEN5cGxjZHdEYUZTRGZDMzV6UWxYUndpdEpySDdvbzdXSVlYN2tjNW9oTS8vU1dQaFhpM05BKzM0bzdjejFzclM2VWpFcFJuNDltQXM5eE4xVE92Z1NUa1gweUp6VTNRR2lpMWZpVXI0YllJbjdFRlEraWhoUzR3TnN0SmxTRVgvT2paMVdmRlQ3bldCVXl3L2IwS2RFQ2JGZ0MvSW56MWtGRzhUSnJYWFVkTXZtcEh6ZjZGVk1TY0hhZGlzT1JNbVRPRDA2ZE9QOXFvU0NNek40Y09IV2ZYUFAvVFBZK252M2JBd2RxeGR5c1FHYWJ6ZVUxZlFLWVNnRk5LemlwRmdsMFI2ekp1TkpMTkhwOVdpVXBlTzViL1hMbDFtNzQ1ZEtCVUtHalJyUXZmK2ZaQ2JFT1Y2Ni9vTjFpMWZSZXRPN1ltTzhPZUgzLzZoZThlR3VMczZZbTJsUmlHWG8wblhjajhpaHB0aEVSdzZmb2s3OTZMbzJyNEJheGQ4aEg4Wmo2Zlc3ZXhvaDBhakllem1MYll1L3BQdFExSnhOT092NmhjaVljUUdtUEUyeksvSE0vV3NUaGdvOGQ2TU5GcUhGUHdIdW8rWHA3SDBnSmJxWHRaODI5RWJYOGZTK1g0MUdHSGx4U1NXbjAraVZUbGJQbS9yYVhMWk5KMFI1K0xNNFNQbS80TGlWVUpLbjU0Z3JqZnZNUkZGNGJwS2trcUcyZWVrSDVtcUtWbHlOWjFlcnNwTTNsQWFCUzRoeXBVY3hBUkFVQUx0b1cxVmlkMFRVK2orODk5RVZHMUcvY2JOaThXRGNuTjN4OVBIaDltelp6Tmh3Z1JoSHdLems1YVd4ckJodzJqYnFmTlRSUkc5WHMrK2JadEl2WGVPSFMrbVVzRk45TnZ6U0hWdk9Ed3lsWnB6bEVSSFJWUEd6N2RFdC9meStRdnMzTHdWRHk5UHV2WHRoWmVQajRuemY0bmRXN2R6NWNKRmhvd1ppWXViSy91Mjc4VEowWTRidDhNNWR1b0ttblF0ZXIwQld4c3JQTnlkcVJqc3k2RGVMU2tmVkNZZmMxRWplNWYvd2M2aHFaUjFNZSsxV3lrekk5enNiSGptaFBxNlZVQmpNSERocnA0US8veXBCdHZQYVpuMGw0YXl6bXBtZFBiRzA2NTBxZzRTc1B0V0tuT1BKK0JwcjJCMmR4L2NiUE9YUWpWVmE4U3BPRmM3cXhFSWhEOVlVZ2VZVXRwbXZRVUhGbGtodXU5cFhWcnEza0FHSWRVTHpJRXdJMEVKblJDVzlZRGo3MmtZczJBZmE1YmNvRU92RjdDMnRpN3lkb1EyYXN3MzMzNUxuejU5OERIUmdSVUlUT1hWVjErbFFwV3F1SHZrSEsxMC8rNWRkcXhkeXFpYWFidzdPZ09GWFBUWjg0eW5QWXlxcWVIUy9RZTVDb0FQN3Q2ampMOWZzYlR4YmxnWUcxZXR3YzNkblFIRGh1RG00VzV5MmRTVUZKYk4veHRQYjI5R3Z6N2gwYjZBOTIvZjVLYzVieExrNzJVK1o4S1l3WWt4cVJaSm5sUGVEUmIyZ0RFZlE5K3VNSG5vc3lVRWZqUk80b2UvMHZodHBHbDdFQmlOTUdwV0NzZXZHNWpjMUkwYTN0YWw4cm9OUnRnZmxzYktLMmw0dU52VHVLdzk0K3NWTEJKU1p3U1ZvaGd2UmdnK0FtRVBBbk9Qa2ZMU1pVZ0ZuMUpMSm4xVVNMTFhxQmMvM1FqTU1nTkdpSUNDL3loaHRtQ2xoSGt2YVhpajBXMlcvZkVqOSs3Y0tmbzJXRm5ScEhrTFJvd2NLZXhEWUZZV0wxbkNpVk9ucUpORHBtbTlUc2Z1emVzNHVXa2Vtd2ZHODE1eklmNEpNbWxYVmt2RXpZdFAvZjdCdmZ2OHMyUlprYmRMazZaaDFhSWxiRm03Z1I0RCt0SjN5QXY1RXYvdTM3M0gzSm0vMEtCcGt5eEpRUzZkdTRDdnA2Tlp4VDhBTzZWazBjelpOWDFnNzB0dzR5UjBHUS8zb3A0ZEcyeFpGK0l6OUJ5NXJzL3oyTlIwcVA5dUlwcGtKWE42bGltVjRsK0sxc2cvbDFJWXR6R0tlMnBubG56Wm5mOE5ySXV0dXVBS25seFc1S3Zkc2lJRUg4SGpLb2lZWHdqTVFNNUpRTXc3MEVtWTd4VEtyRFhJVER6OUU4ZkppbTV4c042U0k3ZFlvdnQ4b1FMMG9oc0VENTk3RlZEQ0Vvd1BiMktnY1hBaWZXYlA1MjZsaGpSczJ0cWtUS25tSXJoaVJhNWR1Y3pTcFVzWk1HQ0FzQk5Cb2JsMjdScFQzbjJYdm9OZnpCWWFkT3ZHRGZadFdzV1lXbW04UFVZcmhEOUJGdXI3dzkyMU41RWtLVnVDaTlqb2FGWXNXTVRBNFVPS3RFMDNybHhsL2FyVnRHamJodDR2MU0xMytWUEhqck4veDI0R3ZUUU1UMit2TFBVZTJyR1ZmYXVubTczTnhpSlFYNnlVTUxzTGJMZ0tIY2ZBdUJkZ2JCOVFLa3EvSGM2YUtqSGd6V1EydmVXTStpbkpPMUxUb2VHVUJMcFZjcVIvdGRLVnNjZ293Y2tIR3JiZlR1ZHVpcEVCYlNxeGUxSjEzSnd5QmN6WXhIUlNDekZYc2xQTGlVc3Rwb3RUSWdRZlFWWS9VUEQ4WU1GWG44RXN4bVNpQ0NXVENuRngwcU9oME9RbVNjVjFzeDdyRDZOTStYd2FyQkFtTFRQd2EwUTNDQjZpcHNRSmdBQVZ2ZUhFZXhvbUxqL01zbmxYNmRqckJaeWNuWXZzL00zYnRPV2RkOStsVWFOR0JBUUVDRHNSRkppTWpBejY5dTFMNi9ZZHNMSDVieE1vVFZvYWV6YXRScDE4bXgwdnBoTHNLdnBLa0IxckpkVDBockNidHdnS0x2Zm84eHRYcjdGdStTcjZEaG1FcDQ5M2tiWG4wTjU5bkQ5MWxwZGVHWXVqVS82V1F4cU5SamF0WGt0c2RBeWpYeCtQOWNQblFhL1RzMy9IRGlMRGJyQnp4UmQ0dXB0M3JOZnJEY2lsb3Z2bHMwdEZhQllJbisyRDBCWHc0U3ZRbzBYcFhoWmNLUkM2TkRmeTYwNE5yN2JQT1p0Rjkrbkp0QTkyS0RYaVg0cld5TEg3R281SDZMZ2FxNk5KZFIvZWZya3hqVUs4czkwclR4ZGI0dElOQlQ2WGcxcE9RbkhOdllYZ0l4RDJVRFM2eFhPRy9rbDlxcGo2d05SWGF5bmRBMUQyZkZxWFFBejhBc3VoQmxKTGFOT1U4Tk1nRFZzdWhETjJ3Yy9VYk5xQm1yWHJGY201YlcxdGFkR21MZjBIRE9EQS92MlBscWNKQlBsbDlPalIrQVVHNGZ1WWtIenUxRWxPN052Q0p5M1NHVjViaEdRTGN1ZWRSc21NMjdHWm9PQlgwT3YxN05xOGxadlhydlBTK0xGRitzUEk3cTNiaWJqL2dKZkdqODEzcHZSMGpZYkZmODdETHlDQUlXTkdJcFBKMEdtMW5EcDZuSk9IRGpDMGIydmVtelVlbGNyOFUvVHJ0eDhnVjZnWXV0WVJsZHlBbzFxaXFtczZ0WDJNMVBiQklsRzNqbGJ3VlZ1NEZROGZMNGZQZjRXSnc2RnZHMUNWMHQvMDN4MEI5VjVJNStVMnR0bjJzMXQ3UWt0YUdyeFlLM2RST01NZ3NmVjZDdXN2cDlBM3hKRjI1ZTJLcE8zSkdVWWVKT3U1RnB2QjlRUWoxK0owMk5pb2FGWEhuN2Q3bGllMGlpZnlYQlJhTHhjYkVqU0dRclZCSnNuUUdZcGhMMEN4aTVSQStJRUNDMkFvWmNhVTk2dFhra3o3cVM2SEtEVUpDVmxCbHhYbjJzbEtGQ1VwVkVkRTZJbUJYMUQ2S1FVVHd3NGhSazUva01hbytadFpmZWswYmJzUHdON2V3ZUxuRFFnSzR0NmRNS1pNbWNMMDZkT0ZyUWp5ell3Wk03aDg5U29kdTNZRElENHVqaDNybGhGaUg4dXBNV200MllvK0V1Uk40d0J3MDBld2QvdE96cDA2VFVqTkdveCtmY0pUTTBsYmdyallXTzdjdXMyTG8wZmsrN3p4c1hIOFBlY1BtclZwUmZVNnRiaDU5Um9YVHAvaXdaMDc5Ty9lakZrYnZqVjcxTi9qSERseEdac3lGYkdwRjRva0dZblZwTE1tT3ByZkQxOG4vTzVkR3ZqRDYvV1NhUkpvL25PWGRZRy9lc0NkQlBodUszd3lDL3EyZzJIZG9ieC82YkpEZTF1b1ZRa3UzTlZUS3lpcksvWHJsZ3hlcU9IMFZMZEFBclplUytHMzQvR1VjMUh6Um1OWEtudFlGYW85KzhNMEhBclhvZ0RzMUxKSDUwblZHc2t3Z05ZSXNhbDY5Qks0T2xwVDFzZUpXdFVDNlZiVm01ckI3dGhZbWE3RTJsZ3AwZWdLRjRUaDU2VGtjcmllNmtXZHIwY0lnQUxoQjVaK1NsZ01tQkVGVXI3MkZwQk1QT29wQ1RkTWt0WnlQNGV5YU8rV3JFRFg4Q1E2bVJVS1NTY2VnUHgzdVVCTUJBUzVUUVJLUVhDeHN5MnNlRm5EOHVOM21QVG5UT28yNzBqMW1uVXNmdDVHVFp2eHo3SmxoSWFHMHJkdlgyRXZBcFBadVhNbnY4eWFSWjlCTDJBd0dqbTJmeTgzeng1a1Z0ZDAyZ1ViUlFjSlRPWm1ITWlRdUh6dVBQMWVmS0ZJbC96K2k2dWJHMFBIanNwWEdXMUdCbGN2WG1ialAydW9GRktGSytmT2NHenZiaHFIVnVHVDE3clRzbkZORkVXdzZlWGFyY2VvVmI4Qi9rRlBLbnd0a1NTSm05ZXU4K3FlN1ZqdENHZG1oeFRxK1pxL0RRSE9NS01EcE9sZzZYa1lPd1hTZ0Y1dG9Xc3pxRnF1ZE5paXRSVm9jd2lFaTArUjhIUEtXVmxJMVJyNWJFOE1sNk16ZUtlWk93MzhiUXJkamxQaDZTeTVvbUh1bFBiSVpUS1NVclgvZlNrREYzc3JuQjJzOEhLeFJhVTBqNDNKNVlWekxvS2NyRGtabGk0RVFJSHdBMHU2amlESUU3MU1iY2J1TFpwT0w1N2dlMU9qQ3AvU0xRVk9CQ0lFTWNHVDFpOVdrd3VlbkF4a2xJNm05cXRub0hYbFZNWXMzTVRLczhkcDI2Mi9SWmZBeWVSeU92WG93VnR2djAzRmloV3BVYU9Hc0JkQm50eThlWk9SSTBmU3ZXOC83b2FGc1gvTGFnWlVTV1B0K0F5c1JTWjJnWW5jU1lEUEQ5aXk5YlkxTGJyMW9VM1ZLaVcrelVtSlNadzljWklMWjg0U0Z4MERHT25kcFNudFc5U21mdTFLbEFzc1d2RXlLVG1OMHhkdkVkcXhWODVqdkV4R2NNVUtCRmVzd1AwN2R4bTBmREY5eWlmd1dhdDBsQmJRSm0xVjhGTHR6SDhQa21EdEZYanpVd2hMZ0lZMW9FVURDSzBLRlFOQVhvSVNOeGlOc0g0L0hEd2pvMzJ3eEtiVFdwTFNKRzVIR2JnV2JpQkpZK0Q0ZlExbFhiTDZLdmVTZEh5NE01cUlaRDF6ZXBhaGpFUGhCOEFqOXpUTXY2QmgzVGM5OFhXM0s3SStzTGRSb2RGSjJLZ0s1bFJWODdSbTUza0Z3NW9ZaXU3R3FZUVBLTWpCSmdTQ2Z5bWdIcUJEVlRncG9SalNvc3V1WEtyODJGbXpqb3l5LzJZRmovcEY5dmczang4dXlVRDIzMGZTb3pwa1Q5UW9aYWxUOXBSelp5bnp4RmV1aG5CY3BNamNpL0gwNmdyMXZUbkt5U3hjdnpuS1BUZGVCU1V5OFlPZ21FZ0Vra3Rmc3plY2xmSHFZaHVxaHJha2RtZ2ppMllLam82TVpNZVd6ZXpldFlzeVpjb0lteEU4bFppWUdKbzFiMDZ0dXZXNGN1WW9qdHE3L040dFRTVDVFSmoraWs2QTkvZllzZmV1bW9idHV4SlNxMmFSTHZjdENFbUpTV3pmc0lsN1lYZW8xNmdCMXJZMjdOaXdpUjd0Ni9QNzkvOHJ0blo5L2N0S0RsNktwbUdMbGlZZGJ6QVkyTE54UGFrM2o3RjVjQm9QazhCYUhLMEJqdDZGUFhmZ1JCUmNqUVluQjZoZEdXcFZoYkpsSU5BSEFyeEJiU0VIM21DRWlCaTRHL253WHdUY0RJUHJkK0hTYlFoMmgvcmVNZ3pJc0ZGSzJLc2cyRldpa2pzNFdFR3pYeFc0V0N0cEdtUkh1czdJaWZCMElwSjEvSytqZ2E4MnlHa1hiRS9iOG5hVWMva3ZjaVFzUWNlR0s4bU1xKythWjR5RUpNSEtTOGtjaXBKWTlXVTN2RjJMZGcrRi9sUFgwejlBd3RleFlDS20zaWp4MnFiN1hKbGVoQUtnSGVBaXhsVEJReFJBa09pRzNBZWFJaXdubFlCMlNRV3JMMG5tUWJUQ040ZnZwRndMU284UDZJOUVHK214bzZSSG4yYXA4dkVzd0ZMV28yVlAxQ2s5NWR5NUNvQ1BQbmxNQU16OExHOEI4RkViTFNBQU9rbXh1QnZ1NWw2TXAxZFhxTy9OVVU0SWdDV0hDRXBzNGdkQk1hQUJZa3RuMDVQVDRjMFYxbXkvNWtDckx2M3c4ZlcxMkxuQ2J0M2kxTkVqN051M0Q2ZDhacjhVUEIra3BhWFJxbFVyakpLUnVEdVgrTGE5aHA1VnhISmZnV2tjdnc5ZkhyTG5YSXdOZFZwM3BIcnRXc2hLUWVyWWUzZnVzR3JSVWxxMmEwUDFPclU1ZC9JVSszZnRZY2lZa2F5YVA1OC92NTFBZzdxVmk3eGRzZkZKMU84MGtWWmR1NUdTbEV4eVVoSnBxYWtZREFZeTBqTlFxcFFvRkFxc3JhMnhkM1RFeWRrSkYxZFgzTDA4T1gvaUpKZjNybUhQOERTY3JZdW5YK00wY1BvQm5JMkMyeWx3T3o1VEhOWWF3TUVPWEJ6QTFRbGNITUhWQlp3YzRkOVZxbzcybWYrZnJvWDBETkFiSUNVTk1FSmljdWIveHlaQWREd2twV2E2S1hJSnZCekEzeG44SENEQUhzcTVRRGxYOEhNMGJSSFRpdk93N2lhbzFkQ2xKdlI4dUZOSFFocTh0VXpHenZNS0VqUVNDbm1tcnhhWFp1Q1ZCcTcwcUpMN3ZyNjNFM1Q4ZEN5UjBCcitmRG11YWI3Mjd6TVhiL3l3aDByR09HcDZGOXdnM3RzWndmeHhHVlR3S3FKR3U1QXBBZ29FQURhQStBMDdkNFFBYU5MeHNZb3lKTWc4Yy9pdThBS2dMS2NxY3hBQW54UUxrYVJjbHhnWFRnQjh2SWdreXhZWWFCNEJrR3h2V2xzcEdSL0RqVHlMNVZ5WG1ZNHBUSm1pRlBPRUFKakhyQmhJRU4wZ2VJZ0JDQy9kbDNBcURJYlBzOFhPcXpMTjJuYkJ5dG95SHR1MXk1ZTRmZU1HTzdadng5WldaSEFRUFBZWUdReDA3ZHFWQzJlT002aEtNaCsxeU1CR0xMVVI1SUhlQ0NzdXlQbjZzQzBHVzAvcXRteFB1WW9WU29Ydzl5OTNiNGZoNU9LTW81TVRaMCtjNU5EZS9ReDdlUXpXTnRaRVIwYXhZY2tpRHE3L0JoY24reUp0VjQraEgzSG02Z044QXdKd2RuWEZ5ZGtKV3pzN2xFb2xhbXRyOURvZFJvTUJqVVpEY2xJeWlmSHh4TVhHRWhNWmhWd3V4OTdSRVVQc1RmYTlsSTYzUThucTh6UWR4R3NnTGkzenYvRWFTTW9BdzcvUkdWb3dBdFpLc0phRFFwWVpwUWVaR1lydHJjRE5GdHh0TVcrVW94ekloN2psOW9xQ3BRUDhjaFFYalZMbVhuK2JiMnBJTWlyNThwV21OS2xlZk9yRmpPV25TYng4bmZhRnlGeTg3a295M21YaWVhZExFUzEvODBJcytSVDhoeVBnSWJvaFY2UWlLcFBmY3BacVZ3RUZ3RWhGRUNreTV5ZStrL0lzbUI4QlVIcThxRXpLMXQ1Q0NvQlppdjczVnpZQjhMSGpaTm5MNWk0QVB2eW1FQUtnbWd6ODlaZnlMSlp6WFdZNnBqQmxoQUJZY2tnR29rUTNDQjRqbkV3aHNCUmpsT0NYM1VxKzJteE5yU1p0cUZrbjFDSk85TG5UcDRpSmpHVEw1czFDQkJROG5ITklEQmt5aFBPSHRyQzZUd3hCWXNtVklBL3VKY0t2SjYzNCs2eUtnTXJWcU5lOEZXNGVwZHN6dTNUdUFydTNiT09sOFM5amJmT2ZxblQrNUVraXJsOWc4K0pQaXlUcEI4QVhQeXhsNjZHcmRPcmJyMERsZFZvdGQyK0hjZVhpSlc1ZXVvQ1BkVG9qYXFVenFKb09GeHRodjAvRkJuQTIvZkFXWHlpNCtBQUNuRlI0MkNwUUtlU2s2eVVTRFRMaU5VWWFWUFZtV0xkcU5Lbm1VK3lYOXMrK20relljcExCSVFVWEFHUFRESHgxS0p6akh4ZkJoRXVPaVBZU1pNVWRFQXRZOHBqUUZWR1ovSllyWVFMZ2ZVVkYwbVcyVDA2Rzh5eVlWUURNSnZYbExBRHk5T1cva0pjQStOOG4rUklBL3kxYTVBTGdFOHVBNVVpVTFaL0p1OWhUcWpMTE1ZVXBJd1RBa2tNNmNGOTBnK0F4NHNoTVNmZ3NYRW9xdkxuU21qMDM3R25Xb1RmK2dZRm1QNGNRQVFYL3pUY2tSbzBjU2VLNTFTenZGWTlNdkg4RVQwRm5nSFZYNU13OFljZjlOQnRDR2phblJ0MDZGb3RZTGtwdTM3akJobFZyR0Q1dURIYjIyU1A5OW0vYmhvTkN3NEtaa3kwdUFuNzIvV0xXN2p4RHp4ZUhvRkFvekZKbmZGd2M1MDZjNE1xSnc5VHcwUE4rMDJTTFpBc3U5YmdDVnZrcm9qZkNya3R3TXhwTzM0SDdHUUg4K0hvclBFdVkwbnJ5YWpUVFp1L2lqZERDaFlPK3N5MmNSUk8wbGw4R2JFMm00Q01RL0VzWk1rVjZRUzZUdWlJcWs5OXlKVXdBREZOV1EvOTRYbDBwcjhvc0l3REtzazdJaTFjQXpQeGI5a1RkT1FtQTJmL0s4dmtUcTQ2RDlPZVJveTg1QW1CK3loWDFmbjdDQ1hzNlJ1Q1c2QWJCWTZRQzhjL1dKWjI3QjJQK3RrVnI3VStUdHQxd2RqRnZXTmE1MDZlSWlZaGc4K2JOMk5tSlRYYWVWeWE5OFNvSnh4Y3l0NU1RL3dRNWN6MFdaaDYzWWZVbEJVR1ZxbEtqY1hOOGZKK2QwSnlZcUNnV3p2MlRZZVBHNURyTzd0NjBFVnMwTFB6bFRheXQxR1p2UjFKeUdtUGZuTW05MkhRNjllMXJOdkh2U1c1Y3ZjYlJIWnV4MDhid2FZc1UycFdYaEpGRHZwZi81c1MwalNyY2dwb3l1RjJsRW5kNXNZbnA5SDV6RmROYUZXNHVzZlZhQ2pLSGVLYjF0L0Qrc0U2QWd6Qkx3V01FQWtyUkRVOUZLcUhsTEZsL0FRUkFDVG0zbERXeUZqVmgvNzhzLzVlREFKaGpBcEFuRzJseEFSRE1sQWs0dXdDWXRRclRCVUJmd3hXc0pJMFFBQzFaN25raEROQ0xiaEE4UkFkRVBwdVh0dXFrbkxkV1dsTW11RG9OVzdUSDJvelJOaGZPbnVIV3RXdHMyYklGRHcreHNjcnp4cHNUWCtmQndmbk03NWFBUWk3NlE1QmxIc3I2S3pLK1BHaEx2TkdCNmszYVVLMVdUWlFxMDcwdmc4RkFjbElTR1pwMDB0UFRVVnVwc2JheHdjSEJNVi8xV0JKTldocHpmdnlaUG9NSDRldnZsK2Z4eC9mdjUrYWxjeXlaL1RZVnl2NG5nc1lucHJCMTkwbDJIRGpIL2ZCWUVwTlRjYlMzeGQzVmtacFZBNmxUTFpnR2RTdGphNU05dk14b2xQaDd4UTQrbmJHVWVrMmJVYXQrL1NLNTlxandDUFpzV0kyak5weWYyaWRUM2ZzNU4zcGJDcjI4c085c1c5NFoyWldxUVNVemJYcXRvWDh6cTVOYjRaNFpuY1RFTGZlNU5NMWcyZmVHSjZCR0lNaEVEcFFWM1pEN2k3dUVsaXRoQXFBT0srNHFxK1JiQUpTZW5DU1pJZ0NhS1FNd0ZMa0ErRytCd2dtQUFONkcyOWhKQ1paWkZpc3lBVDlmaFBQTUxQa1VtSWtIWkVhSFBvUG9qZkRMTGhYZmJGTVRVcWNKdFJzMFFhazBqd045NjhaMWpoMDh5TWFOR3lsWHJweXdvK2RDM0pGNGVjeG9NaTZ1NHZmTzhVTDhFMlJoelNVNWIrK3d3Y1d2UFBYYnRNZkxKKy85eTR4R0kvZkM3bkQzNWswaWJvY1JIeHVIV2luSHg5a0pGenRiN0sydFNNM1FrcENtNFVGY1BCbDZJOTUrWlFpc1VvVXExYW9WaXlBb1NSSi96L21EV3ZYcVVyMU9MWlBMaGQyOHhmWTFxM214VHd0ZUdkNlY5Ny82bTUwSHpsR3VjaFg4ZzRKd2NuSEIyc2FhalBRTVVsTlNpSTZNSkNiOEFYZHYzOGJUelpIKzNac3h1SGRMWkRKWXNId252eTdZakYvWnNqUm8yUm9IeDZJUGVicDk0eVk3VnkrblpabGtablJJdy81NUZWM2NLTFRnVlBzVEczYjlQQVMxc21RT3FnMUhMMkZhYzBlc2xJVnpNbjQ2RXN1THJWTG9VODlDRFpXUnVkeFQrRUtDZjdFR3hMWUZlYnpVaXJCY2Fjd0EvTENNUnViQUEwVndEblVWUkFETXV2d1hMQ2dBWHI1VVdjcHRHYTdGQk1ESDZpeUlBT2htdUkrekZKMTdzZHhlQm9YNTNoemxoQUJZY2hDWmdBVTUyWVRtMmI3RTVIVDRmS09hUlVldHFOV29OVFhxMUVNdUw3eWo4ZUR1WFhadTI4cWZmL3hCaXhZdGhDMDl3eGdNQmdhL01BalhxQjM4M0M1T0xQc1ZQT0o2TEF4Ylk0Zk9NWkRtM1hyaDZ1YVdweTFkdlhpSmEyZk9Fbm52UHFIbGcyaFh0UUpOS3dVVDdKMTdSSEdHVHMvSlczZFlldlEwNjArY3BYeU5HalJyMjdwSTl4TTh1SHN2MFpHUjlCaVEvMFFiT3AyT2ZkdTNjZUx3Q2RwMTdVVE5lblZOU3RvVUh4ZkgrVk5uT0g3d01ESVpWS3hja2VZZDJtUHZVTHhySFNWSjR1aSsvWnpidjQxZk9xWFJzWUx4K1RKK0Jaa1JaNFhBS0VIMUQyMDU5dnZRRW51Wkl6N2ZTa3NuRFJYY0NxZDAza25RTWVkc0pBZmZzMUF5RUN0RXRsZEJWa1FHWUJNRzhpSXNWeG9Gd0lmSEo4dmNpRkw0NS9DZGlRSmdMaG1BLy8wMFM1VkZKUUErK2lSYkp1QzhCY0JIYmJXQUFPZ3N4ZUJtdUpkN01aNWVYYUcrTjBjNWtRaWtCQ2toaUV6QWdxeWs4TnlJd2pFcDhNRmFHOWFmVXhQYXZDTlZxMWN2ZE1iZ3hJUUVOcTFadzJ1dnY4YUU4ZU9GUFQyRHBLV2wwYWQzTDZvYWp2SnQ2d1RSSVlKSC9IcGN4YlJEZHJUcCt3TGxLcFRQOWRqNDJEaU83OS9QclV1WGFWT3RNc09iaGhKYVBnaDVBY2NnalZiSGoxdDI4OTNHWFhRZjBKZEtJVlV0ZnIxeE1iRXMrdjB2WHA3NGVvR2lEN1VaR2Z3K2N4WTlCdlNsakFsTGg3Tk42U1dKMjlkdmNHRDNYc3BYcWtqRDVrMkxienFWbE1UOU8vZElqSXNqTmpxYTI5ZHY0bXB0UlBGd254VW5Hd1ZWUEl5TXJCcjE3Q1lPc2FmUSs4M2Rpb1lKeTcxWS9ubXZFbnVaUDZ3NFErekZhM1NxVVBoOWY2ZnVpT0NYRVJuVUNiUkFReDBmL2hNSS9rVmtBRGJoeFZKRVpmSmJyb1FKZ0hFS0grSmxYamw4VjNnQlVKWlRsVGtJZ0UrS2hUbnYvNWUxVFlVWEFCOHZJc215QlFhYVJ3Q0VKME1MN0tRa3ZBMDM4eXlXYzExbU9xWXdaWVFBV0hMSUFPNkpiaEE4N3BIeDNJbkM5K05oNm1vYmRsKzNvbDdURGxRcHBCQ28wK25Zc1drVFZhdFVadmJzMldiZGIxQlF2RVJIUjlPK1hUdDZsN25HKzgzRS9nbUNUQXhHR0x2QmhwTnBnWFFiUERUWENMd0g5KzV6ZVBzT01oSVNtTlM1TlgzcTE4TEtqRXQzejRiZG8vMjBYd2lwVTRzTzNidWFKYnI1YWN5YlBZZG1iVnJsS1hZK2pZMy9yTUhidHd4MTZvZVd1bnV1MSt1NWNlVXFkMjdjNHM2dDIzaDZldEs0Y1dOcVZLOU91WExsOFBMeXd0UFRFeWNuSnlSSklpRWhnVk9uVGpGaWNGL0NYazk0Tmg4RUR3cWRYR0RUV2RnY1ZwVXZYMjVlWWkvejBJVUlmdnhqSDYvVnN5OTBYYWZEMHprUUdjT3Exd3lXdVI5V0NBVC9JVElBNTQzSUFHelM4ZEdLUUpKa1R5UkRrdktiQVJoeUV3Q2x4NHZLcEd6dExZZ0FxQ3ljWlR6aEhNcHkrQ3hIWklXd2tvZk9wVXlNNWdJeklUWUdGdVJrRTNLZTJYMEFjOExYQmY1NlNjT2RXQTBmckYzTDMvdTNVS3R4RzBKcTFDcVE4NnhTcWVqWXJSc25qeCtuWG1nb1M1Y3NJU1FrUk5oV0tlZnExYXQwYU4rZXQrcys0T1Y2T3RFaGdrZHoySUVyYlloeHFVT2ZnYjJmK3VOQmJIUU11emR1UWtwTzRvdCtYV2xkelRJWlRtc0Urckh0bmZGMCtPb1hraElTNlRkMHNFVkV3QnRYcm1KbFpWVmc4UzgxT1lYYk4yN1NxV2YzVW5XL2IxMi93Wld6NTdrYmRvZk9uVHZ4M2p2djBxeFpNOVRxcDArb29xT2oyYlJwRS9QbS9FU0hTZ29TMHlFeEhaeHR3UEZabWRLck1VdG0wYkE0T1dWOTNVcjBwZFlxNzg2Vm1Bd3lReDRMV1plUE5mUE95TG40d0VCVmN5WUZsNGs1dmtENGZRTExvVFhMcndzbUJsdkljdExPQ3FhbktYT3VTSlpyRTZYaTZPRW5tcVV2aVQvblNKVE1hTHVTMnE2U3dyOFRCSzNvQ3NGaldQSE03d09ZRXdGdS93bUJYMnphd0lKWjI2bGV2d1UxYXRmTmY3SVFtWXc2b2FHVThmV2xXN2R1dlBYV1c3ejg4c3ZDdGtvcFc3ZHVaZGpRb1h6WE1vcEJOU1hSSVlKSFROMWxSYVJkQ0IxNzlzbnhlNTFXeTk0dDI3aDcrVExUQm5hbmE1M3FGbTlUOVVCZmxyODJnbjR6LzJUOWluL28zcitQMmMreGQ4ZE9PdllvdUhoMzVzUko2alpzVU9odEY0cUNqUFIwenAwOHpkbmpKNmxldlRvZnZ2YytyVnExeWxGWWpZeU01UFRwMDV3NmRZb1RKMDV3OGVKRjdPenNDQWtKSVRZcG5hdXhLcmJkY01QRnlaNVVqUVpOYWhybDNlUzhHSkxLaXpVTnFCV2w5RUV3VTFSUmVKS1NTZ0VsTzBUSnhrcUpxNU1OMGFrR1BPd0tmOE5lcU83Q0J5dGpXUEdxR1g5NVZRdi9SNUNEOHFFUTNaQ25iaURhWlJJNm1icEV0RkdXejg2VEY4WE5rU3lRMjFrQ2RFTENGNWh6a2lBUVBNNXpIbVFjNEFhelgwem42RHVKVk5SdFpjR3Nyem04ZHlmcDZlbjVyc3U3VEJuNkR4bkt2QVVMYU4raEEvZnYzeGYyVlpybWdwTEVGMTk4d2RBWEIvTjNWeUgrQ2JKeUlBeFczWENsZmQrQk9YNS84OXAxNW43N1BjM2M3RG4xNVR0Rkl2NzlTNU5Ld2N3ZE5ZaXJGeTV3NDhwVnM5WnRNQmp3OFBUQ3g3ZmdJVXRYTGw2a2NoSHNVMWdZRXVMajJiRmhFd3RtejZWVzFXb2MyTCtmZjFhdG9rMmJObG5FdjlUVVZLWk5tMGJ0MnJYcDNiczNtemR2eHNmSGgvZmVlNC9UcDA5ejlPaFIvdnp6VDg2Y1BjZUtsZi9nWDY0cWNudFB1ZzBkemN2dmZVS05YdU5Zbk5pVXlqL1pzL0ppS2ZUUVpaaE5BSXhNVXVMdFpsdmlMN2xOYUFDbkk5TE5VbGVvcncwM0lwUmNEamRqQThYT0l3TGg3d2tzaEJFRnhueUZmRXNtSGlVVnRLanByNnNybHlwTE9iL0ZjdmpMM0ptQVpUbnQvbWRhSWhBWjRHTzRnWTJVYkpsOThVUW00T2VMQkRJenZ3b0UvNklISWtRMy9FdHlPc3pjcWVMWHZTcUNLbFNuWm9ObU9MdTQ1THVlRzFldmNuRGZYdDU5NXgxR2p4NWRLaUpmbnV2N25wek00TUdET1huOEVGc0h4RkRWVS9TSjRMRXBud1ExWnR2UlpzZ0VQTDJ6Ym9SdE1Call0bm9kYWVIM1dUQnVhSjdaZkMzSmI5djNNMjNiUGw2Wi9FYUo2cjhmdnBqTzYxUGVOdVA5a0VpTVR5QXROUldGVW9Hcm14c3FkY0U4M3Bpb2FJN3RQMGhNWkNSVDNwM0NvRUdEbmhvRkhoRVJRZWZPbmVuYnR5OWp4NDdGemMyMDVhc2JObXpnZjIrOFFlVnFJVFJvMFJTNVhFNUtjakxyRjgybm1jdDlmdXFVWG5xeWk5dGl0c1FDUFg2MjVmTUpQU2xYcG1SbnI5aDE4aDV6RmgzazFicm15VHg5N0w2R1l6RXhyRFJYRktBblF2QVJaTVVGY0JYZGtQdUxwQWpMbGNZRUlBL0xaTWhzdUsrb2xMVjRmaEtBL0R1Skt1SU13R0NXblNvS09YTXM0SnM5TXdMUUNodVN4UkpYUWVFUkV3VEJrL3k3VE1BZ3VnTEF3UnFtZE5ZeHViMk94VWVQOGZXS2M2Z2N5MUNyWVd2OEEwMVAzUmRjc1NLK0FRSE0vM3NoQ3hZczRQZmZmNmRpeFlxaWcwc2d4NDRkWStDZ1FaQWF6ZkdYa3ZCMkVIMGl5TXFPR3pLczNQMnppWCtKOFFtc21qZWZQclZEK0dqc3hBSm45VFVYWTlvMjVadE5POUhyOWZuZnlzQkNwS2FrWU85Z25vY3FQamFPL2J0MmMvM3lWVnpkWExGM2RFQ3ZOeEFUR1lsS3JhWnV3L3JVQ3EySFFwRjNaRjFDZkR3SGR1NG1PVDZSVHo3K21PN2R1K2U1ZitLcnI3N0tKNTk4UXRldVhmUFY3aTVkdXRDcVZTdmVmZmRkRnMzNWc4NTllK0hxNXNhQU1hK3djZGxTWHQ1NG5sKzdsSkpFUTJZTTJJdEtrdkIwS2ZsWkNrS3JlUEY2UkRxRlRudjhiMzIrTml3K3IrRGlBMlBoOXdLVWk3bTlRUGg3QWd2d1VFdlRZVjI0d0R5cCtGYlRLUCs5RGt0TnpTeTVaNkJPYnZYOE9lZEM3TFFNSXFlTUlDZXNnVlRSRFZubVRrb1kxdGpJc01acDdMbHluUzgyUjdCM3N4WFZRMXRTdFhwMWxDcFYzdDFxYlUzckRoMEl1M1dUenAyNzBMMTdOejc2NkNNY0hSMUZCNWVFMTR3a01YMzZkSDZhT1pQeWRuRnNISmVPclVyMGl5QTdmNXl6bzJhVFZsaytlM0QzSG1zV0xHVFdpUDYwcjE2bHhMVFZ6Y0VlZzhHQVVxbmt3YjM3SE5tM24xNkRCaFJiZTFLU2tyRTN3NWgzZU85K2poNDhSSnVPSGVqU3UyYzJzUzR4SVlIRGUvY3pjOW8zMUdrUVNvMDZ0WEYyelI2OW5acVN3cUhkKzNodzV5NmZmZm9wZmZyME1UbENlL2p3NFhUcDBxVkE3YmUxdGVXSEgzNWc1ODZkakJ3MWlsYWQybE8rY2lVNjl4L0FxcitTbVhQeU9xUHJsUENFUTZxSC84eEVXb2FFdlUzSkgzVHRiVlFvVlFwU3RVYnMxT2JaVldwUU5SZmVYeEhEeXRjS0dRVW81dlVDWVJkRnEwODhaK2dzYUV3eUM5OHFwYWtIeWt6NExEL2ZGNnk1c2lMcmVDRzBQV2NvRU5GZWdwd25Da0lBZkNvdEtrR0xTaW5jamtuaHg1MGIrSHZXSmdJclZLTm0vYWE0bXJBRUxMQnNPZndEZ3poNzZoUTFhOWJrZ3c4K1lOaXdZUmJKMWlrd2pWdTNiakY0OEdEdWh0MWllTlU0UG0ybFJhelNGanlObzNkaDZNQ3lqLzYrZWZVYTIxZjl3L3BKWTZqaTUxTmkybW1VSk9KUzByQ3l5cHczN3Q2OEZWdGJXeVJKS3JadENMUmFMVlpXaFF0SDJiQnFOYWtwS1l5YjlEOVVUL254eGNuWm1RN2R1OUtpWFJ2T0hEL0p5a1ZMU0UxSndUOHdFTC9BQUh4OHkzRDMxbTNPbnpyRGUxT25NbXpZc0N4UmtsRlJVYVNrcE9EajQ0T05UYzVSYVFVVi94Nm5kZXZXN04rM2p4NDllaEFYRTBQOXBrM29PbWdJbjMwN2pVN0JPdnljU3ZDRFlPYnQrb3lseUFGcFVOV2JLekZKMUNsam5nMzNRbjF0V0h4T3dhVUhScW9VSmdwUTdQOG55RWxWRVQ5bVBsOVlVSmpVeTYwc2ZzS0NyRjQycFFXS1Z5ZTRmL1R2TTVIMUNjbit6RHpwQmNpZTNKVHZ2d096MVpKOUQ4Qi85dzk4OHRoY1hucFBubDhHVHNhWVBJczlkUkF3eHpHRktWUFUrL2tKSnk1M05JQk9kSVBnOFJFU1NCYmRrQmZPdHRBaFJNLzRWanBzZEE5WXZ1VXNaOCtjUlpKYjQrYm1scXVnSjVQSjhDNVRoZ3FWS3JOaC9UcSsrL1piZkgxOXFWeTVzdWpZb3B3alNSSS8vZlFUbzBhTklpRXFqTCs3SnpDaWprR0lmNEpjYkFabUhMTWx0RVZtQk9EZHNEQTJMbG5LN3ZkZUw5YjkvbkppMmVHVDNEVElDSzVTbWNnSDRkdzhlWUpRWHkvV2JkMUJVTVVLV0ZzWHZWcVFHSjlBUkhoNGdaT0E3TjY2bmVURVJQcSsrSUpKUzN1VktoVitnUUhVcVI5S25RYjFzWGR3SURZNmhsTkhqM1ByMm5Xc3JhMklqSTVpLzRHRDdOcTVreXRYcjJCdmIwL1pzbVZ4Y1hGNXFzQm9UaHdkSFJreVpBaUxGeXprMXExYkJGZXFpTFdqQzVzT1hxZGYxUkk2UVpNQnp1YWRZLys2Ujgyb2JqVkx4VGdRbTZ6bDR2VklRanpNdDdiUzBVckpxbk1hK3RRcmhEUHRqQ1ZTWFFwS005YUFXR2lTeDR0ZGRJR3BKTWk5ME1zSysxNlVtZlpwanZ2LzVWWEwwNUVYN3U1THhXcVUrcElZeHlzZW5OS0xDQXNYNURSQ2l2MUNURWF0aEJjYlNaeVltc3JLNFEvd1RsakxnbCttczNQREtpTENjMC90WjJ0blI4dDI3V25admdOZlR2K0t1blhyc212WEx0R3BSY0NaTTJjSURRMWx4bmZmVU4wcGpndXZwTkt5ckhpWkNYSW5NUU5zYkRLRnM4VDRCSmIvTVk5dDcwekF6ODJsUkxYemZsd0NINnpjU09PMnJaRWtpYzByVnZMOTRONzhQTHdmWC9mdXlOSlp2M0prNzM2TVJtT1J0a3VsVnFITDBCYW83SzFyMTdsNjhSSTlCL1l2VUFTalNxVWlzRnhabXJWcHhkQ3hvM2oxM1RjWitzcFl5bFd0VEZSQ0xIc1A3T2Y3NzJld2VQRmlZbUppaXJSZmJHeHNXTGR1SFk0MnR1elp1cDFxdFdweU10cWEyL0VsOUVHd3dldy9zQnVNcFdmOERhM3N5WTBFOHk2ZmFlaHZ3OG5iY3NJS21weFBTWEh2Y2k4UWZwN0FuSlRBSVZFblV4ZHpHd3V1MThtdVhLb3M1YnphTlllWXdNY21HWVhMQlB6WU56TFowODZXQTlrekFmdnJMNkpDVzNJaUFQTmJUbVFDTGpta0lySytDcktUOVBDZm9HQXZTQU9zUFMzanB6MjIzRTJ3b254SVBhclVySTJEUSs0L3cwWkZSbkwwNEFIVUtoVWZ2UDgrblRwMUVobUR6VXh5Y2pKVHAwNWw3YnAxcENkRk1iMXRCc05xaVgwUUJLYWhOMExGWDF3WitmWlVabjM5SFYvMzdVeWZCclZMVkJ2dnh5WFFjZm92Tk92ZWpYSVZLM0I0eno3c1l5UDVhK3lML3czeG1uUStYTG1SVGVjdTA2cDdONElyVnJCODMrbjBITjY3aHlzWExqUHl0Zkg1THZ2THQ5L3o0dWdSSm0yMVVGQzBHUm1jT25hQ1UwZU84c3JMNDNqcnJiZUtkSHNHZzhGQWp4NDlVTm5ib2xRcDhidTNtdS9iYTByZWcrQ0IyY1dtbWgvYmN1aTNvYVhqSGE4M1VuL0VRbjdwNUc3V2VuZmRTaVZDSDhmY2tRVVE1dTNKakFDMHRQc3R3ZFY3Y09naUhMdW80UG9EZUJBTGVzTi9McXU5TlFSNFF2VnlFbzJyRzJsYURXeUVFRlU4ZUdLdWZEWFBMczliQnVDQzFDMkJFUVczbGRYem5RRTR5LzlsVWVEK3pkNWJpQXpBRCt2TUt3T3d4RU1CTU9lR1BrV1NlK2lBRlU0QS9MZEExaXpBZVM4RGxtWDdxb3poQmpaU3NtV0VOQ0VBUG1mZURCQW11a0h3cEJjRVJJbHVNQWRSU2ZEM0VTVi9ITFRDb0hTaVVvMUdWS3BhRmF0Y2x0OUZSVVp5NXNSeGtoSVNlUGZkZHhrNGNHQ0p5ZUpaYW9jNnZaN2Y1c3hoK3JScG9NK2dpVzhLUDNWTXhkVkc5STBnZndUOTRFQzlOcDI0ZnVRSVJ6OTd1MFMxYmNlNXk0ejlZd2x0ZXZlaVF1VkszTDV4ZzkyclZuUG80MGs0MkdRZmM2NkZSekY1OFJwdXhTZFNyMlVMS2xjTE1idmdGUmtlenJrakI3bCsvZ3pkS3huWWVzZWU0WlBlelZjZCszYnVRcHVocFUybkRrVWo4R2kxN05xeURVTzZsdlhyMXVIa1ZIU2I4V2swR2xxMGJFbmxtdFhZdTJZcE4xOVBSVjZTNXJKV2dLdjVxeTFOQWlCQS9WR0wrYnFsRTJxRitXNk9KTUc0OWZjNTlLRWVkL3Q4RnZiQVl0RmVSZ2wybm9JbE8rVHNQaTNEejFGSlJSY2JLcmhhNGVPZ3hOTk9pZUt4WVNOTlp5UWlSYy90ZUIxWDRqV2NqVXluV2hBTTZXU2dSMk5LbGowLzYvZ2pWdlhrK2VBVllibVNJQUFXc04wWk1odnVLU3JsVUZmdUFxRDA1Q0QzUkxyY1FnbUFrdlNVUzNwS0JHRE9EUzBpQWZDeE9nc2lBSG9ZN3VFb1dXZ2Z3SklxQUJhMG5Iako1TTF0UkNJUVFYYkNoVjJZbTZzUjhNZEJLMWFlVUdEcjVFNjVrUHBVckZ6bHFXSmdZa0lDWjA2YzRHN1liVWFOR3NXb1VhUHc4UEFRSFprdmgwcGl6Wm8xVEpreUJaMHVIVlZhSkhPN3A5RTRRUFNOb0dDMFdlREFzWHRHTnI4OW5uckJRU1dpVFlscEdxWXNYY2V1YTdmb09lUkZYTjNkQ0x0NWl5M0xsclA1clhHVTg4cDkzTGp5SUlKdk4rMW05OFdybEt0YWxVbzFxK01YRUZDZ0NHU2owY2o5dTNlNWNlRWNOOCtkeHRkQng1aWFxZlFOTVdLbGhMSS9Pako2eWtjbTE2ZlRhdm5wcSs4WS8rWWJxSzJLTm96bzdJbFRYRDU3am4xNzl1TGdVSFJoTkE4ZVBLQnBzMmJZcTQzODFmWTJkY3FVb0FmQUZZc0lUVFUrc3Vid25PR2xaaHdZOXVsbTJyaGtVTUhOdk9ySzJzdkpPTGtuOEVudmZFUUJ5b0F5NXZkNUVsSmcxaG81ZjIyUlVkN1ppdWIrOXRUeXNVYVpUd1ZQQWk1SFo3RHpkaklYWXRPWlBNRElTeDBsbEFvRWxrUUdsQlBkWUpLQkZrV1ovSllyS1FMZ3crTlRaQzVFS2dKeitNNUVBVkNTSGpQTVloUUFzeThETnA4QStOL3hoUlVBeVpZSXhGbUt4czF3UDg5aVR4ME16SEZNWWNxSVJDQWxUK2hKRTkwZ2VJSjRSRFpnQzNMdUhpdzRZc1UvSnpQRndNQktkU2xmdVJMMjl0bWRUSTFHdzZYejU3bHc5Z3loOWVyeDJtdXYwYlJwVTlHSmViQjU4MmFtVEoxS2Frb3lHZkgzbU41T1MvOFFrZVJEVURobUgxUHc4VDVidGsrWlJBVWZ6Mkp0aTBhclkvYjJmY3pjdW9jNlRacFF2M2xUWkRJWlIvYnQ1OHJSWTZ5ZE5JYXludTc1cW0vRHlYTXNPM2FHa3pmdjRPN3Bqb2VmUDI3ZVhqaTVPR052NzRDMWpRMHlHZWgwT2pMUzAwbE9UQ0krTHA2NDhEdkUzTHREVWtJOHRjckk2Rk14amM0VkRiZzlrUzIyNmkvMkRIempBNVFxMDZLYWordy9TSEppSW0yN2RDcVdQajU1NUNocDhVbHMzTENoU00rN1k4Y094b3dkeTBzVjd2SmVjMjNKTUg0bG1aRm1GcUR4TkJ0V2YvVUM5amFsSTJYcDlJVW4wTjI2Ulp0Z083UFdtNjZYZUczVGZTNThZY0RhMUs2d0FjeTRNajRoQmI1WkttZnhEaG50eXpuU3Nidzk5bXJ6UkFiSGFReXN2SlRJNVlRMGZwdHNvTDdJZldZNXJBRmYwUTI1SXBYZ2NwWVNKZ3NvQU1ZcGZJaVhlVDN4blpSblFWTUV3Q2YxTTNNS2dQOGVMN3R5c2JLRUxHOEI4TkVuandtQW1aL2xrQWxZa21YVEJTMGxBTnBLeWZnWWJ1UlpMT2U2ekhSTVljb0lBYkJrRWZkUTdCRUlzbmlDUUt6b2hxTGd3bjFZZHRLSzFhZFZwQnV0Q2FoUWcrREsxZkQweXY2aXZYWHJKcGZPblNNMUpZVlJvMFl4K0lVWDhQYjJGcDM0RUtQUnlNcVZLL244ODg5SlNVNUNteGpPK3kzMXZGUmJqMUprUnhTWWdWUXR2TFZGVFVoSVgwYTFLUjRoM21BMDh0SEtqY3piYzVqcTllcFF2M2x6TXJRWjNMaDBoYk9IRDlNdXBDSmZEdWlPblZYaG9wT3VSMFJ4NXZZOVR0OEw1MDVzQXRISnlTU21hWkNNRWxZcUZZNjIxa1FsSkZMWi9oNHZWTmRTd3h2ODgxZ3QyMzJaQTRFZHh1TGphMXBZMjg5ZmY4ZVFNYU53ZENxK1ZKWXI1aS9rczQ4L29YUG56a1Y2M21IRGhuSCt3RHBPakN3aGt6UW53Tll5VmZmODJaYlBKdlNrWEpuU2tiSjAxZDRiN054NmlzRWhkbWF2KzgvVDhiU29rY3pvbGlaNjZpNkFHWm9oU1RCM280enBpK1IwTE9kSTU0b09XT1Z6aVhOaXVwRlVuUkd0UWNKZUxjZlJTcDdqTXVsYjhUcCtPQnBOL3pZRzNodGlGRC9NV2VwNWRSZmRrTHZSbCtCeUpVd0FqRlNVSlVYbWxIM1F5S05nZmdSQTZmR2kvd3FBV1hUQXJOR0NPZS8vQnhZU0FCODdWcGE5Zk80QzRNTnY4aU1BUGhGYXFFUlBvUDU4M3NXZVVwVlpqaWxNT1NFQWxpelN5SXdDRkFpZUhEc2ZJTEo4RnpHUlNiRG1sSnpscDJ5NEVpSEQxejhRMy9JMUtCY2NqTFhOZnh2V3BTUW5jK1hpUmE1Y3VvaWZyeStqUjQrbVo4K2UyTm5aUFpmOWxweWN6SjkvL3NtTUdUK0FwTU5XSDhzbkxkUHBXY1VvOWhzU21KMjdpVEI4blQrYjNuKzNXTTZmb2RQenhab3RITGgybS9ENEJPUXlHYjV1THJRTnFjQ1FKdlh4Y2k0YUVVVnZNRkx2cmFtY0dKdUlxWUZiSCsreDVweDdMK28wQ00zejJQRDdEOWk2YmdQRFhoNXQ5cmFuSnFkd1lQY2UybmJwbE9lK2gxRVJrZXpkdkkyVEowNFU2WDJPaVltaFJ2WHFYQm9UZ1pOMU1SdTluTXlFQWhZYVQwZk50MkZJcjA2RVZ2WXNGV1BBcVd2UmZEbHJGMitFbW45cGVIU3FubWtISWpqOW1ZbjdzUGdBaFZ4T2V6RU1oazlUNEtPMjRhVmFMamhZNWYyTG1TVEJsWmdNamp6UWNDRmFRN0xPZ0tjVHVEaUFXZ21KcVJDZENPa1pNc3E3cXFqbmJVOERmNXRIb3FMZUtQSExzVGhrRG1rcys4aUlXbXgxYkY2OHlFd09JOGpkMXltSjVVcFlBaENBdTRvcWFHVldUM3llWHdFd205U1hzd0RJMDZQL3NrZzcrUkFBbGJrMzlPbHZOcGxGZldISjVMZXFBU1ZHNU1neGx0NkhUVGhrSlFlUm1Vdnd0QUZQRFdTSXJpalMrWm9qakdsaFpFeUxWSFFHT0hUOUFxdlAzbVREMzNMMFdGTW1zQUpseWxiQ1B6Q0l1ZzBhVUxkQkE2S2pvdmh6M256ZWZYY0tkZXZXWWVEQWdYVHUzTGxJOTZ3cUxzNmVQY3VNR1Qrd1pjdG1KRU02alh3MHZOTllRNmlmc0NXQjVmQjNBbnQ1RW1mQzdsRXpzT2lOelVxbDVPTytYWXE5SDlZZVAwUGJjanJ5czJxenNXODZPNi9mQkJNRXdQT25UbE9qam1XeUxOdmEyMkUwR2xrNDkwOWVHRGtjaGVMcENvcW50eGZwR2VuY3UzY1BQNytpdTkvdTd1NU1tanlaVjFkOHd2enVTY1Y3cyswc08zY1BjTlVURnBsY2FnVEE0REpPM0UvU1c2UnVEenNsemxacURsM1gwS2g4SGdlcktaVDRKMGt3WTRXTTJXc1V2QmJxVG1XUHZKMkNWSzJSTFRkUzJIWXptUnJCRXIzYUcvaXVIcmcvSmZwWGI0QmpWL1FzMzVYQmE1dGxOQ3hqUjc4UUorelZjbDVyNE1iU0MwcDZURTFpL1pmR0xNbEVCTUsvZTZZbzFRRVZNdlF5cXhKeHNiSUNuanVYQ01EczFabzNFVWoyQ01Dc1ZaaVdDRVFHK0JxdVlpV2xQVitaZ0F0YVRvaU5lWE1IMElsdUVEeEJDcEFndXFHa0VKME1lNi9BMXN1MjdMMHN4eWkzd3Fkc1Jid0RndkgxRDhEVzFwYjdkKzl5NS9ZdHJsKzVRdmtLRlJnMGNDRGR1blhEMDlQem1lbUhxS2dvRmk1Y3lKdzVjMGhOVHNUR0VNK2JUYlFNcW03QVZpWHNSRkEwbkh3Z1k4cmVzcXg5ZC9MejZjdElFczJtZnN5S2ZsRUVPSnRlTGs0RGpmNzJaTmdiNytSNTdNOWZmY3VJQ2VPd3NiVzEySFhzMmJhRDY1ZXZNSGpVQ0t4dG5oNW10MmZyZGthOE9KUUJBd1lVYVQ5ck5CcUN5NVhsK3JqSTRodmZaR1JHLzFsUW5GbDBHSzVwNi9IbW9IcWw1aG1vUGV4dmZ1bm9acEc2VDRXbmN5d21ocVhqODRnQ2RBSUsrRnRmUkJ5ODhKa2NSNk10WStxNFlxWE0zV0hTR1NUK3VaTEVyckJrWHVwa1pHdzNDZGQ4bmx1cmg3a2JaSHkvVEU3L0tpNjBMcGU1YXVIUFUvRzQrcWZ3NC8vWk8rOHd1YW1yamYrazZUUGJtOWU5MjdqYjJMalFtK2sxUUFJZkxZRUFJWlVFRWlDTkVBaUVFZ2dsQlJKcUlJUWFhakFkYkRCdVlHeURLd1ozZTN1ZFBwSytQelRlSFduNlR0blpYYjNQTTgvYU01S3U3dFZ0NTlWN3p2bHhIeFczRkJwTXdDaWpHWkl2WkhrNko5M3pDaXdEY0FBN3U4d0g2REw2SnJwZ29nekFrYi9uUGdGSWxBSlE2SlZlSm5UZmRBOERIaWlvRDhLR3gxRFRHY2dPYkJnRW9JRm9PREFJd0FKQ2RUR2NOUWZPbXVPQkRtaHU2R1R4dG1XOHQyTU5IM3drMHVnUnFCbFVTOVh3OFJ5NThEaE1KaFBQdnZBQ2Y3enROcHdPQnllZWVDSW5ubmdpQng5OE1CWkwzMkxLOXUzYngzLy8rMThlZWZoaGR1M2FTYm5WejNlbWRuRHhUSWthdzhYRlFDL2d3Q0VLdzUwTlBQWGhjczQ3ZE42QXEvK1RTNVl4WjNCbld1UWZRSVVEUWw0UG9XQW9ZU0tRanZZT0xGWnJUc2svZ0NNV0hrTjdheHYvZXZDZlhIajVkK09TZ0s3aUl2YnV6WCs4RklmRHdZVVhYY3pQM3JpWHY1L2k2NTJIN1NTbjVCL0FoRnBZOUZIZkNqd3NpRUxPekxDWmcrMDhzRXFnelF1bGppVDd0QjdnOVJVQ1A3NUg1S0pwbFJ3OEl2bEZsdS8wOHVpNlpzNDlXdWF6MzhnNGU2Z3VzNXJoKzZjcmZPc29pVXR1YjJieCs1MTg5OEFLdmoyem5GKys2K2VETlg2T21HR3NMMW14Nnd3WXlCUmhMaTBnMkRQVDlHbGlCZVpYQ3JsL2ZqYXJ2c1o5bXpVTGlBNlFjdml3aFg3V2VRMlNOREhzcUdvdkF3WWlZVUoxTHdrWVRWRndjRUdGRzg2WXBIREdKRFdOZDBpR2RmczZXTFpySzB2WE92aGtyMEJuMEVSbFZTVkZaY1VzV2JxVTl6NzRnTDE3OW5EQXhJbWNjc29wSEhIRUVVeWJOaTFwREt5OHIzR0JBQ3RXck9DTlJZdDQ3cm5uY0hlMk03ckV4MlVIdEhEZUtWQmtOYnFBZ2Q3SDNTZDBjTmhELytXZ2NhTVpWMXN6WU9yZDFPbm16aGRmNHNQdmVucDAvc0VqQlhadTI4Ym84Zkg5RzdkdTJzellpUlB5VXA4VFRqK0YrMi83RTQvOTdVRXV2T0pTbkRGaXFmcThYcXFxZWllaS9oVlhYTUVSVC95TGR2OWVTbnJEc005RGFOa3BRMkQ5MTMyTEFLd3BjOURta3lpem03SitiUUU0ZkZRUlR5NXQ0L3ZIeERHWUxTUU1iQlVML2lEOC9HOGlIMzltNGVhanFxbHlKcjUzZjBqaGI1ODA0Yk40ZWZkdW1XRlp5Z0pkV1FJdjNTeno1aW9mMS95dGpnbWxUczZiVXNaUDdtdmtzMzlLR01pQ1hXY2dPVDlnMUNjbEJQdEJoekxyMjBwSTBwWkNDdC9GK2oxN01RT2pTd3dVNG9Nd2lEWmpvVERRLytEQUlBQUxFU0txS3NNZHNiaUpNR3NJekJvaWMyWDRCMG1HVFkxdHJOMzNGWi9WMjFqWFlxWXRKUERGNnFWczNiU092LzdsZnRvN09oazdkaXpISFhjY2h4MTJHSFBuenNXWlk5V05IbTYzbTVVclYvTHV1Ky95djlkZW8zN2ZIb2FYaXh4U1ZjL0xwNFFZWDJrOGNnT0ZoeUlyUEhKR0J4ZjgrWDVlK2VVdnFDN3AvM0pVUlZHNDh1OFA4YnVqUEZUMFVIMTA0dWhPSHQ2ME1TRUJxQ2dLazZaTmpmdDcvZDU5RkpVVXh5VHIwb1hGYW1YT3dmTXhTd3BQUC9JdnpyL3NPMWh0V3FadHg5WnR6Snc1czFmYWZNeVlNWlNXVi9DOVYxdjQ5MWw1VmdFNnlUakJSRXBiRFNzRVF3SDhRUW1ieGRRbnhrSjFtWU5XYnpBbkJDREF3akZGM0xtNGcrOGZJOFhmbjZXQnpidmdXemVhbUZOVnpLM0hsQ1oxUk52VEVlS1dKWFZjZHJyRVQ4OVdjcEtwOTdnNThPbURFbysvMmNtOUwzaG9jUnVaNXd5N2JvQ2pBSWRBUUxUbjdFYUZGSyttOU9BT0lxa3BjOVEzbVQ2a3JoQi9xVjYwQjlTZzd0SUJ3ZDczTzdkQkZoWU9yT1E2eTQyQnZnb0gwR1kwUTJHeUQ2aFp2Qk9NVzVNSWsydlV6N240MlovVlJaSmhSNXVicjV2MzhYV3J3SW85VGJ6MjJHZjgrNUVIYVBNRWNSVVZjOUJCQjNINEVVZHc0SUVITW0zYU5Cd09SOGEzN1BmNzJiNTlPeHMyYk9DejFhdjUrT09QK0hMekppejRtVG9JRmc1dDRjV0ZRWWFWR28vWFFOL0F6TUVLZHk1czVzdy8vb25uZm5FVnRXWDl1L1BlOWNvaWFpdzcrZWJVbmlkQU9IcTB3bzNMdndCT2lYdk1yTG1KWThGMXRMZno3QlAvNXR0WFhvNnJLSDNpZGRYSHk1ZzBkU3F1WXZYY2lxcEtobFVONHJUVFR1UHVlKy9oOUhQUG9iaWtCRm1XV2ZyK1lrYU9HTTdVcVZON3JkM1BPT01NL3ZYWVAzaGhRNUJ2VE1xalFpcVBpZVhuakJiNFpGTURCMCt0N1JOallYQjFFWTJlQmthVjV5YWtSclhMaENDYjJGb3ZNYlltenY0c1JUejh1c0FmbnpEeG80T3FtRnlUWEVhNmRwK1B2MzdTeU9PL2xGZ3dKYmZ0YURiQkpTY3FYSEtpb2Z6TEdnd1g0TUxqUGZvd29vUm5QYXBQaXNSUHpQaC9tYmUvT2ZrVEVsSjhra0lPZWtlcW1ZQXRLSWdJR01GU0RXUUJRbml4OEJsTllVQy9NME4xTXpGaVJCWWVZcWdBVTRWSmhOSGw2Z2NVTHAwZFFKVjZxckVBT3Z6MXJOeTFsU1V2djhJdER4ZXp1VUZHdERxWU1XTW1JMGVQcDJid1VJcUxpekdaVEpTVmxYVWI1UjBkU0pKRWMzTXo5ZnYyMEZDM20rYkdlblpzMzRIYjdjWnVraGxkS1RDeFBNajA4bGJPbWlSeHdPR3FldEdBZ2I2S284ZkkzQzQwY09vdGQvRHdENjlrMm9paC9iS2UvMTZ5akRkV3ZzZWJGN3N6dWs1dE1aaERianJhT3lndTZWa0dnN0VUSjNETWlTZnc4UDEvNThMTEw2V3Nvanl0OHkwV0svZmYvaWNPWDNnME0rZk1acytPblJ4ejhHRmNjc2tsbEphV2N1UHZmNC9INjBHV1pVNDQvZ1R1dnV1dVhtMzdJNDg4a2lVZkwrV25iMzNLbk1GdGFjZGU3QkVjcE8xaW1nbG1EZlB6M3FjNyt3d0JXT0swNGUvSXJXVi82UEFpbmxyV3lxOVBrMlB2elpLZ3ZoVytjNXRJc01QT25Rc3JjVm1UTDdaTHRubDRaa3N6Nzl3dE1XTGdSRGJvUDdDUzg1aWRCZ1lXU1JCS1MzaVdpemxSeWZnNFllUDZpWW9RenF5YmNpYmdDTjF6SVdRQ0JoaG1aQUxPZlZrRENVMFlDUjhNeEVaNytHT2c4Q0FEOWVUbDdhSTNDSi9Yd2E0MmFQT0x0SWRzeUtLRlZwL1l0YTY1VEFFc0lwU1l2VlE1MVlEL0ZVNFlVV2JFN1RQUS83R3hRZUM4WjR1NC9JUlR1UFNZdy9wVjNaNVkvREgvZVAyL0xMcW9rOUlzT0tIY3NkVEsrK2JqT09Ub296TzZ6dGRmYnVYbFo1N2o3QXZQWitqd1lXbWR1K1ByYmZ6cmdYOVNWbDdPbkRseitNOVRUMlZGNlp5VFpiaTluZmtITDJEdTRZZFM5K0cvZWYyOFBBUnVyaVp2QktDc3dNRTNtWkF0NWJ4Ly85bDlZa3pjOThKYW1qN2Z4UEhqYytmNjMrR1h1ZUdEUGF5NVdhZU9LMGJOQUp3QXo3d3Y4TXQvaUZ3NHBZSkRSNlVXMXVQZHJXN2UzTjNDb3RzbEtrdU1PYjFQb2hTb01wb2hLWXdNd0NsZE00aU5IZVpKTWE3Vml4bUF3OWRNTlFOd2xBSXdaVjRvZzZ5OXhMNlZqSytaMDB6QVJpS1FnUWNqNDZ1QmVIQmlFSUNGaWd4VWdHbFBFUlk0YUpqNlVabEhiL2hqd0lBQmdBT3FGWlo4dDRPZkxucUZsNVl2NTU3dmZwdlJOWDNiRXBNVmhWdWVmNFdQUDEvQ29vdmNXU0gvQUw0OUk4QmZIdjZJZzQ4NkNpR0R2ZkRvY1dNNTd6c1g4OVFqajNId2tVY3daOEc4bEs4M1l2UW9McnppdTd6M3Z6ZjQxK09QRnl6NUIxQlNVa0xBNzJmQ3BBTlkrcHFkUGUyZERNa2xRWk5uOWQ4NzY2SFNhbU9IMjA5TGg1L3k0c0wzWVJRRkFVWElyWEZSYkJPeENDWjJOa3NNcjlBOW56aG9hb2NyN3hLcDIyZmo5bU1xS1UweFJ1SGliUjdlM04zQzIzK1NLSFZob0svQ2lQK1hHaTlnMUNlbGEyWWNkaTRYR1lDVjFLNFRPVHViZnZpRHF0OEJDVFlJUXV6L1JTbjJZaWdBMFNvQXUvOEtzYTh2Q0xwdkVpd2t1dnUxQ0g2Y1NrZlMwMUtvWXMrUHllU2NmQ29BTXpsdm9NQ0VRUUFhaUxQTFJlVjVqSWdEaFFrTGFpeEFBd1lNOURxc0pqaHRZb0JoUlcxYzhmaEt0dXhyWnRhWVVUaHRmVThDdTdlbGpYUHV1SmRpYVQyUGY4T0RLNHRWY0ZuaHZXMFdmTTZoVkZSbGx1WEhWVnpFcUxGaitHRFJtMno2WWoyVjFWV1VsS1lXaTdHMHZJeGdLTWppOTk3bjlOTk9LK2puOGZBamp6Qmg2bVE2UFg1Y25WOHpjM0FPcmRnSzh1cEcrT3BuQXBaZ0NaVXVFMjdSeW94eGhVK2NiOTdaeXA0ZDlSeFFsZHV4M2U1VGFBNzRtVHNtL0lXWnVPcS9wOThUT084bUU0Y09xdUE3TTh1eHB4aGZZK1Z1TDg5dWFlYmR1eVhLK244dW8vNk5LZ3dYWUFOWmcxc294eXZxSjRXZXJEMUNDdCtRbUFycllSMFVsT2doa2F1c0k3bEdnQUo4VTJra2tlaTdFRkhqUmhnd0VBdE9vd2tLZXV3YWIrc05HQ2dvSERsYVpzVVZIY3h3ZnNTSnY3K0puejN5SkYvVk5mU0plNWRrbVFmZStvRGpmMzhMUDVtemsvdFA5bUROUWFMVDZ3L3VZT1c3aTdKeXJlcEJnN0RiSFR6OGozK3llYzNuL1BQUDkvTy81MTlrOWNwVitQMytoT2ZPV1RDZnhVc1dzM3YzN29KK0x0WFYxYmc3T3FrZFBvSlA2bk80S09jcDgyOGtYbGt0TW0yUWpTT0cyM2xpMFhwakFvbnNuME1kL0c5TmhQa2F3L3piVmdmSFhpUHkwSE1PL25qMFlJNGRrL3FtWUgyOW4wYy9iK0xOT3lUS0RmS3ZiOE5NWHBXN0JyS01QcE1CT0wvVnpnWVhKMmE5a1NPdkk2UjZVU0hqMWdrSURxT1RHOGd1RE5tNGdVUUdnWUhDaFF0RDVXekFRSUhCSk1LM0R3enh5ZmM2T0xSaUdaZmYveWRPdXVtUFBQWGhDanA5L29LN1gxbFJlSG5WR2c2NS9rYSsrdkpWbGwvZXdSazV6RGc3ZnppWXZBM3MyWlU1OFdZeW1RZ0dnOHliTjQrMzNueVRMejcvbk52K2NBdWpCdy9qMGZ2L3pySWxIOGJma1FzQ0U2ZE80Yi8vL1c5Qjk2ZlMwbEw4UGgrdUloZDFuaHhKZkFUVStISjV4T1o5ME5SdVluaXBoYUVsWm54dUg5djJkUmdUU0Jnanl5eHMyZ2VTSEwwZkM0VGdsaWRGanZ1Wm1ZV0Rxcmoya0dyS0hhbXp0OXRhZ3R5N3NvRlhiNVdvclREYTJyRGpEQmg4aHhaUmZGTWZ6QUFNa1M3QUViNjY2U1lDNlQ0aWpodXc3cXZVWFlBVE5aSTJFWWlDU0luY2lJaHNKQUxKWlZrRGJaSnlHODFnSUFaRTFDelJrdEVVQlluOTgxdkFhQW9EQmdwdStoUmc2aUNGNzh6eU0zZHdHKzk4dm9ucm5uNmZOejliaXp1b1VGSGtvc3pWZTI5WldqMWVIbnQvS1ZjKzhFKzhMYXU1NThSVy9tOTZFSHNlbENRalNpUWVYdHpJMU5sek1yN1dSKzkvd01RSkV4ZzllalIydTUwUkkwYXdZTUVDUmd3Znp1dXZ2TXFHejcvZ2dHbFRZb1lBOG5tOU5OVTFjT29wcHhSc1Azcmh2eS9nTEMybXM2T1Q4dFoxbkRRdUJ4TytLLzhrd29VUGlKdzZycEloeGVid2RrTmg2VFkzeHg0MG9xREg5WWZyOWhKb2FtRmN1U1huWlcxbzlESjFaSWpCMVVDSkdnTHIyUThFenJuQmhOTlR6TlVIVnpPaU5MMzdxT3NNY2ZPSGRUejNlNG5KSTQxNXVsK2dGTEFaelpBekczbUEzYnVDU0pNNE5Bc0ZDV2w4Ry8rYVFwcGxSeDZmOFhaR1NOYU9NUkpPS0NnUkpHRDBBVDNKVWFHZ3NySU94WGhMbG5LREdTUmdZaGh2amd3a2doT0RZQ3BrdUZBSmZDTldvd0VEQllzRHF1SFdZNzNjZWl5czI5ZkphNXQzY3NYN051bzZSV2FOSHNHOGlWTTRjTXdJcGd3Ymt0TzRnWTBkblN4YS9RV3ZyVnJHcGwyN09XOTZnRGN1Q0RBNHorcXZreWJJL09xOVBlemN0cDNob3pKaklVUlI1STAzM3VENjY2L256My8rTSsrLy96NHZ2UEFDSjU5OE1yLzYxYTk0L29VWGVQbnA1emp0VzJjamlsb0ZYVEFZUkFrVnRvWG45L3N4aVNaMmZybUo3dy9MUWVCWEFjaXpDK2lpZGREUmFXWDJrTzRONk9Fakhmem96YS81OWJmblV1U3dGT3p6Q0FRbFRFcCtGdHlKRlU2V2J2Rno0SFNGTjFmQmJ4ODJVVzZ5OGZzaktxaHlwdSt2M2VhVHVIRnhIUTlkS3pGanJERXZHM2JjQU9NRERLUTJ4d24yTENaTFZpTCtwY1QrT1FmeC8vYkQzT01MWmkwVGNQYXU2Y2VCZ3c0akU3Q0I3TUNNbWxBZ2FEU0ZnUmh3WWlTS0tXVHNkOTFxTTVyQ2dJRytnR20xTUswMndIV0hCd2hJc0hyUE9qN2V1WkVIMWpyNHZFN0dMNWtZWFZQQjJOb2hqS2tkeXRES2NnYVhsektzb3B6eUlpZDJTMnJrU0gxYk8xL1ZOL0xGenIyczNycUpsVjkraFUwTWN2eTRJTmNkNU9PZ00zdTNIUzZkNGVhTzUxL2c4cDlkbFZGR1lMdmR6djMzMzgrT0hUczQ1cGhqT1B2c3MxbTdkaTFtczdyMVAvdnNzL24xYjM3REV3LzhrNVBPT3BPcW1tb0FaRm5tMDJVck1Bc2k5OTEzSHovNjBZOEtzciswdHJaUzYvZXpaOE5xVGpzaUI4UlRFWGxOSHVBTHdsVlBtdmpWWWRva01HWlI0UGpSZHY3eS9CcXV2V0JPd1k3ZlRrOEFoeVUvaHRMRUtpdlByUlI1OUdNb04xdTVmR281STh0NlJvNjZBeksvZWIrTzI2NE1jZmgwWXg3dU56Qmh4SElmaU1oaEJtQi9wdkdmbEJ6Y1hBOHlBTytuT01KMVUzU3V1Ym16eVpTc1BRM3QvZnBGWitHNTVCbkVZZCtHQTRNQU5CQWJJdXJiUlovUkZBVUxKNm9LTUdRMGhRRURmUWxXRTh3YkR2T0dCN3NXNFpBTU8xcmIyTnI4TlY4MmlYeTZ3OGFlRGd0N09xRFpvK0NYd2hPeklHSVJSWW9kdHE0OXB5OFl3TzBMSWdvS1ZTNkJrV1V5TTJwOC9OK1lJSGNmVGxZeittYUtXWU1WV0MyejlwTlBtVEZuZG8rdTBkblJRV1dGU2lTVmw1Zmpjcm00NVpaYm9nakZtMis2aVNNT1A1d2YvUENIbEZhVVVWNVJ3ZGJOWDNMQitlZnpxMS8ra25QUFBSZTczYzVsbDExV2NIMmtibDhkMi83OUNNK2UxWm45cEN3bThwNU02dWFYUlE0WlZ0VGwraHVKRThjNXVlck5EWHp2akdtVUZoV21UMk5qcTVjRHJQbGhURWVYVzltOFQrRFdoWU1ZV3RKelp6Wi9TT0YzSDlSeDdRVWh6ampFbUhmN25mMW1vTytpenlRQXljNk5DbmxyVnZWK3pmSGFYRWp5VElSRTM4VjArMDFXdVI1UWc3cUw5b3RFSUFaWldGaXdBKzFHTXhpSUF5Y0dBVmpvS0FHYWpXYklLc3dDaEF5L0VRTjU3bllpaktsUVB3dkh5WUEzL0lsR1NJYk9RTGRqaWMwRUJldzlxY0dCUThCaGt2anduZmNaZDhCRVhFWHArNkh1MnI2VDJiTlY4dER0ZGxOZFhSMVhUYmh3NFVJMmJkekl1blhyMkxWckY5T25UMmZZc0dFQS9QdmYvK2FRUXc3aDJHT1BaZlRvMFFYVlRpRy9teFdYdGxPZEM2S3VPTC83OGE4YTRObmxJdmVjV0JyemQ1dEo0SXdKVG43MzhETHUvdkVSQmRsdjl6WjBjc2p3L0tSTHRwa0ZyQ2FCd2NVOUovOUNza3IrWFhKYWtJdU9NOWF6ZmdlREFDeE1ucU1QSTBvQm1JTUVJRXFTTDN1YUFWaGZxcGpkQnhQakFvS1N0OTRTeEliU1U3MytBQXhtYWZqOUd3dUlnU3owRDlGb2hvS0dEY01OSk50WVdBa0hseG50WUtCZ1lSYWh6QTdsRHZWdnRzZy9Yd2hXN29KbjFzR0RLK0grRldhZVhndHZmd2wxblZsYVZpeFFZcFc1L3JycmVQbVo1MUY2NERiMDllWXRuSDdhYVFEVTF0YXlZOGNPL3ZyWHYzTHZ2ZmV5Yk5teTZLMjZJREI5K25ST091bWtMdklQVkRmaUcyKzhrYnZ1dXF2d3BuWlJ5ZzM1WjhuLzN1L0hUNGhjUExNQ2l5bStjWGpjR0NmTDEreGkzVmROQlRubWR0UjNVT015NTYyOGFxZVpKay9QM0w1Q3NzTE5pK3Y1eGpGQmZuaW1ZUXdaOXRzQXhVRGtEeks0OTRCZ3oxOGpDVXIycnhseHVqbjFNK0l2U3BrbkFrbTN4UGpuQkFRN05zVmpER29EV2JJaU1PSUFHaURoNU9mQXlCWmQ2Q2dCR3Z2Z2ZWZFpvTEhBSnA5aU0weDBxY1IzdVJuZWFETFVnQWI2TlRvRDhQZ2FNNCt0dGRQZ05UTmsyREJjVlVPd3VZb1FCQkZmcDV2QXZtYnFGdS9FMDk3TzdPRUM1eC9ReVVrVGxSNW5EajUxbkJlSHc4NnM2ZFA1NE0yM09mTDRoU21mNi9WNDJiVjlCd3NYZHA4akNBTGJ0bTFqd29RSi9QNzN2MmZXckZuODRROS9TT2w2SjU1NEl0ZGVleTJTSkdFeW1Rcm11U2h5am1MK2xPUzNIdTl0Z09ZMksvTm1KMllzQkFHK2YyQVIzNy9qSGQ2OTcyd3M1c0o2KytqMWg3Q2E4aWViSEZSa3BxNHpSTFVydlQ0cEszRG4wa2FPWGhEZ3V2OHpzb1QxUzVqQ3Rwc0JBMWxDQUR0eUR4UWZ5ZFY1dVVnQWtueFBudG1ybXF3bEFvbW9hUllTZ2Rqd0dJbEFER1FQUmh4QUE0bXdQOXVzZ2NLRkJkVmR1eSs5R3lvencvbURWWUp0WXdGMXNGbkYzYXJYaVM0b01jTkxEZUNSakg1bW9GOGhKTU9kU3kzOGJaV05BMmJQNDRnTEQ2YXNvand4dVNETDdQaDZHL2V1L1pTZnZyV09iMDROY2ZVOEw3VnBaaE0rWjJJSFAzNzhRVjU5NjBPT1B1WVlWbnowTVhNUFdaRFN1ZSsrdm9nYmZ2dmJMckt1c2JHUjZ1cHFici85ZGdBdXZmUlN0bTNibHJvdGJUSXhkZXBVMXE5Zno3UnAwd3JtK1NoeURvSzdPc2lyWWx4VzRDZFBtdmpadklxVWpoOWJZZVhBeWlCL2VId0Z2N3RrZnNFOGk2LzN0bE5iWk01cm1iVkZKdXJkSVZTWmY2cGpXdUhXRHh1WU04UFBqZDh4eUw5K2JiY1pHSGpJWVFLUTlOUi9zYTZqWlA5R00wZ3FFcFBLekRYSEplVHdTUWRFUjkvdWtJYVF3bGhJRFBRdFdNbjBWWXFCZktDWXZ1V3VQYzRKSmdGT3Fpb2NkMXVyQ05OMThjZ0cyK0QvYXNGbE12cVlnWDZEN2EwdzV4OU8vdGM1bTNOLytEUG1IWGswZG9jOXFUdXVLSXFNR2p1RzQ4NDhtMHV1L1RWYmEwNWgvaU5sL080REc3NDArS29EcXNIVDhEVmZmUEVGYjc3eEJpMzc2bG44MWp0SnkxKzIrRU5xS3FxNCtPS0x1NzVyYkd4azBLQkIzWHR3UVVnYXo2K3pzNU5ObXpieDZhZWY4djc3N3lNSUFydDI3U3FZNTFOWFYwZFZ0dWVjL1puajg0aC9MUlVZWCs1Z2VHbnFjcVZ2VG5ieC9yS3ZlT2VUblFYelBGWnVyR2RpUlg0bFZ6VmhCV0NxMk8vMmUrd2hmdTY4MGlEL0RMdk5nTUdGcEk2QTZNelpqZllHNzJiV1ZxUGJMVGZqUkNBcG5wT1ZEaFZ4VWY5QUhmV0dPdEZZU0F6MEhseEFtOUVNQlEwUktLTHZKUFVaRjdIWm1GOWFHTzYyMDRwVUVsQ1BFak9NdE1ONlF3cHJvSC9nTy8rMTBPNFhrTGQ5enJ1UHJ1LzZ2czBuSXlraW90bENaWFUxNVlOSE1tek1XSWFQSG9YWnJIMFRaTEZZbUhQd0FtWWNOSWVQMzNtYkdYOWZ5ck5uZTVoZW05b1l2bUZCRTcrOTlxZTg4dWI3dlB2T08xejEwNS95eElNUGNlVHhDeGsrYXFUbTJIMTc5ckRrclhlWk1YVWFEejc0b0NiaHg5aXhZMW0zYmgwZWp3ZW5NOXFJOFhxOXZQYmFhN3o5OXR0ODhza24rSHcraW91TEdUWnNHRVZGUlpTVWxGQmJXOHZFaVJNTDV2bHMyclNKQ1ZWWm5ndUxVRjBIODRTUURMZThMSEx6VVdYcExXVUMvSHgrQ2RmYyt3SFAzWG9xWTRlVTl2cnpXTHg2SjFQSzgvdUdyY3h1WWxOaklLVmp2VUdGV3o2czU2UWpBdno2QW9QOE0rdzJBeG54RFFNUVVmeVNrdittelRRQlNLUzdzVG5oa1puV1l2OTFoRlF2S21UY29obGxBaDZJSkpwQkhDYUhDZFhEd0c4MGhZRTRjR0lRZ0gwQkxsUTM0RkNoMzZjSmh1amNtaWE2d0NiQ0MvVzljMDhpY0dBQ2Vjd1FtMEVBR3VnM2VQYzdRUkxGL3ZDRllHTkRFMnZyTnJGb21aUEhuaFVvclJyRWxBVkhNR0h5SkUyc1BJdkZ3dUVubk1qNGFkTTUvWWxIK2RXQ2RyNTdZUEs0SWd2SEtmemo4ODk1N05HSHVmamJsM0RmdmZleVpzMGFmbi9UVGJ6NThxdFVWRllpU1JKTkRZMGd3T0dISHNZRER6eUExYXIxWVEwR2c1U1VsSERoaFJmeTczLy9HNXROblZzYUd4dTU0NDQ3ZVBYVlZ6bmxsRk00NTV4enVQUE9PeW5xUWRiaGZHUDkrdlZNS2N2aTJ4eFRlSDNJSXg1ZUxIQmdyWk1LWi9xc1k0WER4RThQS3VhODMvNlAvLzNwREtwS2U1ZngrR2p0SHI2MXNEeXZaUlpaUmR5QjVHUmVvMGZpOTR2citQRTVJYTQ0MVhDejZ2ZXdZTVQvUzlYK04rcWNNakxpbDdxUUl1RWlLTmwvVHJycm1OTTdNNVZFSUtrelNza1NnYVJhZGlSa1JBTFlzZUl6QnJlQjdNR0JRUUFhU0d3ODJNR1lkdm9BU29HbUFyL0hzYzdZMzQ5eXdIQTc3T3lGampiQnBTWUFpWWNoZHFOdkdSZ3dzSnRoNW1DWU9WamhvcGtxOGYzSjdrNys5dWtlL3ZHU21SbUhIc1hjd3c3VEVJR0Rodzdsb3F1dTRlNS8vcDE5N2pwK2ZWanljZnpQRTVzNCtnOC94MlF5YzhHRkZ6Rmp4Z3llZis0NVFxRVFPM2JzUUJBRXFxcXErTk9mL3NTZGQ5N0psaTFiK09VdmY4bXNXYlB3K1h4ODhNRUgzSGZmZlZ4MjJXWDRmRDVtelpyRklZY2NRbXRySzJ2WHJ1WHFxNjltelpvMVVlckZRc2VLSlcveG5VRlpuQWRMeWV2TDhFQUk3bmhONUxhRlpTbWZJNW9oTXV6aCtFb3JGMDVTK01iMXIvTHFIYWRUNHVxZGRQZXJOdFV6cXN5Q1djeXZtcURJSnRMaFQwd0FibW9NY1BmeWV2NzJNNWxqWnh2azM0Q3gxd3dZeUNJa0xJVFNpdldrcEhoVStuN1JRcGJLRmphdW42ZzVVa0FBSVI3bEpzVCtuNkIzR3hhaUQxZlU2d3E2MjlNU2dCRUtRRUhRWFNKZWxZV29uMnFrN1JRckxhVFlVb21xMlBOak1qa3YxOWZQMW5rRENWNWdqOUVNQnBMMGtTYWpHZm9FMmlqc2hDRGZxRkhKdmxqWTdvWG5lMEVGZVA1Z0dHUk52T2Y0eTA0SUdPNVZCdklBaXdEbEZxZ1BGTnl0dGZyZ0R4ODZlSDZ6a3hQT3ZaQmhJMFpvalFsSjRybUgvOEczaG0zbmw0ZjVVN3JlRDk2cVlxczBocDljZFJVelo4NUVFQVMrL1BKTDNuampEZDU2NnkwdXV1Z2lubjc2YVI1NDRBR2VlZVlaTm0zYWhOMXVaOWFzV1Z4ODhjVU1IejRjQUxmYnpicDE2eWdwS1dIaXhJa0ZsZFUzSFV5Zk1Kd1ZGKzdxY1pabERleEFmc1ZyM1ArMndNcjFKVncwc3l5bDQ2MGxNUE1IMEw0ZE52MEhsSWhwZHRrdVB5OXZEL0g4TGFkUVVaTC9GekUvdk9zOUppcXR6TW56UzZBT3Y4d043elp3MTRtRG9uNEx5UXJQZk5IR0p3MmRQSDJEeE1UaHhwUTVZRkJMM3RXOGZSSktnWjZYeStzclBidW1XeWhsbjJsMGpOK1VoQ2QyL2FwMHMxNlI1eWc2VXEvcmtqRVZnSXFXbTFPVU9GVlNvdjRuaFArUjJBVTQ0aGI3VGcvVzNxMWZkRkVzdGZUdFFTbms4VHdEcVcwUU0vZFFOOUNmNFVCVkFockpVQXNmeGFocXpVTGtxbXlpcXZLTGg1RU9OZkhHM2p4S2tvZlpFNU4vK3pjTmcyMHFRV25BUUxZaEFEVldsUmdmWVllaE5qVVkyb28yK0xDMW9HNjF6QTUzSE92bGt1bGV6djdQUDVoMCtNa2NPTDg3WTZ2SlpPSWIzNzZVUisrN2g0bVZkWncxT2M2aVVXNkJBNHNwcXcvd3lQQjJGdng1Tit2WHIrZWxsMTVDVVJSR2poeko4Y2NmejUxMzNvbk5adVBwcDU5bS92ejV6SjhmUHp1c3krVksrSHRmd1BidDI2bXdCckpEL2dsQVNYN3ZQeWpCUFcrSTNIbDhhZ1c3YW1IbWo4QmVBY1Vqd0ZFTjZ4NkVVSGlxblQvTWhpREF5ZGU4eERNM244endtdnk1Y0RlMStmaDQ3VzcrNzdqS3ZQY0RWd3dYNERhZnhKTHRIbDc3c3Ayemo1SlpkcU9NM1lxQmdiWVhONUE3ZmlLZjV4VUkvRGxNQUpLUHJWTXNtS09yazNvaWtIalBPSlZFSUZubFVxSVNnVGlOUVpyTmgyWkFiUjg3cXNyTGdJRzRPMUw2VHBLSmdRd1JsUVFzeExpTm94MXE5dDlFV0ZDYTMxaUFjMUswa0ljWUJLQ0JMS0k0bkZ4bXBGMGx2dTB4a2d6TUxWV0pzdGNiZXpkQlRwVkZkZDBmNDREbGJmQ1ZsMGsxc09LN2JrNSs2bFZXQnZ3Y2RQZ1JYWWRiTEJiT3VleDdYSDNmWFV5c2JHWHFvQmpYckxYQ0REWHVwaFZZZVQ2SXB1VWdUQVp4U3ZkZjFKaCtralF3M2o2OTlPSi9PV05jUjg4dllCUFZaRVltb0Z4VTkzWkJXYzNLRVZKQXltMC8rdGRIQWdjTmRWRmtUWjQwbzN3Q1RQOGVtQ05JallvRFlNNHZZTTFmd051b2ZqZHZxSTBTcThBWjE3N0V2VmNmelNGVEIrZmxXZHp4NzA4NGZid0RvUmRzQ0ZHQWRyL0VyOS9mUzBCU2FQUEtGRG5oekVNVkZ2OUVwcmJDbUVJSEhHemgvWjJCNUhhL2daUVJ4U3Rsc2YyRUZDK3A5UEF4eDBvQUF2RVVnQ2tTUWtrUDY4VkVJQ3FOcVdUV1dnWU1STUtKUVFBYVNBeURBT3g3NDduUVBBakhwZkFDYTFRZVZZRGxGcFhVU0FYNnhDVUdES1FEaTZDcVgwYzZZSlJkN1h1cFlMd1RTbXJoeFhwdzU0a0VFOEw5Zlp4VEpmN0tJcmJUcDlmQTRoYjRwQjJYRmY3M2Z4NE9mL1F0U3F0cW1EQjVVdmR5VVZ6RXFSZGZ5cW1QUHNDU2IzY3lyRFRHMklza1BFUkEyYXgrNUJjajdtVXdDRk80NXFjbVdwdWZwcXo4RUJDRzlibkgzOURRZ05QcHhPV0s1Ny9uQnFXRFQ1YitrejhlSTBPbEEyeUNTdVpaeFRDeEozUVRmSnAvaTkzSEpvTlBnbzRRZEFTaE9RQjFQbWdQWnFXT3NnSi9XaVR5dThPVHYxU3BuUXVUTHdJaGhwZTJxeFlPdWc1VzN3c2RPOVR2SmxWYnVlR1FVcTY3NXoyK2Nld2tydnJtckp3U2MxOTgzY3dIcTdaeDV6Rzl4N1NWbDhDTHR3VncycURZMEg0WU1QcUFnWGpJZ0ZyeUM5bm9XTmxQQUtKa1VIZGg0L29KU25Sc3Z6VGpBRWJFQU93K0lrWWNRTzB2TWVJQVJ2d2l4SXIrbDNvY3dHSFNabXlLcDJka1hxN2lBQW81T3JZM3p4dElDQUE3aldZd2tBUk5HRVJ4WDBFSWFLUnczb2FhQlBqK2NKVUlBZFZOMlVUc2pIYmJ2UGxSQVM2c2hHbmRMbVZLSndqeFBNd0NzaG9IMEhpN2JDRFZmY2NncTByNGpiU3JoRm9taVFRNkpQakhydHpkcjFsUTNZL0hPV0dzQXh4SjR1ZXQ3WVIzbTBGVzJOTU9CejlTeExrL3ZJYVNVaTM1ODlXV0wzbi8yY2Q1ODRKT3hrUnlLYWRVdzRTZUdoN0YzU3BCWVVyNDMrTklLL2RmMXVCV0p3N0NINlVqL0xjVDlZMVpPeWlkTEYzNkp1UEcxVkpUN1lqNHZTTjhmRWZ2OWxXdkJIdThzTjJ0RW9JOXhDdWZ3WU52T3JscWZuWEM0MGFmQ0dOT1MzNjl6bDJ3NGxadFRNQ1FyUERJV2pkTjJMai82cU56NGhMYzZRMXkzRlV2OFAzcGRzWlc5SjZQN1pYLzI4VVhqMHBZekJnd0FFTlJGYjBHRWtNcDRQT1VIRjIvaDljTlltT0hlVktNYTZVWS93L0M4Zm9FM2U4eDR2L3B6OVRGLzlQUU5ZclM0L2gva0MwQ0VBb3VFVWkxdElzU3BUSHhhWWsycGRrNEp0UHpjazB5WnVPOGdZYnRZZExBZ0lGNDhLR1NTZ2I2QnR3VWptcHpqQVBPcU9rMjVONEVwUTBzNThRNS9vbTl1VTJDNEREQlpVTlY0Z05BQXYvdndYWmpnblArdFJjYUFrYS9NaEFiKzkxNjk4ZnlzNmZvcitVTGs4OVZDWTRKS1hEdmp1emVyMTFVeCtWWXAzclBsalEzU3p0ODhISURCR1JlMlNSeTNiSmhuSGZsanhGRmJiMTNmTDJOMTU5OGhMK2Q1T2FrQ1dFMjU2SWhxbXR4ZU96Slg0RTRCdldsUUk5Z0FXRWlpR0ZTVUppcy9qdlRpUG55cXlDOWdVclNSUkozN2VyLys5c2JnWTRRYkc2SHJaMXB1d3NmL2dlUmIwK3JaV1JaYkhXcllJSko1OFBnQlRxenJnMkVrdGg3OVkxUHdlN0YwZCt2MmVmbm9iVnVMamx0R2xlY01RMHhTM0xBUUVqbW03OTVqUU9MZ3l3YzNic0IxLzd6ZVJzN2d1MjhjcXVNMVNBQkJ6WkVZTFRSRENraG53U2dVaUQzMWNNRUlKMUNPWFdta1RGKzY3c0pRQ0FKQVJnYmhVZ0FnbDduWHFLMFVDMXRUM3BhQ2xYcytUR1pubWVvQUFzUERSZ3VuZ2FTWXk5R01wQmNRQUJjWmlpMVFMRkYvYmZEMU8zaUphQ3E2UFliWlFFWi9ETDRKV2dQcVc1YzdVSHdoTFRyWkNNUUxJRDZIVmNKVTd2VkdyNmZnN3dHbksvSE1mcTNldUNsaHR6ZHo0SXlOZDdnZm43bE5mRGZDSzVseEkrejgwNHpyT2t3K3FvQkZUMTE2NVZCM2dpaEQwSDZDS1JQd1hZZFdNNVBjSTViZ2dleW9BQXNOc000aDZyMEcyWlB2amRTMVB1TlM4eTkyd3lmcVdQaXg0dnNyTGZPNCtqVFRvODZyTDJ0alpjZmU0Z0YxVTNjZG95WHF1dEhkTVVEbFhlQTV6akFDdUlFTUUwQzhRQ1Z2eE1uUWtZZVNzS29iakp3UHpFb0RFcjlmT2xmRVBwTjRkcTZicnA0U2FXVExrR2k0dFkxUXprSUZTQldnMUNid3A3WUo4SGFWdmlxTXlYajhyTWQ4UDFIYk54MFZHM00zODBPbUhZWlZPakVKdkpYNExzTXJGZUIrZFRvODRKdVdQcGJDTVhJYk84UEtmeG5nNXUxVFRJM1hMcUE0K2VPeUtndDJ6cjkvTitOaTVqaUNuSG14TUx3dDN4cVhSc2Q5bmIrODF1NVYySVJHaWdRRkFHRGpHWklQaUVXOEhrRlNBQTJtb2JScG4venFDaEpUeXdFQWpEeTY1UUlRQUJCRUZKaWlXSVJnT3IzOFFsQWZZV2pDY0R3TCtrUWdEclMwb3FmNGFFTnlVOGpwV3FtLzNzMnpqTUl3TUtERzlobk5JT0JKT2lnTUJOTTlEVUlRSlVOQnRtaDJnNlZWckJrSWNKelVJWkdQOVQ3b2NFSCt3SlFyL1IrWGI4M3JOdXRNQVR1ZzFVUmplMVdzSndaNTd4Y3FRRE5BbHcyREJ6ZDdlMDVDK1F2d1BrcWlPUGluTGZCclNaa01EQnd4K3dnVzNmeWpqVGNlcFc5RUZvS1V2aWp0R2gvdDk4TzVrUnVrVTFCZUd4UHorNjcycXE2OVk1enF0bUdrODRoSUMySDBOc1FlZ2RzdndYendqakhmdWxSVllDQUpNUENKNXlVenpxSjJRc09qbTREUldIMThtWFViM21MeFVzaXlQZDN3ZmY5K0cwdWpnUnhrdm94aGY4bVZFc21mWTZWWVNKd2FwZ1luQXpDYUdJeS8vSlNDUDVmOXUxVUw5MkN3ckRuc09MdTloeU9JdlE2MFJKOUhlRy9QWmphaFNJUXA0SnBHcGdXZ09rZ1lvZGlBR2p5dy9JbWFFdjhGdW04djVxWVdWN0puS0hScWpsN09jejRBUlFOMVg0dnJRVGZEOVIxUUtnQjV4c2d4QkRkN1h3UE5qOFR2K3g2ZDRqSFAvZlFLcHU1NXZ3NW5EQjNaTnBrMmFMbDI3bnVyeC95clVsT2poeFpXSDZXZjE3V3lPRUhlL2o1dVViOGlRR0xHdFRrYmdaU0lyWUs4cnhjbFpHQmNuRzNhUUsreURkc1NySUx4aUlBWXpuNkt0SGZ4aUVBOVdSaHVnU2dFb093TkNlOGZ5SDFyTDRwSFNCa21tRWo5Zk9EMkZBUUVaQ053VzRnZTNDUTVSVFdCdm9sOWljRDZlLzlSQUJLTEtvaXI5UUtaZUcvM2hCODJLZ3E3OUtGS0VDdEhVYTZZSWdqdGFEdDZjSWl3bUNIK2dGVktiak5DK3Zkc04yWDh5eVFNVEhFcG9rcEpxMEllOUFCd2IrQjVUVEFCQnMyQnBsMFFJUWx1cUEwTnlyQXlTNE4rU2V0Vk1rL1VOVlkrd25BN1R0Q0RCbHN3ckxmTmRKSUJETHdVR0x1enRTYmhsdXY0bFZKTk9ramxmQ1R0eVlySjhudmZqbTl1V3VvdlZ2cFY1TGNmMURwQUdteFNzWkpINFRKcGYzalkya0NBbkM0dld2ZllCTGgxZk04SFBMUWExak1WcVlmTkVkN1c0TEFnZk1YTVBxc0d1RFY3ckszSmQ0YXk5dlVENjlIWEt0S1N3aUtrMEVjVG1wWk1wVW1VSllBU3lMVTdBNVZkaWhFWkNBV0pvYUp3UWhJS25tckorUTBvZi8waEY2c1kzcHgrNjUwZ3JSTS9mQVAxZjNXZkRKWXpsTVZtQnBVMnVDRXdmQnBDMnlKclg1dTdJVFYyd1V1blJyTjNoVVBneGsvQkpzdUNVem9OZkJkUzFmWUdhVmVYUXVzUDR1Ky9yQWpZUGNTY08rTnc0MjR6Rnd6cjRUZDdTR2VlSFk1djMxd0tSZWZOSmx2SFRPQjZyTDRicnlkM2lDdkw5L09mYytzcHNJaWM4T2hKZFFXRlo2djdaVUhWZkt6Vi8yY2RraUlpY09OS1hsQXdrZ0FZaUFIUms1QVNDZk1RWWEyUXhZVGdFUzYvOGFDV1hkWWlwVVRFdTZwbEVUSHhmaGFDZWZzN1ZtSjhjL3hDUzRjU2tkdU12djI5SnJaYTJvRHZRRVJOY0Nza2VUQlFMSis0a1JWalBZWHVNemRCRjlabVBRcnNjUlc5eFNiNGZoYWVMOCs5ZXlKUldZWVh3eWpYR0R2V1pBckpjSTlYM0NSZXF3c3F3Z1RYT3JITDhNWGJ0V050U1dQZnNHNjdMK2h0N3IvTGUrQTRNdkFLUXFublZYUDJsVkRjRGpDN1Q3V3FjWUphOHppdlFyQWJDM2JFbndvNG41V0E5OVUvMzNYUGUyY2Y2Nkx1UWVGaWI5U016aE40REY4NFBzdHpFSTM0VGZTQWVVcEVnSXl5QnUwYnIzcHhOU05URDZ6OWFzUUsxYjZPZTliRWZIcmZITHkreDdsVUpWK1k1MHBFWlZLdlVyNGhkNVd5Y3A0b1FLa2p4SmN4Q2FxcXNoOWF0WnVwd1hlLzdhWFkvLzFFbjZmbTRNT095THFsT29LYmF5UnBPUm9ySHR2QkdtSit1bHFRNmZxTWl4T1ZyazgwMlFReHdNcDVYSHdoZ2YvNm9qdlRDQ01DWnNUNnNPVTk0SG5tUDdWNVpWMkNENmxmc3hIcXU2NDRnR1JhNzRBY3lxZ3dnb3IxY1F2a1hqZ1haR0ZZMHFpdHZTVlUxUzNYNVB1dlVuZ0FRamNIWDBmZ1VmQmZBNzRLaFUrL3lMUU5lOEtJa3o0SnF5K0ozRTlocGFZK2VIc1lqcjhNdStzMjhLcHIzMU9XYW1UaGZOR01hakNpZHNYcEszVHo0NjliYXpkMmtpSE84RGNvWForTU0zR2lESkx3VDRmbTBuZzhnTXIrZjZmRzNqblQ0YndZOERCUmdheFVRM2tidUxNMGJIWk9DK0ZhL29GTzNJUGlKams1SnlTQnVlalUvOWxxYkd6OXhwSFVjaE84SVdJRmtqcm10RXQ1OE9CZzQ2Qk9lQ0VQSjQzME9ERUlBQU5KRWNSZlpNQXRKdWlpYjVTYTNjaWlGVGhNc054dGFvU2NGK0NBVk5wZzhrbE1DejU2MXVsQ2FSMWFtd3dlUnNvTzFRRFhXNUVUYjRTWTFNb2xJRllDOExJc0p2Y0ZOWG9GV29TR09zSEZxdWY3VDVZMFFZN2ZibHY5L0ZhRjRQUTI5cWZnLytBSlM0ZlgyNE44Y0EvTzdqcVJ4RUUzYnhTZUMyTGJyZWpIWnBZYmZMWEVQb2dndXdJMi8rdHJUSVBQZHJKNkZIbWJnSVFZS2dOdG5pTU9hQy9ZclFEVHExT2JWdXgzNjAzclBKVFdudGU3RHVyZkx6d3FJYzMzL2J5OWJZUUU4WmJ0QVJnTEFXZ1hWVEp2bkZoc2pLRmVVemVxcnIxU20rcjgwMHErMnA1QnloN1FCZ0NicmZDdHUwaHBreU9JRXhHMnJzSVFJQlNPM3p3YlRkblB2MDJiOVRYY2V3WloyRXlkVnV3bFdYTjJ1dC9uYVh0b1VjZHY1S093eFBIaHRXQysrTUtUZ29ublVnS0NaUXRtbS9Fb1dDOURrTFBnZnhsLyt2K29mY2h0RmhWQTFxdjFzVmZIRk9rdmdCWjNOQ2xKSmRrZVB3amdUdVAweVpiR1hvb1REeFBKZThpbTlQL093ZytHNmZ3QUhUOFh1R0VUWFhzMkJsaTgrZERjYm5VUGwxeEFGVFBoSWJQa3RlaDJDWnl4a1FYWjB4MHNhOHp4Tm90WDdMWEwyTTNpN2lzQWxNZEprNmY1NkxJR3UxVDZhZ0dPUVQrbHNKNkxqTnE3ZngzazVVbDYzd2NOczJZcGdlY1hXWWdjMllxMitmMWNmaGpKc2hLb3pFMHJyZFpha1FsTzlkSlNnRG1tZy9LcFRlbFgzUVpnZmdOWkI4dW9NbG9CZ05KWUVGVmkvb0s5UDZzb3M1MTF3SmwxdXk2M0ZwRU9MSUdWamFwR1JNalVXNkZHV1hkYnJpeDRBdVRCNHRWOVUzYVJyQWZsRHFRNm9BMTJwL0VFV0NhRGFZandIU29WbDJrTWRwSDJsVUM4TU5XMk92UHpiT290bXBjRUtXMW9PaThldVd2NE90L3FBdmFiWGUyYzhWM2k3dFZnQk5kc0t4TmpZR1dEY3pScWY4ZTBTN1U4amJWeGUrQmh6cHh1eFdXTHZOejFZOGlUaGhzRUlEWm4wK0VsR1BweFlTc1FGREozdHdSYjIvcVVkM1hVM2JyVFFPWFh0UEVybEMzWkxDc1RIY2Yrd25BVXJPcXFCM3JVTjE4a3pXYnJJNDU2VzJWZUplMzlleiszcnZUejUrM3QvSFdPejdHampIeithZER1bjhjWVlmbDJzQ3dUZ3NzT3QvTnI5NzdqTWYrdkkxVEw3aVk2a0ZxRlB2S01pMjdrczEyaklJRThtYjFFM29wWW44K0pNSjlPT3hLTEF4SnNZdDhXLzFJYXlENFQ1VlE3VmNSZVdRSVBxbXVUZmE3UUl3a25Hb2RjRVFOZkZBUGtzSnJhMkJ5bFIzbi92aTFBb3c5SFVZZHJ4czduZUM3Q3FRUEV4ZHRXaUxncWhQWjQ1WDR3MjF0M1BMN3NxN2ZKcHdOVFYrQW5NWlNVRnRrcG5aY1VVckhPcXBoOXMvVTYzOXlkK0dSZ09kT0x1TVBqOWV6NkE1REJUamc3RElEQnJMT0krV09XYzRIdjVZSWNRbkFTTGZjbnNRQjFHWXJJWWJiYjdLYjZ3RTFxTHVvWDhoZ1JqRFVjQVlTRVRzV0NpTnJxSUhDUmhHOVR3Q2FoRzV5cnpTQzZITms2QzhoZ2J3ZDVDM2h6eWFWU0xOOEs4WlVmbENsbW5Dakk2Z3FER2VXdzJoWGZHTjhLUVQvR3pZYWM5Uis4bzZ3YSsxLzFmRnNQa3pOc0dnK2htaDN1T0YyT0s5V0piWGVhNGJPTEw5WjBybi9TbS9IUG16Qldoc2lzSzlPaWxZQnpzK1NDbkNRVmMxOHVuOHBiSWJnU3pFMlJpc1Y3djJMNnFhNDlHTWRNVHJVaUFPWWRaeFpvM2t1UFNFc2VMY0oxblptWjA2SnZQUlcxV1ZkK2lpc0xBdmxwZ25hWksxUlgxYXFJd0NyclhEaFlQVnZNZ1JBK2xpZFkwTHZxT3JpVExIOTJSQ3ZOS2hxNXkvV0I5bFhKMUU3S0R6UERyR3A2c09RTGhPZkFMY2M3ZU8wOFhWYzhQRDlUSmh6T1BPT1BGSkRBQ3F0b1BSQ1VpbGxENFQyQU85RTNHOUpkTElSY1N4eDNlOU1NOEIwbjZvRTlOK3VFbWI5Q2ZKTzhKd1A5ai9vTXZRT3NzT2gxYkM0bnIrOGJlS3M4ZXBjTFpwaDhzVXdhSTZ1cmV2QWU0V3FiazhGdDFXVU0zK1BsN3Z1YWVlNzN5bGl6R2pWbkxOWHdzaGo0ZXZYYzhDeERJWlpQd1pibWZyLzJUOHRQQkx3Z0dvYkQ2NDJzYk5CWm5nMUJnWUNUS2d1d0FZTXhPTnplZ2lmbmtmcTBiV0U5Rzh2U1NqQWxPUC9FY2ZkbUdRS3dJeEpzQmdYeUdNaWtCQm1nbGl4RU1oZHB6TGlBQTVNdUlCV294a01KSUdkeU5CSXVZVW9xTEgzOUVSZnBnRzdGWkQzaEVtK3pSR0UzMWVxRVIwSmFSbVlqMWZkYnFQV3YxbmxxaXZ3OUxLWW1YeVZUdFZsTFBpa2FsVGxGY0Z3bks5M1FhZ0F5OWxndVJBRXZRRXgzcWtxQWo5cWhjODZzaWRmSDZkVlFVYkcvNHZFV01IQ04xd3Vubk83YzZjQzFNZisremNRUS9pNC9qOGg5dXhWaWREZGV5UjI3QXd4WW5pNHI5VllWWkpJTXJJbFphK1BadGlXSW5Cc3BlcmF2Ymdsczc2cmM2TU4vRlZOV0pCcmRPZ0l3TkpTM2VZb0NmR3N0SWVUZUx5dC9sV3lMRkk5eW03WHZMcCsrMTBmRjV3WE5pQk1na3JnYm9zZERtSCtjSVcxMzNQeng0L2U1OW0vZjh3TlArak9DSkZUOVYrNnkwRjdPSEhMOHU1M29JSUR4QVBCTkFkTUI2dWtYMVQzR3dlT0J5SDBIdmgvRzYxdzd0TUlnTy9uWUdzRXkzY2l2aC9pb0hOcUpYV3Q3WXl0c0dKeHdmVHZRWmt1ZzdxOFVTWC9sTHJVaTV4b3NYQkZjUWwvYVcvblo3OW80Y1ZudXhlcmtTZkFubVhaSmVhS2hzS0JWNEVsUWlqb3FDNU1FdkNva2NVOC9rWXJ2N3JBVUFFT0dIdk1RT0docjhiLzJ6OHZZeWFRRnJPY3hRUWcyYnBtZ3RQTjJxT3luUWdrOWRPMWlVQ2k0d0QybEFmekNTNHNTbURnRVdsR0hNRGN3b2xCQUJwSWNlZWM1YjRpRUU3SUVTYjY5c2ZySzdGa1BIYVZ4aGhFMzVkcXBzYVV6dStBd1AxZyszV01INGM2MUUrTWM0S1BxUitsQUVLMktzMFFlQkFDajRIbERMRCtRQmN2MENyQ1VSVXE0ZlphSTNSa3lPNldtaldLSmZuTHhDNkkxNVdWOHJ6YnpiNDZpY2VlNk9SN2wwWEVhRHFvRkJabG9BSXNNYXYxNmxwQVZVSTJGcnpMdGF2ODBvLzkzUVNnU1ZDVmhIdjh4dmpQRnJMbHZqdTdSQ1VCWDJ2bytUVXR1b2ttRHlybmRqbmFtSTlTQU1ZYXovdTZWWDdTY25JYUZxYktaR0txMWNxNmdQcG01TzEzSWdoQVVOMkF0OFdQaCtxMHdPK1A5UEt6TTJVZ2dnRDh1ckM3cHVJTnF6OC9BdTVSd3l1WVR3UHptV284UUkzUmNSU1lYZ1gvOWVvTGwvNEUvMjJnV01GNmZzVHlQN1dJUngrMjQzMGZabHdKemtIYWM2UVBWYmRmcFFmQzNPdkxTbm5hN2VhbFY5UzRtTWNkcTY2dkppdU0vd1o4L2xEaTh6c0RNdHRhZ3V4c0M3S3J3MDlIUU1JZGxQRUVGUlFGSEdZb3NwcVlOc1hHYi85WWdxVW9lb05SaUNUZ0lTT2MzUDVoRzcrNndGZzJCb3c5WmlBak1pZ241L1h4ZHZMMjBJdTBxN25peFA5TEx3Rkl0OW1Ydllla0hwdmRYTzVaU3dTU3lWUFRsdThYWFJSTExjYkFONUJkT0ZBVkZjWUxSZ1BKNEFMYWU5aFhIS1pvb3EvVUV1V0NsL1pNMlI0bW1qWkhFSDVmcW5IZE11WXBuZ0xMQlNDT0Fsa0dNWjZOTGtId1B5cGhxQlRpRk8ySDROT3ErNnYxMjJEOUhxcWljeitHMkZSM3d6ZWFZR3NHVWlKOTl0OTNFaDgrMFdMaFpLZVRWejBlYnJtdG5Vc3VMc0pxRGZlSFNTNVkxZ3F0UFNRbFp4VnJsdERneS9HZnpZU1FCWXNnRUF4dmNwWXU4M1B1TjEzYTlqRUl3T3docUoxQTVNOFRLOWlFS2hESHhQbHhqQVBPcllWbjY1Sm56bzBGWFN4Q0pROUpzV0lTZ0dXeEp4ZDVpNnJ5QzcyanRsTStjWlRkM2swQXZxdHJtSkdwdVhDWERkRm1XeTBrQldBcWtIZW84M3JnYjJBK0Vhdy9Wa25CcnI1WkN2YS9RdUFlQ1B5OWZ4bVkvcHVnVVpFWWNrRzNUL1RNSTgzSWg0R29jNU1PUGdmK0crZ3hLVjBxaXZ5MnJJd2ZOelZ4MVRVdHJGM2x3QnkyNmdiTmdWMGZRR3RFRXBZT3Y4emFPaCtmTjNoWlgrL0RibFdZUGh5bURaZFlPQlJxUzZIVUFTVU9kWWg3QXVCMldCaDVUaVZXbDZCWnV5TmR2Z3VOQkt4d21QQjVSVm83SmNxS01OQ2ZJV0FRZ0FaeUFwK1lZUUtRWEVESlh2bm1WTWRYcnNkdjFxcWs0d0M5UW5IV3JtWEFRQlN4MDJFMGc0RVVKcmdpVkJJd0hxeGlOTkZYWm9ucEtwdmVDcWE2NmtxYklvaStyV3BtenB4QmdvKytGZUF5YnlQMURSSWIxdzZocGxwcitVaXJWVGN3ZVV0ZjJBV29SbXJ3WmJEZm9DWU42WUpkaE5PcjRaUDJucnRWNmduQXQ1S2ZjbjFaS2E5NVBPemNGZUxoeHlKVWdBSnFMTUJGUFFob1poTmhXb1MxSkllVGY4U0JReENZYnJYeWlWOGwrWll1MDVGOVE0eWdQTmxsRnBRb29rRmFFLzl3eTNmQWRtMkM2MVdIRS83MGhBQzA2ZWFsUE1URDdZaXg4UzB0MGQ1SDhCazE0WVM4by9jZTA1RU9PL2UycTVQOTdqMFNHellHbVhTQXBidk5IU2J3Sm1GOHlyVmJjMlZiSCsyekVvUmVoZEFpc0Y2aXFxa2pQYXFzUHdGaEVQaHZwTitRZ0FKZ3VVbmsvWUNmSXkvcHJxeUcvRk1peU04TThlM2lJaDdxNkdETnhnRDMvNjFkRXhkMndqZGgwVzhrUHR6bVllbnVUb0t5eExGVEZDNDVWdWJRQ1ZDVVpJb3VHMjZEbzJxMCs1QWcrSDZzdW5SYnI0NVlEd3FNQkp4Y1pXUHAraUFuelRXV2puNE5wMkduRzBqQzQvUjQ2Ky9LMnJWaXJSTzVYb2VTd1p5NDNYS1VDQ1FjQjdEbmlVQlNaK1lDMkpBeEllYks3OE9JQXpod1lSQ0FCbEpGVWJpdm1JUnVGVjhrNFdmUE1DRkhTSFViM2Eva2svY1RmcnZvRlpYcXJEWXJOZnRNYlBJRitkMU5iZnoxM29ydTZhd0R2SmNBM3I3MUNKVTlhcHdteXpmQStrdGQxdURaSlZCaGdWZlRkS3QwbWpSeHk1UzlxU21XcGx1dENWU0FSV29zd0hSVmdOT0tOTmxkUTR1VHV4N090OW02Q01EUDFnUnd1eFZjKzVVaUJnR1lYZWdVZ01sVUQwSkZDdGYwOUhCZnBPUC9VZzBSa0FrNllpZ0FTM1FFWU9qNTNpWC9BQTYxMjdFS0FvRXdZZm4ydTc1dUFoQlVOK0JOU1Jxc3NtOHJBR090VDRFSFZaZGYrOTBnanUvK3lYSXVZQXVUZ0w3K01WUWRna0RKSDBRZURuWnl5UlU2Q1pvTXZtc2g5RXIyREwwN0tpbzRmdDgrZm5kekcrZWY1Nks2U3QxUEZBK0h6U1BhR1JMcTREOW5Lb3l0U2VQQ2xUSElQeDk0djY4bTZlSTk5YmxaZnhoUjcycVllWlhDWjM4V2VwMEVIRjloWjlrWEhrNmFhN2pwOUhzN3pFQUJicGh6ZEd3MnprdnAwaUlCd1ptRm0wa3hBWWdRTyt0SHJoS0F4TnJHNWFDQmxUU09WSEx5ckx2OHVCVmpBUGIyb09wWE1ONDhHWWk3S3hmQVpZVWFGNHdxZzJrMWNQcFFPR2NFSEZjTDh5cGhZakhVMnRNai8yUTFRVWJvSFZVOTRMc2FQS2RCNTB6d25BSytuNFVEOHI4VE5vUjdjZTk3UzBVNUl2RGdReDJzMzlBdEVSS0tWWmZhUHN2RHZBQ2RwOGZJMWpqYUFkK3NWVW05VkRGV2wvempuZFJQdmI2c0ZBSFl1U3ZFWTArNHRmdU5lYVhwRXpxemRNay9Ia3ArMmp4Yk44a25TYkJpVllRSzBHbUNNck14RjJTdDQrbXl4eVlqQUt0U3VGNm9oNHU5VllnaWVIS045cGdFb000VnViUDNINU5ERUpnYk1TN2VlVS9IYXFYaUJsd2VRUUFHUWQ3ZFA3cXcvQ1c0dndtaDk3WGZXODRFNS9QaGJNTDlCQk1zRnBwdVZQamJneDFSYzYyUTVleTBDK3cyem5hNWFHdVQrZlVOclpyZmZ2V3JFcTQ5VThnTytYZEZtUHdMSTNDL1N1eEdvcWhHWU53UFpId09xVmZiZjJTWmhjKzNHaHYwZmcrREFEVDRnQnkwazE5d0l2ZkF3RTlPemluNWEvd2s2WVhGclBlbThGdFBJZU42S1ZIWDdPbDkrVVZqaGpDUUF4aXhKd3dJZ01NQ1ZVNFlVUXFUcW1IMkVEaGtCQnc0R0NaV3dmQlNxSENvRWJYVG1jbnExS0Rxd1VmVWdPbWVzOEU5R3p3THdmY0RDUHhaemJ3cGI4NlBBWjR1WmxxdG5GdmtRcExnNTlkcjVRQ1d5MU1nS0FyNXNlK0dqck1nOEtMdWgwRldPTDlXL1pzSzlPNi9iNmQrRDlPdFZvNTNxZ1RpYlhlMkVZcnNBNU5jYWtib1ZESFJCY1hkeEtYOE9VZ3JrNTgyMzY1VitYMXN1QUhuRG5vRllKTG9KdjkreTgzdmJtN1ZmSUtSSktJN0F3UGRsSC9pclVOTzdnSmNDQVFncUhFQTkrTzlEM3hJa1UwOUlna0JLS0txd3ZlUHhlM2tOSEZKM3VkT0wzaXVoTVludFAxWkhBdU9wOEYwV1ArcDZ4VWx4VHowY3plUFA2bFZmTnF1QWRPQjJTM3I1b3B5bklMQVB4N3VaUFZuZ1lqQ1REQzFMUFVMMWRqamszL0xvdzhQM0tXU2dGOXU3VjZBYW9lS1RQdUp3dnVOblVpOTlCSnlSS21GclhzeDBKL2h5SXpGTUdBZ0hyeGtHUDh2VGdLUTJNY21Oek9qcjluRCs5SnROVksyYzNOdFIyY051cmJ3VVpTMWF4a3dvSUhCTFE4c0ZGdGhXSWxLN00wYURBZVBnRGxEVk9KdlpKbEtCRHJUeThhcnRLbGtTL0JKMVEzS2V3RzQ1NEw3Q1BCZXFtWVdEUDQzSFBTL2o3bk4zbEJlamtNUStOOGlMMisvMjYyRUVSeHFZUGkrREpNRWdldGd4NjhsN1RwUmJJWnYxY0tVSk91T1ZkU1FBZnY3UVRxNHRsUlYrbTM5S3NRVFQwV3dINklBODBwU3Y5QnM3YkdCUjFJN2JiREp4SEJ6TjlINDRWS0RBTXdaQWpvRm9DUHg0ZmM5MmM2Tk43ZDFmZjU0Unp1V3lPeTkzZ3hZSlhQK0ZZQWRTalNUVUtyUEFsd29CS0NqZTF5M3Q4dGFaV3lKT2JFeXR0U2kyWmtYZWdiZ0hoa2VDcGh2Rm5uNWVxL0dwaEdLd1BFM01CL1hUK29KM0Y1UnptWGZhOUxPalNMWWJrK3U0azBIUTB3bXJpa3JSVkhneHo5cjF0cUtFNHJWZnBVTWcreHdwSmI4VXpyQWUzbHM4cTlyYXJvTDdqcXNuWGZmNzE3alI0dzBjOVY5ZHU3ZVVNK08xbURlMjk0c0N2Z0N4ckpoMkY4R0Jpd3k0RytpaEdQOUxQN2YvdlVwU2ZzcEdiVzFrdVFBSlE5TjVSZWNLTGxzOG54SWE1VUN2cmVCdmdBWlhnWURCNlBLWVhTNTZ0cGJaSTNLaHBsd1NIbEFYZ2ZCNThIL1J6VU9udnR3Y004RDc0VnFVUC9nVXlDdFVyUDA5Z2NNTVpuNGNhbEtMbDE5YlF1UlhueVdzMEdjMFBmcldQR2NpV1ZuQnBDRE9vTGsrRW80cEN6K2lhTWRHaVdWOUI1cEszM20yR3dzZEtoTTBNMjM2bFNBVTR0U1V3RU90ME5OdDJKUjJhTUc3VThWOHlQY0haZXQ4R3NOenlGMlk4N0lGZ0k2QWl3SkFiZzNwTzFNMVZXNjdWNG1Da0I5Y3FKZXlnSmNVcXhUQUxvTDQxSE50dGtvaVVoLy92WTdPamZnRVFrZVhvVXUvdDlYL2JNN200RjV6OXU1OHVSbVdsdGx6US8yUDRQNXlQNVJ6N2syRzhkYTdKeDliZ1AxRGQxalRod0cxcDltdDZ3Zmw1UXcwbXptdzZWKy92T01MaXpFZ1VtQ2dnNnl3eEUxbWpWSjZRRGZwU0N0U0Y3MjdTVVYvUGRDTDh0WGRoT2RsYlZtWG5xMWt2L3NhZVRsalIzNU55c1VZM1BlNyswdkEzMmJQeWhRanNJblpLTnpDZWxYSWNQNGY5cGpFeDh0cHRQUVNqWjduNkQwNklhVkhqU0RqTkFkek5FZ3RneGtFeUpnMkxnREI2bTQ4UWJWSkJ5aFZ5RndOL2krRDU1ancrNjc1NEQvVnhCOFZJMmxvOVQzL3liN1dXa3BnMHdtMXE0TDhNampuWnF4a3pCTGFSL0MxSTFXM2xqZ283RkJSMUxNSzRXRmxiSDNBZU4wOGYvZTZsblp2eXpMVUFXb1YvLzlpN1NJeU1nNGdDMHRNaHMzUlRDaGxSWk5ZaEVER1NETkdJQk5Pc0pzOEdCZGJFcFBCZ1NnUG5wMEhwSTN4SElCamt3Q29oUlFRaTRST0R6Q0RUaFMvUXdramdOWW9WMWorcU1Dc010K0Z3VXUzVlRNWVlmVnNXTm5TTk9BOWorRE9MVi8xUFBxMGxMcTZpVXV1VnlibmQxeVBvZ1RzMWVPVFJDNHBhSWNVTU51dU4wUlk2YldEc1BpVEJxSnlMKzFxWmQvcTZ1Y2g3N2gxcENBMWhJVGkxNnZ3VGFza3o4dXFjY2J6SjhSWmpNYktzQitDeHRKMHBnYU1KQW13bE5UUUxBallVcjd4QjdIL3hNeXBmcGluSlhDNldKbWhTWSt0cERpQUhxTlZ3VUdjb1Vpb3drR0JBUUJiQkU3RGttTnp4UjZDd0ovQWQ5UDFVUWNuVFBCY3pyNHJvSEFBMnJtUTNrWEEvYmxnMU1RK0UxWkdRQy8rVjByblozZERXRTZwUC9FZkRxczA4NmJoL3BZdTFabmNVd3JncE9ydFF1aVNWQVZnUHZoZzlDSFBTczNVZ1g0eHp2YU5TcExwaFpCVVlLTlRJVUZ4amcwUmwvb21mVEtuNmVMQS9qUngzN3RKbUN3NFFhY0ZlaGlBQW9KWWdDMnlUSiszWjZwcWxMWEQ3d1pCT2V5NmJhT2VmRHdhMHVXQktTenNCNVhwQnZ3eDh2OVdqSm11RDMrQnJtaW4yVUFUb0pKRmd2ZmJIUng4Qkg3K0hwYkJBbG9COGU5SUpUMi9Uck90ZGs0eEc3bnRkZTlQUEdVVzJPQjJhN1BibG1uT1owY2FiZXplNC9FclhlMGFYK2NWUjd0dFREVW9icjlaa2orN2NlZHJncitmcVkyRHFIZ05ISDdnelZjY29iRXo5L1l5OTZPL0FRdE5naEF3KzR5WUNCZHhBNGIxOHZ4LzNwNmdRVEhpdWtSYXoycGZCcjJkVmJ2UWZkQU0wa0VZcWdHRFNTQ3dTMFBET2pVZjZHM3dITTgrSDRFZ2ZzZzlMcWE1YkEvQld6UEZpNHNMbUtLMWNMZWZSSjMzSzAxU216WFFsb3Yyd29ZcHdsTzNqM056NkkzZFQ2UkU1eHdRa1RXa3hGMmpUSXV0QVR3OTd6Y2E4S3hBRGR0RHZMTWM1RUdwZ0J6RWxqUU92VmY2Tm4wM1NpbldhMDRoZTdWZStuSFJoekFuRUFYQXpCUkFxb0dLWG9TcWgya0cyU2RHVXhVRWM4N1gyNjNiVWxjZ0pVQ0l3Q1BqRkFBQm9NS2l6K01VQUhhUlkzYnZRWTZBbEQ1dXY5MzdSK1ZsT0JvRURudTVEcWFtcnVmc3pBRWJML3ZIM1g4UVluSzJGLzlpeGJhMjd2cmFKb1Bwcm5aTGV2Mnlnck1BdHg1ZDd1V1ZDMHl3d0VSYy81UUJ4eGFyU0VGbFdid250OHo4azgxS3VHZW9rcitla1lINno2UGVEUGdNUEYvdjZyaGlXc1ZidnhnSDV1YkRHYk9nR0YzR2NnUk11QnR2SVVZL3k4SFhKMllqeHRYTW41T21WT0RQcUdvTUR1YkVRZXc3OE5FMG5oTUJ2b0I3RHJYck8xR2s2U3owTnhTcnNZZ3V2UHVkbmJ2aVlpRk5BNHNaL1dmdW43WFhzd2JGL3Q1OW5tUDlvZEpMamcySEljcGcreS9zWEN3M2NaaFljTGg5N2UwYVZXQTA0dkFGWU5oZFpwZ2NzUkdSNExBNHoyYi9nNktjQU5lR3BVSjJHb01nR3hBRndOUVNFZ0FScE5sTlRYNnVIMFpFSUJXUWROdjhvRU9IUUZvc1FnNEhCSEVSWUVSZ0JNc0ZvYWF1OGRkdEJ0d25FMURlVGNCcURRVVhyMXlBYk1BTjVhWDhlWFdFTjg2djBHVE5kbDhmUDlJQ25LOHcwR1pLRkxmSUhIYm43UkJmcTAveUc1Wmt5d1d2bHRjak4rdjhMTmZ0R2gvbkZJS0RsTjg4dTlpa0RkbnZ0N2ZZYXZrbHBQYm9rakEyWmZXOHVidkJmNjhySjdWZTMwWU1KQTJiSURGYUlZK3p4c1ViUHkvYlBCRlFrWlZVSEpTYXZROG5VSmJLMW00NlJpQkJJVU1mWnpUYUNJSkUvNzlhZk1NWXN0QXRtSEkwZnMvZEFwQVpZZlJKT25nYUllZDR4d09QQjZGWDkvUXFqV0FmZ0pDUDNxamUyTnBHWTllM3NtVFQrbmtVZE9MWVVFcGpJMHcva1BoQkNBWlluOHN3QTBiZFNwQXN3QUh4VkFCeml6V3VIMkYvZ2ZLdnA2VlBUZUNBTnkwT2FoUjhURFlaaVJLeWdiMHNiTVN2SFNxaTZFQXJLbldrY0NaSkFIUnVRdm1BL29zd0NYRnVrNVZnRVRaa2ZidWh4UkZBSTZJRVFmUVlWTFZnV0hJWHcrYzduMnEwOGtCRmd2dnZPZmo5ai9wVk9MWDBlZGpMVnNGZ1crNDFFWHUvcjkxYUJLZm1PYUJPRG03NWYyNnJJeEtrOGlMTDN0NDV6MmZkajA0dkNZKytiY2xPK1diQmZpcnZaTGJUMnZueTYwaFRSOGZmVzR0SDl3cThNL1ZqYXphbmJzTVFwMEJtV0luQmd4N3k0Q0J4QWh2cjRKWUNhWEZMcWNXL3k4dWhGaFpQNVJFdDVpc0N1Ri9KNzhqa1ZTTFVWSXBNa2JkU09PT1k5NTROdU1BRmh1ZDNFQnVZTWpSK3ovc3V0aE1CZ0dZTm02dUtNY3N3R05QNkdJRVZZTGw4djVUVHhINFIyVVZ2NytpalJkZjFpa0JGNVNwNnJzd3BKWFp5ZnA4cU4yZXVnclFMS2dFWUFRQ2ovUzg3UG02T0lBZlI2b0FyU0pVR1NyQWpLR1BBWmpBQ0dxVVUzQUJ6aVFHb0RsaVo1ZWZjRjYwNjVLQVJDWUFnY0pVeWtYR0FWeTdMcURKQXN0UW03WWRRVTJhRTduR2JCMDQzVnNBdmx1c3prazMvcUdOVFp1N2xXUENFTEJlMlBmcmVJNUxaYVBhMjJYKzlxQ1dPYmVjbTkyeVNrV1IzNFpqNy83azZtWnRodmdLcTViODJ3ZmVpN0pIL25YVlNSQzQxMUxCcjQ5dmpTSUJhNzlSeTlMYkJKNVkzNVF6SmFDc0tKaU1IRlQ5RHdZQmFDQkg4TVVNcnB4NS9EOGxMVjZ0ZTAxTVVsZ2FYeXN4N1pUY29BRGpBSHJGb3F4ZHE4L0JjQVBPTFV3a2pNbGtvQjlBcHdDVWR4cE5raTRtV1N4Y1ZGU01vc0RWMTJwZGs2emZCbUZ3LzZscmlTanlTRlVWRjE3UXBJMy9wVU9tN3IrUnVENUNCZmp5cXhIRW8xblF4dnViWEtSUkdrbkxRVjdmODNMbjJXeWF0ZnNqZlJ6QS9wQUlaSklManFySWY3bkZaalZSeTNUdHhqU1JZamFXQXJDNk9vdFpnQzBSVDl1VG4yYlF1d0QzQ1FMUWJ0ZU1pN2ZmaVpnSFRFSjBmTXp5Z1pNQk9CYStWZVRDSmdqNC9VclUrbUQ1Tm4xZUJiakFicWRJVlB2dG4rL3J3Ty92M21DYlR3U3kvSjdrMjhYRlRMZGErV0o5TUlwdzdCbzMrOG0vTDNOVFo0c2djSitwa3V1T2I5Rm1lbmFZcURpOWxyZitLdkRQdFkxc2FQRG5yTjFERXJSMllxQS93STZSL2RldyszTjIveDZ4dVBEYVFzbk5UWWpwWHJ6dnh3RVUrdlpnTXdpNXdvV2hBdXpuRzQ4SWRZYXY1KzZTQXgyL0xpdWxTQlI1N3dNZnI3d1c0ZjVqQTl0UCsxZGRwMXV0L0txb2xOUE9hbUREeG1ETStUeWJCT0JoZG50WFBMNGIvOUNtWGRwbkZJTkRWSmZBMmRwTlR2Q1J6TW90RlVVbVdyckhSNzlLQkRMY0RoY01oaE9yNElBOHZPVVJnSkYyV0ZnSmx3MVZQMmZVd0JIbDJ1TVN1QURIaWdHb1VRREtDdmd5VUFCR3FvZnlGTXZmcTl1bmxwWHEzbDhYbUlIZkxNdTg1ZlhpaUVpWWtqUU9vRDREOEZjRGEyMG9FMFZPY2FwajdMWFh2U3o1cUhzZUVTckJjbnJmcnA4Sk9DeXNscTV2a0hqdDllNzFUeWdHODlIWk4vQnVyMURuamQvK3ZwWEdKdTJZN3lML2N1ek40QkFFL21hcTRycmpXdG0xTytMRmc4TkU3WkcxdkhtL3dEMHJHOWpkbmwwNWNTZ2tjTUNGWm1aZVltYmhWVlltWFdqbWdBdk5UTHpReEtTTFRjejZyb2xUcmpQeGc3dE4zUE9Dd0Fkcm9jMk5BY1BPTWxDb1hFWWZqdjhucEZpRmZNVC9RMUZTNTlFVkZJVHc1WlVrQlNYN1hYT0FvTkFUVXE3N3JOVFBseEh4Q3c1c2lpZWQwd3dZU0ExRlFDTUdTZHNmSWFCSkFtS28vM3FPYXBPSmEwcEwrRjFMS3orL3ZvVVRqM2RnRGpldCtUUVFId2Y1OC81VDN4K1VsUERDWGcrbm4xM1A4aVdES1MrUHlGemFEa3BkZHN2N1pWa3BaOWJWODltYUFDKzk0dUdNMDhLa2xTV2NFWGlQVDVOb1FONEtvZmN6TDNlKzNjYkdvRXB5cnZ6RVR5aEUxM1B0a3dSZ3BRVU9LMWZWZHhFR0srVVdhQW1xWk9vb2gwb1FWbHFnMU53ZEc4OHRRVU1BZHZoZ2l5YzFzczBzd0xRaW1GT2lxdjZTVFVrSkNNREdXREVBSTVPQWVESWcvNnc2NHMyZm44ZlJGcVVBMUc3Z2xBSXczTGVIUXJ6aThmQ3F4OHN5bnk4cVAwbzBBV2lISlJIL0x4L1lCQ0RBU1U0SHo3dlZoM25yN1cwYzlsSk4xMitXOHlENGROK3UzMUYyQjY5N1ZPTHZYLzkyODQwenVsOHFtRStGMEtMc2xuZUkzYzVaTGhmUHQ3cjU5UTJ0L1AxK1ZjV3M3QTNIL010VEtCT0hJSENYVk1HVkM1dTQ3NjBLaGcwTnY1Q3dtaGh4YkMzUDNWN0h0MzVSeHgwTEIrTzBaTWM1N2NGVGh5YjhQU2dwMUxsRDFIZEtmUDFaa0ErVytObmFFc0FueVJ3NEhrNWFJSFBzYklYQkZSZ29KRHZMZ0lGc0lteXpCd1E3b2JUa3BibUkvNWZ3RmhQKzNrMHdwblpIWWxyRjliQ1dRcklMNURFT29NZUlBMmdnVnhBeDNJRDdLMnhtelFzREkvNWZadmhCU1FuRHpHWTJiUTd5OTM5b1haTnMxL1d2dWdyQS9aV1ZmTDAxeFBuZmJ0UXNZVUlwV003TWJubkhPaHp4VllBemk5VVloSkZHMEtQWktYZGVSQ0lRcjFmaDA5VVJ6RkNaV1JQM3NLRGhNcW5xdTR1R2FNbS8vWmhSREtkVXd4WERWVlhnMUNMVnhkbHBBcHVvZmlvc01OR2xYdWZTb1NxcGwraUY0MWdIZkdlSTZtSmNuT0lHTklFU1lwK09BQlFFcUtxTWFQOU0zSDkxdTBZbFR5N0FIaVZKRE1DTzN1a3Vhd0lCL3REYXlvSTllNW02YXpmWE43ZndVUXp5RDJEbnJoQmJ2b3hRT2RWWU5hNzRtaGlBUHBXa0dXZzRPc0p0ZXRHYlhvM2JxSGdBaUJQN2R2MFdSTVJML2Q4aUx5MHQzY1MyK1JDeTdnWU1jSE41R1U1QjRCOFBkL0RabWdEeUR2Q2NtLzk5VEpFbzh0ZFFKVDg3c1lXR3hvZ1JZalV4NDh4Qi9PRW5BcmN2YmNqYk8zU0xTV0JZaVlVRGg5ZzU5WUJpZm5CUUZYY2RONFQ3amgvR2dwSnEzbjI3aEZPdXNUTHJ1eWIrOElUSTdrWmo3OWFyY0dDNC94cklHWHdVUXZ3L3BjdHU2QkdVbEwvTVZneEFKWVhHU005Z3locDB0K0FUaTdOZXpaNzJsUjZmVjhocHZRYzZqTGRUL1hUallXUUF6Z1FTc0NVWTVHV1BoMXRiMjdpc3NSRi9lSDI0OGVaV2JVYkVPV0JlMkwvcVA5bHE0WktpWWw1L3c4dGQ5Mmd6ZmxpdkF5SExDb1A5R1lFL1d4UFF1SmxoRVZUU1lYOC9ib0xnUzlrcGM3NU5sd2hrdWM0M3ROQlZnQlpCemRCOHlWQlZpUmR2STNKZ01VeHdwcjU3c29sd2VEa2NYeG45bTFsUXZ6KzlKamJ4NXdQcFF3ajhCWHhYZy9mL3dIT0crdkZlR3IvSUpwMWFycnJLaENtU2Y4MkVBTlFyQVBPUUJDU2tRRkJQQUJicjdpTlBCR0JJZ1E5OFBuN2UzTXprWGJzNWRNOWUvdGpheHVlQjFIeWgzM3BIbC9WMGZ6Wmdrd0FsRVNyemJRTno3MVZsTWpIVmF1MHlJUjU5WEN2dE5KL1l0K3MzeVdMcHl2MFNDQ2o4YjFGRWY3Q0RhVmIyeXh4bU52UFQwbEprR2Y3NDR6YThGMlpmZVo0cWlrV1JlM3dWZkc5aGN4UUplTllQQjNITTBUSlByMnZyMVdka0VtRktqWTBMWnBSeCs3R0QrZlhCZzJuWVVzWUpWMXM0NFJjaUg2dzE5blNHZlZYZ0tHU2VJSmRsWkxCbVJ1V0p5T0w2MjNOQ1Q4a1pNU01tTHlTTEZjbjR1V1VqRHFBTHhmRDlOWkFydU1obGFoMER2UVVqQTNESzJCRUs4WWJYeTkxdDdWemUyTWdoZS9aU3UzMEhCKzdldy9uMURkelMyc3FMYmc4TllaVlNZNVBNTGJkck4veldud09XL3RVdTE0ZGpIMTcvbTFiV3JJM0lnRndLdG11elc5YXhEZ2V6YmFvUmZmT3Q4WTJwNEpOQWxtSzRqYk5ZcUl4SXViaDBtYzdkc1ZBSlFCR1Y4THRrcUtxT3RPajJCejRnbWNlc3JCclU4Z1pROXNScDA4bEZNRDVDSXU0d3diZHFZVXEwVlNOOUNyNmZRZWQ4OEg0WEF2ZEI2RFgxZTNsaitMTXUvdTNvRllCVlZicEZLUk1YWUoyUU14L0tPNDhTZmI5T3A4NEYySlBMOGhWZThuaTRyTEdSTVR0M2NzcStPdjdlM3NIT1VPcnM1OVFwRm41OWZTbkhIS1hMWkRFaXJESXQxNm5NQjZENzczNGNGUEV5NGJFbnRNRWR6WWYyN2JyWkJJRUpFZkZTOVc3aHBrTnlVKzVWcFNVYzViRHorejBWdlViKzdVZXhLSEpwU3pGSEgxK25lZm1IMWNRTmY2cGhNOTZDZW1abGRoT25UaXptejhjUDRiUmhnN2pwNzNibVhtbmkvVFhHZmk5dkVEQUlRQU01aFRlSDhmKzY5aWs1SEI0cEk4ejNwU1dtelRRT29PYTdYb3NES09BWFhOaVZUaU1Pb0lIY2pFSVhlVk1qR01nVDlCbUF0eHROMGlCSmJBZ0crVHdRWkVNd3dCZUJJQnVEd2Foc25hbmczcjkwY09YbHhZd2VwYmF6T0NJYzcrbngvdE5lVlNZVFZ4UVg4NmUyTnI1N1pSUExGZy91VW1XWlR3ZnhYOW1OZmZqejBsTE9yVzlnK1VvL2k5NzBjc0p4T25kV0h3VC9uZDA2enJYWnV1SmJmYlJVRnh4dWFBRVNnR01jYXB5L1NrdXN6UUxCRnlCd0R6Z2VBbkdDYnYvUm9aSnlvVGRWWW81SU85NE1wb1BBK2owd3pZdjQvb2h5VmVtMzFhT3EvcXAwTHhhK0JQOHRJQzN0ZVpYOGlrS25iZ3dPcnRXeGR1NE1GSURtL0NzQTIyTE1LVVZGTVlqYUxLSlJrdmlmMThzckhnL3ZlMzM0MHZSb0VVVTRaSUdOMDA5MWNzWnBUc2FPaWJQZEhoa21CSTM0ZjEyWUZFR1FmZlYxaUUyYmcweWNvSDRuVGdHaERKVFd2bHUvYVJZcjZ3TnF2TlMzMzlXU1hlWUZXWHNubzRGZEVIaDUwS0NDcVA4bmZqL24xemZRdWsvbStGUHJlZlBWR2tyRFNYMEVtNG5uWDZoaDgvM2diU2k4WnpleHlzcjFodzVpVzB1UVgvKzFtY3FxQUgrNVNtWll0YkVuekNtY0dPSUtBOWxIVi93L0J4S210RS9NZHZ3L0pmNHRKcnlUZE9QLzBhUGgxQS9pQUhvemVZMHdVTk5qRzI3QXFjTjRTOVgvb0ZNQUtnT0lBT3lRWlpiNy9UelMwY2t2bXBzNWFWOGRvM2Z1WXN6T1haeThyNDVybTV0NXRLT1RsWDUvajhnL0FMOWY0YmMzYWkwNjZ3OUJLT2xmYmZtamtoSWNnc0NxVHdMODdVRmQ3TU1zcXdCUGRqcVpFWGFsKzkxTjBTckE0SXZaTjZJajNZQjM3NUUwOGJ1b3NYWW55Y2dYaEFTN25IbWxhbmJkR09TZnRBUThwNFAvMTZBMGhBbSsvV08vRXdKL0JzK1I0UDlkbUt6VGswOGhrRDRHN3lWb2syU1VtT0hJY2pVdW9JNzhDejREbmpNekkvOEE2bU1rQUttdTFtMXN2WmtRZ0xwbm1JY1lnTjRZZXo2OUMzQTJGSUJmQlVQYzA5Yk93cjM3R0x0ekZ6OW9iR0tSeDVzeStXZTNDNXg2c29PSEhxaGszNDVoTEg2bmxxdXZLb2xQL3UxdlQ3c1luUUg0NjRHNzNFNjJhdHZpclhkOG1qRnRXcERhZFh5S3dycEFnSFpaTHFqNmpiRjA5NGRkdXlVMmIrbk9FQzhlUUwrT2M3Ylk1K1BVdW5wYXc4OWt4VW8veDUxU1QxdGI5ek9xcWhHWjh3c29HbHE0OVJoVmJ1SEdJd1l4cDdpU282NHk4ZVRiaHByRXNLc01PNzlQMWh2d3hPeGcvU0grWDRLdFIvS3JDV21VTE1SdUZDSDk2Z2paN0l1NlcvT0t4WlJMKzNMYkNZVWNuMmVvRndzWERsUTNLY2xvaXY3elRNMGE0MTdlMS8rcTZGTVVOZ1dEZkJFSXNqNFlZR01neVBwZ01DMDN0MVFnaWpCdXJJVXBreTFNbTJwaDZtUXJVNmRZR0Q5T2EvUUpKV0Q5UHZqLzJIL2F1TklrY241UkVmL3M2T0NHbTFxNTREd1haV1Vxa1dFNlNGV0xTY3V6Vjk3MVpYRlVnSEwya245RVlyNU42OTY0OUdNL0k0YUh4NDRwSEg5d2J3N1R4bFpaWUp4VFZSdFdXN3NUanloQVFJWlY3YkM4clp0NDBVSGVBUDdiVmZJdUV0S25ZRGxYelpicy95MG85U25landSS013aURFNi9sL3B2RDd0aFpRTDBVVFhZTXF0R3hvTzdzRVlCS0hySUFlMklRY0ZFdXdKMlpsM05PZlQyYmc4RzB6aWt2RnpuMUpBZW5uK3JrK0lVT1hLNFVObVl0UWZqU0MxOTZZSjlmN1o4VmhnSndQOGFhdFczeDlycytmbmhsZC94dWNTcndldUpyZk9MM2MzWjlBNDJTaEZtQUV4MU9mbDFXRmtVdTlnYUdtYldtMTZlckEwd1lINzR2QzRoalFkN1UvNTdyRzE0dkY5VTNSSTNuRlN2OW5QcU5laGE5TXFoclhGdUw0TUNyNE5NL1ErZnV3cTNUd1NPY1RCdGs1OC9QTmZMV0ozNGUrcm1NeVZDcVpSY2lDWk5lR2VobEZISU9nMVR0SDMxK2lINFQveS8rc2Vhb3dsSWs2NFFNbnFHUXdlL3hxY0hVR1RHLzRFUkJSRUEyaURRRDJjZitXQlZ0UmxQMEc5Z2pnclB2cHQrUXUxdURJWDdiMHNJWHdRRGJncUdzVjJ2RWNETlRwNmhrMzlRcFZxWk5zVERwQUF0MmUycVRydVVDMVUyMVA4VmN2TFJZSlFDYm0yVnV2YU9OMi81UTN2V2I5WHZnelNJQnVGOEZ1Q1lRNEpiYjJyb0l3TkQ3NFNRRFdjWXNteFdMSUhRbGJGaTZ6TSs1MzR6WXVRKzFaWjhBdEFocUhMMVp4VkZ1bEpvNTJTWkNiVVNLellDV0tBdjhYWFgzamJXOWtEK0Z3SjBRK0dmNnQvZk1FeDRzNDJIdVFUYUdEWTEyTVFuOEtYdmtIMENqSEQyS0I5WG9GWUJ5WnUydHFVRHV4MHluSENzR29NN0t6a0xZc09sV2Ewb0U0SWpoWnM0NHpjRVpwems1L0ZDN05zRktQT3oxdzlZdzZkY2NvNHhJQWxBWjJBckFLaDJEOHVscWJTY3pqVXV5eDFjVUxteG9wREdzaGcwcDhJckh3NXRlTHplWGwvTzlrdUplcmQ5UVhZZFpzeTdJdWQrTTREc205VDhDOENXUGgwc2FHZ25FTVdvM2JBeXljMWVveTlVYndGSUVnK2IwRGdHNHJ5TkVaMEJHQWV4bWdScVhHWnM1OXI2bDJDYnk2OE5yZVBqVEZzNi91Wk9uZmlQM1JQZGlJQjVjaHAxdUlBZFF1amVJUHNIVmt4TmpiRFRUUHl2VjMrbFJxZnBDdWtzeHA5OWVtY1VCMVB5U1FoekF5UExTS3lNK1pBUThRaEV1cGQwWUFPa09GbU1TVGczRkdBUmdmNEhOREdKRUVJTnQvYWRxTGxIZ1pVL212blBWVlNhbVRyRXdkWXFGYVZPdEt1RTMyVUpKU1dhdndwVWdtRStEd1AzOXA4Mm5XcTNNdGRsWTRmZnpsNzkzOFBPZmxWSlZHVllCTGdCeE1zanJzMWZlTmFXbFhOalF3SktQL0x5LzJNZVJoOXNKUHB5YnVqa0VnZWxXSzUvNFZaSnY2VElkMlpmTlJDQm1BV2FYcUI5N2l2MnNJcElBMUc2M0VtVmRsWGYxalB3RHVPV21OdGFHTThRZWNaaWR4eDZxWk9RSWRlc1ZXdFR6NjhaRFhTb3V3SmtvQU1YOEpkL1lqMDQ1bGd1dzdqNnlFQU53cHRYS2MyNTN6TjltVExkeXhta09Uai9GeWF5WjF1UVhreFRZNlZPVmZsczl5ZHU4dkhzN3J1d2o2ekVOKzlTU0t3ZzRCYUZMS2JaelY0ajJkcmxyUGRISDQ5VGp2MjVQVE9XNlgxSDRlWE16UGtYaHF0TGVpeTh4WEtjQS9HeU5qdUNjQktFWCs4L3pmS3JUelpXTmpYRmZNQTRkWXVLOU4yc1pQMDdiTHR2ZmhLMHY1ZjkrMjN3eUQ2eHF3V0VXRVFUd0JHWHFPa09FSkpnenpNNko0NHNZWG1xSk1zSXZQYkNjUDMwczhmZVhQVng1dWhFM0thdjJsSUhVN1hRRGFjRW5PTk9NLzVkYVU4ZU54eGN6L3AvU3d6SjZGdjhQZWhwcG9vZEVVRkszM3FUWGpUZ2dMZGZpNkF2N3hCSmNVanY1ckgvV3I1MFBWMk1EUGR6QkFsYnlvbzR3a0dQWWRRbEFkdmFmcXRXYVRBd3htZGdqcFVZSUZCZUxUSnRpWWZJa2xlaFRDVDhMMVZXbXpHNGtwTHE4eVp2VlJBanlacEMzcU1STGY5elFmS3ZJeFFxL0g3ZGI0YjYvdG5QamI4cTZmck9jRC81ZlphK3MwMTFPRG1pMXNERVk1SGMzdGZIdVhYYWtWYm1yMjN5YnJZc0EvR3hOQUxkYjZYYUx6QllCT05HbEp0UW9pdC92bEVaVnJTdU9qb2dsV1dhR0VYYTFUK2tVWlBtSU4vbkJFaCtQUCtIbU43OHNSV2tHL3czcExkdjdKQW1iSUZBaHhpYzhHMk9NNWFna0lKNE1DRUJiL3BPQXhISUJMaXJTdXpWblhzNTBxNWJZbXpqQnd2Y3VLK0tNMDV5TUdwbkNkamtndzlkZWxmVDcyaHVsTW8yTEloTll1K3ZURytxL1hhRVFud1lDekxIWkdHSXkwZHVvTXBuWUVVSGlyZDhZWlA1Y2RmNFFCZ04yNHBLa2IzZ1R5MEZ2YUdsaGh0WEtVUTU3cjlTdFV0UzI3eGZydFlwUW9ZQmozNldMaHpvNitHbFRjOXhsZk93WU0rOHNHdFQxVW1RL252aUxoOEdmTzN2bG5rdnRJamNjRlozVnd4OVNXTHJUdzYwZk5ES3QxczRWQjVYcjM0ZHc1WndLZnZxTWowdFBsckQyNDFpT2VZTVpOYXlTZ2R3aUg2NjVTZ0hlUCtBUlN6SzdZSno0ZnozaFg0UTgxdCtjbkF2cW4zRUEzVUl4bGJrZVRBYkpOckJSRERRWnpkRG4wYzh6QU0rMjJkaWpVd0hhYkFLVEo2a3F2cWxUckYzeCtycml1ZlVVc2tycXladkNCTi8rejljTXFKaVozM0E2K1VWVE14THdsNzkxOE10ZmxHS3pxUXVHNVdRSTNBYlpFcWdMd0hWbHBYeTdvWkVQbHZqWWRadEVCYmt6OE9mWmJQd2wvRzlKZ2hXci9CeDFSTmpRZHBxZzFBeHRQV1NOSENaWVdLSEcrWXZWdlRhb3lVMmtkOExrTVdDL0c4d25SalRHMmJFellRcDVzaldibXRXT0h2Z0xLRWxVNG8yU3hOTnVONjk3dkt3SytISExDditxcnVZTVYveWJiWWdSQTdDNlN1OHVtNGtDVVBmL1BHUzg5eXF4WElCMUNzQWNFSUN6RDdSeTFZK1NNTU9ka3Fydys5SUx1M3lxOGk5ZDZPUC9iYzN2ZlBTS3g4TjNHaHJ4S3dvMlFlRDZzbEt1TGkwdHFEbno2NjlEWFFRZ2dGZ1pEc2NSQXh1Q3NkKzhIbjJrblIvL29CaFJGUGpzUlQ5SExySDN5amJkcFdPTmR1OEpFUXJCZm1HZ09LUi9ySE4zdDdYejI1YVd1TDlQbldKaDBTdURHRHBFdHg1dGJlYVovN2laVWFSdzVLakNDZjVtTXdzY05kckZFYU5jUExhNmxUOHVidVNYUjFScDV5V0x5TFFhTzB1L2NIUGtER1A3bkJVN3lzREFSbzVGQUY1S2NsWmVvY2IvZzFnS3dBRVNCekNJalNCV0xBUU1zaTZiRDgrQWR1RXlDTUMrRDUwQ1VNbURBdENqS0d3TUJOa1FEUEJGSU1oSlRnZUgybk9qVnBodHMvSktCQUg0OHZNMW5IU0NnMHhGSU1yZXNKcHZDMGlidzZxK3J4alFybTM3VVdVeWNiRGR6aEtmajZabW1lZGU4SEQrZVdGRHh3N21FOVNzc05uQ04xd3UvdGphaGtkUktGdVZXM1hQZkx0VzVmZnhzZ2dDRUZRVllFOEl3R0YyT0tXcU83RkhCS1FsRVBpYk5sdHYybVJLbnV6TXRqWUZwVEh4OHcwb0NyZTF0WEZmVzN0VUJ0enhsc1JKREdLNUFBOGFGTkZtWGhreVNZcHEwV1hmelVPQzFiWVlMc0JPaHhDNW9jdktDNFJLazhnd3M1bGRZZVdaM2pXekM4MUJOWmJmbDE0MWlVZW0wTVd1ekVWOHpuallGQXh5YVpqOEE5Vk45bmN0cmJUSU1qZVhseGZNbk5uVXJPMW9RaVVRaHdEY0U0cnVESE1Qc3ZIR3E0TzZTTFpUVDNiUWRyR0NhWG4rTjdSMlFVQ2tleGpLTXV6ZEYyTDRNUFhtRWlZTjZpTzRzYVdWTzl2aXYrR1lmYUNWMTErdWlmWWUyTndFZFowODhXdFllRTBMb2lKdytHaG5RZFZORk9BN0I1Wng4L3VOTE52cFpmNXdyVVN0MG01aFg3T3h6OG1hSFdVZ0czeVBnUmh0SldQR0p6aXkwTWg5Sy80ZjlOQUZ1SGZqQUVZZmt4b25GWDJVVnlqQm9qVDIvVTVzdUFFWEpreUFFL0FZVGRHbjRkQVpaMWxVQUlZVTFRRGJFQXl3UGhCa1F6REk1NEVBTzBJaGpZMCt5R1RLR1FGNG9GVkwyT3lyazlJaS81U1dNTkduVS9VcEhVYlhTWVRqSEE2VytGUTI5TUdIT3JzSlFNQjhVbllKd1AwcXdIMlNSSzRURkE0Mm1SaHVObmZGNFByb1l4MUJNdFFHRzlLVWE4MG9ocVBLbytMUHlWK3FHWFNsWmZGUGxiOU1zWTN5WkdNcUNnU2ZSU1d0WXNDcktKeGVWOGZIdm1oaXlTSUlUTEFrM3JZMUpVc0M0czJRS2RQUERaMjViek5QREpaeGYvWnNBTVdidmJLbVd5MWRCT0RHVFVHOFhnWEhmckl4SU1PVCs5UXN2dG1FWGdINFpmN21vZXViVzZKSVpvQjcydHBaWUxOeHNyTXd5SmU2ZWwyL1RjQk54dUtrYi90REdiclFlemdPRndnczc1MzZGSXNpYlJISmJYYnRscm9Kd0hMVU1ESisraVIrMGR6TTM5cmpid0FPbm0vamZ5L1ZVRm9xYWlmR1RVM1FvSzROSlU1NDh3NkowMzdWeElabUg1Zk1MTWRpS2l5ajVZS1pwVHkwcWlXS0FOelM0dVBLWWNZZUoyUFlBWXZSREhuaEVmSjVYZ0hCSXhUMXFHTEpJdllWZXZ3L1NKa0FqTUVXeFNXUUVqTkxtY2NCMU8yazAzRXQxbDNiSXhaVElqWDJ2T01MV1RnbW0rY1pLRHdVWXhDQWZSMlJMc0JTejJJQUtzRFh3UkFiZ2dFK0R3VFpHQXp5UlNEQWw2RlFWOGJVUklpVjJUTmJtRzJ6YXVibFZaLzR1ZXlTNkVWUmNVZkU1NHNnL0JSRDVkb2pITzkwOEp1d2U5U1NqM3pzMmkxMVpZazF6UU9oR3BTRzdKVjNwc3VGVDhuUGptMit6ZFpGQUM1YjRkY3UxWVBUakFONFdEa2NwSFBSa0NEd2dPcEdtMHo1Slg4RmZyL0M4cFYrMW4wZXBLSmM1THh2UmN2OVVrMENKd0V2dU4wODN0SEpsbENRbjVhVWNrV2FXVVZETDhmLzdTZE5UVEhKUDRESkZndVdKSHVldlRyMVUxR1JvTTI2N2M1d0xqR0x5ZG1XYkcvU1l5a0FJMTJBczBoQ3pyQmErWjlIWlJSbEdkYXNDM1M3bmxyRnpBblVXS2pvSFFYZzVtQ1F0K0xFeXhzMjFFVGR1UkxLQzFxYnBiZlEwYUZUQUNZZ0FNdDA1RnJ0SUJOSEhoNzlBazJvNkwzNmxPZ0p3RjBTek92K1hheUs3K0pjcUpDQkh6VTI4WGhuL0FGNXpGRjJYbjYrUmp0K1pRVTJOa0NUdGkrV3V1RGR1MlJ1ZXR6TlZXOTQrZTZzU21ZTnRoZE1mVWVWV2RqZUdzUWJWSENFczZPLy83VWJueGhrOW5oamo1TVYrOGxBLzBBdVNjWU0xaWV2V0pyWnRkTFpVMmNjLzA5SjQrdms5MlZPNFo2eTlQQ3pIUWN3OHdpQlBxR1lMRWNhSERnRDJTQW9VNE1MVlRFaEdVM1JaeEhoQXF6VWtUVG8vZTZRMU9XNnV5RVlaSDBnd0taZ01HWWcrMVJSSitXdUE1V0lJbU1zWnJZRzFZcXQvRVRyOWlhdkI5K1BDdGNZOFNzS2paSk1zeXpoRWtSY29zQ2dBZ2hpbnd5VExCYXFUQ1lhSlFsRmdhZWZkWFAxVlNWZHk1djVDQWcrbDczeVJNQXA1R2Zpbm1lejhXdzRtMnB6czh6R1RVRW1IUkFtT2Fxc0twR1NTb0tFSThyVkxMK1J5MDhEK0g0TTB1clU3aVc0QllZTTJVbWJXeDEvMDZaYVloS0FGS1YydlQrMnR2TEgxbTdYdGljNk85TWlBS3U5cHJoSkh0WUhnanpWR1Y4ZGVXUnRjdU8zU2RhMmExWVRnRUNVQWxESml3SXdsZ3R3aEFJd2l5L1padWppQUg2MkpxQ0pQVWVORlhaa09ZNUJSY1FhNHc2dk0zbkFNM0V5SGsrWmJPRzlOd2RSWFdYQzF3eWg5L0kvUDNiSWllZUhSRlBaVUxPSjdSRUpSQTVlRVB1bGcyQ2wxNkJYWFhhNmRmVXRMSy9YNVBPc29uQkZZMVBYdkI4THA1N3M0TG1ucXJGYWRlVGZGL1hRR250TW1VVDQzYmRsdm5HNHpBLyszTUNMbTZ4OGMzSVpVMnBzaFZGeFVlSG43KzVHbGdRa1JXSDJlSGoxVm1QRG41VU5TNUhSREduWjVRYlMzMXNJMldDWmhUUytUZVZaS25ucEx1YTRoZWN6RG1BTU4rQjBPYWJ1NDFNL1UwTEVKN2l3SzUxOW05UXlsSWFGQ3lHOGlMVVpUZEVuWVRHcE85RDllOVVJOTEraERNVHhzTU1hNG82WDIxa2ZkdU50azdNcmlYRTRCRXBIaXprTnRqL0hhdXNpQU5ldUMyamMzb1R5d2lQL1Z2cjlQTzEyODZIUHg4WkFNSXBmTHhaRkRyQllPTXBoNXlTSGs5azJhMEYyci9rMkc2K0c0eSsrOUlxbm13QUVURmttQVBPSmVibzRnRXVYK2JzSlFBRlZCYmc5aWQvbTNOSW84ay8rQXJ4WGdsS2YrcjJZRktnS21HZ0xNL2VidDRTUUpLTGMzSVVValkwT25ScHRwNVJlUE1NSmJmRjltbDd4eEdleXJ2dDVLYjh4bFNIL0ovNjFaYUt6QUZkVjZpcnF6WEIrNmdVRllLdzV0YWdvWXZPU1JUNU9Ud0IrdWxvWEJ6RGJCS0JaZ09JSUFuQmIvc2JwZTk3b2Vwak44TXlUMVYyeDJVeUg1NThBbElHV0ROYlJhVllyU3lOVXRHTkd4eloxOHAxc0pSSjY1WDlibTA3aDJJY0lRTCtpY0ZGRFE1ZHlOaGIrNzF3WGovMnpTdXVHTGNtd3JoNDZrdnM2VHg4RFMrNlZXYlRTeCs4ZmE4Qzd4c1R4WTBvNFlwUVRheSs2Qmp0c3NPRXhnL0RMT2x5UTgzZ2xCZ2FtKzIvNDNnT0NnMUJha2ZDVUhsVzk2L2lZN3IrOUUvK1BUSWFYb3ZGMTdtay9TVjNPcVBWdlZoSldLcDA3OFlqRnVSMDRBOWkzM2tBWUpVWVQ5Rm5vTWdBTFE4SHhNTGcrQk5jeWNQd0wvamZEdzBNZEhYenM4MmRFL3BuTnF2TGlXK2U0dU9tR012NzdURFZidmhoS1o5TUkvdkt2M1BvcUhXanJKbXdrU1hWNzY2cnpZQkNxQ3VOeHZPZjFjZVRldlJ5OWR4OFB0SGZ3UlF6eVR5VnBaRmI2L2R6ZTJzYVJlL2R5K0o2OVhVUmJJV0YrUkxzdlhlYW50Ylc3LzVnT0FVeDljOWhNczFvMWFzT2wramlBUTVJUXN1T2NjR2laNWl2cEUvQmVuQjc1dHgrVExOM2wrZjBLWDMwZFRkcWw2Z0xjcmh2alRaSk1JSTE5eUtpTytCdk96Y0hZc2VVZS9Hc2x0OTVVaHJBcDhiV2JKQ21LajZ2Vkt3QXpkZ0hXYlZYY3VlOVBlclZVY2JFdUVVa1dZd0FPTTVzcEY3dXZ2M3BOREFJd1hkaEZtT2lDRXlwaHJJN1o2YVg0Zndyd2VTQTZ5Y2tsRnhjeGVWTDNQWWxqOHo5L05HZW9lRDlNRnkvWDVZcHRLa2tyZW0rT2pGSUFkaXJSQkVnZmdGZFJPS3V1UGlINWQvbWxSVHora0k3OEM4cXdwaTRsOGk4U0p4d0VTKytYZU9pWEFlcXN6Vno2OGk3dS9yaVJsYnU5aE9UOEdrNGY3L1J5NkZSam0yellUUVo2alFmSllNaDdZdnFZcCtQU0c1dVhVbUtUV0dsVklCMWVUZWxoSTVqVGV4SjVpZ09ZNGZIcFZFTk4vN3pYR0tBWnRxT0JCTENpQnJNMXNwLzJQZWd5QUlzamdCSGFRN1orbFo0Q1NCQmc5Q2d6MDZaYW1UckZ3dFRKRnFaTXRuTEFSRE1XUzV5VVNUa200UFFLdVJVcnRXNXZwcWtRZXIvM0hvTkhVZmhGY3pPUGRmVE0zM0IxSU1CNTlRMHNkRGo0ZTFVbE5RWGlJandqb3QwbENkNTZ4OGM1WjZrRWdlQUVjUkxJbi9lOVlXTUNEckxaK0NDYzVHVHBNajBCbU1COXE4d01KMm83dkxRYXZKZjJmQTZkb011Y3UyRmprUEhqekQweXVQVnhGQVVCZkRZRmF5QzFCWEd3SjM3ZmkwVjcvTis1TGpVbXB3VFNoc1RYYnBDaVgwRFVWT3NWZ0prU2dMcDZodkl4L3JYMTBtUUFKdnNKaDJiYXJGM3F1TSsvQ0JJSzBVMWVwRUlBQ2tDdERVWTVZSlJkL2ZmK1c1NVVCRXRhWUZXNyt2OWVpdiszVjVKaXVsWi8vNHJlRDd6VkdPTkZtcUR6U2xJUzhFYkgyaDA0QmFHcmZ2NFl4OHE3MVpjS3ZRR3Zva1M5Tk5DN0FQY0ZCV0NITEhOYVhUMnIvUEVmeGs5L1hNS2ZiaXZYT3BVRkpGaFhCNTZlSjlNNWNEdzhjcTJNMXcrdkxYZnoxTnRlN2wwQkIxVGJtRjdsWU9aZ084TkxjNWRCWW10emdLYzJOUFBPWFliNkwrdXdoRzBtQTZuYjR3YlMzMWVJSlRsclJ5SHJ4MmMzL2grQWVUK1RVNGh4QUpQZlV6eHFNUFhhK0FRSE1tWkVRZ09UMURLSXZQeWdHSU1BN0l0d0pOOUFmcmsxdmdVOFpMQ0phVk90VEpsc1lkcFVDMU1tcWYvV0JNQk9aWEVvSjZmaFNtZFlyWmdGTlNzeHdJcFZmaUlqTUl2VGdmZDd5UmlVSk02b3EyZE5ETFdLSGlZVFRKbHNaZnc0TTVVVklpYVRnTWVqc0dObmlNMWJncnkxeDhzaGUvYnlkRTBOQnhhQVcvQjBuYnZoNGcrN0NVQUEwNXkrU1FDQ2xnRGN1Q2xJVTdOTVpVVllXVFhZRnJzL0M2amtYd1FSTHU4QTMvY3ptejhQMEJHQTZ6Y0VPTzBVUjQ4TWJyMXlaMUNOaWJKQllzckpnYXA4OFIwdnhzWEk4SHZkTldxUWF2bnI1RzBRSzFab1RZMnV2RXdWZ0RwM095VVB3dHBPbmJJbmF2NzBabjljN2ljQWZUNkZEUnVEVEpzYTdrUGxGclYvQnZXS0xST01kTUJvdS9yWExzYmZ0aDVlcmw3bjNXYjFid1R5NVpiYUVvTXNIalBhekl6cDJqbEphYzMvM1BGVk1IcE43Wm83VXJndmx5aHdYbEVSRDNXb3pIQmRYWFNmRDl6WGU0YnpybEIwL1h5K3ZtWEZOMGt5cDlYVnNUYkJ1dnpiWDVWeTQyL0tkQlVOcWVTZkx6dHZEaHcyT1B0d09QdHdtWkFFUzlkN2VlOVRQNCt1RnZocUw0eXJzREMyek03WUNpdmpLcXlVT3pKNytkZnNrWGhwY3pzYjI5eThmSXRFYlFVR3NnMUQvWmMvKzMrQTFsbEJ4Qys0c3RCWVFuYWJPRS94L3lDUkFqQUZzazVCUVVCSWlUK0t4VE1saXdNWXI3eDRWMHlOeTRvK3lpTVVVNlMwOUx3bGhSdytKYUVBN3NOQTVpZ0NHakhlMVBRMTJKT0xwTGQ4R2FTOFhHUjZtT2liT3NYQ2xNa1dwaysxVWxhV3BTQW1KalZqWWE0eTd0b0ZnVWtXSyt2Q20vbFZ1a1FncG1tOVoyUWNzMjlmVElNd0VxZWM1T0NpODRzNDZRUkhYSGN2Z0IwN1E3eitocGViSG0vaE56dkxlNTBFckJCRmFrMG05b1dKbXcrWGFwVVVwbGtRZkxSdkRwMEZkcHNtOXVteTVYNU9QakZNdWxsRk5SbElnODU0bkZtc3pSTHNWOG0vbmk3UCszR0FWVXV5Yk53VW96K2x1QmZVdS9uYjdVTEs1NXFBb21EOE9lRk1wNHZiVzl1NmxvbkJ0YVl1NGlrVklqaFd0dkRhUWZva0lKbkdBTXkvQXRDdjJ4U1hsT2pJb0N5L1hOTVQ4NnZYQkxvSlFBRzE3OVlGVkNYcktEdU1ka0IxbW5QSnRDSlY3ZXJYUG85NENXS3lEVG5HWmlSV3B0eFVrKzFrRTF0RDBjcXd5a3JkTTA4U1YvbmFzbEtlZHJ2cGxHVTJiTlJlVDFvQ29SZDdiMjdjRm9NQUxDcnFPd0hQOWtnU3ArK3JZMk13dm9MdjlsdksrZm5QZEV5T0p3aWYxNEUvTjZvNXN3a09ud2FIVDVPNTRXSTF4T0RhcnlSV2YrbGo1UmNtWHY0VUdscWh5Q1l5ck1STXBjMUtwY05NcGRORWlVMmsyQ1ppRnRYNVRaTEJIWlJ4QjJRYTNDRjJkZ1RaME9URjZaQzUvRFNaeHhZcWtlR2hEV1FMQWtiMjMwS0hrcU5qYzNrZk9uaUVJdVNZckZSUGlremkvZ3RweGY5VFVod21DY3ZUWEREMk1lYXNQQUFoZmY2cCsrVi9uRFBUSXIvU3pEQ3N1N1piTEtGSWFzbHRKeFg2NlNSZ2tJNnBRUXd2YXUxR1UvUXBPSkpQa1I4dnJvMTJzK3ZKV1BJRzFRMnlPd0R1SUF4eVFXVzNMQ21YQkNDb2JzRDdDY0JObTRPMHRjbVVscW83WExFWDR0ejRGSVZ2MWRjbkpQK09QTnpPWGJlWE0ydG1hc2IzaU9GbXJ2aHVNVmQ4dDVqVjd3UnAvcEZNaGR5N3UvaXhGa3NYQWJoMlhRQzNXK2tpTWNWSmZYZm96TFhaTkNLL2p6Nk9JQUJCSmZvaUNVQ2JDQXZLdE1UUDdkbUppVGJSWXRIY3l4Y2JvbFVycVNhRDA3c0FsNWFLQ2RXRGtmUk9rWmk0cjAyeFdyaW91S2pMMVgza2lPNzVSMHFCQUt5UG9RRGNuOHloZStlYlpSZGdiMzdtQWcxWm9pZjVzeHlIY0thZUFQd3N3RVhuUjdDOEN5dWh4S1FTMlpsZ3VGMzdQS1Q4dVFEYll1eVp1MGpPL1FoQjZMWDh6eDFiWXlvQWRmMjROZkUxQnB0TTNGZFp3U1VOamF6OVBJRGZyMkN6Q2NnYndmZnozcDBiTjhRZ3pxeVcxRjJjZXhQYlFpRk9yNnVMdXk0TEF2emxuZ3F1dkZ3M29ib0Rhc0tQWVA1Y1prMGl6QnFuZmk0NW9idmNOcmZFbDN1Q2JOdm5aV2U5d081NmdTMXRBazExRU1uTjJxeFFWUXJqSnNnY1BscGgvaVNvTk5ScHVZV0xQaHY3dU5mc2NLTmVhY09icWZ0dk9rcTloT0h5MHFkUnVpNlhZUnVaMCtOenNpQkpTNWVzMjcrb3hLMXI1bjV4WHFHayt6cUdHN0NCWEtFRWd3RHNhOWpaRGdkVWdSaC9nS1JOL3ZsQzNVU2ZKNmlTZlo1ZzlJSlNvbzJUSmxRRFczSlgxZGxXRzQvU0hXTnYxYWNCampsS1ZZUUk1U0FPSjJVM3gyemdsODB0TEk4VFcwZ1U0WTgzbDNQMVZTV0lQYlRCWngxaklmUUkrQzd1M1M0MjJtem1vL0MvWlJuV2ZkRWRmMUVjb1dhblZUcjczdEFwRTBVbVdDeHNDaHU3MFlsQWJMQTJJbmpiUVNVYXQwbHBMUVNmVEsyc3h6czdxUlJGVG5iR1p1S2Nnc0J3czVrZFlldHU0NmJZeWhYQm1keWxWVTlHT1IxQ3duaEY3V2ttQnJxN29vSTZTV0tSeDBzZ3dzMVUzcEQ4M1BvWWJwMVpUd0tpZHdFTzVyNHZSYlc1emdVNDI0bEl4bGtzbWhoeXF6L1RFY1pWU1VKRCtDQzBES1FQUVZvTXRwdkJORGZPc1JFdWlmSWVJSmlmOFRuS2JFWkVTMUNQR3FsOTRSVjhvV2RKZHpMRmxoZ0UyZURCMm40c3AvQXk3R3lYQzVzZzhOdVdWaGEvNmVQSURnZUJPL1BqdHA0SWEvM1JMeUNpdkFVS0wyY1ZXNEpCVHEyclkzZElpcnN1UC81UUZlZWZwNU5FZC9qaDgzb0l5UVZSajFJWHpCNnZmbFFEeUhETktTZzd5VUIrN1A0QlhHZTNVSmFGQ3dwcGZKdksvU2xaZUZoS3lyK2FFekpBYVpCMVFnYlBJNlliTUFudkxJWHJwWDZtaEFtZjRNSmVpRmFXNFFiY2YyQUxmL3hHVS9RWk5IbGd6VDZZVWdQV05JbStnQlFtOXdMZGZ6MUJrSlRVejQrY1kzTWNhMGJ2RHJ0eWxiK0xBQVJWQlpndkF2QU5yNWQvZHNTTzdPOXdDRHoxZUJXbm54cUQ3QW5Jc004SExRSHdTU0FyWUJHaHhBTGxWcWl5YWVaSTh6eXduQVhCNTN1dmk0MDJhNDN1Tld1MUNWakU4YjNqaHBjTnpMZmJ1Z2pBRmF2ODJtUUtrWWxBekFKTUw5YXNaWUUvcGxiRzl4cWJlTEt6azZ0S1MrSVNnS0NxQVBjVGdKMmRhbHpJRWNOakpBSkpZbmpyWFlBZERnSEJrZHE5ZWxONGEyd1JCSjZwcWVGdjdSM2N2YWtObjAvQmJoVlNJZ0FiWThVQXJJNGdGa0pLZDZEUG5rS3ZBTXhEYk50b0FsQkhsbVJaaFNnQ1U2MVdWb1JmUUt4ZUUwaTZIWmEvREx1V0xnRnBGUkRCOFVpZkpTQUFJNjZaci9oL0FGWkJZSnJWcW9tdEdrbENLZnNnY0dmdmJIbFh4NGdyRjVtMFIybEt2ZCtkNm5SeXF0TUpQeStjcmRmSE1WNXNEZExGNnN5bDJyOG4rRHdRNE5TNitwaHpESURGSXZETWsxV2NjWnB1RG03MXdSZjE2bHBzd0VEQ3hROXdHTTFRMENnVTk5OE00QmNjaE5KeWdGVjZWSjFrK1RsNjJqeHAwVHdKU0VWejVuMmhPeTVmTXY0cC91OHhmaEVVVUlRWWhHQ2NPSUJwS1F1ankzT0xwZGlsenA0UENDRUx4L1RWeWNBZ0hWTkhDZEJnTkVPZlFtY0FWdTlWU2NDaUdLNm1JVmxIOUlYVmZabSs3ZFlUZ0RXNXJlWVVxeFdISUhTUkZDdGp4QUVNdlo3NzV2WXFDajlyYW82NU9Jb2lQUHZ2YXEwckthaVpUZGUxd3RmdXhJYUd3d1NUUzJGQ045bGsvUm1FL2dlS3QzZTZWNjFaU3l4Ly9vVlcvU0tNQlBvcUFXaXpkYm16ZXIwS3F6OExjTkNjOEJncU00UFRwTHBBVG5ScDFYOGZnL1JwOHV2ZjB0cktrNTNxOVhlRkVpdmJKbG9zdk9YdGZzZ2JOd1dqQ0VEQm1YeFRwaWVqaW90Rk5jWnJLa05hVVdpenlwUUd4S1Fidk8rWEZITmhrWXVObDRhWWNyWWxKZFZTekNRZ2tRcGxkeGJjN3lJVmdIbFNxL21US1FCendPek1pQ0FBMjl0bHZ0NFdZc3pvQ0JLcU05eFB3NlNmc2pmK3RlUTFLVzZudnM3ditEemQ1WXlaWEVucEFPLzNRT2tGajRVdmcwRTZkQ1I3VVpHZ2lXV1pMemZwWEdCYktOVDFJaUlTSTNYcXkwS3luVC94K3ptdHJqNnVtdG5oRUhqeDJXcU9PMWEzTGpkN1lVT0RRZjRaU04wK01wQ2UvVDFRNjVWSi9EOUtNN3VnWmorU0pQNmZnamIrWDVMeWxCU3FuVmI4dndRd1orMWhDZW16UStrNjcyWTFDYVkrRHFCUVFpVzdCL1pFWWhCNXVVY1IwSVRXNzhaQTRTTWdxVXJBc1JYcU9Ja2svQUk1aW1rVHpLOEMwQVJNaXpCNlY2elVXdFZpbmhLQi9LbXRMYWFCQkhEUG55cWl5YitkSGxqZUJNRVVCcFZYZ2srYm9kcW1LZ0lCb1JMTTUwTHdrZDdwV29OTldnSlFuMVZhSE4xM2g4MDhtOWFOL2VQbC9tNENFRlFWNEpjZW1LQlZqUVQvbmZ6YW4vb0QzTjdhblFsZ1Z5aHhOb3JvVE1EQmFJTTFoV1FlZWhXZnl5V2t0WGJ1TEE1UjJwUmF6TXBpVWFUNEV4SC9KNmxkdTFGbm9GdXRBdVhsRVdTakp3dHpsVGxDSlpZbjBseFB1dXJqcFJISWZwa3pkSEVBUC8wMHdDaXZtZENIS3VrbmZRcWsySnpTWnhHM0dsRFl1MC9TeEhmY0R6blBCT0IzaTR0NW9MMmppemh1YlpXUmQ2cUpkK1F0dlRObnhGTC9qUnVySGJ2S1R2b3NYdkhFWnZJbmp0ZlcwWElzQlA3WisvZTcyT2ZqbkxyNkxuZjRLTTZtUk9TVkY2bzUvRkJkSElRR04yeHF5a3RXU3dQOUFBSUdBWmhQZTM4QXd5T1c1cXc5aEt3ZnIrVHNHWXJwWHpNTHBhYTVJQ2c5YnNMVXl3bGlJN0Eva0kvU2h3ZXJzZFlXTnZZbkF6SFE5eUFyc0tVSk5qZkI3blpvOGVXTy9JT29hNHZWdWEvaTdBZzM0RjI3SmZiVmRkK0RPSVdjQjJkdWxtWHViNDh0T3puclRDYy92RkkzZUw3c2dBOGJVaVAvSXVmSTFkcWtUOWJ2MEd1QnA2dWlDRUN0ckVvYzBYZUh6SGlMaFlxSUlJMGZmYXp6Mnh0aUE0c0FJN3FOUjZVVlF1OGx2L2ExemMwYS9tV1hsRVFCYUkwbUFLTjJFaWtRZ0hwMWtzT2VlQXVuTjV5M0RNdWRiRTZ2QUt5cTFNY1Z5OEtiSjVObTQ1UVgrR0tScnBvRHNsL21kSnVWQ2xIa0hKZUx2MWRWY3RoTkRqemZnTUJkSUswa1pmSVBWSGZPZjkzcDV2U3o2Nmtjc3BQdlhCYmJ2MVArS3IvanMxd1VlV0ZRRFlmYTdjeTBXcWw0eW9UbjFONGovMEJWbStreGVaSjI3TXJiKys2YytJSTdtZ0FjUHN5c0plb0I4Nm05ZjYrdmU3d0p5YitxU3BFM1g2dUpKdi8yZGNLbVJvUDhNNUE2aW1JeEVnWU1MaUs3OXk1aHdTYzRzbEFSSWJ2Vno4cGNxYVQxcTVqMHhEUnVTdWpoN1NueC9pUEVrMGpHbGwvdXYxZWxodzNsRVVweU96Q01iRDBHd0hqTFpTQTE2RWd0b1RMM1JjN1JLYlpXUmJnQkM4N2NxOUVlYU8vQUhjTmRxS2JheElOLzBUWEFEZytzYk80aFUrS0RwbTVEVTZnQjA2Rzk4NWpMZFZsTXR1L1FLVDhIOWUxdVBOZmUzYWRpSmdJWmJOTzRsVW9mazVSYytkRG5ZNW1PS05nbmhSSUtxL1VLd0ZpSlFKSmxBbzRWdzYrb0tQSE9KNmc3WisyUUFFSlZidHBhSDU5cnlKQXNKd0FCbGJEZHYvVDc4dE9IOUM3QXVrZUprZ01GNEV5cmxhOUhET2ZoNmlyT0x5ckM1Y3ZNUmVLVlc3MjgvS3FYems2RkZhdjh4T0tyODAwQUFreTNXbm05ZGhCTGhnem13Tlcydk1SMFREeTJvd25BMmJPMGFzeFU0bUVXSXRZSGdxeUtRWERPUFNoYUVTeE9WT08vOWhaZWNIdTRvS0VoTHZsWE84akV1Mi9VTXU4ZzdaNkJQUjNxaTFMRExqQmcyRVdHM1YxZ1hJcGI2Sm43YjljUjZiai9ncGJIU2hML0w1VnFaU3YrSDJTSmIxYzBqWkFlaEdSbkt2bnJhRkd5VUdOQ01aQUxXREVDM1JwSWpxQ2tHWk81SWcwaWNhRE83VzNGS3EyeFlzcWhHM0JJZ1lmaUpQNjQvZFl5S2lvaWxxdU9FQ3h2ekt6QUxkcVlyNWJUZW1uZnF5TUFnMEdGeGlZNXI4ODlsMWdRUVNydjJpMnhjMWVFcSs0Z3EvcUpnTFEwK1RYLzFOWWVzLzgwbStJVFhHV2l5S0FJdGVYbjYyUEkxNUlvQUgweENVQVJvU2lOWVcxU3NOMlUvWGJ1a09Xbys2dXExQkdBM2l3UWdKRVowUU81N3oreDJ0emwwbTFkY3hBRFVDQzdncFRJbHl0dXQ4SVg2N1dOcDNTQTBzeUFScE1rc3k2R0MvQzh1VnFTU2ZxOGI5YnZnVGpyMjVHSHgwNGozbHNxd0NjN083bWtvWUZBSEFOeTJGQVRTOTZ0WmRwVUhSTy9zdzIyRHZCT2JDQjkyQUM3MFF5R25aOTdlTVNTL0xXSGt2Z0hJWVBMS1ZtNGNURnJ0VkxTYklFZXloMkZ0SDlKdlJ5djRFU09USXpjVndldFFlUVZQa3FOSmpDUUNsdlFiYkRuZ3dnYVo3Rm9DS2tWSzdYR1dDN2pBUDdQNjRtWnhHRE9iQ3NYblYra25kK1dObVNlelhTblc1T1IyWFFZdmVJR1hDSkVMOFA3OWtXNFh0ZjI3UzZzandPb1VRR2FCQmlxM2Zrbnk0UzZUNUo0enhzZGZNNXVGeWdkbjNoTE15RkNPdGJTSXRQUXFGTmJPaE9YM1JFakNMN0RMcVM5a3pJZkJiYWJ5VllVWmdEcXBlaDdHMVNUQ3dWZ1JHWHpvQmFMUlVKRUtRRDlmV0VjYUludWo1ZHJiMXFwTjVhN1JWNVB0SnVTQ0RPbld6WHRwRFQydmJyVlNSSlBkTVpPTkhqaThiSGZDRnQ2Z1FCOG9MMkRLeHViNG9xd3g0NHg4L0hpd1l3YnE1dTh0cldxSHdNR0RIdW8vNkVmdVA4cWlIaUY0aXhVUkVqajIxU0tVZElyWDhsT280dXhMcERKc3hPeTBiZGl1QUVyT2VtclN0VGR1NFhpM0E0UXd3M1lBSUF6dThhZmdYNktpRGlBUWpsNVNkUVRHUWR3MVNjNkJlRDAzSlg3VEtjNzV2ZS91clpVbStCOWF3YzBaMEY2RkZKZ1h6ZURJWlRrdG43eFlJN3hUT3NiSXN3dkszMzY3ZmlCTnB1bWpoL3AzWURMdEJPaG5DVEEvd3R1VDB6ajlIdVhGZU1ZblhpQVROSXhSMS9vVllCSkZJQ2VtR3EwOUZ5QWk0clViWmZsYkhDK0NPWVRrNGVUOHlnS3pYTGkrSDJOY3ZSVkJnM1NiZkc4V1lnQkdCazRKdEE3ZmNybHpMMENNTnVZWnJWaWk1aklscS9RS1FBRERIaThGQ05CeHBUSkZzMFk2NnZxdjF0YTIyS1MyYk5tV2hrN3hxeGRsL2F2U1lQRHNYZnpoTHZhMnJpbXVUbnVkbjdxRkFzZnZWL0xzS0c2Rnd0Zk5xdnFQd01HMG9VSk5mNmZBY1Blem5YMlg2RVlPY3FJeW43bWk2N2owM0QvVFFWQ1ZwcFdpYldWUzNSbUtnMlV1aHV3a3U0dlN1THlZc1VCN0dtSDg0aGx4c1JpSVBjUU1ONTZHVWlPeUV6QXB0eG5BZ2FZWmUxV2JEVTF5M3oxZGJmTHBqZ1JsWkRLTW55S3dsc3hWRjFUcDFnNC9WU24xamhhMjVxOWd2ZHB5eFJuOWM1anRncmFwYjJ0VFJmL3NROG5EbklJQWpNaStwUmUrWVJUYTB3cURZbXY5NEV2dHZydkYxZVhJQXhPZk83NEpIRUFreVVCaVJVRHNMZzQ4VFpLVHhxYUkyeDljUnpZNzRiL1hldmg3THA2ZnRuY3dxMnRiZHplMnNadlcxcTR0S0dSQlh2Mk1tVDdEbDZQa3oyMHF5dkhVTTlXVitrTTlVeXpBT3V6Ny9ZUzhhWlhBUFlGQXRBcUNKck13dnB4SUF4d0Y3Z21TZVlkYjdTazlPZ2pkUXJoei9wZTNUNFBCSGdzanZ2dlJlZnJKcDNXUUsvc3lXOW9hZVdHbHZocjY5eURiTHozWm0yMHFuaFRJK3p0TVBacUJucUdZdkx5WXR1QVlkOW5uUDAzbmZoL2FYckZwc09icGVUK213SVhaczU2NXhMUytFRlJRQkFRMG53TzhZK1A5NHVTOGd6akVZcFJFQkJRMGprdGY0Tlh5TUd4dlhGL0J0U0ZyOW1ZbEEwa2dDNFRzRkNoWnBUTUplYm9YTlZXcnZJelpuUjRxYkNvSktDOExydGxmdWp6eFZSWFhYbDVzVmI5dDdrRC9ITDJDbTdVS1J5bjVDMnhxUVlPUWRDb1E5cmFkUVJnU1hKaXJKQXh6MmJ0eXU2NStyTUFIbytDMHluc1owYlN1dFpLZjdSVTZ0eHpYQXl1TlJGTTRpNDlPVWttNEdTeC9Od3B1Z0RMTmZEV2RpOGJBNm4xcHZPKzQrVEZkOXpjOTF4NzNHTXNRdUoyYW94QkFBNnV6YklMc0pqNzdMdDZ0TVZvOC8wcXlxNnRSeDlSengxa3M3RWlQQTQyYlE3UzJpcFRWcWJXUlJpVWNIUGI3L0VmZDJkTWhkekNZN1R1c2RMeXZsVXZDZmhCVTJ5WFdydGQwSWEzZ09nNG5Ybm8yeTk1UE56VkZsL0JkOFJoZGw1NnJwclNVbEZydjIxc2hFYVBzVTh6MEhNWVFvajA3ZXhDTHJPQXc2ZWxsK2cxdCs2L1F1UThtazc1V1d4ZnNlZlBVTWw3SDh1SEc3Q01pRThveXUxQUtmUU5ua0ZJNVFlRzlOMUFNdWd6QVZmbnZzalora3pBbjJvdGtGd2tBbGtTSS9PajNTNXd3WGt1N2J5MEpjdEtnN2FnWnI0VHh4WEdZMjl0MVpFZTFyN2RqZWZadWxVOGtxUkxMcU1ubFJMRVlYVExDZzB4aUs3encvMGttUUp3Z2lVeEFaaHNQbmJIMkt3NW5RTG1vOEYyS3ppZkJkZW4wUHl2RUdmWDFmUHJscGFVMitoZkQxZHgyU1h4YjhDVmhBQnNpQkVEc0xwYVRFd3VwQXVkQWpBZnhGdXM3WWk1ajRiUG1Cc3h0eW9LTEY4WmtZbmNDZUtvZ1d2VFB0QWVQYmU3WEFMSEhOVTlkeWp0ZmM4RitNN1dOajcxeHg0b2wxeGNwRTF1dFMrYVVWZnl3SysxSlFndmNQeENCLzk3cVVaTC9za0tyRzh3eUQ4RG1jR0ZFUXJKc092endwMzRCU2VocU02V1EvZmZ2RDRHcFVlL2lpa2Ztb1lic0pEUjdTclJCd2hLWHQyQU8vdUxHN0JCNUJVK2pMZGZCaEloaGdJdzF4aGlNbW15cFM1Zm9TWG5jcEVJNUNPZkw2YmhVVklTc1VUdDhZSW5sTjJDSlFXODNkZE1SaUQxRm9RKy9xSmd2ajFCSWhCOVhST1EzSEtNUmEycVV1eHlFMHlXTUtYV1pLSTBJc25OaG8xcHVnREwwZVdYbElpWTVvTGxUSFZzSkVza1lqSEgzaUZaclFJUC9yV1NqeGZYOHMyem5WcURHekFuSVFCakpkRFJ1T3ZKWkI0RFVFL1dGc29lbzdOdmpBTzl1bG9mQjFDY01UQ1h1VmM4SHI0T1JjL3RKNS9vd0c2UGlQLzNBY2tEWmhZUUZ2dDgzTnJhR3ZNM20wM2cybXQwaXBUTjdkRmp6SnVINFNQSEhzaG5uT2JrNWVlcnU5WGFBSklNWDlSRHN4Y0RCZ3o3cDUram4vQUlVYnhPcnQxL1k4Yi9VM3JjeEVLaThoTGVhL3lTeEZ4MWxuVGJWc2p4OGVuQUk1UVdidWMzMUlQOUN6YkFZVFNEZ1RqUUU0QTErU24yd0FoRDlkUFBBa1J5QzlsV0FDckF1a0MwUXVJYloraVlsTzN1M0ZRMndpMVNLQUdoRjhhalBydHNaNmVTdndVdkR4aGlNakU4UXJiMVVRSUNVQndlL3pyRm9zaFFzMVlpdUdDK2pmMmNYaW9FN2dFUktzQTlleVhhSTl5dGs1RjNiaVdHQzdBanZZZVRMR25JL0xrMm5uNmltc2Jkdy9seS9WRGVmMnNRYjd4YXc4RXpiQW5QYTRxWkJDU2lyYnhaWUU3MGFlTUtoWGlUKzhZNEdHRTJVeHZ4Y2tVZkI5QTBjMkRhbHpmSGlUMTM4UVhhTngraE4vdE92YllHUTF6VTBCQ1hyL3pwajBzWU1UeENrZElXaE4zZTZEaWJ3ZDY1Ly84NzE4VnpUMVZqalF6UkVKSmhYVDIwK2pCZ3dMQjlEUHU2b084djRuN2NRbG5PaXNrMWY2WGtxSDNGL0QzdG5pc0wweXRSaUhOODZ1V0VNS2VaS3JvSHpXSU1aQVA3WWJ3Rk14QVB3ZndyQUFIbVJDUnRjTHNWVGJJRWNVeHlwVlI2aGxJd1p2eS80NDZOQ1A0dUs2b0NNQmZ3NjB5MHN2dy9aajEvRVpMNjN3UThMOEw5Y2RrS2Y5eWxYeHlkK0RwL3E2elNLRlRuenJFaGI0SGdJK0M5UFBsOVJMa0JSNm9Bay9UcldFb1poejE2TzJlemRYODNhcVNaVTA5MmNPMDFKVHoyVUJYbm5KWGE0REdiWWV3WU0wY2NadWU0WXgyVUZTWGVydTBOUlZNTlZaVVJCS0FuQ3dTZ1JjeDd2NGsxTjVTVmluMTJIQndVTVE2V3I5U09nNEZJQVA2N3M1TU53V2lXYTloUUU4Y3Y3R1lJbEhZSWZkQTM2clJIa2ppenJvNG1LVFl6UFh5WW1WLytRcWYrMjUvY3lxU3pZZkpBc3JmSGNBSCt5NThyTUVXK2F3bktzSFlmZFBneFlNQ3dlL29RQnJ6N3I0TmdXbkYwbERoRkN0bTl4WFRqLzJXNVljenhMeWhrbE5NaFZUZGdJZEYza2Y4Ull0K05FazdaRVhWQ09NRkl5ZzJvQ0pyTHU4VlNIRkpIL3hqNFJtS093b1lMc05CcmIzb05GREIwQ2tDeE9qL0ZIcWh6VlZ1eHlzK1V5V0hpUkFSeE1rZ3JzMVBXbG1DMDY5ZkVDUlpxSTlWTGpmNm9lSWhaZ3o3T29pdS8reVd2TWpEZXRzeXoyWGpPcmFvNG01dGxObTRLTXVrQVM5UnhwcmtRZkNiK2RZNXkyTms4ZkJnN1FpRjhpc0s0ZjV2eFBKYjZmZWdUZ1d6WUdHVCtYSldVaWFjQTNCSU1zc1RuNHhsM3RBcTFOQVlaVlZVcHN1TER3VXc2d0VKUlVYWVc0R1N4d0pwMFJueDFsVWtiSzgrZEE5L0pQSVFBQy9hejhUSFhadU9WY0VibmxoYVp6VnVDVEp5ZzlrbHh2S3BBVmdhSWQyV2JMUE9iT09xL0gvK2dSRU5BaFY0bEx3a3hNc1ZlU2VMRWZmdGl1alR2eHovL1hxSE5IbDd2ZzEzaHdSUkpBT2FKYTRzMXdpSmRyd25Kc0dhdkpseUdBUU1aTVE5Ry9QTyt3Ui8wQTdoanV2K21VYmwwM0g4aGp2dHYvQlMxeVNCazVSRkdsNVRlYTlRMDRnRDJwTzhJeWM3TVkyZlV5RVVOTitBQk9XbmtGY2JiTUFNeHJWOGRPVldabjJMMWlVQldydElsQXBtZXZiSzJ4ekNVRGxtZ2MzZXN6NlBxSU05QnFYMERoUURVeHdGY0Z2dVptaFlrMy9HSXdDaXptUU1zRnN6QjlMWkg0eE1sQWdtTGNzVFJZUGtXMlA4RVIwajdPSEQzSG43UzFOeVZ3VFVTc1Z5QUxSYUJnK1pZczBiK3FVWjQ0cC8xTVFDcnF2UUpRTEpBb092ZEV3dUVEMUQ2a0VmaVFicVhLOHNpWTZ5YWNoTmp0VkJ4YlhOTHpLUStwYVZpVkVLYzRMOEx2ejVmQlVNY3YzY2ZYd1hqRDR4ZlhGM0NjY2RHK0Q3S0NxeHFqaGhqM2VOV3lkT3lGeXUwZ1lZQTlJVU04czlBOWxDQ0lVd3g3UDY4M1U5bkR0MS9VMitIMUhOa3hMdGNadkgvWXUranMxOWJKYzJXNmFFYmNQeUdGREx1b1NITStETHhjelBjZ0Eya2cySnlFWkhUUUY5SFVOS01RNkVxUDhXV2l5S2pJdVJES3ovUkpRS1ptcjJ5ZGtuUmhzV002VHE1Zm1QL2RUdnFpT0YrVlZMYy95YUQ2VllyemdoVmZyeEVJRUlsbUkvTTNYMU1za1FyQUx2NmRRMjRsb0x6ZGJEZENPYVR3VitjbURpejIvSmp5U1JTQUFZVUpjcU5UNk9naGV3b0FIWHVpZmxJeUpEU05xUVBxZWRuMld4RTVvRlp0bHozY21XQUpBSjUwZTNoeWM3WS9xM1hYbDFDV1ZuM0hDaDlDUEtYaFYyZmozdytqa21pL0R2bUtEdC91TEZjKytYbmJXcjh2MWhqTEU4eE5rTzZRU2JxbHg5SnhvQ0JyRURBRUR3WWRueDY5NWRCSFFLQ2d5QzJMTnlRa1BEYm5Mdi9LdGwvdUdJeThrM0pjSnhuM0IvMDJZQmpIcDg0RzdDU2FxbTZBOTFHTnVEK08ra1VHa1M2MUNjR0RHaU4yNGdrRlZYNUszWk9oQXB3emRvZ2ZuLzNvTTZtU2lXV0FtVEdkSjFyYUdzT2ZiK0UzZzI2M2hLREFJd3l3QUo5dnh1YmRIMHFuZ0lRd0hKeDd1NWp1Tm1zSVNJMUNrQkxkSnpOSWxkaU1qYVNxTWdwNUVSaktQckhtaG9kQWVqTlBsdW41TUVGT0ZaOE1wZXI3eExrVGtGZ2lxWDdCY2N5ZlpiMW1mMS9TZHNVREhKbFUxUE0zMFlNTi9PVEgybzNRNEg3QzdzKzk3ZTNjMnBkUFkxUy9ERTJaYktGNS85VHJYWExiL0REK2piZFJCbmhDNVduZWQrdnN3T0xpNDIzMFFaeUJFUHNZTmp3ZVVSbkQ5MS91eE52NU03OU55WHpKSWVQVUV6NzFDeTdBU3R4Szl2N2JzQ2RoaHV3Z1h5aURFTVdieUFhRVhFQWhmTDg5WkZaRWE1cXdhREMyblVSU3FsaDJVdEkwaHpEd0I4N0pvSUFETWc1SVMrNllOVXVnMHByZmg5dmN3enlSbStBS2YxRUFEazNnZ0RjdUNsSVUzTnNWc3MwSDh6SFpWNWVreVJyakhLUG9yREk0OFVad2JCdTJ4N0M2NDIvb0JZWGF3ZGNTWW5JeVNjNnVPUFdjbForTkRnbjdhUzBnYlFNQWcrQjd4cnduQWpLdnZqSDE4VWdIbXFxZGR1N2JDZ0F6Zmxmb0dMMUVJdWw3NDZCT2tuQ0hFRkFyL3M4Z052ZDNmLzZ1d0t3UVpJNHA2NmVUam4yMlAvem5lVTRuZDN0RTNvZnBNOEtzeTdOc3N4WmRmVmMzOXlTTUZibDJERm1GcjB5U0JzdjFDZkJodzNSZS9uSVJEdDVpZ1daTkE2dFpCZ2NCckpvNXhqb1h5ams3TC81bEp1bTZmNmJEaitXbWZ0djdPL05PVzBJSVkwZjBrcmEwWDBWSVc3VjR2MlNlbGFNRUJiOGdoTmJUMTl6cDFKVW9TZnBNSktJNUE4bTFMZGo3VVpUR0loQVpDWmdrMHE4S1UyNUx6WXlFekNvaVVBT210Tk5Db3BUUUZxU2VUbHVYV1pWcTFWZzZKQUk5Vkpuam1NUDZRbkF0dncrM2xnS3dLak1zaDM5b3lzdnNOc2dvbjJYci9CejBnbU9tTWZhYmdENUM1QjM5N3k4MzdXMmNMclR5Y1pna0RlOVhwYjYvRkZxRjBXQlRadUR6SndSTzB2YzBDRm1UajdSd1pHSDJ6bnljRHV6WmxxMTJURXpoUitrRFNDdkFXbXQrbGZlbGQ0bEd1Vm9jaS9LQmRpVEJUYytVLzQzQXgxeTh2dk9oeEl4VTlSSkVuZTN0Zk53UjRlR2NKRWtXUFdwbnlNT1U3T2VDMVVnRHMyczN4Y3FXbVdaTSt2cTQ3ckpubitlaXpOUGo4akVJMEhnenNLdFQ0a2dNdGljZURLWU10bkNvbGNHTVd4b3hIR1NBaC9VcXlTZzNteUo3TmZ1L05SRDF0bEtwU1ZpaW9hbEFRTnBvQWcxNGFHQi9ObnZmZjMrTXFoREVCc0J3WjZGR3lwRTk5L01ZVTYxU1lRTWoraEp2OGhtTnVEVTdqQjJObUNiNU9rZkU0RXdBTXJzNnlqRElBQU5hS0hMQkp3dkFuQ216WXFKN2pCZnNSS0JaSU1BakNaY1ROcDNRZTRjRTRDT2JzTk02U0R2aVEyYVlwQTNVUXBBWC8vb3luTnROczJydVErWDZnaEFyOVQxUElSS3NEOEV2a3Q3Um9ZczkvdDV2S09UUnp1U0I5TDZZbjE4QXZEUmYyWTM4NDdTcUdiUWxsYUZDYjhObWZlNVdHNzAxZFY2QWxEcWszMm1UWTZSdlU3dnUxTEErUW5pRVgrUldMWTgwRVVBQW9neitoOEIyQ1RKbkZ5M2p5OENzV01zakJsdDV2Njd0Ykx5d0VPRkhmdlBMTUQ5bFpXTU1adjVYVXRybEoxMjVPRjJYbnkyV3F2OGt4VlYrZGNjdzcvWG91dlllWElCN3RDTnNTZ3RobXdRZ0FheVpOOFlTTitPSGdobDVnQlJ5VC82bVB0dkpnOHBsVExGNkVxbWNJazAzSUFGMG5jRFRsNStQanRRZWVFT0NzV1lEUG9kTElETGFBWURFZEJuQXE3T1Q3Rk9RV0JDaEs5ZFZDS1FIR1dyckt6VUdVSCtIQklYQXVEc2ZnK205SUxSdlRzVVhiK0tDaDBCMkU5ZUNwU0pvcVpQZmF5UEE3Z3ZvSEUzRTBlQjR4a3dINTgrMlhCSlF5T3BhdDQyYmNsZDRFZDVPd1NmQi8vMTREa08zSWVDNzZjUWZCTGtkV1NGdktxUDRVWWVyUUFNOXpPYkNLZFZnOHZVSi9wTXA5STNrK1RVU1JMWE5iY3diZGR1L3RMZW50RE44dVBsMm5GZ210bS9sckJOd1NCSDdOMGJsL3h6T2dYKysweTFKcDZtdkJVQ2Yra2I5ZnRaYVNtUFZGZGhqMkRPZnZUOVl0NThyU1kyK2JjbmptK3ZUbUhiVzhwV2wwdkhBQm9Fb0lGTTRZQzBjakVZTVBpQkRPL0hrODg4RG1rbXYwMkZGK3VXdEdYZi9SZEZ5YUVMc0w0R3Fmd1FWdXNKYWZhcFhMb0JCN0hpRnh6WUZHK1cyNkJIdDVPajU5SFB5dXp6VmpMZ05wckJRQmd4RklENXdoeWJqUTFCMVdqYnNERklSNGZjcFU0elpZa0F0T2ptaDRweUhUSGh6MkVHUXBkWk16K2w2M3FaRGV5TmtRVzVNb0lBVkx6MGl5UWcrekhmYm1OVHVFK3RXT1VuRktJN01INjVCZDVvZ2hPcnVwNkxVQW4yZTJEMzZ4THZYdW5uV0t1ZFlqRStBYlFqRk9LOCtnWjJ4SEV6UE85YkxwNTZXcDFnUjQ4eWM5SUpqcmh1eUQyQnZCdWtwV29NUDJsWmZ0UzZzWklQMU5UbzJtaS9DL0FSNVRET0NZT3M4R0lETkJSMjU0cFZOMHZFcEZGbzdyK3BLUDRpVVR2SXhNa25hdnVmMkkvaUFEN3ZkdlBEcHVhNE1mOHNGb0huLzFQTjlHbld5STAzdnA4RGZTajI2Vmt1RjBQTlpyN25iK1RXKzhvNTV5eW45Z0JKZ1NVTnNEZUJMYUYzc2M5VERFQzltNzFGdnlnYi9KK0JiTmcxQnRLM24vdHJtVGwzLzdYaUV4eFp1Q0Voalcvam85dWp0VERjZnlHTkdJQ0Y2QWFzTHpGM2JzQmwyQ1J2NFU0UUJzSFd2MkFQZjN4R1V4Z2dtZ0NzeVYvUnMyMVcvdFhaUFkxKytsbTNxNXBRQ2NKZ1VQWm1Wa2F4b0NVcUhJNDhHaDlsV3JkUGVWditIKy9lR0FTSFJnWFoycis2ODN5YmpjZkNicmtlajhKbmF3TE1tUjErRG1WbTJPR0QxeHZoK0VxTlFUejBSQlBGOThLb2MzY3l5V3hsdk1WQ3RVbEVSQ0NvS0xUSk1uc2tpWlYrUDc0NG02elRUM1h5L1N1S21UL1h4Z25IMlprd1B2T0FSUHNUZGtnZnFYL2xIZmx2MDMweGs0QkVFT2srV1ZYeGpMVEQxS0x3d0RQRHViWHdXZ044bGVMK1JoOGFMQTh2cXVwakpzbUozS0FWUnIvdUNmRjM3VFVsWFBIZDRxZzV6elFac05LbmlmODJXZWJhNWhhZTdJenZnbSt4Q0R6MnowcE9PRTVycVBsdkJIbDkzNXpiRmc4YVRPM3NHQzhvV2dMUW1JVFIxTGtBNXlzTHNINkVXZlhSRUl3a0lBWXlnUlZ3R3MzUTcxREEwNExHZTdQclhyUHYvdHYxdno3bS9ndVJCR0RjSkJ3OVQ5cXhuNUFUVXF5T2tNNHZlU1MrT29RS0t0aWIyM0tOWkNBR0lsRU83RFdhd1FEYUpDRGtWd0U0UzU4SVpLVTJWcFZwR29ReTdLZFZ5VElxQkhPb0FDelhFWUFiOHY5NHR3VzFTaldUU2F1Q3pJZUNMSitZWjlQMnFhWEwvTjBFSU1BUUcyeDBRMHRRVlFKV2RKTjBaNXptNUxGSHEvak81VTJzY2FkbkhaZVZpZHg3VnpramhwczU5T0FNZkpGQ0lIMEswbUlJTFEzM21WN1lDUHNWaFhwSm9sNlMyQnBEN2FoeEFmWklxdFIyb1M2ZW9VV0EwMnZnL1daWW5VS21HWWR1ck9ZaE9VMHNCV0NrQzdEU3l3Umd1c1RmOEdGbWZubHRDWmRjWElUVkdudHZHM29MQkd2K0NLQnNieFdmNm5UejI1YVdtTm1wdTdxU1ErQS8vNnJtdEZPMDVGL3dNUWcrMTNmbnQ1SldrWmJURmNvZUVqRE5pVnpvYkxDd1ZrMytFUyt1clY0QjJKbWZlL2JvK3EzVElXTEFRRmJ0R1FQNW5ZUUg0djFGWExkVExNOXZmWVRVSzVwSzlYUHQvZ3ZrMkFVNG9tR2kyNmVRM1lDMXY0V3c0Qk5jMkh1NjB5d2s4c3h3QSs0YmNLTEd5L0FiVFRIZ29WTUFpdFg1SzNxNjFZcE5FTG95cDhhTUEvaG1abVdNTkNkWmhzUWNUaDVWV2lKSTNwamZSeXNCdTNSRzhxQWFreWJMck56WXY3cnplSXVGQ2xHa09leDJ0blNabngvL29MajdnQ0UyK05JRGRRRjRmQzhjVlE0enVuOC85NXN1cGs2eDh2MGZON0hrbzlRbVNKTUpubnkwaWhIRGU3YmxVUm9ndEJpazkxWDMzbnlTVGtGRllXMGd3TnBBa0EzQkFPc0RRZFlIZ3pFVGYzUXRIMDVCcXlyelNIQm9PWlNZWTIrUmpxaFFTVmR2RXJLOVdFc0F5dlc1ci8rZUdQWFV4RlhySlJmZ25CQi9yMFBncjRXZCtDSVJYdmQ0dWJXMWxkV0J4TXhsN1NBVEx6MVh6ZHlEdFBOdjZGWHcvN0h2ejNFMnYwRG5SZUQ0STFoUGkreTRGamd1VEFMR1NnS2lXK3NVZi83bUdNMXQ2UGsvU2NhQWdSN0JncHI5MTBENmR2TkFLRE1IOXhJUUhER3kveW85S0t4MzNIKzdLSk1jUHc5ejlwOVlmM0FEanE1S3AxaU9YWElYN2tUUlgyTUlEbVNVQVhWR013eDQ2Sk9BVk9hdmFMTUFVNjFXUHZHcmxraFVKdUFzeEFFY3JTTUFQUjQ1K2laeUFRRU5BYWcwcTRIbjg0bWRvVkNVOFRWc21MWTlsSDQ0Qjh5MTIxamtVZDFPbDM2c3MzS0hSSkFDc2dMdk5xdUpLdzdvem80MGRZcUZ4ZS9Vc25TWm55Zis3ZWF0ZDd4OHVUVzJxbWIwS0ROL3ZiY2l5czB3R2VRdEVIcEgvY2pyOHRjMlRaTE1SMzRmSy94K2x2bjhyQWtFNHJvMHg4T1F3YWJvdFh0V2Nmd1RSR0NDQzlZa2tmUlZhRjJtODVFMFo3dE8zVmhkcGNzUzNndDdrZ1pKWXRxdTNRYnhCL2dVaGVmY2J2N2Ezc0c2UUhMSjRzSmo3UHpya1NvRzFXajdhT2hWOEYxTHY0azNaNUloOEF2d2Y2MVEvSk9JNTI0M3diRzFzTFFSZHVuWWEydnZaQUVPNlBweFNZbWhBRFNRSlJqcXYvenpBZjJwbkI2Z1U1LzhRMG16U24zWS9UY3QrMDU3M2NSdXdGSDhUd3B1d09uczBRclpEZGd0bEZIRmJyWFFucFJiU01sQWVtdFNNc2pEOUZBRXROQ3ZFZ0FZNkFHQ2ttYjhDRlg1TFg1MkJBRzRiWHVJaGthSjZpclZlQk9uaHNtRERBUUMwM1VCaDlyYmxjUkdVYlpRWTllUWk5S24rWCswVzRMUldUR0hEdEVheHNxKy90ZWxGOWk2Q2NDZHUwTHMyaTB4YkdpNDNvT3NxaXZjL3JoVENtcE1RTCtzVVFJQ0hEemZ4c0h6VmNLd3MxTmgxKzRRUHA5NlhuR3hTRTIxMkpXMEpwVTFTbG9Mb1VVZ3ZaTy9XSDZ0c3N4SFBoOUxmSDdlODNuWkVBaG12TVdycXRRUmdEWFc1Q2ROU29FQWpMeE9JUGN4TTcxaE4rZElWRmVMMGV0a25sRnRNbEZ0TXNWTk5BTXBFSCtvaEovdnFyNnIrQU5ZN1Evdy9jYW1wSDIydUZqazFwdkt1UEx5NGlpRldmQXA4TitNS29udVp4RCtKdEQ4dFV6RkhhS3FoZ0oxZmp1MEdsWTN3NmFJTWFkWEFPWXArN3NuR1pGdEtBQU45SlJoTU5SL3Zjbng5TTI2S1psZE55citYNjl3RzVtNy82WldmaHhTTW9uNzcvN2htZU8yVVJEQ1NUVnk1UWE4L3lxcHVnRjNsNXFPRzdBWnIxQ0VRK25vSHdQUUlPUDZCc3FBZXFNWkJqeUNFbGhWb3o3dkJLRE5CaDNkODk2cVR3S2NlTHlxcGhLS1FCd0Y4bGM5di80WWk1bFNVYVF0N0JLNnIwNW5CVHB6dEV3TjAwYWxsaGJuLzdGdWlFRUFqaDZscmEvY0QyT0J6dFhGQWZ4b3FZOXZuZVBxTm81cnJMRFhyMTJ6M21tR25UNDR1Z0tjMFhFamk0b0VEcGlZWmxJUEdhVFZFSHBiSmY2VVBMUzFES3oyKzNuVDYrTXRyNWRQL2Y2TWVZK3FTcEVKNHkwTUdXS2l1c3JFSVF0ME1RNXRLWkNnUTJ4UWFvYTJPS1JXaVZualFpeHR5RDFoc3owR3dhWlhONG8xZ0ltOGswZEgydTA4SGlQQlJTckUzMzRFSHV6YjVCL0FBcnVOczEwdW5uWEg5cEFSQkxqZ1BCZTMzbHdlOVhJRFFONnNKdjNvejdBdUVxbmZKVlA5aUloUUhHR1dIRmdCUlJiNHRGbWQ0L1JxOTE1NitWdFNiR1FCTnBBbCs4V3dOZnNPTDlBUDRCZWNCTEdtVVRrbHpoR0ozWDlUYmE1TTNIK1ZIRDhVYzI1NlVYN2RnS09QVCt3RzNOT3FkSW9WT0tTT3doMjhoaHR3LzBNUjBBeUVqS1lZMEFoRUVJRGxrSGFRMUF3dzI2WmRURmV1NmlZQVFWVUJaa0lBQWh4bXQvT3FSM1dIMnJVN1JDZ0VYWjdCUlRsWXBrUUJSam8xckV6bzdmdy8xdldCYUFKdzNGaWRNSDlILyt2T3MyMDJ6QUtFd24xNDZUSi9Od0VJS2htMU4wWUFyTTBlK05vTE00dlZUM0hQK29hOEFZS3ZxRzZIU2g1ZXNMVElNbTk0dkx6cDlmS08xOXNWLzdBbkdEdkd6UHg1TnViT3NURjFpb1Vwa3kxUjdwUUo2NzRkeEpGeGZqekFCY3ZiNGhTc2RhR1dsdWUrM1RiR0dCOVI3czAyTU0xVFl6UG1FMGM3dEFSZ1NzUmZlMGhEb2lZbC8zcUIyT3dKYnE0bzV6V1BSNk1rRXdRNDV5d24xMTFUeXF5WkNSU29BOFRiMVBtNVNNTXBDdFZQQ1FoREluNllVQXd1TXl4dGlDSUFGVjkrN3ExTk54K0orcmk3c3NFQUdrZ1RKcURFYUlhODh3RDlxWndlb0VPc3lPeGVVM1QvN1Y3bytxYjdMOFFpQU5OMUEwNERmZDhOdUlRcVJBVGt2dThHYkNRRDZSc1FVR05vTkJoTk1hQVJtUW5ZcEdZQ3psZDIyQWtXQzBXaVNHZllTRmkrVWt2TW1LWkQ2T1hNeWpqVzBVMEFTaEo4dlMzRStISGg1YW5Fb2hKMjJUUkNoanJBMWswa1NDdlZHSUQ1eGhjeFltYU5HNnRWc2NuYisxOTNkZ2dDTTZ4V1B2R3I5Zjk0ZVl3NGdKL0VHd3NLckd5SFZlMVFhNE01SlREZW1YejUyUVBCVjlXK21nL1YxZVpna05jOVh2N245YkRjMXpPVm55akM3QU90SEgya25ZUG4yNWsvejBwTnRhbkg5eFI2QzRML0JNZlRjUTZZbElBQW5LejE1WkxlelgwYnhsVElqbzdldHBxUHlUOEJlS1Rkb1lsK2NNdE5aVnh3bml2MnZtZERKeXh2aHhNck5RU2dzaTNHa2w4Q3BpUEFmQ3lZRG9QZzR4QzRwN0NOcmlFbUU3OG9LK1YzTGEwSUF2emtoeVg4OE1waXhvNkpROUFIWmJDb3pKODRrajVEZEdZS1o1MUE0eWtLbFk4SmFnS3R5UFhvMkZyWTQ5VVpIYjAwUHpzTUF0QkFoaWd6N0wwQzRIZ0txOHc4dVArNmhiSUM0RFR5NVA0YjkvckozWDhoR3dyQUZGUjEvY1VOV01LRVJ5akJwYlFXN3NSaHFBRDdINHBSWXdFYUtzQ0JDMzBpa0R3U2dBSXd5MnBsaVUrVkk2ejZSRXRhaVZsSUJIS3EwOG5WVGMxZE51QW5uL3E3Q1VBQktMZENVeFpUSWs3U3Zwb09QcFAvUitwWEZMNklRWEJNR0I5QkVIank5NXp6amJrMld4Y0IrT25xQUI2UGd0TVpYbGlHMkJLZkxBTGpYV3BpaTBUSCtsVmxaL0E1a0pibGZxTzd5dS9uWlkrSGx6MGV0Z1o3Tm1GUG42WVNmc2NjWmVld1EyemFqTGVaTE50dDRQK2QycCtrRldDYUcrT2dDb3ZxZmwydkk2YUgyZFhZalB2NWdKMGdyY2w5SDlrUWpDYkk5Uzd5b0JLQS9wdnkyMzhyVFNMVHJWWStDNVA0YjcvajB4S0ErNG0vWlczUUd1NEw1ZDNrdnJKUEhkOEF3bUF3SHgwbS9lYWlFbUpoV0wrbmttUys2d0ZmNFk3bkg1YVU4R2hISjl0Q0llWWRaSTFOL3JVRlZYZlg4Y1hkSVJnc0lBNVIrOVJBZ01NajBIYXVndXR1QWV0eEVUK1VXNlBWN3NIODNGT25UZ0Zvc3lVMkhBMFlTQWhEL2RjNzluOS9LcWNIOEFyRmhLSm9yWDdzL3B2aHZHeld1c3RtczRmMFR6ZmdEckVNbDlTYXEycm05cnFGTWtrWjVHSDZESXloQWh6WUNHamxFVUkxc0NWL3hSOW82eVlBNnhza2R1d01NV0s0dXRDYURrQjlsWlFCUVYxak1uR3N3OEViWGxVQnNmS1RBT2QrTThLWXJyVm5qd0FjN0lES2lPeS9EUkI2TS8rUGRGMGdFSlVCdUtSRVpPU0lORndFK3pEbTIrejhEVFdraGlUQnlrLzhISEdZWGYzUlpVb2NqKzY4d1JwQ1NnOTVnMHI2aFY3SmJTQjlHVmptOC9OZmo1dFhQVjUyaGRJZkJHVmxJc2NkYStmNGhRNU9PTTRSN2VLYURCNEpHb1BRRklUT0VMaGwxWlh3NkFxTmU2WC8xbTR5T2ZBbmNQd256bG84dFVqTnZCeTUvaHloRGFvZCtrOStESUUxTVJTeVkwWkh4M2tVYXNPaENEN1BieDgrMG1IdklnRGZla2VuM21vTXdLSUk5dDVsMHNSaVZPckJlcVZLK29sVGttelVUd1RIVVBCOUg1VEd3aHpQTmtIZ3Rvb0t2bFZmejgrdmIrSFVrNTI0WEJFZGJHc25yR3hTKzAydDFwMWNIRHR3Q0VBQWl5VGcvekVFcjFad1hSYlJSaFl0MmEva1NRR29GMTlhTExxSlFUSUlRQVBwTEdvTUdOZityTnZIUnQxNmZOMU9zVHl6TWdlUSt5L0VVd0FtSWNuNnJodHdQSDFnNmpYeUNxWElpSWc5VFh0WlNBU1lRY2IxSFJncXdJR05vSTRBck1odjhYT3NXa25BaXBXQkxnSVFHNGdUUUY2ZldSbmZMUzd1SWdCVll6cGlNUi9zZ0MvYU1xK0lBTXpTYmhLQ2o1STNwVVVrVnZxanlZMnBrM1h1djV2N2I1ZWVwNU9aTFAwNGdnQUVHR3lMVFFCYXhkamtYeEJDYjBEd0NaQSt5OTE5aHhSNDMrZmxGWStYVnp3ZUdxVDBmUmVuVHJGdzZzbE9Uam5Kd2J5RGJKaFM1Zno4TXV6eHE1KzlmbWdJZ2xlSzd1UC9OMWhqZ0VtTElmUml4UC9YUVBCWnNId1RYbm5OeTRuSE83cGpiazRwZ285YndSdmU0eHhhcm1sdnBRMkMvODU5LzJpV1piNktvYUtjTWlsMm9oZnpzUkRJTXdGNHROM0JuOXRVaG5uUFhvbjFHNEpNM245LzFWWTFXWTBuL0h3cXRmY3RUZ2ZyOU5UTE1rMEg1N1BndlRoL0dhclR4VWxPQjhjNkhMeTkyOHV0ZDdSeDgrL0t1bitzdGF1aEhDUUYyclVUcmpCcTRDM3BBcUQ4U2FEbEs0WHltd1dONnJOcnJIbHpmeCsrR0NvU0RYRnJ3RUE2TU5SL2ZRdEsvN2dYQlFHM1VKcUZ3b1RVVHk5STk5OTRCMFFmSVdhbGlCUmtpSXFxYVl4emxjVFhGZEs4T3lHcmZVMTdsSXlRWHgvelFoM014Z3ZCL084V3k0MW1HTERRS3dCcjhsdjhnYnBFSUtzKzFjVUJ6SUliOEFsT0J3ZFlWQ041M2VkQmR1K0pxSE8xVFEyVW5pa21sVUpwaEJ0ZVUzN0lqRmhZNm8vMjU1cytUZHZPL1prQUhHbzJNY3pjL1V3LytsaW44QndheDdXM1NrdWtLRTBRdUJmY1I0THZtdHlRZndGRllaSEh5K1dOall6WnVaTXo2K3A1dUtNalpmTFBZaEU0OW1nNzk5NVZ3ZGViaHJMdWt5SGM4dnN5RHA3Ly8reWRkN2pzVkxuL3Z5dVp2bnMvKy9RRGlJQVVCUkgxMGhTVllnT2txdGl1Mkh2WG40cjkydVhlYTYvMzJodHlRU3dvQ0dLaGQ2VDMwM2ZmZS9iMHNuNS9ySms5U1NhWlNUS1p0SGsvejdNZkRqTXBLeXZKU3RaM3Z1Lzd0aEgvY2xYZ2dTeHd4UUx3UDd1QXIyMEhMcDRSZWZvZXp6ZUxmd0J3eEtCYXNGc0Y4aGZvSE5ObmdkM1hWM0RlYStad3lXK3ppc1l5NEpuRG9zREtDYVBBa2VyWlhQRkw3Z2dUTnhXYUhiL3JwMldNanVxL3RrYWU0LzQxL014RUhBbkZqK1ZYL0VWelQrK1RGTVZUVGh3RFhteHUwT1p6d3NHcSt4b3dEVVJmNGUvNytuT2pJNGd5aGk5K1pRV1BQS29RY1BzaXdBRzFheW10RmdDbGZYcjMwUjY5bUdIMmxWejNub3FlZzY3L1NGL2tlZ0Z3V2dkZ0ZRUmhpbUdRKzQvbS9hNlRaVU9vTlAyS3doMDdKRGZDZit2LzZDejgxL3hKa3NUaVBCQlhDamY2SDJha3VPcmJPUzNIVFdzV1gxVldtZUZkNnBvdzM5QWtIdHBqQUYycDIwMEVBSThkZ0pzakVZd3JsSW9iYnRUa0FUelltZjE4WkdSNDdkOC8vNlVtL21tZi9zNDJQaG9ERGxIL1FsajR2RHRpaGg1L3p6Y0xIRTg3VWlNQTNoUHV5MXJwQXJ6MitvTDYwV3lVMjI5QzNVZkZid0hGcnp1Zks3SE1nU3R5T2J4K2JnN2J0dS9BbVRNeitObHFCb3NtSy9nbUVneW5uNXJDRDc4L2p0a2RHL0huMzAvaHJXOGF3Tll0TFFieENnY2V5d0YvWFFSK3RCdjR4bmJndDdQQUhXbGd3WVJOZFNRSy9OdXd1bisrQ1BEZE9vL2hMTER5T2c2ZUJqNzEyV1YxM3g4MkFKeS9RZnhYMmJ4cjNNdVhlYjJPQVBna2pVTjJ6YVVJUU5vUGtEYTdlLzNHR2NNekVvM3J0Q2tNK0hrMTRlOUovVUpZTmFENkNGRDhEcEE3QjhnY1U4djNaMERrRk9pNnhmekMvdEVvM2pnd2dFS0I0NTN2WGRTY3dDRWdGV2x5QUVwYmUvdnhucnlKWWVaRjFhYUs1TkV6Z01SWEFNUzd0Mis5b0pLaElVYnY3SVIxeVAxSGMzRTNOUS9GT21rSy83VzRSVzVmcCsra09heWo3WE5USHpQTGV6ZC9SRm5XanhLaU5KRFFTNEc3a0F1d2R5bW9CVUJwd3YwbUhCRnJDQzgzM1ZLRVVnZVJEM05tSHk5S3BYQnNRb1NCL3UrUFY5VmZQbUVBa0czYUlaSXljTXlrQ0VHcml4blhBK1ZMdkRtZGR4YUxtTk54anozdHFZcVpYdFg5bkdadTgzU0ZBTGl3VU1WOTl5dUVnZkdZdm1neTJUMlJsQU80SnAvSE8rWVhzRy9ONmZmVDFReFdUSXArZzRNU3pqNnpENy8rMlFUbWRtN0NSVCtmd0hrdjdXdGR5R09wRE55YUZzNityMjBITHBvQmJsNEJab3ZXbncvUEcxUGRJNVhyZ2RMUGpWZlpVSWpnMHFsSjdMaXJnaC85dEhYQ3NlcWRRUDVkN2wwYmY4MDFPMlNQT0Z5amhPeFNMeU43NEFJOElkSElaM2YxTlhtVVN0elVoVmE1SFNoK0djaWVBbVJQRnM3S3ltM2l1K3E5eHZrLzJTZ2dIKzN2Ky9vRHcwT1lsR1ZjOHRzcy9uU0ZRaFNWR2ZDVVlSSEtYbFNJdDl2b0VkKzNYY0xjQ3ppcTk2ay9qNXdFSlArbmV6LzZyWm9aMjZya0FDUk1NQXh5LzlGODMzV3FpQ0RIQmgwNEdHYnVVMjV0dTU2SC94cGdmS3RhdFJmNkxBelkyWTdqelM1QU5rWURUMGdIRTE4ekFQaFpleWE2aExZS3NBZkRqeklNT0oydTR2NEhHbUtOdEMrQWhEUDcrZHI0R0FZbENYZmVWY0xWMXlnbStIRUoySC9BK2daVEVlQ0VkU0lmVjMzNFdRYnk3L1B1ZFA1RlI5em83MmM0OElER3pWMjkzenQzb2xzOFRac0g4THFDK28xb1dzZjZNcUhKazNoZjUrMjRxVkRBK3hZVzhNVHRPL0Q4UFh2eHZYUWFDeVludlNNakVsN3p5bjVjZXRFa1pyWnZ4TTkvTkk2WG5KWXl6cVBGQWV6SUE5Y3NBai9ZQlh4L0ozRFZBdkJJVHRnTzdYTFlnRHBzT2c4VVB0Sit0U1BpY2Z4OWVocVhmaWlIK1FYOVl5NWZBdVJlSWNLSjNTRExPVzR1TmpzQWo5STRaSEczV3JUMElnejQrR1JqNEZ0ZDVianVCZ1BodGdoVS9nWVVMZ0F5eHdLNXM0SGl0NEhxdy9xTGx5ODEzbWYwUlQ1L1RaRWtmTHptNW43SGV4YlZvdWptUG1BeW9YSUJzZ21BOWFQblNhNHdMSjNCVWY2YituUDVLYUpvajF0Q2FYKy9wSjFoRTBSclpBQkQxQTAwSDNhZkZUYUNxbElsNHVZNmxYZnBOUGt1L05kZ2VhbXhHb1VCV3lFdFV4Z3dEVndlUUM3QTNxUlVVZDFyYk56OUpoeWhFV3R1dkxtb2V2bVREM0ptUDFzakVYeDFiQXdNd0dlL29DbmhXZzhoTTh1R0pIRFNPcEhQckU1RjVJcmplNzA3blgvTU5TdDd4eDJUZ0tRczNIQkgrQy9ydytJeHBCUTUxUDZwelFPb0RRTm1FTTdBK3VObmwvMHF2L2VVU3JoZ2NRbFAyckVUejlxOUI5OVlTV08zeVp4K0UrTXlYdi9hQVZ6eGh5bnNmWHdqdnZldE1iencrVW5FNHdhaVg0bUxYSDUvbkJOaHZiL2NDOXkwQWl3NlZIMW1NQUljbzM0d0ZDNDBYeXhpUTBURy95VEhzZjJFQ29yZkUwSlY1WjlBNmZ0QTluUWcvMzUzeGVpcmMzbGRMZlNvcHltdWgySVZlREFMcEJ0QmpQS1QzZjl4NU5CWVRKVWU0WXEvTkRxS3A0SHk3NFJ6TXZOTUlIYytVUHFGcUR6ZWRzai9yWGkvdXZXMklqNzJxU1hrY28wT2lad0FzSlMvNysyWDlmZmppSGdjOTl4YndsZS9rZFk4VEVhYThnQ3lMZlNZQjRCWWlTSDdPaUQvVS9VTklHMFdJcUQ4VkdmM3Q2enpRMGNrWW5iQ1NSQTFSa0JGSmQwbUNITjNGOEovTTFLSDl1Z2VEUDhGT3N3bzFtazE0SGJyYTc5djFQQTFWdzJZR1hhZG5XckE2dTlLaUNIUCtwRGdHZjhPREg0ZmpLa0tzVDBHQUN3QktGSlg5QlNsQ2hBVEUwMVBCTUNZMm4xenc0MEZuUGZTdnNZRTVWQ2djb3N6K3pxdEw0WDU2aWplK2VjRlhQWFhQSjUxWE0xbEU1V0FFNmFBaDFhQjdkbW1TYVJRQVppb0d2eUVBVkY1VWpQbUZENHFCQTZ2V0twV2NXMisyUUY0L0xIcXRsYXVELzhsTFVNSXkzK3I5VWZiUWlBalVTQ2lDSEcxR1A2N3UxTEJMMWN6K0dVbWd6dUsxZ2JRd1VFSkx6azFoYlBPU09FNXowNDJUNUsxRkt2QVF6a2hVblhxN212SGM4ZFU0ZEtWMjRIU0Q2MXZacjljRk1VdmVIOWQvRDZYYmZwczMzMGltRjZuU0g2M3B5amVJUjdNQVUrcE9ZTWxJWTY1bGFldy9qWjVYQ0tCaXpMaVhmQ1dQeFZSMmc4b1gxRzdoOHMyWDQ5MkE2ZnZQNGVMdDR2dEh2akVLTTQrc3piZUprUzRjeXVYb05jd0FGOGFIY0d6ZHUvQnh6NjFqSmVkMjRmSmlkcjVHNDRCcStxT2tmWUZxditpeHp3QVNCd29mNEpoK1dHT29mL0gxdDZUMlpBSUI4NS9BQ2hmMXIzOUo3US9aRlJKQUNSYUVBSGwvdk9QdnROVGJTeXlKUElzYWFIQkRvVC90cWoreXl4MlhhY3lDTy93dG0yeFpRNHdacjdKaHNzcjErUmduTFhvUUh2YmJiVVZEcTZvYXFYNHRyWmQweWRBczJCYUdrV2lrbkhtTEhicjZ2RGJmZ2huR0FHd2w3cWhwMUFLZ1BWZlcxMThNSS9MTWpaSEluaThMQ1p1Tjk2a0ZsRGtRNENTZy90NzdjQUFrb3poM2U5YXhQWFhyVU8wTG5EMFI0RERoc1ZmbVl0UXNtSlY5RWRjRm00b1NXY3dLNG5rK3QyY09KbmhzbXdXZWo2elp4L2Zld0lnSUFxQjFBWEFlKzhyWVdHaDJxajB1ajR1d29wV0FWVFFWQUNrZW0vNzdhZXJWVnlhemVMbnF4bGNrODliaW1icjYyTjR3U2twdlBUc1BwejQzSVN4dzY5T3Z1WktleUFycXZSV1hMaEJEKzRIdGlpdW5TSlErQkFDRzdiSEFmd3gyMnczWFBzUm9NNzJtb2orVUxZaEFNSjlBUkFBenVycnc5WklCQzlNSlhIRWJCeUZqenV6M1dkbEU3Z1k0aDN6SnovUE5BUkFpREJnUHd1QWdCRDNYOXJmajUrc3JPS0RIMTdDOTc2bHNHZXVVMC9hL0ZJSXBNeUJMSytpWDVJOFQyY20vNWhoN2xHTzhhK3lSb3FOQ0pENElsRGNMSW9mZFVwR3g5MlhTRkFSRU1MaWZJVG1qOEY2eUFaNVAxeXR3OWpaWnlQczFwejd6L0toV0E3VGRUZjh0L1lvZ2VxQW1lTjNzZlBLa3RoaWJidkt6VE1PR0lxTHpwTmhJeGpIVGpDN2I5cmRGdDJDSUI2UzhHaVBmZ2dYWUlHNm9tY29Wb0Q2L0U4V1NjR2RybnphZmtJWFd4TUFiN3VqaUZLSnJ3bHowaUhPNys5bC9mMDRhREdHLzNwYkd1LytoczVQekJFbXF2dTJvZm9ZVUhpZmNFWjV6YTh5emE3eHFVa1pUejZzY1J6VkJ3RSsxeHVYOWRNVGNXQzU4Zi9YM1ZEQUtTZlZ4SUdvQkV4SGdlV1NHT3VtTmZuL0RBVEFDa1FGMzUrdXJ1SVAyUnh5RmtMWVlqR0c1NStjeEZrdlNlRkZMMGdobFdyemdNcFVoQWgxZjFhSVVtNU9sdnRsNERoMTZHL3hhMEQxb2VCZUQ5Y1hDdGlyRTRwOXdyTTBBdUNPZk9PLytTcVFFSEtOL0F3UkhzdXo3clg1bEZRU3A2U1NqbS8zdEw0VTNydXdnQUxuK01QbElrZmpXRTBjbDU4cHdwM2RmZ1pZNVJNanc3ZzBtOFVQZnJpS041dy9nQ09mR211TTNRcThMQVR5bEoyNzhHQkovZlBWMjRjRzhha1I3L090SlA3T3NQTTFWV3o0cVZxT2pMME5ZQU5BNFhPZGJiK3NNelpHTk9jR0ZVb0NTQmdRaFloS0l1ek5mNzFZMTAvNzZXajdES3RzeE4zenBSdit5d01YL2dzNFVLK25xWGxtaTRIQW5JR0ZONTF1cTVlSHVXKzRxUTdubWttR2hBd0xVZFpUK3BVdldJeFNGL1FVMmtJZ0hwei93Mk9Oa014Q2dlUE91eFNGUURZRHJBdGhJRStKeGZEYXF3WngzM2xsVkIrd09LUXRpdXFhMlJmN1EveWJxVlIwcTV1KzRKU2tPdi9mMzNybnNuNWFQSzU2R3YvOW41cGZOU1pxd2s4Y3dIUnJCNkQwUk9CL3h0TFlmL3NPbkxGM0JyL0paRTJKZjR3SkIrYjN2ejJHbWUwYjhadGZUT0Njcy9xTXhiOWNCYmc5RGZ4aUQvRHRIY0FWQzhMeDUvWXo5SVJSVVJ5bjNoLzNBTVh2QnZ0NitNVnFzMEF1U2NCem42TVEyRXBjaEFBRHd1bjRzTUl4R0FQa1k4Tnhid3hMRXA2WEZNZGRMZ08vL0xXaWJ5UWc4bnovSDhPa0xPTUR3MFBnSEhqck94Y01wd2hlQ29BalV2TlU2TCtYVjNCdDN2dGZXTzhvRm5IOEgvZmdsNzl1VnJRakx3Q2tEblB2Rm5ST1NIOC8vU3BQV0ppSDBPVkM4M3dQeUxBQmxKc0NXZHRyT00xTG1Bei9iZmNlYWJHcmxmNG5PKzYvVGsrbFpIV0hqdTNhWWhubGxzS2lUakVRM3JTSVE4VkFOSXVucGJIT3VvU0g1SVlsOGRCOVVuQ3M4aW9SQUlwcVZ3eWJjTDhKeWtyQUFIRERUZW9Ka25Sd2QvWXJBOWh3WXdUWkY0cWlCTVd2Q3BHTTc0WTYxTEVrM0hPbGk0SDhXNEhNOFVEeE93RHkvamlGUDF2TjZJYi92dkQ1YXZkUStTKzljMW1QU0JMMmp6YWNmZGRlcDVsMGp5dnlBQTRyQ29Dc0F0WHR3Z1VWZlFXUXVoaElYUUo4OHZGbHpKZ3M1bkhvSVRGOC9qTWoyUDdRUmx6NXh5bTgraFg5R0JveWVDMHFWSUc3Vm9HTFpvQnY3Z0N1WEFCMkZyeDc5aDNRQit5cnFBUlJBZklmRXY4TkttVU8vRWJISVh2ME14TnJ6amNBd09NNWRYajFRMnB4eEl0cXdOM2k3UDVHMk8rUGY2cnVtK2dMZzNFTWJ4d1l3Qk9pVVZ4L1l3RS8vSWwrS1drdlE0QkhkUVRBS29BM3pNOGg2MkVCakY5bk1uanU3ajE0TUZ2QzJTK2Z4WDk4ZnJucEhTRDVFeUJ5dlAxOTVNMGNYNWtjZ0lRT01ZaG9KSUxtMjI1cEc0cDFWbTJHL3phV3R4ait5MHhXL0xBUi90dVZ6bTR6dGtlYU4rTnVHREN6dWJZcUROajg3blQyYnJVWWlKb3M2MGNGVWNpT1pyOXlwZXVwaldGZ0RNQk82b2Flb0tRUkFEMXdBQjRSaTBOQ1EzTzc2ZVlpY0g3amUvbFFVVDIwbTFUdkJvcDNhMGJ5Rk1DcjhJM1FaOFQzVjlOTm53ME9Tamp4dVEwQmtDODdWMHdsS0J3VmorTytXZ2plRFRjVlVDNHJLbEhXQmNDRURDUVZSU0N5UU9MclFPVFl4cHZNN2owVnpNeTJWc0EyYnBEeHNuUDc4UEp6KzNId2s2SnQ3amt1eEtWN004QmpMdVgwTTBOU0JwNmxIZ0NLM3hFT3dDQnplUzZMQloycXBGcUJIQTlxY2dRK1dpdXlVZ3RkbEkrRCtOV2dFdng3NCtSa0VvT1NoSlZxRmYrOHJvQkhIaTFqMjFaeHdVdUhDT0dzK3FoNm5iL2s4dmpBd2dLT2lNZHhSRHlHdzJOeFBEa2U4eXluWFpReGZINTBCS2Z0bmNFSC90OFNUbnRSQ29PRG10WWtBRFpkKzFISFpVWmsvWjU1dUZUR2h4Y1c4ZVV4ZHgrMlZRQWZYMXpDVjVhWFZUT1VEMzEwQ1E4L1VzYlgvMnQwTGZVR1M0cHhzUEJwb1BRVDYvdlN1MFdHQmlVUWhLbjVCK0dvWmtOdE5EdEd5c2hhaXNDMFZ2ekR2RTdCRFZXa2RqQ1hPMS9iVW5PamZCczFzNU13WUR1SHlTeWVidWJvdGM2YkZseHhZeVllaEhoL2NnRzZUd0tOdkhCRXVORTZBQ2ZkYjBLZnhQQUVoVnVyeVFGNGlEZGR3N1B3dmZoM1pTNkhoMHZOSlVGUGUxRktsWFM5ZktYN3drV1plenQ4UHozUmNQbGxzeHkzM2E0b01ETVFFZUxmY0t6cCtvODhHNnFmTVZYcktlanZaM2pWZWYyNDZrOVRlT3lCamZqc3AwYU14YjhLRjRVOGZqY0hmR003OFBzNUVXSmE4ZEVEN3RralFGSVIrdnV3eVAwWGRMNlQxbmVIblhGNlN2M0JJeG9Cc01SRkNIYjkyaGdBNUtQQ01lekhHTU5wZlkzai8rblAxUzdBaUk0TDhMRnlHZmVVU3ZqeDZpcmVPYitBNDNidnh1ZVdsajA5anVja2t6ZzVsY1NldlJWODZyUDZiZkVxREZnYkFuenMwUWw4NVFzaitNb1hSbkRRUnlQWXRibnNXbHRXcWxXY3RYY0dYOWFJZjNXKys0TlZ2T0MwV1N3dlYxVXp1ZmhIZ1BnSElZUnZDNlIxQkhkVnpVV3FBRXpva1lTSVFpSmNmdGtOdVk1Z2tsVTJpcXBTM2VIbWRteTJhY3ptOG5hNnFMUHdYM3Z1djlwanc0OFhNcmZZQWRBTkEyN2Vxa05od05vSHFEemEyWVhQZzM4ejlrUWIvUXJsQXV3TmZPQUFCRVFoa0RyL3VydUVUS1p4ODhxSDBHa3k0cXNyYWQzUFgzcU8raTNhaXlyRnY4NWtjR1BCdTN4WFI4WGpxdi8vcDE0WThFaTA3WFp1djZPb21zU2U4S3dFZnZqOWNleDViQk4rOEoweEhIOXNBcExSVzgrT1BIREZQUEN0SGNDbHM4QjlHYUdNK28zOVVzQVRGYi82VklEQ0J3Ry9CaUdZNVpGeUdWZmxtcXYvL3RzejR0aTZKYUkrVDFrZGhmekJFSWNCOXpYTzk0OSsybDRBM0ZscEZxeSt0cktDbGFxM29aeWZHeDFGbkRGYytOOXAzUDlBOHdVcjdlTk51OFlrdFdxMmJXc0U3M2pyNE5yZkUvNDNBdVpDb1lNSFNpVWN2M3NQTHRlNUQ1VE16VmVRWG0wZW0rUWpBVGJjZVR2NitoU0RKQW1BaE81TlExMUFjM0tYdDkrcStxL2xiWmtMLzIyOFVPcUgvNW8zd0hIZlhRdVNmbnU0cTJlYmRiUzJ1VTVsbHZkdXZoaElDWEhrV1loc1dQUzhEeFl4QUlQVURhR25vSjcwU2hQZU5PTUloVmhUcllwcXdHdWo2YVEzemtTL2MyZXhpQ3QxSm5YYnRrYnduR2Nyd245bmdjcjErdHN3bTlmT0RoZXVMT08zMmF4bi9iTi9OS3JLdzZVdkFMYXY5bno3blNVOFliOElQdjN4WVR6MndBWmM4WWNwblBmU1B2VDFHVHpuNTB2QTM1ZUE3KzRFZnJrWHVHTlZWSlQxSzNGSkZQNVF2bi84MkI4RmJqcmxHeXNyME92NWw1MnJlYmU2MStBNmZTaW5lbmVKbkJDZThlUG9SQUliSWtLa3V1Lytra2k5VUg4T2JBYmt3OVRMN3l3M2p4VkRHeVI4UFozMjlEaTJSU0o0eStBZ1NpV090Nzk3c2VsNytXQnYycVVOQVo1ZjBQellOZzNFLzE5MzIzQjVMb2ZqZHUvQkE2WFdTdjY1Wi9maGIxZXV3OFlOYXRHeS9Ec2crMUxyVmFGWGRBUythSlRtQTBRTCtpR0tjaEUwci9lQUlrc2l6NUlXRHRCYStDOHozWGZjZGxkN0hmNExBSkpwOTV0ZndvQTVOOUY1WnJ1eDJRWEliZDVNYVdtOHMzUFg3V0lnRkVJY2JrWkFlUlREanJZS3NFZS93QjRlVXdzeDE5K2dGbXZJQmRqTWw1WlhkSWUzMTc2NlgrVklLMTBLdy9EZk44ek40eGM2QlJJNjVjKzVIUDVWTEhrcUFBTEFrUXBoK1ovWDZnaUF3KzBGd0U5ZU1Jejc3OXFBRDcxL0NKczJSdlFYeWxXQWUxYUFTM1lEdjlvRjNMUU1ySlNEY1NFZFB3TDBOU2IrMWNlQndsZUNmMzhzVkt2NDRXcHorRzh5eVhEdVdRb0JzTXFCK3pQRzUzVlg0N3BoVTk2bEpIQWFCdUJNaFF2d0o5b3c0QmVwbDk5UmJyNmVyLzd6Rk41LzJ3REtmZDYrYUwxdmVBanJaUmwvL0ZNT2wvMWUvYU9JVjlXYnRTSEFDd3ZOVW5UazFPNkp5bDlhWHNaWmUyZDB3M0hYSm1zUzhMbFBqK0NuL3p1dXJrNWVCWXBmQlBMdmdhMDBHSHBYUXp5dTNENFZBQ0UwVU5SUnVPZkkzVzVqaHhySmlqUm1hM3RyaXhtNC8rdzJrK2x1MTl6aGV4WCtDN2dlQXN3dDlMRDFqbXdLQTliZEhlL0tYYkRLaGxHMW1ud2pySU1VNFQ0UkFNUFVEYUdtVkZIZGwyemNtMlljR29zaHFrZ1NkT1BONnJ4cjBxRjBxcFRjVVN6cVZqYU54UmorL2RYOXFqRzMvQXY5YlZ5ZXkrSFB1UncrdExEb2VCamZmeTZ2QUFBZUtwVnhiOG03T05KbktQSUFidDlSeHM1ZENpVjBMQVlNdGc4QjNtOWZBOUd2d29ISE1zRFZNOEFsTzREYkZvRnNFUmdDTUFWZ0hNQUFoSnZhcnora2JFa0NUMUpmTDRVUHcvZTVMODN3clpVME1qcE9wSFBPN01Qd3NPSTE5YUZjYTRkbWo0UUIvL3lYR1NnTndaR1RvY3FGdVZQSExieGh2WXlCS1FtcDEzdDdnYWNZd3lkSFJ3QUE3M3p2QWdxRnhubG5vNEQ4VFBmYjFDUUFMdXBmWS9GUEFHekV1ZjFtT2NjcloyZnhzY1VsdEJyVmg0Y2xYSGJ4Sk43M2JuV29CMDhEdVRjQXhlL2FmMmZQOGVZOUp4T001Z0tFUGtNQW90UU5OSi8zNmxBa3JGcktmOFF0TEdtZ1Vaa04vN1hhQnU3dHlaSXNkVVFYcnpFN1ljRE00cDdOaGdIYktRWlNCUXRYTVJDdjJrZ3ZHL1laQnNLa1FSTTZLUElBZWlVQXhoakRJYkhHRytCTk41TURzQlVmVzF6U0hkWmU4YkkrVEUwMmJ0akt0Y0xScGFYTWdROHVpSEM1bVVvRkgxdGNjcXh0dHhhTCtHdStvU0JkNXFFTFVKc0g4Qi8vVkZ4WEVnUEtOb1RQMlFKdzR6eHc4UTdnbjNQQTdweitNeVlLRWRZMEJpRUlqa0lVVi9MTFJDZktnT2RwUW45L0NWUnVDUDc5c1ZLdDRtc3JLN3JmdmZGMW1zUnJ0N2NKWWRVS2dDRUtBejQ0RnNOQnRYRjN6OTRLcnJ5cTRaNWpvNEQ4YjQxbHRRN0FxVWtac1poNHo0MiszRmtSeXc1bjlmWGg2ZkU0SG55b2pLLzhsL3JjeHovaS9udk1pQ1lIb0o0REVCQ3UrL2dGenV6ejhYSVp6OW05QjcvSnRCNXpEendnaXV2L3RnNG5uNmdPZWFzK0RPVE9CQ3JYZE5hT29zNTRxTkpESytRQUpCU0t3UWgxQTgyTnZXdmpLaHRHUlNsZDJTNytZVEw4dDgwV21ZMHVZQzUzc1pHZUozclJvVEJnODh0ckdzYU50bUpqdXpyRlFIakx6bkN5R01oWXAyY3A4RGNuNGZIRG1hejU0VVlwQUhvWTl2MlVXRU9zZWZDaHNtckNKQjFNcDZsTzNiblg5QUxBZ1BlK1MrM21LUDFRZnh2ZlRLK284a0o5TDUzR3pZV2lJKzI3Y0ZsZGpkTkxBZkNJZUJ3UnhmWDh6K3MwMXJZSDBrRGFoRU14VXdidVdnWXUyd2xjc1FkNGNMVXBmTDd0MjFrY0lxL3FPUHdoQ0I3Y0w2b2gxeC9sdTRIaTU4TnhqM3hsZVFYTE9xN1dvNThaeDVGUFZZUjlMNVZWbFg1MXlaYUJoY1kxSXUwSFNGdUMzVDlWaUFyaWI1cWJ4K09LM0g0LytabmFWUnl0aFFFdlZLdklhZDVsdHlpS3FMQVVFSHVEOThmMXhiRlJTQUErL2JsbDdOcmRPQzVwbXhBcDNhVFpBV2ljYnpWeUVoQjVRV2Y3KzFzK2oyTjM3OGFkeGRiaitBdWZuOFIxMTZ6RC9rOVFEenpscTREY1dVRDEwYzZQdmFnejd4a2NsRUFRelRjS3lHUVFkbnhmL0tQRDNFY21pMytzL1I4emFma3pxWTl4eFQvc2hQKzJiWXdGUFU4SzJ0WEZEVC96dmhoSUVRbDNpb0dFUFo4ZkNaWDJxWWV4RWVHa3FKaVl5UDZvQkF3QU45Mml5TDAxR1B4SnR4TVVPTWQ3NXhkMHZ6dm5yRDdWcEs3NkFGRCthL055ODVVcVBydTAzQ1FJdkdOK0hyeEQ4ZmV4Y2htWGFnUy9Xd3BGN081aXNaRldKQm5EWVlyOGtrMkZRQWFpd0ovMkFIdDFSS0I2aU85ZjlnSy8zUW5jdVFTa0hjcnJKMEV0Q0s2RGNBb09BRWpBblVRcXU5Ujl3WmNBbmduK1BiSzNVc0UzMHZydXZ3KzhkMGo5d1cwcit1ZGxBRUtnWFZjN1A3dkNFUVo4WGFHQTl5d3NZTC90TzNEcTNobjhhSFVWcXdxaDlEZVhaSkhMTlY2V0lpY0ljVTh2LzUrMllFVDBiTzhjNUhVT2k4WHdxb0VCcks1eXZPOUQ2b0lnc2JlNm0rTldXd1NrWEFiU2FlTWZEZUlmc1YvczZsc3JhYnhvNzE3TXQzSFdmZmlEUS9pL1gwMDJpWEhGYndMNU53TjgxWmxqejdXYk1GYm9oWnlBU0RFd1JOMUE4Mm52OWxOa1NlU2FOQlp2aW4vd3JuU0J1Mk50NDhuQ3VjbERkTDc1WEdHbHRMbytjN3BkSFJjRElSY2c0U0dzTmprbHdvbTJFSWhYQW1CTUhhNTU0MDJhUElEa0FzVG5scGJ4aU01a1hKYUJUM3gwV1AxaTh4MzlzZmxUUzB1NjdxaEhVMlZVeitoc01QK3Y1UldVZWZQajRkR3QzaFhFZUpvaURQalcyNHJJWmhVTm5JZ0R4YXJJNC9kUWJmYTdVQVJ1V2dEK3J4Yml1emZmL1djY2cvaVJwUi9DRVRFRllMTDI3M3AxUktkRndiMUZZTEZ4WHFRREFlbWc0TjhqRnl3dTZlYitPK1RnS0U0NVNSSHlXS2dDOTY4Mitud1NEV2RtdmMvckw0TTcxQUtnSENBQjhQWmlFUjlaWE1SQk8zYml1YnYzNEZzcmFjd2FDUEtycXh5WC9GWnhyQWxBZmg2d1M2Y0NzRllBUkFLSXZjNzc0LzNvOERDR0pRay8rVmxHSmZpemZpRDJUdmZhTVNKSlRYT0plV1VZY0trS3pDbmFOeVR5QVZxYXZIS09OOC9ONHowTEMwM2pycEpVaXVGWFA1M0FKeThZVm9maTVvSDgyNEhpaFFBY2pNcXRhZ2JNZ1FGSmQwNUU5RGhqb0VLRFljZm43ajluaTM5MDNreG00MURZMnIvZDFkZjB4blRycjZsZHN5T2lvKzIyTEFiU3RsTzRZOTIreWthb0dJalg2L1k2S1FCSjZvWlFVbFJQN3RpRU44MDRJQlpGU2xFSTVJYWJLQStna2x1TFJYeGxaVm4zdTllL2RrQlZyS0w2TUZEK1hmTnkveXFXOElPMGZzNnpqMzlrR0lQdlo3YlAvMEsxaWgvclZGMlZKT0NBTjBRODY3ZW54eE5yL3k2WDFjNVNKR1NnUHlJcXdkNHdMNXgrbCs4V29jRkZqL05VeVVKVVdYT2pUYUVoVUEzV3h1Um9oeE9vdTlYbkszcG1zTytSbXdzRi9IUlYzOGIwaVk4T2d5bjc2c0UwTU1BYnJzdFdyMWlMUlJFS1hEODFoM2xYTWQwTUQ1UksrSStsWlJ5eGN4ZU8zclViRnk2dllIdlpuQWgvOGFWcXNUUDZRbUJIcFhuZHpadWE3K25vdVFDYjlsaFRrQ1c4cEZiYzVLM3ZYRkFWbkkyK3hOMHF6dG93NFBsNVJXTWlFdkQzV1NEZmVQNUdqamQvRCs2dFZIRHlucjI2bGE2VmJOMFN3YlYvWFljelRrK3BYNGQzQWRtemdmTGx6aC8zaWthQWw3U3p3aXE5alBjOGNZZ2ZXZ2lhUjN2V2hSSldMU1d2TmEvckdJcHhab3QvV05iRnpCNUNsL1MyK2xqZnZndTVxM2NENjJodFo4T0E3UllEV2UzVWxzTnBVQ0E2Wkp5NklKU1VOQUtnUnc1QUNjQ1RGV0hBVFE3QXczcjNGR1U1eC9temM3b3VqNUVSQ1orNFlGajFXZkZDQURvbW4vY3ZMT2g5akFPZUdNV2JYajhBMWcvRVAyU3ZqZDlhU1NPcjg3SncrcWtwYkhxeEREYm9UZCsxTEFRQ0FHT0s3MWZML3I0UTZpR3FmUkNoVS9YdzRVa0lZWENvOWwwQ0lyeXEzY3VQVmdBOERaNmRwMDZwQUhqbi9JTHVxOGpUam96anhTOVVDQ0JsRHR5M1ltMEhPM0txOCtDM1lpQTd5bVZjdUx5Q1kzYnR4dUU3ZCtFelMwdTQzMlFGN3Y1K2hwZWYyNGZmWHpLSkgvOUEvYUNYbndFc2pUYjNhcE1ERUFDaVFPejEzdlhCZktXS1Y4L080WHUxSHpsdXViV0k3LzVnVmZVNkh2OHdYSE1kYWNPQVZaV0FHVVFvN045blZZSlk3UDJBdEtIMWRtOHVGSERNcnQyNG9WQm91ZHl6ajAvZ3BtdW5jZWdoNnZRYWxldUI3T2xBOVQ1MytpR1YxSFE0Q1lBRXpTZkNUN2MxaFE2SGtWVTJoSXJ5bDc5dUYvK3dhRXJydlBnSDc4SXA1VzFmVVJWTDgrNWNSMmFMZ1ZqdEJzNU5kS3B4dTdwVkRHUzUwekRnWGhzWTNMc2Zlb2NZaFBPRUNCZGFCK0NrZDAxUmhnSHYzbFBCemwyTnRza0hvbWVUUmI5OWZoNzNHVXptUC9PSllZeU5OaDY3bGR1QjhwK2JsN3NzbTFWVjUxWHlsUytNSUZJejlFUk9WbGYvTkVPZWMzekxJTy9hKzk0MUJFUUErVGh2K201WHBZeUV3dnJWbEFkd0loNzhDMFNHRUFaVHRURjZCTUFFaERnNFZadHNqZFMrNjROd2M4Y0E1Q3JxS3JjSklIcE9NTHZndjVkWGNLdEJBWVRQZlZyai9ydHZSWVFBVzJHSC82b0J6MVVxK0hZNmplZnQyWU9EZHV6RVJ4WVhjVnZSWERHZlJJTGg5Rk5UK05WUEp6Q3pmUk4rOUlOeG5IeGlFdEVvYTNxajMrZEZ6UVB2NXMzNnJ0N29Td0MyM3YyKytQbHFCb2Z2M0lsZlo5U0pMRDk4d1JLV2xocm5XajRNaUx6WW5UWTFWd0xXL1B3U2swUlY4VnNhK1FwWlB4RC9qUEVrNUNlcnF6aHB6OTYyZVZYZjl1WUJYSDdabE9yWkFBQ2xId081MTRpY245MWlWWk5pb2w0dG10N0RDUURDK1plZ2JxRDVzN2Q5bDVZNlZLR3RGdjlvQTlQZHJyblRZYWY0aDJPblU3RmRxZk9PZExDSnZMTXJXWlc5VHhzR2JMcHBEaFFEWVFrVXdsUU1oQWdtb3dDb21GdTQ4SWtERUdndUJIS2pNZ3c0SVNwdzlocmZUYWZ4ODFYOTZnekhIWlBBNi81OVFEVitGejdaUEk0WE9jY0hGeFoxdDNIS1NVbWM5RHgxZkgvOEFsZ3EvUE9qMVZYZEJQVEhINXRZcTdycVp1R0VNZ2QrbmNuZ1didjM0Tm03OXlDdmVMKzQ5cnFDK25WalBCN3VDMGlDQ0JWT1FJaC9nd0NHSWZJdlRRQjRUQjBTSG4wTndBYUNkWWdQbGNyNHpKSytvdkdTMDFJNC9sakZiTE5VQmU1ZHNiNlRtYndxTEZ4K2hpaVE0VGJwV3FqOXFYdG5zTi8ySFhqMy9BS3V6UmRNdmJwRklzQ0p6MDNpaDk4Zng1N0hOdUtpbjAvZ2pOTlRTQ2IxMzFINUxGRDZBWERsVmMwL0hHemFhQkRXSHhVRk45eGlSN21NTS9iTzRQeTVPU3pvNURhZG5hdmdnaytxcjQzNGV3QTNYcWRIcFJZT1FFQUlnSUJJT2ZCd3c2a29Id1ZFejFNdldnWHdnWVZGdkdGdVhqV2VhWW5GR0g3d25USDg1NWRHMTM3VVdYc09mQWNvZkFxNjduQW4wVzQrcXExMFhxbUM2RkVvcHpqaEF4MmlpRVJYaTMvb3JxNGIvbXNsSnBaM3FiK2NDZitGV1htZ084a0tuUTBEdHVvQ2JMdDhoOFZBVnNKV0RJUit4UWdlTW9RSVNJU0hndnAxWFpyd3JpbUhhOEkxYjd4WjdXYVJEKzJ0VTNObExvZjNMdWhYL2UzckV4TTk1Unl6OUV1Z2VsZnpzbDlmU2VOUm5SeGdrUWp3NWM4MzUwQ1JOZ094TjVocll4V2krSWNlNzMxWHd6SXNINE91VnhOZnJGYng1ZVZsSEx4ekIxNDlPNGViZEVMazVoZXF1UDhCaFp0eU9BWkVlamdUK1V3ZW1GY1VJeGdHb3E4TVR2UExIUGozdVZuZHlxT0pCTU1YUDZ1NXZ1OWF0cGZma1FQWXFRZ0RqZ0h5c2U0Y1k0NXpYSlRKNE55WldXemJ2Z052bkp2SGxibWNLUjJITWVDWWY0dmpHLzg5aWwyUGJzUWZmenVKODE3YWg2RWgvVmQxdmdTVWZnSGt6Z015eHdHRnp3Ri92VU10QU1veU1MMU80VzdMVnFETVR4QjlrUmhEdXMxMzBtazhiZGR1WEo3THRWenUvZ2ZLcXJrTUd3ZWliK3grKzdRNUFCY1dOTmRkWE5HSE55Nm83c1A0dXdCcFcyTmNlL0dldmZqYVNtdmhldDJVakd1dW5NS3J6dE5QcmxiK2t6dlhxMWFnN091alg0MkorazBCa1o2Q0NOYmMxODM1ZmJlMnIzVC95ZDB0L3NFc05wUFpPTHhPd244ZEsvNmhuVHMwcjJXMlo1MVBUc2dWK2ZTNHplMzJYREVRRXNpSVZneDJmeUpQdUlpMkNyQ0h2ODV1aTBSVWs2WWJibFFMT0wxVUNmaXVZaEd2TU1qN0J3QmZ2WEFVMjdZMjNxVDVERkQ4VXZOeU01VUtQcmVzWHp6a3JXOGF4QlAzaitwK0Yzc3RJRzF0Mzg1TE1sbGRjZkhnSjBWeDhva05aeUZMQVpGbmRxZXY3aXVWOFBiNUJSeXdmUWN1V0Z6Q3puSnJhZVFmMXhiVWIxRmhkd0cyNC9ZbDFmOUdYK1h2SWhkS1ByMjBoSnNMK21HdkgvdndNTFp1VWN3MjB5WGcvclQ5blduRGdMdm9haTF4amo5bWMzak43QnkyYmQrT1Y4M080YkpzRmdXVDc5TlBQU0tHTDM1MkJOc2Yyb2hycmx5SE41dy9nSWx4L2ZkSG5nSEtsd0s1MXdHWm80SENCVURsUnF4Vmh0V0dtMDZ2a3lFck43VllCRzVYT0l4bElQYW03dlhOZzZVU1R0eXpCKythWDBDNmFpem1EZzFKK042M3h2RDdTeWJWSWVBUUlpVzZmTnUzekFFSU5CeUFnTWlMOXpkRlVaQUVFUDhzSUIwQXZHMThIbGNicEcrb2M5U1JjZHh5L1RTT09yTEZRUlhkdVNlMTE2aTI3MUdoU1VaUEVvRndueE9FaC9vRGg0UzBwVkFuL3hYL1VCZ0liWVgvdGowMm03cGR4UHVyaDNWaGJZTnZOQjh6dys1a21vdkVUQ3M1d05uYWdsVXdyTEF4RFBNWis0ZmFXZmM0di8xdXQ0ZHducnFGZnpkMVJTZ29WVlQzSWZNNE9mTlQ0M0g4dWVib3VPbVdJamh2VENCNnBSTHczY1VTWHJoM0Jpc0drOXZYdkxLL3llV1IvekRBZFF3aUgxdGNhc3JKQkFEall4SSsrcUVoOVllWk10QlhlNFRIUkNodzd0V3QyM3FoUVdYaTk3NXJxR25pSno4SEtGL3RYRC85T1pmRDExZlN1REtYTS8zZStOd1RFamowWU0wdkdPTnhZRSsrZDhlQXZYbmhCSndVb2JLc0g0aS9EOGkvMzkvTnZqS1h3MWNNeE8zRG54TER1OStoU1ZwN3kySm5CUWgyNTRSNElZc0xXejRPd2hYdlVFaGxGY0RmOG5uOEtwUEJwWmtzRnF2V25Jb0hIaERGdVdmMTRkeXorMVJWd2ZWVkdxQjhEVkQrcmZndkRDNy9tVW9GUmMxTGZsUDRiN1lzd2xnMzk2M2wxSXk4Q0pDK0ExUWZjdTU4VnlEY3hwOVpXbW9aQmdzQXA3MDRoYS8vMXlqV1RUV0xudVhMZ01KblJCOTBrOUdtSElBdEJFQkE1T1Q4K3l6dzdDbEFZcEFQQTFLL0FUNy84QWd1UHpLSFhFNy9tRjkxWGorKytkVlJ4T09zK2J5a0ZEOFNwZDI1TDB1YWN6TTBLTGsreVNkOHlCak45d0pKMk54L2JNVDk0aC9NL0lGd1R6cklHU0xtbThqQkxJNEc5alF2c1I5bVpmM2FySlBCZkRFYVpuaHNpbStWczFrYnJNampHQzdQMElCazkySndZbDFDSkp2dkE1Q2hyZ2dGcFFvUUV3OUVyd1hBSjhkaWF3TGcwbElWRHo1VXhoUDJFNDhWNllrUXJvMUNlRS9GM2NVU25yOTNMK1lNa3J3LzlZZ1l2bnFoK3RmTDBzK0J5alhOeTk1V0xPSW5xNnU2Mi9ua3g0WXhQS3lZbU0wVmdHdm5nRlBXTndTT1p3Q1JGNGdKc3g3WDVQTzRSY2Q5dFhHRGpIUE9iRTZRRm5rV1VKQ3c1aXl5UTVaei9HeDFGVjlmU1p1dWNwcElNSnozMGo2OC9TMkRlTkpCT283SFhuY0FBc0ROaThCSjAydlB4Y2lMQVBrU29QSlBmelozZTdtTTE4ek82V3B2c1JqRDk3NDVwczZCOW5nVzJKWHJiS2NWTG9UaURjTFp5Z1pFdnJaTysraW1RZ0cveUdUd2Y1a3M5bFNzcVluYnRrWncxaGtwdk95Y2ZoeHljTFJOKzRIS3RVRHB0MERsTCtZRW9lMDZidHFtQWlEWjJvOUkxODhCSjlmR0QwbTRBUFB2ZHVaODMxRXM0czF6ODIyTG5FeE55dmpxaGFNNDQvVG04WWZ2QVFvZmMvWkhpRlpvY3dET2E0dUF4SFZDWSt0RlFaNWFHK01sNEFuN1JmRFpUNDNnN2U5V3A0T1FaZURMbngvRjI5NDgwUHgrZS9jQ3NDNmhFZ0Q3L3FKZTVySmY1dkR5VjgvcHRuMUFrZ3p6T1NVWVV4VldVclVKd1AzbE51TnlsWElBOWh4SmlPSWZoRGU2RG9udWF5eDNtdWZJQjhVL21NRSt1M1VwbU4xUHhMRER6QWhmaHNzWk9mRE1iaGN0RkZobWN2WGFzc3BWbU5xbDEvNDBjNHR0VUg5WFFnd1pOb1ErdnR6WlFNQWNXS1liNnhMQllSeEFsaDRzb1VBcEFJNEFwbi81NkFKSGF2TUEzbFJZRXdBaEEvSUJvdEp0R0xtdVVNQVplMmV3YkRCQjJySTVndC8rWmxLVnRMOTZOMUQ0RC8zdHZXOWhRVmRyTytUZ0tNNS9qV2JTZVBNQ3NGb1dPZElPRzI3TVVUOElWUDZxTHhiOHAwSHV2N2UvWmJDNThpTkVXS244RktCeXMvVysyVm11NEZ2cEZmeFBldFcwTTJyOXRJdzN2MkVBcno5L29La2FwdXA1bGF2UUdMQlVGQzZ1L1FmV1hsY1Nud0d5cDNhM1lxZ2RjcHpqNWJPenVrVWZBT0RUSHgvR2t3OVR1RHlMVlhGOU84R083Sm9BQ0lnd1lEc0M0TCtLSmZ3eWs4RkZtUXdlMHdtaGI4WDBPaGxubko3Q1M4L3B3MUZIeGx1L0FuT2djaE5RL2gxUXZoemdpeGJ2dTBwejJ6WnQxTGpxc3JWbDBtVVJUbjY0eUxzWU9SbVF2Z1ZVNzdmZjNRWE84ZG1sWlZ5NHNteVlEcUhPSzEvZWp5OS9mZ1NqT3ZjNlh3V3lMeEQvZFl1bUVPQW1CNkJCU3A4SDBzQm9ETmlub1ppODlVMER1UGlTTEs2K1JsZzFSMGNsL1BwbkUzaldjWnB5cXNVcWNNc3NVTW9ERzFJdHB5TkwxYXJoczJiWlFaRnVZSUNxQVBjMHJEWmZJTUpQdDBYS0RzZU9QT3RIa1NVc2JEUUV4VDljQ3Y4RmdJZ2RaNS96VnlDemZjcTBhMXQxQWVvdjMrd0NOTzlHVkMrNElvMmpyN0xjN2xDRE5XQ3dnSzFMQ0tsL0JNQUNkVVhnS1ZhRW94TUFaRkVKbU05NzA1VER0WldBYnk3aXBlYzBxblZKaDRSVEFMd29rOEdiNXVhUk5YajRqbzlKK1AwbGs2cVF0cVdsS3M0NGV4WmI5MFJ4VENLT1l4SUpUTmFTYy8wbWs4VzFlWDJyNUlWZkhGWG44SHBrRlZpb09XdnVYUUcyOVFHRHdrM0V4b0RZTzRIQ0o5VGJ1THRZV25OcUtoa2FrdkQ2MXhyLzFCOTVqalVCOE1aQ0FWOWJTZU9TYkthdEFGRG55S2ZHOEk2M0RPTE1sNlFRalJvTThzVXE4TkNxeUFtWExkTVlBQUIzTEFHYlVrQ3k5bVBBT2lEeFJaRWJEajR4N1ZRQnZHNXVUdGQ1Q2dBblBDdWhFL3E3ME1pdDFpazdzd0FmYXpnbFQyaStONHg0cEZ6R3IxWXorR1VtZy90TXVsZnJqSXhJZU1tcEtaeHpWaCtPUHphaHZuLzErdWt1b1BRN29QeDdnTy90NEhCMUhJQWJOMmgrNTg4bzdwLzdWNEF0S1dBc0xseUFid1B5YjdHMzcydnpCYnhsZnI2dDAzZkw1Z2krL2ZWUlBPODVTV01OSWdsd2w2UDhSOXBWQVk2M0tJNXg0d0l3RkJYOUNPRnorSi92anVHUUkzWmo2eFlabDE0MHFjNXZDUUJMSmVDV0dTQmFPeDlTNnhmY1FzRWRKVTZXTmUyb2tnTFlVd3lCOG9ZN01VOE8ycm8rN0x0bGFkelc4ZWtYL3pBT0N2WnI4UTgzWkFHRGRqVzc5UndKQXpiaEF1VGdZRFduWHJQdVk4NWRxRnBLNndMVVdkL2FzWmwzQVdiWkFFcUlJOXJ0T0RnUzE0aDJEQU5JQXloUlZ3UWFiU0VRRHdYQUtWbkdlbG5Hcmxvb25MWVFpSHhvdUM2M0tvQlBMQzdoeTh2TGhvL3VzVkVKZjdsOEhRNDZzQkhpVnlweG5INzJMSzU2SUE4Z2orK2xoVVh2d0dnVXh5WVQrSDFXUDl6eHRCZW44T3pqRmIrQWxybTZDRVNWaThubkNWTnJIMFhQQVVvWEE5VTdHNHRkdUtMZjNqZWMzNCtCQWNYRWRyNndOb2tGQVBrRUFKOXIzU2RsRHZ4Zk5vT3ZyYVIxSy9ucVR6S0IwMDlONFIxdkhjUXpuOTRpcERkZEF1NUxDOUd6VEJQUnBuSGd1am5nV1kxekx4OE54RDhFRkQ3bGp5YStkVzRlLzVmSjZuNjNmbHJHVC81M1hQMDYrSGdXZU1UQlhCV0ZLakNyeUpjNEpYNlVVTjRiU25aVktyZ29rOEd2TXhsRDBkS0l2ajZHRjcwZ2hYUFA2c05KejBzWWk5bjFXL2RCSWZpVkx3T3FqenR6dUhvT3dNMmJOT3FqMGtITEFWdzNENXc4RFVnTWtSTUE2VUNnZW8vNWZXYXFIQmNzTGVJN0srbVd1ak5qd0Z2ZU9JRFBmR0lFL2YwNkxyTjBhZTJIRE1paXFGSDFRZmV1MWRGMlZZQmpMUVRBZWxHUWs2YUJoT2h2NFFDZndGTVBqNk92VDNPODI3UEF2K2FBUHZOajJ0Q2doT09PRWRkeHNjaVJ6Um12dTdSa2ZDWXltU3BLQnIraGxFb2NpUVFKZ0QxTDNTaEFoQitmQzQwVlJMSEtoaXpzMklwSHo3M2lINnoyRHp2RlB4d0wvelZvYjZTK2dtMFhvTlV3NEM0b1VQNHFCdEs4NElvOGdiSEtEdnVINmplQmpseUF3YVJ1N2FlQ0lNR21xSFo1c0FrQUQzalhuS2ZHNDdnMEt5YjV0OTVlUkxtTXRYeGVVb2dLZ2V5cFZQRGEyVG44dFVXRng0bHhHWmRmTnRtVTMrdWVlMHM0L0NreHJLU3J1UFcyNGxwYXBYdEtKZHhqNEppSnhSaSsrRm5OMi9pL2xwdERZR2Z5UWlEYlZuUHlTVURpWTBEMlRBQlZZSGUxZ2wvcmlERFJLTVBiMzZKeFg5MjZDQncrS2tMYUFFaWJBZWtKUUZYbitscXNWdkdEZEJyZlRxZmJWdkt0TXp3czRmelg5T010Ynh6QTVrMHRVaER2eVFQM3JYU2VCeTdzN01tTE1QQ0RHeS9LMFpjRFBLZGZaZG90U3B6ampYUHorRVZHWDh5TFJobCs5Yk1KVEUwcXhLbGNCYml4Qzc5azdNaXRDWUNBY0xVV0ZRTGdmS1dLUzdJWi9DS1R3WFg1Z2lYelpDekdjTXBKU1p4OVJnb3ZmbUZLRmU2dnF4UHRBTXAvRU1VOE9nbTFOVHhVTXc3QXJHYVpsWkp3a3o1NUJHQkE3TzFBL2czbTluZEZMb2UzelM5Z2U1dXc2Q2Z1SDhYM3Z6Mm1ML1l2RllIcjU0R05LZUJKamV2WWpnQllCYkJhcmFMSU9iS2NJODg1Q3JWL2x6aEh1c3BSQWNkeXRZb0tnTlVxUjVGejVEaHZPb2FXVllEMXlGWEVjUnczdWZaUlhiQlRjZWNTc0dPNU9jZmF2WFBBa3lhQVBuMzcxUm1ucDNSekpYYi9mWjhFd0o1aFRMdy9FQjNPajRPMnJsLzZRZW4razhmVkUzNXVkN2RoS1A3UllmaXY3aGE1OVNyQW9TZ0d3bFJaQWcyT3pibGlJR2syaWxIc0F1dDJYRTR2aUdza0FuWUdGUVFKUGlXTkFEanFiWE1PajhmV0JNQmNqdVB1ZTRvNDlKRFkyaVNPOWJ1Ynk2a2IvQzZieFZ2bkZ6RGJJdW4vUHRzaXVQeXlLZDJLbm9jZUVzTVhQeXY2WkhtNWlyLzlvNENycjhuajZtdnlLa0ZReVR2ZU9vQjl0aW0ybFNrTFVVeVBXNWRFRHFuYUpGVjZFaEE5RnlqOUJIajhtQkpLUDJsK0lyN2laWDJZWHFjUVlPWUtJcW45anV5YUFBZ0FrZWNDUllVQWVGK3BoSyt2cFBIejFWWERFR2d0K3o4aGlyZS9aUUN2ZkhsL3N4dW1Ub1VEajJiRU1TNlRUZGswZHkwQncxRWhvTlMxaXZNQmFST3crbDZPU01uZEIrWmNwWUpYejg3aDZoWkMrWDkvWlVRdEJuRUEvNWdWb2Q1T3N6TzdsdWNPRUdIQXBlOElkMnZrK2NCeHI5cU54K2JOaDVWTEV2Q2NaeWR4emxrcG5QN2lGSWFHVE15WU9WQzl0K2I0dTFwZlVIY0NQU0Z1azlJQm1LL29PN3J1WFJGVmdVZGppQndQeUllMVR0MndXSzNpQXdzTCtPbHE2eGVKU0FSNC8zdUc4SkVQRGpWWHZhMXlJVjdmc3lMK1BhaiswU1Q2Q2tCK0ZzQmtBUDNBQno2NmlCdnVMcUpRRS9heVhJaDNxelV4YjluaFloV2xFc2ZxS20rNEZlTW16dk91bkVoVnNLOU9Xb1ZTVlJSdXl1WDBDeXdVeXNEdGU0QURKb0RScEgvR2x3b0pnRDBCRmY1d1puNGE5blp5TjVySGtHWmpIVzdFWXZFUDF2ckF3bFQ4WSszNTNMWUR3MWdNUkdjVDFsMkFiY0tBRmNWR0twQ1FacU1ZNUhQMlJTeHlBUkpPUVFWQmdvM1dBVGpwYlhNT2o2bGRIZGZmMkJBQXdZQXI5cy9oMmJja0Ezbkx6MVVxZU0vQ0lpN0t0SjdvSG50MEFyLysrVGdteHVXMjJ4d2FrdkNDVTVKNHdTbGlrcmU4WE1VMWZ5L2d5cXR5dVBxYUF1NjRzNGpKQ1JrZi9vQW0vT0hXUmVQSldLRUMzTFlJUEszeDBoUjdwNmdpZXR4WEVuanlYVEhjZG5zanBKRXhOT2RldTdjbUxtN1BBb2NPTjE0U25nTVV2dzdJeHdEeWVjREo1KzdCYk5yY1pQdTVKeVR3anJjTzR1UVRrOGFQL0Z4RkpOSi9NQzFDTmducno5Ti96Z25uMFpUQzZYWVNNSFFvd3ovT0xPQ3crYmdyOTkrVnVSeGVQemVQdlMyRThnKzlmd2l2ZisxQTg3VTkyNlUwS2F0bDRUSWJydjBvc1IvUTl3K0lDdVVBbnYvQ0pMNytyZllsZG85K1poem5uTldITTErU3d1U0UzRjQwa2RVdm1OS0JRT3hBSVBadWdPOEN2bjdlS3FZZmxIRnNJbUZZcGRVcXV6VDlIb3N4dGNzeVV6YStocTZiRXlHc0VrUHNMVUR1ZlAxRkw4NWs4ZTZGMWorR0FNQVJoOGZ3M1crTXFRdThyQTJzQmVHV1cxRUkvU3RxMFY5K212aXJzL2lyS3Y1Mmk3dUpBUmNXSytqdnIwMlRZcks1bFc1ZEZCVjkreFRUcTNRWitOc01FQ21KSDJGYlhUZDN6d0RiUm9BTmd6UzJFZTVBaFQvODhSejNZbDIvSEl0aW5Rd2JSbGtwVC9GMkcrVUd1N1hwL2d0NThZKzFkMFRsWWZaeU1SRDlmbkRPQmJnc2oyT3dQT2RsTjNaM1hYOWNLb1FaSWdCR0FjeFRWd1FTbnprQWo0akhWT1B0VFRjWGNQNXJHajhsSC9XVkdGNTIzQ3plbEIvQTBZbEVJTHE0QXVDYkt5djR6Tkl5VnRvNFM5NzArZ0Y4NVFzanpaVjB0MmZGT0RXWmFCaytOalFrNFlYUFQrS0Z6eGVDNE1KQ0ZYUHpGWFZ1dnBtODJGNHJIbDRWbFNqSGE0bm8rNEhrVHdFMkNIenpxNk40eHJGNzF0NEZYbkJLRWdjZUVGVlBVSGRrR3hQeGRBa1lFTjlMQndHcFB3RFN0dHE2ejAvaEJ6ODB0blFtRWd6bnZiUVBiMy9MSUo1MFVMVEY3TG9vUk1mdFdjb3oxZkVGeTRHL3pnREhUZ3J4b1Q0MnJBZWVkbFVNcno1bERsdnZpdUxGcVJRT2lrVWQzLzMyY2hrZlcxekNyektabHU5ZGIzcjlBRDcxc1dIMWg0OW5qSjJ0VHJFanR5WUFBbGdUL3dEZzFCZWxEQVhBdzU4U3d6bG45dUhzTTFPdFE5WUJrYU55WnhaNExDUGN1UHNhMjJuWWV1RHJDeXU0ZTI4SktjWndYREtCazVKSm5KaE1ZVU5FdGoxbTdkWTRBRGR1a05XdnJka1dvdDF5U1RqeURoMFdZdjhSNmdKQXV5c1Z2R3QrQVpkbFc0OUQ4VGpESno0NmpIZTlmWEF0RllTcWoyNWZGSUsvOWtKSnR3OGpkcHU1dVNvMmI2cjlUOHhrYkdTcEt2SXExdk95N3M0SjU5OWdWWFhkdFh5L2ZYZ1JTQmVCbE9LWUpXWThCNUhRdW9oSXBFWGJKV2E4TG1QQ21VaUVtMkZRNFE4dlJLK2d0ZE9sWTF5V0pqbzhSb3Z1dnphRXJmaEh2UjhpZGxkMnJSaUlvZC9PZ1dJZ0NwZGUrMVBKTFNwUjZ1K0tTQ0RIQnBEazZjNXVQbklCRWs0d0JGRVFwRWhkRVRnSzZrbGNwOC9LVGhtVUpPd2JqZUxCV2k2N0cyOVdYMVRycG1UOHp6L0g4TXJYenVITFY2M2dQVU5EZUdZaTdzdXU1UUIrc1pyQmZ5d3Y0ZUZTNjRuUDBKQ0U3MzVqckRrdlU1V0xDZUJqbWNiall6Z21oTURKZUZ0QmNIUlV3dWlvcEc3VXpZdm1Hbi9qZ25EeDFNWldWdE5hampveWp0ZS9kZ0RmL0k1NC9yenYzUnAzNGIzTDZrZmNqaHlnS0dKU0YvL3Fnb21lQUxoK1dzYWIzekNBMTU4L2dMRlJ5YmlOMjdOQzhKa3IwTDNzSkJVT1hMMVg1SERjditHd2k4VVl2blBwR0Y1eXppdys4NmNsN0IrTjR1UlVFczlKSnZHTWVCenhEbjdZdkt0WXhIZlNxL2paNmlweWJYNlIvc2lIaHZDSmp3NXJGSmFDdUZlNnpZNnNLaytpa3VPUGpXTm9TTUx5c2hENm43aC9GT2VlSlVTL0E1N1lSblNxY2hIMitYaFc3S1B1ME4yVEI2Sk1oTlVhbmE3YU1KN2xISC9JNXZDSGJBN0FBZzZKeFhCaU1vbVRVMGs4TlI0M25aSnJUN2tDcmJ6WE52K2ZscnVYUldYcGtSaGlid2R5cnhBZlh6R1l3NnZ1bW1zYlpudnMwUWw4OTV0amVNSitPbE9MUFhuZ2hubGpGMktwS2tLVUUvb0M2QlAzajdoMksvWDNNOGd5UTE1WmVaY0JpRXBOUmJoMG1jbUw0a1ZWRHR5NUtIS3JXUlZZWmlsUEMrRUNVVkRoRHorOGVIcXhydCtPQlVDQkpaRm5LUXNiNVMxMEc3TmFSSmVLZjhEajRoOXRpSmhxV0RmQ2dNMnFRdHppZWJTaE50Vy9iZXNhckIyajNXSWd5OUk0a3BXMDlXNnhjd09HWFZ3akFiRXpHSUFKQUR1cEt3S0h0Z3J3bUhkTldhNVc4VWk1akRGSlFqMWYreDEzRnBITGNWVkMvTkZSQ1pkZU5JbHZmVGVOMHord0Z3Y3Z4dkRhZ1FHYzFwZnFTSUJ3aWp6bitNbnFLcjYya3NZRHBmYjU1NTU3Z3Bqb05ybUM4aFhnNzdQcWNFWU9ZTEVvL3U1RFF4Q2NTb2kvaWJpWVdCcngwS29JWVRURFVsR0lhd2MwaDQ5OTVoUER1T2ppTFBiYk40S2pueGxYdDFsYmVYVkhGamh3MFBEWVV5bUdiRlk4TFk5OGFnenZlTXNnem54SnlyanlhYkVxanVQK05KQWxSMGxYbjRzM0x3QTdjOEF6eDlmeWxxVlNESmRkUEltUGZId0puLy9TTXY1enVZVC9YRjVCaWpIOFd5S0JvK0p4SEI2UDRZblJLRFpGSW9hUDFybEtCWGVWU3JnbWw4Zmx1Unp1S0xhL0xnY0dKSHpycTZNNDkyeU5HTFpjQXE2WmNTZkgyR0pSWEhlcDVsZmVhSlRodGEvdVJ5UUNuSDFHSDU3eTVGajdQdDZiQXg3TENqRmJUeENxY09BZmM4QksyVkI0dlBlTzliam4zaEorOTRjY0x2dDlEdis0Tm85eUdiaXpXTVNkeFNLK3VMeU1NVm5DODVKSm5KZ1VndTJRWkR4TzdLcTB5ZjhIdEwvM09FUm83b25Ua0o4R1JFOERJaThHMWtrU2xvK3R0anpIbi8vTU1GNy8yb0htYVVDeEtzSmlIemFSQ1BheERQQkUvWEhub0FOajJIZWZDUHI3SmNSaVFDb3BJWmxraU1jWit2c1pJakxEMEpBUTdnWUhHYUlSaHI0K2hrUkMvUFdsSkVTandPQ2dCRmtXVlhVakViRnVQTTZRVERDa1Vxelp5YTBrYmxJQUJJQmJGZ0FaSXJReVNrTVQ0VlBHYVM3bHRlalY4OGVvMlBhS05HbHJ2OXhBVE5PYitwcmJyQVBGUDNpblcraGUrQzhBc0gvZHVaV3JPMGRuSkdCR29ibk0xSExLMFlXMVhaN3A3TjdJQmNpTTEyNWFoeG1zeG5RdkNtWVVVTXlZenA1YmpKNmFZOXhjdmh2UnV1M0s3cURMSEZyR3FYWGQzSmRUNnhLQ1dRQXIxQTJCNCtndGE5ZC85VjRnZTJwM2RsTUZzS05jeGlQbE1oNHRpZjgrWEM2dC9Ydkp3QkZ5N1RYcjhQU242YnY4SHQ5ZXhsdmVzWURmL2k2SFlVbkNTL3I2Y0ZwZkNzY2tFcTRYb0x1OVdNU1BWbGZ4eTlVTUZrMGtrUjhmay9EWlQ0L2dOYS9zYjM1OExSU0YrSmV4S0hBeEFDTTFoNkJXRUN4VmdjdDJDWkhPTEZFSk9HVTlrR3AyMHZ6b3B4bjA5ekdjOW1MRkw2eDNMSW5xd3RvMm5iclIwSTF6OXN0bndUbndqcmNPNmxmMnJKTXVDU2ZNSTZzaS9JOXdqK0VvOE94MVRjVUxicjJ0aUk5OWFnbS8vVjFPOS8wd3poZ21aQm1qTmJFcHlSZ1dxbFhNVmlxRzk3c1J6emdxamgvOVlCejc3cU1SM3BaTHdKVjdtOXpNWGVVSXRUUFMrck95SUFTcTdWbHI5K1BXUHVDb3NkWWhtZ0NXbHFyNDB4VjUvTzRQV2Z6K2p6bk16YXY3T3NLQXA4ZHJvY0twSkE2SXFsV2xpekladkdwV25XYm1BKzhkd245OGNyanh3VC9tUk1oMU93NFpiaEl1VDNyaERDNy9jM05WN3VlZm5NUTMvbnNVbXpicStBbTJaNEdiRnF6MTE1R2p3SDREL3J5bkx0OHR4bmxUNDNCTlhKRnBLQ0o4U2orQUtlcUdqZ2xLNWQ5dTc0dDN0dTBLb25nOGNoQ3FxdXEvNXR4L3pRS2d0bjREMTlWNmpDMS9YQk5CeWxzY29sNmRDSUJ6YnE2VE9EZjQxcHdBeUMwSWhjcGx6UW1BZ0s1WVowVXMxSkhoREpZMzJBOHpNbjBaU0hFS0FiQnA3NnFrZjJMYnpmVkJtTTVXMVM1SFprcUpVbTk4aU05aHZMS2pNeEdMQkVEbjF1OTFxZ0FlQjFDaHJnZ1VSMjFjUzByTzU0RE0wZlkzbGFseUllb3BoTDZIeTJVOFVpNWhlN21Da28xUzgvLzVwVkc4N2MydEozRlhYcFhIK3o2MGlGdHVGUk9xWVVuQ0Nja2tUa2dtOEl4NEhQdEZuYmRORkRqSGRZVUMvcHpMNGRKTUZvK1V6WWwxMFNqREc4N3Z4OGMvTW95UkVSMlo4cjRWNExZbFozTFoxUVhCcVlRSTJYdk1SaWpZcGhSdzlJVGgrOERhWTZ6TWdVdDI2RmRmUFhJTTJFOC9qMW1sQXNpdEpyWjc4cUpQZHVYb1h2V1NvYWdvRHRMWExNNXMzMUhHUlJkbmNkSEZXZnpqMmdLNGcvcnM1azBSZk9ZVHczanBPWDNOcjNpekJlSDhLN3BjOENVcWlYdGluWVU4cEl0RmNmODlsdTNNdVRvYUUrTGpkTkpRVkZjOWxxdkE5VGNXMXR5QnQ5L1JMRHB0aVVSd2NrcTRBNDlKSlBETmxUUSt2S2hPRmZEMS94ckZHMStuR0lmL3ZNZGM2TDNFZ0JQWHFmSW0zbkpyRVVjOFkvZmEvNCtQU2Jqd2k2TjQyYms2WWM3NWlraEhzQ05ycjcvOEtnSmVOUVBzTVRHbXhTSENmaVVhZ2dpZklnSFlEQktvTzRWN3VINFlCRURGT2d2eU5CYlpsT1k3aThVL3VEb0F0N0VrYjY3ellSait5elhhRVZvSWdBYmh2OXhJbU9QNkwrVTZMZFkvNU5haVhxdmx0TXMyQ1lEaWdNMEplOTBSQUp1WFltaVZxODlBRXRUTkEyZ3NBQUtkdUFETkM0QVNxdGhTL2hla3V1SkNMa0J5QVhyTktvQzkxQTJCNHZCcG9LODJPYXNBcXdlM2ZrN3VMRmZ3cUVMa2U2UW04ajFhTG1PdTRyejYrN0p6Ky9Eakh5akt5cTBXZ2Y2WTdqUHEwc3V5K0kvUHIrRDZHOVVUMDNGWnhwTmpNVHdwRnNWQjBSaTJSU0xZR28xZ25TeWJ1dTFuS3hVOFhDN2pvVkladHhVTHVMMVl4QzJGSXZJV2xBNVpCbDUrYmo4dStQQVF0bTNWY2Jqa0txSjY1cDY4LzY2UjR5YUI5Y25XeTl5WEZxRnFlb3pGZ1dkUENldVJHU29jZUxSVzBHRzVSUGVvWDRoTHdETmJDMTk3OWxid3B5dnl1UHpQT2Z6NWlqeG01NnlQQ1l5SkhIQnZmRjAvVGovVklCejh3YlRJWitsVjBSY0c0S2x0eEtXVmtoRDlIczgyVmFaMVpQK2pjWEZmYmtnS29kOEVPM1pXOFBzLzV2QzdQMlJ4eFYveWErSDNkVktNWVVTV3NMT3NQbStYWGpTNVZsd0lnQkQ3c3liUDdXZ01lTjYwNmgzcjFETm5jY2x2c3pqMzdENzg1NWRHOUt1ZVA3d3FRbjQ3RlhpN0xRSnlBT1dxdUJiTFhJeGZWUTZVdUhnd3JmMjNLbjRvTFhQZzRUU3cxT2FhU0VJVVdhTjNVOExQVEFDZ1F0UE9qQ05CV05mbjdqOE9DWTlGbm9TS1VwRzJLZ0JhZGYrMUVRQzFkU3NzQlFYckNvRHRoYnB1Q29EYTVUb1NBSFdYdFJvR3JMdE90MXlBQm1IQUxyc0FSeXU3TWNMM2RpWmlrUURvM1BvRXNCdEFscm9oTUJ3OENZdzBKbmJaRThURVE5b0VzRTNBNTMreGduODhuc2VqTlpHdndMczc0V1pNSkp6ZmQ1OEk5dGtXd1RPZkVjZS92MHJoSGx2TUFkdFhnQ2VNQWtsOVo5OE5OeGJ3alcrdjRoZS96aUNYTTI2dkJHQlVsakVtU1lnemhnUmprSmx3TXBiQnNWQ3BZcUZhUmJHRFl4NGVsdkRhVi9mamJXOGUwQTl0QTBRbHk5dVh6T2VFY3B2K2lBZ0ZscG54dTlOdmQ3WU9XUjZKaWNxeXFSWTJnVnhGOU1XRGFhQlFwWHZUcjJ6ckE1NDgwdGFCVnEwQzk5eGJ3dlUzRm5ESG5VWGNkMzhaanoxZXh1eHNCY1VTc0xKU3hjQ0FoTWtKQ1JzM1JIRG9JVkVjZFdRY0p6NHZpZkV4QTh0VG9RcmNPTisra3JWYlBIRUFlTXBvNDkwaFd3WWV6WXJ3MkVVWEsyTWxaU0VHcms4QzY1S214UFo4bnVQcWEvSzQ3UGZDSGZqWTQ4YjM3MjAzVE9Pd1EyT04rLzBYajFtYnFCMDZERHlwRVFwODUxMGxQUHBZV1MwcTFzbVVSWkVQSjM4TWVmSUlNQllUWXVLYVlJZWFZRmY3ZDZuMlhhbXFFZTVxZ2w2bEp2QlZ1VmlmbzN2dTAzNklpcW9FNFdjU0FEWlFOM1FNdWY4NjI3NHk5eDhieDZ5OFVmT2RGKzYvWnNIUWZmZGZpMk4zS1B3WEFOaS83dGpDdFFLYzkySEF6VXRaRVFEWFB2R3BDekNDTWphWC93VzJ0cTB1aWw3a0FpVE1VQWF3SGVLRm12QS9UeHdISm8wclRKNzRnaG44NlFwbnd5OVRLVllUK0tMWVo1c1ErdmJkUi94dDNSSnBuVHk5VkFXdTJ5NUN5OVlQQUJ1SERBdGZySzV5WFBiN0xINzFteXorZEVVT3E2dnV1SVZpTVlabkg1L0FLMS9laDFOZmxFSWlZWEE4Y3dYZ2xrVmdQZ0JWYko4MEpDYnhlanlXQWY0NVowNmtPSFpTT0lLVUxCU0JlMWVFcUZPbC9INkJRR0xBbGo1ZzMzNlJhOUtOQ2RKRE5hRzg2TE9IeS9xa0NNbDlQS011MnVQbHVabE1DR2ZnK3FRUThFM3dyN3RGSVpIZi9VRVVFbEVhdXVkMmJXcFU1TTVXaEFQUWFwdGV1RjYzZUlycUhOK2ZCdTVZN08wOG44TVFBaUJCK0JrR1lCT29NSTFUejdjZ3JPdkd2am9VQUIrUEhJZ1M0cHJ2Z3VYK2F5MEFldXYrMDF0V1Z3QVVuUldrWWlETnkzZnFBalFXQUd2ZldpMEdvaEVCSnl1UFk0QXZtRnNWYmJ1enMyV2NXcGRjZ01GbUdjQWNkVU1nMkRZQ2JEU08zemp2MVhQNDhjK3M1NDViUHkydmlYdjdiSXRpMzMwYlF0L1VaSWZKWW03Y0NlUnJicFdJQkd3WUZIK3k4YzFiTEhMODg3b0NydnBySHYrOHRvRHJiaWc0S2dqdXUwOEV4eCtid0hPZW5jREpKeVl4Tk5RaWFkTktTUlRNMkI0Z3E2ekVnR01uaE5DaDVRKzd6VmNYbGhud2pIRmdZMG9jLzMwcjVuS0pFZjRsS1FNYlVzRG1sQkFESlFjZm9tVXVDci9jdHdLa3FlcXpMUWFqalZEaGlZU3BkNXpGeFNvdS83TVFBNisrSm8vdER5a2NGWE1Ga1FQUUt2c05pSEJjM1hlR2tuRDk5ZkpZd0NEeS9TWG9raVVDd0NpQUVlcUdqaUgzWDJmYlY2eVRZVVBZSTIvVGZHZW4rSWUrK3cvYWI3cnAvb1AvaTMrc1BicitkY2VXMnRINnpRWFlXUmp3MmljV2k0Rm9MeFJEQVZDeGJUc3V3QmpQWTFQbFhwaGFGUzI3MHJubG5GaVhYSURCWmdjQW10ZjduNDJEUWdRMDRIMGZXc1FYdnR4YzNqa2VaeXIzbnRMTnQ4KzJDSkxKTHR4SWhRcVFMd0VQTDRwY2dFcGtDVmpYQjB3UEFzbjJqaGZPZ1VjZksrUDJPNHE0LzRFeUhubFUvTTNOVnpBelU4Vkt1b3BTaVNPYjVVZ21HV0l4aHY0K2hva0pHWk1UOHBwajhaQ0RvM2pLazJQNk9heTBMQlNCZTVhRjhCVkVnd3NEY0xpbUF1cWVQSENWamNTZlNWbUUvQkxoUW1haTZNeDBFcGlNQTBNeDY4L1VDaGZYMWE2c0tKcFJJanU1WThRa2tjTnhmVXFJZ3ZIMjFTVTQxN3hXUDU0UlZZQ3RvdWNDNUJDVncvKzEzTnZ1WHhtaTBpKzVxWWhBakNNQU50Sjh5UkhJL2RmWlBoVHI3SktmZ0J6cjAzeG4xLzJuWGxjWi9tdlcvYWVTRkJ4eC8ra2NqOGZ1UDNDT2lISDNjbU1SMExXN2l4bk9aN2paTWF6MkZzVDB1bFc1RWFhL1JYVS90TnRycSsrNVNtUXNzZ1J5YkFCSm5qYTNhYXU3QytxQXlqeFlsMmd3Q1NFQ1VrU2Z2eW0yRm1FT2YzSU1MejJuYnkwblg5M1J0Mkc5YlB6YmpGMnFYRGo3Y21VaDlPWExqZjh2bEZ0UEVDdFZZR2RhL0kwa1JWanpXRklJZzNwalB3TzJiWTNvRitSd2tqSUh0bWVBQjFlRDcyN2hBRzVlRUE3R0kycDV6KzVadHJjdEV2L0NTWVdMaXMzMXFzMFJKdkkvRGtTQmdZZ1FmNklTVUMvc1VhcmxVOHRYZ2VXaWNJSXRGc1YyaUM2TTkxVlJsT1R4Yk0xeEZtL2tEalFvSk5JMHptZHQzcnRWRHR5NURCdzFKdjUvb1FoY1A5ZStHRWJZaVVLSWYxUkZsUWdLRXpSUGN1eWR5b3QxdzlJWGluVUtMR1ZML0RQenZhRkR6c0Q5dC9iMTJuZmM5T0V3SDU5MG8zNHdkQUNLVGdock1SREZ0NTBVQTFGczI0NExNTVhUbUs0OEJGT3JvbTEzT3JPY0UrdVNDekRZTEFCWXBHN3dOZkVJY09nVWtJaTRzNzlpcFNIczVjdEFUaUgwRlIwV2hTUW14TURSSkRDY2NPOFl5eHpZa3hOT3Z4M1pjT2F6bWs0Q0J3MENWMUxaYjRJSUJhbDZJWkdVY0FrYXBWUzRaVUZVL2JiN2JuWFMra1pZZDYvcnZGVHBsd2dhUXhDQ05kRTU1UDdyYkIrS2RmYktXN0hLaGpYZk9lLytVMjNhZ3Z0UHZ6WEJMdjVSWDY0aEFBSUlVakdRVnR0dCtzUnNNUkNkdGxrdkJvTFdid1dhWTl4VXVSY3hubSs3V3R1WE15ZVdjV3BkTC9QNTBRdVpNdyszSFFDSzFCVytKaW9CQjA0Q1F3NGs4K2RLRjUveXJ5USs4ekxNS3hFUlFtQi9ET2lyL2NrTzNPakZxbkN6ekJXQXZYbngzMTRJWjJPZ0NUeEJoQkc1Vmtpa25qdXdUL0hqeWQ5bXhROGJkcEVZRmZzQmdNSGFIMEVFNWwwUm92QUh6WStjbVI5NXNhNmQ5ZjJZKzAreFhnbFJQQjQ1U0gxaGNqdTUvNXBmYkEyTGZ6U0pjZW8xN0JUL1VINGNoT0lmOWVVaXJjK1IrVEJnT3lIRDlxSmVHL3RwWHQ5Z2k1cGtLR0twMnJMYVZUVC9ienhYWWsybmpkazQ2R1ZwQWhPVjdmWTdwSnVkYlhkZENzY052a0F3Q1dBbkNRVytwbFFGN3R3TDdEL1dzaUt3YW5sdGlHNzkzd1VmSityUGw0RTlxK3JQRWhIeEY0OEFjVm44VjJKaW5LOUlnS1FZaTRwVjhaZXZpREM0MVJLd1VnYXlQVnFjZ081cGdnZ25GUTdzem9tL213RU1SUnVod3AyT2Q3MHUvakVJMTErU0xqTWlZRXpTbkt6bjN0djhHcWFzMlBhS3JMa3d1ZDNtR2FlTGE2bE42TGovR3Q5eFUzdFhseDdocm5TMWxmMjBXamJTZE1CbUVrUjF2Snc1b2E1bGp6SHpuV3ZnM2JPMG5tRXVRTjAydDhrRnFQZ3V6VVl3aWoyUVVlcnNocUpjZ09Ic0M2K0lBeGdHaFFMNy9sN2h3SDF6UUxZRWJCa1NCVGYwY3ZIbHl5TGZYbGlvSDVzZVpZaHExbFI4bENDSVhtYTVKUDd1V2FHKzZBUXE5a0VFbFNGUWhXb241NlplckJ1MnZnQlFoWXhsTm1aaG8rMGNiOGE1Lzh3MmxYVnlpS1pEcHJtMURYRGU0WGFObDR1MFB5Yi9GUU9wdDRtaFV4ZWd6djh3ZGJHTytrWFJMUmNnaDRRbGVRSmpsVjBXTitKSVYzWnZYUytGT0JJQm5XRUVRQVlVQ2h3RXRpK0xQMEk4MVNZaGNsbm1xVHNJZ2lBSW04UUJqS0hoS2llSW9CQ3RYYnVFTS9QS29PdzdBTzYvWlRZT3JoeFVYWEgvNlJmLzZKNzd6NS9GUCtwSWJ1NU1yMlBNZDd6OWZ1V0dGd2EzdEo3NitMajFOaHRzZVlXTm85cHBLVEg2ZFlGd21ub29NRUVFRFFuQ3NURkFYVUVRQkVIWW9CK2ljaXFKZjBRUW9hcS9OSi8xNGZGd1NGaVdKenJicUdQdVAzV3VRRnV0c2VuKzR6YjJ4aDI4bUtSMkRUUjdJQjB2WjdOM0xlVXpiMVY1UmZrL2pGdllLTE4zUWhWZlZ5RmhtVTI0TTFnRXBRSVJEYmorSUE3aEJDU0lJRElFY204UUJFRVE1cW5uK3h1bXJpQUMvTzVEK1NxRFA1OE1wZnR2RkJWbEFDbzN0N0paOTUvdTZoMjcvM1EyMmUzTzdMSWVKNWs3ME82cWszWk9BRWNya1k1Yk9CWG1YSUNzM2JvZENwM0xzc1lPRzdSQktteURMdEZnQkVJSUpJZ2drb1J3c2xMK0pvSWdDS0lWOVJRU0tlb0tJcUJRNkMvTlkzMTZQQndNeS9KVWh4dmhMUnZFVERlVmQveXBmdVhmZG0zMnR2aEhIY2xNUTgwZWtQWGx1Q05YSGJOeDRiQjJ1MkRjUXFmYWNRR3FCY3dLSXVxRW1PUUNwSUhYTDlSRGdTbVVnS0JKSFVFUUJCRkdrZ0NtUUQ4V0VjRm1pdDdYUXpHUERLSDdiNVdOb0t3Y1lIbTduWnQzL3htS1hveTNQTTVHUFFqem5lQ2MrOC85NGg5MUpQTk41TDY3eDVRdVFHNXppN3psQ2JCeXd1R0FDM0FTdk5OUjI0K2lGMVZPQ2o0eGlKQVlnZ2dxOWJDdUVYbzVKZ2lDSUJUVTAwWFFzNEVJTWhTeFEzTmZQeDVQalNXNXc4VHliWFFXWnJyTjF2eDB1di9ISFlwNmRmdzBtZHVENU9YT1czWUZ0MVpSaGRuWVU5dDFtTDQ4cUY4TWhOazQxV29YWUJsUnJMSVJkNjZTWGhIbFNFQjBqbUVBQ2VvR0l1RDBRU1RIamxCWEVBUkI5RFJ5N1hsQUJhT0lvRU01dTN0My9oZ0E5MStHRGFPb25FU2FkUDgxMHh6a2ExajhnMWtURE0xMGhXWDNud05Sc04wdzRVbGUyZytkdWJaYUJkeWFPemFWek1kYmI4S3NDOUR1MFM1MkdodnYxcUFWSkdzeWlZRE9NUWtxcUVBRW4xanRXcVlrMlFSQkVMMUpBaUpja2h4VFJOQ2hWRDNlem5HOW5QUHlBUFFIZ0NWcHFyTmRkK3IrVTFqM3pOZWVNTTdkMTdYSVdKZjBOOG5hU2VpV1dta2dtcGsrT1B2WE1MTzVucjRMMEU0RDFTN0FFdUpZWmNQdTNOams1Q09zRWdVd1R0MUFoQUFKSXVTTFFvSUpnaUI2QndZUjBUQU8ra0dUQ0FkakVEOXNFalJmOVV0YkZkdk9zUUhrV1ZMekhlK2dZU2JjZnlZZUE3YTd3dXpDaHNVL3VxT25XVmxXYXRrUVg3b0F1ZUVCTTNUcUF0VDVIOFl0dUFDWmF0dDJqM1paSWhkZ1R3L0lmbWNBUUQ5MUF4RVMra0JWZ2dtQ0lIcUJDRVRJTDczREVHRWhCWkhEa2dqK2ZER2s3cjlGYVYxbnUrYXQwNjNwdXY4TWluOTA0djVyQkIvejduU1VpMFY0SmVzbm83c3h5OTY2QUxtbDlicmxBc3l6SkhKc3dKMGJuSDZwSU94QU9kU0lNQkdGRUFIN3FDc0lnaUJDU1FvaTVKZWNVa1JZa0d2dkxnVE5VLzNVVnNXMkN5eUZIT3ZUZk9lVis2OWhHTFBkRlIyNy82enNxbnVhbThRdEhrRDNsdU9POUQ2enNxVnV1Z0E3dkw4V3BPbGdERVRrQXV4TkpIcnBJRUlHZ3dnSEhnT0ZoUkVFUVlScGJCK3QvVkc2QnlKTVRFQ0lnRVR3NTRraGRmL1oxVE80N2tDTzlwODY0djdUMmFSakhlV1BxRnZKVHVONWw2ODZPeWVJZzdjczk5enVFOGRkZ055cVBWVHJBa3lSQ3pEb2JRMDdTWWc4T2dRUnR1dDZDbFR4bWlBSUl1akVhK041aXJxQ0NCbURvS2dGbXAvNnI2MGE5MSsyU2N1dzZQN2oranBMZDkxLzNIQVRwalF3Qjl4LzFycmN1Z0FwZGY4NjZFNUo1SFl1UVBPYklSZWc2L3NnRjJCNEdBVlYwQ1BDaHd5UklINFk1QmdoQ0lJSUdnd2lMeHFsS3lIQ1NCUWlXb0VJeC95UTNIOXRkdTJkK3cvd3h2M1hUYk1kUjFPZ2swdTJ4QzVkZDBvWG9KbGlJTnptM3NrRkdQQkJta1JBWjEreXAwQWhrMFE0NlFjVkNDRUlnZ2dTOVp5dUE5UVZSRWpmdTlmUmV6Zk5LMzNZVnArNy8reDh5aFgvY0tTMlJVZjk2MXk2UGNsdUE3dVhtTkNLQ09tc0M1RHBiYldYWElEY3hRR0ZSTHh3dld5UFV6Y1FOSmtrQ0lJZ1BJUit0Q0hDemhpb2tJMmZjSHMrNjhaY1BhVHV2N1YxdXVuK2N5REt0WnZGUCtwTFM2WWI2SEp5UXZ2WE5tOXhKTnl4dXlTVUxzQ2dEWnBCM1hjWUdRQUpKRVI0cVllVDBjU1NJQWpDZjBRZ3duMkhRV2tiaVBEU1Yzc1hJV2d1NnVOK0RJTDd6OHl5NmhaMDZXUjVWR3hYNnV4Y2Q5Y0ZhRHRlbXpmbWJLWlBOZWZHNjVBTDBKOERHWWw0L21JY0pJNFE0U1lHY2dNU0JFSDRpWDZJVkNTVWo1Z0lNM1dSbS9BUFFacjM5cWo3cjJrZHprMGZKclBjZDBZQ29qL2NmMG9rUytmY2x5N0Exb2tUN2JvQXpWd2U1QUowWU9DZ1gxN0NnMVI3Q2FkZjM0a3dRMjVBZ2lBSTd5SFhIOUZMVEVJVUtDUENNUThNMG56WlF0djg1djdqTmp1NHZmdlBnUlBpc3E3R05WUDJqZzZxMjBwbHB5NUFPNHZhY1FHMm5pMTJmcmtFeGdVWXRNR2JSRUJuaVlNcWt4RzlRZDBOT0VoZFFSQUU0U29ESU5jZjBUdU1Ba2hTTjlEODBmL3ovMjY3LzNSWE5PditzM09ZSGJ2L3JPekt2Zm9ha2hNTk50TVIxcGZyN01EcUhjTmd3UVdvMnhmbTFGU21lMEo4NkFMMFkrbHdFdkhDeFJCRW5oS0NDRHNNUWdDY0FpWGxKZ2lDNkRiMW9reERJTmNmMFJza0FZeFFOL2lLSUJYKzZQWStYSGIvTWRQTjVSWk1aTTM2RHpQZUN0QzE0cllkTEdleEZaSVREZVpkdmpMSkJTaHd4QVhvcDhFbUxBTTUwUXlGUnhLOU9Da2Rwa2twUVJDRTQ5UlRMOUNQTFVRdklkZXVlWUxtZlFFNFZuTC91ZFBsM0lIcXc1TGJEZWRkS3BsTUxrQ2ZEUVpCY3dHU0NPZ3NsQStRNkVYNkFhd0RoZW9RQkVFNFJhTDJQa0hGbDRoZVl3cVU5OC9yK2FuWDY1UDdyeWZjZjkwMDArbjFoZVJVd3p0YXptYmpuYjZvZytFQ1hCK2NRZEx2K3lPNkMrVURKSG9SdVhiZGo5R0xPMEVRaEcwa2lOeG40eEFGUHdpaWx4Z0QvWmdZTmtJOHI1NjNxVStRKzgvOHRxMHZ4MXMrWHEzdHhIQVg3aVV1dExOc2VGeUFTV1RZY09kWEdnL1h3T1BJL2tpQWRKNGhDRmNVUWZRYVNRZzNJTGxXQ0lJZ3JGRjNVNmVvSzRnZUpBV1JVb1RvN1hsaVFOeC9PVGFBSE92WGZCZHM5MS9ubmVXZmdycDZmU0haYnJiTHBZdDEyOFJOWGdaaGN3SEs2OVRiNGdFZmZJSThPQlB0bVFEbDdDRjZrM3JlcW5XZ2FwVUVRUkR0aUVHRVBRNEQ3V0tVQ0NLVVJFRjUvL3dJaVllRzJ3NWo3ajlUUXBzZDk1L0wrcG5SdDVLVFZ4QzVBTlVYWGJkY2dFVWtrR1lqN2cwTzNLY0RVTkFHekY1RmdoQkE2R1dlNkZVaUVFSTRoUVVUQkVFMEkwT0UrMUlCTWFLWFlSRGlINzB2MC96T2pibTNBMzJTWVVQSXM1Um1tK1QrTTcra045cVoxS3FUQXVFQ05OdGhMcnNBV2N2UjNkNGxvbVJCbmdaM3l3WG85aUJHQlVIQ1I3MUtLa0gwTXNxd1lDcVFReEFFSWNKOXAwRGh2Z1F4QVlvVzhNTTgxT3YxQXpTblg1Q25iVFhlclB1UDZhM29CL2VmblgxNDdmNVRMQzg1ZlNXNnJtUmFkTk81NVFMVVA4Wk9YSURxcjh1SVlwbU51emNvVWtFUW9sUDZRRGxOQ0tJZUZqd0ZTdkJORUVUdlVxL3VPd3h5UEJIRUlDaG5jQmp4Ni96WmdYYWwyU2lLU0ZqWXBuWDNuL25tdXV6K3MxRjR3MFNMSFZuV1RCdWtkZ2ZrMkhYclFlWGdwbzd6bXd1UWM4dVhpcEpsZVFxcVFzNWhjZ0Y2dlQ4U0lMdkRLRWowSUFoQWhBV1BRZnppVHlGdkJFSDBDbEdJeXI3ak5QWVJCQURoK2h1bmJxRDVZSERtOGh3TWk1MjYvN2cyZVpxYW9Mai96RzNiWFIyc25SZ3FkU3dWY3owL1hYY1ZUWE1LYndCY2dIYnVmSlVMTUlJbE51bmVZTk5ySWg2SmdNNVR6MjhTb2E0Z2lMVVgveWtBSTZEOGdBUkJoQmVwTnM1TkFVclRDRUgwTkRKRWFoQktDMEx6eUFETjU5TnNEQ1hsTHppODA1MEcxLzNIYlhSc3gxcFpodzVFZmRNOXVRQjFqOXVmTHNBSlZKV3pSdDdsUVNOSUF5RkJMenNFRVJUNmF2ZkZJTjBiQkVHRUNBWVIycml1TnM0UkJORzROK2hIY1NJSWMzR1Y4VTdDb2p4bGE4UGsvbk5nT2F1bldHZTdraU5YRGJrQTIyNUozd1ZvVkJERXZBdXdBbG5uSnZUeDRFUUZRUWhBdUo0bXFCc0lvdW5CTkVnVFpZSWdRa0w5aDQwaFVKNC9ndEF5QmtxTEU1YjVhdERudXhaWVloTW8yM0QvR1JmK0lQZWZwV1VkeUQ4b21UMUE1MjVJY2dGMmZxenFmU3l6Y1ZRczNZZ2RYamNVQ2t3NHdVQnRVa0FRaEJvWklsUnVIYWd5SmtFUXdTTUpTbTFBRVBRTzdBMFUrdXRzdXhUclZTRmpXWjdVZkdkeHcyMTBEM0wvZFh2LzNQenZjVzBWVHM1ZHY5SjcyZ1dvT1kzTlpiaERQREFUNFlGKy9TUUlZeUlRaFhNb1p4WkJFRUVnRG1DeTlteW5BaDhFWVh5ZlVCUU1FY0I1OGFLOERoVkx2K3FRKzgvWmE0VmI3R2Q5dWxwQ3Ruc1dSd2ZhRlFnWElHL2RLc1hYSzJ3VVJaYnMvSFNTQ3pEd2czT2dvUHduQk5HZWV0WE1DUUF4Nmc2Q0lHaU1Jb2hBUW5td2FiN294ZkU2b0F1VUVNTXlHOWQ4eDYzdHRNZmRmOTFMa1dmdGhFcFdHczV0SEdoSHk1azRnSEM3QUsweEw2MzNkaERxOWdESkE5aG13dHpMMERRb1B4QkJ0S1B1cmhtblNUWkJFRDRnQ3VIMkk1Y3lRYlNIUVloLzlLTjNPT2RwUVp6YldtamJncndlM0laeVRlNi9kb2Zpakg3R0xTd3YyYnNLL1pEb3NOTnIyaTh1UU43bVdNMjdBTE5zQURrMjRONEFGdFpmU1FqM2lVRUlHd1JCdENjQkVnSUpndkFPcGZCSGFUd0l3aHdUSUtIY3o0UTF1czJCNDhxelBxeXlZYzAyTzNIL0djdUNxa1hJL2RlVkMwR3llZ0RrQW5UYUJhaC9DWE9iSjMyT2JYRG1wdmVyV0VhaHdPR2xEeUxmR1VFUTVpQWhrQ0FJTnlIaGp5RHNNUXhSK0lPZytXRVEra1hyL21QcmJXM1loTXhIN2o4SGx1TVdsNWU0N1N1bGgxMkF0Zll3dlo1dzNRV28vcm9vSlpCbW8vNGZXUHcrWUlhdHpVRmhCRUEvZFFOQldFSXBCTWFwT3dpQ2NKaFliWHdoNFk4Z3JKT0NFTTRKbXBjRmNQNmNZY1BJU1gwVzl0MWQ5MTlUQWpYT3JYZEpEN3YvQUxOWnQ4Z0ZhUDhFTVAzMmRkTUZ1Q0JQcXdzOFUwR1E0RDhvZW9sSkVqRUl3aFlKaUJDalNacWtFd1RoOEpoQ29Zc0VZWjBZaEhCTytCY3EvR0c0SGdmRHZPeUIrNDl4Qnc2SzNIOUdTUHFIUUM3QXRrZHMxZ1dvOC85TTl6aWRjd0dXRWNVU0MxQkNOUytTcHBLSTZGOFlSRkVRU3BKTUVQWW5IUFV3dlJSMUIwRVFGa25WeGc5eUZST0VmYWpJblQvbmtGNnZINkE1NURJYlIwbVpZOFpCOTE5ZEIySHROa0h1dnc0dnBHWVJVN0tyUHBJTFVMMWV5MldabFl1VDJieWcxVUxtb2p5SkNxS2REelpoTFFqaWg0Y09RUzlOQk5GTm9oQjVOYWNoUXVzWmRRbEJFQzFlUC9zZ3FwU08xc1lQZ2lEczMwLzBZemJOdzd5YUx6c3c3NjlDeHBJOHBmbk9vdnVQTjBsMjdkZHA0LzVqTmpxQTNIOXFKT05ESVJlZytZdGFweWNNMUd2dGJXRG9BdXp3Z3VPUXNDaXZjM3d3Nk1sQmxQQUdDcHNnQ0dlUUlSS1FUd01ZcXYwL1FSQkVmWHdZcW8wUEl5UllFSVFqVURvYi8wT0ZQMXF1dHloUG9XTHBnZERPdkdUcy91TkdiVzlWQkpqY2Y1YVhxLytmWk5SZ013Y1dKaGVnOGtMa3BwWlhZOVlGcUwrT3dUZVdRNEhWUXVZeUcwV1JKZncvNEhTeVBvVUNoNXNVUlA0aGdpQTZSNEtvUWpnTkVTSk1sWU1Kb25lSlFUajkxdFhHQlhMY0U0UXpqSUVLMm9WeHpobjBPYXNGU29oaG1ZMXI5czJ0TmE2TiswLzNVNHZ1UDI2aUxVcjNuNzdJMWx2dVAzQ3VmdHh6RjY1SXY3b0E3ZC9NZWhjSTE5K2U0Y2Q2TGtEbXdEM1BNTTgyT2pONFVDaHd1Tm9jSkFZaDNFc0VRVGhIRXNLaE1Ba2h0Rk40TUVIMHpyMC9RZmMrUVhTRkFYcG5wWG1YaC9OamgrYjU4OUo2Y0J1L0NobmJuWnJkZjAzckdMci91SDJ4eTYzcnhwZnVQK08xSk1zN0lCZWc0U2VzWFJjeWJsZ1F4SENsRGwyQVdha2ZHVFpFRDRLd1BVaDZqVEdJM0VRRVFUaUwwZ1UwQ0FvUEpvZ3dJdGZ1NzdyN2wwSVRDY0o1S0dxRjVvMGhJTThHa0pHR05jZHIxLzJuLzcxdTRRL0dXMjZTM0g4dFdtMVJMNUlzTjhpQnV5RUlMa0RXd2NrMEU1SE9UZlVKczkzRFN1YmxEV29WUDR3dVFBb0ZEajlUQUJMVURRVGhpa0JBOXhwQkJKOTQ3WDRtZ1o4Z3VrczlielU1YXJzTGhmNDZ2eC9WZWd5emJJT3REWnRKZG1iby9tdXgxVTdjZjh5TmVYb0EzSC9hdGtydE45dWJMa0N6ZmVGUEY2RDY2eEppV0dJTy9TVGxsZ2pZaXc4bG92MG92ZzVVbVpBZ3VrMFN3RGdvTnhoQkJCRUpJdi9ZRklRYktVbWlCRUYwbFFqRWoyZjByS1I1bGxmSDdGRGZyTEF4RktXRWhlMzYyLzNYK0hkdnUvKzR6bXVDOVlZNWNQVjU0Z0kwM2ZFR0Y2aUZiZnZDQmFoWVdGVHlpUVpuRUExcWNsVVNBYnVMWEh2SkloY0RRYmd6cWFsWEJ5VlhJRUg0bXdSRU9QODBSQTR5K3JHTUlMcVBWTHZucUhxMi8rYUZmcGduQm1pK1hZV01CWGxhODEwUHVmOGMwcGI4N3Y2ckQxc21OaDhTRnlETUhxMTNMa0Q5Z2lEcWZyR2pSbk5JbUpQWE8zTWRVU2d3NFNYUjJzc1dPUm9Jd2gwWUdxN0FhUWhSa0NZN0JPRTlFVFJDOThkQlJUMEl3dTFuNHpxSThGL0MzMURvYjl2MUZ1UnBWQ3c1TEhUMEZnUDNIemVvNHVzcjk1L2hFdUZ5L3dHQTFQUnh5RnlBOWtzazYxOTBWazVhU3htU1dSRXBtZW1UM1BTZDR1dFZOb0lDbzBvS3ZueElFTmFJMTE2NkNJSndGeGtpTEhnZFJIaGhIeWpzaVNEY0ZoM3F4UVlvdHg5QmVNY2t4STlqQk0zTEFrNlJKYkhNeGpSOVpyZndCek4vU2hnM1hNSkw5eCszc1k1QnExdjBnVGZ1UDdSNmJRK0xDOUR1c2x3aG5sbHlBWEsxd3MxYnJhYlpmbXNYb0RNRlFlYTBpVDNKQmVqUGh4WFJubFR0NVlzZ0NHK0lBeGhCSTBTWWNvMFJSUGVvaC9pdXIvMlhLdmtTaEhlTVErVGFKTUkvbitvQjk1L1FCNWpsRFJ1SC9ocTcvN2pSeWpwR3dJYVExOG80WmFCSGNmdnVQMGN2UUorNS80QzFJQjZ1UHVtY0E0eDFlTlV5azB0eXNFNldOZEhXcHRaWVBENm1lMFR0ajVGQjZRTFVXWlkxZjg1Z0pDK3lGbTF2MHhiRjEza3BoVFFmeFFCZmNHWkFaSTVlRHM2dDc4VStDZmNaQUZBQk1FOWRRUkNlVVE4UlRnS29Bc2dCeUFJb1VOY1FSRWZFSUg3c1NvR2N0Z1RoRjBZZ1VtRVEvb2RDZjl1U1ljUElTZjBXdHV0QTRRK2dwZnNQTUs4a2RUeDk3ekgzSDhCYlovRXhKWHBwQkttMkhXOVdmT3RZaExSNkdlZ2RMUWZqelBRbTFyYWcyeWUxYjdXN01meFlUeGhWeTROV1pGWW9qbU5CbmtaL2VRa00xUTd1bGg1NWFKQ0k2SCtHQVpRQkxGTlhFSVRuU0JCaHdYMFE0bnl1OWtkaUlFR1lJd1locHFkQW9iMEU0VGNHSUJ5NGhEdnpNQy9YNzRGKzVaQXdyNndSNEZiaER6MDlSSGNOdEhIL0dUZU8zSC9HUk5TTDlib0wwTGpOWmwyQTJrOTBIWDNLaFpoYW5ETmNwMU1Yb0lJeW9saVExMkdzc3N2TzZ2WjJHMFFYb0ZPRExJbUEzV2U4Smphc1VsY1FoRytRSVVLaytrRmlJRUcwSW82R2k1WkVQNEx3SjMyZzFETnV6cCtDMklhQWhmNHVzVW1VTEZXeGNjRDkxOFhDSDZ5anR2ZUcrdzh3VWNmUGp5NUFLNEpocHdxTVZSZGc2ejVwM1JaTExzRGE5dTI2QUpmWUJBYllBbUk4Nys1QTJvdWh3Q1FDdXNNa1JQaGhscnFDSUh5SFVneXNod25YeFVENmxaN29SVWowSTRqZ2tBUXdSZDNnMm56UjYyM3dnT3l6QTBxSVlWR2UxT3pmb3Z1dlJlRVBEcXZpV21lRlA1UTc0dkJCVVZ1ZnV2K0Fwb3dpd2FnSWJMZVQ3WFNnRW1Oblh1dFBXTHZHTU42MFV1dUNJRWFiNGhaNmdHR09iWFJtNEFuNzVJMG1wOEdBUVZSRVRGQlhFSVN2cVljSmowTVVOQmdEVlJNbWV1TzZUOVd1OS9VUVZYejdRZUlmUWZpZGVPMzlrbjdNcDNsYmtJOVBzOTY4dEJGYzllSmxUa2ZnSm5iQWpmTDRoZEQ5WiswVWVPLytBMHc0QVBVN2xWeUFwanZlckF1UW1mRUlLbThOM25GQmtKelVqelFmd1FCZmRHWXdvbEJnZjdlaEYyQVFGVWwzZ2NJTUNTSW85MnpkQlRVQ29BamhETXdES0ZIM0VBRW5DdkdqVkFKVXRaY2dnbm9QVDROK29ISnp2aFRFTmdTdThNY1FNdEtnaGUyMkV0Q1krV2EzS1B4QjdqOFRMWEhBL1Fmb0NvREJ5QVZvMklsZHlnVlliMXVudVFCVm43Y3BDTkpZUjlrdjJtK3Q5N0s2SU1nRzlKVlhJS0ZpZFVOdVhCTE9yVStod0wyRFZIdFoyMGtDQWtFRWpsanRid2dpYjJBZVFzelBBL1c2VlFUaDYrZFBIQTNSajl4OUJCRmNJaEJ1WGJxUDNZRkNmMTNwV3c0SmMvSkd6WGVkRnY0d2R2KzFML3pSK0dlbjdqL1RoVDk2MlAxWEg5cE1ONk9YWFlES1RUQXIyMWUwdlNIWnRYQUJ1bDRRSklJRmFScmoxUjJkZDFYWUJTNFNBWU9EWEh0cDJ3bFJJWmdnaUdEZXgvV0t3b0FROVBPMXZ5SW9QUVBoRCtKb2lINHg2ZzZDQ05WN1pJUzZ3clU1bGgrMkVjWSswcXkzS0sxREdkSE9kdHhwNFErZDdUUEQ3Y1BjdnJpN25SeFU5eCtNaHpVZnVnQTdGQXRidHNhS0M3QW0wSms1b3JWbFdvVUNHK21HNkxRZ1NLc1dxb1hHWldrY0Ezd0JjWjUxNXI0SmN5Z3dDWGpCb2Y3TDdVNmdibkFsQ0NMQVJHdC9BN1d4dUFqaERpeUFCRUhDSFZqdEdvd3IvdWlkZ0NEQ2hWUjdmNHhTVndRR3J3VEVnSVgrRnBIQWtqU2gyUzQzdFdOSEMzOXdvelVhMitjbXU0WFYvdUVMOXg4MzhpejZ4LzFYbnlKYmFvNW5Ma0RETnVrSVk0YmJiTkVhaSszb05CVFljQ0U3TGtCelI5aHl5VG0yQ1J2NGZYWTIxTm1nUi9rQWlXNExCdXNoY2dLU0NFZ1E0WUdoSWNEVXgxVVNCSWx1WEdjeHhiVVdvK2MzUVlTYWVob1pjdk82T3k4S1loc0NGdm9MQUhQU1JuQ2pPRnhiVGJYaC9uT3Q4SWZlSnJqMW8rUjZLa3gzaTlkMjAvMEh0QlFBQSt3Q05ORU9jNjFwN1FLMGZLTE5GZ1F4MkxzWkY2Q2xQbGQ4blplU1dPSGpHT1J6SGQ1Wm9GQmc2aU4vRVVPak1BamxFQ09JY0tJbkNKWWdoTUQ2SDZVRElOb2hveUg0eFNCK1JLSm5OVUgwem5Oa0dpS2NuM0J2VHVXSGJZU3hqelRycmJJUjVLUitDOXUxVnZpRFd4YWt1bDM0ZzF2b0lnY3Vvb0M0L3dBZ1lyWHdobHN1UUN2dHN1WUNiTkZ5aXlLYUd5NUFkd3VDVEtPdnZBVFppVmtTaFFLN3N3M0NIUEhhUzkxdWtBaElFTDB5a2FzWEZLbFRSY01kV0lRUUNHazg2RjBrQ0lFdnB2aWpaUDhFMGJ2UERCTC8zSVVIZUJzQkMvMnRRc2E4dkY2elhiY0tmM2poL3V0ZTZDL3ZORStneCs0L0FJaTA3a0h2WElBdFR3VHpWbmx4eFFYSW1qL3Zka0dRQ21UTVNSc3dWWDNNMFZQVzljdUM4Z0VTWmtnQVdBY2hBbEpvSUVIMEhoS0FaTzJ2VGhsQ0NLeTdCVXVnZEFGaFBmZDFSMS85djVUY255Q0krZ1JybmViWlFQaWZzSXQvRHU1andZdkNIMERMd2gvZGRmKzVmRUs0RDlSc2srNC8xRjkveUFYWWJoMkRVT0RhSGkyNUFHdmJiemo2Tk5WcldQTktiaFlFV1pWR01NUVhrT0JwbUQ5NXBpK1U3ZzUwbEErUWFFY1NEU2NnaVlBRVFVUnFmOHFKWHdVTlVWQXBFTktZRVl5SmZGM2NpeXIreU5sSEVJVFJtREVGSUVWZDRmcjhKNGh0NEFIb0k4MTZCWmJFc2hlRlAvUjBEYzAvbVdiN1Z0MS9iaGYrQ0lQN2o0UFhmdjhrRjJCSG0yQTJ0OTl3OUNsZGZEQlZFS1Nib2NBejhrWnNLdDhINWtSc2xGdWh3RjQrUE1oSkdDeElCQ1FJb2hWeTdVOGJDcVlWQnV0LzVCajA1aHhGRkg5UnhiOEpnaURNVUJmLytxZ3JYSjg3K1dFYmZqNTI3dHhGUHNPMmFMYmJ2ZEJmOWR6V0tQVFhZQjJMclhDbWozclAvUWV1ZUZVaUYyQzdkVm9YQkRHajRXaGRnT3JQclJVRWdjVit0TEtGRXVKWWxLWXdXdDF0c3dFZFhQdVVENUJ3QXhJQkNZS3dpcEV3eUtFV0JKWENZSVhHR05zVDgzcC9SM1QrNkhsSkVFU25Zd3lKZis1RGVmOWM3ZDlGTm9taWxPaXNrWnc3ZUlqR29iL2M1UFpaN1Ivay9yUG4vZ09VdjVXR3hBVm9UY2gwVG5VSlcwR1FSV2tTL1h3Sk1aNXpaakFLZXlnd2lZREJJMWw3K2R0TEUzU0NJRHA4QWFpSG11cFJoUkFDbGFKZy9hK3ErRyt2SU5YK1pJTy9TTzE3Z2lDSWJrSGluL3Ywc3ZqbndiNUtpR05SbnRKc044eUZQN3JYMFliaVh3RGRmNEFtV0NJTUxrQ3oyMng3TERaY2dKMjBxVzFCRUlOUVlNUDJLYmJmK0xSZDd5djN3ekRMTm1NRHY4K1pPeS9zb2NCRU1Pa0RpWUFFUVhTWHV1RFZMdisyVmhEVS9uR2QvK2NlalYxTThWYy9QdVcvOWY1a3hYSUVRUkJlUWVJZjRUWnVoUDVxMXAyVk5vSFhmMDB6SmY3cE9QR3NGdjdRaW4rYUw3dGIrS043N2o5cnpmTzMrdy9RWmt1eDRRSTBKUUthMlo2dEhyYmdBalFVQVZ2SVl4WkRhYnRhRU1UZ1l6TUZRZXoyZTE1S1lwbFBZSWpQT25yYXVuNXBrQXVRc0FLSmdBUkIrSUc2QXk1cVk5MnE0cjljODVueStkSnFqR002eng5SjhaMmsrWXdnQ0NKSU1BQ1RBUHFwSzF5SFFuOWQ3ZDgwRzBWTzZ1K3NrWFlLZjdUWXJGT0ZQNnkzMzJpTGFMdU8zckcyV3JaN0Y0ZFJvUlhyN2o5QUoxMXl4MjQ3b3c3U2RRRWFxVndXWElBK0tBaWlkQUhhM1lwZkM0TE15OU5JbFpjUlJkR1phNXhDZ2YzVlQ0U2dENVFUa0NDSTRFTGlIRUVRUk91SkZqbi92SUZDZjEzZFZ3VlJ6TXNiTk5zTlV1RVBHTGJDMlAzbmNrZHpJOW5TaXZ2UFFBRGx2QXVYRnRkOVpWUzF4YmhqdVc0RHVZc2RhL2RBelc3VGpnVlR1ejl1YW5uOTdiZE1nOG1hdjJYdGpzSmsrNDIrNTVBd0oyMXk3dlM2V2YzSXE0RytsNnRiQlpsNllSQVNYd21DSUFpQ0lNSUJpWC9lMGV2aW53ZWh2M1BTQmxRZzI1cjM2K3NIclVOLzE3NjFFZnByMXYzWFlrdndTK0VQczl2czlBUmJkZjl4SWU2cGNPKzNZc01URVpJRWpJcE5HT2ZuYS8wSk05TXNidlF4TjNqaUdkMWszSFIzWktVQnJMSVI1d2RGTndiZVhuOW9FdGFvaTREa29pRUlnaUFJZ2dnMkRNQTZrUGhIODVod0hyOW1IeGsyaUZWcDJFSWJkQlFaTzZHL0pyU29qZ3QvY0orY0ZDdnV2emJ0Y01QOXA0ZGsxQ1kzWElEY1pnZWI3MW9QWElDODh3dXByUXVRdDc2aDFPMWpOaTk3OVg3bTVBMm9Oa2VNKy8rQkVHUVhJT0VOSkFJU0JFRVFCRUVFRzFaN24wdFJWd1FXQ3YyMXNCa0pjL0ltelhhZEMvM1ZmcU5hT1lTRlA3cnQvck56WnB4dy8wRk1jUjI0Szh5ZVNNNDd2dkk5Y3dGYTNMNWxGeURYSzZYTld6YUxXN2xRT3d3RnJpQ0NPV21EY3dNV2hRTDc3d0ZFTkVnQVdBK29IUFFFUVJBRVFSQ0UvNUVneEw4a2RZVW5VT2h2OS9lbFdYZGVta1paVlVXczA5QmY3ZEpXQzMvd0xoZitnS1gyKzgzOVo2M3RyWmF6Zmx4U3E3WlpWVDY1alF2TGpndVFkeW9ZbXJnNHVPMGo1cXBRWUR1MERRVld1QUMxTnhhSFhzdythM043bVR2RXREU0NIQnQwZnBCMFl5RHV0WWNYMFRseGtBaElFQVJCRUFRUkpPVGEreHVKZnpSL0N1cnhXOXhIbnZWaFdacXcwSVpXeWRqYUYvNVFoZjRhRnY1UWI4MHE3UXQvV0lucXRHYVM2cTdXWkMvYWxGdStSSXdqVXlYN1Y2cE5GMkEzN3haSEtySjBkbkswKyt0MlFaRDJONWgrUVJDN29jQXo4aVpVblZKRUFtaXY3cm1IV0s4VEE3QUJjQ3I2blNBSWdpQUlndWdTZGZFdlRsMUJjNTdlbUp0eVNKaVJOMnUyYThQS1pLSHdSK1BESGlyODRZZWFFdzY0LzhRVjA2YU5ZWEFCZW5KSE9sUVFoTGRhcUlPQ0lOYU90L0Y5R1ZFS0JlNkZoeExSSUFvaEFrYXBLd2lDSUFpQ0lIeEpwUGErRnFPdTZQbDVTZytGL2k1STB5aXBGTzlPUW4rZEtmeGh0TFhBRnY0dzNITHczSCtBS2dTWVhJQk9uU1F6SFcrbS9helZIUVcwTEFqUzNWRGcwZUNHQWdlOUtBaUpnUFJTU1JBRVFSQUVRVFNnSDJ1OXhVL3puREFYZ0d3Sy9lM0hrb3VodjZxVkRVTi9kZFlKZXVHUEVMbi9BRE4xTG9Qb0F1VCt1b3Z0RmdSUmY5NDZGSmpyM0w2Ryt3dHlLSEN2NXdNa3ZFT3V2VndtcUNzSWdpQUlnaUI4UVJ5VXJpVU05RXJldndDSC9xNTkyOFhRWCthM2k4cEJjNWtmM0g5QWt3RG9jeGRnaDl2MjBnWElUQjRyYjNIVEdTN1VTNkhBWG80RlZCU0VrQ0J5eTZTb0t3aUNJQWlDSUR3bENTclk1alZCbng4RkplK2ZUdFhma2lvMHlmdlFYeGhzalp0c2o2M0NIOTEyLzVrK1AxMnNRT3lnKzY4K25UVzF2THN1d0E0cnI3UTRDWGJMTkRzaEF2SU9UblJiRjZCSG9jQVpKME9CL1o0UE1Hd1BTc0llRE1BNkFBUFVGUVJCRUFSQkVKN1FCMkRhOUd5V29EbU50KzEzY0k2Y1ovMnVWdjFWcld6RC9XZnBFQjBULy95bEovbkYvUWY5SVpQYnVHak51Z0I1NS9kRzBCUmJ6ZTFsSnhTWTZWMCtKazZURzZIQWMzcWh3SlFQTURnUExjTCt6VHdKWUlpNmdpQUlnaUFJd2xVR0lINk1aZFFWTkE5QlQrWDk4elQwMTNDRHZObG01TmZRWHc4aVNua25iYmJpL3VQbXZwQTZQdUJPRDdZRHNkRHV0Z05URU1UZ0p0VGRGZU9laFFMUFNodTlHY0FwSHlDSmdGNHpEbUNVdW9FZ0NJSWdDTUlWaGlGK2hDVzhJK2hGUHdJOFovVTA5TmV3OElmUjFxejNhVThVL3VEYzhVdkdpazRuV1d1c2hXWWFxcjRoS3doaVJRU0VDd1ZCUEFnRlhwVkdrR0ZEemcxMGxBOHdHQTgrUWpCU2V4R2xYNkVKZ2lBSWdpQzZ4emlBTWVvR1R3bUQrQmZRdkg5QkMvMjE2djZ6Sy80NWZuTDlVdmlqQys0L29LVUQwSUdZNTI0V0JPbDR5dzY1QUcwY2ptVVJVUGMyOVZzbzhNYmVDZ1gyMjBPVThCWUtSU0VJZ2lBSWd1Z09ETUFVS1BWS1dLQmM3SmIzRVpqUTM1YnJ0Z2o5NVYwK0hkMUlJOWZOaTRRN2tNUFE0SFBKY3VPNDlaMkV6UVhvZWlpd1l2dStDd1d1TFZKR0ZEUFNKbS91bWFEbkE2U2lJT0VnQldBRHFCSWRRUkFFUVJDRVUwZ1FsWDc3cVNzOEorZ1JVRzYzMzhINTJheTBzUkg2YTByODh5ajAxNDd1NGtIaEQrTzIrTVQ5Wi9KaXNxTXZTVjIvczdycEFuUTlpYVAzQlVIVW4vc2dGRmhCUmhwR21vMDQxMlc5a2c4d2pHM3BWZUlRSW1DVXVvSWdDSUlnQ0tJaklyWDNxZ1IxQmMwekFqYnZjM0FPbkdGRFNFdWp0allRaE5EZnJwK2NvQldSdFJMNmE2TU5rcTJOY2ljS2dsaFJkRjB1NCt4U1FSQm1zNmVZM3VjK0NRV2VsemVocEZVL0tCK2dlOGRKSXFEM1JPbGxsU0FJZ2lBSW9pTml0ZmVwR0hXRjUxRGVQL2YycFZtM2dpaG01VTJhNzcwTy9VVkhvYitxOVFKUStJUGJVSDZkZGYvQnVGM2MrZ1VtV1VrZWFmdks3Y0NwNTJnb2NMZnZhQnNpb0tXVzZvWUNHMWh5UFFvRnJrRENyTFFsdUE4bkVnRUpKNUFod2xYNnFDc0lnaUFJZ2lBc1VVK3JFcUd1OEJ3Uy96eWRYODFJbTFDcDN3aStDZjNWY1F4YXlsbW5sQkI4VXZqRGNNc09oUDVhMm1GMzNYK0FLZ1RZbnk1QVIwK3NZeTVBN3RpbEZzWlE0SnpVajBVMjZkenBDMEkrd0RBK1pJbk9iKzUxQUlhcEt3aUNJQWlDSUV3eENHQWFiUk5WRVRRdjhlWGMwTUU1N3dvYlIxWWF0TFdCc0lmK21vcGI5TEJtUlB0dGUrUCt3OXJRNnFJTE1Cd0ZRVnEwemJHQ0lNRU9CVjZVcDFGa3lhNE5pTDRhNlAzNmtDUVIwQitNQVppZ2JpQUlnaUFJZ3FCM3BvQVFobmxOZ01XL0V1S1lrOWRydmc5KzZLOWFPdWhpNksrbHZ2ZEo0UThYM0gvZ2dOUlJkL0p1aDl0YXVZajhYaERFV0tSa0NGOG9NQWZEWG5rTHVQYm51NkRrQSt6bGh5WGhQUFJyTmtFUUJFRVFoRDRNd0JRb2FvTG1NNzA1QitUTk44U01wSmhIaHlqMGw3WFVJYmh6blI2MHdoK1dqdHErK3crcTZhaGRGNkFWRjFzM1hZQkduV1BoNUhXM0lFanJsWDBaQ3F4N3Zzd1BQa1Vrc0NCTkIvZkI1WFdTV1JMdndnWGxzeUVJZ2lBSWdsQWoxOTZQK3FrclFvWFg4NkVBcDRWYWtLYVFsMUsyNXQvTldvRVBRMzh0dVNxRFVQakRvRzNkY3Y5eG14ZHM3V3VwUlRNc0hLd0ZOYlRqRUZ5WGxWNnJONXVGRTc3V1BsK0dBalA3VjRWaTRTVnBBamsyNE54Z0dwUjhnSDRTNzBoSTlBOHhBQnRCRllJSmdpQUlnaURpdGZlaU9IVUZ6UnQ4TmcvektQUzN3RkpZbEtac2JkdE0zajg5SFNDWW9iOStLdnpodExPUVcydWJoU3VEUXh1UXh0dnRsRnM4a1ZhNnljcEo5MTlCRUNjdU1uK0ZBamZ2dzN6L3EwWE5HWGt6cXBDN05sRDY2Z0hnbDMzNytXSGU2OVFyQk5NdjNRUkJFQVJCOUNwOXRmY2hpb3p3RDFUeDE5MjVwdFluQlFsNzVTMk5tYjJGMEYvanZIK3Q1LzMrQ1AxMThBUjVWUGlqSS9lZjZUMXhHKzYvWmdGSXN0NEE1d3FDMk5tMkd3VkJ1aHNLM05xYTUrZFFZR3Rub3JHdk1xS1lrVFoxZGNBTXpBTXg2QTlqd2hucXVXNUdxU3NJZ2lBSWd1Z3hoZ0dzQStWRzloTlU4ZGZkL2Vtc095dHRSS2x1aDNVczcxOFFRbjhkU2dmbmtRN0VPN2xZM0NqOG9WbEtNbDYvK3dWQjdKN0l0bXR6SDkzOWpvVUN0OStLcVZCZzFuekQyZzhGTnQvZ2pEU01GVGJlR3c4RFB6OU1TUVQwRnlQMEFrd1FCRUVRUkkvQUFFeENWUHNsL0FQTlZ6emY5eW9iUVZvYXRkWFFqa04vR1Rmc0EydWh2NjJiYXpmMDE5TVRaS2N0bkR0K21YVlUrRU96bnFUYkVONk5PeVBzQlVHNFk1ZWtXUmVnWHJ2YWhnSWJYd3M2eDh4MTk4R3QzZWxyek1uclVXUko1KzdoWHNzSFNDSmdPT21EU0g0ZHBhNGdDSUlnQ0NLa1JHcnZPd1BVRmI0aUxQT1VBSWYrbGhERGpMeEo4NzBOWHhubmhqdHBHZnBydkVHTnZnQkxnaGlIa2RISWJuZDFOL1RYMTRVLzdGNklPcnFQWkxKNXB2ZHZxZVA4VWhERVljZWdFd1ZCL0JFS3JQbTJ3MUJnRGdsN21hS2tlUmNHVUY4OUdNTDRjQ1c2UTZ6MlVweWtyaUFJZ2lBSUltUWtRTVUrL0FpSmYrN1BLWnZNZGd3ejB0YkcvTml4MEYrTnhnQnZRMytkS2Z6aHhIbjJTUjBJU3prVU8zRC82YlJVc245TTNNWjZadXZFdUZ3UXhQeGxiLzlDOEt3cXNJSGRyMFVvc0psOGdOWnV6Y1l4RmFVRTVxVU5YUjFJZmZXQUNPTkRsdWdPTW9CcEFFUFVGUVJCRUFSQmhJUUJpR0lmTW5XRnJ5RHh6LzI1cE02NkM5STA4bEpLOGIxNThhL1pDR1F1NzEvNzBGL3VpNnEvNXZkaHdmamw0TVhxYk9FUGJ1UFF1YTFyVldvdktObXhRbG80ZWIxU0VNUUd6bFFGYnRFbzNsbFAyejNHWldrTXEyeTROeCthSkFJUzdXNzZjWWo4T0l5Nmd5QUlnaUFJZXFjaGZES1A4ZHQyQWo2UHliRUJMRW1URGgrNnlZSVZKcUpQbmFqNjIvWExJdVNGUDNpSFljRjZhMHVkSFpteEM5RFBCVUhjVUlSMVcrV0hVR0NWNVk4M2lZQldRNEhOT3pHMStRQTNvYVJOZWhZa0YyQUlIanFoTzQ0d01RQVJFaHlocmlBSWdpQUlJbURJRUs0L2ltcWc5MzYvSDRkSDdyOEtvcGlSdDJpK04rZiswOC83MXo3MFZ5WCtNYU42QVg0TS9RMUF4S2ZyaFQrNDdaMUpSa3VZNzNTL0ZBUng0TUp3SXliYzYxQmdMYWJ6QWVxSEFsdTdGaHI3cWtER2pMUzFlYkFLbWdnWWxBZFdyN3dNaElrNFJMNGN5Z3RJRUFSQkVFUlFxT2Y3UzFCWCtBNC96aDJDTWlkemVJNDZJMjFHdWY1THYyTjUvMXFIL3E0dFlpTHZYK2hDZjdsenNlTCtMdnpCMjU0enlmejIvVjRRQkYyOU9FSWRDcXp6TVd1NUJETnplYmU2TUFBQWVha1BDOUs2cmcrd1hUMDVZUWtGOXZvQlRPaFQvd1Y5bUxxQ0lBaUNJQWlmTTFoN2I2RUlCdjhSSnZFdjRIbi9GdGtrc3RLQTRuc2JlZithWnUzRzM3VGNBNFgrbWxyV21ldmRwY0lmYmRhVFduVzFlZTB2L0FWQk9ybDBneGdLYkh4amNOM2pzTnZ6aTlJVWNtekF1d2NjaVlEZDJ4YmhIR01BcGdBVFA5a1FCRUVRQkVHNEM0UEk5VGNCeXZmblIwajg4M2F1cUtEQVVsaVVwenR2TnVlR2plU0c3ak5RNkcrSEYwMVFDbiswT21lU3RTdmNSd1ZCckphSTlrUWw5amdVbU92Ri9YY2FDcXo1MW9GOGdEUHlabFNjekFjWXBBY3JpWUNFV2ZvaFFtcGkxQlVFUVJBRVFmaUVLRVRlNGdIcWlsRE5VZnc0YnduNC9MQUtHWHZscmVCcjgyaVQ4MmJZei91bjJveVYwRjhMNGwvek5OLy9vYitPRlA2d2toTE54Y0lmN2I2WFRHL0tid1ZCQW5TeGRIcE15aHZaN25aMHpjRk5TUU9iYjNRMzhnR1dFY1ZlYVl2VG5kWjdEek1TQWVrbG15QUlnaUFJd2kzNklINmNqRk5YK0JJUy83eWJJK3JtL2R1Q1V2MlhmSmZ5L25ITlBGOXYwOFp5b3ZsRGJXMGNjckM3L1dicWN2Z1NjcUx3Ujd0OVNtWTIzSk1GUWJvd1duYW1HamR1VEx1aHdLelZIZC9pd25FakgyQk82c2VDTk4zMWdaY2VhaDV0aTNBT0NSUm1ReEFFUVJDRWR6Q0k5Q1RyUU9sSi9BcUpmOTdORFEzeS9tV2tRY1gzTHViOWEyayswM0VNZGhENmE3cERlaW4wMXdlRlA3UlRTUnY3OVc5QkVBb0Zibi9SbVEwRnBueUFBWDFRazNEWEd3eEN1QUdqMUJVRVFSQUVRYmhFQkZTZ3JKY0l5L3pFd3psaG52Vmp3Uzk1LzlyTTdpbjAxK0hMd1NlRlA1UklaZytUZDNySHVGUVF4SzJMeCs2eWJvY0NOMFg1cWo0M3VHQWN5QWRvL29qVis5b3JiM1UrSDJCUWlvTDQ4U0ZMWXFLL2lVT0UzdlJSVnhBRVFSQUUwV1ZTdGZlT0JIV0Zyd25UZkNKb1JUODA2MWNReFY1NWkySytiSEorYktnemRKajNqNk5wVnM5c2RvSFhvYjlXbDNYTXhPVzN3aDh0bDJyK1ZMSi9oZ0pjRU1TUmNZVGJ2clRkREFYVzJ3ZUQ1ZDBacjJlUUQ5QnVLSEFGTXZaSTJ4ckpVZDA4cVg1ODhJYnA0VTkwQndraUJJZENnZ21DSUFpQzZBYjFrTjlwQURKMVIwL01RY0kwbC9Hd3ZUUFNGcFRyNWhhN29iOHQ4djdwemRPdDZFaXNyU2FodjdJZlFuKzVDeGRJSUFwL1dGeFZzbklGVTBFUUU4dTdHQXJNTEorM05xSEFLclhQVGlpd00va0E4MUlLODlKNlp5K0dYc3dIR0xhWEFLSTFGQkpNRUFSQkVJVFRVTWh2Y0FoVFR2RVE1UDFia05ZaEsvVXJ2bmMrNzUvcDBGL2Vlalp2TmZTWHFhYndZUXo5RFVQaEQvMVBKYXZORDN0QmtNQ0VBbHNVZkUyRkFqZmQyYzM3TWJiNU9wRVBzTEgwc2pTQlZUYmM5WUhadHc5UUVnRUpPOVJEZ3FsS01FRVFCRUVRbmRJSFlCTW81RGNJa1BqbjNkeFBaOTBjRzhDaXRNN1dEcXptL1d1U0JrM20vZXNrOUxmK2o4Q0cvcHBvV1pnS2Z5aVJ2TGloL1Z3UXhQbytQQW9GVnR5NG5ZWUM4MWFyT3BBUDBKSWNxRmhrUnQ2TUV1TGVQUnhKQk94dW00anVVSzhTUEFtcXpFY1FCRUVRaEhVWVJHb1JxdkliREVqODg4ZWNyNGJJKzdmVjR2WjFSQ2ZIOC80WnhPM1pEZjIxMHFGK0MvME5kT0dQemhvcDJVbEMyYkVMTUdRRlFmd1FDc3l0OUpodVBrQnU2YlJaeVFkbzdVcFZ1ZzZsV2o1QXlkbEJta1JBLzd3Y0VOMWpBSlNvbXlBSWdpQUlhOFJxN3crRDFCV0JnTVEvYitkNlRWb2J3eDVwR3lyMVpKbU9GZjF3SXUrZmptaG9JZlJYbS9ldnAwSi9mVlg0dzc3N0QrajBOeDJYQzRMNEloVFkwa2FjREFWdUxRS2FYNmRWUC9rdkgyQlJTbUJXMnRUMXdkclhEMVkvQ200a0FnYURLRVRlbmhIcUNvSWdDSUlnMmpBRUlmN0ZxQ3NDUVpqbUNDRVEvd0JnWGxxUHZKUlNmQitldkgvcXFUcTMzYUdPaC80YTdzZmZvYjl1RnY1UUlwbmJnajhLZ25SdEhQQXd0dHo4UmRZYWhxRGxBelF2QXFhbEVTeXpDVzhmZWw0L1lNUDA2eDdoTGd6QUtJUVFHS0h1SUFpQ0lBaENnd3hSNFhjY1p1TDdDRDlBVVVLK214dW0yU2lXcFFuRjl6YkZQNS9tL2JNMU5MZ1IrdXRnclFidTJ1WGpidUVQNWZlUythTU1ia0VRVSszb29WQmd2WDI0bncvUUduUHlldVJadjdOM3FSY1BLVCswMStrWEJoSUNnMEVTSXBGM1AzVUZRUkFFUVJBMTZvVStVdFFWZ2NEcGQyOC96QzlDTUNjcnNDUm01WTJkYjg3dmVmOG85QmRCTFB5aFJITGtMdWhhUVJCdThxUUZPUlNZVzJ4VmV4SFEzRHJOYmVzMEg2QzZyNXpOQndndzdKVzNvSUtvZDROL21CNlFUajlvU1FRTUJoS0FxZG9mSmZVbUNJSWdpTjUrSjZnWCtwQ3BPd0tCWDkvZmd6YTNjYmdmcTRoZ2o3eFBJMjk5Ri9MKzZZbC9idVQ5VTYzcldPaXZWUk9VMVV2QnZkQmY0MlhiaFA1NkVpclAxNForQy9HOGJoY0VjZmE0L1JrSzNLSjlOaXZJV0M2ajRsQStRT045T3BNUHNJd29GUVh4U3h2YzJCN1JQZm9oZnUxUFVsY1FCRUVRUk0rUkFCWDZDQm9rL3Zsakx0ZTBQc01lYVN2S2RaTktsL0wrR2MvajBkVzhmMXcxSmJldmxYUjJtZmczOUpjN3VsSTMzWDhOQVVmaWpnOGkvaTBJWXFxRFBMYWNkcVE4SzRhTnNPWUR6RXNwekVvYlhSak02WUhwaSswUjNTTUNrUmVROHYwUUJFRVFSRy9BQUl3QjJBQTRIVlJEZEJFUy8vd3hoek1vK3BHVCtoWGY5MXJlUHl1Um1HMzIzZ09odjE0Vi9sQWk2UnlCNVpQc2VrRVFQNFVDVXo1QW5mVzZrUTlRV1JSa0ZDdHMzSlZCblI2Y1B0Z2UwVjJHSU55QUNlb0tnaUFJZ2dndE1RamhiNWk2SWxDUStPZVB1WnZPK3F0c0JFdVdpbjRZYkk3eS9uVlAvRE54RnB3Ti9XMjFOKzhLZnlqL0k2bFdDVXBCa0E3dlkwZERnVDBkNTduRkM2dk51V3Qzc1hjaEg2QmRPWEJPM29BODYrditRNUllb1A3WUh0RmRvclZKd1JqSURVZ1FCRUVRWVlJQkdJRUkrWTFUZHdRS0V2LzhNZGZRMlZlUkpURWpiN0sxb2RiaW4zTjUvNkN6SDh1cWltTjUvN3k2aDl3Ty9mVm40UStsQmlqcHIrcEVRUkJ1ZVQwS0JiWWFDb3lXKzdVVkNzejFMTWJXOGdHMkxrVGlURkVRRG9hOThsWnZpNElFOVNFV3RKY013ajJHYVlKQUVBUkJFS0doN3ZvYkJmM0FGelRDK0Y3dTFieko4YUlmTXZiSTI3cGE5RU52WG0wMTd4L1Q3TWRPNks5emVmOG85TmY2ZGVoRTZHK3p2aVFaTHhQa1VHQXJGMlQ0UW9HVkgxc0pCWFlxSDZEeHNYZWpLTWhXY08wYmpadWh3RjQrekxyeFVDTVJrS0RKQWtFUUJFRUVIM0w5QlJjL3Y0OTdQVjl4ZTU2bXMvNWVhUnRLaUNtK2Q3N29CemNVbmVCdzNyL1dvYittT3lXMG9iK3cxQmJEOXZrZzlIZnRpdU9jWnVnRVFSQUVRUkFFUVJBRVFSQUVFVmIrL3dDNG41SnRjMjF6MWdBQUFBQkpSVTVFcmtKZ2dnPT0"}];
if(window.createjs != null) createjs.Sound.alternateExtensions = ["ogg","mp3","wav"];
ApplicationMain.images = new haxe.ds.StringMap();
ApplicationMain.urlLoaders = new haxe.ds.StringMap();
ApplicationMain.assetsLoaded = 0;
ApplicationMain.total = 0;
openfl.display.DisplayObject.__instanceCount = 0;
openfl.display.DisplayObject.__worldRenderDirty = 0;
openfl.display.DisplayObject.__worldTransformDirty = 0;
GlobalValues.gameHeight = 768;
GlobalValues.gameWidth = 1280;
GlobalValues.finalScore = 0;
com.indigogaming.wnpdispatcher.WNPEvent.PAUSE = "pause";
com.indigogaming.wnpdispatcher.WNPEvent.UNPAUSE = "unpause";
com.indigogaming.wnpdispatcher.WNPEvent.MUTE = "mute";
com.indigogaming.wnpdispatcher.WNPEvent.UNMUTE = "unmute";
com.indigogaming.wnpdispatcher.WNPEvent.RELOAD = "reload";
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.CODES = null;
haxe.crypto.Base64.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
haxe.crypto.Base64.BYTES = haxe.io.Bytes.ofString(haxe.crypto.Base64.CHARS);
haxe.ds.ObjectMap.count = 0;
haxe.xml.Parser.escapes = (function($this) {
	var $r;
	var h = new haxe.ds.StringMap();
	h.set("lt","<");
	h.set("gt",">");
	h.set("amp","&");
	h.set("quot","\"");
	h.set("apos","'");
	h.set("nbsp",String.fromCharCode(160));
	$r = h;
	return $r;
}(this));
motion.actuators.SimpleActuator.actuators = new Array();
motion.actuators.SimpleActuator.actuatorsLength = 0;
motion.actuators.SimpleActuator.addedEvent = false;
motion.Actuate.defaultActuator = motion.actuators.SimpleActuator;
motion.Actuate.defaultEase = motion.easing.Expo.get_easeOut();
motion.Actuate.targetLibraries = new haxe.ds.ObjectMap();
openfl.Assets.cache = new openfl.AssetCache();
openfl.Assets.libraries = new haxe.ds.StringMap();
openfl.Assets.dispatcher = new openfl.events.EventDispatcher();
openfl.Assets.initialized = false;
openfl.Lib.__sentWarnings = new haxe.ds.StringMap();
openfl.Lib.__startTime = haxe.Timer.stamp();
openfl.display.BitmapData.__base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
openfl.display.BitmapDataChannel.ALPHA = 8;
openfl.display.BitmapDataChannel.BLUE = 4;
openfl.display.BitmapDataChannel.GREEN = 2;
openfl.display.BitmapDataChannel.RED = 1;
openfl.display._CapsStyle.CapsStyle_Impl_.NONE = "butt";
openfl.display._CapsStyle.CapsStyle_Impl_.ROUND = "round";
openfl.display._CapsStyle.CapsStyle_Impl_.SQUARE = "square";
openfl.display.Graphics.TILE_SCALE = 1;
openfl.display.Graphics.TILE_ROTATION = 2;
openfl.display.Graphics.TILE_RGB = 4;
openfl.display.Graphics.TILE_ALPHA = 8;
openfl.display.Graphics.TILE_TRANS_2x2 = 16;
openfl.display.Graphics.TILE_BLEND_NORMAL = 0;
openfl.display.Graphics.TILE_BLEND_ADD = 65536;
openfl.display._JointStyle.JointStyle_Impl_.MITER = "miter";
openfl.display._JointStyle.JointStyle_Impl_.ROUND = "round";
openfl.display._JointStyle.JointStyle_Impl_.BEVEL = "bevel";
openfl.display._StageQuality.StageQuality_Impl_.BEST = "best";
openfl.display._StageQuality.StageQuality_Impl_.HIGH = "high";
openfl.display._StageQuality.StageQuality_Impl_.MEDIUM = "medium";
openfl.display._StageQuality.StageQuality_Impl_.LOW = "low";
openfl.display.Tilesheet.TILE_SCALE = 1;
openfl.display.Tilesheet.TILE_ROTATION = 2;
openfl.display.Tilesheet.TILE_RGB = 4;
openfl.display.Tilesheet.TILE_ALPHA = 8;
openfl.display.Tilesheet.TILE_TRANS_2x2 = 16;
openfl.display.Tilesheet.TILE_BLEND_NORMAL = 0;
openfl.display.Tilesheet.TILE_BLEND_ADD = 65536;
openfl.display.Tilesheet.TILE_BLEND_MULTIPLY = 131072;
openfl.display.Tilesheet.TILE_BLEND_SCREEN = 262144;
openfl.errors.Error.DEFAULT_TO_STRING = "Error";
openfl.events.Event.ACTIVATE = "activate";
openfl.events.Event.ADDED = "added";
openfl.events.Event.ADDED_TO_STAGE = "addedToStage";
openfl.events.Event.CANCEL = "cancel";
openfl.events.Event.CHANGE = "change";
openfl.events.Event.CLOSE = "close";
openfl.events.Event.COMPLETE = "complete";
openfl.events.Event.CONNECT = "connect";
openfl.events.Event.CONTEXT3D_CREATE = "context3DCreate";
openfl.events.Event.DEACTIVATE = "deactivate";
openfl.events.Event.ENTER_FRAME = "enterFrame";
openfl.events.Event.ID3 = "id3";
openfl.events.Event.INIT = "init";
openfl.events.Event.MOUSE_LEAVE = "mouseLeave";
openfl.events.Event.OPEN = "open";
openfl.events.Event.REMOVED = "removed";
openfl.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
openfl.events.Event.RENDER = "render";
openfl.events.Event.RESIZE = "resize";
openfl.events.Event.SCROLL = "scroll";
openfl.events.Event.SELECT = "select";
openfl.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
openfl.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
openfl.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
openfl.events.Event.UNLOAD = "unload";
openfl.events.Event.SOUND_COMPLETE = "soundComplete";
openfl.events.TextEvent.LINK = "link";
openfl.events.TextEvent.TEXT_INPUT = "textInput";
openfl.events.ErrorEvent.ERROR = "error";
openfl.events._EventPhase.EventPhase_Impl_.CAPTURING_PHASE = 0;
openfl.events._EventPhase.EventPhase_Impl_.AT_TARGET = 1;
openfl.events._EventPhase.EventPhase_Impl_.BUBBLING_PHASE = 2;
openfl.events.FocusEvent.FOCUS_IN = "focusIn";
openfl.events.FocusEvent.FOCUS_OUT = "focusOut";
openfl.events.FocusEvent.KEY_FOCUS_CHANGE = "keyFocusChange";
openfl.events.FocusEvent.MOUSE_FOCUS_CHANGE = "mouseFocusChange";
openfl.events.HTTPStatusEvent.HTTP_RESPONSE_STATUS = "httpResponseStatus";
openfl.events.HTTPStatusEvent.HTTP_STATUS = "httpStatus";
openfl.events.IOErrorEvent.IO_ERROR = "ioError";
openfl.events.KeyboardEvent.KEY_DOWN = "keyDown";
openfl.events.KeyboardEvent.KEY_UP = "keyUp";
openfl.events.MouseEvent.CLICK = "click";
openfl.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
openfl.events.MouseEvent.MIDDLE_CLICK = "middleClick";
openfl.events.MouseEvent.MIDDLE_MOUSE_DOWN = "middleMouseDown";
openfl.events.MouseEvent.MIDDLE_MOUSE_UP = "middleMouseUp";
openfl.events.MouseEvent.MOUSE_DOWN = "mouseDown";
openfl.events.MouseEvent.MOUSE_MOVE = "mouseMove";
openfl.events.MouseEvent.MOUSE_OUT = "mouseOut";
openfl.events.MouseEvent.MOUSE_OVER = "mouseOver";
openfl.events.MouseEvent.MOUSE_UP = "mouseUp";
openfl.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
openfl.events.MouseEvent.RIGHT_CLICK = "rightClick";
openfl.events.MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown";
openfl.events.MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp";
openfl.events.MouseEvent.ROLL_OUT = "rollOut";
openfl.events.MouseEvent.ROLL_OVER = "rollOver";
openfl.events.ProgressEvent.PROGRESS = "progress";
openfl.events.ProgressEvent.SOCKET_DATA = "socketData";
openfl.events.SecurityErrorEvent.SECURITY_ERROR = "securityError";
openfl.events.TouchEvent.TOUCH_BEGIN = "touchBegin";
openfl.events.TouchEvent.TOUCH_END = "touchEnd";
openfl.events.TouchEvent.TOUCH_MOVE = "touchMove";
openfl.events.TouchEvent.TOUCH_OUT = "touchOut";
openfl.events.TouchEvent.TOUCH_OVER = "touchOver";
openfl.events.TouchEvent.TOUCH_ROLL_OUT = "touchRollOut";
openfl.events.TouchEvent.TOUCH_ROLL_OVER = "touchRollOver";
openfl.events.TouchEvent.TOUCH_TAP = "touchTap";
openfl.geom.Matrix.__identity = new openfl.geom.Matrix();
openfl.media.Sound.__registeredSounds = new haxe.ds.StringMap();
openfl.net.URLRequestMethod.DELETE = "DELETE";
openfl.net.URLRequestMethod.GET = "GET";
openfl.net.URLRequestMethod.HEAD = "HEAD";
openfl.net.URLRequestMethod.OPTIONS = "OPTIONS";
openfl.net.URLRequestMethod.POST = "POST";
openfl.net.URLRequestMethod.PUT = "PUT";
openfl.system.ApplicationDomain.currentDomain = new openfl.system.ApplicationDomain(null);
openfl.system.SecurityDomain.currentDomain = new openfl.system.SecurityDomain();
openfl.ui._KeyLocation.KeyLocation_Impl_.STANDARD = 0;
openfl.ui._KeyLocation.KeyLocation_Impl_.LEFT = 1;
openfl.ui._KeyLocation.KeyLocation_Impl_.RIGHT = 2;
openfl.ui._KeyLocation.KeyLocation_Impl_.NUM_PAD = 3;
openfl.ui.Keyboard.NUMBER_0 = 48;
openfl.ui.Keyboard.NUMBER_1 = 49;
openfl.ui.Keyboard.NUMBER_2 = 50;
openfl.ui.Keyboard.NUMBER_3 = 51;
openfl.ui.Keyboard.NUMBER_4 = 52;
openfl.ui.Keyboard.NUMBER_5 = 53;
openfl.ui.Keyboard.NUMBER_6 = 54;
openfl.ui.Keyboard.NUMBER_7 = 55;
openfl.ui.Keyboard.NUMBER_8 = 56;
openfl.ui.Keyboard.NUMBER_9 = 57;
openfl.ui.Keyboard.A = 65;
openfl.ui.Keyboard.B = 66;
openfl.ui.Keyboard.C = 67;
openfl.ui.Keyboard.D = 68;
openfl.ui.Keyboard.E = 69;
openfl.ui.Keyboard.F = 70;
openfl.ui.Keyboard.G = 71;
openfl.ui.Keyboard.H = 72;
openfl.ui.Keyboard.I = 73;
openfl.ui.Keyboard.J = 74;
openfl.ui.Keyboard.K = 75;
openfl.ui.Keyboard.L = 76;
openfl.ui.Keyboard.M = 77;
openfl.ui.Keyboard.N = 78;
openfl.ui.Keyboard.O = 79;
openfl.ui.Keyboard.P = 80;
openfl.ui.Keyboard.Q = 81;
openfl.ui.Keyboard.R = 82;
openfl.ui.Keyboard.S = 83;
openfl.ui.Keyboard.T = 84;
openfl.ui.Keyboard.U = 85;
openfl.ui.Keyboard.V = 86;
openfl.ui.Keyboard.W = 87;
openfl.ui.Keyboard.X = 88;
openfl.ui.Keyboard.Y = 89;
openfl.ui.Keyboard.Z = 90;
openfl.ui.Keyboard.NUMPAD_0 = 96;
openfl.ui.Keyboard.NUMPAD_1 = 97;
openfl.ui.Keyboard.NUMPAD_2 = 98;
openfl.ui.Keyboard.NUMPAD_3 = 99;
openfl.ui.Keyboard.NUMPAD_4 = 100;
openfl.ui.Keyboard.NUMPAD_5 = 101;
openfl.ui.Keyboard.NUMPAD_6 = 102;
openfl.ui.Keyboard.NUMPAD_7 = 103;
openfl.ui.Keyboard.NUMPAD_8 = 104;
openfl.ui.Keyboard.NUMPAD_9 = 105;
openfl.ui.Keyboard.NUMPAD_MULTIPLY = 106;
openfl.ui.Keyboard.NUMPAD_ADD = 107;
openfl.ui.Keyboard.NUMPAD_ENTER = 108;
openfl.ui.Keyboard.NUMPAD_SUBTRACT = 109;
openfl.ui.Keyboard.NUMPAD_DECIMAL = 110;
openfl.ui.Keyboard.NUMPAD_DIVIDE = 111;
openfl.ui.Keyboard.F1 = 112;
openfl.ui.Keyboard.F2 = 113;
openfl.ui.Keyboard.F3 = 114;
openfl.ui.Keyboard.F4 = 115;
openfl.ui.Keyboard.F5 = 116;
openfl.ui.Keyboard.F6 = 117;
openfl.ui.Keyboard.F7 = 118;
openfl.ui.Keyboard.F8 = 119;
openfl.ui.Keyboard.F9 = 120;
openfl.ui.Keyboard.F10 = 121;
openfl.ui.Keyboard.F11 = 122;
openfl.ui.Keyboard.F12 = 123;
openfl.ui.Keyboard.F13 = 124;
openfl.ui.Keyboard.F14 = 125;
openfl.ui.Keyboard.F15 = 126;
openfl.ui.Keyboard.BACKSPACE = 8;
openfl.ui.Keyboard.TAB = 9;
openfl.ui.Keyboard.ALTERNATE = 18;
openfl.ui.Keyboard.ENTER = 13;
openfl.ui.Keyboard.COMMAND = 15;
openfl.ui.Keyboard.SHIFT = 16;
openfl.ui.Keyboard.CONTROL = 17;
openfl.ui.Keyboard.CAPS_LOCK = 20;
openfl.ui.Keyboard.NUMPAD = 21;
openfl.ui.Keyboard.ESCAPE = 27;
openfl.ui.Keyboard.SPACE = 32;
openfl.ui.Keyboard.PAGE_UP = 33;
openfl.ui.Keyboard.PAGE_DOWN = 34;
openfl.ui.Keyboard.END = 35;
openfl.ui.Keyboard.HOME = 36;
openfl.ui.Keyboard.LEFT = 37;
openfl.ui.Keyboard.RIGHT = 39;
openfl.ui.Keyboard.UP = 38;
openfl.ui.Keyboard.DOWN = 40;
openfl.ui.Keyboard.INSERT = 45;
openfl.ui.Keyboard.DELETE = 46;
openfl.ui.Keyboard.NUMLOCK = 144;
openfl.ui.Keyboard.BREAK = 19;
openfl.ui.Keyboard.SEMICOLON = 186;
openfl.ui.Keyboard.EQUAL = 187;
openfl.ui.Keyboard.COMMA = 188;
openfl.ui.Keyboard.MINUS = 189;
openfl.ui.Keyboard.PERIOD = 190;
openfl.ui.Keyboard.SLASH = 191;
openfl.ui.Keyboard.BACKQUOTE = 192;
openfl.ui.Keyboard.LEFTBRACKET = 219;
openfl.ui.Keyboard.BACKSLASH = 220;
openfl.ui.Keyboard.RIGHTBRACKET = 221;
openfl.ui.Keyboard.QUOTE = 222;
openfl.ui.Keyboard.DOM_VK_CANCEL = 3;
openfl.ui.Keyboard.DOM_VK_HELP = 6;
openfl.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
openfl.ui.Keyboard.DOM_VK_TAB = 9;
openfl.ui.Keyboard.DOM_VK_CLEAR = 12;
openfl.ui.Keyboard.DOM_VK_RETURN = 13;
openfl.ui.Keyboard.DOM_VK_ENTER = 14;
openfl.ui.Keyboard.DOM_VK_SHIFT = 16;
openfl.ui.Keyboard.DOM_VK_CONTROL = 17;
openfl.ui.Keyboard.DOM_VK_ALT = 18;
openfl.ui.Keyboard.DOM_VK_PAUSE = 19;
openfl.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
openfl.ui.Keyboard.DOM_VK_ESCAPE = 27;
openfl.ui.Keyboard.DOM_VK_SPACE = 32;
openfl.ui.Keyboard.DOM_VK_PAGE_UP = 33;
openfl.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
openfl.ui.Keyboard.DOM_VK_END = 35;
openfl.ui.Keyboard.DOM_VK_HOME = 36;
openfl.ui.Keyboard.DOM_VK_LEFT = 37;
openfl.ui.Keyboard.DOM_VK_UP = 38;
openfl.ui.Keyboard.DOM_VK_RIGHT = 39;
openfl.ui.Keyboard.DOM_VK_DOWN = 40;
openfl.ui.Keyboard.DOM_VK_PRINTSCREEN = 44;
openfl.ui.Keyboard.DOM_VK_INSERT = 45;
openfl.ui.Keyboard.DOM_VK_DELETE = 46;
openfl.ui.Keyboard.DOM_VK_0 = 48;
openfl.ui.Keyboard.DOM_VK_1 = 49;
openfl.ui.Keyboard.DOM_VK_2 = 50;
openfl.ui.Keyboard.DOM_VK_3 = 51;
openfl.ui.Keyboard.DOM_VK_4 = 52;
openfl.ui.Keyboard.DOM_VK_5 = 53;
openfl.ui.Keyboard.DOM_VK_6 = 54;
openfl.ui.Keyboard.DOM_VK_7 = 55;
openfl.ui.Keyboard.DOM_VK_8 = 56;
openfl.ui.Keyboard.DOM_VK_9 = 57;
openfl.ui.Keyboard.DOM_VK_SEMICOLON = 59;
openfl.ui.Keyboard.DOM_VK_EQUALS = 61;
openfl.ui.Keyboard.DOM_VK_A = 65;
openfl.ui.Keyboard.DOM_VK_B = 66;
openfl.ui.Keyboard.DOM_VK_C = 67;
openfl.ui.Keyboard.DOM_VK_D = 68;
openfl.ui.Keyboard.DOM_VK_E = 69;
openfl.ui.Keyboard.DOM_VK_F = 70;
openfl.ui.Keyboard.DOM_VK_G = 71;
openfl.ui.Keyboard.DOM_VK_H = 72;
openfl.ui.Keyboard.DOM_VK_I = 73;
openfl.ui.Keyboard.DOM_VK_J = 74;
openfl.ui.Keyboard.DOM_VK_K = 75;
openfl.ui.Keyboard.DOM_VK_L = 76;
openfl.ui.Keyboard.DOM_VK_M = 77;
openfl.ui.Keyboard.DOM_VK_N = 78;
openfl.ui.Keyboard.DOM_VK_O = 79;
openfl.ui.Keyboard.DOM_VK_P = 80;
openfl.ui.Keyboard.DOM_VK_Q = 81;
openfl.ui.Keyboard.DOM_VK_R = 82;
openfl.ui.Keyboard.DOM_VK_S = 83;
openfl.ui.Keyboard.DOM_VK_T = 84;
openfl.ui.Keyboard.DOM_VK_U = 85;
openfl.ui.Keyboard.DOM_VK_V = 86;
openfl.ui.Keyboard.DOM_VK_W = 87;
openfl.ui.Keyboard.DOM_VK_X = 88;
openfl.ui.Keyboard.DOM_VK_Y = 89;
openfl.ui.Keyboard.DOM_VK_Z = 90;
openfl.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93;
openfl.ui.Keyboard.DOM_VK_NUMPAD0 = 96;
openfl.ui.Keyboard.DOM_VK_NUMPAD1 = 97;
openfl.ui.Keyboard.DOM_VK_NUMPAD2 = 98;
openfl.ui.Keyboard.DOM_VK_NUMPAD3 = 99;
openfl.ui.Keyboard.DOM_VK_NUMPAD4 = 100;
openfl.ui.Keyboard.DOM_VK_NUMPAD5 = 101;
openfl.ui.Keyboard.DOM_VK_NUMPAD6 = 102;
openfl.ui.Keyboard.DOM_VK_NUMPAD7 = 103;
openfl.ui.Keyboard.DOM_VK_NUMPAD8 = 104;
openfl.ui.Keyboard.DOM_VK_NUMPAD9 = 105;
openfl.ui.Keyboard.DOM_VK_MULTIPLY = 106;
openfl.ui.Keyboard.DOM_VK_ADD = 107;
openfl.ui.Keyboard.DOM_VK_SEPARATOR = 108;
openfl.ui.Keyboard.DOM_VK_SUBTRACT = 109;
openfl.ui.Keyboard.DOM_VK_DECIMAL = 110;
openfl.ui.Keyboard.DOM_VK_DIVIDE = 111;
openfl.ui.Keyboard.DOM_VK_F1 = 112;
openfl.ui.Keyboard.DOM_VK_F2 = 113;
openfl.ui.Keyboard.DOM_VK_F3 = 114;
openfl.ui.Keyboard.DOM_VK_F4 = 115;
openfl.ui.Keyboard.DOM_VK_F5 = 116;
openfl.ui.Keyboard.DOM_VK_F6 = 117;
openfl.ui.Keyboard.DOM_VK_F7 = 118;
openfl.ui.Keyboard.DOM_VK_F8 = 119;
openfl.ui.Keyboard.DOM_VK_F9 = 120;
openfl.ui.Keyboard.DOM_VK_F10 = 121;
openfl.ui.Keyboard.DOM_VK_F11 = 122;
openfl.ui.Keyboard.DOM_VK_F12 = 123;
openfl.ui.Keyboard.DOM_VK_F13 = 124;
openfl.ui.Keyboard.DOM_VK_F14 = 125;
openfl.ui.Keyboard.DOM_VK_F15 = 126;
openfl.ui.Keyboard.DOM_VK_F16 = 127;
openfl.ui.Keyboard.DOM_VK_F17 = 128;
openfl.ui.Keyboard.DOM_VK_F18 = 129;
openfl.ui.Keyboard.DOM_VK_F19 = 130;
openfl.ui.Keyboard.DOM_VK_F20 = 131;
openfl.ui.Keyboard.DOM_VK_F21 = 132;
openfl.ui.Keyboard.DOM_VK_F22 = 133;
openfl.ui.Keyboard.DOM_VK_F23 = 134;
openfl.ui.Keyboard.DOM_VK_F24 = 135;
openfl.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
openfl.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145;
openfl.ui.Keyboard.DOM_VK_COMMA = 188;
openfl.ui.Keyboard.DOM_VK_PERIOD = 190;
openfl.ui.Keyboard.DOM_VK_SLASH = 191;
openfl.ui.Keyboard.DOM_VK_BACK_QUOTE = 192;
openfl.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219;
openfl.ui.Keyboard.DOM_VK_BACK_SLASH = 220;
openfl.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221;
openfl.ui.Keyboard.DOM_VK_QUOTE = 222;
openfl.ui.Keyboard.DOM_VK_META = 224;
openfl.ui.Keyboard.DOM_VK_KANA = 21;
openfl.ui.Keyboard.DOM_VK_HANGUL = 21;
openfl.ui.Keyboard.DOM_VK_JUNJA = 23;
openfl.ui.Keyboard.DOM_VK_FINAL = 24;
openfl.ui.Keyboard.DOM_VK_HANJA = 25;
openfl.ui.Keyboard.DOM_VK_KANJI = 25;
openfl.ui.Keyboard.DOM_VK_CONVERT = 28;
openfl.ui.Keyboard.DOM_VK_NONCONVERT = 29;
openfl.ui.Keyboard.DOM_VK_ACEPT = 30;
openfl.ui.Keyboard.DOM_VK_MODECHANGE = 31;
openfl.ui.Keyboard.DOM_VK_SELECT = 41;
openfl.ui.Keyboard.DOM_VK_PRINT = 42;
openfl.ui.Keyboard.DOM_VK_EXECUTE = 43;
openfl.ui.Keyboard.DOM_VK_SLEEP = 95;
openfl.utils.Endian.BIG_ENDIAN = "bigEndian";
openfl.utils.Endian.LITTLE_ENDIAN = "littleEndian";
screens.GameScreen.GAME_AREA_WIDTH = 828;
screens.GameScreen.NUM_OF_SECTIONS = 3;
screens.GameScreen.NUM_OF_SUBSECTIONS = 3;
screens.GameScreen.SECTION_CHANGE_FLAG = 5;
screens.GameScreen.MISS_LIMIT = 20;
screens.GameScreen.COMBO_REQ = 5;
screens.GameScreen.DESPAWN_TIME = 15;
screens.GameScreen.STUN_FRAME_COUNT = 60;
screens.GameScreen.LEVEL_PROGRESSION_FLAG = 15;
screens.GameScreen.SPEED_LIMIT = 50;
screens.LoadingScreenBG.resourceType = "image/png";
screens.LoadingScreenBG.resourceName = "__ASSET__:bitmap_screens_LoadingScreenBG";
screens.LoadingBarCover.resourceType = "image/png";
screens.LoadingBarCover.resourceName = "__ASSET__:bitmap_screens_LoadingBarCover";
screens.LoadingBarContainer.resourceType = "image/png";
screens.LoadingBarContainer.resourceName = "__ASSET__:bitmap_screens_LoadingBarContainer";
screens.LoadingBar.resourceType = "image/png";
screens.LoadingBar.resourceName = "__ASSET__:bitmap_screens_LoadingBar";
spritesheet.data.BehaviorData.uniqueID = 0;
ApplicationMain.main();
})(typeof window != "undefined" ? window : exports);
