// JavaScript Document
class lolaStar extends Phaser.Group {
	
	constructor(game,Button,Index) {
		super(game);
		var animation = Phaser.Animation
		this.soundArray = [];
		this.isPlaying = false;
		this.button = Button;
		this.index = Index;
		this.create(0, 0, 'fondoStar1');
		//this.children[0].scale.setTo(0.74, 0.7);
		this.create(0, 0, 'lolaHead',"lola-head (1)");
		this.children[1] .x = 425 - this.children[1].width/2 ;
		this.children[1] .y = 5;
		this.children[1].animations.add('animation0',animation.generateFrameNames('lola-head (',1,24,')'));
		this.create(0, 0, 'lolaBody');
		this.children[2] .x = 440 - this.children[2].width/2 ;
		this.children[2] .y = 500 - this.children[2].height;
		this.create(0, 0, 'micLola');
		this.children[3].x = 540;
		this.children[3].y = 293;
		this.create(800,20 ,'close');
		this.children[0].inputEnabled = true;
		this.children[0].events.onInputDown.add(this.DragStart, this);
		this.children[0].events.onInputUp.add(this.DragStop, this);
		this.children[4].inputEnabled = true;
		this.children[4].events.onInputDown.add(this.close, this);
		this.press = false;
		this.soundArray[0] = [game.add.audio('lolaStar0',1,false),false];
		this.soundArray[1] = [game.add.audio('lolaStar1',1,false),false];
		this.soundArray[2] = [game.add.audio('lolaStar2',1,false),false];
		this.soundArray[3] = [game.add.audio('lolaStar3',1,false),false];
		this.soundArray[4] = [game.add.audio('lolaStar4',1,false),false];
		this.soundArray[5] = [game.add.audio('lolaStar5',1,false),false];
		this.visible = 0;
		this.x = 2000;
		this.soundButton = game.add.audio('fxButton',0.6,false);
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
			if (this.children[3].y < 82) {
				this.children[3].y = 83;
			} else if (this.children[3].y > 394) {
				this.children[3].y = 393;
			}
			if(this.children[3].y>82 && this.children[3].y < 124 ){
				this.playSound(0);
			}else if(this.children[3].y>123 && this.children[3].y <169){
				this.playSound(1);
			} else if(this.children[3].y>168 && this.children[3].y <214){
				this.playSound(2);
			}else if(this.children[3].y>213 && this.children[3].y <259){
				this.playSound(3);
			}else if(this.children[3].y>258 && this.children[3].y <304){
				this.playSound(4);
			}else if(this.children[3].y>305 && this.children[3].y <339){
				this.playSound(5);
			}
		}
	}
	playSound(index){
		if(this.soundArray[index][1] == false){
			this.resetSound();
			this.soundArray[index][0].play();
			this.soundArray[index][1] = true;
			this.children[1].animations.stop(true);
			this.children[1].animations.play('animation0',15,false);
		}
	}
	open(){
		this.children[3].y = 293;
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
		this.soundArray[5][1] = false;
		/*this.soundArray[0][0].stop(true);
		this.soundArray[1][0].stop(true);
		this.soundArray[2][0].stop(true);
		this.soundArray[3][0].stop(true);
		this.soundArray[4][0].stop(true);
		this.soundArray[5][0].stop(true);
		this.soundArray[6][0].stop(true);*/
	}
}
