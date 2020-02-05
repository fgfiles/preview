
(function()
{
    'use strict';
    var t;
    var bgd;
    var sh,tl,tr,bl,br,rec,battery,black;
    var nCurrent;
    var Step2=function()
    {
        t = this;
        this.initialize();

    };
    var p=Step2.prototype=new createjs.Container();
    p.initialize=function() {
        nCurrent=1;
        bgd=new createjs.Bitmap(main.loadedData.getResult('intro'+nCurrent));
        t.addChild(bgd);
        black = new createjs.Shape(new createjs.Graphics().beginFill('#000').drawRect(-512, -287, 1024, 574).endFill());
        t.addChild(black);
        black.x =  512;
        black.y =  287;


        sh = new createjs.Shape(new createjs.Graphics().beginFill('#00ff00').drawRect(-512, -287, 1024, 574).endFill());
        t.addChild(sh);
        sh.x =  512;
        sh.y =  287;
        sh.scaleX = 0.0575;
        sh.scaleY = 0.1;
        //TweenLite.to(sh,0.5,{scaleX:0.0575,scaleY:0.1,ease:Strong.easeIn,onComplete:secondAnim});

         tl=new createjs.Bitmap(main.loadedData.getResult('tl'));
        t.addChild(tl);
        tl.x =484;
        tl.y =259;
         tr=new createjs.Bitmap(main.loadedData.getResult('tr'));
        t.addChild(tr);
        tr.x =484;
        tr.y =259;
         br=new createjs.Bitmap(main.loadedData.getResult('br'));
        t.addChild(br);
        br.x =484;
        br.y =259;

         bl=new createjs.Bitmap(main.loadedData.getResult('bl'));
        t.addChild(bl);
        bl.x =484;
        bl.y =259;

        var skip = new FrameBtt(main.loadedData.getResult('skipBtt'),strings.pages.intro.skip.text,main.loadedData.getResult('skipBtt_on'),'#ffffff',strings.pages.intro.skip);
        t.addChild(skip);
        skip.x = 428;
        skip.y= 510;
        skip.addEventListener('click',onSkip);
        secondAnim();
    };
    function onSkip(e){
        t.removeChild(e.currentTarget);
        TweenMax.killAll();
        nCurrent=8;
        hide();
    }
    function secondAnim(){
        rec=new createjs.Bitmap(main.loadedData.getResult('rec'));
        rec.x = 828;
        rec.y = 27;
        t.addChild(rec);
        battery=new createjs.Bitmap(main.loadedData.getResult('battery'));
        battery.x = 143;
        battery.y = 504;
        t.addChild(battery);
        sh.graphics.clear();
        TweenLite.to(tl,1,{delay:0.5,x:109,y:19,ease:Strong.easeOut});
        TweenLite.to(tr,1,{delay:0.5,x:859,y:19,ease:Strong.easeOut});
        TweenLite.to(bl,1,{delay:0.5,x:109,y:498,ease:Strong.easeOut});
        TweenLite.to(br,1,{delay:0.5,x:859,y:498,ease:Strong.easeOut});
        zgas();
        show();
    }
    function zgas(){
        TweenLite.to(rec,1,{alpha:0.7,onComplete:zapal});
        TweenLite.to(battery,1,{alpha:0.7});
    }
    function zapal(){
        TweenLite.to(rec,1,{alpha:1,onComplete:zgas});
        TweenLite.to(battery,1,{alpha:1});
    }


    function show(){
        TweenLite.to(black,.5,{alpha:0,onComplete:czekaj});
    }

    function czekaj(){
        setTimeout(hide,2000);
    }
    function hide(){
        TweenLite.to(black,.5,{alpha:1,onComplete:zmien});
    }
    function zmien(){
        nCurrent++;
        if(nCurrent==9){
            TweenMax.killAll();
            TweenLite.to(tl,1,{alpha:0});
            TweenLite.to(tr,1,{alpha:0});
            TweenLite.to(bl,1,{alpha:0});
            TweenLite.to(br,1,{alpha:0});
            TweenLite.to(rec,1,{alpha:0});
            TweenLite.to(battery,1,{alpha:0,onComplete:disp});
        }else{
            t.removeChild(bgd);
            bgd=new createjs.Bitmap(main.loadedData.getResult('intro'+nCurrent));
            t.addChildAt(bgd,0);
            show();
        }

    }

    function disp(){
        
        t.dispatchEvent({param: Step3, type:'changePage',bubbles:true,cancelable:true});
    }
   

    window.Step2=Step2;

}());
