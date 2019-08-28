
$(document).ready(onReady)

function onReady()
{
	count = 0;
	
	// canvas..
	canvas = getCanvas(800, 600);
	document.body.appendChild(canvas);
	
	canvas.style.width = window.innerWidth + "px";
	canvas.style.height = window.innerHeight + "px";
	camera = {z:0};
	segs = [];
	
	for(var i = 0; i < 30; i ++)
	{
		segs.push(400, 500 + Math.sin(i) * 50, i *  100, 0, 0);
		segs.push(-400, 500 + Math.sin(i) * -50, i *  100, 0, 0);
	}	
	
	post = new Image();
	post.src = "img/post.png";
	
	requestAnimationFrame(render)
}

function render()
{
	var context = canvas.context;
	context.clearRect(0,0, 800,600)
	
	var focalLength = 100;
	count+=0.1;
	camera.z = Math.sin(count) * 100;
	
	// apply 3d transform
	for (var i=0; i < segs.length; i+=5) {
		
		var p1x = segs[i];
	  	
	  	var p1y = segs[i+1] + 100;
	  	
	  	var p1z = segs[i+2] + camera.z;
	  	
	  	var scaleRatio = focalLength/(focalLength + p1z);
		
		segs[i+3] = (p1x * scaleRatio)  + 800/2;
		segs[i+4] = (p1y * scaleRatio) + 600/2;
		
	  	if(p1z < 0)
	  	{
	  		
	  	}
	  	
	//	context.fillStyle = "red"
	//	context.fillRect(segs[i+3],segs[i+4] ,30 * scaleRatio,30 * scaleRatio);
//		context.fill();
		
	}
	
	for (var i=0; i < segs.length-10; i+=10) {
	  	
	  	 
	  	var p1x = segs[i + 3];
	  	var p1y = segs[i + 4];
	  	
	  	if(segs[i+2] + camera.z < 0 )continue;
	  	// the next ones...
	  	var p2x = segs[(i+5) + 3];
	  	var p2y = segs[(i+5) + 4];
	 	
	  	var p3x = segs[(i+10) + 3];
	  	var p3y = segs[(i+10) + 4];
	  	
	  	var p4x = segs[(i+15) + 3];
	  	var p4y = segs[(i+15) + 4];
	  	
	  	context.beginPath();
		
		context.moveTo(p1x, p1y);
		
		context.lineTo(p2x, p2y);
		
		context.lineTo(p4x, p4y);
		
		context.lineTo(p3x, p3y);
		
  		context.closePath();
		context.globalAlpha = 0.5 + (i/2 % 2) / 2;//1 //0.5 + Math.random();
		context.fillStyle = "red"
		context.fill();
		
		var p1z = segs[i+2] + camera.z;
	  	
	  	var scaleRatio = focalLength/(focalLength + p1z) * 2;
		context.globalAlpha   =1;
	  	context.drawImage(post, p1x - (95 * scaleRatio *0.5), p1y - (169 * scaleRatio) , 95 * scaleRatio, 169 * scaleRatio);
	  	context.drawImage(post, p2x - (95 * scaleRatio *0.5), p2y - (169 * scaleRatio) , 95 * scaleRatio, 169 * scaleRatio);
	};
	
	requestAnimationFrame(render)
}