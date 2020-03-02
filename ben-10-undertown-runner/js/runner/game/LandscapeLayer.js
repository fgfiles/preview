/**
 * Created by pawel on 18.08.2014.
 */
var LandscapeLayer = function(spritesheet, scrollRatio, screenH)
{
    createjs.Container.call(this);

    this.m_scrollRatio = scrollRatio;
    this.m_screenH = screenH;

    this.m_info = Main.GetSpriteSheet(spritesheet).getFrame(0);
    this.m_asset1 = new createjs.Bitmap(this.m_info.image);

    this.m_asset2 = this.m_asset1.clone();
    this.m_asset2.x = this.m_info.rect.width - 1;

    this.addChild(this.m_asset1);
    this.addChild(this.m_asset2);
};

LandscapeLayer.prototype = Object.create(createjs.Container.prototype);
LandscapeLayer.prototype.constructor = LandscapeLayer;


LandscapeLayer.prototype.remove = function()
{
    this.removeAllChildren();
    this.m_asset1 = null;
    this.m_asset2 = null;
};


LandscapeLayer.prototype.setScreenHeight = function(value)
{
    this.m_screenH = value;
};


LandscapeLayer.prototype.scroll = function(dx, y)
{
    this.x -= dx * this.m_scrollRatio;
    this.y = -y * (this.m_info.rect.height - this.m_screenH);

    //
    if (this.x < -this.m_info.rect.width)
    {
        this.x += this.m_info.rect.width;
    }
};
