
(function()
{
    'use strict';
    var t;

    var Temp=function()
    {
        t = this;
        this.initialize();

    };
    var p=Temp.prototype=new createjs.Container();
    p.initialize=function() {

        setTimeout(function(){
            t.dispatchEvent({param: Step5, type:'changePage',bubbles:true,cancelable:true});
        },100);
    };


   
    window.Temp=Temp;

}());
