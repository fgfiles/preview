
var peppermint = {
	"peppermint": {
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
						classname: "_peppermint_body_physics",
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
						classname: "_peppermint_balloons",
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
				name: "peppermint",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_peppermint_peppermint_air_flapper",
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
						classname: "_peppermint_peppermint_air_turn",
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
						classname: "_peppermint_peppermint_ground_idle",
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
						classname: "_peppermint_peppermint_ground_run",
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
						classname: "_peppermint_peppermint_ground_stop",
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
						classname: "_peppermint_peppermint_ground_stopandturn",
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
						classname: "_peppermint_peppermint_ground_turn",
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
						classname: "_peppermint_peppermint_ground_turn_fast",
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
						classname: "_peppermint_peppermint_die",
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
						classname: "_peppermint_peppermint_respawn",
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
	"_peppermint_body_physics": {
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
						classname: "_peppermint_box_physics",
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
						classname: "_peppermint_circle_physics",
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
						classname: "_peppermint_circle_physics",
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
	"_peppermint_balloons": {
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_chain",
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
						classname: "_peppermint_soulbase_empy",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase_empy",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase_empy",
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
						classname: "_peppermint_soulbase_empy",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase_empy",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_soulbase",
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
						classname: "_peppermint_balloon_explotion",
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
						classname: "_peppermint_balloon_explotion",
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
						classname: "_peppermint_balloon_explotion",
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
						classname: "_peppermint_hittablebox",
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
	"_peppermint_peppermint_air_flapper": {
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
						to: 13,
						classname: "_peppermint_arm_compo",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -19.95, ty: 4.1},
						transform: [-19.95, 4.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 33,
						classname: "_peppermint_arm_compo",
						instancename: "arm2",
						matrix: {a: -0.994, b: 0.111, c: 0.111, d: 0.994, tx: -17.35, ty: 2.65},
						transform: [-17.35, 2.65, 1, 1, 0.112, 3.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_peppermint_arm_compo",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -19.95, ty: 4.1},
						transform: [-19.95, 4.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "baseside1_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4, ty: -9.65},
						transform: [4, -9.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 33,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 0.905, b: -0.003, c: 0.004, d: 1, tx: 5.35, ty: -10.65},
						transform: [5.35, -10.65, 0.905, 1, 0.004, -0.004, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4, ty: -9.65},
						transform: [4, -9.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "basefront_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.7, ty: -9.65},
						transform: [-0.7, -9.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 33,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 0.905, b: -0.003, c: 0.004, d: 1, tx: -1.65, ty: -10.65},
						transform: [-1.65, -10.65, 0.905, 1, 0.004, -0.004, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.7, ty: -9.65},
						transform: [-0.7, -9.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "monito_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.3, ty: 2.15},
						transform: [-4.3, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 33,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 0.934, b: -0.016, c: 0.017, d: 1, tx: -5.25, ty: 1},
						transform: [-5.25, 1, 0.935, 1, 0.017, -0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.3, ty: 2.15},
						transform: [-4.3, 2.15, 1, 1, 0, 0, 0],
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
						to: 13,
						classname: "_peppermint_legidle2",
						instancename: "",
						matrix: {a: 0.818, b: 0, c: 0, d: 1, tx: -10, ty: 15},
						transform: [-10, 15, 0.818, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 33,
						classname: "_peppermint_legidle2",
						instancename: "",
						matrix: {a: 0.803, b: -0.167, c: 0.204, d: 0.979, tx: -12.25, ty: 12.8},
						transform: [-12.25, 12.8, 0.82, 1, 0.205, -0.205, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_peppermint_legidle2",
						instancename: "",
						matrix: {a: 0.818, b: 0, c: 0, d: 1, tx: -10, ty: 15},
						transform: [-10, 15, 0.818, 1, 0, 0, 0],
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
						to: 13,
						classname: "_peppermint_leg1_idle",
						instancename: "",
						matrix: {a: 0.737, b: -0.339, c: 0.418, d: 0.908, tx: 9.85, ty: 15.65},
						transform: [9.85, 15.65, 0.812, 1, 0.431, -0.431, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 33,
						classname: "_peppermint_leg1_idle",
						instancename: "",
						matrix: {a: 0.819, b: -0.38, c: 0.421, d: 0.907, tx: 5.9, ty: 14.65},
						transform: [5.9, 14.65, 0.903, 1, 0.435, -0.435, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_peppermint_leg1_idle",
						instancename: "",
						matrix: {a: 0.737, b: -0.339, c: 0.418, d: 0.908, tx: 9.85, ty: 15.65},
						transform: [9.85, 15.65, 0.812, 1, 0.431, -0.431, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye_2",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_peppermint_eye_compo",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.9, ty: -11.9},
						transform: [-13.9, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 33,
						classname: "_peppermint_eye_compo",
						instancename: "eye2",
						matrix: {a: -0.905, b: 0.003, c: 0.004, d: 1, tx: -13.6, ty: -12.85},
						transform: [-13.6, -12.85, 0.905, 1, 0.004, 3.138, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_peppermint_eye_compo",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.9, ty: -11.9},
						transform: [-13.9, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye_1",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_peppermint_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.6, ty: -11.9},
						transform: [7.6, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 33,
						classname: "_peppermint_eye_compo",
						instancename: "eye1",
						matrix: {a: 0.905, b: -0.003, c: 0.004, d: 1, tx: 6.1, ty: -12.9},
						transform: [6.1, -12.9, 0.905, 1, 0.004, -0.004, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_peppermint_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.6, ty: -11.9},
						transform: [7.6, -11.9, 1, 1, 0, 0, 0],
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
						classname: "_peppermint_mouth_compo",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.25, ty: -7.1},
						transform: [-4.25, -7.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 33,
						classname: "_peppermint_mouth_compo",
						instancename: "mouth",
						matrix: {a: 0.905, b: -0.003, c: 0.004, d: 1, tx: -4.8, ty: -8.05},
						transform: [-4.8, -8.05, 0.905, 1, 0.004, -0.004, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_peppermint_mouth_compo",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.25, ty: -7.1},
						transform: [-4.25, -7.1, 1, 1, 0, 0, 0],
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
						to: 13,
						classname: "_peppermint_arm_compo",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.15, ty: 4.2},
						transform: [24.15, 4.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 33,
						classname: "_peppermint_arm_compo",
						instancename: "arm1",
						matrix: {a: 0.871, b: 0.161, c: -0.182, d: 0.983, tx: 21.65, ty: 3},
						transform: [21.65, 3, 0.886, 1, -0.183, 0.183, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_peppermint_arm_compo",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.15, ty: 4.2},
						transform: [24.15, 4.2, 1, 1, 0, 0, 0],
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
						to: 34,
						classname: "_peppermint_hittablebox",
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
				name: "Capa 3",
				keys: [
					{
						from: 0,
						to: 34,
						classname: "_peppermint_attackbox",
						instancename: "attackbox",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.18, tx: 1, ty: 21},
						transform: [1, 21, 0.46, 0.18, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_peppermint_peppermint_air_turn": {
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
						to: 3,
						classname: "_peppermint_arm_compo",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -19.95, ty: 4.1},
						transform: [-19.95, 4.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_peppermint_arm_compo",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -22.6, ty: 4.1},
						transform: [-22.6, 4.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_arm_compo",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -22.6, ty: 4.1},
						transform: [-22.6, 4.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_peppermint_arm_compo",
						instancename: "arm2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 22.65, ty: 4.1},
						transform: [22.65, 4.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_peppermint_arm_compo",
						instancename: "arm2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 23.2, ty: 4.1},
						transform: [23.2, 4.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.733], [0.75, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_arm_compo",
						instancename: "arm2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 19.95, ty: 4.1},
						transform: [19.95, 4.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "baseside1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4, ty: -9.65},
						transform: [4, -9.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 0.983, b: 0, c: 0, d: 1, tx: 1.95, ty: -9.65},
						transform: [1.95, -9.65, 0.983, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 8,
					},
					{
						from: 9,
						to: 12,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: -0.978, b: 0, c: 0, d: 1, tx: -1.35, ty: -9.65},
						transform: [-1.35, -9.65, 0.978, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.733], [0.75, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -4, ty: -9.65},
						transform: [-4, -9.65, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "basefront_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.7, ty: -9.65},
						transform: [-0.7, -9.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 1.033, b: 0, c: 0, d: 1, tx: -0.7, ty: -9.65},
						transform: [-0.7, -9.65, 1.033, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_peppermint_basefront2_x",
						instancename: "",
						matrix: {a: 1.05, b: 0, c: 0, d: 1, tx: -0.1, ty: -9.65},
						transform: [-0.1, -9.65, 1.05, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_basefront2_x",
						instancename: "",
						matrix: {a: 1.033, b: 0, c: 0, d: 1, tx: -0.1, ty: -9.65},
						transform: [-0.1, -9.65, 1.033, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_peppermint_basefront2_x",
						instancename: "",
						matrix: {a: -1.033, b: 0, c: 0, d: 1, tx: -0.2, ty: -9.65},
						transform: [-0.2, -9.65, 1.033, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_peppermint_basefront2_x",
						instancename: "",
						matrix: {a: -1.033, b: 0, c: 0, d: 1, tx: 0.25, ty: -9.65},
						transform: [0.25, -9.65, 1.033, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: -1.023, b: 0, c: 0, d: 1, tx: 0.95, ty: -9.65},
						transform: [0.95, -9.65, 1.023, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.733], [0.75, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0.7, ty: -9.65},
						transform: [0.7, -9.65, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "monito_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.3, ty: 2.15},
						transform: [-4.3, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.3, ty: 2.15},
						transform: [-4.3, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_peppermint_monito2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.3, ty: 2.15},
						transform: [-2.3, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_monito2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.35, ty: 2.15},
						transform: [-0.35, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_peppermint_monito2_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 1.6, ty: 2.15},
						transform: [1.6, 2.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_peppermint_monito2_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 3.7, ty: 2.15},
						transform: [3.7, 2.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 4.9, ty: 2.15},
						transform: [4.9, 2.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.733], [0.75, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 4.3, ty: 2.15},
						transform: [4.3, 2.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg4_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_peppermint_legidle2",
						instancename: "",
						matrix: {a: 0.818, b: 0, c: 0, d: 1, tx: -10, ty: 15},
						transform: [-10, 15, 0.818, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_peppermint_legidle2",
						instancename: "",
						matrix: {a: 0.806, b: -0.141, c: 0.173, d: 0.985, tx: -10.05, ty: 15.05},
						transform: [-10.05, 15.05, 0.818, 1, 0.174, -0.174, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_legidle2",
						instancename: "",
						matrix: {a: 0.56, b: -0.469, c: 0.642, d: 0.767, tx: -10.05, ty: 15.05},
						transform: [-10.05, 15.05, 0.731, 1, 0.697, -0.697, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_peppermint_legidle2",
						instancename: "",
						matrix: {a: -0.655, b: -0.305, c: -0.422, d: 0.907, tx: 7.8, ty: 15.1},
						transform: [7.8, 15.1, 0.722, 1, -0.436, -2.706, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_peppermint_legidle2",
						instancename: "",
						matrix: {a: -0.806, b: -0.141, c: -0.173, d: 0.985, tx: 10.65, ty: 15.05},
						transform: [10.65, 15.05, 0.818, 1, -0.174, -2.968, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.733], [0.75, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_legidle2",
						instancename: "",
						matrix: {a: -0.818, b: 0, c: 0, d: 1, tx: 10, ty: 15},
						transform: [10, 15, 0.818, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg3_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_peppermint_leg1_idle",
						instancename: "",
						matrix: {a: 0.737, b: -0.339, c: 0.418, d: 0.908, tx: 9.85, ty: 15.65},
						transform: [9.85, 15.65, 0.812, 1, 0.431, -0.431, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_peppermint_leg1_idle",
						instancename: "",
						matrix: {a: 0.737, b: -0.339, c: 0.418, d: 0.908, tx: 11.2, ty: 15.65},
						transform: [11.2, 15.65, 0.812, 1, 0.431, -0.431, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_leg1_idle",
						instancename: "",
						matrix: {a: 0.308, b: -0.526, c: 0.863, d: 0.505, tx: 10.15, ty: 14.3},
						transform: [10.15, 14.3, 0.61, 1, 1.042, -1.042, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.417, 0], [0.731, 0.414], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_peppermint_leg1_idle",
						instancename: "",
						matrix: {a: -0.443, b: -0.49, c: -0.742, d: 0.67, tx: -9.45, ty: 15.1},
						transform: [-9.45, 15.1, 0.66, 1, -0.836, -2.306, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_peppermint_leg1_idle",
						instancename: "",
						matrix: {a: -0.737, b: -0.339, c: -0.418, d: 0.908, tx: -10.6, ty: 15.65},
						transform: [-10.6, 15.65, 0.812, 1, -0.431, -2.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.733], [0.75, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_leg1_idle",
						instancename: "",
						matrix: {a: -0.737, b: -0.339, c: -0.418, d: 0.908, tx: -9.85, ty: 15.65},
						transform: [-9.85, 15.65, 0.812, 1, -0.431, -2.71, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye_2",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_peppermint_eye_compo",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.9, ty: -11.9},
						transform: [-13.9, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_peppermint_eye_compo",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -14.3, ty: -11.9},
						transform: [-14.3, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_peppermint_eye_compo",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -7.2, ty: -11.7},
						transform: [-7.2, -11.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.733], [0.75, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_eye_compo",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -7.65, ty: -11.95},
						transform: [-7.65, -11.95, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye_1",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_peppermint_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.6, ty: -11.9},
						transform: [7.6, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_peppermint_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 8.8, ty: -11.9},
						transform: [8.8, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_peppermint_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.95, ty: -11.8},
						transform: [14.95, -11.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.733], [0.75, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14, ty: -11.75},
						transform: [14, -11.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "mouth",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_peppermint_mouth_compo",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.25, ty: -7.1},
						transform: [-4.25, -7.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_peppermint_mouth_compo",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.25, ty: -7.1},
						transform: [-4.25, -7.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_peppermint_mouth_compo",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.5, ty: -7.1},
						transform: [4.5, -7.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.733], [0.75, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_mouth_compo",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.35, ty: -7.1},
						transform: [4.35, -7.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm1",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_peppermint_arm_compo",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.15, ty: 4.2},
						transform: [24.15, 4.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_peppermint_arm_compo",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.75, ty: 4.2},
						transform: [24.75, 4.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_arm_compo",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.75, ty: 4.2},
						transform: [24.75, 4.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_peppermint_arm_compo",
						instancename: "arm1",
						matrix: {a: -0.804, b: 0, c: 0, d: 1, tx: -23.95, ty: 4.2},
						transform: [-23.95, 4.2, 0.804, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_peppermint_arm_compo",
						instancename: "arm1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -24.15, ty: 4.2},
						transform: [-24.15, 4.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.733], [0.75, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_arm_compo",
						instancename: "arm1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -24.15, ty: 4.2},
						transform: [-24.15, 4.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.474, 0], [0.548, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Capa 3",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_peppermint_hittablebox",
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
				name: "Capa 4",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_peppermint_attackbox",
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
	"_peppermint_peppermint_ground_idle": {
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
						classname: "_peppermint_arm1_x",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -19.95, ty: 4.1},
						transform: [-19.95, 4.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_peppermint_arm1_x",
						instancename: "arm2",
						matrix: {a: -0.991, b: -0.135, c: -0.011, d: 0.942, tx: -20.3, ty: 4.55},
						transform: [-20.3, 4.55, 1, 0.942, -0.011, -3.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_peppermint_arm1_x",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -19.95, ty: 4.1},
						transform: [-19.95, 4.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -7.9, ty: 25.35},
						transform: [-7.9, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -7.9, ty: 25.35},
						transform: [-7.9, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -7.9, ty: 25.35},
						transform: [-7.9, 25.35, 1, 1, 0, 0, 0],
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
				name: "leg4_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.1, ty: 16.2},
						transform: [-8.1, 16.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.044, d: 0.853, tx: -7.75, ty: 17.45},
						transform: [-7.75, 17.45, 1, 0.854, -0.051, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.1, ty: 16.2},
						transform: [-8.1, 16.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "baseside1_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4, ty: -9.65},
						transform: [4, -9.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.15, ty: -8.65},
						transform: [4.15, -8.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4, ty: -9.65},
						transform: [4, -9.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "basefront_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.7, ty: -9.65},
						transform: [-0.7, -9.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 0.973, b: 0, c: 0, d: 1, tx: -0.7, ty: -8.65},
						transform: [-0.7, -8.65, 0.973, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.7, ty: -9.65},
						transform: [-0.7, -9.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "monito_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.3, ty: 2.15},
						transform: [-4.3, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 0.973, b: 0, c: 0, d: 1, tx: -4.2, ty: 3.15},
						transform: [-4.2, 3.15, 0.973, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.3, ty: 2.15},
						transform: [-4.3, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "shoe",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.2, ty: 25.35},
						transform: [11.2, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.2, ty: 25.35},
						transform: [11.2, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.2, ty: 25.35},
						transform: [11.2, 25.35, 1, 1, 0, 0, 0],
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
				name: "leg3_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11, ty: 16.2},
						transform: [11, 16.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.046, d: 0.845, tx: 11.3, ty: 17.5},
						transform: [11.3, 17.5, 1, 0.846, -0.054, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11, ty: 16.2},
						transform: [11, 16.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye_2",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.9, ty: -11.9},
						transform: [-13.9, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -0.973, b: 0, c: 0, d: 1, tx: -13.55, ty: -10.9},
						transform: [-13.55, -10.9, 0.973, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.9, ty: -11.9},
						transform: [-13.9, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye_1",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.6, ty: -11.9},
						transform: [7.6, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 0.973, b: 0, c: 0, d: 1, tx: 7.3, ty: -10.9},
						transform: [7.3, -10.9, 0.973, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.6, ty: -11.9},
						transform: [7.6, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "mouth",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.25, ty: -7.1},
						transform: [-4.25, -7.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 0.973, b: 0, c: 0, d: 1, tx: -4.15, ty: -6.1},
						transform: [-4.15, -6.1, 0.973, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.25, ty: -7.1},
						transform: [-4.25, -7.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm1",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.15, ty: 4.2},
						transform: [24.15, 4.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: 1.004, b: -0.104, c: -0.05, d: 0.91, tx: 24.4, ty: 5},
						transform: [24.4, 5, 1.009, 0.911, -0.055, -0.103, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.15, ty: 4.2},
						transform: [24.15, 4.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Capa 2",
				keys: [
					{
						from: 0,
						to: 18,
						classname: "_peppermint_hittablebox",
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
	"_peppermint_peppermint_ground_run": {
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
						classname: "_peppermint_arm3_x",
						instancename: "arm2",
						matrix: {a: -0.527, b: 0.85, c: -0.85, d: -0.527, tx: -15.75, ty: 8.9},
						transform: [-15.75, 8.9, 1, 1, -2.126, 2.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_peppermint_arm3_x",
						instancename: "arm2",
						matrix: {a: -0.5, b: 0.866, c: -0.866, d: -0.5, tx: -15.5, ty: 2.05},
						transform: [-15.5, 2.05, 1, 1, -2.094, 2.094, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.441, 0], [0.781, 0.541], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_peppermint_arm3_x",
						instancename: "arm2",
						matrix: {a: -0.527, b: 0.85, c: -0.85, d: -0.527, tx: -15.75, ty: 8.9},
						transform: [-15.75, 8.9, 1, 1, -2.126, 2.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.456], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_peppermint_arm3_x",
						instancename: "arm2",
						matrix: {a: 0.748, b: 0.664, c: -0.499, d: 0.563, tx: -23.15, ty: 2.15},
						transform: [-23.15, 2.15, 1, 0.752, -0.726, 0.726, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.746, 0.421], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_peppermint_arm3_x",
						instancename: "arm2",
						matrix: {a: -0.527, b: 0.85, c: -0.85, d: -0.527, tx: -15.75, ty: 8.9},
						transform: [-15.75, 8.9, 1, 1, -2.126, 2.126, NaN],
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
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.45, ty: 26.55},
						transform: [-4.45, 26.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -0.139, b: -0.99, c: 0.99, d: -0.139, tx: 18.35, ty: 14.7},
						transform: [18.35, 14.7, 1, 1, 1.71, -1.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.405, 0], [0.741, 0.464], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_peppermint_shoe4_x",
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
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.994, b: 0.095, c: -0.095, d: 0.994, tx: -11.45, ty: 25.1},
						transform: [-11.45, 25.1, 0.999, 0.999, -0.095, 0.095, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.3, 0.371], [0.634, 0.716], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.94, b: 0.338, c: -0.338, d: 0.94, tx: -19.35, ty: 19.7},
						transform: [-19.35, 19.7, 0.999, 0.999, -0.346, 0.346, NaN],
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
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.881, b: 0.473, c: -0.473, d: 0.881, tx: -22.1, ty: 19.4},
						transform: [-22.1, 19.4, 1, 1, -0.493, 0.493, NaN],
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
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.747, b: 0.665, c: -0.665, d: 0.747, tx: -23.55, ty: 19.9},
						transform: [-23.55, 19.9, 1, 1, -0.728, 0.728, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.376, 0], [0.706, 0.366], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_peppermint_shoe4_x",
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
						classname: "_peppermint_shoe4_x",
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
						classname: "_peppermint_shoe4_x",
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
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.918, tx: -4.2, ty: 18.05},
						transform: [-4.2, 18.05, 1, 0.918, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 0.215, b: -0.977, c: 0.977, d: 0.215, tx: 9.55, ty: 12.8},
						transform: [9.55, 12.8, 1, 1, 1.354, -1.354, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.441, 0], [0.781, 0.541], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 0.606, b: -0.796, c: 0.73, d: 0.556, tx: -7.95, ty: 16.3},
						transform: [-7.95, 16.3, 1, 0.918, 0.92, -0.92, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.349], [0.576, 0.739], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 0.401, b: 0.632, c: -0.957, d: 0.608, tx: -10.7, ty: 14.85},
						transform: [-10.7, 14.85, 0.749, 1.134, -1.005, 1.005, NaN],
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
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.371, b: 0.929, c: -0.832, d: 0.332, tx: -7.8, ty: 15.45},
						transform: [-7.8, 15.45, 1, 0.896, -1.191, 1.191, NaN],
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
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.335, b: 0.942, c: -0.942, d: 0.335, tx: -7.95, ty: 15.55},
						transform: [-7.95, 15.55, 1, 1, -1.23, 1.23, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.376, 0], [0.706, 0.366], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_peppermint_leg_ground2_x",
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
						classname: "_peppermint_leg_ground_x",
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
						classname: "_peppermint_leg_ground_x",
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
				name: "baseside1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: 4, ty: -7.95},
						transform: [4, -7.95, 0.977, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 0.891, b: 0, c: 0, d: 1, tx: 5.75, ty: -11.7},
						transform: [5.75, -11.7, 0.891, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.441, 0], [0.781, 0.541], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: 4, ty: -7.95},
						transform: [4, -7.95, 0.977, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.456], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 1.036, b: 0, c: 0, d: 1, tx: 2.7, ty: -9.65},
						transform: [2.7, -9.65, 1.036, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.746, 0.421], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: 4, ty: -7.95},
						transform: [4, -7.95, 0.977, 1, 0, 0, 0],
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
				name: "basefront_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: -0.7, ty: -7.95},
						transform: [-0.7, -7.95, 0.977, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 0.829, b: 0, c: 0, d: 1, tx: -0.7, ty: -11.7},
						transform: [-0.7, -11.7, 0.829, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.441, 0], [0.781, 0.541], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: -0.7, ty: -7.95},
						transform: [-0.7, -7.95, 0.977, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.456], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 1.046, b: 0, c: 0, d: 1, tx: -0.7, ty: -9.65},
						transform: [-0.7, -9.65, 1.046, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.746, 0.421], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: -0.7, ty: -7.95},
						transform: [-0.7, -7.95, 0.977, 1, 0, 0, 0],
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
				name: "monito_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: -4.25, ty: 3.85},
						transform: [-4.25, 3.85, 0.977, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 0.829, b: 0, c: 0, d: 1, tx: -3.7, ty: 0.1},
						transform: [-3.7, 0.1, 0.829, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.441, 0], [0.781, 0.541], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: -4.25, ty: 3.85},
						transform: [-4.25, 3.85, 0.977, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.456], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.3, ty: 2.15},
						transform: [-4.3, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.746, 0.421], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: -4.25, ty: 3.85},
						transform: [-4.25, 3.85, 0.977, 1, 0, 0, 0],
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
				name: "shoe",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -0.25, b: -0.809, c: 0.956, d: -0.295, tx: 11.6, ty: 24.2},
						transform: [11.6, 24.2, 0.847, 1, 1.87, -1.87, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0], [0.714, 0.375], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_peppermint_shoe4_x",
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
						classname: "_peppermint_shoe4_x",
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
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.932, b: 0.362, c: -0.362, d: 0.932, tx: -7.5, ty: 20.1},
						transform: [-7.5, 20.1, 1, 1, -0.37, 0.37, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.38, 0], [0.715, 0.416], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_peppermint_shoe4_x",
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
						classname: "_peppermint_shoe4_x",
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
						to: 13,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6, ty: 26.3},
						transform: [6, 26.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.456], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -0.806, b: -0.592, c: 0.592, d: -0.806, tx: 24.45, ty: 17.4},
						transform: [24.45, 17.4, 1, 1, 2.508, -2.508, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.746, 0.421], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_peppermint_shoe4_x",
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
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.419, c: 0.604, d: 0.609, tx: 6.45, ty: 18.9},
						transform: [6.45, 18.9, 1.078, 0.858, 0.781, -0.399, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0], [0.714, 0.375], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_peppermint_leg_ground_x",
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
						classname: "_peppermint_leg_ground2_x",
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
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.416, b: 0.909, c: -0.909, d: 0.416, tx: 8.2, ty: 14.25},
						transform: [8.2, 14.25, 1, 1, -1.142, 1.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.38, 0], [0.715, 0.416], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_peppermint_leg_ground2_x",
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
						classname: "_peppermint_leg_ground_x",
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
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.253, d: 0.788, tx: 7.85, ty: 18.9},
						transform: [7.85, 18.9, 1, 0.828, -0.311, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.456], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 0.387, b: -0.922, c: 0.922, d: 0.387, tx: 16.35, ty: 13.8},
						transform: [16.35, 13.8, 1, 1, 1.174, -1.174, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.746, 0.421], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_peppermint_leg_ground_x",
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
				name: "eye_2",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -0.977, b: 0, c: 0, d: 1, tx: -13.6, ty: -10.2},
						transform: [-13.6, -10.2, 0.977, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -0.829, b: 0, c: 0, d: 1, tx: -11.65, ty: -13.95},
						transform: [-11.65, -13.95, 0.829, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.441, 0], [0.781, 0.541], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -0.977, b: 0, c: 0, d: 1, tx: -13.6, ty: -10.2},
						transform: [-13.6, -10.2, 0.977, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.456], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -14.6, ty: -11.9},
						transform: [-14.6, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.746, 0.421], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -0.977, b: 0, c: 0, d: 1, tx: -13.6, ty: -10.2},
						transform: [-13.6, -10.2, 0.977, 1, 0, 3.142, NaN],
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
				name: "eye_1",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: 7.35, ty: -10.2},
						transform: [7.35, -10.2, 0.977, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 0.829, b: 0, c: 0, d: 1, tx: 6.15, ty: -13.95},
						transform: [6.15, -13.95, 0.829, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.441, 0], [0.781, 0.541], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: 7.35, ty: -10.2},
						transform: [7.35, -10.2, 0.977, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.456], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 8.2, ty: -11.9},
						transform: [8.2, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.746, 0.421], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: 7.35, ty: -10.2},
						transform: [7.35, -10.2, 0.977, 1, 0, 0, 0],
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
				name: "mouth",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: -4.2, ty: -5.4},
						transform: [-4.2, -5.4, 0.977, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 0.829, b: 0, c: 0, d: 1, tx: -3.65, ty: -9.15},
						transform: [-3.65, -9.15, 0.829, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.441, 0], [0.781, 0.541], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: -4.2, ty: -5.4},
						transform: [-4.2, -5.4, 0.977, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.456], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.25, ty: -7.1},
						transform: [-4.25, -7.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.746, 0.421], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: -4.2, ty: -5.4},
						transform: [-4.2, -5.4, 0.977, 1, 0, 0, 0],
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
				name: "arm1",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_peppermint_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.937, b: 0.35, c: -0.35, d: 0.937, tx: 24.55, ty: 6.15},
						transform: [24.55, 6.15, 1, 1, -0.358, 0.358, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_peppermint_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.837, b: -0.547, c: 0.464, d: 0.709, tx: 23.45, ty: 1.75},
						transform: [23.45, 1.75, 1, 0.848, 0.579, -0.579, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.441, 0], [0.781, 0.541], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 13,
						classname: "_peppermint_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.937, b: 0.35, c: -0.35, d: 0.937, tx: 24.55, ty: 6.15},
						transform: [24.55, 6.15, 1, 1, -0.358, 0.358, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.456], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_peppermint_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.113, b: 0.994, c: -0.791, d: 0.09, tx: 25.8, ty: 3.55},
						transform: [25.8, 3.55, 1, 0.796, -1.458, 1.458, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.435, 0], [0.746, 0.421], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_peppermint_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.937, b: 0.35, c: -0.35, d: 0.937, tx: 24.55, ty: 6.15},
						transform: [24.55, 6.15, 1, 1, -0.358, 0.358, NaN],
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
				name: "Capa 2",
				keys: [
					{
						from: 0,
						to: 20,
						classname: "_peppermint_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.58, tx: 0.5, ty: -0.55},
						transform: [0.5, -0.55, 0.46, 0.58, 0, 0, 0],
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
						classname: "_peppermint_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: -0.75, ty: 27},
						transform: [-0.75, 27, 0.1, 0.1, 0, 0, 0],
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
						classname: "_peppermint_stepbox",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 0.1, tx: -5.5, ty: 27.5},
						transform: [-5.5, 27.5, 0.1, 0.1, 0, 0, 0],
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
						to: 0,
					},
					{
						from: 1,
						to: 9,
					},
					{
						from: 10,
						to: 10,
						actions: function(self){globalsignal.emit(ge.SOUND_STEP);},
					},
					{
						from: 11,
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
	"_peppermint_peppermint_ground_stop": {
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
						classname: "_peppermint_arm3_x",
						instancename: "arm2",
						matrix: {a: -0.527, b: 0.85, c: -0.85, d: -0.527, tx: -15.75, ty: 8.9},
						transform: [-15.75, 8.9, 1, 1, -2.126, 2.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.4], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_peppermint_arm3_x",
						instancename: "arm2",
						matrix: {a: 0.9, b: 0.435, c: -0.435, d: 0.9, tx: -15.25, ty: 2.75},
						transform: [-15.25, 2.75, 1, 1, -0.45, 0.45, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.387], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_peppermint_arm3_x",
						instancename: "arm2",
						matrix: {a: 0.911, b: 0.412, c: -0.412, d: 0.911, tx: -15.55, ty: 3.15},
						transform: [-15.55, 3.15, 1, 1, -0.424, 0.424, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.742, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_arm3_x",
						instancename: "arm2",
						matrix: {a: 0.9, b: 0.435, c: -0.435, d: 0.9, tx: -15.25, ty: 2.75},
						transform: [-15.25, 2.75, 1, 1, -0.45, 0.45, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.441, 0], [0.781, 0.541], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_peppermint_arm3_x",
						instancename: "arm2",
						matrix: {a: 0.9, b: 0.435, c: -0.435, d: 0.9, tx: -17.6, ty: 2.55},
						transform: [-17.6, 2.55, 1, 1, -0.45, 0.45, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.441, 0], [0.781, 0.541], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_peppermint_arm1_x",
						instancename: "arm2",
						matrix: {a: -0.791, b: 0.612, c: 0.549, d: 0.709, tx: -17.2, ty: 2.4},
						transform: [-17.2, 2.4, 1, 0.896, 0.659, 2.483, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_peppermint_arm1_x",
						instancename: "arm2",
						matrix: {a: -0.932, b: 0.362, c: 0.319, d: 0.822, tx: -20.35, ty: 2.65},
						transform: [-20.35, 2.65, 1, 0.882, 0.371, 2.771, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_peppermint_arm1_x",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -19.95, ty: 4.1},
						transform: [-19.95, 4.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.871, b: 0.492, c: -0.492, d: 0.871, tx: -7.75, ty: 25.95},
						transform: [-7.75, 25.95, 1, 1, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.4], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.737, b: 0.676, c: -0.676, d: 0.737, tx: -13.9, ty: 25.2},
						transform: [-13.9, 25.2, 1, 1, -0.743, 0.743, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.387], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.737, b: 0.676, c: -0.676, d: 0.737, tx: -13.9, ty: 25.2},
						transform: [-13.9, 25.2, 1, 1, -0.743, 0.743, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.742, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.737, b: 0.676, c: -0.676, d: 0.737, tx: -13.9, ty: 25.2},
						transform: [-13.9, 25.2, 1, 1, -0.743, 0.743, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.405, 0], [0.741, 0.464], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -7.9, ty: 25.35},
						transform: [-7.9, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -7.9, ty: 25.35},
						transform: [-7.9, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
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
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 0.877, b: 0.48, c: -0.441, d: 0.805, tx: -4.2, ty: 18.05},
						transform: [-4.2, 18.05, 1, 0.918, -0.501, 0.501, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.209, 0.281], [0.547, 0.667], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 2,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.723, b: 0.688, c: -0.554, d: 0.582, tx: -0.75, ty: 16.8},
						transform: [-0.75, 16.8, 0.998, 0.804, -0.761, 0.761, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.4], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.589, b: 0.808, c: -0.882, d: 0.643, tx: 1.3, ty: 16.1},
						transform: [1.3, 16.1, 1, 1.091, -0.941, 0.941, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.387], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.589, b: 0.808, c: -0.882, d: 0.643, tx: 1.3, ty: 16.1},
						transform: [1.3, 16.1, 1, 1.091, -0.941, 0.941, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.742, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.589, b: 0.808, c: -0.882, d: 0.643, tx: 1.3, ty: 16.1},
						transform: [1.3, 16.1, 1, 1.091, -0.941, 0.941, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.356, 0], [0.689, 0.372], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.708, b: 0.704, c: -0.648, d: 0.652, tx: 0.4, ty: 15.95},
						transform: [0.4, 15.95, 0.998, 0.919, -0.783, 0.783, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.366, 0.239], [0.7, 0.592], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.87, b: 0.489, c: -0.372, d: 0.662, tx: -2.35, ty: 15.55},
						transform: [-2.35, 15.55, 0.998, 0.759, -0.512, 0.512, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.393, 0.306], [0.727, 0.665], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.043, c: -0.047, d: 1.099, tx: -7.75, ty: 15.6},
						transform: [-7.75, 15.6, 1, 1.1, -0.043, 0.043, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.1, ty: 16.2},
						transform: [-8.1, 16.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "baseside1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: 4, ty: -7.95},
						transform: [4, -7.95, 0.977, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.4], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 0.885, b: -0.104, c: 0.117, d: 0.993, tx: 5.35, ty: -8.2},
						transform: [5.35, -8.2, 0.891, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.387], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 0.81, b: -0.117, c: 0.143, d: 0.99, tx: 5.8, ty: -8.65},
						transform: [5.8, -8.65, 0.818, 1, 0.143, -0.143, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.742, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 0.885, b: -0.104, c: 0.117, d: 0.993, tx: 5.35, ty: -8.2},
						transform: [5.35, -8.2, 0.891, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.441, 0], [0.781, 0.541], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 1.025, b: 0.017, c: -0.017, d: 1, tx: 4.3, ty: -9.95},
						transform: [4.3, -9.95, 1.025, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4, ty: -9.65},
						transform: [4, -9.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "basefront_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: -0.7, ty: -7.95},
						transform: [-0.7, -7.95, 0.977, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.4], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 0.824, b: -0.097, c: 0.117, d: 0.993, tx: -1, ty: -7.45},
						transform: [-1, -7.45, 0.829, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.387], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 0.798, b: -0.119, c: 0.157, d: 0.99, tx: -2.05, ty: -7.35},
						transform: [-2.05, -7.35, 0.807, 1.002, 0.157, -0.147, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.742, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 0.824, b: -0.097, c: 0.117, d: 0.993, tx: -1, ty: -7.45},
						transform: [-1, -7.45, 0.829, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.441, 0], [0.781, 0.541], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 1.027, b: 0.017, c: -0.017, d: 1, tx: 0.15, ty: -10.05},
						transform: [0.15, -10.05, 1.027, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.7, ty: -9.65},
						transform: [-0.7, -9.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "monito_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: -4.25, ty: 3.85},
						transform: [-4.25, 3.85, 0.977, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.4], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 0.824, b: -0.097, c: 0.117, d: 0.993, tx: -2.6, ty: 4.6},
						transform: [-2.6, 4.6, 0.829, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.387], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 0.798, b: -0.119, c: 0.157, d: 0.99, tx: -3.1, ty: 4.7},
						transform: [-3.1, 4.7, 0.807, 1.002, 0.157, -0.147, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.742, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 0.824, b: -0.097, c: 0.117, d: 0.993, tx: -2.6, ty: 4.6},
						transform: [-2.6, 4.6, 0.829, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.441, 0], [0.781, 0.541], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: -3.65, ty: 1.65},
						transform: [-3.65, 1.65, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.3, ty: 2.15},
						transform: [-4.3, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "shoe",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.815, b: 0.229, c: -0.27, d: 0.963, tx: 6.65, ty: 26.9},
						transform: [6.65, 26.9, 0.847, 1, -0.274, 0.274, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.4], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.695, b: 0.719, c: -0.719, d: 0.695, tx: -3.85, ty: 25.7},
						transform: [-3.85, 25.7, 1, 1, -0.802, 0.802, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.387], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.695, b: 0.719, c: -0.719, d: 0.695, tx: -3.85, ty: 25.7},
						transform: [-3.85, 25.7, 1, 1, -0.802, 0.802, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.742, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.695, b: 0.719, c: -0.719, d: 0.695, tx: -3.85, ty: 25.7},
						transform: [-3.85, 25.7, 1, 1, -0.802, 0.802, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.38, 0], [0.715, 0.416], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.2, ty: 25.35},
						transform: [11.2, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.2, ty: 25.35},
						transform: [11.2, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
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
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 0.969, b: 0.246, c: -0.201, d: 0.793, tx: 8.8, ty: 18.6},
						transform: [8.8, 18.6, 1, 0.818, -0.248, 0.248, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.386, 0], [0.714, 0.375], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 2,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.958, b: 0.286, c: -0.175, d: 0.587, tx: 10.05, ty: 17.25},
						transform: [10.05, 17.25, 1, 0.613, -0.29, 0.29, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.4], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.584, b: 0.812, c: -0.8, d: 0.575, tx: 10.05, ty: 17.5},
						transform: [10.05, 17.5, 1, 0.985, -0.948, 0.948, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.387], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.584, b: 0.812, c: -0.8, d: 0.575, tx: 10.05, ty: 17.5},
						transform: [10.05, 17.5, 1, 0.985, -0.948, 0.948, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.742, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.584, b: 0.812, c: -0.8, d: 0.575, tx: 10.05, ty: 17.5},
						transform: [10.05, 17.5, 1, 0.985, -0.948, 0.948, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.346, 0], [0.679, 0.355], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.63, b: 0.774, c: -0.706, d: 0.575, tx: 10.25, ty: 17.25},
						transform: [10.25, 17.25, 0.998, 0.911, -0.888, 0.888, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.349, 0.23], [0.682, 0.572], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.845, b: 0.53, c: -0.383, d: 0.611, tx: 10.45, ty: 16.6},
						transform: [10.45, 16.6, 0.997, 0.721, -0.56, 0.56, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.353, 0.279], [0.686, 0.619], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.029, tx: 11, ty: 16},
						transform: [11, 16, 1, 1.029, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11, ty: 16.2},
						transform: [11, 16.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye_2",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -0.977, b: 0, c: 0, d: 1, tx: -13.6, ty: -10.2},
						transform: [-13.6, -10.2, 0.977, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.4], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -0.824, b: 0.097, c: 0.117, d: 0.993, tx: -12.1, ty: -8.4},
						transform: [-12.1, -8.4, 0.829, 1, 0.118, 3.024, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.387], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -0.798, b: 0.119, c: 0.157, d: 0.99, tx: -12.9, ty: -8},
						transform: [-12.9, -8, 0.807, 1.002, 0.157, 2.994, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.742, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -0.824, b: 0.097, c: 0.117, d: 0.993, tx: -12.1, ty: -8.4},
						transform: [-12.1, -8.4, 0.829, 1, 0.118, 3.024, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.441, 0], [0.781, 0.541], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: -0.017, c: -0.017, d: 1, tx: -13.25, ty: -12.5},
						transform: [-13.25, -12.5, 1, 1, -0.017, -3.125, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.9, ty: -11.9},
						transform: [-13.9, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye_1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: 7.35, ty: -10.2},
						transform: [7.35, -10.2, 0.977, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.4], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 0.824, b: -0.097, c: 0.117, d: 0.993, tx: 5.5, ty: -10.5},
						transform: [5.5, -10.5, 0.829, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.387], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 0.798, b: -0.119, c: 0.157, d: 0.99, tx: 4, ty: -10.55},
						transform: [4, -10.55, 0.807, 1.002, 0.157, -0.147, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.742, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 0.824, b: -0.097, c: 0.117, d: 0.993, tx: 5.5, ty: -10.5},
						transform: [5.5, -10.5, 0.829, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.441, 0], [0.781, 0.541], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 1.027, b: 0.017, c: -0.017, d: 1, tx: 8.8, ty: -12.15},
						transform: [8.8, -12.15, 1.027, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.6, ty: -11.9},
						transform: [7.6, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
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
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: -4.2, ty: -5.4},
						transform: [-4.2, -5.4, 0.977, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.4], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 0.824, b: -0.097, c: 0.117, d: 0.993, tx: -3.6, ty: -4.55},
						transform: [-3.6, -4.55, 0.829, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.387], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 0.798, b: -0.119, c: 0.157, d: 0.99, tx: -4.45, ty: -4.4},
						transform: [-4.45, -4.4, 0.807, 1.002, 0.157, -0.147, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.742, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 0.824, b: -0.097, c: 0.117, d: 0.993, tx: -3.6, ty: -4.55},
						transform: [-3.6, -4.55, 0.829, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.441, 0], [0.781, 0.541], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: -3.45, ty: -7.55},
						transform: [-3.45, -7.55, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.25, ty: -7.1},
						transform: [-4.25, -7.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
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
						classname: "_peppermint_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.937, b: 0.35, c: -0.35, d: 0.937, tx: 24.55, ty: 6.15},
						transform: [24.55, 6.15, 1, 1, -0.358, 0.358, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.4], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_peppermint_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.993, b: -0.121, c: 0.103, d: 0.841, tx: 24.55, ty: 3.05},
						transform: [24.55, 3.05, 1, 0.848, 0.121, -0.121, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.387], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_peppermint_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.989, b: -0.147, c: 0.124, d: 0.838, tx: 24.2, ty: 2.45},
						transform: [24.2, 2.45, 1, 0.848, 0.147, -0.147, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.742, 0.514], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_peppermint_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.993, b: -0.121, c: 0.103, d: 0.841, tx: 24.55, ty: 3.05},
						transform: [24.55, 3.05, 1, 0.848, 0.121, -0.121, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.441, 0], [0.781, 0.541], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: 0.965, b: 0.262, c: -0.442, d: 0.824, tx: 25.1, ty: 4.55},
						transform: [25.1, 4.55, 1, 0.935, -0.492, 0.265, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.15, ty: 4.2},
						transform: [24.15, 4.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Capa 2",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_peppermint_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.58, tx: 0.5, ty: -0.55},
						transform: [0.5, -0.55, 0.46, 0.58, 0, 0, 0],
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
						classname: "_peppermint_stepbox",
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
						classname: "_peppermint_stepbox",
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
						classname: "_peppermint_stepbox",
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
						classname: "_peppermint_stepbox",
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
						classname: "_peppermint_stepbox",
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
	"_peppermint_peppermint_ground_stopandturn": {
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
						classname: "_peppermint_arm3_x",
						instancename: "arm2",
						matrix: {a: -0.527, b: 0.85, c: -0.85, d: -0.527, tx: -15.75, ty: 8.9},
						transform: [-15.75, 8.9, 1, 1, -2.126, 2.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.14, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_peppermint_arm3_x",
						instancename: "arm2",
						matrix: {a: 0.9, b: 0.435, c: -0.435, d: 0.9, tx: -15.25, ty: 2.75},
						transform: [-15.25, 2.75, 1, 1, -0.45, 0.45, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.387], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_peppermint_arm3_x",
						instancename: "arm2",
						matrix: {a: 0.839, b: 0.545, c: -0.545, d: 0.839, tx: -19.95, ty: 3.05},
						transform: [-19.95, 3.05, 1, 1, -0.576, 0.576, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.441, 0], [0.781, 0.541], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_arm3_x",
						instancename: "arm2",
						matrix: {a: -0.999, b: -0.043, c: -0.043, d: 0.999, tx: -13.5, ty: 4.15},
						transform: [-13.5, 4.15, 1, 1, -0.043, -3.099, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.441, 0], [0.781, 0.541], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_peppermint_arm1_x",
						instancename: "arm2",
						matrix: {a: 0.877, b: 0.481, c: -0.431, d: 0.786, tx: 19.25, ty: 0.4},
						transform: [19.25, 0.4, 1, 0.896, -0.501, 0.501, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_peppermint_arm1_x",
						instancename: "arm2",
						matrix: {a: 0.932, b: 0.362, c: -0.319, d: 0.822, tx: 20.25, ty: 2.65},
						transform: [20.25, 2.65, 1, 0.882, -0.371, 0.371, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_arm1_x",
						instancename: "arm2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 19.9, ty: 4.1},
						transform: [19.9, 4.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.871, b: 0.492, c: -0.492, d: 0.871, tx: -7.75, ty: 25.95},
						transform: [-7.75, 25.95, 1, 1, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.14, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.737, b: 0.676, c: -0.676, d: 0.737, tx: -13.9, ty: 25.2},
						transform: [-13.9, 25.2, 1, 1, -0.743, 0.743, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.228, 0.298], [0.577, 0.671], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.65, c: -0.65, d: 0.758, tx: -13, ty: 25.45},
						transform: [-13, 25.45, 0.998, 0.998, -0.709, 0.709, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.358, 0.25], [0.8, 0.76], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.776, b: 0.631, c: -0.631, d: 0.776, tx: -6.65, ty: 25.5},
						transform: [-6.65, 25.5, 1, 1, -0.683, 0.683, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -0.876, b: 0.483, c: 0.483, d: 0.876, tx: -7.6, ty: 25.75},
						transform: [-7.6, 25.75, 1, 1, 0.504, 2.638, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 7.8, ty: 25.35},
						transform: [7.8, 25.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 7.8, ty: 25.35},
						transform: [7.8, 25.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 7.85, ty: 25.35},
						transform: [7.85, 25.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
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
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 0.877, b: 0.48, c: -0.441, d: 0.805, tx: -4.2, ty: 18.05},
						transform: [-4.2, 18.05, 1, 0.918, -0.501, 0.501, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.209, 0.281], [0.547, 0.667], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 2,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.723, b: 0.688, c: -0.558, d: 0.586, tx: -0.75, ty: 16.8},
						transform: [-0.75, 16.8, 0.998, 0.81, -0.761, 0.761, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.14, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.589, b: 0.808, c: -0.882, d: 0.643, tx: 1.3, ty: 16.1},
						transform: [1.3, 16.1, 1, 1.091, -0.941, 0.941, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.228, 0.298], [0.577, 0.671], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.6, b: 0.797, c: -0.816, d: 0.614, tx: 1.3, ty: 16.05},
						transform: [1.3, 16.05, 0.998, 1.021, -0.925, 0.925, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.358, 0.25], [0.8, 0.76], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.825, b: 0.566, c: -0.435, d: 0.633, tx: 1.4, ty: 15.7},
						transform: [1.4, 15.7, 1, 0.768, -0.601, 0.601, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.356, 0], [0.689, 0.372], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: -0.998, b: -0.006, c: -0.005, d: 0.711, tx: 6.9, ty: 14.95},
						transform: [6.9, 14.95, 0.998, 0.711, -0.006, -3.135, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.366, 0.239], [0.7, 0.592], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: -0.898, b: 0.277, c: 0.324, d: 1.051, tx: 4.7, ty: 16.05},
						transform: [4.7, 16.05, 0.939, 1.1, 0.299, 2.842, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: -0.999, b: 0.043, c: 0.047, d: 1.099, tx: 7.65, ty: 15.6},
						transform: [7.65, 15.6, 1, 1.1, 0.043, 3.099, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 8.05, ty: 16.2},
						transform: [8.05, 16.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "baseside1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: 4, ty: -7.95},
						transform: [4, -7.95, 0.977, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.14, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 0.885, b: -0.104, c: 0.117, d: 0.993, tx: 5.35, ty: -8.2},
						transform: [5.35, -8.2, 0.891, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.387], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 1.035, b: 0.015, c: -0.021, d: 1, tx: 2.9, ty: -9.3},
						transform: [2.9, -9.3, 1.035, 1, -0.021, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 1.086, b: 0.015, c: -0.022, d: 1, tx: 2.9, ty: -9.35},
						transform: [2.9, -9.35, 1.087, 1, -0.022, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: -1.056, b: 0.017, c: 0.017, d: 1, tx: -2.45, ty: -9.95},
						transform: [-2.45, -9.95, 1.056, 1, 0.017, 3.126, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: -1.025, b: 0.017, c: 0.017, d: 1, tx: -4.4, ty: -9.95},
						transform: [-4.4, -9.95, 1.025, 1, 0.017, 3.125, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -4.05, ty: -9.65},
						transform: [-4.05, -9.65, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "basefront_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: -0.7, ty: -7.95},
						transform: [-0.7, -7.95, 0.977, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.14, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 0.824, b: -0.097, c: 0.117, d: 0.993, tx: -1, ty: -7.45},
						transform: [-1, -7.45, 0.829, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.387], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 1.006, b: 0.015, c: -0.021, d: 1, tx: 0.5, ty: -9.45},
						transform: [0.5, -9.45, 1.006, 1, -0.021, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 1.057, b: 0.015, c: -0.022, d: 1, tx: 1.3, ty: -9.5},
						transform: [1.3, -9.5, 1.057, 1, -0.022, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: -1.057, b: 0.017, c: 0.017, d: 1, tx: -0.25, ty: -10.05},
						transform: [-0.25, -10.05, 1.058, 1, 0.017, 3.126, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: -1.027, b: 0.017, c: 0.017, d: 1, tx: -0.25, ty: -10.05},
						transform: [-0.25, -10.05, 1.027, 1, 0.017, 3.125, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0.65, ty: -9.65},
						transform: [0.65, -9.65, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "monito_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: -4.25, ty: 3.85},
						transform: [-4.25, 3.85, 0.977, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.14, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 0.824, b: -0.097, c: 0.117, d: 0.993, tx: -2.6, ty: 4.6},
						transform: [-2.6, 4.6, 0.829, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.387], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 1.006, b: 0.015, c: -0.021, d: 1, tx: -3.5, ty: 2.55},
						transform: [-3.5, 2.55, 1.006, 1, -0.021, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 1.006, b: 0.014, c: -0.018, d: 1, tx: -2.15, ty: 2.4},
						transform: [-2.15, 2.4, 1.006, 1, -0.018, 0.013, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: -1.006, b: 0.015, c: 0.021, d: 1, tx: 3.9, ty: 1.55},
						transform: [3.9, 1.55, 1.006, 1, 0.021, 3.127, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 12,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: -1, b: 0.017, c: 0.017, d: 1, tx: 3.55, ty: 1.65},
						transform: [3.55, 1.65, 1, 1, 0.017, 3.125, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 4.25, ty: 2.15},
						transform: [4.25, 2.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
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
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 0.969, b: 0.246, c: -0.201, d: 0.793, tx: 8.8, ty: 18.6},
						transform: [8.8, 18.6, 1, 0.818, -0.248, 0.248, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.349, 0], [0.682, 0.345], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 2,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.976, b: 0.213, c: -0.115, d: 0.525, tx: 9.05, ty: 18.15},
						transform: [9.05, 18.15, 0.999, 0.537, -0.215, 0.215, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.14, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.584, b: 0.812, c: -0.8, d: 0.575, tx: 10.05, ty: 17.5},
						transform: [10.05, 17.5, 1, 0.985, -0.948, 0.948, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.228, 0.298], [0.577, 0.671], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.661, b: 0.748, c: -0.677, d: 0.597, tx: 10.65, ty: 16.9},
						transform: [10.65, 16.9, 0.998, 0.902, -0.848, 0.848, NaN],
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
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.868, b: 0.497, c: -0.341, d: 0.596, tx: 11.15, ty: 16.25},
						transform: [11.15, 16.25, 1, 0.687, -0.52, 0.52, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.346, 0], [0.679, 0.355], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: -0.998, b: -0.023, c: -0.015, d: 0.644, tx: -9.45, ty: 16},
						transform: [-9.45, 16, 0.998, 0.644, -0.023, -3.118, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.349, 0.23], [0.682, 0.572], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: -0.996, b: 0.087, c: 0.098, d: 1.123, tx: -11.9, ty: 15.1},
						transform: [-11.9, 15.1, 1, 1.127, 0.087, 3.055, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1.029, tx: -11.1, ty: 16},
						transform: [-11.1, 16, 1, 1.029, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11.05, ty: 16.2},
						transform: [-11.05, 16.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "shoe",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.815, b: 0.229, c: -0.27, d: 0.963, tx: 6.65, ty: 26.9},
						transform: [6.65, 26.9, 0.847, 1, -0.274, 0.274, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.14, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.695, b: 0.719, c: -0.719, d: 0.695, tx: -3.85, ty: 25.7},
						transform: [-3.85, 25.7, 1, 1, -0.802, 0.802, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.228, 0.298], [0.577, 0.671], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.731, b: 0.679, c: -0.679, d: 0.731, tx: -1.95, ty: 25.45},
						transform: [-1.95, 25.45, 0.998, 0.998, -0.749, 0.749, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.315, 0.356], [0.65, 0.696], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 7,
						classname: "_peppermint_shoe3_x",
						instancename: "",
						matrix: {a: 0.895, b: -0.438, c: 0.438, d: 0.895, tx: 2.45, ty: 25},
						transform: [2.45, 25, 0.997, 0.997, 0.455, -0.455, NaN],
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
						classname: "_peppermint_shoe3_x",
						instancename: "",
						matrix: {a: 0.956, b: -0.292, c: 0.292, d: 0.956, tx: 4.1, ty: 24.9},
						transform: [4.1, 24.9, 1, 1, 0.297, -0.297, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_shoe3_x",
						instancename: "",
						matrix: {a: -0.956, b: -0.292, c: -0.292, d: 0.956, tx: 8.9, ty: 24.9},
						transform: [8.9, 24.9, 1, 1, -0.297, -2.845, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11.3, ty: 25.35},
						transform: [-11.3, 25.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11.3, ty: 25.35},
						transform: [-11.3, 25.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11.25, ty: 25.35},
						transform: [-11.25, 25.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye_2",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -0.977, b: 0, c: 0, d: 1, tx: -13.6, ty: -10.2},
						transform: [-13.6, -10.2, 0.977, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.14, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -0.824, b: 0.097, c: 0.117, d: 0.993, tx: -12.1, ty: -8.4},
						transform: [-12.1, -8.4, 0.829, 1, 0.118, 3.024, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.387], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -1.006, b: -0.015, c: -0.021, d: 1, tx: -11, ty: -10.45},
						transform: [-11, -10.45, 1.006, 1, -0.021, -3.127, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -1.006, b: -0.014, c: -0.018, d: 1, tx: -10.6, ty: -11.05},
						transform: [-10.6, -11.05, 1.006, 1, -0.018, -3.128, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -1.006, b: -0.015, c: -0.021, d: 1, tx: -8.7, ty: -12},
						transform: [-8.7, -12, 1.006, 1, -0.021, -3.127, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 12,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: 1, b: -0.017, c: 0.017, d: 1, tx: 13.15, ty: -12.5},
						transform: [13.15, -12.5, 1, 1, 0.017, -0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 13.85, ty: -11.9},
						transform: [13.85, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye_1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: 7.35, ty: -10.2},
						transform: [7.35, -10.2, 0.977, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.14, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 0.824, b: -0.097, c: 0.117, d: 0.993, tx: 5.5, ty: -10.5},
						transform: [5.5, -10.5, 0.829, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.387], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 1.006, b: 0.015, c: -0.021, d: 1, tx: 10.4, ty: -10.15},
						transform: [10.4, -10.15, 1.006, 1, -0.021, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 1.006, b: 0.014, c: -0.018, d: 1, tx: 11.05, ty: -10.55},
						transform: [11.05, -10.55, 1.006, 1, -0.018, 0.013, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 1.006, b: 0.015, c: -0.021, d: 1, tx: 12.7, ty: -12.4},
						transform: [12.7, -12.4, 1.006, 1, -0.021, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 12,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: -1.027, b: 0.017, c: 0.017, d: 1, tx: -8.9, ty: -12.15},
						transform: [-8.9, -12.15, 1.027, 1, 0.017, 3.125, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -7.65, ty: -11.9},
						transform: [-7.65, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
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
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 0.977, b: 0, c: 0, d: 1, tx: -4.2, ty: -5.4},
						transform: [-4.2, -5.4, 0.977, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.14, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 0.824, b: -0.097, c: 0.117, d: 0.993, tx: -3.6, ty: -4.55},
						transform: [-3.6, -4.55, 0.829, 1, 0.118, -0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.387], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 1.006, b: 0.015, c: -0.021, d: 1, tx: -1.4, ty: -5.45},
						transform: [-1.4, -5.45, 1.006, 1, -0.021, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 1.006, b: 0.014, c: -0.018, d: 1, tx: -0.5, ty: -5.1},
						transform: [-0.5, -5.1, 1.006, 1, -0.018, 0.013, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 1.006, b: 0.015, c: -0.021, d: 1, tx: 3.05, ty: -7.05},
						transform: [3.05, -7.05, 1.006, 1, -0.021, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 12,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: -1, b: 0.017, c: 0.017, d: 1, tx: 3.35, ty: -7.55},
						transform: [3.35, -7.55, 1, 1, 0.017, 3.125, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 4.2, ty: -7.1},
						transform: [4.2, -7.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
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
						classname: "_peppermint_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.937, b: 0.35, c: -0.35, d: 0.937, tx: 24.55, ty: 6.15},
						transform: [24.55, 6.15, 1, 1, -0.358, 0.358, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.14, 0.356], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_peppermint_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.993, b: -0.121, c: 0.103, d: 0.841, tx: 24.55, ty: 3.05},
						transform: [24.55, 3.05, 1, 0.848, 0.121, -0.121, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.387], [0.581, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_peppermint_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.749, b: 0.663, c: -0.562, d: 0.635, tx: 25.35, ty: 5.75},
						transform: [25.35, 5.75, 1, 0.848, -0.724, 0.724, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_arm3_x",
						instancename: "arm1",
						matrix: {a: 0.755, b: 0.656, c: -0.556, d: 0.64, tx: 25.4, ty: 5.75},
						transform: [25.4, 5.75, 1, 0.848, -0.716, 0.716, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_peppermint_arm3_x",
						instancename: "arm1",
						matrix: {a: -0.976, b: 0.216, c: 0.183, d: 0.828, tx: -22.7, ty: 4.75},
						transform: [-22.7, 4.75, 1, 0.848, 0.218, 2.924, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 12,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: -0.965, b: 0.262, c: 0.442, d: 0.824, tx: -25.2, ty: 4.55},
						transform: [-25.2, 4.55, 1, 0.935, 0.492, 2.876, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.486, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -24.2, ty: 4.2},
						transform: [-24.2, 4.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Capa 3",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_peppermint_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.57, tx: 0.5, ty: -0.05},
						transform: [0.5, -0.05, 0.46, 0.57, 0, 0, 0],
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
						classname: "_peppermint_stepbox",
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
						classname: "_peppermint_stepbox",
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
						classname: "_peppermint_stepbox",
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
						classname: "_peppermint_stepbox",
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
	"_peppermint_peppermint_ground_turn": {
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
						classname: "_peppermint_arm1_x",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -19.95, ty: 4.1},
						transform: [-19.95, 4.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_peppermint_arm1_x",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -22.45, ty: 4.1},
						transform: [-22.45, 4.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_arm1_x",
						instancename: "arm2",
						matrix: {a: -1.107, b: 0, c: 0, d: 1, tx: -22.55, ty: 4.1},
						transform: [-22.55, 4.1, 1.107, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_peppermint_arm1_x",
						instancename: "arm2",
						matrix: {a: -1.213, b: 0, c: 0, d: 1, tx: -22.6, ty: 4.1},
						transform: [-22.6, 4.1, 1.213, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 12,
						classname: "_peppermint_arm1_x",
						instancename: "arm2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 23.1, ty: 3.45},
						transform: [23.1, 3.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_arm1_x",
						instancename: "arm2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 20.15, ty: 4.1},
						transform: [20.15, 4.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
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
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -7.9, ty: 25.35},
						transform: [-7.9, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.856, b: 0, c: 0, d: 1, tx: -7.6, ty: 25.35},
						transform: [-7.6, 25.35, 0.856, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -0.856, b: 0, c: 0, d: 1, tx: -7.7, ty: 25.35},
						transform: [-7.7, 25.35, 0.856, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -0.856, b: 0, c: 0, d: 1, tx: -7.7, ty: 25.35},
						transform: [-7.7, 25.35, 0.856, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 12,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -0.944, b: 0, c: 0, d: 1, tx: 8, ty: 25.35},
						transform: [8, 25.35, 0.944, 1, 0, 3.142, NaN],
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
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 8.1, ty: 25.35},
						transform: [8.1, 25.35, 1, 1, 0, 3.142, NaN],
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
				name: "leg4_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -8.1, ty: 16.2},
						transform: [-8.1, 16.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 0.74, b: 0, c: 0, d: 1, tx: -7.65, ty: 15.8},
						transform: [-7.65, 15.8, 0.74, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.74, b: 0, c: 0, d: 0.5, tx: -6.8, ty: 16.5},
						transform: [-6.8, 16.5, 0.74, 0.5, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.74, b: 0, c: 0, d: 0.5, tx: -6.8, ty: 16.5},
						transform: [-6.8, 16.5, 0.74, 0.5, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 12,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: -0.87, b: 0, c: 0, d: 1, tx: 8.25, ty: 16.2},
						transform: [8.25, 16.2, 0.87, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 8.3, ty: 16.2},
						transform: [8.3, 16.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "baseside1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4, ty: -9.65},
						transform: [4, -9.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 1.038, b: 0, c: 0, d: 1, tx: 1.2, ty: -9.65},
						transform: [1.2, -9.65, 1.038, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
					},
					{
						from: 7,
						to: 7,
					},
					{
						from: 8,
						to: 12,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: -1.054, b: 0, c: 0, d: 1, tx: -0.05, ty: -9.65},
						transform: [-0.05, -9.65, 1.054, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -3.8, ty: -9.65},
						transform: [-3.8, -9.65, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "basefront_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.7, ty: -9.65},
						transform: [-0.7, -9.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 1.045, b: 0, c: 0, d: 1, tx: -0.35, ty: -9.65},
						transform: [-0.35, -9.65, 1.045, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_basefront2_x",
						instancename: "",
						matrix: {a: 1.057, b: 0, c: 0, d: 1, tx: 0.45, ty: -9.65},
						transform: [0.45, -9.65, 1.057, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_peppermint_basefront2_x",
						instancename: "",
						matrix: {a: 1.057, b: 0, c: 0, d: 1, tx: 0.45, ty: -9.65},
						transform: [0.45, -9.65, 1.057, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 12,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: -1.036, b: 0, c: 0, d: 1, tx: 0.9, ty: -9.65},
						transform: [0.9, -9.65, 1.036, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0.9, ty: -9.65},
						transform: [0.9, -9.65, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "monito_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.3, ty: 2.15},
						transform: [-4.3, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.3, ty: 2.15},
						transform: [-4.3, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_monito2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.6, ty: 2.15},
						transform: [-1.6, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_peppermint_monito2_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 1.7, ty: 2.15},
						transform: [1.7, 2.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 12,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 4.05, ty: 2.15},
						transform: [4.05, 2.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 4.5, ty: 2.15},
						transform: [4.5, 2.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "shoe",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.2, ty: 25.35},
						transform: [11.2, 25.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.88, b: 0, c: 0, d: 1, tx: 11.45, ty: 25.35},
						transform: [11.45, 25.35, 0.88, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.88, b: 0, c: 0, d: 1, tx: 11.45, ty: 25.35},
						transform: [11.45, 25.35, 0.88, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.88, b: 0, c: 0, d: 1, tx: 11.45, ty: 25.35},
						transform: [11.45, 25.35, 0.88, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 12,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -0.912, b: 0, c: 0, d: 1, tx: -10.95, ty: 25.35},
						transform: [-10.95, 25.35, 0.912, 1, 0, 3.142, NaN],
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
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11, ty: 25.35},
						transform: [-11, 25.35, 1, 1, 0, 3.142, NaN],
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
				name: "leg3_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11, ty: 16.2},
						transform: [11, 16.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 0.85, b: -0.051, c: 0, d: 1, tx: 11.4, ty: 15.95},
						transform: [11.4, 15.95, 0.852, 1, 0, -0.06, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: -0.85, b: -0.051, c: 0, d: 0.554, tx: 10.6, ty: 15.95},
						transform: [10.6, 15.95, 0.852, 0.554, 0, -3.081, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: -0.85, b: -0.051, c: 0, d: 0.554, tx: 10.6, ty: 15.95},
						transform: [10.6, 15.95, 0.852, 0.554, 0, -3.081, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 12,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: -0.81, b: 0, c: 0, d: 1, tx: -10.85, ty: 16.2},
						transform: [-10.85, 16.2, 0.81, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -10.8, ty: 16.2},
						transform: [-10.8, 16.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye_2",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.9, ty: -11.9},
						transform: [-13.9, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.65, ty: -11.9},
						transform: [-13.65, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -12.55, ty: -11.9},
						transform: [-12.55, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -9.85, ty: -11.9},
						transform: [-9.85, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 12,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.45, ty: -11.9},
						transform: [14.45, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.1, ty: -11.9},
						transform: [14.1, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye_1",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.6, ty: -11.9},
						transform: [7.6, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 9.2, ty: -11.9},
						transform: [9.2, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.45, ty: -11.9},
						transform: [10.45, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 12.5, ty: -11.9},
						transform: [12.5, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 12,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -8.95, ty: -11.9},
						transform: [-8.95, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -7.4, ty: -11.9},
						transform: [-7.4, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "mouth",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.25, ty: -7.1},
						transform: [-4.25, -7.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.5, ty: -7.25},
						transform: [-3.5, -7.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.6, ty: -7.4},
						transform: [-1.6, -7.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.25, ty: -7.4},
						transform: [1.25, -7.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 12,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 3.25, ty: -7.1},
						transform: [3.25, -7.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 4.45, ty: -7.1},
						transform: [4.45, -7.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
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
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.15, ty: 4.2},
						transform: [24.15, 4.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: 1.046, b: 0, c: 0, d: 1, tx: 25.15, ty: 4.2},
						transform: [25.15, 4.2, 1.046, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: 0.957, b: 0, c: 0, d: 1, tx: 25, ty: 4.2},
						transform: [25, 4.2, 0.957, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: 0.871, b: 0, c: 0, d: 1, tx: 24.9, ty: 4.2},
						transform: [24.9, 4.2, 0.871, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 12,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: -1.11, b: 0, c: 0, d: 1, tx: -24.75, ty: 4.2},
						transform: [-24.75, 4.2, 1.11, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -23.95, ty: 4.2},
						transform: [-23.95, 4.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Capa 3",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_peppermint_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.58, tx: 0.5, ty: -1.55},
						transform: [0.5, -1.55, 0.46, 0.58, 0, 0, 0],
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
	"_peppermint_peppermint_ground_turn_fast": {
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
						to: 1,
						classname: "_peppermint_arm1_x",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -20.35, ty: 4.1},
						transform: [-20.35, 4.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.384, 0.339], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_peppermint_arm1_x",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -22.45, ty: 4.1},
						transform: [-22.45, 4.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_peppermint_arm1_x",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -22.45, ty: 4.1},
						transform: [-22.45, 4.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_peppermint_arm1_x",
						instancename: "arm2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 23.1, ty: 3.45},
						transform: [23.1, 3.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_arm1_x",
						instancename: "arm2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 20.15, ty: 4.1},
						transform: [20.15, 4.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.976, b: 0, c: 0, d: 1, tx: -7.85, ty: 25.35},
						transform: [-7.85, 25.35, 0.976, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.384, 0.339], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.856, b: 0, c: 0, d: 1, tx: -7.6, ty: 25.35},
						transform: [-7.6, 25.35, 0.856, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -0.856, b: 0, c: 0, d: 1, tx: -7.7, ty: 25.35},
						transform: [-7.7, 25.35, 0.856, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -0.944, b: 0, c: 0, d: 1, tx: 8, ty: 25.35},
						transform: [8, 25.35, 0.944, 1, 0, 3.142, NaN],
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
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 8.1, ty: 25.35},
						transform: [8.1, 25.35, 1, 1, 0, 3.142, NaN],
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
				name: "leg4_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 0.957, b: 0, c: 0, d: 1, tx: -8.05, ty: 16.15},
						transform: [-8.05, 16.15, 0.957, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.384, 0.339], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 0.74, b: 0, c: 0, d: 1, tx: -7.65, ty: 15.8},
						transform: [-7.65, 15.8, 0.74, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: 0.74, b: 0, c: 0, d: 0.5, tx: -6.8, ty: 16.5},
						transform: [-6.8, 16.5, 0.74, 0.5, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: -0.87, b: 0, c: 0, d: 1, tx: 8.25, ty: 16.2},
						transform: [8.25, 16.2, 0.87, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 8.3, ty: 16.2},
						transform: [8.3, 16.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "baseside1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 1.006, b: 0, c: 0, d: 1, tx: 3.55, ty: -9.65},
						transform: [3.55, -9.65, 1.006, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.384, 0.339], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 1.038, b: 0, c: 0, d: 1, tx: 1.2, ty: -9.65},
						transform: [1.2, -9.65, 1.038, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
					},
					{
						from: 4,
						to: 5,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: -1.054, b: 0, c: 0, d: 1, tx: -0.05, ty: -9.65},
						transform: [-0.05, -9.65, 1.054, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -3.8, ty: -9.65},
						transform: [-3.8, -9.65, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "basefront_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 1.007, b: 0, c: 0, d: 1, tx: -0.65, ty: -9.65},
						transform: [-0.65, -9.65, 1.007, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.384, 0.339], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 1.045, b: 0, c: 0, d: 1, tx: -0.35, ty: -9.65},
						transform: [-0.35, -9.65, 1.045, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_peppermint_basefront2_x",
						instancename: "",
						matrix: {a: 1.057, b: 0, c: 0, d: 1, tx: 0.45, ty: -9.65},
						transform: [0.45, -9.65, 1.057, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: -1.036, b: 0, c: 0, d: 1, tx: 0.9, ty: -9.65},
						transform: [0.9, -9.65, 1.036, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0.9, ty: -9.65},
						transform: [0.9, -9.65, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "monito_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.3, ty: 2.15},
						transform: [-4.3, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.384, 0.339], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.3, ty: 2.15},
						transform: [-4.3, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_peppermint_monito2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.9, ty: 2.15},
						transform: [-0.9, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 4.05, ty: 2.15},
						transform: [4.05, 2.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 4.5, ty: 2.15},
						transform: [4.5, 2.15, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "shoe",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.98, b: 0, c: 0, d: 1, tx: 11.25, ty: 25.35},
						transform: [11.25, 25.35, 0.98, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.384, 0.339], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.88, b: 0, c: 0, d: 1, tx: 11.45, ty: 25.35},
						transform: [11.45, 25.35, 0.88, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: 0.88, b: 0, c: 0, d: 1, tx: 11.45, ty: 25.35},
						transform: [11.45, 25.35, 0.88, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -0.912, b: 0, c: 0, d: 1, tx: -10.95, ty: 25.35},
						transform: [-10.95, 25.35, 0.912, 1, 0, 3.142, NaN],
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
						classname: "_peppermint_shoe4_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11, ty: 25.35},
						transform: [-11, 25.35, 1, 1, 0, 3.142, NaN],
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
				name: "leg3_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 0.976, b: -0.009, c: 0, d: 1, tx: 11.15, ty: 16.15},
						transform: [11.15, 16.15, 0.976, 1, 0, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.384, 0.339], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: 0.85, b: -0.051, c: 0, d: 1, tx: 11.4, ty: 15.95},
						transform: [11.4, 15.95, 0.852, 1, 0, -0.06, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_peppermint_leg_ground2_x",
						instancename: "",
						matrix: {a: -0.85, b: -0.051, c: 0, d: 0.554, tx: 10.6, ty: 15.95},
						transform: [10.6, 15.95, 0.852, 0.554, 0, -3.081, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: -0.81, b: 0, c: 0, d: 1, tx: -10.85, ty: 16.2},
						transform: [-10.85, 16.2, 0.81, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_leg_ground_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -10.8, ty: 16.2},
						transform: [-10.8, 16.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye_2",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.85, ty: -11.9},
						transform: [-13.85, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.384, 0.339], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.65, ty: -11.9},
						transform: [-13.65, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11.35, ty: -11.9},
						transform: [-11.35, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.45, ty: -11.9},
						transform: [14.45, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_eye_1",
						instancename: "eye2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 14.1, ty: -11.9},
						transform: [14.1, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye_1",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.85, ty: -11.9},
						transform: [7.85, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.384, 0.339], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 9.2, ty: -11.9},
						transform: [9.2, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.65, ty: -11.9},
						transform: [11.65, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -8.95, ty: -11.9},
						transform: [-8.95, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_eye_1",
						instancename: "eye1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -7.4, ty: -11.9},
						transform: [-7.4, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "mouth",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.15, ty: -7.1},
						transform: [-4.15, -7.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.384, 0.339], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.5, ty: -7.25},
						transform: [-3.5, -7.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.4, ty: -7.4},
						transform: [-0.4, -7.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 3.25, ty: -7.1},
						transform: [3.25, -7.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_mouth2_x",
						instancename: "mouth",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 4.45, ty: -7.1},
						transform: [4.45, -7.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm1",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: 1.008, b: 0, c: 0, d: 1, tx: 24.3, ty: 4.2},
						transform: [24.3, 4.2, 1.008, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.384, 0.339], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: 1.046, b: 0, c: 0, d: 1, tx: 25.15, ty: 4.2},
						transform: [25.15, 4.2, 1.046, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.541, 0], [0.589, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: 1.046, b: 0, c: 0, d: 1, tx: 25.15, ty: 4.2},
						transform: [25.15, 4.2, 1.046, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: -1.11, b: 0, c: 0, d: 1, tx: -24.75, ty: 4.2},
						transform: [-24.75, 4.2, 1.11, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -23.95, ty: 4.2},
						transform: [-23.95, 4.2, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.25, 0], [0.803, 0.236], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Capa 3",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_peppermint_hittablebox",
						instancename: "hittablebox",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.58, tx: 1.5, ty: -1.55},
						transform: [1.5, -1.55, 0.46, 0.58, 0, 0, 0],
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
	"_peppermint_peppermint_die": {
		type: "movieclip",
		fps: 30,
		totalFrames: 10,
		labels: {},
		layers: [
			{
				name: "arm2",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_peppermint_arm1_flap_die",
						instancename: "arm2",
						matrix: {a: -0.97, b: 0.245, c: 0.245, d: 0.97, tx: -22.5, ty: 3.55},
						transform: [-22.5, 3.55, 1, 1, 0.247, 2.895, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_peppermint_arm1_flap_die",
						instancename: "arm2",
						matrix: {a: -0.97, b: 0.245, c: 0.245, d: 0.97, tx: -22.5, ty: 3.55},
						transform: [-22.5, 3.55, 1, 1, 0.247, 2.895, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_arm1_flap_die",
						instancename: "arm2",
						matrix: {a: -0.97, b: 0.245, c: 0.245, d: 0.97, tx: -22.5, ty: 3.55},
						transform: [-22.5, 3.55, 1, 1, 0.247, 2.895, NaN],
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
						classname: "_peppermint_arm1_flap_die",
						instancename: "arm1",
						matrix: {a: 1.029, b: 0.19, c: -0.181, d: 0.983, tx: 22.95, ty: 3.5},
						transform: [22.95, 3.5, 1.046, 1, -0.182, 0.182, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_peppermint_arm1_flap_die",
						instancename: "arm1",
						matrix: {a: 1.029, b: 0.19, c: -0.181, d: 0.983, tx: 22.95, ty: 3.5},
						transform: [22.95, 3.5, 1.046, 1, -0.182, 0.182, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_arm1_flap_die",
						instancename: "arm1",
						matrix: {a: 1.029, b: 0.19, c: -0.181, d: 0.983, tx: 22.95, ty: 3.5},
						transform: [22.95, 3.5, 1.046, 1, -0.182, 0.182, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "baseside2_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_peppermint_baseside2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.894, tx: 0.4, ty: -15.95},
						transform: [0.4, -15.95, 1, 0.894, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_peppermint_baseside2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.915, tx: 0.4, ty: -14.3},
						transform: [0.4, -14.3, 1, 0.915, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_baseside2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.894, tx: 0.4, ty: -15.95},
						transform: [0.4, -15.95, 1, 0.894, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "basefront4_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_peppermint_basefront4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.924, tx: 0.4, ty: -9.65},
						transform: [0.4, -9.65, 1, 0.924, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_peppermint_basefront4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.963, tx: 0.4, ty: -10.7},
						transform: [0.4, -10.7, 1, 0.963, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_basefront4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.924, tx: 0.4, ty: -9.65},
						transform: [0.4, -9.65, 1, 0.924, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_die",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_peppermint_leg_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -7.8, ty: 13.7},
						transform: [-7.8, 13.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_peppermint_leg_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -7.8, ty: 13.7},
						transform: [-7.8, 13.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_leg_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -7.8, ty: 13.7},
						transform: [-7.8, 13.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_die",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_peppermint_leg_die",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 8.95, ty: 13.85},
						transform: [8.95, 13.85, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_peppermint_leg_die",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 8.95, ty: 13.85},
						transform: [8.95, 13.85, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_leg_die",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 8.95, ty: 13.85},
						transform: [8.95, 13.85, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "monito_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.05, ty: 2.65},
						transform: [0.05, 2.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.05, ty: 2.2},
						transform: [0.05, 2.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.05, ty: 2.65},
						transform: [0.05, 2.65, 1, 1, 0, 0, 0],
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
						classname: "_peppermint_eye_fall",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11.35, ty: -11.9},
						transform: [-11.35, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_peppermint_eye_fall",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11.35, ty: -13.6},
						transform: [-11.35, -13.6, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_eye_fall",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11.35, ty: -11.9},
						transform: [-11.35, -11.9, 1, 1, 0, 3.142, NaN],
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
						classname: "_peppermint_eye_fall",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.65, ty: -11.9},
						transform: [11.65, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_peppermint_eye_fall",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.65, ty: -13.6},
						transform: [11.65, -13.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_eye_fall",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.65, ty: -11.9},
						transform: [11.65, -11.9, 1, 1, 0, 0, 0],
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
						classname: "_peppermint_mouth_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.45, ty: -5.6},
						transform: [0.45, -5.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_peppermint_mouth_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.45, ty: -7},
						transform: [0.45, -7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_peppermint_mouth_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.45, ty: -5.6},
						transform: [0.45, -5.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_peppermint_peppermint_respawn": {
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
						classname: "_peppermint_star",
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
				name: "baseside1_x",
				keys: [
					{
						from: 0,
						to: 19,
					},
					{
						from: 20,
						to: 32,
					},
					{
						from: 33,
						to: 48,
					},
					{
						from: 49,
						to: 56,
					},
					{
						from: 57,
						to: 62,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 0.983, b: 0, c: 0, d: 1, tx: 1.95, ty: -9.65},
						transform: [1.95, -9.65, 0.983, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_peppermint_baseside1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4, ty: -9.65},
						transform: [4, -9.65, 1, 1, 0, 0, 0],
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
						to: 12,
					},
					{
						from: 13,
						to: 19,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: -0.292, b: 1.049, c: -1.049, d: -0.292, tx: -24.6, ty: 4.95},
						transform: [-24.6, 4.95, 1.089, 1.089, -1.842, 1.842, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 32,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: -0.268, b: 0.963, c: -0.963, d: -0.268, tx: -22.6, ty: 4.1},
						transform: [-22.6, 4.1, 1, 1, -1.842, 1.842, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 48,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: -0.548, b: 0.836, c: -0.836, d: -0.548, tx: -22.6, ty: 8.45},
						transform: [-22.6, 8.45, 1, 1, -2.151, 2.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 51,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: -0.268, b: 0.963, c: -0.963, d: -0.268, tx: -22.6, ty: 4.1},
						transform: [-22.6, 4.1, 1, 1, -1.842, 1.842, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.382, 0.096], [0.799, 0.469], [1, 1], ],
						}
					},
					{
						from: 52,
						to: 52,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: -0.581, b: 0.814, c: -0.814, d: -0.581, tx: -22.6, ty: 4.05},
						transform: [-22.6, 4.05, 1, 1, -2.191, 2.191, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 53,
						to: 56,
						classname: "_peppermint_arm_compo",
						instancename: "arm2",
						matrix: {a: -0.954, b: -0.301, c: -0.301, d: 0.954, tx: -19.7, ty: 5.05},
						transform: [-19.7, 5.05, 1, 1, -0.306, -2.836, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.62, 0.877], [1, 1], ],
						}
					},
					{
						from: 57,
						to: 62,
						classname: "_peppermint_arm_compo",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -22.6, ty: 4.1},
						transform: [-22.6, 4.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_peppermint_arm_compo",
						instancename: "arm2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -19.95, ty: 4.1},
						transform: [-19.95, 4.1, 1, 1, 0, 3.142, NaN],
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
				name: "basefront_x",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 19,
						classname: "_peppermint_basefront2_x",
						instancename: "",
						matrix: {a: 1.124, b: 0, c: 0, d: 1.089, tx: -0.1, ty: -10},
						transform: [-0.1, -10, 1.124, 1.089, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 32,
						classname: "_peppermint_basefront2_x",
						instancename: "",
						matrix: {a: 1.033, b: 0, c: 0, d: 1, tx: -0.1, ty: -9.65},
						transform: [-0.1, -9.65, 1.033, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 48,
						classname: "_peppermint_basefront2_x",
						instancename: "",
						matrix: {a: 1.033, b: 0, c: 0, d: 1, tx: -0.1, ty: -5.35},
						transform: [-0.1, -5.35, 1.033, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 56,
						classname: "_peppermint_basefront20_x",
						instancename: "",
						matrix: {a: 1.033, b: 0, c: 0, d: 1, tx: -0.1, ty: -9.65},
						transform: [-0.1, -9.65, 1.033, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 62,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 1.033, b: 0, c: 0, d: 1, tx: -0.7, ty: -9.65},
						transform: [-0.7, -9.65, 1.033, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_peppermint_basefront_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.7, ty: -9.65},
						transform: [-0.7, -9.65, 1, 1, 0, 0, 0],
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
				name: "monito_x",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 19,
						classname: "_peppermint_monito2_x",
						instancename: "",
						matrix: {a: 1.089, b: 0, c: 0, d: 1.089, tx: -0.35, ty: 2.8},
						transform: [-0.35, 2.8, 1.089, 1.089, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 32,
						classname: "_peppermint_monito2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.35, ty: 2.15},
						transform: [-0.35, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 48,
						classname: "_peppermint_monito2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.35, ty: 6.45},
						transform: [-0.35, 6.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 56,
						classname: "_peppermint_monito2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.35, ty: 2.15},
						transform: [-0.35, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 62,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.3, ty: 2.15},
						transform: [-4.3, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_peppermint_monito_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.3, ty: 2.15},
						transform: [-4.3, 2.15, 1, 1, 0, 0, 0],
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
				name: "leg4_x",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 19,
						classname: "_peppermint_legzen_x",
						instancename: "",
						matrix: {a: -1.089, b: 0, c: 0, d: 1.089, tx: -8.2, ty: 19.05},
						transform: [-8.2, 19.05, 1.089, 1.089, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 32,
						classname: "_peppermint_legzen_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -7.55, ty: 17.05},
						transform: [-7.55, 17.05, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 48,
						classname: "_peppermint_legzen_x",
						instancename: "",
						matrix: {a: -0.996, b: -0.091, c: -0.091, d: 0.996, tx: -7.55, ty: 21.35},
						transform: [-7.55, 21.35, 1, 1, -0.091, -3.05, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 51,
						classname: "_peppermint_legzen_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -7.55, ty: 17.05},
						transform: [-7.55, 17.05, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 52,
						to: 52,
						classname: "_peppermint_legzen_x",
						instancename: "",
						matrix: {a: -0.794, b: -0.609, c: -0.609, d: 0.794, tx: -10.35, ty: 15.65},
						transform: [-10.35, 15.65, 1, 1, -0.654, -2.487, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 53,
						to: 56,
						classname: "_peppermint_legidle2",
						instancename: "",
						matrix: {a: 0.51, b: -0.64, c: 0.782, d: 0.624, tx: -10.65, ty: 14.65},
						transform: [-10.65, 14.65, 0.818, 1, 0.897, -0.897, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 62,
						classname: "_peppermint_legidle2",
						instancename: "",
						matrix: {a: 0.806, b: -0.141, c: 0.173, d: 0.985, tx: -10.05, ty: 15.05},
						transform: [-10.05, 15.05, 0.818, 1, 0.174, -0.174, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_peppermint_legidle2",
						instancename: "",
						matrix: {a: 0.818, b: 0, c: 0, d: 1, tx: -10, ty: 15},
						transform: [-10, 15, 0.818, 1, 0, 0, 0],
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
				name: "leg3_x",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 19,
						classname: "_peppermint_legzen_x",
						instancename: "",
						matrix: {a: 1.089, b: 0, c: 0, d: 1.089, tx: 7.55, ty: 19.05},
						transform: [7.55, 19.05, 1.089, 1.089, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 32,
						classname: "_peppermint_legzen_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.95, ty: 17.05},
						transform: [6.95, 17.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 48,
						classname: "_peppermint_legzen_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.099, c: 0.099, d: 0.995, tx: 6.95, ty: 21.35},
						transform: [6.95, 21.35, 1, 1, 0.099, -0.099, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 51,
						classname: "_peppermint_legzen_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.95, ty: 17.05},
						transform: [6.95, 17.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 52,
						to: 52,
						classname: "_peppermint_legzen_x",
						instancename: "",
						matrix: {a: 0.774, b: -0.633, c: 0.537, d: 0.657, tx: 5.25, ty: 16.45},
						transform: [5.25, 16.45, 1, 0.848, 0.685, -0.685, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 53,
						to: 56,
						classname: "_peppermint_leg1_idle",
						instancename: "",
						matrix: {a: 0.333, b: -0.706, c: 0.73, d: 0.345, tx: 5.6, ty: 15.8},
						transform: [5.6, 15.8, 0.78, 0.807, 1.129, -1.129, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 62,
						classname: "_peppermint_leg1_idle",
						instancename: "",
						matrix: {a: 0.737, b: -0.339, c: 0.418, d: 0.908, tx: 11.2, ty: 15.65},
						transform: [11.2, 15.65, 0.812, 1, 0.431, -0.431, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_peppermint_leg1_idle",
						instancename: "",
						matrix: {a: 0.737, b: -0.339, c: 0.418, d: 0.908, tx: 9.85, ty: 15.65},
						transform: [9.85, 15.65, 0.812, 1, 0.431, -0.431, NaN],
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
				name: "eye_2",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 19,
						classname: "_peppermint_eye_darkone",
						instancename: "eye2",
						matrix: {a: -1.089, b: 0, c: 0, d: 1.089, tx: -12.45, ty: -12.3},
						transform: [-12.45, -12.3, 1.089, 1.089, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 32,
						classname: "_peppermint_eye_darkone",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11.45, ty: -11.8},
						transform: [-11.45, -11.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 48,
						classname: "_peppermint_eye_darkone",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11.45, ty: -7.5},
						transform: [-11.45, -7.5, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 56,
						classname: "_peppermint_eye_compo",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -11.45, ty: -11.8},
						transform: [-11.45, -11.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 62,
						classname: "_peppermint_eye_compo",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -14.3, ty: -11.9},
						transform: [-14.3, -11.9, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_peppermint_eye_compo",
						instancename: "eye2",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -13.9, ty: -11.9},
						transform: [-13.9, -11.9, 1, 1, 0, 3.142, NaN],
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
				name: "eye_1",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 19,
						classname: "_peppermint_eye_darkone",
						instancename: "eye1",
						matrix: {a: 1.089, b: 0, c: 0, d: 1.089, tx: 12.2, ty: -12.35},
						transform: [12.2, -12.35, 1.089, 1.089, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 32,
						classname: "_peppermint_eye_darkone",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.25, ty: -11.85},
						transform: [11.25, -11.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 48,
						classname: "_peppermint_eye_darkone",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.25, ty: -7.55},
						transform: [11.25, -7.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 56,
						classname: "_peppermint_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 11.25, ty: -11.85},
						transform: [11.25, -11.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 62,
						classname: "_peppermint_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 8.8, ty: -11.9},
						transform: [8.8, -11.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_peppermint_eye_compo",
						instancename: "eye1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.6, ty: -11.9},
						transform: [7.6, -11.9, 1, 1, 0, 0, 0],
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
				name: "mouth",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 19,
						classname: "_peppermint_mouth_die",
						instancename: "mouth",
						matrix: {a: 0.701, b: 0, c: 0, d: 0.801, tx: -0.1, ty: -7.2},
						transform: [-0.1, -7.2, 0.701, 0.801, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 32,
						classname: "_peppermint_mouth_die",
						instancename: "mouth",
						matrix: {a: 0.644, b: 0, c: 0, d: 0.736, tx: -0.1, ty: -7.1},
						transform: [-0.1, -7.1, 0.644, 0.736, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 48,
						classname: "_peppermint_mouth_die",
						instancename: "mouth",
						matrix: {a: 0.644, b: 0, c: 0, d: 0.736, tx: -0.1, ty: -3.2},
						transform: [-0.1, -3.2, 0.644, 0.736, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 52,
						classname: "_peppermint_mouth_die",
						instancename: "mouth",
						matrix: {a: 0.644, b: 0, c: 0, d: 0.736, tx: -0.1, ty: -7.1},
						transform: [-0.1, -7.1, 0.644, 0.736, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 53,
						to: 53,
						classname: "_peppermint_mouth_die",
						instancename: "mouth",
						matrix: {a: 0.644, b: 0, c: 0, d: 0.286, tx: -2.35, ty: -7.15},
						transform: [-2.35, -7.15, 0.644, 0.286, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 54,
						to: 56,
						classname: "_peppermint_mouth_compo",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.15, ty: -7.1},
						transform: [-3.15, -7.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 62,
						classname: "_peppermint_mouth_compo",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.25, ty: -7.1},
						transform: [-4.25, -7.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_peppermint_mouth_compo",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.25, ty: -7.1},
						transform: [-4.25, -7.1, 1, 1, 0, 0, 0],
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
				name: "arm1",
				keys: [
					{
						from: 0,
						to: 12,
					},
					{
						from: 13,
						to: 19,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: 0.115, b: 1.082, c: 1.082, d: -0.115, tx: 25.65, ty: 5.05},
						transform: [25.65, 5.05, 1.089, 1.089, 1.676, 1.465, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 32,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: 0.105, b: 0.994, c: 0.994, d: -0.105, tx: 23.6, ty: 4.2},
						transform: [23.6, 4.2, 1, 1, 1.676, 1.465, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 48,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: 0.398, b: 0.917, c: 0.917, d: -0.398, tx: 23.6, ty: 8.5},
						transform: [23.6, 8.5, 1, 1, 1.98, 1.161, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.524, 0], [0.602, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 51,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: 0.105, b: 0.994, c: 0.994, d: -0.105, tx: 23.6, ty: 4.2},
						transform: [23.6, 4.2, 1, 1, 1.676, 1.465, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.417, 0.089], [0.776, 0.538], [1, 1], ],
						}
					},
					{
						from: 52,
						to: 52,
						classname: "_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: 0.357, b: 0.842, c: 0.757, d: -0.321, tx: 22.9, ty: 4.2},
						transform: [22.9, 4.2, 0.915, 0.822, 1.972, 1.169, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 53,
						to: 56,
						classname: "_peppermint_arm_compo",
						instancename: "arm1",
						matrix: {a: 0.728, b: -0.257, c: 0.277, d: 0.784, tx: 22.9, ty: 3.65},
						transform: [22.9, 3.65, 0.772, 0.831, 0.34, -0.34, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.636, 1], [1, 1], ],
						}
					},
					{
						from: 57,
						to: 62,
						classname: "_peppermint_arm_compo",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.75, ty: 4.2},
						transform: [24.75, 4.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_peppermint_arm_compo",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.15, ty: 4.2},
						transform: [24.15, 4.2, 1, 1, 0, 0, 0],
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
						to: 7,
					},
					{
						from: 8,
						to: 12,
						classname: "_peppermint_peppermint_portal_x",
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
						classname: "_peppermint_peppermint_portal_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.35, ty: -6.1},
						transform: [-0.35, -6.1, 1, 1, 0, 0, 0],
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
						classname: "_peppermint_peppermint_portal_x",
						instancename: "",
						matrix: {a: 0.928, b: 0, c: 0, d: 0.928, tx: -0.35, ty: -6.2},
						transform: [-0.35, -6.2, 0.928, 0.928, 0, 0, 0],
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
						classname: "_peppermint_glowrespawn_x",
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
						classname: "_peppermint_glowrespawn_x",
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
						classname: "_peppermint_glowrespawn_x",
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
						classname: "_peppermint_glowrespawn_x",
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
						classname: "_peppermint_glowrespawn_x",
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
						classname: "_peppermint_glowrespawn_x",
						instancename: "",
						matrix: {a: 0.623, b: 0, c: 0, d: 0.623, tx: -0.45, ty: -2.05},
						transform: [-0.45, -2.05, 0.623, 0.623, 0, 0, 0],
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
						classname: "_peppermint_glowrespawn_x",
						instancename: "",
						matrix: {a: 0.623, b: 0, c: 0, d: 0.623, tx: -0.45, ty: -8.2},
						transform: [-0.45, -8.2, 0.623, 0.623, 0, 0, 0],
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
						to: 48,
					},
					{
						from: 49,
						to: 55,
						classname: "_peppermint_redpikes_x",
						instancename: "",
						matrix: {a: 0.989, b: 0, c: 0, d: 0.989, tx: -20.4, ty: -14.4},
						transform: [-20.4, -14.4, 0.989, 0.989, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 56,
						to: 56,
						classname: "_peppermint_redpikes_x",
						instancename: "",
						matrix: {a: 0.692, b: 0, c: -0.038, d: 0.898, tx: -22.35, ty: -14.25},
						transform: [-22.35, -14.25, 0.692, 0.898, -0.042, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 57,
						to: 63,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 48,
					},
					{
						from: 49,
						to: 55,
						classname: "_peppermint_redpike_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.6, ty: -32.6},
						transform: [-0.6, -32.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 56,
						to: 56,
						classname: "_peppermint_redpike_x",
						instancename: "",
						matrix: {a: 1, b: -0.079, c: 0, d: 1, tx: -3.1, ty: -32.4},
						transform: [-3.1, -32.4, 1.003, 1, 0, -0.079, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 57,
						to: 63,
					},
				]
			},
		]
	},
	"_peppermint_box_physics": {
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
	"_peppermint_circle_physics": {
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
	"_peppermint_chain": {
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
						classname: "_peppermint_eslabon1_x",
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
						classname: "_peppermint_eslabon1_x",
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
						classname: "_peppermint_eslabon1_x",
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
						classname: "_peppermint_eslabon2_x",
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
						classname: "_peppermint_eslabon2_x",
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
						classname: "_peppermint_eslabon2_x",
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
						classname: "_peppermint_eslabon1_x",
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
						classname: "_peppermint_eslabon1_x",
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
						classname: "_peppermint_eslabon1_x",
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
						classname: "_peppermint_eslabon2_x",
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
						classname: "_peppermint_eslabon2_x",
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
						classname: "_peppermint_eslabon2_x",
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
						classname: "_peppermint_eslabon1_x",
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
						classname: "_peppermint_eslabon1_x",
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
						classname: "_peppermint_eslabon1_x",
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
						classname: "_peppermint_eslabon2_x",
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
						classname: "_peppermint_eslabon2_x",
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
						classname: "_peppermint_eslabon2_x",
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
						classname: "_peppermint_eslabon1_x",
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
						classname: "_peppermint_eslabon1_x",
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
						classname: "_peppermint_eslabon1_x",
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
	"_peppermint_soulbase_empy": {
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
						classname: "_peppermint_balloon_tail",
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
						classname: "_peppermint_soul_head",
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
						classname: "_peppermint_soul_head",
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
						classname: "_peppermint_soul_head",
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
						classname: "_peppermint_soul_head",
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
	"_peppermint_soulbase": {
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
						classname: "_peppermint_balloon_tail",
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
						classname: "_peppermint_soul_head",
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
						classname: "_peppermint_soul_head",
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
						classname: "_peppermint_soul_head",
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
						classname: "_peppermint_soul_head",
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
						classname: "_peppermint_particuler",
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
	"_peppermint_balloon_explotion": {
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
						classname: "_peppermint_explotion_0_x",
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
						classname: "_peppermint_explotion_1_x",
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
						classname: "_peppermint_explotion_3_x",
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
						classname: "_peppermint_explotion_4_x",
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
						classname: "_peppermint_explotion_5_x",
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
						classname: "_peppermint_explotion_6_x",
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
						classname: "_peppermint_explotion_7_x",
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
						classname: "_peppermint_explotion_8_x",
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
						classname: "_peppermint_explotion_line_x",
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
						classname: "_peppermint_explotion_line_x",
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
						classname: "_peppermint_explotion_line",
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
						classname: "_peppermint_explotion_line",
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
						classname: "_peppermint_explotion_line",
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
						classname: "_peppermint_explotion_line",
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
						classname: "_peppermint_explotion_line",
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
						classname: "_peppermint_explotion_line",
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
						classname: "_peppermint_explotion_line",
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
						classname: "_peppermint_explotion_line",
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
	"_peppermint_hittablebox": {
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
	"_peppermint_arm_compo": {
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
						classname: "_peppermint_arm1_x",
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
						classname: "_peppermint_arm1_flap",
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
						classname: "_peppermint_arm1_x",
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
						classname: "_peppermint_arm1_x",
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
						classname: "_peppermint_arm1_x",
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
						classname: "_peppermint_arm1_x",
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
	"_peppermint_baseside1_x": {
		type: "bitmap",
		asset: "_peppermint_baseside1_x",
		scale: 2,
		position: [-11.3, -32.8],
	},
	"_peppermint_basefront_x": {
		type: "bitmap",
		asset: "_peppermint_basefront_x",
		scale: 2,
		position: [-31.1, -32.8],
	},
	"_peppermint_monito_x": {
		type: "bitmap",
		asset: "_peppermint_monito_x",
		scale: 2,
		position: [-9.85, -7.7],
	},
	"_peppermint_legidle2": {
		type: "movieclip",
		fps: 30,
		totalFrames: 35,
		labels: {},
		layers: [
			{
				name: "leg4_x",
				keys: [
					{
						from: 0,
						to: 20,
						classname: "_peppermint_leg4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.547, 0], [0.529, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 33,
						classname: "_peppermint_leg4_x",
						instancename: "",
						matrix: {a: 0.978, b: 0.208, c: -0.208, d: 0.978, tx: -0.1, ty: 0.3},
						transform: [-0.1, 0.3, 1, 1, -0.209, 0.209, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.547, 0], [0.529, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_peppermint_leg4_x",
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
				name: "shoe1_x",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_peppermint_shoe1_x",
						instancename: "",
						matrix: {a: 1.103, b: -0.439, c: 0.442, d: 1.111, tx: -8.5, ty: 4.65},
						transform: [-8.5, 4.65, 1.187, 1.195, 0.379, -0.379, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.36], [0.529, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 20,
						classname: "_peppermint_shoe1_x",
						instancename: "",
						matrix: {a: 0.724, b: -0.94, c: 0.947, d: 0.73, tx: -8.6, ty: 4.7},
						transform: [-8.6, 4.7, 1.187, 1.195, 0.914, -0.914, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.547, 0], [0.529, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 33,
						classname: "_peppermint_shoe1_x",
						instancename: "",
						matrix: {a: 0.982, b: -0.667, c: 0.672, d: 0.989, tx: -9.5, ty: 3.15},
						transform: [-9.5, 3.15, 1.187, 1.195, 0.597, -0.597, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.547, 0], [0.769, 0.551], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_peppermint_shoe1_x",
						instancename: "",
						matrix: {a: 1.103, b: -0.439, c: 0.442, d: 1.111, tx: -8.5, ty: 4.65},
						transform: [-8.5, 4.65, 1.187, 1.195, 0.379, -0.379, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_peppermint_leg1_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 35,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_peppermint_leg3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.465, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 21,
						classname: "_peppermint_leg3_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.182, c: 0.182, d: 0.983, tx: -0.35, ty: -0.4},
						transform: [-0.35, -0.4, 1, 1, 0.183, -0.183, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.726, 0.526], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 33,
						classname: "_peppermint_leg3_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.055, c: -0.055, d: 0.998, tx: -0.15, ty: -0.15},
						transform: [-0.15, -0.15, 1, 1, -0.055, 0.055, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.263, 0.523], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_peppermint_leg3_x",
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
						to: 7,
						classname: "_peppermint_shoe1_x",
						instancename: "",
						matrix: {a: 1.084, b: -0.142, c: 0.151, d: 1.153, tx: -11, ty: 2.75},
						transform: [-11, 2.75, 1.093, 1.163, 0.13, -0.13, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.721, 0.393], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 21,
						classname: "_peppermint_shoe1_x",
						instancename: "",
						matrix: {a: 0.892, b: -0.631, c: 0.671, d: 0.949, tx: -10.35, ty: 3.9},
						transform: [-10.35, 3.9, 1.093, 1.162, 0.615, -0.615, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.342, 0.314], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 33,
						classname: "_peppermint_shoe1_x",
						instancename: "",
						matrix: {a: 1.092, b: 0.037, c: -0.039, d: 1.161, tx: -10.75, ty: 1.55},
						transform: [-10.75, 1.55, 1.093, 1.162, -0.034, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.265, 0.569], [0.57, 1], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_peppermint_shoe1_x",
						instancename: "",
						matrix: {a: 1.084, b: -0.142, c: 0.151, d: 1.153, tx: -11, ty: 2.75},
						transform: [-11, 2.75, 1.093, 1.163, 0.13, -0.13, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_peppermint_eye_compo": {
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
						classname: "_peppermint_eye_1",
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
						classname: "_peppermint_eye_flap",
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
						classname: "_peppermint_eye_flapout",
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
	"_peppermint_mouth_compo": {
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
						classname: "_peppermint_mouth2_x",
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
						classname: "_peppermint_mouth_flap",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 19,
						classname: "_peppermint_mouth_flapout",
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
	"_peppermint_attackbox": {
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
	"_peppermint_basefront2_x": {
		type: "bitmap",
		asset: "_peppermint_basefront2_x",
		scale: 2,
		position: [-31.1, -32.8],
	},
	"_peppermint_monito2_x": {
		type: "bitmap",
		asset: "_peppermint_monito2_x",
		scale: 2,
		position: [-9.85, -7.7],
	},
	"_peppermint_arm1_x": {
		type: "bitmap",
		asset: "_peppermint_arm1_x",
		scale: 2,
		position: [-6, -6.45],
	},
	"_peppermint_shoe4_x": {
		type: "bitmap",
		asset: "_peppermint_shoe4_x",
		scale: 2,
		position: [-9.5, -6.6],
	},
	"_peppermint_leg_ground_x": {
		type: "bitmap",
		asset: "_peppermint_leg_ground_x",
		scale: 2,
		position: [-9.95, -5.3],
	},
	"_peppermint_eye_1": {
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
						classname: "_peppermint_eyebasic_x",
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
						classname: "_peppermint_eyebasic_x",
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
						classname: "_peppermint_eyebasic_x",
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
						classname: "_peppermint_eyebasic_x",
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
						classname: "_peppermint_eyebasic_x",
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
						classname: "_peppermint_eyebrow1_x",
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
						classname: "_peppermint_eyebrow1_x",
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
						classname: "_peppermint_eyebrow1_x",
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
						classname: "_peppermint_eyebrow1_x",
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
						classname: "_peppermint_eyebrow1_x",
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
						classname: "_peppermint_eyebrow1_x",
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
						classname: "_peppermint_eyebrow1_x",
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
						classname: "_peppermint_eyebrow1_x",
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
						classname: "_peppermint_eyebrow1_x",
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
	"_peppermint_mouth2_x": {
		type: "bitmap",
		asset: "_peppermint_mouth2_x",
		scale: 2,
		position: [-10.15, -7.65],
	},
	"_peppermint_arm3_x": {
		type: "bitmap",
		asset: "_peppermint_arm3_x",
		scale: 2,
		position: [-6, -6.5],
	},
	"_peppermint_leg_ground2_x": {
		type: "bitmap",
		asset: "_peppermint_leg_ground2_x",
		scale: 2,
		position: [-8.05, -6.3],
	},
	"_peppermint_stepbox": {
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
	"_peppermint_shoe3_x": {
		type: "bitmap",
		asset: "_peppermint_shoe3_x",
		scale: 2,
		position: [-7.2, -9.65],
	},
	"_peppermint_arm1_flap_die": {
		type: "movieclip",
		fps: 30,
		totalFrames: 5,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_peppermint_arm1_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.164, c: -0.164, d: -0.986, tx: 0, ty: -0.2},
						transform: [0, -0.2, 1, 1, -2.977, -0.165, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_peppermint_arm1_x",
						instancename: "",
						matrix: {a: 0.9, b: 0.435, c: 0.435, d: -0.9, tx: 0, ty: -0.15},
						transform: [0, -0.15, 1, 1, 2.691, 0.45, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_peppermint_arm1_x",
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
						classname: "_peppermint_arm1_x",
						instancename: "",
						matrix: {a: 0.769, b: 0.639, c: -0.639, d: 0.769, tx: -0.1, ty: 0},
						transform: [-0.1, 0, 1, 1, -0.693, 0.693, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_peppermint_arm1_x",
						instancename: "",
						matrix: {a: 0.987, b: 0.157, c: -0.146, d: 0.921, tx: -0.15, ty: -0.15},
						transform: [-0.15, -0.15, 0.999, 0.932, -0.157, 0.157, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_peppermint_baseside2_x": {
		type: "bitmap",
		asset: "_peppermint_baseside2_x",
		scale: 2,
		position: [-32.95, -32.8],
	},
	"_peppermint_basefront4_x": {
		type: "bitmap",
		asset: "_peppermint_basefront4_x",
		scale: 2,
		position: [-32.95, -32.8],
	},
	"_peppermint_leg_die": {
		type: "movieclip",
		fps: 30,
		totalFrames: 6,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_peppermint_leg_die_x",
						instancename: "",
						matrix: {a: 0.99, b: 0.139, c: -0.139, d: 0.99, tx: -0.05, ty: 0.1},
						transform: [-0.05, 0.1, 1, 1, -0.139, 0.139, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.636, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_peppermint_leg_die_x",
						instancename: "",
						matrix: {a: 0.326, b: -0.777, c: 0.736, d: 0.475, tx: -0.7, ty: -0.05},
						transform: [-0.7, -0.05, 0.843, 0.876, 0.998, -1.173, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.636, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_peppermint_leg_die_x",
						instancename: "",
						matrix: {a: 0.99, b: 0.139, c: -0.139, d: 0.99, tx: -0.05, ty: 0.1},
						transform: [-0.05, 0.1, 1, 1, -0.139, 0.139, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.636, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_peppermint_shoe1_x",
						instancename: "",
						matrix: {a: 1.079, b: -0.179, c: 0.191, d: 1.147, tx: -7.15, ty: 5.1},
						transform: [-7.15, 5.1, 1.093, 1.163, 0.165, -0.165, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.636, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_peppermint_shoe1_x",
						instancename: "",
						matrix: {a: -0.501, b: -0.89, c: 0.947, d: -0.533, tx: 2.05, ty: 8.55},
						transform: [2.05, 8.55, 1.021, 1.086, 2.083, -2.083, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.636, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_peppermint_shoe1_x",
						instancename: "",
						matrix: {a: 1.079, b: -0.179, c: 0.191, d: 1.147, tx: -7.15, ty: 5.1},
						transform: [-7.15, 5.1, 1.093, 1.163, 0.165, -0.165, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.636, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_peppermint_eye_fall": {
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
						classname: "_peppermint_eyebasic2_x",
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
						classname: "_peppermint_eyebasic2_x",
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
						classname: "_peppermint_eyebasic2_x",
						instancename: "",
						matrix: {a: 0.923, b: 0.386, c: -0.223, d: 0.532, tx: -0.05, ty: 0.15},
						transform: [-0.05, 0.15, 1, 0.577, -0.396, 0.396, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 52,
						to: 55,
						classname: "_peppermint_eyebasic2_x",
						instancename: "",
						matrix: {a: 0.923, b: 0.386, c: -0.223, d: 0.532, tx: -0.05, ty: 0.15},
						transform: [-0.05, 0.15, 1, 0.577, -0.396, 0.396, NaN],
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
						classname: "_peppermint_eyebasic2_x",
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
						classname: "_peppermint_eyebrow3_x",
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
						classname: "_peppermint_eyebrow3_x",
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
						classname: "_peppermint_eyebrow3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.35, ty: -1.95},
						transform: [-0.35, -1.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 30,
						classname: "_peppermint_eyebrow3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.35, ty: -1.95},
						transform: [-0.35, -1.95, 1, 1, 0, 0, 0],
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
						classname: "_peppermint_eyebrow3_x",
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
						classname: "_peppermint_eyebrow3_x",
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
						classname: "_peppermint_eyebrow3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.55, ty: -1.25},
						transform: [-0.55, -1.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 52,
						to: 56,
						classname: "_peppermint_eyebrow3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.55, ty: -1.25},
						transform: [-0.55, -1.25, 1, 1, 0, 0, 0],
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
						classname: "_peppermint_eyebrow3_x",
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
	"_peppermint_mouth_die": {
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
						classname: "_peppermint_mouth6_x",
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
						classname: "_peppermint_mouth6_x",
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
						classname: "_peppermint_mouth6_x",
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
	"_peppermint_star": {
		type: "movieclip",
		fps: 30,
		totalFrames: 41,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_peppermint_starpart_x",
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
						classname: "_peppermint_starpart_x",
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
						classname: "_peppermint_starpart_x",
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
						classname: "_peppermint_starpart_x",
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
						classname: "_peppermint_starpart_x",
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
						classname: "_peppermint_starpart_x",
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
						classname: "_peppermint_starpart_x",
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
						classname: "_peppermint_starpart_x",
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
						classname: "_peppermint_starpart_x",
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
						classname: "_peppermint_starpart_x",
						instancename: "",
						matrix: {a: 0.279, b: 0.918, c: -0.957, d: 0.291, tx: 39.6, ty: 70.7},
						transform: [39.6, 70.7, 0.96, 1, -1.276, 1.276, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 38,
						classname: "_peppermint_starpart_x",
						instancename: "",
						matrix: {a: -1.354, b: -1.122, c: 0.638, d: -0.77, tx: -74.45, ty: -9.95},
						transform: [-74.45, -9.95, 1.758, 1, 2.449, -2.449, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.199, 0.486], [0.587, 1], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 39,
						classname: "_peppermint_starpart_x",
						instancename: "",
						matrix: {a: -0.214, b: -0.178, c: 0.638, d: -0.77, tx: -96.2, ty: -26.45},
						transform: [-96.2, -26.45, 0.278, 1, 2.449, -2.449, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 40,
						to: 40,
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
						classname: "_peppermint_starpart2_x",
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
						classname: "_peppermint_starpart2_x",
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
						classname: "_peppermint_starpart2_x",
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
						classname: "_peppermint_starpart2_x",
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
						classname: "_peppermint_starpart2_x",
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
						classname: "_peppermint_starpart2_x",
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
						classname: "_peppermint_starpart2_x",
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
						classname: "_peppermint_starpart2_x",
						instancename: "",
						matrix: {a: -1.537, b: -1.113, c: 0.586, d: -0.81, tx: -36.45, ty: 17.9},
						transform: [-36.45, 17.9, 1.898, 1, 2.515, -2.515, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 40,
					},
				]
			},
		]
	},
	"_peppermint_basefront20_x": {
		type: "bitmap",
		asset: "_peppermint_basefront20_x",
		scale: 2,
		position: [-31.1, -32.8],
	},
	"_peppermint_legzen_x": {
		type: "bitmap",
		asset: "_peppermint_legzen_x",
		scale: 2,
		position: [-14.3, -7.5],
	},
	"_peppermint_eye_darkone": {
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
						to: 0,
						classname: "_peppermint_eyedark_x",
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
						classname: "_peppermint_eyedark_x",
						instancename: "",
						matrix: {a: -0.763, b: -0.646, c: 0.646, d: -0.763, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 2.439, -2.439, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_peppermint_eyedark_x",
						instancename: "",
						matrix: {a: -0.901, b: 0.434, c: -0.434, d: -0.901, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, -2.693, 2.693, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_peppermint_eyedark_x",
						instancename: "",
						matrix: {a: 0.459, b: -0.888, c: 0.888, d: 0.459, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 1.094, -1.094, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_peppermint_eyedark_x",
						instancename: "",
						matrix: {a: 0.692, b: 0.722, c: 0.722, d: -0.692, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 2.336, 0.806, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_peppermint_eyedark_x",
						instancename: "",
						matrix: {a: 0.885, b: -0.465, c: 0.465, d: 0.885, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0.484, -0.484, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_peppermint_peppermint_portal_x": {
		type: "bitmap",
		asset: "_peppermint_peppermint_portal_x",
		scale: 2,
		position: [-49, -38.9],
	},
	"_peppermint_glowrespawn_x": {
		type: "bitmap",
		asset: "_peppermint_glowrespawn_x",
		scale: 2,
		position: [-95.3, -95.3],
	},
	"_peppermint_redpikes_x": {
		type: "bitmap",
		asset: "_peppermint_redpikes_x",
		scale: 2,
		position: [-11.3, -23.8],
	},
	"_peppermint_redpike_x": {
		type: "bitmap",
		asset: "_peppermint_redpike_x",
		scale: 2,
		position: [-8.15, -9.4],
	},
	"_peppermint_eslabon1_x": {
		type: "bitmap",
		asset: "_peppermint_eslabon1_x",
		scale: 2,
		position: [-9.7, -11.15],
	},
	"_peppermint_eslabon2_x": {
		type: "bitmap",
		asset: "_peppermint_eslabon2_x",
		scale: 2,
		position: [-8.95, -10.15],
	},
	"_peppermint_balloon_tail": {
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
						classname: "_peppermint_balloon_tail_green_x",
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
						classname: "_peppermint_balloon_tail_cyan_x",
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
						classname: "_peppermint_balloon_tail_orange_x",
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
						classname: "_peppermint_balloon_tail_piink_x",
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
						classname: "_peppermint_balloon_tail_blue_x",
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
						classname: "_peppermint_balloon_tail_purple_x",
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
	"_peppermint_soul_head": {
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
						classname: "_peppermint_sould_head_base_1",
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
						classname: "_peppermint_soul_faces",
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
	"_peppermint_particuler": {
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
						classname: "_peppermint_satanicbox",
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
						classname: "_peppermint_satanicbox",
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
	"_peppermint_explotion_0_x": {
		type: "bitmap",
		asset: "_peppermint_explotion_0_x",
		scale: 2,
		position: [-23.25, -26.4],
	},
	"_peppermint_explotion_1_x": {
		type: "bitmap",
		asset: "_peppermint_explotion_1_x",
		scale: 2,
		position: [-24.5, -27.95],
	},
	"_peppermint_explotion_3_x": {
		type: "bitmap",
		asset: "_peppermint_explotion_3_x",
		scale: 2,
		position: [-24.95, -28.4],
	},
	"_peppermint_explotion_4_x": {
		type: "bitmap",
		asset: "_peppermint_explotion_4_x",
		scale: 2,
		position: [-25.75, -29.35],
	},
	"_peppermint_explotion_5_x": {
		type: "bitmap",
		asset: "_peppermint_explotion_5_x",
		scale: 2,
		position: [-26.7, -30.45],
	},
	"_peppermint_explotion_6_x": {
		type: "bitmap",
		asset: "_peppermint_explotion_6_x",
		scale: 2,
		position: [-26.45, -30.3],
	},
	"_peppermint_explotion_7_x": {
		type: "bitmap",
		asset: "_peppermint_explotion_7_x",
		scale: 2,
		position: [-25.9, -29.9],
	},
	"_peppermint_explotion_8_x": {
		type: "bitmap",
		asset: "_peppermint_explotion_8_x",
		scale: 2,
		position: [-25.6, -29.75],
	},
	"_peppermint_explotion_line_x": {
		type: "bitmap",
		asset: "_peppermint_explotion_line_x",
		scale: 2,
		position: [-30.75, -33.1],
	},
	"_peppermint_explotion_line": {
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
						classname: "_peppermint_explotioncosin_x",
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
						classname: "_peppermint_explotioncosin_x",
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
						classname: "_peppermint_explotioncosin_x",
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
	"_peppermint_arm1_flap": {
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
						classname: "_peppermint_arm1_x",
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
						classname: "_peppermint_arm1_x",
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
						classname: "_peppermint_arm1_x",
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
						classname: "_peppermint_arm1_x",
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
						classname: "_peppermint_arm1_x",
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
	"_peppermint_leg4_x": {
		type: "bitmap",
		asset: "_peppermint_leg4_x",
		scale: 2,
		position: [-14.6, -7.25],
	},
	"_peppermint_shoe1_x": {
		type: "bitmap",
		asset: "_peppermint_shoe1_x",
		scale: 2,
		position: [-8.95, -7.25],
	},
	"_peppermint_leg3_x": {
		type: "bitmap",
		asset: "_peppermint_leg3_x",
		scale: 2,
		position: [-16.75, -8.9],
	},
	"_peppermint_eye_flap": {
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
						classname: "_peppermint_eyebasic_x",
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
						classname: "_peppermint_eyebrow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: -1.7},
						transform: [-0.05, -1.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_peppermint_eyebrow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: -1.25},
						transform: [-0.05, -1.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_peppermint_eyebrow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: -1.25},
						transform: [-0.05, -1.25, 1, 1, 0, 0, 0],
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
						classname: "_peppermint_eyebrow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: -1.7},
						transform: [-0.05, -1.7, 1, 1, 0, 0, 0],
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
						to: 2,
						classname: "_peppermint_eyebrow2_x",
						instancename: "",
						matrix: {a: 0.697, b: -0.157, c: -0.157, d: -0.697, tx: -0.2, ty: 2.1},
						transform: [-0.2, 2.1, 0.714, 0.714, -2.92, -0.222, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_peppermint_eyebrow2_x",
						instancename: "",
						matrix: {a: 0.814, b: -0.184, c: -0.184, d: -0.814, tx: -0.15, ty: 1.55},
						transform: [-0.15, 1.55, 0.835, 0.835, -2.92, -0.222, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_peppermint_eyebrow2_x",
						instancename: "",
						matrix: {a: 0.814, b: -0.184, c: -0.184, d: -0.814, tx: -0.15, ty: 1.55},
						transform: [-0.15, 1.55, 0.835, 0.835, -2.92, -0.222, NaN],
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
						classname: "_peppermint_eyebrow2_x",
						instancename: "",
						matrix: {a: 0.697, b: -0.157, c: -0.157, d: -0.697, tx: -0.2, ty: 2.1},
						transform: [-0.2, 2.1, 0.714, 0.714, -2.92, -0.222, NaN],
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
	"_peppermint_eye_flapout": {
		type: "movieclip",
		fps: 30,
		totalFrames: 14,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_peppermint_eyebasic_x",
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
						classname: "_peppermint_eyebrow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: -1.55},
						transform: [-0.05, -1.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 13,
						classname: "_peppermint_eyebrow1_x",
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
						to: 2,
						classname: "_peppermint_eyebrow2_x",
						instancename: "",
						matrix: {a: 0.736, b: -0.164, c: -0.164, d: -0.736, tx: -0.25, ty: 2},
						transform: [-0.25, 2, 0.754, 0.754, -2.922, -0.219, NaN],
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
						classname: "_peppermint_eyebrow2_x",
						instancename: "",
						matrix: {a: 0.402, b: -0.166, c: -0.166, d: -0.402, tx: 0.15, ty: 2.4},
						transform: [0.15, 2.4, 0.435, 0.435, -2.75, -0.392, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 13,
					},
				]
			},
		]
	},
	"_peppermint_mouth_flap": {
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
						to: 0,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_peppermint_mouth5_x",
						instancename: "",
						matrix: {a: 0.239, b: 0, c: 0, d: 0.239, tx: -1.2, ty: 0.15},
						transform: [-1.2, 0.15, 0.239, 0.239, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.418], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_peppermint_mouth5_x",
						instancename: "",
						matrix: {a: 0.382, b: 0, c: 0, d: 0.382, tx: -0.05, ty: 0.45},
						transform: [-0.05, 0.45, 0.382, 0.382, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.367, 0], [0.702, 0.398], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_peppermint_mouth5_x",
						instancename: "",
						matrix: {a: 0.348, b: 0, c: 0, d: 0.348, tx: -0.25, ty: 0.3},
						transform: [-0.25, 0.3, 0.348, 0.348, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.409, 0.265], [0.748, 0.652], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_peppermint_mouth_3_x",
						instancename: "",
						matrix: {a: 1.092, b: 0, c: 0, d: 1.092, tx: -2.3, ty: 0.35},
						transform: [-2.3, 0.35, 1.092, 1.092, 0, 0, 0],
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
						classname: "_peppermint_mouth_3_x",
						instancename: "",
						matrix: {a: 0.886, b: 0, c: 0, d: 0.886, tx: -3.3, ty: -0.25},
						transform: [-3.3, -0.25, 0.886, 0.886, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
						classname: "_peppermint_mouth_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.35, ty: -0.35},
						transform: [-2.35, -0.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_peppermint_mouth_flapout": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_peppermint_mouth5_x",
						instancename: "",
						matrix: {a: 0.32, b: 0, c: 0, d: 0.32, tx: -0.55, ty: 0.35},
						transform: [-0.55, 0.35, 0.32, 0.32, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.284, 0.558], [0.636, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_peppermint_mouth5_x",
						instancename: "",
						matrix: {a: 0.296, b: 0, c: 0, d: 0.1, tx: 0, ty: -0.45},
						transform: [0, -0.45, 0.296, 0.1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.367, 0], [0.702, 0.398], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 19,
						classname: "_peppermint_mouth2_x",
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
	"_peppermint_eyebasic_x": {
		type: "bitmap",
		asset: "_peppermint_eyebasic_x",
		scale: 2,
		position: [-8.5, -8.8],
	},
	"_peppermint_eyebrow1_x": {
		type: "bitmap",
		asset: "_peppermint_eyebrow1_x",
		scale: 2,
		position: [-8.8, -8.85],
	},
	"_peppermint_leg_die_x": {
		type: "bitmap",
		asset: "_peppermint_leg_die_x",
		scale: 2,
		position: [-12.95, -6.5],
	},
	"_peppermint_eyebasic2_x": {
		type: "bitmap",
		asset: "_peppermint_eyebasic2_x",
		scale: 2,
		position: [-9.6, -10],
	},
	"_peppermint_eyebrow3_x": {
		type: "bitmap",
		asset: "_peppermint_eyebrow3_x",
		scale: 2,
		position: [-8.15, -10.6],
	},
	"_peppermint_mouth6_x": {
		type: "bitmap",
		asset: "_peppermint_mouth6_x",
		scale: 2,
		position: [-13.65, -8.85],
	},
	"_peppermint_starpart_x": {
		type: "bitmap",
		asset: "_peppermint_starpart_x",
		scale: 2,
		position: [-62.5, -12.85],
	},
	"_peppermint_starpart2_x": {
		type: "bitmap",
		asset: "_peppermint_starpart2_x",
		scale: 2,
		position: [-62.5, -12.85],
	},
	"_peppermint_eyedark_x": {
		type: "bitmap",
		asset: "_peppermint_eyedark_x",
		scale: 2,
		position: [-12.1, -13.7],
	},
	"_peppermint_balloon_tail_green_x": {
		type: "bitmap",
		asset: "_peppermint_balloon_tail_green_x",
		scale: 2,
		position: [-8.25, -11.2],
	},
	"_peppermint_balloon_tail_cyan_x": {
		type: "bitmap",
		asset: "_peppermint_balloon_tail_cyan_x",
		scale: 2,
		position: [-8.25, -11.2],
	},
	"_peppermint_balloon_tail_orange_x": {
		type: "bitmap",
		asset: "_peppermint_balloon_tail_orange_x",
		scale: 2,
		position: [-8.25, -11.2],
	},
	"_peppermint_balloon_tail_piink_x": {
		type: "bitmap",
		asset: "_peppermint_balloon_tail_piink_x",
		scale: 2,
		position: [-8.25, -11.2],
	},
	"_peppermint_balloon_tail_blue_x": {
		type: "bitmap",
		asset: "_peppermint_balloon_tail_blue_x",
		scale: 2,
		position: [-8.25, -11.2],
	},
	"_peppermint_balloon_tail_purple_x": {
		type: "bitmap",
		asset: "_peppermint_balloon_tail_purple_x",
		scale: 2,
		position: [-8.25, -11.2],
	},
	"_peppermint_sould_head_base_1": {
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
						classname: "_peppermint_souls_bubbles_compo",
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
						classname: "_peppermint_soul_head_base_1_x",
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
	"_peppermint_soul_faces": {
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
						classname: "_peppermint_soul_face_1",
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
	"_peppermint_satanicbox": {
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
	"_peppermint_explotioncosin_x": {
		type: "bitmap",
		asset: "_peppermint_explotioncosin_x",
		scale: 2,
		position: [-6.55, -10.3],
	},
	"_peppermint_eyebrow2_x": {
		type: "bitmap",
		asset: "_peppermint_eyebrow2_x",
		scale: 2,
		position: [-8.6, -8.9],
	},
	"_peppermint_mouth5_x": {
		type: "bitmap",
		asset: "_peppermint_mouth5_x",
		scale: 2,
		position: [-17.8, -12.7],
	},
	"_peppermint_mouth_3_x": {
		type: "bitmap",
		asset: "_peppermint_mouth_3_x",
		scale: 2,
		position: [-7.2, -7.2],
	},
	"_peppermint_souls_bubbles_compo": {
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
						classname: "_peppermint_souls_bubbles_1_x",
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
						classname: "_peppermint_souls_bubbles_1_x",
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
						classname: "_peppermint_souls_bubble_2_x",
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
						classname: "_peppermint_souls_bubble_3_x",
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
						classname: "_peppermint_souls_bubble_4_x",
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
						classname: "_peppermint_souls_bubble_5_x",
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
						classname: "_peppermint_souls_bubble_6_x",
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
						classname: "_peppermint_souls_bubble_7_x",
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
						classname: "_peppermint_souls_bubble_8_x",
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
						classname: "_peppermint_souls_bubble_9_x",
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
						classname: "_peppermint_souls_bubble_10_x",
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
						classname: "_peppermint_souls_bubble_11_x",
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
						classname: "_peppermint_souls_bubble_12_x",
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
						classname: "_peppermint_souls_bubble_13_x",
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
						classname: "_peppermint_souls_bubble_14_x",
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
						classname: "_peppermint_souls_bubble_15_x",
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
						classname: "_peppermint_souls_bubble_16_x",
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
						classname: "_peppermint_souls_bubble_17_x",
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
						classname: "_peppermint_souls_bubble_18_x",
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
						classname: "_peppermint_souls_bubble_19_x",
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
	"_peppermint_soul_head_base_1_x": {
		type: "bitmap",
		asset: "_peppermint_soul_head_base_1_x",
		scale: 2,
		position: [-35.5, -41.6],
	},
	"_peppermint_soul_face_1": {
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
						classname: "_peppermint_souls_eye_1",
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
						classname: "_peppermint_souls_eye_1",
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
						classname: "_peppermint_souls_eye_1",
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
						classname: "_peppermint_souls_eye_1",
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
						classname: "_peppermint_souls_eye_1",
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
						classname: "_peppermint_souls_eye_1",
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
						classname: "_peppermint_souls_soul_mouth_1",
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
						classname: "_peppermint_souls_soul_mouth_1",
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
						classname: "_peppermint_souls_soul_mouth_1",
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
	"_peppermint_souls_bubbles_1_x": {
		type: "bitmap",
		asset: "_peppermint_souls_bubbles_1_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_peppermint_souls_bubble_2_x": {
		type: "bitmap",
		asset: "_peppermint_souls_bubble_2_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_peppermint_souls_bubble_3_x": {
		type: "bitmap",
		asset: "_peppermint_souls_bubble_3_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_peppermint_souls_bubble_4_x": {
		type: "bitmap",
		asset: "_peppermint_souls_bubble_4_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_peppermint_souls_bubble_5_x": {
		type: "bitmap",
		asset: "_peppermint_souls_bubble_5_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_peppermint_souls_bubble_6_x": {
		type: "bitmap",
		asset: "_peppermint_souls_bubble_6_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_peppermint_souls_bubble_7_x": {
		type: "bitmap",
		asset: "_peppermint_souls_bubble_7_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_peppermint_souls_bubble_8_x": {
		type: "bitmap",
		asset: "_peppermint_souls_bubble_8_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_peppermint_souls_bubble_9_x": {
		type: "bitmap",
		asset: "_peppermint_souls_bubble_9_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_peppermint_souls_bubble_10_x": {
		type: "bitmap",
		asset: "_peppermint_souls_bubble_10_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_peppermint_souls_bubble_11_x": {
		type: "bitmap",
		asset: "_peppermint_souls_bubble_11_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_peppermint_souls_bubble_12_x": {
		type: "bitmap",
		asset: "_peppermint_souls_bubble_12_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_peppermint_souls_bubble_13_x": {
		type: "bitmap",
		asset: "_peppermint_souls_bubble_13_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_peppermint_souls_bubble_14_x": {
		type: "bitmap",
		asset: "_peppermint_souls_bubble_14_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_peppermint_souls_bubble_15_x": {
		type: "bitmap",
		asset: "_peppermint_souls_bubble_15_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_peppermint_souls_bubble_16_x": {
		type: "bitmap",
		asset: "_peppermint_souls_bubble_16_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_peppermint_souls_bubble_17_x": {
		type: "bitmap",
		asset: "_peppermint_souls_bubble_17_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_peppermint_souls_bubble_18_x": {
		type: "bitmap",
		asset: "_peppermint_souls_bubble_18_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_peppermint_souls_bubble_19_x": {
		type: "bitmap",
		asset: "_peppermint_souls_bubble_19_x",
		scale: 2,
		position: [-38.3, -59.05],
	},
	"_peppermint_souls_eye_1": {
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
						classname: "_peppermint_souls_bubblesyes",
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
						classname: "_peppermint_souls_eye_1_x",
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
						classname: "_peppermint_souls_eye_1_x",
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
						classname: "_peppermint_souls_eye_1_x",
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
						classname: "_peppermint_souls_eye_1_x",
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
						classname: "_peppermint_souls_eye_1_x",
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
						classname: "_peppermint_souls_eyepupil",
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
						classname: "_peppermint_souls_eyepupil",
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
						classname: "_peppermint_souls_eyepupil",
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
						classname: "_peppermint_souls_eyepupil",
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
						classname: "_peppermint_souls_eyepupil",
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
	"_peppermint_souls_soul_mouth_1": {
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
						classname: "_peppermint_souls_soul_mouth_1_x",
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
						classname: "_peppermint_souls_soul_mouth_1_x",
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
						classname: "_peppermint_souls_soul_mouth_1_x",
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
						classname: "_peppermint_souls_soul_mouth_1_x",
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
	"_peppermint_souls_bubblesyes": {
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
						classname: "_peppermint_souls_eyeparticle",
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
						classname: "_peppermint_souls_eyeparticle",
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
						classname: "_peppermint_souls_eyeparticle",
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
						classname: "_peppermint_souls_eyeparticle",
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
	"_peppermint_souls_eye_1_x": {
		type: "bitmap",
		asset: "_peppermint_souls_eye_1_x",
		scale: 2,
		position: [-13.8, -20.55],
	},
	"_peppermint_souls_eyepupil": {
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
						classname: "_peppermint_souls_eye_pupil_x",
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
						classname: "_peppermint_souls_eye_pupil_x",
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
						classname: "_peppermint_souls_eye_pupil_x",
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
						classname: "_peppermint_souls_eye_pupil_x",
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
						classname: "_peppermint_souls_eye_pupil_x",
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
	"_peppermint_souls_soul_mouth_1_x": {
		type: "bitmap",
		asset: "_peppermint_souls_soul_mouth_1_x",
		scale: 2,
		position: [-16.8, -12.6],
	},
	"_peppermint_souls_eyeparticle": {
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
						classname: "_peppermint_souls_circpleeye_x",
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
						classname: "_peppermint_souls_circpleeye_x",
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
						classname: "_peppermint_souls_circpleeye_x",
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
	"_peppermint_souls_eye_pupil_x": {
		type: "bitmap",
		asset: "_peppermint_souls_eye_pupil_x",
		scale: 2,
		position: [-8.95, -8.9],
	},
	"_peppermint_souls_circpleeye_x": {
		type: "bitmap",
		asset: "_peppermint_souls_circpleeye_x",
		scale: 2,
		position: [-8.8, -8.8],
	},
};
