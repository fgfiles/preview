
var starchy = {
	"starchy": {
		type: "movieclip",
		fps: 30,
		totalFrames: 102,
		labels: {air_idle: {from:0, to:3}, air_turn: {from:5, to:8}, ground_idle: {from:10, to:19}, ground_run: {from:21, to:30}, ground_stop: {from:32, to:43}, ground_stopturn: {from:45, to:58}, ground_turn: {from:60, to:68}, ground_turn_fast: {from:70, to:83}, die: {from:85, to:95}, respawn: {from:97, to:100}, },
		layers: [
			{
				name: "physics",
				keys: [
					{
						from: 0,
						to: 101,
						classname: "_starchy_body_physics",
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
				name: "balloons",
				keys: [
					{
						from: 0,
						to: 101,
						classname: "_starchy_balloons",
						instancename: "balloons",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -15.9},
						transform: [0, -15.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "starchy",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_starchy_starchy_air_flapper",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 9,
						classname: "_starchy_starchy_air_turn",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 20,
						classname: "_starchy_starchy_ground_idle",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 31,
						classname: "_starchy_starchy_ground_run",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 32,
						to: 44,
						classname: "_starchy_starchy_ground_stop",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 45,
						to: 59,
						classname: "_starchy_starchy_ground_stopandturn",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 69,
						classname: "_starchy_starchy_ground_turn",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 70,
						to: 84,
						classname: "_starchy_starchy_ground_turn_fast",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 85,
						to: 96,
						classname: "_starchy_starchy_die",
						instancename: "character",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 97,
						to: 101,
						classname: "_starchy_peppermint_respawn",
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
				name: "Layer 5",
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
						to: 95,
					},
					{
						from: 96,
						to: 96,
						actions: function(self){self.stop();},
					},
					{
						from: 97,
						to: 100,
					},
					{
						from: 101,
						to: 101,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_starchy_body_physics": {
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
						classname: "_starchy_box_physics",
						instancename: "",
						matrix: {a: 0.232, b: 0, c: 0, d: 0.132, tx: 0, ty: 20.1},
						transform: [0, 20.1, 0.232, 0.132, 0, 0, 0],
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
						classname: "_starchy_circle_physics",
						instancename: "",
						matrix: {a: 0.367, b: 0, c: 0, d: 0.367, tx: 1.1, ty: -53.45},
						transform: [1.1, -53.45, 0.367, 0.367, 0, 0, 0],
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
						classname: "_starchy_circle_physics",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 0.5, tx: 1.5, ty: -9.2},
						transform: [1.5, -9.2, 0.5, 0.5, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_starchy_balloons": {
		type: "movieclip",
		fps: 30,
		totalFrames: 268,
		labels: {idle_left_2: {from:13, to:38}, turn_right_2: {from:40, to:52}, idle_right_2: {from:54, to:79}, turn_left_2: {from:81, to:93}, puncture_left: {from:95, to:124}, puncture_right: {from:126, to:155}, idle_1: {from:157, to:184}, puncture_center: {from:186, to:207}, respawn: {from:209, to:266}, },
		layers: [
			{
				name: "string_x",
				keys: [
					{
						from: 0,
						to: 208,
					},
					{
						from: 209,
						to: 243,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.862, b: 0.504, c: -0.504, d: 0.862, tx: 5.95, ty: -12.3},
						transform: [5.95, -12.3, 0.999, 0.999, -0.529, 0.529, NaN],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 244,
						to: 252,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.236, b: 0.496, c: -0.496, d: 0.236, tx: -6.85, ty: 0.2},
						transform: [-6.85, 0.2, 0.55, 0.55, -1.126, 1.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.49], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 253,
						to: 258,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.862, b: 0.504, c: -0.555, d: 0.949, tx: 3.15, ty: -13.15},
						transform: [3.15, -13.15, 0.999, 1.1, -0.529, 0.529, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 259,
						to: 266,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.862, b: 0.504, c: -0.438, d: 0.748, tx: 7.8, ty: -10.6},
						transform: [7.8, -10.6, 0.999, 0.867, -0.529, 0.529, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 267,
						to: 267,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.862, b: 0.504, c: -0.504, d: 0.862, tx: 5.95, ty: -12.3},
						transform: [5.95, -12.3, 0.999, 0.999, -0.529, 0.529, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "string_x",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.866, b: 0.5, c: -0.5, d: 0.866, tx: 5.85, ty: -12.45},
						transform: [5.85, -12.45, 1, 1, -0.524, 0.524, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 17,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.862, b: 0.504, c: -0.504, d: 0.862, tx: 5.95, ty: -12.3},
						transform: [5.95, -12.3, 0.999, 0.999, -0.529, 0.529, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.235, 0.574], [0.532, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 30,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.862, b: 0.507, c: -0.507, d: 0.862, tx: 5.85, ty: -12.45},
						transform: [5.85, -12.45, 1, 1, -0.532, 0.532, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.513, 0], [0.449, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 38,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.866, b: 0.5, c: -0.5, d: 0.866, tx: 5.85, ty: -12.45},
						transform: [5.85, -12.45, 1, 1, -0.524, 0.524, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.561, 0], [0.698, 0.605], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 39,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.862, b: 0.504, c: -0.504, d: 0.862, tx: 5.95, ty: -12.3},
						transform: [5.95, -12.3, 0.999, 0.999, -0.529, 0.529, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 40,
						to: 45,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.862, b: 0.504, c: -0.504, d: 0.862, tx: 5.95, ty: -12.3},
						transform: [5.95, -12.3, 0.999, 0.999, -0.529, 0.529, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.783, 0.476], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 53,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.802, b: 0.595, c: -0.595, d: 0.802, tx: 5.85, ty: -11.95},
						transform: [5.85, -11.95, 0.999, 0.999, -0.638, 0.638, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.281, 0.449], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 58,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.862, b: 0.504, c: -0.504, d: 0.862, tx: 5.95, ty: -12.3},
						transform: [5.95, -12.3, 0.999, 0.999, -0.529, 0.529, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.235, 0.574], [0.532, 1], [1, 1], ],
						}
					},
					{
						from: 59,
						to: 71,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.872, b: 0.489, c: -0.489, d: 0.872, tx: 5.8, ty: -12.45},
						transform: [5.8, -12.45, 1, 1, -0.512, 0.512, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.513, 0], [0.449, 1], [1, 1], ],
						}
					},
					{
						from: 72,
						to: 79,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.883, b: 0.47, c: -0.47, d: 0.883, tx: 5.85, ty: -12.45},
						transform: [5.85, -12.45, 1, 1, -0.49, 0.49, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.561, 0], [0.698, 0.605], [1, 1], ],
						}
					},
					{
						from: 80,
						to: 80,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.862, b: 0.504, c: -0.504, d: 0.862, tx: 5.95, ty: -12.3},
						transform: [5.95, -12.3, 0.999, 0.999, -0.529, 0.529, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 81,
						to: 86,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.862, b: 0.504, c: -0.504, d: 0.862, tx: 5.95, ty: -12.3},
						transform: [5.95, -12.3, 0.999, 0.999, -0.529, 0.529, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.048], [0.779, 0.449], [1, 1], ],
						}
					},
					{
						from: 87,
						to: 93,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.84, b: 0.537, c: -0.537, d: 0.84, tx: 5.95, ty: -12.25},
						transform: [5.95, -12.25, 0.997, 0.997, -0.568, 0.568, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.534], [0.598, 0.986], [1, 1], ],
						}
					},
					{
						from: 94,
						to: 94,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.862, b: 0.504, c: -0.504, d: 0.862, tx: 5.95, ty: -12.3},
						transform: [5.95, -12.3, 0.999, 0.999, -0.529, 0.529, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.235, 0.574], [0.532, 1], [1, 1], ],
						}
					},
					{
						from: 95,
						to: 97,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.862, b: 0.504, c: -0.504, d: 0.862, tx: 5.95, ty: -12.3},
						transform: [5.95, -12.3, 0.999, 0.999, -0.529, 0.529, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.235, 0.574], [0.532, 1], [1, 1], ],
						}
					},
					{
						from: 98,
						to: 109,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.657, b: 0.753, c: -0.868, d: 0.757, tx: 5.9, ty: -12.3},
						transform: [5.9, -12.3, 1, 1.152, -0.853, 0.853, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.567, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 110,
						to: 117,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.943, b: -0.333, c: 0.333, d: 0.943, tx: 4.95, ty: -14.85},
						transform: [4.95, -14.85, 1, 1, 0.34, -0.34, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.574, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 118,
						to: 124,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.997, b: -0.046, c: 0.046, d: 0.997, tx: 5.5, ty: -14.35},
						transform: [5.5, -14.35, 0.998, 0.998, 0.046, -0.046, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 125,
						to: 125,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.988, b: -0.146, c: 0.146, d: 0.988, tx: 5.45, ty: -14.3},
						transform: [5.45, -14.3, 0.999, 0.999, 0.147, -0.147, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 126,
						to: 208,
					},
					{
						from: 209,
						to: 243,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: -0.919, b: 0.395, c: 0.395, d: 0.919, tx: -3.6, ty: -12.15},
						transform: [-3.6, -12.15, 1, 1, 0.406, 2.735, NaN],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 244,
						to: 252,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: -0.171, b: 0.56, c: 0.56, d: 0.171, tx: 10.85, ty: -3.35},
						transform: [10.85, -3.35, 0.585, 0.585, 1.274, 1.868, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.49], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 253,
						to: 258,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: -0.919, b: 0.395, c: 0.48, d: 1.117, tx: 4.55, ty: -9.45},
						transform: [4.55, -9.45, 1, 1.216, 0.406, 2.735, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 259,
						to: 266,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: -0.903, b: 0.43, c: 0.43, d: 0.903, tx: -3.15, ty: -8.7},
						transform: [-3.15, -8.7, 1, 1, 0.445, 2.697, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 267,
						to: 267,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: -0.919, b: 0.395, c: 0.395, d: 0.919, tx: -3.6, ty: -12.15},
						transform: [-3.6, -12.15, 1, 1, 0.406, 2.735, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "string_x",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: -0.932, b: 0.363, c: 0.363, d: 0.932, tx: -3.6, ty: -12.15},
						transform: [-3.6, -12.15, 1, 1, 0.371, 2.77, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 25,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: -0.919, b: 0.395, c: 0.395, d: 0.919, tx: -3.6, ty: -12.15},
						transform: [-3.6, -12.15, 1, 1, 0.406, 2.735, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.513, 0], [0.449, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 38,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: -0.932, b: 0.363, c: 0.363, d: 0.932, tx: -3.6, ty: -12.15},
						transform: [-3.6, -12.15, 1, 1, 0.371, 2.77, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.513, 0], [0.449, 1], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 39,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: -0.919, b: 0.395, c: 0.395, d: 0.919, tx: -3.6, ty: -12.15},
						transform: [-3.6, -12.15, 1, 1, 0.406, 2.735, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 40,
						to: 45,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: -0.919, b: 0.395, c: 0.395, d: 0.919, tx: -3.6, ty: -12.15},
						transform: [-3.6, -12.15, 1, 1, 0.406, 2.735, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.783, 0.476], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 53,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: -0.912, b: 0.41, c: 0.41, d: 0.912, tx: -3.65, ty: -12.15},
						transform: [-3.65, -12.15, 1, 1, 0.423, 2.719, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.281, 0.449], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 66,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: -0.944, b: 0.331, c: 0.331, d: 0.944, tx: -3.6, ty: -12.15},
						transform: [-3.6, -12.15, 1, 1, 0.337, 2.804, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.513, 0], [0.449, 1], [1, 1], ],
						}
					},
					{
						from: 67,
						to: 79,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: -0.893, b: 0.449, c: 0.449, d: 0.893, tx: -3.6, ty: -12.15},
						transform: [-3.6, -12.15, 1, 1, 0.466, 2.675, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.513, 0], [0.449, 1], [1, 1], ],
						}
					},
					{
						from: 80,
						to: 80,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: -0.944, b: 0.331, c: 0.331, d: 0.944, tx: -3.6, ty: -12.15},
						transform: [-3.6, -12.15, 1, 1, 0.337, 2.804, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 81,
						to: 86,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: -0.944, b: 0.331, c: 0.331, d: 0.944, tx: -3.6, ty: -12.15},
						transform: [-3.6, -12.15, 1, 1, 0.337, 2.804, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.048], [0.779, 0.449], [1, 1], ],
						}
					},
					{
						from: 87,
						to: 93,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: -0.884, b: 0.465, c: 0.465, d: 0.884, tx: -3.6, ty: -12.1},
						transform: [-3.6, -12.1, 0.999, 0.999, 0.484, 2.657, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.534], [0.598, 0.986], [1, 1], ],
						}
					},
					{
						from: 94,
						to: 94,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: -0.919, b: 0.395, c: 0.395, d: 0.919, tx: -3.6, ty: -12.15},
						transform: [-3.6, -12.15, 1, 1, 0.406, 2.735, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.513, 0], [0.449, 1], [1, 1], ],
						}
					},
					{
						from: 95,
						to: 125,
					},
					{
						from: 126,
						to: 128,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.909, b: -0.413, c: 0.524, d: 1.153, tx: -3.15, ty: -12.45},
						transform: [-3.15, -12.45, 0.998, 1.267, 0.427, -0.427, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.513, 0], [0.449, 1], [1, 1], ],
						}
					},
					{
						from: 129,
						to: 140,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.636, b: -0.769, c: 0.976, d: 0.807, tx: -3.2, ty: -12.45},
						transform: [-3.2, -12.45, 0.998, 1.267, 0.88, -0.88, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.513, 0], [0.449, 1], [1, 1], ],
						}
					},
					{
						from: 141,
						to: 148,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.938, b: 0.343, c: -0.343, d: 0.938, tx: -2.25, ty: -10.85},
						transform: [-2.25, -10.85, 0.998, 0.998, -0.351, 0.351, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.513, 0], [0.449, 1], [1, 1], ],
						}
					},
					{
						from: 149,
						to: 155,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.976, b: -0.209, c: 0.209, d: 0.976, tx: 5.85, ty: -14.3},
						transform: [5.85, -14.3, 0.999, 0.999, 0.211, -0.211, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.513, 0], [0.449, 1], [1, 1], ],
						}
					},
					{
						from: 156,
						to: 156,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.988, b: -0.146, c: 0.146, d: 0.988, tx: 5.45, ty: -14.3},
						transform: [5.45, -14.3, 0.999, 0.999, 0.147, -0.147, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 157,
						to: 167,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.993, b: 0.106, c: -0.094, d: 0.887, tx: 3.05, ty: -12.25},
						transform: [3.05, -12.25, 0.998, 0.892, -0.106, 0.106, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.455, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 168,
						to: 184,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.993, b: 0.106, c: -0.101, d: 0.953, tx: 3.05, ty: -12.35},
						transform: [3.05, -12.35, 0.998, 0.958, -0.106, 0.106, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.455, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 185,
						to: 185,
						classname: "_starchy_chain",
						instancename: "",
						matrix: {a: 0.993, b: 0.106, c: -0.094, d: 0.887, tx: 3.05, ty: -12.25},
						transform: [3.05, -12.25, 0.998, 0.892, -0.106, 0.106, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 186,
						to: 208,
					},
					{
						from: 209,
						to: 243,
						classname: "_starchy_soulbase_empty",
						instancename: "balloon2",
						matrix: {a: 0.656, b: 0, c: 0, d: 0.656, tx: -12.05, ty: -46.75},
						transform: [-12.05, -46.75, 0.656, 0.656, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 244,
						to: 252,
						classname: "_starchy_soulbase",
						instancename: "balloon2",
						matrix: {a: 0.211, b: 0, c: 0, d: 0.211, tx: -4.9, ty: -8.05},
						transform: [-4.9, -8.05, 0.211, 0.211, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.49], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 253,
						to: 258,
						classname: "_starchy_soulbase",
						instancename: "balloon2",
						matrix: {a: 0.656, b: 0, c: 0, d: 0.656, tx: -13.55, ty: -55.95},
						transform: [-13.55, -55.95, 0.656, 0.656, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 259,
						to: 266,
						classname: "_starchy_soulbase",
						instancename: "balloon2",
						matrix: {a: 0.656, b: 0, c: 0, d: 0.656, tx: -13.75, ty: -43.3},
						transform: [-13.75, -43.3, 0.656, 0.656, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 267,
						to: 267,
						classname: "_starchy_soulbase",
						instancename: "balloon2",
						matrix: {a: 0.656, b: 0, c: 0, d: 0.656, tx: -12.05, ty: -46.75},
						transform: [-12.05, -46.75, 0.656, 0.656, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "balloonbase",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_starchy_soulbase",
						instancename: "balloon2",
						matrix: {a: 0.656, b: 0, c: 0, d: 0.656, tx: -12.05, ty: -46.75},
						transform: [-12.05, -46.75, 0.656, 0.656, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 25,
						classname: "_starchy_soulbase",
						instancename: "balloon2",
						matrix: {a: 0.656, b: 0, c: 0, d: 0.656, tx: -12.05, ty: -46.75},
						transform: [-12.05, -46.75, 0.656, 0.656, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.567, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 38,
						classname: "_starchy_soulbase",
						instancename: "balloon2",
						matrix: {a: 0.656, b: 0, c: 0, d: 0.656, tx: -14.05, ty: -48.75},
						transform: [-14.05, -48.75, 0.656, 0.656, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.567, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 39,
						classname: "_starchy_soulbase",
						instancename: "balloon2",
						matrix: {a: 0.656, b: 0, c: 0, d: 0.656, tx: -12.05, ty: -46.75},
						transform: [-12.05, -46.75, 0.656, 0.656, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 40,
						to: 45,
						classname: "_starchy_soulbase",
						instancename: "balloon2",
						matrix: {a: 0.656, b: 0, c: 0, d: 0.656, tx: -12.05, ty: -46.75},
						transform: [-12.05, -46.75, 0.656, 0.656, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.556, 0], [0.762, 0.521], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_starchy_soulbase",
						instancename: "balloon2",
						matrix: {a: 0.669, b: 0, c: 0, d: 0.669, tx: -12.65, ty: -47.3},
						transform: [-12.65, -47.3, 0.669, 0.669, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.33, 0.332], [0.664, 0.666], [1, 1], ],
						}
					},
					{
						from: 47,
						to: 87,
					},
					{
						from: 88,
						to: 93,
						classname: "_starchy_soulbase",
						instancename: "balloon2",
						matrix: {a: 0.666, b: 0, c: 0, d: 0.666, tx: -14.2, ty: -47.25},
						transform: [-14.2, -47.25, 0.666, 0.666, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0.5], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 94,
						to: 94,
						classname: "_starchy_soulbase",
						instancename: "balloon2",
						matrix: {a: 0.656, b: 0, c: 0, d: 0.656, tx: -12.05, ty: -46.75},
						transform: [-12.05, -46.75, 0.656, 0.656, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.567, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 95,
						to: 156,
						classname: "_starchy_soulbase_empty",
						instancename: "balloon2",
						matrix: {a: 0.656, b: 0, c: 0, d: 0.656, tx: -12.05, ty: -46.75},
						transform: [-12.05, -46.75, 0.656, 0.656, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 157,
						to: 185,
						classname: "_starchy_soulbase_empty",
						instancename: "balloon2",
						matrix: {a: 0.656, b: 0, c: 0, d: 0.656, tx: -12.05, ty: -46.75},
						transform: [-12.05, -46.75, 0.656, 0.656, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 186,
						to: 208,
						classname: "_starchy_soulbase_empty",
						instancename: "balloon2",
						matrix: {a: 0.656, b: 0, c: 0, d: 0.656, tx: -12.05, ty: -46.75},
						transform: [-12.05, -46.75, 0.656, 0.656, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 209,
						to: 243,
						classname: "_starchy_soulbase_empty",
						instancename: "balloon1",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: 16.75, ty: -48.05},
						transform: [16.75, -48.05, 0.678, 0.678, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 244,
						to: 252,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.219, b: 0, c: 0, d: 0.219, tx: 8.6, ty: -7.25},
						transform: [8.6, -7.25, 0.219, 0.219, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.49], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 253,
						to: 258,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: 19.75, ty: -55.3},
						transform: [19.75, -55.3, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 259,
						to: 266,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: 16.3, ty: -42.95},
						transform: [16.3, -42.95, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 267,
						to: 267,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: 16.75, ty: -48.05},
						transform: [16.75, -48.05, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "balloonbase",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: 16.8, ty: -47.45},
						transform: [16.8, -47.45, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 17,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: 16.75, ty: -48.05},
						transform: [16.75, -48.05, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.239, 0.555], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 30,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: 16.8, ty: -47.45},
						transform: [16.8, -47.45, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.567, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 38,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: 17.55, ty: -49.45},
						transform: [17.55, -49.45, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.574, 0], [0.753, 0.57], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 39,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: 16.9, ty: -48.05},
						transform: [16.9, -48.05, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 40,
						to: 45,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: 16.9, ty: -48.05},
						transform: [16.9, -48.05, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.556, 0], [0.762, 0.521], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 52,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.664, b: 0, c: 0, d: 0.664, tx: 20.2, ty: -48.05},
						transform: [20.2, -48.05, 0.664, 0.664, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.432], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 53,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.65, b: 0, c: 0, d: 0.65, tx: 16.85, ty: -46.85},
						transform: [16.85, -46.85, 0.65, 0.65, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 58,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.65, b: 0, c: 0, d: 0.65, tx: 16.85, ty: -46.85},
						transform: [16.85, -46.85, 0.65, 0.65, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.239, 0.555], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 59,
						to: 71,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.65, b: 0, c: 0, d: 0.65, tx: 16.8, ty: -47.45},
						transform: [16.8, -47.45, 0.65, 0.65, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.567, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 72,
						to: 79,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.65, b: 0, c: 0, d: 0.65, tx: 17.55, ty: -49.45},
						transform: [17.55, -49.45, 0.65, 0.65, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.574, 0], [0.753, 0.57], [1, 1], ],
						}
					},
					{
						from: 80,
						to: 80,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.65, b: 0, c: 0, d: 0.65, tx: 16.85, ty: -46.85},
						transform: [16.85, -46.85, 0.65, 0.65, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 81,
						to: 87,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.65, b: 0, c: 0, d: 0.65, tx: 16.85, ty: -46.85},
						transform: [16.85, -46.85, 0.65, 0.65, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.746, 0.521], [1, 1], ],
						}
					},
					{
						from: 88,
						to: 93,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.665, b: 0, c: 0, d: 0.665, tx: 18.55, ty: -47.5},
						transform: [18.55, -47.5, 0.665, 0.665, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0.5], [0.592, 1], [1, 1], ],
						}
					},
					{
						from: 94,
						to: 94,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: 16.9, ty: -48.05},
						transform: [16.9, -48.05, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 95,
						to: 97,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: 17.25, ty: -47.55},
						transform: [17.25, -47.55, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.239, 0.555], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 98,
						to: 109,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.655, b: 0.175, c: -0.175, d: 0.655, tx: 35.25, ty: -50.2},
						transform: [35.25, -50.2, 0.678, 0.678, -0.26, 0.26, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.567, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 110,
						to: 117,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.674, b: -0.07, c: 0.07, d: 0.674, tx: -2.6, ty: -49.45},
						transform: [-2.6, -49.45, 0.678, 0.678, 0.104, -0.104, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.574, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 118,
						to: 124,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.677, b: 0.032, c: -0.032, d: 0.677, tx: 3.55, ty: -48.05},
						transform: [3.55, -48.05, 0.678, 0.678, -0.048, 0.048, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 125,
						to: 125,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: 1.3, ty: -48.05},
						transform: [1.3, -48.05, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 126,
						to: 128,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: -11.7, ty: -46.3},
						transform: [-11.7, -46.3, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.232, 0.586], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 129,
						to: 140,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.628, b: -0.256, c: 0.256, d: 0.628, tx: -35.05, ty: -49.05},
						transform: [-35.05, -49.05, 0.678, 0.678, 0.388, -0.388, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 141,
						to: 148,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.672, b: 0.094, c: -0.094, d: 0.672, tx: 9.45, ty: -49.55},
						transform: [9.45, -49.55, 0.678, 0.678, -0.139, 0.139, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 149,
						to: 155,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.675, b: -0.068, c: 0.068, d: 0.675, tx: -1.6, ty: -48.05},
						transform: [-1.6, -48.05, 0.678, 0.678, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 156,
						to: 156,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: 1.3, ty: -48.05},
						transform: [1.3, -48.05, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 157,
						to: 167,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: 1.3, ty: -48.05},
						transform: [1.3, -48.05, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.539, 1], [1, 1], ],
						}
					},
					{
						from: 168,
						to: 184,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: 1.3, ty: -49.55},
						transform: [1.3, -49.55, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.539, 1], [1, 1], ],
						}
					},
					{
						from: 185,
						to: 185,
						classname: "_starchy_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: 1.3, ty: -48.05},
						transform: [1.3, -48.05, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 186,
						to: 208,
						classname: "_starchy_soulbase_empty",
						instancename: "balloon1",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: 1.3, ty: -48.05},
						transform: [1.3, -48.05, 0.678, 0.678, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 209,
						to: 267,
					},
				]
			},
			{
				name: "balloonbase",
				keys: [
					{
						from: 0,
						to: 46,
					},
					{
						from: 47,
						to: 52,
						classname: "_starchy_soulbase",
						instancename: "balloon2",
						matrix: {a: 0.669, b: 0, c: 0, d: 0.669, tx: -12.65, ty: -47.3},
						transform: [-12.65, -47.3, 0.669, 0.669, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.226, 0.493], [0.568, 1], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 53,
						classname: "_starchy_soulbase",
						instancename: "balloon2",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: -11.45, ty: -47.9},
						transform: [-11.45, -47.9, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 66,
						classname: "_starchy_soulbase",
						instancename: "balloon2",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: -11.45, ty: -47.9},
						transform: [-11.45, -47.9, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.567, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 67,
						to: 79,
						classname: "_starchy_soulbase",
						instancename: "balloon2",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: -14, ty: -48.7},
						transform: [-14, -48.7, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.567, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 80,
						to: 80,
						classname: "_starchy_soulbase",
						instancename: "balloon2",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: -11.45, ty: -47.9},
						transform: [-11.45, -47.9, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 81,
						to: 86,
						classname: "_starchy_soulbase",
						instancename: "balloon2",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: -11.45, ty: -47.9},
						transform: [-11.45, -47.9, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0], [0.74, 0.482], [1, 1], ],
						}
					},
					{
						from: 87,
						to: 87,
						classname: "_starchy_soulbase",
						instancename: "balloon2",
						matrix: {a: 0.669, b: 0, c: 0, d: 0.669, tx: -13.7, ty: -47.4},
						transform: [-13.7, -47.4, 0.669, 0.669, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.334, 0.333], [0.668, 0.666], [1, 1], ],
						}
					},
					{
						from: 88,
						to: 94,
					},
					{
						from: 95,
						to: 156,
					},
					{
						from: 157,
						to: 208,
					},
					{
						from: 209,
						to: 267,
					},
				]
			},
			{
				name: "explotion",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 94,
					},
					{
						from: 95,
						to: 125,
						classname: "_starchy_balloon_explotion",
						instancename: "",
						matrix: {a: 0.854, b: 0, c: 0, d: -0.854, tx: -12.5, ty: -45.1},
						transform: [-12.5, -45.1, 0.854, 0.854, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 126,
						to: 156,
						classname: "_starchy_balloon_explotion",
						instancename: "",
						matrix: {a: 0.858, b: 0, c: 0, d: -0.858, tx: 16.8, ty: -45.3},
						transform: [16.8, -45.3, 0.858, 0.858, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 157,
						to: 185,
					},
					{
						from: 186,
						to: 208,
						classname: "_starchy_balloon_explotion",
						instancename: "",
						matrix: {a: 0.882, b: 0, c: 0, d: -0.882, tx: 1.4, ty: -45.6},
						transform: [1.4, -45.6, 0.882, 0.882, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 209,
						to: 267,
					},
				]
			},
			{
				name: "hittablebox",
				keys: [
					{
						from: 0,
						to: 185,
						classname: "_starchy_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.46, tx: 2.5, ty: -38.55},
						transform: [2.5, -38.55, 0.46, 0.46, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 186,
						to: 208,
					},
					{
						from: 209,
						to: 267,
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 38,
					},
					{
						from: 39,
						to: 39,
						actions: function(self){self.gotoAndPlay("idle_left_2");},
					},
					{
						from: 40,
						to: 52,
					},
					{
						from: 53,
						to: 53,
						actions: function(self){self.gotoAndPlay("idle_right_2");},
					},
					{
						from: 54,
						to: 79,
					},
					{
						from: 80,
						to: 80,
						actions: function(self){self.gotoAndPlay("idle_right_2");},
					},
					{
						from: 81,
						to: 93,
					},
					{
						from: 94,
						to: 94,
						actions: function(self){self.gotoAndPlay("idle_left_2");},
					},
					{
						from: 95,
						to: 124,
					},
					{
						from: 125,
						to: 125,
						actions: function(self){self.gotoAndPlay("idle_1");},
					},
					{
						from: 126,
						to: 155,
					},
					{
						from: 156,
						to: 156,
						actions: function(self){self.gotoAndPlay("idle_1");},
					},
					{
						from: 157,
						to: 184,
					},
					{
						from: 185,
						to: 185,
						actions: function(self){self.gotoAndPlay("idle_1");},
					},
					{
						from: 186,
						to: 207,
					},
					{
						from: 208,
						to: 208,
						actions: function(self){self.stop();},
					},
					{
						from: 209,
						to: 266,
					},
					{
						from: 267,
						to: 267,
						actions: function(self){self.gotoAndPlay("idle_left_2");},
					},
				]
			},
		]
	},
	"_starchy_starchy_air_flapper": {
		type: "movieclip",
		fps: 30,
		totalFrames: 35,
		labels: {},
		layers: [
			{
				name: "arm2",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_starchy_starchy_arm_compo",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -20.15, ty: -0.3},
						transform: [-20.15, -0.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 33,
						classname: "_starchy_starchy_arm_compo",
						instancename: "arm2",
						matrix: {a: -1.024, b: -0.116, c: -0.112, d: 0.994, tx: -20.35, ty: -1.05},
						transform: [-20.35, -1.05, 1.03, 1, -0.113, -3.029, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_starchy_starchy_arm_compo",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -20.15, ty: -0.3},
						transform: [-20.15, -0.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_starchy_leg_air2",
						instancename: "",
						matrix: {a: 0.485, b: 0.874, c: -0.874, d: 0.485, tx: -8.8, ty: 16.3},
						transform: [-8.8, 16.3, 1, 1, -1.064, 1.064, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 33,
						classname: "_starchy_leg_air2",
						instancename: "",
						matrix: {a: 0.458, b: 0.889, c: -0.889, d: 0.458, tx: -8.2, ty: 15.3},
						transform: [-8.2, 15.3, 1, 1, -1.095, 1.095, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_starchy_leg_air2",
						instancename: "",
						matrix: {a: 0.485, b: 0.874, c: -0.874, d: 0.485, tx: -8.8, ty: 16.3},
						transform: [-8.8, 16.3, 1, 1, -1.064, 1.064, NaN],
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
						to: 12,
						classname: "_starchy_starchy_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.4, ty: -9.4},
						transform: [1.4, -9.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 33,
						classname: "_starchy_starchy_body_x",
						instancename: "",
						matrix: {a: 1, b: 0.03, c: -0.03, d: 1, tx: 1.45, ty: -9.45},
						transform: [1.45, -9.45, 1, 1, -0.03, 0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_starchy_starchy_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.4, ty: -9.4},
						transform: [1.4, -9.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_starchy_leg_air",
						instancename: "",
						matrix: {a: 0.559, b: 0.829, c: -0.829, d: 0.559, tx: 7.95, ty: 17.55},
						transform: [7.95, 17.55, 1, 1, -0.977, 0.977, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 33,
						classname: "_starchy_leg_air",
						instancename: "",
						matrix: {a: 0.534, b: 0.845, c: -0.845, d: 0.534, tx: 6.1, ty: 17.9},
						transform: [6.1, 17.9, 1, 1, -1.007, 1.007, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_starchy_leg_air",
						instancename: "",
						matrix: {a: 0.559, b: 0.829, c: -0.829, d: 0.559, tx: 7.95, ty: 17.55},
						transform: [7.95, 17.55, 1, 1, -0.977, 0.977, NaN],
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
						to: 12,
						classname: "_starchy_starchy_eye_compo",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.5, ty: -17.7},
						transform: [-13.5, -17.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 33,
						classname: "_starchy_starchy_eye_compo",
						instancename: "eye2",
						matrix: {a: -1, b: -0.03, c: -0.03, d: 1, tx: -15.4, ty: -18.25},
						transform: [-15.4, -18.25, 1, 1, -0.03, -3.111, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_starchy_starchy_eye_compo",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.5, ty: -17.7},
						transform: [-13.5, -17.7, 1, 1, 0, 3.142, NaN],
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
						to: 12,
						classname: "_starchy_starchy_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6, ty: -17.7},
						transform: [6, -17.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 33,
						classname: "_starchy_starchy_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0.03, c: -0.03, d: 1, tx: 4.3, ty: -17.65},
						transform: [4.3, -17.65, 1, 1, -0.03, 0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_starchy_starchy_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6, ty: -17.7},
						transform: [6, -17.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "starchy_mouth_compo",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_starchy_starchy_mouth_compo",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.4, ty: -6.9},
						transform: [-5.4, -6.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 33,
						classname: "_starchy_starchy_mouth_compo",
						instancename: "mouth",
						matrix: {a: 0.972, b: 0.029, c: -0.03, d: 1, tx: -7.95, ty: -7.2},
						transform: [-7.95, -7.2, 0.973, 1, -0.03, 0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_starchy_starchy_mouth_compo",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.4, ty: -6.9},
						transform: [-5.4, -6.9, 1, 1, 0, 0, 0],
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
						to: 12,
						classname: "_starchy_starchy_arm_compo",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.95, ty: 0.8},
						transform: [24.95, 0.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 33,
						classname: "_starchy_starchy_arm_compo",
						instancename: "arm1",
						matrix: {a: 1.081, b: -0.057, c: 0.052, d: 0.999, tx: 23.2, ty: 2.9},
						transform: [23.2, 2.9, 1.083, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_starchy_starchy_arm_compo",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.95, ty: 0.8},
						transform: [24.95, 0.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hat",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.2, ty: -33.7},
						transform: [7.2, -33.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 33,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 1, b: 0.008, c: -0.008, d: 1, tx: 7.85, ty: -33.8},
						transform: [7.85, -33.8, 1, 1, -0.008, 0.008, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.2, ty: -33.7},
						transform: [7.2, -33.7, 1, 1, 0, 0, 0],
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
						to: 33,
						classname: "_starchy_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.57, tx: -0.5, ty: -2.05},
						transform: [-0.5, -2.05, 0.46, 0.57, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 34,
						to: 34,
						classname: "_starchy_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.57, tx: -0.5, ty: -2.05},
						transform: [-0.5, -2.05, 0.46, 0.57, 0, 0, 0],
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
						to: 34,
						classname: "_starchy_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.18, tx: 1, ty: 22},
						transform: [1, 22, 0.46, 0.18, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_starchy_starchy_air_turn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 14,
		labels: {},
		layers: [
			{
				name: "arm2",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_starchy_starchy_arm_compo",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -20.15, ty: -0.3},
						transform: [-20.15, -0.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_starchy_starchy_arm_compo",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -27.2, ty: -0.45},
						transform: [-27.2, -0.45, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_starchy_starchy_arm_compo",
						instancename: "arm2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 28.25, ty: -3.1},
						transform: [28.25, -3.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_arm_compo",
						instancename: "arm2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 20.35, ty: -0.3},
						transform: [20.35, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_starchy_leg_air2",
						instancename: "",
						matrix: {a: 0.485, b: 0.874, c: -0.874, d: 0.485, tx: -8.8, ty: 16.3},
						transform: [-8.8, 16.3, 1, 1, -1.064, 1.064, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_starchy_leg_air2",
						instancename: "",
						matrix: {a: 0.938, b: 0.195, c: -0.204, d: 0.979, tx: -7.3, ty: 13.75},
						transform: [-7.3, 13.75, 0.958, 1, -0.205, 0.205, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_starchy_leg_air2",
						instancename: "",
						matrix: {a: -0.979, b: 0.204, c: 0.174, d: 0.839, tx: 7.35, ty: 14},
						transform: [7.35, 14, 1, 0.857, 0.205, 2.937, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_leg_air2",
						instancename: "",
						matrix: {a: -0.485, b: 0.874, c: 0.874, d: 0.485, tx: 9, ty: 16.3},
						transform: [9, 16.3, 1, 1, 1.064, 2.077, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_starchy_starchy_body_turn",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.4, ty: -9.4},
						transform: [1.4, -9.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_body_turn",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.35, ty: -9.4},
						transform: [-1.35, -9.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_starchy_leg_air",
						instancename: "",
						matrix: {a: 0.559, b: 0.829, c: -0.829, d: 0.559, tx: 7.95, ty: 17.55},
						transform: [7.95, 17.55, 1, 1, -0.977, 0.977, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_starchy_leg_air",
						instancename: "",
						matrix: {a: 0.874, b: 0.485, c: -0.397, d: 0.715, tx: 13.3, ty: 15.6},
						transform: [13.3, 15.6, 1, 0.818, -0.507, 0.507, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_starchy_leg_air",
						instancename: "",
						matrix: {a: -0.907, b: 0.358, c: 0.337, d: 0.854, tx: -13.6, ty: 14.35},
						transform: [-13.6, 14.35, 0.975, 0.918, 0.376, 2.766, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_leg_air",
						instancename: "",
						matrix: {a: -0.559, b: 0.829, c: 0.829, d: 0.559, tx: -7.75, ty: 17.55},
						transform: [-7.75, 17.55, 1, 1, 0.977, 2.164, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye2",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_starchy_starchy_eye_compo",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.5, ty: -17.7},
						transform: [-13.5, -17.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_starchy_starchy_eye_compo",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -10.3, ty: -16.4},
						transform: [-10.3, -16.4, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_starchy_starchy_eye_compo",
						instancename: "eye2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.7, ty: -15.95},
						transform: [11.7, -15.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_eye_compo",
						instancename: "eye2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 13.7, ty: -17.7},
						transform: [13.7, -17.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye1",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_starchy_starchy_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6, ty: -17.7},
						transform: [6, -17.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_starchy_starchy_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.7, ty: -16.4},
						transform: [11.7, -16.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_starchy_starchy_eye_compo",
						instancename: "eye1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -10.3, ty: -15.95},
						transform: [-10.3, -15.95, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_eye_compo",
						instancename: "eye1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -5.8, ty: -17.7},
						transform: [-5.8, -17.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "starchy_mouth_compo",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_starchy_starchy_mouth_compo",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.4, ty: -6.9},
						transform: [-5.4, -6.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_starchy_starchy_mouth_compo",
						instancename: "mouth",
						matrix: {a: 1.097, b: -0.057, c: 0.051, d: 0.999, tx: 0.45, ty: -5.5},
						transform: [0.45, -5.5, 1.098, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_starchy_starchy_mouth_compo",
						instancename: "mouth",
						matrix: {a: -1.111, b: 0.029, c: 0, d: 1, tx: 1.6, ty: -5.35},
						transform: [1.6, -5.35, 1.112, 1, 0, 3.115, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_mouth_compo",
						instancename: "mouth",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 5.6, ty: -6.9},
						transform: [5.6, -6.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm1",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_starchy_starchy_arm_compo",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.95, ty: 0.8},
						transform: [24.95, 0.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_starchy_starchy_arm_compo",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 28.9, ty: -2.65},
						transform: [28.9, -2.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_starchy_starchy_arm_compo",
						instancename: "arm1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -27.05, ty: -0.4},
						transform: [-27.05, -0.4, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_arm_compo",
						instancename: "arm1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -24.75, ty: 0.8},
						transform: [-24.75, 0.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "hat",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.2, ty: -33.7},
						transform: [7.2, -33.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 0.877, b: -0.099, c: 0.113, d: 0.994, tx: 7, ty: -36.6},
						transform: [7, -36.6, 0.883, 1, 0.113, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 12,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: -0.819, b: -0.114, c: -0.138, d: 0.99, tx: -2.7, ty: -36.8},
						transform: [-2.7, -36.8, 0.827, 1, -0.139, -3.003, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -7, ty: -33.7},
						transform: [-7, -33.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
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
						classname: "_starchy_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.38, tx: 1, ty: -13},
						transform: [1, -13, 0.46, 0.38, 0, 0, 0],
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
						classname: "_starchy_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.18, tx: 1, ty: 22},
						transform: [1, 22, 0.46, 0.18, 0, 0, 0],
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
	"_starchy_starchy_ground_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {},
		layers: [
			{
				name: "arm2",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -20.15, ty: -0.3},
						transform: [-20.15, -0.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: -0.994, b: -0.108, c: -0.096, d: 0.881, tx: -20.15, ty: 0.4},
						transform: [-20.15, 0.4, 1, 0.886, -0.108, -3.033, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -20.15, ty: -0.3},
						transform: [-20.15, -0.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "shoe",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -9.5, ty: 25.35},
						transform: [-9.5, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -9.5, ty: 25.35},
						transform: [-9.5, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -9.5, ty: 25.35},
						transform: [-9.5, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.1, ty: 16.2},
						transform: [-8.1, 16.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.917, tx: -8.1, ty: 16.85},
						transform: [-8.1, 16.85, 1, 0.917, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.1, ty: 16.2},
						transform: [-8.1, 16.2, 1, 1, 0, 0, 0],
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
						to: 6,
						classname: "_starchy_starchy_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.4, ty: -9.4},
						transform: [1.4, -9.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_starchy_starchy_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.4, ty: -8.4},
						transform: [1.4, -8.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_starchy_starchy_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.4, ty: -9.4},
						transform: [1.4, -9.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "shoe",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.05, ty: 25.35},
						transform: [11.05, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.05, ty: 25.35},
						transform: [11.05, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.05, ty: 25.35},
						transform: [11.05, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 12.45, ty: 16.2},
						transform: [12.45, 16.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.863, tx: 12.45, ty: 17.3},
						transform: [12.45, 17.3, 1, 0.863, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 12.45, ty: 16.2},
						transform: [12.45, 16.2, 1, 1, 0, 0, 0],
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
						to: 6,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.5, ty: -17.7},
						transform: [-13.5, -17.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -14.15, ty: -16.7},
						transform: [-14.15, -16.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.5, ty: -17.7},
						transform: [-13.5, -17.7, 1, 1, 0, 3.142, NaN],
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
						to: 6,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6, ty: -17.7},
						transform: [6, -17.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5.75, ty: -16.7},
						transform: [5.75, -16.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6, ty: -17.7},
						transform: [6, -17.7, 1, 1, 0, 0, 0],
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
						to: 6,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.25, ty: -2.95},
						transform: [-5.25, -2.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.35, ty: -1.95},
						transform: [-6.35, -1.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.25, ty: -2.95},
						transform: [-5.25, -2.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "moustache",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.45, ty: -11},
						transform: [-6.45, -11, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 0.996, b: 0, c: 0, d: 1, tx: -7.55, ty: -10},
						transform: [-7.55, -10, 0.996, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.45, ty: -11},
						transform: [-6.45, -11, 1, 1, 0, 0, 0],
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
						to: 6,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.95, ty: 0.8},
						transform: [24.95, 0.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: 0.998, b: -0.07, c: 0.062, d: 0.884, tx: 24.9, ty: 1.5},
						transform: [24.9, 1.5, 1, 0.886, 0.07, -0.07, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.95, ty: 0.8},
						transform: [24.95, 0.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hat",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.2, ty: -33.7},
						transform: [7.2, -33.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 0.994, b: 0, c: 0, d: 1, tx: 6.95, ty: -32.7},
						transform: [6.95, -32.7, 0.994, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.2, ty: -33.7},
						transform: [7.2, -33.7, 1, 1, 0, 0, 0],
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
						to: 18,
						classname: "_starchy_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.57, tx: -0.5, ty: -2.05},
						transform: [-0.5, -2.05, 0.46, 0.57, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_starchy_starchy_ground_run": {
		type: "movieclip",
		fps: 30,
		totalFrames: 21,
		labels: {},
		layers: [
			{
				name: "arm2",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_starchy_arm3_x",
						instancename: "arm2",
						matrix: {a: -0.527, b: 0.85, c: -0.85, d: -0.527, tx: -22.05, ty: 7.7},
						transform: [-22.05, 7.7, 1, 1, -2.126, 2.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_starchy_arm3_x",
						instancename: "arm2",
						matrix: {a: -0.5, b: 0.866, c: -0.866, d: -0.5, tx: -23.2, ty: -0.15},
						transform: [-23.2, -0.15, 1, 1, -2.094, 2.094, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.781, 0.589], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_starchy_arm3_x",
						instancename: "arm2",
						matrix: {a: -0.527, b: 0.85, c: -0.85, d: -0.527, tx: -22.05, ty: 6.7},
						transform: [-22.05, 6.7, 1, 1, -2.126, 2.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.432], [0.614, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_starchy_arm3_x",
						instancename: "arm2",
						matrix: {a: 0.652, b: 0.758, c: -0.57, d: 0.49, tx: -21.95, ty: -2.55},
						transform: [-21.95, -2.55, 1, 0.752, -0.861, 0.861, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.758, 0.589], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_starchy_arm3_x",
						instancename: "arm2",
						matrix: {a: -0.527, b: 0.85, c: -0.85, d: -0.527, tx: -22.05, ty: 6.7},
						transform: [-22.05, 6.7, 1, 1, -2.126, 2.126, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.435, 0], [0.746, 0.421], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.45, ty: 26.55},
						transform: [-4.45, 26.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -0.139, b: -0.99, c: 0.99, d: -0.139, tx: 16.95, ty: 14.7},
						transform: [16.95, 14.7, 1, 1, 1.71, -1.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.781, 0.589], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.606, b: -0.796, c: 0.796, d: 0.606, tx: -1.35, ty: 21.65},
						transform: [-1.35, 21.65, 1, 1, 0.92, -0.92, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.268, 0.329], [0.604, 0.679], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.994, b: 0.095, c: -0.095, d: 0.994, tx: -15.3, ty: 23.4},
						transform: [-15.3, 23.4, 0.999, 0.999, -0.095, 0.095, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.189, 0.432], [0.614, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.94, b: 0.338, c: -0.338, d: 0.94, tx: -19.2, ty: 18.85},
						transform: [-19.2, 18.85, 0.999, 0.999, -0.346, 0.346, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.295, 0.604], [0.631, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.881, b: 0.473, c: -0.473, d: 0.881, tx: -22.8, ty: 18.25},
						transform: [-22.8, 18.25, 1, 1, -0.493, 0.493, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.435, 0], [0.746, 0.421], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.747, b: 0.665, c: -0.665, d: 0.747, tx: -24.7, ty: 17.4},
						transform: [-24.7, 17.4, 1, 1, -0.728, 0.728, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.758, 0.589], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.766, b: 0.64, c: -0.64, d: 0.766, tx: -16.8, ty: 25.55},
						transform: [-16.8, 25.55, 0.998, 0.998, -0.696, 0.696, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.386, 0.228], [0.711, 0.582], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.973, b: 0.222, c: -0.222, d: 0.973, tx: -10.25, ty: 25.9},
						transform: [-10.25, 25.9, 0.998, 0.998, -0.224, 0.224, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.386, 0.228], [0.711, 0.581], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.45, ty: 26.55},
						transform: [-4.45, 26.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.435, 0], [0.746, 0.421], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg4_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.918, tx: -4.2, ty: 18.05},
						transform: [-4.2, 18.05, 1, 0.918, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 0.215, b: -0.977, c: 0.977, d: 0.215, tx: 8.15, ty: 12.8},
						transform: [8.15, 12.8, 1, 1, 1.354, -1.354, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.781, 0.589], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 0.606, b: -0.796, c: 0.73, d: 0.556, tx: -7.95, ty: 16.3},
						transform: [-7.95, 16.3, 1, 0.918, 0.92, -0.92, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.432], [0.614, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 0.401, b: 0.632, c: -0.957, d: 0.608, tx: -10.55, ty: 14},
						transform: [-10.55, 14, 0.749, 1.134, -1.005, 1.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.295, 0.604], [0.631, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.371, b: 0.929, c: -0.832, d: 0.332, tx: -9, ty: 13.45},
						transform: [-9, 13.45, 1, 0.896, -1.191, 1.191, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.435, 0], [0.746, 0.421], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.335, b: 0.942, c: -0.942, d: 0.335, tx: -9.1, ty: 13.05},
						transform: [-9.1, 13.05, 1, 1, -1.23, 1.23, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.758, 0.589], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.71, b: 0.702, c: -0.523, d: 0.529, tx: -6.65, ty: 17.45},
						transform: [-6.65, 17.45, 0.998, 0.744, -0.779, 0.779, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.386, 0.228], [0.711, 0.582], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.359, c: -0.515, d: 0.993, tx: -5.4, ty: 17.6},
						transform: [-5.4, 17.6, 0.78, 1.119, -0.478, 0.478, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.386, 0.228], [0.711, 0.581], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.918, tx: -4.2, ty: 18.05},
						transform: [-4.2, 18.05, 1, 0.918, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.435, 0], [0.746, 0.421], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_starchy_starchy_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.4, ty: -8.4},
						transform: [1.4, -8.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_starchy_starchy_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.75, ty: -11.85},
						transform: [1.75, -11.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.781, 0.589], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_starchy_starchy_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.4, ty: -8.4},
						transform: [1.4, -8.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.432], [0.614, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_starchy_starchy_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.15, ty: -11.85},
						transform: [3.15, -11.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.758, 0.589], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_starchy_starchy_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.4, ty: -9.4},
						transform: [1.4, -9.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "shoe",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -0.25, b: -0.809, c: 0.956, d: -0.295, tx: 11.6, ty: 24.2},
						transform: [11.6, 24.2, 0.847, 1, 1.87, -1.87, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.889, b: -0.101, c: 0.112, d: 0.992, tx: 2.05, ty: 23.35},
						transform: [2.05, 23.35, 0.895, 0.999, 0.113, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.375, 0.257], [0.703, 0.603], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.98, b: 0.199, c: -0.199, d: 0.98, tx: -5.6, ty: 20.35},
						transform: [-5.6, 20.35, 1, 1, -0.2, 0.2, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.38, 0], [0.715, 0.416], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.932, b: 0.362, c: -0.362, d: 0.932, tx: -8.9, ty: 20.1},
						transform: [-8.9, 20.1, 1, 1, -0.37, 0.37, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.781, 0.589], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.902, b: 0.431, c: -0.431, d: 0.902, tx: -4.55, ty: 25.55},
						transform: [-4.55, 25.55, 0.999, 0.999, -0.446, 0.446, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.36, 0.304], [0.694, 0.645], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.008, c: 0.008, d: 0.999, tx: 0.35, ty: 25.9},
						transform: [0.35, 25.9, 0.999, 0.999, 0.008, -0.008, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.375, 0.328], [0.708, 0.672], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6, ty: 26.3},
						transform: [6, 26.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.246, 0.319], [0.592, 0.671], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.447, b: -0.893, c: 0.893, d: 0.447, tx: 14.2, ty: 22.35},
						transform: [14.2, 22.35, 0.999, 0.999, 1.107, -1.107, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.282, 0.538], [0.653, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -0.806, b: -0.592, c: 0.592, d: -0.806, tx: 24.25, ty: 15.75},
						transform: [24.25, 15.75, 1, 1, 2.508, -2.508, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.758, 0.589], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -0.25, b: -0.809, c: 0.956, d: -0.295, tx: 11.6, ty: 24.2},
						transform: [11.6, 24.2, 0.847, 1, 1.87, -1.87, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.435, 0], [0.746, 0.421], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg3_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.419, c: 0.604, d: 0.609, tx: 6.45, ty: 18.9},
						transform: [6.45, 18.9, 1.078, 0.858, 0.781, -0.399, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 0.748, b: 0.458, c: -0.632, d: 0.878, tx: 7.6, ty: 15.4},
						transform: [7.6, 15.4, 0.877, 1.082, -0.623, 0.549, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.375, 0.257], [0.703, 0.603], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.443, b: 0.896, c: -0.803, d: 0.397, tx: 8, ty: 14.8},
						transform: [8, 14.8, 1, 0.896, -1.112, 1.112, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.38, 0], [0.715, 0.416], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.416, b: 0.909, c: -0.909, d: 0.416, tx: 6.8, ty: 14.25},
						transform: [6.8, 14.25, 1, 1, -1.142, 1.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.781, 0.589], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.734, b: 0.676, c: -0.707, d: 0.617, tx: 8, ty: 15.85},
						transform: [8, 15.85, 0.998, 0.939, -0.853, 0.744, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.4, 0.291], [0.735, 0.66], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 0.915, b: 0.413, c: -0.873, d: 0.945, tx: 7.75, ty: 17.25},
						transform: [7.75, 17.25, 1.004, 1.286, -0.746, 0.424, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.2, 0.456], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.253, d: 0.788, tx: 7.85, ty: 18.9},
						transform: [7.85, 18.9, 1, 0.828, -0.311, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.432], [0.614, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 0.387, b: -0.922, c: 0.922, d: 0.387, tx: 16.15, ty: 12.15},
						transform: [16.15, 12.15, 1, 1, 1.174, -1.174, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.758, 0.589], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.419, c: 0.604, d: 0.609, tx: 6.45, ty: 18.9},
						transform: [6.45, 18.9, 1.078, 0.858, 0.781, -0.399, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.435, 0], [0.746, 0.421], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye2",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.5, ty: -16.7},
						transform: [-13.5, -16.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -15.95, ty: -20.15},
						transform: [-15.95, -20.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.781, 0.589], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.5, ty: -16.7},
						transform: [-13.5, -16.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.432], [0.614, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -9.35, ty: -20.45},
						transform: [-9.35, -20.45, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.758, 0.589], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.5, ty: -17.7},
						transform: [-13.5, -17.7, 1, 1, 0, 3.142, NaN],
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
						to: 4,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6, ty: -16.7},
						transform: [6, -16.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 3.95, ty: -20.15},
						transform: [3.95, -20.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.781, 0.589], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6, ty: -16.7},
						transform: [6, -16.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.432], [0.614, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.9, ty: -20.15},
						transform: [10.9, -20.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.758, 0.589], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6, ty: -17.7},
						transform: [6, -17.7, 1, 1, 0, 0, 0],
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
						to: 4,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.25, ty: -1.95},
						transform: [-5.25, -1.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -7.7, ty: -5.4},
						transform: [-7.7, -5.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.781, 0.589], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.25, ty: -1.95},
						transform: [-5.25, -1.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.432], [0.614, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.6, ty: -5.4},
						transform: [-0.6, -5.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.758, 0.589], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.25, ty: -2.95},
						transform: [-5.25, -2.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "moustache",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1.04, b: 0, c: 0.072, d: 0.881, tx: -6.5, ty: -11.4},
						transform: [-6.5, -11.4, 1.04, 0.883, 0.081, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 0.919, b: 0, c: 0.045, d: 1.089, tx: -9.45, ty: -12.9},
						transform: [-9.45, -12.9, 0.919, 1.09, 0.041, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.781, 0.589], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1.098, b: 0, c: -0.041, d: 0.823, tx: -6.65, ty: -11.2},
						transform: [-6.65, -11.2, 1.098, 0.824, -0.05, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.432], [0.614, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1.026, b: 0, c: -0.074, d: 1.082, tx: -2.3, ty: -12.95},
						transform: [-2.3, -12.95, 1.026, 1.084, -0.069, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.758, 0.589], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1.04, b: 0, c: 0.072, d: 0.881, tx: -6.5, ty: -11.4},
						transform: [-6.5, -11.4, 1.04, 0.883, 0.081, 0, NaN],
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
						to: 4,
						classname: "_starchy_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.937, b: 0.35, c: -0.35, d: 0.937, tx: 26.1, ty: 1.7},
						transform: [26.1, 1.7, 1, 1, -0.358, 0.358, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_starchy_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.837, b: -0.547, c: 0.464, d: 0.709, tx: 26.85, ty: -3.25},
						transform: [26.85, -3.25, 1, 0.848, 0.579, -0.579, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.781, 0.589], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_starchy_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.937, b: 0.35, c: -0.35, d: 0.937, tx: 26.1, ty: 1.7},
						transform: [26.1, 1.7, 1, 1, -0.358, 0.358, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.432], [0.614, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_starchy_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.113, b: 0.994, c: -0.791, d: 0.09, tx: 27.35, ty: -1.9},
						transform: [27.35, -1.9, 1, 0.796, -1.458, 1.458, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0], [0.758, 0.589], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_starchy_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.937, b: 0.35, c: -0.35, d: 0.937, tx: 26.1, ty: 0.7},
						transform: [26.1, 0.7, 1, 1, -0.358, 0.358, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.435, 0], [0.746, 0.421], [1, 1], ],
						}
					},
				]
			},
			{
				name: "hat",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.2, ty: -32.7},
						transform: [7.2, -32.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.038, c: -0.038, d: 0.999, tx: 7.55, ty: -36.95},
						transform: [7.55, -36.95, 1, 1, -0.038, 0.038, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.768, 0.464], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.043, c: -0.043, d: 0.999, tx: 7.9, ty: -35},
						transform: [7.9, -35, 1, 1, -0.043, 0.043, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.36, 0.327], [0.688, 0.669], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 9.6, ty: -38.05},
						transform: [9.6, -38.05, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0.058], [0.778, 0.432], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.2, ty: -33.7},
						transform: [7.2, -33.7, 1, 1, 0, 0, 0],
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
						to: 20,
						classname: "_starchy_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.57, tx: -0.5, ty: -2.05},
						transform: [-0.5, -2.05, 0.46, 0.57, 0, 0, 0],
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
						to: 0,
					},
					{
						from: 1,
						to: 8,
					},
					{
						from: 9,
						to: 9,
						actions: function(self){globalsignal.emit(ge.SOUND_STEP);},
					},
					{
						from: 10,
						to: 19,
					},
					{
						from: 20,
						to: 20,
						actions: function(self){globalsignal.emit(ge.SOUND_STEP);},
					},
				]
			},
		]
	},
	"_starchy_starchy_ground_stop": {
		type: "movieclip",
		fps: 30,
		totalFrames: 16,
		labels: {},
		layers: [
			{
				name: "arm2",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_arm3_x",
						instancename: "arm2",
						matrix: {a: -0.527, b: 0.85, c: -0.85, d: -0.527, tx: -22.05, ty: 7.7},
						transform: [-22.05, 7.7, 1, 1, -2.126, 2.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_starchy_arm3_x",
						instancename: "arm2",
						matrix: {a: 0.607, b: 0.794, c: -0.794, d: 0.607, tx: -19.85, ty: 4.55},
						transform: [-19.85, 4.55, 1, 1, -0.918, 0.918, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_starchy_arm3_x",
						instancename: "arm2",
						matrix: {a: 0.631, b: 0.776, c: -0.776, d: 0.631, tx: -20.2, ty: 5.05},
						transform: [-20.2, 5.05, 1, 1, -0.888, 0.888, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_starchy_arm3_x",
						instancename: "arm2",
						matrix: {a: 0.607, b: 0.794, c: -0.794, d: 0.607, tx: -19.85, ty: 4.55},
						transform: [-19.85, 4.55, 1, 1, -0.918, 0.918, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11.55, ty: 4.25},
						transform: [-11.55, 4.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: -0.992, b: -0.129, c: -0.129, d: 0.992, tx: -19.75, ty: -1.65},
						transform: [-19.75, -1.65, 1, 1, -0.13, -3.012, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -20.15, ty: -0.3},
						transform: [-20.15, -0.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.45, ty: 26.55},
						transform: [-4.45, 26.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.249, 0.214], [0.593, 0.61], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 2,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.896, b: 0.442, c: -0.442, d: 0.896, tx: -11.2, ty: 26.1},
						transform: [-11.2, 26.1, 0.999, 0.999, -0.459, 0.459, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.286, 0.505], [0.635, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: -18.6, ty: 26.55},
						transform: [-18.6, 26.55, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: -18.6, ty: 26.55},
						transform: [-18.6, 26.55, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: -18.6, ty: 26.55},
						transform: [-18.6, 26.55, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -9.5, ty: 25.35},
						transform: [-9.5, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -9.5, ty: 25.35},
						transform: [-9.5, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg4_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.918, tx: -4.2, ty: 18.05},
						transform: [-4.2, 18.05, 1, 0.918, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.249, 0.214], [0.593, 0.61], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 2,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.879, b: 0.474, c: -0.291, d: 0.539, tx: -5, ty: 17.65},
						transform: [-5, 17.65, 0.999, 0.613, -0.494, 0.494, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.286, 0.505], [0.635, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.512, b: 0.859, c: -0.788, d: 0.47, tx: -4.2, ty: 18},
						transform: [-4.2, 18, 1, 0.918, -1.033, 1.033, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.512, b: 0.859, c: -0.788, d: 0.47, tx: -4.2, ty: 18},
						transform: [-4.2, 18, 1, 0.918, -1.033, 1.033, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.512, b: 0.859, c: -0.788, d: 0.47, tx: -4.2, ty: 18},
						transform: [-4.2, 18, 1, 0.918, -1.033, 1.033, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.249, 0.214], [0.593, 0.61], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.794, b: 0.605, c: -0.424, d: 0.557, tx: -5.8, ty: 16.85},
						transform: [-5.8, 16.85, 0.998, 0.7, -0.651, 0.651, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.303, 0.371], [0.641, 0.737], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.975, b: 0.217, c: -0.123, d: 0.552, tx: -7.35, ty: 15.9},
						transform: [-7.35, 15.9, 0.999, 0.566, -0.219, 0.219, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.319, 0.606], [0.656, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.107, tx: -8.1, ty: 15.4},
						transform: [-8.1, 15.4, 1, 1.107, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.1, ty: 16.2},
						transform: [-8.1, 16.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_starchy_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.4, ty: -8.4},
						transform: [1.4, -8.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_starchy_starchy_body_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.121, c: 0.121, d: 0.993, tx: -1.2, ty: -6.75},
						transform: [-1.2, -6.75, 1, 1, 0.122, -0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_starchy_starchy_body_x",
						instancename: "",
						matrix: {a: 0.988, b: -0.151, c: 0.151, d: 0.988, tx: -1.9, ty: -6.75},
						transform: [-1.9, -6.75, 1, 1, 0.152, -0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_starchy_starchy_body_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.121, c: 0.121, d: 0.993, tx: -1.2, ty: -6.75},
						transform: [-1.2, -6.75, 1, 1, 0.122, -0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_starchy_starchy_body_x",
						instancename: "",
						matrix: {a: 1, b: 0.008, c: -0.008, d: 1, tx: 1.85, ty: -10.55},
						transform: [1.85, -10.55, 1, 1, -0.008, 0.008, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_starchy_starchy_body_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.4, ty: -9.4},
						transform: [1.4, -9.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "shoe",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.775, b: -0.34, c: 0.402, d: 0.916, tx: 10.15, ty: 25.2},
						transform: [10.15, 25.2, 0.847, 1, 0.414, -0.414, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.249, 0.214], [0.593, 0.61], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 2,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.802, b: 0.447, c: -0.486, d: 0.872, tx: 1.85, ty: 26.2},
						transform: [1.85, 26.2, 0.919, 0.999, -0.509, 0.509, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.286, 0.505], [0.635, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.609, b: 0.793, c: -0.793, d: 0.609, tx: -6.95, ty: 26.6},
						transform: [-6.95, 26.6, 1, 1, -0.916, 0.916, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.609, b: 0.793, c: -0.793, d: 0.609, tx: -6.95, ty: 26.6},
						transform: [-6.95, 26.6, 1, 1, -0.916, 0.916, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.609, b: 0.793, c: -0.793, d: 0.609, tx: -6.95, ty: 26.6},
						transform: [-6.95, 26.6, 1, 1, -0.916, 0.916, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.05, ty: 25.35},
						transform: [11.05, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.05, ty: 25.35},
						transform: [11.05, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg3_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.419, c: 0.604, d: 0.609, tx: 6.45, ty: 18.9},
						transform: [6.45, 18.9, 1.078, 0.858, 0.781, -0.399, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.249, 0.214], [0.593, 0.61], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 2,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.779, b: 0.688, c: -0.283, d: 0.49, tx: 7.8, ty: 18.25},
						transform: [7.8, 18.25, 1.039, 0.566, -0.523, 0.724, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.286, 0.505], [0.635, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.526, b: 0.85, c: -0.85, d: 0.526, tx: 8.75, ty: 18.6},
						transform: [8.75, 18.6, 1, 1, -1.017, 1.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.526, b: 0.85, c: -0.85, d: 0.526, tx: 8.75, ty: 18.6},
						transform: [8.75, 18.6, 1, 1, -1.017, 1.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.526, b: 0.85, c: -0.85, d: 0.526, tx: 8.75, ty: 18.6},
						transform: [8.75, 18.6, 1, 1, -1.017, 1.017, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.249, 0.214], [0.593, 0.61], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.756, b: 0.652, c: -0.471, d: 0.545, tx: 10.8, ty: 17},
						transform: [10.8, 17, 0.998, 0.72, -0.712, 0.712, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.303, 0.371], [0.641, 0.737], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.98, b: 0.195, c: -0.116, d: 0.582, tx: 11.95, ty: 15.35},
						transform: [11.95, 15.35, 0.999, 0.593, -0.197, 0.197, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.319, 0.606], [0.656, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.054, tx: 12.45, ty: 15.8},
						transform: [12.45, 15.8, 1, 1.054, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 12.45, ty: 16.2},
						transform: [12.45, 16.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye2",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.5, ty: -16.7},
						transform: [-13.5, -16.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -0.993, b: 0.121, c: 0.121, d: 0.993, tx: -20, ty: -10.3},
						transform: [-20, -10.3, 1, 1, 0.122, 3.02, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -0.988, b: 0.151, c: 0.151, d: 0.988, tx: -20.8, ty: -9.7},
						transform: [-20.8, -9.7, 1, 1, 0.152, 2.99, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -0.993, b: 0.121, c: 0.121, d: 0.993, tx: -20, ty: -10.3},
						transform: [-20, -10.3, 1, 1, 0.122, 3.02, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: -0.008, c: -0.008, d: 1, tx: -12.95, ty: -19},
						transform: [-12.95, -19, 1, 1, -0.008, -3.134, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.5, ty: -17.7},
						transform: [-13.5, -17.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6, ty: -16.7},
						transform: [6, -16.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 0.993, b: -0.121, c: 0.121, d: 0.993, tx: -0.7, ty: -12.7},
						transform: [-0.7, -12.7, 1, 1, 0.122, -0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 0.988, b: -0.151, c: 0.151, d: 0.988, tx: -1.55, ty: -12.7},
						transform: [-1.55, -12.7, 1, 1, 0.152, -0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 0.993, b: -0.121, c: 0.121, d: 0.993, tx: -0.7, ty: -12.7},
						transform: [-0.7, -12.7, 1, 1, 0.122, -0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0.008, c: -0.008, d: 1, tx: 6.5, ty: -18.85},
						transform: [6.5, -18.85, 1, 1, -0.008, 0.008, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6, ty: -17.7},
						transform: [6, -17.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "mouth",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.25, ty: -1.95},
						transform: [-5.25, -1.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 0.993, b: -0.121, c: 0.121, d: 0.993, tx: -10, ty: 3.35},
						transform: [-10, 3.35, 1, 1, 0.122, -0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 0.988, b: -0.151, c: 0.151, d: 0.988, tx: -10.35, ty: 3.6},
						transform: [-10.35, 3.6, 1, 1, 0.152, -0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 0.993, b: -0.121, c: 0.121, d: 0.993, tx: -10, ty: 3.35},
						transform: [-10, 3.35, 1, 1, 0.122, -0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0.008, c: -0.008, d: 1, tx: -4.8, ty: -4.15},
						transform: [-4.8, -4.15, 1, 1, -0.008, 0.008, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.25, ty: -2.95},
						transform: [-5.25, -2.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "moustache",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1.04, b: 0, c: 0.072, d: 0.881, tx: -6.5, ty: -11.4},
						transform: [-6.5, -11.4, 1.04, 0.883, 0.081, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1.045, b: -0.128, c: 0.121, d: 0.866, tx: -12.75, ty: -5.85},
						transform: [-12.75, -5.85, 1.053, 0.874, 0.138, -0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1.04, b: -0.159, c: 0.098, d: 0.869, tx: -13.45, ty: -5.45},
						transform: [-13.45, -5.45, 1.053, 0.875, 0.112, -0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1.045, b: -0.128, c: 0.121, d: 0.866, tx: -12.75, ty: -5.85},
						transform: [-12.75, -5.85, 1.053, 0.874, 0.138, -0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 0.952, b: 0.007, c: -0.008, d: 1.076, tx: -5.95, ty: -11.75},
						transform: [-5.95, -11.75, 0.952, 1.076, -0.008, 0.008, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.45, ty: -11},
						transform: [-6.45, -11, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.937, b: 0.35, c: -0.35, d: 0.937, tx: 26.1, ty: 1.7},
						transform: [26.1, 1.7, 1, 1, -0.358, 0.358, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_starchy_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.972, b: 0.234, c: -0.234, d: 0.972, tx: 24.5, ty: 0.3},
						transform: [24.5, 0.3, 1, 1, -0.236, 0.236, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_starchy_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.979, b: 0.204, c: -0.204, d: 0.979, tx: 23.95, ty: -0.45},
						transform: [23.95, -0.45, 1, 1, -0.206, 0.206, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_starchy_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.972, b: 0.234, c: -0.234, d: 0.972, tx: 24.5, ty: 0.3},
						transform: [24.5, 0.3, 1, 1, -0.236, 0.236, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: 0.995, b: -0.096, c: 0.096, d: 0.995, tx: 25.35, ty: -0.2},
						transform: [25.35, -0.2, 1, 1, 0.096, -0.096, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.95, ty: 0.8},
						transform: [24.95, 0.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "hat",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.2, ty: -32.7},
						transform: [7.2, -32.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.121, c: 0.121, d: 0.993, tx: 1.55, ty: -31.55},
						transform: [1.55, -31.55, 1, 1, 0.122, -0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 0.988, b: -0.151, c: 0.151, d: 0.988, tx: 0.05, ty: -31.6},
						transform: [0.05, -31.6, 1, 1, 0.152, -0.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.121, c: 0.121, d: 0.993, tx: 1.55, ty: -31.55},
						transform: [1.55, -31.55, 1, 1, 0.122, -0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.066, c: 0.066, d: 0.998, tx: 7.05, ty: -34.95},
						transform: [7.05, -34.95, 1, 1, 0.066, -0.066, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.2, ty: -33.7},
						transform: [7.2, -33.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "hittablebox",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_starchy_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.57, tx: -0.5, ty: -2.05},
						transform: [-0.5, -2.05, 0.46, 0.57, 0, 0, 0],
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
						classname: "_starchy_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: -7.1, ty: 27},
						transform: [-7.1, 27, 0.1, 0.1, 0, 0, 0],
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
						classname: "_starchy_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: -8.75, ty: 27},
						transform: [-8.75, 27, 0.1, 0.1, 0, 0, 0],
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
						classname: "_starchy_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: -8.45, ty: 27},
						transform: [-8.45, 27, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
					},
					{
						from: 8,
						to: 8,
						classname: "_starchy_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: -8.75, ty: 27},
						transform: [-8.75, 27, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
					},
					{
						from: 10,
						to: 10,
						classname: "_starchy_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: -7.1, ty: 27},
						transform: [-7.1, 27, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 13,
					},
					{
						from: 14,
						to: 15,
					},
				]
			},
			{
				name: "code",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 1,
						actions: function(self){globalsignal.emit(ge.SOUND_BREAK);},
					},
					{
						from: 2,
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
	"_starchy_starchy_ground_stopandturn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 14,
		labels: {},
		layers: [
			{
				name: "arm2",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_arm3_x",
						instancename: "arm2",
						matrix: {a: -0.527, b: 0.85, c: -0.85, d: -0.527, tx: -22.05, ty: 7.7},
						transform: [-22.05, 7.7, 1, 1, -2.126, 2.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_starchy_arm3_x",
						instancename: "arm2",
						matrix: {a: 0.607, b: 0.794, c: -0.794, d: 0.607, tx: -19.85, ty: 4.55},
						transform: [-19.85, 4.55, 1, 1, -0.918, 0.918, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_starchy_arm3_x",
						instancename: "arm2",
						matrix: {a: 0.562, b: 0.827, c: -0.827, d: 0.562, tx: -18.05, ty: 4.75},
						transform: [-18.05, 4.75, 1, 1, -0.974, 0.974, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: -0.737, b: 0.676, c: 0.676, d: 0.737, tx: -23.9, ty: 5.35},
						transform: [-23.9, 5.35, 1, 1, 0.742, 2.4, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: 0.973, b: 0.232, c: -0.232, d: 0.973, tx: 21.85, ty: 1.7},
						transform: [21.85, 1.7, 1, 1, -0.235, 0.235, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.23, 0.339], [0.634, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: 0.972, b: 0.234, c: -0.242, d: 0.97, tx: 21.7, ty: 0.15},
						transform: [21.7, 0.15, 1, 1, -0.244, 0.236, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.339], [0.634, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 20.2, ty: -0.3},
						transform: [20.2, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg4_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.918, tx: -4.2, ty: 18.05},
						transform: [-4.2, 18.05, 1, 0.918, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.249, 0.214], [0.593, 0.61], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 2,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.879, b: 0.474, c: -0.291, d: 0.539, tx: -5, ty: 17.65},
						transform: [-5, 17.65, 0.999, 0.613, -0.494, 0.494, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.286, 0.505], [0.635, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.512, b: 0.859, c: -0.788, d: 0.47, tx: -4.2, ty: 18},
						transform: [-4.2, 18, 1, 0.918, -1.033, 1.033, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.915, b: 0.402, c: -0.251, d: 0.571, tx: -4, ty: 17.6},
						transform: [-4, 17.6, 1, 0.624, -0.414, 0.414, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.249, 0.214], [0.593, 0.61], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11, ty: 25.35},
						transform: [-11, 25.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.303, 0.371], [0.641, 0.737], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11, ty: 25.35},
						transform: [-11, 25.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.319, 0.606], [0.656, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 9.55, ty: 25.35},
						transform: [9.55, 25.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.339], [0.634, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 9.55, ty: 25.35},
						transform: [9.55, 25.35, 1, 1, 0, 3.142, NaN],
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
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.45, ty: 26.55},
						transform: [-4.45, 26.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.249, 0.214], [0.593, 0.61], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 2,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.896, b: 0.442, c: -0.442, d: 0.896, tx: -11.2, ty: 26.1},
						transform: [-11.2, 26.1, 0.999, 0.999, -0.459, 0.459, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.286, 0.505], [0.635, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: -18.6, ty: 26.55},
						transform: [-18.6, 26.55, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: -9.95, ty: 26.55},
						transform: [-9.95, 26.55, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.907, tx: 8.15, ty: 16.95},
						transform: [8.15, 16.95, 1, 0.907, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.881, tx: 8.15, ty: 17.15},
						transform: [8.15, 17.15, 1, 0.881, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.339], [0.634, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 8.15, ty: 16.2},
						transform: [8.15, 16.2, 1, 1, 0, 3.142, NaN],
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
						to: 2,
						classname: "_starchy_starchy_body_turn",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.4, ty: -8.4},
						transform: [1.4, -8.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_starchy_starchy_body_turn",
						instancename: "",
						matrix: {a: 0.993, b: -0.121, c: 0.121, d: 0.993, tx: -1.2, ty: -6.75},
						transform: [-1.2, -6.75, 1, 1, 0.122, -0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_starchy_starchy_body_turn",
						instancename: "",
						matrix: {a: 0.998, b: -0.065, c: 0.065, d: 0.998, tx: 0, ty: -6.95},
						transform: [0, -6.95, 1, 1, 0.065, -0.065, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_starchy_starchy_body_turn",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.4, ty: -7.55},
						transform: [-1.4, -7.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_starchy_starchy_body_turn",
						instancename: "",
						matrix: {a: 0.999, b: 0.035, c: -0.035, d: 0.999, tx: -0.85, ty: -7.75},
						transform: [-0.85, -7.75, 1, 1, -0.035, 0.035, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.339], [0.634, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_body_turn",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.4, ty: -9.4},
						transform: [-1.4, -9.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg3_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.419, c: 0.604, d: 0.609, tx: 6.45, ty: 18.9},
						transform: [6.45, 18.9, 1.078, 0.858, 0.781, -0.399, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.249, 0.214], [0.593, 0.61], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 2,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.779, b: 0.688, c: -0.283, d: 0.49, tx: 7.8, ty: 18.25},
						transform: [7.8, 18.25, 1.039, 0.566, -0.523, 0.724, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.286, 0.505], [0.635, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.526, b: 0.85, c: -0.85, d: 0.526, tx: 8.75, ty: 18.6},
						transform: [8.75, 18.6, 1, 1, -1.017, 1.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_starchy_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.778, b: 0.038, c: -0.024, d: 0.505, tx: 9.15, ty: 18.25},
						transform: [9.15, 18.25, 0.779, 0.505, -0.048, 0.048, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.249, 0.214], [0.593, 0.61], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 9.55, ty: 25.35},
						transform: [9.55, 25.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.303, 0.371], [0.641, 0.737], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 9.55, ty: 25.35},
						transform: [9.55, 25.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.319, 0.606], [0.656, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11, ty: 25.35},
						transform: [-11, 25.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.339], [0.634, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11, ty: 25.35},
						transform: [-11, 25.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "shoe",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.775, b: -0.34, c: 0.402, d: 0.916, tx: 10.15, ty: 25.2},
						transform: [10.15, 25.2, 0.847, 1, 0.414, -0.414, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.249, 0.214], [0.593, 0.61], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 2,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.802, b: 0.447, c: -0.486, d: 0.872, tx: 1.85, ty: 26.2},
						transform: [1.85, 26.2, 0.919, 0.999, -0.509, 0.509, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.286, 0.505], [0.635, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.609, b: 0.793, c: -0.793, d: 0.609, tx: -6.95, ty: 26.6},
						transform: [-6.95, 26.6, 1, 1, -0.916, 0.916, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.609, b: 0.793, c: -0.793, d: 0.609, tx: 6.5, ty: 26},
						transform: [6.5, 26, 1, 1, -0.916, 0.916, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.744, tx: -12.4, ty: 18.2},
						transform: [-12.4, 18.2, 1, 0.744, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 0.821, tx: -12.4, ty: 17.6},
						transform: [-12.4, 17.6, 1, 0.821, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.339], [0.634, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -12.4, ty: 16.2},
						transform: [-12.4, 16.2, 1, 1, 0, 3.142, NaN],
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
						to: 2,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.5, ty: -16.7},
						transform: [-13.5, -16.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -0.993, b: 0.121, c: 0.121, d: 0.993, tx: -20, ty: -10.3},
						transform: [-20, -10.3, 1, 1, 0.122, 3.02, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -0.999, b: -0.052, c: -0.052, d: 0.999, tx: -13.1, ty: -10},
						transform: [-13.1, -10, 1, 1, -0.052, -3.09, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 11.15, ty: -9.1},
						transform: [11.15, -9.1, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: 0.999, b: 0.035, c: -0.035, d: 0.999, tx: 15.25, ty: -13.55},
						transform: [15.25, -13.55, 1, 1, -0.035, 0.035, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.339], [0.634, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 13.55, ty: -17.7},
						transform: [13.55, -17.7, 1, 1, 0, 0, 0],
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
						to: 2,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6, ty: -16.7},
						transform: [6, -16.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 0.993, b: -0.121, c: 0.121, d: 0.993, tx: -0.7, ty: -12.7},
						transform: [-0.7, -12.7, 1, 1, 0.122, -0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0.026, c: -0.026, d: 1, tx: 10.2, ty: -10.85},
						transform: [10.2, -10.85, 1, 1, -0.026, 0.026, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: -1, b: 0.026, c: 0.026, d: 1, tx: -12.15, ty: -9.95},
						transform: [-12.15, -9.95, 1, 1, 0.026, 3.116, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: -0.999, b: -0.035, c: -0.035, d: 0.999, tx: -4.2, ty: -14.2},
						transform: [-4.2, -14.2, 1, 1, -0.035, -3.107, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.339], [0.634, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -5.95, ty: -17.7},
						transform: [-5.95, -17.7, 1, 1, 0, 3.142, NaN],
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
						to: 2,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.25, ty: -1.95},
						transform: [-5.25, -1.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 0.993, b: -0.121, c: 0.121, d: 0.993, tx: -10, ty: 3.35},
						transform: [-10, 3.35, 1, 1, 0.122, -0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 1.19, b: 0, c: 0, d: 1, tx: -1.1, ty: 1.9},
						transform: [-1.1, 1.9, 1.19, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: -1.19, b: 0, c: 0, d: 1, tx: -0.85, ty: 2.8},
						transform: [-0.85, 2.8, 1.19, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: -0.999, b: -0.035, c: -0.035, d: 0.999, tx: 6.45, ty: 0.9},
						transform: [6.45, 0.9, 1, 1, -0.035, -3.107, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.339], [0.634, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 5.3, ty: -2.95},
						transform: [5.3, -2.95, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "moustache",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1.04, b: 0, c: 0.072, d: 0.881, tx: -6.5, ty: -11.4},
						transform: [-6.5, -11.4, 1.04, 0.883, 0.081, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1.045, b: -0.128, c: 0.121, d: 0.866, tx: -12.75, ty: -5.85},
						transform: [-12.75, -5.85, 1.053, 0.874, 0.138, -0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1.158, b: 0, c: 0, d: 1, tx: -2.7, ty: -5.65},
						transform: [-2.7, -5.65, 1.158, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: -1.158, b: 0, c: 0, d: 1, tx: 0.75, ty: -4.75},
						transform: [0.75, -4.75, 1.158, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: -0.999, b: -0.035, c: -0.035, d: 0.999, tx: 7.95, ty: -7.1},
						transform: [7.95, -7.1, 1, 1, -0.035, -3.107, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.339], [0.634, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 6.5, ty: -11},
						transform: [6.5, -11, 1, 1, 0, 3.142, NaN],
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
						to: 2,
						classname: "_starchy_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.937, b: 0.35, c: -0.35, d: 0.937, tx: 26.1, ty: 1.7},
						transform: [26.1, 1.7, 1, 1, -0.358, 0.358, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_starchy_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.972, b: 0.234, c: -0.234, d: 0.972, tx: 24.5, ty: 0.3},
						transform: [24.5, 0.3, 1, 1, -0.236, 0.236, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_starchy_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.958, b: 0.288, c: -0.288, d: 0.958, tx: 27.05, ty: 2},
						transform: [27.05, 2, 1, 1, -0.292, 0.292, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: 0.903, b: 0.43, c: -0.405, d: 0.851, tx: 26.05, ty: 1.1},
						transform: [26.05, 1.1, 1, 0.943, -0.444, 0.444, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: -0.846, b: 0.533, c: 0.533, d: 0.846, tx: -26.3, ty: 3.75},
						transform: [-26.3, 3.75, 1, 1, 0.562, 2.58, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.23, 0.339], [0.634, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: -0.955, b: 0.296, c: 0.296, d: 0.955, tx: -25.75, ty: 1.9},
						transform: [-25.75, 1.9, 1, 1, 0.3, 2.842, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.339], [0.634, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -24.9, ty: 0.8},
						transform: [-24.9, 0.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hat",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.2, ty: -32.7},
						transform: [7.2, -32.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.121, c: 0.121, d: 0.993, tx: 1.55, ty: -31.55},
						transform: [1.55, -31.55, 1, 1, 0.122, -0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 0.89, b: -0.058, c: 0.065, d: 0.998, tx: 4.95, ty: -32.7},
						transform: [4.95, -32.7, 0.892, 1, 0.065, -0.065, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.2, 0.247], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: -0.905, b: 0, c: 0, d: 1, tx: -8.55, ty: -32.65},
						transform: [-8.55, -32.65, 0.905, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: -1, b: 0.012, c: 0.012, d: 1, tx: -6.65, ty: -32.55},
						transform: [-6.65, -32.55, 1, 1, 0.012, 3.129, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.339], [0.634, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -7.15, ty: -33.7},
						transform: [-7.15, -33.7, 1, 1, 0, 3.142, NaN],
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
						classname: "_starchy_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.57, tx: -0.5, ty: -2.05},
						transform: [-0.5, -2.05, 0.46, 0.57, 0, 0, 0],
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
						to: 0,
					},
					{
						from: 1,
						to: 1,
						classname: "_starchy_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: -5.15, ty: 27},
						transform: [-5.15, 27, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
					},
					{
						from: 3,
						to: 3,
						classname: "_starchy_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: -8.45, ty: 27},
						transform: [-8.45, 27, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
					},
					{
						from: 5,
						to: 5,
						classname: "_starchy_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: -7.1, ty: 27},
						transform: [-7.1, 27, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
					},
					{
						from: 7,
						to: 7,
						classname: "_starchy_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: -2.6, ty: 27},
						transform: [-2.6, 27, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
					},
				]
			},
			{
				name: "Capa 2",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 1,
						actions: function(self){globalsignal.emit(ge.SOUND_BREAK);},
					},
					{
						from: 2,
						to: 13,
					},
				]
			},
		]
	},
	"_starchy_starchy_ground_turn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 14,
		labels: {},
		layers: [
			{
				name: "arm2",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -20.15, ty: -0.3},
						transform: [-20.15, -0.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.85, 0.6], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -26.4, ty: -1.7},
						transform: [-26.4, -1.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 28.9, ty: -2.75},
						transform: [28.9, -2.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.167, 0.428], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 20.2, ty: -0.3},
						transform: [20.2, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "shoe",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -9.5, ty: 25.35},
						transform: [-9.5, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.85, 0.6], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.853, b: 0, c: 0, d: 1, tx: -8.4, ty: 25.35},
						transform: [-8.4, 25.35, 0.853, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -0.651, b: 0, c: 0, d: 1, tx: 8.9, ty: 25.35},
						transform: [8.9, 25.35, 0.651, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.167, 0.428], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 9.55, ty: 25.35},
						transform: [9.55, 25.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.1, ty: 16.2},
						transform: [-8.1, 16.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.85, 0.6], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 0.711, b: 0, c: 0, d: 1, tx: -7.6, ty: 16.2},
						transform: [-7.6, 16.2, 0.711, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: -0.762, b: 0, c: 0, d: 1, tx: 8.1, ty: 16.2},
						transform: [8.1, 16.2, 0.762, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.167, 0.428], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 8.15, ty: 16.2},
						transform: [8.15, 16.2, 1, 1, 0, 3.142, NaN],
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
						to: 12,
						classname: "_starchy_starchy_body_turn",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.4, ty: -9.4},
						transform: [1.4, -9.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.85, 0.6], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_body_turn",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.4, ty: -9.4},
						transform: [-1.4, -9.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "shoe",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.05, ty: 25.35},
						transform: [11.05, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.85, 0.6], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.775, b: 0, c: 0, d: 1, tx: 11.45, ty: 25.35},
						transform: [11.45, 25.35, 0.775, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -0.783, b: 0, c: 0, d: 1, tx: -11.4, ty: 25.35},
						transform: [-11.4, 25.35, 0.783, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.167, 0.428], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11, ty: 25.35},
						transform: [-11, 25.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 12.45, ty: 16.2},
						transform: [12.45, 16.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.85, 0.6], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 0.604, b: 0, c: 0, d: 1, tx: 12.2, ty: 16.2},
						transform: [12.2, 16.2, 0.604, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: -0.815, b: -0.06, c: -0.08, d: 1.08, tx: -11.85, ty: 15.75},
						transform: [-11.85, 15.75, 0.818, 1.083, -0.074, -3.068, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.167, 0.428], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -12.4, ty: 16.2},
						transform: [-12.4, 16.2, 1, 1, 0, 3.142, NaN],
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
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.5, ty: -17.7},
						transform: [-13.5, -17.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.85, 0.6], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11.45, ty: -16.5},
						transform: [-11.45, -16.5, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.55, ty: -16.5},
						transform: [11.55, -16.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 13.55, ty: -17.7},
						transform: [13.55, -17.7, 1, 1, 0, 0, 0],
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
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6, ty: -17.7},
						transform: [6, -17.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.85, 0.6], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.9, ty: -16.8},
						transform: [10.9, -16.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -10.8, ty: -16.2},
						transform: [-10.8, -16.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -5.95, ty: -17.7},
						transform: [-5.95, -17.7, 1, 1, 0, 3.142, NaN],
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
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.25, ty: -2.95},
						transform: [-5.25, -2.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.85, 0.6], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 1.178, b: 0, c: 0, d: 1, tx: 0.55, ty: -2.75},
						transform: [0.55, -2.75, 1.178, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: -1.178, b: 0, c: 0, d: 1, tx: 0.3, ty: -2.15},
						transform: [0.3, -2.15, 1.178, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 5.3, ty: -2.95},
						transform: [5.3, -2.95, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "moustache",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.45, ty: -11},
						transform: [-6.45, -11, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.85, 0.6], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1.117, b: -0.043, c: 0.038, d: 0.999, tx: -1.4, ty: -11},
						transform: [-1.4, -11, 1.117, 1, 0.038, -0.038, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: -1.117, b: 0.033, c: 0.03, d: 1, tx: 3.15, ty: -10.7},
						transform: [3.15, -10.7, 1.117, 1, 0.03, 3.112, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 6.5, ty: -11},
						transform: [6.5, -11, 1, 1, 0, 3.142, NaN],
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
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.95, ty: 0.8},
						transform: [24.95, 0.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.85, 0.6], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 29.1, ty: -1.95},
						transform: [29.1, -1.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -27.2, ty: -2.25},
						transform: [-27.2, -2.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.167, 0.428], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -24.9, ty: 0.8},
						transform: [-24.9, 0.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hat",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.2, ty: -33.7},
						transform: [7.2, -33.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.492, 0], [0.85, 0.6], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 0.835, b: -0.066, c: 0.078, d: 0.997, tx: 5.65, ty: -36.35},
						transform: [5.65, -36.35, 0.837, 1, 0.078, -0.078, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: -0.813, b: -0.067, c: -0.082, d: 0.997, tx: -3.95, ty: -35.9},
						transform: [-3.95, -35.9, 0.816, 1, -0.083, -3.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.167, 0.428], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -7.15, ty: -33.7},
						transform: [-7.15, -33.7, 1, 1, 0, 3.142, NaN],
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
						classname: "_starchy_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.57, tx: -0.5, ty: -2.05},
						transform: [-0.5, -2.05, 0.46, 0.57, 0, 0, 0],
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
	"_starchy_starchy_ground_turn_fast": {
		type: "movieclip",
		fps: 30,
		totalFrames: 7,
		labels: {},
		layers: [
			{
				name: "arm2",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -20.3, ty: -0.35},
						transform: [-20.3, -0.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0.117], [0.841, 0.638], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -26.4, ty: -1.7},
						transform: [-26.4, -1.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 26, ty: -1.95},
						transform: [26, -1.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0.514], [0.629, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 20.2, ty: -0.3},
						transform: [20.2, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "shoe",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.997, b: 0, c: 0, d: 1, tx: -9.45, ty: 25.35},
						transform: [-9.45, 25.35, 0.997, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0.117], [0.841, 0.638], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.853, b: 0, c: 0, d: 1, tx: -8.4, ty: 25.35},
						transform: [-8.4, 25.35, 0.853, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -0.767, b: 0, c: 0, d: 1, tx: 9.1, ty: 25.35},
						transform: [9.1, 25.35, 0.767, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0.514], [0.629, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 9.55, ty: 25.35},
						transform: [9.55, 25.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 0.993, b: 0, c: 0, d: 1, tx: -8.1, ty: 16.2},
						transform: [-8.1, 16.2, 0.993, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0.117], [0.841, 0.638], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 0.711, b: 0, c: 0, d: 1, tx: -7.6, ty: 16.2},
						transform: [-7.6, 16.2, 0.711, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: -0.841, b: 0, c: 0, d: 1, tx: 8.05, ty: 16.2},
						transform: [8.05, 16.2, 0.841, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0.514], [0.629, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 8.15, ty: 16.2},
						transform: [8.15, 16.2, 1, 1, 0, 3.142, NaN],
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
						classname: "_starchy_starchy_body_turn",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.4, ty: -9.4},
						transform: [1.4, -9.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0.058], [0.846, 0.619], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_starchy_body_turn",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.4, ty: -9.4},
						transform: [-1.4, -9.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "shoe",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.995, b: 0, c: 0, d: 1, tx: 11.05, ty: 25.35},
						transform: [11.05, 25.35, 0.995, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0.117], [0.841, 0.638], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.775, b: 0, c: 0, d: 1, tx: 11.45, ty: 25.35},
						transform: [11.45, 25.35, 0.775, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -0.855, b: 0, c: 0, d: 1, tx: -11.3, ty: 25.35},
						transform: [-11.3, 25.35, 0.855, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0.514], [0.629, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11, ty: 25.35},
						transform: [-11, 25.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 0.991, b: 0, c: 0, d: 1, tx: 12.45, ty: 16.2},
						transform: [12.45, 16.2, 0.991, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0.117], [0.841, 0.638], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 0.604, b: 0, c: 0, d: 1, tx: 12.2, ty: 16.2},
						transform: [12.2, 16.2, 0.604, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: -0.877, b: -0.042, c: -0.051, d: 1.054, tx: -12, ty: 15.9},
						transform: [-12, 15.9, 0.878, 1.055, -0.048, -3.093, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0.514], [0.629, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -12.4, ty: 16.2},
						transform: [-12.4, 16.2, 1, 1, 0, 3.142, NaN],
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
						to: 2,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.45, ty: -17.65},
						transform: [-13.45, -17.65, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0.117], [0.841, 0.638], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11.45, ty: -16.5},
						transform: [-11.45, -16.5, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.65, ty: -16.55},
						transform: [11.65, -16.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.41, 0.202], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 13.55, ty: -17.7},
						transform: [13.55, -17.7, 1, 1, 0, 0, 0],
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
						to: 2,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.1, ty: -17.7},
						transform: [6.1, -17.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0.117], [0.841, 0.638], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.9, ty: -16.8},
						transform: [10.9, -16.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -10.6, ty: -16.25},
						transform: [-10.6, -16.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.41, 0.202], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -5.95, ty: -17.7},
						transform: [-5.95, -17.7, 1, 1, 0, 3.142, NaN],
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
						to: 2,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 1.004, b: 0, c: 0, d: 1, tx: -5.1, ty: -2.95},
						transform: [-5.1, -2.95, 1.004, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0.117], [0.841, 0.638], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 1.178, b: 0, c: 0, d: 1, tx: 0.55, ty: -2.75},
						transform: [0.55, -2.75, 1.178, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: -1.17, b: 0, c: 0, d: 1, tx: 0.45, ty: -2.2},
						transform: [0.45, -2.2, 1.17, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.41, 0.202], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 5.3, ty: -2.95},
						transform: [5.3, -2.95, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "moustache",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1.003, b: 0, c: 0, d: 1, tx: -6.35, ty: -11},
						transform: [-6.35, -11, 1.003, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0.117], [0.841, 0.638], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1.117, b: -0.043, c: 0.038, d: 0.999, tx: -1.4, ty: -11},
						transform: [-1.4, -11, 1.117, 1, 0.038, -0.038, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: -1.112, b: 0.03, c: 0.027, d: 0.999, tx: 3.3, ty: -10.75},
						transform: [3.3, -10.75, 1.112, 1, 0.027, 3.115, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.41, 0.202], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 6.5, ty: -11},
						transform: [6.5, -11, 1, 1, 0, 3.142, NaN],
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
						to: 2,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 25.05, ty: 0.75},
						transform: [25.05, 0.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0.117], [0.841, 0.638], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 29.1, ty: -1.95},
						transform: [29.1, -1.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -26.45, ty: -1.25},
						transform: [-26.45, -1.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0.514], [0.629, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -24.9, ty: 0.8},
						transform: [-24.9, 0.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hat",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 0.996, b: 0, c: 0, d: 1, tx: 7.2, ty: -33.75},
						transform: [7.2, -33.75, 0.996, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.487, 0.117], [0.841, 0.638], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 0.835, b: -0.066, c: 0.078, d: 0.997, tx: 5.65, ty: -36.35},
						transform: [5.65, -36.35, 0.837, 1, 0.078, -0.078, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.492, 0], [0.531, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: -0.813, b: -0.067, c: -0.082, d: 0.997, tx: -3.95, ty: -35.9},
						transform: [-3.95, -35.9, 0.816, 1, -0.083, -3.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.167, 0.428], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -7.15, ty: -33.7},
						transform: [-7.15, -33.7, 1, 1, 0, 3.142, NaN],
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
						to: 6,
						classname: "_starchy_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.57, tx: -0.5, ty: -2.05},
						transform: [-0.5, -2.05, 0.46, 0.57, 0, 0, 0],
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
						to: 5,
					},
					{
						from: 6,
						to: 6,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_starchy_starchy_die": {
		type: "movieclip",
		fps: 30,
		totalFrames: 64,
		labels: {loop: {from:37, to:62}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 63,
						classname: "_starchy_starchy_die_char",
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
				name: "hat",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_starchy_gorravuela",
						instancename: "",
						matrix: {a: 0.995, b: -0.1, c: 0.1, d: 0.995, tx: -3.3, ty: -41.05},
						transform: [-3.3, -41.05, 1, 1, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.211, 0.627], [0.557, 1], [1, 1], ],
							rotation: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							scale: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							color: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							filters: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
						}
					},
					{
						from: 11,
						to: 22,
						classname: "_starchy_gorravuela",
						instancename: "",
						matrix: {a: -0.984, b: 0.181, c: -0.181, d: -0.984, tx: -3.15, ty: -61.2},
						transform: [-3.15, -61.2, 1, 1, -2.96, 2.96, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0.534], [0.85, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 36,
						classname: "_starchy_gorravuela",
						instancename: "",
						matrix: {a: 0.849, b: -0.528, c: 0.528, d: 0.849, tx: -2.95, ty: -61.1},
						transform: [-2.95, -61.1, 1, 1, 0.557, -0.557, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.248, 0.349], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 37,
						to: 49,
						classname: "_starchy_gorravuela",
						instancename: "",
						matrix: {a: 0.969, b: 0.248, c: -0.248, d: 0.969, tx: -3.2, ty: -61},
						transform: [-3.2, -61, 1, 1, -0.25, 0.25, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.564, 1], [1, 1], ],
						}
					},
					{
						from: 50,
						to: 62,
						classname: "_starchy_gorravuela",
						instancename: "",
						matrix: {a: 0.888, b: -0.46, c: 0.46, d: 0.888, tx: -3, ty: -61.05},
						transform: [-3, -61.05, 1, 1, 0.478, -0.478, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.564, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_starchy_gorravuela",
						instancename: "",
						matrix: {a: 0.969, b: 0.248, c: -0.248, d: 0.969, tx: -3.2, ty: -61},
						transform: [-3.2, -61, 1, 1, -0.25, 0.25, NaN],
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
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 36,
					},
					{
						from: 37,
						to: 62,
					},
					{
						from: 63,
						to: 63,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_starchy_peppermint_respawn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 64,
		labels: {},
		layers: [
			{
				name: "Layer 7",
				keys: [
					{
						from: 0,
						to: 63,
						classname: "_starchy_star",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: 9.25, ty: -0.35},
						transform: [9.25, -0.35, 1, 1, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 19,
						classname: "_starchy_legzen",
						instancename: "",
						matrix: {a: 1.046, b: 0, c: 0, d: 1.046, tx: 6.9, ty: 12.6},
						transform: [6.9, 12.6, 1.046, 1.046, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 32,
						classname: "_starchy_legzen",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.6, ty: 11.55},
						transform: [7.6, 11.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 48,
						classname: "_starchy_legzen",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.6, ty: 14.15},
						transform: [7.6, 14.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 54,
						classname: "_starchy_legzen",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.6, ty: 11.55},
						transform: [7.6, 11.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 55,
						classname: "_starchy_legzen",
						instancename: "",
						matrix: {a: 0.983, b: -0.176, c: 0.149, d: 0.83, tx: 6.5, ty: 15.65},
						transform: [6.5, 15.65, 0.999, 0.843, 0.177, -0.177, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 56,
						to: 63,
					},
				]
			},
			{
				name: "shoe",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 19,
						classname: "_starchy_legzen",
						instancename: "",
						matrix: {a: -1.046, b: 0, c: 0, d: 1.046, tx: -9.1, ty: 12.6},
						transform: [-9.1, 12.6, 1.046, 1.046, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 32,
						classname: "_starchy_legzen",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -7.75, ty: 11.55},
						transform: [-7.75, 11.55, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 48,
						classname: "_starchy_legzen",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -7.75, ty: 14.15},
						transform: [-7.75, 14.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 54,
						classname: "_starchy_legzen",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -7.75, ty: 11.55},
						transform: [-7.75, 11.55, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 55,
						classname: "_starchy_legzen",
						instancename: "",
						matrix: {a: -0.967, b: -0.254, c: -0.254, d: 0.967, tx: -8.7, ty: 13.8},
						transform: [-8.7, 13.8, 1, 1, -0.257, -2.885, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 56,
						to: 62,
						classname: "_starchy_leg_air2",
						instancename: "",
						matrix: {a: 0.942, b: -0.174, c: 0.134, d: 0.725, tx: -7.45, ty: 13.6},
						transform: [-7.45, 13.6, 0.958, 0.737, 0.182, -0.182, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.143, 0.343], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_starchy_leg_air2",
						instancename: "",
						matrix: {a: 0.485, b: 0.874, c: -0.874, d: 0.485, tx: -8.8, ty: 16.3},
						transform: [-8.8, 16.3, 1, 1, -1.064, 1.064, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm1",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 19,
						classname: "_starchy_starchy_arm999_x",
						instancename: "arm1",
						matrix: {a: 1.046, b: 0, c: 0, d: 1.046, tx: 26.65, ty: -4.75},
						transform: [26.65, -4.75, 1.046, 1.046, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 32,
						classname: "_starchy_starchy_arm999_x",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 26.45, ty: -5.1},
						transform: [26.45, -5.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 48,
						classname: "_starchy_starchy_arm999_x",
						instancename: "arm1",
						matrix: {a: 0.994, b: -0.113, c: 0.113, d: 0.994, tx: 26.45, ty: -2.5},
						transform: [26.45, -2.5, 1, 1, 0.113, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 54,
						classname: "_starchy_starchy_arm999_x",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 26.45, ty: -5.1},
						transform: [26.45, -5.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 55,
						classname: "_starchy_starchy_arm999_x",
						instancename: "arm1",
						matrix: {a: 0.817, b: -0.576, c: 0.576, d: 0.817, tx: 27.95, ty: -1.95},
						transform: [27.95, -1.95, 0.999, 0.999, 0.615, -0.615, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 56,
						to: 62,
						classname: "_starchy_starchy_arm_compo",
						instancename: "arm1",
						matrix: {a: 0.801, b: -0.599, c: 0.599, d: 0.801, tx: 22.85, ty: 3.75},
						transform: [22.85, 3.75, 1, 1, 0.642, -0.642, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.143, 0.343], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_starchy_starchy_arm_compo",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.95, ty: 0.8},
						transform: [24.95, 0.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm1 copy",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 19,
						classname: "_starchy_starchy_arm999_x",
						instancename: "arm1",
						matrix: {a: -1.046, b: 0, c: 0, d: 1.046, tx: -28.3, ty: -4.75},
						transform: [-28.3, -4.75, 1.046, 1.046, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 32,
						classname: "_starchy_starchy_arm999_x",
						instancename: "arm1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -26.15, ty: -5.1},
						transform: [-26.15, -5.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 48,
						classname: "_starchy_starchy_arm999_x",
						instancename: "arm1",
						matrix: {a: -0.995, b: -0.096, c: -0.096, d: 0.995, tx: -26.15, ty: -2.5},
						transform: [-26.15, -2.5, 1, 1, -0.096, -3.046, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 54,
						classname: "_starchy_starchy_arm999_x",
						instancename: "arm1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -26.15, ty: -5.1},
						transform: [-26.15, -5.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 55,
						classname: "_starchy_starchy_arm999_x",
						instancename: "arm1",
						matrix: {a: -0.7, b: -0.713, c: -0.713, d: 0.7, tx: -25.55, ty: -2.15},
						transform: [-25.55, -2.15, 0.999, 0.999, -0.794, -2.347, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 56,
						to: 62,
						classname: "_starchy_starchy_arm_compo",
						instancename: "arm2",
						matrix: {a: -0.932, b: -0.362, c: -0.362, d: 0.932, tx: -23.85, ty: 1.2},
						transform: [-23.85, 1.2, 1, 1, -0.37, -2.771, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.143, 0.343], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_starchy_starchy_arm_compo",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -20.15, ty: -0.3},
						transform: [-20.15, -0.3, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 19,
						classname: "_starchy_starchy_body_5_x",
						instancename: "",
						matrix: {a: 1.046, b: 0, c: 0, d: 1.046, tx: -0.75, ty: -11.75},
						transform: [-0.75, -11.75, 1.046, 1.046, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 32,
						classname: "_starchy_starchy_body_5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.2, ty: -11.8},
						transform: [0.2, -11.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 48,
						classname: "_starchy_starchy_body_5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.2, ty: -9.2},
						transform: [0.2, -9.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 55,
						classname: "_starchy_starchy_body_5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.2, ty: -11.8},
						transform: [0.2, -11.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 56,
						to: 62,
						classname: "_starchy_starchy_body_turn",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.4, ty: -9.4},
						transform: [1.4, -9.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.143, 0.343], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_starchy_starchy_body_turn",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.4, ty: -9.4},
						transform: [1.4, -9.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg",
				keys: [
					{
						from: 0,
						to: 55,
					},
					{
						from: 56,
						to: 62,
						classname: "_starchy_leg_air",
						instancename: "",
						matrix: {a: 0.886, b: 0.23, c: -0.172, d: 0.662, tx: 9.7, ty: 16.5},
						transform: [9.7, 16.5, 0.915, 0.684, -0.254, 0.254, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.143, 0.343], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_starchy_leg_air",
						instancename: "",
						matrix: {a: 0.559, b: 0.829, c: -0.829, d: 0.559, tx: 7.95, ty: 17.55},
						transform: [7.95, 17.55, 1, 1, -0.977, 0.977, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye2",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 19,
						classname: "_starchy_startchy_eye_blank_x",
						instancename: "eye2",
						matrix: {a: -1.046, b: 0, c: 0, d: 1.046, tx: -13.85, ty: -15.1},
						transform: [-13.85, -15.1, 1.046, 1.046, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 32,
						classname: "_starchy_startchy_eye_blank_x",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -12.3, ty: -15},
						transform: [-12.3, -15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 48,
						classname: "_starchy_startchy_eye_blank_x",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -12.3, ty: -12.4},
						transform: [-12.3, -12.4, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 62,
						classname: "_starchy_eye_wakeup",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -12.3, ty: -15},
						transform: [-12.3, -15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.143, 0.343], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_starchy_starchy_eye_compo",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.5, ty: -17.7},
						transform: [-13.5, -17.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye1",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 19,
						classname: "_starchy_startchy_eye_blank_x",
						instancename: "eye1",
						matrix: {a: 1.046, b: 0, c: 0, d: 1.046, tx: 10.1, ty: -15.35},
						transform: [10.1, -15.35, 1.046, 1.046, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 32,
						classname: "_starchy_startchy_eye_blank_x",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.65, ty: -15.25},
						transform: [10.65, -15.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 48,
						classname: "_starchy_startchy_eye_blank_x",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.65, ty: -12.65},
						transform: [10.65, -12.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 62,
						classname: "_starchy_eye_wakeup",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.8, ty: -15.45},
						transform: [10.8, -15.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.143, 0.343], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_starchy_starchy_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6, ty: -17.7},
						transform: [6, -17.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "mouth",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 19,
						classname: "_starchy_mouth_555",
						instancename: "",
						matrix: {a: 1.046, b: 0, c: 0, d: 1.046, tx: -1.55, ty: -0.85},
						transform: [-1.55, -0.85, 1.046, 1.046, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 32,
						classname: "_starchy_mouth_555",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.55, ty: -1.35},
						transform: [-0.55, -1.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 48,
						classname: "_starchy_mouth_555",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.55, ty: 1.25},
						transform: [-0.55, 1.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 54,
						classname: "_starchy_mouth_555",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.55, ty: -1.35},
						transform: [-0.55, -1.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 55,
						classname: "_starchy_mouth_555",
						instancename: "",
						matrix: {a: 1.083, b: -0.047, c: 0.044, d: 0.999, tx: -2.85, ty: -5.3},
						transform: [-2.85, -5.3, 1.084, 1, 0.044, -0.044, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 56,
						to: 62,
						classname: "_starchy_starchy_mouth_compo",
						instancename: "mouth",
						matrix: {a: 1.097, b: -0.057, c: 0.051, d: 0.999, tx: -3.85, ty: -8},
						transform: [-3.85, -8, 1.098, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.143, 0.343], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_starchy_starchy_mouth_compo",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.4, ty: -6.9},
						transform: [-5.4, -6.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "moustache",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 19,
						classname: "_starchy_moustache_2_x",
						instancename: "",
						matrix: {a: 1.16, b: 0, c: 0, d: 0.949, tx: -1.8, ty: -9.9},
						transform: [-1.8, -9.9, 1.16, 0.949, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 32,
						classname: "_starchy_moustache_2_x",
						instancename: "",
						matrix: {a: 1.109, b: 0, c: 0, d: 0.908, tx: -0.8, ty: -10},
						transform: [-0.8, -10, 1.109, 0.908, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 48,
						classname: "_starchy_moustache_2_x",
						instancename: "",
						matrix: {a: 1.127, b: 0, c: 0, d: 0.869, tx: -0.8, ty: -7.4},
						transform: [-0.8, -7.4, 1.127, 0.869, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 54,
						classname: "_starchy_moustache_2_x",
						instancename: "",
						matrix: {a: 1.109, b: 0, c: 0, d: 0.908, tx: -0.8, ty: -10},
						transform: [-0.8, -10, 1.109, 0.908, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 55,
						classname: "_starchy_moustache_2_x",
						instancename: "",
						matrix: {a: 1.109, b: 0, c: 0, d: 0.908, tx: -2.95, ty: -12.6},
						transform: [-2.95, -12.6, 1.109, 0.908, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 56,
						to: 62,
					},
					{
						from: 63,
						to: 63,
					},
				]
			},
			{
				name: "starchy_hat_1_x",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 19,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 1.046, b: 0, c: 0, d: 1.046, tx: 6.55, ty: -37.4},
						transform: [6.55, -37.4, 1.046, 1.046, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 32,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.25, ty: -36.3},
						transform: [7.25, -36.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 48,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.039, c: -0.039, d: 0.999, tx: 7.25, ty: -33.7},
						transform: [7.25, -33.7, 1, 1, -0.039, 0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 55,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.25, ty: -36.3},
						transform: [7.25, -36.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 56,
						to: 62,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.052, c: 0.052, d: 0.999, tx: 7.75, ty: -34.9},
						transform: [7.75, -34.9, 1, 1, 0.052, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.143, 0.343], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.2, ty: -33.7},
						transform: [7.2, -33.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0], [0.518, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 12,
						classname: "_starchy_starchy_glow_x",
						instancename: "",
						matrix: {a: 0.126, b: -0.137, c: 0.137, d: 0.126, tx: -0.2, ty: -7.05},
						transform: [-0.2, -7.05, 0.186, 0.186, 0.828, -0.828, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.3], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 19,
						classname: "_starchy_starchy_glow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.6, ty: -11.95},
						transform: [-0.6, -11.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.447, 0], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_starchy_starchy_glow_x",
						instancename: "",
						matrix: {a: 0.957, b: 0, c: 0, d: 0.957, tx: 0.15, ty: -12.3},
						transform: [0.15, -12.3, 0.957, 0.957, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 63,
					},
				]
			},
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 1,
					},
					{
						from: 2,
						to: 6,
						classname: "_starchy_glowrespawn_x",
						instancename: "",
						matrix: {a: 0.295, b: 0, c: 0, d: 0.295, tx: -0.35, ty: -8.2},
						transform: [-0.35, -8.2, 0.295, 0.295, 0, 0, 0],
						alpha: 0.03,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.226, 0.5], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_starchy_glowrespawn_x",
						instancename: "",
						matrix: {a: 0.056, b: 0, c: 0, d: 0.056, tx: -0.35, ty: -8.2},
						transform: [-0.35, -8.2, 0.056, 0.056, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.226, 0.5], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 22,
						classname: "_starchy_glowrespawn_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.35, ty: -8.2},
						transform: [-0.35, -8.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0.442], [0.608, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 63,
						classname: "_starchy_glowrespawn_x",
						instancename: "",
						matrix: {a: 1.451, b: 0, c: 0, d: 1.451, tx: -0.35, ty: -8.2},
						transform: [-0.35, -8.2, 1.451, 1.451, 0, 0, 0],
						alpha: 0,
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
						to: 1,
					},
					{
						from: 2,
						to: 6,
						classname: "_starchy_glowrespawn_x",
						instancename: "",
						matrix: {a: 0.295, b: 0, c: 0, d: 0.295, tx: -0.35, ty: -8.2},
						transform: [-0.35, -8.2, 0.295, 0.295, 0, 0, 0],
						alpha: 0.03,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.226, 0.5], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_starchy_glowrespawn_x",
						instancename: "",
						matrix: {a: 0.056, b: 0, c: 0, d: 0.056, tx: -0.35, ty: -8.2},
						transform: [-0.35, -8.2, 0.056, 0.056, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.226, 0.5], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 22,
						classname: "_starchy_glowrespawn_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.35, ty: -8.2},
						transform: [-0.35, -8.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0.442], [0.608, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 63,
						classname: "_starchy_glowrespawn_x",
						instancename: "",
						matrix: {a: 1.451, b: 0, c: 0, d: 1.451, tx: -0.35, ty: -8.2},
						transform: [-0.35, -8.2, 1.451, 1.451, 0, 0, 0],
						alpha: 0,
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
						to: 16,
					},
					{
						from: 17,
						to: 32,
						classname: "_starchy_glowrespawn_x",
						instancename: "",
						matrix: {a: 0.623, b: 0, c: 0, d: 0.623, tx: -0.45, ty: -8.2},
						transform: [-0.45, -8.2, 0.623, 0.623, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.418], [0.591, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 45,
						classname: "_starchy_glowrespawn_x",
						instancename: "",
						matrix: {a: 0.623, b: 0, c: 0, d: 0.623, tx: -0.45, ty: -7.05},
						transform: [-0.45, -7.05, 0.623, 0.623, 0, 0, 0],
						alpha: 0.51,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.417, 0.027], [0.799, 0.5], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 63,
						classname: "_starchy_glowrespawn_x",
						instancename: "",
						matrix: {a: 0.623, b: 0, c: 0, d: 0.623, tx: -0.45, ty: -8.2},
						transform: [-0.45, -8.2, 0.623, 0.623, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_starchy_box_physics": {
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
	"_starchy_circle_physics": {
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
	"_starchy_chain": {
		type: "movieclip",
		fps: 30,
		totalFrames: 32,
		labels: {},
		layers: [
			{
				name: "eslabon1_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_starchy_eslabon1_x",
						instancename: "",
						matrix: {a: 0.524, b: -0.852, c: 0.852, d: 0.524, tx: 9.95, ty: -25.6},
						transform: [9.95, -25.6, 1, 1, 1.02, -1.02, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.438, 0], [0.438, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 30,
						classname: "_starchy_eslabon1_x",
						instancename: "",
						matrix: {a: 0.524, b: -0.852, c: 0.852, d: 0.524, tx: 9.45, ty: -27.2},
						transform: [9.45, -27.2, 1, 1, 1.02, -1.02, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.438, 0], [0.438, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 31,
						classname: "_starchy_eslabon1_x",
						instancename: "",
						matrix: {a: 0.524, b: -0.852, c: 0.852, d: 0.524, tx: 9.95, ty: -25.6},
						transform: [9.95, -25.6, 1, 1, 1.02, -1.02, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eslabon2_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_starchy_eslabon2_x",
						instancename: "",
						matrix: {a: 0.704, b: -0.71, c: 0.71, d: 0.704, tx: 14.4, ty: -22.8},
						transform: [14.4, -22.8, 1, 1, 0.789, -0.789, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.438, 0], [0.438, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 30,
						classname: "_starchy_eslabon2_x",
						instancename: "",
						matrix: {a: 0.622, b: -0.783, c: 0.783, d: 0.622, tx: 13.75, ty: -24.15},
						transform: [13.75, -24.15, 1, 1, 0.899, -0.899, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.438, 0], [0.438, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 31,
						classname: "_starchy_eslabon2_x",
						instancename: "",
						matrix: {a: 0.704, b: -0.71, c: 0.71, d: 0.704, tx: 14.4, ty: -22.8},
						transform: [14.4, -22.8, 1, 1, 0.789, -0.789, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eslabon1_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_starchy_eslabon1_x",
						instancename: "",
						matrix: {a: 0.712, b: -0.458, c: 0.458, d: 0.712, tx: 17.4, ty: -19.65},
						transform: [17.4, -19.65, 0.846, 0.846, 0.571, -0.571, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.438, 0], [0.438, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 30,
						classname: "_starchy_eslabon1_x",
						instancename: "",
						matrix: {a: 0.712, b: -0.458, c: 0.458, d: 0.712, tx: 17.3, ty: -20.55},
						transform: [17.3, -20.55, 0.846, 0.846, 0.571, -0.571, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.438, 0], [0.438, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 31,
						classname: "_starchy_eslabon1_x",
						instancename: "",
						matrix: {a: 0.712, b: -0.458, c: 0.458, d: 0.712, tx: 17.4, ty: -19.65},
						transform: [17.4, -19.65, 0.846, 0.846, 0.571, -0.571, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eslabon2_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_starchy_eslabon2_x",
						instancename: "",
						matrix: {a: 0.991, b: -0.135, c: 0.135, d: 0.991, tx: 18.9, ty: -15.35},
						transform: [18.9, -15.35, 1, 1, 0.135, -0.135, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.438, 0], [0.438, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 30,
						classname: "_starchy_eslabon2_x",
						instancename: "",
						matrix: {a: 0.896, b: -0.444, c: 0.444, d: 0.896, tx: 19.35, ty: -15.9},
						transform: [19.35, -15.9, 1, 1, 0.46, -0.46, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.438, 0], [0.438, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 31,
						classname: "_starchy_eslabon2_x",
						instancename: "",
						matrix: {a: 0.991, b: -0.135, c: 0.135, d: 0.991, tx: 18.9, ty: -15.35},
						transform: [18.9, -15.35, 1, 1, 0.135, -0.135, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eslabon1_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_starchy_eslabon1_x",
						instancename: "",
						matrix: {a: 0.83, b: 0.164, c: -0.164, d: 0.83, tx: 19.05, ty: -11.4},
						transform: [19.05, -11.4, 0.846, 0.846, -0.196, 0.196, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.438, 0], [0.438, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 30,
						classname: "_starchy_eslabon1_x",
						instancename: "",
						matrix: {a: 0.838, b: 0.117, c: -0.117, d: 0.838, tx: 20.9, ty: -11.7},
						transform: [20.9, -11.7, 0.846, 0.846, -0.139, 0.139, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.438, 0], [0.438, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 31,
						classname: "_starchy_eslabon1_x",
						instancename: "",
						matrix: {a: 0.83, b: 0.164, c: -0.164, d: 0.83, tx: 19.05, ty: -11.4},
						transform: [19.05, -11.4, 0.846, 0.846, -0.196, 0.196, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eslabon2_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_starchy_eslabon2_x",
						instancename: "",
						matrix: {a: 0.912, b: 0.411, c: -0.411, d: 0.912, tx: 17.5, ty: -6.85},
						transform: [17.5, -6.85, 1, 1, -0.424, 0.424, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.438, 0], [0.438, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 30,
						classname: "_starchy_eslabon2_x",
						instancename: "",
						matrix: {a: 0.857, b: 0.515, c: -0.515, d: 0.857, tx: 18.95, ty: -7.4},
						transform: [18.95, -7.4, 1, 1, -0.541, 0.541, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.438, 0], [0.438, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 31,
						classname: "_starchy_eslabon2_x",
						instancename: "",
						matrix: {a: 0.912, b: 0.411, c: -0.411, d: 0.912, tx: 17.5, ty: -6.85},
						transform: [17.5, -6.85, 1, 1, -0.424, 0.424, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eslabon1_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_starchy_eslabon1_x",
						instancename: "",
						matrix: {a: 0.83, b: 0.164, c: -0.164, d: 0.83, tx: 16, ty: -2.5},
						transform: [16, -2.5, 0.846, 0.846, -0.196, 0.196, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.438, 0], [0.438, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 30,
						classname: "_starchy_eslabon1_x",
						instancename: "",
						matrix: {a: 0.83, b: 0.164, c: -0.164, d: 0.83, tx: 16.6, ty: -3.25},
						transform: [16.6, -3.25, 0.846, 0.846, -0.196, 0.196, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.438, 0], [0.438, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 31,
						classname: "_starchy_eslabon1_x",
						instancename: "",
						matrix: {a: 0.83, b: 0.164, c: -0.164, d: 0.83, tx: 16, ty: -2.5},
						transform: [16, -2.5, 0.846, 0.846, -0.196, 0.196, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_starchy_soulbase_empty": {
		type: "movieclip",
		fps: 30,
		totalFrames: 39,
		labels: {loop: {from:1, to:37}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 38,
						classname: "_starchy_balloon_tail",
						instancename: "tail",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.05, ty: 9.3},
						transform: [2.05, 9.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "balloon_head",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_starchy_soul_head",
						instancename: "head",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 4},
						transform: [0, 4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 15,
						classname: "_starchy_soul_head",
						instancename: "head",
						matrix: {a: 0.968, b: 0, c: 0, d: 1.019, tx: 0, ty: 4},
						transform: [0, 4, 0.968, 1.019, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 37,
						classname: "_starchy_soul_head",
						instancename: "head",
						matrix: {a: 1.017, b: 0, c: 0, d: 0.981, tx: 0.05, ty: 4},
						transform: [0.05, 4, 1.017, 0.981, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 38,
						classname: "_starchy_soul_head",
						instancename: "head",
						matrix: {a: 0.968, b: 0, c: 0, d: 1.019, tx: 0, ty: 4},
						transform: [0, 4, 0.968, 1.019, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.55, 1], [1, 1], ],
						}
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
						to: 37,
					},
					{
						from: 38,
						to: 38,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_starchy_soulbase": {
		type: "movieclip",
		fps: 30,
		totalFrames: 39,
		labels: {loop: {from:1, to:37}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 38,
						classname: "_starchy_balloon_tail",
						instancename: "tail",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.05, ty: 9.3},
						transform: [2.05, 9.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "balloon_head",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_starchy_soul_head",
						instancename: "head",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 4},
						transform: [0, 4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 15,
						classname: "_starchy_soul_head",
						instancename: "head",
						matrix: {a: 0.968, b: 0, c: 0, d: 1.019, tx: 0, ty: 4},
						transform: [0, 4, 0.968, 1.019, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 37,
						classname: "_starchy_soul_head",
						instancename: "head",
						matrix: {a: 1.017, b: 0, c: 0, d: 0.981, tx: 0.05, ty: 4},
						transform: [0.05, 4, 1.017, 0.981, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 38,
						classname: "_starchy_soul_head",
						instancename: "head",
						matrix: {a: 0.968, b: 0, c: 0, d: 1.019, tx: 0, ty: 4},
						transform: [0, 4, 0.968, 1.019, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.55, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 38,
						classname: "_starchy_particuler",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.35, ty: -22.8},
						transform: [0.35, -22.8, 1, 1, 0, 0, 0],
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
						to: 37,
					},
					{
						from: 38,
						to: 38,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_starchy_balloon_explotion": {
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
						to: 0,
						classname: "_starchy_explotion_0_x",
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
						classname: "_starchy_explotion_1_x",
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
						classname: "_starchy_explotion_3_x",
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
						classname: "_starchy_explotion_4_x",
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
						classname: "_starchy_explotion_5_x",
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
						classname: "_starchy_explotion_6_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.2, ty: 0.1},
						transform: [0.2, 0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_starchy_explotion_7_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.15, ty: 0.15},
						transform: [0.15, 0.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_starchy_explotion_8_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0.3},
						transform: [0, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 19,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_starchy_explotion_line_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.569], [0.557, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_starchy_explotion_line_x",
						instancename: "",
						matrix: {a: 1.371, b: 0, c: 0, d: 1.371, tx: 0, ty: 0},
						transform: [0, 0, 1.371, 1.371, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 19,
					},
				]
			},
			{
				name: "explotion_line",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_starchy_explotion_line",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -28.65},
						transform: [0, -28.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 19,
					},
				]
			},
			{
				name: "explotion_line",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_starchy_explotion_line",
						instancename: "",
						matrix: {a: 0, b: -1, c: 1, d: 0, tx: -25.3, ty: 0.15},
						transform: [-25.3, 0.15, 1, 1, 1.571, -1.571, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 19,
					},
				]
			},
			{
				name: "explotion_line",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_starchy_explotion_line",
						instancename: "",
						matrix: {a: 0.634, b: -0.636, c: 0.636, d: 0.634, tx: -20.75, ty: -21.45},
						transform: [-20.75, -21.45, 0.898, 0.898, 0.787, -0.787, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 19,
					},
				]
			},
			{
				name: "explotion_line",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_starchy_explotion_line",
						instancename: "",
						matrix: {a: 0, b: -1, c: -1, d: 0, tx: 25.35, ty: 0.15},
						transform: [25.35, 0.15, 1, 1, -1.571, -1.571, -1.571],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 19,
					},
				]
			},
			{
				name: "explotion_line",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_starchy_explotion_line",
						instancename: "",
						matrix: {a: -0.634, b: -0.636, c: -0.636, d: 0.634, tx: 20.8, ty: -21.45},
						transform: [20.8, -21.45, 0.898, 0.898, -0.787, -2.355, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 19,
					},
				]
			},
			{
				name: "explotion_line",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_starchy_explotion_line",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: 0, ty: 29.05},
						transform: [0, 29.05, 1, 1, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 19,
					},
				]
			},
			{
				name: "explotion_line",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_starchy_explotion_line",
						instancename: "",
						matrix: {a: 0.634, b: 0.636, c: 0.636, d: -0.634, tx: -18.7, ty: 20.05},
						transform: [-18.7, 20.05, 0.898, 0.898, 2.355, 0.787, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 19,
					},
				]
			},
			{
				name: "explotion_line",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_starchy_explotion_line",
						instancename: "",
						matrix: {a: -0.634, b: 0.636, c: -0.636, d: -0.634, tx: 19.1, ty: 20.15},
						transform: [19.1, 20.15, 0.898, 0.898, -2.355, 2.355, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 19,
					},
				]
			},
			{
				name: "Layer 12",
				keys: [
					{
						from: 0,
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
				name: "Capa 2",
				keys: [
					{
						from: 0,
						to: 0,
						actions: function(self){soundManager.play("puncture_balloon", true);},
					},
					{
						from: 1,
						to: 19,
					},
				]
			},
		]
	},
	"_starchy_hittablebox": {
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
	"_starchy_starchy_arm_compo": {
		type: "movieclip",
		fps: 30,
		totalFrames: 22,
		labels: {idle: {from:0, to:3}, flap: {from:5, to:10}, flap_out: {from:12, to:20}, },
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 11,
						classname: "_starchy_starchy_arm1_flap",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: 0.977, b: -0.212, c: 0.212, d: 0.977, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0.214, -0.214, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.4], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 17,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: 0.994, b: 0.114, c: -0.121, d: 1.055, tx: 0, ty: 0},
						transform: [0, 0, 1, 1.062, -0.114, 0.114, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.482, 0], [0.51, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 20,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: 0.995, b: -0.104, c: 0.104, d: 0.995, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0.104, -0.104, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0], [0.569, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
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
	"_starchy_leg_air2": {
		type: "movieclip",
		fps: 30,
		totalFrames: 29,
		labels: {},
		layers: [
			{
				name: "starchy_leg_ground_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_starchy_starchy_leg_2_x",
						instancename: "",
						matrix: {a: 0.996, b: -0.091, c: 0.091, d: 0.996, tx: 0.1, ty: 0},
						transform: [0.1, 0, 1, 1, 0.092, -0.092, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.407, 0.031], [0.61, 0.849], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 27,
						classname: "_starchy_starchy_leg_2_x",
						instancename: "",
						matrix: {a: 0.919, b: -0.394, c: 0.368, d: 0.859, tx: 0.1, ty: 0},
						transform: [0.1, 0, 1, 0.934, 0.405, -0.405, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.407, 0.031], [0.61, 0.849], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_starchy_starchy_leg_2_x",
						instancename: "",
						matrix: {a: 0.996, b: -0.091, c: 0.091, d: 0.996, tx: 0.1, ty: 0},
						transform: [0.1, 0, 1, 1, 0.092, -0.092, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.407, 0.031], [0.61, 0.849], [1, 1], ],
						}
					},
				]
			},
			{
				name: "starchy_shoe_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_starchy_starchy_shoe_2_x",
						instancename: "",
						matrix: {a: 0.891, b: -0.451, c: 0.415, d: 0.821, tx: -0.2, ty: 11.7},
						transform: [-0.2, 11.7, 0.999, 0.92, 0.468, -0.468, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.302, 0.456], [0.624, 0.836], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 15,
						classname: "_starchy_starchy_shoe_2_x",
						instancename: "",
						matrix: {a: 0.938, b: -0.346, c: 0.332, d: 0.9, tx: -1.2, ty: 11.9},
						transform: [-1.2, 11.9, 1, 0.959, 0.353, -0.353, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.407, 0.031], [0.61, 0.849], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 27,
						classname: "_starchy_starchy_shoe_2_x",
						instancename: "",
						matrix: {a: 0.708, b: -0.706, c: 0.579, d: 0.581, tx: 2.55, ty: 10.7},
						transform: [2.55, 10.7, 1, 0.82, 0.784, -0.784, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.413, 0.03], [0.681, 0.595], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_starchy_starchy_shoe_2_x",
						instancename: "",
						matrix: {a: 0.891, b: -0.451, c: 0.415, d: 0.821, tx: -0.2, ty: 11.7},
						transform: [-0.2, 11.7, 0.999, 0.92, 0.468, -0.468, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.302, 0.456], [0.624, 0.836], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_starchy_starchy_body_x": {
		type: "bitmap",
		asset: "_starchy_starchy_body_x",
		scale: 2,
		position: [-33.6, -33.65],
	},
	"_starchy_leg_air": {
		type: "movieclip",
		fps: 30,
		totalFrames: 29,
		labels: {},
		layers: [
			{
				name: "starchy_leg_ground_x",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_starchy_starchy_leg_2_x",
						instancename: "",
						matrix: {a: 0.919, b: -0.394, c: 0.368, d: 0.859, tx: 0.1, ty: 0},
						transform: [0.1, 0, 1, 0.934, 0.405, -0.405, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.407, 0.031], [0.61, 0.849], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 27,
						classname: "_starchy_starchy_leg_2_x",
						instancename: "",
						matrix: {a: 0.996, b: -0.091, c: 0.091, d: 0.996, tx: 0.1, ty: 0},
						transform: [0.1, 0, 1, 1, 0.092, -0.092, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.407, 0.031], [0.61, 0.849], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_starchy_starchy_leg_2_x",
						instancename: "",
						matrix: {a: 0.919, b: -0.394, c: 0.368, d: 0.859, tx: 0.1, ty: 0},
						transform: [0.1, 0, 1, 0.934, 0.405, -0.405, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.407, 0.031], [0.61, 0.849], [1, 1], ],
						}
					},
				]
			},
			{
				name: "starchy_shoe_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_starchy_starchy_shoe_2_x",
						instancename: "",
						matrix: {a: 0.708, b: -0.706, c: 0.579, d: 0.581, tx: 2.55, ty: 10.7},
						transform: [2.55, 10.7, 1, 0.82, 0.784, -0.784, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.407, 0.031], [0.61, 0.849], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 27,
						classname: "_starchy_starchy_shoe_2_x",
						instancename: "",
						matrix: {a: 0.938, b: -0.346, c: 0.332, d: 0.9, tx: -1.2, ty: 11.9},
						transform: [-1.2, 11.9, 1, 0.959, 0.353, -0.353, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.407, 0.031], [0.61, 0.849], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_starchy_starchy_shoe_2_x",
						instancename: "",
						matrix: {a: 0.708, b: -0.706, c: 0.579, d: 0.581, tx: 2.55, ty: 10.7},
						transform: [2.55, 10.7, 1, 0.82, 0.784, -0.784, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.407, 0.031], [0.61, 0.849], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_starchy_starchy_eye_compo": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {idle: {from:0, to:3}, flap: {from:5, to:10}, flap_out: {from:12, to:18}, },
		layers: [
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_starchy_startchy_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 11,
						classname: "_starchy_startchy_eye_flap",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 19,
						classname: "_starchy_startchy_eye_flapout",
						instancename: "eye1",
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
	"_starchy_starchy_mouth_compo": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {idle: {from:0, to:3}, flap: {from:5, to:10}, flap_out: {from:12, to:18}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_starchy_mouth_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.2, ty: 3.25},
						transform: [1.2, 3.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 11,
						classname: "_starchy_mouth_flap",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.2, ty: 3.25},
						transform: [1.2, 3.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 19,
						classname: "_starchy_mouth_flapout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.2, ty: 3.25},
						transform: [1.2, 3.25, 1, 1, 0, 0, 0],
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
	"_starchy_starchy_hat_1_x": {
		type: "bitmap",
		asset: "_starchy_starchy_hat_1_x",
		scale: 2,
		position: [-33.55, -16],
	},
	"_starchy_attackbox": {
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
	"_starchy_starchy_body_turn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 14,
		labels: {},
		layers: [
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_starchy_starchy_body_flat_x",
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
						classname: "_starchy_starchy_body_flat_x",
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
				name: "Layer 7",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_starchy_lightcircle_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.85, ty: -1.85},
						transform: [-2.85, -1.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_starchy_lightcircle_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.45, ty: -1.85},
						transform: [2.45, -1.85, 1, 1, 0, 0, 0],
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
						to: 5,
						classname: "_starchy_shadowhat_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.1, ty: -22.4},
						transform: [0.1, -22.4, 1, 1, 0, 0, 0],
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
						classname: "_starchy_shadowhat_x",
						instancename: "",
						matrix: {a: 0.989, b: -0.147, c: 0.191, d: 0.791, tx: -1.35, ty: -23.25},
						transform: [-1.35, -23.25, 1, 0.814, 0.237, -0.147, NaN],
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
						classname: "_starchy_shadowhat_x",
						instancename: "",
						matrix: {a: -1, b: 0.008, c: -0.087, d: 0.632, tx: -0.85, ty: -23.4},
						transform: [-0.85, -23.4, 1, 0.638, -0.137, 3.133, NaN],
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
						classname: "_starchy_shadowhat_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -0.25, ty: -22.25},
						transform: [-0.25, -22.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 8",
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
	"_starchy_starchy_arm1_x": {
		type: "bitmap",
		asset: "_starchy_starchy_arm1_x",
		scale: 2,
		position: [-6, -7.05],
	},
	"_starchy_starchy_shoe_x": {
		type: "bitmap",
		asset: "_starchy_starchy_shoe_x",
		scale: 2,
		position: [-9.7, -7.6],
	},
	"_starchy_starchy_leg_ground_x": {
		type: "bitmap",
		asset: "_starchy_starchy_leg_ground_x",
		scale: 2,
		position: [-11.25, -5.6],
	},
	"_starchy_startchy_eye_1": {
		type: "movieclip",
		fps: 30,
		totalFrames: 58,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 46,
						classname: "_starchy_starchy_eyebasic_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 47,
						to: 48,
						classname: "_starchy_starchy_eyebasic_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.744, 0.5], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 51,
						classname: "_starchy_starchy_eyebasic_x",
						instancename: "",
						matrix: {a: 0.966, b: -0.259, c: 0.149, d: 0.557, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.577, 0.262, -0.262, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 52,
						to: 55,
						classname: "_starchy_starchy_eyebasic_x",
						instancename: "",
						matrix: {a: 0.966, b: -0.259, c: 0.149, d: 0.557, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.577, 0.262, -0.262, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.171, 0.432], [0.516, 1], [1, 1], ],
						}
					},
					{
						from: 56,
						to: 57,
						classname: "_starchy_starchy_eyebasic_x",
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
						to: 9,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: -2.15},
						transform: [-0.2, -2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 14,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: -2.15},
						transform: [-0.2, -2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.559, 0], [0.529, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 25,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: -1.5},
						transform: [-0.2, -1.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 30,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: -1.5},
						transform: [-0.2, -1.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.455, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 45,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: -2.15},
						transform: [-0.2, -2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 46,
						to: 48,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: -2.15},
						transform: [-0.2, -2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.744, 0.5], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 51,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: -0.65},
						transform: [-0.2, -0.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 52,
						to: 56,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: -0.65},
						transform: [-0.2, -0.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.171, 0.432], [0.516, 1], [1, 1], ],
						}
					},
					{
						from: 57,
						to: 57,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: -2.15},
						transform: [-0.2, -2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_starchy_starc,hy_mouth_1_x": {
		type: "bitmap",
		asset: "_starchy_starc,hy_mouth_1_x",
		scale: 2,
		position: [-10.15, -7.65],
	},
	"_starchy_moustache_x": {
		type: "bitmap",
		asset: "_starchy_moustache_x",
		scale: 2,
		position: [-25.3, -11.5],
	},
	"_starchy_arm3_x": {
		type: "bitmap",
		asset: "_starchy_arm3_x",
		scale: 2,
		position: [-6.55, -6.5],
	},
	"_starchy_leg_ground2_x": {
		type: "bitmap",
		asset: "_starchy_leg_ground2_x",
		scale: 2,
		position: [-8.45, -6.3],
	},
	"_starchy_leg_ground_x": {
		type: "bitmap",
		asset: "_starchy_leg_ground_x",
		scale: 2,
		position: [-9.95, -5.3],
	},
	"_starchy_stepbox": {
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
	"_starchy_starchy_die_char": {
		type: "movieclip",
		fps: 30,
		totalFrames: 10,
		labels: {},
		layers: [
			{
				name: "shoe",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -0.978, b: 0.208, c: 0.208, d: 0.978, tx: 14.1, ty: 22.6},
						transform: [14.1, 22.6, 1, 1, 0.21, 2.932, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -0.881, b: -0.472, c: -0.472, d: 0.881, tx: 9.05, ty: 22.7},
						transform: [9.05, 22.7, 1, 1, -0.492, -2.65, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: -0.978, b: 0.208, c: 0.208, d: 0.978, tx: 14.1, ty: 22.6},
						transform: [14.1, 22.6, 1, 1, 0.21, 2.932, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: -0.978, b: 0.208, c: 0.208, d: 0.978, tx: 10.8, ty: 13.95},
						transform: [10.8, 13.95, 1, 1, 0.21, 2.932, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: -0.951, b: -0.308, c: -0.308, d: 0.951, tx: 10.85, ty: 13.4},
						transform: [10.85, 13.4, 1, 1, -0.313, -2.829, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: -0.978, b: 0.208, c: 0.208, d: 0.978, tx: 10.8, ty: 13.95},
						transform: [10.8, 13.95, 1, 1, 0.21, 2.932, NaN],
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
						to: 3,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: -0.91, b: 0.414, c: -0.414, d: -0.91, tx: -25.05, ty: -2.4},
						transform: [-25.05, -2.4, 1, 1, -2.714, 2.714, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: -0.66, b: 0.751, c: -0.751, d: -0.66, tx: -25, ty: -2.35},
						transform: [-25, -2.35, 1, 1, -2.291, 2.291, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm2",
						matrix: {a: -0.91, b: 0.414, c: -0.414, d: -0.91, tx: -25.05, ty: -2.4},
						transform: [-25.05, -2.4, 1, 1, -2.714, 2.714, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "shoe",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.95, b: 0.313, c: -0.313, d: 0.95, tx: -14.3, ty: 22.5},
						transform: [-14.3, 22.5, 1, 1, -0.318, 0.318, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.862, b: -0.507, c: 0.507, d: 0.862, tx: -7.25, ty: 21.75},
						transform: [-7.25, 21.75, 1, 1, 0.532, -0.532, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_starchy_starchy_shoe_x",
						instancename: "",
						matrix: {a: 0.95, b: 0.313, c: -0.313, d: 0.95, tx: -14.3, ty: 22.5},
						transform: [-14.3, 22.5, 1, 1, -0.318, 0.318, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 0.95, b: 0.313, c: -0.313, d: 0.95, tx: -10.15, ty: 14.25},
						transform: [-10.15, 14.25, 1, 1, -0.318, 0.318, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 0.932, b: -0.362, c: 0.362, d: 0.932, tx: -9.75, ty: 12.7},
						transform: [-9.75, 12.7, 1, 1, 0.371, -0.371, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_starchy_starchy_leg_ground_x",
						instancename: "",
						matrix: {a: 0.95, b: 0.313, c: -0.313, d: 0.95, tx: -10.15, ty: 14.25},
						transform: [-10.15, 14.25, 1, 1, -0.318, 0.318, NaN],
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
						to: 3,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: 0.943, b: 0.333, c: 0.333, d: -0.943, tx: 26.8, ty: -1.95},
						transform: [26.8, -1.95, 1, 1, 2.802, 0.34, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: 0.729, b: 0.684, c: 0.684, d: -0.729, tx: 26.8, ty: -1.85},
						transform: [26.8, -1.85, 1, 1, 2.388, 0.754, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_starchy_starchy_arm1_x",
						instancename: "arm1",
						matrix: {a: 0.943, b: 0.333, c: 0.333, d: -0.943, tx: 26.8, ty: -1.95},
						transform: [26.8, -1.95, 1, 1, 2.802, 0.34, NaN],
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
						classname: "_starchy_starchy_body_5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.2, ty: -11.8},
						transform: [0.2, -11.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_starchy_starchy_body_5_x",
						instancename: "",
						matrix: {a: 1.026, b: 0, c: 0, d: 0.983, tx: 0.2, ty: -11.8},
						transform: [0.2, -11.8, 1.026, 0.983, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_starchy_starchy_body_5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.2, ty: -11.8},
						transform: [0.2, -11.8, 1, 1, 0, 0, 0],
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
						to: 3,
						classname: "_starchy_startchy_eye_die",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -12.3, ty: -11.15},
						transform: [-12.3, -11.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_starchy_startchy_eye_die",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -12.3, ty: -9.55},
						transform: [-12.3, -9.55, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_starchy_startchy_eye_die",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -12.3, ty: -11.15},
						transform: [-12.3, -11.15, 1, 1, 0, 3.142, NaN],
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
						classname: "_starchy_startchy_eye_die",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.65, ty: -11.2},
						transform: [10.65, -11.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_starchy_startchy_eye_die",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.65, ty: -9.6},
						transform: [10.65, -9.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_starchy_startchy_eye_die",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.65, ty: -11.2},
						transform: [10.65, -11.2, 1, 1, 0, 0, 0],
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
						classname: "_starchy_mouth_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1, ty: 2.75},
						transform: [-1, 2.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_starchy_mouth_die",
						instancename: "",
						matrix: {a: 0.86, b: 0, c: 0, d: 0.86, tx: -0.95, ty: 3.95},
						transform: [-0.95, 3.95, 0.86, 0.86, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_starchy_mouth_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1, ty: 2.75},
						transform: [-1, 2.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "moustache",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_starchy_moustache_2_x",
						instancename: "",
						matrix: {a: 1.109, b: 0, c: 0, d: 0.908, tx: -0.8, ty: -6.75},
						transform: [-0.8, -6.75, 1.109, 0.908, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_starchy_moustache_2_x",
						instancename: "",
						matrix: {a: 1.29, b: 0, c: 0, d: 0.84, tx: -0.8, ty: -4.4},
						transform: [-0.8, -4.4, 1.29, 0.84, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_starchy_moustache_2_x",
						instancename: "",
						matrix: {a: 1.109, b: 0, c: 0, d: 0.908, tx: -0.8, ty: -6.75},
						transform: [-0.8, -6.75, 1.109, 0.908, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_starchy_gorravuela": {
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
						classname: "_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 8.3, ty: 3.95},
						transform: [8.3, 3.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_starchy_star": {
		type: "movieclip",
		fps: 30,
		totalFrames: 37,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_starchy_starpart_x",
						instancename: "",
						matrix: {a: 0.473, b: 0, c: 0, d: 1, tx: -68.3, ty: -17.3},
						transform: [-68.3, -17.3, 0.473, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.461, 0], [0.754, 0.524], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_starchy_starpart_x",
						instancename: "",
						matrix: {a: 2.53, b: 0, c: 0, d: 1, tx: 50, ty: -17.3},
						transform: [50, -17.3, 2.53, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_starchy_starpart_x",
						instancename: "",
						matrix: {a: 1.203, b: 0, c: 0, d: 1, tx: 69.45, ty: -17.3},
						transform: [69.45, -17.3, 1.203, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 15,
						classname: "_starchy_starpart_x",
						instancename: "",
						matrix: {a: 1.203, b: 0, c: 0, d: 1, tx: 69.45, ty: -17.3},
						transform: [69.45, -17.3, 1.203, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 17,
						classname: "_starchy_starpart_x",
						instancename: "",
						matrix: {a: -1.351, b: 0.947, c: -0.574, d: -0.819, tx: -43.7, ty: 66.9},
						transform: [-43.7, 66.9, 1.65, 1, -2.53, 2.53, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 19,
						classname: "_starchy_starpart_x",
						instancename: "",
						matrix: {a: -0.531, b: 0.372, c: -0.574, d: -0.819, tx: -55.65, ty: 75.3},
						transform: [-55.65, 75.3, 0.648, 1, -2.53, 2.53, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 21,
						classname: "_starchy_starpart_x",
						instancename: "",
						matrix: {a: 0.602, b: -1.718, c: 0.944, d: 0.331, tx: -9.9, ty: -64.5},
						transform: [-9.9, -64.5, 1.821, 1, 1.234, -1.234, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 23,
						classname: "_starchy_starpart_x",
						instancename: "",
						matrix: {a: 0.332, b: -0.9, c: 0.938, d: 0.346, tx: -6.6, ty: -68.7},
						transform: [-6.6, -68.7, 0.96, 1, 1.217, -1.217, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 25,
						classname: "_starchy_starpart_x",
						instancename: "",
						matrix: {a: 0.42, b: 1.384, c: -0.957, d: 0.291, tx: 37.5, ty: 63.9},
						transform: [37.5, 63.9, 1.446, 1, -1.276, 1.276, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 27,
						classname: "_starchy_starpart_x",
						instancename: "",
						matrix: {a: 0.279, b: 0.918, c: -0.957, d: 0.291, tx: 39.6, ty: 70.7},
						transform: [39.6, 70.7, 0.96, 1, -1.276, 1.276, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 33,
						classname: "_starchy_starpart_x",
						instancename: "",
						matrix: {a: -1.354, b: -1.122, c: 0.638, d: -0.77, tx: -74.45, ty: -9.95},
						transform: [-74.45, -9.95, 1.758, 1, 2.449, -2.449, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.205, 0.438], [0.583, 0.899], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_starchy_starpart_x",
						instancename: "",
						matrix: {a: -0.237, b: -0.196, c: 0.637, d: -0.769, tx: -95.85, ty: -26.05},
						transform: [-95.85, -26.05, 0.307, 0.998, 2.45, -2.45, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.33, 0.652], [0.664, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_starchy_starpart_x",
						instancename: "",
						matrix: {a: -0.166, b: -0.138, c: 0.638, d: -0.77, tx: -96.9, ty: -27},
						transform: [-96.9, -27, 0.216, 1, 2.449, -2.449, NaN],
						alpha: 0.37,
						visible: true,
						tween: false,
					},
					{
						from: 36,
						to: 36,
						actions: function(self){self.stop();},
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
						to: 13,
						classname: "_starchy_starpart2_x",
						instancename: "",
						matrix: {a: -0.787, b: 0.541, c: -0.566, d: -0.824, tx: 35.85, ty: 9.95},
						transform: [35.85, 9.95, 0.955, 1, -2.54, 2.54, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 15,
						classname: "_starchy_starpart2_x",
						instancename: "",
						matrix: {a: -1.564, b: 1.074, c: -0.566, d: -0.824, tx: -8.85, ty: 40.7},
						transform: [-8.85, 40.7, 1.898, 1, -2.54, 2.54, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 17,
						classname: "_starchy_starpart2_x",
						instancename: "",
						matrix: {a: 0.318, b: -0.991, c: 0.952, d: 0.305, tx: -40.45, ty: 30.8},
						transform: [-40.45, 30.8, 1.041, 1, 1.261, -1.261, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 19,
						classname: "_starchy_starpart2_x",
						instancename: "",
						matrix: {a: 0.579, b: -1.807, c: 0.952, d: 0.305, tx: -25.4, ty: -16.15},
						transform: [-25.4, -16.15, 1.898, 1, 1.261, -1.261, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 21,
						classname: "_starchy_starpart2_x",
						instancename: "",
						matrix: {a: 0.216, b: 0.709, c: -0.956, d: 0.292, tx: 2.7, ty: -44.2},
						transform: [2.7, -44.2, 0.741, 1, -1.275, 1.275, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 23,
						classname: "_starchy_starpart2_x",
						instancename: "",
						matrix: {a: 0.553, b: 1.815, c: -0.956, d: 0.292, tx: 22.2, ty: 19.4},
						transform: [22.2, 19.4, 1.898, 1, -1.275, 1.275, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 25,
						classname: "_starchy_starpart2_x",
						instancename: "",
						matrix: {a: -0.978, b: -0.708, c: 0.586, d: -0.81, tx: -4.3, ty: 41.15},
						transform: [-4.3, 41.15, 1.208, 1, 2.515, -2.515, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 27,
						classname: "_starchy_starpart2_x",
						instancename: "",
						matrix: {a: -1.537, b: -1.113, c: 0.586, d: -0.81, tx: -36.45, ty: 17.9},
						transform: [-36.45, 17.9, 1.898, 1, 2.515, -2.515, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 36,
					},
				]
			},
		]
	},
	"_starchy_legzen": {
		type: "movieclip",
		fps: 30,
		totalFrames: 23,
		labels: {},
		layers: [
			{
				name: "starchy_shoe_20_x",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_starchy_starchy_shoe_20_x",
						instancename: "",
						matrix: {a: -0.032, b: -0.999, c: -0.999, d: 0.032, tx: -3.95, ty: 6.4},
						transform: [-3.95, 6.4, 1, 1, -1.539, -1.602, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 21,
						classname: "_starchy_starchy_shoe_20_x",
						instancename: "",
						matrix: {a: 0.029, b: -0.999, c: -0.999, d: -0.029, tx: -3.85, ty: 7.45},
						transform: [-3.85, 7.45, 1, 1, -1.6, -1.541, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_starchy_starchy_shoe_20_x",
						instancename: "",
						matrix: {a: -0.032, b: -0.999, c: -0.999, d: 0.032, tx: -3.95, ty: 6.4},
						transform: [-3.95, 6.4, 1, 1, -1.539, -1.602, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "starchy_leg2_ground_x",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_starchy_starchy_leg2_ground_x",
						instancename: "",
						matrix: {a: -0.563, b: -0.826, c: -0.826, d: 0.563, tx: 0.05, ty: 0},
						transform: [0.05, 0, 1, 1, -0.972, -2.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 21,
						classname: "_starchy_starchy_leg2_ground_x",
						instancename: "",
						matrix: {a: -0.563, b: -0.826, c: -0.826, d: 0.563, tx: 0.2, ty: 0.9},
						transform: [0.2, 0.9, 1, 1, -0.972, -2.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_starchy_starchy_leg2_ground_x",
						instancename: "",
						matrix: {a: -0.563, b: -0.826, c: -0.826, d: 0.563, tx: 0.05, ty: 0},
						transform: [0.05, 0, 1, 1, -0.972, -2.169, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_starchy_starchy_arm999_x": {
		type: "bitmap",
		asset: "_starchy_starchy_arm999_x",
		scale: 2,
		position: [-6.6, -5.9],
	},
	"_starchy_starchy_body_5_x": {
		type: "bitmap",
		asset: "_starchy_starchy_body_5_x",
		scale: 2,
		position: [-33.6, -33.65],
	},
	"_starchy_startchy_eye_blank_x": {
		type: "bitmap",
		asset: "_starchy_startchy_eye_blank_x",
		scale: 2,
		position: [-9.55, -9.95],
	},
	"_starchy_eye_wakeup": {
		type: "movieclip",
		fps: 30,
		totalFrames: 51,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_startchy_eye_blank_x",
						instancename: "eye1",
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
						from: 3,
						to: 3,
						classname: "_starchy_startchy_eye_blank_x",
						instancename: "eye1",
						matrix: {a: 0.719, b: 0, c: 0, d: 0.101, tx: 0.1, ty: 0},
						transform: [0.1, 0, 0.719, 0.101, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 50,
					},
				]
			},
			{
				name: "starchy_eyebasic_x",
				keys: [
					{
						from: 0,
						to: 2,
					},
					{
						from: 3,
						to: 6,
						classname: "_starchy_starchy_eyebasic_x",
						instancename: "",
						matrix: {a: 1.35, b: 0, c: 0, d: 0.371, tx: 0.1, ty: 0},
						transform: [0.1, 0, 1.35, 0.371, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 7,
						to: 10,
						classname: "_starchy_starchy_eyebasic_x",
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
						from: 11,
						to: 14,
						classname: "_starchy_starchy_eyebasic_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.329, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.329, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 15,
						to: 50,
						classname: "_starchy_starchy_eyebasic_x",
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
				name: "starchy_eyebrow1_x",
				keys: [
					{
						from: 0,
						to: 2,
					},
					{
						from: 3,
						to: 6,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.034, c: -0.017, d: 0.493, tx: -0.15, ty: 0.85},
						transform: [-0.15, 0.85, 1, 0.493, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 10,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 0.951, b: 0.308, c: -0.308, d: 0.951, tx: -0.35, ty: -0.85},
						transform: [-0.35, -0.85, 1, 1, -0.313, 0.313, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 0.972, b: 0.237, c: -0.237, d: 0.972, tx: -0.45, ty: 0.35},
						transform: [-0.45, 0.35, 1, 1, -0.239, 0.239, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 50,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: -2.15},
						transform: [-0.2, -2.15, 1, 1, 0, 0, 0],
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
						to: 50,
					},
				]
			},
		]
	},
	"_starchy_mouth_555": {
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
	"_starchy_moustache_2_x": {
		type: "bitmap",
		asset: "_starchy_moustache_2_x",
		scale: 2,
		position: [-26.4, -11.15],
	},
	"_starchy_starchy_glow_x": {
		type: "bitmap",
		asset: "_starchy_starchy_glow_x",
		scale: 2,
		position: [-37.05, -41.6],
	},
	"_starchy_glowrespawn_x": {
		type: "bitmap",
		asset: "_starchy_glowrespawn_x",
		scale: 2,
		position: [-95.3, -95.3],
	},
	"_starchy_eslabon1_x": {
		type: "bitmap",
		asset: "_starchy_eslabon1_x",
		scale: 2,
		position: [-9.7, -11.15],
	},
	"_starchy_eslabon2_x": {
		type: "bitmap",
		asset: "_starchy_eslabon2_x",
		scale: 2,
		position: [-8.95, -10.15],
	},
	"_starchy_balloon_tail": {
		type: "movieclip",
		fps: 30,
		totalFrames: 6,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_starchy_balloon_tail_green_x",
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
						classname: "_starchy_balloon_tail_cyan_x",
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
						classname: "_starchy_balloon_tail_orange_x",
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
						classname: "_starchy_balloon_tail_piink_x",
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
						classname: "_starchy_balloon_tail_blue_x",
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
						classname: "_starchy_balloon_tail_purple_x",
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
						to: 5,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_starchy_soul_head": {
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
						classname: "_starchy_sould_head_base_1",
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
						to: 0,
						classname: "_starchy_soul_faces",
						instancename: "face",
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
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_starchy_particuler": {
		type: "movieclip",
		fps: 30,
		totalFrames: 9,
		labels: {loop: {from:1, to:2}, on: {from:4, to:7}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_starchy_satanicbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: 0, ty: 0},
						transform: [0, 0, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 5,
					},
					{
						from: 6,
						to: 7,
						classname: "_starchy_satanicbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: 0, ty: 0},
						transform: [0, 0, 0.1, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
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
						actions: function(self){if(Math.random() > 0.7){
	self.gotoAndPlay("on");
}
else{
	self.gotoAndPlay("loop");
}},
					},
					{
						from: 4,
						to: 7,
					},
					{
						from: 8,
						to: 8,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_starchy_explotion_0_x": {
		type: "bitmap",
		asset: "_starchy_explotion_0_x",
		scale: 2,
		position: [-23.25, -26.4],
	},
	"_starchy_explotion_1_x": {
		type: "bitmap",
		asset: "_starchy_explotion_1_x",
		scale: 2,
		position: [-24.5, -27.95],
	},
	"_starchy_explotion_3_x": {
		type: "bitmap",
		asset: "_starchy_explotion_3_x",
		scale: 2,
		position: [-24.95, -28.4],
	},
	"_starchy_explotion_4_x": {
		type: "bitmap",
		asset: "_starchy_explotion_4_x",
		scale: 2,
		position: [-25.75, -29.35],
	},
	"_starchy_explotion_5_x": {
		type: "bitmap",
		asset: "_starchy_explotion_5_x",
		scale: 2,
		position: [-26.7, -30.45],
	},
	"_starchy_explotion_6_x": {
		type: "bitmap",
		asset: "_starchy_explotion_6_x",
		scale: 2,
		position: [-26.45, -30.3],
	},
	"_starchy_explotion_7_x": {
		type: "bitmap",
		asset: "_starchy_explotion_7_x",
		scale: 2,
		position: [-25.9, -29.9],
	},
	"_starchy_explotion_8_x": {
		type: "bitmap",
		asset: "_starchy_explotion_8_x",
		scale: 2,
		position: [-25.6, -29.75],
	},
	"_starchy_explotion_line_x": {
		type: "bitmap",
		asset: "_starchy_explotion_line_x",
		scale: 2,
		position: [-30.75, -33.1],
	},
	"_starchy_explotion_line": {
		type: "movieclip",
		fps: 30,
		totalFrames: 23,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_explotioncosin_x",
						instancename: "",
						matrix: {a: 0.4, b: 0, c: 0, d: 0.473, tx: 0, ty: -0.55},
						transform: [0, -0.55, 0.4, 0.473, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_starchy_explotioncosin_x",
						instancename: "",
						matrix: {a: 1.001, b: 0, c: 0, d: 1.332, tx: 0, ty: -5.1},
						transform: [0, -5.1, 1.001, 1.332, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.167, 0.486], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_starchy_explotioncosin_x",
						instancename: "",
						matrix: {a: 0.132, b: 0, c: 0, d: 0.183, tx: 0, ty: -19.6},
						transform: [0, -19.6, 0.132, 0.183, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 22,
					},
				]
			},
		]
	},
	"_starchy_starchy_arm1_flap": {
		type: "movieclip",
		fps: 30,
		totalFrames: 9,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_starchy_starchy_arm1_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.164, c: -0.164, d: -0.986, tx: 0, ty: -0.2},
						transform: [0, -0.2, 1, 1, -2.977, -0.165, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_starchy_starchy_arm1_x",
						instancename: "",
						matrix: {a: 0.9, b: 0.435, c: 0.435, d: -0.9, tx: 0, ty: -0.15},
						transform: [0, -0.15, 1, 1, 2.691, 0.45, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_starchy_starchy_arm1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.527], [0.465, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_starchy_starchy_arm1_x",
						instancename: "",
						matrix: {a: 0.769, b: 0.639, c: -0.639, d: 0.769, tx: -0.1, ty: 0},
						transform: [-0.1, 0, 1, 1, -0.693, 0.693, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.596, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_starchy_starchy_arm1_x",
						instancename: "",
						matrix: {a: 0.859, b: -0.511, c: 0.433, d: 0.727, tx: -0.1, ty: -0.3},
						transform: [-0.1, -0.3, 1, 0.846, 0.537, -0.537, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_starchy_starchy_leg_2_x": {
		type: "bitmap",
		asset: "_starchy_starchy_leg_2_x",
		scale: 2,
		position: [-13.4, -5.55],
	},
	"_starchy_starchy_shoe_2_x": {
		type: "bitmap",
		asset: "_starchy_starchy_shoe_2_x",
		scale: 2,
		position: [-9.85, -7.4],
	},
	"_starchy_startchy_eye_flap": {
		type: "movieclip",
		fps: 30,
		totalFrames: 9,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_starchy_starchy_eyebasic_x",
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
						to: 1,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.199, d: 0.98, tx: -0.25, ty: -0.25},
						transform: [-0.25, -0.25, 1, 1, 0.2, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.598, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.199, d: 0.98, tx: -0.1, ty: 0.3},
						transform: [-0.1, 0.3, 1, 1, 0.2, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.199, d: 0.98, tx: -0.1, ty: 0.3},
						transform: [-0.1, 0.3, 1, 1, 0.2, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.598, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.199, d: 0.98, tx: -0.25, ty: -0.25},
						transform: [-0.25, -0.25, 1, 1, 0.2, -0.2, NaN],
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
	"_starchy_startchy_eye_flapout": {
		type: "movieclip",
		fps: 30,
		totalFrames: 37,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_starchy_starchy_eyebasic_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 36,
						classname: "_starchy_starchy_eyebasic_x",
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
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.199, c: 0.199, d: 0.98, tx: -0.25, ty: -0.25},
						transform: [-0.25, -0.25, 1, 1, 0.2, -0.2, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 36,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: -2.15},
						transform: [-0.2, -2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_starchy_mouth_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "mouth",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.05, ty: 0.75},
						transform: [-1.05, 0.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "moustache_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.25, ty: -7.3},
						transform: [-2.25, -7.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_starchy_mouth_flap": {
		type: "movieclip",
		fps: 30,
		totalFrames: 11,
		labels: {},
		layers: [
			{
				name: "mouth",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_starchy_starchy_mouth5_x",
						instancename: "",
						matrix: {a: 0.52, b: 0, c: 0, d: 0.406, tx: -1.25, ty: 1.6},
						transform: [-1.25, 1.6, 0.52, 0.406, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_starchy_starchy_mouth5_x",
						instancename: "",
						matrix: {a: 0.609, b: 0, c: 0, d: 0.67, tx: -1.2, ty: 2.05},
						transform: [-1.2, 2.05, 0.609, 0.67, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_starchy_starchy_mouth5_x",
						instancename: "",
						matrix: {a: 0.52, b: 0, c: 0, d: 0.406, tx: -1.25, ty: 1.6},
						transform: [-1.25, 1.6, 0.52, 0.406, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "moustache_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.25, ty: -7.3},
						transform: [-2.25, -7.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1.121, b: 0, c: 0, d: 0.924, tx: -2.25, ty: -7.3},
						transform: [-2.25, -7.3, 1.121, 0.924, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.25, ty: -7.3},
						transform: [-2.25, -7.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_starchy_mouth_flapout": {
		type: "movieclip",
		fps: 30,
		totalFrames: 26,
		labels: {},
		layers: [
			{
				name: "mouth",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_starchy_starchy_mouth5_x",
						instancename: "",
						matrix: {a: 0.537, b: 0, c: 0, d: 0.455, tx: -1.25, ty: 1.65},
						transform: [-1.25, 1.65, 0.537, 0.455, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.36, 0.354], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_starchy_starchy_mouth5_x",
						instancename: "",
						matrix: {a: 0.27, b: 0, c: 0, d: 0.205, tx: -1.15, ty: 1.7},
						transform: [-1.15, 1.7, 0.27, 0.205, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.36, 0.354], [0.553, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 1.669, b: 0, c: 0, d: 1, tx: -1.05, ty: 0.75},
						transform: [-1.05, 0.75, 1.669, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 8,
						to: 25,
						classname: "_starchy_starc,hy_mouth_1_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.05, ty: 0.75},
						transform: [-1.05, 0.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "moustache_x",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1.053, b: 0, c: 0, d: 0.967, tx: -2.25, ty: -7.35},
						transform: [-2.25, -7.35, 1.053, 0.967, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.3, 0.479], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 25,
						classname: "_starchy_moustache_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.25, ty: -7.3},
						transform: [-2.25, -7.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_starchy_starchy_body_flat_x": {
		type: "bitmap",
		asset: "_starchy_starchy_body_flat_x",
		scale: 2,
		position: [-33.6, -33.65],
	},
	"_starchy_lightcircle_x": {
		type: "bitmap",
		asset: "_starchy_lightcircle_x",
		scale: 2,
		position: [-29.6, -29.6],
	},
	"_starchy_shadowhat_x": {
		type: "bitmap",
		asset: "_starchy_shadowhat_x",
		scale: 2,
		position: [-20.9, -10.15],
	},
	"_starchy_starchy_eyebasic_x": {
		type: "bitmap",
		asset: "_starchy_starchy_eyebasic_x",
		scale: 2,
		position: [-8.5, -8.8],
	},
	"_starchy_starchy_eyebrow1_x": {
		type: "bitmap",
		asset: "_starchy_starchy_eyebrow1_x",
		scale: 2,
		position: [-8.8, -8.75],
	},
	"_starchy_startchy_eye_die": {
		type: "movieclip",
		fps: 30,
		totalFrames: 9,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_starchy_eyebasic_2_x",
						instancename: "",
						matrix: {a: 0.778, b: 0, c: 0, d: 0.778, tx: 0, ty: 0},
						transform: [0, 0, 0.778, 0.778, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_starchy_starchy_eyebasic_2_x",
						instancename: "",
						matrix: {a: 1.185, b: 0, c: 0, d: 1.185, tx: 0, ty: 0},
						transform: [0, 0, 1.185, 1.185, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_starchy_starchy_eyebasic_2_x",
						instancename: "",
						matrix: {a: 0.778, b: 0, c: 0, d: 0.778, tx: 0, ty: 0},
						transform: [0, 0, 0.778, 0.778, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: -0.2, ty: -5.55},
						transform: [-0.2, -5.55, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: -0.4, ty: -4.7},
						transform: [-0.4, -4.7, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_starchy_starchy_eyebrow1_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: -0.722, d: 0.692, tx: -0.2, ty: -5.55},
						transform: [-0.2, -5.55, 1, 1, -0.807, 0.807, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_starchy_mouth_die": {
		type: "movieclip",
		fps: 30,
		totalFrames: 9,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_starchy_mouth6_x",
						instancename: "mouth",
						matrix: {a: 0.883, b: 0, c: 0, d: 0.883, tx: 0, ty: 0},
						transform: [0, 0, 0.883, 0.883, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_starchy_mouth6_x",
						instancename: "mouth",
						matrix: {a: 0.792, b: 0, c: 0, d: 0.792, tx: 0, ty: 0},
						transform: [0, 0, 0.792, 0.792, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_starchy_mouth6_x",
						instancename: "mouth",
						matrix: {a: 0.883, b: 0, c: 0, d: 0.883, tx: 0, ty: 0},
						transform: [0, 0, 0.883, 0.883, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_starchy_starpart_x": {
		type: "bitmap",
		asset: "_starchy_starpart_x",
		scale: 2,
		position: [-62.5, -12.85],
	},
	"_starchy_starpart2_x": {
		type: "bitmap",
		asset: "_starchy_starpart2_x",
		scale: 2,
		position: [-62.5, -12.85],
	},
	"_starchy_starchy_shoe_20_x": {
		type: "bitmap",
		asset: "_starchy_starchy_shoe_20_x",
		scale: 2,
		position: [-9.7, -8.05],
	},
	"_starchy_starchy_leg2_ground_x": {
		type: "bitmap",
		asset: "_starchy_starchy_leg2_ground_x",
		scale: 2,
		position: [-13.2, -6.4],
	},
	"_starchy_balloon_tail_green_x": {
		type: "bitmap",
		asset: "_starchy_balloon_tail_green_x",
		scale: 2,
		position: [-8.25, -11.2],
	},
	"_starchy_balloon_tail_cyan_x": {
		type: "bitmap",
		asset: "_starchy_balloon_tail_cyan_x",
		scale: 2,
		position: [-8.25, -11.2],
	},
	"_starchy_balloon_tail_orange_x": {
		type: "bitmap",
		asset: "_starchy_balloon_tail_orange_x",
		scale: 2,
		position: [-8.25, -11.2],
	},
	"_starchy_balloon_tail_piink_x": {
		type: "bitmap",
		asset: "_starchy_balloon_tail_piink_x",
		scale: 2,
		position: [-8.25, -11.2],
	},
	"_starchy_balloon_tail_blue_x": {
		type: "bitmap",
		asset: "_starchy_balloon_tail_blue_x",
		scale: 2,
		position: [-8.25, -11.2],
	},
	"_starchy_balloon_tail_purple_x": {
		type: "bitmap",
		asset: "_starchy_balloon_tail_purple_x",
		scale: 2,
		position: [-8.25, -11.2],
	},
	"_starchy_sould_head_base_1": {
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
						classname: "_starchy_souls_bubbles_compo",
						instancename: "",
						matrix: {a: 0.884, b: 0, c: 0, d: 0.624, tx: 0.2, ty: -22.85},
						transform: [0.2, -22.85, 0.884, 0.624, 0, 0, 0],
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
						to: 0,
						classname: "_starchy_soul_head_base_1_x",
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
					},
				]
			},
		]
	},
	"_starchy_soul_faces": {
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
						to: 10,
						classname: "_starchy_soul_face_1",
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
	"_starchy_satanicbox": {
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
						actions: function(self){if (self.parent && self.parent.alpha > 0) {globalsignal.emit(ge.SPECTRAL_BUBBLES, {mc:self}); self.time = 0; self.currentFrame = 999;}},
					},
					{
						from: 1,
						to: 1,
					},
				]
			},
		]
	},
	"_starchy_explotioncosin_x": {
		type: "bitmap",
		asset: "_starchy_explotioncosin_x",
		scale: 2,
		position: [-6.55, -10.3],
	},
	"_starchy_starchy_mouth5_x": {
		type: "bitmap",
		asset: "_starchy_starchy_mouth5_x",
		scale: 2,
		position: [-17.8, -12.7],
	},
	"_starchy_starchy_eyebasic_2_x": {
		type: "bitmap",
		asset: "_starchy_starchy_eyebasic_2_x",
		scale: 2,
		position: [-9.55, -9.95],
	},
	"_starchy_mouth6_x": {
		type: "bitmap",
		asset: "_starchy_mouth6_x",
		scale: 2,
		position: [-15.55, -10.25],
	},
	"_starchy_souls_bubbles_compo": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {loop: {from:1, to:18}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_starchy_souls_bubbles_1_x",
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
						classname: "_starchy_souls_bubbles_1_x",
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
						classname: "_starchy_souls_bubble_2_x",
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
						classname: "_starchy_souls_bubble_3_x",
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
						classname: "_starchy_souls_bubble_4_x",
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
						classname: "_starchy_souls_bubble_5_x",
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
						classname: "_starchy_souls_bubble_6_x",
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
						classname: "_starchy_souls_bubble_7_x",
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
						classname: "_starchy_souls_bubble_8_x",
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
						classname: "_starchy_souls_bubble_9_x",
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
						classname: "_starchy_souls_bubble_10_x",
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
						classname: "_starchy_souls_bubble_11_x",
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
						classname: "_starchy_souls_bubble_12_x",
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
						classname: "_starchy_souls_bubble_13_x",
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
						classname: "_starchy_souls_bubble_14_x",
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
						classname: "_starchy_souls_bubble_15_x",
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
						classname: "_starchy_souls_bubble_16_x",
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
						classname: "_starchy_souls_bubble_17_x",
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
						classname: "_starchy_souls_bubble_18_x",
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
						classname: "_starchy_souls_bubble_19_x",
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
						actions: function(self){self.gotoAndPlay(Math.ceil( Math.random()*15 +1));},
					},
					{
						from: 1,
						to: 18,
					},
					{
						from: 19,
						to: 19,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_starchy_soul_head_base_1_x": {
		type: "bitmap",
		asset: "_starchy_soul_head_base_1_x",
		scale: 2,
		position: [-35.5, -41.6],
	},
	"_starchy_soul_face_1": {
		type: "movieclip",
		fps: 30,
		totalFrames: 54,
		labels: {},
		layers: [
			{
				name: "eye_1",
				keys: [
					{
						from: 0,
						to: 34,
						classname: "_starchy_souls_eye_1",
						instancename: "",
						matrix: {a: 0.955, b: 0, c: 0, d: 0.955, tx: 8.8, ty: -4.95},
						transform: [8.8, -4.95, 0.955, 0.955, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.592, 0], [0.565, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 52,
						classname: "_starchy_souls_eye_1",
						instancename: "",
						matrix: {a: 1.042, b: 0, c: 0, d: 0.955, tx: 7, ty: -4.95},
						transform: [7, -4.95, 1.042, 0.955, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.556, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 53,
						classname: "_starchy_souls_eye_1",
						instancename: "",
						matrix: {a: 0.955, b: 0, c: 0, d: 0.955, tx: 8.8, ty: -4.95},
						transform: [8.8, -4.95, 0.955, 0.955, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.592, 0], [0.565, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye_1",
				keys: [
					{
						from: 0,
						to: 34,
						classname: "_starchy_souls_eye_1",
						instancename: "",
						matrix: {a: -0.806, b: 0, c: 0, d: 0.806, tx: -12.6, ty: -4.45},
						transform: [-12.6, -4.45, 0.806, 0.806, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.592, 0], [0.565, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 52,
						classname: "_starchy_souls_eye_1",
						instancename: "",
						matrix: {a: -0.677, b: -0.053, c: -0.063, d: 0.803, tx: -13.95, ty: -5.1},
						transform: [-13.95, -5.1, 0.679, 0.806, -0.078, -3.063, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.556, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 53,
						classname: "_starchy_souls_eye_1",
						instancename: "",
						matrix: {a: -0.806, b: 0, c: 0, d: 0.806, tx: -12.6, ty: -4.45},
						transform: [-12.6, -4.45, 0.806, 0.806, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.592, 0], [0.565, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "soul_mouth_1",
				keys: [
					{
						from: 0,
						to: 34,
						classname: "_starchy_souls_soul_mouth_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.2, ty: 15.25},
						transform: [-3.2, 15.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.592, 0], [0.565, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 52,
						classname: "_starchy_souls_soul_mouth_1",
						instancename: "",
						matrix: {a: 0.932, b: 0, c: 0, d: 1, tx: -5.85, ty: 14.45},
						transform: [-5.85, 14.45, 0.932, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.556, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 53,
						classname: "_starchy_souls_soul_mouth_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.2, ty: 15.25},
						transform: [-3.2, 15.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.592, 0], [0.565, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_starchy_souls_bubbles_1_x": {
		type: "bitmap",
		asset: "_starchy_souls_bubbles_1_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_starchy_souls_bubble_2_x": {
		type: "bitmap",
		asset: "_starchy_souls_bubble_2_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_starchy_souls_bubble_3_x": {
		type: "bitmap",
		asset: "_starchy_souls_bubble_3_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_starchy_souls_bubble_4_x": {
		type: "bitmap",
		asset: "_starchy_souls_bubble_4_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_starchy_souls_bubble_5_x": {
		type: "bitmap",
		asset: "_starchy_souls_bubble_5_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_starchy_souls_bubble_6_x": {
		type: "bitmap",
		asset: "_starchy_souls_bubble_6_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_starchy_souls_bubble_7_x": {
		type: "bitmap",
		asset: "_starchy_souls_bubble_7_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_starchy_souls_bubble_8_x": {
		type: "bitmap",
		asset: "_starchy_souls_bubble_8_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_starchy_souls_bubble_9_x": {
		type: "bitmap",
		asset: "_starchy_souls_bubble_9_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_starchy_souls_bubble_10_x": {
		type: "bitmap",
		asset: "_starchy_souls_bubble_10_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_starchy_souls_bubble_11_x": {
		type: "bitmap",
		asset: "_starchy_souls_bubble_11_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_starchy_souls_bubble_12_x": {
		type: "bitmap",
		asset: "_starchy_souls_bubble_12_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_starchy_souls_bubble_13_x": {
		type: "bitmap",
		asset: "_starchy_souls_bubble_13_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_starchy_souls_bubble_14_x": {
		type: "bitmap",
		asset: "_starchy_souls_bubble_14_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_starchy_souls_bubble_15_x": {
		type: "bitmap",
		asset: "_starchy_souls_bubble_15_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_starchy_souls_bubble_16_x": {
		type: "bitmap",
		asset: "_starchy_souls_bubble_16_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_starchy_souls_bubble_17_x": {
		type: "bitmap",
		asset: "_starchy_souls_bubble_17_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_starchy_souls_bubble_18_x": {
		type: "bitmap",
		asset: "_starchy_souls_bubble_18_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_starchy_souls_bubble_19_x": {
		type: "bitmap",
		asset: "_starchy_souls_bubble_19_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_starchy_souls_eye_1": {
		type: "movieclip",
		fps: 30,
		totalFrames: 40,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 39,
						classname: "_starchy_souls_bubblesyes",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.3, ty: -9.35},
						transform: [-2.3, -9.35, 1, 1, 0, 0, 0],
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
						to: 27,
						classname: "_starchy_souls_eye_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 29,
						classname: "_starchy_souls_eye_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.417, 0], [0.539, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 31,
						classname: "_starchy_souls_eye_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.021, d: 0.868, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 0.869, -0.024, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 32,
						to: 34,
						classname: "_starchy_souls_eye_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.021, d: 0.868, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 0.869, -0.024, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.122, 0.356], [0.539, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 39,
						classname: "_starchy_souls_eye_1_x",
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
						to: 27,
						classname: "_starchy_souls_eyepupil",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.15, ty: 2.3},
						transform: [-1.15, 2.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 29,
						classname: "_starchy_souls_eyepupil",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.15, ty: 2.3},
						transform: [-1.15, 2.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.417, 0], [0.539, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 31,
						classname: "_starchy_souls_eyepupil",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.313, tx: -1.15, ty: 2.3},
						transform: [-1.15, 2.3, 1, 0.313, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 32,
						to: 34,
						classname: "_starchy_souls_eyepupil",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.313, tx: -1.15, ty: 2.3},
						transform: [-1.15, 2.3, 1, 0.313, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.122, 0.356], [0.539, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 39,
						classname: "_starchy_souls_eyepupil",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.15, ty: 2.3},
						transform: [-1.15, 2.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_starchy_souls_soul_mouth_1": {
		type: "movieclip",
		fps: 30,
		totalFrames: 47,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_starchy_souls_soul_mouth_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.557, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 22,
						classname: "_starchy_souls_soul_mouth_1_x",
						instancename: "",
						matrix: {a: 1.025, b: 0, c: 0.044, d: 0.676, tx: 0.3, ty: -1.15},
						transform: [0.3, -1.15, 1.025, 0.677, 0.065, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.557, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 45,
						classname: "_starchy_souls_soul_mouth_1_x",
						instancename: "",
						matrix: {a: 1.025, b: 0, c: 0.046, d: 0.709, tx: 0.3, ty: -0.9},
						transform: [0.3, -0.9, 1.025, 0.711, 0.065, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.557, 1], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_starchy_souls_soul_mouth_1_x",
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
	"_starchy_souls_bubblesyes": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "eyeparticle",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_starchy_souls_eyeparticle",
						instancename: "",
						matrix: {a: 0.774, b: 0, c: 0, d: 0.774, tx: 5.7, ty: 1.3},
						transform: [5.7, 1.3, 0.774, 0.774, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eyeparticle",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_starchy_souls_eyeparticle",
						instancename: "",
						matrix: {a: 0.774, b: 0, c: 0, d: 0.774, tx: -4.75, ty: 1.7},
						transform: [-4.75, 1.7, 0.774, 0.774, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eyeparticle",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_starchy_souls_eyeparticle",
						instancename: "",
						matrix: {a: 0.774, b: 0, c: 0, d: 0.774, tx: 3.95, ty: -2.35},
						transform: [3.95, -2.35, 0.774, 0.774, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eyeparticle",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_starchy_souls_eyeparticle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.9, ty: -2.7},
						transform: [-0.9, -2.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_starchy_souls_eye_1_x": {
		type: "bitmap",
		asset: "_starchy_souls_eye_1_x",
		scale: 2,
		position: [-13.8, -20.55],
	},
	"_starchy_souls_eyepupil": {
		type: "movieclip",
		fps: 30,
		totalFrames: 80,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_starchy_souls_eye_pupil_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 35,
						classname: "_starchy_souls_eye_pupil_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.539, 1], [1, 1], ],
						}
					},
					{
						from: 36,
						to: 59,
						classname: "_starchy_souls_eye_pupil_x",
						instancename: "",
						matrix: {a: -0.952, b: -0.305, c: 0.305, d: -0.952, tx: -0.1, ty: 0},
						transform: [-0.1, 0, 1, 1, 2.832, -2.832, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 77,
						classname: "_starchy_souls_eye_pupil_x",
						instancename: "",
						matrix: {a: -0.952, b: -0.305, c: 0.305, d: -0.952, tx: -0.1, ty: 0},
						transform: [-0.1, 0, 1, 1, 2.832, -2.832, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.539, 1], [1, 1], ],
						}
					},
					{
						from: 78,
						to: 79,
						classname: "_starchy_souls_eye_pupil_x",
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
	"_starchy_souls_soul_mouth_1_x": {
		type: "bitmap",
		asset: "_starchy_souls_soul_mouth_1_x",
		scale: 2,
		position: [-16.8, -12.6],
	},
	"_starchy_souls_eyeparticle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 34,
		labels: {fly: {from:14, to:33}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_starchy_souls_circpleeye_x",
						instancename: "",
						matrix: {a: 0.693, b: 0, c: 0, d: 0.693, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.693, 0.693, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 13,
					},
					{
						from: 14,
						to: 32,
						classname: "_starchy_souls_circpleeye_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.163, 0.425], [0.589, 1], [1, 1], ],
							rotation: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							scale: [[0, 0], [0.301, 0.075], [0.85, 0.356], [1, 1], ],
							color: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							filters: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
						}
					},
					{
						from: 33,
						to: 33,
						classname: "_starchy_souls_circpleeye_x",
						instancename: "",
						matrix: {a: 0.246, b: 0, c: 0, d: 0.246, tx: 0, ty: -19.6},
						transform: [0, -19.6, 0.246, 0.246, 0, 0, 0],
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
						to: 12,
					},
					{
						from: 13,
						to: 13,
						actions: function(self){if (Math.random() > 0.2) {
	self.gotoAndPlay("fly");	   
}
else{
	self.gotoAndPlay(1);
}},
					},
					{
						from: 14,
						to: 33,
					},
				]
			},
		]
	},
	"_starchy_souls_eye_pupil_x": {
		type: "bitmap",
		asset: "_starchy_souls_eye_pupil_x",
		scale: 2,
		position: [-8.95, -8.9],
	},
	"_starchy_souls_circpleeye_x": {
		type: "bitmap",
		asset: "_starchy_souls_circpleeye_x",
		scale: 2,
		position: [-8.8, -8.8],
	},
};
