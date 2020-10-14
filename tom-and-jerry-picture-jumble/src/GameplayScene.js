var g_sharedGameplayLyr;

var bgLayerOrder        = 0;
var gridLayerOrder      = 1;
var previewLayerOrder   = 2;
var overlayLayerOrder   = 3;
var textLayerOrder      = 4;

var GameplayLayer = cc.Layer.extend({
    mainGrid:null,
    gridData:null,
    gridDataArray:null,
    gameTimer:null,
    gameScore:null,
    currentLevelCount:null,
    maxLevelCount:null,
    isGameActive:null,
    gameBG:null,
    goPopup:null,
    lvlPopup:null,
    inputEnabled:null,
    levelCompleteOverlay:null,
    isLevelComplete:null,

    ctor:function() 
    {
        this._super();
        this.init();
    },
    init:function()
    {
        GC.SCORE = 0;
        
        cc.eventManager.addListener(GestureListener, this);

        this.goPopup = new GoPopup();
        this.addChild(this.goPopup, overlayLayerOrder);

        this.lvlPopup = new LevelPopup();
        this.addChild(this.lvlPopup, overlayLayerOrder);

        this.gameBG = cc.Sprite.create(res.bg_png);

        this.addChild(this.gameBG, bgLayerOrder);
        this.gameBG.setPosition(GC.SCREEN.CENTER.X, GC.SCREEN.CENTER.Y);

        this.inputEnabled       = false;
        this.isLevelComplete    = false;

        //Initialize here
        this.isGameActive = false;

        this.gridDataArray = [];

        g_sharedGameplayLyr = this;

        this.maxLevelCount = 10;
        this.currentLevelCount = 0;

        this.gameTimer = new Timer();
        this.addChild(this.gameTimer, textLayerOrder);

        this.gameScore = new ScoreHandler();
        this.addChild(this.gameScore, previewLayerOrder);

        this.levelCompleteOverlay = new LevelCompletePanel();
        this.addChild(this.levelCompleteOverlay, textLayerOrder + 1);

        var grid = new Grid();
        grid.setPosition(GC.SCREEN.CENTER.X * 1000, GC.SCREEN.CENTER.Y * -1000);
        this.mainGrid = grid;
        this.addChild(grid);

        this.roundStart(this.currentLevelCount);
    },

    roundStart:function(p_level)
    {
        if (this.currentLevelCount < this.maxLevelCount) 
        {
            this.runAction( cc.Sequence.create(cc.DelayTime.create(0.2), 
                cc.CallFunc.create(this.playIntroAnimation, this), 
                cc.DelayTime.create(3.5), 
                cc.CallFunc.create(this.enableGameInput, this)));
            
            this.mainGrid.initialize(this.currentLevelCount);
            this.mainGrid.activateGrid();
        }
    },

    onLevelComplete:function()
    {
        this.gameScore.updateScoreLabel();

        if(this.currentLevelCount < this.maxLevelCount - 1)
        {
            this.currentLevelCount++;
            this.lvlPopup.updateLevelIndicator(this.currentLevelCount + 1);
            
            this.levelCompleteOverlay.showPanel();
        }
        else
        {
            var gameOverScene = new GameOverScene();
            cc.director.runScene(new cc.TransitionMoveInR(0.5, gameOverScene));
        }
    },

    setLevelComplete:function() 
    {
        this.isLevelComplete = true;
    },

    startNextLevel:function()
    {
        this.isLevelComplete = false;

        var hidePanelAction         = cc.CallFunc.create(this.levelCompleteOverlay.hidePanel, this.levelCompleteOverlay);

        var nextLevelDelayAction    = cc.DelayTime.create(1);

        var resetGridAction         = cc.CallFunc.create(this.resetGrid, this);

        this.runAction( cc.Sequence.create(hidePanelAction, nextLevelDelayAction) );
        this.resetGrid();
    },

    resetGrid:function()
    {
        sharedGrid.deactivateGrid();
        this.gameTimer.resetTimer();
        this.roundStart(this.currentLevelCount);
    },

    playGOAnimation:function()
    {
        this.goPopup.goAnimation();
    },

    playLVLAnimation:function()
    {
        this.lvlPopup.levelAnimation();
    },

    playIntroAnimation:function()
    {
        this.runAction(cc.Sequence.create(cc.CallFunc.create(this.playLVLAnimation, this), cc.DelayTime.create(1.5), cc.CallFunc.create(this.playGOAnimation, this)));
    },

    enableGameInput:function()
    {
        this.inputEnabled = true;
    },

    disableGameInput:function()
    {
        this.inputEnabled = false;
    }
});

// HUD stuff here

var g_sharedHUDLyr;

var HudLayer = cc.Layer.extend({
    ctor:function() {
        this._super();
        this.init();
    },
    init:function()
    {
        //Initialize here
        
        g_sharedHUDLyr = this;
    }
});

var GameControlsLayer = cc.Layer.extend({
    ctor:function() {
        this._super();
        this.init();
    },
    init:function()
    {
        //Initialize here
        
        // Keyboard listener
        if (cc.sys.capabilities.hasOwnProperty('keyboard'))
        {
            cc.eventManager.addListener({
                event: cc.EventListener.KEYBOARD,
                onKeyReleased: KeyListener.onKeyReleased
            }, this);
        }
        
    }
});

var GameplayScene = cc.Scene.extend({
    gameplayLayer:null,
    ctor:function() 
    {
        this._super();
    },
    
    onEnter:function () {
        this._super();
        
        var gl = this.gameplayLayer = new GameplayLayer();
        var hl = new HudLayer();
        var gcl = new GameControlsLayer();
        this.addChild(gl);
        this.addChild(hl);
        this.addChild(gcl);
    },
    
    update:function(delta)
    {
        this.gameLayer.update(delta);
    }
});


