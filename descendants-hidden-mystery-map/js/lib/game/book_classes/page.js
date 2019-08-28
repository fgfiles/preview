ig.module(
	'lib.game.book_classes.page'
).defines(function(){ 'use strict';

	ig.Book.Page = ig.Class.extend({

		con: null,
		buttonMana: null,
		firstUpdate: true,
		fadeIn: false,
		fadeAwayPage: null,
		addedElements: null,

		init: function(){
			this.con = new createjs.Container();
			this.con.visible = false;

			// this.buttonMana = new ig.Book.ButtonManager();
			// this.fadeInForeground = new createjs.Bitmap( new );
			// this.con.addChild(this.fadeInForeground);
		},
		update: function(){
			if(this.fadeIn === true && this.firstUpdate === true){
				this.fadeAwayPage.fadeIn();
				this.firstUpdate = false;
			}
			if(this.buttonMana){
				this.buttonMana.update();
			}
		},
		updateFade: function(){
			if(this.fadeAwayPage !== null){
				this.fadeAwayPage.update();
			}
			for(var i = 0; i < this.addedElements; i++){
				this.addedElements.update();
			}
		},
		addButton: function( button ){
			if(this.buttonMana === null){
				this.buttonMana = new ig.Book.ButtonManager();
			}
			this.buttonMana.addButton( button );
			this.con.addChild(button.con);
		}
	});

	ig.Book.middlePage = ig.Class.extend({

		con: null,
		parent: null,
		lp: null,
		rp: null,
		lBounds: null,
		rBounds: null,
		pageContentR: null,
		pageContentL: null,

		init: function( mainCon ) {

			this.con = new createjs.Container();
			this.con.x = 503;
			this.con.y = -5;
			this.con.visible = false;
			// ig.game.mainCon.addChild(this.con);
			mainCon.addChild(this.con);
			this.lp = new createjs.Sprite( ig.loader.getSpriteSheet('book-page'), 'top_pages_left');
			this.rp = new createjs.Sprite( ig.loader.getSpriteSheet('book-page'), 'top_pages_right');
			this.lp.visible = false;
			this.rp.visible = false;
			this.con.addChild(this.lp);
			this.con.addChild(this.rp);
			this.lBounds = this.lp.getBounds();
			this.rBounds = this.rp.getBounds();
			this.lp.regX = this.lBounds.width;
			this.con.tickEnabled = false;

		},

		flipForward: function( page1, page2, callback ){
			ig.sound.playSound('sfxPageTurn');
			this.con.tickEnabled = true;
			this.pageContentR = page1;
			this.pageContentL = page2;
			this.con.visible = true;
			this.setUpRight();
			createjs.Tween.get(this.con).to({scaleX: 0}, 400, createjs.Ease.cubicIn).call(this.setUpLeft, null, this).to({scaleX: 1}, 400, createjs.Ease.cubicOut).call(this.endFlip, null, this).call(callback);

		},

		flipBackward: function( page1, page2, callback ){
			ig.sound.playSound('sfxPageTurn');
			this.con.tickEnabled = true;
			this.pageContentR = page1;
			this.pageContentL = page2;
			this.con.visible = true;
			this.setUpLeft();
			createjs.Tween.get(this.con).to({scaleX: 0}, 400, createjs.Ease.cubicIn).call(this.setUpRight, null, this).to({scaleX: 1}, 400, createjs.Ease.cubicOut).call(this.endFlip, null, this).call(callback);

			// this.con.visible = true;
			// this.lp.visible = true;
			// this.rp.visible = false;
		},

		endFlip: function(){
			this.con.visible = false;
			this.con.tickEnabled = false;
		},

		setUpRight: function(){
			this.rp.visible = true;
			this.lp.visible = false;
			this.con.addChild(this.pageContentR.con);
			this.pageContentL.con.visible = false;
			this.pageContentR.con.visible = true;

			// this.con.regX = 0;
		},
		setUpLeft: function(){

			this.rp.visible = false;
			this.lp.visible = true;
			this.con.addChild(this.pageContentL.con);
			this.pageContentL.con.visible = true;
			this.pageContentR.con.visible = false;
			// this.con.regX = this.lBounds.width;
		},

		gameSetUp: function(){

		},
		
		update: function() {

		},
		
		draw: function() {

		},
	});

	ig.Book.fadeAwayObject = ig.Class.extend({

		bitmap: null,
		canvas: null,
		ctx: null,
		spriteSheet: null,
		leftPageRect: null,
		rightPageRect: null,

		count: 25,
		radiusMin: 10,
		radiusMax: 20,
		markerSize: 150,

		init: function( con ){

			this.spriteSheet = ig.loader.getSpriteSheet('book-page');
			this.leftPageRect = this.spriteSheet._frames[0].rect;
			this.rightPageRect = this.spriteSheet._frames[1].rect;
			

			this.canvas = document.createElement('canvas');
			this.canvas.width = this.leftPageRect.width;
			this.canvas.height = this.leftPageRect.height;
			this.ctx = this.canvas.getContext('2d');

			this.bitmap = new createjs.Bitmap(this.canvas);
			this.bitmap.regY = 30;

			con.addChild( this.bitmap );
		},

		drawPage: function( side, sprite ){
			this.bitmap.alpha = 1;
			if( side === 'left'){
				this.ctx.drawImage(this.spriteSheet._images[0], this.leftPageRect.x, this.leftPageRect.y, this.leftPageRect.width, this.leftPageRect.height, 0, 0, this.leftPageRect.width, this.leftPageRect.height);
			} else {
				this.ctx.drawImage(this.spriteSheet._images[0], this.rightPageRect.x, this.rightPageRect.y, this.rightPageRect.width, this.rightPageRect.height, 0, 0, this.rightPageRect.width, this.rightPageRect.height);
			}

			if(sprite){
				this.ctx.drawImage(sprite.spriteSheet._images[0], sprite._rectangle.x, sprite._rectangle.y, sprite._rectangle.width, sprite._rectangle.height, sprite.x, sprite.y, sprite._rectangle.width, sprite._rectangle.height);				
			}
		},

		fadeIn: function( ){
			
			this.count = 25;
			this.radiusMin = 10;
			this.radiusMax = 20;
			this.markerSize = 30;

			createjs.Tween.get(this).to({ 
					count : 100, 
					radiusMin : this.canvas.height * 0.8, 
					radiusMax : this.canvas.height * 1.1,
					markerSize : 200
				}, 2200);

			// this is needed
			createjs.Tween.get(this.bitmap).wait(800).to({ alpha : 0 }, 200);

		},

		update: function(){

			this.ctx.save();
			this.ctx.translate(this.canvas.width * 0.5, this.canvas.height * 0.5);
			this.ctx.globalCompositeOperation = 'destination-out';

			this.ctx.globalAlpha = 0.1;

			for ( var i = 0, pi2 = 2 * Math.PI, r, a; i < this.count; i++ ) {
				r = Math.rand(this.radiusMin, this.radiusMax);
				a = Math.rand(0, 360);

				this.ctx.beginPath();
				this.ctx.arc(r * Math.cos(a), r * Math.sin(a) * (this.canvas.height / this.canvas.width), this.markerSize, 0, pi2, false);
				this.ctx.fill();
			}

			this.ctx.restore();
		}

	});



	ig.Book.fadeAwayBitmap = ig.Class.extend({

		bitmap: null,
		canvas: null,
		ctx: null,
		spriteSheet: null,
		leftPageRect: null,
		rightPageRect: null,
		active: false,

		count: 25,
		radiusMin: 10,
		radiusMax: 20,
		markerSize: 150,

		init: function( con ){

			this.spriteSheet = ig.loader.getSpriteSheet('book-page');
			this.leftPageRect = this.spriteSheet._frames[0].rect;
			this.rightPageRect = this.spriteSheet._frames[1].rect;
			

			this.canvas = document.createElement('canvas');
			this.canvas.width = this.leftPageRect.width;
			this.canvas.height = this.leftPageRect.height;
			this.ctx = this.canvas.getContext('2d');

			this.bitmap = new createjs.Bitmap(this.canvas);
			this.bitmap.regY = 22;

			con.addChild( this.bitmap );
		},

		drawPage: function( side, con, x, y ){

			this.bitmap.alpha = 1;
			if( side === 'left'){
				this.ctx.drawImage(this.spriteSheet._images[0], this.leftPageRect.x, this.leftPageRect.y, this.leftPageRect.width, this.leftPageRect.height, 0, -8, this.leftPageRect.width, this.leftPageRect.height);
			} else {
				this.ctx.drawImage(this.spriteSheet._images[0], this.rightPageRect.x, this.rightPageRect.y, this.rightPageRect.width, this.rightPageRect.height, 0, -8, this.rightPageRect.width, this.rightPageRect.height);
			}

			if(con){
				this.ctx.save();
				if(x !== null && y !== null){
					this.ctx.translate(x, y);
				}
				con.draw(this.ctx);
				this.ctx.restore();
			}
		},

		fadeIn: function( ){

			this.active = true;
			
			this.count = 50;
			this.radiusMin = 0;
			this.radiusMax = 10;
			this.markerSize = 30;

			createjs.Tween.get(this).to({ 
					count : 100, 
					radiusMin : this.canvas.height * 0.8,
					radiusMax : this.canvas.height * 0.9,
					markerSize : 100
				}, 800).call(function(){this.active = false;}, null, this);

			// this is needed
			createjs.Tween.get(this.bitmap).wait(300).to({ alpha : 0 }, 300);

		},

		update: function(){

			if ( this.active ) {
				this.ctx.save();
				this.ctx.translate(this.canvas.width * 0.5, this.canvas.height * 0.5);
				this.ctx.globalCompositeOperation = 'destination-out';

				this.ctx.globalAlpha = 0.1;

				for ( var i = 0, pi2 = 2 * Math.PI, r, a; i < this.count; i++ ) {
					r = Math.rand(this.radiusMin, this.radiusMax);
					a = Math.rand(0, 360);

					this.ctx.beginPath();
					this.ctx.arc(r * Math.cos(a), r * Math.sin(a) * (this.canvas.height / this.canvas.width), this.markerSize, 0, pi2, false);
					this.ctx.fill();
				}

				this.ctx.restore();
			}
		}

	});

});
