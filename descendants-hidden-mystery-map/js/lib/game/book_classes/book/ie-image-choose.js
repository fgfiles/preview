ig.module(
	'lib.game.book_classes.book.ie-image-choose'
).requires(
	'lib.game.book_classes.utils.button'
).defines(function(){ 'use strict';

	ig.Book.charImageChoose = ig.Class.extend({

		mainCon: null,
		con: null,
		buttonMana: null,

		distanceFromMiddle: 0,

		active: false,

		mal: null,
		jay: null,
		carlos: null,
		evie: null,

		ben: null,
		lonnie: null,
		doug: null,
		jane: null,

		image: null,
		image2: null,


		init: function( mainCon ) {
			this.mainCon = mainCon;
			this.con = new createjs.Container();
			this.con.alpha = 0;
			this.mainCon.addChild(this.con);
			/// this.mainCon.addChild(this.con);
			/// create transparent bg black image
			this.blkBg = new createjs.Shape();
			this.blkBg.graphics.beginFill('#000000');
			
			this.bgRect = this.blkBg.graphics.drawRect(0,0,ig.system.fixedWidth, ig.system.fixedHeight).command;
			this.blkBg.regX = ig.system.fixedWidth/2;
			this.blkBg.regY = ig.system.fixedHeight/2;
			this.blkBg.alpha = 0;
			this.con.addChild(this.blkBg);

			this.buttonMana = new ig.Book.ButtonManager();

			//// ISLE

			this.mal = new ig.Book.Button(new createjs.Sprite(ig.loader.getSpriteSheet('book-front-page'), 'mal'));
			this.mal.con.x = -this.distanceFromMiddle;
			this.mal.con.y = -this.distanceFromMiddle;
			this.mal.onClick = function(){
				var currentActivity = ig.scene.currentActivity;
				var currentPage = currentActivity.currentPage;
				
				var image = new createjs.Sprite( ig.loader.getSpriteSheet('book-front-page'), 'mal-head');
				this.addImage( image , currentActivity.pages[currentPage], currentActivity.pages[currentPage + 1] );
			}.bind(this);

			this.jay = new ig.Book.Button(new createjs.Sprite(ig.loader.getSpriteSheet('book-front-page'), 'jay'));
			this.jay.con.x = this.distanceFromMiddle;
			this.jay.con.y = -this.distanceFromMiddle;
			this.jay.onClick = function(){
				var currentActivity = ig.scene.currentActivity;
				var currentPage = currentActivity.currentPage;
				
				var image = new createjs.Sprite( ig.loader.getSpriteSheet('book-front-page'), 'jay-head');
				this.addImage( image , currentActivity.pages[currentPage], currentActivity.pages[currentPage + 1] );
			}.bind(this);

			this.carlos = new ig.Book.Button(new createjs.Sprite(ig.loader.getSpriteSheet('book-front-page'), 'carlos'));
			this.carlos.con.x = -this.distanceFromMiddle;
			this.carlos.con.y = this.distanceFromMiddle;
			this.carlos.onClick = function(){
				var currentActivity = ig.scene.currentActivity;
				var currentPage = currentActivity.currentPage;
				
				var image = new createjs.Sprite( ig.loader.getSpriteSheet('book-front-page'), 'carlos-head');
				this.addImage( image , currentActivity.pages[currentPage], currentActivity.pages[currentPage + 1] );
			}.bind(this);

			this.evie = new ig.Book.Button(new createjs.Sprite(ig.loader.getSpriteSheet('book-front-page'), 'evie'));
			this.evie.con.x = this.distanceFromMiddle;
			this.evie.con.y = this.distanceFromMiddle;
			this.evie.onClick = function(){
				var currentActivity = ig.scene.currentActivity;
				var currentPage = currentActivity.currentPage;
				
				var image = new createjs.Sprite( ig.loader.getSpriteSheet('book-front-page'), 'evie-head');
				this.addImage( image , currentActivity.pages[currentPage], currentActivity.pages[currentPage + 1] );
			}.bind(this);

			//// AURADON

			this.ben = new ig.Book.Button(new createjs.Sprite(ig.loader.getSpriteSheet('book-front-page'), 'ben'));
			this.ben.con.x = -this.distanceFromMiddle;
			this.ben.con.y = -this.distanceFromMiddle;
			this.ben.onClick = function(){
				var currentActivity = ig.scene.currentActivity;
				var currentPage = currentActivity.currentPage;
				
				var image = new createjs.Sprite( ig.loader.getSpriteSheet('book-front-page'), 'ben-head');
				this.addImage( image , currentActivity.pages[currentPage], currentActivity.pages[currentPage + 1] );
			}.bind(this);

			this.jane = new ig.Book.Button(new createjs.Sprite(ig.loader.getSpriteSheet('book-front-page'), 'jane'));
			this.jane.con.x = this.distanceFromMiddle;
			this.jane.con.y = -this.distanceFromMiddle;
			this.jane.onClick = function(){
				var currentActivity = ig.scene.currentActivity;
				var currentPage = currentActivity.currentPage;
				
				var image = new createjs.Sprite( ig.loader.getSpriteSheet('book-front-page'), 'jane-head');
				this.addImage( image , currentActivity.pages[currentPage], currentActivity.pages[currentPage + 1] );
			}.bind(this);

			this.doug = new ig.Book.Button(new createjs.Sprite(ig.loader.getSpriteSheet('book-front-page'), 'doug'));
			this.doug.con.x = -this.distanceFromMiddle;
			this.doug.con.y = this.distanceFromMiddle;
			this.doug.onClick = function(){
				var currentActivity = ig.scene.currentActivity;
				var currentPage = currentActivity.currentPage;
				
				var image = new createjs.Sprite( ig.loader.getSpriteSheet('book-front-page'), 'doug-head');
				this.addImage( image , currentActivity.pages[currentPage], currentActivity.pages[currentPage + 1] );
			}.bind(this);

			this.lonnie = new ig.Book.Button(new createjs.Sprite(ig.loader.getSpriteSheet('book-front-page'), 'lonnie'));
			this.lonnie.con.x = this.distanceFromMiddle;
			this.lonnie.con.y = this.distanceFromMiddle;
			this.lonnie.onClick = function(){
				var currentActivity = ig.scene.currentActivity;
				var currentPage = currentActivity.currentPage;
				
				var image = new createjs.Sprite( ig.loader.getSpriteSheet('book-front-page'), 'lonnie-head');
				this.addImage( image , currentActivity.pages[currentPage], currentActivity.pages[currentPage + 1] );
			}.bind(this);

		},

		update: function() {
			this.buttonMana.update();
			this.updateButtonPos();
			if(ig.input.pressed(ig.KEY.MOUSE1)){
				this.animateOut();
			}
		},

		selectIsle: function(){
			this.addButton(this.mal);
			this.addButton(this.jay);
			this.addButton(this.carlos);
			this.addButton(this.evie);
			this.removeButton(this.ben);
			this.removeButton(this.jane);
			this.removeButton(this.doug);
			this.removeButton(this.lonnie);
			this.nationality = 'isle-bg';
		},
		selectAuradon: function(){
			this.addButton(this.ben);
			this.addButton(this.jane);
			this.addButton(this.doug);
			this.addButton(this.lonnie);
			this.removeButton(this.mal);
			this.removeButton(this.jay);
			this.removeButton(this.carlos);
			this.removeButton(this.evie);
			this.nationality = 'auradon-bg';
		},

		addButton: function( button ){
			if(this.buttonMana === null){
				this.buttonMana = new ig.Book.ButtonManager();
			}
			this.buttonMana.addButton( button );
			this.con.addChild(button.con);
		},
		removeButton: function( button ){
			this.buttonMana.removeButton( button );
			this.con.removeChild(button.con);
		},

		updateButtonPos: function(){
			this.mal.con.x = -this.distanceFromMiddle;
			this.mal.con.y = -this.distanceFromMiddle;
			this.jay.con.x = this.distanceFromMiddle;
			this.jay.con.y = -this.distanceFromMiddle;
			this.evie.con.x = -this.distanceFromMiddle;
			this.evie.con.y = this.distanceFromMiddle;
			this.carlos.con.x = this.distanceFromMiddle;
			this.carlos.con.y = this.distanceFromMiddle;

			this.ben.con.x = -this.distanceFromMiddle;
			this.ben.con.y = -this.distanceFromMiddle;
			this.jane.con.x = this.distanceFromMiddle;
			this.jane.con.y = -this.distanceFromMiddle;
			this.doug.con.x = -this.distanceFromMiddle;
			this.doug.con.y = this.distanceFromMiddle;
			this.lonnie.con.x = this.distanceFromMiddle;
			this.lonnie.con.y = this.distanceFromMiddle;
		},

		animateIn: function(){
			this.active = true;
			ig.scene.currentActivity.active = false;
			createjs.Tween.get(this.blkBg).to({alpha: 0.7}, 500, createjs.Ease.cubicInOut);
			createjs.Tween.get(this.con).to({alpha: 1}, 200, createjs.Ease.cubicInOut);
			createjs.Tween.get(this).to({distanceFromMiddle: 120}, 500, createjs.Ease.backOut);
		},

		animateOut: function(){
			// this.active = false;
			createjs.Tween.get(this.blkBg).to({alpha:0}, 500, createjs.Ease.cubicOut);
			createjs.Tween.get(this.con).to({alpha: 0}, 600, createjs.Ease.cubicInOut);
			createjs.Tween.get(this).to({distanceFromMiddle: 0}, 500, createjs.Ease.backIn).call(this.reactivateActivity);
		},

		reactivateActivity: function(){
			this.active = false;
			ig.scene.currentActivity.active = true;
		},

		addImage: function(image, page1, page2){

			if(this.image !== null){
				page1.con.removeChild(this.image);
				page2.con.removeChild(this.image2);
			}
			this.image = image;
			this.image2 = image.clone();
			var bounds;

			if(page1){
				var leftImage = this.image;
				bounds = leftImage.getBounds();
				leftImage.regX = bounds.width/2;
				leftImage.regY = bounds.height/2;
				if(this.nationality === 'auradon-bg'){
					leftImage.x = 211;
					leftImage.y = 301;
					
					leftImage.scaleX = 1;
					leftImage.scaleY = 1;

				} else {
					leftImage.x = 210;
					leftImage.y = 317;
					
					leftImage.scaleX = 1;
					leftImage.scaleY = 1;
				}
				page1.con.addChild(leftImage);
			}

			if(page2){
				var rightImage = this.image2;
				bounds = rightImage.getBounds();
				rightImage.regX = bounds.width/2;
				rightImage.regY = bounds.height/2;
				if(this.nationality === 'auradon-bg'){
					rightImage.x = 128;
					rightImage.y = 542;
					
					rightImage.scaleX = 0.77;
					rightImage.scaleY = 0.77;
				} else {
					rightImage.x = 114;
					rightImage.y = 523;
					
					rightImage.scaleX = 0.77;
					rightImage.scaleY = 0.77;
				}
				page2.con.addChild(rightImage);
			}

			ig.scene.currentActivity.imageForward.active = true;
			ig.scene.currentActivity.imageForward.con.alpha = 1;
			ig.game.temp.passportImage = this.image;
		},

	});
});