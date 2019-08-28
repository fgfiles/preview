ig.module(
	'lib.game.book_classes.utils.general'
)
.defines(function(){ 'use strict';

	// ig.Book.shuffleArray = function ( array ) {
	// 	var m = array.length, t, i;

	// 	// While there remain elements to shuffle…
	// 	while (m) {

	// 	// Pick a remaining element…
	// 	i = Math.floor(Math.random() * m--);

	// 	// And swap it with the current element.
	// 	t = array[m];
	// 	array[m] = array[i];
	// 	array[i] = t;
	// 	}

	// 	return array;
	// },

	ig.Book.fileUpload = ig.Class.extend({

		input: null,
		image: null,
		callback: null,
		progress: 0,
		body: null,

		init: function(){
			this.input = document.createElement('input');
			this.input.type = 'file';
			this.input.accept = 'image/*';
			this.input.style.position = 'absolute';
			this.input.style.opacity = 0;
			this.input.style.cursor = 'pointer';

			this.body = document.getElementsByTagName('body')[0];
			this.body.appendChild(this.input);

			this.handleFileSelect = this.fileSelect.bind(this);
			this.input.addEventListener('change', this.handleFileSelect, false);
		},

		update: function(){
			if(this.input){
				var scale = window.innerHeight/768;
				this.input.style.width = this.width * scale + 'px';
				this.input.style.height = this.height * scale + 'px';
				this.input.style.left = '50%';
				this.input.style.marginLeft = -(390 * scale) + 'px';
				this.input.style.top = (this.y - this.regY) * scale + 'px';
				this.input.style.display = ig.system.isWrongOrientation ? 'none' : ''; 
			}
		},

		updateProgress: function( evt ){
			// console.log('progress');
			this.progress = evt.loaded / evt.total;
		},

		fileSelect: function( evt ){

			this.progress = 0;

			var file = evt.target.files[0];

			if (!file.type.match('image.*')) {
				return;
			}

			var reader = new FileReader();
			// Closure to capture the file information.
			reader.onloadstart = function(){
				ig.scene.upLoader.load(this, function(){
					ig.scene.slideBookOut(function(){
						ig.game.switchScene(ig.Scene.Photo, this.image);
					}.bind(this));
				}.bind(this));
			}.bind(this);
			
			reader.onprogress = this.updateProgress.bind(this);

			reader.onload = function(theFile) {
				var image = new Image();
				image.src = theFile.target.result;
				this.image = image;
				ig.game.temp.uploadImage = image;
				if(this.callback){
					this.callback();
				}
				this.kill();
			}.bind(this);
			reader.readAsDataURL(file);

		},
		kill: function(){
			this.input.removeEventListener('change', this.handleFileSelect);
			this.body.removeChild(this.input);
		}
	});

	ig.Book.textBox = ig.Class.extend({
		
		input: null,
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		regX: 0,
		regY: 0,
		button: null,


		init: function(){
			this.input = document.createElement('input');
			this.input.type = 'text';
			this.input.name = 'passportName';
			this.input.style.position = 'absolute';
			this.input.style.border = '0px';
			this.input.style.fontSize =  Math.floor((window.innerHeight/768) * 38)+ 'px';
			this.input.style.backgroundColor = 'transparent';
			this.input.style.fontFamily = ig.strings.BOOK.DEFAULT_STYLES.INPUT_TEXT_BOX.font;
			this.input.style.color = ig.strings.BOOK.DEFAULT_STYLES.INPUT_TEXT_BOX.color;
			this.input.style.fontWeight = ig.strings.BOOK.DEFAULT_STYLES.INPUT_TEXT_BOX.style;
			this.input.style.textAlign = 'center';
			this.input.maxLength = 12;

			// this.input.style.size
			this.body = document.getElementsByTagName('body')[0];
			this.body.appendChild(this.input);
		},
		update: function(){
			if(this.input){
				var scale = window.innerHeight/768;
				this.input.style.fontSize =  Math.floor(scale * 38) + 'px';
				this.input.style.width = this.width * scale + 'px';
				this.input.style.height = this.height * scale + 'px';
				this.input.style.left = '50%';
				this.input.style.marginLeft = -(400 * scale) + 'px';
				this.input.style.top = (this.y - this.regY) * scale + 'px';
				this.input.style.display = ig.system.isWrongOrientation ? 'none' : ''; 
			}
			if(this.button){
				if(this.input.value === null || this.input.value === ''){
					this.button.con.alpha = 0.5;
					this.button.active = false;
				} else {
					this.button.con.alpha = 1;
					this.button.active = true;
				}
			}

		},
		kill: function(){
			this.input.parentNode.removeChild(this.input);
		}

	});

	ig.Book.spriteSheetCombine = function(sheet1, sheet2){

		var images, frames;
		images = sheet1._images.length;
		frames = sheet1._frames.length;

		/// push images
		for(var i = 0; i < sheet2._images.length; i++){
			sheet1._images.push(sheet2._images[i]);
		}
		/// push frames
		for(i = 0; i < sheet2._frames.length; i++){
			// sheet2._frames[i][0] += images;
			sheet1._frames.push(sheet2._frames[i]);
		}
		/// push animations
		for(var key in sheet2._data){
			for(i = 0; i < sheet2._data[key].frames.length; i++){
				sheet2._data[key].frames[i] += frames;
			}
			sheet2._data[key].next = false;
			sheet1._data[key] = sheet2._data[key];
		}
		for(i = 0; i < sheet2._animations.length; i++){
			sheet1._animations.push( sheet2._animations[i] );
			// console.log();
		}

		return sheet1;
	};

	ig.Book.isIE9 = function() {
		// Returns the version of Internet Explorer or a -1
		// (indicating the use of another browser).
		var rv = 10; // Return value assumes failure.
		if (navigator.appName == 'Microsoft Internet Explorer') {
			var ua = navigator.userAgent;
			var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) != null)
				rv = parseFloat(RegExp.$1);
		}
		if(rv <= 9){
			rv = true;
		} else {
			rv = false;
		}
		return rv;
	}

});
