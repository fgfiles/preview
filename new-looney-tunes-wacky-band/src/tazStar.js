// JavaScript Document
class tazStar extends Phaser.Group {

	constructor(game, Button, Index) {
		super(game);
		var animation = Phaser.Animation;
		this.soundArray = [];
		this.button = Button;
		this.index = Index;

		this.create(0, 0, 'fondoStar2');
		//this.children[0].scale.setTo(0.74, 0.7);
		this.create(0, 0, 'bateria');
		this.children[1].x = 40;
		this.children[1].y = 140;
		this.create(0, 0, 'taz-der',"taz-der1 (1)");
		this.children[2].x = 480;
		this.children[2].animations.add('animation0',animation.generateFrameNames('taz-der1 (',1,14,')'));
		this.children[2].animations.add('animation1',animation.generateFrameNames('taz-der2 (',1,14,')'));
		this.children[2].animations.add('animation2',animation.generateFrameNames('taz-der3 (',1,14,')'));
		this.children[2].animations.add('animation3',animation.generateFrameNames('taz-der4 (',1,14,')'));
		this.create(0, 0, 'taz-izq',"taz-izq1 (1)");
		this.children[3].x = 55;
		this.children[3].animations.add('animation0',animation.generateFrameNames('taz-izq1 (',1,14,')'));
		this.children[3].animations.add('animation1',animation.generateFrameNames('taz-izq2 (',1,14,')'));
		this.children[3].animations.add('animation2',animation.generateFrameNames('taz-izq3 (',1,14,')'));
		this.create(0, 0, 'BodyTaz',"taz-rem (1)");
		this.children[4].x = 100;
		this.children[4].animations.add('animation0',animation.generateFrameNames('taz-rem (',1,14,')'));
		this.create(800, 20, 'close');
		this.children[0].inputEnabled = true;
		this.children[5].inputEnabled = true;
		this.children[5].events.onInputDown.add(this.close, this);
		this.soundArray[0] = game.add.audio('tazStar0', 1, false);
		this.soundArray[1] = game.add.audio('tazStar1', 1, false);
		this.soundArray[2] = game.add.audio('tazStar2', 1, false);
		this.soundArray[3] = game.add.audio('tazStar3', 1, false);
		this.soundArray[4] = game.add.audio('tazStar4', 1, false);
		this.soundArray[5] = game.add.audio('tazStar5', 1, false);
		this.soundArray[6] = game.add.audio('tazStar6', 1, false);
		this.soundArray[7] = game.add.audio('tazStar7', 1, false);
		this.soundArray[8] = game.add.audio('tazStar8', 1, false);
		this.visible = 0;
		this.x = 2000;
		this.soundButton = game.add.audio('fxButton',0.6,false);

		this.add(this.DrawButtons(205, 190, 150, 150));
		this.children[6].inputEnabled = true;
		this.children[6].name = 'button1';
		this.children[6].events.onInputDown.add(this.PlaySound, this);
		
		this.add(this.DrawButtons(30, 260, 220, 200));
		this.children[7].inputEnabled = true;
		this.children[7].name = 'button2';
		this.children[7].events.onInputDown.add(this.PlaySound, this);
		
		this.add(this.DrawButtons(350, 275, 210, 210));
		this.children[8].inputEnabled = true;
		this.children[8].name = 'button3';
		this.children[8].events.onInputDown.add(this.PlaySound, this);
		
		this.add(this.DrawButtons(610, 300, 230, 230));
		this.children[9].inputEnabled = true;
		this.children[9].name = 'button4';
		this.children[9].events.onInputDown.add(this.PlaySound, this);
		
		this.add(this.DrawButtons(515, 178, 150, 150));
		this.children[10].inputEnabled = true;
		this.children[10].name = 'button5';
		this.children[10].events.onInputDown.add(this.PlaySound, this);
		
		this.add(this.DrawButtons(300, 315, 130, 130));
		this.children[11].inputEnabled = true;
		this.children[11].name = 'button6';
		this.children[11].events.onInputDown.add(this.PlaySound, this);
		
		this.add(this.DrawButtons(470, 318, 110, 115));
		this.children[12].inputEnabled = true;
		this.children[12].name = 'button7';
		this.children[12].events.onInputDown.add(this.PlaySound, this);
		
		this.add(this.DrawButtons(670, 127, 170, 170));
		this.children[13].inputEnabled = true;
		this.children[13].name = 'button8';
		this.children[13].events.onInputDown.add(this.PlaySound, this);
		
		this.add(this.DrawButtons(280, 0, 300, 170));
		this.children[14].inputEnabled = true;
		this.children[14].name = 'button9';
		this.children[14].events.onInputDown.add(this.PlaySound, this);

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

		//this.children[2].animations.stop(true);
		//this.children[3].animations.stop(true);
		switch (target.name) {
			case 'button1':
				this.soundArray[5].play();
				this.children[3].animations.stop(true);
				this.children[3].animations.play('animation1',30,false);
				break;
			case 'button2':
				this.soundArray[0].play();
				this.children[3].animations.stop(true);
				this.children[3].animations.play('animation0',30,false);
				break;
			case 'button3':
				this.soundArray[3].play();
				break;
			case 'button4':
				this.soundArray[1].play();
				this.children[2].animations.stop(true);
				this.children[2].animations.play('animation1',30,false);
				break;
			case 'button5':
				this.soundArray[4].play();
				this.children[2].animations.stop(true);
				this.children[2].animations.play('animation2',30,false);
				break;
			case 'button6':
				this.soundArray[2].play();
				this.children[3].animations.stop(true);
				this.children[3].animations.play('animation2',30,false);
				break;
			case 'button7':
				this.soundArray[7].play();
				this.children[2].animations.stop(true);
				this.children[2].animations.play('animation3',30,false);
				break;
			case 'button8':
				this.soundArray[6].play();
				this.children[2].animations.stop(true);
				this.children[2].animations.play('animation0',30,false);
				break;
			case 'button9':
				this.soundArray[8].play();
				this.children[4].animations.stop(true);
				this.children[4].animations.play('animation0',30,false);
				break;
				
		}
	}
}
