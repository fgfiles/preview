/**
 * Created by pawel on 09.10.2014.
 */
var ScreenPreloader = {

    s_container: createjs.Container,


    Init: function()
    {
        this.s_container = new createjs.Container();
        Main.s_scene.addChild(this.s_container);

        this.s_content = new createjs.Container();
        this.s_container.addChild(this.s_content);

        var text = new createjs.Text();
        text.textAlign = "center";
        text.textBaseline = "top";
        text.color = "#ffffff";
        text.font = getFontStyle(".id1-loading");
        text.text = Main.COPY.getCopy("id1-loading");
        text.y = 270;
        this.s_content.addChild(text);

        var size = Main.GetCanvasSize();
        this.UpdateCanvasSize(size.width, size.height);

        return this;
    },


    Remove: function()
    {
        this.s_container.removeAllChildren();
        Main.s_stage.removeChild(this.s_container);
        this.s_content.removeAllChildren();
        this.s_content = null;
        this.s_container = null;
    },


    UpdateCanvasSize: function(width, height)
    {
        if (this.s_container)
        {
            width /= Main.s_scale;
            height /= Main.s_scale;
            this.s_content.x = width / 2;
            this.s_content.y = (height - 380) / 2;
            Main.s_stage.update();
        }
    },


    SetLogo: function()
    {
        var img = new createjs.Bitmap(Main.GetImage("fg_logo"));
        var bb = img.getBounds();
        img.x = -bb.width / 2;
        this.s_content.addChild(img);
        Main.s_stage.update();
    },


    SetBorder: function()
    {
        var img = new createjs.Bitmap(Main.GetImage("preloader_border"));
        var bb = img.getBounds();
        img.x = -bb.width / 2;
        img.y = 316;
        this.s_content.addChild(img);
        Main.s_stage.update();
    },


    SetBar: function()
    {
        var img = new createjs.Bitmap(Main.GetImage("preloader_bar"));
        var bb = img.getBounds();
        img.x = -bb.width / 2;
        img.y = 327;
        this.s_content.addChild(img);
        this.s_bar = img;
        Main.s_stage.update();

        this.SetProgress(this.s_progress);
    },


    SetProgress: function(value)
    {
        this.s_progress = value;
        if (this.s_bar)
        {
            this.s_bar.scaleX = value;
        }
        Main.s_stage.update();
    }
};