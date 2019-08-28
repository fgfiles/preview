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
	"RENDER_MODE": 0,
	"CONSOLE_MODE": 2,
	"WIDE_SCREEN": true,
	"RIGHT_TO_LEFT": false,
	"SHOW_SOCIAL_BUTTONS": false,
	"USE_ONLY_SOUNDJS": false,
	"keyJump": 90,
	"keyJump2": 38,
	"keyRight": 39,
	"keyLeft": 37,
	"keyBomb": 88,
	"keyAttack": 32,
	"SPTimeAfterGrabAll": "10000",
	"minQuantityToShowHintsPlanet1": 3,
	"minQuantityToShowHintsPlanet2": 3,
	"minQuantityToShowHintsPlanet3": 3,
	"timeIntervalToShowHintsPlanet1": 10000,
	"timeIntervalToShowHintsPlanet2": 10000,
	"timeIntervalToShowHintsPlanet3": 10000,
	"antennaLife": 400,
	"imperialMachineLife": 40,
	"specialPlayerDamage": 40,
	"timeRunningOut": 30000,
	"HIDE_VIDEO_BUTTON": false,
	"HIDE_ARCADE_BUTTON": false,
	"HIDE_LEADERBOARD_BUTTON": false,
	"Sponsorship_Image_Path": "media/images/sponsorship/",
	"Sponsorship_Image1": "mysponsor.png",
	"Sponsorship_Image2": "mysponsor2.png",
	"overrideSpawnTokens": false,
	"chopper_scale_override": 75,
	"timeToShowSpecialAttackToolTip": 30000,
	"timeToShowAttackToolTip": 60000,
	"fallingFriction": 0.008,
	"timeToShowMissionReminder": 45000,
	"arcadeURL": "https://play.forestrygames.com/",
	"localStorageUserName": "com.goodboydigital.userName",
	"movieURL": "media/video/movie.mp4"
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
config.sounds = [
	{
		"id": "SND_BG_MAINMENU",
		"file": "mus_main_menu",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 2
	},
	{
		"id": "SND_BG_GAME",
		"file": "mus_gameplay",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 2
	},
	{
		"id": "SND_BG_BOSS",
		"file": "mus_boss",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 2
	},
	{
		"id": "SND_BG_LIBERATION",
		"file": "mus_liberation",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 2
	},
	{
		"id": "SND_BG_SABOTAGE",
		"file": "mus_sabotage",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 2
	},
	{
		"id": "SND_BG_LIBERATION_WAVE",
		"file": "mus_liberation_waves",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 2
	},
	{
		"id": "SND_BG_SCORECARD",
		"file": "mus_scorecard",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 2
	},
	{
		"id": "SND_BG_ENDGAME",
		"file": "mus_end_game",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 2
	},
	{
		"id": "SND_BG_TUTORIAL",
		"file": "mus_tutorial",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 2
	},
	{
		"id": "SND_BG_VS_WINNER",
		"file": "mus_versus_winner",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 2
	},
	{
		"id": "SND_UI_CLICK",
		"file": "snd_click",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_UI_PLAY_CLICK",
		"file": "snd_play_button",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_UI_POPUP_GENERAL",
		"file": "snd_ui_menu_display",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_UI_POPUP_EXTRACTION",
		"file": "snd_go_to_extraction",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_UI_POPUP_MISSIONTYPE",
		"file": "snd_mission_type",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_TITLE",
		"file": "mus_title",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 2
	},
	{
		"id": "SND_BG_WIN",
		"file": "mus_ui_win",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_BG_LOSE",
		"file": "mus_ui_loose",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_SELECT_CHAR",
		"file": "snd_click_character",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_PLANET_SWIPE",
		"file": "snd_planet_swipe",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_SELECT_MISSION",
		"file": "snd_mission_select",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_PLAYER_ONLOSE",
		"file": "snd_ply_defeat",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PLAYER_ONHIT",
		"file": "snd_ply_hit",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_PLAYER_PUNCH_SABER",
		"file": "snd_ezra_basic_attack",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_PLAYER_FORCE_ATTACK",
		"file": "snd_ply_force_attack",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_PLAYER_JUMP_SPECIAL_M",
		"file": "snd_ezra_double_jump_attack",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_PLAYER_JUMP_SPECIAL_R",
		"file": "snd_ply_jetpack",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_PLAYER_LAND",
		"file": "snd_ply_jump",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PLAYER_SABINE_BLASTER",
		"file": "snd_sabine_basic_attack",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_PLAYER_HERA_BLASTER",
		"file": "snd_hera_basic_attack",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_PLAYER_HERA_SHOTGUN",
		"file": "snd_hera_basic_attack2",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_PLAYER_ZEB_BLASTER",
		"file": "snd_zeb_basic_attack",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_PLAYER_CHOPPER_ATTACK",
		"file": "snd_chopper_basic_attack",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_PLAYER_CHOPPER_JUMP",
		"file": "snd_chopper_jump",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_PLAYER_CHOPPER_SPECIAL_JUMP",
		"file": "snd_ply_jetpack",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_PLAYER_CHOPPER_HIT",
		"file": "snd_chooper_hit",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_PLAYER_CHOPPER_DEFEAT",
		"file": "snd_chopper_defeat",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PLAYER_EZRA_SPECIAL",
		"file": "snd_ezra_special_attack",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PLAYER_SABINE_SPECIAL",
		"file": "snd_sabine_special_attack",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PLAYER_KANAN_SPECIAL",
		"file": "snd_kanan_special_attack",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PLAYER_HERA_SPECIAL",
		"file": "snd_hera_special_lasers",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PLAYER_HERA_BWING",
		"file": "snd_hera_special_bwing",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PLAYER_ZEB_SPECIAL",
		"file": "snd_zeb_special_attack",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PLAYER_CHOPPER_SPECIAL",
		"file": "snd_chopper_special_attack",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_BASEENEMY_ONHIT",
		"file": "snd_en_storm_hit",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 10
	},
	{
		"id": "SND_BASEENEMY_ONDIE",
		"file": "snd_en_storm_defeat",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 10
	},
	{
		"id": "SND_BASEENEMY_ATTACK",
		"file": "snd_en_storm_attack",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 15
	},
	{
		"id": "SND_MANDALORIAN_ATTACK",
		"file": "snd_en_mandal_attack",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_MANDALORIAN_ONHIT",
		"file": "snd_en_mandal_hit",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_MANDALORIAN_ONDIE",
		"file": "snd_en_mandal_defeat",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_TURRET_ATTACK",
		"file": "snd_en_torret_attack",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 20
	},
	{
		"id": "SND_TURRET_HIT",
		"file": "snd_en_torret_hit",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_TURRET_DIE",
		"file": "snd_en_torret_defeat",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_ITEM_HEALTH",
		"file": "snd_obj_health",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_ITEM_COLLECT",
		"file": "snd_obj_collect",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_ITEM_POWERUP",
		"file": "snd_obj_powerup",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_MANDALORIAN_APPEAR",
		"file": "snd_en_mandal_jetpack_intro",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_MANDALORIAN_LOOP",
		"file": "snd_en_mandal_jetpack_loop",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_IMPERIALMACHINE_ONHIT",
		"file": "snd_hit_machine",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_IMPERIALMACHINE_ONBREAK",
		"file": "snd_destroy_machine",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_BREAKABLE_ONHIT",
		"file": "snd_crate_hit",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_BREAKABLE_ONBREAK",
		"file": "snd_crate_destroy",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_BOSS_ATDP_APPEAR",
		"file": "snd_boss_atdp_appear",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_BOSS_ATDP_BLASTER",
		"file": "snd_boss_atdp_attack1",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 20
	},
	{
		"id": "SND_BOSS_ATDP_MISSILE",
		"file": "snd_boss_atdp_attack2",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_BOSS_ATDP_GRENADE_THROW",
		"file": "snd_boss_atdp_attack3",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 20
	},
	{
		"id": "SND_BOSS_ATDP_GRENADE_EXPLOSION",
		"file": "snd_atdp_granade_explosion",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 20
	},
	{
		"id": "SND_BOSS_ATDP_DEFEAT",
		"file": "snd_boss_atdp_defeat",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_BOSS_ATDP_HIT",
		"file": "snd_boss_atdp_hit",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_BOSS_ATDP_STEP",
		"file": "snd_boss_atdp_step",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 10
	},
	{
		"id": "SND_BOSS_ATDP_JUMP",
		"file": "snd_boss_atdp_jump",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_PLAYER_H_Z_K_E_EXTR",
		"file": "snd_ply_rescue",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PLAYER_C_EXTR",
		"file": "snd_chopper_jump",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PLAYER_INTRO",
		"file": "snd_ghost_in_out",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PLAYER_E_WIN",
		"file": "snd_ezra_win",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PLAYER_S_WIN",
		"file": "snd_sabine_win",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PLAYER_K_WIN",
		"file": "snd_kanan_win",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PLAYER_Z_WIN",
		"file": "snd_zeb_win",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PLAYER_C_WIN",
		"file": "snd_chopper_win",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PUP_SHIELD_ON",
		"file": "snd_shield",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PUP_SHIELD_WARNING",
		"file": "snd_shield_warning",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PUP_SHIELD_OFF",
		"file": "snd_shield_desactivate",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PLAYER_ZEB_SPECIAL_JUMP",
		"file": "snd_zeb_double_jump_attack",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_UI_TIMER_ALERT",
		"file": "snd_timer_running_out",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_UI_STARS",
		"file": "snd_scorecard_star",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_BOSS_ATAT_MOVE2",
		"file": "snd_atat_movement2",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_BOSS_ATAT_MOVE3",
		"file": "snd_atat_movement3",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_BOSS_ATAT_DEFEAT",
		"file": "snd_boss_atat_defeat",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_ENEMY_EXPLOSION",
		"file": "snd_cannons_explosion",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 10
	},
	{
		"id": "SND_CONQUER_DOOR_EXPLOSION",
		"file": "snd_doors_explosion",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_BOSS_DEFEAT_EXPLOSION",
		"file": "snd_boss_explosion",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 10
	},
	{
		"id": "SND_BOSS_OBSTACLE_DESTROY",
		"file": "snd_obstacle_destroy",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 10
	},
	{
		"id": "SND_BOSS_ATAT_APPEAR",
		"file": "snd_atat_movement2",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_BOSS_TIE_APPEAR",
		"file": "snd_boss_tie_appear",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_BOSS_TIE_ATK_BURST",
		"file": "snd_boss_tie_attack",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 20
	},
	{
		"id": "SND_BOSS_TIE_ATK_MISSILE",
		"file": "snd_boss_tie_attack2",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_BOSS_TIE_MOVE1",
		"file": "snd_boss_tie_move1",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_BOSS_TIE_MOVE2",
		"file": "snd_boss_tie_move2",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_BOSS_TIE_MOVE3",
		"file": "snd_boss_tie_move3",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_BOSS_TIE_HIT",
		"file": "snd_boss_tie_hit",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 10
	},
	{
		"id": "SND_BOSS_TIE_DEFEAT",
		"file": "snd_boss_tie_defeat",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_CONQUER_ALARM",
		"file": "snd_liberation_alarm",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_SABER_ON",
		"file": "snd_lightsaber_on",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_TIMER_COUNTDOWN",
		"file": "snd_timer_click",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_BG_COOP_40",
		"file": "mus_coop_good",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_SPECIAL_READY",
		"file": "snd_powerup_ready",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_MINE_ARMED",
		"file": "snd_mine_activated",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 10
	},
	{
		"id": "SND_MINE_EXPLOSION",
		"file": "snd_mine_explosion",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_CONQUER_DESTROY",
		"file": "snd_spray",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_SPRING_ON",
		"file": "snd_jump_pad",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 3
	},
	{
		"id": "SND_PUP_STRIKEWAVE",
		"file": "snd_jedi_strike_wave",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 10
	},
	{
		"id": "SND_LASER_SHOCK",
		"file": "snd_ply_hit_laser",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_ANTENNA_FORCEFIELD",
		"file": "snd_antenna_forcefield_hit",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 5
	},
	{
		"id": "SND_CHOPPER_ROLL",
		"file": "snd_chopper_roll_loop",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	},
	{
		"id": "SND_PICK_COIN",
		"file": "snd_pick_token",
		"loops": 1,
		"vol": 1,
		"ios": 1,
		"instances": 1
	}
];
config.unitSounds = [
	{
		"unitName": "Stormtrooper",
		"state": "st102",
		"soundId": "SND_BASEENEMY_ATTACK"
	},
	{
		"unitName": "Stormtrooper",
		"state": "st301",
		"soundId": "SND_BASEENEMY_ONHIT"
	},
	{
		"unitName": "Stormtrooper",
		"state": "st302",
		"soundId": "SND_BASEENEMY_ONDIE"
	},
	{
		"unitName": "Shocktrooper",
		"state": "st102",
		"soundId": "SND_BASEENEMY_ATTACK"
	},
	{
		"unitName": "Shocktrooper",
		"state": "st301",
		"soundId": "SND_BASEENEMY_ONHIT"
	},
	{
		"unitName": "Shocktrooper",
		"state": "st302",
		"soundId": "SND_BASEENEMY_ONDIE"
	},
	{
		"unitName": "Mandalorian",
		"state": "st102",
		"soundId": "SND_MANDALORIAN_ATTACK"
	},
	{
		"unitName": "Mandalorian",
		"state": "st301",
		"soundId": "SND_MANDALORIAN_ONHIT"
	},
	{
		"unitName": "Mandalorian",
		"state": "st302",
		"soundId": "SND_MANDALORIAN_ONDIE"
	},
	{
		"unitName": "Mandalorian",
		"state": "st107",
		"soundId": "SND_MANDALORIAN_APPEAR"
	},
	{
		"unitName": "Mandalorian",
		"state": "jump",
		"soundId": "SND_MANDALORIAN_APPEAR"
	},
	{
		"unitName": "Darktrooper",
		"state": "st107",
		"soundId": "SND_MANDALORIAN_APPEAR"
	},
	{
		"unitName": "Darktrooper",
		"state": "st_203",
		"soundId": "SND_TURRET_ATTACK"
	},
	{
		"unitName": "Darktrooper",
		"state": "st_204",
		"soundId": "SND_BOSS_ATDP_MISSILE"
	},
	{
		"unitName": "Darktrooper",
		"state": "st302",
		"soundId": "SND_ENEMY_EXPLOSION"
	},
	{
		"unitName": "Darktrooper",
		"state": "st_202",
		"soundId": "SND_MANDALORIAN_APPEAR"
	},
	{
		"unitName": "Darktrooper",
		"state": "st301",
		"soundId": "SND_BASEENEMY_ONHIT"
	},
	{
		"unitName": "Darktrooper",
		"state": "st_205",
		"soundId": "SND_BOSS_ATDP_APPEAR"
	},
	{
		"unitName": "EwebRepeaterBlaster",
		"state": "st102",
		"soundId": "SND_TURRET_ATTACK"
	},
	{
		"unitName": "EwebRepeaterBlaster",
		"state": "st301",
		"soundId": "SND_TURRET_HIT"
	},
	{
		"unitName": "EwebRepeaterBlaster",
		"state": "st302",
		"soundId": "SND_BASEENEMY_ONDIE"
	},
	{
		"unitName": "Ezra",
		"state": "st200",
		"soundId": "SND_PLAYER_PUNCH_SABER"
	},
	{
		"unitName": "Ezra",
		"state": "st110",
		"soundId": "SND_PLAYER_JUMP_SPECIAL_M"
	},
	{
		"unitName": "Ezra",
		"state": "st109",
		"soundId": "SND_PLAYER_LAND"
	},
	{
		"unitName": "Ezra",
		"state": "st106",
		"soundId": "SND_PLAYER_ONHIT"
	},
	{
		"unitName": "Ezra",
		"state": "st107",
		"soundId": "SND_PLAYER_ONLOSE"
	},
	{
		"unitName": "Ezra",
		"state": "special",
		"soundId": "SND_PLAYER_EZRA_SPECIAL"
	},
	{
		"unitName": "Ezra",
		"state": "forceAttack",
		"soundId": "SND_PLAYER_FORCE_ATTACK"
	},
	{
		"unitName": "Ezra",
		"state": "st108",
		"soundId": "SND_PLAYER_E_WIN"
	},
	{
		"unitName": "Ezra",
		"state": "extraction",
		"soundId": "SND_PLAYER_H_Z_K_E_EXTR"
	},
	{
		"unitName": "Sabine",
		"state": "st109",
		"soundId": "SND_PLAYER_LAND"
	},
	{
		"unitName": "Sabine",
		"state": "st201",
		"soundId": "SND_PLAYER_SABINE_BLASTER"
	},
	{
		"unitName": "Sabine",
		"state": "st110",
		"soundId": "SND_PLAYER_JUMP_SPECIAL_R"
	},
	{
		"unitName": "Sabine",
		"state": "st106",
		"soundId": "SND_PLAYER_ONHIT"
	},
	{
		"unitName": "Sabine",
		"state": "st107",
		"soundId": "SND_PLAYER_ONLOSE"
	},
	{
		"unitName": "Sabine",
		"state": "special",
		"soundId": "SND_PLAYER_SABINE_SPECIAL"
	},
	{
		"unitName": "Sabine",
		"state": "st108",
		"soundId": "SND_PLAYER_S_WIN"
	},
	{
		"unitName": "Sabine",
		"state": "extraction",
		"soundId": "SND_PLAYER_JUMP_SPECIAL_R"
	},
	{
		"unitName": "Sabine",
		"state": "rescue",
		"soundId": "SND_PLAYER_JUMP_SPECIAL_R"
	},
	{
		"unitName": "Kanan",
		"state": "st200",
		"soundId": "SND_PLAYER_PUNCH_SABER"
	},
	{
		"unitName": "Kanan",
		"state": "st110",
		"soundId": "SND_PLAYER_JUMP_SPECIAL_M"
	},
	{
		"unitName": "Kanan",
		"state": "st109",
		"soundId": "SND_PLAYER_LAND"
	},
	{
		"unitName": "Kanan",
		"state": "st106",
		"soundId": "SND_PLAYER_ONHIT"
	},
	{
		"unitName": "Kanan",
		"state": "st107",
		"soundId": "SND_PLAYER_ONLOSE"
	},
	{
		"unitName": "Kanan",
		"state": "special",
		"soundId": "SND_PLAYER_KANAN_SPECIAL"
	},
	{
		"unitName": "Kanan",
		"state": "forceAttack",
		"soundId": "SND_PLAYER_FORCE_ATTACK"
	},
	{
		"unitName": "Kanan",
		"state": "st108",
		"soundId": "SND_PLAYER_K_WIN"
	},
	{
		"unitName": "Kanan",
		"state": "extraction",
		"soundId": "SND_PLAYER_H_Z_K_E_EXTR"
	},
	{
		"unitName": "Chopper",
		"state": "st109",
		"soundId": "SND_PLAYER_LAND"
	},
	{
		"unitName": "Chopper",
		"state": "st201",
		"soundId": "SND_PLAYER_CHOPPER_ATTACK"
	},
	{
		"unitName": "Chopper",
		"state": "st110",
		"soundId": "SND_PLAYER_CHOPPER_SPECIAL_JUMP"
	},
	{
		"unitName": "Chopper",
		"state": "st104",
		"soundId": "SND_PLAYER_CHOPPER_JUMP"
	},
	{
		"unitName": "Chopper",
		"state": "st106",
		"soundId": "SND_PLAYER_CHOPPER_HIT"
	},
	{
		"unitName": "Chopper",
		"state": "st107",
		"soundId": "SND_PLAYER_CHOPPER_DEFEAT"
	},
	{
		"unitName": "Chopper",
		"state": "special",
		"soundId": "SND_PLAYER_CHOPPER_SPECIAL"
	},
	{
		"unitName": "Chopper",
		"state": "st108",
		"soundId": "SND_PLAYER_C_WIN"
	},
	{
		"unitName": "Hera",
		"state": "st109",
		"soundId": "SND_PLAYER_LAND"
	},
	{
		"unitName": "Hera",
		"state": "st201",
		"soundId": "SND_PLAYER_HERA_BLASTER"
	},
	{
		"unitName": "Hera",
		"state": "st110",
		"soundId": "SND_PLAYER_JUMP_SPECIAL_R"
	},
	{
		"unitName": "Hera",
		"state": "st106",
		"soundId": "SND_PLAYER_ONHIT"
	},
	{
		"unitName": "Hera",
		"state": "st107",
		"soundId": "SND_PLAYER_ONLOSE"
	},
	{
		"unitName": "Hera",
		"state": "special",
		"soundId": "SND_PLAYER_HERA_SPECIAL"
	},
	{
		"unitName": "Hera",
		"state": "specialWing",
		"soundId": "SND_PLAYER_HERA_BWING"
	},
	{
		"unitName": "Hera",
		"state": "ghostAppear",
		"soundId": "SND_PLAYER_GHOST"
	},
	{
		"unitName": "Hera",
		"state": "extraction",
		"soundId": "SND_PLAYER_H_Z_K_E_EXTR"
	},
	{
		"unitName": "Zeb",
		"state": "st109",
		"soundId": "SND_PLAYER_LAND"
	},
	{
		"unitName": "Zeb",
		"state": "st201",
		"soundId": "SND_PLAYER_ZEB_BLASTER"
	},
	{
		"unitName": "Zeb",
		"state": "st110",
		"soundId": "SND_PLAYER_ZEB_SPECIAL_JUMP"
	},
	{
		"unitName": "Zeb",
		"state": "st106",
		"soundId": "SND_PLAYER_ONHIT"
	},
	{
		"unitName": "Zeb",
		"state": "st107",
		"soundId": "SND_PLAYER_ONLOSE"
	},
	{
		"unitName": "Zeb",
		"state": "special",
		"soundId": "SND_PLAYER_ZEB_SPECIAL"
	},
	{
		"unitName": "Zeb",
		"state": "extraction",
		"soundId": "SND_PLAYER_H_Z_K_E_EXTR"
	},
	{
		"unitName": "Zeb",
		"state": "st108",
		"soundId": "SND_PLAYER_Z_WIN"
	},
	{
		"unitName": "Turret",
		"state": "st105",
		"soundId": "SND_TURRET_HIT"
	},
	{
		"unitName": "Turret",
		"state": "st102",
		"soundId": "SND_TURRET_ATTACK"
	},
	{
		"unitName": "Turret",
		"state": "st_202",
		"soundId": "SND_TURRET_DIE"
	},
	{
		"unitName": "ATDP",
		"state": "st11",
		"soundId": "SND_BOSS_ATDP_APPEAR"
	},
	{
		"unitName": "ATDP",
		"state": "st6",
		"soundId": "SND_BOSS_ATDP_BLASTER"
	},
	{
		"unitName": "ATDP",
		"state": "st4",
		"soundId": "SND_BOSS_ATDP_MISSILE"
	},
	{
		"unitName": "ATDP",
		"state": "st8",
		"soundId": "SND_BOSS_ATDP_HIT"
	},
	{
		"unitName": "ATDP",
		"state": "st9",
		"soundId": "SND_BOSS_ATDP_DEFEAT"
	},
	{
		"unitName": "ATDP",
		"state": "st2",
		"soundId": "SND_BOSS_ATDP_STEP"
	},
	{
		"unitName": "ATDP",
		"state": "st3",
		"soundId": "SND_BOSS_ATDP_STEP"
	},
	{
		"unitName": "ATDP",
		"state": "st13",
		"soundId": "SND_BOSS_ATDP_JUMP"
	},
	{
		"unitName": "ATDP",
		"state": "st14",
		"soundId": "SND_BOSS_ATDP_GRENADE_THROW"
	},
	{
		"unitName": "ATDP",
		"state": "grenadeExplotion",
		"soundId": "SND_BOSS_ATDP_GRENADE_EXPLOSION"
	},
	{
		"unitName": "ATAT",
		"state": "walk",
		"soundId": "SND_BOSS_ATDP_STEP"
	},
	{
		"unitName": "ATAT",
		"state": "st11",
		"soundId": "SND_BOSS_ATDP_DEFEAT"
	},
	{
		"unitName": "ATAT",
		"state": "st10",
		"soundId": "SND_BOSS_ATDP_HIT"
	},
	{
		"unitName": "ATAT",
		"state": "st6",
		"soundId": "SND_BOSS_ATDP_MISSILE"
	},
	{
		"unitName": "ATAT",
		"state": "st8",
		"soundId": "SND_BOSS_ATDP_BLASTER"
	},
	{
		"unitName": "ATAT",
		"state": "st13",
		"soundId": "SND_BOSS_ATAT_APPEAR"
	},
	{
		"unitName": "TIE",
		"state": "st1",
		"soundId": "SND_BOSS_TIE_APPEAR"
	},
	{
		"unitName": "TIE",
		"state": "st6",
		"soundId": "SND_BOSS_TIE_ATK_BURST"
	},
	{
		"unitName": "TIE",
		"state": "st8",
		"soundId": "SND_BOSS_TIE_ATK_MISSILE"
	},
	{
		"unitName": "TIE",
		"state": "st31",
		"soundId": "SND_BOSS_TIE_MOVE1"
	},
	{
		"unitName": "TIE",
		"state": "st32",
		"soundId": "SND_BOSS_TIE_MOVE2"
	},
	{
		"unitName": "TIE",
		"state": "st33",
		"soundId": "SND_BOSS_TIE_MOVE3"
	},
	{
		"unitName": "TIE",
		"state": "st4",
		"soundId": "SND_BOSS_TIE_HIT"
	},
	{
		"unitName": "TIE",
		"state": "st9",
		"soundId": "SND_BOSS_TIE_DEFEAT"
	},
	{
		"unitName": "Landmine",
		"state": "st_102",
		"soundId": "SND_MINE_ARMED"
	},
	{
		"unitName": "Landmine",
		"state": "st_103",
		"soundId": "SND_MINE_EXPLOSION"
	}
];
config.weapons = [
	{
		"name": "basic",
		"clipBullet": "mcBulletPlayer",
		"damage": 15,
		"range": 900,
		"speed": 1.5
	},
	{
		"name": "multi",
		"clipBullet": "mcBulletPlayer",
		"damage": 15,
		"range": 900,
		"speed": 1.5
	},
	{
		"name": "shotgun",
		"clipBullet": "mcBulletPlayer",
		"damage": 40,
		"range": 500,
		"speed": 1.5
	}
];
config.missions = [
	{
		"idMission": "planet_1_m1",
		"skinIds": [1,4],
		"timerSinglePlayer": 300,
		"timerVersus": 300,
		"timerCooperative": 75,
		"pointsBossDamage": 0,
		"collectibleLimit": 50,
		"pointsObtainedPerObject": 100,
		"maxPointsTimer": 500,
		"timeForMaxPointsSP": 220,
		"timeForPointsSP": 300,
		"timeForMaxPointsVS": 240,
		"timeForPointsVS": 80,
		"timeForMaxPointsCoop": 55,
		"timeForPointsCoop": 150,
		"minPointsStar1": 100,
		"minPointsStar2": 600,
		"minPointsStar3": 1000,
		"minPointsStar1Coop": 200,
		"minPointsStar2Coop": 1200,
		"minPointsStar3Coop": 1500
	},
	{
		"idMission": "planet_1_m2",
		"skinIds": [],
		"timerSinglePlayer": 330,
		"timerVersus": 300,
		"timerCooperative": 90,
		"pointsBossDamage": 0,
		"collectibleLimit": 0,
		"pointsObtainedPerObject": 200,
		"maxPointsTimer": 500,
		"timeForMaxPointsSP": 240,
		"timeForPointsSP": 330,
		"timeForMaxPointsVS": 240,
		"timeForPointsVS": 80,
		"timeForMaxPointsCoop": 90,
		"timeForPointsCoop": 220,
		"minPointsStar1": 100,
		"minPointsStar2": 700,
		"minPointsStar3": 1100,
		"minPointsStar1Coop": 200,
		"minPointsStar2Coop": 1000,
		"minPointsStar3Coop": 1200
	},
	{
		"idMission": "planet_1_m3",
		"skinIds": [],
		"timerSinglePlayer": 240,
		"timerVersus": 240,
		"timerCooperative": 110,
		"pointsBossDamage": 0,
		"collectibleLimit": 0,
		"pointsObtainedPerObject": 120,
		"maxPointsTimer": 500,
		"timeForMaxPointsSP": 240,
		"timeForPointsSP": 330,
		"timeForMaxPointsVS": 180,
		"timeForPointsVS": 80,
		"timeForMaxPointsCoop": 90,
		"timeForPointsCoop": 220,
		"minPointsStar1": 100,
		"minPointsStar2": 820,
		"minPointsStar3": 1100,
		"minPointsStar1Coop": 200,
		"minPointsStar2Coop": 1280,
		"minPointsStar3Coop": 1580
	},
	{
		"idMission": "planet_1_m4",
		"skinIds": [],
		"timerSinglePlayer": 240,
		"timerVersus": 240,
		"timerCooperative": 90,
		"pointsBossDamage": 10,
		"collectibleLimit": 0,
		"pointsObtainedPerObject": 1500,
		"maxPointsTimer": 500,
		"timeForMaxPointsSP": 180,
		"timeForPointsSP": 240,
		"timeForMaxPointsVS": 180,
		"timeForPointsVS": 80,
		"timeForMaxPointsCoop": 70,
		"timeForPointsCoop": 180,
		"minPointsStar1": 100,
		"minPointsStar2": 1600,
		"minPointsStar3": 2000,
		"minPointsStar1Coop": 200,
		"minPointsStar2Coop": 1700,
		"minPointsStar3Coop": 2000
	},
	{
		"idMission": "planet_2_m1",
		"skinIds": [2,5],
		"timerSinglePlayer": 350,
		"timerVersus": 270,
		"timerCooperative": 50,
		"pointsBossDamage": 0,
		"collectibleLimit": 50,
		"pointsObtainedPerObject": 100,
		"maxPointsTimer": 500,
		"timeForMaxPointsSP": 260,
		"timeForPointsSP": 350,
		"timeForMaxPointsVS": 210,
		"timeForPointsVS": 80,
		"timeForMaxPointsCoop": 40,
		"timeForPointsCoop": 100,
		"minPointsStar1": 100,
		"minPointsStar2": 800,
		"minPointsStar3": 1200,
		"minPointsStar1Coop": 200,
		"minPointsStar2Coop": 1200,
		"minPointsStar3Coop": 1500
	},
	{
		"idMission": "planet_2_m2",
		"skinIds": [],
		"timerSinglePlayer": 330,
		"timerVersus": 300,
		"timerCooperative": 120,
		"pointsBossDamage": 0,
		"collectibleLimit": 0,
		"pointsObtainedPerObject": 200,
		"maxPointsTimer": 500,
		"timeForMaxPointsSP": 240,
		"timeForPointsSP": 330,
		"timeForMaxPointsVS": 240,
		"timeForPointsVS": 80,
		"timeForMaxPointsCoop": 90,
		"timeForPointsCoop": 240,
		"minPointsStar1": 100,
		"minPointsStar2": 900,
		"minPointsStar3": 1300,
		"minPointsStar1Coop": 200,
		"minPointsStar2Coop": 1000,
		"minPointsStar3Coop": 1300
	},
	{
		"idMission": "planet_2_m3",
		"skinIds": [],
		"timerSinglePlayer": 350,
		"timerVersus": 270,
		"timerCooperative": 90,
		"pointsBossDamage": 0,
		"collectibleLimit": 0,
		"pointsObtainedPerObject": 120,
		"maxPointsTimer": 500,
		"timeForMaxPointsSP": 260,
		"timeForPointsSP": 350,
		"timeForMaxPointsVS": 210,
		"timeForPointsVS": 80,
		"timeForMaxPointsCoop": 70,
		"timeForPointsCoop": 180,
		"minPointsStar1": 100,
		"minPointsStar2": 1060,
		"minPointsStar3": 1460,
		"minPointsStar1Coop": 200,
		"minPointsStar2Coop": 1280,
		"minPointsStar3Coop": 1580
	},
	{
		"idMission": "planet_2_m4",
		"skinIds": [],
		"timerSinglePlayer": 240,
		"timerVersus": 240,
		"timerCooperative": 180,
		"pointsBossDamage": 10,
		"collectibleLimit": 0,
		"pointsObtainedPerObject": 1500,
		"maxPointsTimer": 500,
		"timeForMaxPointsSP": 180,
		"timeForPointsSP": 240,
		"timeForMaxPointsVS": 180,
		"timeForPointsVS": 80,
		"timeForMaxPointsCoop": 150,
		"timeForPointsCoop": 420,
		"minPointsStar1": 100,
		"minPointsStar2": 1600,
		"minPointsStar3": 2000,
		"minPointsStar1Coop": 200,
		"minPointsStar2Coop": 1700,
		"minPointsStar3Coop": 2000
	},
	{
		"idMission": "planet_3_m1",
		"skinIds": [3,6],
		"timerSinglePlayer": 420,
		"timerVersus": 420,
		"timerCooperative": 90,
		"pointsBossDamage": 0,
		"collectibleLimit": 50,
		"pointsObtainedPerObject": 100,
		"maxPointsTimer": 500,
		"timeForMaxPointsSP": 300,
		"timeForPointsSP": 420,
		"timeForMaxPointsVS": 360,
		"timeForPointsVS": 80,
		"timeForMaxPointsCoop": 70,
		"timeForPointsCoop": 180,
		"minPointsStar1": 100,
		"minPointsStar2": 1000,
		"minPointsStar3": 1400,
		"minPointsStar1Coop": 200,
		"minPointsStar2Coop": 1400,
		"minPointsStar3Coop": 1900
	},
	{
		"idMission": "planet_3_m2",
		"skinIds": [],
		"timerSinglePlayer": 330,
		"timerVersus": 300,
		"timerCooperative": 150,
		"pointsBossDamage": 0,
		"collectibleLimit": 0,
		"pointsObtainedPerObject": 200,
		"maxPointsTimer": 500,
		"timeForMaxPointsSP": 240,
		"timeForPointsSP": 330,
		"timeForMaxPointsVS": 240,
		"timeForPointsVS": 80,
		"timeForMaxPointsCoop": 120,
		"timeForPointsCoop": 300,
		"minPointsStar1": 100,
		"minPointsStar2": 1100,
		"minPointsStar3": 1500,
		"minPointsStar1Coop": 200,
		"minPointsStar2Coop": 1400,
		"minPointsStar3Coop": 1900
	},
	{
		"idMission": "planet_3_m3",
		"skinIds": [],
		"timerSinglePlayer": 420,
		"timerVersus": 420,
		"timerCooperative": 120,
		"pointsBossDamage": 0,
		"collectibleLimit": 0,
		"pointsObtainedPerObject": 120,
		"maxPointsTimer": 500,
		"timeForMaxPointsSP": 300,
		"timeForPointsSP": 420,
		"timeForMaxPointsVS": 360,
		"timeForPointsVS": 80,
		"timeForMaxPointsCoop": 90,
		"timeForPointsCoop": 240,
		"minPointsStar1": 100,
		"minPointsStar2": 1300,
		"minPointsStar3": 1700,
		"minPointsStar1Coop": 200,
		"minPointsStar2Coop": 1520,
		"minPointsStar3Coop": 2020
	},
	{
		"idMission": "planet_3_m4",
		"skinIds": [],
		"timerSinglePlayer": 240,
		"timerVersus": 240,
		"timerCooperative": 120,
		"pointsBossDamage": 10,
		"collectibleLimit": 0,
		"pointsObtainedPerObject": 1500,
		"maxPointsTimer": 500,
		"timeForMaxPointsSP": 180,
		"timeForPointsSP": 240,
		"timeForMaxPointsVS": 180,
		"timeForPointsVS": 80,
		"timeForMaxPointsCoop": 90,
		"timeForPointsCoop": 240,
		"minPointsStar1": 100,
		"minPointsStar2": 1600,
		"minPointsStar3": 2000,
		"minPointsStar1Coop": 200,
		"minPointsStar2Coop": 1600,
		"minPointsStar3Coop": 2000
	}
];
config.players = [
	{
		"idPlayer": 1,
		"skinBase": "ezra",
		"health": 100,
		"damageMelee": 15,
		"damageSpin": 5,
		"timeJetpack": 0,
		"forceJetpack": 0,
		"damageShield": 5,
		"specialCooldown": 25000,
		"jumpInitSpeed": 1.16,
		"jumpRunInitSpeed": 0.7,
		"doubleJumpSpeed": 1.07,
		"regularDamageToBoss": 1,
		"specialDamagetoBoss": 5
	},
	{
		"idPlayer": 2,
		"skinBase": "kanan",
		"health": 100,
		"damageMelee": 15,
		"damageSpin": 5,
		"timeJetpack": 0,
		"forceJetpack": 0,
		"damageShield": 5,
		"specialCooldown": 25000,
		"jumpInitSpeed": 1.16,
		"jumpRunInitSpeed": 0.7,
		"doubleJumpSpeed": 1.07,
		"regularDamageToBoss": 1,
		"specialDamagetoBoss": 5
	},
	{
		"idPlayer": 3,
		"skinBase": "sabine",
		"health": 100,
		"damageMelee": 15,
		"damageSpin": 0,
		"timeJetpack": 500,
		"forceJetpack": 1,
		"damageShield": 5,
		"specialCooldown": 25000,
		"jumpInitSpeed": 1.16,
		"jumpRunInitSpeed": 0.7,
		"doubleJumpSpeed": 1.07,
		"regularDamageToBoss": 1,
		"specialDamagetoBoss": 5
	},
	{
		"idPlayer": 4,
		"skinBase": "hera",
		"health": 100,
		"damageMelee": 15,
		"damageSpin": 0,
		"timeJetpack": 0,
		"forceJetpack": 0,
		"damageShield": 5,
		"specialCooldown": 25000,
		"jumpInitSpeed": 1.16,
		"jumpRunInitSpeed": 0.7,
		"doubleJumpSpeed": 1.07,
		"regularDamageToBoss": 1,
		"specialDamagetoBoss": 5
	},
	{
		"idPlayer": 5,
		"skinBase": "zeb",
		"health": 100,
		"damageMelee": 15,
		"damageSpin": 5,
		"timeJetpack": 0,
		"forceJetpack": 0,
		"damageShield": 5,
		"specialCooldown": 25000,
		"jumpInitSpeed": 1.16,
		"jumpRunInitSpeed": 0.7,
		"doubleJumpSpeed": 1.07,
		"regularDamageToBoss": 1,
		"specialDamagetoBoss": 5
	},
	{
		"idPlayer": 6,
		"skinBase": "chopper",
		"health": 100,
		"damageMelee": 15,
		"damageSpin": 0,
		"timeJetpack": 500,
		"forceJetpack": 0,
		"damageShield": 5,
		"specialCooldown": 25000,
		"jumpInitSpeed": 1.16,
		"jumpRunInitSpeed": 0.7,
		"doubleJumpSpeed": 1.07,
		"regularDamageToBoss": 1,
		"specialDamagetoBoss": 5
	}
];
config.groundEnemies = [
	{
		"type": "Stormtrooper",
		"health": 10.000,
		"speed": 0.100,
		"timeRest": 500.000,
		"bulletDamage": 10.000,
		"bulletSpeed": 0.700,
		"bulletMaxDistance": 1500.000,
		"startUpDelay": -1.000,
		"repetitions": -1.000,
		"patrolParameter": -1.000,
		"fireRange": 600.000,
		"detectionRange": 800.000,
		"shootFreq": 1000.000,
		"minDistanceToWalkBack": 400.000,
		"chanceToWalkBack": 0.600,
		"bulletsInARow": 2.000,
		"timeBetweenBullets": -1.000,
		"probRespawn": 1.000,
		"timeToRespawn": 40000.000,
		"chanceForCooldown": 1.000,
		"attackCooldown": 1000.000,
		"pushBack": 50.000,
		"drops": [7],
		"dropChancePhaseSP1": [0.5],
		"dropChancePhaseSP2": [0.5],
		"dropChancePhaseMP1": [0.5],
		"dropChancePhaseMP2": [0.5]
	},
	{
		"type": "Dumbtrooper",
		"health": 10.000,
		"speed": 0.100,
		"timeRest": 500.000,
		"bulletDamage": 10.000,
		"bulletSpeed": 0.700,
		"bulletMaxDistance": 1500.000,
		"startUpDelay": -1.000,
		"repetitions": -1.000,
		"patrolParameter": -1.000,
		"fireRange": 600.000,
		"detectionRange": 800.000,
		"shootFreq": 1000.000,
		"minDistanceToWalkBack": 400.000,
		"chanceToWalkBack": 0.600,
		"bulletsInARow": 1.000,
		"timeBetweenBullets": -1.000,
		"probRespawn": 1.000,
		"timeToRespawn": 40000.000,
		"chanceForCooldown": 1.000,
		"attackCooldown": 1000.000,
		"pushBack": 50.000,
		"drops": [7],
		"dropChancePhaseSP1": [0.5],
		"dropChancePhaseSP2": [0.5],
		"dropChancePhaseMP1": [0.5],
		"dropChancePhaseMP2": [0.5]
	},
	{
		"type": "Shocktrooper",
		"health": 20.000,
		"speed": 0.100,
		"timeRest": 500.000,
		"bulletDamage": 15.000,
		"bulletSpeed": 1.000,
		"bulletMaxDistance": 1000.000,
		"startUpDelay": -1.000,
		"repetitions": -1.000,
		"patrolParameter": -1.000,
		"fireRange": 600.000,
		"detectionRange": 800.000,
		"shootFreq": 1000.000,
		"minDistanceToWalkBack": 400.000,
		"chanceToWalkBack": 0.600,
		"bulletsInARow": 3.000,
		"timeBetweenBullets": 100.000,
		"probRespawn": 1.000,
		"timeToRespawn": 40000.000,
		"chanceForCooldown": 1.000,
		"attackCooldown": 2000.000,
		"pushBack": 50.000,
		"drops": [7],
		"dropChancePhaseSP1": [0.5],
		"dropChancePhaseSP2": [0.5],
		"dropChancePhaseMP1": [0.5],
		"dropChancePhaseMP2": [0.5]
	},
	{
		"type": "EwebRepeaterBlaster",
		"health": 20.000,
		"speed": 0.000,
		"timeRest": 0.000,
		"bulletDamage": 5.000,
		"bulletSpeed": 1.000,
		"bulletMaxDistance": 1200.000,
		"startUpDelay": -1.000,
		"repetitions": -1.000,
		"patrolParameter": -1.000,
		"fireRange": 600.000,
		"detectionRange": 800.000,
		"shootFreq": 1000.000,
		"minDistanceToWalkBack": 0.000,
		"chanceToWalkBack": 0.000,
		"bulletsInARow": 4.000,
		"timeBetweenBullets": 100.000,
		"probRespawn": 1.000,
		"timeToRespawn": 40000.000,
		"chanceForCooldown": 0.000,
		"attackCooldown": 1000.000,
		"pushBack": 50.000,
		"drops": [7],
		"dropChancePhaseSP1": [0.5],
		"dropChancePhaseSP2": [0.5],
		"dropChancePhaseMP1": [0.5],
		"dropChancePhaseMP2": [0.5]
	},
	{
		"type": "Mandalorian",
		"health": 20.000,
		"speed": 0.002,
		"timeRest": 0.000,
		"bulletDamage": 10.000,
		"bulletSpeed": 1.500,
		"bulletMaxDistance": 1000.000,
		"startUpDelay": 2000.000,
		"repetitions": 0.000,
		"patrolParameter": 200.000,
		"fireRange": 600.000,
		"detectionRange": 600.000,
		"shootFreq": 500.000,
		"minDistanceToWalkBack": 0.000,
		"chanceToWalkBack": 0.000,
		"bulletsInARow": 3.000,
		"timeBetweenBullets": 0.000,
		"probRespawn": 1.000,
		"timeToRespawn": 40000.000,
		"chanceForCooldown": 0.000,
		"attackCooldown": 0.000,
		"pushBack": 0.000,
		"drops": [7],
		"dropChancePhaseSP1": [0.5],
		"dropChancePhaseSP2": [0.5],
		"dropChancePhaseMP1": [0.5],
		"dropChancePhaseMP2": [0.5]
	},
	{
		"type": "Darktrooper",
		"health": 40.000,
		"speed": 0.100,
		"timeRest": 250.000,
		"bulletDamage": 20.000,
		"bulletSpeed": 0.800,
		"bulletMaxDistance": 1200.000,
		"startUpDelay": -1.000,
		"repetitions": -1.000,
		"patrolParameter": -1.000,
		"fireRange": 800.000,
		"detectionRange": 800.000,
		"shootFreq": 200.000,
		"minDistanceToWalkBack": 400.000,
		"chanceToWalkBack": 0.600,
		"bulletsInARow": 5.000,
		"timeBetweenBullets": 1500.000,
		"probRespawn": 1.000,
		"timeToRespawn": 40000.000,
		"chanceForCooldown": 0.000,
		"attackCooldown": 0.000,
		"pushBack": 50.000,
		"drops": [7],
		"dropChancePhaseSP1": [0.5],
		"dropChancePhaseSP2": [0.5],
		"dropChancePhaseMP1": [0.5],
		"dropChancePhaseMP2": [0.5]
	}
];
config.items = [
	{
		"name": "none",
		"skin": "",
		"use": 0,
		"amount": 0,
		"aliveTime": 0,
		"fadingTime": 0
	},
	{
		"name": "health",
		"skin": "mcItemHealth",
		"use": 0,
		"amount": 100,
		"aliveTime": 0,
		"fadingTime": 0
	},
	{
		"name": "shield",
		"skin": "mcItemShield",
		"use": 0,
		"amount": 20000,
		"aliveTime": 0,
		"fadingTime": 0
	},
	{
		"name": "pu_strikeWave",
		"skin": "mcItemStrikeWave",
		"use": 1,
		"amount": 20000,
		"aliveTime": 0,
		"fadingTime": 0
	},
	{
		"name": "pu_perfectDeflect",
		"skin": "mcItemPerfectDeflect",
		"use": 1,
		"amount": 20000,
		"aliveTime": 0,
		"fadingTime": 0
	},
	{
		"name": "pu_multiBlaster",
		"skin": "mcItemMultiBlaster",
		"use": 2,
		"amount": 20000,
		"aliveTime": 0,
		"fadingTime": 0
	},
	{
		"name": "pu_explosiveBlaster",
		"skin": "mcItemExplosiveBlaster",
		"use": 2,
		"amount": 20000,
		"aliveTime": 0,
		"fadingTime": 0
	},
	{
		"name": "drop_health",
		"skin": "mcItemDropHealth",
		"use": 0,
		"amount": 15,
		"aliveTime": 5000,
		"fadingTime": 0
	}
];
config.hazards = [
	{
		"type": "FallingObject",
		"damage": 50,
		"attackDelay": -1,
		"timeBeforeExplode": -1,
		"fireRange": -1,
		"bulletSpeed": -1,
		"fireRange": -1,
		"health": -1,
		"withdrawDelay": -1,
		"pushBack": -1
	},
	{
		"type": "Landmine",
		"damage": 5,
		"attackDelay": -1,
		"timeBeforeExplode": 2000,
		"fireRange": -1,
		"bulletSpeed": -1,
		"fireRange": -1,
		"health": -1,
		"withdrawDelay": -1,
		"pushBack": -1
	},
	{
		"type": "Turret",
		"damage": 5,
		"attackDelay": -1,
		"timeBeforeExplode": -1,
		"fireRange": 500,
		"bulletSpeed": 0.8,
		"fireRange": 800,
		"health": 15,
		"withdrawDelay": -1,
		"pushBack": -1
	},
	{
		"type": "Spike",
		"damage": 5,
		"attackDelay": -1,
		"timeBeforeExplode": -1,
		"fireRange": -1,
		"bulletSpeed": -1,
		"fireRange": -1,
		"health": -1,
		"withdrawDelay": 600,
		"pushBack": -1
	},
	{
		"type": "GroundHazard",
		"damage": 5,
		"attackDelay": 2000,
		"timeBeforeExplode": -1,
		"fireRange": -1,
		"bulletSpeed": -1,
		"fireRange": -1,
		"health": -1,
		"withdrawDelay": -1,
		"pushBack": -1
	},
	{
		"type": "Laser",
		"damage": 2,
		"attackDelay": 1500,
		"timeBeforeExplode": -1,
		"fireRange": -1,
		"bulletSpeed": -1,
		"fireRange": -1,
		"health": -1,
		"withdrawDelay": 5000,
		"pushBack": 50
	},
	{
		"type": "Breakable",
		"damage": 0,
		"attackDelay": -1,
		"timeBeforeExplode": -1,
		"fireRange": -1,
		"bulletSpeed": -1,
		"fireRange": -1,
		"health": 20,
		"withdrawDelay": -1,
		"pushBack": -1
	}
];
config.atdp = {
	"initHealth": 50,
	"initHealthVS": 50,
	"initHealthCoop": 200,
	"timeStateStand": 2000.00,
	"timeHoming": 6000.00,
	"timeBurst": 3000.00,
	"timeGrenade": 4000.00,
	"timeVulnerable": 4000.00,
	"speedWalk": 0.30,
	"distanceWalk": 500.00,
	"maxGrenades": 15.00,
	"speedGrenades": 0.7,
	"timePerBurst": 80.00,
	"speedBurstBullet": 0.5,
	"speedHoming": 0.2,
	"timeForHomingToExplode": 4000.00,
	"healthThreshold": 50.00,
	"damageDash": 30.00,
	"damageJump": 20.00,
	"damageBurstBullet": 5.00,
	"damageHoming": 20.00,
	"damageGrenades": 10.00
};
config.atat = {
	"initHealth": 60,
	"initHealthVS": 60,
	"initHealthCoop": 240,
	"timeStateStand": 2000.00,
	"timeCannon": 3500.00,
	"timeBurst": 3000.00,
	"timeVulnerable": 3000.00,
	"timeStateMoveToAttack": 3000.00,
	"speedWalk": 0.55,
	"distanceWalk": 525.00,
	"numberOfBullets": 10,
	"timePerBurst": 80.00,
	"speedBurstBullet": 0.5,
	"speedCannon": 1,
	"speedMoveToAttack": 0.3,
	"healthThreshold": 50.00,
	"damageDash": 25.00,
	"damageBurstBullet": 5.00,
	"damageCannon": 20.00
};
config.tie_fighter = {
	"initHealth": 70,
	"initHealthVS": 70,
	"initHealthCoop": 250,
	"timeStateStand": 2000.00,
	"timeHoming": 6000,
	"timeBurst": 3000,
	"timeVulnerable": 6000,
	"timeVulnerableAfterBurst": 4000,
	"speedMovement": 0.9,
	"numberOfBullets": 3,
	"timePerBurst": 200,
	"speedBurstBullet": 0.5,
	"speedHoming": 0.2,
	"timeForHomingToExplode": 4000,
	"healthThreshold": 100,
	"damageBurstBullet": 8,
	"damageHoming": 20
};
