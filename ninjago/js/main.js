window.isMuteSound = false;
var lang = "lang_AU";
var cnnCheckTimer = 0;
var internetStatus = 0;
var checkedAgain  = false;
var internetConnected  = true;
var isPauseClicked = false;
var isShowRotate = false;
var isShowError = false;
window.isGoldVersion = true
// var angle = screen.orientation.angle;

function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
};

function isMobileDevice()
{
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // return navigator.platform.search('Win') == -1 && navigator.platform.search('Mac') == -1;
};
var main = function ()
{

    // setInterval(function () {
    //     Update(0.05);
    // }, 50)

    var creative = $("meta[name=creative]").attr("content");
    if (isMobileDevice())
    {
        // $(".center-container").addClass("mobile").appendTo($("body"));
        $(".center-container").addClass("mobile");
        $(".background").attr("style", "visibility: visible");
        // $(".button-container").attr("style", "visibility: visible");
        $(".center-container").attr("style", "visibility: hidden");
        $(".cookie-polyci").attr("style", "visibility: visible");
        $(".cookie-polyci").addClass("cookie-polyci-mobile")
        $(".cookie-polyci").click(onClickPolicy)
        
        setButtonSize();

        $(".home").click(onClickHome)
        $(".home").attr("style", "visibility: visible");

    } else
    {
        $(".center-container").removeClass("mobile");
		$(".background").attr("style", "visibility: visible");
		$(".logo").attr("style", "visibility: visible");
        $(".cookie-polyci").attr("style", "visibility: visible");
        // showError()
        $(".cookie-polyci").click(onClickPolicy)


        $(".home").attr("style", "visibility: visible");
        $(".home").click(onClickHome)

        $(".center-container").attr("style", "visibility: hidden");
    }
    $(".quit-btn").click(onClickQuit)
    var src = "./publish_dev/index.html";
    if(window.isReviewVersion){
        src = "./publish_review/index.html"
    } else if (window.isQAVersion){
        src = "./publish_qa/index.html"
    } else if( window.isGoldVersion){
        src = "./publish_gold/index.html"
    }
    $(".creative-view").attr("src", src);
    $(".creative-view").focus();
    SetVisibilityChange()
    window.addEventListener("message", receiveMessage, false);
    window.addEventListener("resize",CheckRotate)

    window.addEventListener("touchstart", event => {
        if(event.touches.length > 1) {
            
            event.preventDefault();
            event.stopPropagation(); 
        }
    }, {passive: false});

    setInterval(CheckRotate,1000)
    if(window.innerHeight < window.innerWidth && isMobileDevice())
    ShowRotate()
    // window.addEventListener("orientationchange", orientationChange);

    let param = getUrlVars();
    //Can change param name in link but the  value of the variable should be 
    //(both upper and lower case allowed)
    //AU - australia (ENG)
    //HK - Hong Kong (Chinese)
    //TW - Taiwan (Chinese)
    //KR - Korea (Korean)
    //JP - Japan (Japanese)
    

    if(param && param["locale"]){ 
        lang = param["locale"].toLowerCase();

        if (lang === "en-au") lang="AU"
        else if (lang === "en-nz") lang="NZ"
        else if (lang === "ko-kr") lang="KR"
        else if (lang === "ja-jp") lang="JP"
        else if (lang === "zh-hk") lang="HK"
        else if (lang === "zh-tw") lang="TW"

        lang = "lang_" + lang //MIG will receive lang_ to check for message DO NOT CHANGE
    }
    setLanguage(lang)
};
$(document).ready(main);


var CheckRotate = function(){
    if(isMobileDevice()){
        if(window.innerHeight > window.innerWidth){
            HideRotate()
        }
        else{
            ShowRotate()
        } 
    }
}
var onClickMute = function(){
    if(isMuteSound){
        $(".mute").css("background-image", "url(./images/unmute.png)")
        sendMessageToMIG('mig_unMute');
    } else {
        $(".mute").css("background-image", "url(./images/mute.png)")
        sendMessageToMIG('mig_mute');
    }

    isMuteSound = !isMuteSound;

}
var ShowRotate =function(){
    if(isShowRotate)
    return;
    $(".rotate-warning").attr("style", "visibility: visible");
    sendMessageToMIG('mig_pause');
    isMigPaused = true;
    isShowRotate=true;
}
var HideRotate =function(){
    if(!isShowRotate)
    return;
    $(".rotate-warning").attr("style", "visibility: hidden");
    if(!isPauseClicked){
        sendMessageToMIG('mig_resume');
        isMigPaused = false;
    }
    isShowRotate=false;
}
var onClickPause = function(){
    $(".pause-container").attr("style", "visibility: visible");
    $(".dark-background").attr("style", "visibility: visible");
    $(".center-container").attr("style", "visibility: hidden");
    $(".resume-btn").click(onClickResume)
    $(".pause").off("click")
    sendMessageToMIG('mig_pause');
    isPauseClicked = true;
    isMigPaused = true;
}
var onClickResume = function(){
    $(".pause-container").attr("style", "visibility: hidden");
    $(".dark-background").attr("style", "visibility: hidden");
    $(".center-container").attr("style", "visibility: visible");
    $(".pause").click(onClickPause)
    $(".resume-btn").off("click")
    isPauseClicked = false;
    sendMessageToMIG('mig_resume');
    isMigPaused = false;
}
var onClickHome = function(){

}
var onClickPolicy = function(e){
    var pWidth = $(".cookie-polyci").innerWidth(); //use .outerWidth() if you want borders
   var pOffset = $(".cookie-polyci").offset(); 
   var x = e.pageX - pOffset.left;
    if(pWidth/2 > x)
        window.open("https://www.forestrygames.com/")
        else
        window.open("https://www.forestrygames.com/")
}
var onClickRetry = function(){
    $(".retry-btn").off("click")
    sendMessageToMIG('mig_load_retry');
    $(".error-container").attr("style", "visibility: hidden");
    $(".dark-background").attr("style", "visibility: hidden");
    $(".center-container").attr("style", "visibility: visible");
    isShowError = false
}
var onClickQuit = function(){
    location.reload()
}

