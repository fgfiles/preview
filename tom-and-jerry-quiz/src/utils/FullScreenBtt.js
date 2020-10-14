
(function(){
    'use strict';
    var t;
    var state2=1;
    var oldW, oldH;
    var FullScreenBtt=function(_bgd,label,_bgdOver,colorOver,font,_target)
    {

        this.initialize(_bgd,label,_bgdOver,colorOver,font,_target);
    };
    var fullscreenbtt=FullScreenBtt.prototype=new createjs.Container();
    fullscreenbtt.Container_initialize=fullscreenbtt.initialize;
    fullscreenbtt.initialize=function(_bgd,label,_bgdOver,colorOver,font,_target)
    {


        console.log('adding fs');
        this.Container_initialize();
        t=this;
        t.clicktarget=null;
        this.mouseChildren=false;
        this.bgd=new createjs.Bitmap(_bgd);
        this.addChild(this.bgd);
        this.bgdOver=new createjs.Bitmap(_bgdOver);
        this.addChild(this.bgdOver);
        this.bgdOver.alpha=0;
        this.addEventListener('click', this.clickM);
    };

    fullscreenbtt.clickM=function()
     {

        if(main.fs==true){
            t.bgdOver.alpha=0;
            main.fs = false;
            document.webkitExitFullscreen();
            setTimeout(resetSize,1000);
        }else{
            oldW =$('#stageCanvas').width();
            oldH =$('#stageCanvas').height();
            var c = document.getElementById('content');
            c.webkitRequestFullscreen();
            //window.alert($('#stageCanvas').width()+":"+$('#stageCanvas').height());
            t.bgdOver.alpha=1;
            main.fs=true;
        }

         if(main.fs){


         }else{

         }





     };
    function resetSize(){

   //     $('.iframe-container').css('width','100%');
     //   $('.iframe-container').css('height','100%');
        stage.canvas.width = oldW;
        stage.canvas.height = oldH;

        resizeCanvas();
    }
    window.FullScreenBtt=FullScreenBtt;
}());
