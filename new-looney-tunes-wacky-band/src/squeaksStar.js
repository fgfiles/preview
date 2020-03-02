// JavaScript Document
class squeaksStar extends Phaser.Group {
	
	constructor(game,Button,Index) {
		super(game);
		var animation = Phaser.Animation
		this.soundArray = [];
		this.isPlaying = false;
		this.button = Button;
		this.index = Index;

		this.create(0, 0, 'fondoStar1');
		//this.children[0].scale.setTo(0.74, 0.7);
		this.create(0, 0, 'squeaksTail');
		this.children[1] .anchor.setTo(1,1);
		this.children[1] .x = 480 - this.children[1].width/2 ;
		this.children[1] .y = 400;
		
		
		this.create(0, 0, 'squeaksBody');
		this.children[2] .x = 455 - this.children[2].width/2 ;
		this.children[2] .y = 500 - this.children[2].height;
		
		this.create(0, 0, 'saw');
		this.children[3].x = 540;
		this.children[3].y = 180;
		this.create(0, 0, 'squeaksHand',"squea-arm (1)");
		this.children[4] .x = 338;
		this.children[4] .y = 345;
		this.children[4].animations.add('animation0',animation.generateFrameNames('squea-arm (',1,30,')'));
		this.create(800,20 ,'close');
		this.children[0].inputEnabled = true;
		this.children[0].events.onInputDown.add(this.DragStart, this);
		this.children[0].events.onInputUp.add(this.DragStop, this);
		this.children[5].inputEnabled = true;
		this.children[5].events.onInputDown.add(this.close, this);
		this.press = false;
		this.soundArray[0] = [game.add.audio('squeaksStar0',1,false),false];
		this.soundArray[1] = [game.add.audio('squeaksStar1',1,false),false];
		this.soundArray[2] = [game.add.audio('squeaksStar2',1,false),false];
		this.soundArray[3] = [game.add.audio('squeaksStar3',1,false),false];
		this.soundArray[4] = [game.add.audio('squeaksStar4',1,false),false];
		this.visible = 0;
		this.x = 2000;
		this.soundButton = game.add.audio('fxButton',0.6,false);
		game.add.tween(this.children[1]).to( { angle: [5,0,-5,0] }, 2000, Phaser.Easing.Linear.None, true,-1,false);
	}
	DragStart() {
		click.playAniamtion();
		this.press = true;
		this.resetSound();
	}
	DragStop() {
		click.playAniamtion();
		this.press = false;
	}
	update() {
		if (this.press == true) {
			this.children[3].y = game.input.y - 50;
			if (this.children[3].y < 45) {
				this.children[3].y = 46;
			} else if (this.children[3].y > 204) {
				this.children[3].y = 203;
			}
			if(this.children[3].y>45 && this.children[3].y < 75 ){
				this.playSound(0);
			}else if(this.children[3].y>75 && this.children[3].y <105){
				this.playSound(1);
			} else if(this.children[3].y>105 && this.children[2].y <140){
				this.playSound(2);
			}else if(this.children[3].y>140 && this.children[3].y <175){
				this.playSound(3);
			}else if(this.children[3].y>175 && this.children[3].y <204){
				this.playSound(4);
			}
		}
	}
	playSound(index){
		if(this.soundArray[index][1] == false){
			this.resetSound();
			this.soundArray[index][0].play();
			this.soundArray[index][1] = true;
			this.children[4].animations.stop(true);
			this.children[4].animations.play('animation0',30,false);
		}
	}
	open(){
		this.children[2].y = 180;
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
	resetSound(){
		this.soundArray[0][1] = false;
		this.soundArray[1][1] = false;
		this.soundArray[2][1] = false;
		this.soundArray[3][1] = false;
		this.soundArray[4][1] = false;
		/*this.soundArray[0][0].stop(true);
		this.soundArray[1][0].stop(true);
		this.soundArray[2][0].stop(true);
		this.soundArray[3][0].stop(true);
		this.soundArray[4][0].stop(true);
		this.soundArray[5][0].stop(true);
		this.soundArray[6][0].stop(true);*/
	}
}