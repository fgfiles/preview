/**
 * Created by rufian on 12/10/14.
 */
define(['orion/physics/Box2DObject',
		'orion/physics/PhysicsDebug',
		'orion/GameObject'],
function(Box2DObject,
		 PhysicsDebug,
		 GameObject)
{
	var Ground = function(physicsWorld)
	{
		GameObject.call(this, Ground.NAME, new PhysicsDebug('rectangle', { width: 1136 * 2, height: 60 }));

		this.setUp(physicsWorld);
	};

	Ground.NAME = 'ground';
	Ground.prototype = Object.create(GameObject.prototype);
	Ground.prototype.constructor = Ground;
	Ground.prototype.box2DObjectA = null;
	Ground.prototype.box2DObjectB = null;
	Ground.prototype.debugB = null;
	Ground.prototype.lastX = null;
	Ground.prototype.next = null;
	Ground.prototype.offsetX = null;
	Ground.prototype.positionB = null;
	Ground.prototype.physicsContainer = null;

	// Set-up --------------------------------------------------------------------------------------------------------------
	//
	Ground.prototype.setUp = function(physicsWorld)
	{
		this.debugB = new PhysicsDebug('rectangle', { width: 1136 * 2, height: 60, color: 0xff00aa });
		this.asset.z = 0;
		this.debugB.z = 0;

		this.box2DObject = new Box2DObject(physicsWorld,
											{
												shape: 'box',
												density: 1,
												friction: 0.1,
												width: 1136 / 30,
												height: 30 / 30,
												restitution: 0,
												type: box2d.b2Body.b2_staticBody,
												filterCategory: 0x0001,
												filterMask: 0x0001 | 0x0002 | 0x0004,
												userData: 'Ground',
												startX: (2272 * 0.5) / 30,
												startY: 600 / 30
											});
		this.box2DObjectA = this.box2DObject;
		this.box2DObjectB = new Box2DObject(physicsWorld,
											{
												shape: 'box',
												density: 1,
												friction: 0.1,
												width: 1136 / 30,
												height: 30 / 30,
												restitution: 0,
												type: box2d.b2Body.b2_staticBody,
												filterCategory: 0x0001,
												filterMask:  0x0001 | 0x0002 | 0x0004,
												userData: 'Ground',
												startX: (2272 * 1.5) / 30,
												startY: 600 / 30
											});

		// Reference to the box2D coordinates
		this.position = this.box2DObjectA.body2D.GetPosition();
		this.positionB = this.box2DObjectB.body2D.GetPosition();

		// Reference to the center of the object
		this.center = this.box2DObject.center;

		this.offsetX = 0;
		this.lastX = 0;
		this.next = this.box2DObjectA;

		this.recycleR = -(2272);
	};

	// Update --------------------------------------------------------------------------------------------------------------
	//
	Ground.prototype.update = function(deltaTime)
	{
//		if (this.asset != null) this.asset.z = this.z = this.asset.y;
//		else this.z = 0;

		if (this.box2DObjectA != null)
		{
			this.asset.position.x = this.position.x * 30;
			this.asset.position.y = this.position.y * 30;
		}

		if (this.box2DObjectB != null)
		{
			this.debugB.position.x = this.positionB.x * 30;
			this.debugB.position.y = this.positionB.y * 30;
		}

		// Figuring out whether or not to reposition the ground plane
		if (this.physicsContainer.asset.x < this.recycleR)
		{
			this.recycleR -= (2272);
			if (this.next == this.box2DObjectA)
			{
				this.next.body2D.SetPosition(new box2d.b2Vec2(this.position.x + ((2272 / 30) * 2), 600 / 30));
				this.next = this.box2DObjectB;
			}
			else
			{
				this.next.body2D.SetPosition(new box2d.b2Vec2(this.positionB.x + ((2272 / 30) * 2), 600 / 30));
				this.next = this.box2DObjectA;
			}
		}
		this.lastX = this.offsetX;
	};

	return Ground;
});