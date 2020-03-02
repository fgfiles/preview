/**
 * Created by pawel on 02.10.2014.
 */
var Hero = function(x, y, levelHeight)
{
    this.ANIM_IDLE =    "idle";
    this.ANIM_RUN =     "run";
    this.ANIM_JUMP =    "jump";
    this.ANIM_FALL =    "fall";
    this.ANIM_SLIDE =   "slide";
    this.ANIM_DEATH =   "death";
    this.ANIM_ATTACK =  "attack";
    this.ANIM_TRIP =    "trip";

    this.MODE_BEN = "ben";
    this.MODE_CANNONBOLT = "cannonbolt";
    this.MODE_HOPPER = "hopper";
    this.MODE_ARMODRILLO = "armodrillo";

    this.SIZES = {
        ben: {
            death: {dx: -30, dy: -90, rect: {x: 0, y: 0, w: 0, h: 0}},
            fall: {dx: -29, dy: -71, rect: {x: 12, y: 0, w: 34, h: 71}},
            idle: {dx: -18, dy: -106, rect: {x: 0, y: 0, w: 36, h: 109}},
            jump: {dx: -50, dy: -75, rect: {x: 34, y: 0, w: 34, h: 70}},
            run: {dx: -60, dy: -97, rect: {x: 41, y: 8, w: 34, h: 92}},
            slide: {dx: -68, dy: -50, rect: {x: 13, y: 0, w: 100, h: 50}},
            trip: {dx: -60, dy: -97, rect: {x: 41, y: 8, w: 34, h: 92}}
        },
        hopper : {
            death: {dx: -31, dy: -98, rect: {x: 0, y: 0, w: 0, h: 0}},
            fall: {dx: -20, dy: -92, rect: {x: 7, y: 0, w: 24, h: 92}},
            jump: {dx: -64, dy: -105, rect: {x: 38, y: 0, w: 38, h: 92}},
            run: {dx: -98, dy: -104, rect: {x: 74, y: 0, w: 44, h: 104}},
            slide: {dx: -66, dy: -60, rect: {x: 34, y: 0, w: 56, h: 64}},
            trip: {dx: -98, dy: -104, rect: {x: 74, y: 0, w: 44, h: 104}}
        },
        cannonbolt : {
            death: {dx: -42, dy: -128, rect: {x: 0, y: 0, w: 0, h: 0}},
            fall: {dx: -46, dy: -89, rect: {x: 6, y: 9, w: 80, h: 82}},
            jump: {dx: -46, dy: -89, rect: {x: 6, y: 9, w: 80, h: 82}},
            run: {dx: -78, dy: -130, rect: {x: 30, y: 8, w: 74, h: 122}},
            slide: {dx: -46, dy: -89, rect: {x: 6, y: 9, w: 80, h: 82}, hit: {x: 6, y: 9, w: 80, h: 82}},
            trip: {dx: -78, dy: -133, rect: {x: 30, y: 8, w: 74, h: 122}}
        },
        armodrillo : {
            death: {dx: -70, dy: -124, rect: {x: 0, y: 0, w: 0, h: 0}},
            fall: {dx: -83, dy: -131, rect: {x: 37, y: 12, w: 80, h: 114}},
            jump: {dx: -61, dy: -157, rect: {x: 36, y: 14, w: 38, h: 134}},
            run: {dx: -70, dy: -150, rect: {x: 48, y: 16, w: 65, h: 134}},
            attack: {dx: -46, dy: -154, rect: {x: 12, y: 13, w: 56, h: 140}, hit: {x: 58, y: 50, w: 130, h: 54}},
            trip: {dx: -70, dy: -150, rect: {x: 48, y: 16, w: 65, h: 134}}
        }
    };


    createjs.Container.call(this);
    this.m_posX = this.m_posX0 = x;
    this.m_posY = y;
    this.m_levelHeight = levelHeight;

    this.m_animId = "";

    this.m_assets = new Array();
    this.m_assets[this.MODE_BEN] = new createjs.Sprite(Main.GetSpriteSheet("ben"));
    this.m_assets[this.MODE_HOPPER] = new createjs.Sprite(Main.GetSpriteSheet("hopper"));
    this.m_assets[this.MODE_CANNONBOLT] = new createjs.Sprite(Main.GetSpriteSheet("cannonbolt"));
    this.m_assets[this.MODE_ARMODRILLO] = new createjs.Sprite(Main.GetSpriteSheet("armodrillo"));

    this.setMode(this.MODE_BEN);

    this.reset();

    this.setAnim(this.ANIM_IDLE);
};

