/**
 * Created by pawel on 20.10.2014.
 */
var BtnPlay = function()
{
    createjs.Container.call(this);

    this.m_bg = new createjs.Sprite(Main.GetSpriteSheet("interface"));
    this.m_bg.gotoAndStop("btn_play");
    this.addChild(this.m_bg);

    var bb = this.m_bg.getBounds();

    this.m_text = new createjs.Text();
    this.m_text.textAlign = "center";
    this.m_text.textBaseline = "middle";
    this.m_text.color = "#000000";
    this.m_text.font = getFontStyle(".id2-play");
    this.m_text.text = Main.COPY.getCopy("id2-play");
    this.m_text.x = bb.width / 2;
    this.m_text.y = bb.height / 2 - 5;

    this.cursor = "pointer";

    this.addChild(this.m_text);
};


BtnPlay.prototype = Object.create(createjs.Container.prototype);
BtnPlay.prototype.constructor = BtnPlay;

