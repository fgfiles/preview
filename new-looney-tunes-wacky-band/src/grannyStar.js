// JavaScript Document
class grannyStar extends Phaser.Group {
	
	constructor(game,Button,Index) {
		super(game);
		var animation = Phaser.Animation;
		this.soundArray = [];
		this.isPlaying = false;
		this.button = Button;
		this.index = Index;

		this.create(0, 0, 'fondoStar1');
		//this.children[0].scale.setTo(0.74, 0.7);
		this.create(440-156, 0, 'grannyBody');
		this.create(418, 280, 'grannyLeft',"abue-lef (1)");
		this.children[2].animations.add('animation0',animation.generateFrameNames('abue-lef (',1,13,')'));
		this.create(290, 270, 'grannyRight',"abue-rig (1)");
		this.children[3].animations.add('animation0',animation.generateFrameNames('abue-rig (',1,13,')'));
		this.create(800,20 ,'close');
		this.children[0].inputEnabled = true;
		this.children[0].events.onInputDown.add(this.DragStart, this);
		this.children[4].inputEnabled = true;
		this.children[4].events.onInputDown.add(this.close, this);
		this.press = false;
		this.soundArray[0] = game.add.audio('grannyStar0',1,false);
		this.soundArray[1] = game.add.audio('grannyStar1',1,false);
		this.visible = 0;
		this.x = 2000;
		this.soundButton = game.add.audio('fxButton',0.6,false);
	}
	DragStart() {
		click.playAniamtion();
		if(this.game.input.x < 889/2){
			this.soundArray[0].play();
			this.children[3].animations.stop(true);
			this.children[3].animations.play('animation0',30,false);
		}else if(this.game.input.x > 889/2){
			this.soundArray[1].play();
			this.children[2].animations.stop(true);
			this.children[2].animations.play('animation0',30,false);
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
		this.children[1].animations.stop(true);
	}
}