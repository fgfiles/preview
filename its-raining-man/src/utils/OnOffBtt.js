
(function(){
    'use strict';
    var t;
    var state=1;
    var OnOffBtt=function(_bgd,_bgdOver)
    {

        this.initialize(_bgd,_bgdOver);
    };
    var onoffbtt=OnOffBtt.prototype=new createjs.Container();
    onoffbtt.Container_initialize=onoffbtt.initialize;
    onoffbtt.initialize=function(_bgd,_bgdOver)
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
        this.addEventListener('click', click);
    };

    function click(e)
     {
         var music;
        state++;
         if(state>1){
             state=0;
           // music  = document.getElementById('music');
             //music.pause();
         }else{
              //music = document.getElementById('music');
             //music.play();
         }
         t.bgdOver.alpha=!state;
         main.sound=state;


     }
    window.OnOffBtt=OnOffBtt;
}());
