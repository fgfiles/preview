/**
 * Created by jonathan.kernick on 04/05/2017.
 */

Game.StartScreen = function () {
    Game.BaseScreen.call(this);
    this.backgroundColor = 0xFFDDDD;
    Game.sound.playMusic("music_screens",0.3);
    this.build();
};
Game.StartScreen.prototype = Object.create(Game.BaseScreen.prototype);
Game.StartScreen.prototype.constructor = Game.StartScreen;

Game.StartScreen.prototype.build = function () {

    this.background = CC.Utility.pixiAtlasSprite("splash_super_goalie.png");

    var self = this;
    Game.webApp.juggler.addTimeout(function(){
        if( !Game.hasPlayedIntroVO ) {
            Game.sound.play("welcome");
        }
    },1,1);

    if( !Game.hasPlayedIntroVO ) {
        Game.webApp.juggler.addTimeout(function() {
            var list = ['welcome_tagline', 'welcome_tagline_2', 'welcome_tagline_3', 'welcome_tagline_4'];
            var soundKey = list[_.random(0, 3)];
            Game.sound.play(soundKey);
            Game.hasPlayedIntroVO = true;
        }, 4.1);
    }

    this.buttonPrivacy = new PIXI.Text(COPY_DECK.copy["privacy_policy"],{
        fontSize:12,
        fill:0x000000
    });

    this.buttonPrivacy.y = -160;
    this.buttonPrivacy.interactive = this.buttonPrivacy.buttonMode = true;

    this.privacyFunc = function(){
        localStorage.setItem("boomerang_all_stars_quickloader","yes");
        window.location = "privacy/privacy-" + COPY_DECK.currentLanguage + ".html?key=" + COPY_DECK.copy['key'];
    };

    this.privPanel = new SportsUI.PrivPanel();

    this.buttonPrivacy.click = this.buttonPrivacy.tap = this.privacyFunc.bind(this);

    this.buttonPlayFunc = function () {
        Game.webApp.swapScreen(Game.SelectScreen);
    };

    this.settingsPanel = new SportsUI.PausePanel(Game.StartScreen,true);
    this.buttonSettings = SportsUI.createButtonPause(this.settingsPanel,true);

    this.title = SportsUI.createDisplayText(COPY_DECK.copy.game_names[6], {size: 25, maxSize: 130}, true);
    this.title.x = 10 -this.title.width / 2;
    this.title.y = 15;


    this.buttonPlay = SportsUI.buttonText("play", COPY_DECK.copy["button_play"], this.buttonPlayFunc);
    //SportsUI.buttonText("play", , this.buttonPlayFunc);
    this.buttonPlay.x = 0;
    this.buttonPlay.y = 110;

    this.addChild(this.background);
    this.addChild(this.buttonPlay);
    this.addChild(this.buttonSettings);
    this.addChild(this.title);
    //this.addChild(this.buttonPrivacy);
    this.addChild(this.settingsPanel);
    this.addChild(this.privPanel);
    this.update = function(delta){
        this.buttonPrivacy.x = Game.webApp.screenWidth*-0.5 + 3;
    }
};