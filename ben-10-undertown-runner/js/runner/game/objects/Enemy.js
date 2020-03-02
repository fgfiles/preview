/**
 * Created by pawel on 02.10.2014.
 */
var Enemy = function(spritesheet, model, x, y, custom)
{
    this.INFO = {
        droid: {
            walk: {dx: 0, dy: 0, height: 95, rect: {x: 19, y: 0, w: 37, h: 75}},
            death: {dx: -24, dy: -7, height: 130, rect: {x: 0, y: 0, w: 0, h: 0}}
        },
        crab: {
            walk: {dx: 0, dy: 0, height: 86, rect: {x: 4, y: 2, w: 64, h: 82}},
            death: {dx: -16, dy: -2, height: 81, rect: {x: 0, y: 0, w: 0, h: 0}}
        }
    };

    createjs.Container.call(this);

    this.m_model = model;
    this.m_custom = custom;

    this.m_asset = new createjs.Sprite(Main.GetSpriteSheet(spritesheet));
    this.addChild(this.m_asset);

    this.x = this.m_x0 = x;
    this.m_y0 = y;

    this.m_isDestroyed = false;

    this.visible = false;
    this.m_isVisible = true;
    if (this.m_custom)
    {
        this.m_isVisible = false;
    }
};

Enemy.prototype = Object.create(createjs.Container.prototype);
Enemy.prototype.constructor = Enemy;


Enemy.prototype.remove = function()
{
    this.m_asset.stop();
    this.removeChild(this.m_asset);
};


Enemy.prototype.reset = function()
{
    this.m_isDestroyed = false;
    this.x = this.m_x0;

    this.visible = false;
    this.m_isVisible = true;
    if (this.m_custom)
    {
        this.m_isVisible = false;
    }

    this.m_asset.stop();
};


Enemy.prototype.start = function()
{
    this.setAnim("walk");
};


Enemy.prototype.getRect = function()
{
    var rect = this.m_info.rect;
    return {x: this.x + rect.x, y: this.y + rect.y, width: rect.w, height: rect.h};
};


Enemy.prototype.update = function(hero)
{
    if (hero.m_started && !this.m_isDestroyed && this.m_isVisible)
    {
        this.x -= 0.5 * ScreenGame.s_ratio;

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

            if (!hero.m_isDead)
            {
                var rect1 = this.getRect();
                //var pt1 = this.parent.localToGlobal(rect1.x, rect1.y);
                //rect1.x = pt1.x;
                //rect1.y = pt1.y;

                //check attack
                var pt0;
                var rect0 = hero.getAttackRect();
                if (rect0)
                {
                    var pt0 = hero.parent.localToGlobal(rect0.x, rect0.y);
                    var pt0l = this.parent.globalToLocal(pt0.x, pt0.y);
                    rect0.x = pt0l.x;
                    rect0.y = pt0l.y;

                    if (Collision.CheckRects(rect0, rect1))
                    {
                        this.destroy();
                        return;
                    }
                }

                //
                rect0 = hero.getRect();
                pt0 = hero.parent.localToGlobal(rect0.x, rect0.y);
                var pt0l = this.parent.globalToLocal(pt0.x, pt0.y);
                rect0.x = pt0l.x;
                rect0.y = pt0l.y;

                if (Collision.CheckRects(rect0, rect1))
                {
                    hero.hitObstacle();
                }
            }
        }
    }
};


Enemy.prototype.destroy = function()
{
    if (!this.m_isDestroyed)
    {
        this.m_isDestroyed = true;
        this.setAnim("death");

        var me = this;
        this.m_asset.addEventListener("animationend", function(e){me.onDeathAnimEnd(e);});

        SoundsManager.PlaySound(this.m_model + "_dead");
    }
};


Enemy.prototype.onDeathAnimEnd = function(e)
{
    this.m_asset.removeAllEventListeners("animationend");
};


Enemy.prototype.setAnim = function(animId)
{
    this.m_info = this.INFO[this.m_model][animId];
    this.m_asset.gotoAndPlay(this.m_model + "_" + animId);

    this.x += this.m_info.dx;
    this.y = this.m_y0 - this.m_info.height + this.m_info.dy;
};


Enemy.prototype.showCustom = function(heroType, width)
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