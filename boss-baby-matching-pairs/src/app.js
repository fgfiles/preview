var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
    hidden = "hidden";
    visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
}






var globals = globals || {};

globals.bSound=true;
globals.screenlock=false;
globals.volume;
globals.music_volume;
var myStorage;
globals.isDebugging=true;
globals.soundInstance;

var main;
var stage;
if(createjs){
    var c = createjs;
}

if(  document.addEventListener  ){

    $(document).ready(function(){

        globals.isMobile = detectMobile();
        myStorage = window.localStorage;
        main=new Main();
        strings =game1;
        main.init();
        window.addEventListener("orientationchange", resizeCanvas, false);
        window.addEventListener('resize', resizeCanvas, false);


        document.addEventListener(visibilityChange, handleVisibilityChange, false);

    });

}

function handleVisibilityChange() {
    if (document[hidden]) {
        pauseAll();
    } else {
        resumeAll();
    }
}
function pauseAll(){

    globals.volume  = c.Sound.volume;
    console.log(globals.volume+ ' GLOBAL VOLUME BEFORE LOCK DOWN');

    console.log(globals.volume+ ' audio tag VOLUME BEFORE LOCK DOWN');
    c.Sound.volume = 0;
        
   c.Sound.stop();
}


function resumeAll(){

    c.Sound.volume = globals.volume;
    playLoop('start');
}


function loadLocally()
{
 //   $.getJSON( "strings/strings_game1.json?callback=", function( data ) {


}
function resizeCanvas() {

    
    main.resize();
}


