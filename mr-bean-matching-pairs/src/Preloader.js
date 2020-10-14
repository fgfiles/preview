var pasek;
(function(){

    'use strict';
    var t;
    var bgd,cartoonito,maska;

    var Preloader=function(_manifest){

        this.manifest=_manifest;
        this.initialize();
    };
    var p = Preloader.prototype = new c.Container();

    p.initialize=function()
    {
        t=this;
        t.children=null;
        t.children=[];
        if (!c.Sound.initializeDefaultPlugins()) {return;}
		
		
		      var sounds = [
			  {id:'empty', src:'sounds/empty.mp3'},
            {id:'click', src:'sounds/memory_click.mp3'},
            {id:'fail2', src:'sounds/fail2.mp3'},
            {id:'fail1', src:'sounds/fail1.mp3'},
            
            {id:'success1', src:'sounds/success1.mp3'},
            {id:'success2', src:'sounds/success2.mp3'},

            {id:'throw', src:'sounds/memory_rollover.mp3'},
            {id:'start', src:'sounds/start.mp3'},
            
            

            {id:'tap', src:'sounds/memory_tap.mp3'},
            {id:'tap2', src:'sounds/memory_tap2.mp3'},
            {id:'reveal', src:'sounds/memory_reveal.mp3'},
            {id:'shuffle', src:'sounds/memory_shuffle.mp3'}

        ];




        var bb = new c.Bitmap(('img/pre_bgd.jpg'));
        t.addChild(bb);
        var gfx =  new c.Bitmap('img/pre_gfx.png');
        t.addChild(gfx)
        gfx.x = 756;
        gfx.y = 141;


        pasek = new c.Shape(new c.Graphics().f('#eb008b').drawRect(0,0,263,22))
        maska = new c.Shape(new c.Graphics().f('#704A8C').drawRoundRectComplex(829,495  ,263,22,11,11,11,11));

        pasek.x =829;
        pasek.y =495;
        t.addChild(maska);
        t.addChild(pasek);
        pasek.scaleX = 0;

        maska.visible = false;
        pasek.mask = maska;

        c.Sound.registerSounds(sounds);

        t.queue=new c.LoadQueue(false);
        t.queue.addEventListener('complete', onComplete);
        t.queue.addEventListener('progress', onProgress);
        t.queue.installPlugin(c.Sound);

        t.queue.loadManifest(t.manifest,true);


    }

    function onProgress(e)
    {

        pasek.scaleX = e.loaded;

    }
    function onComplete(e)
    {
        // TweenLite.to(t,1,{alpha:0});

          setTimeout(disp,100);
    }
    function disp(){
        clear();
    }

    function clear()
    {
        t.dispatchEvent('completed');

        while(t.numChildren)
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