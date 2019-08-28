
var nerd = {
	"nerd": {
		type: "movieclip",
		fps: 24,
		totalFrames: 42,
		labels: {idle: {from:0, to:6}, attack: {from:7, to:13}, walk: {from:14, to:20}, hurt: {from:21, to:27}, die: {from:28, to:34}, wreck: {from:35, to:41}, },
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "nerd_idle",
						instancename: "",
						matrix: {a: 1.099, b: 0, c: 0, d: 1.099, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1.099, 1.099, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 13,
						classname: "nerd_attack",
						instancename: "",
						matrix: {a: 1.099, b: 0, c: 0, d: 1.099, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1.099, 1.099, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 20,
						classname: "nerd_walk",
						instancename: "",
						matrix: {a: 1.099, b: 0, c: 0, d: 1.099, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1.099, 1.099, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 27,
						classname: "nerd_hurt",
						instancename: "",
						matrix: {a: 1.099, b: 0, c: 0, d: 1.099, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1.099, 1.099, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 34,
						classname: "nerd_die",
						instancename: "",
						matrix: {a: 1.099, b: 0, c: 0, d: 1.099, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1.099, 1.099, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 35,
						to: 41,
						classname: "nerd_wreck",
						instancename: "",
						matrix: {a: 1.099, b: 0, c: 0, d: 1.099, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1.099, 1.099, 0, 0, 0],
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
	"nerd_idle": {
		type: "movieclip",
		fps: 24,
		totalFrames: 30,
		labels: {},
		layers: [
			{
				name: "vacuum_nerd_idle",
				keys: [
					{
						from: 0,
						to: 29,
						classname: "_nerd_polar_vacuum_nerd_idle",
						instancename: "",
						matrix: {a: -0.917, b: 0, c: 0, d: 0.917, tx: -0.4, ty: 2.75},
						transform: [-0.4, 2.75, 0.917, 0.917, 0, 3.142, NaN],
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
						to: 13,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -1, b: 0.017, c: 0.017, d: 0.983, tx: 3.25, ty: -77.15},
						transform: [3.25, -77.15, 1, 0.983, 0.017, 3.124, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -1, b: 0.017, c: 0.017, d: 0.983, tx: 3.25, ty: -77.15},
						transform: [3.25, -77.15, 1, 0.983, 0.017, 3.124, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -1, b: 0.017, c: 0.017, d: 0.983, tx: 3.25, ty: -77.15},
						transform: [3.25, -77.15, 1, 0.983, 0.017, 3.124, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "shoe_x",
				keys: [
					{
						from: 0,
						to: 29,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.996, b: -0.088, c: -0.088, d: 0.996, tx: 3.75, ty: -20.15},
						transform: [3.75, -20.15, 1, 1, -0.088, -3.054, NaN],
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
						to: 13,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.05, ty: -73.3},
						transform: [-6.05, -73.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.05, ty: -73.3},
						transform: [-6.05, -73.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.05, ty: -73.3},
						transform: [-6.05, -73.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.795, b: 0.006, c: 0.008, d: 1, tx: 4.45, ty: -123.9},
						transform: [4.45, -123.9, 0.795, 1, 0.008, 3.134, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.795, b: 0.006, c: 0.008, d: 0.976, tx: 4.45, ty: -122.55},
						transform: [4.45, -122.55, 0.795, 0.976, 0.008, 3.134, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.795, b: 0.006, c: 0.008, d: 1, tx: 4.45, ty: -123.9},
						transform: [4.45, -123.9, 0.795, 1, 0.008, 3.134, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.3, ty: -122.2},
						transform: [-6.3, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.981, tx: -6.3, ty: -121.15},
						transform: [-6.3, -121.15, 1, 0.981, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.3, ty: -122.2},
						transform: [-6.3, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_2_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: -0.592, b: -0.811, c: -0.808, d: 0.59, tx: 34.35, ty: -153},
						transform: [34.35, -153, 1.005, 1, -0.94, -2.201, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: -0.448, b: -0.899, c: -0.895, d: 0.446, tx: 36.65, ty: -147.75},
						transform: [36.65, -147.75, 1.005, 1, -1.108, -2.033, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: -0.592, b: -0.811, c: -0.808, d: 0.59, tx: 34.35, ty: -153},
						transform: [34.35, -153, 1.005, 1, -0.94, -2.201, NaN],
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
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.941, b: 0.339, c: 0.326, d: 0.907, tx: 22.5, ty: -184.65},
						transform: [22.5, -184.65, 1, 0.964, 0.345, 2.796, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.962, b: 0.272, c: 0.259, d: 0.916, tx: 27.4, ty: -180.3},
						transform: [27.4, -180.3, 1, 0.952, 0.276, 2.866, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.941, b: 0.339, c: 0.326, d: 0.907, tx: 22.5, ty: -184.65},
						transform: [22.5, -184.65, 1, 0.964, 0.345, 2.796, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_2_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: 0.759, b: -0.651, c: 0.651, d: 0.759, tx: -29.9, ty: -157.2},
						transform: [-29.9, -157.2, 1, 1, 0.71, -0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: 0.812, b: -0.583, c: 0.583, d: 0.812, tx: -27.6, ty: -158.45},
						transform: [-27.6, -158.45, 1, 1, 0.623, -0.623, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: 0.759, b: -0.651, c: 0.651, d: 0.759, tx: -29.9, ty: -157.2},
						transform: [-29.9, -157.2, 1, 1, 0.71, -0.71, NaN],
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
						to: 13,
						classname: "_nerd_body_1_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.082, c: -0.082, d: 0.997, tx: 7.45, ty: -161.2},
						transform: [7.45, -161.2, 1, 1, -0.083, 0.083, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_body_1_x",
						instancename: "",
						matrix: {a: 0.986, b: 0.168, c: -0.168, d: 0.986, tx: 9.75, ty: -159.2},
						transform: [9.75, -159.2, 1, 1, -0.169, 0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_body_1_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.082, c: -0.082, d: 0.997, tx: 7.45, ty: -161.2},
						transform: [7.45, -161.2, 1, 1, -0.083, 0.083, NaN],
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
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.844, b: 0.537, c: -0.554, d: 0.871, tx: -9.25, ty: -187.4},
						transform: [-9.25, -187.4, 1, 1.032, -0.567, 0.567, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.794, b: 0.608, c: -0.628, d: 0.82, tx: -4.4, ty: -186.7},
						transform: [-4.4, -186.7, 1, 1.032, -0.653, 0.653, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.844, b: 0.537, c: -0.554, d: 0.871, tx: -9.25, ty: -187.4},
						transform: [-9.25, -187.4, 1, 1.032, -0.567, 0.567, NaN],
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
						to: 13,
						classname: "_nerd_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 18.65, ty: -209.1},
						transform: [18.65, -209.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: 25.4, ty: -205.05},
						transform: [25.4, -205.05, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 18.65, ty: -209.1},
						transform: [18.65, -209.1, 1, 1, 0, 0, 0],
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
						to: 13,
						classname: "_nerd_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: -124.5},
						transform: [2.6, -124.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: -123.35},
						transform: [2.6, -123.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: -124.5},
						transform: [2.6, -124.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "shoe_x",
				keys: [
					{
						from: 0,
						to: 29,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: 0.973, b: -0.229, c: 0.229, d: 0.973, tx: -4.5, ty: -16.6},
						transform: [-4.5, -16.6, 1, 1, 0.231, -0.231, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"nerd_attack": {
		type: "movieclip",
		fps: 24,
		totalFrames: 14,
		labels: {},
		layers: [
			{
				name: "vacuum_nerd_idle",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_nerd_polar_vacuum_nerd_idle",
						instancename: "",
						matrix: {a: -0.917, b: 0, c: 0, d: 0.917, tx: -0.4, ty: 2.75},
						transform: [-0.4, 2.75, 0.917, 0.917, 0, 3.142, NaN],
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
						to: 0,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -0.985, b: -0.173, c: -0.17, d: 0.968, tx: 13.65, ty: -74.85},
						transform: [13.65, -74.85, 1, 0.983, -0.174, -2.968, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: 0.539, b: -0.842, c: 0.842, d: 0.539, tx: -14.9, ty: -143.7},
						transform: [-14.9, -143.7, 1, 1, 1.002, -1.002, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: 0.426, b: -0.905, c: 0.905, d: 0.426, tx: -17.4, ty: -143.1},
						transform: [-17.4, -143.1, 1, 1, 1.131, -1.131, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.531, 0], [0.778, 0.483], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: 0.822, b: -0.569, c: 0.507, d: 0.732, tx: -15.1, ty: -153.25},
						transform: [-15.1, -153.25, 1, 0.89, 0.606, -0.606, NaN],
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
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -0.985, b: -0.173, c: -0.17, d: 0.968, tx: 13.65, ty: -74.85},
						transform: [13.65, -74.85, 1, 0.983, -0.174, -2.968, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -1, b: 0.017, c: 0.017, d: 0.983, tx: 3.25, ty: -77.15},
						transform: [3.25, -77.15, 1, 0.983, 0.017, 3.124, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.199, 0.322], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -1, b: 0.017, c: 0.017, d: 0.983, tx: 3.25, ty: -77.15},
						transform: [3.25, -77.15, 1, 0.983, 0.017, 3.124, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "shoe_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.996, b: -0.088, c: -0.088, d: 0.996, tx: 3.75, ty: -20.15},
						transform: [3.75, -20.15, 1, 1, -0.088, -3.054, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.962, b: 0.271, c: -0.28, d: 0.994, tx: -3.8, ty: -178.6},
						transform: [-3.8, -178.6, 1, 1.032, -0.275, 0.275, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.145, c: -0.149, d: 1.021, tx: -10.95, ty: -179.1},
						transform: [-10.95, -179.1, 1, 1.032, -0.145, 0.145, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.531, 0], [0.778, 0.483], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.926, b: 0.378, c: -0.39, d: 0.956, tx: -0.45, ty: -186.75},
						transform: [-0.45, -186.75, 1, 1.032, -0.387, 0.387, NaN],
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
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.996, b: -0.088, c: -0.088, d: 0.996, tx: 3.75, ty: -20.15},
						transform: [3.75, -20.15, 1, 1, -0.088, -3.054, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.996, b: -0.088, c: -0.088, d: 0.996, tx: 3.75, ty: -20.15},
						transform: [3.75, -20.15, 1, 1, -0.088, -3.054, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.199, 0.322], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.996, b: -0.088, c: -0.088, d: 0.996, tx: 3.75, ty: -20.15},
						transform: [3.75, -20.15, 1, 1, -0.088, -3.054, NaN],
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
						to: 0,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.791, b: 0.082, c: 0.103, d: 0.995, tx: 9.45, ty: -123.9},
						transform: [9.45, -123.9, 0.795, 1, 0.104, 3.038, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -0.947, b: -0.32, c: -0.315, d: 0.931, tx: 21.75, ty: -75.6},
						transform: [21.75, -75.6, 1, 0.983, -0.326, -2.815, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -0.96, b: -0.279, c: -0.274, d: 0.944, tx: 19.5, ty: -76.1},
						transform: [19.5, -76.1, 1, 0.983, -0.283, -2.859, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.531, 0], [0.778, 0.483], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -0.947, b: -0.32, c: -0.315, d: 0.931, tx: 21.75, ty: -75.6},
						transform: [21.75, -75.6, 1, 0.983, -0.326, -2.815, NaN],
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
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.791, b: 0.082, c: 0.103, d: 0.995, tx: 9.45, ty: -123.9},
						transform: [9.45, -123.9, 0.795, 1, 0.104, 3.038, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 0.862, b: 0.506, c: -0.506, d: 0.862, tx: 12.9, ty: -77.7},
						transform: [12.9, -77.7, 1, 1, -0.531, 0.531, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.199, 0.322], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.05, ty: -73.3},
						transform: [-6.05, -73.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 0.5, b: 0.866, c: -0.866, d: 0.5, tx: 32.65, ty: -90.8},
						transform: [32.65, -90.8, 1, 1, -1.047, 1.047, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 0.984, b: -0.176, c: 0.158, d: 0.964, tx: 13.05, ty: -119.4},
						transform: [13.05, -119.4, 1, 0.977, 0.163, -0.177, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 0.989, b: -0.15, c: 0.132, d: 0.968, tx: 13.4, ty: -122.6},
						transform: [13.4, -122.6, 1, 0.977, 0.136, -0.15, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.531, 0], [0.778, 0.483], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 0.984, b: -0.176, c: 0.158, d: 0.964, tx: 13.05, ty: -119.4},
						transform: [13.05, -119.4, 1, 0.977, 0.163, -0.177, NaN],
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
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 0.5, b: 0.866, c: -0.866, d: 0.5, tx: 32.65, ty: -90.8},
						transform: [32.65, -90.8, 1, 1, -1.047, 1.047, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: -0.592, b: -0.811, c: -0.808, d: 0.59, tx: 34.35, ty: -153},
						transform: [34.35, -153, 1.005, 1, -0.94, -2.201, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.199, 0.322], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: -0.592, b: -0.811, c: -0.808, d: 0.59, tx: 34.35, ty: -153},
						transform: [34.35, -153, 1.005, 1, -0.94, -2.201, NaN],
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
						to: 0,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.662, b: 0.75, c: 0.728, d: 0.643, tx: -5.05, ty: -121.95},
						transform: [-5.05, -121.95, 1, 0.971, 0.847, 2.294, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 8,
					},
					{
						from: 9,
						to: 9,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.662, b: 0.75, c: 0.728, d: 0.643, tx: -5.05, ty: -121.95},
						transform: [-5.05, -121.95, 1, 0.971, 0.847, 2.294, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 13,
					},
				]
			},
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.729, b: -0.685, c: -0.685, d: 0.729, tx: -13.85, ty: -59.6},
						transform: [-13.85, -59.6, 1, 1, -0.754, -2.387, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -0.335, b: -0.942, c: 0.942, d: -0.335, tx: 75.7, ty: -132.85},
						transform: [75.7, -132.85, 1, 1, 1.913, -1.913, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -0.376, b: -0.927, c: 0.927, d: -0.376, tx: 75.45, ty: -139.65},
						transform: [75.45, -139.65, 1, 1, 1.956, -1.956, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.531, 0], [0.778, 0.483], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 0.858, b: 0.514, c: -0.514, d: 0.858, tx: 79.6, ty: -121.8},
						transform: [79.6, -121.8, 1, 1, -0.54, 0.54, NaN],
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
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.729, b: -0.685, c: -0.685, d: 0.729, tx: -13.85, ty: -59.6},
						transform: [-13.85, -59.6, 1, 1, -0.754, -2.387, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.795, b: -0.028, c: -0.033, d: 0.936, tx: 4.45, ty: -124.25},
						transform: [4.45, -124.25, 0.795, 0.936, -0.035, -3.106, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.199, 0.322], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.795, b: 0.006, c: 0.008, d: 1, tx: 4.45, ty: -123.9},
						transform: [4.45, -123.9, 0.795, 1, 0.008, 3.134, NaN],
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
						to: 0,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: -0.647, b: -0.768, c: -0.765, d: 0.644, tx: 34.1, ty: -155.25},
						transform: [34.1, -155.25, 1.005, 1, -0.871, -2.271, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.319, b: -0.948, c: 0.948, d: -0.319, tx: 28.35, ty: -117.35},
						transform: [28.35, -117.35, 1, 1, 1.895, -1.895, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.36, b: -0.933, c: 0.933, d: -0.36, tx: 28.8, ty: -122.15},
						transform: [28.8, -122.15, 1, 1, 1.939, -1.939, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.443, 0], [0.754, 0.403], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 0.097, b: -1.061, c: 0.965, d: -0.26, tx: 28.95, ty: -119.9},
						transform: [28.95, -119.9, 1.065, 0.999, 1.834, -1.48, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.393, 0.281], [0.704, 0.635], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.089, b: -0.996, c: 0.996, d: -0.089, tx: 29.2, ty: -116},
						transform: [29.2, -116, 1, 1, 1.66, -1.66, NaN],
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
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: -0.647, b: -0.768, c: -0.765, d: 0.644, tx: 34.1, ty: -155.25},
						transform: [34.1, -155.25, 1.005, 1, -0.871, -2.271, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.941, b: 0.339, c: 0.326, d: 0.907, tx: 22.5, ty: -184.65},
						transform: [22.5, -184.65, 1, 0.964, 0.345, 2.796, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.199, 0.322], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.941, b: 0.339, c: 0.326, d: 0.907, tx: 22.5, ty: -184.65},
						transform: [22.5, -184.65, 1, 0.964, 0.345, 2.796, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.915, b: 0.403, c: 0.388, d: 0.882, tx: 20.35, ty: -186.2},
						transform: [20.35, -186.2, 1, 0.964, 0.415, 2.727, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_nerd_body_2_x",
						instancename: "",
						matrix: {a: 0.978, b: -0.208, c: 0.208, d: 0.978, tx: 19.7, ty: -158.3},
						transform: [19.7, -158.3, 1, 1, 0.21, -0.21, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_nerd_body_2_x",
						instancename: "",
						matrix: {a: 0.943, b: -0.333, c: 0.333, d: 0.943, tx: 14.9, ty: -162.05},
						transform: [14.9, -162.05, 1, 1, 0.339, -0.339, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.531, 0], [0.778, 0.483], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_nerd_body_2_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.141, c: 0.097, d: 0.995, tx: 19.9, ty: -158.9},
						transform: [19.9, -158.9, 1.007, 1, 0.097, 0.141, NaN],
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
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.915, b: 0.403, c: 0.388, d: 0.882, tx: 20.35, ty: -186.2},
						transform: [20.35, -186.2, 1, 0.964, 0.415, 2.727, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: 0.759, b: -0.651, c: 0.651, d: 0.759, tx: -29.9, ty: -157.2},
						transform: [-29.9, -157.2, 1, 1, 0.71, -0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.199, 0.322], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: 0.759, b: -0.651, c: 0.651, d: 0.759, tx: -29.9, ty: -157.2},
						transform: [-29.9, -157.2, 1, 1, 0.71, -0.71, NaN],
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
						to: 0,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: 0.712, b: -0.703, c: 0.703, d: 0.712, tx: -25.3, ty: -154.6},
						transform: [-25.3, -154.6, 1, 1, 0.779, -0.779, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_nerd_head_side_x",
						instancename: "",
						matrix: {a: 0.958, b: -0.288, c: 0.288, d: 0.958, tx: 16.6, ty: -207.4},
						transform: [16.6, -207.4, 1, 1, 0.292, -0.292, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_nerd_head_side_x",
						instancename: "",
						matrix: {a: 0.912, b: -0.409, c: 0.409, d: 0.912, tx: 5.45, ty: -210.3},
						transform: [5.45, -210.3, 1, 1, 0.422, -0.422, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.531, 0], [0.778, 0.483], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_nerd_head_side_x",
						instancename: "",
						matrix: {a: 0.984, b: -0.179, c: 0.179, d: 0.984, tx: 22.3, ty: -208.1},
						transform: [22.3, -208.1, 1, 1, 0.179, -0.179, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: 0.712, b: -0.703, c: 0.703, d: 0.712, tx: -25.3, ty: -154.6},
						transform: [-25.3, -154.6, 1, 1, 0.779, -0.779, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_nerd_body_1_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.082, c: -0.082, d: 0.997, tx: 7.45, ty: -161.2},
						transform: [7.45, -161.2, 1, 1, -0.083, 0.083, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.199, 0.322], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_nerd_body_1_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.082, c: -0.082, d: 0.997, tx: 7.45, ty: -161.2},
						transform: [7.45, -161.2, 1, 1, -0.083, 0.083, NaN],
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
						to: 0,
						classname: "_nerd_body_1_x",
						instancename: "",
						matrix: {a: 0.888, b: 0.012, c: -0.013, d: 1, tx: 10.45, ty: -161.7},
						transform: [10.45, -161.7, 0.888, 1, -0.013, 0.013, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_nerd_pelvis2_x",
						instancename: "",
						matrix: {a: 0.858, b: -0.048, c: 0.275, d: 0.986, tx: 23.25, ty: -122.2},
						transform: [23.25, -122.2, 0.86, 1.024, 0.272, -0.056, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_nerd_pelvis2_x",
						instancename: "",
						matrix: {a: 0.778, b: -0.101, c: 0.022, d: 1.006, tx: 25.7, ty: -126.05},
						transform: [25.7, -126.05, 0.784, 1.006, 0.021, -0.129, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.531, 0], [0.778, 0.483], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_nerd_pelvis2_x",
						instancename: "",
						matrix: {a: 0.858, b: -0.048, c: 0.275, d: 0.986, tx: 23.25, ty: -122.2},
						transform: [23.25, -122.2, 0.86, 1.024, 0.272, -0.056, NaN],
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
						classname: "_nerd_body_1_x",
						instancename: "",
						matrix: {a: 0.888, b: 0.012, c: -0.013, d: 1, tx: 10.45, ty: -161.7},
						transform: [10.45, -161.7, 0.888, 1, -0.013, 0.013, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.844, b: 0.537, c: -0.554, d: 0.871, tx: -9.25, ty: -187.4},
						transform: [-9.25, -187.4, 1, 1.032, -0.567, 0.567, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.199, 0.322], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.844, b: 0.537, c: -0.554, d: 0.871, tx: -9.25, ty: -187.4},
						transform: [-9.25, -187.4, 1, 1.032, -0.567, 0.567, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.879, b: 0.477, c: -0.492, d: 0.907, tx: -6.65, ty: -187.15},
						transform: [-6.65, -187.15, 1, 1.032, -0.497, 0.497, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -1, b: -0.023, c: -0.023, d: 1, tx: 3.75, ty: -20.2},
						transform: [3.75, -20.2, 1, 1, -0.023, -3.119, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -1, b: -0.023, c: -0.023, d: 1, tx: 3.75, ty: -20.2},
						transform: [3.75, -20.2, 1, 1, -0.023, -3.119, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.531, 0], [0.778, 0.483], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -1, b: -0.023, c: -0.023, d: 1, tx: 3.75, ty: -20.2},
						transform: [3.75, -20.2, 1, 1, -0.023, -3.119, NaN],
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
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.879, b: 0.477, c: -0.492, d: 0.907, tx: -6.65, ty: -187.15},
						transform: [-6.65, -187.15, 1, 1.032, -0.497, 0.497, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 0.924, b: -0.382, c: 0.382, d: 0.924, tx: -6.35, ty: -124.1},
						transform: [-6.35, -124.1, 1, 1, 0.393, -0.393, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.199, 0.322], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.3, ty: -122.2},
						transform: [-6.3, -122.2, 1, 1, 0, 0, 0],
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
						classname: "_nerd_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.761, tx: 7.65, ty: -126.15},
						transform: [7.65, -126.15, 1, 0.761, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_nerd_arm_22_x",
						instancename: "",
						matrix: {a: -0.709, b: -0.711, c: -0.688, d: 0.686, tx: 51.9, ty: -152.1},
						transform: [51.9, -152.1, 1.005, 0.972, -0.787, -2.355, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_nerd_arm_22_x",
						instancename: "",
						matrix: {a: -0.795, b: -0.614, c: -0.594, d: 0.769, tx: 47.6, ty: -160.05},
						transform: [47.6, -160.05, 1.005, 0.972, -0.657, -2.484, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.531, 0], [0.778, 0.483], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_nerd_arm_22_x",
						instancename: "",
						matrix: {a: -0.625, b: -0.787, c: -0.681, d: 0.541, tx: 47.45, ty: -146.2},
						transform: [47.45, -146.2, 1.005, 0.87, -0.899, -2.242, NaN],
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
						classname: "_nerd_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.761, tx: 7.65, ty: -126.15},
						transform: [7.65, -126.15, 1, 0.761, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_nerd_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: -124.5},
						transform: [2.6, -124.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.199, 0.322], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_nerd_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: -124.5},
						transform: [2.6, -124.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "shoe_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_head_idle",
						instancename: "",
						matrix: {a: 0.998, b: -0.069, c: 0.069, d: 0.998, tx: 19.25, ty: -207.85},
						transform: [19.25, -207.85, 1, 1, 0.069, -0.069, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.857, b: 0.516, c: 0.55, d: 0.913, tx: 30.35, ty: -183.95},
						transform: [30.35, -183.95, 1, 1.066, 0.542, 2.599, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.783, b: 0.622, c: 0.663, d: 0.834, tx: 22.15, ty: -188.85},
						transform: [22.15, -188.85, 1, 1.066, 0.672, 2.47, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.531, 0], [0.778, 0.483], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.909, b: 0.417, c: 0.444, d: 0.969, tx: 30.1, ty: -179.95},
						transform: [30.1, -179.95, 1, 1.066, 0.43, 2.712, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_nerd_head_idle_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.069, c: 0.069, d: 0.998, tx: 19.25, ty: -207.85},
						transform: [19.25, -207.85, 1, 1, 0.069, -0.069, NaN],
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
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.568, b: -0.538, c: -0.688, d: 0.726, tx: -13.9, ty: -27.2},
						transform: [-13.9, -27.2, 0.782, 1, -0.758, -2.383, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.26, 0.261], [0.591, 0.647], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: 0.776, b: -0.289, c: 0.35, d: 0.937, tx: -8.55, ty: -19.3},
						transform: [-8.55, -19.3, 0.828, 1, 0.357, -0.357, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.266, 0.532], [0.597, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: 0.973, b: -0.229, c: 0.229, d: 0.973, tx: -4.5, ty: -16.6},
						transform: [-4.5, -16.6, 1, 1, 0.231, -0.231, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "shoe_x",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 4,
						classname: "_nerd_hands_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 12.5, ty: -121.4},
						transform: [12.5, -121.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_nerd_hands_x",
						instancename: "",
						matrix: {a: 0.992, b: -0.129, c: 0.129, d: 0.992, tx: 12.5, ty: -124.5},
						transform: [12.5, -124.5, 1, 1, 0.129, -0.129, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.531, 0], [0.778, 0.483], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_nerd_hands_x",
						instancename: "",
						matrix: {a: 1, b: 0.13, c: 0, d: 1, tx: 6.95, ty: -122.35},
						transform: [6.95, -122.35, 1.008, 1, 0, 0.129, NaN],
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
					},
					{
						from: 10,
						to: 12,
						classname: "_nerd_head_idle_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 18.65, ty: -209.1},
						transform: [18.65, -209.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.199, 0.322], [0.524, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_nerd_head_idle_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 18.65, ty: -209.1},
						transform: [18.65, -209.1, 1, 1, 0, 0, 0],
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
						to: 0,
					},
					{
						from: 1,
						to: 4,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.691, b: 0.723, c: 0.723, d: 0.691, tx: 130.7, ty: -152.15},
						transform: [130.7, -152.15, 1, 1, 0.808, 2.333, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.565], [0.543, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.537, b: 0.844, c: 0.844, d: 0.537, tx: 129.55, ty: -161.3},
						transform: [129.55, -161.3, 1, 1, 1.004, 2.138, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.378, 0], [0.708, 0.36], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.537, b: 0.841, c: 0.841, d: 0.537, tx: 132.95, ty: -148.95},
						transform: [132.95, -148.95, 0.998, 0.998, 1.002, 2.139, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.393, 0.22], [0.718, 0.57], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.545, b: 0.838, c: 0.838, d: 0.545, tx: 127.15, ty: -102.4},
						transform: [127.15, -102.4, 0.999, 0.999, 0.994, 2.148, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.393, 0.281], [0.704, 0.635], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.255, b: -0.967, c: -0.967, d: 0.255, tx: 49.45, ty: -71.95},
						transform: [49.45, -71.95, 1, 1, -1.313, -1.828, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 13,
					},
				]
			},
			{
				name: "fx",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 3,
						classname: "_nerd_fx_x",
						instancename: "",
						matrix: {a: 0.567, b: 0.824, c: -0.824, d: 0.567, tx: 135.85, ty: -147.1},
						transform: [135.85, -147.1, 1, 1, -0.968, 0.968, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.228, 0.354], [0.565, 0.771], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_nerd_fx_x",
						instancename: "",
						matrix: {a: 0.486, b: 0.604, c: -0.484, d: 0.584, tx: 138.75, ty: -160.4},
						transform: [138.75, -160.4, 0.775, 0.758, -0.692, 0.893, NaN],
						alpha: 0.15,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.302, 0.618], [0.636, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 13,
					},
				]
			},
			{
				name: "Layer 33",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_parche_1_x",
						instancename: "",
						matrix: {a: 0.53, b: 0.848, c: -0.848, d: 0.53, tx: 29.25, ty: -90.9},
						transform: [29.25, -90.9, 1, 1, -1.012, 1.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 7,
					},
					{
						from: 8,
						to: 8,
						classname: "_nerd_parche_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 77.95, ty: -119.2},
						transform: [77.95, -119.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_nerd_parche_1_x",
						instancename: "",
						matrix: {a: 0.53, b: 0.848, c: -0.848, d: 0.53, tx: 29.25, ty: -90.9},
						transform: [29.25, -90.9, 1, 1, -1.012, 1.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 13,
					},
				]
			},
			{
				name: "hitbox",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 8,
						classname: "_nerd_bearbot_boundingbox",
						instancename: "hitbox",
						matrix: {a: 0.765, b: 0, c: 0, d: 0.524, tx: 129.3, ty: -155.55},
						transform: [129.3, -155.55, 0.765, 0.524, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 13,
					},
				]
			},
		]
	},
	"nerd_walk": {
		type: "movieclip",
		fps: 24,
		totalFrames: 30,
		labels: {},
		layers: [
			{
				name: "vacuum_nerd_idle",
				keys: [
					{
						from: 0,
						to: 29,
						classname: "_nerd_polar_vacuum_nerd_idle",
						instancename: "",
						matrix: {a: -0.917, b: 0, c: 0, d: 0.917, tx: -0.4, ty: 2.75},
						transform: [-0.4, 2.75, 0.917, 0.917, 0, 3.142, NaN],
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
						to: 13,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -1, b: 0.017, c: 0.017, d: 0.983, tx: 3.25, ty: -77.15},
						transform: [3.25, -77.15, 1, 0.983, 0.017, 3.124, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -1, b: 0.017, c: 0.017, d: 0.983, tx: 3.25, ty: -77.15},
						transform: [3.25, -77.15, 1, 0.983, 0.017, 3.124, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -1, b: 0.017, c: 0.017, d: 0.983, tx: 3.25, ty: -77.15},
						transform: [3.25, -77.15, 1, 0.983, 0.017, 3.124, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "shoe_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.996, b: -0.088, c: -0.088, d: 0.996, tx: 3.75, ty: -20.15},
						transform: [3.75, -20.15, 1, 1, -0.088, -3.054, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.973, b: 0.232, c: 0.232, d: 0.973, tx: 3.65, ty: -20.2},
						transform: [3.65, -20.2, 1, 1, 0.234, 2.908, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.996, b: -0.088, c: -0.088, d: 0.996, tx: 3.75, ty: -20.15},
						transform: [3.75, -20.15, 1, 1, -0.088, -3.054, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.973, b: 0.232, c: 0.232, d: 0.973, tx: 3.65, ty: -20.2},
						transform: [3.65, -20.2, 1, 1, 0.234, 2.908, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.996, b: -0.088, c: -0.088, d: 0.996, tx: 3.75, ty: -20.15},
						transform: [3.75, -20.15, 1, 1, -0.088, -3.054, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 17,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.973, b: 0.232, c: 0.232, d: 0.973, tx: 3.65, ty: -20.2},
						transform: [3.65, -20.2, 1, 1, 0.234, 2.908, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 20,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.996, b: -0.088, c: -0.088, d: 0.996, tx: 3.75, ty: -20.15},
						transform: [3.75, -20.15, 1, 1, -0.088, -3.054, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 22,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.973, b: 0.232, c: 0.232, d: 0.973, tx: 3.65, ty: -20.2},
						transform: [3.65, -20.2, 1, 1, 0.234, 2.908, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 25,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.996, b: -0.088, c: -0.088, d: 0.996, tx: 3.75, ty: -20.15},
						transform: [3.75, -20.15, 1, 1, -0.088, -3.054, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 28,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.973, b: 0.232, c: 0.232, d: 0.973, tx: 3.65, ty: -20.2},
						transform: [3.65, -20.2, 1, 1, 0.234, 2.908, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.996, b: -0.088, c: -0.088, d: 0.996, tx: 3.75, ty: -20.15},
						transform: [3.75, -20.15, 1, 1, -0.088, -3.054, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.05, ty: -73.3},
						transform: [-6.05, -73.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.05, ty: -73.3},
						transform: [-6.05, -73.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.05, ty: -73.3},
						transform: [-6.05, -73.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.795, b: 0.006, c: 0.008, d: 1, tx: 4.45, ty: -123.9},
						transform: [4.45, -123.9, 0.795, 1, 0.008, 3.134, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.795, b: 0.006, c: 0.008, d: 0.976, tx: 4.45, ty: -122.55},
						transform: [4.45, -122.55, 0.795, 0.976, 0.008, 3.134, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.795, b: 0.006, c: 0.008, d: 1, tx: 4.45, ty: -123.9},
						transform: [4.45, -123.9, 0.795, 1, 0.008, 3.134, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.3, ty: -122.2},
						transform: [-6.3, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.981, tx: -6.3, ty: -121.15},
						transform: [-6.3, -121.15, 1, 0.981, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.3, ty: -122.2},
						transform: [-6.3, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_2_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: -0.592, b: -0.811, c: -0.808, d: 0.59, tx: 34.35, ty: -153},
						transform: [34.35, -153, 1.005, 1, -0.94, -2.201, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: -0.448, b: -0.899, c: -0.895, d: 0.446, tx: 36.65, ty: -147.75},
						transform: [36.65, -147.75, 1.005, 1, -1.108, -2.033, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: -0.592, b: -0.811, c: -0.808, d: 0.59, tx: 34.35, ty: -153},
						transform: [34.35, -153, 1.005, 1, -0.94, -2.201, NaN],
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
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.941, b: 0.339, c: 0.326, d: 0.907, tx: 22.5, ty: -184.65},
						transform: [22.5, -184.65, 1, 0.964, 0.345, 2.796, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.962, b: 0.272, c: 0.259, d: 0.916, tx: 27.4, ty: -180.3},
						transform: [27.4, -180.3, 1, 0.952, 0.276, 2.866, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.941, b: 0.339, c: 0.326, d: 0.907, tx: 22.5, ty: -184.65},
						transform: [22.5, -184.65, 1, 0.964, 0.345, 2.796, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_2_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: 0.759, b: -0.651, c: 0.651, d: 0.759, tx: -29.9, ty: -157.2},
						transform: [-29.9, -157.2, 1, 1, 0.71, -0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: 0.812, b: -0.583, c: 0.583, d: 0.812, tx: -27.6, ty: -158.45},
						transform: [-27.6, -158.45, 1, 1, 0.623, -0.623, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: 0.759, b: -0.651, c: 0.651, d: 0.759, tx: -29.9, ty: -157.2},
						transform: [-29.9, -157.2, 1, 1, 0.71, -0.71, NaN],
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
						to: 13,
						classname: "_nerd_body_1_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.082, c: -0.082, d: 0.997, tx: 7.45, ty: -161.2},
						transform: [7.45, -161.2, 1, 1, -0.083, 0.083, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_body_1_x",
						instancename: "",
						matrix: {a: 0.986, b: 0.168, c: -0.168, d: 0.986, tx: 9.75, ty: -159.2},
						transform: [9.75, -159.2, 1, 1, -0.169, 0.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_body_1_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.082, c: -0.082, d: 0.997, tx: 7.45, ty: -161.2},
						transform: [7.45, -161.2, 1, 1, -0.083, 0.083, NaN],
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
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.844, b: 0.537, c: -0.554, d: 0.871, tx: -9.25, ty: -187.4},
						transform: [-9.25, -187.4, 1, 1.032, -0.567, 0.567, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.794, b: 0.608, c: -0.628, d: 0.82, tx: -4.4, ty: -186.7},
						transform: [-4.4, -186.7, 1, 1.032, -0.653, 0.653, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.844, b: 0.537, c: -0.554, d: 0.871, tx: -9.25, ty: -187.4},
						transform: [-9.25, -187.4, 1, 1.032, -0.567, 0.567, NaN],
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
						to: 13,
						classname: "_nerd_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 18.65, ty: -209.1},
						transform: [18.65, -209.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: 25.4, ty: -205.05},
						transform: [25.4, -205.05, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 18.65, ty: -209.1},
						transform: [18.65, -209.1, 1, 1, 0, 0, 0],
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
						to: 13,
						classname: "_nerd_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: -124.5},
						transform: [2.6, -124.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: -123.35},
						transform: [2.6, -123.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: -124.5},
						transform: [2.6, -124.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "shoe_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: 0.973, b: -0.229, c: 0.229, d: 0.973, tx: -4.5, ty: -16.6},
						transform: [-4.5, -16.6, 1, 1, 0.231, -0.231, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 28,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: 0.973, b: -0.229, c: 0.229, d: 0.973, tx: -4.5, ty: -16.6},
						transform: [-4.5, -16.6, 1, 1, 0.231, -0.231, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.433, 0.017], [0.62, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: 0.973, b: -0.229, c: 0.229, d: 0.973, tx: -4.5, ty: -16.6},
						transform: [-4.5, -16.6, 1, 1, 0.231, -0.231, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"nerd_hurt": {
		type: "movieclip",
		fps: 24,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "vacuum_nerd_idle",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_polar_vacuum_nerd_idle",
						instancename: "",
						matrix: {a: -0.917, b: 0, c: 0, d: 0.917, tx: -0.4, ty: 2.75},
						transform: [-0.4, 2.75, 0.917, 0.917, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_nerd_polar_vacuum_nerd_idle",
						instancename: "",
						matrix: {a: -0.917, b: 0, c: 0, d: 0.917, tx: -0.4, ty: 2.75},
						transform: [-0.4, 2.75, 0.917, 0.917, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.27, 0.432], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_nerd_polar_vacuum_nerd_idle",
						instancename: "",
						matrix: {a: -0.917, b: 0.043, c: 0, d: 0.917, tx: 0.95, ty: -2.4},
						transform: [0.95, -2.4, 0.918, 0.917, 0, 3.095, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.431, 0], [0.744, 0.524], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_nerd_polar_vacuum_nerd_idle",
						instancename: "",
						matrix: {a: -0.917, b: 0, c: 0, d: 0.917, tx: -0.4, ty: 2.75},
						transform: [-0.4, 2.75, 0.917, 0.917, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.26, 0.418], [0.575, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_nerd_polar_vacuum_nerd_idle",
						instancename: "",
						matrix: {a: -0.917, b: -0.024, c: -0.024, d: 0.917, tx: -0.4, ty: 2.4},
						transform: [-0.4, 2.4, 0.917, 0.917, -0.026, -3.116, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.372, 0.1], [0.768, 0.425], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 14,
						classname: "_nerd_polar_vacuum_nerd_idle",
						instancename: "",
						matrix: {a: -0.917, b: 0, c: 0, d: 0.917, tx: -0.4, ty: 2.75},
						transform: [-0.4, 2.75, 0.917, 0.917, 0, 3.142, NaN],
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
						to: 0,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -0.995, b: -0.104, c: -0.102, d: 0.978, tx: 12.55, ty: -78.35},
						transform: [12.55, -78.35, 1, 0.983, -0.104, -3.038, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -0.992, b: -0.126, c: -0.124, d: 0.975, tx: 22.2, ty: -87.45},
						transform: [22.2, -87.45, 1, 0.983, -0.126, -3.016, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -0.997, b: -0.07, c: -0.069, d: 0.981, tx: 22.4, ty: -90.4},
						transform: [22.4, -90.4, 1, 0.983, -0.07, -3.071, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.785, 0.538], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -0.997, b: -0.074, c: -0.073, d: 0.98, tx: 17.7, ty: -85.85},
						transform: [17.7, -85.85, 1, 0.983, -0.074, -3.067, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -0.932, b: -0.126, c: -0.132, d: 0.974, tx: 16.9, ty: -87},
						transform: [16.9, -87, 0.94, 0.983, -0.134, -3.007, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.277], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -1, b: 0.017, c: 0.017, d: 0.983, tx: 3.25, ty: -77.15},
						transform: [3.25, -77.15, 1, 0.983, 0.017, 3.124, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.553, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -1, b: 0.017, c: 0.017, d: 0.983, tx: 3.25, ty: -77.15},
						transform: [3.25, -77.15, 1, 0.983, 0.017, 3.124, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "shoe_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.966, b: -0.259, c: -0.259, d: 0.966, tx: 6.65, ty: -24.2},
						transform: [6.65, -24.2, 1, 1, -0.262, -2.879, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.929, b: -0.371, c: -0.371, d: 0.929, tx: 13.8, ty: -30.95},
						transform: [13.8, -30.95, 1, 1, -0.38, -2.762, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.948, b: -0.318, c: -0.318, d: 0.948, tx: 17.15, ty: -33.5},
						transform: [17.15, -33.5, 1, 1, -0.324, -2.818, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.785, 0.538], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.91, b: -0.414, c: -0.414, d: 0.91, tx: 10.9, ty: -27.25},
						transform: [10.9, -27.25, 1, 1, -0.427, -2.714, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.936, b: -0.353, c: -0.353, d: 0.936, tx: 7, ty: -27.6},
						transform: [7, -27.6, 1, 1, -0.361, -2.781, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.277], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.996, b: -0.088, c: -0.088, d: 0.996, tx: 3.75, ty: -20.15},
						transform: [3.75, -20.15, 1, 1, -0.088, -3.054, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.553, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.996, b: -0.088, c: -0.088, d: 0.996, tx: 3.75, ty: -20.15},
						transform: [3.75, -20.15, 1, 1, -0.088, -3.054, NaN],
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
						to: 0,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.05, ty: -73.3},
						transform: [-6.05, -73.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.05, ty: -73.3},
						transform: [-6.05, -73.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 0.989, b: -0.147, c: 0.138, d: 0.933, tx: -14, ty: -73.4},
						transform: [-14, -73.4, 1, 0.943, 0.147, -0.147, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.785, 0.538], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 0.998, b: -0.064, c: 0.062, d: 0.958, tx: -9.65, ty: -73.65},
						transform: [-9.65, -73.65, 1, 0.96, 0.064, -0.064, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.043, c: 0.041, d: 0.959, tx: -8.45, ty: -73.6},
						transform: [-8.45, -73.6, 1, 0.96, 0.043, -0.043, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.277], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.05, ty: -73.3},
						transform: [-6.05, -73.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.553, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.05, ty: -73.3},
						transform: [-6.05, -73.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.788, b: 0.106, c: 0.134, d: 0.991, tx: 5.6, ty: -126.35},
						transform: [5.6, -126.35, 0.795, 1, 0.134, 3.008, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.718, b: 0.342, c: 0.372, d: 0.783, tx: 3.95, ty: -124.6},
						transform: [3.95, -124.6, 0.795, 0.867, 0.444, 2.697, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.66, b: 0.443, c: 0.483, d: 0.72, tx: -1.15, ty: -124.3},
						transform: [-1.15, -124.3, 0.795, 0.867, 0.591, 2.55, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.785, 0.538], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.749, b: 0.268, c: 0.292, d: 0.816, tx: 3.95, ty: -124.6},
						transform: [3.95, -124.6, 0.795, 0.867, 0.344, 2.798, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.757, b: 0.243, c: 0.269, d: 0.835, tx: 4.05, ty: -124.6},
						transform: [4.05, -124.6, 0.795, 0.877, 0.311, 2.83, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.277], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.795, b: 0.006, c: 0.008, d: 1, tx: 4.45, ty: -123.9},
						transform: [4.45, -123.9, 0.795, 1, 0.008, 3.134, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.553, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.795, b: 0.006, c: 0.008, d: 1, tx: 4.45, ty: -123.9},
						transform: [4.45, -123.9, 0.795, 1, 0.008, 3.134, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.3, ty: -122.2},
						transform: [-6.3, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.3, ty: -122.2},
						transform: [-6.3, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.06, c: -0.06, d: 0.998, tx: -10.95, ty: -122.05},
						transform: [-10.95, -122.05, 1, 1, -0.06, 0.06, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.785, 0.538], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.065, c: -0.065, d: 0.998, tx: -6.3, ty: -122.2},
						transform: [-6.3, -122.2, 1, 1, -0.065, 0.065, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.056, c: -0.056, d: 0.998, tx: -6.25, ty: -122.2},
						transform: [-6.25, -122.2, 1, 1, -0.056, 0.056, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.277], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.3, ty: -122.2},
						transform: [-6.3, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.553, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.3, ty: -122.2},
						transform: [-6.3, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: -0.999, b: -0.101, c: -0.1, d: 0.995, tx: 27.8, ty: -171.35},
						transform: [27.8, -171.35, 1.005, 1, -0.1, -3.041, NaN],
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
					},
					{
						from: 7,
						to: 7,
					},
					{
						from: 8,
						to: 10,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: -0.739, b: -0.681, c: -0.678, d: 0.735, tx: 27.85, ty: -157.2},
						transform: [27.85, -157.2, 1.005, 1, -0.745, -2.397, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.277], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: -0.561, b: -0.833, c: -0.83, d: 0.558, tx: 35, ty: -150.3},
						transform: [35, -150.3, 1.005, 1, -0.978, -2.163, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.553, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: -0.592, b: -0.811, c: -0.808, d: 0.59, tx: 34.35, ty: -153},
						transform: [34.35, -153, 1.005, 1, -0.94, -2.201, NaN],
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
						to: 0,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.546, b: 0.838, c: 0.807, d: 0.526, tx: -0.55, ty: -189.5},
						transform: [-0.55, -189.5, 1, 0.964, 0.993, 2.148, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.728, b: 0.685, c: 0.661, d: 0.702, tx: -5.4, ty: -186.35},
						transform: [-5.4, -186.35, 1, 0.964, 0.755, 2.386, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.574, b: 0.819, c: 0.789, d: 0.553, tx: -14.9, ty: -186},
						transform: [-14.9, -186, 1, 0.964, 0.959, 2.182, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.785, 0.538], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.826, b: 0.564, c: 0.543, d: 0.796, tx: 5.35, ty: -184.05},
						transform: [5.35, -184.05, 1, 0.964, 0.599, 2.543, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.857, b: 0.515, c: 0.496, d: 0.826, tx: 10.1, ty: -185.95},
						transform: [10.1, -185.95, 1, 0.964, 0.541, 2.601, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.277], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.953, b: 0.302, c: 0.291, d: 0.919, tx: 24.35, ty: -182.4},
						transform: [24.35, -182.4, 1, 0.964, 0.307, 2.834, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.553, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.941, b: 0.339, c: 0.326, d: 0.907, tx: 22.5, ty: -184.65},
						transform: [22.5, -184.65, 1, 0.964, 0.345, 2.796, NaN],
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
						to: 3,
						classname: "_nerd_arm_222_x",
						instancename: "",
						matrix: {a: -0.99, b: -0.267, c: 0.447, d: -0.894, tx: 17.65, ty: -161.15},
						transform: [17.65, -161.15, 1.025, 1, 2.678, -2.878, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_nerd_arm_222_x",
						instancename: "",
						matrix: {a: -1.025, b: -0.007, c: 0.205, d: -0.979, tx: 11, ty: -167.55},
						transform: [11, -167.55, 1.025, 1, 2.935, -3.135, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.785, 0.538], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_nerd_arm_222_x",
						instancename: "",
						matrix: {a: -0.969, b: -0.334, c: 0.259, d: -0.44, tx: 24.5, ty: -153.95},
						transform: [24.5, -153.95, 1.025, 0.51, 2.609, -2.809, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
					},
					{
						from: 11,
						to: 13,
					},
					{
						from: 14,
						to: 14,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_hand1_x",
						instancename: "",
						matrix: {a: 1, b: 0.03, c: -0.03, d: 1, tx: 24.85, ty: -141.9},
						transform: [24.85, -141.9, 1, 1, -0.03, 0.03, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_nerd_hand1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 28.9, ty: -183.6},
						transform: [28.9, -183.6, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_nerd_hand1_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.078, c: 0.078, d: 0.997, tx: 15.95, ty: -191.85},
						transform: [15.95, -191.85, 1, 1, 0.078, -0.078, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.785, 0.538], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_nerd_hand1_x",
						instancename: "",
						matrix: {a: 0.988, b: 0.156, c: -0.156, d: 0.988, tx: 29.55, ty: -157.8},
						transform: [29.55, -157.8, 1, 1, -0.156, 0.156, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
					},
					{
						from: 11,
						to: 13,
					},
					{
						from: 14,
						to: 14,
					},
				]
			},
			{
				name: "arm_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: 0.301, b: -0.954, c: 0.954, d: 0.301, tx: -44.35, ty: -145.25},
						transform: [-44.35, -145.25, 1, 1, 1.265, -1.265, NaN],
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
					},
					{
						from: 7,
						to: 7,
					},
					{
						from: 8,
						to: 10,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: 0.618, b: -0.786, c: 0.786, d: 0.618, tx: -35.95, ty: -148.8},
						transform: [-35.95, -148.8, 1, 1, 0.905, -0.905, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.277], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: 0.783, b: -0.622, c: 0.622, d: 0.783, tx: -29, ty: -156.95},
						transform: [-29, -156.95, 1, 1, 0.671, -0.671, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.553, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_nerd_arm_2_x",
						instancename: "",
						matrix: {a: 0.759, b: -0.651, c: 0.651, d: 0.759, tx: -29.9, ty: -157.2},
						transform: [-29.9, -157.2, 1, 1, 0.71, -0.71, NaN],
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
						to: 0,
						classname: "_nerd_body_1_x",
						instancename: "",
						matrix: {a: 0.951, b: -0.308, c: 0.308, d: 0.951, tx: -5.45, ty: -162.1},
						transform: [-5.45, -162.1, 1, 1, 0.313, -0.313, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_nerd_body_1_x",
						instancename: "",
						matrix: {a: 0.947, b: -0.321, c: 0.321, d: 0.947, tx: -9.8, ty: -158.85},
						transform: [-9.8, -158.85, 1, 1, 0.327, -0.327, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_nerd_body_1_x",
						instancename: "",
						matrix: {a: 0.919, b: -0.394, c: 0.394, d: 0.919, tx: -17.1, ty: -158.2},
						transform: [-17.1, -158.2, 1, 1, 0.405, -0.405, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.785, 0.538], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_nerd_body_1_x",
						instancename: "",
						matrix: {a: 0.985, b: -0.17, c: 0.17, d: 0.985, tx: -3.2, ty: -157.55},
						transform: [-3.2, -157.55, 1, 1, 0.171, -0.171, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
						classname: "_nerd_body_1_x",
						instancename: "",
						matrix: {a: 0.994, b: -0.113, c: 0.113, d: 0.994, tx: -0.1, ty: -160},
						transform: [-0.1, -160, 1, 1, 0.113, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.277], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_nerd_body_1_x",
						instancename: "",
						matrix: {a: 0.993, b: 0.12, c: -0.12, d: 0.993, tx: 8.45, ty: -159.5},
						transform: [8.45, -159.5, 1, 1, -0.121, 0.121, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.553, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_nerd_body_1_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.082, c: -0.082, d: 0.997, tx: 7.45, ty: -161.2},
						transform: [7.45, -161.2, 1, 1, -0.083, 0.083, NaN],
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
						to: 0,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.936, b: 0.351, c: -0.362, d: 0.967, tx: -30.8, ty: -179.9},
						transform: [-30.8, -179.9, 1, 1.032, -0.358, 0.358, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.932, b: 0.362, c: -0.373, d: 0.962, tx: -35.6, ty: -176.2},
						transform: [-35.6, -176.2, 1, 1.032, -0.37, 0.37, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.899, b: 0.438, c: -0.452, d: 0.928, tx: -44.2, ty: -173.5},
						transform: [-44.2, -173.5, 1, 1.032, -0.453, 0.453, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.785, 0.538], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.865, b: 0.502, c: -0.519, d: 0.893, tx: -26, ty: -178.7},
						transform: [-26, -178.7, 1, 1.032, -0.526, 0.526, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.932, b: 0.363, c: -0.375, d: 0.962, tx: -21.55, ty: -182.45},
						transform: [-21.55, -182.45, 1, 1.032, -0.371, 0.371, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.277], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.822, b: 0.569, c: -0.587, d: 0.849, tx: -7.2, ty: -186.35},
						transform: [-7.2, -186.35, 1, 1.032, -0.605, 0.605, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.553, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.844, b: 0.537, c: -0.554, d: 0.871, tx: -9.25, ty: -187.4},
						transform: [-9.25, -187.4, 1, 1.032, -0.567, 0.567, NaN],
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
					},
					{
						from: 1,
						to: 3,
						classname: "_nerd_arm_222_x",
						instancename: "",
						matrix: {a: -0.046, b: -0.999, c: 0.999, d: -0.046, tx: -51.85, ty: -143.6},
						transform: [-51.85, -143.6, 1, 1, 1.616, -1.616, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_nerd_arm_222_x",
						instancename: "",
						matrix: {a: -0.123, b: -0.992, c: 0.992, d: -0.123, tx: -62.75, ty: -141.1},
						transform: [-62.75, -141.1, 1, 1, 1.694, -1.694, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.785, 0.538], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_nerd_arm_222_x",
						instancename: "",
						matrix: {a: 0.191, b: -1.056, c: 0.852, d: 0.524, tx: -47.1, ty: -149},
						transform: [-47.1, -149, 1.073, 1, 1.02, -1.392, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
					},
					{
						from: 11,
						to: 13,
					},
					{
						from: 14,
						to: 14,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_hand1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -21.55, ty: -133},
						transform: [-21.55, -133, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_nerd_hand1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -25.8, ty: -143.05},
						transform: [-25.8, -143.05, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_nerd_hand1_x",
						instancename: "",
						matrix: {a: -0.997, b: 0.078, c: 0.078, d: 0.997, tx: -36.75, ty: -142.6},
						transform: [-36.75, -142.6, 1, 1, 0.078, 3.064, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.785, 0.538], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_nerd_hand1_x",
						instancename: "",
						matrix: {a: -0.988, b: -0.156, c: -0.156, d: 0.988, tx: -22.35, ty: -132.95},
						transform: [-22.35, -132.95, 1, 1, -0.156, -2.985, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
					},
					{
						from: 11,
						to: 13,
					},
					{
						from: 14,
						to: 14,
					},
				]
			},
			{
				name: "head_idle",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_head_hurt_x",
						instancename: "",
						matrix: {a: 0.92, b: -0.392, c: 0.392, d: 0.92, tx: -13.5, ty: -210.6},
						transform: [-13.5, -210.6, 1, 1, 0.403, -0.403, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_nerd_head_hurt_x",
						instancename: "",
						matrix: {a: 0.917, b: -0.398, c: 0.398, d: 0.917, tx: -18.65, ty: -207.25},
						transform: [-18.65, -207.25, 1, 1, 0.41, -0.41, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_nerd_head_hurt_x",
						instancename: "",
						matrix: {a: 0.747, b: -0.664, c: 0.664, d: 0.747, tx: -28.65, ty: -202.65},
						transform: [-28.65, -202.65, 1, 1, 0.727, -0.727, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.785, 0.538], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_nerd_head_hurt_x",
						instancename: "",
						matrix: {a: 0.968, b: -0.251, c: 0.251, d: 0.968, tx: -4.4, ty: -206.75},
						transform: [-4.4, -206.75, 1, 1, 0.253, -0.253, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
						classname: "_nerd_head_idle",
						instancename: "",
						matrix: {a: 0.981, b: -0.194, c: 0.194, d: 0.981, tx: 1.55, ty: -209.15},
						transform: [1.55, -209.15, 1, 1, 0.195, -0.195, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.277], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_nerd_head_idle",
						instancename: "",
						matrix: {a: 0.999, b: 0.038, c: -0.038, d: 0.999, tx: 21.45, ty: -206.95},
						transform: [21.45, -206.95, 1, 1, -0.038, 0.038, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.553, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_nerd_head_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 18.65, ty: -209.1},
						transform: [18.65, -209.1, 1, 1, 0, 0, 0],
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
						classname: "_nerd_pelvis_x",
						instancename: "",
						matrix: {a: 0.989, b: -0.147, c: 0.147, d: 0.989, tx: 2.6, ty: -124.95},
						transform: [2.6, -124.95, 1, 1, 0.147, -0.147, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_nerd_pelvis_x",
						instancename: "",
						matrix: {a: 0.947, b: -0.321, c: 0.321, d: 0.947, tx: 0.1, ty: -123.5},
						transform: [0.1, -123.5, 1, 1, 0.327, -0.327, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_nerd_pelvis_x",
						instancename: "",
						matrix: {a: 0.93, b: -0.366, c: 0.366, d: 0.93, tx: -4.7, ty: -123.65},
						transform: [-4.7, -123.65, 1, 1, 0.375, -0.375, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.785, 0.538], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_nerd_pelvis_x",
						instancename: "",
						matrix: {a: 0.981, b: -0.196, c: 0.196, d: 0.981, tx: 1.7, ty: -122.3},
						transform: [1.7, -122.3, 1, 1, 0.197, -0.197, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
						classname: "_nerd_pelvis_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.082, c: 0.082, d: 0.997, tx: 1.8, ty: -123.75},
						transform: [1.8, -123.75, 1, 1, 0.082, -0.082, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.277], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_nerd_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: -122.7},
						transform: [2.6, -122.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.553, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_nerd_pelvis_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.6, ty: -124.5},
						transform: [2.6, -124.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "shoe_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: 0.973, b: -0.229, c: 0.229, d: 0.973, tx: -4.5, ty: -16.6},
						transform: [-4.5, -16.6, 1, 1, 0.231, -0.231, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: 0.973, b: -0.229, c: 0.229, d: 0.973, tx: -4.5, ty: -16.6},
						transform: [-4.5, -16.6, 1, 1, 0.231, -0.231, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: 0.973, b: -0.229, c: 0.229, d: 0.973, tx: -4.5, ty: -19.4},
						transform: [-4.5, -19.4, 1, 1, 0.231, -0.231, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0], [0.785, 0.538], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: 0.973, b: -0.229, c: 0.229, d: 0.973, tx: -4.7, ty: -19.25},
						transform: [-4.7, -19.25, 1, 1, 0.231, -0.231, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: 0.973, b: -0.229, c: 0.229, d: 0.973, tx: -4.25, ty: -18.95},
						transform: [-4.25, -18.95, 1, 1, 0.231, -0.231, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.189, 0.277], [0.594, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: 0.973, b: -0.229, c: 0.229, d: 0.973, tx: -4.5, ty: -16.6},
						transform: [-4.5, -16.6, 1, 1, 0.231, -0.231, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.553, 0], [0.577, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: 0.973, b: -0.229, c: 0.229, d: 0.973, tx: -4.5, ty: -16.6},
						transform: [-4.5, -16.6, 1, 1, 0.231, -0.231, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"nerd_die": {
		type: "movieclip",
		fps: 24,
		totalFrames: 11,
		labels: {},
		layers: [
			{
				name: "vacuum_nerd_idle",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_nerd_polar_vacuum_nerd_idle",
						instancename: "",
						matrix: {a: -0.917, b: 0, c: 0, d: 0.917, tx: -0.4, ty: 2.75},
						transform: [-0.4, 2.75, 0.917, 0.917, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.27, 0.432], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_nerd_polar_vacuum_nerd_idle",
						instancename: "",
						matrix: {a: -0.914, b: -0.072, c: -0.072, d: 0.914, tx: -0.4, ty: 0.35},
						transform: [-0.4, 0.35, 0.917, 0.917, -0.078, -3.063, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							position: [[0, 0], [0.27, 0.432], [0.55, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_nerd_polar_vacuum_nerd_idle",
						instancename: "",
						matrix: {a: -0.917, b: 0, c: 0, d: 0.917, tx: -0.4, ty: 2.75},
						transform: [-0.4, 2.75, 0.917, 0.917, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							position: [[0, 0], [0.27, 0.432], [0.55, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -0.99, b: -0.138, c: -0.136, d: 0.974, tx: 23.25, ty: -89.05},
						transform: [23.25, -89.05, 1, 0.983, -0.138, -3.003, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -0.981, b: -0.194, c: -0.19, d: 0.965, tx: 30.45, ty: -94.5},
						transform: [30.45, -94.5, 1, 0.983, -0.195, -2.947, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: -0.99, b: -0.138, c: -0.136, d: 0.974, tx: 23.25, ty: -89.05},
						transform: [23.25, -89.05, 1, 0.983, -0.138, -3.003, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "shoe_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.929, b: -0.371, c: -0.371, d: 0.929, tx: 14.2, ty: -31.95},
						transform: [14.2, -31.95, 1, 1, -0.38, -2.762, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.981, b: -0.196, c: -0.196, d: 0.981, tx: 18, ty: -39.05},
						transform: [18, -39.05, 1, 1, -0.197, -2.945, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: -0.929, b: -0.371, c: -0.371, d: 0.929, tx: 14.2, ty: -31.95},
						transform: [14.2, -31.95, 1, 1, -0.38, -2.762, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
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
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.05, ty: -73.3},
						transform: [-6.05, -73.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 0.977, b: -0.212, c: 0.212, d: 0.977, tx: -11.6, ty: -74.15},
						transform: [-11.6, -74.15, 1, 1, 0.213, -0.213, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_nerd_leg2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.05, ty: -73.3},
						transform: [-6.05, -73.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.834, b: 0.098, c: 0.372, d: 0.783, tx: 5, ty: -127.25},
						transform: [5, -127.25, 0.84, 0.867, 0.444, 3.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.798, b: 0.261, c: 0.52, d: 0.693, tx: 4.8, ty: -127.4},
						transform: [4.8, -127.4, 0.84, 0.867, 0.644, 2.825, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: -0.834, b: 0.098, c: 0.372, d: 0.783, tx: 5, ty: -127.25},
						transform: [5, -127.25, 0.84, 0.867, 0.444, 3.025, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.3, ty: -122.2},
						transform: [-6.3, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.1, c: -0.1, d: 0.995, tx: -6.1, ty: -121.8},
						transform: [-6.1, -121.8, 1, 1, -0.1, 0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_nerd_leg1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -6.3, ty: -122.2},
						transform: [-6.3, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm_1_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.728, b: 0.685, c: 0.661, d: 0.702, tx: -2.4, ty: -187.7},
						transform: [-2.4, -187.7, 1, 0.964, 0.755, 2.386, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.563, b: 0.826, c: 0.796, d: 0.543, tx: 0.5, ty: -187.25},
						transform: [0.5, -187.25, 1, 0.964, 0.973, 2.169, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: -0.728, b: 0.685, c: 0.661, d: 0.702, tx: -2.4, ty: -187.7},
						transform: [-2.4, -187.7, 1, 0.964, 0.755, 2.386, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_nerd_arm_222_x",
						instancename: "",
						matrix: {a: -0.99, b: -0.267, c: 0.447, d: -0.894, tx: 20.65, ty: -162.5},
						transform: [20.65, -162.5, 1.025, 1, 2.678, -2.878, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_nerd_arm_222_x",
						instancename: "",
						matrix: {a: -1.001, b: -0.22, c: 0.404, d: -0.915, tx: 27.35, ty: -168},
						transform: [27.35, -168, 1.025, 1, 2.725, -2.925, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_nerd_arm_222_x",
						instancename: "",
						matrix: {a: -0.99, b: -0.267, c: 0.447, d: -0.894, tx: 20.65, ty: -162.5},
						transform: [20.65, -162.5, 1.025, 1, 2.678, -2.878, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
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
						classname: "_nerd_hand1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 31.9, ty: -184.95},
						transform: [31.9, -184.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_nerd_hand1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.047, c: 0.047, d: 0.999, tx: 37.5, ty: -190.95},
						transform: [37.5, -190.95, 1, 1, 0.047, -0.047, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_nerd_hand1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 31.9, ty: -184.95},
						transform: [31.9, -184.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body_1_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_nerd_body_1_x",
						instancename: "",
						matrix: {a: 0.947, b: -0.321, c: 0.321, d: 0.947, tx: -6.8, ty: -160.2},
						transform: [-6.8, -160.2, 1, 1, 0.327, -0.327, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_nerd_body_1_x",
						instancename: "",
						matrix: {a: 0.964, b: -0.267, c: 0.267, d: 0.964, tx: -5.35, ty: -160.1},
						transform: [-5.35, -160.1, 1, 1, 0.27, -0.27, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_nerd_body_1_x",
						instancename: "",
						matrix: {a: 0.947, b: -0.321, c: 0.321, d: 0.947, tx: -6.8, ty: -160.2},
						transform: [-6.8, -160.2, 1, 1, 0.327, -0.327, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm_1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.932, b: 0.362, c: -0.373, d: 0.962, tx: -32.6, ty: -177.55},
						transform: [-32.6, -177.55, 1, 1.032, -0.37, 0.37, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.753, b: 0.658, c: -0.679, d: 0.777, tx: -30.1, ty: -178.95},
						transform: [-30.1, -178.95, 1, 1.032, -0.718, 0.718, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_nerd_arm_1_x",
						instancename: "",
						matrix: {a: 0.932, b: 0.362, c: -0.373, d: 0.962, tx: -32.6, ty: -177.55},
						transform: [-32.6, -177.55, 1, 1.032, -0.37, 0.37, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_nerd_arm_222_x",
						instancename: "",
						matrix: {a: -0.255, b: -0.989, c: 0.999, d: -0.046, tx: -49.1, ty: -142.9},
						transform: [-49.1, -142.9, 1.022, 1, 1.616, -1.823, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_nerd_arm_222_x",
						instancename: "",
						matrix: {a: -0.198, b: -1.002, c: 1, d: 0.011, tx: -56.75, ty: -150.75},
						transform: [-56.75, -150.75, 1.022, 1, 1.559, -1.766, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_nerd_arm_222_x",
						instancename: "",
						matrix: {a: -0.255, b: -0.989, c: 0.999, d: -0.046, tx: -49.1, ty: -142.9},
						transform: [-49.1, -142.9, 1.022, 1, 1.616, -1.823, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_nerd_hand1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -22.8, ty: -142.35},
						transform: [-22.8, -142.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_nerd_hand1_x",
						instancename: "",
						matrix: {a: -0.998, b: -0.057, c: -0.057, d: 0.998, tx: -30.5, ty: -148.7},
						transform: [-30.5, -148.7, 1, 1, -0.057, -3.085, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_nerd_hand1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -22.8, ty: -142.35},
						transform: [-22.8, -142.35, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "head_idle",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_nerd_head_die_x",
						instancename: "",
						matrix: {a: 0.917, b: -0.398, c: 0.398, d: 0.917, tx: -15.65, ty: -208.6},
						transform: [-15.65, -208.6, 1, 1, 0.41, -0.41, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_nerd_head_hurt_x",
						instancename: "",
						matrix: {a: 0.862, b: -0.507, c: 0.507, d: 0.862, tx: -11.6, ty: -205.95},
						transform: [-11.6, -205.95, 1, 1, 0.532, -0.532, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_nerd_head_hurt_x",
						instancename: "",
						matrix: {a: 0.917, b: -0.398, c: 0.398, d: 0.917, tx: -15.65, ty: -208.6},
						transform: [-15.65, -208.6, 1, 1, 0.41, -0.41, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
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
						classname: "_nerd_pelvis_x",
						instancename: "",
						matrix: {a: 0.947, b: -0.321, c: 0.321, d: 0.947, tx: 3.1, ty: -124.85},
						transform: [3.1, -124.85, 1, 1, 0.327, -0.327, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_nerd_pelvis_x",
						instancename: "",
						matrix: {a: 0.929, b: -0.37, c: 0.37, d: 0.929, tx: 3.05, ty: -124.9},
						transform: [3.05, -124.9, 1, 1, 0.379, -0.379, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_nerd_pelvis_x",
						instancename: "",
						matrix: {a: 0.947, b: -0.321, c: 0.321, d: 0.947, tx: 3.1, ty: -124.85},
						transform: [3.1, -124.85, 1, 1, 0.327, -0.327, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.15, 0.36], [0.45, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "shoe_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: 0.973, b: -0.229, c: 0.229, d: 0.973, tx: -4.5, ty: -16.6},
						transform: [-4.5, -16.6, 1, 1, 0.231, -0.231, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.611, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: 0.945, b: -0.328, c: 0.328, d: 0.945, tx: 3.35, ty: -17.85},
						transform: [3.35, -17.85, 1, 1, 0.335, -0.335, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.611, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_nerd_shoe_x",
						instancename: "",
						matrix: {a: 0.973, b: -0.229, c: 0.229, d: 0.973, tx: -4.5, ty: -16.6},
						transform: [-4.5, -16.6, 1, 1, 0.231, -0.231, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.444, 0], [0.611, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "corto2",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_nerd_bearbot_turin_corto2",
						instancename: "",
						matrix: {a: -0.473, b: 0.382, c: -0.382, d: -0.473, tx: 0.85, ty: -192.55},
						transform: [0.85, -192.55, 0.607, 0.607, -2.462, 2.462, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "corto2",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_nerd_bearbot_turin_corto2",
						instancename: "",
						matrix: {a: 0.249, b: -0.554, c: -0.554, d: -0.249, tx: 24.6, ty: -46.8},
						transform: [24.6, -46.8, 0.607, 0.607, -1.993, -1.149, NaN],
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
						to: 10,
						classname: "_nerd_bearbot_turin_corto2",
						instancename: "",
						matrix: {a: 0.547, b: 0.264, c: 0.264, d: -0.547, tx: -30.45, ty: -153.8},
						transform: [-30.45, -153.8, 0.607, 0.607, 2.693, 0.449, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "corto1",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_nerd_bearbot_turin_corto1",
						instancename: "",
						matrix: {a: 0.405, b: 0.778, c: 0.778, d: -0.405, tx: -2.3, ty: -137.2},
						transform: [-2.3, -137.2, 0.877, 0.877, 2.05, 1.091, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"nerd_wreck": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "VACUUM_3",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_polar_vacuum_part_4",
						instancename: "NERD_VACUUM_4",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 2.8, ty: 0.4},
						transform: [2.8, 0.4, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "VACUUM_3",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_polar_vacuum_part_3",
						instancename: "NERD_VACUUM_3",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 2.8, ty: -6.8},
						transform: [2.8, -6.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "VACUUM_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_polar_stuff_vacuum_part_2",
						instancename: "NERD_VACUUM_2",
						matrix: {a: 0.958, b: -0.287, c: 0.287, d: 0.958, tx: -13.35, ty: -41.65},
						transform: [-13.35, -41.65, 1, 1, 0.292, -0.292, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "VACUUM_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_polar_stuff_vacuum_part_1",
						instancename: "NERD_VACUUM_1",
						matrix: {a: 0.982, b: -0.19, c: 0.19, d: 0.982, tx: -52.25, ty: -30.95},
						transform: [-52.25, -30.95, 1, 1, 0.191, -0.191, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "nerd_part_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_nerd_part_2",
						instancename: "NERD_PART_2",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 32.4, ty: -31.35},
						transform: [32.4, -31.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "nerd_part_2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_nerd_part_2",
						instancename: "NERD_PART_2",
						matrix: {a: -0.939, b: 0.345, c: 0.345, d: 0.939, tx: -12.7, ty: -20.6},
						transform: [-12.7, -20.6, 1, 1, 0.352, 2.789, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "nerd_part_6",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_nerd_part_6",
						instancename: "NERD_PART_6",
						matrix: {a: -0.984, b: 0.177, c: 0.177, d: 0.984, tx: 22.95, ty: -168.75},
						transform: [22.95, -168.75, 1, 1, 0.178, 2.963, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "nerd_part_3",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_nerd_part_3",
						instancename: "NERD_PART_3",
						matrix: {a: 0.984, b: -0.177, c: 0.177, d: 0.984, tx: 0.25, ty: -158.75},
						transform: [0.25, -158.75, 1, 1, 0.178, -0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "nerd_part_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_nerd_part_1",
						instancename: "NERD_PART_1",
						matrix: {a: 0.984, b: -0.177, c: 0.177, d: 0.984, tx: -4.95, ty: -217.5},
						transform: [-4.95, -217.5, 1, 1, 0.178, -0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "nerd_part_5",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_nerd_part_5",
						instancename: "NERD_PART_5",
						matrix: {a: 0.97, b: 0, c: 0, d: 0.97, tx: -6.65, ty: -78.9},
						transform: [-6.65, -78.9, 0.97, 0.97, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "nerd_part_5",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_nerd_part_5",
						instancename: "NERD_PART_5",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 20.15, ty: -83.55},
						transform: [20.15, -83.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "nerd_part_6",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_nerd_part_6",
						instancename: "NERD_PART_6",
						matrix: {a: 0.984, b: -0.177, c: 0.177, d: 0.984, tx: -30.7, ty: -151.6},
						transform: [-30.7, -151.6, 1, 1, 0.178, -0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nerd_polar_vacuum_nerd_idle": {
		type: "movieclip",
		fps: 24,
		totalFrames: 8,
		labels: {},
		layers: [
			{
				name: "Layer 7",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_nerd_polar_nerd_glowshadow",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.2, ty: 12.3},
						transform: [-0.2, 12.3, 1, 1, 0, 0, 0],
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
						to: 2,
						classname: "_nerd_polar_nerd_veleta_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 45.05, ty: -39.3},
						transform: [45.05, -39.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_nerd_polar_nerd_veleta_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.056, d: 1, tx: 46, ty: -39.3},
						transform: [46, -39.3, 1, 1.002, -0.056, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_nerd_polar_nerd_veleta_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 45.05, ty: -39.3},
						transform: [45.05, -39.3, 1, 1, 0, 0, 0],
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
						to: 2,
						classname: "_nerd_polar_nerd_vacuum_base",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_nerd_polar_nerd_vacuum_base",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.978, tx: 0, ty: 0.6},
						transform: [0, 0.6, 1, 0.978, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_nerd_polar_nerd_vacuum_base",
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
	"_nerd_leg2_x": {
		type: "bitmap",
		asset: "_nerd_leg2_x",
		scale: 1,
		position: [-10.9, -8.45],
	},
	"_nerd_shoe_x": {
		type: "bitmap",
		asset: "_nerd_shoe_x",
		scale: 1,
		position: [-34.2, -13.2],
	},
	"_nerd_leg1_x": {
		type: "bitmap",
		asset: "_nerd_leg1_x",
		scale: 1,
		position: [-13.2, -10.9],
	},
	"_nerd_arm_2_x": {
		type: "bitmap",
		asset: "_nerd_arm_2_x",
		scale: 1,
		position: [-10.85, -8.65],
	},
	"_nerd_arm_1_x": {
		type: "bitmap",
		asset: "_nerd_arm_1_x",
		scale: 1,
		position: [-12.95, -10.3],
	},
	"_nerd_body_1_x": {
		type: "bitmap",
		asset: "_nerd_body_1_x",
		scale: 1,
		position: [-29.1, -45.75],
	},
	"_nerd_head_idle": {
		type: "movieclip",
		fps: 24,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "headbase_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_nerd_headbase_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.35, ty: -1.85},
						transform: [1.35, -1.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_nerd_headbase_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.35, ty: -1.85},
						transform: [1.35, -1.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_nerd_headbase_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.35, ty: -1.85},
						transform: [1.35, -1.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "penacho_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_nerd_penacho_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.05, ty: -21.75},
						transform: [2.05, -21.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_nerd_penacho_x",
						instancename: "",
						matrix: {a: 1, b: -0.076, c: 0, d: 1, tx: 5.2, ty: -21.7},
						transform: [5.2, -21.7, 1.003, 1, 0, -0.076, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_nerd_penacho_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.05, ty: -21.75},
						transform: [2.05, -21.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ear_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_nerd_ear_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -9.45, ty: -0.1},
						transform: [-9.45, -0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_nerd_ear_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.124, d: 1, tx: -9.25, ty: -0.65},
						transform: [-9.25, -0.65, 1, 1.008, 0.124, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_nerd_ear_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -9.45, ty: -0.1},
						transform: [-9.45, -0.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mouth1_x",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_nerd_mouth1_x",
						instancename: "",
						matrix: {a: 0.864, b: 0.504, c: -0.504, d: 0.864, tx: -0.45, ty: 6.45},
						transform: [-0.45, 6.45, 1, 1, -0.528, 0.528, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_nerd_mouth1_x",
						instancename: "",
						matrix: {a: 0.915, b: 0.403, c: -0.501, d: 1.138, tx: 1.3, ty: 6.55},
						transform: [1.3, 6.55, 1, 1.244, -0.415, 0.415, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_nerd_mouth1_x",
						instancename: "",
						matrix: {a: 0.864, b: 0.504, c: -0.504, d: 0.864, tx: -0.45, ty: 6.45},
						transform: [-0.45, 6.45, 1, 1, -0.528, 0.528, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye1_r",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_nerd_eye1_r",
						instancename: "",
						matrix: {a: -0.737, b: 0, c: 0, d: 0.857, tx: 7.4, ty: -4.7},
						transform: [7.4, -4.7, 0.737, 0.857, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_nerd_eye1_r",
						instancename: "",
						matrix: {a: -0.493, b: 0, c: 0, d: 0.857, tx: 8.7, ty: -4.7},
						transform: [8.7, -4.7, 0.493, 0.857, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_nerd_eye1_r",
						instancename: "",
						matrix: {a: -0.737, b: 0, c: 0, d: 0.857, tx: 7.4, ty: -4.7},
						transform: [7.4, -4.7, 0.737, 0.857, 0, 3.142, NaN],
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
						to: 6,
						classname: "_nerd_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5.2, ty: -0.95},
						transform: [5.2, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_nerd_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6.9, ty: -0.95},
						transform: [6.9, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_nerd_nose_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5.2, ty: -0.95},
						transform: [5.2, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "eye1_l",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_nerd_eye1_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.35, ty: -4.85},
						transform: [-1.35, -4.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 13,
						classname: "_nerd_eye1_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.45, ty: -4.85},
						transform: [0.45, -4.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_nerd_eye1_l",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.35, ty: -4.85},
						transform: [-1.35, -4.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nerd_pelvis_x": {
		type: "bitmap",
		asset: "_nerd_pelvis_x",
		scale: 1,
		position: [-22.4, -11.85],
	},
	"_nerd_body_2_x": {
		type: "bitmap",
		asset: "_nerd_body_2_x",
		scale: 1,
		position: [-29.1, -50],
	},
	"_nerd_head_side_x": {
		type: "bitmap",
		asset: "_nerd_head_side_x",
		scale: 1,
		position: [-19.9, -35.7],
	},
	"_nerd_pelvis2_x": {
		type: "bitmap",
		asset: "_nerd_pelvis2_x",
		scale: 1,
		position: [-22.4, -11.85],
	},
	"_nerd_arm_22_x": {
		type: "bitmap",
		asset: "_nerd_arm_22_x",
		scale: 1,
		position: [-9.55, -8.05],
	},
	"_nerd_head_idle_x": {
		type: "bitmap",
		asset: "_nerd_head_idle_x",
		scale: 1,
		position: [-19, -36.95],
	},
	"_nerd_hands_x": {
		type: "bitmap",
		asset: "_nerd_hands_x",
		scale: 1,
		position: [-16.75, -19.95],
	},
	"_nerd_fx_x": {
		type: "bitmap",
		asset: "_nerd_fx_x",
		scale: 1,
		position: [-40.8, -54.4],
	},
	"_nerd_parche_1_x": {
		type: "bitmap",
		asset: "_nerd_parche_1_x",
		scale: 1,
		position: [-12.9, -12.05],
	},
	"_nerd_bearbot_boundingbox": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_bearbot_bound_x",
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
	"_nerd_arm_222_x": {
		type: "bitmap",
		asset: "_nerd_arm_222_x",
		scale: 1,
		position: [-10.85, -8.65],
	},
	"_nerd_hand1_x": {
		type: "bitmap",
		asset: "_nerd_hand1_x",
		scale: 1,
		position: [-15.8, -22],
	},
	"_nerd_head_hurt_x": {
		type: "bitmap",
		asset: "_nerd_head_hurt_x",
		scale: 1,
		position: [-19, -38.5],
	},
	"_nerd_head_die_x": {
		type: "bitmap",
		asset: "_nerd_head_die_x",
		scale: 1,
		position: [-19, -38.5],
	},
	"_nerd_bearbot_turin_corto2": {
		type: "movieclip",
		fps: 24,
		totalFrames: 9,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_bearbot_turin_corto2_1_x",
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
						classname: "_nerd_bearbot_turin_corto2_2_x",
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
						classname: "_nerd_bearbot_turin_corto2_1_x",
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
						classname: "_nerd_bearbot_turin_corto2_2_x",
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
						classname: "_nerd_bearbot_turin_corto2_1_x",
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
						classname: "_nerd_bearbot_turin_corto2_1_x",
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
	"_nerd_bearbot_turin_corto1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 18,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_nerd_bearbot_turin_corto1_1_x",
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
						classname: "_nerd_bearbot_turin_corto1_2_x",
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
						classname: "_nerd_bearbot_turin_corto1_1_x",
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
						classname: "_nerd_bearbot_turin_corto1_2_x",
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
						classname: "_nerd_bearbot_turin_corto1_1_x",
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
						classname: "_nerd_bearbot_turin_corto1_1_x",
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
						classname: "_nerd_bearbot_turin_corto1_2_x",
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
						classname: "_nerd_bearbot_turin_corto1_1_x",
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
						classname: "_nerd_bearbot_turin_corto1_1_x",
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
	"_nerd_polar_vacuum_part_4": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 16",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_polar_vacuum_part_4_lastlife_x",
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
						classname: "_nerd_polar_bodybox",
						instancename: "bound",
						matrix: {a: 1.902, b: 0, c: 0, d: 0.584, tx: -0.1, ty: 1.45},
						transform: [-0.1, 1.45, 1.902, 0.584, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nerd_polar_vacuum_part_3": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 16",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_polar_vacuum_part_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 5.45},
						transform: [0, 5.45, 1, 1, 0, 0, 0],
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
						classname: "_nerd_polar_bodybox",
						instancename: "bound",
						matrix: {a: 1.837, b: 0, c: 0, d: 0.456, tx: -0.4, ty: -2.6},
						transform: [-0.4, -2.6, 1.837, 0.456, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nerd_polar_stuff_vacuum_part_2": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_polar_veleta_wreck_1_x",
						instancename: "",
						matrix: {a: 0.804, b: -0.127, c: 0.127, d: 0.804, tx: -10.35, ty: 1.1},
						transform: [-10.35, 1.1, 0.814, 0.814, 0.157, -0.157, NaN],
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
						classname: "_nerd_polar_bodybox",
						instancename: "bound",
						matrix: {a: 0.516, b: 0, c: 0, d: 0.287, tx: -0.1, ty: 0.25},
						transform: [-0.1, 0.25, 0.516, 0.287, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nerd_polar_stuff_vacuum_part_1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_polar_veleta_wreck_1_x",
						instancename: "",
						matrix: {a: -0.831, b: -0.131, c: -0.131, d: 0.831, tx: 9.15, ty: 1},
						transform: [9.15, 1, 0.842, 0.842, -0.157, -2.985, NaN],
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
						classname: "_nerd_polar_bodybox",
						instancename: "bound",
						matrix: {a: 0.571, b: 0, c: 0, d: 0.318, tx: 0, ty: 0},
						transform: [0, 0, 0.571, 0.318, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nerd_nerd_part_2": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_nerd_part_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.6, ty: -1.35},
						transform: [-2.6, -1.35, 1, 1, 0, 0, 0],
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
						classname: "_nerd_bearbot_bodybox",
						instancename: "bound",
						matrix: {a: 0.635, b: 0, c: 0, d: 0.131, tx: -0.35, ty: -0.9},
						transform: [-0.35, -0.9, 0.635, 0.131, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nerd_nerd_part_6": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_nerd_part_6_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.65, ty: -5.2},
						transform: [-0.65, -5.2, 1, 1, 0, 0, 0],
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
						classname: "_nerd_bearbot_bodybox",
						instancename: "bound",
						matrix: {a: 0.21, b: 0, c: 0, d: 0.728, tx: 0, ty: -3.45},
						transform: [0, -3.45, 0.21, 0.728, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nerd_nerd_part_3": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_nerd_part_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.1, ty: 2.45},
						transform: [0.1, 2.45, 1, 1, 0, 0, 0],
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
						classname: "_nerd_bearbot_bodybox",
						instancename: "bound",
						matrix: {a: 0.557, b: 0, c: 0, d: 1.275, tx: -1.45, ty: 1.7},
						transform: [-1.45, 1.7, 0.557, 1.275, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nerd_nerd_part_1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_nerd_part_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.15, ty: 6.9},
						transform: [-2.15, 6.9, 1, 1, 0, 0, 0],
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
						classname: "_nerd_bearbot_bodybox",
						instancename: "bound",
						matrix: {a: 0.394, b: 0, c: 0, d: 0.745, tx: -1.55, ty: -0.3},
						transform: [-1.55, -0.3, 0.394, 0.745, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nerd_nerd_part_5": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_nerd_part_5_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.25, ty: -1.5},
						transform: [-0.25, -1.5, 1, 1, 0, 0, 0],
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
						classname: "_nerd_bearbot_bodybox",
						instancename: "bound",
						matrix: {a: 0.259, b: 0, c: 0, d: 1.126, tx: 0, ty: -0.85},
						transform: [0, -0.85, 0.259, 1.126, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nerd_polar_nerd_glowshadow": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_polar_shadow_gfx_nerd",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.71,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nerd_polar_nerd_veleta_x": {
		type: "bitmap",
		asset: "_nerd_polar_nerd_veleta_x",
		scale: 1,
		position: [-38.85, -16.8],
	},
	"_nerd_polar_nerd_vacuum_base": {
		type: "movieclip",
		fps: 24,
		totalFrames: 30,
		labels: {},
		layers: [
			{
				name: "vacuum_base_x",
				keys: [
					{
						from: 0,
						to: 29,
						classname: "_nerd_polar_nerd_vacuum_base_x",
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
				name: "glow1_x",
				keys: [
					{
						from: 0,
						to: 17,
						classname: "_nerd_polar_nerd_glow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -29.05, ty: -1.6},
						transform: [-29.05, -1.6, 1, 1, 0, 0, 0],
						alpha: 0.88,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.441, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 28,
						classname: "_nerd_polar_nerd_glow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -29.05, ty: -1.3},
						transform: [-29.05, -1.3, 1, 1, 0, 0, 0],
						alpha: 0.58,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.441, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_polar_nerd_glow1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -29.05, ty: -1.6},
						transform: [-29.05, -1.6, 1, 1, 0, 0, 0],
						alpha: 0.88,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.539, 0], [0.441, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "glow2_x",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_nerd_polar_nerd_glow2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 15.35},
						transform: [0, 15.35, 1, 1, 0, 0, 0],
						alpha: 0.45,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.441, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 28,
						classname: "_nerd_polar_nerd_glow2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 15.35},
						transform: [0, 15.35, 1, 1, 0, 0, 0],
						alpha: 0.68,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0], [0.441, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_nerd_polar_nerd_glow2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 15.35},
						transform: [0, 15.35, 1, 1, 0, 0, 0],
						alpha: 0.45,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nerd_headbase_x": {
		type: "bitmap",
		asset: "_nerd_headbase_x",
		scale: 1,
		position: [-19.1, -30.6],
	},
	"_nerd_penacho_x": {
		type: "bitmap",
		asset: "_nerd_penacho_x",
		scale: 1,
		position: [-10.8, -15.2],
	},
	"_nerd_ear_x": {
		type: "bitmap",
		asset: "_nerd_ear_x",
		scale: 1,
		position: [-9.55, -10],
	},
	"_nerd_mouth1_x": {
		type: "bitmap",
		asset: "_nerd_mouth1_x",
		scale: 1,
		position: [-9.45, -7],
	},
	"_nerd_eye1_r": {
		type: "movieclip",
		fps: 24,
		totalFrames: 16,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_nerd_eye_coso_1_x",
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
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_nerd_pupil_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.7, ty: 0.15},
						transform: [-1.7, 0.15, 1, 1, 0, 0, 0],
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
						to: 15,
						classname: "_nerd_eye_coso_lid_1_x",
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
						to: 7,
						classname: "_nerd_eyebrow_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: -3.75},
						transform: [-0.3, -3.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.449, 0], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 14,
						classname: "_nerd_eyebrow_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: -3.25},
						transform: [-0.3, -3.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.449, 0], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_nerd_eyebrow_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: -3.75},
						transform: [-0.3, -3.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nerd_nose_x": {
		type: "bitmap",
		asset: "_nerd_nose_x",
		scale: 1,
		position: [-8.15, -12.8],
	},
	"_nerd_eye1_l": {
		type: "movieclip",
		fps: 24,
		totalFrames: 16,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_nerd_eye_coso_1_x",
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
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_nerd_pupil_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.9, ty: 0.45},
						transform: [1.9, 0.45, 1, 1, 0, 0, 0],
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
						to: 15,
						classname: "_nerd_eye_coso_lid_1_x",
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
						to: 7,
						classname: "_nerd_eyebrow_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: -3.75},
						transform: [-0.3, -3.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.449, 0], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 14,
						classname: "_nerd_eyebrow_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: -3.25},
						transform: [-0.3, -3.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.449, 0], [0.542, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_nerd_eyebrow_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.3, ty: -3.75},
						transform: [-0.3, -3.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nerd_bearbot_bound_x": {
		type: "bitmap",
		asset: "_nerd_bearbot_bound_x",
		scale: 1,
		position: [-55, -55],
	},
	"_nerd_bearbot_turin_corto2_1_x": {
		type: "bitmap",
		asset: "_nerd_bearbot_turin_corto2_1_x",
		scale: 1,
		position: [-29.35, -27.8],
	},
	"_nerd_bearbot_turin_corto2_2_x": {
		type: "bitmap",
		asset: "_nerd_bearbot_turin_corto2_2_x",
		scale: 1,
		position: [-20.15, -29.85],
	},
	"_nerd_bearbot_turin_corto1_1_x": {
		type: "bitmap",
		asset: "_nerd_bearbot_turin_corto1_1_x",
		scale: 1,
		position: [-21.5, -27.9],
	},
	"_nerd_bearbot_turin_corto1_2_x": {
		type: "bitmap",
		asset: "_nerd_bearbot_turin_corto1_2_x",
		scale: 1,
		position: [-19.7, -28.5],
	},
	"_nerd_polar_vacuum_part_4_lastlife_x": {
		type: "bitmap",
		asset: "_nerd_polar_vacuum_part_4_lastlife_x",
		scale: 1,
		position: [-63.15, -33.95],
	},
	"_nerd_polar_bodybox": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Capa 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_polar_bodybox_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_nerd_polar_vacuum_part_3_x": {
		type: "bitmap",
		asset: "_nerd_polar_vacuum_part_3_x",
		scale: 1,
		position: [-55.4, -29.75],
	},
	"_nerd_polar_veleta_wreck_1_x": {
		type: "bitmap",
		asset: "_nerd_polar_veleta_wreck_1_x",
		scale: 1,
		position: [-16.1, -15.6],
	},
	"_nerd_nerd_part_2_x": {
		type: "bitmap",
		asset: "_nerd_nerd_part_2_x",
		scale: 1,
		position: [-19.9, -22.1],
	},
	"_nerd_bearbot_bodybox": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Capa 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_nerd_bearbot_bodybox_x",
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
	"_nerd_nerd_part_6_x": {
		type: "bitmap",
		asset: "_nerd_nerd_part_6_x",
		scale: 1,
		position: [-11.2, -27.2],
	},
	"_nerd_nerd_part_3_x": {
		type: "bitmap",
		asset: "_nerd_nerd_part_3_x",
		scale: 1,
		position: [-29.55, -50.35],
	},
	"_nerd_nerd_part_1_x": {
		type: "bitmap",
		asset: "_nerd_nerd_part_1_x",
		scale: 1,
		position: [-21, -38.5],
	},
	"_nerd_nerd_part_5_x": {
		type: "bitmap",
		asset: "_nerd_nerd_part_5_x",
		scale: 1,
		position: [-15.6, -36.85],
	},
	"_nerd_polar_shadow_gfx_nerd": {
		type: "movieclip",
		fps: 24,
		totalFrames: 29,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_nerd_polar_nerd_glowshadow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 1.5},
						transform: [0, 1.5, 1, 1, 0, 0, 0],
						alpha: 0.83,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 27,
						classname: "_nerd_polar_nerd_glowshadow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 1.5},
						transform: [0, 1.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.581, 0], [0.537, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_nerd_polar_nerd_glowshadow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 1.5},
						transform: [0, 1.5, 1, 1, 0, 0, 0],
						alpha: 0.83,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.581, 0], [0.537, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_nerd_polar_nerd_vacuum_base_x": {
		type: "bitmap",
		asset: "_nerd_polar_nerd_vacuum_base_x",
		scale: 1,
		position: [-62.75, -35.2],
	},
	"_nerd_polar_nerd_glow1_x": {
		type: "bitmap",
		asset: "_nerd_polar_nerd_glow1_x",
		scale: 1,
		position: [-32.8, -28.05],
	},
	"_nerd_polar_nerd_glow2_x": {
		type: "bitmap",
		asset: "_nerd_polar_nerd_glow2_x",
		scale: 1,
		position: [-66.25, -15.6],
	},
	"_nerd_eye_coso_1_x": {
		type: "bitmap",
		asset: "_nerd_eye_coso_1_x",
		scale: 1,
		position: [-8.15, -7.55],
	},
	"_nerd_pupil_x": {
		type: "bitmap",
		asset: "_nerd_pupil_x",
		scale: 1,
		position: [-6.2, -6.45],
	},
	"_nerd_eye_coso_lid_1_x": {
		type: "bitmap",
		asset: "_nerd_eye_coso_lid_1_x",
		scale: 1,
		position: [-7.6, -7.35],
	},
	"_nerd_eyebrow_1_x": {
		type: "bitmap",
		asset: "_nerd_eyebrow_1_x",
		scale: 1,
		position: [-10.05, -6.85],
	},
	"_nerd_polar_bodybox_x": {
		type: "bitmap",
		asset: "_nerd_polar_bodybox_x",
		scale: 1,
		position: [-30, -30],
	},
	"_nerd_bearbot_bodybox_x": {
		type: "bitmap",
		asset: "_nerd_bearbot_bodybox_x",
		scale: 1,
		position: [-30, -30],
	},
	"_nerd_polar_nerd_glowshadow_x": {
		type: "bitmap",
		asset: "_nerd_polar_nerd_glowshadow_x",
		scale: 1,
		position: [-92.4, -42.7],
	},
};
