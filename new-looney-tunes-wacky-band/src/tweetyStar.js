// JavaScript Document
class tweetyStar extends Phaser.Group {

	constructor(game, Button, Index) {
		super(game);
		var animation = Phaser.Animation;
		this.soundArray = [];
		this.button = Button;
		this.index = Index;

		this.create(0, 0, 'fondoStar2');
		//this.children[0].scale.setTo(0.74, 0.7);
		this.create(0, 0, 'tweetyWings',"twe-ala (1)");
		//this.children[1]
		this.children[1].animations.add('animation0',animation.generateFrameNames('twe-ala (',1,31,')'));
		this.children[1].x = 480 - this.children[1].width/2;
		this.children[1].y = 220 - this.children[1].height/2;
		this.children[1].anchor.setTo(0.5);
		this.children[1].addChild(game.make.sprite(0, 0, 'tweetyBody',"twe-1 (1)"));
		//this.children[1].children[0].anchor.setTo(0.5);
		this.children[1].children[0].anchor.setTo(0.5);
		this.children[1].children[0].animations.add('animation0',animation.generateFrameNames('twe-1 (',1,31,')'));
		this.children[1].children[0].animations.add('animation1',animation.generateFrameNames('twe-2 (',1,16,')'));
		this.children[1].children[0].x = 15;
		this.children[1].children[0].y = -5;
		this.create(0, 0, 'tuba',"tuba (1)");
		//this.children[2]
		this.children[2].x = 265;
		this.children[2].y = 380;
		this.children[2].anchor.setTo(1,0.5);
		this.children[2].animations.add('animation0',animation.generateFrameNames('tuba (',1,13,')'));
		this.create(100, 0, 'tuba',"tuba (1)");
		//this.children[3]
		this.children[3].x = 410;
		this.children[3].y = 450;
		this.children[3].anchor.setTo(1,0.5);
		this.children[3].animations.add('animation0',animation.generateFrameNames('tuba (',1,13,')'));
		this.create(200, 0, 'tuba',"tuba (1)");
		//this.children[4]
		this.children[4].x = 630;
		this.children[4].y = 380;
		this.children[4].anchor.setTo(1,0.5);
		this.children[4].scale.x = -1;
		this.children[4].animations.add('animation0',animation.generateFrameNames('tuba (',1,13,')'));
		this.create(200, 0, 'tuba',"tuba (1)");
		//this.children[5]
		this.children[5].x = 480;
		this.children[5].y = 450;
		this.children[5].anchor.setTo(1,0.5);
		this.children[5].scale.x = -1;
		this.children[5].animations.add('animation0',animation.generateFrameNames('tuba (',1,13,')'));
		this.create(800, 20, 'close');
		this.children[0].inputEnabled = true;
		this.children[6].inputEnabled = true;
		this.children[6].events.onInputDown.add(this.close, this);
		this.soundArray[0] = game.add.audio('tweetyStar0', 1, false);
		this.soundArray[1] = game.add.audio('tweetyStar1', 1, false);
		this.soundArray[2] = game.add.audio('tweetyStar2', 1, false);
		this.soundArray[3] = game.add.audio('tweetyStar3', 1, false);
		this.visible = 0;
		this.x = 2000;
		this.soundButton = game.add.audio('fxButton',0.6,false);

		//this.add(this.DrawButtons(40, 230, 230, 310));
		this.children[2].inputEnabled = true;
		this.children[2].name = 'button1';
		this.children[2].events.onInputDown.add(this.PlaySound, this);
		
		//this.add(this.DrawButtons(210, 315, 200, 200));
		this.children[3].inputEnabled = true;
		this.children[3].name = 'button2';
		this.children[3].events.onInputDown.add(this.PlaySound, this);
		
		//this.add(this.DrawButtons(370, 300, 150, 200));
		this.children[4].inputEnabled = true;
		this.children[4].name = 'button3';
		this.children[4].events.onInputDown.add(this.PlaySound, this);
		
		//this.add(this.DrawButtons(500, 150, 150, 150));
		this.children[5].inputEnabled = true;
		this.children[5].name = 'button4';
		this.children[5].events.onInputDown.add(this.PlaySound, this);
		
		this.tween = null;
		this.song = 0;
		this.animationIndex = 0;

	}
	open() {
		this.visible = 1;
		this.x = 0;
		this.children[1].x = 480 - this.children[1].width/2;
		this.children[1].y = 220 - this.children[1].height/2;
		this.children[1].animations.play('animation0',30,true);
	}
	close() {
		click.playAniamtion();
		this.soundButton.play();
		this.visible = 0;
		this.x = 2000;
		GameManager.botones.buttonback(this.button, this.index);
	}
	onComplete(){
		this.children[this.animationIndex].animations.stop(true);
		this.children[1].children[0].animations.play('animation1',60,false);
		this.children[this.animationIndex].animations.play('animation0',30,false);
		this.soundArray[this.song].play();
	}
	PlaySound(target) {
		click.playAniamtion();
		this.children[1].children[0].animations.stop(true);
		switch (target.name) {
			case 'button1':
				this.children[1].scale.x = 1;
				this.animationIndex = 2;
				this.song = 0;
				this.tween = this.game.add.tween(this.children[1]).to({x:[273],y:[310]},500,"Linear",true);
				this.tween.onComplete.add(this.onComplete,this);
				break;
			case 'button2':
				this.children[1].scale.x = 1;
				this.animationIndex = 3;
				this.song = 1;
				this.tween =this.game.add.tween(this.children[1]).to({x:[415],y:[380]},500,"Linear",true);
				this.tween.onComplete.add(this.onComplete,this);
				break;
			case 'button3':
				this.children[1].scale.x = -1;
				this.animationIndex = 4;
				this.song = 3;
				this.tween =this.game.add.tween(this.children[1]).to({x:[625],y:[310]},500,"Linear",true);
				this.tween.onComplete.add(this.onComplete,this);
				break;
			case 'button4':
				this.children[1].scale.x = -1;
				this.animationIndex = 5;
				this.song = 2;
				this.tween = this.game.add.tween(this.children[1]).to({x:[470],y:[380]},500,"Linear",true);
				this.tween.onComplete.add(this.onComplete,this);
				break;
		}
		
	}
}