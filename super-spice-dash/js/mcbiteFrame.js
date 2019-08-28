
var frame;

$(document).ready(function(){
	
	var ie8Image = document.getElementById("ie8Image");
	
	frame = document.getElementById("gameFrame")
	if(ie8Image)
	{
		frame.style.display = "none";
		ie8Image.style.position = "absolute";
		ie8Image.style.top = "50%";
		ie8Image.style.left = "50%";
		
		ie8Image.style.marginLeft = "-443px";
		ie8Image.style.marginTop = "-277px";
	}
	
	var userAgent = window.navigator.userAgent;
	var ipad = userAgent.match(/iPad/i) != null;
	
	if(ipad)
	{
	//	alert("IPAD")
		window.location.href = "http://m.your-website-name.co.uk/spicy.php";
	}
})


