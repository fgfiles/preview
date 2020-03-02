// JavaScript Document v0.21
//made by Lab interactivos Colombia www.labinc.co
GameManager.Game = function (game){
	var charactermenu;
	//group to change z index on the character buttons
	var selectedCharacter;
	
	var singCharactersButtons;
	var Characters;
	//var palletHit;
	var palletGlow;
	GameManager.DragUpdate = false;
	var menuDrag = false;
	var tempButton;
	var tempButtonX;
	var tempIndex;
	var Positions;
	var CharacterSlot;
	var starMiniGames;
	var BlurEvents;
	var soundDrop;
	var soundDrag;
	var soundTansition;
	var hand;
	//var hand2;
	var tween1;
	//var tween2;
	//var tweenEvents1;
	//var tweenEvents2;
	var click;
	
};
GameManager.Game.prototype = {
	setup: function(){
		CharacterSlot = [];
		BlurEvents = [];
		Positions = [[215,170,1],[455,170,1],[705,170,1],[327,238,1],[580,238,1],[154,313,1],[740,313,1]];
		//this.btHome.visible = 0;
		this.btPause.visible = 0;
		this.btPlay.visible = 1;
		this.btSoundOff.visible = 1;
		this.btSoundOn.visible = 0;
		//////
		this.fondo.y = 0;
		this.luna.y = this.lunaY;
		this.edificios3.y = this.edificios3Y;
		this.edificios2.y = this.edificios2Y;
		this.edificios1.y = this.edificios1Y;
		this.titulo.y = this.tituloY;
		this.btPlay.y = 370;
		this.fondoTarima.y = this.fondoTarimaY;
		//palletHit.visible = 0;
		charactermenu.visible = 0;
		this.backPause.alpha = 0;
		this.pauseS.visible = 0;
		this.pauseHomeBt.visible = 0;
		this.Playbt.visible = 0;
		hand.visible = 0;
		//hand2.visible = 0;
		
		this.backPop.alpha = 0;
		this.popS.visible = 0;
		this.popOkBt.visible = 0;
		this.popXbt.visible = 0;
		
		this.backHow.alpha = 0;
		this.btCloseHow.visible = 0;
		this.lines.visible = 0;
		this.leftArrow.visible = 0;
		this.rightArrow.visible = 0;
		this.howTarima.visible = 0;
		
		this.howSlide.visible = 0;
		this.howMenu.visible = 0;
		this.howStar.visible = 0;
		this.howCharacter.visible = 0;
		//this.howArrow1.visible = 0;
		//this.howArrow2.visible = 0;
		//this.howArrow3.visible = 0;
		this.grannyHow.visible = 0;
		this.frameimg.visible = 0;
		
		this.game.sound.volume = 1;
		
	},
	create: function(){
/*/// ipad solution audio
		this.game.sound.boot();
		
		///*/
		Characters = [];
		starMiniGames = [];
		game.time.advancedTiming = true;
    	game.time.desiredFps = 60;
		GameManager.soundControl.ini();
		//Esto es nuevo evento sound
		//game.time.event.loop(6575,GameManager.soundControlPlayAllActiveSounds,this);
		//
		singCharactersButtons = this.game.add.group();
		//BackGound add
		this.lunaY = 25;
		this.edificios3Y = 178;
		this.edificios2Y = 220;
		this.edificios1Y = 195;
		this.tituloY = 30;
		this.fondoTarimaY = 1000;
		this.fondo = this.game.add.sprite(0,0,'fondo');
		//this.fondo.scale.setTo(0.46);
		this.luna = this.game.add.sprite(25,this.lunaY,'luna');
		//this.luna.scale.setTo(0.46);
		this.edificios3 = this.game.add.sprite(190,this.edificios3Y,'edificios3');
		//this.edificios3.scale.setTo(0.46);
		this.edificios2 = this.game.add.sprite(5,this.edificios2Y,'edificios2');
		//this.edificios2.scale.setTo(0.46);
		this.edificios1 = this.game.add.sprite(18,this.edificios1Y,'edificios1');
		//this.edificios1.scale.setTo(0.46);
		this.titulo = this.game.add.sprite(40,this.tituloY,'titulo');
		this.carrot = this.titulo.addChild(game.make.sprite(500,100,'carrot',"zana (1)"));
		this.carrot.animations.add('animation0',Phaser.Animation.generateFrameNames('zana (',1,17,')'));
		this.carrot.animations.play('animation0',30,true);
		//this.titulo.scale.setTo(0.46);
		this.btPlay = this.game.add.button(600,310,'btPlay',this.introAnima,this);
		//this.btPlay.scale.setTo(0.46);
		this.fondoTarima = this.game.add.sprite(0,this.fondoTarimaY,'tarima');
		
		this.blueLight1 = this.fondoTarima.addChild(game.make.sprite(-20,145,'lightBlue'));
		this.redLight1 = this.fondoTarima.addChild(game.make.sprite(10,90,'lightRed'));
		this.yellowLight1 = this.fondoTarima.addChild(game.make.sprite(50,25,'lightYellow'));
		
		this.blueLight2 = this.fondoTarima.addChild(game.make.sprite(850,140,'lightBlue'));
		this.redLight2 = this.fondoTarima.addChild(game.make.sprite(820,80,'lightRed'));
		this.yellowLight2 = this.fondoTarima.addChild(game.make.sprite(770,20,'lightYellow'));
		this.yellowLight3 = this.fondoTarima.addChild(game.make.sprite(310,20,'lightYellow'));
		this.yellowLight4 = this.fondoTarima.addChild(game.make.sprite(520,25,'lightYellow'));
		//this.fondoTarima.scale.setTo(0.46);
		this.barraBotones = this.fondoTarima.addChild(game.make.sprite(0,406,'bar'));
		
		//menu add
		charactermenu = this.game.add.group();
		//this.btHome = this.game.add.button(0,65,'btHome',this.Reset,this);
		//this.btHome.scale.setTo(0.3);
		this.btPause = this.game.add.button(829,65,'btPause',this.pause,this);
		this.btPause.scale.setTo(0.6);
		this.btSoundOff = this.game.add.button(829,15,'btSound2',this.mute,this);
		this.btSoundOff.scale.setTo(0.6);
		this.btSoundOn = this.game.add.button(829,15,'btSound',this.mute,this);
		this.btSoundOn.scale.setTo(0.6);
		
		//hit areas add
		//palletHit = this.game.add.group();
		palletGlow = this.game.add.group();
		usedCharacte = this.game.add.group();
		selectedCharacter = this.game.add.group();
		//low tier
		//palletHit.add(GameManager.pallet.drawhitArea(147,100));
		//palletHit.add(GameManager.pallet.drawhitArea(390,100));
		//palletHit.add(GameManager.pallet.drawhitArea(640,100));
		palletGlow.add(this.game.add.sprite(152,118,'glow'));
		palletGlow.children[0].scale.setTo(0.48);
		palletGlow.children[0].alpha = 0.8;
		palletGlow.add(this.game.add.sprite(393,118,'glow'));
		palletGlow.children[1].scale.setTo(0.48);
		palletGlow.children[1].alpha = 0.8;
		palletGlow.add(this.game.add.sprite(643,118,'glow'));
		palletGlow.children[2].scale.setTo(0.48);
		palletGlow.children[2].alpha = 0.8;
		
		// middel tier
		
		//palletHit.add(GameManager.pallet.drawhitArea(268,170));
		//palletHit.add(GameManager.pallet.drawhitArea(518,170));
		palletGlow.add(this.game.add.sprite(252,170,'glow'));
		palletGlow.children[3].scale.setTo(0.6);
		palletGlow.children[3].alpha = 0.8;
		palletGlow.add(this.game.add.sprite(502,170,'glow'));
		palletGlow.children[4].scale.setTo(0.6);
		palletGlow.children[4].alpha = 0.8;
		
		
		//high tier
		
		//palletHit.add(GameManager.pallet.drawhitArea(93,254));
		//palletHit.add(GameManager.pallet.drawhitArea(683,254));
		palletGlow.add(this.game.add.sprite(67,240,'glow'));
		palletGlow.children[5].scale.setTo(0.7);
		palletGlow.children[5].alpha = 0.8;
		palletGlow.add(this.game.add.sprite(656,240,'glow'));
		palletGlow.children[6].scale.setTo(0.7);
		palletGlow.children[6].alpha = 0.8;
		palletGlow.add(this.game.add.sprite(292,215,'glowStart'));
		//palletGlow.children[7].scale.setTo(0.7);
		palletGlow.children[7].alpha = 0.8;
		
		//star
		//palletHit.add(GameManager.pallet.drawhitArea(387,274));
		
		
		//palletHit.visible = 0;
		palletGlow.visible = 0;
		
		
		
		
		///////////////////
		//characters
		//Create Buttons Characters
		for(var i = 0; i < 15; i++){
			GameManager.botones.createButton(this,i);
		}
		Characters[0] = new classCharacters(this.game,'bugs',charactermenu.children[0],0);
		Characters[1] = new classCharacters(this.game,'daffy',charactermenu.children[1],1);
		Characters[2] = new classCharacters(this.game,'silvestre',charactermenu.children[2],2);
		Characters[3] = new classCharacters(this.game,'sam',charactermenu.children[3],3);
		Characters[4] = new classCharacters(this.game,'porky',charactermenu.children[4],4);
		Characters[5] = new classCharacters(this.game,'tweety',charactermenu.children[5],5);
		Characters[6] = new classCharacters(this.game,'marvin',charactermenu.children[6],6);
		Characters[7] = new classCharacters(this.game,'speedy',charactermenu.children[7],7);
		Characters[8] = new classCharacters(this.game,'lola',charactermenu.children[8],8);
		///Cambio temporal de la abuela a coyote
		//Characters[9] = new classCharacters(this.game,'granny',charactermenu.children[9],9);
		Characters[9] = new classCharacters(this.game,'willy',charactermenu.children[9],9);
		Characters[10] = new classCharacters(this.game,'road',charactermenu.children[10],10);
		Characters[12] = new classCharacters(this.game,'taz',charactermenu.children[12],12);
		Characters[13] = new classCharacters(this.game,'squeaks',charactermenu.children[13],13);
		Characters[14] = new classCharacters(this.game,'granny',charactermenu.children[14],14);
		Characters[11] = new classCharacters(this.game,'fog',charactermenu.children[11],11);
		
		//star minigames cration
		starMiniGames[0] = new bugsStar(this.game,charactermenu.children[0],0);
		starMiniGames[1] = new daffyStar(this.game,charactermenu.children[1],1);
		starMiniGames[2] = new silvestreStar(this.game,charactermenu.children[2],2);
		starMiniGames[3] = new samStar(this.game,charactermenu.children[3],3);
		starMiniGames[4] = new porkyStar(this.game,charactermenu.children[4],4);
		starMiniGames[5] = new tweetyStar(this.game,charactermenu.children[5],5);
		starMiniGames[6] = new marvinStar(this.game,charactermenu.children[6],6);
		starMiniGames[7] = new speedyStar(this.game,charactermenu.children[7],7);
		starMiniGames[8] = new lolaStar(this.game,charactermenu.children[8],8);
		starMiniGames[9] = new willyStar(this.game,charactermenu.children[9],9);
		starMiniGames[10] = new roadStar(this.game,charactermenu.children[10],10);
		starMiniGames[11] = new fogStar(this.game,charactermenu.children[11],11);
		starMiniGames[12] = new tazStar(this.game,charactermenu.children[12],12);
		starMiniGames[13] = new squeaksStar(this.game,charactermenu.children[13],13);
		starMiniGames[14] = new grannyStar(this.game,charactermenu.children[14],14);
		///Cambio temporal de la abuela a coyote
		//starMiniGames[9] = new grannyStar(this.game,charactermenu.children[9],9);
		
		//How To play
		this.backHow = this.game.add.graphics(0,0);
		this.backHow.beginFill(0x000000, 0.5);
		this.backHow.drawRect(0,0,889,500);
		this.backHow.endFill();
		
		this.lines = this.game.add.sprite(889/2 - 784/2,500/2 - 467/2,'lines');
		
		
		this.howTarima = this.game.add.sprite(889/2,250,'tarimaHow');
		this.howTarima.anchor.setTo(0.5);
		this.howSlide = this.game.add.sprite(170,353,'menu2');
		
		this.mask = this.game.add.graphics(0,0);
		this.mask.beginFill(0x00ff00, 0.5);
		this.mask.drawRect(161,345,564,60);
		this.mask.endFill();
		
		this.howSlide.mask = this.mask;
		
		this.howMenu = this.game.add.sprite(165,353,'menu1');
		this.howStar = this.game.add.sprite(889/2,250,'howSolo');
		this.howStar.anchor.setTo(0.5);
		this.howCharacter = this.game.add.sprite(780,353,'howCharacter');
		//this.howArrow1 = this.game.add.sprite(889/2,250,'arrow1');
		//this.howArrow2 = this.game.add.sprite(889/2,250,'arrow2');
		//this.howArrow3 = this.game.add.sprite(75,380,'arrow3');
		this.grannyHow = this.game.add.sprite(360,170,'grannyhow');
		this.frameimg =  this.game.add.sprite(889/2,250,'frame');
		this.frameimg.anchor.setTo(0.5);
		
		this.leftArrow = this.game.add.button(100,230,'arrow');
		this.leftArrow.anchor.setTo(0.5);
		this.leftArrow.angle = 180
		this.rightArrow = this.game.add.button(790,250,'arrow');
		this.rightArrow.anchor.setTo(0.5);
		this.btCloseHow = this.game.add.button(800,20,'close',this.closeHow,this);
		
		
		
		//hud
		this.logo = this.game.add.sprite(15,15,'logo');
		//this.logo.scale.setTo(0.3);
		hand = this.game.add.sprite(200,460,'hand');
		hand.anchor.setTo(0.5);
		hand.scale.setTo(0.8);
		//hand2 = this.game.add.sprite(285,110,'hand2');
		
		//pause
		this.backPause = this.game.add.sprite(0,0,'black');
		//this.backPause.inputEnabled = true;
		
		this.pauseS = this.game.add.sprite(280,100,'pause');
		//this.pauseS.scale.setTo(0.46);
		this.pauseHomeBt = this.game.add.button(315,286,'pauseHomeBt',this.popUp,this);
		//this.pauseHomeBt.scale.setTo(0.46);
		this.Playbt = this.game.add.button(460,266,'playBt',this.play,this);
		//this.Playbt.scale.setTo(0.46);
		
		
		//pop up home
		this.backPop = this.game.add.sprite(0,0,'black');
		//this.backPop.inputEnabled = true;
		
		this.popS = this.game.add.sprite(320,130,'homePopup');
		this.popS.scale.setTo(0.6);
		this.popOkBt = this.game.add.button(345,270,'okbt',this.Reset,this);
		this.popOkBt.scale.setTo(0.5);
		this.popXbt = this.game.add.button(450,266,'close',this.pause,this);
		//this.Playbt.scale.setTo(0.46);
		
		
		
		
		//console.log(this.game.onBlur);
		this.soundBackGround = game.add.audio('fxBackGround',1,true);
		soundTansition = game.add.audio('fxTransition',1,false);
		this.soundTitel = game.add.audio('fxTitel',0.7,true);
		this.soundButton = game.add.audio('fxButton',0.6,false);
		soundDrop = game.add.audio('fxDrop',1,false);
		soundDrag = game.add.audio('fxDrag',1,false);
		
		
		click = new clic();
		
		
		
		//begin
		this.setup();
		this.soundTitel.play();
	},
	update:function(){
		//console.log(this.game.time.events.duration);
		//console.log(this.game.time.fps);
		//Drag Listener
		if(GameManager.DragUpdate != false){
			tempButton.x = this.game.input.x;
			tempButton.y = this.game.input.y;
			if(tempButton.y > 341 && menuDrag == true){
			   	charactermenu.x = tempButton.x - tempButtonX;
			   }else if (tempButton.y < 341 && menuDrag == true ){
				   menuDrag = false;
				   GameManager.botones.OderMenu();
			   }
			for(var h = 0; h<palletGlow.children.length;h++){
				palletGlow.children[h].alpha = 0.6;
			}
			if(this.game.input.y >= 0 && this.game.input.y <= 180 ){
				if(this.game.input.x >= 0 && this.game.input.x <= 294){
					palletGlow.children[0].alpha = 1;
				}else if(this.game.input.x >= 295 && this.game.input.x <= 604){
					palletGlow.children[1].alpha = 1;
				}else if(this.game.input.x >= 605 && this.game.input.x <= 889){
					palletGlow.children[2].alpha = 1;
				}
			}else if(this.game.input.y >= 181 && this.game.input.y <= 259 ){
				if(this.game.input.x >= 0 && this.game.input.x <= 444){
					palletGlow.children[3].alpha = 1;
				}else if(this.game.input.x >=445 && this.game.input.x <= 889){
					palletGlow.children[4].alpha = 1;
				}
			}else if(this.game.input.y >= 260 && this.game.input.y <= 380 ){
				if(this.game.input.x >= 0 && this.game.input.x <= 294){
					palletGlow.children[5].alpha = 1;
				}else if(this.game.input.x >= 295 && this.game.input.x <= 604){
					palletGlow.children[7].alpha = 1;
				}else if(this.game.input.x >= 605 && this.game.input.x <= 889){
					palletGlow.children[6].alpha = 1;
				}
			}	
		}
		GameManager.soundControl.ControlTime();
		this.OrientationPause();
	},
	introAnima: function(){
		
		click.playAniamtion();
		this.soundButton.play();
		this.soundTitel.stop();
		soundTansition.play();
		this.btPlay.visible = 0;
		var tempbases = -400;
		var animaSpeed = 0.8;
		//BackGround animation
		this.game.add.tween(this.fondo).to({ y:tempbases},6000*animaSpeed,"Linear",true);
		this.game.add.tween(this.luna).to({ y:tempbases-this.lunaY},6000*animaSpeed,"Linear",true);
		this.game.add.tween(this.edificios3).to({ y:tempbases-this.edificios3Y},5000*animaSpeed,"Linear",true);
		this.game.add.tween(this.edificios2).to({ y:tempbases-this.edificios2Y},4000*animaSpeed,"Linear",true);
		this.game.add.tween(this.edificios1).to({ y:tempbases-this.edificios1Y},3000*animaSpeed,"Linear",true);
		this.game.add.tween(this.titulo).to({ y:tempbases-this.tituloY},2000*animaSpeed,"Linear",true);
		this.Anima = this.game.add.tween(this.fondoTarima).to({y:0},3000*animaSpeed,"Linear",true);
		
		//listener to show intrucctions
		this.Anima.onComplete.add(this.ShowInstrucctions,this);
		this.logo.visible = false;
	},
	ShowInstrucctions: function(){
		// make hud visible
		soundTansition.stop();
		this.soundBackGround.play();
		//this.btHome.visible = 1;
		this.btSoundOff.visible = 1;
		this.btPause.visible = 1;
		//this.btHome.alpha = 0.1;
		this.btSoundOff.alpha = 0.1;
		this.btPause.alpha = 0.1;
		if(tutorial == false){
			this.openHow();	
			tutorial = true;
		}else{
			this.inigame();
		}
		//charactermenu.x
	},
	openHow:function(){
		this.backHow.alpha = 1;
		this.backHow.inputEnabled = true;
		
		this.btCloseHow.visible = 1;
		this.lines.visible = 1;
		this.frameimg.visible = 1;
		this.slide1How();
	},
	slide1How:function(){
		//ORGANIZAR LOS SLIDE ANIMAR Y TENER CUIDADO CON LOS ADD Y REMOVE DE EL ON INPUT
		click.playAniamtion();
		this.soundButton.play();

		this.leftArrow.visible = 0;
		this.rightArrow.visible = 1;
		this.howTarima.visible = 1;
		this.howSlide.visible = 1;
		this.howMenu.visible = 0;
		this.howStar.visible = 0;	
		this.howCharacter.visible = 0;
		//this.howArrow1.visible = 0;
		//this.howArrow2.visible = 0;
		//this.howArrow3.visible = 1;
		this.grannyHow.visible = 0;
		hand.visible = 1;
		hand.y = 410; 
		hand.x = 480; 
		hand.alpha = 1;
		this.howSlide.x = 170;
		if(this.tween1 != undefined){
		   this.tween1.stop();
			this.tween2.stop();   
			//this.tween3.stop();   
		}
		if(this.tween3 != undefined){
			this.tween3.stop();   
		}
		this.tween1 = this.game.add.tween(hand).to({x:[350,480]},4000,Phaser.Easing.Linear.None,true,-1,false);
		this.tween2 = this.game.add.tween(this.howSlide).to({x:[40,170]},4000,Phaser.Easing.Linear.None,true,-1,false);

		this.rightArrow.onInputDown.remove(this.slide1How,this);
		this.rightArrow.onInputDown.add(this.slide2How,this);
		
		this.backHow.events.onInputDown.add(this.slide2How,this);
		this.backHow.events.onInputDown.remove(this.slide3How,this);

		
	},
	slide2How:function(){
		click.playAniamtion();
		this.soundButton.play();
		
		this.tween1.stop();
		this.tween2.stop();
		if(this.tween3 != undefined){
		   this.tween3.stop();
		}
		
		
		hand.y = 410; 
		hand.x = 585; 
		hand.alpha = 1;
		this.howCharacter.y = 355; 
		this.howCharacter.x = 595;
		this.howCharacter.alpha = 1; 
		this.grannyHow.alpha = 0;
		
		this.tween1 = this.game.add.tween(hand).to({y:[260,260,260],x:[350,350,350],alpha:[1,0,0]},2000,Phaser.Easing.Linear.None,true,-1,false);
		this.tween2 = this.game.add.tween(this.howCharacter).to({y:[205,205,205],x:[360,360,360],alpha:[1,0,0]},2000,Phaser.Easing.Linear.None,true,-1,false);
		this.tween3 = this.game.add.tween(this.grannyHow).to({y:[this.grannyHow.y],x:[this.grannyHow.x],alpha:[0,1,1]},2000,Phaser.Easing.Linear.None,true,-1,false);
		
		
		this.leftArrow.visible = 1;
		this.rightArrow.visible = 1;
		this.howTarima.visible = 1;
		this.howSlide.visible = 0;
		this.howMenu.visible = 1;
		this.howStar.visible = 0;
		this.howCharacter.visible = 1;
		//this.howArrow1.visible = 0;
		//this.howArrow2.visible = 1;
		//this.howArrow3.visible = 0;
		this.grannyHow.visible = 1;
		hand.visible = 1;

		//console.log("si se logra");
		this.leftArrow.onInputDown.remove(this.slide2How,this);
		this.leftArrow.onInputDown.add(this.slide1How,this);
		
		
		this.rightArrow.onInputDown.remove(this.slide2How,this);
		this.rightArrow.onInputDown.remove(this.closeHow,this);
		this.rightArrow.onInputDown.add(this.slide3How,this);
		
		this.backHow.events.onInputDown.remove(this.slide2How,this);
		this.backHow.events.onInputDown.remove(this.closeHow,this);
		this.backHow.events.onInputDown.add(this.slide3How,this);
		
		
	},
	slide3How:function(){
		click.playAniamtion();
		this.soundButton.play();
		
		this.leftArrow.visible = 1;
		this.rightArrow.visible = 1;
		this.howTarima.visible = 1;
		this.howSlide.visible = 0;
		this.howMenu.visible = 1;
		this.howStar.visible = 1;
		this.howStar.alpha = 0;
		this.howCharacter.visible = 1;
		//this.howArrow1.visible = 1;
		//this.howArrow2.visible = 0;
		//this.howArrow3.visible = 0;
		this.grannyHow.visible = 0;
		hand.visible = 1;
		
		hand.y = 410; 
		hand.x = 585;
		hand.alpha = 1;
		this.howCharacter.y = 355; 
		this.howCharacter.x = 595;
		this.howCharacter.alpha = 1;
		
		
		
		
		//console.log("si se Cambia");
		
		 this.tween1.stop();
		this.tween2.stop();
		
		this.tween1 = this.game.add.tween(hand).to({y:[330,330,330],x:[440,440,440],alpha:[1,0,0]},3000,Phaser.Easing.Linear.None,true,-1,false);
		this.tween2 = this.game.add.tween(this.howCharacter).to({y:[275,275,275],x:[450,450,450],alpha:[1,0,0]},3000,Phaser.Easing.Linear.None,true,-1,false);
		this.tween3 = this.game.add.tween(this.howStar).to({y:[this.howStar.y],x:[this.howStar.x],alpha:[0,1,1]},3000,Phaser.Easing.Linear.None,true,-1,false);
		
		this.leftArrow.onInputDown.remove(this.slide1How,this);
		this.leftArrow.onInputDown.add(this.slide2How,this);
		
		this.rightArrow.onInputDown.remove(this.slide3How,this);
		this.rightArrow.onInputDown.add(this.closeHow,this);
		
		this.backHow.events.onInputDown.remove(this.slide3How,this);
		this.backHow.events.onInputDown.add(this.closeHow,this);
		
		
	},
	

	closeHow:function(){
		this.frameimg.visible = 0;
		this.backHow.alpha = 0;
		this.btCloseHow.visible = 0;
		this.lines.visible = 0;
		this.leftArrow.visible = 0;
		this.rightArrow.visible = 0;
		this.howTarima.visible = 0;
		this.howSlide.visible = 0;
		this.howMenu.visible = 0;
		this.howStar.visible = 0;
		this.howCharacter.visible = 0;
		//this.howArrow1.visible = 0;
		//this.howArrow2.visible = 0;
		//this.howArrow3.visible = 0;
		this.grannyHow.visible = 0;
		hand.visible = 0;
		this.backHow.inputEnabled = false;
		this.inigame();
	},
	inigame:function(){
		//this.game.add.tween(this.btHome).to({alpha: 1},1000,Phaser.Easing.Bounce.In,true);
		this.game.add.tween(this.btSoundOff).to({alpha: 1},500,Phaser.Easing.Bounce.In,true);
		this.game.add.tween(this.btPause).to({alpha: 1},700,Phaser.Easing.Bounce.In,true);
		this.game.add.tween(this.blueLight1).to({alpha: [0,1]},3000,Phaser.Easing.Linear.None, true,-1,false);
		this.game.add.tween(this.redLight1).to({alpha: [1,0,1]},4000,Phaser.Easing.Linear.None, true,-1,false);
		this.game.add.tween(this.yellowLight1).to({alpha: [0,1,0]},6000,Phaser.Easing.Linear.None, true,-1,false);
		this.game.add.tween(this.blueLight2).to({alpha: [0,1,1]},5000,Phaser.Easing.Linear.None, true,-1,false);
		this.game.add.tween(this.redLight2).to({alpha: [1,0,1]},7500,Phaser.Easing.Linear.None, true,-1,false);
		this.game.add.tween(this.yellowLight2).to({alpha: [0,1]},3500,Phaser.Easing.Linear.None, true,-1,false);
		this.game.add.tween(this.yellowLight3).to({alpha: [0,1]},5000,Phaser.Easing.Linear.None, true,-1,false);
		this.game.add.tween(this.yellowLight4).to({alpha: [1,0,1]},7000,Phaser.Easing.Linear.None, true,-1,false);
		// activate hit areas
		//palletHit.visible = 1;
		BlurEvents[0] = this.game.onBlur.add(this.pause,this);
		BlurEvents[1] = this.game.onFocus.add(this.play,this);
		charactermenu.visible = 1;
		charactermenu.x = -1200;
		this.game.add.tween(charactermenu).to({x: 0},1500,Phaser.Easing.Bounce.Out,true);
	},
	/*animaHand2:function(){
		if(game.tween != undefined){
		   game.tween.events.remove(tweenEvents1);
		   }
		hand.visible = 0;
		hand2.visible = 1;
		tween2 = this.game.add.tween(hand2).to({y:[100,110,100,110]},500,Phaser.Easing.Linear.None,true);
		tweenEvents2 = tween2.onComplete.add(this.animaHand1, this);
	},*/
	/*animaHand1:function(){
		/*if(game.tween != undefined){
		   game.tween.events.remove(tweenEvents2);
		   }
		hand.x = 200;
		hand.y = 460;
		hand.visible = 1;
		//hand2.visible = 0;
		tween1 = this.game.add.tween(hand).to({x:[300,330,330,330,330,330],y:[180,170,160,170,160,170],angle: [0,150,150,150,150,150]},4000,Phaser.Easing.Linear.None,true,-1,false);
		//tweenEvents1 = tween1.onComplete.add(this.animaHand2, this);
	},*/
	Reset: function(){
		click.playAniamtion();
		this.soundButton.play();
		game.paused = false;
		this.enableInput();
		this.game.onBlur.remove(this.pause,this);
		this.game.sound.stopAll();
		this.game.state.start('Game');
		
	},
	pause:function(){
		click.playAniamtion();
		this.soundButton.play();
		game.paused = true;
		this.backPause.alpha = 1;
		this.pauseS.visible = 1;
		this.pauseHomeBt.visible = 1;
		this.Playbt.visible = 1;
		
		this.backPop.alpha = 0;
		this.popS.visible = 0;
		this.popOkBt.visible = 0;
		this.popXbt.visible = 0;
		this.diableInput();
		
	},
	popUp:function(){
		click.playAniamtion();
		this.soundButton.play();
		this.backPause.alpha = 0;
		this.pauseS.visible = 0;
		this.pauseHomeBt.visible = 0;
		this.Playbt.visible = 0;
		
		this.backPop.alpha = 1;
		this.popS.visible = 1;
		this.popOkBt.visible = 1;
		this.popXbt.visible = 1;
	},
	play:function(){
		click.playAniamtion();
		this.soundButton.play();
		game.paused = false;
		this.backPause.alpha = 0;
		this.pauseS.visible = 0;
		this.pauseHomeBt.visible = 0;
		this.Playbt.visible = 0 ;
		this.enableInput();
		
		
	},
	mute:function(){
		click.playAniamtion();
		this.soundButton.play();
		if(this.game.sound.volume >0){
		this.game.sound.volume = 0;
			this.btSoundOff.visible = 0;
			this.btSoundOn.visible = 1;
		}else{
			this.game.sound.volume = 1;
			this.btSoundOff.visible = 1;
			this.btSoundOn.visible = 0;
		}
	},
	OrientationPause:function(){
     	if(game.device.desktop == false && game.device.android == true){
			if(window.screen.width < window.screen.height){
				this.pause();	
			}
     	}
	},
	diableInput:function(){
		for(var i = 0;i < charactermenu.children.length;i++){
			charactermenu.children[i].inputEnabled = false;
			charactermenu.children[i].input.disableDrag();
		}
		for(var h = 0;h < Characters.length;h++){
			Characters[h].disableInput();
		}
	},
	enableInput:function(){
		for(var i = 0;i < charactermenu.children.length;i++){
			charactermenu.children[i].inputEnabled = true;
			charactermenu.children[i].input.enableDrag();
		}
		//console.log(Characters);
		for(var h = 0;h < Characters.length;h++){
			Characters[h].enableInput();
		}
	}
};

