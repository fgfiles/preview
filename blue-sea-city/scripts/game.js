var level;
var gameTimer;
var gamePaused = false;
var pausePressed = false;
var textStyle;
var textStyleMain; //use later if figure this out
var textStyleLight; //use later ""   ""
var loadingText;
var loadingThing;
var gravityConstant = 1000;
var pad1;
var showSplashScreen = true;
var showLoadStuff = true;
var fullScreenButton;
var fullScreenActualButton;
var exitedFullScreen = false;
var doneLoading = false;
var weatherGot = false;
var audioGot = false;
var testMax = 0;
var testCount = 0;
var testTotal = 0;
var testPrinted = false;
var restartIter = 0;
var playerPassedTutorial = false;

var leftKeyCode;
var rightKeyCode;
var jumpKeyCode;
var dashKeyCode;
var inventoryKeyCode;
var restartKeyCode;
var pauseKeyCode;

var interval;
//var lootListCache;

var CameraProp = {
    width: 1600*0.7, //1120
    height: 900*0.7, //630
    //width: 400,   //----- to go back comment this
    //height: 280,  //----- to go back comment this
};

// game canvas to scale
var game = new Phaser.Game(CameraProp.width, CameraProp.height,
        Phaser.CANVAS, 'gameDiv', 
        { 
            preload: preload, 
            create: create, 
            update: update, 
            render: render
        }, false, false); // The last variable is antialiasing
        
leftKeyCode = Phaser.Keyboard.LEFT;
rightKeyCode = Phaser.Keyboard.RIGHT;
jumpKeyCode = Phaser.Keyboard.Z;
dashKeyCode = Phaser.Keyboard.X;
inventoryKeyCode = Phaser.Keyboard.C;
restartKeyCode = Phaser.Keyboard.R;
pauseKeyCode = Phaser.Keyboard.F;
        
var WebFontConfig = {
    google: { families: ['Hind:300,400'] }  //Hind:300,400
};

textStyle = { //for most text in the game
        font: "Hind", //also can try "Hind Light" --> doesn't work
        fill: "#ffffff",//"#ffffff",
        fontSize: '60px',
        align: "right",
        shadowColor: 'rgba(0,0,0,0.5)',  //"#333333"
        shadowOffsetX: 3,
        shadowOffsetY: 3,
        shadowBlur: 8,
        shadowFill: true,
        shadowStroke: false
        }; 

function preload () {
    game.scale.pageAlignHorizontally = true; // Center canvas in browser
    loadingText = game.add.text(32, 32, '', { fill: '#ffffff' }); 
    game.load.onLoadStart.add(loadStart, this);
    game.load.onFileComplete.add(fileComplete, this);
    if(showSplashScreen){
        preloadFirstStuff();
        preloadScripts();
        preloadAssets();
        game.stage.disableVisibilityChange = true;
        if(checkCookie()){
            leftKeyCode = getCookie('leftKeyCode');
            rightKeyCode = getCookie('rightKeyCode');
            jumpKeyCode = getCookie('jumpKeyCode');
            dashKeyCode = getCookie('dashKeyCode');
            inventoryKeyCode = getCookie('inventoryKeyCode');
            pauseKeyCode = getCookie('pauseKeyCode');
            restartKeyCode = getCookie('restartKeyCode');
        }
        else{
            var days = 10;
            console.log("cookies set");
            setCookie('leftKeyCode',Phaser.Keyboard.LEFT,days);
            setCookie('rightKeyCode',Phaser.Keyboard.RIGHT,days);
            setCookie('jumpKeyCode',Phaser.Keyboard.Z,days);
            setCookie('dashKeyCode',Phaser.Keyboard.X,days);
            setCookie('inventoryKeyCode',Phaser.Keyboard.C,days);
            setCookie('pauseKeyCode',Phaser.Keyboard.F,days);
            setCookie('restartKeyCode',Phaser.Keyboard.R,days);
        }
        
    }
    game.physics.startSystem(Phaser.Physics.P2JS);
}

