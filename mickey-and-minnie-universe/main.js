
////////////////////////////////////////////////////////////////INITIAL SETUP

//Version number displayed on main preloader (comment out/delete to remove debugging info)..
//var version = 1.4;

//Localisation setting.. relates to localised assets folder name..
var loc = "en";

//Use retina assets on retina devices..
var retina = true;

//remember how many stars earned and what outfits are unlocked
var enableStorage = true;

//used in stats tracking
var APP_ID = "milesblastasticrescue_bd_bd";
var APP_SECRET = "FD 8614C85C-DBFC-41B5-A757-B4517CA64344:5579CE43B34F6D9A46467AD0D5D9AFBA0FF8A4755717BF8D";
var APP_LOCALE ='en_US';
var statsEnabled = false;

//This gets prepended to the % of assets loaded in the preloader. Set based on language. Format in game: "Loading 50%"
var preloaderLoadingPrefix = "Loading";

//Base URL and initial libs..


var game_base_path = "";




//Best to define this here so it's easy to comment out/in once we get to test environment..
var initialLibraries = [
   game_base_path+"js/libs/domReady.js" ,
   
];

//Remove this entirely when not needed - 'desktop' mode override..
//var forceMobile = true;

//Console.log issue: If no 'console' object exists (ie7 + 8 + 9 with no debug tools enabled (?!?)), replace this with a blansk function..
//if(!window.console) window.console = {};
//if(!window.console.log) window.console.log = function(){};


////////////////////////////////////////////////////////////////SETUP FOR INTERNET EXPLORER 7 + 8 MESSAGE

//var background_image = game_base_path + "media/images/base/ie-message-background.jpg";

////////////////////////////////////////////////////////////////SETTING UP GENERAL PAGE PARAMS AND STARTING GAME LOAD

//Checking for IE..
var ieVersion = ieCheck();

//Exit button URL
//var exitURL = //

//Append CSS
var loadcss = document.createElement('link');
loadcss.setAttribute("rel", "stylesheet");
loadcss.setAttribute("type", "text/css");
loadcss.setAttribute("type", "text/css");
loadcss.setAttribute("href", game_base_path+"styles/main-styles.css");
document.getElementsByTagName("head")[0].appendChild(loadcss);

//Blank 'stats' var - used later to give ability to call istats
var stats = new statsTracker();

//Blank 'temporaryStorage' var - used later to access GAPI TemporaryStorage lib..
var temporaryStorage;

//Create game in global scope..
var game;

//Game container div reference..
var gameContainer;

//Pixi in global scope..
var PIXI;

var MobileDetect;

//var doobStats = true;

