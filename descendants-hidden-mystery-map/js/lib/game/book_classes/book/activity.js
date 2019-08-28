ig.module(
	'lib.game.book_classes.book.activity'
)
.requires(
	'lib.game.book_classes.page',
	'lib.game.book_classes.utils.string',
	'lib.game.book_classes.utils.general',
	'lib.game.book_classes.book.ie-image-choose'
)
.defines(function(){ 'use strict';

	ig.Book.Activity = ig.Class.extend({

		// pageManager: null,
		pages: [],
		currentPage: 0,
		middlePage: null,
		mainCon: null,
		con: null,
		active: true,
		// buttonManager: null,
		// turningPage: false,

		init: function( con ) {
			
			this.mainCon = con;
			this.con = new createjs.Container();
			this.con.x = 503;
			this.con.y = -5;
			this.mainCon.addChild(this.con);
			// this.middlePage = new ig.Book.middlePage( con );
			this.middlePage = ig.scene.middlePage;
			// this.buttonManager = new ig.Book.buttonManager();

		},

		update: function() {
			if(this.active === false)return;
			if(ig.scene.flipping === false){
				this.pages[this.currentPage].update();
				this.pages[this.currentPage + 1].update();
			}
			this.pages[this.currentPage].updateFade();
			this.pages[this.currentPage + 1].updateFade();
		},

		kill: function(){
			if(this.pages.length > 1){
				for(var i = 2; i < this.pages.length; i++){
					this.con.removeChild(this.pages[i].con);
				}
				this.pages.splice(2, this.pages.length - 2);
			}
		},

		addPage: function( page ){
			this.pages.push(page);
			this.con.addChild(page.con);
			// page.con.tickEnabled = false;
			// page.con.tickChildren = false;
			page.con.y = 30;
			if((this.pages.length - 1) % 2 === 0){ // even
				page.con.regX = 425;
				if(page.fadeIn === true) {
					page.fadeAwayPage = new ig.Book.fadeAwayObject( page.con );
					page.fadeAwayPage.bitmap.regX = 11;
					page.fadeAwayPage.drawPage( 'left' );
				}
			} else { // odd
				if(page.fadeIn === true) {
					page.fadeAwayPage = new ig.Book.fadeAwayObject( page.con );
					page.fadeAwayPage.drawPage( 'right' );
				}
			}
		},

		setVisible: function(){
			for(var i = 0; i < this.pages.length; i += 2){
				if(i === this.currentPage ){
					this.pages[i].con.tickEnabled = true;
					this.pages[i].con.visible = true;
					this.pages[i].con.tickEnabled = true;
					this.pages[i].active = true;
					this.pages[i + 1].con.visible = true;
					this.pages[i + 1].active = true;
				} else  {
					this.pages[i].con.tickEnabled = false;
					this.pages[i].con.visible = false;
					this.pages[i].con.tickEnabled = false;
					this.pages[i].active = false;
					this.pages[i + 1].con.visible = false;
					this.pages[i + 1].active = false;
				}
			}
		},
		setInvisible: function(){
			for(var i = 0; i < this.pages.length; i++){
				this.pages[i].con.tickEnabled = false;
				this.pages[i].con.visible = false;
				this.pages[i].con.tickEnabled = false;
				this.pages[i].active = false;
			}
			if(this.pages.length > 2){
				this.pages.splice(2);
			}
		},
		turnPage: function( callback ){
			ig.scene.flipping = true;
			if(this.pages[this.currentPage + 3]) {
				this.pages[this.currentPage + 3].con.visible = true;
				this.middlePage.flipForward(this.pages[this.currentPage + 1], this.pages[this.currentPage + 2], function(){
					var activity = ig.scene.currentActivity;
					activity.con.addChild(activity.pages[activity.currentPage + 1].con);
					activity.con.addChild(activity.pages[activity.currentPage + 2].con);
					activity.currentPage += 2;
					activity.setVisible();
					ig.scene.flipping = false;
					if( callback ){
						callback();
					}
				});//.bind(this));
			}
		},
		turnPageTo: function( page, callback ){
			ig.scene.flipping = true;
			if(this.pages[page + 1]) {
				this.pages[page + 1].con.visible = true;
				this.middlePage.flipForward(this.pages[this.currentPage + 1], this.pages[page], function(){
					var activity = ig.scene.currentActivity;
					activity.con.addChild(activity.pages[activity.currentPage + 1].con);
					activity.con.addChild(activity.pages[page].con);
					activity.currentPage = page;
					activity.setVisible();
					ig.scene.flipping = false;
					if( callback ){
						callback();
					}
				});//.bind(this));
			}
		},

		turnPageBack: function( callback ){
			ig.scene.flipping = true;
			if(this.pages[this.currentPage - 2]) {
				this.pages[this.currentPage - 2].con.visible = true;
				this.middlePage.flipBackward(this.pages[this.currentPage - 1], this.pages[this.currentPage], function(){
					var activity = ig.scene.currentActivity;
					activity.con.addChild(activity.pages[activity.currentPage - 1].con);
					activity.con.addChild(activity.pages[activity.currentPage - 2].con);
					activity.currentPage -= 2;
					activity.setVisible();
					ig.scene.flipping = false;
					if(activity.currentPage === 0){
						activity.kill();
					}
					if( callback ){
						callback();
					}
				});//.bind(this));
			}
		},

	});

	ig.Book.MainMenu = ig.Book.Activity.extend({

		index: 0,
		items: [],
		init: function( con ){
			this.parent( con );

			// set up page 1
			var page1 = new ig.Book.Page();
			var map = new createjs.Sprite(ig.loader.getSpriteSheet('book-mainMenu'), 'map');
			map.x = 50;
			map.y = 190;
			page1.con.addChild( map );

			this.items.length = 10;
			for(var i = 0; i < this.items.length; i++){
				if(ig.game.temp.items[i] === true) { /// replace with if(object found)
					this.items[i] = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-mainMenu'), 'item_' + (i+1)) );
					ig.scene.items.push(true);
				} else {
					this.items[i] = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-mainMenu'), 'item_stolen') );
					this.items[i].active = false;
					ig.scene.items.push(false);
				}

				this.items[i].num = (i * 2) + 2;

				this.items[i].onClick = function(){
					ig.scene.tabMana.changeSection(2);
					ig.scene.switchToActivity(ig.scene.museum, function(){
						ig.scene.currentActivity.pages[ig.scene.currentActivity.currentPage].update();
						ig.scene.currentActivity.loadMuseum(this.num);
					}.bind(this));
				}.bind(this.items[i]);

								
				this.items[i].con.regY = 60;
				page1.addButton(this.items[i]);
			}

			this.items[0].con.x = 114;
			this.items[0].con.y = 580;
			// this.items[0].onClick = function(){
			// 		ig.scene.tabMana.changeSection(2);
			// 		ig.scene.switchToActivity(ig.scene.museum, function(){
			// 			ig.scene.currentActivity.pages[ig.scene.currentActivity.currentPage].update();
			// 			ig.scene.currentActivity.loadMuseum(0);
			// 		});
			// 	};

			this.items[1].con.x = 65;
			this.items[1].con.y = 442;


			this.items[2].con.x = 167;
			this.items[2].con.y = 442;

			this.items[3].con.x = 65;
			this.items[3].con.y = 256;

			this.items[4].con.x = 167;
			this.items[4].con.y = 256;

			this.items[5].con.x = 299;
			this.items[5].con.y = 580;

			this.items[6].con.x = 246;
			this.items[6].con.y = 442;

			this.items[7].con.x = 347;
			this.items[7].con.y = 442;

			this.items[8].con.x = 246;
			this.items[8].con.y = 256;

			this.items[9].con.x = 347;
			this.items[9].con.y = 256;

			// var title = new createjs.Sprite(ig.loader.getSpriteSheet('book-mainMenu'), 'title_border');
			// title.x = 90;
			// title.y = 80;
			// page1.con.addChild( title );
			
			var title = new ig.Book.TextSprite( new createjs.Sprite(ig.loader.getSpriteSheet('book-mainMenu'), 'title_border'), ig.Book.String( ig.strings.BOOK.MAIN_MENU.TITLE, 'MAIN_MENU_TITLE', { maxWidth: 170 }));
			title.con.x = 200;
			title.con.y = 100;
			page1.con.addChild(title.con);



			// set up page 2
			var page2 = new ig.Book.Page();
			var logo = new createjs.Bitmap(ig.loader.getResult('loc-book-mainMenu-logo'));
			logo.x = 85;
			logo.y = 25;
			page2.con.addChild( logo );
			var quizButton = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-mainMenu'), 'main_menu_button'), {string: ig.Book.String(ig.strings.BOOK.MAIN_MENU.BUTTONS.QUIZ, 'MAIN_MENU_BUTTONS', { maxWidth: 180 })});
			quizButton.onClick = function(){ig.scene.tabMana.changeSection(1); ig.scene.switchToActivity(ig.scene.quiz);};
			quizButton.con.x = 215;
			quizButton.con.y = 370;
			page2.addButton( quizButton );

			var museumButton = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-mainMenu'), 'main_menu_button'), {string: ig.Book.String(ig.strings.BOOK.MAIN_MENU.BUTTONS.MUSEUM, 'MAIN_MENU_BUTTONS', { maxWidth: 180 })});
			museumButton.onClick = function(){ig.scene.tabMana.changeSection(2); ig.scene.switchToActivity(ig.scene.museum);};
			museumButton.con.x = 215;
			museumButton.con.y = 455;
			page2.addButton( museumButton );

			var passportButton = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-mainMenu'), 'main_menu_button'), {string: ig.Book.String(ig.strings.BOOK.MAIN_MENU.BUTTONS.PASSPORT, 'MAIN_MENU_BUTTONS', { maxWidth: 180 })});
			passportButton.onClick = function(){ig.scene.tabMana.changeSection(3); ig.scene.switchToActivity(ig.scene.passport);};
			passportButton.con.x = 215;
			passportButton.con.y = 540;
			page2.addButton( passportButton );

			var mapButton = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-mainMenu'), 'main_menu_button'), {string: ig.Book.String(ig.strings.BOOK.MAIN_MENU.BUTTONS.MAP, 'MAIN_MENU_BUTTONS', { maxWidth: 180 })});
			mapButton.onClick = function(){ 
				ig.game.switchGame(ig.Scene.Map);
			};
			mapButton.con.x = 215;
			mapButton.con.y = 625;

			page2.addButton( mapButton );

			this.addPage(page1);
			this.addPage(page2);

			this.setVisible();
		}

	});


	  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 ////////////////////////////////////////////// QUIZ ACTIVITY ///////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////

	ig.Book.Quiz = ig.Book.Activity.extend({

		index: 1,
		qNum: 10, /// number of questions
		correctAnswers: 0,
		score: 0,

		init: function( con ){

			this.parent( con );

			// set up page 1
			var page1 = new ig.Book.Page();
			
			var title = ig.Book.String( ig.strings.BOOK.TEST.TITLE, 'ACTIVITY_TITLE', {maxHeight: 110});
			title.x = 200;
			title.y = 100;
			page1.con.addChild(title);

			/// START BUTTON
			var startButton = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'button_fat'), {string: ig.Book.String(ig.strings.BOOK.TEST.START_BUTTON, 'BIG_BUTTONS', { maxWidth: 180 })});
			startButton.con.x = 215;
			startButton.con.y = 600;
			// startButton.onClick = this.loadQuiz.bind(this);
			startButton.onClick = this.loadQuiz;
			page1.addButton( startButton );

			var howWell = new createjs.Sprite(ig.loader.getSpriteSheet('book-front-page'), 'quiz_apple');
			howWell.x = 60;
			howWell.y = 175;
			page1.con.addChild( howWell );

			// set up page 2
			var page2 = new ig.Book.Page();
			page2.fadeIn = true;
			var mapImage = new createjs.Sprite(ig.loader.getSpriteSheet('book-front-page'), 'quiz');
			mapImage.x = -5;
			mapImage.y = -20;
			page2.con.addChild( mapImage );


			this.addPage(page1);
			this.addPage(page2);

			this.con.visible = false;
			this.setVisible();
		},

		loadQuiz: function(){
			ig.scene.flipping = true;
			ig.scene.loader.load('book-quiz', function()
			{
				ig.sound.playMusic('musicQuiz');
				ig.scene.currentActivity.setUpQuiz()
			});
		},

		setUpQuiz: function(){

			var quiz = ig.scene.quiz;

			quiz.score = 0;

			if(quiz.pages.length > 1){
				quiz.pages.splice(2, quiz.pages.length - 2);
			}

			// you are creating 30 objects on the fly (not including fakeAnswers array object)
			// and you will only be using 10 of them

			/// SHUFFLE QUESTIONS
			// vaions r quest= [];
			// for(var i = 1; i < 30; i++){
			// 	var question = {question: ig.strings.BOOK.TEST.TEST_QUESTIONS['QUESTION_' + i],
			// 					answer: ig.strings.BOOK.TEST.TEST_QUESTIONS['CORRECT_ANSWER_' + i],
			// 					fakeAnswers: [ig.strings.BOOK.TEST.TEST_QUESTIONS['INCORRECT_ANSWER_' + i + '_1'],
			// 						ig.strings.BOOK.TEST.TEST_QUESTIONS['INCORRECT_ANSWER_' + i + '_2'],
			// 						ig.strings.BOOK.TEST.TEST_QUESTIONS['INCORRECT_ANSWER_' + i + '_3']]};
			// 	questions.push(question);
			// }
			// ig.Book.shuffleArray( questions );

			var questionsAsked = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].shuffle();

			// ig.Book.shuffleArray( ig.strings.BOOK.TEST.TEST_QUESTIONS );
			/// ADD QUESTION PAGES
			for(var i = 0; i < quiz.qNum; i++){

				var page1 = new ig.Book.Page();
				/// QUESTION
				var header = new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'frill_top');
				header.regX = header.getBounds().width;
				header.scaleX = -1;
				header.x = 55;
				header.y = 20;
				page1.con.addChild(header);
				var num = ig.Book.String( ig.strings.USER_INTERFACE['NUMBERS_' + (i + 1)], 'QUIZ_NUMBERS');
				num.x = 60;
				num.y = 80;
				page1.con.addChild(num);
				// ig.strings.BOOK.TEST.TEST_QUESTIONS = ig.Book.shuffleArray( ig.strings.BOOK.TEST.TEST_QUESTIONS );
				// var q = ig.Book.String( questions[i].question, 'QUIZ_QUESTION');
				var q = ig.Book.String( ig.strings.BOOK.TEST.TEST_QUESTIONS['QUESTION_' + questionsAsked[i]], 'QUIZ_QUESTION');
				q.x = 95;
				q.y = 70;
				page1.con.addChild(q);
				var qm = q.getMetrics();
				var footer = new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'frill_bottom');
				footer.regX = header.getBounds().width;
				footer.scaleX = -1;
				footer.x = 55;
				footer.y = 75 + qm.height;
				page1.con.addChild(footer);

				/// ANSWERS
				// var answers = [];
				// answers.push( new ig.Book.quizAnswer( new createjs.Sprite(ig.loader.getSpriteSheet('book-quiz-ui'), 'answer_ring'), {string: ig.Book.String(questions[i].answer, 'QUIZ_ANSWERS'), correct: true}));
				// for(var a = 0; a < 3; a++){
				// 	answers.push( new ig.Book.quizAnswer( new createjs.Sprite(ig.loader.getSpriteSheet('book-quiz-ui'), 'answer_ring'), {string: ig.Book.String(questions[i].fakeAnswers[a], 'QUIZ_ANSWERS'), correct: false}));
				// }

				var answers = [];
				answers.push( new ig.Book.quizAnswer( new createjs.Sprite(ig.loader.getSpriteSheet('book-quiz-ui'), 'answer_ring'), {string: ig.Book.String(ig.strings.BOOK.TEST.TEST_QUESTIONS['CORRECT_ANSWER_' + questionsAsked[i]], 'QUIZ_ANSWERS', { maxHeight : 78 }), correct: true}));
				for(var a = 0; a < 3; a++){
					answers.push( new ig.Book.quizAnswer( new createjs.Sprite(ig.loader.getSpriteSheet('book-quiz-ui'), 'answer_ring'), {string: ig.Book.String(ig.strings.BOOK.TEST.TEST_QUESTIONS['INCORRECT_ANSWER_' + questionsAsked[i] + '_' + (a + 1)], 'QUIZ_ANSWERS', { maxHeight : 78 }), correct: false}));
				}

				// answers = ig.Book.shuffleArray(answers);
				// ig.Book.shuffleArray(answers);
				answers.shuffle();

				answers[0].con.x = answers[1].con.x = answers[2].con.x = answers[3].con.x = 60;
				answers[0].con.y = footer.y + 80;
				answers[1].con.y = answers[0].con.y + 75;
				answers[2].con.y = answers[1].con.y + 75;
				answers[3].con.y = answers[2].con.y + 75;

				page1.addButton( answers[0] );
				page1.addButton( answers[1] );
				page1.addButton( answers[2] );
				page1.addButton( answers[3] );

				/// Is it last?
				if( i === quiz.qNum - 1 ){
					answers[0].last = true;
					answers[1].last = true;
					answers[2].last = true;
					answers[3].last = true;
				}

				/// COUNTER
				var counter = quiz.makeCounter(i + 1);
				counter.x = 18;
				counter.y = 630;
				page1.con.addChild( counter );

				/// PAGE 2 and IMAGE
				var page2 = new ig.Book.Page();
				page2.fadeIn = true;

				var charSpriteSheet = ig.loader.getSpriteSheet('book-quiz1');
				var charImage =  new createjs.Sprite( charSpriteSheet, Math.floor(Math.random() * (charSpriteSheet._animations.length - 1.001)));
				charImage.paused = true;
				charImage.x = 0;
				charImage.y = 0;
				page2.con.addChild( charImage );

				quiz.addPage( page1 );
				quiz.addPage( page2 );
			}
			quiz.turnPage();

		},

		setUpLastPage: function(){
			/// ADD LAST GRADE PAGE
			var page1 = new ig.Book.Page();
			
			// explain this to me...
			// CHALLENGE: do the below 20+ lines of code in 10 or less
			// if(this.score >= 8){
			// 	var title = ig.Book.String( , 'QUIZ_GRADE_TITLE');

			// 	page1.update = function(){
			// 	if(this.firstUpdate === true){
			// 		ig.sound.playSound('sfxQuizGood');
			// 		this.firstUpdate = false;
			// 	}
			// 	if(this.fadeIn === true && this.firstUpdate === true){
			// 		this.fadeAwayPage.fadeIn();
			// 		this.firstUpdate = false;
			// 	}
			// 	if(this.buttonMana){
			// 		this.buttonMana.update();
			// 	}
			// };
			// } else {
				var scoreGood = this.score >= 8;
				var title = ig.Book.String( scoreGood ? ig.strings.BOOK.TEST.RESULT.SUCCESS : ig.strings.BOOK.TEST.RESULT.FAIL, 'QUIZ_GRADE_TITLE');

				page1.update = function(){
					if(this.firstUpdate === true){
						ig.sound.playSound(scoreGood ? 'sfxQuizGood' : 'sfxQuizBad');
						this.firstUpdate = false;
					}
					if(this.fadeIn === true && this.firstUpdate === true){
						this.fadeAwayPage.fadeIn();
						this.firstUpdate = false;
					}
					if(this.buttonMana){
						this.buttonMana.update();
					}
				};
			// };
			// }

			title.x = 200;
			title.y = 100;
			page1.con.addChild(title);
			var gradeBg = new createjs.Sprite( ig.loader.getSpriteSheet('book-quiz-ui'), 'letter_bg');
			var bounds = gradeBg.getBounds();
			gradeBg.regX = bounds.width/2;
			gradeBg.regY = bounds.height/2;
			gradeBg.x = 210;
			gradeBg.y = 350;
			page1.con.addChild(gradeBg);
			
			var gString = ig.strings.BOOK.TEST.RESULT;
			var grade;

			if(gString.G10.text === "A" && gString.G9.text === "A" && gString.G8.text === "B" && gString.G7.text === "C" && gString.G6.text === "D" && 
					gString.G5.text === "F" && gString.G4.text === "F" && gString.G3.text === "F" && gString.G2.text === "F" && 
					gString.G1.text === "F" && gString.G1.text === "F") {

				if(this.score >= 9){
					grade =  new createjs.Sprite( ig.loader.getSpriteSheet('book-quiz-ui'), 'grade-a');
				} else if(this.score === 8){
					grade =  new createjs.Sprite( ig.loader.getSpriteSheet('book-quiz-ui'), 'grade-b');
				} else if(this.score === 7){
					grade =  new createjs.Sprite( ig.loader.getSpriteSheet('book-quiz-ui'), 'grade-c');
				} else if(this.score === 6){
					grade =  new createjs.Sprite( ig.loader.getSpriteSheet('book-quiz-ui'), 'grade-d');
				} else if(this.score <= 5){
					grade =  new createjs.Sprite( ig.loader.getSpriteSheet('book-quiz-ui'), 'grade-f');
				}

				bounds = grade.getBounds();
				grade.regX = bounds.width/2;
				grade.regY = bounds.height/2;
				grade.x = 210;
				grade.y = 350;
				page1.con.addChild(grade);
			} else {
				grade = ig.Book.String( gString['G' + this.score], 'QUIZ_FINAL_GRADE', {maxWidth: 220});
				bounds = grade.getBounds();
				grade.x = 200;
				grade.y = 350;
				page1.con.addChild(grade);

			}			


			

			var score = ig.Book.String( ig.strings.BOOK.TEST.SCORE, 'ACTIVITY_TITLE');
			score.text = score.text.replace("%N", this.score.toString());
			score.text = score.text.replace("%NN", this.qNum.toString());
			score.x = 210;
			score.y = 530;
			page1.con.addChild(score);

			var retry = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'small-button'), {string: ig.Book.String(ig.strings.BOOK.TEST.RETRY_BUTTON, 'SMALL_BUTTONS', { maxWidth: 125 })});
			retry.onClick = function(){ig.scene.tabMana.changeSection(1); ig.scene.switchToActivity(ig.scene.quiz);};
			retry.con.x = 210;
			retry.con.y = 630;
			page1.addButton(retry);

			var page2 = new ig.Book.Page();
			page2.fadeIn = true;

			var charImage =  new createjs.Sprite( ig.loader.getSpriteSheet('book-quiz-ui'), 'fairy-godmother');
			charImage.paused = true;
			charImage.x = 0;
			charImage.y = 0;
			page2.con.addChild( charImage );

			this.addPage(page1);
			this.addPage(page2);
		},



		makeCounter: function( number ){
			var con = new createjs.Container();
			var sprite = new createjs.Sprite( ig.loader.getSpriteSheet('book-quiz-ui'), 'counter-border');
			con.addChild( sprite );
			var sBounds = sprite.getBounds();

			for(var i = 1; i < 11; i++){
				if(i === number){
					sprite = new createjs.Sprite( ig.loader.getSpriteSheet('book-quiz-ui'), 'selected-' + number);
				} else {
					sprite = new createjs.Sprite( ig.loader.getSpriteSheet('book-quiz-ui'), 'unselected-' + i);
				}
				sprite.x = (i * 34) - 10;
				sprite.y = 9;
				con.addChild( sprite );
			}
			con.cache(0,0, sBounds.width, sBounds.height);
			return con;
		}

	});
	  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 ////////////////////////////////////////////  MUSEUM ACTIVITY  /////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	ig.Book.Museum = ig.Book.Activity.extend({

		index: 2,
		numItems: 10,

		init: function( con ){

			this.parent( con );

			// set up page 1
			var page1 = new ig.Book.Page();
			page1.fadeIn = true;
			
			var museumImage = new createjs.Bitmap(ig.loader.getResult('loc-museum'));
			museumImage.x = 0;
			museumImage.y = 0;
			page1.con.addChild( museumImage );

			// set up page 2
			var page2 = new ig.Book.Page();
			
			// TITLE
			var title = ig.Book.String( ig.strings.BOOK.MUSEUM.TITLE, 'ACTIVITY_TITLE', {maxHeight: 220});
			title.x = 200;
			title.y = 110;
			page2.con.addChild(title);
			var subTitle = ig.Book.String( ig.strings.BOOK.MUSEUM.SUB_TITLE, 'ACTIVITY_SUB_TITLE');
			subTitle.lineWidth = null;
			subTitle.maxWidth = 340;
			subTitle.x = 205;
			subTitle.y = 370;
			page2.con.addChild(subTitle);
			var desc = ig.Book.String( ig.strings.BOOK.MUSEUM.DESCRIPTION, 'ACTIVITY_DESCRIPTION', {maxHeight: 260});
			desc.x = 50;
			desc.y = 405;
			page2.con.addChild(desc);

			var frillTop = new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'frill_top');
			frillTop.x = 50;
			frillTop.y = 35;
			page2.con.addChild( frillTop );

			var frillBottom = new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'frill_bottom');
			frillBottom.x = 50;
			frillBottom.y = 310;
			page2.con.addChild( frillBottom );
			
			/// START BUTTON
			var startButton = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'page_forward'));
			startButton.con.x = 215;
			startButton.con.y = 650;
			page2.addButton( startButton );
			startButton.onClick = function(){
				ig.scene.museum.loadMuseum();
				// ig.scene.loader.load('book-museum');
				// ig.loader.load('book-museum');
			}

			/// ADD PAGES
			this.addPage(page1);
			this.addPage(page2);

			this.con.visible = false;
			this.setVisible();

		},

		loadMuseum: function( turnTo ){
			ig.scene.flipping = true;
			ig.scene.loader.load('book-museum', function(){
				ig.sound.playMusic('musicMuseum');
				this.setUpMuseum();
				if(turnTo){
					this.turnPageTo( turnTo );
				}else{
					this.turnPage();
					if(ig.scene.items[0] === false){
						ig.sound.playSound('sfxDrums');
					}
				}
			}.bind(this));
		},

		setUpMuseum: function(){

			for(var i = 0; i < this.numItems; i++){

				var leftPage = new ig.Book.Page();
				/// left page

				var frillTop = new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'museum_title');
				frillTop.x = 30;
				frillTop.y = 35;
				leftPage.con.addChild( frillTop );

				var title = ig.Book.String( ig.strings.BOOK.MUSEUM.ITEMS['TITLE_' + (i + 1)], 'MUSEUM_TITLE_LEFT');
				title.x = 100;
				title.y = 135;
				var tBounds = title.getMetrics();
				title.regY = tBounds.height/2;
				leftPage.con.addChild(title);

				var num = ig.Book.String( { text: i + 1 }, 'MUSEUM_NUMBERS');
				num.x = 55;
				num.y = 122;
				leftPage.con.addChild(num);

				var text = ig.Book.String(ig.strings.BOOK.MUSEUM.ITEMS['DESCRIPTION_' + (i + 1)], 'MUSEUM_DESC', { maxHeight: 375 });
				text.x = 55;
				text.y = 250;
				leftPage.con.addChild(text);

				var backward = new ig.Book.Button( new createjs.Sprite( ig.loader.getSpriteSheet('book-general-ui'), 'page_back' ) );
				backward.con.x = 210;
				backward.con.y = 650;
				leftPage.addButton(backward);
				if(i === 0){
					backward.onClick = function(){ ig.scene.switchToActivity(ig.scene.museum); };
				} else {
					backward.onClick = function(){
						var page = ig.scene.currentActivity.pages[ig.scene.currentActivity.currentPage + 1];
						if(page.animation){
							createjs.Tween.get(page.foreground).to({alpha: 1}, 200);
							page.playButton.updateString( ig.Book.String(ig.strings.BOOK.MUSEUM.PLAY_BUTTON, 'MUSEUM_PLAY' ) );
						}
						if(ig.scene.items[(ig.scene.currentActivity.currentPage/2) - 2] === false){
							ig.sound.playSound('sfxDrums');
						}
						ig.scene.currentActivity.turnPageBack(); 
					}//.bind(this);
				}

				this.addPage(leftPage);

				/// right page
				var rightPage = new ig.Book.Page();

				///// ITEM IS FOUND /////
				if( ig.game.temp.items[i] === true ){
					rightPage.animationName = ig.config.book.museum_items[i];

					var background = new createjs.Sprite( ig.loader.getSpriteSheet('book-anim-backgrounds'), rightPage.animationName );
					background.x = -5;
					background.y = 50;
					background.alpha = 0;
					rightPage.background = background;
					rightPage.con.addChild(background);

					if(!this.spriteSheet){
						var spriteSheet = ig.Book.spriteSheetCombine(ig.loader.getSpriteSheet('book-animations-one'), ig.loader.getSpriteSheet('book-animations-two'));
						spriteSheet = ig.Book.spriteSheetCombine( spriteSheet, ig.loader.getSpriteSheet('book-animations-three'));
						spriteSheet = ig.Book.spriteSheetCombine( spriteSheet, ig.loader.getSpriteSheet('book-animations-four'));
						spriteSheet = ig.Book.spriteSheetCombine( spriteSheet, ig.loader.getSpriteSheet('book-animations-five'));
						this.spriteSheet = spriteSheet;
					}
					
					// var spriteSheet = ig.loader.getSpriteSheet('book-all-animations');
					var animation = new createjs.Sprite( this.spriteSheet, 0);
					animation.x = -5 + 227;
					animation.y = 30 + 272.5;
					animation.alpha = 0;

					rightPage.con.addChild(animation);
					rightPage.animation = animation;

					var foreground = new createjs.Sprite( ig.loader.getSpriteSheet('book-anim-foregrounds'), rightPage.animationName );
					foreground.x = -5;
					foreground.y = 50;
					rightPage.con.addChild(foreground);
					rightPage.foreground = foreground;

					if(rightPage.animationName === 'bow' || rightPage.animationName === 'diamonds' || rightPage.animationName === 'beast' ||
						rightPage.animationName === 'flower' || rightPage.animationName === 'shield' || rightPage.animationName === 'bird') {
						rightPage.animationGood = true;
					} else {
						rightPage.animationGood = false;
					}

					var playButton = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'anim-button'), {string: ig.Book.String(ig.strings.BOOK.MUSEUM.PLAY_BUTTON, 'MUSEUM_PLAY' )});
					playButton.con.x = 218;
					playButton.con.y = 50;
					playButton.onClick = function(){
						var page = ig.scene.currentActivity.pages[ig.scene.currentActivity.currentPage + 1];
						if(page.animation.paused === true &&  page.foreground.alpha === 1){	
							if( page.animationGood === true ){
								ig.sound.playSound('sfxAnimationGood');
							} else {
								ig.sound.playSound('sfxAnimationBad');
							}
							if ( ig.device.iOS ) {
								page.foreground.alpha = 0;
								page.animation.alpha = 1;
								page.background.alpha = 1;
								page.animation.gotoAndPlay(page.animationName);
							} else {
								page.animation.alpha = 1;
								page.background.alpha = 1;
								page.animation.gotoAndStop(page.animationName);
								createjs.Tween.get(page.foreground).to({alpha: 0}, 200).call(page.animation.gotoAndPlay, [page.animationName], page.animation);
								}
						} else if(page.animation.paused === true){

							if( page.animationGood === true ){
								ig.sound.playSound('sfxAnimationGood');
							} else {
								ig.sound.playSound('sfxAnimationBad');
							}
							// setTimeout(function(){
								page.animation.gotoAndPlay(page.animationName);
							// }, 8000);
						}
					};
					playButton.onMouseOver = function(){ig.game.cursorPointer = true;};
					rightPage.addButton(playButton);
					rightPage.playButton = playButton;

				} else { ///// ITEM IS STOLEN /////
					var stolenGraphic = new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'stolen_pedestal');
					stolenGraphic.x = 25;
					stolenGraphic.y = 15;
					rightPage.con.addChild( stolenGraphic );
					var stolenText = ig.Book.String(ig.strings.BOOK.MUSEUM.STOLEN, 'MUSEUM_STOLEN');
					stolenText.x = 210;
					stolenText.y = 250;
					stolenText.rotation = -13;
					rightPage.con.addChild(stolenText);

					var findItText = ig.Book.String(ig.strings.BOOK.MUSEUM.FIND_IT_BUTTON, 'PASSPORT_GOTO', {maxWidth: 150});
					findItText.regY = 25;
					var mapText = ig.Book.String(ig.strings.BOOK.PASSPORT.MAP, 'PASSPORT_MAP', {maxWidth: 150});
					mapText.regY = -12;

					var findIt = new ig.Book.Button(new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'find_on_map'), {strings:[findItText, mapText]});
					findIt.con.x = 210;
					findIt.con.y = 550;
					findIt.onClick = function(){
						// ig.scene.switchState(ig.scene.stateId.otherGame); //jm
						ig.game.switchGame(ig.Scene.Map);
					};
					rightPage.addButton(findIt);
				}

				if(i !== this.numItems - 1){
					var forward = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'page_forward'));
					forward.con.x = 210;
					forward.con.y = 650;
					rightPage.addButton(forward);
					forward.onClick = function(){

						var page = ig.scene.currentActivity.pages[ig.scene.currentActivity.currentPage + 1];
						if(page.animation){
							createjs.Tween.get(page.foreground).to({alpha: 1}, 200);
							page.playButton.updateString( ig.Book.String(ig.strings.BOOK.MUSEUM.PLAY_BUTTON, 'MUSEUM_PLAY' ) );
						}
						if(ig.scene.items[(ig.scene.currentActivity.currentPage/2)] === false){
							ig.sound.playSound('sfxDrums');
						}
						ig.scene.currentActivity.turnPage(); 

					}//.bind(this);
				}

				this.addPage(rightPage);

			}

		}

	});
	
	  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 //////////////////////////////////////////// PASSPORT ACTIVITY /////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	ig.Book.Passport = ig.Book.Activity.extend({

		index: 3,

		nationality: null,
		passportBg: null,
		givenName: ig.Book.String( { text:'' }, 'PASSPORT_NAME'),
		image: null,

		isleOfTheLostPage: null,
		auradonPage: null,

		fadeObjectRight: null,
		fadeObjectLeft: null,

		// imageCrop: null,
		fileLoader: null,
		nameTextBox: null,
		ie: false,

		init: function( con ){
			
			this.parent( con );

			// set up page 1
			var page1 = new ig.Book.Page();
			
			var title = ig.Book.String( ig.strings.BOOK.PASSPORT.TITLE_0, 'ACTIVITY_TITLE', {maxHeight: 120});
			title.x = 200;
			title.y = 100;
			page1.con.addChild(title);

			var desc = ig.Book.String( ig.strings.BOOK.PASSPORT.DESCRIPTION, 'ACTIVITY_DESCRIPTION', {maxHeight: 320});
			desc.x = 50;
			desc.y = 210;
			page1.con.addChild(desc);

			/// START BUTTON
			var startButton = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'button_fat'), {string: ig.Book.String(ig.strings.BOOK.TEST.START_BUTTON, 'BIG_BUTTONS', {maxWidth: 180})});
			startButton.con.x = 215;
			startButton.con.y = 600;
			page1.addButton( startButton );
			startButton.onClick = this.loadPassport.bind(this);

			// set up page 2
			var page2 = new ig.Book.Page();
			page2.fadeIn = true;
			var compasImage = new createjs.Sprite(ig.loader.getSpriteSheet('book-front-page'), 'passport');
			compasImage.x = -5;
			compasImage.y = -20;
			page2.con.addChild( compasImage );

			this.addPage(page1);
			this.addPage(page2);

			this.con.visible = false;
			this.setVisible();

			this.ie = ig.scene.ie;

			// this.imageCrop = new ig.Book.imageCrop( con );

		},

		update: function(e){
			// if(this.imageCrop.active === true){
			// 	this.imageCrop.update();
			// 	return;
			// }
			if(this.fileLoader){
				this.fileLoader.update();
			}
			if(this.nameTextBox && this.nameTextBox.input.style.visibility === 'visible'){
				this.nameTextBox.update();
				this.givenName.text = this.nameTextBox.input.value.toUpperCase();
			}
			this.parent(e);
		},

		kill: function(){
			this.nationality = null;
			this.passportBg = null;
			this.givenName = ig.Book.String( { text:'' }, 'PASSPORT_NAME');
			this.image = null;

			this.isleOfTheLostPage = null;
			this.auradonPage = null;

			this.fadeObjectRight = null;
			this.fadeObjectLeft = null;

			ig.game.temp.nationality = null;
			ig.game.temp.passportImage = null;

			if(this.fileLoader){
				this.fileLoader.kill();
				this.fileLoader = null;
			}
			if(this.nameTextBox) {
				this.nameTextBox.kill();
				this.nameTextBox = null;
			}
			if(this.printButton) {
				this.printButton.kill();
				this.printButton = null;
			}
		},

		loadPassport: function(){
			ig.scene.flipping = true;
			ig.scene.loader.load('book-passport', function(){
				ig.sound.playMusic('musicPassport');
				this.setUpPassport(false);
				// this.uploadImage();
				// this.currentPage = 2;
				this.turnPage();
			}.bind(this));
		},

		/////////////// FIRST PAGE //////////////
		setUpPassport: function( turnPage ){
			this.ie = ig.scene.ie;
			this.nationality = null;
			if(this.pages.length > 1){
				for(var i = 2; i < this.pages.length; i++){
					this.con.removeChild(this.pages[i].con);
				}
				this.pages.splice(2, this.pages.length - 2);
			}

			var page1 = new ig.Book.Page();

			// TITLE
			var num = ig.Book.String( ig.strings.USER_INTERFACE['NUMBERS_' + 1] , 'QUIZ_NUMBERS');
			num.x = 60;
			num.y = 90;
			page1.con.addChild(num);
			
			var subTitle = ig.Book.String( ig.strings.BOOK.PASSPORT.TITLE_1, 'ACTIVITY_SUB_TITLE_LEFT');
			subTitle.x = 90;
			subTitle.y = 90;
			page1.con.addChild(subTitle);
			
			var frillTop = new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'frill_top');
			frillTop.x = 50;
			frillTop.y = 25;
			page1.con.addChild( frillTop );

			var frillBottom = new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'frill_bottom');
			frillBottom.x = 50;
			frillBottom.y = 125;
			page1.con.addChild( frillBottom );

			//// CHOICE BUTTONS

			var choiceAuradon = new ig.Book.Button( new createjs.Bitmap(ig.loader.getResult('loc-option-auradon-logo')));
			choiceAuradon.con.x = 210;
			choiceAuradon.con.y = 250;
			page1.addButton(choiceAuradon);
			var choiceIsle = new ig.Book.Button( new createjs.Bitmap(ig.loader.getResult('loc-option-isle-logo')));
			choiceIsle.con.x = 210;
			choiceIsle.con.y = 475;
			page1.addButton(choiceIsle);

			var or = ig.Book.String( ig.strings.BOOK.PASSPORT.SELECTION_OR, 'ACTIVITY_SUB_TITLE_LEFT');
			or.x = 200;
			or.y = 350;
			page1.con.addChild(or);

			var forward = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'page_forward'));
			forward.active = false;
			forward.con.alpha = 0.5;
			forward.con.x = 310;
			forward.con.y = 650;
			page1.addButton(forward);
			// forward.onClick = this.turnPage.bind(this);
			forward.onClick = function(){this.uploadImage(); this.turnPage();}.bind(this);
			var backward = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'page_back'));
			backward.con.x = 110;
			backward.con.y = 650;
			page1.addButton(backward);
			backward.onClick = function(){ig.scene.switchToActivity(ig.scene.passport);};


			///////////// PAGE2 /////////

			var page2 = new ig.Book.Page();
			
			var con = new createjs.Container();
			// con.y = -22;
			page2.con.addChild(con);
			if(ig.game.temp.nationality){
				this.nationality = ig.game.temp.nationality;
				this.setUpPage( con );
				var fadeObjectRight = new ig.Book.fadeAwayBitmap(page2.con);
				fadeObjectRight.drawPage('right', con, 0, 22);
				page2.update = function(){fadeObjectRight.update();};
			} else {
				this.passportBg = new createjs.Sprite( ig.loader.getSpriteSheet('book-passport-images'), 'bridge');
				con.addChild( this.passportBg );
				var fadeObjectRight = new ig.Book.fadeAwayBitmap(page2.con);
				fadeObjectRight.drawPage('right', this.passportBg, 0, 22);
				page2.update = function(){fadeObjectRight.update();};
			}
			

			choiceAuradon.onClick = function(){
				
				if(fadeObjectRight.active === false){
					if(this.ie){
						ig.scene.ieCharChoose.selectAuradon();
					}
					if(this.nationality !== 'auradon-bg'){
						fadeObjectRight.drawPage('right', con, 0, 22);

						// this.passportBg.gotoAndStop('auradon-bg');
						con.removeAllChildren();
						if(this.nationality !== 'auradon-bg'){
							ig.game.temp.passportImage = null;
						}
						this.nationality = 'auradon-bg';
						ig.game.temp.nationality = this.nationality;
						this.setUpPage( con );
						fadeObjectRight.fadeIn();
					}
					forward.active = true;
					forward.con.alpha = 1;
				}
			}.bind(this);
			choiceIsle.onClick = function(){
				
				if(fadeObjectRight.active === false){
					if(this.ie){
						ig.scene.ieCharChoose.selectIsle();
					}
					if(this.nationality !== 'isleofthelost-bg'){
						fadeObjectRight.drawPage('right', con, 0, 22);
						//this.passportBg.gotoAndStop('isleofthelost-bg');
						con.removeAllChildren();
						if(this.nationality !== 'isleofthelost-bg'){
							ig.game.temp.passportImage = null;
						}
						this.nationality = 'isleofthelost-bg';
						ig.game.temp.nationality = this.nationality;
						this.setUpPage( con );
						fadeObjectRight.fadeIn();
					}
					forward.active = true;
					forward.con.alpha = 1;
				}
			}.bind(this);

			this.addPage(page1);
			this.addPage(page2);
			if( turnPage === true ){
				this.turnPage();
			}
		},

		//////////////////////////////////
		//// SET UP THE UPLOAD SCREEN ////
		//////////////////////////////////
		uploadImage: function( ){
			
			// page2.
			if(this.pages.length > 3){
				for(var i = 4; i < this.pages.length; i++){
					this.con.removeChild(this.pages[i].con);
				}
				this.pages.splice(4, this.pages.length - 2);
			}

			var page3 = new ig.Book.Page();

			// TITLE
			var num = ig.Book.String( ig.strings.USER_INTERFACE['NUMBERS_' + 2], 'QUIZ_NUMBERS');
			num.x = 60;
			num.y = 90;
			page3.con.addChild(num);
			
			var subTitle = ig.Book.String( ig.strings.BOOK.PASSPORT.TITLE_2, 'ACTIVITY_SUB_TITLE_LEFT');
			subTitle.x = 90;
			subTitle.y = 90;
			page3.con.addChild(subTitle);
			
			var frillTop = new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'frill_top');
			frillTop.x = 50;
			frillTop.y = 25;
			page3.con.addChild( frillTop );

			var frillBottom = new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'frill_bottom');
			frillBottom.x = 50;
			frillBottom.y = 125;
			page3.con.addChild( frillBottom );
			
			if(ig.game.temp.nationality){
				this.nationality = ig.game.temp.nationality;
			}

			if( this.nationality === 'isleofthelost-bg') {
				var frame = new createjs.Sprite(ig.loader.getSpriteSheet('book-passport-images'), 'isleofthelost-frame');
				var fBounds = frame.getBounds();
				frame.regX = fBounds.width/2;
				frame.regY = fBounds.height/2;
				frame.x = 210;
				frame.y = 310;
				page3.con.addChild( frame );
			} else {
				var frame = new createjs.Sprite(ig.loader.getSpriteSheet('book-passport-images'), 'auradon-frame');
				var fBounds = frame.getBounds();
				frame.regX = fBounds.width/2;
				frame.regY = fBounds.height/2;
				frame.x = 210;
				frame.y = 310;
				page3.con.addChild( frame );
			}

			if( this.ie ){
				/// ie 9 or under... choose
				var uploadButton = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'button_giant'),  {string: ig.Book.String(ig.strings.BOOK.PASSPORT.BUTTON_CHOOSE, 'GIANT_BUTTONS', {maxWidth: 235})});
				uploadButton.onClick = function(){
					this.active = false;
					ig.scene.ieCharChoose.animateIn();
				}.bind(this);
			} else {
				/// not ie, proceed normal
				var uploadButton = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'button_giant'),  {string: ig.Book.String(ig.strings.BOOK.PASSPORT.BUTTON_UPLOAD, 'GIANT_BUTTONS', {maxWidth: 235})});
				uploadButton.onClick = function(){};
			}

			uploadButton.con.x = 210;
			uploadButton.con.y = 540;
			page3.addButton(uploadButton);
			
			if(this.fileLoader === null && this.ie === false){

				this.fileLoader = new ig.Book.fileUpload();
				var scale = window.innerHeight/768;

				this.fileLoader.width = 320;
				this.fileLoader.height = 100;
				this.fileLoader.x = -220;
				this.fileLoader.y = 575;
				this.fileLoader.regX = this.fileLoader.width/2;
				this.fileLoader.regY = this.fileLoader.height/2;
				this.fileLoader.update();

			}
			
			//// CHOICE BUTTONS

			var forward = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'page_forward'));
			this.imageForward = forward;
			if(!ig.game.temp.passportImage){
				forward.active = false;
				forward.con.alpha = 0.5;
			}
			forward.con.x = 310;
			forward.con.y = 650;
			forward.onClick = function(){
				if(this.fileLoader){
					// this.fileLoader.kill();
					// this.fileLoader = null;
					this.fileLoader.input.style.visibility = 'hidden';
				}
				this.setUpNamePage();
				this.turnPage(function(){
					if(this.nameTextBox){
						this.nameTextBox.input.style.visibility = 'visible';
					}
				}.bind(this));
			}.bind(this);
			page3.addButton(forward);
			var backward = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'page_back'));
			backward.con.x = 110;
			backward.con.y = 650;
			page3.addButton(backward);
			backward.onClick = function(){
				if(this.fileLoader){
					this.fileLoader.kill();
					this.fileLoader = null;
				}
				this.turnPageBack();
			}.bind(this);

			var page4 = new ig.Book.Page();
			page4.con.y = -22;

			this.setUpPage(page4.con);

			if(ig.game.temp.passportImage){
				this.nationality = ig.game.temp.nationality;
				this.addImage(ig.game.temp.passportImage, page3, page4);
			}

			this.addPage(page3);
			this.addPage(page4);
		},
		/// add the uploaded image to the different pages
		addImage: function(image, page1, page2){
			this.image = image;
			var bounds;

			if(page1){
				var leftImage = new createjs.Bitmap(this.image);
				bounds = leftImage.getBounds();
				leftImage.regX = bounds.width/2;
				leftImage.regY = bounds.height/2;
				if(this.nationality === 'auradon-bg'){
					leftImage.x = 211;
					leftImage.y = 301;
					
					leftImage.scaleX = 0.29;
					leftImage.scaleY = 0.29;

				} else {
					leftImage.x = 210;
					leftImage.y = 317;
					
					leftImage.scaleX = 0.28;
					leftImage.scaleY = 0.28;
				}
				page1.con.addChild(leftImage);
			}

			if(page2){
				var rightImage = new createjs.Bitmap(this.image);
				bounds = rightImage.getBounds();
				rightImage.regX = bounds.width/2;
				rightImage.regY = bounds.height/2;
				if(this.nationality === 'auradon-bg'){
					rightImage.x = 127;
					rightImage.y = 542;
					
					rightImage.scaleX = 0.23;
					rightImage.scaleY = 0.23;
				} else {
					rightImage.x = 115;
					rightImage.y = 523;
					
					rightImage.scaleX = 0.216;
					rightImage.scaleY = 0.216;
				}
				page2.con.addChild(rightImage);
			}
		},
		/// add selected character image to pages (IE ONLY)
		addImage_IE: function(image, page1, page2){

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

		},

		  /////////////////////////////////////
		 ///////////// NAME PAGE /////////////
		/////////////////////////////////////
		setUpNamePage: function(){
			// get rid of pages higher than current
			if(this.pages.length > 5){
				for(var i = 6; i < this.pages.length; i++){
					this.con.removeChild(this.pages[i].con);
				}
				this.pages.splice(6, this.pages.length - 2);
			}

			var page5 = new ig.Book.Page();

			// TITLE
			var num = ig.Book.String( ig.strings.USER_INTERFACE['NUMBERS_' + 3], 'QUIZ_NUMBERS');
			num.x = 60;
			num.y = 90;
			page5.con.addChild(num);
			
			var subTitle = ig.Book.String( ig.strings.BOOK.PASSPORT.TITLE_3, 'ACTIVITY_SUB_TITLE_LEFT');
			subTitle.x = 90;
			subTitle.y = 90;
			page5.con.addChild(subTitle);
			
			var frillTop = new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'frill_top');
			frillTop.x = 50;
			frillTop.y = 25;
			page5.con.addChild( frillTop );

			var frillBottom = new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'frill_bottom');
			frillBottom.x = 50;
			frillBottom.y = 125;
			page5.con.addChild( frillBottom );
			//////////////////
			//// TEXT BOX ////
			//////////////////

			/// Graphic
			var textBgImage = new createjs.Sprite(ig.loader.getSpriteSheet('book-passport-images'), 'text_box');
			textBgImage.x = 20;
			textBgImage.y = 180;
			page5.con.addChild( textBgImage );
			/// Input field
			if(!this.nameTextBox){
				this.nameTextBox = new ig.Book.textBox();

				var scale = window.innerHeight/768;

				this.nameTextBox.width = 352;
				this.nameTextBox.height = 100;
				this.nameTextBox.x = -227;
				this.nameTextBox.y = 275;
				this.nameTextBox.regX = this.nameTextBox.width/2;
				this.nameTextBox.regY = this.nameTextBox.height/2;

				// this.nameTextBox.input.onChange = function(){};

				this.nameTextBox.update();
			}

			///////////////////////////
			////// SET UP BUTTONS /////
			///////////////////////////
			var forward = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'page_forward'));
			this.nameTextBox.button = forward;
			forward.con.x = 310;
			forward.con.y = 650;
			forward.onClick = function(){
				this.nameTextBox.input.style.visibility = 'hidden';
				this.setUpStampsPage();
				this.turnPage();
			}.bind(this);
			page5.addButton(forward);
			var backward = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'page_back'));
			backward.con.x = 110;
			backward.con.y = 650;
			page5.addButton(backward);
			backward.onClick = function(){
				if(this.fileLoader){
					this.fileLoader.input.style.visibility = 'visible';
				}
				this.nameTextBox.input.style.visibility = 'hidden';
				this.turnPageBack();
			}.bind(this);

			/// SECOND PAGE ///

			var page6 = new ig.Book.Page();
			this.setUpPage(page6.con);

			if( this.ie ){
				this.addImage_IE( ig.game.temp.passportImage, null, page6);
			} else {
				this.addImage( ig.game.temp.passportImage, null, page6);
			}

			this.addPage(page5);
			this.addPage(page6);
		},

		  //////////////////////////////////
		 ////// SET UP STAMPS PAGE ////////
		//////////////////////////////////

		setUpStampsPage: function(){
			if(this.pages.length > 7){
				for(var i = 8; i < this.pages.length; i++){
					this.con.removeChild(this.pages[i].con);
				}
				this.pages.splice(8, this.pages.length - 2);
			}
			var page7 = new ig.Book.Page();

			var subTitle = ig.Book.String( ig.strings.BOOK.PASSPORT.TITLE_4, 'PASSPORT_STAMP_TITLE');
			subTitle.x = 210;
			subTitle.y = 50;
			page7.con.addChild(subTitle);
			
			if(ig.storage.get('itemfound-stamp4') ? true : false){
				var market = new createjs.Bitmap( ig.loader.getResult('loc-stamp-market'));
				market.x = 50;
				market.y = 160;
				page7.con.addChild(market);
			}
			if(ig.storage.get('itemfound-stamp1') ? true : false){
				var castle = new createjs.Bitmap( ig.loader.getResult('loc-stamp-castle'));
				castle.x = 225;
				castle.y = 150;
				page7.con.addChild(castle);
			}
			if(ig.storage.get('itemfound-stamp2') ? true : false){
				var dorm = new createjs.Bitmap( ig.loader.getResult('loc-stamp-dorm'));
				dorm.x = 30;
				dorm.y = 300;
				page7.con.addChild(dorm);
			}
			if(ig.storage.get('itemfound-stamp3') ? true : false){
				var eden = new createjs.Bitmap( ig.loader.getResult('loc-stamp-eden'));
				eden.x = 200;
				eden.y = 350;
				page7.con.addChild(eden);
			}

			//// GO TO MAP BUTTON
			
			var gototheText = ig.Book.String(ig.strings.BOOK.PASSPORT.GO_TO_THE, 'PASSPORT_GOTO');
			gototheText.regY = 25;
			var mapText = ig.Book.String(ig.strings.BOOK.PASSPORT.MAP, 'PASSPORT_MAP');
			mapText.regY = -12;

			var mapButton = new ig.Book.Button(new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'find_on_map'), {strings: [gototheText, mapText]});
			mapButton.con.x = 210;
			mapButton.con.y = 550;
			mapButton.onClick = function(){
				this.kill();
				ig.game.switchGame(ig.Scene.Map);
			}.bind(this);

			page7.addButton(mapButton);

			///////////////////////////
			////// SET UP BUTTONS /////
			///////////////////////////
			if(ig.config.enablePrint === true) {

				this.printButton = new ig.Book.instantButton( new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'button_tiny'), {string: ig.Book.String(ig.strings.BOOK.PASSPORT.BUTTON_PRINT, 'PASSPORT_PRINT')});
				if(!ig.game.temp.passportImage){
					this.printButton.active = false;
					this.printButton.con.alpha = 0.5;
				}
				this.printButton.con.x = 310;
				this.printButton.con.y = 650;
				this.printButton.onClick = function(){
					
					var canvas = document.createElement('canvas');
					canvas.width = ig.system.fixedWidth;
					canvas.height = ig.system.fixedHeight;
					var ctx = canvas.getContext('2d');
					
					/// Draw bg
					var bookBg = new createjs.Sprite(ig.loader.getSpriteSheet('book-bg'), 'book');
					var bgImage = bookBg.spriteSheet._images[0];
					var rect = bookBg.spriteSheet._frames[bookBg.currentFrame].rect;
					ctx.drawImage( bgImage, rect.x, rect.y, rect.width, rect.height, 
						((canvas.width/2) - (rect.width/2)) - 12 , ((canvas.height/2) - (rect.height/2)), rect.width, rect.height);
					/// Draw content
					ctx.drawImage(ig.game.stages[0].canvas,0,0);


					var img = canvas.toDataURL("image/png");

					var win = window.open();
					try{
						win.document.write( "<img src='" + canvas.toDataURL() + "'>" );
						win.print();
					} catch(err){

					}
				};
				ig.scene.buttons.push(this.printButton);
				page7.addButton(this.printButton);
			}

			
			var backward = new ig.Book.Button( new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'page_back'));
			backward.con.x = 110;
			backward.con.y = 650;
			page7.addButton(backward);
			backward.onClick = function(){
				if(this.printButton){
					this.printButton.kill();
				}
				this.turnPageBack(function(){
					this.nameTextBox.input.style.visibility = 'visible';	
				}.bind(this));
			}.bind(this);

			/// SECOND PAGE ///

			var page8 = new ig.Book.Page();
			this.setUpPage(page8.con);
			if( this.ie ){
				this.addImage_IE( ig.game.temp.passportImage, null, page8);
			} else {
				this.addImage( ig.game.temp.passportImage, null, page8);
			}

			this.addPage(page7);
			this.addPage(page8);
		},


		setUpPage: function( con ){
			var bgImage = new createjs.Sprite( ig.loader.getSpriteSheet('book-passport-images'), this.nationality);
			bgImage.y = -22;
			con.addChild( bgImage );

			if(this.nationality === 'auradon-bg'){

				var logo = new createjs.Bitmap( ig.loader.getResult('loc-passport-auradon-logo') );
				var lBounds = logo.getBounds();
				logo.regX = lBounds.width/2;
				logo.regY = lBounds.height/2;
				logo.x = 220;
				logo.y = 180;
				con.addChild(logo);

				var text = ig.Book.String( ig.strings.BOOK.PASSPORT.PASSPORT, 'PASSPORT_LABEL');
				text.textAlign = 'right';
				text.x = 415;
				text.y = 15;
				con.addChild(text);

				text = ig.Book.String( ig.strings.BOOK.PASSPORT.SUB_TITLE_1, 'PASSPORT_1'); /// goodness begins with you
				text.x = 220;
				text.y = 360;
				con.addChild(text);
				text =  ig.Book.String( ig.strings.BOOK.PASSPORT.SUB_TITLE_2, 'PASSPORT_2'); // united states of auradon
				text.x = 220;
				text.y = 410;
				con.addChild(text);
				text =  ig.Book.String( ig.strings.BOOK.PASSPORT.SUB_TITLE_3, 'PASSPORT_3'); // auradon
				text.x = 250;
				text.y = 560;
				con.addChild(text);
				text =  ig.Book.String( ig.strings.BOOK.PASSPORT.SUB_TITLE_4, 'PASSPORT_4'); // home country
				text.x = 250;
				text.y = 580;
				con.addChild(text);
				text =  ig.Book.String( ig.strings.BOOK.PASSPORT.SUB_TITLE_5, 'PASSPORT_4'); // date of issue
				text.x = 250;
				text.y = 625;
				con.addChild(text);
				text =  ig.Book.String( ig.strings.BOOK.PASSPORT.SUB_TITLE_6, 'PASSPORT_4'); // given name
				text.x = 250;
				text.y = 515;
				con.addChild(text);
				/// ADD DATE
				var date = new Date();
				text = ig.Book.String( ig.strings.BOOK.PASSPORT.DATE, 'PASSPORT_3'); // date
				text.text = text.text.replace("%MM", (date.getMonth() + 1).toString());
				text.text = text.text.replace("%DD", date.getDate().toString());
				text.text = text.text.replace("%YYYY", date.getFullYear().toString());
				text.x = 250;
				text.y = 605;
				con.addChild(text);
				/// ADD NAME
				text = this.givenName;
				text.x = 250;
				text.y = 495;
				con.children.push(this.givenName);

			// DATE:				{ text:"MM/DD/YYYY"}

			} else {

				var logo = new createjs.Bitmap( ig.loader.getResult('loc-passport-isle-logo'));
				var lBounds = logo.getBounds();
				logo.regX = lBounds.width/2;
				logo.regY = lBounds.height/2;
				logo.x = 220;
				logo.y = 180;
				con.addChild(logo);

				var text = ig.Book.String( ig.strings.BOOK.PASSPORT.PASSPORT, 'PASSPORT_LABEL');
				text.textAlign = 'right';
				text.x = 415;
				text.y = 15;
				con.addChild(text);
				
				text = ig.Book.String( ig.strings.BOOK.PASSPORT.SUB_TITLE_7, 'PASSPORT_1'); /// long live evil
				text.x = 220;
				text.y = 345;
				con.addChild(text);
				text =  ig.Book.String( ig.strings.BOOK.PASSPORT.SUB_TITLE_8, 'PASSPORT_2'); // isle of the lost
				text.x = 220;
				text.y = 383;
				con.addChild(text);
				text =  ig.Book.String( ig.strings.BOOK.PASSPORT.SUB_TITLE_9, 'PASSPORT_3'); // isle of the lost
				text.x = 250;
				text.y = 530;
				con.addChild(text);
				text =  ig.Book.String( ig.strings.BOOK.PASSPORT.SUB_TITLE_4, 'PASSPORT_4'); // home country
				text.x = 250;
				text.y = 550;
				con.addChild(text);
				text =  ig.Book.String( ig.strings.BOOK.PASSPORT.SUB_TITLE_5, 'PASSPORT_4'); // date of issue
				text.x = 250;
				text.y = 600;
				con.addChild(text);
				text =  ig.Book.String( ig.strings.BOOK.PASSPORT.SUB_TITLE_6, 'PASSPORT_4'); // given name
				text.x = 250;
				text.y = 500;
				con.addChild(text);
				/// ADD DATE
				var date = new Date();
				text = ig.Book.String( ig.strings.BOOK.PASSPORT.DATE, 'PASSPORT_3'); // date
				text.text = text.text.replace("%MM", (date.getMonth() + 1).toString());
				text.text = text.text.replace("%DD", date.getDate().toString());
				text.text = text.text.replace("%YYYY", date.getFullYear().toString());
				text.x = 250;
				text.y = 580;
				con.addChild(text);
				/// ADD NAME
				text = this.givenName;
				text.x = 250;
				text.y = 480;
				con.children.push(this.givenName);

			}
		}

	});
});