GameManager.botones = {
	createButton:function (game,indexNum){
		var posX = indexNum *80;
		var button = game.add.sprite(posX+40,455,'button','boton ('+(indexNum+1)+').png');
		button.anchor.setTo(0.5);
		button.name = "button"  + indexNum;
		button.inputEnabled = true;
		button.input.enableDrag();
		button.events.onInputDown.add(this.clickDown,this);
		button.events.onInputUp.add(this.clickUp,this);
		button.events.onInputOver.add(this.overUp,this);
		button.events.onInputOut.add(this.outUp,this);
		charactermenu.add(button);
	},
	clickDown: function(target){
		click.playAniamtion();
		hand.visible = 0;
		/*hand2.visible = 0;
		game.tween.events.remove(tweenEvents1);
		game.tween.events.remove(tweenEvents2);*/
		soundDrag.play();
		if(charactermenu.contains(target)){
		   tempIndex = charactermenu.getChildIndex(target);
		   }
		tempButton = target;
		tempButtonX = target.x;
		GameManager.DragUpdate = true;
		menuDrag = true;
		selectedCharacter.add(target);
		target.scale.setTo(1);
		palletGlow.visible = 1;
		palletGlow.alpha = 0.6;
	},
	clickUp:function(target){
		click.playAniamtion();
		soundDrop.play();
		target.scale.setTo(1);
		tempButtpn = null;
		tempButtonX = null;
		GameManager.DragUpdate = false;
		if(this.Checkhit(target) == true){
			singCharactersButtons.add(target);
		} else if(menuDrag == true){
			target.y = 455;
			charactermenu.addAt(target,tempIndex);
		}  
		else{
			charactermenu.addAt(target,tempIndex);
			game.add.tween(target).to({ y:455},50,"Linear",true);
		}
		this.OderMenu();
		this.posMenu();
		palletGlow.visible = 0;
	},
	overUp:function(target){
		//console.log("over");
		game.add.tween(target.scale).to({ x:1.05 , y:1.05},50,"Bounce",true);
	},
	outUp:function(target){
		//console.log("out");
		game.add.tween(target.scale).to({ x:1 , y:1},50,"Bounce",true);
	},
	OderMenu: function(){
		for(var i = 0;i < charactermenu.children.length; i++ ){
			game.add.tween(charactermenu.children[i]).to({ x:i*80},50,"Linear",true);
		}
	},
	posMenu: function(){
		if(charactermenu.x < game.width-charactermenu.width){
			   game.add.tween(charactermenu).to({ x:game.width-charactermenu.width},100,"Linear",true);
			}else if(charactermenu.x >= 0){
				 game.add.tween(charactermenu).to({ x:50},100,"Linear",true);
			}
	},
	Checkhit: function(target){
		var boolHit = false;
		for(var i = 0; i<charactermenu.children.length;i++){
			if(Phaser.Rectangle.intersects(charactermenu.children[i],target)){
				tempIndex = charactermenu.getChildIndex(charactermenu.children[i]);;
			}
		}
		if(game.input.y >= 0 && game.input.y <= 180 ){
			if(game.input.x >= 0 && game.input.x <= 294){
				menuDrag = false;
				boolHit =  true;
				GameManager.pallet.callCharacter(0,Number(target.name.substring(6)));
			}else if(game.input.x >= 295 && game.input.x <= 604){
				menuDrag = false;
				boolHit =  true;
				GameManager.pallet.callCharacter(1,Number(target.name.substring(6)));
			}else if(game.input.x >= 605 && game.input.x <= 889){
				menuDrag = false;
				boolHit =  true;
				GameManager.pallet.callCharacter(2,Number(target.name.substring(6)));
			}
		}else if(game.input.y >= 181 && game.input.y <= 259 ){
			if(game.input.x >= 0 && game.input.x <= 444){
				menuDrag = false;
				boolHit =  true;
				GameManager.pallet.callCharacter(3,Number(target.name.substring(6)));
			}else if(game.input.x >=445 && game.input.x <= 889){
				menuDrag = false;
				boolHit =  true;
				GameManager.pallet.callCharacter(4,Number(target.name.substring(6)));
			}
		}else if(game.input.y >= 260 && game.input.y <= 380 ){
			if(game.input.x >= 0 && game.input.x <= 294){
				menuDrag = false;
				boolHit =  true;
				GameManager.pallet.callCharacter(5,Number(target.name.substring(6)));
			}else if(game.input.x >= 295 && game.input.x <= 604){
				menuDrag = false;
				boolHit =  true;
				GameManager.pallet.callCharacter(7,Number(target.name.substring(6)));
			}else if(game.input.x >= 605 && game.input.x <= 889){
				menuDrag = false;
				boolHit =  true;
				GameManager.pallet.callCharacter(6,Number(target.name.substring(6)));
			}
		}

		/*for(var h = 0; h<palletHit.children.length;h++){
			if(palletHit.children[h]._localBounds.intersects(target,true)){
				menuDrag = false;
				boolHit =  true;
				GameManager.pallet.callCharacter(h,Number(target.name.substring(6)));
			}
		}*/
		return boolHit;
	},
	buttonback: function(button){
		charactermenu.add(button);
		game.add.tween(button).to({ y:455},50,"Linear",true);
		this.OderMenu();
		this.posMenu();
	},
	resetCharacterSlot: function(slothIndex){
		//console.log(slothIndex);
		CharacterSlot[slothIndex] = undefined;
	}
}

