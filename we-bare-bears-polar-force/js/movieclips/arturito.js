
var arturito = {
	"arturito": {
		type: "movieclip",
		fps: 30,
		totalFrames: 6,
		labels: {idle: {from:0, to:0}, attack: {from:1, to:1}, walk: {from:2, to:2}, hurt: {from:3, to:3}, die: {from:4, to:4}, wreck: {from:5, to:5}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "arturito_idle",
						instancename: "arturito",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -0.6, ty: -1},
						transform: [-0.6, -1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "arturito_attack",
						instancename: "arturito",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -0.6, ty: -1},
						transform: [-0.6, -1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "arturito_walk",
						instancename: "arturito",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -0.6, ty: -1},
						transform: [-0.6, -1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "arturito_hurt",
						instancename: "arturito",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -0.6, ty: -1},
						transform: [-0.6, -1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "arturito_punched",
						instancename: "arturito",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -0.6, ty: -1},
						transform: [-0.6, -1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "arturito_wreck",
						instancename: "arturito",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -0.6, ty: -1},
						transform: [-0.6, -1, 1, 1, 0, 3.142, NaN],
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
						to: 1,
					},
					{
						from: 2,
						to: 2,
					},
					{
						from: 3,
						to: 3,
					},
					{
						from: 4,
						to: 4,
					},
					{
						from: 5,
						to: 5,
					},
				]
			},
		]
	},
	"arturito_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 23,
		labels: {},
		layers: [
			{
				name: "wheel_walk",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -33.9, ty: -9.25},
						transform: [-33.9, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 21,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.051, d: 1, tx: -32.85, ty: -9.25},
						transform: [-32.85, -9.25, 1, 1.001, -0.051, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -33.9, ty: -9.25},
						transform: [-33.9, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "pants_1_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 4.65, ty: -12.3},
						transform: [4.65, -12.3, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 21,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 4.65, ty: -14.1},
						transform: [4.65, -14.1, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 4.65, ty: -12.3},
						transform: [4.65, -12.3, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body1_x",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 21,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -102.15},
						transform: [5.75, -102.15, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "bodyinsisde_x",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 21,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1.021, b: 0.014, c: -0.014, d: 1, tx: 4.8, ty: -102.15},
						transform: [4.8, -102.15, 1.021, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "weapongstick_x",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_arturito_weapongstick",
						instancename: "weapon",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 3.9, ty: -151.35},
						transform: [3.9, -151.35, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 21,
						classname: "_arturito_weapongstick",
						instancename: "weapon",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 3.9, ty: -156.55},
						transform: [3.9, -156.55, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_arturito_weapongstick",
						instancename: "weapon",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 3.9, ty: -151.35},
						transform: [3.9, -151.35, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "bodycover_x",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 17.4, ty: -96.6},
						transform: [17.4, -96.6, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 21,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1.039, b: 0.014, c: -0.014, d: 1, tx: 16, ty: -101.8},
						transform: [16, -101.8, 1.039, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 17.4, ty: -96.6},
						transform: [17.4, -96.6, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "lineofknobs_x",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 29.25, ty: -104.25},
						transform: [29.25, -104.25, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 21,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.946, b: 0.013, c: -0.014, d: 1, tx: 28.25, ty: -109.45},
						transform: [28.25, -109.45, 0.946, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 29.25, ty: -104.25},
						transform: [29.25, -104.25, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ring_x",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.1, ty: -44.15},
						transform: [5.1, -44.15, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 21,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.1, ty: -48.05},
						transform: [5.1, -48.05, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.1, ty: -44.15},
						transform: [5.1, -44.15, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_arturito_eye",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 0.55, ty: -109.8},
						transform: [0.55, -109.8, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 21,
						classname: "_arturito_eye",
						instancename: "",
						matrix: {a: 0.936, b: 0.013, c: -0.014, d: 1, tx: -2.45, ty: -115},
						transform: [-2.45, -115, 0.937, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_arturito_eye",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 0.55, ty: -109.8},
						transform: [0.55, -109.8, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "wheel_walk",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 49.75, ty: -1.9},
						transform: [49.75, -1.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 21,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.045, d: 1.058, tx: 48.75, ty: -3.1},
						transform: [48.75, -3.1, 1, 1.059, 0.043, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 49.75, ty: -1.9},
						transform: [49.75, -1.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"arturito_attack": {
		type: "movieclip",
		fps: 30,
		totalFrames: 47,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 11,
						classname: "_arturito_attacktrail_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -134.55, ty: -54.4},
						transform: [-134.55, -54.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_arturito_attacktrail_x",
						instancename: "",
						matrix: {a: 0.632, b: -0.334, c: 0.136, d: 0.617, tx: -132.4, ty: -43.45},
						transform: [-132.4, -43.45, 0.715, 0.632, 0.217, -0.486, NaN],
						alpha: 0.15,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 46,
					},
				]
			},
			{
				name: "wheel_walk",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -33.9, ty: -9.25},
						transform: [-33.9, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -32.8, ty: -9.25},
						transform: [-32.8, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.439, 0], [0.751, 0.406], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -32.2, ty: -9.25},
						transform: [-32.2, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.403, 0.279], [0.644, 0.701], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 11,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -29.4, ty: -13.05},
						transform: [-29.4, -13.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.441], [0.567, 0.792], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -29.4, ty: -9.25},
						transform: [-29.4, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.308, 0.656], [0.641, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -29.4, ty: -9.25},
						transform: [-29.4, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 25,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -29.4, ty: -9.25},
						transform: [-29.4, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 32,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -29.4, ty: -9.25},
						transform: [-29.4, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 40,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -29.4, ty: -9.25},
						transform: [-29.4, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 45,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -33.9, ty: -9.25},
						transform: [-33.9, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.563, 0], [0.554, 0.885], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -33.9, ty: -9.25},
						transform: [-33.9, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.31, 0.652], [0.642, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "pants_1_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 4.65, ty: -12.3},
						transform: [4.65, -12.3, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 0.984, b: 0.177, c: -0.177, d: 0.984, tx: 5.2, ty: -11.45},
						transform: [5.2, -11.45, 1, 1, -0.178, 0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.439, 0], [0.751, 0.406], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.144, c: -0.144, d: 0.989, tx: 5.9, ty: -11.85},
						transform: [5.9, -11.85, 0.999, 0.999, -0.144, 0.144, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.403, 0.279], [0.644, 0.701], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 11,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: -0.006, c: 0.006, d: 1, tx: 8.45, ty: -23.9},
						transform: [8.45, -23.9, 1, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.441], [0.567, 0.792], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: -0.005, c: 0.005, d: 1, tx: 8.5, ty: -13.2},
						transform: [8.5, -13.2, 1, 1, 0.005, -0.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.308, 0.656], [0.641, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: -0.006, c: 0.006, d: 1, tx: 8.45, ty: -13.25},
						transform: [8.45, -13.25, 1, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 25,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: -0.006, c: 0.006, d: 1, tx: 8.45, ty: -13.25},
						transform: [8.45, -13.25, 1, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 32,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: -0.006, c: 0.006, d: 1, tx: 8.45, ty: -13.25},
						transform: [8.45, -13.25, 1, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 40,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: -0.006, c: 0.006, d: 1, tx: 8.45, ty: -13.25},
						transform: [8.45, -13.25, 1, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 45,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 4.65, ty: -12.3},
						transform: [4.65, -12.3, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.563, 0], [0.554, 0.885], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 4.65, ty: -12.3},
						transform: [4.65, -12.3, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.31, 0.652], [0.642, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body1_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 0.984, b: 0.177, c: -0.177, d: 0.984, tx: 20.15, ty: -94.9},
						transform: [20.15, -94.9, 1, 1, -0.178, 0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.439, 0], [0.751, 0.406], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.144, c: -0.144, d: 0.989, tx: 18.1, ty: -95.55},
						transform: [18.1, -95.55, 0.999, 0.999, -0.144, 0.144, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.403, 0.279], [0.644, 0.701], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 11,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: -0.006, c: 0.006, d: 1, tx: 7.95, ty: -108.65},
						transform: [7.95, -108.65, 1, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.441], [0.567, 0.792], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: -0.005, c: 0.005, d: 1, tx: 7.95, ty: -93.7},
						transform: [7.95, -93.7, 1, 1, 0.005, -0.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.308, 0.656], [0.641, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: -0.006, c: 0.006, d: 1, tx: 7.95, ty: -93.5},
						transform: [7.95, -93.5, 1, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 19,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: -0.006, c: 0.006, d: 1, tx: 7.95, ty: -98},
						transform: [7.95, -98, 1, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 22,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: -0.005, c: 0.005, d: 1, tx: 7.95, ty: -96.2},
						transform: [7.95, -96.2, 1, 1, 0.005, -0.005, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.475, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 25,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: -0.006, c: 0.006, d: 1, tx: 7.95, ty: -98},
						transform: [7.95, -98, 1, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 32,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: -0.006, c: 0.006, d: 1, tx: 7.95, ty: -98},
						transform: [7.95, -98, 1, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 40,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: -0.006, c: 0.006, d: 1, tx: 7.95, ty: -96.65},
						transform: [7.95, -96.65, 1, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 45,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.563, 0], [0.554, 0.885], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.31, 0.652], [0.642, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "bodyinsisde_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1.06, b: 0.19, c: -0.177, d: 0.984, tx: 16.55, ty: -95.5},
						transform: [16.55, -95.5, 1.077, 1, -0.178, 0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.439, 0], [0.751, 0.406], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1.065, b: 0.155, c: -0.144, d: 0.989, tx: 14.35, ty: -96.05},
						transform: [14.35, -96.05, 1.076, 0.999, -0.144, 0.144, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.403, 0.279], [0.644, 0.701], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 11,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1.077, b: -0.007, c: 0.006, d: 1, tx: 4.3, ty: -108.6},
						transform: [4.3, -108.6, 1.077, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.441], [0.567, 0.792], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1.077, b: -0.005, c: 0.005, d: 1, tx: 4.35, ty: -93.6},
						transform: [4.35, -93.6, 1.077, 1, 0.005, -0.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.308, 0.656], [0.641, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1.077, b: -0.007, c: 0.006, d: 1, tx: 4.3, ty: -93.45},
						transform: [4.3, -93.45, 1.077, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 19,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1.077, b: -0.007, c: 0.006, d: 1, tx: 4.3, ty: -97.95},
						transform: [4.3, -97.95, 1.077, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 22,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1.077, b: -0.005, c: 0.005, d: 1, tx: 4.35, ty: -96.15},
						transform: [4.35, -96.15, 1.077, 1, 0.005, -0.005, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0], [0.475, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 25,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1.077, b: -0.007, c: 0.006, d: 1, tx: 4.3, ty: -97.95},
						transform: [4.3, -97.95, 1.077, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 32,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1.077, b: -0.007, c: 0.006, d: 1, tx: 4.3, ty: -97.95},
						transform: [4.3, -97.95, 1.077, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 40,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1.077, b: -0.007, c: 0.006, d: 1, tx: 4.3, ty: -96.6},
						transform: [4.3, -96.6, 1.077, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 45,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.563, 0], [0.554, 0.885], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.31, 0.652], [0.642, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "weapongstick_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_arturito_weapongstick",
						instancename: "weapon",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 3.9, ty: -151.35},
						transform: [3.9, -151.35, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_arturito_weapongstick",
						instancename: "weapon",
						matrix: {a: 0.983, b: 0.184, c: -0.184, d: 0.983, tx: 34.4, ty: -173.15},
						transform: [34.4, -173.15, 1, 1, -0.185, 0.185, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.439, 0], [0.751, 0.406], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_arturito_weapongstick",
						instancename: "weapon",
						matrix: {a: 0.993, b: 0.117, c: -0.117, d: 0.993, tx: 29.4, ty: -163.65},
						transform: [29.4, -163.65, 1, 1, -0.117, 0.117, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.342, 0.348], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_arturito_weapongstick2",
						instancename: "weapon",
						matrix: {a: 0, b: -1, c: 1, d: 0, tx: -17.1, ty: -66.9},
						transform: [-17.1, -66.9, 1, 1, 1.571, -1.571, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.205, 0.427], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 15,
						classname: "_arturito_weapongstick2",
						instancename: "weapon",
						matrix: {a: 0, b: -1, c: 1, d: 0, tx: -17.1, ty: -62.45},
						transform: [-17.1, -62.45, 1, 1, 1.571, -1.571, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.461, 0], [0.821, 0.527], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 25,
						classname: "_arturito_weapongstick2",
						instancename: "weapon",
						matrix: {a: 0, b: -1, c: 1, d: 0, tx: -17.1, ty: -60.65},
						transform: [-17.1, -60.65, 1, 1, 1.571, -1.571, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 32,
						classname: "_arturito_weapongstick2",
						instancename: "weapon",
						matrix: {a: 0, b: -1, c: 1, d: 0, tx: -17.1, ty: -60.65},
						transform: [-17.1, -60.65, 1, 1, 1.571, -1.571, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.821, 0.5], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 33,
						classname: "_arturito_weapongstick2",
						instancename: "weapon",
						matrix: {a: 0, b: -1, c: 1, d: 0, tx: -17.1, ty: -108.5},
						transform: [-17.1, -108.5, 1, 1, 1.571, -1.571, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.244, 0.337], [0.576, 0.694], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 34,
						classname: "_arturito_weapongstick2",
						instancename: "weapon",
						matrix: {a: 0.772, b: -0.633, c: 0.633, d: 0.772, tx: -5.4, ty: -132.25},
						transform: [-5.4, -132.25, 0.998, 0.998, 0.687, -0.687, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.309, 0.359], [0.642, 0.696], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 37,
						classname: "_arturito_weapongstick",
						instancename: "weapon",
						matrix: {a: 0.915, b: -0.399, c: 0.399, d: 0.915, tx: -7.3, ty: -156.95},
						transform: [-7.3, -156.95, 0.998, 0.998, 0.411, -0.411, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.274, 0.599], [0.606, 1], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 45,
						classname: "_arturito_weapongstick",
						instancename: "weapon",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.7, ty: -169.2},
						transform: [5.7, -169.2, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_arturito_weapongstick",
						instancename: "weapon",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 3.9, ty: -151.35},
						transform: [3.9, -151.35, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "bodycover_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 17.4, ty: -96.6},
						transform: [17.4, -96.6, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1.062, b: 0.191, c: -0.177, d: 0.984, tx: 28.75, ty: -93.15},
						transform: [28.75, -93.15, 1.079, 1, -0.178, 0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.439, 0], [0.751, 0.406], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1.067, b: 0.155, c: -0.144, d: 0.989, tx: 26.7, ty: -94.05},
						transform: [26.7, -94.05, 1.078, 0.999, -0.144, 0.144, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.403, 0.279], [0.644, 0.701], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 11,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1.079, b: -0.007, c: 0.006, d: 1, tx: 16.7, ty: -108.55},
						transform: [16.7, -108.55, 1.079, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.265, 0.34], [0.575, 0.738], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1.079, b: -0.005, c: 0.005, d: 1, tx: 16.75, ty: -93.65},
						transform: [16.75, -93.65, 1.079, 1, 0.005, -0.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.307, 0.64], [0.639, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1.079, b: -0.007, c: 0.006, d: 1, tx: 16.7, ty: -93.4},
						transform: [16.7, -93.4, 1.079, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 19,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1.079, b: -0.007, c: 0.006, d: 1, tx: 16.7, ty: -97.9},
						transform: [16.7, -97.9, 1.079, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.482, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 22,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1.079, b: -0.005, c: 0.005, d: 1, tx: 16.75, ty: -96.1},
						transform: [16.75, -96.1, 1.079, 1, 0.005, -0.005, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.475, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 25,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1.079, b: -0.007, c: 0.006, d: 1, tx: 16.7, ty: -97.9},
						transform: [16.7, -97.9, 1.079, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 32,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1.079, b: -0.007, c: 0.006, d: 1, tx: 16.7, ty: -97.9},
						transform: [16.7, -97.9, 1.079, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 40,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1.079, b: -0.007, c: 0.006, d: 1, tx: 16.7, ty: -96.55},
						transform: [16.7, -96.55, 1.079, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 45,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 17.4, ty: -96.6},
						transform: [17.4, -96.6, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.563, 0], [0.554, 0.885], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 17.4, ty: -96.6},
						transform: [17.4, -96.6, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.31, 0.652], [0.642, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "lineofknobs_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 29.25, ty: -104.25},
						transform: [29.25, -104.25, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.911, b: 0.164, c: -0.177, d: 0.984, tx: 38.7, ty: -99.25},
						transform: [38.7, -99.25, 0.926, 1, -0.178, 0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.439, 0], [0.751, 0.406], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.916, b: 0.133, c: -0.144, d: 0.989, tx: 36.4, ty: -100.4},
						transform: [36.4, -100.4, 0.925, 0.999, -0.144, 0.144, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.403, 0.279], [0.644, 0.701], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 11,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.926, b: -0.006, c: 0.006, d: 1, tx: 25.35, ty: -116.35},
						transform: [25.35, -116.35, 0.926, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.265, 0.34], [0.575, 0.738], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.926, b: -0.004, c: 0.005, d: 1, tx: 25.3, ty: -101.4},
						transform: [25.3, -101.4, 0.926, 1, 0.005, -0.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.307, 0.64], [0.639, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.926, b: -0.006, c: 0.006, d: 1, tx: 25.35, ty: -101.2},
						transform: [25.35, -101.2, 0.926, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 19,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.926, b: -0.006, c: 0.006, d: 1, tx: 25.35, ty: -105.7},
						transform: [25.35, -105.7, 0.926, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.482, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 22,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.926, b: -0.004, c: 0.005, d: 1, tx: 25.35, ty: -103.9},
						transform: [25.35, -103.9, 0.926, 1, 0.005, -0.005, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.48, 0], [0.475, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 25,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.926, b: -0.006, c: 0.006, d: 1, tx: 25.35, ty: -105.7},
						transform: [25.35, -105.7, 0.926, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 32,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.926, b: -0.006, c: 0.006, d: 1, tx: 25.35, ty: -105.7},
						transform: [25.35, -105.7, 0.926, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 40,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.926, b: -0.006, c: 0.006, d: 1, tx: 25.35, ty: -104.35},
						transform: [25.35, -104.35, 0.926, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 45,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 29.25, ty: -104.25},
						transform: [29.25, -104.25, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.563, 0], [0.554, 0.885], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 29.25, ty: -104.25},
						transform: [29.25, -104.25, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.31, 0.652], [0.642, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ring_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.1, ty: -44.15},
						transform: [5.1, -44.15, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 0.984, b: 0.177, c: -0.177, d: 0.984, tx: 10.8, ty: -42.8},
						transform: [10.8, -42.8, 1, 1, -0.178, 0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.439, 0], [0.751, 0.406], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.144, c: -0.144, d: 0.989, tx: 10.4, ty: -43.25},
						transform: [10.4, -43.25, 0.999, 0.999, -0.144, 0.144, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.403, 0.279], [0.644, 0.701], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 11,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 1, b: -0.006, c: 0.006, d: 1, tx: 8.25, ty: -55.75},
						transform: [8.25, -55.75, 1, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.265, 0.34], [0.575, 0.738], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 1, b: -0.005, c: 0.005, d: 1, tx: 8.3, ty: -45.1},
						transform: [8.3, -45.1, 1, 1, 0.005, -0.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.307, 0.64], [0.639, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 1, b: -0.006, c: 0.006, d: 1, tx: 8.25, ty: -45.1},
						transform: [8.25, -45.1, 1, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 25,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 1, b: -0.006, c: 0.006, d: 1, tx: 8.25, ty: -45.1},
						transform: [8.25, -45.1, 1, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 32,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 1, b: -0.006, c: 0.006, d: 1, tx: 8.25, ty: -45.1},
						transform: [8.25, -45.1, 1, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 40,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 1, b: -0.006, c: 0.006, d: 1, tx: 8.25, ty: -45.1},
						transform: [8.25, -45.1, 1, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 45,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.1, ty: -44.15},
						transform: [5.1, -44.15, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.563, 0], [0.554, 0.885], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.1, ty: -44.15},
						transform: [5.1, -44.15, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.31, 0.652], [0.642, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_arturito_eye",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 0.55, ty: -109.8},
						transform: [0.55, -109.8, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_arturito_eye",
						instancename: "",
						matrix: {a: 0.847, b: 0.152, c: -0.177, d: 0.984, tx: 8.1, ty: -110.05},
						transform: [8.1, -110.05, 0.861, 1, -0.178, 0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.439, 0], [0.751, 0.406], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_arturito_eye",
						instancename: "",
						matrix: {a: 0.851, b: 0.124, c: -0.144, d: 0.989, tx: 5.5, ty: -110.25},
						transform: [5.5, -110.25, 0.86, 0.999, -0.144, 0.144, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.403, 0.279], [0.644, 0.701], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 11,
						classname: "_arturito_eye",
						instancename: "",
						matrix: {a: 0.861, b: -0.005, c: 0.006, d: 1, tx: -6.65, ty: -121.35},
						transform: [-6.65, -121.35, 0.861, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.265, 0.34], [0.575, 0.738], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_arturito_eye",
						instancename: "",
						matrix: {a: 0.861, b: -0.004, c: 0.005, d: 1, tx: -6.65, ty: -106.45},
						transform: [-6.65, -106.45, 0.861, 1, 0.005, -0.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.307, 0.64], [0.639, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_arturito_eye",
						instancename: "",
						matrix: {a: 0.861, b: -0.005, c: 0.006, d: 1, tx: -6.65, ty: -106.2},
						transform: [-6.65, -106.2, 0.861, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 19,
						classname: "_arturito_eye",
						instancename: "",
						matrix: {a: 0.861, b: -0.005, c: 0.006, d: 1, tx: -6.65, ty: -110.7},
						transform: [-6.65, -110.7, 0.861, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.561, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 22,
						classname: "_arturito_eye",
						instancename: "",
						matrix: {a: 0.861, b: -0.004, c: 0.005, d: 1, tx: -6.75, ty: -108.9},
						transform: [-6.75, -108.9, 0.861, 1, 0.005, -0.005, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.475, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 25,
						classname: "_arturito_eye",
						instancename: "",
						matrix: {a: 0.861, b: -0.005, c: 0.006, d: 1, tx: -6.65, ty: -110.7},
						transform: [-6.65, -110.7, 0.861, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 32,
						classname: "_arturito_eye",
						instancename: "",
						matrix: {a: 0.861, b: -0.005, c: 0.006, d: 1, tx: -6.65, ty: -110.7},
						transform: [-6.65, -110.7, 0.861, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 40,
						classname: "_arturito_eye",
						instancename: "",
						matrix: {a: 0.861, b: -0.005, c: 0.006, d: 1, tx: -6.65, ty: -109.35},
						transform: [-6.65, -109.35, 0.861, 1, 0.006, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 45,
						classname: "_arturito_eye",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 0.55, ty: -109.8},
						transform: [0.55, -109.8, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.563, 0], [0.554, 0.885], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_arturito_eye",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 0.55, ty: -109.8},
						transform: [0.55, -109.8, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.31, 0.652], [0.642, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "wheel_walk",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 49.75, ty: -1.9},
						transform: [49.75, -1.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 50.3, ty: -1.9},
						transform: [50.3, -1.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.439, 0], [0.751, 0.406], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1.015, b: 0, c: 0, d: 1, tx: 50.75, ty: -2},
						transform: [50.75, -2, 1.015, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.403, 0.279], [0.644, 0.701], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 11,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1.083, b: 0, c: 0, d: 1, tx: 52.75, ty: -7.7},
						transform: [52.75, -7.7, 1.083, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.265, 0.34], [0.575, 0.738], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1.083, b: 0, c: 0, d: 1, tx: 52.7, ty: -2.55},
						transform: [52.7, -2.55, 1.083, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.307, 0.64], [0.639, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1.083, b: 0, c: 0, d: 1, tx: 52.75, ty: -2.55},
						transform: [52.75, -2.55, 1.083, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 25,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1.083, b: 0, c: 0, d: 1, tx: 52.75, ty: -2.55},
						transform: [52.75, -2.55, 1.083, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 32,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1.083, b: 0, c: 0, d: 1, tx: 52.75, ty: -2.55},
						transform: [52.75, -2.55, 1.083, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 40,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1.083, b: 0, c: 0, d: 1, tx: 52.75, ty: -2.55},
						transform: [52.75, -2.55, 1.083, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 45,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 49.75, ty: -1.9},
						transform: [49.75, -1.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.563, 0], [0.554, 0.885], [1, 1], ],
						}
					},
					{
						from: 46,
						to: 46,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 49.75, ty: -1.9},
						transform: [49.75, -1.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.31, 0.652], [0.642, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "hitbox",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 12,
						classname: "_nutsandbolts_boundingbox",
						instancename: "hitbox",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -134.95, ty: -54},
						transform: [-134.95, -54, 0.56, 0.56, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 46,
					},
				]
			},
		]
	},
	"arturito_walk": {
		type: "movieclip",
		fps: 30,
		totalFrames: 27,
		labels: {},
		layers: [
			{
				name: "wheel_walk",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_arturito_wheel_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -33.9, ty: -9.25},
						transform: [-33.9, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 25,
						classname: "_arturito_wheel_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -29.4, ty: -9.25},
						transform: [-29.4, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 26,
						classname: "_arturito_wheel_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -33.9, ty: -9.25},
						transform: [-33.9, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "pants_1_x",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 4.65, ty: -12.3},
						transform: [4.65, -12.3, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 25,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.75, ty: -12.4},
						transform: [4.75, -12.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 26,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 4.65, ty: -12.3},
						transform: [4.65, -12.3, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body1_x",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 25,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.75, ty: -97.15},
						transform: [4.75, -97.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 26,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "bodyinsisde_x",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 25,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1.077, b: 0, c: 0, d: 1, tx: 1.1, ty: -97.15},
						transform: [1.1, -97.15, 1.077, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 26,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "weapongstick_x",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_arturito_weapongstick",
						instancename: "weapon",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 3.9, ty: -151.35},
						transform: [3.9, -151.35, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 25,
						classname: "_arturito_weapongstick",
						instancename: "weapon",
						matrix: {a: 0.999, b: -0.049, c: 0.049, d: 0.999, tx: 0.1, ty: -151.5},
						transform: [0.1, -151.5, 1, 1, 0.049, -0.049, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 26,
						classname: "_arturito_weapongstick",
						instancename: "weapon",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 3.9, ty: -151.35},
						transform: [3.9, -151.35, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "bodycover_x",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 17.4, ty: -96.6},
						transform: [17.4, -96.6, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 25,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1.079, b: 0, c: 0, d: 1, tx: 13.55, ty: -96.95},
						transform: [13.55, -96.95, 1.079, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 26,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 17.4, ty: -96.6},
						transform: [17.4, -96.6, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "lineofknobs_x",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 29.25, ty: -104.25},
						transform: [29.25, -104.25, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 25,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.926, b: 0, c: 0, d: 1, tx: 22.25, ty: -104.75},
						transform: [22.25, -104.75, 0.926, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 26,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 29.25, ty: -104.25},
						transform: [29.25, -104.25, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ring_x",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.1, ty: -44.15},
						transform: [5.1, -44.15, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 25,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 4.75, ty: -44.25},
						transform: [4.75, -44.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 26,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.1, ty: -44.15},
						transform: [5.1, -44.15, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_arturito_eye",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 0.55, ty: -109.8},
						transform: [0.55, -109.8, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 25,
						classname: "_arturito_eye",
						instancename: "",
						matrix: {a: 0.861, b: 0, c: 0, d: 1, tx: -9.8, ty: -109.95},
						transform: [-9.8, -109.95, 0.861, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 26,
						classname: "_arturito_eye",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 0.55, ty: -109.8},
						transform: [0.55, -109.8, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "wheel_walk",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_arturito_wheel_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 49.75, ty: -1.9},
						transform: [49.75, -1.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 25,
						classname: "_arturito_wheel_walk",
						instancename: "",
						matrix: {a: 1.083, b: 0, c: 0, d: 1, tx: 44.95, ty: -1.9},
						transform: [44.95, -1.9, 1.083, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 26,
						classname: "_arturito_wheel_walk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 49.75, ty: -1.9},
						transform: [49.75, -1.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"arturito_hurt": {
		type: "movieclip",
		fps: 30,
		totalFrames: 21,
		labels: {},
		layers: [
			{
				name: "wheel_walk",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -33.9, ty: -9.25},
						transform: [-33.9, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.428], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 6,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.094, d: 1, tx: -31.9, ty: -9.25},
						transform: [-31.9, -9.25, 1, 1.004, -0.094, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.766, 0.469], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.109, d: 1, tx: -36.2, ty: -9.25},
						transform: [-36.2, -9.25, 1, 1.006, 0.109, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -33.9, ty: -9.25},
						transform: [-33.9, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -33.9, ty: -9.25},
						transform: [-33.9, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 16,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -33.9, ty: -9.25},
						transform: [-33.9, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 19,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -33.9, ty: -9.25},
						transform: [-33.9, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -33.9, ty: -9.25},
						transform: [-33.9, -9.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "pants_1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.061, c: -0.061, d: 0.998, tx: 4.9, ty: -12.05},
						transform: [4.9, -12.05, 1, 1, -0.061, 0.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.428], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 6,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 4.25, ty: -17.55},
						transform: [4.25, -17.55, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.766, 0.469], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.034, c: 0.034, d: 0.999, tx: 4.7, ty: -10},
						transform: [4.7, -10, 1, 1, 0.034, -0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 4.65, ty: -12.3},
						transform: [4.65, -12.3, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 4.65, ty: -12.3},
						transform: [4.65, -12.3, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 16,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 4.65, ty: -12.3},
						transform: [4.65, -12.3, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 19,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 4.65, ty: -12.3},
						transform: [4.65, -12.3, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 4.65, ty: -12.3},
						transform: [4.65, -12.3, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.061, c: -0.061, d: 0.998, tx: 10, ty: -96.55},
						transform: [10, -96.55, 1, 1, -0.061, 0.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.428], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 6,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 17.95, ty: -107.25},
						transform: [17.95, -107.25, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.766, 0.469], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.034, c: 0.034, d: 0.999, tx: 1.8, ty: -94.6},
						transform: [1.8, -94.6, 1, 1, 0.034, -0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 16,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 19,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_arturito_body1_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bodyinsisde_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.061, c: -0.061, d: 0.998, tx: 10, ty: -96.55},
						transform: [10, -96.55, 1, 1, -0.061, 0.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.428], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 6,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 17.95, ty: -107.25},
						transform: [17.95, -107.25, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.766, 0.469], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.034, c: 0.034, d: 0.999, tx: 1.8, ty: -94.6},
						transform: [1.8, -94.6, 1, 1, 0.034, -0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1.12, b: 0.015, c: -0.014, d: 1, tx: 0.05, ty: -97},
						transform: [0.05, -97, 1.12, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 16,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 0.918, b: 0.012, c: -0.014, d: 1, tx: 9.6, ty: -96.85},
						transform: [9.6, -96.85, 0.918, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 19,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1.12, b: 0.015, c: -0.014, d: 1, tx: 0.05, ty: -97},
						transform: [0.05, -97, 1.12, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_arturito_bodyinsisde_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.75, ty: -96.95},
						transform: [5.75, -96.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "weapongstick_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_arturito_weapongstick",
						instancename: "weapon",
						matrix: {a: 0.998, b: 0.061, c: -0.061, d: 0.998, tx: 10.7, ty: -150.95},
						transform: [10.7, -150.95, 1, 1, -0.061, 0.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.428], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 6,
						classname: "_arturito_weapongstick",
						instancename: "weapon",
						matrix: {a: 0.979, b: -0.206, c: 0.206, d: 0.979, tx: 23.6, ty: -161.35},
						transform: [23.6, -161.35, 1, 1, 0.207, -0.207, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.766, 0.469], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_arturito_weapongstick",
						instancename: "weapon",
						matrix: {a: 0.999, b: 0.041, c: -0.041, d: 0.999, tx: -2.5, ty: -148.85},
						transform: [-2.5, -148.85, 1, 1, -0.041, 0.041, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_arturito_weapongstick",
						instancename: "weapon",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 3.9, ty: -151.35},
						transform: [3.9, -151.35, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_arturito_weapongstick",
						instancename: "weapon",
						matrix: {a: 1, b: 0.023, c: -0.023, d: 1, tx: -0.95, ty: -152.8},
						transform: [-0.95, -152.8, 1, 1, -0.023, 0.023, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 16,
						classname: "_arturito_weapongstick",
						instancename: "weapon",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 3.9, ty: -151.35},
						transform: [3.9, -151.35, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 19,
						classname: "_arturito_weapongstick",
						instancename: "weapon",
						matrix: {a: 1, b: 0.023, c: -0.023, d: 1, tx: -0.95, ty: -152.8},
						transform: [-0.95, -152.8, 1, 1, -0.023, 0.023, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_arturito_weapongstick",
						instancename: "weapon",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 3.9, ty: -151.35},
						transform: [3.9, -151.35, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bodycover_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.061, c: -0.061, d: 0.998, tx: 21.6, ty: -95.65},
						transform: [21.6, -95.65, 1, 1, -0.061, 0.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.428], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 6,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 29.45, ty: -105.3},
						transform: [29.45, -105.3, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.766, 0.469], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.034, c: 0.034, d: 0.999, tx: 13.45, ty: -94.8},
						transform: [13.45, -94.8, 1, 1, 0.034, -0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 17.4, ty: -96.6},
						transform: [17.4, -96.6, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1.153, b: 0.016, c: -0.014, d: 1, tx: 11.9, ty: -96.65},
						transform: [11.9, -96.65, 1.153, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 16,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 0.88, b: 0.012, c: -0.014, d: 1, tx: 21.3, ty: -96.05},
						transform: [21.3, -96.05, 0.88, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 19,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1.153, b: 0.016, c: -0.014, d: 1, tx: 11.9, ty: -96.65},
						transform: [11.9, -96.65, 1.153, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 17.4, ty: -96.6},
						transform: [17.4, -96.6, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "lineofknobs_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.061, c: -0.061, d: 0.998, tx: 33.8, ty: -102.75},
						transform: [33.8, -102.75, 1, 1, -0.061, 0.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.428], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 6,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 42.2, ty: -111.25},
						transform: [42.2, -111.25, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.766, 0.469], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.034, c: 0.034, d: 0.999, tx: 24.9, ty: -103},
						transform: [24.9, -103, 1, 1, 0.034, -0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 29.25, ty: -104.25},
						transform: [29.25, -104.25, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.637, b: 0.009, c: -0.014, d: 1, tx: 22.65, ty: -104.3},
						transform: [22.65, -104.3, 0.637, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 16,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 1.103, b: 0.015, c: -0.014, d: 1, tx: 31.05, ty: -104.2},
						transform: [31.05, -104.2, 1.103, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 19,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.637, b: 0.009, c: -0.014, d: 1, tx: 22.65, ty: -104.3},
						transform: [22.65, -104.3, 0.637, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 29.25, ty: -104.25},
						transform: [29.25, -104.25, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ring_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.061, c: -0.061, d: 0.998, tx: 6.85, ty: -43.85},
						transform: [6.85, -43.85, 1, 1, -0.061, 0.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.428], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 6,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 9, ty: -49.05},
						transform: [9, -49.05, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.766, 0.469], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.034, c: 0.034, d: 0.999, tx: 3.65, ty: -41.8},
						transform: [3.65, -41.8, 1, 1, 0.034, -0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.1, ty: -44.15},
						transform: [5.1, -44.15, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.1, ty: -41.55},
						transform: [5.1, -41.55, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 16,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.1, ty: -44.15},
						transform: [5.1, -44.15, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 19,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.1, ty: -41.95},
						transform: [5.1, -41.95, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 5.1, ty: -44.15},
						transform: [5.1, -44.15, 1, 1, -0.014, 0.014, NaN],
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
						classname: "_arturito_eye_hurt",
						instancename: "",
						matrix: {a: 0.998, b: 0.061, c: -0.061, d: 0.998, tx: 5.4, ty: -109.65},
						transform: [5.4, -109.65, 1, 1, -0.061, 0.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.428], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 6,
						classname: "_arturito_eye_hurt",
						instancename: "",
						matrix: {a: 0.989, b: 0.151, c: -0.151, d: 0.989, tx: 14.55, ty: -120.7},
						transform: [14.55, -120.7, 1, 1, -0.151, 0.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.766, 0.469], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_arturito_eye_hurt",
						instancename: "",
						matrix: {a: 0.999, b: -0.034, c: 0.034, d: 0.999, tx: -3.95, ty: -107.2},
						transform: [-3.95, -107.2, 1, 1, 0.034, -0.034, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_arturito_eye_hurt",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 0.55, ty: -109.8},
						transform: [0.55, -109.8, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_arturito_eye_hurt",
						instancename: "",
						matrix: {a: 0.782, b: 0.011, c: -0.014, d: 1, tx: -14.7, ty: -109.85},
						transform: [-14.7, -109.85, 0.782, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 16,
						classname: "_arturito_eye_hurt",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 9.3, ty: -109.8},
						transform: [9.3, -109.8, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 19,
						classname: "_arturito_eye_hurt",
						instancename: "",
						matrix: {a: 0.782, b: 0.011, c: -0.014, d: 1, tx: -14.7, ty: -109.85},
						transform: [-14.7, -109.85, 0.782, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_arturito_eye",
						instancename: "",
						matrix: {a: 1, b: 0.014, c: -0.014, d: 1, tx: 0.55, ty: -109.8},
						transform: [0.55, -109.8, 1, 1, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "wheel_walk",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 49.75, ty: -1.9},
						transform: [49.75, -1.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.428], [0.6, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 6,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.146, d: 1, tx: 46.6, ty: -1.9},
						transform: [46.6, -1.9, 1, 1.011, 0.145, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.522, 0], [0.766, 0.469], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.069, d: 1, tx: 51.2, ty: -1.9},
						transform: [51.2, -1.9, 1, 1.002, -0.069, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 49.75, ty: -1.9},
						transform: [49.75, -1.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 49.75, ty: -1.9},
						transform: [49.75, -1.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 16,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 49.75, ty: -1.9},
						transform: [49.75, -1.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 19,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 49.75, ty: -1.9},
						transform: [49.75, -1.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 49.75, ty: -1.9},
						transform: [49.75, -1.9, 1, 1, 0, 0, 0],
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
						classname: "_arturito_corto2",
						instancename: "",
						matrix: {a: 0.528, b: -0.915, c: 0.915, d: 0.528, tx: -32.7, ty: -115.1},
						transform: [-32.7, -115.1, 1.056, 1.056, 1.047, -1.047, NaN],
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
						classname: "_arturito_corto2",
						instancename: "",
						matrix: {a: 0.349, b: -0.603, c: 0.603, d: 0.349, tx: -44.3, ty: -119.15},
						transform: [-44.3, -119.15, 0.697, 0.697, 1.047, -1.047, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 20,
					},
				]
			},
		]
	},
	"arturito_punched": {
		type: "movieclip",
		fps: 30,
		totalFrames: 7,
		labels: {},
		layers: [
			{
				name: "wheel_walk",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 0.948, b: 0.317, c: -0.317, d: 0.948, tx: -34.9, ty: -6.8},
						transform: [-34.9, -6.8, 1, 1, -0.323, 0.323, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 0.917, b: 0.398, c: -0.252, d: 0.981, tx: -37.95, ty: -8.1},
						transform: [-37.95, -8.1, 1, 1.013, -0.251, 0.409, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 0.917, b: 0.398, c: -0.398, d: 0.917, tx: -34.9, ty: -6.8},
						transform: [-34.9, -6.8, 1, 1, -0.409, 0.409, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
				]
			},
			{
				name: "pants_1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: -0.026, c: 0.026, d: 1, tx: 6.6, ty: -4.9},
						transform: [6.6, -4.9, 1, 1, 0.026, -0.026, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 3,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.038, c: -0.038, d: 0.999, tx: 4.85, ty: -8.8},
						transform: [4.85, -8.8, 1, 1, -0.038, 0.038, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.487], [0.475, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: 0.022, c: -0.022, d: 1, tx: 3.65, ty: -5.9},
						transform: [3.65, -5.9, 1, 1, -0.022, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_arturito_pants_1_x",
						instancename: "",
						matrix: {a: 1, b: -0.026, c: 0.026, d: 1, tx: 6.6, ty: -4.9},
						transform: [6.6, -4.9, 1, 1, 0.026, -0.026, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_arturito_body1punched_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.1, c: -0.1, d: 0.995, tx: 13.3, ty: -108.75},
						transform: [13.3, -108.75, 1, 1, -0.1, 0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 3,
						classname: "_arturito_body1punched_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.079, c: -0.079, d: 0.997, tx: 11.5, ty: -107.45},
						transform: [11.5, -107.45, 1, 1, -0.079, 0.079, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.487], [0.475, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_arturito_body1punched_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.057, c: -0.057, d: 0.998, tx: 9.2, ty: -105.75},
						transform: [9.2, -105.75, 1, 1, -0.057, 0.057, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_arturito_body1punched_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.1, c: -0.1, d: 0.995, tx: 13.3, ty: -108.75},
						transform: [13.3, -108.75, 1, 1, -0.1, 0.1, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "bodyinsisde_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_arturito_bodyinsisdepunched_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.1, c: -0.1, d: 0.995, tx: 13.3, ty: -108.75},
						transform: [13.3, -108.75, 1, 1, -0.1, 0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 3,
						classname: "_arturito_bodyinsisdepunched_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.079, c: -0.079, d: 0.997, tx: 11.5, ty: -107.45},
						transform: [11.5, -107.45, 1, 1, -0.079, 0.079, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.487], [0.475, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_arturito_bodyinsisdepunched_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.057, c: -0.057, d: 0.998, tx: 9.2, ty: -105.75},
						transform: [9.2, -105.75, 1, 1, -0.057, 0.057, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_arturito_bodyinsisdepunched_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.1, c: -0.1, d: 0.995, tx: 13.3, ty: -108.75},
						transform: [13.3, -108.75, 1, 1, -0.1, 0.1, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "weapongstick_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_arturito_weapongstickpunched",
						instancename: "weapon",
						matrix: {a: 0.995, b: 0.1, c: -0.1, d: 0.995, tx: 16.2, ty: -163.15},
						transform: [16.2, -163.15, 1, 1, -0.1, 0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 3,
						classname: "_arturito_weapongstickpunched",
						instancename: "weapon",
						matrix: {a: 0.993, b: 0.118, c: -0.118, d: 0.993, tx: 13.25, ty: -155.05},
						transform: [13.25, -155.05, 1, 1, -0.118, 0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.487], [0.475, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_arturito_weapongstickpunched",
						instancename: "weapon",
						matrix: {a: 0.99, b: 0.139, c: -0.139, d: 0.99, tx: 9.8, ty: -160.2},
						transform: [9.8, -160.2, 1, 1, -0.139, 0.139, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_arturito_weapongstickpunched",
						instancename: "weapon",
						matrix: {a: 0.995, b: 0.1, c: -0.1, d: 0.995, tx: 16.2, ty: -163.15},
						transform: [16.2, -163.15, 1, 1, -0.1, 0.1, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
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
						classname: "_arturito_corto2",
						instancename: "",
						matrix: {a: 0.607, b: 0, c: 0, d: 0.607, tx: 8, ty: -167.65},
						transform: [8, -167.65, 0.607, 0.607, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bodycover_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.1, c: -0.1, d: 0.995, tx: 24.9, ty: -107.4},
						transform: [24.9, -107.4, 1, 1, -0.1, 0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 3,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 0.996, b: 0.087, c: -0.087, d: 0.996, tx: 23.1, ty: -106.3},
						transform: [23.1, -106.3, 1, 1, -0.088, 0.088, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.487], [0.475, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.074, c: -0.074, d: 0.997, tx: 20.85, ty: -104.9},
						transform: [20.85, -104.9, 1, 1, -0.074, 0.074, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_arturito_bodycover_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.1, c: -0.1, d: 0.995, tx: 24.9, ty: -107.4},
						transform: [24.9, -107.4, 1, 1, -0.1, 0.1, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "lineofknobs_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.1, c: -0.1, d: 0.995, tx: 37.35, ty: -114},
						transform: [37.35, -114, 1, 1, -0.1, 0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 3,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.079, c: -0.079, d: 0.997, tx: 35.4, ty: -113.1},
						transform: [35.4, -113.1, 1, 1, -0.079, 0.079, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.487], [0.475, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.057, c: -0.057, d: 0.998, tx: 33, ty: -112},
						transform: [33, -112, 1, 1, -0.057, 0.057, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_arturito_lineofknobs_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.1, c: -0.1, d: 0.995, tx: 37.35, ty: -114},
						transform: [37.35, -114, 1, 1, -0.1, 0.1, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ring_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.1, c: -0.1, d: 0.995, tx: 8.1, ty: -56.2},
						transform: [8.1, -56.2, 1, 1, -0.1, 0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 3,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 0.997, b: 0.079, c: -0.079, d: 0.997, tx: 7.35, ty: -54.8},
						transform: [7.35, -54.8, 1, 1, -0.079, 0.079, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.487], [0.475, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.057, c: -0.057, d: 0.998, tx: 6.25, ty: -53},
						transform: [6.25, -53, 1, 1, -0.057, 0.057, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_arturito_ring_x",
						instancename: "",
						matrix: {a: 0.995, b: 0.1, c: -0.1, d: 0.995, tx: 8.1, ty: -56.2},
						transform: [8.1, -56.2, 1, 1, -0.1, 0.1, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "eye",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_arturito_eyepunched",
						instancename: "",
						matrix: {a: 0.995, b: 0.1, c: -0.1, d: 0.995, tx: 9.25, ty: -122},
						transform: [9.25, -122, 1, 1, -0.1, 0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 3,
						classname: "_arturito_eyepunched",
						instancename: "",
						matrix: {a: 0.997, b: 0.079, c: -0.079, d: 0.997, tx: 6.65, ty: -119.6},
						transform: [6.65, -119.6, 1, 1, -0.079, 0.079, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.487], [0.475, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_arturito_eyepunched",
						instancename: "",
						matrix: {a: 0.998, b: 0.057, c: -0.057, d: 0.998, tx: 4.6, ty: -118.8},
						transform: [4.6, -118.8, 1, 1, -0.057, 0.057, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_arturito_eyepunched",
						instancename: "",
						matrix: {a: 0.995, b: 0.1, c: -0.1, d: 0.995, tx: 9.25, ty: -122},
						transform: [9.25, -122, 1, 1, -0.1, 0.1, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.548, 0], [0.5, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "wheel_walk",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 0.633, b: -0.775, c: 0.775, d: 0.633, tx: 49.7, ty: -1.9},
						transform: [49.7, -1.9, 1, 1, 0.886, -0.886, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 0.734, b: -0.68, c: 0.68, d: 0.734, tx: 48.2, ty: -2.85},
						transform: [48.2, -2.85, 1, 1, 0.747, -0.747, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_arturito_wheel_idle",
						instancename: "",
						matrix: {a: 0.633, b: -0.775, c: 0.775, d: 0.633, tx: 49.7, ty: -1.9},
						transform: [49.7, -1.9, 1, 1, 0.886, -0.886, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.52, 0], [0.772, 0.488], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_arturito_corto1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -29.85, ty: -116.15},
						transform: [-29.85, -116.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"arturito_wreck": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "wheel_walk",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_arturito_wheel_fly",
						instancename: "bot_1_wheel_1",
						matrix: {a: 0.948, b: 0.317, c: -0.317, d: 0.948, tx: -34.9, ty: -6.8},
						transform: [-34.9, -6.8, 1, 1, -0.323, 0.323, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "pants_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_arturito_pants_12_gfx",
						instancename: "bot_1_body_2",
						matrix: {a: 0.959, b: -0.284, c: 0.284, d: 0.959, tx: 1.25, ty: -4.9},
						transform: [1.25, -4.9, 1, 1, 0.288, -0.288, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "ring_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_arturito_parx_gfx",
						instancename: "bot_1_body_1",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.85, ty: -81.9},
						transform: [-2.85, -81.9, 1, 1, 0, 0, 0],
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
						to: 0,
						classname: "_arturito_eyeredou2t_gfx",
						instancename: "bot_1_eye",
						matrix: {a: 0.904, b: 0.424, c: -0.424, d: 0.904, tx: -16.35, ty: -108.5},
						transform: [-16.35, -108.5, 0.999, 0.999, -0.438, 0.438, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "wheel_walk",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_arturito_wheel_fly",
						instancename: "bot_1_wheel_1",
						matrix: {a: 0.633, b: -0.775, c: 0.775, d: 0.633, tx: 37.9, ty: -21.15},
						transform: [37.9, -21.15, 1, 1, 0.886, -0.886, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_arturito_wheel_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "wellanima",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_arturito_wellanima_1_x",
						instancename: "",
						matrix: {a: 0.961, b: 0, c: 0, d: 1, tx: 2.65, ty: 0.75},
						transform: [2.65, 0.75, 0.961, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_arturito_pants_1_x": {
		type: "bitmap",
		asset: "_arturito_pants_1_x",
		scale: 1,
		position: [-53.05, -53.6],
	},
	"_arturito_body1_x": {
		type: "bitmap",
		asset: "_arturito_body1_x",
		scale: 1,
		position: [-52.7, -66.8],
	},
	"_arturito_bodyinsisde_x": {
		type: "bitmap",
		asset: "_arturito_bodyinsisde_x",
		scale: 1,
		position: [-39.35, -67.05],
	},
	"_arturito_weapongstick": {
		type: "movieclip",
		fps: 30,
		totalFrames: 5,
		labels: {axe: {from:0, to:0}, mace: {from:1, to:1}, gavel: {from:2, to:2}, bat: {from:3, to:3}, hammer: {from:4, to:4}, },
		layers: [
			{
				name: "Layer 10",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_arturito_weapons_weapon_hacha1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.039, c: -0.039, d: 0.999, tx: -0.05, ty: 0},
						transform: [-0.05, 0, 1, 1, -0.039, 0.039, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_arturito_weapons_weapon_maze1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.039, c: -0.039, d: 0.999, tx: -0.05, ty: 0},
						transform: [-0.05, 0, 1, 1, -0.039, 0.039, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_arturito_weapons_weapon_bat1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.039, c: -0.039, d: 0.999, tx: -0.95, ty: 9.9},
						transform: [-0.95, 9.9, 1, 1, -0.039, 0.039, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_arturito_weapons_weapon_hammer1_x",
						instancename: "",
						matrix: {a: 0.999, b: 0.039, c: -0.039, d: 0.999, tx: -0.05, ty: 0},
						transform: [-0.05, 0, 1, 1, -0.039, 0.039, NaN],
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
						actions: function(self){self.stop();},
					},
					{
						from: 1,
						to: 1,
						actions: function(self){self.stop();},
					},
					{
						from: 2,
						to: 2,
						actions: function(self){self.stop();},
					},
					{
						from: 3,
						to: 3,
						actions: function(self){self.stop();},
					},
					{
						from: 4,
						to: 4,
						actions: function(self){self.stop();},
					},
				]
			},
			{
				name: "Layer 11",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 1,
					},
					{
						from: 2,
						to: 2,
					},
					{
						from: 3,
						to: 3,
					},
					{
						from: 4,
						to: 4,
					},
				]
			},
		]
	},
	"_arturito_bodycover_x": {
		type: "bitmap",
		asset: "_arturito_bodycover_x",
		scale: 1,
		position: [-41.05, -66.65],
	},
	"_arturito_lineofknobs_x": {
		type: "bitmap",
		asset: "_arturito_lineofknobs_x",
		scale: 1,
		position: [-23.15, -59.1],
	},
	"_arturito_ring_x": {
		type: "bitmap",
		asset: "_arturito_ring_x",
		scale: 1,
		position: [-53.85, -15.85],
	},
	"_arturito_eye": {
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
						classname: "_arturito_eyered_x",
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
						classname: "_arturito_eyered_glow_x",
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
						classname: "_arturito_eyered_glow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.16,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.458, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_arturito_eyered_glow_x",
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
	"_arturito_attacktrail_x": {
		type: "bitmap",
		asset: "_arturito_attacktrail_x",
		scale: 1,
		position: [-31.65, -219.85],
	},
	"_arturito_weapongstick2": {
		type: "movieclip",
		fps: 30,
		totalFrames: 5,
		labels: {axe: {from:0, to:0}, mace: {from:1, to:1}, gavel: {from:2, to:2}, bat: {from:3, to:3}, hammer: {from:4, to:4}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_arturito_weapongstick2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_arturito_weapons_weapon_maze3_x",
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
						classname: "_arturito_weapons_weapon_bat1_x",
						instancename: "",
						matrix: {a: 0.994, b: -0.108, c: 0.108, d: 0.994, tx: 0, ty: 23.5},
						transform: [0, 23.5, 1, 1, 0.108, -0.108, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_arturito_weapons_weapon_hammer3_x",
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
						actions: function(self){self.stop();},
					},
					{
						from: 1,
						to: 1,
						actions: function(self){self.stop();},
					},
					{
						from: 2,
						to: 2,
						actions: function(self){self.stop();},
					},
					{
						from: 3,
						to: 3,
						actions: function(self){self.stop();},
					},
					{
						from: 4,
						to: 4,
						actions: function(self){self.stop();},
					},
				]
			},
			{
				name: "Layer 11",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 1,
					},
					{
						from: 2,
						to: 2,
					},
					{
						from: 3,
						to: 3,
					},
					{
						from: 4,
						to: 4,
					},
				]
			},
		]
	},
	"_nutsandbolts_boundingbox": {
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
						classname: "_nutsandbolts_bound_x",
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
	"_arturito_wheel_walk": {
		type: "movieclip",
		fps: 30,
		totalFrames: 13,
		labels: {},
		layers: [
			{
				name: "Layer 8",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_arturito_wheelwalkloop",
						instancename: "",
						matrix: {a: 0.961, b: 0, c: 0, d: 1, tx: 0.05, ty: 0},
						transform: [0.05, 0, 0.961, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 11,
						classname: "_arturito_wheelwalkloop",
						instancename: "",
						matrix: {a: 1.031, b: 0, c: 0, d: 0.99, tx: 0, ty: 0.75},
						transform: [0, 0.75, 1.031, 0.99, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_arturito_wheelwalkloop",
						instancename: "",
						matrix: {a: 0.961, b: 0, c: 0, d: 1, tx: 0.05, ty: 0},
						transform: [0.05, 0, 0.961, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_arturito_eye_hurt": {
		type: "movieclip",
		fps: 30,
		totalFrames: 43,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 42,
						classname: "_arturito_eyeempty_x",
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
						to: 1,
						classname: "_arturito_eyered_glow_x",
						instancename: "",
						matrix: {a: 1.171, b: 0, c: 0, d: 0.594, tx: 0, ty: 0},
						transform: [0, 0, 1.171, 0.594, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.458, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 8,
						classname: "_arturito_eyered_glow_x",
						instancename: "",
						matrix: {a: 1.171, b: 0, c: 0, d: 0.088, tx: 0, ty: 0},
						transform: [0, 0, 1.171, 0.088, 0, 0, 0],
						alpha: 0.45,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.458, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_arturito_eyered_glow_x",
						instancename: "",
						matrix: {a: 1.171, b: 0, c: 0, d: 0.099, tx: 0, ty: 0},
						transform: [0, 0, 1.171, 0.099, 0, 0, 0],
						alpha: 0.45,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.458, 0], [0.555, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 13,
						classname: "_arturito_eyered_glow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.563, 0], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 15,
						classname: "_arturito_eyered_glow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.132, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.132, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.563, 0], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_arturito_eyered_glow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.563, 0], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 20,
						classname: "_arturito_eyered_glow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.132, tx: 0, ty: 0},
						transform: [0, 0, 1, 0.132, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.563, 0], [0.484, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 42,
						classname: "_arturito_eyered_glow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.563, 0], [0.484, 1], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_arturito_corto2": {
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
						classname: "_arturito_corto2_1_x",
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
						classname: "_arturito_corto2_2_x",
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
						classname: "_arturito_corto2_1_x",
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
						classname: "_arturito_corto2_2_x",
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
						classname: "_arturito_corto2_1_x",
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
						classname: "_arturito_corto2_1_x",
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
	"_arturito_body1punched_x": {
		type: "bitmap",
		asset: "_arturito_body1punched_x",
		scale: 1,
		position: [-52.9, -66.8],
	},
	"_arturito_bodyinsisdepunched_x": {
		type: "bitmap",
		asset: "_arturito_bodyinsisdepunched_x",
		scale: 1,
		position: [-49.5, -67.05],
	},
	"_arturito_weapongstickpunched": {
		type: "movieclip",
		fps: 30,
		totalFrames: 5,
		labels: {axe: {from:0, to:0}, mace: {from:1, to:1}, gavel: {from:2, to:2}, bat: {from:3, to:3}, hammer: {from:4, to:4}, },
		layers: [
			{
				name: "Layer 12",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_arturito_weapons_axe_part1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.8, ty: -97.55},
						transform: [-0.8, -97.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 2,
						classname: "_arturito_weapons_mace_part1_x",
						instancename: "",
						matrix: {a: -0.757, b: -0.653, c: 0.653, d: -0.757, tx: 6.35, ty: -98.5},
						transform: [6.35, -98.5, 1, 1, 2.429, -2.429, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_arturito_weapons_bat_part1_x",
						instancename: "axe",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.3, ty: 22.95},
						transform: [1.3, 22.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_arturito_weapons_hammer_part1",
						instancename: "WEAPON_HAMMER_1",
						matrix: {a: 0.971, b: 0.241, c: -0.241, d: 0.971, tx: 1.15, ty: -96},
						transform: [1.15, -96, 1, 1, -0.243, 0.243, NaN],
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
						to: 2,
						classname: "_arturito_brokenstik_x",
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
						classname: "_arturito_weapons_weapon_bat2_x",
						instancename: "axe",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0.25, ty: -87.75},
						transform: [0.25, -87.75, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_arturito_brokenstik_x",
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
						actions: function(self){self.stop();},
					},
					{
						from: 1,
						to: 1,
						actions: function(self){self.stop();},
					},
					{
						from: 2,
						to: 2,
						actions: function(self){self.stop();},
					},
					{
						from: 3,
						to: 3,
						actions: function(self){self.stop();},
					},
					{
						from: 4,
						to: 4,
						actions: function(self){self.stop();},
					},
				]
			},
			{
				name: "Layer 11",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 1,
					},
					{
						from: 2,
						to: 2,
					},
					{
						from: 3,
						to: 3,
					},
					{
						from: 4,
						to: 4,
					},
				]
			},
		]
	},
	"_arturito_eyepunched": {
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
						classname: "_arturito_eyeredpunchedbase_x",
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
						to: 7,
						classname: "_arturito_eyeredout_x",
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
						classname: "_arturito_eyeredout_x",
						instancename: "",
						matrix: {a: 0.584, b: -0.653, c: 0.745, d: 0.667, tx: -9.85, ty: 15.3},
						transform: [-9.85, 15.3, 0.876, 1, 0.841, -0.841, NaN],
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
						classname: "_arturito_eyeredout_x",
						instancename: "",
						matrix: {a: 0.799, b: -0.601, c: 0.601, d: 0.799, tx: -8.1, ty: 13.35},
						transform: [-8.1, 13.35, 1, 1, 0.645, -0.645, NaN],
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
						classname: "_arturito_eyeredout_x",
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
	"_arturito_corto1": {
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
						classname: "_arturito_corto1_1_x",
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
						classname: "_arturito_corto1_2_x",
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
						classname: "_arturito_corto1_1_x",
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
						classname: "_arturito_corto1_2_x",
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
						classname: "_arturito_corto1_1_x",
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
						classname: "_arturito_corto1_1_x",
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
						classname: "_arturito_corto1_2_x",
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
						classname: "_arturito_corto1_1_x",
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
						classname: "_arturito_corto1_1_x",
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
	"_arturito_wheel_fly": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "wellanima",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_arturito_wellanima_1_x",
						instancename: "",
						matrix: {a: 0.961, b: 0, c: 0, d: 1, tx: 2.65, ty: 0.75},
						transform: [2.65, 0.75, 0.961, 1, 0, 0, 0],
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
						classname: "_arturito_bodybox",
						instancename: "bound",
						matrix: {a: 0.566, b: 0, c: 0, d: 0.625, tx: 0, ty: 0},
						transform: [0, 0, 0.566, 0.625, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_arturito_pants_12_gfx": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 13",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_arturito_pants_12_x",
						instancename: "bot_1_body_2",
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
						classname: "_arturito_bodybox",
						instancename: "bound",
						matrix: {a: 1.844, b: 0, c: 0, d: 0.882, tx: 0, ty: 0},
						transform: [0, 0, 1.844, 0.882, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_arturito_parx_gfx": {
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
						classname: "_arturito_parx_x",
						instancename: "bot_1_body_1",
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
						classname: "_arturito_bodybox",
						instancename: "bound",
						matrix: {a: 1.6, b: 0, c: 0, d: 2.04, tx: 0, ty: 0},
						transform: [0, 0, 1.6, 2.04, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_arturito_eyeredou2t_gfx": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_arturito_eyeredou2t_x",
						instancename: "bot_1_eye",
						matrix: {a: 0.908, b: 0.428, c: -0.426, d: 0.904, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1.003, 1, -0.44, 0.44, NaN],
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
						classname: "_arturito_bodybox",
						instancename: "bound",
						matrix: {a: 0.434, b: 0, c: 0, d: 0.434, tx: 0, ty: 0},
						transform: [0, 0, 0.434, 0.434, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_arturito_wellanima_1_x": {
		type: "bitmap",
		asset: "_arturito_wellanima_1_x",
		scale: 1,
		position: [-30.4, -28.55],
	},
	"_arturito_weapons_weapon_hacha1_x": {
		type: "bitmap",
		asset: "_arturito_weapons_weapon_hacha1_x",
		scale: 1,
		position: [-33.9, -132.9],
	},
	"_arturito_weapons_weapon_maze1_x": {
		type: "bitmap",
		asset: "_arturito_weapons_weapon_maze1_x",
		scale: 1,
		position: [-39.15, -140.5],
	},
	"_arturito_weapons_weapon_bat1_x": {
		type: "bitmap",
		asset: "_arturito_weapons_weapon_bat1_x",
		scale: 1,
		position: [-15.55, -180.1],
	},
	"_arturito_weapons_weapon_hammer1_x": {
		type: "bitmap",
		asset: "_arturito_weapons_weapon_hammer1_x",
		scale: 1,
		position: [-53.4, -139.75],
	},
	"_arturito_eyered_x": {
		type: "bitmap",
		asset: "_arturito_eyered_x",
		scale: 1,
		position: [-18.45, -18.8],
	},
	"_arturito_eyered_glow_x": {
		type: "bitmap",
		asset: "_arturito_eyered_glow_x",
		scale: 1,
		position: [-21.9, -22.1],
	},
	"_arturito_weapongstick2_x": {
		type: "bitmap",
		asset: "_arturito_weapongstick2_x",
		scale: 1,
		position: [-35.5, -148.6],
	},
	"_arturito_weapons_weapon_maze3_x": {
		type: "bitmap",
		asset: "_arturito_weapons_weapon_maze3_x",
		scale: 1,
		position: [-35.8, -157.25],
	},
	"_arturito_weapons_weapon_hammer3_x": {
		type: "bitmap",
		asset: "_arturito_weapons_weapon_hammer3_x",
		scale: 1,
		position: [-44.15, -162.1],
	},
	"_nutsandbolts_bound_x": {
		type: "bitmap",
		asset: "_nutsandbolts_bound_x",
		scale: 1,
		position: [-55, -55],
	},
	"_arturito_wheelwalkloop": {
		type: "movieclip",
		fps: 30,
		totalFrames: 4,
		labels: {},
		layers: [
			{
				name: "wellanima",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_arturito_wellanima_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.75, ty: 0.75},
						transform: [2.75, 0.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_arturito_wellanima_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.75, ty: 0.75},
						transform: [2.75, 0.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_arturito_wellanima_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.75, ty: 0.75},
						transform: [2.75, 0.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_arturito_wellanima_4_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.75, ty: 0.75},
						transform: [2.75, 0.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_arturito_eyeempty_x": {
		type: "bitmap",
		asset: "_arturito_eyeempty_x",
		scale: 1,
		position: [-18.45, -18.8],
	},
	"_arturito_corto2_1_x": {
		type: "bitmap",
		asset: "_arturito_corto2_1_x",
		scale: 1,
		position: [-29.35, -27.8],
	},
	"_arturito_corto2_2_x": {
		type: "bitmap",
		asset: "_arturito_corto2_2_x",
		scale: 1,
		position: [-20.15, -29.85],
	},
	"_arturito_weapons_axe_part1_x": {
		type: "bitmap",
		asset: "_arturito_weapons_axe_part1_x",
		scale: 1,
		position: [-32.15, -34.9],
	},
	"_arturito_weapons_mace_part1_x": {
		type: "bitmap",
		asset: "_arturito_weapons_mace_part1_x",
		scale: 1,
		position: [-36.8, -40],
	},
	"_arturito_weapons_bat_part1_x": {
		type: "bitmap",
		asset: "_arturito_weapons_bat_part1_x",
		scale: 1,
		position: [-12.7, -76.15],
	},
	"_arturito_weapons_hammer_part1": {
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
						classname: "_arturito_weapons_hammer_part_1_x",
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
						classname: "_arturito_weapons_bodybox",
						instancename: "bound",
						matrix: {a: 1.072, b: 0, c: 0, d: 0.689, tx: -1.3, ty: -0.15},
						transform: [-1.3, -0.15, 1.072, 0.689, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_arturito_brokenstik_x": {
		type: "bitmap",
		asset: "_arturito_brokenstik_x",
		scale: 1,
		position: [-17.1, -89.8],
	},
	"_arturito_weapons_weapon_bat2_x": {
		type: "bitmap",
		asset: "_arturito_weapons_weapon_bat2_x",
		scale: 1,
		position: [-15.55, -53.95],
	},
	"_arturito_eyeredpunchedbase_x": {
		type: "bitmap",
		asset: "_arturito_eyeredpunchedbase_x",
		scale: 1,
		position: [-16, -14.95],
	},
	"_arturito_eyeredout_x": {
		type: "bitmap",
		asset: "_arturito_eyeredout_x",
		scale: 1,
		position: [-15.2, -18.75],
	},
	"_arturito_corto1_1_x": {
		type: "bitmap",
		asset: "_arturito_corto1_1_x",
		scale: 1,
		position: [-21.5, -27.9],
	},
	"_arturito_corto1_2_x": {
		type: "bitmap",
		asset: "_arturito_corto1_2_x",
		scale: 1,
		position: [-19.7, -28.5],
	},
	"_arturito_bodybox": {
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
						classname: "_arturito_bodybox_x",
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
	"_arturito_pants_12_x": {
		type: "bitmap",
		asset: "_arturito_pants_12_x",
		scale: 1,
		position: [-66.2, -53.6],
	},
	"_arturito_parx_x": {
		type: "bitmap",
		asset: "_arturito_parx_x",
		scale: 1,
		position: [-72.55, -75.6],
	},
	"_arturito_eyeredou2t_x": {
		type: "bitmap",
		asset: "_arturito_eyeredou2t_x",
		scale: 1,
		position: [-20.6, -20.65],
	},
	"_arturito_wellanima_2_x": {
		type: "bitmap",
		asset: "_arturito_wellanima_2_x",
		scale: 1,
		position: [-30.4, -28.55],
	},
	"_arturito_wellanima_3_x": {
		type: "bitmap",
		asset: "_arturito_wellanima_3_x",
		scale: 1,
		position: [-30.4, -28.55],
	},
	"_arturito_wellanima_4_x": {
		type: "bitmap",
		asset: "_arturito_wellanima_4_x",
		scale: 1,
		position: [-30.4, -28.55],
	},
	"_arturito_weapons_hammer_part_1_x": {
		type: "bitmap",
		asset: "_arturito_weapons_hammer_part_1_x",
		scale: 1,
		position: [-40.25, -27.85],
	},
	"_arturito_weapons_bodybox": {
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
						classname: "_arturito_weapons_bodybox_x",
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
	"_arturito_bodybox_x": {
		type: "bitmap",
		asset: "_arturito_bodybox_x",
		scale: 1,
		position: [-30, -30],
	},
	"_arturito_weapons_bodybox_x": {
		type: "bitmap",
		asset: "_arturito_weapons_bodybox_x",
		scale: 1,
		position: [-30, -30],
	},
};
