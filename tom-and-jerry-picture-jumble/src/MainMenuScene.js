var MainMenuLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
        
        return true;
    },
    
    init:function() 
    {
        this._super();

        cc.spriteFrameCache.addSpriteFrames(res.ui_plist);
        cc.spriteFrameCache.addSpriteFrames(res.gobj_3x3_plist);
        cc.spriteFrameCache.addSpriteFrames(res.gobj_4x4_plist);
        cc.spriteFrameCache.addSpriteFrames(res.gobj_5x5_plist);
        
        // Background image
        var sprite = new cc.Sprite(res.titleScreen_png);

        sprite.setPosition(GC.SCREEN.CENTER.X, GC.SCREEN.CENTER.Y);
        this.addChild(sprite, 0);


        // Main menu buttons
        var playButton = new cc.MenuItemImage(
            "#ui_btn_play_U.png",
            "#ui_btn_play_D.png",
            this.startGame,
            this);
        
        playButton.x = 0;
        playButton.y = 65;
        
        var howToButton = new cc.MenuItemImage(
            "#ui_btn_howToPlay_U.png",
            "#ui_btn_howToPlay_D.png",
            this.showRules,
            this);
        

        howToButton.x = playButton.x;
        howToButton.y = -65;

        var mainMenu = new cc.Menu(playButton, howToButton);
        mainMenu.x = GC.SCREEN.SIZE.WIDTH /2;
        mainMenu.y = 130;
        this.addChild(mainMenu, 1);
        
        return true;
    },
    
    startGame:function () 
    {
        // Note: Open your gameplay scene here.
        var gameScene = new GameplayScene();
        cc.director.runScene(new cc.TransitionFade(0.25, gameScene));
    },
    
    showRules:function() 
    {
        var howToPlayScene = new HowToPlayScene(GC.HOW_TO_PLAY_PAGE.ONE);
        cc.director.runScene(new cc.TransitionFade(0.25, howToPlayScene));
    }
});

var MainMenuScene = cc.Scene.extend({
    onEnter:function () 
    {
        this._super();
        var layer = new MainMenuLayer();
        this.addChild(layer);
    }
});
