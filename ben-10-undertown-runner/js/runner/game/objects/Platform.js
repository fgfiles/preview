/**
 * Created by pawel on 02.10.2014.
 */
var Platform = function(spritesheet, x, y, width, height, custom)
{
    createjs.Container.call(this);

    var info = Main.GetSpriteSheet(spritesheet).getFrame(0);
    this.m_asset = new createjs.Shape();
    this.m_asset.graphics.beginStroke("#000000").beginBitmapFill(info.image, "repeat").drawRect(0, 0, width, height).endFill();
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

Platform.prototype = Object.create(createjs.Container.prototype);
Platform.prototype.constructor = Platform;


Platform.prototype.reset = function()
{
    this.visible = false;
    this.m_isVisible = true;
    if (this.m_custom)
    {
        this.m_isVisible = false;
    }
};


Platform.prototype.getRect = function()
{
    return {x: this.x, y: this.y, width: this.m_width, height: this.m_height};
};


Platform.prototype.update = function(hero)
{
    if (this.m_isVisible)
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

            var p0 = hero.parent.localToGlobal(hero.m_posX, hero.m_levelHeight - hero.m_posY);
            var p0l = this.parent.globalToLocal(p0.x, p0.y);
            var p1 = {x: this.x, y: this.y};
            var p1a = {x: p1.x + this.m_width, y: p1.y};

            if (p0l.x > p1.x && p0l.x < p1a.x && p0l.y > p1.y && p0l.y - p1.y <= -hero.m_speedY * ScreenGame.s_ratio + 2)
            {
                hero.onPlatform(this.y);
            }
        }
    }
};


Platform.prototype.showCustom = function(heroType, width)
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