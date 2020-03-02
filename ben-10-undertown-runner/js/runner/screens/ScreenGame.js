/**
 * Created by pawel on 02.10.2014.
 */
var ScreenGame = {

    s_container: createjs.Container,
    s_contGame: null,
    s_hero: Hero,
    s_layers: Array,
    s_ratio: 1,
    s_prevTime: 0,
    s_shakeTime: 0,
    s_prevSectionId: -1,
    s_hud: Hud,


    Init: function()
    {
        this.s_container = new createjs.Container();
        Main.s_scene.addChild(this.s_container);

        this.s_contGame = new createjs.Container();
        this.s_container.addChild(this.s_contGame);
        this.s_contGame.scaleX = this.s_contGame.scaleY = Main.SC;
        var width = Main.GetCanvasSize().width / Main.s_scale;
        var height = Main.GetCanvasSize().height / Main.s_scale;
        this.s_contGame.x = width * (1 - Main.SC) / 2;
        this.s_contGame.y = height * (1 - Main.SC) / 2;

        //
        this.s_data = Main.s_data;

        //
        this.s_prevTime = new Date().getTime();

        //
        this.Reset();
        this.InitSections();

        //create layers
        this.s_layers = new Array();
        this.s_layers.push(new LandscapeLayer("background", 0.5, height));
        this.s_layers.push(new LandscapeLayer("midground", 0.75, height));
        this.s_layers.push(new GameLayer(this.s_data.height, height));
        this.s_layers.push(new LandscapeLayer("foreground", 2, height));
        this.s_contGame.addChild(this.s_layers[0], this.s_layers[1], this.s_layers[2], this.s_layers[3]);

        //
        this.AddSection();

        this.s_hero = new Hero(250, 150, this.s_data.height);
        this.s_layers[2].addHero(this.s_hero);

        //hud
        this.s_hud = new Hud(this.s_hero);
        this.s_container.addChild(this.s_hud);

        //controller
        if (Main.IsMobile())
        {
            if (!Main.ANDROID)
            {
                this.s_controller = ControllerTouch.Init(this.s_hero);
            }
            else
            {
                this.s_controller = this.s_hud;
            }
        }
        else
        {
            this.s_controller = ControllerKeyboard.Init(this.s_hero);
        }

        //
        this.Update();

        //SoundsManager.PlaySound("game_loop", {loop: -1, volume: 0.8});
        if (!$("body").hasClass("no_sound"))
        {
            var me = this;
            this.s_loop = SoundsManager.PlaySound("game_loop", {volume: 0.8});
            this.s_intervalId = setInterval(function(){me.OnLoopEnd();}, 9000);
        }


        //count down
        this.Pause();
        this.StartCountDown();
        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", GameUpdate);

        return this;
    },


    StartCountDown: function()
    {
        this.s_counter = 3;
        this.s_hud.showCountDown(this.s_counter);
        var me = this;
        this.s_countdownId = setInterval(function(){me.OnCountDownTick();}, 1000);
    },


    OnCountDownTick: function()
    {
        this.s_counter--;
        if (this.s_counter == 0)
        {
            clearInterval(this.s_countdownId);
            this.s_hero.start();
            this.Resume();
        }
        this.s_hud.showCountDown(this.s_counter);
    },


    OnLoopEnd: function()
    {
        createjs.Tween.get(this.s_loop).wait(100).to({volume: 0}, 600);
        this.s_loop = SoundsManager.PlaySound("game_loop", {volume: 0});
        createjs.Tween.get(this.s_loop).to({volume: 0.8}, 600);
    },


    Remove: function()
    {
        this.Pause();

        Main.s_score = this.CalculatePoints();
        Main.s_best = Math.max(Main.s_best, Main.s_score);

        clearInterval(this.s_intervalId);

        // remove hero
        this.s_hero.remove();
        this.s_hero = null;

        //
        this.s_hud.remove();

        // remove layers, gamelayer
        for (var i = 0; i < this.s_layers.length; i++)
        {
            this.s_layers[i].remove();
        }
        this.s_layers = null;

        // remove sections
        for (var i = 0; i < this.s_sections.length; i++)
        {
            this.s_sections[i].remove();
        }
        this.s_sections = null;

        this.s_container.removeAllChildren();
        Main.s_scene.removeChild(this.s_container);

        this.s_contGame.removeAllChildren();
        this.s_contGame = null;

        SoundsManager.StopAll();
    },


    Reset: function()
    {
        this.s_distance = 0;
        this.s_points = 0;
        this.s_prevSectionId = -1;
        this.s_shakeTime = 0;
        this.s_heroType = "b";
    },


    Pause: function()
    {
        clearInterval(this.s_countdownId);
        createjs.Ticker.removeEventListener("tick", GameUpdate);
        this.s_hero.pause();
        this.StopController();
    },


    Resume: function()
    {
        createjs.Ticker.addEventListener("tick", GameUpdate);
        this.s_hero.resume();
        this.s_controller.Start();
    },


    WaitOnResume: function()
    {
        //this.s_controller.StartResumeWait();
        //createjs.Ticker.setFPS(30);
        this.StartCountDown();
        createjs.Ticker.addEventListener("tick", ViewUpdate);
    },


    BackFromRotate: function()
    {
        if (!this.s_instructions)
        {
            this.WaitOnResume();
        }
    },


    StopController: function()
    {
        this.s_controller.Stop();
    },


    Update: function(e)
    {
        var time = new Date().getTime();
        this.s_ratio = Math.max(1, Math.min(1.7, (time - this.s_prevTime) / 33.3));
        this.s_prevTime = time;

        this.s_hero.update();
        if (this.s_hero)
        {
            this.s_layers[2].update(); //update game layer

            var y = this.s_hero.getNormalizedY();
            for (var i = 0; i < this.s_layers.length; i++)
            {
                this.s_layers[i].scroll(this.s_hero.m_speedX * this.s_ratio, y);
            }

            //
            var height = Main.GetCanvasSize().height / Main.s_scale;
            this.s_contGame.y = y * height * (1 - Main.SC);

            //distance
            if (!this.s_hero.m_isDead)
            {
                this.s_distance += this.s_ratio * this.s_hero.m_speedX / 110 * 1.7;
                this.ShowScore();
            }
        }

        //
        if (this.s_shakeTime > 0)
        {
            this.s_shakeTime--;
            var range = this.s_shakeTime > 5 ? 2 : this.s_shakeTime > 0 ? 1 : 0;
            this.s_container.y = (Math.random() < 0.5 ? -1 : 1) * range;
        }

        //
        Main.s_stage.update();
    },


    InitSections: function()
    {
        this.s_sections = new Array();
        for (var i = 0; i < this.s_data.sections.length; i++)
        {
            var data = this.s_data.sections[i];
            this.s_sections.push(new Section(data, this.s_data.height));
        }
    },


    AddSection: function()
    {

        if (this.s_prevSectionId == -1)
        {
            this.s_prevSectionId = 0;
        }
        else
        {
            do
            {
                var id = 1 + Math.floor(Math.random() * (this.s_sections.length - 1));
//                var id = Math.floor(Math.random() * (this.s_sections.length));
            }
            while (id == this.s_prevSectionId);
            this.s_prevSectionId = id;
        }

        /*
        var testId = 4;
        var tempId = this.s_sections.length - 1;
        if (this.s_prevSectionId == tempId)
        {
            this.s_prevSectionId = testId;
        }
        else
        {
            this.s_prevSectionId = tempId;
        }
        */

        this.s_layers[2].addSection(this.s_sections[this.s_prevSectionId], this.s_heroType);
        this.s_sections[this.s_prevSectionId].start();
    },


    OnTransformHero: function(type)
    {
        this.s_heroType = type;
        this.s_layers[2].onTransformHero(this.s_heroType);
    },


    UpdateCanvasSize: function(width, height)
    {
        if (this.s_layers.length > 1)
        {
            for (var i = 0; i < this.s_layers.length; i++)
            {
                this.s_layers[i].setScreenHeight(height / Main.s_scale);
            }

            this.s_hud.updateCanvasSize(width, height);

            this.Update();
        }
    },


    Shake: function(time)
    {
        this.s_shakeTime = time;
    },


    ShowScore: function()
    {
        this.s_hud.setScore(this.CalculatePoints());
    },


    CalculatePoints: function()
    {
        return Math.floor(this.s_distance * 10) + this.s_points;
    },


    OnCollectOrb: function()
    {
        this.s_points += 5;
        this.ShowScore();
    },


    OnCollectPowerUp: function()
    {
        this.s_points += 50;
        this.ShowScore();
    },


    ShowHelp: function()
    {
        this.Pause();

        this.s_container.visible = false;
        this.s_instructions = ScreenInstructions.Init(true);

        WiseTrack.track("Options");
    },


    HideHelp: function()
    {
        this.s_instructions.Remove();
        this.s_instructions = false;
        this.s_container.visible = true;
        this.WaitOnResume();
    }
};



//
function GameUpdate(e)
{
    ScreenGame.Update(e);
}


function ViewUpdate(e)
{
    Main.s_stage.update();
    createjs.Ticker.removeEventListener("tick", ViewUpdate);
}