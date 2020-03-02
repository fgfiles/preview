class classCharacters extends Phaser.Group {
	
	constructor(game,character, button,Index){
		var animation = Phaser.Animation
		super(game);
		this.frameSpeed = 0;
		if(game.device.android){
			this.fpsanimation = 11;
		}else if (game.device.iPad){
			this.fpsanimation = 11;
		}else if (game.device.iPhone){
			this.fpsanimation = 11;
		}else if (game.device.iPhone4){
			this.fpsanimation = 11;
		}
		else if (game.device.desktop ){
			this.fpsanimation = 11;
		}
		this.name = character;
		this.index = Index;
		this.button = button;
		this.inputEnableChildren = true;
		this.create(0,0,character,character+' (1)');
		this.create(0,0,character+'2',character+'-2 (1)');
		this.create(0,0,character+'3',character+'3 (1)');
		this.create(0,0,character+'Idel',character+'_idel (1)');
		this.children[0].animations.add('animation0',animation.generateFrameNames(character+' (',1,66,')'));
		this.children[1].animations.add('animation1',animation.generateFrameNames(character+'-2 (',1,66,')'));
		this.children[2].animations.add('animation2',animation.generateFrameNames(character+'3 (',1,66,')'));
		this.children[3].animations.add('animation3',animation.generateFrameNames(character+'_idel (',1,66,')'));
		this.children[0].smoothed = false;
		this.children[1].smoothed = false;
		this.children[2].smoothed = false;
		this.children[3].smoothed = false;
		this.setup();
		this.setAll('anchor.y',1);
		this.setAll('anchor.x',0.5);
		this.onChildInputDown.add(this.clickDown, this);
		this.onChildInputUp.add(this.clickUp, this);
		//console.log(GameManager.soundControl);
		GameManager.soundControl.addSound(this.index,this);
	}
	
	setup(){
		this.children[0].visible = 0;
		this.children[1].visible = 0;
		this.children[2].visible = 0;
		this.children[3].visible = 0;
		this.children[0].animations.stop(true);
		this.children[1].animations.stop(true);
		this.children[2].animations.stop(true);
		this.children[3].animations.stop(true);
		
	}
	placeCharacter(pos,level,PalletIndex){
		this.x = pos[0];
		this.y = pos[1];
		this.scale.setTo(pos[2]);
		this.setup();
		this.children[3].visible = 1;
		//this.playAnimation(3);
		GameManager.soundControl.PlaySong(this.index,level);
		
		//
		this.SlotIndex = PalletIndex;
		//
		
	}
	clickDown(target){
		this.setup();
		this.button.visible = 1;
		this.button.x = game.input.x;
		this.button.y = game.input.y;
		this.button.events.onInputDown.dispatch(this.button);
		this.stopAllSound();
	}
	clickUp(){
		this.button.events.onInputUp.dispatch(this.button);
	}
	//update es una funcion reservada de phaser y esta conectada al world de phaser
	update(){
	}
	stopAllSound(){
		GameManager.botones.resetCharacterSlot(this.SlotIndex);
		GameManager.soundControl.StopSong(this.index);
		/*this.arraySounds[0].stop();
		this.arraySounds[1].stop();
		this.arraySounds[2].stop();*/
	}
	playAnimation(level){
		this.setup();
		this.children[level].visible = 1;
		this.children[level].animations.play('animation'+level,this.fpsanimation,false);
	}
	resetCharacter(){
		this.setup();

		this.button.visible = 1;
		this.stopAllSound();
		GameManager.botones.buttonback(this.button);
		//this.button.events.onInputUp.dispatch(this.button);
		this.SlotIndex = undefined;
	}
	disableInput(){

		this.onChildInputDown.remove(this.clickDown, this);
		this.onChildInputUp.remove(this.clickUp, this);
	}
	enableInput(){
		this.onChildInputDown.add(this.clickDown, this);
		this.onChildInputUp.add(this.clickUp, this);
	}
}