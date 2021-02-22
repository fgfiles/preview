/**
 * Created by rufian on 11/17/14.
 */
define(['orion/Notifier',
		'orion/Character',
		'orion/physics/Box2DObject',
		'TweenMax'],
function(Notifier,
		 Character,
		 Box2DObject,
		 TweenMax)
{
	// Constructor ---------------------------------------------------------------------------------------------------------
	//
	var CharacterPuss = function(name, setUpObject)
	{
		Character.call(this, name, setUpObject);
	};

	CharacterPuss.JUMP_THRUST = -35;
	CharacterPuss.NAME = 'Puss';
	CharacterPuss.prototype = Object.create(Character.prototype);
	CharacterPuss.prototype.constructor = CharacterPuss;

	// Properties ----------------------------------------------------------------------------------------------------------
	//
	CharacterPuss.prototype.dead = null;
	CharacterPuss.prototype.jumpPressed = null;
	CharacterPuss.prototype.mineShaftDeath = null;
	CharacterPuss.prototype.onGround = false;
	CharacterPuss.prototype.onObstacle = false;
	CharacterPuss.prototype.physicsContainer = null;
	CharacterPuss.prototype.startX = null;
	CharacterPuss.prototype.startY = null;
	CharacterPuss.prototype.stumbles = null;
	//
	// Impulses
	CharacterPuss.prototype.attackVec2 = null;
	CharacterPuss.prototype.freezeVec2 = null;
	CharacterPuss.prototype.downImpulseMild = null;
	CharacterPuss.prototype.downImpulseStrong = null;
	CharacterPuss.prototype.impulseVec2 = null;
	CharacterPuss.prototype.jumpVec2 = null;
	CharacterPuss.prototype.jumpThrust = null;
	CharacterPuss.prototype.jumpThrustVec2 = null;
	//
	// Persistent sounds
	CharacterPuss.prototype.soundMusic = null;
	CharacterPuss.prototype.soundRun = null;
	CharacterPuss.prototype.soundLands = null;
	CharacterPuss.prototype.soundJumps = null;
	CharacterPuss.prototype.soundStumble = null;
	CharacterPuss.prototype.soundKicks = null;
	//
	// Temp variables used during collisions
	CharacterPuss.prototype.worldManifold = null;
	CharacterPuss.prototype.p1 = null;
	CharacterPuss.prototype.p2 = null;
	CharacterPuss.prototype.vel1 = null;
	CharacterPuss.prototype.vel2 = null;

	// Set-up --------------------------------------------------------------------------------------------------------------
	//
	CharacterPuss.prototype.setUp = function(setUpObject)
	{
		_.bindAll(this, 'boost', 'land', 'setRun', 'mineShaftKill', 'startMusic');

		this.canJump = false;

		this.box2DObject = new Box2DObject(setUpObject.physicsWorld,
			{
				shape: 'circle',
				density: 1,
				friction: 0.5,
				radius: 50 / 30,
				restitution: 0,
				type: box2d.b2Body.b2_dynamicBody,
				filterCategory: 0x0002,
				filterMask: 0x0001 | 0x0002,
				userData: this.name,
				startX: (1136 * 0.5) / 30,
				startY: setUpObject.startY / 30
			});

		this.box2DObject.addSensor({
									radius: 180 / 30,
									userData: this.name,
									filterCategory: 0x0002,
									filterMask: 0x0002
									});

		this.physicsOffsetX = 50 / 30;
		this.physicsOffsetY = 50 / 30;
		this.sceneBounds = setUpObject.sceneBounds;

		// Reference to the box2D coordinates
		this.position = this.box2DObject.body2D.GetPosition();

		// Reference to the center of the object
		this.center = this.box2DObject.center;
		this.angle = this.box2DObject.body2D.GetAngle();
		this.physicsContainer = setUpObject.physicsContainer;

		// Setting scale
		this.asset.scale.x = -this.asset.scale.x;

		this.dead = false;
		this.jumpPressed = false;
		this.runSpeed = setUpObject.runSpeed;
		this.mineShaftDeath = false;
		this.startX = setUpObject.startX;
		this.startY = setUpObject.startY;

		// Animation mixes
		this.asset.stateData.setMix('run', 'spinJumpStart', 0.1);
		this.asset.stateData.setMix('run', 'run', 0.2);
		this.asset.stateData.setMix('spinJumpEnd', 'run', 0.1);
		this.asset.stateData.setMix('stumble', 'run', 0.2);
		this.asset.stateData.setMix('spin', 'die', 0.1);
		this.asset.stateData.setMix('run', 'die', 0.1);

		// Setting up impulses
		this.attackVec2 = new box2d.b2Vec2(10, 0);
		this.freezeVec2 = new box2d.b2Vec2(0, 0);
		this.downImpulseMild = new box2d.b2Vec2(0, 5);
		this.downImpulseStrong = new box2d.b2Vec2(0, 13.5);
		this.impulseVec2 = new box2d.b2Vec2(22, 10);
//		this.jumpVec2 = new box2d.b2Vec2(-40, -40);
//		this.jumpVec2 = new box2d.b2Vec2(-40, -50);
		this.jumpVec2 = new box2d.b2Vec2(-40, -80);
		this.jumpThrust = CharacterPuss.JUMP_THRUST;
		this.jumpThrustVec2 = new box2d.b2Vec2(0, this.jumpThrust);
		this.stumbles = 0;
		this.applyInitialForce();

		// Setting up collision variables
		this.worldManifold = new box2d.b2WorldManifold();
		this.p1 = new box2d.b2Vec2(0, 0);
		this.p2 = new box2d.b2Vec2(0, 0);

		// Settup up persistent sound references
		this.soundJumps = [];
		this.soundKicks = [];
		this.soundLands = [];
		for (var i = 0; i < 4; i++)
		{
			this.soundJumps.push(createjs.Sound.createInstance('jump0' + (i + 1)));
		}
		for (i = 0; i < 2; i++)
		{
			this.soundKicks.push(createjs.Sound.createInstance('hitThief0' + (i + 1)));
		}
		for (i = 0; i < 2; i++)
		{
			this.soundLands.push(createjs.Sound.createInstance('land0' + (i + 1)));
		}
		this.soundStumble = createjs.Sound.createInstance('stumble');
		this.soundRun = createjs.Sound.createInstance('run');
		this.soundRun.play({loop:-1});
		this.soundMusic = createjs.Sound.createInstance('music');

		// Finally wait a few seconds before starting the music
		TweenMax.delayedCall(5, this.startMusic);
	};

	CharacterPuss.prototype.reset = function()
	{
		this.dead = false;
		this.mineShaftDeath = false;
		this.onGround = false;
		this.jumping = false;
		this.jumpPressed = false;
		this.stumbles = 0;

		this.resetPussCollisions();

		// Start running sound
		this.soundRun.play({loop:-1});

		// Finally wait a few seconds before starting the music
		TweenMax.delayedCall(5, this.startMusic);

		this.currentAnimation = 'run';
		this.asset.state.addAnimationByName('run', true);

		this.box2DObject.body2D.SetPosition(new box2d.b2Vec2(this.position.x, this.startY / 30));
		this.box2DObject.body2D.SetLinearVelocity(new box2d.b2Vec2(this.runSpeed, 0), this.center);
	};

	// Collisions ------------------------------------------------------------------------------------------------------
	//
	CharacterPuss.prototype.onCollisionStart = function(contact)
	{
		if (this.dead) return;

		// Collision is with ground
		if (contact.m_fixtureA.m_userData == 'Ground' || contact.m_fixtureB.m_userData == 'Ground')
		{
			this.land();
		}
		// Collision is with enemy
		else if ((contact.m_fixtureA.m_userData == 'Enemy' || contact.m_fixtureB.m_userData == 'Enemy'))
		{
			this.attack();
		}
		// Collision with mine shaft
		else if ((contact.m_fixtureA.m_userData == 'MineShaft' || contact.m_fixtureB.m_userData == 'MineShaft'))
		{
			/**
			 * Puss falls through mine shaft opening, so we need to see Puss' filter
			 * data to collide with nothing.
			 */
			this.removeObstacleCollisions(contact);
			this.removePussCollisions();
			this.fallIntoMineShaft(contact.m_fixtureA.GetBody().GetPosition().x * 30);
			TweenMax.delayedCall(0.2, this.mineShaftKill);
		}
		// Collision with killer cacti
		else if ((contact.m_fixtureA.m_userData == 'ObstacleKill' || contact.m_fixtureB.m_userData == 'ObstacleKill'))
		{
			this.worldManifold = new box2d.b2WorldManifold();
			contact.GetWorldManifold(this.worldManifold);
			this.assignContactInfo(contact);
			this.setCanJump(false);

			// Check if Puss is jumping, as he can still bounce off the top of a cactus
			if (this.jumping)
			{
				// Check whether we're falling onto obstacle
				if (this.fallingOntoObstacle(this.box2DObject.body2D.GetLinearVelocity()))
				{
					this.box2DObject.body2D.ApplyImpulse(new box2d.b2Vec2(20, -40), this.center);
					this.playLandSound();
				}
				else
				{
					// Explicitly setting stumble count so that it's an instant kill
					this.stumbles = 5;
					this.stumble();
					this.physicsContainer.shake(12, 4, 0.05, true, false);

					/**
					 * Now need to set change this obstacle's filter data
					 * so that Puss no longer collides with it.
					 */
					this.removeObstacleCollisions(contact);
				}
			}
			else
			{
				// Explicitly setting stumble count so that it's an instant kill
				this.stumbles = 5;
				this.stumble();
				this.physicsContainer.shake(12, 4, 0.05, true, false);

				/**
				 * Now need to set change this obstacle's filter data
				 * so that Puss no longer collides with it.
				 */
				this.removeObstacleCollisions(contact);
			}
		}
		// Check collision with obstacle
		else if ((contact.m_fixtureA.m_userData == 'Obstacle' || contact.m_fixtureB.m_userData == 'Obstacle'))
		{
			this.worldManifold = new box2d.b2WorldManifold();
			contact.GetWorldManifold(this.worldManifold);
			this.assignContactInfo(contact);
			this.setCanJump(false);

			if (this.jumping)
			{
				// Check whether we're falling onto obstacle
				if (this.fallingOntoObstacle(this.box2DObject.body2D.GetLinearVelocity()))
				{
					this.box2DObject.body2D.ApplyImpulse(new box2d.b2Vec2(20, -40), this.center);
					this.playLandSound();
				}
				else
				{
					/**
					 * If stumble results in death, need to set change this obstacle's filter data
					 * so that Puss no longer collides with it.
					 */
					if (this.stumble()) this.removeObstacleCollisions(contact);
				}
			}
			else
			{
				/**
				 * If stumble results in death, need to set change this obstacle's filter data
				 * so that Puss no longer collides with it.
				 */
				if (this.stumble())	this.removeObstacleCollisions(contact);
			}
		}
	};

	CharacterPuss.prototype.assignContactInfo = function(contact)
	{
		this.p1.x = this.worldManifold.m_points[0].x;
		this.p1.y = this.worldManifold.m_points[0].y;
		this.p2.x = this.worldManifold.m_points[1].x;
		this.p2.y = this.worldManifold.m_points[1].y;
//		this.vel1 = contact.m_fixtureA.GetBody().GetLinearVelocityFromWorldPoint(this.p1);
//		this.vel2 = contact.m_fixtureB.GetBody().GetLinearVelocityFromWorldPoint(this.p2);
	};

	/**
	 * Tidies up movement when dead and still continuously-colliding with an obstacle.
	 * Also pushes Puss also when colliding with an obstacle.
	 * @param contact
	 * @param impulse
	 */
	CharacterPuss.prototype.onPostSolve = function(contact, impulse)
	{
		if (this.dead)
		{
			this.box2DObject.body2D.SetLinearVelocity(this.freezeVec2);
			this.box2DObject.body2D.SetAngularVelocity(0);
			return;
		}

		// Check collision with obstacle
		if (contact.m_fixtureA.m_userData == 'Ground' || contact.m_fixtureB.m_userData == 'Ground')
		{
			this.onGround = true;
		}
		else if (contact.m_fixtureA.m_userData == 'Obstacle' || contact.m_fixtureB.m_userData == 'Obstacle')
		{
			this.onObstacle = true;
			this.box2DObject.body2D.ApplyImpulse(this.impulseVec2, this.center);
		}
	};

	CharacterPuss.prototype.onCollisionEnd = function(contact)
	{
		if (contact.m_fixtureA.m_userData == 'Ground' || contact.m_fixtureB.m_userData == 'Ground')
		{
			this.onGround = false;
		}
		else if (contact.m_fixtureA.m_userData == 'Obstacle' || contact.m_fixtureB.m_userData == 'Obstacle')
		{
			this.onObstacle = false;
		}
	};

	/**
	 * Removes all the collision-handling from a given obstacle.
	 * Used mainly when colliding with the mine shaft entrance
	 * @param contact
	 */
	CharacterPuss.prototype.removeObstacleCollisions = function(contact)
	{
		var b = contact.m_fixtureA.GetBody();
		b.SetType(1);

		// Cycling through obstacle fixtures
		var fixture = b.GetFixtureList();
		var filterData = new box2d.b2FilterData();

		filterData.categoryBits = 0x0004;
		filterData.maskBits = 0x0001;

		while (fixture)
		{
			fixture.SetFilterData(filterData);
			fixture = fixture.GetNext();
		}

		b.SetLinearVelocity(this.freezeVec2, b.GetWorldCenter());
		b.SetAngularVelocity(0);
	};

	/**
	 * Sets Puss-in-Boots to collide with nothing.
	 */
	CharacterPuss.prototype.removePussCollisions = function()
	{
/*		var b = this.box2DObject.body2D;
		b.SetType(1);

		// Cycling through obstacle fixtures
		var fixture = b.GetFixtureList();
		var filterData = new box2d.b2FilterData();

		filterData.categoryBits = 0x0008;
		filterData.maskBits = 0x0001;

		while (fixture)
		{
			fixture.SetFilterData(filterData);
			fixture = fixture.GetNext();
		}*/
	};

	/**
	 * Resets Puss-in-Boots' collision filtering
	 */
	CharacterPuss.prototype.resetPussCollisions = function()
	{
/*		var b = this.box2DObject.body2D;
		b.SetType(2);

		// Cycling through obstacle fixtures
		var fixture = b.GetFixtureList();
		var filterData = new box2d.b2FilterData();

		filterData.categoryBits = 0x0002;
		filterData.maskBits = 0x0001 | 0x0002;

		while (fixture)
		{
			fixture.SetFilterData(filterData);
			fixture = fixture.GetNext();
		}*/
	};

	// Mine shaft-handling ---------------------------------------------------------------------------------------------------
	//
	CharacterPuss.prototype.fallingOntoObstacle = function(vec2)
	{
		return (vec2.y > 5);
	};

	CharacterPuss.prototype.fallIntoMineShaft = function(mX)
	{
		this.dead = true;
		this.asset.state.setAnimationByName('spin', true);
		this.box2DObject.body2D.SetLinearVelocity(new box2d.b2Vec2(18, 16), this.center);

		// Make sure music isn't queued
		TweenMax.killDelayedCallsTo(this.startMusic);

		// Set flag
		this.mineShaftDeath = true;

		// Custom fall animation
		var y = this.asset.position.y - 40;
		var x = mX + 250;
		TweenMax.to(this.asset.position, 0.3, { ease: Ease.easeOut, y: y, x: x, onComplete: this.completeFall, onCompleteScope: this });

		// Stop running sound
		this.soundRun.stop();

		// Stop music
		this.soundMusic.stop();

		// Finally the sad guitar stinger
		createjs.Sound.play('fail');

		// Stop the thief counting distance and time from Puss
		Notifier.getInstance().trigger(tcat.GameNotifications.STOP_THIEF_UPDATE);
	};

	CharacterPuss.prototype.completeFall = function()
	{
		TweenMax.to (this.asset.position, 0.5, { ease: Ease.easeIn, y: 850 });
	};

	// Behaviors ------------------------------------------------------------------------------------------------------------
	//
	CharacterPuss.prototype.attack = function()
	{
		var airborne = false;

		// Check for airborne attack bonus!
		if (this.currentAnimation == 'jump' && this.box2DObject.body2D.GetLinearVelocity().y > 0)
		{
			airborne = true;
			Notifier.getInstance().trigger(tcat.GameNotifications.AIRBORNE_ATTACK_BONUS);
		}

		// Set attack animation and some speed boosts
		if (this.currentAnimation != 'attack')
		{
			this.currentAnimation = 'attack';
			this.box2DObject.body2D.SetLinearVelocity(this.attackVec2, this.center);
			this.box2DObject.body2D.SetAngularVelocity(0);
			this.asset.state.setAnimationByName('banditBootKick', false);

			TweenMax.killDelayedCallsTo(this.boost);
			TweenMax.killDelayedCallsTo(this.setRun);
			TweenMax.delayedCall(0.3, this.boost, this);
			TweenMax.delayedCall(0.5, this.setRun, this);
			this.stumbles = 0;

			if (!airborne) Notifier.getInstance().trigger(tcat.GameNotifications.STANDARD_ATTACK_SCORE);

			// Play attack sound
			this.soundKicks[Math.floor(this.soundKicks.length * Math.random())].play();

			// Shake camera
			TweenMax.delayedCall(0.565, _.bind(this.physicsContainer.shake, this.physicsContainer), [20, 6, 0.03, false, true]);
		}
	};

	CharacterPuss.prototype.boost = function()
	{
		this.box2DObject.body2D.ApplyImpulse(new box2d.b2Vec2(100, 0), this.center);
	};

	CharacterPuss.prototype.jump = function()
	{
		this.jumpThrust = CharacterPuss.JUMP_THRUST;
		this.onGround = false;
		this.setCanJump(false);
		this.jumping = true;
		this.box2DObject.body2D.ApplyImpulse(this.jumpVec2, this.center);

		// Set and queue animations
		this.asset.state.setAnimationByName('spinJumpStart', false);
		this.asset.state.addAnimationByName('spin', true);
		this.currentAnimation = 'jump';

		// Play jump sound
		this.soundJumps[Math.floor(this.soundJumps.length * Math.random())].play();

		// Mute run sound
		this.soundRun.setVolume(0);
	};

	CharacterPuss.prototype.kill = function()
	{
		this.dead = true;
		this.asset.state.setAnimationByName('die', false);

		TweenMax.killDelayedCallsTo(this.startMusic);

		// Stop running sound
		this.soundRun.stop();

		// Stop music
		this.soundMusic.stop();

		// Play spring sound
		createjs.Sound.play('spring');

		// Small pause then landing sound
		TweenMax.delayedCall(0.24, createjs.Sound.play, ['land01']);

		// Finally the sad guitar stinger
		TweenMax.delayedCall(0.3, createjs.Sound.play, ['fail']);

		Notifier.getInstance().trigger(tcat.GameNotifications.STOP_THIEF_UPDATE);

		Notifier.getInstance().trigger(tcat.GameNotifications.LEVEL_END);
	};

	CharacterPuss.prototype.land = function()
	{
		this.setCanJump(true);
		this.onGround = true;
		this.jumping = false;
		if (this.currentAnimation != 'banditBootKick') this.setRun();

		// Play land sound
		this.playLandSound();

		// Resume running sound
		this.soundRun.setVolume(0.8);
	};

	CharacterPuss.prototype.mineShaftKill = function()
	{
		Notifier.getInstance().trigger(tcat.GameNotifications.LEVEL_END);
	};

	CharacterPuss.prototype.setCanJump = function(value)
	{
		this.canJump = value;
	};

	CharacterPuss.prototype.setRun = function()
	{
		if (this.currentAnimation == 'jump')
		{
			this.asset.state.setAnimationByName('spinJumpEnd', false);
			this.asset.state.addAnimationByName('run', true);
			this.currentAnimation = 'run';
		}
		else if (this.currentAnimation == 'stumble')
		{
			this.currentAnimation = 'run';
		}
		else if (this.currentAnimation == null || this.currentAnimation == 'attack')
		{
			this.asset.state.addAnimationByName('run', true);
			this.currentAnimation = 'run';
		}

		this.box2DObject.body2D.SetLinearVelocity(new box2d.b2Vec2(this.runSpeed, 0), this.center);
	};

	CharacterPuss.prototype.stumble = function()
	{
		if (this.currentAnimation != 'stumble')
		{
			if (++this.stumbles > 4)
//			if (this.stumbles > 4)
			{
				this.currentAnimation = 'stumble';
				this.box2DObject.body2D.SetLinearVelocity(this.freezeVec2);
				this.box2DObject.body2D.SetAngularVelocity(0);
				this.kill();
				return true;
			}
			else
			{
				this.currentAnimation = 'stumble';
				this.asset.state.setAnimationByName('stumble', false);
				this.asset.state.addAnimationByName('run', true);
				this.onObstacle = true;
				this.jumping = false;

				// Play stumble sound
				this.soundStumble.play();

				// If not warned about stumbling, warn!
				if (this.stumbleWarned == false)
				{
					this.stumbleWarned = true;
					Notifier.getInstance().trigger(tcat.GameNotifications.STUMBLE_WARNING);
				}
				return false;
			}
		}
		this.onObstacle = true;
	};

	CharacterPuss.prototype.stumbleWarned = false;
	// Key-handling --------------------------------------------------------------------------------------------------------
	//
	CharacterPuss.prototype.handleUp = function()
	{
		if (this.dead) return;
		if (this.canJump && this.onGround)
		{
			this.jumpPressed = true;
			this.jump();
		}
	};

	CharacterPuss.prototype.handleUpRelease = function()
	{
		this.jumpPressed = false;
	};

	CharacterPuss.prototype.handleDown = function(){};
	CharacterPuss.prototype.handleDownRelease = function(){};

	// Miscellaneous sound methods -----------------------------------------------------------------------------------------
	//
	CharacterPuss.prototype.startMusic = function()
	{
		this.soundMusic.play({loop:-1});
	};

	CharacterPuss.prototype.playLandSound = function()
	{
		var inst = (Math.random() > 0.5) ? this.soundLands[0] : this.soundLands[1];
		inst.play();
	};

	// Update --------------------------------------------------------------------------------------------------------------
	//
	CharacterPuss.prototype.update = function(deltaTime)
	{
		// Setting z for depth-sorting
		if (this.asset != null) this.asset.z = this.z = 600;
		else this.z = 0;

		// Placing graphic according to physics object unless this is a mine shaft death sequence
		if (!this.mineShaftDeath)
		{
			if (this.box2DObject != null)
			{
				this.asset.position.x = this.position.x * 30;
				this.asset.position.y = (this.position.y + this.physicsOffsetY) * 30;
			}
		}

		// Apply impulse to slow down ascent
		if (this.position.y < 5) this.box2DObject.body2D.ApplyImpulse(this.downImpulseMild, this.center);

		/**
		 * If Puss isn't jumping, on the ground or on an obstacle,
		 * he's probably ramped upwards off an obstacle and should be pushed downwards.
		 */
		if (!this.jumping && !this.onGround && !this.onObstacle)
		{
			this.box2DObject.body2D.ApplyImpulse(this.downImpulseStrong, this.center);
		}

		// Continue to apply jump thrust while 'up' is pressed
		if (this.jumping && this.jumpPressed)
		{
			if (this.jumpThrust < 0)
			{
				this.jumpThrust += 1.5;
				this.jumpThrustVec2.y = this.jumpThrust;
				this.box2DObject.body2D.ApplyImpulse(this.jumpThrustVec2, this.center);
			}
		}

		// If falling
		if (this.jumping && !this.onGround && !this.onObstacle)
		{
			if (this.box2DObject.body2D.GetLinearVelocity().y > 0)
			{
				this.box2DObject.body2D.ApplyImpulse(this.downImpulseStrong, this.center);
			}
		}
	};

	return CharacterPuss;
});