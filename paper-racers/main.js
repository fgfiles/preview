
////////////////////////////////////////////////////////////////INITIAL SETUP

//Version number displayed on main preloader (comment out/delete to remove debugging info)..
//var version = 2.32 ;

//Use retina assets on retina devices..
var retina = true;

//Localisation file format. 'xml' or 'json'..
var localisationFormat = "xml";

//Force 'low end ipad mode' for testing..
var forceLowEndIPad = false;

//Base URL and initial libs..
var game_base_path = "";


//Best to define this here so it's easy to comment out/in once we get to test environment..
var initialLibraries = [
   game_base_path+"js/libs/domReady.js"
]; 

var deeplink_config_file = "deeplink-config.json";

/////////////////////////////////////////////////////////////////

//Remove this entirely when not needed - 'desktop' mode override..
//var forceMobile = true;

//Console.log issue: If no 'console' object exists (ie7 + 8 + 9 with no debug tools enabled (?!?)), replace this with a blank function..
//if(!window.console) window.console = {};
//if(!window.console.log) window.console.log = function(){};

////////////////////////////////////////////////////////////////SETUP FOR INTERNET EXPLORER 7 + 8 MESSAGE

//var background_image = game_base_path + "media/images/base/ie-message-background.jpg";

////////////////////////////////////////////////////////////////SETTING UP GENERAL PAGE PARAMS AND STARTING GAME LOAD

//Checking for IE..
var ieVersion = ieCheck();

//Append CSS..
var loadcss = document.createElement('link');
loadcss.setAttribute("rel", "stylesheet");
loadcss.setAttribute("type", "text/css");
loadcss.setAttribute("type", "text/css");
loadcss.setAttribute("href", game_base_path+"styles/main-styles.css");
document.getElementsByTagName("head")[0].appendChild(loadcss);


//Create game in global scope..
var game;

//Game container div reference..
var gameContainer;

//Pixi in global scope..
var PIXI;

var MobileDetect;

var doobStats = false;

//GamesGrid paths..
requirejs.config({
    waitSeconds : 30,
    paths : {
      
        'md': game_base_path+"js/libs/mobile-detect",
        'pixi': game_base_path + "minifiedjs/pixi.min"
    }
});

//Set up mark up once page context DOM is ready..
require(initialLibraries, function(domReady){

   
domReady(function (){
        //Dom is ready..
        gameContainer = document.getElementById('og-game-holder');

        var touchIcon1 = document.createElement('link');
        var touchIcon2 = document.createElement('link');
        var touchIcon3 = document.createElement('link');
        var touchIcon4 = document.createElement('link');

        touchIcon1.setAttribute("rel", "apple-touch-icon");
        touchIcon2.setAttribute("rel", "apple-touch-icon");
        touchIcon3.setAttribute("rel", "apple-touch-icon");
        touchIcon4.setAttribute("rel", "apple-touch-icon");

        touchIcon2.setAttribute("sizes", "72x72");
        touchIcon3.setAttribute("sizes", "114x114");
        touchIcon4.setAttribute("sizes", "144x144");

        touchIcon1.setAttribute("href", game_base_path+"touch-icon-iphone.png");
        touchIcon2.setAttribute("href", game_base_path+"touch-icon-ipad.png");
        touchIcon3.setAttribute("href", game_base_path+"touch-icon-iphone-retina.png");
        touchIcon4.setAttribute("href", game_base_path+"touch-icon-ipad-retina.png");

        var webAppCapable = document.createElement('meta');
        webAppCapable.setAttribute("name", "apple-mobile-web-app-capable");
        webAppCapable.setAttribute("content", "yes");

        document.getElementsByTagName("head")[0].appendChild(touchIcon1);
        document.getElementsByTagName("head")[0].appendChild(touchIcon2);
        document.getElementsByTagName("head")[0].appendChild(touchIcon3);
        document.getElementsByTagName("head")[0].appendChild(touchIcon4);
        document.getElementsByTagName("head")[0].appendChild(webAppCapable);


        if(ieVersion > 8 || ieVersion == undefined){
            beginAppLoad();
        }else{
            initIEMessage();
        }
    });

});


