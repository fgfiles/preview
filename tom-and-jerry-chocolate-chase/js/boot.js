try
{
	window.AudioContext = window.AudioContext  || window.webkitAudioContext;
	window.audioContextInstance = new AudioContext();
}			
catch(e)
{

}	

requirejs(["jquery-1.7.1.min", "swfobject", "soundmanager2-nodebug-jsmin", "game", "pixi.min"], function(jQuery, swfObject, soundManager2, game, pixiJs)
{	
	function gameStart() 	
	{	
		window["isStandalone"] = !!window.navigator.standalone;	
	
		var elm = document.body;
			
		var catcher = function(evt) {
		if(evt.touches.length < 2)
			evt.preventDefault();
		};
		
		elm.addEventListener('touchstart', catcher, true);
		document.ontouchmove = function ontouchmove(e)
		{
			e = e || window.event;
			e.preventDefault();
		}
		
		document.oncontextmenu = function oncontextmenu(e) {
			e = e || window.event;
			if (e.preventDefault)
				e.preventDefault();
			else
				return false;
		};					
	};		
	
	gameStart();
});	