Hero.prototype = Object.create(createjs.Container.prototype);
Hero.prototype.constructor = Hero;


Hero.prototype.remove = function()
{
    this.removeAllChildren();
    this.m_asset.stop();
    this.m_asset = null;
};


Hero.prototype.reset = function()
{
    this.m_speedX = 0;
    this.m_speedY = 0;
    this.m_speedXDest = 11;
    this.m_speedFactor = 1;
    this.m_jumpFactor = 1;
    this.m_onGround = false;
    this.m_releasedActionA = true;
    this.m_releasedActionB = true;
    this.m_started = false;
    this.m_isActionB = false;
    this.m_actionBCounter = 0;
    this.m_canActionB = true;
    this.m_groundCounter = 0;
    this.m_isDead = false;
    this.m_transformCounter = 0;
    this.m_moveBackCounter = 0;

    this.m_green = new createjs.ColorFilter(0.5, 0.5, 0.5, 1, 0, 255, 0, 0);
};


Hero.prototype.start = function()
{
    if (!this.m_started)
    {
        this.m_started = true;
        this.setAnim(this.ANIM_RUN);
    }
};


Hero.prototype.pause = function()
{
    this.m_asset.paused = true;
};


Hero.prototype.resume = function()
{
    this.m_asset.paused = false;
};


Hero.prototype.setAnim = function(animId)
{
    if (this.m_animId != animId)
    {
        this.m_animId = animId;
        this.m_asset.gotoAndPlay(animId);
        this.m_size = this.SIZES[this.m_mode][animId];
        //this.update();

        this.x = this.m_posX + this.m_size.dx;
        this.y = this.m_levelHeight - this.m_posY + this.m_size.dy;
    }
};


Hero.prototype.update = function()
{
    if (this.m_started)
    {
        if (!this.m_isDead && ScreenGame.s_prevSectionId > 0) //don't speed up on intro section
        {
            if (this.m_speedXDest < 17)
            {
                this.m_speedXDest += 0.003 * ScreenGame.s_ratio;
                //this.m_speedXDest = 16;
            }
            else
            {
                this.m_speedXDest = 17;
            }
        }
        this.m_speedX += (this.m_speedXDest * this.m_speedFactor - this.m_speedX) * 0.3;
    }

    //gravity
    if (this.m_speedY > -30)
    {
        this.m_speedY -= 2 * ScreenGame.s_ratio;
    }

    //
    this.m_posY += this.m_speedY * ScreenGame.s_ratio;

    //move back and forward on trip
    if (!this.m_isDead)
    {
        if (this.m_moveBackCounter > 0)
        {
            this.m_moveBackCounter -= ScreenGame.s_ratio;
            if (this.m_moveBackCounter <= 0)
            {
                this.m_moveBackCounter = 0;
                this.m_stayBackCounter = 1;
            }
            this.m_posX = this.m_posX1 - (1 - this.m_moveBackCounter / 20) * 180;
            if (this.m_posX < -40)
            {
                this.dieInHole();
                return;
            }
        }
        else if (this.m_stayBackCounter > 0)
        {
            this.m_stayBackCounter -= ScreenGame.s_ratio;
            if (this.m_stayBackCounter <= 0)
            {
                this.m_stayBackCounter = 0;
                this.m_moveForwardCounter = 120;
                this.m_posX2 = this.m_posX;
            }
        }
        else if (this.m_moveForwardCounter > 0)
        {
            this.m_moveForwardCounter -= ScreenGame.s_ratio;
            if (this.m_moveForwardCounter <= 0)
            {
                this.m_moveForwardCounter = 0;
            }
            this.m_posX = this.m_posX2 + (1 - this.m_moveForwardCounter / 120) * (this.m_posX0 - this.m_posX2);
        }
    }

    //
    if (this.m_isDead)
    {
        this.m_posX -= 5 * ScreenGame.s_ratio;
    }
    else if (this.m_isActionB && this.m_actionBCounter > 0)
    {
        this.m_actionBCounter -= 1 * ScreenGame.s_ratio;
        if (this.m_actionBCounter <= 0)
        {
            this.setAnim(this.ANIM_RUN);
            this.m_isActionB = false;
            this.m_canActionB = true;
        }
        else if (!this.m_onGround && this.m_groundCounter-- < 0)
        {
            this.m_isActionB = false;
            this.m_canActionB = true;
            this.setAnim(this.ANIM_JUMP);
        }
    }
    else if (this.m_started && !this.m_onGround && this.m_groundCounter-- == 0)
    {
        this.setAnim(this.ANIM_JUMP);
    }

    //transform back to Ben
    if (!this.m_isDead && this.m_mode != this.MODE_BEN)
    {
        this.m_transformCounter -= 1 * ScreenGame.s_ratio;

        //flash green

        if (this.m_transformCounter < 20)
        {
            this.m_flashCounter--;
            this.m_flashCounter += 2;
            this.m_flashCounter %= 2;
            if (this.m_flashCounter < 1)
            {
                this.m_asset.alpha = 0.1;
            }
            else
            {
                this.m_asset.alpha = 1;
            }
        }
        else if (this.m_transformCounter < 40)
        {
            this.m_flashCounter--;
            this.m_flashCounter += 4;
            this.m_flashCounter %= 4;
            if (this.m_flashCounter < 2)
            {
                this.m_asset.alpha = 0.1;
            }
            else
            {
                this.m_asset.alpha = 1;
            }
        }
        else if (this.m_transformCounter < 60)
        {
            this.m_flashCounter--;
            this.m_flashCounter += 6;
            this.m_flashCounter %= 6;
            if (this.m_flashCounter < 3)
            {
                this.m_asset.alpha = 0.1;
            }
            else
            {
                this.m_asset.alpha = 1;
            }

        }


        //switch to ben
        if (this.m_transformCounter <= 0)
        {
            this.m_speedFactor = 1;
            this.m_jumpFactor = 1;
            this.setMode(this.MODE_BEN);

            this.clearCache();
        }
    }

    //
    this.x = this.m_posX + this.m_size.dx;
    this.y = this.m_levelHeight - this.m_posY + this.m_size.dy;

    //
    this.m_onGround = false;

    //
    if (this.y > this.m_levelHeight + 0)
    {
        this.dieInHole();
    }
};


