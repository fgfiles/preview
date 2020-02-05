
(function()
{
    'use strict';
    var t;
    var debris_container,bgd;
    var tv1,tv2,steve,sam,flint,wieloryb,spadajki_container,nDebris,nMaxDebris,debrisInterval,maska;
    var pos =[0,[30,112],[56,0],[125,30],[179,213],[259,0],[644,0],[664,0],[907,48]];
    var pos2 =[0,[51,216],[71,91],[312,504],[317,296],[617,302],[846,25],[933,219]];
    var Step1=function()
    {
        t = this;
        this.initialize();

    };
    var p=Step1.prototype=new createjs.Container();
    p.initialize=function() {
        main.soundBtt.visible = true;
        nDebris=0;
        nMaxDebris =10;
        playSounds('intro');
         bgd=new createjs.Bitmap(main.loadedData.getResult('start_bgd'));
        t.addChild(bgd);
        wieloryb = new createjs.Bitmap(main.loadedData.getResult('wieloryb'));
        wieloryb.y= 285;
        wieloryb.x =-100;
        t.addChild(wieloryb);
        spadajki_container = new createjs.Container();
        t.addChild(spadajki_container);


        maska = new createjs.Shape();
        maska.graphics.f("#000000").s().p("EgadAjmIgsh1Mg07gADMAADhF5MCf/AAAMAAHBHPI3UAAIAAieImpggIAADGI2wAAIAABAg");
        maska.setTransform(512.2,231.6);
        t.addChild(maska);
        maska.alpha=0;
        spadajki_container.mask = maska;
        debris_container = new createjs.Container();
        t.addChild(debris_container);

        var clouds=new createjs.Bitmap(main.loadedData.getResult('clouds_intro'));
        t.addChild(clouds);



         steve =new createjs.Bitmap(main.loadedData.getResult('steve'));
        steve.x = 1040;
        steve.y = 372;
        t.addChild(steve);

         sam =new createjs.Bitmap(main.loadedData.getResult('sam'));
        sam.x = -324;
        sam.y = 402;
        t.addChild(sam);

         flint =new createjs.Bitmap(main.loadedData.getResult('flint'));
        flint.x = 357;
        flint.y = 580;
        t.addChild(flint);



        setTimeout(addTvAnimation,1000);
        setTimeout(addTv2Animation,500);

        addCharactersAnimation();

        addDebris();

        var next = new FrameBtt(main.loadedData.getResult('nextBtt'),'',main.loadedData.getResult('nextBtt_on'));
        t.addChild(next);
        next.x = 617;
        next.y= 306;
        next.addEventListener('click',onStep2);

        TweenLite.from(next,0.6,{delay:1.5,y:-300,onComplete:przesun,ease:Linear.easeNone});


        var logo1 =new createjs.Bitmap(main.loadedData.getResult('logo1'));
        t.addChild(logo1);
        logo1.x = 466;
        logo1.y= 16;
        TweenLite.from(logo1,0.6,{delay:2,y:-300,ease:Strong.easeOut});

        var logo2 =new createjs.Bitmap(main.loadedData.getResult('logo2'));
        t.addChild(logo2);
        logo2.x = 375;
        logo2.y= 100;
        TweenLite.from(logo2,0.3,{delay:1,y:-300,ease:Strong.easeOut});



        //t.addChild(maska);

        createDebris();
        debrisInterval = setInterval(createDebris,1000);
        createjs.Ticker.addEventListener('tick', update);
    };
    function createDebris(){

        while(nDebris<=nMaxDebris){
            var s =new createjs.Bitmap(main.loadedData.getResult('straw'));
            spadajki_container.addChild(s);
            var szer = s.image.width;
            s.x = Math.random()*(1024-s.image.width);
            s.y = -Math.random()*574;
            nDebris++;
        }
    }
    function update() {


        for (var i = 0; i < spadajki_container.numChildren; i++) {
            var temp = spadajki_container.getChildAt(i);
            temp.y += 5;

            if (temp.y > 574) {
                spadajki_container.removeChild(temp);
                nDebris--;
            }
        }
    }


    function przesun(){
        bgd.y -=5;
        setTimeout(function(){
            bgd.y+=5;
        },100);
    }
    function addDebris(){
        var debris;
        for(var i=1;i<8;i++){
             debris =new createjs.Bitmap(main.loadedData.getResult('start_debris'+i));
            debris.x = pos[i][0];
            debris.y = pos[i][1];
            debris_container.addChild(debris);
            TweenLite.from(debris,.5,{delay:Math.random()/2+0.2,y:-debris.image.height});

        }
        /*
        for(i=1;i<pos2.length;i++){
            debris =new createjs.Bitmap(main.loadedData.getResult('straw'));
            debris.x = pos2[i][0];
            debris.y = pos2[i][1];
            debris_container.addChild(debris);
            debris.rotation = -30+Math.random()*60;
            TweenLite.from(debris,.5,{delay:Math.random()/2+0.1,y:-debris.image.height});

        }
        */

    }
    function addCharactersAnimation(){
        TweenLite.to(flint,1,{y:294,ease:Strong.easeOut});
        TweenLite.to(sam,1,{x:324,ease:Strong.easeOut});
        TweenLite.to(steve,1,{x:449,ease:Strong.easeOut});
        TweenLite.to(wieloryb,300,{x:1100,ease:Strong.easeOut});


    }
    function addTv2Animation(){

        tv2 = new createjs.Bitmap(main.loadedData.getResult('tv2_1'));
        tv2.x = 845;
        tv2.y = -381;
        TweenLite.to(tv2,0.5,{ease:Linear.easeNone,y:409,onComplete:podmientv2});
        t.addChild(tv2);
    }
    function podmientv2(){
        playSounds('tv_slam');
        tv2 = new createjs.Bitmap(main.loadedData.getResult('tv2_2'));
        tv2.x = 801;
        tv2.y = 483;
        t.addChild(tv2);
        przesun();
    }
    function addTvAnimation(){

         tv1 = new createjs.Bitmap(main.loadedData.getResult('tv1_1'));
        tv1.x = 82;
        tv1.y = -381;
        TweenLite.to(tv1,0.5,{ease:Linear.easeNone,y:361,onComplete:podmientv1});
        t.addChild(tv1);
    }
    function podmientv1(){
        playSounds('tv_slam2');
        przesun();
        t.removeChild(tv1);
        tv1 = new createjs.Bitmap(main.loadedData.getResult('tv1_2'));
        tv1.x = 36;
        tv1.y = 381;
        t.addChild(tv1);
    }
    function wlaczbtt1(){
        btt1.mouseEnabled=true;
    }
    function onStep2(){
        clearTimeout(debrisInterval);
        createjs.Ticker.removeEventListener('tick', update);
        var sh = new createjs.Shape(new createjs.Graphics().beginFill('#000').drawRect(-512, -287, 1024, 574).endFill());
        t.addChild(sh);
        sh.x =  512;
        sh.y =  287;
        sh.alpha=0;
       // sh.scaleX = sh.scaleY  =0;
        TweenLite.to(sh,0.3,{alpha:1,ease:Strong.easeOut,onComplete:changeToStep2});

    }
    function changeToStep2(){
        TweenMax.killAll();
       t.dispatchEvent({param: Step2, type:'changePage',bubbles:true,cancelable:true});
    }
    window.Step1=Step1;

}());
