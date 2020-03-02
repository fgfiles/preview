/**
 * Created by pawel on 02.10.2014.
 */
/*$(document).ready(function ()
{
    Main.Init();
});*/

window.onload = function()
{
    Main.Start();
};


var Main = {

    SC: 1.2, //level scale
    ANDROID: false,

    s_stage: createjs.Stage,
    s_scene: createjs.Container,
    s_jsons: Array,
    s_spritesheets: Array,
    s_loader: createjs.LoadQueue,
    s_best: 0,
    s_score: 0,
    s_loaded: false,
    s_firstRun: true,
    s_scale: 1,


    Start: function()
    {
        this.DEVICE = "desktop";
        if (this.IsMobile())
        {
            var pixelRatio = window.devicePixelRatio || 1;
            if (screen.availWidth * pixelRatio < 768)
            {
                this.DEVICE = "smartphone";
            }
            else
            {
                this.DEVICE = "tablet";
            }
        }

        var me = this;
        this.COPY = new CopyParser(function (){me.OnLoadCopy();}, 'copy/copy.xml');
    },


    OnLoadCopy: function()
    {
        //init
        this.Init();
    },


    Init: function()
    {
        var me = this;

        //create stage
        this.s_stage = new createjs.Stage(document.getElementById("canvasGame"));
        //this.s_stage.autoClear = false;
        this.s_scene = new createjs.Container();
        this.s_stage.addChild(this.s_scene);

        //
        Navigation.ShowScreen(Navigation.SCREEN_PRELOAD);

        //resize
        window.addEventListener('resize', function(){Main.ResizeCanvas();}, false);

        //
        this.s_jsons = new Array();
        this.s_spritesheets = new Array();

        //load data and sprite sheets
        var manifest = [
            {src: "images/game/fg_logo.png", id: "fg_logo"},
            {src: "images/game/preloader_border.png", id: "preloader_border"},
            {src: "images/game/preloader_bar.png", id: "preloader_bar"},
            {src: "json/data.json", id: "data"},
            {src: "images/game/ben10_logo_big.png", id: "ben10_logo_big"},
            {src: "images/game/ben10_logo_small.png", id: "ben10_logo_small"},
            {src: "images/game/game_logo_big.png", id: "game_logo_big"},
            {src: "images/game/game_logo_small.png", id: "game_logo_small"},
            {src: "images/game/interface/front_bg.png", id: "front_bg"},
            {src: "images/game/interface/end_bg.png", id: "end_bg"},
            {src: "images/game/interface/rotate_bg.png", id: "rotate_bg"},
            {src: "images/game/interface/arrow_up2.png", id: "arrow_up"},
            {src: "images/game/interface/interface.json", id: "interface"},
            {src: "images/game/spritesheets/background.json", id: "background"},
            {src: "images/game/spritesheets/midground.json", id: "midground"},
            {src: "images/game/spritesheets/foreground.json", id: "foreground"},
            {src: "images/game/spritesheets/orb.json", id: "orb"},
            {src: "images/game/spritesheets/ben.json", id: "ben"},
            {src: "images/game/spritesheets/hopper.json", id: "hopper"},
            {src: "images/game/spritesheets/cannonbolt.json", id: "cannonbolt"},
            {src: "images/game/spritesheets/armodrillo.json", id: "armodrillo"},
            {src: "images/game/spritesheets/texture_1.json", id: "texture_1"},
            {src: "images/game/spritesheets/texture_2.json", id: "texture_2"},
            {src: "images/game/spritesheets/platform.json", id: "platform"},
            {src: "images/game/spritesheets/enemies.json", id: "enemies"},
            {src: "images/game/spritesheets/stalls.json", id: "stalls"},
            {src: "images/game/spritesheets/barrier.json", id: "barrier"},
            {src: "images/game/spritesheets/items.json", id: "items"}
        ];

        this.s_loader = new createjs.LoadQueue(false);
        this.s_loader.setMaxConnections = 10;
        this.s_loader.loadManifest(manifest);
        this.s_loader.addEventListener("fileload", function (e)
        {
            me.HandleFileLoad(e);
        });
        this.s_loader.addEventListener("complete", function (e)
        {
            me.OnLoadFiles(e);
        });
        this.s_loader.addEventListener("progress", function (e)
        {
            me.OnLoadFilesProgress(e);
        });

        //orientation and device
        var $body = $("body");
        if (this.IsMobile())
        {
            //mobile
            $body.addClass("mobile");

            //system
            if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) ||
                navigator.userAgent.match(/iPod/i))
            {
                $body.addClass("ios");
                if (navigator.userAgent.match(/iPad/i))
                {
                    $body.addClass("ipad");
                }
                else if (window.devicePixelRatio == 1)
                {
                    $body.addClass("no_sound");
                }
            }
            else
            {
                $body.addClass("android");
                this.ANDROID = true;
            }

            //orientation
//            var mm = window.matchMedia("(orientation: portrait)");
            var mm = matchMedia("(orientation: portrait)");

            // If there are matches, we're in portrait
            if(mm.matches)
            {
                // Portrait orientation
                this.OnChangeOrientation(true);
            }
            else
            {
                // Landscape orientation
                this.OnChangeOrientation(false);
            }

            //Add a media query change listener
            mm.addListener(mmListener);

            //
            this.ResizeCanvas();
        }
        else
        {
            //desktop
            $body.addClass("desktop");

            this.s_stage.enableMouseOver(15);

            this.ResizeCanvas();
        }
    },


    HandleFileLoad: function (e)
    {
        var id = e.item.id;
        if (e.item.type == "json" && e.result.images)
        {
            //load images from json sprite sheet
            this.s_jsons.push({id: id, result: e.result});
            for (var i = 0; i < e.result.images.length; i++)
            {
                this.s_loader.loadFile({src: e.result.images[i], id: id + "_" + i});
            }
        }

        if (id == "fg_logo")
        {
            ScreenPreloader.SetLogo();
        }
        else if (id == "preloader_bar")
        {
            ScreenPreloader.SetBar();
        }
        else if (id == "preloader_border")
        {
            ScreenPreloader.SetBorder();
        }
    },

    OnLoadFilesProgress: function(e)
    {
        ScreenPreloader.SetProgress(e.progress * 0.8);
    },


    OnLoadFiles: function ()
    {
        this.s_loader.removeAllEventListeners("complete");
        this.s_loader.removeAllEventListeners("progress");
        this.s_loader.removeAllEventListeners("fileload");

        this.s_data = this.s_loader.getResult("data");

        //create sprite sheets
        for (var i = 0; i < this.s_jsons.length; i++)
        {
            this.s_spritesheets[this.s_jsons[i].id] = new createjs.SpriteSheet(this.s_jsons[i].result);
        }

        //
        if (!$("body").hasClass("no_sound"))
        {
            this.LoadSounds();
        }
        else
        {
            this.StartGame();
        }
    },


    LoadSounds: function()
    {
        var me = this;
        var sounds = [];
        sounds.push({id: "game_loop", src: "audio/game_loop.ogg"});
        sounds.push({id: "game_over", src: "audio/game_over.ogg"});
        sounds.push({id: "crab_dead", src: "audio/crab_dead.ogg"});
        sounds.push({id: "droid_dead", src: "audio/droid_dead.ogg"});
        sounds.push({id: "transform", src: "audio/transform.ogg"});
        sounds.push({id: "orb", src: "audio/orb_pick_up.ogg"});
        sounds.push({id: "armodrillo_attack", src: "audio/armodrillo_attack.ogg"});

        SoundsManager.Init(sounds, me);
    },


    OnProgressSounds: function(e)
    {
        ScreenPreloader.SetProgress(e.progress * 0.2 + 0.8);
    },


    OnLoadSounds: function(e)
    {
        this.StartGame();
    },


    StartGame: function()
    {
        this.s_loaded = true;

        $(".game").css("background", "#000000");

        Navigation.ShowScreen(Navigation.SCREEN_FRONT);

        //
        if ($("body").hasClass("portrait"))
        {
            Navigation.ShowRotateScreen();
        }
    },


    GetSpriteSheet: function(id)
    {
        return this.s_spritesheets[id];
    },


    GetImage: function(id)
    {
        return this.s_loader.getResult(id);
    },


    IsMobile: function()
    {
        return ("ontouchstart" in document.documentElement);
    },


    ResizeCanvas: function (h)
    {
        var $body = $("body");
        var canvas = document.getElementById('canvasGame');
        var difference = 1;

        if (Main.IsMobile())
        {
            var pixelRatio = window.devicePixelRatio || 1;
            var width = $(window).width();
            var height;
            if (h)
            {
                height = h;
            }
            else
            {
                if ($body.hasClass("ios") && !$body.hasClass("ipad"))
                {
                    difference = ($(window).height() - window.innerHeight) /2;
                    //height = Math.min(window.innerHeight, $(window).height());
                    height = $(window).height();
                    if(window!=window.top){
                        height-=80;//add some padding for iOS bars - only fix we can do!
                    }
                }
                else
                {
                    height = $(window).height();
                }
                                  //  alert($(window).height());

            }

            //test
//            pixelRatio = 2;
//            width = (width > height) ? 960 : 540;
//            height = (width > height) ? 540 : 960;

            //
            width *= pixelRatio;
            height *= pixelRatio;

            var scale = width / 960;
            if (width < height)
            {
                scale = width / 640;
            }
            canvas.width = width;
            canvas.height = height;
            canvas.style.width = (canvas.width / pixelRatio) + "px";
            canvas.style.height = (canvas.height / pixelRatio) + "px";
            $(".game").css("width", canvas.style.width);
            $(".game").css("height", canvas.style.height);

            this.s_scene.scaleX = this.s_scene.scaleY = scale;
            this.s_scale = scale;

            Navigation.UpdateCanvasSize(canvas.width, canvas.height);

            positionPage(difference);
        }
        else
        {
            var width = $(window).width();
            var height = $(window).height();
            var scale = Math.min(width / 960, height / 640);
            canvas.width = 960 * scale;
            canvas.height = 640 * scale;
            canvas.style.width = (canvas.width) + "px";
            canvas.style.height = (canvas.height) + "px";
            $(".game").css("width", canvas.style.width);
            $(".game").css("height", canvas.style.height);

            this.s_scene.scaleX = this.s_scene.scaleY = scale;
            this.s_scale = scale;

            Navigation.UpdateCanvasSize(canvas.width, canvas.height);
        }

        this.s_stage.update();
    },


    OnChangeOrientation: function(portrait)
    {
        if (this.s_orentation != portrait)
        {
            this.s_orentation = portrait;
            var $body = $("body");
            if (portrait)
            {
                $body.removeClass("landscape");
                $body.addClass("portrait");
                if (this.s_loaded)
                {
                    this.Pause();
                }
            }
            else
            {
                $body.addClass("landscape");
                $body.removeClass("portrait");
                if (this.s_loaded)
                {
                    this.Resume();
                }
            }

            //
            positionPage();
        }
    },


    Pause: function()
    {
        this.s_paused = true;
        Navigation.ShowRotateScreen();
    },


    Resume: function()
    {
        this.s_paused = false;
        Navigation.HideRotateScreen();
    },


    GetCanvasSize: function()
    {
        return {width: this.s_stage.canvas.width, height: this.s_stage.canvas.height};
    }

};


function mmListener(m)
{
    if(m.matches)
    {
        // Portrait orientation
        Main.OnChangeOrientation(true);
    }
    else
    {
        // Landscape orientation
        Main.OnChangeOrientation(false);
    }
}


function positionPage(_yPos)
{
//    window.parent.scrollTo(0, 1);
    if(_yPos){
        window.scrollTo(0, _yPos);
    }else{
        window.scrollTo(0, 1);
    }
}


function getFontStyle(className)
{
    var x, sheets,classes;
    for (sheets = document.styleSheets.length-1; sheets >= 0; sheets--)
    {
        classes = document.styleSheets[sheets].rules || document.styleSheets[sheets].cssRules;
        for (x = 0; x < classes.length; x++)
        {
            if (classes[x].selectorText === className)
            {
                return  classes[x].style.font;
            }
        }
    }
    return false;
}