Hero.prototype.setPosition = function(x, y)
{
    this.m_posX = x;
    this.m_posY = y;
    this.update();
};


Hero.prototype.getRect = function()
{
    return {x: this.x + this.m_size.rect.x, y: this.y + this.m_size.rect.y,
        width: this.m_size.rect.w, height: this.m_size.rect.h};
};


Hero.prototype.getAttackRect = function()
{
//    if (this.m_animId == this.ANIM_ATTACK)
    if (this.m_size.hit)
    {
        return {x: this.x + this.m_size.hit.x, y: this.y + this.m_size.hit.y,
            width: this.m_size.hit.w, height: this.m_size.hit.h};
    }

    return null;
};


Hero.prototype.onHitBlock = function(block, rectH, rectB)
{
    //check left side of block
    if (rectH.x <= rectB.x)
    {
        if (this.m_speedY > 0)
        {
            this.hitObstacle();
            return;
        }
        else
        {
            //check collission with left side when falling down
            var dy = rectH.y + rectH.height - rectB.y; // distance between feet and block top
            if (rectH.y > rectB.y)
            {
                this.hitObstacle();
                return;
            }
            else if (dy > 0 && dy > -this.m_speedY * ScreenGame.s_ratio + 5)
            {
                this.hitObstacle();
                return;
            }
        }
    }

    //check bottom side of the block
    if (rectH.y + rectH.height > rectB.y + rectB.height)
    {
        this.hitObstacle();
        return;
    }


    //no collission - place hero on top
    var hx = rectH.x + rectH.width * 0.5;
    if (hx > rectB.x && hx < rectB.x + rectB.width)
    {
        this.m_posY = this.m_levelHeight - block.y;
        this.m_onGround = true;
        this.m_groundCounter = 1;

        if (this.m_started)
        {
            if (!this.m_isActionB)
            {
                if (this.m_animId != this.ANIM_TRIP)
                {
                    this.setAnim(this.ANIM_RUN);
                }
                if (this.m_mode == this.MODE_ARMODRILLO && this.m_speedY < -5)
                {
                    ScreenGame.Shake(10);
                }
            }
        }
        this.m_speedY = 0;

        this.y = this.m_levelHeight - this.m_posY + this.m_size.dy;
    }
};


Hero.prototype.onPlatform = function(y)
{
    if (!this.m_isDead)
    {
        this.m_posY = this.m_levelHeight - y;
        this.m_onGround = true;
        this.m_groundCounter = 1;

        if (this.m_started)
        {
            if (!this.m_isActionB)
            {
                this.setAnim(this.ANIM_RUN);
                if (this.m_mode == this.MODE_ARMODRILLO && this.m_speedY < -5)
                {
                    ScreenGame.Shake(10);
                }
            }
        }

        this.m_speedY = 0;

        this.y = this.m_levelHeight - this.m_posY + this.m_size.dy;
    }
};


