// JavaScript Document
class daffyStar extends Phaser.Group {

	constructor(game, Button, Index) {
		super(game);
		var animation = Phaser.Animation;
		this.soundArray = [];
		this.button = Button;
		this.index = Index;

		this.create(0, 0, 'fondoStar2');
		//this.children[0].scale.setTo(0.74, 0.7);
		this.create(0, 0, 'daffyBody');
		this.children[1].x = 500 - this.children[1].width/2;
		this.create(0, 0, 'daffystring',"daf-str (1)");
		this.children[2].anchor.setTo(0.5);
		this.children[2].x = 495 + 2 - this.children[2].width/2;
		this.children[2].y = 275 + 2;
		this.children[2].angle = 51;
		this.children[2].inputEnabled = true;
		this.children[2].name = 'button1';
		this.children[2].events.onInputDown.add(this.PlaySound, this);
		this.children[2].events.onInputOver.add(this.PlaySound, this);
		this.children[2].animations.add('animation0',animation.generateFrameNames('daf-str (',1,10,')'));
		this.create(0, 0, 'daffystring',"daf-str (1)");
		this.children[3].anchor.setTo(0.5);
		this.children[3].x = 495 -2  - this.children[2].width/2;
		this.children[3].y = 275 -2;
		this.children[3].angle = 51;
		this.children[3].inputEnabled = true;
		this.children[3].name = 'button2';
		this.children[3].events.onInputDown.add(this.PlaySound, this);
		this.children[3].events.onInputOver.add(this.PlaySound, this);
		this.children[3].animations.add('animation0',animation.generateFrameNames('daf-str (',1,10,')'));
		this.create(0, 0, 'daffystring',"daf-str (1)");
		this.children[4].anchor.setTo(0.5);
		this.children[4].x = 495 -6 - this.children[2].width/2;
		this.children[4].y = 275 - 6;
		this.children[4].angle = 51;
		this.children[4].inputEnabled = true;
		this.children[4].name = 'button3';
		this.children[4].events.onInputDown.add(this.PlaySound, this);
		this.children[4].events.onInputOver.add(this.PlaySound, this);
		this.children[4].animations.add('animation0',animation.generateFrameNames('daf-str (',1,10,')'));
		this.create(0, 0, 'daffystring',"daf-str (1)");
		this.children[5].anchor.setTo(0.5);
		this.children[5].x = 495 - 10 - this.children[2].width/2;
		this.children[5].y = 275 - 10;
		this.children[5].angle = 51;
		this.children[5].inputEnabled = true;
		this.children[5].name = 'button4';
		this.children[5].events.onInputDown.add(this.PlaySound, this);
		this.children[5].events.onInputOver.add(this.PlaySound, this);
		this.children[5].animations.add('animation0',animation.generateFrameNames('daf-str (',1,10,')'));
		this.create(0, 0, 'daffyHand',"daf-han (1)");
		this.children[6].x = 485 - this.children[1].width/2;
		this.children[6].y = 253;
		this.children[6].animations.add('animation0',animation.generateFrameNames('daf-han (',1,7,')'));
		this.create(800, 20, 'close');
		this.children[0].inputEnabled = true;
		this.children[7].inputEnabled = true;
		this.children[7].events.onInputDown.add(this.close, this);
		this.soundArray[0] = game.add.audio('daffyStar1', 1, false);
		this.soundArray[1] = game.add.audio('daffyStar2', 1, false);
		this.soundArray[2] = game.add.audio('daffyStar3', 1, false);
		//this.soundArray[3] = game.add.audio('daffyStar4', 1, false);
		//this.soundArray[4] = game.add.audio('daffyStar5', 1, false);
		this.visible = 0;
		this.x = 2000;
		this.soundButton = game.add.audio('fxButton',0.6,false);

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

		this.children[6].animations.play('animation0',15,false);
		switch (target.name) {
			case 'button1':
				this.soundArray[1].play();
				this.children[2].animations.play('animation0',15,false);
				break;
			case 'button2':
				this.soundArray[0].play();
				this.children[3].animations.play('animation0',30,false);
				break;
			case 'button3':
				this.soundArray[3].play();
				this.children[4].animations.play('animation0',30,false);
				break;
			case 'button4':
				this.soundArray[1].play();
				this.children[5].animations.play('animation0',30,false);
				break;
		}
	}
}