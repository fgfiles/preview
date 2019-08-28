/**
 * ...
 * @author Valero
 */

(function() {
	
	
	
})();

$(document).ready(function(){

	getCookie();
	setUpPageListener();
	
});

function setCookie(user_id){
	
	$.cookie('user_id', user_id, { expires: 7 });
	
}

function getCookie(){
	
	if($.cookie('user_id') == undefined || $.cookie('user_id') == null){
		
		// no instalado
		
		var UUID = generateUUID();
		
		setCookie(UUID);
	
		return UUID;
		
	}else{
		return $.cookie('user_id');
	};	
}

function generateUUID(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    return uuid;
};

function setUpPageListener(){
		window.addEventListener('blur', function() {
	  pauseGame('window.blur');
	}, false);

	//window.addEventListener('focus', function() {
	  //pauseGame('window.focus');
	//}, false);

	window.addEventListener('pagehide', function() {
	  pauseGame('window.pagehide');
	}, false);

	//window.addEventListener('pageshow', function() {
	  //pauseGame('window.pageshow');
	//}, false);

	//document.addEventListener('blur', function() {
	  //pauseGame('document.blur');
	//}, false);

	//document.addEventListener('focus', function() {
	  //pauseGame('document.focus');
	//}, false);

	document.addEventListener('focusout', function() {
	  pauseGame('document.focusout');
	}, false);

	//document.addEventListener('focusin', function() {
	  //pauseGame('document.focusin');
	//}, false);

	document.addEventListener('DOMFocusOut', function() {
	  pauseGame('document.DOMFocusOut');
	}, false);

	//document.addEventListener('DOMFocusIn', function() {
	  //pauseGame('document.DOMFocusIn');
	//}, false);
}

function pauseGame(msg){
	window.onLeaveWindows();
	}

