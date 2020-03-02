// JavaScript Document
class silvestreStar extends Phaser.Group {
	
	constructor(game,Button,Index) {
		super(game);
		var animation = Phaser.Animation;
		this.soundArray = [];
		this.isPlaying = false;
		this.button = Button;
		this.index = Index;

		this.create(0, 0, 'fondoStar2');
		//this.children[0].scale.setTo(0.74, 0.7);
		this.create(0, 0, 'silvestreHead',"silve-cab (1)");
		this.children[1] .x = 431 - this.children[1].width/2;
		this.children[1].animations.add('animation0',animation.generateFrameNames('silve-cab (',1,16,')'));
		this.create(0, 0, 'silvestreHands',"silve-han (5)");
		this.children[2] .x = 454 - this.children[1].width/2;
		this.children[2] .y = 150;
		this.children[2].animations.add('animation0',animation.generateFrameNames('silve-han (',1,7,')'));
		
		this.create(0, 0, 'silvestreTail');
		this.children[3].anchor.setTo(0,0.8)
		this.children[3] .x = 580 - this.children[3].width/2;
		this.children[3] .y = 500;
		
		this.create(0, 0, 'silvestreBody');
		this.children[4] .x = 432 - this.children[4].width/2;
		this.children[4] .y = 500 - this.children[4].height;
		
		
		
		this.create(800,20 ,'close');
		this.children[0].inputEnabled = true;
		this.children[0].events.onInputDown.add(this.DragStart, this);
		this.children[0].events.onInputUp.add(this.DragStop, this);
		this.children[5].inputEnabled = true;
		this.children[5].events.onInputDown.add(this.close, this);
		this.press = false;
		this.soundArray[0] = [game.add.audio('silvestreStar0',1,false),false];
		this.soundArray[1] = [game.add.audio('silvestreStar1',1,false),false];
		this.soundArray[2] = [game.add.audio('silvestreStar2',1,false),false];
		this.soundArray[3] = [game.add.audio('silvestreStar3',1,false),false];
		this.soundArray[4] = [game.add.audio('silvestreStar4',1,false),false];
		this.soundArray[5] = [game.add.audio('silvestreStar5',1,false),false];
		this.soundArray[6] = [game.add.audio('silvestreStar6',1,false),false];
		this.soundArray[7] = [game.add.audio('silvestreStar7',1,false),false];
		this.visible = 0;
		this.x = 2000;
		this.soundButton = game.add.audio('fxButton',0.6,false);
		game.add.tween(this.children[3]).to( { angle: [5,0,-5,0] }, 2000, Phaser.Easing.Linear.None, true,-1,false);
		
		
		
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
			/*this.children[2].y = game.input.y - 50;
			if (this.children[2].x < 82) {
				this.children[2].y = 83;
			} else if (this.children[2].y > 394) {
				this.children[2].y = 393;
			}*/
			if(game.input.x>10 && game.input.x < 110 ){
				this.children[2].animations.frame = 8;
				this.playSound(0);
			}else if(game.input.x>110 && game.input.x <210){
				this.playSound(1);
				this.children[2].animations.frame = 7;
			} else if(game.input.x>210 && game.input.x <310){
				this.playSound(2);
				this.children[2].animations.frame = 6;
			}else if(game.input.x>310 && game.input.x <410){
				this.playSound(3);
				this.children[2].animations.frame = 5;
			}else if(game.input.x>410 && game.input.x <510){
				this.playSound(4);
				this.children[2].animations.frame = 4;
			}else if(game.input.x>510 && game.input.x <610){
				this.playSound(5);
				this.children[2].animations.frame = 3;
			}else if(game.input.x>610 && game.input.x <710){
				this.playSound(6);
				this.children[2].animations.frame = 2;
			}else if(game.input.x>710 && game.input.x <810){
				this.playSound(7);
				this.children[2].animations.frame = 1;
			}
		}
	}
	playSound(index){
		if(this.soundArray[index][1] == false){
			this.resetSound();
			this.soundArray[index][0].play();
			this.soundArray[index][1] = true;
			this.children[1].animations.play('animation0',15,false);
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
	resetSound(){
		this.soundArray[0][1] = false;
		this.soundArray[1][1] = false;
		this.soundArray[2][1] = false;
		this.soundArray[3][1] = false;
		this.soundArray[4][1] = false;
		this.soundArray[5][1] = false;
		this.soundArray[6][1] = false;
		this.soundArray[7][1] = false;
		/*this.soundArray[0][0].stop(true);
		this.soundArray[1][0].stop(true);
		this.soundArray[2][0].stop(true);
		this.soundArray[3][0].stop(true);
		this.soundArray[4][0].stop(true);
		this.soundArray[5][0].stop(true);
		this.soundArray[6][0].stop(true);*/
	}
}