/**
 * Created by pawel on 02.10.2014.
 */
var Stall = function(spritesheet, model, x, y, custom)
{
    this.INFO = [
        {name: "stall_1", width: 376, height: 225, roof: {dx: 10, dy: 0, w: 300}},
        {name: "stall_2", width: 381, height: 207, roof: {dx: 30, dy: 47, w: 320}},
        {name: "stall_3", width: 322, height: 257, roof: {dx: 34, dy: 97, w: 255}}
    ];

    createjs.Container.call(this);

    this.m_info = this.INFO[model];

    this.m_asset = new createjs.Sprite(Main.GetSpriteSheet(spritesheet));
    this.m_asset.gotoAndStop(this.m_info.name);
    this.addChild(this.m_asset);

    this.x = x;
    this.y = y - this.m_info.height;

    this.m_custom = custom;
    this.visible = false;
    this.m_isVisible = true;
    if (this.m_custom)
    {
        this.m_isVisible = false;
    }
};

Stall.prototype = Object.create(createjs.Container.prototype);
Stall.prototype.constructor = Stall;


Stall.prototype.reset = function()
{
    this.visible = false;
    this.m_isVisible = true;
    if (this.m_custom)
    {
        this.m_isVisible = false;
    }
};


Stall.prototype.getRect = function()
{
    return {x: this.x, y: this.y, width: this.m_info.width, height: this.m_info.height};
};


Stall.prototype.update = function(hero)
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

            //check roof
            if (hero.m_speedY < 0)
            {
                var p0 = hero.parent.localToGlobal(hero.m_posX, hero.m_levelHeight - hero.m_posY);
                var p0l = this.parent.globalToLocal(p0.x, p0.y);
                var p1 = {x: this.x, y: this.y};
                p1.x += this.m_info.roof.dx;
                p1.y += this.m_info.roof.dy;
                var p1a = {x: p1.x + this.m_info.roof.w, y: p1.y};

                if (p0l.x > p1.x && p0l.x < p1a.x && p0l.y > p1.y && p0l.y - p1.y <= -hero.m_speedY * ScreenGame.s_ratio + 2)
                {
                    hero.onPlatform(this.y + this.m_info.roof.dy);
                }
            }
        }
    }
};


Stall.prototype.showCustom = function(heroType, width)
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