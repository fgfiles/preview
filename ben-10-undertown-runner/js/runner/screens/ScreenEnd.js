/**
 * Created by pawel on 09.10.2014.
 */
var ScreenEnd =
{
    s_container: createjs.Container,


    Init: function()
    {
        this.s_container = new createjs.Container();
        Main.s_scene.addChild(this.s_container);

        this.s_bg = new createjs.Bitmap(Main.GetImage("end_bg"));
        this.s_container.addChild(this.s_bg);

        //score
        this.s_contScore = new createjs.Container();
        this.s_container.addChild(this.s_contScore);
        var label = new createjs.Text();
        label.textAlign = "left";
        label.textBaseline = "middle";
        label.color = "#ffffff";
        label.font = getFontStyle(".id12-your_score");
        label.text = Main.COPY.getCopy("id12-your_score");

        var score = new createjs.Text();
        score.textAlign = "left";
        score.textBaseline = "middle";
        score.color = "#8BC53F";
        score.font = getFontStyle(".end_score");
        score.text = Main.s_score;
        var bb = label.getBounds();
        score.x = bb.width + 20;
        this.s_contScore.addChild(label, score);

        //best
        this.s_contBest = new createjs.Container();
        this.s_container.addChild(this.s_contBest);
        label = new createjs.Text();
        label.textAlign = "left";
        label.textBaseline = "middle";
        label.color = "#ffffff";
        label.font = getFontStyle(".id15-best_score");
        label.text = Main.COPY.getCopy("id15-best_score");

        score = new createjs.Text();
        score.textAlign = "left";
        score.textBaseline = "middle";
        score.color = "#8BC53F";
        score.font = getFontStyle(".end_best_score");
        score.text = Main.s_best;
        bb = label.getBounds();
        score.x = bb.width + 15;
        this.s_contBest.addChild(label, score);

        //
        this.s_btnPlay = new BtnPlayAgain();
        this.s_container.addChild(this.s_btnPlay);


        //
        if (Main.IsMobile())
        {
            createjs.Touch.enable(Main.s_stage);
        }
        else
        {
            document.onkeydown = function(e){ScreenEnd.HandleKeyDown(e);};
        }
        this.s_btnPlay.addEventListener("click", function(e){ScreenEnd.OnClickPlay(e);});

        //
        var size = Main.GetCanvasSize();
        this.UpdateCanvasSize(size.width, size.height);

        //wisetrack
        var notFound = true;
        var ranges = [[0, 100], [101, 500], [501, 1000], [1001, 5000], [5001, 10000], [10001, 50000]];
        for (var i = 0; i < ranges.length; i++)
        {
            if (Main.s_score >= ranges[i][0] && Main.s_score <= ranges[i][1])
            {
                notFound = false;
                WiseTrack.track("Score_" + ranges[i][0] + "_to_" + ranges[i][1]);
                break;
            }
        }
        if (notFound)
        {
            WiseTrack.track("Score_50000+");
        }


        return this;
    },


    Remove: function()
    {
        this.s_container.removeAllChildren();
        Main.s_scene.removeChild(this.s_container);
        this.s_bg = null;
        this.s_btnPlay = null;
        this.s_container = null;
    },


    UpdateCanvasSize: function(width, height)
    {
        if (width > height)
        {
            var bottom = Main.IsMobile() ? 500 : 540;
            width /= Main.s_scale;
            height /= Main.s_scale;

            var bb = this.s_bg.getBounds();
            this.s_bg.scaleX = this.s_bg.scaleY = width / bb.width;

            bb = this.s_contScore.getBounds();
            this.s_contScore.x = (width - bb.width) / 2;
            this.s_contScore.y = 130;

            bb = this.s_contBest.getBounds();
            this.s_contBest.x = (width - bb.width) / 2;
            this.s_contBest.y = 210;

            bb = this.s_btnPlay.getBounds();
            this.s_btnPlay.x = (width - bb.width) / 2;
            this.s_btnPlay.y = Math.min(height, bottom + (Main.IsMobile() ? 0 : 40)) - bb.height - 10;
        }

        Main.s_stage.update();
    },


    OnClickPlay: function(e)
    {
        if (Main.IsMobile())
        {
            createjs.Touch.disable(Main.s_stage);
        }
        else
        {
            document.onkeydown = null;
        }

        this.s_btnPlay.removeAllEventListeners("click");


        Navigation.ShowScreen(Navigation.SCREEN_GAME);

        WiseTrack.track("Re-play");
    },


    HandleKeyDown: function(e)
    {
        //cross browser issues exist
        if(!e)
        {
            e = window.event;
        }

        e.preventDefault();

        switch(e.keyCode)
        {
            case ControllerKeyboard.KEYCODE_SPACE:
            case ControllerKeyboard.KEYCODE_DOWN:
            case ControllerKeyboard.KEYCODE_UP:
                ScreenEnd.OnClickPlay();
                break;
        }
    }
};