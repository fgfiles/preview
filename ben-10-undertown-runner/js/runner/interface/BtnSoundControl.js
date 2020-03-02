/**
 * Created by pawel on 20.10.2014.
 */
var BtnSoundControl = function()
{
    createjs.Container.call(this);

    this.m_soundOn = new createjs.Sprite(Main.GetSpriteSheet("interface"));
    this.m_soundOn.gotoAndStop("btn_sound_on");
    this.addChild(this.m_soundOn);

    this.m_soundOff = new createjs.Sprite(Main.GetSpriteSheet("interface"));
    this.m_soundOff.gotoAndStop("btn_sound_off");
    this.addChild(this.m_soundOff);

    this.cursor = "pointer";

    var me = this;
    this.addEventListener("click", function(e){me.switchState(e);});

    this.init();
};


BtnSoundControl.prototype = Object.create(createjs.Container.prototype);
BtnSoundControl.prototype.constructor = BtnSoundControl;


BtnSoundControl.prototype.remove = function()
{
    this.removeAllChildren();
    this.m_soundOn = null;
    this.m_soundOff = null;

    this.removeAllEventListeners("click");
};


BtnSoundControl.prototype.init = function()
{
    if (SoundsManager.GetMute())
    {
        //mute
        this.m_soundOff.visible = true;
        this.m_soundOn.visible = false;
    }
    else
    {
        this.m_soundOff.visible = false;
        this.m_soundOn.visible = true;
    }
};


BtnSoundControl.prototype.switchState = function()
{
    SoundsManager.ToggleMute();
    this.init();
};