function showError(){
    if(isShowError){
        return;
    }
    $(".error-container").attr("style", "visibility: visible");
    $(".dark-background").attr("style", "visibility: visible");
    $(".center-container").attr("style", "visibility: hidden");
    $(".lds-hourglass").attr("style", "visibility: hidden");
    $(".retry-btn").click(onClickRetry)
    isShowError = true
}

function sendMessageToMIG(event_name)
{  
    document.getElementById('creative-view').contentWindow.postMessage(event_name, '*');
}

function receiveMessage(event) {

    switch (event.data) {
        case 'mig_loading_complete':
        {
            HideLoadingScreen();
            $(".center-container").attr("style", "visibility: visible");
            
            break;
        }
        case 'mig_loading_failed':
        {
            showError();
            break;
        }
        case 'mig_set_up_language':
        {
            sendMessageToMIG(lang);
            break;
        }
        case 'site_hide_policy':
        {
            if (isMobileDevice()){
                $(".cookie-polyci").slideUp(300)
            }
            break;
        }
        case 'show_hide_policy':
        {
            if (isMobileDevice()){
                $(".cookie-polyci").slideDown(300)
            }
            break;
        }
        case 'mig_reconnect':
        {
            checkedAgain = true
            break;
        }
        default:
        {
            if(event.data.dataName && (event.data.dataName == "mig_resize" || event.data.dataName == "mig_show_pause_mute")){
                switch(event.data.dataName){
                    case "mig_show_pause_mute":
                        $(".home").slideUp(300, function(){
                            $(".mute").attr("style", "visibility: visible");
                            $(".pause").attr("style", "visibility: visible");
                            $(".mute").slideDown(300)
                            $(".pause").slideDown(300)
                            
                            $(".mute").click(onClickMute)
                            $(".pause").click(onClickPause)
                            this.remove()
                        })
                    case "mig_resize":
                        // if(event.data.rotation != 0){
                        //     $(".home").addClass("top-btn-mobile")
                        //     $(".pause").addClass("top-btn-mobile")
                        //     $(".mute").addClass("bot-btn-mobile")
                        // } else {
                        //     $(".home").removeClass("top-btn-mobile")
                        //     $(".pause").removeClass("top-btn-mobile")
                        //     $(".mute").removeClass("bot-btn-mobile")
                        // }
                        break

                }
            }
        }
    }
}
function setButtonSize(){
    $(".home").addClass("right-btn-mobile")
    $(".pause").addClass("right-btn-mobile")
    $(".mute").addClass("left-btn-mobile")


    $(".resume-btn").addClass("resume-btn-mobile")
    $(".quit-btn").addClass("quit-btn-mobile")
    
    
}
function HideLoadingScreen(){
    $(".lds-hourglass").hide()
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
function setLanguage(str){
    let language = str.substr(5,2)
    language = language.toLowerCase()
    // $(".loading-img").css("background-image", "url(./images/anim-loading_" + language + ".gif)")
    $(".quit-btn").css("background-image", "url(./images/quit_" + language + ".png)")
    $(".resume-btn").css("background-image", "url(./images/resume_" + language + ".png)")

    $(".error-text").css("background-image", "url(./images/lost_connect_" + language + ".png)")
    $(".retry-btn").css("background-image", "url(./images/retry_" + language + ".png)")
    $(".cookie-polyci").css("background-image", "url(./images/policies_" + language + ".png)")
    // console.log(document.location.href)
    // document.location.search = "?lang="+language; 
};


function SetVisibilityChange() {
    if (!this.mSetVisibilityChange) {
        this.mSetVisibilityChange = true;

        // Set the name of the hidden property and the change event for visibility
        var hidden, visibilityChange;
        if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
            hidden = "hidden";
            visibilityChange = "visibilitychange";
        }
        else if (typeof document.msHidden !== "undefined") {
            hidden = "msHidden";
            visibilityChange = "msvisibilitychange";
        }
        else if (typeof document.webkitHidden !== "undefined") {
            hidden = "webkitHidden";
            visibilityChange = "webkitvisibilitychange";
        }

        function handleVisibilityChange() {
            if (document[hidden]) {
               
                sendMessageToMIG('mig_pause');
                isMigPaused = true;
            }
            else {
                if(!isPauseClicked){
                    sendMessageToMIG('mig_resume');
                    isMigPaused = false;
                }
            }
        }

        // Warn if the browser doesn't support addEventListener or the Page Visibility API
        if (typeof document.addEventListener === "undefined" || hidden === undefined) {
            console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
        }
        else {
            // Handle page visibility change   
            document.addEventListener(visibilityChange, handleVisibilityChange, false);
        }
    }
}