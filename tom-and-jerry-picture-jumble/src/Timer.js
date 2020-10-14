var Timer = cc.Node.extend({
	timerLabel:null,
	maxSeconds:null,
	currentSeconds:null,

	ctor:function() {
        this._super();
        this.init();
    },
    init:function()
    {
        //Initialize here

        this.maxSeconds = 30;
        this.currentSeconds = this.maxSeconds;

        this.timerLabel = new cc.LabelBMFont(this.maxSeconds.toString(), res.mainFont_o_fnt);

        this.addChild(this.timerLabel);

        this.timerLabel.setPosition(970, 115);

        sharedTimer = this;

        this.schedule(this.update);
    },

    update:function(delta)
    {
    	if(this.currentSeconds > 1 && g_sharedGameplayLyr.inputEnabled == true)
    	{
	    	this.currentSeconds -= delta;

	    	if(this.currentSeconds < 1)
	    	{
	    		this.currentSeconds = 0;
                this.unschedule(this.update);
                var gameOverScene = new GameOverScene();
                cc.director.runScene(new cc.TransitionMoveInR(0.5, gameOverScene));
	    	}

	    	this.timerLabel.setString(Math.floor(this.currentSeconds).toString());
    	}
    },

    resetTimer:function()
    {
        this.currentSeconds = this.maxSeconds;
        this.timerLabel.setString(Math.floor(this.currentSeconds).toString());
    }
});