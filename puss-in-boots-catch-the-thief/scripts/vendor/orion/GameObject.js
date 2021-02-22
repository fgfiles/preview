/**
 * Created by rufian on 11/17/14.
 */
define(['orion/Game'], function(Game)
{
	var GameObject = function(name, asset)
	{
		this.init(name);
		if (asset != undefined) this.asset = asset;
		Game.getInstance().addGameObject(this);
	};

	// Properties ----------------------------------------------------------------------------------------------------------
	//
	GameObject.prototype.name = null;
	GameObject.prototype.active = null;
	GameObject.prototype.angle = null;
	GameObject.prototype.asset = null;	// Used for rendering
//	GameObject.prototype.physicsBody = null;
	GameObject.prototype.sceneBounds = null;
	GameObject.prototype.center = null;
	GameObject.prototype.box2DObject = null;
	GameObject.prototype.position = null;
	GameObject.prototype.physicsContainer = null;
	GameObject.prototype.physicsDebug = null;
	GameObject.prototype.physicsWorld = null;

	// Methods -------------------------------------------------------------------------------------------------------------
	//
	GameObject.prototype.init = function(name)
	{
		if (name == undefined) console.log("Error: GameObject must have a name");
		else this.name = name;

		this.position = new box2d.b2Vec2();
	};

	GameObject.prototype.destroy = function()
	{
		console.log("Game object destroy");
		Game.getInstance().removeGameObject(this);
	};

	GameObject.prototype.enable = function()
	{

	};

	GameObject.prototype.disable = function()
	{

	};

	GameObject.prototype.setX = function(value)
	{
		if (this.asset != null) this.asset.position.x = value;
	};

	GameObject.prototype.setY = function(value)
	{
		if (this.asset != null) this.asset.position.y = value;
	};

	GameObject.prototype.update = function(deltaTime)
	{
		if (this.asset != null) this.asset.z = this.z = this.asset.y;
		else this.z = 0;

		if (this.box2DObject != null)
		{
			this.asset.position.x = this.position.x * 30;
			this.asset.position.y = this.position.y * 30;
		}
	};

	return GameObject;
});