$( document ).ready(function() {
	
	"use strict";


	//Timer Vars
	var startTime = 0;
	var start = 0;
	var end = 0;
	var diff = 0;
	var currentTime = '00:00:';
	var currentTimesec = '00';
	var timerID = 0;
	
	function chrono(){
		end = new Date();
		diff = end - start;
		diff = new Date(diff);
		var msec = diff.getMilliseconds();
		var sec = diff.getSeconds();
		var min = diff.getMinutes();
		var hr =  diff.getHours()-1;
		hr = "0" + hr

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
		currentTime =  hr + " : " + min + " : ";
		currentTimesec = sec;
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
	
	function chronoContinue(){
		//ocument.chronoForm.startstop.value = "stop!"
		//document.chronoForm.startstop.onclick = chronoStop
		//document.chronoForm.reset.onclick = chronoReset
		start = new Date()-diff
		start = new Date(start)
		chrono()
	}
	/*
	function chronoReset(){
		document.getElementById("chronotime").innerHTML = "0:00:00:000"
		start = new Date()
	}
	function chronoStopReset(){
		document.getElementById("chronotime").innerHTML = "0:00:00:000"
		document.chronoForm.startstop.onclick = chronoStart
	}
	*/	
	function chronoStop(){
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

	//Film Container;
	var filmContainer = new createjs.Container();
	filmContainer.name = 'Frame Container';
	
	var mainUI = new createjs.Container();
	mainUI.name = 'Main UI Container';
	
	//UI Container;
	var UI = new createjs.Container();
	UI.name = 'UI Container';

	stage.addChild(filmContainer);
	
	stage.addChild(UI);


	// enable touch interactions if supported on the current device:
	createjs.Touch.enable(stage);

	// enabled mouse over / out events
	stage.enableMouseOver(10);
	stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas

	createjs.Ticker.framerate = 30;


	


	function loadLoader(){
		init();
		loadAll();	
	}

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
			{id:"logoRed", src:"logo_red.svg", type: createjs.Types.IMAGE},
			
			{id:"headphones", src:"headphones.svg", type: createjs.Types.IMAGE},
			
			{id:"ribbon_green", src:"ribbon_green.svg", type: createjs.Types.IMAGE},
			{id:"ribbon_red", src:"ribbon_red.svg", type: createjs.Types.IMAGE},
			
			{id:"text_merit", src:"text_merit.svg", type: createjs.Types.IMAGE},
			{id:"text_youlose", src:"text_youlose.svg", type: createjs.Types.IMAGE},
			
			
			{id:"text_yourgrade", src:"titles/your-grade.svg", type: createjs.Types.IMAGE},
			{id:"text_yourtime", src:"titles/your-time.svg", type: createjs.Types.IMAGE},
			
			{id:"distinction", src:"titles/subtitles/distinction.svg", type: createjs.Types.IMAGE},
			{id:"merit", src:"titles/subtitles/merit.svg", type: createjs.Types.IMAGE},
			{id:"pass", src:"titles/subtitles/pass.svg", type: createjs.Types.IMAGE},
			{id:"failed", src:"titles/subtitles/failed.svg", type: createjs.Types.IMAGE},
			
			
			{id:"facebook", src:"facebook.svg", type: createjs.Types.IMAGE},
			{id:"twitter", src:"twitter.svg", type: createjs.Types.IMAGE},
			
			//Sounds;
			{id:"intro", src:"./sounds/intro.ogg", type: createjs.Types.SOUND},
			{id:"heart", src:"./sounds/heartbeat.ogg", type: createjs.Types.SOUND},
			{id:"beat", src:"./sounds/single_heartbeat.ogg", type: createjs.Types.SOUND},
			{id:"death", src:"./sounds/death.ogg", type: createjs.Types.SOUND},


			//Videos
			{id:"stab_scene", src:"./videos/stab.mp4"},
			{id:"scene_death", src:"./videos/scene_death.mp4"},
			
			//ImagesUI
			{id:"circleDots", src:"hold-element.svg", type: createjs.Types.IMAGE},

			
			//Weapons
			{id:"sword", src:"weapons/sword.svg", type: createjs.Types.IMAGE},
			{id:"stick", src:"weapons/stick.svg", type: createjs.Types.IMAGE},
			{id:"rapier", src:"weapons/rapier.svg", type: createjs.Types.IMAGE},
			
			
			{id:"sword_placeholder", src:"weapons/sword-hidden.svg", type: createjs.Types.IMAGE},
			{id:"stick_placeholder", src:"weapons/stick-hidden.svg", type: createjs.Types.IMAGE},
			{id:"rapier_placeholder", src:"weapons/rapier-hidden.svg", type: createjs.Types.IMAGE},


			{id:"logoUI", src:"logoui.png"},
			{src:"full-screen.svg", id:"fullScreen", type: createjs.Types.IMAGE},



			{id:"swordpoint", src:"dot.png"},

			{id:"target1", src:"target1.png"},
			{id:"miss", src:"titles/missed.svg", type: createjs.Types.IMAGE},
			
			
			{id:"choose_bg", src:"choose_bg.jpg", type: createjs.Types.IMAGE},
			
			
			{id:"done", src:"titles/done.svg", type: createjs.Types.IMAGE},
			{id:"choosebutton", src:"choosebutton.png", type: createjs.Types.IMAGE},



			//Big Titles
			
			{id:"title_choose_weapon", src:"titles/choose-your-weapon.svg", type: createjs.Types.IMAGE},
			{id:"title_choose_block", src:"titles/choose-your-block.svg", type: createjs.Types.IMAGE},
			{id:"title_choose_block2", src:"titles/choose-your-move.svg",  type: createjs.Types.IMAGE},
			{id:"title_swing", src:"titles/swing-your-weapon.svg" , type: createjs.Types.IMAGE},
			{id:"title_target", src:"titles/hit-the-target.svg", type: createjs.Types.IMAGE},
			
			
			

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

	function handleFileLoad(event) {

		console.log('File loaded: ' + event.item.id)

		// Get a reference to the loaded item
		var item = event.result;

		// build the DOM

		if (event.item.id == "logo"){
			$(".logo_container").append(item);	
		}

		if (event.item.id == "headphones"){
			$(".headphones").prepend(item);	
		}

		if (event.item.id == "scene1"){
			item.id = "scene1";
			scenes['scene_1'] = item;
			$(".video_scenes").prepend(item);
			var videoElement = document.getElementById('scene1');	
			videoElement.play();
			videoElement.pause();
		}

		if (event.item.id == "timetofight"){
			item.id = "timetofight";
			$(".video_scenes").prepend(item);	
		}	

		if (event.item.id == "stab_scene"){
			item.id = "stab_scene";
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
		var frameHscale = (((canvas.width*100)/video.videoWidth)/100);	

		var frameScale = frameHscale;


		var dimensions = {};
		dimensions.frameScale = frameScale;

		return dimensions;

	}		


	/**
	 * @param {string} start - videoID.
	 * @param {function} end - Function to execute at the end.
	 */	
	//Video var
	
	var myBuffer;
	var CurrentVideo = '';
	var dimensions = '';
	var myFrame = '';
	var buffer = '';
	
	
	var weaponsAvailable = {'rapier' : 1 , 'sword' : 1, 'stick' : 1};
	
	
	console.log(weaponsAvailable);

	// File complete handler
	var scenes = [0,0,0,0,0,0,0,0];


	//Load background mask image
	var grunge = '';
	var bitmap_grunge = '';

	var current_Scene = '';


	function playscene (start){
		
		console.log('Play Scene');
		
		CurrentVideo = document.getElementById(start);	
		buffer = new createjs.VideoBuffer(CurrentVideo);
		myFrame = new createjs.Bitmap(buffer);
		dimensions = calculateScaleFrame(CurrentVideo);

		myFrame.scale = dimensions.frameScale;

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

		
		filmContainer.addChild(myFrame);
		
		
		CurrentVideo.playbackRate = 1;
		CurrentVideo.play();
		
		createjs.Ticker.addEventListener("tick", videoTrack);	
		
		console.log(scenes);

		function videoTrack(){
			
			console.log(CurrentVideo.currentTime);
			
			if (start == "sceneSword"){
				if (scenes[1] == 0 && CurrentVideo.currentTime >= 9){
					scenes[1] = 1;
					CurrentVideo.pause();
					swingYourWeapon();
				}
				if (scenes[3] == 0 && CurrentVideo.currentTime >= 19.5){
					scenes[3] = 1;
					play_scene2_1_4_interactive();
				}
				if (scenes[4] == 0 && CurrentVideo.currentTime >= 29.5){
					scenes[4]= 1;
					CurrentVideo.playbackRate = 1;
				}

				if (scenes[5] == 0 && CurrentVideo.currentTime >= 35.10){
					scenes[5] = 1;
					play_scene2_1_5_interactive();
				}

				if (scenes[6] == 0 && CurrentVideo.currentTime >= 45.5){
					scenes[6] = 1;
					CurrentVideo.playbackRate = 1;
				}

				if (scenes[7] == 0 && CurrentVideo.currentTime >= 49.12){
					scenes[7] = 1;
					CurrentVideo.pause();
					play_scene_2_1_6_interactive();
				}
				
			}
			if (start == "sceneQuarterStaff"){
				if (scenes[1] == 0 && CurrentVideo.currentTime >= 8.10){
					scenes[1] = 1;
					CurrentVideo.pause();
					swingYourWeapon();
				}
				if (scenes[3] == 0 && CurrentVideo.currentTime >= 22.22){
					scenes[3] = 1;
					play_scene2_1_4_interactive();
				}
				if (scenes[4] == 0 && CurrentVideo.currentTime >= 32.21){
					scenes[4]= 1;
					CurrentVideo.playbackRate = 1;
				}

				if (scenes[5] == 0 && CurrentVideo.currentTime >= 34.15){
					scenes[5] = 1;
					play_scene2_1_5_interactive();
				}

				if (scenes[6] == 0 && CurrentVideo.currentTime >= 44.08){
					scenes[6] = 1;
					CurrentVideo.playbackRate = 1;
				}

				if (scenes[7] == 0 && CurrentVideo.currentTime >= 49.14){
					scenes[7] = 1;
					CurrentVideo.pause();
					play_scene_2_1_6_interactive();
				}
				
			}
			if (start == "sceneRapier"){
				CurrentVideo.playbackRate = 1
				if (scenes[1] == 0 && CurrentVideo.currentTime >= 8){
					scenes[1] = 1;
					CurrentVideo.pause();
					swingYourWeapon();
				}
				if (scenes[3] == 0 && CurrentVideo.currentTime >= 19.14){
					scenes[3] = 1;
					play_scene2_1_4_interactive();
				}
				if (scenes[4] == 0 && CurrentVideo.currentTime >= 29.04){
					scenes[4]= 1;
					CurrentVideo.playbackRate = 1;
				}

				if (scenes[5] == 0 && CurrentVideo.currentTime >= 31.01){
					scenes[5] = 1;
					play_scene2_1_5_interactive();
				}

				if (scenes[6] == 0 && CurrentVideo.currentTime >= 40.20){
					scenes[6] = 1;
					CurrentVideo.playbackRate = 1;
				}

				if (scenes[7] == 0 && CurrentVideo.currentTime >= 53.22){
					scenes[7] = 1;
					CurrentVideo.pause();
					play_scene_2_1_6_interactive();
				}
				
			}
			
		}
		
		CurrentVideo.addEventListener('ended', function(){
			
			console.log('Scene end');
			createjs.Ticker.removeEventListener("tick", videoTrack);
				
			CurrentVideo.pause();
			stage.removeAllChildren();
			stage.update();
			
			playAgain();
			
			//finalScene();
		}, false);

	
		

	}

	//Choose the Weapon Scene Interactive
	function choseyourweapon(repeat) {
		
		//var bmp = new createjs.Bitmap(canvastemp);
		var choose_bg = preload.getResult("choose_bg");
		UI.removeAllChildren();
		
		//Last Frame;
		var canvastemp = document.createElement('canvas');
		canvastemp.width = canvas.width;
		canvastemp.height = canvas.height;
		canvastemp.getContext('2d').drawImage(canvas, 0,0);
		var bmp = new createjs.Bitmap(choose_bg);
		//bmp = bmp.clone();
		//Add last frame as background;
		//stage.removeAllChildren();
		if (repeat){
			bmp.y = 240;
			//TODO !!!
			stage.addChild(bmp);
		}
		
		
		//TODO ADD DIFFERENT IMAGE fix overlap timer;
		//stage.addChild(bmp);

		//Preload Weapons
		var sword = preload.getResult("sword");
		var stick = preload.getResult("stick");
		var rapier = preload.getResult("rapier");
		
		var sword_placeholder = preload.getResult("sword_placeholder");
		var stick_placeholder = preload.getResult("stick_placeholder");
		var rapier_placeholder = preload.getResult("rapier_placeholder");
		
		var update = true;

		//GRID		
		var hgrid = ctx.canvas.width/4;
		var vgrid = ctx.canvas.height/4;

		var title = ["title_choose_weapon"];
		add_SceneTitle(title);
		
		//Create Weapon Container;
		var WeaponUI = new createjs.Container();
		
		//Weapons single Container;
		
		rapier = renderWeapon("rapier", hgrid*2.5 , 	vgrid, -16, rapier ,0 , weaponsAvailable.rapier, rapier_placeholder);
		stick  = renderWeapon("stick",  hgrid*2.5 + 150, vgrid, 0, stick , 800, weaponsAvailable.stick, stick_placeholder);
		sword  = renderWeapon("sword",  hgrid*2.5 + 300, vgrid, 16, sword ,1600, weaponsAvailable.sword,sword_placeholder );

		WeaponUI.addChild(rapier);
		WeaponUI.addChild(stick);
		WeaponUI.addChild(sword);

		var uiDimension = WeaponUI.getBounds();
//		WeaponUI.regY = uiDimension.height/2;
		WeaponUI.y =vgrid*1.7;
		//WeaponUI.regX = uiDimension.width/3;
		WeaponUI.x =  -100;

		mainUI.addChild(WeaponUI);

//		createjs.Ticker.addEventListener('tick', WeaponUpdate);
	
		//Responsive Weapon Container;
		function WeaponUpdate(){
			WeaponUI.scale = (canvas.width/uiDimension.width) * 0.5;
			WeaponUI.y = canvas.height/2;

		}
		if (repeat){
			
			
			var countdownTimer = new createjs.Text();
			var countdown = 10;
			countdownTimer.set({
					text: countdown,
					textAlign: "center",
					textBaseline: "middle",
					color: '#fff',
					font: 'bold 50px "Open Sans", sans-serif',
					x: (ctx.canvas.width/2),
					y: (ctx.canvas.height/2)
			});
					
			var nextWeapon = new createjs.Text();
			nextWeapon.set({
					text: 'NEXT WEAPON IN',
					textAlign: "center",
					textBaseline: "middle",
					color: '#fff',
					font: 'bold 15px "Open Sans", sans-serif',
					x: (ctx.canvas.width/2),
					y: (ctx.canvas.height/2)-100
			});
			
			
			var circleDots = preload.getResult("circleDots");
			var choosebutton = preload.getResult("choosebutton");
		
			//Load Bitmap
			var choosebuttonbmp = new createjs.Bitmap(choosebutton);
			var circleDotsImg2 = new createjs.Bitmap(circleDots);
			circleDotsImg2.scale = 1.2; //TODO CALC
			
			var bound = circleDotsImg2.getBounds();
			circleDotsImg2.regX= bound.width/2;
			circleDotsImg2.regY= bound.height/2;
			
			circleDotsImg2.x =  (ctx.canvas.width/2) ;
			circleDotsImg2.y =  (ctx.canvas.height/2);
			
			
			var bound2 = choosebuttonbmp.getBounds();
			choosebuttonbmp.regX= bound2.width/2;
			choosebuttonbmp.regY= bound2.height/2;
			
			choosebuttonbmp.x =  (ctx.canvas.width/2) ;
			choosebuttonbmp.y =  (ctx.canvas.height/2) + 100;
			
			UI.addChild(choosebuttonbmp);
			UI.addChild(nextWeapon);
		//	UI.addChild(circleDotsImg2);
			UI.addChild(countdownTimer);
			
			
			var timer;
			
			CountDown();		
			
		}
		
		function CountDown() {
			
			console.log('renderFramefight');

			stage.addChild(UI);
			
			timer = new Timer('100 milliseconds');
			timer.every('1 seconds', function () {

				if (countdown  <= 1){

				//	createjs.Tween.removeAllTweens();
				//	UI.removeAllChildren();
				//	stage.removeAllChildren();
					UI.removeAllChildren();
					
					mainUI.removeChild(WeaponUI);
					playscene('scene1');
					timer.stop();
					timer.clear();
					//stage.addChild(myFrame);
					//CurrentVideo.play();

				}
				countdown--;
				countdownTimer.text = countdown;
			});

			timer.start();
		}

		function renderWeapon(name, x, y, angle, weapon , delay , available , placeholderimg){
			
			//Create weapon container
			var container2 = new createjs.Container();
			//Load Bitmap
			var bitmap = new createjs.Bitmap(weapon);
			//Ratio Bitmap?
			var ratio = sword.height/sword.width;
			
			container2.name = name;
			
			//Bitmap x position
			bitmap.x = x;
			
			bitmap.regX = (bitmap.image.width) / 2 ;
			bitmap.regY = (bitmap.image.height) / 2;
			bitmap.scale = bitmap.originalScale = 0.55;
			
			bitmap.name = name;
			bitmap.alpha = 0;
			
			
			var placeholder = new createjs.Bitmap(placeholderimg);

			placeholder.x = x;
			
			placeholder.regX = (bitmap.image.width) / 2 ;
			placeholder.regY = (bitmap.image.height) / 2;
			placeholder.scale = bitmap.originalScale = 0.55;
			
			placeholder.name = name+'_placeholder';
			placeholder.alpha = 1;
			
			// Clickable Area
			var hit = new createjs.Shape();
			hit.graphics.beginStroke("red").beginFill("red").drawRect(0, 0,  weapon.width*3.15*0.4, weapon.height*6.06*0.6);
			hit.name = 'hit';
			hit.x = x+100;
			hit.y = 10;
			
			hit.regX =  bitmap.image.width / 4 | 0;
			hit.regY =  bitmap.image.height / 4 | 0;
			hit.alpha = 0.8;

			//container2.addChild(hit);
			container2.hitArea = hit;
			container2.cursor = "pointer";	

			container2.addChild(placeholder);
			if (available){
				container2.addChild(bitmap);
			}

			createjs.Tween.get(bitmap).wait(delay).to({alpha:1}, 1000);
			
			//var bitmap_glow ;

			if (available){
				
				container2.on("mouseover", function (evt) {

					console.log('IN')

					bitmap.parent.addChild(bitmap);

				//	createjs.Tween.get(bitmap_glow).to({apha:1},400); 
					createjs.Tween.get(bitmap).to({scale:bitmap.originalScale * 1.2},250); 

					update = true;
				});

				container2.on("mouseout", function (evt) {
					console.log('OUT')

				//	createjs.Tween.get(bitmap_glow).to({apha:0},400); 
					createjs.Tween.get(bitmap).to({scale:bitmap.originalScale},250) 
				//	container2.removeChild(bitmap_glow);
					update = true;

				});

				container2.on("mousedown", function (evt) {
					
					if (repeat){
						chronoContinue();
					}

					createjs.Ticker.removeEventListener("tick", WeaponUpdate);
					
					if (name == 'sword'){
						weaponsAvailable.sword = 0;
					}else if (name == 'stick'){
						weaponsAvailable.stick = 0;
					}else{
						weaponsAvailable.rapier = 0;
					}

					if (repeat){
						timer.stop();
						timer.clear();
					}
					
					//Remove UI;
					UI.removeAllChildren();
					mainUI.removeChild(UI);
					mainUI.removeChild(WeaponUI);
					//stage.removeAllChildren();

					if (container2.name ==  "sword"){
						playscene('sceneSword');
					}
					if (container2.name == "stick" ){
						playscene('sceneQuarterStaff');
					}
					if (container2.name ==  "rapier"){
						playscene('sceneRapier');
					}
					
					
					

				});

			}else{
				
				var done = preload.getResult("done");
				var done_bmp = new createjs.Bitmap(done);
				done_bmp.scale= 0.2;
				done_bmp.x= x-55;
				container2.addChild(done_bmp);
				
			}
			return  container2;
		}
	}		

	var scalemeter = 0;
	var contentmeter;
	
	
	//Swing your weapon Scene Interactive
	var count = 0;
	var seconds = 0;

	var powerbar;
	//Start meter at 1;
	var fillmeter = 1;

	var hold =  0;

	function swingYourWeapon(){

		console.log('Swing Your Weapon!')
		hold = 0;
		
		//TODO REPLACE BY SCREENSHOT!
		var canvastemp = document.createElement('canvas');
		canvastemp.width = canvas.width;
		canvastemp.height = canvas.height;
		canvastemp.getContext('2d').drawImage(canvas, 0,0);
		var bmp = new createjs.Bitmap(canvastemp);
		bmp = bmp.clone();
		filmContainer.addChild(bmp);
		
		//Render Title
		add_SceneTitle(['title_swing']);



		//stage.addChild(UI);
		//stage.update();
		
		//Render Circular Loader
		var circularLoader = new createjs.Container();
		
		var circleDots = preload.getResult("circleDots");
		
		//Load Bitmap
		var circleDotsImg = new createjs.Bitmap(circleDots);
		
		circleDotsImg.scale = 0.85; //TODO CALC
		
		
		var shape = new createjs.Shape();
		shape.rotation = 270;
		//shape.x = (ctx.canvas.width/2)-2;
		//shape.y = (ctx.canvas.height/2)-2;

	
		

		
		//Add Container to stage
		stage.addChild(circularLoader);
		
		
		var HoldSpacebar = new createjs.Text();
		HoldSpacebar.set({
				text: 'Hold Spacebar',
				textAlign: "center",
				textBaseline: "middle",
				color: '#fffdfa',
				font: '14px "Open Sans", sans-serif',
				lineWidth: 40,
				//x: (ctx.canvas.width/2),
				//y: (ctx.canvas.height)-70,
		});
		HoldSpacebar.y = -10;
		circleDotsImg.x = -62;
		circleDotsImg.y = -61;
		
		circularLoader.addChild(circleDotsImg);
		circularLoader.addChild(shape);
		//circularLoader.addChild(HoldSpacebar);

		

		circularLoader.x = (ctx.canvas.width) - ctx.canvas.width*0.15;
		circularLoader.y = (ctx.canvas.height/2) + (circleDots.height*0.2);
		
		
		
		countRad = 0;
		degree = 1;
		
		
		createjs.Ticker.addEventListener("tick", renderCircleLoad);	
		
		
		var load = 0;
		
		function renderCircleLoad(event) {
			
			console.log(degree);
							
			if (degree >= 360) {

				//UI.removeAllChildren();
				//stage.removeAllChildren();
				
				createjs.Ticker.removeEventListener("tick", renderCircleLoad);

				stage.addChild(myFrame);
				CurrentVideo.play();

			}
			
			if (  countRad < 360 && load == 1) {
				
				degree = 1 + (countRad % 360);
				countRad += 6.25;
				var nextDegree = 1 + (countRad % 360);
				
				if (nextDegree < degree) {
					degree = 360;
				}

				shape.graphics.clear();

				drawCCircle(shape.graphics, 'rgb(219, 47, 33)', 0, 0, 59, 53, 0, degree);

				stage.update();
			}

		}

		//Listen to Spacebar;
		$("body").on("keydown", function(e){
			console.log('DOWN');
			if(e.keyCode == 32){
				console.log('DOWN2');
				load = 1;
			}
		});
		
		$("body").on("keyup", function(e){
			if(e.keyCode == 32){
				load = 0;
			}
		});
		
	}

	var countRad = 0;
	var degree = 1;
	var exec1 = 0;
	
	function play_scene2_1_4_interactive(){

		console.log('PLAY 2 1 4 Interactive')
		//Load Arrows
		var upArrow = preload.getResult("upArrow");
		var downArrow = preload.getResult("downArrow");

		add_SceneTitle(['title_choose_block']);

		createjs.Ticker.addEventListener("tick", renderFrame);	
		// this set makes it so the stage only re-renders when an event handler indicates a change has happened.

		var ContainerChoices = new createjs.Container();
		var ContainerChoiceOne = new createjs.Container();
		var ContainerChoiceTwo = new createjs.Container();
		
		var textdownArrow = new createjs.Text();
		textdownArrow.set({
				text: 'DUCK',
				textAlign: "center",
				textBaseline: "middle",
				color: '#fff',
				font: 'bold 18px "Open Sans", sans-serif',
				//x: -200,

		});
		
		var textOR = new createjs.Text();
		textOR.set({
				text: 'OR',
				textAlign: "center",
				textBaseline: "middle",
				color: '#ff0000',
				font: 'bold 20px "Open Sans", sans-serif',
				//x: (ctx.canvas.width/2),
				//y: (ctx.canvas.height)-70,
		});
		
		
		var textUpArrow = new createjs.Text();
		textUpArrow.set({
				text: 'JUMP',
				textAlign: "center",
				textBaseline: "middle",
				color: '#fff',
				font: 'bold 18px "Open Sans", sans-serif',
				//x: 200,
		});
		
		var bg1 = new createjs.Shape();
		
		var strokeWidth = 60 - 58,
		offset = strokeWidth / 2;

		bg1.graphics
		.setStrokeStyle(strokeWidth)
		.beginStroke('rgb(255, 255, 255)')
		.arc(0, 0, 45, _d2r(0), _d2r(360))
		.endFill();
		
		var bg2 = new createjs.Shape();
		bg2.graphics
		.setStrokeStyle(strokeWidth)
		.beginStroke('rgb(255, 255, 255)')
		.arc(0, 0, 45, _d2r(0), _d2r(360))
		.endFill();
		
		
		ContainerChoiceOne.addChild(textdownArrow);
		ContainerChoiceOne.addChild(bg1);
		ContainerChoiceOne.x = -130
		
		ContainerChoiceTwo.addChild(textUpArrow);
		ContainerChoiceTwo.addChild(bg2);
		ContainerChoiceTwo.x = 130
		
		ContainerChoices.addChild(ContainerChoiceOne);
		ContainerChoices.addChild(ContainerChoiceTwo);
		
		ContainerChoices.addChild(textOR);

		ContainerChoices.x = ctx.canvas.width/2;
		ContainerChoices.y = (ctx.canvas.height/2)+200;
		
		
		stage.addChild(ContainerChoices);
		

		var countdownTimer = new createjs.Text();

		var countdown = 10;
		countdownTimer.set({
				text: countdown,
				textAlign: "center",
				textBaseline: "middle",
				color: '#fff',
				font: 'bold 70px "Open Sans", sans-serif',
				x: (ctx.canvas.width/2),
				y: (ctx.canvas.height/2)
		});

		UI.addChild(countdownTimer);

		var triggeronce = 1;

		function renderFrame(event) {

			console.log('Render Frame 214')

			if (triggeronce == 1){
				triggeronce = 0;
				console.log('TRIGGER ONCE2')
				stage.addChild(UI);
				//tweendownArrow.gotoAndPlay(0);
				//CurrentVideo.pause();
				var timer = new Timer('100 milliseconds');
				timer.every('1 seconds', function () {
					
					if (countdown  < 1){
						console.log('DEATH!')
						timer.stop();
						timer.clear();
						CurrentVideo.pause();
						createjs.Ticker.removeEventListener('tick', renderFrame);
						playscene_death();
					}
					countdown--;
					countdownTimer.text = countdown;
				});
				timer.start();


				$("body").on("keydown", function(e){
					if(e.keyCode == 40){

						$( "body" ).off( "keydown")
						createjs.Tween.removeAllTweens();
						UI.removeAllChildren();
						
						timer.stop();
						timer.clear();

						stage.addChild(myFrame);
						CurrentVideo.play();
						CurrentVideo.playbackRate = 6;

						createjs.Ticker.removeEventListener('tick', renderFrame);

						return false; //to fix the scrolling down on space bar key press
					}
				});


			stage.update(event);
			}
		}	


	}

	function play_scene2_1_5_interactive(){

		console.log('PLAY 2 1 5 Interactive')

		var downArrow = preload.getResult("leftArrow");
		var upArrow = preload.getResult("rightArrow");

		add_SceneTitle(['title_choose_block2']);

		var triggeronce = 1;
		createjs.Ticker.addEventListener("tick", renderFrame);	

		
		var ContainerChoices = new createjs.Container();
		var ContainerChoiceOne = new createjs.Container();
		var ContainerChoiceTwo = new createjs.Container();
		
		var textdownArrow = new createjs.Text();
		textdownArrow.set({
				text: 'LEFT',
				textAlign: "center",
				textBaseline: "middle",
				color: '#fff',
				font: 'bold 20px "Open Sans", sans-serif',
				//x: -200,

		});
		
		var textOR = new createjs.Text();
		textOR.set({
				text: 'OR',
				textAlign: "center",
				textBaseline: "middle",
				color: '#ff0000',
				font: 'bold 20px "Open Sans", sans-serif',
				//x: (ctx.canvas.width/2),
				//y: (ctx.canvas.height)-70,
		});
		
		
		var textUpArrow = new createjs.Text();
		textUpArrow.set({
				text: 'RIGHT',
				textAlign: "center",
				textBaseline: "middle",
				color: '#fff',
				font: 'bold 20px "Open Sans", sans-serif',
				//x: 200,
		});
		
		var bg1 = new createjs.Shape();
		
		var strokeWidth = 60 - 58,
		offset = strokeWidth / 2;

		bg1.graphics
		.setStrokeStyle(strokeWidth)
		.beginStroke('rgb(255, 255, 255)')
		.arc(0, 0, 45, _d2r(0), _d2r(360))
		.endFill();
		
		var bg2 = new createjs.Shape();
		bg2.graphics
		.setStrokeStyle(strokeWidth)
		.beginStroke('rgb(255, 255, 255)')
		.arc(0, 0, 45, _d2r(0), _d2r(360))
		.endFill();
		
		
		ContainerChoiceOne.addChild(textdownArrow);
		ContainerChoiceOne.addChild(bg1);
		ContainerChoiceOne.x = -130
		
		ContainerChoiceTwo.addChild(textUpArrow);
		ContainerChoiceTwo.addChild(bg2);
		ContainerChoiceTwo.x = 130
		
		ContainerChoices.addChild(ContainerChoiceOne);
		ContainerChoices.addChild(ContainerChoiceTwo);
		
		ContainerChoices.addChild(textOR);

		ContainerChoices.x = ctx.canvas.width/2;
		ContainerChoices.y = (ctx.canvas.height/2)+200;
		
		
		stage.addChild(ContainerChoices);
		
		var countdownTimer = new createjs.Text();

		var countdown = 10;
		countdownTimer.set({
				text: countdown,
				textAlign: "center",
				textBaseline: "middle",
				color: '#fff',
				font: 'bold 50px "Open Sans", sans-serif',
				x: (ctx.canvas.width/2),
				y: (ctx.canvas.height/2)
		});
		UI.addChild(countdownTimer);

		countRad = 0;
		degree = 1;


		function renderFrame(event) {

			if (triggeronce == 1){
				triggeronce = 0;
				console.log('TRIGGER ONCE3')
				stage.addChild(UI);

				var timer = new Timer('100 milliseconds');
				timer.every('1 seconds', function () {
					if (countdown  < 1){
						timer.stop();
						timer.clear();
						createjs.Ticker.removeEventListener('tick', renderFrame);
						playscene_death();
					}
			
					countdown--;
					countdownTimer.text = countdown;
				});
				timer.start();


				$("body").on("keydown", function(e){
					if(e.keyCode == 40){

						$( "body" ).off( "keydown")
						createjs.Tween.removeAllTweens();
						UI.removeAllChildren();
						
						timer.stop();
						timer.clear();

						stage.addChild(myFrame);
						CurrentVideo.play();
						CurrentVideo.playbackRate = 6;

						createjs.Ticker.removeEventListener('tick', renderFrame);

						return false; //to fix the scrolling down on space bar key press
					}
				});

			}

			stage.update(event);
		}
	}

	function play_scene_2_1_6_interactive(){

		console.log('PLAY SCENE INTERACTIVE');

		var CurrentVideo2 = document.getElementById('stab_scene');	
		CurrentVideo2.setAttribute('loop', true);
		
		var buffer2 = new createjs.VideoBuffer(CurrentVideo2);
		var myFrame2 = new createjs.Bitmap(buffer2);
		dimensions = calculateScaleFrame(CurrentVideo2);

		myFrame2.scale = dimensions.frameScale;
		myFrame2.regY = CurrentVideo2.videoHeight/2
		myFrame2.regX = CurrentVideo2.videoWidth/2

		myFrame2.x = canvas.width/2
		myFrame2.y = canvas.height/2

		stage.addChild(myFrame2);
		CurrentVideo2.play();

		add_SceneTitle(['title_target']);

		//target2

		var target2 = preload.getResult("target1");
		var bitmap_target1 = new createjs.Bitmap(target2);
		bitmap_target1.scaleX = 0.2;
		bitmap_target1.scaleY = 0.2;
		
		var sizetarget = bitmap_target1.getBounds();
		console.log(sizetarget);
		
		bitmap_target1.regX = sizetarget.width/2;
		bitmap_target1.regY = sizetarget.height/2;
		
		bitmap_target1.x = (canvas.width/2);
		bitmap_target1.y =(canvas.height/2);

		stage.addChild(bitmap_target1);


		//stage.addChild(UI);

		var swordpoint = preload.getResult("swordpoint");
		var bitmap_sword = new createjs.Bitmap(swordpoint);

		bitmap_sword.scale = 0.1;
		console.log('Width: ');
		console.log(swordpoint.width/2);					

		console.log('Height: ');
		console.log(swordpoint.height/2);

	//	bitmap_sword.regX = 200;
		bitmap_sword.regY = 540;

		bitmap_sword.x = (ctx.canvas.width/2) ;

		bitmap_sword.y = (ctx.canvas.height/2) + 50;

		bitmap_sword.rotation = 0;

		bitmap_sword.name = "target1";
		bitmap_sword.rotation = 0;
		stage.addChild(bitmap_sword);

	//	stage.addChild(UI);

		var originalposy = bitmap_sword.y;



		createjs.Ticker.addEventListener("tick", handleTick);
		
		var moveLeft = true;
		var triggerjust1 = 0;
		var collision;

		$("body").on("keyup", function(e){
		//if ( hold == 0) {
				if(e.keyCode == 32){

					collision = ndgmr.checkPixelCollision(bitmap_target1,bitmap_sword,0,true);

					if (!collision){

						console.log('Shoot!');
						createjs.Tween.get(bitmap_sword)
						.to({y:originalposy - 30}, 50 ,createjs.Ease.linear)
						.to({y:originalposy + 30}, 150 ,createjs.Ease.linear);

						render_Miss();

					}else{
						$("body").off('keyup')
						createjs.Ticker.removeEventListener("tick", handleTick);
						
						stage.removeChild(UI);
						
						stage.addChild(myFrame);
						CurrentVideo.play();
					}

				}
		});

		function handleTick(event) {
			if (moveLeft) {
				
				if (collision){
					bitmap_sword.x -= 12;
				}else{
					bitmap_sword.x -= 7;
				}

				if(bitmap_sword.x < ctx.canvas.width/4*1.5 ){
					moveLeft = false;
				}
			}else{
				
				if (collision){
					bitmap_sword.x += 12;
				}else{
					bitmap_sword.x += 7;
				}
				

				if(bitmap_sword.x > ((ctx.canvas.width/4)*2.8) ){
					moveLeft = true;
				}
			}

			collision = ndgmr.checkPixelCollision(bitmap_target1,bitmap_sword,0,true);
			
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

	function finalScene(score){
			
		console.log('GG');
		console.log('SCORE :' );
		console.log('Display Form WIN' );
		
		chronoStop();
		
	

		var text_yourgrade = preload.getResult("text_yourgrade");
		var text_yourtime = preload.getResult("text_yourtime");
		
		
		var text_distinction = preload.getResult("distinction");
		var text_merit = preload.getResult("merit");
		var text_pass = preload.getResult("pass");
		var text_failed = preload.getResult("failed");
		var logoUI = preload.getResult("logoRed");

		var facebook = preload.getResult("facebook");
		var twitter = preload.getResult("twitter");
		$(".grade .big_title").append(text_yourgrade);
		if (score == "dead"){
			$(".grade .sub_title").append(text_failed);
		}else{
			$(".grade .sub_title").append(text_distinction);
		}
		
		
		
		$(".logo_header").append(logoUI);
		
		
	
		$(".yourtime").prepend(text_yourtime);
		
		
//		$(".mytime").text(currentTime);
		
		
		$(".facebook").append(facebook);
		$(".twitter").append(twitter);
		
		
		//		
//		$(".ribbon_container").append(ribbon_green);
//		$(".ribbon_text").append(text_merit);	

//		
//		
//		$(".mytime").text(currentTime);
		
		
		$('.screen__loader').hide();
		$('.screen').show();
		$('.screen__form').fadeIn();
		
		return;
	}
	
	function playAgain(){
		var i;
		for (i = 0; i < scenes.length; i++) { 
		  scenes[i] = 0;
		}

		hold = 1;
		chronoStop();
		
		
		
		if (weaponsAvailable.sword == 0 && weaponsAvailable.rapier == 0 && weaponsAvailable.stick == 0){
			finalScene();
		}else{
			choseyourweapon(true);
		}
		
		
		
	}
	
	function playscene_death(){
		
		
		
		console.log('play death scene');
		
		var CurrentVideo2 = document.getElementById('scene_death');	
		CurrentVideo2.setAttribute('loop', true);
		
		var buffer2 = new createjs.VideoBuffer(CurrentVideo2);
		var myFrame2 = new createjs.Bitmap(buffer2);
		dimensions = calculateScaleFrame(CurrentVideo2);

		myFrame2.scale = dimensions.frameScale;
		myFrame2.regY = CurrentVideo2.videoHeight/2
		myFrame2.regX = CurrentVideo2.videoWidth/2

		myFrame2.x = canvas.width/2
		myFrame2.y = canvas.height/2

		stage.addChild(myFrame2);
		CurrentVideo2.play();
		
		
		createjs.Tween.removeAllTweens();
		UI.removeAllChildren();
		chronoStop();
		finalScene('dead');
		
	}	
	
	//TODO: Responsive;
	
	function initvideo(){
		console.log('Init Video');
		
		var initialVideo = document.getElementById('scene1init');	
		//CurrentVideo2.setAttribute('loop', true);
		
		var buffer = new createjs.VideoBuffer(initialVideo);
		var myFrame = new createjs.Bitmap(buffer);
		dimensions = calculateScaleFrame(initialVideo);

		myFrame.scale = dimensions.frameScale;
		myFrame.regY = initialVideo.videoHeight/2
		myFrame.regX = initialVideo.videoWidth/2

		myFrame.x = canvas.width/2
		myFrame.y = canvas.height/2

		filmContainer.addChild(myFrame);
		
		initialVideo.play();
	
		
		initialVideo.addEventListener('ended', function(){
			
			console.log('Scene end');
				
			initialVideo.pause();
			
			stage.update();
			
		//	filmContainer.removeAllChildren();
			 
			choseyourweapon(false);
			
			//finalScene();
		}, false);
		
		
		
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
	
	
	/**
	 * Renders 6x6 grid on the canvas
	 */
	function renderGRID (){

		var Vertical1 = new createjs.Shape();
		var Vertical2 = new createjs.Shape();
		var Vertical3 = new createjs.Shape();
		var Vertical4 = new createjs.Shape();
		var Vertical5 = new createjs.Shape();
		var Vertical6 = new createjs.Shape();
		
		var Horizontal1 = new createjs.Shape();
		var Horizontal2 = new createjs.Shape();
		var Horizontal3 = new createjs.Shape();
		var Horizontal4 = new createjs.Shape();
		var Horizontal5 = new createjs.Shape();
		var Horizontal6 = new createjs.Shape();

		Vertical1.graphics.beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  1 , canvas.height , 0);
		Vertical2.graphics.beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  1 , canvas.height , 0);
		Vertical3.graphics.beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  1 , canvas.height , 0);
		Vertical4.graphics.beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  1 , canvas.height , 0);
		Vertical5.graphics.beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  1 , canvas.height , 0);
		Vertical6.graphics.beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  1 , canvas.height , 0);

		Horizontal1.graphics.beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  canvas.width , 1 , 0);
		Horizontal2.graphics.beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  canvas.width , 1 , 0);
		Horizontal3.graphics.beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  canvas.width , 1 , 0);
		Horizontal4.graphics.beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  canvas.width , 1 , 0);
		Horizontal5.graphics.beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  canvas.width , 1 , 0);
		Horizontal6.graphics.beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  canvas.width , 1 , 0);
		
		stage.addChild(Vertical1);
		stage.addChild(Vertical2);
		stage.addChild(Vertical3);	
		stage.addChild(Vertical4);
		stage.addChild(Vertical5);
		stage.addChild(Vertical6);	

		stage.addChild(Horizontal1);
		stage.addChild(Horizontal2);
		stage.addChild(Horizontal3);
		stage.addChild(Horizontal4);
		stage.addChild(Horizontal5);
		stage.addChild(Horizontal6);

		createjs.Ticker.addEventListener('tick', addGrid);

		function addGrid(){

			Vertical1.graphics.clear().beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  1 , canvas.height , 0);
			Vertical2.graphics.clear().beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  1 , canvas.height , 0);
			Vertical3.graphics.clear().beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  1 , canvas.height , 0);
			Vertical4.graphics.clear().beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  1 , canvas.height , 0);
			Vertical5.graphics.clear().beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  1 , canvas.height , 0);
			Vertical6.graphics.clear().beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  1 , canvas.height , 0);

			Horizontal1.graphics.clear().beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  canvas.width , 1 , 0);
			Horizontal2.graphics.clear().beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  canvas.width , 1 , 0);
			Horizontal3.graphics.clear().beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  canvas.width , 1 , 0);
			Horizontal4.graphics.clear().beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  canvas.width , 1 , 0);
			Horizontal5.graphics.clear().beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  canvas.width , 1 , 0);
			Horizontal6.graphics.clear().beginStroke('#FF0000').beginFill("#FF0000").drawRoundRect( 0, 0,  canvas.width , 1 , 0);

			Horizontal1.alpha = 0.5;
			Horizontal2.alpha = 0.5;
			Horizontal3.alpha = 0.5;
			Horizontal4.alpha = 0.5;
			Horizontal5.alpha = 0.5;
			Horizontal6.alpha = 0.5;

			Vertical1.alpha = 0.5;
			Vertical2.alpha = 0.5;
			Vertical3.alpha = 0.5;
			Vertical4.alpha = 0.5;
			Vertical5.alpha = 0.5;
			Vertical6.alpha = 0.5;

			Horizontal1.y = (canvas.height/6 )*1;
			Horizontal2.y = (canvas.height/6 )*2;
			Horizontal3.y = (canvas.height/6 )*3;
			Horizontal4.y = (canvas.height/6 )*4;
			Horizontal5.y = (canvas.height/6 )*5;
			Horizontal6.y = (canvas.height/6 )*6;

			Vertical1.x = (canvas.width/6 )*1;
			Vertical2.x = (canvas.width/6 )*2;
			Vertical3.x = (canvas.width/6 )*3;
			Vertical4.x = (canvas.width/6 )*4;
			Vertical5.x = (canvas.width/6 )*5;
			Vertical6.x = (canvas.width/6 )*6;




			stage.update();

		}

	}
	
	
	/**
	 * Renders Main UI Elements
	*/
	function displayMainUI(){
		
		var logoUI = preload.getResult("logoRed");
		var headphones = preload.getResult("headphones");
		
		//Create bitmaps
		var bitmap_logoUI = new createjs.Bitmap(logoUI);
		var bitmap_headphones = new createjs.Bitmap(headphones);
		//Create container
		var bottonmUI = new createjs.Container();
		var timerUI = new createjs.Container();
		
		var creditsText = new createjs.Text();
		creditsText.set({
				text: "Credits",
				textAlign: "left",
				textBaseline: "middle",
				color: '#bababa',
				font: '16px "Open Sans", sans-serif',
				x: (canvas.width )  - (canvas.width*0.026),
				//y: canvas.height -  canvas.height * 0.02,
		});
		
		
		var timerText = new createjs.Text();
		timerText.set({
				text: "YOUR TIME",
				textAlign: "left",
				textBaseline: "middle",
				color: '#bababa',
				font: '12px "Open Sans", sans-serif',
				x: 10,
				y: -20,
		});

		var timer = new createjs.Text();
		timer.set({
				text: currentTime,
				textAlign: "left",
				textBaseline: "middle",
				color: '#bababa',
				font: 'bold 16px "Open Sans", sans-serif',
				//x: (canvas.width ) - canvas.width*0.02,
				//y: canvas.height -  canvas.height * 0.02,
		});
		var timersecs = new createjs.Text();
		timersecs.set({
				text: currentTimesec,
				textAlign: "left",
				textBaseline: "middle",
				color: '#da332b',
				font: 'bold 16px "Open Sans", sans-serif',
				x: +63,
				//y: canvas.height -  canvas.height * 0.02,
		});

		
		timerUI.addChild(timerText);
		timerUI.addChild(timer);
		timerUI.addChild(timersecs);
	
		//timer.regX = timer.getMeasuredWidth()/2 
		//bottonmUI.regX = timer.getMeasuredWidth()/2 ;

		//Start the timer;
		chronoStart();

		//Update timer;
		createjs.Ticker.addEventListener('tick', timerUpdate);

		function timerUpdate(){
			
			bitmap_logoUI.x = canvas.width/2;
			bitmap_logoUI.y = canvas.height * 0.04;
			bitmap_logoUI.scale = 0.1;
			bitmap_logoUI.regX = (logoUI.width*3);

			//bitmap_headphones.scale =  (parseFloat(canvas.width ) / parseFloat( headphones.width  ) )*0.015 ;
			bitmap_headphones.y = (canvas.height ) - canvas.height*0.055;
			bitmap_headphones.x = (canvas.width*0.015) ;

			//timer.scale =  (parseFloat(canvas.width) / parseFloat(timer.getMeasuredWidth()) )*0.06;

			timer.text = currentTime;
			timersecs.text = currentTimesec;
			
			//bottonmUI.x =(canvas.width ) - canvas.width*0.015;
			//bottonmUI.y =(canvas.height ) - canvas.height*0.055; 
			//bottonmUI.y =(canvas.height ) - canvas.height*0.055;
			
			//bottonmUI.x = (canvas.width/2);
			timerUI.x = (canvas.width/2) - timer.getMeasuredWidth() +20 ;
			timerUI.y = (canvas.height ) - canvas.height*0.055;

			creditsText.x = (canvas.width )  - (canvas.width*0.065),
			creditsText.y = (canvas.height ) - canvas.height*0.055;

			//bottonmUI.addChild(timer);
		
//			stage.addChild(bitmap_logoUI);
//			stage.addChild(creditsText);
//			stage.addChild(bitmap_headphones);
//			stage.addChild(timerUI);
//			
			mainUI.addChild(bitmap_logoUI);
			mainUI.addChild(creditsText);
			mainUI.addChild(bitmap_headphones);
			mainUI.addChild(timerUI);
			
			filmContainer.addChild(mainUI);
			stage.update();

		}

	}

	function renderFraming(){

			
			

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
				
				
//				bitmap_logoUI.x = canvas.width/2;
//				bitmap_logoUI.y = canvas.height* 0.05;
//
//				bitmap_logoUI.scale =  (parseFloat(canvas.width) / parseFloat(logoUI.width) )*0.15;
//				frame.addChild(bitmap_logoUI);
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


		var TitleUI = new createjs.Container();
		var uiDimension;
		
		//console.log(uiDimension);
		//TitleUI.regY = uiDimension.height/2;

		//createjs.Tween.get(bitmap_bg).to({alpha:1 }, 300);

		title.forEach(function(title, index) {

			var titleimg = preload.getResult(title);

			var scale2 = (((canvas.height*100)/titleimg.height)/100) / 20;
			console.log('Title Scale = ' + scale2)
			
			var bitmap_title = new createjs.Bitmap(titleimg);
			
			bitmap_title.x = -1000;
			bitmap_title.y = 0;
			bitmap_title.scale = bitmap_title.originalScale = 0.7
			bitmap_title.rotation = 0;
			bitmap_title.name = title;
			
			bitmap_title.alpha = 0;

			TitleUI.addChild(bitmap_title);
			uiDimension = TitleUI.getBounds();

//			bitmap_title.regY =0;

			createjs.Tween.get(bitmap_title).wait(300*index + 100).to({alpha:1,y : 0, x : 0 , scale : 0.11  }, 700);

		});
		console.log(uiDimension);
		
		TitleUI.regY = uiDimension.height/1.5;
		TitleUI.x = 50;
		TitleUI.y =(canvas.height/2);
		
		UI.addChild(TitleUI);
		mainUI.addChild(UI);

		//bitmap_bg.regY =  uiDimension.height/2;
		//bitmap_bg.y =  uiDimension.height/2 - 60;

		createjs.Ticker.addEventListener('tick', titleUpdate);

		function titleUpdate(){
			TitleUI.scale = (canvas.width/uiDimension.width) * 0.4 
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
		bitmap_grunge.scale  = 0.8;
		bitmap_grunge.rotation = 0;
		bitmap_grunge.name = "overlay";
		bitmap_grunge.alpha = 1;

		//Add it to the UI;
		UI.addChild(bitmap_grunge);
		//Fade it in
		createjs.Tween.get(bitmap_grunge).to({alpha:0, y: bitmap_grunge.y -10}, 300).play();

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
		initvideo();
		//weaponsAvailable.sword = 0;
		//choseyourweapon(false);

		//renderGRID();
		displayMainUI();

		//playscene_death ();
		//add_BackgroundFrame();
		

		//finalScene();
	
		//renderFraming();

	});		
	$(".go_again").on( "click" , function(e){
		$("header").fadeOut();
		$("footer").fadeOut();
		$(".screen").hide();
		$(".screen__form").fadeOut();
		initvideo();
		displayMainUI();
	});
	
	//Social Events;
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