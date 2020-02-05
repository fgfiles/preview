
(function()
{
    'use strict';
    var t;
    var bgd;
    var black,debris_container,wieloryb,flinnContainer,f,spadajki_container,nDebris,nMaxDebris,debrisInterval,maska;
    var tv1,tv2,la,ra,c1,c2;
    var pos =[0,[30,112],[56,0],[143,0],[259,0],[644,0],[907,48]];
    var Step3=function()
    {
        t = this;
        this.initialize();
    };
    var p=Step3.prototype=new createjs.Container();
    p.initialize=function() {
        nDebris=0;
        nMaxDebris =10;
        main.soundBtt.visible = true;
        bgd=new createjs.Bitmap(main.loadedData.getResult('start_bgd'));
        t.addChild(bgd);


        spadajki_container = new createjs.Container();
        t.addChild(spadajki_container);


        maska = new createjs.Shape();
        maska.graphics.f("#000000").s().p("EgadAjmIgsh1Mg07gADMAADhF5MCf/AAAMAAHBHPI3UAAIAAieImpggIAADGI2wAAIAABAg");
        maska.setTransform(512.2,231.6);
        t.addChild(maska);
        maska.alpha=0;
        spadajki_container.mask = maska;


        black = new createjs.Shape(new createjs.Graphics().beginFill('#000').drawRect(-512, -287, 1024, 574).endFill());
        t.addChild(black);
        black.x =  512;
        black.y =  287;
        TweenLite.to(black,1,{alpha:0,onComplete:clear});

        debris_container = new createjs.Container();
        t.addChild(debris_container);

        var clouds=new createjs.Bitmap(main.loadedData.getResult('clouds_intro'));
        t.addChild(clouds);

        wieloryb = new createjs.Bitmap(main.loadedData.getResult('wieloryb'));
        wieloryb.y= 285;
        wieloryb.x =-100;
        t.addChild(wieloryb);
        addCharactersAnimation();

        setTimeout(addTvAnimation,1500);
        setTimeout(addTv2Animation,1000);
        addDebris();

        flinnContainer = new createjs.Container();
        flinnContainer.x = 124;
        flinnContainer.y= -38;

        f = new lib.blinkin();
        f.x = 175;


        la = new createjs.Bitmap(main.loadedData.getResult('leftarm'));
        ra = new createjs.Bitmap(main.loadedData.getResult('rightarm'));

        la.regX = 362;
        ra.x=400;
        ra.y  = 433;
        la.x =368;
        la.y =437;
     //   eyes = new createjs.Bitmap(main.loadedData.getResult('eyes'));
       // eyes.y= 199;
        //eyes.x =343;
        //t.addChild(eyes);
        flinnContainer.addChild(la,ra,f);


        c1 = new FrameBtt(main.loadedData.getResult('c1_off'),strings.pages.choice.easy.text,main.loadedData.getResult('c1_on'),'#ffffff',strings.pages.choice.easy);
        t.addChild(c1);
        c1.x = 99;
        c1.y= -276;

        c2 = new FrameBtt(main.loadedData.getResult('c2_off'),strings.pages.choice.easy.text,main.loadedData.getResult('c2_on'),'#ffffff',strings.pages.choice.hard);
        t.addChild(c2);
        c2.x = 692;
        c2.y= -276;

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


    function addDebris(){
        for(var i=1;i<7;i++){
            var debris =new createjs.Bitmap(main.loadedData.getResult('choose_debris'+i));
            debris.x = pos[i][0];
            debris.y = pos[i][1];
            debris_container.addChild(debris);
            TweenLite.from(debris,.5,{delay:Math.random()/2+0.2,y:-debris.image.height});

        }

    }
    function addCharactersAnimation(){
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
        TweenLite.from(flinnContainer,.5,{y:570});
        t.addChild(flinnContainer);
        TweenLite.to(c1,.5,{y:76});
        TweenLite.to(c2,.5,{y:76});


        c1.addEventListener('click',onEasy);
        c1.addEventListener('mouseover',onC1Over);
        c1.addEventListener('mouseout',onC1Out);
        c2.addEventListener('click',onHard);
        c2.addEventListener('mouseover',onC2Over);
        c2.addEventListener('mouseout',onC2Out);
    }
    function onC1Over(){

        f.eyes.y= 215;
        f.eyes.x =207;
        TweenLite.to(la,0.5,{rotation:20});
    }
    function onC1Out(){
        f.eyes.y= 209;
        f.eyes.x =209;
        TweenLite.to(la,0.5,{rotation:0});
    }

    function onC2Over(){

        f.eyes.y= 212;
        f.eyes.x =212;
        TweenLite.to(ra,0.5,{rotation:-20});
    }
    function onC2Out(){
        f.eyes.y= 209;
        f.eyes.x =209;
        TweenLite.to(ra,0.5,{rotation:0});
    }

    function przesun(){
        bgd.y -=5;
        setTimeout(function(){
            bgd.y+=5;
        },100);
    }

    function clear(){
        black.graphics.clear();
    }
    function disp() {
        var isTutorial = readCookie('CloudyWithAChanceOfMeatballs_tutorial');
        if (isTutorial == null) {
            t.dispatchEvent({param: Step4, type: 'changePage', bubbles: true, cancelable: true});
        } else {
            t.dispatchEvent({param: Step5, type: 'changePage', bubbles: true, cancelable: true});
        }

    }
    function onEasy(){
        main.mode = 1;
        anim();
    }
    function onHard(){
        main.mode = 2;
        anim();
    }
   function anim(){
       clearTimeout(debrisInterval);
       createjs.Ticker.removeEventListener('tick', update);
       var sh = new createjs.Shape(new createjs.Graphics().beginFill('#a9e6ff').drawRect(-512, -287, 1024, 574).endFill());
       t.addChild(sh);
       sh.x =  512;
       sh.y =  287;
       TweenMax.from(sh,0.5,{scaleX:0,scaleY:0,onComplete:disp});
   }

    window.Step3=Step3;

}());
