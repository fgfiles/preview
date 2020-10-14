var GoPopup = cc.Node.extend({
	goSprite:null,

	ctor:function() {
        this._super();
        this.init();
    },

    init:function()
    { 
    	//Initialize here

        this.goSprite = new cc.Sprite("#ui_popUp_go.png");

        this.addChild(this.goSprite);

        this.goSprite.setPosition(GC.SCREEN.CENTER.X, GC.SCREEN.CENTER.Y + 600);
    },

    goAnimation:function()
    {
    	var startPoint		= new cc.Point(GC.SCREEN.CENTER.X, GC.SCREEN.CENTER.Y + 600);
    	var centerPoint		= new cc.Point(GC.SCREEN.CENTER.X, GC.SCREEN.CENTER.Y);

    	this.goSprite.runAction(cc.Sequence.create(cc.EaseBackOut.create(cc.MoveTo.create(0.4, centerPoint.x, centerPoint.y))
    		, cc.DelayTime.create(0.75), 
    		cc.EaseExponentialOut.create(cc.MoveTo.create( 0.5, startPoint.x, startPoint.y )) ));

    }


});

var LevelPopup = cc.Node.extend({
	levelIndicatorSprite:null,
	levelIndicatorLabel:null,

	ctor:function() 
    {
        this._super();
        this.init();
    },
    init:function()
    {
    	//Initialize here

    	this.levelIndicatorSprite = new cc.Sprite("#ui_popUp_level.png");
        this.addChild(this.levelIndicatorSprite);

        this.levelIndicatorLabel = new cc.LabelBMFont("1", res.mainFont_w_fnt);

        this.levelIndicatorSprite.addChild(this.levelIndicatorLabel);
        this.levelIndicatorLabel.setPosition(this.levelIndicatorSprite.getBoundingBox().width - 110, (this.levelIndicatorSprite.getBoundingBox().height / 2) + 5);
        this.levelIndicatorLabel.setVisible(true);

        this.levelIndicatorSprite.setPosition(GC.SCREEN.CENTER.X, GC.SCREEN.SIZE.HEIGHT + 230);
    },

    levelAnimation:function()
    {
    	var startPoint		= new cc.Point(GC.SCREEN.CENTER.X, GC.SCREEN.SIZE.HEIGHT + 230);
    	var centerPoint		= new cc.Point(GC.SCREEN.CENTER.X, GC.SCREEN.SIZE.HEIGHT - 300);

    	this.levelIndicatorSprite.runAction(cc.Sequence.create(cc.EaseBackOut.create(cc.MoveTo.create(0.4, centerPoint.x, centerPoint.y))
    		, cc.DelayTime.create(0.75), 
    		cc.EaseExponentialOut.create(cc.MoveTo.create( 0.5, startPoint.x, startPoint.y )) ));
    },

    updateLevelIndicator:function(p_level)
    {
    	this.levelIndicatorLabel.setString(p_level.toString());
    }

});
