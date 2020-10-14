var HowToPlayPageLayer = cc.Layer.extend({
    ctor:function(currentPage) 
    {
        this._super();
        
        // Background
        var spriteResource;

        spriteResource = res.tutorials_png;

        var sprite = new cc.Sprite(spriteResource);
        sprite.setPosition(GC.SCREEN.CENTER.X, GC.SCREEN.CENTER.Y);
        this.addChild(sprite, 0);

        var leftButton = new cc.MenuItemImage(
            "#btn_left.png",
            "#btn_left.png",
            this.goToMain,
            this);
        
        leftButton.setAnchorPoint(0.0, 0.5);
        leftButton.x = 0;

        navMenu = new cc.Menu(leftButton);
        navMenu.setPosition(0, GC.SCREEN.CENTER.Y);
        this.addChild(navMenu);

        var playButton = new cc.MenuItemImage(
            "#ui_btn_play_U.png",
            "#ui_btn_play_D.png",
            this.startGame,
            this);
        
        playButton.setAnchorPoint(1.0, 0.0);
        playButton.setPosition(GC.SCREEN.SIZE.WIDTH - 228, 38);
        
        var playMenu = new cc.Menu(playButton);
        playMenu.x = 0;
        playMenu.y = 0;
        this.addChild(playMenu);
    },

    startGame:function() 
    {
        var gameScene = new GameplayScene();
        cc.director.runScene(new cc.TransitionFade(0.25, gameScene));
    },

    goToMain:function() 
    {
        var nextScene = new MainMenuScene();
        cc.director.runScene(new cc.TransitionFade(0.25, nextScene));
    }
});

var HowToPlayNavigationLayer = cc.Layer.extend({
    currentPage:null,
    
    ctor:function(currentPage) 
    {
        this._super();
        
        this.currentPage = currentPage;
        
        // Left
        var leftButton = new cc.MenuItemImage(
            "#how_to_play_btn_left.png",
            "#how_to_play_btn_left.png",
            this.goToPrevPage,
            this);
        
        leftButton.setAnchorPoint(0.0, 0.5);
        leftButton.setScale(0.5, 0.5);
        leftButton.x = 0;
        
        // Right
        var rightButton = new cc.MenuItemImage(
            "#how_to_play_btn_right.png",
            "#how_to_play_btn_right.png",
            this.goToNextPage,
            this);
        
        rightButton.setAnchorPoint(1.0, 0.5);
        rightButton.setScale(0.5, 0.5);
        rightButton.x = GC.SCREEN.SIZE.WIDTH;
        
        // Menu
        var navMenu;
        if (currentPage == GC.HOW_TO_PLAY_PAGE.COUNT) 
        {
            navMenu = new cc.Menu(leftButton);
        } 
        else 
        {
            navMenu = new cc.Menu(leftButton, rightButton);
        }
        navMenu.setPosition(0, GC.SCREEN.CENTER.Y);
        this.addChild(navMenu);
        
        // Play
        var playButton = new cc.MenuItemImage(
            "#mainmenu_play_up.png",
            "#mainmenu_play_down.png",
            this.startGame,
            this);
        
        playButton.setAnchorPoint(1.0, 0.0);
        playButton.setPosition(GC.SCREEN.SIZE.WIDTH, 0);
        playButton.setScale(0.5, 0.5);
        
        var playMenu = new cc.Menu(playButton);
        playMenu.x = 0;
        playMenu.y = 0;
        this.addChild(playMenu);
    },
    
    goToPrevPage:function() 
    {
        var nextScene;
        if (this.currentPage == GC.HOW_TO_PLAY_PAGE.ONE) 
        {
            nextScene = new MainMenuScene();
            cc.director.runScene(new cc.TransitionMoveInL(0.5, nextScene));
        } 
        else 
        {
            nextScene = new HowToPlayScene(this.currentPage - 1);
            cc.director.runScene(new cc.TransitionMoveInL(0.5, nextScene));
        }
    },
    
    goToNextPage:function() 
    {
        var nextScene = new HowToPlayScene(this.currentPage + 1);
        cc.director.runScene(new cc.TransitionMoveInR(0.5, nextScene));
    },
    
    startGame:function() 
    {
        var gameScene = new GameplayScene();
        cc.director.runScene(new cc.TransitionMoveInR(0.5, gameScene));
    }
});

var HowToPlayScene = cc.Scene.extend({
    currentPage:null,
    
    ctor:function(currentPage) 
    {
        this._super();
        
        this.currentPage = currentPage;
    },
    
    onEnter:function () 
    {
        this._super();
        var layer = new HowToPlayPageLayer(this.currentPage);
        
        this.addChild(layer);
    }
});