function config() { }
config.settings = {
	"SWIT_VERSION": "1.2.0",
	"MAX_DELTA_TIME": 50,
	"SAFE_AREA_WIDTH": 200,
	"APP_WIDTH": 1024,
	"APP_HEIGHT": 768,
	"APP_FPS": 40,
	"SOUND_PERCENT": 20,
	"ASSETS_PATH": "",
	"LOG": true,
	"USE_TILT": true,
	"USE_CHEATS": false,
	"CHECK_STRINGS": false,
	"SIZE_STRINGS_TYPE_1": "10,40",
	"SIZE_STRINGS_TYPE_2": "5,125",
	"SIZE_STRINGS_TYPE_3": "20,80",
	"SIZE_STRINGS_TYPE_4": "15,50",
	"SIZE_STRINGS_TYPE_5": "50,80",
	"RENDER_MODE": 2,
	"CONSOLE_MODE": 2,
	"WIDE_SCREEN": true,
	"RIGHT_TO_LEFT": false,
	"SHOW_SOCIAL_BUTTONS": false,
	"USE_ONLY_SOUNDJS": false,
	"keyAttack": 88,
	"keyJump": 90
};
config.browserSettings = [
	{
		"browserType": "MSIE",
		"platformType": "Win",
		"minVersion": 9
	},
	{
		"browserType": "Opera",
		"platformType": "",
		"minVersion": 12
	},
	{
		"browserType": "Chrome",
		"platformType": "",
		"minVersion": 25
	},
	{
		"browserType": "Firefox",
		"platformType": "",
		"minVersion": 20
	},
	{
		"browserType": "Safari",
		"platformType": "",
		"minVersion": 4
	}
];
config.player = {
	"gravity": 0.0022,
	"elasticity": 0.2,
	"friction": 0.013,
	"slopeFriction": -0.5,
	"maxVerletUpDisplace": 12,
	"maxVerletDownDisplace": 16,
	"maxVerletHorizontalDisplace": 30,
	"debugSpeed": 1.0,
	"walkSpeed": 0.35,
	"airSpeed": 0.8,
	"runFactor": 1.6,
	"maxSpeedFloor": 20,
	"maxSpeedAir": 10,
	"jumpInitSpeed": 1.1,
	"jumpRunInitSpeed": 1.1,
	"smallJumpTime": 120,
	"smallJumpSpeed": 0.7,
	"canRun": 0,
	"doubleJumpStart": 0,
	"doubleJumpEnd": 0,
	"doubleJumpSpeed": 1.0,
	"jumpDownTime": 0,
	"canClimb": 1,
	"climbSpeed": 0.33,
	"climbFactor": 0.5,
	"climbCornerSpeed": 0.4,
	"climbJumpUp": 1.1,
	"rushSpeed": 0.48,
	"jumpGravity": 0.0025,
	"jumpNormalVx": 1,
	"jumpNormalVy": 1,
	"jumpStompVx": 1,
	"jumpStompVy": 0.9,
	"jumpBounceWallVx": 0.6,
	"jumpBounceWallVy": 0.7,
	"jumpBounceWallReverseVx": 0.35,
	"jumpBounceWallReverseVy": 0.65,
	"jumpBounceWallBossVx": 0.30,
	"jumpBounceWallBossVy": 0.15,
	"jumpBounceHitVx": 0.35,
	"jumpBounceHitVy": 0.65,
	"jumpClimbBoostVx": 0.12,
	"jumpClimbBoostVy": 1.3,
	"jumpSwingVx": 1.1,
	"jumpSwingVy": 0.35,
	"damageOutWorld": 25,
	"ACCELERATION": 0.0055,
	"FACTOR_LAND_SPEED": 1,
	"SPEED_INIT": 0,
	"SPEED_INIT_JUMP_RESTORE": 0.05,
	"SPEED_INIT_JUMP_ANIMATION": 0.23,
	"SPEED_INIT_DOOR": 0.04
};
config.misc = {
	"playerHealth": 100,
	"spikeDamage": 10,
	"movingHazardDamage": 20,
	"geiserDamage": 20,
	"enemyDamage": 30,
	"enemyBulletSpeed": 0.3,
	"enemyBulletSpeedFactor": 1,
	"enemyShootMaxRange": 300,
	"healthRecover": 50,
	"smallHealthRecover": 25,
	"pivotAdrenaline": 1,
	"poleAdrenaline": 1,
	"swingPoleAdrenaline": 1,
	"springAdrenaline": 1,
	"enemyStompAdrenaline": 1,
	"adrenalineDuration": 7000,
	"adrenalineDepletingTime": 5000,
	"starsThreshold": [0.1,0.5,0.85],
	"itemRushValue": 3,
	"achievementTotalMalSpray": 1000,
	"achievementTotalUmaShell": 1000,
	"achievementTotalEnemies": 30
};
config.levelConfig = [
	{
		"level": "1",
		"adrenalineGoalTime": 14000
	},
	{
		"level": "2",
		"adrenalineGoalTime": 14000
	},
	{
		"level": "3",
		"adrenalineGoalTime": 16000
	},
	{
		"level": "4",
		"adrenalineGoalTime": 20000
	},
	{
		"level": "5",
		"adrenalineGoalTime": 25000
	},
	{
		"level": "6",
		"adrenalineGoalTime": 20000
	},
	{
		"level": "7",
		"adrenalineGoalTime": 30000
	},
	{
		"level": "8",
		"adrenalineGoalTime": 20000
	},
	{
		"level": "9",
		"adrenalineGoalTime": 20000
	}
];
config.bossLvl8 = {
	"health": 60,
	"speed": 0.2,
	"damage": 10,
	"chaseTime": 8000,
	"standTime": 4000,
	"waveHpThreshold": [0.7,0.5,0.3]
};
config.bossLvl8Waves = [
	{
		"wave": 0,
		"subwave": 1,
		"enemyId": 21,
		"position": 1,
		"yOffset": 0,
		"speed": 0.1,
		"time": 0
	},
	{
		"wave": 0,
		"subwave": 2,
		"enemyId": 21,
		"position": 0,
		"yOffset": 0,
		"speed": 0.1,
		"time": 0
	},
	{
		"wave": 0,
		"subwave": 3,
		"enemyId": 21,
		"position": 1,
		"yOffset": 0,
		"speed": 0.1,
		"time": 0
	},
	{
		"wave": 0,
		"subwave": 4,
		"enemyId": 21,
		"position": 0,
		"yOffset": 0,
		"speed": 0.1,
		"time": 0
	},
	{
		"wave": 0,
		"subwave": 5,
		"enemyId": 21,
		"position": 0,
		"yOffset": 0,
		"speed": 0.1,
		"time": 0
	},
	{
		"wave": 0,
		"subwave": 5,
		"enemyId": 21,
		"position": 1,
		"yOffset": 0,
		"speed": 0.1,
		"time": 0
	},
	{
		"wave": 1,
		"subwave": 0,
		"enemyId": 21,
		"position": 0,
		"yOffset": 0,
		"speed": 0.1,
		"time": 0
	},
	{
		"wave": 1,
		"subwave": 0,
		"enemyId": 21,
		"position": 1,
		"yOffset": 0,
		"speed": 0.1,
		"time": 0
	},
	{
		"wave": 1,
		"subwave": 1,
		"enemyId": 20,
		"position": 0,
		"yOffset": 0,
		"speed": 0.1,
		"time": 0
	},
	{
		"wave": 1,
		"subwave": 1,
		"enemyId": 20,
		"position": 1,
		"yOffset": 0,
		"speed": 0.1,
		"time": 0
	},
	{
		"wave": 1,
		"subwave": 2,
		"enemyId": 20,
		"position": 0,
		"yOffset": 0,
		"speed": 0.1,
		"time": 0
	},
	{
		"wave": 1,
		"subwave": 2,
		"enemyId": 20,
		"position": 1,
		"yOffset": 0,
		"speed": 0.1,
		"time": 0
	},
	{
		"wave": 1,
		"subwave": 2,
		"enemyId": 21,
		"position": 0,
		"yOffset": 0,
		"speed": 0.1,
		"time": 2500
	},
	{
		"wave": 1,
		"subwave": 2,
		"enemyId": 21,
		"position": 1,
		"yOffset": 0,
		"speed": 0.1,
		"time": 2500
	},
	{
		"wave": 2,
		"subwave": 0,
		"enemyId": 21,
		"position": 0,
		"yOffset": 0,
		"speed": 0.1,
		"time": 0
	},
	{
		"wave": 2,
		"subwave": 0,
		"enemyId": 21,
		"position": 1,
		"yOffset": 0,
		"speed": 0.1,
		"time": 0
	},
	{
		"wave": 2,
		"subwave": 1,
		"enemyId": 42,
		"position": 0,
		"yOffset": -30,
		"speed": 0.3,
		"time": 0
	},
	{
		"wave": 2,
		"subwave": 1,
		"enemyId": 42,
		"position": 0,
		"yOffset": -60,
		"speed": 0.3,
		"time": 2500
	},
	{
		"wave": 2,
		"subwave": 1,
		"enemyId": 42,
		"position": 0,
		"yOffset": -90,
		"speed": 0.3,
		"time": 5000
	},
	{
		"wave": 2,
		"subwave": 2,
		"enemyId": 42,
		"position": 1,
		"yOffset": -30,
		"speed": 0.3,
		"time": 0
	},
	{
		"wave": 2,
		"subwave": 2,
		"enemyId": 42,
		"position": 1,
		"yOffset": -60,
		"speed": 0.3,
		"time": 2500
	},
	{
		"wave": 2,
		"subwave": 2,
		"enemyId": 42,
		"position": 1,
		"yOffset": -90,
		"speed": 0.3,
		"time": 5000
	}
];
config.sounds = [
	{
		"id": "MUS_BG_MAINMENU",
		"file": "mus_title_open_ocean",
		"loops": 0,
		"vol": 0.2,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "MUS_BG_METAMAP",
		"file": "mus_bg_metamap",
		"loops": 0,
		"vol": 0.2,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "MUS_BG_GAME_AURADON",
		"file": "mus_auradon_prep",
		"loops": 0,
		"vol": 0.2,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "MUS_BG_GAME_ISLE_LOST",
		"file": "mus_isle_of_the_lost",
		"loops": 0,
		"vol": 0.2,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "MUS_BG_GAME_UMA_SHIP",
		"file": "mus_uma_ship",
		"loops": 0,
		"vol": 0.2,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "MUS_BG_GAME_LOVE_BOAT",
		"file": "mus_love_boat",
		"loops": 0,
		"vol": 0.2,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "MUS_BG_END_GAME",
		"file": "mus_endgame",
		"loops": 0,
		"vol": 0.2,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "MUS_BG_END_GAME_2",
		"file": "mus_endgame_best",
		"loops": 0,
		"vol": 0.2,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "MUS_BG_BONUS_AMBIENT",
		"file": "snd_bg_bonus",
		"loops": 0,
		"vol": 0.6,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "MUS_RUSH_MODE",
		"file": "mus_rush_time",
		"loops": 0,
		"vol": 0.4,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "MUS_BG_AMBIENT",
		"file": "snd_bg_woods",
		"loops": 0,
		"vol": 0.4,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_LOSE",
		"file": "mus_loose_sting",
		"loops": 1,
		"vol": 0.3,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_WIN",
		"file": "mus_win_sting",
		"loops": 1,
		"vol": 0.3,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_UI_CLICK",
		"file": "snd_click",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_UI_CLICK_BACK",
		"file": "snd_click_back",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_UI_CLICK_ENTER",
		"file": "snd_click_enter",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_UI_LEVEL_CLICK",
		"file": "snd_level_click",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_UI_LEVEL_UNLOCKED",
		"file": "snd_level_unblocked",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_UI_BUTTON_APPEAR",
		"file": "snd_ui_button_appear",
		"loops": 1,
		"vol": 0.5,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_UI_CHAR_APPEAR",
		"file": "snd_ui_character_appear",
		"loops": 1,
		"vol": 0.2,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_UI_SPRAY",
		"file": "snd_ui_spray_symbol",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_END_LEVEL_COUNTING",
		"file": "snd_ui_item_counting",
		"loops": 0,
		"vol": 0.6,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_END_LEVEL_STAR",
		"file": "snd_ui_star_obtained",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_SPRING",
		"file": "snd_spring",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_POLE",
		"file": "snd_scenary_pole",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_SWING_POLE",
		"file": "snd_swing_pole",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_HEALTH",
		"file": "snd_health_full",
		"loops": 1,
		"vol": 0.3,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_HEALTH_SMALL",
		"file": "snd_health_half",
		"loops": 1,
		"vol": 0.3,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_ITEM_MAL",
		"file": "snd_mal_collectible",
		"loops": 1,
		"vol": 0.3,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_ITEM_MAL_SPECIAL",
		"file": "snd_mal_hidden_collectible",
		"loops": 1,
		"vol": 0.3,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_INVISIBLE_PLATFORM",
		"file": "snd_invisible_platform",
		"loops": 1,
		"vol": 0.7,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_INVISIBLE_ITEM",
		"file": "snd_hidden_item_appear",
		"loops": 1,
		"vol": 0.3,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_MAL_ATTACK",
		"file": "snd_mal_range_attack",
		"loops": 1,
		"vol": 0.7,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_UMA_ATTACK",
		"file": "snd_uma_sword_attack",
		"loops": 1,
		"vol": 0.7,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_STOP",
		"file": "snd_player_stop",
		"loops": 1,
		"vol": 0.6,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_ADRENALINE_BAR",
		"file": "snd_adrenaline_full",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_BOUNCE_WALL",
		"file": "snd_player_bounce_wall",
		"loops": 1,
		"vol": 0.5,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_CLIMB",
		"file": "snd_player_climb",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_HIT",
		"file": "snd_player_hit",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_JUMP",
		"file": "snd_player_jump",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_LAND",
		"file": "snd_player_land",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_LATCH",
		"file": "snd_player_latch",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_SPIN",
		"file": "snd_player_spin",
		"loops": 1,
		"vol": 0.2,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_STEP",
		"file": "snd_player_step",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_STOMP",
		"file": "snd_player_stomp",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_CERAMIC_BREAK",
		"file": "snd_ceramics_break",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_DOOR_OPEN",
		"file": "snd_bonus_door_in",
		"loops": 1,
		"vol": 0.7,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_DOOR_CLOSE",
		"file": "snd_bonus_door_out",
		"loops": 1,
		"vol": 0.7,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_BARREL_PROJECTILE",
		"file": "snd_barrel_projectile",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_BARREL_EXP",
		"file": "snd_barrel_explosion",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_ELEVATOR_ON",
		"file": "snd_uma_elevator_on",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_ELEVATOR_UP",
		"file": "snd_uma_elevator_up",
		"loops": 0,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_SPIKE",
		"file": "snd_spikes",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_STOMP",
		"file": "snd_player_stomp",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_GEYSER",
		"file": "snd_barrel_vertical",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 3
	},
	{
		"id": "SND_CHECKPOINT",
		"file": "snd_checkpoint_dog",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_CHECKPOINT_RESPAWN",
		"file": "snd_checkpoint_respawn",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_NEW_THROPHY",
		"file": "snd_trophy",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_INTRO_BOSS_MAL",
		"file": "snd_boss_intro_mal",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_INTRO_BOSS_UMA",
		"file": "snd_boss_intro_uma",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_BOSS_DEFEAT_MAL",
		"file": "snd_boss_mal_defeat",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_BOSS_DEFEAT_UMA",
		"file": "snd_boss_uma_defeat",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_BOSS_SPAWN",
		"file": "snd_boss_enemy_spawn",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_BONUS_MAL_APPEAR",
		"file": "snd_bonus_mal_appear",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_BONUS_UMA_APPEAR",
		"file": "snd_bonus_uma_appear",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_BONUS_HIT",
		"file": "snd_bonus_player_hit",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_BONUS_MAL_PARRY",
		"file": "snd_bonus_mal_parry",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_BONUS_UMA_PARRY",
		"file": "snd_bonus_uma_parry",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_BONUS_MAL_SHOOT",
		"file": "snd_bonus_mal_shoot",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_BONUS_UMA_SHOOT",
		"file": "snd_bonus_uma_shoot",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_BONUS_MAL_JUMP",
		"file": "snd_bonus_mal_jump",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_BONUS_UMA_JUMP",
		"file": "snd_bonus_uma_jump",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_BONUS_BOSS_SHIELD_ON",
		"file": "snd_bonus_shield_on",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_BONUS_BOSS_SHIELD_OFF",
		"file": "snd_bonus_shield_off",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_CUTSCENE_BONUS_SHIELD",
		"file": "snd_cut_shield_break",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_CUTSCENE_BONUS_BRIDGE",
		"file": "snd_cut_bridge_appear",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_TRANSFORM",
		"file": "snd_transform_beam",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_LOW_HEALTH",
		"file": "snd_health_low",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "SND_LEVEL_COMPLETED",
		"file": "snd_level_completed",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1
	},
	{
		"id": "VO_ENEMY_HIT_1",
		"file": "vo_enemy_hit1",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 2
	},
	{
		"id": "VO_ENEMY_HIT_2",
		"file": "vo_enemy_hit2",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 2
	},
	{
		"id": "VO_ENEMY_HIT_3",
		"file": "vo_enemy_hit3",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 2
	},
	{
		"id": "VO_MAL_CLIMB",
		"file": "vo_mal_climb",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 2
	},
	{
		"id": "VO_MAL_HIT",
		"file": "vo_mal_hit",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 2
	},
	{
		"id": "VO_MAL_BOUNCE",
		"file": "vo_mal_jump_bounce",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 2
	},
	{
		"id": "VO_UMA_CLIMB",
		"file": "vo_uma_climb",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 2
	},
	{
		"id": "VO_UMA_HIT",
		"file": "vo_uma_hit",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 2
	},
	{
		"id": "VO_UMA_BOUNCE",
		"file": "vo_uma_jump_bounce",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 2
	}
];
config.bonus_boss_config = {
	"damageBullet1": 0,
	"damageBullet2": 15,
	"damageBullet3": 20,
	"bulletSpeedReturn": 1.3,
	"healthRecovery": 15,
	"damageBulletReturn": 17
};
config.bonus_boss_bullets = [
	{
		"bossLife": 99,
		"pattern": [3,2,0],
		"delayBullets": 2750,
		"speedBullet": 0.51,
		"bossUseShield": true,
		"bossShieldLife": 1
	},
	{
		"bossLife": 81,
		"pattern": [3,3,2,0,0],
		"delayBullets": 2400,
		"speedBullet": 0.53,
		"bossUseShield": true,
		"bossShieldLife": 3
	},
	{
		"bossLife": 61,
		"pattern": [3,3,3,2,0,0],
		"delayBullets": 2200,
		"speedBullet": 0.56,
		"bossUseShield": true,
		"bossShieldLife": 3
	},
	{
		"bossLife": 41,
		"pattern": [3,2,3,2,0,0],
		"delayBullets": 1900,
		"speedBullet": 0.58,
		"bossUseShield": true,
		"bossShieldLife": 4
	},
	{
		"bossLife": 21,
		"pattern": [3,3,2,2,0,0,0],
		"delayBullets": 1800,
		"speedBullet": 0.62,
		"bossUseShield": true,
		"bossShieldLife": 4
	},
	{
		"bossLife": 0,
		"pattern": [3,3,3,3,2,3,3,0,0,0],
		"delayBullets": 1700,
		"speedBullet": 0.65,
		"bossUseShield": true,
		"bossShieldLife": 4
	}
];
