/**
 * Created by rufian on 11/17/14.
 */
define(['orion/physics/Box2DObject',
		'orion/physics/PhysicsDebug',
		'orion/GameObject',
		'PIXI'],
function(Box2DObject,
		 PhysicsDebug,
		 GameObject,
		 PIXI)
{
	// Constructor ---------------------------------------------------------------------------------------------------------
	//
	var Character = function(name, setUpObject)
	{
		GameObject.call(this, name, new PIXI.Spine(setUpObject.anim, setUpObject.scale));

		this.setUp(setUpObject);
	};

	Character.prototype = Object.create(GameObject.prototype);
	Character.prototype.constructor = Character;

	// Properties ----------------------------------------------------------------------------------------------------------
	//
	Character.prototype.audio = null;
	Character.prototype.canJump = null;
	Character.prototype.currentAnimation = null;
	Character.prototype.onGround = false;
	Character.prototype.physicsOffsetX = 0;
	Character.prototype.physicsOffsetY = 0;
	Character.prototype.runSpeed = 0;
	Character.prototype.state = null;
	Character.prototype.updateFunction = null;
	Character.prototype.updateTime = 0;
	Character.prototype.z = 0;

	// Set-up --------------------------------------------------------------------------------------------------------------
	//
	Character.prototype.setUp = function(setUpObject)
	{
		this.canJump = false;

		this.box2DObject = new Box2DObject(setUpObject.physicsWorld,
			{
				shape: 'circle',
				density: 3.5,
				friction: 0.5,
				radius: 50 / 30,
				restitution: 0,
				type: box2d.b2Body.b2_dynamicBody,
				filterCategory: 0x0001,
				filterMask: 0x0001,
				userData: this.name,
				startX: (1136 * 0.5) / 30,
				startY: -30 / 30
			});

		// Reference to the box2D coordinates
		this.position = this.box2DObject.body2D.GetPosition();

		// Setting run speed
		this.runSpeed = (setUpObject.runSpeed != undefined) ? setUpObject.runSpeed : 0;

		// Reference to the center of the object
		this.center = this.box2DObject.center;

		this.asset.scale.x = this.asset.scale.y = setUpObject.scale;
		this.asset.scale.x = -this.asset.scale.x;

		this.applyInitialForce();
	};

	// State -------------------------------------------------------------------------------------------------------------
	//
	Character.prototype.setState = function(value)
	{
		this.state = value;
		this.updateTime = 0;
	};

	// Physics -------------------------------------------------------------------------------------------------------------
	//
	Character.prototype.applyInitialForce = function()
	{
		this.box2DObject.body2D.SetLinearVelocity(new box2d.b2Vec2(this.runSpeed, 0), this.center);
	};

	// Collisions ------------------------------------------------------------------------------------------------------
	//
	Character.prototype.onCollisionStart = function(contact)
	{
		// Check collision is with ground
		if ((contact.m_fixtureA.m_userData == 'Ground' && contact.m_fixtureB.m_userData == this.name) ||
			(contact.m_fixtureB.m_userData == 'Ground' && contact.m_fixtureA.m_userData == this.name))
		{
			this.land();
			return;
		}

/*		// Assuming that the only type 2 (dynamic) bodies to collide will the character and an obstacle
		if ((contact.m_fixtureA.m_userData == "Obstacle" && contact.m_fixtureB.m_userData == "Character") ||
			(contact.m_fixtureB.m_userData == "Obstacle" && contact.m_fixtureA.m_userData == "Character"))
		{
			// Checking the collision normal to work out whether character is on top or to the side of the obstacle
			this.norm = contact.GetManifold().m_localPlaneNormal;

			var angle = Math.abs(Math.atan2(this.norm.x, this.norm.y) * 180 / Math.PI);
//			if (angle > 140 && angle < 220) this.canJump();
//			this.asset.state.setAnimationByName('Run', true, 0.2);
		}*/
	};

	Character.prototype.onCollisionEnd = function(contact)
	{
		if (this.jumping)
		{
			if ((contact.m_fixtureA.m_userData == 'Ground' && contact.m_fixtureB.m_userData == this.name) ||
				(contact.m_fixtureB.m_userData == 'Ground' && contact.m_fixtureA.m_userData == this.name))
			{
				this.setCanJump(false);
				return;
			}
		}
	};

	// Behavior ------------------------------------------------------------------------------------------------------------
	//
	Character.prototype.jump = function()
	{
		this.setCanJump(false);
		this.jumping = true;
	};

	Character.prototype.land = function()
	{
		this.setCanJump(true);
		this.jumping = false;
	};

	Character.prototype.setCanJump = function(value)
	{
		this.canJump = value;
	};

	Character.prototype.handleUp = function()
	{
		if (this.canJump) this.jump();
	};

	Character.prototype.handleDown = function()
	{
	};

	// Update --------------------------------------------------------------------------------------------------------------
	//
	Character.prototype.update = function(deltaTime)
	{
		if (this.asset != null) this.asset.z = this.z = this.asset.y;
		else this.z = 0;

//		console.log(this.position.x, this.position.y)
		if (this.box2DObject != null)
		{
			this.asset.position.x = this.position.x * 30;
			this.asset.position.y = (this.position.y + (50/30)) * 30;
			console.log(this.asset.position);
//			this.asset.rotation = this.box2DObject.body2D.GetAngle();
//			console.log(this.box2DObject.body2D.GetLinearVelocity())
		}

//		console.log(this.canJump)
	};

	return Character;
});