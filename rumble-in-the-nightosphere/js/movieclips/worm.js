
var worm = {
	"wormbullet": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "bullet_rock_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_bullet_anima",
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
				name: "circle_physics",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_common_circle_physics",
						instancename: "",
						matrix: {a: 0.267, b: 0, c: 0, d: 0.267, tx: -0.15, ty: 0},
						transform: [-0.15, 0, 0.267, 0.267, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"worm": {
		type: "movieclip",
		fps: 30,
		totalFrames: 166,
		labels: {ground_idle: {from:0, to:9}, ground_run: {from:11, to:20}, ground_stop: {from:22, to:31}, ground_stopturn: {from:33, to:46}, ground_turn: {from:48, to:56}, ground_turn_fast: {from:58, to:71}, die: {from:73, to:83}, waiting: {from:85, to:94}, spawn: {from:96, to:115}, crash: {from:117, to:136}, attack: {from:138, to:150}, shoot: {from:152, to:164}, },
		layers: [
			{
				name: "physics",
				keys: [
					{
						from: 0,
						to: 165,
						classname: "_worm_common_body_physics",
						instancename: "physics",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "peppermint",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_worm_worm_ground_idle",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 21,
						classname: "_worm_worm_ground_run",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 47,
						classname: "_worm_worm_ground_stop",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 72,
						classname: "_worm_worm_ground_turn",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 73,
						to: 84,
						classname: "_worm_worm_crash",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 85,
						to: 95,
						classname: "_worm_worm_ground_waitiing",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 96,
						to: 116,
						classname: "_worm_worm_ground_spawn",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 117,
						to: 137,
						classname: "_worm_worm_crash",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 138,
						to: 151,
						classname: "_worm_worm_ground_shoot",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 152,
						to: 165,
						classname: "_worm_worm_ground_shoot",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 9,
					},
					{
						from: 10,
						to: 10,
						actions: function(self){self.stop();},
					},
					{
						from: 11,
						to: 20,
					},
					{
						from: 21,
						to: 21,
						actions: function(self){self.stop();},
					},
					{
						from: 22,
						to: 31,
					},
					{
						from: 32,
						to: 32,
						actions: function(self){self.stop();},
					},
					{
						from: 33,
						to: 46,
					},
					{
						from: 47,
						to: 47,
						actions: function(self){self.stop();},
					},
					{
						from: 48,
						to: 56,
					},
					{
						from: 57,
						to: 57,
						actions: function(self){self.stop();},
					},
					{
						from: 58,
						to: 71,
					},
					{
						from: 72,
						to: 72,
						actions: function(self){self.stop();},
					},
					{
						from: 73,
						to: 83,
					},
					{
						from: 84,
						to: 84,
						actions: function(self){self.stop();},
					},
					{
						from: 85,
						to: 94,
					},
					{
						from: 95,
						to: 95,
						actions: function(self){self.stop();},
					},
					{
						from: 96,
						to: 115,
					},
					{
						from: 116,
						to: 116,
						actions: function(self){self.stop();},
					},
					{
						from: 117,
						to: 136,
					},
					{
						from: 137,
						to: 137,
						actions: function(self){self.stop();},
					},
					{
						from: 138,
						to: 150,
					},
					{
						from: 151,
						to: 151,
						actions: function(self){self.stop();},
					},
					{
						from: 152,
						to: 164,
					},
					{
						from: 165,
						to: 165,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_worm_bullet_anima": {
		type: "movieclip",
		fps: 30,
		totalFrames: 13,
		labels: {},
		layers: [
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_worm_bullet_x",
						instancename: "",
						matrix: {a: 0.943, b: 0, c: 0, d: 1.058, tx: 0, ty: 0},
						transform: [0, 0, 0.943, 1.058, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.611, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 11,
						classname: "_worm_bullet_x",
						instancename: "",
						matrix: {a: 1.064, b: 0, c: 0, d: 0.938, tx: 0, ty: 0},
						transform: [0, 0, 1.064, 0.938, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.611, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_worm_bullet_x",
						instancename: "",
						matrix: {a: 0.943, b: 0, c: 0, d: 1.058, tx: 0, ty: 0},
						transform: [0, 0, 0.943, 1.058, 0, 0, 0],
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
						to: 12,
						classname: "_worm_satanicbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: 0, ty: 0},
						transform: [0, 0, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_worm_common_circle_physics": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Capa 1",
				keys: [
					{
						from: 0,
						to: 0,
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
				]
			},
		]
	},
	"_worm_common_body_physics": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "box_physics",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_common_box_physics",
						instancename: "",
						matrix: {a: 0.507, b: 0, c: 0, d: 0.141, tx: 0.15, ty: 15.65},
						transform: [0.15, 15.65, 0.507, 0.141, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "circle_physics",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_common_circle_physics",
						instancename: "",
						matrix: {a: 0.449, b: 0, c: 0, d: 0.449, tx: -1.25, ty: -7.15},
						transform: [-1.25, -7.15, 0.449, 0.449, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_worm_worm_ground_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 25,
		labels: {},
		layers: [
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.934, d: 0.357, tx: -15.65, ty: 13.75},
						transform: [-15.65, 13.75, 1, 1, -1.206, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 23,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.946, d: 0.326, tx: -15.5, ty: 14.05},
						transform: [-15.5, 14.05, 1, 1, -1.239, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.934, d: 0.357, tx: -15.65, ty: 13.75},
						transform: [-15.65, 13.75, 1, 1, -1.206, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.274, b: -0.962, c: -0.962, d: 0.274, tx: -24.15, ty: 15.1},
						transform: [-24.15, 15.1, 1, 1, -1.293, -1.849, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 23,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.274, b: -0.962, c: -0.968, d: 0.25, tx: -24.05, ty: 15.35},
						transform: [-24.05, 15.35, 1, 1, -1.318, -1.849, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.274, b: -0.962, c: -0.962, d: 0.274, tx: -24.15, ty: 15.1},
						transform: [-24.15, 15.1, 1, 1, -1.293, -1.849, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_back_x",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -22.25, ty: -33.15},
						transform: [-22.25, -33.15, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 23,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 1.107, b: -0.023, c: 0.02, d: 1, tx: -18.55, ty: -30.95},
						transform: [-18.55, -30.95, 1.107, 1, 0.02, -0.02, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -22.25, ty: -33.15},
						transform: [-22.25, -33.15, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body_1_x",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 0.5, ty: 6.2},
						transform: [0.5, 6.2, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 23,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 1.027, b: -0.061, c: 0.056, d: 0.946, tx: 0.5, ty: 7.7},
						transform: [0.5, 7.7, 1.029, 0.948, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 0.5, ty: 6.2},
						transform: [0.5, 6.2, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body_2_x",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -2.15, ty: -10.85},
						transform: [-2.15, -10.85, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 23,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 1.09, b: -0.008, c: 0.006, d: 0.908, tx: -1.2, ty: -8},
						transform: [-1.2, -8, 1.09, 0.908, 0.007, -0.007, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -2.15, ty: -10.85},
						transform: [-2.15, -10.85, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_middle_x",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -3, ty: -18.3},
						transform: [-3, -18.3, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 23,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 0.936, b: -0.019, c: 0.02, d: 1, tx: -3.75, ty: -15.35},
						transform: [-3.75, -15.35, 0.937, 1, 0.02, -0.02, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -3, ty: -18.3},
						transform: [-3, -18.3, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_front_x",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 23.15, ty: -31},
						transform: [23.15, -31, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 23,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 1.083, b: -0.022, c: 0.02, d: 1, tx: 18.95, ty: -27},
						transform: [18.95, -27, 1.083, 1, 0.02, -0.02, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 23.15, ty: -31},
						transform: [23.15, -31, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye1",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_worm_eye1",
						instancename: "",
						matrix: {a: 0.828, b: -0.049, c: 0.059, d: 0.998, tx: 27.15, ty: -29.85},
						transform: [27.15, -29.85, 0.829, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 23,
						classname: "_worm_eye1",
						instancename: "",
						matrix: {a: 1, b: -0.021, c: 0.021, d: 1, tx: 21.75, ty: -26.3},
						transform: [21.75, -26.3, 1, 1, 0.021, -0.021, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_worm_eye1",
						instancename: "",
						matrix: {a: 0.828, b: -0.049, c: 0.059, d: 0.998, tx: 27.15, ty: -29.85},
						transform: [27.15, -29.85, 0.829, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.873, d: 0.488, tx: 13.4, ty: 17.3},
						transform: [13.4, 17.3, 1, 1, 1.061, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 23,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.897, d: 0.444, tx: 13.1, ty: 17.75},
						transform: [13.1, 17.75, 1, 1.001, 1.111, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.873, d: 0.488, tx: 13.4, ty: 17.3},
						transform: [13.4, 17.3, 1, 1, 1.061, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.249, b: -0.969, c: 0.969, d: 0.249, tx: 25.05, ty: 14.15},
						transform: [25.05, 14.15, 1, 1, 1.32, -1.32, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 23,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.249, b: -0.969, c: 0.979, d: 0.209, tx: 24.9, ty: 14.55},
						transform: [24.9, 14.55, 1, 1.001, 1.361, -1.32, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.249, b: -0.969, c: 0.969, d: 0.249, tx: 25.05, ty: 14.15},
						transform: [25.05, 14.15, 1, 1, 1.32, -1.32, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mouth_idle",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_worm_mouth_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.7, ty: -28.6},
						transform: [-8.7, -28.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 23,
						classname: "_worm_mouth_idle",
						instancename: "",
						matrix: {a: 0.999, b: 0.039, c: -0.039, d: 0.999, tx: -11, ty: -25.95},
						transform: [-11, -25.95, 1, 1, -0.039, 0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_worm_mouth_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.7, ty: -28.6},
						transform: [-8.7, -28.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hittablebox",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_worm_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -5.15, ty: -29.75},
						transform: [-5.15, -29.75, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 23,
						classname: "_worm_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -4.65, ty: -25.1},
						transform: [-4.65, -25.1, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_worm_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -5.15, ty: -29.75},
						transform: [-5.15, -29.75, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "attackbox",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_worm_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.162, b: 0, c: 0, d: 0.333, tx: -35.3, ty: -9.1},
						transform: [-35.3, -9.1, 0.162, 0.333, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.556, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 23,
						classname: "_worm_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.162, b: 0, c: 0, d: 0.333, tx: -36.8, ty: -6.65},
						transform: [-36.8, -6.65, 0.162, 0.333, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.556, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_worm_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.162, b: 0, c: 0, d: 0.333, tx: -35.3, ty: -9.1},
						transform: [-35.3, -9.1, 0.162, 0.333, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.556, 0], [0.556, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_worm_worm_ground_run": {
		type: "movieclip",
		fps: 30,
		totalFrames: 33,
		labels: {},
		layers: [
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_worm_leg_walk",
						instancename: "",
						matrix: {a: -0.323, b: -0.946, c: 0.946, d: -0.323, tx: 24.1, ty: 16.4},
						transform: [24.1, 16.4, 1, 1, 1.9, -1.9, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 19,
						classname: "_worm_leg_walk",
						instancename: "",
						matrix: {a: 0.249, b: -0.969, c: 0.979, d: 0.209, tx: 23.05, ty: 15.2},
						transform: [23.05, 15.2, 1, 1.001, 1.361, -1.32, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.815, 0.664], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 27,
						classname: "_worm_leg_walk",
						instancename: "",
						matrix: {a: 0.249, b: -0.969, c: 0.969, d: 0.249, tx: 24.45, ty: 16},
						transform: [24.45, 16, 1, 1, 1.32, -1.32, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.26], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 31,
						classname: "_worm_leg_walk",
						instancename: "",
						matrix: {a: 0.249, b: -0.969, c: 0.969, d: 0.249, tx: 19.5, ty: 14.15},
						transform: [19.5, 14.15, 1, 1, 1.32, -1.32, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.856, 0.7], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_worm_leg_walk",
						instancename: "",
						matrix: {a: -0.323, b: -0.946, c: 0.946, d: -0.323, tx: 24.1, ty: 16.4},
						transform: [24.1, 16.4, 1, 1, 1.9, -1.9, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_worm_leg_walk",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.934, d: 0.357, tx: -15.65, ty: 13.75},
						transform: [-15.65, 13.75, 1, 1, -1.206, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 15,
						classname: "_worm_leg_walk",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.946, d: 0.326, tx: -9.05, ty: 15.1},
						transform: [-9.05, 15.1, 1, 1, -1.239, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.815, 0.664], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 23,
						classname: "_worm_leg_walk",
						instancename: "",
						matrix: {a: 0.486, b: -0.874, c: -0.874, d: -0.486, tx: -19.75, ty: 15.35},
						transform: [-19.75, 15.35, 1, 1, -2.078, -1.063, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.26], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 31,
						classname: "_worm_leg_walk",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.934, d: 0.357, tx: -12.95, ty: 13.75},
						transform: [-12.95, 13.75, 1, 1, -1.206, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.856, 0.7], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_worm_leg_walk",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.934, d: 0.357, tx: -15.65, ty: 13.75},
						transform: [-15.65, 13.75, 1, 1, -1.206, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "head_back_x",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -22.25, ty: -33.15},
						transform: [-22.25, -33.15, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 15,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 1.107, b: 0.001, c: -0.001, d: 1, tx: -13.4, ty: -39.65},
						transform: [-13.4, -39.65, 1.107, 1, -0.001, 0.001, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.815, 0.664], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 23,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -22.25, ty: -33.15},
						transform: [-22.25, -33.15, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.26], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 31,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 1.041, b: -0.177, c: 0.168, d: 0.986, tx: -26.85, ty: -35.7},
						transform: [-26.85, -35.7, 1.056, 1, 0.168, -0.168, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.856, 0.7], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -22.25, ty: -33.15},
						transform: [-22.25, -33.15, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body_1_x",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 0.5, ty: 6.2},
						transform: [0.5, 6.2, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 15,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.893, b: -0.053, c: 0.061, d: 1.035, tx: 0.6, ty: 4.4},
						transform: [0.6, 4.4, 0.894, 1.037, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.815, 0.664], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 23,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 0.5, ty: 6.2},
						transform: [0.5, 6.2, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.26], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 31,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.924, b: -0.055, c: 0.061, d: 1.032, tx: 0.45, ty: 5.6},
						transform: [0.45, 5.6, 0.926, 1.033, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.856, 0.7], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 0.5, ty: 6.2},
						transform: [0.5, 6.2, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body_2_x",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -2.15, ty: -10.85},
						transform: [-2.15, -10.85, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 15,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.883, b: -0.045, c: 0.053, d: 1.04, tx: -0.45, ty: -14.7},
						transform: [-0.45, -14.7, 0.884, 1.041, 0.05, -0.05, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.815, 0.664], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 23,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -2.15, ty: -10.85},
						transform: [-2.15, -10.85, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.26], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 31,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.854, b: -0.107, c: 0.142, d: 1.139, tx: -3, ty: -14.8},
						transform: [-3, -14.8, 0.86, 1.148, 0.124, -0.124, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.856, 0.7], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -2.15, ty: -10.85},
						transform: [-2.15, -10.85, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_worm_leg_walk",
						instancename: "",
						matrix: {a: 0.415, b: -0.91, c: -0.91, d: -0.415, tx: -21.9, ty: 14.65},
						transform: [-21.9, 14.65, 1, 1, -1.999, -1.143, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 15,
						classname: "_worm_leg_walk",
						instancename: "",
						matrix: {a: -0.274, b: -0.962, c: -0.968, d: 0.25, tx: -20.3, ty: 14.3},
						transform: [-20.3, 14.3, 1, 1, -1.318, -1.849, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.815, 0.664], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 23,
						classname: "_worm_leg_walk",
						instancename: "",
						matrix: {a: -0.274, b: -0.962, c: -0.962, d: 0.274, tx: -24.15, ty: 15.1},
						transform: [-24.15, 15.1, 1, 1, -1.293, -1.849, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.26], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 31,
						classname: "_worm_leg_walk",
						instancename: "",
						matrix: {a: -0.274, b: -0.962, c: -0.962, d: 0.274, tx: -20.65, ty: 15.95},
						transform: [-20.65, 15.95, 1, 1, -1.293, -1.849, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.856, 0.7], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_worm_leg_walk",
						instancename: "",
						matrix: {a: 0.415, b: -0.91, c: -0.91, d: -0.415, tx: -21.9, ty: 14.65},
						transform: [-21.9, 14.65, 1, 1, -1.999, -1.143, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "head_middle_x",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -3, ty: -18.3},
						transform: [-3, -18.3, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 15,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 0.937, b: 0.001, c: -0.001, d: 1, tx: 1.05, ty: -23.7},
						transform: [1.05, -23.7, 0.937, 1, -0.001, 0.001, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.815, 0.664], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 23,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -3, ty: -18.3},
						transform: [-3, -18.3, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.26], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 31,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 1.065, b: -0.181, c: 0.217, d: 0.977, tx: -4.15, ty: -23.25},
						transform: [-4.15, -23.25, 1.08, 1.001, 0.218, -0.168, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.856, 0.7], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -3, ty: -18.3},
						transform: [-3, -18.3, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "head_front_x",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 23.15, ty: -31},
						transform: [23.15, -31, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 15,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 1.083, b: 0.001, c: -0.001, d: 1, tx: 23.9, ty: -34.9},
						transform: [23.9, -34.9, 1.083, 1, -0.001, 0.001, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.815, 0.664], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 23,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 23.15, ty: -31},
						transform: [23.15, -31, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.26], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 31,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.893, b: -0.152, c: 0.168, d: 0.986, tx: 21.55, ty: -38.85},
						transform: [21.55, -38.85, 0.906, 1, 0.168, -0.168, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.856, 0.7], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 23.15, ty: -31},
						transform: [23.15, -31, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye1",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_worm_eye1",
						instancename: "",
						matrix: {a: 0.828, b: -0.049, c: 0.059, d: 0.998, tx: 27.15, ty: -29.85},
						transform: [27.15, -29.85, 0.829, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 15,
						classname: "_worm_eye1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 26.7, ty: -34.15},
						transform: [26.7, -34.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.815, 0.664], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 23,
						classname: "_worm_eye1",
						instancename: "",
						matrix: {a: 0.828, b: -0.049, c: 0.059, d: 0.998, tx: 27.15, ty: -29.85},
						transform: [27.15, -29.85, 0.829, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.26], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 31,
						classname: "_worm_eye1",
						instancename: "",
						matrix: {a: 0.669, b: -0.114, c: 0.168, d: 0.986, tx: 26.8, ty: -38.45},
						transform: [26.8, -38.45, 0.678, 1, 0.168, -0.168, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.856, 0.7], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_worm_eye1",
						instancename: "",
						matrix: {a: 0.828, b: -0.049, c: 0.059, d: 0.998, tx: 27.15, ty: -29.85},
						transform: [27.15, -29.85, 0.829, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_worm_leg_walk",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.873, d: 0.488, tx: 13.4, ty: 17.3},
						transform: [13.4, 17.3, 1, 1, 1.061, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 12,
						classname: "_worm_leg_walk",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.897, d: 0.444, tx: 18.05, ty: 16.3},
						transform: [18.05, 16.3, 1, 1.001, 1.111, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.815, 0.664], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 20,
						classname: "_worm_leg_walk",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.873, d: 0.488, tx: 13.2, ty: 15.6},
						transform: [13.2, 15.6, 1, 1, 1.061, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.26], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 31,
						classname: "_worm_leg_walk",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.873, d: 0.488, tx: 18.55, ty: 16.65},
						transform: [18.55, 16.65, 1, 1, 1.061, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.856, 0.7], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_worm_leg_walk",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.873, d: 0.488, tx: 13.4, ty: 17.3},
						transform: [13.4, 17.3, 1, 1, 1.061, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "mouth_idle",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_worm_mouth_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.7, ty: -28.6},
						transform: [-8.7, -28.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 15,
						classname: "_worm_mouth_idle",
						instancename: "",
						matrix: {a: 0.998, b: 0.06, c: -0.06, d: 0.998, tx: -6, ty: -34.5},
						transform: [-6, -34.5, 1, 1, -0.06, 0.06, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.815, 0.664], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 23,
						classname: "_worm_mouth_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.7, ty: -28.6},
						transform: [-8.7, -28.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.26], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 31,
						classname: "_worm_mouth_idle",
						instancename: "",
						matrix: {a: 0.994, b: -0.109, c: 0.109, d: 0.994, tx: -9.85, ty: -33},
						transform: [-9.85, -33, 1, 1, 0.109, -0.109, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.856, 0.7], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_worm_mouth_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.7, ty: -28.6},
						transform: [-8.7, -28.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "hittablebox",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_worm_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -2.45, ty: -33.95},
						transform: [-2.45, -33.95, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 8,
						to: 15,
						classname: "_worm_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: 1.2, ty: -38.75},
						transform: [1.2, -38.75, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 16,
						to: 23,
						classname: "_worm_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -2.45, ty: -33.95},
						transform: [-2.45, -33.95, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 24,
						to: 31,
						classname: "_worm_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -6.7, ty: -38.75},
						transform: [-6.7, -38.75, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_worm_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -2.45, ty: -33.95},
						transform: [-2.45, -33.95, 0.378, 0.2, 0, 0, 0],
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
						classname: "_worm_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: -23.25, ty: 22.25},
						transform: [-23.25, 22.25, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 12,
					},
					{
						from: 13,
						to: 13,
						classname: "_worm_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: 14.5, ty: 23.75},
						transform: [14.5, 23.75, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
					},
					{
						from: 19,
						to: 19,
						classname: "_worm_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: -22, ty: 21},
						transform: [-22, 21, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 28,
					},
					{
						from: 29,
						to: 29,
						classname: "_worm_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: 23, ty: 22.5},
						transform: [23, 22.5, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 30,
						to: 32,
					},
				]
			},
		]
	},
	"_worm_worm_ground_stop": {
		type: "movieclip",
		fps: 30,
		totalFrames: 11,
		labels: {},
		layers: [
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.323, b: -0.946, c: 0.946, d: -0.323, tx: 24.1, ty: 16.4},
						transform: [24.1, 16.4, 1, 1, 1.9, -1.9, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.249, b: -0.969, c: 1.032, d: 0.001, tx: 24.4, ty: 16.65},
						transform: [24.4, 16.65, 1, 1.032, 1.569, -1.32, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.249, b: -0.969, c: 0.951, d: 0.316, tx: 25.2, ty: 13.45},
						transform: [25.2, 13.45, 1, 1.002, 1.25, -1.32, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.249, b: -0.969, c: 0.969, d: 0.249, tx: 25.05, ty: 14.15},
						transform: [25.05, 14.15, 1, 1, 1.32, -1.32, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.934, d: 0.357, tx: -15.65, ty: 13.75},
						transform: [-15.65, 13.75, 1, 1, -1.206, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.934, d: 0.357, tx: -15.9, ty: 14.45},
						transform: [-15.9, 14.45, 1, 1, -1.206, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.934, d: 0.357, tx: -15.65, ty: 13.75},
						transform: [-15.65, 13.75, 1, 1, -1.206, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.934, d: 0.357, tx: -15.65, ty: 13.75},
						transform: [-15.65, 13.75, 1, 1, -1.206, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "head_back_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -22.25, ty: -33.15},
						transform: [-22.25, -33.15, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -22.25, ty: -31},
						transform: [-22.25, -31, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -22.05, ty: -35.9},
						transform: [-22.05, -35.9, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -22.25, ty: -33.15},
						transform: [-22.25, -33.15, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 0.5, ty: 6.2},
						transform: [0.5, 6.2, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 1.019, b: -0.131, c: 0.128, d: 0.992, tx: -0.8, ty: 7.3},
						transform: [-0.8, 7.3, 1.027, 1, 0.128, -0.128, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 0.5, ty: 6.2},
						transform: [0.5, 6.2, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 0.5, ty: 6.2},
						transform: [0.5, 6.2, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body_2_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -2.15, ty: -10.85},
						transform: [-2.15, -10.85, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 1.029, b: -0.061, c: 0.059, d: 0.998, tx: -2.15, ty: -9.05},
						transform: [-2.15, -9.05, 1.031, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.952, b: -0.057, c: 0.059, d: 0.998, tx: -2.15, ty: -12.2},
						transform: [-2.15, -12.2, 0.954, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -2.15, ty: -10.85},
						transform: [-2.15, -10.85, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.415, b: -0.91, c: -0.91, d: -0.415, tx: -21.9, ty: 14.65},
						transform: [-21.9, 14.65, 1, 1, -1.999, -1.143, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.274, b: -0.962, c: -0.944, d: 0.034, tx: -24.35, ty: 17.5},
						transform: [-24.35, 17.5, 1, 0.945, -1.535, -1.849, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.274, b: -0.962, c: -0.942, d: 0.341, tx: -24.3, ty: 14.4},
						transform: [-24.3, 14.4, 1, 1.002, -1.223, -1.849, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.274, b: -0.962, c: -0.962, d: 0.274, tx: -24.15, ty: 15.1},
						transform: [-24.15, 15.1, 1, 1, -1.293, -1.849, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "head_middle_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -3, ty: -18.3},
						transform: [-3, -18.3, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -3, ty: -16.15},
						transform: [-3, -16.15, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -2.8, ty: -21.05},
						transform: [-2.8, -21.05, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -3, ty: -18.3},
						transform: [-3, -18.3, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "head_front_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 23.15, ty: -31},
						transform: [23.15, -31, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 23.15, ty: -28.85},
						transform: [23.15, -28.85, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 23.35, ty: -33.75},
						transform: [23.35, -33.75, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 23.15, ty: -31},
						transform: [23.15, -31, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye1",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_worm_eye1",
						instancename: "",
						matrix: {a: 0.828, b: -0.049, c: 0.059, d: 0.998, tx: 27.15, ty: -29.85},
						transform: [27.15, -29.85, 0.829, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_worm_eye1",
						instancename: "",
						matrix: {a: 0.828, b: -0.049, c: 0.059, d: 0.998, tx: 27.15, ty: -27.7},
						transform: [27.15, -27.7, 0.829, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_worm_eye1",
						instancename: "",
						matrix: {a: 0.828, b: -0.049, c: 0.059, d: 0.998, tx: 27.35, ty: -32.6},
						transform: [27.35, -32.6, 0.829, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_worm_eye1",
						instancename: "",
						matrix: {a: 0.828, b: -0.049, c: 0.059, d: 0.998, tx: 27.15, ty: -29.85},
						transform: [27.15, -29.85, 0.829, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.873, d: 0.488, tx: 13.4, ty: 17.3},
						transform: [13.4, 17.3, 1, 1, 1.061, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.604, b: -0.797, c: 0.75, d: 0.434, tx: 13.6, ty: 19.05},
						transform: [13.6, 19.05, 1, 0.867, 1.046, -0.922, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.837, d: 0.553, tx: 13.75, ty: 16.6},
						transform: [13.75, 16.6, 1, 1.003, 0.987, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.873, d: 0.488, tx: 13.4, ty: 17.3},
						transform: [13.4, 17.3, 1, 1, 1.061, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "mouth_idle",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_worm_mouth_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.7, ty: -28.6},
						transform: [-8.7, -28.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_worm_mouth_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.7, ty: -26.45},
						transform: [-8.7, -26.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.159, 0.339], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_worm_mouth_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.5, ty: -31.35},
						transform: [-8.5, -31.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_worm_mouth_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.7, ty: -28.6},
						transform: [-8.7, -28.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "hittablebox",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_worm_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -2.45, ty: -33.95},
						transform: [-2.45, -33.95, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_worm_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -2.45, ty: -33.95},
						transform: [-2.45, -33.95, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 13",
				keys: [
					{
						from: 0,
						to: 9,
					},
					{
						from: 10,
						to: 10,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_worm_worm_ground_turn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 14,
		labels: {},
		layers: [
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.934, d: 0.357, tx: -15.65, ty: 13.75},
						transform: [-15.65, 13.75, 1, 1, -1.206, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.793, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.934, d: 0.357, tx: -20.3, ty: 11.5},
						transform: [-20.3, 11.5, 1, 1, -1.206, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.357, b: -0.934, c: 0.934, d: 0.357, tx: 19.8, ty: 11.9},
						transform: [19.8, 11.9, 1, 1, 1.206, -1.206, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.187, 0.356], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.357, b: -0.934, c: 0.934, d: 0.357, tx: 15.65, ty: 13.75},
						transform: [15.65, 13.75, 1, 1, 1.206, -1.206, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.274, b: -0.962, c: -0.962, d: 0.274, tx: -24.15, ty: 15.1},
						transform: [-24.15, 15.1, 1, 1, -1.293, -1.849, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.793, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.274, b: -0.962, c: -0.962, d: 0.274, tx: -23.55, ty: 15.55},
						transform: [-23.55, 15.55, 1, 1, -1.293, -1.849, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 8,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.459, b: -0.888, c: 0.888, d: -0.459, tx: 24.1, ty: 15.25},
						transform: [24.1, 15.25, 1, 1, 2.048, -2.048, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.187, 0.356], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 13,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.274, b: -0.962, c: 0.962, d: 0.274, tx: 24.15, ty: 15.1},
						transform: [24.15, 15.1, 1, 1, 1.293, -1.293, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_back_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -22.25, ty: -33.15},
						transform: [-22.25, -33.15, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.793, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 0.823, b: -0.049, c: 0.059, d: 0.998, tx: -26.35, ty: -35.75},
						transform: [-26.35, -35.75, 0.825, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: -0.823, b: -0.049, c: -0.059, d: 0.998, tx: 26.75, ty: -35.75},
						transform: [26.75, -35.75, 0.825, 1, -0.059, -3.082, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.187, 0.356], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: -0.998, b: -0.059, c: -0.059, d: 0.998, tx: 22.25, ty: -33.15},
						transform: [22.25, -33.15, 1, 1, -0.059, -3.082, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body_1_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 0.5, ty: 6.2},
						transform: [0.5, 6.2, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.793, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 0.5, ty: 6.2},
						transform: [0.5, 6.2, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: -0.998, b: -0.059, c: -0.059, d: 0.998, tx: 0.9, ty: 6.2},
						transform: [0.9, 6.2, 1, 1, -0.059, -3.082, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.187, 0.356], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: -0.998, b: -0.059, c: -0.059, d: 0.998, tx: -0.5, ty: 6.2},
						transform: [-0.5, 6.2, 1, 1, -0.059, -3.082, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body_2_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -2.15, ty: -10.85},
						transform: [-2.15, -10.85, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.793, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.957, b: -0.057, c: 0.059, d: 0.998, tx: 0.05, ty: -11.95},
						transform: [0.05, -11.95, 0.958, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: -0.957, b: -0.057, c: -0.059, d: 0.998, tx: 1.35, ty: -11.95},
						transform: [1.35, -11.95, 0.958, 1, -0.059, -3.082, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.187, 0.356], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: -0.998, b: -0.059, c: -0.059, d: 0.998, tx: 2.15, ty: -10.85},
						transform: [2.15, -10.85, 1, 1, -0.059, -3.082, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_middle_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -3, ty: -18.3},
						transform: [-3, -18.3, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.793, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 1.149, b: -0.068, c: 0.13, d: 0.994, tx: -2.3, ty: -20.6},
						transform: [-2.3, -20.6, 1.152, 1.002, 0.13, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: -1.149, b: -0.068, c: -0.13, d: 0.994, tx: 2.7, ty: -20.6},
						transform: [2.7, -20.6, 1.152, 1.002, -0.13, -3.082, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.187, 0.356], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: -0.998, b: -0.059, c: -0.059, d: 0.998, tx: 3, ty: -18.3},
						transform: [3, -18.3, 1, 1, -0.059, -3.082, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_front_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 23.15, ty: -31},
						transform: [23.15, -31, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.793, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.702, b: -0.042, c: 0.059, d: 0.998, tx: 27.2, ty: -34.6},
						transform: [27.2, -34.6, 0.703, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: -0.702, b: -0.042, c: -0.059, d: 0.998, tx: -26.8, ty: -34.6},
						transform: [-26.8, -34.6, 0.703, 1, -0.059, -3.082, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.187, 0.356], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: -0.998, b: -0.059, c: -0.059, d: 0.998, tx: -23.15, ty: -31},
						transform: [-23.15, -31, 1, 1, -0.059, -3.082, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye1",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_worm_eye1",
						instancename: "",
						matrix: {a: 0.828, b: -0.049, c: 0.059, d: 0.998, tx: 27.15, ty: -29.85},
						transform: [27.15, -29.85, 0.829, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.793, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_worm_eye1",
						instancename: "",
						matrix: {a: 0.279, b: -0.017, c: 0.059, d: 0.998, tx: 32.6, ty: -34.25},
						transform: [32.6, -34.25, 0.279, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_worm_eye1",
						instancename: "",
						matrix: {a: -0.279, b: -0.017, c: -0.059, d: 0.998, tx: -32.2, ty: -34.25},
						transform: [-32.2, -34.25, 0.279, 1, -0.059, -3.082, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.187, 0.356], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_worm_eye1",
						instancename: "",
						matrix: {a: -0.828, b: -0.049, c: -0.059, d: 0.998, tx: -27.15, ty: -29.85},
						transform: [-27.15, -29.85, 0.829, 1, -0.059, -3.082, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.873, d: 0.488, tx: 13.4, ty: 17.3},
						transform: [13.4, 17.3, 1, 1, 1.061, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.793, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.458, b: -0.889, c: 0.889, d: -0.458, tx: 17.65, ty: 17.2},
						transform: [17.65, 17.2, 1, 1, 2.047, -2.047, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 10,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.268, b: -0.963, c: -0.963, d: -0.268, tx: -18.15, ty: 17.15},
						transform: [-18.15, 17.15, 1, 1, -1.842, -1.3, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.187, 0.356], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.488, b: -0.873, c: -0.873, d: 0.488, tx: -13.4, ty: 17.3},
						transform: [-13.4, 17.3, 1, 1, -1.061, -2.08, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.249, b: -0.969, c: 0.969, d: 0.249, tx: 25.05, ty: 14.15},
						transform: [25.05, 14.15, 1, 1, 1.32, -1.32, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.793, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.249, b: -0.969, c: 0.546, d: 0.14, tx: 27.85, ty: 12.15},
						transform: [27.85, 12.15, 1, 0.563, 1.32, -1.32, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 9,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.581, b: -0.814, c: -0.458, d: -0.328, tx: -26.25, ty: 12.4},
						transform: [-26.25, 12.4, 1, 0.563, -2.191, -0.95, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.218, 0.284], [0.574, 0.701], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.401, b: -0.916, c: -0.808, d: -0.354, tx: -25.7, ty: 13.1},
						transform: [-25.7, 13.1, 1, 0.882, -1.984, -1.158, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.306, 0.582], [0.648, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.249, b: -0.969, c: -0.969, d: 0.249, tx: -25.05, ty: 14.15},
						transform: [-25.05, 14.15, 1, 1, -1.32, -1.822, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mouth_idle",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_worm_mouth_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.7, ty: -28.6},
						transform: [-8.7, -28.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.793, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_worm_mouth_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.45, ty: -30.95},
						transform: [-4.45, -30.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_worm_mouth_idle",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 4.85, ty: -30.95},
						transform: [4.85, -30.95, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.187, 0.356], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_worm_mouth_idle",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 8.7, ty: -28.6},
						transform: [8.7, -28.6, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hittablebox",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_worm_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -5.15, ty: -29.75},
						transform: [-5.15, -29.75, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_worm_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -2.2, ty: -29},
						transform: [-2.2, -29, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_worm_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: 0.7, ty: -28.25},
						transform: [0.7, -28.25, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_worm_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.41, b: 0, c: 0, d: 0.2, tx: 5.25, ty: -29.5},
						transform: [5.25, -29.5, 0.41, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Capa 2",
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
	"_worm_worm_crash": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "crash_part_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_crash_part_2",
						instancename: "crash_part_1",
						matrix: {a: 0.947, b: 0.262, c: -0.262, d: 0.947, tx: 5.65, ty: -9.1},
						transform: [5.65, -9.1, 0.982, 0.982, -0.27, 0.27, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "crash_part_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_crash_part_1",
						instancename: "crash_part_1",
						matrix: {a: 0.809, b: -0.557, c: 0.557, d: 0.809, tx: -4.9, ty: -13.2},
						transform: [-4.9, -13.2, 0.982, 0.982, 0.602, -0.602, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "crash_part_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_crash_part_2",
						instancename: "crash_part_1",
						matrix: {a: 0.86, b: 0.06, c: -0.06, d: 0.86, tx: 6.25, ty: 1},
						transform: [6.25, 1, 0.862, 0.862, -0.07, 0.07, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "crash_part_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_crash_part_1",
						instancename: "crash_part_1",
						matrix: {a: -0.609, b: 0.117, c: 0.126, d: 0.657, tx: -12.7, ty: -1.9},
						transform: [-12.7, -1.9, 0.62, 0.67, 0.19, 2.952, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "crash_part_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_crash_part_1",
						instancename: "crash_part_1",
						matrix: {a: -0.789, b: 0.452, c: 0.488, d: 0.852, tx: 6.85, ty: 11.4},
						transform: [6.85, 11.4, 0.909, 0.982, 0.52, 2.621, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "crash_part_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_crash_part_2",
						instancename: "crash_part_1",
						matrix: {a: -0.004, b: 0.909, c: 0.982, d: 0.005, tx: 2.15, ty: -9},
						transform: [2.15, -9, 0.909, 0.982, 1.566, 1.575, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "crash_part_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_crash_part_1",
						instancename: "crash_part_1",
						matrix: {a: 0.411, b: -0.615, c: -0.664, d: -0.444, tx: -3.75, ty: -11.8},
						transform: [-3.75, -11.8, 0.74, 0.799, -2.16, -0.982, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "crash_part_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_crash_part_2",
						instancename: "crash_part_1",
						matrix: {a: 0.789, b: 0.452, c: -0.488, d: 0.852, tx: -12.2, ty: 7.65},
						transform: [-12.2, 7.65, 0.909, 0.982, -0.52, 0.52, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "crash_part_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_crash_part_2",
						instancename: "crash_part_1",
						matrix: {a: 0.758, b: -0.034, c: -0.036, d: -0.819, tx: -1.55, ty: 4.4},
						transform: [-1.55, 4.4, 0.759, 0.82, -3.097, -0.044, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "worm_crash_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_worm_crash_2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.55, ty: -8.4},
						transform: [0.55, -8.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "worm_crash_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_worm_crash_1",
						instancename: "",
						matrix: {a: 0.792, b: 0, c: 0, d: 0.792, tx: 9.3, ty: -0.6},
						transform: [9.3, -0.6, 0.792, 0.792, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "worm_crash_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_worm_crash_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -12.55, ty: 0.4},
						transform: [-12.55, 0.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_worm_worm_ground_waitiing": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "body_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.146, c: 0.145, d: 0.989, tx: 0.5, ty: 9.45},
						transform: [0.5, 9.45, 1.005, 1, 0.146, -0.146, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.909, b: -0.054, c: 0.059, d: 0.998, tx: -0.3, ty: -8.15},
						transform: [-0.3, -8.15, 0.91, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_middle_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_head_sleep_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.2, ty: -19.7},
						transform: [0.2, -19.7, 1, 1, 0, 0, 0],
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
						to: 0,
						classname: "_worm_hair_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.3, ty: -35.35},
						transform: [0.3, -35.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_worm_worm_ground_spawn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 24,
		labels: {},
		layers: [
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 13,
						classname: "_worm_leg_grow",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.934, d: 0.357, tx: -15.65, ty: 13.75},
						transform: [-15.65, 13.75, 1, 1, -1.206, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.438], [0.622, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 22,
						classname: "_worm_leg_grow",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.934, d: 0.357, tx: -15.65, ty: 13.75},
						transform: [-15.65, 13.75, 1, 1, -1.206, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.934, d: 0.357, tx: -15.65, ty: 13.75},
						transform: [-15.65, 13.75, 1, 1, -1.206, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 13,
						classname: "_worm_leg_grow",
						instancename: "",
						matrix: {a: -0.274, b: -0.962, c: -0.962, d: 0.274, tx: -24.15, ty: 15.1},
						transform: [-24.15, 15.1, 1, 1, -1.293, -1.849, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.438], [0.622, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 22,
						classname: "_worm_leg_grow",
						instancename: "",
						matrix: {a: -0.274, b: -0.962, c: -0.962, d: 0.274, tx: -24.15, ty: 15.1},
						transform: [-24.15, 15.1, 1, 1, -1.293, -1.849, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.274, b: -0.962, c: -0.962, d: 0.274, tx: -24.15, ty: 15.1},
						transform: [-24.15, 15.1, 1, 1, -1.293, -1.849, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_back_x",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 13,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 0.577, b: 0.082, c: -0.115, d: 0.811, tx: -11.9, ty: -31.9},
						transform: [-11.9, -31.9, 0.583, 0.82, -0.141, 0.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.266, 0.26], [0.657, 0.579], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 16,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -21.2, ty: -33.8},
						transform: [-21.2, -33.8, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.215, 0.411], [0.611, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 22,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.057, c: 0.057, d: 0.998, tx: -25.3, ty: -33.65},
						transform: [-25.3, -33.65, 1, 1, 0.057, -0.057, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.423, 0], [0.545, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -22.25, ty: -33.15},
						transform: [-22.25, -33.15, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body_1_x",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.146, c: 0.145, d: 0.989, tx: 0.5, ty: 9.45},
						transform: [0.5, 9.45, 1.005, 1, 0.146, -0.146, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 8,
						to: 13,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.146, c: 0.156, d: 1.06, tx: 0.3, ty: 8.2},
						transform: [0.3, 8.2, 1.005, 1.071, 0.146, -0.146, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.438], [0.622, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 22,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 0.5, ty: 6.2},
						transform: [0.5, 6.2, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 0.5, ty: 6.2},
						transform: [0.5, 6.2, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body_2_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.909, b: -0.054, c: 0.059, d: 0.998, tx: -0.3, ty: -8.15},
						transform: [-0.3, -8.15, 0.91, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.788, b: -0.047, c: 0.059, d: 0.998, tx: -0.3, ty: -13.7},
						transform: [-0.3, -13.7, 0.789, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 13,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.908, b: -0.007, c: 0.007, d: 1.029, tx: 0.7, ty: -10.4},
						transform: [0.7, -10.4, 0.908, 1.029, 0.007, -0.007, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.438], [0.622, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 22,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.959, b: -0.057, c: 0.059, d: 0.998, tx: -1.3, ty: -11.25},
						transform: [-1.3, -11.25, 0.961, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -2.15, ty: -10.85},
						transform: [-2.15, -10.85, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_middle_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_worm_head_sleep_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.2, ty: -19.7},
						transform: [0.2, -19.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_worm_head_sleep_x",
						instancename: "",
						matrix: {a: 1.132, b: 0, c: 0, d: 1.156, tx: 0.2, ty: -25.35},
						transform: [0.2, -25.35, 1.132, 1.156, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 13,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 0.648, b: -0.081, c: 0.113, d: 0.908, tx: -0.05, ty: -18.2},
						transform: [-0.05, -18.2, 0.653, 0.915, 0.124, -0.124, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.266, 0.26], [0.657, 0.579], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 16,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -1.95, ty: -18.95},
						transform: [-1.95, -18.95, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.248, 0.339], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 22,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 1.106, b: -0.064, c: 0.112, d: 0.995, tx: -2.35, ty: -18.8},
						transform: [-2.35, -18.8, 1.108, 1.001, 0.112, -0.057, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0], [0.545, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -3, ty: -18.3},
						transform: [-3, -18.3, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_front_x",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 13,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.535, b: -0.033, c: 0.045, d: 0.78, tx: 14.2, ty: -30.8},
						transform: [14.2, -30.8, 0.536, 0.781, 0.057, -0.062, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.266, 0.26], [0.657, 0.579], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 16,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 24.2, ty: -31.65},
						transform: [24.2, -31.65, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.209, 0.48], [0.622, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 22,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.057, c: 0.057, d: 0.998, tx: 27.9, ty: -31.5},
						transform: [27.9, -31.5, 1, 1, 0.057, -0.057, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.423, 0], [0.545, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 23.15, ty: -31},
						transform: [23.15, -31, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye1",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 13,
						classname: "_worm_eye1_close_x",
						instancename: "",
						matrix: {a: 0.622, b: -0.038, c: 0.045, d: 0.78, tx: 17.2, ty: -29.9},
						transform: [17.2, -29.9, 0.623, 0.781, 0.057, -0.062, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.266, 0.26], [0.657, 0.579], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 16,
						classname: "_worm_eye_open2",
						instancename: "",
						matrix: {a: 0.828, b: -0.049, c: 0.059, d: 0.998, tx: 28.2, ty: -30.5},
						transform: [28.2, -30.5, 0.829, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.209, 0.48], [0.622, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 22,
						classname: "_worm_eye_open2",
						instancename: "",
						matrix: {a: 0.828, b: -0.048, c: 0.057, d: 0.998, tx: 32.6, ty: -30.3},
						transform: [32.6, -30.3, 0.829, 1, 0.057, -0.057, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.423, 0], [0.545, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_worm_eye1",
						instancename: "",
						matrix: {a: 0.828, b: -0.049, c: 0.059, d: 0.998, tx: 27.15, ty: -29.85},
						transform: [27.15, -29.85, 0.829, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 13,
						classname: "_worm_leg_grow",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.873, d: 0.488, tx: 13.4, ty: 17.3},
						transform: [13.4, 17.3, 1, 1, 1.061, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.438], [0.622, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 22,
						classname: "_worm_leg_grow",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.873, d: 0.488, tx: 13.4, ty: 17.3},
						transform: [13.4, 17.3, 1, 1, 1.061, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.873, d: 0.488, tx: 13.4, ty: 17.3},
						transform: [13.4, 17.3, 1, 1, 1.061, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 13,
						classname: "_worm_leg_grow",
						instancename: "",
						matrix: {a: 0.249, b: -0.969, c: 0.969, d: 0.249, tx: 25.05, ty: 14.15},
						transform: [25.05, 14.15, 1, 1, 1.32, -1.32, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.438], [0.622, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 22,
						classname: "_worm_leg_grow",
						instancename: "",
						matrix: {a: 0.249, b: -0.969, c: 0.969, d: 0.249, tx: 25.05, ty: 14.15},
						transform: [25.05, 14.15, 1, 1, 1.32, -1.32, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.249, b: -0.969, c: 0.969, d: 0.249, tx: 25.05, ty: 14.15},
						transform: [25.05, 14.15, 1, 1, 1.32, -1.32, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mouth_idle",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 10,
						classname: "_worm_mouth_1_x",
						instancename: "",
						matrix: {a: 0.554, b: -0.08, c: 0.08, d: 0.554, tx: -6.15, ty: -27.75},
						transform: [-6.15, -27.75, 0.559, 0.559, 0.144, -0.144, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.268, 0.347], [0.618, 0.758], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_worm_mouth_1_x",
						instancename: "",
						matrix: {a: 0.923, b: -0.021, c: 0.021, d: 0.923, tx: -7.3, ty: -28.95},
						transform: [-7.3, -28.95, 0.924, 0.924, 0.023, -0.023, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.324, 0.514], [0.66, 0.877], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_worm_mouth_1_x",
						instancename: "",
						matrix: {a: 0.535, b: 0, c: 0, d: 0.535, tx: -7.7, ty: -29.3},
						transform: [-7.7, -29.3, 0.535, 0.535, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.657], [0.666, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 22,
						classname: "_worm_mouth_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -7.9, ty: -29.1},
						transform: [-7.9, -29.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_worm_mouth_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.7, ty: -28.6},
						transform: [-8.7, -28.6, 1, 1, 0, 0, 0],
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
					},
					{
						from: 14,
						to: 22,
						classname: "_worm_baba_1_x",
						instancename: "",
						matrix: {a: 0.889, b: 0, c: 0, d: 0.216, tx: -7.35, ty: -27.2},
						transform: [-7.35, -27.2, 0.889, 0.216, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.611, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_worm_baba_1_x",
						instancename: "",
						matrix: {a: 0.889, b: 0, c: 0, d: 0.774, tx: -8, ty: -26.05},
						transform: [-8, -26.05, 0.889, 0.774, 0, 0, 0],
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
						classname: "_worm_hair_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.3, ty: -35.35},
						transform: [0.3, -35.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_worm_hair_x",
						instancename: "",
						matrix: {a: 0.674, b: 0, c: 0, d: 1, tx: 0.3, ty: -43.95},
						transform: [0.3, -43.95, 0.674, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 23,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 23,
						classname: "_worm_common_fx_spawn",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 26.65},
						transform: [0, 26.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Capa 3",
				keys: [
					{
						from: 0,
						to: 22,
					},
					{
						from: 23,
						to: 23,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_worm_worm_ground_shoot": {
		type: "movieclip",
		fps: 30,
		totalFrames: 36,
		labels: {},
		layers: [
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.934, d: 0.357, tx: -15.65, ty: 13.75},
						transform: [-15.65, 13.75, 1, 1, -1.206, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.946, d: 0.326, tx: -15.5, ty: 14.05},
						transform: [-15.5, 14.05, 1, 1, -1.239, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.768, 0.616], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 22,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.934, d: 0.357, tx: -15.65, ty: 13.75},
						transform: [-15.65, 13.75, 1, 1, -1.206, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.445], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 28,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.934, d: 0.357, tx: -15.65, ty: 13.75},
						transform: [-15.65, 13.75, 1, 1, -1.206, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 34,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.934, d: 0.357, tx: -15.65, ty: 13.75},
						transform: [-15.65, 13.75, 1, 1, -1.206, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.357, b: -0.934, c: -0.934, d: 0.357, tx: -15.65, ty: 13.75},
						transform: [-15.65, 13.75, 1, 1, -1.206, -1.936, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.274, b: -0.962, c: -0.962, d: 0.274, tx: -24.15, ty: 15.1},
						transform: [-24.15, 15.1, 1, 1, -1.293, -1.849, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.31, b: -0.951, c: -0.943, d: -0.334, tx: -24.1, ty: 9.55},
						transform: [-24.1, 9.55, 1, 1, -1.911, -1.255, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.768, 0.616], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 22,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.274, b: -0.962, c: -0.962, d: 0.274, tx: -24.15, ty: 15.1},
						transform: [-24.15, 15.1, 1, 1, -1.293, -1.849, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.445], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 28,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.227, b: -0.795, c: -0.914, d: 0.261, tx: -24.25, ty: 16.5},
						transform: [-24.25, 16.5, 0.826, 0.951, -1.293, -1.849, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 34,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.274, b: -0.962, c: -0.962, d: 0.274, tx: -24.15, ty: 15.1},
						transform: [-24.15, 15.1, 1, 1, -1.293, -1.849, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: -0.274, b: -0.962, c: -0.962, d: 0.274, tx: -24.15, ty: 15.1},
						transform: [-24.15, 15.1, 1, 1, -1.293, -1.849, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_back_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -22.25, ty: -33.15},
						transform: [-22.25, -33.15, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 0.89, b: 0.659, c: -0.595, d: 0.804, tx: 13.6, ty: -35.5},
						transform: [13.6, -35.5, 1.107, 1, -0.637, 0.637, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.768, 0.616], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 22,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 0.992, b: 0.127, c: -0.127, d: 0.992, tx: -19.2, ty: -36.85},
						transform: [-19.2, -36.85, 1, 1, -0.128, 0.128, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.445], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 28,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 0.949, b: -0.315, c: 0.315, d: 0.949, tx: -39.85, ty: -23.3},
						transform: [-39.85, -23.3, 1, 1, 0.32, -0.32, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 34,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 1, b: -0.02, c: 0.02, d: 1, tx: -20.7, ty: -34.6},
						transform: [-20.7, -34.6, 1, 1, 0.02, -0.02, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_worm_head_back_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -22.25, ty: -33.15},
						transform: [-22.25, -33.15, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body_1_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 0.5, ty: 6.2},
						transform: [0.5, 6.2, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.992, b: 0.023, c: -0.022, d: 0.947, tx: 1.5, ty: 7.7},
						transform: [1.5, 7.7, 0.992, 0.948, -0.023, 0.023, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.768, 0.616], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 22,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 0.5, ty: 6.2},
						transform: [0.5, 6.2, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.445], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 28,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.987, b: -0.16, c: 0.16, d: 0.987, tx: -1.6, ty: 6.95},
						transform: [-1.6, 6.95, 1, 1, 0.161, -0.161, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 34,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.042, c: 0.042, d: 0.999, tx: 0.5, ty: 6.25},
						transform: [0.5, 6.25, 1, 1, 0.042, -0.042, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_worm_body_1_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 0.5, ty: 6.2},
						transform: [0.5, 6.2, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body_2_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -2.15, ty: -10.85},
						transform: [-2.15, -10.85, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.897, b: 0.233, c: -0.257, d: 0.989, tx: 10.2, ty: -7.4},
						transform: [10.2, -7.4, 0.927, 1.021, -0.254, 0.254, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.768, 0.616], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 22,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -2.15, ty: -10.85},
						transform: [-2.15, -10.85, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.445], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 28,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.869, b: -0.167, c: 0.189, d: 0.982, tx: -9.8, ty: -8.4},
						transform: [-9.8, -8.4, 0.885, 1, 0.19, -0.19, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 34,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.977, b: -0.041, c: 0.043, d: 1.034, tx: -1.2, ty: -11.1},
						transform: [-1.2, -11.1, 0.978, 1.035, 0.042, -0.042, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_worm_body_2_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -2.15, ty: -10.85},
						transform: [-2.15, -10.85, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_middle_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -3, ty: -18.3},
						transform: [-3, -18.3, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 0.753, b: 0.557, c: -0.595, d: 0.804, tx: 15.65, ty: -14.1},
						transform: [15.65, -14.1, 0.937, 1, -0.637, 0.637, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.768, 0.616], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 22,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 0.992, b: 0.127, c: -0.127, d: 0.992, tx: -3, ty: -18.65},
						transform: [-3, -18.65, 1, 1, -0.128, 0.128, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.445], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 28,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 1.012, b: -0.335, c: 0.315, d: 0.949, tx: -15.55, ty: -14.45},
						transform: [-15.55, -14.45, 1.066, 1, 0.32, -0.32, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 34,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 1, b: -0.02, c: 0.02, d: 1, tx: -2, ty: -19},
						transform: [-2, -19, 1, 1, 0.02, -0.02, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_worm_head_middle_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -3, ty: -18.3},
						transform: [-3, -18.3, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_front_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 23.15, ty: -31},
						transform: [23.15, -31, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.87, b: 0.644, c: -0.595, d: 0.804, tx: 40.7, ty: -9.5},
						transform: [40.7, -9.5, 1.083, 1, -0.637, 0.637, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.768, 0.616], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 22,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.992, b: 0.127, c: -0.127, d: 0.992, tx: 25, ty: -26.3},
						transform: [25, -26.3, 1, 1, -0.128, 0.128, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.445], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 28,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.949, b: -0.315, c: 0.315, d: 0.949, tx: 8, ty: -34.9},
						transform: [8, -34.9, 1, 1, 0.32, -0.32, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 34,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 1, b: -0.02, c: 0.02, d: 1, tx: 24.5, ty: -30.7},
						transform: [24.5, -30.7, 1, 1, 0.02, -0.02, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_worm_head_front_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 23.15, ty: -31},
						transform: [23.15, -31, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye1",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_worm_eye1_attack",
						instancename: "",
						matrix: {a: 0.828, b: -0.049, c: 0.059, d: 0.998, tx: 27.15, ty: -29.85},
						transform: [27.15, -29.85, 0.829, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_worm_eye1_attack",
						instancename: "",
						matrix: {a: 0.804, b: 0.594, c: -0.594, d: 0.804, tx: 42.55, ty: -7.2},
						transform: [42.55, -7.2, 1, 1, -0.637, 0.637, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.359, 0], [0.706, 0.461], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_worm_eye1_attack",
						instancename: "",
						matrix: {a: 0.108, b: 0.057, c: -0.465, d: 0.884, tx: 34.5, ty: -16.6},
						transform: [34.5, -16.6, 0.122, 0.999, -0.484, 0.484, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.385, 0.336], [0.725, 0.704], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 22,
						classname: "_worm_eye1_close_x",
						instancename: "",
						matrix: {a: 0.823, b: 0.105, c: -0.127, d: 0.992, tx: 28.7, ty: -24.4},
						transform: [28.7, -24.4, 0.829, 1, -0.128, 0.128, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.445], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 28,
						classname: "_worm_eye_open",
						instancename: "",
						matrix: {a: 0.787, b: -0.261, c: 0.315, d: 0.949, tx: 12.15, ty: -34.8},
						transform: [12.15, -34.8, 0.829, 1, 0.32, -0.32, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 34,
						classname: "_worm_eye_open",
						instancename: "",
						matrix: {a: 0.829, b: -0.017, c: 0.02, d: 1, tx: 28.45, ty: -29.4},
						transform: [28.45, -29.4, 0.829, 1, 0.02, -0.02, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_worm_eye_open",
						instancename: "",
						matrix: {a: 0.828, b: -0.049, c: 0.059, d: 0.998, tx: 27.15, ty: -29.85},
						transform: [27.15, -29.85, 0.829, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.873, d: 0.488, tx: 13.4, ty: 17.3},
						transform: [13.4, 17.3, 1, 1, 1.061, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.897, d: 0.444, tx: 13.1, ty: 17.75},
						transform: [13.1, 17.75, 1, 1.001, 1.111, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.768, 0.616], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 22,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.873, d: 0.488, tx: 13.4, ty: 17.3},
						transform: [13.4, 17.3, 1, 1, 1.061, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.445], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 28,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.867, d: 0.362, tx: 13.4, ty: 18.6},
						transform: [13.4, 18.6, 1, 0.94, 1.176, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 34,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.873, d: 0.488, tx: 13.4, ty: 17.3},
						transform: [13.4, 17.3, 1, 1, 1.061, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.488, b: -0.873, c: 0.873, d: 0.488, tx: 13.4, ty: 17.3},
						transform: [13.4, 17.3, 1, 1, 1.061, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_idle",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.249, b: -0.969, c: 0.969, d: 0.249, tx: 25.05, ty: 14.15},
						transform: [25.05, 14.15, 1, 1, 1.32, -1.32, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.249, b: -0.969, c: 0.979, d: 0.209, tx: 24.9, ty: 14.55},
						transform: [24.9, 14.55, 1, 1.001, 1.361, -1.32, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.768, 0.616], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 22,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.249, b: -0.969, c: 0.969, d: 0.249, tx: 25.05, ty: 14.15},
						transform: [25.05, 14.15, 1, 1, 1.32, -1.32, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.445], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 28,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.249, b: -0.969, c: 1.027, d: 0.221, tx: 24.4, ty: 14.4},
						transform: [24.4, 14.4, 1, 1.05, 1.359, -1.32, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 34,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.249, b: -0.969, c: 0.969, d: 0.249, tx: 25.05, ty: 14.15},
						transform: [25.05, 14.15, 1, 1, 1.32, -1.32, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_worm_leg_idle",
						instancename: "",
						matrix: {a: 0.249, b: -0.969, c: 0.969, d: 0.249, tx: 25.05, ty: 14.15},
						transform: [25.05, 14.15, 1, 1, 1.32, -1.32, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mouth_idle",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_worm_mouth2",
						instancename: "",
						matrix: {a: 0.616, b: 0, c: 0, d: 0.616, tx: -9.75, ty: -28.65},
						transform: [-9.75, -28.65, 0.616, 0.616, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_worm_mouth_1_x",
						instancename: "",
						matrix: {a: 0.767, b: 0.642, c: -0.642, d: 0.767, tx: 16.45, ty: -26.95},
						transform: [16.45, -26.95, 1, 1, -0.697, 0.697, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.366, 0], [0.716, 0.489], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_worm_mouth_1_x",
						instancename: "",
						matrix: {a: 1.04, b: 0.294, c: -0.294, d: 1.04, tx: 0.9, ty: -29},
						transform: [0.9, -29, 1.081, 1.081, -0.276, 0.276, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.377, 0.347], [0.715, 0.702], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 22,
						classname: "_worm_mouth_2_x",
						instancename: "",
						matrix: {a: 0.983, b: 0.186, c: -0.186, d: 0.983, tx: -6.95, ty: -29.7},
						transform: [-6.95, -29.7, 1, 1, -0.187, 0.187, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.445], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 28,
						classname: "_worm_mouth_2_x",
						instancename: "",
						matrix: {a: 0.564, b: -0.151, c: 0.151, d: 0.564, tx: -24.1, ty: -22.75},
						transform: [-24.1, -22.75, 0.584, 0.584, 0.261, -0.261, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 34,
						classname: "_worm_mouth_2_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.039, c: -0.039, d: 0.999, tx: -7.3, ty: -29.25},
						transform: [-7.3, -29.25, 1, 1, -0.039, 0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_worm_mouth_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.7, ty: -28.6},
						transform: [-8.7, -28.6, 1, 1, 0, 0, 0],
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
						to: 18,
					},
					{
						from: 19,
						to: 28,
					},
					{
						from: 29,
						to: 34,
						classname: "_worm_baba_1_x",
						instancename: "",
						matrix: {a: 0.889, b: 0.005, c: -0.001, d: 0.108, tx: -6.55, ty: -27.5},
						transform: [-6.55, -27.5, 0.889, 0.108, -0.006, 0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_worm_baba_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.795, tx: -8, ty: -26.25},
						transform: [-8, -26.25, 1, 0.795, 0, 0, 0],
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
						to: 18,
					},
					{
						from: 19,
						to: 19,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.78, b: 0.626, c: -0.626, d: 0.78, tx: -16.35, ty: -37.85},
						transform: [-16.35, -37.85, 1, 1, -0.676, 0.676, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 20,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.798, b: 0.5, c: -0.5, d: 0.798, tx: -21.05, ty: -46.2},
						transform: [-21.05, -46.2, 0.941, 0.941, -0.56, 0.56, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 21,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.798, b: 0.382, c: -0.382, d: 0.798, tx: -25.75, ty: -51.75},
						transform: [-25.75, -51.75, 0.885, 0.885, -0.446, 0.446, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 22,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.782, b: 0.27, c: -0.27, d: 0.782, tx: -30.35, ty: -55.45},
						transform: [-30.35, -55.45, 0.828, 0.828, -0.332, 0.332, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 23,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.753, b: 0.167, c: -0.167, d: 0.753, tx: -35, ty: -57.6},
						transform: [-35, -57.6, 0.771, 0.771, -0.219, 0.219, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 24,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.71, b: 0.075, c: -0.075, d: 0.71, tx: -39.65, ty: -58.15},
						transform: [-39.65, -58.15, 0.714, 0.714, -0.105, 0.105, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 25,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.603, b: -0.098, c: 0.098, d: 0.603, tx: -44.25, ty: -57.65},
						transform: [-44.25, -57.65, 0.611, 0.611, 0.162, -0.162, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 26,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.461, b: -0.211, c: 0.211, d: 0.461, tx: -48.85, ty: -55.85},
						transform: [-48.85, -55.85, 0.507, 0.507, 0.429, -0.429, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 27,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.309, b: -0.26, c: 0.26, d: 0.309, tx: -53.45, ty: -52.6},
						transform: [-53.45, -52.6, 0.403, 0.403, 0.7, -0.7, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 28,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.17, b: -0.247, c: 0.247, d: 0.17, tx: -58.05, ty: -47.35},
						transform: [-58.05, -47.35, 0.3, 0.3, 0.967, -0.967, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 29,
						to: 29,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.065, b: -0.186, c: 0.186, d: 0.065, tx: -62.7, ty: -39.55},
						transform: [-62.7, -39.55, 0.197, 0.197, 1.235, -1.235, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 30,
						to: 35,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 19,
					},
					{
						from: 20,
						to: 20,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 1.22, b: 0.284, c: -0.544, d: 1.34, tx: -36.65, ty: -43.1},
						transform: [-36.65, -43.1, 1.253, 1.446, -0.385, 0.229, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 21,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 1.2, b: 0.12, c: -0.376, d: 1.284, tx: -45.55, ty: -50.45},
						transform: [-45.55, -50.45, 1.206, 1.338, -0.285, 0.1, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 22,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 1.16, b: -0.025, c: -0.223, d: 1.211, tx: -53.55, ty: -54.3},
						transform: [-53.55, -54.3, 1.161, 1.232, -0.182, -0.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 23,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 1.103, b: -0.152, c: -0.083, d: 1.124, tx: -60.75, ty: -56},
						transform: [-60.75, -56, 1.113, 1.127, -0.074, -0.137, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 24,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 1.029, b: -0.26, c: 0.039, d: 1.024, tx: -67.5, ty: -55.7},
						transform: [-67.5, -55.7, 1.061, 1.024, 0.038, -0.247, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 25,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.943, b: -0.346, c: 0.144, d: 0.915, tx: -73.65, ty: -53.6},
						transform: [-73.65, -53.6, 1.005, 0.926, 0.156, -0.352, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 26,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.745, b: -0.492, c: 0.332, d: 0.676, tx: -79.4, ty: -50.1},
						transform: [-79.4, -50.1, 0.893, 0.753, 0.456, -0.583, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 27,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.524, b: -0.542, c: 0.429, d: 0.434, tx: -84.8, ty: -45.1},
						transform: [-84.8, -45.1, 0.754, 0.61, 0.779, -0.802, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 28,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.311, b: -0.508, c: 0.44, d: 0.217, tx: -89.65, ty: -38.25},
						transform: [-89.65, -38.25, 0.596, 0.491, 1.112, -1.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 29,
						to: 29,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.136, b: -0.407, c: 0.377, d: 0.056, tx: -93.8, ty: -28.95},
						transform: [-93.8, -28.95, 0.43, 0.381, 1.423, -1.248, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 30,
						to: 30,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.021, b: -0.268, c: 0.263, d: -0.035, tx: -97.15, ty: -16.6},
						transform: [-97.15, -16.6, 0.269, 0.265, 1.704, -1.493, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 31,
						to: 35,
					},
				]
			},
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 18,
					},
					{
						from: 19,
						to: 19,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.727, b: 0.205, c: -0.205, d: 0.727, tx: -16.45, ty: -32.05},
						transform: [-16.45, -32.05, 0.755, 0.755, -0.276, 0.276, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 20,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.744, b: 0.125, c: -0.125, d: 0.744, tx: -21.55, ty: -33.9},
						transform: [-21.55, -33.9, 0.755, 0.755, -0.167, 0.167, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 21,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.754, b: 0.047, c: -0.047, d: 0.754, tx: -26.55, ty: -35.1},
						transform: [-26.55, -35.1, 0.755, 0.755, -0.062, 0.062, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 22,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.754, b: -0.03, c: 0.03, d: 0.754, tx: -31.55, ty: -36},
						transform: [-31.55, -36, 0.755, 0.755, 0.04, -0.04, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 23,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.747, b: -0.109, c: 0.109, d: 0.747, tx: -36.55, ty: -36.5},
						transform: [-36.55, -36.5, 0.755, 0.755, 0.145, -0.145, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 24,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.731, b: -0.188, c: 0.188, d: 0.731, tx: -41.55, ty: -36.65},
						transform: [-41.55, -36.65, 0.755, 0.755, 0.252, -0.252, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 25,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.555, b: -0.281, c: 0.281, d: 0.555, tx: -46.5, ty: -35.75},
						transform: [-46.5, -35.75, 0.622, 0.622, 0.469, -0.469, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 26,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.377, b: -0.312, c: 0.312, d: 0.377, tx: -51.45, ty: -32.7},
						transform: [-51.45, -32.7, 0.489, 0.489, 0.691, -0.691, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 27,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.219, b: -0.282, c: 0.282, d: 0.219, tx: -56.35, ty: -27.7},
						transform: [-56.35, -27.7, 0.357, 0.357, 0.91, -0.91, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 28,
						classname: "_worm_spitx_x",
						instancename: "",
						matrix: {a: 0.096, b: -0.203, c: 0.203, d: 0.096, tx: -61.35, ty: -20.75},
						transform: [-61.35, -20.75, 0.225, 0.225, 1.129, -1.129, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 29,
						to: 35,
					},
				]
			},
			{
				name: "hittablebox",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_worm_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -5.15, ty: -29.75},
						transform: [-5.15, -29.75, 0.378, 0.2, 0, 0, 0],
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
						classname: "_worm_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.344, b: 0, c: 0, d: 0.166, tx: 14.55, ty: -30.7},
						transform: [14.55, -30.7, 0.344, 0.166, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 22,
					},
					{
						from: 23,
						to: 28,
						classname: "_worm_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -18.2, ty: -29.75},
						transform: [-18.2, -29.75, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 34,
						classname: "_worm_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -1.5, ty: -34.4},
						transform: [-1.5, -34.4, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_worm_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -5.15, ty: -29.75},
						transform: [-5.15, -29.75, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Capa 2",
				keys: [
					{
						from: 0,
						to: 18,
					},
					{
						from: 19,
						to: 19,
						classname: "_worm_common_shoot_box",
						instancename: "shootbox",
						matrix: {a: 0.141, b: 0, c: 0, d: 0.141, tx: -23.6, ty: -38.95},
						transform: [-23.6, -38.95, 0.141, 0.141, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 20,
					},
					{
						from: 21,
						to: 21,
						classname: "_worm_common_shoot_box",
						instancename: "shootbox",
						matrix: {a: 0.141, b: 0, c: 0, d: 0.141, tx: -23.6, ty: -38.95},
						transform: [-23.6, -38.95, 0.141, 0.141, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 22,
					},
					{
						from: 23,
						to: 23,
						classname: "_worm_common_shoot_box",
						instancename: "shootbox",
						matrix: {a: 0.141, b: 0, c: 0, d: 0.141, tx: -23.6, ty: -38.95},
						transform: [-23.6, -38.95, 0.141, 0.141, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 24,
					},
					{
						from: 25,
						to: 25,
						classname: "_worm_common_shoot_box",
						instancename: "shootbox",
						matrix: {a: 0.141, b: 0, c: 0, d: 0.141, tx: -23.6, ty: -38.95},
						transform: [-23.6, -38.95, 0.141, 0.141, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 26,
					},
					{
						from: 27,
						to: 27,
						classname: "_worm_common_shoot_box",
						instancename: "shootbox",
						matrix: {a: 0.141, b: 0, c: 0, d: 0.141, tx: -23.6, ty: -38.95},
						transform: [-23.6, -38.95, 0.141, 0.141, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 35,
					},
				]
			},
			{
				name: "Capa 3",
				keys: [
					{
						from: 0,
						to: 34,
					},
					{
						from: 35,
						to: 35,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_worm_bullet_x": {
		type: "bitmap",
		asset: "_worm_bullet_x",
		scale: 2,
		position: [-21.35, -19.6],
	},
	"_worm_satanicbox": {
		type: "movieclip",
		fps: 30,
		totalFrames: 2,
		labels: {},
		layers: [
			{
				name: "Capa 3",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						actions: function(self){globalsignal.emit(ge.SNOT_LAUNCH, {mc:self}); self.time = 0; self.currentFrame = 999;},
					},
					{
						from: 1,
						to: 1,
					},
				]
			},
		]
	},
	"_worm_common_box_physics": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Capa 1",
				keys: [
					{
						from: 0,
						to: 0,
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
				]
			},
		]
	},
	"_worm_leg_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 25,
		labels: {},
		layers: [
			{
				name: "leg_2_x",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_worm_leg_2_x",
						instancename: "",
						matrix: {a: 0.439, b: 0.899, c: -0.899, d: 0.439, tx: -0.1, ty: 5.4},
						transform: [-0.1, 5.4, 1, 1, -1.117, 1.117, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 23,
						classname: "_worm_leg_2_x",
						instancename: "",
						matrix: {a: 0.439, b: 0.899, c: -1.029, d: 0.502, tx: 0.75, ty: 4.95},
						transform: [0.75, 4.95, 1, 1.145, -1.117, 1.117, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_worm_leg_2_x",
						instancename: "",
						matrix: {a: 0.439, b: 0.899, c: -0.899, d: 0.439, tx: -0.1, ty: 5.4},
						transform: [-0.1, 5.4, 1, 1, -1.117, 1.117, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_1_x",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_worm_leg_1_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.117, c: 0.117, d: 0.993, tx: -0.3, ty: 0.2},
						transform: [-0.3, 0.2, 1, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 23,
						classname: "_worm_leg_1_x",
						instancename: "",
						matrix: {a: 0.934, b: -0.358, c: 0.358, d: 0.934, tx: 0, ty: -0.35},
						transform: [0, -0.35, 1, 1, 0.366, -0.366, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_worm_leg_1_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.117, c: 0.117, d: 0.993, tx: -0.3, ty: 0.2},
						transform: [-0.3, 0.2, 1, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_worm_head_back_x": {
		type: "bitmap",
		asset: "_worm_head_back_x",
		scale: 2,
		position: [-15.75, -20.8],
	},
	"_worm_body_1_x": {
		type: "bitmap",
		asset: "_worm_body_1_x",
		scale: 2,
		position: [-31.85, -20.1],
	},
	"_worm_body_2_x": {
		type: "bitmap",
		asset: "_worm_body_2_x",
		scale: 2,
		position: [-26.3, -17.6],
	},
	"_worm_head_middle_x": {
		type: "bitmap",
		asset: "_worm_head_middle_x",
		scale: 2,
		position: [-24.35, -37.9],
	},
	"_worm_head_front_x": {
		type: "bitmap",
		asset: "_worm_head_front_x",
		scale: 2,
		position: [-15.7, -20.8],
	},
	"_worm_eye1": {
		type: "movieclip",
		fps: 30,
		totalFrames: 61,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_worm_eye_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 23,
						classname: "_worm_eye_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 30,
						classname: "_worm_eye_bg_x",
						instancename: "",
						matrix: {a: 0.846, b: 0.39, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 0.931, 1, 0, 0.432, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 31,
						to: 38,
						classname: "_worm_eye_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 44,
						classname: "_worm_eye_bg_x",
						instancename: "",
						matrix: {a: 0.846, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 0.846, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.5], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 45,
						to: 48,
						classname: "_worm_eye_bg_x",
						instancename: "",
						matrix: {a: 0.227, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 0.227, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.476], [0.585, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 53,
						classname: "_worm_eye_bg_x",
						instancename: "",
						matrix: {a: 0.846, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 0.846, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.5], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 59,
						classname: "_worm_eye_bg_x",
						instancename: "",
						matrix: {a: 0.227, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 0.227, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.476], [0.585, 1], [1, 1], ],
						}
					},
					{
						from: 60,
						to: 60,
						classname: "_worm_eye_bg_x",
						instancename: "",
						matrix: {a: 0.846, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 0.846, 1, 0, 0, 0],
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
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.95, b: -0.108, c: 0.113, d: 0.994, tx: 0.05, ty: -3.2},
						transform: [0.05, -3.2, 0.957, 1, 0.113, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 23,
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.95, b: -0.108, c: 0.113, d: 0.994, tx: 0.05, ty: -3.2},
						transform: [0.05, -3.2, 0.957, 1, 0.113, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0], [0.644, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 30,
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.839, b: 0.041, c: -0.048, d: 0.999, tx: 0.25, ty: -3},
						transform: [0.25, -3, 0.84, 1, -0.048, 0.048, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 31,
						to: 38,
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.95, b: -0.108, c: 0.113, d: 0.994, tx: 0.05, ty: -3.2},
						transform: [0.05, -3.2, 0.957, 1, 0.113, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0], [0.644, 1], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 44,
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.834, b: -0.095, c: 0.113, d: 0.994, tx: 0.3, ty: -2.95},
						transform: [0.3, -2.95, 0.84, 1, 0.113, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.5], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 45,
						to: 48,
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.186, b: -0.008, c: 0.044, d: 0.999, tx: 0.1, ty: -0.05},
						transform: [0.1, -0.05, 0.187, 1, 0.044, -0.044, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.476], [0.585, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 53,
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.834, b: -0.095, c: 0.113, d: 0.994, tx: 0.3, ty: -2.95},
						transform: [0.3, -2.95, 0.84, 1, 0.113, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.5], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 59,
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.186, b: -0.008, c: 0.044, d: 0.999, tx: 0.1, ty: -0.05},
						transform: [0.1, -0.05, 0.187, 1, 0.044, -0.044, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.476], [0.585, 1], [1, 1], ],
						}
					},
					{
						from: 60,
						to: 60,
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.834, b: -0.095, c: 0.113, d: 0.994, tx: 0.3, ty: -2.95},
						transform: [0.3, -2.95, 0.84, 1, 0.113, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_worm_mouth_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 63,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 30,
						classname: "_worm_mouth_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.25, ty: 0.15},
						transform: [-0.25, 0.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 31,
						to: 37,
						classname: "_worm_mouth_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.25, ty: 0.15},
						transform: [-0.25, 0.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.565, 1], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 47,
						classname: "_worm_mouth_2_x",
						instancename: "",
						matrix: {a: 0.751, b: 0, c: 0, d: 0.751, tx: 0.3, ty: 0.8},
						transform: [0.3, 0.8, 0.751, 0.751, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 61,
						classname: "_worm_mouth_2_x",
						instancename: "",
						matrix: {a: 0.751, b: 0, c: 0, d: 0.751, tx: 0.3, ty: 0.8},
						transform: [0.3, 0.8, 0.751, 0.751, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.465, 0], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 62,
						classname: "_worm_mouth_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.25, ty: 0.15},
						transform: [-0.25, 0.15, 1, 1, 0, 0, 0],
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
						to: 32,
						classname: "_worm_baba_1_x",
						instancename: "",
						matrix: {a: 0.889, b: 0, c: 0, d: 0.774, tx: 0.7, ty: 2.4},
						transform: [0.7, 2.4, 0.889, 0.774, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.425, 0], [0.804, 0.6], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 38,
						classname: "_worm_baba_1_x",
						instancename: "",
						matrix: {a: 0.889, b: 0, c: 0, d: 1.121, tx: 0.7, ty: 2.7},
						transform: [0.7, 2.7, 0.889, 1.121, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.7, 0.925], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 45,
						classname: "_worm_baba_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.677, tx: 0.7, ty: 2.3},
						transform: [0.7, 2.3, 1, 0.677, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.482, 0], [0.611, 1], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 49,
						classname: "_worm_baba_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.941, tx: 0.7, ty: 2.5},
						transform: [0.7, 2.5, 1, 0.941, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.482, 0], [0.611, 1], [1, 1], ],
						}
					},
					{
						from: 50,
						to: 62,
						classname: "_worm_baba_1_x",
						instancename: "",
						matrix: {a: 0.889, b: 0, c: 0, d: 0.774, tx: 0.7, ty: 2.4},
						transform: [0.7, 2.4, 0.889, 0.774, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_worm_hittablebox": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Capa 3",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
		]
	},
	"_worm_attackbox": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Capa 3",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
		]
	},
	"_worm_leg_walk": {
		type: "movieclip",
		fps: 30,
		totalFrames: 12,
		labels: {},
		layers: [
			{
				name: "leg_2_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_worm_leg_2_x",
						instancename: "",
						matrix: {a: 0.119, b: 0.993, c: -0.993, d: 0.119, tx: -0.1, ty: 5.45},
						transform: [-0.1, 5.45, 1, 1, -1.452, 1.452, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 10,
						classname: "_worm_leg_2_x",
						instancename: "",
						matrix: {a: 0.985, b: 0.174, c: -0.2, d: 1.128, tx: 1, ty: 5.05},
						transform: [1, 5.05, 1, 1.145, -0.175, 0.175, NaN],
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
						classname: "_worm_leg_2_x",
						instancename: "",
						matrix: {a: 0.439, b: 0.899, c: -0.899, d: 0.439, tx: -0.1, ty: 5.4},
						transform: [-0.1, 5.4, 1, 1, -1.117, 1.117, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_worm_leg_1_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.117, c: 0.117, d: 0.993, tx: -0.3, ty: 0.2},
						transform: [-0.3, 0.2, 1, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 10,
						classname: "_worm_leg_1_x",
						instancename: "",
						matrix: {a: 0.934, b: -0.358, c: 0.358, d: 0.934, tx: 0, ty: -0.35},
						transform: [0, -0.35, 1, 1, 0.366, -0.366, NaN],
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
						classname: "_worm_leg_1_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.117, c: 0.117, d: 0.993, tx: -0.3, ty: 0.2},
						transform: [-0.3, 0.2, 1, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_worm_stepbox": {
		type: "movieclip",
		fps: 30,
		totalFrames: 2,
		labels: {},
		layers: [
			{
				name: "Capa 3",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						actions: function(self){globalsignal.emit(ge.STEP, {mc:self}); self.time = 0; self.currentFrame = 999;},
					},
					{
						from: 1,
						to: 1,
					},
				]
			},
		]
	},
	"_worm_crash_part_2": {
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
						classname: "_worm_banana2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.95, ty: 0.05},
						transform: [-0.95, 0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "box_physics",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_box_physics",
						instancename: "",
						matrix: {a: 0.159, b: 0, c: 0, d: 0.057, tx: 0, ty: 0},
						transform: [0, 0, 0.159, 0.057, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_worm_crash_part_1": {
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
						classname: "_worm_banana_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.95, ty: 0.05},
						transform: [-0.95, 0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "box_physics",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_box_physics",
						instancename: "",
						matrix: {a: 0.242, b: 0, c: 0, d: 0.088, tx: 0.15, ty: -0.85},
						transform: [0.15, -0.85, 0.242, 0.088, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_worm_worm_crash_2": {
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
						classname: "_worm_worm_crash_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -2.25},
						transform: [0, -2.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "circle_physics",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_common_circle_physics",
						instancename: "",
						matrix: {a: 0.308, b: 0, c: 0, d: 0.308, tx: 4.05, ty: 5.8},
						transform: [4.05, 5.8, 0.308, 0.308, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "circle_physics",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_common_circle_physics",
						instancename: "",
						matrix: {a: 0.27, b: 0, c: 0, d: 0.27, tx: -0.2, ty: -0.65},
						transform: [-0.2, -0.65, 0.27, 0.27, 0, 0, 0],
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
						classname: "_worm_common_circle_physics",
						instancename: "",
						matrix: {a: 0.308, b: 0, c: 0, d: 0.308, tx: -3.7, ty: 5.8},
						transform: [-3.7, 5.8, 0.308, 0.308, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_worm_worm_crash_1": {
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
						classname: "_worm_worm_crash_0_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.25, ty: 0.85},
						transform: [0.25, 0.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "circle_physics",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_common_circle_physics",
						instancename: "",
						matrix: {a: 0.271, b: 0, c: 0, d: 0.271, tx: 3.15, ty: 0.25},
						transform: [3.15, 0.25, 0.271, 0.271, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "circle_physics",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_common_circle_physics",
						instancename: "",
						matrix: {a: 0.262, b: 0, c: 0, d: 0.262, tx: -3.45, ty: 0.75},
						transform: [-3.45, 0.75, 0.262, 0.262, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_worm_head_sleep_x": {
		type: "bitmap",
		asset: "_worm_head_sleep_x",
		scale: 2,
		position: [-18.25, -20.15],
	},
	"_worm_hair_x": {
		type: "bitmap",
		asset: "_worm_hair_x",
		scale: 2,
		position: [-13.7, -8.95],
	},
	"_worm_leg_grow": {
		type: "movieclip",
		fps: 30,
		totalFrames: 36,
		labels: {loop: {from:11, to:34}, },
		layers: [
			{
				name: "leg_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_leg_2_x",
						instancename: "",
						matrix: {a: 0.224, b: -0.975, c: 0.628, d: 0.144, tx: -0.75, ty: -0.1},
						transform: [-0.75, -0.1, 1, 0.644, 1.345, -1.345, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_worm_leg_2_x",
						instancename: "",
						matrix: {a: 0.224, b: -0.975, c: 0.628, d: 0.144, tx: 1.85, ty: 0.7},
						transform: [1.85, 0.7, 1, 0.644, 1.345, -1.345, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.185, 0.366], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_worm_leg_2_x",
						instancename: "",
						matrix: {a: 0.518, b: -0.856, c: 1.301, d: 0.787, tx: 10.35, ty: 4.25},
						transform: [10.35, 4.25, 1, 1.52, 1.027, -1.027, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_worm_leg_2_x",
						instancename: "",
						matrix: {a: 0.518, b: -0.856, c: 1.147, d: 0.694, tx: 8.85, ty: 3.75},
						transform: [8.85, 3.75, 1, 1.341, 1.027, -1.027, NaN],
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
						classname: "_worm_leg_2_x",
						instancename: "",
						matrix: {a: 0.966, b: 0.255, c: -0.29, d: 1.098, tx: 2.35, ty: 5.4},
						transform: [2.35, 5.4, 0.999, 1.135, -0.258, 0.258, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 11,
						to: 22,
						classname: "_worm_leg_2_x",
						instancename: "",
						matrix: {a: 0.439, b: 0.899, c: -0.899, d: 0.439, tx: -0.1, ty: 5.4},
						transform: [-0.1, 5.4, 1, 1, -1.117, 1.117, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 23,
						to: 34,
						classname: "_worm_leg_2_x",
						instancename: "",
						matrix: {a: 0.439, b: 0.899, c: -1.029, d: 0.502, tx: 0.75, ty: 4.95},
						transform: [0.75, 4.95, 1, 1.145, -1.117, 1.117, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_worm_leg_2_x",
						instancename: "",
						matrix: {a: 0.439, b: 0.899, c: -0.899, d: 0.439, tx: -0.1, ty: 5.4},
						transform: [-0.1, 5.4, 1, 1, -1.117, 1.117, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_1_x",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 3,
						classname: "_worm_leg_1_x",
						instancename: "",
						matrix: {a: 0.023, b: -1, c: 0.587, d: 0.013, tx: -1.1, ty: 0},
						transform: [-1.1, 0, 1, 0.587, 1.548, -1.548, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.185, 0.366], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_worm_leg_1_x",
						instancename: "",
						matrix: {a: 0.297, b: -0.955, c: 1.553, d: 0.483, tx: 0.65, ty: 0.45},
						transform: [0.65, 0.45, 1, 1.626, 1.269, -1.269, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 10,
						classname: "_worm_leg_1_x",
						instancename: "",
						matrix: {a: 0.297, b: -0.955, c: 1.324, d: 0.412, tx: 0.3, ty: 0.35},
						transform: [0.3, 0.35, 1, 1.387, 1.269, -1.269, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 11,
						to: 22,
						classname: "_worm_leg_1_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.117, c: 0.117, d: 0.993, tx: -0.3, ty: 0.2},
						transform: [-0.3, 0.2, 1, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 23,
						to: 34,
						classname: "_worm_leg_1_x",
						instancename: "",
						matrix: {a: 0.934, b: -0.358, c: 0.358, d: 0.934, tx: 0, ty: -0.35},
						transform: [0, -0.35, 1, 1, 0.366, -0.366, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_worm_leg_1_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.117, c: 0.117, d: 0.993, tx: -0.3, ty: 0.2},
						transform: [-0.3, 0.2, 1, 1, 0.118, -0.118, NaN],
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
					},
					{
						from: 11,
						to: 34,
					},
					{
						from: 35,
						to: 35,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_worm_eye1_close_x": {
		type: "bitmap",
		asset: "_worm_eye1_close_x",
		scale: 2,
		position: [-9.2, -15.6],
	},
	"_worm_eye_open2": {
		type: "movieclip",
		fps: 30,
		totalFrames: 26,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_worm_eye_bg_x",
						instancename: "",
						matrix: {a: 0.215, b: 0.02, c: -0.091, d: 0.996, tx: -0.6, ty: 0.55},
						transform: [-0.6, 0.55, 0.216, 1, -0.091, 0.091, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.274, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 25,
						classname: "_worm_eye_bg_x",
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
						to: 8,
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.214, b: -0.089, c: -0.066, d: 0.992, tx: -0.55, ty: 0.35},
						transform: [-0.55, 0.35, 0.232, 0.994, -0.067, -0.392, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.274, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 25,
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.95, b: -0.108, c: 0.113, d: 0.994, tx: 0.05, ty: -3.2},
						transform: [0.05, -3.2, 0.957, 1, 0.113, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_worm_mouth_1_x": {
		type: "bitmap",
		asset: "_worm_mouth_1_x",
		scale: 2,
		position: [-14.65, -17],
	},
	"_worm_mouth_2_x": {
		type: "bitmap",
		asset: "_worm_mouth_2_x",
		scale: 2,
		position: [-11.85, -12.75],
	},
	"_worm_baba_1_x": {
		type: "bitmap",
		asset: "_worm_baba_1_x",
		scale: 2,
		position: [-6.15, -6],
	},
	"_worm_common_fx_spawn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {},
		layers: [
			{
				name: "startfx",
				keys: [
					{
						from: 0,
						to: 1,
					},
					{
						from: 2,
						to: 8,
						classname: "_worm_common_startballoonfx",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.6, ty: -0.1},
						transform: [0.6, -0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.208, 0.569], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 17,
						classname: "_worm_common_startballoonfx",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.284, tx: 2, ty: -0.35},
						transform: [2, -0.35, 1, 1.284, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_worm_common_startballoonfx",
						instancename: "",
						matrix: {a: 0.569, b: 0, c: 0, d: 0.415, tx: 0.6, ty: 0.8},
						transform: [0.6, 0.8, 0.569, 0.415, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 19,
					},
				]
			},
			{
				name: "startfx",
				keys: [
					{
						from: 0,
						to: 1,
					},
					{
						from: 2,
						to: 18,
						classname: "_worm_common_startballoonfx_end",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.6, ty: -0.1},
						transform: [0.6, -0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 19,
					},
				]
			},
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_worm_common_thunder_part_1_x",
						instancename: "",
						matrix: {a: -0.744, b: 0, c: 0, d: 0.823, tx: 2.05, ty: -406.1},
						transform: [2.05, -406.1, 0.744, 0.823, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_worm_common_thunder_part_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.05, ty: -356.2},
						transform: [2.05, -356.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_worm_common_thunder_part_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.05, ty: -356.2},
						transform: [2.05, -356.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_worm_common_thunder_part_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.939, tx: 2.05, ty: -333.8},
						transform: [2.05, -333.8, 1, 0.939, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_worm_common_thunder_part_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.05, ty: -356.2},
						transform: [2.05, -356.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_worm_common_thunder_part_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.933, tx: 2.05, ty: -331.5},
						transform: [2.05, -331.5, 1, 0.933, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_worm_common_thunder_part_2_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -1, tx: -0.1, ty: -283.25},
						transform: [-0.1, -283.25, 1, 1, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_worm_common_thunder_part_2_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -1, tx: -0.1, ty: -271.35},
						transform: [-0.1, -271.35, 1, 1, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 9,
						classname: "_worm_common_thunder_part_5_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -0.998, tx: -1.9, ty: -282.65},
						transform: [-1.9, -282.65, 1, 0.998, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.268, 0.4], [0.63, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_worm_common_thunder_part_5_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -0.708, tx: -1.9, ty: -200.75},
						transform: [-1.9, -200.75, 1, 0.708, 3.142, 3.142, 3.142],
						alpha: 0.22,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 18,
					},
					{
						from: 19,
						to: 19,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_worm_eye1_attack": {
		type: "movieclip",
		fps: 30,
		totalFrames: 61,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_worm_eye_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 60,
						classname: "_worm_eye_bg_x",
						instancename: "",
						matrix: {a: 0.846, b: 0.39, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 0.931, 1, 0, 0.432, NaN],
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
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.95, b: -0.108, c: 0.113, d: 0.994, tx: 0.05, ty: -3.2},
						transform: [0.05, -3.2, 0.957, 1, 0.113, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0], [0.644, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 60,
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.84, b: 0.008, c: -0.01, d: 1, tx: -0.15, ty: -0.15},
						transform: [-0.15, -0.15, 0.84, 1, -0.01, 0.01, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_worm_eye_open": {
		type: "movieclip",
		fps: 30,
		totalFrames: 76,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_worm_eye_bg_x",
						instancename: "",
						matrix: {a: 0.215, b: 0.02, c: -0.091, d: 0.996, tx: -0.6, ty: 0.55},
						transform: [-0.6, 0.55, 0.216, 1, -0.091, 0.091, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.274, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_worm_eye_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.409, 0.031], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_worm_eye_bg_x",
						instancename: "",
						matrix: {a: 0.215, b: 0.02, c: -0.091, d: 0.996, tx: -0.6, ty: 0.55},
						transform: [-0.6, 0.55, 0.216, 1, -0.091, 0.091, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.274, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 30,
						classname: "_worm_eye_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 43,
						classname: "_worm_eye_bg_x",
						instancename: "",
						matrix: {a: 0.846, b: 0.39, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 0.931, 1, 0, 0.432, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 44,
						to: 61,
						classname: "_worm_eye_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 74,
						classname: "_worm_eye_bg_x",
						instancename: "",
						matrix: {a: 0.846, b: 0.39, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 0.931, 1, 0, 0.432, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 75,
						to: 75,
						classname: "_worm_eye_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.619, 1], [1, 1], ],
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
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.214, b: -0.089, c: -0.066, d: 0.992, tx: -0.55, ty: 0.35},
						transform: [-0.55, 0.35, 0.232, 0.994, -0.067, -0.392, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.274, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.95, b: -0.108, c: 0.113, d: 0.994, tx: 0.1, ty: -0.35},
						transform: [0.1, -0.35, 0.957, 1, 0.113, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.409, 0.031], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.214, b: -0.089, c: -0.066, d: 0.992, tx: -0.55, ty: 0.35},
						transform: [-0.55, 0.35, 0.232, 0.994, -0.067, -0.392, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.274, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 30,
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.95, b: -0.108, c: 0.113, d: 0.994, tx: 0.05, ty: -3.2},
						transform: [0.05, -3.2, 0.957, 1, 0.113, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0], [0.644, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 43,
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.839, b: 0.041, c: -0.048, d: 0.999, tx: 0.25, ty: -3},
						transform: [0.25, -3, 0.84, 1, -0.048, 0.048, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 44,
						to: 61,
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.95, b: -0.108, c: 0.113, d: 0.994, tx: 0.05, ty: -3.2},
						transform: [0.05, -3.2, 0.957, 1, 0.113, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0], [0.644, 1], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 74,
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.839, b: 0.041, c: -0.048, d: 0.999, tx: 0.25, ty: -3},
						transform: [0.25, -3, 0.84, 1, -0.048, 0.048, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 75,
						to: 75,
						classname: "_worm_pupil_x",
						instancename: "",
						matrix: {a: 0.95, b: -0.108, c: 0.113, d: 0.994, tx: 0.05, ty: -3.2},
						transform: [0.05, -3.2, 0.957, 1, 0.113, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.429, 0], [0.644, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_worm_mouth2": {
		type: "movieclip",
		fps: 30,
		totalFrames: 5,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_worm_mouth_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.612, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 3,
						classname: "_worm_mouth_1_x",
						instancename: "",
						matrix: {a: 0.921, b: 0, c: 0, d: 0.921, tx: -0.05, ty: -0.05},
						transform: [-0.05, -0.05, 0.921, 0.921, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.612, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_worm_mouth_1_x",
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
	"_worm_spitx_x": {
		type: "bitmap",
		asset: "_worm_spitx_x",
		scale: 2,
		position: [-10.9, -6.9],
	},
	"_worm_common_shoot_box": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Capa 1",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
		]
	},
	"_worm_leg_2_x": {
		type: "bitmap",
		asset: "_worm_leg_2_x",
		scale: 2,
		position: [-6.85, -6.8],
	},
	"_worm_leg_1_x": {
		type: "bitmap",
		asset: "_worm_leg_1_x",
		scale: 2,
		position: [-6.8, -6.8],
	},
	"_worm_eye_bg_x": {
		type: "bitmap",
		asset: "_worm_eye_bg_x",
		scale: 2,
		position: [-9.95, -15.55],
	},
	"_worm_pupil_x": {
		type: "bitmap",
		asset: "_worm_pupil_x",
		scale: 2,
		position: [-9.6, -6.25],
	},
	"_worm_banana2_x": {
		type: "bitmap",
		asset: "_worm_banana2_x",
		scale: 2,
		position: [-16.25, -13.15],
	},
	"_worm_box_physics": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Capa 1",
				keys: [
					{
						from: 0,
						to: 0,
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
				]
			},
		]
	},
	"_worm_banana_x": {
		type: "bitmap",
		asset: "_worm_banana_x",
		scale: 2,
		position: [-18.25, -13.75],
	},
	"_worm_worm_crash_2_x": {
		type: "bitmap",
		asset: "_worm_worm_crash_2_x",
		scale: 2,
		position: [-25.35, -17.85],
	},
	"_worm_worm_crash_0_x": {
		type: "bitmap",
		asset: "_worm_worm_crash_0_x",
		scale: 2,
		position: [-22.65, -21.3],
	},
	"_worm_common_startballoonfx": {
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
						classname: "_worm_common_fx_floor",
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
						classname: "_worm_common_fx_rays",
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
	"_worm_common_startballoonfx_end": {
		type: "movieclip",
		fps: 30,
		totalFrames: 25,
		labels: {},
		layers: [
			{
				name: "rays",
				keys: [
					{
						from: 0,
						to: 24,
						classname: "_worm_common_rays",
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
				name: "rays",
				keys: [
					{
						from: 0,
						to: 24,
						classname: "_worm_common_rays",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
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
						to: 23,
					},
					{
						from: 24,
						to: 24,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_worm_common_thunder_part_1_x": {
		type: "bitmap",
		asset: "_worm_common_thunder_part_1_x",
		scale: 2,
		position: [-61.1, -287.35],
	},
	"_worm_common_thunder_part_2_x": {
		type: "bitmap",
		asset: "_worm_common_thunder_part_2_x",
		scale: 2,
		position: [-61.1, -287.35],
	},
	"_worm_common_thunder_part_3_x": {
		type: "bitmap",
		asset: "_worm_common_thunder_part_3_x",
		scale: 2,
		position: [-61.1, -287.35],
	},
	"_worm_common_thunder_part_5_x": {
		type: "bitmap",
		asset: "_worm_common_thunder_part_5_x",
		scale: 2,
		position: [-61.1, -287.4],
	},
	"_worm_common_fx_floor": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_worm_common_startfx_floor_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.535, 0], [0.546, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 18,
						classname: "_worm_common_startfx_floor_x",
						instancename: "",
						matrix: {a: 0.891, b: 0, c: 0, d: 0.891, tx: 0, ty: 0},
						transform: [0, 0, 0.891, 0.891, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.535, 0], [0.546, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_worm_common_startfx_floor_x",
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
	"_worm_common_fx_rays": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_worm_common_fx_rays_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_worm_common_fx_rays_x",
						instancename: "",
						matrix: {a: 1.057, b: 0, c: 0, d: 1.101, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1.057, 1.101, 0, 0, 0],
						alpha: 0.64,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_worm_common_fx_rays_x",
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
	"_worm_common_rays": {
		type: "movieclip",
		fps: 30,
		totalFrames: 40,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 38,
						classname: "_worm_common_ray",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 39,
						to: 39,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 2,
					},
					{
						from: 3,
						to: 38,
						classname: "_worm_common_ray",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.72,
						visible: true,
						tween: false,
					},
					{
						from: 39,
						to: 39,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 38,
						classname: "_worm_common_ray",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.5,
						visible: true,
						tween: false,
					},
					{
						from: 39,
						to: 39,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 38,
					},
					{
						from: 39,
						to: 39,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_worm_common_startfx_floor_x": {
		type: "bitmap",
		asset: "_worm_common_startfx_floor_x",
		scale: 2,
		position: [-37.65, -10.95],
	},
	"_worm_common_fx_rays_x": {
		type: "bitmap",
		asset: "_worm_common_fx_rays_x",
		scale: 2,
		position: [-45.2, -71.3],
	},
	"_worm_common_ray": {
		type: "movieclip",
		fps: 30,
		totalFrames: 16,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_worm_common_ray_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.1, c: 0.033, d: 0.327, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.329, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.226, 0.438], [0.6, 0.959], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 11,
						classname: "_worm_common_ray_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.1, c: 0.11, d: 1.097, tx: -0.15, ty: -1.65},
						transform: [-0.15, -1.65, 1, 1.102, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.449], [0.608, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 13,
						classname: "_worm_common_ray_x",
						instancename: "",
						matrix: {a: 0.009, b: -0.506, c: 0.436, d: 0.008, tx: -0.15, ty: -1.85},
						transform: [-0.15, -1.85, 0.506, 0.436, 1.553, -1.553, NaN],
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
						classname: "_worm_common_ray_x",
						instancename: "",
						matrix: {a: -0.013, b: -0.506, c: 0.354, d: -0.009, tx: 0, ty: -1.85},
						transform: [0, -1.85, 0.506, 0.354, 1.596, -1.596, NaN],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 14,
					},
					{
						from: 15,
						to: 15,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_worm_common_ray_x": {
		type: "bitmap",
		asset: "_worm_common_ray_x",
		scale: 2,
		position: [-11.65, -85.95],
	},
};
