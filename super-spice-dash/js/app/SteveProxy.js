
SteveProxy = function(frameUrl)
{
	this.iframe = document.createElement("iframe"); 
	
  	this.iframe.src = frameUrl;
  	
	this.iframe.style.width = 1 + "px"; 
	this.iframe.style.height = 1 + "px"; 
	this.iframe.style.top = 0 + "px";
	this.iframe.style.left = 0 + "px";
	this.iframe.style.position = "absolute";
	this.iframe.frameBorder = 0;	
	document.body.appendChild(this.iframe);
	
	window.addEventListener('message', this.onMessage.bind(this));
}

SteveProxy.constructor = ImageProxy;

SteveProxy.prototype.getUserScore = function(fbToken)
{
	var data = {type:"spicy", path:"get-user-score", fbToken:FacebookAPI.accessTocken};
	var jsonString = JSON.stringify(data);
	
	this.iframe.contentWindow.postMessage(data, "*");	
}

SteveProxy.prototype.onMessage = function(event)
{
	if(event.data == "loaded")
	{
		this.target = event.source;
		//this.target.postMessage(this.src, "*");	
	}
	else
	{
		
	}
}



// create an instance!

