var g_sharedGameOverLyr;
var GameOverLayer = cc.Layer.extend({
    
    isNewHighScore:null,

    
    ctor:function() 
    {
        this._super();
        this.init();
    },
    
    init:function() 
    {
        this._super();

        cc.eventManager.addListener(SimpleListener, this);

        g_sharedGameOverLyr = this;
        
        // Background
        var sprite = new cc.Sprite(res.resultsScreen_png);
        sprite.setPosition(GC.SCREEN.CENTER.X, GC.SCREEN.CENTER.Y);
        this.addChild(sprite, 0);
        
        // Score values
        var highScoreLabel = cc.LabelBMFont.create("999", res.mainFont_w_fnt);

        highScoreLabel.setPosition(GC.SCREEN.CENTER.X,
                                   GC.SCREEN.CENTER.Y - 200);
        this.addChild(highScoreLabel);


        var yourScoreLabel = cc.LabelBMFont.create("999", res.mainFont_w_fnt);
        yourScoreLabel.setPosition(GC.SCREEN.CENTER.X,
                                   GC.SCREEN.CENTER.Y + 53);
        this.addChild(yourScoreLabel);
        
        // High score banner

        var highScoreBanner = new cc.Sprite("#ui_newRecord.png");

        highScoreBanner.x = GC.SCREEN.CENTER.X + 470;
        highScoreBanner.y = GC.SCREEN.CENTER.Y + 250;
        highScoreBanner.setAnchorPoint(0.5, 1);
        this.addChild(highScoreBanner, 0);
        
        // Set high score
        this.isNewHighScore = false;
        
        highScoreLabel.setString(this.getHighScore());
        yourScoreLabel.setString(GC.SCORE);
        
        if (this.isNewHighScore) 
        {
            highScoreBanner.visible = true;
        } 
        else 
        {
            highScoreBanner.visible = false;
        }

        var tapToCont = new cc.Sprite("#ui_tapToPlayAgain.png")

        tapToCont.setPosition(GC.SCREEN.CENTER.X, 70);
        this.addChild(tapToCont, textLayerOrder);
        
        // Main menu buttons

	    if (mobile) 
        {
             window.location = 'cnwap://showad';
        }
        else 
        {
          if (typeof showAd === 'function') 
          { 
            showAd();
          }
        }
    },
    
    getHighScore:function() 
    {
        var highScore = cc.sys.localStorage.getItem(GC.UNIQUE_SCORE_KEY);
        
        if (GC.SCORE > highScore || highScore == null || highScore == undefined) 
        {
            cc.sys.localStorage.setItem(GC.UNIQUE_SCORE_KEY, GC.SCORE);
            if (GC.SCORE <= 0) 
            {
                this.isNewHighScore = false;
            }
            else 
            {
                this.isNewHighScore = true;
            }

            return GC.SCORE;
        } 
        else 
        {
            return highScore;
        }
    },
    
    replayGame:function() 
    {
        // Note: Replace MainMenuScene with your gameplay scene.
        var gameScene = new GameplayScene();
        cc.director.runScene(new cc.TransitionMoveInR(0.5, gameScene));
    }
});

var GameOverScene = cc.Scene.extend({
    onEnter:function () 
    {
        this._super();
        var layer = new GameOverLayer();
        this.addChild(layer);
    }
});