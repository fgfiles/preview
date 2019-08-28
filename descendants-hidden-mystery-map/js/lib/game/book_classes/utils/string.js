ig.module(
	'lib.game.book_classes.utils.string'
).requires(
	'lib.plugins.createjs.impact'
).defines(function(){ 'use strict';


	ig.Book.String = function( stringID, stringDefStyle, options){

		var defaultStyles = ig.strings.BOOK.DEFAULT_STYLES;
		var newString = new createjs.Text();
		newString.style = defaultStyles['FALLBACK'].style;
		newString.size = defaultStyles['FALLBACK'].size;
		newString.font = defaultStyles['FALLBACK'].font;
		ig.merge( newString,  defaultStyles[stringDefStyle]);
		ig.merge( newString, stringID );
		newString.font = newString.style + ' ' + newString.size + ' ' + newString.font;

		var bounds = newString.getMetrics();

		if(options){
			if(options.maxWidth){
				if(bounds.width > options.maxWidth){
					var multiple = options.maxWidth/bounds.width;
					newString.scaleX = newString.scaleY = multiple;
				}
			}
			if(options.maxHeight){
				if(bounds.height > options.maxHeight){
					var multiple = options.maxHeight/bounds.height;
					newString.scaleX = newString.scaleY = multiple;
					if(newString.lineWidth){
						newString.lineWidth = newString.lineWidth / multiple;
					}
				}
			}
		}
		return newString;

	}

	ig.Book.TextSprite = ig.Class.extend({

		con: null,
		bounds: null,
		text: null,
		sprite: null,

		init: function( sprite, text, options ){

			this.con = new createjs.Container();
			this.sprite = sprite;
			this.text = text;
			this.con.addChild( this.sprite );
			this.bounds = this.con.getBounds();
			this.con.regX = this.bounds.width/2;
			this.con.regY = this.bounds.height/2;
			this.con.addChild( this.text );
			this.text.x = this.bounds.width/2;
			this.text.y = this.bounds.height/2;

		}

	});
	
});
