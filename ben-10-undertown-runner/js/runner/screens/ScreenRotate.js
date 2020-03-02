/**
 * Created by pawel on 09.10.2014.
 */
var ScreenRotate =
{
    s_container: createjs.Container,


    Init: function()
    {
        this.s_container = new createjs.Container();
        Main.s_scene.addChild(this.s_container);

        this.s_bg = new createjs.Bitmap(Main.GetImage("rotate_bg"));
        this.s_container.addChild(this.s_bg);

        this.s_gameLogo = new createjs.Bitmap(Main.GetImage("game_logo_big"));
        this.s_container.addChild(this.s_gameLogo);

        this.s_ben10Logo = new createjs.Bitmap(Main.GetImage("ben10_logo_small"));
        this.s_container.addChild(this.s_ben10Logo);

        this.s_text = new createjs.Text();
        this.s_text.textAlign = "center";
        this.s_text.color = "#ffffff";
        this.s_text.lineWidth = 540;
        this.s_text.lineHeight = 80;
        this.s_text.font = getFontStyle(".id14-rotate_device");
        this.s_text.text = Main.COPY.getCopy("id14-rotate_device");
        this.s_container.addChild(this.s_text);

        Main.s_stage.mouseChildren = false;

        //
        var size = Main.GetCanvasSize();
        this.UpdateCanvasSize(size.width, size.height);

        return this;
    },


    Remove: function()
    {
        this.s_container.removeAllChildren();
        Main.s_stage.removeChild(this.s_container);

        this.s_bg = null;
        this.s_gameLogo = null;
        this.s_ben10Logo = null;
        this.s_text = null;
        this.s_container = null;

        Main.s_stage.update();

        Main.s_stage.mouseChildren = true;
    },


    UpdateCanvasSize: function(width, height)
    {
        if (height > width)
        {
            width /= Main.s_scale;
            height /= Main.s_scale;

            var bb = this.s_bg.getBounds();
            if (width < bb.width)
            {
                this.s_bg.scaleX = this.s_bg.scaleY = width / bb.width;
            }
            this.s_bg.x = (width - bb.width * this.s_bg.scaleX) / 2;
            var dy = Math.max(-70, Math.min(0, height - 800));
            this.s_bg.y = dy;

            var bb = this.s_gameLogo.getBounds();
            this.s_gameLogo.x = (width - bb.width) / 2;
            this.s_gameLogo.y = height - bb.height - 10;

            bb = this.s_ben10Logo.getBounds();
            this.s_ben10Logo.x = (width - bb.width) / 2;
            this.s_ben10Logo.y = this.s_gameLogo.y - bb.height - 10;


            this.s_text.scaleX = this.s_text.scaleY = this.s_bg.scaleX;
            this.s_text.x = width / 2;
            this.s_text.y = dy + 336 * this.s_bg.scaleX;

        }

        Main.s_stage.update();
    }
};