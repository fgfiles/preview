GameManager.Preloader = function(game){};
GameManager.Preloader.prototype = {
	preload: function(){
		this.logoBoomerang = this.game.add.sprite(this.game.width*0.5,this.game.height*0.5 - 100,'PreloaderSprite','loader_animation0001.png');
		this.logoBoomerang.scale.setTo(0.5);
		this.logoBoomerang.anchor.setTo(0.5);

		this.anim = this.logoBoomerang.animations.add('Animalogo', Phaser.Animation.generateFrameNames('loader_animation',1,10,'.png',4));
		this.preloadBg = this.game.add.sprite(this.game.width*0.5-25,this.game.height*0.5 + 50,'PreloaderSprite','preloader_bg.png');
		this.preloadBg.scale.setTo(0.8);
		this.preloadBg.anchor.setTo(0.5);
		this.preloadBar = this.game.add.sprite(this.game.width*0.5,this.game.height*0.5 + 53,'PreloaderSprite','preloader_bar.png');
		this.preloadBar.scale.setTo(0.88,0.85);
		this.preloadBar.anchor.setTo(0.5);
		this.preloadOver = this.add.sprite(this.game.width*0.5-25,this.game.height*0.5 + 50,'PreloaderSprite', 'preloader_overlay.png');
		this.preloadOver.scale.setTo(0.8);
		this.preloadOver.anchor.setTo(0.5);
		this.load.setPreloadSprite(this.preloadBar);
		
		this.game.load.image('fondo', 'img/FONDO.png');
		this.game.load.image('luna', 'img/LUNA.png');
		this.game.load.image('edificios3', 'img/EDIFICIOS3.png');
		this.game.load.image('edificios2', 'img/EDIFICIOS2.png');
		this.game.load.image('edificios1','img/EDIFICIOS1.png');
		this.game.load.image('btPlay','img/play.png');
		this.game.load.image('logo','img/logooriginal.png')
		this.game.load.image('titulo','img/titulo1.png');
		//this.game.load.image('btHome','img/home.png');
		this.game.load.image('btPause','img/pause.png');
		this.game.load.image('btSound','img/sound.png');
		this.game.load.image('btSound2','img/sound2.png');
		this.game.load.image('tarima','img/tarima.png');
		this.game.load.image('bar','img/barra.png');
		this.game.load.image('pause','img/PauseLogo.png');
		this.game.load.image('pauseHomeBt','img/pauseHomebt.png');
		this.game.load.image('playBt','img/Playbt.png');
		this.game.load.image('glow','img/luzTarima2.png');
		this.game.load.image('glowStart','img/luzestr.png');
		this.game.load.image('hand','img/hand.png');
		this.game.load.image('black','img/black.png');
		//this.game.load.image('hand2','img/hand2.png');
		
		this.game.load.image('homePopup','img/popup-home.png');
		this.game.load.image('okbt','img/popup-ok.png');
		
		//lights
		this.game.load.image('lightBlue','img/luz(1).png');
		this.game.load.image('lightRed','img/luz(3).png');
		this.game.load.image('lightYellow','img/luz(2).png');
		
		//how to play
		this.game.load.image('lines','img/Lines.png');
		this.game.load.image('arrow','img/btArrow.png');
		this.game.load.image('tarimaHow','img/1x/tarimaHow.jpg');
		this.game.load.image('frame','img/1x/frame.png');
		//this.game.load.image('arrow1','img/1x/flecha1.png');
		//this.game.load.image('arrow2','img/1x/flecha2.png');
		//this.game.load.image('arrow3','img/1x/Flechas_arraste.png');
		this.game.load.image('howCharacter','img/1x/howCharacter.png');
		this.game.load.image('howSolo','img/1x/howSolo.png');
		this.game.load.image('menu1','img/1x/tira-incompleta.png');
		this.game.load.image('menu2','img/1x/tira-larga.png');
		this.game.load.image('grannyhow','img/1x/grannyhow.png');
		
		
		
		
		
		///aniamciones
		this.game.load.atlasJSONHash('carrot','img/zanahoria.png','img/zanahoria.json');
		
		
		this.game.load.atlasJSONHash('bugs','sprites/bugs.png','json/bugs.json');
		this.game.load.atlasJSONHash('bugsIdel','sprites/bugs_idel.png','json/bugs_idel.json');
		this.game.load.atlasJSONHash('bugs2','sprites/bugs-2.png','json/bugs-2.json');
		this.game.load.atlasJSONHash('bugs3','sprites/bugs3.png','json/bugs3.json');
		
		
		this.game.load.atlasJSONHash('daffy','sprites/daffy.png','json/daffy.json');
		this.game.load.atlasJSONHash('daffyIdel','sprites/daffy_idel.png','json/daffy_idel.json');
		this.game.load.atlasJSONHash('daffy2','sprites/daffy-2.png','json/daffy-2.json');
		this.game.load.atlasJSONHash('daffy3','sprites/daffy3.png','json/daffy3.json');
		
		this.game.load.atlasJSONHash('marvin','sprites/marvin.png','json/marvin.json');
		this.game.load.atlasJSONHash('marvinIdel','sprites/marvin_idel.png','json/marvin_idel.json');
		this.game.load.atlasJSONHash('marvin2','sprites/marvin-2.png','json/marvin-2.json');
		this.game.load.atlasJSONHash('marvin3','sprites/marvin3.png','json/marvin3.json');
		
		this.game.load.atlasJSONHash('lola','sprites/lola.png','json/lola.json');
		this.game.load.atlasJSONHash('lolaIdel','sprites/lola_idel.png','json/lola_idel.json');
		this.game.load.atlasJSONHash('lola2','sprites/lola-2.png','json/lola-2.json');
		this.game.load.atlasJSONHash('lola3','sprites/lola3.png','json/lola3.json');
		
		this.game.load.atlasJSONHash('taz','sprites/taz.png','json/taz.json');
		this.game.load.atlasJSONHash('tazIdel','sprites/taz_idel.png','json/taz_idel.json');
		this.game.load.atlasJSONHash('taz2','sprites/taz-2.png','json/taz-2.json');
		this.game.load.atlasJSONHash('taz3','sprites/taz3.png','json/taz3.json');
		
		this.game.load.atlasJSONHash('tweety','sprites/tweety.png','json/tweety.json');
		this.game.load.atlasJSONHash('tweetyIdel','sprites/tweety_idel.png','json/tweety_idel.json');
		this.game.load.atlasJSONHash('tweety2','sprites/tweety-2.png','json/tweety-2.json');
		this.game.load.atlasJSONHash('tweety3','sprites/tweety3.png','json/tweety3.json');
		
		
		this.game.load.atlasJSONHash('sam','sprites/sam.png','json/sam.json');
		this.game.load.atlasJSONHash('samIdel','sprites/sam_idel.png','json/sam_idel.json');
		this.game.load.atlasJSONHash('sam2','sprites/sam-2.png','json/sam-2.json');
		this.game.load.atlasJSONHash('sam3','sprites/sam3.png','json/sam3.json');
		
		this.game.load.atlasJSONHash('granny','sprites/granny.png','json/granny.json');
		this.game.load.atlasJSONHash('grannyIdel','sprites/granny_idel.png','json/granny_idel.json');
		this.game.load.atlasJSONHash('granny2','sprites/granny-2.png','json/granny-2.json');
		this.game.load.atlasJSONHash('granny3','sprites/granny3.png','json/granny3.json');
		
		
		this.game.load.atlasJSONHash('willy','sprites/willy.png','json/willy.json');
		this.game.load.atlasJSONHash('willyIdel','sprites/willy_idel.png','json/willy_idel.json');
		this.game.load.atlasJSONHash('willy2','sprites/willy-2.png','json/willy-2.json');
		this.game.load.atlasJSONHash('willy3','sprites/willy3.png','json/willy3.json');
		
		this.game.load.atlasJSONHash('button','img/botones.png','json/botones.json');
		
		this.game.load.atlasJSONHash('squeaks','sprites/squeaks.png','json/squeaks.json');
		this.game.load.atlasJSONHash('squeaksIdel','sprites/squeaks_idel.png','json/squeaks_idel.json');
		this.game.load.atlasJSONHash('squeaks2','sprites/squeaks-2.png','json/squeaks-2.json');
		this.game.load.atlasJSONHash('squeaks3','sprites/squeaks3.png','json/squeaks3.json');
		
		this.game.load.atlasJSONHash('fog','sprites/fog.png','json/fog.json');
		this.game.load.atlasJSONHash('fogIdel','sprites/fog_idel.png','json/fog_idel.json');
		this.game.load.atlasJSONHash('fog2','sprites/fog-2.png','json/fog-2.json');
		this.game.load.atlasJSONHash('fog3','sprites/fog3.png','json/fog3.json');
		
		this.game.load.atlasJSONHash('porky','sprites/porky.png','json/porky.json');
		this.game.load.atlasJSONHash('porkyIdel','sprites/porky_idel.png','json/porky_idel.json');
		this.game.load.atlasJSONHash('porky2','sprites/porky-2.png','json/porky-2.json');
		this.game.load.atlasJSONHash('porky3','sprites/porky3.png','json/porky3.json');
		
		this.game.load.atlasJSONHash('road','sprites/road.png','json/road.json');
		this.game.load.atlasJSONHash('roadIdel','sprites/road_idel.png','json/road_idel.json');
		this.game.load.atlasJSONHash('road2','sprites/road-2.png','json/road-2.json');
		this.game.load.atlasJSONHash('road3','sprites/road3.png','json/road3.json');
		
		this.game.load.atlasJSONHash('silvestre','sprites/silvestre.png','json/silvestre.json');
		this.game.load.atlasJSONHash('silvestreIdel','sprites/silvestre_idel.png','json/silvestre_idel.json');
		this.game.load.atlasJSONHash('silvestre2','sprites/silvestre-2.png','json/silvestre-2.json');
		this.game.load.atlasJSONHash('silvestre3','sprites/silvestre3.png','json/silvestre3.json');
		
		this.game.load.atlasJSONHash('speedy','sprites/speedy.png','json/speedy.json');
		this.game.load.atlasJSONHash('speedyIdel','sprites/speedy_idel.png','json/speedy_idel.json');
		this.game.load.atlasJSONHash('speedy2','sprites/speedy-2.png','json/speedy-2.json');
		this.game.load.atlasJSONHash('speedy3','sprites/speedy3.png','json/speedy3.json');
		
		//Sounds
		this.game.load.audio('bugs0',['snd/Ogg/Bugs_1.ogg','snd/Mp3/Bugs_1.mp3']);
		this.game.load.audio('bugs1',['snd/Ogg/Bugs_2.ogg','snd/Mp3/Bugs_2.mp3']);
		this.game.load.audio('bugs2',['snd/Ogg/Bugs_3.ogg','snd/Mp3/Bugs_3.mp3']);
		
		this.game.load.audio('marvin0',['snd/Ogg/Marvin_1.ogg','snd/Mp3/Marvin_1.mp3']);
		this.game.load.audio('marvin1',['snd/Ogg/Marvin_2.ogg','snd/Mp3/Marvin_2.mp3']);
		this.game.load.audio('marvin2',['snd/Ogg/Marvin_3.ogg','snd/Mp3/Marvin_3.mp3']);
		
		this.game.load.audio('willy0',['snd/Ogg/Coyote_1.ogg','snd/Mp3/Coyote_1.mp3']);
		this.game.load.audio('willy1',['snd/Ogg/Coyote_2.ogg','snd/Mp3/Coyote_2.mp3']);
		this.game.load.audio('willy2',['snd/Ogg/Coyote_3.ogg','snd/Mp3/Coyote_3.mp3']);
		
		this.game.load.audio('daffy0',['snd/Ogg/Daffy_1.ogg','snd/Mp3/Daffy_1.mp3']);
		this.game.load.audio('daffy1',['snd/Ogg/Daffy_2.ogg','snd/Mp3/Daffy_2.mp3']);
		this.game.load.audio('daffy2',['snd/Ogg/Daffy_3.ogg','snd/Mp3/Daffy_3.mp3']);
		
		this.game.load.audio('lola0',['snd/Ogg/Lola_1.ogg','snd/Mp3/Lola_1.mp3']);
		this.game.load.audio('lola1',['snd/Ogg/Lola_2.ogg','snd/Mp3/Lola_2.mp3']);
		this.game.load.audio('lola2',['snd/Ogg/Lola_3.ogg','snd/Mp3/Lola_3.mp3']);
		
		this.game.load.audio('tweety0',['snd/Ogg/Tweety_1.ogg','snd/Mp3/Tweety_1.mp3']);
		this.game.load.audio('tweety1',['snd/Ogg/Tweety_2.ogg','snd/Mp3/Tweety_2.mp3']);
		this.game.load.audio('tweety2',['snd/Ogg/Tweety_3.ogg','snd/Mp3/Tweety_3.mp3']);
		
		this.game.load.audio('taz0',['snd/Ogg/Taz_1.ogg','snd/Mp3/Taz_1.mp3']);
		this.game.load.audio('taz1',['snd/Ogg/Taz_2.ogg','snd/Mp3/Taz_2.mp3']);
		this.game.load.audio('taz2',[ 'snd/Ogg/Taz_3.ogg','snd/Mp3/Taz_3.mp3']);
		
		this.game.load.audio('granny0',['snd/Ogg/Granny_1.ogg','snd/Mp3/Granny_1.mp3']);
		this.game.load.audio('granny1',['snd/Ogg/Granny_2.ogg','snd/Mp3/Granny_2.mp3']);
		this.game.load.audio('granny2',['snd/Ogg/Granny_3.ogg','snd/Mp3/Granny_3.mp3']);
		
		this.game.load.audio('porky0',['snd/Ogg/Porky_1.ogg','snd/Mp3/Porky_1.mp3']);
		this.game.load.audio('porky1',['snd/Ogg/Porky_2.ogg','snd/Mp3/Porky_2.mp3']);
		this.game.load.audio('porky2',['snd/Ogg/Porky_3.ogg','snd/Mp3/Porky_3.mp3']);
		
		this.game.load.audio('sam0',['snd/Ogg/Sam_1.ogg','snd/Mp3/Sam_1.mp3']);
		this.game.load.audio('sam1',['snd/Ogg/Sam_2.ogg','snd/Mp3/Sam_2.mp3']);
		this.game.load.audio('sam2',[ 'snd/Ogg/Sam_3.ogg','snd/Mp3/Sam_3.mp3']);
		
		this.game.load.audio('fog0',['snd/Ogg/Foghorn_1.ogg','snd/Mp3/Foghorn_1.mp3']);
		this.game.load.audio('fog1',['snd/Ogg/Foghorn_2.ogg','snd/Mp3/Foghorn_2.mp3']);
		this.game.load.audio('fog2',[ 'snd/Ogg/Foghorn_3.ogg','snd/Mp3/Foghorn_3.mp3']);
		
		this.game.load.audio('road0',['snd/Ogg/RoadRunner_1.ogg','snd/Mp3/RoadRunner_1.mp3']);
		this.game.load.audio('road1',['snd/Ogg/RoadRunner_2.ogg','snd/Mp3/RoadRunner_2.mp3']);
		this.game.load.audio('road2',[ 'snd/Ogg/RoadRunner_3.ogg','snd/Mp3/RoadRunner_3.mp3']);
		
		this.game.load.audio('speedy0',['snd/Ogg/Speedy_1.ogg','snd/Mp3/Speedy_1.mp3']);
		this.game.load.audio('speedy1',['snd/Ogg/Speedy_2.ogg','snd/Mp3/Speedy_2.mp3']);
		this.game.load.audio('speedy2',[ 'snd/Ogg/Speedy_3.ogg','snd/Mp3/Speedy_3.mp3']);
		
		this.game.load.audio('squeaks0',['snd/Ogg/Squeaks_1.ogg','snd/Mp3/Squeaks_1.mp3']);
		this.game.load.audio('squeaks1',['snd/Ogg/Squeaks_2.ogg','snd/Mp3/Squeaks_2.mp3']);
		this.game.load.audio('squeaks2',[ 'snd/Ogg/Squeaks_3.ogg','snd/Mp3/Squeaks_3.mp3']);
		
		this.game.load.audio('silvestre0',['snd/Ogg/Sylvestre_1.ogg','snd/Mp3/Sylvestre_1.mp3']);
		this.game.load.audio('silvestre1',['snd/Ogg/Sylvestre_2.ogg','snd/Mp3/Sylvestre_2.mp3']);
		this.game.load.audio('silvestre2',[ 'snd/Ogg/Sylvestre_3.ogg','snd/Mp3/Sylvestre_3.mp3']);
		
		
		
		//Solista 
		//PArtes Generales
		this.game.load.image('fondoStar1', 'img/bakcground1.png');
		this.game.load.image('fondoStar2', 'img/background2.png');
		this.game.load.image('close', 'img/close.png');
		
		//bugs
		this.game.load.image('headBugs', 'sprites/Solistas/Bugs/Bugs-Head.png');
		this.game.load.atlasJSONHash('HandBugs','sprites/Solistas/Bugs/bugs-hand.png','sprites/Solistas/Bugs/bugs-hand.json');
		this.game.load.atlasJSONHash('earBugs','sprites/Solistas/Bugs/bugs-ear.png','sprites/Solistas/Bugs/bugs-ear.json');
		
		
		//marvin
		this.game.load.image('MarvinBody','sprites/Solistas/Marvin/Marvin-bod.png','sprites/Solistas/Marvin/Marvin-bod.json');
		this.game.load.image('MarvinHead','sprites/Solistas/Marvin/Marvin-head.png','sprites/Solistas/Marvin/Marvin-head.json');
		this.game.load.image('MarvinButton','sprites/Solistas/Marvin/Consola-Boton-medio.png','sprites/Solistas/Marvin/Consola-Boton-medio.json');
		this.game.load.atlasJSONHash('MarvinComp','sprites/Solistas/Marvin/marvin-comp.png','sprites/Solistas/Marvin/marvin-comp.json');
		
		//granny
		this.game.load.image('grannyBody','sprites/Solistas/Abuela/abue-bo.png','sprites/Solistas/Abuela/abue-bo.json');
		this.game.load.atlasJSONHash('grannyLeft','sprites/Solistas/Abuela/abue-lef.png','sprites/Solistas/Abuela/abue-lef.json');
		this.game.load.atlasJSONHash('grannyRight','sprites/Solistas/Abuela/abue-rig.png','sprites/Solistas/Abuela/abue-rig.json');
	
		
		//lola
		this.game.load.image('lolaBody','sprites/Solistas/lola/lola-bod.png');
		this.game.load.atlasJSONHash('lolaHead','sprites/Solistas/lola/lola-head.png','sprites/Solistas/lola/lola-head.json');
		this.game.load.image('micLola', 'sprites/Solistas/lola/microfono.png');
		
		//silvestre
		this.game.load.image('silvestreBody','sprites/Solistas/Silvestre/Silve-bod.png');
		this.game.load.image('silvestreTail','sprites/Solistas/Silvestre/Silve-tail.png');
		this.game.load.atlasJSONHash('silvestreHead','sprites/Solistas/Silvestre/silve-cab.png','sprites/Solistas/Silvestre/silve-cab.json');
		this.game.load.atlasJSONHash('silvestreHands','sprites/Solistas/Silvestre/silve-han.png','sprites/Solistas/Silvestre/silve-han.json');
		
		//Porky
		this.game.load.image('bodyPorky', 'sprites/Solistas/Porky/Porkybody.png');
		this.game.load.atlasJSONHash('leftPorky','sprites/Solistas/Porky/por-lef.png','sprites/Solistas/Porky/por-lef.json');
		this.game.load.atlasJSONHash('rightPorky','sprites/Solistas/Porky/por-rig.png','sprites/Solistas/Porky/por-rig.json');
		
		//taz
		this.game.load.image('bateria', 'img/taz.png');
		this.game.load.atlasJSONHash('taz-der','sprites/Solistas/Taz/taz-der.png','sprites/Solistas/Taz/taz-der.json');
		this.game.load.atlasJSONHash('taz-izq','sprites/Solistas/Taz/taz-izq.png','sprites/Solistas/Taz/taz-izq.json');
		this.game.load.atlasJSONHash('BodyTaz','sprites/Solistas/Taz/taz-rem.png','sprites/Solistas/Taz/taz-rem.json');
		
		
		//Road
		this.game.load.atlasJSONHash('corne','sprites/Solistas/road/corne.png','sprites/Solistas/road/corne.json');
		this.game.load.atlasJSONHash('roadBody','sprites/Solistas/road/road.png','sprites/Solistas/road/road.json');
		
		//speedy
		this.game.load.image('speedyBody','sprites/Solistas/Speedy/spe-bod.png');
		this.game.load.image('speedyHead','sprites/Solistas/Speedy/spe-head.png');
		this.game.load.atlasJSONHash('speedyBra','sprites/Solistas/Speedy/spe-bra.png','sprites/Solistas/Speedy/spe-bra.json');
		this.game.load.atlasJSONHash('speedyTro','sprites/Solistas/Speedy/spe-tro.png','sprites/Solistas/Speedy/spe-tro.json');
		
		//fog
		this.game.load.image('fogBody','sprites/Solistas/Fog/fog-bod.png');
		this.game.load.image('fogHead','sprites/Solistas/Fog/fog_head.png');
		this.game.load.image('fogTail','sprites/Solistas/Fog/fog-tail.png');
		this.game.load.atlasJSONHash('fogStrings','sprites/Solistas/Fog/fog-str.png','sprites/Solistas/Fog/fog-str.json');
		this.game.load.atlasJSONHash('fogHand','sprites/Solistas/Fog/fog-bra.png','sprites/Solistas/Fog/fog-bra.json');
		
		//sam
		this.game.load.image('samBody','sprites/Solistas/sam/sam-bod.png');
		this.game.load.atlasJSONHash('samBody2','sprites/Solistas/sam/sam-head1.png','sprites/Solistas/sam/sam-head1.json');
		this.game.load.atlasJSONHash('samBody3','sprites/Solistas/sam/sam-head2.png','sprites/Solistas/sam/sam-head2.json');
		this.game.load.atlasJSONHash('samStrings','sprites/Solistas/sam/sam-str.png','sprites/Solistas/sam/sam-str.json');
		this.game.load.atlasJSONHash('samHand','sprites/Solistas/sam/sam-han.png','sprites/Solistas/sam/sam-han.json');
		
		//Squeaks
		this.game.load.image('squeaksBody','sprites/Solistas/Squeaks/sque-bod.png');
		this.game.load.image('squeaksTail','sprites/Solistas/Squeaks/sque-tail.png');
		this.game.load.atlasJSONHash('squeaksHand','sprites/Solistas/Squeaks/squea-arm.png','sprites/Solistas/Squeaks/squea-arm.json');
		this.game.load.image('saw', 'sprites/Solistas/Squeaks/Serrucho.png');
		
		//tweety
		this.game.load.atlasJSONHash('tweetyBody','sprites/Solistas/tweety/twe-1.png','sprites/Solistas/tweety/twe-1.json');
		this.game.load.atlasJSONHash('tweetyWings','sprites/Solistas/tweety/twe-ala.png','sprites/Solistas/tweety/twe-ala.json');
		this.game.load.atlasJSONHash('tuba','sprites/Solistas/tweety/tuba.png','sprites/Solistas/tweety/tuba.json');
		
		
		//daffy
		this.game.load.image('daffyBody','sprites/Solistas/daffy/daf-bod.png');
		this.game.load.atlasJSONHash('daffystring','sprites/Solistas/daffy/daf-str.png','sprites/Solistas/daffy/daf-str.json');
		this.game.load.atlasJSONHash('daffyHand','sprites/Solistas/daffy/daf-han.png','sprites/Solistas/daffy/daf-han.json');
		
		//willy
		//Animacion 1
		this.game.load.atlasJSONHash('willy-ser','sprites/Solistas/willy/willy1/willy-ser.png','sprites/Solistas/willy/willy1/willy-ser.json');
		this.game.load.atlasJSONHash('rob1','sprites/Solistas/willy/willy1/rob1.png','sprites/Solistas/willy/willy1/rob1.json');
		//Animacion 2
		this.game.load.atlasJSONHash('martillo','sprites/Solistas/willy/willy2/martillo.png','sprites/Solistas/willy/willy2/martillo.json');
		this.game.load.atlasJSONHash('willy-head2','sprites/Solistas/willy/willy2/willy-head2.png','sprites/Solistas/willy/willy2/willy-head2.json');
		this.game.load.atlasJSONHash('rob2','sprites/Solistas/willy/willy2/rob2.png','sprites/Solistas/willy/willy2/rob2.json');
		//Animacion 3
		this.game.load.atlasJSONHash('soplete','sprites/Solistas/willy/willy3/soplete.png','sprites/Solistas/willy/willy3/soplete.json');
		this.game.load.atlasJSONHash('rob3','sprites/Solistas/willy/willy3/rob3.png','sprites/Solistas/willy/willy3/rob3.json');
		//Animacion 4
		this.game.load.atlasJSONHash('taladro','sprites/Solistas/willy/willy4/taladro.png','sprites/Solistas/willy/willy4/taladro.json');
		this.game.load.atlasJSONHash('rob4','sprites/Solistas/willy/willy4/rob4.png','sprites/Solistas/willy/willy4/rob4.json');
		
		this.game.load.image('Taladro', 'sprites/Solistas/willy/Taladro.png');
		this.game.load.image('Soplete', 'sprites/Solistas/willy/Soplete.png');
		this.game.load.image('Serrucho', 'sprites/Solistas/willy/Serrucho.png');
		this.game.load.image('Martillo', 'sprites/Solistas/willy/Martillo.png');
		this.game.load.image('willy-bg', 'sprites/Solistas/willy/willy-bg.png');
		
		//Sounds
		
		//bugs star
		this.game.load.audio('bugsStar0',['snd/Ogg/Bugs_Solo_1.ogg','snd/Mp3/Bugs_Solo_1.mp3']);
		this.game.load.audio('bugsStar1',['snd/Ogg/Bugs_Solo_2.ogg','snd/Mp3/Bugs_Solo_2.mp3']);
		this.game.load.audio('bugsStar2',['snd/Ogg/Bugs_Solo_3.ogg','snd/Mp3/Bugs_Solo_3.mp3']);
		this.game.load.audio('bugsStar3',['snd/Ogg/Bugs_Solo_4.ogg','snd/Mp3/Bugs_Solo_4.mp3']);
		this.game.load.audio('bugsStar4',['snd/Ogg/Bugs_Solo_5.ogg','snd/Mp3/Bugs_Solo_5.mp3']);
		
		//marvin star
		this.game.load.audio('marvinStar0',['snd/Ogg/Marvin_Solo_Button_01.ogg','snd/Mp3/Marvin_Solo_Button_01.mp3']);
		this.game.load.audio('marvinStar1',['snd/Ogg/Marvin_Solo_Button_02.ogg','snd/Mp3/Marvin_Solo_Button_02.mp3',]);
		//this.game.load.audio('marvinStar2',['snd/Ogg/Marvin_Solo_Fader_Down.ogg','snd/Mp3/Marvin_Solo_Fader_Down.mp3',]);
		this.game.load.audio('marvinStar3',['snd/Ogg/Marvin_Solo_Fader_Up.ogg','snd/Mp3/Marvin_Solo_Fader_Up.mp3']);
		this.game.load.audio('marvinStar4',['snd/Ogg/Marvin_Solo_Light.ogg','snd/Mp3/Marvin_Solo_Light.mp3',]);
		this.game.load.audio('marvinStar5',['snd/Ogg/Marvin_Solo_TvLoop.ogg','snd/Mp3/Marvin_Solo_TvLoop.mp3']);
		//this.game.load.audio('marvinStar6',['snd/Ogg/Marvin_Solo_TvOff.ogg','snd/Mp3/Marvin_Solo_TvOff.mp3',]);
		//this.game.load.audio('marvinStar7',['snd/Ogg/Marvin_Solo_TvStart.ogg','snd/Mp3/Marvin_Solo_TvStart.mp3']);
		
		//Granny
		this.game.load.audio('grannyStar0',['snd/Ogg/Granny_Solo_1.ogg','snd/Mp3/Granny_Solo_1.mp3']);
		this.game.load.audio('grannyStar1',['snd/Ogg/Granny_Solo_2.ogg','snd/Mp3/Granny_Solo_2.mp3',]);
		
		//lola
		this.game.load.audio('lolaStar0',['snd/Ogg/Lola_Solo_1.ogg','snd/Mp3/Lola_Solo_1.mp3']);
		this.game.load.audio('lolaStar1',['snd/Ogg/Lola_Solo_2.ogg','snd/Mp3/Lola_Solo_2.mp3',]);
		this.game.load.audio('lolaStar2',['snd/Ogg/Lola_Solo_3.ogg','snd/Mp3/Lola_Solo_3.mp3',]);
		this.game.load.audio('lolaStar3',['snd/Ogg/Lola_Solo_4.ogg','snd/Mp3/Lola_Solo_4.mp3',]);
		this.game.load.audio('lolaStar4',['snd/Ogg/Lola_Solo_5.ogg','snd/Mp3/Lola_Solo_5.mp3',]);
		this.game.load.audio('lolaStar5',['snd/Ogg/Lola_Solo_6.ogg','snd/Mp3/Lola_Solo_6.mp3',]);
		
		//silvestre
		this.game.load.audio('silvestreStar0',['snd/Ogg/Sylvestre_Solo_1.ogg','snd/Mp3/Sylvestre_Solo_1.mp3']);
		this.game.load.audio('silvestreStar1',['snd/Ogg/Sylvestre_Solo_2.ogg','snd/Mp3/Sylvestre_Solo_2.mp3',]);
		this.game.load.audio('silvestreStar2',['snd/Ogg/Sylvestre_Solo_3.ogg','snd/Mp3/Sylvestre_Solo_3.mp3',]);
		this.game.load.audio('silvestreStar3',['snd/Ogg/Sylvestre_Solo_4.ogg','snd/Mp3/Sylvestre_Solo_4.mp3',]);
		this.game.load.audio('silvestreStar4',['snd/Ogg/Sylvestre_Solo_5.ogg','snd/Mp3/Sylvestre_Solo_5.mp3',]);
		this.game.load.audio('silvestreStar5',['snd/Ogg/Sylvestre_Solo_6.ogg','snd/Mp3/Sylvestre_Solo_6.mp3',]);
		this.game.load.audio('silvestreStar6',['snd/Ogg/Sylvestre_Solo_7.ogg','snd/Mp3/Sylvestre_Solo_7.mp3',]);
		this.game.load.audio('silvestreStar7',['snd/Ogg/Sylvestre_Solo_8.ogg','snd/Mp3/Sylvestre_Solo_8.mp3',]);
		
		//porky
		this.game.load.audio('porkyStar0',['snd/Ogg/Porky_Solo_1.ogg','snd/Mp3/Porky_Solo_1.mp3']);
		this.game.load.audio('porkyStar1',['snd/Ogg/Porky_Solo_2.ogg','snd/Mp3/Porky_Solo_2.mp3',]);
		this.game.load.audio('porkyStar2',['snd/Ogg/Porky_Solo_3.ogg','snd/Mp3/Porky_Solo_3.mp3',]);
		this.game.load.audio('porkyStar3',['snd/Ogg/Porky_Solo_4.ogg','snd/Mp3/Porky_Solo_4.mp3',]);
		
		//taz
		this.game.load.audio('tazStar0',['snd/Ogg/Taz_Solo_Crash_1.ogg','snd/Mp3/Taz_Solo_Crash_1.mp3']);
		this.game.load.audio('tazStar1',['snd/Ogg/Taz_Solo_HH_Open.ogg','snd/Mp3/Taz_Solo_HH_Open.mp3',]);
		this.game.load.audio('tazStar2',['snd/Ogg/Taz_Solo_Kick.ogg','snd/Mp3/Taz_Solo_Kick.mp3',]);
		this.game.load.audio('tazStar3',['snd/Ogg/Taz_Solo_T1.ogg','snd/Mp3/Taz_Solo_T1.mp3',]);
		this.game.load.audio('tazStar4',['snd/Ogg/Taz_Solo_T2.ogg','snd/Mp3/Taz_Solo_T2.mp3',]);
		this.game.load.audio('tazStar5',['snd/Ogg/Taz_Solo_T3.ogg','snd/Mp3/Taz_Solo_T3.mp3',]);
		this.game.load.audio('tazStar6',['snd/Ogg/Taz_Solo_Ride.ogg','snd/Mp3/Taz_Solo_Ride.mp3',]);
		this.game.load.audio('tazStar7',['snd/Ogg/Taz_Solo_Snare.ogg','snd/Mp3/Taz_Solo_Snare.mp3',]);
		this.game.load.audio('tazStar8',['snd/Ogg/Taz_Solo_Spin.ogg','snd/Mp3/Taz_Solo_Spin.mp3',]);
		
		//road
		this.game.load.audio('roadStar0',['snd/Ogg/RoadRunner_Solo_1.ogg','snd/Mp3/RoadRunner_Solo_1.mp3']);
		this.game.load.audio('roadStar1',['snd/Ogg/RoadRunner_Solo_2.ogg','snd/Mp3/RoadRunner_Solo_2.mp3',]);
		this.game.load.audio('roadStar2',['snd/Ogg/RoadRunner_Solo_3.ogg','snd/Mp3/RoadRunner_Solo_3.mp3',]);
		this.game.load.audio('roadStar3',['snd/Ogg/RoadRunner_Solo_Meep.ogg','snd/Mp3/RoadRunner_Solo_Meep.mp3',]);
		
		//speedy star
		this.game.load.audio('speedyStar0',['snd/Ogg/Speedy_Solo_1.ogg','snd/Mp3/Speedy_Solo_1.mp3']);
		this.game.load.audio('speedyStar1',['snd/Ogg/Speedy_Solo_4.ogg','snd/Mp3/Speedy_Solo_4.mp3']);
		this.game.load.audio('speedyStar2',['snd/Ogg/Speedy_Solo_6.ogg','snd/Mp3/Speedy_Solo_6.mp3']);
		
		
		//fog
		this.game.load.audio('fogStar1',['snd/Ogg/Foghorn_Solo_DownUp.ogg','snd/Mp3/Foghorn_Solo_DownUp.mp3']);
		
		//sam
		this.game.load.audio('samStar1',['snd/Ogg/Sam_Solo_DownUp.ogg','snd/Mp3/Sam_Solo_DownUp.mp3']);
		this.game.load.audio('nose',['snd/Ogg/Sam_Solo_Nose.ogg','snd/Mp3/Sam_Solo_Nose.mp3']);
		this.game.load.audio('angry',['snd/Ogg/Sam_Solo_Angry.ogg','snd/Mp3/Sam_Solo_Angry.mp3']);
		
		//Squeaks
		this.game.load.audio('squeaksStar0',['snd/Ogg/Squeaks_Solo_1.ogg','snd/Mp3/Squeaks_Solo_1.mp3']);
		this.game.load.audio('squeaksStar1',['snd/Ogg/Squeaks_Solo_2.ogg','snd/Mp3/Squeaks_Solo_2.mp3',]);
		this.game.load.audio('squeaksStar2',['snd/Ogg/Squeaks_Solo_3.ogg','snd/Mp3/Squeaks_Solo_3.mp3',]);
		this.game.load.audio('squeaksStar3',['snd/Ogg/Squeaks_Solo_4.ogg','snd/Mp3/Squeaks_Solo_4.mp3',]);
		this.game.load.audio('squeaksStar4',['snd/Ogg/Squeaks_Solo_5.ogg','snd/Mp3/Squeaks_Solo_5.mp3',]);
		
		//tweety
		this.game.load.audio('tweetyStar0',['snd/Ogg/Tweety_Solo_1.ogg','snd/Mp3/Tweety_Solo_1.mp3']);
		this.game.load.audio('tweetyStar1',['snd/Ogg/Tweety_Solo_2.ogg','snd/Mp3/Tweety_Solo_2.mp3']);
		this.game.load.audio('tweetyStar2',['snd/Ogg/Tweety_Solo_3.ogg','snd/Mp3/Tweety_Solo_3.mp3']);
		this.game.load.audio('tweetyStar3',['snd/Ogg/Tweety_Solo_4.ogg','snd/Mp3/Tweety_Solo_4.mp3']);
		
		//daffy
		this.game.load.audio('daffyStar0',['snd/Ogg/Daffy_Solo_1.ogg','snd/Mp3/Daffy_Solo_1.mp3']);
		this.game.load.audio('daffyStar1',['snd/Ogg/Daffy_Solo_2.ogg','snd/Mp3/Daffy_Solo_2.mp3']);
		this.game.load.audio('daffyStar2',['snd/Ogg/Daffy_Solo_3.ogg','snd/Mp3/Daffy_Solo_3.mp3']);
		this.game.load.audio('daffyStar3',['snd/Ogg/Daffy_Solo_4.ogg','snd/Mp3/Daffy_Solo_4.mp3']);
		
		//willy
		this.game.load.audio('willyStar0',['snd/Ogg/Coyote_Solo_1.ogg','snd/Mp3/Coyote_Solo_1.mp3']);
		this.game.load.audio('willyStar1',['snd/Ogg/Coyote_Solo_2.ogg','snd/Mp3/Coyote_Solo_2.mp3',]);
		this.game.load.audio('willyStar2',['snd/Ogg/Coyote_Solo_3.ogg','snd/Mp3/Coyote_Solo_3.mp3',]);
		this.game.load.audio('willyStar3',['snd/Ogg/Coyote_Solo_4.ogg','snd/Mp3/Coyote_Solo_4.mp3',]);
		
		//fx
		this.game.load.audio('fxBackGround',['snd/Ogg/SFX_IdleScene.ogg','snd/Mp3/SFX_IdleScene.mp3']);
		this.game.load.audio('fxTransition',['snd/Ogg/SFX_PlayTransition.ogg','snd/Mp3/SFX_PlayTransition.mp3',]);
		this.game.load.audio('fxTitel',['snd/Ogg/SFX_TitleScreen.ogg','snd/Mp3/SFX_TitleScreen.mp3',]);
		this.game.load.audio('fxButton',['snd/Ogg/UI_Button.ogg','snd/Mp3/UI_Button.mp3',]);
		this.game.load.audio('fxDrop',['snd/Ogg/UI_Drop.ogg','snd/Mp3/UI_Drop.mp3',]);
		this.game.load.audio('fxDrag',['snd/Ogg/UI_Grab.ogg','snd/Mp3/UI_Grab.mp3',]);
		
		//clic
		this.game.load.atlasJSONHash('clic','sprites/clic.png','json/clic.json');
		
		
	},
	create: function(){
		this.anim.onComplete.add(this.startGame,this);
		this.logoBoomerang.animations.play('Animalogo',15);

	},
	startGame: function(){
		this.game.state.start('Game');

	}

};