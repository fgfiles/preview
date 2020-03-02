// JavaScript Document
class fogStar extends Phaser.Group {
	
	constructor(game,Button,Index) {
		super(game);
		var animation = Phaser.Animation;
		this.soundArray = [];
		this.isPlaying = false;
		this.button = Button;
		this.index = Index;

		this.create(0, 0, 'fondoStar2');
		//this.children[0].scale.setTo(0.74, 0.7);
		this.create(0, 0, 'fogTail');
		this.children[1].anchor.setTo(0,1)
		this.children[1].x = 610 ;
		this.children[1].y = 600;
		this.create(0, 0, 'fogBody');
		this.children[2].x = 191 ;
		this.children[2].y = 500-this.children[2].height ;
		this.create(0, 0, 'fogHead');
		this.children[3].anchor.setTo(0.5,0.9)
		this.children[3].x = 460 ;
		this.children[3].y = 250 ;
		this.create(418, 280, 'fogStrings',"fog-str (1)");
		this.children[4].x = 274 ;
		this.children[4].y = 237 ;
		this.children[4].animations.add('animation0',animation.generateFrameNames('fog-str (',1,7,')'));
		this.create(290, 270, 'fogHand',"fog-arm (1)");
		this.children[5].x = 340;
		this.children[5].y = 210 ;
		this.children[5].animations.add('animation0',animation.generateFrameNames('fog-arm (',1,9,')'));
		this.create(800,20 ,'close');
		this.children[0].inputEnabled = true;
		this.children[0].events.onInputDown.add(this.DragStart, this);
		this.children[6].inputEnabled = true;
		this.children[6].events.onInputDown.add(this.close, this);
		this.press = false;
		this.soundArray[0] = game.add.audio('fogStar1',1,false);
		this.visible = 0;
		this.x = 2000;
		this.soundButton = game.add.audio('fxButton',0.6,false);
		game.add.tween(this.children[3]).to( { angle: [5,0,-5,0] }, 2000, Phaser.Easing.Linear.None, true,-1,false);
		game.add.tween(this.children[1]).to( { angle: [5,0,-5,0] }, 2000, Phaser.Easing.Linear.None, true,-1,false);
	}
	DragStart() {
			click.playAniamtion();
			this.soundArray[0].play();
			this.children[4].animations.stop(true);
			this.children[5].animations.stop(true);
			this.children[4].animations.play('animation0',15,false);
			this.children[5].animations.play('animation0',15,false);
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