Hero.prototype.actionA = function()
{
    if (this.m_started && this.m_releasedActionA && this.m_onGround && this.m_animId != this.ANIM_TRIP)
    {
        //jump
        this.m_releasedActionA = false;
        this.m_speedY = 28 * this.m_jumpFactor;
        this.setAnim(this.ANIM_JUMP);
    }
};


Hero.prototype.actionB = function()
{
    if (this.m_started && this.m_releasedActionB && this.m_canActionB && this.m_animId != this.ANIM_TRIP)
    {
        this.m_releasedActionB = false;
        if (this.m_onGround)
        {
            this.m_canActionB = false;

            //slide, attack
            if (this.m_mode == this.MODE_ARMODRILLO)
            {
                this.setAnim(this.ANIM_ATTACK);
                this.m_actionBCounter = 18;
                SoundsManager.PlaySound("armodrillo_attack", {offset: 950});
            }
            else
            {
                this.setAnim(this.ANIM_SLIDE);
                this.m_actionBCounter = 24;
            }
            this.m_isActionB = true;
        }
        else
        {
            this.setAnim(this.ANIM_FALL);
            this.m_speedY = -30;
        }
    }
};


Hero.prototype.releaseActionA = function()
{
    this.m_releasedActionA = true;
};


Hero.prototype.releaseActionB = function()
{
    this.m_releasedActionB = true;
};


Hero.prototype.clearCache = function()
{
    this.m_asset.alpha = 1;
};


Hero.prototype.hitObstacle = function()
{
    if (!this.m_isDead)
    {
        this.m_isDead = true;
        this.m_speedXDest = 0;
        this.m_speedY = 20;
        this.setAnim(this.ANIM_DEATH);

        this.clearCache();

        ScreenGame.StopController();

        createjs.Ticker.setFPS(22);

        SoundsManager.PlaySound("game_over");
    }
};


Hero.prototype.dieInHole = function()
{
    ScreenGame.Pause();
    Navigation.ShowScreen(Navigation.SCREEN_END);
};


Hero.prototype.onCollectPowerUp = function(type)
{
    this.m_speedFactor = 1;
    this.m_jumpFactor = 1;

    switch (type)
    {
        case "powerup_1":
            this.setMode(this.MODE_ARMODRILLO);
        break;

        case "powerup_2":
            this.setMode(this.MODE_HOPPER);
            this.m_jumpFactor = 1.1;
            this.m_speedFactor = 1.1;
            break;

        case "powerup_3":
            this.setMode(this.MODE_CANNONBOLT);
            this.m_speedFactor = 1.1;
            break;
    }
    this.m_transformCounter = 300;
    this.m_flashCounter = 8;
    SoundsManager.PlaySound("transform");

    this.clearCache();
};


Hero.prototype.setMode = function(mode)
{
    var prevMode = this.m_mode;
    this.m_mode = mode;
    if (this.m_asset)
    {
        this.m_asset.stop();
        this.removeChild(this.m_asset);
    }
    this.m_asset = this.m_assets[mode];
    this.addChild(this.m_asset);

    if (this.m_animId != "")
    {
        var animId = this.m_animId;
        this.m_animId = "";
        if(prevMode == this.MODE_ARMODRILLO && animId == this.ANIM_ATTACK)
        {
            animId = this.ANIM_RUN;
        }
        this.setAnim(animId);
    }

    //
    switch (mode)
    {
        case this.MODE_BEN:
            ScreenGame.OnTransformHero("b");
            break;

        case this.MODE_ARMODRILLO:
            ScreenGame.OnTransformHero("a");
            break;

        case this.MODE_HOPPER:
            ScreenGame.OnTransformHero("h");
            break;

        case this.MODE_CANNONBOLT:
            ScreenGame.OnTransformHero("c");
            break;
    }
};


Hero.prototype.onHitBarrier = function()
{
    if (this.m_mode != this.MODE_ARMODRILLO) // && !(this.m_mode == this.MODE_CANNONBOLT && this.m_animId == this.ANIM_SLIDE))
    {
        this.setAnim(this.ANIM_TRIP);

        var me = this;
        this.m_asset.addEventListener("animationend", function (e)
        {
            me.onTripAnimEnd(e);
        });

        this.m_moveBackCounter = 20;
        this.m_posX1 = this.m_posX;
    }
};


Hero.prototype.onTripAnimEnd = function(e)
{
    this.m_asset.removeAllEventListeners("animationend");
    this.setAnim(this.ANIM_RUN);
};


Hero.prototype.getNormalizedY = function()
{
    return Math.min(1, 1 - (this.m_posY / this.m_levelHeight));
};