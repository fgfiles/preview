(function() {
	
})();
	
	var targetId;
	var targetIdVideo;
	var targetIdContainer;
	
	var base = "/UMIGO/appisode1/2014-05-13/web/tests/test1"; // "/UMIGO/appisode1/2014-05-13/web/";
	
	var widthIdeal 	= 960;
    var heightIdeal = 540;
    var scaleMax = 3; //3
    var widthMax = 960;
    var heightMax = 540;
    
	var _canvasWidth;
	var _canvasHeight;
	var _canvasScale= 1; //default
	//var _canvasScaleX; // Actual runtime scale of the canvas on the X axis. Only relevant in scaling modes that fill rather than fit.
	//var _canvasScaleY; // Actual runtime scale of the canvas on the Y axis. Only relevant in scaling modes that fill rather than fit.
	var _contentOffsetX = 0;
	var _contentOffsetY = 0;
	var _scaledWidth = 0;
	var _scaledHeight = 0;
	// IE Console fix, for the inevitable situation when a .log is accidentally left in the code.
	if (!window.console) window.console = {};
	if (!window.console.log) window.console.log = function () { };
	
	
	// DOM Elements
    var win = window;
    var doc = document;
    var nav = navigator;
	
	// TODO DETECT mobile
	var Environment = {
		//mobile or desktop compatible event name, to be used with '.on' function
		TOUCH_DOWN_EVENT_NAME: 'mousedown touchstart',
		TOUCH_UP_EVENT_NAME: 'mouseup touchend',
		TOUCH_MOVE_EVENT_NAME: 'mousemove touchmove',
		TOUCH_DOUBLE_TAB_EVENT_NAME: 'dblclick dbltap',

		isAndroid: function() {
			return navigator.userAgent.match(/Android/i);
		},
		isBlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		isIOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		isOpera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		isWindows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		isMobile: function() {
			return (Environment.isAndroid() || Environment.isBlackBerry() || Environment.isIOS() || Environment.isOpera() || Environment.isWindows());
		}
	};
	
	function scaleCalculate()
	{
		 var tWidth = getBrowserWidth();
         var tHeight = getBrowserHeight();
         //if(console.log){console.log("Width: " + tWidth + " Height: " + tHeight);}
         var tScale = 1;         
		 if ( tWidth/widthIdeal < tHeight/heightIdeal ) tScale = tWidth/widthIdeal;
		 else tScale = tHeight/heightIdeal;
         
         scaleSet(tScale);
	}
	
	function onEventResize (event)
	{
		//scaleCalculate();
		calculateCanvasScale();
		setTimeout(calculateCanvasScale, 1000);
	}
	
	function embedScalingScript() 
	{
		addEvent(window,'resize',onEventResize);
		//scaleCalculate();
		calculateCanvasScale();
		setTimeout(calculateCanvasScale, 1000);
		//setTimeout(scaleCalculate, 500); // Ugly hack to work around mobile safari's documentSize delay. [Keith] No longer needed?
	}
	
	
	function getCanvasScale()
	{	 
		//console.log("scale....get");
		//alert(_canvasScale);
		return _canvasScale;
	}
	
	function isMobile()
	{	 
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			if(console.log){console.log("si ES MOBILE");}
			return true;
		}
		if(console.log){console.log("NO ES MOBILE");}
		return false;
	}
	
	function isIos()
	{
		if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
			if(console.log){console.log("si ES IOS");}
			return true;
		}
		if(console.log){console.log("NO ES IOS");}
		return false;
	}

	// JJ: calculateCanvasScale canvas scale
	function calculateCanvasScale() {
		var tWidth = getBrowserWidth();
		var tHeight = getBrowserHeight();
		
		if(console.log)
			console.log("Width: " + tWidth + " Height: " + tHeight);
		
		var tScale = 1;         
		if ( tWidth/widthIdeal < tHeight/heightIdeal ) 
			tScale = tWidth/widthIdeal;
		else 
			tScale = tHeight/heightIdeal;
		
		scaleSet(tScale);
		flambeDimChanged();
	}
	
	/*
	Get the client width.
	 */
    function getBrowserWidth()
    {
    	if (window.innerWidth) { return window.innerWidth; }
        if (document.documentElement && document.documentElement.clientWidth != 0) { return document.documentElement.clientWidth; }
        if (document.body) { return document.body.clientWidth; }
        return 0;
    };
    /*
	Get the client height.
	 */
    function getBrowserHeight()
    {    	
        if (window.innerHeight) {  return window.innerHeight; }
        if (document.documentElement && document.documentElement.clientHeight != 0) { return document.documentElement.clientHeight; }
        if (document.body) { return document.body.clientHeight; }
        return 0;
    };
	
	/* Helper method to add an event listener to an element. */
	function addEvent (elem, type, eventHandle) {
		if (elem == null || elem == undefined) return;
		if ( elem.addEventListener ) {
			elem.addEventListener( type, eventHandle, false );
		} else if ( elem.attachEvent ) {
			elem.attachEvent( "on" + type, eventHandle );
		} else {
			elem["on"+type]=eventHandle;
		}
	}
	
	
	/* 
    Set the scale of the document canvas. Used for dynamic stage resizing.
	 */
	function scaleSet (pScale)
	{
		if ( pScale > scaleMax ){ pScale = scaleMax; }
	   
		pScale *= 1;
		
		var tFinalW = Math.round(widthIdeal*pScale*1000)/1000;
		var tFinalH = Math.round(heightIdeal*pScale*1000)/1000;
					
	    _canvasScale	= pScale;	    
	    _canvasWidth 	= getBrowserWidth();
	    _canvasHeight 	= getBrowserHeight();
	    _scaledWidth  	= tFinalW;
	    _scaledHeight  	= tFinalH;
	    
	    // Wilson Ariza: scale video and canvas and center those components.
	    var componentWidth = _canvasScale * widthMax;
	    var componentHeight = _canvasScale * heightMax;

	    var canvasContainer = document.querySelector('#contentGame');
		
		canvasContainer.style.left = ((_canvasWidth - componentWidth) / 2) + "px";
		
		// Fix only for iOS.
		if(isIos())
		{
			canvasContainer.style.width = componentWidth+"px";
			canvasContainer.style.height = componentHeight+"px";
		}
		
		var overflowContainer = document.querySelector('#contentblanco');
		
		overflowContainer.style.height = heightMax+"px";
		overflowContainer.style.top = (getBrowserHeight()-((_canvasHeight - componentHeight)))+"px";
		overflowContainer.style.zIndex = "99";
	}
	
	function flambeDimChanged(){}
	
//})();