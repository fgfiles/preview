
var intro = {
	"intro_bg": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "tira",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_intro_tira",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0.05},
						transform: [0, 0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "tira",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_intro_tira",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: 0, ty: 600},
						transform: [0, 600, 1, 1, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "candle_3_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_intro_candle_3_x",
						instancename: "",
						matrix: {a: 0.641, b: 0, c: 0, d: 0.641, tx: 36.65, ty: 512.55},
						transform: [36.65, 512.55, 0.641, 0.641, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "candle_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_intro_candle_2_x",
						instancename: "",
						matrix: {a: 0.878, b: 0, c: 0, d: 0.878, tx: 764.3, ty: 505.05},
						transform: [764.3, 505.05, 0.878, 0.878, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flameall",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_intro_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: 0.517, b: 0, c: 0, d: 0.517, tx: 756.65, ty: 461.4},
						transform: [756.65, 461.4, 0.517, 0.517, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flameall",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_intro_mainmenu_flames_flameall",
						instancename: "",
						matrix: {a: -0.401, b: 0, c: 0, d: 0.401, tx: 35.55, ty: 479.35},
						transform: [35.55, 479.35, 0.401, 0.401, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_intro_tira": {
		type: "movieclip",
		fps: 30,
		totalFrames: 7,
		labels: {loop: {from:1, to:5}, },
		layers: [
			{
				name: "Layer 7",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_intro_gradient_x",
						instancename: "",
						matrix: {a: 0, b: 0.084, c: 10.917, d: 0, tx: -11.3, ty: 74.9},
						transform: [-11.3, 74.9, 0.084, 10.917, 1.571, 1.571, 1.571],
						alpha: 0.64,
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
						to: 6,
						classname: "_intro_black_x",
						instancename: "",
						matrix: {a: 18.659, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 18.659, 1, 0, 0, 0],
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
						to: 5,
						classname: "_intro_tira_huecos_gfx",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 473.45, ty: 37.1},
						transform: [473.45, 37.1, 1, 1, 0, 0, 0],
						alpha: 0.4,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_intro_tira_huecos_gfx",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 402.1, ty: 37.1},
						transform: [402.1, 37.1, 1, 1, 0, 0, 0],
						alpha: 0.4,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_intro_gradient_x",
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
				name: "Layer 6",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_intro_gradient_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 800, ty: 0},
						transform: [800, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 5,
					},
					{
						from: 6,
						to: 6,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_intro_candle_3_x": {
		type: "bitmap",
		asset: "_intro_candle_3_x",
		scale: 1,
		position: [-41.5, -60],
	},
	"_intro_candle_2_x": {
		type: "bitmap",
		asset: "_intro_candle_2_x",
		scale: 1,
		position: [-32, -56],
	},
	"_intro_mainmenu_flames_flameall": {
		type: "movieclip",
		fps: 30,
		totalFrames: 27,
		labels: {loop: {from:1, to:25}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_intro_flames_flameseq",
						instancename: "",
						matrix: {a: 0.799, b: 0, c: 0, d: 0.799, tx: -0.05, ty: -0.05},
						transform: [-0.05, -0.05, 0.799, 0.799, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.465, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 25,
						classname: "_intro_flames_flameseq",
						instancename: "",
						matrix: {a: 0.713, b: 0, c: 0, d: 0.971, tx: -0.05, ty: -0.35},
						transform: [-0.05, -0.35, 0.713, 0.971, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.465, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 26,
						classname: "_intro_flames_flameseq",
						instancename: "",
						matrix: {a: 0.799, b: 0, c: 0, d: 0.799, tx: -0.05, ty: -0.05},
						transform: [-0.05, -0.05, 0.799, 0.799, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "candle_light",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_intro_candle_light",
						instancename: "",
						matrix: {a: 0.947, b: 0, c: 0, d: 0.947, tx: -1.35, ty: 1.85},
						transform: [-1.35, 1.85, 0.947, 0.947, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 12,
						classname: "_intro_candle_light",
						instancename: "",
						matrix: {a: 1.003, b: 0, c: 0, d: 0.89, tx: -1.35, ty: 1.85},
						transform: [-1.35, 1.85, 1.003, 0.89, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 18,
						classname: "_intro_candle_light",
						instancename: "",
						matrix: {a: 0.896, b: 0, c: 0, d: 1.118, tx: -1.35, ty: 1.85},
						transform: [-1.35, 1.85, 0.896, 1.118, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 25,
						classname: "_intro_candle_light",
						instancename: "",
						matrix: {a: 1.099, b: 0, c: 0, d: 0.959, tx: -1.35, ty: 1.85},
						transform: [-1.35, 1.85, 1.099, 0.959, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 26,
						classname: "_intro_candle_light",
						instancename: "",
						matrix: {a: 0.947, b: 0, c: 0, d: 0.947, tx: -1.35, ty: 1.85},
						transform: [-1.35, 1.85, 0.947, 0.947, 0, 0, 0],
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
						actions: function(self){self.gotoAndPlay(Math.ceil(Math.random() * 20));},
					},
					{
						from: 1,
						to: 25,
					},
					{
						from: 26,
						to: 26,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_intro_gradient_x": {
		type: "bitmap",
		asset: "_intro_gradient_x",
		scale: 1,
		position: [-5, -5],
	},
	"_intro_black_x": {
		type: "bitmap",
		asset: "_intro_black_x",
		scale: 1,
		position: [-5, -5],
	},
	"_intro_tira_huecos_gfx": {
		type: "movieclip",
		fps: 30,
		totalFrames: 13,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_intro_tira_huecos_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.4,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.407, 0], [0.709, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_intro_tira_huecos_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.59,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.407, 0], [0.709, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 8,
						classname: "_intro_tira_huecos_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.31,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.407, 0], [0.709, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_intro_tira_huecos_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.48,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.407, 0], [0.709, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_intro_tira_huecos_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.4,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_intro_flames_flameseq": {
		type: "movieclip",
		fps: 30,
		totalFrames: 21,
		labels: {loop: {from:1, to:19}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_intro_flames_flame_1_x",
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
						classname: "_intro_flames_flame_2_x",
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
						classname: "_intro_flames_flame_3_x",
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
						classname: "_intro_flames_flame_4_x",
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
						classname: "_intro_flames_flame_5_x",
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
						classname: "_intro_flames_flame_6_x",
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
						classname: "_intro_flames_flame_7_x",
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
						classname: "_intro_flames_flame_8_x",
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
						classname: "_intro_flames_flame_9_x",
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
						classname: "_intro_flames_flame_10_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_intro_flames_flame_11_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_intro_flames_flame_12_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_intro_flames_flame_13_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_intro_flames_flame_14_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_intro_flames_flame_15_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 16,
						classname: "_intro_flames_flame_16_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 17,
						classname: "_intro_flames_flame_17_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 18,
						classname: "_intro_flames_flame_18_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 19,
						classname: "_intro_flames_flame_19_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 20,
						classname: "_intro_flames_flame_20_x",
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
						to: 0,
						actions: function(self){self.gotoAndPlay(Math.ceil(Math.random() * 15));},
					},
					{
						from: 1,
						to: 19,
					},
					{
						from: 20,
						to: 20,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_intro_candle_light": {
		type: "movieclip",
		fps: 30,
		totalFrames: 48,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_intro_candle_light_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.472, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 11,
						classname: "_intro_candle_light_1_x",
						instancename: "",
						matrix: {a: 1.085, b: 0, c: 0, d: 1.085, tx: 0, ty: 0},
						transform: [0, 0, 1.085, 1.085, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.472, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 18,
						classname: "_intro_candle_light_1_x",
						instancename: "",
						matrix: {a: 0.898, b: 0, c: 0, d: 0.898, tx: 0, ty: 0},
						transform: [0, 0, 0.898, 0.898, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.472, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 24,
						classname: "_intro_candle_light_1_x",
						instancename: "",
						matrix: {a: 1.001, b: 0, c: 0, d: 1.001, tx: 0, ty: 0},
						transform: [0, 0, 1.001, 1.001, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.472, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 28,
						classname: "_intro_candle_light_1_x",
						instancename: "",
						matrix: {a: 0.805, b: 0, c: 0, d: 0.805, tx: 0, ty: 0},
						transform: [0, 0, 0.805, 0.805, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.472, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 33,
						classname: "_intro_candle_light_1_x",
						instancename: "",
						matrix: {a: 1.018, b: 0, c: 0, d: 1.018, tx: 0, ty: 0},
						transform: [0, 0, 1.018, 1.018, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.472, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 39,
						classname: "_intro_candle_light_1_x",
						instancename: "",
						matrix: {a: 0.975, b: 0, c: 0, d: 0.975, tx: 0, ty: 0},
						transform: [0, 0, 0.975, 0.975, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.472, 1], [1, 1], ],
						}
					},
					{
						from: 40,
						to: 42,
						classname: "_intro_candle_light_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.472, 1], [1, 1], ],
						}
					},
					{
						from: 43,
						to: 46,
						classname: "_intro_candle_light_1_x",
						instancename: "",
						matrix: {a: 0.941, b: 0, c: 0, d: 0.941, tx: 0, ty: 0},
						transform: [0, 0, 0.941, 0.941, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.472, 1], [1, 1], ],
						}
					},
					{
						from: 47,
						to: 47,
						classname: "_intro_candle_light_1_x",
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
	"_intro_tira_huecos_x": {
		type: "bitmap",
		asset: "_intro_tira_huecos_x",
		scale: 1,
		position: [-476, -42.1],
	},
	"_intro_flames_flame_1_x": {
		type: "bitmap",
		asset: "_intro_flames_flame_1_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_intro_flames_flame_2_x": {
		type: "bitmap",
		asset: "_intro_flames_flame_2_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_intro_flames_flame_3_x": {
		type: "bitmap",
		asset: "_intro_flames_flame_3_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_intro_flames_flame_4_x": {
		type: "bitmap",
		asset: "_intro_flames_flame_4_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_intro_flames_flame_5_x": {
		type: "bitmap",
		asset: "_intro_flames_flame_5_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_intro_flames_flame_6_x": {
		type: "bitmap",
		asset: "_intro_flames_flame_6_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_intro_flames_flame_7_x": {
		type: "bitmap",
		asset: "_intro_flames_flame_7_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_intro_flames_flame_8_x": {
		type: "bitmap",
		asset: "_intro_flames_flame_8_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_intro_flames_flame_9_x": {
		type: "bitmap",
		asset: "_intro_flames_flame_9_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_intro_flames_flame_10_x": {
		type: "bitmap",
		asset: "_intro_flames_flame_10_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_intro_flames_flame_11_x": {
		type: "bitmap",
		asset: "_intro_flames_flame_11_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_intro_flames_flame_12_x": {
		type: "bitmap",
		asset: "_intro_flames_flame_12_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_intro_flames_flame_13_x": {
		type: "bitmap",
		asset: "_intro_flames_flame_13_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_intro_flames_flame_14_x": {
		type: "bitmap",
		asset: "_intro_flames_flame_14_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_intro_flames_flame_15_x": {
		type: "bitmap",
		asset: "_intro_flames_flame_15_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_intro_flames_flame_16_x": {
		type: "bitmap",
		asset: "_intro_flames_flame_16_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_intro_flames_flame_17_x": {
		type: "bitmap",
		asset: "_intro_flames_flame_17_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_intro_flames_flame_18_x": {
		type: "bitmap",
		asset: "_intro_flames_flame_18_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_intro_flames_flame_19_x": {
		type: "bitmap",
		asset: "_intro_flames_flame_19_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_intro_flames_flame_20_x": {
		type: "bitmap",
		asset: "_intro_flames_flame_20_x",
		scale: 1,
		position: [-31.05, -50.35],
	},
	"_intro_candle_light_1_x": {
		type: "bitmap",
		asset: "_intro_candle_light_1_x",
		scale: 1,
		position: [-28.9, -21.95],
	},
};
