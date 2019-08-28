/**
 * ...
 * @author Valero
 */

(function() {
	
	
	
})();

$(document).ready(function(){

	
	setUpPageListener();
	
});

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
	
	window.onLeaveWindow();
	}

