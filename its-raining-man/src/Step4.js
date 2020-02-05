
(function()
{
    'use strict';
    var t;
    var bgd;

    var hud;

    var tPoints;
    var lifeimage;

    var spadajki_container;

    var hero,hero3;
    var best;
    var leftA,rightA;
    var toCheck=[];
    var hero1, hero3,sh;
    var isLewo = false;
    var isPrawo = false;
    var isLeft,isRight;
    var nMaxSpeed=3;
    var zlatywacz;
    var increaseMovement = 5;
    var nMaxMovement=15;
    var nMove=0;
    var nCounte=0;
    var r=false;
    var l=false;
    var hit,white;
    var skip=false;
    var step = 0;

    var Step4=function()
    {
        t = this;
        t.pointMulti;
        t.isWalking=false;
        t.isImmortal=false;
        this.initialize();

    };
    var p=Step4.prototype=new createjs.Container();
    p.initialize=function() {


        r=false;
        skip=false;
        l=false;
        bgd=new createjs.Bitmap(main.loadedData.getResult('game_bgd'));
        t.addChild(bgd);
        hud = new createjs.Container();
        //hud.x = 348;
        //TweenMax.from(hud,1,{y:-110});
        bgd = new createjs.Bitmap(main.loadedData.getResult('hud'));
        hud.addChild(bgd);

        for(var i=0;i<3;i++){
            lifeimage = new createjs.Bitmap(main.loadedData.getResult('flint_small'));
            lifeimage.x = 176+i*32;
            lifeimage.y = 19;
            lifeimage.name = 'life'+(i+1);
            hud.addChild(lifeimage);
        }

        tPoints  = new createjs.Text('0', '32px cloudy_boldregular','#17527E');
        tPoints.textBaseline = 'alphabetic';
        tPoints.lineWidth = 92;
        tPoints.lineHeight=50;
        tPoints.textAlign='center';
        tPoints.x = 106;
        tPoints.y = 60;
        hud.addChild(tPoints);
        white= new createjs.Bitmap(main.loadedData.getResult('white'));
        white.x = 69;
        white.alpha=0;
        hud.addChild(white);
        white.x =233;
        white.y =20;


        best = new createjs.Text(strings.pages.game.best_score.text, strings.pages.game.best_score.font,'#41B8EB');
        best.textBaseline = 'alphabetic';
        best.lineWidth = 92;
        best.lineHeight=20;
        best.textAlign='center';
        best.x = 121+46;
        best.y = 82+strings.pages.game.best_score.y+getoffset(best.font);
        hud.addChild(best);


        best = new createjs.Text('1100', "12px cloudy_boldregular",'#18537D');
        best.textBaseline = 'alphabetic';
        best.lineWidth = 92;
        best.lineHeight=20;
        best.textAlign='center';
        best.x = 121+46;
        best.y = 101+13;
        hud.addChild(best);



        spadajki_container = new createjs.Container();

        t.addChild(spadajki_container);
        var clouds=new createjs.Bitmap(main.loadedData.getResult('clouds2'));
        t.addChild(clouds);


        sh = new createjs.Shape(new createjs.Graphics().beginFill('#a9e6ff').drawRect(-512, -287, 1024, 574).endFill());
        sh.x =  512;
        sh.y =  287;
        TweenMax.to(sh,2,{alpha:0});

        addActor();


        t.addChild(hud);
        t.addChild(sh);

        createCookie('CloudyWithAChanceOfMeatballs_tutorial',1,300);
        lewo();
        createjs.Ticker.addEventListener('tick', update);
    };
    function update() {

        if (isLeft) {
            nMove += increaseMovement;
            nMove = Math.min(nMaxMovement, nMove);
        } else if (isRight) {
            nMove -= increaseMovement;
            nMove = Math.max(-nMaxMovement, nMove);
        } else {
            if (nMove > 0) {
                nMove = Math.max(0, nMove - increaseMovement);
            } else if (nMove < 0) {
                nMove = Math.min(0, nMove + increaseMovement);
            }
        }
        var val = hero.x - nMove;
        hero.x = Math.min(Math.max(val, 20), 1004);


            toCheck.forEach(function(entry) {
                if(ndgmr.checkRectCollision(hit,entry)) {

                    TweenMax.killTweensOf(zlatywacz);
                    spadajki_container.removeChild(zlatywacz);
                    wybierzAkcje(entry.name);
                    zlatywacz = null;


                    var index = toCheck.indexOf(entry);
                    toCheck.splice(index, 1);
                    spadajki_container.removeChild(entry);
                    entry = null;
                   /* for(var i=0;i<toCheck.length;i++){
                        if(toCheck[i]==entry){

                        }

                    }*/


                    if(toCheck.length==1){
                        toCheck=[];
                    }

                }

                });



    }

    function wybierzAkcje(s){

        var plask2;
        console.log(step);
        switch(step) {
            case 0:
                 plask2 = new createjs.Bitmap(main.loadedData.getResult('plask1'));
                playSounds('good'+Math.ceil(Math.random()*4));
                hero.addChild(plask2);
                plask2.x = -60;
                plask2.y = -30;
                tPoints.text=100;
                TweenLite.to(plask2,1,{y:-60,onComplete:resetPlask,onCompleteParams:[plask2]});
                step=1;
                setTimeout(zlecZly,500);
            break;
            case 1:

                TweenLite.from(white,1,{alpha:1});
                lifeimage.alpha=0;
                hero3.gotoAndPlay('hit');
                playSounds('bad'+Math.ceil(Math.random()*4));
                step=2;

                /* plask2 = new createjs.Bitmap(main.loadedData.getResult('plask2'));

                hero.addChild(plask2);
                plask2.x =-60;
                plask2.y = -30;
                TweenLite.to(plask2,1,{y:-60,onComplete:resetPlask,onCompleteParams:[plask2]});

                */
                setTimeout(zlecBonus1,500);
             break;
            case 2:
                 plask2 = new createjs.Bitmap(main.loadedData.getResult('multiplayer'));
                playSounds('bonus1');
                hero.addChild(plask2);
                plask2.x =-60;
                plask2.y = -30;
                TweenLite.to(plask2,1,{y:-60,onComplete:resetPlask,onCompleteParams:[plask2]});
                step=3;
                setTimeout(zlecDobry2,500);
                break;
            case 3:
                tPoints.text=300;
                plask2= new createjs.Bitmap(main.loadedData.getResult('doublepoints'));
                playSounds('good'+Math.ceil(Math.random()*4));;
                hero.addChild(plask2);
                plask2.x =-60;
                plask2.y = -30;
                TweenLite.to(plask2,1,{y:-60,onComplete:resetPlask,onCompleteParams:[plask2]});
                step=4;
                setTimeout(zlecBonus2,500);
             break;
            case 4:
                hero3.gotoAndStop('umbrella');
                t.isImmortal=true;
                setTimeout(zlecZly2,500);
                step=5;
            break;
            case 5:

                plask2 = new createjs.Bitmap(main.loadedData.getResult('plask2'));
                playSounds('bad'+Math.ceil(Math.random()*4));
                hero.addChild(plask2);
                plask2.x =-60;
                plask2.y = -30;
                TweenLite.to(plask2,1,{y:-60,onComplete:resetPlask,onCompleteParams:[plask2]});

                step=6;
                TweenLite.from(white,1,{alpha:1});
                lifeimage.alpha=0;
                t.isImmortal=false;
                playSounds('bad'+Math.ceil(Math.random()*4));
                setTimeout(zlecBonus3,500);
                break;
            case 6:

                lifeimage.alpha=1;
                TweenLite.from(white,1,{alpha:1});
                plask2 = new createjs.Bitmap(main.loadedData.getResult('extralife'));
                playSounds('bonus3');
                hero.addChild(plask2);
                plask2.x =-60;
                plask2.y = -30;
                TweenLite.to(plask2,1,{y:-60,onComplete:resetPlask,onCompleteParams:[plask2]});
                step=7;
                setTimeout(zlecBonus4,500);
                break;
            case 7:
                plask2 = new createjs.Bitmap(main.loadedData.getResult('noobstacles'));
                playSounds('bonus3');
                hero.addChild(plask2);
                plask2.x =-60;
                plask2.y = -30;
                TweenLite.to(plask2,1,{y:-60,onComplete:resetPlask,onCompleteParams:[plask2]});
                step=8;
                setTimeout(zlecDobry3,500);
                break;
            case 8:
                plask2 = new createjs.Bitmap(main.loadedData.getResult('plask1'));
                playSounds('good'+Math.ceil(Math.random()*4));
                hero.addChild(plask2);
                plask2.x =-60;
                plask2.y = -30;
                tPoints.text=100;
                TweenLite.to(plask2,1,{y:-60,onComplete:resetPlask,onCompleteParams:[plask2]});
                if(skip==false){skip=true;
                    setTimeout(onSkip,1000);
                }
                break;



        }


    }

    function zlecBonus4(){
        console.log('zlec bonus 4');


        zlatywacz=new createjs.Bitmap(main.loadedData.getResult('a4'));
        zlatywacz.x =1024/2-100;
        zlatywacz.y = -50;
        zlatywacz.name='a4'
        toCheck.push(zlatywacz);
        spadajki_container.addChild(zlatywacz);
        TweenLite.to(zlatywacz,4,{y:605,ease:Linear.easeNone,onComplete:zlecBonus4});
    }


    function zlecBonus3(){
        t.isZly=false;
        if(main.isMobile){
            t.addEventListener('pressmove',onMove);
        }else{
            window.document.onkeydown = keydown;
            window.document.onkeyup = keyup;
        }

        zlatywacz=new createjs.Bitmap(main.loadedData.getResult('a3'));
        zlatywacz.x =1024/2-100;
        zlatywacz.y = -50;
        zlatywacz.name='a3'
        spadajki_container.addChild(zlatywacz);
        toCheck.push(zlatywacz);
        TweenLite.to(zlatywacz,4,{y:605,ease:Linear.easeNone,onComplete:zlecBonus3});
    }
    function zlecBonus1(){
        console.log('zlec bonus 1');
        t.isZly=false;
        if(main.isMobile){
            t.addEventListener('pressmove',onMove);
        }else{
            window.document.onkeydown = keydown;
            window.document.onkeyup = keyup;
        }

        zlatywacz=new createjs.Bitmap(main.loadedData.getResult('a1'));
        zlatywacz.x =1024/2-100;
        zlatywacz.y = -50;
        zlatywacz.name='a1';
        spadajki_container.addChild(zlatywacz);
        toCheck.push(zlatywacz);
        TweenLite.to(zlatywacz,4,{y:605,ease:Linear.easeNone,onComplete:zlecBonus1});
    }

    function zlecBonus2(){


        zlatywacz=new createjs.Bitmap(main.loadedData.getResult('a2'));
        zlatywacz.x =1024/2-100;
        zlatywacz.y = -50;
        zlatywacz.name='a2';
        spadajki_container.addChild(zlatywacz);
        toCheck.push(zlatywacz);
        TweenLite.to(zlatywacz,4,{y:605,ease:Linear.easeNone,onComplete:zlecBonus2});
    }
    function zlecZly2(){

        isLeft=false;
        isRight=false;
        if(main.isMobile){
            t.removeEventListener('pressmove',onMove);
        }else{
            window.document.onkeydown = null;
            window.document.onkeyup = null;
        }

        zlatywacz=new createjs.Bitmap(main.loadedData.getResult('b1'));
        zlatywacz.name='b1'
        zlatywacz.x =hero.x-60;
        zlatywacz.y = -50;
        spadajki_container.addChild(zlatywacz);
        toCheck.push(zlatywacz);
        TweenLite.to(zlatywacz,4,{y:605,ease:Linear.easeNone});


    }

    function zlecZly(){

        isLeft=false;
        isRight=false;

        if(main.isMobile){
            t.removeEventListener('pressmove',onMove);
        }else{
            window.document.onkeydown = null;
            window.document.onkeyup = null;
        }
        t.isZly=true;
        hero3.gotoAndStop('idle');

        zlatywacz=new createjs.Bitmap(main.loadedData.getResult('b1'));
        zlatywacz.name='b1'
        zlatywacz.x =hero.x-60;
        zlatywacz.y = -50;
        spadajki_container.addChild(zlatywacz);
        toCheck.push(zlatywacz);
        TweenLite.to(zlatywacz,4,{y:605,ease:Linear.easeNone});


    }

    function resetPlask(z){
        hero.removeChild(z);
    }
    function reszta(){
        console.log('reszta');
        r=true;
        isLewo=false;
        isPrawo = false;
        leftA.alpha=0;
        rightA.alpha=0;

        zlecDobry();
    }
    function zlecDobry3(){
        for(var i=0;i<5;i++){
            zlatywacz=new createjs.Bitmap(main.loadedData.getResult('g'+Math.ceil(Math.random()*4)));
            zlatywacz.x  = 100+(i*200);
            zlatywacz.y = -50;
            spadajki_container.addChild(zlatywacz);
            zlatywacz.name='g'+i;
            toCheck.push(zlatywacz);
            TweenLite.to(zlatywacz,3+Math.random()*2,{y:605,ease:Linear.easeNone});
        }
    }

    function zlecDobry(){
        zlatywacz=new createjs.Bitmap(main.loadedData.getResult('g1'));
        zlatywacz.x =1024/2-100;
        zlatywacz.y = -50;
        zlatywacz.name='g1';
        toCheck.push(zlatywacz);
        spadajki_container.addChild(zlatywacz);
        TweenLite.to(zlatywacz,4,{y:605,ease:Linear.easeNone,onComplete:zlecDobry});
    }
    function zlecDobry2(){
        zlatywacz=new createjs.Bitmap(main.loadedData.getResult('g2'));
        zlatywacz.x =1024/2-100;
        zlatywacz.y = -50;
        zlatywacz.name='g1'
        toCheck.push(zlatywacz);
        spadajki_container.addChild(zlatywacz);
        TweenLite.to(zlatywacz,4,{y:605,ease:Linear.easeNone,onComplete:zlecDobry2});
    }
    function prawo(){

        console.log('prawo');
        isLewo=false;
        isPrawo = true;
        leftA.alpha=0;
        rightA.alpha=1;
    }
    function lewo(){
        leftA.addEventListener('click')
        isLewo=true;
        leftA.alpha=1;

        if(main.isMobile){
            t.addEventListener('pressmove',onMove);
        }else{
            window.document.onkeydown = keydown;
            window.document.onkeyup = keyup;
        }
    }
    function keydown(e){
        if(t.isWalking==false&&t.isImmortal==false){
            t.isWalking=true;
            hero3.gotoAndPlay('walk');
        }
        if(isLewo){

            if(l==false){
                l=true;
                setTimeout(prawo,500);
            }
            if(e.code=='ArrowLeft'||e.key=='Left'){
                isLeft=true;

                  hero3.scaleX=-1;
                  hero3.x = 0;

            }
        }else if(isPrawo){
            isLewo=false;

            if(r==false){
                r=true;
                setTimeout(reszta,500);
            }
            isLeft=false;
            if(e.code=='ArrowRight'||e.key=='Right'){
                isRight=true;

                  hero3.x = -25;
                  hero3.scaleX=1;
            }
        }else{
            if(e.code=='ArrowLeft'||e.key=='Left'){
                isLeft=true;
                  hero3.scaleX=-1;
                  hero3.x = 0;
            }
            if(e.code=='ArrowRight'||e.key=='Right'){
                isRight=true;
                  hero3.x = -25;
                  hero3.scaleX=1;
            }
        }
    }
    function keyup(e){
          if(e.code=='ArrowLeft'||e.key=='Left'){
              isLeft=false;
          }
          if(e.code=='ArrowRight'||e.key=='Right'){
              isRight=false;
          }

        if(isLeft==false&&isRight==false&&t.isWalking==true&&t.isImmortal==false){
            t.isWalking=false;
            hero3.gotoAndStop('idle')
        }
    }
    function onMove(){
        if(isLewo){

            if(stage.mouseX/main.scale<hero.x){
                if(l==false){
                    l=true;
                    setTimeout(prawo,500);
                }

                hero.x = stage.mouseX/main.scale-120;
            }
        }else if(isPrawo){

            if(stage.mouseX/main.scale>hero.x){

                if(r==false){
                    r=true;
                    setTimeout(reszta,500);
                }
                hero.x = stage.mouseX/main.scale-120;
            }
        }else{
            hero.x = stage.mouseX/main.scale-120;
        }
    }
    

    function addActor(){



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
/*
        hero=new createjs.Container();
        t.addChild(hero);
        hero.x = (1024/2)-100;
        hero.y = 442-24;
        hero1 = new createjs.Bitmap(main.loadedData.getResult('hero1'));
        hero1.x = 74;
        hero1.y = 13;
        hero.addChild(hero1);

         hero3 = new createjs.Bitmap(main.loadedData.getResult(' hero3'));
         hero3.x = 69;
        hero.addChild( hero3);
         hero3.alpha=0;

*/

        var spriteSheet = new createjs.SpriteSheet(data);
        hero = new createjs.Container();
        t.addChild(hero)
        hero3 = new createjs.Sprite(spriteSheet,'walk');
        hero3.stop();
        hero3.framerate=24;
        hero.addChild(hero3);
        hero3.regX = 94;
        hero3.regY = 57;
        hero3.x=-25;

        hero.x = (1024/2)-100;
        hero.y = 442-24;


        leftA = new createjs.Bitmap(main.loadedData.getResult('left_on'));
        leftA.y = 57;
        leftA.x = -150;
        hero.addChild(leftA);
        leftA.alpha=0;

        rightA = new createjs.Bitmap(main.loadedData.getResult('right_on'));
        rightA.y = 57;
        rightA.x = 61;
        hero.addChild(rightA);
        rightA.alpha=0;

        hit =new createjs.Bitmap(main.loadedData.getResult('hit'));
        hero.addChild(hit);
        hero.alpha=1;
        hit.x = -50;
        hit.y = 30;
        hit.alpha=0;
    }





    function onSkip(){
        isLeft=isRight=isLewo=isPrawo =false;
        if(main.isMobile){
            t.removeEventListener('pressmove',onMove);
        }else{
            window.document.onkeydown = null;
            window.document.onkeyup = null;
        }
        createjs.Ticker.removeEventListener('tick', update);
        TweenMax.killAll();
        t.addChild(sh);
        sh.alpha=0;
        TweenMax.to(sh,1,{alpha:1,onComplete:disp});
    }


    function disp(){
        t.dispatchEvent({param: Step5, type:'changePage',bubbles:true,cancelable:true});
    }


    window.Step4=Step4;

}());