function create() {
    /* Old scale method */
    game.world.scale.setTo(2.5,2.5);
    game.world.setBounds(200,0,6800,1400);
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    
    gameTimer = game.time.create(false);
    //game.world.setMaterial(worldMaterial);
    game.camera.follow(playerSprite); 
    //only thing needed for camera to follow player. 
    //The dimensions of the camera are set in the 
    //game declaration and world.setBounds creates the entire world size
    
    //game.cache.addImage('fish_background','assets/sprites/UI/fishBackground.png');
    //console.log(game.cache);
    //console.log(game.cache.getKeys(Phaser.Cache.IMAGE));
    
    createAudio(game);
    playWave();
    playRunning();
    playPullingDoor();
    playLockpicking();
    
    //console.log("1");
    initializeLevel(game);
    createBackground(game);
    createLevel(game);
    createMisc(game);
    createDeath(game);
    createInput(game);
    //console.log('2');
    createLoot(game);
    createDoors(game);
    createWin(game);
    createPlayer(game);
    createBirds(game);
    createLootEmitters(game);
    updateLootEmitters(game); //so it only plays once at first
    createWave(game);
    //console.log('3');
    createCamera(game);
    createMainMenu(game);
    setUpLootColliders();
    setUpLevelColliders(game);
    setUpPlayerColliders(game);
    setUpDoorColliders(game);
    setUpWinColliders();
    setUpWaveCollider(game);
    setUpBirdColliders();
    //console.log('4');
    createUI(game);
    setupBackground(game);
    //console.log('5');
    
    game.physics.p2.gravity.y = gravityConstant;
    gameTimer.start();
    Phaser.Time.advancedTiming = true;
    gameTimer.pause();
    
    game.input.gamepad.start();
    pad1 = game.input.gamepad.pad1;
    //console.log(pad1);
    //console.log(Phaser.Gamepad);
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == pauseKeyCode) {
            if(gamePaused){
                pausePressed = true;
                //window.clearInterval(interval);
            }
        }
        if(choosingControl){
            chooseControl(event.keyCode);
            stopChoosingControl = true;
            fadingOutList[15][2] = true;
            fadingOutList[15][1] = -1;
            fadingOutList[15][4] = 0;
            fadingOutList[15][3] = 10;
            fadingOut = true;
        }
        if([9, 32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
            event.preventDefault();
        }
        //console.log(event.keyCode + "," + String.fromCharCode(event.keyCode));
    });
    
    /*
    document.addEventListener('keyup', function(event) {
        if(event.keyCode == 39) {
            pauseRight = false;
        }
        if(event.keyCode == 37){
            pauseLeft = false;
        }
        if(event.keyCode == 90){
            pauseJump = false;
        }
        if(event.keyCode == 88){
            pauseDash = false;
        }
    });
    */
    
    //fullScreenActualButton = game.add.button(game.world.centerX -4000,1025, 'full_screen_icon', goFull);
    //fullScreenActualButton.scale.set(0.25,0.25);
    //fullScreenActualButton.fixedToCamera = true;
    //fullScreenActualButton.anchor.x = 0;
    //fullScreenActualButton.anchor.y = 0;
    fullScreenButton = game.add.sprite(0,0, 'full_screen_icon');
    fullScreenButton.fixedToCamera = true;
    fullScreenButton.scale.set(0.25,0.25);
    if(showSplashScreen){
        fullScreenButton.alpha = 0;
    }
    else{
        //fullScreenButton.alpha = 0.5;
    }
    fullScreenButton.alpha = 0;
    fullScreenButton.anchor.x = -11.1;
    fullScreenButton.anchor.y = -5.8;
    doneLoading = true;
    createSplashScreen(game);
}

function update() {
    //console.log(Phaser.Time.fps);
    updateInput(game);
    if(splashScreenOn){
        if(showSplashScreen){
            updateSplashScreen(game);
        }
        else{
            skipSplashScreen();
        }
    }
    else if(mainMenuOn){
        updateMainMenu();
        updateAudio();
    }
    else if(!gamePaused){
        if(playerState == 'wave'){
            updateBackground(game);
            updatePlayer(game);
            updateWave(game);
            updateDeath(game);
            updateCamera(game);
            updateLootEmitters(game);
            updateUI(game);
            /*
            if(!testPrinted){
                console.log(testTotal/testCount);
                console.log(testMax);
                testPrinted = true;
            }
            */
        }
        else if(playerState == 'win'){
            updateBackground(game);
            updatePlayer(game);
            updateWave(game);
            updateUI(game);    
            updateCamera(game);
            //updateLootEmitters(game);
            updateAudio();
            updateWin();
        }
        else{
            updateMainMenu();
            updateBackground(game);
            updatePlayer(game);
            updateWave(game);
            updateUI(game);
            updateCamera(game);
            updateLootEmitters(game);
            updateBirds(game);
            //var start = performance.now();
            updateAudio();
            /*
            var dif = performance.now() - start;
            testTotal += dif;
            testCount++;
            if(dif > testMax){
                testMax = dif;
            }
            */
        }
    }
    updateGame();
}

