
var drone = {
	"drone": {
		type: "movieclip",
		fps: 30,
		totalFrames: 42,
		labels: {idle: {from:0, to:6}, attack: {from:7, to:13}, walk: {from:14, to:20}, hurt: {from:21, to:27}, die: {from:28, to:34}, wreck: {from:35, to:41}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "drone_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -108.9},
						transform: [0, -108.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "drone_attack",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -108.9},
						transform: [0, -108.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 20,
						classname: "drone_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -108.9},
						transform: [0, -108.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 27,
						classname: "drone_hurt",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -108.9},
						transform: [0, -108.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 34,
						classname: "drone_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -108.9},
						transform: [0, -108.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 35,
						to: 41,
						classname: "drone_wreck",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -108.9},
						transform: [0, -108.9, 1, 1, 0, 0, 0],
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
						to: 6,
					},
					{
						from: 7,
						to: 13,
					},
					{
						from: 14,
						to: 20,
					},
					{
						from: 21,
						to: 27,
					},
					{
						from: 28,
						to: 34,
					},
					{
						from: 35,
						to: 41,
					},
				]
			},
		]
	},
	"drone_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 30,
		labels: {},
		layers: [
			{
				name: "wingdisc2",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_drone_wingdisc2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -13.75, ty: -36.25},
						transform: [-13.75, -36.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 28,
						classname: "_drone_wingdisc2",
						instancename: "",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: -16.35, ty: -29.4},
						transform: [-16.35, -29.4, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_drone_wingdisc2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -13.75, ty: -36.25},
						transform: [-13.75, -36.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.782, b: -0.623, c: 0.623, d: 0.782, tx: 55.4, ty: 12.75},
						transform: [55.4, 12.75, 1, 1, 0.673, -0.673, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 28,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.584, b: -0.812, c: 0.812, d: 0.584, tx: 55.05, ty: 22.85},
						transform: [55.05, 22.85, 1, 1, 0.947, -0.947, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.782, b: -0.623, c: 0.623, d: 0.782, tx: 55.4, ty: 12.75},
						transform: [55.4, 12.75, 1, 1, 0.673, -0.673, NaN],
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
						to: 14,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.959, b: -0.284, c: 0.284, d: 0.959, tx: 52.75, ty: 16.65},
						transform: [52.75, 16.65, 1, 1, 0.288, -0.288, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 28,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.893, b: -0.449, c: 0.449, d: 0.893, tx: 52.45, ty: 26.65},
						transform: [52.45, 26.65, 1, 1, 0.466, -0.466, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.959, b: -0.284, c: 0.284, d: 0.959, tx: 52.75, ty: 16.65},
						transform: [52.75, 16.65, 1, 1, 0.288, -0.288, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 21,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.75, b: 0.662, c: -0.662, d: 0.75, tx: -59.25, ty: 10.35},
						transform: [-59.25, 10.35, 1, 1, -0.723, 0.723, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 28,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.603, b: 0.797, c: -0.797, d: 0.603, tx: -59.3, ty: 18.35},
						transform: [-59.3, 18.35, 1, 1, -0.923, 0.923, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.75, b: 0.662, c: -0.662, d: 0.75, tx: -59.25, ty: 10.35},
						transform: [-59.25, 10.35, 1, 1, -0.723, 0.723, NaN],
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
						to: 18,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.904, b: 0.426, c: -0.426, d: 0.904, tx: -57.4, ty: 16.65},
						transform: [-57.4, 16.65, 1, 1, -0.441, 0.441, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 28,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.868, b: 0.496, c: -0.496, d: 0.868, tx: -57.65, ty: 24.65},
						transform: [-57.65, 24.65, 1, 1, -0.519, 0.519, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.904, b: 0.426, c: -0.426, d: 0.904, tx: -57.4, ty: 16.65},
						transform: [-57.4, 16.65, 1, 1, -0.441, 0.441, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "saw_stick2_x",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_drone_saw_saw_stick2_x",
						instancename: "",
						matrix: {a: 0.545, b: -0.838, c: 0.838, d: 0.545, tx: 14.95, ty: -20.8},
						transform: [14.95, -20.8, 1, 1, 0.994, -0.994, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 28,
						classname: "_drone_saw_saw_stick2_x",
						instancename: "",
						matrix: {a: 0.609, b: -0.793, c: 0.793, d: 0.609, tx: 11.85, ty: -11.5},
						transform: [11.85, -11.5, 1, 1, 0.916, -0.916, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_drone_saw_saw_stick2_x",
						instancename: "",
						matrix: {a: 0.545, b: -0.838, c: 0.838, d: 0.545, tx: 14.95, ty: -20.8},
						transform: [14.95, -20.8, 1, 1, 0.994, -0.994, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body_down_x",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_drone_body_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1, ty: -1},
						transform: [-1, -1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 28,
						classname: "_drone_body_down_x",
						instancename: "",
						matrix: {a: 1, b: 0.01, c: -0.01, d: 1, tx: -0.75, ty: 8},
						transform: [-0.75, 8, 1, 1, -0.01, 0.01, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_drone_body_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1, ty: -1},
						transform: [-1, -1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "wingdisc",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_drone_wingdisc",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -15.65, ty: 35.25},
						transform: [-15.65, 35.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 28,
						classname: "_drone_wingdisc",
						instancename: "",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: -19, ty: 46.7},
						transform: [-19, 46.7, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_drone_wingdisc",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -15.65, ty: 35.25},
						transform: [-15.65, 35.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "saw_stick_x",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_drone_saw_saw_stick_x",
						instancename: "",
						matrix: {a: 0.564, b: 0.826, c: -0.826, d: 0.564, tx: 22.8, ty: 6.9},
						transform: [22.8, 6.9, 1, 1, -0.972, 0.972, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 28,
						classname: "_drone_saw_saw_stick_x",
						instancename: "",
						matrix: {a: 0.616, b: 0.788, c: -0.788, d: 0.616, tx: 17.95, ty: 16.25},
						transform: [17.95, 16.25, 1, 1, -0.907, 0.907, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_drone_saw_saw_stick_x",
						instancename: "",
						matrix: {a: 0.564, b: 0.826, c: -0.826, d: 0.564, tx: 22.8, ty: 6.9},
						transform: [22.8, 6.9, 1, 1, -0.972, 0.972, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body_up_x",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "_drone_body_up_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1, ty: -18.35},
						transform: [-1, -18.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 28,
						classname: "_drone_body_up_x",
						instancename: "",
						matrix: {a: 1, b: -0.012, c: 0.012, d: 1, tx: -0.65, ty: -9.3},
						transform: [-0.65, -9.3, 1, 1, 0.012, -0.012, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_drone_body_up_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1, ty: -18.35},
						transform: [-1, -18.35, 1, 1, 0, 0, 0],
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
						to: 14,
						classname: "_drone_eyerelated_eye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -52.4, ty: 7.15},
						transform: [-52.4, 7.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 28,
						classname: "_drone_eyerelated_eye",
						instancename: "",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: -51.95, ty: 16.9},
						transform: [-51.95, 16.9, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_drone_eyerelated_eye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -52.4, ty: 7.15},
						transform: [-52.4, 7.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"drone_attack": {
		type: "movieclip",
		fps: 30,
		totalFrames: 38,
		labels: {},
		layers: [
			{
				name: "wingdisc2",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_drone_wingdisc2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -13.75, ty: -36.25},
						transform: [-13.75, -36.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_drone_wingdisc2",
						instancename: "",
						matrix: {a: 0.994, b: -0.109, c: 0.109, d: 0.994, tx: -56.1, ty: -31.4},
						transform: [-56.1, -31.4, 1, 1, 0.109, -0.109, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.837, 0.438], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_drone_wingdisc2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 38.5, ty: -36.25},
						transform: [38.5, -36.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_drone_wingdisc2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 152, ty: -18.05},
						transform: [152, -18.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.163, 0.366], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 22,
						classname: "_drone_wingdisc2",
						instancename: "",
						matrix: {a: 1, b: 0.03, c: -0.03, d: 1, tx: 162.15, ty: -14.8},
						transform: [162.15, -14.8, 1, 1, -0.03, 0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.281], [0.496, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 26,
						classname: "_drone_wingdisc2",
						instancename: "",
						matrix: {a: 0.999, b: -0.034, c: 0.034, d: 0.999, tx: 161, ty: -14.4},
						transform: [161, -14.4, 1, 1, 0.034, -0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.481, 0], [0.77, 0.446], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_drone_wingdisc2",
						instancename: "",
						matrix: {a: 1, b: -0.022, c: 0.022, d: 1, tx: 118.3, ty: -27.4},
						transform: [118.3, -27.4, 1, 1, 0.022, -0.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.359, 0.319], [0.681, 0.662], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 31,
						classname: "_drone_wingdisc2",
						instancename: "",
						matrix: {a: 1, b: -0.014, c: 0.014, d: 1, tx: 27.1, ty: -44.1},
						transform: [27.1, -44.1, 1, 1, 0.014, -0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.36], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 36,
						classname: "_drone_wingdisc2",
						instancename: "",
						matrix: {a: 0.999, b: 0.048, c: -0.048, d: 0.999, tx: -20.95, ty: -38},
						transform: [-20.95, -38, 1, 1, -0.048, 0.048, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 37,
						to: 37,
						classname: "_drone_wingdisc2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -13.75, ty: -36.25},
						transform: [-13.75, -36.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.782, b: -0.623, c: 0.623, d: 0.782, tx: 55.4, ty: 12.75},
						transform: [55.4, 12.75, 1, 1, 0.673, -0.673, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.234, b: -0.972, c: 0.972, d: 0.234, tx: 50.15, ty: 6.5},
						transform: [50.15, 6.5, 1, 1, 1.335, -1.335, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.837, 0.438], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.591, b: 0.807, c: -0.807, d: 0.591, tx: 86, ty: 12.65},
						transform: [86, 12.65, 1, 1, -0.938, 0.938, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.783, b: 0.622, c: -0.622, d: 0.783, tx: 96.1, ty: 12.6},
						transform: [96.1, 12.6, 1, 1, -0.671, 0.671, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.163, 0.366], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 22,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.801, b: -0.599, c: 0.599, d: 0.801, tx: 103.3, ty: 15.7},
						transform: [103.3, 15.7, 1, 1, 0.642, -0.642, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.281], [0.496, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 31,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.761, b: -0.649, c: 0.649, d: 0.761, tx: 103.55, ty: 19.95},
						transform: [103.55, 19.95, 1, 1, 0.707, -0.707, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.565, 0], [0.535, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 36,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.919, b: -0.394, c: 0.394, d: 0.919, tx: 53.95, ty: 12.2},
						transform: [53.95, 12.2, 1, 1, 0.405, -0.405, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 37,
						to: 37,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.782, b: -0.623, c: 0.623, d: 0.782, tx: 55.4, ty: 12.75},
						transform: [55.4, 12.75, 1, 1, 0.673, -0.673, NaN],
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
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.959, b: -0.284, c: 0.284, d: 0.959, tx: 52.75, ty: 16.65},
						transform: [52.75, 16.65, 1, 1, 0.288, -0.288, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.633, b: -0.774, c: 0.774, d: 0.633, tx: 48, ty: 10.45},
						transform: [48, 10.45, 1, 1, 0.885, -0.885, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.837, 0.438], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.836, b: 0.548, c: -0.548, d: 0.836, tx: 82.7, ty: 16.55},
						transform: [82.7, 16.55, 1, 1, -0.58, 0.58, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.938, b: 0.346, c: -0.346, d: 0.938, tx: 92.8, ty: 16.55},
						transform: [92.8, 16.55, 1, 1, -0.353, 0.353, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.163, 0.366], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 22,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.875, b: -0.484, c: 0.484, d: 0.875, tx: 100.5, ty: 19.5},
						transform: [100.5, 19.5, 1, 1, 0.506, -0.506, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.281], [0.496, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 31,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.949, b: -0.316, c: 0.316, d: 0.949, tx: 101.05, ty: 23.95},
						transform: [101.05, 23.95, 1, 1, 0.322, -0.322, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.565, 0], [0.535, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 36,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.975, b: -0.221, c: 0.221, d: 0.975, tx: 48.4, ty: 18.2},
						transform: [48.4, 18.2, 1, 1, 0.223, -0.223, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 37,
						to: 37,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.959, b: -0.284, c: 0.284, d: 0.959, tx: 52.75, ty: 16.65},
						transform: [52.75, 16.65, 1, 1, 0.288, -0.288, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.75, b: 0.662, c: -0.662, d: 0.75, tx: -59.25, ty: 10.35},
						transform: [-59.25, 10.35, 1, 1, -0.723, 0.723, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.971, b: -0.238, c: 0.238, d: 0.971, tx: -64.4, ty: 16.2},
						transform: [-64.4, 16.2, 1, 1, 0.24, -0.24, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.837, 0.438], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.75, b: 0.662, c: -0.662, d: 0.75, tx: -34.15, ty: 7.85},
						transform: [-34.15, 7.85, 1, 1, -0.723, 0.723, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.61, b: 0.793, c: -0.793, d: 0.61, tx: -22.45, ty: 10.7},
						transform: [-22.45, 10.7, 1, 1, -0.915, 0.915, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.163, 0.366], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 22,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.887, b: -0.463, c: 0.463, d: 0.887, tx: -8.25, ty: 12.7},
						transform: [-8.25, 12.7, 1, 1, 0.481, -0.481, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.281], [0.496, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 31,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.772, b: 0.636, c: -0.636, d: 0.772, tx: -11.05, ty: 21.45},
						transform: [-11.05, 21.45, 1, 1, -0.689, 0.689, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.565, 0], [0.535, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 36,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.834, b: -0.552, c: 0.552, d: 0.834, tx: -63.8, ty: 6.45},
						transform: [-63.8, 6.45, 1, 1, 0.585, -0.585, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 37,
						to: 37,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.75, b: 0.662, c: -0.662, d: 0.75, tx: -59.25, ty: 10.35},
						transform: [-59.25, 10.35, 1, 1, -0.723, 0.723, NaN],
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
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.904, b: 0.426, c: -0.426, d: 0.904, tx: -57.4, ty: 16.65},
						transform: [-57.4, 16.65, 1, 1, -0.441, 0.441, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.946, b: -0.325, c: 0.325, d: 0.946, tx: -61.55, ty: 22.35},
						transform: [-61.55, 22.35, 1, 1, 0.331, -0.331, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.837, 0.438], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.711, b: 0.704, c: -0.704, d: 0.711, tx: -27.55, ty: 16.65},
						transform: [-27.55, 16.65, 1, 1, -0.78, 0.78, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.708, b: 0.707, c: -0.707, d: 0.708, tx: -17.35, ty: 16.7},
						transform: [-17.35, 16.7, 1, 1, -0.785, 0.785, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.163, 0.366], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 22,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.986, b: -0.165, c: 0.165, d: 0.986, tx: -9.45, ty: 16.2},
						transform: [-9.45, 16.2, 1, 1, 0.166, -0.166, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.281], [0.496, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 31,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.918, b: 0.395, c: -0.395, d: 0.918, tx: -9, ty: 27.7},
						transform: [-9, 27.7, 1, 1, -0.407, 0.407, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.565, 0], [0.535, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 36,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.182, c: 0.182, d: 0.983, tx: -61.65, ty: 12.9},
						transform: [-61.65, 12.9, 1, 1, 0.183, -0.183, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 37,
						to: 37,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.904, b: 0.426, c: -0.426, d: 0.904, tx: -57.4, ty: 16.65},
						transform: [-57.4, 16.65, 1, 1, -0.441, 0.441, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "saw_stick2_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_drone_saw_saw_stick2_x",
						instancename: "",
						matrix: {a: 0.545, b: -0.838, c: 0.838, d: 0.545, tx: 14.95, ty: -20.8},
						transform: [14.95, -20.8, 1, 1, 0.994, -0.994, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_drone_saw_saw_stick2_x",
						instancename: "",
						matrix: {a: 0.451, b: -0.893, c: 0.893, d: 0.451, tx: -25.9, ty: -19.15},
						transform: [-25.9, -19.15, 1, 1, 1.103, -1.103, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.837, 0.438], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_drone_saw_saw_stick2_x",
						instancename: "",
						matrix: {a: 0.545, b: -0.838, c: 0.838, d: 0.545, tx: 67.2, ty: -20.8},
						transform: [67.2, -20.8, 1, 1, 0.994, -0.994, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_drone_saw_saw_stick3_x",
						instancename: "",
						matrix: {a: 1, b: 0.021, c: -0.021, d: 1, tx: 95.5, ty: -21.7},
						transform: [95.5, -21.7, 1, 1, -0.021, 0.021, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.163, 0.366], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 22,
						classname: "_drone_saw_saw_stick3_x",
						instancename: "",
						matrix: {a: 1, b: 0.03, c: -0.03, d: 1, tx: 104.45, ty: -18.65},
						transform: [104.45, -18.65, 1, 1, -0.03, 0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.281], [0.496, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 26,
						classname: "_drone_saw_saw_stick3_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.034, c: 0.034, d: 0.999, tx: 102.5, ty: -14.4},
						transform: [102.5, -14.4, 1, 1, 0.034, -0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.481, 0], [0.77, 0.446], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_drone_saw_saw_stick3_x",
						instancename: "",
						matrix: {a: 0.756, b: -0.268, c: 0.334, d: 0.941, tx: 72.9, ty: -15.85},
						transform: [72.9, -15.85, 0.802, 0.999, 0.341, -0.341, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.303, 0.431], [0.479, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 31,
						classname: "_drone_saw_saw_stick2_x",
						instancename: "",
						matrix: {a: 0.545, b: -0.838, c: 0.838, d: 0.545, tx: 57.85, ty: -25.9},
						transform: [57.85, -25.9, 1, 1, 0.994, -0.994, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.36], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 36,
						classname: "_drone_saw_saw_stick2_x",
						instancename: "",
						matrix: {a: 0.585, b: -0.811, c: 0.811, d: 0.585, tx: 6.9, ty: -21.2},
						transform: [6.9, -21.2, 1, 1, 0.946, -0.946, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 37,
						to: 37,
						classname: "_drone_saw_saw_stick2_x",
						instancename: "",
						matrix: {a: 0.545, b: -0.838, c: 0.838, d: 0.545, tx: 14.95, ty: -20.8},
						transform: [14.95, -20.8, 1, 1, 0.994, -0.994, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body_down_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_drone_body_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1, ty: -1},
						transform: [-1, -1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_drone_body_down_x",
						instancename: "",
						matrix: {a: 0.994, b: -0.109, c: 0.109, d: 0.994, tx: -7.3, ty: -1.25},
						transform: [-7.3, -1.25, 1, 1, 0.109, -0.109, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.837, 0.438], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_drone_body_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 28.85, ty: -1},
						transform: [28.85, -1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_drone_body_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 39, ty: -1},
						transform: [39, -1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.163, 0.366], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 22,
						classname: "_drone_body_down_x",
						instancename: "",
						matrix: {a: 1, b: 0.03, c: -0.03, d: 1, tx: 47.35, ty: 0.25},
						transform: [47.35, 0.25, 1, 1, -0.03, 0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.281], [0.496, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 31,
						classname: "_drone_body_down_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.034, c: 0.034, d: 0.999, tx: 46.7, ty: 8.1},
						transform: [46.7, 8.1, 1, 1, 0.034, -0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.565, 0], [0.535, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 36,
						classname: "_drone_body_down_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.048, c: -0.048, d: 0.999, tx: -4.4, ty: -1.9},
						transform: [-4.4, -1.9, 1, 1, -0.048, 0.048, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 37,
						to: 37,
						classname: "_drone_body_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1, ty: -1},
						transform: [-1, -1, 1, 1, 0, 0, 0],
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
						to: 5,
						classname: "_drone_eyerelated_eye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -52.4, ty: 7.15},
						transform: [-52.4, 7.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_drone_eyerelated_eye",
						instancename: "",
						matrix: {a: 0.994, b: -0.109, c: 0.109, d: 0.994, tx: -57.5, ty: 12.4},
						transform: [-57.5, 12.4, 1, 1, 0.109, -0.109, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.837, 0.438], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_drone_eyerelated_eye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22.55, ty: 7.15},
						transform: [-22.55, 7.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_drone_eyerelated_eye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -12.4, ty: 7.15},
						transform: [-12.4, 7.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.163, 0.366], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 22,
						classname: "_drone_eyerelated_eye",
						instancename: "",
						matrix: {a: 1, b: 0.03, c: -0.03, d: 1, tx: -4.25, ty: 6.85},
						transform: [-4.25, 6.85, 1, 1, -0.03, 0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.281], [0.496, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 31,
						classname: "_drone_eyerelated_eye",
						instancename: "",
						matrix: {a: 0.999, b: -0.034, c: 0.034, d: 0.999, tx: -4.35, ty: 18},
						transform: [-4.35, 18, 1, 1, 0.034, -0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.565, 0], [0.535, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 36,
						classname: "_drone_eyerelated_eye",
						instancename: "",
						matrix: {a: 0.999, b: 0.048, c: -0.048, d: 0.999, tx: -56.1, ty: 3.7},
						transform: [-56.1, 3.7, 1, 1, -0.048, 0.048, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 37,
						to: 37,
						classname: "_drone_eyerelated_eye",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -52.4, ty: 7.15},
						transform: [-52.4, 7.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "wingdisc",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_drone_wingdisc",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -15.65, ty: 35.25},
						transform: [-15.65, 35.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_drone_wingdisc",
						instancename: "",
						matrix: {a: 0.994, b: -0.109, c: 0.109, d: 0.994, tx: -58.5, ty: 29.95},
						transform: [-58.5, 29.95, 1, 1, 0.109, -0.109, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.837, 0.438], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_drone_wingdisc",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 39, ty: 35.25},
						transform: [39, 35.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_drone_wingdisc",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 152.75, ty: 5.15},
						transform: [152.75, 5.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.163, 0.366], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 22,
						classname: "_drone_wingdisc",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 160, ty: 9.75},
						transform: [160, 9.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.281], [0.496, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 26,
						classname: "_drone_wingdisc",
						instancename: "",
						matrix: {a: 0.999, b: -0.034, c: 0.034, d: 0.999, tx: 160, ty: 11.9},
						transform: [160, 11.9, 1, 1, 0.034, -0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.481, 0], [0.77, 0.446], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_drone_wingdisc",
						instancename: "",
						matrix: {a: 1, b: -0.022, c: 0.022, d: 1, tx: 117.75, ty: 26.35},
						transform: [117.75, 26.35, 1, 1, 0.022, -0.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.359, 0.319], [0.681, 0.662], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 31,
						classname: "_drone_wingdisc",
						instancename: "",
						matrix: {a: 1, b: -0.014, c: 0.014, d: 1, tx: 26.4, ty: 36.6},
						transform: [26.4, 36.6, 1, 1, 0.014, -0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.36], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 36,
						classname: "_drone_wingdisc",
						instancename: "",
						matrix: {a: 0.999, b: 0.048, c: -0.048, d: 0.999, tx: -26.3, ty: 33.25},
						transform: [-26.3, 33.25, 1, 1, -0.048, 0.048, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 37,
						to: 37,
						classname: "_drone_wingdisc",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -15.65, ty: 35.25},
						transform: [-15.65, 35.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "saw_stick_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_drone_saw_saw_stick_x",
						instancename: "",
						matrix: {a: 0.564, b: 0.826, c: -0.826, d: 0.564, tx: 22.8, ty: 6.9},
						transform: [22.8, 6.9, 1, 1, -0.972, 0.972, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_drone_saw_saw_stick_x",
						instancename: "",
						matrix: {a: 0.459, b: 0.888, c: -0.888, d: 0.459, tx: -17.45, ty: 7.7},
						transform: [-17.45, 7.7, 1, 1, -1.094, 1.094, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.837, 0.438], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_drone_saw_saw_stick_x",
						instancename: "",
						matrix: {a: 0.564, b: 0.826, c: -0.826, d: 0.564, tx: 77.45, ty: 6.9},
						transform: [77.45, 6.9, 1, 1, -0.972, 0.972, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_drone_saw_saw_stick3_x",
						instancename: "",
						matrix: {a: 1, b: -0.025, c: 0.025, d: 1, tx: 95.1, ty: 2.9},
						transform: [95.1, 2.9, 1, 1, 0.025, -0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.163, 0.366], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 22,
						classname: "_drone_saw_saw_stick3_x",
						instancename: "",
						matrix: {a: 1, b: 0.03, c: -0.03, d: 1, tx: 103.3, ty: 5.85},
						transform: [103.3, 5.85, 1, 1, -0.03, 0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.281], [0.496, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 26,
						classname: "_drone_saw_saw_stick3_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.034, c: 0.034, d: 0.999, tx: 102.9, ty: 10.1},
						transform: [102.9, 10.1, 1, 1, 0.034, -0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.481, 0], [0.77, 0.446], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_drone_saw_saw_stick3_x",
						instancename: "",
						matrix: {a: 0.745, b: 0.221, c: -0.284, d: 0.958, tx: 75.4, ty: 8.5},
						transform: [75.4, 8.5, 0.777, 0.999, -0.288, 0.288, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.303, 0.431], [0.479, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 31,
						classname: "_drone_saw_saw_stick_x",
						instancename: "",
						matrix: {a: 0.564, b: 0.826, c: -0.826, d: 0.564, tx: 63.85, ty: 11.05},
						transform: [63.85, 11.05, 1, 1, -0.972, 0.972, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.36], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 36,
						classname: "_drone_saw_saw_stick_x",
						instancename: "",
						matrix: {a: 0.524, b: 0.852, c: -0.852, d: 0.524, tx: 13.45, ty: 6.8},
						transform: [13.45, 6.8, 1, 1, -1.02, 1.02, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 37,
						to: 37,
						classname: "_drone_saw_saw_stick_x",
						instancename: "",
						matrix: {a: 0.564, b: 0.826, c: -0.826, d: 0.564, tx: 22.8, ty: 6.9},
						transform: [22.8, 6.9, 1, 1, -0.972, 0.972, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body_up_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_drone_body_up_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1, ty: -18.35},
						transform: [-1, -18.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_drone_body_up_x",
						instancename: "",
						matrix: {a: 0.994, b: -0.109, c: 0.109, d: 0.994, tx: -9.15, ty: -18.5},
						transform: [-9.15, -18.5, 1, 1, 0.109, -0.109, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.837, 0.438], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_drone_body_up_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 28.85, ty: -18.35},
						transform: [28.85, -18.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_drone_body_up_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 39, ty: -18.35},
						transform: [39, -18.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.163, 0.366], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 22,
						classname: "_drone_body_up_x",
						instancename: "",
						matrix: {a: 1, b: 0.03, c: -0.03, d: 1, tx: 47.85, ty: -17.05},
						transform: [47.85, -17.05, 1, 1, -0.03, 0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.146, 0.281], [0.496, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 31,
						classname: "_drone_body_up_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.034, c: 0.034, d: 0.999, tx: 46.1, ty: -9.15},
						transform: [46.1, -9.15, 1, 1, 0.034, -0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.565, 0], [0.535, 1], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 36,
						classname: "_drone_body_up_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.048, c: -0.048, d: 0.999, tx: -3.55, ty: -19.25},
						transform: [-3.55, -19.25, 1, 1, -0.048, 0.048, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.543, 0], [0.567, 1], [1, 1], ],
						}
					},
					{
						from: 37,
						to: 37,
						classname: "_drone_body_up_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1, ty: -18.35},
						transform: [-1, -18.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hitbox",
				keys: [
					{
						from: 0,
						to: 10,
					},
					{
						from: 11,
						to: 14,
						classname: "_drone_boundingbox",
						instancename: "hitbox",
						matrix: {a: 0.569, b: 0, c: 0, d: 0.56, tx: 153.7, ty: -6.95},
						transform: [153.7, -6.95, 0.569, 0.56, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 37,
					},
				]
			},
		]
	},
	"drone_walk": {
		type: "movieclip",
		fps: 30,
		totalFrames: 83,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 40,
						classname: "_drone_walkrotate",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 9},
						transform: [0, 9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.569, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 81,
						classname: "_drone_walkrotate",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -9.9},
						transform: [0, -9.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.569, 1], [1, 1], ],
						}
					},
					{
						from: 82,
						to: 82,
						classname: "_drone_walkrotate",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 9},
						transform: [0, 9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"drone_hurt": {
		type: "movieclip",
		fps: 30,
		totalFrames: 22,
		labels: {},
		layers: [
			{
				name: "wingdisc2",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_drone_wingdisc2",
						instancename: "",
						matrix: {a: 0.995, b: 0.101, c: -0.101, d: 0.995, tx: -8.65, ty: -36.55},
						transform: [-8.65, -36.55, 1, 1, -0.101, 0.101, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.294, 0.371], [0.421, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 11,
						classname: "_drone_wingdisc2",
						instancename: "",
						matrix: {a: 0.881, b: 0.473, c: -0.473, d: 0.881, tx: -6, ty: -42.35},
						transform: [-6, -42.35, 1, 1, -0.493, 0.493, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 16,
						classname: "_drone_wingdisc2",
						instancename: "",
						matrix: {a: 0.999, b: -0.04, c: 0.04, d: 0.999, tx: -30.35, ty: -29.6},
						transform: [-30.35, -29.6, 1, 1, 0.04, -0.04, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.459, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 20,
						classname: "_drone_wingdisc2",
						instancename: "",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: -6.15, ty: -45.4},
						transform: [-6.15, -45.4, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.488, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_drone_wingdisc2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -13.75, ty: -36.25},
						transform: [-13.75, -36.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.789, b: -0.612, c: 0.612, d: 0.789, tx: 54.5, ty: 18.65},
						transform: [54.5, 18.65, 0.998, 0.998, 0.66, -0.66, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.294, 0.371], [0.421, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 11,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.821, b: -0.571, c: 0.571, d: 0.821, tx: 34.25, ty: 35.9},
						transform: [34.25, 35.9, 1, 1, 0.607, -0.607, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 16,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.945, b: 0.328, c: -0.328, d: 0.945, tx: 59, ty: 15.25},
						transform: [59, 15.25, 1, 1, -0.334, 0.334, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.459, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 20,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.625, b: -0.781, c: 0.781, d: 0.625, tx: 55.15, ty: 9.45},
						transform: [55.15, 9.45, 1, 1, 0.896, -0.896, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.488, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.782, b: -0.623, c: 0.623, d: 0.782, tx: 55.4, ty: 12.75},
						transform: [55.4, 12.75, 1, 1, 0.673, -0.673, NaN],
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
						to: 1,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.955, b: -0.292, c: 0.292, d: 0.955, tx: 50.9, ty: 22.25},
						transform: [50.9, 22.25, 0.999, 0.999, 0.297, -0.297, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.294, 0.371], [0.421, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 11,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.945, b: -0.326, c: 0.326, d: 0.945, tx: 27.05, ty: 38.4},
						transform: [27.05, 38.4, 1, 1, 0.332, -0.332, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 16,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.883, b: 0.469, c: -0.469, d: 0.883, tx: 55.95, ty: 19.3},
						transform: [55.95, 19.3, 1, 1, -0.488, 0.488, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.459, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 20,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.924, b: -0.383, c: 0.383, d: 0.924, tx: 52.45, ty: 13.25},
						transform: [52.45, 13.25, 1, 1, 0.393, -0.393, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.488, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.959, b: -0.284, c: 0.284, d: 0.959, tx: 52.75, ty: 16.65},
						transform: [52.75, 16.65, 1, 1, 0.288, -0.288, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.901, b: 0.431, c: -0.431, d: 0.901, tx: -57.3, ty: 8.45},
						transform: [-57.3, 8.45, 0.999, 0.999, -0.446, 0.446, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.294, 0.371], [0.421, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 11,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.825, b: -0.565, c: 0.565, d: 0.825, tx: -66.1, ty: -3.4},
						transform: [-66.1, -3.4, 1, 1, 0.601, -0.601, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 16,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.696, b: 0.718, c: -0.718, d: 0.696, tx: -56.15, ty: 17.65},
						transform: [-56.15, 17.65, 1, 1, -0.801, 0.801, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.459, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 20,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.854, b: 0.521, c: -0.521, d: 0.854, tx: -59.4, ty: 5},
						transform: [-59.4, 5, 1, 1, -0.548, 0.548, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.488, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.75, b: 0.662, c: -0.662, d: 0.75, tx: -59.25, ty: 10.35},
						transform: [-59.25, 10.35, 1, 1, -0.723, 0.723, NaN],
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
						to: 1,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.959, b: 0.28, c: -0.28, d: 0.959, tx: -57.2, ty: 14.05},
						transform: [-57.2, 14.05, 0.999, 0.999, -0.284, 0.284, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.294, 0.371], [0.421, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 11,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.952, b: -0.305, c: 0.305, d: 0.952, tx: -73.05, ty: -0.75},
						transform: [-73.05, -0.75, 1, 1, 0.31, -0.31, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 16,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.897, b: 0.442, c: -0.442, d: 0.897, tx: -54.1, ty: 23.8},
						transform: [-54.1, 23.8, 1, 1, -0.457, 0.457, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.459, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 20,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.146, c: -0.146, d: 0.989, tx: -57.6, ty: 11.3},
						transform: [-57.6, 11.3, 1, 1, -0.147, 0.147, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.488, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.904, b: 0.426, c: -0.426, d: 0.904, tx: -57.4, ty: 16.65},
						transform: [-57.4, 16.65, 1, 1, -0.441, 0.441, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "saw_stick2_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_drone_saw_saw_stick2_x",
						instancename: "",
						matrix: {a: 0.616, b: -0.786, c: 0.786, d: 0.616, tx: 18.1, ty: -18.7},
						transform: [18.1, -18.7, 0.998, 0.998, 0.906, -0.906, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.294, 0.371], [0.421, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 11,
						classname: "_drone_saw_saw_stick2_x",
						instancename: "",
						matrix: {a: 0.84, b: -0.543, c: 0.543, d: 0.84, tx: 12.95, ty: -15.25},
						transform: [12.95, -15.25, 1, 1, 0.573, -0.573, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 16,
						classname: "_drone_saw_saw_stick2_x",
						instancename: "",
						matrix: {a: 0.512, b: -0.859, c: 0.859, d: 0.512, tx: 1.7, ty: -14},
						transform: [1.7, -14, 1, 1, 1.034, -1.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.459, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 20,
						classname: "_drone_saw_saw_stick2_x",
						instancename: "",
						matrix: {a: 0.612, b: -0.791, c: 0.791, d: 0.612, tx: 20.7, ty: -25.35},
						transform: [20.7, -25.35, 1, 1, 0.913, -0.913, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.488, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_drone_saw_saw_stick2_x",
						instancename: "",
						matrix: {a: 0.545, b: -0.838, c: 0.838, d: 0.545, tx: 14.95, ty: -20.8},
						transform: [14.95, -20.8, 1, 1, 0.994, -0.994, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body_down_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_drone_body_down_x",
						instancename: "",
						matrix: {a: 0.996, b: 0.083, c: -0.083, d: 0.996, tx: -0.8, ty: -0.85},
						transform: [-0.8, -0.85, 1, 1, -0.083, 0.083, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.294, 0.371], [0.421, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 11,
						classname: "_drone_body_down_x",
						instancename: "",
						matrix: {a: 0.919, b: 0.394, c: -0.394, d: 0.919, tx: -16.65, ty: -5.05},
						transform: [-16.65, -5.05, 1, 1, -0.405, 0.405, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 16,
						classname: "_drone_body_down_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.04, c: 0.04, d: 0.999, tx: 1.5, ty: 4},
						transform: [1.5, 4, 1, 1, 0.04, -0.04, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.459, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 20,
						classname: "_drone_body_down_x",
						instancename: "",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: -0.95, ty: -5.25},
						transform: [-0.95, -5.25, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.488, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_drone_body_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1, ty: -1},
						transform: [-1, -1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "wingdisc",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_drone_wingdisc",
						instancename: "",
						matrix: {a: 0.995, b: 0.091, c: -0.091, d: 0.995, tx: -15.95, ty: 32.8},
						transform: [-15.95, 32.8, 1, 1, -0.092, 0.092, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.294, 0.371], [0.421, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 11,
						classname: "_drone_wingdisc",
						instancename: "",
						matrix: {a: 0.905, b: 0.425, c: -0.425, d: 0.905, tx: -33.5, ty: 18.4},
						transform: [-33.5, 18.4, 1, 1, -0.439, 0.439, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 16,
						classname: "_drone_wingdisc",
						instancename: "",
						matrix: {a: 0.999, b: -0.04, c: 0.04, d: 0.999, tx: -29.6, ty: 35.65},
						transform: [-29.6, 35.65, 1, 1, 0.04, -0.04, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.459, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 20,
						classname: "_drone_wingdisc",
						instancename: "",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: -10.65, ty: 35.95},
						transform: [-10.65, 35.95, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.488, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_drone_wingdisc",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -15.65, ty: 35.25},
						transform: [-15.65, 35.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "saw_stick_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_drone_saw_saw_stick_x",
						instancename: "",
						matrix: {a: 0.527, b: 0.848, c: -0.848, d: 0.527, tx: 23.85, ty: 6.25},
						transform: [23.85, 6.25, 0.998, 0.998, -1.015, 1.015, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.294, 0.371], [0.421, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 11,
						classname: "_drone_saw_saw_stick_x",
						instancename: "",
						matrix: {a: 0.384, b: 0.923, c: -0.923, d: 0.384, tx: 10.95, ty: -1.15},
						transform: [10.95, -1.15, 1, 1, -1.177, 1.177, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 16,
						classname: "_drone_saw_saw_stick_x",
						instancename: "",
						matrix: {a: 0.467, b: 0.884, c: -0.884, d: 0.467, tx: 10.35, ty: 12.7},
						transform: [10.35, 12.7, 1, 1, -1.085, 1.085, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.459, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 20,
						classname: "_drone_saw_saw_stick_x",
						instancename: "",
						matrix: {a: 0.657, b: 0.754, c: -0.754, d: 0.657, tx: 22.65, ty: 3},
						transform: [22.65, 3, 1, 1, -0.854, 0.854, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.488, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_drone_saw_saw_stick_x",
						instancename: "",
						matrix: {a: 0.564, b: 0.826, c: -0.826, d: 0.564, tx: 22.8, ty: 6.9},
						transform: [22.8, 6.9, 1, 1, -0.972, 0.972, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body_up_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_drone_body_up_x",
						instancename: "",
						matrix: {a: 0.996, b: 0.083, c: -0.083, d: 0.996, tx: 0.65, ty: -17.9},
						transform: [0.65, -17.9, 1, 1, -0.083, 0.083, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.294, 0.371], [0.421, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 11,
						classname: "_drone_body_up_x",
						instancename: "",
						matrix: {a: 0.919, b: 0.394, c: -0.394, d: 0.919, tx: -9.85, ty: -21},
						transform: [-9.85, -21, 1, 1, -0.405, 0.405, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 16,
						classname: "_drone_body_up_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.04, c: 0.04, d: 0.999, tx: 0.8, ty: -13.3},
						transform: [0.8, -13.3, 1, 1, 0.04, -0.04, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.459, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 20,
						classname: "_drone_body_up_x",
						instancename: "",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: -0.65, ty: -22.6},
						transform: [-0.65, -22.6, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.488, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_drone_body_up_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1, ty: -18.35},
						transform: [-1, -18.35, 1, 1, 0, 0, 0],
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
						to: 1,
						classname: "_drone_eyerelated_eye_hurt",
						instancename: "",
						matrix: {a: 0.996, b: 0.083, c: -0.083, d: 0.996, tx: -52, ty: 2.95},
						transform: [-52, 2.95, 1, 1, -0.083, 0.083, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.294, 0.371], [0.421, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 11,
						classname: "_drone_eyerelated_eye_hurt",
						instancename: "",
						matrix: {a: 0.919, b: 0.394, c: -0.394, d: 0.919, tx: -67.1, ty: -17.8},
						transform: [-67.1, -17.8, 1, 1, -0.405, 0.405, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 16,
						classname: "_drone_eyerelated_eye_hurt",
						instancename: "",
						matrix: {a: 0.999, b: -0.04, c: 0.04, d: 0.999, tx: -49.45, ty: 14.15},
						transform: [-49.45, 14.15, 1, 1, 0.04, -0.04, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.459, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 20,
						classname: "_drone_eyerelated_eye_hurt",
						instancename: "",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: -52.45, ty: 2},
						transform: [-52.45, 2, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.488, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_drone_eyerelated_eye_hurt",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -52.4, ty: 7.15},
						transform: [-52.4, 7.15, 1, 1, 0, 0, 0],
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
						to: 4,
						classname: "_drone_eyerelated_corto2",
						instancename: "",
						matrix: {a: -0.252, b: 0.656, c: -0.656, d: -0.252, tx: 59.75, ty: 10.45},
						transform: [59.75, 10.45, 0.702, 0.702, -1.938, 1.938, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 21,
					},
				]
			},
		]
	},
	"drone_die": {
		type: "movieclip",
		fps: 30,
		totalFrames: 9,
		labels: {},
		layers: [
			{
				name: "wingdisc2",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_drone_saw_saw_wing_x",
						instancename: "",
						matrix: {a: 0.65, b: 0.445, c: -0.502, d: 0.733, tx: -13.65, ty: -45.6},
						transform: [-13.65, -45.6, 0.787, 0.888, -0.601, 0.601, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_drone_saw_saw_wing_x",
						instancename: "",
						matrix: {a: 0.78, b: 0.106, c: -0.12, d: 0.88, tx: -17.1, ty: -42.15},
						transform: [-17.1, -42.15, 0.787, 0.888, -0.135, 0.135, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_drone_saw_saw_wing_x",
						instancename: "",
						matrix: {a: 0.65, b: 0.445, c: -0.502, d: 0.733, tx: -13.65, ty: -45.6},
						transform: [-13.65, -45.6, 0.787, 0.888, -0.601, 0.601, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.782, b: -0.623, c: 0.623, d: 0.782, tx: 53.6, ty: 21.25},
						transform: [53.6, 21.25, 1, 1, 0.673, -0.673, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.254, b: -0.967, c: 0.967, d: 0.254, tx: 52.2, ty: 24.6},
						transform: [52.2, 24.6, 1, 1, 1.314, -1.314, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.782, b: -0.623, c: 0.623, d: 0.782, tx: 53.6, ty: 21.25},
						transform: [53.6, 21.25, 1, 1, 0.673, -0.673, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
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
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 1, b: -0.026, c: 0.026, d: 1, tx: 44.85, ty: 26.05},
						transform: [44.85, 26.05, 1, 1, 0.026, -0.026, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.936, b: 0.353, c: -0.353, d: 0.936, tx: 43.6, ty: 28.65},
						transform: [43.6, 28.65, 1, 1, -0.361, 0.361, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 1, b: -0.026, c: 0.026, d: 1, tx: 44.85, ty: 26.05},
						transform: [44.85, 26.05, 1, 1, 0.026, -0.026, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.75, b: 0.662, c: -0.662, d: 0.75, tx: -59.25, ty: 10.35},
						transform: [-59.25, 10.35, 1, 1, -0.723, 0.723, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.323, b: 0.946, c: -0.946, d: 0.323, tx: -59.1, ty: 10.5},
						transform: [-59.1, 10.5, 1, 1, -1.242, 1.242, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_drone_leg2_x",
						instancename: "",
						matrix: {a: 0.75, b: 0.662, c: -0.662, d: 0.75, tx: -59.25, ty: 10.35},
						transform: [-59.25, 10.35, 1, 1, -0.723, 0.723, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
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
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.904, b: 0.426, c: -0.426, d: 0.904, tx: -57.4, ty: 16.65},
						transform: [-57.4, 16.65, 1, 1, -0.441, 0.441, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.988, b: 0.157, c: -0.157, d: 0.988, tx: -57.45, ty: 16.65},
						transform: [-57.45, 16.65, 1, 1, -0.158, 0.158, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 0.904, b: 0.426, c: -0.426, d: 0.904, tx: -57.4, ty: 16.65},
						transform: [-57.4, 16.65, 1, 1, -0.441, 0.441, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "saw_stick2_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_drone_saw_saw_stick_die_x",
						instancename: "",
						matrix: {a: -0.862, b: 0.508, c: -0.508, d: -0.862, tx: 10.1, ty: -5.5},
						transform: [10.1, -5.5, 1, 1, -2.609, 2.609, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 7,
						classname: "_drone_saw_saw_stick_die_x",
						instancename: "",
						matrix: {a: -0.755, b: 0.656, c: -0.656, d: -0.755, tx: 13.45, ty: -7},
						transform: [13.45, -7, 1, 1, -2.426, 2.426, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_drone_saw_saw_stick_die_x",
						instancename: "",
						matrix: {a: -0.862, b: 0.508, c: -0.508, d: -0.862, tx: 10.1, ty: -5.5},
						transform: [10.1, -5.5, 1, 1, -2.609, 2.609, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body_down_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_drone_bodydiw_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1, ty: -1},
						transform: [-1, -1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 7,
						classname: "_drone_bodydiw_down_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.039, c: -0.039, d: 0.999, tx: -1.25, ty: -0.1},
						transform: [-1.25, -0.1, 1, 1, -0.039, 0.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_drone_bodydiw_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1, ty: -1},
						transform: [-1, -1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "wingdisc",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_drone_saw_saw_wing_x",
						instancename: "",
						matrix: {a: 0.885, b: -0.465, c: 0.465, d: 0.885, tx: -20.75, ty: 50.9},
						transform: [-20.75, 50.9, 1, 1, 0.484, -0.484, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 7,
						classname: "_drone_saw_saw_wing_x",
						instancename: "",
						matrix: {a: 0.927, b: -0.374, c: 0.374, d: 0.927, tx: -15.85, ty: 52.6},
						transform: [-15.85, 52.6, 1, 1, 0.383, -0.383, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_drone_saw_saw_wing_x",
						instancename: "",
						matrix: {a: 0.885, b: -0.465, c: 0.465, d: 0.885, tx: -20.75, ty: 50.9},
						transform: [-20.75, 50.9, 1, 1, 0.484, -0.484, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "saw_stick_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_drone_saw_saw_stick_die_x",
						instancename: "",
						matrix: {a: 0.883, b: 0.469, c: -0.469, d: 0.883, tx: 0.05, ty: 7.9},
						transform: [0.05, 7.9, 1, 1, -0.488, 0.488, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 7,
						classname: "_drone_saw_saw_stick_die_x",
						instancename: "",
						matrix: {a: 0.947, b: 0.321, c: -0.321, d: 0.947, tx: -2.25, ty: 6.8},
						transform: [-2.25, 6.8, 1, 1, -0.327, 0.327, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_drone_saw_saw_stick_die_x",
						instancename: "",
						matrix: {a: 0.883, b: 0.469, c: -0.469, d: 0.883, tx: 0.05, ty: 7.9},
						transform: [0.05, 7.9, 1, 1, -0.488, 0.488, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_drone_eyerelated_corto1",
						instancename: "",
						matrix: {a: -1.343, b: -0.426, c: 0.377, d: -1.187, tx: 52.6, ty: -0.5},
						transform: [52.6, -0.5, 1.409, 1.246, 2.834, -2.834, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_drone_eyerelated_corto1",
						instancename: "",
						matrix: {a: -1.326, b: -0.478, c: 0.422, d: -1.172, tx: 52.25, ty: 2.45},
						transform: [52.25, 2.45, 1.409, 1.246, 2.796, -2.796, NaN],
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
						classname: "_drone_eyerelated_corto1",
						instancename: "",
						matrix: {a: -1.343, b: -0.426, c: 0.377, d: -1.187, tx: 52.6, ty: -0.5},
						transform: [52.6, -0.5, 1.409, 1.246, 2.834, -2.834, NaN],
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
				name: "body_up_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_drone_body_die_up_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1, ty: -18.35},
						transform: [-1, -18.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_drone_body_die_up_x",
						instancename: "",
						matrix: {a: 0.984, b: -0.178, c: 0.178, d: 0.984, tx: -4.25, ty: -23.2},
						transform: [-4.25, -23.2, 1, 1, 0.179, -0.179, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_drone_body_die_up_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1, ty: -18.35},
						transform: [-1, -18.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
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
						classname: "_drone_eyerelated_corto2",
						instancename: "",
						matrix: {a: 0.607, b: 0, c: 0, d: 0.607, tx: -0.95, ty: -0.95},
						transform: [-0.95, -0.95, 0.607, 0.607, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_drone_eyerelated_corto2",
						instancename: "",
						matrix: {a: 0.607, b: 0, c: 0, d: 0.607, tx: -0.95, ty: -0.95},
						transform: [-0.95, -0.95, 0.607, 0.607, 0, 0, 0],
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
						classname: "_drone_eyerelated_corto2",
						instancename: "",
						matrix: {a: 0.607, b: 0, c: 0, d: 0.607, tx: -0.95, ty: -0.95},
						transform: [-0.95, -0.95, 0.607, 0.607, 0, 0, 0],
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
				name: "eye",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_drone_eyerelated_eye_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -52.4, ty: 7.15},
						transform: [-52.4, 7.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_drone_eyerelated_eye_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -52.4, ty: 7.15},
						transform: [-52.4, 7.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_drone_eyerelated_eye_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -52.4, ty: 7.15},
						transform: [-52.4, 7.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.511, 0], [0.453, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"drone_wreck": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "drone_part_3",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_drone_drone_part_3",
						instancename: "drone_1_part_3",
						matrix: {a: -0.413, b: 0.911, c: -0.911, d: -0.413, tx: -2.25, ty: -30.1},
						transform: [-2.25, -30.1, 1, 1, -1.997, 1.997, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "drone_part_4",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_drone_drone_part_4",
						instancename: "drone_1_part_5",
						matrix: {a: 0.944, b: -0.329, c: 0.329, d: 0.944, tx: 45.75, ty: 37.25},
						transform: [45.75, 37.25, 1, 1, 0.335, -0.335, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "drone_part_4",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_drone_drone_part_4",
						instancename: "drone_1_part_5",
						matrix: {a: 0.653, b: -0.757, c: 0.757, d: 0.653, tx: 54.55, ty: 20.25},
						transform: [54.55, 20.25, 1, 1, 0.859, -0.859, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "drone_part_4",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_drone_drone_part_4",
						instancename: "drone_1_part_5",
						matrix: {a: 0.618, b: 0.786, c: -0.786, d: 0.618, tx: -61.85, ty: 24},
						transform: [-61.85, 24, 1, 1, -0.905, 0.905, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "drone_part_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_drone_drone_part_1",
						instancename: "drone_1_part_4",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: 4.45},
						transform: [-0.15, 4.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "drone_part_3",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_drone_drone_part_3",
						instancename: "drone_1_part_3",
						matrix: {a: 0.708, b: 0.707, c: -0.707, d: 0.708, tx: -1.75, ty: 22.25},
						transform: [-1.75, 22.25, 1, 1, -0.785, 0.785, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "drone_part_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_drone_drone_part_2",
						instancename: "drone_1_part_2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.85, ty: -18.05},
						transform: [-1.85, -18.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "drone_part_5",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_drone_drone_part_5",
						instancename: "drone_1_part_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -59.25, ty: 22.75},
						transform: [-59.25, 22.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_drone_wingdisc2": {
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
						classname: "_drone_wingdisc",
						instancename: "",
						matrix: {a: 0.888, b: 0, c: 0, d: 0.888, tx: 0, ty: 0},
						transform: [0, 0, 0.888, 0.888, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_drone_leg2_x": {
		type: "bitmap",
		asset: "_drone_leg2_x",
		scale: 1,
		position: [-9.7, -16.4],
	},
	"_drone_leg_x": {
		type: "bitmap",
		asset: "_drone_leg_x",
		scale: 1,
		position: [-11.05, -19.55],
	},
	"_drone_saw_saw_stick2_x": {
		type: "bitmap",
		asset: "_drone_saw_saw_stick2_x",
		scale: 1,
		position: [-13.35, -43.2],
	},
	"_drone_body_down_x": {
		type: "bitmap",
		asset: "_drone_body_down_x",
		scale: 1,
		position: [-70.25, -16.85],
	},
	"_drone_wingdisc": {
		type: "movieclip",
		fps: 30,
		totalFrames: 4,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_drone_saw_saw_wing_x",
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
						classname: "_drone_saw_saw_wing_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_drone_saw_saw_wing_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.4, ty: 0},
						transform: [-0.4, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_drone_saw_saw_wing_x",
						instancename: "",
						matrix: {a: -0.984, b: 0, c: 0, d: 0.984, tx: 0.2, ty: -0.4},
						transform: [0.2, -0.4, 0.984, 0.984, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_drone_saw_saw_stick_x": {
		type: "bitmap",
		asset: "_drone_saw_saw_stick_x",
		scale: 1,
		position: [-8.9, -13.35],
	},
	"_drone_body_up_x": {
		type: "bitmap",
		asset: "_drone_body_up_x",
		scale: 1,
		position: [-70.05, -16.85],
	},
	"_drone_eyerelated_eye": {
		type: "movieclip",
		fps: 30,
		totalFrames: 17,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 16,
						classname: "_drone_eyerelated_eyered_x",
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
						classname: "_drone_eyerelated_eyered_glow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.458, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 15,
						classname: "_drone_eyerelated_eyered_glow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.7,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.458, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_drone_eyerelated_eyered_glow_x",
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
	"_drone_saw_saw_stick3_x": {
		type: "bitmap",
		asset: "_drone_saw_saw_stick3_x",
		scale: 1,
		position: [-13, -7.2],
	},
	"_drone_boundingbox": {
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
						classname: "_drone_bound_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.05, ty: 0},
						transform: [-0.05, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_drone_walkrotate": {
		type: "movieclip",
		fps: 30,
		totalFrames: 60,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 14,
						classname: "drone_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.156, 0.329], [0.545, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 28,
						classname: "drone_idle",
						instancename: "",
						matrix: {a: 0.998, b: 0.07, c: -0.07, d: 0.998, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, -0.07, 0.07, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.384], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 43,
						classname: "drone_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.178, 0.4], [0.467, 1], [1, 1], ],
						}
					},
					{
						from: 44,
						to: 58,
						classname: "drone_idle",
						instancename: "",
						matrix: {a: 0.999, b: -0.031, c: 0.031, d: 0.999, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0.031, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.75, 0.545], [1, 1], ],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "drone_idle",
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
	"_drone_eyerelated_eye_hurt": {
		type: "movieclip",
		fps: 30,
		totalFrames: 34,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 33,
						classname: "_drone_eyerelated_eyered_x",
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
						to: 5,
						classname: "_drone_eyerelated_eyered_glow_x",
						instancename: "",
						matrix: {a: 1.464, b: 0, c: 0, d: 0.236, tx: 0.4, ty: 0.6},
						transform: [0.4, 0.6, 1.464, 0.236, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.458, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 13,
						classname: "_drone_eyerelated_eyered_glow_x",
						instancename: "",
						matrix: {a: 1.464, b: 0, c: 0, d: 0.159, tx: 0.4, ty: 0.6},
						transform: [0.4, 0.6, 1.464, 0.159, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 16,
						classname: "_drone_eyerelated_eyered_glow_x",
						instancename: "",
						matrix: {a: 1.464, b: 0, c: 0, d: 0.159, tx: 0.4, ty: 0.6},
						transform: [0.4, 0.6, 1.464, 0.159, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.458, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 18,
						classname: "_drone_eyerelated_eyered_glow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.2, ty: 0.05},
						transform: [0.2, 0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.458, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 21,
						classname: "_drone_eyerelated_eyered_glow_x",
						instancename: "",
						matrix: {a: 1.464, b: 0, c: 0, d: 0.159, tx: 0.4, ty: 0.6},
						transform: [0.4, 0.6, 1.464, 0.159, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.458, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 33,
						classname: "_drone_eyerelated_eyered_glow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.2, ty: 0.05},
						transform: [0.2, 0.05, 1, 1, 0, 0, 0],
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
					},
					{
						from: 33,
						to: 33,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_drone_eyerelated_corto2": {
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
						classname: "_drone_eyerelated_corto2_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.1, ty: -0.05},
						transform: [-1.1, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_drone_eyerelated_corto2_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -11.6, ty: 6.05},
						transform: [-11.6, 6.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_drone_eyerelated_corto2_1_x",
						instancename: "",
						matrix: {a: -0.874, b: 0.519, c: 0.421, d: 0.708, tx: -10.05, ty: 5.15},
						transform: [-10.05, 5.15, 1.016, 0.824, 0.536, 2.606, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
						classname: "_drone_eyerelated_corto2_2_x",
						instancename: "",
						matrix: {a: -0.94, b: 0.342, c: 0.342, d: 0.94, tx: -0.6, ty: 3.15},
						transform: [-0.6, 3.15, 1, 1, 0.349, 2.793, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_drone_eyerelated_corto2_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.1, ty: -0.05},
						transform: [-1.1, -0.05, 1, 1, 0, 0, 0],
						alpha: 0.42,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
						classname: "_drone_eyerelated_corto2_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.1, ty: -0.05},
						transform: [-1.1, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_drone_saw_saw_wing_x": {
		type: "bitmap",
		asset: "_drone_saw_saw_wing_x",
		scale: 1,
		position: [-38.6, -38.6],
	},
	"_drone_saw_saw_stick_die_x": {
		type: "bitmap",
		asset: "_drone_saw_saw_stick_die_x",
		scale: 1,
		position: [-12.1, -13.35],
	},
	"_drone_bodydiw_down_x": {
		type: "bitmap",
		asset: "_drone_bodydiw_down_x",
		scale: 1,
		position: [-70.9, -23.8],
	},
	"_drone_eyerelated_corto1": {
		type: "movieclip",
		fps: 30,
		totalFrames: 18,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_drone_eyerelated_corto1_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.1, ty: -0.05},
						transform: [-1.1, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 3,
						classname: "_drone_eyerelated_corto1_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.1, ty: -0.05},
						transform: [-1.1, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_drone_eyerelated_corto1_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: -1.1, ty: -0.15},
						transform: [-1.1, -0.15, 1, 1, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 7,
						classname: "_drone_eyerelated_corto1_2_x",
						instancename: "",
						matrix: {a: 0.889, b: 0.457, c: 0.457, d: -0.889, tx: -0.2, ty: -2.9},
						transform: [-0.2, -2.9, 1, 1, 2.667, 0.475, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 9,
						classname: "_drone_eyerelated_corto1_1_x",
						instancename: "",
						matrix: {a: 0.645, b: 0.212, c: 0.312, d: -0.95, tx: -1.05, ty: -0.15},
						transform: [-1.05, -0.15, 0.679, 1, 2.824, 0.318, NaN],
						alpha: 0.63,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 11,
						classname: "_drone_eyerelated_corto1_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.1, ty: -0.05},
						transform: [-1.1, -0.05, 1, 1, 0, 0, 0],
						alpha: 0.42,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_drone_eyerelated_corto1_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.1, ty: -0.05},
						transform: [-1.1, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 15,
						classname: "_drone_eyerelated_corto1_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: -1, tx: -1.1, ty: -0.15},
						transform: [-1.1, -0.15, 1, 1, 3.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 17,
						classname: "_drone_eyerelated_corto1_1_x",
						instancename: "",
						matrix: {a: 0.697, b: 0, c: 0, d: 1, tx: -1.1, ty: -0.05},
						transform: [-1.1, -0.05, 0.697, 1, 0, 0, 0],
						alpha: 0.48,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_drone_body_die_up_x": {
		type: "bitmap",
		asset: "_drone_body_die_up_x",
		scale: 1,
		position: [-70.05, -31.05],
	},
	"_drone_eyerelated_eye_die": {
		type: "movieclip",
		fps: 30,
		totalFrames: 28,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 27,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_drone_eyerelated_eyeredout_x",
						instancename: "",
						matrix: {a: 0.763, b: -0.652, c: 0.65, d: 0.76, tx: -6.1, ty: 6.35},
						transform: [-6.1, 6.35, 1.003, 1, 0.707, -0.707, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 14,
						classname: "_drone_eyerelated_eyeredout_x",
						instancename: "",
						matrix: {a: 0.584, b: -0.653, c: 0.745, d: 0.667, tx: -6.85, ty: 11.95},
						transform: [-6.85, 11.95, 0.876, 1, 0.841, -0.841, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 26,
						classname: "_drone_eyerelated_eyeredout_x",
						instancename: "",
						matrix: {a: 0.799, b: -0.601, c: 0.601, d: 0.799, tx: -6.8, ty: 12},
						transform: [-6.8, 12, 1, 1, 0.645, -0.645, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.508, 1], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_drone_eyerelated_eyeredout_x",
						instancename: "",
						matrix: {a: 0.763, b: -0.652, c: 0.65, d: 0.76, tx: -6.1, ty: 6.35},
						transform: [-6.1, 6.35, 1.003, 1, 0.707, -0.707, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.444, 0], [0.508, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_drone_drone_part_3": {
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
						classname: "_drone_saw_saw_stick_die_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.9, ty: -20.8},
						transform: [0.9, -20.8, 1, 1, 0, 0, 0],
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
						classname: "_drone_bodybox",
						instancename: "bound",
						matrix: {a: 0.162, b: 0, c: 0, d: 1.066, tx: 0, ty: 0},
						transform: [0, 0, 0.162, 1.066, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_drone_drone_part_4": {
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
						classname: "_drone_leg_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -9.95},
						transform: [0, -9.95, 1, 1, 0, 0, 0],
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
						classname: "_drone_bodybox",
						instancename: "bound",
						matrix: {a: 0.195, b: 0, c: 0, d: 0.758, tx: 0, ty: 0},
						transform: [0, 0, 0.195, 0.758, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_drone_drone_part_1": {
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
						classname: "_drone_bodydiw_down_x",
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
				name: "bound",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_drone_bodybox",
						instancename: "bound",
						matrix: {a: 2.184, b: 0, c: 0, d: 0.612, tx: 0, ty: 0},
						transform: [0, 0, 2.184, 0.612, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_drone_drone_part_2": {
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
						classname: "_drone_body_die_up2_x",
						instancename: "",
						matrix: {a: 0.992, b: 0.13, c: -0.13, d: 0.992, tx: -1.65, ty: 0.95},
						transform: [-1.65, 0.95, 1, 1, -0.13, 0.13, NaN],
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
						classname: "_drone_bodybox",
						instancename: "bound",
						matrix: {a: 2.199, b: 0, c: 0, d: 0.536, tx: 0.1, ty: 0},
						transform: [0.1, 0, 2.199, 0.536, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_drone_drone_part_5": {
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
						classname: "_drone_eyerelated_eye_die_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.25, ty: -4.9},
						transform: [4.25, -4.9, 1, 1, 0, 0, 0],
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
						classname: "_drone_bodybox",
						instancename: "bound",
						matrix: {a: 0.327, b: 0, c: 0, d: 0.317, tx: 0, ty: 0},
						transform: [0, 0, 0.327, 0.317, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_drone_eyerelated_eyered_x": {
		type: "bitmap",
		asset: "_drone_eyerelated_eyered_x",
		scale: 1,
		position: [-13.6, -13.35],
	},
	"_drone_eyerelated_eyered_glow_x": {
		type: "bitmap",
		asset: "_drone_eyerelated_eyered_glow_x",
		scale: 1,
		position: [-17.05, -16.55],
	},
	"_drone_bound_x": {
		type: "bitmap",
		asset: "_drone_bound_x",
		scale: 1,
		position: [-55, -55],
	},
	"_drone_eyerelated_corto2_1_x": {
		type: "bitmap",
		asset: "_drone_eyerelated_corto2_1_x",
		scale: 1,
		position: [-29.35, -27.8],
	},
	"_drone_eyerelated_corto2_2_x": {
		type: "bitmap",
		asset: "_drone_eyerelated_corto2_2_x",
		scale: 1,
		position: [-20.15, -29.85],
	},
	"_drone_eyerelated_corto1_1_x": {
		type: "bitmap",
		asset: "_drone_eyerelated_corto1_1_x",
		scale: 1,
		position: [-21.5, -27.9],
	},
	"_drone_eyerelated_corto1_2_x": {
		type: "bitmap",
		asset: "_drone_eyerelated_corto1_2_x",
		scale: 1,
		position: [-19.7, -28.5],
	},
	"_drone_eyerelated_eyeredout_x": {
		type: "bitmap",
		asset: "_drone_eyerelated_eyeredout_x",
		scale: 1,
		position: [-11.8, -14.95],
	},
	"_drone_bodybox": {
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
						classname: "_drone_bodybox_x",
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
	"_drone_body_die_up2_x": {
		type: "bitmap",
		asset: "_drone_body_die_up2_x",
		scale: 1,
		position: [-72.55, -31.05],
	},
	"_drone_eyerelated_eye_die_x": {
		type: "bitmap",
		asset: "_drone_eyerelated_eye_die_x",
		scale: 1,
		position: [-19.1, -14.3],
	},
	"_drone_bodybox_x": {
		type: "bitmap",
		asset: "_drone_bodybox_x",
		scale: 1,
		position: [-30, -30],
	},
};
