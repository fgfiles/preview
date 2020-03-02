/**
 * Created by pawel on 20.10.2014.
 */
var Hud = function(hero)
{
    createjs.Container.call(this);

    var me = this;

    this.m_hero = hero;

    this.m_panel = new createjs.Sprite(Main.GetSpriteSheet("interface"));
    this.m_panel.gotoAndStop("game_score_panel");
    this.addChild(this.m_panel);
    this.m_panel.x = 0;
    this.m_panel.y = 0;

    this.m_text = new createjs.Text();
    this.m_text.textAlign = "center";
    this.m_text.textBaseline = "middle";
    this.m_text.color = "#000000";
    this.m_text.font = getFontStyle(".in_game_score");
    this.m_text.text = "0";
    this.m_text.x = 125;
    this.m_text.y = 40;
    this.addChild(this.m_text);

    this.m_txtCountDown = new createjs.Text();
    this.m_txtCountDown.textAlign = "center";
    this.m_txtCountDown.textBaseline = "middle";
    this.m_txtCountDown.color = "#ffffff";
    this.m_txtCountDown.font = "250px header";
    this.m_txtCountDown.text = "3";
    this.addChild(this.m_txtCountDown);
    this.m_txtCountDown.visible = false;


    if (Main.IsMobile())
    {
        createjs.Touch.enable(Main.s_stage);

        //if android add arrows
        if (Main.ANDROID)
        {
            this.m_btnJump = new createjs.Bitmap(Main.GetImage("arrow_up"));
            this.addChild(this.m_btnJump);
            this.m_btnSlide = new createjs.Bitmap(Main.GetImage("arrow_up"));
            this.addChild(this.m_btnSlide);
            this.m_btnSlide.rotation = 180;
            this.m_btnJump.alpha = this.m_btnSlide.alpha = 0.4;
        }
    }
    else
    {
        //add sound button
        this.m_btnSound = new BtnSoundControl();
        this.addChild(this.m_btnSound);
    }

    //
    this.m_btnHelp = new createjs.Sprite(Main.GetSpriteSheet("interface"));
    this.m_btnHelp.gotoAndStop("btn_help");
    this.addChild(this.m_btnHelp);
    this.m_btnHelp.cursor = "pointer";
    this.m_btnHelp.addEventListener("click", function(e){me.onClickHelp(e);});

    //
    var size = Main.GetCanvasSize();
    this.updateCanvasSize(size.width, size.height);
};


Hud.prototype = Object.create(createjs.Container.prototype);
Hud.prototype.constructor = Hud;


Hud.prototype.remove = function()
{
    this.removeAllChildren();
    this.m_hero = null;
    this.m_panel = null;
    this.m_text = null;
    this.m_btnHelp.removeAllEventListeners("click");
    this.m_btnHelp = null;
    if (this.m_btnSound)
    {
        this.m_btnSound.remove();
        this.m_btnSound = null;
    }

    if (this.m_btnJump)
    {
        this.Stop();
        this.m_btnJump = null;
        this.m_btnSlide = null;
    }
};


Hud.prototype.onClickHelp = function(e)
{
    e.preventDefault();
    ScreenGame.ShowHelp();
};


Hud.prototype.onTouchJump = function(e)
{
    e.preventDefault();
    this.m_hero.actionA();
};


Hud.prototype.onReleaseJump = function(e)
{
    e.preventDefault();
    this.m_hero.releaseActionA();
};


Hud.prototype.onTouchSlide = function(e)
{
    e.preventDefault();
    this.m_hero.actionB();
};


Hud.prototype.onReleaseSlide = function(e)
{
    e.preventDefault();
    this.m_hero.releaseActionB();
};


Hud.prototype.updateCanvasSize = function(width, height)
{
    var bb = this.m_btnHelp.getBounds();
    this.m_btnHelp.x = width / Main.s_scale - bb.width;

    if (this.m_btnSound)
    {
        bb = this.m_btnSound.getBounds();
        this.m_btnSound.x = width / Main.s_scale - bb.width - 105;
    }

    this.m_txtCountDown.scaleX = this.m_txtCountDown.scaleY = Main.s_scale;
    this.m_txtCountDown.x = width / Main.s_scale >> 1;
    this.m_txtCountDown.y = height / Main.s_scale >> 1;

    //
    if (this.m_btnJump)
    {
        bb = this.m_btnJump.getBounds();
        this.m_btnJump.x = width / Main.s_scale - bb.width - 15;
        this.m_btnJump.y = height / Main.s_scale - bb.height - 15;

        this.m_btnSlide.x = bb.width + 15;
        this.m_btnSlide.y = height / Main.s_scale - 15;
    }
};


Hud.prototype.setScore = function(score)
{
    this.m_text.text = score;
};


Hud.prototype.showCountDown = function(value)
{
    if (value > 0)
    {
        this.m_txtCountDown.visible = true;
        this.m_txtCountDown.text = value;
    }
    else
    {
        this.m_txtCountDown.visible = false;
    }

    Main.s_stage.update();
};

//buttons controller start/stop
Hud.prototype.Start = function()
{
    var me = this;
    this.m_btnJump.addEventListener("mousedown", function(e){me.onTouchJump(e);});
    this.m_btnJump.addEventListener("pressup", function(e){me.onReleaseJump(e);});
    this.m_btnSlide.addEventListener("mousedown", function(e){me.onTouchSlide(e);});
    this.m_btnSlide.addEventListener("pressup", function(e){me.onReleaseSlide(e);});
};

Hud.prototype.Stop = function()
{
    this.m_btnJump.removeAllEventListeners("mousedown");
    this.m_btnJump.removeAllEventListeners("pressup");
    this.m_btnSlide.removeAllEventListeners("mousedown");
    this.m_btnSlide.removeAllEventListeners("pressup");
};