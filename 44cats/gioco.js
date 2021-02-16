(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"gioco_atlas_1", frames: [[0,1771,611,450],[3042,1994,611,450],[4593,2062,611,450],[5206,2062,611,450],[5819,2109,611,450],[6432,2109,611,415],[613,2140,611,415],[2066,439,321,47],[962,439,1102,502],[2389,439,44,45],[2435,439,44,45],[2272,2459,830,254],[1671,943,310,294],[4902,985,310,294],[7599,1270,310,294],[4281,2182,310,294],[4924,2924,310,294],[6159,2936,310,294],[313,2967,310,294],[625,2967,310,294],[5236,2971,310,294],[0,0,2596,437],[5472,0,960,600],[6434,0,960,600],[709,1673,793,465],[3798,1715,793,465],[3798,1264,371,370],[2598,0,1887,532],[3655,1994,114,174],[7984,2209,114,174],[7984,2385,114,174],[7984,2561,114,174],[7997,2737,114,174],[1226,2461,960,133],[0,439,960,600],[8036,227,154,156],[8036,385,154,156],[8036,543,154,156],[8036,701,154,156],[1504,1830,154,156],[4043,2587,231,306],[313,2223,248,287],[6159,2561,248,287],[3130,2856,248,287],[6471,2936,248,287],[8036,0,149,225],[5548,2971,237,272],[5787,2971,237,272],[3380,2997,237,272],[3619,2997,237,272],[1903,3006,237,272],[0,3043,237,272],[3858,3054,237,272],[4097,3054,237,272],[4336,3054,237,272],[4193,534,249,311],[2272,1994,768,463],[4043,2924,879,128],[0,2223,311,408],[7997,2913,98,168],[6026,2971,98,168],[4817,3054,98,168],[7997,3083,98,168],[1663,3102,98,168],[6745,2526,279,145],[4575,3054,240,266],[937,3102,240,266],[1179,3102,240,266],[1421,3102,240,266],[2142,3125,240,266],[2066,534,707,728],[2775,534,707,728],[3484,534,707,728],[5472,602,707,728],[6181,602,707,728],[6890,868,707,728],[962,943,707,728],[4193,985,707,728],[0,1041,707,728],[1671,1264,707,728],[2380,1264,707,728],[3089,1264,707,728],[4902,1332,707,728],[5611,1332,707,728],[6890,602,248,222],[7140,602,248,222],[6320,1332,248,222],[6570,1332,248,222],[2384,3125,248,222],[3130,3145,248,222],[6721,3156,248,222],[6971,3156,248,222],[6320,1598,960,509],[5214,985,249,311],[709,1041,249,311],[7911,1270,249,311],[709,1354,249,311],[7916,1583,249,311],[4593,1715,249,311],[7916,1896,249,311],[1226,2140,249,311],[1504,1994,766,465],[4487,0,983,983],[7671,2341,311,408],[3104,2446,311,408],[4281,2514,311,408],[4594,2514,311,408],[4907,2514,311,408],[5220,2514,311,408],[6432,2526,311,408],[313,2557,311,408],[626,2557,311,408],[5533,2561,311,408],[5846,2561,311,408],[3417,2587,311,408],[3730,2587,311,408],[939,2596,311,408],[1252,2596,311,408],[1565,2596,311,408],[1878,2596,311,408],[0,2633,311,408],[2191,2715,311,408],[2504,2715,311,408],[6745,2746,311,408],[7058,2746,311,408],[7371,2751,311,408],[7684,2751,311,408],[2817,2856,311,408],[937,3006,964,94],[3655,2182,624,403],[7599,868,550,400],[7045,2341,624,403],[1504,1673,155,155],[4193,847,180,135],[7396,0,638,866],[7282,1598,632,741],[7045,2109,172,196]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._44CatsFrenchLogoRGB = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._44CatsGreekLogoRGB = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._44CatsRussianLogoRGB = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._44CatsSpanishLogoRGB = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._44CatsVietnamLogoRGB_TM = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._44CatsLogo_0000_Livello2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._44CatsLogo_0001_Gruppo1copia3 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._44cats_legalline = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.alberi = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.audio_0001 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.audio_0002 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.bandiera = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.bar_0001 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.bar_0002 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.bar_0003 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.bar_0004 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.bar_0005 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.bar_0006 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.bar_0007 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.bar_0008 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.bar_0009 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.bgdiet = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.BG_PERS = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.BG_VIT_ = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.cerchio = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.citt = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Copiab_0001png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Copiab_0002png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Copiab_0003png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Copiab_0004png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Copiab_0005png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Copiabarraarancio = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Copiabg_home = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Copiac0001png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Copiac0002png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Copiac0003png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Copiac0004png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Copiac0005png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Copiaesti = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CopiaFFF_0001 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CopiaFFF_0002 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CopiaFFF_0003 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CopiaFFF_0004 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Copiagattofermo = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CopiaGS_0001 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CopiaGS_0002 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CopiaGS_0003 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CopiaGS_0004 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CopiaGS_0005 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CopiaGS_0006 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CopiaGS_0007 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CopiaGS_0008 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CopiaGS_0009 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CopiaGSS_0001png0004 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.Copiahelppng2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.Copialegal = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.Copialettere_0014png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.Copiam_0001png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.Copiam_0002png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.Copiam_0003png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.Copiam_0004png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.Copiam_0005png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.Copiapanca = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.Copias_0001png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.Copias_0002png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.Copias_0003png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.Copias_0004png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.Copias_0005png2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.e_0001 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.e_0002 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.e_0003 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.e_0004 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.e_0005 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.e_0006 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.e_0007 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.e_0008 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.e_0009 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.e_0010 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.e_0011 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.e_0012 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.e_0013 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.e_0014 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.g_0001 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.g_0003 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.g_0005 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.g_0007 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.g_0009 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.g_0011 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.g_0013 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.g_0015 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.gradient = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.GSS_0001png0001 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.GSS_0001png0002 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.GSS_0001png0003 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.GSS_0001png0005 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.GSS_0001png0006 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.GSS_0001png0007 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.GSS_0001png0008 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.GSS_0001png0009 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.help2 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.LAMPO = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0001 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0002 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0003 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0004 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0005 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0006 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0007 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0008 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0009 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0010 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0011 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0012 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0013 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0015 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0016 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0017 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0018 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0019 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0020 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0021 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0022 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0023 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0024 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0025 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.lettere_0026 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.marcia = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.NUBE = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.ostacoloinalto = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.pagina_cortesia_music_0005s_0001_Livello7 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.pagina_cortesia_music_0027_Oggettovettorialeavanzato = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.sasso = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.tutti_0004_Boss = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.tutti_0027_LampoCGI08 = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.uuuu = function() {
	this.initialize(ss["gioco_atlas_1"]);
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ZU = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {en:0,it:1,vn:2,fr:3,gr:4,ru:5,es:6};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		console.info(">>>lang:",mylang)
		
		if(mylang=="it")this.gotoAndStop("it")
		if(mylang=="vn")this.gotoAndStop("vn")
		if(mylang=="fr")this.gotoAndStop("fr")
		if(mylang=="gr")this.gotoAndStop("gr")
		if(mylang=="ru")this.gotoAndStop("ru")
		if(mylang=="es-es")this.gotoAndStop("es-es")
		else this.stop()
			
		
		/*
		en
		latam
		br
		it
		de
		fr
		ru
		tr
		es-es
		gr
		ua
		vn
		ar
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Livello_2
	this.instance = new lib._44CatsLogo_0001_Gruppo1copia3();
	this.instance.setTransform(-236.1,-126.2,0.7733,0.7733,11.8168);

	this.instance_1 = new lib._44CatsLogo_0000_Livello2();
	this.instance_1.setTransform(-236.55,-125.9,0.7733,0.7733,11.8168);

	this.instance_2 = new lib._44CatsVietnamLogoRGB_TM();
	this.instance_2.setTransform(-250,-85,0.6959,0.6959);

	this.instance_3 = new lib._44CatsFrenchLogoRGB();
	this.instance_3.setTransform(-250,-85,0.6959,0.6959);

	this.instance_4 = new lib._44CatsGreekLogoRGB();
	this.instance_4.setTransform(-250,-85,0.6959,0.6959);

	this.instance_5 = new lib._44CatsRussianLogoRGB();
	this.instance_5.setTransform(-250,-85,0.6959,0.6959);

	this.instance_6 = new lib._44CatsSpanishLogoRGB();
	this.instance_6.setTransform(-250,-85,0.6959,0.6959);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-302.2,-126.2,528.6,411.2);


(lib.Skate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Copia s_0001.png 2
	this.instance = new lib.Copias_0001png2();
	this.instance.setTransform(-60,-60,0.5,0.5);

	this.instance_1 = new lib.Copias_0002png2();
	this.instance_1.setTransform(-60,-60,0.5,0.5);

	this.instance_2 = new lib.Copias_0003png2();
	this.instance_2.setTransform(-60,-60,0.5,0.5);

	this.instance_3 = new lib.Copias_0004png2();
	this.instance_3.setTransform(-60,-60,0.5,0.5);

	this.instance_4 = new lib.Copias_0005png2();
	this.instance_4.setTransform(-60,-60,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// Livello_2
	this.instance_5 = new lib.uuuu();
	this.instance_5.setTransform(-124,-92,1.5247,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124,-92,262.3,196);


(lib.Simbolo24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bar_0001.png
	this.instance = new lib.bar_0001();
	this.instance.setTransform(-147,-139);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,-139,310,294);


(lib.Simbolo22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Copia c-0001.png 2
	this.instance = new lib.Copiac0001png2();
	this.instance.setTransform(-2,1,0.5,0.5);

	this.instance_1 = new lib.Copiac0002png2();
	this.instance_1.setTransform(-2,1,0.5,0.5);

	this.instance_2 = new lib.Copiac0003png2();
	this.instance_2.setTransform(-2,1,0.5,0.5);

	this.instance_3 = new lib.Copiac0004png2();
	this.instance_3.setTransform(-2,1,0.5,0.5);

	this.instance_4 = new lib.Copiac0005png2();
	this.instance_4.setTransform(-2,1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// Livello_2
	this.instance_5 = new lib.uuuu();
	this.instance_5.setTransform(-50,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-58,172,196);


(lib.Simbolo21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Copia m_0001.png 2
	this.instance = new lib.Copiam_0001png2();
	this.instance.setTransform(-24,-43,0.5,0.5);

	this.instance_1 = new lib.Copiam_0002png2();
	this.instance_1.setTransform(-24,-43,0.5,0.5);

	this.instance_2 = new lib.Copiam_0003png2();
	this.instance_2.setTransform(-24,-43,0.5,0.5);

	this.instance_3 = new lib.Copiam_0004png2();
	this.instance_3.setTransform(-24,-43,0.5,0.5);

	this.instance_4 = new lib.Copiam_0005png2();
	this.instance_4.setTransform(-24,-43,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// Livello_2
	this.instance_5 = new lib.uuuu();
	this.instance_5.setTransform(-86,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-99,172,196);


(lib.Simbolo20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Copia b_0001.png 2
	this.instance = new lib.Copiab_0001png2();
	this.instance.setTransform(-28,-43,0.5,0.5);

	this.instance_1 = new lib.Copiab_0002png2();
	this.instance_1.setTransform(-28,-43,0.5,0.5);

	this.instance_2 = new lib.Copiab_0003png2();
	this.instance_2.setTransform(-28,-43,0.5,0.5);

	this.instance_3 = new lib.Copiab_0004png2();
	this.instance_3.setTransform(-28,-43,0.5,0.5);

	this.instance_4 = new lib.Copiab_0005png2();
	this.instance_4.setTransform(-28,-43,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// Livello_2
	this.instance_5 = new lib.uuuu();
	this.instance_5.setTransform(-86,-98);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-98,172,196);


(lib.Simbolo11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.tutti_0004_Boss();
	this.instance.setTransform(-227.6,-308.95,0.7135,0.7135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.6,-308.9,455.2,617.9);


(lib.Simbolo7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.pagina_cortesia_music_0005s_0001_Livello7();
	this.instance.setTransform(-309,-202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309,-202,624,403);


(lib.Simbolo6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_4
	this.instance = new lib.Copiabarraarancio();
	this.instance.setTransform(-480,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,0,960,133);


(lib.Simbolo5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.tutti_0027_LampoCGI08();
	this.instance.setTransform(-232.5,-272.6,0.7358,0.7358);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232.5,-272.6,465,545.2);


(lib.Simbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.NUBE();
	this.instance.setTransform(-311,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311,-203,624,403);


(lib.pulsPlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.testo = new cjs.Text("", "normal 700 36px 'Open Sans'", "#FFFFFF");
	this.testo.name = "testo";
	this.testo.textAlign = "center";
	this.testo.lineHeight = 43;
	this.testo.lineWidth = 359;
	this.testo.parent = this;
	this.testo.setTransform(0.05,-27.05);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.testo);
	}

	this.timeline.addTween(cjs.Tween.get(this.testo).wait(1));

	// Livello_2
	this.instance = new lib.bandiera();
	this.instance.setTransform(-195,-71,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195,-71,415,127);


(lib.puff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_13 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// e_0001.png
	this.instance = new lib.e_0001();
	this.instance.setTransform(-353.5,-364);

	this.instance_1 = new lib.e_0002();
	this.instance_1.setTransform(-353.5,-364);

	this.instance_2 = new lib.e_0003();
	this.instance_2.setTransform(-353.5,-364);

	this.instance_3 = new lib.e_0004();
	this.instance_3.setTransform(-353.5,-364);

	this.instance_4 = new lib.e_0005();
	this.instance_4.setTransform(-353.5,-364);

	this.instance_5 = new lib.e_0006();
	this.instance_5.setTransform(-353.5,-364);

	this.instance_6 = new lib.e_0007();
	this.instance_6.setTransform(-353.5,-364);

	this.instance_7 = new lib.e_0008();
	this.instance_7.setTransform(-353.5,-364);

	this.instance_8 = new lib.e_0009();
	this.instance_8.setTransform(-353.5,-364);

	this.instance_9 = new lib.e_0010();
	this.instance_9.setTransform(-353.5,-364);

	this.instance_10 = new lib.e_0011();
	this.instance_10.setTransform(-353.5,-364);

	this.instance_11 = new lib.e_0012();
	this.instance_11.setTransform(-353.5,-364);

	this.instance_12 = new lib.e_0013();
	this.instance_12.setTransform(-353.5,-364);

	this.instance_13 = new lib.e_0014();
	this.instance_13.setTransform(-353.5,-364);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-353.5,-364,707,728);


(lib.Poppo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_14 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// e_0001.png
	this.instance = new lib.e_0001();
	this.instance.setTransform(-177,-182,0.5,0.5);

	this.instance_1 = new lib.e_0002();
	this.instance_1.setTransform(-177,-182,0.5,0.5);

	this.instance_2 = new lib.e_0003();
	this.instance_2.setTransform(-177,-182,0.5,0.5);

	this.instance_3 = new lib.e_0004();
	this.instance_3.setTransform(-177,-182,0.5,0.5);

	this.instance_4 = new lib.e_0005();
	this.instance_4.setTransform(-177,-182,0.5,0.5);

	this.instance_5 = new lib.e_0006();
	this.instance_5.setTransform(-177,-182,0.5,0.5);

	this.instance_6 = new lib.e_0007();
	this.instance_6.setTransform(-177,-182,0.5,0.5);

	this.instance_7 = new lib.e_0008();
	this.instance_7.setTransform(-177,-182,0.5,0.5);

	this.instance_8 = new lib.e_0009();
	this.instance_8.setTransform(-177,-182,0.5,0.5);

	this.instance_9 = new lib.e_0010();
	this.instance_9.setTransform(-177,-182,0.5,0.5);

	this.instance_10 = new lib.e_0011();
	this.instance_10.setTransform(-177,-182,0.5,0.5);

	this.instance_11 = new lib.e_0012();
	this.instance_11.setTransform(-177,-182,0.5,0.5);

	this.instance_12 = new lib.e_0013();
	this.instance_12.setTransform(-177,-182,0.5,0.5);

	this.instance_13 = new lib.e_0014();
	this.instance_13.setTransform(-177,-182,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177,-182,353.5,364);


(lib.Palazzi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.citt();
	this.instance.setTransform(0,0,1.1239,1.1224);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Palazzi, new cjs.Rectangle(0,0,1887,532), null);


(lib.Ostacolo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.Copiapanca();
	this.instance.setTransform(-140,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ostacolo3, new cjs.Rectangle(-140,-146,279,145), null);


(lib.Ostacolo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_2
	this.instance = new lib.sasso();
	this.instance.setTransform(-92,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ostacolo2, new cjs.Rectangle(-92,-135,180,135), null);


(lib.Ostacolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.Copiaesti();
	this.instance.setTransform(-56,-146,0.4771,0.4771);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ostacolo1, new cjs.Rectangle(-56,-146,110.2,146), null);


(lib.Lettere = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lettere_0001.png
	this.instance = new lib.lettere_0001();
	this.instance.setTransform(-50,-66,0.3211,0.3211);

	this.instance_1 = new lib.lettere_0002();
	this.instance_1.setTransform(-50,-66,0.3211,0.3211);

	this.instance_2 = new lib.lettere_0003();
	this.instance_2.setTransform(-50,-66,0.3211,0.3211);

	this.instance_3 = new lib.lettere_0004();
	this.instance_3.setTransform(-50,-66,0.3211,0.3211);

	this.instance_4 = new lib.lettere_0005();
	this.instance_4.setTransform(-50,-66,0.3211,0.3211);

	this.instance_5 = new lib.lettere_0006();
	this.instance_5.setTransform(-50,-66,0.3211,0.3211);

	this.instance_6 = new lib.lettere_0007();
	this.instance_6.setTransform(-50,-66,0.3211,0.3211);

	this.instance_7 = new lib.lettere_0008();
	this.instance_7.setTransform(-50,-66,0.3211,0.3211);

	this.instance_8 = new lib.lettere_0009();
	this.instance_8.setTransform(-50,-66,0.3211,0.3211);

	this.instance_9 = new lib.lettere_0010();
	this.instance_9.setTransform(-50,-66,0.3211,0.3211);

	this.instance_10 = new lib.lettere_0011();
	this.instance_10.setTransform(-50,-66,0.3211,0.3211);

	this.instance_11 = new lib.lettere_0012();
	this.instance_11.setTransform(-50,-66,0.3211,0.3211);

	this.instance_12 = new lib.lettere_0013();
	this.instance_12.setTransform(-50,-66,0.3211,0.3211);

	this.instance_13 = new lib.Copialettere_0014png2();
	this.instance_13.setTransform(-50,-66,0.3211,0.3211);

	this.instance_14 = new lib.lettere_0015();
	this.instance_14.setTransform(-50,-66,0.3211,0.3211);

	this.instance_15 = new lib.lettere_0016();
	this.instance_15.setTransform(-50,-66,0.3211,0.3211);

	this.instance_16 = new lib.lettere_0017();
	this.instance_16.setTransform(-50,-66,0.3211,0.3211);

	this.instance_17 = new lib.lettere_0018();
	this.instance_17.setTransform(-50,-66,0.3211,0.3211);

	this.instance_18 = new lib.lettere_0019();
	this.instance_18.setTransform(-50,-66,0.3211,0.3211);

	this.instance_19 = new lib.lettere_0020();
	this.instance_19.setTransform(-50,-66,0.3211,0.3211);

	this.instance_20 = new lib.lettere_0021();
	this.instance_20.setTransform(-50,-66,0.3211,0.3211);

	this.instance_21 = new lib.lettere_0022();
	this.instance_21.setTransform(-50,-66,0.3211,0.3211);

	this.instance_22 = new lib.lettere_0023();
	this.instance_22.setTransform(-50,-66,0.3211,0.3211);

	this.instance_23 = new lib.lettere_0024();
	this.instance_23.setTransform(-50,-66,0.3211,0.3211);

	this.instance_24 = new lib.lettere_0025();
	this.instance_24.setTransform(-50,-66,0.3211,0.3211);

	this.instance_25 = new lib.lettere_0026();
	this.instance_25.setTransform(-50,-66,0.3211,0.3211);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-66,99.9,131);


(lib.LAMPOJAMPSKATE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_2
	this.instance = new lib.GSS_0001png0001();
	this.instance.setTransform(-94,-90,0.85,0.85);

	this.instance_1 = new lib.GSS_0001png0002();
	this.instance_1.setTransform(-94,-90,0.85,0.85);

	this.instance_2 = new lib.GSS_0001png0003();
	this.instance_2.setTransform(-94,-90,0.85,0.85);

	this.instance_3 = new lib.CopiaGSS_0001png0004();
	this.instance_3.setTransform(-94,-90,0.85,0.85);

	this.instance_4 = new lib.GSS_0001png0005();
	this.instance_4.setTransform(-94,-90,0.85,0.85);

	this.instance_5 = new lib.GSS_0001png0006();
	this.instance_5.setTransform(-94,-90,0.85,0.85);

	this.instance_6 = new lib.GSS_0001png0007();
	this.instance_6.setTransform(-94,-90,0.85,0.85);

	this.instance_7 = new lib.GSS_0001png0008();
	this.instance_7.setTransform(-94,-90,0.85,0.85);

	this.instance_8 = new lib.GSS_0001png0009();
	this.instance_8.setTransform(-94,-90,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-90,211.7,264.4);


(lib.LAMPO_SI = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_2
	this.instance = new lib.CopiaGS_0001();
	this.instance.setTransform(-102,-103,0.85,0.85);

	this.instance_1 = new lib.CopiaGS_0002();
	this.instance_1.setTransform(-102,-103,0.85,0.85);

	this.instance_2 = new lib.CopiaGS_0003();
	this.instance_2.setTransform(-102,-103,0.85,0.85);

	this.instance_3 = new lib.CopiaGS_0004();
	this.instance_3.setTransform(-102,-103,0.85,0.85);

	this.instance_4 = new lib.CopiaGS_0005();
	this.instance_4.setTransform(-102,-103,0.85,0.85);

	this.instance_5 = new lib.CopiaGS_0006();
	this.instance_5.setTransform(-102,-103,0.85,0.85);

	this.instance_6 = new lib.CopiaGS_0007();
	this.instance_6.setTransform(-102,-103,0.85,0.85);

	this.instance_7 = new lib.CopiaGS_0008();
	this.instance_7.setTransform(-102,-103,0.85,0.85);

	this.instance_8 = new lib.CopiaGS_0009();
	this.instance_8.setTransform(-102,-103,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-103,201.5,231.2);


(lib.lampo_run = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_2
	this.instance = new lib.g_0001();
	this.instance.setTransform(18,-43,0.85,0.85);

	this.instance_1 = new lib.g_0003();
	this.instance_1.setTransform(18,-43,0.85,0.85);

	this.instance_2 = new lib.g_0005();
	this.instance_2.setTransform(18,-43,0.85,0.85);

	this.instance_3 = new lib.g_0007();
	this.instance_3.setTransform(18,-43,0.85,0.85);

	this.instance_4 = new lib.g_0009();
	this.instance_4.setTransform(18,-43,0.85,0.85);

	this.instance_5 = new lib.g_0011();
	this.instance_5.setTransform(18,-43,0.85,0.85);

	this.instance_6 = new lib.g_0013();
	this.instance_6.setTransform(18,-43,0.85,0.85);

	this.instance_7 = new lib.g_0015();
	this.instance_7.setTransform(18,-43,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18,-43,210.8,188.7);


(lib.lampo_JUMP = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_3 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(1));

	// FFF_0001.png
	this.instance = new lib.CopiaFFF_0001();
	this.instance.setTransform(18,-91,0.85,0.85);

	this.instance_1 = new lib.CopiaFFF_0002();
	this.instance_1.setTransform(18,-91,0.85,0.85);

	this.instance_2 = new lib.CopiaFFF_0003();
	this.instance_2.setTransform(18,-91,0.85,0.85);

	this.instance_3 = new lib.CopiaFFF_0004();
	this.instance_3.setTransform(15,-49,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,-91,213.8,286);


(lib.Interpolazione1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello 1
	this.instance = new lib.LAMPO();
	this.instance.setTransform(-1216,-274,0.5517,0.5517);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1216,-274,542.3,542.3);


(lib.Help3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.t5 = new cjs.Text("Fai attenzione  a questi oggetti, se non li salti, il gioco finisce!", "23px 'CantoraOne'", "#F7702C");
	this.t5.name = "t5";
	this.t5.textAlign = "center";
	this.t5.lineHeight = 31;
	this.t5.lineWidth = 451;
	this.t5.parent = this;
	this.t5.setTransform(113.05,73.7);

	this.instance = new lib.Bitmap6();
	this.instance.setTransform(-396.5,-232.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.t5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Help3, new cjs.Rectangle(-396.5,-232.5,793,465), null);


(lib.Help2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.t4 = new cjs.Text("Con lo skatebord, sarai invunnerabile per 10 secondi.", "23px 'CantoraOne'", "#F7702C");
	this.t4.name = "t4";
	this.t4.textAlign = "center";
	this.t4.lineHeight = 27;
	this.t4.lineWidth = 339;
	this.t4.parent = this;
	this.t4.setTransform(119.7,79.75);

	this.t3 = new cjs.Text("Con questi oggetti guadagni 100 punti extra !", "23px 'CantoraOne'", "#F7702C");
	this.t3.name = "t3";
	this.t3.textAlign = "center";
	this.t3.lineHeight = 27;
	this.t3.lineWidth = 339;
	this.t3.parent = this;
	this.t3.setTransform(119.7,-74.25);

	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-396.5,-232.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.t3},{t:this.t4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Help2, new cjs.Rectangle(-396.5,-232.5,793,465), null);


(lib.Help1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.t2 = new cjs.Text("Fai \"Tap\"\nper saltare!", "23px 'CantoraOne'", "#F7702C");
	this.t2.name = "t2";
	this.t2.textAlign = "center";
	this.t2.lineHeight = 31;
	this.t2.lineWidth = 152;
	this.t2.parent = this;
	this.t2.setTransform(256.85,40.8);

	this.t1 = new cjs.Text("Cliccail tasto destro \ndel mouse per saltare!", "23px 'CantoraOne'", "#F7702C");
	this.t1.name = "t1";
	this.t1.textAlign = "center";
	this.t1.lineHeight = 31;
	this.t1.lineWidth = 152;
	this.t1.parent = this;
	this.t1.setTransform(256.85,-155.2);

	this.instance = new lib.help2();
	this.instance.setTransform(-370,-233);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.t1},{t:this.t2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Help1, new cjs.Rectangle(-370,-233,766,465), null);


(lib.FinaleOk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.t3ok = new cjs.Text("", "normal 700 27px 'Open Sans'", "#408A3B");
	this.t3ok.name = "t3ok";
	this.t3ok.textAlign = "center";
	this.t3ok.lineHeight = 39;
	this.t3ok.lineWidth = 473;
	this.t3ok.parent = this;
	this.t3ok.setTransform(-1.6,72.55);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.t3ok);
	}

	this.t2ok = new cjs.Text("", "normal 700 27px 'Open Sans'", "#408A3B");
	this.t2ok.name = "t2ok";
	this.t2ok.textAlign = "center";
	this.t2ok.lineHeight = 39;
	this.t2ok.lineWidth = 474;
	this.t2ok.parent = this;
	this.t2ok.setTransform(-0.8,30);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.t2ok);
	}

	this.t1ok = new cjs.Text("", "normal 700 50px 'Open Sans'", "#408A3B");
	this.t1ok.name = "t1ok";
	this.t1ok.textAlign = "center";
	this.t1ok.lineHeight = 68;
	this.t1ok.lineWidth = 476;
	this.t1ok.parent = this;
	this.t1ok.setTransform(0,-106.25);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.t1ok);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1ok},{t:this.t2ok},{t:this.t3ok}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FinaleOk, new cjs.Rectangle(-239.9,-108.2,479.9,219.5), null);


(lib.FinaleKO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.t3ko = new cjs.Text("", "normal 700 27px 'Open Sans'", "#A6492A");
	this.t3ko.name = "t3ko";
	this.t3ko.textAlign = "center";
	this.t3ko.lineHeight = 39;
	this.t3ko.lineWidth = 466;
	this.t3ko.parent = this;
	this.t3ko.setTransform(-1.6,70.55);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.t3ko);
	}

	this.t2ko = new cjs.Text("", "normal 700 27px 'Open Sans'", "#A6492A");
	this.t2ko.name = "t2ko";
	this.t2ko.textAlign = "center";
	this.t2ko.lineHeight = 39;
	this.t2ko.lineWidth = 468;
	this.t2ko.parent = this;
	this.t2ko.setTransform(-0.8,28);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.t2ko);
	}

	this.t1ko = new cjs.Text("", "normal 700 50px 'Open Sans'", "#A6492A");
	this.t1ko.name = "t1ko";
	this.t1ko.textAlign = "center";
	this.t1ko.lineHeight = 70;
	this.t1ko.lineWidth = 469;
	this.t1ko.parent = this;
	this.t1ko.setTransform(0,-114.25);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.t1ko);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1ko},{t:this.t2ko},{t:this.t3ko}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FinaleKO, new cjs.Rectangle(-236.6,-116.2,473.29999999999995,225.5), null);


(lib.Simbolo1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah7C0QgKgIgCgMQgDgMAHgKIDVk1QAIgKAMgCQAMgDAKAIQAKAHADAMQACAMgHAKIjVE1QgHAKgMACIgHABQgIAAgIgFg");
	this.shape.setTransform(-0.0016,-0.0234);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABlC4QgMgCgHgKIjVk1QgHgKACgMQADgMAKgHQAKgIAMADQAMACAIAKIDVE1QAHAKgDAMQgCAMgKAIQgIAFgIAAIgHgBg");
	this.shape_1.setTransform(0.0016,-0.0234);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-18.5,27.4,37);


(lib.ostacolo_basso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_5
	this.instance = new lib.ostacoloinalto();
	this.instance.setTransform(-140,-160,0.3959,0.3959);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-160,217.8,158.4);


(lib.Copiaostacolo_basso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_5
	this.instance = new lib.ostacoloinalto();
	this.instance.setTransform(-140,-160,0.3959,0.3959);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-160,217.8,158.4);


(lib.COPY = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		if(mylang=="it")this.gotoAndStop(1)
		else this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Livello_1
	this.instance = new lib.Copialegal();
	this.instance.setTransform(-90,0,0.3656,0.3656);

	this.instance_1 = new lib._44cats_legalline();
	this.instance_1.setTransform(-91,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,0,322.4,47);


(lib.bollo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.cerchio();
	this.instance.setTransform(-103.3,-103,0.5569,0.5569);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.3,-103,206.6,206.1);


(lib.Bg4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello 1
	this.instance = new lib.marcia();
	this.instance.setTransform(-384,553);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bg4, new cjs.Rectangle(-384,553,964,94), null);


(lib.Bg3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello 1
	this.instance = new lib.alberi();
	this.instance.setTransform(0,145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bg3, new cjs.Rectangle(0,145,1102,502), null);


(lib.Bg1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_3
	this.instance = new lib.bgdiet();
	this.instance.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bg1, new cjs.Rectangle(0,50,2596,437), null);


(lib.Bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhK/Au4MAAAhdvMCV/AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bg, new cjs.Rectangle(-480,-300,960,600), null);


(lib.Avanti = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.testo = new cjs.Text("Gioca", "18px 'CantoraOne'", "#FFFFFF");
	this.testo.name = "testo";
	this.testo.textAlign = "center";
	this.testo.lineHeight = 25;
	this.testo.lineWidth = 92;
	this.testo.parent = this;
	this.testo.setTransform(-16.5,-18.75,1.5976,1.5976);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AO7ghInlltQgDgCgCgBQgNgGgLAJQgQALAAAXIAABqI1NAAQgQAAgLAMQgLAMAAASIAAG0QAAAQALALQALAMAQAAIVNAAIAABqQAAAXAQALQANAJALgFQADgCACgCIHlltQAQgLAAgXQAAgVgQgMg");
	this.shape.setTransform(-0.025,-0.0027);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B05A").s().p("AG5GPQgQgLAAgXIAAhqI1NAAQgQAAgLgMQgLgLAAgQIAAm0QAAgSALgMQALgMAQAAIVNAAIAAhqQAAgXAQgLQALgJANAGIAFADIHlFtQAQAMAAAVQAAAXgQALInlFtIgFAEQgEACgFAAQgHAAgIgGg");
	this.shape_1.setTransform(-0.025,-0.0027);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.testo}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Avanti, new cjs.Rectangle(-98.6,-41.9,197.2,83.9), null);


(lib.Audio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Livello 1
	this.instance = new lib.audio_0001();
	this.instance.setTransform(-22,-23);

	this.instance_1 = new lib.audio_0002();
	this.instance_1.setTransform(-22,-23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Livello_2
	this.instance_2 = new lib.pagina_cortesia_music_0027_Oggettovettorialeavanzato();
	this.instance_2.setTransform(-50,-50,0.6432,0.6432);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,99.7,99.7);


(lib.SCROL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello 3
	this.instance = new lib.Simbolo1_1("synched",0);
	this.instance.setTransform(0.75,-0.65,1.3,1.3);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-16,-20,31,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AFqAAQAACWhqBqQhqBqiWAAQgHAAgHAAQiMgGhkhkQhrhqAAiWQAAiVBrhqQBphqCVAAQCWAABqBqQBqBqAACVg");
	this.shape.setTransform(0.65,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B05A").s().p("AgOFpQiMgFhlhlQhqhqABiVQgBiVBqhqQBqhpCVAAQCVAABqBpQBrBqAACVQAACVhrBqQhqBqiVAAIgOAAg");
	this.shape_1.setTransform(0.65,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-39.1,75.3,75.30000000000001);


(lib.obstacleBottom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello 1
	this.instance = new lib.ostacolo_basso("synched",0);
	this.instance.setTransform(37.85,-213.95,1.2054,1.2054,0,0,0,0.1,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AnzfQMAAAg+fIPnAAMAAAA+fg");
	this.shape.setTransform(0,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.obstacleBottom, new cjs.Rectangle(-131,-406.9,262.5,406.9), null);


(lib.help0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_2
	this.t6 = new cjs.Text("Raccogli la lettera:", "40px 'CantoraOne'", "#F7702C");
	this.t6.name = "t6";
	this.t6.textAlign = "center";
	this.t6.lineHeight = 52;
	this.t6.lineWidth = 436;
	this.t6.parent = this;
	this.t6.setTransform(79.55,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.t6).wait(1));

	// Livello_3
	this.explo = new lib.puff();
	this.explo.name = "explo";
	this.explo.setTransform(73.25,33,0.7265,0.7265);

	this.timeline.addTween(cjs.Tween.get(this.explo).wait(1));

	// Livello_5
	this.lettera = new lib.Lettere();
	this.lettera.name = "lettera";
	this.lettera.setTransform(73.9,32.65,1.7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.lettera).wait(1));

	// Livello_4
	this.instance = new lib.bollo("synched",0);
	this.instance.setTransform(73.3,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Livello_1
	this.instance_1 = new lib.Copiahelppng2();
	this.instance_1.setTransform(-385,-231);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.help0, new cjs.Rectangle(-385,-231.4,768,528.9), null);


(lib.obstacleBottom_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello 1
	this.instance_1 = new lib.Copiaostacolo_basso("synched",0);
	this.instance_1.setTransform(37.85,-213.95,1.2054,1.2054,0,0,0,0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.004)").s().p("AnzfQMAAAg+fIPnAAMAAAA+fg");
	this.shape_1.setTransform(0,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.obstacleBottom_1, new cjs.Rectangle(-131,-406.9,262.5,406.9), null);


(lib.dragon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_5
	this.instance = new lib.lampo_run("synched",0);
	this.instance.setTransform(-5.95,-13.85,1,1,0,0,0,132.4,52.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.3,-109,210.8,188.7);


(lib.Bonus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Livello_1
	this.instance = new lib.Simbolo20();
	this.instance.setTransform(1.25,-2.2);

	this.instance_1 = new lib.Simbolo21();
	this.instance_1.setTransform(1.25,-2.2);

	this.instance_2 = new lib.Simbolo22();
	this.instance_2.setTransform(1.75,-1.7,1,1,0,0,0,37.5,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.7,-101.2,173,197);


(lib.lampo_skate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_8 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// Livello_6
	this.instance = new lib.LAMPOJAMPSKATE("synched",0);
	this.instance.setTransform(0.75,-175.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.2,-265.5,211.60000000000002,264.4);


(lib.PopHelp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Livello_19
	this.chiudi = new lib.SCROL();
	this.chiudi.name = "chiudi";
	this.chiudi.setTransform(358.15,-201.8);

	this.avanti = new lib.Avanti();
	this.avanti.name = "avanti";
	this.avanti.setTransform(271.8,207.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.avanti},{t:this.chiudi}]}).wait(1));

	// Livello_2
	this.help4 = new lib.help0();
	this.help4.name = "help4";
	this.help4.setTransform(-1.95,3.5);

	this.timeline.addTween(cjs.Tween.get(this.help4).wait(1));

	// OBJECTS
	this.help1 = new lib.Help1();
	this.help1.name = "help1";
	this.help1.setTransform(-13.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.help1).wait(1));

	// OBJECTS
	this.help2 = new lib.Help2();
	this.help2.name = "help2";
	this.help2.setTransform(-13.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.help2).wait(1));

	// OBJECTS
	this.help3 = new lib.Help3();
	this.help3.name = "help3";
	this.help3.setTransform(-13.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.help3).wait(1));

	// Livello_12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EhK/Au4MAAAhdvMCV/AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PopHelp, new cjs.Rectangle(-480,-300,960,601), null);


(lib.Gatto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Livello_1
	this.instance = new lib.Copiagattofermo();
	this.instance.setTransform(-45,-184,0.85,0.85);

	this.gatto = new lib.dragon();
	this.gatto.name = "gatto";
	this.gatto.setTransform(26.95,-107,1,1,0,0,0,4.9,-27.3);

	this.instance_1 = new lib.lampo_JUMP();
	this.instance_1.setTransform(12.25,-101.7,1,1,0,0,0,132.4,52.3);

	this.instance_2 = new lib.LAMPO_SI();
	this.instance_2.setTransform(11.4,-128.5,1,1,0,0,0,0.1,0.1);

	this.instance_3 = new lib.Simbolo24("synched",0);
	this.instance_3.setTransform(7.6,-127.6);
	this.instance_3.alpha = 0.8711;

	this.instance_4 = new lib.lampo_skate();
	this.instance_4.setTransform(3.05,0.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.gatto}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_3},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.4,-266.6,310,294);


// stage content:
(lib.gioco = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {home:29,gioco:30,finaleOK:31,finaleKO:39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,9,29,30,31,38,39,49];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		root = this;
		loopStart = false
		
		function getURLParameter(name) {
		  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
		}
		//mylang = "it"
		mylang = getURLParameter('lang');
		root.mylang = mylang
		console.info(mylang)
		/*
		function loadGioca(e){
			var text = new createjs.Text(text0001, "bold 24px Lora", "#ffffff");
			text.textAlign = "center"
			text.textBaseline  = "middle"
			btn_gioca.addChild(text);
		}
		
		
		
		
		
		function fl_ClickToGoToAndStopAtFrame(e)
		{
			console.info("CLICK");
			root.gotoAndStop("choose_level");
			//root.gotoAndPlay("finish");
			root.removeChild(btn_gioca);
			btn_gioca = null
		}
		
		*/
		queue = new createjs.LoadQueue();
		createjs.Sound.alternateExtensions = ["mp3"];
		queue.installPlugin(createjs.Sound);
		queue.addEventListener("complete", handleComplete);
		//queue.loadFile({id:"loop", src:"sounds/loop.ogg"});
		queue.loadFile({id:"bonus", src:"sounds/bonus.ogg"});
		queue.loadFile({id:"endko", src:"sounds/endko.ogg"});
		queue.loadFile({id:"endok", src:"sounds/endok.ogg"});
		queue.loadFile({id:"hit", src:"sounds/hit.ogg"});
		queue.loadFile({id:"invincibile", src:"sounds/invincibile.ogg"});
		queue.loadFile({id:"jump", src:"sounds/jump.ogg"});
		queue.loadFile({id:"jumpskate", src:"sounds/jumpskate.ogg"});
		queue.loadFile({id:"loop", src:"sounds/loop.ogg"});
		queue.loadFile({id:"loopskate", src:"sounds/loopskate.ogg"});
		queue.loadFile({id:"passo1", src:"sounds/passo1.ogg"});
		queue.loadFile({id:"passo2", src:"sounds/passo2.ogg"});
		queue.loadFile({id:"tap", src:"sounds/tap.ogg"});
		
		loopStart = false
		
		var audioOn = true
		root.loop = null
		root.audioBtn.addEventListener("click",audioClick)
		root.audioBtn.alpha = 0
		function audioClick(){
			if(audioOn){
				audioOn = false
				root.loop .volume = 0
				root.audioBtn.gotoAndStop(1)
			}else{
				audioOn = true
				root.loop .volume = 1
				root.audioBtn.gotoAndStop(0)
			}
		}
		
		stepLoading = 0
		
		function avanzaCheck(){
			stepLoading++	
			if(stepLoading==2)root.play()
		}
		
		
		
		function handleComplete(event) {
			console.info("AUDIO CARICATO")
			//var ppc = new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_NONE, loop: -1, startTime:0,duration:3000 })
		   //createjs.Sound.play("loop",ppc)
			avanzaCheck()
		}
		
		
		
		function parseXml(xml)
		{
			console.info("LINGUA CARICATA")
			text0001 = $(xml).find("text0001").text();
			text0002 = $(xml).find("text0002").text();
			text0003 = $(xml).find("text0003").text();
			text0004 = $(xml).find("text0004").text();
			text0005 = $(xml).find("text0005").text();
			text0006 = $(xml).find("text0006").text();
			text0007 = $(xml).find("text0007").text();
			text0008 = $(xml).find("text0008").text();
			text0009 = $(xml).find("text0009").text();
			text0010 = $(xml).find("text0010").text();
			text0011 = $(xml).find("text0011").text();
			text0012 = $(xml).find("text0012").text();
			text0013 = $(xml).find("text0013").text();
			text0014 = $(xml).find("text0014").text();
			text0015 = $(xml).find("text0015").text();
			text0016 = $(xml).find("text0016").text();
			text0017 = $(xml).find("text0017").text();
			text0018 = $(xml).find("text0018").text();
			
			 avanzaCheck()
			//root.gotoAndPlay("finishok")
			
			
		/*	btn_gioca = new lib.Button1();
			btn_gioca.x = 640,15;
			btn_gioca.y = 428,5
			btn_gioca.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
			btn_gioca.addEventListener("added",loadGioca.bind(this))
			root.addChild(btn_gioca);*/
		}
		
		function parseXML(_lang){
			console.info("CARICAMENTO LINGUA")
			$(document).ready(function()
			{
				$.ajax({
					type: "GET",
					url: "xml/"+_lang+".xml",
					dataType: "xml",
					success: parseXml,
					error: function(){
						console.info("ERRORE LINGUA")
						parseXML("en")
					}
				});
			});
		}
		
		parseXML(mylang+"");
		
		function detectmob() { 
		 if( navigator.userAgent.match(/Android/i)
		 || navigator.userAgent.match(/webOS/i)
		 || navigator.userAgent.match(/iPhone/i)
		 || navigator.userAgent.match(/iPad/i)
		 || navigator.userAgent.match(/iPod/i)
		 || navigator.userAgent.match(/BlackBerry/i)
		 || navigator.userAgent.match(/Windows Phone/i)
		 ){
			return true;
		  }
		 else {
			return false;
		  }
		}
		
		function getBrowserInfo() {
			var nVer = navigator.appVersion;
			var nAgt = navigator.userAgent;
			var browserName  = navigator.appName;
			var fullVersion  = ''+parseFloat(navigator.appVersion); 
			var majorVersion = parseInt(navigator.appVersion,10);
			var nameOffset,verOffset,ix;
		
			// In Opera 15+, the true version is after "OPR/" 
			if ((verOffset=nAgt.indexOf("OPR/"))!=-1) {
				browserName = "Opera";
				fullVersion = nAgt.substring(verOffset+4);
			}
			// In older Opera, the true version is after "Opera" or after "Version"
			else if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
				browserName = "Opera";
				fullVersion = nAgt.substring(verOffset+6);
				if ((verOffset=nAgt.indexOf("Version"))!=-1) fullVersion = nAgt.substring(verOffset+8);
			}
			// In MSIE, the true version is after "MSIE" in userAgent
			else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
				browserName = "Microsoft Internet Explorer";
				fullVersion = nAgt.substring(verOffset+5);
			}
			// In Chrome, the true version is after "Chrome" 
			else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
				browserName = "Chrome";
				fullVersion = nAgt.substring(verOffset+7);
			}
			// In Safari, the true version is after "Safari" or after "Version" 
			else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
				browserName = "Safari";
				fullVersion = nAgt.substring(verOffset+7);
				if ((verOffset=nAgt.indexOf("Version"))!=-1)fullVersion = nAgt.substring(verOffset+8);
			}
			// In Firefox, the true version is after "Firefox" 
			else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
				browserName = "Firefox";
				fullVersion = nAgt.substring(verOffset+8);
			}
			// In most other browsers, "name/version" is at the end of userAgent 
			else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) {
				browserName = nAgt.substring(nameOffset,verOffset);
				fullVersion = nAgt.substring(verOffset+1);
				if (browserName.toLowerCase()==browserName.toUpperCase()) {
					browserName = navigator.appName;
				}
			}
			// trim the fullVersion string at semicolon/space if present
			if ((ix=fullVersion.indexOf(";"))!=-1)fullVersion=fullVersion.substring(0,ix);
			if ((ix=fullVersion.indexOf(" "))!=-1)fullVersion=fullVersion.substring(0,ix);
		
			majorVersion = parseInt(''+fullVersion,10);
			
			if (isNaN(majorVersion)) {
				fullVersion  = ''+parseFloat(navigator.appVersion); 
				majorVersion = parseInt(navigator.appVersion,10);
			}
		
			return {"name":browserName, "version":fullVersion };
		}
		
		var navigatorInfo = getBrowserInfo();
		
		root.setContentText = function(_text,_string){
			_text.text = _string
			if(_text.spostato)return
			_text.spostato = true
			console.info("PASSO",navigatorInfo.name )
			if (navigatorInfo.name == "Chrome")_text.y += _text.lineHeight*0.3
			if (navigatorInfo.name == "Firefox")_text.y += _text.lineHeight*0.3
		}
	}
	this.frame_9 = function() {
		root.setContentText(root.gioca.testo,text0001)
	}
	this.frame_29 = function() {
		this.stop()
		root = this
		root.gioca.addEventListener("click",clickGioca)
		
		function clickGioca(){
			createjs.Sound.play("tap")
			root.gotoAndStop("gioco")
		}
		
		if(!loopStart){
			loopStart = true
			root.loop  = createjs.Sound.play("loop", {loop:-1})
		}
		
		root.audioBtn.alpha = 1
	}
	this.frame_30 = function() {
		this.stop();
		root = this;
		
		root.setContentText(root.timer,"00:00")
		root.setContentText(root.punteggio,"0")
		
		var helpOpen = true
		var stepHelp = 1
		root.help.alpha = 1
		visualizzaHelp(stepHelp)
		root.help.chiudi.addEventListener("click",clickChiudiHelp)
		root.help.avanti.addEventListener("click",clickAvantiHelp)
		
		root.bg.addEventListener("mousedown", pressGame);
		root.bg.addEventListener("click", releaseGame);
		canvas.addEventListener("touchstart", pressGame);
		canvas.addEventListener("touchend", releaseGame);
		
		
		
		var arrayLettera = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","X","Z"]
		
		var letteraN = Math.floor(Math.random()*arrayLettera.length)
		
		
		
		root.setContentText(root.t1,text0002)
		root.setContentText(root.t2,text0003)
		
		root.setContentText(root.help.help1.t1,text0011)
		root.setContentText(root.help.help1.t2,text0012)
		root.setContentText(root.help.help2.t3,text0013)
		root.setContentText(root.help.help2.t4,text0014)
		root.setContentText(root.help.help3.t5,text0015)
		root.setContentText(root.help.help4.t6,text0018)
		
		root.setContentText(root.help.avanti.testo,text0016)
		
		
		var fine = false
		var isPaused = false
		var velocita = 10
		var seconds = 0
		var started = false
		var inSalto = false
		root.score = 0
		var percorso = 0
		var percorsoParz = 0
		var oggettiMovimento = []
		var invulnerabile = false
		var invulnerabileCont = 0
		var tuttiOggetti = [["skate",1,true], ["bonus",2,true], ["ostacolo1",3,true], ["ostacolo2",4,true], ["ostacolo3",5,true], ["lettera",6,true]]
		root.tempoString = ""
		function changeTime(){
			if(!isPaused){
				addScore(10)
				seconds++
				var m = Math.floor(seconds/60)
				var s = (seconds%60)
				if(m<10)m = "0"+m
				if(s<10)s = "0"+s
				root.setContentText(root.timer,m+":"+s)
				root.tempoString = m+":"+s
			}
			
			if(!fine)setTimeout(changeTime,1000)
		}
		
		
		
		
		function handleTick(event) {
			var i = 0
			
			//movimenti sfondi
			for(i=1;i<=2;i++){
				root["bg2_"+i].x -= velocita/2
				if(root["bg2_"+i].x<-1900)root["bg2_"+i].x+=1880*2
					
				root["bg3_"+i].x -= velocita
				if(root["bg3_"+i].x<-1250)root["bg3_"+i].x+=1200*2
			}
				
			if(root.bg1.x<=-1950)root.bg1.x = -1950
			else root.bg1.x -= velocita/8	
				
			root.explo.x -= velocita	
			
			
			//movimento oggetti
			for(i=oggettiMovimento.length-1;i>=0;i--){
				root[oggettiMovimento[i][0]].x -= velocita
				if(root[oggettiMovimento[i][0]].x<-600){
					//root.removeChild(oggettiMovimento[i]);
					tuttiOggetti[oggettiMovimento[i][1]-1][2]=true
					oggettiMovimento.splice(i,1)
				}
			}
			
			
			
			//hit oggetti
			for(i=oggettiMovimento.length-1;i>=0;i--){
				var deltaX = Math.abs(root[oggettiMovimento[i][0]].x - root.gatto.x)
				var deltaY = Math.abs(root[oggettiMovimento[i][0]].y - root.gatto.y)
				var checkX = 100
				var checkY = 135
				if(oggettiMovimento[i][1]==1){checkX = 100; checkY = 135}
				if(oggettiMovimento[i][1]==2){checkX = 100; checkY = 135}
				if(oggettiMovimento[i][1]==3){checkX = 100; checkY = 60}
				if(oggettiMovimento[i][1]==4){checkX = 180; checkY = 60}	
				if(oggettiMovimento[i][1]==5){checkX = 200; checkY = 60}
				if(oggettiMovimento[i][1]==6){checkX = 100; checkY = 135}
				
				if(deltaX<checkX && deltaY<checkY){
					//console.info("HIT",oggettiMovimento[i][1])
					if(oggettiMovimento[i][1]==1){
						getInvulnerabile()
						root[oggettiMovimento[i][0]].x = -700
					}
					if(oggettiMovimento[i][1]==2){
						root.explo.x = root[oggettiMovimento[i][0]].x
						root.explo.y = root[oggettiMovimento[i][0]].y
						root.explo.gotoAndPlay(1)
						getBonus(100)
						root[oggettiMovimento[i][0]].x = -700
					}
					if(oggettiMovimento[i][1]==6){
						root.explo.x = root[oggettiMovimento[i][0]].x
						root.explo.y = root[oggettiMovimento[i][0]].y
						root.explo.gotoAndPlay(1)
						getBonus(200)
						root[oggettiMovimento[i][0]].x = -700
					}
					if(oggettiMovimento[i][1]==3 || oggettiMovimento[i][1]==4 || oggettiMovimento[i][1]==5)if(!invulnerabile)dead()
				}
				
				
			}
			
			
			invulnerabileCont--
			if(invulnerabileCont==0){
				if(inSalto)root.gatto.gotoAndStop(2)
				else root.gatto.gotoAndStop(1)
				invulnerabile = false
			}
			
			percorso += velocita
			percorsoParz += velocita
			if(percorsoParz>1000){
				percorsoParz = 0
				creaOggetto()
				velocita+=0.5
				if(velocita>=30)velocita=30
			}
		}
		
		function addScore(_val){
			root.score += _val
			root.setContentText(root.punteggio,root.score)
		}
		
		function start(){
			if(!helpOpen){
				root.lettera.gotoAndStop(letteraN)
		
				//console.info("start")
				createjs.Ticker.addEventListener("tick", handleTick);
				setTimeout(changeTime,1000)
				root.gatto.gotoAndStop(1)
				started = true;
			}
		}
		
		
		function pressGame(e){
			if(!started){
				start()
				return
			}
			//console.info("pressGame")
			if(!inSalto)salta()
			//pressed = true
		}
		
		function releaseGame(e){
			//console.info("releaseGame")
			//pressed = false
		}
		
		
		function salta(){
			
			inSalto = true
			if(invulnerabile){
				createjs.Sound.play("jumpskate")
				root.gatto.gotoAndStop(4)
			}
			else{
				createjs.Sound.play("jump")
				root.gatto.gotoAndStop(2)
			}
			createjs.Tween.get(root.gatto)
				.to({
					y: 320
				}, 600*(20/velocita), createjs.Ease.quadOut)
				.call(function(){
					createjs.Tween.get(root.gatto)
					.to({
						y: 520
					}, 600*(20/velocita), createjs.Ease.quadIn)
					.call(function(){
						atterra()
					});
				});
		}
		
		function atterra(){
			createjs.Sound.play("passo1")
			inSalto = false
			if(invulnerabile){
				createjs.Sound.play("passo1")
				root.gatto.gotoAndStop(3)
			}else{
				createjs.Sound.play("passo2")
				root.gatto.gotoAndStop(1)
			}
		}
		
		function creaOggetto(){
			var r = Math.floor(Math.random()*tuttiOggetti.length)
			
			
			while(tuttiOggetti[r][2]==false || (tuttiOggetti[r][1]==1 && Math.random()<0.5)){
				r = Math.floor(Math.random()*tuttiOggetti.length)
			}
				
			
			/*var oggetto
			
			if(r==0)oggetto = new lib.Skate();
			if(r==1)oggetto = new lib.Bonus();
			if(r==2)oggetto = new lib.Ostacolo1();
			if(r==3)oggetto = new lib.Ostacolo2();
			if(r==4)oggetto = new lib.Ostacolo3();*/
		
			
			//console.info("---",tuttiOggetti[r][0])
			
			root[tuttiOggetti[r][0]].x = 2000
			if(r==0 || r==1 || r==5)root[tuttiOggetti[r][0]].y = 250
			else root[tuttiOggetti[r][0]].y = 514
			
			//root.addChild(oggetto);
			
			oggettiMovimento.push(tuttiOggetti[r])
			tuttiOggetti[r][2] = false
		}
		
		
		
		function getInvulnerabile(){
			createjs.Sound.play("invincibile")
			if(!invulnerabile){
				if(inSalto)root.gatto.gotoAndStop(4)
				else root.gatto.gotoAndStop(2)
			}
			invulnerabile = true
			invulnerabileCont = 250
		}
		function getBonus(_score){
			createjs.Sound.play("bonus")
			addScore(_score)
		}
		function dead(){
			createjs.Sound.play("hit")
			fine = true
			for(i=oggettiMovimento.length-1;i>=0;i--){
				root[oggettiMovimento[i][0]].x = 2000
			}
			oggettiMovimento = []
			
			root.bg.removeEventListener("mousedown", pressGame);
			root.bg.removeEventListener("click", releaseGame);
			canvas.removeEventListener("touchstart", pressGame);
			canvas.removeEventListener("touchend", releaseGame);
			createjs.Ticker.removeEventListener("tick", handleTick);
				
			if(root.score<1000)root.gotoAndPlay("finaleKO")
			else root.gotoAndPlay("finaleOK")
				
			
				
		}
		
		
		
		function clickChiudiHelp(){
			createjs.Sound.play("tap")
			helpOpen = false
			root.help.alpha = 0
			root.help.chiudi.removeEventListener("click",clickChiudiHelp)
			root.help.avanti.removeEventListener("click",clickAvantiHelp)
		}
		
		function clickAvantiHelp(){
			createjs.Sound.play("tap")
			stepHelp++
			visualizzaHelp(stepHelp)
			if(stepHelp==5)clickChiudiHelp()
		}
		
		
		
		
		function visualizzaHelp(_step){
			if(_step==1){
				root.help.help1.alpha = 1
				root.help.help2.alpha = 0
				root.help.help3.alpha = 0
				root.help.help4.alpha = 0
			}
			if(_step==2){
				root.help.help1.alpha = 0
				root.help.help2.alpha = 1
				root.help.help3.alpha = 0
				root.help.help4.alpha = 0
			}
			if(_step==3){
				root.help.help1.alpha = 0
				root.help.help2.alpha = 0
				root.help.help3.alpha = 1
				root.help.help4.alpha = 0
			}
			if(_step==4){
				root.help.help4.lettera.gotoAndStop(letteraN)
				root.setContentText(root.help.avanti.testo,text0017)
				root.help.help4.explo.gotoAndPlay(1)
				root.help.help1.alpha = 0
				root.help.help2.alpha = 0
				root.help.help3.alpha = 0
				root.help.help4.alpha = 1
			}
		
		}
	}
	this.frame_31 = function() {
		createjs.Sound.play("endok")
	}
	this.frame_38 = function() {
		this.stop()
		
		
		root.setContentText(root.finaleOk.t1ok,text0004)
		root.setContentText(root.finaleOk.t2ok,text0005 + " " + root.tempoString)
		root.setContentText(root.finaleOk.t3ok,text0006 + " " + root.score)
		
		
		root.setContentText(root.rigiocaok.testo,text0007)
		
		root.rigiocaok.addEventListener("click", restartGameok);
		
		
		
		function restartGameok()
		{
			root.setContentText(root.finaleOk.t1ok,"")
			root.setContentText(root.finaleOk.t2ok,"")
			root.setContentText(root.finaleOk.t3ok,"")
			createjs.Sound.play("tap")
			root.rigiocaok.removeEventListener("click", restartGameok);
			root.gotoAndStop("home");
		}
	}
	this.frame_39 = function() {
		createjs.Sound.play("endko")
	}
	this.frame_49 = function() {
		this.stop()
		
		root = this
		
		
		
		root.setContentText(root.finaleKo.t1ko,text0008)
		root.setContentText(root.finaleKo.t2ko,text0009)
		root.setContentText(root.finaleKo.t3ko,text0010)
		
		
		root.setContentText(root.rigiocako.testo,text0007)
		
		root.rigiocako.addEventListener("click", restartGameko);
		
		
		
		function restartGameko()
		{
			root.finaleKo.t1ko.text = ""
			root.finaleKo.t2ko.text = ""
			root.finaleKo.t3ko.text = ""
			createjs.Sound.play("tap")
			root.rigiocako.removeEventListener("click", restartGameko);
			root.gotoAndStop("home");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(20).call(this.frame_29).wait(1).call(this.frame_30).wait(1).call(this.frame_31).wait(7).call(this.frame_38).wait(1).call(this.frame_39).wait(10).call(this.frame_49).wait(1));

	// Livello_14
	this.help = new lib.PopHelp();
	this.help.name = "help";
	this.help.setTransform(503.9,312.5,1,1,0,0,0,23.9,12.5);
	this.help._off = true;

	this.timeline.addTween(cjs.Tween.get(this.help).wait(30).to({_off:false},0).to({_off:true},1).wait(19));

	// Livello_6
	this.instance = new lib.COPY("synched",0);
	this.instance.setTransform(101,660);
	this.instance._off = true;

	this.audioBtn = new lib.Audio();
	this.audioBtn.name = "audioBtn";
	this.audioBtn.setTransform(58.75,54.35,0.6,0.6,0,0,0,0,0.1);

	this.t2 = new cjs.Text("", "normal 700 20px 'Open Sans'", "#FFFFFF");
	this.t2.name = "t2";
	this.t2.lineHeight = 29;
	this.t2.lineWidth = 240;
	this.t2.parent = this;
	this.t2.setTransform(361.55,24.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.t2);
	}

	this.punteggio = new cjs.Text("", "normal 700 30px 'Open Sans'", "#FFFFFF");
	this.punteggio.name = "punteggio";
	this.punteggio.lineHeight = 43;
	this.punteggio.lineWidth = 241;
	this.punteggio.parent = this;
	this.punteggio.setTransform(111.55,46.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.punteggio);
	}

	this.timer = new cjs.Text("", "normal 700 30px 'Open Sans'", "#FFFFFF");
	this.timer.name = "timer";
	this.timer.lineHeight = 43;
	this.timer.lineWidth = 241;
	this.timer.parent = this;
	this.timer.setTransform(361.55,46.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.timer);
	}

	this.t1 = new cjs.Text("", "normal 700 20px 'Open Sans'", "#FFFFFF");
	this.t1.name = "t1";
	this.t1.lineHeight = 29;
	this.t1.lineWidth = 240;
	this.t1.parent = this;
	this.t1.setTransform(111.55,24.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.t1);
	}

	this.lettera = new lib.Lettere();
	this.lettera.name = "lettera";
	this.lettera.setTransform(895.2,-180.4);

	this.explo = new lib.Poppo();
	this.explo.name = "explo";
	this.explo.setTransform(1693.75,-505.2,0.9992,1.0501,15.0124);

	this.gatto = new lib.Gatto();
	this.gatto.name = "gatto";
	this.gatto.setTransform(118.7,520.75);

	this.ostacolo2 = new lib.Ostacolo2();
	this.ostacolo2.name = "ostacolo2";
	this.ostacolo2.setTransform(1238.1,-133.75);

	this.ostacolo3 = new lib.Ostacolo3();
	this.ostacolo3.name = "ostacolo3";
	this.ostacolo3.setTransform(1495.95,-132.75);

	this.bonus = new lib.Bonus();
	this.bonus.name = "bonus";
	this.bonus.setTransform(1845.95,-196.1,1,1,0,0,0,0.1,0.1);

	this.ostacolo1 = new lib.Ostacolo1();
	this.ostacolo1.name = "ostacolo1";
	this.ostacolo1.setTransform(1048.25,-133.7,1,1,0,0,0,0.1,-0.1);

	this.skate = new lib.Skate();
	this.skate.name = "skate";
	this.skate.setTransform(1721.6,-212.75);

	this.instance_1 = new lib.Simbolo6();
	this.instance_1.setTransform(480,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance_1},{t:this.skate},{t:this.ostacolo1},{t:this.bonus},{t:this.ostacolo3},{t:this.ostacolo2},{t:this.gatto},{t:this.explo},{t:this.lettera},{t:this.t1},{t:this.timer},{t:this.punteggio},{t:this.t2},{t:this.audioBtn}]},9).to({state:[]},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({y:547.5,mode:"independent"},6).to({_off:true},9).wait(20));

	// Livello_4
	this.gioca = new lib.pulsPlay();
	this.gioca.name = "gioca";
	this.gioca.setTransform(720.9,700.35);
	this.gioca._off = true;

	this.bg4_2 = new lib.Bg4();
	this.bg4_2.name = "bg4_2";
	this.bg4_2.setTransform(383.75,-42.55);
	this.bg4_2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(31, 5, 15, -22))];
	this.bg4_2.cache(-386,551,968,98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.gioca}]},9).to({state:[{t:this.gioca}]},1).to({state:[{t:this.gioca}]},1).to({state:[{t:this.gioca}]},1).to({state:[{t:this.gioca}]},1).to({state:[{t:this.gioca}]},1).to({state:[{t:this.gioca}]},1).to({state:[{t:this.gioca}]},1).to({state:[{t:this.gioca}]},1).to({state:[{t:this.gioca}]},1).to({state:[{t:this.gioca}]},1).to({state:[{t:this.gioca}]},1).to({state:[{t:this.gioca}]},1).to({state:[{t:this.gioca}]},1).to({state:[{t:this.gioca}]},1).to({state:[{t:this.gioca}]},1).to({state:[{t:this.gioca}]},1).to({state:[{t:this.gioca}]},1).to({state:[{t:this.gioca}]},1).to({state:[{t:this.gioca}]},1).to({state:[{t:this.bg4_2}]},2).to({state:[]},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.gioca).wait(9).to({_off:false},0).wait(1).to({regX:12.5,regY:-7.5,x:733.4,y:691.9},0).wait(1).to({y:688.85},0).wait(1).to({y:683.2},0).wait(1).to({y:674.4},0).wait(1).to({y:661.6},0).wait(1).to({y:644},0).wait(1).to({y:620.6},0).wait(1).to({y:591.4},0).wait(1).to({y:558.55},0).wait(1).to({y:526.75},0).wait(1).to({y:500.3},0).wait(1).to({y:480.6},0).wait(1).to({y:467.1},0).wait(1).to({y:458.65},0).wait(1).to({y:454.15},0).wait(1).to({regX:0,regY:0,x:720.9,y:460.35},0).wait(1).to({regX:12.5,regY:-7.5,x:733.4,y:454.35},0).wait(1).to({y:460.5},0).wait(1).to({regX:0,regY:0,x:720.9,y:470.35},0).to({_off:true},2).wait(20));

	// Livello_2
	this.instance_2 = new lib.Interpolazione1("synched",0);
	this.instance_2.setTransform(670.5,306);

	this.instance_3 = new lib.gradient();
	this.instance_3.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},16).to({state:[]},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-944.8,regY:-2.8,x:-271.55,y:303.2},0).wait(1).to({x:-262.35},0).wait(1).to({x:-245.1},0).wait(1).to({x:-217.6},0).wait(1).to({x:-177},0).wait(1).to({x:-120.15},0).wait(1).to({x:-46.1},0).wait(1).to({x:38.4},0).wait(1).to({x:117.8},0).wait(1).to({x:179.7},0).wait(1).to({x:222.05},0).wait(1).to({x:248.1},0).wait(1).to({x:261.65},0).wait(1).to({regX:0,regY:0,x:1210.5,y:306},0).to({_off:true},16).wait(20));

	// Livello_1
	this.bg3_2 = new lib.Bg3();
	this.bg3_2.name = "bg3_2";
	this.bg3_2.setTransform(1200,-123.8,1.1241,1.1241);

	this.bg3_1 = new lib.Bg3();
	this.bg3_1.name = "bg3_1";
	this.bg3_1.setTransform(0,-123.8,1.1241,1.1241);

	this.finaleOk = new lib.FinaleOk();
	this.finaleOk.name = "finaleOk";
	this.finaleOk.setTransform(701.55,269.9);

	this.rigiocaok = new lib.pulsPlay();
	this.rigiocaok.name = "rigiocaok";
	this.rigiocaok.setTransform(703.4,468.7);

	this.finaleKo = new lib.FinaleKO();
	this.finaleKo.name = "finaleKo";
	this.finaleKo.setTransform(698.3,268.75);

	this.rigiocako = new lib.pulsPlay();
	this.rigiocako.name = "rigiocako";
	this.rigiocako.setTransform(703.4,484.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.bg3_1},{t:this.bg3_2}]},30).to({state:[{t:this.rigiocaok},{t:this.finaleOk}]},1).to({state:[{t:this.rigiocako},{t:this.finaleKo}]},8).wait(11));

	// Livello_8
	this.logo = new lib.ZU();
	this.logo.name = "logo";
	this.logo.setTransform(1257.5,105.5);
	this.logo._off = true;

	this.bg2_1 = new lib.Palazzi();
	this.bg2_1.name = "bg2_1";
	this.bg2_1.setTransform(1,0);

	this.bg2_2 = new lib.Palazzi();
	this.bg2_2.name = "bg2_2";
	this.bg2_2.setTransform(1880,0);

	this.instance_4 = new lib.Simbolo5("synched",0);
	this.instance_4.setTransform(-215.5,325.6);
	this.instance_4._off = true;

	this.instance_5 = new lib.Simbolo11("synched",0);
	this.instance_5.setTransform(-230.4,319.95);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.logo}]},9).to({state:[{t:this.logo}]},16).to({state:[{t:this.logo}]},3).to({state:[{t:this.bg2_2},{t:this.bg2_1}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_5}]},4).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.logo).wait(9).to({_off:false},0).to({x:715.5},16).to({x:759.5},3).to({_off:true},2).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31).to({_off:false},0).to({x:239.5},3).to({_off:true},5).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).to({x:259.6},4).wait(7));

	// Livello_9
	this.instance_6 = new lib.Simbolo6();
	this.instance_6.setTransform(480,-140);
	this.instance_6._off = true;

	this.bg1 = new lib.Bg1();
	this.bg1.name = "bg1";
	this.bg1.setTransform(0,-147.5,1.1241,1.1241);

	this.instance_7 = new lib.Simbolo1("synched",0);
	this.instance_7.setTransform(1298.5,292.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.Simbolo7("synched",0);
	this.instance_8.setTransform(1315,285.5,1.0963,1.0963);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_6}]},11).to({state:[{t:this.bg1}]},14).to({state:[]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},3).to({state:[]},4).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_8}]},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).to({y:-52.5},11).to({_off:true},14).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(32).to({_off:false},0).to({x:651},3).to({_off:true},4).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(41).to({_off:false},0).to({x:790},3).to({x:615},1).wait(5));

	// BG
	this.instance_9 = new lib.Copiabg_home();

	this.bg = new lib.Bg();
	this.bg.name = "bg";
	this.bg.setTransform(480.1,300);

	this.instance_10 = new lib.BG_PERS();

	this.instance_11 = new lib.BG_VIT_();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.bg}]},30).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},8).wait(11));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-435.6,3832.5,1192);
// library properties:
lib.properties = {
	id: 'C0E1E33BADAE48489E89F63A3B0543C3',
	width: 960,
	height: 600,
	fps: 30,
	color: "#00FF00",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/gioco_atlas_1.png?1596183311234", id:"gioco_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C0E1E33BADAE48489E89F63A3B0543C3'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;