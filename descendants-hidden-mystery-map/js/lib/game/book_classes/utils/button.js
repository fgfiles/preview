ig.module(
	'lib.game.book_classes.utils.button'
).defines(function(){ 'use strict';

	ig.Book.ButtonManager = ig.Class.extend({

		buttons: [],

		init: function(){
			
		},

		update: function(){
			// if(ig.input.pressed(ig.KEY.MOUSE1) !== true){
			// 	return;
			// }
			for(var i = 0; i < this.buttons.length; i++){
				if(this.buttons[i].active === true){
					this.buttons[i].boundsCheck( ig.input.mouse, ig.input.pressed(ig.KEY.MOUSE1) );
					this.buttons[i].update();
				}
			}
		},

		addButton: function( button ){
			this.buttons.push( button );
		},
		removeButton: function( button ){
			for(var i = 0; i < this.buttons.length; i++){
				if(this.buttons[i] === button){
					this.buttons.splice(i, 1);
					break;
				}
			}
		}

	});

	ig.Book.Button = ig.Class.extend({

		con: null,
		bounds: null,
		active: true,
		mouseOver: false,
		targetScale: 1,
		string: null,
		strings: null,

		// onClick: null,

		init: function( displayObject, options ) {
			
			// this.con = displayObject;
			this.con = new createjs.Container();
			this.con.addChild(displayObject);
			this.bounds = this.con.getBounds();
			if(options){
				if(options.string ){
					this.updateString( options.string );
				}
				if(options.strings){
					this.strings = options.strings;
					for(var i = 0; i < this.strings.length; i++){
						this.con.addChild(this.strings[i]);
						this.strings[i].x = this.bounds.width/2;
						this.strings[i].y = this.bounds.height/2;
					}
				}
			}
			this.con.regX = this.bounds.width/2;
			this.con.regY = this.bounds.height/2;
			
		},

		updateString: function( string ){
			this.con.removeChild(this.string);
			this.string = string;
			this.con.addChild(string);
			this.string.x = this.bounds.width/2;
			this.string.y = this.bounds.height/2;
		},

		update: function(){
			this.con.scaleX += ( this.targetScale - this.con.scaleX )/5;
			this.con.scaleY = this.con.scaleX;
		},

		boundsCheck: function( point, isClick ){
			/// this function does not take rotation in to consideration
			var localPoint = this.con.globalToLocal( point.x, point.y );
			if(localPoint.x > 0 && localPoint.x < this.bounds.width && localPoint.y > 0 && localPoint.y < this.bounds.height){
				if( isClick ) {
					ig.sound.playSound('sfxClick');
					this.onClick();
				} else {
					this.onMouseOver();
				}
			} else {
				this.mouseOut();
			}
		},

		onClick: function(){
			
		},
		onMouseOver: function(){
			this.targetScale = 1.1;
			ig.game.cursorPointer = true;
		},
		mouseOut: function(){
			this.targetScale = 1;
		}
	});
	
	ig.Book.instantButton = ig.Book.Button.extend({
		boundsCheck: function( point, isClick ){

			/// this function does not take rotation in to consideration
			var localPoint = this.con.globalToLocal( point.x, point.y );
			if(localPoint.x > 0 && localPoint.x < this.bounds.width && localPoint.y > 0 && localPoint.y < this.bounds.height){
				if( isClick ) {

				} else {
					this.onMouseOver();
				}
			} else {
				this.mouseOut();
			}
		},
		iBoundsCheck: function( point ){
			/// this function does not take rotation in to consideration
			var localPoint = this.con.globalToLocal( point.x, point.y );
			if(localPoint.x > 0 && localPoint.x < this.bounds.width && localPoint.y > 0 && localPoint.y < this.bounds.height){
				return true;
			} else {
				return false;
			}
		},
		kill: function(){
			for(var i = 0; i < ig.scene.buttons.length; i++){
				if(ig.scene.buttons[i] === this){
					ig.scene.buttons.splice(i, 1);
				}
			}
		}
	});

	ig.Book.quizAnswer = ig.Book.Button.extend({

		checkRed: null,
		checkBlue: null,
		linesThrough: null,
		correct: null,
		metrics: null,
		mask: [],
		blueMask: null,
		buttons: null,

		init: function( displayObject, options ){
			this.parent( displayObject, options );

			this.bounds = this.con.getBounds();
			this.bounds.height = 60;
			this.bounds.width += 40;
			
			this.string.x = 60;
			this.metrics = this.string.getMetrics();
			this.correct = options.correct;
			// this.mask = new createjs.Shape();
			this.mask.push( new createjs.Shape() );

			this.blueMask = new createjs.Shape();
			this.blueMask.graphics = new createjs.Graphics().beginFill("#000000").drawRect(-10,-10,80,60);
			this.blueMask.x = -60;

			this.checkBlue = new createjs.Sprite(ig.loader.getSpriteSheet('book-quiz-ui'), 'check_blue');
			this.checkBlue.x = 10;
			this.checkBlue.y = -5;
			this.checkBlue.mask = this.blueMask;
			this.con.addChild( this.checkBlue );

			var y = 0;

			if ( this.metrics.lines.length > 1 )
				y += 12;

			if ( this.metrics.lines.length > 2 )
				y += 4;

			this.string.y -= y * this.string.scaleY;

			if(options.correct === true){
				
				/// make mask for correct
				this.mask[0].graphics = new createjs.Graphics().beginFill("#000000").drawRect(-10,-10,320,500);
				this.mask[0].x = -320;
				/// add check mark images
				this.checkRed = new createjs.Sprite(ig.loader.getSpriteSheet('book-quiz-ui'), 'check_red');
				this.checkRed.x = 10;
				this.checkRed.y = -5;
				this.checkRed.mask = this.mask[0];
				this.con.addChild( this.checkRed );
				// this.checkBlue.visible = false;
			} else {
				/// make mask for incorrect
				
				/// add linethrough images
				this.linesThrough = [];
				for(var i = 0; i < this.metrics.lines.length; i++) {
					if(i !== 0){
						this.mask.push( new createjs.Shape() );
					}
					this.mask[i].graphics = new createjs.Graphics().beginFill("#000000").drawRect(-10,-10,320,50);
					this.mask[i].x = -320;
					this.mask[i].y = i * 30 - y;
					this.linesThrough.push( new createjs.Sprite(ig.loader.getSpriteSheet('book-quiz-ui'), 'line_through') );
					this.linesThrough[i].x = 55;
					this.linesThrough[i].y = (30 * i) + 20 - y;
					this.linesThrough[i].regX = 250 * i;
					this.linesThrough[i].mask = this.mask[i];
					if(i !== 0)
						this.linesThrough[i].scaleX = -1;
					this.con.addChild( this.linesThrough[i] );
				}
			}
		},

		// boundsCheck: function( point, isClick ){
		// 	/// this function does not take rotation in to consideration
		// 	var localPoint = this.con.globalToLocal( point.x, point.y );
		// 	if(localPoint.x > 0 && localPoint.x < this.bounds.width && localPoint.y > 0 && localPoint.y < this.bounds.height){
		// 		if( isClick ) {
		// 			ig.sound.playSound('sfxClick');
		// 			this.onClick();
		// 		} else {
		// 			this.onMouseOver();
		// 		}
		// 	} else {
		// 		this.mouseOut();
		// 	}
		// },

		onClick: function(){
			
			if(this.correct === true){
				ig.scene.currentActivity.score++;
				if(this.last && this.last === true){
					ig.scene.currentActivity.setUpLastPage();
				}
				this.animateCorrect();
			} else {
				if(this.last && this.last === true){
					ig.scene.currentActivity.setUpLastPage();
				}
				this.buttons = ig.scene.currentActivity.pages[ig.scene.currentActivity.currentPage].buttonMana.buttons;
				this.animateIncorrect();
			}
		},
		animateCorrect: function(){
			ig.sound.playSound('sfxPencil1');
			ig.scene.flipping = true;
			this.checkRed.visible = false;
			createjs.Tween.get(this.blueMask).to({x: 0}, 250).call(ig.scene.currentActivity.turnPage, [], ig.scene.currentActivity);
		},
		animateIncorrect: function(){
			ig.scene.flipping = true;
			createjs.Tween.get(this.blueMask).to({x: 0}, 250);//.call(ig.scene.currentActivity.turnPage, [], ig.scene.currentActivity);
			createjs.Tween.get(this.checkBlue).wait(300).to({alpha: 0}, 600);//.wait(1500).call(ig.scene.currentActivity.turnPage, [], ig.scene.currentActivity);
			var masks = [];
			for(var i = 0; i < this.buttons.length; i++){
				for(var o = 0; o < this.buttons[i].mask.length; o++){
					masks.push(this.buttons[i].mask[o]);
				}
			}
			// var soundId = [1,2,3,1,2,3,1,2,3];
			// ig.Book.shuffleArray(soundId);
			for(var i = 0; i < masks.length; i++){
				if(i !== masks.length - 1){
					createjs.Tween.get(masks[i]).wait((i+1) * 300).to({x: 0}, 250);
					// createjs.Tween.get(this).wait((i + 1) * 300).call(function(f){ ig.sound.playSound('sfxPencil' + soundId[f]);}, [i], this);
				} else {
					createjs.Tween.get(masks[i]).wait((i+1) * 300).to({x: 0}, 250).wait(400).call(ig.scene.currentActivity.turnPage, [], ig.scene.currentActivity);
					// createjs.Tween.get(this).wait((i + 1) * 300).call(function(f){ ig.sound.playSound('sfxPencil' + soundId[f]);}, [i], this);
				}

				createjs.Tween.get(this).wait((i + 1) * 300).call(ig.sound.playSound, ['sfxPencil' + Math.rand(1, 3)], ig.sound);
			}
		}
	});
});
