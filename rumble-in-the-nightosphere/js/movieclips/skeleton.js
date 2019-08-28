
var skeleton = {
	"skeleton": {
		type: "movieclip",
		fps: 30,
		totalFrames: 130,
		labels: {air_idle: {from:0, to:3}, air_turn: {from:5, to:8}, ground_idle: {from:10, to:19}, ground_run: {from:21, to:30}, ground_stop: {from:32, to:43}, ground_stopturn: {from:45, to:58}, ground_turn: {from:60, to:68}, ground_turn_fast: {from:70, to:83}, die: {from:85, to:91}, waiting: {from:93, to:102}, spawn: {from:104, to:111}, crash: {from:113, to:128}, },
		layers: [
			{
				name: "physics",
				keys: [
					{
						from: 0,
						to: 129,
						classname: "_skeleton_common_body_physics",
						instancename: "physics",
						matrix: {a: 1.09, b: 0, c: 0, d: 1.151, tx: 0, ty: 0},
						transform: [0, 0, 1.09, 1.151, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "character",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_skeleton_skeleton_air",
						instancename: "character",
						matrix: {a: 1.09, b: 0, c: 0, d: 1.09, tx: -0.2, ty: -8.5},
						transform: [-0.2, -8.5, 1.09, 1.09, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 9,
						classname: "_skeleton_skeleton_air_turn",
						instancename: "character",
						matrix: {a: 1.09, b: 0, c: 0, d: 1.09, tx: -0.2, ty: -8.5},
						transform: [-0.2, -8.5, 1.09, 1.09, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 84,
						classname: "_skeleton_skeleton_ground_idle",
						instancename: "character",
						matrix: {a: 1.09, b: 0, c: 0, d: 1.09, tx: -0.2, ty: -8.5},
						transform: [-0.2, -8.5, 1.09, 1.09, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 85,
						to: 92,
						classname: "_skeleton_skeleton_die",
						instancename: "character",
						matrix: {a: 1.09, b: 0, c: 0, d: 1.09, tx: -0.2, ty: -8.5},
						transform: [-0.2, -8.5, 1.09, 1.09, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 93,
						to: 103,
						classname: "_skeleton_skeleton_waiting",
						instancename: "character",
						matrix: {a: 1.09, b: 0, c: 0, d: 1.09, tx: -0.2, ty: -8.5},
						transform: [-0.2, -8.5, 1.09, 1.09, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 104,
						to: 112,
						classname: "_skeleton_skeleton_spawn",
						instancename: "character",
						matrix: {a: 1.09, b: 0, c: 0, d: 1.09, tx: -0.2, ty: -8.5},
						transform: [-0.2, -8.5, 1.09, 1.09, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 113,
						to: 129,
						classname: "_skeleton_skeleton_crash",
						instancename: "character",
						matrix: {a: 1.09, b: 0, c: 0, d: 1.09, tx: -6.4, ty: -33.3},
						transform: [-6.4, -33.3, 1.09, 1.09, 0, 0, 0],
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
						to: 3,
					},
					{
						from: 4,
						to: 4,
						actions: function(self){self.stop();},
					},
					{
						from: 5,
						to: 8,
					},
					{
						from: 9,
						to: 9,
						actions: function(self){self.stop();},
					},
					{
						from: 10,
						to: 19,
					},
					{
						from: 20,
						to: 20,
						actions: function(self){self.stop();},
					},
					{
						from: 21,
						to: 30,
					},
					{
						from: 31,
						to: 31,
						actions: function(self){self.stop();},
					},
					{
						from: 32,
						to: 43,
					},
					{
						from: 44,
						to: 44,
						actions: function(self){self.stop();},
					},
					{
						from: 45,
						to: 58,
					},
					{
						from: 59,
						to: 59,
						actions: function(self){self.stop();},
					},
					{
						from: 60,
						to: 68,
					},
					{
						from: 69,
						to: 69,
						actions: function(self){self.stop();},
					},
					{
						from: 70,
						to: 83,
					},
					{
						from: 84,
						to: 84,
						actions: function(self){self.stop();},
					},
					{
						from: 85,
						to: 91,
					},
					{
						from: 92,
						to: 92,
						actions: function(self){self.stop();},
					},
					{
						from: 93,
						to: 102,
					},
					{
						from: 103,
						to: 103,
						actions: function(self){self.stop();},
					},
					{
						from: 104,
						to: 111,
					},
					{
						from: 112,
						to: 112,
						actions: function(self){self.gotoAndPlay("ground_idle");},
					},
					{
						from: 113,
						to: 128,
					},
					{
						from: 129,
						to: 129,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_skeleton_common_body_physics": {
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
						classname: "_skeleton_common_box_physics",
						instancename: "",
						matrix: {a: 0.232, b: 0, c: 0, d: 0.154, tx: 0, ty: 10.05},
						transform: [0, 10.05, 0.232, 0.154, 0, 0, 0],
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
						classname: "_skeleton_common_circle_physics",
						instancename: "",
						matrix: {a: 0.524, b: 0, c: 0, d: 0.524, tx: -0.3, ty: -19.8},
						transform: [-0.3, -19.8, 0.524, 0.524, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_skeleton_air": {
		type: "movieclip",
		fps: 30,
		totalFrames: 35,
		labels: {},
		layers: [
			{
				name: "leg_x",
				keys: [
					{
						from: 0,
						to: 21,
						classname: "_skeleton_leg2_x",
						instancename: "",
						matrix: {a: -0.995, b: 0.101, c: 0.101, d: 0.995, tx: -4, ty: 15.75},
						transform: [-4, 15.75, 1, 1, 0.101, 3.04, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 33,
						classname: "_skeleton_leg2_x",
						instancename: "",
						matrix: {a: -0.998, b: -0.069, c: -0.069, d: 0.998, tx: -2.3, ty: 15.15},
						transform: [-2.3, 15.15, 1, 1, -0.069, -3.073, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_skeleton_leg2_x",
						instancename: "",
						matrix: {a: -0.995, b: 0.101, c: 0.101, d: 0.995, tx: -4, ty: 15.75},
						transform: [-4, 15.75, 1, 1, 0.101, 3.04, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "foot2_x",
				keys: [
					{
						from: 0,
						to: 21,
						classname: "_skeleton_claw_2",
						instancename: "",
						matrix: {a: 0.797, b: 0.604, c: -0.604, d: 0.797, tx: -10.75, ty: 18.35},
						transform: [-10.75, 18.35, 1, 1, -0.649, 0.649, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 33,
						classname: "_skeleton_claw_2",
						instancename: "",
						matrix: {a: 0.903, b: 0.43, c: -0.43, d: 0.903, tx: -9.1, ty: 16.5},
						transform: [-9.1, 16.5, 1, 1, -0.445, 0.445, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_skeleton_claw_2",
						instancename: "",
						matrix: {a: 0.797, b: 0.604, c: -0.604, d: 0.797, tx: -10.75, ty: 18.35},
						transform: [-10.75, 18.35, 1, 1, -0.649, 0.649, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "pelvis_x",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_skeleton_pelvis2_x",
						instancename: "",
						matrix: {a: 0.996, b: 0.087, c: -0.087, d: 0.996, tx: 1.45, ty: 14.2},
						transform: [1.45, 14.2, 1, 1, -0.087, 0.087, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 33,
						classname: "_skeleton_pelvis2_x",
						instancename: "",
						matrix: {a: 1, b: 0.001, c: -0.001, d: 1, tx: 2.5, ty: 13.75},
						transform: [2.5, 13.75, 1, 1, -0.001, 0.001, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_skeleton_pelvis2_x",
						instancename: "",
						matrix: {a: 0.996, b: 0.087, c: -0.087, d: 0.996, tx: 1.45, ty: 14.2},
						transform: [1.45, 14.2, 1, 1, -0.087, 0.087, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_x",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_skeleton_leg2_x",
						instancename: "",
						matrix: {a: -0.78, b: 0.625, c: 0.625, d: 0.78, tx: 4.75, ty: 17.3},
						transform: [4.75, 17.3, 1, 1, 0.675, 2.466, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 33,
						classname: "_skeleton_leg2_x",
						instancename: "",
						matrix: {a: -0.711, b: 0.703, c: 0.703, d: 0.711, tx: 6.35, ty: 16.75},
						transform: [6.35, 16.75, 1, 1, 0.78, 2.362, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_skeleton_leg2_x",
						instancename: "",
						matrix: {a: -0.78, b: 0.625, c: 0.625, d: 0.78, tx: 4.75, ty: 17.3},
						transform: [4.75, 17.3, 1, 1, 0.675, 2.466, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "foot_x",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_skeleton_claw_1",
						instancename: "",
						matrix: {a: 0.852, b: 0.523, c: -0.523, d: 0.852, tx: 1.35, ty: 21.4},
						transform: [1.35, 21.4, 1, 1, -0.55, 0.55, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 33,
						classname: "_skeleton_claw_1",
						instancename: "",
						matrix: {a: 0.933, b: 0.359, c: -0.359, d: 0.933, tx: 2.9, ty: 20.85},
						transform: [2.9, 20.85, 1, 1, -0.367, 0.367, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_skeleton_claw_1",
						instancename: "",
						matrix: {a: 0.852, b: 0.523, c: -0.523, d: 0.852, tx: 1.35, ty: 21.4},
						transform: [1.35, 21.4, 1, 1, -0.55, 0.55, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm2",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_skeleton_arm_compo",
						instancename: "arm2",
						matrix: {a: -0.87, b: 0, c: 0, d: 0.954, tx: -11.7, ty: -3.75},
						transform: [-11.7, -3.75, 0.87, 0.954, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 33,
						classname: "_skeleton_arm_compo",
						instancename: "arm2",
						matrix: {a: -0.806, b: 0, c: 0, d: 0.954, tx: -11.3, ty: -3.75},
						transform: [-11.3, -3.75, 0.806, 0.954, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_skeleton_arm_compo",
						instancename: "arm2",
						matrix: {a: -0.87, b: 0, c: 0, d: 0.954, tx: -11.7, ty: -3.75},
						transform: [-11.7, -3.75, 0.87, 0.954, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body_x",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_skeleton_body_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.146, c: -0.146, d: 0.989, tx: 3.35, ty: 0.35},
						transform: [3.35, 0.35, 1, 1, -0.146, 0.146, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 33,
						classname: "_skeleton_body_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.095, c: -0.095, d: 0.995, tx: 4.95, ty: -0.2},
						transform: [4.95, -0.2, 1, 1, -0.095, 0.095, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_skeleton_body_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.146, c: -0.146, d: 0.989, tx: 3.35, ty: 0.35},
						transform: [3.35, 0.35, 1, 1, -0.146, 0.146, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm1",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_skeleton_arm_compo",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 16.45, ty: -3.75},
						transform: [16.45, -3.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 33,
						classname: "_skeleton_arm_compo",
						instancename: "arm1",
						matrix: {a: 0.993, b: 0, c: 0, d: 1, tx: 17.65, ty: -4.25},
						transform: [17.65, -4.25, 0.993, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_skeleton_arm_compo",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 16.45, ty: -3.75},
						transform: [16.45, -3.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "headbase_x",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_skeleton_headbase_toothless_x",
						instancename: "",
						matrix: {a: 0.934, b: 0, c: 0, d: 1, tx: -2.55, ty: -19.8},
						transform: [-2.55, -19.8, 0.934, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 33,
						classname: "_skeleton_headbase_toothless_x",
						instancename: "",
						matrix: {a: 0.953, b: 0, c: -0.014, d: 1, tx: -3.25, ty: -19.75},
						transform: [-3.25, -19.75, 0.953, 1, -0.014, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_skeleton_headbase_toothless_x",
						instancename: "",
						matrix: {a: 0.934, b: 0, c: 0, d: 1, tx: -2.55, ty: -19.8},
						transform: [-2.55, -19.8, 0.934, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "mouth",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_skeleton_mouth_compo",
						instancename: "mouth",
						matrix: {a: 1.033, b: -0.02, c: 0, d: 1, tx: -2.05, ty: -17.4},
						transform: [-2.05, -17.4, 1.033, 1, 0, -0.02, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 33,
						classname: "_skeleton_mouth_compo",
						instancename: "mouth",
						matrix: {a: 0.994, b: 0.065, c: 0, d: 1, tx: -5, ty: -17.3},
						transform: [-5, -17.3, 0.996, 1, 0, 0.065, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_skeleton_mouth_compo",
						instancename: "mouth",
						matrix: {a: 1.033, b: -0.02, c: 0, d: 1, tx: -2.05, ty: -17.4},
						transform: [-2.05, -17.4, 1.033, 1, 0, -0.02, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye1",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_skeleton_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.05, ty: -18.65},
						transform: [4.05, -18.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 33,
						classname: "_skeleton_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.65, ty: -18.9},
						transform: [0.65, -18.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_skeleton_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.05, ty: -18.65},
						transform: [4.05, -18.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye2",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_skeleton_eye_compo",
						instancename: "eye2",
						matrix: {a: -0.885, b: 0, c: 0, d: 0.885, tx: -14.9, ty: -18.6},
						transform: [-14.9, -18.6, 0.885, 0.885, 0, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 33,
						classname: "_skeleton_eye_compo",
						instancename: "eye2",
						matrix: {a: -0.634, b: 0, c: 0, d: 0.885, tx: -17.3, ty: -18.4},
						transform: [-17.3, -18.4, 0.634, 0.885, 0, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_skeleton_eye_compo",
						instancename: "eye2",
						matrix: {a: -0.885, b: 0, c: 0, d: 0.885, tx: -14.9, ty: -18.6},
						transform: [-14.9, -18.6, 0.885, 0.885, 0, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "nose_x",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_skeleton_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.75, ty: -16.85},
						transform: [-5.75, -16.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 33,
						classname: "_skeleton_nose_x",
						instancename: "",
						matrix: {a: 0.835, b: 0, c: 0, d: 1, tx: -10.35, ty: -16.75},
						transform: [-10.35, -16.75, 0.835, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_skeleton_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.75, ty: -16.85},
						transform: [-5.75, -16.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.487, 0], [0.553, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "attackbox",
				keys: [
					{
						from: 0,
						to: 34,
						classname: "_skeleton_common_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.396, b: 0, c: 0, d: 0.126, tx: -3.45, ty: 25.55},
						transform: [-3.45, 25.55, 0.396, 0.126, 0, 0, 0],
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
						to: 34,
						classname: "_skeleton_common_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.508, b: 0, c: 0, d: 0.204, tx: 0.05, ty: -33.1},
						transform: [0.05, -33.1, 0.508, 0.204, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_skeleton_air_turn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "pelvis_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_skeleton_pelvis2_x",
						instancename: "",
						matrix: {a: 0.996, b: 0.087, c: -0.087, d: 0.996, tx: 1.45, ty: 14.2},
						transform: [1.45, 14.2, 1, 1, -0.087, 0.087, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.394, 0], [0.72, 0.4], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_pelvis2_x",
						instancename: "",
						matrix: {a: 1, b: -0.004, c: 0.004, d: 1, tx: 0.55, ty: 14.05},
						transform: [0.55, 14.05, 1, 1, 0.004, -0.004, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_skeleton_pelvis2_x",
						instancename: "",
						matrix: {a: -1, b: -0.004, c: -0.004, d: 1, tx: 1.05, ty: 14.05},
						transform: [1.05, 14.05, 1, 1, -0.004, -3.137, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.227, 0.357], [0.579, 0.704], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_pelvis2_x",
						instancename: "",
						matrix: {a: -0.996, b: 0.087, c: 0.087, d: 0.996, tx: -1.35, ty: 14.2},
						transform: [-1.35, 14.2, 1, 1, 0.087, 3.055, NaN],
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
						to: 5,
						classname: "_skeleton_leg2_x",
						instancename: "",
						matrix: {a: -0.995, b: 0.101, c: 0.101, d: 0.995, tx: -4, ty: 15.75},
						transform: [-4, 15.75, 1, 1, 0.101, 3.04, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.768, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_leg2_x",
						instancename: "",
						matrix: {a: -0.811, b: 0.585, c: 0.585, d: 0.811, tx: -3.8, ty: 16.4},
						transform: [-3.8, 16.4, 1, 1, 0.625, 2.517, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_skeleton_leg2_x",
						instancename: "",
						matrix: {a: 0.736, b: 0.375, c: -0.454, d: 0.891, tx: 6.15, ty: 16.65},
						transform: [6.15, 16.65, 0.826, 1, -0.471, 0.471, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.521], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_leg2_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.101, c: -0.101, d: 0.995, tx: 4.15, ty: 15.65},
						transform: [4.15, 15.65, 1, 1, -0.101, 0.101, NaN],
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
						to: 5,
						classname: "_skeleton_claw_2",
						instancename: "",
						matrix: {a: 0.797, b: 0.604, c: -0.604, d: 0.797, tx: -10.75, ty: 18.35},
						transform: [-10.75, 18.35, 1, 1, -0.649, 0.649, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.768, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_claw_2",
						instancename: "",
						matrix: {a: 0.955, b: 0.296, c: -0.296, d: 0.955, tx: -8.55, ty: 20.95},
						transform: [-8.55, 20.95, 1, 1, -0.3, 0.3, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_skeleton_claw_2",
						instancename: "",
						matrix: {a: -0.97, b: 0.245, c: 0.245, d: 0.97, tx: 9.65, ty: 20.35},
						transform: [9.65, 20.35, 1, 1, 0.247, 2.894, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.521], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_claw_2",
						instancename: "",
						matrix: {a: -0.797, b: 0.604, c: 0.604, d: 0.797, tx: 10.5, ty: 18.15},
						transform: [10.5, 18.15, 1, 1, 0.649, 2.493, NaN],
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
						to: 5,
						classname: "_skeleton_leg2_x",
						instancename: "",
						matrix: {a: -0.78, b: 0.625, c: 0.625, d: 0.78, tx: 4.75, ty: 17.3},
						transform: [4.75, 17.3, 1, 1, 0.675, 2.466, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.768, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_leg2_x",
						instancename: "",
						matrix: {a: -0.654, b: 0.757, c: 0.757, d: 0.654, tx: 5.45, ty: 16.5},
						transform: [5.45, 16.5, 1, 1, 0.858, 2.283, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_skeleton_leg2_x",
						instancename: "",
						matrix: {a: 0.61, b: 0.249, c: -0.378, d: 0.926, tx: -3.75, ty: 17.1},
						transform: [-3.75, 17.1, 0.659, 1, -0.388, 0.388, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.521], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_leg2_x",
						instancename: "",
						matrix: {a: 0.676, b: 0.737, c: -0.737, d: 0.676, tx: -4.2, ty: 17.45},
						transform: [-4.2, 17.45, 1, 1, -0.828, 0.828, NaN],
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
						to: 5,
						classname: "_skeleton_claw_1",
						instancename: "",
						matrix: {a: 0.852, b: 0.523, c: -0.523, d: 0.852, tx: 1.35, ty: 21.4},
						transform: [1.35, 21.4, 1, 1, -0.55, 0.55, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.768, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_claw_1",
						instancename: "",
						matrix: {a: 0.993, b: 0.118, c: -0.118, d: 0.993, tx: 6.35, ty: 22.7},
						transform: [6.35, 22.7, 1, 1, -0.118, 0.118, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_skeleton_claw_1",
						instancename: "",
						matrix: {a: -0.971, b: 0.238, c: 0.238, d: 0.971, tx: -2.45, ty: 21.55},
						transform: [-2.45, 21.55, 1, 1, 0.24, 2.901, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.521], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_claw_1",
						instancename: "",
						matrix: {a: -0.877, b: 0.48, c: 0.48, d: 0.877, tx: -1.05, ty: 21.4},
						transform: [-1.05, 21.4, 1, 1, 0.501, 2.641, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm2",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_skeleton_arm_compo",
						instancename: "arm2",
						matrix: {a: -0.87, b: 0, c: 0, d: 0.954, tx: -11.7, ty: -3.75},
						transform: [-11.7, -3.75, 0.87, 0.954, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.768, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_arm_compo",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -15, ty: -4.1},
						transform: [-15, -4.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_skeleton_arm_compo",
						instancename: "arm2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 16.6, ty: -4.1},
						transform: [16.6, -4.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.521], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_arm_compo",
						instancename: "arm2",
						matrix: {a: 0.869, b: 0, c: 0, d: 0.954, tx: 11.75, ty: -3.75},
						transform: [11.75, -3.75, 0.869, 0.954, 0, 0, 0],
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
						to: 5,
						classname: "_skeleton_body_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.146, c: -0.146, d: 0.989, tx: 3.35, ty: 0.35},
						transform: [3.35, 0.35, 1, 1, -0.146, 0.146, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.768, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_body_x",
						instancename: "",
						matrix: {a: 1, b: -0.002, c: 0.002, d: 1, tx: 1.75, ty: 0.35},
						transform: [1.75, 0.35, 1, 1, 0.002, -0.002, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_skeleton_body_x",
						instancename: "",
						matrix: {a: -1, b: -0.002, c: -0.002, d: 1, tx: -0.15, ty: 0.35},
						transform: [-0.15, 0.35, 1, 1, -0.002, -3.14, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.521], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_body_x",
						instancename: "",
						matrix: {a: -0.989, b: 0.146, c: 0.146, d: 0.989, tx: -3.25, ty: 0.35},
						transform: [-3.25, 0.35, 1, 1, 0.146, 2.995, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm1",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_skeleton_arm_compo",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 16.45, ty: -3.75},
						transform: [16.45, -3.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.768, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_arm_compo",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 16.65, ty: -3.95},
						transform: [16.65, -3.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_skeleton_arm_compo",
						instancename: "arm1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -15.05, ty: -3.95},
						transform: [-15.05, -3.95, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.521], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_arm_compo",
						instancename: "arm1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -16.35, ty: -3.75},
						transform: [-16.35, -3.75, 1, 1, 0, 3.142, NaN],
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
						to: 5,
						classname: "_skeleton_headbase_toothless_x",
						instancename: "",
						matrix: {a: 0.934, b: 0, c: 0, d: 1, tx: -2.55, ty: -19.8},
						transform: [-2.55, -19.8, 0.934, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.768, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_headbase_toothless_x",
						instancename: "",
						matrix: {a: 0.824, b: 0, c: 0.095, d: 1, tx: -2.2, ty: -18.45},
						transform: [-2.2, -18.45, 0.824, 1.004, 0.095, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_skeleton_headbase_toothless_x",
						instancename: "",
						matrix: {a: -0.824, b: 0, c: -0.095, d: 1, tx: 2.15, ty: -18.45},
						transform: [2.15, -18.45, 0.824, 1.004, -0.095, -3.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.521], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_headbase_toothless_x",
						instancename: "",
						matrix: {a: -0.934, b: 0, c: 0, d: 1, tx: 2.8, ty: -19.8},
						transform: [2.8, -19.8, 0.934, 1, 0, -3.141, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mouth",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_skeleton_mouth_compo",
						instancename: "mouth",
						matrix: {a: 1.033, b: -0.02, c: 0, d: 1, tx: -2.05, ty: -17.4},
						transform: [-2.05, -17.4, 1.033, 1, 0, -0.02, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.768, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_mouth_compo",
						instancename: "mouth",
						matrix: {a: 0.962, b: -0.019, c: 0, d: 1, tx: 0.55, ty: -15.65},
						transform: [0.55, -15.65, 0.962, 1, 0, -0.02, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_skeleton_mouth_compo",
						instancename: "mouth",
						matrix: {a: -0.962, b: -0.019, c: 0, d: 1, tx: 1.05, ty: -15.7},
						transform: [1.05, -15.7, 0.962, 1, 0, -3.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.521], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_mouth_compo",
						instancename: "mouth",
						matrix: {a: -1.033, b: -0.02, c: 0, d: 1, tx: 2.15, ty: -17.4},
						transform: [2.15, -17.4, 1.033, 1, 0, -3.122, NaN],
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
						classname: "_skeleton_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.05, ty: -18.65},
						transform: [4.05, -18.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.768, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 9.2, ty: -17},
						transform: [9.2, -17, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_skeleton_eye_compo",
						instancename: "eye1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -6.6, ty: -17.1},
						transform: [-6.6, -17.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.521], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_eye_compo",
						instancename: "eye1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -3.8, ty: -18.65},
						transform: [-3.8, -18.65, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye2",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_skeleton_eye_compo",
						instancename: "eye2",
						matrix: {a: -0.885, b: 0, c: 0, d: 0.885, tx: -14.9, ty: -18.6},
						transform: [-14.9, -18.6, 0.885, 0.885, 0, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.768, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_eye_compo",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -10.35, ty: -16.35},
						transform: [-10.35, -16.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_skeleton_eye_compo",
						instancename: "eye2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 12.35, ty: -17.05},
						transform: [12.35, -17.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.521], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_eye_compo",
						instancename: "eye2",
						matrix: {a: 0.885, b: 0, c: 0, d: 0.885, tx: 15.15, ty: -18.6},
						transform: [15.15, -18.6, 0.885, 0.885, 0, 0, 0],
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
						to: 5,
						classname: "_skeleton_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.75, ty: -16.85},
						transform: [-5.75, -16.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.768, 0.565], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -13.7},
						transform: [-0.65, -13.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_skeleton_nose_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 3.3, ty: -13.35},
						transform: [3.3, -13.35, 1, 1, 0, -3.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.521], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_nose_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 6, ty: -16.85},
						transform: [6, -16.85, 1, 1, 0, -3.141, NaN],
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
						classname: "_skeleton_common_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.396, b: 0, c: 0, d: 0.126, tx: -3.45, ty: 25.55},
						transform: [-3.45, 25.55, 0.396, 0.126, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.452, 0], [0.595, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_common_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.396, b: 0, c: 0, d: 0.126, tx: 8.35, ty: 23.15},
						transform: [8.35, 23.15, 0.396, 0.126, 0, 0, 0],
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
						to: 13,
						classname: "_skeleton_common_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.508, b: 0, c: 0, d: 0.204, tx: 0.05, ty: -33.1},
						transform: [0.05, -33.1, 0.508, 0.204, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.452, 0], [0.595, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_common_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.508, b: 0, c: 0, d: 0.204, tx: 1.5, ty: -33.1},
						transform: [1.5, -33.1, 0.508, 0.204, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_skeleton_ground_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 24,
		labels: {},
		layers: [
			{
				name: "wing_part_3_x",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: -0.924, b: -0.168, c: -0.158, d: 0.986, tx: -35, ty: -27.95},
						transform: [-35, -27.95, 0.939, 0.998, -0.159, -2.961, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.545, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 22,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: -0.877, b: -0.337, c: -0.338, d: 0.939, tx: -31.95, ty: -29.1},
						transform: [-31.95, -29.1, 0.939, 0.998, -0.345, -2.775, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.545, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: -0.924, b: -0.168, c: -0.158, d: 0.986, tx: -35, ty: -27.95},
						transform: [-35, -27.95, 0.939, 0.998, -0.159, -2.961, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "wing_part_1_x",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: -0.61, b: -0.759, c: -0.712, d: 0.651, tx: -8.25, ty: -5.45},
						transform: [-8.25, -5.45, 0.974, 0.964, -0.83, -2.247, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.545, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 22,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: -0.524, b: -0.821, c: -0.778, d: 0.57, tx: -8.2, ty: -2.7},
						transform: [-8.2, -2.7, 0.974, 0.964, -0.939, -2.139, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.545, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: -0.61, b: -0.759, c: -0.712, d: 0.651, tx: -8.25, ty: -5.45},
						transform: [-8.25, -5.45, 0.974, 0.964, -0.83, -2.247, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "wing_part_2_x",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: -0.924, b: -0.168, c: -0.158, d: 0.986, tx: -20.55, ty: -24.7},
						transform: [-20.55, -24.7, 0.939, 0.998, -0.159, -2.961, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.545, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 22,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: -0.877, b: -0.337, c: -0.338, d: 0.939, tx: -18.35, ty: -23.25},
						transform: [-18.35, -23.25, 0.939, 0.998, -0.345, -2.775, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.545, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: -0.924, b: -0.168, c: -0.158, d: 0.986, tx: -20.55, ty: -24.7},
						transform: [-20.55, -24.7, 0.939, 0.998, -0.159, -2.961, NaN],
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
						to: 12,
						classname: "_skeleton_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.786, tx: -3.85, ty: 18.05},
						transform: [-3.85, 18.05, 1, 0.786, 0, 3.142, NaN],
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
						classname: "_skeleton_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.701, tx: -3.85, ty: 17.85},
						transform: [-3.85, 17.85, 1, 0.701, 0, 3.142, NaN],
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
						classname: "_skeleton_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.786, tx: -3.85, ty: 18.05},
						transform: [-3.85, 18.05, 1, 0.786, 0, 3.142, NaN],
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
						classname: "_skeleton_claw_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.76, tx: -7.8, ty: 20.25},
						transform: [-7.8, 20.25, 1, 0.76, 0, 0, 0],
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
						classname: "_skeleton_claw_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.76, tx: -7.8, ty: 20.25},
						transform: [-7.8, 20.25, 1, 0.76, 0, 0, 0],
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
						classname: "_skeleton_claw_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.76, tx: -7.8, ty: 20.25},
						transform: [-7.8, 20.25, 1, 0.76, 0, 0, 0],
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
						to: 12,
						classname: "_skeleton_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.779, tx: 5.75, ty: 18.3},
						transform: [5.75, 18.3, 1, 0.779, 0, 0, 0],
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
						classname: "_skeleton_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.809, tx: 5.75, ty: 17.9},
						transform: [5.75, 17.9, 1, 0.809, 0, 0, 0],
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
						classname: "_skeleton_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.779, tx: 5.75, ty: 18.3},
						transform: [5.75, 18.3, 1, 0.779, 0, 0, 0],
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
						classname: "_skeleton_claw_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.76, tx: 7.9, ty: 20.3},
						transform: [7.9, 20.3, 1, 0.76, 0, 3.142, NaN],
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
						classname: "_skeleton_claw_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.76, tx: 7.9, ty: 20.3},
						transform: [7.9, 20.3, 1, 0.76, 0, 3.142, NaN],
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
						classname: "_skeleton_claw_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.76, tx: 7.9, ty: 20.3},
						transform: [7.9, 20.3, 1, 0.76, 0, 3.142, NaN],
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
						to: 12,
						classname: "_skeleton_pelvis_x",
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
						classname: "_skeleton_pelvis_x",
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
						classname: "_skeleton_pelvis_x",
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
						to: 9,
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: -0.996, b: 0.088, c: 0.088, d: 0.996, tx: -24.75, ty: -0.2},
						transform: [-24.75, -0.2, 1, 1, 0.088, 3.054, NaN],
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
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: -0.984, b: 0.179, c: 0.179, d: 0.984, tx: -22.3, ty: 6},
						transform: [-22.3, 6, 1, 1, 0.18, 2.962, NaN],
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
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: -0.996, b: 0.088, c: 0.088, d: 0.996, tx: -24.75, ty: -0.2},
						transform: [-24.75, -0.2, 1, 1, 0.088, 3.054, NaN],
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
						to: 9,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: -0.969, b: 0.245, c: 0.245, d: 0.969, tx: -14.05, ty: -4.55},
						transform: [-14.05, -4.55, 1, 1, 0.248, 2.894, NaN],
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
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: -0.915, b: 0.404, c: 0.404, d: 0.915, tx: -12.85, ty: -0.7},
						transform: [-12.85, -0.7, 1, 1, 0.416, 2.725, NaN],
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
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: -0.969, b: 0.245, c: 0.245, d: 0.969, tx: -14.05, ty: -4.55},
						transform: [-14.05, -4.55, 1, 1, 0.248, 2.894, NaN],
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
						to: 12,
						classname: "_skeleton_body_x",
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
						classname: "_skeleton_body_x",
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
						classname: "_skeleton_body_x",
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
						to: 8,
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: 0.988, b: 0.155, c: -0.155, d: 0.988, tx: 29.45, ty: -0.6},
						transform: [29.45, -0.6, 1, 1, -0.156, 0.156, NaN],
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
						classname: "_skeleton_arm2_x",
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
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: 0.988, b: 0.155, c: -0.155, d: 0.988, tx: 29.45, ty: -0.6},
						transform: [29.45, -0.6, 1, 1, -0.156, 0.156, NaN],
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
						to: 8,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.988, b: 0.155, c: -0.155, d: 0.988, tx: 14.9, ty: -4.15},
						transform: [14.9, -4.15, 1, 1, -0.156, 0.156, NaN],
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
						classname: "_skeleton_arm1_x",
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
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.988, b: 0.155, c: -0.155, d: 0.988, tx: 14.9, ty: -4.15},
						transform: [14.9, -4.15, 1, 1, -0.156, 0.156, NaN],
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
						to: 11,
						classname: "_skeleton_head_idle",
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
						classname: "_skeleton_head_idle",
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
						classname: "_skeleton_head_idle",
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
				name: "wing_part_3_x",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 43.7, ty: -27.95},
						transform: [43.7, -27.95, 1, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 22,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 0.937, b: -0.348, c: 0.348, d: 0.937, tx: 40.5, ty: -29.5},
						transform: [40.5, -29.5, 1, 1, 0.356, -0.356, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 43.7, ty: -27.95},
						transform: [43.7, -27.95, 1, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "wing_part_1_x",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.651, b: -0.759, c: 0.759, d: 0.651, tx: 15.2, ty: -5.45},
						transform: [15.2, -5.45, 1, 1, 0.862, -0.862, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 22,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.558, b: -0.83, c: 0.83, d: 0.558, tx: 15.15, ty: -2.75},
						transform: [15.15, -2.75, 1, 1, 0.979, -0.979, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.651, b: -0.759, c: 0.759, d: 0.651, tx: 15.2, ty: -5.45},
						transform: [15.2, -5.45, 1, 1, 0.862, -0.862, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "wing_part_2_x",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 28.3, ty: -24.7},
						transform: [28.3, -24.7, 1, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 22,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.937, b: -0.348, c: 0.348, d: 0.937, tx: 26, ty: -23.45},
						transform: [26, -23.45, 1, 1, 0.356, -0.356, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 28.3, ty: -24.7},
						transform: [28.3, -24.7, 1, 1, 0.169, -0.169, NaN],
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
						to: 23,
						classname: "_skeleton_common_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.508, b: 0, c: 0, d: 0.204, tx: -3.05, ty: -32.2},
						transform: [-3.05, -32.2, 0.508, 0.204, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_skeleton_die": {
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
						classname: "_skeleton_pelvis_x",
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
						classname: "_skeleton_pelvis_x",
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
						classname: "_skeleton_pelvis_x",
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
						classname: "_skeleton_pelvis_x",
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
						classname: "_skeleton_pelvis_x",
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
						classname: "_skeleton_body_x",
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
						classname: "_skeleton_body_x",
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
						classname: "_skeleton_body_x",
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
						classname: "_skeleton_body_x",
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
						classname: "_skeleton_body_x",
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
						classname: "_skeleton_arm_flap_die",
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
						classname: "_skeleton_arm_flap_die",
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
						classname: "_skeleton_arm_flap_die",
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
						classname: "_skeleton_arm_flap_die",
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
						classname: "_skeleton_arm_flap_die",
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
						classname: "_skeleton_arm_flap_die",
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
						classname: "_skeleton_arm_flap_die",
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
						classname: "_skeleton_arm_flap_die",
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
						classname: "_skeleton_arm_flap_die",
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
						classname: "_skeleton_arm_flap_die",
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
						classname: "_skeleton_leg_die",
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
						classname: "_skeleton_leg_die",
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
						classname: "_skeleton_leg_die",
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
						classname: "_skeleton_leg_die",
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
						classname: "_skeleton_leg_die",
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
						classname: "_skeleton_leg_die",
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
						classname: "_skeleton_leg_die",
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
						classname: "_skeleton_leg_die",
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
						classname: "_skeleton_leg_die",
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
						classname: "_skeleton_leg_die",
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
						classname: "_skeleton_mandibula3_x",
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
						classname: "_skeleton_mandibula3_x",
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
						classname: "_skeleton_mandibula3_x",
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
						classname: "_skeleton_mandibula3_x",
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
						classname: "_skeleton_mandibula3_x",
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
						classname: "_skeleton_headbase3_x",
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
						classname: "_skeleton_headbase3_x",
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
						classname: "_skeleton_headbase3_x",
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
						classname: "_skeleton_headbase3_x",
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
						classname: "_skeleton_headbase3_x",
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
						classname: "_skeleton_eye_die",
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
						classname: "_skeleton_eye_die",
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
						classname: "_skeleton_eye_die",
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
						classname: "_skeleton_eye_die",
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
						classname: "_skeleton_eye_die",
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
						classname: "_skeleton_eye_die",
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
						classname: "_skeleton_eye_die",
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
						classname: "_skeleton_eye_die",
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
						classname: "_skeleton_eye_die",
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
						classname: "_skeleton_eye_die",
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
						classname: "_skeleton_nose_x",
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
						classname: "_skeleton_nose_x",
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
						classname: "_skeleton_nose_x",
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
						classname: "_skeleton_nose_x",
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
						classname: "_skeleton_nose_x",
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
	"_skeleton_skeleton_waiting": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "wing_part_3_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: -0.924, b: 0.168, c: -0.087, d: -0.544, tx: -41.6, ty: 24.15},
						transform: [-41.6, 24.15, 0.939, 0.551, -2.983, 2.961, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "wing_part_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: -0.61, b: 0.759, c: -0.712, d: -0.651, tx: -10.85, ty: 2.65},
						transform: [-10.85, 2.65, 0.974, 0.964, -2.311, 2.247, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "wing_part_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: -0.924, b: 0.168, c: -0.158, d: -0.986, tx: -27.3, ty: 20.2},
						transform: [-27.3, 20.2, 0.939, 0.998, -2.983, 2.961, NaN],
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
						classname: "_skeleton_leg_x",
						instancename: "",
						matrix: {a: -0.259, b: -0.966, c: -0.759, d: 0.203, tx: 53.4, ty: 27.45},
						transform: [53.4, 27.45, 1, 0.786, -1.309, -1.833, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "claw_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_skeleton_claw_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.76, tx: 18.65, ty: 23.25},
						transform: [18.65, 23.25, 1, 0.76, 0, 3.142, NaN],
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
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: -0.966, b: -0.721, c: 0.721, d: -0.966, tx: -12.1, ty: 9.55},
						transform: [-12.1, 9.55, 1.205, 1.205, 2.501, -2.501, NaN],
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
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: -0.36, b: -0.933, c: 0.933, d: -0.36, tx: -6.5, ty: -4.65},
						transform: [-6.5, -4.65, 1, 1, 1.939, -1.939, NaN],
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
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: -0.859, b: 0.511, c: 0.511, d: 0.859, tx: -25.8, ty: 15.65},
						transform: [-25.8, 15.65, 1, 1, 0.537, 2.605, NaN],
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
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: -0.717, b: 0.697, c: 0.697, d: 0.717, tx: -20.85, ty: 16.4},
						transform: [-20.85, 16.4, 1, 1, 0.772, 2.37, NaN],
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
						classname: "_skeleton_body_x",
						instancename: "",
						matrix: {a: -0.376, b: -0.927, c: 0.927, d: -0.376, tx: 32.35, ty: 10.5},
						transform: [32.35, 10.5, 1, 1, 1.956, -1.956, NaN],
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
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.405, b: -0.914, c: 0.914, d: 0.405, tx: 17.15, ty: 2.85},
						transform: [17.15, 2.85, 1, 1, 1.153, -1.153, NaN],
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
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.988, b: 0.155, c: -0.155, d: 0.988, tx: 25.4, ty: 23.35},
						transform: [25.4, 23.35, 1, 1, -0.156, 0.156, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_die_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_skeleton_head_die_x",
						instancename: "",
						matrix: {a: 0.574, b: 0.819, c: -0.819, d: 0.574, tx: -3.2, ty: 21.15},
						transform: [-3.2, 21.15, 1, 1, -0.96, 0.96, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_skeleton_spawn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 25,
		labels: {},
		layers: [
			{
				name: "wing_part_3_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: -0.924, b: 0.168, c: -0.087, d: -0.544, tx: -41.6, ty: 24.15},
						transform: [-41.6, 24.15, 0.939, 0.551, -2.983, 2.961, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 7,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: -0.924, b: 0.168, c: -0.087, d: -0.544, tx: -41.6, ty: 24.15},
						transform: [-41.6, 24.15, 0.939, 0.551, -2.983, 2.961, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.545, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 13,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: -0.924, b: -0.168, c: -0.158, d: 0.986, tx: -35, ty: -27.95},
						transform: [-35, -27.95, 0.939, 0.998, -0.159, -2.961, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.551], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: -0.883, b: -0.649, c: -0.741, d: 0.754, tx: -39.6, ty: -39.1},
						transform: [-39.6, -39.1, 1.096, 1.057, -0.777, -2.507, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 23,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: -0.924, b: -0.168, c: -0.1, d: 0.996, tx: -34.1, ty: -28.05},
						transform: [-34.1, -28.05, 0.939, 1.001, -0.1, -2.961, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.545, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: -0.924, b: -0.168, c: -0.158, d: 0.986, tx: -35, ty: -27.95},
						transform: [-35, -27.95, 0.939, 0.998, -0.159, -2.961, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.545, 0], [0.556, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "wing_part_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: -0.61, b: 0.759, c: -0.712, d: -0.651, tx: -10.85, ty: 2.65},
						transform: [-10.85, 2.65, 0.974, 0.964, -2.311, 2.247, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 7,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: -0.61, b: 0.759, c: -0.712, d: -0.651, tx: -10.85, ty: 2.65},
						transform: [-10.85, 2.65, 0.974, 0.964, -2.311, 2.247, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.545, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 13,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: -0.61, b: -0.759, c: -0.712, d: 0.651, tx: -8.25, ty: -5.45},
						transform: [-8.25, -5.45, 0.974, 0.964, -0.83, -2.247, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.551], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: -0.448, b: -0.891, c: -0.828, d: 0.444, tx: -19.1, ty: -10.2},
						transform: [-19.1, -10.2, 0.998, 0.94, -1.078, -2.037, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 23,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: -0.61, b: -0.759, c: -0.712, d: 0.651, tx: -8.25, ty: -5.45},
						transform: [-8.25, -5.45, 0.974, 0.964, -0.83, -2.247, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.545, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: -0.61, b: -0.759, c: -0.712, d: 0.651, tx: -8.25, ty: -5.45},
						transform: [-8.25, -5.45, 0.974, 0.964, -0.83, -2.247, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.545, 0], [0.556, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "wing_part_2_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: -0.924, b: 0.168, c: -0.158, d: -0.986, tx: -27.3, ty: 20.2},
						transform: [-27.3, 20.2, 0.939, 0.998, -2.983, 2.961, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 7,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: -0.924, b: 0.168, c: -0.158, d: -0.986, tx: -27.3, ty: 20.2},
						transform: [-27.3, 20.2, 0.939, 0.998, -2.983, 2.961, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.545, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 13,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: -0.924, b: -0.168, c: -0.158, d: 0.986, tx: -20.55, ty: -24.7},
						transform: [-20.55, -24.7, 0.939, 0.998, -0.159, -2.961, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.551], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: -0.874, b: -0.402, c: -0.35, d: 0.911, tx: -27.35, ty: -32},
						transform: [-27.35, -32, 0.962, 0.976, -0.367, -2.711, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 23,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: -0.889, b: -0.302, c: -0.301, d: 0.952, tx: -20.55, ty: -24.7},
						transform: [-20.55, -24.7, 0.939, 0.998, -0.306, -2.814, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.545, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: -0.924, b: -0.168, c: -0.158, d: 0.986, tx: -20.55, ty: -24.7},
						transform: [-20.55, -24.7, 0.939, 0.998, -0.159, -2.961, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.545, 0], [0.556, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_skeleton_leg_x",
						instancename: "",
						matrix: {a: -0.259, b: -0.966, c: -0.759, d: 0.203, tx: 53.4, ty: 27.45},
						transform: [53.4, 27.45, 1, 0.786, -1.309, -1.833, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 7,
						classname: "_skeleton_leg_x",
						instancename: "",
						matrix: {a: -0.259, b: -0.966, c: -0.759, d: 0.203, tx: 53.4, ty: 27.45},
						transform: [53.4, 27.45, 1, 0.786, -1.309, -1.833, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 13,
						classname: "_skeleton_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.786, tx: -3.85, ty: 18.05},
						transform: [-3.85, 18.05, 1, 0.786, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.551], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_skeleton_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.786, tx: -2.85, ty: 15.05},
						transform: [-2.85, 15.05, 1, 0.786, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 23,
						classname: "_skeleton_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.786, tx: -3.85, ty: 18.05},
						transform: [-3.85, 18.05, 1, 0.786, 0, 3.142, NaN],
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
						classname: "_skeleton_leg_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.786, tx: -3.85, ty: 18.05},
						transform: [-3.85, 18.05, 1, 0.786, 0, 3.142, NaN],
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
						to: 2,
						classname: "_skeleton_claw_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.76, tx: 18.65, ty: 23.25},
						transform: [18.65, 23.25, 1, 0.76, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 7,
						classname: "_skeleton_claw_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.76, tx: 18.65, ty: 23.25},
						transform: [18.65, 23.25, 1, 0.76, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 13,
						classname: "_skeleton_claw_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.76, tx: -7.8, ty: 20.25},
						transform: [-7.8, 20.25, 1, 0.76, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.551], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_skeleton_claw_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.76, tx: -7.8, ty: 20.25},
						transform: [-7.8, 20.25, 1, 0.76, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 23,
						classname: "_skeleton_claw_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.76, tx: -7.8, ty: 20.25},
						transform: [-7.8, 20.25, 1, 0.76, 0, 0, 0],
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
						classname: "_skeleton_claw_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.76, tx: -7.8, ty: 20.25},
						transform: [-7.8, 20.25, 1, 0.76, 0, 0, 0],
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
						to: 2,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: -0.966, b: -0.721, c: 0.721, d: -0.966, tx: -12.1, ty: 9.55},
						transform: [-12.1, 9.55, 1.205, 1.205, 2.501, -2.501, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 7,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: -0.966, b: -0.721, c: 0.721, d: -0.966, tx: -12.1, ty: 9.55},
						transform: [-12.1, 9.55, 1.205, 1.205, 2.501, -2.501, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 13,
						classname: "_skeleton_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.779, tx: 5.75, ty: 18.3},
						transform: [5.75, 18.3, 1, 0.779, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.551], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_skeleton_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.779, tx: 5.75, ty: 14.45},
						transform: [5.75, 14.45, 1, 0.779, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 23,
						classname: "_skeleton_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.779, tx: 5.75, ty: 18.3},
						transform: [5.75, 18.3, 1, 0.779, 0, 0, 0],
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
						classname: "_skeleton_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.779, tx: 5.75, ty: 18.3},
						transform: [5.75, 18.3, 1, 0.779, 0, 0, 0],
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
						to: 2,
					},
					{
						from: 3,
						to: 7,
					},
					{
						from: 8,
						to: 13,
						classname: "_skeleton_claw_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.76, tx: 7.9, ty: 20.3},
						transform: [7.9, 20.3, 1, 0.76, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.551], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_skeleton_claw_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.76, tx: 7.9, ty: 20.3},
						transform: [7.9, 20.3, 1, 0.76, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 23,
						classname: "_skeleton_claw_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.76, tx: 7.9, ty: 20.3},
						transform: [7.9, 20.3, 1, 0.76, 0, 3.142, NaN],
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
						classname: "_skeleton_claw_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.76, tx: 7.9, ty: 20.3},
						transform: [7.9, 20.3, 1, 0.76, 0, 3.142, NaN],
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
						to: 2,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: -0.36, b: -0.933, c: 0.933, d: -0.36, tx: -6.5, ty: -4.65},
						transform: [-6.5, -4.65, 1, 1, 1.939, -1.939, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 7,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: -0.36, b: -0.933, c: 0.933, d: -0.36, tx: -6.5, ty: -4.65},
						transform: [-6.5, -4.65, 1, 1, 1.939, -1.939, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 13,
						classname: "_skeleton_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.8, ty: 15.4},
						transform: [0.8, 15.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.551], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_skeleton_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.8, ty: 11.45},
						transform: [0.8, 11.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 23,
						classname: "_skeleton_pelvis_x",
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
						from: 24,
						to: 24,
						classname: "_skeleton_pelvis_x",
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
				name: "arm2_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: -0.859, b: 0.511, c: 0.511, d: 0.859, tx: -25.8, ty: 15.65},
						transform: [-25.8, 15.65, 1, 1, 0.537, 2.605, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 7,
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: -0.859, b: 0.511, c: 0.511, d: 0.859, tx: -25.8, ty: 15.65},
						transform: [-25.8, 15.65, 1, 1, 0.537, 2.605, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 13,
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: -0.996, b: 0.088, c: 0.088, d: 0.996, tx: -24.75, ty: -0.2},
						transform: [-24.75, -0.2, 1, 1, 0.088, 3.054, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.551], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: -0.72, b: -0.694, c: -0.694, d: 0.72, tx: -28.85, ty: -3.35},
						transform: [-28.85, -3.35, 1, 1, -0.767, -2.374, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 23,
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: -0.95, b: 0.313, c: 0.313, d: 0.95, tx: -24.7, ty: 2.6},
						transform: [-24.7, 2.6, 1, 1, 0.318, 2.824, NaN],
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
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: -0.996, b: 0.088, c: 0.088, d: 0.996, tx: -24.75, ty: -0.2},
						transform: [-24.75, -0.2, 1, 1, 0.088, 3.054, NaN],
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
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: -0.717, b: 0.697, c: 0.697, d: 0.717, tx: -20.85, ty: 16.4},
						transform: [-20.85, 16.4, 1, 1, 0.772, 2.37, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 7,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: -0.717, b: 0.697, c: 0.697, d: 0.717, tx: -20.85, ty: 16.4},
						transform: [-20.85, 16.4, 1, 1, 0.772, 2.37, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 13,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: -0.969, b: 0.245, c: 0.245, d: 0.969, tx: -14.05, ty: -4.55},
						transform: [-14.05, -4.55, 1, 1, 0.248, 2.894, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.551], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: -0.969, b: 0.245, c: 0.245, d: 0.969, tx: -16.7, ty: -6.55},
						transform: [-16.7, -6.55, 1, 1, 0.248, 2.894, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 23,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: -0.969, b: 0.245, c: 0.245, d: 0.969, tx: -14.05, ty: -2.45},
						transform: [-14.05, -2.45, 1, 1, 0.248, 2.894, NaN],
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
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: -0.969, b: 0.245, c: 0.245, d: 0.969, tx: -14.05, ty: -4.55},
						transform: [-14.05, -4.55, 1, 1, 0.248, 2.894, NaN],
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
						classname: "_skeleton_body_x",
						instancename: "",
						matrix: {a: -0.376, b: -0.927, c: 0.927, d: -0.376, tx: 32.35, ty: 10.5},
						transform: [32.35, 10.5, 1, 1, 1.956, -1.956, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 7,
						classname: "_skeleton_body_x",
						instancename: "",
						matrix: {a: -0.376, b: -0.927, c: 0.927, d: -0.376, tx: 32.35, ty: 10.5},
						transform: [32.35, 10.5, 1, 1, 1.956, -1.956, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 13,
						classname: "_skeleton_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 0.55},
						transform: [1.05, 0.55, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.551], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_skeleton_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: -3.85},
						transform: [1.05, -3.85, 1, 1, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 23,
						classname: "_skeleton_body_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.034, d: 0.999, tx: 1.05, ty: 2.1},
						transform: [1.05, 2.1, 1, 1, -0.034, 0.034, NaN],
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
						classname: "_skeleton_body_x",
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
						to: 2,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.405, b: -0.914, c: 0.914, d: 0.405, tx: 17.15, ty: 2.85},
						transform: [17.15, 2.85, 1, 1, 1.153, -1.153, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 7,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.405, b: -0.914, c: 0.914, d: 0.405, tx: 17.15, ty: 2.85},
						transform: [17.15, 2.85, 1, 1, 1.153, -1.153, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 13,
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: 0.988, b: 0.155, c: -0.155, d: 0.988, tx: 29.45, ty: -0.6},
						transform: [29.45, -0.6, 1, 1, -0.156, 0.156, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.551], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: 0.751, b: -0.66, c: 0.66, d: 0.751, tx: 29.45, ty: -3.6},
						transform: [29.45, -3.6, 1, 1, 0.721, -0.721, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 23,
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: 0.931, b: 0.365, c: -0.365, d: 0.931, tx: 26.45, ty: 2.55},
						transform: [26.45, 2.55, 1, 1, -0.373, 0.373, NaN],
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
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: 0.988, b: 0.155, c: -0.155, d: 0.988, tx: 29.45, ty: -0.6},
						transform: [29.45, -0.6, 1, 1, -0.156, 0.156, NaN],
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
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.988, b: 0.155, c: -0.155, d: 0.988, tx: 25.4, ty: 23.35},
						transform: [25.4, 23.35, 1, 1, -0.156, 0.156, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 7,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.988, b: 0.155, c: -0.155, d: 0.988, tx: 25.4, ty: 23.35},
						transform: [25.4, 23.35, 1, 1, -0.156, 0.156, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 13,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.988, b: 0.155, c: -0.155, d: 0.988, tx: 14.9, ty: -4.15},
						transform: [14.9, -4.15, 1, 1, -0.156, 0.156, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.551], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.988, b: 0.155, c: -0.155, d: 0.988, tx: 14.9, ty: -7},
						transform: [14.9, -7, 1, 1, -0.156, 0.156, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 23,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.914, b: 0.405, c: -0.405, d: 0.914, tx: 14.9, ty: -4.15},
						transform: [14.9, -4.15, 1, 1, -0.417, 0.417, NaN],
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
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.988, b: 0.155, c: -0.155, d: 0.988, tx: 14.9, ty: -4.15},
						transform: [14.9, -4.15, 1, 1, -0.156, 0.156, NaN],
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
						to: 2,
						classname: "_skeleton_head_die_x",
						instancename: "",
						matrix: {a: 0.574, b: 0.819, c: -0.819, d: 0.574, tx: -3.2, ty: 21.15},
						transform: [-3.2, 21.15, 1, 1, -0.96, 0.96, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 7,
						classname: "_skeleton_head_die_x",
						instancename: "",
						matrix: {a: 0.574, b: 0.819, c: -0.819, d: 0.574, tx: -3.2, ty: 21.15},
						transform: [-3.2, 21.15, 1, 1, -0.96, 0.96, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 13,
						classname: "_skeleton_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.5, ty: -9.3},
						transform: [1.5, -9.3, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.551], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_skeleton_head_idle",
						instancename: "",
						matrix: {a: 0.96, b: 0.28, c: -0.28, d: 0.96, tx: -0.75, ty: -16.55},
						transform: [-0.75, -16.55, 1, 1, -0.283, 0.283, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 23,
						classname: "_skeleton_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 1.5, ty: -6.65},
						transform: [1.5, -6.65, 1, 1, -0.022, 0.022, NaN],
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
						classname: "_skeleton_head_idle",
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
				name: "wing_part_3_x",
				keys: [
					{
						from: 0,
						to: 2,
					},
					{
						from: 3,
						to: 7,
					},
					{
						from: 8,
						to: 13,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 43.7, ty: -27.95},
						transform: [43.7, -27.95, 1, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.551], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 0.832, b: -0.668, c: 0.847, d: 0.741, tx: 37.2, ty: -38.2},
						transform: [37.2, -38.2, 1.067, 1.126, 0.852, -0.676, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 23,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.084, d: 1, tx: 41.4, ty: -27.7},
						transform: [41.4, -27.7, 1, 1.004, 0.084, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 43.7, ty: -27.95},
						transform: [43.7, -27.95, 1, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "wing_part_1_x",
				keys: [
					{
						from: 0,
						to: 2,
					},
					{
						from: 3,
						to: 7,
					},
					{
						from: 8,
						to: 13,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.651, b: -0.759, c: 0.759, d: 0.651, tx: 15.2, ty: -5.45},
						transform: [15.2, -5.45, 1, 1, 0.862, -0.862, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.551], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.494, b: -0.869, c: 0.869, d: 0.494, tx: 15.25, ty: -10.7},
						transform: [15.25, -10.7, 1, 1, 1.054, -1.054, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 23,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.521, b: -0.854, c: 0.854, d: 0.521, tx: 15.25, ty: -5.45},
						transform: [15.25, -5.45, 1, 1, 1.023, -1.023, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.651, b: -0.759, c: 0.759, d: 0.651, tx: 15.2, ty: -5.45},
						transform: [15.2, -5.45, 1, 1, 0.862, -0.862, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "wing_part_2_x",
				keys: [
					{
						from: 0,
						to: 2,
					},
					{
						from: 3,
						to: 7,
					},
					{
						from: 8,
						to: 13,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 28.3, ty: -24.7},
						transform: [28.3, -24.7, 1, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.551], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.936, b: -0.353, c: 0.353, d: 0.936, tx: 24.45, ty: -32.1},
						transform: [24.45, -32.1, 1, 1, 0.361, -0.361, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 23,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.056, c: 0.056, d: 0.998, tx: 24.6, ty: -26.25},
						transform: [24.6, -26.25, 1, 1, 0.056, -0.056, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 28.3, ty: -24.7},
						transform: [28.3, -24.7, 1, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.487, 0], [0.555, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "thunder",
				keys: [
					{
						from: 0,
						to: 24,
						classname: "_skeleton_common_fx_spawn",
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
	"_skeleton_skeleton_crash": {
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
						classname: "_skeleton_crash_part_2",
						instancename: "crash_part_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.05, ty: 17.5},
						transform: [-1.05, 17.5, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_crash_part_3",
						instancename: "crash_part_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 23.35, ty: 25.95},
						transform: [23.35, 25.95, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_crash_part_4",
						instancename: "crash_part_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 20.95, ty: 11.05},
						transform: [20.95, 11.05, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_crash_part_5",
						instancename: "crash_part_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -29.55, ty: 11.85},
						transform: [-29.55, 11.85, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_crash_part_6",
						instancename: "crash_part_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.9, ty: 19.8},
						transform: [24.9, 19.8, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_crash_part_3",
						instancename: "crash_part_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -31.45, ty: 0.7},
						transform: [-31.45, 0.7, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_crash_part_3",
						instancename: "crash_part_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.7, ty: 2.35},
						transform: [24.7, 2.35, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_crash_part_3",
						instancename: "crash_part_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -30.65, ty: 20.75},
						transform: [-30.65, 20.75, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_crash_part_6",
						instancename: "crash_part_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.35, ty: 7.45},
						transform: [-22.35, 7.45, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_crash_part_1",
						instancename: "crash_part_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.25, ty: -9.75},
						transform: [2.25, -9.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_common_box_physics": {
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
	"_skeleton_common_circle_physics": {
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
	"_skeleton_leg2_x": {
		type: "bitmap",
		asset: "_skeleton_leg2_x",
		scale: 2,
		position: [-5.35, -6.9],
	},
	"_skeleton_claw_2": {
		type: "movieclip",
		fps: 30,
		totalFrames: 12,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_skeleton_claw_anima",
						instancename: "",
						matrix: {a: 0.943, b: 0, c: 0, d: 1.142, tx: 0.35, ty: 0.3},
						transform: [0.35, 0.3, 0.943, 1.142, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0.185], [0.586, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_claw_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -1.7},
						transform: [-0.15, -1.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 10,
						classname: "_skeleton_claw_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -1.7},
						transform: [-0.15, -1.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_skeleton_claw_anima",
						instancename: "",
						matrix: {a: 0.94, b: 0, c: 0, d: 1.148, tx: 0.3, ty: 0.4},
						transform: [0.3, 0.4, 0.94, 1.148, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.359, 0], [0.69, 0.361], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_skeleton_pelvis2_x": {
		type: "bitmap",
		asset: "_skeleton_pelvis2_x",
		scale: 2,
		position: [-11.05, -8.95],
	},
	"_skeleton_claw_1": {
		type: "movieclip",
		fps: 30,
		totalFrames: 12,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_skeleton_claw_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -1.7},
						transform: [-0.15, -1.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 10,
						classname: "_skeleton_claw_anima",
						instancename: "",
						matrix: {a: 0.94, b: 0, c: 0, d: 1.148, tx: 0.3, ty: 0.4},
						transform: [0.3, 0.4, 0.94, 1.148, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_skeleton_claw_anima",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -1.7},
						transform: [-0.15, -1.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_arm_compo": {
		type: "movieclip",
		fps: 30,
		totalFrames: 25,
		labels: {idle: {from:0, to:3}, flap: {from:5, to:10}, flap_out: {from:12, to:23}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_skeleton_arm_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 11,
						classname: "_skeleton_arm_flap",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 24,
						classname: "_skeleton_arm_flapout",
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
				name: "Layer 4",
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
						to: 23,
					},
					{
						from: 24,
						to: 24,
						actions: function(self){self.gotoAndPlay("idle");},
					},
				]
			},
		]
	},
	"_skeleton_body_x": {
		type: "bitmap",
		asset: "_skeleton_body_x",
		scale: 2,
		position: [-22.5, -13.55],
	},
	"_skeleton_headbase_toothless_x": {
		type: "bitmap",
		asset: "_skeleton_headbase_toothless_x",
		scale: 2,
		position: [-24.4, -25.35],
	},
	"_skeleton_mouth_compo": {
		type: "movieclip",
		fps: 30,
		totalFrames: 22,
		labels: {idle: {from:0, to:3}, flap: {from:5, to:10}, flap_out: {from:12, to:20}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_skeleton_mouth_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 11,
						classname: "_skeleton_mouth_flap",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 21,
						classname: "_skeleton_mouth_flapout",
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
				name: "Layer 4",
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
						to: 20,
					},
					{
						from: 21,
						to: 21,
						actions: function(self){self.gotoAndPlay("idle");},
					},
				]
			},
		]
	},
	"_skeleton_eye_compo": {
		type: "movieclip",
		fps: 30,
		totalFrames: 25,
		labels: {idle: {from:0, to:3}, flap: {from:5, to:10}, flap_out: {from:12, to:23}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_skeleton_eye1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 11,
						classname: "_skeleton_eye_flap",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 24,
						classname: "_skeleton_eye_flapout",
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
				name: "Layer 4",
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
						to: 23,
					},
					{
						from: 24,
						to: 24,
						actions: function(self){self.gotoAndPlay("idle");},
					},
				]
			},
		]
	},
	"_skeleton_nose_x": {
		type: "bitmap",
		asset: "_skeleton_nose_x",
		scale: 2,
		position: [-8.65, -6.2],
	},
	"_skeleton_common_attackbox": {
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
	"_skeleton_common_hittablebox": {
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
	"_skeleton_wing_part_3_x": {
		type: "bitmap",
		asset: "_skeleton_wing_part_3_x",
		scale: 2,
		position: [-26.2, -6.6],
	},
	"_skeleton_wing_part_1_x": {
		type: "bitmap",
		asset: "_skeleton_wing_part_1_x",
		scale: 2,
		position: [-6.4, -10.35],
	},
	"_skeleton_wing_part_2_x": {
		type: "bitmap",
		asset: "_skeleton_wing_part_2_x",
		scale: 2,
		position: [-7, -10.7],
	},
	"_skeleton_leg_x": {
		type: "bitmap",
		asset: "_skeleton_leg_x",
		scale: 2,
		position: [-6.5, -5.55],
	},
	"_skeleton_claw_x": {
		type: "bitmap",
		asset: "_skeleton_claw_x",
		scale: 2,
		position: [-16.3, -6.65],
	},
	"_skeleton_pelvis_x": {
		type: "bitmap",
		asset: "_skeleton_pelvis_x",
		scale: 2,
		position: [-12.45, -8.95],
	},
	"_skeleton_arm2_x": {
		type: "bitmap",
		asset: "_skeleton_arm2_x",
		scale: 2,
		position: [-11.45, -6],
	},
	"_skeleton_arm1_x": {
		type: "bitmap",
		asset: "_skeleton_arm1_x",
		scale: 2,
		position: [-7, -8.15],
	},
	"_skeleton_head_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 23,
		labels: {},
		layers: [
			{
				name: "headbase_x",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_skeleton_headbase_toothless_x",
						instancename: "",
						matrix: {a: 0.934, b: 0, c: 0, d: 1, tx: -7.8, ty: -10.7},
						transform: [-7.8, -10.7, 0.934, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 21,
						classname: "_skeleton_headbase_toothless_x",
						instancename: "",
						matrix: {a: 0.934, b: 0, c: -0.023, d: 1, tx: -7.45, ty: -10.7},
						transform: [-7.45, -10.7, 0.934, 1, -0.023, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_skeleton_headbase_toothless_x",
						instancename: "",
						matrix: {a: 0.934, b: 0, c: 0, d: 1, tx: -7.8, ty: -10.7},
						transform: [-7.8, -10.7, 0.934, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.488, 0], [0.768, 0.565], [1, 1], ],
						}
					},
				]
			},
			{
				name: "mouth",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_skeleton_mouth_compo",
						instancename: "mouth",
						matrix: {a: 1.033, b: -0.02, c: 0, d: 1, tx: -7.3, ty: -8.3},
						transform: [-7.3, -8.3, 1.033, 1, 0, -0.02, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 21,
						classname: "_skeleton_mouth_idle",
						instancename: "mouth",
						matrix: {a: 1.033, b: -0.02, c: -0.037, d: 1.001, tx: -7.3, ty: -8.3},
						transform: [-7.3, -8.3, 1.033, 1.001, -0.037, -0.02, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_skeleton_mouth_compo",
						instancename: "mouth",
						matrix: {a: 1.033, b: -0.02, c: 0, d: 1, tx: -7.3, ty: -8.3},
						transform: [-7.3, -8.3, 1.033, 1, 0, -0.02, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.488, 0], [0.768, 0.565], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye1",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_skeleton_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.2, ty: -9.55},
						transform: [-1.2, -9.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 21,
						classname: "_skeleton_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.9, ty: -9.55},
						transform: [-1.9, -9.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_skeleton_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.2, ty: -9.55},
						transform: [-1.2, -9.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.488, 0], [0.768, 0.565], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye2",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_skeleton_eye_compo",
						instancename: "eye2",
						matrix: {a: -0.885, b: 0, c: 0, d: 0.885, tx: -20.15, ty: -9.5},
						transform: [-20.15, -9.5, 0.885, 0.885, 0, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 21,
						classname: "_skeleton_eye_compo",
						instancename: "eye2",
						matrix: {a: -0.799, b: 0, c: 0, d: 0.885, tx: -20.5, ty: -9.45},
						transform: [-20.5, -9.45, 0.799, 0.885, 0, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_skeleton_eye_compo",
						instancename: "eye2",
						matrix: {a: -0.885, b: 0, c: 0, d: 0.885, tx: -20.15, ty: -9.5},
						transform: [-20.15, -9.5, 0.885, 0.885, 0, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.488, 0], [0.768, 0.565], [1, 1], ],
						}
					},
				]
			},
			{
				name: "nose_x",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_skeleton_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -11, ty: -7.75},
						transform: [-11, -7.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 21,
						classname: "_skeleton_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -11.8, ty: -7.75},
						transform: [-11.8, -7.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_skeleton_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -11, ty: -7.75},
						transform: [-11, -7.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.488, 0], [0.768, 0.565], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_skeleton_arm_flap_die": {
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
						classname: "_skeleton_arm5_x",
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
						classname: "_skeleton_arm5_x",
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
						classname: "_skeleton_arm5_x",
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
						classname: "_skeleton_arm5_x",
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
						classname: "_skeleton_arm5_x",
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
						classname: "_skeleton_arm3_x",
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
						classname: "_skeleton_arm3_x",
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
						classname: "_skeleton_arm4_x",
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
						classname: "_skeleton_arm4_x",
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
						classname: "_skeleton_arm4_x",
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
	"_skeleton_leg_die": {
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
						classname: "_skeleton_leg8_x",
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
						classname: "_skeleton_leg8_x",
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
						classname: "_skeleton_leg8_x",
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
						classname: "_skeleton_claw_x",
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
						classname: "_skeleton_claw_x",
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
						classname: "_skeleton_claw_x",
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
	"_skeleton_mandibula3_x": {
		type: "bitmap",
		asset: "_skeleton_mandibula3_x",
		scale: 2,
		position: [-14.5, -16.2],
	},
	"_skeleton_headbase3_x": {
		type: "bitmap",
		asset: "_skeleton_headbase3_x",
		scale: 2,
		position: [-27.5, -24.1],
	},
	"_skeleton_eye_die": {
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
						classname: "_skeleton_eye_die_x",
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
						classname: "_skeleton_eye_die_x",
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
						classname: "_skeleton_eye_die_x",
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
						classname: "_skeleton_eye_die_x",
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
	"_skeleton_head_die_x": {
		type: "bitmap",
		asset: "_skeleton_head_die_x",
		scale: 2,
		position: [-30.95, -36.05],
	},
	"_skeleton_common_fx_spawn": {
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
						classname: "_skeleton_common_startballoonfx",
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
						classname: "_skeleton_common_startballoonfx",
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
						classname: "_skeleton_common_startballoonfx",
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
						classname: "_skeleton_common_startballoonfx_end",
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
						classname: "_skeleton_common_thunder_part_1_x",
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
						classname: "_skeleton_common_thunder_part_2_x",
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
						classname: "_skeleton_common_thunder_part_3_x",
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
						classname: "_skeleton_common_thunder_part_2_x",
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
						classname: "_skeleton_common_thunder_part_5_x",
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
	"_skeleton_crash_part_2": {
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
						classname: "_skeleton_body_4_x",
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
						classname: "_skeleton_common_circle_physics",
						instancename: "",
						matrix: {a: 0.172, b: 0, c: 0, d: 0.172, tx: 6.1, ty: -0.3},
						transform: [6.1, -0.3, 0.172, 0.172, 0, 0, 0],
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
						classname: "_skeleton_common_circle_physics",
						instancename: "",
						matrix: {a: 0.172, b: 0, c: 0, d: 0.172, tx: -6.25, ty: -0.3},
						transform: [-6.25, -0.3, 0.172, 0.172, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_crash_part_3": {
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
						classname: "_skeleton_bone1_x",
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
				name: "box_physics",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_skeleton_common_box_physics",
						instancename: "",
						matrix: {a: 0.194, b: 0, c: 0, d: 0.024, tx: 0, ty: 0},
						transform: [0, 0, 0.194, 0.024, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_crash_part_4": {
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
						classname: "_skeleton_bone2_x",
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
				name: "box_physics",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_skeleton_common_box_physics",
						instancename: "",
						matrix: {a: 0.157, b: 0, c: 0, d: 0.03, tx: 0, ty: 0},
						transform: [0, 0, 0.157, 0.03, 0, 0, 0],
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
						classname: "_skeleton_common_circle_physics",
						instancename: "",
						matrix: {a: 0.04, b: 0, c: 0, d: 0.04, tx: -6.15, ty: 1.85},
						transform: [-6.15, 1.85, 0.04, 0.04, 0, 0, 0],
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
						classname: "_skeleton_common_circle_physics",
						instancename: "",
						matrix: {a: 0.04, b: 0, c: 0, d: 0.04, tx: -6.75, ty: -1.35},
						transform: [-6.75, -1.35, 0.04, 0.04, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_crash_part_5": {
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
						classname: "_skeleton_bone4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.35, ty: -0.1},
						transform: [-0.35, -0.1, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_common_box_physics",
						instancename: "",
						matrix: {a: 0.161, b: 0, c: 0, d: 0.037, tx: 0, ty: 0},
						transform: [0, 0, 0.161, 0.037, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_crash_part_6": {
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
						classname: "_skeleton_bone_5_x",
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
						classname: "_skeleton_common_box_physics",
						instancename: "",
						matrix: {a: 0.069, b: 0, c: 0, d: 0.025, tx: 0, ty: 0},
						transform: [0, 0, 0.069, 0.025, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_crash_part_1": {
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
						classname: "_skeleton_head_crash_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.5, ty: 10.95},
						transform: [4.5, 10.95, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_common_circle_physics",
						instancename: "",
						matrix: {a: 0.158, b: 0, c: 0, d: 0.158, tx: 12.9, ty: -9.4},
						transform: [12.9, -9.4, 0.158, 0.158, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "circle_physics copia",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_skeleton_common_circle_physics",
						instancename: "",
						matrix: {a: 0.278, b: 0, c: 0, d: 0.278, tx: 2.75, ty: -2.55},
						transform: [2.75, -2.55, 0.278, 0.278, 0, 0, 0],
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
						classname: "_skeleton_common_circle_physics",
						instancename: "",
						matrix: {a: 0.274, b: 0, c: 0, d: 0.274, tx: -7.2, ty: 0.4},
						transform: [-7.2, 0.4, 0.274, 0.274, 0, 0, 0],
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
						classname: "_skeleton_common_box_physics",
						instancename: "",
						matrix: {a: 0.163, b: 0, c: 0, d: 0.187, tx: -6.4, ty: 6.7},
						transform: [-6.4, 6.7, 0.163, 0.187, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_claw_anima": {
		type: "movieclip",
		fps: 30,
		totalFrames: 13,
		labels: {},
		layers: [
			{
				name: "claw_p2_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_skeleton_claw_p2_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.122, c: 0.212, d: 0.981, tx: 0.65, ty: 0.55},
						transform: [0.65, 0.55, 1, 1.004, 0.213, -0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.494, 0], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 11,
						classname: "_skeleton_claw_p2_x",
						instancename: "",
						matrix: {a: 0.908, b: 0.418, c: -0.418, d: 0.908, tx: 1.25, ty: 0.25},
						transform: [1.25, 0.25, 1, 1, -0.432, 0.432, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.494, 0], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_skeleton_claw_p2_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.122, c: 0.212, d: 0.981, tx: 0.65, ty: 0.55},
						transform: [0.65, 0.55, 1, 1.004, 0.213, -0.122, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.494, 0], [0.573, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "claw_p1_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_skeleton_claw_p1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.159, d: 1, tx: 0.2, ty: 0.05},
						transform: [0.2, 0.05, 1, 1.013, -0.158, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.494, 0], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 11,
						classname: "_skeleton_claw_p1_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.07, c: 0.148, d: 0.992, tx: 0.35, ty: 0},
						transform: [0.35, 0, 1, 1.003, 0.148, -0.07, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.494, 0], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_skeleton_claw_p1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.159, d: 1, tx: 0.2, ty: 0.05},
						transform: [0.2, 0.05, 1, 1.013, -0.158, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.494, 0], [0.573, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_skeleton_arm_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 35,
		labels: {},
		layers: [
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 27.1, ty: -24.25},
						transform: [27.1, -24.25, 1, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 16,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 1.001, b: -0.328, c: 0.312, d: 0.952, tx: 23.3, ty: -28.6},
						transform: [23.3, -28.6, 1.053, 1.001, 0.317, -0.317, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 25,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 27.1, ty: -24.25},
						transform: [27.1, -24.25, 1, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 33,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 1.001, b: -0.328, c: 0.312, d: 0.952, tx: 23.3, ty: -28.6},
						transform: [23.3, -28.6, 1.053, 1.001, 0.317, -0.317, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 27.1, ty: -24.25},
						transform: [27.1, -24.25, 1, 1, 0.169, -0.169, NaN],
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
						to: 8,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.651, b: -0.759, c: 0.759, d: 0.651, tx: -1.4, ty: -1.75},
						transform: [-1.4, -1.75, 1, 1, 0.862, -0.862, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 16,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.532, b: -0.847, c: 0.847, d: 0.532, tx: -1.4, ty: -1.7},
						transform: [-1.4, -1.7, 1, 1, 1.01, -1.01, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 25,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.651, b: -0.759, c: 0.759, d: 0.651, tx: -1.4, ty: -1.75},
						transform: [-1.4, -1.75, 1, 1, 0.862, -0.862, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 33,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.532, b: -0.847, c: 0.847, d: 0.532, tx: -1.4, ty: -1.7},
						transform: [-1.4, -1.7, 1, 1, 1.01, -1.01, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.651, b: -0.759, c: 0.759, d: 0.651, tx: -1.4, ty: -1.75},
						transform: [-1.4, -1.75, 1, 1, 0.862, -0.862, NaN],
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
						to: 8,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 11.7, ty: -21},
						transform: [11.7, -21, 1, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 16,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.916, b: -0.4, c: 0.4, d: 0.916, tx: 8.6, ty: -22.65},
						transform: [8.6, -22.65, 1, 1, 0.412, -0.412, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 25,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 11.7, ty: -21},
						transform: [11.7, -21, 1, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 33,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.916, b: -0.4, c: 0.4, d: 0.916, tx: 8.6, ty: -22.65},
						transform: [8.6, -22.65, 1, 1, 0.412, -0.412, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 11.7, ty: -21},
						transform: [11.7, -21, 1, 1, 0.169, -0.169, NaN],
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
						to: 15,
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: 0.994, b: 0.111, c: -0.111, d: 0.994, tx: 11.35, ty: 3.05},
						transform: [11.35, 3.05, 1, 1, -0.112, 0.112, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.465, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 33,
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: 0.97, b: 0.244, c: -0.244, d: 0.97, tx: 11.65, ty: 1.75},
						transform: [11.65, 1.75, 1, 1, -0.247, 0.247, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.465, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: 0.994, b: 0.111, c: -0.111, d: 0.994, tx: 11.35, ty: 3.05},
						transform: [11.35, 3.05, 1, 1, -0.112, 0.112, NaN],
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
						to: 15,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.054, c: -0.054, d: 0.998, tx: 0, ty: 0.1},
						transform: [0, 0.1, 1, 1, -0.055, 0.055, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.465, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 33,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.119, c: 0.119, d: 0.993, tx: 0, ty: 0.1},
						transform: [0, 0.1, 1, 1, 0.119, -0.119, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.465, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.054, c: -0.054, d: 0.998, tx: 0, ty: 0.1},
						transform: [0, 0.1, 1, 1, -0.055, 0.055, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_arm_flap": {
		type: "movieclip",
		fps: 30,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "wing_part_3_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 0.917, b: -0.157, c: 0.168, d: 0.986, tx: 23.75, ty: -23.4},
						transform: [23.75, -23.4, 0.931, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.438], [0.598, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 0.799, b: -0.705, c: 0.578, d: 0.741, tx: 19.5, ty: -36.9},
						transform: [19.5, -36.9, 1.066, 0.94, 0.662, -0.723, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.512, 0], [0.778, 0.534], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 0.949, b: -0.794, c: 0.984, d: 0.503, tx: 29, ty: -18.55},
						transform: [29, -18.55, 1.238, 1.105, 1.099, -0.697, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.08, c: -0.08, d: 0.997, tx: 30.7, ty: -9.45},
						transform: [30.7, -9.45, 1, 1, -0.08, 0.08, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.232, 0.486], [0.587, 0.976], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 0.585, b: 0.133, c: -0.222, d: 0.975, tx: 18.1, ty: -2.95},
						transform: [18.1, -2.95, 0.6, 1, -0.224, 0.224, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.807, 0.524], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 0.917, b: -0.157, c: 0.168, d: 0.986, tx: 23.75, ty: -23.4},
						transform: [23.75, -23.4, 0.931, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.222, 0.438], [0.598, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "wing_part_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.583, b: -0.681, c: 0.759, d: 0.651, tx: -1.45, ty: -1.6},
						transform: [-1.45, -1.6, 0.897, 1, 0.862, -0.862, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.438], [0.598, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.487, b: -0.873, c: 0.873, d: 0.487, tx: -1.35, ty: -1.7},
						transform: [-1.35, -1.7, 1, 1, 1.062, -1.062, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.512, 0], [0.778, 0.534], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.89, b: -0.457, c: 0.457, d: 0.89, tx: -1.15, ty: -2.05},
						transform: [-1.15, -2.05, 1, 1, 0.474, -0.474, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.632, b: -0.145, c: 0.224, d: 0.975, tx: -0.45, ty: -2.05},
						transform: [-0.45, -2.05, 0.648, 1, 0.225, -0.225, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.232, 0.486], [0.587, 0.976], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.414, b: -0.02, c: -0.101, d: 0.995, tx: -0.6, ty: -1.3},
						transform: [-0.6, -1.3, 0.414, 1, -0.101, -0.048, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.807, 0.524], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.583, b: -0.681, c: 0.759, d: 0.651, tx: -1.45, ty: -1.6},
						transform: [-1.45, -1.6, 0.897, 1, 0.862, -0.862, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.222, 0.438], [0.598, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "wing_part_2_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.916, b: -0.305, c: 0.316, d: 0.949, tx: 9.3, ty: -19.8},
						transform: [9.3, -19.8, 0.965, 1, 0.322, -0.322, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.438], [0.598, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.627, b: -0.779, c: 0.779, d: 0.627, tx: 7.6, ty: -23.2},
						transform: [7.6, -23.2, 1, 1, 0.893, -0.893, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.512, 0], [0.778, 0.534], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.979, b: -0.203, c: 0.203, d: 0.979, tx: 18.25, ty: -15.75},
						transform: [18.25, -15.75, 1, 1, 0.204, -0.204, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.056, c: 0.056, d: 0.998, tx: 13.65, ty: -9.85},
						transform: [13.65, -9.85, 1, 1, 0.056, -0.056, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.232, 0.486], [0.587, 0.976], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.619, b: 0.172, c: -0.267, d: 0.964, tx: 9.55, ty: -5.15},
						transform: [9.55, -5.15, 0.642, 1, -0.271, 0.271, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.807, 0.524], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.916, b: -0.305, c: 0.316, d: 0.949, tx: 9.3, ty: -19.8},
						transform: [9.3, -19.8, 0.965, 1, 0.322, -0.322, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.222, 0.438], [0.598, 1], [1, 1], ],
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
						classname: "_skeleton_arm1_x",
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
						from: 3,
						to: 5,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.054, c: 0.054, d: 0.999, tx: 0, ty: 0.1},
						transform: [0, 0.1, 1, 1, 0.054, -0.054, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.465, 0], [0.8, 0.445], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_arm1_x",
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
						from: 7,
						to: 9,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.854, b: 0.52, c: -0.52, d: 0.854, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, -0.547, 0.547, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.209, 0.425], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.813, b: 0.581, c: -0.581, d: 0.813, tx: 0.05, ty: 0},
						transform: [0.05, 0, 1, 1, -0.621, 0.621, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.465, 0], [0.8, 0.534], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.054, c: -0.054, d: 0.998, tx: 0, ty: 0.1},
						transform: [0, 0.1, 1, 1, -0.055, 0.055, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.244, 0.377], [0.541, 1], [1, 1], ],
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
						classname: "_skeleton_arm3_x",
						instancename: "",
						matrix: {a: -0.972, b: -0.235, c: 0.235, d: -0.972, tx: 11.75, ty: 0.45},
						transform: [11.75, 0.45, 1, 1, 2.904, -2.904, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.244, 0.377], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_skeleton_arm3_x",
						instancename: "",
						matrix: {a: -0.997, b: 0.072, c: -0.072, d: -0.997, tx: 12.3, ty: -1.15},
						transform: [12.3, -1.15, 1, 1, -3.07, 3.07, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.465, 0], [0.8, 0.445], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_skeleton_arm3_x",
						instancename: "",
						matrix: {a: -0.004, b: -1, c: 1, d: -0.004, tx: 12.35, ty: 2.45},
						transform: [12.35, 2.45, 1, 1, 1.574, -1.574, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.465, 0], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_skeleton_arm4_x",
						instancename: "",
						matrix: {a: 0.962, b: -0.273, c: 0.273, d: 0.962, tx: 10.55, ty: 6.45},
						transform: [10.55, 6.45, 1, 1, 0.277, -0.277, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.209, 0.425], [0.541, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_skeleton_arm4_x",
						instancename: "",
						matrix: {a: 0.733, b: 0.68, c: -0.642, d: 0.692, tx: 10, ty: 8},
						transform: [10, 8, 1, 0.944, -0.748, 0.748, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.465, 0], [0.8, 0.534], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_arm3_x",
						instancename: "",
						matrix: {a: -0.972, b: -0.235, c: 0.235, d: -0.972, tx: 11.75, ty: 0.45},
						transform: [11.75, 0.45, 1, 1, 2.904, -2.904, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.244, 0.377], [0.541, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_skeleton_arm_flapout": {
		type: "movieclip",
		fps: 30,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "wing_part_3_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 27.1, ty: -24.25},
						transform: [27.1, -24.25, 1, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.529, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 13,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 0.941, b: -0.224, c: 0.159, d: 0.99, tx: 24.65, ty: -26.4},
						transform: [24.65, -26.4, 0.967, 1.003, 0.159, -0.234, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.529, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_wing_part_3_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 27.1, ty: -24.25},
						transform: [27.1, -24.25, 1, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "wing_part_1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.651, b: -0.759, c: 0.759, d: 0.651, tx: -1.4, ty: -1.75},
						transform: [-1.4, -1.75, 1, 1, 0.862, -0.862, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.529, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 13,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.6, b: -0.8, c: 0.8, d: 0.6, tx: -1.45, ty: -1.7},
						transform: [-1.45, -1.7, 1, 1, 0.927, -0.927, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.529, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_wing_part_1_x",
						instancename: "",
						matrix: {a: 0.651, b: -0.759, c: 0.759, d: 0.651, tx: -1.4, ty: -1.75},
						transform: [-1.4, -1.75, 1, 1, 0.862, -0.862, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "wing_part_2_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 11.7, ty: -21},
						transform: [11.7, -21, 1, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.529, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 13,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.939, b: -0.344, c: 0.344, d: 0.939, tx: 10.35, ty: -21.75},
						transform: [10.35, -21.75, 1, 1, 0.351, -0.351, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.529, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_wing_part_2_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 11.7, ty: -21},
						transform: [11.7, -21, 1, 1, 0.169, -0.169, NaN],
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
						to: 6,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.054, c: -0.054, d: 0.998, tx: 0, ty: 0.1},
						transform: [0, 0.1, 1, 1, -0.055, 0.055, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.987, b: 0.158, c: -0.158, d: 0.987, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, -0.158, 0.158, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_arm1_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.054, c: -0.054, d: 0.998, tx: 0, ty: 0.1},
						transform: [0, 0.1, 1, 1, -0.055, 0.055, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm3_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_skeleton_arm3_x",
						instancename: "",
						matrix: {a: -0.972, b: -0.235, c: 0.235, d: -0.972, tx: 11.75, ty: 0.45},
						transform: [11.75, 0.45, 1, 1, 2.904, -2.904, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_skeleton_arm3_x",
						instancename: "",
						matrix: {a: 0.996, b: -0.083, c: 0.083, d: 0.996, tx: 11.25, ty: 2.8},
						transform: [11.25, 2.8, 0.999, 0.999, 0.083, -0.083, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: 0.939, b: 0.343, c: -0.343, d: 0.939, tx: 10.95, ty: 4.15},
						transform: [10.95, 4.15, 1, 1, -0.35, 0.35, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_skeleton_arm2_x",
						instancename: "",
						matrix: {a: 0.994, b: 0.111, c: -0.111, d: 0.994, tx: 11.35, ty: 3.05},
						transform: [11.35, 3.05, 1, 1, -0.112, 0.112, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_mouth_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 35,
		labels: {},
		layers: [
			{
				name: "mandibula_x",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_skeleton_mandibula_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 9.85, ty: 9.85},
						transform: [9.85, 9.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 33,
						classname: "_skeleton_mandibula_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 9.4, ty: 11.95},
						transform: [9.4, 11.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_skeleton_mandibula_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 9.85, ty: 9.85},
						transform: [9.85, 9.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mouth_part1_x",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_skeleton_mouth_part1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -2.65},
						transform: [0, -2.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 33,
						classname: "_skeleton_mouth_part1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -2.65},
						transform: [0, -2.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_skeleton_mouth_part1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -2.65},
						transform: [0, -2.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_mouth_flap": {
		type: "movieclip",
		fps: 30,
		totalFrames: 8,
		labels: {},
		layers: [
			{
				name: "mandibula_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_skeleton_mandibula_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 9.85, ty: 9.85},
						transform: [9.85, 9.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_skeleton_mandibula_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 9.05, ty: 14.8},
						transform: [9.05, 14.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_skeleton_mandibula_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 9.2, ty: 14.65},
						transform: [9.2, 14.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_skeleton_mandibula_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 9.85, ty: 9.85},
						transform: [9.85, 9.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.472, 0], [0.577, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "mouth_part1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_skeleton_mouth_part1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -2.65},
						transform: [0, -2.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_skeleton_mouth_part1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -2.65},
						transform: [0, -2.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_skeleton_mouth_part1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -2.65},
						transform: [0, -2.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_skeleton_mouth_part1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -2.65},
						transform: [0, -2.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.472, 0], [0.577, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_skeleton_mouth_flapout": {
		type: "movieclip",
		fps: 30,
		totalFrames: 29,
		labels: {},
		layers: [
			{
				name: "mandibula_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_skeleton_mandibula_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 9.7, ty: 10.95},
						transform: [9.7, 10.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.338, 0.366], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 28,
						classname: "_skeleton_mandibula_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 9.85, ty: 9.85},
						transform: [9.85, 9.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mouth_part1_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_skeleton_mouth_part1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -2.65},
						transform: [0, -2.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.338, 0.366], [0.549, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 28,
						classname: "_skeleton_mouth_part1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -2.65},
						transform: [0, -2.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_eye1": {
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
						classname: "_skeleton_eye1_x",
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
						classname: "_skeleton_eye1_x",
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
						classname: "_skeleton_eye1_x",
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
						classname: "_skeleton_eye1_x",
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
						classname: "_skeleton_particuler",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0.6},
						transform: [0, 0.6, 1, 1, 0, 0, 0],
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
						classname: "_skeleton_particuler",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0.6},
						transform: [0, 0.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_eye_flap": {
		type: "movieclip",
		fps: 30,
		totalFrames: 11,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_skeleton_eye1_x",
						instancename: "",
						matrix: {a: 0.946, b: -0.325, c: 0.237, d: 0.689, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 0.729, 0.331, -0.331, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.514, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_skeleton_eye1_x",
						instancename: "",
						matrix: {a: 0.946, b: -0.325, c: 0.197, d: 0.575, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 0.608, 0.331, -0.331, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.514, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_skeleton_eye1_x",
						instancename: "",
						matrix: {a: 0.946, b: -0.325, c: 0.237, d: 0.689, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 0.729, 0.331, -0.331, NaN],
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
						classname: "_skeleton_satanicbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: -0.1, ty: 0.75},
						transform: [-0.1, 0.75, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_skeleton_eye_flapout": {
		type: "movieclip",
		fps: 30,
		totalFrames: 28,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_skeleton_eye1_x",
						instancename: "",
						matrix: {a: 0.946, b: -0.325, c: 0.237, d: 0.689, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 0.729, 0.331, -0.331, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.514, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_skeleton_eye1_x",
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
						classname: "_skeleton_eye1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 12,
						classname: "_skeleton_eye1_x",
						instancename: "",
						matrix: {a: 0.935, b: 0.354, c: -0.118, d: 0.312, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 0.333, -0.361, 0.362, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 13,
						to: 27,
						classname: "_skeleton_eye1_x",
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
	"_skeleton_arm5_x": {
		type: "bitmap",
		asset: "_skeleton_arm5_x",
		scale: 2,
		position: [-7.05, -8.15],
	},
	"_skeleton_arm3_x": {
		type: "bitmap",
		asset: "_skeleton_arm3_x",
		scale: 2,
		position: [-7.95, -6],
	},
	"_skeleton_arm4_x": {
		type: "bitmap",
		asset: "_skeleton_arm4_x",
		scale: 2,
		position: [-9.9, -6],
	},
	"_skeleton_leg8_x": {
		type: "bitmap",
		asset: "_skeleton_leg8_x",
		scale: 2,
		position: [-5.4, -6.9],
	},
	"_skeleton_eye_die_x": {
		type: "bitmap",
		asset: "_skeleton_eye_die_x",
		scale: 2,
		position: [-10.1, -12.7],
	},
	"_skeleton_common_startballoonfx": {
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
						classname: "_skeleton_common_fx_floor",
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
						classname: "_skeleton_common_fx_rays",
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
	"_skeleton_common_startballoonfx_end": {
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
						classname: "_skeleton_common_rays",
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
						classname: "_skeleton_common_rays",
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
	"_skeleton_common_thunder_part_1_x": {
		type: "bitmap",
		asset: "_skeleton_common_thunder_part_1_x",
		scale: 2,
		position: [-61.1, -287.35],
	},
	"_skeleton_common_thunder_part_2_x": {
		type: "bitmap",
		asset: "_skeleton_common_thunder_part_2_x",
		scale: 2,
		position: [-61.1, -287.35],
	},
	"_skeleton_common_thunder_part_3_x": {
		type: "bitmap",
		asset: "_skeleton_common_thunder_part_3_x",
		scale: 2,
		position: [-61.1, -287.35],
	},
	"_skeleton_common_thunder_part_5_x": {
		type: "bitmap",
		asset: "_skeleton_common_thunder_part_5_x",
		scale: 2,
		position: [-61.1, -287.4],
	},
	"_skeleton_body_4_x": {
		type: "bitmap",
		asset: "_skeleton_body_4_x",
		scale: 2,
		position: [-21.4, -14.6],
	},
	"_skeleton_bone1_x": {
		type: "bitmap",
		asset: "_skeleton_bone1_x",
		scale: 2,
		position: [-16.15, -8.55],
	},
	"_skeleton_bone2_x": {
		type: "bitmap",
		asset: "_skeleton_bone2_x",
		scale: 2,
		position: [-17.6, -9],
	},
	"_skeleton_bone4_x": {
		type: "bitmap",
		asset: "_skeleton_bone4_x",
		scale: 2,
		position: [-13.85, -6.75],
	},
	"_skeleton_bone_5_x": {
		type: "bitmap",
		asset: "_skeleton_bone_5_x",
		scale: 2,
		position: [-8.25, -6.25],
	},
	"_skeleton_head_crash_x": {
		type: "bitmap",
		asset: "_skeleton_head_crash_x",
		scale: 2,
		position: [-30.9, -33.4],
	},
	"_skeleton_claw_p2_x": {
		type: "bitmap",
		asset: "_skeleton_claw_p2_x",
		scale: 2,
		position: [-5.4, -5.95],
	},
	"_skeleton_claw_p1_x": {
		type: "bitmap",
		asset: "_skeleton_claw_p1_x",
		scale: 2,
		position: [-13.3, -5.85],
	},
	"_skeleton_mandibula_x": {
		type: "bitmap",
		asset: "_skeleton_mandibula_x",
		scale: 2,
		position: [-25.45, -12.25],
	},
	"_skeleton_mouth_part1_x": {
		type: "bitmap",
		asset: "_skeleton_mouth_part1_x",
		scale: 2,
		position: [-19.15, -2.7],
	},
	"_skeleton_eye1_x": {
		type: "bitmap",
		asset: "_skeleton_eye1_x",
		scale: 2,
		position: [-9.95, -9.55],
	},
	"_skeleton_particuler": {
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
						classname: "_skeleton_satanicbox",
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
						classname: "_skeleton_satanicbox",
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
	"_skeleton_satanicbox": {
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
	"_skeleton_common_fx_floor": {
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
						classname: "_skeleton_common_startfx_floor_x",
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
						classname: "_skeleton_common_startfx_floor_x",
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
						classname: "_skeleton_common_startfx_floor_x",
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
	"_skeleton_common_fx_rays": {
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
						classname: "_skeleton_common_fx_rays_x",
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
						classname: "_skeleton_common_fx_rays_x",
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
						classname: "_skeleton_common_fx_rays_x",
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
	"_skeleton_common_rays": {
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
						classname: "_skeleton_common_ray",
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
						classname: "_skeleton_common_ray",
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
						classname: "_skeleton_common_ray",
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
	"_skeleton_common_startfx_floor_x": {
		type: "bitmap",
		asset: "_skeleton_common_startfx_floor_x",
		scale: 2,
		position: [-37.65, -10.95],
	},
	"_skeleton_common_fx_rays_x": {
		type: "bitmap",
		asset: "_skeleton_common_fx_rays_x",
		scale: 2,
		position: [-45.2, -71.3],
	},
	"_skeleton_common_ray": {
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
						classname: "_skeleton_common_ray_x",
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
						classname: "_skeleton_common_ray_x",
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
						classname: "_skeleton_common_ray_x",
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
						classname: "_skeleton_common_ray_x",
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
	"_skeleton_common_ray_x": {
		type: "bitmap",
		asset: "_skeleton_common_ray_x",
		scale: 2,
		position: [-11.65, -85.95],
	},
};
