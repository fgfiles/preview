// JavaScript Document
class marvinStar extends Phaser.Group {

	constructor(game, Button, Index) {
		super(game);
		var animation = Phaser.Animation;
		this.soundArray = [];
		this.button = Button;
		this.index = Index;

		this.create(0, 0, 'fondoStar2');
		//this.children[0].scale.setTo(0.74, 0.7);
		this.create(0, 0, 'MarvinBody');
		this.children[1].x = 447 - this.children[1].width/2;
		this.children[1].y = 500 - this.children[1].height;
		
		this.create(0, 0, 'MarvinHead');
		this.children[2].x = 435 - this.children[2].width/2;
		
		this.create(0, 0, 'MarvinButton');
		this.children[3].x = 422 - this.children[3].width/2;
		this.children[3].y = 400;
		
		
		this.create(0, 0, 'MarvinComp',"bulb (1)");
		this.children[4].x = 675 - this.children[4].width/2;
		this.children[4].y = 187;
		this.children[4].animations.add('animation0',animation.generateFrameNames('bulb (',1,14,')'));
		
		this.create(0, 0, 'MarvinComp',"fre-line (2)");
		this.children[5].x = 161;
		this.children[5].y = 140;
		this.children[5].animations.add('animation0',animation.generateFrameNames('fre-line (',1,14,')'));
		
		this.create(0, 0, 'MarvinComp',"marvin-eye (1)");
		this.children[6].x = 415 - this.children[5].width/2;
		this.children[6].y = 112;
		this.children[6].animations.add('animation0',animation.generateFrameNames('marvin-eye (',1,13,')'));
		this.children[6].animations.add('animation1',animation.generateFrameNames('marvin-eye2 (',1,13,')'));
		this.children[6].animations.add('animation2',animation.generateFrameNames('marvin-eye3 (',1,13,')'));
		this.children[6].animations.add('animation3',animation.generateFrameNames('marvin-eye4 (',1,13,')'));
		this.children[6].animations.add('animation4',animation.generateFrameNames('marvin-eye5 (',1,13,')'));
		
		
		this.create(0, 0, 'MarvinComp',"marvin-bot1 (1)");
		this.children[7].x = 520;
		this.children[7].y = 340;
		this.children[7].animations.add('animation0',animation.generateFrameNames('marvin-bot1 (',1,3,')'));
		
		this.create(0, 0, 'MarvinComp',"marvin-bot2 (1)");
		this.children[8].x = 240;
		this.children[8].y = 340;
		this.children[8].animations.add('animation0',animation.generateFrameNames('marvin-bot2 (',1,3,')'));
		
		this.create(0, 0, 'MarvinComp',"mano-der1 (1)");
		this.children[9].x = 408;
		this.children[9].y = 185;
		this.children[9].animations.add('animation0',animation.generateFrameNames('mano-der1 (',1,13,')'));
		this.children[9].animations.add('animation1',animation.generateFrameNames('mano-der2 (',1,13,')'));
		this.children[9].animations.add('animation2',animation.generateFrameNames('mano-der3 (',1,13,')'));
		
		this.create(0, 0, 'MarvinComp',"mano-izq1 (1)");
		this.children[10].x = 255;
		this.children[10].y = 144;
		this.mano1 = this.children[10].animations.add('animation0',animation.generateFrameNames('mano-izq1 (',1,13,')'));
		this.children[10].animations.add('animation1',animation.generateFrameNames('mano-izq2 (',1,12,')'));
		
		
		
		
		
		
		this.create(800, 20, 'close');
		this.children[0].inputEnabled = true;
		this.children[11].inputEnabled = true;
		this.children[11].events.onInputDown.add(this.close, this);
		this.soundArray[0] = game.add.audio('marvinStar0', 1, false);
		this.soundArray[1] = game.add.audio('marvinStar1', 1, false);
		//this.soundArray[2] = game.add.audio('marvinStar2', 1, false);
		this.soundArray[2] = game.add.audio('marvinStar3', 1, false);
		this.soundArray[3] = game.add.audio('marvinStar4', 1, false);
		this.soundArray[4] = game.add.audio('marvinStar5', 1, false);
		//this.soundArray[6] = game.add.audio('marvinStar6', 1, false);
		//this.soundArray[7] = game.add.audio('marvinStar7', 1, false);
		this.visible = 0;
		this.x = 2000;
		this.soundButton = game.add.audio('fxButton',0.6,false);

		this.add(this.DrawButtons(140, 138, 130, 80));
		this.children[12].inputEnabled = true;
		this.children[12].name = 'button1';
		this.children[12].events.onInputDown.add(this.PlaySound, this);
		
		this.add(this.DrawButtons(240, 320, 100, 80));
		this.children[13].inputEnabled = true;
		this.children[13].name = 'button2';
		this.children[13].events.onInputDown.add(this.PlaySound, this);
		
		this.add(this.DrawButtons(350, 350, 140, 80));
		this.children[14].inputEnabled = true;
		this.children[14].name = 'button3';
		this.children[14].events.onInputDown.add(this.PlaySound, this);
		
		this.add(this.DrawButtons(520, 320, 100, 80));
		this.children[15].inputEnabled = true;
		this.children[15].name = 'button4';
		this.children[15].events.onInputDown.add(this.PlaySound, this);
		
		this.add(this.DrawButtons(615, 200, 140, 100));
		this.children[16].inputEnabled = true;
		this.children[16].name = 'button5';
		this.children[16].events.onInputDown.add(this.PlaySound, this);
		this.setup();
		this.children[1].visible = 1;
		this.children[2].visible = 1;
		this.children[3].visible = 1;
		this.children[4].visible = 1;
		this.children[5].visible = 1;
		this.children[6].visible = 1;
		this.children[7].visible = 1;
		this.children[8].visible = 1;
		this.children[9].visible = 1;
		this.children[10].visible = 1;
		
		this.playing = false;

	}
	setup(){
		/*this.children[1].visible = 0;
		this.children[2].visible = 0;
		this.children[3].visible = 0;
		this.children[4].visible = 0;
		this.children[5].visible = 0;
		this.children[1].animations.stop(true);
		this.children[2].animations.stop(true);
		this.children[3].animations.stop(true);
		this.children[4].animations.stop(true);
		this.children[5].animations.stop(true);*/
	}
	open() {
		this.setup();
		this.visible = 1;
		this.x = 0;
		this.children[1].visible = 1;
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
	update(){
		if(this.playing == true){

			if(this.children[10].animations.currentAnim.frame == 68){
				this.children[5].animations.play('animation0',15,false);
				this.playing = false;
				this.soundArray[4].play();
			}
			if(this.children[10].animations.currentAnim.frame == 83){
				this.children[8].animations.play('animation0',15,false);
				this.playing = false;
				this.soundArray[0].play();
			}
			if(this.children[9].animations.currentAnim.frame == 45){
				this.children[7].animations.play('animation0',15,false);
				this.playing = false;
				this.soundArray[1].play();
			}
			if(this.children[9].animations.currentAnim.frame == 59){
				this.children[4].animations.play('animation0',15,false);
				this.playing = false;
				this.soundArray[3].play();
			}
			if(this.children[9].animations.currentAnim.frame == 32){
				game.add.tween(this.children[3]).to( { y: [380,400] }, 300, Phaser.Easing.Linear.None, true);
				this.playing = false;
				this.soundArray[2].play();
			}
		}
	}
	PlaySound(target) {
		click.playAniamtion();
		this.setup();

		game.add.tween(this.children[2]).to( { y: [5,0] }, 1000, Phaser.Easing.Linear.None, true);
		switch (target.name) {
			case 'button1':

				this.children[10].animations.play('animation0',15,false);
				this.children[6].animations.play('animation0',15,false);
				break;
			case 'button2':
				this.children[10].animations.play('animation1',15,false);
				this.children[6].animations.play('animation1',15,false);
				break;
			case 'button3':
				//this.soundArray[2].play();
				this.children[9].animations.play('animation0',15,false);
				this.children[6].animations.play('animation2',15,false);
				break;
			case 'button4':
				//this.soundArray[1].play();
				this.children[9].animations.play('animation1',15,false);
				this.children[6].animations.play('animation3',15,false);
				break;
			case 'button5':
				//this.soundArray[3].play();
				this.children[9].animations.play('animation2',15,false);
				this.children[6].animations.play('animation4',15,false);
				break;
		}
		this.playing = true;
	}
}
