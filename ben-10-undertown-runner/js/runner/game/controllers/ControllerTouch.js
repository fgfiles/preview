/**
 * Created by pawel on 08.05.2014.
 */
var ControllerTouch =
{
    s_hero: Hero,


    Init: function(hero)
    {
        this.s_hero = hero;

        this.Start();

        return this;
    },


    Start: function()
    {
        createjs.Touch.enable(Main.s_stage, true);

        Main.s_stage.addEventListener("stagemousedown", function(e){ControllerTouch.HandleMouseDown(e);});
        Main.s_stage.addEventListener("stagemouseup", function(e){ControllerTouch.HandleMouseUp(e);});
        Main.s_stage.addEventListener("stagemousemove", function(e){ControllerTouch.HandleMouseMove(e);});
    },


    Stop: function()
    {
        createjs.Touch.disable(Main.s_stage);

        Main.s_stage.removeAllEventListeners("stagemousedown");
        Main.s_stage.removeAllEventListeners("stagemouseup");
        Main.s_stage.removeAllEventListeners("stagemousemove");
    },


    HandleMouseDown: function(e)
    {
        e.preventDefault();
        //this.s_hero.start();

        this.s_detect = true;
        this.s_x = e.stageX;
        this.s_y = e.stageY;
        this.s_counter = 0;
    },


    HandleMouseUp: function(e)
    {
        e.preventDefault();

        this.s_detect = false;
        this.s_hero.releaseActionA();
        this.s_hero.releaseActionB();
    },


    HandleMouseMove: function(e)
    {
        e.preventDefault();

        this.s_counter++;
        if (this.s_detect && this.s_counter > 1)
        {
            this.s_detect = false;
            var dx = e.stageX - this.s_x;
            var dy = e.stageY - this.s_y;
            if (dy < 0)
            {
                this.s_hero.actionA();
            }
            else if (dy > 0)
            {
                this.s_hero.actionB();
            }
        }
    },


    StartResumeWait: function()
    {
        createjs.Touch.enable(Main.s_stage, true);

        Main.s_stage.addEventListener("stagemousedown", function(e){ControllerTouch.HandleMouseDownResume(e);});
    },


    HandleMouseDownResume: function(e)
    {
        e.preventDefault();
        Main.s_stage.removeAllEventListeners("stagemousedown");
        ScreenGame.Resume();
    }
};

