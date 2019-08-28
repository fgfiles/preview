
var devil_wings = {
	"devilwings": {
		type: "movieclip",
		fps: 30,
		totalFrames: 146,
		labels: {air_idle: {from:0, to:3}, air_turn: {from:5, to:8}, ground_idle: {from:10, to:19}, ground_run: {from:21, to:30}, ground_stop: {from:32, to:43}, ground_stopturn: {from:45, to:58}, ground_turn: {from:60, to:68}, ground_turn_fast: {from:70, to:83}, die: {from:85, to:91}, waiting: {from:93, to:102}, spawn: {from:104, to:127}, crash: {from:129, to:144}, },
		layers: [
			{
				name: "physics",
				keys: [
					{
						from: 0,
						to: 145,
						classname: "_devil_common_body_physics",
						instancename: "physics",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.2, ty: -2.2},
						transform: [-1.2, -2.2, 1, 1, 0, 0, 0],
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
						classname: "_devil_devil_wings_air",
						instancename: "character",
						matrix: {a: 0.889, b: 0, c: 0, d: 0.889, tx: 0.3, ty: -1.2},
						transform: [0.3, -1.2, 0.889, 0.889, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 9,
						classname: "_devil_devil_wings_air_turn",
						instancename: "character",
						matrix: {a: 0.889, b: 0, c: 0, d: 0.889, tx: 0.3, ty: -1.2},
						transform: [0.3, -1.2, 0.889, 0.889, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 84,
						classname: "_devil_devil_wings_ground_idle",
						instancename: "character",
						matrix: {a: 0.889, b: 0, c: 0, d: 0.889, tx: 0.3, ty: -1.2},
						transform: [0.3, -1.2, 0.889, 0.889, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 85,
						to: 92,
						classname: "_devil_devil_wings_air",
						instancename: "character",
						matrix: {a: 0.889, b: 0, c: 0, d: 0.889, tx: 0.3, ty: -1.2},
						transform: [0.3, -1.2, 0.889, 0.889, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 93,
						to: 103,
						classname: "_devil_devil_wings_waiting",
						instancename: "character",
						matrix: {a: 0.889, b: 0, c: 0, d: 0.889, tx: 0.3, ty: -1.2},
						transform: [0.3, -1.2, 0.889, 0.889, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 104,
						to: 128,
						classname: "_devil_devil_wings_spawn",
						instancename: "character",
						matrix: {a: 0.889, b: 0, c: 0, d: 0.889, tx: 0.3, ty: -1.2},
						transform: [0.3, -1.2, 0.889, 0.889, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 129,
						to: 145,
						classname: "_devil_devil_wings_crash",
						instancename: "character",
						matrix: {a: 0.889, b: 0, c: 0, d: 0.889, tx: -4.7, ty: -13.3},
						transform: [-4.7, -13.3, 0.889, 0.889, 0, 0, 0],
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
						to: 127,
					},
					{
						from: 128,
						to: 128,
						actions: function(self){self.stop();},
					},
					{
						from: 129,
						to: 144,
					},
					{
						from: 145,
						to: 145,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_devil_devil_wings_crash": {
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
						classname: "_devil_crash_part_2",
						instancename: "crash_part_1",
						matrix: {a: 0.947, b: 0.262, c: -0.262, d: 0.947, tx: 11.35, ty: 0.1},
						transform: [11.35, 0.1, 0.982, 0.982, -0.27, 0.27, NaN],
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
						classname: "_devil_crash_part_1",
						instancename: "crash_part_1",
						matrix: {a: 0.809, b: -0.557, c: 0.557, d: 0.809, tx: 0.8, ty: -4},
						transform: [0.8, -4, 0.982, 0.982, 0.602, -0.602, NaN],
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
						classname: "_devil_crash_part_2",
						instancename: "crash_part_1",
						matrix: {a: 0.86, b: 0.06, c: -0.06, d: 0.86, tx: 11.95, ty: 10.2},
						transform: [11.95, 10.2, 0.862, 0.862, -0.07, 0.07, NaN],
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
						classname: "_devil_crash_part_1",
						instancename: "crash_part_1",
						matrix: {a: -0.609, b: 0.117, c: 0.126, d: 0.657, tx: -7, ty: 7.3},
						transform: [-7, 7.3, 0.62, 0.67, 0.19, 2.952, NaN],
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
						classname: "_devil_crash_part_1",
						instancename: "crash_part_1",
						matrix: {a: -0.789, b: 0.452, c: 0.488, d: 0.852, tx: 12.55, ty: 20.6},
						transform: [12.55, 20.6, 0.909, 0.982, 0.52, 2.621, NaN],
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
						classname: "_devil_crash_part_2",
						instancename: "crash_part_1",
						matrix: {a: -0.004, b: 0.909, c: 0.982, d: 0.005, tx: 7.85, ty: 0.2},
						transform: [7.85, 0.2, 0.909, 0.982, 1.566, 1.575, NaN],
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
						classname: "_devil_crash_part_1",
						instancename: "crash_part_1",
						matrix: {a: 0.411, b: -0.615, c: -0.664, d: -0.444, tx: 1.95, ty: -2.6},
						transform: [1.95, -2.6, 0.74, 0.799, -2.16, -0.982, NaN],
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
						classname: "_devil_crash_part_2",
						instancename: "crash_part_1",
						matrix: {a: 0.789, b: 0.452, c: -0.488, d: 0.852, tx: -6.5, ty: 16.85},
						transform: [-6.5, 16.85, 0.909, 0.982, -0.52, 0.52, NaN],
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
						classname: "_devil_crash_part_2",
						instancename: "crash_part_1",
						matrix: {a: 0.758, b: -0.034, c: -0.036, d: -0.819, tx: 4.15, ty: 13.6},
						transform: [4.15, 13.6, 0.759, 0.82, -3.097, -0.044, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_devil_common_body_physics": {
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
						classname: "_devil_box_physics",
						instancename: "",
						matrix: {a: 0.221, b: 0, c: 0, d: 0.165, tx: -0.1, ty: 13.15},
						transform: [-0.1, 13.15, 0.221, 0.165, 0, 0, 0],
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
						classname: "_devil_common_circle_physics",
						instancename: "",
						matrix: {a: 0.455, b: 0, c: 0, d: 0.455, tx: 0.25, ty: -15.2},
						transform: [0.25, -15.2, 0.455, 0.455, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_devil_devil_wings_air": {
		type: "movieclip",
		fps: 30,
		totalFrames: 36,
		labels: {},
		layers: [
			{
				name: "arm_L",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_devil_arm_comp",
						instancename: "arm2",
						matrix: {a: -0.688, b: -0.072, c: -0.072, d: 0.688, tx: -12.4, ty: -7.1},
						transform: [-12.4, -7.1, 0.692, 0.692, -0.105, -3.037, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.49, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 34,
						classname: "_devil_arm_comp",
						instancename: "arm2",
						matrix: {a: -0.673, b: -0.158, c: -0.158, d: 0.673, tx: -11.8, ty: -7.85},
						transform: [-11.8, -7.85, 0.691, 0.691, -0.231, -2.91, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.49, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_devil_arm_comp",
						instancename: "arm2",
						matrix: {a: -0.688, b: -0.072, c: -0.072, d: 0.688, tx: -12.4, ty: -7.1},
						transform: [-12.4, -7.1, 0.692, 0.692, -0.105, -3.037, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_L",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.722, b: 0.127, c: -0.127, d: 0.722, tx: -6.15, ty: 2.6},
						transform: [-6.15, 2.6, 0.733, 0.733, -0.174, 0.174, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.49, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 34,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.692, b: -0.241, c: 0.241, d: 0.692, tx: -7.1, ty: 0.35},
						transform: [-7.1, 0.35, 0.733, 0.733, 0.335, -0.335, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.49, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.722, b: 0.127, c: -0.127, d: 0.722, tx: -6.15, ty: 2.6},
						transform: [-6.15, 2.6, 0.733, 0.733, -0.174, 0.174, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "foot_L",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_devil_claw_1",
						instancename: "",
						matrix: {a: 0.722, b: 0.127, c: -0.127, d: 0.722, tx: -12.55, ty: 11.9},
						transform: [-12.55, 11.9, 0.733, 0.733, -0.174, 0.174, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.49, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 34,
						classname: "_devil_claw_1",
						instancename: "",
						matrix: {a: 0.692, b: -0.241, c: 0.241, d: 0.692, tx: -8.15, ty: 11.65},
						transform: [-8.15, 11.65, 0.733, 0.733, 0.335, -0.335, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.49, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_devil_claw_1",
						instancename: "",
						matrix: {a: 0.722, b: 0.127, c: -0.127, d: 0.722, tx: -12.55, ty: 11.9},
						transform: [-12.55, 11.9, 0.733, 0.733, -0.174, 0.174, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_devil_body_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -0.15, ty: -2.9},
						transform: [-0.15, -2.9, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.49, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 34,
						classname: "_devil_body_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -1.45, ty: -4.35},
						transform: [-1.45, -4.35, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.49, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_devil_body_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -0.15, ty: -2.9},
						transform: [-0.15, -2.9, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_R",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_devil_arm_comp",
						instancename: "arm1",
						matrix: {a: 0.796, b: -0.084, c: 0.084, d: 0.796, tx: 10.45, ty: -6.2},
						transform: [10.45, -6.2, 0.8, 0.8, 0.105, -0.105, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.49, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 34,
						classname: "_devil_arm_comp",
						instancename: "arm1",
						matrix: {a: 0.781, b: -0.173, c: 0.173, d: 0.781, tx: 8.85, ty: -7.3},
						transform: [8.85, -7.3, 0.8, 0.8, 0.219, -0.219, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.49, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_devil_arm_comp",
						instancename: "arm1",
						matrix: {a: 0.796, b: -0.084, c: 0.084, d: 0.796, tx: 10.45, ty: -6.2},
						transform: [10.45, -6.2, 0.8, 0.8, 0.105, -0.105, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_R",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: 4.4, ty: 3.85},
						transform: [4.4, 3.85, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.49, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 34,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.715, b: -0.359, c: 0.359, d: 0.715, tx: 2.7, ty: 2.4},
						transform: [2.7, 2.4, 0.8, 0.8, 0.466, -0.466, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.49, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: 4.4, ty: 3.85},
						transform: [4.4, 3.85, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "foot_R",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_devil_claw_1",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -0.75, ty: 14.65},
						transform: [-0.75, 14.65, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.49, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 34,
						classname: "_devil_claw_1",
						instancename: "",
						matrix: {a: 0.797, b: -0.069, c: 0.069, d: 0.797, tx: 3.4, ty: 14.9},
						transform: [3.4, 14.9, 0.8, 0.8, 0.086, -0.086, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.49, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_devil_claw_1",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -0.75, ty: 14.65},
						transform: [-0.75, 14.65, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_devil_head_air",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: 5.1, ty: -19.65},
						transform: [5.1, -19.65, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.49, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 34,
						classname: "_devil_head_air",
						instancename: "",
						matrix: {a: 0.8, b: 0.018, c: -0.018, d: 0.8, tx: 5.9, ty: -21.7},
						transform: [5.9, -21.7, 0.8, 0.8, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.49, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_devil_head_air",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: 5.1, ty: -19.65},
						transform: [5.1, -19.65, 0.8, 0.8, 0, 0, 0],
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
						to: 16,
						classname: "_devil_mouth_compo",
						instancename: "mouth",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -9.35, ty: -12.05},
						transform: [-9.35, -12.05, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.557, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 34,
						classname: "_devil_mouth_compo",
						instancename: "mouth",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -8.35, ty: -14.3},
						transform: [-8.35, -14.3, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.557, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_devil_mouth_compo",
						instancename: "mouth",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -9.35, ty: -12.05},
						transform: [-9.35, -12.05, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye_cartoon",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_devil_eye_compo_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.25, ty: -22.25},
						transform: [-0.25, -22.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.557, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 34,
						classname: "_devil_eye_compo_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.75, ty: -24.5},
						transform: [0.75, -24.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.557, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_devil_eye_compo_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.25, ty: -22.25},
						transform: [-0.25, -22.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye_cartoonflip",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_devil_eye_compo_2",
						instancename: "eye2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -16.9, ty: -22.2},
						transform: [-16.9, -22.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.557, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 34,
						classname: "_devil_eye_compo_2",
						instancename: "eye2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -15.9, ty: -24.45},
						transform: [-15.9, -24.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.557, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_devil_eye_compo_2",
						instancename: "eye2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -16.9, ty: -22.2},
						transform: [-16.9, -22.2, 1, 1, 0, 0, 0],
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
						to: 35,
						classname: "_devil_common_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.396, b: 0, c: 0, d: 0.126, tx: -3.45, ty: 22.6},
						transform: [-3.45, 22.6, 0.396, 0.126, 0, 0, 0],
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
						to: 35,
						classname: "_devil_common_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.508, b: 0, c: 0, d: 0.204, tx: 0.05, ty: -34.6},
						transform: [0.05, -34.6, 0.508, 0.204, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_devil_devil_wings_air_turn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 14,
		labels: {},
		layers: [
			{
				name: "arm_L",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_devil_arm_comp",
						instancename: "arm2",
						matrix: {a: -0.688, b: -0.072, c: -0.072, d: 0.688, tx: -12.4, ty: -7.1},
						transform: [-12.4, -7.1, 0.692, 0.692, -0.105, -3.037, NaN],
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
						classname: "_devil_arm_comp",
						instancename: "arm2",
						matrix: {a: -0.673, b: -0.158, c: -0.158, d: 0.673, tx: -11.8, ty: -7.85},
						transform: [-11.8, -7.85, 0.691, 0.691, -0.231, -2.91, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_devil_arm_comp",
						instancename: "arm1",
						matrix: {a: 0.781, b: -0.173, c: 0.173, d: 0.781, tx: 8.85, ty: -7.3},
						transform: [8.85, -7.3, 0.8, 0.8, 0.219, -0.219, NaN],
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
						classname: "_devil_arm_comp",
						instancename: "arm2",
						matrix: {a: 0.688, b: -0.072, c: 0.072, d: 0.688, tx: 11.2, ty: -7.1},
						transform: [11.2, -7.1, 0.692, 0.692, 0.105, -0.105, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_L",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.722, b: 0.127, c: -0.127, d: 0.722, tx: -6.15, ty: 2.6},
						transform: [-6.15, 2.6, 0.733, 0.733, -0.174, 0.174, NaN],
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
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.692, b: -0.241, c: 0.241, d: 0.692, tx: -7.1, ty: 0.35},
						transform: [-7.1, 0.35, 0.733, 0.733, 0.335, -0.335, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: -0.654, b: -0.333, c: -0.333, d: 0.654, tx: 4.2, ty: 2.75},
						transform: [4.2, 2.75, 0.733, 0.733, -0.471, -2.671, NaN],
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
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: -0.722, b: 0.127, c: 0.127, d: 0.722, tx: 4.95, ty: 2.6},
						transform: [4.95, 2.6, 0.733, 0.733, 0.174, 2.967, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "foot_L",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_devil_claw_1",
						instancename: "",
						matrix: {a: 0.722, b: 0.127, c: -0.127, d: 0.722, tx: -12.55, ty: 11.9},
						transform: [-12.55, 11.9, 0.733, 0.733, -0.174, 0.174, NaN],
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
						classname: "_devil_claw_1",
						instancename: "",
						matrix: {a: 0.644, b: -0.35, c: 0.35, d: 0.644, tx: -7.75, ty: 11.7},
						transform: [-7.75, 11.7, 0.733, 0.733, 0.497, -0.497, NaN],
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
						classname: "_devil_claw_1",
						instancename: "",
						matrix: {a: -0.703, b: -0.208, c: -0.208, d: 0.703, tx: 3.75, ty: 13.2},
						transform: [3.75, 13.2, 0.733, 0.733, -0.288, -2.854, NaN],
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
						classname: "_devil_claw_1",
						instancename: "",
						matrix: {a: -0.722, b: 0.127, c: 0.127, d: 0.722, tx: 11.35, ty: 11.9},
						transform: [11.35, 11.9, 0.733, 0.733, 0.174, 2.967, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_devil_body_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -0.15, ty: -2.9},
						transform: [-0.15, -2.9, 0.8, 0.8, 0, 0, 0],
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
						classname: "_devil_body_1_x",
						instancename: "",
						matrix: {a: 0.787, b: -0.145, c: 0.272, d: 0.763, tx: 0.3, ty: -3.1},
						transform: [0.3, -3.1, 0.8, 0.81, 0.343, -0.183, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_devil_body_1_x",
						instancename: "",
						matrix: {a: -0.787, b: -0.145, c: -0.272, d: 0.763, tx: -2.7, ty: -3.3},
						transform: [-2.7, -3.3, 0.8, 0.81, -0.343, -2.959, NaN],
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
						classname: "_devil_body_1_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: -1.05, ty: -2.9},
						transform: [-1.05, -2.9, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_R",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_devil_arm_comp",
						instancename: "arm1",
						matrix: {a: 0.796, b: -0.084, c: 0.084, d: 0.796, tx: 10.45, ty: -6.2},
						transform: [10.45, -6.2, 0.8, 0.8, 0.105, -0.105, NaN],
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
						classname: "_devil_arm_comp",
						instancename: "arm1",
						matrix: {a: 0.781, b: -0.173, c: 0.173, d: 0.781, tx: 8.85, ty: -7.3},
						transform: [8.85, -7.3, 0.8, 0.8, 0.219, -0.219, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_devil_arm_comp",
						instancename: "arm2",
						matrix: {a: -0.673, b: -0.158, c: -0.158, d: 0.673, tx: -11.8, ty: -7.85},
						transform: [-11.8, -7.85, 0.691, 0.691, -0.231, -2.91, NaN],
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
						classname: "_devil_arm_comp",
						instancename: "arm1",
						matrix: {a: -0.796, b: -0.084, c: -0.084, d: 0.796, tx: -11.65, ty: -6.2},
						transform: [-11.65, -6.2, 0.8, 0.8, -0.105, -3.037, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_R",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: 4.4, ty: 3.85},
						transform: [4.4, 3.85, 0.8, 0.8, 0, 0, 0],
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
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.515, b: -0.612, c: 0.612, d: 0.515, tx: 6.05, ty: 2.45},
						transform: [6.05, 2.45, 0.8, 0.8, 0.871, -0.871, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: -0.691, b: -0.403, c: -0.403, d: 0.691, tx: -7.85, ty: 2.6},
						transform: [-7.85, 2.6, 0.8, 0.8, -0.527, -2.614, NaN],
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
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: -5.6, ty: 3.85},
						transform: [-5.6, 3.85, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "foot_R",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_devil_claw_1",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -0.75, ty: 14.65},
						transform: [-0.75, 14.65, 0.8, 0.8, 0, 0, 0],
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
						classname: "_devil_claw_1",
						instancename: "",
						matrix: {a: 0.478, b: -0.448, c: 0.448, d: 0.478, tx: 9.3, ty: 14.15},
						transform: [9.3, 14.15, 0.654, 0.654, 0.753, -0.753, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_devil_claw_1",
						instancename: "",
						matrix: {a: -0.697, b: -0.393, c: -0.393, d: 0.697, tx: -8.45, ty: 14},
						transform: [-8.45, 14, 0.8, 0.8, -0.514, -2.628, NaN],
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
						classname: "_devil_claw_1",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: -0.45, ty: 14.65},
						transform: [-0.45, 14.65, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear_1_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.693, b: 0, c: 0, d: 0.8, tx: -9.05, ty: -37.3},
						transform: [-9.05, -37.3, 0.693, 0.8, 0, 0, 0],
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
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.492, b: -0.488, c: 0.563, d: 0.568, tx: -15.6, ty: -32.15},
						transform: [-15.6, -32.15, 0.693, 0.8, 0.781, -0.781, NaN],
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
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: -0.492, b: -0.488, c: -0.563, d: 0.568, tx: 12.55, ty: -30.9},
						transform: [12.55, -30.9, 0.693, 0.8, -0.781, -2.361, NaN],
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
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: -0.693, b: 0, c: 0, d: 0.8, tx: 7.85, ty: -37.3},
						transform: [7.85, -37.3, 0.693, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_1_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_devil_head_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -1.6, ty: -21.8},
						transform: [-1.6, -21.8, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.667, 0.333], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_devil_head_1_x",
						instancename: "",
						matrix: {a: 0.713, b: -0.363, c: 0.397, d: 0.634, tx: -1.7, ty: -22.05},
						transform: [-1.7, -22.05, 0.8, 0.748, 0.559, -0.471, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_devil_head_1_x",
						instancename: "",
						matrix: {a: -0.713, b: -0.363, c: -0.397, d: 0.634, tx: -1.5, ty: -21.9},
						transform: [-1.5, -21.9, 0.8, 0.748, -0.559, -2.671, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.667], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_devil_head_1_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: 0.4, ty: -21.8},
						transform: [0.4, -21.8, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear_1_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: 11.85, ty: -35.65},
						transform: [11.85, -35.65, 0.8, 0.8, 0, 0, 0],
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
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.45, b: -0.326, c: 0.469, d: 0.648, tx: 4.35, ty: -35.9},
						transform: [4.35, -35.9, 0.555, 0.8, 0.627, -0.627, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: -0.45, b: -0.326, c: -0.469, d: 0.648, tx: -7.65, ty: -36.55},
						transform: [-7.65, -36.55, 0.555, 0.8, -0.627, -2.515, NaN],
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
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: -13.05, ty: -35.65},
						transform: [-13.05, -35.65, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "chin_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_devil_chin_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -11.55, ty: -4.4},
						transform: [-11.55, -4.4, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.667, 0.333], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_devil_chin_x",
						instancename: "",
						matrix: {a: 0.78, b: -0.179, c: 0.179, d: 0.78, tx: -3.1, ty: -4.9},
						transform: [-3.1, -4.9, 0.8, 0.8, 0.226, -0.226, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_devil_chin_x",
						instancename: "",
						matrix: {a: -0.781, b: -0.172, c: -0.172, d: 0.781, tx: -0.8, ty: -4.25},
						transform: [-0.8, -4.25, 0.8, 0.8, -0.217, -2.925, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.667], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_devil_chin_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: 10.35, ty: -4.4},
						transform: [10.35, -4.4, 0.8, 0.8, 0, 3.142, NaN],
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
						classname: "_devil_mouth_compo",
						instancename: "mouth",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -9.4, ty: -12.1},
						transform: [-9.4, -12.1, 0.8, 0.8, 0, 0, 0],
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
						classname: "_devil_mouth_compo",
						instancename: "mouth",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -3.35, ty: -11.7},
						transform: [-3.35, -11.7, 0.8, 0.8, 0, 0, 0],
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
						classname: "_devil_mouth_compo",
						instancename: "mouth",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: -0.7, ty: -10.7},
						transform: [-0.7, -10.7, 0.8, 0.8, 0, 3.142, NaN],
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
						classname: "_devil_mouth_compo",
						instancename: "mouth",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: 8.2, ty: -12.1},
						transform: [8.2, -12.1, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye_bg_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_devil_eye_bg_x",
						instancename: "",
						matrix: {a: 0.67, b: -0.482, c: 0.482, d: 0.67, tx: 0.8, ty: -22.95},
						transform: [0.8, -22.95, 0.825, 0.825, 0.624, -0.624, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.384, 0], [0.709, 0.391], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_devil_eye_bg_x",
						instancename: "",
						matrix: {a: 0.669, b: -0.48, c: 0.48, d: 0.669, tx: 2.4, ty: -22.95},
						transform: [2.4, -22.95, 0.824, 0.824, 0.622, -0.622, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.372, 0.255], [0.688, 0.628], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_devil_eye_bg_x",
						instancename: "",
						matrix: {a: 0.67, b: -0.482, c: 0.201, d: 0.279, tx: 7.25, ty: -22.95},
						transform: [7.25, -22.95, 0.825, 0.344, 0.624, -0.624, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 8,
						classname: "_devil_eye_bg_x",
						instancename: "",
						matrix: {a: -0.711, b: -0.419, c: -0.175, d: 0.296, tx: -10.35, ty: -21.75},
						transform: [-10.35, -21.75, 0.825, 0.344, -0.533, -2.609, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_devil_eye_bg_x",
						instancename: "",
						matrix: {a: -0.669, b: -0.48, c: -0.48, d: 0.669, tx: -5, ty: -22.95},
						transform: [-5, -22.95, 0.824, 0.824, -0.622, -2.52, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0.428], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_devil_eye_bg_x",
						instancename: "",
						matrix: {a: -0.67, b: -0.482, c: -0.482, d: 0.67, tx: -1.75, ty: -22.95},
						transform: [-1.75, -22.95, 0.825, 0.825, -0.624, -2.518, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "pupilasd_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.825, b: 0.018, c: -0.018, d: 0.825, tx: -1.7, ty: -21.5},
						transform: [-1.7, -21.5, 0.825, 0.825, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.384, 0], [0.709, 0.391], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.825, b: 0.015, c: -0.015, d: 0.825, tx: 0.3, ty: -21.8},
						transform: [0.3, -21.8, 0.825, 0.825, -0.019, 0.019, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.372, 0.255], [0.688, 0.628], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.44, b: 0.01, c: -0.008, d: 0.348, tx: 6.6, ty: -22.5},
						transform: [6.6, -22.5, 0.44, 0.348, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 8,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: -0.437, b: 0.049, c: 0.039, d: 0.346, tx: -9.65, ty: -21.4},
						transform: [-9.65, -21.4, 0.44, 0.348, 0.113, 3.029, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: -0.825, b: 0.015, c: 0.015, d: 0.825, tx: -2.9, ty: -21.8},
						transform: [-2.9, -21.8, 0.825, 0.825, 0.019, 3.123, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0.428], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: -0.825, b: 0.018, c: 0.018, d: 0.825, tx: 0.75, ty: -21.5},
						transform: [0.75, -21.5, 0.825, 0.825, 0.022, 3.12, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye_bg2_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_devil_eye_bg2_x",
						instancename: "",
						matrix: {a: -0.355, b: -0.446, c: -0.47, d: 0.647, tx: -16.8, ty: -22.65},
						transform: [-16.8, -22.65, 0.571, 0.8, -0.628, -2.243, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.384, 0], [0.709, 0.391], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_devil_eye_bg2_x",
						instancename: "",
						matrix: {a: -0.435, b: -0.437, c: -0.426, d: 0.668, tx: -15.95, ty: -22.55},
						transform: [-15.95, -22.55, 0.617, 0.792, -0.568, -2.354, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.372, 0.255], [0.688, 0.628], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_devil_eye_bg2_x",
						instancename: "",
						matrix: {a: -0.686, b: -0.335, c: -0.135, d: 0.334, tx: -13.3, ty: -22.2},
						transform: [-13.3, -22.2, 0.764, 0.361, -0.384, -2.687, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 8,
						classname: "_devil_eye_bg2_x",
						instancename: "",
						matrix: {a: 0.663, b: -0.379, c: 0.157, d: 0.325, tx: 10.35, ty: -21.7},
						transform: [10.35, -21.7, 0.764, 0.361, 0.449, -0.519, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_devil_eye_bg2_x",
						instancename: "",
						matrix: {a: 0.435, b: -0.437, c: 0.426, d: 0.668, tx: 13.35, ty: -22.55},
						transform: [13.35, -22.55, 0.617, 0.792, 0.568, -0.788, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0.428], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_devil_eye_bg2_x",
						instancename: "",
						matrix: {a: 0.355, b: -0.446, c: 0.47, d: 0.647, tx: 15.85, ty: -22.65},
						transform: [15.85, -22.65, 0.571, 0.8, 0.628, -0.899, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "pupilasd_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: -0.589, b: 0.248, c: 0, d: 0.789, tx: -16.95, ty: -22.35},
						transform: [-16.95, -22.35, 0.639, 0.789, 0, 2.744, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.384, 0], [0.709, 0.391], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: -0.645, b: 0.235, c: 0, d: 0.789, tx: -16.05, ty: -22.2},
						transform: [-16.05, -22.2, 0.686, 0.789, 0, 2.791, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.372, 0.255], [0.688, 0.628], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: -0.544, b: 0.117, c: 0, d: 0.306, tx: -13.15, ty: -21.7},
						transform: [-13.15, -21.7, 0.556, 0.306, 0, 2.931, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 8,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.55, b: 0.081, c: 0.02, d: 0.306, tx: 10.2, ty: -21.2},
						transform: [10.2, -21.2, 0.556, 0.306, 0.065, 0.146, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.645, b: 0.235, c: 0, d: 0.789, tx: 13.45, ty: -22.2},
						transform: [13.45, -22.2, 0.686, 0.789, 0, 0.35, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0.428], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.589, b: 0.248, c: 0, d: 0.789, tx: 16, ty: -22.35},
						transform: [16, -22.35, 0.639, 0.789, 0, 0.398, NaN],
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
						classname: "_devil_common_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.396, b: 0, c: 0, d: 0.126, tx: -3.45, ty: 22.6},
						transform: [-3.45, 22.6, 0.396, 0.126, 0, 0, 0],
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
						classname: "_devil_common_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.508, b: 0, c: 0, d: 0.204, tx: 0.05, ty: -34.6},
						transform: [0.05, -34.6, 0.508, 0.204, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_devil_devil_wings_ground_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 24,
		labels: {},
		layers: [
			{
				name: "wing_1_x",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: -0.498, b: 0.181, c: 0.133, d: 0.795, tx: -5.2, ty: 1.05},
						transform: [-5.2, 1.05, 0.53, 0.806, 0.165, 2.792, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 22,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: -0.474, b: 0.189, c: 0.156, d: 0.791, tx: -5.2, ty: 1.05},
						transform: [-5.2, 1.05, 0.511, 0.806, 0.195, 2.763, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: -0.498, b: 0.181, c: 0.133, d: 0.795, tx: -5.2, ty: 1.05},
						transform: [-5.2, 1.05, 0.53, 0.806, 0.165, 2.792, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "wing_1_x",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.787, b: 0.142, c: -0.142, d: 0.787, tx: -5.45, ty: 1.85},
						transform: [-5.45, 1.85, 0.8, 0.8, -0.179, 0.179, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 22,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.789, b: 0.135, c: -0.135, d: 0.789, tx: -5.5, ty: 1.85},
						transform: [-5.5, 1.85, 0.8, 0.8, -0.169, 0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.787, b: 0.142, c: -0.142, d: 0.787, tx: -5.45, ty: 1.85},
						transform: [-5.45, 1.85, 0.8, 0.8, -0.179, 0.179, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm_1_x",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_devil_arm_wut_x",
						instancename: "",
						matrix: {a: -0.691, b: 0.036, c: 0.036, d: 0.691, tx: -12.85, ty: -7.15},
						transform: [-12.85, -7.15, 0.692, 0.692, 0.052, 3.09, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 22,
						classname: "_devil_arm_wut_x",
						instancename: "",
						matrix: {a: -0.624, b: -0.297, c: -0.297, d: 0.624, tx: -13.5, ty: -2.55},
						transform: [-13.5, -2.55, 0.692, 0.692, -0.444, -2.697, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_devil_arm_wut_x",
						instancename: "",
						matrix: {a: -0.691, b: 0.036, c: 0.036, d: 0.691, tx: -12.85, ty: -7.15},
						transform: [-12.85, -7.15, 0.692, 0.692, 0.052, 3.09, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "forearm_1_x",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.63, b: 0.286, c: 0.286, d: -0.63, tx: -23.85, ty: -3.3},
						transform: [-23.85, -3.3, 0.692, 0.692, 2.715, 0.427, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.517, 0], [0.566, 0.897], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 22,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.629, b: 0.287, c: 0.258, d: -0.565, tx: -24.4, ty: -4.6},
						transform: [-24.4, -4.6, 0.691, 0.621, 2.713, 0.428, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.63, b: 0.286, c: 0.286, d: -0.63, tx: -23.85, ty: -3.3},
						transform: [-23.85, -3.3, 0.692, 0.692, 2.715, 0.427, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_L",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.733, b: -0.028, c: 0.028, d: 0.733, tx: -7.55, ty: 6},
						transform: [-7.55, 6, 0.733, 0.733, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 22,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.842, b: 0.096, c: -0.079, d: 0.693, tx: -6.1, ty: 6.9},
						transform: [-6.1, 6.9, 0.848, 0.697, -0.113, 0.113, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.733, b: -0.028, c: 0.028, d: 0.733, tx: -7.55, ty: 6},
						transform: [-7.55, 6, 0.733, 0.733, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "foot_L",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: 0.733, b: 0.007, c: -0.007, d: 0.733, tx: -13.2, ty: 16.35},
						transform: [-13.2, 16.35, 0.733, 0.733, -0.009, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 22,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: 0.792, b: 0.008, c: -0.007, d: 0.684, tx: -13.2, ty: 16.35},
						transform: [-13.2, 16.35, 0.792, 0.684, -0.009, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: 0.733, b: 0.007, c: -0.007, d: 0.733, tx: -13.2, ty: 16.35},
						transform: [-13.2, 16.35, 0.733, 0.733, -0.009, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_devil_body_1_x",
						instancename: "",
						matrix: {a: 0.79, b: -0.125, c: 0.125, d: 0.79, tx: -2.2, ty: -0.3},
						transform: [-2.2, -0.3, 0.8, 0.8, 0.157, -0.157, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 22,
						classname: "_devil_body_1_x",
						instancename: "",
						matrix: {a: 0.837, b: -0.133, c: 0.125, d: 0.79, tx: -2.2, ty: 0.4},
						transform: [-2.2, 0.4, 0.847, 0.8, 0.157, -0.157, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_devil_body_1_x",
						instancename: "",
						matrix: {a: 0.79, b: -0.125, c: 0.125, d: 0.79, tx: -2.2, ty: -0.3},
						transform: [-2.2, -0.3, 0.8, 0.8, 0.157, -0.157, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_1_x",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_devil_arm_wut_x",
						instancename: "",
						matrix: {a: 0.794, b: -0.1, c: 0.1, d: 0.794, tx: 8.4, ty: -5.55},
						transform: [8.4, -5.55, 0.8, 0.8, 0.125, -0.125, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 22,
						classname: "_devil_arm_wut_x",
						instancename: "",
						matrix: {a: 0.692, b: -0.359, c: 0.368, d: 0.71, tx: 8.45, ty: -2.5},
						transform: [8.45, -2.5, 0.779, 0.8, 0.478, -0.478, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_devil_arm_wut_x",
						instancename: "",
						matrix: {a: 0.794, b: -0.1, c: 0.1, d: 0.794, tx: 8.4, ty: -5.55},
						transform: [8.4, -5.55, 0.8, 0.8, 0.125, -0.125, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "forearm_1_x",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: -0.695, b: 0.397, c: -0.37, d: -0.647, tx: 21, ty: -4.5},
						transform: [21, -4.5, 0.8, 0.745, -2.623, 2.623, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.525, 0], [0.605, 0.812], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 22,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: -0.749, b: 0.28, c: -0.255, d: -0.683, tx: 20.5, ty: -4.95},
						transform: [20.5, -4.95, 0.8, 0.729, -2.784, 2.784, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: -0.695, b: 0.397, c: -0.37, d: -0.647, tx: 21, ty: -4.5},
						transform: [21, -4.5, 0.8, 0.745, -2.623, 2.623, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_R",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: 0.35, ty: 5.3},
						transform: [0.35, 5.3, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 22,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: -0.859, b: 0, c: 0, d: 0.728, tx: 0.35, ty: 6.25},
						transform: [0.35, 6.25, 0.859, 0.728, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: 0.35, ty: 5.3},
						transform: [0.35, 5.3, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "foot_R",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: 4.95, ty: 16.1},
						transform: [4.95, 16.1, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 22,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: -0.847, b: 0, c: 0, d: 0.746, tx: 4.95, ty: 16.1},
						transform: [4.95, 16.1, 0.847, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: 4.95, ty: 16.1},
						transform: [4.95, 16.1, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear_1_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.693, b: 0, c: 0, d: 0.8, tx: -10.1, ty: -34.65},
						transform: [-10.1, -34.65, 0.693, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 22,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.674, b: -0.161, c: 0.185, d: 0.778, tx: -12.7, ty: -31},
						transform: [-12.7, -31, 0.693, 0.8, 0.234, -0.234, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.693, b: 0, c: 0, d: 0.8, tx: -10.1, ty: -34.65},
						transform: [-10.1, -34.65, 0.693, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_1_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_devil_head_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -2.65, ty: -19.15},
						transform: [-2.65, -19.15, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 22,
						classname: "_devil_head_1_x",
						instancename: "",
						matrix: {a: 0.8, b: -0.02, c: 0.02, d: 0.8, tx: -2.7, ty: -17},
						transform: [-2.7, -17, 0.8, 0.8, 0.025, -0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_devil_head_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -2.65, ty: -19.15},
						transform: [-2.65, -19.15, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear_1_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0.024, c: -0.024, d: 0.8, tx: 10.8, ty: -33},
						transform: [10.8, -33, 0.8, 0.8, -0.03, 0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 22,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.789, b: -0.135, c: 0.135, d: 0.789, tx: 9.35, ty: -28.35},
						transform: [9.35, -28.35, 0.8, 0.8, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0.024, c: -0.024, d: 0.8, tx: 10.8, ty: -33},
						transform: [10.8, -33, 0.8, 0.8, -0.03, 0.03, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "chin_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_devil_chin_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -10.75, ty: -1.55},
						transform: [-10.75, -1.55, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 22,
						classname: "_devil_chin_x",
						instancename: "",
						matrix: {a: 0.79, b: 0.125, c: -0.125, d: 0.79, tx: -10.4, ty: 0.8},
						transform: [-10.4, 0.8, 0.8, 0.8, -0.157, 0.157, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_devil_chin_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -10.75, ty: -1.55},
						transform: [-10.75, -1.55, 0.8, 0.8, 0, 0, 0],
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
						to: 13,
						classname: "_devil_mouth_compo",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -10.45, ty: -9.45},
						transform: [-10.45, -9.45, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 22,
						classname: "_devil_mouth_compo",
						instancename: "",
						matrix: {a: 0.8, b: -0.02, c: 0.02, d: 0.8, tx: -10, ty: -6.1},
						transform: [-10, -6.1, 0.8, 0.8, 0.025, -0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_devil_mouth_compo",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -10.45, ty: -9.45},
						transform: [-10.45, -9.45, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye_r",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_devil_eye_cartoon",
						instancename: "",
						matrix: {a: 0.647, b: -0.47, c: 0.47, d: 0.647, tx: -0.45, ty: -20.3},
						transform: [-0.45, -20.3, 0.8, 0.8, 0.628, -0.628, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 22,
						classname: "_devil_eye_cartoon",
						instancename: "",
						matrix: {a: 0.647, b: -0.493, c: 0.47, d: 0.679, tx: -0.45, ty: -16},
						transform: [-0.45, -16, 0.814, 0.826, 0.606, -0.651, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_devil_eye_cartoon",
						instancename: "",
						matrix: {a: 0.647, b: -0.47, c: 0.47, d: 0.647, tx: -0.45, ty: -20.3},
						transform: [-0.45, -20.3, 0.8, 0.8, 0.628, -0.628, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye_l",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_devil_eye_cartoonflip",
						instancename: "",
						matrix: {a: -0.355, b: -0.446, c: -0.47, d: 0.647, tx: -17.6, ty: -20.05},
						transform: [-17.6, -20.05, 0.571, 0.8, -0.628, -2.243, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 22,
						classname: "_devil_eye_cartoonflip",
						instancename: "",
						matrix: {a: -0.355, b: -0.468, c: -0.47, d: 0.679, tx: -17.6, ty: -15.7},
						transform: [-17.6, -15.7, 0.588, 0.826, -0.606, -2.22, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.526, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_devil_eye_cartoonflip",
						instancename: "",
						matrix: {a: -0.355, b: -0.446, c: -0.47, d: 0.647, tx: -17.6, ty: -20.05},
						transform: [-17.6, -20.05, 0.571, 0.8, -0.628, -2.243, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_devil_devil_wings_waiting": {
		type: "movieclip",
		fps: 30,
		totalFrames: 50,
		labels: {},
		layers: [
			{
				name: "leg_L",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.733, b: -0.028, c: 0.028, d: 0.733, tx: -7.55, ty: 6},
						transform: [-7.55, 6, 0.733, 0.733, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 48,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.733, b: -0.028, c: 0.028, d: 0.733, tx: -7.55, ty: 6},
						transform: [-7.55, 6, 0.733, 0.733, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 49,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.733, b: -0.028, c: 0.028, d: 0.733, tx: -7.55, ty: 6},
						transform: [-7.55, 6, 0.733, 0.733, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "foot_L",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: 0.733, b: 0.007, c: -0.007, d: 0.733, tx: -13.35, ty: 14.7},
						transform: [-13.35, 14.7, 0.733, 0.733, -0.009, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 48,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: 0.733, b: 0.007, c: -0.007, d: 0.733, tx: -13.35, ty: 14.7},
						transform: [-13.35, 14.7, 0.733, 0.733, -0.009, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 49,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: 0.733, b: 0.007, c: -0.007, d: 0.733, tx: -13.35, ty: 14.7},
						transform: [-13.35, 14.7, 0.733, 0.733, -0.009, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_devil_body_1_x",
						instancename: "",
						matrix: {a: 0.79, b: -0.125, c: 0.125, d: 0.79, tx: -2.2, ty: -0.3},
						transform: [-2.2, -0.3, 0.8, 0.8, 0.157, -0.157, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 48,
						classname: "_devil_body_1_x",
						instancename: "",
						matrix: {a: 0.954, b: -0.083, c: 0.125, d: 0.79, tx: -4.1, ty: -2.1},
						transform: [-4.1, -2.1, 0.957, 0.8, 0.157, -0.087, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 49,
						classname: "_devil_body_1_x",
						instancename: "",
						matrix: {a: 0.79, b: -0.125, c: 0.125, d: 0.79, tx: -2.2, ty: -0.3},
						transform: [-2.2, -0.3, 0.8, 0.8, 0.157, -0.157, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_R",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: 0.35, ty: 5.3},
						transform: [0.35, 5.3, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 48,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: 0.35, ty: 5.3},
						transform: [0.35, 5.3, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 49,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: 0.35, ty: 5.3},
						transform: [0.35, 5.3, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "foot_R",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: 2.2, ty: 15.15},
						transform: [2.2, 15.15, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 48,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: 2.2, ty: 15.15},
						transform: [2.2, 15.15, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 49,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: 2.2, ty: 15.15},
						transform: [2.2, 15.15, 0.8, 0.8, 0, 3.142, NaN],
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
						to: 28,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.54, b: 0.014, c: -0.168, d: 0.788, tx: -22.55, ty: 9.7},
						transform: [-22.55, 9.7, 0.541, 0.806, -0.209, 0.026, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 48,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.54, b: 0.015, c: -0.168, d: 0.823, tx: -22.55, ty: 7.95},
						transform: [-22.55, 7.95, 0.541, 0.84, -0.201, 0.027, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 49,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.54, b: 0.014, c: -0.168, d: 0.788, tx: -22.55, ty: 9.7},
						transform: [-22.55, 9.7, 0.541, 0.806, -0.209, 0.026, NaN],
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
						to: 28,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: -0.662, b: 0.256, c: 0.024, d: 0.8, tx: 15, ty: 8.05},
						transform: [15, 8.05, 0.71, 0.8, 0.03, 2.773, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 48,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: -0.662, b: 0.267, c: 0.024, d: 0.835, tx: 15, ty: 6.25},
						transform: [15, 6.25, 0.714, 0.835, 0.029, 2.758, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 49,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: -0.662, b: 0.256, c: 0.024, d: 0.8, tx: 15, ty: 8.05},
						transform: [15, 8.05, 0.71, 0.8, 0.03, 2.773, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 9",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_devil_arm_1_notcrap_x",
						instancename: "",
						matrix: {a: -0.148, b: 0.568, c: 0.669, d: 0.174, tx: -15.55, ty: -0.9},
						transform: [-15.55, -0.9, 0.587, 0.692, 1.317, 1.825, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 48,
						classname: "_devil_arm_1_notcrap_x",
						instancename: "",
						matrix: {a: -0.148, b: 0.568, c: 0.669, d: 0.174, tx: -14.9, ty: -3.05},
						transform: [-14.9, -3.05, 0.587, 0.692, 1.317, 1.825, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 49,
						classname: "_devil_arm_1_notcrap_x",
						instancename: "",
						matrix: {a: -0.148, b: 0.568, c: 0.669, d: 0.174, tx: -15.55, ty: -0.9},
						transform: [-15.55, -0.9, 0.587, 0.692, 1.317, 1.825, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 10",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.002, b: -0.692, c: -0.692, d: -0.002, tx: -14.45, ty: 8.25},
						transform: [-14.45, 8.25, 0.692, 0.692, -1.574, -1.568, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 48,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: -0.052, b: -0.69, c: -0.69, d: 0.052, tx: -14.1, ty: 5.85},
						transform: [-14.1, 5.85, 0.692, 0.692, -1.496, -1.646, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 49,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.002, b: -0.692, c: -0.692, d: -0.002, tx: -14.45, ty: 8.25},
						transform: [-14.45, 8.25, 0.692, 0.692, -1.574, -1.568, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_1_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_devil_arm_1_notcrap_x",
						instancename: "",
						matrix: {a: -0.014, b: 0.8, c: -0.8, d: -0.014, tx: 7.5, ty: -3.6},
						transform: [7.5, -3.6, 0.8, 0.8, -1.589, 1.589, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 48,
						classname: "_devil_arm_1_notcrap_x",
						instancename: "",
						matrix: {a: -0.119, b: 0.82, c: -0.792, d: -0.114, tx: 7.35, ty: -5},
						transform: [7.35, -5, 0.828, 0.8, -1.714, 1.714, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 49,
						classname: "_devil_arm_1_notcrap_x",
						instancename: "",
						matrix: {a: -0.014, b: 0.8, c: -0.8, d: -0.014, tx: 7.5, ty: -3.6},
						transform: [7.5, -3.6, 0.8, 0.8, -1.589, 1.589, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "forearm_1_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.003, b: -0.8, c: 0.8, d: 0.003, tx: 4.1, ty: 8.75},
						transform: [4.1, 8.75, 0.8, 0.8, 1.567, -1.567, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 48,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.118, b: -0.732, c: 0.765, d: 0.123, tx: 1.8, ty: 7.3},
						transform: [1.8, 7.3, 0.742, 0.775, 1.411, -1.411, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 49,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.003, b: -0.8, c: 0.8, d: 0.003, tx: 4.1, ty: 8.75},
						transform: [4.1, 8.75, 0.8, 0.8, 1.567, -1.567, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear_1_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.693, b: 0, c: 0, d: 0.8, tx: -10.1, ty: -34.65},
						transform: [-10.1, -34.65, 0.693, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 48,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.686, b: 0.099, c: -0.114, d: 0.792, tx: -9, ty: -39.4},
						transform: [-9, -39.4, 0.693, 0.8, -0.143, 0.143, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 49,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.693, b: 0, c: 0, d: 0.8, tx: -10.1, ty: -34.65},
						transform: [-10.1, -34.65, 0.693, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_1_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_devil_head_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -2.65, ty: -19.15},
						transform: [-2.65, -19.15, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 48,
						classname: "_devil_head_1_x",
						instancename: "",
						matrix: {a: 0.799, b: 0.045, c: -0.045, d: 0.799, tx: -2.45, ty: -23.5},
						transform: [-2.45, -23.5, 0.8, 0.8, -0.056, 0.056, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 49,
						classname: "_devil_head_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -2.65, ty: -19.15},
						transform: [-2.65, -19.15, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear_1_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0.024, c: -0.024, d: 0.8, tx: 10.8, ty: -33},
						transform: [10.8, -33, 0.8, 0.8, -0.03, 0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 48,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.772, b: 0.21, c: -0.21, d: 0.772, tx: 12.45, ty: -35.7},
						transform: [12.45, -35.7, 0.8, 0.8, -0.265, 0.265, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 49,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0.024, c: -0.024, d: 0.8, tx: 10.8, ty: -33},
						transform: [10.8, -33, 0.8, 0.8, -0.03, 0.03, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "chin_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_devil_chin_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -10.75, ty: -1.55},
						transform: [-10.75, -1.55, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 48,
						classname: "_devil_chin_x",
						instancename: "",
						matrix: {a: 0.799, b: 0.045, c: -0.045, d: 0.799, tx: -11.35, ty: -7.9},
						transform: [-11.35, -7.9, 0.8, 0.8, -0.056, 0.056, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 49,
						classname: "_devil_chin_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -10.75, ty: -1.55},
						transform: [-10.75, -1.55, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye_r",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_devil_eyes_closed_x",
						instancename: "",
						matrix: {a: 0.777, b: 0.189, c: -0.189, d: 0.777, tx: -1.3, ty: -18.9},
						transform: [-1.3, -18.9, 0.8, 0.8, -0.239, 0.239, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 48,
						classname: "_devil_eyes_closed_x",
						instancename: "",
						matrix: {a: 0.799, b: 0.045, c: -0.045, d: 0.799, tx: -0.85, ty: -24.85},
						transform: [-0.85, -24.85, 0.8, 0.8, -0.056, 0.056, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 49,
						classname: "_devil_eyes_closed_x",
						instancename: "",
						matrix: {a: 0.777, b: 0.189, c: -0.189, d: 0.777, tx: -1.3, ty: -18.9},
						transform: [-1.3, -18.9, 0.8, 0.8, -0.239, 0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye_l",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_devil_eyes_closed_x",
						instancename: "",
						matrix: {a: -0.601, b: 0.152, c: 0.217, d: 0.858, tx: -16.3, ty: -19},
						transform: [-16.3, -19, 0.62, 0.885, 0.248, 2.894, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 48,
						classname: "_devil_eyes_closed_x",
						instancename: "",
						matrix: {a: -0.619, b: -0.035, c: -0.05, d: 0.883, tx: -15.9, ty: -25.65},
						transform: [-15.9, -25.65, 0.62, 0.885, -0.056, -3.085, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 49,
						classname: "_devil_eyes_closed_x",
						instancename: "",
						matrix: {a: -0.601, b: 0.152, c: 0.217, d: 0.858, tx: -16.3, ty: -19},
						transform: [-16.3, -19, 0.62, 0.885, 0.248, 2.894, NaN],
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
						to: 28,
						classname: "_devil_mouth_closed_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -10.1, ty: -10.25},
						transform: [-10.1, -10.25, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 48,
						classname: "_devil_mouth_closed_x",
						instancename: "",
						matrix: {a: 0.799, b: 0.045, c: -0.045, d: 0.799, tx: -10.25, ty: -16.5},
						transform: [-10.25, -16.5, 0.8, 0.8, -0.056, 0.056, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 49,
						classname: "_devil_mouth_closed_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -10.1, ty: -10.25},
						transform: [-10.1, -10.25, 0.8, 0.8, 0, 0, 0],
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
						to: 49,
					},
				]
			},
		]
	},
	"_devil_devil_wings_spawn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 53,
		labels: {},
		layers: [
			{
				name: "wing_1_x",
				keys: [
					{
						from: 0,
						to: 4,
					},
					{
						from: 5,
						to: 8,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: -0.74, b: 0, c: -0.126, d: 0.8, tx: -10.15, ty: 2.05},
						transform: [-10.15, 2.05, 0.74, 0.81, -0.156, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 10,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: -0.74, b: 0, c: -0.221, d: 0.8, tx: -11, ty: -4.95},
						transform: [-11, -4.95, 0.74, 0.83, -0.27, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: -0.693, b: 0.116, c: -0.126, d: 0.7, tx: -10.15, ty: -3},
						transform: [-10.15, -3, 0.703, 0.711, -0.179, 2.976, NaN],
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
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: -0.434, b: 0.423, c: 0.149, d: 0.8, tx: -7.65, ty: -0.45},
						transform: [-7.65, -0.45, 0.606, 0.814, 0.184, 2.368, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: -0.431, b: 0.31, c: 0.343, d: 0.729, tx: -6.15, ty: 2},
						transform: [-6.15, 2, 0.53, 0.806, 0.44, 2.518, NaN],
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
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: -0.498, b: 0.181, c: 0.141, d: 0.844, tx: -5.3, ty: 0.25},
						transform: [-5.3, 0.25, 0.53, 0.856, 0.165, 2.792, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 24,
						to: 52,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: -0.498, b: 0.181, c: 0.133, d: 0.795, tx: -5.2, ty: 1.05},
						transform: [-5.2, 1.05, 0.53, 0.806, 0.165, 2.792, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "wing_1_x",
				keys: [
					{
						from: 0,
						to: 4,
					},
					{
						from: 5,
						to: 8,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.906, b: 0, c: 0, d: 0.8, tx: 2.15, ty: 3.6},
						transform: [2.15, 3.6, 0.906, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 10,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.9, b: -0.102, c: 0.234, d: 0.779, tx: 3.2, ty: -1.9},
						transform: [3.2, -1.9, 0.906, 0.813, 0.292, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.854, b: 0.023, c: 0.114, d: 0.67, tx: 2.15, ty: -0.9},
						transform: [2.15, -0.9, 0.854, 0.679, 0.168, 0.027, NaN],
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
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.622, b: 0.317, c: -0.207, d: 0.687, tx: -1, ty: -0.05},
						transform: [-1, -0.05, 0.698, 0.718, -0.292, 0.471, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.645, b: 0.238, c: -0.319, d: 0.734, tx: -4.5, ty: 3.35},
						transform: [-4.5, 3.35, 0.687, 0.8, -0.41, 0.353, NaN],
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
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.797, b: 0.07, c: -0.07, d: 0.797, tx: -5.5, ty: 1.85},
						transform: [-5.5, 1.85, 0.8, 0.8, -0.088, 0.088, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 24,
						to: 52,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.787, b: 0.142, c: -0.142, d: 0.787, tx: -5.45, ty: 1.85},
						transform: [-5.45, 1.85, 0.8, 0.8, -0.179, 0.179, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_1_x",
				keys: [
					{
						from: 0,
						to: 13,
					},
					{
						from: 14,
						to: 18,
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: -0.655, b: 0.221, c: 0.221, d: 0.655, tx: -15.7, ty: -3.85},
						transform: [-15.7, -3.85, 0.692, 0.692, 0.326, 2.816, NaN],
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
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: -0.675, b: -0.152, c: -0.152, d: 0.675, tx: -12.75, ty: -7.4},
						transform: [-12.75, -7.4, 0.692, 0.692, -0.222, -2.919, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 24,
						to: 52,
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: -0.691, b: 0.036, c: 0.036, d: 0.691, tx: -12.85, ty: -7.15},
						transform: [-12.85, -7.15, 0.692, 0.692, 0.052, 3.09, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "forearm_1_x",
				keys: [
					{
						from: 0,
						to: 13,
					},
					{
						from: 14,
						to: 18,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.684, b: 0.105, c: 0.105, d: -0.684, tx: -25.25, ty: 2.85},
						transform: [-25.25, 2.85, 0.692, 0.692, 2.989, 0.153, NaN],
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
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.585, b: 0.368, c: 0.368, d: -0.585, tx: -24.65, ty: -7.2},
						transform: [-24.65, -7.2, 0.692, 0.692, 2.58, 0.562, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 24,
						to: 52,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.63, b: 0.286, c: 0.286, d: -0.63, tx: -23.85, ty: -3.3},
						transform: [-23.85, -3.3, 0.692, 0.692, 2.715, 0.427, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_L",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.733, b: -0.028, c: 0.028, d: 0.733, tx: -7.55, ty: 6},
						transform: [-7.55, 6, 0.733, 0.733, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.733, b: -0.028, c: 0.028, d: 0.733, tx: -7.55, ty: 6},
						transform: [-7.55, 6, 0.733, 0.733, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 8,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.616, b: 0.057, c: -0.096, d: 1.04, tx: -7.5, ty: 2},
						transform: [-7.5, 2, 0.618, 1.044, -0.092, 0.092, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 10,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.587, b: 0.193, c: -0.326, d: 0.992, tx: -7.5, ty: -3.15},
						transform: [-7.5, -3.15, 0.618, 1.044, -0.318, 0.318, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.635, b: 0.036, c: -0.059, d: 1.029, tx: -7.5, ty: -1.6},
						transform: [-7.5, -1.6, 0.636, 1.031, -0.057, 0.057, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.733, b: 0.019, c: -0.019, d: 0.733, tx: -7.75, ty: 6.7},
						transform: [-7.75, 6.7, 0.733, 0.733, -0.026, 0.026, NaN],
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
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.733, b: -0.03, c: 0.028, d: 0.779, tx: -7.55, ty: 5.35},
						transform: [-7.55, 5.35, 0.733, 0.78, 0.036, -0.041, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 24,
						to: 52,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: 0.733, b: -0.028, c: 0.028, d: 0.733, tx: -7.55, ty: 6},
						transform: [-7.55, 6, 0.733, 0.733, 0.039, -0.039, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "foot_L",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: 0.733, b: 0.007, c: -0.007, d: 0.733, tx: -13.35, ty: 14.7},
						transform: [-13.35, 14.7, 0.733, 0.733, -0.009, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: 0.733, b: 0.007, c: -0.007, d: 0.733, tx: -13.35, ty: 14.7},
						transform: [-13.35, 14.7, 0.733, 0.733, -0.009, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 8,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: 0.684, b: -0.265, c: 0.265, d: 0.684, tx: -13.95, ty: 15.3},
						transform: [-13.95, 15.3, 0.733, 0.733, 0.37, -0.37, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 10,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: 0.694, b: 0.236, c: -0.236, d: 0.694, tx: -15.9, ty: 8.6},
						transform: [-15.9, 8.6, 0.733, 0.733, -0.328, 0.328, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: 0.738, b: -0.076, c: 0.075, d: 0.729, tx: -13.55, ty: 12.2},
						transform: [-13.55, 12.2, 0.742, 0.733, 0.103, -0.103, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: 0.792, b: 0.008, c: -0.007, d: 0.733, tx: -13.85, ty: 16.3},
						transform: [-13.85, 16.3, 0.792, 0.733, -0.009, 0.009, NaN],
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
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: 0.733, b: 0.007, c: -0.007, d: 0.733, tx: -13.2, ty: 16.35},
						transform: [-13.2, 16.35, 0.733, 0.733, -0.009, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 24,
						to: 52,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: 0.733, b: 0.007, c: -0.007, d: 0.733, tx: -13.2, ty: 16.35},
						transform: [-13.2, 16.35, 0.733, 0.733, -0.009, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_devil_body_1_x",
						instancename: "",
						matrix: {a: 0.79, b: -0.125, c: 0.125, d: 0.79, tx: -2.2, ty: -0.3},
						transform: [-2.2, -0.3, 0.8, 0.8, 0.157, -0.157, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_devil_body_1_x",
						instancename: "",
						matrix: {a: 0.79, b: -0.125, c: 0.125, d: 0.79, tx: -2.2, ty: -0.3},
						transform: [-2.2, -0.3, 0.8, 0.8, 0.157, -0.157, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 8,
						classname: "_devil_body_1_x",
						instancename: "",
						matrix: {a: 0.79, b: -0.125, c: 0.125, d: 0.79, tx: -2.2, ty: -4.3},
						transform: [-2.2, -4.3, 0.8, 0.8, 0.157, -0.157, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 13,
						classname: "_devil_body_1_x",
						instancename: "",
						matrix: {a: 0.79, b: -0.125, c: 0.125, d: 0.79, tx: -2.2, ty: -9.5},
						transform: [-2.2, -9.5, 0.8, 0.8, 0.157, -0.157, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_devil_body_1_x",
						instancename: "",
						matrix: {a: 0.79, b: -0.125, c: 0.125, d: 0.79, tx: -2.2, ty: 0.7},
						transform: [-2.2, 0.7, 0.8, 0.8, 0.157, -0.157, NaN],
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
						classname: "_devil_body_1_x",
						instancename: "",
						matrix: {a: 0.744, b: -0.118, c: 0.135, d: 0.851, tx: -2.3, ty: -1.3},
						transform: [-2.3, -1.3, 0.753, 0.862, 0.157, -0.157, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 24,
						to: 52,
						classname: "_devil_body_1_x",
						instancename: "",
						matrix: {a: 0.79, b: -0.125, c: 0.125, d: 0.79, tx: -2.2, ty: -0.3},
						transform: [-2.2, -0.3, 0.8, 0.8, 0.157, -0.157, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_1_x",
				keys: [
					{
						from: 0,
						to: 13,
					},
					{
						from: 14,
						to: 18,
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: 0.785, b: 0.153, c: -0.153, d: 0.785, tx: 8.45, ty: -4.5},
						transform: [8.45, -4.5, 0.8, 0.8, -0.193, 0.193, NaN],
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
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: 0.761, b: -0.246, c: 0.246, d: 0.761, tx: 8.1, ty: -6.9},
						transform: [8.1, -6.9, 0.8, 0.8, 0.312, -0.312, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 24,
						to: 52,
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: 0.794, b: -0.1, c: 0.1, d: 0.794, tx: 8.4, ty: -5.55},
						transform: [8.4, -5.55, 0.8, 0.8, 0.125, -0.125, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "forearm_1_x",
				keys: [
					{
						from: 0,
						to: 13,
					},
					{
						from: 14,
						to: 18,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: -0.779, b: 0.18, c: -0.18, d: -0.779, tx: 20, ty: 1.2},
						transform: [20, 1.2, 0.8, 0.8, -2.915, 2.915, NaN],
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
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: -0.551, b: 0.58, c: -0.58, d: -0.551, tx: 21.15, ty: -8.3},
						transform: [21.15, -8.3, 0.8, 0.8, -2.331, 2.331, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 24,
						to: 52,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: -0.695, b: 0.397, c: -0.397, d: -0.695, tx: 21.15, ty: -3.75},
						transform: [21.15, -3.75, 0.8, 0.8, -2.623, 2.623, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_R",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: 0.35, ty: 5.3},
						transform: [0.35, 5.3, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: 0.35, ty: 5.3},
						transform: [0.35, 5.3, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: -0.715, b: -0.158, c: -0.201, d: 0.91, tx: 0.8, ty: 2.55},
						transform: [0.8, 2.55, 0.732, 0.932, -0.217, -2.924, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 10,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: -0.728, b: -0.076, c: -0.097, d: 0.927, tx: 0.95, ty: -2.5},
						transform: [0.95, -2.5, 0.732, 0.932, -0.104, -3.037, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: -0.675, b: -0.059, c: -0.111, d: 1.001, tx: 1.85, ty: -0.6},
						transform: [1.85, -0.6, 0.678, 1.007, -0.11, -3.054, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: -0.906, b: 0, c: -0.116, d: 0.742, tx: 1.9, ty: 6.1},
						transform: [1.9, 6.1, 0.906, 0.751, -0.155, 3.142, NaN],
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
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.851, tx: 0.35, ty: 4.6},
						transform: [0.35, 4.6, 0.8, 0.851, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 24,
						to: 52,
						classname: "_devil_leg_1_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: 0.35, ty: 5.3},
						transform: [0.35, 5.3, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "foot_R",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: 2.2, ty: 15.15},
						transform: [2.2, 15.15, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: 2.2, ty: 15.15},
						transform: [2.2, 15.15, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: -0.763, b: -0.24, c: -0.24, d: 0.763, tx: 2.1, ty: 15.4},
						transform: [2.1, 15.4, 0.8, 0.8, -0.305, -2.837, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 10,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: -0.759, b: 0.253, c: 0.253, d: 0.759, tx: 3.7, ty: 10.1},
						transform: [3.7, 10.1, 0.8, 0.8, 0.322, 2.819, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: -0.777, b: 0.216, c: 0.214, d: 0.77, tx: 3.8, ty: 13.5},
						transform: [3.8, 13.5, 0.806, 0.799, 0.271, 2.871, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: -0.843, b: 0, c: 0, d: 0.8, tx: 5.45, ty: 16.1},
						transform: [5.45, 16.1, 0.843, 0.8, 0, 3.142, NaN],
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
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: 4.95, ty: 16.1},
						transform: [4.95, 16.1, 0.8, 0.8, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 24,
						to: 52,
						classname: "_devil_claw_idle_x",
						instancename: "",
						matrix: {a: -0.8, b: 0, c: 0, d: 0.8, tx: 4.95, ty: 16.1},
						transform: [4.95, 16.1, 0.8, 0.8, 0, 3.142, NaN],
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
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.54, b: 0.014, c: -0.168, d: 0.788, tx: -22.55, ty: 9.7},
						transform: [-22.55, 9.7, 0.541, 0.806, -0.209, 0.026, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.54, b: 0.014, c: -0.168, d: 0.788, tx: -22.55, ty: 10.3},
						transform: [-22.55, 10.3, 0.541, 0.806, -0.209, 0.026, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 52,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: -0.662, b: 0.256, c: 0.024, d: 0.8, tx: 15, ty: 8.05},
						transform: [15, 8.05, 0.71, 0.8, 0.03, 2.773, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: -0.662, b: 0.256, c: 0.024, d: 0.8, tx: 15, ty: 8.6},
						transform: [15, 8.6, 0.71, 0.8, 0.03, 2.773, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 52,
					},
				]
			},
			{
				name: "Layer 9",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_devil_arm_1_notcrap_x",
						instancename: "",
						matrix: {a: -0.148, b: 0.568, c: 0.669, d: 0.174, tx: -15.55, ty: -0.9},
						transform: [-15.55, -0.9, 0.587, 0.692, 1.317, 1.825, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: -0.148, b: 0.568, c: 0.669, d: 0.174, tx: -15.55, ty: -0.35},
						transform: [-15.55, -0.35, 0.587, 0.692, 1.317, 1.825, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 8,
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: -0.554, b: -0.195, c: -0.229, d: 0.652, tx: -13.3, ty: -7.05},
						transform: [-13.3, -7.05, 0.587, 0.692, -0.338, -2.804, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: -0.524, b: -0.265, c: -0.312, d: 0.617, tx: -13.3, ty: -12.25},
						transform: [-13.3, -12.25, 0.587, 0.692, -0.468, -2.674, NaN],
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
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: -0.655, b: 0.221, c: 0.221, d: 0.655, tx: -15.7, ty: -3.85},
						transform: [-15.7, -3.85, 0.692, 0.692, 0.326, 2.816, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 14,
						to: 52,
					},
				]
			},
			{
				name: "Layer 10",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.002, b: -0.692, c: -0.692, d: -0.002, tx: -14.45, ty: 8.25},
						transform: [-14.45, 8.25, 0.692, 0.692, -1.574, -1.568, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.002, b: -0.692, c: -0.692, d: -0.002, tx: -14.45, ty: 8.8},
						transform: [-14.45, 8.8, 0.692, 0.692, -1.574, -1.568, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 8,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: -0.342, b: 0.601, c: 0.601, d: 0.342, tx: -21.6, ty: -7.95},
						transform: [-21.6, -7.95, 0.692, 0.692, 1.054, 2.088, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: -0.445, b: 0.529, c: 0.529, d: 0.445, tx: -21.5, ty: -14.35},
						transform: [-21.5, -14.35, 0.692, 0.692, 0.871, 2.27, NaN],
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
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.684, b: 0.105, c: 0.105, d: -0.684, tx: -25.25, ty: 2.85},
						transform: [-25.25, 2.85, 0.692, 0.692, 2.989, 0.153, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 14,
						to: 52,
					},
				]
			},
			{
				name: "arm_1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_devil_arm_1_notcrap_x",
						instancename: "",
						matrix: {a: -0.014, b: 0.8, c: -0.8, d: -0.014, tx: 7.5, ty: -3.6},
						transform: [7.5, -3.6, 0.8, 0.8, -1.589, 1.589, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_devil_arm_1_notcrap_x",
						instancename: "",
						matrix: {a: -0.014, b: 0.8, c: -0.8, d: -0.014, tx: 7.5, ty: -3.05},
						transform: [7.5, -3.05, 0.8, 0.8, -1.589, 1.589, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 8,
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: 0.792, b: -0.111, c: 0.111, d: 0.792, tx: 7.7, ty: -7.55},
						transform: [7.7, -7.55, 0.8, 0.8, 0.139, -0.139, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: 0.78, b: -0.179, c: 0.179, d: 0.78, tx: 7.65, ty: -12.75},
						transform: [7.65, -12.75, 0.8, 0.8, 0.225, -0.225, NaN],
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
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: 0.785, b: 0.153, c: -0.153, d: 0.785, tx: 8.45, ty: -4.5},
						transform: [8.45, -4.5, 0.8, 0.8, -0.193, 0.193, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 14,
						to: 52,
					},
				]
			},
			{
				name: "forearm_1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: -0.021, b: -0.8, c: 0.77, d: -0.02, tx: 3.7, ty: 8.05},
						transform: [3.7, 8.05, 0.8, 0.771, 1.597, -1.597, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.003, b: -0.8, c: 0.8, d: 0.003, tx: 4.1, ty: 9.3},
						transform: [4.1, 9.3, 0.8, 0.8, 1.567, -1.567, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 8,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.363, b: 0.713, c: -0.713, d: 0.363, tx: 19.7, ty: -7.45},
						transform: [19.7, -7.45, 0.8, 0.8, -1.1, 1.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.534, b: 0.595, c: -0.595, d: 0.534, tx: 19.65, ty: -13.65},
						transform: [19.65, -13.65, 0.8, 0.8, -0.839, 0.839, NaN],
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
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: -0.779, b: 0.18, c: -0.18, d: -0.779, tx: 20, ty: 1.2},
						transform: [20, 1.2, 0.8, 0.8, -2.915, 2.915, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 14,
						to: 52,
					},
				]
			},
			{
				name: "ear_1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.693, b: 0, c: 0, d: 0.8, tx: -10.1, ty: -34.65},
						transform: [-10.1, -34.65, 0.693, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.691, b: -0.057, c: 0.066, d: 0.797, tx: -11.5, ty: -31.7},
						transform: [-11.5, -31.7, 0.693, 0.8, 0.082, -0.082, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.666, b: -0.191, c: 0.22, d: 0.769, tx: -1.8, ty: -41.75},
						transform: [-1.8, -41.75, 0.693, 0.8, 0.279, -0.279, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 13,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.655, b: 0.225, c: -0.26, d: 0.756, tx: -1.4, ty: -46.35},
						transform: [-1.4, -46.35, 0.693, 0.8, -0.331, 0.331, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.693, b: 0, c: 0, d: 0.8, tx: -10.1, ty: -31.05},
						transform: [-10.1, -31.05, 0.693, 0.8, 0, 0, 0],
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
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.687, b: 0.09, c: -0.104, d: 0.793, tx: -10.1, ty: -36.65},
						transform: [-10.1, -36.65, 0.693, 0.8, -0.131, 0.131, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 24,
						to: 52,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.693, b: 0, c: 0, d: 0.8, tx: -10.1, ty: -34.65},
						transform: [-10.1, -34.65, 0.693, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_devil_head_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -2.65, ty: -19.15},
						transform: [-2.65, -19.15, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_devil_head_1_x",
						instancename: "",
						matrix: {a: 0.797, b: -0.066, c: 0.066, d: 0.797, tx: -2.75, ty: -16.9},
						transform: [-2.75, -16.9, 0.8, 0.8, 0.082, -0.082, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_devil_head_1_x",
						instancename: "",
						matrix: {a: 0.748, b: 0.283, c: -0.283, d: 0.748, tx: 1.5, ty: -24.4},
						transform: [1.5, -24.4, 0.8, 0.8, -0.362, 0.362, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 13,
						classname: "_devil_head_1_x",
						instancename: "",
						matrix: {a: 0.748, b: 0.283, c: -0.283, d: 0.748, tx: 1.5, ty: -29.6},
						transform: [1.5, -29.6, 0.8, 0.8, -0.362, 0.362, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_devil_head_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -2.65, ty: -15.55},
						transform: [-2.65, -15.55, 0.8, 0.8, 0, 0, 0],
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
						classname: "_devil_head_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -2.65, ty: -21.15},
						transform: [-2.65, -21.15, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 24,
						to: 52,
						classname: "_devil_head_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -2.65, ty: -19.15},
						transform: [-2.65, -19.15, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear_1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0.024, c: -0.024, d: 0.8, tx: 10.8, ty: -33},
						transform: [10.8, -33, 0.8, 0.8, -0.03, 0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.799, b: -0.042, c: 0.042, d: 0.799, tx: 9.45, ty: -31.8},
						transform: [9.45, -31.8, 0.8, 0.8, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0.003, c: -0.003, d: 0.8, tx: 18.9, ty: -32.55},
						transform: [18.9, -32.55, 0.8, 0.8, -0.004, 0.004, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 13,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.703, b: 0.381, c: -0.381, d: 0.703, tx: 18.9, ty: -37.8},
						transform: [18.9, -37.8, 0.8, 0.8, -0.496, 0.496, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0.024, c: -0.024, d: 0.8, tx: 10.8, ty: -29.4},
						transform: [10.8, -29.4, 0.8, 0.8, -0.03, 0.03, NaN],
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
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.793, b: 0.104, c: -0.104, d: 0.793, tx: 10.75, ty: -35},
						transform: [10.75, -35, 0.8, 0.8, -0.13, 0.13, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 24,
						to: 52,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.8, b: 0.024, c: -0.024, d: 0.8, tx: 10.8, ty: -33},
						transform: [10.8, -33, 0.8, 0.8, -0.03, 0.03, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "chin_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_devil_chin_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -10.75, ty: -1.55},
						transform: [-10.75, -1.55, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_devil_chin_x",
						instancename: "",
						matrix: {a: 0.797, b: -0.066, c: 0.066, d: 0.797, tx: -9.45, ty: 1.3},
						transform: [-9.45, 1.3, 0.8, 0.8, 0.082, -0.082, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_devil_chin_x",
						instancename: "",
						matrix: {a: 0.748, b: 0.283, c: -0.283, d: 0.748, tx: -12.3, ty: -10.8},
						transform: [-12.3, -10.8, 0.8, 0.8, -0.362, 0.362, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 13,
						classname: "_devil_chin_x",
						instancename: "",
						matrix: {a: 0.748, b: 0.283, c: -0.283, d: 0.748, tx: -10.7, ty: -18.4},
						transform: [-10.7, -18.4, 0.8, 0.8, -0.362, 0.362, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_devil_chin_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -10.75, ty: 2.05},
						transform: [-10.75, 2.05, 0.8, 0.8, 0, 0, 0],
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
						classname: "_devil_chin_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -10.75, ty: -4.35},
						transform: [-10.75, -4.35, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 24,
						to: 52,
						classname: "_devil_chin_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -10.75, ty: -1.55},
						transform: [-10.75, -1.55, 0.8, 0.8, 0, 0, 0],
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
						to: 3,
						classname: "_devil_mouth_closed_x",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -10.1, ty: -10.25},
						transform: [-10.1, -10.25, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_devil_mouth_closed_x",
						instancename: "",
						matrix: {a: 0.797, b: -0.066, c: 0.066, d: 0.797, tx: -9.5, ty: -7.4},
						transform: [-9.5, -7.4, 0.8, 0.8, 0.082, -0.082, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_devil_mouth_compo",
						instancename: "",
						matrix: {a: 0.748, b: 0.283, c: -0.283, d: 0.748, tx: -9.2, ty: -18.1},
						transform: [-9.2, -18.1, 0.8, 0.8, -0.362, 0.362, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 13,
						classname: "_devil_mouth_compo",
						instancename: "",
						matrix: {a: 0.748, b: 0.283, c: -0.283, d: 0.748, tx: -8, ty: -25.3},
						transform: [-8, -25.3, 0.8, 0.8, -0.362, 0.362, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_devil_mouth_compo",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -10.45, ty: -5.85},
						transform: [-10.45, -5.85, 0.8, 0.8, 0, 0, 0],
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
						classname: "_devil_mouth_compo",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -10.45, ty: -12.45},
						transform: [-10.45, -12.45, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 24,
						to: 52,
						classname: "_devil_mouth_compo",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: -10.45, ty: -9.45},
						transform: [-10.45, -9.45, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye_r",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_devil_eyes_closed_x",
						instancename: "",
						matrix: {a: 0.777, b: 0.189, c: -0.189, d: 0.777, tx: -1.3, ty: -18.9},
						transform: [-1.3, -18.9, 0.8, 0.8, -0.239, 0.239, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_devil_eyes_closed_x",
						instancename: "",
						matrix: {a: 0.747, b: -0.286, c: 0.286, d: 0.747, tx: -1.4, ty: -16.55},
						transform: [-1.4, -16.55, 0.8, 0.8, 0.366, -0.366, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_devil_eye_cartoon",
						instancename: "",
						matrix: {a: 0.772, b: -0.21, c: 0.21, d: 0.772, tx: 4.3, ty: -24.45},
						transform: [4.3, -24.45, 0.8, 0.8, 0.266, -0.266, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_devil_eye_cartoon",
						instancename: "",
						matrix: {a: 0.772, b: -0.21, c: 0.21, d: 0.772, tx: 5.7, ty: -31.85},
						transform: [5.7, -31.85, 0.8, 0.8, 0.266, -0.266, NaN],
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
						classname: "_devil_eye_cartoon",
						instancename: "",
						matrix: {a: 0.702, b: -0.382, c: 0.382, d: 0.702, tx: 1.95, ty: -22.1},
						transform: [1.95, -22.1, 0.799, 0.799, 0.498, -0.498, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_devil_eye_cartoon",
						instancename: "",
						matrix: {a: 0.647, b: -0.47, c: 0.47, d: 0.647, tx: 0, ty: -16.6},
						transform: [0, -16.6, 0.8, 0.8, 0.628, -0.628, NaN],
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
						classname: "_devil_eye_cartoon",
						instancename: "",
						matrix: {a: 0.647, b: -0.47, c: 0.47, d: 0.647, tx: 0, ty: -22.8},
						transform: [0, -22.8, 0.8, 0.8, 0.628, -0.628, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 24,
						to: 52,
						classname: "_devil_eye_cartoon",
						instancename: "",
						matrix: {a: 0.647, b: -0.47, c: 0.47, d: 0.647, tx: -0.45, ty: -20.3},
						transform: [-0.45, -20.3, 0.8, 0.8, 0.628, -0.628, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye_l",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_devil_eyes_closed_x",
						instancename: "",
						matrix: {a: -0.601, b: 0.152, c: 0.217, d: 0.858, tx: -16.3, ty: -19},
						transform: [-16.3, -19, 0.62, 0.885, 0.248, 2.894, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_devil_eyes_closed_x",
						instancename: "",
						matrix: {a: -0.613, b: -0.089, c: -0.127, d: 0.876, tx: -16.35, ty: -15.65},
						transform: [-16.35, -15.65, 0.62, 0.885, -0.144, -2.997, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_devil_eye_cartoonflip",
						instancename: "",
						matrix: {a: -0.164, b: -0.512, c: -0.538, d: 0.407, tx: -12.5, ty: -30.7},
						transform: [-12.5, -30.7, 0.538, 0.675, -0.923, -1.882, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 13,
						classname: "_devil_eye_cartoonflip",
						instancename: "",
						matrix: {a: -0.164, b: -0.512, c: -0.709, d: 0.536, tx: -12.25, ty: -36.75},
						transform: [-12.25, -36.75, 0.538, 0.889, -0.923, -1.882, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_devil_eye_cartoonflip",
						instancename: "",
						matrix: {a: -0.379, b: -0.382, c: -0.383, d: 0.788, tx: -17.65, ty: -16.05},
						transform: [-17.65, -16.05, 0.538, 0.876, -0.453, -2.352, NaN],
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
						classname: "_devil_eye_cartoonflip",
						instancename: "",
						matrix: {a: -0.355, b: -0.446, c: -0.47, d: 0.647, tx: -17.6, ty: -22.75},
						transform: [-17.6, -22.75, 0.571, 0.8, -0.628, -2.243, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 24,
						to: 52,
						classname: "_devil_eye_cartoonflip",
						instancename: "",
						matrix: {a: -0.355, b: -0.446, c: -0.47, d: 0.647, tx: -17.6, ty: -20.05},
						transform: [-17.6, -20.05, 0.571, 0.8, -0.628, -2.243, NaN],
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
						to: 52,
						classname: "_devil_common_fx_spawn",
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
	"_devil_crash_part_2": {
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
						classname: "_devil_banana2_x",
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
						classname: "_devil_box_physics",
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
	"_devil_crash_part_1": {
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
						classname: "_devil_banana_x",
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
						classname: "_devil_box_physics",
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
	"_devil_box_physics": {
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
	"_devil_common_circle_physics": {
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
	"_devil_arm_comp": {
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
						classname: "_devil_arm_idle",
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
						classname: "_devil_arm_flap",
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
						classname: "_devil_arm_flapout",
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
	"_devil_leg_1_x": {
		type: "bitmap",
		asset: "_devil_leg_1_x",
		scale: 2,
		position: [-15.15, -8.9],
	},
	"_devil_claw_1": {
		type: "movieclip",
		fps: 30,
		totalFrames: 13,
		labels: {},
		layers: [
			{
				name: "footbase_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_devil_footbase_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.15, ty: 1.3},
						transform: [-1.15, 1.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 11,
						classname: "_devil_footbase_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.15, ty: 1.3},
						transform: [-1.15, 1.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_devil_footbase_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.15, ty: 1.3},
						transform: [-1.15, 1.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "claw_1_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_devil_claw_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5.45, ty: 1.85},
						transform: [5.45, 1.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 11,
						classname: "_devil_claw_1_x",
						instancename: "",
						matrix: {a: 0.841, b: 0.54, c: -0.54, d: 0.841, tx: 5.3, ty: 2.2},
						transform: [5.3, 2.2, 1, 1, -0.571, 0.571, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_devil_claw_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5.45, ty: 1.85},
						transform: [5.45, 1.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "claw_3_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_devil_claw_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -7.45, ty: 2.15},
						transform: [-7.45, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 11,
						classname: "_devil_claw_3_x",
						instancename: "",
						matrix: {a: 0.887, b: -0.461, c: 0.461, d: 0.887, tx: -7.35, ty: 2.3},
						transform: [-7.35, 2.3, 1, 1, 0.479, -0.479, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_devil_claw_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -7.45, ty: 2.15},
						transform: [-7.45, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "claw_2_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_devil_claw_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.3, ty: 4.2},
						transform: [-3.3, 4.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 11,
						classname: "_devil_claw_2_x",
						instancename: "",
						matrix: {a: 0.837, b: -0.547, c: 0.547, d: 0.837, tx: -1.55, ty: 5.35},
						transform: [-1.55, 5.35, 1, 1, 0.579, -0.579, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_devil_claw_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.3, ty: 4.2},
						transform: [-3.3, 4.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_devil_body_1_x": {
		type: "bitmap",
		asset: "_devil_body_1_x",
		scale: 2,
		position: [-19.45, -14.75],
	},
	"_devil_head_air": {
		type: "movieclip",
		fps: 30,
		totalFrames: 36,
		labels: {},
		layers: [
			{
				name: "ear_1_x",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.866, b: 0, c: 0, d: 1, tx: -17.65, ty: -22.05},
						transform: [-17.65, -22.05, 0.866, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.422, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 34,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.861, b: -0.091, c: 0.105, d: 0.995, tx: -13.75, ty: -20.7},
						transform: [-13.75, -20.7, 0.866, 1, 0.105, -0.105, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.422, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.866, b: 0, c: 0, d: 1, tx: -17.65, ty: -22.05},
						transform: [-17.65, -22.05, 0.866, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_1_x",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_devil_head_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.35, ty: -2.7},
						transform: [-8.35, -2.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.422, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 34,
						classname: "_devil_head_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.35, ty: -2.7},
						transform: [-8.35, -2.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.422, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_devil_head_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.35, ty: -2.7},
						transform: [-8.35, -2.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear_1_x",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 8.45, ty: -20},
						transform: [8.45, -20, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.422, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 34,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 0.992, b: 0.126, c: -0.126, d: 0.992, tx: 3.4, ty: -20.05},
						transform: [3.4, -20.05, 1, 1, -0.126, 0.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.422, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_devil_ear_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 8.45, ty: -20},
						transform: [8.45, -20, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "chin_x",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_devil_chin_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -20.8, ty: 19.05},
						transform: [-20.8, 19.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.422, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 34,
						classname: "_devil_chin_x",
						instancename: "",
						matrix: {a: 0.979, b: -0.203, c: 0.203, d: 0.979, tx: -23.3, ty: 17.6},
						transform: [-23.3, 17.6, 1, 1, 0.205, -0.205, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.422, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_devil_chin_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -20.8, ty: 19.05},
						transform: [-20.8, 19.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.484, 0], [0.422, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_devil_mouth_compo": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {idle: {from:0, to:3}, flap: {from:5, to:10}, flap_out: {from:12, to:17}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_devil_moutch_1_x",
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
						classname: "_devil_moutch_flap",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 18,
						classname: "_devil_moutch_flapout",
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
						actions: function(self){self.gotoAndPlay("idle");},
					},
				]
			},
		]
	},
	"_devil_eye_compo_1": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {idle: {from:0, to:3}, flap: {from:5, to:10}, flap_out: {from:12, to:18}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_devil_eye_cartoon",
						instancename: "",
						matrix: {a: 0.67, b: -0.482, c: 0.482, d: 0.67, tx: 1.05, ty: -0.7},
						transform: [1.05, -0.7, 0.825, 0.825, 0.624, -0.624, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 11,
						classname: "_devil_eye_flap",
						instancename: "",
						matrix: {a: 0.67, b: -0.482, c: 0.482, d: 0.67, tx: 1.05, ty: -0.7},
						transform: [1.05, -0.7, 0.825, 0.825, 0.624, -0.624, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 19,
						classname: "_devil_eye_flapout",
						instancename: "",
						matrix: {a: 0.67, b: -0.482, c: 0.482, d: 0.67, tx: 1.05, ty: -0.7},
						transform: [1.05, -0.7, 0.825, 0.825, 0.624, -0.624, NaN],
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
						to: 18,
					},
					{
						from: 19,
						to: 19,
						actions: function(self){self.gotoAndPlay("idle");},
					},
				]
			},
		]
	},
	"_devil_eye_compo_2": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {idle: {from:0, to:3}, flap: {from:5, to:10}, flap_out: {from:12, to:17}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_devil_eye_cartoonflip",
						instancename: "",
						matrix: {a: -0.355, b: -0.446, c: -0.47, d: 0.647, tx: 0.1, ty: -0.45},
						transform: [0.1, -0.45, 0.571, 0.8, -0.628, -2.243, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 11,
						classname: "_devil_eye_flapflip",
						instancename: "",
						matrix: {a: -0.355, b: -0.446, c: -0.47, d: 0.647, tx: 0.1, ty: -0.45},
						transform: [0.1, -0.45, 0.571, 0.8, -0.628, -2.243, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 18,
						classname: "_devil_eye_flapoutflip",
						instancename: "",
						matrix: {a: -0.355, b: -0.446, c: -0.47, d: 0.647, tx: 0.1, ty: -0.45},
						transform: [0.1, -0.45, 0.571, 0.8, -0.628, -2.243, NaN],
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
						actions: function(self){self.gotoAndPlay("idle");},
					},
				]
			},
		]
	},
	"_devil_common_attackbox": {
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
	"_devil_common_hittablebox": {
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
	"_devil_ear_1_x": {
		type: "bitmap",
		asset: "_devil_ear_1_x",
		scale: 2,
		position: [-11.15, -14.15],
	},
	"_devil_head_1_x": {
		type: "bitmap",
		asset: "_devil_head_1_x",
		scale: 2,
		position: [-27.4, -29.7],
	},
	"_devil_chin_x": {
		type: "bitmap",
		asset: "_devil_chin_x",
		scale: 2,
		position: [-10.4, -7.45],
	},
	"_devil_eye_bg_x": {
		type: "bitmap",
		asset: "_devil_eye_bg_x",
		scale: 2,
		position: [-16.85, -12.6],
	},
	"_devil_pupilasd_x": {
		type: "bitmap",
		asset: "_devil_pupilasd_x",
		scale: 2,
		position: [-6.85, -9.4],
	},
	"_devil_eye_bg2_x": {
		type: "bitmap",
		asset: "_devil_eye_bg2_x",
		scale: 2,
		position: [-16.85, -12.6],
	},
	"_devil_wing_1_x": {
		type: "bitmap",
		asset: "_devil_wing_1_x",
		scale: 2,
		position: [-6.3, -21.45],
	},
	"_devil_arm_wut_x": {
		type: "bitmap",
		asset: "_devil_arm_wut_x",
		scale: 2,
		position: [-8.4, -8.5],
	},
	"_devil_forearm_1_anima": {
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
						classname: "_devil_forearm_god_1_x",
						instancename: "",
						matrix: {a: 1, b: 0.005, c: -0.005, d: 1, tx: -0.05, ty: 0.1},
						transform: [-0.05, 0.1, 1, 1, -0.005, 0.005, NaN],
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
						to: 3,
						classname: "_devil_handpropper_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.95, ty: -12.7},
						transform: [4.95, -12.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 13,
						classname: "_devil_handpropper_x",
						instancename: "",
						matrix: {a: 0.857, b: -0.515, c: 0.515, d: 0.857, tx: 4.55, ty: -12.5},
						transform: [4.55, -12.5, 1, 1, 0.541, -0.541, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.419, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_devil_handpropper_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.95, ty: -12.7},
						transform: [4.95, -12.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_devil_claw_idle_x": {
		type: "bitmap",
		asset: "_devil_claw_idle_x",
		scale: 2,
		position: [-18.75, -7.95],
	},
	"_devil_eye_cartoon": {
		type: "movieclip",
		fps: 30,
		totalFrames: 36,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_devil_eye_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_devil_eye_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.756, 0.414], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_devil_eye_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.375, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.375, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.197, 0.421], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 35,
						classname: "_devil_eye_bg_x",
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
						to: 9,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.799, b: 0.602, c: -0.602, d: 0.799, tx: -3.5, ty: -0.4},
						transform: [-3.5, -0.4, 1, 1, -0.646, 0.646, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.799, b: 0.602, c: -0.602, d: 0.799, tx: -3.5, ty: -0.4},
						transform: [-3.5, -0.4, 1, 1, -0.646, 0.646, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.756, 0.414], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.434, b: 0.327, c: -0.183, d: 0.242, tx: -3.6, ty: -0.15},
						transform: [-3.6, -0.15, 0.543, 0.303, -0.646, 0.646, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.197, 0.421], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 35,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.799, b: 0.602, c: -0.602, d: 0.799, tx: -3.5, ty: -0.4},
						transform: [-3.5, -0.4, 1, 1, -0.646, 0.646, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_devil_eye_cartoonflip": {
		type: "movieclip",
		fps: 30,
		totalFrames: 36,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_devil_eye_bg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_devil_eye_bg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.756, 0.414], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_devil_eye_bg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.375, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.375, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.197, 0.421], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 35,
						classname: "_devil_eye_bg2_x",
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
						to: 9,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.603, b: 0.798, c: -0.843, d: 0.637, tx: -0.05, ty: 0.4},
						transform: [-0.05, 0.4, 1, 1.057, -0.924, 0.924, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.603, b: 0.798, c: -0.843, d: 0.637, tx: -0.05, ty: 0.4},
						transform: [-0.05, 0.4, 1, 1.057, -0.924, 0.924, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.756, 0.414], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.351, b: 0.465, c: -0.278, d: 0.21, tx: 0.2, ty: 0.1},
						transform: [0.2, 0.1, 0.583, 0.349, -0.924, 0.924, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.197, 0.421], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 35,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.603, b: 0.798, c: -0.843, d: 0.637, tx: -0.05, ty: 0.4},
						transform: [-0.05, 0.4, 1, 1.057, -0.924, 0.924, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_devil_arm_1_notcrap_x": {
		type: "bitmap",
		asset: "_devil_arm_1_notcrap_x",
		scale: 2,
		position: [-8.4, -8.6],
	},
	"_devil_eyes_closed_x": {
		type: "bitmap",
		asset: "_devil_eyes_closed_x",
		scale: 2,
		position: [-13.9, -10.3],
	},
	"_devil_mouth_closed_x": {
		type: "bitmap",
		asset: "_devil_mouth_closed_x",
		scale: 2,
		position: [-12.8, -7.95],
	},
	"_devil_arm_1_x": {
		type: "bitmap",
		asset: "_devil_arm_1_x",
		scale: 2,
		position: [-8.4, -8.5],
	},
	"_devil_common_fx_spawn": {
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
						classname: "_devil_common_startballoonfx",
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
						classname: "_devil_common_startballoonfx",
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
						classname: "_devil_common_startballoonfx",
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
						classname: "_devil_common_startballoonfx_end",
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
						classname: "_devil_common_thunder_part_1_x",
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
						classname: "_devil_common_thunder_part_2_x",
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
						classname: "_devil_common_thunder_part_3_x",
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
						classname: "_devil_common_thunder_part_2_x",
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
						classname: "_devil_common_thunder_part_5_x",
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
	"_devil_banana2_x": {
		type: "bitmap",
		asset: "_devil_banana2_x",
		scale: 2,
		position: [-16.25, -13.15],
	},
	"_devil_banana_x": {
		type: "bitmap",
		asset: "_devil_banana_x",
		scale: 2,
		position: [-18.25, -13.75],
	},
	"_devil_arm_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 17,
		labels: {},
		layers: [
			{
				name: "wing_1_x",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.35, ty: 11.65},
						transform: [-5.35, 11.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 15,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.994, b: 0.109, c: -0.109, d: 0.994, tx: -5.8, ty: 12.2},
						transform: [-5.8, 12.2, 1, 1, -0.109, 0.109, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.35, ty: 11.65},
						transform: [-5.35, 11.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_1_x",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.65, ty: 0},
						transform: [0.65, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 15,
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: 0.986, b: 0.164, c: -0.164, d: 0.986, tx: 0.65, ty: 0},
						transform: [0.65, 0, 1, 1, -0.165, 0.165, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.65, ty: 0},
						transform: [0.65, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "forearm_1_x",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.843, b: 0.538, c: -0.538, d: 0.843, tx: 15.05, ty: 1.8},
						transform: [15.05, 1.8, 1, 1, -0.568, 0.568, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 15,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.694, b: 0.72, c: -0.72, d: 0.694, tx: 15.15, ty: 4.75},
						transform: [15.15, 4.75, 1, 1, -0.803, 0.803, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.843, b: 0.538, c: -0.538, d: 0.843, tx: 15.05, ty: 1.8},
						transform: [15.05, 1.8, 1, 1, -0.568, 0.568, NaN],
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
						to: 16,
					},
				]
			},
		]
	},
	"_devil_arm_flap": {
		type: "movieclip",
		fps: 30,
		totalFrames: 14,
		labels: {},
		layers: [
			{
				name: "wing_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.35, ty: 11.65},
						transform: [-5.35, 11.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.907, b: -0.461, c: 0.4, d: 0.899, tx: -2.5, ty: 13.2},
						transform: [-2.5, 13.2, 1.018, 0.984, 0.419, -0.47, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 7,
						to: 10,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 1.381, b: 0.046, c: 0.493, d: 0.899, tx: -3.6, ty: 12.05},
						transform: [-3.6, 12.05, 1.382, 1.025, 0.502, 0.033, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.508, b: 1.053, c: -0.29, d: 0.807, tx: -6.55, ty: 2.35},
						transform: [-6.55, 2.35, 1.17, 0.857, -0.345, 1.121, NaN],
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
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.35, ty: 11.65},
						transform: [-5.35, 11.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.65, ty: 0},
						transform: [0.65, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: 0.943, b: -0.333, c: 0.333, d: 0.943, tx: 0.5, ty: -1.1},
						transform: [0.5, -1.1, 1, 1, 0.339, -0.339, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 7,
						to: 10,
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: 1.18, b: -0.052, c: 0.061, d: 0.998, tx: 0.5, ty: -0.7},
						transform: [0.5, -0.7, 1.181, 1, 0.061, -0.044, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: 0.515, b: 0.857, c: -0.857, d: 0.515, tx: 0.85, ty: -0.6},
						transform: [0.85, -0.6, 1, 1, -1.03, 1.03, NaN],
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
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.65, ty: 0},
						transform: [0.65, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "forearm_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.843, b: 0.538, c: -0.538, d: 0.843, tx: 15.05, ty: 1.8},
						transform: [15.05, 1.8, 1, 1, -0.568, 0.568, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.951, b: -0.303, c: 0.303, d: 0.951, tx: 14.95, ty: -3.75},
						transform: [14.95, -3.75, 0.998, 0.998, 0.308, -0.308, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 7,
						to: 10,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.315, b: 0.962, c: -1.137, d: 0.266, tx: 17.95, ty: 0.75},
						transform: [17.95, 0.75, 1.012, 1.168, -1.341, 1.255, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: -0.724, b: 0.687, c: -0.687, d: -0.724, tx: 6.55, ty: 13},
						transform: [6.55, 13, 0.998, 0.998, -2.383, 2.383, NaN],
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
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.843, b: 0.538, c: -0.538, d: 0.843, tx: 15.05, ty: 1.8},
						transform: [15.05, 1.8, 1, 1, -0.568, 0.568, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_devil_arm_flapout": {
		type: "movieclip",
		fps: 30,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "wing_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.83, b: -0.281, c: 0.176, d: 0.982, tx: -3.4, ty: 13.5},
						transform: [-3.4, 13.5, 0.876, 0.998, 0.177, -0.326, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.724, 0.465], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.877, b: -0.312, c: 0.254, d: 0.964, tx: -2.45, ty: 13.4},
						transform: [-2.45, 13.4, 0.931, 0.997, 0.258, -0.342, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.281, 0.459], [0.539, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 0.958, b: 0.288, c: -0.159, d: 0.997, tx: -5.5, ty: 11.55},
						transform: [-5.5, 11.55, 1, 1.009, -0.158, 0.292, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_devil_wing_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.35, ty: 11.65},
						transform: [-5.35, 11.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.65, ty: 0},
						transform: [0.65, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.724, 0.465], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.038, c: 0.038, d: 0.999, tx: 0.65, ty: 0},
						transform: [0.65, 0, 1, 1, 0.038, -0.038, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.281, 0.459], [0.539, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: 0.94, b: 0.341, c: -0.341, d: 0.94, tx: 0.7, ty: 0.1},
						transform: [0.7, 0.1, 1, 1, -0.348, 0.348, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_devil_arm_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.65, ty: 0},
						transform: [0.65, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "forearm_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.965, b: -0.262, c: 0.262, d: 0.965, tx: 15.05, ty: 1.9},
						transform: [15.05, 1.9, 1, 1, 0.265, -0.265, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.724, 0.465], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.985, b: -0.167, c: 0.167, d: 0.985, tx: 15.2, ty: 1.55},
						transform: [15.2, 1.55, 0.999, 0.999, 0.168, -0.168, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.281, 0.459], [0.539, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.552, b: 0.834, c: -0.834, d: 0.552, tx: 14.1, ty: 7.4},
						transform: [14.1, 7.4, 1, 1, -0.986, 0.986, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_devil_forearm_1_anima",
						instancename: "",
						matrix: {a: 0.843, b: 0.538, c: -0.538, d: 0.843, tx: 15.05, ty: 1.8},
						transform: [15.05, 1.8, 1, 1, -0.568, 0.568, NaN],
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
						to: 14,
					},
				]
			},
		]
	},
	"_devil_footbase_x": {
		type: "bitmap",
		asset: "_devil_footbase_x",
		scale: 2,
		position: [-14.7, -9.25],
	},
	"_devil_claw_1_x": {
		type: "bitmap",
		asset: "_devil_claw_1_x",
		scale: 2,
		position: [-6.15, -8.35],
	},
	"_devil_claw_3_x": {
		type: "bitmap",
		asset: "_devil_claw_3_x",
		scale: 2,
		position: [-11.3, -7.8],
	},
	"_devil_claw_2_x": {
		type: "bitmap",
		asset: "_devil_claw_2_x",
		scale: 2,
		position: [-9.3, -7.7],
	},
	"_devil_moutch_1_x": {
		type: "bitmap",
		asset: "_devil_moutch_1_x",
		scale: 2,
		position: [-15.65, -9.2],
	},
	"_devil_moutch_flap": {
		type: "movieclip",
		fps: 30,
		totalFrames: 13,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_devil_moithflap_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.646, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.646, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.437, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 11,
						classname: "_devil_moithflap_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.927, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.927, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.437, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_devil_moithflap_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.646, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.646, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_devil_moutch_flapout": {
		type: "movieclip",
		fps: 30,
		totalFrames: 12,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_devil_moithflap_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.646, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.646, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.452, 0], [0.62, 0.784], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_devil_moithflap_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.224, tx: 0, ty: -0.5},
						transform: [0, -0.5, 1, 0.224, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.303, 0.633], [0.633, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 11,
						classname: "_devil_moutch_1_x",
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
	"_devil_eye_flap": {
		type: "movieclip",
		fps: 30,
		totalFrames: 11,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_devil_eye_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.657, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.657, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_devil_eye_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.565, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.565, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_devil_eye_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.657, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.657, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.45, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.695, b: 0.523, c: -0.447, d: 0.593, tx: -3.5, ty: -0.15},
						transform: [-3.5, -0.15, 0.87, 0.743, -0.646, 0.646, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.695, b: 0.523, c: -0.358, d: 0.476, tx: -3.5, ty: -0.15},
						transform: [-3.5, -0.15, 0.87, 0.595, -0.646, 0.646, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.695, b: 0.523, c: -0.447, d: 0.593, tx: -3.5, ty: -0.15},
						transform: [-3.5, -0.15, 0.87, 0.743, -0.646, 0.646, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.45, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_devil_eye_flapout": {
		type: "movieclip",
		fps: 30,
		totalFrames: 8,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_devil_eye_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.657, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.657, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.292, 0.543], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_devil_eye_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.45, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.694, b: 0.521, c: -0.389, d: 0.518, tx: -3.55, ty: -0.2},
						transform: [-3.55, -0.2, 0.868, 0.647, -0.644, 0.644, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.292, 0.543], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.799, b: 0.602, c: -0.602, d: 0.799, tx: -3.5, ty: -0.4},
						transform: [-3.5, -0.4, 1, 1, -0.646, 0.646, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.45, 0], [0.6, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_devil_eye_flapflip": {
		type: "movieclip",
		fps: 30,
		totalFrames: 11,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_devil_eye_bg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.644, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.644, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.632, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_devil_eye_bg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.513, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.513, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.632, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_devil_eye_bg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.644, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.644, 0, 0, 0],
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
						to: 4,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.603, b: 0.798, c: -0.814, d: 0.615, tx: 0, ty: 0.35},
						transform: [0, 0.35, 1, 1.02, -0.924, 0.924, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.632, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.603, b: 0.798, c: -0.555, d: 0.419, tx: 0, ty: 0.35},
						transform: [0, 0.35, 1, 0.695, -0.924, 0.924, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.632, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.603, b: 0.798, c: -0.814, d: 0.615, tx: 0, ty: 0.35},
						transform: [0, 0.35, 1, 1.02, -0.924, 0.924, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_devil_eye_flapoutflip": {
		type: "movieclip",
		fps: 30,
		totalFrames: 8,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_devil_eye_bg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.644, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.644, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.632, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_devil_eye_bg2_x",
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
						to: 6,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.603, b: 0.798, c: -0.814, d: 0.615, tx: 0, ty: 0.35},
						transform: [0, 0.35, 1, 1.02, -0.924, 0.924, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.632, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_devil_pupilasd_x",
						instancename: "",
						matrix: {a: 0.603, b: 0.798, c: -0.843, d: 0.637, tx: -0.05, ty: 0.4},
						transform: [-0.05, 0.4, 1, 1.057, -0.924, 0.924, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_devil_forearm_god_1_x": {
		type: "bitmap",
		asset: "_devil_forearm_god_1_x",
		scale: 2,
		position: [-7.3, -20.45],
	},
	"_devil_handpropper_x": {
		type: "bitmap",
		asset: "_devil_handpropper_x",
		scale: 2,
		position: [-6.75, -16.45],
	},
	"_devil_common_startballoonfx": {
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
						classname: "_devil_common_fx_floor",
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
						classname: "_devil_common_fx_rays",
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
	"_devil_common_startballoonfx_end": {
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
						classname: "_devil_common_rays",
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
						classname: "_devil_common_rays",
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
	"_devil_common_thunder_part_1_x": {
		type: "bitmap",
		asset: "_devil_common_thunder_part_1_x",
		scale: 2,
		position: [-61.1, -287.35],
	},
	"_devil_common_thunder_part_2_x": {
		type: "bitmap",
		asset: "_devil_common_thunder_part_2_x",
		scale: 2,
		position: [-61.1, -287.35],
	},
	"_devil_common_thunder_part_3_x": {
		type: "bitmap",
		asset: "_devil_common_thunder_part_3_x",
		scale: 2,
		position: [-61.1, -287.35],
	},
	"_devil_common_thunder_part_5_x": {
		type: "bitmap",
		asset: "_devil_common_thunder_part_5_x",
		scale: 2,
		position: [-61.1, -287.4],
	},
	"_devil_moithflap_x": {
		type: "bitmap",
		asset: "_devil_moithflap_x",
		scale: 2,
		position: [-13.7, -10.05],
	},
	"_devil_common_fx_floor": {
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
						classname: "_devil_common_startfx_floor_x",
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
						classname: "_devil_common_startfx_floor_x",
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
						classname: "_devil_common_startfx_floor_x",
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
	"_devil_common_fx_rays": {
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
						classname: "_devil_common_fx_rays_x",
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
						classname: "_devil_common_fx_rays_x",
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
						classname: "_devil_common_fx_rays_x",
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
	"_devil_common_rays": {
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
						classname: "_devil_common_ray",
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
						classname: "_devil_common_ray",
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
						classname: "_devil_common_ray",
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
	"_devil_common_startfx_floor_x": {
		type: "bitmap",
		asset: "_devil_common_startfx_floor_x",
		scale: 2,
		position: [-37.65, -10.95],
	},
	"_devil_common_fx_rays_x": {
		type: "bitmap",
		asset: "_devil_common_fx_rays_x",
		scale: 2,
		position: [-45.2, -71.3],
	},
	"_devil_common_ray": {
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
						classname: "_devil_common_ray_x",
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
						classname: "_devil_common_ray_x",
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
						classname: "_devil_common_ray_x",
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
						classname: "_devil_common_ray_x",
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
	"_devil_common_ray_x": {
		type: "bitmap",
		asset: "_devil_common_ray_x",
		scale: 2,
		position: [-11.65, -85.95],
	},
};
