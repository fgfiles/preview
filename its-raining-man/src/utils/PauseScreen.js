
(function(){
    'use strict';
    var t;
    var nextBtt,restartBtt,homeBtt,leftBtt,rightBtt,sureAppla,tak,nie;
    var nCurrent;
    var PauseScreen=function()
    {
        t=this;
        this.initialize();

    };
    var pauseScreen=PauseScreen.prototype=new createjs.Container();
    pauseScreen.Container_initialize=pauseScreen.initialize;
    pauseScreen.initialize=function()
    {
        nCurrent=1;
        this.Container_initialize();
        var bgd=new createjs.Bitmap(main.loadedData.getResult('pause_bgd'));
        t.addChild(bgd);
        main.soundBtt.visible = true;
        nextBtt = new FrameBtt(main.loadedData.getResult('htp_next_off'),'',main.loadedData.getResult('htp_next_on'));
        nextBtt.x =877;
        nextBtt.y =409;
        t.addChild(nextBtt);
        nextBtt.addEventListener('click',zamknij);

        restartBtt = new FrameBtt(main.loadedData.getResult('htp_restart_off'),'',main.loadedData.getResult('htp_restart_on'));
        restartBtt.x =28;
        restartBtt.y =409;
        t.addChild(restartBtt);
        restartBtt.addEventListener('click',function(e){
            e.currentTarget.mouseEnabled = true;
            t.mode = 1;
            t.addChild(sureAppla);
        });

        homeBtt = new FrameBtt(main.loadedData.getResult('home_off'),'',main.loadedData.getResult('home_on'));
        homeBtt.addEventListener('click',onStep1);
        homeBtt.x =10;
        t.addChild(homeBtt);

        leftBtt = new FrameBtt(main.loadedData.getResult('htp_left_off'),'',main.loadedData.getResult('htp_left_on'));
        leftBtt.addEventListener('click',onLeft);
        leftBtt.x =66;
        leftBtt.y =205;
        t.addChild(leftBtt);

        rightBtt = new FrameBtt(main.loadedData.getResult('htp_right_off'),'',main.loadedData.getResult('htp_right_on'));
        rightBtt.addEventListener('click',onRight);
        rightBtt.x =838;
        rightBtt.y =205;
        t.addChild(rightBtt);
        var screen;
         screen= new createjs.Bitmap(main.loadedData.getResult('htpScreen_on'));
        screen.name = 's'+1;
        screen.x = 406;
        screen.y = 503;
        t.addChild(screen);
        screen.cursor='pointer';
        for(var i=2;i<5;i++){
            screen = new createjs.Bitmap(main.loadedData.getResult('htpScreen_off'));
            screen.name = 's'+i;
            screen.x = 406+(54*(i-1));
            screen.y = 503;
            t.addChild(screen);
            screen.cursor='pointer';
        }
        screen = new createjs.Bitmap(main.loadedData.getResult('htp1'));
        screen.name = 'h1';
        screen.x = 189;
        screen.y = 106;
        t.addChild(screen);

        for ( i=1;i<5;i++){
            t.getChildByName('s'+i).addEventListener('click',wlaczMnie);

        }
        sureAppla = new createjs.Container();
        var sh = new createjs.Shape(new createjs.Graphics().beginFill('#000').drawRect(-512, -287, 1024, 574).endFill());
        sh.x =  512;
        sh.y =  287;
        sh.alpha=0.85;
        sureAppla.addChild(sh);
        tak = new FrameBtt(main.loadedData.getResult('tak_off'),'',main.loadedData.getResult('tak_on'));

        nie = new FrameBtt(main.loadedData.getResult('nie_off'),'',main.loadedData.getResult('nie_on'));
        var malpa = new createjs.Bitmap(main.loadedData.getResult('malpa'));
        nie.addEventListener('click',onNie);
        tak.addEventListener('click',onTak);

        var sure  = new createjs.Text(strings.pages.gameover.sure.text, strings.pages.gameover.sure.font,'#ffffff');
        sure.textBaseline = 'alphabetic';
        sure.lineWidth = 1024;
        sure.lineHeight=65;
        sure.textAlign='center';

        sure.x = 512+strings.pages.gameover.sure.x;
        sure.y = 128+strings.pages.gameover.sure.y+getoffset(sure.font);
        sureAppla.addChild(tak,nie,malpa,sure)
        tak.x = 546;
        tak.y = 242;
        nie.x =360;
        nie.y =242;
        malpa.x= 438;
        malpa.y = 402;
    };
    function onNie(e){
        e.currentTarget.mouseEnabled = true;
        t.removeChild(sureAppla);
    }
    function onTak(e){

        t.removeChild(sureAppla);
        if(t.mode == 1){
            t.parent.dispatchEvent({param: Temp, type:'changePage',bubbles:true,cancelable:true});
        }else{
            t.removeMe();
            t.parent.dispatchEvent({param: Step1, type:'changePage',bubbles:true,cancelable:true});
        }

    }
    function dograj(a){
        setTimeout(wlaczScreen,100,a);

    }

    function wlaczScreen(a){
        var screen;
        t.removeChild(t.getChildByName('h'+a));
        t.removeChild(t.getChildByName('s'+a));


        screen= new createjs.Bitmap(main.loadedData.getResult('htpScreen_off'));
        screen.name = 's'+a;
        screen.x = 406+(54*(a-1));
        screen.y = 503;
        screen.cursor='pointer';
        t.addChild(screen);

        screen.addEventListener('click',wlaczMnie);
        screen= new createjs.Bitmap(main.loadedData.getResult('htpScreen_on'));
        screen.name = 's'+nCurrent;
        screen.x = 406+(54*(nCurrent-1));
        screen.y = 503;
        screen.cursor='pointer';
        t.addChild(screen);
        screen.addEventListener('click',wlaczMnie);
        screen= new createjs.Bitmap(main.loadedData.getResult('htp'+nCurrent));
        screen.name = 'h'+nCurrent;
        screen.x = 189;
        screen.y = 106;
        t.addChild(screen);

    }

    function wlaczMnie(e){

        if(e.currentTarget.image.src.substr(e.currentTarget.image.src.length-5,1) =='f'){
            trace(e.currentTarget.name);
            dograj(nCurrent)
            nCurrent = e.currentTarget.name.substr(1,1);
            console.log(nCurrent)
        }
    }
    function onLeft(e){
        e.currentTarget.mouseEnabled =true;
        dograj(nCurrent);
        nCurrent--;
        if(nCurrent<1)nCurrent=4;

    }
    function onRight(e){
        e.currentTarget.mouseEnabled =true;
        dograj(nCurrent);
        nCurrent++;
        if(nCurrent>4)nCurrent=1;

    }


    function onStep1(e) {
        e.currentTarget.mouseEnabled = true;
        t.mode = 2;
        t.addChild(sureAppla);
    }
    pauseScreen.removeMe=function(){
        main.soundBtt.visible = false;
        clear(t);
    };
    function zamknij(){
        t.parent.getChildByName('pau').dispatchEvent('click');
        t.removeMe();
    }
    function clear(t)
    {
        while(t.getNumChildren())
        {
            if(typeof t.getChildAt(0).removeAllChildren=== 'function')
            {
                t.getChildAt(0).removeAllChildren();
            }
            if(t.getChildAt(0).htmlElement!=undefined)
            {
                //console.log(t.getChildAt(0).htmlElement);
                t.getChildAt(0).htmlElement.parentNode.removeChild(t.getChildAt(0).htmlElement);
            }
            t.removeChildAt(0);
        }
    }
    window.PauseScreen=PauseScreen;
}());
