
(function(){
    'use strict';
    var t;
    var FrameBtt=function(_bgd,label,_bgdOver,colorOver,data,_target)
    {

        this.initialize(_bgd,label,_bgdOver,colorOver,data,_target);
    };
    var frameBtt=FrameBtt.prototype=new createjs.Container();
    frameBtt.Container_initialize=frameBtt.initialize;
    frameBtt.initialize=function(_bgd,_bgdOver,colorOver,data,_target)
    {

        this.Container_initialize();
        t=this;
        t.clicktarget=null;
        this.mouseChildren=false;
        this.bgd=new createjs.Bitmap(_bgd);
        this.addChild(this.bgd);
        this.bgdOver=new createjs.Bitmap(_bgdOver);
        this.addChild(this.bgdOver);
        this.bgdOver.alpha=0;
        this.stateClicked = false;

        this.colorOver= typeof colorOver !== 'undefined' ? colorOver : '#ffffff';
        this.font= typeof data.font !== 'undefined' ? data.font : 'bold 17px EurostileLTPro-Bold-Oblique';
        this.txt = new createjs.Text(data.text, data.font,'#ffffff');
        this.txt.textBaseline = "alphabetic";
        this.txt.textAlign='center';


        this.txt.x = this.bgd.image.width/2+10+data.x;

        if(this.txt.font!=undefined){
        var l = this.txt.font;

        l =l.substr(0,l.indexOf('px'));

        this.txt.lineWidth = this.bgd.image.width;
        this.txt.lineHeight = this.bgd.image.height;
        this.txt.y =data.y+this.bgd.image.height-(l/3.5);
        }

        if(_bgd.src.indexOf('img/level_on.png')!=-1){

            this.txt.y = this.bgd.image.height/2-30+data.y;
            this.txt.x = this.bgd.image.width/2+20+data.x;
        }


        this.addChild(this.txt);

        this.addEventListener('mouseover',over);
        this.addEventListener('mouseout', out);
        this.addEventListener('click', click);

     //   this.cache(0,0,this.bgd.image.width,this.bgd.image.height);
        if(_target)
        {
            t.clicktarget=_target ;
        }
        else
        {
            t.clicktarget=null;
        }
    };
     function over(e)
     {
         TweenLite.to(e.currentTarget.bgdOver,0.3,{alpha:1,ease: Sine.easeOut});

         e.currentTarget.cursor = 'pointer';
     }

    function out(e)
    {
        TweenLite.to(e.currentTarget.bgdOver,0.3,{alpha:0,ease: Sine.easeOut});
    }
    function click(e)
     {
         console.log('click');
         e.currentTarget.removeEventListener('click', click);
        

         if(e.currentTarget.stateClicked){
             TweenLite.to(e.currentTarget.bgdOver,0.3,{alpha:1,ease: Sine.easeOut});
             e.currentTarget.removeEventListener('mouseover',over);
             e.currentTarget.removeEventListener('mouseout', out);
         }
         if(main.sound){
             createjs.Sound.play('click');
         }

         createjs.EventDispatcher.initialize(FrameBtt.prototype);
         if(e.target.clicktarget)
         {
             e.target.dispatchEvent({param: e.target.clicktarget, type:'changePage',bubbles:true,cancelable:true});
         }
         else
         {
             //e.target.parent.dispatchEvent({type:'customclick'});
         }
     }
    window.FrameBtt=FrameBtt;
}());
