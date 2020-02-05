
(function(){

    'use strict';
    var t;
    var maska,dym1,dym2,dym3,dym4,dym5,dym6;
    var bgd,bgd1,bgd2,bar,progress_bar,pre_container;
    var tt;
    var counter=1;
    var nX;
    var nY;

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
        bgd= new createjs.Bitmap('img/preloader_bgd.jpg');
        t.addChild(bgd)

        if (!createjs.Sound.initializeDefaultPlugins()) {return;}
        bgd1=new createjs.Bitmap('img/pre/p3.png');
        bgd1.x = 353;
        bgd1.y = 285;
        t.addChild(bgd1);

        bgd=new createjs.Bitmap('img/pre/p2.png');
        bgd.x = -37;
        bgd.y = 285;
        t.addChild(bgd);

        var maska=new createjs.Shape(new createjs.Graphics().beginFill('#fff').drawRect(0,0,339,46))
        maska.x = 353;
        maska.y = 285;

        bgd.mask=maska;
        bgd2=new createjs.Bitmap('img/pre/p1.png');
        bgd2.x = 353;
        bgd2.y = 285;
        t.addChild(bgd2);
        t.addChild(maska);
        maska.visible=false;


     


        step1Loading()

    };
    function step1Loading(){
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", handleFileLoad2);
        loader.addEventListener("complete", handleComplete2);
        loader.loadManifest(lib.properties.manifest);

    }
    function handleFileLoad2(evt) {

        if (evt.item.type == "image") { img[evt.item.id] = evt.result; }
    }
    function handleComplete2(evt) {
        var i;
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for(i=0; i<ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
        }

        startLoading();
    }
    function startLoading() {

        t.queue=new createjs.LoadQueue(false);



        t.queue.addEventListener('complete', onComplete);
        t.queue.addEventListener('progress', onProgress);
        t.queue.installPlugin(createjs.Sound);
        t.queue.loadManifest(t.manifest,true);

    }




    function onProgress(e)
    {
        bgd.x = -37+(340*e.loaded)
    }
    function onComplete(e)
    {
        bgd.visible= bgd2.visible=bgd1.visible=false;
        //t.anim.gotoAndPlay('playMe');
        setTimeout(disp,50);
    }
    function disp(){
       //
        clear();

    }

   
    function clear()
    {
        t.dispatchEvent('completed');
        clearInterval(tt);
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