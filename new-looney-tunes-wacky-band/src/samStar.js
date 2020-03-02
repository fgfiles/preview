// JavaScript Document
class samStar extends Phaser.Group {
	
	constructor(game,Button,Index) {
		super(game);
		var animation = Phaser.Animation;
		this.soundArray = [];
		this.isPlaying = false;
		this.button = Button;
		this.index = Index;
		this.create(0, 0, 'fondoStar1');
		//this.children[0].scale.setTo(0.74, 0.7);
		this.create(0, 0, 'samBody');
		this.children[1].x = 280;
		this.children[1].y = 500 - this.children[1].height ;
		this.create(0, 0, 'samBody2',"sam-head1 (1)");
		this.children[2].x = 191 ;
		this.nose = this.children[2].animations.add('nose',animation.generateFrameNames('sam-head1 (',1,14,')'));
		this.create(0, 0, 'samBody3',"sam-head2 (1)");
		this.children[3].x = 191 ;
		this.angry = this.children[3].animations.add('angryanima',animation.generateFrameNames('sam-head2 (',1,14,')'));
		this.create(418, 280, 'samStrings',"sam-str (1)");
		this.children[4].x = 310 ;
		this.children[4].y = 270 ;
		this.children[4].animations.add('animation0',animation.generateFrameNames('sam-str (',1,14,')'));
		this.create(290, 270, 'samHand',"sam-han (1)");
		this.children[5].x = 380 - this.children[5].width/2 ;;
		this.children[5].y = 290 ;
		this.children[5].animations.add('animation0',animation.generateFrameNames('sam-han (',1,14,')'));
		this.create(800,20 ,'close');
		this.children[0].inputEnabled = true;
		this.children[0].events.onInputDown.add(this.DragStart, this);
		this.children[6].inputEnabled = true;
		this.children[6].events.onInputDown.add(this.close, this);
		this.press = false;
		this.nose.onComplete.add(this.playAngry,this);
		this.angry.onComplete.add(this.loop,this);
		
		this.add(this.DrawButtons(400, 190, 150, 110));
		this.children[7].inputEnabled = true;
		this.children[7].name = 'button1';
		this.children[7].events.onInputDown.add(this.PlaySound, this);
		
		
		this.soundArray[0] = game.add.audio('samStar1',1,false);
		this.soundArray[1] = game.add.audio('nose',1,false);
		this.soundArray[2] = game.add.audio('angry',1,false);
		this.visible = 0;
		this.x = 2000;
		this.soundButton = game.add.audio('fxButton',0.6,false);
		
		this.children[2].visible = 1;
		this.children[3].visible = 0;
		game.add.tween(this.children[2]).to( { y: [-5,0] }, 2000, Phaser.Easing.Linear.None, true,-1,false);
		game.add.tween(this.children[3]).to( { y: [-5,0] }, 2000, Phaser.Easing.Linear.None, true,-1,false);
	}
	DragStart() {
			click.playAniamtion();
			this.soundArray[0].play();
			this.children[4].animations.stop(true);
			this.children[5].animations.stop(true);
			this.children[4].animations.play('animation0',30,false);
			this.children[5].animations.play('animation0',30,false);
	}
	PlaySound(){
		click.playAniamtion();
		this.soundArray[1].play();
		this.children[2].visible = 1;
		this.nose.stop(true);
		this.nose.play('nose',15,false);
		//this.nose.onComplete.add(this.playAngry,this);

	}
	playAngry(){
		this.soundArray[2].play();
		this.children[2].visible = 0;
		this.children[3].visible = 1;
		this.angry.stop(true);
		this.angry.play('angryanima',15,false);
		
	}
	loop(){
		this.children[3].visible = 0;
		this.children[2].visible = 1;
	}
	DrawButtons(x, y, width, height) {
		var rect = game.add.graphics(0, 0);
		rect.beginFill(0x00ffff, 0);
		rect.drawRect(x, y, width, height);
		rect.endFill();
		return rect;
	}
	open(){
		this.visible = 1;
		this.x = 0;
		this.children[2].visible = 1;
		this.children[3].visible = 0;
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