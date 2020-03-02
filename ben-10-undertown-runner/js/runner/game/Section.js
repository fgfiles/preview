/**
 * Created by pawel on 07.10.2014.
 */
var Section = function(info, levelHeight)
{
    createjs.Container.call(this);

    this.m_info = info;

    //add blocks
    this.m_objects = new Array();
    for (var i = 0; i < info.blocks.length; i++)
    {
        var d = info.blocks[i];
        var block = new Block(d.texture, d.x, levelHeight - d.y, d.width, d.height, d.custom);
        this.addChild(block);
        this.m_objects.push(block);
    }
    //add stalls
    for (var i = 0; i < info.stalls.length; i++)
    {
        var d = info.stalls[i];
        var stall = new Stall("stalls", d.model, d.x, levelHeight - d.y, d.custom);
        this.addChild(stall);
        this.m_objects.push(stall);
    }
    //add platforms
    for (var i = 0; i < info.platforms.length; i++)
    {
        var d = info.platforms[i];
        var platform = new Platform("platform", d.x, levelHeight - d.y, d.width, d.height, d.custom);
        this.addChild(platform);
        this.m_objects.push(platform);
    }
    //add items
    for (var i = 0; i < info.items.length; i++)
    {
        var d = info.items[i];
        if (d.type == "o3")
        {
            for (var j = 0; j < 3; j++)
            {
                var item = new Orb(d.x + j * 50, levelHeight - d.y, d.custom);
                this.addChild(item);
                this.m_objects.push(item);
            }
        }
        else if (d.type == "o5")
        {
            var pattern = [
                {x: 0, y: 0},
                {x: 50, y: 30},
                {x: 100, y: 0},
                {x: 150, y: 30},
                {x: 200, y: 0}
            ];
            for (var j = 0; j < 5; j++)
            {
                var item = new Orb(d.x + pattern[j].x, levelHeight - d.y - pattern[j].y, d.custom);
                this.addChild(item);
                this.m_objects.push(item);
            }
        }
        else if (d.type == "o7")
        {
            var pattern = [
                {x: 0, y: 0},
                {x: 50, y: 50},
                {x: 100, y: 80},
                {x: 150, y: 90},
                {x: 200, y: 80},
                {x: 250, y: 50},
                {x: 300, y: 0}
            ];
            for (var j = 0; j < 7; j++)
            {
                var item = new Orb(d.x + pattern[j].x, levelHeight - d.y - pattern[j].y, d.custom);
                this.addChild(item);
                this.m_objects.push(item);
            }
        }
        else
        {
            //power up
            var item = new PowerUp(d.type, d.x, levelHeight - d.y);
            this.addChild(item);
            this.m_objects.push(item);
        }
    }
    //add barriers
    for (var i = 0; i < info.barriers.length; i++)
    {
        var d = info.barriers[i];
        var barrier = new Barrier("barrier", d.x, levelHeight - d.y, d.custom);
        this.addChild(barrier);
        this.m_objects.push(barrier);
    }
    //add enemies
    this.m_enemies = new Array();
    for (var i = 0; i < info.enemies.length; i++)
    {
        var d = info.enemies[i];
        var enemy = new Enemy("enemies", d.model, d.x, levelHeight - d.y, d.custom);
        this.addChild(enemy);
        this.m_enemies.push(enemy);
    }
};

Section.prototype = Object.create(createjs.Container.prototype);
Section.prototype.constructor = Section;


Section.prototype.remove = function()
{
    this.removeAllChildren();

    for (var i = 0; i < this.m_enemies.length; i++)
    {
        this.m_enemies[i].remove();
    }
    this.m_objects = null;
    this.m_enemies = null;
};


Section.prototype.update = function(hero)
{
    for (var i = 0; i < this.m_objects.length; i++)
    {
        this.m_objects[i].update(hero);
    }
    for (var i = 0; i < this.m_enemies.length; i++)
    {
        this.m_enemies[i].update(hero);
    }
};


Section.prototype.reset = function()
{
    for (var i = 0; i < this.m_objects.length; i++)
    {
        this.m_objects[i].reset();
    }
    for (var i = 0; i < this.m_enemies.length; i++)
    {
        this.m_enemies[i].reset();
    }
};


Section.prototype.start = function()
{
    for (var i = 0; i < this.m_enemies.length; i++)
    {
        this.m_enemies[i].start();
    }
};


Section.prototype.updateCustomObjects = function(heroType, width)
{
    for (var i = 0; i < this.m_objects.length; i++)
    {
        this.m_objects[i].showCustom(heroType, width);
    }
    for (var i = 0; i < this.m_enemies.length; i++)
    {
        this.m_enemies[i].showCustom(heroType, width);
    }
};