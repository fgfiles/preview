/**
 * Created by rufian on 11/17/14.
 */
define(['PIXI',
		'game/logic/Logic',
		'game/model/PlayerModel',
		'game/hud/HUDScore',
		'game/hud/HUDMessage',
		'game/logic/Audio',
		'orion/effect/ColorOverlay',
		'orion/Game',
		'orion/GameObject',
		'orion/Application',
		'orion/Notifier',
		'orion/physics/PhysicsDebug',
		'orion/physics/PhysicsContainer',
		'orion/physics/Ground',
		'game/display/CharacterPuss',
		'game/display/CharacterThief',
		'orion/interaction/KeyHandler',
		'orion/effect/ParallaxLayer',
		'orion/physics/PhysicsContacts',
		'game/display/ObstacleCache',
		'game/hud/HUDRadar',
		'game/effect/Coins',
		'game/effect/FloatingCoinEmitter',
		'game/display/MarkerCactus',
		'game/display/MarkerMineShaft',
		'jquery',
		'underscore'],
function(PIXI,
		 Logic,
		 PlayerModel,
		 HUDScore,
		 HUDMessage,
		 Audio,
		 ColorOverlay,
		 Game,
		 GameObject,
		 Application,
		 Notifier,
		 PhysicsDebug,
		 PhysicsContainer,
		 Ground,
		 CharacterPuss,
		 CharacterThief,
		 KeyHandler,
		 ParallaxLayer,
		 PhysicsContacts,
		 ObstacleCache,
		 HUDRadar,
		 Coins,
		 FloatingCoinEmitter,
		 MarkerCactus,
		 MarkerMineShaft,
		 $,
		 _)
{
	var BuildScene = (function()
	{
		var game = Game.getInstance();
		var app = Application.getInstance();

		// Building physics scene and storing reference
//		var world = new box2d.b2World(new box2d.b2Vec2(0, 60), true);
		var world = new box2d.b2World(new box2d.b2Vec2(0, 65), true);
		game.physics = world;

		// Making main container and adding to stage
		var container = new PIXI.DisplayObjectContainer();
		game.stage.addChild(container);

		// Making physics container to track the character
		var physicsContainer = new PhysicsContainer('physicsContainer', {
																			type:PhysicsContainer.TYPE_FOLLOW,
																			x:0,
																			y: 0,
																			width: 1136,
																			height: 640,
																			scrollRateX: 22.7
																		});
		container.addChild(physicsContainer.asset);
		app.addView(physicsContainer.name, physicsContainer);
		physicsContainer.physicsWorld = world;

		// Making physics contact-listener
		var physicsContacts = new PhysicsContacts(world);
		app.addView(physicsContacts.NAME);

		// Ground object
		var ground = new Ground(world);
		ground.physicsContainer = physicsContainer;
//		physicsContainer.addChild(ground.asset);
//		physicsContainer.addChild(ground.debugB);

		// Adding debug ---------------------------------------------------------------------------
		//
/*		var debugDraw = new Box2D.Dynamics.b2DebugDraw;
		debugDraw.SetSprite(document.getElementById("viewDebug").getContext("2d"));
		debugDraw.SetDrawScale(30.0);
		debugDraw.SetFillAlpha(0.5);
		debugDraw.SetLineThickness(1.0);
		debugDraw.SetFlags(box2d.b2DebugDraw.e_shapeBit | box2d.b2DebugDraw.e_jointBit);

		// Setting debug references
		world.SetDebugDraw(debugDraw);
*/
		// Character ------------------------------------------------------------------------------
		//
		var puss = new CharacterPuss('Puss',
										{
											physicsWorld: world,
											anim: 'images/thief/puss/Puss.anim',
											animations: [
															'banditBootKick',
															'jump',
															'run',
															'spin',
															'spinJumpEnd',
															'spinJumpStart',
															'hurt',
															'die'
														],
											physicsContainer: physicsContainer,
											runSpeed: 45,
											scale: 0.4,
											sceneBounds: physicsContainer.bounds,
											startY: 400
										});
		physicsContainer.addChild(puss.asset);
		physicsContacts.registerCollisionEndListener(puss);
		physicsContacts.registerCollisionStartListener(puss);
		physicsContacts.player = puss;
		app.addView(CharacterPuss.NAME, puss);

		// Setting target for camera to follow
		physicsContainer.target = puss.asset;

		// Key listener
		var keyHandler = new KeyHandler();
		keyHandler.bindControls(KeyHandler.BIND_UD);
		keyHandler.addKeyboardListener(puss);
		app.addView(KeyHandler.NAME, keyHandler);

		var thief = new CharacterThief('Enemy',
									{
										physicsWorld: world,
										anim: 'images/thief/thief/Thief.anim',
										animations:	[
														'hurt',
														'jump',
														'jumpLanding',
														'run'
													],
										runSpeed: 40,
										scale: 0.65,
										sceneBounds: physicsContainer.bounds,
										startX: -1000,
										startY: 400
									});
		physicsContainer.addChild(thief.asset);
		physicsContacts.registerCollisionEndListener(thief);
		physicsContacts.registerCollisionStartListener(thief);

		// Hacking to add touch events
		physicsContainer.asset.stage.mousedown = physicsContainer.asset.stage.touchstart = _.bind(puss.handleUp, puss);
		physicsContainer.asset.stage.mouseup = physicsContainer.asset.stage.touchend = _.bind(puss.handleUpRelease, puss);

		// Scene elements -------------------------------------------------------------------------
		//
		var parallax;
		parallax = new ParallaxLayer('ParallaxA',
									{
										textureID: 'Sky_Plate2.png',
										width: 1136,
										height: 640,
										x: 0,
										y: -90,
										z: -1000,
										multiplier: 0.05,
										tile: true
									});
		physicsContainer.addParallaxChild(parallax);

		parallax = new ParallaxLayer('ParallaxB',
									{
										textureID: 'Hillside_BG.png',
										width: 1136,
										height: 224,
										x: 0,
										y: 185,
										z: -999,
										multiplier: 0.3,
										tile: true
									});
		physicsContainer.addParallaxChild(parallax);

		parallax = new ParallaxLayer('ParallaxC',
									{
										textureID: 'FloorPlane.png',
										width: 1136,
										height: 153,
										x: 0,
										y: 387,
										z: -950,
										multiplier: 0.7,
										tile: true
									});
		physicsContainer.addParallaxChild(parallax);

		parallax = new ParallaxLayer('ParallaxD',
									{
										textureID: 'FloorPlane.png',
										width: 1136,
										height: 153,
										x: 0,
										y: 488,
										z: -900,
										multiplier: 1,
										tile: true
									});
		physicsContainer.addParallaxChild(parallax);

		parallax = new ParallaxLayer('RocksA',
									{
										textureID: 'BG_Rock2.png',
										width: 177,
										height: 163,
										x: 600,
										y: 250,
										z: -998.5,
										multiplier: 0.6,
										sceneWidth: 1136,
										tile: false
									});
		physicsContainer.addParallaxChild(parallax);

		parallax = new ParallaxLayer('RocksB',
									{
										textureID: 'BG_Rock3.png',
										width: 177,
										height: 163,
										x: 300,
										y: 300,
										z: -998.1,
										multiplier: 0.45,
										sceneWidth: 1136,
										tile: false
									});
		physicsContainer.addParallaxChild(parallax);

		parallax = new ParallaxLayer('RocksC',
									{
										textureID: 'BG_Rock1.png',
										width: 177,
										height: 163,
										x: 300,
										y: 378,
										z: -995,
										multiplier: 0.38,
										sceneWidth: 1136,
										tile: false
									});
		physicsContainer.addParallaxChild(parallax);

		parallax = new ParallaxLayer('RocksD',
									{
										textureID: 'BG_Rock4.png',
										width: 177,
										height: 163,
										x: 360,
										y: 370,
										z: -990,
										multiplier: 0.35,
										sceneWidth: 1136,
										tile: false
									});
		physicsContainer.addParallaxChild(parallax);

		// Obstacles ------------------------------------------------------------------------------
		//
		var obstacleCache = new ObstacleCache(world);
//		var o = obstacleCache.getNext();
//		o.setScenePosition(30);
//		physicsContainer.addChild(o.asset);

		obstacleCache.setCamera(physicsContainer);
		obstacleCache.setContainer(physicsContainer);
		app.addView(obstacleCache.name, obstacleCache);

		// Coins ----------------------------------------------------------------------------------
		//
		var coins = new Coins(container);
		app.addView(Coins.NAME, coins);

		var floatingCoinEmitter = new FloatingCoinEmitter(physicsContainer);
		floatingCoinEmitter.character = puss;
		app.addView(FloatingCoinEmitter.NAME, floatingCoinEmitter);

		// Linking thief and floating coin emitter to release floating coins
		thief.coinEmitter = floatingCoinEmitter;
		floatingCoinEmitter.thief = thief;

		// Game logic -----------------------------------------------------------------------------
		//
		var logic = new Logic(Logic.NAME);
		logic.character = puss;
		logic.thief = thief;
		logic.container = physicsContainer.asset;
		logic.obstacleCache = obstacleCache;
		app.addView(logic.name, logic);

		// Markers --------------------------------------------------------------------------------
		//
		logic.markerCactus = new MarkerCactus(MarkerCactus.NAME);
		container.addChild(logic.markerCactus.asset);

		logic.markerMineShaft = new MarkerMineShaft(MarkerMineShaft.NAME);
		container.addChild(logic.markerMineShaft.asset);

		var hudScore = new HUDScore();
		var playerModel = Application.getInstance().getModel(PlayerModel.NAME);
		playerModel.hudScore = hudScore;
		floatingCoinEmitter.playerModel = playerModel;
		container.addChild(hudScore.asset);

		var hudMessage = new HUDMessage();
		hudMessage.physicsContainer = physicsContainer;
		playerModel.hudMessage = hudMessage;
		container.addChild(hudMessage.asset);

		// White out
		var whiteOut = new ColorOverlay(ColorOverlay.NAME, 1136, 640, 0xffffff);
		app.addView(ColorOverlay.NAME, whiteOut);
		container.addChild(whiteOut.asset);

		// Audio
		var audio = new Audio(Audio.NAME);
		app.addView(Audio.NAME, audio);
	});

	return BuildScene;
});