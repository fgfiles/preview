
$(document).ready(onReady)

$(window).resize(onResize);

accelerationY = 0;
window.ondevicemotion = function(event) {  
    accelerationX = event.accelerationIncludingGravity.x;  
    accelerationY = event.accelerationIncludingGravity.y;  
    accelerationZ = event.accelerationIncludingGravity.z;  
}  

function onResize()
{
	canvas.style.width = window.innerWidth + "px";
	canvas.style.height = window.innerHeight + "px";
}

function onReady()
{
	count = 0;
	
	position = 0;
	// canvas..
	canvas = getCanvas(1024, 690);
	document.body.appendChild(canvas);
	
	segSize = 400;
	offset = 0;
	
	canvas.style.width = window.innerWidth + "px";
	canvas.style.height = window.innerHeight + "px";
	camera = {z:0};
	//camera.rotation = {x:0, y:0, z:0};
	
	segs = [];
	
	for(var i = 0; i < 21; i ++)
	{
		var segment = new Segment(i *  segSize);
		segs.push(segment);
//		console.log(segment)
		//segs.push(-400, 500 + Math.sin(i) * -50, i *  100, 0, 0);
	}	
	
	post = new Image();
	post.src = "img/edgeTuft.png";
	
	post2 = new Image();
	post2.src = "img/edgeTuftLeft.png";
	
	
	ball = new Ball();
	ball.image = new Image();
	ball.image.src = "img/McBite.png";
	requestAnimationFrame(render)
	
	background = new Image();
	background.src = "img/background.jpg";
	
	light = new Image();
	light.src = "img/godLight.png";
}

