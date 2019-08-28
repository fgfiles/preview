
var ground_demon = {
	"ground_demon": {
		type: "movieclip",
		fps: 30,
		totalFrames: 129,
		labels: {ground_idle: {from:0, to:9}, ground_run: {from:11, to:20}, ground_stop: {from:22, to:32}, ground_stopturn: {from:34, to:48}, ground_turn: {from:50, to:58}, ground_turn_fast: {from:60, to:73}, die: {from:75, to:85}, waiting: {from:87, to:96}, spawn: {from:98, to:105}, crash: {from:107, to:113}, attack: {from:115, to:127}, },
		layers: [
			{
				name: "physics",
				keys: [
					{
						from: 0,
						to: 128,
						classname: "_ground_demon_common_body_physics",
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
						classname: "_ground_demon_ground_demon_ground_idle",
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
						classname: "_ground_demon_ground_demon_ground_run",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 49,
						classname: "_ground_demon_ground_demon_ground_stop",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 50,
						to: 74,
						classname: "_ground_demon_ground_demon_ground_turn",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 75,
						to: 86,
						classname: "_ground_demon_ground_demon_ground_idle",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 87,
						to: 97,
						classname: "_ground_demon_ground_demon_waiting",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 98,
						to: 106,
						classname: "_ground_demon_ground_demon_spawn",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 107,
						to: 114,
						classname: "_ground_demon_common_devil_wings_crash",
						instancename: "character",
						matrix: {a: 1.09, b: 0, c: 0, d: 1.09, tx: -5.85, ty: -8.6},
						transform: [-5.85, -8.6, 1.09, 1.09, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 115,
						to: 128,
						classname: "_ground_demon_ground_demon_attack",
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
						to: 32,
					},
					{
						from: 33,
						to: 33,
						actions: function(self){self.stop();},
					},
					{
						from: 34,
						to: 48,
					},
					{
						from: 49,
						to: 49,
						actions: function(self){self.stop();},
					},
					{
						from: 50,
						to: 58,
					},
					{
						from: 59,
						to: 59,
						actions: function(self){self.stop();},
					},
					{
						from: 60,
						to: 73,
					},
					{
						from: 74,
						to: 74,
						actions: function(self){self.stop();},
					},
					{
						from: 75,
						to: 85,
					},
					{
						from: 86,
						to: 86,
						actions: function(self){self.stop();},
					},
					{
						from: 87,
						to: 96,
					},
					{
						from: 97,
						to: 97,
						actions: function(self){self.stop();},
					},
					{
						from: 98,
						to: 105,
					},
					{
						from: 106,
						to: 106,
						actions: function(self){self.stop();},
					},
					{
						from: 107,
						to: 113,
					},
					{
						from: 114,
						to: 114,
						actions: function(self){self.stop();},
					},
					{
						from: 115,
						to: 127,
					},
					{
						from: 128,
						to: 128,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_ground_demon_common_body_physics": {
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
						classname: "_ground_demon_common_box_physics",
						instancename: "",
						matrix: {a: 0.232, b: 0, c: 0, d: 0.132, tx: 0, ty: 20.3},
						transform: [0, 20.3, 0.232, 0.132, 0, 0, 0],
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
						classname: "_ground_demon_common_circle_physics",
						instancename: "",
						matrix: {a: 0.429, b: 0, c: 0, d: 0.429, tx: -0.5, ty: -4.3},
						transform: [-0.5, -4.3, 0.429, 0.429, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ground_demon_ground_demon_ground_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 24,
		labels: {},
		layers: [
			{
				name: "leg_x",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -3.85, ty: 18.2},
						transform: [-3.85, 18.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 22,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -1.375, b: 0, c: 0, d: 0.798, tx: -3.85, ty: 19.75},
						transform: [-3.85, 19.75, 1.375, 0.798, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -3.85, ty: 18.2},
						transform: [-3.85, 18.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "foot2_x",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.35, ty: 25.2},
						transform: [-4.35, 25.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 22,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.1, ty: 25.2},
						transform: [-4.1, 25.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.35, ty: 25.2},
						transform: [-4.35, 25.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_x",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5.75, ty: 18.45},
						transform: [5.75, 18.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 22,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 1.367, b: 0, c: 0, d: 0.962, tx: 5.75, ty: 18.85},
						transform: [5.75, 18.85, 1.367, 0.962, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5.75, ty: 18.45},
						transform: [5.75, 18.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "foot_x",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.75, ty: 24.7},
						transform: [6.75, 24.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 22,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.2, ty: 24.7},
						transform: [7.2, 24.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.75, ty: 24.7},
						transform: [6.75, 24.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.878, b: 0.478, c: 0.478, d: 0.878, tx: -8.65, ty: -0.3},
						transform: [-8.65, -0.3, 1, 1, 0.498, 2.644, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 22,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.745, b: 0.667, c: 0.667, d: 0.745, tx: -10.85, ty: 4.45},
						transform: [-10.85, 4.45, 1, 1, 0.731, 2.411, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.878, b: 0.478, c: 0.478, d: 0.878, tx: -8.65, ty: -0.3},
						transform: [-8.65, -0.3, 1, 1, 0.498, 2.644, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.19, b: 0.982, c: -0.982, d: 0.19, tx: -17.05, ty: 5.4},
						transform: [-17.05, 5.4, 1, 1, -1.379, 1.379, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 22,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.062, b: 0.998, c: -0.998, d: 0.062, tx: -18.5, ty: 11.7},
						transform: [-18.5, 11.7, 1, 1, -1.508, 1.508, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.19, b: 0.982, c: -0.982, d: 0.19, tx: -17.05, ty: 5.4},
						transform: [-17.05, 5.4, 1, 1, -1.379, 1.379, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "sword",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.957, b: -0.289, c: 0.289, d: 0.957, tx: -31.3, ty: 3.95},
						transform: [-31.3, 3.95, 1, 1, 0.293, -0.293, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 22,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.984, b: -0.18, c: 0.18, d: 0.984, tx: -30.85, ty: 8.65},
						transform: [-30.85, 8.65, 1, 1, 0.181, -0.181, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.957, b: -0.289, c: 0.289, d: 0.957, tx: -31.3, ty: 3.95},
						transform: [-31.3, 3.95, 1, 1, 0.293, -0.293, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.529, 0], [0.55, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body_x",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 0.55},
						transform: [1.05, 0.55, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 22,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 1.123, b: 0.032, c: -0.025, d: 0.884, tx: 0.95, ty: 4.5},
						transform: [0.95, 4.5, 1.123, 0.884, -0.029, 0.029, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 0.55},
						transform: [1.05, 0.55, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.991, b: 0.136, c: -0.136, d: 0.991, tx: 12.4, ty: -1.55},
						transform: [12.4, -1.55, 1, 1, -0.137, 0.137, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 22,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.9, b: 0.18, c: -0.196, d: 0.98, tx: 11.2, ty: 2.85},
						transform: [11.2, 2.85, 0.918, 1, -0.198, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.991, b: 0.136, c: -0.136, d: 0.991, tx: 12.4, ty: -1.55},
						transform: [12.4, -1.55, 1, 1, -0.137, 0.137, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "head1",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.1, ty: -8.9},
						transform: [1.1, -8.9, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 0.999, b: 0.041, c: -0.041, d: 0.999, tx: 0.85, ty: -4.15},
						transform: [0.85, -4.15, 1, 1, -0.041, 0.041, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.353, 0], [0.686, 0.347], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 22,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 0.999, b: 0.04, c: -0.04, d: 0.999, tx: 0.85, ty: -4.2},
						transform: [0.85, -4.2, 1, 1, -0.04, 0.04, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.495, 0.107], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.1, ty: -8.9},
						transform: [1.1, -8.9, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "helmet",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.978, b: 0.124, c: -0.124, d: 0.978, tx: 0.1, ty: -21.7},
						transform: [0.1, -21.7, 0.986, 0.986, -0.126, 0.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 22,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.996, b: 0.09, c: -0.09, d: 0.996, tx: 0.4, ty: -17.45},
						transform: [0.4, -17.45, 1, 1, -0.09, 0.09, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.978, b: 0.124, c: -0.124, d: 0.978, tx: 0.1, ty: -21.7},
						transform: [0.1, -21.7, 0.986, 0.986, -0.126, 0.126, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 22.55, ty: 1.95},
						transform: [22.55, 1.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 22,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.982, b: -0.187, c: 0.187, d: 0.982, tx: 20.15, ty: 7},
						transform: [20.15, 7, 1, 1, 0.188, -0.188, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 22.55, ty: 1.95},
						transform: [22.55, 1.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "hittablebox",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_ground_demon_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -0.15, ty: -27.25},
						transform: [-0.15, -27.25, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 22,
						classname: "_ground_demon_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -0.15, ty: -22.25},
						transform: [-0.15, -22.25, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_ground_demon_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -0.15, ty: -27.25},
						transform: [-0.15, -27.25, 0.378, 0.2, 0, 0, 0],
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
						classname: "_ground_demon_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.162, b: 0, c: 0, d: 0.333, tx: -38.15, ty: -11.7},
						transform: [-38.15, -11.7, 0.162, 0.333, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.556, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 22,
						classname: "_ground_demon_attackbox",
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
						from: 23,
						to: 23,
						classname: "_ground_demon_attackbox",
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
	"_ground_demon_ground_demon_ground_run": {
		type: "movieclip",
		fps: 30,
		totalFrames: 21,
		labels: {},
		layers: [
			{
				name: "leg_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.327, b: 0.945, c: 0.945, d: 0.327, tx: -2.65, ty: 19.4},
						transform: [-2.65, 19.4, 1, 1, 1.237, 1.904, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.4], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.742, b: -0.67, c: -0.815, d: 0.902, tx: -3.55, ty: 10.4},
						transform: [-3.55, 10.4, 1, 1.215, -0.735, -2.407, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.781, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.959, b: 0.282, c: 0.282, d: 0.959, tx: -2.05, ty: 17.9},
						transform: [-2.05, 17.9, 1, 1, 0.286, 2.855, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.469], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 19,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.124, b: 0.992, c: 0.992, d: 0.124, tx: 2.3, ty: 10.15},
						transform: [2.3, 10.15, 1, 1, 1.447, 1.695, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0.031], [0.76, 0.538], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.327, b: 0.945, c: 0.945, d: 0.327, tx: -2.65, ty: 19.4},
						transform: [-2.65, 19.4, 1, 1, 1.237, 1.904, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.181, 0.4], [0.577, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "foot2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.846, b: -0.533, c: 0.533, d: 0.846, tx: 4.2, ty: 22.25},
						transform: [4.2, 22.25, 1, 1, 0.562, -0.562, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.245, 0.305], [0.588, 0.662], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 1,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.044, c: 0.044, d: 0.998, tx: -0.6, ty: 22.7},
						transform: [-0.6, 22.7, 0.999, 0.999, 0.044, -0.044, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.3, 0.361], [0.637, 0.707], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 3,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.953, b: 0.301, c: -0.301, d: 0.953, tx: -5.5, ty: 21},
						transform: [-5.5, 21, 0.999, 0.999, -0.306, 0.306, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.306, 0.591], [0.648, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.824, b: 0.567, c: -0.567, d: 0.824, tx: -9.45, ty: 16.5},
						transform: [-9.45, 16.5, 1, 1, -0.602, 0.602, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.42, 0], [0.747, 0.458], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.975, b: 0.217, c: -0.217, d: 0.975, tx: -3.45, ty: 22},
						transform: [-3.45, 22, 0.999, 0.999, -0.219, 0.219, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.373, 0.325], [0.705, 0.668], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 1, b: -0.014, c: 0.014, d: 1, tx: 0.4, ty: 25.9},
						transform: [0.4, 25.9, 1, 1, 0.014, -0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.469], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 19,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: -0.638, b: -0.442, c: 0.57, d: -0.822, tx: 8.4, ty: 11.25},
						transform: [8.4, 11.25, 0.776, 1, 2.535, -2.535, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0.031], [0.76, 0.538], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.846, b: -0.533, c: 0.533, d: 0.846, tx: 4.2, ty: 22.25},
						transform: [4.2, 22.25, 1, 1, 0.562, -0.562, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.181, 0.4], [0.577, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.974, b: 0.224, c: 0.192, d: 0.833, tx: 3.65, ty: 18.6},
						transform: [3.65, 18.6, 1, 0.855, 0.226, 2.915, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.4], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 0.144, b: 0.99, c: 0.99, d: -0.144, tx: 10.2, ty: 10.2},
						transform: [10.2, 10.2, 1, 1, 1.715, 1.427, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.42, 0], [0.747, 0.458], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.915, b: 0.4, c: 0.364, d: 0.833, tx: 3.55, ty: 15.7},
						transform: [3.55, 15.7, 0.999, 0.909, 0.412, 2.73, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.373, 0.325], [0.705, 0.668], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 20,
					},
				]
			},
			{
				name: "foot_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.65, ty: 25.7},
						transform: [4.65, 25.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.245, 0.305], [0.588, 0.662], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: -0.247, b: -0.967, c: 0.967, d: -0.247, tx: 12.25, ty: 18.95},
						transform: [12.25, 18.95, 0.998, 0.998, 1.821, -1.821, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.269, 0.528], [0.627, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: -0.656, b: -0.755, c: 0.755, d: -0.656, tx: 18.1, ty: 8.55},
						transform: [18.1, 8.55, 1, 1, 2.286, -2.286, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.391, 0], [0.721, 0.411], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: -0.131, b: -0.991, c: 0.991, d: -0.131, tx: 13.35, ty: 16.6},
						transform: [13.35, 16.6, 1, 1, 1.702, -1.702, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.362, 0.302], [0.694, 0.642], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.726, b: -0.685, c: 0.685, d: 0.726, tx: 6.1, ty: 20.6},
						transform: [6.1, 20.6, 0.998, 0.998, 0.757, -0.757, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.336, 0.332], [0.669, 0.665], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 20,
					},
				]
			},
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.698, b: 0.716, c: 0.716, d: 0.698, tx: -9.95, ty: -0.1},
						transform: [-9.95, -0.1, 1, 1, 0.798, 2.344, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.4], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.033, b: 0.999, c: 0.999, d: -0.033, tx: -7.35, ty: -6.15},
						transform: [-7.35, -6.15, 1, 1, 1.603, 1.538, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.781, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.218, b: 0.976, c: 0.976, d: 0.218, tx: -12.35, ty: 2.25},
						transform: [-12.35, 2.25, 1, 1, 1.351, 1.791, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.469], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 19,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.332, b: 0.943, c: 0.943, d: 0.332, tx: -9.15, ty: -6.8},
						transform: [-9.15, -6.8, 1, 1, 1.233, 1.909, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0.031], [0.76, 0.538], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.698, b: 0.716, c: 0.716, d: 0.698, tx: -9.95, ty: -0.1},
						transform: [-9.95, -0.1, 1, 1, 0.798, 2.344, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.181, 0.4], [0.577, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_ground_demon_arm9_x",
						instancename: "",
						matrix: {a: -0.043, b: 0.999, c: -0.999, d: -0.043, tx: -16.45, ty: 8},
						transform: [-16.45, 8, 1, 1, -1.614, 1.614, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.4], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_ground_demon_arm9_x",
						instancename: "",
						matrix: {a: 0.212, b: 0.977, c: -0.977, d: 0.212, tx: -6.8, ty: 4.9},
						transform: [-6.8, 4.9, 1, 1, -1.358, 1.358, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.781, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_ground_demon_arm9_x",
						instancename: "",
						matrix: {a: 0.156, b: 0.988, c: -0.988, d: 0.156, tx: -14.2, ty: 13.25},
						transform: [-14.2, 13.25, 1, 1, -1.414, 1.414, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.469], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 19,
						classname: "_ground_demon_arm9_x",
						instancename: "",
						matrix: {a: 0.224, b: 0.975, c: -0.975, d: 0.224, tx: -11.9, ty: 3.35},
						transform: [-11.9, 3.35, 1, 1, -1.345, 1.345, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0.031], [0.76, 0.538], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_ground_demon_arm9_x",
						instancename: "",
						matrix: {a: -0.043, b: 0.999, c: -0.999, d: -0.043, tx: -16.45, ty: 8},
						transform: [-16.45, 8, 1, 1, -1.614, 1.614, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.181, 0.4], [0.577, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "sword",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.806, b: -0.591, c: 0.591, d: 0.806, tx: -30.55, ty: 3.55},
						transform: [-30.55, 3.55, 1, 1, 0.633, -0.633, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.4], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.591, b: -0.807, c: 0.807, d: 0.591, tx: -22.05, ty: 3.55},
						transform: [-22.05, 3.55, 1, 1, 0.939, -0.939, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.781, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.541, b: -0.841, c: 0.841, d: 0.541, tx: -29, ty: 12.95},
						transform: [-29, 12.95, 1, 1, 1, -1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.469], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 19,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.289, b: -0.957, c: 0.957, d: 0.289, tx: -25.25, ty: 3.55},
						transform: [-25.25, 3.55, 1, 1, 1.278, -1.278, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0.031], [0.76, 0.538], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.806, b: -0.591, c: 0.591, d: 0.806, tx: -30.55, ty: 3.55},
						transform: [-30.55, 3.55, 1, 1, 0.633, -0.633, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.181, 0.4], [0.577, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 0.7},
						transform: [1.05, 0.7, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.4], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 1, b: -0.022, c: 0.022, d: 1, tx: 3.5, ty: -5.4},
						transform: [3.5, -5.4, 1, 1, 0.022, -0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.781, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 2.65},
						transform: [1.05, 2.65, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.469], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 19,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.035, c: 0.035, d: 0.999, tx: 3.6, ty: -6.45},
						transform: [3.6, -6.45, 1, 1, 0.035, -0.035, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0.031], [0.76, 0.538], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 0.7},
						transform: [1.05, 0.7, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.181, 0.4], [0.577, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 8,
					},
					{
						from: 9,
						to: 14,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.999, b: 0.043, c: 0.031, d: 0.715, tx: 1.15, ty: 20.55},
						transform: [1.15, 20.55, 1, 0.715, 0.043, 3.098, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.469], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 19,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.595, b: -0.804, c: -0.951, d: 0.704, tx: 4.9, ty: 11.25},
						transform: [4.9, 11.25, 1, 1.183, -0.934, -2.208, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0.031], [0.76, 0.538], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.974, b: 0.224, c: 0.192, d: 0.833, tx: 3.65, ty: 18.6},
						transform: [3.65, 18.6, 1, 0.855, 0.226, 2.915, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "foot2_x",
				keys: [
					{
						from: 0,
						to: 8,
					},
					{
						from: 9,
						to: 14,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.052, c: -0.052, d: 0.999, tx: 1.25, ty: 26.05},
						transform: [1.25, 26.05, 1, 1, -0.052, 0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.469], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 19,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.85, b: 0.526, c: -0.526, d: 0.85, tx: -2.5, ty: 16.05},
						transform: [-2.5, 16.05, 1, 1, -0.554, 0.554, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0.031], [0.76, 0.538], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.65, ty: 25.7},
						transform: [4.65, 25.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "head1",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 0.9, ty: -9.05},
						transform: [0.9, -9.05, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							rotation: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							scale: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							color: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							filters: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 0.999, b: 0.047, c: -0.047, d: 0.999, tx: 1.6, ty: -14.25},
						transform: [1.6, -14.25, 1, 1, -0.047, 0.047, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.781, 0.531], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 14,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 0.99, b: -0.139, c: 0.139, d: 0.99, tx: 1.55, ty: -6.55},
						transform: [1.55, -6.55, 1, 1, 0.139, -0.139, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.469], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 19,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 0.992, b: -0.126, c: 0.126, d: 0.992, tx: 2.15, ty: -16.25},
						transform: [2.15, -16.25, 1, 1, 0.126, -0.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0.031], [0.76, 0.538], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 0.9, ty: -9.05},
						transform: [0.9, -9.05, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							position: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							rotation: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							scale: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							color: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							filters: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
						}
					},
				]
			},
			{
				name: "helmet",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.988, b: 0.155, c: -0.155, d: 0.988, tx: 0.15, ty: -21.85},
						transform: [0.15, -21.85, 1, 1, -0.156, 0.156, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							rotation: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							scale: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							color: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							filters: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
						}
					},
					{
						from: 4,
						to: 10,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.999, b: 0.047, c: -0.047, d: 0.999, tx: 1.4, ty: -28.65},
						transform: [1.4, -28.65, 1, 1, -0.047, 0.047, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.781, 0.531], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 0.2, ty: -22.25},
						transform: [0.2, -22.25, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.469], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 19,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.998, b: -0.065, c: 0.065, d: 0.998, tx: -1.05, ty: -28.6},
						transform: [-1.05, -28.6, 1, 1, 0.066, -0.066, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0.031], [0.76, 0.538], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.988, b: 0.155, c: -0.155, d: 0.988, tx: 0.15, ty: -21.85},
						transform: [0.15, -21.85, 1, 1, -0.156, 0.156, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							position: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							rotation: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							scale: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							color: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							filters: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
						}
					},
				]
			},
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.991, b: 0.136, c: -0.136, d: 0.991, tx: 12.4, ty: -1.55},
						transform: [12.4, -1.55, 1, 1, -0.137, 0.137, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.4], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.623, b: 0.782, c: -0.782, d: 0.623, tx: 16.05, ty: -6.05},
						transform: [16.05, -6.05, 1, 1, -0.898, 0.898, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.781, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.933, b: 0.36, c: -0.36, d: 0.933, tx: 12.65, ty: 2.05},
						transform: [12.65, 2.05, 1, 1, -0.369, 0.369, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.469], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 19,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.1, c: -0.1, d: 0.995, tx: 14.8, ty: -9},
						transform: [14.8, -9, 1, 1, -0.101, 0.101, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0.031], [0.76, 0.538], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.991, b: 0.136, c: -0.136, d: 0.991, tx: 12.4, ty: -1.55},
						transform: [12.4, -1.55, 1, 1, -0.137, 0.137, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.181, 0.4], [0.577, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 22.55, ty: 1.95},
						transform: [22.55, 1.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.4], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.685, b: 0.728, c: -0.728, d: 0.685, tx: 20.3, ty: 3.2},
						transform: [20.3, 3.2, 1, 1, -0.816, 0.816, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.399, b: 0.917, c: -0.917, d: 0.399, tx: 19.8, ty: 3.85},
						transform: [19.8, 3.85, 1, 1, -1.16, 1.16, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.781, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.523, b: 0.852, c: -0.852, d: 0.523, tx: 20.7, ty: 7.85},
						transform: [20.7, 7.85, 1, 1, -1.021, 1.021, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.469], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.927, b: -0.374, c: 0.374, d: 0.927, tx: 26.8, ty: -5.6},
						transform: [26.8, -5.6, 1, 1, 0.384, -0.384, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0.031], [0.76, 0.538], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 19,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.897, b: -0.442, c: 0.442, d: 0.897, tx: 25.55, ty: -0.55},
						transform: [25.55, -0.55, 1, 1, 0.457, -0.457, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							rotation: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							scale: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							color: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							filters: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 22.55, ty: 1.95},
						transform: [22.55, 1.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.181, 0.4], [0.577, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "hittablebox",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_ground_demon_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -5.15, ty: -29.75},
						transform: [-5.15, -29.75, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.4], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_ground_demon_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -5.15, ty: -34.9},
						transform: [-5.15, -34.9, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.781, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_ground_demon_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -5.15, ty: -29.75},
						transform: [-5.15, -29.75, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.469], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 19,
						classname: "_ground_demon_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -5.15, ty: -34.9},
						transform: [-5.15, -34.9, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0.031], [0.76, 0.538], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_ground_demon_hittablebox",
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
						to: 3,
						classname: "_ground_demon_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.404, b: 0, c: 0, d: 0.205, tx: -40.45, ty: 8.75},
						transform: [-40.45, 8.75, 0.404, 0.205, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.4], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_ground_demon_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.404, b: 0, c: 0, d: 0.205, tx: -41.75, ty: 2.3},
						transform: [-41.75, 2.3, 0.404, 0.205, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.781, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_ground_demon_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.404, b: 0, c: 0, d: 0.205, tx: -44.3, ty: 11.7},
						transform: [-44.3, 11.7, 0.404, 0.205, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.469], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 19,
						classname: "_ground_demon_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.404, b: 0, c: 0, d: 0.205, tx: -44.65, ty: 2.95},
						transform: [-44.65, 2.95, 0.404, 0.205, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0.031], [0.76, 0.538], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_ground_demon_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.404, b: 0, c: 0, d: 0.205, tx: -40.45, ty: 8.75},
						transform: [-40.45, 8.75, 0.404, 0.205, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "step",
				keys: [
					{
						from: 0,
						to: 8,
					},
					{
						from: 9,
						to: 9,
						classname: "_ground_demon_common_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: -1.95, ty: 27},
						transform: [-1.95, 27, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 19,
					},
					{
						from: 20,
						to: 20,
						classname: "_ground_demon_common_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: 2.4, ty: 26.65},
						transform: [2.4, 26.65, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ground_demon_ground_demon_ground_stop": {
		type: "movieclip",
		fps: 30,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "leg_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.965, b: -0.262, c: -0.262, d: 0.965, tx: -3.85, ty: 18.8},
						transform: [-3.85, 18.8, 1, 1, -0.265, -2.876, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.438], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.918, b: -0.398, c: -0.443, d: 1.023, tx: -3.85, ty: 18.8},
						transform: [-3.85, 18.8, 1, 1.114, -0.409, -2.733, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1.023, tx: -3.85, ty: 18.1},
						transform: [-3.85, 18.1, 1, 1.023, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -3.85, ty: 18.2},
						transform: [-3.85, 18.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "foot2_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.862, b: 0.507, c: -0.507, d: 0.862, tx: -6.6, ty: 24.75},
						transform: [-6.6, 24.75, 1, 1, -0.532, 0.532, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.438], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.862, b: 0.507, c: -0.507, d: 0.862, tx: -7.5, ty: 24.75},
						transform: [-7.5, 24.75, 1, 1, -0.532, 0.532, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.35, ty: 25.2},
						transform: [-4.35, 25.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.35, ty: 25.2},
						transform: [-4.35, 25.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.94, b: -0.341, c: -0.341, d: 0.94, tx: 3.55, ty: 18.9},
						transform: [3.55, 18.9, 1, 1, -0.348, -2.793, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.438], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.905, b: -0.425, c: -0.503, d: 1.071, tx: 3.5, ty: 18.9},
						transform: [3.5, 18.9, 1, 1.183, -0.439, -2.702, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.451, 0], [0.754, 0.429], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.928, b: -0.374, c: -0.442, d: 1.098, tx: 4.75, ty: 17.85},
						transform: [4.75, 17.85, 1, 1.183, -0.383, -2.759, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.451, 0], [0.754, 0.429], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.9, ty: 18.55},
						transform: [2.9, 18.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.325, 0.401], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.084, tx: 5.75, ty: 17.95},
						transform: [5.75, 17.95, 1, 1.084, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5.75, ty: 18.45},
						transform: [5.75, 18.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "foot_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.901, b: 0.433, c: -0.433, d: 0.901, tx: 0.2, ty: 25.2},
						transform: [0.2, 25.2, 1, 1, -0.448, 0.448, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.438], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.901, b: 0.433, c: -0.433, d: 0.901, tx: -0.85, ty: 25.2},
						transform: [-0.85, 25.2, 1, 1, -0.448, 0.448, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.451, 0], [0.754, 0.429], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.946, b: 0.322, c: -0.322, d: 0.946, tx: 1.1, ty: 25.1},
						transform: [1.1, 25.1, 0.999, 0.999, -0.328, 0.328, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.325, 0.401], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.1, ty: 24.85},
						transform: [4.1, 24.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.75, ty: 24.7},
						transform: [6.75, 24.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.75, ty: 24.7},
						transform: [6.75, 24.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.156, b: 0.988, c: -0.988, d: 0.156, tx: -17.1, ty: 12.6},
						transform: [-17.1, 12.6, 1, 1, -1.414, 1.414, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.438], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.156, b: 0.988, c: -0.988, d: 0.156, tx: -15.15, ty: 15.85},
						transform: [-15.15, 15.85, 1, 1, -1.414, 1.414, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.079, b: 0.997, c: -0.997, d: 0.079, tx: -18.85, ty: 12.5},
						transform: [-18.85, 12.5, 1, 1, -1.491, 1.491, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.19, b: 0.982, c: -0.982, d: 0.19, tx: -17.05, ty: 5.4},
						transform: [-17.05, 5.4, 1, 1, -1.379, 1.379, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.368, b: 0.93, c: 0.93, d: 0.368, tx: -11.8, ty: 1.65},
						transform: [-11.8, 1.65, 1, 1, 1.194, 1.947, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.438], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.302, b: 0.953, c: 0.953, d: 0.302, tx: -11.1, ty: 3.35},
						transform: [-11.1, 3.35, 1, 1, 1.264, 1.878, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.439, b: 0.899, c: 0.899, d: 0.439, tx: -12.6, ty: 0.8},
						transform: [-12.6, 0.8, 1, 1, 1.117, 2.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.878, b: 0.478, c: 0.478, d: 0.878, tx: -8.65, ty: -0.3},
						transform: [-8.65, -0.3, 1, 1, 0.498, 2.644, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 0.55},
						transform: [1.05, 0.55, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.438], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: 1.6, ty: 1.35},
						transform: [1.6, 1.35, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: -0.5},
						transform: [1.05, -0.5, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 0.55},
						transform: [1.05, 0.55, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head1",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: -1.2, ty: -9.25},
						transform: [-1.2, -9.25, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.438], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 0.924, b: -0.382, c: 0.382, d: 0.924, tx: -2.65, ty: -5.75},
						transform: [-2.65, -5.75, 1, 1, 0.392, -0.392, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 0.982, b: -0.19, c: 0.19, d: 0.982, tx: 4.25, ty: -10.25},
						transform: [4.25, -10.25, 1, 1, 0.191, -0.191, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.1, ty: -8.9},
						transform: [1.1, -8.9, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "helmet",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -5.5, ty: -20.8},
						transform: [-5.5, -20.8, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.438], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.924, b: -0.381, c: 0.381, d: 0.924, tx: -10.55, ty: -18.65},
						transform: [-10.55, -18.65, 1, 1, 0.391, -0.391, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.993, b: -0.117, c: 0.117, d: 0.993, tx: -0.15, ty: -23.8},
						transform: [-0.15, -23.8, 1, 1, 0.117, -0.117, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.978, b: 0.124, c: -0.124, d: 0.978, tx: 0.1, ty: -21.7},
						transform: [0.1, -21.7, 0.986, 0.986, -0.126, 0.126, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.884, b: -0.468, c: 0.468, d: 0.884, tx: 11, ty: -1.55},
						transform: [11, -1.55, 1, 1, 0.487, -0.487, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.438], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.809, b: -0.588, c: 0.588, d: 0.809, tx: 11.9, ty: -1.8},
						transform: [11.9, -1.8, 1, 1, 0.629, -0.629, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.638, b: 0.77, c: -0.77, d: 0.638, tx: 13.1, ty: -2.75},
						transform: [13.1, -2.75, 1, 1, -0.879, 0.879, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.991, b: 0.136, c: -0.136, d: 0.991, tx: 12.4, ty: -1.55},
						transform: [12.4, -1.55, 1, 1, -0.137, 0.137, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.749, b: -0.662, c: 0.662, d: 0.749, tx: 21.15, ty: -4.85},
						transform: [21.15, -4.85, 1, 1, 0.724, -0.724, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.438], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.695, b: -0.719, c: 0.719, d: 0.695, tx: 21.95, ty: -6.75},
						transform: [21.95, -6.75, 1, 1, 0.802, -0.802, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.735, b: -0.678, c: 0.678, d: 0.735, tx: 19.7, ty: 5.3},
						transform: [19.7, 5.3, 1, 1, 0.745, -0.745, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 22.55, ty: 1.95},
						transform: [22.55, 1.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "sword",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.394, b: -0.919, c: 0.919, d: 0.394, tx: -30.3, ty: 11.2},
						transform: [-30.3, 11.2, 1, 1, 1.165, -1.165, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 0.438], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.659, b: -0.752, c: 0.752, d: 0.659, tx: -29.45, ty: 15.4},
						transform: [-29.45, 15.4, 1, 1, 0.852, -0.852, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.957, b: -0.289, c: 0.289, d: 0.957, tx: -31.25, ty: 9.7},
						transform: [-31.25, 9.7, 1, 1, 0.293, -0.293, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.957, b: -0.289, c: 0.289, d: 0.957, tx: -31.3, ty: 3.95},
						transform: [-31.3, 3.95, 1, 1, 0.293, -0.293, NaN],
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
						to: 4,
						classname: "_ground_demon_hittablebox",
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
						from: 5,
						to: 9,
						classname: "_ground_demon_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -8.05, ty: -26.35},
						transform: [-8.05, -26.35, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_ground_demon_hittablebox",
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
						from: 14,
						to: 14,
						classname: "_ground_demon_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -0.15, ty: -27.25},
						transform: [-0.15, -27.25, 0.378, 0.2, 0, 0, 0],
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
						to: 13,
						classname: "_ground_demon_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.404, b: 0, c: 0, d: 0.205, tx: -42.9, ty: 5.1},
						transform: [-42.9, 5.1, 0.404, 0.205, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.556, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_ground_demon_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.162, b: 0, c: 0, d: 0.333, tx: -38.15, ty: -11.7},
						transform: [-38.15, -11.7, 0.162, 0.333, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "step",
				keys: [
					{
						from: 0,
						to: 1,
					},
					{
						from: 2,
						to: 2,
						classname: "_ground_demon_common_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: -5.15, ty: 25.8},
						transform: [-5.15, 25.8, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
					},
					{
						from: 4,
						to: 4,
						classname: "_ground_demon_common_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: -5, ty: 25.8},
						transform: [-5, 25.8, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
					},
					{
						from: 6,
						to: 6,
						classname: "_ground_demon_common_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: -4.4, ty: 25.8},
						transform: [-4.4, 25.8, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 8,
					},
					{
						from: 9,
						to: 9,
						classname: "_ground_demon_common_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: -2, ty: 25.5},
						transform: [-2, 25.5, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 14,
					},
				]
			},
			{
				name: "Capa 2",
				keys: [
					{
						from: 0,
						to: 13,
					},
					{
						from: 14,
						to: 14,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_ground_demon_ground_demon_ground_turn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 14,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 13,
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
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 13,
					},
				]
			},
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 13,
					},
				]
			},
			{
				name: "Layer 6",
				keys: [
					{
						from: 0,
						to: 13,
					},
				]
			},
			{
				name: "Layer 7",
				keys: [
					{
						from: 0,
						to: 13,
					},
				]
			},
			{
				name: "leg_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -3.85, ty: 18.2},
						transform: [-3.85, 18.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.807, tx: -3.85, ty: 19.6},
						transform: [-3.85, 19.6, 1, 0.807, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.588, 0.9], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.921, tx: 3.85, ty: 18.8},
						transform: [3.85, 18.8, 1, 0.921, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.85, ty: 18.2},
						transform: [3.85, 18.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.316, 0.654], [0.648, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "foot2_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.35, ty: 25.2},
						transform: [-4.35, 25.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.861, tx: -4.35, ty: 25.45},
						transform: [-4.35, 25.45, 1, 0.861, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.588, 0.9], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 3.9, ty: 25.25},
						transform: [3.9, 25.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 4.35, ty: 25.2},
						transform: [4.35, 25.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.316, 0.654], [0.648, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5.75, ty: 18.45},
						transform: [5.75, 18.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 1.313, b: 0, c: 0, d: 0.901, tx: 5.75, ty: 19.2},
						transform: [5.75, 19.2, 1.313, 0.901, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.588, 0.9], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -5.75, ty: 18.45},
						transform: [-5.75, 18.45, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -5.75, ty: 18.45},
						transform: [-5.75, 18.45, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.316, 0.654], [0.648, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "foot_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.75, ty: 24.7},
						transform: [6.75, 24.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.55, ty: 25.05},
						transform: [7.55, 25.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.588, 0.9], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -6.75, ty: 24.7},
						transform: [-6.75, 24.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -6.75, ty: 24.7},
						transform: [-6.75, 24.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.316, 0.654], [0.648, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.878, b: 0.478, c: 0.478, d: 0.878, tx: -8.65, ty: -0.3},
						transform: [-8.65, -0.3, 1, 1, 0.498, 2.644, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.122, b: 0.992, c: 0.992, d: 0.122, tx: -8.65, ty: -0.4},
						transform: [-8.65, -0.4, 1, 1, 1.448, 1.693, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.588, 0.9], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.039, b: 0.999, c: -0.999, d: 0.039, tx: 8.55, ty: -0.4},
						transform: [8.55, -0.4, 1, 1, -1.532, 1.532, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.878, b: 0.478, c: -0.478, d: 0.878, tx: 8.65, ty: -0.3},
						transform: [8.65, -0.3, 1, 1, -0.498, 0.498, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.316, 0.654], [0.648, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.19, b: 0.982, c: -0.982, d: 0.19, tx: -17.05, ty: 5.4},
						transform: [-17.05, 5.4, 1, 1, -1.379, 1.379, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.947, b: -0.32, c: 0.32, d: 0.947, tx: -8.8, ty: 10.45},
						transform: [-8.8, 10.45, 1, 1, 0.326, -0.326, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.588, 0.9], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: -0.952, b: 0.305, c: 0.305, d: 0.952, tx: 6.65, ty: 7.15},
						transform: [6.65, 7.15, 1, 1, 0.31, 2.831, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: -0.19, b: 0.982, c: 0.982, d: 0.19, tx: 17.05, ty: 5.4},
						transform: [17.05, 5.4, 1, 1, 1.379, 1.762, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.316, 0.654], [0.648, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 0.55},
						transform: [1.05, 0.55, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 1.08, b: 0.037, c: -0.031, d: 0.917, tx: 1, ty: 2.05},
						transform: [1, 2.05, 1.08, 0.918, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.588, 0.9], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: -1.08, b: 0.037, c: 0.031, d: 0.917, tx: -0.75, ty: 2.05},
						transform: [-0.75, 2.05, 1.08, 0.918, 0.034, 3.108, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: -0.999, b: 0.034, c: 0.034, d: 0.999, tx: -1.05, ty: 0.55},
						transform: [-1.05, 0.55, 1, 1, 0.034, 3.108, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.316, 0.654], [0.648, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "sword",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.957, b: -0.289, c: 0.289, d: 0.957, tx: -31.3, ty: 3.95},
						transform: [-31.3, 3.95, 1, 1, 0.293, -0.293, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.284, b: -0.959, c: 0.959, d: 0.284, tx: -10.05, ty: 18.75},
						transform: [-10.05, 18.75, 1, 1, 1.283, -1.283, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.537, 0], [0.588, 0.9], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: -0.207, b: -0.978, c: -0.978, d: 0.207, tx: 14.75, ty: 19},
						transform: [14.75, 19, 1, 1, -1.362, -1.779, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: -0.957, b: -0.289, c: -0.289, d: 0.957, tx: 31.3, ty: 3.95},
						transform: [31.3, 3.95, 1, 1, -0.293, -2.848, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.316, 0.654], [0.649, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.991, b: 0.136, c: -0.136, d: 0.991, tx: 12.4, ty: -1.55},
						transform: [12.4, -1.55, 1, 1, -0.137, 0.137, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.256, b: 0.967, c: -0.967, d: -0.256, tx: 12.35, ty: 0.15},
						transform: [12.35, 0.15, 1, 1, -1.83, 1.83, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.588, 0.9], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.185, b: 0.983, c: 0.983, d: 0.185, tx: -12.45, ty: -1.6},
						transform: [-12.45, -1.6, 1, 1, 1.384, 1.757, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.991, b: 0.136, c: 0.136, d: 0.991, tx: -12.4, ty: -1.55},
						transform: [-12.4, -1.55, 1, 1, 0.137, 3.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.316, 0.654], [0.648, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "head1",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.1, ty: -8.9},
						transform: [1.1, -8.9, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 0.99, b: -0.139, c: 0.139, d: 0.99, tx: 2.5, ty: -6.35},
						transform: [2.5, -6.35, 1, 1, 0.139, -0.139, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.588, 0.9], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: -0.989, b: -0.147, c: -0.147, d: 0.989, tx: -1.55, ty: -7.5},
						transform: [-1.55, -7.5, 1, 1, -0.148, -2.994, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: -1, b: 0.022, c: 0.022, d: 1, tx: -1.1, ty: -8.9},
						transform: [-1.1, -8.9, 1, 1, 0.022, 3.12, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.316, 0.654], [0.648, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "helmet",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.978, b: 0.124, c: -0.124, d: 0.978, tx: 0.1, ty: -21.7},
						transform: [0.1, -21.7, 0.986, 0.986, -0.126, 0.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.985, b: -0.035, c: 0.035, d: 0.985, tx: -0.55, ty: -18.75},
						transform: [-0.55, -18.75, 0.986, 0.986, 0.035, -0.035, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.588, 0.9], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: -0.985, b: -0.043, c: -0.043, d: 0.985, tx: 1.65, ty: -19.95},
						transform: [1.65, -19.95, 0.986, 0.986, -0.044, -3.098, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: -0.978, b: 0.124, c: 0.124, d: 0.978, tx: -0.1, ty: -21.7},
						transform: [-0.1, -21.7, 0.986, 0.986, 0.126, 3.016, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.316, 0.654], [0.648, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 22.55, ty: 1.95},
						transform: [22.55, 1.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.833, b: 0.552, c: -0.552, d: 0.833, tx: 20.5, ty: 6.25},
						transform: [20.5, 6.25, 0.999, 0.999, -0.585, 0.585, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.822, b: 0.567, c: -0.567, d: 0.822, tx: 14.55, ty: 10.5},
						transform: [14.55, 10.5, 0.998, 0.998, -0.604, 0.604, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.817, b: 0.576, c: -0.576, d: 0.817, tx: 7.85, ty: 11.6},
						transform: [7.85, 11.6, 1, 1, -0.614, 0.614, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.588, 0.9], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: -0.56, b: 0.829, c: 0.829, d: 0.56, tx: -13.4, ty: 9.25},
						transform: [-13.4, 9.25, 1, 1, 0.977, 2.165, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -22.55, ty: 1.95},
						transform: [-22.55, 1.95, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.316, 0.654], [0.648, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "hittablebox",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_ground_demon_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -0.15, ty: -27.25},
						transform: [-0.15, -27.25, 0.378, 0.2, 0, 0, 0],
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
						to: 4,
						classname: "_ground_demon_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.162, b: 0, c: 0, d: 0.333, tx: -38.15, ty: -11.7},
						transform: [-38.15, -11.7, 0.162, 0.333, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 13,
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
	"_ground_demon_ground_demon_waiting": {
		type: "movieclip",
		fps: 30,
		totalFrames: 45,
		labels: {},
		layers: [
			{
				name: "leg_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.623, b: -0.783, c: -0.783, d: 0.623, tx: -7.4, ty: 24.3},
						transform: [-7.4, 24.3, 1, 1, -0.899, -2.243, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 43,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.623, b: -0.783, c: -0.783, d: 0.623, tx: -7.4, ty: 24.3},
						transform: [-7.4, 24.3, 1, 1, -0.899, -2.243, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 44,
						to: 44,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.623, b: -0.783, c: -0.783, d: 0.623, tx: -7.4, ty: 24.3},
						transform: [-7.4, 24.3, 1, 1, -0.899, -2.243, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "foot2_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.623, b: 0.783, c: -0.783, d: 0.623, tx: -13.15, ty: 28.25},
						transform: [-13.15, 28.25, 1, 1, -0.899, 0.899, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 43,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.623, b: 0.783, c: -0.783, d: 0.623, tx: -13.15, ty: 28.25},
						transform: [-13.15, 28.25, 1, 1, -0.899, 0.899, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 44,
						to: 44,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.623, b: 0.783, c: -0.783, d: 0.623, tx: -13.15, ty: 28.25},
						transform: [-13.15, 28.25, 1, 1, -0.899, 0.899, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 0.47, b: -0.883, c: 0.883, d: 0.47, tx: 9, ty: 23.4},
						transform: [9, 23.4, 1, 1, 1.082, -1.082, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 43,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 0.47, b: -0.883, c: 0.883, d: 0.47, tx: 9, ty: 23.4},
						transform: [9, 23.4, 1, 1, 1.082, -1.082, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 44,
						to: 44,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 0.47, b: -0.883, c: 0.883, d: 0.47, tx: 9, ty: 23.4},
						transform: [9, 23.4, 1, 1, 1.082, -1.082, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "foot_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 0.47, b: -0.883, c: 0.883, d: 0.47, tx: 15, ty: 25.5},
						transform: [15, 25.5, 1, 1, 1.082, -1.082, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 43,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 0.47, b: -0.883, c: 0.883, d: 0.47, tx: 15, ty: 25.5},
						transform: [15, 25.5, 1, 1, 1.082, -1.082, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 44,
						to: 44,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 0.47, b: -0.883, c: 0.883, d: 0.47, tx: 15, ty: 25.5},
						transform: [15, 25.5, 1, 1, 1.082, -1.082, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.878, b: 0.478, c: 0.478, d: 0.878, tx: -8.9, ty: 11.35},
						transform: [-8.9, 11.35, 1, 1, 0.498, 2.644, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 43,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.71, b: 0.704, c: 0.704, d: 0.71, tx: -10, ty: 6.6},
						transform: [-10, 6.6, 1, 1, 0.781, 2.36, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 44,
						to: 44,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.878, b: 0.478, c: 0.478, d: 0.878, tx: -8.9, ty: 11.35},
						transform: [-8.9, 11.35, 1, 1, 0.498, 2.644, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm8_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.329, b: 0.944, c: -0.944, d: 0.329, tx: -16.8, ty: 17.65},
						transform: [-16.8, 17.65, 1, 1, -1.235, 1.235, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 43,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.491, b: 0.871, c: -0.871, d: 0.491, tx: -16.55, ty: 14.9},
						transform: [-16.55, 14.9, 1, 1, -1.058, 1.058, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 44,
						to: 44,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.329, b: 0.944, c: -0.944, d: 0.329, tx: -16.8, ty: 17.65},
						transform: [-16.8, 17.65, 1, 1, -1.235, 1.235, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "axe_1_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.965, b: -0.261, c: 0.261, d: 0.965, tx: -28.3, ty: 16.85},
						transform: [-28.3, 16.85, 1, 1, 0.264, -0.264, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 43,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.918, b: -0.397, c: 0.397, d: 0.918, tx: -28.15, ty: 15.35},
						transform: [-28.15, 15.35, 1, 1, 0.408, -0.408, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 44,
						to: 44,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.965, b: -0.261, c: 0.261, d: 0.965, tx: -28.3, ty: 16.85},
						transform: [-28.3, 16.85, 1, 1, 0.264, -0.264, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.032, d: 0.938, tx: 1, ty: 9.6},
						transform: [1, 9.6, 1, 0.938, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 43,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 1.052, b: 0.036, c: -0.035, d: 1.036, tx: 1.05, ty: 7.8},
						transform: [1.05, 7.8, 1.053, 1.037, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 44,
						to: 44,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.032, d: 0.938, tx: 1, ty: 9.6},
						transform: [1, 9.6, 1, 0.938, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.529, b: 0.849, c: -0.849, d: 0.529, tx: 11.55, ty: 9.95},
						transform: [11.55, 9.95, 1, 1, -1.014, 1.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 43,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.529, b: 0.849, c: -0.849, d: 0.529, tx: 12.15, ty: 9.15},
						transform: [12.15, 9.15, 1, 1, -1.014, 1.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 44,
						to: 44,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.529, b: 0.849, c: -0.849, d: 0.529, tx: 11.55, ty: 9.95},
						transform: [11.55, 9.95, 1, 1, -1.014, 1.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "head_idle",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_ground_demon_head_waiting",
						instancename: "",
						matrix: {a: 0.975, b: -0.22, c: 0.22, d: 0.975, tx: 1.8, ty: 5.1},
						transform: [1.8, 5.1, 1, 1, 0.222, -0.222, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 43,
						classname: "_ground_demon_head_waiting",
						instancename: "",
						matrix: {a: 0.994, b: -0.109, c: 0.109, d: 0.994, tx: 0.35, ty: 2.1},
						transform: [0.35, 2.1, 1, 1, 0.109, -0.109, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 44,
						to: 44,
						classname: "_ground_demon_head_waiting",
						instancename: "",
						matrix: {a: 0.975, b: -0.22, c: 0.22, d: 0.975, tx: 1.8, ty: 5.1},
						transform: [1.8, 5.1, 1, 1, 0.222, -0.222, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "helmet",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.979, b: -0.116, c: 0.116, d: 0.979, tx: -2.25, ty: -7.1},
						transform: [-2.25, -7.1, 0.986, 0.986, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 43,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.986, b: -0.005, c: 0.005, d: 0.986, tx: -2.35, ty: -10.45},
						transform: [-2.35, -10.45, 0.986, 0.986, 0.005, -0.005, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 44,
						to: 44,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.979, b: -0.116, c: 0.116, d: 0.979, tx: -2.25, ty: -7.1},
						transform: [-2.25, -7.1, 0.986, 0.986, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: -0.667, b: -0.745, c: -0.745, d: 0.667, tx: 14.15, ty: 19.1},
						transform: [14.15, 19.1, 1, 1, -0.841, -2.301, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 43,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: -0.708, b: -0.706, c: -0.706, d: 0.708, tx: 14.3, ty: 18},
						transform: [14.3, 18, 1, 1, -0.784, -2.358, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
					{
						from: 44,
						to: 44,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: -0.667, b: -0.745, c: -0.745, d: 0.667, tx: 14.15, ty: 19.1},
						transform: [14.15, 19.1, 1, 1, -0.841, -2.301, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.419, 0], [0.451, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "hittablebox",
				keys: [
					{
						from: 0,
						to: 44,
						classname: "_ground_demon_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.383, b: 0, c: 0, d: 0.188, tx: -2.65, ty: -16.2},
						transform: [-2.65, -16.2, 0.383, 0.188, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ground_demon_ground_demon_spawn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 25,
		labels: {},
		layers: [
			{
				name: "leg_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.623, b: -0.783, c: -0.783, d: 0.623, tx: -7.4, ty: 24.3},
						transform: [-7.4, 24.3, 1, 1, -0.899, -2.243, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.623, b: -0.783, c: -0.783, d: 0.623, tx: -7.4, ty: 24.3},
						transform: [-7.4, 24.3, 1, 1, -0.899, -2.243, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 5,
						to: 13,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -1.318, b: 0, c: 0, d: 0.723, tx: -5, ty: 20.25},
						transform: [-5, 20.25, 1.318, 0.723, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.817, b: 0.577, c: 0.577, d: 0.817, tx: -4.65, ty: -3.85},
						transform: [-4.65, -3.85, 1, 1, 0.615, 2.527, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 19,
						to: 23,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -1.225, b: 0, c: 0, d: 0.842, tx: -3.85, ty: 19.35},
						transform: [-3.85, 19.35, 1.225, 0.842, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -3.85, ty: 18.2},
						transform: [-3.85, 18.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "foot2_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.623, b: 0.783, c: -0.783, d: 0.623, tx: -13.15, ty: 28.25},
						transform: [-13.15, 28.25, 1, 1, -0.899, 0.899, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.623, b: 0.783, c: -0.783, d: 0.623, tx: -13.15, ty: 28.25},
						transform: [-13.15, 28.25, 1, 1, -0.899, 0.899, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 5,
						to: 13,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.35, ty: 25.2},
						transform: [-4.35, 25.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.817, b: -0.577, c: 0.577, d: 0.817, tx: -1, ty: 2.2},
						transform: [-1, 2.2, 1, 1, 0.615, -0.615, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 19,
						to: 23,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.35, ty: 25.2},
						transform: [-4.35, 25.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.35, ty: 25.2},
						transform: [-4.35, 25.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 0.47, b: -0.883, c: 0.883, d: 0.47, tx: 9, ty: 23.4},
						transform: [9, 23.4, 1, 1, 1.082, -1.082, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 0.47, b: -0.883, c: 0.883, d: 0.47, tx: 9, ty: 23.4},
						transform: [9, 23.4, 1, 1, 1.082, -1.082, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 5,
						to: 13,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 1.587, b: 0, c: 0, d: 0.733, tx: 5.75, ty: 20.4},
						transform: [5.75, 20.4, 1.587, 0.733, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 0.827, b: -0.563, c: 0.563, d: 0.827, tx: 8, ty: -7.05},
						transform: [8, -7.05, 1, 1, 0.597, -0.597, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 19,
						to: 23,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 1.175, b: 0, c: 0, d: 0.842, tx: 5.75, ty: 19.6},
						transform: [5.75, 19.6, 1.175, 0.842, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5.75, ty: 18.45},
						transform: [5.75, 18.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "foot_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 0.47, b: -0.883, c: 0.883, d: 0.47, tx: 15, ty: 25.5},
						transform: [15, 25.5, 1, 1, 1.082, -1.082, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 0.47, b: -0.883, c: 0.883, d: 0.47, tx: 15, ty: 25.5},
						transform: [15, 25.5, 1, 1, 1.082, -1.082, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 5,
						to: 13,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.75, ty: 24.7},
						transform: [6.75, 24.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 0.827, b: -0.563, c: 0.563, d: 0.827, tx: 12.35, ty: -2.4},
						transform: [12.35, -2.4, 1, 1, 0.597, -0.597, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 19,
						to: 23,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.75, ty: 24.7},
						transform: [6.75, 24.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.75, ty: 24.7},
						transform: [6.75, 24.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.878, b: 0.478, c: 0.478, d: 0.878, tx: -8.9, ty: 11.35},
						transform: [-8.9, 11.35, 1, 1, 0.498, 2.644, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.878, b: 0.478, c: 0.478, d: 0.878, tx: -16.25, ty: 16.45},
						transform: [-16.25, 16.45, 1, 1, 0.498, 2.644, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 5,
						to: 11,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.632, b: 0.775, c: 0.775, d: 0.632, tx: -10.45, ty: 4.6},
						transform: [-10.45, 4.6, 1, 1, 0.886, 2.256, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 17,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.575, b: -0.818, c: -0.818, d: 0.575, tx: -9.95, ty: -25.25},
						transform: [-9.95, -25.25, 1, 1, -0.958, -2.183, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 18,
						to: 21,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.993, b: 0.119, c: 0.119, d: 0.993, tx: -9.5, ty: 2.55},
						transform: [-9.5, 2.55, 1, 1, 0.119, 3.023, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 23,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.725, b: 0.688, c: 0.688, d: 0.725, tx: -7.85, ty: 2.4},
						transform: [-7.85, 2.4, 1, 1, 0.759, 2.382, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.878, b: 0.478, c: 0.478, d: 0.878, tx: -8.65, ty: -0.3},
						transform: [-8.65, -0.3, 1, 1, 0.498, 2.644, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm8_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.329, b: 0.944, c: -0.944, d: 0.329, tx: -16.8, ty: 17.65},
						transform: [-16.8, 17.65, 1, 1, -1.235, 1.235, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: -0.25, b: 0.968, c: -0.968, d: -0.25, tx: -24.9, ty: 22.45},
						transform: [-24.9, 22.45, 1, 1, -1.824, 1.824, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 5,
						to: 11,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.19, b: 0.982, c: -0.982, d: 0.19, tx: -16.5, ty: 14},
						transform: [-16.5, 14, 1, 1, -1.379, 1.379, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 17,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: -0.848, b: 0.53, c: -0.53, d: -0.848, tx: -16.65, ty: -32.8},
						transform: [-16.65, -32.8, 1, 1, -2.583, 2.583, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 18,
						to: 21,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: -0.525, b: 0.851, c: -0.851, d: -0.525, tx: -19.8, ty: 4.45},
						transform: [-19.8, 4.45, 1, 1, -2.124, 2.124, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 23,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.087, b: 0.996, c: -0.996, d: 0.087, tx: -14.95, ty: 10.1},
						transform: [-14.95, 10.1, 1, 1, -1.483, 1.483, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.19, b: 0.982, c: -0.982, d: 0.19, tx: -17.05, ty: 5.4},
						transform: [-17.05, 5.4, 1, 1, -1.379, 1.379, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "axe_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.965, b: -0.261, c: 0.261, d: 0.965, tx: -28.3, ty: 16.85},
						transform: [-28.3, 16.85, 1, 1, 0.264, -0.264, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.97, b: -0.244, c: 0.244, d: 0.97, tx: -34, ty: 15.4},
						transform: [-34, 15.4, 1, 1, 0.246, -0.246, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 5,
						to: 11,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.668, b: -0.744, c: 0.744, d: 0.668, tx: -30.75, ty: 12.55},
						transform: [-30.75, 12.55, 1, 1, 0.839, -0.839, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 17,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.974, b: 0.224, c: -0.224, d: 0.974, tx: -21.4, ty: -47},
						transform: [-21.4, -47, 1, 1, -0.226, 0.226, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 18,
						to: 21,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.05, c: 0.05, d: 0.999, tx: -31.55, ty: -6.8},
						transform: [-31.55, -6.8, 1, 1, 0.05, -0.05, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 23,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.771, b: -0.637, c: 0.637, d: 0.771, tx: -31.15, ty: 8.1},
						transform: [-31.15, 8.1, 1, 1, 0.691, -0.691, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.957, b: -0.289, c: 0.289, d: 0.957, tx: -31.3, ty: 3.95},
						transform: [-31.3, 3.95, 1, 1, 0.293, -0.293, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.032, d: 0.938, tx: 1, ty: 9.6},
						transform: [1, 9.6, 1, 0.938, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.032, d: 0.938, tx: 1, ty: 9.6},
						transform: [1, 9.6, 1, 0.938, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 5,
						to: 13,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 1.101, b: 0.038, c: -0.029, d: 0.841, tx: 1.1, ty: 5.85},
						transform: [1.1, 5.85, 1.102, 0.842, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: -23.65},
						transform: [1.05, -23.65, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 19,
						to: 23,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 1.062, b: 0.036, c: -0.033, d: 0.954, tx: 1, ty: 2.9},
						transform: [1, 2.9, 1.063, 0.955, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 0.55},
						transform: [1.05, 0.55, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.529, b: 0.849, c: -0.849, d: 0.529, tx: 11.55, ty: 9.95},
						transform: [11.55, 9.95, 1, 1, -1.014, 1.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.529, b: 0.849, c: -0.849, d: 0.529, tx: 11.55, ty: 9.95},
						transform: [11.55, 9.95, 1, 1, -1.014, 1.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.994, b: -0.112, c: 0.112, d: 0.994, tx: 14.65, ty: 6.15},
						transform: [14.65, 6.15, 1, 1, 0.112, -0.112, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 15,
						to: 19,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.79, b: 0.614, c: -0.614, d: 0.79, tx: 12.4, ty: -25.8},
						transform: [12.4, -25.8, 1, 1, -0.661, 0.661, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 20,
						to: 23,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.992, b: -0.129, c: 0.129, d: 0.992, tx: 12.9, ty: 1.25},
						transform: [12.9, 1.25, 1, 1, 0.129, -0.129, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.991, b: 0.136, c: -0.136, d: 0.991, tx: 12.4, ty: -1.55},
						transform: [12.4, -1.55, 1, 1, -0.137, 0.137, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_idle",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_ground_demon_head_waiting",
						instancename: "",
						matrix: {a: 0.975, b: -0.22, c: 0.22, d: 0.975, tx: 1.8, ty: 5.1},
						transform: [1.8, 5.1, 1, 1, 0.222, -0.222, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_ground_demon_head_waiting",
						instancename: "",
						matrix: {a: 0.975, b: -0.22, c: 0.22, d: 0.975, tx: 1.8, ty: 10.05},
						transform: [1.8, 10.05, 1, 1, 0.222, -0.222, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 5,
						to: 13,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -0.1, ty: -1.65},
						transform: [-0.1, -1.65, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 0.988, b: 0.155, c: -0.155, d: 0.988, tx: 1.65, ty: -33.75},
						transform: [1.65, -33.75, 1, 1, -0.156, 0.156, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 19,
						to: 23,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 0.991, b: -0.13, c: 0.13, d: 0.991, tx: 2.05, ty: -4.5},
						transform: [2.05, -4.5, 1, 1, 0.131, -0.131, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.1, ty: -8.9},
						transform: [1.1, -8.9, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "helmet",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.979, b: -0.116, c: 0.116, d: 0.979, tx: -2.25, ty: -7.1},
						transform: [-2.25, -7.1, 0.986, 0.986, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.979, b: -0.116, c: 0.116, d: 0.979, tx: -2.25, ty: -2.15},
						transform: [-2.25, -2.15, 0.986, 0.986, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.978, b: 0.124, c: -0.124, d: 0.978, tx: -1.1, ty: -14.45},
						transform: [-1.1, -14.45, 0.986, 0.986, -0.126, 0.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 15,
						to: 19,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.953, b: 0.254, c: -0.254, d: 0.953, tx: 2.35, ty: -46.6},
						transform: [2.35, -46.6, 0.986, 0.986, -0.26, 0.26, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 20,
						to: 23,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.986, b: -0.026, c: 0.026, d: 0.986, tx: -0.9, ty: -17},
						transform: [-0.9, -17, 0.986, 0.986, 0.027, -0.027, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.978, b: 0.124, c: -0.124, d: 0.978, tx: 0.1, ty: -21.7},
						transform: [0.1, -21.7, 0.986, 0.986, -0.126, 0.126, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: -0.667, b: -0.745, c: -0.745, d: 0.667, tx: 14.15, ty: 19.1},
						transform: [14.15, 19.1, 1, 1, -0.841, -2.301, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: -0.667, b: -0.745, c: -0.745, d: 0.667, tx: 14.15, ty: 19.1},
						transform: [14.15, 19.1, 1, 1, -0.841, -2.301, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.98, b: 0.199, c: -0.199, d: 0.98, tx: 25.15, ty: 7.15},
						transform: [25.15, 7.15, 1, 1, -0.201, 0.201, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 15,
						to: 19,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.574, b: -0.819, c: 0.819, d: 0.574, tx: 20.15, ty: -19.2},
						transform: [20.15, -19.2, 1, 1, 0.959, -0.959, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 20,
						to: 23,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.98, b: -0.198, c: 0.198, d: 0.98, tx: 24.15, ty: 1.95},
						transform: [24.15, 1.95, 1, 1, 0.2, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 22.55, ty: 1.95},
						transform: [22.55, 1.95, 1, 1, 0, 0, 0],
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
						to: 23,
					},
					{
						from: 24,
						to: 24,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 24,
						classname: "_ground_demon_common_fx_spawn",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 26.65},
						transform: [0, 26.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ground_demon_common_devil_wings_crash": {
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
						classname: "_ground_demon_banana_crash_part_2",
						instancename: "crash_part_1",
						matrix: {a: 0.947, b: 0.262, c: -0.262, d: 0.947, tx: 6.15, ty: -16.5},
						transform: [6.15, -16.5, 0.982, 0.982, -0.27, 0.27, NaN],
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
						classname: "_ground_demon_banana_crash_part_1",
						instancename: "crash_part_1",
						matrix: {a: 0.644, b: -0.741, c: 0.741, d: 0.644, tx: 3.2, ty: -9.2},
						transform: [3.2, -9.2, 0.982, 0.982, 0.855, -0.855, NaN],
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
						classname: "_ground_demon_banana_crash_part_2",
						instancename: "crash_part_1",
						matrix: {a: 0.86, b: 0.06, c: -0.06, d: 0.86, tx: 6.75, ty: -6.4},
						transform: [6.75, -6.4, 0.862, 0.862, -0.07, 0.07, NaN],
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
						classname: "_ground_demon_banana_crash_part_1",
						instancename: "crash_part_1",
						matrix: {a: -0.609, b: 0.117, c: 0.126, d: 0.657, tx: -12.2, ty: -9.3},
						transform: [-12.2, -9.3, 0.62, 0.67, 0.19, 2.952, NaN],
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
						classname: "_ground_demon_banana_crash_part_1",
						instancename: "crash_part_1",
						matrix: {a: -0.789, b: 0.452, c: 0.488, d: 0.852, tx: 7.35, ty: 4},
						transform: [7.35, 4, 0.909, 0.982, 0.52, 2.621, NaN],
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
						classname: "_ground_demon_banana_crash_part_2",
						instancename: "crash_part_1",
						matrix: {a: -0.004, b: 0.909, c: 0.982, d: 0.005, tx: -6.8, ty: 14.75},
						transform: [-6.8, 14.75, 0.909, 0.982, 1.566, 1.575, NaN],
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
						classname: "_ground_demon_banana_crash_part_1",
						instancename: "crash_part_1",
						matrix: {a: 0.813, b: 0.464, c: -0.464, d: 0.813, tx: -9.95, ty: 11.35},
						transform: [-9.95, 11.35, 0.936, 0.936, -0.519, 0.519, NaN],
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
						classname: "_ground_demon_banana_crash_part_2",
						instancename: "crash_part_1",
						matrix: {a: 0.789, b: 0.452, c: -0.488, d: 0.852, tx: -11.7, ty: 0.25},
						transform: [-11.7, 0.25, 0.909, 0.982, -0.52, 0.52, NaN],
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
						classname: "_ground_demon_banana_crash_part_2",
						instancename: "crash_part_1",
						matrix: {a: 0.758, b: -0.034, c: -0.036, d: -0.819, tx: 13.25, ty: 5.85},
						transform: [13.25, 5.85, 0.759, 0.82, -3.097, -0.044, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ground_demon_ground_demon_attack": {
		type: "movieclip",
		fps: 30,
		totalFrames: 16,
		labels: {},
		layers: [
			{
				name: "leg_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -3.85, ty: 18.2},
						transform: [-3.85, 18.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.917, b: -0.398, c: -0.398, d: 0.917, tx: -5.55, ty: 10.95},
						transform: [-5.55, 10.95, 1, 1, -0.41, -2.732, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.418], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.657, b: -0.754, c: -0.754, d: 0.657, tx: -7.65, ty: 9.1},
						transform: [-7.65, 9.1, 1, 1, -0.854, -2.288, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.778, b: -0.629, c: -0.629, d: 0.778, tx: 0.6, ty: 10.15},
						transform: [0.6, 10.15, 1, 1, -0.68, -2.462, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -0.801, b: -0.598, c: -0.598, d: 0.801, tx: 1.5, ty: 10.1},
						transform: [1.5, 10.1, 1, 1, -0.642, -2.5, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.722, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -3.85, ty: 18.2},
						transform: [-3.85, 18.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.432], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.16, d: 0.847, tx: -4.8, ty: 19.15},
						transform: [-4.8, 19.15, 1, 0.862, 0.187, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.514, 0], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -3.85, ty: 18.2},
						transform: [-3.85, 18.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "foot2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.35, ty: 25.2},
						transform: [-4.35, 25.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.039, c: 0.039, d: 0.999, tx: -8.95, ty: 17.5},
						transform: [-8.95, 17.5, 1, 1, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.418], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.885, b: 0.465, c: -0.465, d: 0.885, tx: -13.6, ty: 13.35},
						transform: [-13.6, 13.35, 1, 1, -0.484, 0.484, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.952, b: 0.305, c: -0.305, d: 0.952, tx: -3.85, ty: 16.25},
						transform: [-3.85, 16.25, 1, 1, -0.31, 0.31, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 0.967, b: -0.253, c: 0.253, d: 0.967, tx: -2.85, ty: 16.2},
						transform: [-2.85, 16.2, 1, 1, 0.256, -0.256, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.722, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.35, ty: 25.2},
						transform: [-4.35, 25.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.432], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.35, ty: 25.2},
						transform: [-4.35, 25.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.514, 0], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.35, ty: 25.2},
						transform: [-4.35, 25.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5.75, ty: 18.45},
						transform: [5.75, 18.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 0.887, b: -0.461, c: 0.461, d: 0.887, tx: 6.55, ty: 11.5},
						transform: [6.55, 11.5, 1, 1, 0.479, -0.479, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.418], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 0.972, b: 0.233, c: -0.233, d: 0.972, tx: 6.4, ty: 10.1},
						transform: [6.4, 10.1, 1, 1, -0.235, 0.235, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 0.781, b: -0.625, c: 0.625, d: 0.781, tx: 10.05, ty: 8.5},
						transform: [10.05, 8.5, 1, 1, 0.675, -0.675, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 0.641, b: -0.767, c: 0.767, d: 0.641, tx: 10.9, ty: 7.6},
						transform: [10.9, 7.6, 1, 1, 0.874, -0.874, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.722, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5.75, ty: 18.45},
						transform: [5.75, 18.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.432], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.069, d: 0.87, tx: 6.2, ty: 19.25},
						transform: [6.2, 19.25, 1, 0.873, -0.079, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.514, 0], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_ground_demon_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5.75, ty: 18.45},
						transform: [5.75, 18.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "foot_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.75, ty: 24.7},
						transform: [6.75, 24.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: -0.83, b: -0.109, c: -0.131, d: 0.991, tx: 9.95, ty: 18.15},
						transform: [9.95, 18.15, 0.837, 1, -0.131, -3.01, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.418], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_ground_demon_foot2_x",
						instancename: "",
						matrix: {a: -0.38, b: -0.746, c: -0.891, d: 0.454, tx: 4.6, ty: 18},
						transform: [4.6, 18, 0.837, 1, -1.099, -2.042, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 0.862, b: -0.507, c: 0.507, d: 0.862, tx: 14.25, ty: 13.1},
						transform: [14.25, 13.1, 1, 1, 0.531, -0.531, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 0.842, b: -0.539, c: 0.539, d: 0.842, tx: 16.35, ty: 11.5},
						transform: [16.35, 11.5, 1, 1, 0.57, -0.57, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.722, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.75, ty: 24.7},
						transform: [6.75, 24.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.432], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.75, ty: 24.7},
						transform: [6.75, 24.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.514, 0], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_ground_demon_foot_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.75, ty: 24.7},
						transform: [6.75, 24.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.878, b: 0.478, c: 0.478, d: 0.878, tx: -8.65, ty: -0.3},
						transform: [-8.65, -0.3, 1, 1, 0.498, 2.644, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 2,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.893, b: -0.45, c: -0.45, d: 0.893, tx: -10.85, ty: -7.7},
						transform: [-10.85, -7.7, 1, 1, -0.467, -2.675, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.418], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.791, b: -0.611, c: -0.611, d: 0.791, tx: -11.5, ty: -9.45},
						transform: [-11.5, -9.45, 1, 1, -0.658, -2.484, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.952, b: 0.304, c: 0.304, d: 0.952, tx: -10.15, ty: -9.25},
						transform: [-10.15, -9.25, 1, 1, 0.309, 2.832, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.405, b: 0.914, c: 0.914, d: 0.405, tx: -10.4, ty: -7.25},
						transform: [-10.4, -7.25, 1, 1, 1.154, 1.988, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.722, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.368, b: 0.93, c: 0.93, d: 0.368, tx: -12.25, ty: 0.95},
						transform: [-12.25, 0.95, 1, 1, 1.194, 1.947, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.432], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.368, b: 0.93, c: 0.93, d: 0.368, tx: -10.7, ty: 1.95},
						transform: [-10.7, 1.95, 1, 1, 1.194, 1.947, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.514, 0], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: -0.878, b: 0.478, c: 0.478, d: 0.878, tx: -8.65, ty: -0.3},
						transform: [-8.65, -0.3, 1, 1, 0.498, 2.644, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.19, b: 0.982, c: -0.982, d: 0.19, tx: -17.05, ty: 5.4},
						transform: [-17.05, 5.4, 1, 1, -1.379, 1.379, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 2,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: -0.801, b: 0.598, c: -0.598, d: -0.801, tx: -21.5, ty: -10.6},
						transform: [-21.5, -10.6, 1, 1, -2.501, 2.501, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.418], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: -0.843, b: 0.537, c: -0.537, d: -0.843, tx: -20.95, ty: -15.45},
						transform: [-20.95, -15.45, 1, 1, -2.574, 2.574, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.573, b: -0.819, c: 0.819, d: 0.573, tx: -19, ty: -5.6},
						transform: [-19, -5.6, 1, 1, 0.96, -0.96, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.443, b: -0.896, c: 0.896, d: 0.443, tx: -13.65, ty: 1},
						transform: [-13.65, 1, 1, 1, 1.111, -1.111, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.722, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.156, b: 0.988, c: -0.988, d: 0.156, tx: -17.55, ty: 13.05},
						transform: [-17.55, 13.05, 1, 1, -1.414, 1.414, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.432], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.005, b: 1, c: -1, d: 0.005, tx: -13.8, ty: 12.2},
						transform: [-13.8, 12.2, 1, 1, -1.566, 1.566, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.514, 0], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_ground_demon_arm8_x",
						instancename: "",
						matrix: {a: 0.19, b: 0.982, c: -0.982, d: 0.19, tx: -17.05, ty: 5.4},
						transform: [-17.05, 5.4, 1, 1, -1.379, 1.379, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 0.55},
						transform: [1.05, 0.55, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: -5.55},
						transform: [1.05, -5.55, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.418], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.994, b: 0.107, c: -0.107, d: 0.994, tx: 1.6, ty: -6.3},
						transform: [1.6, -6.3, 1, 1, -0.108, 0.108, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.987, b: -0.161, c: 0.161, d: 0.987, tx: 1.95, ty: -8.05},
						transform: [1.95, -8.05, 1, 1, 0.162, -0.162, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.972, b: -0.236, c: 0.236, d: 0.972, tx: 2.15, ty: -8.1},
						transform: [2.15, -8.1, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.722, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 0.55},
						transform: [1.05, 0.55, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.432], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 3},
						transform: [1.05, 3, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.514, 0], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_ground_demon_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 0.55},
						transform: [1.05, 0.55, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.991, b: 0.136, c: -0.136, d: 0.991, tx: 12.4, ty: -1.55},
						transform: [12.4, -1.55, 1, 1, -0.137, 0.137, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 14.95, ty: -6.15},
						transform: [14.95, -6.15, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.418], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 1.044, b: -0.04, c: 0.038, d: 0.999, tx: 16.5, ty: -6.55},
						transform: [16.5, -6.55, 1.044, 1, 0.038, -0.038, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.969, b: -0.247, c: 0.247, d: 0.969, tx: 14.55, ty: -12.4},
						transform: [14.55, -12.4, 1, 1, 0.249, -0.249, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.864, b: -0.503, c: 0.503, d: 0.864, tx: 14.5, ty: -16.65},
						transform: [14.5, -16.65, 1, 1, 0.527, -0.527, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.722, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.988, b: 0.155, c: -0.155, d: 0.988, tx: 14.1, ty: -2.25},
						transform: [14.1, -2.25, 1, 1, -0.156, 0.156, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.432], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.977, b: 0.211, c: -0.211, d: 0.977, tx: 13.6, ty: 1.75},
						transform: [13.6, 1.75, 1, 1, -0.213, 0.213, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.514, 0], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_ground_demon_arm1_x",
						instancename: "",
						matrix: {a: 0.991, b: 0.136, c: -0.136, d: 0.991, tx: 12.4, ty: -1.55},
						transform: [12.4, -1.55, 1, 1, -0.137, 0.137, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 22.55, ty: 1.95},
						transform: [22.55, 1.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.819, b: -0.574, c: 0.574, d: 0.819, tx: 25.85, ty: -4.6},
						transform: [25.85, -4.6, 1, 1, 0.611, -0.611, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.418], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.704, b: -0.71, c: 0.71, d: 0.704, tx: 29, ty: -5.45},
						transform: [29, -5.45, 1, 1, 0.79, -0.79, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.265, b: -0.964, c: 0.964, d: 0.265, tx: 25.45, ty: -14.8},
						transform: [25.45, -14.8, 1, 1, 1.303, -1.303, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.916, b: -0.401, c: 0.401, d: 0.916, tx: 25.7, ty: -21.25},
						transform: [25.7, -21.25, 1, 1, 0.413, -0.413, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.722, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.548, b: -0.836, c: 0.836, d: 0.548, tx: 24.65, ty: -0.5},
						transform: [24.65, -0.5, 1, 1, 0.99, -0.99, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.432], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 0.985, b: -0.171, c: 0.171, d: 0.985, tx: 23.8, ty: 6.15},
						transform: [23.8, 6.15, 1, 1, 0.172, -0.172, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.514, 0], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_ground_demon_arm2_wat",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 22.55, ty: 1.95},
						transform: [22.55, 1.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.1, ty: -8.9},
						transform: [1.1, -8.9, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 0.923, b: 0.385, c: -0.385, d: 0.923, tx: 3, ty: -15.6},
						transform: [3, -15.6, 1, 1, -0.396, 0.396, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.418], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 0.992, b: 0.125, c: -0.125, d: 0.992, tx: 4.8, ty: -16.65},
						transform: [4.8, -16.65, 1, 1, -0.125, 0.125, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 0.999, b: -0.053, c: 0.053, d: 0.999, tx: -1.15, ty: -16.95},
						transform: [-1.15, -16.95, 1, 1, 0.053, -0.053, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 0.983, b: -0.185, c: 0.185, d: 0.983, tx: -1.15, ty: -16.85},
						transform: [-1.15, -16.85, 1, 1, 0.186, -0.186, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.722, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.5, ty: -9.3},
						transform: [1.5, -9.3, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.432], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 0.9, ty: -5.25},
						transform: [0.9, -5.25, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.514, 0], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_ground_demon_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.1, ty: -8.9},
						transform: [1.1, -8.9, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "helmet",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.978, b: 0.124, c: -0.124, d: 0.978, tx: 0.1, ty: -21.7},
						transform: [0.1, -21.7, 0.986, 0.986, -0.126, 0.126, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.75, b: 0.661, c: -0.661, d: 0.75, tx: 8.65, ty: -30.75},
						transform: [8.65, -30.75, 1, 1, -0.722, 0.722, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.418], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.949, b: 0.316, c: -0.316, d: 0.949, tx: 6.05, ty: -30.2},
						transform: [6.05, -30.2, 1, 1, -0.321, 0.321, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.999, b: -0.053, c: 0.053, d: 0.999, tx: -3.3, ty: -35.95},
						transform: [-3.3, -35.95, 1, 1, 0.053, -0.053, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.983, b: -0.185, c: 0.185, d: 0.983, tx: -6.15, ty: -35.8},
						transform: [-6.15, -35.8, 1, 1, 0.186, -0.186, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.722, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.998, b: -0.06, c: 0.06, d: 0.998, tx: 0.35, ty: -25.45},
						transform: [0.35, -25.45, 1, 1, 0.06, -0.06, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.432], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.966, b: 0.258, c: -0.258, d: 0.966, tx: 0.65, ty: -20.5},
						transform: [0.65, -20.5, 1, 1, -0.261, 0.261, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.514, 0], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_ground_demon_helmet",
						instancename: "helmet",
						matrix: {a: 0.978, b: 0.124, c: -0.124, d: 0.978, tx: 0.1, ty: -21.7},
						transform: [0.1, -21.7, 0.986, 0.986, -0.126, 0.126, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "sword",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.957, b: -0.289, c: 0.289, d: 0.957, tx: -31.3, ty: 3.95},
						transform: [-31.3, 3.95, 1, 1, 0.293, -0.293, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.858, b: 0.513, c: -0.513, d: 0.858, tx: -25.8, ty: -24.2},
						transform: [-25.8, -24.2, 1, 1, -0.539, 0.539, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.418], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.903, b: 0.429, c: -0.429, d: 0.903, tx: -26.6, ty: -30.7},
						transform: [-26.6, -30.7, 1, 1, -0.443, 0.443, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.488, 0], [0.76, 0.482], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: -0.349, b: 0.937, c: -0.838, d: -0.312, tx: -9.25, ty: 2.15},
						transform: [-9.25, 2.15, 1, 0.895, -1.927, 1.927, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.214, b: 0.977, c: -0.874, d: 0.192, tx: 0.5, ty: 6.25},
						transform: [0.5, 6.25, 1, 0.895, -1.355, 1.355, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.722, 0.531], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.949, b: -0.314, c: 0.314, d: 0.949, tx: -30.15, ty: 11.3},
						transform: [-30.15, 11.3, 1, 1, 0.319, -0.319, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.432], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.953, b: -0.301, c: 0.301, d: 0.953, tx: -28.15, ty: 6.45},
						transform: [-28.15, 6.45, 1, 1, 0.306, -0.306, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.514, 0], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_ground_demon_axe_1_x",
						instancename: "",
						matrix: {a: 0.957, b: -0.289, c: 0.289, d: 0.957, tx: -31.3, ty: 3.95},
						transform: [-31.3, 3.95, 1, 1, 0.293, -0.293, NaN],
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
						to: 2,
						classname: "_ground_demon_trail_1_x",
						instancename: "",
						matrix: {a: 0.31, b: -0.951, c: 0.951, d: 0.31, tx: -20.15, ty: -41.35},
						transform: [-20.15, -41.35, 1, 1, 1.256, -1.256, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_ground_demon_trail_1_x",
						instancename: "",
						matrix: {a: 0.369, b: -0.875, c: 0.815, d: 0.266, tx: -22.2, ty: -40.8},
						transform: [-22.2, -40.8, 0.95, 0.857, 1.256, -1.171, NaN],
						alpha: 0.18,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_ground_demon_trail_1_x",
						instancename: "",
						matrix: {a: 1.014, b: 0.57, c: 0.695, d: -0.696, tx: -0.85, ty: 6.6},
						transform: [-0.85, 6.6, 1.163, 0.984, 2.357, 0.512, NaN],
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
						classname: "_ground_demon_trail_1_x",
						instancename: "",
						matrix: {a: 1.107, b: 0.357, c: 0.543, d: -0.82, tx: 7.55, ty: 2.65},
						transform: [7.55, 2.65, 1.163, 0.984, 2.557, 0.312, NaN],
						alpha: 0.14,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 7,
						to: 15,
					},
				]
			},
			{
				name: "hittablebox",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ground_demon_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.3, b: 0, c: 0, d: 0.16, tx: -0.6, ty: -35.8},
						transform: [-0.6, -35.8, 0.3, 0.16, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_ground_demon_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.3, b: 0, c: 0, d: 0.16, tx: 6.75, ty: -46},
						transform: [6.75, -46, 0.3, 0.16, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_ground_demon_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.3, b: 0, c: 0, d: 0.16, tx: 10.7, ty: -44.95},
						transform: [10.7, -44.95, 0.3, 0.16, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_ground_demon_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.3, b: 0, c: 0, d: 0.16, tx: -4.75, ty: -50.45},
						transform: [-4.75, -50.45, 0.3, 0.16, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 8,
						classname: "_ground_demon_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.3, b: 0, c: 0, d: 0.16, tx: -8.95, ty: -50.45},
						transform: [-8.95, -50.45, 0.3, 0.16, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_ground_demon_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.3, b: 0, c: 0, d: 0.16, tx: -0.6, ty: -39.45},
						transform: [-0.6, -39.45, 0.3, 0.16, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 14,
						classname: "_ground_demon_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.3, b: 0, c: 0, d: 0.16, tx: 2.3, ty: -34.95},
						transform: [2.3, -34.95, 0.3, 0.16, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_ground_demon_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.3, b: 0, c: 0, d: 0.16, tx: 2.3, ty: -34.95},
						transform: [2.3, -34.95, 0.3, 0.16, 0, 0, 0],
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
						to: 3,
					},
					{
						from: 4,
						to: 5,
						classname: "_ground_demon_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.344, b: 0, c: 0, d: 0.575, tx: -46.65, ty: -6.85},
						transform: [-46.65, -6.85, 0.344, 0.575, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 15,
					},
				]
			},
		]
	},
	"_ground_demon_common_box_physics": {
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
	"_ground_demon_common_circle_physics": {
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
	"_ground_demon_leg_x": {
		type: "bitmap",
		asset: "_ground_demon_leg_x",
		scale: 2,
		position: [-8.55, -7.75],
	},
	"_ground_demon_foot2_x": {
		type: "bitmap",
		asset: "_ground_demon_foot2_x",
		scale: 2,
		position: [-12.05, -7.45],
	},
	"_ground_demon_foot_x": {
		type: "bitmap",
		asset: "_ground_demon_foot_x",
		scale: 2,
		position: [-8.5, -6.45],
	},
	"_ground_demon_arm1_x": {
		type: "bitmap",
		asset: "_ground_demon_arm1_x",
		scale: 2,
		position: [-8.55, -10.15],
	},
	"_ground_demon_arm8_x": {
		type: "bitmap",
		asset: "_ground_demon_arm8_x",
		scale: 2,
		position: [-7.8, -7.25],
	},
	"_ground_demon_axe_1_x": {
		type: "bitmap",
		asset: "_ground_demon_axe_1_x",
		scale: 2,
		position: [-25.35, -41.55],
	},
	"_ground_demon_body_x": {
		type: "bitmap",
		asset: "_ground_demon_body_x",
		scale: 2,
		position: [-18.5, -10.95],
	},
	"_ground_demon_head_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 35,
		labels: {},
		layers: [
			{
				name: "head_x",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_ground_demon_head_x",
						instancename: "",
						matrix: {a: -0.661, b: 0, c: 0, d: 0.661, tx: -1.6, ty: -10.05},
						transform: [-1.6, -10.05, 0.661, 0.661, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.569, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 33,
						classname: "_ground_demon_head_x",
						instancename: "",
						matrix: {a: -0.661, b: 0, c: 0, d: 0.661, tx: -1.6, ty: -10.05},
						transform: [-1.6, -10.05, 0.661, 0.661, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.569, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_ground_demon_head_x",
						instancename: "",
						matrix: {a: -0.661, b: 0, c: 0, d: 0.661, tx: -1.6, ty: -10.05},
						transform: [-1.6, -10.05, 0.661, 0.661, 0, 3.142, NaN],
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
						to: 16,
						classname: "_ground_demon_jaws",
						instancename: "",
						matrix: {a: 0.997, b: -0.078, c: 0.078, d: 0.997, tx: -14, ty: 2},
						transform: [-14, 2, 1, 1, 0.078, -0.078, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.569, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 33,
						classname: "_ground_demon_jaws",
						instancename: "",
						matrix: {a: 1, b: -0.026, c: 0.022, d: 0.863, tx: -14.95, ty: -0.1},
						transform: [-14.95, -0.1, 1, 0.863, 0.026, -0.026, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.569, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_ground_demon_jaws",
						instancename: "",
						matrix: {a: 0.997, b: -0.078, c: 0.078, d: 0.997, tx: -14, ty: 2},
						transform: [-14, 2, 1, 1, 0.078, -0.078, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_ground_demon_eye",
						instancename: "",
						matrix: {a: -0.661, b: 0, c: 0, d: 0.661, tx: 4, ty: -10.9},
						transform: [4, -10.9, 0.661, 0.661, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.569, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 33,
						classname: "_ground_demon_eye",
						instancename: "",
						matrix: {a: -0.661, b: 0, c: 0, d: 0.661, tx: 1.85, ty: -11.15},
						transform: [1.85, -11.15, 0.661, 0.661, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.569, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_ground_demon_eye",
						instancename: "",
						matrix: {a: -0.661, b: 0, c: 0, d: 0.661, tx: 4, ty: -10.9},
						transform: [4, -10.9, 0.661, 0.661, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_ground_demon_eye",
						instancename: "",
						matrix: {a: 0.512, b: 0.212, c: -0.212, d: 0.512, tx: -14.55, ty: -14.65},
						transform: [-14.55, -14.65, 0.554, 0.554, -0.392, 0.392, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.569, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 33,
						classname: "_ground_demon_eye",
						instancename: "",
						matrix: {a: 0.512, b: 0.212, c: -0.212, d: 0.512, tx: -16.1, ty: -15},
						transform: [-16.1, -15, 0.554, 0.554, -0.392, 0.392, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.569, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_ground_demon_eye",
						instancename: "",
						matrix: {a: 0.512, b: 0.212, c: -0.212, d: 0.512, tx: -14.55, ty: -14.65},
						transform: [-14.55, -14.65, 0.554, 0.554, -0.392, 0.392, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ground_demon_helmet": {
		type: "movieclip",
		fps: 30,
		totalFrames: 4,
		labels: {on: {from:0, to:1}, alone: {from:2, to:3}, },
		layers: [
			{
				name: "Capa 1",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_ground_demon_helmet1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 3,
						classname: "_ground_demon_helmetalone_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
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
						to: 3,
						classname: "_ground_demon_common_circle_physics",
						instancename: "",
						matrix: {a: 0.307, b: 0, c: 0, d: 0.307, tx: -7.55, ty: -4},
						transform: [-7.55, -4, 0.307, 0.307, 0, 0, 0],
						alpha: 0,
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
						to: 3,
						classname: "_ground_demon_common_circle_physics",
						instancename: "",
						matrix: {a: 0.329, b: 0, c: 0, d: 0.329, tx: 7.3, ty: -4.4},
						transform: [7.3, -4.4, 0.329, 0.329, 0, 0, 0],
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
						to: 1,
					},
					{
						from: 2,
						to: 3,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 2,
						actions: function(self){self.stop();},
					},
					{
						from: 3,
						to: 3,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_ground_demon_arm2_wat": {
		type: "movieclip",
		fps: 30,
		totalFrames: 24,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_ground_demon_arm_chabaan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: -1.4},
						transform: [-0.05, -1.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 22,
						classname: "_ground_demon_arm_chabaan_x",
						instancename: "",
						matrix: {a: 0.992, b: 0.125, c: -0.125, d: 0.992, tx: 0, ty: -1.35},
						transform: [0, -1.35, 1, 1, -0.126, 0.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.559, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_ground_demon_arm_chabaan_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: -1.4},
						transform: [-0.05, -1.4, 1, 1, 0, 0, 0],
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
						to: 10,
						classname: "_ground_demon_hand_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.35, ty: 6.7},
						transform: [-0.35, 6.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.409, 0], [0.588, 0.874], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 22,
						classname: "_ground_demon_hand_x",
						instancename: "",
						matrix: {a: 0.808, b: 0.587, c: -0.587, d: 0.808, tx: -1.6, ty: 6.9},
						transform: [-1.6, 6.9, 0.999, 0.999, -0.628, 0.628, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.319, 0.65], [0.651, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_ground_demon_hand_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.35, ty: 6.7},
						transform: [-0.35, 6.7, 1, 1, 0, 0, 0],
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
						to: 23,
					},
				]
			},
		]
	},
	"_ground_demon_hittablebox": {
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
	"_ground_demon_attackbox": {
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
	"_ground_demon_arm9_x": {
		type: "bitmap",
		asset: "_ground_demon_arm9_x",
		scale: 2,
		position: [-7.8, -7.25],
	},
	"_ground_demon_common_stepbox": {
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
	"_ground_demon_head_waiting": {
		type: "movieclip",
		fps: 30,
		totalFrames: 45,
		labels: {},
		layers: [
			{
				name: "head_x",
				keys: [
					{
						from: 0,
						to: 44,
						classname: "_ground_demon_head_x",
						instancename: "",
						matrix: {a: -0.661, b: 0, c: 0, d: 0.661, tx: -1.6, ty: -10.05},
						transform: [-1.6, -10.05, 0.661, 0.661, 0, 3.142, NaN],
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
						to: 44,
						classname: "_ground_demon_jaws_wait",
						instancename: "",
						matrix: {a: 0.997, b: -0.078, c: 0.078, d: 0.997, tx: -14.75, ty: 0.4},
						transform: [-14.75, 0.4, 1, 1, 0.078, -0.078, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye",
				keys: [
					{
						from: 0,
						to: 44,
						classname: "_ground_demon_eye_line_x",
						instancename: "",
						matrix: {a: 0.694, b: 0.88, c: -0.766, d: 0.605, tx: -14.65, ty: -13.85},
						transform: [-14.65, -13.85, 1.121, 0.976, -0.903, 0.903, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye",
				keys: [
					{
						from: 0,
						to: 44,
						classname: "_ground_demon_eye_line_x",
						instancename: "",
						matrix: {a: 0.694, b: 0.88, c: -0.766, d: 0.605, tx: 3.1, ty: -9.65},
						transform: [3.1, -9.65, 1.121, 0.976, -0.903, 0.903, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ground_demon_common_fx_spawn": {
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
						classname: "_ground_demon_common_startballoonfx",
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
						classname: "_ground_demon_common_startballoonfx",
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
						classname: "_ground_demon_common_startballoonfx",
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
						classname: "_ground_demon_common_startballoonfx_end",
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
						to: 1,
						classname: "_ground_demon_common_thunder_part_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.05, ty: -356.2},
						transform: [2.05, -356.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 3,
						classname: "_ground_demon_common_thunder_part_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.05, ty: -356.2},
						transform: [2.05, -356.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_ground_demon_common_thunder_part_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.05, ty: -356.2},
						transform: [2.05, -356.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 7,
						classname: "_ground_demon_common_thunder_part_2_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -1, tx: -0.1, ty: -283.25},
						transform: [-0.1, -283.25, 1, 1, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 9,
						classname: "_ground_demon_common_thunder_part_5_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -1, tx: -1.9, ty: -283.25},
						transform: [-1.9, -283.25, 1, 1, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
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
	"_ground_demon_banana_crash_part_2": {
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
						classname: "_ground_demon_banana_banana2_x",
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
						classname: "_ground_demon_banana_box_physics",
						instancename: "",
						matrix: {a: 0.159, b: 0, c: 0, d: 0.057, tx: -0.85, ty: -0.8},
						transform: [-0.85, -0.8, 0.159, 0.057, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ground_demon_banana_crash_part_1": {
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
						classname: "_ground_demon_common_banana_x",
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
				name: "box_physics",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ground_demon_common_box_physics",
						instancename: "",
						matrix: {a: 0.216, b: 0, c: 0, d: 0.088, tx: -0.05, ty: -0.3},
						transform: [-0.05, -0.3, 0.216, 0.088, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ground_demon_trail_1_x": {
		type: "bitmap",
		asset: "_ground_demon_trail_1_x",
		scale: 2,
		position: [-58.85, -37.3],
	},
	"_ground_demon_head_x": {
		type: "bitmap",
		asset: "_ground_demon_head_x",
		scale: 2,
		position: [-40.7, -38],
	},
	"_ground_demon_jaws": {
		type: "movieclip",
		fps: 30,
		totalFrames: 41,
		labels: {},
		layers: [
			{
				name: "mandibula1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_ground_demon_mandibula1_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: 2.1, ty: -9.45},
						transform: [2.1, -9.45, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_ground_demon_mandibula1_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: 2.1, ty: -9.45},
						transform: [2.1, -9.45, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_ground_demon_mandibula1_x",
						instancename: "",
						matrix: {a: 0.589, b: 0.808, c: -0.808, d: 0.589, tx: 2.1, ty: -9.45},
						transform: [2.1, -9.45, 1, 1, -0.941, 0.941, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_ground_demon_mandibula1_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: 2.1, ty: -9.45},
						transform: [2.1, -9.45, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 20,
						classname: "_ground_demon_mandibula1_x",
						instancename: "",
						matrix: {a: 0.589, b: 0.808, c: -0.808, d: 0.589, tx: 2.1, ty: -9.45},
						transform: [2.1, -9.45, 1, 1, -0.941, 0.941, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 26,
						classname: "_ground_demon_mandibula1_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: 2.1, ty: -9.45},
						transform: [2.1, -9.45, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 31,
						classname: "_ground_demon_mandibula1_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: 2.1, ty: -9.45},
						transform: [2.1, -9.45, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 39,
						classname: "_ground_demon_mandibula1_x",
						instancename: "",
						matrix: {a: 0.589, b: 0.808, c: -0.808, d: 0.589, tx: 2.1, ty: -9.45},
						transform: [2.1, -9.45, 1, 1, -0.941, 0.941, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 40,
						to: 40,
						classname: "_ground_demon_mandibula1_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: 2.1, ty: -9.45},
						transform: [2.1, -9.45, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mandibula2_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_ground_demon_mandibula2_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: 7.2, ty: -7.85},
						transform: [7.2, -7.85, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_ground_demon_mandibula2_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: 7.2, ty: -7.85},
						transform: [7.2, -7.85, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_ground_demon_mandibula2_x",
						instancename: "",
						matrix: {a: 0.854, b: 0.519, c: -0.495, d: 0.815, tx: 7.3, ty: -7.95},
						transform: [7.3, -7.95, 1, 0.954, -0.546, 0.546, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_ground_demon_mandibula2_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: 7.2, ty: -7.85},
						transform: [7.2, -7.85, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 20,
						classname: "_ground_demon_mandibula2_x",
						instancename: "",
						matrix: {a: 0.854, b: 0.519, c: -0.495, d: 0.815, tx: 7.3, ty: -7.95},
						transform: [7.3, -7.95, 1, 0.954, -0.546, 0.546, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 26,
						classname: "_ground_demon_mandibula2_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: 7.2, ty: -7.85},
						transform: [7.2, -7.85, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 31,
						classname: "_ground_demon_mandibula2_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: 7.2, ty: -7.85},
						transform: [7.2, -7.85, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 39,
						classname: "_ground_demon_mandibula2_x",
						instancename: "",
						matrix: {a: 0.854, b: 0.519, c: -0.495, d: 0.815, tx: 7.3, ty: -7.95},
						transform: [7.3, -7.95, 1, 0.954, -0.546, 0.546, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 40,
						to: 40,
						classname: "_ground_demon_mandibula2_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: 7.2, ty: -7.85},
						transform: [7.2, -7.85, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ground_demon_eye": {
		type: "movieclip",
		fps: 30,
		totalFrames: 105,
		labels: {},
		layers: [
			{
				name: "eye_line_x",
				keys: [
					{
						from: 0,
						to: 104,
						classname: "_ground_demon_eye_line_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.05, ty: 3.3},
						transform: [0.05, 3.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye_x",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_ground_demon_eye_green",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: -0.05},
						transform: [-0.2, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 11,
						classname: "_ground_demon_eye_green",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: -0.05},
						transform: [-0.2, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 13,
						classname: "_ground_demon_eye_green",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.2, tx: -0.2, ty: -0.05},
						transform: [-0.2, -0.05, 1, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 14,
						to: 15,
						classname: "_ground_demon_eye_green",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.2, tx: -0.2, ty: -0.05},
						transform: [-0.2, -0.05, 1, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 16,
						to: 46,
						classname: "_ground_demon_eye_green",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: -0.05},
						transform: [-0.2, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 47,
						to: 48,
						classname: "_ground_demon_eye_green",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: -0.05},
						transform: [-0.2, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 49,
						to: 50,
						classname: "_ground_demon_eye_green",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.2, tx: -0.2, ty: -0.05},
						transform: [-0.2, -0.05, 1, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 51,
						to: 52,
						classname: "_ground_demon_eye_green",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.2, tx: -0.2, ty: -0.05},
						transform: [-0.2, -0.05, 1, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 53,
						to: 104,
						classname: "_ground_demon_eye_green",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: -0.05},
						transform: [-0.2, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ground_demon_helmet1_x": {
		type: "bitmap",
		asset: "_ground_demon_helmet1_x",
		scale: 2,
		position: [-30.95, -26.5],
	},
	"_ground_demon_helmetalone_x": {
		type: "bitmap",
		asset: "_ground_demon_helmetalone_x",
		scale: 2,
		position: [-30.95, -26.5],
	},
	"_ground_demon_arm_chabaan_x": {
		type: "bitmap",
		asset: "_ground_demon_arm_chabaan_x",
		scale: 2,
		position: [-7.7, -7.35],
	},
	"_ground_demon_hand_x": {
		type: "bitmap",
		asset: "_ground_demon_hand_x",
		scale: 2,
		position: [-8.65, -5.65],
	},
	"_ground_demon_jaws_wait": {
		type: "movieclip",
		fps: 30,
		totalFrames: 48,
		labels: {},
		layers: [
			{
				name: "mandibula1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_ground_demon_mandibula1_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: 2.1, ty: -9.45},
						transform: [2.1, -9.45, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 17,
						classname: "_ground_demon_mandibula1_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: 2.1, ty: -9.45},
						transform: [2.1, -9.45, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 20,
						classname: "_ground_demon_mandibula1_x",
						instancename: "",
						matrix: {a: 0.589, b: 0.808, c: -0.808, d: 0.589, tx: 2.1, ty: -9.45},
						transform: [2.1, -9.45, 1, 1, -0.941, 0.941, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 23,
						classname: "_ground_demon_mandibula1_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: 2.1, ty: -9.45},
						transform: [2.1, -9.45, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 27,
						classname: "_ground_demon_mandibula1_x",
						instancename: "",
						matrix: {a: 0.663, b: 0.748, c: -0.748, d: 0.663, tx: 2.1, ty: -9.45},
						transform: [2.1, -9.45, 1, 1, -0.846, 0.846, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 47,
						classname: "_ground_demon_mandibula1_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: 2.1, ty: -9.45},
						transform: [2.1, -9.45, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mandibula2_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_ground_demon_mandibula2_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: 7.2, ty: -7.85},
						transform: [7.2, -7.85, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 17,
						classname: "_ground_demon_mandibula2_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: 7.2, ty: -7.85},
						transform: [7.2, -7.85, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 20,
						classname: "_ground_demon_mandibula2_x",
						instancename: "",
						matrix: {a: 0.854, b: 0.519, c: -0.495, d: 0.815, tx: 7.3, ty: -7.95},
						transform: [7.3, -7.95, 1, 0.954, -0.546, 0.546, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 23,
						classname: "_ground_demon_mandibula2_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: 7.2, ty: -7.85},
						transform: [7.2, -7.85, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 27,
						classname: "_ground_demon_mandibula2_x",
						instancename: "",
						matrix: {a: 0.755, b: 0.656, c: -0.626, d: 0.72, tx: 7.25, ty: -7.95},
						transform: [7.25, -7.95, 1, 0.954, -0.716, 0.716, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 47,
						classname: "_ground_demon_mandibula2_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: 7.2, ty: -7.85},
						transform: [7.2, -7.85, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ground_demon_eye_line_x": {
		type: "bitmap",
		asset: "_ground_demon_eye_line_x",
		scale: 2,
		position: [-9.4, -10.2],
	},
	"_ground_demon_common_startballoonfx": {
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
						classname: "_ground_demon_common_fx_floor",
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
						classname: "_ground_demon_common_fx_rays",
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
	"_ground_demon_common_startballoonfx_end": {
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
						classname: "_ground_demon_common_rays",
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
						classname: "_ground_demon_common_rays",
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
	"_ground_demon_common_thunder_part_1_x": {
		type: "bitmap",
		asset: "_ground_demon_common_thunder_part_1_x",
		scale: 2,
		position: [-61.1, -287.35],
	},
	"_ground_demon_common_thunder_part_2_x": {
		type: "bitmap",
		asset: "_ground_demon_common_thunder_part_2_x",
		scale: 2,
		position: [-61.1, -287.35],
	},
	"_ground_demon_common_thunder_part_3_x": {
		type: "bitmap",
		asset: "_ground_demon_common_thunder_part_3_x",
		scale: 2,
		position: [-61.1, -287.35],
	},
	"_ground_demon_common_thunder_part_5_x": {
		type: "bitmap",
		asset: "_ground_demon_common_thunder_part_5_x",
		scale: 2,
		position: [-61.1, -287.4],
	},
	"_ground_demon_banana_banana2_x": {
		type: "bitmap",
		asset: "_ground_demon_banana_banana2_x",
		scale: 2,
		position: [-16.25, -13.15],
	},
	"_ground_demon_banana_box_physics": {
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
	"_ground_demon_common_banana_x": {
		type: "bitmap",
		asset: "_ground_demon_common_banana_x",
		scale: 2,
		position: [-21.05, -14.25],
	},
	"_ground_demon_mandibula1_x": {
		type: "bitmap",
		asset: "_ground_demon_mandibula1_x",
		scale: 2,
		position: [-9, -6.3],
	},
	"_ground_demon_mandibula2_x": {
		type: "bitmap",
		asset: "_ground_demon_mandibula2_x",
		scale: 2,
		position: [-7.3, -6.25],
	},
	"_ground_demon_eye_green": {
		type: "movieclip",
		fps: 30,
		totalFrames: 30,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 29,
						classname: "_ground_demon_eye_x",
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
	"_ground_demon_common_fx_floor": {
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
						classname: "_ground_demon_common_startfx_floor_x",
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
						classname: "_ground_demon_common_startfx_floor_x",
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
						classname: "_ground_demon_common_startfx_floor_x",
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
	"_ground_demon_common_fx_rays": {
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
						classname: "_ground_demon_common_fx_rays_x",
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
						classname: "_ground_demon_common_fx_rays_x",
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
						classname: "_ground_demon_common_fx_rays_x",
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
	"_ground_demon_common_rays": {
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
						classname: "_ground_demon_common_ray",
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
						classname: "_ground_demon_common_ray",
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
						classname: "_ground_demon_common_ray",
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
	"_ground_demon_eye_x": {
		type: "bitmap",
		asset: "_ground_demon_eye_x",
		scale: 2,
		position: [-6.55, -7],
	},
	"_ground_demon_common_startfx_floor_x": {
		type: "bitmap",
		asset: "_ground_demon_common_startfx_floor_x",
		scale: 2,
		position: [-37.65, -10.95],
	},
	"_ground_demon_common_fx_rays_x": {
		type: "bitmap",
		asset: "_ground_demon_common_fx_rays_x",
		scale: 2,
		position: [-45.2, -71.3],
	},
	"_ground_demon_common_ray": {
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
						classname: "_ground_demon_common_ray_x",
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
						classname: "_ground_demon_common_ray_x",
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
						classname: "_ground_demon_common_ray_x",
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
						classname: "_ground_demon_common_ray_x",
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
	"_ground_demon_common_ray_x": {
		type: "bitmap",
		asset: "_ground_demon_common_ray_x",
		scale: 2,
		position: [-11.65, -85.95],
	},
};
