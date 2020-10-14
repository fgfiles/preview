var LevelCompletePanel = cc.Node.extend({
	bgSprite:null,
	scoreLabel:null,
	timeRemainingLabel:null,
    highScoreLabel:null,
    dimLayer:null,


	ctor:function() 
    {
        this._super();
        this.init();
    },
    
    init:function()
    {
        this.dimLayer = cc.LayerColor.create(new cc.Color(0, 0, 0, 100), GC.SCREEN.SIZE.WIDTH * 12, GC.SCREEN.SIZE.HEIGHT * 12);
        this.dimLayer.setPosition(-GC.SCREEN.SIZE.WIDTH/2, -GC.SCREEN.SIZE.HEIGHT * 2)
        this.addChild(this.dimLayer, overlayLayerOrder - 1);
        this.dimLayer.setVisible(false);

    	this.bgSprite = new cc.Sprite("#ui_popUp.png");
    	this.addChild(this.bgSprite, overlayLayerOrder);

    	this.scoreLabel = new cc.LabelBMFont("0", res.mainFont_w_fnt);

    	this.addChild(this.scoreLabel, textLayerOrder);
    	this.scoreLabel.setPosition(30, 120);

    	this.timeRemainingLabel = new cc.LabelBMFont("30", res.mainFont_w_fnt);

    	this.addChild(this.timeRemainingLabel, textLayerOrder);
    	this.timeRemainingLabel.setPosition(30, -130);

        this.highScoreLabel = new cc.LabelBMFont("300", res.mainFont_w_fnt);

        this.highScoreLabel.setColor(new cc.Color(0, 0, 0, 255));
        this.addChild(this.highScoreLabel, textLayerOrder);
        this.highScoreLabel.setPosition(0, -70);
        this.highScoreLabel.setVisible(false);

    	this.setPosition(GC.SCREEN.SIZE.WIDTH/2, -420);

        var tapToCont = new cc.Sprite("#ui_tapToContinue.png")

        tapToCont.setPosition(0, -320);
        this.addChild(tapToCont, textLayerOrder);
    },

    showPanel:function()
    {
        this.dimLayer.setVisible(true);

        this.timeRemainingLabel.setString(Math.floor(g_sharedGameplayLyr.gameTimer.currentSeconds).toString());
        this.scoreLabel.setString(g_sharedGameplayLyr.gameScore.currentScore.toString());

    	var centerPos = new cc.Point(GC.SCREEN.SIZE.WIDTH/2, (GC.SCREEN.SIZE.HEIGHT / 2) - 20);
        var move = cc.moveTo(0.5, centerPos);
        var action = cc.sequence(move.easing(cc.easeExponentialOut()), cc.callFunc(g_sharedGameplayLyr.setLevelComplete, g_sharedGameplayLyr));
    	this.runAction( action ) ;
    },

    hidePanel:function()
    {
        this.dimLayer.setVisible(false);

        var originPos = new cc.Point(GC.SCREEN.SIZE.WIDTH/2, -420);
        this.runAction( cc.EaseExponentialInOut.create( cc.MoveTo.create(0.5, originPos) ) );
    }
});