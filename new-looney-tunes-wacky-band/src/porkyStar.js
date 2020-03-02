// JavaScript Document
class porkyStar extends Phaser.Group {
	
	constructor(game,Button,Index) {
		super(game);
		var animation = Phaser.Animation;
		this.soundArray = [];
		this.isPlaying = false;
		this.button = Button;
		this.index = Index;

		this.create(0, 0, 'fondoStar2');
		//this.children[0].scale.setTo(0.74, 0.7);
		this.create(0, 0, 'bodyPorky');
		//Desirle a erick qu elo ponga al tamaño
		this.children[1].scale.setTo(0.65);
		this.children[1] .x = 440 - this.children[1].width/2;
		this.create(0, 0, 'leftPorky',"por-lef (1)");
		this.children[2] .x = 440 ;
		this.children[2] .y = 230;
		this.children[2].animations.add('animation0',animation.generateFrameNames('por-lef (',1,10,')'));
		this.create(0, 0, 'rightPorky',"por-rig (1)");
		this.children[3] .x = 440 - this.children[3].width;
		this.children[3] .y =230;
		this.children[3].animations.add('animation0',animation.generateFrameNames('por-rig (',1,10,')'));
		this.create(800,20 ,'close');
		this.children[0].inputEnabled = true;
		this.children[0].events.onInputDown.add(this.DragStart, this);
		this.children[4].inputEnabled = true;
		this.children[4].events.onInputDown.add(this.close, this);
		this.press = false;
		this.soundArray[0] = game.add.audio('porkyStar0',1,false);
		this.soundArray[1] = game.add.audio('porkyStar1',1,false);
		this.soundArray[2] = game.add.audio('porkyStar2',1,false);
		this.soundArray[3] = game.add.audio('porkyStar3',1,false);
		this.visible = 0;
		this.x = 2000;
		this.soundButton = game.add.audio('fxButton',0.6,false);
	}
	DragStart() {
		click.playAniamtion();
		if(this.game.input.x < 889/2 && this.game.input.y < 250){
			this.soundArray[0].play();
			this.children[3].animations.stop(true);
			this.children[3].animations.play('animation0',30,false);
		}else if(this.game.input.x > 889/2 && this.game.input.y < 250){
			this.soundArray[1].play();
			this.children[2].animations.stop(true);
			this.children[2].animations.play('animation0',30,false);
		}else if(this.game.input.x > 889/2 && this.game.input.y > 250){
			this.soundArray[2].play();
			this.children[2].animations.stop(true);
			this.children[2].animations.play('animation0',30,false);
		}
		else if(this.game.input.x < 889/2 && this.game.input.y > 250){
			this.soundArray[3].play();
			this.children[3].animations.stop(true);
			this.children[3].animations.play('animation0',30,false);
		}
	}
	open(){
		this.visible = 1;
		this.x = 0;
	}
	close(){
		click.playAniamtion();
		this.soundButton.play();
		this.visible = 0;
		this.x = 2000;
		GameManager.botones.buttonback(this.button,this.index);
	}
}