function render()
{
	var context = canvas.context;
	//context.clearRect(0,0, 800,600)
	context.drawImage(background, 0, 0);
	var focalLength = 100;
	count+=0.1;
	var zoom = 1.6//2;
	position += 30;
	
	camera.z = -position//1;//Math.sin(count) * 100;
	
	// apply 3d transform
	//for (var i=0; i < segs.length; i++) {
	for (var i=segs.length-1; i >= 0 ; i--) {
		
		var seg = segs[(i + offset) % segs.length];
		
	  	var p1z = seg.p1.z + camera.z;
	  	var scaleRatio = focalLength/(focalLength + p1z) * zoom;
		
		seg.scaleRatio = scaleRatio;
		
		seg.p1Screen.x = (seg.p1.x * scaleRatio)  + 1024/2;
		seg.p1Screen.y = (seg.p1.y * scaleRatio) + 600/2 - 200;
		
		seg.p2Screen.x = (seg.p2.x * scaleRatio)  + 1024/2;
		seg.p2Screen.y = (seg.p2.y * scaleRatio) + 600/2 - 200;
		
	  	if(p1z > -100)
	  	{
	  		//context.fillStyle = "red"
			//context.fillRect(seg.p1Screen.x,seg.p1Screen.y ,30 * scaleRatio,30 * scaleRatio);
			//context.fill();
			
	//		context.fillStyle = "red"
	//		context.fillRect(seg.p2Screen.x,seg.p2Screen.y ,30 * scaleRatio,30 * scaleRatio);
	//		context.fill();
			if(i == segs.length-1)
			{
			//	context.fillStyle = "red"
				
			}
			else
			{
				var previousSeg = segs[(i + offset + 1) % segs.length];
				
				context.globalAlpha = 1;// + (i % 2 * 0.2);
				
			//	context.fillStyle = "green";
				
				context.fillStyle = seg.edgeColorDark ;
				// edge..
				context.beginPath();
				
				context.moveTo(seg.p1Screen.x,
							   seg.p1Screen.y);
				
				context.lineTo(previousSeg.p1Screen.x,
							   previousSeg.p1Screen.y);
							   
				context.lineTo(previousSeg.p1Screen.x,
							   previousSeg.p1Screen.y + 400 * previousSeg.scaleRatio);
				
				context.lineTo(seg.p1Screen.x,
							   seg.p1Screen.y + 400 * scaleRatio);			   
							   
		  		context.closePath();
				context.fill();
				
				// edge.
				
				context.fillStyle = seg.edgeColorLight;
				context.beginPath();
				
				context.moveTo(seg.p2Screen.x,
							   seg.p2Screen.y);
				
				context.lineTo(previousSeg.p2Screen.x,
							   previousSeg.p2Screen.y);
							   
				context.lineTo(previousSeg.p2Screen.x,
							   previousSeg.p2Screen.y + 400 * previousSeg.scaleRatio);
				
				context.lineTo(seg.p2Screen.x,
							   seg.p2Screen.y + 400 * scaleRatio);			   
							   
		  		context.closePath();
				context.fill();
				
				context.fillStyle = seg.color;
				
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
				
				
				
				context.globalAlpha = 1;
				var lampScale = scaleRatio * 3;
				context.drawImage(post, seg.p1Screen.x - (128 * lampScale *0.5), seg.p1Screen.y - (216 * lampScale) , 128 * lampScale, 216 * lampScale);
	  			context.drawImage(post2, seg.p2Screen.x - (128 * lampScale *0.5), seg.p2Screen.y - (216 * lampScale) , 128 * lampScale, 216 * lampScale);
			}
			
			
	  	}
	  	else
	  	{
	  		// map to "line"
	  		seg.position = position + segSize * segs.length;
	  		seg.p1.z = seg.position;
	  		seg.p2.z = seg.position;
	  		
	  		seg.p1.y = 1500 + Math.sin(seg.position / 400) *250;
	  		seg.p2.y = 1500 - Math.sin(seg.position /400) * 250;
	  		
	  		seg.p1.x =  1400 + Math.cos(seg.position / 800) *1250;
	  		seg.p2.x =  -1400 +Math.cos(seg.position /800) * 1250;
	  		
	  		offset++;
	  	}
	  			
		
		
		
	}
	
	
				context.globalAlpha = 1;
	context.drawImage(light, 1024/2 - 499/2, -10);
	// draw ball
	
	 ball.p3D.z = 300// -camera.z + 500;
	 ball.p3D.y = 1500;
	 
	 ball.target += accelerationY * 10;
	 if( ball.target > 1400) ball.target = 1400;
	 if( ball.target < -1400) ball.target = -1400;
	 
	  ball.p3D.x += (ball.target - ball.p3D.x) * 0.3;
	  
	//  console.log(ball.target)
	  
	var p1z = ball.p3D.z;//+ camera.z;
	var scaleRatio = focalLength/(focalLength + p1z) * zoom;
		
	ball.pScreen.x = ( ball.p3D.x * scaleRatio)  + 800/2;
	ball.pScreen.y = ( ball.p3D.y * scaleRatio) + 600/2 - 300;
	
	scaleRatio *= 8 * 1;
	
	context.drawImage(ball.image, ball.pScreen.x - (42 * scaleRatio * 0.5), ball.pScreen.y - (42 * scaleRatio) , 42 * scaleRatio, 42 * scaleRatio);
	  	
	
	/*
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
	*/
	requestAnimationFrame(render)
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
	
	this.p1 = {x:1400 , y:1500, z:z};
	this.p2 = {x:-1400, y:1500, z:z};
	
	this.p1Screen = {x:0, y:0};
	this.p2Screen = {x:0, y:0};
	
	
}

Segment.colors = ["#ff6032", "#ff3244"];
Segment.edgeColorDark = ["#cc4d28", "#cc2836"];
Segment.edgeColorLight = ["#ff805b", "#f"];
Segment.colorCount = 0;

function Ball()
{
	this.scale = 1;
	this.target = 0;
	
	this.p3D = {x:0 , y:0, z:0};
	
	this.pScreen = {x:0, y:0};
	
}



