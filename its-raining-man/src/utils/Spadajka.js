
(function(){
    'use strict';
    var t;
    var Spadajka=function(_bgd,speed)
    {

        this.initialize(_bgd,speed);
    };
    var spadajka=Spadajka.prototype=new createjs.Container();
    spadajka.Container_initialize=spadajka.initialize;
    spadajka.initialize=function(_bgd,speed)
    {

        this.Container_initialize();
        t=this;
        this.speed = speed;
        this.bgd=new createjs.Bitmap(_bgd);
        this.addChild(this.bgd);
        this.cache(0,0,this.bgd.image.width,this.bgd.image.height);

    };

    window.Spadajka=Spadajka;
}());
