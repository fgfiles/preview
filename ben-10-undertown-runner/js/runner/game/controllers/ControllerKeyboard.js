/**
 * Created by pawel on 08.05.2014.
 */
var ControllerKeyboard =
{
    KEYCODE_ENTER: 13,
    KEYCODE_SPACE: 32,
    KEYCODE_UP: 38,
    KEYCODE_DOWN: 40,
    KEYCODE_LEFT: 37,
    KEYCODE_RIGHT: 39,

    s_hero: Hero,


    Init: function(hero)
    {
        this.s_hero = hero;

        this.Start();

        return this;
    },


    Start: function()
    {
        document.onkeydown = function(e){ControllerKeyboard.HandleKeyDown(e);};
        document.onkeyup = function(e){ControllerKeyboard.HandleKeyUp(e);};
    },


    Stop: function()
    {
        //m_hero = null;

        document.onkeydown = null;
        document.onkeyup = null;
    },


    HandleKeyDown: function(e)
    {
        //cross browser issues exist
        if(!e)
        {
            e = window.event;
        }

        e.preventDefault();

        switch(e.keyCode)
        {
            /*case this.KEYCODE_SPACE:
            case this.KEYCODE_UP:
            case this.KEYCODE_DOWN:
                if (!this.s_hero.m_started)
                {
                    this.s_hero.start();
                }
                else if (e.keyCode == this.KEYCODE_UP)
                {
                    this.s_hero.actionA();
                }
                else if (e.keyCode == this.KEYCODE_DOWN)
                {
                    this.s_hero.actionB();
                }
                break;*/

            case this.KEYCODE_UP:
                this.s_hero.actionA();
                break;

            case this.KEYCODE_DOWN:
                this.s_hero.actionB();
                break;
        }
    },


    HandleKeyUp: function(e)
    {
        //cross browser issues exist
        if(!e)
        {
            e = window.event;
        }

        e.preventDefault();

        switch(e.keyCode)
        {
            case this.KEYCODE_UP:
                this.s_hero.releaseActionA();
                break;

            case this.KEYCODE_DOWN:
                this.s_hero.releaseActionB();
                break;
        }
    },


    StartResumeWait: function()
    {
        document.onkeydown = function(e){ControllerKeyboard.HandleKeyDownResume(e);};
    },


    HandleKeyDownResume: function(e)
    {
        if(!e)
        {
            e = window.event;
        }

        e.preventDefault();
        document.onkeydown = null;

        switch(e.keyCode)
        {
            case this.KEYCODE_SPACE:
            case this.KEYCODE_DOWN:
            case this.KEYCODE_UP:
                ScreenGame.Resume();
                break;
        }
    }
};