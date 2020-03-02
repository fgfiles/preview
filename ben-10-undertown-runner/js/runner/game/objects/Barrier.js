/**
 * Created by pawel on 02.10.2014.
 */
var Barrier = function(spritesheet, x, y, custom)
{
    createjs.Container.call(this);

    this.m_asset = new createjs.Sprite(Main.GetSpriteSheet(spritesheet));
    this.m_asset.gotoAndStop("barrier");
    this.addChild(this.m_asset);

    this.m_rect = {x: 13, y: 16, w: 26, h: 37};
    this.x = x;
    this.y = y - 53;

    this.m_broken = false;

    this.m_custom = custom;
    this.visible = false;
    this.m_isVisible = true;
    if (this.m_custom)
    {
        this.m_isVisible = false;
    }
};

Barrier.prototype = Object.create(createjs.Container.prototype);
Barrier.prototype.constructor = Barrier;


Barrier.prototype.reset = function()
{
    this.visible = false;
    this.m_isVisible = true;
    if (this.m_custom)
    {
        this.m_isVisible = false;
    }

    this.m_broken = false;
    this.m_asset.gotoAndStop(0);
};


Barrier.prototype.getRect = function()
{
    return {x: this.x + this.m_rect.x, y: this.y + this.m_rect.y, width: this.m_rect.w, height: this.m_rect.h};
};


Barrier.prototype.update = function(hero)
{
    if (this.m_isVisible && !this.m_broken)
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

            if (!hero.m_isDead && hero.m_onGround)
            {
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
                    hero.onHitBarrier();
                    this.m_asset.gotoAndPlay("barrier");
                    this.m_broken = true;
                }
            }
        }
    }
};


Barrier.prototype.showCustom = function(heroType, width)
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