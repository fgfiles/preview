
var ow=1920;
var oh=768;
var w,h,homeBtt,soundBtt,pageContainer,scaleS,legal;
(function(){
    'use strict';
    var actualPage;
    var t;
    var scaleS;
    var manifest;
    var logo;
    var helpAppla;
	
    var _main=function()
    {

    };

    _main.initialize=function() {


    };
    var Main=function()
    {
        
        this.initialize();
        t = this;

        this.nWidth;
        this.nHeight;
        this.context;
        this.scale;
        this.ow = 1920;
        this.oh = 768;

        this.nCurrentLevel=1;
        this.time ="00:00";
        this.best ="00:00";
        this.mili;

        this.isPanoramic=false;
        this.animationInterval;
        this.helpBtt;
        this.nCurrentLevel=0;
        t=this;
    };

    _main=Main.prototype=new c.Container();

    _main.init=function()
    {
        initStage();
        loadGFX();
    };
    _main.resize=function(){


        w = $('.home').width();
        h = $('.home').height();
        if((w/h)>1.75){
            main.isPanoramic=true;

        }else{
            main.isPanoramic=false;
        }

        if(stage.scaleX) {
            scaleS = h / oh;
            stage.scale = scaleS;
            stage.canvas.width = w;
            stage.canvas.height =oh * scaleS;

            this.nWidth = stage.canvas.width;
            this.nHeight = stage.canvas.height;

            if (pageContainer){

                pageContainer.x = -(1920 / 2) + ((w / scaleS) / 2);
                if((w/scaleS)<=1920) {
                    if(soundBtt)soundBtt.x = (w / scaleS) - 111;
                    if (legal)legal.x = w / scaleS - 164;
                }else{

                    if(legal)legal.x =(w / scaleS)/2+(ow/2) - 164;
                    if(soundBtt)soundBtt.x =(w / scaleS)/2+(ow/2) - 111;
                    if(homeBtt)homeBtt.x = pageContainer.x+ 50;

                }
            }
            stage.update();



        }

    };
    function onResize(){

        _main.resize();
    }
    function onOrientationChange(){
        _main.resize();

    }
    function initStage()
    {
        var canvas=document.getElementById('stage-canvas');
        _main.context=canvas.getContext('2d');
        _main.context.imageSmoothingEnabled = true;
        _main.context.imageSmoothingQuality = 'high';
        stage = new c.Stage(canvas);

        c.Ticker.timingMode=c.Ticker.RAF_SYNCHED;
        c.Ticker.framerate = 35;
        if (!c.Sound.initializeDefaultPlugins()) {return;}
        stage.enableMouseOver(30);
        c.Touch.enable(stage);
        c.Ticker.addEventListener('tick', stage);

        pageContainer=new c.Container();

        stage.addChildAt(pageContainer,0);


    }
    function addGlobalElements()
    {

        homeBtt = new  FrameBtt(main.loadedData.getResult('home'),main.loadedData.getResult('home_on'),'#ffed00');
        stage.addChild(homeBtt);
        homeBtt.addEventListener('click',onHome);
        homeBtt.x=50;
        homeBtt.y=20;
        homeBtt.stateClicked=true;


        soundBtt = new  OnOffBtt(main.loadedData.getResult('sound_on'),'',main.loadedData.getResult('sound_off'),'Arial');

        stage.addChild(soundBtt);
        soundBtt.cursor ='pointer';
        soundBtt.x =_main.nWidth;
        soundBtt.y=20;

        _main.resize();


    }




    _main.onHelp = function(){

        helpAppla = new HelpAppla();

        pageContainer.addChildAt(helpAppla,2);
        homeBtt.visible = false;
        soundBtt.visible  = false;
        helpAppla.addEventListener('closeHelp',onCloseHelp);

    };



    function onHome(){
        c.Sound.stop();
        actualPage.dispatchStep1();
        
    }
    function onCloseHelp(e){
        helpAppla.removeEventListener('closeHelp',onCloseHelp);
        stage.removeChild(helpAppla);
        helpAppla = null;
        soundBtt.visible =true;
        homeBtt.visible = true;
    }

    function loadGFX()
    {

         manifest=[

             {id:'bgd',src:'img/bgd_intro.png'},
             {id:'bgd_game_0',src:'img/bgd_game_0.png'},
             {id:'bgd_game_1',src:'img/bgd_game_1.png'},
             {id:'bgd_game_2',src:'img/bgd_game_2.png'},
             {id:'bgd_game_3',src:'img/bgd_game_3.png'},
             {id:'help_bgd',src:'img/bgd_htp.png'},
             {id:'bgd_game_over',src:'img/bgd_game_over.png'},
             {id:'bgd_select',src:'img/bgd_select.png'},
             {id:'logo_yabba_small',src:'img/logo_yabba_small.png'},
             {id:'go_label',src:'img/go_label.png'},
             {id:'sound_on',src:'img/sound_on.png'},


             {id:'sound_off',src:'img/sound_off.png'},

             {id:'select_on',src:'img/select_on.png'},
             {id:'select_off',src:'img/select_off.png'},
             {id:'gameover_p1',src:'img/gameover_p1.png'},
             {id:'logo_cn',src:'img/logo_cn.png'},
             {id:'logo_yabba',src:'img/logo_yabba.png'},
             {id:'ticker_bgd',src:'img/ticker_bgd.png'},
             {id:'_b0',src:'img/l0.png'},
             {id:'_b1',src:'img/l1.png'},
             {id:'_b2',src:'img/l2.png'},
             {id:'_b3',src:'img/l3.png'},
             {id:'_b0_1',src:'img/l0_1.png'},
             {id:'_b1_1',src:'img/l1_1.png'},
             {id:'_b2_1',src:'img/l2_1.png'},
             {id:'_b3_1',src:'img/l3_1.png'},



             {id:'timer_bgd',src:'img/timer_bgd.png'},
             {id:'next_btt',src:'img/next_btt.png'},
             {id:'home',src:'img/home.png'},
             {id:'next_btt_on',src:'img/next_btt_on.png'},
             {id:'home_on',src:'img/home.png'},
             {id:'play',src:'img/play.png'},
             {id:'play2',src:'img/play2.png'},
             {id:'play_off',src:'img/play_off.png'},
             {id:'play_on',src:'img/play_on.png'},
             {id:'postaci_intro',src:'img/postaci_intro.png'},

             {id:'close',src:'img/closeBtt.png'},
             {id:'close_on',src:'img/closeBtt_on.png'},
             {id:'closeHelp',src:'img/closeHelp.png'},
             {id:'closeHelp_on',src:'img/closeHelp_on.png'},
             {id:'cursor',src:'img/cursor.png'},
             {id:'3',src:'img/timer/3.png'},
             {id:'2',src:'img/timer/2.png'},
             {id:'1',src:'img/timer/1.png'},


            /*{id:'legal',src:'img/legal.png'},*/

             {id:'ok',src:'img/ok.png'},

             {id:'blank',src:'img/blank.png'},
             {id:'b0',src:'img/0.png'},
             {id:'b1',src:'img/1.png'},
             {id:'b2',src:'img/2.png'},
             {id:'b3',src:'img/3.png'},
             {id:'b4',src:'img/4.png'},
             {id:'b5',src:'img/5.png'},
             {id:'b6',src:'img/6.png'},
             {id:'b7',src:'img/7.png'},
             {id:'b8',src:'img/8.png'},
             {id:'b9',src:'img/9.png'}


        ];
        startLoading();
    }
    function startLoading(){
        var pre=new Preloader(manifest);
        pageContainer.addChild(pre);
        pre.addEventListener('completed',onLoaderComplete);
        _main.resize();


    }
    function onLoaderComplete(e){

        t.loadedData= e.target.queue;

        addGlobalElements();
        var step1=new Step1();
        changeScreen(step1);
        window.addEventListener('orientationchange',onOrientationChange);
        window.addEventListener('resize',onResize);
    }

    function changeScreen(e){
        if(_main.animationInterval)clearIntervalI(_main.animationInterval);
        if(actualPage)
        {
            actualPage.mouseEnabled = false;
            clear(actualPage);
        }
        actualPage=e;
        pageContainer.addChild(e);
        actualPage.addEventListener('changePage',onScreenChange);
        _main.resize();
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
            console.log('error: class doesnt exist');
        }
    }
    function clear(ttt)
    {
        actualPage.alpha=1;
        while(ttt.numChildren)
        {
            if(typeof ttt.getChildAt(0).removeAllChildren=== 'function')
            {
                ttt.getChildAt(0).removeAllChildren();
            }
            if(ttt.getChildAt(0).htmlElement!=undefined)
            {

                ttt.getChildAt(0).htmlElement.parentNode.removeChild(ttt.getChildAt(0).htmlElement);
            }
            ttt.removeChildAt(0);
        }
        ttt.parent.removeChild(t);
    }
    window.Main=Main;
}());

