/**
 * ...
 * @author me
 */

(

function() {
	

	var limeloaded = function(){
		
		lime.embed ("embedtarget", 960, 560, "000000");
	};
	
	var newStyle = document.createElement('style');
	
		/*html,body { margin: 0; padding: 0; height: 100%; overflow: hidden; }\
		#embedtarget { background: #000000; width: 100%; height: 100%; }\*/
		
		/*html,body { margin: 0; padding: 0; width: 960px; height: 560px;  overflow: hidden; }\*/
		
		/*html,body { left:50%; top:50%; transform:translate(-50%,-50%); -webkit-transform:translate(-50%,-50%); position:absolute;  width: 960px; height: 560px;  overflow: hidden; }\
		#embedtarget { background: #000000; width: 960px; height: 560px; }\*/
		
		
		/* LATEST -html,body { left:50%; top:50%; transform:translate(-50%,-50%); -webkit-transform:translate(-50%,-50%); position:absolute;  width: 960px; height: 560px;  overflow: hidden; }\
		#embedtarget { background: #000000; width: 960px; height: 560px; }\*/
		
	if(window.navigator.isCocoonJS){
		//alert("isCocoonJS");
		newStyle.innerHTML = "\
			html,body { margin: 0; padding: 0; height: 100%; overflow: hidden; }\
			#embedtarget{ background: #000000; width: 100%; height: 100%; }\
			@font-face {\
				font-family: 'Bangers';\
				src: url('"+jsembed.baseUrl() +"media/fonts/bangers-webfont.ttf');\
				font-weight: normal;\
				font-style: normal;\
			}\
			@font-face {\
				font-family: 'Oswald Medium';\
				src: url('"+jsembed.baseUrl() +"media/fonts/oswald-medium-webfont.ttf');\
				font-weight: normal;\
				font-style: normal;\
			}\
		";
	}else{
		//alert("NOT CocoonJS");
		/*window.addEventListener ("touchmove", function (event) { event.preventDefault (); }, false);
		if (typeof window.devicePixelRatio != 'undefined' && window.devicePixelRatio > 2) {
			var meta = document.getElementById ("viewport");
			meta.setAttribute ('content', 'width=device-width, initial-scale=' + (2 / window.devicePixelRatio) + ', user-scalable=no');
		}*/
		
			/*html,body { left:50%; top:50%; transform:translate(-50%,-50%); -webkit-transform:translate(-50%,-50%); position:absolute;  width: 960px; height: 560px;  overflow: hidden; }\
			#embedtarget { background: #000000; width: 960px; height: 560px; }\*/
			/*html,body { margin: 0; padding: 0; height: 100%; overflow: hidden; }\
			#embedtarget{ background: #000000; width: 100%; height: 100%; }\*/
		newStyle.innerHTML = "\
			html,body { margin: 0; padding: 0; height: 100%; overflow: hidden; }\
			#embedtarget{ background: #000000; width: 100%; height: 100%; }\
			@font-face {\
				font-family: 'Bangers';\
				src: url('"+jsembed.baseUrl() +"media/fonts/bangers-webfont.eot');\
				src: url('"+jsembed.baseUrl() +"media/fonts/bangers-webfont.eot?#iefix') format('embedded-opentype'),\
				url('"+jsembed.baseUrl() +"media/fonts/bangers-webfont.svg#my-font-family') format('svg'),\
				url('"+jsembed.baseUrl() +"media/fonts/bangers-webfont.woff') format('woff'),\
				url('"+jsembed.baseUrl() +"media/fonts/bangers-webfont.ttf') format('truetype');\
				font-weight: normal;\
				font-style: normal;\
			}\
			@font-face {\
				font-family: 'Oswald Medium';\
				src: url('"+jsembed.baseUrl() +"media/fonts/oswald-medium-webfont.eot');\
				src: url('"+jsembed.baseUrl() +"media/fonts/oswald-medium-webfont.eot?#iefix') format('embedded-opentype'),\
				url('"+jsembed.baseUrl() +"media/fonts/oswald-medium-webfont.svg#my-font-family') format('svg'),\
				url('"+jsembed.baseUrl() +"media/fonts/oswald-medium-webfont.woff') format('woff'),\
				url('"+jsembed.baseUrl() +"media/fonts/oswald-medium-webfont.ttf') format('truetype');\
				font-weight: normal;\
				font-style: normal;\
			}\
			";
	
		
		
		
		var newspan1 = document.createElement('span');
		newspan1.setAttribute('style', 'font-family:Bangers');
		
		
		var newspan2 = document.createElement('span');
		newspan2.setAttribute('style', 'font-family:Oswald Medium');
		
		//var ebt = document.getElementById('embedtarget');
		var ebt = document.body;
		ebt.appendChild(newspan1);
		ebt.appendChild(newspan2);
	}
	
	document.head.appendChild(newStyle);
	
	var soundjs = document.createElement("SCRIPT"); 
	soundjs.src = jsembed.baseUrl() +"lib/soundjs.min.js";
	
	document.head.appendChild(soundjs);
	
	var gamejs = document.createElement("SCRIPT"); 
	gamejs.src = jsembed.baseUrl() +"TrainRescue.js";
	
	document.head.appendChild(gamejs);
	
	var newStyle2 = document.createElement('SCRIPT');
	newStyle2.innerHTML = "\
	<!-- Disable arrow keys from moving browser window-->\
	<!-- Disable default of backspace and delete functions-->\
	window.addEventListener('keydown', function(e) {\
	<!-- arrow keys, backspace, alt ,delete-->\
	if([37, 38, 39, 40, 8, 46 ].indexOf(e.keyCode) > -1) { e.preventDefault(); }\
	}, false);\
	";
	document.head.appendChild(newStyle2);
	
	//var newScript = document.createElement("SCRIPT"); 
	//newScript.innerHTML = "\
 		//\
 		//function launchIntoFullscreen() {\
 			//\
 			//if(document.documentElement.requestFullscreen) {\
 				//document.documentElement.requestFullscreen();\
 			//} else if(document.documentElement.mozRequestFullScreen) {\
 				//document.documentElement.mozRequestFullScreen();\
 			//} else if(document.documentElement.webkitRequestFullscreen) {\
 				//document.documentElement.webkitRequestFullscreen();\
 			//} else if(document.documentElement.msRequestFullscreen) {\
 				//document.documentElement.msRequestFullscreen();\
 			//}\
 		//}\
 		//\
 		//function isIOS_7 () {\
 			//var device = false;\
 			//var osVer = false;\
 			//if (navigator.userAgent.indexOf('iPod') != -1\
 			//|| navigator.userAgent.indexOf('iPhone') != -1\
 			//|| navigator.userAgent.indexOf('iPad') != -1)\
 			//device = true;\
 			//\
 			//var regex = /OS 7_\d+/;\
 			//if ( regex.test(navigator.userAgent)) {\
 				//osVer = true;\
 			//}\
 			//\
 			//if (device && osVer) return true;\
 			//\
 			//return false;\
 		//}\
 		//<!-- Launch to full screen on touch start -->\
 		//window.addEventListener ('touchstart', function (event) { \
 			//launchIntoFullscreen();\
 			//window.focus();\
 		//}, false);\
 		//<!-- Normal script-->\
 		//window.addEventListener ('touchmove', function (e) { e.preventDefault (); }, false);\
 		//if (typeof window.devicePixelRatio != 'undefined' && window.devicePixelRatio > 2) {\
 			//var meta = document.getElementById ('viewport');\
 			//meta.setAttribute ('content', 'minimal-ui, width=device-width, initial-scale=' + (2 / window.devicePixelRatio) + ', user-scalable=no');\
 		//}\
 		//<!-- Disable arrow keys from moving browser window-->\
 		//<!-- Disable default of backspace and delete functions-->\
 		//window.addEventListener('keydown', function(e) {\
 			//<!-- arrow keys, backspace, delete-->\
 			//if([37, 38, 39, 40, 8, 46 ].indexOf(e.keyCode) > -1) { e.preventDefault(); }\
 		//}, false);\
 		//<!-- On Resize-->\
 		//window.onresize =  function () {\
 			//<!-- If not ios7-->\
 			//if( !isIOS_7() ){\
 				//var a = document.getElementById('embedtarget');\
 				//a.style.height = window.innerHeight + 'px';\
 				//a.style.width = window.innerWidth + 'px';\
 				//scrollTo(0,0);\
 			//}\
 		//};\
 		//window.onorientationchange = function (){ scrollTo(0,0); }\
 		//\
 		//<!-- Prevent console.log crashes in IE! -->\
 		//if (!window.console || !window.console.log) console = {log: function() {}, error: function() {}};\
		//\
 	//";
 	//
 	//document.head.appendChild(newScript);
	//
	
	gamejs.onload = limeloaded;
	
		
	
	var preventEventDefault = function (event) {
        event.preventDefault();
	};
	
	window.addEventListener("keydown", preventEventDefault);	
	window.addEventListener("keyup", preventEventDefault);
	window.addEventListener("contextmenu", preventEventDefault);
	
}


)();