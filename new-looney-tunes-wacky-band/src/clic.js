// JavaScript Document
class clic extends Phaser.Group {
	constructor(){
		super(game);
		var animation = Phaser.Animation;
		this.create(2000,0,'clic',"clic (1).png");
		this.children[0].anchor.setTo(0.5)
		this.anima = this.children[0].animations.add('animation0',animation.generateFrameNames('clic (',1,15,').png'));
		this.anima.onComplete.add(this.hide,this);
	}
	playAniamtion(){
		this.children[0].x = game.input.x;
		this.children[0].y =game.input.y;
		this.anima.play('animation0',30,false);
	}
	hide(){
		this.children[0].x = 2000;
	}
	
}