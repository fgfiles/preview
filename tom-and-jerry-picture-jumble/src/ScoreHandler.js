var ScoreHandler  = cc.Node.extend({
	currentScore:null,
	scoreLabel:null,

	ctor:function() {
        this._super();
        this.init();
    },
    init:function()
    {
        //Initialize here
        this.currentScore = 0;

        this.scoreLabel = new cc.LabelBMFont("999", res.mainFont_b_fnt);

        this.addChild(this.scoreLabel);

        this.scoreLabel.setString("0");
        this.scoreLabel.setPosition((GC.SCREEN.SIZE.WIDTH/3.1) - 3, GC.SCREEN.SIZE.HEIGHT - 155);
    },
    updateScoreLabel:function()
    {
        this.currentScore += Math.floor(g_sharedGameplayLyr.gameTimer.currentSeconds);
        GC.SCORE = this.currentScore;
        this.scoreLabel.setString(this.currentScore.toString());
    }
});