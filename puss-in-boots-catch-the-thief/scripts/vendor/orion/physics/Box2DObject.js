/**
 * Created by rufian on 12/10/14.
 */
define([],
function()
{
	var Box2DObject = function(world, setUpObject)
	{
		this.setUp(world, setUpObject);
	};

	Box2DObject.prototype.body2D = null;
	Box2DObject.prototype.bodyDef = null;
	Box2DObject.prototype.center = null;
	Box2DObject.prototype.fix2D = null;
	Box2DObject.prototype.fixDef = null;
	Box2DObject.prototype.sensor = null;
	Box2DObject.prototype.startX = null;
	Box2DObject.prototype.startY = null;
	Box2DObject.prototype.world = null;
	Box2DObject.SCALE = 30;

	// Set-Up ---------------------------------------------------------------------------------------------------------------
	//
	Box2DObject.prototype.setUp = function(world, setUpObject)
	{
		this.world = world;
		this.defineBox2DFixture(setUpObject);
		this.defineBox2DBody(setUpObject);
		this.addToBox2D(setUpObject);
	};

	Box2DObject.prototype.defineBox2DFixture = function(setUpObject)
	{
		this.fixDef = new box2d.b2FixtureDef();
		this.fixDef.filter.categoryBits = setUpObject.filterCategory;
		this.fixDef.filter.maskBits = setUpObject.filterMask;
		this.fixDef.density = setUpObject.density;
		this.fixDef.friction = setUpObject.friction;
		this.fixDef.restitution = (setUpObject.restitution != undefined) ? setUpObject.restitution : 0.5;

		switch (setUpObject.shape)
		{
			case 'box':
				this.fixDef.shape = new box2d.b2PolygonShape();
				this.fixDef.shape.SetAsBox(setUpObject.width, setUpObject.height);
				break;
			case 'circle':
				this.fixDef.shape = new box2d.b2CircleShape(setUpObject.radius);
				break;
			case 'polygon':
				this.fixDef.shape = new box2d.b2PolygonShape();
				break;
		}
		this.fixDef.userData = setUpObject.userData;
	};

	Box2DObject.prototype.defineBox2DBody = function(setUpObject)
	{
		this.bodyDef = new box2d.b2BodyDef();
		this.bodyDef.type = setUpObject.type;
	};

	Box2DObject.prototype.addToBox2D = function(setUpObject)
	{
		// Adding to Box2D
		if (this.bodyDef) this.body2D = this.world.CreateBody(this.bodyDef);

		// Special set-up for polygonal objects
		if (setUpObject.shape == 'polygon')
		{
			var count = 0;
			var polys = [];
			var v;

			for (var i = 0; i < setUpObject.polygons.length; i++)
			{
				var triDef = new box2d.b2FixtureDef();
				triDef.shape = new box2d.b2PolygonShape();
				triDef.userData = setUpObject.userData;
				triDef.density = setUpObject.density;
				triDef.friction = setUpObject.friction;
				triDef.restitution = (setUpObject.restitution != undefined) ? setUpObject.restitution : 0.5;
				polys = [];
				count = 0;

				var shape = setUpObject.polygons[i].shape;
				for (var ii = 0; ii < shape.length; ii++)
				{
					v = new box2d.b2Vec2();
					v.Set(shape[ii] / 30, shape[ii + 1] / 30);
					ii++;
					polys.push(v);
				}

				triDef.shape.SetAsArray(polys, count);
				this.body2D.CreateFixture(triDef);
			}
		}
		else
		{
			if (this.fixDef) this.fix2D = this.body2D.CreateFixture(this.fixDef);
		}

		this.center = this.body2D.GetWorldCenter();

		this.startX = setUpObject.startX;
		this.startY = setUpObject.startY;
		this.body2D.SetPosition(new box2d.b2Vec2(setUpObject.startX, setUpObject.startY));
	};

	Box2DObject.prototype.addSensor = function(setUpObject)
	{
		var sensorDef = new box2d.b2FixtureDef();
		sensorDef.isSensor = true;
		sensorDef.filter.categoryBits = setUpObject.filterCategory;
		sensorDef.filter.maskBits = setUpObject.filterMask;
		sensorDef.shape = new box2d.b2CircleShape(setUpObject.radius);
		sensorDef.userData = setUpObject.userData;

		this.sensor = this.body2D.CreateFixture(sensorDef);
	};

	return Box2DObject;
});