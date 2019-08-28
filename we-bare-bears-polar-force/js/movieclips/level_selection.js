
var level_selection = {
	"levelselection": {
		type: "movieclip",
		fps: 24,
		totalFrames: 160,
		labels: {in: {from:0, to:23}, unlocked: {from:24, to:53}, locked: {from:54, to:83}, unlock: {from:84, to:142}, out: {from:143, to:159}, },
		layers: [
			{
				name: "bg",
				keys: [
					{
						from: 0,
						to: 53,
						classname: "_levelselection_bg_level_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 643.55, ty: 367.75},
						transform: [643.55, 367.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 83,
						classname: "_levelselection_bg_nosignal",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 636.45, ty: 378.6},
						transform: [636.45, 378.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 84,
						to: 125,
						classname: "_levelselection_bg_nosignal",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 636.45, ty: 378.6},
						transform: [636.45, 378.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 126,
						to: 142,
						classname: "_levelselection_bg_level_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 643.55, ty: 367.75},
						transform: [643.55, 367.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 143,
						to: 159,
						classname: "_levelselection_bg_level_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 643.55, ty: 367.75},
						transform: [643.55, 367.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "nerd",
				keys: [
					{
						from: 0,
						to: 53,
						classname: "_levelselection_nerdclip",
						instancename: "nerd",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 385.85, ty: 342.65},
						transform: [385.85, 342.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 83,
						classname: "_levelselection_nerdclip",
						instancename: "nerd",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 385.85, ty: 342.65},
						transform: [385.85, 342.65, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 84,
						to: 125,
						classname: "_levelselection_nerdclip",
						instancename: "nerd",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 385.85, ty: 342.65},
						transform: [385.85, 342.65, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 126,
						to: 137,
						classname: "_levelselection_nerdclip",
						instancename: "nerd",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 385.85, ty: 342.65},
						transform: [385.85, 342.65, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 138,
						to: 159,
						classname: "_levelselection_nerdclip",
						instancename: "nerd",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 385.85, ty: 342.65},
						transform: [385.85, 342.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "play_txt",
				keys: [
					{
						from: 0,
						to: 53,
						classname: "_levelselection_play",
						instancename: "play_txt",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 640, ty: 546.35},
						transform: [640, 546.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 83,
						classname: "_levelselection_play",
						instancename: "play_txt",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 640, ty: 1045.05},
						transform: [640, 1045.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 84,
						to: 125,
						classname: "_levelselection_play",
						instancename: "play_txt",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 640, ty: 1045.05},
						transform: [640, 1045.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 126,
						to: 142,
						classname: "_levelselection_play",
						instancename: "play_txt",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 640, ty: 546.35},
						transform: [640, 546.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 143,
						to: 159,
						classname: "_levelselection_play",
						instancename: "play_txt",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 640, ty: 546.35},
						transform: [640, 546.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Stars",
				keys: [
					{
						from: 0,
						to: 53,
						classname: "_levelselection_stars",
						instancename: "lives",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 640.15, ty: 377.25},
						transform: [640.15, 377.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 83,
						classname: "_levelselection_stars",
						instancename: "lives",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 640.15, ty: 896.35},
						transform: [640.15, 896.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 84,
						to: 125,
						classname: "_levelselection_stars",
						instancename: "lives",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 640.15, ty: 896.35},
						transform: [640.15, 896.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 126,
						to: 142,
						classname: "_levelselection_stars",
						instancename: "lives",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 640.15, ty: 377.25},
						transform: [640.15, 377.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 143,
						to: 159,
						classname: "_levelselection_stars",
						instancename: "lives",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 640.15, ty: 377.25},
						transform: [640.15, 377.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "no signal",
				keys: [
					{
						from: 0,
						to: 53,
						classname: "_levelselection_nosignal_txt",
						instancename: "nosignal_txt",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 646.15, ty: -150.3},
						transform: [646.15, -150.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 83,
						classname: "_levelselection_nosignal_txt",
						instancename: "nosignal_txt",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 646.15, ty: 552.7},
						transform: [646.15, 552.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 84,
						to: 125,
						classname: "_levelselection_locked_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -27, ty: 902.7},
						transform: [-27, 902.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 126,
						to: 142,
						classname: "_levelselection_nosignal_txt",
						instancename: "nosignal_txt",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 646.15, ty: -150.3},
						transform: [646.15, -150.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 143,
						to: 159,
						classname: "_levelselection_nosignal_txt",
						instancename: "nosignal_txt",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 646.15, ty: -150.3},
						transform: [646.15, -150.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Level",
				keys: [
					{
						from: 0,
						to: 53,
						classname: "_levelselection_level",
						instancename: "lvl",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 647.3, ty: 190.6},
						transform: [647.3, 190.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 83,
						classname: "_levelselection_level",
						instancename: "lvl",
						matrix: {a: 0.479, b: 0, c: 0, d: 0.479, tx: 463.65, ty: 160.05},
						transform: [463.65, 160.05, 0.479, 0.479, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 84,
						to: 125,
						classname: "_levelselection_level",
						instancename: "lvl",
						matrix: {a: 0.479, b: 0, c: 0, d: 0.479, tx: 463.65, ty: 160.05},
						transform: [463.65, 160.05, 0.479, 0.479, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 126,
						to: 142,
						classname: "_levelselection_level",
						instancename: "lvl",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 647.3, ty: 190.6},
						transform: [647.3, 190.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 143,
						to: 159,
						classname: "_levelselection_level",
						instancename: "lvl",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 647.3, ty: 190.6},
						transform: [647.3, 190.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "candadoanima",
				keys: [
					{
						from: 0,
						to: 83,
					},
					{
						from: 84,
						to: 136,
						classname: "_levelselection_candadounlock",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 647.7, ty: 378.6},
						transform: [647.7, 378.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 137,
						to: 159,
					},
				]
			},
			{
				name: "play_button",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_levelselection_playbutton",
						instancename: "play_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 634.45, ty: 362.85},
						transform: [634.45, 362.85, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 23,
						classname: "_levelselection_playbutton",
						instancename: "play_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 634.45, ty: 362.85},
						transform: [634.45, 362.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 39,
						classname: "_levelselection_playbutton",
						instancename: "play_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 634.45, ty: 362.85},
						transform: [634.45, 362.85, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 40,
						to: 53,
						classname: "_levelselection_playbutton",
						instancename: "play_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 634.45, ty: 362.85},
						transform: [634.45, 362.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 83,
						classname: "_levelselection_playbutton",
						instancename: "play_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 634.45, ty: 362.85},
						transform: [634.45, 362.85, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 84,
						to: 124,
						classname: "_levelselection_playbutton",
						instancename: "play_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 634.45, ty: 362.85},
						transform: [634.45, 362.85, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 125,
						to: 132,
						classname: "_levelselection_playbutton",
						instancename: "play_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 634.45, ty: 362.85},
						transform: [634.45, 362.85, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 133,
						to: 159,
						classname: "_levelselection_playbutton",
						instancename: "play_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 634.45, ty: 362.85},
						transform: [634.45, 362.85, 1, 1, 0, 0, 0],
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
						to: 15,
						classname: "_levelselection_glitchvariations",
						instancename: "",
						matrix: {a: 1.8, b: 0, c: 0, d: 1.8, tx: 691.35, ty: 443.55},
						transform: [691.35, 443.55, 1.8, 1.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.634], [0.612, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_levelselection_glitchvariations",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 670.1, ty: 389.7},
						transform: [670.1, 389.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 23,
					},
					{
						from: 24,
						to: 36,
						classname: "_levelselection_glitchvariations",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 647.3, ty: 373.95},
						transform: [647.3, 373.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 37,
						to: 53,
					},
					{
						from: 54,
						to: 66,
						classname: "_levelselection_glitchvariations",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 647.3, ty: 373.95},
						transform: [647.3, 373.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 67,
						to: 83,
					},
					{
						from: 84,
						to: 99,
						classname: "_levelselection_glitchvariations",
						instancename: "",
						matrix: {a: 1.8, b: 0, c: 0, d: 1.8, tx: 691.35, ty: 443.55},
						transform: [691.35, 443.55, 1.8, 1.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.634], [0.612, 1], [1, 1], ],
						}
					},
					{
						from: 100,
						to: 100,
						classname: "_levelselection_glitchvariations",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 670.1, ty: 389.7},
						transform: [670.1, 389.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 101,
						to: 142,
					},
					{
						from: 143,
						to: 152,
						classname: "_levelselection_glitch_infinito",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 670.1, ty: 389.7},
						transform: [670.1, 389.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.786, 0.486], [1, 1], ],
						}
					},
					{
						from: 153,
						to: 159,
						classname: "_levelselection_glitch_infinito",
						instancename: "",
						matrix: {a: 1.8, b: 0, c: 0, d: 1.8, tx: 691.35, ty: 561.9},
						transform: [691.35, 561.9, 1.8, 1.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bg_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_levelselection_bg_x",
						instancename: "",
						matrix: {a: 1.87, b: 0, c: 0, d: 1.87, tx: -552.3, ty: -274.95},
						transform: [-552.3, -274.95, 1.87, 1.87, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.634], [0.612, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 83,
						classname: "_levelselection_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 84,
						to: 99,
						classname: "_levelselection_bg_x",
						instancename: "",
						matrix: {a: 1.87, b: 0, c: 0, d: 1.87, tx: -552.3, ty: -274.95},
						transform: [-552.3, -274.95, 1.87, 1.87, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.634], [0.612, 1], [1, 1], ],
						}
					},
					{
						from: 100,
						to: 142,
						classname: "_levelselection_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 143,
						to: 152,
						classname: "_levelselection_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.786, 0.486], [1, 1], ],
						}
					},
					{
						from: 153,
						to: 159,
						classname: "_levelselection_bg_x",
						instancename: "",
						matrix: {a: 1.87, b: 0, c: 0, d: 1.87, tx: -552.3, ty: -274.95},
						transform: [-552.3, -274.95, 1.87, 1.87, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "next",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_levelselection_button_arrow",
						instancename: "next",
						matrix: {a: -1.966, b: 0, c: 0, d: 1.966, tx: 1622.65, ty: 391.55},
						transform: [1622.65, 391.55, 1.966, 1.966, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.634], [0.612, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 83,
						classname: "_levelselection_button_arrow",
						instancename: "next",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 1161.15, ty: 354.45},
						transform: [1161.15, 354.45, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 84,
						to: 99,
						classname: "_levelselection_button_arrow",
						instancename: "next",
						matrix: {a: -1.966, b: 0, c: 0, d: 1.966, tx: 1622.65, ty: 391.55},
						transform: [1622.65, 391.55, 1.966, 1.966, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.634], [0.612, 1], [1, 1], ],
						}
					},
					{
						from: 100,
						to: 142,
						classname: "_levelselection_button_arrow",
						instancename: "next",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 1161.15, ty: 354.45},
						transform: [1161.15, 354.45, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 143,
						to: 152,
						classname: "_levelselection_button_arrow",
						instancename: "next",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 1161.15, ty: 354.45},
						transform: [1161.15, 354.45, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.786, 0.486], [1, 1], ],
						}
					},
					{
						from: 153,
						to: 159,
						classname: "_levelselection_button_arrow",
						instancename: "next",
						matrix: {a: -1.966, b: 0, c: 0, d: 1.966, tx: 1622.65, ty: 391.55},
						transform: [1622.65, 391.55, 1.966, 1.966, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "prev",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_levelselection_button_arrow",
						instancename: "prev",
						matrix: {a: 1.979, b: 0, c: 0, d: 1.979, tx: -340.5, ty: 387.8},
						transform: [-340.5, 387.8, 1.979, 1.979, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.634], [0.612, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 83,
						classname: "_levelselection_button_arrow",
						instancename: "prev",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 117.25, ty: 354.45},
						transform: [117.25, 354.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 84,
						to: 99,
						classname: "_levelselection_button_arrow",
						instancename: "prev",
						matrix: {a: 1.979, b: 0, c: 0, d: 1.979, tx: -340.5, ty: 387.8},
						transform: [-340.5, 387.8, 1.979, 1.979, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.634], [0.612, 1], [1, 1], ],
						}
					},
					{
						from: 100,
						to: 142,
						classname: "_levelselection_button_arrow",
						instancename: "prev",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 117.25, ty: 354.45},
						transform: [117.25, 354.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 143,
						to: 152,
						classname: "_levelselection_button_arrow",
						instancename: "prev",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 117.25, ty: 354.45},
						transform: [117.25, 354.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.786, 0.486], [1, 1], ],
						}
					},
					{
						from: 153,
						to: 159,
						classname: "_levelselection_button_arrow",
						instancename: "prev",
						matrix: {a: 1.979, b: 0, c: 0, d: 1.979, tx: -340.5, ty: 387.8},
						transform: [-340.5, 387.8, 1.979, 1.979, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "button_music",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_levelselection_button_music",
						instancename: "music_btn",
						matrix: {a: 3.255, b: 0, c: 0, d: 3.255, tx: 1919.3, ty: -145.6},
						transform: [1919.3, -145.6, 3.255, 3.255, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.634], [0.612, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 83,
						classname: "_levelselection_button_music",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1155.25, ty: 115.5},
						transform: [1155.25, 115.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 84,
						to: 99,
						classname: "_levelselection_button_music",
						instancename: "music_btn",
						matrix: {a: 3.255, b: 0, c: 0, d: 3.255, tx: 1919.3, ty: -145.6},
						transform: [1919.3, -145.6, 3.255, 3.255, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.634], [0.612, 1], [1, 1], ],
						}
					},
					{
						from: 100,
						to: 142,
						classname: "_levelselection_button_music",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1155.25, ty: 115.5},
						transform: [1155.25, 115.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 143,
						to: 152,
						classname: "_levelselection_button_music",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1155.25, ty: 115.5},
						transform: [1155.25, 115.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.786, 0.486], [1, 1], ],
						}
					},
					{
						from: 153,
						to: 159,
						classname: "_levelselection_button_music",
						instancename: "music_btn",
						matrix: {a: 3.255, b: 0, c: 0, d: 3.255, tx: 1919.3, ty: -145.6},
						transform: [1919.3, -145.6, 3.255, 3.255, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "button_home",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_levelselection_button_home",
						instancename: "home_btn",
						matrix: {a: 3.255, b: 0, c: 0, d: 3.255, tx: -648.75, ty: -145.6},
						transform: [-648.75, -145.6, 3.255, 3.255, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.634], [0.612, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 83,
						classname: "_levelselection_button_home",
						instancename: "home_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 119.15, ty: 115.5},
						transform: [119.15, 115.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 84,
						to: 99,
						classname: "_levelselection_button_home",
						instancename: "home_btn",
						matrix: {a: 3.255, b: 0, c: 0, d: 3.255, tx: -648.75, ty: -145.6},
						transform: [-648.75, -145.6, 3.255, 3.255, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.634], [0.612, 1], [1, 1], ],
						}
					},
					{
						from: 100,
						to: 142,
						classname: "_levelselection_button_home",
						instancename: "home_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 119.15, ty: 115.5},
						transform: [119.15, 115.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 143,
						to: 152,
						classname: "_levelselection_button_home",
						instancename: "home_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 119.15, ty: 115.5},
						transform: [119.15, 115.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.786, 0.486], [1, 1], ],
						}
					},
					{
						from: 153,
						to: 159,
						classname: "_levelselection_button_home",
						instancename: "home_btn",
						matrix: {a: 3.255, b: 0, c: 0, d: 3.255, tx: -648.75, ty: -145.6},
						transform: [-648.75, -145.6, 3.255, 3.255, 0, 0, 0],
						alpha: 1,
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
						to: 15,
						classname: "_levelselection_monitorglass_x",
						instancename: "",
						matrix: {a: 1.87, b: 0, c: 0, d: 1.87, tx: 633.1, ty: 392.15},
						transform: [633.1, 392.15, 1.87, 1.87, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.634], [0.612, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 83,
						classname: "_levelselection_monitorglass_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 634, ty: 356.8},
						transform: [634, 356.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 84,
						to: 99,
						classname: "_levelselection_monitorglass_x",
						instancename: "",
						matrix: {a: 1.87, b: 0, c: 0, d: 1.87, tx: 633.1, ty: 392.15},
						transform: [633.1, 392.15, 1.87, 1.87, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.634], [0.612, 1], [1, 1], ],
						}
					},
					{
						from: 100,
						to: 142,
						classname: "_levelselection_monitorglass_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 634, ty: 356.8},
						transform: [634, 356.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 143,
						to: 152,
						classname: "_levelselection_monitorglass_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 634, ty: 356.8},
						transform: [634, 356.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.786, 0.486], [1, 1], ],
						}
					},
					{
						from: 153,
						to: 159,
						classname: "_levelselection_monitorglass_x",
						instancename: "",
						matrix: {a: 1.87, b: 0, c: 0, d: 1.87, tx: 633.1, ty: 392.15},
						transform: [633.1, 392.15, 1.87, 1.87, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "actions",
				keys: [
					{
						from: 0,
						to: 15,
					},
					{
						from: 16,
						to: 16,
						actions: function(self){globalsignal.emit(ge.LVL_IN_END);},
					},
					{
						from: 17,
						to: 22,
					},
					{
						from: 23,
						to: 23,
						actions: function(self){self.stop();},
					},
					{
						from: 24,
						to: 24,
					},
					{
						from: 25,
						to: 25,
						actions: function(self){globalsignal.emit(ge.LVL_NEXT_END);},
					},
					{
						from: 26,
						to: 39,
					},
					{
						from: 40,
						to: 40,
						actions: function(self){globalsignal.emit(ge.LVL_IN_END);},
					},
					{
						from: 41,
						to: 52,
					},
					{
						from: 53,
						to: 53,
						actions: function(self){self.stop();},
					},
					{
						from: 54,
						to: 54,
					},
					{
						from: 55,
						to: 55,
						actions: function(self){globalsignal.emit(ge.LVL_NEXT_END);},
					},
					{
						from: 56,
						to: 69,
					},
					{
						from: 70,
						to: 70,
						actions: function(self){globalsignal.emit(ge.LVL_IN_END);},
					},
					{
						from: 71,
						to: 74,
					},
					{
						from: 75,
						to: 82,
					},
					{
						from: 83,
						to: 83,
						actions: function(self){self.stop();},
					},
					{
						from: 84,
						to: 128,
					},
					{
						from: 129,
						to: 129,
						actions: function(self){globalsignal.emit(ge.LVL_IN_END);},
					},
					{
						from: 130,
						to: 141,
					},
					{
						from: 142,
						to: 142,
						actions: function(self){self.stop();},
					},
					{
						from: 143,
						to: 158,
					},
					{
						from: 159,
						to: 159,
						actions: function(self){self.stop();
globalsignal.emit(ge.LVL_OUT_END);},
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 23,
					},
					{
						from: 24,
						to: 53,
					},
					{
						from: 54,
						to: 83,
					},
					{
						from: 84,
						to: 142,
					},
					{
						from: 143,
						to: 159,
					},
				]
			},
		]
	},
	"_levelselection_bg_level_x": {
		type: "bitmap",
		asset: "_levelselection_bg_level_x",
		scale: 1,
		position: [-437.1, -314.55],
	},
	"_levelselection_bg_nosignal": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_bg_nosignal_x",
						instancename: "",
						matrix: {a: 7.757, b: 0, c: 0, d: 6.398, tx: -1.45, ty: -17.95},
						transform: [-1.45, -17.95, 7.757, 6.398, 0, 0, 0],
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
						classname: "_levelselection_noiseanima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.09,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_levelselection_nerdclip": {
		type: "movieclip",
		fps: 24,
		totalFrames: 2,
		labels: {on: {from:0, to:0}, off: {from:1, to:1}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_nerd",
						instancename: "",
						matrix: {a: -0.92, b: 0, c: 0, d: 0.92, tx: 0, ty: 0},
						transform: [0, 0, 0.92, 0.92, 0, 3.142, NaN],
						alpha: 0.47,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
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
	"_levelselection_play": {
		type: "movieclip",
		fps: 24,
		totalFrames: 3,
		labels: {english: {from:0, to:0}, spanish: {from:1, to:1}, portuguese: {from:2, to:2}, },
		layers: [
			{
				name: "play_borde_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_levelselection_play_borde_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.71,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "play_english_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_play_english_x",
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
						classname: "_levelselection_play_spanish_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_levelselection_play_portuguese_x",
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
					},
					{
						from: 1,
						to: 1,
					},
					{
						from: 2,
						to: 2,
					},
				]
			},
		]
	},
	"_levelselection_stars": {
		type: "movieclip",
		fps: 24,
		totalFrames: 5,
		labels: {},
		layers: [
			{
				name: "live_on_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_live_off_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 148.2, ty: 0},
						transform: [148.2, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_levelselection_live_off_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 148.2, ty: 0},
						transform: [148.2, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_levelselection_live_off_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 148.2, ty: 0},
						transform: [148.2, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_levelselection_live_on_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 148.2, ty: 0},
						transform: [148.2, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
					},
				]
			},
			{
				name: "live_on_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_live_off_x",
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
						classname: "_levelselection_live_off_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 3,
						classname: "_levelselection_live_on_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
					},
				]
			},
			{
				name: "live_on_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_live_off_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -148.2, ty: 0},
						transform: [-148.2, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_levelselection_live_on_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -148.2, ty: 0},
						transform: [-148.2, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
					},
				]
			},
			{
				name: "hiscore_txt",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_levelselection_hiscoretxt",
						instancename: "hiscore_txt",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.4, ty: 554.4},
						transform: [10.4, 554.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_levelselection_hiscoretxt",
						instancename: "hiscore_txt",
						matrix: {a: 0.611, b: 0, c: 0, d: 0.611, tx: 4.9, ty: -45.65},
						transform: [4.9, -45.65, 0.611, 0.611, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hiscore_num",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_levelselection_hiscore_number",
						instancename: "hiscore_num",
						matrix: {a: 0.802, b: 0, c: 0, d: 0.802, tx: 81.2, ty: 654.15},
						transform: [81.2, 654.15, 0.802, 0.802, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_levelselection_hiscore_number",
						instancename: "hiscore_num",
						matrix: {a: 0.802, b: 0, c: 0, d: 0.802, tx: 89.6, ty: 37.75},
						transform: [89.6, 37.75, 0.802, 0.802, 0, 0, 0],
						alpha: 1,
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
						to: 3,
						classname: "_levelselection_nomiss",
						instancename: "nomiss",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 236.5, ty: -56.2},
						transform: [236.5, -56.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_levelselection_nomiss",
						instancename: "nomiss",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -844.6, ty: -42.35},
						transform: [-844.6, -42.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_levelselection_nosignal_txt": {
		type: "movieclip",
		fps: 24,
		totalFrames: 3,
		labels: {english: {from:0, to:0}, spanish: {from:1, to:1}, portuguese: {from:2, to:2}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_404_english_x",
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
						classname: "_levelselection_404_spanish_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_levelselection_404_portuguese_x",
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
						to: 2,
						classname: "_levelselection_locked_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -197.15},
						transform: [0, -197.15, 1, 1, 0, 0, 0],
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
					},
					{
						from: 1,
						to: 1,
					},
					{
						from: 2,
						to: 2,
					},
				]
			},
		]
	},
	"_levelselection_locked_x": {
		type: "bitmap",
		asset: "_levelselection_locked_x",
		scale: 1,
		position: [-112.25, -150.25],
	},
	"_levelselection_level": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "txt",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_leveltxt",
						instancename: "txt",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "num",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_levelnum",
						instancename: "num",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 203.35, ty: -4.2},
						transform: [203.35, -4.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_levelselection_candadounlock": {
		type: "movieclip",
		fps: 24,
		totalFrames: 52,
		labels: {},
		layers: [
			{
				name: "candado_body_x",
				keys: [
					{
						from: 0,
						to: 17,
						classname: "_levelselection_candado_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.85, ty: 5.7},
						transform: [-0.85, 5.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 28,
						classname: "_levelselection_candado_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.85, ty: 5.7},
						transform: [-0.85, 5.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 31,
						classname: "_levelselection_candado_body_x",
						instancename: "",
						matrix: {a: 0.888, b: 0, c: 0, d: 0.888, tx: -0.75, ty: 5.05},
						transform: [-0.75, 5.05, 0.888, 0.888, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 33,
						classname: "_levelselection_candado_body_x",
						instancename: "",
						matrix: {a: 1.028, b: 0, c: 0, d: 1.028, tx: -0.85, ty: 5.3},
						transform: [-0.85, 5.3, 1.028, 1.028, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 40,
						classname: "_levelselection_candado_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.85, ty: 5.7},
						transform: [-0.85, 5.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 41,
						to: 51,
					},
				]
			},
			{
				name: "candado_cosin_close_x",
				keys: [
					{
						from: 0,
						to: 17,
						classname: "_levelselection_candado_cosin_close_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.05, ty: -57.35},
						transform: [-1.05, -57.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 28,
						classname: "_levelselection_candado_cosin_close_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.05, ty: -57.35},
						transform: [-1.05, -57.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_levelselection_candado_cosin_close_x",
						instancename: "",
						matrix: {a: 0.888, b: 0, c: 0, d: 0.794, tx: -0.9, ty: -43.9},
						transform: [-0.9, -43.9, 0.888, 0.794, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.382, 0], [0.707, 0.391], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 31,
						classname: "_levelselection_candado_cosin_open_x",
						instancename: "",
						matrix: {a: 0.91, b: 0, c: 0, d: 0.814, tx: -0.95, ty: -44.55},
						transform: [-0.95, -44.55, 0.91, 0.814, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.367, 0.256], [0.634, 0.743], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 33,
						classname: "_levelselection_candado_cosin_open_x",
						instancename: "",
						matrix: {a: 1.028, b: 0, c: 0, d: 1.028, tx: -1.05, ty: -61.25},
						transform: [-1.05, -61.25, 1.028, 1.028, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 40,
						classname: "_levelselection_candado_cosin_open_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.05, ty: -55.45},
						transform: [-1.05, -55.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 41,
						to: 51,
					},
				]
			},
			{
				name: "lineloca_1",
				keys: [
					{
						from: 0,
						to: 29,
					},
					{
						from: 30,
						to: 40,
						classname: "_levelselection_lineloca_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 96.75, ty: -59.15},
						transform: [96.75, -59.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 41,
						to: 51,
					},
				]
			},
			{
				name: "lineloca_1",
				keys: [
					{
						from: 0,
						to: 29,
					},
					{
						from: 30,
						to: 40,
						classname: "_levelselection_lineloca_1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -100.95, ty: -59.15},
						transform: [-100.95, -59.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 41,
						to: 51,
					},
				]
			},
			{
				name: "lineloca_1",
				keys: [
					{
						from: 0,
						to: 29,
					},
					{
						from: 30,
						to: 40,
						classname: "_levelselection_lineloca_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: 96.75, ty: 120.2},
						transform: [96.75, 120.2, 1, 1, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 41,
						to: 51,
					},
				]
			},
			{
				name: "lineloca_1",
				keys: [
					{
						from: 0,
						to: 29,
					},
					{
						from: 30,
						to: 40,
						classname: "_levelselection_lineloca_1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -1, tx: -100.95, ty: 120.2},
						transform: [-100.95, 120.2, 1, 1, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 41,
						to: 51,
					},
				]
			},
			{
				name: "lineloca_2",
				keys: [
					{
						from: 0,
						to: 29,
					},
					{
						from: 30,
						to: 40,
						classname: "_levelselection_lineloca_2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 111.9, ty: 30.4},
						transform: [111.9, 30.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 41,
						to: 51,
					},
				]
			},
			{
				name: "lineloca_2",
				keys: [
					{
						from: 0,
						to: 29,
					},
					{
						from: 30,
						to: 40,
						classname: "_levelselection_lineloca_2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -115.7, ty: 30.4},
						transform: [-115.7, 30.4, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 41,
						to: 51,
					},
				]
			},
			{
				name: "lineloca_2",
				keys: [
					{
						from: 0,
						to: 29,
					},
					{
						from: 30,
						to: 40,
						classname: "_levelselection_lineloca_2",
						instancename: "",
						matrix: {a: 0, b: 1, c: 1, d: 0, tx: 0.4, ty: 137.85},
						transform: [0.4, 137.85, 1, 1, 1.571, 1.571, 1.571],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 41,
						to: 51,
					},
				]
			},
			{
				name: "Layer 12",
				keys: [
					{
						from: 0,
						to: 29,
					},
					{
						from: 30,
						to: 32,
						classname: "_levelselection_cyan_x",
						instancename: "",
						matrix: {a: 7.664, b: 0, c: 0, d: 5.815, tx: -2.15, ty: -18.35},
						transform: [-2.15, -18.35, 7.664, 5.815, 0, 0, 0],
						alpha: 0.34,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 33,
						to: 38,
						classname: "_levelselection_cyan_x",
						instancename: "",
						matrix: {a: 7.664, b: 0, c: 0, d: 5.815, tx: -2.15, ty: -18.35},
						transform: [-2.15, -18.35, 7.664, 5.815, 0, 0, 0],
						alpha: 0.05,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 39,
						to: 42,
						classname: "_levelselection_cyan_x",
						instancename: "",
						matrix: {a: 7.664, b: 0, c: 0, d: 5.815, tx: -2.15, ty: -18.35},
						transform: [-2.15, -18.35, 7.664, 5.815, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 43,
						to: 49,
						classname: "_levelselection_cyan_x",
						instancename: "",
						matrix: {a: 7.664, b: 0, c: 0, d: 5.815, tx: -2.15, ty: -18.35},
						transform: [-2.15, -18.35, 7.664, 5.815, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 50,
						to: 50,
						classname: "_levelselection_cyan_x",
						instancename: "",
						matrix: {a: 7.664, b: 0, c: 0, d: 5.815, tx: -2.15, ty: -18.35},
						transform: [-2.15, -18.35, 7.664, 5.815, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 51,
						to: 51,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 29,
					},
					{
						from: 30,
						to: 50,
					},
					{
						from: 51,
						to: 51,
						actions: function(self){self.stop();
WONBATS.soundManager.fadeTo("music_background", 1, 1.5);},
					},
				]
			},
			{
				name: "Capa 2",
				keys: [
					{
						from: 0,
						to: 0,
						actions: function(self){WONBATS.soundManager.play("unlock");
WONBATS.soundManager.fadeTo("music_background", 0.1, 1);},
					},
					{
						from: 1,
						to: 51,
					},
				]
			},
		]
	},
	"_levelselection_playbutton": {
		type: "movieclip",
		fps: 24,
		totalFrames: 17,
		labels: {over: {from:0, to:4}, down: {from:5, to:11}, out: {from:12, to:16}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_levelselection_play_x",
						instancename: "",
						matrix: {a: 8.866, b: 0, c: 0, d: 6.792, tx: 0.05, ty: -0.05},
						transform: [0.05, -0.05, 8.866, 6.792, 0, 0, 0],
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
						to: 3,
						classname: "_levelselection_playborde_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 9.5, ty: 183.35},
						transform: [9.5, 183.35, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 11,
						classname: "_levelselection_playborde_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 9.5, ty: 183.35},
						transform: [9.5, 183.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 15,
						classname: "_levelselection_playborde_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 9.5, ty: 183.35},
						transform: [9.5, 183.35, 1, 1, 0, 0, 0],
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
						classname: "_levelselection_playborde_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 9.5, ty: 183.35},
						transform: [9.5, 183.35, 1, 1, 0, 0, 0],
						alpha: 0,
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
						to: 3,
					},
					{
						from: 4,
						to: 4,
						actions: function(self){self.stop();},
					},
					{
						from: 5,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						actions: function(self){self.stop();},
					},
					{
						from: 12,
						to: 15,
					},
					{
						from: 16,
						to: 16,
						actions: function(self){self.stop();},
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 4,
					},
					{
						from: 5,
						to: 11,
					},
					{
						from: 12,
						to: 16,
					},
				]
			},
		]
	},
	"_levelselection_glitchvariations": {
		type: "movieclip",
		fps: 24,
		totalFrames: 9,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_glitch_1",
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
						classname: "_levelselection_glitch_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_levelselection_glitch_1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_levelselection_glitch_1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -1, tx: 0, ty: -82.05},
						transform: [0, -82.05, 1, 1, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_levelselection_glitch_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: 27.35, ty: -82.05},
						transform: [27.35, -82.05, 1, 1, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_levelselection_glitch_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_levelselection_glitch_1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_levelselection_glitch_1",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -1, tx: 0, ty: -82.05},
						transform: [0, -82.05, 1, 1, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
						classname: "_levelselection_glitch_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: 27.35, ty: -82.05},
						transform: [27.35, -82.05, 1, 1, 3.142, 0, NaN],
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
						actions: function(self){var frame = Math.ceil(Math.random() * 5);
self.gotoAndStop(frame);
self.update(0);
self.children[0].gotoAndPlay(0);},
					},
					{
						from: 1,
						to: 1,
					},
				]
			},
		]
	},
	"_levelselection_glitch_infinito": {
		type: "movieclip",
		fps: 24,
		totalFrames: 13,
		labels: {},
		layers: [
			{
				name: "box_black_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_levelselection_box_black_x",
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
						classname: "_levelselection_box_black_x",
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
						classname: "_levelselection_box_black_x",
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
						classname: "_levelselection_box_black_x",
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
						classname: "_levelselection_box_black_x",
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
						to: 2,
						classname: "_levelselection_box_grid_1_x",
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
						classname: "_levelselection_box_grid_1_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_grid_1_x",
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
						classname: "_levelselection_box_grid_1_x",
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
						from: 12,
						to: 12,
						classname: "_levelselection_box_grid_1_x",
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
						to: 2,
						classname: "_levelselection_box_white_x",
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
						classname: "_levelselection_box_white_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_white_x",
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
						classname: "_levelselection_box_white_x",
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
						from: 12,
						to: 12,
						classname: "_levelselection_box_white_x",
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
						to: 2,
						classname: "_levelselection_box_white_x",
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
						classname: "_levelselection_box_white_x",
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
						classname: "_levelselection_box_white_x",
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
						classname: "_levelselection_box_white_x",
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
						classname: "_levelselection_box_white_x",
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
						to: 2,
						classname: "_levelselection_box_cyan_x",
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
						classname: "_levelselection_box_cyan_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_cyan_x",
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
						classname: "_levelselection_box_cyan_x",
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
						from: 12,
						to: 12,
						classname: "_levelselection_box_cyan_x",
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
						to: 2,
						classname: "_levelselection_box_magenta_x",
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
						classname: "_levelselection_box_magenta_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_magenta_x",
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
						classname: "_levelselection_box_magenta_x",
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
						from: 12,
						to: 12,
						classname: "_levelselection_box_magenta_x",
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
						to: 2,
						classname: "_levelselection_box_cyan_x",
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
						classname: "_levelselection_box_cyan_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_cyan_x",
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
						classname: "_levelselection_box_cyan_x",
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
						from: 12,
						to: 12,
						classname: "_levelselection_box_cyan_x",
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
						to: 2,
						classname: "_levelselection_box_cyan_x",
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
						classname: "_levelselection_box_cyan_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_cyan_x",
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
						classname: "_levelselection_box_cyan_x",
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
						from: 12,
						to: 12,
						classname: "_levelselection_box_cyan_x",
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
						to: 2,
						classname: "_levelselection_box_white_x",
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
						classname: "_levelselection_box_white_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_white_x",
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
						classname: "_levelselection_box_white_x",
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
						from: 12,
						to: 12,
						classname: "_levelselection_box_white_x",
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
						to: 2,
						classname: "_levelselection_box_magenta_x",
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
						classname: "_levelselection_box_magenta_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_magenta_x",
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
						classname: "_levelselection_box_magenta_x",
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
						from: 12,
						to: 12,
						classname: "_levelselection_box_magenta_x",
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
						to: 2,
						classname: "_levelselection_box_magenta_x",
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
						classname: "_levelselection_box_magenta_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_magenta_x",
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
						classname: "_levelselection_box_magenta_x",
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
						from: 12,
						to: 12,
						classname: "_levelselection_box_magenta_x",
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
						to: 2,
						classname: "_levelselection_box_grid_1_x",
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
						classname: "_levelselection_box_grid_1_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_grid_1_x",
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
						classname: "_levelselection_box_grid_1_x",
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
						from: 12,
						to: 12,
						classname: "_levelselection_box_grid_1_x",
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
						to: 2,
						classname: "_levelselection_box_magenta_x",
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
						classname: "_levelselection_box_magenta_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_magenta_x",
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
						classname: "_levelselection_box_magenta_x",
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
						from: 12,
						to: 12,
						classname: "_levelselection_box_magenta_x",
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
		]
	},
	"_levelselection_bg_x": {
		type: "bitmap",
		asset: "_levelselection_bg_x",
		scale: 1,
		position: [-5, -5],
	},
	"_levelselection_button_arrow": {
		type: "movieclip",
		fps: 24,
		totalFrames: 19,
		labels: {over: {from:0, to:4}, down: {from:5, to:11}, out: {from:12, to:18}, },
		layers: [
			{
				name: "arrowbottom_x",
				keys: [
					{
						from: 0,
						to: 18,
						classname: "_levelselection_arrowbottom_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -10.85, ty: 36},
						transform: [-10.85, 36, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arrowtop_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_levelselection_arrowtop_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -14, ty: -1.2},
						transform: [-14, -1.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.449], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_levelselection_arrowtop_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -14, ty: 4.2},
						transform: [-14, 4.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 10,
						classname: "_levelselection_arrowtop_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -14, ty: 9.6},
						transform: [-14, 9.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_levelselection_arrowtop_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -14, ty: 4.2},
						transform: [-14, 4.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_levelselection_arrowtop_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -14, ty: 4.2},
						transform: [-14, 4.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.793, 0.435], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 15,
						classname: "_levelselection_arrowtop_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -14, ty: -1.2},
						transform: [-14, -1.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.449], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_levelselection_arrowtop_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -14, ty: 0.15},
						transform: [-14, 0.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.76, 0.507], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_levelselection_arrowtop_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -14, ty: -1.2},
						transform: [-14, -1.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.211, 0.449], [0.51, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arrowlight_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_levelselection_arrowlight_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.85, ty: 8.95},
						transform: [-6.85, 8.95, 1, 1, 0, 0, 0],
						alpha: 0.2,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.449], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_levelselection_arrowlight_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.85, ty: 14.35},
						transform: [-6.85, 14.35, 1, 1, 0, 0, 0],
						alpha: 0.4,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 10,
						classname: "_levelselection_arrowlight_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.85, ty: 19.75},
						transform: [-6.85, 19.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_levelselection_arrowlight_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.85, ty: 14.35},
						transform: [-6.85, 14.35, 1, 1, 0, 0, 0],
						alpha: 0.4,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_levelselection_arrowlight_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.85, ty: 14.35},
						transform: [-6.85, 14.35, 1, 1, 0, 0, 0],
						alpha: 0.4,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.793, 0.435], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 15,
						classname: "_levelselection_arrowlight_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.85, ty: 8.95},
						transform: [-6.85, 8.95, 1, 1, 0, 0, 0],
						alpha: 0.23,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.449], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_levelselection_arrowlight_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.85, ty: 10.3},
						transform: [-6.85, 10.3, 1, 1, 0, 0, 0],
						alpha: 0.23,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.76, 0.507], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_levelselection_arrowlight_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.85, ty: 8.95},
						transform: [-6.85, 8.95, 1, 1, 0, 0, 0],
						alpha: 0.2,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.211, 0.449], [0.51, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "code",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 4,
						actions: function(self){self.stop();},
					},
					{
						from: 5,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						actions: function(self){self.stop();},
					},
					{
						from: 12,
						to: 17,
					},
					{
						from: 18,
						to: 18,
						actions: function(self){self.stop();},
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 4,
					},
					{
						from: 5,
						to: 11,
					},
					{
						from: 12,
						to: 18,
					},
				]
			},
		]
	},
	"_levelselection_button_music": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_button_music_on",
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
						classname: "_levelselection_button_music_off",
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
	"_levelselection_button_home": {
		type: "movieclip",
		fps: 24,
		totalFrames: 20,
		labels: {over: {from:0, to:6}, down: {from:7, to:13}, out: {from:14, to:19}, },
		layers: [
			{
				name: "soundbase_x",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_levelselection_soundbase_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 8.35, ty: -12.9},
						transform: [8.35, -12.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "soundbottom_x",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_levelselection_homebottom_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.65, ty: 1.15},
						transform: [1.65, 1.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "soundtop_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_levelselection_hometop_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.65, ty: -7.1},
						transform: [-3.65, -7.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.512, 0], [0.463, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_levelselection_hometop_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.05, ty: -4.7},
						transform: [-3.05, -4.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_levelselection_hometop_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.05, ty: -3.5},
						transform: [-3.05, -3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_levelselection_hometop_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.05, ty: -4.7},
						transform: [-3.05, -4.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.492, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_levelselection_hometop_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.65, ty: -7.1},
						transform: [-3.65, -7.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.512, 0], [0.463, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "soundlight_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_levelselection_homelight_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.2, ty: -8.05},
						transform: [-3.2, -8.05, 1, 1, 0, 0, 0],
						alpha: 0.36,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.512, 0], [0.463, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_levelselection_homelight_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.15, ty: -5.15},
						transform: [-2.15, -5.15, 1, 1, 0, 0, 0],
						alpha: 0.79,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_levelselection_homelight_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.95, ty: -3.95},
						transform: [-1.95, -3.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_levelselection_homelight_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.15, ty: -5.15},
						transform: [-2.15, -5.15, 1, 1, 0, 0, 0],
						alpha: 0.79,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.492, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_levelselection_homelight_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.2, ty: -8.05},
						transform: [-3.2, -8.05, 1, 1, 0, 0, 0],
						alpha: 0.36,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.512, 0], [0.463, 1], [1, 1], ],
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
	"_levelselection_monitorglass_x": {
		type: "bitmap",
		asset: "_levelselection_monitorglass_x",
		scale: 1,
		position: [-416, -320.5],
	},
	"_levelselection_bg_nosignal_x": {
		type: "bitmap",
		asset: "_levelselection_bg_nosignal_x",
		scale: 1,
		position: [-55.95, -53.2],
	},
	"_levelselection_noiseanima": {
		type: "movieclip",
		fps: 24,
		totalFrames: 4,
		labels: {},
		layers: [
			{
				name: "Noise1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_noise1_x",
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
						classname: "_levelselection_noise1_x",
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
						classname: "_levelselection_noise1_x",
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
						classname: "_levelselection_noise1_x",
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
	"_levelselection_nerd": {
		type: "movieclip",
		fps: 24,
		totalFrames: 222,
		labels: {},
		layers: [
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 59,
						classname: "_levelselection_nerd_idle",
						instancename: "nerd",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.8,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.616, 0], [0.596, 1], [1, 1], ],
						}
					},
					{
						from: 60,
						to: 139,
						classname: "_levelselection_nerd_idle",
						instancename: "nerd",
						matrix: {a: 1.022, b: 0, c: 0, d: 1.022, tx: 0, ty: -10.7},
						transform: [0, -10.7, 1.022, 1.022, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.616, 0], [0.596, 1], [1, 1], ],
						}
					},
					{
						from: 140,
						to: 198,
						classname: "_levelselection_nerd_idle",
						instancename: "nerd",
						matrix: {a: 1.021, b: -0.057, c: 0.057, d: 1.021, tx: 0, ty: -10.7},
						transform: [0, -10.7, 1.022, 1.022, 0.056, -0.056, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.616, 0], [0.596, 1], [1, 1], ],
						}
					},
					{
						from: 199,
						to: 221,
						classname: "_levelselection_nerd_idle",
						instancename: "nerd",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.8,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_levelselection_play_borde_x": {
		type: "bitmap",
		asset: "_levelselection_play_borde_x",
		scale: 1,
		position: [-288.9, -51],
	},
	"_levelselection_play_english_x": {
		type: "bitmap",
		asset: "_levelselection_play_english_x",
		scale: 1,
		position: [-225.75, -52.85],
	},
	"_levelselection_play_spanish_x": {
		type: "bitmap",
		asset: "_levelselection_play_spanish_x",
		scale: 1,
		position: [-225.75, -52.85],
	},
	"_levelselection_play_portuguese_x": {
		type: "bitmap",
		asset: "_levelselection_play_portuguese_x",
		scale: 1,
		position: [-225.75, -52.85],
	},
	"_levelselection_live_off_x": {
		type: "bitmap",
		asset: "_levelselection_live_off_x",
		scale: 1,
		position: [-105.4, -96.65],
	},
	"_levelselection_live_on_x": {
		type: "bitmap",
		asset: "_levelselection_live_on_x",
		scale: 1,
		position: [-105.4, -96.65],
	},
	"_levelselection_hiscoretxt": {
		type: "movieclip",
		fps: 24,
		totalFrames: 3,
		labels: {english: {from:0, to:0}, spanish: {from:1, to:1}, portuguese: {from:2, to:2}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_hiscore_english_x",
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
						classname: "_levelselection_hiscore_english_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_levelselection_hiscore_english_x",
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
					},
					{
						from: 1,
						to: 1,
					},
					{
						from: 2,
						to: 2,
					},
				]
			},
		]
	},
	"_levelselection_hiscore_number": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "number_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_levelnum",
						instancename: "number_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.55, ty: -1},
						transform: [2.55, -1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "number_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_levelnum",
						instancename: "number_2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -74.45, ty: -1},
						transform: [-74.45, -1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "number_3",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_levelnum",
						instancename: "number_3",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -151.45, ty: -1},
						transform: [-151.45, -1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "number_4",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_levelnum",
						instancename: "number_4",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -228.45, ty: -1},
						transform: [-228.45, -1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_levelselection_nomiss": {
		type: "movieclip",
		fps: 24,
		totalFrames: 2,
		labels: {off: {from:0, to:0}, on: {from:1, to:1}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_tatuajeoff_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.7, ty: 1.15},
						transform: [-0.7, 1.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_levelselection_tatuaje_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.7, ty: 1.15},
						transform: [-0.7, 1.15, 1, 1, 0, 0, 0],
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
	"_levelselection_404_english_x": {
		type: "bitmap",
		asset: "_levelselection_404_english_x",
		scale: 1,
		position: [-275.8, -57.25],
	},
	"_levelselection_404_spanish_x": {
		type: "bitmap",
		asset: "_levelselection_404_spanish_x",
		scale: 1,
		position: [-275.8, -57.25],
	},
	"_levelselection_404_portuguese_x": {
		type: "bitmap",
		asset: "_levelselection_404_portuguese_x",
		scale: 1,
		position: [-275.8, -57.25],
	},
	"_levelselection_leveltxt": {
		type: "movieclip",
		fps: 24,
		totalFrames: 3,
		labels: {english: {from:0, to:0}, spanish: {from:1, to:1}, portuguese: {from:2, to:2}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_level_english_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.15, ty: -4.15},
						transform: [3.15, -4.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_levelselection_level_spanish_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.15, ty: -4.15},
						transform: [3.15, -4.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_levelselection_level_portuguese_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.15, ty: -4.15},
						transform: [3.15, -4.15, 1, 1, 0, 0, 0],
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
					},
					{
						from: 1,
						to: 1,
					},
					{
						from: 2,
						to: 2,
					},
				]
			},
		]
	},
	"_levelselection_levelnum": {
		type: "movieclip",
		fps: 24,
		totalFrames: 11,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_num_0_x",
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
						classname: "_levelselection_num_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_levelselection_num_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_levelselection_num_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_levelselection_num_4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_levelselection_num_5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_levelselection_num_6_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_levelselection_num_7_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
						classname: "_levelselection_num_8_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_levelselection_num_9_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_levelselection_num_x_x",
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
						to: 10,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_levelselection_candado_body_x": {
		type: "bitmap",
		asset: "_levelselection_candado_body_x",
		scale: 1,
		position: [-105.1, -73.3],
	},
	"_levelselection_candado_cosin_close_x": {
		type: "bitmap",
		asset: "_levelselection_candado_cosin_close_x",
		scale: 1,
		position: [-75.45, -81.3],
	},
	"_levelselection_candado_cosin_open_x": {
		type: "bitmap",
		asset: "_levelselection_candado_cosin_open_x",
		scale: 1,
		position: [-75.45, -105.8],
	},
	"_levelselection_lineloca_1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 14,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_minisquare_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.15},
						transform: [-0.15, -0.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_levelselection_minisquare_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.15},
						transform: [-0.15, -0.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_levelselection_minisquare_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.15},
						transform: [-0.15, -0.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_levelselection_minisquare_4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.15},
						transform: [-0.15, -0.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_levelselection_minisquare_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 12.3, ty: -12.95},
						transform: [12.3, -12.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_levelselection_minisquare_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.45, ty: -26},
						transform: [24.45, -26, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_levelselection_minisquare_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 36.25, ty: -38.15},
						transform: [36.25, -38.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 11,
					},
					{
						from: 12,
						to: 12,
					},
					{
						from: 13,
						to: 13,
					},
				]
			},
		]
	},
	"_levelselection_lineloca_2": {
		type: "movieclip",
		fps: 24,
		totalFrames: 14,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_minisquare_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.15},
						transform: [-0.15, -0.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_levelselection_minisquare_b_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.15},
						transform: [-0.15, -0.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_levelselection_minisquare_c_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.15},
						transform: [-0.15, -0.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_levelselection_minisquare_d_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.15},
						transform: [-0.15, -0.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_levelselection_minisquare_c_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 36.55, ty: -0.15},
						transform: [36.55, -0.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_levelselection_minisquare_b_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 36.55, ty: -0.15},
						transform: [36.55, -0.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_levelselection_minisquare_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 36.55, ty: -0.15},
						transform: [36.55, -0.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
					},
				]
			},
		]
	},
	"_levelselection_cyan_x": {
		type: "bitmap",
		asset: "_levelselection_cyan_x",
		scale: 1,
		position: [-55, -55],
	},
	"_levelselection_play_x": {
		type: "bitmap",
		asset: "_levelselection_play_x",
		scale: 1,
		position: [-54.95, -55],
	},
	"_levelselection_playborde_anima": {
		type: "movieclip",
		fps: 24,
		totalFrames: 30,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 29,
						classname: "_levelselection_play_borde_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.8, ty: 0.8},
						transform: [-4.8, 0.8, 1, 1, 0, 0, 0],
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
						classname: "_levelselection_bordegusano_1_x",
						instancename: "",
						matrix: {a: -0.531, b: 0.676, c: 0.965, d: 0.327, tx: 230.25, ty: 40},
						transform: [230.25, 40, 0.86, 1.019, 1.244, 2.237, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_levelselection_bordegusano_1_x",
						instancename: "",
						matrix: {a: 0, b: 1, c: 1, d: 0, tx: 247.55, ty: 30.4},
						transform: [247.55, 30.4, 1, 1, 1.571, 1.571, 1.571],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_levelselection_bordegusano_1_x",
						instancename: "",
						matrix: {a: 0.484, b: 0.86, c: 0.795, d: -0.653, tx: 253.9, ty: 14.45},
						transform: [253.9, 14.45, 0.987, 1.029, 2.258, 1.058, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_levelselection_bordegusano_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: 244.6, ty: -15.5},
						transform: [244.6, -15.5, 1, 1, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_levelselection_bordegusano_2_x",
						instancename: "",
						matrix: {a: 0.898, b: 0, c: 0, d: 1, tx: 203.55, ty: -24.15},
						transform: [203.55, -24.15, 0.898, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 13,
						classname: "_levelselection_bordegusano_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 192.05, ty: -24.15},
						transform: [192.05, -24.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_levelselection_bordegusano_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -202.75, ty: -24.15},
						transform: [-202.75, -24.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_levelselection_bordegusano_1_x",
						instancename: "",
						matrix: {a: 0.531, b: -0.676, c: -0.965, d: -0.327, tx: -231.1, ty: -22.35},
						transform: [-231.1, -22.35, 0.86, 1.019, -1.898, -0.904, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 16,
						classname: "_levelselection_bordegusano_1_x",
						instancename: "",
						matrix: {a: 0, b: -1, c: -1, d: 0, tx: -248.4, ty: -12.75},
						transform: [-248.4, -12.75, 1, 1, -1.571, -1.571, -1.571],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 17,
						classname: "_levelselection_bordegusano_1_x",
						instancename: "",
						matrix: {a: -0.484, b: -0.86, c: -0.795, d: 0.653, tx: -254.75, ty: 3.2},
						transform: [-254.75, 3.2, 0.987, 1.029, -0.884, -2.083, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 18,
						classname: "_levelselection_bordegusano_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -245.45, ty: 33.15},
						transform: [-245.45, 33.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 19,
						classname: "_levelselection_bordegusano_2_x",
						instancename: "",
						matrix: {a: -0.802, b: 0, c: 0, d: 1, tx: -209.1, ty: 42.3},
						transform: [-209.1, 42.3, 0.802, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 28,
						classname: "_levelselection_bordegusano_2_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -192.1, ty: 41.8},
						transform: [-192.1, 41.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_levelselection_bordegusano_2_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 202.45, ty: 41.75},
						transform: [202.45, 41.75, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2 copy",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_levelselection_bordegusano_1_x",
						instancename: "",
						matrix: {a: 0.531, b: -0.676, c: -0.965, d: -0.327, tx: -231.1, ty: -22.35},
						transform: [-231.1, -22.35, 0.86, 1.019, -1.898, -0.904, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_levelselection_bordegusano_1_x",
						instancename: "",
						matrix: {a: 0, b: -1, c: -1, d: 0, tx: -248.4, ty: -12.75},
						transform: [-248.4, -12.75, 1, 1, -1.571, -1.571, -1.571],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_levelselection_bordegusano_1_x",
						instancename: "",
						matrix: {a: -0.484, b: -0.86, c: -0.795, d: 0.653, tx: -254.75, ty: 3.2},
						transform: [-254.75, 3.2, 0.987, 1.029, -0.884, -2.083, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_levelselection_bordegusano_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -245.45, ty: 33.15},
						transform: [-245.45, 33.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_levelselection_bordegusano_2_x",
						instancename: "",
						matrix: {a: -0.802, b: 0, c: 0, d: 1, tx: -209.1, ty: 42.3},
						transform: [-209.1, 42.3, 0.802, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 13,
						classname: "_levelselection_bordegusano_2_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -192.1, ty: 41.8},
						transform: [-192.1, 41.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_levelselection_bordegusano_2_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 202.45, ty: 41.75},
						transform: [202.45, 41.75, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_levelselection_bordegusano_1_x",
						instancename: "",
						matrix: {a: -0.531, b: 0.676, c: 0.965, d: 0.327, tx: 230.25, ty: 40},
						transform: [230.25, 40, 0.86, 1.019, 1.244, 2.237, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 16,
						classname: "_levelselection_bordegusano_1_x",
						instancename: "",
						matrix: {a: 0, b: 1, c: 1, d: 0, tx: 247.55, ty: 30.4},
						transform: [247.55, 30.4, 1, 1, 1.571, 1.571, 1.571],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 17,
						classname: "_levelselection_bordegusano_1_x",
						instancename: "",
						matrix: {a: 0.484, b: 0.86, c: 0.795, d: -0.653, tx: 253.9, ty: 14.45},
						transform: [253.9, 14.45, 0.987, 1.029, 2.258, 1.058, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 18,
						classname: "_levelselection_bordegusano_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: 244.6, ty: -15.5},
						transform: [244.6, -15.5, 1, 1, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 19,
						classname: "_levelselection_bordegusano_2_x",
						instancename: "",
						matrix: {a: 0.898, b: 0, c: 0, d: 1, tx: 203.55, ty: -24.15},
						transform: [203.55, -24.15, 0.898, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 20,
						to: 28,
						classname: "_levelselection_bordegusano_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 192.05, ty: -24.15},
						transform: [192.05, -24.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_levelselection_bordegusano_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -202.75, ty: -24.15},
						transform: [-202.75, -24.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_levelselection_glitch_1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 14,
		labels: {},
		layers: [
			{
				name: "box_black_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_levelselection_box_black_x",
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
						classname: "_levelselection_box_black_x",
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
						classname: "_levelselection_box_black_x",
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
						to: 9,
						classname: "_levelselection_box_black_x",
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
					{
						from: 10,
						to: 11,
						classname: "_levelselection_box_black_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.711, tx: 0.3, ty: -7.6},
						transform: [0.3, -7.6, 9.083, 0.711, 3.142, 3.142, 3.142],
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
						classname: "_levelselection_box_black_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.248, tx: 0.3, ty: -148.45},
						transform: [0.3, -148.45, 9.083, 0.248, 3.142, 3.142, 3.142],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
					},
				]
			},
			{
				name: "box_grid_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_levelselection_box_grid_1_x",
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
						classname: "_levelselection_box_grid_1_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_grid_1_x",
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
						to: 9,
						classname: "_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -1.357, b: 0, c: 0, d: -1.309, tx: 240.15, ty: 126.45},
						transform: [240.15, 126.45, 1.357, 1.309, 3.142, 3.142, 3.142],
						alpha: 0.51,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
					},
				]
			},
			{
				name: "box_white_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_levelselection_box_white_x",
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
						classname: "_levelselection_box_white_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_white_x",
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
						to: 10,
						classname: "_levelselection_box_white_x",
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
						from: 11,
						to: 11,
						classname: "_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.247, tx: 0.3, ty: 179.75},
						transform: [0.3, 179.75, 9.083, 0.247, 3.142, 3.142, 3.142],
						alpha: 0.03,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
					},
				]
			},
			{
				name: "box_white_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_levelselection_box_white_x",
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
						classname: "_levelselection_box_white_x",
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
						classname: "_levelselection_box_white_x",
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
						to: 9,
						classname: "_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.22, tx: 0.3, ty: -219.9},
						transform: [0.3, -219.9, 9.083, 0.22, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
					},
				]
			},
			{
				name: "box_cyan_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_levelselection_box_cyan_x",
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
						classname: "_levelselection_box_cyan_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_cyan_x",
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
						to: 9,
						classname: "_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: -167.9},
						transform: [0.3, -167.9, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
					},
				]
			},
			{
				name: "box_magenta_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_levelselection_box_magenta_x",
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
						classname: "_levelselection_box_magenta_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_magenta_x",
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
						to: 9,
						classname: "_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: 257.5},
						transform: [0.3, 257.5, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
					},
				]
			},
			{
				name: "box_cyan_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_levelselection_box_cyan_x",
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
						classname: "_levelselection_box_cyan_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_cyan_x",
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
						classname: "_levelselection_box_cyan_x",
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
						from: 12,
						to: 12,
						classname: "_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.561, tx: 0.3, ty: -165.5},
						transform: [0.3, -165.5, 9.083, 0.561, 3.142, 3.142, 3.142],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
					},
				]
			},
			{
				name: "box_cyan_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_levelselection_box_cyan_x",
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
						classname: "_levelselection_box_cyan_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_cyan_x",
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
						to: 10,
						classname: "_levelselection_box_cyan_x",
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
						from: 11,
						to: 11,
						classname: "_levelselection_box_cyan_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.2, tx: 0.3, ty: -254.25},
						transform: [0.3, -254.25, 9.083, 0.2, 3.142, 3.142, 3.142],
						alpha: 0.03,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
					},
				]
			},
			{
				name: "box_white_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_levelselection_box_white_x",
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
						classname: "_levelselection_box_white_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_white_x",
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
						to: 10,
						classname: "_levelselection_box_white_x",
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
						from: 11,
						to: 11,
						classname: "_levelselection_box_white_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.249, tx: 0.3, ty: -254.45},
						transform: [0.3, -254.45, 9.083, 0.249, 3.142, 3.142, 3.142],
						alpha: 0.05,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
					},
				]
			},
			{
				name: "box_magenta_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_levelselection_box_magenta_x",
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
						classname: "_levelselection_box_magenta_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_magenta_x",
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
						classname: "_levelselection_box_magenta_x",
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
						from: 12,
						to: 12,
						classname: "_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.157, tx: 1.6, ty: 137.35},
						transform: [1.6, 137.35, 9.083, 0.157, 3.142, 3.142, 3.142],
						alpha: 0.04,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
					},
				]
			},
			{
				name: "box_magenta_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_levelselection_box_magenta_x",
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
						classname: "_levelselection_box_magenta_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_magenta_x",
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
						to: 9,
						classname: "_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: -324.45},
						transform: [1.6, -324.45, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
					},
				]
			},
			{
				name: "box_grid_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_levelselection_box_grid_1_x",
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
						classname: "_levelselection_box_grid_1_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_grid_1_x",
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
						to: 10,
						classname: "_levelselection_box_grid_1_x",
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
						from: 11,
						to: 11,
						classname: "_levelselection_box_grid_1_x",
						instancename: "",
						matrix: {a: -1.243, b: 0, c: 0, d: -2.229, tx: -228.3, ty: 22.6},
						transform: [-228.3, 22.6, 1.243, 2.229, 3.142, 3.142, 3.142],
						alpha: 0.19,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
					},
				]
			},
			{
				name: "box_magenta_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_levelselection_box_magenta_x",
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
						classname: "_levelselection_box_magenta_x",
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
						from: 6,
						to: 8,
						classname: "_levelselection_box_magenta_x",
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
						to: 9,
						classname: "_levelselection_box_magenta_x",
						instancename: "",
						matrix: {a: -9.083, b: 0, c: 0, d: -0.477, tx: 1.6, ty: 189.95},
						transform: [1.6, 189.95, 9.083, 0.477, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
					},
				]
			},
			{
				name: "Layer 15",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 13,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_levelselection_box_black_x": {
		type: "bitmap",
		asset: "_levelselection_box_black_x",
		scale: 1,
		position: [-55, -55],
	},
	"_levelselection_box_grid_1_x": {
		type: "bitmap",
		asset: "_levelselection_box_grid_1_x",
		scale: 1,
		position: [-164.05, -149.3],
	},
	"_levelselection_box_white_x": {
		type: "bitmap",
		asset: "_levelselection_box_white_x",
		scale: 1,
		position: [-55, -55],
	},
	"_levelselection_box_cyan_x": {
		type: "bitmap",
		asset: "_levelselection_box_cyan_x",
		scale: 1,
		position: [-55, -55],
	},
	"_levelselection_box_magenta_x": {
		type: "bitmap",
		asset: "_levelselection_box_magenta_x",
		scale: 1,
		position: [-55, -55],
	},
	"_levelselection_arrowbottom_x": {
		type: "bitmap",
		asset: "_levelselection_arrowbottom_x",
		scale: 1,
		position: [-90.5, -164],
	},
	"_levelselection_arrowtop_x": {
		type: "bitmap",
		asset: "_levelselection_arrowtop_x",
		scale: 1,
		position: [-68.5, -129],
	},
	"_levelselection_arrowlight_anima": {
		type: "movieclip",
		fps: 24,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_levelselection_arrowlight_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_levelselection_arrowlight_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.9,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_levelselection_arrowlight_x",
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
	"_levelselection_button_music_on": {
		type: "movieclip",
		fps: 24,
		totalFrames: 20,
		labels: {over: {from:0, to:6}, down: {from:7, to:13}, out: {from:14, to:19}, },
		layers: [
			{
				name: "soundbase_x",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_levelselection_soundbase_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 8.35, ty: -12.9},
						transform: [8.35, -12.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "soundbottom_x",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_levelselection_soundbottom_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.2, ty: 2.9},
						transform: [1.2, 2.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "soundtop_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_levelselection_soundtop_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.65, ty: -7.1},
						transform: [-3.65, -7.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.512, 0], [0.463, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_levelselection_soundtop_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.05, ty: -4.7},
						transform: [-3.05, -4.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_levelselection_soundtop_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.05, ty: -3.5},
						transform: [-3.05, -3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_levelselection_soundtop_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.05, ty: -4.7},
						transform: [-3.05, -4.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.492, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_levelselection_soundtop_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.65, ty: -7.1},
						transform: [-3.65, -7.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.512, 0], [0.463, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "soundlight_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_levelselection_soundlight_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.55, ty: -7.55},
						transform: [-2.55, -7.55, 1, 1, 0, 0, 0],
						alpha: 0.36,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.512, 0], [0.463, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_levelselection_soundlight_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.95, ty: -5.15},
						transform: [-1.95, -5.15, 1, 1, 0, 0, 0],
						alpha: 0.79,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_levelselection_soundlight_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.95, ty: -3.95},
						transform: [-1.95, -3.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_levelselection_soundlight_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.95, ty: -5.15},
						transform: [-1.95, -5.15, 1, 1, 0, 0, 0],
						alpha: 0.79,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.492, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_levelselection_soundlight_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.55, ty: -7.55},
						transform: [-2.55, -7.55, 1, 1, 0, 0, 0],
						alpha: 0.36,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.512, 0], [0.463, 1], [1, 1], ],
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
	"_levelselection_button_music_off": {
		type: "movieclip",
		fps: 24,
		totalFrames: 20,
		labels: {over: {from:0, to:6}, down: {from:7, to:13}, out: {from:14, to:19}, },
		layers: [
			{
				name: "soundbase_x",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_levelselection_soundbase_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 8.35, ty: -12.9},
						transform: [8.35, -12.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "soundbottom_x",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_levelselection_soundbottom_red_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.2, ty: 2.9},
						transform: [1.2, 2.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "soundtop_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_levelselection_soundtop_red_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.65, ty: -7.1},
						transform: [-3.65, -7.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.512, 0], [0.463, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_levelselection_soundtop_red_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.05, ty: -4.7},
						transform: [-3.05, -4.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_levelselection_soundtop_red_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.05, ty: -3.5},
						transform: [-3.05, -3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_levelselection_soundtop_red_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.05, ty: -4.7},
						transform: [-3.05, -4.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.492, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_levelselection_soundtop_red_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.65, ty: -7.1},
						transform: [-3.65, -7.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.512, 0], [0.463, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "soundlight_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_levelselection_soundlight_anima_red",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.55, ty: -7.55},
						transform: [-2.55, -7.55, 1, 1, 0, 0, 0],
						alpha: 0.36,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.512, 0], [0.463, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_levelselection_soundlight_anima_red",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.95, ty: -5.15},
						transform: [-1.95, -5.15, 1, 1, 0, 0, 0],
						alpha: 0.79,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_levelselection_soundlight_anima_red",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.95, ty: -3.95},
						transform: [-1.95, -3.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_levelselection_soundlight_anima_red",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.95, ty: -5.15},
						transform: [-1.95, -5.15, 1, 1, 0, 0, 0],
						alpha: 0.79,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.492, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_levelselection_soundlight_anima_red",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.55, ty: -7.55},
						transform: [-2.55, -7.55, 1, 1, 0, 0, 0],
						alpha: 0.36,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.512, 0], [0.463, 1], [1, 1], ],
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
	"_levelselection_soundbase_x": {
		type: "bitmap",
		asset: "_levelselection_soundbase_x",
		scale: 1,
		position: [-83, -117],
	},
	"_levelselection_homebottom_x": {
		type: "bitmap",
		asset: "_levelselection_homebottom_x",
		scale: 1,
		position: [-50, -45.5],
	},
	"_levelselection_hometop_x": {
		type: "bitmap",
		asset: "_levelselection_hometop_x",
		scale: 1,
		position: [-45, -43],
	},
	"_levelselection_homelight_anima": {
		type: "movieclip",
		fps: 24,
		totalFrames: 13,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_levelselection_homelight_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.7,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.585, 0], [0.49, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 11,
						classname: "_levelselection_homelight_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.65,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.585, 0], [0.49, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_levelselection_homelight_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.7,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_levelselection_noise1_x": {
		type: "bitmap",
		asset: "_levelselection_noise1_x",
		scale: 1,
		position: [-105, -105],
	},
	"_levelselection_nerd_idle": {
		type: "movieclip",
		fps: 24,
		totalFrames: 155,
		labels: {},
		layers: [
			{
				name: "nerd_main_x",
				keys: [
					{
						from: 0,
						to: 154,
						classname: "_levelselection_nerd_main_x",
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
				name: "eyes",
				keys: [
					{
						from: 0,
						to: 154,
						classname: "_levelselection_eyes",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5, ty: -69.95},
						transform: [5, -69.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "nerd_eyebrows_x",
				keys: [
					{
						from: 0,
						to: 36,
						classname: "_levelselection_nerd_eyebrows_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.9, ty: -114},
						transform: [6.9, -114, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 37,
						to: 53,
						classname: "_levelselection_nerd_eyebrows_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.9, ty: -114},
						transform: [6.9, -114, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 121,
						classname: "_levelselection_nerd_eyebrows_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 8.3, ty: -106.2},
						transform: [8.3, -106.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 122,
						to: 129,
						classname: "_levelselection_nerd_eyebrows_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 8.3, ty: -106.2},
						transform: [8.3, -106.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 130,
						to: 154,
						classname: "_levelselection_nerd_eyebrows_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.9, ty: -114},
						transform: [6.9, -114, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "nerd_eyebrows_x copy",
				keys: [
					{
						from: 0,
						to: 36,
						classname: "_levelselection_nerd_eyebrows_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.9, ty: -114},
						transform: [6.9, -114, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 37,
						to: 53,
						classname: "_levelselection_nerd_eyebrows_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.9, ty: -114},
						transform: [6.9, -114, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 121,
						classname: "_levelselection_nerd_eyebrows_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 8.3, ty: -106.2},
						transform: [8.3, -106.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 122,
						to: 129,
						classname: "_levelselection_nerd_eyebrows_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 8.3, ty: -106.2},
						transform: [8.3, -106.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 130,
						to: 154,
						classname: "_levelselection_nerd_eyebrows_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.9, ty: -114},
						transform: [6.9, -114, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "nerd_eyebrows_x copy 2",
				keys: [
					{
						from: 0,
						to: 36,
						classname: "_levelselection_nerd_eyebrows_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.9, ty: -114},
						transform: [6.9, -114, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 37,
						to: 53,
						classname: "_levelselection_nerd_eyebrows_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.9, ty: -114},
						transform: [6.9, -114, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 121,
						classname: "_levelselection_nerd_eyebrows_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 8.3, ty: -106.2},
						transform: [8.3, -106.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 122,
						to: 129,
						classname: "_levelselection_nerd_eyebrows_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 8.3, ty: -106.2},
						transform: [8.3, -106.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 130,
						to: 154,
						classname: "_levelselection_nerd_eyebrows_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.9, ty: -114},
						transform: [6.9, -114, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "nerd_mouth_x",
				keys: [
					{
						from: 0,
						to: 36,
						classname: "_levelselection_nerd_mouth_x",
						instancename: "",
						matrix: {a: 0.953, b: -0.304, c: 0.304, d: 0.953, tx: 13.9, ty: 115.7},
						transform: [13.9, 115.7, 1, 1, 0.309, -0.309, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 37,
						to: 53,
						classname: "_levelselection_nerd_mouth_x",
						instancename: "",
						matrix: {a: 0.953, b: -0.304, c: 0.304, d: 0.953, tx: 13.9, ty: 115.7},
						transform: [13.9, 115.7, 1, 1, 0.309, -0.309, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 117,
						classname: "_levelselection_nerd_mouth_x",
						instancename: "",
						matrix: {a: 0.953, b: -0.304, c: 0.266, d: 0.834, tx: 14.6, ty: 105.65},
						transform: [14.6, 105.65, 1, 0.876, 0.309, -0.309, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 118,
						to: 126,
						classname: "_levelselection_nerd_mouth_x",
						instancename: "",
						matrix: {a: 0.953, b: -0.304, c: 0.266, d: 0.834, tx: 14.6, ty: 105.65},
						transform: [14.6, 105.65, 1, 0.876, 0.309, -0.309, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 127,
						to: 154,
						classname: "_levelselection_nerd_mouth_x",
						instancename: "",
						matrix: {a: 0.953, b: -0.304, c: 0.304, d: 0.953, tx: 13.9, ty: 115.7},
						transform: [13.9, 115.7, 1, 1, 0.309, -0.309, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_levelselection_hiscore_english_x": {
		type: "bitmap",
		asset: "_levelselection_hiscore_english_x",
		scale: 1,
		position: [-336, -86.55],
	},
	"_levelselection_tatuajeoff_x": {
		type: "bitmap",
		asset: "_levelselection_tatuajeoff_x",
		scale: 1,
		position: [-41.75, -49.25],
	},
	"_levelselection_tatuaje_x": {
		type: "bitmap",
		asset: "_levelselection_tatuaje_x",
		scale: 1,
		position: [-41.75, -49.25],
	},
	"_levelselection_level_english_x": {
		type: "bitmap",
		asset: "_levelselection_level_english_x",
		scale: 1,
		position: [-335.25, -86.55],
	},
	"_levelselection_level_spanish_x": {
		type: "bitmap",
		asset: "_levelselection_level_spanish_x",
		scale: 1,
		position: [-335.25, -86.55],
	},
	"_levelselection_level_portuguese_x": {
		type: "bitmap",
		asset: "_levelselection_level_portuguese_x",
		scale: 1,
		position: [-335.25, -86.55],
	},
	"_levelselection_num_0_x": {
		type: "bitmap",
		asset: "_levelselection_num_0_x",
		scale: 1,
		position: [-95.05, -81.3],
	},
	"_levelselection_num_1_x": {
		type: "bitmap",
		asset: "_levelselection_num_1_x",
		scale: 1,
		position: [-95.05, -81.3],
	},
	"_levelselection_num_2_x": {
		type: "bitmap",
		asset: "_levelselection_num_2_x",
		scale: 1,
		position: [-95.05, -81.3],
	},
	"_levelselection_num_3_x": {
		type: "bitmap",
		asset: "_levelselection_num_3_x",
		scale: 1,
		position: [-95.05, -81.3],
	},
	"_levelselection_num_4_x": {
		type: "bitmap",
		asset: "_levelselection_num_4_x",
		scale: 1,
		position: [-95.05, -81.3],
	},
	"_levelselection_num_5_x": {
		type: "bitmap",
		asset: "_levelselection_num_5_x",
		scale: 1,
		position: [-95.05, -81.3],
	},
	"_levelselection_num_6_x": {
		type: "bitmap",
		asset: "_levelselection_num_6_x",
		scale: 1,
		position: [-95.05, -81.3],
	},
	"_levelselection_num_7_x": {
		type: "bitmap",
		asset: "_levelselection_num_7_x",
		scale: 1,
		position: [-95.05, -81.3],
	},
	"_levelselection_num_8_x": {
		type: "bitmap",
		asset: "_levelselection_num_8_x",
		scale: 1,
		position: [-95.05, -81.3],
	},
	"_levelselection_num_9_x": {
		type: "bitmap",
		asset: "_levelselection_num_9_x",
		scale: 1,
		position: [-95.05, -81.3],
	},
	"_levelselection_num_x_x": {
		type: "bitmap",
		asset: "_levelselection_num_x_x",
		scale: 1,
		position: [-95.05, -81.3],
	},
	"_levelselection_minisquare_x": {
		type: "bitmap",
		asset: "_levelselection_minisquare_x",
		scale: 1,
		position: [-27.2, -27.95],
	},
	"_levelselection_minisquare_2_x": {
		type: "bitmap",
		asset: "_levelselection_minisquare_2_x",
		scale: 1,
		position: [-22.45, -35],
	},
	"_levelselection_minisquare_3_x": {
		type: "bitmap",
		asset: "_levelselection_minisquare_3_x",
		scale: 1,
		position: [-23.1, -52.25],
	},
	"_levelselection_minisquare_4_x": {
		type: "bitmap",
		asset: "_levelselection_minisquare_4_x",
		scale: 1,
		position: [-26.6, -65.65],
	},
	"_levelselection_minisquare_b_x": {
		type: "bitmap",
		asset: "_levelselection_minisquare_b_x",
		scale: 1,
		position: [-20.65, -27.95],
	},
	"_levelselection_minisquare_c_x": {
		type: "bitmap",
		asset: "_levelselection_minisquare_c_x",
		scale: 1,
		position: [-20.7, -27.95],
	},
	"_levelselection_minisquare_d_x": {
		type: "bitmap",
		asset: "_levelselection_minisquare_d_x",
		scale: 1,
		position: [-20.7, -27.95],
	},
	"_levelselection_bordegusano_1_x": {
		type: "bitmap",
		asset: "_levelselection_bordegusano_1_x",
		scale: 1,
		position: [-42.45, -37.95],
	},
	"_levelselection_bordegusano_2_x": {
		type: "bitmap",
		asset: "_levelselection_bordegusano_2_x",
		scale: 1,
		position: [-38.8, -21.75],
	},
	"_levelselection_arrowlight_x": {
		type: "bitmap",
		asset: "_levelselection_arrowlight_x",
		scale: 1,
		position: [-115.5, -184.5],
	},
	"_levelselection_soundbottom_x": {
		type: "bitmap",
		asset: "_levelselection_soundbottom_x",
		scale: 1,
		position: [-48.5, -47.5],
	},
	"_levelselection_soundtop_x": {
		type: "bitmap",
		asset: "_levelselection_soundtop_x",
		scale: 1,
		position: [-45, -44],
	},
	"_levelselection_soundlight_anima": {
		type: "movieclip",
		fps: 24,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_levelselection_soundlight_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.7,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.547, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_levelselection_soundlight_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.65,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.547, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_levelselection_soundlight_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.7,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.524, 0], [0.547, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_levelselection_soundbottom_red_x": {
		type: "bitmap",
		asset: "_levelselection_soundbottom_red_x",
		scale: 1,
		position: [-48.5, -47.5],
	},
	"_levelselection_soundtop_red_x": {
		type: "bitmap",
		asset: "_levelselection_soundtop_red_x",
		scale: 1,
		position: [-45, -44],
	},
	"_levelselection_soundlight_anima_red": {
		type: "movieclip",
		fps: 24,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_levelselection_soundlight_red_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.7,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.547, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_levelselection_soundlight_red_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.65,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.547, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_levelselection_soundlight_red_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.7,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.524, 0], [0.547, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_levelselection_homelight_x": {
		type: "bitmap",
		asset: "_levelselection_homelight_x",
		scale: 1,
		position: [-53.85, -49.95],
	},
	"_levelselection_nerd_main_x": {
		type: "bitmap",
		asset: "_levelselection_nerd_main_x",
		scale: 1,
		position: [-255, -326.5],
	},
	"_levelselection_eyes": {
		type: "movieclip",
		fps: 24,
		totalFrames: 128,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 57,
						classname: "_levelselection_eyes1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 58,
						to: 58,
						classname: "_levelselection_eyes2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 59,
						to: 62,
						classname: "_levelselection_eyes3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 63,
						to: 63,
						classname: "_levelselection_eyes4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 64,
						to: 121,
						classname: "_levelselection_eyes1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 122,
						to: 122,
						classname: "_levelselection_eyes2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 123,
						to: 126,
						classname: "_levelselection_eyes3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 127,
						to: 127,
						classname: "_levelselection_eyes4_x",
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
				name: "gloweye",
				keys: [
					{
						from: 0,
						to: 58,
						classname: "_levelselection_gloweye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -62.85, ty: -1.6},
						transform: [-62.85, -1.6, 1, 1, 0, 0, 0],
						alpha: 0.21,
						visible: true,
						tween: false,
					},
					{
						from: 59,
						to: 62,
					},
					{
						from: 63,
						to: 75,
						classname: "_levelselection_gloweye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -62.85, ty: -1.6},
						transform: [-62.85, -1.6, 1, 1, 0, 0, 0],
						alpha: 0.21,
						visible: true,
						tween: false,
					},
					{
						from: 76,
						to: 82,
						classname: "_levelselection_gloweye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -62.85, ty: -1.6},
						transform: [-62.85, -1.6, 1, 1, 0, 0, 0],
						alpha: 0.21,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 83,
						to: 92,
						classname: "_levelselection_gloweye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -62.85, ty: -1.6},
						transform: [-62.85, -1.6, 1, 1, 0, 0, 0],
						alpha: 0.35,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 93,
						to: 121,
						classname: "_levelselection_gloweye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -62.85, ty: -1.6},
						transform: [-62.85, -1.6, 1, 1, 0, 0, 0],
						alpha: 0.21,
						visible: true,
						tween: false,
					},
					{
						from: 122,
						to: 122,
						classname: "_levelselection_gloweye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -62.85, ty: -1.6},
						transform: [-62.85, -1.6, 1, 1, 0, 0, 0],
						alpha: 0.21,
						visible: true,
						tween: false,
					},
					{
						from: 123,
						to: 126,
					},
					{
						from: 127,
						to: 127,
						classname: "_levelselection_gloweye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -62.85, ty: -1.6},
						transform: [-62.85, -1.6, 1, 1, 0, 0, 0],
						alpha: 0.21,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gloweye",
				keys: [
					{
						from: 0,
						to: 58,
						classname: "_levelselection_gloweye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 65.1, ty: -3.35},
						transform: [65.1, -3.35, 1, 1, 0, 0, 0],
						alpha: 0.21,
						visible: true,
						tween: false,
					},
					{
						from: 59,
						to: 62,
					},
					{
						from: 63,
						to: 75,
						classname: "_levelselection_gloweye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 65.1, ty: -3.35},
						transform: [65.1, -3.35, 1, 1, 0, 0, 0],
						alpha: 0.21,
						visible: true,
						tween: false,
					},
					{
						from: 76,
						to: 82,
						classname: "_levelselection_gloweye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 65.1, ty: -3.35},
						transform: [65.1, -3.35, 1, 1, 0, 0, 0],
						alpha: 0.21,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 83,
						to: 92,
						classname: "_levelselection_gloweye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 65.1, ty: -3.35},
						transform: [65.1, -3.35, 1, 1, 0, 0, 0],
						alpha: 0.35,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 93,
						to: 121,
						classname: "_levelselection_gloweye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 65.1, ty: -3.35},
						transform: [65.1, -3.35, 1, 1, 0, 0, 0],
						alpha: 0.21,
						visible: true,
						tween: false,
					},
					{
						from: 122,
						to: 122,
						classname: "_levelselection_gloweye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 65.1, ty: -3.35},
						transform: [65.1, -3.35, 1, 1, 0, 0, 0],
						alpha: 0.21,
						visible: true,
						tween: false,
					},
					{
						from: 123,
						to: 126,
					},
					{
						from: 127,
						to: 127,
						classname: "_levelselection_gloweye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 65.1, ty: -3.35},
						transform: [65.1, -3.35, 1, 1, 0, 0, 0],
						alpha: 0.21,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_levelselection_nerd_eyebrows_x": {
		type: "bitmap",
		asset: "_levelselection_nerd_eyebrows_x",
		scale: 1,
		position: [-145.5, -29],
	},
	"_levelselection_nerd_mouth_x": {
		type: "bitmap",
		asset: "_levelselection_nerd_mouth_x",
		scale: 1,
		position: [-85.85, -66.55],
	},
	"_levelselection_soundlight_x": {
		type: "bitmap",
		asset: "_levelselection_soundlight_x",
		scale: 1,
		position: [-62.5, -61],
	},
	"_levelselection_soundlight_red_x": {
		type: "bitmap",
		asset: "_levelselection_soundlight_red_x",
		scale: 1,
		position: [-62.5, -61],
	},
	"_levelselection_eyes1_x": {
		type: "bitmap",
		asset: "_levelselection_eyes1_x",
		scale: 1,
		position: [-114, -48],
	},
	"_levelselection_eyes2_x": {
		type: "bitmap",
		asset: "_levelselection_eyes2_x",
		scale: 1,
		position: [-114, -48],
	},
	"_levelselection_eyes3_x": {
		type: "bitmap",
		asset: "_levelselection_eyes3_x",
		scale: 1,
		position: [-114, -48],
	},
	"_levelselection_eyes4_x": {
		type: "bitmap",
		asset: "_levelselection_eyes4_x",
		scale: 1,
		position: [-114, -48],
	},
	"_levelselection_gloweye": {
		type: "movieclip",
		fps: 24,
		totalFrames: 21,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_levelselection_gllowbot_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.535, 0], [0.587, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 19,
						classname: "_levelselection_gllowbot_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.88,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.535, 0], [0.587, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_levelselection_gllowbot_x",
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
	"_levelselection_gllowbot_x": {
		type: "bitmap",
		asset: "_levelselection_gllowbot_x",
		scale: 1,
		position: [-22.75, -22.75],
	},
};
