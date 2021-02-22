/**
 * Created by rufian on 11/17/14.
 */
define(['game/display/Obstacle',
		'orion/physics/Box2DObject',
		'orion/GameObject',
		'PIXI'],
function(Obstacle,
		 Box2DObject,
		 GameObject,
		 PIXI)
{
	// Constructor ---------------------------------------------------------------------------------------------------------
	//
	var Obstacle = function(name, setUpObject)
	{
		GameObject.call(this, name, setUpObject);

		this.setUp(setUpObject);
	};

	Obstacle.NAME = 'Obstacle';
	Obstacle.prototype = Object.create(GameObject.prototype);
	Obstacle.prototype.constructor = Obstacle;

	// Properties ----------------------------------------------------------------------------------------------------------
	//
	Obstacle.prototype.active = false;
	Obstacle.prototype.cache = null;
	Obstacle.prototype.camera = null;
	Obstacle.prototype.isCactus = null;
	Obstacle.prototype.isMineShaft = null;
	Obstacle.prototype.yFloor = null;

	// Set-up --------------------------------------------------------------------------------------------------------------
	//
	Obstacle.prototype.setUp = function(setUpObject)
	{
		this.isMineShaft = false;

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

		if (userData == 'ObstacleKill') this.isCactus = true;
		else this.isCactus = false;

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
	};

	Obstacle.prototype.ready = function()
	{
		this.active = true;
	};

	Obstacle.prototype.recycle = function()
	{
		this.active = false;
	};

	// Scene set-up --------------------------------------------------------------------------------------------------------
	//
	Obstacle.prototype.setScenePosition = function(value)
	{
		this.box2DObject.body2D.SetPosition(new box2d.b2Vec2(value, this.yFloor));
		this.active = true;
		this.asset.position.x = this.position.x * 30;
		this.asset.position.y = (this.position.y + this.physicsOffsetY) * 30;
	};

	// Update --------------------------------------------------------------------------------------------------------------
	//
	Obstacle.prototype.update = function(deltaTime)
	{
		// Skip over if not in play
		if (this.asset != null) this.asset.z = this.z = this.asset.y;
		else this.z = 0;

		if (!this.active)
		{
			this.asset.visible = false;
			return;
		}

		this.asset.visible = true;
		this.asset.position.x = this.position.x * 30;
		this.asset.position.y = (this.position.y + this.physicsOffsetY) * 30;

		if (-(this.asset.x + this.asset.width)> this.camera.bounds.left)
		{
			this.cache.returnObject(this, true);
		}
	};

	return Obstacle;
});