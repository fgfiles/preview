var res = 
{
    ui_png:              "res/ui.png",
    bg_png:              "res/bg.png",

    ui_plist:            "res/ui.plist",

    // puzzles
    gobj_3x3_plist:     "res/puzzles/gobj_3x3.plist",
    gobj_3x3_png:       "res/puzzles/gobj_3x3.png",
    gobj_4x4_plist:     "res/puzzles/gobj_4x4.plist",
    gobj_4x4_png:       "res/puzzles/gobj_4x4.png",
    gobj_5x5_plist:     "res/puzzles/gobj_5x5.plist",
    gobj_5x5_png:       "res/puzzles/gobj_5x5.png",

    // fonts
    mainFont_b_png:     "res/@blueFont.png",
    mainFont_b_fnt:     "res/@blueFont.fnt",
    mainFont_w_png:     "res/@whiteScore.png",
    mainFont_w_fnt:     "res/@whiteScore.fnt",
    mainFont_o_png:     "res/@orangeFont.png",
    mainFont_o_fnt:     "res/@orangeFont.fnt",
    
    resultsScreen_png:  "res/endScreen.png",
    tutorials_png:      "res/tutorials.png",
    titleScreen_png:    "res/titleScreen.png"
};

var g_resources = [];
for (var i in res) 
{
    g_resources.push(res[i]);
}