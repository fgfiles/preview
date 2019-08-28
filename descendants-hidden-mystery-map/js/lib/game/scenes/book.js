ig.module(
	'lib.game.scenes.book'
)
.requires(
	'lib.game.scenes.base',
	'lib.game.entities.book.misc',
	'lib.game.book_classes.displayobjects.tab-manager',
	'lib.game.book_classes.page',
	'lib.game.book_classes.book.activity',
	'lib.game.book_classes.book.in-game-loader',
	'lib.game.book_classes.utils.string',
	'lib.game.book_classes.utils.general',
	'lib.game.book_classes.book.ie-image-choose'
)
.defines(function() {
	ig.Scene.Book = ig.Scene.Base.extend({

		currentActivity: null,
		mainMenu: null,
		quiz: null,
		museum: null,
		passport: null,

		bookBg: null,

		leftPage: null,
		rightPage: null,
		middlePage: null,

		tabMana: null,

		bookSpriteSheet: null,
		topPages: null,

		buttonMana: null,

		loader: null,

		flipping: false,

		fadeAwayPage: null,

		ieCharChoose: null,

		ie: false,

		items: [],

		init : function() {

			ig.scene.currentStateId = ig.scene.stateId.game;
			/// Set up main container & main container initial state
			this.mainCon = new createjs.Container();
			this.mainEntity = this.spawnEntity( ig.Entity, 0, 0);
			this.mainEntity.disObj = new createjs.Container();
			ig.game.stages[0].addChild(this.mainEntity.disObj);
			this.mainEntity.disObj.addChild( this.mainCon );

			this.mainCon.x = ig.system.width;
			this.mainCon.y = ig.system.height * 2.3;
			this.mainCon.rotation = -200;
			this.mainCon.scaleX = 1.1;
			this.mainCon.scaleY = 1.1;

			this.bookBg = new createjs.Sprite( ig.loader.getSpriteSheet('book-bg'), 'book');
			this.mainCon.addChild(this.bookBg);

			var mBound = this.mainCon.getBounds();
			this.mainCon.regX = mBound.width/2;
			this.mainCon.regY = mBound.height/2;

			this.tabMana = new ig.Book.TabManager( ig.loader.getSpriteSheet('book-bg'), this.mainCon );

			this.slideBookIn(ig.game.temp.previousScene == 'photo' ? 0 : 800);

			/// set up button manager (manages button updates)
			this.buttonMana = new ig.Book.ButtonManager();
			this.buttonMana.addButton(this.tabMana.rMenu);
			this.buttonMana.addButton(this.tabMana.rQuiz);
			this.buttonMana.addButton(this.tabMana.rMuseum);
			this.buttonMana.addButton(this.tabMana.rPassport);
			this.buttonMana.addButton(this.tabMana.rMap);

			/// set up 'found objects' array, if it's not found
			if(!ig.game.temp.items){
				ig.game.temp.items = [];
				for(var i = 0; i < ig.config.book.museum_items.length; i++){
					ig.game.temp.items.push( false );
				}
			}
			// ig.storage.set('itemfound-wand', false);
			// ig.storage.set('itemfound-wheel', true);
			// ig.storage.set('itemfound-rose', true);
			// ig.storage.set('itemfound-sword', true);
			// ig.storage.set('itemfound-basket', true);
			ig.game.temp.items[0] = ig.storage.get('itemfound-wand') ? true : false;
			ig.game.temp.items[1] = ig.storage.get('itemfound-wheel') ? true : false;
			ig.game.temp.items[3] = ig.storage.get('itemfound-rose') ? true : false;
			ig.game.temp.items[6] = ig.storage.get('itemfound-sword') ? true : false;
			ig.game.temp.items[8] = ig.storage.get('itemfound-basket') ? true : false;

			ig.game.temp.items[2] = true;
			ig.game.temp.items[4] = true;
			ig.game.temp.items[5] = true;
			ig.game.temp.items[7] = true;
			ig.game.temp.items[9] = true;


			this.ie = ig.Book.isIE9();
			// this.ie = true;

			/// set up middle page
			this.middlePage = new ig.Book.middlePage( this.mainCon );
			
			/// set up main pages for activities
			this.mainMenu = new ig.Book.MainMenu( this.mainCon );
			this.quiz = new ig.Book.Quiz( this.mainCon );
			this.museum = new ig.Book.Museum( this.mainCon );
			this.passport = new ig.Book.Passport( this.mainCon );

			this.currentActivity = this.mainMenu;
			if(ig.game.temp.previousScene == 'photo'){
				ig.game.temp.previousScene = '';
				this.currentActivity.setInvisible();
				this.currentActivity = this.passport;
				this.currentActivity.currentPage = 4;
				// add/set up pages pages
				this.currentActivity.setUpPassport(false);
				this.currentActivity.uploadImage();

				this.currentActivity.con.visible = true;
				this.currentActivity.setVisible();
				this.tabMana.changeSection(3);
			}
			else
			{
				ig.sound.playMusic('musicBook');
			}

			// this.fadeAwayPage = new ig.Book.fadeAwayObject( this.mainCon );
			this.mainCon.addChild(this.middlePage.con);

			this.loader = new ig.Book.inGameLoader( this.mainEntity.disObj );
			this.upLoader = new ig.Book.uploadLoader( this.mainEntity.disObj );

			if( this.ie ){
				this.ieCharChoose = new ig.Book.charImageChoose(this.mainEntity.disObj);
			}

			this.clickHandler = this.clickEvent.bind(this);
			ig.game.stages[0].canvas.addEventListener('mousedown', this.clickHandler);
		},

		buttons: [],
		clickEvent: function( event ){

			var scale = ig.system.height/window.innerHeight;
			var point = {x: event.pageX * scale, y: event.pageY * scale};

			for(var i = 0; i < this.buttons.length; i++){
				if(this.buttons[i].active === true && this.buttons[i].iBoundsCheck(point) === true){

					this.buttons[i].onClick();
				}
			}

		},

		slideBookIn: function( delay, callback ){
			createjs.Tween.get(this.mainCon).wait(delay).to({x: -12, y: 0, rotation: 0}, 700, createjs.Ease.cubicOut);
			createjs.Tween.get(this.mainCon).wait(delay).to({scaleX: 1, scaleY: 1}, 800, createjs.Ease.bounceOut).call(function()
			{
				// switch bg after animation
				ig.$('#' + ig.config.gameWrapper).style.backgroundImage = 'url(' + ig.loader.getResult('book-game-bg2').src + ')';

				// get rid of the sprite
				this.mainCon.removeChild(this.bookBg);
				if(callback){
					callback();
				}

			}, null, this);
		},
		slideBookOut: function( callback ){
			// add in sprite
			ig.scene.mainCon.addChildAt(ig.scene.bookBg, 0);
			ig.game.stages[0].update( );
			// switch bg to no book
			ig.$('#' + ig.config.gameWrapper).style.backgroundImage = 'url(' + ig.loader.getResult('book-bg').src + ')';
			

			createjs.Tween.get(ig.scene.mainCon).to({x: ig.system.width, y: ig.system.height, rotation: 90}, 700, createjs.Ease.cubicIn);
			var t = createjs.Tween.get(ig.scene.mainCon).to({scaleX: 1.1, scaleY: 1.1}, 800, createjs.Ease.bounceIn);
			if( callback !== null){
				t.call(callback);	
			}
		},

		switchToActivity: function( activity, callback ){

			// ig.scene.currentActivity.kill();
			ig.sound.playMusic('musicBook');
			this.flipping = true;
			activity.con.visible = true;
			if(activity.index > this.currentActivity.index) {
				activity.pages[1].con.visible = true;
				this.middlePage.flipForward(this.currentActivity.pages[this.currentActivity.currentPage + 1], activity.pages[0], function(){
					this.currentActivity.con.addChild(this.currentActivity.pages[this.currentActivity.currentPage + 1].con);
					activity.con.addChild(activity.pages[0].con);
					this.currentActivity.setInvisible();
					ig.scene.currentActivity.kill();
					this.currentActivity = activity;
					this.currentActivity.currentPage = 0;
					this.currentActivity.setVisible();
					this.flipping = false;
					if(callback){
						callback();
					}
				}.bind(this));
			} else {
				activity.pages[0].con.visible = true;
				this.middlePage.flipBackward(activity.pages[1], this.currentActivity.pages[this.currentActivity.currentPage], function(){
					this.currentActivity.con.addChild(this.currentActivity.pages[this.currentActivity.currentPage].con);
					activity.con.addChild(activity.pages[1].con);
					this.currentActivity.setInvisible();
					ig.scene.currentActivity.kill();
					this.currentActivity = activity;
					this.currentActivity.currentPage = 0;
					this.currentActivity.setVisible();
					this.flipping = false;
					if(callback){
						callback();
					}
				}.bind(this));
			}
		},

		update : function(e)
		{
			if(this.currentStateId !== this.stateId.game){
				return;
			}
			if(this.loader && this.loader.active){
				this.loader.update();
				return;
			}
			if(this.ie && this.ieCharChoose.active){
				this.ieCharChoose.update();
			}
			if(this.upLoader && this.upLoader.active){
				this.upLoader.update();
				return;
			}
			// this.fadeAwayPage.update();
			this.mainEntity.update(e);

			if(this.currentActivity && this.flipping === false){
				this.buttonMana.update();
			}
			this.currentActivity.update();
			this.parent(e);
		},

		dispose : function()
		{
			// ig.game.stages[0].removeChild(this.mainEntity.disObj);
			ig.game.stages[0].canvas.removeEventListener('mousedown', this.clickHandler);
			this.parent();
		}

		// switchState : function(newStateId)
		// {
		// 	var w = ig.system.fixedWidth,
		// 		h = ig.system.fixedHeight,
		// 		w2 = w * 0.5,
		// 		h2 = h * 0.5,
		// 		currentStateId = this.currentStateId;

		// 	this.currentStateId = this.stateId.transit;

		// 	if ( newStateId === this.stateId.title )
		// 	{
		// 		// hello
		// 		// alert('hi title');
		// 	}

		// 	// it switched!
		// 	// this.currentStateId = this.stateId.transit;
		// 	this.parent.apply(this, arguments);
		// }
	})
	
});