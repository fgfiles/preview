var res = {
    anim_bugs_png:      "res/anim/anim_bugs.png",
    anim_coyote_png:    "res/anim/anim_coyote.png",
    anim_squeaks_png:   "res/anim/anim_squeaks.png",
    p_bg_png:           "res/proto/bg_desertCanyon.png",
    p_bgExp_png:        "res/proto/bg_explosion.png",
    howTo1_png:         "res/proto/howTo_1.png",
    howTo2_png:         "res/proto/howTo_2.png",
    p_resultScreen_png: "res/proto/resultsScreen.png",
    p_titleScreen_png:  "res/proto/titleScreen.png",
    p_ui_png:           "res/proto/ui.png",
    anim_explosion_png: "res/anim/fx_bigExplosion.png",
    anim_fx_png:        "res/anim/fx.png",
    anim_gobj_png:      "res/anim/gobj.png",
    p_lanes_png:        "res/proto/Ellipse-100.png",
    fnt_score_png:      "res/proto/@bm_bradyScore.png",
    fnt_streak_png:     "res/proto/@bm_bradyStreak.png",

    anim_bugs_plist:    "res/anim/anim_bugs.plist",
    anim_fx_plist:      "res/anim/fx.plist",
    anim_coyote_plist:  "res/anim/anim_coyote.plist",
    p_ui_plist:         "res/proto/ui.plist",
    anim_squeaks_plist: "res/anim/anim_squeaks.plist",
    anim_explosion_plist:"res/anim/fx_bigExplosion.plist",
    anim_gobj_plist:    "res/anim/gobj.plist",
    fnt_score_fnt:      "res/proto/@bm_bradyScore.fnt",
    fnt_streak_fnt:     "res/proto/@bm_bradyStreak.fnt",

    // sfx
    sfx_swingCorrect:   "res/audio/Bat_Swing_Correct_Hit.mp3",
    sfx_swingWrong:     "res/audio/Bat_Swing_Wrong_Hit.mp3",
    sfx_swingMiss:      "res/audio/Bat_Swing_Miss.mp3",
    sfx_chicken:        "res/audio/Chicken_Clucking.mp3",
    sfx_chickenStartle: "res/audio/Chicken_Startle.mp3",
    sfx_throwFast:      "res/audio/Fast_Throw.mp3",
    sfx_throwNormal:    "res/audio/Normal_Throw.mp3",
    sfx_throwSlow:      "res/audio/Slow_Throw.mp3",
    sfx_explodeBig:     "res/audio/Large_Explosion.mp3",
    sfx_explodeSmall:   "res/audio/Short_Explosion.mp3",
    sfx_squeaksBomb:    "res/audio/Squeaks_Bombs_Awayv2.mp3",
    sfx_switchLane:     "res/audio/Switch_Lane_2.mp3",
    sfx_wind:           "res/audio/Wind_Ambiance_v2.mp3"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}