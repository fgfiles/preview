/**
 * Created by rufian on 11/17/14.
 */
define(['orion/Character',
		'orion/Notifier',
		'orion/physics/Box2DObject',
		'orion/Application',
		'game/display/CharacterPuss',
		'TweenMax',
		'underscore'],
function(Character,
		 Notifier,
		 Box2DObject,
		 Application,
		 CharacterPuss,
		 TweenMax,
		 _)
{
	// Constructor ---------------------------------------------------------------------------------------------------------
	//
	var CharacterThief = function(name, setUpObject)
	{
		Character.call(this, name, setUpObject);
	};

	CharacterThief.prototype = Object.create(Character.prototype);
	CharacterThief.prototype.constructor = CharacterThief;

	// Properties ----------------------------------------------------------------------------------------------------------
	//
	CharacterThief.prototype.coinCount = null;
	CharacterThief.prototype.coinsEmitted = null;
	CharacterThief.prototype.coinEmitter = null;
	CharacterThief.prototype.coinMinimum = null;
	CharacterThief.prototype.coinTarget = null;
	CharacterThief.prototype.countdownStarted = null;
	CharacterThief.prototype.emitTime = null;
	CharacterThief.prototype.lastEmit = null;
	CharacterThief.prototype.obstacles = null;
	CharacterThief.prototype.readyToShow = null;
	//
	// Persistent sounds
	CharacterThief.prototype.soundGrunt = null;
	CharacterThief.prototype.soundCoins = null;
	CharacterThief.prototype.soundLand = null;

	// Set-up --------------------------------------------------------------------------------------------------------------
	//
	CharacterThief.prototype.setUp = function(setUpObject)
	{
		_.bindAll(this, 'playLandSound', 'playCoinsSound');

		this.canJump = false;

		this.box2DObject = new Box2DObject(setUpObject.physicsWorld,
			{
				shape: 'circle',
				density: 3.5,
				friction: 0.5,
				radius: 50 / 30,
				restitution: 0,
				type: box2d.b2Body.b2_dynamicBody,
				filterCategory: 0x0002,
				filterMask: 0x0001 | 0x0002,
				userData: this.name,
				startX: setUpObject.startX / 30,
				startY: setUpObject.startY / 30
			});

		this.physicsOffsetX = 50 / 30;
		this.physicsOffsetY = 50 / 30;
		this.sceneBounds = setUpObject.sceneBounds;

		// Reference to the box2D coordinates
		this.position = this.box2DObject.body2D.GetPosition();

		// Reference to the center of the object
		this.center = this.box2DObject.center;
		this.angle = this.box2DObject.body2D.GetAngle();

		this.asset.scale.x = -this.asset.scale.x;
		this.asset.state.setAnimationByName('run', true);

		this.asset.stateData.setMix('run', 'run', 0.3);
		this.active = false;
		this.coinCount = 0;
		this.coinsEmitted = 0;
		this.coinMinimum = 0;

		this.setOffScreen();

		// Creating sound instances
		this.soundCoins = [];
		for (var i = 0; i < 3; i++)
		{
			this.soundCoins.push(createjs.Sound.createInstance('coinDropped0' + (i + 1)));
		}
		this.soundGrunt = createjs.Sound.createInstance('grunt');
		this.soundLand = createjs.Sound.createInstance('land01');
	};

	// Scene set-up --------------------------------------------------------------------------------------------------------
	//
	CharacterThief.prototype.clear = function()
	{
		this.setOffScreen();
		this.coinEmitter.clear();
	};

	CharacterThief.prototype.setCoinTarget = function(value, coinMinimum)
	{
		this.coinTarget = value;
		this.coinMinimum = coinMinimum;
	};

	CharacterThief.prototype.setOffScreen = function()
	{
		this.box2DObject.body2D.SetPosition(new box2d.b2Vec2(-1000, 0));
		this.currentAnimation = '';
		this.active = false;
	};

	CharacterThief.prototype.setOnScreen = function(value)
	{
		this.active = true;
		this.lastEmit = 0;
		this.coinCount = 0;
		this.coinsEmitted = 0;
		this.emitTime = 0;
		this.warningShown = false;
		this.countdownStarted = false;
		this.readyToShow = false;
	};

	CharacterThief.prototype.setPosition = function(value)
	{
		this.box2DObject.body2D.SetPosition(new box2d.b2Vec2(value, this.box2DObject.startY));

		this.active = true;
		this.dying = false;
		this.jumping = false;

		this.asset.state.addAnimationByName('run', true);
		this.currentAnimation = 'run';

		var filterData = this.box2DObject.fix2D.GetFilterData();
		filterData.categoryBits = 0x0002;
		this.box2DObject.fix2D.SetFilterData(filterData);
	};

	CharacterThief.prototype.recycle = function()
	{
		this.active = true;
		var newX = ((-(this.sceneBounds.right) + 3000)) / 30;
		this.box2DObject.body2D.SetPosition(new box2d.b2Vec2(newX, 500 / 30));
		this.currentAnimation = '';

		this.dying = false;
		this.jumping = false;

		this.asset.state.addAnimationByName('run', true);
		this.currentAnimation = 'run';

		var filterData = this.box2DObject.fix2D.GetFilterData();
		filterData.categoryBits = 0x0002;
		this.box2DObject.fix2D.SetFilterData(filterData);
	};

	// Collisions ----------------------------------------------------------------------------------------------------------
	//
	CharacterThief.prototype.onCollisionStart = function(contact)
	{
		if (contact.m_fixtureA.m_userData == 'Puss' || contact.m_fixtureB.m_userData == 'Puss')
		{
			this.kill();
			return;
		}

		this.land();
	};

	CharacterThief.prototype.onPostSolve = function(){};

	// Behavior ------------------------------------------------------------------------------------------------------------
	//
	CharacterThief.prototype.jump = function(){};

	CharacterThief.prototype.kill = function()
	{
		if (!this.dying)
		{
			var filterData = this.box2DObject.fix2D.GetFilterData();
			filterData.categoryBits = 0x0004;
			this.box2DObject.fix2D.SetFilterData(filterData);

			this.dying = true;
			this.currentAnimation = 'hurt';
			this.asset.state.addAnimationByName('hurt', false, 0.2);
			this.box2DObject.body2D.SetLinearVelocity(new box2d.b2Vec2(0, 0), this.center);
			this.box2DObject.body2D.SetAngularVelocity(0);

			Notifier.getInstance().trigger(tcat.GameNotifications.THIEF_KILLED, this.asset.position);

			// Play sound effects
			this.soundGrunt.play();

			// Slight pause before dropping coins
			TweenMax.delayedCall(0.3, this.playCoinsSound);

			// Slight pause before falling sound
			TweenMax.delayedCall(0.1, this.playLandSound);
		}
	};

	CharacterThief.prototype.land = function(){};

	CharacterThief.prototype.setCanJump = function(value)
	{
		this.canJump = value;
	};

	CharacterThief.prototype.incrementCoinCount = function()
	{
		++this.coinCount;
		if (this.coinCount / this.coinsEmitted > this.coinTarget && this.coinsEmitted > this.coinMinimum)
		{
			if (!this.readyToShow)
			{
				Notifier.getInstance().trigger(tcat.GameNotifications.THIEF_READY);
				this.readyToShow = true;
			}
		}
	};

	CharacterThief.prototype.setObstacles = function(value)
	{
		this.obstacles = value;
	};

	// Miscellaneous sound methods -----------------------------------------------------------------------------------------
	//
	CharacterThief.prototype.playCoinsSound = function()
	{
		var inst = this.soundCoins[Math.floor(this.soundCoins.length * Math.random())];
		inst.play();
	};

	CharacterThief.prototype.playLandSound = function()
	{
		this.soundLand.play();
	};

	// Update --------------------------------------------------------------------------------------------------------------
	//
	CharacterThief.prototype.update = function(deltaTime)
	{
		if (this.asset != null) this.asset.z = this.z = this.asset.y;
		else this.z = 0;

		if (this.box2DObject != null)
		{
			this.asset.position.x = this.position.x * 30;
			this.asset.position.y = (this.position.y + this.physicsOffsetY) * 30;
		}

		if (this.active)
		{
			// Checking to see if the thief is off-stage, once hit or evaded by Puss-in-Boots
			if (this.currentAnimation == 'hurt' || this.currentAnimation == 'run')
			{
				if (this.sceneBounds != null)
				{
					var diff = -this.sceneBounds.left - this.asset.position.x;
					if (diff > -(this.asset.width * 2))
					{
						if (this.currentAnimation == 'run')
						{
							this.levelFailOffScreen();
							return;
						}

						this.setOffScreen();

						Notifier.getInstance().trigger(tcat.GameNotifications.NEW_SEQUENCE);
					}
				}
			}

			// Warn that thief is getting away if the player takes too long
			if (!this.readyToShow)
			{
				this.emitTime += deltaTime;
				if (this.emitTime > 10000 && !this.warningShown)
				{
					this.warningShown = true;
					this.emitTime = 0;
					Notifier.getInstance().trigger(tcat.GameNotifications.SHOW_WARNING);
				}
				else if (this.emitTime > 10000 && this.warningShown && !this.countdownStarted)
				{
					this.countdownStarted = true;
					this.emitTime = 0;
					Notifier.getInstance().trigger(tcat.GameNotifications.START_COUNTDOWN);
				}
				else if (this.emitTime > 5000 && this.warningShown && this.countdownStarted)
				{
					this.levelFailOffScreen();
				}
			}

			// Block emitting if too close to a cactus
			if (this.obstacles.length > 0)
			{
				if (this.obstacles[0].isCactus == true)
				{
					this.diffX = this.obstacles[0].asset.position.x - this.coinEmitter.character.asset.position.x;
					if (this.diffX < 3000)
					{
						return;
					}
				}
			}

			if (!this.readyToShow)
			{
				// Updating count to start emitting coins
				this.diffX = this.coinEmitter.character.asset.position.x - this.lastEmit;

				if (this.diffX >= 500)
				{
					if (this.coinEmitter.emitBatch())
					{
						this.coinsEmitted += 8;
						this.lastEmit = this.coinEmitter.character.asset.position.x;
					}
				}
			}
			else
			{
				if (this.obstacles.length > 1)
				{
					// Updating count to start emitting coins
					this.diffX = this.coinEmitter.character.asset.position.x - this.lastEmit;

					if (this.diffX >= 500)
					{
						if (this.coinEmitter.emitBatch())
						{
							this.lastEmit = this.coinEmitter.character.asset.position.x;
						}
					}
				}
			}
		}
	};

	CharacterThief.prototype.levelFailOffScreen = function()
	{
		var puss = Application.getInstance().getView(CharacterPuss.NAME);
		puss.soundRun.stop();
		puss.soundMusic.stop();

		// Finally the sad guitar stinger
		TweenMax.delayedCall(0.3, createjs.Sound.play, ['fail']);

		Notifier.getInstance().trigger(tcat.GameNotifications.LEVEL_END);
	};

	return CharacterThief;
});