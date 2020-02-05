
(function()
{
    'use strict';
    var t;
    var bgd;
    var t1,t2,t3,t4,t5,t6,t7;
    var bestpoints;
    var Step6=function()
    {
        t = this;
        this.initialize();

    };
    var p=Step6.prototype=new createjs.Container();
    p.initialize=function() {

        main.soundBtt.visible = true;
        playSounds('gameover');


        if(main.mode==1){
            bestpoints = readCookie('CloudyWithAChanceOfMeatballs_easyPoints');
            if(bestpoints==null||(bestpoints<main.points)){
                bestpoints = main.points;
            }
            createCookie('CloudyWithAChanceOfMeatballs_easyPoints',bestpoints,300);
        }else{
            bestpoints = readCookie('CloudyWithAChanceOfMeatballs_hardPoints');
            if(bestpoints==null||(bestpoints<main.points)){
                bestpoints = main.points;
            }
            createCookie('CloudyWithAChanceOfMeatballs_hardPoints',bestpoints,300);
        }

        
        bgd=new createjs.Bitmap(main.loadedData.getResult('gameover_bgd'));
        t.addChild(bgd);
        bgd.regX =  512;
        bgd.regY =  287;
        bgd.x =  512;
        bgd.y =  287;
        TweenMax.from(bgd,0.5,{scaleX:2,scaleY:2,onComplete:showRanking});
        t1  = new createjs.Text(strings.pages.gameover.title.text, strings.pages.gameover.title.font,'#192f3c');
        t1.textBaseline = 'alphabetic';
        t1.lineWidth = 1024;
        t1.lineHeight=50;
        t1.textAlign='center';
        t1.x = 512+strings.pages.gameover.title.x;
        t1.y = 85+strings.pages.gameover.title.y+getoffset(t1.font);
        t2  = new createjs.Text(strings.pages.gameover.yourscore.text, strings.pages.gameover.yourscore.font,'#009999');
        t2.textBaseline = 'alphabetic';
        t2.lineWidth = 1024;
        t2.lineHeight=50;
        t2.textAlign='center';
        t2.x = 512+strings.pages.gameover.yourscore.x;
        t2.y = 212+strings.pages.gameover.yourscore.y+getoffset(t2.font);
        t3  = new createjs.Text(main.points+' '+strings.pages.gameover.points.text, strings.pages.gameover.points.font,'#993333');
        t3.textBaseline = 'alphabetic';
        t3.lineWidth = 1024;
        t3.lineHeight=50;
        t3.textAlign='center';
        t3.x = 512+strings.pages.gameover.points.x;
        t3.y = 242+strings.pages.gameover.points.y+getoffset(t3.font);
        t4  = new createjs.Text(strings.pages.gameover.score.text, strings.pages.gameover.score.font,'#009999');
        t4.textBaseline = 'alphabetic';
        t4.lineWidth = 1024;
        t4.lineHeight=50;
        t4.textAlign='center';
        t4.x = 512+strings.pages.gameover.score.x;
        t4.y = 300+strings.pages.gameover.score.y+getoffset(t4.font);
        t5  = new createjs.Text(bestpoints+' '+strings.pages.gameover.points.text, strings.pages.gameover.points.font,'#993333');
        t5.textBaseline = 'alphabetic';
        t5.lineWidth = 1024;
        t5.lineHeight=50;
        t5.textAlign='center';
        t5.x = 512+strings.pages.gameover.points.x;
        t5.y = 330+strings.pages.gameover.points.y+getoffset(t5.font);
        
        var again = new FrameBtt(main.loadedData.getResult('btt_again'),strings.pages.gameover.playagain.text,main.loadedData.getResult('btt_again_on'),'#ffffff',strings.pages.gameover.playagain);
        t.addChild(again);
        again.x = 617;
        again.y= 306;
        again.addEventListener('click',onAgain);
        TweenLite.from(again,0.5,{y:-200});

    };
    function showRanking(){
        t.addChild(t1,t2,t3,t4,t5,t6,t7);
    }
    function onAgain(){
        t.dispatchEvent({param: Step3, type:'changePage',bubbles:true,cancelable:true});
    }

    window.Step6=Step6;

}());
