define(['orion/Application',
		'game/controller/AirborneAttackBonus',
		'game/controller/BuildScene',
		'game/controller/FloatingCoinsScore',
		'game/controller/LevelEnd',
		'game/controller/LevelPause',
		'game/controller/LevelQuit',
		'game/controller/LevelReset',
		'game/controller/LevelStart',
		'game/controller/NewSequence',
		'game/controller/ObstaclesCleared',
		'game/controller/ShowWarning',
		'game/controller/StandardAttackScore',
		'game/controller/StartCountdown',
		'game/controller/StopThiefUpdate',
		'game/controller/StumbleWarning',
		'game/controller/ThiefInRange',
		'game/controller/ThiefKilled',
		'game/controller/ThiefReady'],
function(Application,
		 AirborneAttackBonus,
		 BuildScene,
		 FloatingCoinsScore,
		 LevelEnd,
		 LevelPause,
		 LevelQuit,
		 LevelReset,
		 LevelStart,
		 NewSequence,
		 ObstaclesCleared,
		 ShowWarning,
		 StandardAttackScore,
		 StartCountdown,
		 StopThiefUpdate,
		 StumbleWarning,
		 ThiefInRange,
		 ThiefKilled,
		 ThiefReady)
{
	var InitController = (function()
	{
		var tcat = window.tcat;

		Application.getInstance().addController(tcat.GameNotifications.AIRBORNE_ATTACK_BONUS, AirborneAttackBonus);
		Application.getInstance().addController(tcat.GameNotifications.BUILD_SCENE, BuildScene);
		Application.getInstance().addController(tcat.GameNotifications.FLOATING_COINS_SCORE, FloatingCoinsScore);
		Application.getInstance().addController(tcat.GameNotifications.LEVEL_END, LevelEnd);
		Application.getInstance().addController(tcat.GameNotifications.LEVEL_PAUSE, LevelPause);
		Application.getInstance().addController(tcat.GameNotifications.LEVEL_QUIT, LevelQuit);
		Application.getInstance().addController(tcat.GameNotifications.LEVEL_RESET, LevelReset);
		Application.getInstance().addController(tcat.GameNotifications.LEVEL_START, LevelStart);
		Application.getInstance().addController(tcat.GameNotifications.NEW_SEQUENCE, NewSequence);
		Application.getInstance().addController(tcat.GameNotifications.OBSTACLES_CLEARED, ObstaclesCleared);
		Application.getInstance().addController(tcat.GameNotifications.SHOW_WARNING, ShowWarning);
		Application.getInstance().addController(tcat.GameNotifications.STANDARD_ATTACK_SCORE, StandardAttackScore);
		Application.getInstance().addController(tcat.GameNotifications.START_COUNTDOWN, StartCountdown);
		Application.getInstance().addController(tcat.GameNotifications.STOP_THIEF_UPDATE, StopThiefUpdate);
		Application.getInstance().addController(tcat.GameNotifications.STUMBLE_WARNING, StumbleWarning);
		Application.getInstance().addController(tcat.GameNotifications.THIEF_IN_RANGE, ThiefInRange);
		Application.getInstance().addController(tcat.GameNotifications.THIEF_KILLED, ThiefKilled);
		Application.getInstance().addController(tcat.GameNotifications.THIEF_READY, ThiefReady);
	});

	return InitController;
});