/**
 * Created by rufian on 12/18/14.
 */
define(['orion/physics/Box2DObject',
		'game/display/Obstacle',
		'PIXI'],
function(Box2DObject,
		 Obstacle,
		 PIXI)
{
	var MineShaft = function(name, setUpObject)
	{
		Obstacle.call(this, name, setUpObject);
	};

	MineShaft.NAME = 'Obstacle';
	MineShaft.prototype = Object.create(Obstacle.prototype);
	MineShaft.prototype.constructor = MineShaft;

	// Properties ----------------------------------------------------------------------------------------------------------
	//
	MineShaft.prototype.foreground = null;

	// Set-up --------------------------------------------------------------------------------------------------------------
	//
	MineShaft.prototype.setUp = function(setUpObject)
	{
		this.isMineShaft = true;

		this.asset = new PIXI.Sprite.fromFrame(setUpObject.texture);
		this.asset.pivot.x = -25;
		this.asset.pivot.y = 60;
		this.cache = setUpObject.cache;
		var userData = (setUpObject.instantKill != undefined) ? 'ObstacleKill' : (setUpObject.mineShaft == true) ? 'MineShaft' : 'Obstacle';
		this.box2DObject = new Box2DObject(setUpObject.physicsWorld,
			{
				shape: 'polygon',
				polygons: setUpObject.geometry,
				density: 2,
				friction: 1,
				restitution: 0.1,
				type: box2d.b2Body.b2_staticBody,
				userData: userData,
				filterCategory: 0x0001,
				filterMask: 0x0001 | 0x0002,

				// Setting startX and startY way off-screen
				startX: -1000 / 30,
				startY: -1000 / 30
			});

		this.physicsOffsetX = (setUpObject.physicsOffsetX == undefined) ? 50 / 30 : setUpObject.physicsOffsetX;
		this.physicsOffsetY = (setUpObject.graphicOffsetY == undefined) ? 50 / 30 : setUpObject.graphicOffsetY;
		this.yFloor = setUpObject.y / 30;

		// Reference to the box2D coordinates
		this.position = this.box2DObject.body2D.GetPosition();

		// Reference to the center of the object
		this.center = this.box2DObject.center;
		this.angle = this.box2DObject.body2D.GetAngle();

		this.asset.position.x = this.position.x * 30;
		this.asset.position.y = (this.position.y + this.physicsOffsetY) * 30;

		this.active = false;

		this.foreground = new PIXI.Sprite.fromFrame('MineShaftForeground.png');
		this.foreground.pivot.x = -25;
		this.foreground.pivot.y = 60;
		this.foreground.z = 800;
	};

	// Update --------------------------------------------------------------------------------------------------------------
	//
	MineShaft.prototype.update = function(deltaTime)
	{
		// Skip over if not in play
		if (this.asset != null) this.asset.z = this.z = this.asset.y;
		else this.z = 0;

		if (!this.active)
		{
			this.asset.visible = false;
			this.foreground.visible = false;
			return;
		}

		this.asset.visible = true;
		this.foreground.visible = true;
		this.asset.position.x = this.position.x * 30;
		this.asset.position.y = (this.position.y + this.physicsOffsetY) * 30;
		this.foreground.position.x = this.asset.x - 42;
		this.foreground.position.y = this.asset.y + 56;

		if (-(this.asset.x + this.asset.width)> this.camera.bounds.left)
		{
			this.cache.returnObject(this, true);
		}
	};

	return MineShaft;
});