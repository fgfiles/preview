
(function()
{
    'use strict';
    var t,btt2,btt1,im,b,offset;
    var odpowiedz1,odpowiedz2,odpowiedz3,odpowiedz4;
    var Step1=function()
    {

        this.bgd;
        this.circ;
        this.logo;
        this.heroes;
        this.cc;
        this.up;
        this.down;
        this.btn;
        this.maska;
        this.bg;
        this.pos = [17,279,497,668];
        t = this;
        this.initialize();

    };
    var p=Step1.prototype=new createjs.Container();
    p.initialize=function() {


        main.answers = [];



        var kalka=new createjs.Bitmap(main.loadedData.getResult('intro'));
        t.addChild(kalka);


        var logo_game=new createjs.Bitmap(main.loadedData.getResult('logo_game'));
        logo_game.x = 132;
        logo_game.y = -136;

        t.addChild(logo_game);
        TweenLite.to(logo_game,1,{delay:1.8,y:85});

        btt1 = new  FrameBtt(main.loadedData.getResult('btt_big'),main.loadedData.getResult('btt_big_on'),'#ffffff',strings.pages.intro.play_button,Question);

        t.addChild(btt1);
        btt1.cursor ='pointer';
        btt1.x=292;
        btt1.y=1000;
        btt1.mouseEnabled=true;
        btt1.stateClicked = true;


        var belka = new createjs.Container();
        t.addChild(belka);
        belka.y= -100;
        var con = new createjs.Container();
        var top = new createjs.Bitmap(main.loadedData.getResult('top'));
        con.addChild(top);
        con.x = 342;
        con.y = -200;
        t.addChild(con);
        

        var t1  = new createjs.Text(strings.pages.intro.game_title1.text, strings.pages.intro.game_title1.font,'#FAF13F');
        t1.textBaseline = "alphabetic";
        offset = t1.font;
        offset = parseInt(offset.substr(0, offset.indexOf('px')));
        t1.lineWidth = 263;
        t1.lineHeight=50;
        t1.textAlign='center';
        t1.x = 131+strings.pages.intro.game_title1.x;
        t1.y = 18+strings.pages.intro.game_title1.y+offset;
        con.addChild(t1);

         t1  = new createjs.Text(strings.pages.intro.game_title2.text, strings.pages.intro.game_title2.font,'#89338D');
        t1.textBaseline = "alphabetic";
        offset = t1.font;
        offset = parseInt(offset.substr(0, offset.indexOf('px')));
        t1.lineWidth = 263;
        t1.lineHeight=50;
        t1.textAlign='center';
        t1.x = 131+strings.pages.intro.game_title1.x;
        t1.y = 49+strings.pages.intro.game_title1.y+offset;
        con.addChild(t1);

         t1  = new createjs.Text(strings.pages.intro.game_title3.text, strings.pages.intro.game_title3.font,'#ffffff');
        t1.textBaseline = "alphabetic";
        offset = t1.font;
        offset = parseInt(offset.substr(0, offset.indexOf('px')));
        t1.lineWidth = 263;
        t1.lineHeight=50;
        t1.textAlign='center';
        t1.x = 131+strings.pages.intro.game_title1.x;
        t1.y = 83+strings.pages.intro.game_title1.y+offset;
        con.addChild(t1);

        TweenLite.to(con,.5,{y:12,delay:2});
        TweenLite.to(btt1,.5,{delay:2.2,y:168,onComplete:wlaczbtt1});


        

/*
        t1  = new createjs.Text(strings.pages.intro.game_title2.text, strings.pages.intro.game_title2.font,'#E52C91');
        t1.textBaseline = "alphabetic";t
        offset = t1.font;
        offset = parseInt(offset.substr(0, offset.indexOf('px')));
        t1.lineWidth = 944;
        t1.textAlign='center';
        t1.x = 944/2+strings.pages.intro.game_title1.x;
        t1.y = -100;
        this.addChild(t1);
        TweenLite.to(t1,.5,{y:66+strings.pages.intro.game_title2.y+offset,delay:2.2});
*/
/*
        odpowiedz1 = new Podest(1);
        t.addChild(odpowiedz1);
        odpowiedz1.x = this.pos[3];
        odpowiedz1.y=897;
        odpowiedz2 = new Podest(2);
        t.addChild(odpowiedz2);
        odpowiedz2.x =this.pos[2];
        odpowiedz2.y=897;
        odpowiedz3 = new Podest(3);
        t.addChild(odpowiedz3);
        odpowiedz3.x =this.pos[1];
        odpowiedz3.y=897;
        odpowiedz4 = new Podest(4);
        t.addChild(odpowiedz4);
        odpowiedz4.x = this.pos[0];
        odpowiedz4.y=897;
*/

        var odpowiedz1 = new createjs.Bitmap(main.loadedData.getResult('b25'));
        t.addChild(odpowiedz1);
        odpowiedz1.x = this.pos[0];
        odpowiedz1.y=897;
        odpowiedz1.regY=odpowiedz1.image.height;

        var odpowiedz2 = new createjs.Bitmap(main.loadedData.getResult('b26'));
        t.addChild(odpowiedz2);
        odpowiedz2.x = this.pos[1];
        odpowiedz2.y=897;
        odpowiedz2.regY=odpowiedz2.image.height;
        var odpowiedz3 = new createjs.Bitmap(main.loadedData.getResult('b27'));
        t.addChild(odpowiedz3);
        odpowiedz3.x = this.pos[2];
        odpowiedz3.y=897;
        odpowiedz3.regY=odpowiedz3.image.height;
        var odpowiedz4 = new createjs.Bitmap(main.loadedData.getResult('b28'));
        t.addChild(odpowiedz4);
        odpowiedz4.regY=odpowiedz4.image.height;
        odpowiedz4.x = this.pos[3];
        odpowiedz4.y=1200;

        TweenLite.to(odpowiedz1,1,{y:530,ease:Bounce.easeOut,delay:1.8,alpha:1});
        TweenLite.to(odpowiedz2,1,{y:530,ease:Bounce.easeOut,delay:2,alpha:1});
        TweenLite.to(odpowiedz3,1,{y:530,ease:Bounce.easeOut,delay:2.2,alpha:1});
        TweenLite.to(odpowiedz4,1,{y:530,ease:Bounce.easeOut,delay:2.4,alpha:1});
        setTimeout(reset,200);

    };
    function reset(){
        main.nCurrentLevel=1;
    }
    function wlaczbtt1(){
        btt1.mouseEnabled=true;
    }
   
   

    window.Step1=Step1;

}());
