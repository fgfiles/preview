ig.module(
	'lib.game.book_classes.book.in-game-loader'
)
.defines(function(){ 'use strict';

	ig.Book.inGameLoader = ig.Class.extend({

		mainCon: null,
		con: null,
		active: false,
		progress: 0,
		isDone: false,
		callback: null,

		init: function( mainCon ) {
			this.mainCon = mainCon;
			this.con = new createjs.Container();
			/// this.mainCon.addChild(this.con);
			/// create transparent bg black image
			this.blkBg = new createjs.Shape();
			this.blkBg.graphics.beginFill('#000000');
			
			this.bgRect = this.blkBg.graphics.drawRect(0,0,ig.system.fixedWidth, ig.system.fixedHeight).command;
			this.blkBg.regX = ig.system.fixedWidth/2;
			this.blkBg.regY = ig.system.fixedHeight/2;
			this.blkBg.alpha = 0;
			this.con.addChild(this.blkBg);

			this.loadBarCon = new createjs.Container();
			this.loadBarCon.scaleX = 0;
			this.loadBarCon.scaleY = 0;
			this.con.addChild(this.loadBarCon);

			this.barBg = new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'in-game-loader');
			var bounds = this.barBg.getBounds();
			this.barBg.regX = bounds.width/2;
			this.barBg.regY = bounds.height/2;
			this.barBg.x = 14;
			this.barBg.y = 9;

			this.bar = new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'in-game-bar');
			bounds = this.bar.getBounds();
			this.bar.regX = bounds.width/2;
			this.bar.regY = bounds.height/2;

			this.loadBarCon.addChild(this.barBg);
			this.loadBarCon.addChild(this.bar);

			this.barMask = new createjs.Shape();
			this.barMask.graphics.beginFill('#0000000').moveTo(-155,-10);
			this.barRectT = this.barMask.graphics.lineTo(-155,-10).command;
			this.barRectM = this.barMask.graphics.lineTo(-155,  0).command;
			this.barRectB = this.barMask.graphics.lineTo(-155, 10).command;
			this.barMask.graphics.lineTo(-155, 10).closePath();
			this.bar.mask = this.barMask;
			/// create shape to mask bar throughout progress
		},

		update: function() {

			this.progress = ig.loader.status.limit(0, 1);

			this.bgRect.w = ig.system.fixedWidth;
			this.bgRect.h = ig.system.fixedHeight;
			
			this.blkBg.regX = ig.system.fixedWidth/2;
			this.blkBg.regY = ig.system.fixedHeight/2;

			this.barRectM.x += (((this.progress * 310) - (this.barRectM.x + 155))/5);
			this.barRectT.x = this.barRectM.x - 10;
			this.barRectB.x = this.barRectM.x - 10;

			// if( this.progress >= 1 && this.isDone === false){
			if( this.barRectM.x >= 154 && this.progress >= 1 && this.isDone === false){
				this.isDone = true;
				this.animateOut();
				// window.setTimeout(this.animateOut.bind(this), 350);
			}

		},

		animateIn: function(){
			createjs.Tween.get(this.blkBg).to({alpha:0.7}, 500, createjs.Ease.cubicInOut);
			createjs.Tween.get(this.loadBarCon).to({scaleX:1, scaleY: 1, alpha: 1}, 500, createjs.Ease.backOut);
		},

		animateOut: function(){
			createjs.Tween.get(this.blkBg).wait(350).to({alpha:0}, 500, createjs.Ease.cubicOut);
			createjs.Tween.get(this.loadBarCon).wait(350).to({scaleX:0, scaleY: 0, alpha: 0}, 500, createjs.Ease.backIn).call(this.end, null, this);
		},
		end: function(){
			this.active = false;
			this.mainCon.removeChild(this.con);

			this.barRectM.x = -155;
			this.barRectT.x = this.barRectM.x - 10;
			this.barRectB.x = this.barRectM.x - 10;

			if(this.callback){
				this.callback();
				this.callback = null; // done with it!
			}
		},

		load: function( resourcePackage, callback ){
			// resourcePackage is just a string identifying the package
			ig.loader.status = 0;
			this.callback = callback;
			this.isDone = false;
			this.progress = 0;
			this.mainCon.addChild(this.con);
			this.animateIn();
			window.setTimeout( function(){ this.active = true; ig.loader.load( resourcePackage );}.bind(this), 500);
		},

	});

	ig.Book.uploadLoader = ig.Book.inGameLoader.extend({

		imageLoader: null,

		load: function( imageLoader, callback ){
			this.imageLoader = imageLoader;
			this.callback = callback;
			this.isDone = false;
			this.progress = 0;
			this.mainCon.addChild(this.con);
			this.animateIn();
			window.setTimeout( function(){ 
				this.active = true; 
			}.bind(this), 500);
		},

		update: function() {
			this.progress = ig.loader.status.limit(0, 1);

			this.bgRect.w = ig.system.fixedWidth;
			this.bgRect.h = ig.system.fixedHeight;
			
			this.blkBg.regX = ig.system.fixedWidth/2;
			this.blkBg.regY = ig.system.fixedHeight/2;

			this.barRectM.x += (((this.progress * 310) - (this.barRectM.x + 155))/5);
			this.barRectT.x = this.barRectM.x - 10;
			this.barRectB.x = this.barRectM.x - 10;
			if( this.progress >= 1 && this.isDone === false){
				this.isDone = true;
				this.animateOut();
				// window.setTimeout(this.animateOut.bind(this), 350);
			}

		},

	});


});
