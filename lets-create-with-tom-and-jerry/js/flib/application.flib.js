"use strict"

define( [ 'createjs', 'core/assetlib' ], function( createjs, assetlib ){

    var lib = {} ;
    var images = assetlib.imageCache ;
    var ss = assetlib.spriteSheets ;

    /* FLASH OUTPUT BEGINS */

    (function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 944,
	height: 577,
	fps: 24,
	color: "#444444",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.brushtip_brush2_cookiepng = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.brushtip_squeezebottle_cookie2 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.canvaspreview_base = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.crayon_elmo_brushtip = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.icingtool_brushtip_2 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.particle_black = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.particle_blue = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.particle_brown = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.particle_grey = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.particle_purple = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.particle_red = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.particle_white = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.placeholder = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.select_bg = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.transparent32x32 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.turner_art_tool_gamescreen_tomjerry_v02pngcopy = function() {
	this.spriteSheet = ss["application.flib_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.turner_art_tool_titleScreen_tomjerry = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.turner_art_tool_titleScreen_tomjerry_logotype = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_canvas_select_bg = function() {
	this.spriteSheet = ss["application.flib_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_dock_picturehose_tnt = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_modal = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_modal_close = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_modal_close_invert = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_modal_delete = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_modal_delete_invert = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_picturehose_birthday_balloon_01 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_picturehose_birthday_balloon_02 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_picturehose_birthday_balloon_03 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_picturehose_birthday_balloon_04 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_picturehose_birthday_balloon_05 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_picturehose_birthday_icon_balloon = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_picturehose_cake_icon_sprinkle = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_picturehose_cake_sprinkle_blue = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_picturehose_cake_sprinkle_green = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_picturehose_cake_sprinkle_orange = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_picturehose_cake_sprinkle_pink = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_picturehose_cake_sprinkle_yellow = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_picturehose_chase_icon_splat = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_picturehose_chase_splat_01 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_picturehose_chase_splat_02 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_picturehose_chase_splat_03 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_picturehose_fight_cheese = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_picturehose_fight_icon_cheese = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_picturehose_tntpngcopy = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_animate_birthday_tube_f1 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_animate_birthday_tube_f2 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_animate_birthday_tube_icon = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_animate_cake_icon_sprinkles = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_animate_cake_icon_sprinkles_1 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_animate_cake_sprinkle_green = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_animate_cake_sprinkle_pink = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_animate_cake_sprinkle_turq = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_animate_cake_sprinkle_yellow = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_animate_chase_cheese_trap_f1 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_animate_chase_cheese_trap_f2 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_animate_chase_cheese_trap_f3 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_animate_fight_egg_f1 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_animate_fight_egg_f2 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_animate_fight_icon_egg = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_birthday_candle = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_birthday_icon_candle = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_birthday_icon_present = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_birthday_icon_trap = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_birthday_present = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_cake_cherry = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_cake_icon_cherry = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_cake_icon_silver = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_cake_silver = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_cake_stars = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_cake_starspngcopy = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_cupcake1 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_cupcake2 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_dock_jerry = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_dock_tom = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_fight_fish = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_fight_icecream = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_fight_icon_cupcake1 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_fight_icon_cupcake2 = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_fight_icon_fish = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_fight_icon_icecream = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_fight_pan = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_food_icon_tomato = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_food_tomato = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_icon_fight_pan = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_icon_pan = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_jerry = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_panpngcopy = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_sticker_tom = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_titlescreen_brandbtmrightjpng = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_titlescreen_brandtopleftjpng = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_tool_brush_empty = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_tool_brush_paint = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_tool_brush_paint_tex = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_tool_icing_colour = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_tool_icing_colour_sat = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_tool_icing_empty = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_tool_ketchup = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_tool_pencil_colour = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_tool_pencil_colour_sat = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_tool_pencil_empty = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_tool_picturehosetom = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_tool_picturehosetompngcopy = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_tool_pitcurehosejerry = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_tool_pitcurehosejerrypngcopy = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_tool_rubber = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_UI_bin = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_UI_bin_invert = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_UI_done = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_UI_done_invert = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_UI_home = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_UI_home_invert = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_UI_menubg = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_UI_play = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_UI_play_invert = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_UI_print = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_UI_print_invert = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_UI_save = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_UI_save_invert = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_UI_soundoff = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_UI_soundoff_invert = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_UI_soundon = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.turner_artproj_UI_soundon_invert = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.white32px = function() {
	this.spriteSheet = ss["application.flib_atlas_2"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.WhiteFlash = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.white32px();
	this.instance.setTransform(-16,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.PreviewContainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.canvaspreview_base();
	this.instance.setTransform(-407,-261.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-407,-261.4,810,520);


(lib.PlayButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{out:0,over:1,down:2});

	// Layer 4
	this.instance = new lib.turner_artproj_UI_play();
	this.instance.setTransform(-125.5,-122);

	this.instance_1 = new lib.turner_artproj_UI_play_invert();
	this.instance_1.setTransform(-131.7,-128.1,1.05,1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.5,-122,251,244);


(lib.Placemarker_Circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AgEouQADgBABAAQDoAACkCkQCiCiACDlQAAADAAABQAADoikCkQigCgjgAEQgGAAgGAAQjnAAikikQikikAAjoQAAgHABgIQAFjdCeifQCgigDhgEAADgJIItAFAADgJIAJI5AougPIIxAGAgCnBIAFG4");
	this.shape.setTransform(0,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAFA4Ih1AAIBuhsIACgDIADADIBtBsg");
	this.shape_1.setTransform(-0.8,-50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-56.8,114,114);


(lib.Placeholder_Rectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.placeholder();
	this.instance.setTransform(0,0,64,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.ImgContainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,272,181);


(lib.Button_Trash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":1,"down":2});

	// Layer 1
	this.instance = new lib.turner_artproj_UI_bin();
	this.instance.setTransform(-43.5,-44);

	this.instance_1 = new lib.turner_artproj_UI_bin_invert();
	this.instance_1.setTransform(-45.7,-46.4,1.05,1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-44,87,86);


(lib.Button_Tick_Large = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":1,"down":2});

	// Layer 3
	this.instance = new lib.turner_artproj_modal_delete();
	this.instance.setTransform(-68.5,-66.5);

	this.instance_1 = new lib.turner_artproj_modal_delete_invert();
	this.instance_1.setTransform(-68.5,-66.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,-66.5,137,133);


(lib.Button_Tick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":1,"down":2});

	// Layer 1
	this.instance = new lib.turner_artproj_UI_done();
	this.instance.setTransform(-43.5,-44);

	this.instance_1 = new lib.turner_artproj_UI_done_invert();
	this.instance_1.setTransform(-45.8,-46.6,1.05,1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-44,86,83);


(lib.Button_Save = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":1,"down":2});

	// Layer 1
	this.instance = new lib.turner_artproj_UI_save();
	this.instance.setTransform(-43.5,-44);

	this.instance_1 = new lib.turner_artproj_UI_save_invert();
	this.instance_1.setTransform(-45.7,-46.2,1.05,1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-44,87,88);


(lib.Button_Print = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":1,"down":2});

	// Layer 1
	this.instance = new lib.turner_artproj_UI_print();
	this.instance.setTransform(-43.5,-44);

	this.instance_1 = new lib.turner_artproj_UI_print_invert();
	this.instance_1.setTransform(-45.7,-46.2,1.05,1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-44,87,88);


(lib.Button_Mute = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"out":0,"over":1,"down":2,checked:3});

	// Layer 1
	this.instance = new lib.turner_artproj_UI_soundon();
	this.instance.setTransform(-44.5,-45);

	this.instance_1 = new lib.turner_artproj_UI_soundon_invert();
	this.instance_1.setTransform(-44.5,-45);

	this.instance_2 = new lib.turner_artproj_UI_soundoff();
	this.instance_2.setTransform(-44.5,-45);

	this.instance_3 = new lib.turner_artproj_UI_soundoff_invert();
	this.instance_3.setTransform(-44.5,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,-45,87,86);


(lib.Button_Home = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"out":0,"over":1,"down":2});

	// Layer 1
	this.instance = new lib.turner_artproj_UI_home();
	this.instance.setTransform(-43.5,-44);

	this.instance_1 = new lib.turner_artproj_UI_home_invert();
	this.instance_1.setTransform(-45.8,-46.4,1.05,1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-44,86,86);


(lib.Button_Cancel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":1,"down":2});

	// Layer 3
	this.instance = new lib.turner_artproj_modal_close();
	this.instance.setTransform(-68.5,-66.5);

	this.instance_1 = new lib.turner_artproj_modal_close_invert();
	this.instance_1.setTransform(-68.5,-66.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,-66.5,137,133);


(lib.Brush_Eraser = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.brushtip_squeezebottle_cookie2();
	this.instance.setTransform(35.2,-8.1,0.645,1,32.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,-8.1,67.3,73.8);


(lib.Icon_Sticker_Tomato = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_food_icon_tomato();
	this.instance.setTransform(-45.5,-48.5,0.911,0.911);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-48.5,103,103);


(lib.Icon_Sticker_Tom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_dock_tom();
	this.instance.setTransform(-69,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-73.5,153,138);


(lib.Icon_Sticker_Star = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_cake_stars();
	this.instance.setTransform(-40,-55,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-55,58,66);


(lib.Icon_Sticker_Sprinkles = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_animate_cake_icon_sprinkles();
	this.instance.setTransform(-52.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-55.5,116,119);


(lib.Icon_Sticker_Silver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_cake_icon_silver();
	this.instance.setTransform(-41,-37.6,0.759,0.759);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-37.6,88,87.3);


(lib.Icon_Sticker_Pup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_fight_icon_cupcake2();
	this.instance.setTransform(-43,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-51.5,104,103);


(lib.Icon_Sticker_PartyHorn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_animate_birthday_tube_icon();
	this.instance.setTransform(-62,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-54.5,124,109);


(lib.Icon_Sticker_Pan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_icon_fight_pan();
	this.instance.setTransform(-57.4,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.4,-57.5,114,115);


(lib.Icon_Sticker_MouseTrap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_birthday_icon_trap();
	this.instance.setTransform(-65,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-45.5,141,109);


(lib.Icon_Sticker_Jerry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_dock_jerry();
	this.instance.setTransform(-63,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-44.5,133,92);


(lib.Icon_Sticker_IceCream = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_fight_icon_icecream();
	this.instance.setTransform(-58,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-60,114,119);


(lib.Icon_Sticker_Gift = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_birthday_icon_present();
	this.instance.setTransform(-46,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-56,109,110);


(lib.Icon_Sticker_FishFight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_fight_icon_fish();
	this.instance.setTransform(-58.5,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.5,-54,116,109);


(lib.Icon_Sticker_Fish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_fight_icon_fish();
	this.instance.setTransform(-58.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.5,-50,116,109);


(lib.Icon_Sticker_FightPan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_icon_pan();
	this.instance.setTransform(-46.9,-54.9,0.846,0.846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.9,-54.9,88,105.8);


(lib.Icon_Sticker_Egg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_animate_fight_icon_egg();
	this.instance.setTransform(-56,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-55.5,112,111);


(lib.Icon_Sticker_Cherry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_cake_icon_cherry();
	this.instance.setTransform(-43.7,-53,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.7,-53,94.4,106);


(lib.Icon_Sticker_Candle = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_birthday_icon_candle();
	this.instance.setTransform(-51,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-67.5,116,134);


(lib.Icon_Sticker_Bacon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_fight_icon_cupcake1();
	this.instance.setTransform(-41.9,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.9,-49.5,104,103);


(lib.Icon_SqueezeBottle = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_tool_ketchup();
	this.instance.setTransform(-63.9,169,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.9,-153,129,322);


(lib.Icon_PictureHose_TNT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_dock_picturehose_tnt();
	this.instance.setTransform(-41.5,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-63.5,81,121);


(lib.Icon_PictureHose_Fur2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_tool_picturehosetom();
	this.instance.setTransform(-48,-47.9,0.845,0.845);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-47.9,99.7,97.2);


(lib.Icon_PictureHose_Fur1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_tool_pitcurehosejerry();
	this.instance.setTransform(-47,-49.9,0.859,0.859);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-49.9,99.7,96.2);


(lib.Icon_Eraser_Medium = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_tool_rubber();
	this.instance.setTransform(-30.2,45.3,1,1,-91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,-97.2,86.4,142.5);


(lib.Colourise_Pencil = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_tool_pencil_colour();
	this.instance.setTransform(-33.7,144.3,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-143.7,64,288);


(lib.Colourise_PaintBrush = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_tool_brush_paint();
	this.instance.setTransform(-45.3,-33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,-33.4,94,65);


(lib.Colourise_Icing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_tool_icing_colour();
	this.instance.setTransform(-74.3,113.5,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.3,-115.5,151,229);


(lib.Brush_Sticker_Tomato = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_food_tomato();
	this.instance.setTransform(0,0,1.153,1.153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.6,75);


(lib.Brush_Sticker_Tom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_tom();
	this.instance.setTransform(0,0,1.114,1.114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195,149.3);


(lib.Brush_Sticker_Star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_cake_starspngcopy();
	this.instance.setTransform(0,0,0.658,0.658);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.4,52);


(lib.Brush_Sticker_Silver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_cake_silver();
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,56);


(lib.Brush_Sticker_Pup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.turner_artproj_sticker_cupcake2();
	this.instance.setTransform(0,0,0.541,0.56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109.3,107);


(lib.Brush_Sticker_PartyHorn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_animate_birthday_tube_f1();

	this.instance_1 = new lib.turner_artproj_sticker_animate_birthday_tube_f2();
	this.instance_1.setTransform(0,72,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance}]},23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132,70);


(lib.Brush_Sticker_Pan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_panpngcopy();
	this.instance.setTransform(-6,34.1,1.362,1.362,-31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,156.5,189.4);


(lib.Brush_Sticker_MouseTrap = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_animate_chase_cheese_trap_f1();

	this.instance_1 = new lib.turner_artproj_sticker_animate_chase_cheese_trap_f2();

	this.instance_2 = new lib.turner_artproj_sticker_animate_chase_cheese_trap_f3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207,95);


(lib.Brush_Sticker_Jerry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_jerry();
	this.instance.setTransform(0,0,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,85);


(lib.Brush_Sticker_IceCream = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_fight_icecream();
	this.instance.setTransform(0,0,0.618,0.618);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.5,164.4);


(lib.Brush_Sticker_Gift = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_birthday_present();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,87);


(lib.Brush_Sticker_FishFight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_fight_fish();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,102);


(lib.Brush_Sticker_Fish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_fight_fish();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,102);


(lib.Brush_Sticker_FightPan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_fight_pan();
	this.instance.setTransform(-1,-1.1,0.728,0.728);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.1,159.6,110.8);


(lib.Brush_Sticker_Egg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_animate_fight_egg_f1();

	this.instance_1 = new lib.turner_artproj_sticker_animate_fight_egg_f2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112,111);


(lib.Brush_Sticker_Cherry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_cake_cherry();
	this.instance.setTransform(0,0,0.57,0.57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.2,76.9);


(lib.Brush_Sticker_Candle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_birthday_candle();
	this.instance.setTransform(0,0,0.521,0.521);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.4,119.9);


(lib.Brush_Sticker_Bacon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_sticker_cupcake1();
	this.instance.setTransform(0,0,0.609,0.609);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.6,109);


(lib.Brush_SqueezeBottle = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.brushtip_squeezebottle_cookie2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,62);


(lib.Brush_PaintBrush = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.brushtip_brush2_cookiepng();
	this.instance.setTransform(0,0,0.589,0.589);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.5,36.5);


(lib.Brush_Icing = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icingtool_brushtip_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,37);


(lib.Brush_Fur2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_tool_picturehosetompngcopy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105,101);


(lib.Brush_Fur1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_tool_pitcurehosejerrypngcopy();
	this.instance.setTransform(0,0,0.798,0.798);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.4,79);


(lib.Brush_Explosion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_picturehose_tntpngcopy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,111);


(lib.Brush_Crayon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.crayon_elmo_brushtip();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.ToolIcon_Selected = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.select_bg();
	this.instance.setTransform(-66.4,-61.9,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.4,-61.9,145.9,145.9);


(lib.TitleIdent_Visual = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_titlescreen_brandbtmrightjpng();
	this.instance.setTransform(-353,-275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-353,-275,353,275);


(lib.TitleIdent_Boomerang = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_titlescreen_brandtopleftjpng();
	this.instance.setTransform(-60,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-40,497,291);


(lib.Particle_Sticker_Sprinkles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_picturehose_cake_sprinkle_pink();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,38);


(lib.Particle_Sprinkles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_picturehose_cake_sprinkle_blue();

	this.instance_1 = new lib.turner_artproj_picturehose_cake_sprinkle_green();

	this.instance_2 = new lib.turner_artproj_picturehose_cake_sprinkle_pink();

	this.instance_3 = new lib.turner_artproj_picturehose_cake_sprinkle_yellow();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,38);


(lib.Particle_Generic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.particle_grey();

	this.instance_1 = new lib.particle_blue();

	this.instance_2 = new lib.particle_brown();

	this.instance_3 = new lib.particle_purple();

	this.instance_4 = new lib.particle_red();

	this.instance_5 = new lib.particle_white();

	this.instance_6 = new lib.particle_black();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,46);


(lib.Icon_PictureHose_Sprinkles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_picturehose_cake_icon_sprinkle();
	this.instance.setTransform(-57,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-61,113,124);


(lib.Icon_PictureHose_Splat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_picturehose_chase_icon_splat();
	this.instance.setTransform(-53,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-44.5,114,113);


(lib.Icon_PictureHose_Cheese = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_picturehose_fight_icon_cheese();
	this.instance.setTransform(-38.5,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-38.5,97,81);


(lib.Icon_PictureHose_Balloon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_picturehose_birthday_icon_balloon();
	this.instance.setTransform(-58,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-50,130,116);


(lib.DropDownMenuTransp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.transparent32x32();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.Brush_Sticker_Sprinkles = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// turner_artproj_sticker_animate_cake_sprinkle_yellow.png
	this.instance = new lib.turner_artproj_sticker_animate_cake_sprinkle_yellow();
	this.instance.setTransform(49.3,27.9,0.842,0.842,46.5);

	this.instance_1 = new lib.turner_artproj_picturehose_cake_sprinkle_orange();
	this.instance_1.setTransform(73.1,45.6,0.491,0.491,90.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1,p:{rotation:90.4,x:73.1,y:45.6}}]},3).to({state:[{t:this.instance_1,p:{rotation:46.7,x:63.4,y:41.1}}]},2).to({state:[{t:this.instance_1,p:{rotation:46.7,x:83.5,y:20.9}}]},2).wait(1));

	// turner_artproj_sticker_animate_cake_sprinkle_turq.png
	this.instance_2 = new lib.turner_artproj_sticker_animate_cake_sprinkle_turq();
	this.instance_2.setTransform(8.2,21.5,0.842,0.842);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(3).to({scaleX:0.77,scaleY:0.77,x:-10,y:16.3},0).wait(2).to({scaleX:0.73,scaleY:0.73,rotation:-35.7,x:-20.5,y:29.3},0).wait(2).to({x:-0.3,y:9.8},0).wait(1));

	// turner_artproj_sticker_animate_cake_sprinkle_pink.png
	this.instance_3 = new lib.turner_artproj_sticker_animate_cake_sprinkle_pink();
	this.instance_3.setTransform(39,11,0.842,0.842);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(3).to({scaleX:0.77,scaleY:0.77,x:58.2,y:7.4},0).wait(2).to({scaleX:0.73,scaleY:0.73,rotation:42.2,x:73.8,y:24.4},0).wait(2).to({x:94,y:4.9},0).wait(1));

	// turner_artproj_sticker_animate_cake_sprinkle_green.png
	this.instance_4 = new lib.turner_artproj_sticker_animate_cake_sprinkle_green();
	this.instance_4.setTransform(12.4,45.1,0.842,0.842,-20.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).wait(3).to({scaleX:0.77,scaleY:0.77,x:-2.8,y:53.3},0).wait(2).to({scaleX:0.73,scaleY:0.73,rotation:-0.5,y:53.8},0).wait(2).to({x:17.4,y:34.3},0).wait(1));

	// Layer 1
	this.instance_5 = new lib.turner_artproj_sticker_animate_cake_icon_sprinkles_1();
	this.instance_5.setTransform(0,-0.3,0.676,0.676);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({scaleX:1,scaleY:1,x:-18,y:-22},0).wait(3).to({scaleX:1.59,scaleY:1.59,x:-52,y:-54.5},0).wait(2).to({scaleX:0.68,scaleY:0.68,x:-7.7,y:-6.3},0).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.3,71,71.7);


(lib.Brush_Sprinkles = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_picturehose_cake_sprinkle_blue();
	this.instance.setTransform(0,0,0.382,0.382);

	this.instance_1 = new lib.turner_artproj_picturehose_cake_sprinkle_green();
	this.instance_1.setTransform(0,0,0.382,0.382);

	this.instance_2 = new lib.turner_artproj_picturehose_cake_sprinkle_pink();
	this.instance_2.setTransform(0,0,0.382,0.382);

	this.instance_3 = new lib.turner_artproj_picturehose_cake_sprinkle_yellow();
	this.instance_3.setTransform(0,0,0.382,0.382);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.5,14.5);


(lib.Brush_Splat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_picturehose_chase_splat_02();

	this.instance_1 = new lib.turner_artproj_picturehose_chase_splat_03();

	this.instance_2 = new lib.turner_artproj_picturehose_chase_splat_01();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139,150);


(lib.Brush_Cheese = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_picturehose_fight_cheese();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103,99);


(lib.Brush_Balloon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turner_artproj_picturehose_birthday_balloon_05();

	this.instance_1 = new lib.turner_artproj_picturehose_birthday_balloon_04();

	this.instance_2 = new lib.turner_artproj_picturehose_birthday_balloon_03();

	this.instance_3 = new lib.turner_artproj_picturehose_birthday_balloon_02();

	this.instance_4 = new lib.turner_artproj_picturehose_birthday_balloon_01();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87,117);


(lib.ToolIconContainer = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.placemarker = new lib.Placemarker_Circle();
	this.placemarker.setTransform(0,0,1,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.placemarker).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-56.5,113,113);


(lib.DropdownMenu = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// menu
	this.button_mute = new lib.Button_Mute();
	this.button_mute.setTransform(1109.8,109,1,1,0,0,0,-0.5,-2.5);

	this.button_toggle = new lib.Button_Tick();
	this.button_toggle.setTransform(1110.1,596,1,1,0,0,0,-0.5,-1);

	this.button_home = new lib.Button_Home();
	this.button_home.setTransform(1109.3,221.9,1,1,0,0,0,0,-1);

	this.button_clear = new lib.Button_Trash();
	this.button_clear.setTransform(1108.6,315.9);

	this.button_print = new lib.Button_Print();
	this.button_print.setTransform(1108.3,502.7);

	this.button_save = new lib.Button_Save();
	this.button_save.setTransform(1108.3,408);

	this.instance = new lib.turner_artproj_UI_menubg();
	this.instance.setTransform(1046.6,-71,1,1.264);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.button_save},{t:this.button_print},{t:this.button_clear},{t:this.button_home},{t:this.button_toggle},{t:this.button_mute}]}).wait(1));

	// transp
	this.transp = new lib.DropDownMenuTransp();
	this.transp.setTransform(660,390,41.25,24.375,0,0,0,16,16);

	this.timeline.addTween(cjs.Tween.get(this.transp).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,1320,851);


(lib.CanvasSelector = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"out":0,"over":1,"down":2});

	// imgContainer
	this.imgContainer = new lib.ImgContainer();
	this.imgContainer.setTransform(-133,-86);

	this.timeline.addTween(cjs.Tween.get(this.imgContainer).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:-3.5,x:-146,y:-87.5},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Icon_Pencil = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.turner_artproj_tool_pencil_colour_sat();
	this.instance.setTransform(-23.8,144.6,1,1,-93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.colourise = new lib.Colourise_Pencil();
	this.colourise.setTransform(0,-1.1,1,1,-3.5,0,0,-1.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.colourise).wait(1));

	// Layer 2
	this.instance_1 = new lib.turner_artproj_tool_pencil_empty();
	this.instance_1.setTransform(-17.1,139.6,1,1,-93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.2,-151.7,88,296.7);


(lib.Icon_PaintBrush = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.turner_artproj_tool_brush_paint_tex();
	this.instance.setTransform(-33.9,-48.4,1,1,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.colourise = new lib.Colourise_PaintBrush();
	this.colourise.setTransform(-5.3,-96.7,1,1,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.colourise).wait(1));

	// Layer 1
	this.instance_1 = new lib.turner_artproj_tool_brush_empty();
	this.instance_1.setTransform(0.6,304.6,1,1,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.2,-148.2,108.6,452.8);


(lib.Icon_Icing = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.turner_artproj_tool_icing_colour_sat();
	this.instance.setTransform(-64,111.7,1,1,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// turner_artproj_tool_icing_colour.png
	this.colourise = new lib.Colourise_Icing();
	this.colourise.setTransform(85.6,93.3,1,1,-7.7,0,0,75.5,114.5);

	this.timeline.addTween(cjs.Tween.get(this.colourise).wait(1));

	// turner_artproj_tool_icing_empty.png
	this.instance_1 = new lib.turner_artproj_tool_icing_empty();
	this.instance_1.setTransform(-56.3,201.7,1,1,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.9,-153.2,188.6,355);


(lib.scene_title = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// playButton
	this.playButton = new lib.PlayButton();
	this.playButton.setTransform(660,574);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(1));

	// Layer 7
	this.ident_visual = new lib.TitleIdent_Visual();
	this.ident_visual.setTransform(1143.5,642.5,1,1,0,0,0,-176.5,-137.5);

	this.ident_logo = new lib.TitleIdent_Boomerang();
	this.ident_logo.setTransform(248.5,145.5,1,1,0,0,0,248.5,145.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ident_logo},{t:this.ident_visual}]}).wait(1));

	// turner_artproj_titlescreen_bg.jpg
	this.instance = new lib.turner_art_tool_titleScreen_tomjerry_logotype();
	this.instance.setTransform(405.8,37.2);

	this.instance_1 = new lib.turner_art_tool_titleScreen_tomjerry();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-40,1380,820);


(lib.scene_selectcanvas = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// buttons
	this.mute = new lib.Button_Mute();
	this.mute.setTransform(1104.3,124.1,1,1,0,0,0,-0.5,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.mute).wait(1));

	// Layer 1
	this.canvas_4 = new lib.CanvasSelector();
	this.canvas_4.setTransform(653.1,494.1);

	this.canvas_3 = new lib.CanvasSelector();
	this.canvas_3.setTransform(374.1,494.1);

	this.canvas_2 = new lib.CanvasSelector();
	this.canvas_2.setTransform(931.3,264.2);

	this.canvas_1 = new lib.CanvasSelector();
	this.canvas_1.setTransform(652.7,264.2);

	this.canvas_0 = new lib.CanvasSelector();
	this.canvas_0.setTransform(374.1,264.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.canvas_0},{t:this.canvas_1},{t:this.canvas_2},{t:this.canvas_3},{t:this.canvas_4}]}).wait(1));

	// Layer 2
	this.instance = new lib.turner_artproj_canvas_select_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1320,780);


(lib.scene_modal_confirm = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.cancelButton = new lib.Button_Cancel();
	this.cancelButton.setTransform(591.5,389.8,1,1,0,0,0,0,-1);

	this.confirmButton = new lib.Button_Tick_Large();
	this.confirmButton.setTransform(770.5,390.3,1,1,0,0,0,-0.5,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.confirmButton},{t:this.cancelButton}]}).wait(1));

	// Layer 4
	this.instance = new lib.turner_artproj_modal();
	this.instance.setTransform(477.2,272.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.WhiteFlash();
	this.instance_1.setTransform(662.3,389.5,41.249,24.374);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,-0.5,1320,780);


(lib.PreviewScene = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.container = new lib.PreviewContainer();
	this.container.setTransform(648.3,396.3,1,1,-3);

	this.timeline.addTween(cjs.Tween.get(this.container).wait(16).to({rotation:2.3,x:672.8,y:1200.5},14).wait(1));

	// Layer 2
	this.instance = new lib.WhiteFlash();
	this.instance.setTransform(662.3,389.5,41.249,24.374);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},17,cjs.Ease.get(1)).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,-0.5,1320,780);


(lib.ToolIconPlaceholder = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"out":0,"over":1,"down":2,"checked":3});

	// Layer 1
	this.container = new lib.ToolIconContainer();

	this.timeline.addTween(cjs.Tween.get(this.container).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(3));

	// Layer 3
	this.selected_bg = new lib.ToolIcon_Selected();
	this.selected_bg.setTransform(6,1);
	this.selected_bg.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.selected_bg).wait(3).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.4,-60.9,145.9,145.9);


(lib.scene_painting = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// previewscene
	this.instance = new lib.scene_modal_confirm();
	this.instance.setTransform(2010.4,390,1,1,0,0,0,660.2,389.5);

	this.preview = new lib.PreviewScene();
	this.preview.setTransform(-0.2,808.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.preview},{t:this.instance}]}).wait(1));

	// menu
	this.menu = new lib.DropdownMenu();

	this.timeline.addTween(cjs.Tween.get(this.menu).wait(1));

	// toolselectors
	this.tool_0 = new lib.ToolIconPlaceholder();
	this.tool_0.setTransform(210.1,716.4,1,1,64.6);

	this.tool_1 = new lib.ToolIconPlaceholder();
	this.tool_1.setTransform(167.8,602.8,1,1,90);

	this.tool_2 = new lib.ToolIconPlaceholder();
	this.tool_2.setTransform(167.7,529.2,1,1,90);

	this.tool_3 = new lib.ToolIconPlaceholder();
	this.tool_3.setTransform(167.7,455.7,1,1,90);

	this.tool_4 = new lib.ToolIconPlaceholder();
	this.tool_4.setTransform(167.7,382.1,1,1,90);

	this.tool_5 = new lib.ToolIconPlaceholder();
	this.tool_5.setTransform(168,308.6,1,1,90);

	this.tool_6 = new lib.ToolIconPlaceholder();
	this.tool_6.setTransform(168,235,1,1,90);

	this.tool_14 = new lib.ToolIconPlaceholder();
	this.tool_14.setTransform(984.1,113);

	this.tool_13 = new lib.ToolIconPlaceholder();
	this.tool_13.setTransform(876.7,113);

	this.tool_12 = new lib.ToolIconPlaceholder();
	this.tool_12.setTransform(769.3,113);

	this.tool_11 = new lib.ToolIconPlaceholder();
	this.tool_11.setTransform(662,113);

	this.tool_10 = new lib.ToolIconPlaceholder();
	this.tool_10.setTransform(554.6,113);

	this.tool_9 = new lib.ToolIconPlaceholder();
	this.tool_9.setTransform(447.3,113);

	this.tool_8 = new lib.ToolIconPlaceholder();
	this.tool_8.setTransform(347.9,113);

	this.tool_7 = new lib.ToolIconPlaceholder();
	this.tool_7.setTransform(231.2,116.1,1,1,134.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tool_7},{t:this.tool_8},{t:this.tool_9},{t:this.tool_10},{t:this.tool_11},{t:this.tool_12},{t:this.tool_13},{t:this.tool_14},{t:this.tool_6},{t:this.tool_5},{t:this.tool_4},{t:this.tool_3},{t:this.tool_2},{t:this.tool_1},{t:this.tool_0}]}).wait(1));

	// canvas
	this.canvas = new lib.Placeholder_Rectangle();
	this.canvas.setTransform(307,166,12.656,8.125);

	this.timeline.addTween(cjs.Tween.get(this.canvas).wait(1));

	// Layer 3
	this.instance_1 = new lib.turner_art_tool_gamescreen_tomjerry_v02pngcopy();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,2670.5,1659);


// stage content:
(lib.application = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Brush_Sticker_Bacon();
	this.instance.setTransform(110.5,2174.3,1,1,0,0,0,91,24.5);

	this.instance_1 = new lib.Brush_Sticker_FishFight();
	this.instance_1.setTransform(257.6,2229,1,1,0,0,0,90,51);

	this.instance_2 = new lib.Icon_Sticker_FishFight();
	this.instance_2.setTransform(228.6,2142.5,1,1,0,0,0,-0.5,4.5);

	this.instance_3 = new lib.Particle_Sprinkles();
	this.instance_3.setTransform(-220,2309.6,1,1,0,0,0,24,23);

	this.instance_4 = new lib.Brush_Sprinkles();
	this.instance_4.setTransform(83.6,1554.2);

	this.instance_5 = new lib.Icon_PictureHose_Sprinkles();
	this.instance_5.setTransform(79.3,1486.5,1,1,0,0,0,7,8);

	this.instance_6 = new lib.Particle_Generic();
	this.instance_6.setTransform(-317.7,2285.6);

	this.instance_7 = new lib.Particle_Sticker_Sprinkles();
	this.instance_7.setTransform(-543.2,2445,1,1,0,0,0,58,59.5);

	this.instance_8 = new lib.Brush_Balloon();
	this.instance_8.setTransform(-54.4,1557.1,1,1,0,0,0,43.5,58.5);

	this.instance_9 = new lib.Icon_PictureHose_Balloon();
	this.instance_9.setTransform(-13.9,1572,1,1,0,0,0,65,58);

	this.instance_10 = new lib.Brush_Splat();
	this.instance_10.setTransform(-245.3,1552.7,1,1,0,0,0,69.5,75);

	this.instance_11 = new lib.Icon_PictureHose_Splat();
	this.instance_11.setTransform(-281,1516.5);

	this.instance_12 = new lib.Brush_Cheese();
	this.instance_12.setTransform(-438.5,1534.1,1,1,0,0,0,51.5,49.5);

	this.instance_13 = new lib.Icon_PictureHose_Cheese();
	this.instance_13.setTransform(-464.3,1493.1);

	this.instance_14 = new lib.Brush_Sticker_Sprinkles();
	this.instance_14.setTransform(-573.3,2391.1,1,1,0,0,0,58,59.5);

	this.instance_15 = new lib.Brush_Sticker_Egg();
	this.instance_15.setTransform(-418.8,2365.1,1,1,0,0,0,56,55.5);

	this.instance_16 = new lib.Icon_Sticker_Egg();
	this.instance_16.setTransform(-443,2330);

	this.instance_17 = new lib.Icon_Sticker_Sprinkles();
	this.instance_17.setTransform(-592.3,2334);

	this.instance_18 = new lib.Brush_Sticker_PartyHorn();
	this.instance_18.setTransform(-773.3,2350.5,1,1,0,0,0,66,35);

	this.instance_19 = new lib.Icon_Sticker_PartyHorn();
	this.instance_19.setTransform(-777.8,2320.5);

	this.instance_20 = new lib.Brush_Sticker_IceCream();
	this.instance_20.setTransform(324.8,1888.2);

	this.instance_21 = new lib.Icon_Sticker_IceCream();
	this.instance_21.setTransform(259.2,1958);

	this.instance_22 = new lib.Brush_Sticker_Fish();
	this.instance_22.setTransform(-399.5,2170.2,1,1,0,0,0,99.5,43.5);

	this.instance_23 = new lib.Icon_Sticker_Fish();
	this.instance_23.setTransform(-420.3,2130.1);

	this.instance_24 = new lib.Icon_Sticker_Bacon();
	this.instance_24.setTransform(57.3,2133.3);

	this.instance_25 = new lib.Brush_Sticker_Cherry();
	this.instance_25.setTransform(-181.9,2203,1,1,0,0,0,44,67.5);

	this.instance_26 = new lib.Icon_Sticker_Cherry();
	this.instance_26.setTransform(-232.8,2139.6);

	this.instance_27 = new lib.Brush_Sticker_Star();
	this.instance_27.setTransform(-794.2,2194.8,1,1,0,0,0,40.5,54);

	this.instance_28 = new lib.Icon_Sticker_Star();
	this.instance_28.setTransform(-849.7,2088.8);

	this.instance_29 = new lib.Brush_Sticker_Silver();
	this.instance_29.setTransform(-60.9,2197.2,1,1,0,0,0,36,42);

	this.instance_30 = new lib.Icon_Sticker_Silver();
	this.instance_30.setTransform(-82.9,2145.5);

	this.instance_31 = new lib.Brush_Sticker_Tomato();
	this.instance_31.setTransform(-950.5,2168,1,1,0,0,0,34.5,32.5);

	this.instance_32 = new lib.Icon_Sticker_Tomato();
	this.instance_32.setTransform(-955.6,2135.3);

	this.instance_33 = new lib.Brush_Sticker_Gift();
	this.instance_33.setTransform(132.6,1967.2,1,1,0,0,0,32.5,43.5);

	this.instance_34 = new lib.Icon_Sticker_Gift();
	this.instance_34.setTransform(113.6,1943.4);

	this.instance_35 = new lib.Brush_Sticker_Pup();
	this.instance_35.setTransform(-47.6,2014.6,1,1,0,0,0,72.5,86);

	this.instance_36 = new lib.Icon_Sticker_Pup();
	this.instance_36.setTransform(-16.5,1970.2,1,1,0,0,0,56.5,56.5);

	this.instance_37 = new lib.Brush_Sticker_Candle();
	this.instance_37.setTransform(-170,1998.5,1,1,0,0,0,21.5,115);

	this.instance_38 = new lib.Icon_Sticker_Candle();
	this.instance_38.setTransform(-214.7,1927.1);

	this.instance_39 = new lib.Brush_Sticker_FightPan();
	this.instance_39.setTransform(-624.3,2182.8,1,1,0,0,0,109.5,76);

	this.instance_40 = new lib.Icon_Sticker_FightPan();
	this.instance_40.setTransform(-568,2176.7,1,1,0,0,0,56.5,60);

	this.instance_41 = new lib.Brush_Icing();
	this.instance_41.setTransform(-959.2,784.8,1,1,0,0,0,16,16);

	this.instance_42 = new lib.Brush_Eraser();
	this.instance_42.setTransform(-499,776.4,1,1,13.5);

	this.instance_43 = new lib.Icon_Icing();
	this.instance_43.setTransform(-965.1,975.5);

	this.instance_44 = new lib.Brush_SqueezeBottle();
	this.instance_44.setTransform(-678.9,784.8,1,1,0,0,0,16,16);

	this.instance_45 = new lib.Brush_Sticker_MouseTrap();
	this.instance_45.setTransform(-1040.1,1931.5,1,1,0,0,0,-5.7,2.9);

	this.instance_46 = new lib.Icon_Sticker_MouseTrap();
	this.instance_46.setTransform(-946.6,1959.9,1,1,0,0,0,11.3,7.1);

	this.instance_47 = new lib.Brush_Sticker_Jerry();
	this.instance_47.setTransform(-399.5,1948.7,1,1,0,0,0,11.3,7.1);

	this.instance_48 = new lib.Icon_Sticker_Jerry();
	this.instance_48.setTransform(-355.8,1945);

	this.instance_49 = new lib.Brush_Sticker_Pan();
	this.instance_49.setTransform(-794.5,1916.1,1,1,0,0,0,4.3,7.1);

	this.instance_50 = new lib.Icon_Sticker_Pan();
	this.instance_50.setTransform(-713.1,1926.2,1,1,0,0,0,7.1,-8.7);

	this.instance_51 = new lib.Brush_Sticker_Tom();
	this.instance_51.setTransform(-590.4,1919.9,1,1,0,0,0,7.1,-8.7);

	this.instance_52 = new lib.Icon_Sticker_Tom();
	this.instance_52.setTransform(-539.5,1938.9,1,1,0,0,0,2.8,4.2);

	this.instance_53 = new lib.Icon_PictureHose_TNT();
	this.instance_53.setTransform(-653.5,1500.9,1,1,0,0,0,2.8,4.2);

	this.instance_54 = new lib.Brush_Explosion();
	this.instance_54.setTransform(-668.2,1483.4,1,1,0,0,0,3.8,5.7);

	this.instance_55 = new lib.Icon_PictureHose_Fur2();
	this.instance_55.setTransform(-791.3,1492.3,1,1,0,0,0,2.8,4.2);

	this.instance_56 = new lib.Brush_Fur2();
	this.instance_56.setTransform(-820.6,1477.7,1,1,0,0,0,3.8,5.7);

	this.instance_57 = new lib.Icon_Pencil();
	this.instance_57.setTransform(-557.2,1001.8,1,1,0,0,0,-1.4,-0.1);

	this.instance_58 = new lib.scene_selectcanvas();
	this.instance_58.setTransform(1160.2,-884.2,1,1,0,0,0,660,390);

	this.instance_59 = new lib.Icon_Eraser_Medium();
	this.instance_59.setTransform(-469.6,919);

	this.instance_60 = new lib.Icon_PaintBrush();
	this.instance_60.setTransform(-811.4,933.7);

	this.instance_61 = new lib.Icon_SqueezeBottle();
	this.instance_61.setTransform(-666.2,986.5);

	this.instance_62 = new lib.Icon_PictureHose_Fur1();
	this.instance_62.setTransform(-956.9,1495.2);

	this.instance_63 = new lib.Brush_Fur1();
	this.instance_63.setTransform(-971,1478.2,1,1,0,0,0,2.8,4.2);

	this.instance_64 = new lib.Brush_PaintBrush();
	this.instance_64.setTransform(-833.3,759.7,1,1,0,0,0,8,11.5);

	this.instance_65 = new lib.Brush_Crayon();
	this.instance_65.setTransform(-570.3,806.5);

	this.instance_66 = new lib.scene_painting();
	this.instance_66.setTransform(972.2,-172.1,1,1,0,0,0,472,288.5);

	this.instance_67 = new lib.scene_title();
	this.instance_67.setTransform(-444,-172.1,1,1,0,0,0,472,288.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-588,-985.7,4230.7,3697.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;

    /* ENDS */

    // currently support for single sprite sheet per fla only...
    // auto-add the sprite sheet to the library asset manifest
    if( lib.properties && lib.properties.hasOwnProperty('manifest') ){ 
lib.properties.manifest.unshift( {src:"assets/images/application.flib_atlas_.json", type:"spritesheet", id:"application.flib_atlas_"} );
lib.properties.manifest.unshift( {src:"assets/images/application.flib_atlas_2.json", type:"spritesheet", id:"application.flib_atlas_2"} );
 }

    var uid_suffix = 0 ; // incremented and appended with each instantiated item, used to generate a unique name for each item spawned from lib.

    lib.getInstance = function( instLabel )
    {
        if( ! lib.hasOwnProperty(instLabel) ) throw new Error( 'No symbol named ' + instLabel + ' found in library' ) ;
        var inst = new lib[instLabel]( "independent", 0, false ) ;
        if( typeof inst.name == 'undefined' || ! inst.name ) inst.name = instLabel + (uid_suffix++); // Flash export doesn't 'name' objects that are given inst names on the timeline; so we do this manually!
        return inst ;
    };

    return lib ;

});