$(document).ready(function(){function e(e){$(".dynamic--percent").prop("Counter",0).animate({Counter:e},{duration:800,easing:"swing",step:function(e){O()?(e=Math.ceil(e-10),parseFloat(e)<0&&(e=0),$(".dynamic--percent").text(e+"%")):$(".dynamic--percent").text(Math.ceil(e)+"%")}})}function o(e,t){}function a(){ke.start()}function n(){ke.stop(),ke.reset(),a()}function s(){ke.start()}function i(){ke.pause()}function r(){c(),d()}function c(){$("#mainProgress .progress").width(0),ee=[{id:"fillup",src:"https://stagecombat-jbazxwak9vv.netdna-ssl.com/sounds/fill-up_holdSpacebar2.mp3",type:createjs.Types.SOUND},{id:"reverse",src:"https://stagecombat-jbazxwak9vv.netdna-ssl.com/sounds/reverse_sound.mp3",type:createjs.Types.SOUND},{id:"clock",src:"https://stagecombat-jbazxwak9vv.netdna-ssl.com/sounds/clock_only__quiter.mp3",type:createjs.Types.SOUND},{id:"beat",src:"https://stagecombat-jbazxwak9vv.netdna-ssl.com/sounds/heart_only2.mp3",type:createjs.Types.SOUND}],K.on("fileload",p),K.on("error",m)}function d(){for($e.load(o);ee.length>0;)l()}function l(){var e=ee.shift();K.loadFile(e)}function p(e){e.result}function m(e){}function h(e){return 802*e/1920/fe.screen.height}function v(){fe.resize(),$e.resources.sceneInit.data.setAttribute("autoplay","0"),videoTexture=PIXI.Texture.from($e.resources.sceneInit.data),de=new PIXI.Sprite(videoTexture),re=videoTexture.baseTexture.resource.source,re.setAttribute("playsinline",null),re.currentTime=0,re.pause();var e=h(fe.screen.width);de.width=fe.screen.width,de.height=fe.screen.height*e,we.pivot.x=de.width/2,we.pivot.y=de.height/2,we.x=fe.screen.width/2,we.y=fe.screen.height/2,we.addChild(de),xe=function(){0==ge[0]&&re.currentTime>=9&&re.currentTime<9.5&&(ge[0]=1,re.pause(),w(!1)),0==ge[1]&&re.currentTime>=18.5&&re.currentTime<19&&(ge[1]=1,re.pause(),y()),0==ge[3]&&re.currentTime>=30&&re.currentTime<31&&(ge[3]=1,k(9,40,"Duck","Jump",1,1)),0==ge[5]&&re.currentTime>=45.1&&re.currentTime<46&&(ge[5]=1,b(8,54,"Left","Right",1,5)),0==ge[7]&&re.currentTime>=59.12&&re.currentTime<60&&(ge[7]=1,re.pause(),x()),0==ge[8]&&re.currentTime>=63&&re.currentTime<63.5&&(ge[8]=1,re.pause(),j()),0==ge[9]&&re.currentTime>=72.8&&re.currentTime<73.2&&(ge[9]=1,re.pause(),y()),0==ge[10]&&re.currentTime>=84.14&&re.currentTime<85&&(ge[10]=1,b(8,93.8,"Left","Right",1,4)),0==ge[12]&&re.currentTime>=96.8&&re.currentTime<97.5&&(re.currentTime=100),0==ge[12]&&re.currentTime>=100.5&&re.currentTime<100.9&&(ge[12]=1,k(6,107,"Duck","Jump",2,2)),0==ge[14]&&re.currentTime>=111&&re.currentTime<112&&(ge[14]=1,T(2),re.pause()),0==ge[15]&&re.currentTime>=116&&re.currentTime<116.5&&(ge[15]=1,re.pause(),j()),0==ge[16]&&re.currentTime>=128.1&&re.currentTime<129&&(ge[16]=1,re.pause(),y()),0==ge[17]&&re.currentTime>=140.22&&re.currentTime<141&&(ge[17]=1,b(9,151,"Left","Right",1,3)),0==ge[20]&&re.currentTime>=153.55&&re.currentTime<154&&(ge[20]=1,b(9,164,"Up","Down",2,2)),0==ge[22]&&re.currentTime>=169.14&&re.currentTime<170&&(ge[22]=1,T(1),re.pause()),0==ge[18]&&re.currentTime>=173&&re.currentTime<174&&(ge[18]=1,re.pause(),j())},ye.add(xe)}function g(){re.onwaiting=function(){Ae&&(Ae=!1,E())},re.onplaying=function(){I()},re.onprogress=function(){}}function f(){Ce||(videoTexture2=PIXI.Texture.from($e.resources.stab_scene.data),le=new PIXI.Sprite(videoTexture2),ce=videoTexture2.baseTexture.resource.source,ce.currentTime=0,ce.setAttribute("playsinline",null),ce.setAttribute("loop",!0),ce.load(),ce.pause(),Ce=!0)}function w(e){H(),e&&(V(),Q=createjs.Sound.play("clock",{loop:-1})),$(".weapon").on("click",function(){if($(".weapon").off("click"),"sword"==$(this).data("scene")){f();var t=this;setTimeout(function(){$(t).addClass("hidden"),ve.sword=0},500),re.currentTime=10,re.play()}if("rapier"==$(this).data("scene")){var t=this;setTimeout(function(){$(t).addClass("hidden"),ve.rapier=0},500),re.currentTime=64,re.play()}if("stick"==$(this).data("scene")){var t=this;setTimeout(function(){$(t).addClass("hidden"),ve.stick=0},500),re.currentTime=117,re.play()}e&&(s(),Q.stop()),$("#chooseWeapon").fadeOut()})}function y(){$("#swingWeapon").css("display","flex"),P()}function b(e,t,o,a,n,s){function i(e){$("#chooseBlock").hide(),$("#chooseBlock .right").off("click"),$("#chooseBlock .left").off("click"),je=!1,Q.stop(),l.stop(),l.removeEventListener("targetAchieved"),re.pause(),re.currentTime=t,M(e,function(){re.play()})}function r(){je=!1,$("#chooseBlock").hide(),$("#chooseBlock .right").off("click"),$("#chooseBlock .left").off("click"),Q.stop(),l.stop(),l.removeEventListener("targetAchieved"),A()}var c=$("#chooseBlock .left .circle"),d=$("#chooseBlock .right .circle");c.text(o),d.text(a),Q=createjs.Sound.play("clock",{loop:-1}),$("#chooseBlock .countdown--number").html(e),$("#chooseBlock").css("display","flex"),Z();var l=new easytimer.Timer;je=l,l.start({countdown:!0,startValues:{seconds:e}}),l.addEventListener("secondsUpdated",function(t){createjs.Sound.play("beat"),e--,$("#chooseBlock .countdown--number").html(e)}),l.addEventListener("targetAchieved",function(e){je=!1,Q.stop(),$("#chooseBlock").hide(),$("#chooseBlock .right").off("click"),$("#chooseBlock .left").off("click"),l.stop(),l.removeEventListener("targetAchieved"),re.removeEventListener("ended",Te),A()}),$("#chooseBlock .right").on("click",function(){2==n?i(s):r()}),$("#chooseBlock .left").on("click",function(){1==n?i(s):r()})}function k(e,t,o,a,n,s){function i(e){je=!1,Q.stop(),$("#chooseMove").hide(),$("#chooseMove .right").off("click"),$("#chooseMove .left").off("click"),l.stop(),l.removeEventListener("targetAchieved"),re.pause(),re.currentTime=t,M(e,function(){re.play()})}function r(){je=!1,Q.stop(),$("#chooseMove").hide(),$("#chooseMove .right").off("click"),$("#chooseMove .left").off("click"),l.stop(),l.removeEventListener("targetAchieved"),A()}var c=$("#chooseMove .left .circle"),d=$("#chooseMove .right .circle");c.text(o),d.text(a),Q=createjs.Sound.play("clock",{loop:-1}),$("#chooseMove .countdown--number").html(e),$("#chooseMove").css("display","flex"),B();var l=new easytimer.Timer;je=l,l.start({countdown:!0,startValues:{seconds:e}}),l.addEventListener("secondsUpdated",function(t){createjs.Sound.play("beat"),e--,$("#chooseMove .countdown--number").html(e)}),l.addEventListener("targetAchieved",function(e){je=!1,$("#chooseMove").hide(),$("#chooseMove .right").off("click"),$("#chooseMove .left").off("click"),Q.stop(),l.stop(),l.removeEventListener("targetAchieved"),A()}),$("#chooseMove .right").on("click",function(){2==n?i(s):r()}),$("#chooseMove .left").on("click",function(){1==n?i(s):r()})}function T(e){function t(){var e=$(".moving--dot").offset();e.left>a&&e.left<n?($("#target-elm #target").css("fill","red"),me=!0):($("#target-elm #target").css("fill","white"),me=!1)}1==e?$("#hitTarget").addClass("aim_leg"):$("#hitTarget").removeClass("aim_leg"),$("#hitTarget").css("display","flex"),U(),createjs.Ticker.addEventListener("tick",t);var o=$("#target-elm").offset(),a=o.left,n=a+$("#target-elm").width();$("#target-elm").on("click",function(){me?($("body").off("keyup"),$("#target-elm").off("click"),$("#hitTarget").hide(),re.play()):S()}),$("body").on("keyup",function(e){32==e.keyCode&&(me?($("body").off("keyup"),$("#target-elm").off("click"),$("#hitTarget").hide(),re.play()):S())})}function x(){function e(){var e=$(".moving--dot").offset();e.left>a&&e.left<n?($("#target-elm #target").css("fill","red"),me=!0):($("#target-elm #target").css("fill","white"),me=!1)}$("#hitTarget").removeClass("aim_leg");var t=h(fe.screen.width);le.width=fe.screen.width,le.height=fe.screen.height*t,we.pivot.x=le.width/2,we.pivot.y=le.height/2,we.x=fe.screen.width/2,we.y=fe.screen.height/2,ce.play(),we.removeChildren(),we.addChild(le),$("#hitTarget").css("display","flex"),U(),createjs.Ticker.addEventListener("tick",e);var o=$("#target-elm").offset(),a=o.left,n=a+$("#target-elm").width();$("#target-elm").on("click",function(){me?($("body").off("keyup"),$("#target-elm").off("click"),$("#hitTarget").hide(),we.removeChildren(),we.addChild(de),re.play()):S()}),$("body").on("keyup",function(e){32==e.keyCode&&(me?($("body").off("keyup"),$("#target-elm").off("click"),$("#hitTarget").hide(),we.removeChildren(),we.addChild(de),re.play()):S())})}function A(){createjs.Sound.play("endsound"),re.currentTime=174,$("#canvas-container").fadeOut(500,function(){C("dead"),$("#canvas-container").fadeIn(1500)}),ye.remove(xe)}function C(e){if(ke.pause(),$(".screen-grade").css("display","flex"),W(),pe<10&&(pe="0"+pe),$(".big--time").text(ue+""+pe),$(".go_again").addClass("transparent"),$(".go_again").addClass("red"),$(".try_real").show(),$(".try_real a").text("Reserve your place"),$(".try_real a").attr("href","http://eepurl.com/Ly0Df"),"dead"==e){$(".try_real a").text("Try the real thing"),$(".try_real a").attr("href","https://www.forestrygames.com/");var t=$e.resources.wrongmove.data,o=$e.resources.failed.data;$(".info--title.your-grade").find("img").remove(),$(".info--title.your-grade").prepend(t),$(".info--subtitle").empty(),$(".info--description p").text("You made the wrong move. Try again and remember the faster you make a decision, the better your grade and reward. Alternatively, why not try the real thing and sharpen your skills in one of our classes?")}else if("pass"==e){var t=$e.resources.yourgrade.data,o=$e.resources.pass.data;$(".info--title.your-grade").find("img").remove(),$(".info--title.your-grade").prepend(t),$(".info--subtitle").prepend(o),$(".info--description p").text("Good work, you’ve managed to complete all 3 weapons. You have the potential to be great but training is needed. Your reward is a FREE combat training session in London."),createjs.Sound.play("endsound"),oe.stop(),$(".sound--control_element").toggleClass("off")}else if("merit"==e){var t=$e.resources.yourgrade.data,o=$e.resources.merit.data;$(".info--title.your-grade").find("img").remove(),$(".info--title.your-grade").prepend(t),$(".info--subtitle").prepend(o),$(".info--description p").text("Nice moves. Deadly but not quite quick enough. You have the potential to be great but more training is needed. Your reward is a FREE combat training session in London."),createjs.Sound.play("endsound"),oe.stop(),$(".sound--control_element").toggleClass("off")}else{var t=$e.resources.yourgrade.data,o=$e.resources.distinction.data;$(".info--title.your-grade").find("img").remove(),$(".info--title.your-grade").prepend(t),$(".info--subtitle").prepend(o),$(".info--description p").text("Awesome moves! Quick and deadly. You’ve received a Distinction, the top grade at this level. Your reward is a FREE combat training session in London."),createjs.Sound.play("endsound"),oe.stop(),$(".sound--control_element").toggleClass("off")}}function j(){i(),0==ve.sword&&0==ve.rapier&&0==ve.stick?(ftime=parseInt(ue),ftime<3?C():C(ftime<4&&pe<30?"merit":"pass")):w(0==ve.sword||0==ve.rapier||0==ve.stick?!0:!1)}function S(){$(".missed").css("display","flex"),$(".missed").hide(),$(".missed").fadeIn(100,function(){$(this).fadeOut(300)})}function z(){0==ve.sword&&0==ve.stick?(ve.rapier=0,re.currentTime=64,re.play(),setTimeout(function(){$(".weapon1").addClass("hidden")},500)):0==ve.sword&&0==ve.rapier?(ve.stick=0,re.currentTime=117,re.play(),setTimeout(function(){$(".weapon2").addClass("hidden")},500)):0==ve.rapier&&0==ve.stick?(ve.sword=0,f(),re.currentTime=10,re.play(),setTimeout(function(){$(".weapon3").addClass("hidden")},500)):0==ve.rapier?(ve.sword=0,f(),re.currentTime=10,re.play(),setTimeout(function(){$(".weapon3").addClass("hidden")},500)):0==ve.stick?(ve.rapier=0,re.currentTime=64,re.play(),setTimeout(function(){$(".weapon1").addClass("hidden")},500)):0==ve.sword&&(ve.stick=0,re.currentTime=117,re.play(),setTimeout(function(){$(".weapon2").addClass("hidden")},500)),$("#chooseNewWeapon").hide(),$("#chooseWeapon").fadeOut(),$(".weapon").off("click"),s()}function E(){te=setTimeout(function(){0!=je&&je.pause(),he=!0,i(),$("#buffering").css("display","flex"),$(".screentext > div").show(),$(".screentext > div").css("visibility","visible"),$(".screentext > div").css("opacity","1"),_()},1600)}function I(){clearTimeout(te),Ae=!0,he&&(0!=je&&je.start(),$("#buffering").hide(),$(".screentext > div").hide(),oe.paused=!1,$(".sound--control_element").removeClass("off"),s())}function M(e,t){var o=["rightmove","correct","excellent","goodjob","great","keepgoing"],a=e;$(".rightmove").html($e.resources[o[a]].data),$("#rightmove").css("display","flex"),$("#rightmove").hide(),$("#rightmove").fadeIn(1e3,function(){$("#rightmove").fadeOut(250),t()})}function O(){var e=" -webkit- -moz- -o- -ms- ".split(" ");if("ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch)return window.screen.width<1024;var t=["(",e.join("touch-enabled),("),"heartz",")"].join("");return function(e){return window.matchMedia(e).matches}(t)}function L(){var e=1500;navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&(e=1500),$(".footer .loading--text").text("Loading Completed!"),(new TimelineMax).staggerFromTo(".footer .loading--text",1.5,{autoAlpha:1,ease:Circ.easeOut},{autoAlpha:0,ease:Circ.easeOut},.1,"+=0.6"),setTimeout(function(){$("body").removeClass(),$("body").addClass("loading-done"),O()?$("body").removeClass("hover-allowed"):$("body").addClass("hover-allowed"),$("#playbutton"),(new TimelineMax).staggerFromTo("#playbutton",.6,{y:30,autoAlpha:0,ease:Circ.easeOut},{y:0,autoAlpha:1,ease:Circ.easeOut},.1,"+=0.6"),$("#playbutton").css("display","flex")},e)}function _(){$(".sound--control_element").addClass("off"),oe.paused=!0}function H(){var e=$("#chooseWeapon");$("#chooseWeapon").css("display","flex"),new TimelineMax({paused:!1}).fromTo(e,.4,{autoAlpha:0},{autoAlpha:1},"-=0").fromTo(e.find(".sceene--title"),.6,{scale:.95,autoAlpha:0},{scale:1,autoAlpha:1},"+=0").staggerFromTo(e.find(".choose--weapons > div"),.4,{y:15,autoAlpha:0},{y:0,autoAlpha:1},.05,"+=0.2").set(e,{"pointer-events":"inherit"})}function P(){function e(){n=!1}function t(){O()&&($(".hold--spacebar").off("touchstart"),$(".hold--spacebar").off("touchend")),$("body").off("keyup"),$("body").off("keydown"),$("#swingWeapon").fadeOut(),$("#swingWeapon").removeClass("hold"),s.kill(),re.play()}var o,a=$("#swingWeapon"),n=!1,s=new TimelineMax({paused:!0});s.fromTo(a,.4,{autoAlpha:0},{autoAlpha:1},"-=0").fromTo(a.find(".sceene--title"),.6,{scale:.95,autoAlpha:0},{scale:1,autoAlpha:1},"+=0").fromTo(a.find(".hold--spacebar"),.6,{scale:.85,autoAlpha:0},{scale:1,autoAlpha:1},"-=0");var i=new TimelineMax({paused:!0,onComplete:t,onReverseComplete:e});i.fromTo(a.find("#oval-anim-line"),5,{drawSVG:"100% 100%"},{drawSVG:"0% 100%",ease:Power0.easeNone},"+=0").fromTo(a.find("#circle--anim"),5,{scale:1},{scale:.75,ease:Power0.easeNone},"-=5"),s.play(),O()&&($(".hold--spacebar").on({touchstart:function(){$("#swingWeapon").addClass("hold"),i.play().timeScale(1),0==n&&(o=createjs.Sound.play("fillup"),n=!0)}}),$(".hold--spacebar").on({touchend:function(){$("#swingWeapon").removeClass("hold"),i.reverse().timeScale(5),n=!1,o.stop(),createjs.Sound.play("reverse")}})),$("body").on("keydown",function(e){32==e.keyCode&&($("#swingWeapon").addClass("hold"),0==n&&(i.play().timeScale(1),o=createjs.Sound.play("fillup"),n=!0))}),$("body").on("keyup",function(e){32==e.keyCode&&($("#swingWeapon").removeClass("hold"),i.reverse().timeScale(5),o.stop(),createjs.Sound.play("reverse"))})}function Z(){var e=$("#chooseBlock"),t=new TimelineMax({paused:!0});t.fromTo(e,.4,{autoAlpha:0},{autoAlpha:1},"-=0").fromTo(e.find(".sceene--title"),.6,{scale:.95,autoAlpha:0},{scale:1,autoAlpha:1},"+=0").staggerFromTo(e.find(".countdown--number, .UI--navigation > div"),.4,{y:15,autoAlpha:0},{y:0,autoAlpha:1},.05,"+=0.2").set(e,{"pointer-events":"inherit"}),t.play()}function B(){var e=$("#chooseMove"),t=new TimelineMax({paused:!0});t.fromTo(e,.4,{autoAlpha:0},{autoAlpha:1},"-=0").fromTo(e.find(".sceene--title"),.6,{scale:.95,autoAlpha:0},{scale:1,autoAlpha:1},"+=0").staggerFromTo(e.find(".countdown--number, .UI--navigation > div"),.4,{y:15,autoAlpha:0},{y:0,autoAlpha:1},.05,"+=0.2").set(e,{"pointer-events":"inherit"}),t.play()}function U(){function e(){new TimelineMax({yoyo:!0,repeat:-1}).fromTo(t.find(".moving--dot"),2,{x:"-9vw",ease:Power4.easeInOut},{x:"9vw",ease:Power4.easeInOut},"-=0")}var t=$("#hitTarget"),o=new TimelineMax({paused:!0,onComplete:e});o.fromTo(t,.4,{autoAlpha:0},{autoAlpha:1},"-=0").fromTo(t.find(".sceene--title"),.6,{scale:.95,autoAlpha:0},{scale:1,autoAlpha:1},"+=0").fromTo(t.find(".target--circle"),.6,{scale:1,autoAlpha:0,ease:Circ.easeIn},{scale:1,autoAlpha:1,ease:Circ.easeIn},"-=0").to(t.find(".moving--dot"),.4,{autoAlpha:1},"-=0"),o.play()}function V(){var e=document.getElementById("chooseNewWeapon"),t=document.getElementsByClassName("big--circle");e.removeAttribute("style"),t[0].removeAttribute("style"),$("#chooseNewWeapon").css("display","flex");var o=$("#chooseNewWeapon"),a=new TimelineMax({paused:!0});a.fromTo(o,.4,{autoAlpha:0},{autoAlpha:1},"-=0").fromTo(o.find(".big--circle"),.4,{scale:.85,autoAlpha:0},{scale:1,autoAlpha:1},"-=0").fromTo(o.find("#Oval-red-over"),5,{drawSVG:"100% 100%"},{drawSVG:"0% 100%",ease:Power0.easeNone},"-=0.8").to(o.find(".big--circle"),.4,{scale:1,autoAlpha:1},"+=0.5").to(o,.4,{autoAlpha:0},"+=0"),a.play(),$(".circle_content--countdown").html("5");var n=5;ze=new easytimer.Timer,ze.start({countdown:!0,startValues:{seconds:5}}),ze.addEventListener("secondsUpdated",function(e){n--,$(".circle_content--countdown").html(n)}),ze.addEventListener("targetAchieved",function(e){Q.stop(),ze.stop(),ze.removeEventListener("targetAchieved"),z(),$(".circle_content--countdown").html("8")})}function W(){var e=$(".screen-grade"),t=new TimelineMax({paused:!0});t.fromTo(e,.4,{autoAlpha:0},{autoAlpha:1},"-=0").staggerFromTo(e.find(".sceene--grid > div"),.6,{autoAlpha:0,y:15},{autoAlpha:1,y:0},.05,"-=0"),t.play()}function D(){"playSucceeded"!=oe.playState?(oe=createjs.Sound.play("intro",{loop:-1}),oe.play(),Ee=setTimeout(D,500)):clearTimeout(Ee)}function N(){new TimelineMax({onComplete:F}).to(".sound--icon, .sound--message, .continue--btn",.8,{autoAlpha:0},"-=0").set(".sound--message",{display:"none"})}function F(){function e(e,t,o){return Array(t-Math.abs(e%(2*t)-t)+1).join(o)}$(".background-image").show(),$(".background-video").show(),splitTextAnimation=new TimelineLite({onStart:X,onComplete:R}),splitTextAnimation.staggerTo("#moveOne p > div ",2.5,{opacity:1,y:0,z:.01},.09).staggerTo("#moveOne p > div ",.9,{opacity:0,y:-10,z:.01},.01,"+=4").staggerTo("#moveSecond p > div",2.5,{opacity:1,y:0,z:.01},.09).staggerTo("#moveSecond p > div",.9,{opacity:0,y:-10,z:.01},.01,"+=4");var t=0;setInterval(function(){$(".loading--text .dots").html(e(t++,3,"."))},200),function(){var e=new TimelineMax({paused:!0,reversed:!0,delay:.2});e.staggerFromTo(".credits--row ",.5,{autoAlpha:0,y:10,ease:Power2.easeInOut},{autoAlpha:1,y:0,ease:Power2.easeInOut},.1,"-=0"),$(".credits--element, .credits-overlay").click(function(){$(".credits").toggleClass("is-open"),$(this).toggleClass("active"),e.reversed()?e.play():e.reverse()})}()}function R(){ne&&ae?(clearTimeout(Ie),L()):Ie=setTimeout(R,100)}function q(){$(".content, .background-image").addClass("disable"),$(".content, .background-video").addClass("disable")}function X(){$("body").removeClass(),$("body").addClass("loading-start")}function Y(){new TimelineMax({delay:.25}).staggerTo(".loading--text > div, .start--btn a",.3,{y:"5",autoAlpha:0},.02,"-=0").to(".loading--overall",.8,{autoAlpha:0},"-=0").to(".logo img, #playbutton",.5,{autoAlpha:0,scale:.95,ease:Sine.easeOut},"-=0.3").to(".background-image",.8,{autoAlpha:0},"-=0.5").to(".background-video",.8,{autoAlpha:0},"-=0.5").to(".credits--element, .time--stamp, .sound--control",.5,{y:0,autoAlpha:1},"+=1.25").to(".canvas--content",.5,{autoAlpha:1,onComplete:q},"+=0").to(".canvas--content span",5,{scaleY:0},"-=0"),re.play(),re.pause();var e=new easytimer.Timer;e.start({countdown:!0,startValues:{seconds:4}}),g(),e.addEventListener("targetAchieved",function(e){re.currentTime=0,re.play(),n()})}function G(){""!=oe&&(document.hidden?(oe.paused=!0,$(".sound--control_element").addClass("off")):(oe.paused=!1,$(".sound--control_element").removeClass("off")))}function J(){screenfull.enabled&&screenfull.request()}$(document).on("touchend",function(e){});var Q,K,ee,te,oe="",ae=!0,ne=!1,se=!1,ie=!1,re="",ce="",de="",le="",ue="00:",pe="00",me=!1,he=!1,ve={rapier:1,sword:1,stick:1},ge=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];K=new createjs.LoadQueue(!0,null,!0),K.setMaxConnections(5),K.installPlugin(createjs.Sound),K.loadFile({id:"hover",src:"https://stagecombat-jbazxwak9vv.netdna-ssl.com/sounds/hover-click_ effect.mp3",type:createjs.Types.SOUND}),K.loadFile({id:"endsound",src:"https://stagecombat-jbazxwak9vv.netdna-ssl.com/sounds/end_sound.mp3",type:createjs.Types.SOUND}),K.loadFile({id:"intro",src:"https://stagecombat-jbazxwak9vv.netdna-ssl.com/sounds/true-edge-loop3_smaller.mp3",type:createjs.Types.SOUND});var fe=new PIXI.Application({width:window.innerWidth,height:window.innerHeight,resizeTo:document.getElementById("canvas-container")});document.getElementById("canvas-container").appendChild(fe.view);var we=new PIXI.Container;fe.stage.addChild(we);var ye=PIXI.Ticker.shared;ye.maxFPS=30;var $e=PIXI.Loader.shared;$e.add("logored","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/logo_red.svg").add("logoready","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/newlogo2.svg").add("saber","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/saber.svg").add("stick","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/stick.svg").add("sword","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/sword.svg").add("rightmove","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/right--move.svg").add("chooseyourweapon","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/choose-your-weapon.svg").add("swingyourweapon","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/swing-your-weapon.svg").add("chooseyourblock","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/choose-your-block.svg").add("chooseyourmove","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/choose-your-move.svg").add("hitthetarget","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/hit-the-target.svg").add("miss","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/missed.svg").add("yourgrade","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/yourgrade.svg").add("distinction","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/distinction.svg").add("pass","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/pass.svg").add("merit","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/merit.svg").add("wrongmove","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/wrong-move.svg").add("failed","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/failed.svg").add("actors","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/actors.svg").add("fightdirection","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/fight-direction.svg").add("webdevelopment","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/web-development.svg").add("hold","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/mobile-hold.svg").add("holdnew","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/hold-new.svg").add("correct","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/correct.svg").add("excellent","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/excellent.svg").add("goodjob","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/good-job.svg").add("great","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/great.svg").add("keepgoing","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/keep-going.svg").add("yourtime","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/your-time.svg").add("facebookCredits","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/facebook.svg").add("twitterCredits","https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/twitter.svg").add("sceneInit","https://storage.googleapis.com/trueedge/trueedgevid_final.mp4",{crossOrigin:!0}).add("stab_scene","https://storage.googleapis.com/trueedge/stab.mp4",{crossOrigin:!0}),$e.onComplete.add(function(e,t){});var be=!1;$e.onProgress.add(function(t,o){"logored"==o.name&&$(".logo").prepend(o.data),"saber"==o.name&&$(".weapon1").prepend(o.data),"stick"==o.name&&$(".weapon2").prepend(o.data),"sword"==o.name&&$(".weapon3").prepend(o.data),"actors"==o.name&&$(".credits--row.actors").prepend(o.data),"fightdirection"==o.name&&$(".credits--row.director").prepend(o.data),"webdevelopment"==o.name&&$(".credits--row.web").prepend(o.data),"yourtime"==o.name&&$(".right--infoTitle").prepend(o.data),"facebookCredits"==o.name&&($(".share--icons .facebook").prepend(o.data),$(o.data).clone().appendTo(".share--icons .facebookCredits")),"twitterCredits"==o.name&&($(".share--icons .twitter").prepend(o.data),$(o.data).clone().appendTo(".share--icons .twitterCredits")),"chooseyourweapon"==o.name&&$("#chooseWeapon .sceene--title").prepend(o.data),"swingyourweapon"==o.name&&$("#swingWeapon .sceene--title").prepend(o.data),"chooseyourblock"==o.name&&$("#chooseBlock .sceene--title").prepend(o.data),"chooseyourmove"==o.name&&$("#chooseMove .sceene--title").prepend(o.data),"hitthetarget"==o.name&&$("#hitTarget .sceene--title").prepend(o.data),"rightmove"==o.name&&$(".rightmove").prepend(o.data),O()?"hold"==o.name&&($(".target--value").text("Press"),$("#hold--spacebar").html('<svg id="circle--anim" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 143 143"><path id="static-oval" d="M71.5,141A69.5,69.5,0,1,0,2,71.5,69.5,69.5,0,0,0,71.5,141Z" transform="translate(0 0)" style="fill:none;stroke:#fff;stroke-width:4px;stroke-dasharray:2,13;opacity:0.4000000059604645;isolation:isolate"/><path id="HOLDSPACEBAR" d="M52.12,80.45H48.34V72.74H41.27v7.71H37.48V62.59h3.79v7h7.07v-7h3.78Zm20.79-9a9.72,9.72,0,0,1-2.21,6.82,9.49,9.49,0,0,1-12.6,0,9.65,9.65,0,0,1-2.21-6.83,9.61,9.61,0,0,1,2.21-6.82,8.27,8.27,0,0,1,6.33-2.35,8.11,8.11,0,0,1,6.26,2.36A9.77,9.77,0,0,1,72.91,71.49Zm-13,0A7.49,7.49,0,0,0,61,76a4,4,0,0,0,3.4,1.57c3,0,4.53-2,4.53-6s-1.5-6-4.5-6A4,4,0,0,0,61,67.07a7.46,7.46,0,0,0-1.22,4.42Zm16.74,9V62.59h3.8V77.33h7.24v3.12Zm28.9-9.1A8.83,8.83,0,0,1,103,78.08a10.24,10.24,0,0,1-7.24,2.34H90.67V62.59h5.69a9.5,9.5,0,0,1,6.79,2.3A8.55,8.55,0,0,1,105.5,71.35Zm-3.94.1q0-5.74-5.09-5.76h-2V77.33H96C99.74,77.33,101.56,75.37,101.56,71.45Z" transform="translate(0 0)" style="fill:#fff"/><path id="oval-anim-line" d="M71.5,141A69.5,69.5,0,1,0,2,71.5,69.5,69.5,0,0,0,71.5,141Z" transform="translate(0 0)" style="fill:none;stroke:#da3228;stroke-width:4px"/></svg>')):"holdnew"==o.name&&($(".target--value").text("Press Spacebar"),$("#hold--spacebar").html('<svg id="circle--anim" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 143 143"><path id="static-oval" d="M71.5,141A69.5,69.5,0,1,0,2,71.5,69.5,69.5,0,0,0,71.5,141Z" style="fill:none;stroke:#fff;stroke-width:4px;stroke-dasharray:2,13;opacity:0.4000000059604645;isolation:isolate"/><path id="HOLDSPACEBAR" d="M59.71,65.52H57.29V60.59H52.77v4.93H50.35V54.1h2.42v4.47h4.52V54.1h2.42ZM73,59.79a6.18,6.18,0,0,1-1.41,4.36,6.07,6.07,0,0,1-8.06,0,6.19,6.19,0,0,1-1.41-4.37,6.15,6.15,0,0,1,1.41-4.36,5.29,5.29,0,0,1,4.05-1.5,5.19,5.19,0,0,1,4,1.51A6.22,6.22,0,0,1,73,59.79Zm-8.34,0a4.76,4.76,0,0,0,.73,2.89,2.55,2.55,0,0,0,2.17,1q2.9,0,2.9-3.86t-2.88-3.86a2.55,2.55,0,0,0-2.18,1A4.74,4.74,0,0,0,64.62,59.79Zm10.7,5.73V54.1h2.43v9.42h4.63v2ZM93.84,59.7A5.63,5.63,0,0,1,92.23,64a6.53,6.53,0,0,1-4.63,1.5H84.36V54.1H88a6.05,6.05,0,0,1,4.34,1.47A5.45,5.45,0,0,1,93.84,59.7Zm-2.52.06q0-3.67-3.25-3.68H86.79v7.44h1C90.16,63.52,91.32,62.27,91.32,59.76Zm-52,24.59a3,3,0,0,1-1.12,2.44,4.84,4.84,0,0,1-3.09.89A7.28,7.28,0,0,1,31.87,87V84.74a14.78,14.78,0,0,0,2,.73,5.77,5.77,0,0,0,1.46.21,2.15,2.15,0,0,0,1.23-.31,1,1,0,0,0,.42-.9,1,1,0,0,0-.19-.6,2,2,0,0,0-.55-.51,13.08,13.08,0,0,0-1.48-.77,7.15,7.15,0,0,1-1.57-.94,3.51,3.51,0,0,1-.83-1.06A3.27,3.27,0,0,1,33,76.8a4.27,4.27,0,0,1,2.84-.87,6.29,6.29,0,0,1,1.7.22,11,11,0,0,1,1.69.59l-.78,1.88A11.43,11.43,0,0,0,37,78.1,4.83,4.83,0,0,0,35.79,78a1.55,1.55,0,0,0-1,.32,1,1,0,0,0-.37.84,1,1,0,0,0,.15.55,1.74,1.74,0,0,0,.47.47c.22.14.73.41,1.54.8a6,6,0,0,1,2.19,1.53A3,3,0,0,1,39.32,84.35Zm4.49-2.88h.8A2.62,2.62,0,0,0,46.28,81a1.53,1.53,0,0,0,.55-1.28,1.58,1.58,0,0,0-.46-1.26,2.19,2.19,0,0,0-1.46-.41h-1.1Zm5.47-1.81a3.51,3.51,0,0,1-1.15,2.82,5,5,0,0,1-3.28,1h-1v4.06H41.39V76.1H45A4.92,4.92,0,0,1,48.2,77,3.28,3.28,0,0,1,49.28,79.66Zm9.15,7.86L57.6,84.8H53.43l-.82,2.72H50l4-11.47h3l4,11.47ZM57,82.77c-.77-2.46-1.2-3.86-1.29-4.18s-.17-.58-.21-.77q-.26,1-1.48,5ZM67.32,78a2.45,2.45,0,0,0-2.11,1,4.77,4.77,0,0,0-.75,2.86q0,3.82,2.86,3.82a9.07,9.07,0,0,0,2.92-.6v2a8.13,8.13,0,0,1-3.14.59,4.78,4.78,0,0,1-3.81-1.52A6.38,6.38,0,0,1,62,81.82a7.16,7.16,0,0,1,.64-3.12,4.77,4.77,0,0,1,1.87-2,5.47,5.47,0,0,1,2.84-.72,7.67,7.67,0,0,1,3.35.81l-.78,2a11.69,11.69,0,0,0-1.29-.53A3.89,3.89,0,0,0,67.32,78Zm11.93,9.57H72.67V76.1h6.58v2H75.09v2.51H79v2H75.09v3h4.16ZM81.63,76.1h3.55a6.87,6.87,0,0,1,3.53.69,2.41,2.41,0,0,1,1.1,2.2,2.78,2.78,0,0,1-.48,1.68,1.92,1.92,0,0,1-1.28.79v.08a2.54,2.54,0,0,1,1.57.9A3.31,3.31,0,0,1,89,86.65a4.91,4.91,0,0,1-3.07.87H81.63Zm2.42,4.52h1.41a2.59,2.59,0,0,0,1.42-.3,1.13,1.13,0,0,0,.44-1,1,1,0,0,0-.48-.94,3.06,3.06,0,0,0-1.52-.29H84.05Zm0,1.92v3h1.58a2.38,2.38,0,0,0,1.48-.38A1.44,1.44,0,0,0,87.58,84c0-1-.67-1.43-2-1.43Zm15.32,5-.83-2.72H94.38l-.83,2.72H90.94l4-11.47h3l4,11.47ZM98,82.77l-1.29-4.18-.21-.77q-.25,1-1.47,5Zm7.88-1.6h.78a3.05,3.05,0,0,0,1.7-.38,1.39,1.39,0,0,0,.54-1.21,1.23,1.23,0,0,0-.56-1.15,3.34,3.34,0,0,0-1.73-.35h-.73Zm0,2v4.38h-2.42V76.1h3.33a5.64,5.64,0,0,1,3.44.85,3.36,3.36,0,0,1,.56,4.36,3.56,3.56,0,0,1-1.57,1.23q2.58,3.85,3.36,5h-2.68l-2.73-4.38Z" style="fill:#fff"/><path id="oval-anim-line" data-name="Oval" d="M71.5,141A69.5,69.5,0,1,0,2,71.5,69.5,69.5,0,0,0,71.5,141Z" style="fill:none;stroke:#da3228;stroke-width:4px;isolation:isolate"/></svg>')),e(Math.ceil(t.progress)),navigator.userAgent.toLowerCase().indexOf("firefox")>-1?t.progress>70&&(be||(be=!0,v(),re.pause()),"sceneInit"==o.name&&re.pause(),ne=!0):("sceneInit"!=o.name||be||(be=!0,v(),re.pause()),t.progress>80&&(f(),"stab_scene"==o.name&&(f(),ce.pause())),t.progress>99&&(ne=!0))}),$e.onError.add(function(e){}),createjs.Ticker.framerate=30;var ke=new easytimer.Timer;ke.addEventListener("secondsUpdated",function(e){now=ke.getTimeValues();var t=now.seconds,o=now.minutes,a=now.hours;a>0&&(o+=60*a),o<10&&(o="0"+o),t<10&&(t="0"+t),ue=o+" : ",pe=now.seconds,$(".time--stamp_value").html(o+' <span class="separator">:</span> <span class="red">'+t+"</span>")});var Te,xe,Ae=!0,Ce=!1,je=!1;$(".go_again").on("click",function(e){$("#canvas-container").fadeOut(500,function(){$("#canvas-container").fadeIn(1500)}),createjs.Ticker.removeAllEventListeners(),we.removeChildren(),we=new PIXI.Container,fe.stage.addChild(we),$(".screen-grade").fadeOut(),"playSucceeded"!=oe.playState&&(oe.play(),$(".sound--control_element").removeClass("off")),ve={rapier:1,sword:1,stick:1},$(".weapon3").removeClass("hidden"),$(".weapon2").removeClass("hidden"),$(".weapon1").removeClass("hidden"),$(".time--stamp_value").html('00 <span class="separator">:</span> <span class="red">00</span>'),ge=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],v(),re.play(),n()});var Se=encodeURI("Check out this first-ever interactive Stage Combat experience! We challenge you to test your combat skills in a race against the clock.");$(".facebook-link").on("click",function(e){e.preventDefault();var o,a;o=window.screen.width/2-310,a=window.screen.height/2-250;var n="status=no,height=285,width=550,resizable=no,left="+o+",top="+a+",screenX="+o+",screenY="+a+",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";return u=location.href,t=document.title,window.open("http://www.facebook.com/sharer.php?u="+encodeURIComponent(u)+"&t="+encodeURIComponent(t),"sharer",n),!1}),$(".twitter-link").click(function(e){e.preventDefault();var t="https://twitter.com/intent/tweet?text="+Se+"&url=https://www.forestrygames.com"
;window.open(t,"Twitter","height=285,width=550,resizable=1")}),$(".weapon , .credits--element, .circle_content--btn, .countdownUI .left , .countdownUI .right, .facebook, .twitter, .info--btn, .go_again, .sound--control_element, .continue--btn, #playbutton").on("mouseenter",function(){ie||(ie=!0,createjs.Sound.play("hover"),setTimeout(function(){ie=!1},250))}),$("#playbutton a").on("click",function(e){e.preventDefault(),$("#playbutton a").off("click"),Y()});var ze;$(".circle_content--btn").click(function(){ze.stop(),ze.removeEventListener("targetAchieved"),$("#chooseNewWeapon").fadeOut(),Q.stop()}),(new TimelineMax).set(".sound--message",{autoAlpha:1}).staggerFromTo(".sound--icon img, .sound--icon .sound--text p, .continue--btn",.6,{y:30,autoAlpha:0,ease:Circ.easeOut},{y:0,autoAlpha:1,ease:Circ.easeOut},.1,"+=0.6"),$(".continue--btn a").click(function(){se||(se=!0,O()&&J(),createjs.Sound.play("endsound"),ie=!1,setTimeout(function(){oe=createjs.Sound.play("intro",{loop:-1}),D()},300),r(),N())});var Ee,Ie;new SplitText(".move--text p",{type:"words"});$(".sound--control_element").click(function(){$(this).toggleClass("off"),$(this).hasClass("off")?oe.paused=!0:oe.paused=!1}),document.addEventListener("visibilitychange",G,!1),window.addEventListener("resize",function(e){fe.resize();var t=h(fe.screen.width);de.width=fe.screen.width,O()?de.height=window.innerHeight*t:de.height=fe.screen.height*t,we.pivot.x=de.width/2,we.pivot.y=de.height/2,""!=ce&&(le.width=fe.screen.width,O()?le.height=window.innerHeight*t:le.height=fe.screen.height*t,we.pivot.x=le.width/2,we.pivot.y=le.height/2),we.x=fe.screen.width/2,we.y=fe.screen.height/2}),O()&&window.addEventListener("orientationchange",function(){J()}),screenfull.enabled&&screenfull.on("change",function(){window.dispatchEvent(new Event("resize"))});var Me={};Me.width=Me.width||{},Me.width.portrait||(Me.width.portrait=window.screen.width),Me.width.landscape||(Me.width.landscape=window.screen.width),void 0===Me.viewport&&(Me.viewport=!0);var Oe=function(){var e,t=navigator.userAgent,o=t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(o[1])?(e=/\brv[ :]+(\d+)/g.exec(t)||[],{name:"IE",version:e[1]||""}):"Chrome"===o[1]&&null!=(e=t.match(/\bOPR|Edge\/(\d+)/))?{name:"Opera",version:e[1]}:(o=o[2]?[o[1],o[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(e=t.match(/version\/(\d+)/i))&&o.splice(1,1,e[1]),{name:o[0],version:o[1]})}();(function(){var e=Oe.name.toLowerCase(),t=parseFloat(Oe.version);return"safari"==e&&t<11||"ie"==e})()&&($(".mobile-rotate").hide(),$(".desktop-resize").hide(),$(".rotate--device").css("display","flex"),$(".rotate--device").removeClass("dnone"),$(".browser-old").css("display","block"));var Le={initialOrientation:window.innerWidth>window.innerHeight?"LANDSCAPE":"PORTRAIT",fixateRootElementsOnInit:!0,scrollWindowToTopOnShow:!0,useHtml5FullScreenWhenPossible:!0,excludedUserAgents:/Tablets/i,customCSSCleanSlate:!0,expandBodyHeightTo:"120vh",updateTimeout:150,swipeUpContent:'<div><img src="https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/swipe-up.gif" /></div><div> <p> SWIPE TO BEGIN THE EXPERIENCE </p></div>',html5FullScreenContent:'<div><img src="https://stagecombat-jbazxwak9vv.netdna-ssl.com/img/swipe-up.gif" /></div><div> <p> Touch to continue </p></div>'},_e=new SwipeUp(Le);_e.enable(),_e.isEnabled&&"COLLAPSED"===_e.browserUiState.state?$(".swipeUpOverlay").show():$(".swipeUpOverlay").hide()});