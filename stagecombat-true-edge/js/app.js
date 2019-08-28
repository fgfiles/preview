$( document ).ready(function() {
	
	"use strict";


	//Timer Vars
	var startTime = 0;
	var start = 0;
	var end = 0;
	var diff = 0;
	var currentTime = '0:00:00:000';
	var timerID = 0;
	
	function chrono(){
		end = new Date();
		diff = end - start;
		diff = new Date(diff);
		var msec = diff.getMilliseconds();
		var sec = diff.getSeconds();
		var min = diff.getMinutes();
		var hr = diff.getHours()-1;
		if (min < 10){
			min = "0" + min;
		}
		if (sec < 10){
			sec = "0" + sec;
		}
		if(msec < 10){
			msec = "00" +msec;
		}
		else if(msec < 100){
			msec = "0" +msec;
		}
		currentTime =  hr + ":" + min + ":" + sec + ":" + msec;
		//document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
		timerID = setTimeout(chrono, 10);

	}
	function chronoStart(){
		//document.chronoForm.startstop.value = "stop!"
		//document.chronoForm.startstop.onclick = chronoStop
		//document.chronoForm.reset.onclick = chronoReset
		start = new Date()
		chrono();
	}
	
	/*function chronoContinue(){
		document.chronoForm.startstop.value = "stop!"
		document.chronoForm.startstop.onclick = chronoStop
		document.chronoForm.reset.onclick = chronoReset
		start = new Date()-diff
		start = new Date(start)
		chrono()
	}
	function chronoReset(){
		document.getElementById("chronotime").innerHTML = "0:00:00:000"
		start = new Date()
	}
	function chronoStopReset(){
		document.getElementById("chronotime").innerHTML = "0:00:00:000"
		document.chronoForm.startstop.onclick = chronoStart
	}
	*/	function chronoStop(){
		//document.chronoForm.startstop.value = "start!"
		//document.chronoForm.startstop.onclick = chronoContinue
		//document.chronoForm.reset.onclick = chronoStopReset
		clearTimeout(timerID);
	}

	console.log( "ready!" );

	//Preloader	
	var map = {};
	var preload;
	var loader;
	var manifest;

	//Canvas
	var canvas = document.getElementById('output');

	//vars	
	var mouseTarget;

	//Swing loop times
	var looptimes = 0;

	//Get context
	var ctx = canvas.getContext('2d');

	//Get browser dimensions	
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;	
	canvas.style.backgroundColor = "#000000";

	//Easeljs	
	var stage = new createjs.Stage(canvas);

	//Frame Container;
	var frame = new createjs.Container();
	frame.name = 'Frame Container';
	//UI Container;
	var UI = new createjs.Container();
	UI.name = 'UI Container';

	stage.addChild(frame);
	stage.addChild(UI);


	// enable touch interactions if supported on the current device:
	createjs.Touch.enable(stage);

	// enabled mouse over / out events
	stage.enableMouseOver(10);
	stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas

	createjs.Ticker.framerate = 30;


	//Video var
	var	video;
	var myBuffer;


	function loadLoader(){


	//	$('.background').css('background-image', 'url(' + '/imgSource' + ')');

			init();
			loadAll();	

		//preloadLoader = new createjs.LoadQueue(true , 'images/');
		//preloadLoader = new createjs.LoadQueue(false, 'images/');
		//preloadLoader.on("fileload", handleFileLoaded);
		//preloadLoader.on("complete", handleFileLoaded);
	//					
	//					item = {
	//						src: 'introbgx@1x.png',
	//						id: 'introbgx@1x'
	//					};

	//	preloadLoader.loadFile(item, true);
	}
//	function handleFileLoaded(event) {

	//						var imgSource = preloadLoader.getItem("introbgx@1x").src;
	//						$('.background').css('background-image', 'url(' + imgSource + ')');
	//					
	//						preloadLoader.close();
	//		

//	}


	//Init
	function init() {
		console.log('INIT');
		reload();
	}


	// Reset everything
	function reload() {
		// If there is an open preload queue, close it.
		if (preload != null) {
			preload.close();
		}

		// Reset the UI
		$("#mainProgress .progress").width(0);

		// Push each item into our manifest
		manifest = [


			{id:"logo", src:"logo.svg"},

			{id:"headphones", src:"headphones.svg", type: createjs.LoadQueue.IMAGE},
			
			
			{id:"ribbon_green", src:"ribbon_green.svg", type: createjs.LoadQueue.IMAGE},
			{id:"ribbon_red", src:"ribbon_red.svg", type: createjs.LoadQueue.IMAGE},
			
			{id:"text_merit", src:"text_merit.svg", type: createjs.LoadQueue.IMAGE},
			{id:"text_youlose", src:"text_youlose.svg", type: createjs.LoadQueue.IMAGE},
			
			
			{id:"facebook_green", src:"facebook_green.svg", type: createjs.LoadQueue.IMAGE},
			{id:"twitter_green", src:"twitter_green.svg", type: createjs.LoadQueue.IMAGE},
			
			{id:"facebook_red", src:"facebook_red.svg", type: createjs.LoadQueue.IMAGE},
			{id:"twitter_red", src:"twitter_red.svg", type: createjs.LoadQueue.IMAGE},


			//INTRO ELEMENTS;
			{id:"intro", src:"./sounds/intro.ogg", type: createjs.Types.SOUND},
			{id:"heart", src:"./sounds/heartbeat.ogg", type: createjs.Types.SOUND},
			{id:"beat", src:"./sounds/single_heartbeat.ogg", type: createjs.Types.SOUND},
			{id:"death", src:"./sounds/death.ogg", type: createjs.Types.SOUND},


			//Videos
/*
			{id:"scene1", src:"./videos/scene1.mp4"},
			{id:"scene1loop", src:"./videos/scene1loop.mp4"},
			{id:"scene2_1", src:"./videos/scene2_1.mp4"},
			{id:"scene2loop", src:"./videos/loopSwingStableStatic2.mp4"},
			{id:"timetofight", src:"./videos/timetofight.mp4"},
			{id:"scene2_1_3", src:"./videos/scene2_1_3.mp4"},
			{id:"scene2_1_4", src:"./videos/scene2_1_4.mp4"},
			{id:"scene2_1_4_1", src:"./videos/scene2_1_4_1.mp4"},
			{id:"scene2_1_5", src:"./videos/scene2_1_5.mp4"},
			{id:"scene2_1_5_1", src:"./videos/scene2_1_5_1.mp4"},
			{id:"scene2_1_6", src:"./videos/scene2_1_6.mp4"},
			{id:"stab_scene", src:"./videos/stab.mp4"},
			{id:"scene2_1_7", src:"./videos/scene2_1_7.mp4"},
			{id:"scene_death", src:"./videos/scene_death.mp4"},
*/
			//Images

			{id:"sword", src:"sword.png"},
			{id:"stick", src:"stick.png"},
			{id:"rapier", src:"rapier.png"},
			{id:"glow", src:"glow.png"},


			{id:"logoUI", src:"logoui.png"},
			{id:"backgroundFrame", src:"introbg2.png"},
			{src:"full-screen.svg", id:"fullScreen", type: createjs.LoadQueue.IMAGE},




			{id:"grunge", src:"grunge-png-35084.png"},
			{id:"grungeblood", src:"grunge-bg.png"},

			{id:"spacebar", src:"buttonspacebar.png"},


			//{id:"meter", src:"meter.png"},

			{id:"meter1", src:"meter1.png"},
			{id:"meter2", src:"meter2.png"},
			{id:"meter3", src:"meter3.png"},
			{id:"meter4", src:"meter4.png"},
			{id:"meter5", src:"meter5.png"},
			{id:"meter6", src:"meter6.png"},

			{id:"swordpoint", src:"swordpoint2.png"},

			{id:"target1", src:"target1.png"},
			{id:"target2", src:"target2.png"},
			{id:"miss", src:"miss.png"},


			{id:"upArrow", src:"arrow_u.png"},
			{id:"downArrow", src:"arrow_d.png"},
			{id:"leftArrow", src:"arrow_l.png"},
			{id:"rightArrow", src:"arrow_r.png"},

			{id:"title_choose_weapon", src:"chooseyourweapon.png"},

			{id:"title_choose", src:"choosetext.png"},
			{id:"title_your", src:"yourtext.png"},
			{id:"title_weapon", src:"weapontext.png"},






			{id:"title_choose_block", src:"chooseblock.png"},
			{id:"title_choose_block2", src:"chooseblock2.png"},

			{id:"title_target", src:"hit_target.png"},
			{id:"title_grade", src:"yourgrade.png"},



			{id:"title_you_lose", src:"you_lose.png"},
			{id:"title_swing", src:"swing.png"},
			{id:"title_timetofight", src:"timetofight.png"},


		];

		// Create a preloader. There is no manifest added to it up-front, we will add items on-demand.
		preload = new createjs.LoadQueue(true, "./images/");

		preload.installPlugin(createjs.Sound);

		// Use this instead to use tag loading
		//preload = new createjs.LoadQueue(false);

		preload.on("fileload", handleFileLoad);
		preload.on("progress", handleOverallProgress);
	//	preload.on("fileprogress", handleFileProgress);
		preload.on("error", handleFileError);
		preload.on("complete", handleComplete);


		preload.setMaxConnections(5);
	}

	//Stop?	
	function stop() {
		if (preload != null) {
			preload.close();
		}
	}
	//Loader	
	function loadAll() {
		while (manifest.length > 0) {
			loadAnother();
		}
	}
	// Loader single	
	function loadAnother() {
		// Get the next manifest item, and load it
		var item = manifest.shift();
		preload.loadFile(item);

	}

	// File complete handler
	var scenes = [];


	function handleFileLoad(event) {

		console.log('File loaded: ' + event.item.id)

		// Get a reference to the loaded item
		var item = event.result;

		// build the DOM

		if (event.item.id == "logo"){
			$(".logo_container").append(item);	
		}


	//					if (event.item.id == "menu.svg"){
	//						$(".menu").append(item);	
	//					}	

		if (event.item.id == "headphones"){
			$(".headphones").prepend(item);	
		}

	//					if (event.item.id == "interactive.svg"){
	//						$(".screen__title.interactive").prepend(item);	
	//					}

	//					if (event.item.id == "home1.jpg"){
	//						var canvas = document.createElement('canvas');
	//						canvas.width = item.width;
	//						canvas.height = item.height;
	//						canvas.getContext('2d').drawImage(item, 0,0);
	//						dataURI = canvas.toDataURL(); 
	//						$(".screen__home").css("background-image" ,"url(" + dataURI + ")");
	//						//document.removeChild(canvas)
	//					}

		if (event.item.id == "scene1"){
			item.id = "scene1";
			scenes['scene_1'] = item;
			$(".video_scenes").prepend(item);
			var videoElement = document.getElementById('scene1');	
			videoElement.play();
			videoElement.pause();


		}

		if (event.item.id == "scene1loop"){
			item.id = "scene1loop";
			$(".video_scenes").prepend(item);	
		}				
		if (event.item.id == "scene2loop"){
			item.id = "scene2loop";
			$(".video_scenes").prepend(item);	
		}		
		if (event.item.id == "timetofight"){
			item.id = "timetofight";
			$(".video_scenes").prepend(item);	
		}	

	//					if (event.item.id == "scene2swing1"){
	//						item.id = "scene2swing1";
	//						$(".video_scenes").prepend(item);	
	//					}	
	//					
	//						if (event.item.id == "scene2swing2"){
	//						item.id = "scene2swing2";
	//						$(".video_scenes").prepend(item);	
	//					}	
	//						if (event.item.id == "scene2swing3"){
	//						item.id = "scene2swing3";
	//						$(".video_scenes").prepend(item);	
	//					}	
			if (event.item.id == "scene2swing4"){
			item.id = "scene2swing4";
			$(".video_scenes").prepend(item);	
		}	








		if (event.item.id == "scene2swingit"){
			item.id = "scene2swingit";
			$(".video_scenes").prepend(item);	
		}	



		if (event.item.id == "scene2swing1"){
			item.id = "scene2swing1";
			$(".video_scenes").prepend(item);	
		}	

		if (event.item.id == "scene2_1"){
			item.id = "scene2_1";
			$(".video_scenes").prepend(item);	
		}	

		if (event.item.id == "scene2_1_3"){
			item.id = "scene2_1_3";
			$(".video_scenes").prepend(item);	
		}	

		if (event.item.id == "scene2_1_4"){
			item.id = "scene2_1_4";
			$(".video_scenes").prepend(item);	
		}

		if (event.item.id == "scene2_1_4_1"){
			item.id = "scene2_1_4_1";
			$(".video_scenes").prepend(item);	
		}	

		if (event.item.id == "scene2_1_5"){
			item.id = "scene2_1_5";
			$(".video_scenes").prepend(item);	
		}	

		if (event.item.id == "scene2_1_5_1"){
			item.id = "scene2_1_5_1";
			$(".video_scenes").prepend(item);	
		}	



		if (event.item.id == "scene2_1_6"){
			item.id = "scene2_1_6";
			$(".video_scenes").prepend(item);	
		}	
		if (event.item.id == "stab_scene"){
			item.id = "stab_scene";
			$(".video_scenes").prepend(item);	
		}	

		if (event.item.id == "scene2_1_7"){
			item.id = "scene2_1_7";
			$(".video_scenes").prepend(item);	
		}	

		if (event.item.id == "scene_death"){
			item.id = "scene_death";
			$(".video_scenes").prepend(item);	
		}
	}

	// File progress handler /*remove*/
	function handleFileProgress(event) {
		var div = map[event.item.id]; // Lookup the related item
		div.children("DIV").width(event.progress * div.width()); // Set the width the progress.
	}

	// Overall progress handler
	function handleOverallProgress(event) {
	//	$("#mainProgress > .progress").width(preload.progress * $("#mainProgress").width());
		$("#mainProgress > .progress").css( 'width' , Math.ceil(preload.progress*100) + "%" );

		$("#mainProgress > .percentage").text( Math.ceil(preload.progress*100) + "%");
	}

	// An error happened on a file
	function handleFileError(event) {
		//console.log(event.item.id);
		console.log(event.title);
		console.log(event.message);
		console.log(event.data);
		console.log("error");
	}

	// Everything is loaded
	function handleComplete(event) {	


		setTimeout(function(){ 
			//$(".screen__loader").fadeOut();
			$("header").fadeIn();
			$("footer").fadeIn();
			//$(".screen__home").fadeIn();


		}, 1000);
			//Play intro music?
	//		createjs.Sound.play("intro");
	}

	//PASS?
	function calculateScaleFrame(video){

		//Calculate Scale and center in canvas;
	//					var frameVscale = (((canvas.height*100)/video.videoHeight)/100);
		var frameHscale = (((canvas.width*100)/video.videoWidth)/100);	

//		var diffx = 0;
//		var diffy = 0;

	///	if (frameVscale > frameHscale){
	//		frameScale = frameVscale;
	//	}else{
		var frameScale = frameHscale;
	//	}

	//	scaledHeight = (video.videoHeight*frameScale)
	//	diff_y = scaledHeight - canvas.height;	
	//	scaledWidth = (video.videoWidth*frameScale)
	//	diff_x = scaledWidth - canvas.width;	

	//	if (diff_y > 0){
	//		diffy =-1 *( diff_y/2);
	//	}
	//	if (diff_x > 0){
	//		diffx = -1 *(diff_x/2);
	//	}

		var dimensions = {};
		dimensions.frameScale = frameScale;
		//dimensions.x = diffx;
	//	dimensions.y = diffy;
		//console.log(dimensions);

		return dimensions;
	}		


	/**
	 * @param {string} start - videoID.
	 * @param {function} end - Function to execute at the end.
	 */	

	var CurrentVideo = '';
	var dimensions = '';
	var myFrame = '';
	var buffer = '';

	//Load background mask image
	var grunge = '';
	var bitmap_grunge = '';

	var current_Scene = '';


	function playscene (start, end , speed){
		console.log('Play Scene');

		if (speed == null){
			speed = 1;
		}

		CurrentVideo = document.getElementById(start);	
		buffer = new createjs.VideoBuffer(CurrentVideo);
		myFrame = new createjs.Bitmap(buffer);
		dimensions = calculateScaleFrame(CurrentVideo);

		myFrame.scale = dimensions.frameScale;
	//					myFrame.x = dimensions.x;
	//					myFrame.y = dimensions.y;

		myFrame.regY = CurrentVideo.videoHeight/2;
		myFrame.regX = CurrentVideo.videoWidth/2;

		myFrame.x = canvas.width/2;
		myFrame.y = canvas.height/2;

		console.log('Canvas H : ' +canvas.height );
		console.log('Canvas W : ' +canvas.width );
		console.log('Videos Y : ' +myFrame.y);
		console.log('Videos X : ' +myFrame.x);
		console.log('Videos Scale : ' +myFrame.scale);
		console.log('Videos H : ' +CurrentVideo.videoHeight);
		console.log('Videos W : ' +CurrentVideo.videoWidth);




		stage.addChild(myFrame);
		CurrentVideo.playbackRate = speed;
		CurrentVideo.play();
	//	CurrentVideo.setAttribute('loop', true);


		if (end != null){

			CurrentVideo.addEventListener('ended', function(){

				console.log('Scene end');

				CurrentVideo.pause();

				stage.removeAllChildren();
				stage.update();

				end();

			}, false);

		}else{

			CurrentVideo.addEventListener('ended', function(){



				console.log('Scene end');

				CurrentVideo.pause();
				stage.removeAllChildren();
				stage.update();

			}, false);

		}

	}

	//Choose the Weapon Scene Interactive
	function choseyourweapon(e) {

		current_Scene = 'chooseweapon';

		CurrentVideo = document.getElementById('scene1loop');	
		CurrentVideo.setAttribute('loop', true);

		buffer = new createjs.VideoBuffer(CurrentVideo);
		myFrame = new createjs.Bitmap(buffer);
		dimensions = calculateScaleFrame(CurrentVideo);

		myFrame.scale = dimensions.frameScale;
		myFrame.regY = CurrentVideo.videoHeight/2
		myFrame.regX = CurrentVideo.videoWidth/2

		myFrame.x = canvas.width/2
		myFrame.y = canvas.height/2

		stage.addChild(myFrame);


		//Preload Stuff
		var sword = preload.getResult("sword");
		var stick = preload.getResult("stick");
		var rapier = preload.getResult("rapier");
		var glow = preload.getResult("glow");

		//var grunge = preload.getResult("grunge");

		var update = true;

		//GRID		
		var hgrid = ctx.canvas.width/3;
		var vgrid = ctx.canvas.height/4;





		var title = ["title_choose", "title_your", "title_weapon"];

		add_SceneTitle(title);






		stage.addChild(UI);


		var WeaponUI = new createjs.Container();

		rapier = renderWeapon("rapier", hgrid+(hgrid/2) , vgrid*2, -16, rapier ,0);
		stick = renderWeapon("stick",  hgrid*2 , vgrid*2, 0, stick , 800);
		sword = renderWeapon("sword",  hgrid*2 + (hgrid/2) , vgrid*2, 16, sword ,1600);

		WeaponUI.addChild(rapier);
		WeaponUI.addChild(stick);
		WeaponUI.addChild(sword);

		var uiDimension = WeaponUI.getBounds();
		WeaponUI.regY = uiDimension.height/2;
		WeaponUI.y =  canvas.height/2;
		//WeaponUI.regX = uiDimension.width/3;
		WeaponUI.x =  -hgrid/6;


		rapier.y = uiDimension.height/2;
		stick.y = uiDimension.height/2;
		sword.y = uiDimension.height/2;



		stage.addChild(WeaponUI);

		createjs.Ticker.addEventListener('tick', WeaponUpdate);

		function WeaponUpdate(){
			WeaponUI.scale = (canvas.width/uiDimension.width) * 0.5 
			WeaponUI.y = canvas.height/2

		}

		function renderWeapon(name, x, y, angle, weapon , delay ){


			var container2 = new createjs.Container();

			var bitmap = new createjs.Bitmap(weapon);
			var ratio = sword.height/sword.width;
			bitmap.x = x;

			bitmap.rotation = angle;

			bitmap.regX = bitmap.image.width / 2 | 0;
			bitmap.regY = bitmap.image.height / 2 | 0;

			bitmap.scale = bitmap.originalScale = 0.35;
			bitmap.name = name;
			bitmap.alpha = 0;

			//stage.addChild(container = new createjs.Container());


			//WeaponsUI;



			var hit = new createjs.Shape();
			hit.graphics.beginStroke("red").beginFill("red").drawRect(0, 0,  weapon.width*0.5, weapon.height*0.5);
			hit.name = 'hit';
			hit.x = x;
			//hit.y = y;
			hit.regX =  bitmap.image.width / 4 | 0;
			hit.regY =  bitmap.image.height / 4 | 0;
			hit.rotation = angle;
			hit.alpha = .8;

			//container2.addChild(hit);

			container2.hitArea = hit;
			container2.cursor = "pointer";	

			container2.addChild(bitmap);

			//stage.addChild(container2);

			//UI.addChild(bitmap);

			createjs.Tween.get(bitmap).wait(delay).to({alpha:1}, 1000);
			var bitmap_glow ;

			container2.on("mouseover", function (evt) {

				console.log('IN')

				bitmap_glow = new createjs.Bitmap(glow);
				ratio = sword.height/sword.width;

				bitmap_glow.x = x;
				//bitmap_glow.y = y;
				bitmap_glow.regX =  bitmap_glow.image.width / 2 | 0;
				bitmap_glow.regY =  bitmap_glow.image.height / 2 | 0;;
				bitmap_glow.rotation = angle;
				bitmap_glow.scale =  0.4 ;
				bitmap_glow.name = "glow";
				bitmap_glow.apha = 0;

				container2.addChild(bitmap_glow);
				bitmap.parent.addChild(bitmap);

				createjs.Tween.get(bitmap_glow).to({apha:1},400); 
				createjs.Tween.get(bitmap).to({scale:bitmap.originalScale * 1.2},250); 

				update = true;
			});

			container2.on("mouseout", function (evt) {
				console.log('OUT')

				createjs.Tween.get(bitmap_glow).to({apha:0},400); 
				createjs.Tween.get(bitmap).to({scale:bitmap.originalScale},250) 
				container2.removeChild(bitmap_glow);
				update = true;

			});

			container2.on("mousedown", function (evt) {

					//TODO: SCENE ROUTER GO HERE DEPENDING OF THE SELECTION.

					//Remove UI;
					UI.removeAllChildren();
					stage.removeAllChildren();

					//createjs.Tween.get(bitmap_grunge).to({alpha:0}, 1000).call(function(){
					CurrentVideo.pause();
					CurrentVideo.parentNode.removeChild(CurrentVideo);

					$('.title_canvas').empty();
					$('.title_canvas').hide();

					playscene2_1();

					//});
			});


			return  container2;
		}

		//createjs.Ticker.addEventListener('tick', stage);

		CurrentVideo.play();
	}		

	//Scene after choosing the weapon
	function playscene2_1(){
		console.log('Play Scene 2-1');
		playscene('scene2_1', swingYourWeapon);
	}


	var scalemeter = 0;
	var contentmeter;
	//Start meter at 1;
	var fillmeter = 1;
	//Swing your weapon Scene Interactive

	var count = 0;
	var seconds = 0;

	var powerbar;

	function pulse(event) {
		console.log('PULSE');



		count++;
		//Start Hearbeats
		if (count == 5){

			if (fillmeter >=1){

				fillmeter --;
				console.log('go down');
				powerbar.graphics.clear().beginLinearGradientFill(["#FF0000",  "#0000FF" ,"#00FF00", ], [ 0 ,.5, 1], 0, 0, 0, 300)
			.drawRect(0, 0,  50, 3*fillmeter );
				//createjs.Tween.get(contentmeter).to({scaleY: 1 * fillmeter},150) 
			}

		}

		if (count == 10){
			seconds++
			count = 0;
		}

		stage.update(event); // important!
	}



	var hold =  0;

	function swingYourWeapon(){

			console.log('Swing Your Weapon!')

			CurrentVideo = document.getElementById('scene2loop');	
			CurrentVideo.setAttribute('loop', true);

			buffer = new createjs.VideoBuffer(CurrentVideo);
			myFrame = new createjs.Bitmap(buffer);
			dimensions = calculateScaleFrame(CurrentVideo);

			myFrame.scale = dimensions.frameScale;
			myFrame.regY = CurrentVideo.videoHeight/2
			myFrame.regX = CurrentVideo.videoWidth/2

			myFrame.x = canvas.width/2
			myFrame.y = canvas.height/2

			CurrentVideo.play();

			stage.addChild(myFrame);

			//add_BackgroundGrunge();
			add_SceneTitle(['title_swing']);
			render_spacebar();


			//	Render Meter UI;
		/*
			var meter1 = preload.getResult("meter1");

			bitmap_meter1 =  new createjs.Bitmap(meter1);
			bitmap_meter1.name = "meter";
			//065
			bitmap_meter1.x =  (canvas.width ) - canvas.width*0.075;
			bitmap_meter1.y =  ctx.canvas.height/2  +  meter1.height*2 + 10;


			var meter2 = preload.getResult("meter2");

			bitmap_meter2 =  new createjs.Bitmap(meter2);
			bitmap_meter2.name = "meter";
			bitmap_meter2.x =  (canvas.width ) - canvas.width*0.075;
			bitmap_meter2.y =  ctx.canvas.height/2 +   meter2.height*1 + 5;


			var meter3 = preload.getResult("meter3");

			bitmap_meter3 =  new createjs.Bitmap(meter3);
			bitmap_meter3.name = "meter";
			bitmap_meter3.x =  (canvas.width ) - canvas.width*0.075;
			bitmap_meter3.y =  ctx.canvas.height/2 ;


			var meter4 = preload.getResult("meter4");

			bitmap_meter4 =  new createjs.Bitmap(meter4);
			bitmap_meter4.name = "meter";
			bitmap_meter4.x =  (canvas.width ) - canvas.width*0.075;
			bitmap_meter4.y =  ctx.canvas.height/2 -  meter4.height - 5;



			var meter5 = preload.getResult("meter5");

			bitmap_meter5 =  new createjs.Bitmap(meter5);
			bitmap_meter5.name = "meter";
			bitmap_meter5.x =  (canvas.width ) - canvas.width*0.075;
			bitmap_meter5.y =  ctx.canvas.height/2 - meter5.height*2 - 10;



			var meter6 = preload.getResult("meter6");

			bitmap_meter6 =  new createjs.Bitmap(meter6);
			bitmap_meter6.name = "meter";
			bitmap_meter6.x =  (canvas.width ) - canvas.width*0.075;
			bitmap_meter6.y =  ctx.canvas.height/2 -  meter5.height*3 -15;
*/


			powerbar = new createjs.Shape();


			powerbar.graphics
			.beginLinearGradientFill(["#FF0000", "#0000FF" , "#00FF00"], [ 0 ,.5, 1] , 0, 0, 0, 300)
			.drawRect(0, 0,  50, 0 );

			powerbar.x = (canvas.width ) - canvas.width*0.075;
			powerbar.y = ctx.canvas.height/2 + 150;

			powerbar.rotation= 180;

			UI.addChild(powerbar);

			console.log('Add Pulse Listener')
			createjs.Ticker.addEventListener("tick", pulse);

			//createjs.Ticker.removeEventListener("tick", pulse);

			stage.addChild(UI);
			stage.update();
			createjs.Ticker.addEventListener('tick', stage);

			CurrentVideo.play();

			//Listen to Spacebar;

			$("body").on("keydown", function(e){

				if ( hold == 0) {

					if(e.keyCode == 32){

						console.log(fillmeter);


						powerbar.graphics.clear().beginLinearGradientFill(["#FF0000",  "#0000FF" ,"#00FF00", ], [ 0 ,.5, 1], 0, 0, 0, 300)
			.drawRect(0, 0,  50, 3*fillmeter );


						if ( (fillmeter == 100) ){

							setTimeout(function() {
							hold = 1;

							UI.removeAllChildren();

							CurrentVideo.pause();

							///scene2swingit
							CurrentVideo = document.getElementById('scene2_1_3');	

							buffer = new createjs.VideoBuffer(CurrentVideo);
							myFrame = new createjs.Bitmap(buffer);
							dimensions = calculateScaleFrame(CurrentVideo);

							myFrame.scale = dimensions.frameScale;
							myFrame.regY = CurrentVideo.videoHeight/2
							myFrame.regX = CurrentVideo.videoWidth/2

							myFrame.x = canvas.width/2
							myFrame.y = canvas.height/2

							CurrentVideo.play();

							stage.addChild(myFrame);
							stage.addChild(UI);
							stage.update();

							CurrentVideo.addEventListener('ended', function(){

								CurrentVideo.pause();
								stage.removeChild(myFrame);

								$("body").off("keyup");

								createjs.Ticker.removeEventListener("tick", pulse);

								scene_time_to_fight();

								hold = 0;

							 } , false);


							}, 500);
						}


						if (fillmeter >= 100){

							console.log('Meter Full');


						}else{

							fillmeter ++;
						}


						//contentmeter.graphics.drawRoundRect(0,0, 50 , 60*fillmeter , 10);
						//createjs.Tween.get(contentmeter).

					}

				}	

			});

	}





	var countRad = 0;
	var degree = 1;
	
	var exec1 = 0;
	
	function scene_time_to_fight (){

		console.log('Scene Time to Fight');

		CurrentVideo = document.getElementById('timetofight');	
		CurrentVideo.setAttribute('loop', true);

		buffer = new createjs.VideoBuffer(CurrentVideo);
		myFrame = new createjs.Bitmap(buffer);
		dimensions = calculateScaleFrame(CurrentVideo);

		myFrame.scale = dimensions.frameScale;
		myFrame.regY = CurrentVideo.videoHeight/2
		myFrame.regX = CurrentVideo.videoWidth/2

		myFrame.x = canvas.width/2
		myFrame.y = canvas.height/2

		stage.addChild(myFrame);
		CurrentVideo.play();

		//Scene Title;
		add_SceneTitle(['title_timetofight']);

		
		renderFramefight();	

		//timer;
		var countdownTimer = new createjs.Text();
		var bg = new createjs.Shape();
		var countdown = 5;

		//add_SceneTimer(countdownTimer, bg, countdown);
		//endtimer


		function renderFramefight(event) {
			
			if (exec1 == 0){

				exec1 = 1;

				console.log('TRIGGER ONCE1')

				stage.addChild(UI);
	//							tweendownArrow.gotoAndPlay(0);


				var timer = new Timer('100 milliseconds');
				timer.every('1 seconds', function () {

					if (countdown  < 1){
						

						createjs.Tween.removeAllTweens();
						UI.removeAllChildren();

						timer.stop();
						timer.clear();

						//createjs.Ticker.removeAllEventListeners();
						//button1.removeAllChildren();
						//stage.removeAllChildren();

						CurrentVideo.pause();
						play_scene2_1_4();
						return;
					}
					countdown--;
				});
				timer.start();

			}

		}

		stage.update(event);
	}

	function add_SceneTimer(countdownTimer, bg, countdown){


		countdownTimer.set({
				text: countdown,
				textAlign: "center",
				textBaseline: "middle",
				color: '#fff',
				font: 'bold 50px Arial',
				x: (ctx.canvas.width/2),
				y: (ctx.canvas.height/2)
		});
		UI.addChild(countdownTimer);

		drawCCircle(bg.graphics, 'rgb(255, 255, 255)', (ctx.canvas.width/2)-2, (ctx.canvas.height/2)-2, 60, 55, 0, 360);
		UI.addChild(bg);

		var shape = new createjs.Shape();
		shape.rotation = 270;
		shape.x = (ctx.canvas.width/2)-2;
		shape.y = (ctx.canvas.height/2)-2;

		UI.addChild(shape);

		stage.addChild(UI);


	}

	//			{id:"upArrow", src:"arrow_u.png"},
	//			{id:"downArrow", src:"arrow_d.png"},
	//			{id:"leftArrow", src:"arrow_l.png"},
	//			{id:"rightArrow", src:"arrow_r.png"},

	function play_scene2_1_4() {


		console.log('PLAY 2 1 4')
	//					//Load Arrows
	//					var upArrow = preload.getResult("upArrow");
	//					var downArrow = preload.getResult("downArrow");
	//					
	//					

		playscene('scene2_1_4', play_scene2_1_4_interactive);


	}


	function play_scene2_1_4_interactive(){

		console.log('PLAY 2 1 4 Interactive')
		//Load Arrows
		var upArrow = preload.getResult("upArrow");
		var downArrow = preload.getResult("downArrow");


		CurrentVideo = document.getElementById('scene2_1_4_1');	
		buffer = new createjs.VideoBuffer(CurrentVideo);
		myFrame = new createjs.Bitmap(buffer);
		dimensions = calculateScaleFrame(CurrentVideo);

		myFrame.scale = dimensions.frameScale;
		myFrame.regY = CurrentVideo.videoHeight/2
		myFrame.regX = CurrentVideo.videoWidth/2

		myFrame.x = canvas.width/2
		myFrame.y = canvas.height/2

		stage.addChild(myFrame);
	//					createjs.Ticker.addEventListener('tick', stage);
		CurrentVideo.play();

		add_SceneTitle(['title_choose_block']);

		createjs.Ticker.addEventListener("tick", renderFrame);	
		// this set makes it so the stage only re-renders when an event handler indicates a change has happened.

		var containerDown = new createjs.Container();

		var DownArrow = new createjs.Bitmap(downArrow);

		DownArrow.scale = 0.5;
		DownArrow.rotation = 0;
		DownArrow.name = "downArrow";
		var textdownArrow = new createjs.Text();
		textdownArrow.set({
				text: 'Duck',
				textAlign: "center",
				textBaseline: "middle",
				color: '#fff',
				font: 'bold 20px Arial',
				y: 80,

		});
		textdownArrow.x = textdownArrow.getMeasuredWidth()/2;
		containerDown.addChild(textdownArrow);
		containerDown.addChild(DownArrow);
		containerDown.x = (ctx.canvas.width/2) - 140;
		containerDown.y = (ctx.canvas.height)-100;
		UI.addChild(containerDown);

		var textOR = new createjs.Text();
		textOR.set({
				text: 'OR',
				textAlign: "center",
				textBaseline: "middle",
				color: '#ff0000',
				font: 'bold 20px Arial',
				x: (ctx.canvas.width/2),
				y: (ctx.canvas.height)-70,
		});
		textOR.x = (ctx.canvas.width/2);
		textOR.regX = (textOR.getMeasuredWidth()/2);
		UI.addChild(textOR);

		var containerUp = new createjs.Container();
		var UpArrow = new createjs.Bitmap(upArrow);
		UpArrow.scale = 0.5;
		UpArrow.rotation = 0;

		var textUpArrow = new createjs.Text();
		textUpArrow.set({
				text: 'Jump',
				textAlign: "center",
				textBaseline: "middle",
				color: '#fff',
				font: 'bold 20px Arial',
				y: 80,
		});
		textUpArrow.x = textUpArrow.getMeasuredWidth()/2;
		containerUp.addChild(UpArrow);
		containerUp.addChild(textUpArrow);
		containerUp.x = (ctx.canvas.width/2) + 60;
		containerUp.y = (ctx.canvas.height)-100;
		UI.addChild(containerUp);



		var countdownTimer = new createjs.Text();

		var countdown = 10;
		countdownTimer.set({
				text: countdown,
				textAlign: "center",
				textBaseline: "middle",
				color: '#fff',
				font: 'bold 50px Arial',
				x: (ctx.canvas.width/2),
				y: (ctx.canvas.height/2)
		});

		UI.addChild(countdownTimer);





		var bg = new createjs.Shape();
		drawCCircle(bg.graphics, 'rgb(255, 255, 255)', (ctx.canvas.width/2)-2, (ctx.canvas.height/2)-2, 60, 55, 0, 360);
		UI.addChild(bg);

		var shape = new createjs.Shape();
		shape.rotation = 270;
		shape.x = (ctx.canvas.width/2)-2;
		shape.y = (ctx.canvas.height/2)-2;

		UI.addChild(shape);



		var triggeronce = 1;

		function renderFrame(event) {

			console.log('Render Frame 214')

			CurrentVideo = document.getElementById('scene2_1_4_1');	

			if (!CurrentVideo.paused && !CurrentVideo.ended) {

	//							console.log(CurrentVideo.currentTime);


				if (CurrentVideo.currentTime >= 0 &&  CurrentVideo.currentTime <  9.9){


	//									console.log('time : '+CurrentVideo.currentTime);
	//									console.log('count: '+countRad);
						if (  countRad < 360) {

						degree = 1 + (countRad % 360);

						console.log('degree: '+degree);
						countRad += 1.25;

						var nextDegree = 1 + (countRad % 360);
						if (nextDegree < degree) {
							degree = 360;
						}

						shape.graphics.clear();

						drawCCircle(shape.graphics, 'rgb(180, 180, 180)', 0, 0, 60, 55, 0, degree);

						stage.update();


						//	createjs.Ticker.removeEventListener('tick', renderFrame);
						}

					if (triggeronce == 1){
						triggeronce = 0;

						console.log('TRIGGER ONCE2')
						stage.addChild(UI);
						//tweendownArrow.gotoAndPlay(0);

						var timer = new Timer('100 milliseconds');
						timer.every('1 seconds', function () {

							//if (countdown  <= 4){

								//countdownTimer.color= '#880003';

								if (countdown  < 1){
								 	timer.stop();
								 	timer.clear();
									//playscene_death();
									return;
								}
							//}	
							countdown--;
							countdownTimer.text = countdown;
						});
						timer.start();


						$("body").on("keydown", function(e){
							if(e.keyCode == 40){

								$( "body" ).off( "keydown")
								createjs.Tween.removeAllTweens();
								UI.removeAllChildren();
								CurrentVideo.pause();
								CurrentVideo.currentTime = 0;

								play_scene2_1_5();

								return false; //to fix the scrolling down on space bar key press
							}
						});

					}

				}



				stage.update(event);
			}
		}	


	}



	function play_scene2_1_5(){

		console.log('PLAY 2 1 5')

		playscene('scene2_1_5', play_scene2_1_5_interactive);
	}



	function play_scene2_1_5_interactive(){

		console.log('PLAY 2 1 5 Interactive')


		var downArrow = preload.getResult("leftArrow");
		var upArrow = preload.getResult("rightArrow");

		CurrentVideo = document.getElementById('scene2_1_5_1');	
		buffer = new createjs.VideoBuffer(CurrentVideo);
		myFrame = new createjs.Bitmap(buffer);
		dimensions = calculateScaleFrame(CurrentVideo);

		myFrame.scale = dimensions.frameScale;
		myFrame.regY = CurrentVideo.videoHeight/2
		myFrame.regX = CurrentVideo.videoWidth/2

		myFrame.x = canvas.width/2
		myFrame.y = canvas.height/2;

		stage.addChild(myFrame);
		createjs.Ticker.addEventListener('tick', stage);
		CurrentVideo.play();

		add_SceneTitle(['title_choose_block2']);

		var triggeronce = 1;
		createjs.Ticker.addEventListener("tick", renderFrame);	





		var containerDown = new createjs.Container();

		var DownArrow = new createjs.Bitmap(downArrow);

		DownArrow.scale = 0.5;
		DownArrow.rotation = 0;
		DownArrow.name = "downArrow";
		var textdownArrow = new createjs.Text();
		textdownArrow.set({
				text: 'Parry Left',
				textAlign: "center",
				textBaseline: "middle",
				color: '#fff',
				font: 'bold 20px Arial',
				y: 80,

		});
		textdownArrow.x = textdownArrow.getMeasuredWidth()/2;
		DownArrow.x = textdownArrow.getMeasuredWidth()/4;
		containerDown.addChild(textdownArrow);
		containerDown.addChild(DownArrow);
		containerDown.x = (ctx.canvas.width/2) - 140;
		containerDown.y = (ctx.canvas.height)-100;
		UI.addChild(containerDown);

		var textOR = new createjs.Text();
		textOR.set({
				text: 'OR',
				textAlign: "center",
				textBaseline: "middle",
				color: '#ff0000',
				font: 'bold 20px Arial',
				x: (ctx.canvas.width/2),
				y: (ctx.canvas.height)-70,
		});
		textOR.x = (ctx.canvas.width/2);
		textOR.regX = (textOR.getMeasuredWidth()/2);
		UI.addChild(textOR);

		var containerUp = new createjs.Container();
		var UpArrow = new createjs.Bitmap(upArrow);
		UpArrow.scale = 0.5;
		UpArrow.rotation = 0;

		var textUpArrow = new createjs.Text();
		textUpArrow.set({
				text: 'Parry Right',
				textAlign: "center",
				textBaseline: "middle",
				color: '#fff',
				font: 'bold 20px Arial',
				y: 80,
		});
		UpArrow.x =  textUpArrow.getMeasuredWidth()/4;
		textUpArrow.x = textUpArrow.getMeasuredWidth()/2;
		containerUp.addChild(UpArrow);
		containerUp.addChild(textUpArrow);
		containerUp.x = (ctx.canvas.width/2) + 60;
		containerUp.y = (ctx.canvas.height)-100;
		UI.addChild(containerUp);




		var countdownTimer = new createjs.Text();

		var countdown = 10;
		countdownTimer.set({
				text: countdown,
				textAlign: "center",
				textBaseline: "middle",
				color: '#fff',
				font: 'bold 50px Arial',
				x: (ctx.canvas.width/2),
				y: (ctx.canvas.height/2)
		});
		UI.addChild(countdownTimer);



		var bg = new createjs.Shape();
		drawCCircle(bg.graphics, 'rgb(255, 255, 255)', (ctx.canvas.width/2)-2, (ctx.canvas.height/2)-2, 60, 55, 0, 360);
		UI.addChild(bg);

		var shape = new createjs.Shape();
		shape.rotation = 270;
		shape.x = (ctx.canvas.width/2)-2;
		shape.y = (ctx.canvas.height/2)-2;

		UI.addChild(shape);



		countRad = 0;
		degree = 1;


		function renderFrame(event) {

			CurrentVideo = document.getElementById('scene2_1_5_1');	

			if (!CurrentVideo.paused && !CurrentVideo.ended) {

				console.log(CurrentVideo.currentTime);


				if (CurrentVideo.currentTime >= 0 &&  CurrentVideo.currentTime <  10.5){


						console.log('count: '+countRad);
						if (  countRad < 360) {

						degree = 1 + (countRad % 360);

						console.log('degree: '+degree);
						countRad += 1.25;

						var nextDegree = 1 + (countRad % 360);
						if (nextDegree < degree) {
							degree = 360;
						}

						shape.graphics.clear();

						drawCCircle(shape.graphics, 'rgb(180, 180, 180)', 0, 0, 60, 55, 0, degree);

						stage.update();



						//	createjs.Ticker.removeEventListener('tick', renderFrame);
						}

					if (triggeronce == 1){
						triggeronce = 0;



						console.log('TRIGGER ONCE3')
						stage.addChild(UI);


						var timer = new Timer('100 milliseconds');
						timer.every('1 seconds', function () {
							//if (countdown  <= 4){

								//countdownTimer.color= '#880003';


								if (countdown  < 1){
								 timer.stop();
								 timer.clear();
								 return;
								}
							//}	
							countdown--;
							countdownTimer.text = countdown;
						});
						timer.start();


						$("body").on("keydown", function(e){
							if(e.keyCode == 40){

								$( "body" ).off( "keydown")
								createjs.Tween.removeAllTweens();
								UI.removeAllChildren();

								CurrentVideo.pause();
								CurrentVideo.currentTime = 0;

								play_scene2_1_6();

								return false; //to fix the scrolling down on space bar key press
							}
						});

					}

				}



				stage.update(event);
			}
		}	






	}




	function play_scene2_1_6(){




		console.log('Scene 2-1-6');

		//createjs.Ticker.removeAllEventListeners();
		playscene('scene2_1_6', play_scene_2_1_6_interactive);

	}	

	function play_scene_2_1_6_interactive(){

		console.log('PLAY SCENE INTERACTIVE');



		CurrentVideo = document.getElementById('stab_scene');	
		CurrentVideo.setAttribute('loop', true);
		buffer = new createjs.VideoBuffer(CurrentVideo);
		myFrame = new createjs.Bitmap(buffer);
		dimensions = calculateScaleFrame(CurrentVideo);

		myFrame.scale = dimensions.frameScale;
		myFrame.regY = CurrentVideo.videoHeight/2
		myFrame.regX = CurrentVideo.videoWidth/2

		myFrame.x = canvas.width/2
		myFrame.y = canvas.height/2

		stage.addChild(myFrame);
		CurrentVideo.play();

		add_SceneTitle(['title_target']);
	//	var bg = new createjs.Shape();
	//	drawCCircle(bg.graphics, 'rgb(255, 255, 255)', (ctx.canvas.width/2)-2, (ctx.canvas.width/2) , 60, 55, 0, 360);
	//	UI.addChild(bg);



		//target2

		var target2 = preload.getResult("target1");
		var bitmap_target1 = new createjs.Bitmap(target2);


		//bitmap_target1 = bitmap_target1.clone();
	//	bitmap_target1.filters = [removeRedFilter];
	//	bitmap_target1.cache(0, 0, target2.width, target2.height);



		bitmap_target1.x = (ctx.canvas.width/2)-10;
		bitmap_target1.y =(ctx.canvas.width/2)-62.5;

		bitmap_target1.scaleX = 0.2;
		bitmap_target1.scaleY = 0.2;


		UI.addChild(bitmap_target1);


		stage.addChild(UI);





		var swordpoint = preload.getResult("swordpoint");
		var bitmap_sword = new createjs.Bitmap(swordpoint);

		bitmap_sword.scaleX = 0.4;
		bitmap_sword.scaleY = 0.4;
		console.log('Width: ');
		console.log(swordpoint.width/2);					

		console.log('Height: ');
		console.log(swordpoint.height/2);

	//	bitmap_sword.regX = 200;
		bitmap_sword.regY = 540;


		bitmap_sword.x = (ctx.canvas.width/2) ;




		bitmap_sword.y = (ctx.canvas.width/2) + (swordpoint.height/6);

		bitmap_sword.rotation = 0;

		bitmap_sword.name = "target1";
		bitmap_sword.rotation = 0;
		UI.addChild(bitmap_sword);

		stage.addChild(UI);

		var originalposy = bitmap_sword.y;


		//Scale it to fit the screen;
		//var scalex = parseFloat(ctx.canvas.width) / parseFloat(swordpoint.width) ;
		//var scaley = parseFloat(ctx.canvas.height) / parseFloat(swordpoint.height) ;

		//bitmap_grunge.scaleX  = scalex;
		//bitmap_grunge.scaleY  = scaley;

		//bitmap_grunge.alpha = 0;

		//Add it to the UI;

		//Fade it in
		//createjs.Tween.get(bitmap_grunge).to({alpha:1}, 500).play();

		render_spacebar();


		createjs.Ticker.addEventListener("tick", handleTick);
		var moveLeft = true;

		var triggerjust1 = 0;


		$("body").on("keyup", function(e){
		//if ( hold == 0) {
				if(e.keyCode == 32){

				var collision = ndgmr.checkPixelCollision(bitmap_target1,bitmap_sword,0,true);

					if (!collision){



						console.log('Shoot!');

						createjs.Tween.get(bitmap_sword)
						.to({y:originalposy - 30}, 50 ,createjs.Ease.linear)
						.to({y:originalposy + 30}, 150 ,createjs.Ease.linear);


						render_Miss();

					}else{
						stage.removeChild(UI);
						play_scene2_1_7();
					}

				}
		});

		function handleTick(event) {



			if (moveLeft) {
				bitmap_sword.x -= 10;

				bitmap_sword.rotation -=0.5; 

				if(bitmap_sword.x < ctx.canvas.width/4 ){
					moveLeft = false;
				}
			}else{
				bitmap_sword.x += 10;
				bitmap_sword.rotation +=0.5; 

				if(bitmap_sword.x > ((ctx.canvas.width/4)*3) ){
					moveLeft = true;
				}
			}

			var collision = ndgmr.checkPixelCollision(bitmap_target1,bitmap_sword,0,true);

			if (collision){

				var addRedFilter = new createjs.ColorFilter(1, 0, 0, 1); // red, green, blue, alpha
				bitmap_target1.filters = [addRedFilter];
				bitmap_target1.cache(0, 0, target2.width, target2.height);

			}else{

				var removeRedFilter = new createjs.ColorFilter(1, 1, 1, 1); // red, green, blue, alpha
				bitmap_target1.filters = [removeRedFilter];
				bitmap_target1.cache(0, 0, target2.width, target2.height);

			}







			stage.update()




		}

		//play_scene2_1_7

	}	





	function play_scene2_1_7(){
		console.log('Scene 2-1-7');
		playscene('scene2_1_7', finalScene);

	}	

	function finalScene(){
		
		console.log('GG');
		console.log('SCORE :' );
		console.log('Display Form WIN' );
		
		chronoStop();
		
		var text_merit = preload.getResult("text_merit");
		var facebook_green = preload.getResult("facebook_green");
		var twitter_green = preload.getResult("twitter_green");
		var ribbon_green = preload.getResult("ribbon_green");

		
		
		$(".ribbon_container").append(ribbon_green);
		$(".ribbon_text").append(text_merit);	
		$(".facebook").append(facebook_green);
		$(".twitter").append(twitter_green);
		

		
		
		
		$(".mytime").text(currentTime);
		
		
		
		
		
		
		$('.screen__loader').hide();
		$('.screen').show();
		$('.screen__form').fadeIn();
			
		
		
		
		
		return;
	}

	function playscene_death(){
		
		console.log('play death scenen');
		createjs.Tween.removeAllTweens();
		UI.removeAllChildren();
		playscene('scene_death', displayform);
		chronoStop();
		
	}	


	function displayform(e) {
		createjs.Sound.play("death");

		var text_youlose = preload.getResult("text_youlose");
		var facebook_red = preload.getResult("facebook_red");
		var twitter_red = preload.getResult("twitter_red");
		var ribbon_red = preload.getResult("ribbon_red");

		
		$(".final__score_bg").addClass('final__score_bg_lose');
		$(".final__score").addClass('final__score_lose');
		
		
		$(".ribbon_container").append(ribbon_red);
		$(".ribbon_text").append(text_youlose);	
		
		$(".facebook").append(facebook_red);
		$(".twitter").append(twitter_red);
		
		$(".mytime").text(currentTime);
		
		$('.screen__loader').hide();
		$('.screen').show();
		$('.screen__form').fadeIn();



	}

	function drawCCircle(graphics, color, x, y, outerRadius, innerRadius, fromDegree, toDegree) {
		var strokeWidth = outerRadius - innerRadius,
		offset = strokeWidth / 2;

		graphics
		.setStrokeStyle(strokeWidth)
		.beginStroke(color)
		.arc(x, y, outerRadius, _d2r(fromDegree), _d2r(toDegree))
		.endFill();
	}

	function _d2r(degree) {
		return (degree / 360) * 2 * Math.PI;
	}


	// ** UI ELEMENTS **

	function renderGRID (){

		Vertical1 = new createjs.Shape();
		Vertical2 = new createjs.Shape();
		Vertical3 = new createjs.Shape();
		Horizontal1 = new createjs.Shape();
		Horizontal2 = new createjs.Shape();
		Horizontal3 = new createjs.Shape();


		Vertical1.graphics.beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  1 , canvas.height , 0);
		Vertical2.graphics.beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  1 , canvas.height , 0);
		Vertical3.graphics.beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  1 , canvas.height , 0);



		Horizontal1.graphics.beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  canvas.width , 1 , 0);
		Horizontal2.graphics.beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  canvas.width , 1 , 0);
		Horizontal3.graphics.beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  canvas.width , 1 , 0);



		createjs.Ticker.addEventListener('tick', addGrid);

			function addGrid(){



				Vertical1.graphics.clear().beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  1 , canvas.height , 0);
				Vertical2.graphics.clear().beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  1 , canvas.height , 0);
				Vertical3.graphics.clear().beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  1 , canvas.height , 0);

				Horizontal1.graphics.clear().beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  canvas.width , 1 , 0);
				Horizontal2.graphics.clear().beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  canvas.width , 1 , 0);
				Horizontal3.graphics.clear().beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  canvas.width , 1 , 0);



				Horizontal1.y = (canvas.height/4 )*1;
				Horizontal2.y = (canvas.height/4 )*3;
				Horizontal3.y = (canvas.height/2 )*1;

				Vertical1.x = (canvas.width/4 )*1;
				Vertical2.x = (canvas.width/4 )*3;
				Vertical3.x = (canvas.width/2 )*1;

				stage.addChild(Vertical1);
				stage.addChild(Vertical2);
				stage.addChild(Vertical3);	

				stage.addChild(Horizontal1);
				stage.addChild(Horizontal2);
				stage.addChild(Horizontal3);

				stage.update();

			}


	}

	function renderFrame(){


			var frameTop = new createjs.Shape();
			var frameBot = new createjs.Shape();

			frameTop.graphics.beginStroke('#000000').beginFill("#000000").drawRoundRect(0, 0,  canvas.width , 80 , 0);
			frameBot.graphics.beginStroke('#000000').beginFill("#000000").drawRoundRect(0,	canvas.height -100,  canvas.width , 80 , 0);
			frame.addChild(frameTop);
			frame.addChild(frameBot);

			//stage.addChild(frame);

			createjs.Ticker.addEventListener('tick', updateFrame);

			function updateFrame(){

				frameTop.graphics.clear().beginStroke('#000000').beginFill("#000000").drawRoundRect(0,0,  canvas.width , 80 , 0);
				frameBot.graphics.clear().beginStroke('#000000').beginFill("#000000").drawRoundRect(0,canvas.height -80,  canvas.width , 100 , 0);

				//frame.update();

			}


	}


	function add_BackgroundFrame(){

		backgroundFrame = preload.getResult("backgroundFrame");
		logoUI = preload.getResult("logoUI");
		var fullScreen = preload.getResult("fullScreen");
		var headphones = preload.getResult("headphones");


		bitmap_headphones = new createjs.Bitmap(headphones);
		bitmap_fullScreen = new createjs.Bitmap(fullScreen);  

		bitmap_logoUI = new createjs.Bitmap(logoUI);
		bitmap_logoUI.x = canvas.width/2;
		bitmap_logoUI.y = canvas.height* 0.05 ;
		bitmap_logoUI.regX = logoUI.width/2;

		bitmap_backgroundFrame = new createjs.Bitmap(backgroundFrame);
		bitmap_backgroundFrame.x = 0;
		bitmap_backgroundFrame.y = 0;


		//Scale it to fit the screen;
		var scalex = parseFloat(canvas.width) / parseFloat(backgroundFrame.width) ;
		var scaley = parseFloat(canvas.height) / parseFloat(backgroundFrame.height) ;

		bitmap_backgroundFrame.scaleX  = scalex;
		bitmap_backgroundFrame.scaleY  = scaley;
		bitmap_backgroundFrame.rotation = 0;
		bitmap_backgroundFrame.name = "overlay";




		createjs.Ticker.addEventListener('tick', addframe);

		function addframe(){

			bitmap_fullScreen.scale =  (parseFloat(canvas.width) / parseFloat(fullScreen.width) )*0.012;
			bitmap_fullScreen.x = (canvas.width ) - (canvas.width*0.045) ;
			bitmap_fullScreen.y = (canvas.height ) *0.135;

			bitmap_headphones.scale =  (parseFloat(canvas.width ) / parseFloat( headphones.width  ) )*0.015 ;
			bitmap_headphones.y = (canvas.height ) *0.135;
			bitmap_headphones.x = (canvas.width*0.045) ;

			bitmap_logoUI.x = canvas.width/2;
			bitmap_logoUI.y = canvas.height* 0.05;

			bitmap_logoUI.scale =  (parseFloat(canvas.width) / parseFloat(logoUI.width) )*0.15;

			scalex = parseFloat(canvas.width) / parseFloat(backgroundFrame.width) ;
			scaley = parseFloat(canvas.height) / parseFloat(backgroundFrame.height) ;

			bitmap_backgroundFrame.scaleX  = scalex;
			bitmap_backgroundFrame.scaleY  = scaley;

			stage.addChild(bitmap_backgroundFrame);
			stage.addChild(bitmap_logoUI);
			stage.addChild(bitmap_headphones);

			stage.addChild(bitmap_fullScreen);

			stage.update();

		}


	}


	function displayTimer(){



		var fullScreen = preload.getResult("fullScreen");
		var headphones = preload.getResult("headphones");


		var bitmap_headphones = new createjs.Bitmap(headphones);
		var bitmap_fullScreen = new createjs.Bitmap(fullScreen);  






		var bottonmUI = new createjs.Container();

		var pause = new createjs.Text();
		pause.set({
				text: "PAUSE",
				textAlign: "left",
				textBaseline: "middle",
				color: '#bababa',
				font: '16px Arial',
				x: (canvas.width ) *0.026,
				//y: canvas.height -  canvas.height * 0.02,
		});




		var timer = new createjs.Text();
		timer.set({
				text: currentTime,
				textAlign: "right",
				textBaseline: "middle",
				color: '#bababa',
				font: '16px Arial',
				//x: (canvas.width ) - canvas.width*0.02,
				//y: canvas.height -  canvas.height * 0.02,
		});

		//timer.regX = -1* timer.getMeasuredWidth()/2 - (2*headphones.width)



		chronoStart();

		//Update timer;
		createjs.Ticker.addEventListener('tick', timerUpdate);

		function timerUpdate(){


			//bitmap_fullScreen.scale =  (parseFloat(canvas.width) / parseFloat(fullScreen.width) )*0.012;
			bitmap_fullScreen.x = (canvas.width ) - (canvas.width*0.045) ;
			bitmap_fullScreen.y = (canvas.height ) *0.035;

			//bitmap_headphones.scale =  (parseFloat(canvas.width ) / parseFloat( headphones.width  ) )*0.015 ;
			bitmap_headphones.y = (canvas.height ) *0.035;
			bitmap_headphones.x = (canvas.width*0.015) ;

			//timer.scale =  (parseFloat(canvas.width) / parseFloat(timer.getMeasuredWidth()) )*0.06;

			timer.text = currentTime;
			bottonmUI.x =(canvas.width ) - canvas.width*0.015;
			bottonmUI.y =(canvas.height ) - canvas.height*0.055;

			//pause.scale =  (parseFloat(canvas.width) / parseFloat(pause.getMeasuredWidth()) )*0.04;
			pause.x = (canvas.width ) *0.015;
			pause.y = (canvas.height ) - canvas.height*0.055;

			bottonmUI.addChild(timer);

			stage.addChild(pause);
			stage.addChild(bottonmUI);
			stage.addChild(bitmap_headphones);
			stage.addChild(bitmap_fullScreen);

			stage.update();

		}

	}

	function add_BackgroundGrunge(){

		grunge = preload.getResult("grunge");
		bitmap_grunge = new createjs.Bitmap(grunge);
		bitmap_grunge.x = 0;
		bitmap_grunge.y = 0;


		//Scale it to fit the screen;
		var scalex = parseFloat(ctx.canvas.width) / parseFloat(grunge.width) ;
		var scaley = parseFloat(ctx.canvas.height) / parseFloat(grunge.height) ;

		bitmap_grunge.scaleX  = scalex;
		bitmap_grunge.scaleY  = scaley;
		bitmap_grunge.rotation = 0;
		bitmap_grunge.name = "overlay";
		bitmap_grunge.alpha = 0;

		//Add it to the UI;
		UI.addChild(bitmap_grunge);
		//Fade it in
		createjs.Tween.get(bitmap_grunge).to({alpha:1}, 500).play();


	}

	function add_SceneTitle(title){

		var bg =  preload.getResult('grungeblood');
		var bitmap_bg = new createjs.Bitmap(bg);
		//bitmap_bg.x =  (canvas.width*0.006);
		bitmap_bg.scale =(canvas.width / bg.width) *0.3; 
		bitmap_bg.alpha =0; 

	//					console.log(bg);
	//					console.log(bitmap_bg);
		var TitleUI = new createjs.Container();

		TitleUI.addChild(bitmap_bg);





		var uiDimension = TitleUI.getBounds();
		console.log(uiDimension);
		TitleUI.regY = uiDimension.height/2;

		createjs.Tween.get(bitmap_bg).to({alpha:1 }, 300);

		title.forEach(function(title, index) {



			var title_swing = preload.getResult(title);

			var scale2 = (((canvas.height*100)/title_swing.height)/100)/4;
			var bitmap_title = new createjs.Bitmap(title_swing);
			bitmap_title.x = 0;
			bitmap_title.regY = (title_swing.height/2);


			bitmap_title.scale = bitmap_title.originalScale = 0.1;


			bitmap_title.rotation = 0;
			bitmap_title.name = title;
			bitmap_title.alpha = 0;
			bitmap_title.y = 0;


			TitleUI.addChild(bitmap_title);






			bitmap_title.y = 1999;

			createjs.Tween.get(bitmap_title).wait(300*index + 100).to({alpha:1,y : (uiDimension.height/2), x : 65 , scale : scale2  }, 700);

			stage.addChild(TitleUI);

		});



		bitmap_bg.regY =  uiDimension.height/2;
		bitmap_bg.y =  uiDimension.height/2 - 60;


		createjs.Ticker.addEventListener('tick', titleUpdate);

		function titleUpdate(){
			TitleUI.scale = (canvas.width/uiDimension.width) * 0.3 
			TitleUI.y = canvas.height/2

		}
	}


	function generateRandomNumber() {
		var min = 0,
			max = 50,
			highlightedNumber = Math.random() * (max - min) + min;
			var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
			highlightedNumber *= plusOrMinus;

		return highlightedNumber;
	};




	function render_Miss(){

		var grunge = preload.getResult("miss");

		bitmap_grunge = new createjs.Bitmap(grunge);
		bitmap_grunge.x = (parseFloat(ctx.canvas.width) /2 ) -100  + generateRandomNumber();
		bitmap_grunge.y = (ctx.canvas.height/2) - 200;

		//Scale it to fit the screen;
	//	var scalex = parseFloat(ctx.canvas.width) /2 * generateRandomNumber() ;
	//	var scaley = parseFloat(ctx.canvas.height) / 2;

	//	bitmap_grunge.scaleX  = scalex;
	//	bitmap_grunge.scaleY  = scaley;
		bitmap_grunge.rotation = 0;
		bitmap_grunge.name = "overlay";
		bitmap_grunge.alpha = 1;

		//Add it to the UI;
		UI.addChild(bitmap_grunge);
		//Fade it in
		createjs.Tween.get(bitmap_grunge).to({alpha:0, y: bitmap_grunge.y -10}, 300).play();


	}
	var button1 = new createjs.Container();
	var tweenSpacebar;


	//Render Spacebar Button
	function render_spacebar(){
		console.log('Render Spacebar');

		//console.log(spacebarimg);
		var spacebar = preload.getResult("spacebar");

		var bitmap_spacebar = new createjs.Bitmap(spacebar);
		bitmap_spacebar.scale =  (parseFloat(canvas.width) / parseFloat(spacebar.height) )*0.05;

		bitmap_spacebar.x = (canvas.width/2);
		bitmap_spacebar.regX  =  (spacebar.width/2) * bitmap_spacebar.scale

		bitmap_spacebar.y = (canvas.height) - (canvas.height * 0.10) ;

		bitmap_spacebar.rotation = 0;
		bitmap_spacebar.name = 'spacebar';

		UI.addChild(bitmap_spacebar);

	//console.log(stage.numChildren);
		//stage.setChildIndex( stage.numChildren, 7);


	//	stage.addChild(UI);

		console.log(stage);
		//createjs.Ticker.addEventListener("tick", stage);
	}

	//Listen to the resize;
	window.addEventListener('resize', function(event){
	  // do stuff here
		console.log('Resize!!!')

		//Update Canvas Size;
		canvas.height = $(window).height();
		canvas.width = $(window).width();

		//Update frame dimensions;
		dimensions = calculateScaleFrame(CurrentVideo);

		myFrame.scale = dimensions.frameScale;
		myFrame.y = canvas.height/2;
		myFrame.x = canvas.width/2;


		console.log('-------------------------')
		console.log('Canvas H : ' +canvas.height )
		console.log('Canvas W : ' +canvas.width )
		console.log('Videos Y : ' +myFrame.y)
		console.log('Videos X : ' +myFrame.x)
		console.log('Videos Scale : ' +myFrame.scale)
		console.log('Videos H : ' +CurrentVideo.videoHeight)
		console.log('Videos W : ' +CurrentVideo.videoWidth)
		console.log('-------------------------')

	});


	//Listen to Initial Click to start the scripts.	
	$("#start_experience").on( "click" , function(e){

		e.preventDefault();
		$("header").fadeOut();
		$("footer").fadeOut();
		$(".screen").hide();
		$(".screen__home").fadeOut();

		//Stop Intro Sound
		//createjs.Sound.stop("intro");



		//Play first scene
		playscene('scene1', choseyourweapon);
		//choseyourweapon();
		//swingYourWeapon();
		//scene_time_to_fight();
		//play_scene2_1_4_interactive();
		//play_scene2_1_4();
		//play_scene2_1_6();
		//play_scene_2_1_6_interactive();
		//play_scene2_1_7();

		
		
		
		
//		playscene_death ();

	//	add_BackgroundFrame();
	//	renderGRID();
		renderFrame();
		displayTimer();

	});		
	
	$('.facebook').on('click' , function(){
		FB.ui({
		  method: 'share',
		  href: 'https://developers.facebook.com/docs/'
		}, function(response){});
	})
	  $('.twitter').click(function(e) {
		e.preventDefault();
		var href = 'https://twitter.com/intent/tweet?text=Share True edge&url=URL_TO_SHARE'
		window.open(href, "Twitter", "height=285,width=550,resizable=1");
	});



	loadLoader();

});