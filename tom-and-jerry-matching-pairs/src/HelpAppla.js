
(function()
{
    'use strict';
    var t,back,img1,img2,ti,ramka_maski,bgd,boy;
    var cursor;
    var animC,c1,c2,c3,c4;
    var tim;
    var HelpAppla=function()
    {
        t = this;
        this.initialize();

    };
    var p=HelpAppla.prototype=new c.Container();
    p.initialize=function() {
        console.log('help appla');

        
        bgd = new c.Bitmap(main.loadedData.getResult('help_bgd'));
        t.addChild(bgd);
        bgd.x = 9;
        bgd.y = 11;


        var closeBtt2= new FrameBtt(main.loadedData.getResult('closeHelp'),main.loadedData.getResult('closeHelp_on'),'');
        t.addChild(closeBtt2);
        closeBtt2.x = 932;
        closeBtt2.y = 11;

        closeBtt2.addEventListener('click',onCloseMe);

        var t1 = new c.Text(strings.pages.intro.htp.text, strings.pages.intro.htp.font, '#000');
        t1.lineWidth = 1024;
        t1.lineHeight = 66;
        t1.textAlign='center';
        t1.textBaseline = "alphabetic";
        t.addChild(t1);
        t1.x = 512;
        t1.y = 74;
        var closeBtt= new FrameBtt(main.loadedData.getResult('close'),main.loadedData.getResult('close_on'),'');
        t.addChild(closeBtt);
        closeBtt.x = 449;
        closeBtt.y = 606;
        t.mouseChildren = false;
        t.cursor = 'pointer'
        t.addEventListener('click',onCloseMe);


        animC = new c.Container();
        t.addChild(animC);

        cursor = new c.Bitmap(main.loadedData.getResult('cursor'));
        cursor.x = 88;
        cursor.y= 493;
        t.addChild(cursor);
        rozlorz();

    };

    function rozlorz(){
        c1=  new c.Bitmap(main.loadedData.getResult('blank'));
        animC.addChild(c1);
        c1.x  = 187;
        c1.y = 421;


        c2=  new c.Bitmap(main.loadedData.getResult('blank'));
        animC.addChild(c2);
        c2.x  = 352;
        c2.y = 421;

        c3=  new c.Bitmap(main.loadedData.getResult('blank'));
        animC.addChild(c3);
        c3.x  = 518;
        c3.y = 421;

        c4=  new c.Bitmap(main.loadedData.getResult('blank'));
        animC.addChild(c4);
        c4.x  = 682;
        c4.y = 421;

        c1.scaleX = c1.scaleY=c2.scaleX = c2.scaleY=c3.scaleX = c3.scaleY=c4.scaleX = c4.scaleY=0.79;
        startMe();
    }

    function startMe(){
        console.log('startMe');
        TweenLite.to(cursor,1,{x:691,y:499,onComplete:step2})
    }

    function step2(){
        console.log('step2');
        TweenLite.to(cursor,.1,{scaleX:0.95,scaleY:0.95});
        setTimeout(function(){
            animC.removeChild(c4);
            c4 = null;
            c4=  new c.Bitmap(main.loadedData.getResult('b0'));
            c4.scaleX = c4.scaleY=0.79;
            animC.addChild(c4);
            c4.x  = 682;
            c4.y = 421;
            TweenLite.from(c4,.5,{alpha:0});
        },100);
        TweenLite.to(cursor,.1,{delay:.15, scaleX:1,scaleY:1});
        TweenLite.to(cursor,1,{delay:1,x:300,y:499,onComplete:step3})
    }
    function step3(){
        console.log('step3');
        TweenLite.to(cursor,.1,{scaleX:0.95,scaleY:0.95});
        setTimeout(function(){
            animC.removeChild(c1);
            c1 = null;
            c1=  new c.Bitmap(main.loadedData.getResult('b0'));
            animC.addChild(c1);
            c1.scaleX = c1.scaleY=0.79;
            c1.x  = 187;
            c1.y = 421;
            TweenLite.from(c1,.5,{alpha:0});
        },100);

        TweenLite.to(cursor,.1,{delay:.15, scaleX:1,scaleY:1});
        TweenLite.to(cursor,1,{delay:1,x:88,y:493,onComplete:step4})
    }

    function step4(){
        console.log('step4');
        animC.removeChild(c1);
        c1 = null;
        c1=  new c.Bitmap(main.loadedData.getResult('blank'));
        c1.scaleX = c1.scaleY=0.79;
        animC.addChild(c1);
        c1.x  = 187;
        c1.y = 421;
        TweenLite.from(c1,.5,{alpha:0});
        animC.removeChild(c4);
        c4 = null;
        c4=  new c.Bitmap(main.loadedData.getResult('blank'));
        c4.scaleX = c4.scaleY=0.79;
        animC.addChild(c4);
        c4.x  = 682;
        c4.y = 421;
        TweenLite.from(c4,.5,{alpha:0});
        tim =setTimeout(startMe,1000)
    }
    function onCloseMe(){
        t.mouseEnabled=false;
        t.mouseChildren = false;    
        console.log('closeMe');
        clearTimeout(tim);
        TweenMax.killAll();
        t.dispatchEvent({type:'closeHelp',bubbles:true,cancelable:true});
    }

    window.HelpAppla=HelpAppla;

}());
