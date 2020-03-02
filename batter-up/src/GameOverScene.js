var GameOverLayer = cc.Layer.extend({
    
    isNewHighScore:null,
    
    ctor:function() {
        this._super();
        this.init();
    },
    
    init:function() {
        this._super();
        this.isNewHighScore = false;

        // cc.eventManager.removeAllListeners();
        cc.audioEngine.stopMusic();
        sprite = new cc.Sprite(res.p_resultScreen_png);

        var highScoreLabel = cc.LabelBMFont.create("999999", res.fnt_score_fnt);
        highScoreLabel.setPosition(GC.EASYPOS.CC.x + 290, GC.EASYPOS.CC.y - 140);
        this.addChild(highScoreLabel, 2);
        
        var yourScoreLabel = cc.LabelBMFont.create("999999", res.fnt_score_fnt);
        yourScoreLabel.setPosition(GC.EASYPOS.CC.x + 290, GC.EASYPOS.CC.y + 30);
        this.addChild(yourScoreLabel, 2);

        highScoreLabel.setString(this.getHighScore());
        yourScoreLabel.setString(GC.SCORE.toString());
        
        sprite.setPosition(GC.SCREEN.CENTER.X, GC.SCREEN.CENTER.Y);
        this.addChild(sprite, 0);
        
        var action = cc.sequence(cc.delayTime(GC.ADDELAY), cc.callFunc(this.showAds, this));
        this.runAction(action);

        var highscorebanner = new cc.Sprite("#ui_newhighscore.png");
        this.addChild(highscorebanner);
        highscorebanner.setPosition(GC.SCREEN.SIZE.WIDTH - 180, GC.SCREEN.CENTER.Y - 30);
        highscorebanner.setScale(0.75);
        highscorebanner.setRotation(25);

        if (this.isNewHighScore) {
            highscorebanner.visible = true;
        } else {
            highscorebanner.visible = false;
        }

         var playButton = new cc.MenuItemImage(
        "#ui_btn_playAgainU.png",
        "#ui_btn_playAgainD.png",
        this.replayGame,
        this);
        playButton.x = 280;
        playButton.y = -280;

        var mainMenu = new cc.Menu(playButton);
        mainMenu.setPosition(GC.EASYPOS.CC);
        this.addChild(mainMenu, 1);
    },

    showAds:function() {
        if (mobile) {
            window.location = 'cnwap://showad';
        }
        else {
            if (typeof showAd === 'function') 
            { 
                showAd();
            }
        }
    },
    
    getHighScore:function() {
        var highScore = cc.sys.localStorage.getItem(GC.UNIQUE_SCORE_KEY);
        if (GC.SCORE > highScore) {
            this.isNewHighScore = true;
        }
        if (GC.SCORE >= highScore || highScore === null) {
            cc.sys.localStorage.setItem(GC.UNIQUE_SCORE_KEY, GC.SCORE);
            return GC.SCORE;
           
        } else {
            return highScore;
        }
        if (GC.SCORE > highScore || !highScore) {
            this.isNewHighScore = true;
        }
    },

    replayGame:function () {
        Tools.playSFX(res.sfx_switchLane, false);
        var gameScene = new GameplayScene();
        cc.director.runScene(new cc.TransitionFade(0.5, gameScene));
    }
});

var GameOverScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameOverLayer();
        this.addChild(layer);
    }
});