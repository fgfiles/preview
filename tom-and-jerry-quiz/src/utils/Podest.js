
(function(){
    'use strict';
    var t,offset;



    var Podest=function(n)
    {

        this.initialize(n);
    };
    var podest=Podest.prototype=new createjs.Container();
    podest.Container_initialize=podest.initialize;
    podest.initialize=function(n)
    {

        this.Container_initialize();
        t=this;
        t.clicktarget=null;
        this.mouseChildren=false;
        this.n = n;

        this.bgd=new createjs.Bitmap(main.loadedData.getResult('podest'));
        this.addChild(this.bgd);
        this.bgd.y=68;
        this.bgd2=new createjs.Bitmap(main.loadedData.getResult('podest'));
        this.addChild(this.bgd2);
        this.bgd2.y=59;


        this.dol=new createjs.Bitmap(main.loadedData.getResult('dol'));
        this.addChild(this.dol);
        this.dol.y=120;

        var u = main.nCurrentLevel-1;
        var select=(u*4)+n;

        this.image = new createjs.Bitmap(main.loadedData.getResult('b'+select));

        this.image.regX = this.image.image.width/2;
        this.image.regY = this.image.image.height;
        this.image.x = 84;
        this.image.y = 115;
        this.addChild(this.image);


        this.label = new createjs.Container();


        this.label.y = 120;


        this.b = new createjs.Bitmap(main.loadedData.getResult('label_yell'));
        this.label.addChild(this.b);
        this.b.alpha=0;
        this.c = new createjs.Bitmap(main.loadedData.getResult('label_viol'));
        this.label.addChild(this.c);
        var obj = strings.pages.game['question'+main.nCurrentLevel];

        var tt = obj['a'+n];



        this.txt = new createjs.Text(tt.text, tt.font,'#FAF13F')
        this.txt.textBaseline = "alphabetic";
        offset =  this.txt.font;
        offset = parseInt(offset.substr(0, offset.indexOf('px')));;
        this.txt.textAlign='center';
        this.txt.x=84+tt.x;
        this.txt.y=5+tt.y+offset;
        this.txt.lineWidth =167;
        this.label.addChild(this.txt);

        if(tt.text==''){
            TweenLite.to(this.bgd2,1,{delay:2,y:0,ease:Elastic.easeOut});
            TweenLite.to(this.image,1,{delay:2,y:70,ease:Elastic.easeOut});
            if(main.sound){
                createjs.Sound.play('success');
            }
        }else{
            this.addChild(this.label);
        }


    };

    podest.clickMe=function(){

        this.bind('click');
    };
    podest.wylacz = function(){
        this.cursor='default';
        this.removeEventListener('click', click);
        console.log('wylaczam')
    };
    podest.wlacz = function(){
        console.log('wlaczam');
        this.cursor='pointer';
        this.addEventListener('click', click);
        this.addEventListener('mouseover', mouseOver);
        this.addEventListener('mouseout', mouseOut);
    };

    function mouseOver(e){
        e.currentTarget.txt.color = '#8B2B81';
        TweenLite.to(e.currentTarget.c,.5,{alpha:0});
        TweenLite.to(e.currentTarget.b,.5,{alpha:1});
        TweenLite.to(e.currentTarget.image,.5,{scaleX:1.1,scaleY:1.1,ease:Bounce.easeOut});


    }
    function mouseOut(e){
        e.currentTarget.txt.color = '#FAF13F';
        TweenLite.to(e.currentTarget.c,.5,{alpha:1});
        TweenLite.to(e.currentTarget.b,.5,{alpha:0});
        TweenLite.to(e.currentTarget.image,.5,{scaleX:1,scaleY:1,ease:Bounce.easeOut});

    }
     function click(e)
     {
         e.currentTarget.txt.color = '#8B2B81';
         e.currentTarget.c.alpha= 0;
         e.currentTarget.b.alpha= 1;
         TweenLite.to(e.currentTarget.image,.5,{scaleX:1.1,scaleY:1.1,ease:Bounce.easeOut});
         e.currentTarget.removeEventListener('click', click);
         e.currentTarget.removeEventListener('mouseover', mouseOver);
         e.currentTarget.removeEventListener('mouseout', mouseOut);
         if(main.sound){
             var zz = Math.floor(Math.random()*7);
             createjs.Sound.play('s'+zz);
         }
         createjs.EventDispatcher.initialize(Podest.prototype);
         e.target.dispatchEvent({type:'customclick',param:e.currentTarget.n});
         TweenLite.to(e.currentTarget.bgd2,1,{y:0,ease:Elastic.easeOut});
         TweenLite.to(e.currentTarget.image,1,{y:79,scaleX:1.1,scaleY:1.1,ease:Elastic.easeOut});
         TweenLite.to(e.currentTarget.label,1,{y:74,ease:Elastic.easeOut});
     }
    window.Podest=Podest;
}());
