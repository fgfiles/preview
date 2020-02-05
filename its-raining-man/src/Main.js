
var stage;
var isDebugging=true;
(function(){
    'use strict';
    var actualPage;
    var t;
    var scaleS;

    var manifest;

    
    var _main=function()
    {

    };

    _main.initialize=function() {


    };
    var Main=function()
    {
        
        this.initialize();
        t = this;
        this.mode =1;
        this.pageContainer;
        this.globalContainer;
        this.nWidth;
        this.nHeight;
        this.points = 200;
        this.best1 =500;
        this.best2=700;
        this.sound=true;
        this.isMobile;
        this.context;
        this.scale;
        this.soundBtt;
        this.time;
        this.mili;
        this.ow;
        this.oh;
        t=this;
    };

    _main=Main.prototype=new createjs.Container();

    _main.init=function()
    {
        var browserTest=new BrowserTest();

        t.isMobile = detectmob();

        initStage();
        loadGFX();
    };
       _main.resize=function(){

        this.ow = 1024;
        this.oh = 574;
        var w = Math.min($('.iframe-container').width(),1024);
        var h = Math.min($('.iframe-container').height(),574);

        if(stage.scaleX){
            scaleS = Math.min(w / this.ow, h / this.oh);
            stage.scaleX = scaleS;
            stage.scaleY = scaleS;
            stage.canvas.width = this.ow * scaleS;
            stage.canvas.height = this.oh * scaleS;
            this.nWidth=stage.canvas.width;
            this.nHeight=stage.canvas.height;
            t.scale= scaleS;
        stage.update();
        }
    };

    function initStage()
    {

        var canvas=document.getElementById('stageCanvas');
        _main.context=canvas.getContext('2d');
        stage = new createjs.Stage(canvas);
        createjs.Ticker.setFPS(30);
        createjs.Ticker.timingMode=createjs.Ticker.RAF_SYNCHED;

        if (!createjs.Sound.initializeDefaultPlugins()) {return;}

        if(t.isMobile){
            stage.enableMouseOver(0);
        }else{
            stage.enableMouseOver(30);
        }
        
        createjs.Touch.enable(stage);
        createjs.Ticker.addEventListener('tick', stage);

        _main.pageContainer=new createjs.Container();
        stage.addChild(t.pageContainer);
        _main.globalContainer=new createjs.Container();
        stage.addChild(t.globalContainer);
        _main.resize();
        setTimeout(_main.resize,1500);


    }
    function addGlobalElements()
    {

        t.soundBtt = new  OnOffBtt('img/sound_on.png','img/sound_off.png');
        t.addChild(t.soundBtt);
        t.soundBtt.cursor ='pointer';
        t.soundBtt.x=949;
        if(detectmob()){
            t.soundBtt.x = 929;
            t.soundBtt.y = 20;
        }

        stage.addChild(t.soundBtt);


    }

    function centerLoginBox() {
        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf('android') > -1;
        if (isAndroid) {

            if (window.orientation == 0 || window.orientation == 180) { //Landscape Mode
                return false;

            }
            else if (window.orientation == 90 || window.orientation == -90) { //Portrait Mode
                return true;
            }
        }
        else {
            if (window.orientation == 90 || window.orientation == -90) { //Landscape Mode
                return true;
            }
            else if (window.orientation == 0 || window.orientation == 180) { //Portrait Mode
                return false;
            }
        }
    }

    function loadGFX()
    {

         manifest=[
             {id:'left_on',src:'img/left_on.png'},
             {id:'anim',src:'img/allAnimations.png'},
             {id:'left_off',src:'img/left_off.png'},
             {id:'right_off',src:'img/right_off.png'},
             {id:'right_on',src:'img/right_on.png'},

            {id:'sound_on',src:'img/sound_on.png'},
            {id:'sound_off',src:'img/sound_off.png'},
            {id:'pause_on',src:'img/pause_on.png'},
            {id:'pause_off',src:'img/pause_off.png'},
            {id:'nextBtt',src:'img/nextBtt.png'},
            {id:'nextBtt_on',src:'img/nextBtt_on.png'},
            {id:'btt_again',src:'img/btt_again.png'},
            {id:'btt_again_on',src:'img/btt_again_on.png'},
            {id:'nextBtt_on',src:'img/nextBtt_on.png'},
            {id:'skipBtt',src:'img/skipBtt.png'},
            {id:'skipBtt_on',src:'img/skipBtt_on.png'},
            {id:'rec',src:'img/rec.png'},
            {id:'battery',src:'img/battery.png'},
             {id:'tl',src:'img/tl.png'},
             {id:'tr',src:'img/tr.png'},
             {id:'br',src:'img/br.png'},
             {id:'bl',src:'img/bl.png'},
             {id:'logo1',src:'img/logo1.png'},
             {id:'logo2',src:'img/logo2.png'},
             {id:'plask2',src:'img/plask2.png'},
             {id:'plask1',src:'img/plask.png'},
             {id:'doublepoints',src:'img/doublepoints.png'},
             /*{id:'immortality',src:'img/immortality.png'},*/
             {id:'multiplayer',src:'img/multiplayer.png'},
             {id:'extralife',src:'img/extralife.png'},
             {id:'noobstacles',src:'img/noobstacles.png'},
             {id:'white',src:'img/white.png'},


            {id:'start_bgd',src:'img/start_bgd.png'},
            {id:'gameover_bgd',src:'img/gameover_bgd.png'},
            {id:'game_bgd',src:'img/game_bgd.png'},
            {id:'hud',src:'img/hud_bgd.png'},
            {id:'flint_small',src:'img/flint_small.png'},
            {id:'clouds_intro',src:'img/clouds_intro.png'},
            {id:'clouds2',src:'img/cloud2.png'},
            {id:'wieloryb',src:'img/wieloryb.png'},
            {id:'sam',src:'img/sam.png'},
            {id:'straw',src:'img/straw.png'},
            {id:'flint',src:'img/flint.png'},
            {id:'leftarm',src:'img/leftarm.png'},
            {id:'rightarm',src:'img/rightarm.png'},
            {id:'flintBig',src:'img/flint_big.png'},
            {id:'c1_off',src:'img/choice1_off.png'},
            {id:'c1_on',src:'img/choice1_on.png'},
             {id:'c2_off',src:'img/choice1_off.png'},
             {id:'c2_on',src:'img/choice1_on.png'},
             {id:'eyes',src:'img/eyes1.png'},
             {id:'a1',src:'img/bonus1.png'},
             {id:'a2',src:'img/bonus2.png'},
             {id:'a3',src:'img/bonus3.png'},
             {id:'a4',src:'img/bonus4.png'},
             {id:'g1',src:'img/good1.png'},
             {id:'g2',src:'img/good1.png'},
             {id:'g3',src:'img/good3.png'},
             {id:'g4',src:'img/good4.png'},
             {id:'b1',src:'img/bad1.png'},
             {id:'b2',src:'img/bad2.png'},
             {id:'b3',src:'img/bad3.png'},
             {id:'b4',src:'img/bad4.png'},
             {id:'b5',src:'img/bad5.png'},
             {id:'b6',src:'img/bad6.png'},
             {id:'b7',src:'img/bad7.png'},
             {id:'b8',src:'img/bad8.png'},
             {id:'b9',src:'img/bad9.png'},
             {id:'b10',src:'img/bad10.png'},
             {id:'b11',src:'img/bad11.png'},
             
             {id:'hero1',src:'img/hero.png'},
             {id:'hero2',src:'img/hero2.png'},
             {id:'hit',src:'img/heroHit.png'},

            {id:'steve',src:'img/steve.png'},
            {id:'tv1_1',src:'img/tv1_1.png'},
            {id:'tv1_2',src:'img/tv1_2.png'},
            {id:'tv2_1',src:'img/tv2_1.png'},
            {id:'tv2_2',src:'img/tv2_2.png'},
            {id:'intro1',src:'img/intro1.png'},
            {id:'intro2',src:'img/intro2.png'},
            {id:'intro3',src:'img/intro3.png'},
            {id:'intro4',src:'img/intro4.png'},
            {id:'intro5',src:'img/intro5.png'},
            {id:'intro6',src:'img/intro6.png'},
            {id:'intro7',src:'img/intro7.png'},
            {id:'intro8',src:'img/intro8.png'},
             {id:'choose_debris1',src:'img/choose_debris1.png'},
             {id:'choose_debris2',src:'img/choose_debris2.png'},
             {id:'choose_debris3',src:'img/choose_debris3.png'},
             {id:'choose_debris4',src:'img/choose_debris4.png'},
             {id:'choose_debris5',src:'img/choose_debris5.png'},
             {id:'choose_debris6',src:'img/choose_debris6.png'},
             {id:'3',src:'img/3.png'},
             {id:'2',src:'img/2.png'},
             {id:'1',src:'img/1.png'},
             {id:'go',src:'img/go.png'},
            {id:'start_debris1',src:'img/start_debris1.png'},
            {id:'start_debris2',src:'img/start_debris2.png'},
            {id:'start_debris3',src:'img/start_debris3.png'},
            {id:'start_debris4',src:'img/start_debris4.png'},
            {id:'start_debris5',src:'img/start_debris5.png'},
            {id:'start_debris6',src:'img/start_debris6.png'},
            {id:'start_debris7',src:'img/start_debris7.png'},
            {id:'pause_bgd',src:'img/pause_bgd.jpg'},
            {id:'home_off',src:'img/home_off.png'},
            {id:'home_on',src:'img/home_on.png'},
            {id:'htp1',src:'img/htp1.jpg'},
            {id:'htp2',src:'img/htp2.jpg'},
            {id:'htp3',src:'img/htp3.jpg'},
            {id:'htp4',src:'img/htp4.jpg'},
            {id:'htp_left_off',src:'img/htp_left_off.png'},
            {id:'htp_left_on',src:'img/htp_left_on.png'},
            {id:'htp_right_off',src:'img/htp_right_off.png'},
            {id:'htp_right_on',src:'img/htp_right_on.png'},
            {id:'htp_restart_on',src:'img/htp_restart_on.png'},
            {id:'htp_restart_off',src:'img/htp_restart_off.png'},
            {id:'htp_next_off',src:'img/htp_next_off.png'},
            {id:'htp_next_on',src:'img/htp_next_on.png'},
            {id:'htpScreen_on',src:'img/htpScreen_on.png'},
            {id:'htpScreen_off',src:'img/htpScreen_off.png'},
            {id:'bbb',src:'img/blinkin_atlas_.png'},
            {id:'tak_off',src:'img/tak_off.png'},
            {id:'tak_on',src:'img/tak_on.png'},
             {id:'nie_off',src:'img/nie_off.png'},
             {id:'nie_on',src:'img/nie_on.png'},
             {id:'malpa',src:'img/malpa.png'},

            //SOUNDS
             {id:'tv_slam',src:'sounds/tv_slam.mp3'},
             {id:'tv_slam2',src:'sounds/tv_slam2.mp3'},
             {id:'bad1',src:'sounds/bad1.mp3'},
             {id:'bad2',src:'sounds/bad2.mp3'},
             {id:'bad3',src:'sounds/bad3.mp3'},
             {id:'bad4',src:'sounds/bad4.mp3'},
             {id:'bonus1',src:'sounds/bonus_nice2.mp3'},
             {id:'bonus2',src:'sounds/bonus_nice2.mp3'},
             {id:'bonus3',src:'sounds/bonus_nice2.mp3'},
             {id:'bonus4',src:'sounds/bonus_nice2.mp3'},

             {id:'highlight1',src:'sounds/button_highlight2.mp3'},
             {id:'highlight2',src:'sounds/button_highlight3.mp3'},
             {id:'press1',src:'sounds/button_press1.mp3'},
             {id:'press2',src:'sounds/button_press2.mp3'},
             {id:'footsteps',src:'sounds/footsteps.mp3'},
             {id:'gameover',src:'sounds/game_over2.mp3'},
             {id:'good1',src:'sounds/good1.mp3'},
             {id:'good2',src:'sounds/good1.mp3'},
             {id:'good3',src:'sounds/good3.mp3'},
             {id:'good4',src:'sounds/good4.mp3'},
             {id:'intro',src:'sounds/intro.mp3'}
             
        ];
        startLoading();
    }

    function startLoading(){
      
        var pre=new Preloader(manifest);
        stage.addChild(pre);
        pre.addEventListener('completed',onLoaderComplete);

        addGlobalElements();

    }
    function onLoaderComplete(e)
    {
        t.success = false;
        t.loadedData= e.target.queue;
//        var music = document.getElementById("music");
     //  music.play();


        var step1=new Step1();
        changeScreen(step1);

    }

    function changeScreen(e){
        if(actualPage)
        {
           actualPage.mouseEnabled = false;
           flyOut(actualPage);
        }
          actualPage=e;
          t.pageContainer.addChildAt(e,0);
          actualPage.addEventListener('changePage',onScreenChange);
          flyIn(actualPage);
    }
    function flyOut(page)
    {
        setTimeout(clear,10,page);
    }
    function flyIn(page)
    {
        actualPage.alpha = 1;
    }
    function  onScreenChange(e)
    {
        e.preventDefault=true;
        
        var page= new e.param();

        if(typeof page == 'object')
        {
            changeScreen(page);
        }
        else
        {
            trace('error: class doesnt exist');
        }
    }
    function clear(t)
    {
        actualPage.alpha=1;
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
        t.parent.removeChild(t);
    }
    window.Main=Main;
}());


function playSounds(s){
    'use strict';
    if(main.sound==true){
        createjs.Sound.play(s);
    }
}