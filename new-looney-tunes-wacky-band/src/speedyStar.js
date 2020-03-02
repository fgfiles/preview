// JavaScript Document
class speedyStar extends Phaser.Group {

	constructor(game, Button, Index) {
		super(game);
		var animation = Phaser.Animation;
		this.soundArray = [];
		this.button = Button;
		this.index = Index;

		this.create(0, 0, 'fondoStar2');
		//this.children[0].scale.setTo(0.74, 0.7);
		this.create(0, 0, 'speedyHead');
		//this.children[1].scale.setTo(0.75);
		this.children[1].anchor.setTo(0.6,0.8);
		this.children[1].x = 240;
		this.children[1].y = 338;
		
		
		this.create(0, 0, 'speedyBody');
		//this.children[1].scale.setTo(0.75);
		this.children[2].x = 0;
		this.children[2].y = 500 - this.children[2].height;
		
		this.create(0, 0, 'speedyBra',"spe-bra (1)");
		//this.children[1].scale.setTo(0.75);
		this.children[3].x = 250;
		this.children[3].y = 240 ;
		this.children[3].animations.add('animation0',animation.generateFrameNames('spe-bra (',1,8,')'));
		this.children[3].animations.add('animation1',animation.generateFrameNames('spe-bra (',1,8,')'));
		this.children[3].animations.add('animation2',animation.generateFrameNames('spe-bra (',1,8,')'));
		
		this.create(0, 0, 'speedyTro',"spe-tro (1)");
		//this.children[1].scale.setTo(0.75);
		this.children[4].x = 550;
		this.children[4].y = 59;
		this.children[4].animations.add('animation0',animation.generateFrameNames('spe-tro (',1,8,')'));
		
		
		this.create(800, 20, 'close');
		this.children[0].inputEnabled = true;
		this.children[0].events.onInputDown.add(this.PlaySound, this);
		this.children[5].inputEnabled = true;
		this.children[5].events.onInputDown.add(this.close, this);
		this.soundArray[0] = game.add.audio('speedyStar0', 1, false);
		this.soundArray[1] = game.add.audio('speedyStar1', 1, false);
		this.soundArray[2] = game.add.audio('speedyStar2', 1, false);
		this.visible = 0;
		this.x = 200;
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
		rect.beginFill(0x00ffff, 0.5);
		rect.drawRect(x, y, width, height);
		rect.endFill();
		return rect;
	}
	PlaySound(target) {
		click.playAniamtion();
		this.children[4].animations.stop(true);
		game.add.tween(this.children[1]).to( { angle: [-10,0,5,0] }, 500, Phaser.Easing.Linear.None, true);
		this.children[4].animations.play('animation0',15,false);
		if(this.game.input.x < 296){
			this.soundArray[0].play();
			//this.children[1].visible = 1;
			this.children[3].animations.play('animation0',15,false);
		}else if(this.game.input.x > 296 && this.game.input.x < 592){
			this.soundArray[1].play();
			//this.children[2].visible = 1;
			this.children[3].animations.play('animation1',15,false);
		}else if(this.game.input.x > 592){
			this.soundArray[2].play();
			//this.children[3].visible = 1;
			this.children[3].animations.play('animation2',15,false);
		}
	}
}