function updateGame(){
    //console.log(wallJumping);
    if(exitedFullScreen || game.camera.bounds.height != 1200 || game.camera.bounds.y != -100){
        updateCameraBounds(game);
    }
    if(interactDown && !showSplashScreen && !mainMenuOn){
        game.sound.stopAll();
        loadingText.setText("");
        game.stage.backgroundColor = 'rgba(0,0,0,1)';
        //game.state.restart(true,true);
        game.state.restart();
    }
    if(pauseDown && !gamePaused){
        if(!mainMenuOn && !splashScreenOn && playerState != 'wave' && playerState != 'win'){
            gamePaused = true;
            game.paused = true;
            //game.paused = false
            //gamePaused = false;
            //pauseDown = false;
            //pauseLeft = left;
            //pauseRight = right;
            //pauseJump = jump;
            //pauseDash = dash;
            waitForUnpause();
        }
    }
    
}

function waitForUnpause(){
    var keepGoing = true;
    var pauseCounter = 0;
    /*
    while(keepGoing && pauseCounter < 3000){
        //updateInput(game);
        if(pausePressed){
            keepGoing + false;
            console.log("OMG");
        }
        pauseCounter++;
    }
    */
    interval = setInterval(function(){
        if(pausePressed){
            gamePaused = false;
            game.paused = false;
            pausePressed = false;
            window.clearInterval(interval);
            game.input.keyboard.reset(true);
        }
    },1);
    /*
    console.log("should be done");
    gamePaused = false;
    game.paused = false;
    pausePressed = true;
    //pauseDown = false;
    */
}

function goFull() {
    if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
        exitedFullScreen = true;
    }
    else
    {
        game.scale.startFullScreen(false);
    }

}

function loadStart(){
    loadingText.setText("");
    //game.stage.backgroundColor = 'rgba(0, 0, 0, 1)';
}

//prints the name of everything preloaded
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles){
    //console.log(cacheKey);
    if(cacheKey == 'audio'){
        audioGot = true;
    }
    else if(cacheKey == 'weather_alert'){
        weatherGot = true;
    }
    // else if(cacheKey == 'loading_bar'){
    //     var loaderBar = game.add.sprite(32, 100, 'loading_bar');
    //     game.load.setPreloadSprite(loaderBar);
    // }
    
    if(showSplashScreen){
        loadingText.setText(`Bad Weather Alert:\nBlue Sea City is Loading...\n${progress}%`);
    }
    if(audioGot && weatherGot){
        if(showLoadStuff){
            playSound('weatherAlert');
            showLoadStuff = false;
            //game.add.image('duck');
        }
        else{
            loadingText.setText("");
            //game.stage.backgroundColor = 'rgba(61, 77, 65, 1)';
            game.stage.backgroundColor = 'rgba(0,0,0,1)';
        }
        audioGot = false;
    }
    /*
    if(cacheKey == 'splashscreen'){
        console.log("Hey");
        createSplashScreen(game);
        interval = setInterval(function(){
            console.log("------");
            updateSplashScreen(game);
            if(doneLoading){
                window.clearInterval(interval);
                console.log("Done");
            }
        },1000 * 0.016);
    }
    */
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var key = getCookie("leftKeyCode");
    if (key != "") {
        return true;
    } else {
        return false;
    }
}

function render() {
    //game.debug.cameraInfo(game.camera, 32, 32,[40,40,40]); //just for camera stats and player sprite location on screen
    //game.debug.spriteCoords(playerSprite, 32, 500);
    //game.debug.timer(gameTimer,400,500);
}

function preloadFirstStuff(){
    // Loading Stuff (disabled for now)
    // game.load.image('loading_bar','assets/sprites/loader-bar.png');
    //SPLASH SCREEN
    game.load.image('duck','assets/sprites/loot/RubberDucky.png');
    game.load.audio('weather_alert','assets/audio/ambient/weather_alert_1.mp3');
    game.load.spritesheet('fish_people','assets/sprites/menu/splashScreenSpriteSheet.png',1280,720);
    game.load.image('fish_background','assets/sprites/UI/fishBackground.png');
    game.load.audio('fish_people_splash','assets/audio/menu/soundsprite.mp3');
}

