console.log("produced by: cartoon networks");
console.log("Developed by: Lab Interactivos");
console.log("Programer: Jose Fernando Clavijo");
console.log("Sound Desing: Juan Garcia")
console.log("background design: Erick Bueno, Jose Luis Suarez");
console.log("Character animation: Alejandra Monsalve");
console.log("Beta Tester: Antonio Clavijo");
console.log("See more on www.labinc.co");

var GameManager = [];
var tutorial  = false;
GameManager.Boot = function(game){};
GameManager.Boot.prototype = {
	preload: function(){
		this.game.load.atlasJSONHash('PreloaderSprite','img/preloader_1x.png','json/preloader_1x.json')

	},
	create: function(){
		game.stage.backgroundColor = "#882f88";
		game.time.advancedTiming = true;
    	game.time.desiredFps = 60;
		game.stage.smoothed = false;
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		
		/*game.scale.forceOrientation(true, false);
		game.scale.enterIncorrectOrientation.add(handleIncorrect);
        game.scale.leaveIncorrectOrientation.add(handleCorrect);*/
		
		
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;
		this.game.state.start('Preloader');
		
		game.input.maxPointers = 1;
		if(game.device.touch){
			game.input.mouse.stop();
		}
	}
	
};