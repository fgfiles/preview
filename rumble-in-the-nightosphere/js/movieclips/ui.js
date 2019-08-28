
var ui = {
	"gameover": {
		type: "movieclip",
		fps: 30,
		totalFrames: 97,
		labels: {},
		layers: [
			{
				name: "Layer 7",
				keys: [
					{
						from: 0,
						to: 27,
						classname: "_ui_tapador",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -503.35},
						transform: [0, -503.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.541], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 96,
						classname: "_ui_tapador",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 501.2},
						transform: [0, 501.2, 1, 1, 0, 0, 0],
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
						to: 30,
					},
					{
						from: 31,
						to: 45,
						classname: "_ui_cinnamon_symbol,1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 396.3, ty: -224.25},
						transform: [396.3, -224.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.305, 0.438], [0.619, 1], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 55,
						classname: "_ui_cinnamon_symbol,1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 396.3, ty: 347.4},
						transform: [396.3, 347.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 56,
						to: 68,
						classname: "_ui_cinnamon_symbol,1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 396.3, ty: 257.4},
						transform: [396.3, 257.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 79,
						classname: "_ui_cinnamon_symbol,1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 396.3, ty: 347.4},
						transform: [396.3, 347.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 80,
						to: 93,
						classname: "_ui_cinnamon_symbol,1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 396.3, ty: 257.4},
						transform: [396.3, 257.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.517, 0], [0.788, 0.449], [1, 1], ],
						}
					},
					{
						from: 94,
						to: 94,
						classname: "_ui_cinnamon_symbol,1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 396.3, ty: 822},
						transform: [396.3, 822, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 95,
						to: 96,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 45,
					},
					{
						from: 46,
						to: 46,
						actions: function(self){soundManager.play("cinnamon_evil_laugh");},
					},
					{
						from: 47,
						to: 95,
					},
					{
						from: 96,
						to: 96,
						actions: function(self){self.stop();
globalsignal.emit(ge.GAMEOVER_OUT);},
					},
				]
			},
		]
	},
	"_ui_tapador": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ui_blacky_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 518.5, ty: 430.3},
						transform: [518.5, 430.3, 1, 1, 0, 0, 0],
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
						classname: "_ui_cublridorparte_x",
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
						classname: "_ui_pause_bg_x",
						instancename: "",
						matrix: {a: 8.551, b: 0, c: 0, d: 6.205, tx: 397.7, ty: -207.5},
						transform: [397.7, -207.5, 8.551, 6.205, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_cinnamon_symbol,1": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {},
		layers: [
			{
				name: "mouth",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_ui_cinnamon_mouth",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.45, ty: 65.1},
						transform: [10.45, 65.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.452, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 18,
						classname: "_ui_cinnamon_mouth",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.45, ty: 59.65},
						transform: [10.45, 59.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.452, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_cinnamon_mouth",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.45, ty: 65.1},
						transform: [10.45, 65.1, 1, 1, 0, 0, 0],
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
						to: 9,
						classname: "_ui_cinnamon_eye_2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 164.25, ty: -74.75},
						transform: [164.25, -74.75, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.452, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 18,
						classname: "_ui_cinnamon_eye_2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 188, ty: -66.6},
						transform: [188, -66.6, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.452, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_cinnamon_eye_2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 164.25, ty: -74.75},
						transform: [164.25, -74.75, 1, 1, 0, 3.142, NaN],
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
						classname: "_ui_cinnamon_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.2, ty: -6},
						transform: [-5.2, -6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.452, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 18,
						classname: "_ui_cinnamon_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.2, ty: -1.25},
						transform: [-5.2, -1.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.452, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_cinnamon_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.2, ty: -6},
						transform: [-5.2, -6, 1, 1, 0, 0, 0],
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
						to: 9,
						classname: "_ui_cinnamon_eye_2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -163.05, ty: -73.4},
						transform: [-163.05, -73.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.452, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 18,
						classname: "_ui_cinnamon_eye_2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -171.85, ty: -63.2},
						transform: [-171.85, -63.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.452, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_cinnamon_eye_2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -163.05, ty: -73.4},
						transform: [-163.05, -73.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_blacky_1_x": {
		type: "bitmap",
		asset: "_ui_blacky_1_x",
		scale: 1,
		position: [-31.45, -56.75],
	},
	"_ui_cublridorparte_x": {
		type: "bitmap",
		asset: "_ui_cublridorparte_x",
		scale: 1,
		position: [-35.4, 76.15],
	},
	"_ui_pause_bg_x": {
		type: "bitmap",
		asset: "_ui_pause_bg_x",
		scale: 1,
		position: [-55, -55],
	},
	"_ui_cinnamon_mouth": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {},
		layers: [
			{
				name: "mouth_p3_x",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_ui_cinnamon_mouth_p3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.75, ty: 3.9},
						transform: [-0.75, 3.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 18,
						classname: "_ui_cinnamon_mouth_p3_x",
						instancename: "",
						matrix: {a: 0.909, b: 0, c: 0, d: 1, tx: -0.8, ty: 35.05},
						transform: [-0.8, 35.05, 0.909, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_cinnamon_mouth_p3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.75, ty: 3.9},
						transform: [-0.75, 3.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "mouth_p1_x",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_ui_cinnamon_mouth_p1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.75, ty: -5.2},
						transform: [-0.75, -5.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 18,
						classname: "_ui_cinnamon_mouth_p1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.75, ty: -5.2},
						transform: [-0.75, -5.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_cinnamon_mouth_p1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.75, ty: -5.2},
						transform: [-0.75, -5.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "mouth_p2_x",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_ui_cinnamon_mouth_p2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.436, tx: -0.75, ty: 28.55},
						transform: [-0.75, 28.55, 1, 0.436, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 18,
						classname: "_ui_cinnamon_mouth_p2_x",
						instancename: "",
						matrix: {a: 0.884, b: 0, c: 0, d: 0.486, tx: -0.8, ty: 42.5},
						transform: [-0.8, 42.5, 0.884, 0.486, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_cinnamon_mouth_p2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.436, tx: -0.75, ty: 28.55},
						transform: [-0.75, 28.55, 1, 0.436, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "glowcinna_x",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_ui_cinnamon_glowcinna_x",
						instancename: "",
						matrix: {a: 1.497, b: 0, c: 0, d: 1.497, tx: -5.65, ty: -69.8},
						transform: [-5.65, -69.8, 1.497, 1.497, 0, 0, 0],
						alpha: 0.37,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_cinnamon_eye_2": {
		type: "movieclip",
		fps: 30,
		totalFrames: 65,
		labels: {},
		layers: [
			{
				name: "eye_wrinkles_x",
				keys: [
					{
						from: 0,
						to: 64,
						classname: "_ui_cinnamon_eye_wrinkles_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.2, ty: 2.9},
						transform: [-2.2, 2.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eyebase_x",
				keys: [
					{
						from: 0,
						to: 17,
						classname: "_ui_cinnamon_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.594, d: 0.805, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, -0.636, 0.636, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 20,
						classname: "_ui_cinnamon_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.594, d: 0.805, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, -0.636, 0.636, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.452], [0.575, 0.986], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 22,
						classname: "_ui_cinnamon_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.107, d: 0.145, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.18, -0.636, 0.636, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 27,
						classname: "_ui_cinnamon_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.276, d: 0.374, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.465, -0.636, 0.636, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.531], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 64,
						classname: "_ui_cinnamon_eyebase_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.594, c: -0.594, d: 0.805, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, -0.636, 0.636, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eyebrow_1_x",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_ui_cinnamon_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 34.65, ty: -62.7},
						transform: [34.65, -62.7, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 18,
						classname: "_ui_cinnamon_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 34.65, ty: -62.7},
						transform: [34.65, -62.7, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.452], [0.575, 0.986], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 20,
						classname: "_ui_cinnamon_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 34.65, ty: -38},
						transform: [34.65, -38, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 27,
						classname: "_ui_cinnamon_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 34.65, ty: -38},
						transform: [34.65, -38, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.531], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 64,
						classname: "_ui_cinnamon_eyebrow_1_x",
						instancename: "",
						matrix: {a: 0.758, b: 0.652, c: -0.652, d: 0.758, tx: 34.65, ty: -62.7},
						transform: [34.65, -62.7, 1, 1, -0.71, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "pupil_x",
				keys: [
					{
						from: 0,
						to: 17,
						classname: "_ui_cinnamon_pupil_x",
						instancename: "",
						matrix: {a: 0.61, b: 0, c: 0, d: 1, tx: 36.25, ty: 26.6},
						transform: [36.25, 26.6, 0.61, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 20,
						classname: "_ui_cinnamon_pupil_x",
						instancename: "",
						matrix: {a: 0.61, b: 0, c: 0, d: 1, tx: 36.25, ty: 26.6},
						transform: [36.25, 26.6, 0.61, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.452], [0.575, 0.986], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 22,
						classname: "_ui_cinnamon_pupil_x",
						instancename: "",
						matrix: {a: 0.295, b: 0, c: 0, d: 0.234, tx: 36.25, ty: 26.7},
						transform: [36.25, 26.7, 0.295, 0.234, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 27,
						classname: "_ui_cinnamon_pupil_x",
						instancename: "",
						matrix: {a: 0.475, b: 0, c: 0, d: 0.376, tx: 36.25, ty: 26.7},
						transform: [36.25, 26.7, 0.475, 0.376, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.531], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 64,
						classname: "_ui_cinnamon_pupil_x",
						instancename: "",
						matrix: {a: 0.61, b: 0, c: 0, d: 1, tx: 36.25, ty: 26.6},
						transform: [36.25, 26.6, 0.61, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_cinnamon_nose_x": {
		type: "bitmap",
		asset: "_ui_cinnamon_nose_x",
		scale: 1,
		position: [-41.7, -54.6],
	},
	"_ui_cinnamon_mouth_p3_x": {
		type: "bitmap",
		asset: "_ui_cinnamon_mouth_p3_x",
		scale: 1,
		position: [-190.9, -58.35],
	},
	"_ui_cinnamon_mouth_p1_x": {
		type: "bitmap",
		asset: "_ui_cinnamon_mouth_p1_x",
		scale: 1,
		position: [-196.5, -146.4],
	},
	"_ui_cinnamon_mouth_p2_x": {
		type: "bitmap",
		asset: "_ui_cinnamon_mouth_p2_x",
		scale: 1,
		position: [-212.55, -111.6],
	},
	"_ui_cinnamon_glowcinna_x": {
		type: "bitmap",
		asset: "_ui_cinnamon_glowcinna_x",
		scale: 1,
		position: [-157.05, -157.05],
	},
	"_ui_cinnamon_eye_wrinkles_x": {
		type: "bitmap",
		asset: "_ui_cinnamon_eye_wrinkles_x",
		scale: 1,
		position: [-114.8, -76.6],
	},
	"_ui_cinnamon_eyebase_x": {
		type: "bitmap",
		asset: "_ui_cinnamon_eyebase_x",
		scale: 1,
		position: [-82.25, -39.3],
	},
	"_ui_cinnamon_eyebrow_1_x": {
		type: "bitmap",
		asset: "_ui_cinnamon_eyebrow_1_x",
		scale: 1,
		position: [-101.95, -16.65],
	},
	"_ui_cinnamon_pupil_x": {
		type: "bitmap",
		asset: "_ui_cinnamon_pupil_x",
		scale: 1,
		position: [-31.75, -33.6],
	},
	"pausemodal": {
		type: "movieclip",
		fps: 30,
		totalFrames: 124,
		labels: {in: {from:0, to:68}, resume: {from:70, to:98}, out: {from:100, to:122}, },
		layers: [
			{
				name: "Layer 7",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_ui_tapador",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -503.35},
						transform: [0, -503.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 23,
						classname: "_ui_tapador",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -503.35},
						transform: [0, -503.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.8, 0.541], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 69,
						classname: "_ui_tapador",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 501.2},
						transform: [0, 501.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 70,
						to: 79,
						classname: "_ui_tapador",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: 0, ty: 111.3},
						transform: [0, 111.3, 1, 1, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 80,
						to: 96,
						classname: "_ui_tapador",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: 0, ty: 111.3},
						transform: [0, 111.3, 1, 1, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0], [0.801, 0.466], [1, 1], ],
						}
					},
					{
						from: 97,
						to: 97,
						classname: "_ui_tapador",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: 0, ty: 1170.2},
						transform: [0, 1170.2, 1, 1, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 98,
						to: 99,
					},
					{
						from: 100,
						to: 123,
						classname: "_ui_tapador",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: 0, ty: 111.3},
						transform: [0, 111.3, 1, 1, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "music_btn",
				keys: [
					{
						from: 0,
						to: 21,
						classname: "_ui_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 564.65, ty: -99.9},
						transform: [564.65, -99.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 34,
						classname: "_ui_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 564.65, ty: -99.9},
						transform: [564.65, -99.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.224, 0.37], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 40,
						classname: "_ui_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 564.65, ty: 508.4},
						transform: [564.65, 508.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 69,
						classname: "_ui_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 564.65, ty: 486.4},
						transform: [564.65, 486.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 70,
						to: 74,
						classname: "_ui_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 564.65, ty: 486.4},
						transform: [564.65, 486.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 75,
						to: 78,
						classname: "_ui_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 564.65, ty: 486.4},
						transform: [564.65, 486.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.565, 1], [1, 1], ],
						}
					},
					{
						from: 79,
						to: 88,
						classname: "_ui_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 564.65, ty: 464.4},
						transform: [564.65, 464.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.833, 0.64], [1, 1], ],
						}
					},
					{
						from: 89,
						to: 99,
						classname: "_ui_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 564.65, ty: 713.65},
						transform: [564.65, 713.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 100,
						to: 104,
						classname: "_ui_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 564.65, ty: 486.4},
						transform: [564.65, 486.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 105,
						to: 108,
						classname: "_ui_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 564.65, ty: 486.4},
						transform: [564.65, 486.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.565, 1], [1, 1], ],
						}
					},
					{
						from: 109,
						to: 118,
						classname: "_ui_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 564.65, ty: 464.4},
						transform: [564.65, 464.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.833, 0.64], [1, 1], ],
						}
					},
					{
						from: 119,
						to: 123,
						classname: "_ui_music_btn",
						instancename: "music_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 564.65, ty: 713.65},
						transform: [564.65, 713.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "resume_btn",
				keys: [
					{
						from: 0,
						to: 18,
						classname: "_ui_resume_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.45, ty: -99.9},
						transform: [408.45, -99.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 31,
						classname: "_ui_resume_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.45, ty: -99.9},
						transform: [408.45, -99.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.224, 0.37], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 37,
						classname: "_ui_resume_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.45, ty: 508.4},
						transform: [408.45, 508.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 69,
						classname: "_ui_resume_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.45, ty: 486.4},
						transform: [408.45, 486.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 70,
						to: 72,
						classname: "_ui_resume_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.45, ty: 486.4},
						transform: [408.45, 486.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 73,
						to: 76,
						classname: "_ui_resume_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.45, ty: 486.4},
						transform: [408.45, 486.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.565, 1], [1, 1], ],
						}
					},
					{
						from: 77,
						to: 86,
						classname: "_ui_resume_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.45, ty: 464.4},
						transform: [408.45, 464.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.833, 0.64], [1, 1], ],
						}
					},
					{
						from: 87,
						to: 99,
						classname: "_ui_resume_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.45, ty: 713.65},
						transform: [408.45, 713.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 100,
						to: 102,
						classname: "_ui_resume_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.45, ty: 486.4},
						transform: [408.45, 486.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 103,
						to: 106,
						classname: "_ui_resume_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.45, ty: 486.4},
						transform: [408.45, 486.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.565, 1], [1, 1], ],
						}
					},
					{
						from: 107,
						to: 116,
						classname: "_ui_resume_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.45, ty: 464.4},
						transform: [408.45, 464.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.833, 0.64], [1, 1], ],
						}
					},
					{
						from: 117,
						to: 123,
						classname: "_ui_resume_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 408.45, ty: 713.65},
						transform: [408.45, 713.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "exit_btn",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_ui_exit_btn",
						instancename: "exit_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 250.65, ty: -99.9},
						transform: [250.65, -99.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 28,
						classname: "_ui_exit_btn",
						instancename: "exit_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 250.65, ty: -99.9},
						transform: [250.65, -99.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.224, 0.37], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 34,
						classname: "_ui_exit_btn",
						instancename: "exit_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 250.65, ty: 508.4},
						transform: [250.65, 508.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 69,
						classname: "_ui_exit_btn",
						instancename: "exit_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 250.65, ty: 486.4},
						transform: [250.65, 486.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 70,
						to: 70,
						classname: "_ui_exit_btn",
						instancename: "exit_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 250.65, ty: 486.4},
						transform: [250.65, 486.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 71,
						to: 74,
						classname: "_ui_exit_btn",
						instancename: "exit_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 250.65, ty: 486.4},
						transform: [250.65, 486.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.565, 1], [1, 1], ],
						}
					},
					{
						from: 75,
						to: 84,
						classname: "_ui_exit_btn",
						instancename: "exit_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 250.65, ty: 464.4},
						transform: [250.65, 464.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.833, 0.64], [1, 1], ],
						}
					},
					{
						from: 85,
						to: 99,
						classname: "_ui_exit_btn",
						instancename: "exit_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 250.65, ty: 713.65},
						transform: [250.65, 713.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 100,
						to: 100,
						classname: "_ui_exit_btn",
						instancename: "exit_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 250.65, ty: 486.4},
						transform: [250.65, 486.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 101,
						to: 104,
						classname: "_ui_exit_btn",
						instancename: "exit_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 250.65, ty: 486.4},
						transform: [250.65, 486.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.565, 1], [1, 1], ],
						}
					},
					{
						from: 105,
						to: 114,
						classname: "_ui_exit_btn",
						instancename: "exit_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 250.65, ty: 464.4},
						transform: [250.65, 464.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.833, 0.64], [1, 1], ],
						}
					},
					{
						from: 115,
						to: 123,
						classname: "_ui_exit_btn",
						instancename: "exit_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 250.65, ty: 713.65},
						transform: [250.65, 713.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "chain_x",
				keys: [
					{
						from: 0,
						to: 21,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 232.2, ty: -336.4},
						transform: [232.2, -336.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 29,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 232.2, ty: -336.4},
						transform: [232.2, -336.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.423, 0], [0.76, 0.469], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 37,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 232.2, ty: 124.1},
						transform: [232.2, 124.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.185, 0.329], [0.636, 1], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 47,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 0.996, b: 0.086, c: -0.086, d: 0.996, tx: 212.45, ty: 95.95},
						transform: [212.45, 95.95, 1, 1, -0.087, 0.087, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.476, 0], [0.842, 0.6], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 53,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 232.2, ty: 124.1},
						transform: [232.2, 124.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.476, 0], [0.636, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 62,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: -0.025, c: 0.025, d: 1, tx: 238.15, ty: 128.2},
						transform: [238.15, 128.2, 1, 1, 0.025, -0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.476, 0], [0.636, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 68,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 230.45, ty: 124.1},
						transform: [230.45, 124.1, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.614, 1], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 232.2, ty: 124.1},
						transform: [232.2, 124.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 70,
						to: 72,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 232.2, ty: 124.1},
						transform: [232.2, 124.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.64, 1], [1, 1], ],
						}
					},
					{
						from: 73,
						to: 85,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 232.2, ty: 139.5},
						transform: [232.2, 139.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.801, 0.462], [1, 1], ],
						}
					},
					{
						from: 86,
						to: 99,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 232.2, ty: -300},
						transform: [232.2, -300, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 100,
						to: 102,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 232.2, ty: 124.1},
						transform: [232.2, 124.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.64, 1], [1, 1], ],
						}
					},
					{
						from: 103,
						to: 115,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 232.2, ty: 139.5},
						transform: [232.2, 139.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.801, 0.462], [1, 1], ],
						}
					},
					{
						from: 116,
						to: 123,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 232.2, ty: -300},
						transform: [232.2, -300, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "chain_x",
				keys: [
					{
						from: 0,
						to: 21,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 561.9, ty: -336.4},
						transform: [561.9, -336.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 29,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 561.9, ty: -336.4},
						transform: [561.9, -336.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.423, 0], [0.76, 0.469], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 37,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 561.9, ty: 136.8},
						transform: [561.9, 136.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.185, 0.329], [0.636, 1], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 47,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.073, c: -0.073, d: 0.997, tx: 545.9, ty: 101.5},
						transform: [545.9, 101.5, 1, 1, -0.073, 0.073, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.476, 0], [0.842, 0.6], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 53,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 561.9, ty: 136.8},
						transform: [561.9, 136.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.476, 0], [0.636, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 62,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: -0.025, c: 0.025, d: 1, tx: 567.75, ty: 119.85},
						transform: [567.75, 119.85, 1, 1, 0.025, -0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.476, 0], [0.636, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 68,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0.005, c: -0.005, d: 1, tx: 560.75, ty: 124.05},
						transform: [560.75, 124.05, 1, 1, -0.005, 0.005, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.614, 1], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 561.9, ty: 124.1},
						transform: [561.9, 124.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 70,
						to: 72,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 561.9, ty: 124.1},
						transform: [561.9, 124.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.64, 1], [1, 1], ],
						}
					},
					{
						from: 73,
						to: 85,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 561.9, ty: 135.1},
						transform: [561.9, 135.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.801, 0.462], [1, 1], ],
						}
					},
					{
						from: 86,
						to: 99,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 561.9, ty: -330.15},
						transform: [561.9, -330.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 100,
						to: 102,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 561.9, ty: 124.1},
						transform: [561.9, 124.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.64, 1], [1, 1], ],
						}
					},
					{
						from: 103,
						to: 115,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 561.9, ty: 135.1},
						transform: [561.9, 135.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.801, 0.462], [1, 1], ],
						}
					},
					{
						from: 116,
						to: 123,
						classname: "_ui_tutorial_chain_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 561.9, ty: -330.15},
						transform: [561.9, -330.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "tutorial",
				keys: [
					{
						from: 0,
						to: 21,
						classname: "_ui_tutorial_tutorial",
						instancename: "tutorial",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 397.55, ty: -201.3},
						transform: [397.55, -201.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 29,
						classname: "_ui_tutorial_tutorial",
						instancename: "tutorial",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 397.55, ty: -201.3},
						transform: [397.55, -201.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.423, 0], [0.76, 0.469], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 37,
						classname: "_ui_tutorial_tutorial",
						instancename: "tutorial",
						matrix: {a: 0.999, b: 0.043, c: -0.043, d: 0.999, tx: 397.55, ty: 259.2},
						transform: [397.55, 259.2, 1, 1, -0.044, 0.044, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.185, 0.329], [0.636, 1], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 47,
						classname: "_ui_tutorial_tutorial",
						instancename: "tutorial",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 381.85, ty: 228.75},
						transform: [381.85, 228.75, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.476, 0], [0.842, 0.6], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 53,
						classname: "_ui_tutorial_tutorial",
						instancename: "tutorial",
						matrix: {a: 0.999, b: 0.043, c: -0.043, d: 0.999, tx: 397.55, ty: 259.2},
						transform: [397.55, 259.2, 1, 1, -0.044, 0.044, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.476, 0], [0.636, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 62,
						classname: "_ui_tutorial_tutorial",
						instancename: "tutorial",
						matrix: {a: 0.999, b: -0.031, c: 0.031, d: 0.999, tx: 406.85, ty: 259.1},
						transform: [406.85, 259.1, 1, 1, 0.031, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.476, 0], [0.636, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 68,
						classname: "_ui_tutorial_tutorial",
						instancename: "tutorial",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: 394.15, ty: 259.2},
						transform: [394.15, 259.2, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.614, 1], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_ui_tutorial_tutorial",
						instancename: "tutorial",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 397.55, ty: 259.2},
						transform: [397.55, 259.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 70,
						to: 72,
						classname: "_ui_tutorial_tutorial",
						instancename: "tutorial",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 397.55, ty: 259.2},
						transform: [397.55, 259.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.64, 1], [1, 1], ],
						}
					},
					{
						from: 73,
						to: 85,
						classname: "_ui_tutorial_tutorial",
						instancename: "tutorial",
						matrix: {a: 1, b: -0.017, c: 0.017, d: 1, tx: 397.55, ty: 270.2},
						transform: [397.55, 270.2, 1, 1, 0.017, -0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.801, 0.462], [1, 1], ],
						}
					},
					{
						from: 86,
						to: 99,
						classname: "_ui_tutorial_tutorial",
						instancename: "tutorial",
						matrix: {a: 0.99, b: -0.143, c: 0.143, d: 0.99, tx: 421, ty: -203.95},
						transform: [421, -203.95, 1, 1, 0.144, -0.144, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 100,
						to: 102,
						classname: "_ui_tutorial_tutorial",
						instancename: "tutorial",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 397.55, ty: 259.2},
						transform: [397.55, 259.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.64, 1], [1, 1], ],
						}
					},
					{
						from: 103,
						to: 115,
						classname: "_ui_tutorial_tutorial",
						instancename: "tutorial",
						matrix: {a: 1, b: -0.017, c: 0.017, d: 1, tx: 397.55, ty: 270.2},
						transform: [397.55, 270.2, 1, 1, 0.017, -0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.421, 0], [0.801, 0.462], [1, 1], ],
						}
					},
					{
						from: 116,
						to: 123,
						classname: "_ui_tutorial_tutorial",
						instancename: "tutorial",
						matrix: {a: 0.99, b: -0.143, c: 0.143, d: 0.99, tx: 421, ty: -203.95},
						transform: [421, -203.95, 1, 1, 0.144, -0.144, NaN],
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
						to: 68,
					},
					{
						from: 69,
						to: 69,
						actions: function(self){self.stop();},
					},
					{
						from: 70,
						to: 98,
					},
					{
						from: 99,
						to: 99,
						actions: function(self){self.stop();
globalsignal.emit(ge.PAUSE_RESUME);},
					},
					{
						from: 100,
						to: 122,
					},
					{
						from: 123,
						to: 123,
						actions: function(self){self.stop();
globalsignal.emit(ge.PAUSE_OUT);},
					},
				]
			},
		]
	},
	"_ui_tapador": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ui_blacky_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 518.5, ty: 430.3},
						transform: [518.5, 430.3, 1, 1, 0, 0, 0],
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
						classname: "_ui_cublridorparte_x",
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
						classname: "_ui_pause_bg_x",
						instancename: "",
						matrix: {a: 8.551, b: 0, c: 0, d: 6.205, tx: 397.7, ty: -207.5},
						transform: [397.7, -207.5, 8.551, 6.205, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_music_btn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ui_music_on",
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
						classname: "_ui_music_off",
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
	"_ui_resume_btn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {over: {from:0, to:6}, down: {from:7, to:13}, out: {from:14, to:19}, },
		layers: [
			{
				name: "bg",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: -0.878, b: 0, c: 0, d: 0.878, tx: -0.2, ty: 0.2},
						transform: [-0.2, 0.2, 0.878, 0.878, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.175, 0.414], [0.569, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -0.35, ty: 0.25},
						transform: [-0.35, 0.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -0.35, ty: 0.25},
						transform: [-0.35, 0.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -0.35, ty: 0.25},
						transform: [-0.35, 0.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: -0.878, b: 0, c: 0, d: 0.878, tx: -0.2, ty: 0.2},
						transform: [-0.2, 0.2, 0.878, 0.878, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.175, 0.414], [0.569, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "icon_pause_gfx",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_icon_resume_gfx",
						instancename: "",
						matrix: {a: 0.774, b: 0, c: 0, d: 0.774, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.774, 0.774, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.175, 0.414], [0.569, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_ui_icon_resume_gfx",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_ui_icon_resume_gfx",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_ui_icon_resume_gfx",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_icon_resume_gfx",
						instancename: "",
						matrix: {a: 0.774, b: 0, c: 0, d: 0.774, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.774, 0.774, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.175, 0.414], [0.569, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 19,
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
	"_ui_exit_btn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {over: {from:0, to:6}, down: {from:7, to:13}, out: {from:14, to:19}, },
		layers: [
			{
				name: "bg",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: 0.878, b: 0, c: 0, d: 0.878, tx: -0.1, ty: 0.2},
						transform: [-0.1, 0.2, 0.878, 0.878, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.175, 0.414], [0.569, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: 0.25},
						transform: [-0.05, 0.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: 0.25},
						transform: [-0.05, 0.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: 0.25},
						transform: [-0.05, 0.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: 0.878, b: 0, c: 0, d: 0.878, tx: -0.1, ty: 0.2},
						transform: [-0.1, 0.2, 0.878, 0.878, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.175, 0.414], [0.569, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "icon_resume_gfx",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_icon_home_gfx",
						instancename: "",
						matrix: {a: 0.942, b: 0, c: 0, d: 0.942, tx: 0.05, ty: -0.05},
						transform: [0.05, -0.05, 0.942, 0.942, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.177, 0.456], [0.611, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_ui_icon_home_gfx",
						instancename: "",
						matrix: {a: 1.135, b: 0, c: 0, d: 1.135, tx: 0.05, ty: 0},
						transform: [0.05, 0, 1.135, 1.135, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_ui_icon_home_gfx",
						instancename: "",
						matrix: {a: 1.135, b: 0, c: 0, d: 1.135, tx: 0.05, ty: 0},
						transform: [0.05, 0, 1.135, 1.135, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_ui_icon_home_gfx",
						instancename: "",
						matrix: {a: 1.135, b: 0, c: 0, d: 1.135, tx: 0.05, ty: 0},
						transform: [0.05, 0, 1.135, 1.135, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_icon_home_gfx",
						instancename: "",
						matrix: {a: 0.942, b: 0, c: 0, d: 0.942, tx: 0.05, ty: -0.05},
						transform: [0.05, -0.05, 0.942, 0.942, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.177, 0.456], [0.611, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 19,
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
	"_ui_tutorial_chain_x": {
		type: "bitmap",
		asset: "_ui_tutorial_chain_x",
		scale: 1,
		position: [-20, -264],
	},
	"_ui_tutorial_tutorial": {
		type: "movieclip",
		fps: 30,
		totalFrames: 19,
		labels: {oneplayer: {from:0, to:8}, twoplayer: {from:9, to:18}, },
		layers: [
			{
				name: "board_x",
				keys: [
					{
						from: 0,
						to: 18,
						classname: "_ui_tutorial_board_x",
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
				name: "ledandright",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_ui_tutorial_ledandright",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -126.45, ty: -47.1},
						transform: [-126.45, -47.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 18,
						classname: "_ui_tutorial_ledandright",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 156.3, ty: -47.1},
						transform: [156.3, -47.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "goodkill",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_ui_tutorial_goodkill",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 120.7, ty: -24.15},
						transform: [120.7, -24.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 18,
						classname: "_ui_tutorial_goodkill",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -7.45, ty: -47.1},
						transform: [-7.45, -47.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ledandright_starchy",
				keys: [
					{
						from: 0,
						to: 8,
					},
					{
						from: 9,
						to: 18,
						classname: "_ui_tutorial_ledandright_starchy",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -178.1, ty: -47.1},
						transform: [-178.1, -47.1, 1, 1, 0, 0, 0],
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
						to: 18,
						actions: function(self){self.stop();},
					},
				]
			},
			{
				name: "Layer 6",
				keys: [
					{
						from: 0,
						to: 8,
					},
					{
						from: 9,
						to: 18,
					},
				]
			},
		]
	},
	"_ui_blacky_1_x": {
		type: "bitmap",
		asset: "_ui_blacky_1_x",
		scale: 1,
		position: [-31.45, -56.75],
	},
	"_ui_cublridorparte_x": {
		type: "bitmap",
		asset: "_ui_cublridorparte_x",
		scale: 1,
		position: [-35.4, 76.15],
	},
	"_ui_pause_bg_x": {
		type: "bitmap",
		asset: "_ui_pause_bg_x",
		scale: 1,
		position: [-55, -55],
	},
	"_ui_music_on": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {over: {from:0, to:6}, down: {from:7, to:13}, out: {from:14, to:19}, },
		layers: [
			{
				name: "bg",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: 0.878, b: 0, c: 0, d: 0.878, tx: -0.1, ty: 0.2},
						transform: [-0.1, 0.2, 0.878, 0.878, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.175, 0.414], [0.569, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: 0.25},
						transform: [-0.05, 0.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: 0.25},
						transform: [-0.05, 0.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: 0.878, b: 0, c: 0, d: 0.878, tx: -0.1, ty: 0.2},
						transform: [-0.1, 0.2, 0.878, 0.878, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.175, 0.414], [0.569, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "icon_resume_gfx",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_icon_resume_gfx",
						instancename: "",
						matrix: {a: -0.603, b: 0, c: 0, d: -0.619, tx: -12.3, ty: 2.95},
						transform: [-12.3, 2.95, 0.603, 0.619, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.24, 0.459], [0.545, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_ui_icon_resume_gfx",
						instancename: "",
						matrix: {a: -0.769, b: 0, c: 0, d: -0.789, tx: -15.05, ty: 3.45},
						transform: [-15.05, 3.45, 0.769, 0.789, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_ui_icon_resume_gfx",
						instancename: "",
						matrix: {a: -0.769, b: 0, c: 0, d: -0.789, tx: -15.05, ty: 3.45},
						transform: [-15.05, 3.45, 0.769, 0.789, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_icon_resume_gfx",
						instancename: "",
						matrix: {a: -0.603, b: 0, c: 0, d: -0.619, tx: -12.3, ty: 2.95},
						transform: [-12.3, 2.95, 0.603, 0.619, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "minibar_icon_sound_gfx",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_minibar_minibar_minibar_icon_sound_gfx",
						instancename: "",
						matrix: {a: 0.687, b: 0, c: 0, d: 0.687, tx: 19.65, ty: 0},
						transform: [19.65, 0, 0.687, 0.687, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.469], [0.596, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_ui_minibar_minibar_minibar_icon_sound_gfx",
						instancename: "",
						matrix: {a: 0.861, b: 0, c: 0, d: 0.861, tx: 25.4, ty: 0},
						transform: [25.4, 0, 0.861, 0.861, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_ui_minibar_minibar_minibar_icon_sound_gfx",
						instancename: "",
						matrix: {a: 0.861, b: 0, c: 0, d: 0.861, tx: 25.4, ty: 0},
						transform: [25.4, 0, 0.861, 0.861, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.476, 0], [0.612, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_minibar_minibar_minibar_icon_sound_gfx",
						instancename: "",
						matrix: {a: 0.687, b: 0, c: 0, d: 0.687, tx: 19.65, ty: 0},
						transform: [19.65, 0, 0.687, 0.687, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "minibar_icon_sound_gfx",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_minibar_minibar_minibar_icon_sound_gfx",
						instancename: "",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.46, tx: 8.25, ty: 0.8},
						transform: [8.25, 0.8, 0.46, 0.46, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.195, 0.469], [0.596, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_ui_minibar_minibar_minibar_icon_sound_gfx",
						instancename: "",
						matrix: {a: 0.576, b: 0, c: 0, d: 0.576, tx: 10.65, ty: 1},
						transform: [10.65, 1, 0.576, 0.576, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_ui_minibar_minibar_minibar_icon_sound_gfx",
						instancename: "",
						matrix: {a: 0.576, b: 0, c: 0, d: 0.576, tx: 10.65, ty: 1},
						transform: [10.65, 1, 0.576, 0.576, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.476, 0], [0.612, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_minibar_minibar_minibar_icon_sound_gfx",
						instancename: "",
						matrix: {a: 0.46, b: 0, c: 0, d: 0.46, tx: 8.25, ty: 0.8},
						transform: [8.25, 0.8, 0.46, 0.46, 0, 0, 0],
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
	"_ui_music_off": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {over: {from:0, to:6}, down: {from:7, to:13}, out: {from:14, to:19}, },
		layers: [
			{
				name: "bg",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: 0.878, b: 0, c: 0, d: 0.878, tx: -0.1, ty: 0.2},
						transform: [-0.1, 0.2, 0.878, 0.878, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.175, 0.414], [0.569, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: 0.25},
						transform: [-0.05, 0.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: 0.25},
						transform: [-0.05, 0.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: 0.25},
						transform: [-0.05, 0.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: 0.878, b: 0, c: 0, d: 0.878, tx: -0.1, ty: 0.2},
						transform: [-0.1, 0.2, 0.878, 0.878, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.175, 0.414], [0.569, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "icon_resume_gfx",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_icon_resume_gfx",
						instancename: "",
						matrix: {a: -0.603, b: 0, c: 0, d: -0.619, tx: -12.3, ty: 2.95},
						transform: [-12.3, 2.95, 0.603, 0.619, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.24, 0.459], [0.545, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_ui_icon_resume_gfx",
						instancename: "",
						matrix: {a: -0.769, b: 0, c: 0, d: -0.789, tx: -15.05, ty: 3.45},
						transform: [-15.05, 3.45, 0.769, 0.789, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_ui_icon_resume_gfx",
						instancename: "",
						matrix: {a: -0.769, b: 0, c: 0, d: -0.789, tx: -15.05, ty: 3.45},
						transform: [-15.05, 3.45, 0.769, 0.789, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_icon_resume_gfx",
						instancename: "",
						matrix: {a: -0.603, b: 0, c: 0, d: -0.619, tx: -12.3, ty: 2.95},
						transform: [-12.3, 2.95, 0.603, 0.619, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "minibar_icon_pause_gfx",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_minibar_minibar_minibar_icon_pause_gfx",
						instancename: "",
						matrix: {a: -0.358, b: 0.358, c: -0.272, d: -0.272, tx: 14.95, ty: 1.1},
						transform: [14.95, 1.1, 0.507, 0.384, -2.356, 2.356, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.24, 0.459], [0.545, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_ui_minibar_minibar_minibar_icon_pause_gfx",
						instancename: "",
						matrix: {a: -0.457, b: 0.457, c: -0.346, d: -0.346, tx: 19.65, ty: 1.1},
						transform: [19.65, 1.1, 0.646, 0.49, -2.356, 2.356, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_ui_minibar_minibar_minibar_icon_pause_gfx",
						instancename: "",
						matrix: {a: -0.457, b: 0.457, c: -0.346, d: -0.346, tx: 19.65, ty: 1.1},
						transform: [19.65, 1.1, 0.646, 0.49, -2.356, 2.356, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_minibar_minibar_minibar_icon_pause_gfx",
						instancename: "",
						matrix: {a: -0.358, b: 0.358, c: -0.272, d: -0.272, tx: 14.95, ty: 1.1},
						transform: [14.95, 1.1, 0.507, 0.384, -2.356, 2.356, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "minibar_icon_pause_gfx",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_minibar_minibar_minibar_icon_pause_gfx",
						instancename: "",
						matrix: {a: -0.358, b: -0.358, c: -0.272, d: 0.272, tx: 14.95, ty: 1.2},
						transform: [14.95, 1.2, 0.507, 0.384, -0.785, -2.356, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.24, 0.459], [0.545, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_ui_minibar_minibar_minibar_icon_pause_gfx",
						instancename: "",
						matrix: {a: -0.457, b: -0.457, c: -0.346, d: 0.346, tx: 19.65, ty: 1.2},
						transform: [19.65, 1.2, 0.646, 0.49, -0.785, -2.356, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_ui_minibar_minibar_minibar_icon_pause_gfx",
						instancename: "",
						matrix: {a: -0.457, b: -0.457, c: -0.346, d: 0.346, tx: 19.65, ty: 1.2},
						transform: [19.65, 1.2, 0.646, 0.49, -0.785, -2.356, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.459, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_minibar_minibar_minibar_icon_pause_gfx",
						instancename: "",
						matrix: {a: -0.358, b: -0.358, c: -0.272, d: 0.272, tx: 14.95, ty: 1.2},
						transform: [14.95, 1.2, 0.507, 0.384, -0.785, -2.356, NaN],
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
						to: 19,
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
	"_ui_button_bg": {
		type: "movieclip",
		fps: 30,
		totalFrames: 33,
		labels: {loop: {from:1, to:31}, },
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_ui_button_bg_seq",
						instancename: "",
						matrix: {a: -0.908, b: 0, c: 0, d: 0.847, tx: 0, ty: 0},
						transform: [0, 0, 0.908, 0.847, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 31,
						classname: "_ui_button_bg_seq",
						instancename: "",
						matrix: {a: -0.833, b: 0, c: 0, d: 0.931, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.833, 0.931, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_ui_button_bg_seq",
						instancename: "",
						matrix: {a: -0.908, b: 0, c: 0, d: 0.847, tx: 0, ty: 0},
						transform: [0, 0, 0.908, 0.847, 0, 3.142, NaN],
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 31,
					},
					{
						from: 32,
						to: 32,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_ui_icon_resume_gfx": {
		type: "movieclip",
		fps: 30,
		totalFrames: 26,
		labels: {loop: {from:1, to:24}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ui_icon_resume_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 11,
						classname: "_ui_icon_resume_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 24,
						classname: "_ui_icon_resume_frames",
						instancename: "",
						matrix: {a: 1.087, b: 0, c: 0, d: 0.96, tx: 0, ty: 0},
						transform: [0, 0, 1.087, 0.96, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_ui_icon_resume_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
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
						to: 0,
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 24,
					},
					{
						from: 25,
						to: 25,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_ui_icon_home_gfx": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "icon_resume_gfx",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ui_icon_resume_gfx",
						instancename: "",
						matrix: {a: 0, b: -0.771, c: 1, d: 0, tx: -2, ty: -5.6},
						transform: [-2, -5.6, 0.771, 1, 1.571, -1.571, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "minibar_icon_pause_gfx",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ui_minibar_minibar_minibar_icon_pause_gfx",
						instancename: "",
						matrix: {a: 1.104, b: 0, c: 0, d: 0.335, tx: -12.1, ty: 15.75},
						transform: [-12.1, 15.75, 1.104, 0.335, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "minibar_icon_pause_gfx",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ui_minibar_minibar_minibar_icon_pause_gfx",
						instancename: "",
						matrix: {a: 1.073, b: -0.007, c: 0, d: 0.335, tx: 11.3, ty: 15.75},
						transform: [11.3, 15.75, 1.074, 0.335, 0, -0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "minibar_icon_pause_gfx",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ui_minibar_minibar_minibar_icon_pause_gfx",
						instancename: "",
						matrix: {a: 0, b: -0.515, c: 0.335, d: 0, tx: -0.4, ty: 12.1},
						transform: [-0.4, 12.1, 0.515, 0.335, 1.571, -1.571, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_board_x": {
		type: "bitmap",
		asset: "_ui_tutorial_board_x",
		scale: 1,
		position: [-302.5, -149.5],
	},
	"_ui_tutorial_ledandright": {
		type: "movieclip",
		fps: 30,
		totalFrames: 157,
		labels: {},
		layers: [
			{
				name: "key_up_idle",
				keys: [
					{
						from: 0,
						to: 74,
						classname: "_ui_tutorial_key_up_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.4, ty: 125.25},
						transform: [10.4, 125.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 75,
						to: 103,
						classname: "_ui_tutorial_key_up_on",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.4, ty: 125.25},
						transform: [10.4, 125.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 104,
						to: 156,
						classname: "_ui_tutorial_key_up_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.4, ty: 125.25},
						transform: [10.4, 125.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "key_right_idle",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_ui_tutorial_key_right_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 58.4, ty: 125.25},
						transform: [58.4, 125.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 14,
						classname: "_ui_tutorial_key_right_on",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 58.4, ty: 125.25},
						transform: [58.4, 125.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 51,
						classname: "_ui_tutorial_key_right_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 58.4, ty: 125.25},
						transform: [58.4, 125.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 52,
						to: 65,
						classname: "_ui_tutorial_key_right_on",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 58.4, ty: 125.25},
						transform: [58.4, 125.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 66,
						to: 156,
						classname: "_ui_tutorial_key_right_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 58.4, ty: 125.25},
						transform: [58.4, 125.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "key_right_idle",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_ui_tutorial_key_right_idle",
						instancename: "",
						matrix: {a: -1, b: 0.022, c: 0.022, d: 1, tx: -37.4, ty: 125.25},
						transform: [-37.4, 125.25, 1, 1, 0.022, 3.119, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 45,
						classname: "_ui_tutorial_key_right_on",
						instancename: "",
						matrix: {a: -1, b: 0.022, c: 0.022, d: 1, tx: -37.4, ty: 125.25},
						transform: [-37.4, 125.25, 1, 1, 0.022, 3.119, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 46,
						to: 156,
						classname: "_ui_tutorial_key_right_idle",
						instancename: "",
						matrix: {a: -1, b: 0.022, c: 0.022, d: 1, tx: -37.4, ty: 125.25},
						transform: [-37.4, 125.25, 1, 1, 0.022, 3.119, NaN],
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
						to: 3,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 64.55},
						transform: [9.6, 64.55, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 19,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 64.55},
						transform: [9.6, 64.55, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.39, 0], [0.687, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 24,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 61.45, ty: 64.55},
						transform: [61.45, 64.55, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0.087, c: 0, d: 0.746, tx: 61.45, ty: 64.55},
						transform: [61.45, 64.55, 0.751, 0.746, 0, 3.026, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 51,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: 0.746, b: 0, c: 0, d: 0.746, tx: 61.55, ty: 64.55},
						transform: [61.55, 64.55, 0.746, 0.746, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.423, 0], [0.587, 1], [1, 1], ],
						}
					},
					{
						from: 52,
						to: 55,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: 0.746, b: 0, c: 0, d: 0.746, tx: -48.2, ty: 64.55},
						transform: [-48.2, 64.55, 0.746, 0.746, 0, 0, 0],
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
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: 0.746, b: 0.049, c: 0, d: 0.746, tx: -48.2, ty: 64.55},
						transform: [-48.2, 64.55, 0.748, 0.746, 0, 0.065, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 57,
						to: 72,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: -48.3, ty: 64.55},
						transform: [-48.3, 64.55, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.167, 0], [0.792, 1], [1, 1], ],
						}
					},
					{
						from: 73,
						to: 78,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 64.55},
						transform: [9.6, 64.55, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 79,
						to: 103,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 64.55},
						transform: [9.6, 64.55, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.271, 0.123], [0.688, 0.49], [1, 1], ],
						}
					},
					{
						from: 104,
						to: 111,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 0.5},
						transform: [9.6, 0.5, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.5], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 112,
						to: 133,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: -14},
						transform: [9.6, -14, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.773, 0.562], [1, 1], ],
						}
					},
					{
						from: 134,
						to: 137,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 64.55},
						transform: [9.6, 64.55, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.26], [0.636, 1], [1, 1], ],
						}
					},
					{
						from: 138,
						to: 144,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 69},
						transform: [9.6, 69, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.368, 0], [0.636, 1], [1, 1], ],
						}
					},
					{
						from: 145,
						to: 156,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 64.55},
						transform: [9.6, 64.55, 0.746, 0.746, 0, 3.142, NaN],
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
						to: 3,
						classname: "_ui_tutorial_peppermint_peppermint_ground_idle",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 76.4},
						transform: [9.6, 76.4, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 11,
						classname: "_ui_tutorial_peppermint_peppermint_ground_run",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 76.4},
						transform: [9.6, 76.4, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.367, 0], [0.693, 0.486], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 19,
						classname: "_ui_tutorial_peppermint_peppermint_ground_stopandturn",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 33.15, ty: 76.35},
						transform: [33.15, 76.35, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.346, 0.485], [0.668, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 25,
						classname: "_ui_tutorial_peppermint_peppermint_ground_stopandturn",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 61.45, ty: 76.4},
						transform: [61.45, 76.4, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 42,
						classname: "_ui_tutorial_peppermint_peppermint_ground_run",
						instancename: "character",
						matrix: {a: 0.746, b: 0, c: 0, d: 0.746, tx: 61.55, ty: 76.4},
						transform: [61.55, 76.4, 0.746, 0.746, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0], [0.689, 0.602], [1, 1], ],
						}
					},
					{
						from: 43,
						to: 51,
						classname: "_ui_tutorial_peppermint_peppermint_ground_stopandturn",
						instancename: "character",
						matrix: {a: 0.746, b: 0, c: 0, d: 0.746, tx: -27.15, ty: 76.35},
						transform: [-27.15, 76.35, 0.746, 0.746, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.29, 0.572], [0.606, 1], [1, 1], ],
						}
					},
					{
						from: 52,
						to: 56,
						classname: "_ui_tutorial_peppermint_peppermint_ground_stopandturn",
						instancename: "character",
						matrix: {a: 0.746, b: 0, c: 0, d: 0.746, tx: -48.2, ty: 76.4},
						transform: [-48.2, 76.4, 0.746, 0.746, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 57,
						to: 64,
						classname: "_ui_tutorial_peppermint_peppermint_ground_run",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: -48.3, ty: 76.4},
						transform: [-48.3, 76.4, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.171, 0], [0.583, 0.506], [1, 1], ],
						}
					},
					{
						from: 65,
						to: 72,
						classname: "_ui_tutorial_peppermint_peppermint_ground_stop",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: -17.8, ty: 76.35},
						transform: [-17.8, 76.35, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0.506], [0.797, 1], [1, 1], ],
						}
					},
					{
						from: 73,
						to: 78,
						classname: "_ui_tutorial_peppermint_peppermint_ground_stop",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 76.4},
						transform: [9.6, 76.4, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 79,
						to: 103,
						classname: "_ui_tutorial_peppermint_peppermint_air_flapper_on",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 76.4},
						transform: [9.6, 76.4, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.271, 0.123], [0.688, 0.49], [1, 1], ],
						}
					},
					{
						from: 104,
						to: 111,
						classname: "_ui_tutorial_peppermint_peppermint_air_flapper_off",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 12.35},
						transform: [9.6, 12.35, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.5], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 112,
						to: 133,
						classname: "_ui_tutorial_peppermint_peppermint_air_flapper_off",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: -2.15},
						transform: [9.6, -2.15, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.773, 0.562], [1, 1], ],
						}
					},
					{
						from: 134,
						to: 137,
						classname: "_ui_tutorial_peppermint_peppermint_ground_idle",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 76.4},
						transform: [9.6, 76.4, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.26], [0.636, 1], [1, 1], ],
						}
					},
					{
						from: 138,
						to: 144,
						classname: "_ui_tutorial_peppermint_peppermint_ground_idle",
						instancename: "character",
						matrix: {a: -0.764, b: 0, c: -0.025, d: 0.702, tx: 10.05, ty: 77.6},
						transform: [10.05, 77.6, 0.764, 0.702, -0.035, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.368, 0], [0.636, 1], [1, 1], ],
						}
					},
					{
						from: 145,
						to: 156,
						classname: "_ui_tutorial_peppermint_peppermint_ground_idle",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 76.4},
						transform: [9.6, 76.4, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_goodkill": {
		type: "movieclip",
		fps: 30,
		totalFrames: 90,
		labels: {},
		layers: [
			{
				name: "skeleton",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_ui_tutorial_skeleton_spear_skeleton_ground_run",
						instancename: "character",
						matrix: {a: 0.78, b: 0, c: 0, d: 0.78, tx: 106.45, ty: 75.25},
						transform: [106.45, 75.25, 0.78, 0.78, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.213, 0.342], [0.588, 0.768], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 17,
						classname: "_ui_tutorial_skeleton_spear_skeleton_ground_stop",
						instancename: "character",
						matrix: {a: 0.78, b: 0, c: 0, d: 0.78, tx: 25.25, ty: 75.25},
						transform: [25.25, 75.25, 0.78, 0.78, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0.616], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 22,
						classname: "_ui_tutorial_skeleton_spear_skeleton_ground_stop",
						instancename: "character",
						matrix: {a: 0.78, b: 0, c: 0, d: 0.78, tx: 11.45, ty: 75.25},
						transform: [11.45, 75.25, 0.78, 0.78, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 68,
						classname: "_ui_tutorial_skeleton_spear_skeleton_ground_idle",
						instancename: "character",
						matrix: {a: 0.78, b: 0, c: 0, d: 0.78, tx: 11.45, ty: 75.25},
						transform: [11.45, 75.25, 0.78, 0.78, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 69,
						to: 73,
						classname: "_ui_tutorial_skeletonexplotes",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.95, ty: 83.8},
						transform: [4.95, 83.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 74,
						to: 80,
						classname: "_ui_tutorial_skeletonexplotes",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.95, ty: 83.8},
						transform: [4.95, 83.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 81,
						to: 89,
						classname: "_ui_tutorial_skeletonexplotes",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.95, ty: 83.8},
						transform: [4.95, 83.8, 1, 1, 0, 0, 0],
						alpha: 0,
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
						to: 38,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: -16.95},
						transform: [9.6, -16.95, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 39,
						to: 68,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: -16.95},
						transform: [9.6, -16.95, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.449, 0], [0.801, 0.5], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 88,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 16.5},
						transform: [9.6, 16.5, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.456], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 89,
						to: 89,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: -16.95},
						transform: [9.6, -16.95, 0.746, 0.746, 0, 3.142, NaN],
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
						to: 38,
						classname: "_ui_tutorial_peppermint_peppermint_air_flapper_on",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: -5.1},
						transform: [9.6, -5.1, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 39,
						to: 68,
						classname: "_ui_tutorial_peppermint_peppermint_air_flapper_off",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: -5.1},
						transform: [9.6, -5.1, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.449, 0], [0.801, 0.5], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 80,
						classname: "_ui_tutorial_peppermint_peppermint_air_flapper_off",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 28.35},
						transform: [9.6, 28.35, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.224, 0.362], [0.575, 0.771], [1, 1], ],
						}
					},
					{
						from: 81,
						to: 88,
						classname: "_ui_tutorial_peppermint_peppermint_air_flapper_on",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.55, ty: 0},
						transform: [9.55, 0, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.31, 0.618], [0.646, 1], [1, 1], ],
						}
					},
					{
						from: 89,
						to: 89,
						classname: "_ui_tutorial_peppermint_peppermint_air_flapper_on",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: -5.1},
						transform: [9.6, -5.1, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_ledandright_starchy": {
		type: "movieclip",
		fps: 30,
		totalFrames: 157,
		labels: {},
		layers: [
			{
				name: "key_up_idle",
				keys: [
					{
						from: 0,
						to: 74,
						classname: "_ui_tutorial_key_w_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.4, ty: 125.25},
						transform: [10.4, 125.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 75,
						to: 103,
						classname: "_ui_tutorial_key_w_on",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.4, ty: 125.25},
						transform: [10.4, 125.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 104,
						to: 156,
						classname: "_ui_tutorial_key_w_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.4, ty: 125.25},
						transform: [10.4, 125.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "key_right_idle",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_ui_tutorial_key_d_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 58.4, ty: 125.25},
						transform: [58.4, 125.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 14,
						classname: "_ui_tutorial_key_d_on",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 58.4, ty: 125.25},
						transform: [58.4, 125.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 51,
						classname: "_ui_tutorial_key_d_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 58.4, ty: 125.25},
						transform: [58.4, 125.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 52,
						to: 65,
						classname: "_ui_tutorial_key_d_on",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 58.4, ty: 125.25},
						transform: [58.4, 125.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 66,
						to: 156,
						classname: "_ui_tutorial_key_d_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 58.4, ty: 125.25},
						transform: [58.4, 125.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "key_right_idle",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_ui_tutorial_key_a_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -36.7, ty: 125.2},
						transform: [-36.7, 125.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 45,
						classname: "_ui_tutorial_key_a_on",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -36.65, ty: 125.2},
						transform: [-36.65, 125.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 46,
						to: 156,
						classname: "_ui_tutorial_key_a_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -36.7, ty: 125.2},
						transform: [-36.7, 125.2, 1, 1, 0, 0, 0],
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
						to: 3,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 64.55},
						transform: [9.6, 64.55, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 19,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 64.55},
						transform: [9.6, 64.55, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.39, 0], [0.687, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 24,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 61.45, ty: 64.55},
						transform: [61.45, 64.55, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0.087, c: 0, d: 0.746, tx: 61.45, ty: 64.55},
						transform: [61.45, 64.55, 0.751, 0.746, 0, 3.026, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 51,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: 0.746, b: 0, c: 0, d: 0.746, tx: 61.55, ty: 64.55},
						transform: [61.55, 64.55, 0.746, 0.746, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.423, 0], [0.587, 1], [1, 1], ],
						}
					},
					{
						from: 52,
						to: 55,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: 0.746, b: 0, c: 0, d: 0.746, tx: -48.2, ty: 64.55},
						transform: [-48.2, 64.55, 0.746, 0.746, 0, 0, 0],
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
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: 0.746, b: 0.049, c: 0, d: 0.746, tx: -48.2, ty: 64.55},
						transform: [-48.2, 64.55, 0.748, 0.746, 0, 0.065, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 57,
						to: 72,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: -48.3, ty: 64.55},
						transform: [-48.3, 64.55, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.167, 0], [0.792, 1], [1, 1], ],
						}
					},
					{
						from: 73,
						to: 78,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 64.55},
						transform: [9.6, 64.55, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 79,
						to: 103,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 64.55},
						transform: [9.6, 64.55, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.271, 0.123], [0.688, 0.49], [1, 1], ],
						}
					},
					{
						from: 104,
						to: 111,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 0.5},
						transform: [9.6, 0.5, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.5], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 112,
						to: 133,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: -14},
						transform: [9.6, -14, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.773, 0.562], [1, 1], ],
						}
					},
					{
						from: 134,
						to: 137,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 64.55},
						transform: [9.6, 64.55, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.26], [0.636, 1], [1, 1], ],
						}
					},
					{
						from: 138,
						to: 144,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 69},
						transform: [9.6, 69, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.368, 0], [0.636, 1], [1, 1], ],
						}
					},
					{
						from: 145,
						to: 156,
						classname: "_ui_tutorial_peppermint_balloons_idle",
						instancename: "balloons",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 64.55},
						transform: [9.6, 64.55, 0.746, 0.746, 0, 3.142, NaN],
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
						to: 3,
						classname: "_ui_tutorial_starchy_starchy_ground_idle",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 76.4},
						transform: [9.6, 76.4, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 11,
						classname: "_ui_tutorial_starchy_starchy_ground_run",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 76.4},
						transform: [9.6, 76.4, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.367, 0], [0.693, 0.486], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 19,
						classname: "_ui_tutorial_starchy_starchy_ground_stopandturn",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 33.15, ty: 76.35},
						transform: [33.15, 76.35, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.346, 0.485], [0.668, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 25,
						classname: "_ui_tutorial_starchy_starchy_ground_stopandturn",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 61.45, ty: 76.4},
						transform: [61.45, 76.4, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 42,
						classname: "_ui_tutorial_starchy_starchy_ground_run",
						instancename: "character",
						matrix: {a: 0.746, b: 0, c: 0, d: 0.746, tx: 61.55, ty: 76.4},
						transform: [61.55, 76.4, 0.746, 0.746, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0], [0.689, 0.602], [1, 1], ],
						}
					},
					{
						from: 43,
						to: 51,
						classname: "_ui_tutorial_starchy_starchy_ground_stopandturn",
						instancename: "character",
						matrix: {a: 0.746, b: 0, c: 0, d: 0.746, tx: -27.15, ty: 76.35},
						transform: [-27.15, 76.35, 0.746, 0.746, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.29, 0.572], [0.606, 1], [1, 1], ],
						}
					},
					{
						from: 52,
						to: 56,
						classname: "_ui_tutorial_starchy_starchy_ground_stopandturn",
						instancename: "character",
						matrix: {a: 0.746, b: 0, c: 0, d: 0.746, tx: -48.2, ty: 76.4},
						transform: [-48.2, 76.4, 0.746, 0.746, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 57,
						to: 64,
						classname: "_ui_tutorial_starchy_starchy_ground_run",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: -48.3, ty: 76.4},
						transform: [-48.3, 76.4, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.171, 0], [0.583, 0.506], [1, 1], ],
						}
					},
					{
						from: 65,
						to: 72,
						classname: "_ui_tutorial_starchy_starchy_ground_stop",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: -17.8, ty: 76.35},
						transform: [-17.8, 76.35, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.396, 0.506], [0.797, 1], [1, 1], ],
						}
					},
					{
						from: 73,
						to: 78,
						classname: "_ui_tutorial_starchy_starchy_ground_stop",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 76.4},
						transform: [9.6, 76.4, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 79,
						to: 103,
						classname: "_ui_tutorial_starchy_starchy_air_flapper_on",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 76.4},
						transform: [9.6, 76.4, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.271, 0.123], [0.688, 0.49], [1, 1], ],
						}
					},
					{
						from: 104,
						to: 111,
						classname: "_ui_tutorial_starchy_starchy_air_flapper",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 12.35},
						transform: [9.6, 12.35, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.179, 0.5], [0.583, 1], [1, 1], ],
						}
					},
					{
						from: 112,
						to: 133,
						classname: "_ui_tutorial_starchy_starchy_air_flapper",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: -2.15},
						transform: [9.6, -2.15, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0], [0.773, 0.562], [1, 1], ],
						}
					},
					{
						from: 134,
						to: 137,
						classname: "_ui_tutorial_starchy_starchy_ground_idle",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 76.4},
						transform: [9.6, 76.4, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.26], [0.636, 1], [1, 1], ],
						}
					},
					{
						from: 138,
						to: 144,
						classname: "_ui_tutorial_starchy_starchy_ground_idle",
						instancename: "character",
						matrix: {a: -0.764, b: 0, c: -0.025, d: 0.702, tx: 10.05, ty: 77.6},
						transform: [10.05, 77.6, 0.764, 0.702, -0.035, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.368, 0], [0.636, 1], [1, 1], ],
						}
					},
					{
						from: 145,
						to: 156,
						classname: "_ui_tutorial_starchy_starchy_ground_idle",
						instancename: "character",
						matrix: {a: -0.746, b: 0, c: 0, d: 0.746, tx: 9.6, ty: 76.4},
						transform: [9.6, 76.4, 0.746, 0.746, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_minibar_minibar_minibar_icon_sound_gfx": {
		type: "movieclip",
		fps: 30,
		totalFrames: 26,
		labels: {loop: {from:1, to:24}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ui_minibar_minibar_minibar_icon_sound_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 11,
						classname: "_ui_minibar_minibar_minibar_icon_pause_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 24,
						classname: "_ui_minibar_minibar_minibar_icon_pause_frames",
						instancename: "",
						matrix: {a: 1.087, b: 0, c: 0, d: 0.96, tx: 0, ty: 0},
						transform: [0, 0, 1.087, 0.96, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_ui_minibar_minibar_minibar_icon_pause_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
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
						to: 0,
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 24,
					},
					{
						from: 25,
						to: 25,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_ui_minibar_minibar_minibar_icon_pause_gfx": {
		type: "movieclip",
		fps: 30,
		totalFrames: 26,
		labels: {loop: {from:1, to:24}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ui_minibar_minibar_minibar_icon_pause_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 11,
						classname: "_ui_minibar_minibar_minibar_icon_pause_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 24,
						classname: "_ui_minibar_minibar_minibar_icon_pause_frames",
						instancename: "",
						matrix: {a: 1.087, b: 0, c: 0, d: 0.96, tx: 0, ty: 0},
						transform: [0, 0, 1.087, 0.96, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_ui_minibar_minibar_minibar_icon_pause_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
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
						to: 0,
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 24,
					},
					{
						from: 25,
						to: 25,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_ui_button_bg_seq": {
		type: "movieclip",
		fps: 30,
		totalFrames: 18,
		labels: {loop: {from:1, to:16}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_ui_button_bg_1_x",
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
						classname: "_ui_button_bg_2_x",
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
						classname: "_ui_button_bg_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 7,
						classname: "_ui_button_bg_4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 9,
						classname: "_ui_button_bg_5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 11,
						classname: "_ui_button_bg_6_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_ui_button_bg_7_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 15,
						classname: "_ui_button_bg_8_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 17,
						classname: "_ui_button_bg_9_x",
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 16,
					},
					{
						from: 17,
						to: 17,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_ui_icon_resume_frames": {
		type: "movieclip",
		fps: 30,
		totalFrames: 12,
		labels: {loop: {from:1, to:10}, },
		layers: [
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_ui_icon_resume_frames_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.8, ty: 2.65},
						transform: [6.8, 2.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_ui_icon_resume_frames_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.8, ty: 2.65},
						transform: [6.8, 2.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
						classname: "_ui_icon_resume_frames_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.8, ty: 2.65},
						transform: [6.8, 2.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 8,
						classname: "_ui_icon_resume_frames_4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.8, ty: 2.65},
						transform: [6.8, 2.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_ui_icon_resume_frames_5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.8, ty: 2.65},
						transform: [6.8, 2.65, 1, 1, 0, 0, 0],
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
						to: 11,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_ui_tutorial_key_up_idle": {
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
						classname: "_ui_tutorial_key_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: 3},
						transform: [-0.15, 3, 1, 1, 0, 0, 0],
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
						classname: "_ui_tutorial_arrow_idle_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.1, ty: -0.1},
						transform: [-0.1, -0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_key_up_on": {
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
						classname: "_ui_tutorial_key_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: 3},
						transform: [-0.15, 3, 1, 1, 0, 0, 0],
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
						classname: "_ui_tutorial_arrow_on",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.1, ty: -0.1},
						transform: [-0.1, -0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_key_right_idle": {
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
						classname: "_ui_tutorial_key_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: 3},
						transform: [-0.15, 3, 1, 1, 0, 0, 0],
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
						classname: "_ui_tutorial_arrow_idle_x",
						instancename: "",
						matrix: {a: 0, b: 1, c: -1, d: 0, tx: 1, ty: 0.15},
						transform: [1, 0.15, 1, 1, -1.571, 1.571, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_key_right_on": {
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
						classname: "_ui_tutorial_key_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: 3},
						transform: [-0.15, 3, 1, 1, 0, 0, 0],
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
						classname: "_ui_tutorial_arrow_on",
						instancename: "",
						matrix: {a: 0, b: 1, c: -1, d: 0, tx: 1, ty: 0.15},
						transform: [1, 0.15, 1, 1, -1.571, 1.571, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_peppermint_balloons_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 27,
		labels: {},
		layers: [
			{
				name: "string_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_ui_tutorial_peppermint_chain",
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
						from: 5,
						to: 17,
						classname: "_ui_tutorial_peppermint_chain",
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
						from: 18,
						to: 25,
						classname: "_ui_tutorial_peppermint_chain",
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
						from: 26,
						to: 26,
						classname: "_ui_tutorial_peppermint_chain",
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
						classname: "_ui_tutorial_peppermint_chain",
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
						from: 13,
						to: 25,
						classname: "_ui_tutorial_peppermint_chain",
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
						from: 26,
						to: 26,
						classname: "_ui_tutorial_peppermint_chain",
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
				name: "balloonbase",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_ui_tutorial_peppermint_soulbase",
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
						from: 13,
						to: 25,
						classname: "_ui_tutorial_peppermint_soulbase",
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
						from: 26,
						to: 26,
						classname: "_ui_tutorial_peppermint_soulbase",
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
						to: 4,
						classname: "_ui_tutorial_peppermint_soulbase",
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
						from: 5,
						to: 17,
						classname: "_ui_tutorial_peppermint_soulbase",
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
						from: 18,
						to: 25,
						classname: "_ui_tutorial_peppermint_soulbase",
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
						from: 26,
						to: 26,
						classname: "_ui_tutorial_peppermint_soulbase",
						instancename: "balloon1",
						matrix: {a: 0.678, b: 0, c: 0, d: 0.678, tx: 16.9, ty: -48.05},
						transform: [16.9, -48.05, 0.678, 0.678, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_peppermint_peppermint_ground_idle": {
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
		]
	},
	"_ui_tutorial_peppermint_peppermint_ground_run": {
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
		]
	},
	"_ui_tutorial_peppermint_peppermint_ground_stopandturn": {
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe3_x",
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
						classname: "_ui_tutorial_peppermint_shoe3_x",
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
						classname: "_ui_tutorial_peppermint_shoe3_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
		]
	},
	"_ui_tutorial_peppermint_peppermint_ground_stop": {
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_peppermint_shoe4_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
		]
	},
	"_ui_tutorial_peppermint_peppermint_air_flapper_on": {
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
						classname: "_ui_tutorial_peppermint_arm1_flap",
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
						classname: "_ui_tutorial_peppermint_arm1_flap",
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
						classname: "_ui_tutorial_peppermint_arm1_flap",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_legidle2",
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
						classname: "_ui_tutorial_peppermint_legidle2",
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
						classname: "_ui_tutorial_peppermint_legidle2",
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
						classname: "_ui_tutorial_peppermint_leg1_idle",
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
						classname: "_ui_tutorial_peppermint_leg1_idle",
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
						classname: "_ui_tutorial_peppermint_leg1_idle",
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
						classname: "_ui_tutorial_peppermint_eye_flap",
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
						classname: "_ui_tutorial_peppermint_eye_flap",
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
						classname: "_ui_tutorial_peppermint_eye_flap",
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
						classname: "_ui_tutorial_peppermint_eye_flap",
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
						classname: "_ui_tutorial_peppermint_eye_flap",
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
						classname: "_ui_tutorial_peppermint_eye_flap",
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
						classname: "_ui_tutorial_peppermint_mouth_flap",
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
						classname: "_ui_tutorial_peppermint_mouth_flap",
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
						classname: "_ui_tutorial_peppermint_mouth_flap",
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
						classname: "_ui_tutorial_peppermint_arm1_flap",
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
						classname: "_ui_tutorial_peppermint_arm1_flap",
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
						classname: "_ui_tutorial_peppermint_arm1_flap",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.15, ty: 4.2},
						transform: [24.15, 4.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_peppermint_peppermint_air_flapper_off": {
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_baseside1_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_basefront_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_monito_x",
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
						classname: "_ui_tutorial_peppermint_legidle2",
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
						classname: "_ui_tutorial_peppermint_legidle2",
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
						classname: "_ui_tutorial_peppermint_legidle2",
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
						classname: "_ui_tutorial_peppermint_leg1_idle",
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
						classname: "_ui_tutorial_peppermint_leg1_idle",
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
						classname: "_ui_tutorial_peppermint_leg1_idle",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_eye_1",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
						instancename: "",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_peppermint_mouth2_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
						instancename: "arm1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 24.15, ty: 4.2},
						transform: [24.15, 4.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_skeleton_spear_skeleton_ground_run": {
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot2_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot2_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot2_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot2_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot2_x",
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
						classname: "_ui_tutorial_skeleton_spear_pelvis_x",
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
						classname: "_ui_tutorial_skeleton_spear_pelvis_x",
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
						classname: "_ui_tutorial_skeleton_spear_pelvis2_x",
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
						classname: "_ui_tutorial_skeleton_spear_pelvis2_x",
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
						classname: "_ui_tutorial_skeleton_spear_pelvis_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot2_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot2_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot2_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot2_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot2_x",
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
						classname: "_ui_tutorial_skeleton_spear_sword_1_x",
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
						classname: "_ui_tutorial_skeleton_spear_sword_1_x",
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
						classname: "_ui_tutorial_skeleton_spear_sword_1_x",
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
						classname: "_ui_tutorial_skeleton_spear_sword_1_x",
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
						classname: "_ui_tutorial_skeleton_spear_sword_1_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm9_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm9_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm9_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm9_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm9_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_body_x",
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
						classname: "_ui_tutorial_skeleton_spear_body_x",
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
						classname: "_ui_tutorial_skeleton_spear_body_x",
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
						classname: "_ui_tutorial_skeleton_spear_body_x",
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
						classname: "_ui_tutorial_skeleton_spear_body_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm2_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm2_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm2_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm2_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm2_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm2_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm2_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_head_idle",
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
						classname: "_ui_tutorial_skeleton_spear_head_idle",
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
						classname: "_ui_tutorial_skeleton_spear_head_idle",
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
						classname: "_ui_tutorial_skeleton_spear_head_idle",
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
						classname: "_ui_tutorial_skeleton_spear_head_idle",
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
						classname: "_ui_tutorial_skeleton_spear_head_idle",
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
		]
	},
	"_ui_tutorial_skeleton_spear_skeleton_ground_stop": {
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot2_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot2_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot2_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot2_x",
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
						classname: "_ui_tutorial_skeleton_spear_pelvis2_x",
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
						classname: "_ui_tutorial_skeleton_spear_pelvis2_x",
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
						classname: "_ui_tutorial_skeleton_spear_pelvis_x",
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
						classname: "_ui_tutorial_skeleton_spear_pelvis_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot2_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot2_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm8_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm8_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm8_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm8_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_body_x",
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
						classname: "_ui_tutorial_skeleton_spear_body_x",
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
						classname: "_ui_tutorial_skeleton_spear_body_x",
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
						classname: "_ui_tutorial_skeleton_spear_body_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm2_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm2_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm2_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm2_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_head_stop",
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
						classname: "_ui_tutorial_skeleton_spear_head_stop",
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
						classname: "_ui_tutorial_skeleton_spear_head_stop",
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
						classname: "_ui_tutorial_skeleton_spear_head_stop",
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
				name: "sword",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_ui_tutorial_skeleton_spear_sword_1_x",
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
						classname: "_ui_tutorial_skeleton_spear_sword_1_x",
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
						classname: "_ui_tutorial_skeleton_spear_sword_1_x",
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
						classname: "_ui_tutorial_skeleton_spear_sword_1_x",
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
		]
	},
	"_ui_tutorial_skeleton_spear_skeleton_ground_idle": {
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot2_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot2_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot2_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_leg_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot_x",
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
						classname: "_ui_tutorial_skeleton_spear_foot_x",
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
						classname: "_ui_tutorial_skeleton_spear_pelvis_x",
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
						classname: "_ui_tutorial_skeleton_spear_pelvis_x",
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
						classname: "_ui_tutorial_skeleton_spear_pelvis_x",
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
						classname: "_ui_tutorial_skeleton_spear_sword_1_x",
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
						classname: "_ui_tutorial_skeleton_spear_sword_1_x",
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
						classname: "_ui_tutorial_skeleton_spear_sword_1_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm8_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm8_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm8_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_body_x",
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
						classname: "_ui_tutorial_skeleton_spear_body_x",
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
						classname: "_ui_tutorial_skeleton_spear_body_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm2_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm2_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm2_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_arm1_x",
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
						classname: "_ui_tutorial_skeleton_spear_head_idle",
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
						classname: "_ui_tutorial_skeleton_spear_head_idle",
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
						classname: "_ui_tutorial_skeleton_spear_head_idle",
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
		]
	},
	"_ui_tutorial_skeletonexplotes": {
		type: "movieclip",
		fps: 30,
		totalFrames: 45,
		labels: {},
		layers: [
			{
				name: "body_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_tutorial_skeleton_spear_body_x",
						instancename: "",
						matrix: {a: 0.737, b: 0.005, c: -0.005, d: 0.737, tx: 5.15, ty: -6.2},
						transform: [5.15, -6.2, 0.737, 0.737, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.185, 0.476], [0.569, 0.962], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 11,
						classname: "_ui_tutorial_skeleton_spear_body_x",
						instancename: "",
						matrix: {a: -0.706, b: -0.211, c: 0.211, d: -0.706, tx: 11.05, ty: -16.1},
						transform: [11.05, -16.1, 0.737, 0.737, 2.852, -2.852, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.439, 0], [0.872, 0.572], [1, 1], ],
							rotation: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							scale: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							color: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							filters: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
						}
					},
					{
						from: 12,
						to: 44,
						classname: "_ui_tutorial_skeleton_spear_body_x",
						instancename: "",
						matrix: {a: 0.696, b: 0.243, c: -0.243, d: 0.696, tx: 6.95, ty: 48.95},
						transform: [6.95, 48.95, 0.737, 0.737, -0.335, 0.335, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bone1_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_tutorial_skeleton_spear_bone1_x",
						instancename: "",
						matrix: {a: 0.232, b: 0.88, c: -0.88, d: 0.232, tx: 12.25, ty: 6.1},
						transform: [12.25, 6.1, 0.91, 0.91, -1.313, 1.313, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.185, 0.476], [0.569, 0.962], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 11,
						classname: "_ui_tutorial_skeleton_spear_bone1_x",
						instancename: "",
						matrix: {a: 0.325, b: -0.85, c: 0.85, d: 0.325, tx: 24.95, ty: 2.6},
						transform: [24.95, 2.6, 0.91, 0.91, 1.206, -1.206, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.439, 0], [0.872, 0.572], [1, 1], ],
							rotation: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							scale: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							color: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							filters: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
						}
					},
					{
						from: 12,
						to: 44,
						classname: "_ui_tutorial_skeleton_spear_bone1_x",
						instancename: "",
						matrix: {a: -0.84, b: 0.35, c: -0.35, d: -0.84, tx: 25.8, ty: 46.6},
						transform: [25.8, 46.6, 0.91, 0.91, -2.747, 2.747, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "head_crash_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_tutorial_skeleton_spear_head_crash_x",
						instancename: "",
						matrix: {a: 0.91, b: 0, c: 0, d: 0.91, tx: 10.35, ty: -15.4},
						transform: [10.35, -15.4, 0.91, 0.91, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.185, 0.476], [0.569, 0.962], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 11,
						classname: "_ui_tutorial_skeleton_spear_head_crash_x",
						instancename: "",
						matrix: {a: -0.806, b: 0.423, c: -0.423, d: -0.806, tx: -7.65, ty: -52.1},
						transform: [-7.65, -52.1, 0.91, 0.91, -2.658, 2.658, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.439, 0], [0.872, 0.572], [1, 1], ],
							rotation: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							scale: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							color: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							filters: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
						}
					},
					{
						from: 12,
						to: 44,
						classname: "_ui_tutorial_skeleton_spear_head_crash_x",
						instancename: "",
						matrix: {a: -0.78, b: -0.468, c: 0.468, d: -0.78, tx: 0, ty: 34},
						transform: [0, 34, 0.91, 0.91, 2.601, -2.601, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bone1_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_tutorial_skeleton_spear_bone1_x",
						instancename: "",
						matrix: {a: 0.609, b: -0.676, c: 0.676, d: 0.609, tx: -13.55, ty: -7.6},
						transform: [-13.55, -7.6, 0.91, 0.91, 0.837, -0.837, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.185, 0.476], [0.569, 0.962], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 11,
						classname: "_ui_tutorial_skeleton_spear_bone1_x",
						instancename: "",
						matrix: {a: -0.673, b: 0.612, c: -0.612, d: -0.673, tx: -25.5, ty: -17.9},
						transform: [-25.5, -17.9, 0.91, 0.91, -2.404, 2.404, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.439, 0], [0.872, 0.572], [1, 1], ],
							rotation: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							scale: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							color: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							filters: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
						}
					},
					{
						from: 12,
						to: 44,
						classname: "_ui_tutorial_skeleton_spear_bone1_x",
						instancename: "",
						matrix: {a: 0.864, b: 0.284, c: -0.284, d: 0.864, tx: -21.1, ty: 36.3},
						transform: [-21.1, 36.3, 0.91, 0.91, -0.318, 0.318, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bone1_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_tutorial_skeleton_spear_bone1_x",
						instancename: "",
						matrix: {a: 0.657, b: 0.629, c: -0.629, d: 0.657, tx: 18.55, ty: -8.6},
						transform: [18.55, -8.6, 0.91, 0.91, -0.763, 0.763, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.185, 0.476], [0.569, 0.962], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 11,
						classname: "_ui_tutorial_skeleton_spear_bone1_x",
						instancename: "",
						matrix: {a: -0.576, b: -0.704, c: 0.704, d: -0.576, tx: 34.75, ty: -29.65},
						transform: [34.75, -29.65, 0.91, 0.91, 2.257, -2.257, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.439, 0], [0.872, 0.572], [1, 1], ],
							rotation: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							scale: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							color: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							filters: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
						}
					},
					{
						from: 12,
						to: 44,
						classname: "_ui_tutorial_skeleton_spear_bone1_x",
						instancename: "",
						matrix: {a: 0.845, b: 0.337, c: -0.337, d: 0.845, tx: 32.4, ty: 49.8},
						transform: [32.4, 49.8, 0.91, 0.91, -0.38, 0.38, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bone1_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_tutorial_skeleton_spear_bone1_x",
						instancename: "",
						matrix: {a: 0.232, b: 0.88, c: -0.88, d: 0.232, tx: -0.3, ty: 8.15},
						transform: [-0.3, 8.15, 0.91, 0.91, -1.313, 1.313, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.185, 0.476], [0.569, 0.962], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 11,
						classname: "_ui_tutorial_skeleton_spear_bone1_x",
						instancename: "",
						matrix: {a: 0.383, b: -0.825, c: 0.825, d: 0.383, tx: -3.45, ty: 4.9},
						transform: [-3.45, 4.9, 0.91, 0.91, 1.136, -1.136, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.439, 0], [0.872, 0.572], [1, 1], ],
							rotation: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							scale: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							color: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
							filters: [[0, 0], [0.33, 0.33], [0.66, 0.66], [1, 1]],
						}
					},
					{
						from: 12,
						to: 44,
						classname: "_ui_tutorial_skeleton_spear_bone1_x",
						instancename: "",
						matrix: {a: -0.816, b: -0.402, c: 0.402, d: -0.816, tx: -24.95, ty: 49.9},
						transform: [-24.95, 49.9, 0.91, 0.91, 2.684, -2.684, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_key_w_idle": {
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
						classname: "_ui_tutorial_key_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: 3},
						transform: [-0.15, 3, 1, 1, 0, 0, 0],
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
						classname: "_ui_tutorial_w_idle_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.1, ty: -0.1},
						transform: [-0.1, -0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_key_w_on": {
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
						classname: "_ui_tutorial_key_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: 3},
						transform: [-0.15, 3, 1, 1, 0, 0, 0],
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
						classname: "_ui_tutorial_w_on",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.1, ty: -0.1},
						transform: [-0.1, -0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_key_d_idle": {
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
						classname: "_ui_tutorial_key_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: 3},
						transform: [-0.15, 3, 1, 1, 0, 0, 0],
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
						classname: "_ui_tutorial_d_idle_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.1, ty: -0.1},
						transform: [-0.1, -0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_key_d_on": {
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
						classname: "_ui_tutorial_key_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: 3},
						transform: [-0.15, 3, 1, 1, 0, 0, 0],
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
						classname: "_ui_tutorial_d_on",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.1, ty: -0.1},
						transform: [-0.1, -0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_key_a_idle": {
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
						classname: "_ui_tutorial_key_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: 3},
						transform: [-0.15, 3, 1, 1, 0, 0, 0],
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
						classname: "_ui_tutorial_a_idle_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.1, ty: -0.1},
						transform: [-0.1, -0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_key_a_on": {
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
						classname: "_ui_tutorial_key_bg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: 3},
						transform: [-0.15, 3, 1, 1, 0, 0, 0],
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
						classname: "_ui_tutorial_a_on",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.1, ty: -0.1},
						transform: [-0.1, -0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_starchy_starchy_ground_idle": {
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_body_x",
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
						classname: "_ui_tutorial_starchy_starchy_body_x",
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
						classname: "_ui_tutorial_starchy_starchy_body_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.2, ty: -33.7},
						transform: [7.2, -33.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_starchy_starchy_ground_run": {
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_body_x",
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
						classname: "_ui_tutorial_starchy_starchy_body_x",
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
						classname: "_ui_tutorial_starchy_starchy_body_x",
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
						classname: "_ui_tutorial_starchy_starchy_body_x",
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
						classname: "_ui_tutorial_starchy_starchy_body_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.2, ty: -33.7},
						transform: [7.2, -33.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_starchy_starchy_ground_stopandturn": {
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_body_turn",
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
						classname: "_ui_tutorial_starchy_starchy_body_turn",
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
						classname: "_ui_tutorial_starchy_starchy_body_turn",
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
						classname: "_ui_tutorial_starchy_starchy_body_turn",
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
						classname: "_ui_tutorial_starchy_starchy_body_turn",
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
						classname: "_ui_tutorial_starchy_starchy_body_turn",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -7.15, ty: -33.7},
						transform: [-7.15, -33.7, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_starchy_starchy_ground_stop": {
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_body_x",
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
						classname: "_ui_tutorial_starchy_starchy_body_x",
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
						classname: "_ui_tutorial_starchy_starchy_body_x",
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
						classname: "_ui_tutorial_starchy_starchy_body_x",
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
						classname: "_ui_tutorial_starchy_starchy_body_x",
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
						classname: "_ui_tutorial_starchy_starchy_body_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_leg_ground2_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_ground_x",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_arm3_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
		]
	},
	"_ui_tutorial_starchy_starchy_air_flapper_on": {
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
						classname: "_ui_tutorial_starchy_starchy_arm1_flap",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_flap",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_flap",
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
						classname: "_ui_tutorial_starchy_leg_air2",
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
						classname: "_ui_tutorial_starchy_leg_air2",
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
						classname: "_ui_tutorial_starchy_leg_air2",
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
						classname: "_ui_tutorial_starchy_starchy_body_x",
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
						classname: "_ui_tutorial_starchy_starchy_body_x",
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
						classname: "_ui_tutorial_starchy_starchy_body_x",
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
						classname: "_ui_tutorial_starchy_leg_air",
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
						classname: "_ui_tutorial_starchy_leg_air",
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
						classname: "_ui_tutorial_starchy_leg_air",
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
						classname: "_ui_tutorial_starchy_startchy_eye_flap",
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
						classname: "_ui_tutorial_starchy_startchy_eye_flap",
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
						classname: "_ui_tutorial_starchy_startchy_eye_flap",
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
						classname: "_ui_tutorial_starchy_startchy_eye_flap",
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
						classname: "_ui_tutorial_starchy_startchy_eye_flap",
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
						classname: "_ui_tutorial_starchy_startchy_eye_flap",
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
						classname: "_ui_tutorial_starchy_mouth_flap",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.3, ty: -5.15},
						transform: [-3.3, -5.15, 1, 1, 0, 0, 0],
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
						classname: "_ui_tutorial_starchy_mouth_flap",
						instancename: "mouth",
						matrix: {a: 0.972, b: 0.029, c: -0.03, d: 1, tx: -5.85, ty: -5.45},
						transform: [-5.85, -5.45, 0.973, 1, -0.03, 0.03, NaN],
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
						classname: "_ui_tutorial_starchy_mouth_flap",
						instancename: "mouth",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.3, ty: -5.15},
						transform: [-3.3, -5.15, 1, 1, 0, 0, 0],
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
						classname: "_ui_tutorial_starchy_starchy_arm1_flap",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_flap",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_flap",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 7.2, ty: -33.7},
						transform: [7.2, -33.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_starchy_starchy_air_flapper": {
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
						classname: "_ui_tutorial_starchy_starchy_arm_compo",
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
						classname: "_ui_tutorial_starchy_starchy_arm_compo",
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
						classname: "_ui_tutorial_starchy_starchy_arm_compo",
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
						classname: "_ui_tutorial_starchy_leg_air2",
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
						classname: "_ui_tutorial_starchy_leg_air2",
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
						classname: "_ui_tutorial_starchy_leg_air2",
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
						classname: "_ui_tutorial_starchy_starchy_body_x",
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
						classname: "_ui_tutorial_starchy_starchy_body_x",
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
						classname: "_ui_tutorial_starchy_starchy_body_x",
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
						classname: "_ui_tutorial_starchy_leg_air",
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
						classname: "_ui_tutorial_starchy_leg_air",
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
						classname: "_ui_tutorial_starchy_leg_air",
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
						classname: "_ui_tutorial_starchy_starchy_eye_compo",
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
						classname: "_ui_tutorial_starchy_starchy_eye_compo",
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
						classname: "_ui_tutorial_starchy_starchy_eye_compo",
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
						classname: "_ui_tutorial_starchy_starchy_eye_compo",
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
						classname: "_ui_tutorial_starchy_starchy_eye_compo",
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
						classname: "_ui_tutorial_starchy_starchy_eye_compo",
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
						classname: "_ui_tutorial_starchy_starchy_mouth_compo",
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
						classname: "_ui_tutorial_starchy_starchy_mouth_compo",
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
						classname: "_ui_tutorial_starchy_starchy_mouth_compo",
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
						classname: "_ui_tutorial_starchy_starchy_arm_compo",
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
						classname: "_ui_tutorial_starchy_starchy_arm_compo",
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
						classname: "_ui_tutorial_starchy_starchy_arm_compo",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_starchy_hat_1_x",
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
						classname: "_ui_tutorial_starchy_hittablebox",
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
						classname: "_ui_tutorial_starchy_hittablebox",
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
						classname: "_ui_tutorial_starchy_attackbox",
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
	"_ui_minibar_minibar_minibar_icon_sound_frames": {
		type: "movieclip",
		fps: 30,
		totalFrames: 12,
		labels: {loop: {from:1, to:10}, },
		layers: [
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_ui_minibar_minibar_minibar_icon_sound_frames_1_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_ui_minibar_minibar_minibar_icon_sound_frames_2_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
						classname: "_ui_minibar_minibar_minibar_icon_sound_frames_3_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 8,
						classname: "_ui_minibar_minibar_minibar_icon_sound_frames_4_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_ui_minibar_minibar_minibar_icon_sound_frames_5_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_ui_minibar_minibar_minibar_icon_pause_frames": {
		type: "movieclip",
		fps: 30,
		totalFrames: 12,
		labels: {loop: {from:1, to:10}, },
		layers: [
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_ui_minibar_minibar_minibar_icon_pause_frames_1_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_ui_minibar_minibar_minibar_icon_pause_frames_2_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
						classname: "_ui_minibar_minibar_minibar_icon_pause_frames_3_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 8,
						classname: "_ui_minibar_minibar_minibar_icon_pause_frames_4_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 10,
						classname: "_ui_minibar_minibar_minibar_icon_pause_frames_5_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_ui_minibar_minibar_minibar_icon_pause_frames_1_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_ui_button_bg_1_x": {
		type: "bitmap",
		asset: "_ui_button_bg_1_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_ui_button_bg_2_x": {
		type: "bitmap",
		asset: "_ui_button_bg_2_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_ui_button_bg_3_x": {
		type: "bitmap",
		asset: "_ui_button_bg_3_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_ui_button_bg_4_x": {
		type: "bitmap",
		asset: "_ui_button_bg_4_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_ui_button_bg_5_x": {
		type: "bitmap",
		asset: "_ui_button_bg_5_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_ui_button_bg_6_x": {
		type: "bitmap",
		asset: "_ui_button_bg_6_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_ui_button_bg_7_x": {
		type: "bitmap",
		asset: "_ui_button_bg_7_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_ui_button_bg_8_x": {
		type: "bitmap",
		asset: "_ui_button_bg_8_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_ui_button_bg_9_x": {
		type: "bitmap",
		asset: "_ui_button_bg_9_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_ui_icon_resume_frames_1_x": {
		type: "bitmap",
		asset: "_ui_icon_resume_frames_1_x",
		scale: 1,
		position: [-51.6, -46.15],
	},
	"_ui_icon_resume_frames_2_x": {
		type: "bitmap",
		asset: "_ui_icon_resume_frames_2_x",
		scale: 1,
		position: [-51.6, -46.15],
	},
	"_ui_icon_resume_frames_3_x": {
		type: "bitmap",
		asset: "_ui_icon_resume_frames_3_x",
		scale: 1,
		position: [-51.6, -46.15],
	},
	"_ui_icon_resume_frames_4_x": {
		type: "bitmap",
		asset: "_ui_icon_resume_frames_4_x",
		scale: 1,
		position: [-51.6, -46.15],
	},
	"_ui_icon_resume_frames_5_x": {
		type: "bitmap",
		asset: "_ui_icon_resume_frames_5_x",
		scale: 1,
		position: [-51.6, -46.15],
	},
	"_ui_tutorial_key_bg_x": {
		type: "bitmap",
		asset: "_ui_tutorial_key_bg_x",
		scale: 1,
		position: [-24.5, -25.8],
	},
	"_ui_tutorial_arrow_idle_x": {
		type: "bitmap",
		asset: "_ui_tutorial_arrow_idle_x",
		scale: 1,
		position: [-16.45, -17.45],
	},
	"_ui_tutorial_arrow_on": {
		type: "movieclip",
		fps: 30,
		totalFrames: 11,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_ui_tutorial_arrow_idle_x",
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
						to: 4,
						classname: "_ui_tutorial_arrow_on_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.69,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.616, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_ui_tutorial_arrow_on_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.616, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_ui_tutorial_arrow_on_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.69,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_peppermint_chain": {
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
						classname: "_ui_tutorial_peppermint_eslabon1_x",
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
						classname: "_ui_tutorial_peppermint_eslabon1_x",
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
						classname: "_ui_tutorial_peppermint_eslabon1_x",
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
						classname: "_ui_tutorial_peppermint_eslabon2_x",
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
						classname: "_ui_tutorial_peppermint_eslabon2_x",
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
						classname: "_ui_tutorial_peppermint_eslabon2_x",
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
						classname: "_ui_tutorial_peppermint_eslabon1_x",
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
						classname: "_ui_tutorial_peppermint_eslabon1_x",
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
						classname: "_ui_tutorial_peppermint_eslabon1_x",
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
						classname: "_ui_tutorial_peppermint_eslabon2_x",
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
						classname: "_ui_tutorial_peppermint_eslabon2_x",
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
						classname: "_ui_tutorial_peppermint_eslabon2_x",
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
						classname: "_ui_tutorial_peppermint_eslabon1_x",
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
						classname: "_ui_tutorial_peppermint_eslabon1_x",
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
						classname: "_ui_tutorial_peppermint_eslabon1_x",
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
						classname: "_ui_tutorial_peppermint_eslabon2_x",
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
						classname: "_ui_tutorial_peppermint_eslabon2_x",
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
						classname: "_ui_tutorial_peppermint_eslabon2_x",
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
						classname: "_ui_tutorial_peppermint_eslabon1_x",
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
						classname: "_ui_tutorial_peppermint_eslabon1_x",
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
						classname: "_ui_tutorial_peppermint_eslabon1_x",
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
	"_ui_tutorial_peppermint_soulbase": {
		type: "movieclip",
		fps: 30,
		totalFrames: 39,
		labels: {loop: {from:1, to:37}, },
		layers: [
			{
				name: "balloon_head",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ui_tutorial_peppermint_soul_head",
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
						classname: "_ui_tutorial_peppermint_soul_head",
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
						classname: "_ui_tutorial_peppermint_soul_head",
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
						classname: "_ui_tutorial_peppermint_soul_head",
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
	"_ui_tutorial_peppermint_arm1_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_arm1_x",
		scale: 1,
		position: [-6, -6.45],
	},
	"_ui_tutorial_peppermint_shoe4_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_shoe4_x",
		scale: 1,
		position: [-9.5, -6.6],
	},
	"_ui_tutorial_starchy_leg_ground_x": {
		type: "bitmap",
		asset: "_ui_tutorial_starchy_leg_ground_x",
		scale: 1,
		position: [-9.95, -5.3],
	},
	"_ui_tutorial_peppermint_baseside1_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_baseside1_x",
		scale: 1,
		position: [-11.3, -32.8],
	},
	"_ui_tutorial_peppermint_basefront_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_basefront_x",
		scale: 1,
		position: [-31.1, -32.8],
	},
	"_ui_tutorial_peppermint_monito_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_monito_x",
		scale: 1,
		position: [-9.85, -7.7],
	},
	"_ui_tutorial_peppermint_eye_1": {
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
						classname: "_ui_tutorial_peppermint_eyebasic_x",
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
						classname: "_ui_tutorial_peppermint_eyebasic_x",
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
						classname: "_ui_tutorial_peppermint_eyebasic_x",
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
						classname: "_ui_tutorial_peppermint_eyebasic_x",
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
						classname: "_ui_tutorial_peppermint_eyebasic_x",
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
						classname: "_ui_tutorial_peppermint_eyebrow1_x",
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
						classname: "_ui_tutorial_peppermint_eyebrow1_x",
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
						classname: "_ui_tutorial_peppermint_eyebrow1_x",
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
						classname: "_ui_tutorial_peppermint_eyebrow1_x",
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
						classname: "_ui_tutorial_peppermint_eyebrow1_x",
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
						classname: "_ui_tutorial_peppermint_eyebrow1_x",
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
						classname: "_ui_tutorial_peppermint_eyebrow1_x",
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
						classname: "_ui_tutorial_peppermint_eyebrow1_x",
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
						classname: "_ui_tutorial_peppermint_eyebrow1_x",
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
	"_ui_tutorial_peppermint_mouth2_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_mouth2_x",
		scale: 1,
		position: [-10.15, -7.65],
	},
	"_ui_tutorial_starchy_arm3_x": {
		type: "bitmap",
		asset: "_ui_tutorial_starchy_arm3_x",
		scale: 1,
		position: [-6, -6.5],
	},
	"_ui_tutorial_starchy_leg_ground2_x": {
		type: "bitmap",
		asset: "_ui_tutorial_starchy_leg_ground2_x",
		scale: 1,
		position: [-8.05, -6.3],
	},
	"_ui_tutorial_peppermint_shoe3_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_shoe3_x",
		scale: 1,
		position: [-7.2, -9.65],
	},
	"_ui_tutorial_peppermint_arm1_flap": {
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
						classname: "_ui_tutorial_peppermint_arm1_x",
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
	"_ui_tutorial_peppermint_legidle2": {
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
						classname: "_ui_tutorial_peppermint_leg4_x",
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
						classname: "_ui_tutorial_peppermint_leg4_x",
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
						classname: "_ui_tutorial_peppermint_leg4_x",
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
						classname: "_ui_tutorial_peppermint_shoe1_x",
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
						classname: "_ui_tutorial_peppermint_shoe1_x",
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
						classname: "_ui_tutorial_peppermint_shoe1_x",
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
						classname: "_ui_tutorial_peppermint_shoe1_x",
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
	"_ui_tutorial_peppermint_leg1_idle": {
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
						classname: "_ui_tutorial_peppermint_leg3_x",
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
						classname: "_ui_tutorial_peppermint_leg3_x",
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
						classname: "_ui_tutorial_peppermint_leg3_x",
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
						classname: "_ui_tutorial_peppermint_leg3_x",
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
						classname: "_ui_tutorial_peppermint_shoe1_x",
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
						classname: "_ui_tutorial_peppermint_shoe1_x",
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
						classname: "_ui_tutorial_peppermint_shoe1_x",
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
						classname: "_ui_tutorial_peppermint_shoe1_x",
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
	"_ui_tutorial_peppermint_eye_flap": {
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
						classname: "_ui_tutorial_peppermint_eyebasic_x",
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
						classname: "_ui_tutorial_peppermint_eyebrow1_x",
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
						classname: "_ui_tutorial_peppermint_eyebrow1_x",
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
						classname: "_ui_tutorial_peppermint_eyebrow1_x",
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
						classname: "_ui_tutorial_peppermint_eyebrow1_x",
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
						classname: "_ui_tutorial_peppermint_eyebrow2_x",
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
						classname: "_ui_tutorial_peppermint_eyebrow2_x",
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
						classname: "_ui_tutorial_peppermint_eyebrow2_x",
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
						classname: "_ui_tutorial_peppermint_eyebrow2_x",
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
	"_ui_tutorial_peppermint_mouth_flap": {
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
						classname: "_ui_tutorial_peppermint_mouth5_x",
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
						classname: "_ui_tutorial_peppermint_mouth5_x",
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
						classname: "_ui_tutorial_peppermint_mouth5_x",
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
						classname: "_ui_tutorial_peppermint_mouth_3_x",
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
						classname: "_ui_tutorial_peppermint_mouth_3_x",
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
						classname: "_ui_tutorial_peppermint_mouth_3_x",
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
	"_ui_tutorial_skeleton_spear_leg_x": {
		type: "bitmap",
		asset: "_ui_tutorial_skeleton_spear_leg_x",
		scale: 1,
		position: [-6.5, -5.55],
	},
	"_ui_tutorial_skeleton_spear_foot2_x": {
		type: "bitmap",
		asset: "_ui_tutorial_skeleton_spear_foot2_x",
		scale: 1,
		position: [-11.5, -6.7],
	},
	"_ui_tutorial_skeleton_spear_pelvis_x": {
		type: "bitmap",
		asset: "_ui_tutorial_skeleton_spear_pelvis_x",
		scale: 1,
		position: [-12.45, -8.95],
	},
	"_ui_tutorial_skeleton_spear_pelvis2_x": {
		type: "bitmap",
		asset: "_ui_tutorial_skeleton_spear_pelvis2_x",
		scale: 1,
		position: [-11.05, -8.95],
	},
	"_ui_tutorial_skeleton_spear_sword_1_x": {
		type: "bitmap",
		asset: "_ui_tutorial_skeleton_spear_sword_1_x",
		scale: 1,
		position: [-10.25, -41.15],
	},
	"_ui_tutorial_skeleton_spear_arm9_x": {
		type: "bitmap",
		asset: "_ui_tutorial_skeleton_spear_arm9_x",
		scale: 1,
		position: [-12.85, -6],
	},
	"_ui_tutorial_skeleton_spear_arm1_x": {
		type: "bitmap",
		asset: "_ui_tutorial_skeleton_spear_arm1_x",
		scale: 1,
		position: [-7, -8.15],
	},
	"_ui_tutorial_skeleton_spear_body_x": {
		type: "bitmap",
		asset: "_ui_tutorial_skeleton_spear_body_x",
		scale: 1,
		position: [-22.5, -13.55],
	},
	"_ui_tutorial_skeleton_spear_arm2_x": {
		type: "bitmap",
		asset: "_ui_tutorial_skeleton_spear_arm2_x",
		scale: 1,
		position: [-11.45, -6],
	},
	"_ui_tutorial_skeleton_spear_head_idle": {
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
						classname: "_ui_tutorial_skeleton_spear_mandibula_x",
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
						classname: "_ui_tutorial_skeleton_spear_mandibula_x",
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
						classname: "_ui_tutorial_skeleton_spear_mandibula_x",
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
						classname: "_ui_tutorial_skeleton_spear_headbase_x",
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
						classname: "_ui_tutorial_skeleton_spear_headbase_x",
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
						classname: "_ui_tutorial_skeleton_spear_headbase_x",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_nose_x",
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
						classname: "_ui_tutorial_skeleton_spear_nose_x",
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
						classname: "_ui_tutorial_skeleton_spear_nose_x",
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
	"_ui_tutorial_skeleton_spear_foot_x": {
		type: "bitmap",
		asset: "_ui_tutorial_skeleton_spear_foot_x",
		scale: 1,
		position: [-8.1, -6.15],
	},
	"_ui_tutorial_skeleton_spear_arm8_x": {
		type: "bitmap",
		asset: "_ui_tutorial_skeleton_spear_arm8_x",
		scale: 1,
		position: [-6.75, -6],
	},
	"_ui_tutorial_skeleton_spear_head_stop": {
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
						classname: "_ui_tutorial_skeleton_spear_mandibula_x",
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
						classname: "_ui_tutorial_skeleton_spear_mandibula_x",
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
						classname: "_ui_tutorial_skeleton_spear_mandibula_x",
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
						classname: "_ui_tutorial_skeleton_spear_mandibula_x",
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
						classname: "_ui_tutorial_skeleton_spear_mandibula_x",
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
						classname: "_ui_tutorial_skeleton_spear_mandibula_x",
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
						classname: "_ui_tutorial_skeleton_spear_mandibula_x",
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
						classname: "_ui_tutorial_skeleton_spear_headbase_x",
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
						classname: "_ui_tutorial_skeleton_spear_headbase_x",
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
						classname: "_ui_tutorial_skeleton_spear_headbase_x",
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
						classname: "_ui_tutorial_skeleton_spear_headbase_x",
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
						classname: "_ui_tutorial_skeleton_spear_headbase_x",
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
						classname: "_ui_tutorial_skeleton_spear_headbase_x",
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
						classname: "_ui_tutorial_skeleton_spear_headbase_x",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_eye1",
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
						classname: "_ui_tutorial_skeleton_spear_nose_x",
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
						classname: "_ui_tutorial_skeleton_spear_nose_x",
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
						classname: "_ui_tutorial_skeleton_spear_nose_x",
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
						classname: "_ui_tutorial_skeleton_spear_nose_x",
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
						classname: "_ui_tutorial_skeleton_spear_nose_x",
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
						classname: "_ui_tutorial_skeleton_spear_nose_x",
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
						classname: "_ui_tutorial_skeleton_spear_nose_x",
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
	"_ui_tutorial_skeleton_spear_bone1_x": {
		type: "bitmap",
		asset: "_ui_tutorial_skeleton_spear_bone1_x",
		scale: 1,
		position: [-16.15, -8.55],
	},
	"_ui_tutorial_skeleton_spear_head_crash_x": {
		type: "bitmap",
		asset: "_ui_tutorial_skeleton_spear_head_crash_x",
		scale: 1,
		position: [-33.85, -32.35],
	},
	"_ui_tutorial_w_idle_x": {
		type: "bitmap",
		asset: "_ui_tutorial_w_idle_x",
		scale: 1,
		position: [-16.6, -15.85],
	},
	"_ui_tutorial_w_on": {
		type: "movieclip",
		fps: 30,
		totalFrames: 11,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_ui_tutorial_w_idle_x",
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
						to: 4,
						classname: "_ui_tutorial_w_on_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.69,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.616, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_ui_tutorial_w_on_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.616, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_ui_tutorial_w_on_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.69,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_d_idle_x": {
		type: "bitmap",
		asset: "_ui_tutorial_d_idle_x",
		scale: 1,
		position: [-13.35, -17.15],
	},
	"_ui_tutorial_d_on": {
		type: "movieclip",
		fps: 30,
		totalFrames: 11,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_ui_tutorial_d_idle_x",
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
						to: 4,
						classname: "_ui_tutorial_d_on_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.69,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.616, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_ui_tutorial_d_on_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.616, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_ui_tutorial_d_on_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.69,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_a_idle_x": {
		type: "bitmap",
		asset: "_ui_tutorial_a_idle_x",
		scale: 1,
		position: [-16.6, -15.9],
	},
	"_ui_tutorial_a_on": {
		type: "movieclip",
		fps: 30,
		totalFrames: 11,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_ui_tutorial_a_idle_x",
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
						to: 4,
						classname: "_ui_tutorial_a_on_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.69,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.616, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_ui_tutorial_a_on_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0], [0.616, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_ui_tutorial_a_on_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.69,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_ui_tutorial_starchy_starchy_arm1_x": {
		type: "bitmap",
		asset: "_ui_tutorial_starchy_starchy_arm1_x",
		scale: 1,
		position: [-6, -7.05],
	},
	"_ui_tutorial_starchy_starchy_shoe_x": {
		type: "bitmap",
		asset: "_ui_tutorial_starchy_starchy_shoe_x",
		scale: 1,
		position: [-9.7, -7.6],
	},
	"_ui_tutorial_starchy_starchy_leg_ground_x": {
		type: "bitmap",
		asset: "_ui_tutorial_starchy_starchy_leg_ground_x",
		scale: 1,
		position: [-11.25, -5.6],
	},
	"_ui_tutorial_starchy_starchy_body_x": {
		type: "bitmap",
		asset: "_ui_tutorial_starchy_starchy_body_x",
		scale: 1,
		position: [-33.6, -33.65],
	},
	"_ui_tutorial_starchy_startchy_eye_1": {
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
						classname: "_ui_tutorial_starchy_starchy_eyebasic_x",
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
						classname: "_ui_tutorial_starchy_starchy_eyebasic_x",
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
						classname: "_ui_tutorial_starchy_starchy_eyebasic_x",
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
						classname: "_ui_tutorial_starchy_starchy_eyebasic_x",
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
						classname: "_ui_tutorial_starchy_starchy_eyebasic_x",
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
						classname: "_ui_tutorial_starchy_starchy_eyebrow1_x",
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
						classname: "_ui_tutorial_starchy_starchy_eyebrow1_x",
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
						classname: "_ui_tutorial_starchy_starchy_eyebrow1_x",
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
						classname: "_ui_tutorial_starchy_starchy_eyebrow1_x",
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
						classname: "_ui_tutorial_starchy_starchy_eyebrow1_x",
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
						classname: "_ui_tutorial_starchy_starchy_eyebrow1_x",
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
						classname: "_ui_tutorial_starchy_starchy_eyebrow1_x",
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
						classname: "_ui_tutorial_starchy_starchy_eyebrow1_x",
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
						classname: "_ui_tutorial_starchy_starchy_eyebrow1_x",
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
	"_ui_tutorial_starchy_starc,hy_mouth_1_x": {
		type: "bitmap",
		asset: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
		scale: 1,
		position: [-10.15, -7.65],
	},
	"_ui_tutorial_starchy_moustache_x": {
		type: "bitmap",
		asset: "_ui_tutorial_starchy_moustache_x",
		scale: 1,
		position: [-25.3, -11.5],
	},
	"_ui_tutorial_starchy_starchy_hat_1_x": {
		type: "bitmap",
		asset: "_ui_tutorial_starchy_starchy_hat_1_x",
		scale: 1,
		position: [-33.55, -16],
	},
	"_ui_tutorial_starchy_starchy_body_turn": {
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
						classname: "_ui_tutorial_starchy_starchy_body_flat_x",
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
						classname: "_ui_tutorial_starchy_starchy_body_flat_x",
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
	"_ui_tutorial_starchy_starchy_arm1_flap": {
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
	"_ui_tutorial_starchy_leg_air2": {
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
						classname: "_ui_tutorial_starchy_starchy_leg_2_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_2_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_2_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_2_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_2_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_2_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_2_x",
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
	"_ui_tutorial_starchy_leg_air": {
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
						classname: "_ui_tutorial_starchy_starchy_leg_2_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_2_x",
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
						classname: "_ui_tutorial_starchy_starchy_leg_2_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_2_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_2_x",
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
						classname: "_ui_tutorial_starchy_starchy_shoe_2_x",
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
	"_ui_tutorial_starchy_startchy_eye_flap": {
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
						classname: "_ui_tutorial_starchy_starchy_eyebasic_x",
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
						classname: "_ui_tutorial_starchy_starchy_eyebrow1_x",
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
						classname: "_ui_tutorial_starchy_starchy_eyebrow1_x",
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
						classname: "_ui_tutorial_starchy_starchy_eyebrow1_x",
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
						classname: "_ui_tutorial_starchy_starchy_eyebrow1_x",
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
	"_ui_tutorial_starchy_mouth_flap": {
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
						classname: "_ui_tutorial_starchy_starchy_mouth5_x",
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
						classname: "_ui_tutorial_starchy_starchy_mouth5_x",
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
						classname: "_ui_tutorial_starchy_starchy_mouth5_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
	"_ui_tutorial_starchy_starchy_arm_compo": {
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_flap",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
						classname: "_ui_tutorial_starchy_starchy_arm1_x",
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
	"_ui_tutorial_starchy_starchy_eye_compo": {
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
						classname: "_ui_tutorial_starchy_startchy_eye_1",
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
						classname: "_ui_tutorial_starchy_startchy_eye_flap",
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
						classname: "_ui_tutorial_starchy_startchy_eye_flapout",
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
	"_ui_tutorial_starchy_starchy_mouth_compo": {
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
						classname: "_ui_tutorial_starchy_mouth_idle",
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
						classname: "_ui_tutorial_starchy_mouth_flap",
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
						classname: "_ui_tutorial_starchy_mouth_flapout",
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
	"_ui_tutorial_starchy_hittablebox": {
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
	"_ui_tutorial_starchy_attackbox": {
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
	"_ui_minibar_minibar_minibar_icon_sound_frames_1_x": {
		type: "bitmap",
		asset: "_ui_minibar_minibar_minibar_icon_sound_frames_1_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_ui_minibar_minibar_minibar_icon_sound_frames_2_x": {
		type: "bitmap",
		asset: "_ui_minibar_minibar_minibar_icon_sound_frames_2_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_ui_minibar_minibar_minibar_icon_sound_frames_3_x": {
		type: "bitmap",
		asset: "_ui_minibar_minibar_minibar_icon_sound_frames_3_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_ui_minibar_minibar_minibar_icon_sound_frames_4_x": {
		type: "bitmap",
		asset: "_ui_minibar_minibar_minibar_icon_sound_frames_4_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_ui_minibar_minibar_minibar_icon_sound_frames_5_x": {
		type: "bitmap",
		asset: "_ui_minibar_minibar_minibar_icon_sound_frames_5_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_ui_minibar_minibar_minibar_icon_pause_frames_1_x": {
		type: "bitmap",
		asset: "_ui_minibar_minibar_minibar_icon_pause_frames_1_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_ui_minibar_minibar_minibar_icon_pause_frames_2_x": {
		type: "bitmap",
		asset: "_ui_minibar_minibar_minibar_icon_pause_frames_2_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_ui_minibar_minibar_minibar_icon_pause_frames_3_x": {
		type: "bitmap",
		asset: "_ui_minibar_minibar_minibar_icon_pause_frames_3_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_ui_minibar_minibar_minibar_icon_pause_frames_4_x": {
		type: "bitmap",
		asset: "_ui_minibar_minibar_minibar_icon_pause_frames_4_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_ui_minibar_minibar_minibar_icon_pause_frames_5_x": {
		type: "bitmap",
		asset: "_ui_minibar_minibar_minibar_icon_pause_frames_5_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_ui_tutorial_arrow_on_x": {
		type: "bitmap",
		asset: "_ui_tutorial_arrow_on_x",
		scale: 1,
		position: [-21.25, -21.25],
	},
	"_ui_tutorial_peppermint_eslabon1_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_eslabon1_x",
		scale: 1,
		position: [-9.7, -11.15],
	},
	"_ui_tutorial_peppermint_eslabon2_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_eslabon2_x",
		scale: 1,
		position: [-8.95, -10.15],
	},
	"_ui_tutorial_peppermint_soul_head": {
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
						classname: "_ui_tutorial_peppermint_sould_head_base_1",
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
	"_ui_tutorial_peppermint_eyebasic_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_eyebasic_x",
		scale: 1,
		position: [-8.5, -8.8],
	},
	"_ui_tutorial_peppermint_eyebrow1_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_eyebrow1_x",
		scale: 1,
		position: [-8.8, -8.85],
	},
	"_ui_tutorial_peppermint_leg4_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_leg4_x",
		scale: 1,
		position: [-14.6, -7.25],
	},
	"_ui_tutorial_peppermint_shoe1_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_shoe1_x",
		scale: 1,
		position: [-8.95, -7.25],
	},
	"_ui_tutorial_peppermint_leg3_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_leg3_x",
		scale: 1,
		position: [-16.75, -8.9],
	},
	"_ui_tutorial_peppermint_eyebrow2_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_eyebrow2_x",
		scale: 1,
		position: [-8.6, -8.9],
	},
	"_ui_tutorial_peppermint_mouth5_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_mouth5_x",
		scale: 1,
		position: [-17.8, -12.7],
	},
	"_ui_tutorial_peppermint_mouth_3_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_mouth_3_x",
		scale: 1,
		position: [-7.2, -7.2],
	},
	"_ui_tutorial_skeleton_spear_mandibula_x": {
		type: "bitmap",
		asset: "_ui_tutorial_skeleton_spear_mandibula_x",
		scale: 1,
		position: [-25.45, -12.25],
	},
	"_ui_tutorial_skeleton_spear_headbase_x": {
		type: "bitmap",
		asset: "_ui_tutorial_skeleton_spear_headbase_x",
		scale: 1,
		position: [-27.65, -24.1],
	},
	"_ui_tutorial_skeleton_spear_eye1": {
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
						classname: "_ui_tutorial_skeleton_spear_eye1_x",
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
						classname: "_ui_tutorial_skeleton_spear_eye1_x",
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
						classname: "_ui_tutorial_skeleton_spear_eye1_x",
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
						classname: "_ui_tutorial_skeleton_spear_eye1_x",
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
	"_ui_tutorial_skeleton_spear_nose_x": {
		type: "bitmap",
		asset: "_ui_tutorial_skeleton_spear_nose_x",
		scale: 1,
		position: [-8.95, -10.65],
	},
	"_ui_tutorial_w_on_x": {
		type: "bitmap",
		asset: "_ui_tutorial_w_on_x",
		scale: 1,
		position: [-21.25, -21.25],
	},
	"_ui_tutorial_d_on_x": {
		type: "bitmap",
		asset: "_ui_tutorial_d_on_x",
		scale: 1,
		position: [-21.25, -21.25],
	},
	"_ui_tutorial_a_on_x": {
		type: "bitmap",
		asset: "_ui_tutorial_a_on_x",
		scale: 1,
		position: [-21.25, -21.25],
	},
	"_ui_tutorial_starchy_starchy_eyebasic_x": {
		type: "bitmap",
		asset: "_ui_tutorial_starchy_starchy_eyebasic_x",
		scale: 1,
		position: [-8.5, -8.8],
	},
	"_ui_tutorial_starchy_starchy_eyebrow1_x": {
		type: "bitmap",
		asset: "_ui_tutorial_starchy_starchy_eyebrow1_x",
		scale: 1,
		position: [-8.8, -8.75],
	},
	"_ui_tutorial_starchy_starchy_body_flat_x": {
		type: "bitmap",
		asset: "_ui_tutorial_starchy_starchy_body_flat_x",
		scale: 1,
		position: [-33.6, -33.65],
	},
	"_ui_tutorial_starchy_starchy_leg_2_x": {
		type: "bitmap",
		asset: "_ui_tutorial_starchy_starchy_leg_2_x",
		scale: 1,
		position: [-13.4, -5.55],
	},
	"_ui_tutorial_starchy_starchy_shoe_2_x": {
		type: "bitmap",
		asset: "_ui_tutorial_starchy_starchy_shoe_2_x",
		scale: 1,
		position: [-9.85, -7.4],
	},
	"_ui_tutorial_starchy_starchy_mouth5_x": {
		type: "bitmap",
		asset: "_ui_tutorial_starchy_starchy_mouth5_x",
		scale: 1,
		position: [-17.8, -12.7],
	},
	"_ui_tutorial_starchy_startchy_eye_flapout": {
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
						classname: "_ui_tutorial_starchy_starchy_eyebasic_x",
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
						classname: "_ui_tutorial_starchy_starchy_eyebasic_x",
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
						classname: "_ui_tutorial_starchy_starchy_eyebrow1_x",
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
						classname: "_ui_tutorial_starchy_starchy_eyebrow1_x",
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
	"_ui_tutorial_starchy_mouth_idle": {
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
	"_ui_tutorial_starchy_mouth_flapout": {
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
						classname: "_ui_tutorial_starchy_starchy_mouth5_x",
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
						classname: "_ui_tutorial_starchy_starchy_mouth5_x",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_starc,hy_mouth_1_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
						classname: "_ui_tutorial_starchy_moustache_x",
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
	"_ui_tutorial_peppermint_sould_head_base_1": {
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
						classname: "_ui_tutorial_peppermint_souls_bubbles_compo",
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
						classname: "_ui_tutorial_peppermint_soul_head_base_1_x",
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
	"_ui_tutorial_skeleton_spear_eye1_x": {
		type: "bitmap",
		asset: "_ui_tutorial_skeleton_spear_eye1_x",
		scale: 1,
		position: [-9.9, -9.7],
	},
	"_ui_tutorial_peppermint_souls_bubbles_compo": {
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
						classname: "_ui_tutorial_peppermint_souls_bubbles_1_x",
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
						classname: "_ui_tutorial_peppermint_souls_bubbles_1_x",
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
						classname: "_ui_tutorial_peppermint_souls_bubble_2_x",
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
						classname: "_ui_tutorial_peppermint_souls_bubble_3_x",
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
						classname: "_ui_tutorial_peppermint_souls_bubble_4_x",
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
						classname: "_ui_tutorial_peppermint_souls_bubble_5_x",
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
						classname: "_ui_tutorial_peppermint_souls_bubble_6_x",
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
						classname: "_ui_tutorial_peppermint_souls_bubble_7_x",
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
						classname: "_ui_tutorial_peppermint_souls_bubble_8_x",
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
						classname: "_ui_tutorial_peppermint_souls_bubble_9_x",
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
						classname: "_ui_tutorial_peppermint_souls_bubble_10_x",
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
						classname: "_ui_tutorial_peppermint_souls_bubble_11_x",
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
						classname: "_ui_tutorial_peppermint_souls_bubble_12_x",
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
						classname: "_ui_tutorial_peppermint_souls_bubble_13_x",
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
						classname: "_ui_tutorial_peppermint_souls_bubble_14_x",
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
						classname: "_ui_tutorial_peppermint_souls_bubble_15_x",
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
						classname: "_ui_tutorial_peppermint_souls_bubble_16_x",
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
						classname: "_ui_tutorial_peppermint_souls_bubble_17_x",
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
						classname: "_ui_tutorial_peppermint_souls_bubble_18_x",
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
						classname: "_ui_tutorial_peppermint_souls_bubble_19_x",
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
	"_ui_tutorial_peppermint_soul_head_base_1_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_soul_head_base_1_x",
		scale: 1,
		position: [-35.5, -41.6],
	},
	"_ui_tutorial_peppermint_souls_bubbles_1_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_souls_bubbles_1_x",
		scale: 1,
		position: [-38.3, -59.05],
	},
	"_ui_tutorial_peppermint_souls_bubble_2_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_souls_bubble_2_x",
		scale: 1,
		position: [-38.3, -59.05],
	},
	"_ui_tutorial_peppermint_souls_bubble_3_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_souls_bubble_3_x",
		scale: 1,
		position: [-38.3, -59.05],
	},
	"_ui_tutorial_peppermint_souls_bubble_4_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_souls_bubble_4_x",
		scale: 1,
		position: [-38.3, -59.05],
	},
	"_ui_tutorial_peppermint_souls_bubble_5_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_souls_bubble_5_x",
		scale: 1,
		position: [-38.3, -59.05],
	},
	"_ui_tutorial_peppermint_souls_bubble_6_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_souls_bubble_6_x",
		scale: 1,
		position: [-38.3, -59.05],
	},
	"_ui_tutorial_peppermint_souls_bubble_7_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_souls_bubble_7_x",
		scale: 1,
		position: [-38.3, -59.05],
	},
	"_ui_tutorial_peppermint_souls_bubble_8_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_souls_bubble_8_x",
		scale: 1,
		position: [-38.3, -59.05],
	},
	"_ui_tutorial_peppermint_souls_bubble_9_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_souls_bubble_9_x",
		scale: 1,
		position: [-38.3, -59.05],
	},
	"_ui_tutorial_peppermint_souls_bubble_10_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_souls_bubble_10_x",
		scale: 1,
		position: [-38.3, -59.05],
	},
	"_ui_tutorial_peppermint_souls_bubble_11_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_souls_bubble_11_x",
		scale: 1,
		position: [-38.3, -59.05],
	},
	"_ui_tutorial_peppermint_souls_bubble_12_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_souls_bubble_12_x",
		scale: 1,
		position: [-38.3, -59.05],
	},
	"_ui_tutorial_peppermint_souls_bubble_13_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_souls_bubble_13_x",
		scale: 1,
		position: [-38.3, -59.05],
	},
	"_ui_tutorial_peppermint_souls_bubble_14_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_souls_bubble_14_x",
		scale: 1,
		position: [-38.3, -59.05],
	},
	"_ui_tutorial_peppermint_souls_bubble_15_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_souls_bubble_15_x",
		scale: 1,
		position: [-38.3, -59.05],
	},
	"_ui_tutorial_peppermint_souls_bubble_16_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_souls_bubble_16_x",
		scale: 1,
		position: [-38.3, -59.05],
	},
	"_ui_tutorial_peppermint_souls_bubble_17_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_souls_bubble_17_x",
		scale: 1,
		position: [-38.3, -59.05],
	},
	"_ui_tutorial_peppermint_souls_bubble_18_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_souls_bubble_18_x",
		scale: 1,
		position: [-38.3, -59.05],
	},
	"_ui_tutorial_peppermint_souls_bubble_19_x": {
		type: "bitmap",
		asset: "_ui_tutorial_peppermint_souls_bubble_19_x",
		scale: 1,
		position: [-38.3, -59.05],
	},
	"ui": {
		type: "movieclip",
		fps: 30,
		totalFrames: 46,
		labels: {in: {from:0, to:13}, out: {from:14, to:27}, flash: {from:28, to:45}, },
		layers: [
			{
				name: "pause_btn",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_ui_pause_btn",
						instancename: "pause_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 765.4, ty: -54.6},
						transform: [765.4, -54.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.435], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 10,
						classname: "_ui_pause_btn",
						instancename: "pause_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 765.4, ty: 47.15},
						transform: [765.4, 47.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 15,
						classname: "_ui_pause_btn",
						instancename: "pause_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 765.4, ty: 31.6},
						transform: [765.4, 31.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 20,
						classname: "_ui_pause_btn",
						instancename: "pause_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 765.4, ty: 31.6},
						transform: [765.4, 31.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 26,
						classname: "_ui_pause_btn",
						instancename: "pause_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 765.4, ty: 48.55},
						transform: [765.4, 48.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.852, 0.616], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_ui_pause_btn",
						instancename: "pause_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 765.4, ty: -46.2},
						transform: [765.4, -46.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 29,
						classname: "_ui_pause_btn",
						instancename: "pause_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 765.4, ty: 31.6},
						transform: [765.4, 31.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 30,
						to: 34,
						classname: "_ui_pause_btn",
						instancename: "pause_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 765.4, ty: 31.6},
						transform: [765.4, 31.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 40,
						classname: "_ui_pause_btn",
						instancename: "pause_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 765.4, ty: 48.55},
						transform: [765.4, 48.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.852, 0.616], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 45,
						classname: "_ui_pause_btn",
						instancename: "pause_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 765.4, ty: -46.2},
						transform: [765.4, -46.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "lives",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_ui_lives_container",
						instancename: "lives",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 43.8, ty: -53.1},
						transform: [43.8, -53.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 6,
						classname: "_ui_lives_container",
						instancename: "lives",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 43.8, ty: -53.1},
						transform: [43.8, -53.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.435], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 12,
						classname: "_ui_lives_container",
						instancename: "lives",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 43.8, ty: 49.45},
						transform: [43.8, 49.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_ui_lives_container",
						instancename: "lives",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 43.8, ty: 33.1},
						transform: [43.8, 33.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_ui_lives_container",
						instancename: "lives",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 43.8, ty: 33.1},
						transform: [43.8, 33.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 24,
						classname: "_ui_lives_container",
						instancename: "lives",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 43.8, ty: 50.05},
						transform: [43.8, 50.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.852, 0.616], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 27,
						classname: "_ui_lives_container",
						instancename: "lives",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 43.8, ty: -44.7},
						transform: [43.8, -44.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 32,
						classname: "_ui_lives_container",
						instancename: "lives",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 43.8, ty: 33.1},
						transform: [43.8, 33.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.518, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 38,
						classname: "_ui_lives_container",
						instancename: "lives",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 43.8, ty: 50.05},
						transform: [43.8, 50.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.474, 0], [0.852, 0.616], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 45,
						classname: "_ui_lives_container",
						instancename: "lives",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 43.8, ty: -44.7},
						transform: [43.8, -44.7, 1, 1, 0, 0, 0],
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
					},
					{
						from: 28,
						to: 45,
						classname: "_ui_flashwhite",
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
				name: "Layer 1",
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
					{
						from: 14,
						to: 26,
					},
					{
						from: 27,
						to: 27,
						actions: function(self){self.stop();},
					},
					{
						from: 28,
						to: 44,
					},
					{
						from: 45,
						to: 45,
						actions: function(self){self.stop();},
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
					{
						from: 14,
						to: 27,
					},
					{
						from: 28,
						to: 45,
					},
				]
			},
		]
	},
	"_ui_pause_btn": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {over: {from:0, to:6}, down: {from:7, to:13}, out: {from:14, to:19}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: 0.354, b: 0, c: 0, d: 0.354, tx: -0.35, ty: -0.4},
						transform: [-0.35, -0.4, 0.354, 0.354, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.175, 0.414], [0.569, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: 0.403, b: 0, c: 0, d: 0.403, tx: -0.3, ty: -0.35},
						transform: [-0.3, -0.35, 0.403, 0.403, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: 0.403, b: 0, c: 0, d: 0.403, tx: -0.3, ty: -0.35},
						transform: [-0.3, -0.35, 0.403, 0.403, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: 0.403, b: 0, c: 0, d: 0.403, tx: -0.3, ty: -0.35},
						transform: [-0.3, -0.35, 0.403, 0.403, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_button_bg",
						instancename: "",
						matrix: {a: 0.354, b: 0, c: 0, d: 0.354, tx: -0.35, ty: -0.4},
						transform: [-0.35, -0.4, 0.354, 0.354, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.175, 0.414], [0.569, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "icon_pause_gfx",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_icon_pause_gfx",
						instancename: "",
						matrix: {a: 0.649, b: 0, c: 0, d: 0.444, tx: 8, ty: -1},
						transform: [8, -1, 0.649, 0.444, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.175, 0.414], [0.569, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_ui_icon_pause_gfx",
						instancename: "",
						matrix: {a: 0.852, b: 0, c: 0, d: 0.505, tx: 9.15, ty: -1},
						transform: [9.15, -1, 0.852, 0.505, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_ui_icon_pause_gfx",
						instancename: "",
						matrix: {a: 0.852, b: 0, c: 0, d: 0.505, tx: 9.15, ty: -1},
						transform: [9.15, -1, 0.852, 0.505, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_ui_icon_pause_gfx",
						instancename: "",
						matrix: {a: 0.852, b: 0, c: 0, d: 0.505, tx: 9.15, ty: -1},
						transform: [9.15, -1, 0.852, 0.505, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_icon_pause_gfx",
						instancename: "",
						matrix: {a: 0.649, b: 0, c: 0, d: 0.444, tx: 8, ty: -1},
						transform: [8, -1, 0.649, 0.444, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.175, 0.414], [0.569, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "icon_pause_gfx",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_ui_icon_pause_gfx",
						instancename: "",
						matrix: {a: 0.643, b: 0, c: 0, d: 0.444, tx: -8.4, ty: -1},
						transform: [-8.4, -1, 0.643, 0.444, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.175, 0.414], [0.569, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_ui_icon_pause_gfx",
						instancename: "",
						matrix: {a: 0.841, b: 0, c: 0, d: 0.505, tx: -9.5, ty: -1},
						transform: [-9.5, -1, 0.841, 0.505, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "_ui_icon_pause_gfx",
						instancename: "",
						matrix: {a: 0.841, b: 0, c: 0, d: 0.505, tx: -9.5, ty: -1},
						transform: [-9.5, -1, 0.841, 0.505, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_ui_icon_pause_gfx",
						instancename: "",
						matrix: {a: 0.841, b: 0, c: 0, d: 0.505, tx: -9.5, ty: -1},
						transform: [-9.5, -1, 0.841, 0.505, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.463, 0], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_ui_icon_pause_gfx",
						instancename: "",
						matrix: {a: 0.643, b: 0, c: 0, d: 0.444, tx: -8.4, ty: -1},
						transform: [-8.4, -1, 0.643, 0.444, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.175, 0.414], [0.569, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 19,
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
	"_ui_lives_container": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "candle_6",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ui_candle",
						instancename: "candle_6",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 215.15, ty: 0},
						transform: [215.15, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "candle_5",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ui_candle",
						instancename: "candle_5",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 172, ty: 0},
						transform: [172, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "candle_4",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ui_candle",
						instancename: "candle_4",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 129, ty: 0},
						transform: [129, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "candle_3",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ui_candle",
						instancename: "candle_3",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 86, ty: 0},
						transform: [86, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "candle_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ui_candle",
						instancename: "candle_2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 43, ty: 0},
						transform: [43, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "candle_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ui_candle_first",
						instancename: "candle_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: 0},
						transform: [-0.05, 0, 1, 1, 0, 0, 0],
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
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_ui_flashwhite": {
		type: "movieclip",
		fps: 30,
		totalFrames: 154,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 100,
						classname: "_ui_whity2_x",
						instancename: "",
						matrix: {a: 9.298, b: 0, c: 0, d: 6.837, tx: 404.8, ty: 290.35},
						transform: [404.8, 290.35, 9.298, 6.837, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 101,
						to: 143,
						classname: "_ui_whity2_x",
						instancename: "",
						matrix: {a: 9.298, b: 0, c: 0, d: 6.837, tx: 404.8, ty: 290.35},
						transform: [404.8, 290.35, 9.298, 6.837, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 144,
						to: 153,
						classname: "_ui_whity2_x",
						instancename: "",
						matrix: {a: 9.298, b: 0, c: 0, d: 6.837, tx: 404.8, ty: 290.35},
						transform: [404.8, 290.35, 9.298, 6.837, 0, 0, 0],
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
						to: 152,
					},
					{
						from: 153,
						to: 153,
						actions: function(self){self.stop();
globalsignal.emit(ge.CREDITS);},
					},
				]
			},
		]
	},
	"_ui_button_bg": {
		type: "movieclip",
		fps: 30,
		totalFrames: 33,
		labels: {loop: {from:1, to:31}, },
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_ui_button_bg_seq",
						instancename: "",
						matrix: {a: -0.908, b: 0, c: 0, d: 0.847, tx: 0, ty: 0},
						transform: [0, 0, 0.908, 0.847, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 31,
						classname: "_ui_button_bg_seq",
						instancename: "",
						matrix: {a: -0.833, b: 0, c: 0, d: 0.931, tx: 0, ty: -0.05},
						transform: [0, -0.05, 0.833, 0.931, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.402, 0], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_ui_button_bg_seq",
						instancename: "",
						matrix: {a: -0.908, b: 0, c: 0, d: 0.847, tx: 0, ty: 0},
						transform: [0, 0, 0.908, 0.847, 0, 3.142, NaN],
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 31,
					},
					{
						from: 32,
						to: 32,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_ui_icon_pause_gfx": {
		type: "movieclip",
		fps: 30,
		totalFrames: 26,
		labels: {loop: {from:1, to:24}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_ui_icon_pause_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 11,
						classname: "_ui_icon_pause_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 24,
						classname: "_ui_icon_pause_frames",
						instancename: "",
						matrix: {a: 1.087, b: 0, c: 0, d: 0.96, tx: 0, ty: 0},
						transform: [0, 0, 1.087, 0.96, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.618, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_ui_icon_pause_frames",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
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
						to: 0,
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 24,
					},
					{
						from: 25,
						to: 25,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_ui_candle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 42,
		labels: {on: {from:0, to:7}, idle: {from:8, to:11}, off: {from:12, to:40}, disabled: {from:41, to:41}, },
		layers: [
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_ui_canlde_bg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.85, ty: 0},
						transform: [-22.85, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 16,
						classname: "_ui_canlde_bg",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.85, ty: 0},
						transform: [-22.85, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_ui_canlde_bg",
						instancename: "",
						matrix: {a: 0.569, b: 0, c: 0, d: 1, tx: -32.3, ty: 0},
						transform: [-32.3, 0, 0.569, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 41,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 23,
						classname: "_ui_candlebase",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: 7.7},
						transform: [-0.3, 7.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 28,
						classname: "_ui_candlebase",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: 7.7},
						transform: [-0.3, 7.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 38,
						classname: "_ui_candlebase",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: 13.25},
						transform: [-0.3, 13.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.457, 0], [0.809, 0.411], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 39,
						classname: "_ui_candlebase",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: -73.2},
						transform: [-0.3, -73.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 40,
						to: 40,
					},
					{
						from: 41,
						to: 41,
					},
				]
			},
			{
				name: "flameall",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_ui_flameall",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.5, ty: -0.75},
						transform: [-0.5, -0.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_ui_flameall",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.5, ty: -0.75},
						transform: [-0.5, -0.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.545], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 16,
						classname: "_ui_flameall",
						instancename: "",
						matrix: {a: 1.136, b: 0, c: 0, d: 1.136, tx: -0.5, ty: -0.75},
						transform: [-0.5, -0.75, 1.136, 1.136, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.799, 0.569], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_ui_flameall",
						instancename: "",
						matrix: {a: 0.224, b: 0, c: 0, d: 0.224, tx: -0.25, ty: 0.45},
						transform: [-0.25, 0.45, 0.224, 0.224, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 40,
					},
					{
						from: 41,
						to: 41,
					},
				]
			},
			{
				name: "candle_glow",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_ui_candle_glow",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: -7.95},
						transform: [-1.3, -7.95, 1, 1, 0, 0, 0],
						alpha: 0.5,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_ui_candle_glow",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: -7.95},
						transform: [-1.3, -7.95, 1, 1, 0, 0, 0],
						alpha: 0.5,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 14,
						to: 16,
						classname: "_ui_candle_glow",
						instancename: "",
						matrix: {a: 1.342, b: 0, c: 0, d: 1.342, tx: -0.2, ty: -9.05},
						transform: [-0.2, -9.05, 1.342, 1.342, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_ui_candle_glow",
						instancename: "",
						matrix: {a: 2.129, b: 0, c: 0, d: 2.129, tx: -0.1, ty: -8.95},
						transform: [-0.1, -8.95, 2.129, 2.129, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 41,
					},
				]
			},
			{
				name: "code",
				keys: [
					{
						from: 0,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						actions: function(self){self.stop();},
					},
					{
						from: 12,
						to: 39,
					},
					{
						from: 40,
						to: 40,
						actions: function(self){self.stop();},
					},
					{
						from: 41,
						to: 41,
						actions: function(self){self.stop();},
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 11,
					},
					{
						from: 12,
						to: 40,
					},
					{
						from: 41,
						to: 41,
					},
				]
			},
		]
	},
	"_ui_candle_first": {
		type: "movieclip",
		fps: 30,
		totalFrames: 42,
		labels: {on: {from:0, to:7}, idle: {from:8, to:11}, off: {from:12, to:40}, disabled: {from:41, to:41}, },
		layers: [
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_ui_candle_bg_0_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.85, ty: 0},
						transform: [-22.85, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 16,
						classname: "_ui_candle_bg_0_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.85, ty: 0},
						transform: [-22.85, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_ui_candle_bg_0_x",
						instancename: "",
						matrix: {a: 0.569, b: 0, c: 0, d: 1, tx: -13.2, ty: 0},
						transform: [-13.2, 0, 0.569, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 41,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 23,
						classname: "_ui_candlebase",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: 7.7},
						transform: [-0.3, 7.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 28,
						classname: "_ui_candlebase",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: 7.7},
						transform: [-0.3, 7.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0], [0.579, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 38,
						classname: "_ui_candlebase",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: 13.25},
						transform: [-0.3, 13.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.457, 0], [0.809, 0.411], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 39,
						classname: "_ui_candlebase",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: -73.2},
						transform: [-0.3, -73.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 40,
						to: 40,
					},
					{
						from: 41,
						to: 41,
					},
				]
			},
			{
				name: "flameall",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_ui_flameall",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.5, ty: -0.75},
						transform: [-0.5, -0.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_ui_flameall",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.5, ty: -0.75},
						transform: [-0.5, -0.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.238, 0.545], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 16,
						classname: "_ui_flameall",
						instancename: "",
						matrix: {a: 1.136, b: 0, c: 0, d: 1.136, tx: -0.5, ty: -0.75},
						transform: [-0.5, -0.75, 1.136, 1.136, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.799, 0.569], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_ui_flameall",
						instancename: "",
						matrix: {a: 0.224, b: 0, c: 0, d: 0.224, tx: -0.25, ty: 0.45},
						transform: [-0.25, 0.45, 0.224, 0.224, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 40,
					},
					{
						from: 41,
						to: 41,
					},
				]
			},
			{
				name: "candle_glow",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_ui_candle_glow",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: -7.95},
						transform: [-1.3, -7.95, 1, 1, 0, 0, 0],
						alpha: 0.5,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_ui_candle_glow",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: -7.95},
						transform: [-1.3, -7.95, 1, 1, 0, 0, 0],
						alpha: 0.5,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 14,
						to: 16,
						classname: "_ui_candle_glow",
						instancename: "",
						matrix: {a: 1.342, b: 0, c: 0, d: 1.342, tx: -0.2, ty: -9.05},
						transform: [-0.2, -9.05, 1.342, 1.342, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_ui_candle_glow",
						instancename: "",
						matrix: {a: 2.129, b: 0, c: 0, d: 2.129, tx: -0.1, ty: -8.95},
						transform: [-0.1, -8.95, 2.129, 2.129, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 41,
					},
				]
			},
			{
				name: "code",
				keys: [
					{
						from: 0,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						actions: function(self){self.stop();},
					},
					{
						from: 12,
						to: 39,
					},
					{
						from: 40,
						to: 40,
						actions: function(self){self.stop();},
					},
					{
						from: 41,
						to: 41,
						actions: function(self){self.stop();},
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 11,
					},
					{
						from: 12,
						to: 40,
					},
					{
						from: 41,
						to: 41,
					},
				]
			},
		]
	},
	"_ui_whity2_x": {
		type: "bitmap",
		asset: "_ui_whity2_x",
		scale: 1,
		position: [-55, -55],
	},
	"_ui_button_bg_seq": {
		type: "movieclip",
		fps: 30,
		totalFrames: 18,
		labels: {loop: {from:1, to:16}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_ui_button_bg_1_x",
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
						classname: "_ui_button_bg_2_x",
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
						classname: "_ui_button_bg_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 7,
						classname: "_ui_button_bg_4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 9,
						classname: "_ui_button_bg_5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 11,
						classname: "_ui_button_bg_6_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_ui_button_bg_7_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 15,
						classname: "_ui_button_bg_8_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 17,
						classname: "_ui_button_bg_9_x",
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 16,
					},
					{
						from: 17,
						to: 17,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_ui_icon_pause_frames": {
		type: "movieclip",
		fps: 30,
		totalFrames: 12,
		labels: {loop: {from:1, to:10}, },
		layers: [
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_ui_icon_pause_frames_1_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_ui_icon_pause_frames_2_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
						classname: "_ui_icon_pause_frames_3_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 8,
						classname: "_ui_icon_pause_frames_4_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 10,
						classname: "_ui_icon_pause_frames_5_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_ui_icon_pause_frames_1_x",
						instancename: "",
						matrix: {a: 0.97, b: 0, c: 0, d: 1.026, tx: 0, ty: 0},
						transform: [0, 0, 0.97, 1.026, 0, 0, 0],
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
						actions: function(self){self.gotoAndPlay(Math.floor(Math.random()*self.totalFrames) + 1);},
					},
					{
						from: 1,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_ui_canlde_bg": {
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
						to: 1,
						classname: "_ui_candle_bg_1_x",
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
						classname: "_ui_candle_bg_2_x",
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
						classname: "_ui_candle_bg_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_ui_candle_bg_4_x",
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
						to: 8,
						actions: function(self){self.gotoAndStop(Math.ceil(Math.random() * 6));},
					},
				]
			},
		]
	},
	"_ui_candlebase": {
		type: "movieclip",
		fps: 30,
		totalFrames: 5,
		labels: {},
		layers: [
			{
				name: "Layer 8",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_ui_candlebase_1_x",
						instancename: "",
						matrix: {a: 0.833, b: 0, c: 0, d: 0.833, tx: 0, ty: 0},
						transform: [0, 0, 0.833, 0.833, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_ui_candlebase_1_x",
						instancename: "",
						matrix: {a: -0.882, b: 0, c: 0, d: 0.882, tx: 0, ty: 0},
						transform: [0, 0, 0.882, 0.882, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_ui_candlebase_1_x",
						instancename: "",
						matrix: {a: 0.937, b: 0.026, c: 0, d: 0.937, tx: 0, ty: 0},
						transform: [0, 0, 0.937, 0.937, 0, 0.028, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_ui_candlebase_1_x",
						instancename: "",
						matrix: {a: -0.966, b: 0, c: 0, d: 0.966, tx: 0, ty: 0},
						transform: [0, 0, 0.966, 0.966, 0, 3.142, NaN],
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
						to: 4,
						actions: function(self){self.gotoAndStop(Math.ceil(Math.random() * 4));},
					},
				]
			},
		]
	},
	"_ui_flameall": {
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
						classname: "_ui_flameseq",
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
						classname: "_ui_flameseq",
						instancename: "",
						matrix: {a: 0.713, b: 0, c: 0, d: 0.887, tx: -0.05, ty: -0.4},
						transform: [-0.05, -0.4, 0.713, 0.887, 0, 0, 0],
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
						classname: "_ui_flameseq",
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
	"_ui_candle_glow": {
		type: "movieclip",
		fps: 30,
		totalFrames: 13,
		labels: {loop: {from:1, to:11}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_ui_candle_glow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 11,
						classname: "_ui_candle_glow_x",
						instancename: "",
						matrix: {a: 1.185, b: 0, c: 0, d: 1.154, tx: 0, ty: 0},
						transform: [0, 0, 1.185, 1.154, 0, 0, 0],
						alpha: 0.84,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_ui_candle_glow_x",
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
						actions: function(self){self.gotoAndPlay(Math.ceil(Math.random() * 10));},
					},
					{
						from: 1,
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
	"_ui_candle_bg_0_x": {
		type: "bitmap",
		asset: "_ui_candle_bg_0_x",
		scale: 1,
		position: [-8.65, -21.55],
	},
	"_ui_button_bg_1_x": {
		type: "bitmap",
		asset: "_ui_button_bg_1_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_ui_button_bg_2_x": {
		type: "bitmap",
		asset: "_ui_button_bg_2_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_ui_button_bg_3_x": {
		type: "bitmap",
		asset: "_ui_button_bg_3_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_ui_button_bg_4_x": {
		type: "bitmap",
		asset: "_ui_button_bg_4_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_ui_button_bg_5_x": {
		type: "bitmap",
		asset: "_ui_button_bg_5_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_ui_button_bg_6_x": {
		type: "bitmap",
		asset: "_ui_button_bg_6_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_ui_button_bg_7_x": {
		type: "bitmap",
		asset: "_ui_button_bg_7_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_ui_button_bg_8_x": {
		type: "bitmap",
		asset: "_ui_button_bg_8_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_ui_button_bg_9_x": {
		type: "bitmap",
		asset: "_ui_button_bg_9_x",
		scale: 1,
		position: [-88.2, -86.4],
	},
	"_ui_icon_pause_frames_1_x": {
		type: "bitmap",
		asset: "_ui_icon_pause_frames_1_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_ui_icon_pause_frames_2_x": {
		type: "bitmap",
		asset: "_ui_icon_pause_frames_2_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_ui_icon_pause_frames_3_x": {
		type: "bitmap",
		asset: "_ui_icon_pause_frames_3_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_ui_icon_pause_frames_4_x": {
		type: "bitmap",
		asset: "_ui_icon_pause_frames_4_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_ui_icon_pause_frames_5_x": {
		type: "bitmap",
		asset: "_ui_icon_pause_frames_5_x",
		scale: 1,
		position: [-19.4, -41.65],
	},
	"_ui_candle_bg_1_x": {
		type: "bitmap",
		asset: "_ui_candle_bg_1_x",
		scale: 1,
		position: [-26.9, -19.55],
	},
	"_ui_candle_bg_2_x": {
		type: "bitmap",
		asset: "_ui_candle_bg_2_x",
		scale: 1,
		position: [-26.9, -21.25],
	},
	"_ui_candle_bg_3_x": {
		type: "bitmap",
		asset: "_ui_candle_bg_3_x",
		scale: 1,
		position: [-26.9, -21.55],
	},
	"_ui_candle_bg_4_x": {
		type: "bitmap",
		asset: "_ui_candle_bg_4_x",
		scale: 1,
		position: [-26.9, -21.55],
	},
	"_ui_candlebase_1_x": {
		type: "bitmap",
		asset: "_ui_candlebase_1_x",
		scale: 1,
		position: [-18.05, -14.3],
	},
	"_ui_flameseq": {
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
						classname: "_ui_flame_1_x",
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
						classname: "_ui_flame_2_x",
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
						classname: "_ui_flame_3_x",
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
						classname: "_ui_flame_4_x",
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
						classname: "_ui_flame_5_x",
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
						classname: "_ui_flame_6_x",
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
						classname: "_ui_flame_7_x",
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
						classname: "_ui_flame_8_x",
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
						classname: "_ui_flame_9_x",
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
						classname: "_ui_flame_10_x",
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
						classname: "_ui_flame_11_x",
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
						classname: "_ui_flame_12_x",
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
						classname: "_ui_flame_13_x",
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
						classname: "_ui_flame_14_x",
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
						classname: "_ui_flame_15_x",
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
						classname: "_ui_flame_16_x",
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
						classname: "_ui_flame_17_x",
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
						classname: "_ui_flame_18_x",
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
						classname: "_ui_flame_19_x",
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
						classname: "_ui_flame_20_x",
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
	"_ui_candle_glow_x": {
		type: "bitmap",
		asset: "_ui_candle_glow_x",
		scale: 1,
		position: [-26.35, -26.8],
	},
	"_ui_flame_1_x": {
		type: "bitmap",
		asset: "_ui_flame_1_x",
		scale: 1,
		position: [-21.05, -35.2],
	},
	"_ui_flame_2_x": {
		type: "bitmap",
		asset: "_ui_flame_2_x",
		scale: 1,
		position: [-21.05, -35.2],
	},
	"_ui_flame_3_x": {
		type: "bitmap",
		asset: "_ui_flame_3_x",
		scale: 1,
		position: [-21.05, -35.2],
	},
	"_ui_flame_4_x": {
		type: "bitmap",
		asset: "_ui_flame_4_x",
		scale: 1,
		position: [-21.05, -35.2],
	},
	"_ui_flame_5_x": {
		type: "bitmap",
		asset: "_ui_flame_5_x",
		scale: 1,
		position: [-21.05, -35.2],
	},
	"_ui_flame_6_x": {
		type: "bitmap",
		asset: "_ui_flame_6_x",
		scale: 1,
		position: [-21.05, -35.2],
	},
	"_ui_flame_7_x": {
		type: "bitmap",
		asset: "_ui_flame_7_x",
		scale: 1,
		position: [-21.05, -35.2],
	},
	"_ui_flame_8_x": {
		type: "bitmap",
		asset: "_ui_flame_8_x",
		scale: 1,
		position: [-21.05, -35.2],
	},
	"_ui_flame_9_x": {
		type: "bitmap",
		asset: "_ui_flame_9_x",
		scale: 1,
		position: [-21.05, -35.2],
	},
	"_ui_flame_10_x": {
		type: "bitmap",
		asset: "_ui_flame_10_x",
		scale: 1,
		position: [-21.05, -35.2],
	},
	"_ui_flame_11_x": {
		type: "bitmap",
		asset: "_ui_flame_11_x",
		scale: 1,
		position: [-21.05, -35.2],
	},
	"_ui_flame_12_x": {
		type: "bitmap",
		asset: "_ui_flame_12_x",
		scale: 1,
		position: [-21.05, -35.2],
	},
	"_ui_flame_13_x": {
		type: "bitmap",
		asset: "_ui_flame_13_x",
		scale: 1,
		position: [-21.05, -35.2],
	},
	"_ui_flame_14_x": {
		type: "bitmap",
		asset: "_ui_flame_14_x",
		scale: 1,
		position: [-21.05, -35.2],
	},
	"_ui_flame_15_x": {
		type: "bitmap",
		asset: "_ui_flame_15_x",
		scale: 1,
		position: [-21.05, -35.2],
	},
	"_ui_flame_16_x": {
		type: "bitmap",
		asset: "_ui_flame_16_x",
		scale: 1,
		position: [-21.05, -35.2],
	},
	"_ui_flame_17_x": {
		type: "bitmap",
		asset: "_ui_flame_17_x",
		scale: 1,
		position: [-21.05, -35.2],
	},
	"_ui_flame_18_x": {
		type: "bitmap",
		asset: "_ui_flame_18_x",
		scale: 1,
		position: [-21.05, -35.2],
	},
	"_ui_flame_19_x": {
		type: "bitmap",
		asset: "_ui_flame_19_x",
		scale: 1,
		position: [-21.05, -35.2],
	},
	"_ui_flame_20_x": {
		type: "bitmap",
		asset: "_ui_flame_20_x",
		scale: 1,
		position: [-21.05, -35.2],
	},
};