function preloadScripts(){
    game.load.script('input','scripts/input.js');
    game.load.script('audio','scripts/audio.js');
    game.load.script('splashscreen','scripts/splashscreen.js');
    game.load.script('player','scripts/player.js');
    game.load.script('loot','scripts/loot.js');
    game.load.script('camera','scripts/camera.js');
    game.load.script('level','scripts/level.js');
    game.load.script('UI','scripts/interface.js');
    game.load.script('emitter','scripts/emitter.js');
    game.load.script('wave','scripts/wave.js');
    game.load.script('door','scripts/doors.js');
    game.load.script('background','scripts/background.js');
    game.load.script('death','scripts/death.js');
    game.load.script('mainmenu','scripts/mainmenu.js');
    game.load.script('win','scripts/win.js');
    game.load.script('birds','scripts/birds.js');
    game.load.script('misc','scripts/misc.js');
    game.load.script('webfontloader', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js')
}

function preloadAssets(){
    //game.load.image('dummy', 'assets/sprites/GTT_Character_0000_finalc.png');
    game.load.image('level','assets/level/greybox/full_level11.png');
    game.load.spritesheet('waterfall','assets/level/WATERFALL_ANIMATION.png',33,240);
    game.load.image('flood_lights','assets/level/greybox/levelFloodLights.png');
    game.load.image('inventory', 'assets/sprites/UI/inventory.png');
    game.load.image('background_1', 'assets/level/background/Map_Final_LandscapeSunset_VER4.png');
    game.load.image('title_name','assets/sprites/UI/title.png');
    game.load.image('mushroom_canopy','assets/sprites/menu/splashMushroomCanopy.png');
    
    //PLAYER, WAVE, AND DOOR
    game.load.spritesheet('player-main', 'assets/sprites/player/TGTT_MainCharacter_spriteSheet_recolor.png',64,64);
    //game.load.spritesheet('doors', 'assets/sprites/9Door SHEET.png', 24,46);
    game.load.spritesheet('wave-animation', 'assets/sprites/wave/TheWave_SpriteSheet.png',1366,716);
    game.load.spritesheet('wave-animation_down','assets/sprites/wave/TheWave_SpriteSheet_downscale.png',1366/2,716/2);
    game.load.spritesheet('doors', 'assets/sprites/9Door SHEET_VER 2.png',24,46);
    
    //AUDIO
    game.load.audio('music3','assets/audio/music/GameTheme_1_compress.mp3');
    
    //CHARACTER
    game.load.audio('jump_4','assets/audio/character/tsunamiThief_sfx_jumping_4.wav');
    game.load.audio('landing_2','assets/audio/character/tsunamiThief_sfx_landing_2.wav');
    game.load.audio('wall_collide_2','assets/audio/character/tsunamiThief_sfx_wallCollide_2.wav');
    game.load.audio('wall_jump_1','assets/audio/character/tsunamiThief_sfx_wallJump_1.wav');
    game.load.audio('dash_2','assets/audio/character/tsunamiThief_sfx_dashing_2.wav');
    game.load.audio('door_break','assets/audio/door_break_temp_1.wav');
    game.load.audio('door_open','assets/audio/door_open_temp_1.wav');
    game.load.audio('skid_2','assets/audio/character/tsunamiThief_sfx_skidding_2.wav');
    game.load.audio('running_1','assets/audio/character/tsunamiThief_sfx_running_1.wav');
    game.load.audio('pulling_door_1','assets/audio/character/tsunamiThief_sfx_pullingDoor_1.wav');
    game.load.audio('lockpicking_1','assets/audio/character/tsunamiThief_sfx_lockpicking_1.wav');
    game.load.audio('loot_pickup','assets/audio/character/pickup.mp3');
    //WAVE
    game.load.audio('wave_ripple','assets/audio/wave_ripple_1.wav');
    game.load.audio('wave_rumble','assets/audio/wave_rumble_temp_1.wav');
    game.load.audio('wave_siren','assets/audio/ambient/SirenMix3_Fade.mp3');
    //MENU
    game.load.audio('menu_select_1','assets/audio/menu/tsunamiThief_sfx_menuSelect_1.wav');
    game.load.audio('menu_switch_1','assets/audio/menu/tsunamiThief_sfx_menuSwitch_1.wav');
    game.load.audio('mushroom_sound','assets/audio/menu/mushrooms_1.mp3');
    //MISC
    game.load.audio('bird_flap_1','assets/audio/ambient/tsunamiThief_sfx_birdFlap_1.wav');
    game.load.audio('bird_flap_2','assets/audio/ambient/tsunamiThief_sfx_birdFlap_2.wav');
    
    //LOOT IMAGES
    game.load.image('itemBox','assets/sprites/loot/ItemBox.png'); 
    
    game.load.image('clock','assets/sprites/loot/AlarmClock.png');
    game.load.image('cage','assets/sprites/loot/Bird.png');
    game.load.image('tree','assets/sprites/loot/Bonsai.png');
    game.load.image('book','assets/sprites/loot/Book.png');
    game.load.image('cake','assets/sprites/loot/Cake.png');
    game.load.image('camera','assets/sprites/loot/Camera.png');
    game.load.image('cola','assets/sprites/loot/ColaCola.png');
    game.load.image('doll','assets/sprites/loot/Doll.png');
    game.load.image('egg','assets/sprites/loot/Egg.png');
    game.load.image('console','assets/sprites/loot/GamCub.png');
    game.load.image('fish','assets/sprites/loot/Goldfish.png');
    game.load.image('horse','assets/sprites/loot/Horse.png'); //we DO need this, I forgot
    game.load.image('horseCage','assets/sprites/loot/horseCage.png');
    game.load.image('mp3','assets/sprites/loot/iPood.png');
    game.load.image('key','assets/sprites/loot/Key.png');
    game.load.image('bottle','assets/sprites/loot/Juice.png');
    game.load.image('nachos','assets/sprites/loot/Nachos.png');
    game.load.image('painting','assets/sprites/loot/Painting.png');
    game.load.image('hat','assets/sprites/loot/PartyHat.png');
    game.load.image('purse','assets/sprites/loot/Purse.png');
    game.load.image('ring','assets/sprites/loot/Ring.png');
    game.load.image('kabob','assets/sprites/loot/ShishKabob.png');
    game.load.image('shoes','assets/sprites/loot/Shoes.png');
    game.load.image('skateboard','assets/sprites/loot/Skateboard.png');
    game.load.image('sockPuppet','assets/sprites/loot/SockPuppet.png');
    game.load.image('sunglasses','assets/sprites/loot/Sunglasses.png');
    game.load.image('trumpet','assets/sprites/loot/Trumpet.png');
    game.load.image('tv','assets/sprites/loot/TV.png');
    game.load.image('brush','assets/sprites/loot/UsedBrush.png');
    
    //MISC
    game.load.spritesheet('birds','assets/sprites/misc/bird_spriteSheet_1.png',10,14);
    game.load.spritesheet('birds1','assets/sprites/misc/bird_spriteSheet_2.png',10,14);
    game.load.spritesheet('birds2','assets/sprites/misc/bird_spriteSheet_3.png',10,14);
    game.load.spritesheet('flowers','assets/sprites/misc/FLOWER_Spritesheet.png',8,8);
    game.load.spritesheet('cats','assets/sprites/misc/cat_spritesheet.png',20,15);
    game.load.image('Rrestart','assets/sprites/UI/Rrestart.png');
    game.load.image('hot_air_balloon','assets/sprites/misc/HOTAIRBALLOON_V3.png');
    
    //MENU
    game.load.image('button_start_1','assets/sprites/menu/Buttons_FinaL_Final_0000_Layer-6.png');
    game.load.image('button_controls_1','assets/sprites/menu/Buttons_FinaL_Final_0001_Layer-5.png');
    game.load.image('button_credits_1','assets/sprites/menu/Buttons_FinaL_Final_0002_Layer-4.png');
    game.load.image('full_screen_icon','assets/sprites/menu/fullScreenIcon.png');
    game.load.image('player_tutorial','assets/sprites/UI/playerTutorial.png');
    game.load.image('controls_screen','assets/sprites/menu/ControlScreen.png');
    game.load.image('credits_screen','assets/sprites/menu/Credits.png');
    //game.load.image('button_c_white','assets/sprites/UI/BUTTONS_FINAL_0000_START-WHITE.PNG');
    
    //EMITTERS
    game.load.spritesheet('pixieDust', 'assets/sprites/particles/Pixie Dust Spritesheet.png', 9, 9);
    game.load.spritesheet('poofDust', 'assets/sprites/particles/Dust Poof Spritesheet.png', 9, 9);
    game.load.spritesheet('poofDustRainbow', 'assets/sprites/particles/Dust Poof Spritesheet_Rainbow.png', 9, 9);
    
    //PHYSICS
    game.load.physics('physicsData', 'assets/physics/greyboxShape4.json');
    game.load.physics('waveData', 'assets/physics/wavePolygon.json');
    
    //OBJECT POSITION DATA
    game.load.json('objectPosData','assets/level/objects/ObjPosMapUsingTiles.json');
}