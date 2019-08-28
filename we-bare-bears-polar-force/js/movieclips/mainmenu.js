
var mainmenu = {
	"mainmenu": {
		type: "movieclip",
		fps: 30,
		totalFrames: 190,
		labels: {in: {from:0, to:132}, out: {from:134, to:168}, shortcut: {from:170, to:188}, },
		layers: [
			{
				name: "bg",
				keys: [
					{
						from: 0,
						to: 169,
						classname: "_mainmenu_bgcolor_x",
						instancename: "",
						matrix: {a: 15.825, b: 0, c: 0, d: 8.926, tx: 673.05, ty: 365.7},
						transform: [673.05, 365.7, 15.825, 8.926, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 170,
						to: 189,
						classname: "_mainmenu_bgcolor_x",
						instancename: "",
						matrix: {a: 15.825, b: 0, c: 0, d: 8.926, tx: 673.05, ty: 365.7},
						transform: [673.05, 365.7, 15.825, 8.926, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "buildings",
				keys: [
					{
						from: 0,
						to: 46,
						classname: "_mainmenu_edificios",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.85, ty: 0},
						transform: [-2.85, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 47,
						to: 112,
						classname: "_mainmenu_edificios",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.85, ty: 0},
						transform: [-2.85, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.592, 0], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 113,
						to: 169,
						classname: "_mainmenu_edificios",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -292.25, ty: 0},
						transform: [-292.25, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 170,
						to: 189,
						classname: "_mainmenu_edificios",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -292.25, ty: 0},
						transform: [-292.25, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "polar",
				keys: [
					{
						from: 0,
						to: 38,
						classname: "_mainmenu_polar",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 648.9, ty: 402.1},
						transform: [648.9, 402.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 39,
						to: 101,
						classname: "_mainmenu_polar",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 648.9, ty: 402.1},
						transform: [648.9, 402.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.592, 0], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 102,
						to: 133,
						classname: "_mainmenu_polar",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 356.5, ty: 402.1},
						transform: [356.5, 402.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 134,
						to: 145,
						classname: "_mainmenu_polar",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 356.5, ty: 402.1},
						transform: [356.5, 402.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 146,
						to: 157,
						classname: "_mainmenu_polar",
						instancename: "",
						matrix: {a: 0.926, b: 0, c: 0, d: 0.926, tx: 356.5, ty: 402.1},
						transform: [356.5, 402.1, 0.926, 0.926, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0], [0.772, 0.558], [1, 1], ],
						}
					},
					{
						from: 158,
						to: 169,
						classname: "_mainmenu_polar",
						instancename: "",
						matrix: {a: 1.261, b: 0, c: 0, d: 1.261, tx: 356.5, ty: 431.5},
						transform: [356.5, 431.5, 1.261, 1.261, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 170,
						to: 189,
						classname: "_mainmenu_polar",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 356.5, ty: 402.1},
						transform: [356.5, 402.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "play_btn",
				keys: [
					{
						from: 0,
						to: 116,
						classname: "_mainmenu_ui_button_resume",
						instancename: "play_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1627.2, ty: 568.4},
						transform: [1627.2, 568.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 117,
						to: 122,
						classname: "_mainmenu_ui_button_resume",
						instancename: "play_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 956.45, ty: 859.55},
						transform: [956.45, 859.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.207, 0.459], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 123,
						to: 128,
						classname: "_mainmenu_ui_button_resume",
						instancename: "play_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 956.45, ty: 551.3},
						transform: [956.45, 551.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.547, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 129,
						to: 133,
						classname: "_mainmenu_ui_button_resume",
						instancename: "play_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 956.45, ty: 568.4},
						transform: [956.45, 568.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 134,
						to: 144,
						classname: "_mainmenu_ui_button_resume",
						instancename: "play_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 956.45, ty: 568.4},
						transform: [956.45, 568.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0], [0.762, 0.562], [1, 1], ],
						}
					},
					{
						from: 145,
						to: 169,
						classname: "_mainmenu_ui_button_resume",
						instancename: "play_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 956.45, ty: 953.1},
						transform: [956.45, 953.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 170,
						to: 189,
						classname: "_mainmenu_ui_button_resume",
						instancename: "play_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 956.45, ty: 568.4},
						transform: [956.45, 568.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 131,
						classname: "_mainmenu_ui_button_credits",
						instancename: "credits_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1627.2, ty: 568.4},
						transform: [1627.2, 568.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 132,
						to: 133,
						classname: "_mainmenu_ui_button_credits",
						instancename: "credits_btn",
						matrix: {a: 0.928, b: 0, c: 0, d: 0.928, tx: 202.9, ty: 484.4},
						transform: [202.9, 484.4, 0.928, 0.928, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 134,
						to: 169,
						classname: "_mainmenu_ui_button_credits",
						instancename: "credits_btn",
						matrix: {a: 0.928, b: 0, c: 0, d: 0.928, tx: -285.2, ty: 520.4},
						transform: [-285.2, 520.4, 0.928, 0.928, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 170,
						to: 189,
						classname: "_mainmenu_ui_button_credits",
						instancename: "credits_btn",
						matrix: {a: 0.928, b: 0, c: 0, d: 0.928, tx: 202.9, ty: 484.4},
						transform: [202.9, 484.4, 0.928, 0.928, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "title",
				keys: [
					{
						from: 0,
						to: 112,
						classname: "_mainmenu_title",
						instancename: "title",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 942.05, ty: -448.75},
						transform: [942.05, -448.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 113,
						to: 118,
						classname: "_mainmenu_title",
						instancename: "title",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1901.1, ty: 235.7},
						transform: [1901.1, 235.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.207, 0.459], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 119,
						to: 124,
						classname: "_mainmenu_title",
						instancename: "title",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 916.35, ty: 235.7},
						transform: [916.35, 235.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.547, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 125,
						to: 145,
						classname: "_mainmenu_title",
						instancename: "title",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 942.05, ty: 235.7},
						transform: [942.05, 235.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 146,
						to: 157,
						classname: "_mainmenu_title",
						instancename: "title",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 942.05, ty: 235.7},
						transform: [942.05, 235.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0], [0.762, 0.562], [1, 1], ],
						}
					},
					{
						from: 158,
						to: 169,
						classname: "_mainmenu_title",
						instancename: "title",
						matrix: {a: 0.804, b: 0, c: 0, d: 0.804, tx: 955.65, ty: 235.75},
						transform: [955.65, 235.75, 0.804, 0.804, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 170,
						to: 189,
						classname: "_mainmenu_title",
						instancename: "title",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 942.05, ty: 235.7},
						transform: [942.05, 235.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "music_btn",
				keys: [
					{
						from: 0,
						to: 109,
						classname: "_mainmenu_ui_button_music",
						instancename: "music_btn",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.378, tx: -149.2, ty: -205.15},
						transform: [-149.2, -205.15, 0.378, 0.378, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 110,
						to: 115,
						classname: "_mainmenu_ui_button_music",
						instancename: "music_btn",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.378, tx: -60.7, ty: 43.15},
						transform: [-60.7, 43.15, 0.378, 0.378, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.207, 0.459], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 116,
						to: 121,
						classname: "_mainmenu_ui_button_music",
						instancename: "music_btn",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.378, tx: 62.05, ty: 43.15},
						transform: [62.05, 43.15, 0.378, 0.378, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.547, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 122,
						to: 133,
						classname: "_mainmenu_ui_button_music",
						instancename: "music_btn",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.378, tx: 44.9, ty: 43.15},
						transform: [44.9, 43.15, 0.378, 0.378, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 134,
						to: 144,
						classname: "_mainmenu_ui_button_music",
						instancename: "music_btn",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.378, tx: 44.9, ty: 43.15},
						transform: [44.9, 43.15, 0.378, 0.378, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0], [0.762, 0.562], [1, 1], ],
						}
					},
					{
						from: 145,
						to: 169,
						classname: "_mainmenu_ui_button_music",
						instancename: "music_btn",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.378, tx: -165.55, ty: 43.15},
						transform: [-165.55, 43.15, 0.378, 0.378, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 170,
						to: 189,
						classname: "_mainmenu_ui_button_music",
						instancename: "music_btn",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.378, tx: 44.9, ty: 43.15},
						transform: [44.9, 43.15, 0.378, 0.378, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "glitch",
				keys: [
					{
						from: 0,
						to: 133,
						classname: "_mainmenu_levelselection_glitch_in",
						instancename: "",
						matrix: {a: 1.586, b: 0, c: 0, d: 1.205, tx: 682.8, ty: 434.8},
						transform: [682.8, 434.8, 1.586, 1.205, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 134,
						to: 152,
						classname: "_mainmenu_levelselection_glitch_in",
						instancename: "",
						matrix: {a: 1.586, b: 0, c: 0, d: 1.205, tx: 682.8, ty: 434.8},
						transform: [682.8, 434.8, 1.586, 1.205, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 153,
						to: 169,
						classname: "_mainmenu_levelselection_glitch_infinito",
						instancename: "",
						matrix: {a: 1.586, b: 0, c: 0, d: 1.205, tx: 682.8, ty: 434.8},
						transform: [682.8, 434.8, 1.586, 1.205, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 170,
						to: 188,
						classname: "_mainmenu_levelselection_glitch_in",
						instancename: "",
						matrix: {a: 1.586, b: 0, c: 0, d: 1.205, tx: 682.8, ty: 434.8},
						transform: [682.8, 434.8, 1.586, 1.205, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 189,
						to: 189,
					},
				]
			},
			{
				name: "tvnoise",
				keys: [
					{
						from: 0,
						to: 169,
						classname: "_mainmenu_tvnoise",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 650.95, ty: 354.05},
						transform: [650.95, 354.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 170,
						to: 189,
						classname: "_mainmenu_tvnoise",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 650.95, ty: 354.05},
						transform: [650.95, 354.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "code",
				keys: [
					{
						from: 0,
						to: 132,
					},
					{
						from: 133,
						to: 133,
						actions: function(self){self.stop();
globalsignal.emit(ge.MM_ENABLE);},
					},
					{
						from: 134,
						to: 168,
					},
					{
						from: 169,
						to: 169,
						actions: function(self){self.stop();
globalsignal.emit(ge.MM_OUT);},
					},
					{
						from: 170,
						to: 188,
					},
					{
						from: 189,
						to: 189,
						actions: function(self){self.stop();
globalsignal.emit(ge.MM_ENABLE);},
					},
				]
			},
			{
				name: "Capa 2",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 4,
						actions: function(self){WONBATS.soundManager.play("monitorNoise2", true);},
					},
					{
						from: 5,
						to: 133,
					},
					{
						from: 134,
						to: 134,
						actions: function(self){WONBATS.soundManager.play("monitorNoise2", true);},
					},
					{
						from: 135,
						to: 189,
					},
				]
			},
		]
	},
	"_mainmenu_bgcolor_x": {
		type: "bitmap",
		asset: "_mainmenu_bgcolor_x",
		scale: 1,
		position: [-55, -55],
	},
	"_mainmenu_edificios": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "skylines_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_skylines_x",
						instancename: "",
						matrix: {a: 1.632, b: 0, c: 0, d: 0.746, tx: 658.25, ty: 151.85},
						transform: [658.25, 151.85, 1.632, 0.746, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "skylines_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_skylines_x",
						instancename: "",
						matrix: {a: -1.632, b: 0, c: 0, d: 0.746, tx: 658.25, ty: 151.85},
						transform: [658.25, 151.85, 1.632, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "edificio_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_edificio_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "edificio_1_b",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_edificio_1_b",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 1284.75, ty: 0},
						transform: [1284.75, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "edificio_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_edificio_2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "edificio_2_b",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_edificio_2_b",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 1284.75, ty: 0},
						transform: [1284.75, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "edificio_3",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_edificio_3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "edificio_3_b",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_edificio_3_b",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 1284.75, ty: 0},
						transform: [1284.75, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_polar": {
		type: "movieclip",
		fps: 30,
		totalFrames: 60,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_mainmenu_polar_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.521, 0], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 58,
						classname: "_mainmenu_polar_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -12.4},
						transform: [0, -12.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.521, 0], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_mainmenu_polar_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_ui_button_resume": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {over: {from:0, to:6}, down: {from:7, to:13}, out: {from:14, to:19}, },
		layers: [
			{
				name: "hitbox",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_mainmenu_ui_hitbox_x",
						instancename: "",
						matrix: {a: 1.62, b: 0, c: 0, d: 1.643, tx: -2.3, ty: -0.75},
						transform: [-2.3, -0.75, 1.62, 1.643, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_mainmenu_playbg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.45, ty: -0.2},
						transform: [-5.45, -0.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_mainmenu_playcircle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.45, ty: -0.2},
						transform: [-5.45, -0.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_mainmenu_ui_icon_play_x",
						instancename: "",
						matrix: {a: 0.775, b: 0, c: 0, d: 0.775, tx: -4.95, ty: -2.45},
						transform: [-4.95, -2.45, 0.775, 0.775, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_mainmenu_ui_icon_play_x",
						instancename: "",
						matrix: {a: 0.859, b: 0, c: 0, d: 0.859, tx: -4.95, ty: -2.45},
						transform: [-4.95, -2.45, 0.859, 0.859, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_mainmenu_ui_icon_play_x",
						instancename: "",
						matrix: {a: 0.904, b: 0, c: 0, d: 0.904, tx: -4.95, ty: -2.4},
						transform: [-4.95, -2.4, 0.904, 0.904, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_mainmenu_ui_icon_play_x",
						instancename: "",
						matrix: {a: 0.859, b: 0, c: 0, d: 0.859, tx: -4.95, ty: -2.45},
						transform: [-4.95, -2.45, 0.859, 0.859, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_mainmenu_ui_icon_play_x",
						instancename: "",
						matrix: {a: 0.775, b: 0, c: 0, d: 0.775, tx: -4.95, ty: -2.45},
						transform: [-4.95, -2.45, 0.775, 0.775, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_mainmenu_plus",
						instancename: "plus",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 71.55, ty: -52.2},
						transform: [71.55, -52.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "code",
				keys: [
					{
						from: 0,
						to: 6,
						actions: function(self){self.stop();},
					},
					{
						from: 7,
						to: 12,
					},
					{
						from: 13,
						to: 13,
						actions: function(self){self.stop();},
					},
					{
						from: 14,
						to: 18,
					},
					{
						from: 19,
						to: 19,
						actions: function(self){self.stop();},
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 6,
					},
					{
						from: 7,
						to: 13,
					},
					{
						from: 14,
						to: 19,
					},
				]
			},
		]
	},
	"_mainmenu_ui_button_credits": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {over: {from:0, to:6}, down: {from:7, to:13}, out: {from:14, to:19}, },
		layers: [
			{
				name: "hitbox",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_mainmenu_ui_hitbox_x",
						instancename: "",
						matrix: {a: 1.62, b: 0, c: 0, d: 1.643, tx: -2.3, ty: -0.75},
						transform: [-2.3, -0.75, 1.62, 1.643, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "code",
				keys: [
					{
						from: 0,
						to: 6,
						actions: function(self){self.stop();},
					},
					{
						from: 7,
						to: 12,
					},
					{
						from: 13,
						to: 13,
						actions: function(self){self.stop();},
					},
					{
						from: 14,
						to: 18,
					},
					{
						from: 19,
						to: 19,
						actions: function(self){self.stop();},
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 6,
					},
					{
						from: 7,
						to: 13,
					},
					{
						from: 14,
						to: 19,
					},
				]
			},
		]
	},
	"_mainmenu_title": {
		type: "movieclip",
		fps: 30,
		totalFrames: 28,
		labels: {english: {from:0, to:7}, portuguese: {from:9, to:17}, spanish: {from:19, to:26}, },
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 27,
						classname: "_mainmenu_lines1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.144, tx: 75.15, ty: -10.5},
						transform: [75.15, -10.5, 1, 1.144, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_mainmenu_title_english_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -13.6, ty: 0},
						transform: [-13.6, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 18,
						classname: "_mainmenu_title_portuguese_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -13.5, ty: 0},
						transform: [-13.5, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 27,
						classname: "_mainmenu_title_spanish_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -27, ty: 0},
						transform: [-27, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 8,
						actions: function(self){self.stop();},
					},
					{
						from: 9,
						to: 17,
					},
					{
						from: 18,
						to: 18,
						actions: function(self){self.stop();},
					},
					{
						from: 19,
						to: 26,
					},
					{
						from: 27,
						to: 27,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_mainmenu_ui_button_music": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_ui_button_music_on",
						instancename: "music_on",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_ui_button_music_off",
						instancename: "music_off",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_levelselection_glitch_in": {
		type: "movieclip",
		fps: 30,
		totalFrames: 18,
		labels: {},
		layers: [
			{
				name: "box_black_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_mainmenu_levelselection_box_black_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -6.321, tx: 0.3, ty: -9.2},
						transform: [0.3, -9.2, 9.083, 6.321, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_mainmenu_levelselection_box_black_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -6.321, tx: 0.3, ty: -9.2},
						transform: [0.3, -9.2, 9.083, 6.321, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_mainmenu_levelselection_box_black_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -6.321, tx: 0.3, ty: -9.2},
						transform: [0.3, -9.2, 9.083, 6.321, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_black_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -6.321, tx: 0.3, ty: -9.2},
						transform: [0.3, -9.2, 9.083, 6.321, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_mainmenu_levelselection_box_black_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -6.321, tx: 0.3, ty: -9.2},
						transform: [0.3, -9.2, 9.083, 6.321, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 17,
					},
				]
			},
			{
				name: "box_grid_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_mainmenu_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -0.883, b: 0, c: 0, d: -2.715, tx: 243.95, ty: -41.95},
						transform: [243.95, -41.95, 0.883, 2.715, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_mainmenu_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -1.357, b: 0, c: 0, d: -1.309, tx: 240.15, ty: 126.45},
						transform: [240.15, 126.45, 1.357, 1.309, 3.142, 3.142, 3.142],
						alpha: 0.51,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_mainmenu_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -2.344, b: 0, c: 0, d: -1.309, tx: 66.45, ty: -210.3},
						transform: [66.45, -210.3, 2.344, 1.309, 3.142, 3.142, 3.142],
						alpha: 0.5,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -1.309, b: 0, c: 0, d: -1.309, tx: 76.75, ty: 118.8},
						transform: [76.75, 118.8, 1.309, 1.309, 3.142, 3.142, 3.142],
						alpha: 0.5,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_mainmenu_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -0.883, b: 0, c: 0, d: -2.715, tx: 243.95, ty: -41.95},
						transform: [243.95, -41.95, 0.883, 2.715, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 17,
					},
				]
			},
			{
				name: "box_white_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.526, tx: 0.3, ty: -140.45},
						transform: [0.3, -140.45, 9.083, 0.526, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.526, tx: 0.3, ty: -159.6},
						transform: [0.3, -159.6, 9.083, 0.526, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.526, tx: 0.3, ty: -18},
						transform: [0.3, -18, 9.083, 0.526, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.526, tx: 0.3, ty: -140.45},
						transform: [0.3, -140.45, 9.083, 0.526, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.526, tx: 0.3, ty: -140.45},
						transform: [0.3, -140.45, 9.083, 0.526, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 17,
					},
				]
			},
			{
				name: "box_white_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.22, tx: 0.3, ty: -9.2},
						transform: [0.3, -9.2, 9.083, 0.22, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.22, tx: 0.3, ty: -219.9},
						transform: [0.3, -219.9, 9.083, 0.22, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.22, tx: 0.3, ty: -219.9},
						transform: [0.3, -219.9, 9.083, 0.22, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.22, tx: 0.3, ty: -219.9},
						transform: [0.3, -219.9, 9.083, 0.22, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.22, tx: 0.3, ty: -9.2},
						transform: [0.3, -9.2, 9.083, 0.22, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 17,
					},
				]
			},
			{
				name: "box_cyan_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 124.2},
						transform: [0.3, 124.2, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: -167.9},
						transform: [0.3, -167.9, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 124.2},
						transform: [0.3, 124.2, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 124.2},
						transform: [0.3, 124.2, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 15,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 124.2},
						transform: [0.3, 124.2, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 35.85},
						transform: [0.3, 35.85, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 0.04,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 17,
						to: 17,
					},
				]
			},
			{
				name: "box_magenta_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: -144.3},
						transform: [0.3, -144.3, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 257.5},
						transform: [0.3, 257.5, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: -19.3},
						transform: [0.3, -19.3, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: -144.3},
						transform: [0.3, -144.3, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: -144.3},
						transform: [0.3, -144.3, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 17,
					},
				]
			},
			{
				name: "box_cyan_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -1.17, tx: 0.3, ty: -318.85},
						transform: [0.3, -318.85, 9.083, 1.17, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.561, tx: 0.3, ty: -220.45},
						transform: [0.3, -220.45, 9.083, 0.561, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -1.17, tx: 0.3, ty: 214.3},
						transform: [0.3, 214.3, 9.083, 1.17, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -1.17, tx: 0.3, ty: -67.6},
						transform: [0.3, -67.6, 9.083, 1.17, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 15,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -1.17, tx: 0.3, ty: -318.85},
						transform: [0.3, -318.85, 9.083, 1.17, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.31, tx: 0.3, ty: -153.25},
						transform: [0.3, -153.25, 9.083, 0.31, 3.142, 3.142, 3.142],
						alpha: 0.02,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 17,
						to: 17,
					},
				]
			},
			{
				name: "box_cyan_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 37.45},
						transform: [0.3, 37.45, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 138.2},
						transform: [0.3, 138.2, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 37.45},
						transform: [0.3, 37.45, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 37.45},
						transform: [0.3, 37.45, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 37.45},
						transform: [0.3, 37.45, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 17,
					},
				]
			},
			{
				name: "box_white_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -1.231, tx: 0.3, ty: -173.55},
						transform: [0.3, -173.55, 9.083, 1.231, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.249, tx: 0.3, ty: 236.55},
						transform: [0.3, 236.55, 9.083, 0.249, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -1.231, tx: 0.3, ty: 187.4},
						transform: [0.3, 187.4, 9.083, 1.231, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -1.231, tx: 0.3, ty: 11.4},
						transform: [0.3, 11.4, 9.083, 1.231, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -1.231, tx: 0.3, ty: -173.55},
						transform: [0.3, -173.55, 9.083, 1.231, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 17,
					},
				]
			},
			{
				name: "box_magenta_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.674, tx: 1.6, ty: 227},
						transform: [1.6, 227, 9.083, 0.674, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.674, tx: 1.6, ty: -117.4},
						transform: [1.6, -117.4, 9.083, 0.674, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.674, tx: 1.6, ty: -93.15},
						transform: [1.6, -93.15, 9.083, 0.674, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.674, tx: 1.6, ty: 227},
						transform: [1.6, 227, 9.083, 0.674, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.674, tx: 1.6, ty: 227},
						transform: [1.6, 227, 9.083, 0.674, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 17,
					},
				]
			},
			{
				name: "box_magenta_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: -66.8},
						transform: [1.6, -66.8, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: -324.45},
						transform: [1.6, -324.45, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: -324.45},
						transform: [1.6, -324.45, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: -267.05},
						transform: [1.6, -267.05, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 15,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: -66.8},
						transform: [1.6, -66.8, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: -110.05},
						transform: [1.6, -110.05, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 0.03,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 17,
						to: 17,
					},
				]
			},
			{
				name: "box_grid_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_mainmenu_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -2.351, b: 0, c: 0, d: -1.904, tx: -150.45, ty: -89.65},
						transform: [-150.45, -89.65, 2.351, 1.904, 3.142, 3.142, 3.142],
						alpha: 0.43,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_mainmenu_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -2.752, b: 0, c: 0, d: -2.229, tx: -51, ty: -31},
						transform: [-51, -31, 2.752, 2.229, 3.142, 3.142, 3.142],
						alpha: 0.21,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_mainmenu_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -1.589, b: 0, c: 0, d: -1.287, tx: -278.05, ty: 151.4},
						transform: [-278.05, 151.4, 1.589, 1.287, 3.142, 3.142, 3.142],
						alpha: 0.76,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -1.589, b: 0, c: 0, d: -1.287, tx: -179.8, ty: -87.1},
						transform: [-179.8, -87.1, 1.589, 1.287, 3.142, 3.142, 3.142],
						alpha: 0.13,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_mainmenu_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -2.351, b: 0, c: 0, d: -1.904, tx: -150.45, ty: -89.65},
						transform: [-150.45, -89.65, 2.351, 1.904, 3.142, 3.142, 3.142],
						alpha: 0.43,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 17,
					},
				]
			},
			{
				name: "box_magenta_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: -139.2},
						transform: [1.6, -139.2, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: 189.95},
						transform: [1.6, 189.95, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: 24.1},
						transform: [1.6, 24.1, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: 24.1},
						transform: [1.6, 24.1, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: -139.2},
						transform: [1.6, -139.2, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 17,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 16,
					},
					{
						from: 17,
						to: 17,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_mainmenu_levelselection_glitch_infinito": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {loop: {from:4, to:17}, },
		layers: [
			{
				name: "box_black_x",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 8,
						classname: "_mainmenu_levelselection_box_black_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -6.321, tx: 0.3, ty: -9.2},
						transform: [0.3, -9.2, 9.083, 6.321, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_black_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -6.321, tx: 0.3, ty: -9.2},
						transform: [0.3, -9.2, 9.083, 6.321, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_mainmenu_levelselection_box_black_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -6.321, tx: 0.3, ty: -9.2},
						transform: [0.3, -9.2, 9.083, 6.321, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_mainmenu_levelselection_box_black_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -6.321, tx: 0.3, ty: -9.2},
						transform: [0.3, -9.2, 9.083, 6.321, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_mainmenu_levelselection_box_black_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -6.321, tx: 0.3, ty: -9.2},
						transform: [0.3, -9.2, 9.083, 6.321, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "box_grid_1_x",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 8,
						classname: "_mainmenu_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -0.883, b: 0, c: 0, d: -2.715, tx: 243.95, ty: -41.95},
						transform: [243.95, -41.95, 0.883, 2.715, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -1.309, b: 0, c: 0, d: -1.309, tx: 76.75, ty: 118.8},
						transform: [76.75, 118.8, 1.309, 1.309, 3.142, 3.142, 3.142],
						alpha: 0.5,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_mainmenu_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -2.344, b: 0, c: 0, d: -1.309, tx: 66.45, ty: -210.3},
						transform: [66.45, -210.3, 2.344, 1.309, 3.142, 3.142, 3.142],
						alpha: 0.5,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_mainmenu_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -1.357, b: 0, c: 0, d: -1.309, tx: 240.15, ty: 126.45},
						transform: [240.15, 126.45, 1.357, 1.309, 3.142, 3.142, 3.142],
						alpha: 0.51,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_mainmenu_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -0.883, b: 0, c: 0, d: -2.715, tx: 243.95, ty: -41.95},
						transform: [243.95, -41.95, 0.883, 2.715, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "box_white_x",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 8,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.526, tx: 0.3, ty: -140.45},
						transform: [0.3, -140.45, 9.083, 0.526, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.526, tx: 0.3, ty: -140.45},
						transform: [0.3, -140.45, 9.083, 0.526, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.526, tx: 0.3, ty: -18},
						transform: [0.3, -18, 9.083, 0.526, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.526, tx: 0.3, ty: -159.6},
						transform: [0.3, -159.6, 9.083, 0.526, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.526, tx: 0.3, ty: -140.45},
						transform: [0.3, -140.45, 9.083, 0.526, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "box_white_x",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 8,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.22, tx: 0.3, ty: -9.2},
						transform: [0.3, -9.2, 9.083, 0.22, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.22, tx: 0.3, ty: -219.9},
						transform: [0.3, -219.9, 9.083, 0.22, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.22, tx: 0.3, ty: -219.9},
						transform: [0.3, -219.9, 9.083, 0.22, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.22, tx: 0.3, ty: -219.9},
						transform: [0.3, -219.9, 9.083, 0.22, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.22, tx: 0.3, ty: -9.2},
						transform: [0.3, -9.2, 9.083, 0.22, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "box_cyan_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 35.85},
						transform: [0.3, 35.85, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 0.04,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 124.2},
						transform: [0.3, 124.2, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 124.2},
						transform: [0.3, 124.2, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 124.2},
						transform: [0.3, 124.2, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: -167.9},
						transform: [0.3, -167.9, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 124.2},
						transform: [0.3, 124.2, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "box_magenta_x",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 8,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: -144.3},
						transform: [0.3, -144.3, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: -144.3},
						transform: [0.3, -144.3, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: -19.3},
						transform: [0.3, -19.3, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 257.5},
						transform: [0.3, 257.5, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: -144.3},
						transform: [0.3, -144.3, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "box_cyan_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.31, tx: 0.3, ty: -153.25},
						transform: [0.3, -153.25, 9.083, 0.31, 3.142, 3.142, 3.142],
						alpha: 0.02,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -1.17, tx: 0.3, ty: -318.85},
						transform: [0.3, -318.85, 9.083, 1.17, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -1.17, tx: 0.3, ty: -67.6},
						transform: [0.3, -67.6, 9.083, 1.17, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -1.17, tx: 0.3, ty: 214.3},
						transform: [0.3, 214.3, 9.083, 1.17, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.561, tx: 0.3, ty: -220.45},
						transform: [0.3, -220.45, 9.083, 0.561, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -1.17, tx: 0.3, ty: -318.85},
						transform: [0.3, -318.85, 9.083, 1.17, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "box_cyan_x",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 8,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 37.45},
						transform: [0.3, 37.45, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 37.45},
						transform: [0.3, 37.45, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 37.45},
						transform: [0.3, 37.45, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 138.2},
						transform: [0.3, 138.2, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_mainmenu_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 37.45},
						transform: [0.3, 37.45, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "box_white_x",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 8,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -1.231, tx: 0.3, ty: -173.55},
						transform: [0.3, -173.55, 9.083, 1.231, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -1.231, tx: 0.3, ty: 11.4},
						transform: [0.3, 11.4, 9.083, 1.231, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -1.231, tx: 0.3, ty: 187.4},
						transform: [0.3, 187.4, 9.083, 1.231, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.249, tx: 0.3, ty: 236.55},
						transform: [0.3, 236.55, 9.083, 0.249, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_mainmenu_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -1.231, tx: 0.3, ty: -173.55},
						transform: [0.3, -173.55, 9.083, 1.231, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "box_magenta_x",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 8,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.674, tx: 1.6, ty: 227},
						transform: [1.6, 227, 9.083, 0.674, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.674, tx: 1.6, ty: 227},
						transform: [1.6, 227, 9.083, 0.674, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.674, tx: 1.6, ty: -93.15},
						transform: [1.6, -93.15, 9.083, 0.674, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.674, tx: 1.6, ty: -117.4},
						transform: [1.6, -117.4, 9.083, 0.674, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.674, tx: 1.6, ty: 227},
						transform: [1.6, 227, 9.083, 0.674, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "box_magenta_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: -110.05},
						transform: [1.6, -110.05, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 0.03,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: -66.8},
						transform: [1.6, -66.8, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: -267.05},
						transform: [1.6, -267.05, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: -324.45},
						transform: [1.6, -324.45, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: -324.45},
						transform: [1.6, -324.45, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: -66.8},
						transform: [1.6, -66.8, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "box_grid_1_x",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 8,
						classname: "_mainmenu_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -2.351, b: 0, c: 0, d: -1.904, tx: -150.45, ty: -89.65},
						transform: [-150.45, -89.65, 2.351, 1.904, 3.142, 3.142, 3.142],
						alpha: 0.21,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -1.589, b: 0, c: 0, d: -1.287, tx: -179.8, ty: -87.1},
						transform: [-179.8, -87.1, 1.589, 1.287, 3.142, 3.142, 3.142],
						alpha: 0.13,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_mainmenu_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -1.589, b: 0, c: 0, d: -1.287, tx: -278.05, ty: 151.4},
						transform: [-278.05, 151.4, 1.589, 1.287, 3.142, 3.142, 3.142],
						alpha: 0.76,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_mainmenu_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -2.752, b: 0, c: 0, d: -2.229, tx: -51, ty: -31},
						transform: [-51, -31, 2.752, 2.229, 3.142, 3.142, 3.142],
						alpha: 0.21,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_mainmenu_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -2.351, b: 0, c: 0, d: -1.904, tx: -150.45, ty: -89.65},
						transform: [-150.45, -89.65, 2.351, 1.904, 3.142, 3.142, 3.142],
						alpha: 0.43,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "box_magenta_x",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 8,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: -139.2},
						transform: [1.6, -139.2, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 0.21,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: 24.1},
						transform: [1.6, 24.1, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: 24.1},
						transform: [1.6, 24.1, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: 189.95},
						transform: [1.6, 189.95, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_mainmenu_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: -139.2},
						transform: [1.6, -139.2, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 17,
					},
					{
						from: 18,
						to: 18,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_mainmenu_tvnoise": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "noiseanima",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_levelselection_noiseanima",
						instancename: "",
						matrix: {a: 1.61, b: 0, c: 0, d: 1.085, tx: -10.3, ty: 11},
						transform: [-10.3, 11, 1.61, 1.085, 0, 0, 0],
						alpha: 0.06,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "linescan_anima2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_ui_linescan_anima2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -294.45},
						transform: [0, -294.45, 1, 1, 0, 0, 0],
						alpha: 0.05,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_ui_linescan_anima1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -294.45},
						transform: [0, -294.45, 1, 1, 0, 0, 0],
						alpha: 0.05,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "monitorglass_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_monitorreflejo_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -43.3, ty: 3.15},
						transform: [-43.3, 3.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_skylines_x": {
		type: "bitmap",
		asset: "_mainmenu_skylines_x",
		scale: 1,
		position: [-2.85, -659.6],
	},
	"_mainmenu_edificio_1": {
		type: "movieclip",
		fps: 30,
		totalFrames: 120,
		labels: {loop: {from:1, to:118}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_build_1_x",
						instancename: "",
						matrix: {a: 1.703, b: 0, c: 0.018, d: 1.703, tx: 2073.85, ty: 4.45},
						transform: [2073.85, 4.45, 1.703, 1.703, 0.011, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 118,
						classname: "_mainmenu_build_1_x",
						instancename: "",
						matrix: {a: 1.703, b: 0, c: 0.018, d: 1.703, tx: 2073.85, ty: 4.45},
						transform: [2073.85, 4.45, 1.703, 1.703, 0.011, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.291, 0.688], [0.585, 1], [1, 1], ],
							scale: [[0, 0], [0.256, 0.733], [0.578, 1], [1, 1], ],
							color: [[0, 0], [0.689, 0], [0.813, 0.2], [1, 1], ],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_mainmenu_build_1_x",
						instancename: "",
						matrix: {a: 0.45, b: 0, c: -0.086, d: 0.45, tx: 787.45, ty: 552.6},
						transform: [787.45, 552.6, 0.45, 0.458, -0.189, 0, NaN],
						alpha: 0.62,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						actions: function(self){self.gotoAndPlay(1);},
					},
					{
						from: 1,
						to: 118,
					},
					{
						from: 119,
						to: 119,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_mainmenu_edificio_1_b": {
		type: "movieclip",
		fps: 30,
		totalFrames: 120,
		labels: {loop: {from:1, to:118}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_build_1_x",
						instancename: "",
						matrix: {a: 2.258, b: 0, c: 0.024, d: 2.258, tx: 2256.15, ty: -252.25},
						transform: [2256.15, -252.25, 2.258, 2.258, 0.011, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 118,
						classname: "_mainmenu_build_1_x",
						instancename: "",
						matrix: {a: 2.14, b: 0, c: 0.023, d: 2.14, tx: 2217.45, ty: -197.85},
						transform: [2217.45, -197.85, 2.14, 2.14, 0.011, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.291, 0.688], [0.585, 1], [1, 1], ],
							scale: [[0, 0], [0.256, 0.733], [0.578, 1], [1, 1], ],
							color: [[0, 0], [0.689, 0], [0.813, 0.2], [1, 1], ],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_mainmenu_build_1_x",
						instancename: "",
						matrix: {a: 0.6, b: 0, c: -0.115, d: 0.6, tx: 751.15, ty: 483.3},
						transform: [751.15, 483.3, 0.6, 0.611, -0.189, 0, NaN],
						alpha: 0.62,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						actions: function(self){self.gotoAndPlay(20);},
					},
					{
						from: 1,
						to: 118,
					},
					{
						from: 119,
						to: 119,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_mainmenu_edificio_2": {
		type: "movieclip",
		fps: 30,
		totalFrames: 120,
		labels: {loop: {from:1, to:118}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_build_2_x",
						instancename: "",
						matrix: {a: 1.703, b: 0, c: 0.018, d: 1.703, tx: 2073.85, ty: 4.45},
						transform: [2073.85, 4.45, 1.703, 1.703, 0.011, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 118,
						classname: "_mainmenu_build_2_x",
						instancename: "",
						matrix: {a: 1.703, b: 0, c: 0.018, d: 1.703, tx: 2073.85, ty: 4.45},
						transform: [2073.85, 4.45, 1.703, 1.703, 0.011, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.291, 0.688], [0.585, 1], [1, 1], ],
							scale: [[0, 0], [0.256, 0.733], [0.578, 1], [1, 1], ],
							color: [[0, 0], [0.689, 0], [0.813, 0.2], [1, 1], ],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_mainmenu_build_2_x",
						instancename: "",
						matrix: {a: 0.418, b: 0, c: -0.08, d: 0.418, tx: 774.6, ty: 561.85},
						transform: [774.6, 561.85, 0.418, 0.425, -0.189, 0, NaN],
						alpha: 0.62,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						actions: function(self){self.gotoAndPlay(80);},
					},
					{
						from: 1,
						to: 118,
					},
					{
						from: 119,
						to: 119,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_mainmenu_edificio_2_b": {
		type: "movieclip",
		fps: 30,
		totalFrames: 120,
		labels: {loop: {from:1, to:118}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_build_3_x",
						instancename: "",
						matrix: {a: 1.703, b: 0, c: 0.018, d: 1.703, tx: 2073.85, ty: 4.45},
						transform: [2073.85, 4.45, 1.703, 1.703, 0.011, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 118,
						classname: "_mainmenu_build_3_x",
						instancename: "",
						matrix: {a: 1.703, b: 0, c: 0.018, d: 1.703, tx: 2073.85, ty: 4.45},
						transform: [2073.85, 4.45, 1.703, 1.703, 0.011, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.291, 0.688], [0.585, 1], [1, 1], ],
							scale: [[0, 0], [0.256, 0.733], [0.578, 1], [1, 1], ],
							color: [[0, 0], [0.689, 0], [0.813, 0.2], [1, 1], ],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_mainmenu_build_3_x",
						instancename: "",
						matrix: {a: 0.418, b: 0, c: -0.08, d: 0.418, tx: 738, ty: 561.85},
						transform: [738, 561.85, 0.418, 0.425, -0.189, 0, NaN],
						alpha: 0.62,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						actions: function(self){self.gotoAndPlay(100);},
					},
					{
						from: 1,
						to: 118,
					},
					{
						from: 119,
						to: 119,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_mainmenu_edificio_3": {
		type: "movieclip",
		fps: 30,
		totalFrames: 120,
		labels: {loop: {from:1, to:118}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_build_3_x",
						instancename: "",
						matrix: {a: 1.703, b: 0, c: 0.018, d: 1.703, tx: 2103.1, ty: 4.45},
						transform: [2103.1, 4.45, 1.703, 1.703, 0.011, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 118,
						classname: "_mainmenu_build_3_x",
						instancename: "",
						matrix: {a: 1.703, b: 0, c: 0.018, d: 1.703, tx: 2073.85, ty: 4.45},
						transform: [2073.85, 4.45, 1.703, 1.703, 0.011, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.291, 0.688], [0.585, 1], [1, 1], ],
							scale: [[0, 0], [0.256, 0.733], [0.578, 1], [1, 1], ],
							color: [[0, 0], [0.689, 0], [0.813, 0.2], [1, 1], ],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_mainmenu_build_3_x",
						instancename: "",
						matrix: {a: 0.418, b: 0, c: -0.08, d: 0.418, tx: 738.6, ty: 561.85},
						transform: [738.6, 561.85, 0.418, 0.425, -0.189, 0, NaN],
						alpha: 0.62,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						actions: function(self){self.gotoAndPlay(40);},
					},
					{
						from: 1,
						to: 118,
					},
					{
						from: 119,
						to: 119,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_mainmenu_edificio_3_b": {
		type: "movieclip",
		fps: 30,
		totalFrames: 120,
		labels: {loop: {from:1, to:118}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_build_2_x",
						instancename: "",
						matrix: {a: 1.703, b: 0, c: 0.018, d: 1.703, tx: 2103.1, ty: 4.45},
						transform: [2103.1, 4.45, 1.703, 1.703, 0.011, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 118,
						classname: "_mainmenu_build_2_x",
						instancename: "",
						matrix: {a: 1.703, b: 0, c: 0.018, d: 1.703, tx: 2073.85, ty: 4.45},
						transform: [2073.85, 4.45, 1.703, 1.703, 0.011, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.291, 0.688], [0.585, 1], [1, 1], ],
							scale: [[0, 0], [0.256, 0.733], [0.578, 1], [1, 1], ],
							color: [[0, 0], [0.689, 0], [0.813, 0.2], [1, 1], ],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_mainmenu_build_2_x",
						instancename: "",
						matrix: {a: 0.418, b: 0, c: -0.08, d: 0.418, tx: 738.6, ty: 561.85},
						transform: [738.6, 561.85, 0.418, 0.425, -0.189, 0, NaN],
						alpha: 0.62,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						actions: function(self){self.gotoAndPlay(60);},
					},
					{
						from: 1,
						to: 118,
					},
					{
						from: 119,
						to: 119,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_mainmenu_polar_anima": {
		type: "movieclip",
		fps: 30,
		totalFrames: 30,
		labels: {},
		layers: [
			{
				name: "polar_ear",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_mainmenu_polar_ear",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -55.45, ty: -281.35},
						transform: [-55.45, -281.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_mainmenu_polar_ear",
						instancename: "",
						matrix: {a: -0.995, b: -0.099, c: -0.099, d: 0.995, tx: -55.45, ty: -268.7},
						transform: [-55.45, -268.7, 1, 1, -0.099, -3.042, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_mainmenu_polar_ear",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -55.45, ty: -281.35},
						transform: [-55.45, -281.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "polar_ear",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_mainmenu_polar_ear",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 63.2, ty: -283.3},
						transform: [63.2, -283.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_mainmenu_polar_ear",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.199, d: 0.98, tx: 61.95, ty: -269.5},
						transform: [61.95, -269.5, 1, 1, 0.2, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_mainmenu_polar_ear",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 63.2, ty: -283.3},
						transform: [63.2, -283.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "polar_body",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_mainmenu_polar_body",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.35, ty: -34.4},
						transform: [-5.35, -34.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_mainmenu_polar_body",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.981, tx: -5.35, ty: -24.9},
						transform: [-5.35, -24.9, 1, 0.981, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_mainmenu_polar_body",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.35, ty: -34.4},
						transform: [-5.35, -34.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "polar_leg",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_mainmenu_polar_leg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.995, tx: -128.45, ty: 164},
						transform: [-128.45, 164, 1, 0.995, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_mainmenu_polar_leg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.957, tx: -128.45, ty: 170.05},
						transform: [-128.45, 170.05, 1, 0.957, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_mainmenu_polar_leg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.995, tx: -128.45, ty: 164},
						transform: [-128.45, 164, 1, 0.995, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "polar_leg",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_mainmenu_polar_leg",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.956, tx: 112.8, ty: 172.5},
						transform: [112.8, 172.5, 1, 0.956, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_mainmenu_polar_leg",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.923, tx: 112.8, ty: 177.7},
						transform: [112.8, 177.7, 1, 0.923, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_mainmenu_polar_leg",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.956, tx: 112.8, ty: 172.5},
						transform: [112.8, 172.5, 1, 0.956, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_mainmenu_tote",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -147, ty: 38.65},
						transform: [-147, 38.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_mainmenu_tote",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.027, d: 0.985, tx: -149.65, ty: 40.65},
						transform: [-149.65, 40.65, 1, 0.985, -0.027, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_mainmenu_tote",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -147, ty: 38.65},
						transform: [-147, 38.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "polar_arm",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_mainmenu_polar_arm",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -103.9, ty: -185.25},
						transform: [-103.9, -185.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_mainmenu_polar_arm",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.049, d: 0.95, tx: -105.45, ty: -173.7},
						transform: [-105.45, -173.7, 1, 0.951, -0.051, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_mainmenu_polar_arm",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -103.9, ty: -185.25},
						transform: [-103.9, -185.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_mainmenu_toteup",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -114.9, ty: -68.35},
						transform: [-114.9, -68.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_mainmenu_toteup",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -115.9, ty: -65.35},
						transform: [-115.9, -65.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_mainmenu_toteup",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -114.9, ty: -68.35},
						transform: [-114.9, -68.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "polar_arm",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_mainmenu_polar_arm",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 113.75, ty: -185.25},
						transform: [113.75, -185.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_mainmenu_polar_arm",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.007, d: 0.957, tx: 118.25, ty: -173.75},
						transform: [118.25, -173.75, 1, 0.957, 0.007, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_mainmenu_polar_arm",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 113.75, ty: -185.25},
						transform: [113.75, -185.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "vacuum",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_mainmenu_vacuum",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.4, ty: 320.45},
						transform: [-8.4, 320.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_mainmenu_vacuum",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.4, ty: 320.45},
						transform: [-8.4, 320.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_mainmenu_vacuum",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.4, ty: 320.45},
						transform: [-8.4, 320.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "glasses_all",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_mainmenu_glasses_all",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.85, ty: -257.7},
						transform: [1.85, -257.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_mainmenu_glasses_all",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.85, ty: -247.05},
						transform: [1.85, -247.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_mainmenu_glasses_all",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.85, ty: -257.7},
						transform: [1.85, -257.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "morro",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_mainmenu_morro",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.3, ty: -247.7},
						transform: [3.3, -247.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_mainmenu_morro",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.949, tx: 3.3, ty: -237.3},
						transform: [3.3, -237.3, 1, 0.949, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_mainmenu_morro",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.3, ty: -247.7},
						transform: [3.3, -247.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_ui_hitbox_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_hitbox_x",
		scale: 1,
		position: [-55, -55],
	},
	"_mainmenu_playbg_x": {
		type: "bitmap",
		asset: "_mainmenu_playbg_x",
		scale: 1,
		position: [-141.8, -109.8],
	},
	"_mainmenu_playcircle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 29,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 109.2, ty: -5.15},
						transform: [109.2, -5.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 109.2, ty: -30.2},
						transform: [109.2, -30.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_mainmenu_playcircle_2_x",
						instancename: "",
						matrix: {a: 0.242, b: -0.973, c: 0.985, d: 0.173, tx: 104.55, ty: -72.75},
						transform: [104.55, -72.75, 1.002, 1, 1.397, -1.327, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_mainmenu_playcircle_2_x",
						instancename: "",
						matrix: {a: -0.373, b: -0.942, c: 0.977, d: -0.215, tx: 90.1, ty: -83.65},
						transform: [90.1, -83.65, 1.013, 1, 1.788, -1.948, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 0, b: -1, c: 1, d: 0, tx: 65.25, ty: -85.6},
						transform: [65.25, -85.6, 1, 1, 1.571, -1.571, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 0, b: -1, c: 1, d: 0, tx: 53.75, ty: -85.6},
						transform: [53.75, -85.6, 1, 1, 1.571, -1.571, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 0, b: -1, c: 1, d: 0, tx: 30.5, ty: -85.6},
						transform: [30.5, -85.6, 1, 1, 1.571, -1.571, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 0, b: -1, c: 1, d: 0, tx: 6, ty: -85.6},
						transform: [6, -85.6, 1, 1, 1.571, -1.571, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 0, b: -1, c: 1, d: 0, tx: -18.1, ty: -85.6},
						transform: [-18.1, -85.6, 1, 1, 1.571, -1.571, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 0, b: -1, c: 1, d: 0, tx: -42.25, ty: -85.6},
						transform: [-42.25, -85.6, 1, 1, 1.571, -1.571, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 0, b: -1, c: 1, d: 0, tx: -61.45, ty: -85.6},
						transform: [-61.45, -85.6, 1, 1, 1.571, -1.571, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_mainmenu_playcircle_2_x",
						instancename: "",
						matrix: {a: -0.978, b: -0.208, c: 0.335, d: -0.841, tx: -93, ty: -82},
						transform: [-93, -82, 1, 0.905, 2.763, -2.932, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_mainmenu_playcircle_2_x",
						instancename: "",
						matrix: {a: -0.956, b: 0.318, c: -0.235, d: -0.968, tx: -106.5, ty: -68},
						transform: [-106.5, -68, 1.007, 0.996, -2.904, 2.821, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: -109.2, ty: -25.3},
						transform: [-109.2, -25.3, 1, 1, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: -109.2, ty: -2.35},
						transform: [-109.2, -2.35, 1, 1, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: -109.2, ty: 22.2},
						transform: [-109.2, 22.2, 1, 1, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 16,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: -109.2, ty: 37.1},
						transform: [-109.2, 37.1, 1, 1, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 17,
						classname: "_mainmenu_playcircle_2_x",
						instancename: "",
						matrix: {a: -0.359, b: 0.965, c: -0.947, d: -0.321, tx: -109, ty: 64.55},
						transform: [-109, 64.55, 1.029, 1, -1.898, 1.927, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 18,
						classname: "_mainmenu_playcircle_2_x",
						instancename: "",
						matrix: {a: 0.247, b: 0.97, c: -0.979, d: 0.203, tx: -93.55, ty: 82.3},
						transform: [-93.55, 82.3, 1.001, 1, -1.366, 1.322, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 19,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 0, b: -1, c: -1, d: 0, tx: -63.8, ty: 85.8},
						transform: [-63.8, 85.8, 1, 1, -1.571, -1.571, -1.571],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 20,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 0, b: -1, c: -1, d: 0, tx: -37.2, ty: 85.8},
						transform: [-37.2, 85.8, 1, 1, -1.571, -1.571, -1.571],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 21,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 0, b: -1, c: -1, d: 0, tx: -13.95, ty: 85.8},
						transform: [-13.95, 85.8, 1, 1, -1.571, -1.571, -1.571],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 22,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 0, b: -1, c: -1, d: 0, tx: 9.3, ty: 85.8},
						transform: [9.3, 85.8, 1, 1, -1.571, -1.571, -1.571],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 23,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 0, b: -1, c: -1, d: 0, tx: 43.85, ty: 85.8},
						transform: [43.85, 85.8, 1, 1, -1.571, -1.571, -1.571],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 24,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 0, b: -1, c: -1, d: 0, tx: 63.1, ty: 85.8},
						transform: [63.1, 85.8, 1, 1, -1.571, -1.571, -1.571],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 25,
						classname: "_mainmenu_playcircle_2_x",
						instancename: "",
						matrix: {a: 0.933, b: 0.366, c: -0.429, d: 0.904, tx: 89.65, ty: 84},
						transform: [89.65, 84, 1.002, 1, -0.443, 0.374, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 26,
						classname: "_mainmenu_playcircle_2_x",
						instancename: "",
						matrix: {a: 0.981, b: -0.194, c: 0.213, d: 1.075, tx: 106.6, ty: 70.4},
						transform: [106.6, 70.4, 1, 1.096, 0.196, -0.196, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 27,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 109.2, ty: 40.5},
						transform: [109.2, 40.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 28,
						classname: "_mainmenu_playcircle_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 109.2, ty: 16.4},
						transform: [109.2, 16.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_ui_icon_play_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_icon_play_x",
		scale: 1,
		position: [-59.85, -69.85],
	},
	"_mainmenu_plus": {
		type: "movieclip",
		fps: 30,
		totalFrames: 2,
		labels: {on: {from:0, to:0}, off: {from:1, to:1}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_plus_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_mainmenu_plus_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 0,
						actions: function(self){self.stop();},
					},
					{
						from: 1,
						to: 1,
						actions: function(self){self.stop();},
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 1,
					},
				]
			},
		]
	},
	"_mainmenu_lines1": {
		type: "movieclip",
		fps: 30,
		totalFrames: 60,
		labels: {},
		layers: [
			{
				name: "spike",
				keys: [
					{
						from: 0,
						to: 33,
						classname: "_mainmenu_spike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.8, ty: 100.55},
						transform: [-2.8, 100.55, 1, 1, 0, 0, 0],
						alpha: 0.2,
						visible: true,
						tween: false,
					},
					{
						from: 34,
						to: 39,
						classname: "_mainmenu_spike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.8, ty: 100.55},
						transform: [-2.8, 100.55, 1, 1, 0, 0, 0],
						alpha: 0.2,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 40,
						to: 44,
						classname: "_mainmenu_spike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.8, ty: 100.55},
						transform: [-2.8, 100.55, 1, 1, 0, 0, 0],
						alpha: 0.5,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 45,
						to: 59,
						classname: "_mainmenu_spike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.8, ty: 100.55},
						transform: [-2.8, 100.55, 1, 1, 0, 0, 0],
						alpha: 0.2,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "spike",
				keys: [
					{
						from: 0,
						to: 29,
						classname: "_mainmenu_spike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -29.55, ty: 50.15},
						transform: [-29.55, 50.15, 1, 1, 0, 0, 0],
						alpha: 0.2,
						visible: true,
						tween: false,
					},
					{
						from: 30,
						to: 35,
						classname: "_mainmenu_spike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -29.55, ty: 50.15},
						transform: [-29.55, 50.15, 1, 1, 0, 0, 0],
						alpha: 0.2,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 36,
						to: 40,
						classname: "_mainmenu_spike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -29.55, ty: 50.15},
						transform: [-29.55, 50.15, 1, 1, 0, 0, 0],
						alpha: 0.5,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 59,
						classname: "_mainmenu_spike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -29.55, ty: 50.15},
						transform: [-29.55, 50.15, 1, 1, 0, 0, 0],
						alpha: 0.2,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "spike",
				keys: [
					{
						from: 0,
						to: 25,
						classname: "_mainmenu_spike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -56.25, ty: -0.1},
						transform: [-56.25, -0.1, 1, 1, 0, 0, 0],
						alpha: 0.2,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 31,
						classname: "_mainmenu_spike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -56.25, ty: -0.1},
						transform: [-56.25, -0.1, 1, 1, 0, 0, 0],
						alpha: 0.2,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 36,
						classname: "_mainmenu_spike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -56.25, ty: -0.1},
						transform: [-56.25, -0.1, 1, 1, 0, 0, 0],
						alpha: 0.5,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 37,
						to: 59,
						classname: "_mainmenu_spike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -56.25, ty: -0.1},
						transform: [-56.25, -0.1, 1, 1, 0, 0, 0],
						alpha: 0.2,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "spike",
				keys: [
					{
						from: 0,
						to: 21,
						classname: "_mainmenu_spike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -82.95, ty: -50.35},
						transform: [-82.95, -50.35, 1, 1, 0, 0, 0],
						alpha: 0.2,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 27,
						classname: "_mainmenu_spike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -82.95, ty: -50.35},
						transform: [-82.95, -50.35, 1, 1, 0, 0, 0],
						alpha: 0.2,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 32,
						classname: "_mainmenu_spike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -82.95, ty: -50.35},
						transform: [-82.95, -50.35, 1, 1, 0, 0, 0],
						alpha: 0.5,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 59,
						classname: "_mainmenu_spike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -82.95, ty: -50.35},
						transform: [-82.95, -50.35, 1, 1, 0, 0, 0],
						alpha: 0.2,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "spike",
				keys: [
					{
						from: 0,
						to: 17,
						classname: "_mainmenu_spike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -109.65, ty: -100.6},
						transform: [-109.65, -100.6, 1, 1, 0, 0, 0],
						alpha: 0.2,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 23,
						classname: "_mainmenu_spike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -109.65, ty: -100.6},
						transform: [-109.65, -100.6, 1, 1, 0, 0, 0],
						alpha: 0.2,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 28,
						classname: "_mainmenu_spike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -109.65, ty: -100.6},
						transform: [-109.65, -100.6, 1, 1, 0, 0, 0],
						alpha: 0.5,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 59,
						classname: "_mainmenu_spike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -109.65, ty: -100.6},
						transform: [-109.65, -100.6, 1, 1, 0, 0, 0],
						alpha: 0.2,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_title_english_x": {
		type: "bitmap",
		asset: "_mainmenu_title_english_x",
		scale: 1,
		position: [-504.05, -223.7],
	},
	"_mainmenu_title_portuguese_x": {
		type: "bitmap",
		asset: "_mainmenu_title_portuguese_x",
		scale: 1,
		position: [-480.25, -223.7],
	},
	"_mainmenu_title_spanish_x": {
		type: "bitmap",
		asset: "_mainmenu_title_spanish_x",
		scale: 1,
		position: [-511.9, -223.7],
	},
	"_mainmenu_ui_button_music_on": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {over: {from:0, to:6}, down: {from:7, to:13}, out: {from:14, to:19}, },
		layers: [
			{
				name: "hitbox",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_mainmenu_ui_hitbox_x",
						instancename: "",
						matrix: {a: 1.62, b: 0, c: 0, d: 1.643, tx: -2.3, ty: -0.75},
						transform: [-2.3, -0.75, 1.62, 1.643, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_mainmenu_ui_icon_music_on_x",
						instancename: "",
						matrix: {a: 0.775, b: 0, c: 0, d: 0.775, tx: -4.95, ty: -2.45},
						transform: [-4.95, -2.45, 0.775, 0.775, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_mainmenu_ui_icon_music_on_x",
						instancename: "",
						matrix: {a: 0.974, b: 0, c: 0, d: 0.974, tx: -4.95, ty: -2.45},
						transform: [-4.95, -2.45, 0.974, 0.974, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_mainmenu_ui_icon_music_on_x",
						instancename: "",
						matrix: {a: 0.974, b: 0, c: 0, d: 0.974, tx: -4.95, ty: -2.45},
						transform: [-4.95, -2.45, 0.974, 0.974, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_mainmenu_ui_icon_music_on_x",
						instancename: "",
						matrix: {a: 0.974, b: 0, c: 0, d: 0.974, tx: -4.95, ty: -2.45},
						transform: [-4.95, -2.45, 0.974, 0.974, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_mainmenu_ui_icon_music_on_x",
						instancename: "",
						matrix: {a: 0.775, b: 0, c: 0, d: 0.775, tx: -4.95, ty: -2.45},
						transform: [-4.95, -2.45, 0.775, 0.775, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "code",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 6,
						actions: function(self){self.stop();},
					},
					{
						from: 7,
						to: 12,
					},
					{
						from: 13,
						to: 13,
						actions: function(self){self.stop();},
					},
					{
						from: 14,
						to: 18,
					},
					{
						from: 19,
						to: 19,
						actions: function(self){self.stop();},
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 6,
					},
					{
						from: 7,
						to: 13,
					},
					{
						from: 14,
						to: 19,
					},
				]
			},
		]
	},
	"_mainmenu_ui_button_music_off": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {over: {from:0, to:6}, down: {from:7, to:13}, out: {from:14, to:19}, },
		layers: [
			{
				name: "hitbox",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_mainmenu_ui_hitbox_x",
						instancename: "",
						matrix: {a: 1.62, b: 0, c: 0, d: 1.643, tx: -2.3, ty: -0.75},
						transform: [-2.3, -0.75, 1.62, 1.643, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_mainmenu_ui_icon_music_off_x",
						instancename: "",
						matrix: {a: 0.775, b: 0, c: 0, d: 0.775, tx: -4.95, ty: -2.45},
						transform: [-4.95, -2.45, 0.775, 0.775, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_mainmenu_ui_icon_music_off_x",
						instancename: "",
						matrix: {a: 0.974, b: 0, c: 0, d: 0.974, tx: -4.95, ty: -2.45},
						transform: [-4.95, -2.45, 0.974, 0.974, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_mainmenu_ui_icon_music_off_x",
						instancename: "",
						matrix: {a: 0.974, b: 0, c: 0, d: 0.974, tx: -4.95, ty: -2.45},
						transform: [-4.95, -2.45, 0.974, 0.974, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_mainmenu_ui_icon_music_off_x",
						instancename: "",
						matrix: {a: 0.974, b: 0, c: 0, d: 0.974, tx: -4.95, ty: -2.45},
						transform: [-4.95, -2.45, 0.974, 0.974, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_mainmenu_ui_icon_music_off_x",
						instancename: "",
						matrix: {a: 0.775, b: 0, c: 0, d: 0.775, tx: -4.95, ty: -2.45},
						transform: [-4.95, -2.45, 0.775, 0.775, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "code",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 6,
						actions: function(self){self.stop();},
					},
					{
						from: 7,
						to: 12,
					},
					{
						from: 13,
						to: 13,
						actions: function(self){self.stop();},
					},
					{
						from: 14,
						to: 18,
					},
					{
						from: 19,
						to: 19,
						actions: function(self){self.stop();},
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 6,
					},
					{
						from: 7,
						to: 13,
					},
					{
						from: 14,
						to: 19,
					},
				]
			},
		]
	},
	"_mainmenu_levelselection_box_black_x": {
		type: "bitmap",
		asset: "_mainmenu_levelselection_box_black_x",
		scale: 1,
		position: [-55, -55],
	},
	"_mainmenu_levelselection_box_grid_1_x": {
		type: "bitmap",
		asset: "_mainmenu_levelselection_box_grid_1_x",
		scale: 1,
		position: [-164.05, -149.3],
	},
	"_mainmenu_levelselection_box_white_x": {
		type: "bitmap",
		asset: "_mainmenu_levelselection_box_white_x",
		scale: 1,
		position: [-55, -55],
	},
	"_mainmenu_levelselection_box_cyan_x": {
		type: "bitmap",
		asset: "_mainmenu_levelselection_box_cyan_x",
		scale: 1,
		position: [-55, -55],
	},
	"_mainmenu_levelselection_box_magenta_x": {
		type: "bitmap",
		asset: "_mainmenu_levelselection_box_magenta_x",
		scale: 1,
		position: [-55, -55],
	},
	"_mainmenu_levelselection_noiseanima": {
		type: "movieclip",
		fps: 30,
		totalFrames: 4,
		labels: {},
		layers: [
			{
				name: "Noise1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_levelselection_noise1_x",
						instancename: "",
						matrix: {a: 3.97, b: 0, c: 0, d: 3.358, tx: 0.05, ty: -4.8},
						transform: [0.05, -4.8, 3.97, 3.358, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_mainmenu_levelselection_noise1_x",
						instancename: "",
						matrix: {a: -3.97, b: 0, c: 0, d: 3.358, tx: 0.45, ty: -4.8},
						transform: [0.45, -4.8, 3.97, 3.358, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_mainmenu_levelselection_noise1_x",
						instancename: "",
						matrix: {a: -3.97, b: 0, c: 0, d: -3.358, tx: 0.45, ty: -4.8},
						transform: [0.45, -4.8, 3.97, 3.358, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_mainmenu_levelselection_noise1_x",
						instancename: "",
						matrix: {a: 3.97, b: 0, c: 0, d: -3.358, tx: 0.05, ty: -4.8},
						transform: [0.05, -4.8, 3.97, 3.358, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_ui_linescan_anima2": {
		type: "movieclip",
		fps: 30,
		totalFrames: 86,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_mainmenu_ui_linescan",
						instancename: "",
						matrix: {a: 27.993, b: 0, c: 0, d: 1, tx: -0.7, ty: -83.55},
						transform: [-0.7, -83.55, 27.993, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 57,
						classname: "_mainmenu_ui_linescan",
						instancename: "",
						matrix: {a: 27.993, b: 0, c: 0, d: 1, tx: -0.7, ty: 776.15},
						transform: [-0.7, 776.15, 27.993, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 58,
						to: 85,
					},
				]
			},
		]
	},
	"_mainmenu_ui_linescan_anima1": {
		type: "movieclip",
		fps: 30,
		totalFrames: 118,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 16,
					},
					{
						from: 17,
						to: 73,
						classname: "_mainmenu_ui_linescan",
						instancename: "",
						matrix: {a: 27.993, b: 0, c: 0, d: 1, tx: -0.7, ty: -83.55},
						transform: [-0.7, -83.55, 27.993, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 74,
						to: 74,
						classname: "_mainmenu_ui_linescan",
						instancename: "",
						matrix: {a: 27.993, b: 0, c: 0, d: 1, tx: -0.7, ty: 776.15},
						transform: [-0.7, 776.15, 27.993, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 75,
						to: 117,
					},
				]
			},
		]
	},
	"_mainmenu_monitorreflejo_x": {
		type: "bitmap",
		asset: "_mainmenu_monitorreflejo_x",
		scale: 1,
		position: [-662.55, -396.25],
	},
	"_mainmenu_build_1_x": {
		type: "bitmap",
		asset: "_mainmenu_build_1_x",
		scale: 1,
		position: [-338.5, -515.85],
	},
	"_mainmenu_build_2_x": {
		type: "bitmap",
		asset: "_mainmenu_build_2_x",
		scale: 1,
		position: [-369.85, -330.5],
	},
	"_mainmenu_build_3_x": {
		type: "bitmap",
		asset: "_mainmenu_build_3_x",
		scale: 1,
		position: [-369.85, -482.2],
	},
	"_mainmenu_polar_ear": {
		type: "movieclip",
		fps: 30,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_mainmenu_polar_ear_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_mainmenu_polar_ear_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_mainmenu_polar_ear_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.6,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_mainmenu_polar_ear_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_polar_body": {
		type: "movieclip",
		fps: 30,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_mainmenu_polar_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_mainmenu_polar_body_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_mainmenu_polar_body_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.6,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_mainmenu_polar_body_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_polar_leg": {
		type: "movieclip",
		fps: 30,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_mainmenu_polar_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_mainmenu_polar_leg_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_mainmenu_polar_leg_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.6,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_mainmenu_polar_leg_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_tote": {
		type: "movieclip",
		fps: 30,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_mainmenu_tote_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_mainmenu_tote_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.7,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_mainmenu_tote_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.5,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_mainmenu_tote_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.7,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.571, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_mainmenu_polar_arm": {
		type: "movieclip",
		fps: 30,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_mainmenu_polar_arm_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_mainmenu_polar_arm_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_mainmenu_polar_arm_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.6,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_mainmenu_polar_arm_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_toteup": {
		type: "movieclip",
		fps: 30,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_mainmenu_toteup_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_mainmenu_toteup_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.7,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_mainmenu_toteup_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.5,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_mainmenu_toteup_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.7,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.571, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_mainmenu_vacuum": {
		type: "movieclip",
		fps: 30,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_mainmenu_vacuum_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_mainmenu_vacuum_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.559, 0], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_mainmenu_vacuum_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.6,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.559, 0], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_mainmenu_vacuum_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_mainmenu_lightvaccum_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -33.1},
						transform: [-0.65, -33.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.557, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_mainmenu_lightvaccum_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -33.1},
						transform: [-0.65, -33.1, 1, 1, 0, 0, 0],
						alpha: 0.6,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.557, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_mainmenu_lightvaccum_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -33.1},
						transform: [-0.65, -33.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_glasses_all": {
		type: "movieclip",
		fps: 30,
		totalFrames: 43,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 42,
						classname: "_mainmenu_glasses_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_reflejoanteojos_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.45},
						transform: [0, -0.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_mainmenu_reflejoanteojos_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.45},
						transform: [0, -0.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_mainmenu_reflejoanteojos_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.45},
						transform: [0, -0.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_mainmenu_reflejoanteojos_4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.45},
						transform: [0, -0.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_mainmenu_reflejoanteojos_5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.45},
						transform: [0, -0.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_mainmenu_reflejoanteojos_6_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.45},
						transform: [0, -0.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_mainmenu_reflejoanteojos_7_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.45},
						transform: [0, -0.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_mainmenu_reflejoanteojos_8_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.45},
						transform: [0, -0.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
						classname: "_mainmenu_reflejoanteojos_9_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.45},
						transform: [0, -0.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_mainmenu_reflejoanteojos_10_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.45},
						transform: [0, -0.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_mainmenu_reflejoanteojos_11_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.45},
						transform: [0, -0.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_mainmenu_reflejoanteojos_12_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.45},
						transform: [0, -0.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 42,
					},
				]
			},
		]
	},
	"_mainmenu_morro": {
		type: "movieclip",
		fps: 30,
		totalFrames: 30,
		labels: {},
		layers: [
			{
				name: "morro_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_mainmenu_morro_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 19.85, ty: 18.1},
						transform: [19.85, 18.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.504, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 28,
						classname: "_mainmenu_morro_x",
						instancename: "",
						matrix: {a: 1.006, b: 0, c: 0, d: 1, tx: 20.15, ty: 18.1},
						transform: [20.15, 18.1, 1.006, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.504, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_mainmenu_morro_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 19.85, ty: 18.1},
						transform: [19.85, 18.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "nose_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_mainmenu_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.3, ty: -2.6},
						transform: [0.3, -2.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.504, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 28,
						classname: "_mainmenu_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.3, ty: -6.6},
						transform: [0.3, -6.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.504, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_mainmenu_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.3, ty: -2.6},
						transform: [0.3, -2.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mouth_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_mainmenu_mouth_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.9, ty: 61.15},
						transform: [3.9, 61.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.504, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 28,
						classname: "_mainmenu_mouth_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 8.2, ty: 55.9},
						transform: [8.2, 55.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.504, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_mainmenu_mouth_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.9, ty: 61.15},
						transform: [3.9, 61.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_playcircle_1_x": {
		type: "bitmap",
		asset: "_mainmenu_playcircle_1_x",
		scale: 1,
		position: [-20.1, -41.5],
	},
	"_mainmenu_playcircle_2_x": {
		type: "bitmap",
		asset: "_mainmenu_playcircle_2_x",
		scale: 1,
		position: [-42.9, -37.8],
	},
	"_mainmenu_plus_x": {
		type: "bitmap",
		asset: "_mainmenu_plus_x",
		scale: 1,
		position: [-35.15, -31.85],
	},
	"_mainmenu_spike_x": {
		type: "bitmap",
		asset: "_mainmenu_spike_x",
		scale: 1,
		position: [-425.1, -50],
	},
	"_mainmenu_ui_icon_music_on_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_icon_music_on_x",
		scale: 1,
		position: [-66.25, -73.05],
	},
	"_mainmenu_ui_icon_music_off_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_icon_music_off_x",
		scale: 1,
		position: [-66.25, -73.05],
	},
	"_mainmenu_levelselection_noise1_x": {
		type: "bitmap",
		asset: "_mainmenu_levelselection_noise1_x",
		scale: 1,
		position: [-105, -105],
	},
	"_mainmenu_ui_linescan": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_mainmenu_ui_linescan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_mainmenu_polar_ear_x": {
		type: "bitmap",
		asset: "_mainmenu_polar_ear_x",
		scale: 1,
		position: [-17.7, -20.1],
	},
	"_mainmenu_polar_ear_cyan_x": {
		type: "bitmap",
		asset: "_mainmenu_polar_ear_cyan_x",
		scale: 1,
		position: [-26.4, -35.25],
	},
	"_mainmenu_polar_body_x": {
		type: "bitmap",
		asset: "_mainmenu_polar_body_x",
		scale: 1,
		position: [-202.25, -270.7],
	},
	"_mainmenu_polar_body_cyan_x": {
		type: "bitmap",
		asset: "_mainmenu_polar_body_cyan_x",
		scale: 1,
		position: [-224.7, -284.5],
	},
	"_mainmenu_polar_leg_x": {
		type: "bitmap",
		asset: "_mainmenu_polar_leg_x",
		scale: 1,
		position: [-118.5, -57.1],
	},
	"_mainmenu_polar_leg_cyan_x": {
		type: "bitmap",
		asset: "_mainmenu_polar_leg_cyan_x",
		scale: 1,
		position: [-160.15, -72.1],
	},
	"_mainmenu_tote_x": {
		type: "bitmap",
		asset: "_mainmenu_tote_x",
		scale: 1,
		position: [-97.95, -68.1],
	},
	"_mainmenu_tote_cyan_x": {
		type: "bitmap",
		asset: "_mainmenu_tote_cyan_x",
		scale: 1,
		position: [-117.1, -86.05],
	},
	"_mainmenu_polar_arm_x": {
		type: "bitmap",
		asset: "_mainmenu_polar_arm_x",
		scale: 1,
		position: [-104.6, 11.8],
	},
	"_mainmenu_polar_arm_cyan_x": {
		type: "bitmap",
		asset: "_mainmenu_polar_arm_cyan_x",
		scale: 1,
		position: [-139.15, 0.5499999999999998],
	},
	"_mainmenu_toteup_x": {
		type: "bitmap",
		asset: "_mainmenu_toteup_x",
		scale: 1,
		position: [-49.85, -99.1],
	},
	"_mainmenu_toteup_cyan_x": {
		type: "bitmap",
		asset: "_mainmenu_toteup_cyan_x",
		scale: 1,
		position: [-117.1, -99.95],
	},
	"_mainmenu_vacuum_bg_x": {
		type: "bitmap",
		asset: "_mainmenu_vacuum_bg_x",
		scale: 1,
		position: [-296.95, -57.15],
	},
	"_mainmenu_vacuum_cyan_x": {
		type: "bitmap",
		asset: "_mainmenu_vacuum_cyan_x",
		scale: 1,
		position: [-334.3, -70.55],
	},
	"_mainmenu_lightvaccum_x": {
		type: "bitmap",
		asset: "_mainmenu_lightvaccum_x",
		scale: 1,
		position: [-150.4, -73.55],
	},
	"_mainmenu_glasses_bg_x": {
		type: "bitmap",
		asset: "_mainmenu_glasses_bg_x",
		scale: 1,
		position: [-109.4, -29.35],
	},
	"_mainmenu_reflejoanteojos_1_x": {
		type: "bitmap",
		asset: "_mainmenu_reflejoanteojos_1_x",
		scale: 1,
		position: [-98.3, -22.2],
	},
	"_mainmenu_reflejoanteojos_2_x": {
		type: "bitmap",
		asset: "_mainmenu_reflejoanteojos_2_x",
		scale: 1,
		position: [-98.3, -22.2],
	},
	"_mainmenu_reflejoanteojos_3_x": {
		type: "bitmap",
		asset: "_mainmenu_reflejoanteojos_3_x",
		scale: 1,
		position: [-98.3, -22.2],
	},
	"_mainmenu_reflejoanteojos_4_x": {
		type: "bitmap",
		asset: "_mainmenu_reflejoanteojos_4_x",
		scale: 1,
		position: [-98.3, -22.2],
	},
	"_mainmenu_reflejoanteojos_5_x": {
		type: "bitmap",
		asset: "_mainmenu_reflejoanteojos_5_x",
		scale: 1,
		position: [-98.3, -22.2],
	},
	"_mainmenu_reflejoanteojos_6_x": {
		type: "bitmap",
		asset: "_mainmenu_reflejoanteojos_6_x",
		scale: 1,
		position: [-98.3, -22.2],
	},
	"_mainmenu_reflejoanteojos_7_x": {
		type: "bitmap",
		asset: "_mainmenu_reflejoanteojos_7_x",
		scale: 1,
		position: [-98.3, -22.2],
	},
	"_mainmenu_reflejoanteojos_8_x": {
		type: "bitmap",
		asset: "_mainmenu_reflejoanteojos_8_x",
		scale: 1,
		position: [-98.3, -22.2],
	},
	"_mainmenu_reflejoanteojos_9_x": {
		type: "bitmap",
		asset: "_mainmenu_reflejoanteojos_9_x",
		scale: 1,
		position: [-98.3, -22.2],
	},
	"_mainmenu_reflejoanteojos_10_x": {
		type: "bitmap",
		asset: "_mainmenu_reflejoanteojos_10_x",
		scale: 1,
		position: [-98.3, -22.2],
	},
	"_mainmenu_reflejoanteojos_11_x": {
		type: "bitmap",
		asset: "_mainmenu_reflejoanteojos_11_x",
		scale: 1,
		position: [-98.3, -22.2],
	},
	"_mainmenu_reflejoanteojos_12_x": {
		type: "bitmap",
		asset: "_mainmenu_reflejoanteojos_12_x",
		scale: 1,
		position: [-98.3, -22.2],
	},
	"_mainmenu_morro_x": {
		type: "bitmap",
		asset: "_mainmenu_morro_x",
		scale: 1,
		position: [-56.8, -39.9],
	},
	"_mainmenu_nose_x": {
		type: "bitmap",
		asset: "_mainmenu_nose_x",
		scale: 1,
		position: [-29.95, -14.5],
	},
	"_mainmenu_mouth_x": {
		type: "bitmap",
		asset: "_mainmenu_mouth_x",
		scale: 1,
		position: [-21.45, -15.1],
	},
	"_mainmenu_ui_linescan_x": {
		type: "bitmap",
		asset: "_mainmenu_ui_linescan_x",
		scale: 1,
		position: [-32.35, -21.4],
	},
};
