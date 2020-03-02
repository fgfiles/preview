// JavaScript Document
class roadStar extends Phaser.Group {

	constructor(game, Button, Index) {
		super(game);
		var animation = Phaser.Animation;
		this.soundArray = [];
		this.button = Button;
		this.index = Index;

		this.create(0, 0, 'fondoStar2');
		//this.children[0].scale.setTo(0.74, 0.7);
		this.create(0, 0, 'corne',"corne (1)");
		//this.children[1]
		this.children[1].x = 270;
		this.children[1].y = 170;
		this.children[1].anchor.setTo(1,0.5);
		this.children[1].rotation = -0.7;
		this.children[1].animations.add('animation0',animation.generateFrameNames('corne (',1,15,')'));
		this.create(100, 0, 'corne',"corne (1)");
		//this.children[2]
		this.children[2].x = 465;
		this.children[2].y = 150;
		this.children[2].anchor.setTo(1,0.5);
		this.children[2].animations.add('animation0',animation.generateFrameNames('corne (',1,15,')'));
		this.create(200, 0, 'corne',"corne (1)");
		//this.children[3]
		this.children[3].x = 650;
		this.children[3].y = 230;
		this.children[3].anchor.setTo(1,0.5);
		this.children[3].rotation = 0.7;
		this.children[3].animations.add('animation0',animation.generateFrameNames('corne (',1,15,')'));
		this.create(0, 0, 'roadBody',"road1 (1)");
		//this.children[4]
		this.children[4].animations.add('animation0',animation.generateFrameNames('road2 (',1,15,')'));
		this.children[4].animations.add('animation1',animation.generateFrameNames('road3 (',1,15,')'));
		this.children[4].animations.add('animation2',animation.generateFrameNames('road4 (',1,15,')'));
		this.children[4].animations.add('animation3',animation.generateFrameNames('road1 (',1,14,')'));
		this.children[4].x = 440 - this.children[4].width/2;
		this.children[4].y = 500 - this.children[4].height;
		this.create(800, 20, 'close');
		this.children[0].inputEnabled = true;
		this.children[5].inputEnabled = true;
		this.children[5].events.onInputDown.add(this.close, this);
		this.soundArray[0] = game.add.audio('roadStar0', 1, false);
		this.soundArray[1] = game.add.audio('roadStar1', 1, false);
		this.soundArray[2] = game.add.audio('roadStar2', 1, false);
		this.soundArray[3] = game.add.audio('roadStar3', 1, false);
		this.visible = 0;
		this.x = 2000;
		this.soundButton = game.add.audio('fxButton',0.6,false);

		this.add(this.DrawButtons(190, 150, 150, 150));
		this.children[6].inputEnabled = true;
		this.children[6].name = 'button1';
		this.children[6].events.onInputDown.add(this.PlaySound, this);
		
		this.add(this.DrawButtons(395, 100, 70, 170));
		this.children[7].inputEnabled = true;
		this.children[7].name = 'button2';
		this.children[7].events.onInputDown.add(this.PlaySound, this);
		
		this.add(this.DrawButtons(370, 300, 150, 200));
		this.children[8].inputEnabled = true;
		this.children[8].name = 'button3';
		this.children[8].events.onInputDown.add(this.PlaySound, this);
		
		this.add(this.DrawButtons(500, 150, 150, 150));
		this.children[9].inputEnabled = true;
		this.children[9].name = 'button4';
		this.children[9].events.onInputDown.add(this.PlaySound, this);

	}
	open() {
		this.visible = 1;
		this.x = 0;
	}
	close() {
		click.playAniamtion();
		this.soundButton.play();
		this.visible = 0;
		this.x = 2000;
		GameManager.botones.buttonback(this.button, this.index);
	}
	DrawButtons(x, y, width, height) {
		var rect = game.add.graphics(0, 0);
		rect.beginFill(0x00ffff, 0);
		rect.drawRect(x, y, width, height);
		rect.endFill();
		return rect;
	}
	PlaySound(target) {
		click.playAniamtion();
		this.children[4].animations.stop(true);
		switch (target.name) {
			case 'button1':
				this.children[1].animations.stop(true);
				this.children[4].animations.play('animation0',30,false);
				this.children[1].animations.play('animation0',30,false);
				this.soundArray[0].play();
				break;
			case 'button2':
				this.children[2].animations.stop(true);
				this.children[4].animations.play('animation1',30,false);
				this.children[2].animations.play('animation0',30,false);
				this.soundArray[1].play();
				break;
			case 'button3':
				this.children[4].animations.play('animation3',30,false);
				this.soundArray[3].play();
				break;
			case 'button4':
				this.children[3].animations.stop(true);
				this.children[4].animations.play('animation2',30,false);
				this.children[3].animations.play('animation0',30,false);
				this.soundArray[2].play();
				break;
		}
		
	}
}
