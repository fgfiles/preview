// JavaScript Document
class willyStar extends Phaser.Group {

	constructor(game, Button, Index) {
		super(game);
		var animation = Phaser.Animation;
		this.soundArray = [];
		this.button = Button;
		this.index = Index;

		this.create(0, 0, 'fondoStar1');
		//this.children[0].scale.setTo(0.74, 0.7);
		//Animacion 1
		this.create(0, 0, 'willy-ser',"willy-ser (1)");
		this.children[1].x =0;
		this.children[1].y =40;
		this.children[1].animations.add('animation0',animation.generateFrameNames('willy-ser (',1,29,')'));
		//Aniamcion 2
		this.create(0, 0, 'martillo',"martillo (1)");
		this.children[2].x =90;
		this.children[2].y =10;
		this.children[2].animations.add('animation0',animation.generateFrameNames('martillo (',1,29,')'));
		//Animacion 3
		this.create(0, 0, 'soplete',"soplete (1)");
		this.children[3].x =40;
		this.children[3].y =100;
		this.children[3].animations.add('animation0',animation.generateFrameNames('soplete (',1,29,')'));
		//Aniamcion 
		this.create(0, 0, 'taladro',"taladro (1)");
		this.children[4].x = 80;
		this.children[4].y =200;
		this.children[4].animations.add('animation0',animation.generateFrameNames('taladro (',1,43,')'));
		///general
		this.create(0, 0, 'willy-bg');
		this.children[5].x =50;
		this.children[5].y = 500 - this.children[5].height;
		this.create(0, 0, 'Taladro');
		this.children[6].scale.setTo(0.6);
		this.children[6].x =300;
		this.children[6].y = 490 - this.children[6].height;
		this.children[6].angle = 45;
		this.children[6].inputEnabled = true;
		this.children[6].name = 'button1';
		this.children[6].events.onInputDown.add(this.PlaySound, this);
		this.create(0, 0, 'Soplete');
		this.children[7].scale.setTo(0.6);
		this.children[7].x =645;
		this.children[7].y = 490 - this.children[7].height;
		this.children[7].angle = 30;
		this.children[7].inputEnabled = true;
		this.children[7].name = 'button2';
		this.children[7].events.onInputDown.add(this.PlaySound, this);
		this.create(0, 0, 'Serrucho');
		this.children[8].scale.setTo(0.6);
		this.children[8].x =700;
		this.children[8].y = 490 -  this.children[8].height;
		this.children[8].inputEnabled = true;
		this.children[8].name = 'button3';
		this.children[8].events.onInputDown.add(this.PlaySound, this);
		this.create(0, 0, 'Martillo');
		this.children[9].scale.setTo(0.5);
		this.children[9].x =340;
		this.children[9].y = 490 - this.children[9].height;
		this.children[9].angle = -20;
		this.children[9].inputEnabled = true;
		this.children[9].name = 'button4';
		this.children[9].events.onInputDown.add(this.PlaySound, this);
		
		this.create(0, 0, 'willy-head2',"willy-head2 (1)");
		this.children[10].x =248;
		this.children[10].y = 0;
		this.children[10].animations.add('animation0',animation.generateFrameNames('willy-head2 (',1,29,')'));
		//Animacion 1
		this.create(0, 0, 'rob1',"rob1 (1)");
		this.children[11].x =84;
		this.children[11].y =120;
		this.children[11].animations.add('animation0',animation.generateFrameNames('rob1 (',1,29,')'));
		//animacion 2
		this.create(0, 0, 'rob2',"rob2 (1)");
		this.children[12].x =84;
		this.children[12].y = 188;
		this.children[12].animations.add('animation0',animation.generateFrameNames('rob2 (',1,29,')'));
		//Animacion 3
		this.create(0, 0, 'rob3',"rob3 (1)");
		this.children[13].x =84;
		this.children[13].y =188;
		this.children[13].animations.add('animation0',animation.generateFrameNames('rob3 (',1,29,')'));
		//Animacion 4
		this.create(0, 0, 'rob4',"rob4 (1)");
		this.children[14].x =52;
		this.children[14].y =188;
		this.children[14].animations.add('animation0',animation.generateFrameNames('rob4 (',1,43,')'));
		//colse button
		this.create(800, 20, 'close');
		this.children[0].inputEnabled = true;
		this.children[15].inputEnabled = true;
		this.children[15].events.onInputDown.add(this.close, this);
		this.soundArray[0] = game.add.audio('willyStar1', 1, false);
		this.soundArray[1] = game.add.audio('willyStar2', 1, false);
		this.soundArray[2] = game.add.audio('willyStar3', 1, false);
		this.soundArray[3] = game.add.audio('willyStar0', 1, false);
		this.visible = 0;
		this.x = 2000;
		this.soundButton = game.add.audio('fxButton',0.6,false);
		this.head = null;
		this.arm = null;
		this.robot = null;
		this.setup();
		//this.children[11].visible = 1;
		this.children[1].visible = 1;
		this.children[13].visible = 1;

	}
	setup(){
		this.children[1].visible = 0;
		this.children[2].visible = 0;
		this.children[3].visible = 0;
		this.children[4].visible = 0;
		
		
		this.children[11].visible = 0;
		this.children[12].visible = 0;
		this.children[13].visible = 0;
		this.children[14].visible = 0;
		this.soundArray[0].stop();
		this.soundArray[1].stop();
		this.soundArray[2].stop();
		this.soundArray[3].stop();
		
	}
	open() {
		this.visible = 1;
		this.x = 0;
		this.setup();
		this.children[1].visible = 1;
		this.children[13].visible = 1;
	}
	close() {
		click.playAniamtion();
		this.soundButton.play();
		this.visible = 0;
		this.x = 2000;
		GameManager.botones.buttonback(this.button, this.index);
	}
	PlayAnima(arm,rob){
		this.children[arm].visible = 1;
		this.children[rob].visible = 1;
		this.head = this.children[10].animations;
		this.arm = this.children[arm].animations;
		this.robot = this.children[rob].animations;
		this.arm.play('animation0',15,false);
		this.head.play('animation0',15,false);
		this.robot.play('animation0',15,false);
	}
	PlaySound(target) {
		click.playAniamtion();
		this.setup();

		switch (target.name) {
			case 'button1':
				this.soundArray[2].play();
				this.PlayAnima(4,14);
				//this.children[2].animations.play('animation0',15,false);
				break;
			case 'button2':
				this.soundArray[1].play();
				this.PlayAnima(3,13);
				//this.children[3].animations.play('animation0',30,false);
				break;
			case 'button3':
				this.soundArray[3].play();
				this.PlayAnima(1,11);
				//this.children[4].animations.play('animation0',30,false);
				break;
			case 'button4':
				this.soundArray[0].play();
				this.PlayAnima(2,12);
				//this.children[5].animations.play('animation0',30,false);
				break;
		}
	}
}