
var SteveAPI = {};
SteveAPI.sevrerPath = "#";

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
