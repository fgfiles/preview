
(function(){

    'use strict';
    var t;
    var progressBar;
    var bgd,bgd1,bgd2;

    var Preloader=function(_manifest){

        this.manifest=_manifest;
        this.initialize();


    };
    var p = Preloader.prototype = new createjs.Container();

    p.initialize=function()
    {
        t=this;
        t.children=null;
        t.children=[];


        if (!createjs.Sound.initializeDefaultPlugins()) {return;}

        var sounds = [
            {id:'click', src:'sounds/click.mp3'},
            {id:'applause', src:'sounds/applause.mp3'},
            {id:'s1', src:'sounds/ding_ding_ding.mp3'},
            {id:'s2', src:'sounds/success.mp3'},
            {id:'s3', src:'sounds/ep2_ufo_flight_cut.mp3'},
            {id:'s4', src:'sounds/ep3_laser_shot.mp3'},
            {id:'s5', src:'sounds/ooo_ding.mp3'},
            {id:'s6', src:'sounds/parrot_cut.mp3'},
            {id:'s0', src:'sounds/trumpet.mp3'}

        ];
        console.log('zaczynam preloader');
      /*  createjs.Sound.alternateExtensions = ['ogg'];*/
        createjs.Sound.registerSounds(sounds);




        bgd1=new createjs.Bitmap('img/pre/p3.png');
        bgd1.x = 303;
        bgd1.y = 385;
        t.addChild(bgd1);

        bgd=new createjs.Bitmap('img/pre/p2.png');
        bgd.x = -37;
        bgd.y = 385;
        t.addChild(bgd);

        var maska=new createjs.Shape(new createjs.Graphics().beginFill('#fff').drawRect(0,0,339,46))
        maska.x = 303;
        maska.y = 385;

        bgd.mask=maska;
        bgd2=new createjs.Bitmap('img/pre/p1.png');
        bgd2.x = 303;
        bgd2.y = 385;
        t.addChild(bgd2);
        t.addChild(maska);
        maska.visible=false;


        var data = {
            images: ['img/pre/animacja_preloader.png'],
            frames:  [
                    [0, 0, 512, 512, 0, -64, -52],
                    [512, 0, 512, 512, 0, -64, -52],
                    [1024, 0, 512, 512, 0, -64, -52],
                    [0, 512, 512, 512, 0, -64, -52],
                    [512, 512, 512, 512, 0, -64, -52],
                    [1024, 512, 512, 512, 0, -64, -52],
                    [0, 1024, 512, 512, 0, -64, -52],
                    [512, 1024, 512, 512, 0, -64, -52],
                    [1024, 1024, 512, 512, 0, -64, -52]

            ],
            animations: {
                playMe: {
                    frames: [ 1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        6,
                        5,
                        4,
                        3,
                        4,
                        5,
                        8,
                        8,
                        8,
                        5,
                        4,
                        3,
                        2,
                        1,
                        2],
                    next: "stopMe2",
                },
                stopMe:{
                    frames:[0]
                },
                stopMe2:{
                    frames:[2]
                }
            }
        };

        t.hero = new createjs.Container();
        var spriteSheet = new createjs.SpriteSheet(data);
        console.log(data);

        t.anim = new createjs.Sprite(spriteSheet,'stopMe');
        t.anim.framerate=16;
        t.hero.addChild(t.anim);

        t.hero.x = (944/2) - 200;
        t.hero.y=  0;


        t.addChild(t.hero);

        startLoading();



    };
    function startLoading() {

        t.queue=new createjs.LoadQueue(false);
        t.queue.addEventListener('complete', onComplete);
        t.queue.addEventListener('progress', onProgress);

        t.queue.loadManifest(t.manifest,true);
/*
        var data = {
            images: ['img/logo.png'],
            frames:  [
                [0, 0, 510, 510, 0, 0, 0],
                [512, 0, 510, 512, 0, 0, 0],
                [1024, 0, 510, 512, 0, 0, 0],
                [0, 512, 510, 512, 0, 0, 0],
                [512, 512, 510, 512, 0, 0, 0],
                [1024, 512, 510, 512, 0, 0, 0],
                [0, 1024, 510, 512, 0, 0, 0],
                [512, 1024, 510, 512, 0, 0, 0],
                [1024, 1024, 510, 512, 0, 0, 0],
                [0, 1536, 510, 512, 0, 0, 0],
                [512, 1536, 510, 512, 0, 0, 0],
                [1024, 1536, 510, 512, 0, 0, 0]

            ],
            animations: {
                playMe: {
                    frames: [0, 1, 2, 3, 4,5,6,7,8,9,10]


                },
                stopMe:{
                    frames:[0]
                }

            }

        };
        t.hero = new createjs.Container();
        var spriteSheet = new createjs.SpriteSheet(data);
        t.anim = new createjs.Sprite(spriteSheet,'stopMe');
        t.anim.framerate=24;
        t.hero.addChild(t.anim);
        t.anim.gotoAndPlay('playMe');
        t.hero.x = (944/2) - 200;
        t.hero.y=  (530/2)-155;
        TweenLite.from(t.anim,2,{alpha:0,onComplete:startLoading});
        stage.addChild(t.hero);

        t.anim.gotoAndPlay('playMe');
*/

    }

   
    function onProgress(e)
    {
            bgd.x = -37+(340*e.loaded)
     //   progressBar.scaleX= e.loaded;

    }
    function onComplete(e)
    {
        console.log('dograne');
        bgd.visible= bgd2.visible=bgd1.visible=false;
        t.anim.gotoAndPlay('playMe');
        setTimeout(disp,2000);
      //

    }
    function disp(){
        t.dispatchEvent('completed');
        TweenLite.to(t,1,{alpha:0,onComplete:clear})

    }

   
    function clear()
    {
        while(t.getNumChildren())
        {
            if(typeof t.getChildAt(0).removeAllChildren=== 'function')
            {
                t.getChildAt(0).removeAllChildren();
            }
            t.removeChildAt(0);
        }
        if(t.parent)
        {
        t.parent.removeChild(t);
        }
    }
    window.Preloader = Preloader;
}());