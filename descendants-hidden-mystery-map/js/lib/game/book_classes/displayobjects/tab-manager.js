ig.module(
	'lib.game.book_classes.displayobjects.tab-manager'
)
.requires(
	'lib.game.book_classes.utils.button'
)
.defines(function(){ "use strict";

	ig.Book.TabManager = ig.Class.extend({


		lMenu: null,
		rMenu: null,
		lQuiz: null,
		rQuiz: null,
		lMuseum: null,
		rMuseum: null,
		lPassport: null,
		rPassport: null,
		lMap: null,
		rMap: null,

		lMaskShape: null,
		rMaskShape: null,

		sections: [],

		init: function( spriteSheet, parent ) {
			
			this.lMenu = new ig.Book.Tab(spriteSheet, 'left_main_menu');
			this.rMenu = new ig.Book.Tab(spriteSheet, 'right_main_menu', {rightHand: true});
			this.lQuiz = new ig.Book.Tab(spriteSheet, 'left_quiz');
			this.rQuiz = new ig.Book.Tab(spriteSheet, 'right_quiz', {rightHand: true});
			this.lMuseum = new ig.Book.Tab(spriteSheet, 'left_museum');
			this.rMuseum = new ig.Book.Tab(spriteSheet, 'right_museum', {rightHand: true});
			this.lPassport = new ig.Book.Tab(spriteSheet, 'left_passport');
			this.rPassport = new ig.Book.Tab(spriteSheet, 'right_passport', {rightHand: true});
			this.lMap = new ig.Book.Tab(spriteSheet, 'left_map');
			this.rMap = new ig.Book.Tab(spriteSheet, 'right_map', {rightHand: true});

			parent.addChild( this.lMenu.con );
			parent.addChild( this.rMenu.con );
			parent.addChild( this.lQuiz.con );
			parent.addChild( this.rQuiz.con );
			parent.addChild( this.lMuseum.con );
			parent.addChild( this.rMuseum.con );
			parent.addChild( this.lPassport.con );
			parent.addChild( this.rPassport.con );
			parent.addChild( this.lMap.con );
			parent.addChild( this.rMap.con );

			this.lMenu.con.y = 50;
			this.lQuiz.con.y = 150;
			this.lMuseum.con.y = 250;
			this.lPassport.con.y = 350;
			this.lMap.con.y = 450;

			this.lMenu.con.x = 1;
			this.lQuiz.con.x = 1;
			this.lMuseum.con.x = 1;
			this.lPassport.con.x = 1;
			this.lMap.con.x = 1;

			this.rMenu.con.y = 50;
			this.rQuiz.con.y = 150;
			this.rMuseum.con.y = 250;
			this.rPassport.con.y = 350;
			this.rMap.con.y = 450;

			this.rMenu.con.x = 926;
			this.rQuiz.con.x = 932;
			this.rMuseum.con.x = 935;
			this.rPassport.con.x = 938;
			this.rMap.con.x = 943;

			this.rMenu.sprite.x = this.rMenu.outPos;
			this.lQuiz.sprite.x = this.lQuiz.outPos;
			this.lMuseum.sprite.x = this.lMuseum.outPos;
			this.lPassport.sprite.x = this.lPassport.outPos;
			this.lMap.sprite.x = this.lMap.outPos;

			this.sections.push([this.lMenu, this.rMenu]);
			this.sections.push([this.lQuiz, this.rQuiz]);
			this.sections.push([this.lMuseum, this.rMuseum]);
			this.sections.push([this.lPassport, this.rPassport]);
			this.sections.push([this.lMap, this.rMap]);

			this.rMenu.onClick = function(){ ig.scene.tabMana.changeSection(0); ig.scene.switchToActivity(ig.scene.mainMenu); };
			this.rQuiz.onClick = function(){ ig.scene.tabMana.changeSection(1); ig.scene.switchToActivity(ig.scene.quiz); };
			this.rMuseum.onClick = function(){ ig.scene.tabMana.changeSection(2); ig.scene.switchToActivity(ig.scene.museum);};
			this.rPassport.onClick = function(){ ig.scene.tabMana.changeSection(3); ig.scene.switchToActivity(ig.scene.passport);};
			this.rMap.onClick = function(){
				// ig.game.switchGame(ig.Scene.Map);
				ig.scene.switchState(ig.scene.stateId.otherGame);
			};

			this.setActive(0, 0);

		},

		changeSection: function(newSection){
			for(var i = 0; i < this.sections.length; i++){
				if(i === newSection){
					createjs.Tween.get(this.sections[i][0].sprite).wait(400).to({x: 0}, 400, createjs.Ease.cubicOut).call( this.setActive.bind(this), [i, newSection]);
					createjs.Tween.get(this.sections[i][1].sprite).to({x: this.sections[i][1].outPos}, 400, createjs.Ease.cubicIn);
					this.sections[i][0].active = false;
					this.sections[i][1].active = false;
				} else {
					createjs.Tween.get(this.sections[i][1].sprite).wait(400).to({x: 0}, 400 + (Math.random() * 50), createjs.Ease.cubicOut).call( this.setActive.bind(this), [i, newSection]);
					createjs.Tween.get(this.sections[i][0].sprite).to({x: this.sections[i][0].outPos}, 400, createjs.Ease.cubicIn);
					this.sections[i][0].active = false;
					this.sections[i][1].active = false;
				}
			}
		},

		setActive: function( section, newSection ){
			if( section === newSection ){
				this.sections[section][0].active = true;
				this.sections[section][1].active = false;
			} else {
				this.sections[section][0].active = false;
				this.sections[section][1].active = true;
			}
		},

		update: function() {

		},
		
		draw: function() {

		},
	});

	ig.Book.Tab = ig.Book.Button.extend({

		con: null,
		sprite: null,
		maskShape: null,
		rightHand: false,
		outPos: 330,
		spriteTarPos: {x: 0, y:0},

		init: function( spriteSheet, anim, options){

			if(options && options.rightHand){
				this.rightHand = options.rightHand;
			}

			this.con = new createjs.Container();
			this.sprite = new createjs.Sprite( spriteSheet, anim );
			this.con.addChild( this.sprite );

			this.maskShape = new createjs.Shape();
			if(this.rightHand) {
				this.outPos = -80;
				this.maskShape.graphics.beginFill('#000000').drawRect(8,0,300,100);
			} else {
				this.outPos = 80;
				this.maskShape.graphics.beginFill('#000000').drawRect(-230,0,300,100);
			}
			this.sprite.mask = this.maskShape;
			this.bounds = this.sprite.getBounds();

		},
		update: function(){
			this.sprite.x += ( this.spriteTarPos.x - this.sprite.x )/5;
			// this.parent();
		},
		onMouseOver: function(){
			this.spriteTarPos.x = 8;
			ig.game.cursorPointer = true;
		},
		mouseOut: function(){
			this.spriteTarPos.x = 0;
		}

	});

});