
(function()
{
    'use strict';
    var t;
    var bgd;
    var nItems = [4,11,4];
    var prefix=['a','b','g'];
    var best;
    var bestPoints;
    var bestscore_shape;
    var isPaused;
    var pauseBtt;
    var hud;
    var cospada;
    var nLife;
    var tPoints;
    var lifeimage;
    var nMaxDebris;
    var nDebris;
    var spadajki_container;
    var nMaxSpeed;
    var hero;
    var isRight;
    var isLeft;
    var toCheck;
    var debrisInterval;
    var bonus_chance;
    var good_chance;
    var isBonus1;

    var nMove;
    var nMaxMovement;
    var increaseMovement;
    var sh;
    var obstacleBonus;
    var pausePage;
    var trudnosc;
    var specialTimeout;
    var tweenMove;
    var click;
    var aSpecials=[

           [['b2',40,100,8],['g1',210,100,8],['b2',320,100,8],['b2',460,100,8],['b2',600,100,8],['g2',760,100,8],['b2',900,100,8]],
           [['b3',34,139,8],['b3',164,209,8],['a2',237,66,8],['b3',376,192,8],['b3',625,127,8],['b3',807,188,8],['g4',920,131,8]],
           [['b4',34,164,8],['b4',160,109,8],['b4',307,185,8],['g1',463,209,8],['b4',560,62,8],['b4',723,100,8],['b4',868,133,8]],
           [['b5',104,402,8],['b5',245,303,8],['b5',411,174,8],['g2',495,81,8],['b5',576,174,8],['b5',723,279,8],['b5',833,364,8]],
           [['b6',271,399,8],['b6',311,244,8],['a1',366,68,8],['g3',366,344,8],['a2',389,154,8],['b6',458,234,8],['g4',485,313,8]],
           [['b7',81,187,8],['b7',223,290,8],['b7',257,103,8],['b7',490,187,8],['b7',622,272,8],['g3',754,144,8],['b7',890,202,8]],
           [['b8',29,149,8],['b8',217,303,8],['a3',374,219,8],['b8',428,99,8],['b8',560,248,8],['b8',741,318,8],['b8',890,219,8]],
             [['g3',31,314,5],['g3',187,265,5],['g3',368,211,5],['g3',542,162,5],['g3',724,114,5],['g3',901,78,5]],
                [['g4',31,74,5],['g4',208,110,5],['g4',390,158,5],['g4',564,207,5],['g4',745,261,5],['g4',901,310,5]]




    ];
    var isSpecial;


    var Step5=function()
    {
        t = this;
        t.pointMulti;
        t.isWalking=false;
        t.isHitting=false;
        this.initialize();

    };
    var p=Step5.prototype=new createjs.Container();
    p.initialize=function() {


        console.log('Step5 - game')
        resetVars();

        if(main.mode==1){
            bestPoints = readCookie('CloudyWithAChanceOfMeatballs_easyPoints');
            if(bestPoints==null){
                bestPoints = 0;
            }

        }else{
            bestPoints = readCookie('CloudyWithAChanceOfMeatballs_hardPoints');
            if(bestPoints==null){
                bestPoints = 0;
            }

        }

        bgd=new createjs.Bitmap(main.loadedData.getResult('game_bgd'));
        t.addChild(bgd);
        hud = new createjs.Container();
        //hud.x = 348;
        TweenMax.from(hud,1,{y:-110});
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


        best = new createjs.Text(strings.pages.game.best_score.text, strings.pages.game.best_score.font,'#41B8EB');
        best.textBaseline = 'alphabetic';
        best.lineWidth = 92;
        best.lineHeight=20;
        best.textAlign='center';
        best.x = 121+46;
        best.y = 82+strings.pages.game.best_score.y+getoffset(best.font);
        hud.addChild(best);


        best = new createjs.Text(bestPoints, "12px cloudy_boldregular",'#18537D');
        best.textBaseline = 'alphabetic';
        best.lineWidth = 92;
        best.lineHeight=20;
        best.textAlign='center';
        best.x = 121+46;
        best.y = 101+13;
        hud.addChild(best);

        bestscore_shape = new createjs.Shape();
        bestscore_shape.graphics.f("#FFFFFF").s().p("AnOBLIgFixIOogGIgXDZg");
        bestscore_shape.setTransform(164,111.3);
        hud.addChild(bestscore_shape);
        bestscore_shape.visible=false;

        spadajki_container = new createjs.Container();
        t.addChild(spadajki_container);  spadajki_container = new createjs.Container();
        t.addChild(spadajki_container);
        var clouds=new createjs.Bitmap(main.loadedData.getResult('clouds2'));
        t.addChild(clouds);


        sh = new createjs.Shape(new createjs.Graphics().beginFill('#a9e6ff').drawRect(-512, -287, 1024, 574).endFill());

        sh.x =  512;
        sh.y =  287;
        TweenMax.to(sh,2,{alpha:0});
        odliczanie();
        addActor();


        t.addChild(hud);
        t.addChild(sh);



    };

    function waitForSpecial(){
        console.log('czekamy na special');
        isSpecial=true;
    }
    function odliczanie(){
        var trzy = new createjs.Bitmap(main.loadedData.getResult('3'));
        t.addChild(trzy);
        trzy.regX = trzy.image.width/2;
        trzy.regY = trzy.image.height/2;
        trzy.x = (main.nWidth/2)/main.scale;
        trzy.y =(main.nHeight/2)/main.scale;

        var dwa = new createjs.Bitmap(main.loadedData.getResult('2'));
        t.addChild(dwa);
        dwa.regX = dwa.image.width/2;
        dwa.regY = dwa.image.height/2;
        dwa.x =(main.nWidth/2)/main.scale;
        dwa.y = (main.nHeight/2)/main.scale;

        var jeden = new createjs.Bitmap(main.loadedData.getResult('1'));
        t.addChild(jeden);
        jeden.regX = jeden.image.width/2;
        jeden.regY = jeden.image.height/2;
        jeden.x =  (main.nWidth/2)/main.scale;
        jeden.y =(main.nHeight/2)/main.scale;

        var go = new createjs.Bitmap(main.loadedData.getResult('go'));
        t.addChild(go);
        go.regX = go.image.width/2;
        go.regY = go.image.height/2;
        go.x = (main.nWidth/2)/main.scale;
        go.y = (main.nHeight/2)/main.scale;


        TweenLite.from(trzy,0.5,{scaleX:0,scaleY:0,overwrite:true});
        TweenLite.from(dwa,0.5,{delay:1,scaleX:0,scaleY:0,overwrite:true});
        TweenLite.from(jeden,0.5,{delay:2,scaleX:0,scaleY:0,overwrite:true});
        TweenLite.from(go,0.5,{delay:3,scaleX:0,scaleY:0,overwrite:true});

        setTimeout(function(){TweenLite.to(trzy,1,{ scaleX:2,scaleY:2,alpha:0,overwrite:true});},500);
        setTimeout(function(){TweenLite.to(dwa,1,{ scaleX:2,scaleY:2,alpha:0,overwrite:true});},1500);
        setTimeout(function(){TweenLite.to(jeden,1,{ scaleX:2,scaleY:2,alpha:0,overwrite:true});},2500);
        setTimeout(function(){TweenLite.to(go,1,{ scaleX:2,scaleY:2,alpha:0,overwrite:true});},3500);
        setTimeout(startGame,4500);

    }


    function zmienstopientrudnosci(){

        nMaxSpeed++;
        nMaxDebris++;
        good_chance-=2;
    }
    function startGame() {

        trudnosc = setInterval(zmienstopientrudnosci,20000);
        specialTimeout = setTimeout(waitForSpecial,20000);
        t.removeChild(sh);
        debrisInterval = setInterval(createDebris,1000);
        createDebris();

        createjs.Ticker.addEventListener('tick', update);
        addPause();
    }
    function resetVars(){
        if(main.mode==1){
            bonus_chance=10;
            good_chance=55;
            nMaxDebris=7;
            nMaxSpeed=3;
            increaseMovement = 5;
            nMaxMovement=20;

        }else{
            bonus_chance=5;
            good_chance=47.5;
            nMaxDebris=10;
            nMaxSpeed=5;
            increaseMovement = 5;
            nMaxMovement=20;
        }
        main.points=0;
        isSpecial=false;
        isPaused = false;
        isRight=false;
        isLeft=false;

        isBonus1=false;
        cospada=0;
        nLife=3;
        toCheck=[];

        t.pointMulti= 1;
        nMove=0;

        nLife=3;
        nDebris = 0;

        t.isImmortal=false;
    }
    function addActor(){
        hero=new Hero();
        t.addChild(hero);
        hero.x = 1024/2;
        hero.y = 422;

        if(main.isMobile){
            t.addEventListener('pressmove',onMove);
            t.addEventListener('click',onMove);
        }else{
            window.document.onkeydown = keydown;
            window.document.onkeyup = keyup;
        }
    }
    function keydown(e){
        console.log(e);
        if(e.code=='ArrowRight'||e.key=='Right'){
            isRight=true;
        }
        if(e.code=='ArrowLeft'||e.key=='Left'){
            isLeft=true;
        }
    }
    function keyup(e){
        if(e.code=='ArrowRight'||e.key=='Right'){
            isRight=false;
        }
        if(e.code=='ArrowLeft'||e.key=='Left'){
            isLeft=false;
        }
    }
    function onMove(){
        click = stage.mouseX/main.scale;
        var zz=hero.x - click;
        if(zz>20){
            isLeft=true;
            isRight=false;
        }else if(zz<-20){
            isLeft=false;
            isRight=true;
        }else{
            isLeft=false;
            isRight=false;
        }
        /*
        if(t.isWalking==false){
        hero.hero3.gotoAndPlay('walk');
        }
        t.isWalking=true;
        TweenMax.killTweensOf(hero);
        TweenLite.to(hero,.5,{x:stage.mouseX/main.scale,ease:Strong.easeOut,onComplete:function(){t.isWalking=false}})
        //hero.x = stage.mouseX/main.scale;
        */
    }
    function update(){
        if(main.isMobile){
            if(Math.abs(click-hero.x)<10) {
                isLeft = false;
                isRight = false;
            }
        }
        if(isLeft){

            nMove+=increaseMovement;
            nMove = Math.min(nMaxMovement,nMove);
            hero.hero3.scaleX=-1;
            hero.hero3.x = 0;
            if(t.isWalking==false){

                if(t.isImmortal==true){
                    hero.hero3.gotoAndPlay('umbrella');
                }else{


                    hero.hero3.gotoAndPlay('walk');

                }
                t.isWalking=true;
            }
        }else if (isRight) {

            if(t.isWalking==false){
                if(t.isImmortal){
                    hero.hero3.gotoAndPlay('umbrella');
                }else{

                    hero.hero3.gotoAndPlay('walk');

                }
                t.isWalking=true;
            }


            hero.hero3.x = -25;
            hero.hero3.scaleX=1;
            nMove -= increaseMovement;
            nMove = Math.max(-nMaxMovement, nMove);
        }else{
            t.isWalking=false;
            if(t.isHitting==false){
                hero.hero3.stop();
            }
            if(nMove>0){
                nMove = Math.max(0,nMove-increaseMovement);
            }else if(nMove<0){
                nMove = Math.min(0,nMove+increaseMovement);
            }
        }
        var val= hero.x -nMove;
        hero.x = Math.min(Math.max(val,20),1004);


        toCheck =[];
        for(var i=0;i<spadajki_container.numChildren;i++){
            var temp = spadajki_container.getChildAt(i);
            temp.y +=temp.speed;
            if((temp.y+temp.bgd.image.height)>=442){
                toCheck.push(temp);
            }

            if(temp.y >574){
                spadajki_container.removeChild(temp);
                nDebris--;
            }
        }








        toCheck.forEach(function(entry) {

            if(ndgmr.checkRectCollision(hero.hit,entry.bgd)){
                switch( entry.name.substr(0,1)){
                    case 'b':
                        if(!t.isImmortal){
                            hero.bad();
                            removeLife();
                        }else{
                            hero.notbad();
                        }
                        break;
                    case 'g':
                        hero.good();
                        addPoints();
                        break;
                    case 'a':
                        addBonus(entry.name);
                        break;
                }
                spadajki_container.removeChild(entry);
                entry = null;
                nDebris--;
            }
        });
        toCheck =[];
    }


    function addBonus(s){


        var z = s.substr(1,1);
        hero.bonus(z);
       switch(z) {
           case '1':
               addMulti();
               break;
           case '2':
               addImmortality();
               break;
           case '3':
               addLife();
               break;
           case '4':
               noObstacles();
               break;
       }


    }

    function addImmortality(){

        hero.immortality();
    }
    function addMulti(){
        playSounds('bonus2');
        t.pointsBonus = setTimeout(function(){
            t.pointMulti=1;

        },10000);

        t.pointMulti=2;
    }
    function noObstacles() {
        playSounds('bonus3');
        obstacleBonus = setTimeout(function(){
            isBonus1 = false;

        },10000);

        isBonus1 = true;
    }
    function addPoints(){
        var points = tPoints.text;
        tPoints.text =  parseInt(points)+100*t.pointMulti;

        if(tPoints.text>bestPoints){
            startBlinkBestPoints();
            bestPoints = tPoints.text;
            best.text = bestPoints;
        }


    }
    function startBlinkBestPoints(){
        TweenMax.killTweensOf(blinkBestPoints);
        TweenMax.delayedCall(.1, blinkBestPoints);
        TweenMax.delayedCall(.2, blinkBestPoints);
        TweenMax.delayedCall(.3, blinkBestPoints);
        TweenMax.delayedCall(.4, blinkBestPoints);
        TweenMax.delayedCall(.5, blinkBestPoints);
        TweenMax.delayedCall(.6, blinkBestPoints,[true]);
    }
    function blinkBestPoints(z){
        if(z){
            bestscore_shape.visible=false;
        }else{
            bestscore_shape.visible=!bestscore_shape.visible
        }
    }

    function addLife() {
        
        playSounds('bonus4');
        if(nLife<3){
            nLife++;
            hud.getChildByName('life'+(nLife)).visible = true;
        }
    }
    function removeLife(){

        trace(nLife+'zabieram zycie');
        hud.getChildByName('life'+(nLife)).visible = false;
        nLife--;
        if(nLife<1){
            pauseMe();
            isLeft = isRight = false;
            main.points = tPoints.text;
            t.mouseEnabled=false;
            hero.endGame();
            clearTimeout(specialTimeout);
            clearTimeout(obstacleBonus);
            clearInterval(trudnosc);
            anim();

        }
    }


    function anim(){
        t.addChild(sh);
        sh.alpha=0;
        TweenMax.to(sh,2,{alpha:1,onComplete:disp});
    }

    function createDebris(){


        if(!isSpecial) {
            while (nDebris <= nMaxDebris) {
                losuj();
                var n = Math.ceil(Math.random() * nItems[cospada]);
                var zz = new createjs.Bitmap();
                var s = new Spadajka(main.loadedData.getResult(prefix[cospada] + n), Math.ceil(Math.random() * nMaxSpeed) + 3);
                spadajki_container.addChild(s);
                var szer = s.bgd.image.width;
                s.x = Math.random() * (1024 - s.bgd.image.width);
                s.y = -Math.random() * 574;
                s.name = prefix[cospada] + n;
                nDebris++;
            }
        }else{

            if(nDebris<2){
                createSpecial();
            }
        }
    }
    function createSpecial(){
        console.log('tworze special');
        var z = Math.floor(Math.random()*aSpecials.length);

        for (var i=0;i<aSpecials[z].length;i++){
            //console.log(aSpecials[z][i][0]);
            //console.log(aSpecials[z][i]);
            var s = new Spadajka(main.loadedData.getResult(aSpecials[z][i][0]), aSpecials[z][i][3]);
            spadajki_container.addChild(s);
            var szer = s.bgd.image.width;
            s.x =aSpecials[z][i][1];
            //console.log(s.x);
            s.y = -aSpecials[z][i][2];
            s.name = aSpecials[z][i][0];
            nDebris++;
        }
        isSpecial=false;
        setTimeout(waitForSpecial,20000);


    }
    function losuj(){

        var z= Math.random()*100;
        if(z<=bonus_chance) {
            cospada=0;

        } else if(z<good_chance){
            if(isBonus1){
                cospada=2;
            }else{
                cospada=1;
            }
        }else{
            cospada=2;
        }
    }

    function addPause(){
        main.soundBtt.visible = false;
        pauseBtt = new createjs.Bitmap(main.loadedData.getResult('pause_off'));
        t.addChild(pauseBtt);
        pauseBtt.name='pau';
        pauseBtt.cursor ='pointer';
        pauseBtt.x=949;
        pauseBtt.addEventListener('click',pauseMe);
        pauseBtt = new createjs.Bitmap(main.loadedData.getResult('pause_on'));
        t.addChild(pauseBtt);
        pauseBtt.mouseEnabled = false;
        pauseBtt.x=949;
        pauseBtt.visible =isPaused;
    }
    function pauseMe(e){
        isPaused=!isPaused;
        pauseBtt.visible =isPaused;
        if(isPaused){
            if(main.isMobile){
                t.removeEventListener('pressmove',onMove);
            }else{
                window.document.onkeydown = null;
                window.document.onkeyup = null;
            }
            createjs.Ticker.removeEventListener('tick', update);
            clearInterval(debrisInterval);


            if(e){addPausePage();}

        }else{
            removePausePage();
            if(main.isMobile){
                t.addEventListener('pressmove',onMove);
            }else{
                window.document.onkeydown = keydown;
                window.document.onkeyup = keyup;
            }
            createjs.Ticker.addEventListener('tick', update);
            debrisInterval = setInterval(createDebris,1000);
            createDebris();
        }
    }

    function addPausePage(){
        pausePage=  new PauseScreen();
        t.addChild(pausePage);
    }
    function removePausePage(){
        if(pausePage){
            t.removeChild(pausePage);
            pausePage = null;
        }

    }
    function disp(){
        t.dispatchEvent({param: Step6, type:'changePage',bubbles:true,cancelable:true});
    }


    window.Step5=Step5;

}());
