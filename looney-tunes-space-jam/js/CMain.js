function CMain(oData){
    ERROR_MULT = oData.errorMultiplier;
    TIME_AVAILABLE = oData.timeAvailable;
    SELECTOR_SPEED = oData.selectorSpeed;
    POINT_FOR_BALL = oData.point_per_ball;
    POINT_FOR_SPECIAL_BALL = oData.point_per_special_ball;

    var _bUpdate = false;
    var _iCurResource = 0;
    var RESOURCE_TO_LOAD = 0;
    var _iState = STATE_LOADING;
    
    var _oPreloader;
    var _oMenu;
    var _oGame;

    this.initContainer = function(){
        s_oStage = new createjs.Stage("canvas");       
        s_oStage.preventSelection = false;
        createjs.Touch.enable(s_oStage);
        
        s_bMobile = jQuery.browser.mobile;
        if(s_bMobile === false){
            s_oStage.enableMouseOver(20);  
        }
        
        s_iPrevTime = new Date().getTime();

        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", this._update);
		
        if(navigator.userAgent.match(/Windows Phone/i)){
                DISABLE_SOUND_MOBILE = true;
        }
	
        s_oSpriteLibrary  = new CSpriteLibrary();

        //ADD PRELOADER
        _oPreloader = new CPreloader();
        
        _bUpdate = true;
    };

    this.soundLoaded = function(){
         _iCurResource++;
         var iPerc = Math.floor(_iCurResource/RESOURCE_TO_LOAD *100);

        _oPreloader.refreshLoader(iPerc);

         if(_iCurResource === RESOURCE_TO_LOAD){
            this.removePreloader();
         }
    };
    
    this._initSounds = function(){
         if (!createjs.Sound.initializeDefaultPlugins()) {
             return;
         }

        if(navigator.userAgent.indexOf("Opera")>0 || navigator.userAgent.indexOf("OPR")>0){
                createjs.Sound.alternateExtensions = ["mp3"];
                createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this));

                createjs.Sound.registerSound("./sounds/us_bounce.ogg", "us_bounce");
                createjs.Sound.registerSound("./sounds/us_buzzer.ogg", "us_buzzer");
                createjs.Sound.registerSound("./sounds/us_cheer.ogg", "us_cheer");
                createjs.Sound.registerSound("./sounds/us_crowd.ogg", "us_crowd");
                createjs.Sound.registerSound("./sounds/us_press_but.ogg", "press_but");
                createjs.Sound.registerSound("./sounds/soundtrack.ogg", "soundtrack");
        }else{
                createjs.Sound.alternateExtensions = ["ogg"];
                createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this));

                createjs.Sound.registerSound("./sounds/us_bounce.mp3", "us_bounce");
                createjs.Sound.registerSound("./sounds/us_buzzer.mp3", "us_buzzer");
                createjs.Sound.registerSound("./sounds/us_cheer.mp3", "us_cheer");
                createjs.Sound.registerSound("./sounds/us_crowd.mp3", "us_crowd");
                createjs.Sound.registerSound("./sounds/us_press_but.mp3", "press_but");
                createjs.Sound.registerSound("./sounds/soundtrack.mp3", "soundtrack");
        }
        RESOURCE_TO_LOAD += 6;
    };
    
    this._loadImages = function(){
        s_oSpriteLibrary.init( this._onImagesLoaded,this._onAllImagesLoaded, this );

        s_oSpriteLibrary.addSprite("audio_icon","./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("ball_1","./sprites/ball_1.png");
        s_oSpriteLibrary.addSprite("ball_2","./sprites/ball_2.png");
        s_oSpriteLibrary.addSprite("bg_help","./sprites/bg_help.png");
        s_oSpriteLibrary.addSprite("bg_menu","./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("but_exit","./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("but_play","./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("cart_back","./sprites/cart_back.png");
        s_oSpriteLibrary.addSprite("cart_front","./sprites/cart_front.png");
        s_oSpriteLibrary.addSprite("field_camera_1","./sprites/field_camera_1.jpg");
        s_oSpriteLibrary.addSprite("field_camera_2","./sprites/field_camera_2.jpg");
        s_oSpriteLibrary.addSprite("field_camera_3","./sprites/field_camera_3.jpg");
        s_oSpriteLibrary.addSprite("msg_box","./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("shot_ball","./sprites/shot_ball.png");
        s_oSpriteLibrary.addSprite("shot_gui","./sprites/shot_gui.png");
        s_oSpriteLibrary.addSprite("time_panel","./sprites/time_panel.png");
        s_oSpriteLibrary.addSprite("shadow","./sprites/shadow.png");

        // player frames: pl000 to pl131
        for (var i = 0; i <= 131; i++) {
            var iSpriteNum;

            if (i <= 9) {
                iSpriteNum = "00" + i;
            } else if (i <= 99) {
                iSpriteNum = "0" + i;
            } else {
                iSpriteNum = i;
            };
            
            var szSprite = "pl" + i,
            szSpritePath = "./sprites/player_frames/new_player_0000" + iSpriteNum + ".png";
            s_oSpriteLibrary.addSprite(szSprite,szSpritePath);
        };

        // basket frames: bsk001 to bsk036
        for (var i = 1; i <= 36; i++) {
            var iSpriteNum;

            if (i <= 9) {
                iSpriteNum = "00" + i;
            } else if (i <= 99) {
                iSpriteNum = "0" + i;
            } else {
                iSpriteNum = i;
            };
            
            var szSprite = "bsk" + i,
            szSpritePath = "./sprites/basket/basket_0" + iSpriteNum + ".png";
            s_oSpriteLibrary.addSprite(szSprite,szSpritePath);
        };        
        
        RESOURCE_TO_LOAD += s_oSpriteLibrary.getNumSprites();

        s_oSpriteLibrary.loadSprites();
    };
    
    this._onImagesLoaded = function(){
        _iCurResource++;

        var iPerc = Math.floor(_iCurResource/RESOURCE_TO_LOAD *100);

        _oPreloader.refreshLoader(iPerc);
        
        if(_iCurResource === RESOURCE_TO_LOAD){
            this.removePreloader();
        }
    };
    
    this._onAllImagesLoaded = function(){
        
    };
    
    this.preloaderReady = function(){
        this._loadImages();
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            this._initSounds();
        }
    };
    
    this.removePreloader = function(){
        _oPreloader.unload();

        s_oSoundTrack = playSound("soundtrack", 1, -1);
        
        this.gotoMenu();
    };
    
    this.gotoMenu = function(){
        _oMenu = new CMenu();
        _iState = STATE_MENU;
    };
    
    this.gotoGame = function(){
        _oGame = new CGame();
			
        _iState = STATE_GAME;
    };
    
    this.gotoHelp = function(){
        _oHelp = new CHelp();
        _iState = STATE_HELP;
    };
    
    this.stopUpdate = function(){
        _bUpdate = false;
        createjs.Ticker.paused = true;
        $("#block_game").css("display","block");
    };

    this.startUpdate = function(){
        s_iPrevTime = new Date().getTime();
        _bUpdate = true;
        createjs.Ticker.paused = false;
        $("#block_game").css("display","none");
    };
    
    this._update = function(event){
        if(!_bUpdate){
            return;
        }
        
        var iCurTime = new Date().getTime();
        s_iTimeElaps = iCurTime - s_iPrevTime;
        s_iCntTime += s_iTimeElaps;
        s_iCntFps++;
        s_iPrevTime = iCurTime;
        
        if ( s_iCntTime >= 1000 ){
            s_iCurFps = s_iCntFps;
            s_iCntTime-=1000;
            s_iCntFps = 0;
        }
                
        if(_iState === STATE_GAME){
            _oGame.update(iCurTime);
        }
        
        s_oStage.update(event);

    };
    
    s_oMain = this;
    _oData = oData;

    this.initContainer();
}

var s_bMobile;
var s_bAudioActive = true;
var s_iCntTime = 0;
var s_iTimeElaps = 0;
var s_iPrevTime = 0;
var s_iCntFps = 0;
var s_iCurFps = 0;

var s_oDrawLayer;
var s_oStage;
var s_oMain;
var s_oSpriteLibrary;
var s_oGameSettings;
var s_oSoundTrack;