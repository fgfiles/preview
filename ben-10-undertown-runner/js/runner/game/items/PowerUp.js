/**
 * Created by pawel on 10.10.2014.
 */
var PowerUp = function(type, x, y, custom)
{
    createjs.Container.call(this);

    this.m_type = type + "_" + (1 + Math.floor(Math.random() * 3));

    this.m_burst = new createjs.Sprite(Main.GetSpriteSheet("items"));
    this.m_burst.visible = false;
    this.m_burst.x = -36;
    this.m_burst.y = -20;
    this.m_burst.compositeOperation = "lighter";
    this.addChild(this.m_burst);

    this.m_asset = new createjs.Sprite(Main.GetSpriteSheet("items"));
    this.m_asset.gotoAndStop(this.m_type);
    this.addChild(this.m_asset);

    this.x = x - 90;
    this.y = y - 92;

    this.m_width = 44;
    this.m_height = 44;
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


PowerUp.prototype = Object.create(createjs.Container.prototype);
PowerUp.prototype.constructor = PowerUp;


PowerUp.prototype.getRect = function()
{
    return {x: this.m_x, y: this.m_y, width: this.m_width, height: this.m_height};
};


PowerUp.prototype.update = function(hero)
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

                if (Collision.CheckRects(rect0, rect1))
                {
                    this.hide();
                    this.m_collected = true;
                    hero.onCollectPowerUp(this.m_type);
                    ScreenGame.OnCollectPowerUp();
                }
            }
        }
    }
};


PowerUp.prototype.reset = function()
{
    this.m_asset.alpha = 1;
    this.m_collected = false;
    this.m_burst.visible = false;

    this.m_type = "powerup_" + (1 + Math.floor(Math.random() * 3));
    this.m_asset.gotoAndStop(this.m_type);

    this.visible = false;
    this.m_isVisible = true;
    if (this.m_custom)
    {
        this.m_isVisible = false;
    }
};


PowerUp.prototype.hide = function()
{
    var me = this;
    this.m_burst.visible = true;
    this.m_burst.gotoAndPlay("burst");
    this.m_burst.addEventListener("animationend", function(e){me.onBurstEnd(e);});
    createjs.Tween.get(this.m_asset).to({alpha: 0}, 400, createjs.Ease.sineOut);
};


PowerUp.prototype.onBurstEnd = function(e)
{
    this.m_burst.removeAllEventListeners("animationend");
    this.m_burst.visible = false;
    this.visible = false;
    this.m_isVisible = false;
};


PowerUp.prototype.showCustom = function(heroType, width)
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