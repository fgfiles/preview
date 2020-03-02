/**
 * Created by pawel on 09.10.2014.
 */
var ScreenInstructions =
{
    s_container: createjs.Container,


    Init: function(inGame)
    {
        this.s_inGame = inGame;

        this.s_container = new createjs.Container();
        Main.s_scene.addChild(this.s_container);

        this.s_content = new createjs.Container();
        this.s_container.addChild(this.s_content);
        this.s_bg = new createjs.Bitmap(Main.GetImage("end_bg"));
        this.s_content.addChild(this.s_bg);

        var bb = this.s_bg.getBounds();
        this.s_header = new createjs.Text();
        this.s_header.textAlign = "center";
        this.s_header.color = "#ffffff";
        this.s_header.font = getFontStyle(".id3-instructions");
        this.s_header.text = Main.COPY.getCopy("id3-instructions");
        this.s_header.x = bb.width >> 1;
        this.s_header.y = 80;
        this.s_content.addChild(this.s_header);

        //characters
        var img = new createjs.Sprite(Main.GetSpriteSheet("interface"));
        img.gotoAndStop("instr_jump");
        bb = img.getBounds();
        img.x = 280 - bb.width / 2;
        img.y = 272 - bb.height;
        this.s_content.addChild(img);

        var img = new createjs.Sprite(Main.GetSpriteSheet("interface"));
        img.gotoAndStop("instr_slide");
        bb = img.getBounds();
        img.x = 690 - bb.width / 2;
        img.y = 272 - bb.height;
        this.s_content.addChild(img);

        //copies
        var copy1 = new createjs.Text();
        copy1.textAlign = "left";
        copy1.color = "#ffffff";
        copy1.font = getFontStyle(".id4-instructions_copy1");
        copy1.y = 290;
        this.s_content.addChild(copy1);

        var copy2 = copy1.clone();
        copy2.font = getFontStyle(".id6-instructions_copy2");

        var copy3 = copy1.clone();
        var copy4 = copy2.clone();
        this.s_content.addChild(copy1, copy2, copy3, copy4);


        //controls
        if (Main.IsMobile())
        {
            if (Main.ANDROID)
            {
                var img = new createjs.Bitmap(Main.GetImage("arrow_up"));
                bb = img.getBounds();
                img.regX = bb.width >> 1;
                img.regY = bb.height >> 1;
                img.scaleX = img.scaleY = 0.8;
                img.x = 440;
                img.y = 240;
                this.s_content.addChild(img);

                img = img.clone();
                img.rotation = 180;
                img.x = 900;
                img.y = 240;
                this.s_content.addChild(img);
            }
            else
            {
                var img = new createjs.Sprite(Main.GetSpriteSheet("interface"));
                img.gotoAndStop("instr_swipe_up");
                bb = img.getBounds();
                img.x = 400;
                img.y = 170;
                this.s_content.addChild(img);

                var img = new createjs.Sprite(Main.GetSpriteSheet("interface"));
                img.gotoAndStop("instr_swipe_down");
                bb = img.getBounds();
                img.x = 880;
                img.y = 170;
                this.s_content.addChild(img);
            }
        }
        else
        {
            //images
            var img = new createjs.Sprite(Main.GetSpriteSheet("interface"));
            img.gotoAndStop("instr_key_up");
            bb = img.getBounds();
            img.x = 400;
            img.y = 200;
            this.s_content.addChild(img);

            var img = new createjs.Sprite(Main.GetSpriteSheet("interface"));
            img.gotoAndStop("instr_key_down");
            bb = img.getBounds();
            img.x = 860;
            img.y = 200;
            this.s_content.addChild(img);
        }


        copy1.text = Main.COPY.getCopy((Main.IsMobile() && !Main.ANDROID) ? "id5-instructions_copy1_mobile" : "id4-instructions_copy1");
        copy2.text = Main.COPY.getCopy((Main.IsMobile() && !Main.ANDROID) ? "id7-instructions_copy2_mobile" : "id6-instructions_copy2");
        copy3.text = Main.COPY.getCopy((Main.IsMobile() && !Main.ANDROID) ? "id9-instructions_copy3_mobile" : "id8-instructions_copy3");
        copy4.text = Main.COPY.getCopy((Main.IsMobile() && !Main.ANDROID) ? "id11-instructions_copy4_mobile" : "id10-instructions_copy4");

        var bb1 = copy1.getBounds();
        var bb2 = copy2.getBounds();
        copy1.x = 280 - (bb1.width + bb2.width) / 2;
        copy2.x = copy1.x + bb1.width;

        bb1 = copy3.getBounds();
        bb2 = copy4.getBounds();
        copy3.x = 690 - (bb1.width + bb2.width) / 2;
        copy4.x = copy3.x + bb1.width;


        //button
        this.s_btnPlay = new BtnPlay();
        this.s_container.addChild(this.s_btnPlay);

        //
        if (Main.IsMobile())
        {
            createjs.Touch.enable(Main.s_stage);
        }
        else
        {
            document.onkeydown = function(e){ScreenInstructions.HandleKeyDown(e);};
        }
        this.s_btnPlay.addEventListener("click", function(e){ScreenInstructions.OnClickPlay(e);});


        //
        var size = Main.GetCanvasSize();
        this.UpdateCanvasSize(size.width, size.height);

        return this;
    },


    Remove: function()
    {
        this.s_content.removeAllChildren();
        this.s_content = null;

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
            this.s_content.scaleX = this.s_content.scaleY = width / bb.width;

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


        if (this.s_inGame)
        {
            ScreenGame.HideHelp();
        }
        else
        {
            Navigation.ShowScreen(Navigation.SCREEN_GAME);
        }
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
                ScreenInstructions.OnClickPlay();
                break;
        }
    }
};