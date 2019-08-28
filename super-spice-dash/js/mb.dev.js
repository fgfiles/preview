// jQuery.XDomainRequest.js
// Author: Jason Moon - @JSONMOON
// IE8+
if (!jQuery.support.cors && jQuery.ajaxTransport && window.XDomainRequest) {
  var httpRegEx = /^https?:\/\//i;
  var getOrPostRegEx = /^get|post$/i;
  var sameSchemeRegEx = new RegExp('^'+location.protocol, 'i');
  var htmlRegEx = /text\/html/i;
  var jsonRegEx = /\/json/i;
  var xmlRegEx = /\/xml/i;
  
  
  // ajaxTransport exists in jQuery 1.5+
  jQuery.ajaxTransport('text html xml json', function(options, userOptions, jqXHR){
    // XDomainRequests must be: asynchronous, GET or POST methods, HTTP or HTTPS protocol, and same scheme as calling page
    if (options.crossDomain && options.async && getOrPostRegEx.test(options.type) && httpRegEx.test(options.url) && sameSchemeRegEx.test(options.url)) {
      var xdr = null;
      var userType = (userOptions.dataType||'').toLowerCase();
      return {
        send: function(headers, complete){
          xdr = new XDomainRequest();
          if (/^\d+$/.test(userOptions.timeout)) {
            xdr.timeout = userOptions.timeout;
          }
          xdr.ontimeout = function(){
            complete(500, 'timeout');
          };
          xdr.onload = function(){
            var allResponseHeaders = 'Content-Length: ' + xdr.responseText.length + '\r\nContent-Type: ' + xdr.contentType;
            var status = {
              code: 200,
              message: 'success'
            };
            var responses = {
              text: xdr.responseText
            };
            try {
              if (userType === 'html' || htmlRegEx.test(xdr.contentType)) {
                responses.html = xdr.responseText;
              } else if (userType === 'json' || (userType !== 'text' && jsonRegEx.test(xdr.contentType))) {
                try {
                  responses.json = jQuery.parseJSON(xdr.responseText);
                } catch(e) {
                  status.code = 500;
                  status.message = 'parseerror';
                  //throw 'Invalid JSON: ' + xdr.responseText;
                }
              } else if (userType === 'xml' || (userType !== 'text' && xmlRegEx.test(xdr.contentType))) {
                var doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = false;
                try {
                  doc.loadXML(xdr.responseText);
                } catch(e) {
                  doc = undefined;
                }
                if (!doc || !doc.documentElement || doc.getElementsByTagName('parsererror').length) {
                  status.code = 500;
                  status.message = 'parseerror';
                  throw 'Invalid XML: ' + xdr.responseText;
                }
                responses.xml = doc;
              }
            } catch(parseMessage) {
              throw parseMessage;
            } finally {
              complete(status.code, status.message, responses, allResponseHeaders);
            }
          };
          // set an empty handler for 'onprogress' so requests don't get aborted
          xdr.onprogress = function(){};
          xdr.onerror = function(){
            complete(500, 'error', {
              text: xdr.responseText
            });
          };
          var postData = '';
          if (userOptions.data) {
            postData = (jQuery.type(userOptions.data) === 'string') ? userOptions.data : jQuery.param(userOptions.data);
          }
          xdr.open(options.type, options.url);
          xdr.send(postData);
        },
        abort: function(){
          if (xdr) {
            xdr.abort();
          }
        }
      };
    }
  });
}
// jQBrowser v0.2: http://davecardwell.co.uk/javascript/jquery/plugins/jquery-browserdetect/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(c/a))+String.fromCharCode(c%a+161)};while(c--){if(k[c]){p=p.replace(new RegExp(e(c),'g'),k[c])}}return p}('Ö ¡(){® Ø={\'¥\':¡(){¢ £.¥},\'©\':{\'±\':¡(){¢ £.©.±},\'¯\':¡(){¢ £.©.¯}},\'¬\':¡(){¢ £.¬},\'¶\':¡(){¢ £.¶},\'º\':¡(){¢ £.º},\'Á\':¡(){¢ £.Á},\'À\':¡(){¢ £.À},\'½\':¡(){¢ £.½},\'¾\':¡(){¢ £.¾},\'¼\':¡(){¢ £.¼},\'·\':¡(){¢ £.·},\'Â\':¡(){¢ £.Â},\'³\':¡(){¢ £.³},\'Ä\':¡(){¢ £.Ä},\'Ã\':¡(){¢ £.Ã},\'Å\':¡(){¢ £.Å},\'¸\':¡(){¢ £.¸}};$.¥=Ø;® £={\'¥\':\'¿\',\'©\':{\'±\':²,\'¯\':\'¿\'},\'¬\':\'¿\',\'¶\':§,\'º\':§,\'Á\':§,\'À\':§,\'½\':§,\'¾\':§,\'¼\':§,\'·\':§,\'Â\':§,\'³\':§,\'Ä\':§,\'Ã\':§,\'Å\':§,\'¸\':§};Î(® i=0,«=».ì,°=».í,¦=[{\'¤\':\'Ý\',\'¥\':¡(){¢/Ù/.¨(°)}},{\'¤\':\'Ú\',\'¥\':¡(){¢ Û.³!=²}},{\'¤\':\'È\',\'¥\':¡(){¢/È/.¨(°)}},{\'¤\':\'Ü\',\'¥\':¡(){¢/Þ/.¨(°)}},{\'ª\':\'¶\',\'¤\':\'ß Ñ\',\'¥\':¡(){¢/à á â/.¨(«)},\'©\':¡(){¢ «.¹(/ã(\\d+(?:\\.\\d+)+)/)}},{\'¤\':\'Ì\',\'¥\':¡(){¢/Ì/.¨(«)}},{\'¤\':\'Í\',\'¥\':¡(){¢/Í/.¨(°)}},{\'¤\':\'Ï\',\'¥\':¡(){¢/Ï/.¨(«)}},{\'¤\':\'Ð\',\'¥\':¡(){¢/Ð/.¨(«)}},{\'ª\':\'·\',\'¤\':\'å Ñ\',\'¥\':¡(){¢/Ò/.¨(«)},\'©\':¡(){¢ «.¹(/Ò (\\d+(?:\\.\\d+)+(?:b\\d*)?)/)}},{\'¤\':\'Ó\',\'¥\':¡(){¢/æ|Ó/.¨(«)},\'©\':¡(){¢ «.¹(/è:(\\d+(?:\\.\\d+)+)/)}}];i<¦.Ë;i++){µ(¦[i].¥()){® ª=¦[i].ª?¦[i].ª:¦[i].¤.Õ();£[ª]=É;£.¥=¦[i].¤;® ­;µ(¦[i].©!=²&&(­=¦[i].©())){£.©.¯=­[1];£.©.±=Ê(­[1])}ê{® Ç=Ö ë(¦[i].¤+\'(?:\\\\s|\\\\/)(\\\\d+(?:\\\\.\\\\d+)+(?:(?:a|b)\\\\d*)?)\');­=«.¹(Ç);µ(­!=²){£.©.¯=­[1];£.©.±=Ê(­[1])}}×}};Î(® i=0,´=».ä,¦=[{\'ª\':\'¸\',\'¤\':\'ç\',\'¬\':¡(){¢/é/.¨(´)}},{\'¤\':\'Ô\',\'¬\':¡(){¢/Ô/.¨(´)}},{\'¤\':\'Æ\',\'¬\':¡(){¢/Æ/.¨(´)}}];i<¦.Ë;i++){µ(¦[i].¬()){® ª=¦[i].ª?¦[i].ª:¦[i].¤.Õ();£[ª]=É;£.¬=¦[i].¤;×}}}();',77,77,'function|return|Private|name|browser|data|false|test|version|identifier|ua|OS|result|var|string|ve|number|undefined|opera|pl|if|aol|msie|win|match|camino|navigator|mozilla|icab|konqueror|Unknown|flock|firefox|netscape|linux|safari|mac|Linux|re|iCab|true|parseFloat|length|Flock|Camino|for|Firefox|Netscape|Explorer|MSIE|Mozilla|Mac|toLowerCase|new|break|Public|Apple|Opera|window|Konqueror|Safari|KDE|AOL|America|Online|Browser|rev|platform|Internet|Gecko|Windows|rv|Win|else|RegExp|userAgent|vendor'.split('|')))

var FacebookAPI = {};

FacebookAPI.loggedIn = false;
FacebookAPI.postToFeed = function() 
{
	// TRACKING
//	_gaq.push(['_trackEvent', 'Favourites', 'Facebook shares', moment.id]);
	
	var obj = {
	      method: 'feed',
	      redirect_uri: 'http://m.your-website-name.co.uk/spicy.php',
	      link: 'http://m.your-website-name.co.uk/spicy.php',
	      picture: REMOTE_PATH + "img/FB_Post_icon.png",
	      name:  "Spicy  adventure",
	      caption: "Can you handle the heat?",
	      description: "I got " + formatScore(APP.score) + " points going on an epic Spicy  adventure. Play Super Spice Dash and see if you can beat my score."
	    };
	
	FB.getLoginStatus(function(response) 
	{
		if (response.status === 'connected' || response.status === 'not_authorized' || !isIpad) 
	  	{
	  		FB.ui(obj, function(){console.log("COOL")});
		}
		else
		{
			 var appId = "#";
		     var url = "https://www.facebook.com/dialog/feed?app_id="+ appId +"&link="+obj.link+"&picture="+obj.picture+"&caption="+obj.caption+"&description="+obj.description + "&redirect_uri=" + obj.redirect_uri
			 window.location = url;
			 //, 'login', 'height=350,width=550');
		}
	});
	
	/*
    function callback(response) 
    {
       	browseMode = true;
    }
 	*/
  
}

FacebookAPI.checkLoggedIn = function(callback) 
{
	
	FB.getLoginStatus(function(response) {
	  if (response.status === 'connected') {
	  	
	  		console.log("User logged into Facebook and has APP")
	  		
		    FacebookAPI.uid = response.authResponse.userID;
			FacebookAPI.accessTocken = response.authResponse.accessToken;
		    
			FacebookAPI.loggedIn = true;
		
	  			
		     FB.api('/me', function(response) {
		      
		      FacebookAPI.data = response;
		       console.log('Facebook userdata recieved');
		       console.log(response)
		       callback();
		       
		     });
	     
		// the user is logged in and has authenticated your
		// app, and response.authResponse supplies
		// the user's ID, a valid access token, a signed
		// request, and the time the access token 
		// and signed request each expire
		       
		  } else if (response.status === 'not_authorized') {
				
			FacebookAPI.loggedIn = false;
			callback();
			// the user is logged in to Facebook, 
			// but has not authenticated your app
		  } else {
		  	
		  	FacebookAPI.loggedIn = false;
		  	callback();
			//
		    // the user isn't logged in to Facebook.
		  }
		  
		  //alert("?")
	 });
}


FacebookAPI.loginAndGetData = function(callback) 
{
	
	
	var scope = ""

	if(FacebookAPI.loggedIn)
	{
		callback();
		return;	
	}
	
	// login and then get the details..
	FB.login(function(response) {
		
	   if (response.authResponse) {
	   	
		_gaq.push(['_trackEvent', 'Spicy mcbites', 'logged in to facebook', 'logged in to facebook']);
		
	   	FacebookAPI.uid = response.authResponse.userID;
		FacebookAPI.accessTocken = response.authResponse.accessToken;

		FacebookAPI.loggedIn = true;  
		
	     console.log('User logged in Fetching your information.... ');
	     FB.api('/me', function(response) {
	     	
	       console.log(response);
	        console.log('Facebook userdata recieved');
	       FacebookAPI.data = response;
	       FacebookAPI.loggedIn = true;
	       callback();
	       
	     });
	   } else {
	     console.log('User cancelled login or did not fully authorize.');
	   }
	 }, {scope:scope});
}

FacebookAPI.loginAndGetDataAPP = function(callback) 
{
	
}


FacebookAPI.getFriendsUsingApp = function(callback) 
{
	var fqlQuery = encodeURIComponent("SELECT uid FROM user WHERE is_app_user=1 AND uid IN (SELECT uid2 FROM friend WHERE uid1 = me())");
	FB.api("/fql?q=" + fqlQuery, callback );
}

FacebookAPI.requestChallange = function(callback) 
{
	
	if(APP.score)
	{
		FB.ui({method: 'apprequests',
		  message: 'Can you handle the heat? I got ' + APP.score + ' points going on an epic Spicy  adventure. Play Super Spice Dash and see if you can beat my score.'
		}, callback);
	}
	else
	{
		
		
		FB.ui({method: 'apprequests',
		  message: 'Try a taste of adventure Come and play Super Spice Skytrak and join me on an epic Spicy  adventure. Can you handle the heat?'
		}, callback);
	}
}




FacebookAPI.createLikeButton = function(location, url)
{
    var elem = $(document.createElement("fb:like"));
    elem.attr("href", url);
    elem.attr("layout", "button_count");
    elem.attr("send", "false");
     elem.attr("show_faces", "true");
    elem.attr("width", "450");
     
    $(location).empty().append(elem);
    FB.XFBML.parse($(location).get(0));
    return elem;
}
// some browsers dont support it :/



SoundButton = function()
{
	PIXI.DisplayObjectContainer.call( this );
	
	SoundButton.instance = this;
	
	this.interactive = true;
	this.hitArea = new PIXI.Rectangle(-40,0, 40, 40);
	this.buttonMode = true;
	
	this.base = PIXI.Sprite.fromFrame("soundON.png");
	this.base.anchor.x = 1;
	
	this.over = PIXI.Sprite.fromFrame("soundOFF.png");
	this.over.anchor.x = 1;
	this.over.alpha =0;
	this.over.visible = false;
	
	this.addChild(this.base);
	this.addChild(this.over);
	
	this.mute = false;
	
	/*this.music1 = new Howl({
		urls: [REMOTE_PATH + 'snd/music1.mp3'];
	});*/
	
	/*
	this.music1 = new Howl({
	  urls: ['snd/music-2.mp3', 'snd/music1.ogg', 'sound.wav'],
	//  autoplay: true,
	  loop: true,
	  volume: 0.5,
	  onend: function() {
	    //alert('Finished!');
	  }
	});*/
	
	if(PROFILE.music)
	{
		
		this.music2 = new Howl({
		  urls: [REMOTE_PATH + 'snd/music-1.mp3', 'sound.ogg', 'sound.wav'],
		//  autoplay: true,
		  loop: true,
		  volume: 0.01,
		  onend: function() {
		    //alert('Finished!');
		  }
		});
	
	}
	else
	{
		this.visible = false;
	}
	
	if(PROFILE.sfx)
	{
		APP.pickupSound = new Howl({
		  urls: [REMOTE_PATH + 'snd/soundFX/crumbGet.mp3', 'sound.ogg', 'sound.wav']
		});
		
		APP.jumpSound = new Howl({
		  urls: [REMOTE_PATH + 'snd/soundFX/biteJump.mp3', 'sound.ogg', 'sound.wav']
		});
		
		APP.powerupSound = new Howl({
		  urls: [REMOTE_PATH + 'snd/soundFX/powerUp.mp3', 'sound.ogg', 'sound.wav']
		});
		
		
		APP.crashSound = new Howl({
		  urls: [REMOTE_PATH + 'snd/soundFX/collide_treetop.mp3', 'sound.ogg', 'sound.wav']
		});	
		
		APP.ascentionSound = new Howl({
		  urls: [REMOTE_PATH + 'snd/soundFX/levelUp.mp3', 'sound.ogg', 'sound.wav']
		});	
		
		APP.packLandSound = new Howl({
		  urls: [REMOTE_PATH + 'snd/soundFX/packLand.mp3', 'sound.ogg', 'sound.wav']
		});	
		
		APP.magnetEndSound = new Howl({
		  urls: [REMOTE_PATH + 'snd/soundFX/powerUpEnding.mp3', 'sound.ogg', 'sound.wav']
		});	
	
		APP.chargeSound = new Howl({
		  urls: [REMOTE_PATH + 'snd/soundFX/powerUpSpeed.mp3', 'sound.ogg', 'sound.wav']
		});	
		
		APP.chargeEndSound = new Howl({
		  urls: [REMOTE_PATH + 'snd/soundFX/powerUpSpeedEnd.mp3', 'sound.ogg', 'sound.wav']
		});	
		
	}
	
	/*
	if(APP.isIpad)
	{
		this.mute = true;
		this.base.setTexture(PIXI.Texture.fromFrame("img/soundOff_up.png"))
		this.over.setTexture(PIXI.Texture.fromFrame("img/soundOff_over.png"))
	}*/
	
	this.firstRun = true;
//	this.music1.play();
		
}

SoundButton.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

SoundButton.prototype.click = SoundButton.prototype.tap = function()
{
	this.mute = !this.mute;
	
	if(this.mute)
	{
		this.over.setTexture(PIXI.Texture.fromFrame("soundON.png"))
		this.base.setTexture(PIXI.Texture.fromFrame("soundOFF.png"))
		
	//	this.music1.stop();
	//	this.music2.play();
		Howler.mute();
	}
	else
	{
		this.base.setTexture(PIXI.Texture.fromFrame("soundON.png"))
		this.over.setTexture(PIXI.Texture.fromFrame("soundOFF.png"))
		
		if(APP.isIpad && this.firstRun)
		{
			this.firstRun = false;
			
		}
		
	//	this.music1.play();
	//	this.music2.stop();
		
		Howler.unmute();
	}
	
	this.over.alpha = 0;
}

SoundButton.prototype.mouseover = function()
{
	this.over.visible = true
	TweenLite.to(this.over, 0.2, {alpha:1, ease:Expo.easeOut});
}

SoundButton.prototype.mouseout = function()
{
	TweenLite.to(this.over, 0.2, {alpha:0, ease:Sine.easeOut, onComplete:function(){this.visible = false;}});	
}
			
McBiteButton = function(frame, overFrame, downFrame)
{
	PIXI.DisplayObjectContainer.call(this);
	
	var sprite = PIXI.Sprite.fromFrame(frame)
	this.addChild(sprite);
	
	sprite.anchor.x = 0.5;
	
	downFrame = downFrame || frame;
	
	if(overFrame && downFrame)
	{
		this.overFrame = PIXI.Sprite.fromFrame(overFrame);
		this.downFrame = PIXI.Sprite.fromFrame(downFrame);
		
		this.overFrame.anchor.x = 0.5;
		this.downFrame.anchor.x = 0.5;
	//	this.overFrame.position.x = 0.5;
		//this.overFrame.position.y = 1;
		//this.downFrame.position.y = 1;
		
		this.addChild(this.overFrame);
		this.addChild(this.downFrame);
		
	}
	/*
	this.background = new PIXI.Graphics();
	this.background.beginFill(0xFF0000, 0.5);
	this.background.drawRect(-150, 0, 300, 50);
	this.background.endFill();
	
	this.addChild(this.background)
	//this.pa
	
	//this.label = new PIXI.Text(labelText, {font: "35px Pathway Gothic One", fill: "black", align: "left"});
	this.label.anchor.x = 0.5;
	this.addChild(this.label);*/
}

McBiteButton.prototype = Object.create( PIXI.DisplayObjectContainer.prototype ); 


var SteveAPI = {};
SteveAPI.sevrerPath = "http://mcbites.sh75.net/rest/";

SteveAPI.submitScore = function(score, callback) 
{
	
	$.support.cors = true;
	// do some AJAX!
	console.log("Score being submitted: " + score)
	
	var scoreString = score.toString();
	var array = scoreString.split("");
	var map = ["s", "p", "i", "c", "y", "d", "r", "e", "a", "m"];
	
	// 0123456789
	// spicydream
	
	for (var i=0; i < array.length; i++) {
	  	array[i] =  map[array[i]];
	};
	
	var cross = array.join("");
	
//	console.log(scoreString, cross)
	
//	return;
	var path = SteveAPI.sevrerPath + "genHashReq?dsChk=" + cross + "&fbToken=" + FacebookAPI.accessTocken  + "&cb=" + Math.floor(Math.random() * 99999);;
	
	var data = {}//dsChk:cross,
				 //fbToken:FacebookAPI.accessTocken};
	
	$.ajax({
	  type: "POST",
	  url: path,
	  data: data,
	  crossDomain:true,
      dataType: "json",
	  success: function(data){
	  	
	  	console.log(data);
	  	if(callback)callback(data);
	  		
	  }
	});
}


SteveAPI.loginAndGetDataFromAPP = function(callback)
{
	if(FacebookAPI.loggedIn)
	{
		callback();
		return;
	}
	
	appCallback = callback;
	window.open("mcd://webapp/promptFacebookToken");
}

var appCallback;
function handleCoreAppCallback(jsonCallback) 
{
	//alert("handling callback")
	FacebookAPI.accessTocken = jsonCallback.fbtoken;
	
	if(FacebookAPI.accessTocken)
	{
		FacebookAPI.loggedIn = true;
	//	alert(FacebookAPI.accessTocken);
	
		if(appCallback)appCallback(true);
	}
	else
	{
		if(appCallback)appCallback(false);
	}
	
	return;
	SteveAPI.checkIsLoggedIn(FacebookAPI.accessTocken, function(data){
		
		//FacebookAPI.uid = response.authResponse.userID;
		//FacebookAPI.accessTocken = response.authResponse.accessToken;
		FacebookAPI.loggedIn = true;
		//alert(FacebookAPI.accessTocken);
	//	alert("LOGGED IN?");
		
		if(appCallback)appCallback();
		
		//alert( e.facebookuserData.name)
	})
}

SteveAPI.checkIsLoggedIn = function(callback) 
{
	$.support.cors = true;
	// do some AJAX!
	
	var path = SteveAPI.sevrerPath + "check-is-logged-in";
	var data = {fbToken:FacebookAPI.accessTocken};
	
	//http://mcbites.sh75.net/rest/check-is-logged-in
	$.ajax({
	  type: "POST",
	  url: path,
	  data:data,
 	  crossDomain:true,
      dataType: "json",
	  success: function(data){
	  	
	  	if(callback)callback(data);
	  	
	  }
	});
	
}

SteveAPI.getUserScore = function(callback) 
{
	
	
	$.support.cors = true;
	// do some AJAX!
	
	//console.log(FacebookAPI.accessTocken);
	
	var path = SteveAPI.sevrerPath + "get-user-score?fbToken=" + FacebookAPI.accessTocken + "&cb=" + Math.floor(Math.random() * 99999);
	
	var data = {}//path:"get-user-score", fbToken:FacebookAPI.accessTocken};
	//var test = JSON.stringify(data);
	//alert(test);
				
	$.ajax({
	  type: "GET",
	  url: path,
	  dataType: "json",
      crossDomain:true,
	  data: data,
	  success: function(data){
	  	
	  	
	  	console.log(data);
	  	
	  	if(! data.score)
	  	{
	  		data.score = {score:10};
	  		
	  	}
	  	
	  	if(callback)callback(data);
	  		
	  }
	});
	
}

SteveAPI.getTop20 = function(callback) 
{
	
	$.support.cors = true;
	// do some AJAX!
	
	var path = SteveAPI.sevrerPath + "get-public-top-scores";
	
	$.ajax({
	  type: "POST",
	  url: path,
	   crossDomain:true,
         dataType: "json",
	 // data: data,
	  success: function(data){
	  //	console.log("DATA RECIVED IN IE");
	  //	console.log(data);
	  	if(callback)callback(data);
	  		
	  }
	});
	
}

SteveAPI.getTop20Friends = function(callback) 
{
	$.support.cors = true;
	
		console.log(FacebookAPI.accessTocken);
	
	// do some AJAX!
//	console.log(ids)
	var path = SteveAPI.sevrerPath + "get-friends-scores?fbToken=" + FacebookAPI.accessTocken + "&cb=" + Math.floor(Math.random() * 99999);
	
	//var data = {facebookIds:ids.toString(),
		//		fbToken:token};
	
	var data = {fbToken:FacebookAPI.accessTocken};
				
	$.ajax({
	  type: "POST",
	  url: path,
	   crossDomain:true,
         dataType: "json",
	  data: data,
	  success: function(data){
	  	
	  	console.log(data);
	  	if(callback)callback(data);
	  		
	  }
	});
	
}

/**
 * @author matgroves
 */

var Profile = function(){
	
	
	
};

