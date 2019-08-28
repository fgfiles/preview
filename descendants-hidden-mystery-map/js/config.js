ig.config =
{
	version : '5',

	// either a string value of 'map' or 'book' (travel guide)
	playGame : 'map', 

	enableSound : true,
	enablePrint : true,

	gameWrapper : 'game-wrapper',
	gameCanvas : 'game-canvas',

	noCookiesPath : 'media/images/localized/cookies.png',
	noCanvasPath : 'media/images/localized/unsupported.png',

	mapPrintPath : 'media/MapPrintable.pdf',

	gameDimensions :
	{
		width : { min : 1024, max : 1426 },
		height : { min : 768, max : 768 }
	},

	map : 
	{
		'marker-1' : { x : 192, y : -143 },
		'marker-2' : { x : 298, y : -200 },
		'marker-3' : { x : 313, y : -13 },
		'marker-4' : { x : -227, y : 194 },
	},

	book : 
	{
		museum_items: ['bow','dragon','diamonds','beast','flower','crown','shield','snake','bird','bones']
	},

	search :
	{
		'game-timer' : 120, // the game timer per level
		'hint-timer' : 60, // the hint timer

		hintDisplayTimer : 1.2, // the amount of time to show a glow around the items before it goes away

		'level-1' :
		{
			characters : ['prince'],
			positions : [-200] // x axis only, all characters have the same y axis (bottom)
		},

		'level-2' :
		{
			characters : ['evie'],
			positions : [250]
		},

		'level-3' :
		{
			characters : ['mal'],
			positions : [-200]
		},

		'level-4' :
		{
			characters : ['jay', 'carlos'],
			positions : [-320, 320]
		},

		items : 
		{
			// level 1 - ben
			backpack : [139, -93],
			ball : [329, 262],
			candle : [-16, -153],
			crest : [411, -42],
			crown : [308, 33],
			glove : [271, 94],
			ring : [241, 179],
			shoes : [-506, 237],
			tourneystick : [-233, -73],
			stamp1 : [-283, 166],

			// level 2 - dorm
			brush : [410, 66],
			dog : [-216, 77],
			makeup : [-283, 234],
			mirror : [233, -50],
			pendant : [-425, 274],
			sketchbook : [-434, 11],
			sleepingspray : [78, 51],
			spraypaint : [348, -266],
			thread : [447, 255],
			stamp2 : [-179, 159],

			// level 3 - kitchen
			chocolatechips : [218, 148],
			cookie : [445, -228],
			cupcake : [-359, 129],
			measuringcup : [-260, 155],
			milk : [203, -70],
			purse : [127, -178],
			rollingpin : [-488, -241],
			spoon : [-125, 208],
			tray : [60, 185],
			stamp3 : [350, -180],

			// level 4 - market
			apple : [320, 46],
			basket : [-133, -6],
			clock : [173, -60],
			crystalball : [-346, 74],
			kettle : [-65, -140],
			rose : [409, -2],
			spinningwheel : [-513, -187],
			sword : [228, -158],
			wand : [374, -205],
			stamp4 : [-146, 162]
		}
	}
};

ig.module('config').defines();