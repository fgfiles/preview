/**
 * Created by pawel on 10.10.2014.
 */
var Orb = function(x, y, custom)
{
    createjs.Container.call(this);

    this.m_asset = new createjs.Bitmap(Main.GetSpriteSheet("orb").getFrame(0).image);
    //this.m_asset.gotoAndStop("orb");
    //this.m_asset.compositeOperation = "lighter";
    this.addChild(this.m_asset);

    this.x = x - 38;
    this.y = y - 38;

    this.m_width = 14;
    this.m_height = 14;
    this.m_x = x - this.m_width / 2;
    this.m_y = y - this.m_height / 2;

    this.m_collected = false;

    this.m_custom = custom;
    this.visible = false;
    this.m_isVisible = true;
    if (this.m_custom)
    {
        this.m_isVisible = false;
    }
};


Orb.prototype = Object.create(createjs.Container.prototype);
Orb.prototype.constructor = Orb;


Orb.prototype.reset = function()
{
    this.alpha = 1;
    this.m_collected = false;

    this.visible = false;
    this.m_isVisible = true;
    if (this.m_custom)
    {
        this.m_isVisible = false;
    }
};


Orb.prototype.getRect = function()
{
    return {x: this.m_x, y: this.m_y, width: this.m_width, height: this.m_height};
};


Orb.prototype.update = function(hero)
{
    if (this.m_isVisible)
    {
        if (!this.m_collected)
        {
            var bb = this.getBounds();
            var pt = this.parent.localToGlobal(this.x, this.y);
            pt.x /= Main.s_scale * Main.SC;
            var canvasWidth = Main.s_stage.canvas.width / (Main.s_scale < 1 ? Main.s_scale : 1);
            if (pt.x > canvasWidth || pt.x + bb.width < 0)
            {
                this.visible = false;
            }
            else
            {
                this.visible = true;

                var rect0 = hero.getRect();
                var pt0 = hero.parent.localToGlobal(rect0.x, rect0.y);
                var pt0l = this.parent.globalToLocal(pt0.x, pt0.y);
                rect0.x = pt0l.x;
                rect0.y = pt0l.y;

                var rect1 = this.getRect();
//                var pt1 = this.parent.localToGlobal(rect1.x, rect1.y);
//                rect1.x = pt1.x;
//                rect1.y = pt1.y;

                if (Collision.CheckRects(rect0, rect1))
                {
                    //collect
                    this.hide();
                    this.m_collected = true;
                    SoundsManager.PlaySound("orb");
                    ScreenGame.OnCollectOrb();
                }
            }
        }
    }
};


Orb.prototype.hide = function()
{
    createjs.Tween.get(this).to({alpha: 0, visible: false}, 200, createjs.Ease.sineOut);
};


Orb.prototype.showCustom = function(heroType, width)
{
    if (this.m_custom)
    {
        width /= Main.s_scale < 1 ? Main.s_scale : 1
        var pt = this.parent.localToGlobal(this.x, this.y);
        if (pt.x > width)
        {
            if (this.m_custom.indexOf(heroType) >= 0)
            {
                this.m_isVisible = true;
            }
            else
            {
                this.m_isVisible = false;
            }
        }
    }
};