//GamesGrid paths..
requirejs.config({ waitSeconds:0,
    paths : {
      
        'pixi': game_base_path + "js/libs/pixi.dev",
        'md': game_base_path+"js/libs/mobile-detect"
       // 'pixi': game_base_path + "minifiedjs/pixi.min"
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

////////////////////////////////////////////////////////////////STARTING GAME LOAD

/*function beginAppLoad(){

    require(['pixi', 'md'], function(pixi, md){

        
        MobileDetect = md;

        require([

            //game_base_path+"js/libs/howler.js",
            game_base_path+"js/libs/howler.core.js",
            game_base_path+"js/libs/soundmanager2.js",
            game_base_path+"js/libs/Stats.js",
            game_base_path+"js/libs/typedarrays.js",
            game_base_path+"js/libs/TweenMax.js",
            game_base_path+"js/libs/TimelineMax.js",
            game_base_path+"js/libs/pixi-spine.js",
            game_base_path+"js/libs/minAjax.js",
            game_base_path+"js/libs/p2.js",
            game_base_path+"js/display/display-object-container.js",
            game_base_path+"media/strings/strings.js"

        ], function(){


                require([

                    game_base_path+"js/visual-assets.js",
                    game_base_path+"js/audio-assets.js",
                  

                    game_base_path+"js/scenes/scene.base.js",
                    game_base_path+"js/display/sprite.js",
                    game_base_path+"js/display/spine.js",
                    game_base_path+"js/display/movie-clip.js",
                    game_base_path+"js/display/tiling-sprite.js",
                    game_base_path+"js/display/displacement-map-filter.js",
                    game_base_path+"js/display/bitmap-text.js",

                    game_base_path+"js/components/particle-burst.js",
                    game_base_path+"js/components/particle-stream.js",
                    game_base_path+"js/components/hub-panel.js",
                    game_base_path+"js/components/store-panel.js",
                    game_base_path+"js/components/store-screen.js",
                    game_base_path+"js/components/dynamic-label.js",
                    game_base_path+"js/components/core-data.js",
                    game_base_path+"js/components/star-dock.js",
                    game_base_path+"js/components/well-done.js",
                    game_base_path+"js/components/sorting-item-chef.js",
                    game_base_path+"js/components/sorting-item-pirate.js",
                    game_base_path+"js/components/sorting-item-hint.js",
                    game_base_path+"js/components/hint-item.js",
                    game_base_path+"js/components/draggable-soup-bowl.js",
                    game_base_path+"js/components/management-item-pan.js",
                    game_base_path+"js/components/management-item-rod.js",
                    game_base_path+"js/components/management-item-plant.js",
                    game_base_path+"js/components/lane-mechanic-item-manager.js",
                    game_base_path+"js/components/sequencing-button.js",
                    game_base_path+"js/components/parrallax-layer.js",
                    game_base_path+"js/components/search-item.js",
                    game_base_path+"js/components/search-item-hint.js",
                    game_base_path+"js/components/difficulty-select.js",
                    game_base_path+"js/components/xml-manager.js",
                    game_base_path+"js/components/help/help-fireman-a.js",
                    game_base_path+"js/components/help/help-fireman-b.js",
                    game_base_path+"js/components/help/help-chef-a.js",
                    game_base_path+"js/components/help/help-chef-b.js",
                    game_base_path+"js/components/help/help-camping-a.js",
                    game_base_path+"js/components/help/help-camping-b.js",
                    game_base_path+"js/components/physics-manager-space.js",
                    game_base_path+"js/components/physics-mechanic-item-manager-space.js",
                   
                  
                ], function(){

                    require([
                        game_base_path+"js/scenes/scene.splash.js",                  
                        game_base_path+"js/scenes/scene.xml-error-message.js",
                        game_base_path+"js/scenes/scene.loading.js",
                        game_base_path+"js/scenes/scene.secondary-loading.js",
                        game_base_path+"js/scenes/scene.hub.js",
                        game_base_path+"js/scenes/scene.store.js",                   
                        game_base_path+"js/scenes/scene.animation.js",
                        //game_base_path+"js/scenes/scene.spine-test.js",
                        game_base_path+"js/scenes/games/scene.chef-game-a.js",
                        game_base_path+"js/scenes/games/scene.chef-game-b.js",
                        game_base_path+"js/scenes/games/scene.camping-game-a.js",
                        game_base_path+"js/scenes/games/scene.camping-game-b.js",
                        game_base_path+"js/scenes/games/scene.fireman-game-a.js",
                        game_base_path+"js/scenes/games/scene.fireman-game-b.js",
                        game_base_path+"js/scenes/games/scene.space-game-a.js",
                        game_base_path+"js/scenes/games/scene.space-game-b.js",
                        game_base_path+"js/scenes/games/scene.space-game-b-2.js",
                        game_base_path+"js/scenes/games/scene.rock-game-b.js",
                        game_base_path+"js/scenes/games/scene.rock-game-b-2.js",
                        game_base_path+"js/scenes/games/scene.pirate-game-a.js",
                        game_base_path+"js/scenes/games/scene.farm-game-a.js",
                      //  game_base_path+"js/scenes/scene.sequencing-mechanic.js",

                        game_base_path+"js/scenes/animation/scene.animation-thinking-scene.js",

                        game_base_path+"js/scenes/animation/scene.animation-intro-chef-1.js",
                        game_base_path+"js/scenes/animation/scene.animation-intro-chef-2.js",
                        game_base_path+"js/scenes/animation/scene.animation-intro-chef-3.js",
                        game_base_path+"js/scenes/animation/scene.animation-game-a-chef-1.js",
                        game_base_path+"js/scenes/animation/scene.animation-game-b-chef-1.js",
                        game_base_path+"js/scenes/animation/scene.animation-game-b-chef-2.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-chef-1.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-chef-2.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-chef-3-A.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-chef-3-B.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-chef-4-A.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-chef-4-B.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-chef-5-A.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-chef-5-B.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-chef-6-A.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-chef-6-B.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-chef-7.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-chef-8.js",

                        game_base_path+"js/scenes/animation/scene.animation-intro-camping-1.js",
                        game_base_path+"js/scenes/animation/scene.animation-intro-camping-2.js",
                        game_base_path+"js/scenes/animation/scene.animation-intro-camping-3.js",
                        game_base_path+"js/scenes/animation/scene.animation-intro-camping-4.js",
                        game_base_path+"js/scenes/animation/scene.animation-game-a-camping-1.js",
                        game_base_path+"js/scenes/animation/scene.animation-game-a-camping-2.js",
                        game_base_path+"js/scenes/animation/scene.animation-game-b-camping-1.js",
                        game_base_path+"js/scenes/animation/scene.animation-game-b-camping-2.js",
                        game_base_path+"js/scenes/animation/scene.animation-game-b-camping-3.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-camping-1.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-camping-2.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-camping-3-a.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-camping-3-b.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-camping-4-a.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-camping-4-b.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-camping-5-a.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-camping-6-a.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-camping-6-b.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-camping-7-a.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-camping-7-b.js",
              
                        game_base_path+"js/scenes/animation/scene.animation-intro-fireman-1.js",
                        game_base_path+"js/scenes/animation/scene.animation-intro-fireman-2.js",
                        game_base_path+"js/scenes/animation/scene.animation-intro-fireman-3.js",
                        game_base_path+"js/scenes/animation/scene.animation-intro-fireman-4.js",
                        game_base_path+"js/scenes/animation/scene.animation-intro-fireman-5.js",
                        game_base_path+"js/scenes/animation/scene.animation-intro-fireman-6.js",
                        game_base_path+"js/scenes/animation/scene.animation-game-a-fireman-1.js",
                        game_base_path+"js/scenes/animation/scene.animation-game-b-fireman-1.js",
                        game_base_path+"js/scenes/animation/scene.animation-game-b-fireman-2.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-fireman-1.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-fireman-2.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-fireman-3-A.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-fireman-3-B.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-fireman-4-A.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-fireman-4-B.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-fireman-5-A.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-fireman-5-B.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-fireman-7.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-fireman-8-A.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-fireman-8-B.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-fireman-9-A.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-fireman-9-B.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-fireman-10.js",

                        game_base_path+"js/scenes/animation/scene.animation-intro-farm-1.js",
                        game_base_path+"js/scenes/animation/scene.animation-intro-farm-2.js",
                        game_base_path+"js/scenes/animation/scene.animation-intro-farm-3.js",
                        game_base_path+"js/scenes/animation/scene.animation-game-a-farm-1.js",
                        game_base_path+"js/scenes/animation/scene.animation-game-a-farm-2.js",
                        game_base_path+"js/scenes/animation/scene.animation-game-b-farm-1.js",
                        game_base_path+"js/scenes/animation/scene.animation-game-b-farm-2.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-farm-1.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-farm-2.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-farm-3-A.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-farm-3-B.js",
                        game_base_path+"js/scenes/animation/scene.animation-outro-farm-4-A.js",

                        game_base_path+"js/scenes/animation/scene.animation-silly-surprise-fireman.js",
                        game_base_path+"js/scenes/animation/scene.animation-silly-surprise-chef.js",
                        game_base_path+"js/scenes/animation/scene.animation-silly-surprise-camping.js",
                        game_base_path+"js/scenes/animation/scene.animation-silly-surprise-rock.js",
                        game_base_path+"js/scenes/animation/scene.animation-silly-surprise-pirate.js",
                        game_base_path+"js/scenes/animation/scene.animation-silly-surprise-farm.js",
                        game_base_path+"js/scenes/animation/scene.animation-silly-surprise-space.js",

                      
                
                     

                        game_base_path+"js/ui/ui.js",
                        game_base_path+"js/ui/ui-button.js",
                        game_base_path+"js/game.js",
                        game_base_path+"js/audio/AudioManagerMk2.js",
                        game_base_path+"js/loading/load-module.js",

                        game_base_path+"js/display/display-store.js"

                    ], function(){

                       //initGame(game_base_path, loc, visualAssets,  audioAssets, preloaderLoadingPrefix, ieVersion, exitURL);
                       initGame(game_base_path, loc, visualAssets,  audioAssets, preloaderLoadingPrefix, ieVersion, retina);

                    });

                });
        });
    });
}*/


function beginAppLoad(){

    require(['pixi', 'md'], function(pixi, md){

        PIXI = pixi;
        MobileDetect = md;

        require([
         game_base_path+"media/strings/strings.js",
           game_base_path+"minifiedjs/game.min.js"
          
        ], function(){
            initGame(game_base_path, loc, visualAssets,  audioAssets, preloaderLoadingPrefix, ieVersion, retina);
        });

    });

}


//function initGame(base_path, loc, visualAssets, audioAssets, preloaderLoadingPrefix, ieVersion, exitURL){
function initGame(base_path, loc, visualAssets, audioAssets, preloaderLoadingPrefix, ieVersion, retina){

    var gameMarkUp;

    //During development we use a version number on the game, we need to make sure if its taken out later it doesn't cause any issues..
    if(!window["version"]){
        gameMarkUp = '<div id="game-holder"></div><div id="scroll-overlay"></div><div id="rotate-overlay"></div>';
    }else{
        gameMarkUp = '<div id="game-debug-info-area">Version: '+window["version"]+'<br/> Language: '+loc+'<br/> Base path: '+game_base_path+'</div></div><div id="game-holder"></div><div id="scroll-overlay"></div><div id="rotate-overlay"></div>';
    }

    gameContainer.innerHTML = gameMarkUp;

    if(document.getElementById("game-debug-info-area")){
        var debugBox = document.getElementById("game-debug-info-area");
        debugBox.onclick = function(){debugBox.style.display = "none"};
    }
    
    game = new Game(base_path, loc, "game-holder", dictionary, visualAssets, audioAssets, preloaderLoadingPrefix, ieVersion, retina); //Version (displayed on preloader for debugging), base path, string to get main holder div..

    game.addScene(LoadingScene);
    game.addScene(SecondaryLoadingScene);
    game.addScene(ErrorMessageScene);
    game.addScene(SplashScene);
    game.addScene(HubScene);
    game.addScene(StoreScene);
    game.addScene(ChefGameAScene);
    game.addScene(ChefGameBScene);
    game.addScene(CampingGameBScene);
    game.addScene(CampingGameAScene);
    game.addScene(FiremanGameAScene);
    game.addScene(FiremanGameBScene);
   // game.addScene(SpaceGameBScene);
    //game.addScene(SpaceGameB2Scene);
   // game.addScene(SpaceGameAScene);
   // game.addScene(RockGameBScene);
   // game.addScene(RockGameB2Scene);
   // game.addScene(PirateGameAScene);
   // game.addScene(FarmGameAScene);
   // game.addScene(SequencingMechanicScene);

    game.addScene(AnimationThinkingScene);

    game.addScene(AnimationIntroChef1Scene);
    game.addScene(AnimationIntroChef2Scene);
    game.addScene(AnimationIntroChef3Scene);
    game.addScene(AnimationGameAChef1Scene);
    game.addScene(AnimationGameBChef1Scene);
    game.addScene(AnimationGameBChef2Scene);
    game.addScene(AnimationOutroChef1Scene);
    game.addScene(AnimationOutroChef2Scene);
    game.addScene(AnimationOutroChef3AScene);
    game.addScene(AnimationOutroChef3BScene);
    game.addScene(AnimationOutroChef4AScene);
    game.addScene(AnimationOutroChef4BScene);
    game.addScene(AnimationOutroChef5AScene);
    game.addScene(AnimationOutroChef5BScene);
    game.addScene(AnimationOutroChef6AScene);
    game.addScene(AnimationOutroChef6BScene);
    game.addScene(AnimationOutroChef7Scene);
    game.addScene(AnimationOutroChef8Scene);

    game.addScene(AnimationIntroCamping1Scene);
    game.addScene(AnimationIntroCamping2Scene);
    game.addScene(AnimationIntroCamping3Scene);
    game.addScene(AnimationIntroCamping4Scene);
    game.addScene(AnimationGameACamping1Scene);
    game.addScene(AnimationGameACamping2Scene);
    game.addScene(AnimationGameBCamping1Scene);
    game.addScene(AnimationGameBCamping2Scene);
    game.addScene(AnimationGameBCamping3Scene);
    game.addScene(AnimationOutroCamping1Scene);
    game.addScene(AnimationOutroCamping2Scene);
    game.addScene(AnimationOutroCamping3AScene);
    game.addScene(AnimationOutroCamping3BScene);
    game.addScene(AnimationOutroCamping4AScene);
    game.addScene(AnimationOutroCamping4BScene);
    game.addScene(AnimationOutroCamping5AScene);
    game.addScene(AnimationOutroCamping6AScene);
    game.addScene(AnimationOutroCamping6BScene);
    game.addScene(AnimationOutroCamping7AScene);
    game.addScene(AnimationOutroCamping7BScene);

    game.addScene(AnimationIntroFireman1Scene);
    game.addScene(AnimationIntroFireman2Scene);
    game.addScene(AnimationIntroFireman3Scene);
    game.addScene(AnimationIntroFireman4Scene);
    game.addScene(AnimationIntroFireman5Scene);
    game.addScene(AnimationIntroFireman6Scene);
    game.addScene(AnimationGameAFireman1Scene);
    game.addScene(AnimationGameBFireman1Scene);
    game.addScene(AnimationGameBFireman2Scene);
    game.addScene(AnimationOutroFireman1Scene);
    game.addScene(AnimationOutroFireman2Scene);
    game.addScene(AnimationOutroFireman3AScene);
    game.addScene(AnimationOutroFireman3BScene);
    game.addScene(AnimationOutroFireman4AScene);
    game.addScene(AnimationOutroFireman4BScene);
    game.addScene(AnimationOutroFireman5AScene);
    game.addScene(AnimationOutroFireman5BScene);
    game.addScene(AnimationOutroFireman7Scene);
    game.addScene(AnimationOutroFireman8AScene);
    game.addScene(AnimationOutroFireman8BScene);
    game.addScene(AnimationOutroFireman9AScene);
    game.addScene(AnimationOutroFireman9BScene);
    game.addScene(AnimationOutroFireman10Scene);

  /*  game.addScene(AnimationIntroFarm1Scene);
    game.addScene(AnimationIntroFarm2Scene);
    game.addScene(AnimationIntroFarm3Scene);
    game.addScene(AnimationGameAFarm1Scene);
    game.addScene(AnimationGameAFarm2Scene);
    game.addScene(AnimationGameBFarm1Scene);
    game.addScene(AnimationGameBFarm2Scene);
    game.addScene(AnimationOutroFarm1Scene);
    game.addScene(AnimationOutroFarm2Scene);
    game.addScene(AnimationOutroFarm3AScene);
    game.addScene(AnimationOutroFarm3BScene);
    game.addScene(AnimationOutroFarm4AScene);*/

     game.addScene(AnimationSillySurpriseFiremanScene);
     game.addScene(AnimationSillySurpriseChefScene);
     game.addScene(AnimationSillySurpriseCampingScene);
     game.addScene(AnimationSillySurpriseRockScene);
     game.addScene(AnimationSillySurpriseFarmScene);
     game.addScene(AnimationSillySurpriseSpaceScene);
     game.addScene(AnimationSillySurprisePirateScene);

  

    //game.addScene(SpineTestScene);

    game.addScene(AnimationScene);
  
    
    game.setLoadingScreen("loadingScene");

    game.initialise(
        
        1024, 683, //HD size
        "landscape",//Target orientation
        60,//FPS
        [
           "splash-scene-assets",
            "hub-scene-assets",
            "global-helpscreen",
          // "game-rock-b-assets",

            //"intro-farm",



          //  "thinking-scene-shared",
            //"thinking-scene-fireman",
        
            //"thinking-scene-camping",
            //"thinking-scene-fireman",
            //"thinking-scene-rock",
           // "thinking-scene-space",
            //"thinking-scene-farm",
            //"thinking-scene-pirate",

            //"silly-scene-background-fireman",
           //"silly-scene-background-camping",
             //"silly-scene-background-rock",
            //"silly-scene-background-space",
           // "silly-scene-background-farm",
            //"silly-scene-background-pirate",



          //  "outro-fireman-7",

           /* "silly-scene-background-camping",

            /*"silly-scene-background-camping",

            "silly-scene-background-rock",
            "silly-scene-background-space",
            "silly-scene-background-farm",
            "silly-scene-background-pirate",*/



          //  "donald-scene-chef",
          //  "outro-camping-4b-assets-shared",

           // "donald-scene-farm",
           // "outro-camping-4b-assets-shared",



            //"game-pirate-a-assets-space",
           // "game-pirate-a-assets-shared",
             //"game-space-b-assets",

           // "game-camping-a-assets-shared",
           // "game-camping-a-assets-chef",

            // "game-camping-b-assets-shared",
           // "game-camping-b-assets-chef",
           // "game-b-camping-audio",



         //  "game-chef-b-assets-chef",
          // "game-chef-b-assets-shared",

           // "game-chef-a-assets-camping",
          //  "game-chef-a-assets-shared",
            //"game-fireman-b-assets",


           // "store-scene-assets",

            

            //"game-fireman-a-assets-chef",



           //"game-chef-a-assets-shared",
           //"game-chef-a-assets-chef",
          // "game-b-chef-audio",
           



       // "intro-farm",

        //"game-farm-a-1-assets-shared",
        //"game-farm-a-1-assets-chef",
        //"game-farm-a-2-assets-shared",
        //"game-farm-a-2-assets-chef",

       // "game-farm-b-1-assets-shared",
        //"game-farm-b-1-assets-chef",
        //"game-farm-b-2-assets-shared",
        //"game-farm-b-2-assets-chef",

        //"outro-farm-1-assets-shared",
        //"outro-farm-1-assets-chef", 

        //"outro-farm-2-assets-shared",
        //"outro-farm-2-assets-chef", 
           
        //"outro-farm-3-a-assets-shared",
        //"outro-farm-3b-assets-shared",
        //"outro-farm-3b-assets-chef",
        //outro-farm-4-a-assets-shared",



           // "game-pirate-a-assets-space",
          //  "game-pirate-a-assets-shared",
        
            "ui-assets",
            "global-audio",
            "hub-audio",
            "global",

          // "game-b-rock-audio"


           //  "store-audio",
             // "outro-fireman-audio"

             


           // "grey-box-shared",
           //"physics-mechanic",
          // "game-space-a-assets"

        ]
    );
    //game.startStats();
}

function isLocalStorageAvailable()
{
    if (typeof localStorage !== 'undefined') {
        return true
    } else {
        return false
    }
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
var nullImage = game_base_path + "media/images/@1x/base/global/null-image.png";

function statsTracker(){};
//statsTracker.prototype.logError = function(e){};
//statsTracker.prototype.logUserActionEvent = function(action_type, action_name, additional_params){};

///////////////////////////////////////////////////////////////////////////////////////////////////////PLAYDOM

statsTracker.prototype.playdomTrack = function(method, context, action, type, message, level, machine, os_version) {
    var obj = {
        'method': method || '',
        'context': context || '',
        'action': action || '',
        'type': type || '',
        'message': message || '', 
        'level': level || '',
        'machine:' :  machine || '',
        'os_version:' :  os_version || ''         
    }

    if(statsEnabled == true)
    return this.playdomTrackInternal(obj);
}
statsTracker.prototype.playdomTrackInternal = function (eventObj) {
    

    var playdomUrl = 'https://api.disney.com/datatech/serverlog/v1/json';
    var dataObj = {
        app:                APP_ID,
        user_id:            getUDID(),
        app_locale:         APP_LOCALE,
        transaction_id:     getSession(),
        browser_id:         getUDID(),
        network:            'bd',
        view_network:       'bd',
               
    };

    for(var key in eventObj) {
        dataObj[key] = eventObj[key];
    }
  //  console.log("playdomTrack");
 //   console.log(dataObj); 


    minAjax({
        requestType:"Authorization",
        requestValue:APP_SECRET,
        url:playdomUrl,//request URL
        type:"POST",//Request type GET/POST
        //Send Data in form of GET/POST
        data:JSON.stringify(dataObj),
        //CALLBACK FUNCTION with RESPONSE as argument
        success: function(data){
          alert(data);
        }

    });
    return false;
    
    
}

function saveProgress()
{

    if(isLocalStorageAvailable() == false)
    return;

    if(enableStorage && enableStorage == true )
    {
          localStorage.setItem('currentStars', Game.coreData.currentStars);
    localStorage.setItem('firstTime', false);
    Game.coreData.firstTime = false;

    console.log('saving currentstars as = '+Game.coreData.currentStars)

    var stringObject = JSON.stringify(Game.coreData.outfitData)
    localStorage.setItem('outfitData', stringObject);

    }
    else
    localStorage.clear();  
  
  //  console.log('STORING: ', 'currentStars: '+Game.coreData.currentStars,
                          //  'outfitData: '+stringObject);

    //localStorage.clear();

}

function restoreProgress()
{
    if(!enableStorage)
        return


    var savedStars = localStorage.getItem('currentStars');

    if(savedStars > 0)
    Game.coreData.currentStars = Number(savedStars); 

    //console.log('checking first time:', localStorage.getItem('firstTime'))

    if(localStorage.getItem('firstTime') == 'false')
    Game.coreData.firstTime = false;

     if(localStorage.getItem('outfitData'))
     {


         var obj = localStorage.getItem('outfitData'); 

         if(obj)
         var parsedObj =  JSON.parse(obj);
      

        if(parsedObj && parsedObj.length)
        {    

            for (var i = 0; i < parsedObj.length; i++)
            {
                //console.log(i)
              //  console.log('found outfit: '+parsedObj[i].id, parsedObj[i].isOwned, parsedObj[i].permanent)
            }
        }

         Game.coreData.outfitData = parsedObj;

    }
    if(parsedObj)
    {
        for(var i = 0; i < parsedObj.length; i++)
            {

                if(parsedObj[i].isOwned == true && parsedObj[i].permanent == true)
                Game.coreData.ownedOutfits ++;
            }
    }
    

   // console.log('getting current stars = ', Game.coreData.currentStars)
}


function getUDID() {
    UDID = localStorage.getItem('UDID');
    
    if(UDID=="" || UDID==null || UDID==undefined) {
        var s = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
        UDID = s.replace(/[xy]/g, function(c) { var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8); return v.toString(16); });
        
    }

    localStorage.setItem('UDID',UDID);
    
    
    return UDID;
}

function getSession() {
    var session = localStorage.getItem('session');
    if(session==null || session=="" || session==undefined) {
        var s = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
        session = s.replace(/[xy]/g, function(c) { var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8); return v.toString(16); });
    }
    
    localStorage.setItem('session',session);
    return session;
    
}


