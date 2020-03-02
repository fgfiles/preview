/**
 * Created by pawel on 18.08.2014.
 */
var GameLayer = function(height, screenH)
{
    createjs.Container.call(this);

    this.m_height = height;
    this.m_screenH = screenH;
    this.m_sections = new Array();
};

GameLayer.prototype = Object.create(createjs.Container.prototype);
GameLayer.prototype.constructor = GameLayer;


GameLayer.prototype.remove = function()
{
    this.removeAllChildren();
    this.m_sections = null;
};


GameLayer.prototype.setScreenHeight = function(value)
{
    this.m_screenH = value;
};

GameLayer.prototype.addSection = function(section, heroType)
{
    var last = this.m_sections[this.m_sections.length - 1];
    if (last)
    {
        section.x = last.x + last.m_info.length;
    }
    else
    {
        section.x = 0;
    }

    this.m_sections.push(section);
    this.addChildAt(section, 0);

    section.updateCustomObjects(heroType, Main.s_stage.canvas.width);
};


GameLayer.prototype.addHero = function(hero)
{
    this.m_hero = hero;
    this.addChild(hero);
};


GameLayer.prototype.update = function()
{
    for (var i = 0; i < this.m_sections.length; i++)
    {
        this.m_sections[i].update(this.m_hero);
    }
};


GameLayer.prototype.scroll = function(dx, y)
{
    var end;
    //move sections
    for (var i = 0; i < this.m_sections.length; i++)
    {
        var section = this.m_sections[i];
        section.x -= dx;

        //
        end = section.x + section.m_info.length;

        //remove section if out of the screen
        if (section.x < -section.m_info.length)
        {
            this.m_sections.splice(i, 1);
            this.removeChild(section);
            section.reset();
            i--;
        }
    }

    //add section if end is
    var width = Main.s_stage.canvas.width;
    width /= Main.s_scale < 1 ? Main.s_scale : 1;
    if (end < width)
    {
        ScreenGame.AddSection();
    }

    //
    this.y = -y * (this.m_height - this.m_screenH);
};


GameLayer.prototype.setScreenHeight = function(value)
{
    this.m_screenH = value;
};


GameLayer.prototype.onTransformHero = function(heroType)
{
    for (var i = 0; i < this.m_sections.length; i++)
    {
        this.m_sections[i].updateCustomObjects(heroType, Main.s_stage.canvas.width);
    }
};
