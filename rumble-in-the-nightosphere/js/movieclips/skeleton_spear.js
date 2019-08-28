
var skeleton_spear = {
	"skeleton_spear": {
		type: "movieclip",
		fps: 30,
		totalFrames: 238,
		labels: {ground_idle: {from:0, to:9}, ground_run: {from:11, to:20}, ground_stop: {from:22, to:62}, ground_stopturn: {from:64, to:132}, ground_turn: {from:134, to:142}, ground_turn_fast: {from:144, to:157}, die: {from:159, to:169}, waiting: {from:171, to:180}, spawn: {from:182, to:201}, crash: {from:203, to:222}, attack: {from:224, to:236}, },
		layers: [
			{
				name: "physics",
				keys: [
					{
						from: 0,
						to: 237,
						classname: "_skeleton_spear_common_body_physics",
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
						classname: "_skeleton_spear_skeleton_ground_idle",
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
						classname: "_skeleton_spear_skeleton_ground_run",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 133,
						classname: "_skeleton_spear_skeleton_ground_stop",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 134,
						to: 158,
						classname: "_skeleton_spear_skeleton_ground_turn",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 159,
						to: 170,
						classname: "_skeleton_spear_skeleton_die",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 171,
						to: 181,
						classname: "_skeleton_spear_skeleton_waiting",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 182,
						to: 202,
						classname: "_skeleton_spear_skeleton_spawn",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 203,
						to: 223,
						classname: "_skeleton_spear_skeleton_crash",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 224,
						to: 237,
						classname: "_skeleton_spear_skeleton_attack",
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
						to: 62,
					},
					{
						from: 63,
						to: 63,
						actions: function(self){self.stop();},
					},
					{
						from: 64,
						to: 132,
					},
					{
						from: 133,
						to: 133,
						actions: function(self){self.stop();},
					},
					{
						from: 134,
						to: 142,
					},
					{
						from: 143,
						to: 143,
						actions: function(self){self.stop();},
					},
					{
						from: 144,
						to: 157,
					},
					{
						from: 158,
						to: 158,
						actions: function(self){self.stop();},
					},
					{
						from: 159,
						to: 169,
					},
					{
						from: 170,
						to: 170,
						actions: function(self){self.stop();},
					},
					{
						from: 171,
						to: 180,
					},
					{
						from: 181,
						to: 181,
						actions: function(self){self.stop();},
					},
					{
						from: 182,
						to: 201,
					},
					{
						from: 202,
						to: 202,
						actions: function(self){self.stop();},
					},
					{
						from: 203,
						to: 222,
					},
					{
						from: 223,
						to: 223,
						actions: function(self){self.stop();},
					},
					{
						from: 224,
						to: 236,
					},
					{
						from: 237,
						to: 237,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_skeleton_spear_common_body_physics": {
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
						classname: "_skeleton_spear_common_box_physics",
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
						classname: "_skeleton_spear_common_circle_physics",
						instancename: "",
						matrix: {a: 0.449, b: 0, c: 0, d: 0.449, tx: -0.5, ty: -4.3},
						transform: [-0.5, -4.3, 0.449, 0.449, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_spear_skeleton_ground_idle": {
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1.02, tx: -3.85, ty: 18.1},
						transform: [-3.85, 18.1, 1, 1.02, 0, 3.142, NaN],
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_foot2_x",
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
						classname: "_skeleton_spear_foot2_x",
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
						from: 23,
						to: 23,
						classname: "_skeleton_spear_foot2_x",
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.062, tx: 5.75, ty: 18.1},
						transform: [5.75, 18.1, 1, 1.062, 0, 0, 0],
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_foot_x",
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
						classname: "_skeleton_spear_foot_x",
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
						from: 23,
						to: 23,
						classname: "_skeleton_spear_foot_x",
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
				name: "pelvis_x",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.8, ty: 15.4},
						transform: [0.8, 15.4, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.064, c: 0.064, d: 0.998, tx: 1.2, ty: 14.8},
						transform: [1.2, 14.8, 1, 1, 0.064, -0.064, NaN],
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
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.8, ty: 15.4},
						transform: [0.8, 15.4, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.949, b: -0.314, c: 0.314, d: 0.949, tx: -30.15, ty: 11.3},
						transform: [-30.15, 11.3, 1, 1, 0.319, -0.319, NaN],
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
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.957, b: -0.289, c: 0.289, d: 0.957, tx: -31.05, ty: 14.1},
						transform: [-31.05, 14.1, 1, 1, 0.293, -0.293, NaN],
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
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.949, b: -0.314, c: 0.314, d: 0.949, tx: -30.15, ty: 11.3},
						transform: [-30.15, 11.3, 1, 1, 0.319, -0.319, NaN],
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
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: 0.156, b: 0.988, c: -0.988, d: 0.156, tx: -17.55, ty: 13.05},
						transform: [-17.55, 13.05, 1, 1, -1.414, 1.414, NaN],
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
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: 0.174, b: 0.985, c: -0.985, d: 0.174, tx: -18.3, ty: 15.6},
						transform: [-18.3, 15.6, 1, 1, -1.396, 1.396, NaN],
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
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: 0.156, b: 0.988, c: -0.988, d: 0.156, tx: -17.55, ty: 13.05},
						transform: [-17.55, 13.05, 1, 1, -1.414, 1.414, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.368, b: 0.93, c: 0.93, d: 0.368, tx: -12.25, ty: 0.95},
						transform: [-12.25, 0.95, 1, 1, 1.194, 1.947, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.378, b: 0.926, c: 0.926, d: 0.378, tx: -13.95, ty: 4.3},
						transform: [-13.95, 4.3, 1, 1, 1.183, 1.958, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.368, b: 0.93, c: 0.93, d: 0.368, tx: -12.25, ty: 0.95},
						transform: [-12.25, 0.95, 1, 1, 1.194, 1.947, NaN],
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
						to: 12,
						classname: "_skeleton_spear_body_x",
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
						classname: "_skeleton_spear_body_x",
						instancename: "",
						matrix: {a: 1, b: 0.029, c: -0.029, d: 1, tx: 1, ty: 3.65},
						transform: [1, 3.65, 1, 1, -0.029, 0.029, NaN],
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
						classname: "_skeleton_spear_body_x",
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
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.931, b: 0.365, c: -0.365, d: 0.931, tx: 26.85, ty: 1.5},
						transform: [26.85, 1.5, 1, 1, -0.374, 0.374, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 22,
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.986, b: 0.166, c: -0.166, d: 0.986, tx: 24.4, ty: 5},
						transform: [24.4, 5, 1, 1, -0.167, 0.167, NaN],
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
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.931, b: 0.365, c: -0.365, d: 0.931, tx: 26.85, ty: 1.5},
						transform: [26.85, 1.5, 1, 1, -0.374, 0.374, NaN],
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
						to: 8,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.933, b: 0.36, c: -0.36, d: 0.933, tx: 14.9, ty: -4.15},
						transform: [14.9, -4.15, 1, 1, -0.369, 0.369, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 22,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.941, b: 0.34, c: -0.34, d: 0.941, tx: 13.85, ty: -1.05},
						transform: [13.85, -1.05, 1, 1, -0.346, 0.346, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.933, b: 0.36, c: -0.36, d: 0.933, tx: 14.9, ty: -4.15},
						transform: [14.9, -4.15, 1, 1, -0.369, 0.369, NaN],
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
						classname: "_skeleton_spear_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.5, ty: -9.3},
						transform: [1.5, -9.3, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 22,
						classname: "_skeleton_spear_head_idle",
						instancename: "",
						matrix: {a: 0.999, b: 0.041, c: -0.041, d: 0.999, tx: 0.85, ty: -4.15},
						transform: [0.85, -4.15, 1, 1, -0.041, 0.041, NaN],
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
						classname: "_skeleton_spear_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.5, ty: -9.3},
						transform: [1.5, -9.3, 1, 1, -0.022, 0.022, NaN],
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
						to: 11,
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -5.5, ty: -20.3},
						transform: [-5.5, -20.3, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 22,
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 0.999, b: 0.041, c: -0.041, d: 0.999, tx: -5.9, ty: -15.65},
						transform: [-5.9, -15.65, 1, 1, -0.041, 0.041, NaN],
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
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -5.5, ty: -20.55},
						transform: [-5.5, -20.55, 1, 1, -0.022, 0.022, NaN],
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
						classname: "_skeleton_spear_hittablebox",
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
						to: 22,
						classname: "_skeleton_spear_hittablebox",
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
						from: 23,
						to: 23,
						classname: "_skeleton_spear_hittablebox",
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
						classname: "_skeleton_spear_attackbox",
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
						to: 22,
						classname: "_skeleton_spear_attackbox",
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
						classname: "_skeleton_spear_attackbox",
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
	"_skeleton_spear_skeleton_ground_run": {
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
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: -0.679, b: 0.734, c: 0.734, d: 0.679, tx: -5.3, ty: 15.9},
						transform: [-5.3, 15.9, 1, 1, 0.824, 2.318, NaN],
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: -0.679, b: 0.734, c: 0.734, d: 0.679, tx: -5.3, ty: 15.9},
						transform: [-5.3, 15.9, 1, 1, 0.824, 2.318, NaN],
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
						to: 3,
						classname: "_skeleton_spear_foot2_x",
						instancename: "",
						matrix: {a: 0.95, b: -0.313, c: 0.313, d: 0.95, tx: -1.75, ty: 21.1},
						transform: [-1.75, 21.1, 1, 1, 0.318, -0.318, NaN],
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
						classname: "_skeleton_spear_foot2_x",
						instancename: "",
						matrix: {a: 0.824, b: 0.567, c: -0.567, d: 0.824, tx: -9.85, ty: 15.65},
						transform: [-9.85, 15.65, 1, 1, -0.602, 0.602, NaN],
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
						classname: "_skeleton_spear_foot2_x",
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
						classname: "_skeleton_spear_foot2_x",
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
						classname: "_skeleton_spear_foot2_x",
						instancename: "",
						matrix: {a: 0.95, b: -0.313, c: 0.313, d: 0.95, tx: -1.75, ty: 21.1},
						transform: [-1.75, 21.1, 1, 1, 0.318, -0.318, NaN],
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
				name: "pelvis_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0.135, c: 0, d: 1, tx: 0.8, ty: 15.25},
						transform: [0.8, 15.25, 1.009, 1, 0, 0.134, NaN],
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
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.056, c: 0.056, d: 0.998, tx: 3.45, ty: 8.75},
						transform: [3.45, 8.75, 1, 1, 0.056, -0.056, NaN],
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
						classname: "_skeleton_spear_pelvis2_x",
						instancename: "",
						matrix: {a: 1, b: -0.201, c: 0, d: 1, tx: 0.8, ty: 15.25},
						transform: [0.8, 15.25, 1.02, 1, 0, -0.198, NaN],
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
						classname: "_skeleton_spear_pelvis2_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.069, c: 0.069, d: 0.998, tx: 3.75, ty: 7.7},
						transform: [3.75, 7.7, 1, 1, 0.069, -0.069, NaN],
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
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0.135, c: 0, d: 1, tx: 0.8, ty: 15.25},
						transform: [0.8, 15.25, 1.009, 1, 0, 0.134, NaN],
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
						to: 3,
						classname: "_skeleton_spear_leg_x",
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
						to: 8,
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: 0.144, b: 0.99, c: 0.99, d: -0.144, tx: 10.2, ty: 10.2},
						transform: [10.2, 10.2, 1, 1, 1.715, 1.427, NaN],
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
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: -0.819, b: -0.574, c: -0.491, d: 0.7, tx: 1.3, ty: 18},
						transform: [1.3, 18, 1, 0.855, -0.611, -2.53, NaN],
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
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: -0.595, b: -0.804, c: -0.951, d: 0.704, tx: 5.2, ty: 10.45},
						transform: [5.2, 10.45, 1, 1.183, -0.934, -2.208, NaN],
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
						classname: "_skeleton_spear_leg_x",
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
				name: "foot_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_skeleton_spear_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.65, ty: 25.7},
						transform: [4.65, 25.7, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_foot2_x",
						instancename: "",
						matrix: {a: -0.656, b: -0.755, c: 0.755, d: -0.656, tx: 17.2, ty: 10.35},
						transform: [17.2, 10.35, 1, 1, 2.286, -2.286, NaN],
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
						classname: "_skeleton_spear_foot2_x",
						instancename: "",
						matrix: {a: 0.851, b: -0.525, c: 0.525, d: 0.851, tx: -1.1, ty: 21.4},
						transform: [-1.1, 21.4, 1, 1, 0.553, -0.553, NaN],
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
						classname: "_skeleton_spear_foot2_x",
						instancename: "",
						matrix: {a: 0.932, b: 0.363, c: -0.363, d: 0.932, tx: -2.15, ty: 14.15},
						transform: [-2.15, 14.15, 1, 1, -0.371, 0.371, NaN],
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
						classname: "_skeleton_spear_foot2_x",
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
				name: "sword",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.363, b: -0.932, c: 0.932, d: 0.363, tx: -30.35, ty: 15.1},
						transform: [-30.35, 15.1, 1, 1, 1.2, -1.2, NaN],
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
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.301, b: -0.954, c: 0.954, d: 0.301, tx: -25.6, ty: 8.1},
						transform: [-25.6, 8.1, 1, 1, 1.265, -1.265, NaN],
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
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.127, b: -0.992, c: 0.992, d: 0.127, tx: -30.45, ty: 15.1},
						transform: [-30.45, 15.1, 1, 1, 1.444, -1.444, NaN],
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
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.289, b: -0.957, c: 0.957, d: 0.289, tx: -30.4, ty: 6.3},
						transform: [-30.4, 6.3, 1, 1, 1.278, -1.278, NaN],
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
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.363, b: -0.932, c: 0.932, d: 0.363, tx: -30.35, ty: 15.1},
						transform: [-30.35, 15.1, 1, 1, 1.2, -1.2, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							position: [[0, 0], [0.213, 0.473], [0.508, 1], [1, 1], ],
							rotation: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							scale: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							color: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							filters: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
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
						classname: "_skeleton_spear_arm9_x",
						instancename: "",
						matrix: {a: 0.156, b: 0.988, c: -0.988, d: 0.156, tx: -15.6, ty: 15.45},
						transform: [-15.6, 15.45, 1, 1, -1.414, 1.414, NaN],
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
						classname: "_skeleton_spear_arm9_x",
						instancename: "",
						matrix: {a: 0.212, b: 0.977, c: -0.977, d: 0.212, tx: -12.1, ty: 8},
						transform: [-12.1, 8, 1, 1, -1.358, 1.358, NaN],
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
						classname: "_skeleton_spear_arm9_x",
						instancename: "",
						matrix: {a: 0.156, b: 0.988, c: -0.988, d: 0.156, tx: -15.6, ty: 15.45},
						transform: [-15.6, 15.45, 1, 1, -1.414, 1.414, NaN],
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
						classname: "_skeleton_spear_arm9_x",
						instancename: "",
						matrix: {a: 0.224, b: 0.975, c: -0.975, d: 0.224, tx: -17.05, ty: 6.1},
						transform: [-17.05, 6.1, 1, 1, -1.345, 1.345, NaN],
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
						classname: "_skeleton_spear_arm9_x",
						instancename: "",
						matrix: {a: 0.156, b: 0.988, c: -0.988, d: 0.156, tx: -15.6, ty: 15.45},
						transform: [-15.6, 15.45, 1, 1, -1.414, 1.414, NaN],
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
						to: 3,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.218, b: 0.976, c: 0.976, d: 0.218, tx: -12.35, ty: 2.25},
						transform: [-12.35, 2.25, 1, 1, 1.351, 1.791, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.033, b: 0.999, c: 0.999, d: -0.033, tx: -10.95, ty: -4},
						transform: [-10.95, -4, 1, 1, 1.603, 1.538, NaN],
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
						classname: "_skeleton_spear_arm1_x",
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.332, b: 0.943, c: 0.943, d: 0.332, tx: -11.4, ty: -6.3},
						transform: [-11.4, -6.3, 1, 1, 1.233, 1.909, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.218, b: 0.976, c: 0.976, d: 0.218, tx: -12.35, ty: 2.25},
						transform: [-12.35, 2.25, 1, 1, 1.351, 1.791, NaN],
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
						to: 3,
						classname: "_skeleton_spear_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 2.65},
						transform: [1.05, 2.65, 1, 1, -0.034, 0.034, NaN],
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
						classname: "_skeleton_spear_body_x",
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
						classname: "_skeleton_spear_body_x",
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
						classname: "_skeleton_spear_body_x",
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
						classname: "_skeleton_spear_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 2.65},
						transform: [1.05, 2.65, 1, 1, -0.034, 0.034, NaN],
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
						to: 3,
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.931, b: 0.365, c: -0.365, d: 0.931, tx: 26.85, ty: 3.6},
						transform: [26.85, 3.6, 1, 1, -0.374, 0.374, NaN],
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
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.079, b: 0.997, c: -0.997, d: 0.079, tx: 20.9, ty: 1.55},
						transform: [20.9, 1.55, 1, 1, -1.492, 1.492, NaN],
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
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.006, b: 0.998, c: -0.998, d: 0.006, tx: 21.7, ty: 1.7},
						transform: [21.7, 1.7, 0.999, 0.999, -1.565, 1.565, NaN],
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
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.931, b: 0.365, c: -0.365, d: 0.931, tx: 26.85, ty: 3.6},
						transform: [26.85, 3.6, 1, 1, -0.374, 0.374, NaN],
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
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.987, b: -0.162, c: 0.162, d: 0.987, tx: 30.35, ty: -9.4},
						transform: [30.35, -9.4, 1, 1, 0.162, -0.162, NaN],
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
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.981, b: -0.19, c: 0.19, d: 0.981, tx: 29.3, ty: -5.4},
						transform: [29.3, -5.4, 0.999, 0.999, 0.191, -0.191, NaN],
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
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.931, b: 0.365, c: -0.365, d: 0.931, tx: 26.85, ty: 3.6},
						transform: [26.85, 3.6, 1, 1, -0.374, 0.374, NaN],
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
						to: 3,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.933, b: 0.36, c: -0.36, d: 0.933, tx: 14.9, ty: -2.05},
						transform: [14.9, -2.05, 1, 1, -0.369, 0.369, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.38, b: 0.925, c: -0.925, d: 0.38, tx: 17.05, ty: -10.8},
						transform: [17.05, -10.8, 1, 1, -1.181, 1.181, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.933, b: 0.36, c: -0.36, d: 0.933, tx: 14.9, ty: -2.05},
						transform: [14.9, -2.05, 1, 1, -0.369, 0.369, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.991, b: 0.134, c: -0.134, d: 0.991, tx: 17.1, ty: -12.05},
						transform: [17.1, -12.05, 1, 1, -0.135, 0.135, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.933, b: 0.36, c: -0.36, d: 0.933, tx: 14.9, ty: -2.05},
						transform: [14.9, -2.05, 1, 1, -0.369, 0.369, NaN],
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
						to: 0,
						classname: "_skeleton_spear_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.2, ty: -10.25},
						transform: [1.2, -10.25, 1, 1, -0.022, 0.022, NaN],
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
					{
						from: 1,
						to: 3,
						classname: "_skeleton_spear_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.05, ty: -7.05},
						transform: [1.05, -7.05, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.4], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_skeleton_spear_head_idle",
						instancename: "",
						matrix: {a: 0.999, b: 0.047, c: -0.047, d: 0.999, tx: 1.45, ty: -15.15},
						transform: [1.45, -15.15, 1, 1, -0.047, 0.047, NaN],
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
						classname: "_skeleton_spear_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.05, ty: -7.05},
						transform: [1.05, -7.05, 1, 1, -0.022, 0.022, NaN],
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
						classname: "_skeleton_spear_head_idle",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.45, ty: -16.15},
						transform: [1.45, -16.15, 1, 1, -0.034, 0.034, NaN],
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
						classname: "_skeleton_spear_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.2, ty: -10.25},
						transform: [1.2, -10.25, 1, 1, -0.022, 0.022, NaN],
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
						to: 0,
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -6.55, ty: -22.25},
						transform: [-6.55, -22.25, 1, 1, -0.022, 0.022, NaN],
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
					{
						from: 1,
						to: 3,
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -5.7, ty: -18.3},
						transform: [-5.7, -18.3, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.4], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 0.999, b: 0.047, c: -0.047, d: 0.999, tx: -5.55, ty: -27.65},
						transform: [-5.55, -27.65, 1, 1, -0.047, 0.047, NaN],
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
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -5.95, ty: -19.55},
						transform: [-5.95, -19.55, 1, 1, -0.022, 0.022, NaN],
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
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: -5.55, ty: -28.4},
						transform: [-5.55, -28.4, 1, 1, -0.034, 0.034, NaN],
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
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -6.05, ty: -22.75},
						transform: [-6.05, -22.75, 1, 1, -0.022, 0.022, NaN],
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
				name: "hittablebox",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_skeleton_spear_hittablebox",
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
						classname: "_skeleton_spear_hittablebox",
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
						classname: "_skeleton_spear_hittablebox",
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
						classname: "_skeleton_spear_hittablebox",
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
						classname: "_skeleton_spear_hittablebox",
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
						classname: "_skeleton_spear_attackbox",
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
						classname: "_skeleton_spear_attackbox",
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
						classname: "_skeleton_spear_attackbox",
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
						classname: "_skeleton_spear_attackbox",
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
						classname: "_skeleton_spear_attackbox",
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
						classname: "_skeleton_spear_common_stepbox",
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
						classname: "_skeleton_spear_common_stepbox",
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
	"_skeleton_spear_skeleton_ground_stop": {
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_leg_x",
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
						to: 4,
						classname: "_skeleton_spear_foot2_x",
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
						classname: "_skeleton_spear_foot2_x",
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
						classname: "_skeleton_spear_foot2_x",
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
						classname: "_skeleton_spear_foot2_x",
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
				name: "pelvis_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_skeleton_spear_pelvis2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.8, ty: 15.4},
						transform: [0.8, 15.4, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_pelvis2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.8, ty: 15.4},
						transform: [0.8, 15.4, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.8, ty: 14.5},
						transform: [0.8, 14.5, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.8, ty: 15.4},
						transform: [0.8, 15.4, 1, 1, 0, 0, 0],
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
						to: 4,
						classname: "_skeleton_spear_leg_x",
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
						to: 9,
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: -0.905, b: -0.425, c: -0.503, d: 1.071, tx: 3.5, ty: 18.9},
						transform: [3.5, 18.9, 1, 1.183, -0.439, -2.702, NaN],
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_leg_x",
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
						to: 4,
						classname: "_skeleton_spear_foot2_x",
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
						to: 9,
						classname: "_skeleton_spear_foot2_x",
						instancename: "",
						matrix: {a: 0.901, b: 0.433, c: -0.433, d: 0.901, tx: -0.85, ty: 25.2},
						transform: [-0.85, 25.2, 1, 1, -0.448, 0.448, NaN],
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
						classname: "_skeleton_spear_foot_x",
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
						classname: "_skeleton_spear_foot_x",
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
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_skeleton_spear_arm8_x",
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
						classname: "_skeleton_spear_arm8_x",
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
						classname: "_skeleton_spear_arm8_x",
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
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: 0.156, b: 0.988, c: -0.988, d: 0.156, tx: -17.55, ty: 13.05},
						transform: [-17.55, 13.05, 1, 1, -1.414, 1.414, NaN],
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
						to: 4,
						classname: "_skeleton_spear_arm1_x",
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
						classname: "_skeleton_spear_arm1_x",
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
						classname: "_skeleton_spear_arm1_x",
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.368, b: 0.93, c: 0.93, d: 0.368, tx: -12.25, ty: 0.95},
						transform: [-12.25, 0.95, 1, 1, 1.194, 1.947, NaN],
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
						to: 4,
						classname: "_skeleton_spear_body_x",
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
						classname: "_skeleton_spear_body_x",
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
						classname: "_skeleton_spear_body_x",
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
						classname: "_skeleton_spear_body_x",
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
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.931, b: 0.365, c: -0.365, d: 0.931, tx: 26.85, ty: 1.5},
						transform: [26.85, 1.5, 1, 1, -0.374, 0.374, NaN],
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
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.409, b: 0.912, c: -0.912, d: 0.409, tx: 17.6, ty: 8.4},
						transform: [17.6, 8.4, 1, 1, -1.149, 1.149, NaN],
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
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.962, b: 0.275, c: -0.275, d: 0.962, tx: 27, ty: -0.15},
						transform: [27, -0.15, 1, 1, -0.278, 0.278, NaN],
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
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.931, b: 0.365, c: -0.365, d: 0.931, tx: 26.85, ty: 1.5},
						transform: [26.85, 1.5, 1, 1, -0.374, 0.374, NaN],
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
						to: 4,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.933, b: 0.36, c: -0.36, d: 0.933, tx: 14.9, ty: -4.15},
						transform: [14.9, -4.15, 1, 1, -0.369, 0.369, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.257, b: 0.966, c: -0.966, d: 0.257, tx: 15.15, ty: -4.3},
						transform: [15.15, -4.3, 1, 1, -1.311, 1.311, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.963, b: 0.27, c: -0.27, d: 0.963, tx: 14.6, ty: -5.2},
						transform: [14.6, -5.2, 1, 1, -0.273, 0.273, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.933, b: 0.36, c: -0.36, d: 0.933, tx: 14.9, ty: -4.15},
						transform: [14.9, -4.15, 1, 1, -0.369, 0.369, NaN],
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
						to: 4,
						classname: "_skeleton_spear_head_stop",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.5, ty: -9.3},
						transform: [1.5, -9.3, 1, 1, -0.022, 0.022, NaN],
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
						classname: "_skeleton_spear_head_stop",
						instancename: "",
						matrix: {a: 0.978, b: -0.207, c: 0.207, d: 0.978, tx: 0.15, ty: -6.2},
						transform: [0.15, -6.2, 1, 1, 0.209, -0.209, NaN],
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
						classname: "_skeleton_spear_head_stop",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.65, ty: -10.65},
						transform: [1.65, -10.65, 1, 1, -0.022, 0.022, NaN],
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
						classname: "_skeleton_spear_head_stop",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.5, ty: -9.3},
						transform: [1.5, -9.3, 1, 1, -0.022, 0.022, NaN],
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
						to: 4,
						classname: "_skeleton_spear_helmet",
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
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 0.978, b: -0.207, c: 0.207, d: 0.978, tx: -9.3, ty: -16.7},
						transform: [-9.3, -16.7, 1, 1, 0.209, -0.209, NaN],
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
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -4.65, ty: -22.55},
						transform: [-4.65, -22.55, 1, 1, -0.022, 0.022, NaN],
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
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -5.15, ty: -21.2},
						transform: [-5.15, -21.2, 1, 1, -0.022, 0.022, NaN],
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
						to: 4,
						classname: "_skeleton_spear_sword_1_x",
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
						classname: "_skeleton_spear_sword_1_x",
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
						classname: "_skeleton_spear_sword_1_x",
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
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.949, b: -0.314, c: 0.314, d: 0.949, tx: -30.15, ty: 11.3},
						transform: [-30.15, 11.3, 1, 1, 0.319, -0.319, NaN],
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
				name: "hittablebox",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_skeleton_spear_hittablebox",
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
						classname: "_skeleton_spear_hittablebox",
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
						classname: "_skeleton_spear_hittablebox",
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
						classname: "_skeleton_spear_hittablebox",
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
						to: 13,
						classname: "_skeleton_spear_attackbox",
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
						classname: "_skeleton_spear_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.235, b: 0, c: 0, d: 0.433, tx: -32, ty: -2.55},
						transform: [-32, -2.55, 0.235, 0.433, 0, 0, 0],
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
						classname: "_skeleton_spear_common_stepbox",
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
						classname: "_skeleton_spear_common_stepbox",
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
						classname: "_skeleton_spear_common_stepbox",
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
						classname: "_skeleton_spear_common_stepbox",
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
	"_skeleton_spear_skeleton_ground_turn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 14,
		labels: {},
		layers: [
			{
				name: "leg_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_skeleton_spear_leg_x",
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
						from: 6,
						to: 6,
						classname: "_skeleton_spear_leg_x",
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
					{
						from: 7,
						to: 12,
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.9, ty: 18.2},
						transform: [3.9, 18.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.9, ty: 18.2},
						transform: [3.9, 18.2, 1, 1, 0, 0, 0],
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
						to: 5,
						classname: "_skeleton_spear_foot2_x",
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
						from: 6,
						to: 6,
						classname: "_skeleton_spear_foot2_x",
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
					{
						from: 7,
						to: 12,
						classname: "_skeleton_spear_foot2_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 4.4, ty: 25.2},
						transform: [4.4, 25.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_skeleton_spear_foot2_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 4.4, ty: 25.2},
						transform: [4.4, 25.2, 1, 1, 0, 3.142, NaN],
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
						to: 5,
						classname: "_skeleton_spear_leg_x",
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
						from: 6,
						to: 6,
						classname: "_skeleton_spear_leg_x",
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
					{
						from: 7,
						to: 12,
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -5.7, ty: 18.45},
						transform: [-5.7, 18.45, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -5.7, ty: 18.45},
						transform: [-5.7, 18.45, 1, 1, 0, 3.142, NaN],
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
						to: 5,
						classname: "_skeleton_spear_foot_x",
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
						from: 6,
						to: 6,
						classname: "_skeleton_spear_foot_x",
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
					{
						from: 7,
						to: 12,
						classname: "_skeleton_spear_foot_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -6.7, ty: 24.7},
						transform: [-6.7, 24.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_skeleton_spear_foot_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -6.7, ty: 24.7},
						transform: [-6.7, 24.7, 1, 1, 0, 3.142, NaN],
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
				name: "pelvis_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.8, ty: 15.4},
						transform: [0.8, 15.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.083, c: 0.083, d: 0.997, tx: 0.95, ty: 14.65},
						transform: [0.95, 14.65, 1, 1, 0.083, -0.083, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -0.75, ty: 15.4},
						transform: [-0.75, 15.4, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -0.75, ty: 15.4},
						transform: [-0.75, 15.4, 1, 1, 0, 3.142, NaN],
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
						to: 5,
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: 0.156, b: 0.988, c: -0.988, d: 0.156, tx: -17.55, ty: 13.05},
						transform: [-17.55, 13.05, 1, 1, -1.414, 1.414, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: 0.126, b: 0.992, c: -0.706, d: 0.09, tx: -12.1, ty: 14.7},
						transform: [-12.1, 14.7, 1, 0.712, -1.444, 1.444, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: -0.156, b: 0.988, c: 0.988, d: 0.156, tx: 9.3, ty: 13.25},
						transform: [9.3, 13.25, 1, 1, 1.414, 1.728, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: -0.156, b: 0.988, c: 0.988, d: 0.156, tx: 17.6, ty: 13.05},
						transform: [17.6, 13.05, 1, 1, 1.414, 1.728, NaN],
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
						to: 5,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.368, b: 0.93, c: 0.93, d: 0.368, tx: -12.25, ty: 0.95},
						transform: [-12.25, 0.95, 1, 1, 1.194, 1.947, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.032, b: 0.999, c: 0.999, d: -0.032, tx: -11.35, ty: 1.25},
						transform: [-11.35, 1.25, 1, 1, 1.603, 1.539, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.141, b: 0.99, c: -0.99, d: -0.141, tx: 12.3, ty: 0.9},
						transform: [12.3, 0.9, 1, 1, -1.713, 1.713, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.368, b: 0.93, c: -0.93, d: 0.368, tx: 12.3, ty: 0.95},
						transform: [12.3, 0.95, 1, 1, -1.194, 1.194, NaN],
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
						to: 5,
						classname: "_skeleton_spear_body_x",
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
						from: 6,
						to: 6,
						classname: "_skeleton_spear_body_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 1.05, ty: 0.55},
						transform: [1.05, 0.55, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_skeleton_spear_body_x",
						instancename: "",
						matrix: {a: -0.999, b: -0.049, c: -0.049, d: 0.999, tx: -2.2, ty: 0.7},
						transform: [-2.2, 0.7, 1, 1, -0.049, -3.093, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_skeleton_spear_body_x",
						instancename: "",
						matrix: {a: -0.999, b: 0.034, c: 0.034, d: 0.999, tx: -1, ty: 0.55},
						transform: [-1, 0.55, 1, 1, 0.034, 3.108, NaN],
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
						to: 5,
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.931, b: 0.365, c: -0.365, d: 0.931, tx: 26.85, ty: 1.5},
						transform: [26.85, 1.5, 1, 1, -0.374, 0.374, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.724, b: 0.69, c: -0.69, d: 0.724, tx: 17.65, ty: 7.65},
						transform: [17.65, 7.65, 1, 1, -0.761, 0.761, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: -0.396, b: 0.918, c: 0.918, d: 0.396, tx: -12.15, ty: 9.75},
						transform: [-12.15, 9.75, 1, 1, 1.163, 1.978, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: -0.931, b: 0.365, c: 0.365, d: 0.931, tx: -26.8, ty: 1.5},
						transform: [-26.8, 1.5, 1, 1, 0.374, 2.768, NaN],
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
						to: 5,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.933, b: 0.36, c: -0.36, d: 0.933, tx: 14.9, ty: -4.15},
						transform: [14.9, -4.15, 1, 1, -0.369, 0.369, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.274, b: 0.962, c: -0.962, d: 0.274, tx: 14.85, ty: -4.8},
						transform: [14.85, -4.8, 1, 1, -1.293, 1.293, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.022, b: 1, c: 1, d: -0.022, tx: -14.75, ty: -3.85},
						transform: [-14.75, -3.85, 1, 1, 1.593, 1.549, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.933, b: 0.36, c: 0.36, d: 0.933, tx: -14.85, ty: -4.15},
						transform: [-14.85, -4.15, 1, 1, 0.369, 2.773, NaN],
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
						to: 5,
						classname: "_skeleton_spear_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.5, ty: -9.3},
						transform: [1.5, -9.3, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_spear_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 4.05, ty: -7.8},
						transform: [4.05, -7.8, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_skeleton_spear_head_idle",
						instancename: "",
						matrix: {a: -1, b: 0.022, c: 0.022, d: 1, tx: -4.3, ty: -7.65},
						transform: [-4.3, -7.65, 1, 1, 0.022, 3.12, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_skeleton_spear_head_idle",
						instancename: "",
						matrix: {a: -1, b: 0.022, c: 0.022, d: 1, tx: -1.45, ty: -9.3},
						transform: [-1.45, -9.3, 1, 1, 0.022, 3.12, NaN],
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
						to: 5,
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -5.85, ty: -21.55},
						transform: [-5.85, -21.55, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -3.3, ty: -19.7},
						transform: [-3.3, -19.7, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: -1, b: 0.022, c: 0.022, d: 1, tx: 2.7, ty: -19.2},
						transform: [2.7, -19.2, 1, 1, 0.022, 3.12, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: -1, b: 0.022, c: 0.022, d: 1, tx: 5.2, ty: -20.85},
						transform: [5.2, -20.85, 1, 1, 0.022, 3.12, NaN],
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
						to: 5,
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.949, b: -0.314, c: 0.314, d: 0.949, tx: -30.15, ty: 11.3},
						transform: [-30.15, 11.3, 1, 1, 0.319, -0.319, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.077, c: 0.077, d: 0.997, tx: -18.65, ty: 11.55},
						transform: [-18.65, 11.55, 1, 1, 0.077, -0.077, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.529, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: -0.992, b: -0.127, c: -0.127, d: 0.992, tx: 19.85, ty: 11.7},
						transform: [19.85, 11.7, 1, 1, -0.127, -3.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: -0.949, b: -0.314, c: -0.314, d: 0.949, tx: 30.2, ty: 11.3},
						transform: [30.2, 11.3, 1, 1, -0.319, -2.822, NaN],
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
				name: "hittablebox",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_skeleton_spear_hittablebox",
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
						classname: "_skeleton_spear_hittablebox",
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
						classname: "_skeleton_spear_hittablebox",
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
						classname: "_skeleton_spear_hittablebox",
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
				name: "attackbox",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_skeleton_spear_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.193, b: 0, c: 0, d: 0.429, tx: -35.3, ty: -2.4},
						transform: [-35.3, -2.4, 0.193, 0.429, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.556, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_spear_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.114, b: 0, c: 0, d: 0.269, tx: -15.4, ty: -4.2},
						transform: [-15.4, -4.2, 0.114, 0.269, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.556, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_skeleton_spear_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.114, b: 0, c: 0, d: 0.269, tx: -3.9, ty: -3},
						transform: [-3.9, -3, 0.114, 0.269, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.556, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_skeleton_spear_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.196, b: 0, c: 0, d: 0.374, tx: 33.85, ty: -6.05},
						transform: [33.85, -6.05, 0.196, 0.374, 0, 0, 0],
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
	"_skeleton_spear_skeleton_die": {
		type: "movieclip",
		fps: 30,
		totalFrames: 18,
		labels: {},
		layers: [
			{
				name: "pelvis_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: 13.1},
						transform: [-0.3, 13.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: 12.5},
						transform: [-0.3, 12.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: 13.1},
						transform: [-0.3, 13.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 16,
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: 12.5},
						transform: [-0.3, 12.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: 13.1},
						transform: [-0.3, 13.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
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
						classname: "_skeleton_spear_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 0.55},
						transform: [1.05, 0.55, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_skeleton_spear_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: -0.8},
						transform: [1.05, -0.8, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_skeleton_spear_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 0.55},
						transform: [1.05, 0.55, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 16,
						classname: "_skeleton_spear_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: -0.8},
						transform: [1.05, -0.8, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_skeleton_spear_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 0.55},
						transform: [1.05, 0.55, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm_flap_die",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_skeleton_spear_arm_flap_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 16.1, ty: -3.95},
						transform: [16.1, -3.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_skeleton_spear_arm_flap_die",
						instancename: "",
						matrix: {a: 0.995, b: 0.1, c: -0.1, d: 0.995, tx: 16.1, ty: -3.95},
						transform: [16.1, -3.95, 1, 1, -0.1, 0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_skeleton_spear_arm_flap_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 16.1, ty: -3.95},
						transform: [16.1, -3.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 16,
						classname: "_skeleton_spear_arm_flap_die",
						instancename: "",
						matrix: {a: 0.995, b: 0.1, c: -0.1, d: 0.995, tx: 16.1, ty: -3.95},
						transform: [16.1, -3.95, 1, 1, -0.1, 0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_skeleton_spear_arm_flap_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 16.1, ty: -3.95},
						transform: [16.1, -3.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm_flap_die",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_skeleton_spear_arm_flap_die",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -17.5, ty: -3.95},
						transform: [-17.5, -3.95, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_skeleton_spear_arm_flap_die",
						instancename: "",
						matrix: {a: -0.978, b: 0.207, c: 0.207, d: 0.978, tx: -17.5, ty: -3.95},
						transform: [-17.5, -3.95, 1, 1, 0.209, 2.933, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_skeleton_spear_arm_flap_die",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -17.5, ty: -3.95},
						transform: [-17.5, -3.95, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 16,
						classname: "_skeleton_spear_arm_flap_die",
						instancename: "",
						matrix: {a: -0.978, b: 0.207, c: 0.207, d: 0.978, tx: -17.5, ty: -3.95},
						transform: [-17.5, -3.95, 1, 1, 0.209, 2.933, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_skeleton_spear_arm_flap_die",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -17.5, ty: -3.95},
						transform: [-17.5, -3.95, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_die",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_skeleton_spear_leg_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6, ty: 13.75},
						transform: [6, 13.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_skeleton_spear_leg_die",
						instancename: "",
						matrix: {a: 0.992, b: -0.126, c: 0.126, d: 0.992, tx: 6, ty: 13.1},
						transform: [6, 13.1, 1, 1, 0.126, -0.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_skeleton_spear_leg_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6, ty: 13.75},
						transform: [6, 13.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 16,
						classname: "_skeleton_spear_leg_die",
						instancename: "",
						matrix: {a: 0.992, b: -0.126, c: 0.126, d: 0.992, tx: 6, ty: 13.1},
						transform: [6, 13.1, 1, 1, 0.126, -0.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_skeleton_spear_leg_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6, ty: 13.75},
						transform: [6, 13.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_die",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_skeleton_spear_leg_die",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -6.8, ty: 13.75},
						transform: [-6.8, 13.75, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_skeleton_spear_leg_die",
						instancename: "",
						matrix: {a: -0.987, b: -0.161, c: -0.161, d: 0.987, tx: -6.8, ty: 13.1},
						transform: [-6.8, 13.1, 1, 1, -0.161, -2.98, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_skeleton_spear_leg_die",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -6.8, ty: 13.75},
						transform: [-6.8, 13.75, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 16,
						classname: "_skeleton_spear_leg_die",
						instancename: "",
						matrix: {a: -0.987, b: -0.161, c: -0.161, d: 0.987, tx: -6.8, ty: 13.1},
						transform: [-6.8, 13.1, 1, 1, -0.161, -2.98, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_skeleton_spear_leg_die",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -6.8, ty: 13.75},
						transform: [-6.8, 13.75, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "mandibula3_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_skeleton_spear_mandibula3_x",
						instancename: "",
						matrix: {a: 0.992, b: 0.125, c: -0.125, d: 0.992, tx: -2.5, ty: -4.05},
						transform: [-2.5, -4.05, 1, 1, -0.126, 0.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_skeleton_spear_mandibula3_x",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -1.15, ty: -0.4},
						transform: [-1.15, -0.4, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_skeleton_spear_mandibula3_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.074, c: 0.074, d: 0.997, tx: -0.6, ty: -3.65},
						transform: [-0.6, -3.65, 1, 1, 0.074, -0.074, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 16,
						classname: "_skeleton_spear_mandibula3_x",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -1.15, ty: -0.4},
						transform: [-1.15, -0.4, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_skeleton_spear_mandibula3_x",
						instancename: "",
						matrix: {a: 0.992, b: 0.125, c: -0.125, d: 0.992, tx: -2.5, ty: -4.05},
						transform: [-2.5, -4.05, 1, 1, -0.126, 0.126, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "headbase3_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_skeleton_spear_headbase3_x",
						instancename: "",
						matrix: {a: 0.992, b: 0.125, c: -0.125, d: 0.992, tx: 0.5, ty: -16.6},
						transform: [0.5, -16.6, 1, 1, -0.126, 0.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_skeleton_spear_headbase3_x",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.021, d: 0.957, tx: 0.2, ty: -20.1},
						transform: [0.2, -20.1, 1, 0.957, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_skeleton_spear_headbase3_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.074, c: 0.074, d: 0.997, tx: -0.05, ty: -16.55},
						transform: [-0.05, -16.55, 1, 1, 0.074, -0.074, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 16,
						classname: "_skeleton_spear_headbase3_x",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.021, d: 0.957, tx: 0.2, ty: -20.1},
						transform: [0.2, -20.1, 1, 0.957, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_skeleton_spear_headbase3_x",
						instancename: "",
						matrix: {a: 0.992, b: 0.125, c: -0.125, d: 0.992, tx: 0.5, ty: -16.6},
						transform: [0.5, -16.6, 1, 1, -0.126, 0.126, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye_die",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_skeleton_spear_eye_die",
						instancename: "",
						matrix: {a: 0.992, b: 0.125, c: -0.125, d: 0.992, tx: 11.1, ty: -12.4},
						transform: [11.1, -12.4, 1, 1, -0.126, 0.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_skeleton_spear_eye_die",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 11.2, ty: -18.15},
						transform: [11.2, -18.15, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_skeleton_spear_eye_die",
						instancename: "",
						matrix: {a: 0.997, b: -0.074, c: 0.074, d: 0.997, tx: 11.15, ty: -14.55},
						transform: [11.15, -14.55, 1, 1, 0.074, -0.074, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 16,
						classname: "_skeleton_spear_eye_die",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 11.2, ty: -18.15},
						transform: [11.2, -18.15, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_skeleton_spear_eye_die",
						instancename: "",
						matrix: {a: 0.992, b: 0.125, c: -0.125, d: 0.992, tx: 11.1, ty: -12.4},
						transform: [11.1, -12.4, 1, 1, -0.126, 0.126, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye_die",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_skeleton_spear_eye_die",
						instancename: "",
						matrix: {a: -0.992, b: -0.125, c: -0.125, d: 0.992, tx: -10.85, ty: -15.35},
						transform: [-10.85, -15.35, 1, 1, -0.126, -3.016, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_skeleton_spear_eye_die",
						instancename: "",
						matrix: {a: -1, b: -0.022, c: -0.022, d: 1, tx: -11, ty: -18.3},
						transform: [-11, -18.3, 1, 1, -0.022, -3.12, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_skeleton_spear_eye_die",
						instancename: "",
						matrix: {a: -0.997, b: 0.074, c: 0.074, d: 0.997, tx: -10.95, ty: -13.05},
						transform: [-10.95, -13.05, 1, 1, 0.074, 3.068, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 16,
						classname: "_skeleton_spear_eye_die",
						instancename: "",
						matrix: {a: -1, b: -0.022, c: -0.022, d: 1, tx: -11, ty: -18.3},
						transform: [-11, -18.3, 1, 1, -0.022, -3.12, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_skeleton_spear_eye_die",
						instancename: "",
						matrix: {a: -0.992, b: -0.125, c: -0.125, d: 0.992, tx: -10.85, ty: -15.35},
						transform: [-10.85, -15.35, 1, 1, -0.126, -3.016, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "nose_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_skeleton_spear_nose_x",
						instancename: "",
						matrix: {a: 0.992, b: 0.125, c: -0.125, d: 0.992, tx: -1, ty: -9.45},
						transform: [-1, -9.45, 1, 1, -0.126, 0.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_skeleton_spear_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -0.6, ty: -14.7},
						transform: [-0.6, -14.7, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_skeleton_spear_nose_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.074, c: 0.074, d: 0.997, tx: -0.15, ty: -9.25},
						transform: [-0.15, -9.25, 1, 1, 0.074, -0.074, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 16,
						classname: "_skeleton_spear_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -0.6, ty: -14.7},
						transform: [-0.6, -14.7, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_skeleton_spear_nose_x",
						instancename: "",
						matrix: {a: 0.992, b: 0.125, c: -0.125, d: 0.992, tx: -1, ty: -9.45},
						transform: [-1, -9.45, 1, 1, -0.126, 0.126, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.472, 0], [0.498, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_skeleton_spear_skeleton_waiting": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "leg_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: -0.083, b: -0.997, c: -0.997, d: 0.083, tx: -25.45, ty: 28.1},
						transform: [-25.45, 28.1, 1, 1, -1.488, -1.654, NaN],
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
						classname: "_skeleton_spear_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -32.1, ty: 27.5},
						transform: [-32.1, 27.5, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: 0.226, b: -0.974, c: 0.974, d: 0.226, tx: 23.45, ty: 27.25},
						transform: [23.45, 27.25, 1, 1, 1.343, -1.343, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.927, b: -0.717, c: 0.717, d: -0.927, tx: -26.15, ty: 12.9},
						transform: [-26.15, 12.9, 1.172, 1.172, 2.483, -2.483, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "pelvis_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -20.8, ty: 25.4},
						transform: [-20.8, 25.4, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.887, b: 0.462, c: -0.462, d: 0.887, tx: -28, ty: 19.05},
						transform: [-28, 19.05, 1, 1, -0.48, 0.48, NaN],
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
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: 0.156, b: 0.988, c: -0.988, d: 0.156, tx: -17.55, ty: 13.05},
						transform: [-17.55, 13.05, 1, 1, -1.414, 1.414, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.368, b: 0.93, c: 0.93, d: 0.368, tx: -12.25, ty: 0.95},
						transform: [-12.25, 0.95, 1, 1, 1.194, 1.947, NaN],
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
						to: 0,
						classname: "_skeleton_spear_body_x",
						instancename: "",
						matrix: {a: -0.587, b: -0.809, c: 0.809, d: -0.587, tx: 9.9, ty: 13.05},
						transform: [9.9, 13.05, 1, 1, 2.199, -2.199, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.668, b: -0.975, c: 0.975, d: 0.668, tx: 15.75, ty: 8.5},
						transform: [15.75, 8.5, 1.181, 1.181, 0.97, -0.97, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.933, b: 0.36, c: -0.36, d: 0.933, tx: 4.95, ty: 23.65},
						transform: [4.95, 23.65, 1, 1, -0.369, 0.369, NaN],
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
						classname: "_skeleton_spear_head_die_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.031, c: -0.031, d: 0.999, tx: 1.5, ty: 22.45},
						transform: [1.5, 22.45, 1, 1, -0.031, 0.031, NaN],
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
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 0.999, b: 0.031, c: -0.031, d: 0.999, tx: -5.85, ty: 11.95},
						transform: [-5.85, 11.95, 1, 1, -0.031, 0.031, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_spear_skeleton_spawn": {
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
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: -0.083, b: -0.997, c: -0.997, d: 0.083, tx: -25.45, ty: 28.1},
						transform: [-25.45, 28.1, 1, 1, -1.488, -1.654, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 5,
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: -0.083, b: -0.997, c: -0.997, d: 0.083, tx: -25.45, ty: 28.1},
						transform: [-25.45, 28.1, 1, 1, -1.488, -1.654, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -3.85, ty: 18.2},
						transform: [-3.85, 18.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.418], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 18,
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1.29, tx: -3.85, ty: 16.5},
						transform: [-3.85, 16.5, 1, 1.29, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 23,
						classname: "_skeleton_spear_leg_x",
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
						from: 24,
						to: 24,
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -32.1, ty: 27.5},
						transform: [-32.1, 27.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 5,
						classname: "_skeleton_spear_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -32.1, ty: 27.5},
						transform: [-32.1, 27.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_skeleton_spear_foot2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.35, ty: 25.2},
						transform: [-4.35, 25.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.418], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 18,
						classname: "_skeleton_spear_foot2_x",
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
						from: 19,
						to: 23,
						classname: "_skeleton_spear_foot2_x",
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
						from: 24,
						to: 24,
						classname: "_skeleton_spear_foot2_x",
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
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: 0.226, b: -0.974, c: 0.974, d: 0.226, tx: 23.45, ty: 27.25},
						transform: [23.45, 27.25, 1, 1, 1.343, -1.343, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 5,
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: 0.226, b: -0.974, c: 0.974, d: 0.226, tx: 23.45, ty: 27.25},
						transform: [23.45, 27.25, 1, 1, 1.343, -1.343, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5.75, ty: 18.45},
						transform: [5.75, 18.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.418], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 18,
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.374, tx: 5.75, ty: 16.25},
						transform: [5.75, 16.25, 1, 1.374, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 23,
						classname: "_skeleton_spear_leg_x",
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
						from: 24,
						to: 24,
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.927, b: -0.717, c: 0.717, d: -0.927, tx: -26.15, ty: 12.9},
						transform: [-26.15, 12.9, 1.172, 1.172, 2.483, -2.483, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 5,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.927, b: -0.717, c: 0.717, d: -0.927, tx: -26.15, ty: 12.9},
						transform: [-26.15, 12.9, 1.172, 1.172, 2.483, -2.483, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_skeleton_spear_foot_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.75, ty: 24.7},
						transform: [6.75, 24.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.418], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 18,
						classname: "_skeleton_spear_foot_x",
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
						from: 19,
						to: 23,
						classname: "_skeleton_spear_foot_x",
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
						from: 24,
						to: 24,
						classname: "_skeleton_spear_foot_x",
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
				name: "pelvis_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -20.8, ty: 25.4},
						transform: [-20.8, 25.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 5,
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -20.8, ty: 25.4},
						transform: [-20.8, 25.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.8, ty: 15.4},
						transform: [0.8, 15.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.418], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 18,
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.3, ty: 12.7},
						transform: [0.3, 12.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 23,
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.1, ty: 15.25},
						transform: [1.1, 15.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.8, ty: 15.4},
						transform: [0.8, 15.4, 1, 1, 0, 0, 0],
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
						to: 2,
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.887, b: 0.462, c: -0.462, d: 0.887, tx: -28, ty: 19.05},
						transform: [-28, 19.05, 1, 1, -0.48, 0.48, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 5,
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.887, b: 0.462, c: -0.462, d: 0.887, tx: -28, ty: 19.05},
						transform: [-28, 19.05, 1, 1, -0.48, 0.48, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.949, b: -0.314, c: 0.314, d: 0.949, tx: -30.15, ty: 11.3},
						transform: [-30.15, 11.3, 1, 1, 0.319, -0.319, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.418], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 18,
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.949, b: -0.314, c: 0.314, d: 0.949, tx: -35.8, ty: -21.45},
						transform: [-35.8, -21.45, 1, 1, 0.319, -0.319, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 23,
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.935, b: -0.354, c: 0.354, d: 0.935, tx: -28.25, ty: 12.05},
						transform: [-28.25, 12.05, 1, 1, 0.362, -0.362, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.949, b: -0.314, c: 0.314, d: 0.949, tx: -30.15, ty: 11.3},
						transform: [-30.15, 11.3, 1, 1, 0.319, -0.319, NaN],
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
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: 0.156, b: 0.988, c: -0.988, d: 0.156, tx: -17.55, ty: 13.05},
						transform: [-17.55, 13.05, 1, 1, -1.414, 1.414, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 5,
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: 0.156, b: 0.988, c: -0.988, d: 0.156, tx: -17.55, ty: 13.05},
						transform: [-17.55, 13.05, 1, 1, -1.414, 1.414, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: 0.156, b: 0.988, c: -0.988, d: 0.156, tx: -17.55, ty: 13.05},
						transform: [-17.55, 13.05, 1, 1, -1.414, 1.414, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.418], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 18,
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: -0.861, b: 0.508, c: -0.508, d: -0.861, tx: -29.05, ty: -6.3},
						transform: [-29.05, -6.3, 1, 1, -2.609, 2.609, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 23,
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: 0.156, b: 0.988, c: -0.988, d: 0.156, tx: -15.65, ty: 13.85},
						transform: [-15.65, 13.85, 1, 1, -1.414, 1.414, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: 0.156, b: 0.988, c: -0.988, d: 0.156, tx: -17.55, ty: 13.05},
						transform: [-17.55, 13.05, 1, 1, -1.414, 1.414, NaN],
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
						to: 2,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.368, b: 0.93, c: 0.93, d: 0.368, tx: -12.25, ty: 0.95},
						transform: [-12.25, 0.95, 1, 1, 1.194, 1.947, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 5,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.368, b: 0.93, c: 0.93, d: 0.368, tx: -12.25, ty: 0.95},
						transform: [-12.25, 0.95, 1, 1, 1.194, 1.947, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.368, b: 0.93, c: 0.93, d: 0.368, tx: -12.25, ty: 0.95},
						transform: [-12.25, 0.95, 1, 1, 1.194, 1.947, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.418], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 18,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.984, b: -0.178, c: -0.178, d: 0.984, tx: -15.4, ty: -3.9},
						transform: [-15.4, -3.9, 1, 1, -0.179, -2.962, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 23,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.247, b: 0.969, c: 0.969, d: 0.247, tx: -12.25, ty: 0.9},
						transform: [-12.25, 0.9, 1, 1, 1.321, 1.821, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.368, b: 0.93, c: 0.93, d: 0.368, tx: -12.25, ty: 0.95},
						transform: [-12.25, 0.95, 1, 1, 1.194, 1.947, NaN],
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
						to: 2,
						classname: "_skeleton_spear_body_x",
						instancename: "",
						matrix: {a: -0.587, b: -0.809, c: 0.809, d: -0.587, tx: 9.9, ty: 13.05},
						transform: [9.9, 13.05, 1, 1, 2.199, -2.199, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 5,
						classname: "_skeleton_spear_body_x",
						instancename: "",
						matrix: {a: -0.587, b: -0.809, c: 0.809, d: -0.587, tx: 9.9, ty: 13.05},
						transform: [9.9, 13.05, 1, 1, 2.199, -2.199, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_skeleton_spear_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 0.55},
						transform: [1.05, 0.55, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.418], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 18,
						classname: "_skeleton_spear_body_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.103, c: -0.103, d: 0.995, tx: 1.4, ty: -2.3},
						transform: [1.4, -2.3, 1, 1, -0.103, 0.103, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 23,
						classname: "_skeleton_spear_body_x",
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
						from: 24,
						to: 24,
						classname: "_skeleton_spear_body_x",
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
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.668, b: -0.975, c: 0.975, d: 0.668, tx: 15.75, ty: 8.5},
						transform: [15.75, 8.5, 1.181, 1.181, 0.97, -0.97, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 5,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.668, b: -0.975, c: 0.975, d: 0.668, tx: 15.75, ty: 8.5},
						transform: [15.75, 8.5, 1.181, 1.181, 0.97, -0.97, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.988, b: 0.155, c: -0.155, d: 0.988, tx: 29.45, ty: -0.6},
						transform: [29.45, -0.6, 1, 1, -0.156, 0.156, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.418], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 18,
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.96, b: -0.281, c: 0.281, d: 0.96, tx: 30.65, ty: -5.75},
						transform: [30.65, -5.75, 1, 1, 0.285, -0.285, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 23,
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.896, b: 0.444, c: -0.444, d: 0.896, tx: 25.45, ty: 3.65},
						transform: [25.45, 3.65, 1, 1, -0.46, 0.46, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.931, b: 0.365, c: -0.365, d: 0.931, tx: 26.85, ty: 1.5},
						transform: [26.85, 1.5, 1, 1, -0.374, 0.374, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.933, b: 0.36, c: -0.36, d: 0.933, tx: 4.95, ty: 23.65},
						transform: [4.95, 23.65, 1, 1, -0.369, 0.369, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 5,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.933, b: 0.36, c: -0.36, d: 0.933, tx: 4.95, ty: 23.65},
						transform: [4.95, 23.65, 1, 1, -0.369, 0.369, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.988, b: 0.155, c: -0.155, d: 0.988, tx: 14.9, ty: -4.15},
						transform: [14.9, -4.15, 1, 1, -0.156, 0.156, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.418], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 18,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.119, c: 0.119, d: 0.993, tx: 16.75, ty: -6.3},
						transform: [16.75, -6.3, 1, 1, 0.119, -0.119, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 23,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.868, b: 0.497, c: -0.497, d: 0.868, tx: 14.9, ty: -4.2},
						transform: [14.9, -4.2, 1, 1, -0.52, 0.52, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.933, b: 0.36, c: -0.36, d: 0.933, tx: 14.9, ty: -4.15},
						transform: [14.9, -4.15, 1, 1, -0.369, 0.369, NaN],
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
						to: 2,
						classname: "_skeleton_spear_head_die_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.031, c: -0.031, d: 0.999, tx: 1.5, ty: 22.45},
						transform: [1.5, 22.45, 1, 1, -0.031, 0.031, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 5,
						classname: "_skeleton_spear_head_die_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.031, c: -0.031, d: 0.999, tx: 1.5, ty: 22.45},
						transform: [1.5, 22.45, 1, 1, -0.031, 0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_skeleton_spear_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.5, ty: -9.3},
						transform: [1.5, -9.3, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.418], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 18,
						classname: "_skeleton_spear_head_idle",
						instancename: "",
						matrix: {a: 0.978, b: 0.206, c: -0.206, d: 0.978, tx: 1.45, ty: -13.45},
						transform: [1.45, -13.45, 1, 1, -0.208, 0.208, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 23,
						classname: "_skeleton_spear_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.15, ty: -6.6},
						transform: [1.15, -6.6, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_skeleton_spear_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.5, ty: -9.3},
						transform: [1.5, -9.3, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head1 copia",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 0.999, b: 0.031, c: -0.031, d: 0.999, tx: -5.5, ty: 11.6},
						transform: [-5.5, 11.6, 1, 1, -0.031, 0.031, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 5,
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 0.999, b: 0.031, c: -0.031, d: 0.999, tx: -5.5, ty: 11.6},
						transform: [-5.5, 11.6, 1, 1, -0.031, 0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0], [0.571, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -5.5, ty: -20.5},
						transform: [-5.5, -20.5, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.418], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 18,
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 0.978, b: 0.206, c: -0.206, d: 0.978, tx: -3.1, ty: -26.05},
						transform: [-3.1, -26.05, 1, 1, -0.208, 0.208, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 23,
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -5.85, ty: -17.8},
						transform: [-5.85, -17.8, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -5.15, ty: -20.5},
						transform: [-5.15, -20.5, 1, 1, -0.022, 0.022, NaN],
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
						to: 24,
						classname: "_skeleton_spear_common_fx_spawn",
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
		]
	},
	"_skeleton_spear_skeleton_crash": {
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
						classname: "_skeleton_spear_crash_part_2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.95, ty: 4.9},
						transform: [-6.95, 4.9, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_crash_part_3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -30.2, ty: -38.15},
						transform: [-30.2, -38.15, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_crash_part_4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -35.7, ty: -9.85},
						transform: [-35.7, -9.85, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_crash_part_5",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -37.7, ty: -25.2},
						transform: [-37.7, -25.2, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_crash_part_6",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 23.15, ty: -24.85},
						transform: [23.15, -24.85, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_crash_part_3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.2, ty: -11.4},
						transform: [24.2, -11.4, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_crash_part_4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 25.15, ty: 1.8},
						transform: [25.15, 1.8, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_crash_part_3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 23.05, ty: -36.05},
						transform: [23.05, -36.05, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_crash_part_6",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -31.45, ty: -1.4},
						transform: [-31.45, -1.4, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_crash_part_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.15, ty: -21.9},
						transform: [-5.15, -21.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_spear_skeleton_attack": {
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: -0.64, b: -0.768, c: -0.768, d: 0.64, tx: -3.85, ty: 12.1},
						transform: [-3.85, 12.1, 1, 1, -0.876, -2.266, NaN],
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
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: -0.657, b: -0.754, c: -0.754, d: 0.657, tx: -5.9, ty: 10.5},
						transform: [-5.9, 10.5, 1, 1, -0.854, -2.288, NaN],
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_foot2_x",
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
						classname: "_skeleton_spear_foot2_x",
						instancename: "",
						matrix: {a: 0.875, b: 0.485, c: -0.485, d: 0.875, tx: -9.15, ty: 15.2},
						transform: [-9.15, 15.2, 1, 1, -0.506, 0.506, NaN],
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
						classname: "_skeleton_spear_foot2_x",
						instancename: "",
						matrix: {a: 0.885, b: 0.465, c: -0.465, d: 0.885, tx: -11.1, ty: 13.7},
						transform: [-11.1, 13.7, 1, 1, -0.484, 0.484, NaN],
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
						classname: "_skeleton_spear_foot2_x",
						instancename: "",
						matrix: {a: 0.952, b: 0.305, c: -0.305, d: 0.952, tx: -3.95, ty: 14.2},
						transform: [-3.95, 14.2, 1, 1, -0.31, 0.31, NaN],
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
						classname: "_skeleton_spear_foot2_x",
						instancename: "",
						matrix: {a: 0.963, b: 0.268, c: -0.268, d: 0.963, tx: -2.85, ty: 14.3},
						transform: [-2.85, 14.3, 1, 1, -0.272, 0.272, NaN],
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
						classname: "_skeleton_spear_foot2_x",
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
						classname: "_skeleton_spear_foot2_x",
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
						classname: "_skeleton_spear_foot2_x",
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: 0.887, b: -0.461, c: 0.461, d: 0.887, tx: 5.75, ty: 12.35},
						transform: [5.75, 12.35, 1, 1, 0.479, -0.479, NaN],
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
						classname: "_skeleton_spear_leg_x",
						instancename: "",
						matrix: {a: 0.837, b: -0.548, c: 0.548, d: 0.837, tx: 4.9, ty: 11.85},
						transform: [4.9, 11.85, 1, 1, 0.58, -0.58, NaN],
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_leg_x",
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
						classname: "_skeleton_spear_foot_x",
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
						classname: "_skeleton_spear_foot_x",
						instancename: "",
						matrix: {a: 0.944, b: -0.329, c: 0.329, d: 0.944, tx: 8.95, ty: 17.65},
						transform: [8.95, 17.65, 1, 1, 0.335, -0.335, NaN],
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
						classname: "_skeleton_spear_foot_x",
						instancename: "",
						matrix: {a: 0.922, b: -0.387, c: 0.387, d: 0.922, tx: 9.05, ty: 16.95},
						transform: [9.05, 16.95, 1, 1, 0.397, -0.397, NaN],
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
						classname: "_skeleton_spear_foot_x",
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
						classname: "_skeleton_spear_foot_x",
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
						classname: "_skeleton_spear_foot_x",
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
						classname: "_skeleton_spear_foot_x",
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
						classname: "_skeleton_spear_foot_x",
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
				name: "pelvis_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.8, ty: 15.4},
						transform: [0.8, 15.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.8, ty: 9.3},
						transform: [0.8, 9.3, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.073, c: -0.073, d: 0.997, tx: 0.25, ty: 8.45},
						transform: [0.25, 8.45, 1, 1, -0.074, 0.074, NaN],
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
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 0.981, b: -0.195, c: 0.195, d: 0.981, tx: 4.6, ty: 6.5},
						transform: [4.6, 6.5, 1, 1, 0.196, -0.196, NaN],
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
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 0.973, b: -0.232, c: 0.232, d: 0.973, tx: 5.35, ty: 5.8},
						transform: [5.35, 5.8, 1, 1, 0.234, -0.234, NaN],
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
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.8, ty: 15.4},
						transform: [0.8, 15.4, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.8, ty: 16.2},
						transform: [0.8, 16.2, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.8, ty: 15.4},
						transform: [0.8, 15.4, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: 0.156, b: 0.988, c: -0.988, d: 0.156, tx: -17.55, ty: 13.05},
						transform: [-17.55, 13.05, 1, 1, -1.414, 1.414, NaN],
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
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: -0.801, b: 0.598, c: -0.598, d: -0.801, tx: -28.75, ty: -13.35},
						transform: [-28.75, -13.35, 1, 1, -2.501, 2.501, NaN],
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
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: -0.843, b: 0.537, c: -0.537, d: -0.843, tx: -27.95, ty: -14.95},
						transform: [-27.95, -14.95, 1, 1, -2.574, 2.574, NaN],
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
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: 0.961, b: 0.275, c: -0.275, d: 0.961, tx: -25.5, ty: -7.05},
						transform: [-25.5, -7.05, 1, 1, -0.279, 0.279, NaN],
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
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.101, c: -0.101, d: 0.995, tx: -26.7, ty: -5.3},
						transform: [-26.7, -5.3, 1, 1, -0.101, 0.101, NaN],
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
						classname: "_skeleton_spear_arm8_x",
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
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: 0.005, b: 1, c: -1, d: 0.005, tx: -17.25, ty: 16.05},
						transform: [-17.25, 16.05, 1, 1, -1.566, 1.566, NaN],
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
						classname: "_skeleton_spear_arm8_x",
						instancename: "",
						matrix: {a: 0.156, b: 0.988, c: -0.988, d: 0.156, tx: -17.55, ty: 13.05},
						transform: [-17.55, 13.05, 1, 1, -1.414, 1.414, NaN],
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
						to: 0,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.368, b: 0.93, c: 0.93, d: 0.368, tx: -12.25, ty: 0.95},
						transform: [-12.25, 0.95, 1, 1, 1.194, 1.947, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.893, b: -0.45, c: -0.45, d: 0.893, tx: -15.85, ty: -7.45},
						transform: [-15.85, -7.45, 1, 1, -0.467, -2.675, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.954, b: -0.3, c: -0.3, d: 0.954, tx: -14.65, ty: -11.05},
						transform: [-14.65, -11.05, 1, 1, -0.305, -2.836, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.952, b: 0.304, c: 0.304, d: 0.952, tx: -14.15, ty: -11.6},
						transform: [-14.15, -11.6, 1, 1, 0.309, 2.832, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.916, b: 0.401, c: 0.401, d: 0.916, tx: -15.65, ty: -10.95},
						transform: [-15.65, -10.95, 1, 1, 0.413, 2.729, NaN],
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
						classname: "_skeleton_spear_arm1_x",
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.368, b: 0.93, c: 0.93, d: 0.368, tx: -11.95, ty: 4.95},
						transform: [-11.95, 4.95, 1, 1, 1.194, 1.947, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: -0.368, b: 0.93, c: 0.93, d: 0.368, tx: -12.25, ty: 0.95},
						transform: [-12.25, 0.95, 1, 1, 1.194, 1.947, NaN],
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
						classname: "_skeleton_spear_body_x",
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
						classname: "_skeleton_spear_body_x",
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
						classname: "_skeleton_spear_body_x",
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
						classname: "_skeleton_spear_body_x",
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
						classname: "_skeleton_spear_body_x",
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
						classname: "_skeleton_spear_body_x",
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
						classname: "_skeleton_spear_body_x",
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
						classname: "_skeleton_spear_body_x",
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
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.931, b: 0.365, c: -0.365, d: 0.931, tx: 26.85, ty: 1.5},
						transform: [26.85, 1.5, 1, 1, -0.374, 0.374, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.043, c: -0.043, d: 0.999, tx: 28, ty: -8.85},
						transform: [28, -8.85, 1, 1, -0.043, 0.043, NaN],
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
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.097, c: 0.097, d: 0.995, tx: 28.45, ty: -10.2},
						transform: [28.45, -10.2, 1, 1, 0.097, -0.097, NaN],
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
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.977, b: -0.212, c: 0.212, d: 0.977, tx: 27.55, ty: -18.15},
						transform: [27.55, -18.15, 1, 1, 0.213, -0.213, NaN],
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
						classname: "_skeleton_spear_arm2_x",
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
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.988, b: 0.155, c: -0.155, d: 0.988, tx: 29.45, ty: -0.6},
						transform: [29.45, -0.6, 1, 1, -0.156, 0.156, NaN],
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
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.956, b: 0.295, c: -0.295, d: 0.956, tx: 28, ty: -0.1},
						transform: [28, -0.1, 1, 1, -0.299, 0.299, NaN],
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
						classname: "_skeleton_spear_arm2_x",
						instancename: "",
						matrix: {a: 0.931, b: 0.365, c: -0.365, d: 0.931, tx: 26.85, ty: 1.5},
						transform: [26.85, 1.5, 1, 1, -0.374, 0.374, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.933, b: 0.36, c: -0.36, d: 0.933, tx: 14.9, ty: -4.15},
						transform: [14.9, -4.15, 1, 1, -0.369, 0.369, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 14.95, ty: -10.25},
						transform: [14.95, -10.25, 1, 1, -0.007, 0.007, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.167, c: 0.167, d: 0.986, tx: 15.75, ty: -9.95},
						transform: [15.75, -9.95, 1, 1, 0.168, -0.168, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.969, b: -0.247, c: 0.247, d: 0.969, tx: 14.55, ty: -16.2},
						transform: [14.55, -16.2, 1, 1, 0.249, -0.249, NaN],
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
						classname: "_skeleton_spear_arm1_x",
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.988, b: 0.155, c: -0.155, d: 0.988, tx: 14.9, ty: -4.15},
						transform: [14.9, -4.15, 1, 1, -0.156, 0.156, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 1, b: 0.008, c: -0.008, d: 1, tx: 14.9, ty: -1.7},
						transform: [14.9, -1.7, 1, 1, -0.008, 0.008, NaN],
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
						classname: "_skeleton_spear_arm1_x",
						instancename: "",
						matrix: {a: 0.933, b: 0.36, c: -0.36, d: 0.933, tx: 14.9, ty: -4.15},
						transform: [14.9, -4.15, 1, 1, -0.369, 0.369, NaN],
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
						classname: "_skeleton_spear_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.5, ty: -9.3},
						transform: [1.5, -9.3, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_skeleton_spear_head_idle",
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
						classname: "_skeleton_spear_head_idle",
						instancename: "",
						matrix: {a: 0.923, b: 0.385, c: -0.385, d: 0.923, tx: 4.75, ty: -16.7},
						transform: [4.75, -16.7, 1, 1, -0.395, 0.395, NaN],
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
						classname: "_skeleton_spear_head_idle",
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
						classname: "_skeleton_spear_head_idle",
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
						classname: "_skeleton_spear_head_idle",
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
						classname: "_skeleton_spear_head_idle",
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
						classname: "_skeleton_spear_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.5, ty: -9.3},
						transform: [1.5, -9.3, 1, 1, -0.022, 0.022, NaN],
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
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -5.85, ty: -20.85},
						transform: [-5.85, -20.85, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 0.923, b: 0.385, c: -0.385, d: 0.923, tx: 0.9, ty: -29.25},
						transform: [0.9, -29.25, 1, 1, -0.396, 0.396, NaN],
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
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 0.923, b: 0.385, c: -0.385, d: 0.923, tx: 2.65, ty: -30.35},
						transform: [2.65, -30.35, 1, 1, -0.395, 0.395, NaN],
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
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 0.999, b: -0.053, c: 0.053, d: 0.999, tx: -8.85, ty: -27.8},
						transform: [-8.85, -27.8, 1, 1, 0.053, -0.053, NaN],
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
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 0.983, b: -0.185, c: 0.185, d: 0.983, tx: -10.25, ty: -26.65},
						transform: [-10.25, -26.65, 1, 1, 0.186, -0.186, NaN],
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
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -5.5, ty: -20.85},
						transform: [-5.5, -20.85, 1, 1, -0.022, 0.022, NaN],
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
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -6.45, ty: -16.45},
						transform: [-6.45, -16.45, 1, 1, -0.022, 0.022, NaN],
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
						classname: "_skeleton_spear_helmet",
						instancename: "helmet",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: -5.5, ty: -21.2},
						transform: [-5.5, -21.2, 1, 1, -0.022, 0.022, NaN],
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
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.949, b: -0.314, c: 0.314, d: 0.949, tx: -30.15, ty: 11.3},
						transform: [-30.15, 11.3, 1, 1, 0.319, -0.319, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.858, b: 0.513, c: -0.513, d: 0.858, tx: -33.05, ty: -26.95},
						transform: [-33.05, -26.95, 1, 1, -0.539, 0.539, NaN],
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
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.903, b: 0.429, c: -0.429, d: 0.903, tx: -30.8, ty: -30.2},
						transform: [-30.8, -30.2, 1, 1, -0.443, 0.443, NaN],
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
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: -0.358, b: 0.934, c: -0.835, d: -0.32, tx: -21.75, ty: 3.55},
						transform: [-21.75, 3.55, 1, 0.895, -1.937, 1.937, NaN],
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
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: -0.277, b: 0.961, c: -0.86, d: -0.248, tx: -21, ty: 4.35},
						transform: [-21, 4.35, 1, 0.895, -1.851, 1.851, NaN],
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
						classname: "_skeleton_spear_sword_1_x",
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
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.963, b: -0.268, c: 0.268, d: 0.963, tx: -28.9, ty: 10.75},
						transform: [-28.9, 10.75, 1, 1, 0.271, -0.271, NaN],
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
						classname: "_skeleton_spear_sword_1_x",
						instancename: "",
						matrix: {a: 0.949, b: -0.314, c: 0.314, d: 0.949, tx: -30.15, ty: 11.3},
						transform: [-30.15, 11.3, 1, 1, 0.319, -0.319, NaN],
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
						classname: "_skeleton_spear_trail_1_x",
						instancename: "",
						matrix: {a: 0.31, b: -0.951, c: 0.951, d: 0.31, tx: -25.65, ty: -43.85},
						transform: [-25.65, -43.85, 1, 1, 1.256, -1.256, NaN],
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
						classname: "_skeleton_spear_trail_1_x",
						instancename: "",
						matrix: {a: 0.369, b: -0.875, c: 0.815, d: 0.266, tx: -25.05, ty: -46.55},
						transform: [-25.05, -46.55, 0.95, 0.857, 1.256, -1.171, NaN],
						alpha: 0.18,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_skeleton_spear_trail_1_x",
						instancename: "",
						matrix: {a: 0.739, b: 0.777, c: 0.825, d: -0.623, tx: -10.05, ty: 6.1},
						transform: [-10.05, 6.1, 1.072, 1.034, 2.217, 0.811, NaN],
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
						classname: "_skeleton_spear_trail_1_x",
						instancename: "",
						matrix: {a: 0.808, b: 0.505, c: 0.458, d: -0.734, tx: -8.3, ty: 9.15},
						transform: [-8.3, 9.15, 0.953, 0.866, 2.584, 0.559, NaN],
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
						to: 3,
						classname: "_skeleton_spear_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -5.15, ty: -37.75},
						transform: [-5.15, -37.75, 0.378, 0.2, 0, 0, 0],
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
						classname: "_skeleton_spear_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -10.15, ty: -44.9},
						transform: [-10.15, -44.9, 0.378, 0.2, 0, 0, 0],
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
						classname: "_skeleton_spear_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -5.15, ty: -37.75},
						transform: [-5.15, -37.75, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.469], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_skeleton_spear_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.378, b: 0, c: 0, d: 0.2, tx: -5.15, ty: -37.9},
						transform: [-5.15, -37.9, 0.378, 0.2, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.386, 0.031], [0.76, 0.538], [1, 1], ],
						}
					},
				]
			},
			{
				name: "attackbox",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 6,
						classname: "_skeleton_spear_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.32, b: 0, c: 0, d: 0.543, tx: -45.8, ty: -7.95},
						transform: [-45.8, -7.95, 0.32, 0.543, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_spear_common_box_physics": {
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
	"_skeleton_spear_common_circle_physics": {
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
	"_skeleton_spear_leg_x": {
		type: "bitmap",
		asset: "_skeleton_spear_leg_x",
		scale: 2,
		position: [-6.5, -5.55],
	},
	"_skeleton_spear_foot2_x": {
		type: "bitmap",
		asset: "_skeleton_spear_foot2_x",
		scale: 2,
		position: [-11.5, -6.7],
	},
	"_skeleton_spear_foot_x": {
		type: "bitmap",
		asset: "_skeleton_spear_foot_x",
		scale: 2,
		position: [-8.1, -6.15],
	},
	"_skeleton_spear_pelvis_x": {
		type: "bitmap",
		asset: "_skeleton_spear_pelvis_x",
		scale: 2,
		position: [-12.45, -8.95],
	},
	"_skeleton_spear_sword_1_x": {
		type: "bitmap",
		asset: "_skeleton_spear_sword_1_x",
		scale: 2,
		position: [-10.25, -41.15],
	},
	"_skeleton_spear_arm8_x": {
		type: "bitmap",
		asset: "_skeleton_spear_arm8_x",
		scale: 2,
		position: [-6.75, -6],
	},
	"_skeleton_spear_arm1_x": {
		type: "bitmap",
		asset: "_skeleton_spear_arm1_x",
		scale: 2,
		position: [-7, -8.15],
	},
	"_skeleton_spear_body_x": {
		type: "bitmap",
		asset: "_skeleton_spear_body_x",
		scale: 2,
		position: [-22.5, -13.55],
	},
	"_skeleton_spear_arm2_x": {
		type: "bitmap",
		asset: "_skeleton_spear_arm2_x",
		scale: 2,
		position: [-11.45, -6],
	},
	"_skeleton_spear_head_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 24,
		labels: {},
		layers: [
			{
				name: "mandibula_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_skeleton_spear_mandibula_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.85, ty: 1.35},
						transform: [2.85, 1.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 22,
						classname: "_skeleton_spear_mandibula_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.2, ty: 4.05},
						transform: [2.2, 4.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_skeleton_spear_mandibula_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.85, ty: 1.35},
						transform: [2.85, 1.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "headbase_x",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_skeleton_spear_headbase_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -7, ty: -11.2},
						transform: [-7, -11.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 22,
						classname: "_skeleton_spear_headbase_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.041, d: 1, tx: -6.45, ty: -11.2},
						transform: [-6.45, -11.2, 1, 1.001, -0.041, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_skeleton_spear_headbase_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -7, ty: -11.2},
						transform: [-7, -11.2, 1, 1, 0, 0, 0],
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
						to: 9,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: -10.3},
						transform: [-0.05, -10.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 22,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.4, ty: -10.3},
						transform: [-1.4, -10.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: -10.3},
						transform: [-0.05, -10.3, 1, 1, 0, 0, 0],
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
						to: 9,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: -0.885, b: 0, c: 0, d: 0.885, tx: -22, ty: -9.95},
						transform: [-22, -9.95, 0.885, 0.885, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 22,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: -0.793, b: 0, c: 0, d: 0.885, tx: -22.5, ty: -9.95},
						transform: [-22.5, -9.95, 0.793, 0.885, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: -0.885, b: 0, c: 0, d: 0.885, tx: -22, ty: -9.95},
						transform: [-22, -9.95, 0.885, 0.885, 0, 3.142, NaN],
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
						to: 9,
						classname: "_skeleton_spear_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -11.55, ty: -8.2},
						transform: [-11.55, -8.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 22,
						classname: "_skeleton_spear_nose_x",
						instancename: "",
						matrix: {a: 0.938, b: 0, c: 0, d: 1, tx: -13.45, ty: -8.2},
						transform: [-13.45, -8.2, 0.938, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_skeleton_spear_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -11.55, ty: -8.2},
						transform: [-11.55, -8.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_spear_helmet": {
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
						classname: "_skeleton_spear_helmet1_x",
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
						classname: "_skeleton_spear_helmetalone_x",
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
						classname: "_skeleton_spear_common_circle_physics",
						instancename: "",
						matrix: {a: 0.481, b: 0, c: 0, d: 0.481, tx: -0.2, ty: 0.05},
						transform: [-0.2, 0.05, 0.481, 0.481, 0, 0, 0],
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
						to: 3,
						classname: "_skeleton_spear_common_box_physics",
						instancename: "",
						matrix: {a: 0.268, b: 0, c: 0, d: 0.44, tx: -2.25, ty: 3.55},
						transform: [-2.25, 3.55, 0.268, 0.44, 0, 0, 0],
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
	"_skeleton_spear_hittablebox": {
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
	"_skeleton_spear_attackbox": {
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
	"_skeleton_spear_pelvis2_x": {
		type: "bitmap",
		asset: "_skeleton_spear_pelvis2_x",
		scale: 2,
		position: [-11.05, -8.95],
	},
	"_skeleton_spear_arm9_x": {
		type: "bitmap",
		asset: "_skeleton_spear_arm9_x",
		scale: 2,
		position: [-12.85, -6],
	},
	"_skeleton_spear_common_stepbox": {
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
	"_skeleton_spear_head_stop": {
		type: "movieclip",
		fps: 30,
		totalFrames: 64,
		labels: {},
		layers: [
			{
				name: "mandibula_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_skeleton_spear_mandibula_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.85, ty: 1.35},
						transform: [2.85, 1.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 16,
						classname: "_skeleton_spear_mandibula_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.9, ty: 0},
						transform: [2.9, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 32,
						classname: "_skeleton_spear_mandibula_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.85, ty: 1.35},
						transform: [2.85, 1.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 39,
						classname: "_skeleton_spear_mandibula_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.2, ty: 4.05},
						transform: [2.2, 4.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 40,
						to: 55,
						classname: "_skeleton_spear_mandibula_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.85, ty: 1.35},
						transform: [2.85, 1.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 56,
						to: 62,
						classname: "_skeleton_spear_mandibula_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.2, ty: 4.05},
						transform: [2.2, 4.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_skeleton_spear_mandibula_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.85, ty: 1.35},
						transform: [2.85, 1.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "headbase_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_skeleton_spear_headbase_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -7, ty: -11.2},
						transform: [-7, -11.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 16,
						classname: "_skeleton_spear_headbase_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.041, d: 1, tx: -6.45, ty: -11.2},
						transform: [-6.45, -11.2, 1, 1.001, -0.041, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 26,
						classname: "_skeleton_spear_headbase_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -7, ty: -11.2},
						transform: [-7, -11.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 39,
						classname: "_skeleton_spear_headbase_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.041, d: 1, tx: -6.45, ty: -11.2},
						transform: [-6.45, -11.2, 1, 1.001, -0.041, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 40,
						to: 49,
						classname: "_skeleton_spear_headbase_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -7, ty: -11.2},
						transform: [-7, -11.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 50,
						to: 62,
						classname: "_skeleton_spear_headbase_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.041, d: 1, tx: -6.45, ty: -11.2},
						transform: [-6.45, -11.2, 1, 1.001, -0.041, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_skeleton_spear_headbase_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -7, ty: -11.2},
						transform: [-7, -11.2, 1, 1, 0, 0, 0],
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
						to: 3,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: -10.3},
						transform: [-0.05, -10.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.582, tx: -1.4, ty: -10.35},
						transform: [-1.4, -10.35, 1, 0.582, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.426, 0], [0.74, 0.403], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 16,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.958, tx: -1.2, ty: -10.2},
						transform: [-1.2, -10.2, 1, 0.958, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.332, 0.34], [0.547, 0.873], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 26,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: -10.3},
						transform: [-0.05, -10.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 39,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.4, ty: -10.3},
						transform: [-1.4, -10.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 40,
						to: 49,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: -10.3},
						transform: [-0.05, -10.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 50,
						to: 62,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.4, ty: -10.3},
						transform: [-1.4, -10.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: -10.3},
						transform: [-0.05, -10.3, 1, 1, 0, 0, 0],
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
						to: 3,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: -0.885, b: 0, c: 0, d: 0.885, tx: -22, ty: -9.95},
						transform: [-22, -9.95, 0.885, 0.885, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: -0.793, b: 0, c: 0, d: 0.558, tx: -22.5, ty: -10},
						transform: [-22.5, -10, 0.793, 0.558, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.426, 0], [0.74, 0.403], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 16,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: -0.808, b: 0, c: 0, d: 0.897, tx: -22.4, ty: -9.9},
						transform: [-22.4, -9.9, 0.808, 0.897, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.332, 0.34], [0.547, 0.873], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 26,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: -0.885, b: 0, c: 0, d: 0.885, tx: -22, ty: -9.95},
						transform: [-22, -9.95, 0.885, 0.885, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 39,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: -0.793, b: 0, c: 0, d: 0.885, tx: -22.5, ty: -9.95},
						transform: [-22.5, -9.95, 0.793, 0.885, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 40,
						to: 49,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: -0.885, b: 0, c: 0, d: 0.885, tx: -22, ty: -9.95},
						transform: [-22, -9.95, 0.885, 0.885, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 50,
						to: 62,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: -0.793, b: 0, c: 0, d: 0.885, tx: -22.5, ty: -9.95},
						transform: [-22.5, -9.95, 0.793, 0.885, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_skeleton_spear_eye1",
						instancename: "",
						matrix: {a: -0.885, b: 0, c: 0, d: 0.885, tx: -22, ty: -9.95},
						transform: [-22, -9.95, 0.885, 0.885, 0, 3.142, NaN],
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
						to: 3,
						classname: "_skeleton_spear_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -11.55, ty: -8.2},
						transform: [-11.55, -8.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 16,
						classname: "_skeleton_spear_nose_x",
						instancename: "",
						matrix: {a: 0.938, b: 0, c: 0, d: 1, tx: -13.45, ty: -8.2},
						transform: [-13.45, -8.2, 0.938, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.426, 0], [0.74, 0.403], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 26,
						classname: "_skeleton_spear_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -11.55, ty: -8.2},
						transform: [-11.55, -8.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 39,
						classname: "_skeleton_spear_nose_x",
						instancename: "",
						matrix: {a: 0.938, b: 0, c: 0, d: 1, tx: -13.45, ty: -8.2},
						transform: [-13.45, -8.2, 0.938, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 40,
						to: 49,
						classname: "_skeleton_spear_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -11.55, ty: -8.2},
						transform: [-11.55, -8.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 50,
						to: 62,
						classname: "_skeleton_spear_nose_x",
						instancename: "",
						matrix: {a: 0.938, b: 0, c: 0, d: 1, tx: -13.45, ty: -8.2},
						transform: [-13.45, -8.2, 0.938, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.508, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_skeleton_spear_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -11.55, ty: -8.2},
						transform: [-11.55, -8.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_spear_arm_flap_die": {
		type: "movieclip",
		fps: 30,
		totalFrames: 6,
		labels: {},
		layers: [
			{
				name: "arm1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_skeleton_spear_arm5_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.054, c: -0.054, d: 0.998, tx: 0, ty: 0.1},
						transform: [0, 0.1, 1, 1, -0.055, 0.055, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.244, 0.377], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_skeleton_spear_arm5_x",
						instancename: "",
						matrix: {a: 0.979, b: 0.206, c: -0.206, d: 0.979, tx: 0, ty: 0.05},
						transform: [0, 0.05, 1, 1, -0.207, 0.207, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.465, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_skeleton_spear_arm5_x",
						instancename: "",
						matrix: {a: 0.854, b: 0.52, c: -0.52, d: 0.854, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, -0.547, 0.547, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.209, 0.425], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_skeleton_spear_arm5_x",
						instancename: "",
						matrix: {a: 0.813, b: 0.581, c: -0.581, d: 0.813, tx: 0.05, ty: 0},
						transform: [0.05, 0, 1, 1, -0.621, 0.621, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.376, 0], [0.71, 0.393], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_skeleton_spear_arm5_x",
						instancename: "",
						matrix: {a: 0.901, b: 0.431, c: -0.431, d: 0.901, tx: 0.05, ty: 0.05},
						transform: [0.05, 0.05, 0.999, 0.999, -0.446, 0.446, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.428, 0.255], [0.762, 0.643], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_skeleton_spear_arm3_x",
						instancename: "",
						matrix: {a: -0.92, b: -0.392, c: 0.392, d: -0.92, tx: 9.3, ty: 0.45},
						transform: [9.3, 0.45, 1, 1, 2.739, -2.739, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.283, 0.297], [0.602, 0.708], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_skeleton_spear_arm3_x",
						instancename: "",
						matrix: {a: -0.71, b: -0.704, c: 0.704, d: -0.71, tx: 9.55, ty: 2.65},
						transform: [9.55, 2.65, 1, 1, 2.36, -2.36, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.465, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_skeleton_spear_arm4_x",
						instancename: "",
						matrix: {a: 0.962, b: -0.273, c: 0.233, d: 0.82, tx: 7.6, ty: 5.3},
						transform: [7.6, 5.3, 1, 0.852, 0.277, -0.277, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.209, 0.425], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_skeleton_spear_arm4_x",
						instancename: "",
						matrix: {a: 0.733, b: 0.68, c: -0.642, d: 0.692, tx: 7.9, ty: 6.3},
						transform: [7.9, 6.3, 1, 0.944, -0.748, 0.748, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.376, 0], [0.71, 0.393], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_skeleton_spear_arm4_x",
						instancename: "",
						matrix: {a: 0.772, b: 0.633, c: -0.591, d: 0.721, tx: 8.8, ty: 4.55},
						transform: [8.8, 4.55, 0.998, 0.932, -0.687, 0.687, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.428, 0.255], [0.762, 0.643], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_skeleton_spear_leg_die": {
		type: "movieclip",
		fps: 30,
		totalFrames: 9,
		labels: {},
		layers: [
			{
				name: "leg8_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_skeleton_spear_leg8_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.498, 0], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_skeleton_spear_leg8_x",
						instancename: "",
						matrix: {a: 0.43, b: 0.619, c: -0.821, d: 0.571, tx: -0.05, ty: 0},
						transform: [-0.05, 0, 0.754, 1, -0.963, 0.963, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.498, 0], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_skeleton_spear_leg8_x",
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
				name: "foot3_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_skeleton_spear_foot3_x",
						instancename: "",
						matrix: {a: -0.966, b: 0.259, c: 0.259, d: 0.966, tx: 7.6, ty: 4.05},
						transform: [7.6, 4.05, 1, 1, 0.262, 2.88, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.498, 0], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_skeleton_spear_foot3_x",
						instancename: "",
						matrix: {a: -0.695, b: -0.719, c: -0.525, d: 0.508, tx: 0.2, ty: 6},
						transform: [0.2, 6, 1, 0.731, -0.802, -2.34, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.498, 0], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_skeleton_spear_foot3_x",
						instancename: "",
						matrix: {a: -0.966, b: 0.259, c: 0.259, d: 0.966, tx: 7.6, ty: 4.05},
						transform: [7.6, 4.05, 1, 1, 0.262, 2.88, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_spear_mandibula3_x": {
		type: "bitmap",
		asset: "_skeleton_spear_mandibula3_x",
		scale: 2,
		position: [-14.5, -16.2],
	},
	"_skeleton_spear_headbase3_x": {
		type: "bitmap",
		asset: "_skeleton_spear_headbase3_x",
		scale: 2,
		position: [-27.5, -24.1],
	},
	"_skeleton_spear_eye_die": {
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
						to: 4,
						classname: "_skeleton_spear_eye_die_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_skeleton_spear_eye_die_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 10,
						classname: "_skeleton_spear_eye_die_x",
						instancename: "",
						matrix: {a: 0.903, b: 0.43, c: -0.139, d: 0.291, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 0.323, -0.444, 0.444, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_skeleton_spear_eye_die_x",
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
	"_skeleton_spear_nose_x": {
		type: "bitmap",
		asset: "_skeleton_spear_nose_x",
		scale: 2,
		position: [-8.95, -10.65],
	},
	"_skeleton_spear_head_die_x": {
		type: "bitmap",
		asset: "_skeleton_spear_head_die_x",
		scale: 2,
		position: [-34.65, -35.3],
	},
	"_skeleton_spear_common_fx_spawn": {
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
						classname: "_skeleton_spear_common_startballoonfx",
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
						classname: "_skeleton_spear_common_startballoonfx",
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
						classname: "_skeleton_spear_common_startballoonfx",
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
						classname: "_skeleton_spear_common_startballoonfx_end",
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
						classname: "_skeleton_spear_common_thunder_part_1_x",
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
						classname: "_skeleton_spear_common_thunder_part_2_x",
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
						classname: "_skeleton_spear_common_thunder_part_3_x",
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
						classname: "_skeleton_spear_common_thunder_part_2_x",
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
						classname: "_skeleton_spear_common_thunder_part_5_x",
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
	"_skeleton_spear_crash_part_2": {
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
						classname: "_skeleton_spear_body_4_x",
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
						classname: "_skeleton_spear_common_circle_physics",
						instancename: "",
						matrix: {a: 0.163, b: 0, c: 0, d: 0.163, tx: -6.9, ty: -0.4},
						transform: [-6.9, -0.4, 0.163, 0.163, 0, 0, 0],
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
						classname: "_skeleton_spear_common_circle_physics",
						instancename: "",
						matrix: {a: 0.167, b: 0, c: 0, d: 0.167, tx: 6.9, ty: -0.4},
						transform: [6.9, -0.4, 0.167, 0.167, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_spear_crash_part_3": {
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
						classname: "_skeleton_spear_bone1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.35, ty: -0.05},
						transform: [0.35, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bound",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_skeleton_spear_common_box_physics",
						instancename: "bound",
						matrix: {a: 0.184, b: 0, c: 0, d: 0.035, tx: 0, ty: 0},
						transform: [0, 0, 0.184, 0.035, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_spear_crash_part_4": {
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
						classname: "_skeleton_spear_bone2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3, ty: -0.05},
						transform: [3, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bound",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_skeleton_spear_common_box_physics",
						instancename: "bound",
						matrix: {a: 0.154, b: 0, c: 0, d: 0.027, tx: 0, ty: 0},
						transform: [0, 0, 0.154, 0.027, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_spear_crash_part_5": {
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
						classname: "_skeleton_spear_bone4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: 0.25},
						transform: [-0.3, 0.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bound",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_skeleton_spear_common_box_physics",
						instancename: "bound",
						matrix: {a: 0.165, b: 0, c: 0, d: 0.028, tx: 0, ty: 0},
						transform: [0, 0, 0.165, 0.028, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_spear_crash_part_6": {
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
						classname: "_skeleton_spear_bone_5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: -0.05},
						transform: [-0.3, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bound",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_skeleton_spear_common_box_physics",
						instancename: "bound",
						matrix: {a: 0.062, b: 0, c: 0, d: 0.022, tx: 0, ty: 0},
						transform: [0, 0, 0.062, 0.022, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_spear_crash_part_1": {
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
						classname: "_skeleton_spear_head_crash_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 8.5, ty: 10.4},
						transform: [8.5, 10.4, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_spear_common_circle_physics",
						instancename: "",
						matrix: {a: 0.289, b: 0, c: 0, d: 0.289, tx: -4.65, ty: -0.35},
						transform: [-4.65, -0.35, 0.289, 0.289, 0, 0, 0],
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
						classname: "_skeleton_spear_common_circle_physics",
						instancename: "",
						matrix: {a: 0.289, b: 0, c: 0, d: 0.289, tx: 3.55, ty: -2},
						transform: [3.55, -2, 0.289, 0.289, 0, 0, 0],
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
						classname: "_skeleton_spear_common_box_physics",
						instancename: "",
						matrix: {a: 0.175, b: 0, c: 0, d: 0.218, tx: -3.05, ty: 5.05},
						transform: [-3.05, 5.05, 0.175, 0.218, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_spear_trail_1_x": {
		type: "bitmap",
		asset: "_skeleton_spear_trail_1_x",
		scale: 2,
		position: [-58.85, -37.3],
	},
	"_skeleton_spear_mandibula_x": {
		type: "bitmap",
		asset: "_skeleton_spear_mandibula_x",
		scale: 2,
		position: [-25.45, -12.25],
	},
	"_skeleton_spear_headbase_x": {
		type: "bitmap",
		asset: "_skeleton_spear_headbase_x",
		scale: 2,
		position: [-27.65, -24.1],
	},
	"_skeleton_spear_eye1": {
		type: "movieclip",
		fps: 30,
		totalFrames: 82,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 21,
						classname: "_skeleton_spear_eye1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 24,
						classname: "_skeleton_spear_eye1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 27,
						classname: "_skeleton_spear_eye1_x",
						instancename: "",
						matrix: {a: 0.903, b: 0.43, c: -0.139, d: 0.291, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 0.323, -0.444, 0.444, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 81,
						classname: "_skeleton_spear_eye1_x",
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
						to: 21,
						classname: "_skeleton_spear_particuler",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.05, ty: 0.05},
						transform: [0.05, 0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 27,
					},
					{
						from: 28,
						to: 81,
						classname: "_skeleton_spear_particuler",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.05, ty: 0.05},
						transform: [0.05, 0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_spear_helmet1_x": {
		type: "bitmap",
		asset: "_skeleton_spear_helmet1_x",
		scale: 2,
		position: [-30.6, -33.3],
	},
	"_skeleton_spear_helmetalone_x": {
		type: "bitmap",
		asset: "_skeleton_spear_helmetalone_x",
		scale: 2,
		position: [-30.6, -33.3],
	},
	"_skeleton_spear_arm5_x": {
		type: "bitmap",
		asset: "_skeleton_spear_arm5_x",
		scale: 2,
		position: [-7.05, -8.15],
	},
	"_skeleton_spear_arm3_x": {
		type: "bitmap",
		asset: "_skeleton_spear_arm3_x",
		scale: 2,
		position: [-7.95, -6],
	},
	"_skeleton_spear_arm4_x": {
		type: "bitmap",
		asset: "_skeleton_spear_arm4_x",
		scale: 2,
		position: [-9.9, -6],
	},
	"_skeleton_spear_leg8_x": {
		type: "bitmap",
		asset: "_skeleton_spear_leg8_x",
		scale: 2,
		position: [-5.4, -6.9],
	},
	"_skeleton_spear_foot3_x": {
		type: "bitmap",
		asset: "_skeleton_spear_foot3_x",
		scale: 2,
		position: [-11.1, -7.3],
	},
	"_skeleton_spear_eye_die_x": {
		type: "bitmap",
		asset: "_skeleton_spear_eye_die_x",
		scale: 2,
		position: [-10.1, -12.7],
	},
	"_skeleton_spear_common_startballoonfx": {
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
						classname: "_skeleton_spear_common_fx_floor",
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
						classname: "_skeleton_spear_common_fx_rays",
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
	"_skeleton_spear_common_startballoonfx_end": {
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
						classname: "_skeleton_spear_common_rays",
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
						classname: "_skeleton_spear_common_rays",
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
	"_skeleton_spear_common_thunder_part_1_x": {
		type: "bitmap",
		asset: "_skeleton_spear_common_thunder_part_1_x",
		scale: 2,
		position: [-61.1, -287.35],
	},
	"_skeleton_spear_common_thunder_part_2_x": {
		type: "bitmap",
		asset: "_skeleton_spear_common_thunder_part_2_x",
		scale: 2,
		position: [-61.1, -287.35],
	},
	"_skeleton_spear_common_thunder_part_3_x": {
		type: "bitmap",
		asset: "_skeleton_spear_common_thunder_part_3_x",
		scale: 2,
		position: [-61.1, -287.35],
	},
	"_skeleton_spear_common_thunder_part_5_x": {
		type: "bitmap",
		asset: "_skeleton_spear_common_thunder_part_5_x",
		scale: 2,
		position: [-61.1, -287.4],
	},
	"_skeleton_spear_body_4_x": {
		type: "bitmap",
		asset: "_skeleton_spear_body_4_x",
		scale: 2,
		position: [-21.4, -14.6],
	},
	"_skeleton_spear_bone1_x": {
		type: "bitmap",
		asset: "_skeleton_spear_bone1_x",
		scale: 2,
		position: [-16.15, -8.55],
	},
	"_skeleton_spear_bone2_x": {
		type: "bitmap",
		asset: "_skeleton_spear_bone2_x",
		scale: 2,
		position: [-17.6, -9],
	},
	"_skeleton_spear_bone4_x": {
		type: "bitmap",
		asset: "_skeleton_spear_bone4_x",
		scale: 2,
		position: [-13.85, -6.75],
	},
	"_skeleton_spear_bone_5_x": {
		type: "bitmap",
		asset: "_skeleton_spear_bone_5_x",
		scale: 2,
		position: [-8.25, -6.25],
	},
	"_skeleton_spear_head_crash_x": {
		type: "bitmap",
		asset: "_skeleton_spear_head_crash_x",
		scale: 2,
		position: [-33.85, -32.35],
	},
	"_skeleton_spear_eye1_x": {
		type: "bitmap",
		asset: "_skeleton_spear_eye1_x",
		scale: 2,
		position: [-9.9, -9.7],
	},
	"_skeleton_spear_particuler": {
		type: "movieclip",
		fps: 30,
		totalFrames: 8,
		labels: {loop: {from:1, to:2}, on: {from:4, to:6}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_skeleton_spear_satanicbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: 0, ty: 0},
						transform: [0, 0, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
					},
					{
						from: 4,
						to: 6,
						classname: "_skeleton_spear_satanicbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: 0, ty: 0},
						transform: [0, 0, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
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
					},
					{
						from: 3,
						to: 3,
						actions: function(self){if(Math.random() > 0.3){
	self.gotoAndPlay("on");
}
else{
	self.gotoAndPlay("loop");
}},
					},
					{
						from: 4,
						to: 6,
					},
					{
						from: 7,
						to: 7,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_skeleton_spear_common_fx_floor": {
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
						classname: "_skeleton_spear_common_startfx_floor_x",
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
						classname: "_skeleton_spear_common_startfx_floor_x",
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
						classname: "_skeleton_spear_common_startfx_floor_x",
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
	"_skeleton_spear_common_fx_rays": {
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
						classname: "_skeleton_spear_common_fx_rays_x",
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
						classname: "_skeleton_spear_common_fx_rays_x",
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
						classname: "_skeleton_spear_common_fx_rays_x",
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
	"_skeleton_spear_common_rays": {
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
						classname: "_skeleton_spear_common_ray",
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
						classname: "_skeleton_spear_common_ray",
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
						classname: "_skeleton_spear_common_ray",
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
	"_skeleton_spear_satanicbox": {
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
						actions: function(self){globalsignal.emit(ge.SPECTRAL_FIRE, {mc:self}); self.time = 0; self.currentFrame = 999;},
					},
					{
						from: 1,
						to: 1,
					},
				]
			},
		]
	},
	"_skeleton_spear_common_startfx_floor_x": {
		type: "bitmap",
		asset: "_skeleton_spear_common_startfx_floor_x",
		scale: 2,
		position: [-37.65, -10.95],
	},
	"_skeleton_spear_common_fx_rays_x": {
		type: "bitmap",
		asset: "_skeleton_spear_common_fx_rays_x",
		scale: 2,
		position: [-45.2, -71.3],
	},
	"_skeleton_spear_common_ray": {
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
						classname: "_skeleton_spear_common_ray_x",
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
						classname: "_skeleton_spear_common_ray_x",
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
						classname: "_skeleton_spear_common_ray_x",
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
						classname: "_skeleton_spear_common_ray_x",
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
	"_skeleton_spear_common_ray_x": {
		type: "bitmap",
		asset: "_skeleton_spear_common_ray_x",
		scale: 2,
		position: [-11.65, -85.95],
	},
};
