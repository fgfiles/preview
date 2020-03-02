var jsembed=function()
{var VERSION="1.0.5";var API_NONE="none";var API_HAXE_NME="nme";var API_HAXE_FLAMBE="flambe";var API_CONSTRUCT_2="c2";var API_TRESENSA="tresensa";var API_PLAYCANVAS="playcanvas";var UNDEF="undefined";var OBJECT="object";var ON_READY_STATE_CHANGE="onReadystatechange";var SCALETYPE_NONE="none";var SCALETYPE_FIT="fit";var SCALETYPE_FILL="fill";var SCALETYPE_FILL_TO="fillto";var SCALETYPE_FIT_HORIZONTAL="fith";var widthIdeal=960;var heightIdeal=560;var scaleMax=3;var widthMax=960;var heightMax=560;var win=window;var doc=document;var nav=navigator;var flagDomLoaded=false;var flagEmbedCalled=false;var flagBodyScriptsEmbeded=false;var flagScalingScriptEmbeded=false;var flagPaused=false;var domLoadFunctions=[onReady];var libsLoaded=0;var libsToLoad=0;var libList=[];var libs;var appJs="";var base="";var targetId;var api;var _appRef;var attributes;var parameters;var retryCountMain=0;var flagIndexRoot;var flagBaseCrossdomain=false;var _canvasWidth;var _canvasHeight;var _canvasScale;var _contentOffsetX=0;var _contentOffsetY=0;var _scaledWidth=0;var _scaledHeight=0;if(!window.console)window.console={};if(!window.console.log)window.console.log=function(){};embedMetaTags();var ua=function(){var w3cdom=typeof doc.getElementById!=UNDEF&&typeof doc.getElementsByTagName!=UNDEF&&typeof doc.createElement!=UNDEF,u=nav.userAgent.toLowerCase(),p=nav.platform.toLowerCase(),windows=p?/win/.test(p):/win/.test(u),mac=p?/mac/.test(p):/mac/.test(u),webkit=/webkit/.test(u)?parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,ie=!+"\v1",playerVersion=[0,0,0],d=null;return{w3:w3cdom,wk:webkit,ie:ie,win:windows,mac:mac};}();var onDomLoad=function(){if((typeof doc.readyState!=UNDEF&&doc.readyState=="complete")||(typeof doc.readyState==UNDEF&&(doc.getElementsByTagName("body")[0]||doc.body))){verifyDomLoad();}
if(!flagDomLoaded){if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("DOMContentLoaded",verifyDomLoad,false);}
if(ua.ie&&ua.win){doc.attachEvent(ON_READY_STATE_CHANGE,function(){if(doc.readyState=="complete"){doc.detachEvent(ON_READY_STATE_CHANGE,arguments.callee);verifyDomLoad();}});if(win==top){(function(){if(flagDomLoaded){return;}
try{doc.documentElement.doScroll("left");}
catch(e){setTimeout(arguments.callee,0);return;}
verifyDomLoad();})();}}
if(ua.wk){(function(){if(flagDomLoaded){return;}
if(!/loaded|complete/.test(doc.readyState)){setTimeout(arguments.callee,0);return;}
verifyDomLoad();})();}
addDomLoadListeners(verifyDomLoad,failDomLoad);}}();function embedCSS()
{var tStyle=doc.body.style;tStyle.setProperty("-ms-touch-action","none",null);}
function embedMetaTags()
{addMetaTag("apple-mobile-web-app-capable","yes");addMetaTag("apple-mobile-web-app-status-bar-style","black");addMetaTag("viewport","width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui");addMetaTag("HandheldFriendly","true");}
function embedScalingScript()
{if(parameters.scaletype==SCALETYPE_NONE)
{scaleSet(1);return;}
if(flagScalingScriptEmbeded){return;}
flagScalingScriptEmbeded=true;addEvent(window,'resize',onEventResize);scaleCalculate();setTimeout(scaleCalculate,500);}
function embedSupportBodyScripts()
{document.body.winParameters=function(){return{};}
document.body._pnConfig=new Array();window._pnConfig=new Array();if(parameters==null||parameters.allowtouchmove==null||parameters.allowtouchmove!="true")
{addEvent(document.body,'touchmove',function(e){e.preventDefault();});}}
function embedLib(libJs,skipDuplicateLibs,isReload,loadDelay,libsIgnoreBase)
{if(loadDelay>0)
{libsToLoad++;setTimeout(function(){embedLib(libJs,skipDuplicateLibs,true,0)},loadDelay);return;}
var duplicateFound=false;if(skipDuplicateLibs!=false||isReload!=false)
{for(var l in libList)
{if(libList[l].src==libJs)
{duplicateFound=true;if(isReload)
{libList[l].retry++;if(libList[l].retry>3)
{return;}}else{return;}}}}
if(!duplicateFound)
{if(!isReload){libsToLoad++;}
libList[libList.length]={src:libJs,retry:0};}
var libscript=document.createElement("script");libscript.setAttribute('type','text/javascript');libscript.src=libsIgnoreBase==true?libJs:fixUrl(libJs);addEvent(libscript,"load",onEventLibLoaded);addEvent(libscript,"error",onEventLibError);doc.getElementsByTagName('head').item(0).appendChild(libscript);}
function addMetaTag(inName,inContent)
{var tMetaTag=doc.createElement('meta');tMetaTag.name=inName;tMetaTag.content=inContent;doc.getElementsByTagName('head').item(0).appendChild(tMetaTag);}
function addEvent(elem,type,eventHandle){if(elem==null||elem==undefined)return;if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}else if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle);}else{elem["on"+type]=eventHandle;}}
function removeEvent(elem,type,eventHandle){if(elem==null||elem==undefined)return;if(elem.removeEventListener){elem.removeEventListener(type,eventHandle);}else if(elem.detachEvent){elem.detachEvent("on"+type,eventHandle);}else{elem["on"+type]=null;}}
function verifyDomLoad(){if(flagDomLoaded){return;}
try{var t=doc.getElementsByTagName("body")[0].appendChild(doc.createElement("span"));t.parentNode.removeChild(t);}
catch(e){return;}
flagDomLoaded=true;var dl=domLoadFunctions.length;for(var i=0;i<dl;i++){domLoadFunctions[i]();}}
function failDomLoad(){}
function addDomLoadListeners(fnPass,fnFail)
{if(typeof win.addEventListener!=UNDEF){win.addEventListener("load",fnPass,false);win.addEventListener("error",fnFail,false);}
else if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("load",fnPass,false);doc.addEventListener("error",fnFail,false);}
else if(typeof win.attachEvent!=UNDEF){addListener(win,"onload",fnPass);addListener(win,"onerror",fnFail);}
else if(typeof win.onload=="function"){var fnOld=win.onload;win.onload=function(){fnOld();fnPass();};var fnOldFail=win.onerror;win.onerror=function(){fnOldFail();fnFail();};}
else{win.onload=fn;}}
function onReady()
{if(libsLoaded<libsToLoad)
{return;}
if(flagEmbedCalled)
{embedSupportBodyScripts();embedCSS();setTimeout(executeJsEmbed,500);}}
function executeJsEmbed()
{var tar=doc.getElementById(targetId);var app=doc.createElement('script');app.setAttribute("async","true");app.setAttribute('type','text/javascript');for(var pKey in attributes)
{if(attributes.hasOwnProperty(pKey))
{tar.setAttribute(pKey,attributes[pKey]);}}
tar.setAttribute("base",base);if(embedCustomAPIMain(tar,app)==true)
{if(appJs=="")
{return;}
_appRef=app;addEvent(_appRef,"load",onEventMainLoaded);addEvent(_appRef,"error",onEventMainError);tar.appendChild(_appRef);}}
function fixUrl(inUrl)
{if(inUrl&&inUrl.indexOf("http")<0)
{return base+inUrl;}
return inUrl;}
function getDomain(inUrl)
{var s=inUrl.substr(0,8),d;try{if(s.search('http://')<0&&s.search('https://')<0&&s.search('ftp://')<0){s="http://"+inUrl;}else{s=inUrl;}
d=s.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/)[2];}
catch(e){d="";}
return d;}
function getCustomAPI()
{if(parameters==null){return API_NONE;}
var ret=API_NONE;if(api!=null)
{var lowerCaseApi=api.toLowerCase();switch(lowerCaseApi){case "nme":ret=API_HAXE_NME;break;case "flambe":ret=API_HAXE_FLAMBE;break;case "c2":case "construct2":ret=API_CONSTRUCT_2;break;case "tresensa":ret=API_TRESENSA;break;case "playcanvas":ret=API_PLAYCANVAS;break;default:ret=API_NONE;break;}}
return ret;}
function scaleSet(pScale)
{if(pScale>scaleMax){pScale=scaleMax;}
if(parameters.scaletype!=SCALETYPE_NONE)
{var tFinalW=Math.round(widthIdeal*pScale*1000)/1000;var tFinalH=Math.round(heightIdeal*pScale*1000)/1000;var d=doc.getElementById(targetId);if(parameters.scaletype==SCALETYPE_FILL)
{d.style.width=getBrowserWidth()+"px";d.style.height=getBrowserHeight()+"px";tFinalW=getBrowserWidth();tFinalH=getBrowserHeight();}else if(parameters.scaletype==SCALETYPE_FILL_TO)
{tFinalW=Math.round(widthMax*pScale*1000)/1000;tFinalH=Math.round(heightMax*pScale*1000)/1000;if(getBrowserWidth()>tFinalW)d.style.width=tFinalW+"px";else{d.style.width=getBrowserWidth()+"px";tFinalW=getBrowserWidth();}
if(getBrowserHeight()>tFinalH)d.style.height=tFinalH+"px";else{d.style.height=getBrowserHeight()+"px";tFinalH=getBrowserHeight();}}else if(parameters.scaletype==SCALETYPE_FIT){d.style.width=tFinalW+"px";d.style.height=tFinalH+"px";d.style.left=((getBrowserWidth()/2)-(tFinalW/2))+"px";if(tFinalH<getBrowserHeight()){d.style.top=((getBrowserHeight()/2)-(tFinalH/2))+"px";}else{d.style.top='0px';}}else if(parameters.scaletype==SCALETYPE_FIT_HORIZONTAL){if(getBrowserWidth()>tFinalW)d.style.width=tFinalW+"px";else d.style.width=getBrowserWidth()+"px";d.style.height=tFinalH+"px";d.style.left=((getBrowserWidth()/2)-(tFinalW/2))+"px";}}
win.canvasScale=pScale;doc.canvasScale=pScale;_canvasScale=pScale;_canvasWidth=getBrowserWidth();_canvasHeight=getBrowserHeight();_scaledWidth=tFinalW;_scaledHeight=tFinalH;if(parameters.scaletype==SCALETYPE_FILL)
{_contentOffsetX=(getBrowserWidth()-tFinalW)/2;_contentOffsetY=(getBrowserHeight()-tFinalH)/2;}else if(parameters.scaletype==SCALETYPE_FILL_TO)
{_contentOffsetX=(tFinalW-(widthIdeal*pScale))/2;_contentOffsetY=(tFinalH-(heightIdeal*pScale))/2;}else{}}
function onEventResize(event)
{scaleCalculate();}
function scaleCalculate()
{var tWidth=getBrowserWidth();var tHeight=getBrowserHeight();var tScale=1;if(parameters.scaletype==SCALETYPE_FIT_HORIZONTAL){tScale=tWidth/widthIdeal;}else{if(tWidth/widthIdeal<tHeight/heightIdeal)tScale=tWidth/widthIdeal;else tScale=tHeight/heightIdeal;}
scaleSet(tScale);}
function getBrowserWidth()
{if(window.innerWidth){width=window.innerWidth;}
else if(document.documentElement&&document.documentElement.clientWidth!=0){width=document.documentElement.clientWidth;}
else if(document.body){width=document.body.clientWidth;}
return width;};function getBrowserHeight()
{if(window.innerHeight){return window.innerHeight;}
if(document.documentElement&&document.documentElement.clientHeight!=0){return document.documentElement.clientHeight;}
if(document.body){return document.body.clientHeight;}
return 0;};function onEventLibLoaded(event)
{libsLoaded++;if(flagDomLoaded)
{onReady();}}
function onEventLibError(event)
{embedLib(event.target.src,false,true,500,true)}
function onEventMainLoaded(event)
{embedCustomAPIPost();}
function onEventMainError(event)
{removeEvent(_appRef,"load",onEventMainLoaded);removeEvent(_appRef,"error",onEventMainError);retryCountMain++;if(retryCountMain>3)
{if(console.log){console.log("JSEmbed : Main Target retry limit reached. Load failed.");}
return;}
console.log("JSEmbed : Main Target load failed. Retrying... ("+retryCountMain+")");executeJsEmbed();}
function setPause(val)
{flagPaused=val;win.isPaused=flagPause;}
function getEmbedDiv()
{return doc.getElementById(targetId);}
function getEmbedDivId()
{return targetId;}
function setScaleMax(inScaleMax)
{if(isNaN(inScaleMax)||inScaleMax<=0){return;}
scaleMax=inScaleMax;scaleCalculate();}
function inform(inString)
{if(console.log){console.log("inform: "+inString);}
var event=new Event(inString);getEmbedDiv().dispatchEvent(event);}
function addAlertDiv(inText,inTarget)
{if(inTarget==""||inTarget==null)
{inTarget=targetId;}
var id="alertoverlay";var tar=doc.getElementById(inTarget);if(doc.getElementById(id))
{div=doc.getElementById(id);div.innerHTML="<font color=#FFFFFFF; size=6; align='center'>"+inText+"<font>";return;}
var div=doc.createElement("div");div.setAttribute("id",id);div.innerHTML="<font color=#FFFFFFF; size=6; align='center'>"+inText+"<font>";div.setAttribute("style","position:absolute; index:99999; left:5%; top:40%; text-align:'center'; text-shadow:1px 1px 1px black; ");tar.appendChild(div);}
function removeAlertDiv(inTarget)
{if(inTarget==""||inTarget==null)
{inTarget=targetId;}
var id="alertoverlay";var targ=doc.getElementById(inTarget);if(doc.getElementById(id))
{div=doc.getElementById(id);targ.removeChild(div);return;}}
return{exists:function()
{return true;},params:function()
{return parameters;},attr:function()
{return attributes;},baseUrl:function()
{return base;},embedDiv:function()
{return getEmbedDiv();},embedDivId:function()
{return getEmbedDivId();},isBaseCrossdomain:function()
{return flagBaseCrossdomain;},canvasWidth:function()
{return _canvasWidth;},canvasHeight:function()
{return _canvasHeight;},scaledWidth:function()
{return _scaledWidth;},scaledHeight:function()
{return _scaledHeight;},canvasScale:function()
{return _canvasScale;},contentOffsetX:function()
{return _contentOffsetX;},contentOffsetY:function()
{return _contentOffsetY;},scaleType:function()
{return parameters.scaletype==null?SCALETYPE_FIT:parameters.scaletype;},setCanvasScaleMax:function(inScaleMax)
{setScaleMax(inScaleMax);},setCanvasOffset:function(inOffsetX,inOffsetY)
{_contentOffsetX=inOffsetX;_contentOffsetY=inOffsetY;},embed:function(inAppJs,inTarget,inWidth,inHeight,inParams,inAttributes)
{if(console.log){console.log("[jsEmbed] v"+VERSION);}
appJs=inAppJs;targetId=inTarget;attributes=inAttributes;parameters=inParams;flagEmbedCalled=true;api="";if(parameters.haxeapi!=null)
{api=parameters.haxeapi;}else if(parameters.api!=null)
{api=parameters.api;}
widthIdeal=inWidth;heightIdeal=inHeight;if(parameters.indexroot==null)
{flagIndexRoot=false;}else{flagIndexRoot=parameters.indexroot=="true";}
if(parameters.scaletype==null)
{if(parameters.autoscale==null)
{parameters.scaletype=SCALETYPE_FIT;}else{parameters.scaletype=parameters.autoscale=="true"?SCALETYPE_FIT:SCALETYPE_NONE;}}
if(parameters.maxwidth!=null)
{widthMax=parameters.maxwidth;}
if(parameters.maxheight!=null)
{heightMax=parameters.maxheight;}
var realDomain=window.location.host;var baseDomain="";if(parameters.base==null)
{base="";baseDomain=realDomain;}else{base=parameters.base;if(base.indexOf("http")>=0)
{baseDomain=getDomain(base);}else if(flagIndexRoot)
{baseDomain=realDomain;}else
{var http=(window.location.toString().indexOf("https://")<0?"http://":"https://");base=http+realDomain+((realDomain.charAt(realDomain.length-1)=="/"||base.charAt(0)=="/")?"":"/")+base;baseDomain=realDomain;}
if(base.length>0&&base.charAt(base.length-1)!="/")
{base+="/";}}
if(console.log)
{if(base=="")
{}else{console.log("[JsEmbed] base : "+base);}}
flagBaseCrossdomain=baseDomain!=realDomain;if(flagBaseCrossdomain)
{if(console.log){console.log("[JsEmbed] Warning: Loading Crossdomain");}}
if(parameters.libs==null)
{libs=[];}else{if(typeof parameters.libs==='string'){libs=[parameters.libs];}else{libs=parameters.libs;}}
var index=0;for(var l in libs)
{embedLib(libs[l],true,false,index*250,parameters.libsIgnoreBase=="true"?true:false);index++;}
embedCustomAPIPre();if(flagDomLoaded)
{onReady();}else{}},pause:function()
{setPause(true);},unpause:function()
{setPause(false);},isPaused:function()
{return flagPaused;},inform:function(inString)
{inform(inString);},informConstructed:function()
{inform("constructed");},informtInitialized:function()
{inform("init");},informReady:function()
{inform("ready");},setDimensions:function(inWidth,inHeight)
{var tScale=1;if(inWidth/widthIdeal<inHeight/heightIdeal)tScale=inWidth/widthIdeal;else tScale=inHeight/heightIdeal;scaleSet(tScale);},setScale:function(pScale)
{scaleSet(pScale);},addMetaTag:function(inName,inContent)
{addMetaTag(inName,inContent);},addAlert:function(inText,inTarget)
{addAlertDiv(inText,inTarget);},removeAlert:function(inTarget)
{removeAlertDiv(inTarget);},enableAutoScaling:function(){embedScalingScript();},disableAutoScaling:function(){if(!flagScalingScriptEmbeded){return;}
flagScalingScriptEmbeded=false;removeEvent(window,"resize",onEventResize);},setDefaultEmbedDivStyle:function(){var tar=getEmbedDiv();tar.setAttribute("style","padding:0;-webkit-user-select: none; -ms-touch-action:none;	overflow: hidden; width:"+widthIdeal+"px;	height:"+heightIdeal+"px; -webkit-tap-highlight-color: rgba(0,0,0,0);");},getIdealDimension:function(){return{width:widthIdeal,height:heightIdeal};}};function embedCustomAPIPre()
{switch(getCustomAPI())
{case API_HAXE_FLAMBE:embedLib(appJs,true,false,0);break;case API_CONSTRUCT_2:break;case API_TRESENSA:case API_HAXE_NME:case API_NONE:default:break;}}
function embedCustomAPIMain(tar,app)
{switch(getCustomAPI())
{case API_HAXE_NME:tar.setAttribute("style","position: absolute; left: 50%;	"+(attributes.autoscale=="false"?"margin-left:-512px;":"padding:0;")+"-webkit-user-select: none; -ms-touch-action:none;	overflow: hidden; width:"+widthIdeal+"px;	height:"+heightIdeal+"px; -webkit-tap-highlight-color: rgba(0,0,0,0); data-framerate:30;");targetId="haxe:jeash";tar.setAttribute("id","haxe:jeash");tar.setAttribute("name","viewport");app.setAttribute("id","haxe:jeash:script");embedScalingScript();app.src=fixUrl(appJs);return true;case API_HAXE_FLAMBE:tar.setAttribute("style","padding:0;-webkit-user-select: none; -ms-touch-action:none;	overflow: hidden; width:"+widthIdeal+"px;	height:"+heightIdeal+"px; -webkit-tap-highlight-color: rgba(0,0,0,0); data-framerate:30;");embedScalingScript();var flambeEmbed=parameters&&parameters.flambeEmbed?parameters.flambeEmbed:base+'targets/main-html.js';win.flambe.embed([flambeEmbed],targetId);return false;case API_CONSTRUCT_2:var canvas=document.createElement("canvas");canvas.setAttribute('id','c2canvas');canvas.setAttribute('width',widthIdeal);canvas.setAttribute('height',heightIdeal);doc.getElementsByTagName("body")[0].appendChild(canvas);app.src=fixUrl(appJs);return true;case API_TRESENSA:tar.setAttribute("style","position:relative; width:"+widthIdeal+"px; height:"+heightIdeal+"px; overflow: hidden;");app.src=fixUrl(appJs);embedScalingScript();return true;case API_PLAYCANVAS:tar.setAttribute("style","position:absolute; padding:0;-webkit-user-select: none; -ms-touch-action:none;	overflow: hidden; width:"+widthIdeal+"px;	height:"+heightIdeal+"px; -webkit-tap-highlight-color: rgba(0,0,0,0); data-framerate:30;");embedScalingScript();return false;default:case API_NONE:app.src=fixUrl(appJs);return true;}
return true;}
function embedCustomAPIPost()
{switch(getCustomAPI())
{case API_CONSTRUCT_2:break;case API_TRESENSA:var tgeGame=new window[attributes.gameclass]();if(tgeGame.IsPlatformAcceptable()){tgeGame.Launch({gameDiv:targetId,initialWidth:widthIdeal,initialHeight:heightIdeal});}
break;case API_HAXE_NME:case API_HAXE_FLAMBE:case API_NONE:default:break;}}}();