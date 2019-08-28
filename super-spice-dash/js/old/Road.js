
Road = function()
{
	this.segs = [];
	
	this.segSize = 400;
	this.offset = 0;
	this.position = 0;
	
	for(var i = 0; i < 21; i ++)
	{
		var segment = new Segment(i *  this.segSize);
		this.segs.push(segment);
//		console.log(segment)
		//segs.push(-400, 500 + Math.sin(i) * -50, i *  100, 0, 0);
	}	
	
	this.post = new Image();
	this.post.src = "img/edgeTuft.png";
	
	this.post2 = new Image();
	this.post2.src = "img/edgeTuftLeft.png";
	
	this.camera = {x:0,y:110,z:0}
}


Road.prototype.render = function(context)
{
	//context.clearRect(0,0, 800,600)
	var focalLength = 100;
	var count = 0;//+=0.1;
	var zoom = 1.6;//2;
	this.position += 60 * TIME.DELTA_TIME;
	
	this.camera.z = -this.position//1;//Math.sin(count) * 100;
	
	// apply 3d transform
	//for (var i=0; i < segs.length; i++) {
	for (var i=this.segs.length-1; i >= 0 ; i--) {
		
		
		var seg = this.segs[(i + this.offset) % this.segs.length];
		
		//seg.p2.y =  Math.cos((seg.p2.z+this.camera.z) /1500) * 550 + 1500;
		//seg.p1.y =  Math.cos((seg.p1.z +this.camera.z ) /1500) * -550 + 1500;
		
	  	var p1z = seg.p1.z + this.camera.z;
	  	var scaleRatio = focalLength/(focalLength + p1z) * zoom;
		
		seg.scaleRatio = scaleRatio;
		
		seg.p1Screen.x = (seg.p1.x * scaleRatio)  + 1024/2;
		seg.p1Screen.y = (seg.p1.y * scaleRatio) + 600/2 - 200;
		
		seg.p2Screen.x = (seg.p2.x * scaleRatio)  + 1024/2;
		seg.p2Screen.y = (seg.p2.y * scaleRatio) + 600/2 - 200;
		
	  	if(p1z > -100)
	  	{
			if(i == this.segs.length-1)
			{
			//	context.fillStyle = "red"
				
			}
			else
			{
				var previousSeg = this.segs[(i + this.offset + 1) % this.segs.length];
				
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
				
				
			//	context.drawImage(post, seg.p1Screen.x - (128 * lampScale *0.5), seg.p1Screen.y - (216 * lampScale) , 128 * lampScale, 216 * lampScale);
	  	//		context.drawImage(post2, seg.p2Screen.x - (128 * lampScale *0.5), seg.p2Screen.y - (216 * lampScale) , 128 * lampScale, 216 * lampScale);
			}
			
			
	  	}
	  	else
	  	{
	  		// map to "line"
	  		seg.position = this.position + this.segSize * this.segs.length;
	  		seg.p1.z = seg.position;
	  		seg.p2.z = seg.position;
	  		
	  		//seg.p1.y = 1500 + Math.sin(seg.position / 400) *250;
	  		//seg.p2.y = 1500 - Math.sin(seg.position /400) * 250;
	  		
	  	//	seg.p1.x =  1400 + Math.cos(seg.position / 800) *1250;
	  	//	seg.p2.x =  -1400 +Math.cos(seg.position /800) * 1250;
	  		
	  		
	  		this.offset++;
	  	}
		
	}
	
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
	
	this.p1 = {x:1400 , y:1500, z:z};
	this.p2 = {x:-1400, y:1500, z:z};
	
	this.p1Screen = {x:0, y:0};
	this.p2Screen = {x:0, y:0};
	
	
}

Segment.colors = ["#ff6032", "#ff3244"];
Segment.edgeColorDark = ["#cc4d28", "#cc2836"];
Segment.edgeColorLight = ["#ff805b", "#f"];
Segment.colorCount = 0;

