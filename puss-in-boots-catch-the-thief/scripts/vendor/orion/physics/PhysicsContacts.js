/**
 * Created by rufian on 12/12/14.
 */
define(['underscore'],
function(_)
{
	var PhysicsContacts = function(physicsWorld)
	{
		this.setUp(physicsWorld);
	};

	PhysicsContacts.NAME = 'PhysicsContacts';
	PhysicsContacts.prototype.collisionEndListeners = null;
	PhysicsContacts.prototype.collisionStartListeners = null;
	PhysicsContacts.prototype.contactListener = null;
	PhysicsContacts.prototype.physicsWorld = null;

	// Set-up --------------------------------------------------------------------------------------------------------------
	//
	PhysicsContacts.prototype.setUp = function(physicsWorld)
	{
		// Binding
		_.bindAll(this, 'onCollisionStart', 'onCollisionEnd', 'onPostSolve', 'onPreSolve');

		// Making contact listener
		this.contactListener = new box2d.b2ContactListener();
		this.contactListener.BeginContact = this.onCollisionStart;
		this.contactListener.EndContact = this.onCollisionEnd;
		this.contactListener.PostSolve = this.onPostSolve;
		this.contactListener.PreSolve = this.onPreSolve;

		// Storing reference to physics world
		this.physicsWorld = physicsWorld;
		this.physicsWorld.SetContactListener(this.contactListener);

		// Setting up arrays of listener objects
		this.collisionEndListeners = [];
		this.collisionStartListeners = [];
	};

	PhysicsContacts.prototype.registerCollisionStartListener = function(value)
	{
		this.collisionStartListeners.push(value);
	};

	PhysicsContacts.prototype.deregisterCollisionStart = function(value)
	{

	};

	PhysicsContacts.prototype.registerCollisionEndListener = function(value)
	{
		this.collisionEndListeners.push(value);
	};

	PhysicsContacts.prototype.deregisterCollisionEnd = function(value)
	{

	};

	// Collisions ----------------------------------------------------------------------------------------------------------
	//
	PhysicsContacts.prototype.onCollisionStart = function(contact)
	{
		var userDataA = contact.m_fixtureA.m_userData;
		var userDataB = contact.m_fixtureB.m_userData;

		var i = this.collisionStartListeners.length;
		while (--i > -1)
		{
			if (this.collisionStartListeners[i].name == userDataA ||
				this.collisionStartListeners[i].name == userDataB)
			{
				this.collisionStartListeners[i].onCollisionStart(contact);
			}
		}
	};

	PhysicsContacts.prototype.onCollisionEnd = function(contact)
	{
		var userDataA = contact.m_fixtureA.m_userData;
		var userDataB = contact.m_fixtureB.m_userData;

		var i = this.collisionEndListeners.length;
		while (--i > -1)
		{
			if (this.collisionEndListeners[i].name == userDataA ||
				this.collisionEndListeners[i].name == userDataB)
			{
				this.collisionEndListeners[i].onCollisionEnd(contact);
			}
		}
	};

	PhysicsContacts.prototype.onPostSolve = function(contact, impulse)
	{
//		console.log(contact, impulse)
		var userDataA = contact.m_fixtureA.m_userData;
		var userDataB = contact.m_fixtureB.m_userData;

		var i = this.collisionStartListeners.length;
		while (--i > -1)
		{
			if (this.collisionStartListeners[i].name == userDataA ||
				this.collisionStartListeners[i].name == userDataB)
			{
				this.collisionStartListeners[i].onPostSolve(contact, impulse);
			}
		}
	};

	PhysicsContacts.prototype.onPreSolve = function(contact, oldManifold)
	{
//		var userDataA = contact.m_fixtureA.m_userData;
//		var userDataB = contact.m_fixtureB.m_userData;
//		console.log('presolving', contact.IsEnabled());
	};

	return PhysicsContacts;
});