
(function(){
    'use strict';
    var t;
    var plask1,plask2,doublepoints,extralife,multiplayer,immortality,noobstacles;
    var tim;
    var xOffset=0;
    var Hero=function()
    {
        this.initialize();
    };
    var hero=Hero.prototype=new createjs.Container();
    hero.Container_initialize=hero.initialize;
    hero.initialize=function()
    {




        xOffset=0;
        this.Container_initialize();


        var data={
            "framerate":24,
            "images":["img/allAnimations.png"],
            "frames":[
                [0, 0, 256, 256, 0, 0, -6],
                [256, 0, 256, 256, 0, 0, -6],
                [512, 0, 256, 256, 0, 0, -6],
                [768, 0, 256, 256, 0, 0, -6],
                [1024, 0, 256, 256, 0, 0, -6],
                [1280, 0, 256, 256, 0, 0, -6],
                [1536, 0, 256, 256, 0, 0, -6],
                [0, 256, 256, 256, 0, 0, -6],
                [256, 256, 256, 256, 0, 0, -6],
                [512, 256, 256, 256, 0, 0, -6],
                [768, 256, 256, 256, 0, 0, -6],
                [1024, 256, 256, 256, 0, 0, -6],
                [1280, 256, 256, 256, 0, 0, -6],
                [1536, 256, 256, 256, 0, 0, -6],
                [0, 512, 256, 256, 0, 0, -6],
                [256, 512, 256, 256, 0, 0, -6],
                [512, 512, 256, 256, 0, 0, -6],
                [768, 512, 256, 256, 0, 0, -6],
                [1024, 512, 256, 256, 0, 0, -6],
                [1280, 512, 256, 256, 0, 0, -6],
                [1536, 512, 256, 256, 0, 0, -6],
                [0, 768, 256, 256, 0, 0, -6],
                [256, 768, 256, 256, 0, 0, -6],
                [512, 768, 256, 256, 0, 0, -6],
                [768, 768, 256, 256, 0, 0, -6],
                [1024, 768, 256, 256, 0, 0, -6],
                [1280, 768, 256, 256, 0, 0, -6],
                [1536, 768, 256, 256, 0, 0, -6],
                [0, 1024, 256, 256, 0, 0, -6],
                [256, 1024, 256, 256, 0, 0, -6],
                [512, 1024, 256, 256, 0, 0, -6],
                [768, 1024, 256, 256, 0, 0, -6],
                [1024, 1024, 256, 256, 0, 0, -6],
                [1280, 1024, 256, 256, 0, 0, -6],
                [1536, 1024, 256, 256, 0, 0, -6],
                [0, 1280, 256, 256, 0, 0, -6],
                [256, 1280, 256, 256, 0, 0, -6],
                [512, 1280, 256, 256, 0, 0, -6],
                [768, 1280, 256, 256, 0, 0, -6]
            ],
            "animations":{
                "idle":{
                    "speed": 1,
                    "next": "idle",
                    "frames": [12]
                },
                "walk": {
                    "speed": 1,
                    "next": "walk",
                    "frames": [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,23]
                },
                "hit": {
                    "speed": 1,
                    "next": "idle",
                    "frames": [

                        24,
                        25,
                        26,
                        27,
                        28,
                        29,
                        30,
                        31,
                        32,
                        33,
                        34,
                        35,
                        36,
                        37,
                        38
                    ]
                },
                "umbrella": {
                    "speed": 1,
                    "next": "umbrella",
                    "frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
                }
            }
        };

        t=this;

         var spriteSheet = new createjs.SpriteSheet(data);
            t.hero3 = new createjs.Sprite(spriteSheet,'walk');
        t.hero3.stop();
         t.hero3.framerate=24;
         t.addChild(t.hero3);
         t.hero3.regX = 94;
        t.hero3.regY = 57;
        t.hero3.x=-25;


/*
        this.hero =new createjs.Bitmap(main.loadedData.getResult('hero1'));
        this.hero.visible=false;

        this.hero2 =new createjs.Bitmap(main.loadedData.getResult('hero2'));



        this.hero.regX = 57;
        this.hero2.regX = 57;
        t.addChild(this.hero);
        t.addChild(this.hero2);
        this.hero2.visible = false;
        */
        this.hit =new createjs.Bitmap(main.loadedData.getResult('hit'));
        this.addChild(this.hit);
        this.hit.alpha=0;
        this.hit.x = -57;
        this.hit.y = 13;
        plask1 = new createjs.Bitmap(main.loadedData.getResult('plask1'));
        plask1.x = -70;
        plask2 = new createjs.Bitmap(main.loadedData.getResult('plask2'));
        plask2.x = -60;
        plask2.y= -30;
        t.addChild(plask1);
        t.addChild(plask2);

        plask1.visible = false;
        plask2.visible = false;

        doublepoints = new createjs.Bitmap(main.loadedData.getResult('doublepoints'));
        doublepoints.x = -70;
        t.addChild(doublepoints);
        doublepoints.visible = false;

        extralife = new createjs.Bitmap(main.loadedData.getResult('extralife'));
        extralife.x = -70;
        t.addChild(extralife);
        extralife.visible = false;

        multiplayer = new createjs.Bitmap(main.loadedData.getResult('multiplayer'));
        multiplayer.x = -70;
        t.addChild(multiplayer);
        multiplayer.visible = false;

        noobstacles = new createjs.Bitmap(main.loadedData.getResult('noobstacles'));
        noobstacles.x = -70;
        t.addChild(noobstacles);
        noobstacles.visible = false;

/*
        immortality = new createjs.Bitmap(main.loadedData.getResult('immortality'));
        immortality.x = -70;
        t.addChild(immortality);
        immortality.visible = false;
*/

    };
    hero.immortality = function(){
        playSounds('bonus1');
        t.parent.isImmortal = true;
        xOffset=20;
        this.hero3.gotoAndPlay('umbrella');
        //this.hero.visible =false;
        //this.hero2.visible =true;
       tim= setTimeout(immortalityEnds,4000);

    };
    function immortalityEnds(){
        TweenLite.to(t.hero3,.1,{alpha:0});
        TweenLite.to(t.hero3,.1,{delay:.1,alpha:1});
        TweenLite.to(t.hero3,.1,{delay:.2,alpha:0});
        TweenLite.to(t.hero3,.1,{delay:.3,alpha:1});
        TweenLite.to(t.hero3,.1,{delay:.4,alpha:0});
        TweenLite.to(t.hero3,.1,{delay:.5,alpha:1,onComplete:t.mortality});
    }
    hero.mortality = function(){
        t.parent.isImmortal = false;
        xOffset=0;
        t.hero3.gotoAndPlay('walk');
        //this.hero3.gotoAndPlay('walk');
      //  t.hero.visible =true;
        //t.hero2.visible =false;
    };
    hero.bad=function(){
        t.parent.isHitting=true;
        setTimeout(function(){t.parent.isHitting=false},500)
        this.hero3.gotoAndPlay('hit');
        //t.parent.isImmortal = true;
       /* TweenLite.to(t.hero3,.1,{alpha:0});
        TweenLite.to(t.hero3,.1,{delay:.1,alpha:1});
        TweenLite.to(t.hero3,.1,{delay:.2,alpha:0});
        TweenLite.to(t.hero3,.1,{delay:.3,alpha:1});
        TweenLite.to(t.hero3,.1,{delay:.4,alpha:0});
        TweenLite.to(t.hero3,.1,{delay:.5,alpha:1,onComplete:t.mortality});*/

        playSounds('bad'+Math.ceil(Math.random()*5));
    };
    hero.notbad=function(){
        plask2.visible = true;
         TweenLite.to(plask2,0.4,{y:-60,onComplete:resetPlask,onCompleteParams:[plask2]});
    }
    hero.good=function(){
        var temp;
        if(t.parent.pointMulti==1)
        {
            temp=plask1;
        }else{
            temp = doublepoints;
        }
        temp.visible = true;
        TweenLite.to(temp,0.4,{y:-50,onComplete:resetPlask,onCompleteParams:[temp]});
        playSounds('good'+Math.ceil(Math.random()*4));

    };
    hero.bonus=function(s){
        var temp;
        if(s=='1'){temp = multiplayer;}else if(s=='3'){temp = extralife;}else{temp = noobstacles;}
        

        temp.visible = true;
        TweenLite.to(temp,0.4,{y:-50,onComplete:resetPlask,onCompleteParams:[temp]});
        playSounds('good'+Math.ceil(Math.random()*4));
    };

    hero.endGame=function(){
        this.hero3.stop();
        clearTimeout(tim);
    };
    function resetPlask(z) {

        z.visible = false;
      z.y=0;
    }
    window.Hero=Hero;
}());