checkIsMobile = function(){
			var check = false;
			(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
			return check; 
		}
		

Profile.prototype.buildProfile = function()
{

	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1;
	
	
	this.flipTilt = isAndroid ? -1 : 1;
	
	this.noCanvas = !Modernizr.canvas;
	
	this.firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	this.mobile =  checkIsMobile();
	var userAgent = window.navigator.userAgent;
	this.msie =  ( window.navigator.userAgent.toLowerCase().indexOf('msie') != -1)
	
	this.ipad = userAgent.match(/iPad/i) != null;
	this.ipod =  userAgent.match(/iPod/i) != null;
	this.iphone = userAgent.match(/iPhone/i) != null;
	
	this.ios = 	this.ipad || this.ipod || this.iphone;
	
	this.is3g = !(window.devicePixelRatio > 1) && this.iphone;
	
	this.needsProfile = this.ipad || this.mobile;
	if(!this.ios)this.needsProfile = false;
	//this.slowDown = checkIsMobile();
	//console.log(this.flipTilt)
}


Profile.prototype.setup = function(result)
{
	//alert(result);
	if(result < 22)
	{
		this.particles = false;
		this.extra = false;
		this.drawDistance = 7000 * 0.66;
		this.trackSize = 15//32 / 2;
		this.drawPosts = false;	
		this.music = false;
		this.sfx = false;
		this.canTilt = false// !this.ios;
	}
	else
	{
		this.particles = true;
		this.extra = true;
		this.drawDistance = 7000;
		this.trackSize = 32;
		this.drawPosts = true;	
		this.music = true;
		this.sfx = true;
		this.canTilt = true;
	}
	
	if(this.mobile)
	{
		this.music = false;
		this.sfx = false;
	}
}




var BasicButton = {};

BasicButton.apply = function(button, onPressed)//, overSprite, downSprite)
{
	button.interactive = true;
	button.buttonMode = true;
	
	button.click = button.tap = onPressed;
	
	button.enable = function()
	{
		this.interactive = true;
		TweenLite.to(this, 0.3, {alpha:1, ease:Sine.easeOut});
	}
	
	button.disable = function()
	{
		this.interactive = false;
		TweenLite.to(this, 0.3, {alpha:0.6, ease:Sine.easeOut});
	}
	
	if(button.overFrame)
	{
		//button.overFrame.visible = false;
		button.overFrame.alpha = 0;
		
		button.mouseover = function(){
			
			button.overFrame.visible = true;
			TweenLite.to(button.overFrame, 0.2, {alpha:1,  overwrite:true, ease:Sine.easeOut});
		}
		
		button.mouseout = function(){
			
			TweenLite.to(button.overFrame, 0.2, {alpha:0, ease:Sine.easeOut, overwrite:true, onComplete:function(){this.visible = false;}});
		}
	}
	
	if(button.downFrame)
	{
		button.downFrame.visible = false;
		button.downFrame.alpha = 0;
		
		button.mousedown = function(){
			
			button.downFrame.visible = true;
			TweenLite.to(button.downFrame, 0.3, {alpha:1,  overwrite:true, ease:Sine.easeOut});
		}
		
		
		button.mouseup = button.mouseupoutside = function(){
			
			TweenLite.to(button.downFrame, 0.3, {alpha:0, ease:Sine.easeOut, overwrite:true, onComplete:function(){this.visible = false;}});

		}
		
	}
	
	/*
	if(button.overSprite)
	{
		button.over = PIXI.Sprite.fromFrame(overSprite);
		button.addChild(button.over);
	//	alert(overSprite)
		button.over.visible = false;
		button.over.alpha = 0;
		button.over.anchor = button.anchor;
		
		button.mouseover = function(){
			
			this.over.visible = true;
			TweenLite.to(this.over, 0.2, {alpha:1,  overwrite:true, ease:Expo.easeOut});
		}
		
		button.mouseout = function(){
			
			TweenLite.to(this.over, 0.2, {alpha:0, ease:Sine.easeOut, overwrite:true, onComplete:function(){this.visible = false;}});
		}
	}
	*/
}




/**
 * @author matgroves
 */

var Spring = function(){
	
	this.x				 = 0;
	this.ax				 = 0;
	this.dx				 = 0;
	this.tx				 = 0;

	this.max			 = 60;
	
	this.damp			 = 0.25;
	this.springiness	 = 0.9
	
};

max = 30;
damp = 0.85;
springiness = 0.09;
/*
max = 36
damp = 0.72
springiness = 0.401

max = 13
damp = 0.63
springiness = 0.369
*/
	// C O N S T R U C T O R S ---------------------------------------//
		
	// P U B L I C ---------------------------------------------------//
	
Spring.prototype.update = function()
{
	//var damp = this.damp;
	
//	var springiness = this.springiness;
//	var max = this.max;
	
	this.ax=(this.tx-this.x)*springiness;
	
	this.dx+=this.ax;
	this.dx*=damp; 
	
	if(this.dx < -max)this.dx = -max;
	else if(this.dx > max)this.dx = max;
	
	//Math2.cap(dx, -max, max);
	
	this.x+=this.dx; 
}

Spring.prototype.reset = function() 
{
	this.x = 0;
	this.ax = 0;
	this.dx = 0;
	this.tx = 0;
}
/*
 * 	param: the html element that will be scrolled
 */
PixiTrackpad = function(target, freeRollin)
{
	this.freeRollin = !!freeRollin
	this.target = target;
	this.value = 0;
	this.easingValue = 00;
	this.dragOffset = 0;
	this.dragging;
	this.speed= 0;
	this.size = 284;
	
	this.prevPosition = 0;
	
	this.valueY = 0;
	this.easingValueY = 0;
	this.dragOffsetY = 0;
	this.speedY= 0;
	this.prevPositionY = 0;
	
	this.didMove = true;
	
	this.target.interactive = true;
	
	this.target.touchstart = this.target.mousedown = this.onDown.bind(this);
	
	this.spring = new Spring();
	
	//$(this.target).mousedown($.proxy(this.onMouseDown, this));
}

// set constructor
PixiTrackpad.constructor = PixiTrackpad;

// create the functions

PixiTrackpad.prototype.unlock = function()
{
	this.locked = false;
	this.speed = 0;
	this.easingValue = this.value;
	
	//this.max = (20 * 100) - ;
}

PixiTrackpad.prototype.lock = function()
{
	this.locked = true;
}

PixiTrackpad.prototype.update = function()
{
	if(this.easingValueY > 0)this.easingValueY = 0;
	if(this.easingValueY < -this.max)this.easingValueY = -this.max;
	
	this.value = this.easingValue;
	this.valueY = this.easingValueY;
	if(this.dragging)
	{
		var newSpeed = this.easingValue - this.prevPosition;
		newSpeed *= 0.7;
		
		this.speed += (newSpeed - this.speed) *0.5;
		this.prevPosition = this.easingValue;
		
		var newSpeedY = this.easingValueY - this.prevPositionY;
		newSpeedY *= 0.7;
		
		this.speedY += (newSpeedY - this.speedY) *0.5;
		this.prevPositionY = this.easingValueY;
	}
	else
	{
		if(this.freeRollin)
		{
			this.spring.update();
			this.easingValue = this.spring.x;
		}
		else
		{
			
			this.speed *= 0.95;
			this.easingValue +=  this.speed;
		
			this.speedY *= 0.95;
			this.easingValueY +=  this.speedY;
		}
	}
}

PixiTrackpad.prototype.setPosition = function(value, valueY)
{
	this.value = this.easingValue = value;
	this.valueY = this.easingValueY = valueY;
}

PixiTrackpad.prototype.onDown = function(data)
{
	if(this.locked)return;
	
	this.didMove = false;
	this.checkX = data.global.x;
	
	max = 30;
	damp = 0.85;
	springiness = 0.09;
	
	this.dragging = true;
	this.dragOffset = data.global.x - this.value;	
	this.dragOffsetY = data.global.y - this.valueY;	
	
	this.target.touchend = this.target.touchendoutside = this.target.mouseup = this.target.mouseupoutside = this.onUp.bind(this);
	this.target.touchmove = this.target.mousemove = this.onMove.bind(this);
	
}

PixiTrackpad.prototype.onUp = function(data)
{
	if(this.locked)return;
	
	this.dragging = false;
	
	
	if(this.didMove)
	{
		this.spring.dx = this.speed;
		if(this.speed < 0)
		{
			this.spring.tx = Math.floor(this.easingValue / this.size) * this.size ;
		}
		else
		{
			this.spring.tx = Math.ceil(this.easingValue / this.size) * this.size ;
		}
	
	}
	this.spring.x = this.easingValue;
			
	this.target.mouseup = null;
	this.target.mousemove = null;
	
	// goto the closest!
	
}

PixiTrackpad.prototype.onMove = function(data)
{
	
	var dist = Math.abs(this.checkX - data.global.x);
	
	if(dist > 2)this.didMove = true;
	
	this.easingValue = (data.global.x - this.dragOffset);
	this.easingValueY = (data.global.y - this.dragOffsetY);
}





SimpleApp = function(container)
{
	this.container = container;
	this.screens = {};
	this.currentScreen;
	this.fading = false;
	
	this.w = $(window).width(); 
	this.h = $(window).height(); 
	
	this.white = new PIXI.Graphics();
	this.white.beginFill(0xFFFFFF);
	this.white.drawRect(0, 0, 100, 100);
	
	//this.white.visible = false;
	//this.white.alpha = 0;
	this.zoomy = new PIXI.DisplayObjectContainer();
	this.container.addChild(this.zoomy);
	this.container.addChild(this.white);
}

SimpleApp.constructor = SimpleApp;

SimpleApp.prototype.gotoScreenByID = function(id)
{
	this.gotoScreen(this.screens[id]);
}

SimpleApp.prototype.gotoScreen = function(screen, instant)
{
	if(this.currentScreen == screen)return;
	
	this.nextScreen = screen;
	
	if(this.fading)return;
		//console.log("!!")
	
	this.fading = true;
	
	if(this.nextScreen.onShow)this.nextScreen.onShow();
	
	if(this.currentScreen)
	{
		if(this.currentScreen.onHide)this.currentScreen.onHide();
		var scaley = 1.1
		this.white.visible = true;
		TweenLite.to(this.white, 0.4, {alpha:1, onComplete:$.proxy(this.onFadeout, this)});
		TweenLite.to(this.zoomy.scale,0.8, {x:scaley, y:scaley, ease:Cubic.easeOut});
		TweenLite.to(this.zoomy.position, 0.8, {x:this.w/2 - (this.w*scaley)/2, y:this.h/2 - (this.h*scaley)/2,ease:Cubic.easeOut});
		/*
		if(instant)
		{
		}
		else
		{
			TweenLite.to(this.currentScreen, 0.4, {alpha:0, onComplete:$.proxy(this.onFadeout, this)})
		}
		*/
		// hide!
		// tween out on faded... show next!
		
	}
	else
	{
		this.onFadeout();
	}
}

SimpleApp.prototype.onFadeout = function()
{
	if(this.currentScreen)
	{
		if(this.currentScreen.onHidden)this.currentScreen.onHidden();
		this.zoomy.removeChild(this.currentScreen);
	}
	
	
	
	this.currentScreen = this.nextScreen;
	//if(this.currentScreen.onShow)this.currentScreen.onShow();
	//console.log(this.currentScreen)
//	this.currentScreen.alpha = 0;
	if(this.currentScreen.resize)this.currentScreen.resize(this.w, this.h);
	
	TweenLite.to(this.white, 0.4, {alpha:0, onComplete:$.proxy(this.onFadein, this)})
	
	TweenLite.to(this.zoomy.scale, 0.8, {x:1, y:1,ease:Expo.easeOut});
	TweenLite.to(this.zoomy.position, 0.8, {x:0, y:0,ease:Expo.easeOut});
	
	//this.zoomy.
	this.zoomy.addChildAt(this.currentScreen, 0);
	
}

SimpleApp.prototype.onFadein = function()
{
	this.white.visible = false;
	this.fading = false;
	if(this.currentScreen.onShown)this.currentScreen.onShown();
	
	if(this.currentScreen != this.nextScreen)
	{
		this.gotoScreen(this.nextScreen);
	}
}

SimpleApp.prototype.resize = function(w, h)
{
	this.w = w;
	this.h = h;
	this.white.scale.x = w/100;
	this.white.scale.y = h/100;
//	this.zoomy.position.x = w/2;
	//this.zoomy.position.y = h/2;
	this.currentScreen
	if(this.currentScreen)if(this.currentScreen.resize)this.currentScreen.resize(w, h);
}

Startup = function()
{
	
	// tutorials..
	// stress test!
	this.loaderLoader = new PIXI.AssetLoader([REMOTE_PATH + "img/UI/loaderCrumbScale.png",
											  REMOTE_PATH + "img/UI/loaderPanel.png",
											  REMOTE_PATH + "img/UI/intro_BG.jpg",
											  REMOTE_PATH + "img/loadingText.png"
											  ], true)
	
	this.loaderLoader.onComplete = this.onLoaderLoaded.bind(this);
	
	if(APP.profile.mobile)
	{
	
	this.loader = new PIXI.AssetLoader([REMOTE_PATH + "img/pickups/magnet/magnetTexture.json",
										REMOTE_PATH + "img/UI/uiSpriteSheet.json",
										REMOTE_PATH + "img/player/ballSpriteSheet.json",
										REMOTE_PATH + "img/tutorial/tutorial.json",
										REMOTE_PATH + "img/pickups/pickups.json",
									
										REMOTE_PATH + "img/UI/HOME_mobile_panelBG.png",
										REMOTE_PATH + "img/UI/intro_heroPack.png",
										REMOTE_PATH + "img/UI/HOME_desktop_logo.png",
										REMOTE_PATH + "img/UI/HOME_mobile_play.png",
										REMOTE_PATH + "img/UI/HOME_mobile_more.png",
										REMOTE_PATH + "img/UI/HOME_mobile_leaderboard.png"
										], true);
	}
	else
	{
		
	
	this.loader = new PIXI.AssetLoader([REMOTE_PATH + "img/pickups/magnet/magnetTexture.json",
										REMOTE_PATH + "img/UI/uiSpriteSheet.json",
										REMOTE_PATH + "img/tutorial/tutorial.json",
										REMOTE_PATH + "img/player/ballSpriteSheet.json",
										REMOTE_PATH + "img/pickups/pickups.json",
										REMOTE_PATH + "img/UI/intro_vidPanel_base.png",
										REMOTE_PATH + "img/UI/intro_heroPack.png",
										REMOTE_PATH + "img/UI/HOME_desktop_logo.png",
										REMOTE_PATH + "img/UI/intro_vidPanel_TEMP.png",
										REMOTE_PATH + "img/UI/HOME_desktop_play.png",
										REMOTE_PATH + "img/UI/HOME_desktop_more.png",
										REMOTE_PATH + "img/UI/HOME_desktop_leaderboard.png"
										], true);
										
	}
	
		
	APP.loader = this.loader;
	APP.loader.loadCount = APP.loader.assetURLs.length;
	APP.loadingScreen = new LoadingScreen();
	
	
	this.loader.addEventListener( 'onComplete', function ( event ) 
	{
		
		
		APP.highscoreScreen = new HighscoreScreen();
	
		APP.gameoverScreen = new GameoverScreen();
		APP.leaderboardScreen = new LeaderboardScreen();
	
//		simpleApp.gotoScreen(titleScreen);

		//gameScreen = new GAME.Game();
		
		if(APP.profile.mobile)
		{
			APP.titleScreen = new MobileTitleScreen();
		}
		else
		{
			APP.titleScreen = new TitleScreen();
		}
		
		
		APP.gameScreen = new GameScreen();
		
		transition = new TransitionAnimation();
		APP.stage.addChildAt(transition, 1);
		//APP.simpleApp.gotoScreen(APP.gameScreen);
		APP.simpleApp.gotoScreen(APP.titleScreen);
		
		
		if(!!('ondevicemotion' in window))
		{
			APP.tiltAvailable = true;
		//	alert("TILT")
		}
		
		if(!!('ontouchstart' in window))
		{
			APP.touchAvailable = true;
		}
		
		if(APP.tiltAvailable && APP.touchAvailable)
		{
			// need a menu!
			APP.controlOverlay = new ControlSelectOverlay();
			APP.stage.addChild(APP.controlOverlay);
			APP.controlOverlay.visible = false;
		}
	
		
		
		
		APP.resize(APP.w,APP.h);
		
	} );
}

Startup.constructor = Startup;

Startup.prototype.run = function()
{
	
	this.loaderLoader.load();
	
	/*try
	{
		FacebookAPI.checkLoggedIn(this.onLoginCheckComplete.bind(this))
	}
	catch(e)
	{
		
	}*/

	
      
	
}

Startup.prototype.onLoaderLoaded = function()
{
	APP.simpleApp.gotoScreen(APP.loadingScreen);
	
	APP.background = PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/intro_BG.jpg", true);
		APP.background.anchor.x = APP.background.anchor.y = 0.5;
		APP.stage.addChildAt(APP.background, 0);
		
	APP.background.alpha = 0;
	TweenLite.to(APP.background, 0.3, {alpha:1, ease:Sine.easeOut});
	APP.resize(APP.w,APP.h);
	
	
	//font-family: 'Pathway Gothic One', sans-serif;
	WebFontConfig = {
	  google: {
	    families: [ 'Pathway+Gothic+One::latin' ]
	  },

	  active: function() {
	    // do something
	    World.processAll(function(){
	    	
		    this.loader.load();
		    
	    }.bind(this));
	    
	  }.bind(this)

	};
	(function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
            '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();
}

Startup.prototype.onLoginCheckComplete = function()
{
//	console.log("!!!")
	
}

LoadingScreen = function()
{
	PIXI.DisplayObjectContainer.call(this);
	
	this.loading = PIXI.Sprite.fromImage(REMOTE_PATH + "img/loading.png", true)
	//this.addChild(	this.loading);
	
	this.crumb =  PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/crumbScale.png", true)
	this.crumbPanal =  PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/loaderPanel.png", true)
	this.loadingText =  PIXI.Sprite.fromImage(REMOTE_PATH + "img/loadingText.png", true)
	
	this.crumbPanal.addChild(this.crumb);
	
	
	this.crumbPanal.anchor.x = this.crumbPanal.anchor.y = 0.5;
	this.crumb.anchor.x = this.crumb.anchor.y = 0.5;
	this.loadingText.position.y = 100;
	this.loadingText.anchor.x = this.loadingText.anchor.y = 0.5;
	
	this.crumb.scale.x = this.crumb.scale.y = 0;
	this.target = 0;
	
	this.tint = new PIXI.Graphics();
	this.tint.beginFill(0x0, 0.5);
	this.tint.drawRect(0,0, 100, 100);
	this.addChild(this.tint);
	
	this.addChild(this.crumbPanal);
	this.addChild(this.loadingText);
	this.count = 0;
}

LoadingScreen.constructor = LoadingScreen;
LoadingScreen.prototype = Object.create( PIXI.DisplayObjectContainer.prototype ); 


LoadingScreen.prototype.updateTransform = function()
{
	PIXI.DisplayObjectContainer.prototype.updateTransform.call( this );
	//console.log( World.percentLoaded())
	var p1 =  World.percentLoaded();
	var p2 = 1 - (APP.loader.loadCount / APP.loader.assetURLs.length);
	this.target += ( ((p1 + p2)*0.5) - this.target ) * 0.1;
	this.crumb.scale.x = this.crumb.scale.y = this.target;
	
	this.count += 0.1
	this.crumbPanal.scale.x = 	this.crumbPanal.scale.y = 0.8 + (Math.sin(this.count) + 1) * 0.5 * 0.1;
	
	this.crumbPanal.rotation = Math.sin(this.count/3.2) * 0.1
}


LoadingScreen.prototype.resize = function(w, h)
{
	this.crumbPanal.position.x = w/2;
	this.crumbPanal.position.y = h/2;
	
	this.loadingText.position.x = w/2;
	this.loadingText.position.y = h/2 + 80;
	
	this.tint.scale.x = w/100;
	this.tint.scale.y = h/100;
	
	
}



TitleScreen = function()
{
	PIXI.DisplayObjectContainer.call(this);
	
	this.pivot.x = -140;
	
	this.screenPanal = PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/intro_vidPanel_TEMP.png");
	this.screenPanal.anchor.x = this.screenPanal.anchor.y = 0.5;
	this.addChild(this.screenPanal);
	this.screenPanal.position.y = -55 -20;
	
	this.panal = PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/intro_vidPanel_base.png");
	this.panal.anchor.x = this.panal.anchor.y = 0.5;
	this.panal.position.y = 200-  20;
	
	this.addChild(this.panal);
	
	this.pack = PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/intro_heroPack.png");
	this.pack.position.x = -799 + 65;
	this.pack.position.y =  35 - 25 -10;
	//this.pack.scale.x = this.pack.scale.y = 0.7;
	this.addChild(this.pack);
	
	this.logo = PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/HOME_desktop_logo.png");
	this.logo.anchor.x = this.logo.anchor.y = 0.5;
	this.logo.position.x = -606 + 105 ;
	this.logo.position.y =-167 + 60;
	this.addChild(this.logo);
	
	
	this.text2 = PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/intro_BIGflava.png");
	this.text2.position.x = -600 + 10;
	this.text2.position.y = 300 -10;
	this.addChild(this.text2);
	
	this.playAgainButton = new McBiteButton("HOME_desktop_play.png", "HOME_desktop_play_press.png")//PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/HOME_desktop_play.png")///PIXI.Text("Play", {font: "35px Pathway Gothic One", fill: "#4b4b4b", align: "left"});
	
	this.productInfoButton = new McBiteButton("HOME_desktop_more.png", "HOME_desktop_more_press.png")//PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/HOME_desktop_play.png")///PIXI.Text("Play", {font: "35px Pathway Gothic One", fill: "#4b4b4b", align: "left"});
	
	this.leaderBoardButton = new McBiteButton("HOME_desktop_leaderboard.png", "HOME_desktop_leaderboard_press.png")//PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/HOME_desktop_play.png")///PIXI.Text("Play", {font: "35px Pathway Gothic One", fill: "#4b4b4b", align: "left"});
	
	this.panal.addChild(this.playAgainButton);
	this.panal.addChild(this.productInfoButton);
	this.panal.addChild(this.leaderBoardButton);
	
//	this.playAgainButton.anchor.x = this.playAgainButton.anchor.y = 0.5;
//	this.productInfoButton.anchor.x = this.productInfoButton.anchor.y = 0.5;
//	this.leaderBoardButton.anchor.x = this.leaderBoardButton.anchor.y = 0.5;
	
	this.playAgainButton.position.y = -3 - 28//07;
	this.productInfoButton.position.y = -3 - 21//07;
	this.leaderBoardButton.position.y = -3 - 21//07;
	
	this.productInfoButton.position.x = -192;
	this.playAgainButton.position.x = -0;
	this.leaderBoardButton.position.x = 190;
	
	
	//this.label.interactive = true;
	BasicButton.apply(this.playAgainButton, function(){
		_gaq.push(['_trackEvent', 'Spicy mcbites', 'Play', 'Play']);
		
		this.playAgainButton.disable();
		if(APP.controlOverlay)
		{
			
				if(!APP.controlSelected)
				{
					//alert(PROFILE.canTilt)
					if(PROFILE.canTilt)
					{
						APP.controlSelected = true;
						APP.controlOverlay.visible = true;
						APP.controlOverlay.show();
						APP.controlOverlay.onSelect = function(){
							
							APP.simpleApp.gotoScreen(APP.gameScreen)
						}
					
						return;
					
					}
					else
					{
						APP.gameScreen.game.controller.setTouch();
						APP.simpleApp.gotoScreen(APP.gameScreen)
					}
				}
				else
				{
					APP.simpleApp.gotoScreen(APP.gameScreen)
				}
			
		}
		else
		{
			APP.simpleApp.gotoScreen(APP.gameScreen)
		}
		
	}.bind(this));
	
	this.playAgainButton.disable();
	
	BasicButton.apply(this.leaderBoardButton, function(){
		
		_gaq.push(['_trackEvent', 'Spicy mcbites', 'Leaderboard clicks', 'Leaderboard clicks']);
		APP.fromTitle = true;
		APP.simpleApp.gotoScreen(APP.leaderboardScreen);
		
	});
	
	BasicButton.apply(this.productInfoButton, function(){
		_gaq.push(['_trackEvent', 'Spicy mcbites', 'Product Info clicks', 'Product Info clicks'])
		
		var url = PROFILE.mobile ? "http://m.your-website-name.co.uk/food_single_item.php?item_id=11589" : "https://www.forestrygames.com";
		window.open(url, "_blank");
	//	SteveAPI.submitScore(1000006,function(){alert("DONE")})
		//SteveAPI.checkIsLoggedIn(function(){alert("DONE")});
	//	SteveAPI.loginAndGetDataFromAPP(function(){alert("DONE")});
	//	APP.simpleApp.gotoScreen(APP.gameoverScreen)
		//var array = ["100001029602925,513618970"];
		//SteveAPI.checkIsLoggedIn(function(){alert("DONE")});
		
		//window.open("https://www.facebook.com/dialog/apprequests?app_id=&redirect_uri=your-website-nameUK://&message=Your%20message%20here&display=popup", "_self");
		
	//	var loginURL = "https://www.facebook.com/dialog/oauth?client_id=&redirect_uri=http://mcbites.sh75.net/";
		
//		window.open(loginURL, "_blank");
		
	//	https://www.facebook.com/dialog/apprequests?app_id=&redirect_uri=http://mcbites.sh75.net/&message=Your%20message%20here&display=popup
	//	SteveAPI.submitScore(1000001, function(){});
	//	checkIsLoggedIn
	
	/*
		FacebookAPI.loginAndGetData(function(){
			
			SteveAPI.checkIsLoggedIn(FacebookAPI.accessTocken, function(){
				
			
				
				
			});
				console.log("LOGGED IN")
			})
			
			
			
			
			
			
		})*/
	//	SteveAPI.submitScore(1000002, function(){console.log("DONE")})
	});
		
//	helpOverlay = new HelpOverlay();
//	this.addChild(helpOverlay);
	
	
//	this.testTitle = PIXI.Sprite.fromImage("img/testScreen-Retina.png");
//	this.testTitle.anchor.x = 0.5;
///	this.testTitle.anchor.y = 0.5;
	
//	this.addChild(this.testTitle);
	// make legals..
	
	var div = document.createElement("div");
	div.className = "legals";
	div.innerHTML = "<div style='margin-left:10px;'> Copyright ©2019 - Forestry Games</div>"
	
	
	var likeButton = document.createElement("div");
	likeButton.innerHTML = '<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fm.your-website-name.co.uk%2Fspicy.php;width=100&amp;height=21&amp;colorscheme=light&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;send=false&amp;appId=" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100px; height:21px;" allowTransparency="true"></iframe>'
	likeButton.style.position= "absolute";
	likeButton.style.right = "10px";
	likeButton.style.top = "6px";
	div.appendChild(likeButton);
	
	document.body.appendChild(div);
	
	legals = div;
	
	legals.show = function()
	{
		$(this).fadeIn();
	//	TweenLite.to(this, 0.3, {opacity:1})
	}
	
	legals.hide = function()
	{
		console.log(this);
		$(this).fadeOut();
	//	alert("!")
	//	TweenLite.to(this, 0.3, {opacity:0})
	}
	
	if(!PROFILE.ipad)
	{
		
		this.video = document.createElement("video");
		this.video.style.position = "absolute";
		this.video.style.top = 0 + "px";
		this.video.style.left = 0 + "px";
		this.video.style.zIndex = 10;
		this.video.width = 628 ;
		this.video.height = 354;
		
		if (typeof this.video.loop == 'boolean') { // loop supported
		  this.video.loop = true;
		} else { // loop property not supported
		  this.video.addEventListener('ended', function () {
		    this.currentTime = 0;
		    this.play();
		  }, false);
		}
		
		this.source =  document.createElement('source');
		
		this.source.setAttribute('src', REMOTE_PATH + "vid/video.mp4"); 
		this.video.appendChild(this.source);

	
	}
	
//	this.video.play();
  //  this.video.addEventListener('canplaythrough', this.onVideoReady.bind(this));

}

TitleScreen.prototype = Object.create( PIXI.DisplayObjectContainer.prototype ); 

TitleScreen.prototype.onShow = function()
{
	this.playAgainButton.enable();
	APP.background.visible = true;
	
}

TitleScreen.prototype.onShown = function()
{
	if(this.video)
	{
		document.body.appendChild(this.video);
		this.video.play();
		this.video.style.display = "block"
	}
}

TitleScreen.prototype.onHide = function()
{
	if(this.video)
	{
		this.video.pause();
		this.video.style.display = "none"
	}
}

TitleScreen.prototype.onHidden = function()
{
	if(this.video)
	{
		document.body.removeChild(this.video);
	}
}


TitleScreen.prototype.updateTransform = function(w, h)
{
	//PIXI.DisplayObjectContainer.proto);
	PIXI.DisplayObjectContainer.prototype.updateTransform.call(this);
	
	if(this.video)
	{
		
		this.video.style.left = this.screenPanal.worldTransform[2] - this.video.width/2 + (-2* APP.container.scale.y)  +"px";//position.x = this.
		this.video.style.top = this.screenPanal.worldTransform[5] - this.video.height/2 + (14* APP.container.scale.y) + "px";
	}
}

TitleScreen.prototype.resize = function(w, h)
{
	this.position.x = Math.floor(w/2); //+ 150;
	this.position.y = Math.floor(h/2); //- 100;
	
	if(this.video)
	{
		
		this.video.width = 628 * APP.container.scale.y;
		this.video.height = 354 * APP.container.scale.y;
	}
	
	if(PROFILE.ipad)
	{
		
		if(APP.w > APP.h)
		{
			this.scale.x = this.scale.y = 1
		}
		else
		{
			this.scale.x = this.scale.y = 540/APP.w
		}
	}
	
//	helpOverlay.position.x = w/2;
//	helpOverlay.position.y = h/2;
	
//	this.testTitle.position.x = w/2;
//	this.testTitle.position.y = h/2;
}



MobileTitleScreen = function()
{
	PIXI.DisplayObjectContainer.call(this);
	
	
	
	this.panal = PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/HOME_mobile_panelBG.png");
	this.panal.anchor.x = this.panal.anchor.y = 0.5;
	this.panal.position.y = 200-  20 + 60;
	
	this.addChild(this.panal);
	
	this.pack = PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/intro_heroPack.png");
	this.pack.anchor.x = this.pack.anchor.y = 0.5;
	
	this.pack.position.x = 0;
	this.pack.position.y = 20;
	this.pack.scale.x = this.pack.scale.y = 0.9;
	this.addChild(this.pack);
	
	this.logo = PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/HOME_desktop_logo.png");
	this.logo.anchor.x = this.logo.anchor.y = 0.5;
	this.logo.position.x = 0;
	this.logo.position.y = -220//167 + 60;
	this.addChild(this.logo);
	
	
	this.text2 = PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/intro_BIGflava.png");
	this.text2.anchor.x = this.text2.anchor.y = 0.5;
	this.text2.position.x = 0;
	this.text2.position.y = 140 
	this.addChild(this.text2);
	
	this.playAgainButton = PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/HOME_mobile_play.png")///PIXI.Text("Play", {font: "35px Pathway Gothic One", fill: "#4b4b4b", align: "left"});
	this.productInfoButton = PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/HOME_mobile_more.png")//new PIXI.Text("Product Info", {font: "35px  Pathway Gothic One", fill: "#4b4b4b", align: "left"});
	this.leaderBoardButton = PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/HOME_mobile_leaderboard.png")//new PIXI.Text("Leaderboard", {font: "35px  Pathway Gothic One", fill: "#4b4b4b", align: "left"});
	
	this.panal.addChild(this.playAgainButton);
	this.panal.addChild(this.productInfoButton);
	this.panal.addChild(this.leaderBoardButton);
	
	
	this.playAgainButton.anchor.x = this.playAgainButton.anchor.y = 0.5;
	this.productInfoButton.anchor.x = this.productInfoButton.anchor.y = 0.5;
	this.leaderBoardButton.anchor.x = this.leaderBoardButton.anchor.y = 0.5;
	
	this.playAgainButton.position.y = -30//07;
	this.productInfoButton.position.y = 34//07;
	this.leaderBoardButton.position.y = 34//07;
	
	this.productInfoButton.position.x = 85;
	this.playAgainButton.position.x = 1;
	this.leaderBoardButton.position.x = -85;
	
	
	//this.label.interactive = true;
	BasicButton.apply(this.playAgainButton, function(){
		
		this.playAgainButton.disable();
		
		if(APP.controlOverlay)
		{
			
				if(!APP.controlSelected)
				{
					//alert(PROFILE.canTilt)
					if(PROFILE.canTilt)
					{
						APP.controlSelected = true;
						APP.controlOverlay.visible = true;
						APP.controlOverlay.show();
						APP.controlOverlay.onSelect = function(){
							
							APP.simpleApp.gotoScreen(APP.gameScreen)
						}
					
						return;
					
					}
					else
					{
						APP.gameScreen.game.controller.setTouch();
						APP.simpleApp.gotoScreen(APP.gameScreen)
					}
				}
				else
				{
					APP.simpleApp.gotoScreen(APP.gameScreen)
				}
			
		}
		else
		{
			APP.simpleApp.gotoScreen(APP.gameScreen)
		}
		
	}.bind(this));
	
	this.playAgainButton.disable();
	
	BasicButton.apply(this.leaderBoardButton, function(){
		
		APP.fromTitle = true;
		APP.simpleApp.gotoScreen(APP.leaderboardScreen)
	});
	
	BasicButton.apply(this.productInfoButton, function(){
		
		window.open("http://m.your-website-name.co.uk/food_single_item.php?item_id=11589", "_blank")
	//	SteveAPI.submitScore(1000006,function(){alert("DONE")})
		//SteveAPI.checkIsLoggedIn(function(){alert("DONE")});
	//	SteveAPI.loginAndGetDataFromAPP(function(){alert("DONE")});
	//	APP.simpleApp.gotoScreen(APP.gameoverScreen)
		//var array = ["100001029602925,513618970"];
		//SteveAPI.checkIsLoggedIn(function(){alert("DONE")});
		
		//window.open("https://www.facebook.com/dialog/apprequests?app_id=&redirect_uri=your-website-nameUK://&message=Your%20message%20here&display=popup", "_self");
		
	//	var loginURL = "https://www.facebook.com/dialog/oauth?client_id=&redirect_uri=http://mcbites.sh75.net/";
		
//		window.open(loginURL, "_blank");
		
	//	https://www.facebook.com/dialog/apprequests?app_id=&redirect_uri=http://mcbites.sh75.net/&message=Your%20message%20here&display=popup
	//	SteveAPI.submitScore(1000001, function(){});
	//	checkIsLoggedIn
	
	/*
		FacebookAPI.loginAndGetData(function(){
			
			SteveAPI.checkIsLoggedIn(FacebookAPI.accessTocken, function(){
				
			
				
				
			});
				console.log("LOGGED IN")
			})
			
			
			
			
			
			
		})*/
	//	SteveAPI.submitScore(1000002, function(){console.log("DONE")})
	});
		
//	helpOverlay = new HelpOverlay();
//	this.addChild(helpOverlay);
	
	
//	this.testTitle = PIXI.Sprite.fromImage("img/testScreen-Retina.png");
//	this.testTitle.anchor.x = 0.5;
///	this.testTitle.anchor.y = 0.5;
	
//	this.addChild(this.testTitle);
	var div = document.createElement("div");
	div.className = "legals";
	legals = div;
	
	legals.show = function(){}
	legals.hide = function(){}
}

MobileTitleScreen.prototype = Object.create( PIXI.DisplayObjectContainer.prototype ); 

MobileTitleScreen.prototype.onShow = function()
{
	this.playAgainButton.enable();
	APP.background.visible = true;
	
}


MobileTitleScreen.prototype.resize = function(w, h)
{
	this.position.x = Math.floor(w/2) //+ 150;
	this.position.y = Math.floor(h/2) //- 100;
	
//	this.scale.x = this.scale.y = 1/APP.container.scale.y;
	
//	helpOverlay.position.x = w/2;
//	helpOverlay.position.y = h/2;
	
//	this.testTitle.position.x = w/2;
//	this.testTitle.position.y = h/2;
}



HighscoreScreen = function()
{
	PIXI.DisplayObjectContainer.call(this);
	
	//this.loading = PIXI.Sprite.fromImage("img/loading.png")
//	this.addChild(	this.loading);
	this.label = new PIXI.Text("hi Mum", {font: "35px Snippet", fill: "white", align: "left"});
	this.addChild(this.label);
	
	//this.label.interactive = true;
	BasicButton.apply(this.label, this.onLoginPressed.bind(this));
	
//	this.loading.anchor.x = this.loading.anchor.y = 0.5;
//	this.loading.position.x = 400;
//	this.loading.position.y = 300;
}

HighscoreScreen.constructor = HighscoreScreen;
HighscoreScreen.prototype = Object.create( PIXI.DisplayObjectContainer.prototype ); 

HighscoreScreen.prototype.onLoginPressed = function()
{
	FacebookAPI.loginAndGetData(this.onLoginSuccess.bind(this));
}

HighscoreScreen.prototype.resize = function(w, h)
{
	this.label.position.x = w/2;
	this.label.position.y = h/2;
}

HighscoreScreen.prototype.onLoginSuccess = function(data)
{
//	console.log("LOGGED IN")
	this.label.setText(data.name);
	console.log(data)
}


GameScreen = function()
{
	PIXI.DisplayObjectContainer.call(this);
	
	this.game = new Game(this);
	
	
}

GameScreen.prototype = Object.create( PIXI.DisplayObjectContainer.prototype ); 

GameScreen.prototype.onShow = function()
{
	
	legals.hide();
	this.game.start();
	APP.lowRez();
	
	if(PROFILE.music)
	{
		if(!SoundButton.instance.musicOn)
		{
			SoundButton.instance.musicOn = true;
			SoundButton.instance.music2.play();
		}
	}
}

GameScreen.prototype.onShown = function()
{
	APP.background.visible = false;
	if(PROFILE.music)SoundButton.instance.music2.fadeIn(0.5, 1000);
}


GameScreen.prototype.onHidden = function()
{
	APP.highRez();
//	if(PROFILE.music)SoundButton.instance.music2.fadeIn(0.1, 1000);
	//APP.background.visible = true;
}

GameScreen.prototype.resize = function(w, h)
{
	this.game.resize(w,h);
}



GameoverScreen = function()
{
	
	PIXI.DisplayObjectContainer.call(this);
	
	this.tint = new PIXI.Graphics();
	this.tint.beginFill(0x0, 0.5);
	this.tint.drawRect(0,0, 100, 100);
	this.tint.visible = false;
	
	
	this.ga = new GAME.GameoverAnimation();
	this.addChild(this.ga);
	
	this.addChild(this.tint);
//	this.ga.position.x = 300;
//	this.ga.position.y = 300;
	this.ga.position.x = Math.floor((-560/2  * 0.7) +  300  * 0.7) + 12;
	this.ga.position.y = Math.floor((-877/2  * 0.7) +  300  * 0.7) + 100 ;
	
	
	this.gameoverContainer = new PIXI.DisplayObjectContainer();
	this.gameoverContainer.position.x = Math.floor(-560/2  * 0.7);
	this.gameoverContainer.position.y = Math.floor(-877/2  * 0.7);
	
	this.addChild(this.gameoverContainer);
	this.gameoverContainer.alpha = 0;
		this.gameoverContainer.visible = false;
	
	this.bg = PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/largePanel.png", true);
	this.gameoverContainer.addChild(this.bg);
	
	this.bg2 = PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/GO_panel_button-recesses.png");
	this.gameoverContainer.addChild(this.bg2)
	this.bg2.position.y = Math.floor(300  * 0.7);
	this.bg2.position.x = Math.floor(10 * 0.7);
	
	this.box = PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/GO_panel_packshot.png", true);
	this.gameoverContainer.addChild(this.box);
	
	this.boxHome = this.box.texture.frame.x;
	
	//this.loading = PIXI.Sprite.fromImage("img/loading.png")
//	this.addChild(	this.loading);
	this.submitButton = new McBiteButton("facebookSubmit.png", "facebookSubmit_press.png");
	//this.submitButton.anchor.x = 0.5;
	
	this.playAgainButton =  new McBiteButton("GO_button_play.png", "GO_button_play_press.png",  "GO_button_play_press.png");// nnew PIXI.Text("Play again", {font: "35px Snippet", fill: "white", align: "left"});
	this.productInfoButton =  new McBiteButton("GO_button_more.png", "GO_button_more_press.png",  "GO_button_more_press.png");// nnew PIXI.Text("Product Info", {font: "35px Snippet", fill: "white", align: "left"});
	this.leaderBoardButton =  new McBiteButton("GO_button_leaderboard.png", "GO_button_leaderboard_press.png",  "GO_button_leaderboard_press.png");// nnew PIXI.Text("Leaderboard", {font: "35px Snippet", fill: "white", align: "left"});
	
	this.scoreLabel = PIXI.Sprite.fromFrame("yourScore_text.png");
	
	this.scoreLabel.anchor.x = 0.5;
	this.scoreLabel.position.x = Math.floor(560/2 * 0.7);
	this.scoreLabel.position.y = Math.floor(80 * 0.7);
	
//	this.scoreText = new PIXI.Text(APP.score || 10002000, {font: "35px Pathway Gothic One", fill: "black", align: "left"});
	this.scoreText = new PIXI.Text(APP.score || 101, {font: "90px Pathway Gothic One", fill:"#de571c"});
	this.scoreText.position.x = Math.floor(560/2 * 0.7);
	this.scoreText.anchor.x = 0.5;
	this.gameoverContainer.addChild(this.scoreLabel);
	this.gameoverContainer.addChild(this.scoreText);
	
	this.scoreText.position.y = Math.floor(100 * 0.7) - 7;
	if(PROFILE.firefox)this.scoreText.position.y += 7 
	
	this.gameoverContainer.addChild(this.submitButton);
	this.gameoverContainer.addChild(this.playAgainButton);
	this.gameoverContainer.addChild(this.productInfoButton);
	this.gameoverContainer.addChild(this.leaderBoardButton);
	
	this.submitButton.position.y = Math.floor(220 * 0.7);
	this.playAgainButton.position.y = Math.floor(607  * 0.7) + 1;
	this.productInfoButton.position.y = Math.floor(749 * 0.7) -1 ;
	this.leaderBoardButton.position.y = Math.floor(676 * 0.7)+1 ;
	
	this.playAgainButton.position.x = Math.floor(274 * 0.7) +1//- this.playAgainButton.width/2;
	this.productInfoButton.position.x = Math.floor(274 * 0.7)+1//// - this.playAgainButton.width/2;
	this.leaderBoardButton.position.x = Math.floor(274 * 0.7)+1// - this.playAgainButton.width/2;
	
	this.rankSection = new RankSection()
	
	this.rankSection.position.x = Math.floor(280 * 0.7);
	this.rankSection.position.y = Math.floor(390 * 0.7);
	
	this.gameoverContainer.addChild(this.rankSection);
	//this.label.interactive = true;
	BasicButton.apply(this.playAgainButton, this.onPlayAgainPressed.bind(this));
	BasicButton.apply(this.submitButton, this.onLoginPressed.bind(this));
	BasicButton.apply(this.leaderBoardButton, function(){
		
		_gaq.push(['_trackEvent', 'Spicy mcbites', 'Leaderboard clicks', 'Leaderboard clicks']);
		APP.fromTitle = false;
		APP.simpleApp.gotoScreen(APP.leaderboardScreen)
	});
	
	BasicButton.apply(this.productInfoButton, function(){
		
		_gaq.push(['_trackEvent', 'Spicy mcbites', 'Product Info clicks', 'Product Info clicks'])
		var url = PROFILE.mobile ? "http://m.your-website-name.co.uk/food_single_item.php?item_id=11589" : "https://www.forestrygames.com";
		window.open(url, "_blank")
	});
	
	
	this.boxMask = new PIXI.Graphics();
	this.boxMask.beginFill(0xFF0000);
	this.boxMask.drawRect(0,150 * 0.7, 700 * 0.7, 460 * 0.7);
	this.boxMask.rotation = -0.03;
	this.boxMask.position.x = 1;
	this.gameoverContainer.addChild(this.boxMask);
	
	this.box.mask =this.boxMask;
//	this.loading.anchor.x = this.loading.anchor.y = 0.5;
//	this.loading.position.x = 400;
//	this.loading.position.y = 300;
	
	this.tc = new PIXI.Sprite.fromFrame("gameTsCs.png");//new PIXI.Text("Forestry Games" || 101, {font: "14px Pathway Gothic One", fill:"#000000"});
	this.gameoverContainer.addChild(this.tc);
	this.tc.anchor.x = 0.5;
//	this.tc.scale.x = this.tc.scale.y = 0.8;
	this.tc.position.x = Math.floor(560/2 * 0.7) //- 30;
	this.tc.position.y = 570+ 4;
	BasicButton.apply(this.tc, function(){
		
		window.open(APP.tc, "_blank");
		
	});
}

GameoverScreen.constructor = GameoverScreen;
GameoverScreen.prototype = Object.create( PIXI.DisplayObjectContainer.prototype ); 

GameoverScreen.prototype.onShow = function()
{
	
	if(APP.fromGame)
	{
		this.ga.visible = true;
		this.gameoverContainer.alpha = 0;
		this.gameoverContainer.visible = false;
		this.tint.visible = false;
		this.tint.alpha  = 0;
		this.ga.currentFrame = 0;
		this.ga.onComplete = this.onDropped.bind(this);
	}
	else
	{
		this.ga.visible = false;
		this.onDropped();
	}
	
	
	APP.fromGame = false;
	
	//alert(APP.pb)
	this.scoreText.setText(formatScore(APP.score || 9));
	
	if(FacebookAPI.loggedIn)
	{
		this.submitButton.visible = false;
		SteveAPI.getUserScore(this.onScoreRecieved.bind(this));
		
		this.box.position.x = Math.floor(50 * 0.7);
		this.box.position.y= Math.floor(320 * 0.7);
		this.box.anchor.x = 0.5;
		
		//this.box.texture.frame.x = this.boxHome + 210;
		//this.box.anchor.x = 0;
		this.rankSection.visible = true;
		this.rankSection.alpha = 0;
	
	}
	else
	{
		this.box.texture.frame.x = this.boxHome;
		this.submitButton.position.x = Math.floor(560/2 * 0.7);
		this.submitButton.position.y = Math.floor(235 * 0.7);
		
		this.box.anchor.x = 0.5;
		this.box.position.x = Math.floor(560/2  * 0.7);
		this.box.position.y= Math.floor(320 * 0.7);
		this.rankSection.visible = false;
		this.submitButton.visible = true;
	}
	
//	this.onDropped
	//alert("!")
}



GameoverScreen.prototype.onScoreRecieved = function(data)
{
	APP.userRank = data.rank;
	APP.userScore = data.score.score;
	APP.userName = data.score.username;
	
	this.rankSection.rankLabel.setText(APP.userRank || "n/a");
	this.rankSection.pbLabel.setText(formatScore(APP.userScore || "0") );
	this.rankSection.setData(data.score.facebookId);
	//
	console.log(APP.userName + " is ranked " + APP.userRank + " and the score is " + APP.userScore)
	
	TweenLite.to(this.rankSection, 0.3, {alpha:1}); 
	
	// show ranking!
}



GameoverScreen.prototype.onDropped = function()
{
	APP.background.visible = true;
	legals.show();
	this.ga.onComplete = null;
	this.gameoverContainer.visible = true;
	TweenLite.to(this.gameoverContainer, 0.3, {alpha:1, delay:1.1});
	
	this.tint.visible = true;
	TweenLite.to(this.tint, 0.3, {alpha:1, delay:1});
}

GameoverScreen.prototype.onPlayAgainPressed = function()
{
	_gaq.push(['_trackEvent', 'Spicy mcbites', 'Play again', 'Play again']);
	
	APP.simpleApp.gotoScreen(APP.gameScreen)
}


GameoverScreen.prototype.onLoginPressed = function()
{
	
	if(APP.inAPP)
	{
		SteveAPI.loginAndGetDataFromAPP(this.onLoginSuccess.bind(this));
	}
	else
	{
		FacebookAPI.loginAndGetData(this.onLoginSuccess.bind(this));
	}
}

GameoverScreen.prototype.onLoginSuccess = function(data)
{
	
	SteveAPI.submitScore(APP.score || 100, function(data){
		
		if(data.success)
		{
			SteveAPI.getUserScore(function(data){
				
				APP.userRank = data.rank;
				APP.userScore = data.score.score;
				APP.userName = data.score.username;
				
				console.log(APP.userName + " is ranked " + APP.userRank + " and the score is " + APP.userScore)
				
				APP.simpleApp.gotoScreen(APP.leaderboardScreen)
			});
		}
		else
		{
			APP.simpleApp.gotoScreen(APP.leaderboardScreen)
		}
		
	});
	// submit score!
	
	
//	console.log("LOGGED IN")
	//this.label.setText(data.name);
	//console.log(data)
}


GameoverScreen.prototype.resize = function(w, h)
{
	//this.scale.x = 0.75//APP.container.scale.x;
	//this.scale.y = 0.75//APP.container.scale.y;
	
	this.position.x = Math.floor(w/2) //* this.scale.x; // - (560/2 * this.scale.x);
	this.position.y = Math.floor(h/2) //* this.scale.x;// - (877/2 * this.scale.x);
	
	this.tint.scale.x = (w / 100) /// this.scale.x;
	this.tint.scale.y = (h / 100) /// this.scale.x;
	
	this.tint.position.x = (-w/2 ) /// this.scale.x;
	this.tint.position.y = (-h/2 ) /// this.scale.x;
	
	this.ga.resize(w,h);
}


RankSection = function()
{
	PIXI.DisplayObjectContainer.call(this);
	
	this.maskImage = new Image();
	this.maskImage.crossOrigin = '';
	this.maskImage.src = REMOTE_PATH + "img/bigCircleMask.png";
	
	this.canvas = document.createElement("canvas");
	this.canvas.context = this.canvas.getContext("2d");
	this.canvas.width = 100;
	this.canvas.height = 100;
	
	this.canvasTexture = PIXI.Texture.fromCanvas(this.canvas);
	
	this.image = new Image();
	this.imageSprite = new PIXI.Sprite(this.canvasTexture)//.fromImage("https://graph.facebook.com/513618970/picture?type=large");
	
	this.imageSprite.anchor.x = this.imageSprite.anchor.y = 0.5;
	this.imageSprite.position.x = 20;
	this.imageSprite.position.y = 17;
	
	this.addChild(this.imageSprite);
	
	
	this.rankLabel = new PIXI.Text("hi rank", {font: "24px Pathway Gothic One", fill: "#4b4b4b", align: "left"});
	this.pbLabel = new PIXI.Text("hi pb", {font: "24px Pathway Gothic One", fill: "#4b4b4b", align: "left"});
	this.addChild(this.rankLabel);
	this.addChild(this.pbLabel);
	
	this.rankTitle = PIXI.Sprite.fromFrame("GO_panel_rank.png");
	this.pbTitle = PIXI.Sprite.fromFrame("GO_panel_PB.png");
	
	this.addChild(this.rankTitle);
	this.addChild(this.pbTitle);
	
	this.rankTitle.position.x = Math.floor(60 * 0.7)+ 5;
	this.rankTitle.position.y = 10 - 4;
	
	this.pbTitle.position.x = Math.floor(60 * 0.7)+ 5;
	this.pbTitle.position.y = -30 - 2- 3;
	
	
	this.addChild(this.rankLabel);
	this.addChild(this.pbLabel);
	
		
	this.rankLabel.position.x = Math.floor(60 * 0.7) + 5;
	this.pbLabel.position.x = Math.floor(60 * 0.7) + 5;
	
	this.rankLabel.position.y = Math.floor(10 * 0.7) + 13- 4;
	this.pbLabel.position.y = Math.floor(-40 * 0.7) + 7- 4;
	
	
	this.recess = PIXI.Sprite.fromFrame("GO_panel_singleRecess.png");
	this.pbText = PIXI.Sprite.fromFrame("sharePBtext.png");
	this.pbText.position.x =Math.floor( 20 * 0.7) - 4;
	this.pbText.position.y = Math.floor(25 * 0.7);
	this.addChild(this.recess)
	this.recess.addChild(this.pbText);
	
	
	this.faceButton = new McBiteButton("facebook_button_up.png", "facebook_button_press.png")//PIXI.Sprite.fromFrame("facebook_button_up.png");
	this.twitterButton =  new McBiteButton("twitter_button_up.png", "twitter_button_press.png")
	
	BasicButton.apply(this.faceButton, function(){
		
		_gaq.push(['_trackEvent', 'Spicy mcbites', 'Social shares', 'Facebook']);
		FacebookAPI.postToFeed();
		
	})
	
	BasicButton.apply(this.twitterButton, function(){
		
		
		_gaq.push(['_trackEvent', 'Spicy mcbites', 'Social shares', 'Twitter']);
		//FacebookAPI.postToFeed(APP.score);
		//_gaq.push(['_trackEvent', 'Frappe', 'Twitter', '/ukhome.html']);
		var imageURL = encodeURIComponent("http://m.your-website-name.co.uk/spicy.php");
		var copy = encodeURIComponent("I got " + APP.score + " points going on an epic Spicy  adventure. Play Super Spice Dash and see if you can beat my score")
		
		var url = "https://twitter.com/intent/tweet?text="+copy+"&url=" + imageURL;
		window.open(url, "_blank", "height=300,width=550,resizable=1");
		
	})
	
	
	//PIXI.Sprite.fromFrame("button_twitter.png");
	
	this.recess.addChild(this.faceButton);
	this.recess.addChild(this.twitterButton);
	
	this.faceButton.position.x = Math.floor(187 * 0.7) + 4 + 17;
	this.faceButton.position.y = Math.floor((10-2) * 0.7) + 1;
	
	this.twitterButton.position.x = Math.floor((250-2) * 0.7) + 17;
	this.twitterButton.position.y = Math.floor((10-2) * 0.7) + 1;
	
	this.recess.position.x = Math.floor(-45 * 0.7);
	this.recess.position.y = Math.floor(95 * 0.7);
	
	
}

RankSection.prototype = Object.create( PIXI.DisplayObjectContainer.prototype ); 

RankSection.prototype.setData = function(id)
{
	this.imageSprite.scale.x = this.imageSprite.scale.y = 0;
	
	this.image.src = null;
	this.image = new Image();
	this.image.crossOrigin = '';
	this.image.onload = function(){
		
		this.canvas.context.drawImage(this.maskImage, 0, 0, 70, 70);
		this.canvas.context.globalCompositeOperation = 'source-in';
		
		var ratio1 = 70 / this.image.width;
		var ratio2 = 70 / this.image.height;
		var ratio = Math.max(ratio1, ratio2);
		
	//	console.log(ratio)
		
		this.canvas.context.drawImage(this.image, 
										35 - (this.image.width * ratio)/2,
										35 - (this.image.height * ratio)/2, 
										this.image.width * ratio, 
										this.image.height * ratio);
										
		this.canvas.context.globalCompositeOperation = 'source-over';
		
		TweenLite.to(this.imageSprite.scale, 1, {x:1, y:1, ease:Elastic.easeOut});
		
	}.bind(this);
	
	this.image.src = "https://graph.facebook.com/"+id+"/picture?type=large";
	//this.image.src = "https://graph.facebook.com/513618970/picture?type=large"
	
}
/**
 * @author Forestry Games
 */

var animData = {
	
	
	
	mc16:{view:'intro_BG.png', depth:0, startFrame:74, endFrame:89, position:[-25.6,1102.85,-25.6,837.55,-25.6,613.05,-25.6,429.35,-25.6,286.5,-25.6,184.5,-25.6,123.25,-25.6,102.85,-25.6,102.85,-25.6,102.85,-25.6,102.85,-25.6,102.85,-25.6,102.85,-25.6,102.85,-25.6,102.85]}, 
	mc1:{view:'testLineOutro.png', depth:1, startFrame:0, endFrame:8, position:[-20.55,444.5,-20.55,316.8,-20.55,189.1,-20.55,61.4,-20.55,-66.35,-20.55,-194.05,-20.55,-321.75,-20.55,-449.45], scale:[0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875]}, 
	mc2:{view:'testLineOutro.png', depth:1, startFrame:11, endFrame:19, position:[19.45,444.5,19.45,319.65,19.45,194.8,19.45,69.95,19.45,-54.9,19.45,-179.75,19.45,-304.6,19.45,-429.45], scale:[0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875]}, 
	mc3:{view:'testLineOutro.png', depth:2, startFrame:16, endFrame:22, position:[-210.55,444.5,-210.55,273.7,-210.55,102.9,-210.55,-67.85,-210.55,-238.65,-210.55,-409.45], scale:[0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875]}, 
	mc4:{view:'testLineOutro.png', depth:2, startFrame:19, endFrame:27, position:[-20.55,384.5,-20.55,276.8,-20.55,169.1,-20.55,61.4,-20.55,-46.35,-20.55,-154.05,-20.55,-261.75,-20.55,-369.45], scale:[0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875]}, 
	mc5:{view:'cloud.png', depth:0, startFrame:26, endFrame:58, position:[-58.95,580.15,-58.95,545.1,-58.95,510.1,-58.95,475.05,-58.95,440,-58.95,404.95,-58.95,369.9,-58.95,334.85,-58.95,299.8,-58.95,264.8,-58.95,229.75,-58.95,194.7,-58.95,159.65,-58.95,124.65,-58.95,89.6,-58.95,54.55,-58.95,19.5,-58.95,-15.55,-58.95,-50.55,-58.95,-85.6,-58.95,-120.65,-58.95,-155.7,-58.95,-190.75,-58.95,-225.75,-58.95,-260.85,-58.95,-295.85,-58.95,-330.9,-58.95,-365.95,-58.95,-401,-58.95,-436,-58.95,-471.05,-58.95,-506.1], scale:[0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875]}, 
	mc6:{view:'cloud.png', depth:2, startFrame:29, endFrame:45, position:[61.05,693.9,61.05,613.9,61.05,533.9,61.05,453.9,61.05,373.9,61.05,293.9,61.05,213.9,61.05,133.9,61.05,53.9,61.05,-26.1,61.05,-106.1,61.05,-186.1,61.05,-266.1,61.05,-346.1,61.05,-426.1,61.05,-506.1], scale:[1.5,1.5,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.5,1.5], alpha:[0.69921875,0.71875,0.73828125,0.7578125,0.78125,0.80078125,0.8203125,0.83984375,0.859375,0.87890625,0.8984375,0.91796875,0.94140625,0.9609375,0.98046875,1]}, 
	mc7:{view:'testLineOutro.png', depth:3, startFrame:30, endFrame:38, position:[19.45,344.5,19.45,242.5,19.45,140.5,19.45,38.5,19.45,-63.45,19.45,-165.45,19.45,-267.45,19.45,-369.45], scale:[0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875]}, 
	mc8:{view:'testLineOutro.png', depth:4, startFrame:35, endFrame:41, position:[209.45,344.5,209.45,205.7,209.45,66.9,209.45,-71.85,209.45,-210.65,209.45,-349.45], scale:[0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875]}, 
	mc9:{view:'testLineOutro.png', depth:3, startFrame:43, endFrame:51, position:[-20.55,364.5,-20.55,262.5,-20.55,160.5,-20.55,58.5,-20.55,-43.45,-20.55,-145.45,-20.55,-247.45,-20.55,-349.45], scale:[0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875]}, 
	mc10:{view:'cloud.png', depth:2, startFrame:47, endFrame:65, position:[-283.45,693.9,-283.45,618.6,-283.45,543.3,-283.45,468,-283.45,392.75,-283.45,317.45,-283.45,242.15,-283.45,166.85,-283.45,91.55,-283.45,16.25,-283.45,-59.05,-283.45,-134.35,-283.45,-209.65,-283.45,-284.95,-283.45,-360.2,-283.45,-435.5,-283.45,-510.8,-283.45,-586.1], scale:[1.5,1.5,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.5,1.5], alpha:[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5]}, 
	mc11:{view:'cloud.png', depth:0, startFrame:49, endFrame:81, position:[181.05,580.15,181.05,545.1,181.05,510.1,181.05,475.05,181.05,440,181.05,404.95,181.05,369.9,181.05,334.85,181.05,299.8,181.05,264.8,181.05,229.75,181.05,194.7,181.05,159.65,181.05,124.65,181.05,89.6,181.05,54.55,181.05,19.5,181.05,-15.55,181.05,-50.55,181.05,-85.6,181.05,-120.65,181.05,-155.7,181.05,-190.75,181.05,-225.75,181.05,-260.85,181.05,-295.85,181.05,-330.9,181.05,-365.95,181.05,-401,181.05,-436,181.05,-471.05,181.05,-506.1], scale:[0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875], alpha:[1,0.984375,0.96875,0.953125,0.93359375,0.91796875,0.90234375,0.88671875,0.87109375,0.85546875,0.83984375,0.82421875,0.8046875,0.7890625,0.7734375,0.7578125,0.7421875,0.7265625,0.7109375,0.6953125,0.67578125,0.66015625,0.64453125,0.62890625,0.61328125,0.59765625,0.58203125,0.56640625,0.546875,0.53125,0.515625,0.5]}, 
	mc12:{view:'testLineOutro.png', depth:4, startFrame:54, endFrame:62, position:[19.45,344.5,19.45,248.2,19.45,151.95,19.45,55.65,19.45,-40.6,19.45,-136.9,19.45,-233.15,19.45,-329.45], scale:[0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875]}, 
	mc13:{view:'testLineOutro.png', depth:3, startFrame:62, endFrame:68, position:[-10.55,324.5,-10.55,189.7,-10.55,54.9,-10.55,-79.85,-10.55,-214.65,-10.55,-349.45], scale:[0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875]}, 
	mc14:{view:'packRear.png', depth:0, startFrame:71, endFrame:89, position:[-2,420.5,-2,280.95,-2,162.85,-2,66.25,-2,-8.9,-2,-62.55,-2,-94.75,-2,-105.5,-2,-105.5,-2,-105.5,-2,-105.5,-2,-105.5,-2,-105.5,-2,-105.5,-2,-105.5,-2,-105.5,-2,-105.5,-2,-105.5]}, 
	//mc17:{view:'whiteGradient.png', depth:1, startFrame:74, endFrame:85, position:[-30.6,662.85,-25.25,396.95,-25.2,171.95,-25.25,-12.15,-25.25,-155.3,-25.3,-257.6,-25.25,-318.95,-30.6,-339.4,-25.85,-392.75,-25.85,-446.05,-30.6,-499.4], scale:[239.88873291015625,1,238.62222290039063,1,237.69248962402344,1,236.93478393554688,1,236.345458984375,1,235.9208526611328,1,235.66827392578125,1,235.75186157226563,1,235.7626495361328,1,235.7626495361328,1,235.75186157226563,1]}, 
	mc18:{view:'packShadow.png', depth:2, startFrame:77, endFrame:89, position:[-0.5,260,-0.5,260,-0.5,260,-0.5,260,-0.5,260,-0.5,260,-0.5,260,-0.5,260,-0.5,260,-0.5,260,-0.5,260,-0.5,260]}, 
	mc19:{view:'McBite.png', depth:6, startFrame:79, endFrame:88, position:[-30,-2.85,-57.8,-30.65,-74.5,-47.25,-80,-52.85,-80.45,-50.85,-81.6,-44.9,-83.6,-34.85,-86.45,-20.9,-90,-2.85], scale:[0.5749868879948276,0.5749868879948276,0.5745822234987104,0.5745822234987104,0.5744250492191856,0.5744250492191856,0.5749929670057295,0.5749929670057295,0.5741578255498468,0.5741578255498468,0.5741403497401855,0.5741403497401855,0.5741159777324942,0.5741159777324942,0.5740616238366861,0.5740616238366861,0.5749774230341977,0.5749774230341977], rotation:[66.74151611328125,12.821273803710938,-19.082916259765625,-29.998565673828125,-30.572891235351563,-32.34239196777344,-35.34825134277344,-39.599822998046875,-44.99781799316406]}, 
	mc0:{view:'McBite2.png', depth:0, startFrame:0, endFrame:89, position:[0,-398,0,-359.35,0,-322.45,0,-287.25,0,-253.75,0,-222,0,-191.95,0,-163.65,0,-137,0,-112.1,0,-88.95,0,-67.5,0,-47.75,0,-29.7,0,-13.4,0,1.2,0,14.1,0,25.25,0,34.7,0,42.4,0,48.4,0,52.7,0,55.3,0,56.15,0,49.75,0,43.95,0,38.65,0,33.95,0,29.75,0,26.15,0,23.1,0,20.6,0,18.65,0,17.25,0,16.45,0,16.15,0,16.35,0,16.95,0,18.1,0,19.75,0,22.05,0,25.1,0,28.9,0,33.45,0,38.6,0,44.05,0,49.4,0,54.2,0,58.15,0,61.3,0,63.55,0,65.05,0,65.9,0,66.15,0,65.1,0,61.6,0,55.1,0,45,0,30.8,0,13.05,0,-6.25,0,-23.75,0,-37.15,0,-45.9,0,-50.65,0,-52.05,0,-51.5,0,-49.95,0,-47.3,0,-43.6,0,-38.85,0,-33.05,0,-26.2,0,-18.25,0,-9.3,0,0.75,0,11.8,0,23.95,0,37.15,0,37.15,0,37.15,0,-2.85,0,-30.65,0,-47.3,0,-52.85,0,-49.25,0,-38.45,0,-20.45,0,4.75], scale:[0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875]}, 
	mc20:{view:'McBite.png', depth:7, startFrame:80, endFrame:89, position:[31,12,52.1,-24,64.8,-45.65,69,-52.8,70.05,-50.5,73.1,-43.7,78.35,-32.4,85.65,-16.35,95,4.15], scale:[0.5749861024260317,0.5749861024260317,0.5743002381616792,0.5743002381616792,0.5742013794435232,0.5742013794435232,0.5749950108752246,0.5749950108752246,0.5742031270856971,0.5742031270856971,0.5742694313769313,0.5742694313769313,0.5743995751986338,0.5743995751986338,0.574650407998059,0.574650407998059,0.5749969482421875,0.5749969482421875], rotation:[74.99862670898438,66.7001953125,61.68678283691406,59.99882507324219,61.193084716796875,64.91671752929688,70.93035888671875,79.23092651367188,90]},
	mc15:{view:'packFront.png', depth:3, startFrame:71, endFrame:89, position:[-0.5,587,-0.5,447.45,-0.5,329.35,-0.5,232.75,-0.5,157.6,-0.5,103.95,-0.5,71.75,-0.5,61,-0.5,61,-0.5,61,-0.5,61,-0.5,61,-0.5,61,-0.5,61,-0.5,61,-0.5,61,-0.5,61,-0.5,61]}
}

var GAME = GAME || {};

GAME.GameoverAnimation = function()
{
		      
	PIXI.DisplayObjectContainer.call(this);//
	
	this.sprites = [];
	for (var i in animData) 
	{
		var data = animData[i];
		
		
		if(data.view == "McBite2.png")
		{
			var textures = [];
			
			for (var i=0; i < 15; i++) {
				  var number = i + 1;
				  if(number < 10)number = "0" + number;
				  textures.push(PIXI.Texture.fromFrame("bitesFrames_"+ number + ".png"));
			};	
			var sprite = new PIXI.MovieClip(textures);
			sprite.animationSpeed = 0.5;
			sprite.play();
		}
		else if(data.view == "intro_BG.png")
		{
			var sprite = PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/intro_BG.jpg");
			var grad = PIXI.Sprite.fromFrame("whiteGradient.png");
			grad.width = 1024;
			grad.anchor.x = 0.5;
			grad.position.y = -1024/2;
			this.grad = grad;
			this.bg = sprite;
			this.bg.addChild(grad);
				
		//	var sprite2 = PIXI.Sprite.fromFrame(data.view);
		//	sprite.addChild(sprite2);
			
		}
		else
		{
			var sprite = PIXI.Sprite.fromFrame(data.view);// + ".png");
		}
		
		
		this.addChild(sprite);
		data.sprite = sprite;
		data.sprite.anchor.x = data.sprite.anchor.y = 0.5;
		sprite.visible = false;
	};
	
	this.currentFrame = 0;
}

// constructor
GAME.GameoverAnimation.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

GAME.GameoverAnimation.prototype.updateTransform = function()
{
	
	this.currentFrame += 0.5 * 1.2//* TIME.DELTA_TIME;
//	this.currentFrame %= 45;

	if(this.currentFrame >= 88)
	{
		this.currentFrame = 88;
	//	this.parent.removeChild(this);
	
		if(this.onComplete)this.onComplete();
		//return;
	}
	
	var position = this.currentFrame//(stage.interactionManager.mouse.global.x / GAME.width) * 45/// //this.currentFrame;
	
	position = Math.round(position);
	
	for(var i in animData)
	{
		var data = animData[i];
	
		
		if(position >= data.startFrame && position < data.endFrame)
		{
			//trace(">>")
			data.sprite.visible = true;
			//data.sprite.alpha  =0.5;
			var frameindex = position-data.startFrame;
			var lowIndex = Math.floor(frameindex);
			var highIndex = Math.round(frameindex);
			
			var ratio = frameindex - lowIndex;
			
			// x pos
			var positionX1 =  data.position[lowIndex * 2];
			var positionX2 =  data.position[highIndex * 2];
			
			var interX = positionX1 + (positionX2 - positionX1) * ratio;
			
			// y pos
			
			var positionY1 =  data.position[lowIndex * 2 + 1];
			var positionY2 =  data.position[highIndex * 2 + 1];
			
			var interY = positionY1 + (positionY2 - positionY1) * ratio;
			
			data.sprite.position.x = positionX1// interX
			data.sprite.position.y = positionY1//interY
			
			var interScaleX = 1;
			var interScaleY = 1;
			
			if(data.scale)
			{
				var scaleX1 =  data.scale[lowIndex * 2];
				var scaleX2 =  data.scale[highIndex * 2];
				
				interScaleX = scaleX1 + (scaleX2 - scaleX1) * ratio;
				
				var scaleY1 =  data.scale[lowIndex * 2 + 1];
				var scaleY2 =  data.scale[highIndex * 2 + 1];
				
				interScaleY = scaleY1 + (scaleY2 - scaleY1) * ratio;
				
				data.sprite.scale.x = interScaleX;
				data.sprite.scale.y = interScaleY;
			}
			
			
			
			
			var interAlpha = 1;
			
			if(data.alpha)
			{
				var alpha1 =  data.alpha[lowIndex];
				var alpha2 =  data.alpha[highIndex];
				
				
				interAlpha = alpha1 + (alpha2 - alpha1) * ratio;
				
			}
			
			data.sprite.alpha = interAlpha
			
			if(data.rotation)
			{
				
				var rotation1 =  data.rotation[lowIndex];
				var rotation2 =  data.rotation[highIndex];
				
				interRotation = rotation1 + (rotation2 - rotation1) * ratio;
				data.sprite.rotation = interRotation * (Math.PI / 180)
			}
		

		}
		else
		{
			data.sprite.visible = false;
			
		}
	}
	
	PIXI.DisplayObjectContainer.prototype.updateTransform.call(this)
	
	
}

GAME.GameoverAnimation.prototype.resize = function(w, h)
{
	this.bg.width = w;
	this.bg.scale.y = this.bg.scale.x;

}


ControlSelectOverlay = function(engine)
{
	PIXI.DisplayObjectContainer.call(this);
	
	this.bg = PIXI.Sprite.fromFrame("mobileControlMethod.png");
	this.bg.anchor.x = this.bg.anchor.y = 0.5;

	
	
	this.tint = new PIXI.Graphics();
	this.tint.beginFill(0x000, 0.7);
	this.tint.drawRect(-1000, -1000, 2000, 2000);
	this.tint.endFill();
	
	this.hitAreaView = new PIXI.Graphics();
	this.hitAreaView.beginFill(0x000, 0.7);
	this.hitAreaView.drawRect(-160, -30, 330, 100);
	this.hitAreaView.endFill();
	
	this.hitArea = new PIXI.Rectangle(-160, -30, 330, 100);
	this.interactive = true;
	
	this.click = this.tap = function(data)
	{
		var pos = data.getLocalPosition(this);
		
		if(pos.x > 0)
		{
			this.onTouchPressed();
		}
		else
		{
			this.onTiltPressed();
		}
		
	}.bind(this)
	
	this.addChild(this.tint);
	this.addChild(this.bg);
	//this.addChild(this.hitAreaView);
	
	//this.pauseMenu.addChild(this.restartButton);
	
	
	
}

ControlSelectOverlay.prototype = Object.create( PIXI.DisplayObjectContainer.prototype ); 

ControlSelectOverlay.prototype.show = function()
{
	this.tint.alpha = 0;
	this.bg.alpha = 0;
	
	TweenLite.to(this.tint, 0.4, {alpha:1});
	TweenLite.to(this.bg, 0.4, {alpha:1, delay:0.4 });
}

ControlSelectOverlay.prototype.hide = function()
{
	this.visible = false;	
}

ControlSelectOverlay.prototype.onTiltPressed = function()
{
	APP.gameScreen.game.controller.setTilt();
	this.hide();
	if(this.onSelect)this.onSelect();
}

ControlSelectOverlay.prototype.onTouchPressed = function()
{
	APP.gameScreen.game.controller.setTouch();
	this.hide();
	if(this.onSelect)this.onSelect();
}

HelpOverlay = function(engine)
{
	PIXI.DisplayObjectContainer.call(this);
	
	//this.background = new PIXI.Graphics();
	//this.background.beginFill(0xFF0000, 0.5);
	//this.background.drawRect(0, 0, 300, 300);
	//this.background.endFill();
	
	this.colorBlock = new PIXI.Graphics();
	this.colorBlock.beginFill(0xF9F6F0, 0.6);
	this.colorBlock.moveTo(4,-20)
	this.colorBlock.lineTo(300-17,-20)
	this.colorBlock.lineTo(300-17,300-3)
	this.colorBlock.lineTo(14,300-3)
	this.colorBlock.endFill();
///	this.colorBlock.position.y = -7;
	
	
	//this.masky = new PIXI.Graphics();
//	this.masky.beginFill(0xFFFF00, 1);
//	this.masky.drawRect(0, 0, 371,284);
//	this.masky.endFill();
	
	this.addChild(this.colorBlock)
	//this.addChild(this.masky)
	
	this.trackpad = new PixiTrackpad(this, true);
	
	this.pageContainer = new PIXI.DisplayObjectContainer();
	this.pageContainer.mask = this.colorBlock;
	
	this.pageContainer.position.x = -5
	this.pageContainer.position.y = -20
	this.addChild(this.pageContainer);
	
	this.pages = [];
	
	for (var i=0; i < 3; i++) {
	  
		var page =  PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/howToPlay_0"+ (((i+1)%3) + 1) +".png", true);
		this.pages.push(page);
		this.pageContainer.addChild(page);
		
	};
	
	this.label = PIXI.Sprite.fromFrame("howToPlay.png");
	this.label.anchor.x = 0.5;
	this.label.position.x = 285/2;
	this.label.position.y = -60;
	
	this.addChild(this.label);	
}

HelpOverlay.prototype = Object.create( PIXI.DisplayObjectContainer.prototype ); 

HelpOverlay.prototype.updateTransform = function()
{
	this.trackpad.update();
	//console.log(this.trackpad.spring.tx);
	//this.advertContainer.position.x = this.trackpad.value + 150;
	var max =  this.trackpad.size * this.pages.length;
	
	for (var i=0; i < this.pages.length; i++) {
		
		var page = this.pages[i];
		
		//	var mod = i % 2
		page.position.x = (i * this.trackpad.size) - (max/3) + this.trackpad.value;// + 83;
		
		page.position.x %= max
		if(page.position.x < 0) page.position.x += max;
		
		page.position.x -= this.trackpad.size;
		
	};
	/*
	// sort out menu...
	var id = Math.floor( (this.trackpad.spring.tx - 60) / this.trackpad.size ) + 1;
	id %= 3;
	if(id < 0)id += 3;
	 
	//console.log(this.advertArray.length);
	
	if(this.currentId != id)
	{
		if(this.advertArray.length > 0)
		{
			if(this.advertArray[this.currentId])this.advertArray[this.currentId].miniButton.onSprite.visible = false;
			this.currentId = id;
			this.advertArray[this.currentId].miniButton.onSprite.visible = true;
		}	
	}*/
	
	PIXI.DisplayObjectContainer.prototype.updateTransform.call(this);
}

HelpOverlay.prototype.show = function()
{
	
}

HelpOverlay.prototype.hide = function()
{
	this.visible = false;	
}

Leaderboard = function()
{
	PIXI.DisplayObjectContainer.call(this);
	
	this.list = [];
	this.realHeight = 0;
	
	for (var i=0; i < 20; i++) 
	{
	 	var scoreView = new ScoreView(i);
	 //	console.log(scoreView)
	 	this.addChild(scoreView);
	 	scoreView.position.y = i *83  * 0.7;
	 	this.list.push(scoreView)
	};
	
	
}

Leaderboard.constructor = Leaderboard;
Leaderboard.prototype = Object.create( PIXI.DisplayObjectContainer.prototype ); 

Leaderboard.prototype.setData = function(scoreData)
{
	for (var i=0; i < 20; i++) 
	{
		var scoreView = this.list[i];
		scoreView.visible = false;
		scoreView.alpha = 0;
	}
	
	this.realHeight = 0;
	
	for (var i=0; i < scoreData.length; i++) 
	{
		var scoreView = this.list[i];
		scoreView.visible = true;
		scoreView.setScore(scoreData[i]);
		
		this.realHeight += 83 * 0.7;
		
		TweenLite.to(scoreView, 0.3, {alpha:1, delay:i/8})
		//;lable.setText();
	}
	
	// set the user!
	
}

Leaderboard.prototype.resize = function(w, h)
{
}

ScoreView = function(id)
{
	PIXI.DisplayObjectContainer.call(this);
	
	this.maskImage = new Image();
	this.maskImage.crossOrigin = '';
	this.maskImage.src = REMOTE_PATH + "img/maskTest.png";
	
	this.canvas = document.createElement("canvas");
	this.canvas.context = this.canvas.getContext("2d");
	this.canvas.width = 50 * 0.7;
	this.canvas.height = 50 * 0.7;
	
	this.canvasTexture = PIXI.Texture.fromCanvas(this.canvas);
	
	this.image = new Image();
	this.imageSprite = new PIXI.Sprite(this.canvasTexture)//.fromImage("https://graph.facebook.com/513618970/picture?type=large");
	
	this.imageSprite.anchor.x = this.imageSprite.anchor.y = 0.5;
	
	this.addChild(this.imageSprite);
	
	this.labelNumber = new PIXI.Text(id+1 + ".", {font: "23px Pathway Gothic One", fill: "#4b4b4b", align: "left"});
	this.labelName = new PIXI.Text("0", {font: "21px Pathway Gothic One", fill: "#4b4b4b", align: "left"});
	this.labelScore = new PIXI.Text("0", {font: "21px Pathway Gothic One", fill: "#4b4b4b", align: "left"});
	
	this.imageSprite.position.x = (80 + 25)  * 0.7;
	this.imageSprite.position.y = (-10 + 25)  * 0.7;
	this.labelName.position.x = 180  * 0.7;
	
	this.labelScore.anchor.x = 1; 
	this.labelScore.position.x = 460 * 0.7;
	
	this.addChild(this.labelNumber);
	this.addChild(this.labelName);
	this.addChild(this.labelScore);
	
	this.divider = PIXI.Sprite.fromFrame("dividerScore.png");
	this.divider.position.y = 54 * 0.7;
	this.addChild(this.divider)

}

ScoreView.constructor = ScoreView;
ScoreView.prototype = Object.create( PIXI.DisplayObjectContainer.prototype ); 

ScoreView.prototype.setScore = function(data)
{
	if(!data.facebookId)return;
	this.imageSprite.scale.x = this.imageSprite.scale.y = 0;
	
	this.image.src = null;
	this.image = new Image();
	this.image.crossOrigin = '';
	this.image.onload = function(){
		
		this.canvas.context.drawImage(this.maskImage, 0, 0, 50 * 0.7, 50 * 0.7);
		this.canvas.context.globalCompositeOperation = 'source-in';
		
		
		var ratio1 = (50 *0.7) / this.image.width;
		var ratio2 = (50 *0.7) / this.image.height;
		var ratio = Math.max(ratio1, ratio2);
		
	//	console.log(ratio)
		
		this.canvas.context.drawImage(this.image, 
										(25 * 0.7) - (this.image.width * ratio)/2,
										(25 * 0.7) - (this.image.height * ratio)/2, 
										this.image.width * ratio, 
										this.image.height * ratio);
										
		this.canvas.context.globalCompositeOperation = 'source-over';
		
		TweenLite.to(this.imageSprite.scale, 1, {x:1, y:1, ease:Elastic.easeOut});
		
	}.bind(this);
	
	this.image.src = "https://graph.facebook.com/"+data.facebookId+"/picture?type=large"
	
	this.labelName.setText(data.username.toUpperCase());
	this.labelScore.setText(formatScore(data.score).toUpperCase());
	
	
}

LeaderboardScreen = function()
{
	PIXI.DisplayObjectContainer.call(this);
	
//	this.template = PIXI.Sprite.fromImage("img/template.jpg", true);
	this.bg = PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/largePanel.png", true);
//	this.template.position.x = -50;
//	this.template.position.y = -40;
	
	
	this.addChild(this.bg);
//	this.addChild(this.template);
	
//	this.top20Button = new PIXI.Text("Top 20", {font:"35px Pathway Gothic One", fill: "#4b4b4b", align: "left"});
	this.top20Button = PIXI.Sprite.fromFrame("top20_button_highlight.png");
	
	
	this.friend20Button = PIXI.Sprite.fromFrame("friends_button_highlight.png");//new PIXI.Text("Friends", {font:"35px Pathway Gothic One", fill: "#4b4b4b", align: "left"});
	
	this.top20Button.active = PIXI.Sprite.fromFrame("top20_button_up.png");
	this.top20Button.active.position.x = -3;
	this.top20Button.active.position.y = -1;
	this.top20Button.addChild(this.top20Button.active);
	
	this.top20Button.over = PIXI.Sprite.fromFrame("top20_button_press.png");
	this.top20Button.over.position.x = -3;
	this.top20Button.over.position.y = -1;
	this.top20Button.over.alpha = 0;
	this.top20Button.addChild(this.top20Button.over);
	this.top20Button.mouseover = function(){
	//	alert("!!")
		TweenLite.to(this.over, 0.1, {alpha:1});
	}
	
	this.top20Button.mouseout = function(){
		TweenLite.to(this.over, 0.1, {alpha:0});
	}
	
	this.friend20Button.active = PIXI.Sprite.fromFrame("friends_button_up.png");//new PIXI.Text("Friends", {font:"35px Pathway Gothic One", fill: "#4b4b4b", align: "left"});
	//this.friend20Button.active.position.x = -3;
	this.friend20Button.active.position.y = -1;
	this.friend20Button.addChild(this.friend20Button.active);
	
	this.friend20Button.over = PIXI.Sprite.fromFrame("friends_button_press.png");
	this.friend20Button.over.position.x = -3;
	this.friend20Button.over.position.y = -1;
	this.friend20Button.over.alpha = 0;
	this.friend20Button.addChild(this.friend20Button.over);
	this.friend20Button.mouseover = function(){
	//	alert("!!")
		TweenLite.to(this.over, 0.1, {alpha:1});
	}
	
	this.friend20Button.mouseout = function(){
		TweenLite.to(this.over, 0.1, {alpha:0});
	}
	//this.challangeButton = PIXI.Sprite.fromFrame("button_challenge.png");//new PIXI.Text("Challange", {font:"35px Pathway Gothic One", fill: "#4b4b4b", align: "left"});
	this.challangeButton = new McBiteButton("challenge_friends_up.png", "challenge_friends_press.png");//PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/HOME_desktop_play.png")///PIXI.Text("Play", {font: "35px Pathway Gothic One", fill: "#4b4b4b", align: "left"});
	
	//this.faceButton = PIXI.Sprite.fromFrame("button_facebook.png");
	//this.faceButton = new McBiteButton("facebook_button_up.png", "facebook_button_press.png")//PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/HOME_desktop_play.png")///PIXI.Text("Play", {font: "35px Pathway Gothic One", fill: "#4b4b4b", align: "left"});
	
	//this.twitterButton = PIXI.Sprite.fromFrame("button_twitter.png");
	
	//this.recess = PIXI.Sprite.fromFrame("leaderboard_challenge_BG.png");
	//this.addChild(this.recess);
	
//	this.addChild(this.faceButton);
///	this.addChild(this.twitterButton);
	
	//
	this.closeButton = new McBiteButton("back_button_up.png", "back_button_press.png")// PIXI.Sprite.fromFrame("back.png");//new PIXI.Text("Close", {font:"35px Pathway Gothic One", fill: "#4b4b4b", align: "left"});
	
	
	this.addChild(this.closeButton);
	this.addChild(this.top20Button);
	this.addChild(this.friend20Button);
	
	
	
	//this.recess.position.x = 200 - 130;
	//this.recess.position.y = 500 + 25
	this.addChild(this.challangeButton);
	
	
	
	this.challangeButton.position.x = Math.floor(120 * 0.7) - 7 + 125;
	this.challangeButton.position.y = Math.floor(765 * 0.7) - 5;
	
//	this.faceButton.position.x = Math.floor(364 * 0.7);
//	this.faceButton.position.y = Math.floor(765 * 0.7) - 5;
	
//	this.twitterButton.position.x = Math.floor(415 * 0.7) + 8;
//	this.twitterButton.position.y = Math.floor(765 * 0.7) -5;
	
		
	this.top20Button.position.x = Math.floor(46 * 0.7);
	this.friend20Button.position.x = Math.floor(282 * 0.7);
	
	this.top20Button.position.y = Math.floor(147 * 0.7);
	this.friend20Button.position.y = Math.floor(147 * 0.7);
	
	this.closeButton.position.x = Math.floor(490 * 0.7) + 10;
	this.closeButton.position.y = Math.floor(15 * 0.7) + 33;
	
	this.label = PIXI.Sprite.fromFrame("leaderboardTitle.png")//new PIXI.Text("LeaderBoard", {font: "35px Pathway Gothic One", fill: "white", align: "left"});
	this.label.anchor.x = 0.5;
	this.label.position.x = Math.floor((560/2) * 0.7);
			
	this.label.position.y = Math.floor(60 * 0.7);
	
	this.addChild(this.label);
	
	this.addChild(this.top20Button);
	this.addChild(this.friend20Button);
	
	this.leaderboardContainer = new PIXI.DisplayObjectContainer();
	this.addChild(this.leaderboardContainer)
	this.leaderboardContainer.position.x = Math.floor(55 * 0.7);
	this.leaderboardContainer.position.y =  Math.floor(220 * 0.7);
	
	
	
	this.leaderboardMask = new PIXI.Graphics();
	this.leaderboardMask.beginFill(0xFF0000);
	this.leaderboardMask.drawRect(0,-30 * 0.7, 700 * 0.7, 423 * 0.7);
	
	/*
	 * MASK BUG IN CANVAS
	 */
	this.leaderboardContainer.addChild(this.leaderboardMask);
	this.leaderboard = new Leaderboard();
	this.leaderboardContainer.hitArea = new PIXI.Rectangle(0,0, 700 * 0.7, 423 * 0.7);
	
	this.leaderboardContainer.addChild(this.leaderboard);
	//this.leaderboard.mask = this.leaderboardMask;
	
	this.friendMode = true;
	
	this.trackpad = new PixiTrackpad(this.leaderboardContainer);
	this.trackpad.max = 1;
	
	BasicButton.apply(this.top20Button, this.showTop20.bind(this));
	BasicButton.apply(this.friend20Button, this.showTopfriendTop20.bind(this));
	
	BasicButton.apply(this.closeButton, this.onClosePressed.bind(this));
	BasicButton.apply(this.challangeButton, this.onChallangePressed.bind(this));
	
	this.userRank = new ScoreView();
	this.userRank.position.y = Math.floor(650 * 0.7) + 7;
	this.userRank.position.x = Math.floor( 55 * 0.7);
	this.userRank.divider.visible = false;
	this.addChild(this.userRank);
	
	this.colorBlock = new PIXI.Graphics();
	this.colorBlock.beginFill(0xF9F6F0);
	this.colorBlock.moveTo(-24,-20)
	this.colorBlock.lineTo(350-2,-20)
	this.colorBlock.lineTo(350-2,60)
	this.colorBlock.lineTo(-22,60)
	this.colorBlock.endFill();
	this.colorBlock.position.y = -7;
	
	this.userRank.addChildAt(this.colorBlock, 0);
	
//	this.tc =  new PIXI.Text("Forestry Games" || 101, {font: "14px Pathway Gothic One", fill:"#000000"});
	this.tc = new PIXI.Sprite.fromFrame("gameTsCs.png");//new PIXI.Text("Forestry Games" || 101, {font: "14px Pathway Gothic One", fill:"#000000"});
	this.addChild(this.tc);
	this.tc.anchor.x = 0.5;
	
	this.tc.position.x = Math.floor(560/2 * 0.7);// - 30;
	this.tc.position.y = 573 + 4;
	BasicButton.apply(this.tc, function(){
		
		window.open(APP.tc, "_blank");
		
	});
	
}

LeaderboardScreen.constructor = LeaderboardScreen;
LeaderboardScreen.prototype = Object.create( PIXI.DisplayObjectContainer.prototype ); 

LeaderboardScreen.prototype.onShow = function()
{
	this.showTop20();
	this.trackpad.setPosition(0, 0)
	this.leaderboard.mask = this.leaderboardMask;

	this.userRank.visible = false// FacebookAPI.loggedIn;
	
	if(FacebookAPI.loggedIn  )
	{
		SteveAPI.getUserScore(this.onUserScoreRecieved.bind(this))
	}
	else
	{
	}
}

LeaderboardScreen.prototype.onUserScoreRecieved = function(data)
{
		if(!data.rank)return;
	
		this.userRank.visible = true;
		this.userRank.labelNumber.setText(data.rank + ".");
		this.userRank.setScore(data.score);
}

LeaderboardScreen.prototype.onHidden = function()
{
	this.leaderboard.mask = null
}
LeaderboardScreen.prototype.updateTransform = function()
{
	PIXI.DisplayObjectContainer.prototype.updateTransform.call( this );
	
	if(this.leaderboard.realHeight > 423)
	{
		
		this.trackpad.max = this.leaderboard.realHeight - 423 + 150
		this.trackpad.update();
		
		this.leaderboard.position.y = Math.floor(this.trackpad.valueY);
	}
	else
	{
		this.leaderboard.position.y = 0;
	}
	
	///console.log(this.trackpad.valueY)
}

LeaderboardScreen.prototype.showTop20 = function()
{
	if(!this.friendMode)return;
	this.friendMode = false;
	
	this.top20Button.interactive = false;
	this.friend20Button.interactive = true;
	TweenLite.to(this.top20Button.over, 0.1, {alpha:0});
	
	TweenLite.to(this.leaderboard, 0.3, {alpha:0});
	
	TweenLite.to(this.top20Button.active, 0.3, {alpha:0});
	TweenLite.to(this.friend20Button.active, 0.3, {alpha:1});
	
	SteveAPI.getTop20(this.onScoresRecieved.bind(this)); 
}

LeaderboardScreen.prototype.showTopfriendTop20 = function()
{
	
	
	//TweenLite.killTweensOf(t);
//	alert(FacebookAPI.loggedIn)	
	if(!FacebookAPI.loggedIn)
	{
		if(!APP.inAPP)
		{
			FacebookAPI.loginAndGetData(this.showTopfriendTop20.bind(this));
		}
		else
		{
			SteveAPI.loginAndGetDataFromAPP(this.showTopfriendTop20.bind(this));
		}
	
		return;
	}
	
	if(this.friendMode)return;
	this.friendMode = true;
	
	this.top20Button.interactive = true;
	this.friend20Button.interactive = false;
	
	TweenLite.to(this.leaderboard, 0.3, {alpha:0});
	
	TweenLite.to(this.top20Button.active, 0.2, {alpha:1});
	TweenLite.to(this.friend20Button.active, 0.2, {alpha:0});
	TweenLite.to(this.friend20Button.over, 0.1, {alpha:0});
	
	SteveAPI.getTop20Friends(this.onScoresRecieved.bind(this)); 
	
	/*
	// get friends using the app..
	FacebookAPI.getFriendsUsingApp(function(e){
		
		var data = e.data;
		
		var idArray = [];
	
		for (var i=0; i < data.length; i++) {
			
			idArray.push(data[i].uid);
			
		};
		//console.log(idArray)
		console.log("Friends using app Collected!")
		
		
	}.bind(this));*/
	
}


LeaderboardScreen.prototype.onScoresRecieved = function(data)
{
	TweenLite.to(this.leaderboard, 0.3, {alpha:1});
	this.leaderboard.setData(data.scores)
}

LeaderboardScreen.prototype.onChallangePressed = function()
{
	_gaq.push(['_trackEvent', 'Spicy mcbites', 'Social shares', 'Challange']);
	FacebookAPI.requestChallange(function(e){console.log(e)});
}

LeaderboardScreen.prototype.onClosePressed = function()
{
	if(APP.fromTitle)
	{
		APP.simpleApp.gotoScreen(APP.titleScreen)
	}
	else
	{
		APP.simpleApp.gotoScreen(APP.gameoverScreen)
	}
}

LeaderboardScreen.prototype.resize = function(w, h)
{
//	this.scale.x = 0.75//APP.container.scale.x;
//	this.scale.y = 0.75//APP.container.scale.y;
	
	this.position.x =  Math.floor(w/2 - (560/2 * 0.7));
	this.position.y =  Math.floor(h/2 - (877/2 * 0.7));
}
var GAME = GAME || {};

World = function()
{
	this.floorColors = [];
	this.underfloorColors = [];
	this.leftWallColors = [];
	this.rightWallColors = [];
	
	this.floorAlpha = 1
	this.leftAlpha = 1 ;
	this.rightAlpha = 1;
	
	this.background = new Image();
	this.background.crossOrigin = '';
	
	this.leftPosts = [];
	this.rightPosts = [];
	
	this.leftStump = [];
	this.rightStump = [];
	
	// particle debris?
}

World.prototype.process = function(callback)
{
	this.callback = callback;
	
	this.allImages = [];
	this.loadCount = 0;
	
	this.processUrls(this.leftStump);
	this.processUrls(this.rightStump);
	this.processUrls(this.walls);
	this.processUrls(this.baddy);
	this.processUrls(this.extras);
	this.processUrls(this.jumpPosts);
	this.processUrls(this.dust);
	
	this.dropEdge = this.extras[1]
}

World.prototype.processUrls = function(data)
{
	for (var i=0; i < data.length; i++) {
	  	
	  var url = data[i];
	  var image = new Image();
	  image.crossOrigin = '';
	  image.src = REMOTE_PATH + url
	  data[i] = image;
	  
	  this.allImages.push(image);
	  image.onload = function()
	  {
	  		this.loadCount++;
	  		if(this.loadCount == this.allImages.length)
	  		{
	  			console.log("LOADED")
	  			if(this.callback )this.callback();
	  		}
	  		
	  }.bind(this);
	  
	};
}

World.ice = new World();
World.ice.background.src = REMOTE_PATH + "img/snowWorld/snow_BG.jpg";
World.ice.floorColors = ["#61dafe", "#32b7fc", "#9fb0ff", "#32ffd3", "#6ebbeb", "#61dafe", "#00ffe5"];
World.ice.rightWallColors = ["#9fedff", "#59d7fe", "#d9dbff", "#59fffa", "#aee0f9", "#9fedff", "#00fcff"];
World.ice.leftWallColors = ["#0084d8", "#0047d5", "#4a50d9", "#00d9c1", "#015cbb", "#0084d8", "#0047d5"];
World.ice.floorAlpha = 0.7;
World.ice.leftAlpha = 0.9 ;
World.ice.rightAlpha = 0.9;
World.ice.rightStump = ["img/snowWorld/iceHorn_left_01.png", "img/edgeTuftLeft.png"];
World.ice.leftStump = ["img/snowWorld/iceHorn_right_01.png", "img/edgeTuft.png"];
World.ice.walls = ["img/snowWorld/iceWall_small.png", "img/snowWorld/iceWall_mid.png"];
World.ice.dust = ["img/snowTriangle_01.png", 
				  "img/snowTriangle_02.png",
				  "img/snowTriangle_03.png"];
World.ice.baddy = ["img/snowWorld/snowDude.png"];
World.ice.extras = ["img/snowWorld/snowArch.png", 
					"img/snowWorld/drop_edge_face.png",
					"img/snowWorld/floatingIsland.png"];

World.ice.bgColor = 0x1f2750;
World.ice.jumpPosts = ["img/snowWorld/flameTorch_frame01.png", 
						  "img/snowWorld/flameTorch_frame02.png",
					      "img/snowWorld/flameTorch_frame03.png",
					      "img/snowWorld/flameTorch_frame04.png"];


World.jungle = new World();
World.jungle.background.src = REMOTE_PATH + "img/treetopWorld/background_JUNGLE.jpg";
World.jungle.floorColors = ["#87be32", "#5cb51c", "#7cd07b", "#b8ae1c", "#6fac3e", "#87be32", "#a4b31c"];
World.jungle.rightWallColors = ["#b7e2a0", "#8bdd76", "#c9e7d5", "#c8df76", "#addca6", "#b7e2a0", "#acda41"];
World.jungle.leftWallColors = ["#567824", "#3d7423", "#598d59", "#777224", "#466b29", "#567824", "#3d7423"];
World.jungle.floorAlpha = 0.8;
World.jungle.leftAlpha = 1;
World.jungle.rightAlpha = 1;
World.jungle.walls = ["img/treetopWorld/killBush_mid.png", "img/treetopWorld/killBush_wide.png"];
World.jungle.baddy = ["img/treetopWorld/treeStump_right.png"];
World.jungle.extras = ["img/treetopWorld/checkpointArch.png", 
						"img/treetopWorld/drop_edge_face.png",
						"img/treetopWorld/floatingIsland.png"];

World.jungle.leftStump = ["img/jungleEdgeMarkerLeft.png", "img/jungleEdgeMarkerLeft.png"];
World.jungle.rightStump = ["img/jungleEdgeMarkerRight.png", "img/jungleEdgeMarkerRight.png"];
World.jungle.dust = ["img/treetopWorld/dust01.png", 
				  "img/treetopWorld/dust02.png",
				  "img/treetopWorld/dust03.png"];
World.jungle.bgColor = 0x1768e8;
World.jungle.jumpPosts = ["img/treetopWorld/flameTorch_frame01.png", 
						  "img/treetopWorld/flameTorch_frame02.png",
					      "img/treetopWorld/flameTorch_frame03.png",
					      "img/treetopWorld/flameTorch_frame04.png"];



World.rainbow = new World();
World.rainbow.background.src = REMOTE_PATH + "img/dessertWorld/desert_BG.jpg";
World.rainbow.floorColors = ["#802b77", "#c9385a", "#f1666a", "#f29a6f", "#f3e773", "#dce477",
							"#a6cf6e", "#91ba9a", "#7ea5c9", "#9280ba", "#8860a9", "#603492"];






World.desert = new World();
World.desert.background.src =REMOTE_PATH +  "img/desertWorld/desert_BG.jpg";
World.desert.floorColors = ["#f1aa4d", "#ff8551", "#f67d11", "#eb6133", "#ff8527", "#ffa32c", "#fc9751"];
World.desert.leftWallColors = ["#89612c", "#914c2e", "#8c470a", "#914c34", "#914c16", "#915d19", "#8f562e"];
World.desert.rightWallColors = ["#f8d776", "#ffc67c", "#fbbf1a", "#ffc68d", "#ffc63c", "#ffd443", "#fece7c"];
World.desert.floorAlpha = 0.8;
World.desert.leftAlpha = 1 ;
World.desert.rightAlpha = 1;
World.desert.rightStump = ["img/desertWorld/trackPost.png", "img/edgeTuftLeft.png"];
World.desert.leftStump = ["img/desertWorld/trackPost.png", "img/edgeTuft.png"];
World.desert.walls = ["img/desertWorld/midWall.png", "img/desertWorld/bigWall.png"];
World.desert.baddy = ["img/desertWorld/cactus.png"];
World.desert.extras = ["img/desertWorld/arch.png", 
					"img/desertWorld/drop_edge_face.png",
					"img/desertWorld/floatingIsland.png"];
World.desert.jumpPosts = ["img/desertWorld/flameTorch_frame01.png", 
						  "img/desertWorld/flameTorch_frame02.png",
					      "img/desertWorld/flameTorch_frame03.png",
					      "img/desertWorld/flameTorch_frame04.png"];

World.desert.dust = ["img/desertWorld/dust01.png", 
				  "img/desertWorld/dust02.png",
				  "img/desertWorld/dust03.png"];
World.desert.bgColor = 0xf53626;

World.rainbow.rightWallColors = ["#802b77", "#c9385a", "#f1666a", "#f29a6f", "#f3e773", "#dce477",
							"#a6cf6e", "#91ba9a", "#7ea5c9", "#9280ba", "#8860a9", "#603492"];
World.rainbow.leftWallColors = ["#802b77", "#c9385a", "#f1666a", "#f29a6f", "#f3e773", "#dce477",
							"#a6cf6e", "#91ba9a", "#7ea5c9", "#9280ba", "#8860a9", "#603492"];
							
World.rainbow.floorAlpha = 0.8//0.7;
World.rainbow.leftAlpha = 0.5//0.8;
World.rainbow.rightAlpha = 1//0.6;
World.rainbow.leftStump = ["img/jungleEdgeMarkerLeft.png", "img/jungleEdgeMarkerLeft.png"];
World.rainbow.rightStump = ["img/jungleEdgeMarkerRight.png", "img/jungleEdgeMarkerRight.png"];
World.rainbow.walls = ["img/snowWorld/iceWall_mid.png", "img/treetopWorld/killBush_wide.png"];
World.rainbow.baddy = ["img/snowWorld/snowDude.png"];
World.rainbow.extras = ["img/treetopWorld/checkpointArch.png", 
						"img/treetopWorld/drop_edge_face.png",
						"img/treetopWorld/floatingIsland.png"];
World.rainbow.dust = ["img/desertWorld/dust01.png", 
				  "img/desertWorld/dust02.png",
				  "img/desertWorld/dust03.png"];

World.rainbow.jumpPosts = ["img/desertWorld/flameTorch_frame01.png", 
						  "img/desertWorld/flameTorch_frame02.png",
					      "img/desertWorld/flameTorch_frame03.png",
					      "img/desertWorld/flameTorch_frame04.png"];



World.testWorld = new World();
World.testWorld.background.src = REMOTE_PATH +  "img/desertWorld/desert_BG.jpg";
World.testWorld.floorColors = ["red"];
World.testWorld.leftWallColors = ["white"];
World.testWorld.rightWallColors = ["black"];

World.processAll = function(callback)
{
	this.callback = callback;
	
	this.worlds = [World.ice, World.desert, World.rainbow, World.jungle];
	this.position = 0;
	
	var onLoaded = this.onWorldLoaded.bind(this);
	
	World.ice.process(onLoaded);
	World.desert.process(onLoaded);
	World.rainbow.process(onLoaded);
	World.jungle.process(onLoaded);
	
	this.total = World.ice.allImages.length + World.desert.allImages.length +  World.rainbow.allImages.length +  World.jungle.allImages.length;
	
}


World.percentLoaded = function()
{
	if(!this.total)return 0;
	var loadCount = World.ice.loadCount + World.desert.loadCount + World.rainbow.loadCount + World.jungle.loadCount;
	
	
	return loadCount / this.total;
}

World.onWorldLoaded = function()
{
	this.position++;
	if(this.position == this.worlds.length)
	{
		if(this.callback)this.callback();
	}
}
//World.sand
//World.tree
//World.space
var GAME = GAME || {};
GAME.LOW = false;


Game = function(viewContainer)
{
	
	GAME.LOW =  APP.inAPP;
	
//	this.world = 
	
	this.isGameover = false;
	
	this.view = new View(this, viewContainer);
	
	//pickup manager
	this.pickupManager = new GAME.PickupManager(this);
	this.enemyManager = new GAME.EnemyManager(this);
	
	this.collisionManager = new GAME.CollisionManager(this);
	
	this.trackManager = new GAME.TrackManager(this);
	this.extraManager = new GAME.ExtraManager(this);
	
	this.difficulty = 2;
	
	//enemy manager
	// controller
	
	//ball
	//road
	
	//score
	//view
	
	
	
	//this.start();
	
	/*
	for (var i=100; i > 0; i--) {
	 
	 	var ball = new GameElement();
	 	
	 	this.view.add(ball);
	 	
	 	ball.position.x = (Math.random()-0.5) * 800 ;
	 	ball.position.z = i * 500;
	// 	ball.position.y = i * -100;
	 	
	};*/
	this.ballSpeed = 1;
	this.ball = new Ball(this);
	this.view.add(this.ball);
//	this.view.add(this.ball.shadow);
	
	this.controller =  new Controller(this);
	
	this.worlds = [World.jungle, World.ice, World.desert];
	this.worldCount = 0;
	
	if(APP.startLevel)
	{
		if(APP.startLevel > 3)APP.startLevel = 3;
		else if(APP.startLevel < 1)APP.startLevel = 1;
		this.worldCount = APP.startLevel - 1;
		this.setWorld(this.worlds[APP.startLevel-1]);
	}
	else
	{
		this.setWorld(World.jungle);
		
	}
	
	this.pickupCount = 0;
	this.pickupTarget = 150;
	
	this.score = 0;
	APP.view = this;
	
	APP.stage.click = APP.stage.tap = function(e){
		
		//PIXI.runList(APP.stage);
		//this.ball.magnetMode();
		return;
		
		if(this.playing)
		{
			if(e.global.y > 100)
			{
	//		this.ball.giantMode();
				this.ball.chargeMode();
//		//		this.pickupCount = 199
			}
			else
			{
			}
	//		this.ball.chargeMode();
		//	this.ball.giantMode();
		//	this.restart();
		//	console.log("HI MUM")
		//this.gameover();
		//	this.worldCount++;
		//	this.fadeWorld(this.worlds[this.worldCount % 3]);
			
			
		}
		
	}.bind(this);
	
	this.diffStep = 0;
	
}

Game.prototype.start = function()
{
	if(this.playing)return;
	this.restart();
	this.playing = true;
	this.view.white.visible = false;
	this.view.visible = true;
	requestAnimationFrame(this.update.bind(this));
	
	// reset everything!
	
}

Game.prototype.stop = function()
{
	this.playing = false;
	this.view.visible = false;
	requestAnimationFrame(this.update.bind(this));
}

Game.prototype.setWorld = function(worldData, swap)
{
	/*
	if(swap)
	{
		this.trackManager.flatternOut();
		this.view.road.flatten(this.ball);
		this.pickupManager.destroyAll();
		this.enemyManager.destroyAll();
		TweenLite.to(TIME, 1, {speed: 2, ease:Sine.easeOut});
	
	}
	else
	{*/
		this.world = worldData;
		this.view.setWorld(this.world);
//	}	
}

Game.prototype.fadeWorld = function(worldData)
{
	this.view.hud.ascension();
	
	if(APP.ascentionSound)APP.ascentionSound.play();
	
	this.ball.ascend();
	this.nextWorld = worldData;
	
	this.view.white.visible = true;
	this.view.white.alpha = 0;
//	this.ballSpeed = 0;
	TweenLite.to(this, 0.3, {ballSpeed:0});
	TweenLite.to(this.view.camera,1, {ratio:0, ease:Sine.easeOut});
	TweenLite.to(this.view.white, 1.5, {delay: 0.5, alpha:1, ease:Sine.easeIn, onComplete:this.onWorldComplete.bind(this)});
}

Game.prototype.onWorldComplete = function()
{
	//this.ball.desend();
	this.trackManager.showTutorial = false;
	
	this.ball.reset();
	
	this.ballSpeed = 1;
	
	TIME.speed = 1;
	
	this.trackManager.restart(true);
	this.pickupManager.restart();
	this.enemyManager.restart();
	this.extraManager.restart();
		
	this.setWorld(this.nextWorld);
	this.view.reset();//road.reset();

	TweenLite.to(this.view.white, 2, {delay: 0, alpha:0, ease:Sine.easeIn, onComplete:this.onWorldShown.bind(this)});
}

Game.prototype.onWorldShown = function()
{
	this.view.white.visible = false;
}


Game.prototype.update = function(w, h)
{
	
	if(this.playing)requestAnimationFrame(this.update.bind(this));
	if(this.paused)return;

	
	TIME.update();
	this.trackManager.update();
	
	this.controller.update();
	this.pickupManager.update();
	this.enemyManager.update();
	//if(!GAME.LOW)
	this.extraManager.update();
	this.collisionManager.update();
		
	this.view.hud.setScore(this.pickupCount / this.pickupTarget, this.score);
	
	if(this.pickupCount >= this.pickupTarget)
	{
		this.pickupCount = 0;
		//this.setWorld();
		this.worldCount++;
		if(this.worldCount > 3)this.pickupTarget = 200;
		
		this.fadeWorld(this.worlds[this.worldCount % this.worlds.length]);
		
	}
	
	this.diffStep+=TIME.DELTA_TIME;
	if(this.diffStep > 20 * 60)
	{
		this.diffStep = 0;
		this.difficulty += 0.025;
	//	console.log("SPEED UP: " + this.difficulty )
	}
	
	var dist = 30 * TIME.DELTA_TIME * this.ballSpeed * 1 * this.difficulty * PROFILE.speedMod ;
	this.score += dist * 0.1;
	
	this.ball.position.z += dist// 1//* 0.1;
	
//	console.log(this.ball.position.z)
}

Game.prototype.gameover = function()
{
	if(this.isGameover)return;
	this.isGameover = true;
	
	APP.fromGame = true;
	
	this.trackManager.showTutorial = false;
	
	if(this.ball.state != Ball.FALLING)TweenLite.to(TIME, 0.6, {speed: 0.1, ease:Sine.easeOut});
	TweenLite.to(TIME, 1.5, {delay: 0.7, speed:1, ease:Sine.easeIn});
	
	this.view.white.visible = true;
	this.view.white.alpha = 0;
	this.view.camera.lock = true;

	if(this.ball.state != Ball.FALLING)
	{
		TweenLite.to(this.view.white, 2, {delay: 1, alpha:1, ease:Sine.easeIn, onComplete:this.onFadeComplete.bind(this)});
		TweenLite.to(this.view.camera,1, {ratio:0, ease:Sine.easeOut}); 
	}
	else
	{
		TweenLite.to(this.view.white, 1, {delay: 0.5, alpha:1, ease:Sine.easeIn, onComplete:this.onFadeComplete.bind(this)});
		TweenLite.to(this.view.camera,1, {ratio:0, ease:Sine.easeOut}); 	
	}
	
	this.score = Math.floor(this.score);
	APP.score = this.score;
	//submit score!
	this.saved = true;
	this.faded = false;
	APP.pb = false;
	
	if(FacebookAPI.loggedIn)
	{
		this.saved = false;
		// auto submit!
		SteveAPI.submitScore(this.score, this.onSaveComplete.bind(this));
	}
	//TweenLite.to(this.view.camera,2, {dist:800, delay:1, ease:Sine.easeOut}); 
	//this.ball.deathHit();
}

Game.prototype.onSaveComplete = function(data)
{
	this.saved = true;
	APP.pb = data.success;
	
	if(this.faded)
	{
		this.stop();
		
		APP.simpleApp.gotoScreen(APP.gameoverScreen)
	}
}

Game.prototype.onFadeComplete = function()
{
	APP.stage.setBackgroundColor(0xFFFFFF);
	
	this.faded = true;
	
	if(this.saved)
	{
		this.stop();
		APP.simpleApp.gotoScreen(APP.gameoverScreen);
	}
}

Game.prototype.restart = function(w, h)
{
	//this.ball.reset();
	this.pickupCount = 0;
	//this.worldCount = 0;
	
	if(APP.startLevel)
	{
		if(APP.startLevel > 3)APP.startLevel = 3;
		else if(APP.startLevel < 1)APP.startLevel = 1;
		this.worldCount = APP.startLevel - 1;
		this.setWorld(this.worlds[APP.startLevel-1]);
	}
	else
	{
		//this.setWorld(World.jungle);
		
	}
	this.pickupTarget = 150;
	this.isGameover = false;
	this.ball.reset();
	this.pickupManager.restart();
	this.enemyManager.restart();
	this.extraManager.restart();
	this.trackManager.restart();
	
	this.view.camera.lock = false;
	this.view.camera.z = 10000;
	this.ball.position.z = (PROFILE.drawDistance != 7000 ) ? 0 : 10000;
	
	this.ball.lastPosition.x = this.ball.position.x;
	this.ball.lastPosition.y = this.ball.position.y;
	this.ball.lastPosition.z = this.ball.position.z;
	
	this.trackManager.update();
	//this.trackManager.showTutorial();
	
	this.view.reset();//road.reset();
	this.paused = false;
	
	this.difficulty = 1;
	this.score = 0;
	
	
	if(this.trackManager.showTutorial)
	{
		this.pickupManager.spawnCount -= 1000;
	}	
}

Game.prototype.pause = function()
{
	this.paused = true;
}

Game.prototype.resume = function()
{
	this.paused = false;
}



Game.prototype.resize = function(w, h)
{

	this.view.resize(w,h);
}


/**
 * @author Forestry Games
 */

/**
 * @author Forestry Games
 */

var GAME = GAME || {};


GAME.TrackManager = function(engine)
{
	this.count = 0;
	this.countY = 0
	
	this.engine = engine;
	this.trackStream = [];
	this.coinStream = [];
	this.wallStream = [];
	
	this.showTutorial = true;
	
	this.count = 0;
	this.offset = 0;
	this.index  = 0;
	this.indexOffset = PROFILE.trackSize;
	this.segmentId = 0;
	this.xOffset = 0;
	this.trackIndex = 0;
	 this.offsetIndex =0;
	this.lastIndex = 0;
	
	this.lastTutIndex = 0;
	
	this.lastCoinIndex =0;
	this.lastWallIndex =0;
	
	this.positionObjectIndex;
	this.lastObjectIndex;
	this.objectIndex = 0;
	this.wallObjectIndex = 0;
	
	this.lastObjectZ = 0;
	this.trackLayout = [1,1,1,1]//0, 0, 0,0,0,0,0,0,0,1, 1, 0]//, 0, 1];
	
	this.tutObjectIndex = 0;
	this.overallOffset = 0;
	
	
	this.xFrequancy = 0.5;
	this.xSize =  0//800 * 0.5;
	this.yFrequancy = 0.3;
	this.ySize = 0//800;
	
	
	
	this.flat = {
		
		xFrequancy: 0.5,
		xSize:0,
		yFrequancy:0.3,
		ySize:0
	}
	
	this.twisty = {
		
		xFrequancy: 0.5,
		xSize:800 * 0.5,
		yFrequancy:0.3,
		ySize:800
	}
	
	this.rollerCoaster = {
		
		xFrequancy: 0.5,
		xSize:0,
		yFrequancy:0.3,
		ySize:800
	}
	
	this.sideSwipe = {
		
		xFrequancy: 0.3,
		xSize:600,
		yFrequancy:0.5,
		ySize:400
	}
	
	this.oceanic = {
		
		xFrequancy: 0.1,
		xSize:800,
		yFrequancy:0.1,
		ySize:3500
	}
	
	this.tutStream = [];
	//this.xFrequancy /= 3;
	//this.xSize *= 3;
	
	trackData[0].isTut = true;
	
	this.tut = trackData[0];
	
	this.curves = [this.flat,
					this.twisty,
					this.rollerCoaster,
					this.sideSwipe,
					this.oceanic];
					
					
	this.setCurve(this.flat);
}

GAME.TrackManager.prototype.setCurve = function(data)
{
	if(this.curve == data)return;
	//console.log(data)
	if(!this.curve)this.curve = data;
	
	//var ySizeDiff = data.ySize - this.curve.ySize;
	var yFreqDiff = data.yFrequancy - this.curve.yFrequancy;
	var xFreqDiff = data.xFrequancy - this.curve.xFrequancy;
	
	if(yFreqDiff < 0)
	{
		TweenLite.to(this, 3, {yFrequancy:data.yFrequancy})
		TweenLite.to(this, 3, {ySize:data.ySize, overwrite:false, delay:3});
	}
	else
	{
		TweenLite.to(this, 3, {ySize:data.ySize});
		TweenLite.to(this, 3, {yFrequancy:data.yFrequancy, overwrite:false, delay:3});
	}
	
	if(xFreqDiff < 0)
	{
		TweenLite.to(this, 3, {xFrequancy:data.yFrequancy, overwrite:false})
		TweenLite.to(this, 3, {xSize:data.xSize, overwrite:false, delay:3});
	}
	else
	{
		TweenLite.to(this, 3, {xSize:data.xSize, overwrite:false});
		TweenLite.to(this, 3, {xFrequancy:data.xFrequancy, overwrite:false, delay:3});
	}
	
	
	/*
	TweenLite.to(this, 4, {
		
		xFrequancy:data.xFrequancy,
		xSize:data.xSize,
		yFrequancy:data.yFrequancy,
		ySize:data.ySize
	});*/
	
	
	this.curve = data
	
	
		
		
	//	this.xFrequancy = 0//0.5;
	//this.xSize =  0//800 * 0.5;
	//this.yFrequancy = 0//0.3;
	//this.ySize = 0//800;
	
}

GAME.TrackManager.prototype.runNumbers = function()
{
	//var targetxFre = Math.random() * ;
//	TweenLite.to(this, 3, {xFrequancy:})
}

// constructor

GAME.TrackManager.prototype.update = function()
{
	this.positionIndex = Math.floor(this.engine.ball.position.z / 500);
	
	// update the track stream...
	
	// add items..
	
	while(this.lastIndex <= this.positionIndex)
	{
		
		this.lastIndex++;
		var relativeIndex = this.lastIndex - this.offsetIndex;
		var segment = trackData[this.segmentId % trackData.length];
		
		var floorData = segment.floor;
		
		this.trackStream.push(floorData[relativeIndex * 3], floorData[relativeIndex*3 + 1] +  this.xOffset, floorData[relativeIndex*3 + 2])
		
		if(relativeIndex+1 >= floorData.length/3)
		{
			// set new track!
			 
			// this.setCurve(this.twisty);
			 
			 this.xOffset =  this.xOffset + floorData[(relativeIndex)*3 +1]
			 this.segmentId++;
			 if(!(this.segmentId % trackData.length))this.segmentId++;
			 
			 var nextSeg = trackData[this.segmentId % trackData.length];
			 
			 
			 if(nextSeg.curveType != 10)
			 {
				 this.setCurve(this.curves[nextSeg.curveType]);
			 }
			 else
			 {
			 	 this.setCurve(this.curves[Math.floor(Math.random() * this.curves.length)]);
			 }
			 
			 this.offsetIndex += floorData.length/3;
			 this.lastCoinIndex = 0;
			 this.lastWallIndex = 0;
		}
		
		var coins = trackData[this.segmentId % trackData.length].coins;
		var start = (relativeIndex+1) * 500;

		while(true)
		{
			var coinz = coins[this.lastCoinIndex * 2];
			//console.log(this.lastCoinIndex + " " + start + " : " + coinx)
			if(coinz < start)
			{
				this.coinStream.push(coinz + ((this.offsetIndex+PROFILE.trackSize -1) * 500), 
									 coins[this.lastCoinIndex * 2 + 1] + this.xOffset);
				this.lastCoinIndex++;
			}
			else
			{
				break;
			}
		}
		
		var walls = trackData[this.segmentId % trackData.length].walls;
		var start = (relativeIndex+1) * 500;
		
		while(true)
		{
			var wallz = walls[this.lastWallIndex * 3];
			if(wallz < start)
			{
				this.wallStream.push(wallz + ((this.offsetIndex+PROFILE.trackSize -1) * 500), 
									 walls[this.lastWallIndex * 3 + 1] + this.xOffset,
									 walls[this.lastWallIndex * 3 + 2]);
				this.lastWallIndex++;
			}
			else
			{
				break;
			}
		}
		
		if(segment.tuts)
		{
			var tuts = segment.tuts;
			var start = (relativeIndex+1) * 500;
			
			while(true)
			{
				var tutz = tuts[this.lastTutIndex * 3];
				if(tutz < start)
				{
					this.tutStream.push(tutz + ((this.offsetIndex+PROFILE.trackSize) * 500), 
										 tuts[this.lastTutIndex * 3 + 1] + this.xOffset,
										 tuts[this.lastTutIndex * 3 + 2]);
					this.lastTutIndex++;
				}
				else
				{
					break;
				}
			}		
		}
	}
	
	// coin stream!
	
	//this.objectIndex;// = -this.engine.view.camera.z;
	var drawDistance = PROFILE.drawDistance;
	
	var coinz = this.coinStream[this.objectIndex * 2];
	if(coinz < -this.engine.view.camera.z + drawDistance)
	{
		var coinx = this.coinStream[this.objectIndex * 2 + 1];
		if(!this.pasued)this.engine.pickupManager.addPickup(coinz, this.coinStream[this.objectIndex * 2 + 1]);
		this.objectIndex++;
	}
	
	var wallz = this.wallStream[this.wallObjectIndex * 3];
	if(wallz < -this.engine.view.camera.z + drawDistance)
	{
	//	console.log("HI!")
		var wallx = this.wallStream[this.wallObjectIndex * 3 + 1];
		var walltype = this.wallStream[this.wallObjectIndex * 3 + 2];
		if(!this.pasued)this.engine.enemyManager.addWall(wallz, wallx, walltype);
		this.wallObjectIndex++;
	}
	
	var tutz = this.tutStream[this.tutObjectIndex * 3];
	if(tutz < -this.engine.view.camera.z + drawDistance)
	{
	//	console.log("HI!")
		var tutx = this.tutStream[this.tutObjectIndex * 3 + 1];
		var tutType = this.tutStream[this.tutObjectIndex * 3 + 2];
		if(!this.pasued)
		{
			//console.log("YTUTUTU")
			this.engine.extraManager.addTut(tutz, tutx, tutType);
		}
		this.tutObjectIndex++;
	}

}


GAME.TrackManager.prototype.flatternOut = function()
{
	
//	this.flat = true;
	
	//this.restart();
	//this.trackStream = [];
	//this.wallStream = [];
	//this.coinStream = [];

//	this.xOffset = this.engine.ball.position.x;
	//this.offset
	
}

GAME.TrackManager.prototype.restart = function(newLevel)
{
	
	newLevel = !!newLevel;
	
	this.offset = 0;
	this.index  = 0;
	this.indexOffset = PROFILE.trackSize;
	
	if(newLevel)
	{
		
	}
	else
	{
		this.segmentId = this.showTutorial ? 0 : 1;
		
		trackData.shift();
		trackData = shuffle(trackData);
		trackData.unshift(this.tut);
	}
	
	//alert(this.segmentId )
	this.xOffset = 0;
	this.trackIndex = 0;
	 this.offsetIndex =0;
	this.lastIndex = 0;
	this.pasued= false;
	this.positionIndex = 0;
	
	this.lastCoinIndex =0;
	this.lastWallIndex =0;
	this.lastTutIndex = 0;
	
	this.objectIndex = 0;
	this.wallObjectIndex = 0;
	this.tutObjectIndex = 0;
	this.trackStream = [];
	this.wallStream = [];
	this.coinStream = [];
	this.tutStream = [];
	
	this.count = 0;
	this.countY = 0
	//this.segmentId = 0//Math.floor(Math.random() * trackData.length)
	
	this.xFrequancy = 0.5;
	this.xSize =  0//800 * 0.5;
	this.yFrequancy = 0.3;
	this.ySize = 0//800;
	//alert("!")
	this.curve = this.flat;
	TweenLite.killTweensOf(this);
	//this.setCurve(this.flat);			 
}



GAME.TrackManager.prototype.modifyNumber = function(positon)
{
	
}

GAME.TrackManager.prototype.pause = function()
{
	this.pasued = true;
}

GAME.TrackManager.prototype.resume = function()
{
	this.pasued = false;
}

GAME.TrackManager.prototype.setSeg = function(seg)
{
	// road can drive all of it??
	var realIndex = Math.floor(seg.position/500) - PROFILE.trackSize;
	
	var width =  this.trackStream[realIndex * 3];
	var position =  this.trackStream[realIndex * 3 + 1];
	//this.count 
	if(width)
	{
			seg.hole = this.trackStream[realIndex * 3 + 2] == 1;
			seg.wall = this.trackStream[realIndex * 3 + 2] != 2;
	
			seg.p1.x = position + width;
			seg.p2.x = position;
			
			this.count += this.xFrequancy;
			this.countY += this.yFrequancy;
			
			seg.p1.y = seg.p2.y = 1000 + Math.sin(this.countY) * this.ySize; //1000;
		//	seg.p2.y = 1000 + Math.sin(this.count) * this.ySize; // 1000;
	//		console.log(this.count + " : " +seg.p1.y)
			// modifier..
		//	seg.p1.y += 14;
		//	seg.p2.y += 14;
			// tweak!
			seg.p1.offsetVal = seg.p2.offsetVal = Math.sin(this.count) * this.xSize;//800 * 0.5//0.25;
			// sin modifier..
			seg.p1.x += seg.p1.offsetVal;
			seg.p2.x += seg.p2.offsetVal;
			
			
			seg.p1.x += Math.random() * 100;
			seg.p2.x -= Math.random() * 100;
			
	//		seg.p1.y += (Math.random()-0.5) * 100;
	//		seg.p2.y += (Math.random()-0.5) * 100;
			// modifier..
		//	seg.p1.y += 14;
		//	seg.p2.y += 14;
			
			//seg.p1.offsetVal = Math.sin(realIndex/2) * 800 * 0.5//0.25;
			//seg.p2.offsetVal = Math.sin(realIndex/2) * 800 * 0.5//.25;
			// sin modifier..
	//		console.log(Math.sin(position/20) * 800)
			//seg.p1.y += Math.sin(position/20) * 800
		//seg.p2.y += Math.sin(position/20) * 800
		//}
		//console.log(realIndex + " :-: " + this.trackStream.length )
	}
	else
	{
	//	console.log(realIndex + " : " + this.trackStream.length )
		seg.p1.x = this.xOffset;// + 10500
		seg.p2.x = this.xOffset;
		seg.wall = true;
		seg.hole = false;
		
		
	}

}

function shuffle(array) {
  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var GAME = GAME || {};

GameElement = function()
{
	
	// image
	this.view = new Image();
	//this.view.src = "img/McBite.png";
	this.frame = false;
	
	this.position = {x:0, y:0, z:0};
	this.screenPosition = {x:0, y:0};
	this.scale = 0.8;
	
	this.rotation = 0;	
	this.timeModifyer = 1;
	
	this.heightRatio = 1;
	
	this.width = 100;
	this.height = 100;
	
	this.alpha = 1;
}

GameElement.prototype.addMovement = function()
{
	this.dx = 0;
	this.ax = 0;
	this.fx = 0.5;
	this.max = 30;
	
	this.dy = 0;
	this.ay = 3;
	this.fy = 0;
	this.max = 30;
	this.targetSpeed = 0;
}


		
		// P R I V A T E -------------------------------------------------//
		
GameElement.prototype.computeVelocity = function(velocity, acceleration, friction, maxVelocity)
{
	
	//velocity = velocity + gravity*delta_time/2
	//position = position + velocity*delta_time	
	//velocity = velocity + gravity*delta_time/2
	
	
	// apply the friction this is not a multiplyer!
	
	var f = friction * TIME.DELTA_TIME *  this.timeModifyer;
	
	// calculate friction multiply.. velocity *= Math.pow(f, engine.elapsedTime);
				
	if(velocity - f > 0)
	{
		velocity -= f;
	}
	else if(velocity + f < 0)
	{
		velocity += f;
	}
	else
	{
		velocity = 0;
	}
	
	// apply acceleration
	velocity += acceleration * TIME.DELTA_TIME * this.timeModifyer;
	
	// cap the velocity 
	
	if(velocity != 0 && maxVelocity != 10000)
	{
		if(velocity > maxVelocity)
		{
			velocity = maxVelocity;
		}
		else if(velocity < -maxVelocity)
		{
			velocity = -maxVelocity;
		}
	}
	//return Velocity * FlxG.elapsed + (acc * FlxG.elapsed * FlxG.elapsed) / 2;
	return velocity;
}
Hud = function(engine)
{
	this.engine = engine
	PIXI.DisplayObjectContainer.call(this);
	
	this.scoreLabel = new PIXI.Text("101293043", {font: "30px Pathway Gothic One", fill:"#de571c"});
	this.scoreLabel.anchor.x = 0;
	
//	alert(APP.music)
	this.bg = PIXI.Sprite.fromFrame(PROFILE.music ? "scorePanel.png" : "scorePanelMobile.png");
	this.addChild(this.bg);
	this.bg.anchor.x = 1;
//	console.log("HI")
	this.soundButton = new SoundButton();
	this.bg.addChild(this.soundButton);
	this.soundButton.position.y = 110-5-2;
	this.soundButton.position.x = -10+7+3;
	
	this.crumbPanel = PIXI.Sprite.fromFrame("crumbPanel.png");
	this.crumbScale = PIXI.Sprite.fromFrame("crumbScale.png");
	
	this.crumbPanel.anchor.x = this.crumbPanel.anchor.y = 0.5;
	this.crumbScale.anchor.x = this.crumbScale.anchor.y = 0.5;
	this.crumbScale.position.x = 1;
	this.crumbScale.position.y = -3;
	
	this.crumbPanel.addChild(this.crumbScale);
	
	this.bg.addChild(this.scoreLabel);
	this.bg.addChild(this.crumbPanel);
	
	this.crumbPanel.position.x = - 230;
	this.crumbPanel.position.y =  this.crumbPanel.height/2 - 20+3;
	
	this.pauseButton = new McBiteButton("pause_button_up.png", "pause_button_press.png");//PIXI.Sprite.fromFrame("pauseButton.png")
	this.bg.addChild(this.pauseButton);
	
	//this.pauseButton.anchor.x = 1;
	this.pauseButton.position.x = -30 - 20;
	this.pauseButton.position.y = 80 - 5 - 20;
	
	if(PROFILE.mobile)
	{
		this.pauseButton.hitArea = new PIXI.Rectangle(-200, -200, 300, 300)	
	}
	
//	this.addChild(this.pauseButton);
	
	this.pauseMenu = new PIXI.DisplayObjectContainer();
	
	this.menuHolder =  new PIXI.DisplayObjectContainer();
	
	this.pauseMenuBackground = PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/pausePanel.png", true);
	
	
	this.pauseMenuBackground.anchor.x = 0.5;
	this.pauseMenuBackground.anchor.y = 0.5;
	
	this.pauseMenuLogo = PIXI.Sprite.fromFrame("pauseLogo.png");
	this.pauseMenuLogo.anchor.x = 0.5;
	this.pauseMenuLogo.anchor.y = 0.5;
	this.pauseMenuLogo.position.y = -135
	
	this.menuHolder.addChild(this.pauseMenuBackground);
	this.menuHolder.addChild(this.pauseMenuLogo);
	
	//this.tc =  new PIXI.Text("Forestry Games" || 101, {font: "14px Pathway Gothic One", fill:"#000000"});
	this.tc = new PIXI.Sprite.fromFrame("gameTsCs.png");//new PIXI.Text("Forestry Games" || 101, {font: "14px Pathway Gothic One", fill:"#000000"});
	this.tc.anchor.x = 0.5;
//	this.tc.position.x = -25
	this.tc.position.y = 163 + 4;
	BasicButton.apply(this.tc, function(){
		
		window.open(APP.tc, "_blank");
		
	});
	
	this.resumeButton = new McBiteButton("pause_resume_up.png", "pause_resume_press.png");// new PIXI.Text("RESUME", {font: "35px Snippet", fill: "black", align: "left"});
	this.restartButton = new McBiteButton("pause_restart_up.png", "pause_restart_press.png");
	this.homeButton = new McBiteButton("pause_main_up.png", "pause_main_press.png");
	this.helpButton = new McBiteButton("pause_howto_up.png", "pause_howto_press.png");
	
	this.background = new PIXI.Graphics();
	this.background.beginFill(0x000000, 0.75);
	this.background.drawRect(0, 0, 300, 300);
	this.background.endFill();
	
	
	this.pauseMenu.addChild(this.background);
	this.pauseMenu.addChild(this.menuHolder);
	
	
	this.menuHolder.addChild(this.resumeButton);
	this.menuHolder.addChild(this.restartButton);
	this.menuHolder.addChild(this.homeButton);
	this.menuHolder.addChild(this.helpButton);
	
	this.menuHolder.addChild(this.tc);
	var offset = -32;
	var space = 49;
	
	this.resumeButton.position.y =  offset;
	this.restartButton.position.y = 1 * space + offset;
	this.homeButton.position.y = 2 * space + offset;
	this.helpButton.position.y = 3 * space + offset; 
	
	
	BasicButton.apply(this.pauseButton, this.onPausePressed.bind(this));
	
	BasicButton.apply(this.resumeButton, this.onResumePressed.bind(this));
	BasicButton.apply(this.homeButton, this.onHomePressed.bind(this));
	
	BasicButton.apply(this.restartButton, this.onRestartPressed.bind(this));
	
	BasicButton.apply(this.helpButton, this.onHelpPressed.bind(this));
	
	this.backButton = new McBiteButton("back_button_up.png", "back_button_press.png")// PIXI.Sprite.fromFrame("back.png");//new PIXI.Text("Close", {font:"35px Pathway Gothic One", fill: "#4b4b4b", align: "left"});
	
	this.backButton.alpha = 0;
	this.menuHolder.addChild(this.backButton);
	this.backButton.position.x = 100;
	this.backButton.position.y = -190 + 14;
	
	BasicButton.apply(this.backButton, this.onBackPressed.bind(this));
	
	this.backButton.interactive = false;
	
	this.resumeButton.alpha = 0;
	this.homeButton.alpha = 0;
	
	//this.background.alpha = 1;
	
	
	
	this.timeline = new TimelineLite({onReverseComplete:this.onPauseHidden.bind(this)});
	this.background.alpha = 0;
	this.timeline.to(this.pauseButton, 0.3, {alpha:0});
	this.timeline.to(this.background, 0.3, {alpha:1},0);
	this.timeline.to(this.resumeButton, 0.3, {alpha:1}, 0.2);
	this.timeline.to(this.homeButton, 0.3, {alpha:1}, 0.4);
	this.timeline.stop();
	this.timeline.timeScale(2);
	
	this.ascensionText = PIXI.Sprite.fromFrame("tutorialBG.png");
	this.ascensionText2 = PIXI.Sprite.fromFrame("levelUP.png");
	this.ascensionText.anchor.x = 0.5;
	this.ascensionText.anchor.y= 0.5;
	
	this.ascensionText2.anchor.x = 0.5;
	this.ascensionText2.anchor.y= 0.5;
	this.ascensionText.position.y = -300;
	this.addChild(this.ascensionText)
	this.ascensionText.addChild(this.ascensionText2)
	
//	this.timeline.to(this.logo, 0.4, { scaleX:scale, scaleY:scale, y:-100, ease:Back.easeInOut}, 2.5);
	
	this.spring = new Spring();
	
	
}

Hud.prototype = Object.create( PIXI.DisplayObjectContainer.prototype ); 

Hud.prototype.setScore = function(percent, score)
{
	
	this.spring.update();
	if(percent != this.spring.tx)
	{
		this.spring.dx = 0.1;
		this.spring.tx = percent;
		
	}
	this.crumbScale.scale.x = this.crumbScale.scale.y = this.spring.x * 0.55//percent * 0.55;
	
	this.scoreLabel.setText(formatScore(Math.floor(score / 10) * 10));
}

Hud.prototype.reset = function(percent)
{
	if(this.pauseMenu.parent)this.removeChild(this.pauseMenu);
	this.crumbScale.scale.x = this.crumbScale.scale.y = 0;
	this.timeline.reverse(true, false)
	//this.background.alpha = 0;
	this.spring.x = 0;
	this.spring.tx = 0;
	
	
	this.bg.scale.x = 1;
	this.bg.scale.y = 1;
}

Hud.prototype.onPausePressed = function()
{
	// show menu..
	this.engine.pause();
	this.addChild(this.pauseMenu);
	this.timeline.play();
	
	APP.highRez();
	this.bg.scale.x = 1 / (APP.height / 690) * 0.95;
	this.bg.scale.y = 1 / (APP.height / 690) * 0.95;
}



Hud.prototype.onRestartPressed = function()
{
	if(!APP.emptyScreen)
	{
		APP.emptyScreen = new PIXI.DisplayObjectContainer();
		APP.emptyScreen.onShown = function()
		{
			APP.simpleApp.gotoScreen(APP.gameScreen )	
		}
	}
	// show menu..
	//this.engine.stop();
	this.engine.stop();
	APP.simpleApp.gotoScreen(APP.emptyScreen )
}


Hud.prototype.ascension = function()
{
	this.ascensionText.position.y = -300;
	TweenLite.to(this.ascensionText.position, 1, {y:690/2, ease:Expo.easeOut, onComplete:function(){
		
	//	console.log()
		//TweenLite.to(this.ascensionText.position, 1, {y:690/2 + 30, onComplete:function(){
			TweenLite.to(this.ascensionText.position, 1, {y:830, ease:Expo.easeIn});
			
		//}.bind(this)})//, onComplete:function(){
		
	}.bind(this)})
}

Hud.prototype.onHomePressed = function()
{
	// show menu..
	legals.show();
	this.engine.stop();
	APP.simpleApp.gotoScreen(APP.titleScreen)
}

Hud.prototype.onResumePressed = function()
{
	this.timeline.reverse(false);
	// show menu..
	
}

Hud.prototype.onPauseHidden = function()
{
	// show menu..
	this.bg.scale.x = 1;
	this.bg.scale.y = 1;
	APP.lowRez();
	this.engine.resume();
	if(this.pauseMenu.parent)this.removeChild(this.pauseMenu);
}


Hud.prototype.onBackPressed = function()
{
	TweenLite.to(this.backButton, 0.3, {alpha:0});
		this.backButton.interactive = false;
	
	TweenLite.to(this.pauseMenuLogo, 0.3, {alpha:1});
	TweenLite.to(this.help, 0.3, {alpha:0, onComplete:function(){
		
		this.menuHolder.removeChild(this.help);
		
	}.bind(this)});
	
	
	this.resumeButton.interactive = true;
	this.homeButton.interactive = true;
	this.restartButton.interactive = true;
	this.helpButton.interactive = true;
	
}

Hud.prototype.onHelpPressed = function()
{
	// show menu..
	// show help!
	if(!this.help)
	{
		this.help = new HelpOverlay();
		this.help.position.x = -285/2 ;// *3;	
		this.help.position.y = -230 + 68 + 46;	
	//	this.pauseMenu.addChild(this.help);
	}
	
	this.menuHolder.addChild(this.help);
	this.help.alpha= 0;
	TweenLite.to(this.help, 0.3, {alpha:1});
	TweenLite.to(this.backButton, 0.3, {alpha:1});
	this.backButton.interactive = true;
	
	TweenLite.to(this.pauseMenuLogo, 0.3, {alpha:0});
	
	this.resumeButton.interactive = false;
	this.homeButton.interactive = false;
	this.restartButton.interactive = false;
	this.helpButton.interactive = false;
	
}


Hud.prototype.resize = function(w, h)
{
	this.bg.position.x = Math.ceil( w/2);
	this.bg.position.y = 20;
	
	this.pauseButton.position.x = -10 - 10//Math.floor(w/2 - 10+3) - 10;
	this.pauseButton.position.x = -20;
	
	this.scoreLabel.position.x = -145//Math.floor(w/2 - 145);
	this.scoreLabel.position.y = 1;
	this.background.position.x = Math.floor(-w/2);
	
	this.menuHolder.position.y = Math.floor(h/2);
	
	this.background.scale.x = w/300 + 3;
	this.background.scale.y = h/300;
}

function formatScore(n)
{
	var nArray = n.toString().split("");
	var text = "";
	var total = nArray.length;
	
	var offset = (total % 3)-1;
	for(var i = 0; i < total; i++)
	{
		text += nArray[i];
		if((i - offset) % 3 == 0 && i != total-1)text+=",";	
	}
	
	return text;
}
var GAME = GAME || {};

View = function(game, viewContainer)
{
	this.game = game;
	
	this.shakeCount = 0;
	
	PIXI.CustomRenderable.call(this);
	this.children = [];
	this.rotContainer =  new PIXI.DisplayObjectContainer();
	
	
	viewContainer.addChild(this.rotContainer);
	this.rotContainer.addChild(this);
	
	this.white = new PIXI.Graphics();
	this.white.beginFill(0xFFFFFF);
	this.white.drawRect((-1280/2) * 1.5,0, 1280 * 1.5, 690)
	this.white.visible = false;
	this.white.alpha = 0;
	
	viewContainer.addChild(this.white);
	
	
	this.gamePos = 0;
	
	this.viewContainer = viewContainer;
	
	this.direction = 1;
	
	this.camera = {x:0,y:1500,z:0, 
				   rotationY:0, rotationX:0, rotationZ:0,
				   focus:300,
				   zoom:1,
				   dist:400,
				   distY:1000,
				   ratio:1,
				   shake:0}
				   
	
	
	this.items = [];
	this.road = new Road(this);
	
	this.count = 0;
	
	this.background = new Image();
	this.background.crossOrigin = '';
	this.background.src = "img/background_SNOW.jpg";
	
	this.pixiDust = new PixiDust();
	this.speedLines = new SpeedLines();
	
	if(PROFILE.particles)viewContainer.addChild(this.speedLines);
	
	this.hud = new Hud(game);
	viewContainer.addChild(this.hud);
	
//	var po = new PIXI.Sprite.fromImage("img/flip.jpg");
//	po.anchor.x = 0.5;
//	po.anchor.y = 0.5;
	
//	this.rotContainer.addChild(po)
	this.shakeCount = 0;
	
	
	// counter..
	this.spawnCount = 0;
	this.signElement = new GameElement();
	this.signElement.view.src = "img/signPost.png";
	
	this.lastDepth = 0;
	
	this.cameraGround = 0;
	this.cameraBall = 0;
	
	this.ratio = 0;
	
}

View.prototype = Object.create( PIXI.CustomRenderable.prototype );

View.prototype.setWorld = function(worldData)
{
	this.worldData = worldData;
	if(PROFILE.particles)this.pixiDust.update(worldData.dust);
	this.road.setWorld(this.worldData);
	APP.stage.setBackgroundColor(this.worldData.bgColor);
}

View.prototype.add = function(element)
{
	this.items.push(element);
}

View.prototype.remove = function(element)
{
	var index = this.items.indexOf( element );
	if ( index !== -1 ) 
	{
		this.items.splice(index, 1);
	}

}

View.prototype.reset = function()
{
	this.hud.reset();
	this.rotation = 0;
	this.road.reset();
	
	APP.stage.setBackgroundColor(this.worldData.bgColor);

	this.camera.dist = 400
	this.camera.distY = 1000
	this.camera.shake = 0;
	this.camera.z =0;
	this.camera.ratio = 1;
	this.camera.y = 1000;
	this.lastDepth = 501
}

View.prototype.renderCanvas = function(renderer)
{
//	console.log("!!")
	var context = renderer.context;
	
	var globalAlpha = this.worldAlpha;
	
	context.globalAlpha = globalAlpha;
	
	var bgScale = this.w / 1024//this.stage.interactionManager.mouse.global.x / 500;
	if(bgScale < 1)bgScale = 1.3;
	bgScale *= 1.3;
	
	if(this.game.ball.state == Ball.CRASHING || this.game.ball.state == Ball.FALLING)
	{
		//console.log("!!!");
		this.rotation += this.game.ball.bashDirection * 0.002
		bgScale *= 1 + Math.abs(this.rotation) * 0.3 //(1.3)
	}
	else
	{
		if(this.game.controller.controlMode == Controller.TILT)
		{
				this.rotContainer.rotation  += ((-this.game.controller.lean / Math.PI) - this.rotContainer.rotation) * 0.1;
	
		}
		else
		{
			this.rotation += (this.game.controller.lean * 0.1 - this.rotation) * 0.05
		}	
	}
	//this.viewContainer.rotation += ((-this.game.controller.accelerationY / Math.PI) - this.viewContainer.rotation) * 0.1;

	
	//this.viewContainer.rotation+=1
	
//	Math.sin(this.game.ball.position.z/10000)
	this.drop = Math.sin(this.game.ball.position.z/10000) * 200 + 300;
//	bgScale *= Math.this.rotation
	context.drawImage(this.game.world.background, - (1024*bgScale)/2, 200 - this.drop *bgScale + 100, 1024 * bgScale, 1024 * bgScale);
	
	var offset = this.road.getOffset(this.game.ball.position.z)
	
//	if(this.camera.shake > 0)
	{
		
		this.shakeCount+=TIME.DELTA_TIME;
		if(this.shakeCount > 3)
		{
			this.shakeCount = 0;
			
			
			this.position.y = -200 + Math.sin(this.shakeCount) + (Math.random()-0.5) * (this.camera.shake + 3);
			this.position.x =  Math.sin(this.shakeCount/2) + (Math.random()-0.5) * (this.camera.shake + 2);
		}
	}
	
	if(this.game.paused)
	{
		this.position.y =-200;
		this.position.x = 0;
	}
	//if(!offset)offset = 1;
	this.camera.x = (-this.game.ball.position.x);// - this.camera.x) * 0.1;
	//this.cameraBall += (this.camera.distY-this.cameraBall) * 0.1;
	this.cameraBall += (this.camera.distY-this.game.ball.position.y - this.cameraBall) * 0.1;

		//if(this.camera.y  this.game.ball.ground)	this.camera.y = this.game.ball.ground
		/*
	if(this.game.ball.powermode == Ball.GIANT)
	{
		
		
	}
	else
	{
		
		this.camera.x = (-this.game.ball.position.x)// - this.camera.x) * 0.1;
		//this.camera.y += (this.camera.distY-this.game.ball.position.y - this.camera.y) * 0.1;
		
		var pos1 =  1000 - this.game.ball.ground;
		var pos2 = 800 - this.game.ball.position.y;
		
		this.camera.y = pos2//pos1 + (pos2 - pos1) * 0.5//1000 - this.game.ball.ground;
		
	//	this.camera.y += Math.random() * 100;
	//	this.camera.x += Math.random() * 100;
	}
	*/
	this.cameraGround = this.camera.distY - this.game.ball.realGround //(this.game.ball.realy - this.game.ball.ground) * 0.5 ;// (1000-this.game.ball.position.y );
	
	this.camera.y = this.cameraBall + (this.cameraGround - this.cameraBall) * this.camera.ratio;
	this.count += 0.1;
	this.pivot.y = 300;
	//this.rotation = this.count;
	
	
	
	
	//this.camera.y += ( (1500 + Math.abs(this.game.ball.speed) * -5) - this.camera.y ) * 0.1;//Math.sin(this.count) * 30;
	//this.camera.x = Math.cos(this.count/100) * 30;
	
		
	if(!this.camera.lock )
	{
		this.camera.z = -this.game.ball.position.z + this.camera.dist;
	}
	
	//var seg = this.road.segs[(0 + this.road.offset) % this.road.segs.length];
	
	//var ydist = seg.p1.y - this.camera.y;
	//var zdist = this.game.ball.position.z - this.camera.z;

	//console.log
	//this.camera.rotationX = this.game.ball.yspeedT/100//Math.atan2(ydist, zdist);
	
	this.road.render(context, this.camera);
	
	
	// render the road!
	var camera = this.camera;
	
	var focalLength = camera.focus;
	var zoom = camera.zoom;//2;
	
	
	var drawDistance = PROFILE.drawDistance;
	
	// apply 3d transform
	for (var i=this.items.length-1; i >= 0; i--) {
	 	
	 	
		var item = this.items[i];

		if(item instanceof Segment)
		{
			//item.render
			if(item.visible)
			{
		//	console.log("HI")
			//	context.globalAlpha = 1;
				this.road.renderSegment(item, context);
				item.depth = item.z + 1500//0;// + i
			}
		}
		else
		{
			
			
		  	var p1z = item.position.z + camera.z;
		  	
		//	var offset = this.road.getOffset(item.position.z)
			
			
			
		  	var p1y = item.position.y + camera.y;
		  	var p1x = item.position.x + camera.x// + offset.x;
			
		 // 	var xy = cx*p1y - sx*p1z;
		//	var xz = sx*p1y + cx*p1z;
			// rotation around y
	//		var yz = cy*xz - sy*p1x;
	//		var yx = sy*xz + cy*p1x;
			
			// rotation around z
		//	var zx = cz*yx - sz*xy;
		//	var zy = sz*yx + cz*xy;
			
			var x = p1x;
			var y = p1y;
			var z = p1z;
			
			if(z < -focalLength || z > drawDistance)continue;
			context.globalAlpha = globalAlpha * item.alpha;
			
			if(z > drawDistance - 1000)
			{
				context.globalAlpha = ( (drawDistance - z) / 1000 ) * globalAlpha
			}
			else if(z < 299)
			{
				
				context.globalAlpha = z < 0 ? 0 : ( z / 300 ) * globalAlpha
				
			}
			
			var scaleRatio = focalLength/(focalLength + z) * zoom;
			
			item.depth = z;// p1z//item.position.z - 1000//scaleRatio + 0.87;
			
			item.screenPosition.x = (x * scaleRatio); 
			item.screenPosition.y = (y * scaleRatio) + 690/2;// - 200;
		 

		// 	console.log( item.screenPosition.y - (item.view.height * item.scale))
			scaleRatio *= item.scale;
			
			
		 	if(false)//item instanceof Ball)
		 	{
		 		var width = item.width;
		 		var height = item.height;
		 		
		 		var scaleRatio1 = focalLength/(focalLength +  (z+(height/2))) * zoom;
		 		var x1 = ((x-(width/2)) * scaleRatio1); 
		 		var y1 = (y * scaleRatio1) + 690/2;
		 		
		 		var scaleRatio2 = focalLength/(focalLength + (z-(height/2))) * zoom;
		 		var x2 = ((x-(width/2)) * scaleRatio2); 
		 		var y2 = (y * scaleRatio2) + 690/2;
		 		
		 		var scaleRatio3 = focalLength/(focalLength + (z-(height/2))) * zoom;
		 		var x3 = ((x+(width/2)) * scaleRatio3); 
		 		var y3 = (y * scaleRatio3) + 690/2;
		 		
		 		var scaleRatio4 = focalLength/(focalLength + (z+(height/2))) * zoom;
		 		var x4 = ((x+(width/2)) * scaleRatio4); 
		 		var y4 = (y * scaleRatio4) + 690/2;
		 		
		 		context.beginPath();
				
				context.moveTo(x1,
							   y1);
				
				context.lineTo(x2,
							   y2);
				
				context.lineTo(x3,
							   y3);
				
				context.lineTo(x4,
							   y4);
							   
		  		context.closePath();
				context.fill();	
		 	}
		 	
			if(item.position.seg)
			{
				
				if(item.position.seg.gradient < 1)//0.98)
			 	{
				//	context.globalAlpha = item.position.seg.gradient * 3//(item.position.seg.gradient 1 - (0.2 / (item.position.seg.gradient - 0.98))
		///	 		continue;
			 	}
				 
			 /*	
			 	if(item.position.seg.gradient < 1)
			 	{
			 	}*/
			}
			 
			
			if(item instanceof Enemy)
			{
			 	if(!item.exploding)
			 	{
			 	/*	var width = item.wallWidth;
		 		var height = item.height;
		 		z += 100;
		 		
		 		var scaleRatio1 = focalLength/(focalLength +  (z-(height/2))) * zoom;
		 		var x1 = ((x-(width/2)) * scaleRatio1); 
		 		var y1 = (y * scaleRatio1) + 690/2;
		 		
		 		var scaleRatio2 = focalLength/(focalLength + (z-(height/2))) * zoom;
		 		var x2 = ((x-(width/2)) * scaleRatio2); 
		 		var y2 = ((y - item.wallHeight + 100) * scaleRatio2) + 690/2;
		 		
		 		var scaleRatio3 = focalLength/(focalLength + (z-(height/2))) * zoom;
		 		var x3 = ((x+(width/2)) * scaleRatio3); 
		 		var y3 = ((y-item.wallHeight + 100) * scaleRatio3) + 690/2;
		 		
		 		var scaleRatio4 = focalLength/(focalLength + (z-(height/2))) * zoom;
		 		var x4 = ((x+(width/2)) * scaleRatio4); 
		 		var y4 = ((y) * scaleRatio4) + 690/2;
		 			z -= 100;
		 		context.beginPath();
				
				context.moveTo(x1,
							   y1);
				
				context.lineTo(x2,
							   y2);
				
				context.lineTo(x3,
							   y3);
				
				context.lineTo(x4,
							   y4);
							   
		  		context.closePath();
				context.fill();	
				*/
				
				context.drawImage(item.view,
			 					  item.screenPosition.x - (item.visualWidth/2 * scaleRatio),
			 					  item.screenPosition.y - ((item.visualHeight-35) * scaleRatio),
			 					  item.visualWidth * scaleRatio,
			 					  item.visualHeight * scaleRatio);
			 					  
			 	}
			 	else
			 	{
			 	
				 	context.save(); 	
				 	
				 	context.translate(item.screenPosition.x,// - (item.view.width/2 * scaleRatio),
				 					  item.screenPosition.y - (item.wallHeight/2  * item.heightRatio * scaleRatio));
					
					//context.translate(0, 500)
					item.position.y += item.directionY;
					item.position.x += item.directionX;
					 
					item.rotation+=0.2;
					context.rotate(item.rotation)//+=0.1);
					
					
					context.drawImage(item.view, -item.wallWidth/2 * scaleRatio, 
												-item.wallHeight/2 * scaleRatio,
												 item.wallWidth * scaleRatio, 
												 item.wallHeight  * scaleRatio);
					//console.log(scaleY)
				//	item.rotation =
					
					context.restore();
				 	
			 	}
			}
			else if(item instanceof Ball)
			{
				//console.log(offset)
				context.save(); 
				item.depth -= 1000;
				if(item.isFalling)item.depth += 2000;
				
				
				var groundProjection =  ((item.realGround + camera.y + 50) * scaleRatio)// + 690/2;// - 200;
			//	console.log(groundProjection)
				var shadow = item.shadow;
				var shadowScale = 1 - (item.realGround - item.position.y) / 700;
				if(shadowScale < 0)shadowScale = 0;
				else if(shadowScale > 1)shadowScale = 1;
				shadowScale *=0.8;
				
				context.globalAlpha = globalAlpha * shadowScale;
				context.drawImage(shadow.view,
			 					  item.screenPosition.x - (shadow.view.width/2 * shadowScale),
			 					  groundProjection - ((shadow.view.height/2) * shadowScale),
			 					  shadow.view.width * shadowScale,
			 					  shadow.view.height * shadowScale);
			 					  
				// rotate around mi)
				// rotate around middle?
				//scaleRatio *= item.scale;

				//var scaleY = scaleRatio * Math.sin(item.rotation); 
				context.globalAlpha = globalAlpha * item.alpha;
			 					//  scaleRatio = 1;
				context.translate(item.screenPosition.x,// - (item.view.width/2 * scaleRatio),
			 					  item.screenPosition.y - (item.view.height/2  * item.heightRatio * scaleRatio));
				
				//context.translate(0, 500)
				context.rotate(item.rotation)//+=0.1);
				
				var texture = item.view
					
				var frame = texture.frame;
				context.drawImage(texture.baseTexture.source, 
								   frame.x,
								   frame.y,
								   frame.width,
								   frame.height,
								   0.5 * (-frame.width + texture.realSize.x) * scaleRatio, // 0.5 * -frame.width + 
								   0.5 * (-frame.height + texture.realSize.y - 40) * scaleRatio,// 0.5 * -frame.height
								   frame.width * scaleRatio,
								   frame.height * scaleRatio);
			
				/*
				context.drawImage(item.view, -item.view.width/2 * scaleRatio, 
											-item.view.height/2 * scaleRatio,
											 item.view.width * scaleRatio, 
											 item.view.height  * scaleRatio);
								*/
				/*
				if(item.powermode == Ball.MAGNET)
				{
					var magTexture = item.texturesMagnet[item.frame % 15];
					
					var frame = magTexture.frame;
					context.drawImage(magTexture.baseTexture.source, 
									   frame.x,
									   frame.y,
									   frame.width,
									   frame.height,
									   0.5 * (-frame.width + magTexture.realSize.x) * scaleRatio, // 0.5 * -frame.width + 
									   0.5 * (-frame.height + magTexture.realSize.y - 40) * scaleRatio,// 0.5 * -frame.height
									   frame.width * scaleRatio,
									   frame.height * scaleRatio);
									   
				}*/
											 
				//console.log(scaleY)
			//	item.rotation =
				
				context.restore();
				
			}// if(!item.rotation)
			else //if(item instanceof Pickup)
			{
				
				if(item.frame)
				{
					var texture = item.view
					var frame = texture.frame;
					context.drawImage(texture.baseTexture.source, 
								   frame.x,
								   frame.y,
								   frame.width,
								   frame.height,
								   item.screenPosition.x + 0.5 * (-frame.width) * scaleRatio, // 0.5 * -frame.width + 
								   item.screenPosition.y + 0.5 * (-frame.height) * item.heightRatio * scaleRatio,// 0.5 * -frame.height
								   frame.width * scaleRatio,
								   frame.height * scaleRatio);	
				}
				else
				{
					
				//console.log(item.heightRatio)
			 	context.drawImage(item.view,
			 					  item.screenPosition.x - (item.view.width/2 * scaleRatio),
			 					  item.screenPosition.y - (item.view.height * item.heightRatio * scaleRatio),
			 					  item.view.width * scaleRatio,
			 					  item.view.height * scaleRatio);
				}
			}
			/*
			else
			{
				context.save(); 
				
				// rotate around middle?
				scaleRatio *= item.scale;
			 					//  scaleRatio = 1;
				context.translate(item.screenPosition.x,// - (item.view.width/2 * scaleRatio),
			 					  item.screenPosition.y - (item.view.height/2 * scaleRatio));
				
			//	context.translate(0, 500)
				context.rotate(item.rotation/2);
				
				
				context.drawImage(item.view, -item.view.width * scaleRatio, -item.view.height * item.heightRatio * scaleRatio,
											 item.view.width * scaleRatio,  item.view.height * item.heightRatio * scaleRatio);
				
			//	item.rotation =
				
				context.restore();
			}*/
		}
	  			
	};
	
	// only do every 5 segmendts?
	var diff = -this.camera.z -	this.lastDepth
//.	console.log(diff)
	if(diff > 500 )
	{
		this.lastDepth = -this.camera.z;
//		console.log("DEPTH SORT")
	}
		this.items.sort(compareNumbers);
	
	
	if(PROFILE.particles)
	{
		this.pixiDust.render(context, this.camera);
		
		this.speedLines.visible=false;
		if(item.powermode == Ball.CHARGE)
		{
			this.speedLines.visible=true;
			this.speedLines.render(context, this.camera);
		}	
	}
	
	
	
}

View.prototype.renderStuff = function(renderer)
{
	
}

function compareNumbers(a, b) {
  return a.depth - b.depth;
}


View.prototype.resize = function(w, h)
{
	this.w = w;
	this.viewContainer.position.x = Math.floor(w/2);
	this.speedLines.position.y = 200;
//	this.viewContainer.position.y = h/2;
	this.rotContainer.position.y = Math.floor(h/2)// - 200;
	this.hud.resize(w, h);
}




PixiDust = function()
{
	PIXI.DisplayObjectContainer.call(this);
	
	this.particals = [];
	//this.particalPool = new GAME.GameObjectPool(ParticalDust);
	this.max = 20//30// 50// HIGH ? 50 : 5//GAME.HIGH_MODE ? 100 : 10;
	this.count = 0;
	this.maxDist = 1000;
	this.maxWidth = 4000;
	
	this.images = [];

	for (var i=0; i < 3; i++) {
		var image = new Image();
		//image.src = REMOTE_PATH + "img/treetopWorld/leaf"+ (i+1) +".png";
		image.crossOrigin = '';
		image.src = REMOTE_PATH + "img/treetopWorld/dust0"+ (i+1) +".png";
		
		this.images.push(image);
	};
	
	
	for (var i=0; i < this.max; i++) 
	{
		var partical = new ParticalDust()//new this.particalPool.getObject();
			
		partical.position.x = (Math.random()-0.5) * 5000;
		partical.position.y = -500 + Math.random() * 2000;
		partical.position.z = Math.random() * 110640;
		
		
		this.particals.push(partical);
		
		//this.addChild(partical);
	};
			
			
	this.focalLength = 150;
}

// constructor
PixiDust.constructor = PixiDust;
PixiDust.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

PixiDust.prototype.update = function(data)
{
	this.images = data;
}

PixiDust.prototype.render = function(context, camera)
{
	//PIXI.Rope.prototype.updateTransform.call(this);
	
	for (var i=0; i < this.particals.length; i++) 
	{
		var partical =  this.particals[i];
		
		var calcZ = partical.position.z + camera.z *2;
		
		calcZ %= this.maxWidth;
		if(calcZ < 0)calcZ += this.maxWidth;
		
		var scaleRatio = camera.focus/(camera.focus + calcZ);
		
		//partical.scale.x = partical.scale.y = scaleRatio * 1.0;
		partical.position.x += partical.speedX;
		var calcX = ( partical.position.x + camera.x ) + 4000;
		calcX %= 8000;
		if(calcX < 0)calcX += 8000;
		calcX -= 4000;
		
		partical.position.y += partical.speedY;
		var calcY = ( partical.position.y + camera.y ) + 500;
		calcY %= 2000;
		if(calcY < 0)calcY += 2000;
		calcY -= 500;
		
		var x2d = calcX * scaleRatio;
		var y2d = calcY * scaleRatio;
		
		
		
		//partical.rotation += partical.rotationSpeed
	//	console.log(camera.focus + " : "  + x2d + " :"  + y2d)
		scaleRatio *= 2.5;
		
		var image = this.images[partical.imageId];
		
		context.drawImage(image,
	 					  x2d,// - (this.image.width/2 * scaleRatio),
	 					  y2d + (690/2) ,//- (this.image.height * scaleRatio),
						image.width * scaleRatio,
	 					  image.height * scaleRatio);
	
	//	context.drawImage(this.image, x2d, y2d + 690/2);
	};	
}

PixiDust.prototype.resize = function(w, h)
{
	for (var i=0; i < this.particals.length; i++) 
	{
		var partical = this.particals[i];
		partical.position.x = partical.home.x = Math.random() * 110640;
	}
}

ParticalDust = function()
{
	this.position = {x:0, y:0, z:0};
	
	 this.speedY = 10 + Math.random() * 20;
	  this.speedX = 5 + Math.random() * 10;
	this.imageId = ParticalDust.count % 3;
	ParticalDust.count++;
	this.alpha = 0.5 + Math.random() * 0.5;
}

ParticalDust.count = 0;



SpeedLines = function()
{
	PIXI.DisplayObjectContainer.call(this);
	
	this.particals = [];
	//this.particalPool = new GAME.GameObjectPool(ParticalDust);
	this.max = 10//30// 50// HIGH ? 50 : 5//GAME.HIGH_MODE ? 100 : 10;
	this.count = 0;
	this.maxDist = 1000;
	this.maxWidth = 7000;
	
	this.images = [];

	for (var i=0; i < 3; i++) {
		var image = new Image();
		image.src = "img/testLine.png"//treetopWorld/leaf"+ (i+1) +".png";
	//	image.src = "img/snowTriangle_0"+ (i+1) +".png";
		
		this.images.push(image);
	};
	
	
	for (var i=0; i < this.max; i++) 
	{
		var partical = new SpeedLine()//new this.particalPool.getObject();
			
		partical.position.x = (Math.random()-0.5) * 5000;
		partical.position.y = -1000 + Math.random() * 3000;
		partical.position.z = Math.random() * 110640;
		
		
		this.particals.push(partical);
		this.addChild(partical.view)
		//this.addChild(partical);
	};
			
			
	this.focalLength = 150;
}

// constructor
SpeedLines.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

SpeedLines.prototype.render = function(context, camera)
{
	//PIXI.Rope.prototype.updateTransform.call(this);
	
	for (var i=0; i < this.particals.length; i++) 
	{
		var partical =  this.particals[i];
		
		var calcZ = partical.position.z + camera.z * 5;
		
		calcZ %= this.maxWidth;
		if(calcZ < 0)calcZ += this.maxWidth;
		//7000 - 6800;
		
		partical.view.alpha =  (this.maxWidth - calcZ) / 2000;
		
		if(partical.view.alpha > 0.6)partical.view.alpha = 0.6;
		
		
		
		var scaleRatio = camera.focus/(camera.focus + calcZ + 100);
		
		//partical.scale.x = partical.scale.y = scaleRatio * 1.0;
	//	partical.position.x += partical.speedX;
		var calcX = ( partical.position.x + camera.x ) + 4000;
		calcX %= 8000;
		if(calcX < 0)calcX += 8000;
		calcX -= 4000;
		
	//	partical.position.y += partical.speedY;
		var calcY = ( partical.position.y + camera.y ) + 1000;
		calcY %= 4000;
		if(calcY < 0)calcY += 4000;
		calcY -= 1000;
		
		var x2d = calcX * scaleRatio;
		var y2d = calcY * scaleRatio;
		
		partical.view.rotation = Math.atan2(y2d, x2d) ;
		partical.view.position.x = x2d;
		partical.view.position.y = y2d;
		partical.view.scale.x = partical.view.scale.y = scaleRatio * 2.5;
		//partical.rotation += partical.rotationSpeed
	//	console.log(camera.focus + " : "  + x2d + " :"  + y2d)
		scaleRatio *= 2.5;
		
	//	var image = this.images[partical.imageId];
		/*
		context.drawImage(image,
	 					  x2d,// - (this.image.width/2 * scaleRatio),
	 					  y2d + (690/2) ,//- (this.image.height * scaleRatio),
						image.width * scaleRatio,
	 					  image.height * scaleRatio);*/
	 					 
	//	context.drawImage(this.image, x2d, y2d + 690/2);
	};	
}

SpeedLines.prototype.resize = function(w, h)
{
	for (var i=0; i < this.particals.length; i++) 
	{
		var partical = this.particals[i];
		partical.position.x = partical.home.x = Math.random() * 110640;
	}
}

SpeedLine = function(lineTexture)
{
	this.view = PIXI.Sprite.fromImage(REMOTE_PATH + "img/testLine.png", true);
	this.view.alpha = 0.6
	this.position = {x:0, y:0, z:0};
	
	 this.speedY = 10 + Math.random() * 20;
	 this.speedX = 5 + Math.random() * 10;
	this.imageId = ParticalDust.count % 3;
	ParticalDust.count++;
	this.alpha = 0.5 + Math.random() * 0.5;
}

SpeedLine.prototype = Object.create( PIXI.Sprite.prototype );
ParticalDust.count = 0;


Time = function()
{
	this.DELTA_TIME = 1;	
	this.lastTime = Date.now();
	this.frames = 0;
	this.speed = 1;
}

Time.constructor = Time;

Time.prototype.update = function()
{
	
	this.frames ++;

	//if(this.frames > 30)
	//{
		var time = Date.now();
		
		this.frames = 0;
		
		var currentTime =  time;
		var passedTime = currentTime - this.lastTime;
	//	console.log(passedTime)
		//if(passedTime > 3000)passedTime = 3000;
	
		///this.DELTA_TIME = passedTime ;
//				1 = 17  // 60??
		this.DELTA_TIME = ((passedTime) * 0.06);
		
		if(this.DELTA_TIME > 3)this.DELTA_TIME = 3;
		
		this.DELTA_TIME *= this.speed;
		
		
	//	console.log(this.DELTA_TIME);
//			trace(DELTA_TIME);
		// 60 ---> 1
		// 30 ---> 2
	//	this.DELTA_TIME =1//2.3;
		this.lastTime = currentTime;
	//}
	
}

// create an instance!
TIME = new Time();
/**
 * @author Forestry Games
 */

var GAME = GAME || {};

GAME.GameObjectPool = function(classType, cook)
{
	this.classType = classType;
	this.pool = [];
	
	var cookAmount = cook || 20;
	
	for (var i=0; i < cookAmount; i++) {
	  
	  	this.pool.push(new this.classType());
	};
}

// constructor
GAME.GameObjectPool.constructor = GAME.GameObjectPool;

GAME.GameObjectPool.prototype.getObject = function()
{
	var object = this.pool.pop();
	if(!object)
	{
		object =  new this.classType();
		
	}
	return object;
}

GAME.GameObjectPool.prototype.returnObject = function(object)
{
	//this.pool.push(object);
}







SpeedLines = function()
{
	PIXI.DisplayObjectContainer.call(this);
	
	this.particals = [];
	//this.particalPool = new GAME.GameObjectPool(ParticalDust);
	this.max = 10//30// 50// HIGH ? 50 : 5//GAME.HIGH_MODE ? 100 : 10;
	this.count = 0;
	this.maxDist = 1000;
	this.maxWidth = 7000;
	
	this.images = [];

	for (var i=0; i < 3; i++) {
		var image = new Image();
		image.src = "img/testLine.png"//treetopWorld/leaf"+ (i+1) +".png";
	//	image.src = "img/snowTriangle_0"+ (i+1) +".png";
		
		this.images.push(image);
	};
	
	
	for (var i=0; i < this.max; i++) 
	{
		var partical = new SpeedLine()//new this.particalPool.getObject();
			
		partical.position.x = (Math.random()-0.5) * 5000;
		partical.position.y = -1000 + Math.random() * 3000;
		partical.position.z = Math.random() * 110640;
		
		
		this.particals.push(partical);
		this.addChild(partical.view)
		//this.addChild(partical);
	};
			
			
	this.focalLength = 150;
}

// constructor
SpeedLines.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

SpeedLines.prototype.render = function(context, camera)
{
	//PIXI.Rope.prototype.updateTransform.call(this);
	
	for (var i=0; i < this.particals.length; i++) 
	{
		var partical =  this.particals[i];
		
		var calcZ = partical.position.z + camera.z * 5;
		
		calcZ %= this.maxWidth;
		if(calcZ < 0)calcZ += this.maxWidth;
		//7000 - 6800;
		
		partical.view.alpha =  (this.maxWidth - calcZ) / 2000;
		
		if(partical.view.alpha > 0.6)partical.view.alpha = 0.6;
		
		
		
		var scaleRatio = camera.focus/(camera.focus + calcZ + 100);
		
		//partical.scale.x = partical.scale.y = scaleRatio * 1.0;
	//	partical.position.x += partical.speedX;
		var calcX = ( partical.position.x + camera.x ) + 4000;
		calcX %= 8000;
		if(calcX < 0)calcX += 8000;
		calcX -= 4000;
		
	//	partical.position.y += partical.speedY;
		var calcY = ( partical.position.y + camera.y ) + 1000;
		calcY %= 4000;
		if(calcY < 0)calcY += 4000;
		calcY -= 1000;
		
		var x2d = calcX * scaleRatio;
		var y2d = calcY * scaleRatio;
		
		partical.view.rotation = Math.atan2(y2d, x2d) ;
		partical.view.position.x = x2d;
		partical.view.position.y = y2d;
		partical.view.scale.x = partical.view.scale.y = scaleRatio * 2.5;
		//partical.rotation += partical.rotationSpeed
	//	console.log(camera.focus + " : "  + x2d + " :"  + y2d)
		scaleRatio *= 2.5;
		
	//	var image = this.images[partical.imageId];
		/*
		context.drawImage(image,
	 					  x2d,// - (this.image.width/2 * scaleRatio),
	 					  y2d + (690/2) ,//- (this.image.height * scaleRatio),
						image.width * scaleRatio,
	 					  image.height * scaleRatio);*/
	 					 
	//	context.drawImage(this.image, x2d, y2d + 690/2);
	};	
}

SpeedLines.prototype.resize = function(w, h)
{
	for (var i=0; i < this.particals.length; i++) 
	{
		var partical = this.particals[i];
		partical.position.x = partical.home.x = Math.random() * 110640;
	}
}

SpeedLine = function(lineTexture)
{
	this.view = PIXI.Sprite.fromImage(REMOTE_PATH + "img/testLine.png", true);
	this.view.alpha = 0.6
	this.position = {x:0, y:0, z:0};
	
	 this.speedY = 10 + Math.random() * 20;
	 this.speedX = 5 + Math.random() * 10;
	this.imageId = ParticalDust.count % 3;
	ParticalDust.count++;
	this.alpha = 0.5 + Math.random() * 0.5;
}

SpeedLine.prototype = Object.create( PIXI.Sprite.prototype );
ParticalDust.count = 0;

/**
 * @author Forestry Games
 */

/**
 * @author Forestry Games
 */

var GAME = GAME || {};

var laserCount = 0;

GAME.PickupManager = function(engine)
{
	this.engine = engine;
	
	this.pickups = [];
	
	this.pickupPool = new GAME.GameObjectPool(Pickup);
	this.spawnCount = 000;
	this.count = 0;
	this.offsetCount = 0;
	
	this.textures = [];
	
	for (var i=0; i < 40; i+=2) {
	  
//	  var image = new Image();
//	  image.crossOrigin = '';
	  
	  var pos = i;
	  var id =  (i < 8) ? "0" + (i+2) : (i +2) ;
	  
	//  image.src = REMOTE_PATH + "img/pickups/goldenCrumb/crumb00" +id+ ".png";
	  this.textures.push(PIXI.Texture.fromFrame("crumb00" +id+ ".png"));
	  
	  
	};
	
	
	this.powerupTexture = [];
	
	for (var i=0; i < 40; i+=2) {
	  
	  //var image = new Image();
	 // image.crossOrigin = '';
	   var id =  (i < 8) ? "0" + (i+2) : (i +2) ;
	  
		//  image.src = REMOTE_PATH + "img/pickups/magChill/magChill00" + id + ".png";//"img/rings/Ring_0" + (i+1) + ".png";
	 // this.powerupTexture.push(image);
	  this.powerupTexture.push(PIXI.Texture.fromFrame("magChill00" +id+ ".png"));
	  
	  
	};
	
	this.powerupTexture2 = [];
	
	for (var i=0; i < 40; i+=2) {
	  
	  //var image = new Image();
	///  image.crossOrigin = '';
	  var id =  (i < 8) ? "0" + (i+2) : (i +2) ;
	  //image.src = REMOTE_PATH + "img/pickups/rainbowRoad/powerUps_rainbow00" + id +".png";//"img/rings/Ring_0" + (i+1) + ".png";
	//  this.powerupTexture2.push(image);
	  
	   this.powerupTexture2.push(PIXI.Texture.fromFrame("powerUps_rainbow00" +id+ ".png"));
	  
	 
	};
	
	this.powerupTexture3 = [];
	
	for (var i=0; i < 10; i++) {
	  
	  var image = new Image();
	  image.crossOrigin = '';
	  image.src = REMOTE_PATH + "img/pickups/pickupDestructo.png";//"img/rings/Ring_0" + (i+1) + ".png";
	  this.powerupTexture3.push(image);
	  
	  
	};
	
	this.pos = 0
}

// constructor
GAME.PickupManager.constructor = GAME.PickupManager;

GAME.PickupManager.prototype.update = function()
{
	if(this.joyrideMode)
	{
		this.spawnCount += TIME.DELTA_TIME;
		
		if(this.spawnCount > 15 * 3)
		{
			this.pos += 0.15;
			this.spawnCount = 0;
			
			
			var ratio = (Math.sin(this.pos * 3) + 1 ) * 0.5;
		//	console.log(ratio)
			
			this.addSuperPowerup(this.engine.ball.position.z + PROFILE.drawDistance, 0.3 + (ratio *0.4))
		//	this.addSuperPowerup(this.engine.ball.position.z + 7000, 0)
		}
	}
	
	this.spawnCount += TIME.DELTA_TIME;
	//console.log(this.spawnCount)
	if(this.spawnCount > 1000)
	{
		this.pos += 0.15;
		this.spawnCount = 0;
		
		//var ratio = (Math.sin(this.pos * 3) + 1 ) * 0.5;
		this.addPowerup(this.engine.ball.position.z + PROFILE.drawDistance, 0.5, Math.floor(Math.random() * 2))//30 + (ratio *40))
	}
		
	this.count += TIME.DELTA_TIME * 0.3;
	
	for (var i = 0; i < this.pickups.length; i++) 
	{
		var pickup = this.pickups[i]
		
		if(!pickup.powerup)
		{
			pickup.view = this.textures[Math.round((pickup.offset) + this.count) % 20];
		}
		else
		{
			pickup.view = pickup.frames[Math.round((pickup.offset) + this.count) % pickup.frames.length];
		}
		//	console.log(pickup.view )
		//pickup.update();
		
		if(pickup.isPickedUp)
		{
			pickup.scale = 3 * (1-pickup.ratio *0.5) ;
		//	pickup.view.scale.y = 1-pickup.ratio;
			pickup.position.x = pickup.pickupPosition.x + (this.engine.ball.position.x - pickup.pickupPosition.x) * pickup.ratio;
			pickup.position.y = pickup.pickupPosition.y + (this.engine.ball.position.y - pickup.pickupPosition.y - 50) * pickup.ratio;
			pickup.position.z = pickup.pickupPosition.z + (this.engine.ball.position.z - pickup.pickupPosition.z + 10) * pickup.ratio;
			
			
			if(pickup.ratio > 0.99)
			{
				if(APP.pickupSound)
				{
					/*
					if(pickup.powerup)
					{
						
					}
					else
					{
					}*/
						APP.pickupSound.play();
				}
				this.pickupPool.returnObject(pickup);
				this.pickups.splice(i, 1);
				this.engine.view.remove(pickup);
				
				i--;
			}
	
		}
		else
		{
			if(pickup.position.z < -this.engine.view.camera.z)
			{
				// remove!
				
				this.engine.view.remove(pickup);
				this.pickupPool.returnObject(pickup);
				this.pickups.splice(i, 1);
				i--;
			}
		}
		
	}
}


GAME.PickupManager.prototype.restart = function()
{
	this.destroyAll();
	this.spawnCount = 0;
	this.joyrideMode = false;
}

GAME.PickupManager.prototype.addPickup = function(z, x)
{
	var pickup = this.pickupPool.getObject();
	pickup.powerup = false;
	// map z to track..
	pickup.position.z = z;
	pickup.position.x = x;
	pickup.offset = this.offsetCount;
	this.offsetCount+= Math.floor(40/6);
	this.engine.view.road.mapPosition(pickup.position)
	
	this.pickups.push(pickup);
	this.engine.view.add(pickup);
}

GAME.PickupManager.prototype.addSuperPowerup = function(z, x)
{
	var pickup = this.pickupPool.getObject();
	// map z to track..
	pickup.position.z = z
	pickup.position.x = x
	pickup.offset = this.offsetCount;
	this.offsetCount++;
	this.engine.view.road.mapPowerup(pickup.position, x)
//	pickup.position.y -= 500;
	
	
	this.pickups.push(pickup);
	this.engine.view.add(pickup);
}

GAME.PickupManager.prototype.addPowerup = function(z, x, id)
{
	var pickup = this.pickupPool.getObject();
	pickup.powerup = true;
	pickup.id = id//Math.floor(Math.random() * 2);
	
	if(pickup.id == 0)
	{
		pickup.frames = this.powerupTexture
	}
	else if(pickup.id == 1)
	{
		pickup.frames = this.powerupTexture2
	}
	else
	{
		pickup.frames = this.powerupTexture3
		
	}
	// map z to track..
	pickup.position.z = z
	pickup.position.x = x
	pickup.offset = this.offsetCount;
	this.offsetCount++;
	this.engine.view.road.mapPowerup(pickup.position, 0.5)
	pickup.position.y -= 700;
	
	
	this.pickups.push(pickup);
	this.engine.view.add(pickup);
}

GAME.PickupManager.prototype.removePickup = function(index)
{
	var pickup = this.pickups[index];
	if(!pickup)return;
	
	pickup.isPickedUp = true;
	pickup.steve = this.engine.ball;
	pickup.pickupPosition = {x:pickup.position.x, y:pickup.position.y, z:pickup.position.z}//.clone();
	pickup.ratio = 0;
	
	if(this.engine.ball.powermode == Ball.MAGNET)
	{
		TweenLite.to(pickup, 0.3, {ratio:1, ease:Sine.easeIn});
	}
	else
	{
		TweenLite.to(pickup, 0.1, {ratio:1, ease:Sine.easeOut});
	}
}


GAME.PickupManager.prototype.destroyAll = function()
{
	for (var i = 0; i < this.pickups.length; i++) 
	{
		var pickup = this.pickups[i]
			// remove!
		this.pickupPool.returnObject(pickup);
		this.engine.view.remove(pickup);
	}
	
	this.pickups = [];
}

GAME.PickupManager.prototype.destroyAllOffScreen = function()
{
	for (var i = 0; i < this.pickups.length; i++) 
	{
		var pickup = this.pickups[i];
		
		if(pickup.x > GAME.camera.x + GAME.width)
		{
			this.pickupPool.returnObject(pickup);
			this.engine.view.game.removeChild(pickup.view);
			this.pickups.splice(i, 1);
			i--;
		}
			// remove!
		
	}
	
}
/**
 * @author Forestry Games
 */

/**
 * @author Forestry Games
 */

var GAME = GAME || {};

var laserCount = 0;

GAME.ExtraManager = function(engine)
{
	this.engine = engine;
	
	this.pickups = [];
	
	this.extraPool = new GAME.GameObjectPool(SignPost);
	this.spawnCount = 000;
	this.count = 0;
	
	
	this.spawnCount2 = 0;
	
	this.spawnCount3 = 0;
	
	this.offsetCount = 0;
	
	this.textures = [];
	
	for (var i=0; i < 10; i++) {
	  
	  var image = new Image();
	  image.src = REMOTE_PATH + "img/pickups/nugget.png";//"img/rings/Ring_0" + (i+1) + ".png";
	  this.textures.push(image);
	  
	  
	};
	
	
	this.powerupTexture = [];
	
	for (var i=0; i < 10; i++) {
	  
	  var image = new Image();
	  image.src = REMOTE_PATH + "img/rainbowChilly.png";//"img/rings/Ring_0" + (i+1) + ".png";
	  this.powerupTexture.push(image);
	  
	  
	};
	
	
	this.cloudImage = new Image();
	this.cloudImage.crossOrigin = ''
	this.cloudImage.src = REMOTE_PATH + "img/forest_cloud_01.png";
	
	this.signImage = new Image();
	this.signImage.crossOrigin = ''
	this.signImage.src = REMOTE_PATH + "img/signPost.png";
	this.county2 = 0;
	
	this.pos = 0;
	
	this.tutImage = new Image();
	this.tutImage.crossOrigin = ''
	this.tutImage.src = REMOTE_PATH + "img/desert_cloud.png";
	
	
}

// constructor
GAME.ExtraManager.constructor = GAME.ExtraManager;

GAME.ExtraManager.prototype.update = function()
{
	this.spawnCount += TIME.DELTA_TIME;
	
	if(PROFILE.extra )
	{
		

		if(this.spawnCount > 15 * 3 * 5)
		{
			this.pos += 0.15;
			this.spawnCount = 0;
			
			
			
			this.addSign(this.engine.ball.position.z + 7000,0.5)
		//	this.addSuperPowerup(this.engine.ball.position.z + 7000, 0)
		}
		
		this.spawnCount2 += TIME.DELTA_TIME;
		
		if(this.spawnCount2 > 15 * 3)
		{
			this.pos += 0.15;
			this.spawnCount2 = 0;
			
			
			
			this.addCloud(this.engine.ball.position.z + 7000,0.5)
		//	this.addSuperPowerup(this.engine.ball.position.z + 7000, 0)
		}
		
		this.spawnCount3 += TIME.DELTA_TIME;
		
		if(this.spawnCount3 > 15 * 3 * 5 * 0.7)
		{
			this.pos += 0.15;
			this.spawnCount3 = -Math.random() * 500;
			
			
			
			this.addIsland(this.engine.ball.position.z + 7000,0.5)
		//	this.addSuperPowerup(this.engine.ball.position.z + 7000, 0)
		}
	}
	for (var i = 0; i < this.pickups.length; i++) 
	{
			var pickup =  this.pickups[i];
			
			if(pickup.position.z < -this.engine.view.camera.z)
			{
				// remove!
//				console.log("GONE!")
				
				this.engine.view.remove(pickup);
				this.extraPool.returnObject(pickup);
				this.pickups.splice(i, 1);
				i--;
			}
	}
}


GAME.ExtraManager.prototype.restart = function()
{
	this.destroyAll();
}

GAME.ExtraManager.prototype.addIsland = function(z, x)
{
	var extra = this.extraPool.getObject();
	extra.view = this.engine.world.extras[2];
	extra.frame = false;
	var val = Math.random()
	
	
	// map z to track..
	extra.position.z = z
	extra.position.x = x
	this.engine.view.road.mapPowerup(extra.position, x)
	
	
	if(val < 0.5)
	{
		extra.position.x += 5000;
		
	}
	else
	{
		extra.position.x -= 5000;
	}
	extra.position.y += 1000;
	
	this.pickups.push(extra);
	this.engine.view.add(extra);
}

GAME.ExtraManager.prototype.addSign = function(z, x)
{
	var extra = this.extraPool.getObject();
	extra.frame = false;
	extra.view = this.engine.world.extras[0];
	
	
	
	// map z to track..
	extra.position.z = z;
	extra.position.x = x;
	this.engine.view.road.mapPowerup(extra.position, x)
	extra.position.y += 100;
	
	//console.log(extra.position.width);
	
	extra.scale = (extra.position.width * 5) / 804
	extra.scale = 10;
//	extra.seg
	this.pickups.push(extra);
	this.engine.view.add(extra);
}

GAME.ExtraManager.prototype.addCloud = function(z, x)
{
	var extra = this.extraPool.getObject();
	extra.view = this.cloudImage;
	extra.frame = false;
	// map z to track..
	extra.scale = 17 + Math.random() * 6;
	extra.position.z = z 
	
	
	this.county2 += 0.5;
	
	this.county2 = Math.random() * Math.PI;
	this.county2 %= Math.PI;
	
	this.county2 *= 1.2;
	extra.position.x = Math.sin(this.county2 - Math.PI/2) * 5000;
	
	this.engine.view.road.mapPowerup(extra.position, x)
	extra.position.y += Math.cos(this.county2 - Math.PI/2) * 5000//* 0.5;
	

	extra.position.y += 2000
	
	this.pickups.push(extra);
	this.engine.view.add(extra);
}

GAME.ExtraManager.prototype.addTut = function(z, x, type)
{
	var extra = this.extraPool.getObject();
	
	if(!this.tutMap)
	{
		this.tutMap = {
			
			tutObstacles:"avoid_obstacles.png",
			tutControl:"steer_keys.png",
			tutPickup:"collect_crumbs.png",
			tutJump:"jump_desktop.png",
			tutPowerup:"collect_powewrups.png",
			tutReady:"readyGO.png"
			
		}
		
		var controlType = APP.gameScreen.game.controller.controlMode;
		
		if(controlType == Controller.TOUCH)
		{
			this.tutMap.tutControl = "steer_touch.png";
			this.tutMap.tutJump = "jump_mobile.png";
		}
		else if(controlType == Controller.TILT)
		{
			this.tutMap.tutControl = "steer_tilt.png";
			this.tutMap.tutJump = "jump_mobile.png";
		}
		
		
		
	}	
	
	
//	this.tutImage = new Image();
//	this.tutImage.src = REMOTE_PATH + "img/tutorial/" + this.tutMap[type];
//	console.log(this.tutImage.src)
	extra.view = PIXI.Texture.fromFrame(this.tutMap[type]);
	extra.frame = true;
	
	var extraBg = this.extraPool.getObject();
	extraBg.frame = true;
	extraBg.view =  PIXI.Texture.fromFrame("tutorialBG.png");
	
	//console.log(z + " : " + x + " : " + type);
	// map z to track..
	extra.position.z = z
	extra.position.x = x
	
	if(type == "tutPowerup")
	{
		this.engine.pickupManager.addPowerup(z - 400,x, 0);
	//	pickup.id = 1;
	//	pickup.frames = this.powerupTexture
		// map z to track..
	
	}
	
	this.engine.view.road.mapPosition(extra.position);
	
	
	
//	this.engine.view.road.mapPowerup(extra.position, x)
	extra.position.y -= 1300;
	extra.position.y -= 300;
//	console.log(extra.position.x);
	
	extra.scale = 10;

	extraBg.position.x = extra.position.x;
	extraBg.position.y = extra.position.y - 100;
	extraBg.position.z = extra.position.z+500;
	extraBg.scale = extra.scale;
//	extra.seg
	this.pickups.push(extra);
	this.engine.view.add(extra);
	
	this.pickups.push(extraBg);
	this.engine.view.add(extraBg);
}



GAME.ExtraManager.prototype.removeExtra = function(index)
{
	var pickup = this.pickups[index];
	if(!pickup)return;
	
	pickup.isPickedUp = true;
	pickup.steve = this.engine.ball;
	pickup.pickupPosition = {x:pickup.position.x, y:pickup.position.y, z:pickup.position.z}//.clone();
	pickup.ratio = 0;
	TweenLite.to(pickup, 0.1, {ratio:1, ease:Sine.easeOut});//.ratiopickup.ratio += (1-pickup.ratio)*0.1 * TIME.DELTA_TIME;
}


GAME.ExtraManager.prototype.destroyAll = function()
{
	for (var i = 0; i < this.pickups.length; i++) 
	{
		var pickup = this.pickups[i]
			// remove!
		this.extraPool.returnObject(pickup);
		this.engine.view.remove(pickup);
	}
	
	this.pickups = [];
}

SignPost = function()
{
	GameElement.call( this );
	this.view.crossOrigin = '';
	this.view.src = REMOTE_PATH + "img/signPost.png";
	this.scale = 9;
	this.width = 100;
	this.heightRatio = 0.85;
	this.currentFrame = 0;
}

SignPost.prototype = Object.create( GameElement.prototype );
/**
 * @author Forestry Games
 */

/**
 * @author Forestry Games
 */

var GAME = GAME || {};

GAME.EnemyManager = function(engine)
{
	this.engine = engine;
	
	this.pickups = [];
	
	this.pickupPool = new GAME.GameObjectPool(Enemy);
	this.spawnCount = 0;
	
	this.pos = 0
}

// constructor
GAME.EnemyManager.constructor = GAME.EnemyManager;

GAME.EnemyManager.prototype.update = function()
{
	if(!this.engine.joyrideMode)
	{
		this.spawnCount += TIME.DELTA_TIME;
		
		if(this.spawnCount > 105)
		{
			this.pos += 0.15;
		//	console.log(">>")
			this.spawnCount = 0;
		//	this.addPickup(this.engine.ball.position.z + 10000, 50)//Math.random() * 100)
		}
	}
	
	for (var i = 0; i < this.pickups.length; i++) 
	{
		var pickup = this.pickups[i]
		
		//pickup.update();
		
		if(pickup.isPickedUp)
		{
				
			pickup.ratio += (1-pickup.ratio)*0.3 * GAME.time.DELTA_TIME;
		//	pickup.view.scale.x = 1-pickup.ratio;
		//	pickup.view.scale.y = 1-pickup.ratio;
		//	pickup.position.x = pickup.pickupPosition.x + (this.engine.player.position.x - pickup.pickupPosition.x) * pickup.ratio;
		//	pickup.position.y = pickup.pickupPosition.y + (this.engine.player.position.y - pickup.pickupPosition.y) * pickup.ratio;
			
			if(pickup.ratio > 0.99)
			{
				this.pickupPool.returnObject(pickup);
				this.pickups.splice(i, 1);
				this.engine.view.game.removeChild(pickup.view);
				i--;
			}
	
		}
		else
		{
			if(pickup.position.z < -this.engine.view.camera.z)
			{
				// remove!
				this.engine.view.remove(pickup);
				this.pickupPool.returnObject(pickup);
				this.pickups.splice(i, 1);
				i--;
			}
		}
		
	}
}

GAME.EnemyManager.prototype.addPickup = function(z, x)
{
	var pickup = this.pickupPool.getObject();
	pickup.exploding = false;
	// map z to track..
	pickup.position.z = z
	pickup.position.x = x
	this.engine.view.road.mapPosition(pickup.position)
	
	this.pickups.push(pickup);
	this.engine.view.add(pickup);
}

GAME.EnemyManager.prototype.addWall = function(z, x, width)
{
	var pickup = this.pickupPool.getObject();
	pickup.exploding = false;
	// map z to track..
	pickup.position.z = z;
	pickup.position.x = x + width/2;
	
	if(width)
	{
		pickup.wallWidth = pickup.visualWidth = width;
		pickup.wallHeight = pickup.visualHeight = 300;
		if(width < ( 270 + 65 ) *3 )
		{
			pickup.view = this.engine.world.walls[0];
		}
		else
		{
			 pickup.view = this.engine.world.walls[1]; 
		}
	}
	else
	{
		pickup.wallWidth = this.engine.world.baddy[0].width * 1.5;
		pickup.wallHeight = this.engine.world.baddy[0].height * 2;
		pickup.visualWidth = this.engine.world.baddy[0].width * 2;
		pickup.visualHeight = this.engine.world.baddy[0].height * 2;
		
		pickup.view = this.engine.world.baddy[0];
	}
	
	
	

	this.engine.view.road.mapPosition(pickup.position)
	
	this.pickups.push(pickup);
	this.engine.view.add(pickup);
}

GAME.EnemyManager.prototype.removePickup = function(index)
{
	var pickup = this.pickups[index];
	pickup.isPickedUp = true;
	pickup.steve = this.engine.steve;
	pickup.pickupPosition = {x:pickup.position.x, y:pickup.position.y}//.clone();
	pickup.ratio = 0;
}

GAME.EnemyManager.prototype.restart = function()
{
	this.destroyAll();
}

GAME.EnemyManager.prototype.destroyAll = function()
{
	for (var i = 0; i < this.pickups.length; i++) 
	{
		var pickup = this.pickups[i]
			// remove!
		this.pickupPool.returnObject(pickup);
		this.engine.view.remove(pickup);
	}
	
	this.pickups = [];
}

GAME.EnemyManager.prototype.destroyAllOffScreen = function()
{
	for (var i = 0; i < this.pickups.length; i++) 
	{
		var pickup = this.pickups[i];
		
		if(pickup.x > GAME.camera.x + GAME.width)
		{
			this.pickupPool.returnObject(pickup);
			this.engine.view.game.removeChild(pickup.view);
			this.pickups.splice(i, 1);
			i--;
		}
			// remove!
		
	}
	
}

var GAME = GAME || {};

Pickup = function()
{
	GameElement.call( this );
	this.view.crossOrigin = ''
	this.frame = true;
	this.view.src = REMOTE_PATH +"img/pickups/nugget.png";
	this.scale = 3.4;
	this.width = 100;
	this.heightRatio = 0.85;
	this.currentFrame = 0;
}

Pickup.prototype = Object.create( GameElement.prototype );


var GAME = GAME || {};

Enemy = function()
{
	GameElement.call( this );
	this.view.crossOrigin = true;
	this.view.src = REMOTE_PATH + "img/title.png"
	this.scale = 1;
	this.wallWidth = 1500/2;
	this.wallHeight = 800;
	
	this.exploding = false;
}

Enemy.prototype = Object.create( GameElement.prototype );

Enemy.flip = true;

Enemy.prototype.explode = function()
{
	if(this.exploding)return;
	this.exploding = true;
	
	this.directionY = -100;//Math.random() * 10;
	this.directionX = 100;//Math.random() * 10;
	
	Enemy.flip = !Enemy.flip;
	
	if(Enemy.flip)this.directionX *= -1;
	
	//TweenLite.to(this.position, 1, {x:this.position.x + 2000})
	//TweenLite.to(this, 1, {rotation:10})
	//this.rotation
}

/**
 * @author Forestry Games
 */

/**
 * @author Forestry Games
 */

var GAME = GAME || {};

var laserCount = 0;

GAME.CollisionManager = function(engine)
{
	this.engine = engine;
}

// constructor
GAME.CollisionManager.constructor = GAME.CollisionManager;

GAME.CollisionManager.prototype.update = function()
{
	//if(this.engine.isPlaying) 
	//this.playerVsBlock();
	
	if(this.engine.ball.isDead)return;
	
	this.playerVsPickup();
	this.playerVsEnemy();
	//this.playerVsFloor();
}

GAME.CollisionManager.prototype.playerVsEnemy = function()
{
	var enemies = this.engine.enemyManager.pickups;
	var steve = this.engine.ball;
	
	for (var i = 0; i < enemies.length; i++) 
	{
		var enemy = enemies[i]
		
		var zdist = enemy.position.z + 100 - steve.position.z;
		
		var depth = 10//enemy.width + steve.width// * 3;
		
		if(zdist > -depth/2 && zdist < steve.width/2)
		{
			var xdist = enemy.position.x - steve.position.x;
		
			if(xdist > -enemy.wallWidth/2 && xdist < enemy.wallWidth/2)
			{
			//	alert(zdist)
			//	pickup.view.alpha = 0.4;
			//	steve.die();
			//	console.log(steve.position.y + " : " + enemy.position.y);
				//297.97686273557645 : -297.83869584184487 
				//-269.65788265418746 : -274.6897186094575 CollisionManager.js:52
				if(steve.position.y > enemy.position.y - (enemy.wallHeight - 100))
				{
				//	console.log("!!!" );
				
					if(steve.powermode != Ball.GIANT)
					{
						steve.deathHit();
						this.engine.gameover();
					}
					else
					{
						enemy.explode();
					}
					
				}
			//	this.engine.pickupManager.removePickup(i);
				//this.engine.pickup();
		//		i--;
			}
		}
	}
}

GAME.CollisionManager.prototype.playerVsPickup = function()
{
	
	var pickups = this.engine.pickupManager.pickups;
	var steve = this.engine.ball;
	
	for (var i = 0; i < pickups.length; i++) 
	{
		var pickup = pickups[i]
		if(pickup.isPickedUp)continue;
		
	
		var zdist = pickup.position.z - steve.position.z;
		
		// early out!
		if(zdist > 500 + steve.hitDistance)break;
		
		//console.log("HIT?")
		var depth = pickup.width + steve.width + steve.hitDistance// * 3;
		
		if(zdist > -depth/2 && zdist < depth/2)
		{
			var xdist = pickup.position.x - steve.position.x;
		
			if(xdist > -depth/2 && xdist < depth/2)
			{
		//		var ydist = pickup.position.y - steve.position.y;
				//var depth =  pickup.width + steve.width 
				//if(ydist > -depth/2 && ydist < depth/2)
				{
				//	pickup.view.alpha = 0.4;
				//	steve.die();
					if(pickup.powerup)
					{
						if(!steve.jumping)return;
						
					//	steve.magnetMode();
						var rand = Math.random();
						
						if(pickup.id == 0)
						{
							steve.magnetMode();
						}
						else if(pickup.id == 1)
						{
							steve.chargeMode();
						}
						else
						{
							steve.giantMode();
						}
						
					}	
					
					
					steve.pulse();
					this.engine.pickupManager.removePickup(i);
					this.engine.pickupCount++;
					this.engine.score += 100;
					//this.engine.pickup();
			//		i--;
				}
			}
		}
	}
}
Road = function(view)
{
	this.drawDistance = 10000;
	this.view = view;
	
	this.segs = [];
	
	this.segSize = 500;
	this.offset = 0;
	
	this.baseWidth = 1500;
	//this.depthSegs
	
	this.dangerStrip = new Image();
	this.dangerStrip.crossOrigin = '';
	this.dangerStrip.src = REMOTE_PATH + "img/stripFloor.png";
	
	this.testLedge = new Image();
	this.testLedge.crossOrigin = '';
	this.testLedge.src = REMOTE_PATH + "img/testLedge.png";
	
	this.testHoleSign = new Image()
	this.testHoleSign.crossOrigin = '';
	this.testHoleSign.src = REMOTE_PATH + "img/treetopWorld/flameTorch_frame01.png";
	
	this.testHoleSign2 = new Image()
	this.testHoleSign2.crossOrigin = '';
	this.testHoleSign2.src = REMOTE_PATH + "img/treetopWorld/flameTorch_frame02.png";
	
	this.testHoleSign3 = new Image()
	this.testHoleSign3.crossOrigin = '';
	this.testHoleSign3.src = REMOTE_PATH + "img/treetopWorld/flameTorch_frame03.png";
	
	this.testHoleSign4 = new Image()
	this.testHoleSign4.crossOrigin = '';
	this.testHoleSign4.src = REMOTE_PATH + "img/treetopWorld/flameTorch_frame04.png";
	
	this.signFrames = [this.testHoleSign, this.testHoleSign2,
					   this.testHoleSign3, this.testHoleSign4];
	this.frameCount = 0;
	//console.log(trackData)
	for(var i = 0; i < PROFILE.trackSize; i ++)
	{
		var segment = new Segment(i *  this.segSize);
		this.segs.push(segment);
		view.items.push(segment);
//		console.log(segment)
		//segs.push(-400, 500 + Math.sin(i) * -50, i *  100, 0, 0);
	}	
	
//	this.
	this.post = new Image();
	this.post.crossOrigin = '';
	this.post2 = new Image();
	this.post2.crossOrigin = '';
	
	this.trackIndex = 0;
	/*	
	this.camera = {x:0,y:1500,z:0, 
				   rotationY:0, rotationX:0, rotationZ:0}
				   
	this.zoom = 1;
	
	this.camera.focus = 300;
	
	gui.add(this, 'zoom', 1, 20).name("Zoom");//.onChange(updateTentacles);
	gui.add(this.camera, 'y', 0, 2500).name("CamY");
	gui.add(this.camera, 'focus', 0, 300).name("Focus");
	gui.add(this.camera, 'rotationZ', -Math.PI, Math.PI).name("CamRotX");
	
	
	*/
}

Road.prototype.reset = function()
{
	this.isFlat = false;
	this.flatMode = false;
	var worldData = this.view.game.world;
	
	this.offset = 0;
	
	for (var i=this.segs.length-1; i >= 0 ; i--) 
	{
		var seg = this.segs[i];
		seg.position = i *  this.segSize;
		
		
		seg.p1.z = seg.position;
		seg.p2.z = seg.position;
		
		seg.p1.x = 500 //+ seg.p1.offsetVal;
		seg.p2.x = -500 //+seg.p1.offsetVal;
	
		seg.p1.y = 1000;// + (i * 100);
		seg.p2.y = 1000;// + (i * 100);
		
		seg.color = worldData.floorColors[this.trackIndex % worldData.floorColors.length];
		seg.edgeColorDark = worldData.leftWallColors[this.trackIndex % worldData.floorColors.length];
		seg.edgeColorLight = worldData.rightWallColors[this.trackIndex % worldData.floorColors.length];
		seg.leftAlpha = worldData.leftAlpha;
		seg.rightAlpha = worldData.rightAlpha;
		seg.floorAlpha = worldData.floorAlpha;
		
		seg.wall = true;
		seg.hole = false;
		//if(!this.isFlat)
		this.trackIndex++;
			
		//console.log("::::")
	}
}

Road.prototype.setWorld = function(worldData)
{
	this.worldData = worldData;
	this.leftStump = this.worldData.leftStump;
	this.rightStump = this.worldData.rightStump;
}

Road.prototype.mapPosition = function(position, camera)
{
	//return;
	var pos = position.z % (this.segSize * PROFILE.trackSize);
	
	pos = Math.floor(pos/this.segSize);
	
//	var pos = Math.floor(pos/this.segSize);
	
	var seg = this.segs[pos % this.segs.length];
	var seg2 = this.segs[(pos+1) % this.segs.length];
	
	// onground??
	//if()
	var mod = position.z % this.segSize;
	mod /= this.segSize;
	
	position.seg = seg// = seg.y / seg2.y
	
	// z.. x..
	var leftX = seg.p1.x + (seg2.p1.x -  seg.p1.x) * mod;
	var rightX = seg.p2.x + (seg2.p2.x -  seg.p2.x) * mod;
	
	var offsetX = seg.p1.offsetVal + (seg2.p1.offsetVal - seg.p1.offsetVal) * mod;
	
	position.x += offsetX;//leftX + (rightX - leftX) * 0.5//(position.x/100);
		
		
	position.y = seg.p1.y + (seg2.p1.y - seg.p1.y) * mod;
	
}

Road.prototype.mapPowerup = function(position, ratio)
{
	//return;
	var pos = position.z % (this.segSize * PROFILE.trackSize);
	
	pos = Math.floor(pos/this.segSize);
	
//	var pos = Math.floor(pos/this.segSize);
	
	var seg = this.segs[pos % this.segs.length];
	var seg2 = this.segs[(pos+1) % this.segs.length];
	
	// onground??
	//if()
	var mod = position.z % this.segSize;
	mod /= this.segSize;
	
	position.seg = seg// = seg.y / seg2.y
	
	// z.. x..
	var leftX = seg.p1.x + (seg2.p1.x -  seg.p1.x) * mod;
	var rightX = seg.p2.x + (seg2.p2.x -  seg.p2.x) * mod;
	
	var offsetX = seg.p1.offsetVal + (seg2.p1.offsetVal - seg.p1.offsetVal) * mod;
	
	position.x += leftX + (rightX - leftX) * ratio//(position.x/100);
		
	position.width = (leftX - rightX)
	position.y = seg.p1.y + (seg2.p1.y - seg.p1.y) * mod;
	
}

Road.prototype.getOffset = function(pz)
{
	
	var pos = pz % (this.segSize * PROFILE.trackSize);
	
	pos = Math.floor(pos/this.segSize);
	
//	var pos = Math.floor(pos/this.segSize);
	
	var seg = this.segs[pos % this.segs.length];
	var seg2 = this.segs[(pos+1) % this.segs.length];
	
	if(seg.hole)return 12000;
	// onground??
	//if()
	var mod = pz % this.segSize;
	mod /= this.segSize;
	
	var offsetX = seg.p1.offsetVal + (seg2.p1.offsetVal - seg.p1.offsetVal) * mod;
	return {x:offsetX};
	

}

Road.prototype.hitTest = function(ball)
{
	if(ball.isDead)return;
	
	var position = ball.tempPosition;
	ball.hit = false;
	
	ball.isFalling = false;
	
	var pos = position.z % (this.segSize * PROFILE.trackSize);
	
	pos = Math.floor(pos/this.segSize);
	
//	var pos = Math.floor(pos/this.segSize);
	
	var seg = this.segs[pos % this.segs.length];
	var seg2 = this.segs[(pos+1) % this.segs.length];
	
	
	// onground??
	//if()
	var mod = position.z % this.segSize;
	mod /= this.segSize;
	
	
	var leftX = seg.p1.x + (seg2.p1.x - seg.p1.x) * mod;
	
	
	var rightX = seg.p2.x + (seg2.p2.x - seg.p2.x) * mod;

	var newY = seg.p1.y + (seg2.p1.y -  seg.p1.y) * mod;
	ball.realGround = newY;
	
	if(seg.hole)
	{
		if(ball.powermode != Ball.GIANT)
		{
			if(mod > 0.15 && !ball.jumping)
			{
				
				if(position.y > newY)
				{
					ball.isFalling = true;	
				}
				return 12000;
			}
			else
			{
				return newY;
			}
		}
		else
		{
			return newY + 100;
		}
	//	console.log(position.y + " : " + newY)
		
	}
	
	
	if(seg.wall)
	{
			
		if(position.x > leftX-ball.width/2)
		{
			if(position.y < (newY - seg.wallHeight))
			{
				
			}
			else
			{
				if(position.x > leftX && ball.jumping)
				{
					// DROP BALL
					if(position.y > newY)
					{
						ball.isFalling = true;
					}
					
					return 12000;
					//if(ball.dx < 0)ball.dx *= -0.4;
					//position.x = leftX+120;	
				}
				else
				{
					if(ball.dx > 0)ball.dx *= -0.4;
					position.x = leftX-ball.width/2;
					ball.hit = true;
				}
			}
			
	//		if(position.y > )
		}
		else if(position.x < rightX+ball.width/2)
		{
			if(position.y < (newY - seg.wallHeight))
			{
					
			}
			else
			{
				if(position.x < rightX && ball.jumping)
				{
					if(position.y > newY)
					{
						ball.isFalling = true;
					}
					// DROP BALL
					return 12000;
					//if(ball.dx < 0)ball.dx *= -0.4;
					//position.x = leftX+120;	
				}
				else
				{
					if(ball.dx < 0)ball.dx *= -0.4;
					position.x = rightX+ball.width/2;
					ball.hit = true;
					
				}
			}
			
			
		}
	}
	else 
	{
		if(position.x > leftX+ball.width/4)
		{
			if(position.y > newY)
			{
				ball.isFalling = true;
			}
			return 12000;
		}
		else if(position.x < rightX-ball.width/4)
		{
			if(position.y > newY)
			{
				ball.isFalling = true;
			}
			return 12000;
		}
	}
	
	if(ball.powermode == Ball.GIANT)
	{
		if(leftX - rightX < ball.width)
		{
			ball.position.x = rightX + (leftX - rightX) * 0.5
		}
	//	console.log(leftX - rightX)
	}
	
	
	return newY;
}

Road.prototype.flatten = function(ball)
{
	this.flatMode = true;
	var xpos = ball.position.x;
//	this.isFlat = true;
	
	var worldData = World.rainbow;
	
	for (var i=0; i < this.segs.length ; i++) {
		
	
		var seg = this.segs[(i + this.offset) % this.segs.length];
		seg.hole = false;
		seg.wall = true;
		//seg.width = 300;
		//seg.p1.x = 500// = {x:500 , y:0, z:z};
		//seg.p2.x = -500// = {x:-500, y:0, z:z};
		
		seg.color = worldData.floorColors[i % worldData.floorColors.length];
		seg.edgeColorDark = worldData.leftWallColors[i % worldData.floorColors.length];
		seg.edgeColorLight = worldData.rightWallColors[i % worldData.floorColors.length];
			seg.leftAlpha = worldData.leftAlpha;
			seg.rightAlpha = worldData.rightAlpha;
			seg.floorAlpha = worldData.floorAlpha;
			
	
		var width = seg.p2.x - seg.p1.x;
		var middle = seg.p2.x - width/2;
	//	seg.p1.home =  seg.p1.y;
		var ymod = seg.p1.y + Math.sin((seg.p2.z/500) / 2) * 500;
		seg.p1.tweening = true;
		 seg.p1.ymod = ymod;
		TweenLite.to(seg.p1, 1, {x:middle + 1000, y:ymod,  ease:Elastic.easeOut, delay:i * 0.05});
		TweenLite.to(seg.p2, 1, {x:middle - 1000, y:ymod, ease:Elastic.easeOut, delay:i * 0.05})
	}	
}

Road.prototype.unFlatten = function(ball)
{
	
	//.var xpos = ball.position.x;
//	this.isFlat = true;

	var worldData = this.view.game.world;
	
	for (var i=0; i < this.segs.length ; i++) {
		
		var index = (i + this.offset) % this.segs.length;
		//if(index > 10)
		{
			
			var seg = this.segs[index];
			seg.p1.ymod = seg.p1.home
			
		//	seg.p1.y = seg.p1.home;
		//	seg.p2.y = seg.p1.home;
			seg.p1.tweening = true;
			TweenLite.to(seg.p1, 1, { y:seg.p1.home,  ease:Elastic.easeOut, delay:(i * 0.05)});
			TweenLite.to(seg.p2, 1, { y:seg.p1.home, ease:Elastic.easeOut, delay:(i * 0.05)});
			
			seg.color = worldData.floorColors[i % worldData.floorColors.length];
			seg.edgeColorDark = worldData.leftWallColors[i % worldData.floorColors.length];
			seg.edgeColorLight = worldData.rightWallColors[i % worldData.floorColors.length];
				seg.leftAlpha = worldData.leftAlpha;
				seg.rightAlpha = worldData.rightAlpha;
				seg.floorAlpha = worldData.floorAlpha;
		}
	}
}

Road.prototype.renderSegment = function(seg, context)
{
//	if(i == this.segs.length-1)
	{
	}
//	else
	{
		
		var previousSeg = seg.prev
		var scaleRatio = seg.scaleRatio;
		
		
		if(previousSeg.p1.z - seg.p2.z < 0)return;
		
		seg.gradient = seg.p2Screen.y / previousSeg.p2Screen.y ;
//		console.log(seg.gradient)
	//	console.log(seg.gradient)
		if(scaleRatio < 0)scaleRatio *= -1;
		
		var lampScale = scaleRatio * 2;
		
		if(seg.hole)
		{
			var dist = ( previousSeg.p1Screen.x - previousSeg.p2Screen.x )// * scaleRatio;
					// draw ledge
			
			context.globalAlpha = 1;
			
			var frame= Math.round(this.frameCount);
			
			var lefty = this.worldData.jumpPosts[frame % 4];//this.testHoleSign;
			var leftWidth = lefty.width;
			var leftHeight = lefty.height;
			
			var righty = this.worldData.jumpPosts[(frame +2) % 4]
			var rightWidth = righty.width;
			var rightHeight = righty.height;
			
			var signScale = scaleRatio * 3;
			
			
			var ledge = this.view.game.world.dropEdge;
			var scale = ( dist / ledge.width );
			
			context.drawImage(ledge, previousSeg.p2Screen.x, previousSeg.p2Screen.y-(10 *scale), dist, ledge.height * scale)//
			
			var dist2 = seg.p1Screen.x - seg.p2Screen.x;
			var scale = ( dist2 / this.dangerStrip.width );
			context.drawImage(this.dangerStrip, seg.p2Screen.x, seg.p2Screen.y-(5 *scale), dist2, this.dangerStrip.height * scale)//
			
			
			context.drawImage(lefty, seg.p1Screen.x - (leftWidth * signScale *0.5), seg.p1Screen.y - ((leftHeight-20) * signScale) ,  leftWidth * signScale, leftHeight * signScale);
			context.drawImage(righty, seg.p2Screen.x - (rightWidth * signScale *0.5), seg.p2Screen.y - ((rightHeight-20) * signScale) , rightWidth * signScale, rightHeight * signScale);
		
			
			return;
		}
		
		
		context.globalAlpha = seg.floorAlpha;//seg.gradient > 1 ? 0.5 : 0.9// 0.6;// + (i % 2 * 0.2);
		context.fillStyle = seg.color;//seg.gradient > 1  ? "red" : "white"//seg.color;
	//	var id = (i + this.offset + 1) % this.segs.length;
	//	console.log(id);
		
		
//	if(i==this.id)context.fillStyle = "#FF00FF";
		
		context.beginPath();
		
		context.moveTo(seg.p1Screen.x,
					   seg.p1Screen.y);
		
		context.lineTo(seg.p2Screen.x,
					   seg.p2Screen.y);
		
		context.lineTo(previousSeg.p2Screen.x,
					   previousSeg.p2Screen.y);
		
		context.lineTo(previousSeg.p1Screen.x,
					   previousSeg.p1Screen.y);
					   
  		context.closePath();
		context.fill();
		
		//context.globalAlpha = 1//0.7//7;
	
		
		if(seg.z < this.drawDistance)
		{
			if(seg.wall)
			{
				
				//if(!GAME.LOW)
				{
					
				context.globalAlpha = seg.rightAlpha;
				context.fillStyle = seg.edgeColorDark ;
				// edge..
				context.beginPath();
				
				context.moveTo(seg.p1Screen.x,
							   seg.p1Screen.y);
				
				context.lineTo(previousSeg.p1Screen.x,
							   previousSeg.p1Screen.y);
							   
				context.lineTo(previousSeg.p1Screen.x,
							   previousSeg.p1Screen.y -previousSeg.wallHeight * previousSeg.scaleRatio);
				
				context.lineTo(seg.p1Screen.x,
							   seg.p1Screen.y - seg.wallHeight * scaleRatio);			   
							   
		  		context.closePath();
				context.fill();
				//*/
				context.globalAlpha = seg.leftAlpha;
				
				// edge.
				context.fillStyle = seg.edgeColorLight;
				context.beginPath();
				
				context.moveTo(seg.p2Screen.x,
							   seg.p2Screen.y);
				
				context.lineTo(previousSeg.p2Screen.x,
							   previousSeg.p2Screen.y);
							   
				context.lineTo(previousSeg.p2Screen.x,
							   previousSeg.p2Screen.y - previousSeg.wallHeight * previousSeg.scaleRatio);
				
				context.lineTo(seg.p2Screen.x,
							   seg.p2Screen.y - seg.wallHeight * scaleRatio);			   
							   
		  		context.closePath();
				context.fill();
				}
				if(PROFILE.drawPosts)
				{
					
					context.globalAlpha = 1;
					var lefty = this.leftStump[0];
					var leftWidth = lefty.width;
					var leftHeight = lefty.height;
					
					var righty = this.rightStump[0];
					var rightWidth = righty.width;
					var rightHeight = righty.height;
					
					context.drawImage(lefty, seg.p1Screen.x - (leftWidth * lampScale *0.5), seg.p1Screen.y - (leftHeight * lampScale) ,  leftWidth * lampScale, leftHeight * lampScale);
					context.drawImage(righty, seg.p2Screen.x - (rightWidth * lampScale *0.5), seg.p2Screen.y - (rightHeight * lampScale) , rightWidth * lampScale, rightHeight * lampScale);
					
				}
				
				if(seg.hole)
				{
				//	var dist = seg.width;// * scaleRatio;
						
						//seg.p2Screen.x - (rightWidth * lampScale *0.5), seg.p2Screen.y - (rightHeight * lampScale) , rightWidth * lampScale, rightHeight * lampScale);
				
				}
			}
		}

	}
}

Road.prototype.render = function(context, camera)
{
	
//	this.baseWidth = 1000 + Math.sin(camera.z / 1000) * 500;
	//context.clearRect(0,0, 800,600)
	var focalLength = camera.focus;
	var count = 0;//+=0.1;
	var zoom = camera.zoom;//2;
	
	this.frameCount += TIME.DELTA_TIME * 0.25;
	
	//var sx = Math.sin(camera.rotationX);
	//var cx = Math.cos(camera.rotationX);
	//var sy = Math.sin(camera.rotationY);
	//var cy = Math.cos(camera.rotationY);
	//var sz = Math.sin(camera.rotationZ);
	//var cz = Math.cos(camera.rotationZ);
	
	
	// apply 3d transform
	
	//for (var i=0; i <this.segs.length ; i++) {
	for (var i=this.segs.length-1; i >= 0 ; i--) {
		
		context.globalAlpha = 1;
	
		var seg = this.segs[(i + this.offset) % this.segs.length];
	  	var p1x = seg.p1.x + camera.x;
	  	var p1y = seg.p1.y + camera.y;
	  	var p1z = seg.p1.z + camera.z;
	  	
	  	var safez = seg.p1.z + camera.z;// + 500;
	  	
	  	/*var xy = cx*p1y - sx*p1z;
		var xz = sx*p1y + cx*p1z;
		// rotation around y
		var yz = cy*xz - sy*p1x;
		var yx = sy*xz + cy*p1x;
		// rotation around z
		var zx = cz*yx - sz*xy;
		var zy = sz*yx + cz*xy;*/
		
		var x = p1x//zx;
		var y = p1y//zy;
		var z = p1z//yz;
		
	//	if(z < -focalLength)z = -focalLength;
		
	  	var scaleRatio = focalLength/(focalLength + z) * zoom;
	  	seg.scaleRatio = scaleRatio;
	  	
		seg.p1Screen.x = (x * scaleRatio); 
		seg.p1Screen.y = (y * scaleRatio) + 690/2 //- 200;
		
	  	var p2x = seg.p2.x + camera.x;
	  	var p2y = seg.p2.y + camera.y;
	  	var p2z = seg.p2.z + camera.z;
	  	
		var x = p2x//zx;
		var y = p2y//zy;
		var z = p2z//yz;
		
	//	if(z < -focalLength)z = -focalLength;
		
		var scaleRatio = focalLength/(focalLength + z) * zoom;
	//	seg.depth = scaleRatio
	//	seg.scaleRatio = scaleRatio;
		seg.z = z;
		seg.depth = z;
		seg.p2Screen.x = (x * scaleRatio);
		seg.p2Screen.y = (y * scaleRatio) + 690/2 // - 200;
		
		var previousSeg = this.segs[(i + this.offset + 1) % this.segs.length];
		seg.prev = previousSeg;
		
		//seg.visible = false;
	  	if(safez > -focalLength + 30)
	  	{
	  		seg.visible = (i != this.segs.length-1)
	  		//seg.visible = false;
		//	if(i != this.segs.length-1)
		//	{
		//	//	this.renderSegment(seg, context);
			//}	
	  	}
	  	else
	  	{
	  	//	seg.visible = false;
	  		// map to "line"
//	  		seg.position = safez;
	  		seg.position +=  this.segSize * (this.segs.length);
	  		
	  	//	seg.depth = seg.position;
	  		
	  		seg.p1.z = seg.position;
	  		seg.p2.z = seg.position;
			
			var worldData = this.view.game.world;
			
			
			//if(!this.isFlat)
			this.view.game.trackManager.setSeg(seg)
			seg.p1.home =  seg.p1.y;
			//seg.hole = Math.random() < 0.3;
			if(seg.p1.tweening)
			{
				seg.p1.tweening = false;
				TweenLite.killTweensOf(seg.p1);
				TweenLite.killTweensOf(seg.p2);
			}
			
			if(this.flatMode)
			{
				var worldData = World.rainbow;
	
				
				var width = seg.p2.x - seg.p1.x;
				var middle = seg.p2.x - width/2;
				
				seg.p1.x = middle + 1000;
				seg.p2.x = middle - 1000;
				seg.hole = false;
				seg.wall = true;
				seg.p1.y = seg.p2.y = seg.p1.y + Math.sin(((seg.p2.z/500)/2) ) * 500;
				
				seg.p1.ymod =  seg.p1.y;
				
				//TweenLite.to(seg.p1, 1, {x:middle + 1000,   ease:Elastic.easeOut, delay:i * 0.05});
				//TweenLite.to(seg.p2, 1, {x:middle - 1000, ease:Elastic.easeOut, delay:i * 0.05})
			}
			else
			{
			//		seg.p1.y = seg.p2.y = seg.p1.y + Math.sin(((seg.p2.z/500)/2) ) * 500;
			
			}
			
			
			
			seg.color = worldData.floorColors[this.trackIndex % worldData.floorColors.length];
			seg.edgeColorDark = worldData.leftWallColors[this.trackIndex % worldData.floorColors.length];
			seg.edgeColorLight = worldData.rightWallColors[this.trackIndex % worldData.floorColors.length];
			seg.leftAlpha = worldData.leftAlpha;
			seg.rightAlpha = worldData.rightAlpha;
			seg.floorAlpha = worldData.floorAlpha;
			
			this.trackIndex++;
			
	 	//	seg.p1.y = + Math.sin(seg.position / 800) *1250 / 2;
	 	//	seg.p2.y = + Math.sin(seg.position / 800) * 1250 / 2;
	  		
	  		this.offset++;
	  	}
		
	}
	
	for (var i=this.segs.length-1; i >= 0 ; i--) {
		
		context.globalAlpha = 1;
	
	//	var seg = this.segs[(i + this.offset) % this.segs.length];
	//	if(seg.visible)this.renderSegment(seg, context);
		
		
		if(i == this.segs.length-1)
		{
		//	context.fillStyle = "red"
		}
		
	}
//	console.log(">>>>>>>")
	context.globalAlpha = 1;
	  
}

function Segment(z)
{
	this.scale = 1;
	
	this.position = z;
	this.scaleLamp = Math.random();
	
	Segment.colorCount++;
	this.color = Segment.colors[Segment.colorCount % Segment.colors.length];
	this.edgeColorDark = Segment.edgeColorDark[Segment.colorCount % Segment.colors.length];
	this.edgeColorLight = Segment.edgeColorLight[Segment.colorCount % Segment.colors.length];
	
	this.p1 = {x:500 , y:0, z:z};
	this.p2 = {x:-500, y:0, z:z};
	
	this.p1Screen = {x:0, y:0};
	this.p2Screen = {x:0, y:0};
	
	this.p1.offsetVal = 0;
	this.p2.offsetVal = 0;
	
	this.wallHeight = 100 + Math.random() * 150;
	this.wall = true;
	
	this.modX = 0;
	this.modY = 0;
	
	this.p1.ymod = 1000;
	
}

Segment.colors = [ "#32ffef", "#66c7ff", "#32e4f8","#32d1fd","#39b8ff" , "#66c7ff"]//["#ff6032", "#ff3244"];
Segment.edgeColorDark = ["#596bff", "#5c96ff"];
Segment.edgeColorLight = ["#5c96ff", "#5c96ff"];
Segment.colorCount = 0;


var GAME = GAME || {};

Ball = function(engine)
{
	GameElement.call( this );
	
	this.shadow = new GameElement();
	this.shadow.view.crossOrigin = '';
	this.shadow.view.src = REMOTE_PATH + "img/shadow.png";
	this.shadow.scale = 1.4;
	
	this.ax = 0;
	this.engine = engine;
		
	this.speed = 0;
	this.speedY = 0;
	
	this.realy = 0
	this.addMovement();
	this.width = 250;
	
	this.heightRatio = 0.7;
	
	this.isDead = false;
	this.scale = 1.5;
	this.state = Ball.NORMAL;
	
	this.powerupTimer = 0;
	this.powermode = Ball.NONE;
	
	this.spring = new Spring();
	
	this.baseScale = 1;
	
	this.pulseValue= 0;
	this.hitDistance = 0;// 1500; 
//	this.realPosition = {x:0, y:0, z:0};
//	this.ro
	this.frameCount = 0;
	this.frame= 0;
	this.textures = [];
	
	for (var i=0; i < 15; i++) {
	  
	//  var image = new Image();
	  var number = i + 1;
	  if(number < 10)number = "0" + number;
	 // image.crossOrigin = '';
	 // image.src = REMOTE_PATH + "img/player/bitesFrames_"+ number + ".png";//"img/rings/Ring_0" + (i+1) + ".png";
	  this.textures.push(PIXI.Texture.fromFrame("bitesFrames_"+ number + ".png"));
	  
	//  this.textures.push(image);
	  
	};
	
	this.view =  this.textures[0];
	
	this.texturesMagnet = [];
	
	for (var i=0; i < 15; i++) {
	  
	//  var image = new Image();
	  var number = i + 1;
	  if(number < 10)number = "0" + number;
	  this.texturesMagnet.push(PIXI.Texture.fromFrame("powerUpsMAG00"+ number + ".png"));
	  
	  
	};
	
//	console.log(this.texturesMagnet);
	this.lastPosition = {x:0, y:0, z:0};
	this.tempPosition = {x:0, y:0, z:0};
	
}

Ball.NORMAL = 0;
Ball.ACSENDING = 1;
Ball.DROPPING = 2;
Ball.FALLING = 3;
Ball.CRASHING = 4;

Ball.NONE = 0;
Ball.MAGNET = 1;
Ball.GIANT = 2;
Ball.CHARGE = 3;


Ball.prototype = Object.create( GameElement.prototype );

Ball.prototype.deathHit = function()
{
	if(this.isDead )return;
	
	if(APP.crashSound)APP.crashSound.play();
	this.state = Ball.CRASHING;
	
	this.isDead = true;
	this.dy = -100;
	
	this.targetSpeed = this.targetSpeed  > 0 ? 100 : -100;
	this.bashDirection =  this.targetSpeed > 0 ? 1 : -1;
	
	
	//console.log("LL")
}

Ball.prototype.update = function()
{
	this.spring.update();
	
	var diffSpeed = TIME.DELTA_TIME * this.engine.difficulty * PROFILE.speedMod;
	this.frameCount+= 0.34 * diffSpeed;
	this.frame = Math.floor(this.frameCount);
	this.view = this.textures[this.frame %  this.textures.length];
	
	//this.pulseValue += (1 - this.pulseValue) * 0.1;
	// update x..
	this.scale = ( 1.7 ) * this.baseScale;// + ( this.spring.x/10);
	// update y
	
	var ground = this.engine.view.road.hitTest(this, this.engine.view.camera);
	this.tempPosition = this.position;
	
	/*
	var steps = 3;
	var incx = (this.position.x - this.lastPosition.x) / steps;
	var incy = (this.position.y - this.lastPosition.y) / steps;
	var incz = (this.position.z - this.lastPosition.z) / steps;
	//console.log(incx * steps);
	var hitCount = 0;
	while(hitCount < steps)
	{
		hitCount++;
		this.tempPosition.x = this.lastPosition.x + incx*hitCount;
		this.tempPosition.y = this.lastPosition.y + incy*hitCount;
		this.tempPosition.z = this.lastPosition.z + incz*hitCount;
		
		
		if(this.hit)
		{
			this.position.x = this.tempPosition.x;
			this.position.y = this.tempPosition.y;
		//	this.position.z = this.tempPosition.z;
			break;
		}
		
	}
	*/
	//console.log(incx * hitCount)	
	this.ground = ground;
	
	this.lastPosition.x = this.position.x;
	this.lastPosition.y = this.position.y;
	this.lastPosition.z = this.position.z;
	
	
	var offsetGround = ground - this.realGround;
	
	
	
	if(this.powermode == Ball.CHARGE)
	{
		 diffSpeed = TIME.DELTA_TIME;
	}
	
	var jumpSpeed = diffSpeed + (TIME.DELTA_TIME - diffSpeed) * 0.5;/// * this.engine.difficulty;
	
	//if(!this.isDead)
	{
	
		
		//else
		//{
			
	//	}	
	}
	
	//console.log(this.leftDown + " : " + this.rightDown)
	
	if(this.state == Ball.NORMAL)
	{
		this.targetSpeed += ( (this.ax * 12) -  this.targetSpeed) * 0.2;
		
		this.rotation = this.targetSpeed * 0.02;
		
		if(this.isFalling)
		{
			this.deathFall();
			this.engine.gameover();
			//console.log("<>")	
		}
		
		
		this.dy += 2.5 *jumpSpeed;
		this.realy += this.dy * jumpSpeed;
		
		// ground test
		if(this.realy > offsetGround)
		{
			this.jumping =false;
			this.dy = 0//*= 0.1//-0.6;
			this.realy = offsetGround;
		}
		
	}
	else if(this.state == Ball.ACSENDING)
	{
		this.targetSpeed *= 0.8;
		this.dy -= 2.5 * diffSpeed;
		this.realy += this.dy * diffSpeed;
	}
	else if(this.state == Ball.DROPPING)
	{
		this.dy += 2.5 * diffSpeed;
		this.realy += this.dy *diffSpeed;
		
		if(this.realy > offsetGround)
		{
			this.state = Ball.NORMAL;
		}
	}
	else if(this.state == Ball.CRASHING)
	{
		//consol.elog(":::::::")
		this.rotation += this.bashDirection * diffSpeed;
		this.dy += 2.5 * diffSpeed;
		this.realy += this.dy * diffSpeed;
		this.targetSpeed = this.bashDirection * 10 * 5;
	}
	else if(this.state == Ball.FALLING)
	{
		this.rotation += this.bashDirection * diffSpeed;
		this.dy += 2.5 *diffSpeed;
		this.realy += this.dy * diffSpeed;
		this.targetSpeed = this.bashDirection * 10 * 5;
	}
	
	this.position.x += this.targetSpeed * diffSpeed;//xd;

	this.position.y = this.realGround + this.realy
	
	//this.shadow.position.x = this.position.x;
	//this.shadow.position.z = this.position.z;
//	this.shadow.position.y = this.realGround//this.realy - this.shadow.position.y);
	
//	this.shadow.scale = 2//1 - (ground - this.realy) / 1000;
//	this.shadow.scale *= this.baseScale;
//	this.shadow.alpha = this.shadow.scale/1.5;
	//if(this.ground == 12000 || this.isFalling)this.shadow.scale = 0;
//	if(this.shadow.scale < 0)this.shadow.scale = 0;

	if(this.powermode == Ball.MAGNET)
	{
		this.powerupTimer -= TIME.DELTA_TIME
		//console.log(this.powerupTimer)
		if(this.powerupTimer <= 0)
		{
			if(APP.magnetEndSound)APP.magnetEndSound.play();
			this.hitDistance = 0; 
			this.powermode = Ball.NONE;
		}
	}	
	else if(this.powermode == Ball.GIANT)
	{
		this.powerupTimer -= TIME.DELTA_TIME;
		//this.scale *= 3;
		
		//console.log(this.powerupTimer)
		if(this.powerupTimer <= 0)
		{
			this.hitDistance = 0; 
			
			this.width = 250;
	
			TweenLite.to(this, 0.4, {baseScale:1});
			this.powermode = Ball.NONE;
			TweenLite.to(TIME, 0.4, {speed:1});
	
			//this.camera.shake
			//this.engine.view.camera.dist = 800;
			TweenLite.to(this.engine.view.camera, 0.4, { dist:400, distY:1000, shake:0});
		}
	}	
	else if(this.powermode == Ball.CHARGE)
	{
		this.powerupTimer -= diffSpeed;
		//this.scale *= 3;
		
		if(this.engine.view.road.flatMode)
		{
			if(this.powerupTimer < 30 * 12)
			{
				this.engine.view.road.flatMode = false;
			}
		}
		//console.log(this.powerupTimer)
		if(this.powerupTimer <= 0)
		{
			if(APP.chargeEndSound)APP.chargeEndSound.play();
			this.engine.view.road.unFlatten();
			this.engine.pickupManager.joyrideMode = false;
			this.hitDistance = 0; 
			
			this.width = 250;
	
			this.powermode = Ball.NONE;
			TweenLite.to(TIME, 0.1, {speed:1});
	
			this.engine.trackManager.resume();
			//this.baseScale
			
	//		this.engine.pickupManager.destroyAll();
//			this.engine.enemyManager.destroyAll();
			//TIME.speed = 2;
			//this.engine.view.road.unFlatten();
	
			//this.camera.shake
			//this.engine.view.camera.dist = 800;
			TweenLite.to(this.engine.view.camera, 0.4, { dist:400, distY:1000, shake:0});
		}
	}	
	
	var ground = this.engine.view.road.hitTest(this, this.engine.view.camera);
	
}



Ball.prototype.magnetMode = function()
{
	if(APP.powerupSound)APP.powerupSound.play();
	
	this.hitDistance = 1500; 
	this.powerupTimer = 15 * 60;
	this.powermode = Ball.MAGNET;
	
}

Ball.prototype.giantMode = function()
{
	this.powerupTimer = 15 * 60;
	this.powermode = Ball.GIANT;
	//this.baseScale
	
	var delay = 0// 0.5;
	
	this.width = 250*3.5;
	
	TweenLite.to(this, 0.4, {baseScale:3.5, ease:Sine.easeOut, delay:delay});
	
//	TIME.speed = 0.01;
	TweenLite.to(TIME, 0.2, {speed:1.5, delay:delay});
	//this.camera.shake
	//this.engine.view.camera.dist = 800;
	TweenLite.to(this.engine.view.camera, 0.6, {delay:0 + delay, dist:800, distY:1800, shake:10, ease:Sine.easeOut});
}

Ball.prototype.chargeMode = function()
{
	if(APP.chargeSound)APP.chargeSound.play();
	
	this.powerupTimer = 15 * 60;
	this.powermode = Ball.CHARGE;
	//this.baseScale
	
	TweenLite.to(this.engine.view.camera, 0.6, {delay:0, dist:230, distY:800, shake:5, ease:Sine.easeOut});
	this.engine.pickupManager.destroyAll();
	this.engine.pickupManager.joyrideMode = true;
	this.engine.trackManager.pause();
	this.engine.enemyManager.destroyAll();
	//TIME.speed = 2;
	TweenLite.to(TIME, 0.2, {speed:2, delay:0});
	this.engine.view.road.flatten(this);
}

Ball.prototype.jump = function()
{
	if(this.state == Ball.NORMAL)
	{
		this.jumping = true;
		if(this.realy >= 0 && !this.isFalling)
		{
			if(	APP.jumpSound)	APP.jumpSound.play();
			this.dy = -60;
		}
	}
			//this.dy = 0
}

Ball.prototype.ascend = function()
{
	this.isAsending = true;
	//TweenLite.to(this.engine.view.camera, 1, { distY:1000, ease:Sine.easeOut});
	this.state = Ball.ACSENDING;
}

Ball.prototype.desend = function()
{
//	alert("!")
	this.dy = 0;
	this.isAsending = false;
}

Ball.prototype.deathFall = function()
{
	if(this.isDead )return;
	this.isDead = true;
	this.state = Ball.FALLING;
	//this.dx = this.dx > 0 ? 100 : -100;
	this.bashDirection = 0// this.dx > 0 ? 5 : -5;
}

Ball.prototype.pulse = function()
{
	this.spring.dx = 0.08;
//	this.pulseValue = 1.7;// 1 + Math.sin(item.rotation) * 0.25; 	
}

Ball.prototype.reset = function()
{
	this.isDead = false;
	this.dy = 0;
	this.dx = 0;
	
	this.targetSpeed = 0;
	
	this.speed = 0;
	this.speedY = 0;
	
	this.isAsending = false;
	//alert(	this.isAsending)
	this.realy = -1500;
	this.state = Ball.DROPPING;
	this.position.z = 0;
	this.position.x = 0;
	
	this.powerupTimer = 0
	
	this.hitDistance = 0; 
	this.width = 250;
	this.baseScale = 1;
	
	this.powermode = Ball.NONE;
	
			//this.camera.shake
			//this.engine.view.camera.dist = 800;
	
}


Controller = function(game)
{
	this.game = game;
	
	this.tilt = false//(window.DeviceOrientationEvent);
//	console.log("HI")

	/*
	if(!!('ondevicemotion' in window))
	{
		this.setTilt();
	//	alert("TILT")
	}
	else if(!!('ontouchstart' in window))
	{
		this.setTouch();
	}
	else
	{
	}
*/
	this.setKeys();
	
	this.leftTouch;
	this.rightTouch;
	this.jumpTouch;
	
	this.lean = 0;
	this.keyState = 0;
	
	this.accelerationY = 0;
	
	this.controlMode = Controller.KEYS;
	
}

Controller.KEYS = 0;
Controller.TILT = 1;
Controller.TOUCH = 2;

Controller.prototype.removeControl = function()
{
	if(this.controlMode == Controller.KEYS)
	{
		document.body.onkeydown = null// this.onKeyDown.bind(this);
		document.body.onkeyup = null//this.onKeyUp.bind(this);
	}
	else if(this.controlMode == Controller.TILT)
	{
		this.tilt = false;
		window.ondevicemotion = null//this.onDeviceMotion.bind(this);
		APP.renderer.view.ontouchstart = null//this.onTiltTouch.bind(this);
	}
	else if(this.controlMode == Controller.TOUCH)
	{
		APP.renderer.view.ontouchstart = null
		APP.renderer.view.ontouchend = null
	}
}

Controller.prototype.setTilt = function()
{
	this.removeControl();
	this.controlMode = Controller.TILT;
	this.tilt = true;
	window.ondevicemotion = this.onDeviceMotion.bind(this);
	APP.renderer.view.ontouchstart = this.onTiltTouch.bind(this);
	
	PROFILE.speedMod = 0.6;	
}

Controller.prototype.setKeys = function()
{
	this.removeControl();
	this.controlMode = Controller.KEYS;
	document.body.onkeydown = this.onKeyDown.bind(this);
	document.body.onkeyup = this.onKeyUp.bind(this);
	
	
	PROFILE.speedMod = 1;
}

Controller.prototype.setTouch = function()
{
	this.removeControl();
	this.controlMode = Controller.TOUCH;
	
	APP.renderer.view.ontouchstart = this.onTouchStart.bind(this);//, true);
	APP.renderer.view.ontouchend = this.onTouchEnd.bind(this);
	
	PROFILE.speedMod = 0.8;
}

Controller.prototype.update = function()
{
	// smooth out
	if(this.tilt)
	{
		this.lean = this.accelerationY * APP.profile.flipTilt;//* 0.75;
		if(this.lean < -1)this.lean = -1;
		else if(this.lean > 1)this.lean = 1;
	}
	else
	{
		this.lean = 0;
		
		if(this.leftDown && this.rightDown)
		{
			this.lean = 0;
		}
		else if(this.leftDown)
		{
			this.lean = -1
		}
		else if(this.rightDown)
		{
			this.lean = 1;
		}
	}
	
//	var maxSpeed = 30;
	var accel = 2.5;
//	var friction = 0.9;
//	var changefriction = 0.1;
	
	var ball = this.game.ball;
	
	if(ball.isDead)
	{
		this.lean = 0;
		ball.ax = ball.bashDirection;
	}
	//else if(ball.isAsending)
	//{
	//	this.lean = 0;
	//	ball.ay = -3;
	//}
	//else
	//{
	//}
	
	if(ball.state == Ball.NORMAL)
	{
		ball.ax = (this.lean  * accel);
	}
	
	ball.update();
	
	
	// set width 
	
//	var buttonWidth = 0.1;
	var buttonWidth = window.innerWidth * 0.1;
	if(buttonWidth < 60)buttonWidth = 60
	
	
}

Controller.prototype.onDeviceMotion = function(e)
{
	//var output = document.getElementById("output");
	//output.innerHTML = window.orientation;
	
	if(window.orientation == 90)
	{
		this.accelerationY = -e.accelerationIncludingGravity.y;  
	}
	else if(window.orientation == -90)
	{
		this.accelerationY = e.accelerationIncludingGravity.y;  
	}
	else if(window.orientation == 0)
	{
		this.accelerationY = e.accelerationIncludingGravity.x;
	}
	else
	{
		this.accelerationY = -e.accelerationIncludingGravity.x;
	}
	
	this.accelerationY *= 0.5
	
}

Controller.prototype.onTouchStart = function(e)
{
	//var buttonWidth = 0.1;
	
	var buttonWidth = window.innerWidth * 0.1;
	if(buttonWidth < 60)buttonWidth = 60
	
//	alert(e.global.x)
//	console.log(percent)
	var changedTouches = event.changedTouches;
	for (var i=0; i < changedTouches.length; i++) 
	{
		var touchEvent = changedTouches[i];
		//var percent = touchEvent.clientX /  window.innerWidth;
		
		if(touchEvent.clientX < buttonWidth)
		{
	//		this.leftTouch = e;
			this.leftTouch = touchEvent.identifier;
			this.leftDown = true;
		}
		else if(touchEvent.clientX > window.innerWidth-buttonWidth)
		{
			this.rightTouch = touchEvent.identifier;
			this.rightDown = true;
		}
		else
		{
			//this.jumpTouch = e;
			this.game.ball.jump()//dy = -60;
		}
	}	
	
	e.preventDefault();
}

Controller.prototype.onTiltTouch = function(e)
{
	e.preventDefault();
	this.game.ball.jump();
}

Controller.prototype.onTouchEnd = function(e)
{
//	var percent = e.global.x / APP.renderer.view.width;
	
	var changedTouches = event.changedTouches;
	
	for (var i=0; i < changedTouches.length; i++) 
	{
		var touchEvent = changedTouches[i];
		
		if(this.leftTouch ==  touchEvent.identifier)
		{
	//		this.leftTouch = e;
			this.leftTouch = null//touchEvent.identifier;
			this.leftDown = false;
		}
		
		if(this.rightTouch == touchEvent.identifier)
		{
			this.rightTouch = null// touchEvent.identifier;
			this.rightDown = false;
		}
			
	}
	/*console.log("UP")
	if(this.leftTouch == e)
	{
		this.leftTouch = null
		this.leftDown = false;
	}
	else if(this.rightTouch == e)
	{
		this.rightTouch = null;
		this.rightDown = false;
	}*/
	
	
}

Controller.prototype.onKeyDown = function(e)
{
	
	if(e.keyCode == 37)
	{
		this.leftDown = true
		this.keyState = -1
		this.lastKey = e.keyCode;
	}
	else if(e.keyCode == 39)
	{
		this.rightDown = true
		this.keyState = 1
		this.lastKey = e.keyCode;
	}
	else if(e.keyCode == 38 || e.keyCode == 32)
	{
		this.game.ball.jump();
	}
	else if(e.keyCode == 80)
	{
		if(this.game.paused)
		{
			this.game.view.hud.onResumePressed();
		}	
		else
		{
			this.game.view.hud.onPausePressed();
		}	
	}
}

Controller.prototype.onKeyUp = function(e)
{
	if(e.keyCode == 37)
	{
		this.leftDown = false;
	}
	else if(e.keyCode == 39)
	{
		this.rightDown = false;
	}
}


/**
 * @author Forestry Games
 */




TransitionAnimation = function()
{
		      
	PIXI.DisplayObjectContainer.call(this);//
	
	this.halfSprite = PIXI.Sprite.fromImage("img/BG_col_01.png");
	this.halfSprite.skew = -0.2;
	
	this.halfSprite.scale.x = 50/10;
	this.halfSprite.scale.y = APP.height/50;
	this.halfSprite.alpha = 0.5;
	this.halfSprite.position.y = APP.height/2;
	this.halfSprite.anchor.y = 0.5;
	
	this.sprite = PIXI.Sprite.fromImage("img/BG_col_01.png");
	this.sprite.skew = -0.2;
	
	this.sprite.scale.x = (APP.width +200)/50;
	this.sprite.scale.y = APP.height/50;
	this.sprite.position.x = 200;
	this.sprite.position.y = APP.height/2;
	
	this.sprite.anchor.y = 0.5;
	
	this.halfSprite.updateTransform = TransitionAnimation.skewTransform 
	this.sprite.updateTransform = TransitionAnimation.skewTransform 
	
	this.addChild(this.halfSprite);
	this.addChild(this.sprite);
	
	this.visible = false;
}

TransitionAnimation.skewTransform = function()
{
	// TODO OPTIMIZE THIS!! with dirty
	
	this.localTransform[0] = this.scale.x//this._cr * this.scale.x;
	this.localTransform[1] = Math.tan(this.skew) * this.scale.y;// -this._sr * this.scale.y
	this.localTransform[3] = 0//Math.tan(0.5);//this._sr * this.scale.x;
	this.localTransform[4] = this.scale.y//this._cr * this.scale.y;
	
		///AAARR GETTER SETTTER!
	
	this.localTransform[2] = this.position.x;
	this.localTransform[5] = this.position.y;
	
	// TODO optimize?
	mat3.multiply(this.localTransform, this.parent.worldTransform, this.worldTransform);
	this.worldAlpha = this.alpha * this.parent.worldAlpha;		
}

// constructor
TransitionAnimation.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

TransitionAnimation.prototype.start = function(color)
{
	this.color = color
	this.sprite.alpha = 1;
	this.sprite.setTexture(PIXI.Texture.fromImage(backgroundColorsName2[color]));
	this.halfSprite.setTexture(PIXI.Texture.fromImage(backgroundColorsName2[color]));
	//console.log(this.halfSprite.scale.x)// = 100
	this.sprite.position.x = APP.width + 60;
	this.halfSprite.position.x = APP.width + 60;
	this.halfSprite.visible=  true
	TweenLite.to(this.halfSprite.position, 2, {x:-100, ease:Sine.easeInOut});
	TweenLite.to(this.sprite.position, 2, {x:-100, delay:0.23, ease:Sine.easeInOut, onComplete:this.onCovered.bind(this)});
	
	this.visible = true;
}

TransitionAnimation.prototype.onCovered = function()
{
	stage.setBackgroundColor(backgroundColors[this.color]);
	this.halfSprite.visible=  false;
	TweenLite.to(this.sprite, 0.5, {alpha:0, ease:Sine.easeInOut, onComplete:this.onTransitionComplete.bind(this)});
	if(this.onComplete)this.onComplete();
	/*var scope = this;
	setTimeout(function(){
		
		
	}, 1/60)*/
}

TransitionAnimation.prototype.onTransitionComplete = function()
{
	this.visible = false;
	if(this.onCompleteReal)this.onCompleteReal();
}

/**
 * @author Forestry Games 
 */
var PIXI = PIXI || {};

PIXI.StressTest = function(callback)
{
	this.callback = callback;
	this.stage = new PIXI.Stage(0xFFFFFF);
	this.renderer = new PIXI.CanvasRenderer(500, 500);
	document.body.appendChild(this.renderer.view);
	this.cover = document.createElement("div");
	this.cover.style.width = this.cover.style.height = "500px";
	this.cover.style.background = "#FFFFFF";
	
	document.body.appendChild(this.cover);
	
	this.renderer.view.style.position = "absolute";
	this.cover.style.position = "absolute";
	this.cover.style.zIndex = 2;
	//this.renderer.view.style.display = "none";
	//
	this.duration = 3;
	
	var scope = this;
	var canvas = document.createElement("canvas");
	canvas.width = 52
	canvas.height = 74
	canvas.context = canvas.getContext("2d");
	canvas.context.fillRect(0,0,52,74);
	
	this.texture = PIXI.Texture.fromCanvas(canvas);
	this.texture.baseTexture.addEventListener( 'loaded', function(){ scope.begin()} );
	
	this.frameRate = [];
}

// constructor
PIXI.StressTest.constructor = PIXI.StressTest;

PIXI.StressTest.prototype.begin = function()
{
	this.testSprites = [];
	for (var i=0; i < 300; i++) 
	{
		var bunny = new PIXI.Sprite(this.texture);
		bunny.anchor.x = 0.5;
		bunny.anchor.y = 0.5;
		this.stage.addChild(bunny);
		bunny.position.x = 50 + Math.random() * 400; 
		bunny.position.y = 50 + Math.random() * 400; 
		
		this.testSprites.push(bunny);
	};
	
	this.renderer.render(this.stage);
	
	this.startTime = Date.now();
	this.lastTime = Date.now();
	
	var scope = this
	requestAnimFrame(function(){scope.update()});
}

PIXI.StressTest.prototype.update = function()
{
	var currentTime = Date.now();
	
	for (var i=0; i < this.testSprites.length; i++) {
	  this.testSprites[i].rotation += 0.3;
	};
	
	this.renderer.render(this.stage);
	
	var diff = currentTime - this.lastTime;
	diff *= 0.06;
	
	//diff *= 60;
	
	this.frameRate.push(diff);
	
	this.lastTime = currentTime;
	
	var elapsedTime = currentTime - this.startTime;
	
	if(elapsedTime < this.duration * 1000)
	{
		var scope = this
		requestAnimFrame(function(){scope.update()});
		
	}
	else
	{
		// end!
		console.log(this.frameRate);
	//	console.log(this.frameRate.length/this.duration);
	//	alert(this.frameRate.length/this.duration)
		document.body.removeChild(this.renderer.view);
		document.body.removeChild(this.cover);
		
		this.cover = null;
		this.renderer = null;
		
	//	this.renderer.dispose();
//		this.stage.dispose()
		this.result = this.frameRate.length/this.duration;
		
		
		if(this.callback)this.callback(this.result);
	}
	
}



//if (!window.console) 
window.console = {};
window.console.log = function () { };
//if (!window.console.log) 

PIXI.JsonLoader.prototype.loadIe = function(){
	//this.ajaxRequest = new AjaxRequest();
	var scope = this;
	
	$.ajax({
       type: 'GET',
        url: this.url,
        async: true,
        crossDomain:true,
        dataType: "json",
        success:this.onJSONLoadedIE.bind(this),
        error: function(req, reqStatus, reqError)
	    {
	      console.log(req);
	      console.log(reqStatus);
	      console.log(reqError);
		  return;
	    }
   	});
   	/*
	this.ajaxRequest.onreadystatechange = function () {
		scope.onJSONLoaded();
	};

	this.ajaxRequest.open("GET", this.url, true);
	if (this.ajaxRequest.overrideMimeType) this.ajaxRequest.overrideMimeType("application/json");
	this.ajaxRequest.send(null);*/
}

PIXI.JsonLoader.prototype.onJSONLoadedIE = function (data) {
//	if (this.ajaxRequest.readyState == 4) {
	//	if (this.ajaxRequest.status == 200 || window.location.href.indexOf("http") == -1) {
			
			if(data instanceof String)data = JSON.parse(data);
			this.json = data;//JSON.parse(this.ajaxRequest.responseText);
			
			if(this.json.frames)
			{
				// sprite sheet
				var scope = this;
				var textureUrl = this.baseUrl + this.json.meta.image;
				var image = new PIXI.ImageLoader(textureUrl, this.crossorigin);
				var frameData = this.json.frames;
			
				this.texture = image.texture.baseTexture;
				image.addEventListener("loaded", function (event) {
					scope.onLoaded();
				});
			
				for (var i in frameData) {
					
					//console.log("Frame Added to Cache: " + i)
					var rect = frameData[i].frame;
					if (rect) {
						PIXI.TextureCache[i] = new PIXI.Texture(this.texture, {
							x: rect.x,
							y: rect.y,
							width: rect.w,
							height: rect.h
						});
						if (frameData[i].trimmed) {
							//var realSize = frameData[i].spriteSourceSize;
							PIXI.TextureCache[i].realSize = frameData[i].spriteSourceSize;
							PIXI.TextureCache[i].trim.x = 0; // (realSize.x / rect.w)
							// calculate the offset!
						}
					}
				}
			
				image.load();
				
			}
			else if(this.json.bones)
			{
				// spine animation
				var spineJsonParser = new spine.SkeletonJson();
				var skeletonData = spineJsonParser.readSkeletonData(this.json);
				PIXI.AnimCache[this.url] = skeletonData;
				this.onLoaded();
			}
			else
			{
				this.onLoaded();
			}
		//}
		//else
		//{
		//	this.onError();
		//}
	//}
};



var McBites = function()
{
	
	APP = this;
	
	this.isHigh = true;
		
	APP.tc = PROFILE.mobile ? "http://m.your-website-name.co.uk/terms.php" : "https://www.greenish.xyz/";

	this.profile = PROFILE;
	
	
	var props = getUrlVars();
	this.inAPP = props["inapp"] == "true";
	
	//alert(this.inAPP);
		
	this.startLevel = props["level"];

	if(!this.inAPP)
	{
		FB.init({appId:"",
					status: false,
					cookie: true});
					
		//console.log("!!!")
		
		FacebookAPI.checkLoggedIn(function(data){
			
			if(FacebookAPI.loggedIn)
			{
				//console.log("done")
				SteveAPI.getUserScore(function(data){
					
					
					APP.userRank = data.rank;
					APP.userScore = data.score.score;
					APP.userName = data.score.username;
					
					console.log(APP.userName + " is ranked " + APP.userRank + " and the score is " + APP.userScore)
				});
			}
			else
			{
				console.log("NOT LOGGED IN")
			}
			
		});
		
	}
	else
	{
	//	alert("YOU ARE IN THE APP! AUTO LOAD!");
	//	window.open("mcd://webapp/promptFacebookToken");
		
		//this.inAPP
	}
	
	this.width = 800;
	this.height = 600;
	
	
	// loader screen
	// startup
	// title screen
	// game screen //
	this.renderer = new PIXI.CanvasRenderer(800, 600);
	document.body.appendChild(this.renderer.view);
	this.renderer.view.style["-webkit-transform"] = "translate3d(0,0,0)";
	this.renderer.context.imageSmoothingEnabled = false;
	this.renderer.context.webkitImageSmoothingEnabled = false;
	this.renderer.context.mozImageSmoothingEnabled = false;

	//this.renderer.view.style["-webkit-filter"] = "invert(1)";
	
	
	this.stage = new PIXI.Stage(0xFFFFFF);
	
	this.container = new PIXI.DisplayObjectContainer();
	this.stage.addChild(this.container);
	
	this.simpleApp = new SimpleApp(this.container);
	
	this.startup = new Startup();
	
	this.startup.run();
	
	requestAnimationFrame(this.update.bind(this));
	
		
	/*
	gui = new dat.GUI({
		//height : 5 * 32 - 1,
		width : 350
	})*/;
	
	//this.audio = new SoundButton();
	//this.stage.addChild(this.audio);

	
	// do a test! what controll mechanism?
	
	this.tiltAvailable = false;
	this.touchAvailable = false;
	this.keyAvailable = false;
	
	
	var newWidth = window.innerWidth  || document.documentElement.clientWidth;
	var newHeight = window.innerHeight  || document.documentElement.clientHeight;

	this.resize(newWidth, newHeight);
	
	
	stats = new Stats();
	//stats.setMode(1); // 0: fps, 1: ms
	
	// Align top-left
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';
	stats.domElement.style.zIndex = '3';
	
//	document.body.appendChild( stats.domElement );
	
	//this.
}


McBites.prototype.update = function()
{
	// stats.begin();
	stats.update();
	this.renderer.render(this.stage);
	requestAnimationFrame(this.update.bind(this));
	// stats.end();
}

McBites.prototype.highRez = function()
{
	if(this.isHigh)return;
	this.isHigh = true;
	this.resize(this.w, this.h);
}

McBites.prototype.lowRez = function()
{
	if(!this.isHigh)return;
	this.isHigh = false;
	this.resize(this.w, this.h);
}

McBites.prototype.resize = function(w, h)
{
	//w = 1024//
	//h = 690//
	
	this.w = w;
	this.h = h;
	
	this.renderer.view.style.width = w + "px";	
	this.renderer.view.style.height = h + "px";	
	
	var ratio = w / h;
	
	
	var realHeight = h//Math.min(h, 690);
	var realWidth = w// * (realHeight/h);
	this.container.scale.x = this.container.scale.y = 1;
	
	if(h < 690 || !this.isHigh)
	{
		realHeight = Math.min(h, 690);
		realWidth = w * (realHeight/h);
		this.container.scale.x = this.container.scale.y = realHeight / 690;
		
		h = 690;
	}
	
	if(APP.controlOverlay)
	{
		APP.controlOverlay.position.x = realWidth / 2;
		APP.controlOverlay.position.y = realHeight / 2;
	}
	
	if(APP.background)
	{
		var scale = realWidth < realHeight ? realHeight / 1024 : realWidth / 1024;
		APP.background.position.x = realWidth/2;
		APP.background.position.y = realHeight/2;
		
		APP.background.scale.x = APP.background.scale.y = scale;
	}
	//this.container.position.x = this.container.scale.x / 2;
	
	/*
	if(realWidth > realHeight)
	{
		realWidth = 1024;
		realHeight = 1024 / ratio;
	}
	else
	{
		realHeight = 1024;
		realWidth = 1024 * ratio;
	}*/
	
	
	/*
	if(realWidth > 1024)
	{
		realWidth = 1024;
		realHeight = 1024 / ratio;
	}
	else if(realHeight > 1024)
	{
		realHeight = 1024;
		realWidth = 1024 * ratio;
	}*/
	
	this.renderer.resize(realWidth,realHeight);
	//this.simpleApp.resize(realWidth,realHeight);
	this.simpleApp.resize(realWidth / this.container.scale.x, Math.max(h, 690));
	
//	this.addChild(this.audio);
//	this.audio.position.x = realWidth
//	this.audio.position.y = 100;
}



//window.addEventListener('message',onMessageReturned);	


/*
 * ON READY!
 */

$(document).ready(function(){
	
	var myNav = navigator.userAgent.toLowerCase();
  	var ie =  (myNav.indexOf('msie') != -1)
  	
//  	var ieVersion = parseInt(myNav.split('msie')[1])
  //  alert(ie);
	if(ie)//$.browser.msie)
	{
	//	alert("ie")
		// do sum stuff!
		//console.log("GOOD OLD IE!")
		PIXI.JsonLoader.prototype.load = PIXI.JsonLoader.prototype.loadIe;
	}
    
	//alert(navigator.userAgent);
	PROFILE = new Profile();
	PROFILE.buildProfile();
	
	if(PROFILE.mobile)
	{
		var tab = document.getElementById("mcTab");
		
		if(window.devicePixelRatio != 2)
		{
			tab.src = REMOTE_PATH + "img/super-spice-dash_m.png";
			tab.className = "mobileTab";
		}
		else
		{
			tab.src = REMOTE_PATH + "img/super-spice-dash.png";
		}
		
		var strip = document.getElementById("topStrip");
		strip.style.display = "none";

		var link = document.getElementById("mcdlink");
		link.href = "http://m.your-website-name.co.uk";
		
		
	}
	else
	{
		var tab = document.getElementById("mcTab");
		tab.src = REMOTE_PATH + "img/super-spice-dash.png"
	}
	
	
	if(window.devicePixelRatio == 2 && !PROFILE.ipad)
	{
        $('meta[name=viewport]').attr('content','width=device-width, user-scalable=no,initial-scale=.5, maximum-scale=.5, minimum-scale=.5');
	}
	else
	{
		$('meta[name=viewport]').attr('content','width=device-width, user-scalable=no,initial-scale=1, maximum-scale=1, minimum-scale=1');

	}
	
	var props = getUrlVars();
	var inAPP = props["inapp"] == "true";
	
	if(inAPP)
	{
		var tab = document.getElementById("mcTab");
		tab.style.display = "none";
		var strip = document.getElementById("topStrip");
		strip.style.display = "none";
	}
	//if(this.inAPP && )
	
	if(PROFILE.is3g )
	{
		var noPlay = new Image();
		noPlay.src = REMOTE_PATH + "img/prompts/3GS_noplay.jpg";
		noPlay.style.position = "absolute";
		var newWidth = window.innerWidth  || document.documentElement.clientWidth;
		var newHeight = window.innerHeight  || document.documentElement.clientHeight;

		noPlay.width = newWidth
		noPlay.height = newHeight
		
		document.body.style.color = "#FFFFFF";
		document.body.appendChild(noPlay);
		return;
	}
	
	var needsTest = PROFILE.needsProfile;
	var threshhold = inAPP ? 7 : 5;
	if(PROFILE.ios && !inAPP )threshhold = 0;
	
	
	if(!PROFILE.ios)threshhold = 0;
	
	
	
	if(Modernizr.canvas)
	{
		
		if(needsTest)
		{
			// stress test
			stressTest = new PIXI.StressTest(function(result){
			//alert(result + " " + threshhold)
				if(result > threshhold)
				{
					PROFILE.setup((inAPP && PROFILE.ios) ? 0 : result);
					app = new McBites();
				}
				else
				{
					var noPlay = new Image();
					
					if(PROFILE.ipad)
					{
						noPlay.src = REMOTE_PATH + "img/prompts/iPad_noplay.jpg";
						
					}
					else
					{
						noPlay.src = REMOTE_PATH + "img/prompts/iPhone4_browserPlay.jpg";
						noPlay.ontouchstart = function()
						{
							window.open("http://m.your-website-name.co.uk/spicy", "_blank")
						}
					}
					noPlay.style.position = "absolute";
					var newWidth = window.innerWidth  || document.documentElement.clientWidth;
					var newHeight = window.innerHeight  || document.documentElement.clientHeight;
	
					
					noPlay.width = newWidth
					noPlay.height = newHeight
					
					document.body.style.color = "#FFFFFF";
					document.body.appendChild(noPlay);
					
					return;
				}
				
			//	alert(result)
			});
			
			stressTest.begin();
		//	app = new McBites();
		}
		else
		{
			PROFILE.setup(10000);
			app = new McBites();
		}
	}
	else
	{
		var noPlay = new Image();
		noPlay.src = REMOTE_PATH + "img/warning_ie8.jpg";
		noPlay.style.position = "absolute";
		noPlay.style.top = "50%";
		noPlay.style.left = "50%";
		noPlay.style.marginTop = "-400px";
		noPlay.style.marginLeft = "-640px";
		//	noPlay.style.
		
		document.body.style.color = "#000000";
		document.body.appendChild(noPlay);
	}
	
		
})

$(window).resize(function(){
	
	var newWidth = window.innerWidth  || document.documentElement.clientWidth;
	var newHeight = window.innerHeight  || document.documentElement.clientHeight;
	
	if(app)app.resize(newWidth, newHeight);
	
	//alert("RESIZE: " + newWidth + " : " + newHeight)
	
	window.scrollTo(0,0);
})