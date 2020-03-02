var Graphics3D = function(){
	PIXI.Graphics.call(this);

	this.pos = {x:0,y:0,z:0};
    this.transPos = {};
	this.scalar = 1;
	this.graf = true;
	this.rot = 0;
	this.triArray = [];
	this.triArrayColour = [];
	this.vertexArray = [];
	this.vertexTransArray = [];
};
Graphics3D.prototype = Object.create(PIXI.Graphics.prototype);
Graphics3D.prototype.constructor = Graphics3D;

Graphics3D.prototype.addVertex = function(x,y,z){
	this.vertexArray.push({"x":x,"y":y,"z":z});
	this.vertexTransArray.push({"x":x,"y":y,"z":z});
};
Graphics3D.prototype.addTri = function(vertA,vertB,vertC,colour){

	this.triArrayColour.push(colour);
	this.triArrayColour.push(colour);
	this.triArrayColour.push(colour);
	this.triArray.push(vertA);
	this.triArray.push(vertB);
	this.triArray.push(vertC);
};
Graphics3D.prototype.isBackFace = function(vertA,vertB,vertC){
	var dot = (-(vertB.y-vertA.y)*(vertC.x-vertA.x))+((vertB.x-vertA.x)*(vertC.y-vertA.y));
	return dot > 0;
};
Graphics3D.prototype.build = function(){
	var vertA,vertB,vertC,colour;
	this.clear();
	for(var i = 0; i < this.triArray.length; i+=3)
	{
		colour = this.triArrayColour[i];
		vertA = this.vertexTransArray[this.triArray[i]];
		vertB = this.vertexTransArray[this.triArray[i+1]];
		vertC = this.vertexTransArray[this.triArray[i+2]];
		if(this.isBackFace(vertA,vertB,vertC) && vertA.z > 0 && vertB.z > 0 && vertC.z > 0)
		{
			this.beginFill(colour);
			this.moveTo(vertA.x,vertA.y);
			this.lineTo(vertB.x,vertB.y);
			this.lineTo(vertC.x,vertC.y);
		}
	}
};