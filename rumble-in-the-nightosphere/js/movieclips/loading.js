
var loading = {
	"loading": {
		type: "movieclip",
		fps: 30,
		totalFrames: 120,
		labels: {out: {from:101, to:119}, },
		layers: [
			{
				name: "black_x",
				keys: [
					{
						from: 0,
						to: 119,
						classname: "_loading_black_x",
						instancename: "",
						matrix: {a: 8.473, b: 0, c: 0, d: 6.355, tx: 400, ty: 300},
						transform: [400, 300, 8.473, 6.355, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bar",
				keys: [
					{
						from: 0,
						to: 100,
						classname: "_loading_bar",
						instancename: "bar",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400, ty: 327.75},
						transform: [400, 327.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 101,
						to: 119,
					},
				]
			},
			{
				name: "loading_txt",
				keys: [
					{
						from: 0,
						to: 100,
						classname: "_loading_loading_txt",
						instancename: "loading_txt",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400, ty: 274.2},
						transform: [400, 274.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 101,
						to: 119,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 100,
					},
					{
						from: 101,
						to: 106,
						classname: "_loading_cn,games,animation",
						instancename: "",
						matrix: {a: 0.692, b: 0, c: 0, d: 0.692, tx: 400, ty: 300},
						transform: [400, 300, 0.692, 0.692, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.14, 0.3], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 107,
						to: 119,
						classname: "_loading_cn,games,animation",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 400, ty: 300},
						transform: [400, 300, 1, 1, 0, 0, 0],
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
						to: 99,
					},
					{
						from: 100,
						to: 119,
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 100,
					},
					{
						from: 101,
						to: 119,
					},
				]
			},
			{
				name: "code",
				keys: [
					{
						from: 0,
						to: 100,
					},
					{
						from: 101,
						to: 101,
						actions: function(self){soundManager.play("cn_loading");},
					},
					{
						from: 102,
						to: 118,
					},
					{
						from: 119,
						to: 119,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_loading_black_x": {
		type: "bitmap",
		asset: "_loading_black_x",
		scale: 1,
		position: [-55, -55.05],
	},
	"_loading_bar": {
		type: "movieclip",
		fps: 30,
		totalFrames: 132,
		labels: {},
		layers: [
			{
				name: "diagonals",
				keys: [
					{
						from: 0,
						to: 100,
						classname: "_loading_diagonals",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -26, ty: -0.2},
						transform: [-26, -0.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 101,
						to: 131,
					},
				]
			},
			{
				name: "bar",
				keys: [
					{
						from: 0,
						to: 98,
						classname: "_loading_black_x",
						instancename: "",
						matrix: {a: 3.262, b: 0, c: 0, d: 0.786, tx: -0.3, ty: -0.9},
						transform: [-0.3, -0.9, 3.262, 0.786, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 99,
						to: 100,
						classname: "_loading_black_x",
						instancename: "",
						matrix: {a: 3.262, b: 0, c: 0, d: 0.786, tx: 322.55, ty: -0.85},
						transform: [322.55, -0.85, 3.262, 0.786, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 101,
						to: 131,
					},
				]
			},
			{
				name: "topper_x",
				keys: [
					{
						from: 0,
						to: 100,
						classname: "_loading_topper_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: -0.15},
						transform: [-0.2, -0.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 101,
						to: 131,
					},
				]
			},
		]
	},
	"_loading_loading_txt": {
		type: "movieclip",
		fps: 30,
		totalFrames: 40,
		labels: {english: {from:0, to:8}, spanish: {from:10, to:18}, portuguese: {from:20, to:28}, arabic: {from:30, to:38}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_loading_loding_english_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 19,
						classname: "_loading_loding_spanish_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 29,
						classname: "_loading_loding_portuguese_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 30,
						to: 39,
						classname: "_loading_loding_arabic_x",
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
				name: "layer",
				keys: [
					{
						from: 0,
						to: 8,
					},
					{
						from: 9,
						to: 9,
						actions: function(self){self.stop()},
					},
					{
						from: 10,
						to: 18,
					},
					{
						from: 19,
						to: 19,
						actions: function(self){self.stop()},
					},
					{
						from: 20,
						to: 28,
					},
					{
						from: 29,
						to: 29,
						actions: function(self){self.stop()},
					},
					{
						from: 30,
						to: 38,
					},
					{
						from: 39,
						to: 39,
						actions: function(self){self.stop()},
					},
				]
			},
		]
	},
	"_loading_cn,games,animation": {
		type: "movieclip",
		fps: 30,
		totalFrames: 149,
		labels: {},
		layers: [
			{
				name: "train",
				keys: [
					{
						from: 0,
						to: 82,
					},
					{
						from: 83,
						to: 100,
						classname: "_loading_train",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2052.4, ty: 9.25},
						transform: [-2052.4, 9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.268, 0.377], [0.648, 1], [1, 1], ],
						}
					},
					{
						from: 101,
						to: 148,
						classname: "_loading_train",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 890.85, ty: 9.25},
						transform: [890.85, 9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Cartoon Network",
				keys: [
					{
						from: 0,
						to: 108,
					},
					{
						from: 109,
						to: 109,
						classname: "_loading_cartoonnetwork_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -170.6, ty: 114.5},
						transform: [-170.6, 114.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 110,
						to: 113,
						classname: "_loading_cartoonnetwork_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -170.6, ty: 20},
						transform: [-170.6, 20, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 114,
						to: 118,
						classname: "_loading_cartoonnetwork_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -170.6, ty: -101.45},
						transform: [-170.6, -101.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 119,
						to: 148,
						classname: "_loading_cartoonnetwork_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -168.6, ty: 7.45},
						transform: [-168.6, 7.45, 1, 1, 0, 0, 0],
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
						to: 88,
					},
					{
						from: 89,
						to: 109,
						classname: "_loading_gamesset",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1994.1, ty: 56.5},
						transform: [-1994.1, 56.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.262, 0.414], [0.643, 1], [1, 1], ],
						}
					},
					{
						from: 110,
						to: 117,
						classname: "_loading_gamesset",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 61},
						transform: [0, 61, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 118,
						to: 122,
						classname: "_loading_gamesset",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 61},
						transform: [0, 61, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 123,
						to: 126,
						classname: "_loading_gamesset",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 107.5},
						transform: [0, 107.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.556, 0], [0.422, 1], [1, 1], ],
						}
					},
					{
						from: 127,
						to: 148,
						classname: "_loading_gamesset",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 94.1},
						transform: [0, 94.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "CN GAMES",
				keys: [
				]
			},
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 29,
					},
					{
						from: 30,
						to: 35,
						classname: "_loading_burststar_x",
						instancename: "",
						matrix: {a: 0.31, b: 0, c: 0, d: 0.31, tx: -43.35, ty: -40.75},
						transform: [-43.35, -40.75, 0.31, 0.31, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0, 0], [0, 0.564], [1, 1], ],
						}
					},
					{
						from: 36,
						to: 55,
						classname: "_loading_burststar_x",
						instancename: "",
						matrix: {a: 0.886, b: 0, c: 0, d: 0.886, tx: -124.7, ty: -122.15},
						transform: [-124.7, -122.15, 0.886, 0.886, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.551], [0.497, 1], [1, 1], ],
						}
					},
					{
						from: 56,
						to: 56,
						classname: "_loading_burststar_x",
						instancename: "",
						matrix: {a: 1.173, b: 0, c: 0, d: 1.173, tx: -165.25, ty: -162.65},
						transform: [-165.25, -162.65, 1.173, 1.173, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 57,
						to: 148,
					},
				]
			},
			{
				name: "Layer 7",
				keys: [
					{
						from: 0,
						to: 29,
					},
					{
						from: 30,
						to: 35,
						classname: "_loading_circle_borde_black_x",
						instancename: "",
						matrix: {a: 0.316, b: 0, c: 0, d: 0.316, tx: 0.8, ty: 2.2},
						transform: [0.8, 2.2, 0.316, 0.316, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 36,
						to: 44,
						classname: "_loading_circle_borde_black_x",
						instancename: "",
						matrix: {a: 0.316, b: 0, c: 0, d: 0.316, tx: 0.8, ty: 2.2},
						transform: [0.8, 2.2, 0.316, 0.316, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 45,
						to: 55,
						classname: "_loading_circle_borde_black_x",
						instancename: "",
						matrix: {a: 1.687, b: 0, c: 0, d: 1.687, tx: 0.8, ty: 2.1},
						transform: [0.8, 2.1, 1.687, 1.687, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 56,
						to: 56,
						classname: "_loading_circle_borde_black_x",
						instancename: "",
						matrix: {a: 2.838, b: 0, c: 0, d: 2.838, tx: 0.8, ty: 2.05},
						transform: [0.8, 2.05, 2.838, 2.838, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 57,
						to: 148,
					},
				]
			},
			{
				name: "Layer 9",
				keys: [
					{
						from: 0,
						to: 47,
					},
					{
						from: 48,
						to: 51,
						classname: "_loading_arrowcir_x",
						instancename: "",
						matrix: {a: 1.097, b: 0, c: 0, d: 1.097, tx: -112.45, ty: -109.5},
						transform: [-112.45, -109.5, 1.097, 1.097, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 52,
						to: 55,
						classname: "_loading_arrowcir_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -102.45, ty: -99.5},
						transform: [-102.45, -99.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 56,
						to: 56,
						classname: "_loading_arrowcir_x",
						instancename: "",
						matrix: {a: 0.731, b: 0, c: 0, d: 0.731, tx: -74.8, ty: -71.85},
						transform: [-74.8, -71.85, 0.731, 0.731, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 57,
						to: 148,
					},
				]
			},
			{
				name: "Layer 8",
				keys: [
					{
						from: 0,
						to: 52,
					},
					{
						from: 53,
						to: 63,
						classname: "_loading_circ",
						instancename: "",
						matrix: {a: 1.097, b: 0, c: 0, d: 1.097, tx: 0.4, ty: 2.45},
						transform: [0.4, 2.45, 1.097, 1.097, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 64,
						to: 64,
						classname: "_loading_circ",
						instancename: "",
						matrix: {a: 1.454, b: 0, c: 0, d: 1.454, tx: 0.8, ty: 2},
						transform: [0.8, 2, 1.454, 1.454, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 65,
						to: 65,
						classname: "_loading_circle_borde_black_x",
						instancename: "",
						matrix: {a: 1.454, b: 0, c: 0, d: 1.454, tx: 0.8, ty: 2},
						transform: [0.8, 2, 1.454, 1.454, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 66,
						to: 66,
						classname: "_loading_circle_borde_white_x",
						instancename: "",
						matrix: {a: 1.454, b: 0, c: 0, d: 1.454, tx: 0.8, ty: 2},
						transform: [0.8, 2, 1.454, 1.454, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 67,
						to: 148,
					},
				]
			},
			{
				name: "Layer 6",
				keys: [
					{
						from: 0,
						to: 33,
					},
					{
						from: 34,
						to: 36,
						classname: "_loading_circ_x",
						instancename: "",
						matrix: {a: 0.827, b: 0, c: 0, d: 0.827, tx: -52.8, ty: -50.2},
						transform: [-52.8, -50.2, 0.827, 0.827, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 37,
						to: 44,
						classname: "_loading_circ_x",
						instancename: "",
						matrix: {a: 0.962, b: 0, c: 0, d: 0.962, tx: -61.5, ty: -58.9},
						transform: [-61.5, -58.9, 0.962, 0.962, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 45,
						to: 61,
						classname: "_loading_circ_x",
						instancename: "",
						matrix: {a: 0.902, b: 0, c: 0, d: 0.902, tx: -57.6, ty: -54.95},
						transform: [-57.6, -54.95, 0.902, 0.902, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 62,
						to: 63,
						classname: "_loading_circ_semi_x",
						instancename: "",
						matrix: {a: 0.902, b: 0, c: 0, d: 0.902, tx: -57.6, ty: -54.95},
						transform: [-57.6, -54.95, 0.902, 0.902, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 64,
						to: 64,
						classname: "_loading_circ_x",
						instancename: "",
						matrix: {a: 0.902, b: 0, c: 0, d: 0.902, tx: -57.6, ty: -54.95},
						transform: [-57.6, -54.95, 0.902, 0.902, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 65,
						to: 74,
						classname: "_loading_circ_white_x",
						instancename: "",
						matrix: {a: 0.803, b: 0, c: 0, d: 0.803, tx: -51.25, ty: -48.6},
						transform: [-51.25, -48.6, 0.803, 0.803, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 75,
						to: 83,
						classname: "_loading_circ_white_x",
						instancename: "",
						matrix: {a: 0.803, b: 0, c: 0, d: 0.803, tx: -81.8, ty: -48.6},
						transform: [-81.8, -48.6, 0.803, 0.803, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.013319999999999999], [0.666, 0.34632], [1, 1]],
						}
					},
					{
						from: 84,
						to: 84,
						classname: "_loading_circ_white_x",
						instancename: "",
						matrix: {a: 0.803, b: 0, c: 0, d: 0.803, tx: 894.3, ty: -48.6},
						transform: [894.3, -48.6, 0.803, 0.803, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 85,
						to: 148,
					},
				]
			},
			{
				name: "chirimbolo",
				keys: [
				]
			},
			{
				name: "White",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_loading_white_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 173.55, ty: 36.2},
						transform: [173.55, 36.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 10,
						classname: "_loading_white_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 173.55, ty: 36.2},
						transform: [173.55, 36.2, 1, 1, 0, 0, 0],
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
						classname: "_loading_white_x",
						instancename: "",
						matrix: {a: 0.179, b: 0, c: 0, d: 1, tx: 149.85, ty: 36.2},
						transform: [149.85, 36.2, 0.179, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 93,
					},
				]
			},
			{
				name: "K",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_loading_k_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: 148.8, ty: 11.5},
						transform: [148.8, 11.5, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 12,
						classname: "_loading_k_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: 148.8, ty: 11.5},
						transform: [148.8, 11.5, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_loading_k_x",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: 168.95, ty: 31.45},
						transform: [168.95, 31.45, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 93,
					},
				]
			},
			{
				name: "R",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_loading_r_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: 93.2, ty: 11.5},
						transform: [93.2, 11.5, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 15,
						classname: "_loading_r_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: 93.2, ty: 11.5},
						transform: [93.2, 11.5, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_loading_r_x",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.05, tx: 114.6, ty: 33.85},
						transform: [114.6, 33.85, 0.05, 0.05, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 93,
					},
				]
			},
			{
				name: "White",
				keys: [
					{
						from: 0,
						to: 22,
						classname: "_loading_white_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 58.1, ty: 36.25},
						transform: [58.1, 36.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 25,
						classname: "_loading_white_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 58.1, ty: 36.25},
						transform: [58.1, 36.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 26,
						to: 26,
						classname: "_loading_white_x",
						instancename: "",
						matrix: {a: 0.096, b: 0, c: 0, d: 1, tx: 32, ty: 36.25},
						transform: [32, 36.25, 0.096, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 93,
					},
				]
			},
			{
				name: "O",
				keys: [
					{
						from: 0,
						to: 18,
						classname: "_loading_o_black_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: 32.4, ty: 10.45},
						transform: [32.4, 10.45, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 20,
						classname: "_loading_o_black_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: 32.4, ty: 10.45},
						transform: [32.4, 10.45, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 21,
						to: 23,
						classname: "_loading_o_black_x",
						instancename: "",
						matrix: {a: 0.6, b: 0, c: 0, d: 0.6, tx: 28.2, ty: 6.2},
						transform: [28.2, 6.2, 0.6, 0.6, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_loading_o_black_x",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.05, tx: 55.65, ty: 33.75},
						transform: [55.65, 33.75, 0.05, 0.05, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 93,
					},
				]
			},
			{
				name: "W",
				keys: [
					{
						from: 0,
						to: 25,
						classname: "_loading_w_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: -25.3, ty: 11.5},
						transform: [-25.3, 11.5, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 26,
						classname: "_loading_w_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: -25.3, ty: 11.5},
						transform: [-25.3, 11.5, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.65268], [0.666, 0.9856800000000001], [1, 1]],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_loading_w_x",
						instancename: "",
						matrix: {a: 0.667, b: 0, c: 0, d: 0.667, tx: -32.85, ty: 4.25},
						transform: [-32.85, 4.25, 0.667, 0.667, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_loading_w_x",
						instancename: "",
						matrix: {a: 0.333, b: 0, c: 0, d: 0.333, tx: -16.25, ty: 20.25},
						transform: [-16.25, 20.25, 0.333, 0.333, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 29,
						to: 93,
					},
				]
			},
			{
				name: "White",
				keys: [
					{
						from: 0,
						to: 25,
						classname: "_loading_white_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -57.3, ty: 36.25},
						transform: [-57.3, 36.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 27,
						classname: "_loading_white_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -57.3, ty: 36.25},
						transform: [-57.3, 36.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_loading_white_x",
						instancename: "",
						matrix: {a: 0.106, b: 0, c: 0, d: 1, tx: -31.45, ty: 36.25},
						transform: [-31.45, 36.25, 0.106, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 29,
						to: 93,
					},
				]
			},
			{
				name: "T",
				keys: [
					{
						from: 0,
						to: 22,
						classname: "_loading_t_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: -82, ty: 11.5},
						transform: [-82, 11.5, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 23,
						classname: "_loading_t_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: -82, ty: 11.5},
						transform: [-82, 11.5, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 24,
						to: 26,
						classname: "_loading_t_x",
						instancename: "",
						matrix: {a: 0.667, b: 0, c: 0, d: 0.667, tx: -89.3, ty: 4.25},
						transform: [-89.3, 4.25, 0.667, 0.667, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_loading_t_x",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.05, tx: -59.65, ty: 33.85},
						transform: [-59.65, 33.85, 0.05, 0.05, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 93,
					},
				]
			},
			{
				name: "E",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_loading_e_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: -136.6, ty: 11.5},
						transform: [-136.6, 11.5, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 18,
						classname: "_loading_e_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: -136.6, ty: 11.5},
						transform: [-136.6, 11.5, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_loading_e_x",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.05, tx: -117.1, ty: 33.85},
						transform: [-117.1, 33.85, 0.05, 0.05, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 93,
					},
				]
			},
			{
				name: "White",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_loading_white_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -172.7, ty: 36.25},
						transform: [-172.7, 36.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 15,
						classname: "_loading_white_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -172.7, ty: 36.25},
						transform: [-172.7, 36.25, 1, 1, 0, 0, 0],
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
						classname: "_loading_white_x",
						instancename: "",
						matrix: {a: 0.153, b: 0, c: 0, d: 1, tx: -148.25, ty: 36.25},
						transform: [-148.25, 36.25, 0.153, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 93,
					},
				]
			},
			{
				name: "N",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_loading_n_black_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: -197.45, ty: 11.5},
						transform: [-197.45, 11.5, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 15,
						classname: "_loading_n_black_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: -197.45, ty: 11.5},
						transform: [-197.45, 11.5, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_loading_n_black_x",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.05, tx: -175.1, ty: 33.85},
						transform: [-175.1, 33.85, 0.05, 0.05, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 93,
					},
				]
			},
			{
				name: "Network",
				keys: [
				]
			},
			{
				name: "N",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_loading_n_white_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: 148.8, ty: -46.2},
						transform: [148.8, -46.2, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 13,
						classname: "_loading_n_white_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: 148.8, ty: -46.2},
						transform: [148.8, -46.2, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_loading_n_white_x",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.05, tx: 171.15, ty: -23.9},
						transform: [171.15, -23.9, 0.05, 0.05, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 93,
					},
				]
			},
			{
				name: "White",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_loading_white_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 115.85, ty: -21.5},
						transform: [115.85, -21.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 19,
						classname: "_loading_white_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 115.85, ty: -21.5},
						transform: [115.85, -21.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_loading_white_x",
						instancename: "",
						matrix: {a: 0.182, b: 0, c: 0, d: 1, tx: 92.25, ty: -21.5},
						transform: [92.25, -21.5, 0.182, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 93,
					},
				]
			},
			{
				name: "O",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_loading_o_black_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: 90.1, ty: -47.25},
						transform: [90.1, -47.25, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 19,
						classname: "_loading_o_black_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: 90.1, ty: -47.25},
						transform: [90.1, -47.25, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_loading_o_black_x",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.05, tx: 113.35, ty: -24},
						transform: [113.35, -24, 0.05, 0.05, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 93,
					},
				]
			},
			{
				name: "O",
				keys: [
					{
						from: 0,
						to: 21,
						classname: "_loading_o_white_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: 32.4, ty: -47.25},
						transform: [32.4, -47.25, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 24,
						classname: "_loading_o_white_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: 32.4, ty: -47.25},
						transform: [32.4, -47.25, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_loading_o_white_x",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.05, tx: 55.65, ty: -24},
						transform: [55.65, -24, 0.05, 0.05, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 93,
					},
				]
			},
			{
				name: "White",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_loading_white_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.45, ty: -21.45},
						transform: [0.45, -21.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 29,
						to: 29,
						classname: "_loading_white_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.477, tx: 0.45, ty: -6.35},
						transform: [0.45, -6.35, 1, 0.477, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 30,
						to: 93,
					},
				]
			},
			{
				name: "T",
				keys: [
					{
						from: 0,
						to: 22,
						classname: "_loading_t_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: -24.3, ty: -46.2},
						transform: [-24.3, -46.2, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 23,
						classname: "_loading_t_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: -24.3, ty: -46.2},
						transform: [-24.3, -46.2, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 24,
						to: 25,
						classname: "_loading_t_x",
						instancename: "",
						matrix: {a: 0.667, b: 0, c: 0, d: 0.667, tx: -31.55, ty: -53.45},
						transform: [-31.55, -53.45, 0.667, 0.667, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 26,
						to: 26,
						classname: "_loading_t_x",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.05, tx: -1.95, ty: -23.85},
						transform: [-1.95, -23.85, 0.05, 0.05, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 93,
					},
				]
			},
			{
				name: "R",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_loading_r_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: -79.95, ty: -46.2},
						transform: [-79.95, -46.2, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 22,
						classname: "_loading_r_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: -79.95, ty: -46.2},
						transform: [-79.95, -46.2, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_loading_r_x",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.05, tx: -58.55, ty: -23.9},
						transform: [-58.55, -23.9, 0.05, 0.05, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 93,
					},
				]
			},
			{
				name: "White",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_loading_white_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -115, ty: -21.5},
						transform: [-115, -21.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 18,
						classname: "_loading_white_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -115, ty: -21.5},
						transform: [-115, -21.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_loading_white_x",
						instancename: "",
						matrix: {a: 0.12, b: 0, c: 0, d: 1, tx: -89.6, ty: -21.5},
						transform: [-89.6, -21.5, 0.12, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 93,
					},
				]
			},
			{
				name: "A",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_loading_a_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: -140.75, ty: -46.2},
						transform: [-140.75, -46.2, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 19,
						classname: "_loading_a_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: -140.75, ty: -46.2},
						transform: [-140.75, -46.2, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_loading_a_x",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.05, tx: -117.5, ty: -23.9},
						transform: [-117.5, -23.9, 0.05, 0.05, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 93,
					},
				]
			},
			{
				name: "C",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_loading_c_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: -197.3, ty: -47.25},
						transform: [-197.3, -47.25, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 14,
						classname: "_loading_c_x",
						instancename: "",
						matrix: {a: 0.515, b: 0, c: 0, d: 0.515, tx: -197.3, ty: -47.25},
						transform: [-197.3, -47.25, 0.515, 0.515, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_loading_c_x",
						instancename: "",
						matrix: {a: 0.05, b: 0, c: 0, d: 0.05, tx: -175.6, ty: -24},
						transform: [-175.6, -24, 0.05, 0.05, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 93,
					},
				]
			},
			{
				name: "Cartoon",
				keys: [
				]
			},
			{
				name: "Layer 13",
				keys: [
					{
						from: 0,
						to: 139,
					},
					{
						from: 140,
						to: 146,
						classname: "_loading_black_x",
						instancename: "",
						matrix: {a: 9.977, b: 0, c: 0, d: 6.863, tx: -3.5, ty: 14.55},
						transform: [-3.5, 14.55, 9.977, 6.863, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 147,
						to: 148,
						classname: "_loading_black_x",
						instancename: "",
						matrix: {a: 9.977, b: 0, c: 0, d: 6.863, tx: -3.5, ty: 14.55},
						transform: [-3.5, 14.55, 9.977, 6.863, 0, 0, 0],
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
						to: 147,
					},
					{
						from: 148,
						to: 148,
						actions: function(self){globalsignal.emit(self, "exit");
self.stop();},
					},
				]
			},
			{
				name: "Layer 12",
				keys: [
					{
						from: 0,
						to: 148,
					},
				]
			},
		]
	},
	"_loading_diagonals": {
		type: "movieclip",
		fps: 30,
		totalFrames: 13,
		labels: {loop: {from:0, to:11}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_loading_diagonals_gfx",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
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
						classname: "_loading_diagonals_gfx",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 52.05, ty: 0},
						transform: [52.05, 0, 1, 1, 0, 0, 0],
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
						to: 11,
					},
					{
						from: 12,
						to: 12,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_loading_topper_x": {
		type: "bitmap",
		asset: "_loading_topper_x",
		scale: 1,
		position: [-231.9, -62.7],
	},
	"_loading_loding_english_x": {
		type: "bitmap",
		asset: "_loading_loding_english_x",
		scale: 1,
		position: [-206.1, -36.7],
	},
	"_loading_loding_spanish_x": {
		type: "bitmap",
		asset: "_loading_loding_spanish_x",
		scale: 1,
		position: [-206.1, -36.7],
	},
	"_loading_loding_portuguese_x": {
		type: "bitmap",
		asset: "_loading_loding_portuguese_x",
		scale: 1,
		position: [-206.1, -36.7],
	},
	"_loading_loding_arabic_x": {
		type: "bitmap",
		asset: "_loading_loding_arabic_x",
		scale: 1,
		position: [-206.1, -36.7],
	},
	"_loading_train": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "yellow_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_loading_yellow_x",
						instancename: "",
						matrix: {a: 10.022, b: 0, c: 0, d: 6.86, tx: 1802.3, ty: 4.8},
						transform: [1802.3, 4.8, 10.022, 6.86, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "magenta_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_loading_magenta_x",
						instancename: "",
						matrix: {a: 10.022, b: 0, c: 0, d: 6.86, tx: 904.15, ty: 5.15},
						transform: [904.15, 5.15, 10.022, 6.86, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "cyan_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_loading_cyan_x",
						instancename: "",
						matrix: {a: 10.022, b: 0, c: 0, d: 6.86, tx: 5.95, ty: 5.15},
						transform: [5.95, 5.15, 10.022, 6.86, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "black_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_loading_black_x",
						instancename: "",
						matrix: {a: 10.022, b: 0, c: 0, d: 6.86, tx: -892.1, ty: 5.15},
						transform: [-892.1, 5.15, 10.022, 6.86, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "GAMES_yellow_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_loading_games_yellow_x",
						instancename: "",
						matrix: {a: 0.375, b: 0, c: 0, d: 0.375, tx: 756.25, ty: -25.05},
						transform: [756.25, -25.05, 0.375, 0.375, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "GAMES_cyan_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_loading_games_cyan_x",
						instancename: "",
						matrix: {a: 0.375, b: 0, c: 0, d: 0.375, tx: 1662.6, ty: -25.05},
						transform: [1662.6, -25.05, 0.375, 0.375, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "GAMES_magenta_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_loading_games_magenta_x",
						instancename: "",
						matrix: {a: 0.375, b: 0, c: 0, d: 0.375, tx: -159.35, ty: -25.05},
						transform: [-159.35, -25.05, 0.375, 0.375, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_loading_cartoonnetwork_x": {
		type: "bitmap",
		asset: "_loading_cartoonnetwork_x",
		scale: 1,
		position: [38.25, -143.2],
	},
	"_loading_gamesset": {
		type: "movieclip",
		fps: 30,
		totalFrames: 39,
		labels: {},
		layers: [
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 38,
						classname: "_loading_black_x",
						instancename: "",
						matrix: {a: 5.224, b: 0, c: 0, d: 1.559, tx: -3.2, ty: 21.55},
						transform: [-3.2, 21.55, 5.224, 1.559, 0, 0, 0],
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
						to: 38,
						classname: "_loading_games_x",
						instancename: "",
						matrix: {a: 0.375, b: 0, c: 0, d: 0.375, tx: -204.55, ty: -47.4},
						transform: [-204.55, -47.4, 0.375, 0.375, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Arrow",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 13,
						classname: "_loading_traingle_simple_x",
						instancename: "",
						matrix: {a: 3.391, b: 0, c: 0, d: 3.391, tx: -109.65, ty: 0.55},
						transform: [-109.65, 0.55, 3.391, 3.391, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_loading_arrow,a",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -134.05, ty: -45.7},
						transform: [-134.05, -45.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 17,
						classname: "_loading_triangle_colorines",
						instancename: "",
						matrix: {a: 0.458, b: 0, c: 0, d: 0.406, tx: -74.05, ty: -2.4},
						transform: [-74.05, -2.4, 0.458, 0.406, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_loading_triangle_colorines",
						instancename: "",
						matrix: {a: 0.458, b: 0, c: 0, d: 0.406, tx: -74.05, ty: -2.4},
						transform: [-74.05, -2.4, 0.458, 0.406, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_loading_triangle_colorines",
						instancename: "",
						matrix: {a: 0.689, b: 0, c: 0, d: 0.769, tx: -73.3, ty: -2.15},
						transform: [-73.3, -2.15, 0.689, 0.769, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 21,
						classname: "_loading_triangle_colorines",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -73.3, ty: -2.15},
						transform: [-73.3, -2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_loading_triangle_colorines",
						instancename: "",
						matrix: {a: 0.341, b: 0, c: 0, d: 1.178, tx: -73.3, ty: -2.15},
						transform: [-73.3, -2.15, 0.341, 1.178, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.23, 0.356], [0.626, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 24,
						classname: "_loading_triangle_colorines",
						instancename: "",
						matrix: {a: 0.341, b: 0, c: 0, d: 1.178, tx: -73.3, ty: -2.15},
						transform: [-73.3, -2.15, 0.341, 1.178, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.356], [0.626, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_loading_triangle_colorines",
						instancename: "",
						matrix: {a: 0.614, b: 0, c: 0, d: 0.578, tx: -73.3, ty: -2.15},
						transform: [-73.3, -2.15, 0.614, 0.578, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 38,
						classname: "_loading_traingle_simple_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -73.25, ty: -2.25},
						transform: [-73.25, -2.25, 1, 1, 0, 0, 0],
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
						to: 37,
					},
					{
						from: 38,
						to: 38,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_loading_burststar_x": {
		type: "bitmap",
		asset: "_loading_burststar_x",
		scale: 1,
		position: [-5, 8.9],
	},
	"_loading_circle_borde_black_x": {
		type: "bitmap",
		asset: "_loading_circle_borde_black_x",
		scale: 1,
		position: [-69.5, -69.5],
	},
	"_loading_arrowcir_x": {
		type: "bitmap",
		asset: "_loading_arrowcir_x",
		scale: 1,
		position: [-5, -5],
	},
	"_loading_circ": {
		type: "movieclip",
		fps: 30,
		totalFrames: 7,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_loading_circle_borde_white_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_loading_circle_borde_yellow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_loading_circle_borde_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
						classname: "_loading_circle_borde_magenta_x",
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
	"_loading_circle_borde_white_x": {
		type: "bitmap",
		asset: "_loading_circle_borde_white_x",
		scale: 1,
		position: [-69.5, -69.5],
	},
	"_loading_circ_x": {
		type: "bitmap",
		asset: "_loading_circ_x",
		scale: 1,
		position: [-5, -5],
	},
	"_loading_circ_semi_x": {
		type: "bitmap",
		asset: "_loading_circ_semi_x",
		scale: 1,
		position: [-5, -5],
	},
	"_loading_circ_white_x": {
		type: "bitmap",
		asset: "_loading_circ_white_x",
		scale: 1,
		position: [-5, -5],
	},
	"_loading_white_x": {
		type: "bitmap",
		asset: "_loading_white_x",
		scale: 1,
		position: [-33.85, -33.85],
	},
	"_loading_k_x": {
		type: "bitmap",
		asset: "_loading_k_x",
		scale: 1,
		position: [-5, -5],
	},
	"_loading_r_x": {
		type: "bitmap",
		asset: "_loading_r_x",
		scale: 1,
		position: [-5, -5],
	},
	"_loading_o_black_x": {
		type: "bitmap",
		asset: "_loading_o_black_x",
		scale: 1,
		position: [-5, -5],
	},
	"_loading_w_x": {
		type: "bitmap",
		asset: "_loading_w_x",
		scale: 1,
		position: [-5, -5],
	},
	"_loading_t_x": {
		type: "bitmap",
		asset: "_loading_t_x",
		scale: 1,
		position: [-5, -5],
	},
	"_loading_e_x": {
		type: "bitmap",
		asset: "_loading_e_x",
		scale: 1,
		position: [-5, -5],
	},
	"_loading_n_black_x": {
		type: "bitmap",
		asset: "_loading_n_black_x",
		scale: 1,
		position: [-5, -5],
	},
	"_loading_n_white_x": {
		type: "bitmap",
		asset: "_loading_n_white_x",
		scale: 1,
		position: [-5, -5],
	},
	"_loading_o_white_x": {
		type: "bitmap",
		asset: "_loading_o_white_x",
		scale: 1,
		position: [-5, -5],
	},
	"_loading_a_x": {
		type: "bitmap",
		asset: "_loading_a_x",
		scale: 1,
		position: [-5, -5],
	},
	"_loading_c_x": {
		type: "bitmap",
		asset: "_loading_c_x",
		scale: 1,
		position: [-5, -5],
	},
	"_loading_diagonals_gfx": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "diagonal_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_loading_diagonal_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -155.9, ty: 0},
						transform: [-155.9, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "diagonal_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_loading_diagonal_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -103.95, ty: 0},
						transform: [-103.95, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "diagonal_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_loading_diagonal_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -51.95, ty: 0},
						transform: [-51.95, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "diagonal_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_loading_diagonal_x",
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
				name: "diagonal_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_loading_diagonal_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 52, ty: 0},
						transform: [52, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "diagonal_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_loading_diagonal_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 103.95, ty: 0},
						transform: [103.95, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "diagonal_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_loading_diagonal_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 155.95, ty: 0},
						transform: [155.95, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_loading_yellow_x": {
		type: "bitmap",
		asset: "_loading_yellow_x",
		scale: 1,
		position: [-55, -55],
	},
	"_loading_magenta_x": {
		type: "bitmap",
		asset: "_loading_magenta_x",
		scale: 1,
		position: [-55, -55],
	},
	"_loading_cyan_x": {
		type: "bitmap",
		asset: "_loading_cyan_x",
		scale: 1,
		position: [-55, -55],
	},
	"_loading_games_yellow_x": {
		type: "bitmap",
		asset: "_loading_games_yellow_x",
		scale: 1,
		position: [-5, -5],
	},
	"_loading_games_cyan_x": {
		type: "bitmap",
		asset: "_loading_games_cyan_x",
		scale: 1,
		position: [-5, -5],
	},
	"_loading_games_magenta_x": {
		type: "bitmap",
		asset: "_loading_games_magenta_x",
		scale: 1,
		position: [-5, -5],
	},
	"_loading_games_x": {
		type: "bitmap",
		asset: "_loading_games_x",
		scale: 1,
		position: [-5, -5],
	},
	"_loading_traingle_simple_x": {
		type: "bitmap",
		asset: "_loading_traingle_simple_x",
		scale: 1,
		position: [-32.4, -35.6],
	},
	"_loading_arrow,a": {
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
					},
				]
			},
		]
	},
	"_loading_triangle_colorines": {
		type: "movieclip",
		fps: 30,
		totalFrames: 6,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_loading_triangle_yellow_x",
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
						classname: "_loading_triangle_cyan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_loading_triangle_magenta_x",
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
	"_loading_circle_borde_yellow_x": {
		type: "bitmap",
		asset: "_loading_circle_borde_yellow_x",
		scale: 1,
		position: [-69.5, -69.5],
	},
	"_loading_circle_borde_cyan_x": {
		type: "bitmap",
		asset: "_loading_circle_borde_cyan_x",
		scale: 1,
		position: [-69.5, -69.5],
	},
	"_loading_circle_borde_magenta_x": {
		type: "bitmap",
		asset: "_loading_circle_borde_magenta_x",
		scale: 1,
		position: [-69.5, -69.5],
	},
	"_loading_diagonal_x": {
		type: "bitmap",
		asset: "_loading_diagonal_x",
		scale: 1,
		position: [-34.5, -45],
	},
	"_loading_triangle_yellow_x": {
		type: "bitmap",
		asset: "_loading_triangle_yellow_x",
		scale: 1,
		position: [-57.7, -63.85],
	},
	"_loading_triangle_cyan_x": {
		type: "bitmap",
		asset: "_loading_triangle_cyan_x",
		scale: 1,
		position: [-57.7, -63.85],
	},
	"_loading_triangle_magenta_x": {
		type: "bitmap",
		asset: "_loading_triangle_magenta_x",
		scale: 1,
		position: [-57.7, -63.85],
	},
};
