/**
 * Created by pawel on 02.10.2014.
 */
var Block = function(spritesheet, x, y, width, height, custom)
{
    createjs.Container.call(this);

    var info = Main.GetSpriteSheet(spritesheet).getFrame(0);
    this.m_asset = new createjs.Shape();
//    this.m_asset.graphics.setStrokeStyle(3).beginStroke("#262f32").beginBitmapFill(info.image, "repeat").drawRect(0, 0, width, height).endFill();
    this.m_asset.graphics.setStrokeStyle(3).beginStroke("#222222").beginBitmapFill(info.image, "repeat").drawRect(0, 0, width, height).endFill();
    this.m_asset.cache(0, 0, width, height);
    this.addChild(this.m_asset);

    this.m_width = width;
    this.m_height = height;
    this.x = x;
    this.y = y;

    this.m_custom = custom;
    this.visible = false;
    this.m_isVisible = true;
    if (this.m_custom)
    {
        this.m_isVisible = false;
    }
};

Block.prototype = Object.create(createjs.Container.prototype);
Block.prototype.constructor = Block;


Block.prototype.reset = function()
{
    this.visible = false;
    this.m_isVisible = true;
    if (this.m_custom)
    {
        this.m_isVisible = false;
    }
};


Block.prototype.getRect = function()
{
    return {x: this.x, y: this.y, width: this.m_width, height: this.m_height};
};


Block.prototype.update = function(hero)
{
    if (this.m_isVisible)
    {
        if (!hero.m_isDead)
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
                //var pt1 = this.parent.localToGlobal(rect1.x, rect1.y);
                //rect1.x = pt1.x;
                //rect1.y = pt1.y;

                if (Collision.CheckRects(rect0, rect1))
                {
                    hero.onHitBlock(this, rect0, rect1);
                }
            }
        }
    }
};


Block.prototype.showCustom = function(heroType, width)
{
    if (this.m_custom)
    {
        width /= Main.s_scale < 1 ? Main.s_scale : 1;
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