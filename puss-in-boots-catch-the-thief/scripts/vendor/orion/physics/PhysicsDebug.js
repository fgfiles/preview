/**
 * Created by rufian on 12/9/14.
 */
define(['PIXI'],
function(PIXI)
{
	var PhysicsDebug = function(type, setUpObject)
	{
		PIXI.Graphics.call(this);
		this.setUp(type, setUpObject);
	};

	PhysicsDebug.prototype = Object.create(PIXI.Graphics.prototype);
	PhysicsDebug.prototype.constructor = PhysicsDebug;

	// Set-up --------------------------------------------------------------------------------------------------------------
	//
	PhysicsDebug.prototype.setUp = function(type, obj)
	{
		var c = (obj.color == undefined) ? 0xff0000 : obj.color;
		this.lineStyle(2, 0x000000);
		this.beginFill(c);
		switch (type)
		{
			case 'circle':
				this.drawCircle(0, 0, obj.radius);
				this.endFill();
				this.moveTo(0, 0);
				this.lineTo(0, -obj.radius);
				this.lineTo(0, 0);
				break;
			case 'rectangle':
				this.drawRect(-obj.width * 0.5, -obj.height * 0.5, obj.width, obj.height);
				this.endFill();
				this.moveTo(0, 0);
				this.lineTo(0, -obj.height * 0.5);
		}
	};

	return PhysicsDebug;
});