/**
 * Created by rufian on 11/17/14.
 */
define([], function()
{
	var GameNotifications =
	{
		BUILD_SCENE: 'BuildScene',
		LEVEL_END: 'LevelEnd',
		LEVEL_PAUSE: 'LevelPause',
		LEVEL_QUIT: 'LevelQuit',
		LEVEL_RESET: 'LevelReset',
		LEVEL_START: 'LevelStart',

		AIRBORNE_ATTACK_BONUS: 'AirborneAttackBonus',
		FLOATING_COINS_SCORE: 'FloatingCoinsScore',
		NEW_SEQUENCE: 'NewSequence',
		OBSTACLES_CLEARED: 'ObstaclesCleared',
		SHOW_WARNING: 'ShowWarning',
		STANDARD_ATTACK_SCORE: 'StandardAttackScore',
		START_COUNTDOWN: 'StartCountdown',
		STOP_THIEF_UPDATE: 'StopThiefUpdate',
		STUMBLE_WARNING: 'StumbleWarning',
		THIEF_READY: 'ThiefReady',
		THIEF_IN_RANGE: 'ThiefInRange',
		THIEF_KILLED: 'ThiefKilled'
	};

	return GameNotifications;
});