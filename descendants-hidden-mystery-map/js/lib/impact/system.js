ig.module(
	'lib.impact.system'
)
.defines(function()
{
	ig.System = ig.Class.extend(
	{
		width : 480,
		height : 320,
		scale : 1,

		fixedWidth : 960,
		fixedHeight : 640,
		fixedScale : 1,

		isWrongOrientation : false,

		init : function()
		{
			this.scale = this.getUrlVar('scale') || this.scale;

			var resizeWindowBound = this.onResizeWindow.bind(this, true);
			window.addEventListener('load', this.onPageLoad.bind(this), false);
			window.addEventListener('resize', resizeWindowBound, false);
			window.addEventListener('orientationchange', resizeWindowBound, false);

			// prevent touch and dragging
			document.ontouchmove = function(e) { e.preventDefault() };

			setInterval(resizeWindowBound, 200);

			// this will resize the window
			this.onPageLoad();
		},

		resize : function(width, height, scale)
		{
			this.width = width * this.scale;
			this.height = height * this.scale;

			this.fixedScale = 1 / this.scale;
			this.fixedWidth = this.width * this.fixedScale;
			this.fixedHeight = this.height * this.fixedScale;

			var gameWrapper = ig.$('#' + ig.config.gameWrapper);
			var canvases = gameWrapper ? gameWrapper.getElementsByTagName('canvas') : [ ig.$('#canvas') ];

			for ( var i = 0, canvas; canvas = canvases[i++]; )
			{
				canvas.width = this.width;
				canvas.height = this.height;
			}
		},

		getUrlVar : function(name)
		{
			var vars = {};
			window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) { vars[key] = value });
			return vars[name] || null
		},

		lastInnerSize : 0,
		onResizeWindow : function(forced)
		{
			if ( !ig.config )
				return;

			setTimeout(this.hideAddressBar, 100);

			if ( !forced && this.lastInnerSize == window.innerWidth + window.innerHeight )
				return;

			var windowWidth = window.innerWidth,
				windowHeight = window.innerHeight,

				gameWrapper = ig.$('#' + ig.config.gameWrapper),

				widthMin = ig.config.gameDimensions.width.min,
				widthMax = ig.config.gameDimensions.width.max,
				heightMin = ig.config.gameDimensions.height.min,
				heightMax = ig.config.gameDimensions.height.max,

				widthScale = windowWidth / widthMin,
				heightScale = windowHeight / heightMin,

				canvasWidth = widthMin,
				canvasHeight = heightMin,

				scale;

			if ( widthScale > heightScale ) 
			{
				if ( windowWidth > widthMax * heightScale )
					canvasWidth = widthMax;
				else if ( windowWidth < widthMin * heightScale )
					canvasWidth = widthMin;
				else
					canvasWidth = windowWidth / heightScale;
			}
			else
			{
				if ( windowHeight > heightMax * widthScale )
					canvasHeight = heightMax;
				else if ( windowHeight < heightMin * widthScale )
					canvasHeight = heightMin;
				else
					canvasHeight = windowHeight / widthScale;
			}

			canvasWidth = ~~canvasWidth;
			canvasHeight = ~~canvasHeight;

			// resize it
			this.resize(canvasWidth, canvasHeight, this.scale);
		
			if ( gameWrapper )
			{
				// scale = widthScale > heightScale ? windowHeight / canvasHeight : windowWidth / canvasWidth;
				// gameWrapper.style.width = windowWidth + 'px';
				// gameWrapper.style.height = windowHeight + 'px';

				scale = widthScale > heightScale ? windowHeight / canvasHeight : windowWidth / canvasWidth;

				gameWrapper.style.maxWidth = gameWrapper.style.maxHeight = gameWrapper.style.margin = '';
				gameWrapper.style.width = ~~(canvasWidth * scale) + 'px';
				gameWrapper.style.height = ~~(canvasHeight * scale) + 'px';
				gameWrapper.style.marginTop = ~~((windowHeight - (canvasHeight * scale)) * 0.5) + 'px';
			}

			this.isWrongOrientation = windowWidth / windowHeight < canvasWidth / canvasHeight;

			// for mobile
			setTimeout(this.hideAddressBar, 100);
			this.lastInnerSize = windowWidth + windowHeight;
		},

		onPageLoad : function()
		{
			// deal with ios7
			if ( (ig.device.iPhone || ig.device.iPod) && ig.device.iOSVersion >= 7 )
			{
				var ios7 = ig.$('#ios7');
				ios7.style.display = 'block';
				ios7.ontouchstart = function() { ios7.style.display = 'none' }
			}

			this.hideAddressBar();
			this.onResizeWindow();
		},

		hideAddressBar : function()
		{
			setTimeout(function() { window.scrollTo && window.scrollTo(0,0) }, 0)
		}
	});

	ig.system = new ig.System;
});