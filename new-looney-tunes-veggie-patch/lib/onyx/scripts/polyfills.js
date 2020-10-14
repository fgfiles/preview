'use strict';

var performance;

(function(){
  	if (!window || "performance" in window == false) {
 		performance = {};
	} else {
		performance = window.performance;
	}

	if ("now" in performance == false){
		
		var nowOffset = new Date().getTime();

		if (performance.timing && performance.timing.navigationStart){
			nowOffset = performance.timing.navigationStart
		}

		performance.now = function now(){
			return new Date().getTime() - nowOffset;
		}
	}
})();


var requestAnimationFrame, cancelAnimationFrame;

(function() {
	if(window && window.requestAnimationFrame){
		requestAnimationFrame = window.requestAnimationFrame
	}
	
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !requestAnimationFrame; ++x) {
		requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
								|| window[vendors[x]+'CancelRequestAnimationFrame'];
	}

	if (!requestAnimationFrame)
		requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};

	if (!cancelAnimationFrame)
		cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
}());

//Rounding numbers a little easier
// Number.prototype.round = function(n){
// 	if(n < 1){
// 		var factor = 1 / n;
// 	} else {
// 		var factor = Math.pow(10, n);
// 	}
	
// 	return Math.round(this*factor)/factor;
// }

export { performance, requestAnimationFrame, cancelAnimationFrame};