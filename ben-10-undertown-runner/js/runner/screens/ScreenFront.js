/**
 * Created by pawel on 09.10.2014.
 */
var ScreenFront =
{
    s_container: createjs.Container,


    Init: function()
    {
        this.s_container = new createjs.Container();
        Main.s_scene.addChild(this.s_container);

        this.s_bg = new createjs.Bitmap(Main.GetImage("front_bg"));
        this.s_container.addChild(this.s_bg);

        this.s_gameLogo = new createjs.Bitmap(Main.GetImage("game_logo_small"));
        this.s_container.addChild(this.s_gameLogo);

        this.s_ben10Logo = new createjs.Bitmap(Main.GetImage("ben10_logo_small"));
        this.s_container.addChild(this.s_ben10Logo);

        this.s_btnPlay = new BtnPlay();
        this.s_container.addChild(this.s_btnPlay);

        //
        if (Main.IsMobile())
        {
            createjs.Touch.enable(Main.s_stage);
        }
        else
        {
            document.onkeydown = function(e){ScreenFront.HandleKeyDown(e);};
        }
        this.s_btnPlay.addEventListener("click", function(e){ScreenFront.OnClickPlay(e);});


        //
        var size = Main.GetCanvasSize();
        this.UpdateCanvasSize(size.width, size.height);

        return this;
    },


    Remove: function()
    {
        this.s_container.removeAllChildren();
        Main.s_scene.removeChild(this.s_container);
        this.s_bg = null;
        this.s_gameLogo = null;
        this.s_ben10Logo = null;
        this.s_btnPlay = null;
        this.s_container = null;

        Main.s_loader.remove("front_bg");
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

            var bb = this.s_gameLogo.getBounds();
            this.s_gameLogo.y = Math.min(height, bottom) - bb.height;

            bb = this.s_ben10Logo.getBounds();
            this.s_ben10Logo.y = Math.min(height, bottom) - bb.height - 10;
            this.s_ben10Logo.x = width - bb.width - 10;

            bb = this.s_btnPlay.getBounds();
            this.s_btnPlay.x = (width - bb.width) / 2;
            this.s_btnPlay.y = Math.min(height, (bottom + (Main.IsMobile() ? 0 : 40))) - bb.height - 10;
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


        if (Main.s_firstRun)
        {
            Main.s_firstRun = false;
            Navigation.ShowScreen(Navigation.SCREEN_INSTRUCTIONS);
        }
        else
        {
            Navigation.ShowScreen(Navigation.SCREEN_GAME);
        }

        WiseTrack.track("Play");
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
                ScreenFront.OnClickPlay();
                break;
        }
    }
};