GameManager.pallet = {
	/*drawhitArea: function(x,y){
		var rect = game.add.graphics(0,0);
		 rect.beginFill(0xFF700B, 0.1);
		rect.drawRect(x,y,120,80);
		rect.endFill();
		return rect;
	},*/
	callCharacter: function(target,characterIndex){
		/////
			if(CharacterSlot[target] != undefined){
				Characters[CharacterSlot[target]].resetCharacter();	
			}
			///
		switch(target){
			case 0:
			case  1:
			case  2:
				CharacterSlot[target] = characterIndex;
				Characters[characterIndex].placeCharacter(Positions[target],0,target);
				break;
			case  3:
			case  4:
				CharacterSlot[target] = characterIndex;
				Characters[characterIndex].placeCharacter(Positions[target],1,target);
				break;
			case  5:
			case  6:
				CharacterSlot[target] = characterIndex;
				Characters[characterIndex].placeCharacter(Positions[target],2,target);
				break;
			case 7:
				///// aqui es donde trbajao ahorita
				
				starMiniGames[characterIndex].open();
				soundTansition.play();
				break;
		 }
	},
	
}
GameManager.soundControl = {
	ini:function(){
		this.charactersSounds = [];
		this.currentSounds = [];
		this.isPlaying = false;
		//this.baseTimeSong;
	},
	addSound: function(index,character){
		this.charactersSounds[index] = [
			[game.add.audio(character.name+'0',0.7,true),false],
			[game.add.audio(character.name+'1',0.7,true),false],
			[game.add.audio(character.name+'2',0.7,true),false],
			character
		];
		this.charactersSounds[index][0][0].allowMultiple = true;
		this.charactersSounds[index][1][0].allowMultiple = true;
		this.charactersSounds[index][2][0].allowMultiple = true;
	},
	PlaySong(index,level){
		this.charactersSounds[index][level][1]= true;
		if(this.isPlaying == false){
			//this.baseTimeSong = this.charactersSounds[index][level][0];
			this.charactersSounds[index][level][0].play();
			this.charactersSounds[index][3].playAnimation(level);
			this.isPlaying = true;
			this.timerEvent = game.time.events.loop(6575,this.PlayAllActiveSounds,this);
		}else{
			this.charactersSounds[index][3].playAnimation(3);
		}
	},
	StopSong(index){
		this.charactersSounds[index][0][1] = false;
		this.charactersSounds[index][1][1] = false;
		this.charactersSounds[index][2][1] = false;
		this.charactersSounds[index][0][0].stop();
		this.charactersSounds[index][1][0].stop();
		this.charactersSounds[index][2][0].stop();
		if(GameManager.soundControl.CheckIsPlaying() != undefined){
			// here is where the character start if it is alone  on idle animation
			//this.baseTimeSong = GameManager.soundControl.CheckIsPlaying();
			//game.time.events.remove(this.timerEvent);
			//this.timerEvent = game.time.events.loop(6575,this.PlayAllActiveSounds,this);
			//this.PlayAllActiveSounds();
		}else{
			this.isPlaying = false;
			if(this.timerEvent != undefined ){
				 game.time.events.remove(this.timerEvent);
			}
		}
	},
	CheckIsPlaying:function(){
		var temp;
		for(var i = 0;i<this.charactersSounds.length;i++){
			if(this.charactersSounds[i] != undefined){
		 //if temporal mientras no esten todos lso personajes
				for(var h = 0;h<this.charactersSounds[i].length-1;h++){
					if(this.charactersSounds[i][h][1] == true){
						if(temp == undefined){
							temp = this.charactersSounds[i][h][0];
							h = this.charactersSounds[i].length +1;
						}
					}
				}
				if(temp != undefined){
					i = this.charactersSounds.length +1;
				}
			}
		}
		return temp;
	},
	ControlTime:function(){
		//console.log("current time bugs 3: " + this.charactersSounds[0][2].currentTime);
		/*this.isPlaying == true;
		if(this.isPlaying == true){
			if(this.baseTimeSong.currentTime == 6575){
				GameManager.soundControl.PlayAllActiveSounds();
			}
		}*/
	},
	PlayAllActiveSounds:function(){
		for(var i = 0;i<this.charactersSounds.length;i++){
			if(this.charactersSounds[i] != undefined){
		 //if temporal mientras no esten todos lso personajes
				for(var h = 0;h<this.charactersSounds[i].length-1;h++){
					if(this.charactersSounds[i][h][1] == true){
						if(this.charactersSounds[i][h][0].isPlaying != true)
						this.charactersSounds[i][h][0].play();
						this.charactersSounds[i][3].playAnimation(h);
					}
				}
			}
		}
	}
}