//Make sure game gets and retains focus on desktop in page context when clicked..
window.addEventListener("click", function(){
    window.focus();
});

////////////////////////////////////////////////////////////////STARTING GAME LOAD



function beginAppLoad(){

    require(['pixi', 'md'], function(pixi, md){
        
        MobileDetect = md;

        require([
           game_base_path+"minifiedjs/game.min.js"
          
        ], function(){
            initGame(game_base_path, visualAssets,  audioAssets, ieVersion, retina, deeplink_config_file, forceLowEndIPad, localisationFormat);
        });

    });

}


function initGame(base_path, visualAssets, audioAssets, ieVersion, retina, deeplink_config_file, forceLowEndIPad, localisationFormat){

    var gameMarkUp;

    //During development we use a version number on the game, we need to make sure if its taken out later it doesn't cause any issues..
    if(!window["version"]){
        gameMarkUp = '<div id="game-holder"></div><div id="scroll-overlay"></div><div id="rotate-overlay"></div>';
    }else{
        gameMarkUp = '<div id="game-debug-info-area">Version: '+window["version"]+'<br/> Base path: '+game_base_path+'</div><div id="game-holder"></div><div id="scroll-overlay"></div><div id="rotate-overlay"></div>';
    }


    gameContainer.innerHTML = gameMarkUp;


    if(document.getElementById("game-debug-info-area")){
        var debugBox = document.getElementById("game-debug-info-area");
        debugBox.onclick = function(){debugBox.style.display = "none"}
        
        ;
    }
    
    game = new Game(base_path, "game-holder", visualAssets, audioAssets, ieVersion, retina, deeplink_config_file, localisationFormat); //Version (displayed on preloader for debugging), base path, string to get main holder div..
    
    game.addScene(LoadingScene);
    game.addScene(RaceScene, true);
    game.addScene(SelectTeamScene, true);
    game.addScene(SelectCarScene, true);
    game.addScene(GarageScene, true);
    game.addScene(PaintScene);
    game.addScene(StickersScene);
    game.addScene(WheelsScene);
    game.addScene(AccessoriesScene);
    game.addScene(AchievementsScene);
    game.addScene(SelectTrackScene);
    
    game.addScene(StartScene);
    game.addScene(TitleScene);
    game.addScene(HelpScene);
  
   

    game.addScene(GameoverScene);

    game.initialise(
        //1024, 625, //HD size
        1024, 598, //HD size
        "landscape",//Target orientation
        60,//FPS
        [
            "global",
            "ui-assets",
            "global-audio"   
        ],
        forceLowEndIPad
    );

}

function initIEMessage(){

    if(ie_message_enabled == false){
        return;
    }

    var gameMarkUp = '<div id="ie-message-holder"><div id="ie-message"><p>Oh no! It looks like you need to update your browser before you\'ll be able to play this game. </p></div></div>';
    gameContainer.innerHTML = gameMarkUp;

  

    var ieMessageContainer = document.getElementById('ie-message');
    //ieMessageContainer.style.backgroundImage = 'url('+background_image+')';
    //ieMessageContainer.style.backgroundRepeat = 'no-repeat';

    var ieMessageContainerHolder = document.getElementById('ie-message-holder');
    ieMessageContainerHolder.style.backgroundImage = 'url('+background_image+')';
    ieMessageContainerHolder.style.backgroundRepeat = 'repeat-x';

    var htmlContainer = document.getElementsByTagName('html');
    htmlContainer[0].style.backgroundColor = '#fef1c2';
}



function ieCheck(){
    var undef, v = 3, div = document.createElement('div');
    while (
        div.innerHTML = '<!--[if gt IE '+(++v)+']><i></i><![endif]-->',
            div.getElementsByTagName('i')[0]
        );
    var isIE11 = !!window.MSStream;
    if(isIE11){
        v = 10;
    }
    return v > 4 ? v : undef;
}

//This is added because when PIXI replaces an IMG 'src' with 'null', FF and IE fires a 404 error so instead we replace it with
//a tiny image (recovers the memory but doesn't fire a 'null' 404)..
var nullImage = game_base_path + "media/images/base/ui/null-image.png";

